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
    "2HmMC6pygvQnGLHY4rCYr3wg21Kvd7hs6LYsVgqyP6opu5GRAsFhrC9VZCZ9WpF1PJ1RLSP54E8cX9A1NeSE4NTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45SgMCrDonQ8TFwZLsp3AGrsgfQECDivkKmft5D3s5JMEKUE3CfXkjBfVD9cqoVsQUxBsdH2WFFgxXYLsRB2ExLp",
  "key1": "4ikCMZrLk425yLnovHbD7EbgVou4KCpHvStFbeSVEAvESKziyLVYnagEmraCJWsozVbytiJiHJSV22uybUoufxfH",
  "key2": "65h8qNQLxeoWTTL2FyDyJHuzvhoa1fhKY9yBPsbWurrdJ4321XaWT2SyDd2nAYUqSpnLy1sM7CCsU3ov4WzwBfje",
  "key3": "5Xf68HX6ERT8UYEZRmQFLdqMGzBG5CHXKV5etu8FcR3L2mwXbsPXJRHWPkmPQnyg82J1uEvWmqPPFhffnmnJeGwp",
  "key4": "4YNHyv94UamtNwnxygLEPpSUMMdg33BJYNBgyY22jT1i4NsqVnU8PeyNa6VBuXuq8YT9kkbDisk8F4ttWhHMdvTa",
  "key5": "54uFB59q5jAzKwkD7FFGTJ58WmWHwRcJepECqbUYhKEcWwuMAkNLnPHbATMBz2Z7rzd6E3j3Y7KfuBww1yUUoqw9",
  "key6": "5Zr6wDSZJ4m3vzZxwWJ5R3aAHduPTgTP2x9RQzDsbC9cbu3P75TrK37r1ZFMKeMxGmdNC9WaKjCjz5xvLucCpmgN",
  "key7": "4J8qzAMiQbQyTokcWLtqZeqesVDda6SbUKB6bw6cztcK1t6dcrD1ksoX9j4LfEqzxrXTk9pzhM7vfiCEzYCipSJ7",
  "key8": "XRJeu4maK7KEmGS9cz1k75TWqyvZZteJWMSdMaHfFkyHx6YoZ6h1j56Q8Ur93VYywMtZSGVp7ViseSZ4LKwja6Y",
  "key9": "3hnaWcVK1x9Z7prpRby5oLD1rF33CoUfv9CZVk5Pi8YgrCuksFu1vnWJThkupQe5594cn7sCHQCytMUXa4cacpZy",
  "key10": "4rSEDPexzTwUsnUXogaNHm6Ps9J9ZiaQmmV5mQPXiu3rS33ePHRXd9GGStjKqeVFxjtbZFBuz5BeSLB87fpjno9b",
  "key11": "rdWbqPSK4pz9FKk7BCVcN6i8a9aF6Fn4KBQxYaUd2esrkLBrC7TEQbTor8Xu5iaMtm715yKwSs4NezjchxcsYDY",
  "key12": "3g9UnXt3XVmh8AjYjgmtM2QMxcGsMnDPBQXBMsQqFbdYC2jeM7PNmEFCZyx8yZEShFLhDnCr58xU5oEWq8bDbNiu",
  "key13": "LRJp7Ytys2yTYtUxWgD6yZKx7aZLFNZBkcKaK9orPW3B9zB4BHtqJk426or5VzzDLEsYhLWBZpKptTQ2efn3rTN",
  "key14": "mTaHBgvRzi7DBsvwaoH78CVDAXvwFzEJgkXMPCHfganZoSkpJp1AdNWrzy6VunLkCFY57EN344oh1QP3nywFoKr",
  "key15": "4wVGuEvSuwE7L6ynLHUEaEpcRptE9wNMi9nDjavgf4KmPmf9phqngx1zs8zPv2ZSCuRLdQtMu8L7BxbkJ5aXkep3",
  "key16": "24WSgyn3iJhgJomdLmNBKvisbMUoephtT22x6H5Yy3rTPFdTFFXHj8S6qdNLeHsYKc3qvPBdS3fKx6zvBML2FtoF",
  "key17": "49jZS68qRSpt4iuF5bngUaarSkc36QojD63FBS9SaQUe7MDWnXr1AxGEGognRmXPj6FZtNVBYPfQV9dexYVB4Djh",
  "key18": "5GRK8eNCgWGRhn5UCinGcy6oYpQYpvthN9yxhrbFLhCqYroX7qz2xgomx3NVWHfxvsC7mCZZGX9sho4xwgDFr7Dk",
  "key19": "5JAsD2aiXSB1i1zwFSwqSfxGqiJ96CTTGKwWdNwUwWUeXf4qPVuxeWvpQr2emfmqJxZYeHyz6sfCTkkjw1VRuqCp",
  "key20": "5g9bU8r2ZenmSLRsriAcYcwkHboTR8ZHU6wigFSFsx2u5svk4y3MrWqi88DeDHawavcSvbuEEVQbvSd5jg1HDQaX",
  "key21": "67h8TnnbJo9q8ZcsJXCog6G1nFRESYJkGNg4wr8gxAYqmR1tV7P26QPr1iWJk3ezZms1VrH6aiBf9sSC9Yxxd1vr",
  "key22": "4a4NrRfBKz6g5trdf9jbrJWGmwSMcVYtfuHw9bFXzWEfK5jobE6ofJEpwJfjrzShBT6ZT6GosMvyHDHDrmbqLHGH",
  "key23": "4Ma5cBAm2hqCwg21c9rantPpEzd8w6qQbEQTCgi3Xh683n8t3SxcAHf3dfWpTuu1866kDneUE7P5wrC1mapU4t2d",
  "key24": "63VXDvhoAuMXiA5gNk7nmFNmjaGVAFqCszFgtonVVJ9VBV81zgkpN7p55w9faWYPEXpgiY1WdWBXuqusqhi1FbP1",
  "key25": "uyqg7jwnW2ENMvz6nbh4JSd1vJpH361HGJar4BqyNKF2FsgB9cVas1awy9XkqaEb78k3SPtvadrDeEJACHbB91B",
  "key26": "4SsEKwDN3qVjQnELE9mwQAtjUf67kLjzPCHuYD6AfojkFeq7KryQotXVYjHpfhzxgHHsejk7r3GXHnHGoD5WbWFb",
  "key27": "8i7Xk5Fx4hqL15QoiabEguE1uxGjWx893fmQC76PLbVVDWUBtefRMWi9ZFpbiLas7aAH2buXqx41XwUi4Rm3iCZ",
  "key28": "2up2LWDpoLTctb4yu85sFrKUVVBtk1erTz6PD3zWqeA7hNTp7JiEqi4pQhFXsQEpaQjhkhsiawMvQTGZc6wMZUEa",
  "key29": "dVvYDvR1m5hEkfxESWvjR83fVrkmK8cu7Ut1Gg5uoDP63oMRxogm8uKAXhgjUnj45itVFPr7GzrnwU7BaLEjf4S",
  "key30": "129bYc3xwPk82Bev4GKvzzZEizRe71yaaBvaB9766bJKCfufEBbahUkwyKt5UdMqogsdXU4sw2KvE219NZkd4XAS",
  "key31": "rZ4orGAAVSChEDDaKE2649x9DEyi6sC1ne2wh5Gj41WD3Bvs8rDxTz4pzyT6frpHe2Noy8PgficvtxTRFra92nA",
  "key32": "8z3Xn6AEvG4aaaLJpv2uxcASTNRbF2PsD8sN61uRfUfgyFbfKGu6g1v1TviLwFGiReiKxEpmErxUJhgbbnExz2P"
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
