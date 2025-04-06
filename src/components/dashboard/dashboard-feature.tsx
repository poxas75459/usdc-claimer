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
    "2engd2mPo6w62aWx2SCj4p7GNCagxgczWkWqehcDWwpXWfd4rjYM3gYkqJytvexreiX3nu9Pu4gVkpwNfh9TKRc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMAais9EferNBMg1Ytm6zs5aTnNRPFjTn2EpQCNRUAnf4nVS1tkWpuSkgfiDnatEVKGY2rE3HhTYnkBS9Z7cE4N",
  "key1": "3NoXTJb7ybVabTCTYWtbWvMg7e7YnfAjozrXTszUjSaR5djQqrpGxBmkwbQZsjdhexvgqjtcwoGa9EyBmUbhga4D",
  "key2": "2bQ5nUkcrU36sPVcYp43t4m9A1JWuJB64ZyxbEsvh8aRpt8UrAmnDC4oEghuozAvDi29GvJikqjrHsT2V3jPLxcT",
  "key3": "43VFVbZfpZG3t7Gu9npLLMtGo7xsTLVCYUQ6HZR5C3KX2kaNWSzjsqhuefvirzGvbxnWHjB2C1sLXaSdbQ2Njp9W",
  "key4": "2GqCoHzdpjPtceN1HyybwdzikC6RGt81hxzxZQFYHDciL1tLK7eSUbXSQ21T58wqe5hPvh7Zhb9WLvKauGXVD5iG",
  "key5": "2KPqbcYXVNiMLJWoQivkM83nW8YSkswNdmFLotXXGUusUn6ECYYZuAXV8MvFqKeekVsodGUbsT2poWRwPBqW6axc",
  "key6": "5vaNojf4TTBUwdi8mpWUXuDGJho9CD4gfptVedz8eNpSeUZafZWvNCKYNtoznD5RJzasej9sYy1f8py5yQXoGqqS",
  "key7": "2v2i3uXdxgNtWgbUjYsQFhfyv6VtSY5mUHCigEdhJrGfQLpTrUsHtpGfspzM8p9Zv3edwTDp2FSHBSqCKpedLtTz",
  "key8": "3PV52SmsJzbRkoeyfUBUqntBkTSkCW59NGcio1upYz8WWFriKxTaTdwJAemrjnxhcEAMpX1C4QzFXFCBbYLAY4RL",
  "key9": "3a2RctDvcmnto5JUAnrEKdr6tyWDMtS8Q3paKujbMCfdRx9ASEbWit89n37jzJ15hDLMfaMjLpFgpdPmmHZxWAJi",
  "key10": "o17CdBFbfygyEB1Kj2pCYy3qZU4RcjX7JDedAi9BbMvmRJJdeLJQtZaeHsY1pj8raJmF7cdGGfj8ENmfH9vQy8p",
  "key11": "4KJ4SpEsiCbLtW3tmK3uyKws97gmcLSwKFwN8hfy36grJXGnrWJgXMJay4rg9k2qo9krzMsrgNPhjmd4eH6TuSEe",
  "key12": "2BSfYiFp8vKZk7rmF7xLbsfsb1cVfeJ6MudYF7iRZhw3THX6pBCBBwHWGoc84cfC4FrnFSCE5nJN1HjMziUF9Gqf",
  "key13": "2LKZbUYMzLZhVTccR8ow9bNjadxvPswVjkhvPc4CaT5DRhx7BFEc7zyPHvsGHoiTPY2SzYRsyTTqUY83oMtQfW9f",
  "key14": "4UzbSaysAChzYsod1t9F9YrSAS4ooNFDDwdZPGWN9DFZV7Samf1YfZHEmieDhrUPYghM2zZDpdBCedf7bbfRhTKm",
  "key15": "2ghCbSZw1PnTj1GShyQWzzKp4tHBXmkmcekgcYaaw5jBhz6bPQUs7qnf6kd4JjF3TfzfGodz8BtGsazfVJvWSDEh",
  "key16": "5zY9XmAPbHUsRu4mYhcGMDxdJaQCWoqJfZhp6GBTNWu9jPwXdYHKbV1eUXKM3GEJF28bnohDvp1ZHvVY9o6mcC4i",
  "key17": "Bc1nmAukZgfvTwu838PRvWDRbQg9aLsbqkPCUgw3r94WLpCUwsN3vZqKKS2FMg2SoS75KMPW15qy3UvmGRJE7VJ",
  "key18": "5PPczybFG2ALMtpksKdgeagkPdM8dspQKoXTdJagAmLdRDymfRVdS1uobJxXahMgFR6qRc7gPgh4JSazEA74YScD",
  "key19": "xBv1ByZrro9wvaWReiM8c4BVWrtaQ5YYEpNTKLZwMf1hTX6JNXoPMbvz1A8tnesHg9h154F6wa2HvCBfRRRj9VS",
  "key20": "4kuZ6Z8VmEm28XnCcHn6y4jhWdSBz75ogFQrbz7DM8VW5EowNLiEiJaWLT6ZtawBkz7Qmbm5BzybT1zwyh5xZZ3k",
  "key21": "2vwCZA4kk14yPDdsDi6WUD848L8rSNnZhApbsd8ADvEQrjaMmaSUJUk7RGYVM76k6YrhZGGLdSxACBvBUAFDFz92",
  "key22": "2dMR1KJUm2jBQyfsMC3uZcQe1G4qNYskg5gZLQVj3DnwaQzSwPVTQEkTcCBKzf5sq1j1VNUoQwBAu9zK4swvdvv4",
  "key23": "4tbp62YeWU6qvQHZJ2vDzrGQWKSpCod4v6MXmcar5T21aEnuw4s1RodWq63WFdjsp9xVdvriHTqx3mo2t68aT6vU",
  "key24": "3GSir1kgv5gcvVjKu7q4ej5BVCiK2fXVudyD2n2GrYccqBHfrR2YMHt5P4SLwLREMBKAuegV2mVoZYvLVdi7cWAc",
  "key25": "iPYGi14m8P6Spojv2QwaSLK8HF2h1k3mcgNFv1BkDLN36mmn5DPTq5m8DFDTKuotZQNhLFpXoLGH9wLXBVurfKU",
  "key26": "5bJ4TURq37nzHn3WgifC2isEgeGSWyP7qMcS33Z4YS18DkqERQKtidVEsgkeZA8MrLBSc9JsaBZ9SBzV4eAye5pT",
  "key27": "5BmSaNRo5CRSQvqnN3rXoiMSNU1Hun1oHX3BDkr2hZaktd6Nb32r2dYCNwxWxLTR9VLqSn7bSbK9ynVZtGcEnBYi",
  "key28": "466zYpAtRYYWV3vFDk4AoL8GHYBaYBn8D3Tiq2X1GSc7e8fMCJMUTnK373cMaP2TqAMFM5wuY48uuSXDg3DQQq8P",
  "key29": "4hJcbzZY7SXNjgogziz3XteNGeCDkCYzuBeREnnjWNcvbKc2ZjBST4YdU9buDCipLVuXLYt8Xq6ZMh3erGqbuvmX"
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
