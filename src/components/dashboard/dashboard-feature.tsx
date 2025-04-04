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
    "5Fhno7v7e5ZdyoDbGkUkuysr1nJozaMvYnd1GN9tRWEzdsB5TJkmtmHk7wrYCXri7hsqEdWFqDyBpWZPT8FQLCrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ghrX2e5m1mvPV3xVfqUcgj8utBddRn8dEtxyCyRKr5PiAM41FEMB1G5LVWLTuB6x5QHKV2zAErKRcniPuTXE7Be",
  "key1": "3AFTSjSMRAHVnVKeRsYhAnGb3hRb4LQEQzodR1YYVxQgBY11C59ng1xV9bXzmNL8xoUja5qHFemHwXLQbcqq7E8k",
  "key2": "2uHBxFbdkZDid6LAmj6Z4vN47UF5xG99n5w52bmroEXcXMH7nj5kCmWCt5xVFfKGiVg38dmeweToRHi9Pk2gLgLA",
  "key3": "3riVL3MzPpidNEhUuawFFq483HDZeMnWeaoWCR1CVaZtjuZMQ2j5nXUPjUDfaeyb8f3KgNHKsiokfXcpL1E1trB2",
  "key4": "5Mz95UuUorjoQWUy6hM4ENspkT7nCCfT3iztB2g8tobRX2tgwW95Q41tqHuuWJ27jnDFfUAGeDNYWYvQqGm2Nt7j",
  "key5": "2T3SVsykHEcd64D3FyYwT2t7D97LoeAqj2LbmiyaoBytnY7Mk8gpcxqt79PEPSm7QZPPtSv4zUWC9z3mMrPMM8eC",
  "key6": "2B8qwPv1LHMZuvCJWawoUJ3CCX2pdCv5sHrHwvA43QcrVUMd9pT9q2u9EJiuUEE7zd843siPMgyUbYjq9hwVHMeR",
  "key7": "2FV5aRt7MRHvRD1sZLRFxGTA2xiutub4xeSmJaorjsAZugRm9KMXc3dw3FtPTMZtuhSh6TThAXKinkeo8CbvJZUt",
  "key8": "4RDHhaoGNW89yvQyjVszhfjmgE8hT7CLpM87T57YrhQzAFjQ456Jg2vxWkBC7ij9pYqZycu8v3HoVfz9zAgeyokm",
  "key9": "iNnx8bxME4fQL7ByxHjBViPGYQzgo6NpGuscRoYBGZAN9XCL2bVk3XebdHsRY54pHeKaUU3BaBcfw8X9yPfch4M",
  "key10": "Nzy2gu6fSTKYKZGAeF3f1TQxcKtA4B7EVXa46fEzxvxDaWnedAq6GQEVWyg3gyW6nzm73wW4X2SQ6xs7BkWkDnY",
  "key11": "47NejBuvY5oeoenAGrAe8ZyG915qRLJpSsYRNwgTS1r446ttjZvd1gBSmLd2ZmDpnu1yN6KzTi3FRAHyb9ia8H8x",
  "key12": "AFH3f9UavSsAVK4zh4qWc9kgscu7eKY1w3MHwxSzTQ92oPCPRtJkaDpkQNDaXaamnb7UtLxm9e8WWJSUwUBYgL8",
  "key13": "4nEYE73DQq24PBwysFkd8Vdr9UAzCqc9haaRSFUqe54Z5qosZQcVoezTb69oH1aNMyb8snbYzdR6PcbeLUcLo6C4",
  "key14": "HPGFswQDZCTZxr5SfbreXSRTz99edkrrzdWTp5x5ZukhRNQRKgL6iFvTAbqmLpnivHYvfZbHphFcHmUvBknfSC4",
  "key15": "2D4e1gxbQkXQjSTZT4MJYiR2TgVDdbYg3hypcQQ1maSPwqbqPQXEDwPxkTQNzp1hYZeKgjhu5gk2EnKSShByeCi4",
  "key16": "J29hyqWuJBM1F6gbsajWPFtN76ykY1yGLi8R2LjVvcJG4QRN72BcnzieLj3rYLKFeSHawUp21P9eW4xqTQwrtfF",
  "key17": "3ATnFSE9nCJ2hFMy4mspwbgS8Mfo1EfuBZyieB8M1fzuZFBwC9RvGhAjV4jNNYGQP8MTeHZjfuFgkrh6PEVJjpnm",
  "key18": "3FR8nVXbmBgbxK892UTxhFrtZ98qjiGWMdhGduFt3fk5cm4wvvByxPWq85RZgnk2RemZYf92WBFEKZdUztuPyG9n",
  "key19": "hpQLXrpgDtMw77saKtukk83rDRDRgv53ZCxMhqFWirF7kg8KZSjHNoiHiWpPyexh7d8sZPTCxmUchW5HRpxbqy1",
  "key20": "k92D2EasioKgpBgDgF8BxEgteRf8j9NffHzViKjirekZx9ZpwMYh4HaTG8hFpkZgzD43MK5oNrD4b691KUA4awq",
  "key21": "4fW5apLETnLFnU3NLXWw9vbKkb8r1My2X5F8BEVfeTxXiufTNaUup5x5eBhZquRfQTGXc2Y2ZZ5kpGFtztF71opk",
  "key22": "5AM2rSLRAWNtT5Gb6ER67Akt5NTNQV59dG2gvLjx4ZrjjQwDsJv3T4EJMnXq8pxsm3sjGknqacdeL1JnTamPN2Rr",
  "key23": "n2CZSFujAvGgX7W6WQKmCR4nnm7NPMC7qCZ1RourFmW4yXzDiLqr4xMUrba3xSYdZDyoPyd5G4ZemG557eoxYFn",
  "key24": "2xR2mwXT1aNCAeZ6q5FMWCNamSivh2u9MHbLfvzihzb6f5Zy2hp33JXWxjEDf3QiRDgaUEk8ymLcqfLeTTKbzpEr",
  "key25": "59ASX1MMe5B4pgx5nRsAd3ZW6HmtepSxEiAPA6yAzYhRaQFJEzHs1G9AdccmoYRcedG7rmLgmGQny36wrbbfYJe7",
  "key26": "62gwtnQKePBWdhL1MAAqLvcAMgZ6AG3zZkbRtrPqYfnJBzWC9miDHFv3ccKWyiYFFy4P1zePuUUH6Npfq44cmr1E",
  "key27": "26UagbUXKSht93iHygTL2ssrC35Y7psb2G1NLqqo8KvJnmBWZ7y8eSveJFExNJGy2dwc8XgidCQt87RKJgu4MJ34",
  "key28": "2hMv8zYLHqguDZohiZmMsB7WBF3xMTDEnYXvZ2YsvAxTNdeRzLs1ge4gwv5vpREjtZ4Wtm2ituruajjFCCEBv3zN",
  "key29": "4TiVPRrYaLZ4J6LuN9zoP1RDc41G3dfpFAqu2PkXPtVQPA9DSRiZVgHG64PwzrKXgyeuCmxfdcbaBA7Ym9aj5TdE",
  "key30": "2BN6Pb118AQcQkPtXe1eoa3cVkH3qeuG9ADQuXyKFHXN98w3DapeAEP3WvwDUwYdDBxc9ZoRj2cRD1vvNCXv92T9",
  "key31": "23ew2NPR2nGxMa8uJBrBKq4vNTjAi5vnVyXocu2KmMePqNHYqE6bUppjy4u6smo9BBN7Uk1rDCxW7TSu9jY8egqc",
  "key32": "2Lk9GvY5zxFJsahkEG5dGd7ftxjvfjF6Pm3jGv9xAE3ZeSDqzbz6nr9x2Za18Zie2z2dNQx8yqXrytXY2FubczzN",
  "key33": "4mvq7AxZ4ey6sC3KjvsPrY6a1MnAAuKEMbfBtQewHFMRM31fWGbZAK1EemfdK6rhPkhtHmS2HBy2qbbucCXwtaUg",
  "key34": "QEZ6wXxdJ8BGSi9yCGNjDkjT72s2Y3dbTkT8PaAybb5yMfQg7HNhkggn7NDHeYXrGjCioUZUXsaYQRgr5MzADSp",
  "key35": "5jpg2rPjCLVWqYkYcncVAu8DXxomgH1pQYoRq1MMt6i3vJuybyYCUetNTaA2SnVvX7qSpnSRpT7ahJRfxiErtjX6",
  "key36": "4WDuGZY1GKn3AQnjq5ktawjRG4F37YWGpCUCzaCxgCTQgVzJJ74me8mcKTetNcgvoRbn5QEwbc76VWCDuCjwzJb3"
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
