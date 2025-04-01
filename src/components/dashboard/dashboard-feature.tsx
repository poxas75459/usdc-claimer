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
    "4wT1bW8YFYbEnGvHWyeQxKhGk6QT88HSEnZDPVhRb7o9CEzvU4hzvX6DtRyqxrBXSgH7HtJ9W6NUk3udLNyZsG2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Esejt5UL9gMV3T4UqUxmGZV9eUKcoxD9poYRou6sJozVFjGfn4Fty3UK5aVuYNrK25Kjj2zK4GXCq4JK7AhmD2m",
  "key1": "37kyfgKiuya6u8HnQPSkWBdj3Z1EE1ZhJzsbN6sXZb9zadqEXmDs43SetftfHLBpMBg6SkHMqDDcVcxov5zBZHVy",
  "key2": "hYNCNpHAYAxrtiXFJELKY6vKBXM8A8UArJU7zp9xNHynJZJhmchYHMXsREDXHKCwzFYZAeuZMvKw4A7zegqUaYY",
  "key3": "5nKe4ZJPNXU93fhosrVAzXhxhNoLxvCUuz9yVb7Zd9kQNzYdD5oWw6qJ1U4RkVa9aw7WAtsuaxsuEpkiP9vJQjnU",
  "key4": "4PEdStyQYVYUGCtGhGYCoQAT1xGCddUoNDa8z9Ke9dmnqgvzsk2ZVmGtaaXUnLwbtja1NULbbYf3y6kBPZCwGAkB",
  "key5": "xpapLii9JwGyhSBsYLo7kPSqmYS9C8KfAjsoH7ekXZP8HZvPN2tuF3AbHxZ6eqe2ZNoM9yLspH9QniELpjYQTsT",
  "key6": "2t8mtp1frKUyVep1o3QBqZUm6xWj82BMHE7AtyBF4HXMU4uKhdb1qhyoXBZnHEw8U3nnC1hLXuh7gnvdRb911N6y",
  "key7": "551XmfWpUa7hckmvGFjbAuPy9FEVJdVAupje9DkTtngXnxytVEoyS2tSAvYjiK3uYYqhXcGufF1Le7J9ZJdECgRi",
  "key8": "4r6a2Y3sCx6UHrmaRL6VSEWXV83hjDfaX9hfQ3s3Nc4F2spQWiDyeyrYnPUcjgVoZf9VJnqGaEtjFTMvpdsrfQaa",
  "key9": "5NNZ4jFGnzHsSnRdN7EbycvogsSjcM6B1ncAH19TmMEdYy9vKdacZvwt44wNSqVYDuCD63Zb4mWfF2eP94YXaaXf",
  "key10": "2pLaYD5U4z6i2w2t5M5KWVEKtmyhyRBKQ22guSjrebcioAcEBxzN2LTiZ8NXGsc7b8dKvPdG93DJmDKou62DwrqD",
  "key11": "4itmxRVJUwSjHQZktu66vFNzR9S47HDSMPe2LUXUXQofukNijh7b2EQHmu4xWXdLAHLGSDoVMQUjeoM93yvDoW5C",
  "key12": "5jDtghUA6NxkKQDVgLPWb3TrkWM3iG5fjf95QTJCUJgjP8i7RjEsUUQ9RtdudJRQYJJbvV6ACW1RfW9wMAWvcfu5",
  "key13": "3Yd3u4TjnLqyBzCv9qqWa1VhNaaMt63Zyz7pH3njvubcneFPkhadNopxbBgMjFjJ8438ue8i21usrbt5324seHA",
  "key14": "54mnjDC5QcMy3VdBxcbiJbr5rcAvnack22nTpgZS5tir1E9T2vMzQseykKoQFSEiJ8wUJGyhnGKBiUYvDZmDrfK1",
  "key15": "447m25pRqgwyXWShQ8koysh9mtTXKzU4n3mTTudgPGrdvaMYPG6TrkQVTKCmHVHoLsrqf51rSyyPUfMbDCQ7F6LJ",
  "key16": "3TKXg93MWcNMiiuie2KG5jNUananMMy7YDTcYcEoJwwXBW1diWgJuMJeiLBGXD23xECtwS2qbYMvzcQL1CZBAx1z",
  "key17": "3AiYy3q4CSgh5BjtRZ6JA41RywYxFDFkNHcriuGdpb9dm3PEvnAiEERN4Z11VQda3McPXosGin8UEK5zLj7zib7j",
  "key18": "PHa7txTGVvZisjucJA8WKxgNWiiXZrZz2HcjW967K2um1dt8PGcivEdqJ8GYgujd2hEY8iFWpn5U69MaETk6zcK",
  "key19": "5Su6MfQ21y8KJrsxW3Kpu947T9CQd2aG9TKuUhD3AuKxzTp55BWUH5sMJXd8eVUMrhGoLmYBx8DqGHoDSru1huYY",
  "key20": "jw7NGbFpJchiUXtef18xMet5dABjWN4dn2bHsJhaeSP8TUp5RuKtZxq9UeGfmrBor4qSd9DWJkVzyLxS9tu5uPP",
  "key21": "gSzvbwa5QUGNPS5JRibZr64jmjXgGoA8r1DpZYH7SKM4vbbgavyqHwsxAT8eQGVGfbwdhUhHmDv6KQsbJP29zNP",
  "key22": "57FqJtKgwJDSdpnxG35nNyf5pr3ZWpRSrXYfLcRFBGqXiWW9HphMoJrxvwMRrY8ako4Zp2SiDfmLpUrRYyZP5LE9",
  "key23": "2KbQXphcMzJ33wfVbz4WFKhco55nLrHunEmkwt3QDM1SQVuSF7Dkh2TfTkoDvbeQovnYcBt3SGEFHd5PiSqJHPzV",
  "key24": "4iEU97TJwdyJuky1KjJmopcrJ8GwzqvJfy6poz6UmqXsMZirsPTso2219SsSf5RQXMQPbdjoSuGXiV5xRUe4Cc9m",
  "key25": "4sMmFuHXUS2GFGUju4B9uLMeRiKQoxgtH26CA7mELTubnKfRevWod6SqR9GjqooP83zkbsA2GuM3RdvUpzmMYCWH",
  "key26": "5Xq4LKKGtQLvHxw5z1jJKZrHNdXtiUQTqXghK3jBgtbdKZ9MapyZgFTrzU8AAWGySNbEdu49zxM9EUgsFgTuWkC4",
  "key27": "4PWTm2LH63tryVA2LhKM4W1M5CotXsHK9GpPuR5H9er8Th9dDdW8X4qRZg75VosqfBSu4VMZKRuDoA2vazPL6y6c",
  "key28": "ncaP24xe6Z3mA8EQwnPXfr7C162b5sXtnMxtHaBbJq3PPVsNZfq2NEBjqKikC9sahEF2eTxJREEVwoNt6UeEjez",
  "key29": "5c6VZdpQr4txwpGQDpMsjHXZknNe9oFQKG1iRCagS2Pqd1ECUHhauZUbmFn1KhHe1L9XEJYQG1UgosBczeiyeRoC"
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
