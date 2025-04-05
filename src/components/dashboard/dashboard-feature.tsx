/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "47NeGa1Y9awkL1cdSieuJ8MPSMCpxDwg4JbNFr7RuNSpJehTFZ3Cei3ZLo6waMuZ3YPbL8eQ6jjEJopU3Xy9dTok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fY56Hhu2ewTGAGkNFEDbC5Czmv6wWz3fdFWenW54FmsydJNLFYD3gVjGPUpsiAJJXTg4efAJD2rPeo7PpmoLQKx",
  "key1": "3wz9VWvX68UgCByw2haua6Rk8bfkpZFNLfw6ZcD3oyZpJgMzyzrFCPJaKySGi4QxvnxkjSRKcGhMUTLbyTK5Tsv",
  "key2": "5Mo6L7xigpPZfNvdShgqDei2a1K31PieBVD8hgwGCSaoDUKo8vBNSPmLEMa9QqUBrvCe5t1GR6GGhrZckuMHzsS4",
  "key3": "3MS34amkKkvKzkNpL24j4VKFRGkqFCoJ5d3uGzH47VL2ad6bscna9bUbDrTntJWpb6d2KN8TL4L1ETmWZ761CrsX",
  "key4": "5zte6JZqxoSz5zbUoySzgVnbfxEpSqPkij4DJpgVCNC8uSW9HaQXPZBzmDNLbpweB5eXSaRDRJr6Xzdg9A28uwmU",
  "key5": "34ig3YAVP6Gvcj3s9uxfxYzagGukLZyejxjXBjFgq5LqtLxH32sGReo9oFQQRJRNBjciVSGfVG9BWdw4BgWu9pgL",
  "key6": "3QzrgaZGYQgwzTtpwv63q2Wy5LEM41NFMo1i9huNzKyDfcHs184vbNWbN4Sz2dH664SxxnPxL7jc8EWXRNGjA3E9",
  "key7": "63ufSYgVRVJsnMhFKQmEsSuDt844Jvb6Cy7UuSdw5BxeapboV7x4at3GHo1dWyP7LE87FdRDEPKF6KjEEmsL1kWi",
  "key8": "2qf8Y8X3d1KkZF2SoRUD32m2y3MS5KUKn5q7MNBdpGUWrAsMZ4vgYusw7FLhjdyBAW7TNCAxYgv2xmW5Vkb3wrr7",
  "key9": "319WfqcnoD3HmhbWTXy5bvEiH9ZYzer9F1MNg7ScJxHiz2UL7vatMwnWoZUjgqAuRAcC86H9uBZrCYtNsP7iuwZL",
  "key10": "66ZwVdK5AfKfkdLfmbmo9JJRwDSFpDBSytS2rPcXjaRPJrKh6TwjS5cEEcpwc2RMVAFPW1mbcBszBkG9GAbyNhfQ",
  "key11": "5q2KeFCiUt4Mw7Nu2cCQ82XyjBXXsJVdbMqhJJ6MTZaDDQ8fT5qqy25SgbFTzUJ4p9d1MG5wDGYVpf8vktrmMHPe",
  "key12": "Q3sQZSh1E3jHmhcZCY5tvFLNW3RCuHPrM3m5byrWzxffcPgkBPTF6N85ss9sVfPtWFr2kfH3kbFwbcdWZayv5Mk",
  "key13": "62cmKnJ7Wq5qe7WCPNU9K2BMdWQsxPAhpvSK1sxjyM3XMBHQBDbJkEaZ1CoxudaNWfHnQy5gnmdbarQrUMSR4MXz",
  "key14": "4WdmCYEJLvitU5DBQidVnwyKHrDVFhLJzqsvE8dFRRAFGJoxwAySzNBdAntmRNHFZaoXu7pEtyH9yuvGKncMoy3R",
  "key15": "51aZxwcAe2GM2gWv2qoJXqoEbHwkcHAMVZXwaBTiHmsRDzNSXUXEgSAyyJyAb6GAkiUNsTqkFRrXTxUzPE9Xtp92",
  "key16": "2zfSNegUUrgn1vmioXM1owQ4VcJWN5GibHHN8juMyKujUNGnjpEmfvBYqAYv9rohtsWArXUo7JxtMU6FELFNKWvE",
  "key17": "2hxeLqgGCTcVga2coKgobKiYvENBXPq2a9VhgEcSBK53XVqwJqfWvyXsnw8bZN2a6aJxGC3g9DyvUsp2PJYfDk1i",
  "key18": "2fHJ9NFnQPxvXo99j1wXk4r7yGgUYFSgJqiePcLMjiyWTFWqJ68KVipW21zwaPYrcfwU9rTXcmJSxLxkm397LURq",
  "key19": "5X6B9tH17VNnSntio9z2CWzBB4ymLQZimqCDUQ76xSXdryYJabvo5FvK8EQRwj5YVwC5pJkYh2QuiuojBjGudgxd",
  "key20": "3Eg3JauEM4KFRBqvcoXN1Uepcmzse9MudtJTqp7eYUYpjmGsu8JWc8exDn55DBGYZrahynTSMyquf782gDqWCsEp",
  "key21": "DKx6wNzaqtbuBk4pznKbjAkEN1TBpg9hvpvS26sgZZMptwWx19vtCE23Vk5kH4UsVmtpKPrJXsR7T4DELDkL34N",
  "key22": "53t7PNCWLp53YdZU88ktypZ4GzoHyNpdSxXZBXgAanj3YZxdgf9mCYNXP4UUozDBhuNRieqch69GDC1sRcu27v3z",
  "key23": "5wDj7kQN8UnV4kh1CL3dr7SnePwQKh3p14K2mdexA3wRwtjh9s7XDGFU319tbsse8HNHDKvo9GhxohpHp3idsZyM",
  "key24": "53dnEh7ugsny4xDwC2WhHT6ButPKGuU5wETL3w548fbvDgR35mRKoYqNXmErmZaMUF8iKwKp68rJAJX1DrMRTUkG",
  "key25": "2vfJTrv4KUmA8yLUMmdFPpjsfz8yVmFAeNtSH6kyPUssr64aKJ7tR37pMgmeSUbJU2th5kYEk7Cf1huFa6aAyZ2R",
  "key26": "2bwXPTDm4dzGWSex2WY5qvA6ZZsbVMurc11HuXS8tsG2BbfW89kAjwEMc8Uuzj6YwbSZrWW7G4217AQyA6JFVmRz",
  "key27": "2s8ytTneioAmYX2VDMgLatNRcLo1ft4xpThg9TBNTFFbaErmnkETpAMnT1Hanhs75rcihPH82oMq2tc592c4YKri",
  "key28": "62beLH6XkPGgowrkcJBpoRw5zstiFxXiutSXh4tXGF8dg7fkkEkibYPHLVVYX1UuG3o2wSR8agibyA6DfsTwcRyz",
  "key29": "27z9jtJHbJhZ3um8v8WnqfuZraHhWqe69zcjjocEfSkHbyer3fMLciQm4hDeUqnbb2cS2HWm1ME64pUH65B2yGwY",
  "key30": "2fAP8M9LZGM1yhF4CXXkwiodVRpXWWL7zbSKCM4sh2kqxKgWi7jMXpWXELfrbznxNszapP4VyontXKovisAUPGcq",
  "key31": "3gUnyfSHqa2SDA2h8pzNDj3WYRXZHnbHkb2Y36aJiB8rNtHYMYGSo4qGYfkqCJEpDco5nc1P9ybhKhV9oeEapkqj",
  "key32": "2MdKMRG1EENfFkXBbDvF51YWfzp35KyFmyJGTyuDeZp7K8xNsMJFsCiKxcDnMJrkzyTneNYvMPxLioUV5MGhnvt8",
  "key33": "GwB7xcgvqktE6eFiAumfp2XsCfT9iDuJfWNy2Bxm5bwsbPxyjtuzjtxHNf5kHSDU3vTK2DCJGKJxgWnPrqs8qNW",
  "key34": "44A2thq7jQuhLYrQvXuBkMnZ1aPLzyZjmDVdoST8dFUfZe4wp6D9ACPqFNVPHqe95AuH3ypMKw1XRUa2MufuCFNr",
  "key35": "5xMvGkSRhvpMJiWWpXaJrmsfoeVGATzu26B5fG85dr4rqxBV8ddVCDYD7eNnhoLDkkENtUimujg9Zz3q394xZVsg",
  "key36": "4kF6uPLzCYMgY73hEQFyntiXs28E2EkWzP9bdRV3v4UZXdzCPn8oBfpDNDuiTxdyS2oNxKAsrp36GoioytaXGTEJ",
  "key37": "5TXcRrEFwJP9veu6KjdtdkBGtbur8CPGTkFkJehmW3UkhPceDybe3HVyjLjJmKfEHMkVbh5mrb1Sm26yUGUt6ruR",
  "key38": "LEoZ5NeAVXri65TUvurk8otJC3dTy1FxScMVREnseHgxquiGarKsrU4DN34xEsBTX4tZeVxQMoQUzGu4si1pwsc",
  "key39": "31xfFQET7pBicTuzN3KB23ymcpRmf8b9vz5JwRLwgo2WUmDQidjMLpJQgfEzWsoUK1hsRu2gMy1dqeu2WxQTpRq2",
  "key40": "2W98SqSxS9Wn1w8aNCfCxuWN6wxNmZVvRaLgWbwzcppi5RphzGFGLNMZGsA6hJ6dktkfE9PCaCUHRU6y3XyCNxag",
  "key41": "Gb4PQhQ7Sj2JSoPDwcXc3Tim62uREwV1MT2kYoBQdvhG4952dtgts6eWagtkHMoYvKMbB168aZAEih5jqTfMTji",
  "key42": "c4fjF4WZmhMpmpC86TpxpFEFoh4HHXfLkgAq1mep9LE195GoVDvRY146z85vSHwLJe1X36fZpdQ4eTj7kzVAMP9",
  "key43": "5y25tU2NTP1GUnwEwG1Pz8rMV6s4NmxPiJdo9wcceky1dxffaKfqKgQcYJb2kHjeTx3trJQa8hLzWsAcFHy5ndph",
  "key44": "2rXwwyvqe2yQtYTrHEWNesecF3c94NcVRg9x7WYz2Cpo9QyKufUKgNkgk7nRDECkbETeDYrdDof7xEbmdwEtu3q5"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
