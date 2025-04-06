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
    "9hnJfB1ebvx3FXeoeobMpiFv1DpU4LC5wqsMtNfTrYumUvJgqNvNTjo5g7HTi4LCJdfone9WAv9jzqeLNvozniK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHLdn2xH8Qd6nTGEtTxrfoWBBsXBjbrxjTXGaLaR5oQkCdgFTTN6icRPEVM49yLFTwV1Z6Ju5c5hXHfqX6srHDV",
  "key1": "3pbaBo4iK9nVYstTABca45diLt9uzb4Djh5Zr1BZM5kaNxpRseqHgL4mAtCnc289TFLNCcxXXdS77THVV3MMwzyD",
  "key2": "2PRQn6gPBDDLngBj7wcUb4PN4v3azx8Jhc7CQuQ43RpVzsYfyPxa6spJAwhU4k3De41sUp8dm7gdvgcLCZNfnRmZ",
  "key3": "511FKLKh7GQvTuDWuen1Z1SDFSwz4XPTBLga4dAit4uCXX19j88PV4vLeS1U7pHKwBg7Gk3xgk58FLPRARZi7FG8",
  "key4": "3Lb4RTGCwSJBSuo7mKjNtPbs6w3err8NUFWYwK2eacB95f3vfJtn7rcs3p5XFD8qmK15rqgPEnAAm71wZqN7UH6B",
  "key5": "4iQBoDV5vfA8hTskukiEeQGcnYPzp1gNkjL7kj4fuGQrYX5QktWZ56tAjNKPpSDmU3h2emcoYUH4EdVCws3NmEbL",
  "key6": "GTxwqNKRSfEXMeHcR5CzMW4dRgaYs1v4SVeze2yYpXzhdYkKer2ecittMzvG68J5xUwRfDQwakZtXRa9djALh7h",
  "key7": "2HSsAJhtguftqPyf2WD44n4v9A2Uu8e9BqTzRGe2EJZSpq84pzHrcJNcWBvDUm6pjhW41WcvRddxVCu7g3HhdCrq",
  "key8": "uU7LrxaRApQfVY3AuGmm7SPTuZTzM51jbaNLvF26czEzpBmtf4qaQBstHeRdgoizaFhPtu4CF5qJFYLKHUjfByC",
  "key9": "4g94edStCfJQ1dxPzp6BHD89JiRs4HWF6MMxyfdGEkP13tAh2fZ8deznYUzmAzESCpkEzeFZLobTKMsxvCHfd4vi",
  "key10": "5G81xrFgxMXAt1cEVqZPYC7tvY9ZhVdytZsFtAJMczpDLBqTob8Rkrxxdpto98hKyNgM5PXtGdHGy6Mg8dtVLnHB",
  "key11": "Mx1MU1ggd3Vo9mUQ2ibLwvB9wcCsAvvqtdYzT66sb2AaghQvTrxWc8sq1Hvn7W3dMCiwud2STaqAucqWMiGrNf8",
  "key12": "3TZNLDC9Raqti4heC23MMYHohUkBJKQLTnUbGQcFurLj1Ez4SzPSP6JW78GZMhmErVJjadRum3vZMv9kE1qu9hdc",
  "key13": "jcTB8xZEFxwEGjzPyVurCFFZP8MbwDu7qanoWaVuPAyn5g1uk3GQf2JwGKX5RyXiKUb8cpkugbbwozRUbG7d8ip",
  "key14": "5GqUe9e37UesUwkq4nswuQnFM8F3W6FMAL5rs422xoikHknSny2AuyUQeAtUpscD3ohVvcZucgMCjr3wpqQs4mCE",
  "key15": "2EA1zHaZ1TNgMw5eZ6PvH49mpB5p11ze73yhCBt5du3dzYx1rxBMLfqYXoeQ4tkvQ2wb8oNxjbVNJuc4GcAv4eXV",
  "key16": "4GUTzhyfpkvniuHhZULVQSaPNbgcHj25vivPmSPWHVWqB8cphUekzjou4kY9rQFubXNptaDrivvqwJBXYSAKTyLm",
  "key17": "nzF12AfrgC7UbgxhBxm6g1NuE3qJT5pETz6teQvBGa18JcLZXs8mDRmMygFcp9kCEkBy5v9vzSmbTWYLkBCfoRV",
  "key18": "3yNENSrkvt1uDhtAhbvCRKJ44ARqUmzSS9644JrqCgJ9vzdd3YxTK1bTJtDAhMdWoCpQUibMmazZCbnjMnzFheZL",
  "key19": "59zNFXjvW73jpHDz5ztR9L2S2wqKgMb9X5GEJyE3XbWnm22A6gZC1db4GhyPg1TnBJi4zQV6PrsawAh4RWL3FAuh",
  "key20": "nxjFM2PsXNRPbAedn6LpQBk6Wz6t8Gy5VeTMZmx1xXkfT44uKCAgu7oEvcm4sfVVQzQqaNgnwxd68F36Z19A7RY",
  "key21": "5X1CSLigcJd1KYxFn2ntjtka9tjTMFcZuARJpwHVZB4iyySVoqLwt1TXipD8xueQ5UqvrYrDb1Lg9hQ4apjBHGGp",
  "key22": "5tJTSDDryCzzG7LaS2L2ZtZNAXdunqBwELWAuqGeH3zageVwGBpnSfyW4uifE62KdDQF6haGbEcAu3WHnX9kNQCB",
  "key23": "4EySyFD3uiXjDERjfRBTQQDJKTdCnZrz3Q5d7eWgSyUWgZ9sPTifzo9PzxnjxMySxSjTxeeRTAFRyMreez1rJtwm",
  "key24": "8rnQ1NYs44hUcyTM5vj747Syx9ihtZ1r2QyuyZPaykWpRdx7ZT6rcVqYvkBxJxEEukHVGhruhhWDGk7T7FYFe8D",
  "key25": "4Na7hDA3NXqr9Knmhwr1Q95k6QboirhLKRq19EKFn5EMsiidyfiwqL1P5CJ6qVRmSjbVRYByMyP66AZ5Rp79nrm4"
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
