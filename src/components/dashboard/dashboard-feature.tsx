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
    "2Hwf4yXhrXk7v2TFMFV7yx3wNZnuGZ9ZwDDXjbyoFRpQmCrQW1ZGtsMzT9MNQjdoCXZt4tDU6meLNFUzrAZSrv5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c9vHuXsdVu46cJECC4fp7Ak28qLoaz2BbBpCNs2Rc6U3cS6fo4dqJyg2Umb3FQBLfhmScFbC5dCzh3hJk2wUmpH",
  "key1": "3vhnEnzMADohGprwP4BqLduCT1hcKhGDoEwYgdqRG5s8gekFXD2USWMRjcZdAr3MidVNXoHsqkh6g7hutgYrSvJk",
  "key2": "5fiVqBVVU19Bsxf6xXav3j7iBGux2a5HSVqG7iWkGeU9HTHH6spRAxBXnNPgqro7yaHCEVvCNiZfWQ4AS9scjd5T",
  "key3": "5A2WXsjNz3ytL25SEYFjWJXUBG7zGsFziUyzjiCLfwbkCzYHCQatQQQQF2pFqQmzCWhGANNwbAFFLvsZqs2SPRNK",
  "key4": "2b4nKDE2Ejizpp9sHF1hhhwzSgWY7tcpTP6QCmwbdwZiwJGZA5Mepu7NA1D6qWAGvrjLPmRp8vPyf5psPvZyQn3g",
  "key5": "4SxP29wMkVETuX57j9St38ZLihYCfQnQexgtUqpW7zwQdmEVi13AJwsMoHVz6qqzUHwkKPtnEcMneHbRhewP8SP7",
  "key6": "4VizK776FRFZYeTd5FjK36gW4kh9rX8dHEmLqWUznQWxXAUA2PiL7YyAQggSLsF2fVqQSgKSqyFJEjB5LTAWgW1m",
  "key7": "4zjJ1LoJ7BhFtUuFThaQa1UD1UD1XqYyzuXA3kS9fvSjTRL6dW5AbPX1BvAqYgweDaim86euste4jdNMuqKVSrD4",
  "key8": "3hqVKyUndxJrsfiv2grkqRuvb44oxrXwPdBC9oZj3UBSg8ernKhNm3XAgWifSVF6sXF5T2XhHHGCfS9orKC7R5gg",
  "key9": "2GNT65RKqShFcAToibKSETDH8RjzUBBqciiyjv9uwgUmc3d63b1yJvoaoikmZbtrUU1Co3Qx9YW4kW4H2wh6tab",
  "key10": "2Z1C4A8uEBt4yrHhb88GAfgejsNA67LoudaPeNNnM9viWeKyCcbbacK1NG2vv99W9AwD7XRVHnuztXa6ne8MhLRZ",
  "key11": "5MwvGhofbSKZUe6BCvWn552foArsEa3xXq7LrLU7DCzbVmWrQWs8t1W1SbVfRk1c9FnVwQ8s7VyZvnXuULNasCBu",
  "key12": "3AJzB2JCR1LcmkPsAPjF7hVqyqgcrb5mmzyqFUJ1EvhrqF1MnPZLx8XMYXNJDAPCePnSYUnM1EWrXtPtcLvGA2Yo",
  "key13": "419CDFkbVhmiXHuwEqN51p22B6d4W2XP8aaUiuHNUf5ozPGJ3BFJsgPHB4jaLXin7HYpJJq5tLkSSzUq87mDeqUk",
  "key14": "42McwqMwiKgY7Gahk3ZGbwuJQE5dBL5yQNey47WjV8tiGgzZKKDJXz9XynJpVn73SinwSHJQLKMxvRPgYp4VxmbW",
  "key15": "Wrc2utLXxt2q6tE7gy64pUKrmWyeCrnRBvmMFrALVtJyrVUzEHJH1vh133jAgwdp868gA1UM4QCdsUFbXgU9Q1j",
  "key16": "Y5Rt8WQm95Ug7vTXAJndAyVCUpRzxXYprCtj8KZakLukzR6gjTeMGE3tWJryN2Ed1jjKew4k8YbL2nsYzE3Tioj",
  "key17": "p7rfEkGRyBZMaL64PaRWURUPkLG42g2e3LG8jgvUfJbdaPFmU7AgvGVgr5qCQjE8JkmbfNNv6QnaAz7VbbwMdg6",
  "key18": "2Ar8oZSiXzmkaWXgoEaV7wkSpBRGKfRxsTjjhfidiexjvc3puWWKABVvWBBApNrM3tmSrQAc7eQAe84XZzwWqSpW",
  "key19": "5ZV4oT5kidsR8Ds7ekBmK3JYQfhttTuGdgyfomUtTwMbPCYajkLYYpkSC48gfXGt4tHHaBxuLnv59kubprgoJL9r",
  "key20": "sf7eiH1aLstBiXh8cMZTPPAZwwhePRKWHWKB9rZunWDrWfbvvA9QYtorDYoeE15pgyvVnzNi1uBJqeaGHuKUHx3",
  "key21": "VmemHjy39YdcV2AURHwRnGJLjMFwQUeGFNNEeD8EU7RU82NmeEzuBMnpNY2358Awj1riqwJj5cnFr8AFtbQ9Utv",
  "key22": "2eubaUhiCZM58z7t3NwCDEhbrxjyxfX1NEZbyysPm5HAEZuzTBok9qYz6LMRRDFg4fRjZbGeC5b8ndJ1yHBSKBZz",
  "key23": "3G3UB3p4hAHecw3nUZx4ji6UBRAGhF7dDu8PJfqg5eJkcCNXxHy9YXkC7dFrM47pdvvncaHxAiH33xrPSiTeHkNU",
  "key24": "2kaxYGHUP2VF77wXM1KtdreEBhpMU4xSDz4LBq9EpvWzW4Ti8mPxQNXCSWtrChgpRp1rUBwtN5CN6j4dkGFZj1Ak",
  "key25": "uGUb3WU14Qb9rCyGWS1gvVedWMkAfGFC8GsyRDrZMnsFEXGrZuwqjjRWsF88nXkGsdhGqN44j83i1CMUW64A94Y",
  "key26": "4fwzCaC2QPCgWBgkCGez1A6XjYUnNy7656DPNk4hzA8koDcQETEQZr7Zm2RwmLEqaJ4Jgisz3b6912T9yo9SNVdR",
  "key27": "4bBASv2JSSPHSBnzTsAunQVKjwuB2gRZotXsQTYmHBH5pVWGEfRV8Vq7ALVZF3RGWu9aG1yWFqqq8yvTXhpjaFpX"
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
