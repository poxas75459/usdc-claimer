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
    "2FyFhGEUvhntRf1KkS34Y3k7LrzAAaihJy3MFn5jGw9zYs8BNuaExFYf1XwbCaiUuq9QTxfDkenAZkbkSAsBwLdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qnqoC3bPUQKVWRaWZJ5FqJQqvMEeqRThca3EdjX9kpLtmRbSW7WiPaPcbeT9MP4qnzAuE69smg8rov8VXvTTCmf",
  "key1": "5bnJkTzGhgYPxRXHBBGuf42yYgRbMWF9deSDu13UKuPHp4rKerKZ6XuBEhXyVzCAM2wwzjXxCcsVGt3ikwfa1RyN",
  "key2": "4Sd45VogUR4SjqEsHcVHkr2SzA4KGhzp747J2ySy6n3VN6GqAmKuSs4v1upuugUSaVrogKzRXw2VS2DNfaHVFaJd",
  "key3": "64iUiFfd56w59MkidUc3qu78iKWweBLmZxnbCpApkyEePrAcU8obovBu7ooXghmLaKeoASsTvrqsZrapFcJPiWZa",
  "key4": "2NkmaHU4m1AaGxULPQEtLa6TtJJHGPWhgNcJpWExx3XKXwUDQC5rZqFSK4Ne3vpnnNBsVtRPUHu3vEuw2XkYgGMy",
  "key5": "5HmJguznMWsqQqtqP6XkGoXMKKNYcubqgV4m1FYgJNVDuzjbjQYdM9AsviHeJpsaskv3skcgtxeS8Peo255iiLQy",
  "key6": "5FEWs2Di3SuA6625fCyoycYZKqtaKinLTaDxDPraNjqMqKTwuKwG7aTQE5kmiQYfXTE5QhF3djs7zj14f84YpjyW",
  "key7": "5SEwzNMg2aCaAeEqC44uFZZBrg4TneH79Pbx2cUxoh7LzWACe7615vXEb4Ya7jkFCmh52vqYvDbWh75sQEEaLbmp",
  "key8": "2d86Tv4rB9P1w3HLNAmUbHSh3ZVqEBJkjyDGtbhKpMm28h58i6f27zsdJCQvKtNsXLMLKUWBVHUCHFPUf3UGJsSc",
  "key9": "k9mpsyTHecGV2StMS5a4JaoArs5fRU5FYqGtPKnbmb2vxqojMWituXtF4p318JyqVjbKVfqaxhdBrrnUz5CASSq",
  "key10": "5zNKcRofkwexzUE9jV78QqF2fbYJaFpuePEbJ3h2Fr7zMDu1Bgb6uxfMBbDJDBAwF5uNHk4GDN6FMD4JXufyViH8",
  "key11": "53AVHAfH5wFXcfrjH3m6T5Wix69qSyVgpjxrYWPXzqM1ChUsRmfg3Jn53KN7f9qbt9B3K7sYKNbf2uNhd5L5xmHX",
  "key12": "5ZCksUVFT9vjEmt4KSAjr3LfYm3bXF2XVoefrMLeLRuHSMv813qEDjPqmgFxWo3jREAk1saPLm1ni7V4T48nz5Wk",
  "key13": "5wpFSNac5Zn3Q5nsXEgVmdDsikzEpcbsy5r2AdVrBpDyJBbmxku7SXuYcpgnrYnHnXa5ktiG98NdfpLsHdReWCDF",
  "key14": "gd4t1T75x3Dj5NFj7eq5gFWAnihoy6nGsxUu6npqwgR5BfAFPjc2CB1eoFqDYhYSLsy8bofotMvSDQm71AGfQy8",
  "key15": "UnM2d2ZppgXHzF4qKT8Zk582WenNdngaPMNGBGq8QMAcmUaM4DbEX1HWm2hsDTnujropzKiQY14esmVNZJR77cf",
  "key16": "5nR5rmVBG9qegGeAfMrwXrNRDyWp9kzKEgsDo3gqVSRr34xyhZ9bq9oRGkH1snaDiMmN5FLC1RvMUQGtz1Sc3UnM",
  "key17": "2vBkRYw8E3AtHgR2PuWUcjXcsp6h9AT3EbDsD8PW7vdE72zSKbGdbHppW3YZ7N642JnjQCdpsjtq73oNTbL2butK",
  "key18": "5wD2BDrcCddWFmi3Rsq6oPxMbytRGb8upNnJA7kak7PtXdDDxP7GYPDdGgdg8s21VpR2w8vNdxNg6Q2LXGey7HAT",
  "key19": "4y3VJHjfkSLQHVnLahstS7MmXi54SF3twvDLrUjVYwLSMhydZ3uxeDECYdp6X15jGBb4Bc1L4RSN1Wx71D7izwDA",
  "key20": "4aF7UzR4QwCu9BoP5LuP2QV3kCKYxt4eTY3yVszLkQ2RYu4D8E21cCQQmqSFjuya8Gwzm6cUe8EZbmKnRbs8Gzsw",
  "key21": "J8jvruAqHZ4KcHRWKhnYxWTV3Ci7jcmgHkrmsmse2B4fAS9rjazianbGujg5bhDNLyFkciRMqYcRDT1AzbcTXrR",
  "key22": "BN91S5v59xpyEH6EZJBw1GsJwvcbYhAErzKmjdcDsQ4Ka91q7UyD91KJ5upKssau17RLbZF1Avk5G3PL182MRzb",
  "key23": "5FkkjQQKVrvg6uwsS6wgkeeiNmtnW4hvpaAH1dcP1upi6dJVzHPkQc2DgWwULpFbyXghshsderDn6AMd6gh1Q3ui",
  "key24": "haBQXFt4GBFV9KYEpDBAh8tJKpodMxqjNEqxK1cfH3gfUo3wgvbU2dXknSmbeARd8vBof6mzRoHAZiyHYxFPvQx",
  "key25": "2KHAfFgVCQJnCV181Yg42AQQ3ZyYhYn4KiFg4rjtZ4GET6vae1VYYFQTsH6QJNhrjb8JkZnWZZLHL7sYU8MLhedQ",
  "key26": "2S2Yw6JSdqaXTg9sMC1HHbRuUrspncB3mk8TcUPZQmhuoDTVn24DdyoSMANFTTJ595yzunHkd6KsdyFbyYGz3ABB",
  "key27": "3hkjc2BwFQX4cxkh9zsD6AfoHDLpBRVUr1cuBmWrbWYcuRAwiyG3NJTDVcb4ADmQKDC6fMHoduCFrB6XuSk5dGTD",
  "key28": "5QodmaL4cBUDwyfZsSLMf2SoQspwkE8JjKH9ce4Udm7PBEJS6e88rCMvATuRpge25ZbJabfKRYxc6jUnDhFMyP65",
  "key29": "6qgDuNphhTUWqHRSGitBNoonKTqsbYUPB9WBDXPfRtGhuZeThgzvNQ7GDt3UnSZHsTz6LroVBu2jEP1RWGgNivC",
  "key30": "3MGtD4rgD7hJktTz9nTf7FGvWV8PQc3T26bQs74DPzgCvfM1tjq3LCwd4gTueuo5xcpHvrduE2Wvpq72Z5fBkKdE",
  "key31": "3N26CG8YYCiGa6aHr1ado3JMuaFd5FFeEzt7sibQnTyY71vFUqBhUSF48kk5XsF1XLih329rGt7LYNb16K6Uo18L",
  "key32": "4jZfqUjTvxPChrREw1PFCK6Kz4uaThjypBA63qffVrRbEDdsvwn5wH8E9RFWWmyH4mkcZRz3Gnt9gTVvwrr49fwe",
  "key33": "4yc4b1VpVWW4zcc2NAYX4rBbf7rg4wiyjigNGQrMfR9vvpTC6CbXpgL9Qp4paj6fCzeYNMNikrHAKutzZCcdYMsQ",
  "key34": "bE7PjX8TFv45cbUfKd5uogjJ2DthLqxabNUqETjoDMoJwx9VErkGUD2gKR9TSrCqyADsfbpRazKsWMKk4vhyXtQ",
  "key35": "31tKxQiJKQ3tt9Wv5SfJM4PameGJ7U1PwSD2g8ubhQ27nsLdWRHg2B2TZzWvxfvjHwZ66W8ypwArz1y7HhJLBNP",
  "key36": "3KXmqEb46Gwup1DyHEKKnNy3RnD8LrVM88yrbzk1ThGrNu2491zqCV3bPBPAQkrsxvGrxwnKt8Wmntm5abFvAiC6",
  "key37": "3tJMDWEZJGYLReVz1efvPESRCLAHBvxgp3UFt4yxm8uHonbAVgQJZ52raoP8mcgZ3VrJh8ozdVfcfLPo7JRMkGXk",
  "key38": "5sN3a5kHCL89iJMH8L4oQbCg4XL61PFkj8nAktEJ1eEYdZy7YZSb8z7PLrfn1DKiDdxgQT87v3Xk38rX4uoRwzFh",
  "key39": "61wiVGKLYLHZwGAkYaFiaNycDPLPLnuy4Hcoz98TGbGRFda98NqrSGn8rGdiq4W4UfJ9fbrm7VhgJ3XnP5hyd2Hf",
  "key40": "4svPHNr1FTCWg6gBEkgU69Lj6vhnxbuHkUAjhSJPj44D4egD6C3pN7HMnCExUXvQiAfLPKogKHzybMH4AQEG8zVx",
  "key41": "2V4nHrayrwdEpGttQkEroG4v4cLkcjHMLjAHZUeYzZZHdvbTYfqJgbttRDaPEiyxyJPi5DSveQvP8jGfvmeKSQA",
  "key42": "3oDcmh6uQfCwCzpPCKtC4GhxQ5LhopGj7TFrJyBwy6rX4q4RjMvrEnqR5VqgwmLjX3tVP41fWgTmacSYWqcZUhtm",
  "key43": "2eF78gy8erdzwDmNYhtPPzPShXKiuvZHgnjDa29XSuHnaTqxxUEyzTYaqTg3XZ4SvSqj5z8BicyBWMGxZRmz8kM8",
  "key44": "3QCBR5bqupK5vmG7Fx8jNPeTKdRsQM62y3sMMPDCzjAYzBG8jCxPtnf6PPWCW4GE9qvqvNy4WvxwTrdRUr95pN2z",
  "key45": "3SQF6k7741eBqrR2q24rTdmazDQ3Fv9Z594J5fNyyXBKpEL3Q7ztdAEqfChXj1mULj8mnU2LLXSCVD9iVN44QtPU",
  "key46": "4VqqznSeen2iYZHStdzZyy8x7vBduogiYjXdvrjVD9mV8FNwFjWLXGCCJC1fKDkbwrq5fnyu84ZghJar5vayDaRB",
  "key47": "jLcpo5FmoXRSbahj7euJ4SqAt5hkkNmxFUQeL6K12NWvzoaMiVQjnh1WLQwFnUduQ4jzLuu3t1eQ1TB8yeCGUWu",
  "key48": "4GEi7XVHjzNadVgm2iLJndxHhQHMQEiGxxCfy5C2hcRG3QGiaJmbG1U5uFzfwsU9g8DkokUhtXAXqHAb7QMctYXn"
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
