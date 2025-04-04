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
    "4kebg1dzFqjxj6fzpa4jSJz25Ls6ezwGifnT9WNrBXMjHNFZZ6WFJ2rh6kB4YZfDg99H3LhfCM2YiqHx3t93XQom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVHH44fZXJeqqySiKjLv8bwZJbSSVK6J2i6CUdKM1BomH4QyP3K9LZtsfzCcKrg1dXvHTtrCCEwSThH8KYQZWqw",
  "key1": "3yNAD6Fq3RNyFCSEpQYwgUb3UaE3CGfMMfEzqCiJ3FBRPGyhZi2T37ms71fSAQvMWix4j1AS9eq1a8wG537bbXUQ",
  "key2": "65tx9HBTqzLyPVUhC8BWTupQGmV5wu3UupfuQ2T9KptBjwnuVH6SdHx8Mor9BkMV6urbLwoMbFUwN4HSFsFudBWb",
  "key3": "2dqMLSTZ1eE4AMrSVHUKTvsVBx79v6GAX44nWGNMjzmAV2xv3ZRQEjNsdQhsoTgmDEjdxxDktUfSyEDZJhNxC5Vm",
  "key4": "88VH6qfSowrwLoZYGwdHdChjMNL9TGo2z38xTWPEJCRoVb6NF9mv4NNKewjRP6wrmv6DzFpaLtEp1GT3KpySx7y",
  "key5": "3m7GW2VvCegLbmJZD2LeycvYxr3avRQBrBqWsP5mcaMayxQRFkKaCNWCmmnVwAGQEKfQbrkuebDQn95aCWKWqXww",
  "key6": "4JfYQNYHeQwumzotkduH3ge2oBnE2evFb6gQ2CsVEt4jtCp3A4Y1jfzB3uZqGrV9vTS8pj14BNP8CwFLF7NsZft",
  "key7": "WEMZXnds8zJSSZtWWPuzeibY7mtfMUfRB4BAuKMZptWXRUtWKYCrg33awBLReak13pakbwWBDLUPec8rPj4D83i",
  "key8": "Be3KG9CeCkBxGBwYSQn2tduNnsafffaBa1ZTcHFAqCgbCyhGCjrYh9THyoH6mEmG3ucUun1FnhjUWnsgPLWD1Gy",
  "key9": "5dGQ2XZtbdDkVRHTp6Eee744DYDhudky7Kn5bHWUCECdm6ZTTondKcGpLrqxgE8LyJUHkpLPyrVGmdTbHXFLTWCu",
  "key10": "2Nf8SYnZCYPL9e15bGBHa1zz9gmyuJyonJ1pA1HUWT4t9noXyAxqB4fEBwgVJQ5joEm1NWtJVE1CGxbr6CBH8rhd",
  "key11": "45KnYoJMaXeVvncphjHDHLS3mN4sE6tA8hLXS2CWiX5uo6YFPT5vGYqggz8VWVEfiUPw4ar9sy1Kfy2vJEt4kLLa",
  "key12": "5MaXfS8oDCinHpNBCtizftassnBeWHCbL4bhqzCTW6Rua2JZMYf5vLP6f4ydEwpuuGT1junF336biy8fMp1Evbnz",
  "key13": "48DaiZhc5KBDwQ8dV4r76aKnTJjuEWRTj9nkejRWGXRQLAUoPqFVVzoYgeQ87PetxcjZusEL7SBb1ccfAn8R4AMk",
  "key14": "2eRHBesvDiHvCa3i22Q6axUgrHGbKB48NSTCYbDfFj2QN7d9nd16fTg8YXBYFbjPoQdjp3dNHBdNNDnzxM58EubR",
  "key15": "43y42Z1yvt2kPK6TkUyspo6ZQVn2A9TSQCgMidc2MPcT8p7zgVWhGaEcYkEKMh3JRFvrxyitEqPLkRQB191Di9Zx",
  "key16": "2pGLTUpqQTdUsdMyxAEUFjMRs9KGGGwKraseReUdyGPaprB35iyiP12nc4TPutH84Na1Vg2gZLG6XkK2weMH8WSV",
  "key17": "2hsQkJJiQdGRsQnkSuQWwoozqaXGadraMuXPg9h5B61RrjCaZbNrwAP6sRQB5teAFoxB8LNCU7ZbCCwdN8nrJ8fA",
  "key18": "4CZ85DTXtn5yJyiVKTfLykgnVdB8ziSu8Y6afP31nwoYBBmkgN63XzSRfPW7Ji2CDZr8V4EZCaFxzbqY12XfszTG",
  "key19": "3DU6eHunxCSYWstKs1GxLe4D7gdVnatCyHAVSMyrjfTeS7MW5voLdQrbix72MyK6wsAzVq3tcMtfKCewP7JAMbWK",
  "key20": "4SPAAG3jVx1orsPENicDRMokhznBC66gePxM75jxCNQPnzywoyGAwHaQmnPsyHGg58wUAY3R62fLNRxKsoDh9Q8h",
  "key21": "5x1gSfa8fQqVcDorC2fdq4qGcBNixF51HuGCJpWtnc5MkjPwjsJB8fS3LtFUodnqsXUcDi5JRGsedyUFB5HuZyK5",
  "key22": "3hxzMBgTWoqnjh1HygL1UGner6Qwoh1e8QGuNr7rQpZyXP5cARvdAgFYhJNgbTW21yxUNcUB3byFWotn1in1XjWr",
  "key23": "4BN5Jv7RQj9Qiz6D3LcGMc5H7nb6oKmQ16y4byYH6KNacyeX8iSSDpmKHVLmcCJ2wVaPngdnatrNX3MoH6SodCUr",
  "key24": "sMucBDQdgXHh3Z5LEsXUxvouGFWUiPXw8S7uGjECSTGfivNezgVuo2BPvj9TN9qZ7cqucAu1oiJWLd8Sq2P6j8Y",
  "key25": "2WSWkkV8PeqyX1yAHu6yzjsWMe6h4oMKTCMKkrmYMKaPErSPkGQDPmArecExSFWsQNhcTXxJDzhgyjwgCCbV1Hjz"
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
