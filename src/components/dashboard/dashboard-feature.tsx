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
    "4wgat8GVBPEkzxAu4gBBTzBoTmysLDaLFCEWpp5ZyDv7mp7WJkcvKUt4bTQnohf2kRHidXjRNckHBpRiyo8M2hpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kL3eM37F19Ba7acvgr1bxLMe7MgVzViaipNqXAaMvqWmGmCWh2ifJyXd9dG6dMCmcT98MEuTMWZ9T6y5WSQ1qW5",
  "key1": "2kMVZP4yGEve7akjdtHe1btjh16XkcGt4TiJWvBTQEsys4nTAMBjA2ubZMZ17qZ965JU1ZFdWkbpjYsQ4exH9D43",
  "key2": "n5WGsD9vq3euUqT36K23HaVM1XWAwaN8D2Y9yyjTYGid7F7MiacLkkYomeUewxHu93w4r463xUmuWj6DFHJ9jG7",
  "key3": "4tCbjP5iRwWvwdjkuFYkmqZ68LmNcCeZZCZuiH5x5LKUomNA4D8vygzQtbjFe58jtZCzXZdc6iFf9B9Sm8ktEcDK",
  "key4": "2NhD4WhZFGwd7zY618D7W7kAe1hTQ7J8ww8DWUQ9FwWxa37mvuXF44Wa2mgv4scSnEj36mDW4YUU537eSwsowFTA",
  "key5": "56mC7cFGHKDtFjvZNRy84MoFc9Q4eW3EVtAezTtypHw7F1y4gaoouMu21MET7LZYYPnpTBQTvHra7s4LLYXmS61k",
  "key6": "TMUC4KYAngnwrs8iz1qTmCtieTYmYLPffZtupduseekgjNqashhD897DU16LAr4DKA8LvCfuXYEdq8LtxGBQCYe",
  "key7": "3xdjWzmP7ScC6kJWEoLqbQchsdfbRNmBL1ne8busVtY13Ecn7JUWHwggjpzcPfRvxmNWru8eF6uKL5m9dD5nJuHF",
  "key8": "4bkToyddAfJk6EqyEJpxr6GNmVvXmo9U8ott2ULXMedVzqNAKMJVh57pn4FMfSzZJPq3b1TcMZUADzjsEZtUd8Ar",
  "key9": "4XoYUVKgb4MVuPhGwWfw5WHiE8BnaC53XzuZ37hWKzBxEJxdAoc1Todqiw7quMZ8WdnWxEGCUiL22M3X16rwL58R",
  "key10": "4jEmfhr8JrFGkPgsJvpxUwgRuVHEgYGuLjECaB3M3X1gdoA2mmz9fj5iEQbQ5f3sUdXxTmTunuaQxmmx7Sq6952J",
  "key11": "38VzZ1iagsmzy1ok1uDW8PhpqVhsg5BwyVut3tW3jtSNvTeBUkxpnK13etj1rnUhEVTPYKdDx2a57DgUY5KVMZwd",
  "key12": "5Q8rBAdZMD8DK8bLcLSZfbAqYpcWYWbNA74o6SuVVs3CAVRMa9pBmsitFy3BdCKzrraubikD3ZeGv5MPubWngjHi",
  "key13": "32UYNQ55eNqPiN5zLtPq1tWuzCudUPHHrgUCVaq87zRyvCyHaRvzweeUjeLsoTFytfdgs5yv9uJmUoJTuSKHKfR2",
  "key14": "4EUfG535pSUtBueWwTkvmygptrEoatPcjakJ9BvCjKsHgw7vNPfttUq9boHpiTm45F6YFEKkfswgQS2ky9k6mNDS",
  "key15": "4qvLPtrWCqXsNt7eBptBRcNMCixFQgoSyf9djbK2tQYyAy9Emsd7u2RACVGsFR65NvZbQkPcP83KHwvBSJMuvSNb",
  "key16": "27CMo42bYqXirhtiGzvHGb4UgJRegWXmPRk2FWGVWU5yvMHFytqf99c6MmEghsUqs5uKSWM2gQNxXDT1DrVpanJC",
  "key17": "49DUfVeuTwdphvCtBLTrQAmEt1965McaZF6Z7yxdJPx6FPndAHpf1JdMVMka7piUzCbE14MhVoNY8Y4DWd5cYiHc",
  "key18": "2GGYSh6KAf1LXU8S2S5mJPvJKdzZVeL4KbLavkiDqgo5cuBXQPe8oR84Yx5KFer1qdbhnk12YJMiAy717D1XQJDq",
  "key19": "4JLwtTperiNkbwSYNk4j4xcBWvETm2gLLVWjQymrd8hCdGx9aeeBD7zucXKwwBFFUB7UG5JcGpC5X1Dr25MeZuzT",
  "key20": "3D7xQME5LH5moZn4sFm5nMnCfeKUc3XcpicjJPoTH9wbc5d9Kz8WXVas6fi8D7RzmVo9AMBV5Rdi1iJrKDYCJbku",
  "key21": "3M2MtWLGpHLjb8RpHo5zvi3UUFPiY9bCK9ayLK8iZZJCEwuRrnH1dX83S2m9QBe49hUTGcNZoy4v166hxTYaK5Zv",
  "key22": "3QAwHHb5LKfW1GZwYmGrBApzZauJ3zewqLvuqKT7U14jbSVhL71DtY16t2vGHmNQJLy5xgVZoSkWssJ7yLTsqxzD",
  "key23": "3FgWbLL6sjDVXCPrXkQqZA2gBmPykvVX5VmsK55D9siC76jQni3uZY56RqVwUAGAgwMVP8kUCcVcB8euEZfMkGDR",
  "key24": "JABPsk6TDCdq9CgTmdcXVTC69VkcpqFYN9MV2Eg2MPUJWZZ8LMyxwtp8MPapHHxAeSQntoisbQEKopLMxww7trr",
  "key25": "2pepHrgB5fs434DAG5rtVjZJifPunvF7aomDErH5EKQaGEcFcV5vg1GDvzw6mxn8iUipqK8r6SGf36r4tWfPwrHx",
  "key26": "5Mm47Xrp54JoFEtMQweRr64iEsn4RsdxRxiokq6HzdHriEhnjwzYGvXkbVkLu3ZyptXfwBMP8p5gfgMLWG9ZFq7f"
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
