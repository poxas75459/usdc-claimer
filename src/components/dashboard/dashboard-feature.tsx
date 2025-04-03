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
    "igTDD4T6T3ivDWceud4iMrgiiq8FveMGkpJpiMXsLRQgct6yMV2AmBFZbyic3hP41pafApzxMoX67Gq7hdxHC4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jgLGzaiqNDenzckKfQsGa1TigpNHCLPPDc955T9ko4NCdjnn4FYcsfZmNaWLKRpo9sgazjnRxc7xSYKT2corZjm",
  "key1": "2kfnXeaWSyHE5mDRtZBpKCaasjxUrEmcXMLjYJBfT4Uhu3zR81Grr8uxKcjYuEAWAJkMo3nsFhuYLvfLXoYLm9ub",
  "key2": "tCrUrxCz2RdTgygFcYACRrUabm7adMQJR9DsEBJFWQYwZyuj7zvFzFvK9Pyh3GZyGRnj4xwXAnWbCXtKKE993w8",
  "key3": "4Us7PkpqGGUTRGHcBrS5r32ocmLYkKPX2isAXvRKCATkX2QFWhVcyi7za4wxUyTV17xZaGMem82axYMZY52ybzhX",
  "key4": "4rJT6h5EkRuESEw2PRgFt1WeDy5ggjwFGBATG12rHGFNC4nwYTS5iiVz2R9j9MaqngUoFABrp25i7jvoc2Xzofxw",
  "key5": "qxVxwba1ZY4AS7ooA6UuXueA9TbLrPGmJwMugzvQZ5pTmpfygeTLENDGAUjVY2iWFC2TyEGPwAhUqEu7ySzYf1t",
  "key6": "2aGsQx3Mm4yFayxkJzHbLaoqwiFDwngwLLi9qUY1DJN4eMnepLd67P7wkkdk7qjnzjDnFD5kUp3Ud8og9ZWyPoFM",
  "key7": "5iAAhsSUsakWqn1eVPXQLnVs54DiMN3ifBcVNB5uadbSyLy9sNxemD59amTACgrFxYrSJtS2DLKQpwZA2MsRdJPT",
  "key8": "4LNXwPc55oWfZhJyS3YMMY4iyj5LUa7RFUFD814ww17ykuqieLmnvABf3d7bCxgedVSZ12s7bwRKyPZtVEsUPYQt",
  "key9": "63tvVpJeGHjAPHMgdTwonc6Mz6rzHP1Pv73X2wqB7uwKQYvoGewaaYWyS7g9tx5vW1UAoNxi8xAyyHBcwXYsmypF",
  "key10": "5FDr68fzGKjuF5xVktJdZjKddu6fF1gDtdJ73Z9BrHkK9DxnhCdUSuE1A64zyfs74PbaRdehCGZCBJ3UPwJKsXAG",
  "key11": "4htKTPaJb624xqqEKeCygsHuePDGdJ46TvPTAwjDBz4KWdKknkuhPtr62vB9JBEsgzUjXRxX9keMieTyt5t1sfPH",
  "key12": "3vdHhPGXDhV2QNrMgsdRH889sWDPMiTXBbvHgm44nCN59QDvDv19mahBQ9dehVj7h6f6fdL4pH9wE8J4QJW7XhPb",
  "key13": "2YjPT7bK5EpTnTcZvM7BvFEYeAjPMttExhzdSCG49iFTxHCz8zVAAeSveLPxeSBpannQvjcYFX4p24qcdQz1X8uM",
  "key14": "24B2SJnzk5477kUZVy3HxZ9svoNwZfXUC4EaFxiERL1GeJmZsRRYEaU44jeGfJGMbyNN3kYGNicDWtwsm8uvxnXw",
  "key15": "4MManx4X7U7AS9HRphfgazQvNQtRU4ayojGqUE74Hut4rKKvwwCf5B4pNRqJYzD1CeBu6Y2fiPwiRoj4j6EAX8Tf",
  "key16": "2Sybm37MwjWTob8JwU38HZreZnvKndqtVPRHPWtr9TyenfkKFdsXj4kSrrWWQqd7oPoV5cNV5fe4YFNJeo5NSRTp",
  "key17": "5hWYVFxrvrdzSbZTnSPRfCw9dE4vvaAEVaR5KobwuUWbF8SZABdgVADiLGqfAbgHQCLwh66Cam6S6EzEojcVCtr9",
  "key18": "5FUuP9hLcLV2bC4Khu8qqp8cJDNf5TXvQHvcs2VK6qvioqSbnhSqhXMsTPp4xSyFKbvvPzvBGc4dgThg9gfgW46P",
  "key19": "5U1wx9C3bNMQT7gTHwbDJ4yAd6iGSr5KmvnV3vee345PiFx6X2YhicbrnRYCCfUNf1JnR2qcc59onzdJZfAnYtdk",
  "key20": "8RhdLhYwaSgcm8PMwiTDJAtTAvAUwhVdkwx2QjLHEvAZRe8MMeC8yo1GDjFaYbp7Lzs3BvGnrWctyq6WPE8bUjM",
  "key21": "4W2VW3Que9skVD3FJbniTc4X7xabFUwJiHyckaZpJtstmNREvfahk1faDcz417DwoAn7udSGpmUa7QMCGsFZy5jT",
  "key22": "YRY7Xu8Zg2cSJHVdp9i77VvNEaKCbQWX3Tr56T9tA9W691H7bH4rozP9VbQ7LBkqxKsQaosKvKRzJgQjYGhL5qa",
  "key23": "9B27RqHGhVbuB6ZjfCUUJce3jMxr6MqQH7nMoQF2ADXNFEgQAxzD2kEEPAj6CtTxGxBifuzSGkB5PghWU7jM2dc",
  "key24": "5sKeGNxCub2ceyADn3kr3qMWrWfZtogvgcH24wm4nbxpL3XJz77YpuCQBDPWHb7uXcxf5WQhFdskuWgGdrYg4chg",
  "key25": "PoWARBo51XKC4W87HurQL4wu4Pd7QBcuA66E9oTKYNQ2YQCGeL7HGfK4QFrMmcRNGcY5CsSzkF9meywXGJy18XL",
  "key26": "3ZyrCAXjcQcVsMUh81nSqWawe7hpRxY5cdvzDnNhZwcG9DEp2vfCxtg3kTaPEzTgpyvSWxygVLLkYbL22dS9q5un",
  "key27": "4b3cptw7J9VopcTtSVkmrbwYRinJBvqbLqTa7PMrw2sfJZdRo1UMM5efzpgqBL26TmkzGyqPFzBQVmcmY8HNDkE1",
  "key28": "2k6rUbJ31F79dtbNEBLQWSy9UoT219hsagKFB7vywSsgQrEYxBsDMnxJrwkYXbCdA7maqZH9UzWVxvr7w8iZiXQW",
  "key29": "53bbTSGLhynqcsTqaP6KS3KATMRDhBsA9dnZ1ro7MRMciX2eUkQ2iAW4k6y7bh2mJJ69uZxtkQUAQX6sQQrfNGr7",
  "key30": "3aNeZ3p9K65BHavo83nfdepv1tcJAv83s4Fqq6M9nnkTMcu8VLC5Yhubg4hqB6E2GF8pBmAk3AuBtPq1cq6s53JA",
  "key31": "35SneASXExaK9QKQdsXjmcaG8Jk5GuwfNT6mMKQvM2awBftVSF6VpijcnqqJSStz2Dd35WBxeTyVwKP4y22MVm6z",
  "key32": "1yKe8Cj9JBtrpdY2KZ5SCLsTbBMLhvNWfiQ3vEFk6PiywfwPirfjES5ZD2SDt3NCWM6dEk2AuYD1enuch4L8wLk",
  "key33": "64tpVSuWf27vnVfEs8ZFtFTnn61Ro7z1gkEt2gnJNsv6jKXzhTDH6i4SJmwVxjb5tw69DfXptijAHP6WLHJaFaQC",
  "key34": "PHc7ZpiqvubrfymLHzbKaEbh5D1UZDYesM7bpnZ8VhxvuT5drG7Ljmk4DPwvwEi6MdYUfHeC5EjiYkYraMCWkRQ",
  "key35": "3KB6QAmKEPy2px96Y3ngLSYKHCZACKTcsboamDy1Q4W25ZDJZAewqohEB71AhJQWDsm415qcfXpPLEfKRNFZgggG",
  "key36": "LDWmThWpLoe118E7yTtELdNgocgAD1jH3e8N2uL27vxpcVyGXk4udMrzvUB2xvthApGLo7CMPbjV2hyqzY6oicA",
  "key37": "5ULLzeZi5YoN2JziUqLHS3tf9RoTpF6wDbP3mcefN8CJEv3egyrokLFUQSLq4hUeWk9auELKesXtfj9cgXzRSwgq",
  "key38": "4a3C23dH91q1obKPzQdujnchAikWt1diKWkVqWbuNKMjt2Jw25DAus4evQEDZZNgh4pPWotbGQcGvEKiLVruoVzV",
  "key39": "2seGw6GLqkMLfJvNGerEben8V7w4yv2amjfqRS41Dt1NL4Hgo7Ja9Ju6sRe9sLDruF4Tm3x9MhTRDmcSgwH3vKMu",
  "key40": "3cp1tiady8vf5VTY5nBnCMDd93P2VRovFzUSMkvNL14wUdk5KU2LKc5Zh7araLzZmpfR8aLcM32kKhK2yB53ULay",
  "key41": "Gj61R7xrh29WaGKt6K4A9QKv1EQs88EpVfR6B5g549279JGdB97fR8Jw4vqtpJJvcyFHiarzwWViZJJ31M8NR28",
  "key42": "5VX1vk5YwUSdVx3N8DUL2F3WN6LYXxEbh6aNtXNJCbjNfsSfuAsWRoRaaBi9fuEwYHXJsGPUFkybZbtYmLNj2EK1",
  "key43": "3WBzSJAd1f1BQ9WvZnrNpEnjfEfYZo3hY8LSjnZFtiSkJbkfEACZ6wXXVusvArwU6SGKVM127twB2HZu4x8TxU8E",
  "key44": "2x1aK5gaod14zjFJ9U6uBXP4oNftjdRuJzAFuCrJ21FPqBX7o865ZKQVRFYs1BE5upE5rB5LKZQ76YV38FE1zqi3",
  "key45": "3MwYxEQyGvER2ESJvVYp5ciLvnf7WheBCn1t8vd6giEVCqnRGBETPabofduusHpvbd76gqw6r5PKibcsVsk8QZiX",
  "key46": "2zsd596hfBjcs8bUG6GaKf26dXVZZmtEaw8vkJFaJcg43hmzpBjULv3cMWgBr3aMcHjhz1w55pqRXovf3onYDLnv",
  "key47": "2sPmhPkSXUufmCvsRWc2tooEYsh4dAav39qMwLa1194D8FgqubiytGVuPCR3bqaNBqPP56uAsw2x15D43jRRDzmr",
  "key48": "4wC92a35qFR9qckbJa2ChtyGdmDGv5VuEXSmnudQrYJz9Hcp7FKBoSFHjofiSC8idSfvzhDYaxi99aoXLBxQMFRp"
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
