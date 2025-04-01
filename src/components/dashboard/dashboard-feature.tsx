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
    "651REDinB7Dk41PzBF2tiCzXhDipUVc27WgtENozbWvfWZC7iLnm68X2grViWJDtSPhkJSYydTrN8ZKkUkcYhNro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FgQiE3cGzWdFBcJN2sbhfTr2PsCRa2NcFoyieKHeDQiVRENorvr9TmjFnEv8SRCA71WoEVHGG4qtjoKo9wiGKVA",
  "key1": "2RTFBTG1ViUBPzPuoWaL39MuCH73NamfJGYHupRQREGuNaT5XvNkMFpxJpYWDjYmSRhZdL3dBZ8sVKvT8Q2caw5F",
  "key2": "ABAJzWjS4yPgZCaHvAPkXQGe35kN4jA9FKrDnJeN69qaKgUjcnNwVAtJxgzcKE4XGJAjCoqDkwKHYhLGTn5tC3S",
  "key3": "51pHNcmxYRG5gaurC5YtxnEJVgv6NC2NeCrRodkGDmrG12Zn5XSkMekAgwPujzXCCtYDEkSSEGSEDMpzBahoicap",
  "key4": "2a2MnmQwFwh9ESEiZHZ1rBhq5QLeAGSB8c4hdxcX5C6CYvQaVS7xvSX8NRtrDr1gUCE56wQmGKcaqMCJDCY9EJnh",
  "key5": "3m5n1axpwo87FAgVGJZTnqBtD4H7t5M4hY7YpDur3vxXxsgsFxaQ73bhokwiteZoAXmRxgqN3hiCLYF2nvnFVUBb",
  "key6": "2SvBhZFozvPK3UPmRDuSD3dvH9GjYzKYZ455Yodsd5jo2Febna5Tcdh23njddcXCNhXLi2LV3KtGBEma77pTQeet",
  "key7": "5111GaVXJ2hgYYKuSzMV8aTCHp5ePfM9oQcPsuF8NpSfaUzBsCGgHaQHNi4czkQGbwBec7JeQ3ue2Gjjy3FddfG1",
  "key8": "3XnFxQDVH2Z9hDaBFeFyTuBvigrxVhXDXQ5r8xF7qmhfqoXLXMjbsE5p9QpZuXR8FCtL9bDiBF6pXJhbnDdWSiCU",
  "key9": "3ysBF9rQnBon3wr2evtdfyJhZVSZwZKaBVq9dzfk6Zd3nmjCemxedTUTq4YPamp7rqMZrjxWZKLHKMXaghXVtoeT",
  "key10": "22Sr1CGcA7hvZoL24wJz5mGCj3oLwrfFmfJG4DmBciCLX7biCyZCKVFKZHTRzyGTDMAJ1HHRjCKtfXFHMK9GuNkg",
  "key11": "39e7FVrYdmLViNwnLejLysd1M5XsjkX3mn8EuprVqTtM6FaLt9t3a2aXLpnpgs9w7yUMVszfJwXoxAPVzV9hdfBj",
  "key12": "5Rj1XQPM3KtF8jbyi7ZPzqMng4WRWkh5uNYNGC4bsAHH93XYHW5JoXvMBeyAkAAepBej4CnJRX5UtdG4PpcvLwYk",
  "key13": "2j8SXNPC6hDsNzoVxHzDUvHXoVUUwMSarbyNWs2ba2htPL2BVqgVKGf615tKgctJQoDMGKQSEM7pZyMey21myrod",
  "key14": "ri6ViZqzCaoPkDm5XwxQWwxAuuQrArFYuLeznwYwz1vsPZdFzfjTQFaWq3fi8fKjdVD2iaznRqWq4tzJye6JLoa",
  "key15": "nQs5EmPbuPF5PHd8EiFSpWbUUhc1XXYcAah9gzwKw9wphU5gPi56mbMx143NczXTGNwbDeGngKcx313hAhnsWLi",
  "key16": "38BzHyDVz53Fdg121QwYkUXv7rguorgr934rngJujAapXiRC5hzhMVYfYq4YrrdQWwWRpt8e3vs83wpMaqFi8RnS",
  "key17": "2tYTiGiu8itzCbZhxiLXjBoSSWPgcVLYtYWR2YSJ7fWrqGKbd5JvcjoZgRuBExZiK2aq7xsSwELAMuQcaZCHY5Wc",
  "key18": "4VHQR248xzuQ4dSFMHKRfN1nwntK3c1H2uq6R2jnkbj29uBHMM6TE7cVQGXSTB5iN31Feem6ZFEguYhPbXuVjMeg",
  "key19": "2b6e8znfZBusTo2FUvmrgkKsxuSpeJrzibVJiDjoMhk5XC7JMJKHgYGzZhuAQFgo3J18eEhBJXe567b45ovwbeNo",
  "key20": "3tYAt8CfBsuVzHBuZLV8vGiTyLuvkNfT2dSSEMfk22oSD56B5ySAWpmj896262oT5mDaaa9BYh74hspNDCWmcUFk",
  "key21": "jAFakSVdBKA5i3f1Cj2Ej6ie29Y2dxBjAbjT6ACVnSghwsyTvM4L7iGWM8dZtya6FuRUw1Cz2NkXAGW6hj5Gik7",
  "key22": "2BERfvas9dbxvj8JPgsUhC753oXvWW5rBqtMMwTGwRzfU3LBv2VedaDa6j3nNDLxqRmJ6MyLdHxan65FfcG1uJdz",
  "key23": "5xSPFE4q7fndUDyeQc2YAdhGpsEpX55nQbAk1nTcqDVXWx3EBS9T69HCXpkm36KKomDexWjbKE3W6aK1VuUXWLGF",
  "key24": "36fTLv1GcqyQUFGFr5oDg22SEENQj1LtDpeQts2Kr53nJUyjDVdeopMtFr8mZKp7if38fi6qWBwkKP9gc1M9tyF",
  "key25": "5TYr5QDccZspv47Ef1wRovn8KUuDf2bF3kpSknywW2TkyX5Gs8ikBCiPejUrgjArAwT6F3YcjsUVEom474CTag5f",
  "key26": "3hD851VwxtLgT4ynnN8uJ4HnCPJyyybzWaWBz43gbED5Qum21XQEsMmZABWYGXXxHWUkqjq7FjWBJ31smjwywejK"
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
