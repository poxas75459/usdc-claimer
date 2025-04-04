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
    "36mYdgYFVYEaCaBsytTFJtjMk9kpurp8ZdgrCFnFUoqW6PWTxxV2rPqf2Baji6hYBiV2HQmrxr8mmk8Ns4cB7sEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1o6Uo3og5XhG5yhwUq271d2MXm9Rik4QmqRVLysAr1iMLUdwzajWJLbJxygKqurijgXo8jevdo1g8PHdkPvt65k",
  "key1": "33Dc2N47p45MPueNokQurBnsEuNvvirUD5aDKVkGfm61JwSY4kHkSpvLyj8BUw1q6vLPnYSyPk77wGCGbcM8GgdM",
  "key2": "31u4pohN7kYnHc4uFoWnhzfCevvEtnEToP9M7yRTtNq5iCRBkeQHNjwBUHocNsQmByNN1wyvqUof5ML5nFh8XbH",
  "key3": "63YXUV72hqWYDaxdrRvT9vfMoMZF1pwziQ3v2CP5PD5w6nRgvaiZkQCBZJzTArfNHE2xuUfUvbbz56we9azsqUNP",
  "key4": "5CZ3obEzgrsMbDgtGB7rUPcsdcs5KzdMLBTKJ9nVzwxhtqGioocZ25STjETpXAc4osQS3h2cu8XKGrTR1Bg3dyx5",
  "key5": "4Q8N8qFF67rAy9ma97SGZMnWMRwWoBe2K1RVrdLyuMsX3TkU1pxH8KgLUtRRcy2CJm2eSEYafrQmAAJZ7Z26jLCY",
  "key6": "NXiritNmrpPgiPPw3hx3dRThDzDuNYDAUEPzaErH9QK6A59rJWcDnq34jrun1B1kPG6quo5UGjC1939fN4Fa5Qp",
  "key7": "4p8HqE9um41pUf3juNsXZnxEBLZSUhCse9TARZ3gSCyhPRqzpgZsZCybEenWYSRJssZbB8MXepsP31v6uhEVgTJW",
  "key8": "4Qd4GDtvfbbYX7CDWidD3NRgiDgeVrF8sifauQAPz3EbAWf89uSMUJDQ5t7uATDwvHGuBpMxhVBZHuHHUhKhiHx5",
  "key9": "3bLFe1kmAkD6z1UMLV6GdHYD12AoygtWktaNb5xJa5sG1FVki9652iFCvsTep4933F1kSTuuav4N3v6BzeugDHf9",
  "key10": "3Cx4Tqnwwg8RirLjDz6pgeZUAu9CeGhjJyvS9dPtBNsaZGEbX3q1T2VQWG8TRsLW1cv6kQxz9oUA4wRzm7QqFMRL",
  "key11": "3c91QLr76CPuPSP3cUyxZi7LvKwLHmJrTdhRgRLZhZB8A8eG5shtm2YfmpSfrk96btfL769LJrrDAdFtkJUFtDW6",
  "key12": "L8RPUfZ7qn2PqVSTcLPZNuJvMHvT81MsEmcFzgrXby5H3EMo4n8NwQuxzjoaHjy4vJ2kiy3BAqUQ31SkN8mvjJC",
  "key13": "RkTXQWrM5BUAjn6XhjQEoqmgJ6bjLim7P6wMH8CKgjTdJ1gEPWqEVVjXVPxEx3YdWoo5147rY1xfkX5QSdnRiw2",
  "key14": "bYKwQxM2zPUmBcgXXfNK4vimmkC7EDmZfNbuUYVRA5tZkRXT8F28ySY2vx78AR13o9aW4jGdktQqWG5nTn5qvLk",
  "key15": "2aXUAKAajh2JkAnrerC9ENDNEAVn5UnU1wYncBfesZgPP2uPpuXtfTvxnrZqXLqRuDFL9dGZQLDgXtrX3imPQffx",
  "key16": "5qdpskT2XmNow97RokjUsYjggS6GxdfS1XGsHuCTpaWfqXF4sqCLt35BV75KLQ1ZgQkLUMAFZG4XSZDiqFTgo1XK",
  "key17": "666sLwSXgmxFDJijJkmY6aX5Jz5jHUcJQQX8f2YsYd7x8BJCMJEcno8Aao8NJh5iNf7AyQqsMdVAt55Coi6D9Lzg",
  "key18": "46iwhRqwSJfAutxtWJ6RYSrTq8jT4bnyiT6RKvi65rtQiXMzAutV98uoitAVq9bz6JVoPLurH3xwrz9a8TpX8ros",
  "key19": "5vzQ52Gy7v3RdSowvR4chAN3JAxV43SALwuz9yU5Etcmf31PKsEpSWYRFc7rtmU7qBiuyoUqZiLk1DitrqKbQ8MX",
  "key20": "2ZZbHzrHJ6fjoSZMfP4zo2Km9fCQZvgMvpXaQBeQ2bPm5hKC6A5Lzo7YXAG277BTjs4tQQK8XSAd9hheS4gKzjJ",
  "key21": "3CfRiB9Lv6TX9CA4qqtrC2Gia9oNP2mLdd3RTEmFHFkrLNk8Mvt9hfEttg4yV1EKA1AfjrggL4Zf4CfdYqsaMU6Y",
  "key22": "4FFZ6q887ogSE42JFhiZdG43BW783i6UdqtavYjbaqiy6J2MtwAwVN5wBG6CnWaNLovFmX9ou5b844a7F1jGqhAp",
  "key23": "2Z5A2FczigUURaYGUGUjJb8vKqXo8urLDX9PUKnopg8GMQHEJeTxfQRp9fYjWkmm2L6D6BpD12WLUFofKadaMnng",
  "key24": "51nypoZX1UBD4xMCByn3gp4bx2v7PbracoXgdjyWwDWo1QR83HGDuSRybq2dEFrS6RurHsB1NLRUJtBVVFVnBtnJ"
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
