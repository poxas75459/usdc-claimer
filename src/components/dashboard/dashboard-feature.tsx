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
    "mjxFH9FT4TNgwaN1y7opj2JL1BiZtCEkAf2gJFTwLAV5kp7a5X4a6PzjmvLv6Pyo7SgEQ6Wjhc6o4uNwhQuycdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kxQGr4oRJ4RQFvRiuAdDFqwwTuCz7TaBp3ZQJYH7PVcMKMsRo59R8emdtuC5eEf4PhsjWUEK3EcHtTdVVURnrUd",
  "key1": "3SwekRWFsy36ba5fjemvtgtdjb4f2dxsdThYSYWfsBGchyHBdMbuastAZ4q3JrgjVnxxHApLiEJpWq8n8MZasyNR",
  "key2": "4n49U5nmD8SY3wcDdwUCpcie4Nd5TrE9qLrEwFefnDr3sm7aPp6f3NkK5KdT8b5yTwnrdBiyGcVmpSPH4qopinpJ",
  "key3": "4Ws2Hb5dYPx3REBCqD1VXj1MdA5zK5grY3bNuuTpsJDfmbTMJe26ipRN8UDXEaRsFCXwAqVFy4fVG8JGfnbDdDSQ",
  "key4": "1VZd1kBrLdE8L5GnjVPvn6TwxaXFSMgtqejsh2VCPQJ3rKXxwCg86fo4pJchev9aLHQwjYucfKRHbmooR768fm",
  "key5": "ZHErwV6vMGYNWkHxzNw41ZEizCWMwcNux6YxPHHqEjAF6fxvtCHXqWyvv2vAhqQNpbpHpbD2xPVnVrbVbxPtoQp",
  "key6": "3vFVAZQZ7Gx8H977arFgtJ3HpvNBgTV1vFHCzSUpdq9Kn2W5qw4wBB7sQ1fgsrJ38TVJs3qpTFiA6pKVFboB26zA",
  "key7": "5tNYk3MkvWBEDH6fV49TnJTUYUqfuhNKGhY3UfiT8fUVcjjaBFKvPSrPqxGy3iseNhVUiBvgozJ3bPzCLkkwPHGC",
  "key8": "53NMJjTqtH8aq6GjNFTNjJhm6fgbfTQ9QCpV8ofMPuv4DRcLGF6aLcj1wpJ72LtkbHf6BGa7GeefiJqyJKXkz5zt",
  "key9": "328gQzwAdUxK6hcc52czt5vBqFUvFRgXg1YswmD3QCqhhPTEMR6TqydkBPmAdqtiBXuws3EpTA3cs3DhjAppAxpu",
  "key10": "2zJCcX1X41rHPoNB2NimqBa1JZLugi7X7hMYvKhSBMMgcH4yaHT2rYAwrHiejmu2a2uSDp4MDvePhMUR945zrB1q",
  "key11": "4mxkKiTXEnt26PcTLDNBfw58LeNTtFgmTzCr1ePQPExbBRoHkWqWUXzr8ejusgLBGhyFVu2RszCv8At521xxhQcf",
  "key12": "5TDac7WqiAvBdQ9iEfXMAGUoEwnd7VVn8S4aR9kYsMxbnunuuruS3Ff4ajiGmvK5pDC3n1GtiqDgGL6ZuAaneGRq",
  "key13": "4X74an7yK4BTjwh4WHQyYgJxHPuPnh4B3YRSDykg5qLHp8DNBTPr2ZHqkyNuuaxR5ZVEvMj3RXSP1SEgoo7TE3SN",
  "key14": "4TLdivTasTGAZhJoJ2kG9mJHZRzQxWqKijNWeYhPonzxsUm1dBEPdiYr8pFyfs52dUNn5RJBMMup5nVBWLUmLvLG",
  "key15": "67igrQDcDaUCDY3ur86Ba5VsbMofbVKNBHqt1akqRJerhML2mo8wXYMaoTkSDZn9vvmT2CmKFuZHVRQPcAY6KX9q",
  "key16": "3ZjW9CXf7ZmZfd93S1HqsrFwffwrVckqdSdGKXpEG2mPj3SfkVdem4i5TabaLPPpR2iCPfF5GJRyCMwm3t1Uc3yc",
  "key17": "3Hn1Kmo1T6Sqssx7rJJKnFTGirnbX4K7R5S5VtGzfKkLQ4UGbsAzR8Br2JWkYSB5UgfRe75Nr8ooFhtEb7kkiQft",
  "key18": "5sHgvvfLb7HLK9gkkGzSLjhAvqoHc4WRScuncKnkDYcttcxUiqbGGG5nV5Lo9XJKoY87GRp7gYM4eFcf9e97g6eS",
  "key19": "5QkQsKmMWihbqyfTMpGwKsZRy9119YoFoi8kWxMeZFERBDQ9fBsEJvvgwETABzF9NntDCtLA8EkS3h875P9FwS3T",
  "key20": "4ZZDH5ZkivJkK9huZoKV39hkSThkxgUzrEhSB2vpWsFwyKabWd1T9DFkHDmrpEVn2ebeAkQHAf5KN4Z36TbABMF7",
  "key21": "23x2Jh8kovqFcXBKeojhuCmp5AYwLsaHp58eDYo7eFuqKUMVwxocdn8cFFB2buzNzXhYX6r8i8qDzCNyB92PK278",
  "key22": "4AhH9kow7vjedqMTTXMuSxE7GreLAgUSne2nWAMTWYmbWHKFNjX8eExdagMzu1Wk9EcxQ2ncVaTASzVYnLjcm7Gf",
  "key23": "3J2qythxvTYAixPjNWZPZR2ea8XusHM1CixWaznjTB5sCa9D9Hsro8q7KYSGvFY45pwyo5muxb2kYPKAg2AvV1fN",
  "key24": "2xWk3VNNTHA5t7Vk12QC1m9fLZHvQahLKDzovohfj4DyhmqWpY1pV7RibS6n7BHtACcthZ3JQ6pVHBYg7qPxChWv",
  "key25": "62M1endZonKUJhmRTYMnXwsZ7AxJuH2rbHvTr4kAAfLnEGvPEnLLk9eqDbRCL8LdUj7GruCUaX9jQmbTXfG8K2DJ",
  "key26": "56PFtXnkrfBVFU91u1QxjiXu39Jt7Ygup5aZnf3YwmP7HASSA5z5YA1s3HwDHM4TjXcQ8CX2iKK1v4neHSqyyThB",
  "key27": "5vum43vHaPEaBTSs3PPTZeezhkE5foA3No4qjVQ2t1bSA7Le9vzg75tnWinXyfjMbuN9GPW8chz5PQoAB8iS7xNh",
  "key28": "4WpeGM36ko1NeC2rD4wFsGo8Ty8HD7scbyzTUMahpYVSBwNGi33n9q65FEKMkeXXPyVUkNCCN5mdn6oiTTm5nHTt",
  "key29": "5rNoz6KZAzRdzPTEP2EvgZBepic3NPkQ4aSjAvAwwRU3YFKFPmC7rbstyKYADLW4jiemuDkvXZGLEfSj57JamY3w",
  "key30": "hXQ55xfWiAF2qrEru3qM3wHnw23xvbo6SKdmFt45ruUnz7xuXbeuAMRf7rqbb4YWM5CXpCRSD59W7vNtvHKNSdZ",
  "key31": "gnSm82MZbDdQLjkAiZcZHHsHActAvAwYstzYgUnFdYSySVPwUwcZXEjXhCLxSznTrL5UbBDLVfWBWDhdn8nXZNa",
  "key32": "5iHFPFxKAKpzcDQ1VMBza5QCEBwGofTXfu5PLp56ESZWDom9amEvmDwbYssjaSRWWbiMD1mxA3e6ifT6H1wqXjtZ",
  "key33": "5xihqHu9EkwMitRyycygFp8bRpHfYPx2dQVg43zGwPkfMuaAb8EoWRMtYHyAkwrbfuwZokbW1MmnFqadZvxMeuYY",
  "key34": "2Afn3GX6z8tRsis5Adx4ikFVfW1j48CJ7fyvSWNaVEWoZZsUt12hZgCTrFkjcu1obXGJ8DNH4LBmq5hJoLymJf6A",
  "key35": "3nCinhzAaC9zDxGZMwbf26yQeAhLLHCpi3gvaEVbtTS7PtbZsT5C5y8gaC9mTpNjCutkQdiL8VGpvWkymjNw7R77",
  "key36": "4D4Et1QWBCAeMuC4mvWVf3nTz2Yxg81wtdwRmMnWD5YuQo6kezHCqKcryiAjVqTZQMa1tomdtCYZHi5h7fsE8jaF",
  "key37": "8aRHiCL3RKCbo8xKT7G4MfkdZcGMyx2KQMn77r17d9AGzb4e22CkQmruHzPxveBkz8e2V7Cgo2bqhf2wT2zb8xW",
  "key38": "4u43ha12pFDDMKMPY3napZaWvRrvjpDVTHSiuEMExajDEoVth1LmmamibPfC6gtbKnWj4Z2W2TunqMop5y1tw6K1",
  "key39": "5wfVjuCTm9FGtvE1CQCu1RdcG8TN7aiyYwznLriquLCsFmH7p8GcC47oSTt4ohqbdJYCGbW7mf7wcfa7f2NRULnS",
  "key40": "3ek2wg1WrLm5ZuEgjJdJWUFjYMY9gUk8jX3yzzsg3eSpc2xio7oix2CQsDz5Vn7NiuwyXNg6hiJbNJA4dTJ7mE7A",
  "key41": "3SkT29j2mZyfcrKb2oJi6ErwcnQgEPMUMoS666XEBAh2ZvJCepAPzj2hwrBzkbQcpgm5m3hiAWMAnnAUQFc2TVoN",
  "key42": "4TWki5MDe2oviE9To92nNUeq9oiFdF4zGzY574pJBmNN1ZauUZwugjv5PZkkS67mvN8TRvM8DQdm4z7iy7mwXwQY",
  "key43": "47xkJqj1VFWwwwds4eSo8dA34cK8mJMSy4S9qizqZ7d4KqA5zwwx87dRTwZXMBqLjV7RdmRkGWWe3eNuoiX3hpVq",
  "key44": "3464q25YyUbH7h4aZRk3g9j7rYu3GKa9RsnqH6ARsrxjTykKj21Q7n7jiGJLG9HLTkYFGsvEsgX6Wc4AKajYfXdM",
  "key45": "4jpMqPDnKAD2K46uuwe1mjsDvxw45VrwpQ4PqSbbToGWQmAEEe4BJGqvraHdQEuvdTV2Ry1bJkB6aCp5uJZ7gZHZ"
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
