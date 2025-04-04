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
    "2dj4rtKLNGKmWe89P2wgWZCcfGDoUqhcrhc4QQJP6uwEBpu7qGYWBakf7918PGD3E2MG2ezQ7ztFY9fDrjpUmUb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rsq7K786ECLVkCUqzQFch9wn4rfmGk93hZuLiZzjzvCfZ9hXg5KQjLbjU5hMF9vp1rs8MqgPSWNsYKQczD67H3n",
  "key1": "tk3VYKy7JArFvVt6C6rhGHdiNKVqKjRKNKFy2yjWiV2K2EG2wXPhtjTWBREMh5Nf9R28JbE1wdXunXupwMBsf2w",
  "key2": "5CAeQ2XgnErz9QXBXu9dtjumxTQB1fs5J8z8dU2jdDPnh12fbyzrntxRojE2md41vrEn1Avwa2G1rthbCpMS3k7p",
  "key3": "3JgcSmXSLzyhmppv2iNcRgD3sFiVz1cWm7vkkf2NuxgYn9oNF2GvPXMhEgaQnZpjYHzh1sYBFCWLhXEGLYGR4vDY",
  "key4": "5toMucsRmHSeqVAv1r91WGcjkt3jyhprFNvsPYYafzFZKs2twrs4jjDzgR5fXhHZrLhwatMp5GEky1NefpjSCop6",
  "key5": "2YBQV3HTsYjHVGe9sR4mrgyq3PAn1gGpcwbAFFAuNkdQoectXdWcoTZdehGuRRyebRP2juaEEXLUKBxFkNmL6HDm",
  "key6": "YpGR5oHZ2WFodv3YziZhuabcjX2F57vo8e9CT9HF8Sppg4mNQZX5niN9uXdMCwHyQ5SPPJEW9HtaK2HAVWuSC5E",
  "key7": "GZgxnbZs5ifPixc41o8wJPNLjy984LiH3tTW1JS6U5iDhBi6NssuezQJw4uRDW7gG3UWJe2LJyWa5iHy4v47tzR",
  "key8": "Vk5Hjian3aunLjutVK1jkG5qBNFm2VcVcpkScLRdwzod4qwh9DY3vu1ZCRhHBfqpgpSgqGHPMXximKQ2NcQNg6E",
  "key9": "2US9iY2k6FMWpJ2uAyntfRVi5CyS5iMvUf6yUdt6GAh3QHiBPyH9CnA96kqUu9TAyZRd9RVFfkec2VTQFeQQaEKm",
  "key10": "2RvXfYA8h6aVRPqUvXLb1P8YmU65jz4vnhtJMgcqpjZTaFkcW1C8i56yHyPBAvS1Pph8C5mVQT7XXDr1Z4jJthL6",
  "key11": "27rBeDW7xxuvDgGDGF3CYzshGS9EfooMWV7YigYGudb1ZLXB4kzGcu44QbKzrb55ZxgH2zbZGDVWspCpbuNJRZJp",
  "key12": "5woWzUgCbVBeSXdf2QdbH7oqcFaCVBuZeCWcLH4g6PVrDk3MzC9BaBY7ug8kF5HonKRB9X7pmYaUap9y133Tj5W3",
  "key13": "3vYnvE9qyHh84gKughBjcogh9FrwiL3RHq8u8Srnn2omibMG2RDwmM8YL6rgAjzLygtDELQjvNX76YQ6MpZF5VTz",
  "key14": "2RsNYf9xa9TamNBs3prwG8FUCa8UJrEUiAQAsu6VV5RZHXXHGLrMScVxtQt3TUrw4Bh73mMtfMiXsWthf45pog6c",
  "key15": "4uPmkJ8SQksU2BQNLmaWxW31F8WHqkAfvQ1V3s7cxvEQUFDzZebA3VMyPGtm88nZviCJrA8yxyCyvJafuEe2GraM",
  "key16": "4cqBX2bkLHWk3nJDeYTKuEcdiS22XcrLsYW8PZKX748xbCfD1xcVgmsnnNzNm7M7BF46Mm553rB4kaonqCUYbU9f",
  "key17": "5SNQgDu1ZWKhmJrvoh1mLHav8e89gzx4G1d7NGRiVXmiBQxmhquooTnbpRwRTyuEc69RAYcMCws6RpdSETMrAvgJ",
  "key18": "2DkUsPV4FvgULfJsgyEUB4f5GzNNHj13Vgd4Zusmhiwr7b7ionGP13CbPQmg5ckAkZAECmWprnuv6MuxMpyArNnj",
  "key19": "4QatU4r6MQWxW9v73XTgMdXiTSfBqoZW8XgRyQV3jEvY5m5hcUxgDe53LH56KcqQZxJf9cWEefKPjx4vT1xieD8T",
  "key20": "duusaSfiTQ9vpjXZHzVLX9hj8njLutDcVKfxxoAjJWJdUbAFEJufZFqNDQTmfGHDHmAED1p2nndmChbbRLEiUcL",
  "key21": "24bNWttMsvf8Rrcsmw1DXxryZJpq27Qx1K6Z1tgQPbYZAUuymjEkq5edDjnNdbg3xV4KbtgjXoCs37xXJMkcdSN2",
  "key22": "3oThR1LBBHzqhC6szkjqCGKuuWUtJwrJaRKGNK9FtXr1gmAyDuUDxd3bqRf9YJWJ5nnGmJV6D3imVcMD3ydfNCcH",
  "key23": "5cGywCsjeEvxduq4mHTJAL6oscXXuzeugv4S5HHnFejH4BoD35gjvV3hEBnkWpvotAtKHovEkr1kqeFHt9y8A51d",
  "key24": "CLiGs2Q8ogB1ZV82byCCkJpF2DL2WX4rmd5xAi8DtwK5NoXNctXkd5ZLx9zzFK3zjd9oYGbAvwNTr1WAEWrCzja",
  "key25": "4G25EG9rNwJjbD3VRUeiWL8MyBwxHV1Dis95brzsXfwrxhM7ux5Zo4uxcvyJkdujkBLFgmNFXhxmp5nwBdmrKi1H",
  "key26": "5ZazdsXkGft7UMnGyuaktJJ6uSXN1cyhgsspHHBxaPhCnGwQrjx9V3SJvTzi9Y3Xs22zaEf1kNYfqsi9qkmM5poh",
  "key27": "RnLmipWbfQDXYfr493HoghVfpfL79W3L8XBq5aYpEWLSjBpQ36yntmKwanXWktkMCxwhf9HQQ3vn7ChAFTUyc4e"
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
