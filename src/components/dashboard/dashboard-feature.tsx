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
    "4bEU5u4W8s2TQjezdovtUcJj42jdbhJpkC4g3DvDoPNdHfF818CZeoyCsfg1SoGk6G1NDc7TNGmYodBrz9rizmiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kuB18AD5jrK8BtwGcFUjcpGsTUB3HpfbPHkMGnvqk2sCib36gPfp1fktKGuUnmJbWHMUjFuWW8PfLW9Qfhg9o3",
  "key1": "fnNBu8ekHyQ2QNU87Bxho5GNMJDo3Anu735PoEJKrD7v8QPeYET94Sogx4D6BDQGrzB5VUuNKwjQUAEZQKHgvSs",
  "key2": "2hbC8j7zaEy8butrBEzHBeSHvWaQ6zHp4LoUFdbeG6ajxQhxRibywJ2TELP8azHw79mCbKHNoj7ETXdMvnoXn4VE",
  "key3": "SFBpNwTmjsoZ7mJqYdU5vhXkL1fVw9L9t3bcsKk72MBSoR6dPWH2fBbW9CC4s8xXZe58adjg3PAFHatGKynaK4f",
  "key4": "6SRsakAAXEc3Jc9rHhM7VAhD63BGbkRt8GbiH7Tpq65jrNZ4sYmk8hdZUK3oTGkeEuA3HXWscUgW48W5CAZ3njq",
  "key5": "4cHEbktBudnPX2dwgzpdduTAbdpSuFSJVjC5PGxMu4Sq7uFoDWuHmqKgPzNbVDsCPcaS4vB9sQEZSodKexPuBTMQ",
  "key6": "3pkQ2XtbrrgpJy7iYFkks4XiVxAV95SG9gvQpyMK7Uqk4XstfyShE9T9vqrpHyjN2d7cSWh9JtggtptQUtAUnU9C",
  "key7": "62XufaKxb41qYJSxqtwCK3prQ8RHspTpR5YzWgydsGpZYwqaE38WxaTxmVR8eCbg7fthUs5UYeAsiPcWE7PbBfTx",
  "key8": "5qooWxDMYxVVwuNMVfWJ6NhKXbSrRMwJbUaWEjjXeso3ERwrZtC533gcdomq3X1JNT4NWfBP2H6NW9HnzKTpAtF4",
  "key9": "2XqMmhcpAj7jde4BjPLuT389fRXPbJa6Ypj95guPdBjPqLUtuWFfBMHfhkHagV1ShSmVPQNavniS2G4TPk9zzhur",
  "key10": "3TpknaA5Th8AJvA6hBUzgBWxqEEAnAyCp2kA2AApRwNAH8gPFkN4BsNukdbkVpihwxpDHwUX5ETr9d7AScYQVGpn",
  "key11": "37aiD4d6qU2HBLracGEtvE2bP4PeMVx6oicdycg96tJ4jDmEvgJuyrXv2F6WTBH76q33pxTD96DH38DBznyRwBMx",
  "key12": "3TA18zUKM874vgkk7MrrTTpsWoN3JNscqfB316XYzv1FnRxDCSHHyWTfxpfFedyLpBZXhu1tDKDHK53ZXGwapn4S",
  "key13": "5UfBrVGUW72zbueRh1DDTd6xQ8bKGGqT6qkwC14zwTu1QzkbnuaysALeBZcDu6vEkPBovhsH2C8YQzVz4fF4Ffgt",
  "key14": "5Mie9oSTuwRxYMk1695fEwmfSBPrAMYKWQUdPKRo4b7HgiEFXmVgwX7K23CzjqUaifqwTjE8oYQ7KMJmefV7ZPb6",
  "key15": "uWRN2oq3YCraM1Powh6eomLPBGRcbfDu8CyheGfcp9qiPs8s54bAPC9dxd9RbJkxhn24DJqP2aCJwQXt96v3gBg",
  "key16": "etPioeVByxjnCDHHpb6z9KWfxWh7HdTMX4MuLUzRczxkYky2s22Xppf7TnZyBy5HWstJQttKMxpF9WNnm1R2jXD",
  "key17": "4dF7dvEEet9Xq3QhXNWiXKuVu6uvg3KECH9JR8zL3GJb2hoMMLoCa7DtHXz2RcmTpK9rBTkxYpKyxFWXZbkhYqR8",
  "key18": "5bCqpMcHSdtM2XT93Q8qwX4jP3aPKTELeQpHvCEQm59KA3FGu7gowsobhzfVvS145XYpCEWLckuPV3JqLBTnvDxp",
  "key19": "5NZWqAgos1Dpda8xoZyrxXXpb6r1rCf8MZkZr7dCeKeukpiQtDGkDobBCZhFoSuN1NDme674oXZNeyZdL5SK9A4x",
  "key20": "4oD5JeSKEcs8je7R8K2N7bP6uJS2qJKfj2axw7DbuwSAqEQqH43puKvzppNhgZCmBzrXjErVN6Bnzzt6EJsNgaaZ",
  "key21": "2sUnui3FZCTDmRKAWmwUybkyAXDBERDDVA7FVya74LburZznzw75ewqsPUSB8iPhoySy4czjjeDeDasN7P9s7CXr",
  "key22": "3TK8zUJkz7NZxidHnU94y2reXZtxMyUXcnR2WPwW1VoR8DKM5k3g8qSijU12mqDBE2FjKUi5VWHWEFZpLnoLJjFs",
  "key23": "5gg2zQpfhMYAPDZJoN2RCVAWye5i4g7KRCymJ62ttvKzxBxchy8r9V1NQj5kEKzpmWjLCduZhucLx3urtKbjTwX3",
  "key24": "5CJZdycUCuoFU4hXXEtj4pnFGzfzmuJE2bTcJudfPjDSt3y3Yitvn3ZP6aPrhqnE8oLDN6iGHC5ayWvUPBij2EHr"
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
