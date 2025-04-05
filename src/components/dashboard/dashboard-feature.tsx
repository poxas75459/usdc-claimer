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
    "2QiQwWFvFKrsokMaFcyVQjMwdjkarHE9nyQtdsztxk4XZKJnFb1jQCghmxA919XAXRiDffQhgt8kYynMVDYfhfUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRtuM37UKEZxfgXX2LiLg22BjeSt3L4fqBpA99z65SyteLQ7fCD542xeAwFTAHj4TgX9iC2LSKrhAeFY9ELkGez",
  "key1": "1KvyD34htKC9kghtqYShE3ivrn9GJMAQKKjGCVz2x5dHNtMBs9Di7TLuh27GcnXXDJdS7EunQVzaC8ArR7bvrrn",
  "key2": "2ipgd2qbuGS2EM4y5YFjTeEU2VkA3NL4o1eisLBBTr3tCZiPtfcQ9YrQAP3VdqdHeKFb9KiiZmaqaZnRMZVv3DVb",
  "key3": "4DXWuwWAT75rAnmcogGWwc2apFwR7sVkWGgNxDP5fEgQeCXoAcUMuUwJpvjw7fm93Ws2kFmrSLjKCGHCY3WMYzLt",
  "key4": "Xp5RZEPEd3iKZJcxUm2goJrP9J9Z7isFsNdYkkd2dKkU5fmNoHJhiEphLYmX3jznszjGjaQ3Myd736AEgre3oxs",
  "key5": "566sN4KMUWyBk3DFYUQBPnVkZ8TcUkwQKR8xmMCUbkfJEJKX1zESHpJ9JpjPEChY3Fash6KQuSdKXY5fzkoNZU99",
  "key6": "5qwcVvKCkcxoKEXJu7TEvWkth936kEno4NYTewfQmDjZcEsGh4ePrAtHMH7wWLAWCgBRrbUpG8JSbHUGt3RsreHH",
  "key7": "4ZnxhExFunm9zNa7Fj6oPA4u9eiPB1XxA98xHvcnFjuCWFgqRMCeyafwBCET5x2AAST131Tp7wkxBNNxyGkC8diP",
  "key8": "514UCbCUtwajn4FEFK2rA8SubXCrKtpA9eWrmVbkg4qKUsjnvubpyVc1C4dWzWjsnoRb1SsXzgnafCsjcfBPKxYq",
  "key9": "5z8rmWxjh8gd64fSHWDJioLFbTVyLqzaFSZuHnSkrh6KZJ1m4F5LZeQE2ajydJ1GR55pqEHeKr1M7JR1iSwWZv8Z",
  "key10": "2VCb1Fe9uDtuyeEae5C2FbzkYVRQRmFZSCeNFay1mK3aAtTGWpn2bw8jiSscBatJdXCCvbN5J97puVBUPAgjGRcX",
  "key11": "uDbcL1BvAzdngUPVipwoz9aqwkApUjeeNNhTBd5joT8fNzfvY3XSzZyPcZGnPgoD4aaCrhEQTfq78JXNT5AASxw",
  "key12": "28L2w1U191JGRbyAquhetS18DcVaw3twcumPJx7RKGw57SZtrxP2qkFWJneKdi3sX7yrmSW7CwzegfTKT8v7tiYq",
  "key13": "3Pzp5UQLtUDJiywk98TEsv4vePepxdn82ARVLo76cjphCag3Xc2HN9bD7XaKWqnagjBiN5cpAZD51aFXJmcDH1o5",
  "key14": "4UN4tEx4JHU3qoSVwiDNJj9QuAjd6FkgesqkFjvhmcA9p12kZrrHQg8TGX8FrCzFy14Xt1mKgDdYy1vB5Q3QbbzF",
  "key15": "FmkJ5YFT3UPHd9HBBna9MnMK1B11dTnHS4U3p218isT2SBnvuQJdpw5r6rnAdKT7ehwkGp5xF6UwDc24Jcq8P8T",
  "key16": "2ydgoSn81Ya4cwXeTAu28Tj9aaf1jGbTY9eunF7aNkbt96XU5wfayNVq9E1uKTZvaZtCYBtvrnSLzLEJeMMBhRUo",
  "key17": "5fJyhKaScs8swPYUiUUGVu2XfT9CZMMEFoLa7C8QfCFCbWVYXLnxAts5twRH3GRkvVm2Nm2n4VgLQNfBVDvn9U6v",
  "key18": "3EsGG2XdYxT6f8BCFzuYEagLMEz5W8TmJqRidCsT2rwY1vhbwgNCrzJ6PtKew2KbkYXNppNR5tssCXaPRB4ZprcT",
  "key19": "5ktwT7YdrXbiLAjshFc4mgdaNkyD5vgJevFyBEqKAUzE3oxbWHi3y5Br4xqwQZahwswizfbuMMfi5JpgQ2fwDHao",
  "key20": "4DBauXKjYboZspHQMYh8eaFENX7hFd1NGqczgPmR9c8YkCXrMSkhR87icnnVg9vjHqp8T4iaYNzT2jgAxhwWXXtX",
  "key21": "5byi3qBiRPrKAEaEJACoaPwYkwCrG1DvAyTuJoPNaNu4Q4AqN197UewDXRPXCmcax5XURFD7LCSjoMw1QQKMDpiR",
  "key22": "4zdsGkepGvuxNEoAur2Up4AYDnV4Muii3tF1xxCnLmkHTH4fECjvqGr4VRxvT5mujQVZuR2XfxNjuuy22GqypVbG",
  "key23": "31cFvDcEanMNaX6D2nYwJUZi8rFmEFff8EUD3xEo76bdgrzhnDevU6FB8ED2Atgg2f6BGZ5RZheQcytC2RaA5JVZ",
  "key24": "3NUtmZGnmooyQzDfRJNyuBzU5zRHgKB2xFT8jMaa6hKviiwjk9qJ44TSS2jPNK6S6W3vV8iwJHZVsiMy148tMcqN",
  "key25": "2JWFJEKnz2C6HWneEfxANM7Q97396EWqLHnrEqR4AqXcUMv7U48MpUzniPd4orJsehTToTSJExB8tZ5kuFReVF4L",
  "key26": "43arKwsmYARYDX175vHB3nfC8U929mvuA5q4CxpCNKBgEdMZK3RkXkshA3bDkQGMrJUmbiuTXGcXmk6viaPemEDx",
  "key27": "3yJaR3R7a4JHCjbrpw3eMepfHbB5MJy5S1A6iDPAUUKP9zkY3Z41K6XDixUs7sycVxJTwQj2Q9mHRdzyAtXKbMn5"
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
