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
    "2Lhixniz1pCUQb8ZssEm4c93Wt8SBVcAMMXTQ8S9PPWkJxKMPHEPGnzP2TPbPcyonMte5NENBoLbbv5JShYdFaZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vE1uTFuAdCKiWWQpp5zN6Z8V5TPSZPvGkpgWHXjiTL84XswHGS68uLPtWFd4JFvqTQf14GTnuPBPHjYN8ZHUjEA",
  "key1": "43qondw2fTkrzH86nkroAGPGPFaJBVQmYpAKofL3CQd9BrLdDQLZBvD691M6HL6i1a7eVJByj8rijpxSZ3SwKDv4",
  "key2": "3Z1ZTS3eVzETQstWE6oMLBAHpo5LpNZKkh5vpnqfZafMwyDbKJtbbCEEtZtzYbmUbYLuHrvR4NSnFk3Lmm87kmEj",
  "key3": "5EvTzpns8k9ERVSkfE9uRFbxgG4wnfjGXdMzdmsTnUZqC7PByVSxr4vanJ3fGegmak3oUJE6nQEduFwTSFdLfW8n",
  "key4": "qwMFyg32VECfmxcjLDVQwKihXdGdhTm2sZyB5pvgJaRLUg3MUXdEATX9Rz7v1BHampUZBfPE6dxjPAKAVsgnAT9",
  "key5": "57WVRFfUa4eUvNLVw85TAAeKoREPa7hNfu2aDxXJFjqr8snupu2fpfPmtDeZCXGBUVJwEvrnLGAuSSLzFg9axhut",
  "key6": "43UznTfZrg9XDU2wvpkF79EvgPbCemHWF9F5bCCDQFXb1NPUZskgzkVksnBBaRmQLDbKPQ1etxqGKbtPM5ja6usx",
  "key7": "rEA1DMKFaoscKoyL2w74BPYtqBYjsjn2FCSJwVKAvC7dJ3Pw8KQoxHS6zsPmmYueJw9kknzFxcEe7nFqdgCkk7c",
  "key8": "44gSGaQxs1wTR1bibByEbmb3F13vShRCJzYqwysmaijChnxEWRCfdAhV1YhDauytmjbVnWVffFyHeB2BvuxzYQzr",
  "key9": "3HFmAMufTqYKCLwx4Nd3ddisJdABw3pwfUAC6vJaKCkXxPTxgEG2vodQPFYePEunehxwf5XBF3Xb4K48o9CFSW6T",
  "key10": "5a9Rqm7aWZEhdLMUw5JAhU3AJR3zhkjfRDNBzVz2RfmVNxoSLNcAzKHsrf1xHCqXSL6D7DNqJ3gWF4ptqtumAE4Z",
  "key11": "9ksHtkAQ5nbREzXti1SKVj92kVk2oEa141wYj8tAhzUVgzJHCajaFjj6W6jMvNFg1azQrHda8CLZSmB9KnCVxuK",
  "key12": "2uCV6XhZgDmDpL2ZWXmL7tj7NUGCqdPfCbxwiryxWZLT72M7bM8V1CNPCRUe5duPEum8SmXsCpWc9qsCEyAGCbV6",
  "key13": "3zmXLajP1JgZtTUHi2ZPAeoTXfV2vLpkfBPx3BUKUzcg9J1gvyL3t1KHVL7Tnh7kSsubdMapvgjJ5oigvHvGQD5q",
  "key14": "2j8RyQQsQ5J57baNGQ4vaZXxXMj56Ty9d1pchftxnJrgBXCgKPf5JWs4Rp6uK1FVV6MMyHLY8PpPsevKb9bcExBx",
  "key15": "3fGGjRtAB4SN3Mv1m3wdmgMHXbbYYfAWdZpuuG9TvgXk6Wyfgx8WZa4CMQDpPo8Q6bCCYWnyW3159dR3boj21yaH",
  "key16": "51SxTve8JmT7ZQPcGEWZLtrsXnRMDdZJWDo44bG4tJ36JV8jsNAFYaEzyZ3RXBZPdy226iQb23D8i8sEKDLq1YnU",
  "key17": "4deukVRXcvJf2G8s5JjnLwBViCSVgG1bPd52vsJDmhdtsrTF9kidPmNKj5QpywzggF5JzfxbKyCR45phAC3igUKZ",
  "key18": "2RByAhKmugXnHoapBnYeCN22JjfQBcF17wyDEGtsLZAvq8ebmjaoeHumpRD779J2tHtz1c3uFiDSYkRikso8f3Ar",
  "key19": "4rsYPkTAAJNEeUd1djTWCapYnztQLWXQq4GuRW2VVrTYtyBTtpkHfWa6Dp4QBYRrHVeVzgZAjnvBar2pMuixiLeT",
  "key20": "5BBFfnUKb3RsYc8ytB4MhfDUtuqJi29GnJHKEFXWKEgLqUwDMpJTERSgbCK7ifvo4ExZ1w5ALuVKAp1jMXZz9gzy",
  "key21": "2111y8PMhJaYUZifGRBkficRXQGiCkpFuQRha5Vum8LtmmjC5yVyqCaeHVjKsKTdG8qfRHYVV8itRCPiJNG2GKtc",
  "key22": "C3gwSJeBiCbdH35EUu9p8e32XoLGWStxcL8xh4AC9pZt2obNm61ruTHQtaoiXPW9Urim7a6SNBBi7R2bsUvGwyK",
  "key23": "b3sA48bP4h31RHSeL9SvrqJ4HKfytNoCEYGvQX7ZDfeBnmnmuAEqk44Xfnjj7mjoV9Lr8FZgUynXNgwcpENTH6N",
  "key24": "euqZLT5yLCje47ovXfoUtRNBeAUjMZKvCjs5nYMoUBprqt11GyZuonm4Zh1jG1Q9GzVWD86Xx2AYNe2q9dF6nFx",
  "key25": "3hs8AWPsL8krNyE2CvU9MrgGY9sPCCCfJWNZ6J14x6KqDM8pKwPo89YrLLUYJNKmJL9aQLu39wLqTgU6GBfjbmQk",
  "key26": "45M8DtjLpKKhUmSfZ7YwRWqXe2xEiwY2K9WUuT3mwgthMQkDPNmjVMykUc1WPJyfRCjY1McfRAt6JzvTj7aoDV8g",
  "key27": "2CyhRL5Machxs67Pu5Ehgu1mnSaLW9cPZgrVRbE1s8U8cWnKC7CAsAD9MqdkChaw8BoYKYXrDiBgSp4CBwEwSofG",
  "key28": "4qDKpeYxqkH3zAPTNo5pNX7cR5KFmBBxSw9k8FhPqgHiKdhdkryLmoNLmreVZtvios3NCmUNCMK5KqwuXWD2pQ8R",
  "key29": "2LX3VDqqXNdEVcohJs1e19Ni8smKU6FbYknDLAivV4tY5f1JaftH3Xo1e7KqiSSGBDL5LqfQfc3CwMoTvXCYZsjw",
  "key30": "5f7MK6eiUoEU83XogsPApxV8A1mpvjc2oNEontPnqkLqdstpkYh7Lfr6cWWskFgx8yJLto3YLHdRfYbpVh98FBxf",
  "key31": "2yXFwZ83j9obUuctZaYAD4GGGLuz8tjr2AsDYGmpTjDHDbPiFk5PqcY1dsUzPNA5E3gRtXkoqLhmv35dnxnVxT9z",
  "key32": "5MustcEegLRpQzeZDrxqRXHrMa3jSQESZNLsSWGQMHKDk8kEmAd3wr6cNzpERfbjqPonbABfVi11AuSuifzFRAhK",
  "key33": "5w1YoYXb4ZmMzzrq7g8h3MBjnmmXSvNQzHPmuoKV7oQphKhsF6w384Uj3VrWs9c6XzZE4in21qhXe1xJVitMuTke",
  "key34": "5qYEufdFeFVddxsqdd9puYQaU69A3YWQZWF4Vq81CbCUFnvrSk1HF6oFsBuBWvTD27hD5fs7v6YZZZdjfHhxuFAt",
  "key35": "4594Nsbqn8PqkuYGc4k9gnk9hf3fidy8CuqcKV4TeRHGtq21hWkJyVXYF79yf6B4unMWbiiDN8bX5LH1P5JaQwR3",
  "key36": "9B7Z3jVzaWvzWVYdv3SMZ1WA1Bg6FdvHda2AM1e3rfEXDfpeYs1wiGipNTWpAFk6LrPDByrZaPx1NyCG7MPdDUF",
  "key37": "4RbiuN1b71dzETmnMsMkGXgi7obi13J28ELPzo6JJMZNsLYyJTbkwjcrCbq3H6C2LxBdCpdXSvemLMFpuo5iKHgU",
  "key38": "3awoLHdmmA91LCBGLQEj9aSV9H48EpRfUBsVyf4kBh7T7G4AT2MvG4G6s99e3fGZt4CVbE41NjyuLnYSk1GkSJJe",
  "key39": "5KP43jRkaAY6bXE1bRPdm5FQQWYSaKqC3ZcSQQ14aW7q196wtPs3nwBZKYvAVjGaU5SoZQwNhrZxKkyDD33Lwu63",
  "key40": "w3vX2cktDS3kGHygotwNpJmaDqd8oUtGTEhXSKhA5MHfScvKb1GvqMe3tMTQzwxZA6m5kDanuCLFc2Zzm8NUoge",
  "key41": "2Vt7HvWMtNbsr23TLqNi6aCzUrxZGr5rDouTQ8e3FuH7rGPT7UacrkHDgPGP2rAV8Qe1LsxuY1myFTS7kri5SWfw",
  "key42": "2GpHAQgFSTvPhjLMni52ocE1ZmhdRb2G8ZjeeEXyB7jUaDz3hcznk1XCkQc7SvVZRHQZsu7AXKF2urPECCH8Eyav",
  "key43": "3B16bsuU87v3RWmraVAiYPXMKqzMfhGC4H4MZ7W68CtUX9RE9UFtWZtpMWyNo6RhhNWquTYtKJvBoGK4NTDtjQS",
  "key44": "628ho9y45H3tgUj3Mw9usWfuCkNt2twqPzvwdLcqS2ZhxARSDpwR8j6HkLZsSVLxc6xoFJkZXCJ2Q99g2TyWgjHb",
  "key45": "3sZjwThWtapwwEqXNb8k1sp1G9FDArWk5nnaK6fcpbsJdFemMc7AjQQf8rwa26aEpScTXB51z5dUVxtwWJhM5yEB"
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
