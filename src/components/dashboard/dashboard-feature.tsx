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
    "4BLnhqTZNQjKiThebjHLHw6CfTUgKECSWH9YwRwnTEetAT9K8BiYhyeMts5F3GvqMver5imkXVynkLEiDKpKjWrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o23JoLW6kNv2ZbkpzRXqg1vYZvYBDN6We7XC3PUr6YEkV5Bst6sFoFvAbLYocqnUWaAXzrBTAUsTXqKuaRgd7dj",
  "key1": "4nvNwZ2EZ4g2ekCam3wgL1gGC7CLv7GhmhgN4G6TgHq4A2cBNPkoxdVevwriR3iusqgTShFgyA5dTytnYNYj3DMy",
  "key2": "nafTbnn9mKnZbxjXhup3jWLncQRUjeqyAunQHkGJiB2CPsDT9jSK7TqTmVPezMS9AQ8rDCdeNiKj1upYkfPvwnb",
  "key3": "2szBxwQCfMaeHnzJDLHS5CtZFNGaK3SuWUEpw8yCpx8nGGspNJ4H9aKYCmuNu7is6Rb6KHtBbNuq3xBZEQwTFYoj",
  "key4": "3Pw5bYWFe5KJFyPzFfYUXJJRF1eFjX3DTq6cqpnBjYQ6p6DNFfMUYhszJeR65QtvkzpfJuiAP6KCs9wX2ibcYk4H",
  "key5": "5XUK3cG8TeopjszVzfcXx4pERD3CeJBSuxgEQLzYZ4sPj5sXjTs6c5cNJV6LcfH4tAjitCCSrvmhkXT33k1bgTEx",
  "key6": "4wtFurt78Rp2gk7NtKmQLATfw8XSKAjkn18oYgEJpTiutnNgT9kAsK43Y62HEU5omHsqTb7ZAfLZRBJmmVjdETuc",
  "key7": "ksfbiYUbDfYt9y223zFqPUG1mqgBoj6kxNZE9xKhwuiKnFEzL4AddKGSASeGjFB2axNTv2qsRaCh2eLLoRE1KYv",
  "key8": "veJHBTnJcFNBL5X9NhXTYByXjNUQ62k1CggXkTSNSUD3gKGuL7ULb5zsxGc8eqHs4hCL61t4LFfuep5Z1D6c5Y5",
  "key9": "4upRN8zu9UnEW2TfZNB8T2TLFEdW7trjYzLgibcCVeEd7UdCgFJCyTEk3parZ8PViCZgw3UGWBjT8RgTfcCpAdu4",
  "key10": "2hj6fBZ2gQEhsdWzPkzxnuDG9SseUJrzp2gME18DEL1JLdXXWgvKsHNXrz5rS7GdJ5wti99Be6QMXGKjaTT9tn2A",
  "key11": "5Sr7BgP8z4N2qJVdMHf9XL6fJdovHQk7ApHapL7s2MQcSaW2kuUdQ19HBa5J8EsgavyWAjCaVqjjtFh7g6scSxDH",
  "key12": "5dqgvaT8SESpXfnjZ9PEVEq6mHsNRg6N45GoioMP1VeMA7L6dxLDskwJx4gSwakRSasjDaUDeXT1Q5AKTfejTcDt",
  "key13": "5evRzRE2czZuD6ncphzAB6c4aeQzLycespUXX8istxaKNyJie2MLf9tBL31mVHaXofte5K8hHGBs7nzwRFE8PoiR",
  "key14": "42hijJZvh2tfn4kf7yB28NTVTKpQt1zdd7L5ENuQKZH6jKnZDJyeyik6SH6749jnTJHGQTf7wE74hrY27kP6SzNc",
  "key15": "3htkTywgXNZTQ9hn6g7PhW75EbAqqhWymxJd3a9aHENHVuQeML6t21DY2qgAoqZKhMZrwCRzRQc1siefKHGxqgpQ",
  "key16": "ZMLqznKF9n3qNeuaUHuDTb8tWgXoDfeZTN8vjjKnnqtdEQdto56Ggn9VWWjn7FZuMD5ynyqssQLc5pHzfUSpNTp",
  "key17": "4CBKXM1sHfQPmPkpoFFonU6RVrejTDuDbEnnjQqGNG6yPuHthZ2bxGRVzvght8bntvgv6yaekzFAS8afqBSCtX4i",
  "key18": "2iUPhoMhwLyeSrAdPRfVmCaRgsb2yufQbR7jDMFpjsPtyi2zwBaYTMjZu9VC3ZFTgew3VeNvL2j2ewD2EdqCF5mp",
  "key19": "yx4Jz6yVkQP6hBrbzX3dRstYqAex4QBsfUqzvg4D86cgMsMT45e5Pk3xyY8KqXzvX5t6juYmHNvRkLeXppUHye5",
  "key20": "4bf5dNJpVbZ6rX5oou2cyTUNq2WAPqG5UbjkEwfVjVZFPRsU2yZWDniod22HTbq1CGAzoj9sH58qhCypmEbodKfX",
  "key21": "5QADvps9BuUjJo69e7BhMQ9kynW3pF649esnYo9rUqeVzEEPN4BS6qfDQ69x9JRcZRGysJFrQdqBeZh3okgr7fkT",
  "key22": "5UpXB3Qa2rpuf2g5YacHPU4wWdNnVG5XYiDtXW5GEr58HbuE7wKW9zss74ik4KU1qNJBMLH1dCSqh5ujFcNHDKXL",
  "key23": "N4vQGd3ok8Nt6ZTYJzoMxpN5BGQ68b8KAzVicy4EmqBL6Ja7ypNgwUSnKgANDovD5aRnLw7fc8RFEhMaJVcjD3c",
  "key24": "4SY7rKVcGbvDMWoJAXCxZV5SQnidmqh4VsSJGtP8SmAF9rCwjE4GrAMYBmVJyw7FfY7NPfbT48shkq6MU96pSXzR",
  "key25": "geo1akkwPVbVnjdzzi3m4HZd4iMKJzji6mUYviZog14kyvFrwpTr4wiCZjEeA5DKADQoS1LgWE2pEw212BpKTB5",
  "key26": "2JxrFrFBWryQWEDX5vGY1asRiCWHR4DcL7rvKFqur19NRUp2MwpNwPVGySMSp2KfApnz9ut4TP3ccm9nG7XkkCzn",
  "key27": "4F19prL3Eob7kpLKuzheSf8tquuPjL1hwFRtM3cC1KnbnzjLPhc5gPj652B2RNSopJYrynm9jFAHaePpys8z8esf",
  "key28": "4yez3TCNw9NdqWZv2mTWeSZXCC5ZtPivo2fzDG6DYctX6vNGFX8yYKGSWtUAMswy1MbdWxSQwhmQuGVs92MMaUN9",
  "key29": "38dpDWpqVbqaZiZNfekJbcwXu3GUZJ6p7aREALKaoDVYGXy7w8o9PJNbfDJddtLnaNyBwN6zh98rxzsmopmojnyE",
  "key30": "4MKKYCchMMgg6BVjWKSFQe5j2BxFR61iKtbSL5pivXqA1aJCm95MrN4vvZvgCQJ4dtejM5tk5c5xKHSDZ4C9HZ81",
  "key31": "3P1EzRgh1nk3k2bz1MAYMjihF6M3gEMPBGVEmgbCy1sb494DDHAJxrTXGUR18wUeyyvcnWFHMk7DWbMRW7rRcDcn",
  "key32": "3kLKbqkW5cn2NR254XSZpjTcTG4zJ46oJ2tGVU36mhY4ejCojq3CYwXzepWCEryj9Dgdop4JGVM51R8m6Bg6RjV9",
  "key33": "5yaA6E9sGkKsZyCAVJhrfGUJrdScyDp1dpyjvzA26GzRf3a1spiy4oWDqfZY7dvyk7wT9mjJchcnc4RRVMmsqSfW",
  "key34": "4kN8ohyEpAgZP8sqp8Dox4pDjkuJN4P6fYmL4rBYgcV896YcxCKavj2SPqtCDwjjnMorq2qDPS2UyJVAw2iJ3sbK",
  "key35": "3biB6wx5zaW3tqY4YvS7aXuXTv2ohQof8K1pUiJfPXnQt8WMzNsfpR2TAUQkdfMcakWfX2Qn5GmZpwhSrKYrzWpf",
  "key36": "qFprqzCukhz9nkGnZU1RqBke7yEeUv5Rz2jQZNWGkyAGL4kPfisFE6rZhxsW1YyjVeNAzqRrTE72G1mTptziLsY",
  "key37": "2XQZePAgUZs6rbti4KY8CFLTLDSHSXeqFM75GBru33xCQzA1rRN3T7u3LRAyosRkZUbt6UXkSENjeAbYJ9Emz5W2",
  "key38": "36pQ3Z1EQeenYLVShD3LbUvRh3BjbD2SMsxSHesTK3WcRRUjLBoKyEXsNrz99YFVunCtssd7VdbB9wrf67kMDcHt",
  "key39": "5UR1Mo64k9EpbUb5P5RhYg1N7BPean2XX7e41pf3xbAsyMSSifrz1H4QaNfZap7qg9ALyytybpmMVvxnSeTHAotW",
  "key40": "5kjvjYvrKBwFPHkiENzaRxWVkQ5JYgU9g21z7enymtZT7gQbQErkaBLa6TZXeyqiKGtj4VUf9Jbi158FUxXw9zD4",
  "key41": "4vXj2SSWWQRxutWfvYqJ8kqNENWHh16zGTLLEzEeeUcN6uHeVkGqc1nFtgpAC5m4Kb48G9V82mRjBH8AGDE37S5W",
  "key42": "2rLGW3c8JpMzeUgV7MC5QHsjqnVgmwG4umvnA87AkXo5vRn5inXQqhZx7XSZJjjdjC3zpMymydjCnMCgJcc4xsJC",
  "key43": "2nL1gzxdzCmFjt8i77x46RdZmq6yHd8o6kimaRZ5ryuLcjwX6hSYUePWU9MtA8oMZLAH25LeqVHtN7DXLTho2X9M",
  "key44": "2ZWfiGpXFGKD2Qbs5HhcUYyP9JTJMVVtPbpZA5HKvwSUWKwfTn37eMMgn2BvTbgAPsSg9CmpzDspA6pRZuipGWMY",
  "key45": "578mefMgUSfdxHYk3DVwAxP2bi2WkGY16JdbS2psC282Np4WNYoe1zengnpawtBV5VicQiX41i3MfKxXHUJSR6tQ",
  "key46": "3RvfRL7JeYN45bpVg6PU4j66ET9otNPD4PRVm6axYWFrKt8wqfxAazsYdDDCNpsGjjHba1EoHBVqFR5iAuAGkBp5",
  "key47": "5XdaKUfVVPWeYtAUnHPRkHZ1cgjYbQgY77SaA6rZmP82VQZtzrH8tNWTHsQmB9rS6x8uAYF5sZAwsyjczoNPerY6",
  "key48": "5sStkdjJpEupZvXMEcmVY3ucFYA9c3WLEqej7pwwhQLeycDJhG9271fNMsEjTvWX9jsYaFC51ihAw4eiFvTzjrXa",
  "key49": "29LudGf4UR3RscMNju1XFb3fGJBa7XaNGW5NZWJpY4CHd4TJrQnNF9FVuSGj9HMAhKCt4yjqyLHcc5nwD6Qaxrjs"
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
