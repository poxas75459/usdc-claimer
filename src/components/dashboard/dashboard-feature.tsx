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
    "JgjL98micwCNNx45KGFGT3igmvN5hfTTMu5d3WXXg9C1sEVxKd2znK1LubGHkmhKzAdJfwMG7QsQ2Bz1hMDfn4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CFjNmb4KptYPr3Pes2Xy5Bm4o453xKdnez13VRjz1hMVdAtpZVTgg4JNHkz8ZAh6rRcUgJLfYD9puLbuMB7uRNU",
  "key1": "5vVvzVF97Wk5mWRBDEbRm6L62hmeBdZU7HqGJEhcGSBbaHWgBJATQjfPUADBKbDZLBTxA5Qr5PuVKwWyPR2cwoXG",
  "key2": "3ZcdxUwtje52LFoKmCWoqwshzs8ESCbZWKAaY8m2vSiiJAq6fgNEN2zpSxM97koEpqRyL6pUbjH8DJRDdBdtjo2A",
  "key3": "JjDNj4vYKynUv1X77y8RC6fziKCWsFDEvxYkeDo12jRh6wg61c63j5e9W1Uiw5FJoShBMQmmY1SAXnHWUwEp1Q3",
  "key4": "vAffC4BcvxHR3oZzg9tNAeH5y7cRBmbXbhQUq8gxwWeo7rKuZH63kV5CPYmnoGPGYDewGzovCoM7WrGyYBmGvTb",
  "key5": "4PZdzUmtX15UijQuS8vWZvm2AgC32sFyo1sejGNG86jsiJxCqJRBzv9qa3hA5QBoafnYM1x1eRuyidnZNEDHCymu",
  "key6": "2VE47njWFQ6saUZ9fTQy9V6XnbFLQkXAtKo7n1uU8z7x4EnWsSe6m7dU9UeUm1MRQFZwDgRYiXJgD9hDcBL85Pzd",
  "key7": "272iFFei5jB4t46GAGmZ7pvkrdUaydJxt8mfDYg2Pa1HQMTnF7SLJvHreB917EYnwq7zNMhjVRi5hpmB3BNosrmP",
  "key8": "3wxnUp9hP5Vehrx48eeDdPAvB4JqEpozHEZ2ibaDSvUHMB6hzg1PsPoFb5w761QSZdfWLDK4EW9LHSXRBLz1mDY6",
  "key9": "3Dc9Yu3dtyu4pckCZhRTz74LD2gLC7pBZKhCvyhTKhadngCi3DATjYG5sNgnhLpdUUykBSGhjZroJgAB9UuELhvV",
  "key10": "2FqnrRkZ5wPjgUXGxZJmzEc29GiVv3bQdkpZs5RjMaKq44Xveq1tRSXH5aAr2DRvBwc3MzYWPB1MdihdkSueMeNr",
  "key11": "41FouNLxzhwarN8eCFHrXLcUvqmudVdcQXXjk6PUqfjQk9knD9ckfAmV8gdYsgc4EKvP3mPRc7Ebs4QHdB9NShak",
  "key12": "fe4ppNsowQXio42SE1pTyDJRMwNychXG5AhPKaS4nak3VF2ct5ZDN7Pg5QX4weuT1MgDnMhuyZecJ1q1X8VU8B5",
  "key13": "4KRoruMkshE8HZ9EX57BW7RHqZRB3Yq7VBrr9F35TtE3Ro2EwYTVaDYqjXQueUxVtfr6gp8snKcgZZBgJHyZSzhD",
  "key14": "4yhuAcksuhEjUKNqhKXiUUJRYzB1s2eTDobNrsY9aGimUYzo9VcedzQTbs3XEnDvF6E3vuxmw35S5pFTKMnNwsiL",
  "key15": "29E1qVxtyYoxJYdFRhS9YPFAv2kLjNc5ajoCxW4HsHRzThGhHabbkZqmCHz6ATH6XWiymKq63BgGPRg18zzcWJBc",
  "key16": "5drJgEY65wCupcP2VyUHUYZXG163CzMdk3UfUfggRbYzA3oL65AgU1zWrjwxPfL2odBvtgUCFhcktkrNcLYLvpMg",
  "key17": "3hoAXbJfjJJSMQpLF4RodSiaDY79SpYGdXBamYrkpjdW9kESsfdFouTij6HbZPcAw8fkTCXEoPchopoZqYdgNmW6",
  "key18": "4cDL8Wb5xKnBqZkdNVgqxQBdqTtdMs3n2NfH9VTGdNLFvi3zQLo9hibLpv9EAEPfXGBUyTCjRLjEk1PF6jgVv6Lo",
  "key19": "GEHfuR87ysfTVGpqEJ6jahRAFcrMrYV2kZmuzZcZpgEPjhDwb4nixCrCoQQUFKidqKewDJ4roTMTCQDdmKW1mJK",
  "key20": "2uFK2AzMVdocny4XFeDAocsFMgEg5Lo7zzKsBaeRv8AsatNpKDrJyQwXu8VS256Gj9MEkGP6pfmSXJu44EQ4zWiM",
  "key21": "5hKFAo9jeRzrhPftQPoBiCvzX1og62QFYsaq5DK6XpNWFFrMp58UMN9wSHHxHR2vFufBFc4W8We3HWaWMb6twUFJ",
  "key22": "sL5T2J4TuHgekKZRWCZR15LNG1zHMZGPM17vCN7BurbA9cvHUA2g29iYsWunFX6D2h9DYmEAZZedNVxVsDTz21N",
  "key23": "2qHkkFEWs6fU9nvBr4U85nLwJqgEozf4gfDJ1XjGWC7vp31qgF8YnUvLzgR3GoB6HaoR2u97Ne4TkACJrdFeefoK",
  "key24": "5DP8B7VXejrG6DrY4bcaN211QnSSdeCVFYgjg4cSGtLKMG7KZvnqxGcum1FG2XbAGk9sXLbsouVocUeKvgGFi6y6",
  "key25": "2XNcyJd1XZ8GPsoeSWxUoL4sTwMFodDarcYkpkHm5u3qKyga8u6p4CNySmnu4sQeZU8kHwy96g7YdutGbzNwPsez",
  "key26": "3sc7bJqkpRsEqA2PedXQzg2NZMAPeWfu2rir3tE13hycaKJUykAJi36mgBJsFiEktH8pmaFpdX6UEejszb5o9wZL",
  "key27": "46aqi2dX6qziWv7fdQec1vWyL4mFxX9BukKWUCCAEXeT1Pr4yRUX1ZCpDYxgT6H8wCEex71iGHNnYexjCVuYVX7t"
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
