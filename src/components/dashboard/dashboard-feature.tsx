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
    "3ZAwqAVFkiY6zuzrjJGVyNr3hits5CgLMHcgvcRcL8LEdfgZ8JQAaiSq62mMmcVuRKkM1JZkSfug4wVgPzjGoLkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UeLk9DteDJfNz7UPjaohj9ncxS8jy5dkTsZaBizBan5nNYYZ1xHn9Mpw1rLFYveuDJLTP2AZsabvXqtjkd87Q2G",
  "key1": "AePLPywt8oxatKzh4UaVhQugjSvZXNYj63s4z5BBNEGZabxtaKAd874NHkduMfe4brESsR48CU1ej7fXqZ22g3o",
  "key2": "2LgDidfhZf4aqVPcd5x7HshjQcY4SjkKEo8VJUSDadP66WAq7oERMPqprQtS8vogphUwTTY4U9qBQdu8sofPX9Da",
  "key3": "3SzHzV2JvFxZyNoSedWki35KoCLpoQEhXYvsRJEDezy3xn6Mh8BFBdSg3P88pFaaUYV1R7sNihGJW2jVBwzBC24J",
  "key4": "2y6mYX6oqtiLxgs9Qz4EHemjvEYh4KqSxbhSqRDZYzFq1Q686YXapHrf6Qfx2cJw2A5KfBvaHngfNdeaNanZ1y9s",
  "key5": "4AMPXYPrMKtXVn94qfJNAkRfFKMVfcPJPstnk4VCkd29bP1vTGr5dGbYq3AzjMgVid3FFd4YQjG5iv24tULSnJJ6",
  "key6": "5UUaL7QPvQX6osGfFfycRLDxov31ri2ThwTCUfD1WJtFv2vgHz14uiFk2jbwKVybMaXZF3MzAVL4vYQmeKKZcxui",
  "key7": "2hankXZdoqxrTfDpVfHo8YAjAjWgUNciuAhizFrwzLZvYwjkfBcdqs5xeUGfcuGcEFMvsWgdYnCVkGjT476MzAKd",
  "key8": "2FpZoc4SFw5oYUqTo9vw26warBcEHYsXQwC1nNi1pvVYsSsyAMfGM9E5YM8tZ9Do9UPhN8j5Y5ExSL3P2Lm4Y4gU",
  "key9": "skS25rhRzSA1vyxhrH3TBtf9onGcbYysDeCzeYkvwoMjqgrtee6DW36kgcbingLuzWfChkpxbjwTZSfyweAtyfC",
  "key10": "2JgxC9Brncd3yd31KBUp6kucRkf3qp4hEUDFMiBkceW3venawdip2jgXje1cdjB4uxLTjTY3XU3aGnYJ49ySHXvu",
  "key11": "5WCDQRu5BTuHEwjARb6axxZuTVsLr9art3NRuAw3GGbTqDoPhz8p2FrEiyAoZBeVwuv5gHk5BJX6eaA78wCRQL2t",
  "key12": "3p59CptdFBHJ2WP9oPXyLovSCXuqjRSPoTrX4BHbxLxz97EhnKk49xKozzpZkAjzt2JxmajKAAzM1ftWUodPgQ4q",
  "key13": "2ei1nBPQWmFxhYSuDEFfDvvVZchjf6GpQ8otP8Wy2FeyVJ4WPGvgzkMwzF1pdTsEWBubVt3dtFj6ZisxAG3KUmK3",
  "key14": "be1Wa9kGFtPWeA1x5AET4ZEWGAFxXhfzU9U7GmhstNCQvqK3x5cpzMjyKNqbnTFA3VkiU5nbL8oQd6gL8YKNsyT",
  "key15": "4CibepakuXg7zmo4HuJCJcgGiTg3NeEVovaMq6FS8gQFPviRPyvw1nqzqC278ss6HmpT9EF7g5pZo88EmzYeuz8a",
  "key16": "3BfX4bXiAt4rntEzZ4p6G2J25zGuhMDe55PM1A7BeAyAigGLmcnfgQGmSahNkSUzKH41HTq9S1EommFG1Tj2Zidr",
  "key17": "4U9ro1hrahLFrViApWXRW2ewRkoYr6GLewVRBxvdKLJmUvdwe4mVJFaZjuWNC6YvW8rSqFjMF8LtYAw6FdATx8yE",
  "key18": "2BNX1EvN1nC181ZuzCxD68UH1dHGiWe2vDQdCPomhCS8PSUYTXbtNJRGYLspuhGNzthhCE4xJSPCmmtTSAYyPdmw",
  "key19": "4uQqscUFmt7qmYyErhtgSA4vN2axhLueA4Ri45BSTcKnjHJ5VdFS6byuWFDQU5ALqq1cgKdMcPyVTqHTGykSnL9E",
  "key20": "4Qj5qyaGFr24SvfpWRs9JPqHwZqprQM1SCgBRBpHV9kDTygjiWarwA8dRrPxwEjb7oXMwpPN2xUJyyA2k39yqom",
  "key21": "4L3qdaW988mgj2T9iG2m3aZM3Rbc5k5bttrsq1ec15Vm2DHkhfPLGqiKCnEmm9mV5NbWJRkQPMQ5Y2HS3r8mEMcQ",
  "key22": "4BVoPGRV1exmHAU5cRFJLjRqfA3VqE4khEFJgKKsKVKWmWcCsbsqHbQ8auBtv8LAwXv2V3D5zEz25MUpk9WunxQG",
  "key23": "4yCwxM5RMBYCpwCKgVdsHDQUQFRV55kXHKpmpZsVgdPTjgcX7bNZZdXWxAHDNiTSZ5sWuTvj4AsAp1urxbVLvbtH",
  "key24": "5wr3EbfXwhNG5RzLcJJGmJbzuKDFqVKjaC8zTFThBFSNcuim3pfiYknCKDWK4KrBib8FRW5ixpsokVJiMz7XyGgY",
  "key25": "YYfKqtxT9MDz7gXHN3ZLhHQoJqHNPXgW3sChNzozdtyUxFwDmYvWjuwxFiUcR6fzYMxUj2y72DdiAKNq8Qo4RWA",
  "key26": "36MsAmmQuzn3B7tjUfJ7sWZ1sghkoj4WnLxaMJYy2F8P31mpgHa9PejeFPzxdkGRu4HQvnj6Va4p62qy7aaH8mxq",
  "key27": "5kKAjbgQhJpsmdNByk4WYsHkPpsJsUdiEsVR8ctrghrxdh19ZnCM4gsWyQrLqj1p3pvLBM8M7XGWkJAKF3Z8cHYe",
  "key28": "SiAfJJ3VTBRV1KWu5BHTuZPuE7FLSgp3QAkCCanuZbxkaDJHCCoLuiE59wgKQ4uKYyNnfYtz7m9CtVRdfdkqjnE",
  "key29": "2eXwF3vZ787SzcHsd4UpsPY7XuWqoRwRzY4c8hiZJvAAbAE2JbP3StW3Ld9jbb8ZgLPRTkgnvtGTznn3q2CTmGjt",
  "key30": "24JnGGKVnJVJDYYJYESGct8Xu8EzzUKhU8YdoXE8BTS3kTuKooPQSadQLjsUY1GbrQXTNdSSfRe8B4A5HQ92AiDt",
  "key31": "3tjhFRX3Ne7Tvwt8Pe5Tu98UydaQFMALpjviRtaqa8mpEmQfFRDu4Z7eqx5ZJahqjZXehsWU15dtQfEYiUpi4Vuj"
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
