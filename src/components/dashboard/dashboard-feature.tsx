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
    "2epfrdPDBiXyEvUrYkYJyPegbM6bHne7aJoefD6VqNdY6uFFGUtStRDPtMtAzz1ixpK9Dg3HxPfMzoiyu8Dsfr9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qqeu2SAGAo3gVwySVodaS9sg3QXz56G3oBu4UMjjYCJtrpG34g97V46rH84DWKQJS6NnAp9idjnEXH3Axmmft7c",
  "key1": "CJ4h7Pw3mUepbhj65qHnUMCp7iM6JantgvcSnsykK8ENcprg7KHyKr3j5yBRsuWA8Q39W8XxahctemJXTZH6jFy",
  "key2": "4PSKgRSZQvFhJk2BNP5b5tqUKPqXzgAB787hJ3cKMrVsJdQu2xzGED9KZRp2qJwqx99RAcAx1VfYx7v3Rfg5aC6L",
  "key3": "3tFtZdF8MoFWHfGAe194HboHZNnH9rv3B3JLZHFUMiZqnnnFb9UUGDjsaqqaXMFgmxPJ5aNz6KhuoC3ia29Cwz2i",
  "key4": "2CppawptYdHGvqftJJ4dzW81SA8nvCTe4gF2QU4GcH8FHBMz17k35EJi5hcbM5tgjpZig9oeQH2gwh16UgU7srSP",
  "key5": "3m7oetYVN3u3EiXPDYrje8mZoQ9UyxeSnfWfmNhvSubnzqhgXGMAhGtSs5RDDe3kcjmudHZLTudWDVZ7gFwa8QXq",
  "key6": "4pHgjJahTSdNXiXZjtsEnkALqUemNyqCY7xjhta8Wu649QbKPJbzZDiTrVLKmqPwAkNK3XJQcppuYpKrQ3n3o7aa",
  "key7": "3YzHHkt9D9ARtBkdEbjRnJ7DMgThabU5zBeEKoDrQ3EeXD6BHdwLVdAVDEiMyFRDEQGnUtoUP3kTE6GRBE2anxPo",
  "key8": "2VcaZsfBUSBes1WeYxMxY9ZRiiaNzWg9M8CReYDbobknZzYoYTPerR9U1gDG67hZWQjhAsib1zhUWQhYULkiXSMJ",
  "key9": "2oXCULVwFp3WuohKsqTDCoZfuZhSXrDrX34ZG7CiARRQyJnXjqT1JZK18GknSKTJibjVv43sKcYxjWkB7hzPuc6b",
  "key10": "52raX4HzPRgM2jromHar19Tm1j4gsnPsdYKXR9b7BwTnavAastEZ4DMX485M6UViimU39uA9CQjUei1EissSrFie",
  "key11": "4GhZW7TqgpRU45un6Sc5UuunWBZJZ7EBq73D51dLjbmcoeJwxdtJ2DnY4PnawWyUcWvZ7kUikMdFrA2hVsG6qtDi",
  "key12": "wYnkq3a9yD8EvuDYZEkF3t4vP5h5Hxuj1eMaqFv8HvMB74HvWspZj2KwHgMFZmjzFfZyqYUMPdUqiPksRFJo1kV",
  "key13": "25krQMgCP2xcYHtRNXUeotjDgr9W5xK5cc5wzSUrbkVMWMqijLELerGWeU1FycmxiaQGnv8L6iqvy3bMGgVzbbsC",
  "key14": "5XoCTmFnRoVge4vKKwDQWb4yVreL4fZYdWq1hUT57S4k9gZzNEvmVJBPaA9oo4X4TWqy53yyRKdk8SKUCasJgC8a",
  "key15": "358e28NP6AksDJhpTWuzjY242KKz5MGZnJVrMPq3135x9d5JVFRE6yZ8Fk6msZCYFVZTUMvPvJtinG5mzcHT48Hz",
  "key16": "2SpWYPpa9fDanyzhpL5uAJT8m5tAnNwzBvJjYoEZAnW6rMcjMNPw4oEmWs7XMMy8PmHmi7GAS5cKeG5mmhjzhUAC",
  "key17": "37qBm9wJVonTdMarDnDDsSfCbKuTMcvpSiZnLEzAiL51RTKrpnQnBHa9kknwt4t94QcjnkQNw4nHunzLeP3vSqrm",
  "key18": "3j9siAqEXXbWLswZXFWi7P3EuDzRHqaq1AN5g1J6vAMJTXdVKkQzMg1RwnAQc14jmCLXm8Bpo1WhvkKnKriskAtm",
  "key19": "2K6wv5q6EqDkJxPS4jHUW6SjCThYC3Sc9KYhjwDiVsK5eCz3nxY7PT5ezF6tWfLsRAMdxPqB3SuCQ2pehzNWZwkB",
  "key20": "ho2up1yY7PzcJMsjXipH579kZQvjx9cjhRnSiEUdWLi9nQWf7HW5m7FxJjBC5nUUgZrPJktw8GBeB25snb525aL",
  "key21": "FLpZVyAPKwdvs8rrEpLhuyMdkemtvGEP39koLf7cZEL6KfbcosTB6NksHbKRniRnUqcgapaYAgHBfNYjCxDoK4R",
  "key22": "4FSeQTyiJSZnHo7MvLREMHqMozu3rcAyAJq48ZT9a444S6jNt7pZJSSzLYkYSXp7aWswXjN3fA5H1h9DLJY6TWUa",
  "key23": "4hXFjHnDt6yr8vTnNaaiVCzruYzDLUrnvRsmeVKqbuijH8LgWk5PT4MTSM1FTpBCPJMAsarVQQ7pEtmZ6Wdk3wGH",
  "key24": "4NFGEpJjS1b7rkb1UoBojjXykuZroPe2xTiTLgNxZHweQXcfeVk4R8mUE3dWvJHGeuZ699pQ3AQQUPfq87VKZWfq",
  "key25": "4GhmH5ViwnCZceyX7RkukMb1QdaPccw4NEdSdud9gNquREaumgRS61PgaGup1RuLf6p41pqjo1bFs6JtEGpDkvw",
  "key26": "96RRHsw7HVgeaw4UGoqmjAVSuNpsJTyq1z2ErpiB7Qrjn8WHkgn9kYqrP1YugwSr2GTpq9JEr8VNEAkg873wzgV",
  "key27": "2jNvuT7Qkq9g25GWEKFvCL9EJXRGvg5eyHxHen3Y6VExgX17VRPEC54TYVTfa5qEm5BFTGKYaka4HuJevZLQZtv4",
  "key28": "Yq4jLYqgwuGoXmnoZUHrZJFisgFUo56sUezpQtszxr2hAQzKTnfDfaSW6PaZuyncLw1fnYnb76KPs6dLXdvPTxs",
  "key29": "XwQrLobhySydjvC8mDQBpXJ4mGvoL46z97DD4EV2Yi79158CKAnUEtbcjQHk2yBYs5dCgdXU493FygfVYz9KFcE",
  "key30": "G2SZRB9K26WcPpLwAUntALGNCjgjBY3NqMhwGcLyZSq4mUgSgQyduQtx3fWbiwNDE8n1xfCiuww3gCd99SkLhG5",
  "key31": "3d41PxKZMA7uw5wFy4s7knP7ShPSCxbHon9WxKomdY8YYFyoVDqSLNpaLEoLwwQc9EWfAUvr95urPP7ApHw5pRkF",
  "key32": "4WVRvaTDGx8Ao1MC1bkocP2RyDsnEGwwJK4sFoyizF4mxQyQqDMxriQZU1MGovjdpHgfqmsJ93LSEsC7mnGDFZfS",
  "key33": "5fKgohPudWgTxeAR5Sd3SaWPoNAMfojpuraWWKUK4Lenw2EnHcxCtAH7YGNTyxRRwcGdMy2uGM8DogjYs6iKYRSc",
  "key34": "63cAYgfryPwyT99W5cvcfc8L4pNwTSMJw6ojZwxXM6ztRK4xd7kpwrsf3j9sfaCZWNcqTvtsywmKqG2SpZP8wgk2",
  "key35": "4TUcQT56J27ahWRdtpfrfFdcU4ZkehbyLFnm2NbaADeeZFEm17RYnDUdH6NKx6FpniXkRe5sJkHx1P1nyjR8kaNU",
  "key36": "5gn2GeLA44fd8T2XkeMAq4nvZYW1GtbsMbCwZ7YhzNHvbUTCeP9UPLM9gjXxFNdp2jR69aPgCy3c5g49kV6dRygV",
  "key37": "3m9DXA4dq3iFoNC44YWLKr16z7sSyuEE7qouf7Bp9JixpCTi3nRX2wNRGUJtxbko576E4mEtpeYvP2Fqe6LDAa4g",
  "key38": "3ixdfdKsVanWAkn97QBkXMrFibDwDSAenmRffmrDjkxBVMzSW8MNASzo78TtH7kXnBdQxysGQjp47t6SZYnLG53a",
  "key39": "5HAe1p4UH25aCFzB7bJUARwcHDbhQs8LZikgFswt4yvyNcx6FuisjDz3GQb3GQwPCwzY2XV71KgxWDVt1qV49sA9",
  "key40": "5hcKfEXLG1TP1wprsYe1sAJfgr7UTB9gWeLYPueig2sZsmjMMSUcHoKsL9CxfcjTZ1YsGYg85pjH9R8LZahxZsd6",
  "key41": "dDVY5cxPT5UA2Nhujm1XawKjHiLArwXrSpKJJohXBmdAFwFTXkTSC7P6qDoqTUjMTVtxWam5HdqsUca7yRDxfeS"
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
