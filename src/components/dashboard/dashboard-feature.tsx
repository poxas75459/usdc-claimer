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
    "2pJavmJVgiH1LFAJPTuGQwZH7gmRoLrMwopgmQEgasVbQv4L9PXRrufMYmatBwTqH8tizb5R3cDoYxwcxnVLjgoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RgW2RkgSQeyGYqL16sAyWedNo1XxMFxVQoLP1Kwm8Q2XTSLamwGayP9DK8i9kZaro9dvnWsfT2H8hg6XksSDztq",
  "key1": "4ofKwkQb1fv3AJAeF7PB4iH5hhgNRm9gkVQd7g3g9bnAuyMvh221AwhAiGNtnWQdTCTQByXMhnZFnp5XbAyBd8Kn",
  "key2": "4GRYp5BXC5D7WcPaequyaAxRMkeztg3P6u1THVA4Hp7cE9jnLCTrj2LLmS1C7KMKC6BPqZyYttev2G6618LhEAhr",
  "key3": "2jeFpanLiQDez96G3d9gAbwYTkekXKGNYX4GrkFLt2i4egSNkhuuTNQ6XSprLs9g8Jx2vCPVjy2sRQeYq1iwHeRG",
  "key4": "2mxpZKdyDAA7q1zEUbCp2HgbCJZU2Pdpg2coVt9BmdUsHSWjMQ63YsoiV7ikXLmogHuCyae2Cm7Az44XzVS6w6D3",
  "key5": "4nifvivGSZG6GRryZ4Rg2Yjin3eHJxsSq7oUWfXqnWL3kWSRRtiTQvPgV7rDWera6ayHZ3Jqn3WPWPTo5FZVGJfU",
  "key6": "2eBMAquddidiULsVynsfyzKnT45WiPFxyPmJiwaoE5ek7KjZMggfM72mLhGLBjsp6JnrgvcagDpBjPf5ne5Wu6gx",
  "key7": "mozwCwxAe4ZfonCWLJHuWPcMuNjU8URSR74KFuoMMbJKkZKAquTn17tYeUiZ7J56KoztuJ2LB1Kn9ehweqHGZpC",
  "key8": "5A8bL16L4J2ioU5aypFxZWiVTMq6fyV7L828ENXS6eXUhJxpokRZXZXVr9dSkcukcvsu4Un28byddGKqgJMPgyGk",
  "key9": "4vgMqepxMeaCEyg3pMt8bnpErwxf285h9prmLUz8VZ9UU95LsShRGv3FQycn1fJwFPKwBZhJzvCzZ5sS1hHyniX9",
  "key10": "5X6KfbPChd6B7x1giXsTNMk4Juw1HKMSLzwAxBAK99sTkCkh29PQWn5Wnb1wXmWTA5b3PFS45PEhXGDD9X6CasUm",
  "key11": "2CWhmcdfUK9ArNvLCmCj2Jc4YgBx9aU7eYDeUHLduKxAQeKdD57PjZ4FnHzhnLBrQA3grDaxriRYGkxBdzSwy6uT",
  "key12": "5yeCmEKpL52RGd37tYRTKx2PTPkg7aHUoamJe66NokMQP5DsBRdQxRmpKMxeDT5yT1Bu1Zw8B9mJuVRKAxrgFvxk",
  "key13": "5Nbdz44scdk8p3Q1mfYPsmz15ZuNDdiwNux2mwbCP4mdmLWpkm6WJCizJ21AV3J9n2waT9Q8YffVnqQEqH2qxNVB",
  "key14": "5HP6tUhbarnUrJNTaVtvkKCZvsEsnbSd718xVeo1eTqJG4F1NaAYURVNR5Zz92L1tZt8DktXaVBVYhiPWbix4keB",
  "key15": "4YLGM6CmWCubtrGRveVyUpGF8MATFhcLzvCs8HGPctdJhjNbya53c4pgG1sk6gkgCNUmytvE2ANsQinVNgLhgXCH",
  "key16": "3M6FYg2h1UvcdLsaNxACCtu9qPeiKzDhyFcLtWvqHUyeYEwJZ3MYrTKAY8JZ5vtY87PUD3KD2h47UgPyapGfEzCA",
  "key17": "48KU33tdXh69AaLAeFRQnNBG1v5ndgHsYQHJbHutk5aaga7GANVAA2knfjvbQSLHjBhLCLE5yF89yVRu4wVXG3Za",
  "key18": "CaW7FnRSLgk2qEBVwYP6jGt78hfLhdy4QsQ4GEvf2DE7eihmXRtL2FWwjtvFfg1UG6h1KreQy481s8EsuKeyiR5",
  "key19": "2QyK4hrLFrbRopFeoao86yRiy68XpL5uZRcvcUhfpf1PVjmyTLJUXRoF4tC8U441ocgdF471x2XPPzNzegVXpKNC",
  "key20": "4VSoPUkurht1hqA5n6VwPQ7TbmoZvXxPsDCaUcoMpRmk5vWUcp3iLDRmiPfU7Vz7C3dFGjPbnMqKiN4V7HXMkFNc",
  "key21": "imG99pufJ5nwxv2UKX56mhuNJHFQmF9rpYV7QhbCuftmLhFUeBFG2YP7BABso49BF2P7L2xw4zBiTnNAM4LHSLs",
  "key22": "556cUCvEAP1tQCAQ8PjFJtUKiLzXKSpRAiWiSzb2xQDwnp65N6a6Mx6GQNaxp1NT3xKtPemviUJRDCecBpd9H3RB",
  "key23": "3nXrMYd5FabTJszhSiHPzseeZVKWVtCGNUa3QaV4fduYbtiCAuzoqS7ecXnKqy7z9HqfjmhMhSqru3G3Br3Rosw5",
  "key24": "5MpsFaw43Wf1aQRAU4cargEMkMG24ZThK2qaQJQf4H7iUep6uurPCJapbV6hr8h4Fq3vaf3CbB3pzZoqfMEScfVm"
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
