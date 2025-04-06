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
    "4pDuKtH158XRZAnnDBVnF12kuuV4T6u6ZixY39fCxeSyKoRw2M8My4774Xs91At1nZELCUHVkjfK2teTmHNu5iJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R6LrKoB7ny6wbndSevfhzdn3h6s66Y9tEDwX2CCkwMMH212YUozPW271Sss4FF3M1EQux98wsuMtAebikN7eg8r",
  "key1": "5K3dsX1RyMA8ji4Tdpdzk1aHyWuMaY9cPzasQ15CXo2aAKpC7CrpHfib6hSawsWRfzNGW5bMyzsTrek9M49jrRQ5",
  "key2": "8FWft5dicD7ofhFr73a5QN1vgX53bvs5Crqi2Kx2nb4vaCZfR9a9nSEJvhmz9UrZz1q1ACh9YZ7TdC5BAWvGT9m",
  "key3": "2CwFTVZpdHgqe16QhB67yteYkQLxtgiKqV7xggyzj7VnpFiwSkaHGnchBLxuhGigyTkhnHh9JNQZWjmCTV5KRe2h",
  "key4": "3nmQA9rf5ggVsVmJ8e49hNYKoz2YrR77cspYsTgHi4ea7mu2VsZoxqYyzNC7hJtSnWEPnZAf6g8N1rjiQ4bhZh5v",
  "key5": "5Qc6AzSg4uxKVaajVfNQeaFDYep3dox4QKg1CVi1tUGQp6CXYfnP72iNjkHFAD63g9Rp6eN2XBHURTbZvuAXBvvZ",
  "key6": "4WdVyny8SzdcEKsTpLSY9NUg8xDKBhjeVhWb2Fq5NqqERx8exAweuD8Y3K8Qn8WsUVK3pTj8Te4REPey5dkne1TH",
  "key7": "4wdbASWHERaAQzLNmtcoCmLuedB6qT9AXW9gDVLmqkkSZiEHy7pQjowJYB37xav3hKr1pYFf4bwByvLEpwJiCAob",
  "key8": "2PJsahbkMtZU6bpG6khGCgU3uHAyDvce8UJptfAzvoXTkYYHJTU4gqU1cx2F6ckgTcAMUCZvdCjPUisujFBwpyVY",
  "key9": "2dVECiijLdi6TxakaFUaSKNbj6Kmx6mf7Cevg6c8p7QajjkrkxrdYyS8GmcKaQmSZRRVLrAv7Ch5nXjWmt4XHG6S",
  "key10": "2f7naMkwAvL2XctX4KH5sQkBVM9kLTo2YXFB4HQGsfgpTCZazpiqv4mjeC2jGYpkiyiij1b4fPm14U23Uc72FwTC",
  "key11": "EfvDYSHhEanTo3Y2puJ392kx4Lc4TtPZmCUYu9Vj7tZ1HWCPhEvVJX7n2DZjFoRsKwfPQQC6YuX9WSPWMo7YEqr",
  "key12": "2qaz1HBsx4isSK5rWW3V6ExkVnHKBznq3vair551ZztcA9VDQkyWGWbWDJEQWRSq5vvuiRMzaCwyDpN3Gd6P73eM",
  "key13": "4iUXsJ6jcSsYpCgefMWKMC8jS4ZoVjBd8oVgJ8kaD8GFnQDyL7kpTaGphktWEdTFn84B7VJvcc3Ku4LuzLrZ3ACD",
  "key14": "4vb9LhjT8RYDkqhYzvJnNvzRCrdtoqtpSFWKsJnEVcL6dM1AvtugTb8YVwY2zHFFYPWSkLGhxjqW1ngqth4GGeYE",
  "key15": "Zc1GwYekybDmPn2N6bsJiEVRfcKjfLxZ7ShMcwSWkxVRqMx89ZcGHxQVXfCSJDRGSm9VRM8K5Qm5Y4qCyiKHje7",
  "key16": "2ZcnEzr4kghuuq4i9eJzSgcLS8vun3jcdujsvrEampaHiDoziBtZ9ASa2F918cpqKepxLprz6Mmecqsb5RnNcNgN",
  "key17": "2k2Ua1fTwH4TmxLELRbWhzEDNLzkePyvosTZLQdH4QpP1xgL5nfp3ucWhSUsgaW5SbEk9N2QH9tXn4T35tgnEhrw",
  "key18": "3ZyjarrhJrMpHXgcPYiaKQb2AWT4fDYEZLxBsX7PbG4NxaN1rjzdbfMbnaRBPrrwBuFQzVucouWbnWpmpER3aQmD",
  "key19": "4PBaEYw64AK4dX86cp5s6uHXBTbPsG4xLH5UJUoL17y8smZk3RFjZ8PnTgUmqZFqWtYjyBcLTbuzs5cbSfPuPDRK",
  "key20": "Qmgwxf2sR9LvEGrRjuZsftgT6qwWVaxEXa3gY6b7oBV9GLQ8Rf4H9Mqzspo91cX6XpjYjTLjY81Yz95h9PPN2qD",
  "key21": "2kTPaTtMgxk11kufWeRuETWteX29qqYD1BrVSqLQBtMouxcnqPaqhRzZoosTpbU2GEwB7BYcvy9fo8TrQFqiSsyh",
  "key22": "7nWZpkLUQy8qwTJUbJQdhpSHKStyE9HpFiP9bnRRoHRho4TM4uV7Z4BqAsiFCdccEbAc7mc71Y2S4Mqp69TafMY",
  "key23": "JHtpR1QT4y8MMWpJtF1DjV97ToptwdoTc8SfBMThpTHXE2RbDfRdmBEKZ2FMhYqbfR8hRxYgNgyEM9n1HfkE4St",
  "key24": "PFssUdEDpoZBzABShaGuwDPpbSDGa6USzpwCJf3q9HBJqTKnQRbBu4GM9sHr7rypkTFK574QKP3AFDdk8fPUzbQ",
  "key25": "3P6RBGTfZAD8AvSmi6RTRU4vTU57wgyMKXskW1Wc1PR3aEUswdExqcQMvhyA2f4yBtdxhESXDvWT6YrJFXyiFVGF",
  "key26": "44Ae2pi31rtzDKRU4upYUA6ALB1vno6b8SDpE9CWrifKhiUn5afaqEDfnm2dZUZNPUTWyTwbFkgaxWG4PRy59Ss3",
  "key27": "3gCPMYvoJSgZk3ErAwZSuL5pnDHaxc6EmvR24D8FECP4BSHLTP3Kb8iT7rKWwE4p8CKU7niiQaXr1Jeuqr47Dtvv",
  "key28": "27Xdz1uFBAdPLv3sLe3HWJDvvrXUuXcHNbQ6PPaGtF3VzZUtmxqawMziddStmr2CkpjC3i8eTHsgagWfob7NZ1vY",
  "key29": "31MJ1XzvwCSxH8LwBkATZjsXMvj6U7R3StyLJUbzFXi1buspxzNd6auVbkX9Dk4cAEv8sGwQK1iS8WT8YJSTzojY",
  "key30": "21V5E4CQDGLtxUWC2t8J4vdXgHs2yNwgk1qR9pMkHVvjgHxi6M2Pq9Lo19hGZi14tRjbn2HB5hYssxLb8GMpvqc8",
  "key31": "xBaq27W9Sy7wxpbvQmYiSNnmjucUTnPSW5VwUNQuBzWLatWx3qneNUp6qG9T5NHXcFnj19JPaWcfqoUos3DDNuX",
  "key32": "4wXZcCnFKmjRfJN1UJLZJX4TrLu37q1o1Wj7tLsVpkkvRLVJyxa2rjQDebWDc8ZcUYBtvhec8E2xgNx7Qf72ZTkB",
  "key33": "24eS7xBUmZVoT8oM2qX6KkCBpwHGV5S8VJfnpfqv95LLhmUR23qKXfgpPWkGifyLVPesTyorKFh1onuegFhGo7n1",
  "key34": "VsTNQ7RJtK4AVojbvNARXzBu3t85fTKauRiRUifxo47uBQhqUWZAXAgFhwBE1zLTfySniLGLtjM811St7sn13SR",
  "key35": "2bfHQbHhxQoGESwPoCYAhh9EepPeKJM8hc9mx4i4WS8r4EM1VEi56x8iBs825pvcDywjHdRzQkAo78wjPu9Re8nX",
  "key36": "3KfMudtxGRHgqmkGH4ZSm7u5do7HLH8RDsFdqS5sHL9UcRoqD27c51XHCmLcd8hqZEYzTUTa3kwxr1S5K6Mj8pDU",
  "key37": "2xo662LQ1G2MC5cdpoVAcDGjH8Yq2mt6YzVccuN1GFQT2b3GvDAwB7atVqP9p4bREFniHyk9Qphe9uiK859NvDBc",
  "key38": "32hcfaT6SjwPdzpfJefx9WL91CunvLxczkjCuujMUfQ8jFopMrp8XE61mJzzBk3McAxxanqEw54SV1W3c7i8SQiz",
  "key39": "3soG1q6o3DSp4hCVEfAqLxdPr4ZCBxaHMQyv2xuZe9zY7Ro1y4Sq61aMNKQnSP5BTbTwo5Rg3egSuB2iyeX24roU",
  "key40": "2PGBrsrForzJDf3e93giNFaXWUzeMUj58PMXeGFiNNZWkXre3P3srVAgBf5Xkzg9iaiFcFJyeFhNZKnprJjpG4WP",
  "key41": "5v24qogRcwP3AGzvHBpxKyji9wEc2SGNgm661XeZJA9cmtzA7TqA4vRf1LrXQAUHM5tcWk8JrBfhqWukNKJ4VN9h",
  "key42": "5a8ZpZSPEm1xpfqo3Z1BqLHK3h6pw8WefyBnpDwt415kGvpSMUiYKSgauXbvXBF4Sz7VU8ZvcwMBYo7C71RD23ja",
  "key43": "gvNU5i2mFtW3oTZjtLRigWmg2i6zyBZ11ftYdYWkYdUNrRJR1cG1WRQ2pK8AJdxGaLdCRBQFSi6J4YGSzBZZo29",
  "key44": "7pRwFynwEMNGXyewB67hob1af2qfFT6QLGziiSHzB7osUKU1pYMEKXXnauasdy5QahpFTMHG8RxZS4wjZFChBaC",
  "key45": "3n4axRRjakYZYuxXiRm3e6FWQux73RXu4cLmCUZvJWkZ9mAV73ypREJUHWX6bDyeEbX9EEgeZzXfHWFz5nC3oHQL",
  "key46": "2BNtUQnqAQaRbtEU56jYPdMceUiMNXw3vycQbcnvJKRGiR9u2s2271XW5KRMR8g9NLWB9mGTdDj44aaGVkS1jXG9",
  "key47": "3gnCoa2VFMTh47pk145sn3Pvd3JMqWVjjiRJUb5Y5qBNbJsrUzjUnjx1MFi1Vb9xDT7u3n1v1Cq5cHazjcihoK6Y",
  "key48": "4VgDqCaZGsSHRotS49PnZRHeQaBVGGDGPWhg9uaDPdUnjAe4BywiSXTkDtFcWRiDNW7vKjwuAohKUHVdssPFt6ss",
  "key49": "CSoigsGATERVLBRjaaSYhUZKDHSvE3eKHi9151SLtBqztLAG4P5S3dKVskM5VB2HjWZxTKmNL1mFBfiweLnycCy"
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
