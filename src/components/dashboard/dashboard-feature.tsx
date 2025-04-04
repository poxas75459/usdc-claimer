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
    "XGJtKXhFawSxE35zaDYzovMUrQrVAcd6twebnGmTCqAjB8E9Ny9mdmhrFw18vdUpzpEVojh28kfuzm8eb6nG5Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKkpVSGSRFnF9WEMDJEJxHadKywCrDSSHdNdzNwViSfPAVXUT8BKXpv3MTqAiL2zKnATEXyhxB9ZTzLJBR7bhLg",
  "key1": "2P6gHdpUM97GpEpBi7BmaiepDxmCF9PQ7Q38hQKNx13i1fNnv6iGY3wyJesjxTVBBxkhtxBVNjFDoGf2Pp1sRU39",
  "key2": "47Shc8s7nbGmDrhFkiic4xi2d9opCUdXwqdZt1cwxthkUcWNX8mWRrtgiUWGXXJrb8xY5jBxn6XpLvCDR8JnXLoQ",
  "key3": "2n2r6HTTS56NvFksFPAJHe9piLqwBFrwRJ4hXcqCjmRoU1cFznAmjWfM1F2Ef118SE3y9xewk8nXCYh5mCvvSftX",
  "key4": "4KABjcnwnZyocxsJbkAQPpWW1fDpLhbWuoaDaWfzyzMhEPCYDAexGMCeTRigYQaoziZyu2KyMmWc1abpFDL6Yuot",
  "key5": "3xASgT51X4uFDu7BCmAJ5a9WiJYgvS4nFg2xPPWubWaBMs71WaRbuAXmyn7aGhXXriZz2LQHMWEnPqqK3ths9dv4",
  "key6": "2TakYBuTDZYYEaio81R4WLE3mLy9cCXKBF2185FoRm7sVHvLLTkxYBG9y92qNhahvDFdeNhZvkxj9A44F18tLtcZ",
  "key7": "3D3QS8N28cfgzKtgSGqnJmF3t73QyxLAgo5BMxcUz7S5np4vkaDohpwsRYAnFrU8cu2EATFYpzeatHBwEv3mxGXd",
  "key8": "3nQw1h5fS3iJmqN1gYoEhF1sxQy9q4VyrWYsQVqnwq8Hzz2jkfcBXGGtjvABLVorSQMfvtnKmgYReRHoqpV5EbDE",
  "key9": "2TAhGvc36WoGWLT79GisZWjRR6KgstTweMCYaukPdP2rgmCL6sfqZjskjPJwzvigdokew2TQxdQKm4ioEEYfGFZS",
  "key10": "24sZaK6k6ef3gDVegSxA44gkG3QJzntXQxbZAvYgrpnzaPP4VtiMhTKkJYtirwgjv1pTZwBZvhWKCiCm8YXqfLxt",
  "key11": "4iqYhkS4RRaWxEyp1jg1WvDthoC6amA8Ahso9qQ5N1Upt4iunrbVqz59JxncwYjiXKUidatnebCa9SwGLbQyA1M1",
  "key12": "QSWScqmFVBtgD1SjFVQt19afqtpEPNV6a8es2ZiStHLZ7rPszucaKGFVmWqCPTfGiyC7SY4NHYonSJbDz4zNZmw",
  "key13": "41AfguHyHCyRgA9vLyharYJPczpqbrMxDHPGzexuYST9TLCVjL3oeqeeuWxNJLqo7U3WPcDa3jnmfH47xS4eqJtK",
  "key14": "4jEhWc7hrVcqPNnhTjjk1MaUf8HybynFrvdKz3ZGd8m3BNT93Z3VHjmwkAxBmJQZVJxXtkkyzwJdAGHouejeNHQi",
  "key15": "3A2DyLXtAxRQWd3LCpGMZ4L2Lb8E4D4XVgF9SjeXcTY1MtvSvhbeVuRsC9F7jSNsoB3PivUZmFCjpbKqM5cTfaCE",
  "key16": "3bmWFVXMAKf4uNS3Z22a4XbMjKjnNGFK5VxtYD8mzKLRzcVRnYFNjLvWPHDHhWCWRBruasyerNZSPZFetYWmMj3d",
  "key17": "4D2FREEcxRcwVwaLR17r3dAicV3UEdoxpDViATUT1pUBazkUYC2ZLymUs2vWUBtFCz2MbqRQYotithh2jxdMKbf5",
  "key18": "5SqvtHtDdqXPopPJVQKywEQwfv7233JYvD2mBG1NTZaCtLmyxaBk6zu9MPPLf2ASCG44vvmkknvTyDeS9X59Sugy",
  "key19": "55ZMwBo8fHj4xkfotq7YA5evvAgZawkSVqgb9o4AZTMvs9uddoNKCjJFnuaUEXGZMAv9XCcbPcBdd9566mCfn9RK",
  "key20": "eFe9PWuQFY5YaKcCE9jKtsBSufT3jV1yba5Mza5unL2N5JmiEVvzvcNcRQnVbncKFPQj8XZzzkAVB3DBXmZp5tv",
  "key21": "5zhTigZTHAo9cRK67dnmDZmj8TN9VSgJBPLs6ZUmnf8eBVMsqcRY6CgaBaAGLo4k4dnp6AMDqwRUhBe67M7p5jKP",
  "key22": "5di5fHhkFKqYy2srrUGEZbumjU5fquvfrXSf9TH7B8pu6N7KpehqGURFoaMLX9GkuZay5Sn7MuVCsKCWBJvAgeFL",
  "key23": "32bpe63qsmN1zBy8pdYnx2M5q1eBeq3xBMxPeJA6apCfLetj6B9etJH5ZkLCBoEDXqPwVhpzdYB8G4QWgAiHCEx8",
  "key24": "25XVx87bvtCTJAxKSZX7XWKdB31fecMktT9cPLvKr29odjeRHzJUyUzUQyqwfTxmXSkRN6ogZZBHtZ2UJMTeMQzF",
  "key25": "58w4V5XS6Vimvecrxa6Y6Ktqj5dQCnn9QNL3NhkPQKsJfSY6dMYf49QkhVG62ZXxjVHd7DoGF8VyGxiewymsM9Vi",
  "key26": "4FXZkUmesHrXAJQAgGdLKUBqBSB7Agu638kZs2RD879aF8TKsejppn3o4wUkdYDQz4aCRaCdB3PQfSPqjH7rJvKt",
  "key27": "QGVwkmAvEYeZdxTbkdF6yzZDLPnGX9N6uRqSBQhA5CT9B3xjUAroadtGnRKaDVcSG6DsnToboKSFjnJoyqpqgBL",
  "key28": "5NYqcY8GTH6HL6X6Dct896j9QvEAsJVLUEdoHHcUqS5CZcQpDUTvzwCevA67ZjXWt1gMsKMDTfwU9w6mQkHvfQHQ",
  "key29": "2JGrxqJohBowFp5eqRrPe7BJGbb2gAvukwtgpoUMXtaXkkBXM9AKjod2PkodcWwHVfhajh57m2RgaH5JZG79sgJY",
  "key30": "3FSpyLAEa3zZNpAxueNzkRk2bn8Ust49eN2b2jRN6K79SNGAmpsAnjUxwjwM5xfWECSWuKAL4rtcpxw3WZy71DCu",
  "key31": "YkKPFgD9CdH1ZHihdKrBSxigcvgshSqb7vUng6dza9YVECGp9rj3A6xjof8fV2LxiXuyxY1fcgTJmqZby6Mwnp6",
  "key32": "62e2x1YpKwUfuh6RgDz41G3ZuPmwwNVKMFnGHMfeaRTF3wt43wpqTGw98t9cBvXDkDugDv4w2WvTMcs5e4TQaEQZ",
  "key33": "554bNPZHhxuwww16ECTN1DUq1JypVk7hMVbYw2HZg5Gi4Z6VPmQokvWwsxDKneXwSfpkdGb9K9gHCEAkbLrNA45a",
  "key34": "3kAJJ5bUMjNWyJzb3RyqTf9TeaGv3Ryoh8wSPgM4BzoZhbxPt9qPiYt7f4MbgA1oZnoLVK1j2b5UENowL2yR539E",
  "key35": "3rPnE2HYpUscY3RuHpSHJMoXhiCcQYtGn8DfLsfEt9f9v83aEwLaDs8HrkUzkr7YJvrXa3NNvJRWparcuunCBQQb",
  "key36": "3XWbUioJeiV7131P37skoLhsYzgNTMFuwd4tmvvq1atdv1gsz1YJFjpGHTY7MuD3rf5P8tBQhQMv4DBEjpcrs4dd",
  "key37": "5FurHaujSnKYRiJ2Ka4UEQbQYar9fMWYtWQ2SmdzhJfStA8YG52eyfJ7HhhUfGKP1jnmgsgggkLB5bNo2i5g2iYc",
  "key38": "r25u1YGcDq1BibvLk9GPHMqZsHNkFYGTcdjo8BuSPg5k3bD7a7ScXpW3dsV2QHmQfZYh7uUeWzMEHfvksx7b94S",
  "key39": "2f8ToHCUDSzvV6tUaApk2Sg1zLyAwZdGaoU1hvmTmSAzHQz2tGT1QnEYdxDgu8AmCgpi2yUp4ZHdJVk14pPkddRN",
  "key40": "34JYEhK7XcuKDPpkbWqh751wCNJ6SFWLxZmMXXXCPMBV2XSAVQsjHspq4aHXFzddzPtwF8BjPMVN37K6pV3vqGC9",
  "key41": "5LTHgNA9M9fESd27aN4cgg8siotzS727iDRFSdfCGgjZzrbfbLp9vA5bDtfZv7jkiSQpQqdQhUSR4gMP3EiFYJc3",
  "key42": "36SMViVJPTx6REYnEsUiqZxiUZtfVFRVMYmGeKZPbK7X8wdZipdAuxsBuYtfb1jqUvB3DdqTerhuwPeVMsS7EQR7",
  "key43": "29FiTW3jsmiVKV2biKCJHbiR4Y4HTcfxBynG2MUXbBVUYAvp71HxusokFAotNnkmXmbwPvbxPT9VuZPupiaAYDci",
  "key44": "2iEn6jibzu6qnHDEnfD7dfxch4AZHZ28tGbfXVoX1ko16r3G1c6HDVQNowso7WMqbBkuyHKe2WZEUXpo8KU9kEWs",
  "key45": "AdZ1vjej4xTe3jm4D5pSE1vHUGh6Q8kF4FAywT3cchbnvEYE8hcBVFp29xm1XioiPw5US2jopRm5rU9ZWYJKA1y"
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
