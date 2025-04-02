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
    "4iFb1PQgj5LWfwZSdY1djYksZNwY3fBLEQ4GgDLw4CfjZzCTnXMAVdZjsBRzkCaJdBb5mVmtvVhxpnqd5VjrVUTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYyU2T1A2g6Efc58QRHsSPob8Wcw2FP1PYa4tEdbBF3RCC8GXX7P42ukTgSmtrWhD2ATGn8jE32r37xJoiddScc",
  "key1": "2mbTWwuvueKSmStNjr2gPCgzFSBNUCZPfZm2W94UmHjGE6wwY9dPUeLRwc81r8YvLJgb5wkPMY9M8eV2wCUaN1aB",
  "key2": "5V6wATBNqJd1yB7hr1c2K7azsG3NtLcj4nDnpc2j94zKgGVJa5gzs2LGwhTC5rhNC89TSqqrNphg6kqdKX4N4Mx",
  "key3": "5E87YJUWvtfo8JfBdS98HtWypJzf93YCmzmD4WwBPBoxDjfT8by1krLKrNqvZfxdvjBhktRjbSUHtcPZyeJjNQm7",
  "key4": "4wVy7YV7tWMzRBfi6TM8usbMkWH1ST7aNmt5jY3gaoDj6PY23HRQ7Sr5BctpSR2w8cXdgvnoNUPyL1ECshBKqGMy",
  "key5": "5BxZpFEndGTASyDoQ7eee7Eo3h3Fvsa39rND7FdLf8jb9KLNptwrMQ7df4zUC9cFxbupkBM7VgNbk6AC8nHNfCxT",
  "key6": "2ZGx95fLr6czBQEYvcoKoyjfYfF1LeniQDyEtFX8q5bm1MmxGVGTgm9Toh35JEj6LeEr6cPrEZUHAW2u5By3fDHM",
  "key7": "23EVmGdmtDCDdZZExquRQNZZLFeMFodFMV5VjjzJad9ugdQL4mTXFfh6J8ch1Dbow1tCBTidgm5FCVWR3zxCQngz",
  "key8": "4EbrYKeLN3DXdtC2xX4pzsvmL9verTtiD3yVToWjHQuLMP4hJdz8EBbdABpHTnaozWs4cNg1i9kCgNF45mSNAeuF",
  "key9": "65q9ZJb3bx87betWtihz7X7u1BaJQtzgjCJMDT5BjH4oHErx5tgURbYFwVMdgeDf7TVfad5y6eAZGL35PoMgBQz4",
  "key10": "4FU4kt4TTmdL9T93niqUaWTHEmdRQH8HQrHTS4DrPWoPPK6berWGRVnRyap1nAe7HoicRrS4YUzKbEoeMwKDiCNn",
  "key11": "2kh237SCuhZ5inY2ZBboaXoP5jNz7YTYxT4763UrS3YRFjuGBQ3zzfg7QWcYQC63DNR8TtW3Uvftddzr1pZiawQG",
  "key12": "2JK9phqp4ACbvSoqoXQ2mwWhnYvq4yB2VM4trazaqZVghsvRLMfmd9fgjM3vBt6cHveDrj71vfgoq4QBPb66a6qp",
  "key13": "62Bz56W7FKR5uPvUkoq5DQAwojVym5zyrjLJYeq3tWg3XMmKvmyw1D2aKzQEAgKWW2pKoMdV115S76R7eivGLSs6",
  "key14": "67JwtqWwFpCM8R3RkL8Ue9c3cqRQWDddr5QnEnRpirR8zrWTGfUCM45Tu51DvKfe5KPN7ERG78Cj1R4aJk8j5cCc",
  "key15": "4JnJyb4oabKLTg3h6dt3CBf46ZC7wsvgxT1Qsfp1ahBEwG7C7Hr1w8xg3n77ZDVhAi1zVa86B7Vhh5a5V76VsyRe",
  "key16": "XhxnmcKADhyfaoywNKwqKGMpYCatTpNo3Q46KfVtNkC5HrT7n9wUe44SgRTfeGe8nkXDWW1ykWqyRBDVJSRTb3y",
  "key17": "2bayony26QCjth7GdAan5qnUt6zZenMHxKA1JespNyxbyuWTRkSZCYHrZT7qrD2hMcSerjKUpGpRvNY2dkVnpz34",
  "key18": "2KNQZJWoiefrtuejv93aHK2aeEC3bS8tbDcEoEW4VY6EeQnzVqqtYfhbTukAxt3J1XeWtJqhKC6BjgYKhvXrnYS9",
  "key19": "2oMGUEqqTFHFWvHqKNSmqNomgzJr7yMDjRAA7NWhniMQXbou3K6sb39U5S3Yu4x7RvvQHoxAQszztH3LPGY6XqY5",
  "key20": "3eJuvdFEArSk1iBQzqTevTjNHQgox6nuF19sUBS9T49iAksd5z3hiZbA93Kqv1Gw3YJAZfM7vZd2PbwFgsoRQfUp",
  "key21": "4Sn61mQKBUZAyTPBdKXsnGaxvU5t6rULedvgj8jKYJUNReokef9a2SDxM2fsGPH7TmhjnDe5TNj9w5bTAysBqRwj",
  "key22": "4HbvHhfJZQL9g9CKYKP3bhWJWBjWPqqKvt1WvsNAuSqTjAYcoPrSdmV6RGMjJJfR4nqNWFe48ysoHHMkG8MXAMdq",
  "key23": "4Y4hSpYAvDsupxkidcHpBmAUNYitGCvyBXJmCgWoJ2UHAtbZ4f6FUifY18KJaxsNbdrMsQoHyFgbrLpEE6sEEChE",
  "key24": "589LHrBRmwbucgYS4wpfRuaAAhHgu4BuFHvVozBFSucaNVVHGgZvnbmEdUkghpYjvpNNqwDVPn8bu3sfUg4tuH54",
  "key25": "2PkAAFir9LDSp5wwjZamVqAZo2Mzaf2LEzQ91871za1mSCXWpRaAzvuTLUKhBejVTZQgL9zikFeKTGioQVJEfVJY",
  "key26": "JgFjDnZUptGuwVDSsA2pvBC6S7hQPc7bvsaEMVcVBmkDrLHsfwt3FqPKSzxkLGGTW927B5C6fEDVLkwB36Hj85P",
  "key27": "3Sev79A2qmArBhMzsRauq8iMgWRa2SwrXVAWNArbS87PE4vtc96hbtTXtyp6hNyW2hPiDh2qiq3cRKMtPXCTEESF",
  "key28": "2S236rfUufVwMMwBrrN1YU8uYnPHwKPjgSnJVEA2KHGJXr82domAjKbF3rswncu3SV7da5h5xPRphrnJjwwTWnu6",
  "key29": "4GtUYLB9oUadGVQE2PR9A82NwmYwpgTXJzk5pXCWs7QTgsA4nXmoXTPGMJfnXQUTSbqiEPdKnRd4wn4y68J5Kft3",
  "key30": "HA4WyJMbeQbuxFN3J82SwnUq5qf41p1osHodVtFR8ybsRbPYimDT3AfL3tuhiVtvHNeNsEM78LRvBJffmvjySWh",
  "key31": "x3wTPPBTkNiQAmXycma1ygANp3shMjAoa4AdnhsZeJUfd1FKqfes6rsgr4G3t7Wfbc1SWf1vk65RFQsHC5SfTRX",
  "key32": "4aDfitDwHVNcHaWqbvjJe7jineVgV1JqpzDHxViQWYr9AWq8CHJD12ZKohTH4P8cZfbcXVEvirJX1yfdUj1t5B1e",
  "key33": "2Ykt9PjojLDTKeFsQDZSihBQ7yvPoFxYcH7cw8CyWwXRgKvfUp28WCUHGqXYFHwfcdCvTn1C5cU6S1LELJCJQsps",
  "key34": "32oWRmQgJtAsCcb5eNzVSrMHWGYjuQgrLVRxz5PD8abn5htQ1VrhjCa4fX8vwZdYNdtoAJVe6C5Hi4t6bB7xUfZX",
  "key35": "5S9S3DFTDfw6nDKu5icdoVby3s4mKdVMxB4Hu4ghv7KA6VxjVrLhRxcPqmoysQW85HBftM82fwscB4fPbbrFyw5x",
  "key36": "26JDCwf3L4pSfezz92wdZGq92WWphozFaPxKMf4yrnz3nN4oAL1sKmqtb4U6wXu4QLAc7cYvXhU2mC2Zhnfzt1Ws",
  "key37": "4GDiAdUxrFLFkni2eZiJfbP11n5wea4aPDjrNsoeXyq7YiDVmsJiBsKNFm6CEWg1Tz7Lis4XfJ83UJVd5Qz2KZUV",
  "key38": "41ebHwhaW7MwRADZL8bsaXyLuQtnk5L7xfL1eLszz9nHprR52PHwd8e7Vs692VPBAgGQqYsPbcx6RT92hETjeJFx",
  "key39": "4CM3Rxt2whim5xGjSXm7BbF8xTP1fJaH9JGe3mFQLkWMkU7ZbXaPXt8hjQUdhu9S9VqqT14PWWHGb8cmNVKLZPLW",
  "key40": "45eLdQAWJqpYGAJDDWwhsSKJb3v2eL9a3qDZ5azFoAKDG7XxFKR89c8hHCydbTUoeV9nokf55KfWitu2sSnRPiSe"
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
