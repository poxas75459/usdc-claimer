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
    "3wyAoGUTXp2SrHahMc7oMx2uTkenVnkPjN6V1LcPBnzHrPh2U9LAFuinxS5v1cJYvmLQoUpgo1FSW9Fawz1MU97y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U46eZAjxdWtdot6n9PjjodsRbLFffq8FXvWcNV7TUrT79vfzzePA54nHKAZqgP9rh6JjPxqKPcR7USY3zQWnUPL",
  "key1": "3ay8KsDjeZWmb1WRCTqd3xsoefsQHbFUM9BAGCiNHoeGabH48fdqnTDNiUonLQAjteNVr1owHLr1KKhuRGDHm6n1",
  "key2": "2sM9yT2ys67Kt3e1L5cGx4AXTYYCUQKDMY9SwTMC56pABffQJQwRaTdrtnqSpaC6GmNfa5TUS1jGQJHRuo6rdqtt",
  "key3": "3wmzzx8Ej9qMcWPaLih5KTXVFL47tCqH7uKk9aX9B9UZ1X51cVk7wNY5BhsfpSxZCzeiENsz9F17NTCoajNNKgkF",
  "key4": "4RqfZd1xZ9d5KqW2TzwzBEHSVjtpTFETjDo9PEbyFxkXtFVvT9v62cK5cygAZkp3PjaxEank3aZs8a1VNhyNDvDe",
  "key5": "5dCcc8z9ZH44rzd2ZRU3q5yFK565dPcjtMMHoMmrbKFcRxj2rWEgzgAbdUb8FRZSMjCjT11pqthvrSoZctoF6okB",
  "key6": "5pJFdREoeso81EFJh6Brm73h44irX1BgBQFZMEYaGtYCzhZT1LihuXBAqdhuo3hdoevPvdmWoBHLWB2sKURVQWi",
  "key7": "5SwxygQwSH75vvDizaKkCv8pRLySZWP2W1gT8CwW7GNjkwLR9frbet2rwnL4TcfZ6UyA2KMXjwiydPZbPUmTahpx",
  "key8": "3feoxKq3Du3epQbNdGtqaL2MpYE5KA3TXj7PcGT7eDxbEMQkYTBhH7HB29srC7HGKyEEwRvS6eBrGVLGZQnd4hHZ",
  "key9": "5PLSnJZQHQe4sL974Dyp53FYEvURYYWThueZfnGJvVNhLf4Wvwh3WzN64TWKbqe1ZpfrsAreJhrSnXrMcxUei75Q",
  "key10": "5fiAPR5yPMbcaJUkBhdBbErj8ZRRw9mCS5pbkBwSrjEa3sirmwHAB8KZ24z5zrPTP2PAR3itxYgggVyvhS8ZKjfk",
  "key11": "3GHCE9Tn3PcRMjEABaxHzQwdRQEmkZCSSR6Wv73DpSC3Q4iuZ6HrMxgFYUsAB2BxyQZqNqqeW9dJA68PYoWzHrGw",
  "key12": "5QCVjZvrU3ZCoN8xu81GoCLssgLsvek3V16rBj3kjVVbju8mQvcjpFCYnUyae4xnsk1DrCNnfNp1oatkehFWiX2s",
  "key13": "5753ozZ5MFVCRoUfi6hHMt9ueWWNGa1jZbepPfVQrH8VqUfanKhhoQgTux8L9HLhBFHFTNYVBHJRWrGnLYVQJCZA",
  "key14": "3np7BnF7EcAd3cNzJ8tUKy8Ww3keakMzexMecWKskJi8Hp62PHJFKqbqnQQTo8E59Ptnzpk8aoPmCZWQPkPjTscy",
  "key15": "2UpQMEkpTE5G6wAvpjF6xbucdpBbb5Yumih2H7zaGThczd5VpdJfi5kYRbmvbcpjG4m8jQBYDNiSe4AeD3tHYodE",
  "key16": "5MVrayTEoPnaVUXyNDmFGxzUDfJkxEbCAwBHc9UKp5qHKFUtSzJ567Ve7te59BizHmNHBxGamoRWHZnRNQ9UfAJP",
  "key17": "4BBAsAVK23d9Ke7DCbYmUrWFd1TDi1HRRJrMeSvfaEHFEVcBU17wjztAAkAQjvfMcDrMfdAMTs8szY3nGVQsTZ17",
  "key18": "5NH2SfmNYp2sye6kacPhhXqUeMGHBPhd3BTJYscYg9Bwq9DadtpCAmBe9aBDiwPD4ZtF6HSPDyDsVc9Mcb6rX5GU",
  "key19": "3gWQXyXgs3QL196o3xxzhj2Vw3zBRQmX9STSQTEiT2q7XX6pa7ZBsrRxJ3vJMWLdC4zDMqEHwbL41fygBY67JnTb",
  "key20": "zCPGpRntQEZE9pmW1g4H5mWwnc4qzj7ZAbpHd9nKqPLBmGUYaGYVZFH64oRH1emT6anDCwg3rPJw8Ja4awYbo85",
  "key21": "3916wz7BGmxkurRLffNWuR5eofZTyJ4Lvme4CA18jCBrCny1i449s4z9Dr5fPyCiqQSCbKPxVnsnC6SQCkdK6HJH",
  "key22": "m2uwLYxPFoKkhMs5cXb4zQ6pvYKW9noVubDUur7Az2oD2jcNdgKAHp2zGcrFm1BNGQwtB2JxsbLqvRRdYHXmuYr",
  "key23": "5K6vX7LksiNs4x1ww6BWYupfmGaixY7WA4AuAQ5FX9rhvDo578iAd7U9fzdP5ZHNyNE7zQCrRCJpTFR2oW22x7eW",
  "key24": "2QyNPwGYwQ4KnBDtnZVzd2Ydeeq1AvEu285WcKPy657Sv3gxwUaHy93h85Z3r4JwR5JiR8ebJoAicida4qVxZn6g",
  "key25": "3kFrHqFAqdqWcsgok7sSRP6gDsBH844FFNTbrchC3kS12aQoFe8CgDoExFrQRKLTTi3bVTNcfvNJngBm1xpLFkxa",
  "key26": "58ByA8BUm6a59XDxyE6vgWKn8Snt5L8HnQB2Gy6D99DJyP92hT5ARkQvuKmVxpEguAFPe4zXCGrjr5mshw4cqu66"
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
