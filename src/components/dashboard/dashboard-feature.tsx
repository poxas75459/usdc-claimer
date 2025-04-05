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
    "5wAHJxXbWozxix9s284BePrZJo1d5tZTJaTg4XWtV6EFmG7YBMMfzoao97bb5aP8m55GxNLXx4PthdrVQDUC3HSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YuvDuVMeegEcGrydiPM8ankiXzs5oNnfKrbvki5i1gxSQiQRMUhtAWvFVeuHhPcC3tShJfFd9mFFCMKZkR5dKer",
  "key1": "3KnXeWAePbgDicYF45j9GLEDRGqZfGofgVPxZ7rDP9k9Sa2Wdt1iFzF7ZALLKkTrdcbn5M3dvPLaNPpKRibhvMTe",
  "key2": "2fKNUCVPunYktkrkqWSZf7XyvUqBjWZ636ej7SeoQSRn69qAGQDDNSxUJsGVxXwVfZPvsgLJaVH3Gcx3z17CfFur",
  "key3": "2uUeQbciUMj23z9qUHt56Uomt2GRDtzNYSuEzjhsWWq6uFRkodZLnifYkQYrP4AnxyKqRJqVgkZhgvNT6r4e76AS",
  "key4": "4wJtnPA4XmaR6D9gAT9f2wjmFSHGW9FzmQpjcTMVwfiMbmYjPDC6kSQcqAh3kqvGhZrF2osMVzz7JYYNbDec6Jnw",
  "key5": "399Q7Sz8cc4CbmYeEc5YMPTg5YA7LJJQJgR4ngSsCiM372cXNRL45pJaiA77BXvBgU6QPnCixaNJkhpn8ox7zJyR",
  "key6": "5vPXpKrJdWT1b2ipVk7xjLqwntczvkEhPJzL8WxUoVBoqazBmJkhRjLsXUdqKxYG1WsQcsjtHsVNep75V7YJhg3w",
  "key7": "3xvhG8qBxWND7rqB7TdzJvykKP9QVY3seESETgAaKDJiUZg2QTVe96mD6H4sbhJbhKeJ3bdfLW7hz6VW5P7zjTT4",
  "key8": "2NS7ugezuN927TYUcgYjuDhNcV8zSHxc6pQxesBbuNFjhSBgWVfiRWPUW9rUdMjogRy8NX3Ykvsx7KFcFdqPewsh",
  "key9": "3C3zZf9X7oxREeDQXR6jMT99VB2U8ENDHVPquc9zD4HzJaeSk4CxzyazyuZWaqCWLHboSF71iPbPJ2meMhmHP53p",
  "key10": "3ogCgbdZwRBNbHDTh9wJaCArrVzK4mEjmGvWG8uNubbnSw5g3U94YCtNxrXMz8NGSr9fcLMNLgBVpRc1MZ7T5zTi",
  "key11": "41Z7FJ3zbxoXE8z7uhc9qGEjHMz87WfEPV7iNEsDVzZpSUiBLknJxchWtKUcTZbCRf9omMUk2MqUkHkBPY3TnJK4",
  "key12": "22xQj9PDTBjEcwjTAY2Vsbiq85v71x8U7LQnGLEi2w6x9M9X4TcQixamw9D3Bi7TrpZivcBCtLoZSk31HtpjazHK",
  "key13": "5695MSUWE5Acs1G3zsgJLCgcD91ze5G8BTXksTFjcTrVNNhgkphmTwyezCxYQbSjG3ptUWkgaSTNjHSdy6yh5qSi",
  "key14": "25iPh4QXsDhhktyfLPi5uWni7h3QnVKHEHFK4ytfNRn7oGBs8QSz2F1SzvTyNaH5rXnqKaXKnJriRuLHV8wRXETo",
  "key15": "kMA24Yrkic4dMx4R9oEwgaNYaiXW6N3KjcbBRqrA55iNJNGFJfvsQjxiCXjmbJtgFXVuZAvcyQcUtiZupkEVs8n",
  "key16": "663y8SSCUEXcQi4UFbxxBA9edyxw6GWSsQaGP2iQTz4Uo2rVLvp6DhbrcDSKUmJaTUrbzdx1gZY1Fc4ctFZWL98Y",
  "key17": "3H44gzk1EYug269Xg7Jjz3w1bJPefd8FqTNuarxDA47UaPejUK8mYiQ5Z6EmduG9c8WqmdBa5sS9vSE8NY91d913",
  "key18": "5VENDgZQ7yZJf4tcEn4nNsV8EDb8MRCyGv1Qyz9iHXf5amRhYAikjNT6a2MVTrGkV4mZpvchcPZZafWh9zfg8m2z",
  "key19": "3CA6bu3NtnZzxvcmtepnkZhWnbSZq31mxHqY4i8q6j9XKRfySwsNBw3C5phSyAfWrYfK1j2Lo6kEMuJZogLwBTJW",
  "key20": "5aBGJRcp9Aun6RmRTcw4sDRJw1uinnCQSKHfnhsMgmkc7riHkfGvMrS4PcLtir2gU8K3p4PnXfb9acWxUJWAztnz",
  "key21": "2iixH9MCpnHbFaTwERUHMV3Vmdk9Zf3eQGz6yzsypRGw9syzv4bQLWYkAxTt59YiFbr1LLKh8ukGDvF3ouCPSS9r",
  "key22": "3atsUVuwEkLn7iyUi8PQ1UcZWCh6whRvqyrojfFUhopcAEEvCb6NZza3S2bHvACs9pWSTmttjxifEESrCLfp4C5L",
  "key23": "57yCYBdp1ohXEn9HAMQQYy5icyVxoEzHDphyRK4stY3Tv9GktUadZWccogJTSHBQFpToCWgviUEZZE2z6MLCiqrL",
  "key24": "3mwQXuJdpXxEXPgRkDxihQriQ4b65LgEV1LikpKc1EtfKB37fWzn59DrCnznRDSfGhHx28cPPWWaw18f7hwDe6g",
  "key25": "4atedwU994qmp2LP2P2g8Y1Pv7DLEwaSkKbtDjqydt2nJyguetcvX1WKXYvRLNTbwNxDQnzC1xp6tbfBDLvFJshj",
  "key26": "3Jhf5qTLBybzZmMgsNBALmeWSaks9zM2rhyBH95SRiTsGxvbEXDiqur1sQxsQwrKPbRpfx5N97gANzpHjhAE3a4w",
  "key27": "3BkjFoMmLfvC3YHe9J2wzcZSvTGAQVohyB6GBVcrncLBF1MPfnACrn3gbjSYpGjWLaFMdkXz1MBBWFXtrDeeqt5g",
  "key28": "3sgCdK9HpsnFURE8d35EhyZXAKvFzQkfxX5vSaRk2gFmSLDP5Jy91WcwX2p7ueEdTzpsPP6btnoC4NT8QLbixBQp"
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
