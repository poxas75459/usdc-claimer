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
    "Be58aPk5vAvDngzRxhrHLk1e3pxC4vFetMP8cWNS4PzB7qUw68RuBxyiV5rjqmC9mcKhvpJHj8RuJDXYnaiEBif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ov9V7JENeuXfG2rKdFSEoPht5x7sdK5WYoDNtcec11rKpVTc8ryVcigC94qCLMnDTEF36gc3tyEVCBQGmC54VJt",
  "key1": "3SkgrYaXMQWhN83BVqGMcf7sp3q91s5cYSLraushK5FuivYPPZyL9nkx4mucsNjTYeGRrFa4gVfGo3gYbdbzYwJz",
  "key2": "661mQ7zMXK8Qh7dL9Dt8URiKxKghJrLK1J3Hd4vc6eJDPLDUDPLCrfw3APD6f8a9iCkRsnKNiUVHyKdnhatsSnvp",
  "key3": "5gVst8jqDJgo7FrrbzTUidkQHfNLtNZ9qvAiY3SQeKrGAmTSrJ8pNVRTeEaYJa4Nja1aPG85CKCRbVcN4Y4XaDJC",
  "key4": "2qXwJnHcviZYcmHnDXRrG7JJXDabHddNvq9Yx8pvSvCyZFMFGKKqmeoqctB1XtABX2J29W48ppZdcTMeww11vvpB",
  "key5": "4QHY7oBATiid8G8zst4KEtKDv59rJjuSMruVzMag24b1wo1opZvdqBLg9zXmVuaiqc4yYFH1yVfZRrHxYGTAhhgd",
  "key6": "3azzc4ruKGgbU9FwVD1CKiTajkUU6SwXFpCMmNkJEn2ME2F42ohoJcgJcp33UVKXFfxKygLiMFnXgET2TygjbrpF",
  "key7": "3BdSJY1sn6zhkS6ieLRZdQ3Mtp26RtHsYVE9Gz7EyninWgGQcnPXpUQ5KLpPtrEi6V7swY69kkBbAvMafjbHZ5dQ",
  "key8": "3hQZJQcuxHqmqEwtNYpWAtuvfhh6aYrTJNXtfjLDVzyGsvVNeCrTfyUWdW9qfhSJ38ULQpPbFxxFt7Hu2h9xXCqg",
  "key9": "omfKUcARy3g5a3FQutoDD6K9JrZncVLSsitPjJJeewgHxRwAvQps95rY9Kt2zPepPsQH5ZjDXqW4m7HmF6FSseJ",
  "key10": "2hp8nW4vtUvQJwQChwL4DLaoEnXmjoJXmdtqUfTiDP7uffCeQ5qDyp3yfgC4FMvv81awbUYT4bapN4hZx6Ugxx6Z",
  "key11": "3FYyE3KUYDFkn7G8oQE4hdZFvr9dA4KyhNrneVPSux1Yj57bgac9AQk2duerXmrt13GXKHPTvMjjfE78LHbJPL32",
  "key12": "2kUvnzZL6FaBwmqUoY8uqHbLiwSc75Tibk1fbHHTkLsJisaTGyurYBAC2PT4uaN7PScqqsgkgTzAyEUMjkpbjdxy",
  "key13": "4Gwjd9o3BVevGVbWMQtrSxRyBb5nENLU1zd2s2q8EdjdQpdsqtjAbgwE4LRuDpE9BztMQpPF6gy6aME4avYurSDJ",
  "key14": "2wRiRecV7iwxBR3QwUVLyCsZsChrvR516y4iVB2rEtiE3segkmst2H3p8t6p4dwunpKCasP9mrLo95kyczHrjtEg",
  "key15": "3J74TWn4rUYqC7UWmbjHNcJNze8NtirH7EWkr1JhjYza8NxRjFXiKmc6EiappyUENr1K2CfdHD5m4J6tjT58urz8",
  "key16": "55z51DY6if59pNosMrPg8wdY7bxFXkzG5Nm8yVaQahYtv771up2BDEiHNFFbWHYhHJuzShwpZFPw1Jf4zEmg9EyJ",
  "key17": "5QHyzP6RDZ1d5AGejyWt9yiecntNwFZEXTA1BVmZKDZKkPsXFqYLmgzFMzrwSNuEtfK9zCHsTUrVBHSV6MaBYbiZ",
  "key18": "2RwTfujD9Prf4rCYCA3s8tcgEcMdhtFggtAMhWtpuCwow5JvRrZpsEZ8pBA17zieFcpeNfEBVVgS88QMYntHUzra",
  "key19": "22yRMhGZ8TjYLKvzaSrqS7ck7S6CAY5d8F76eayQSvLeVip3xCeg5LMw8PZ1o5SJEcHsfGPfziMtHryTpU4wZ7ZY",
  "key20": "2g94pCWJ1TUabxbExsD2so1umw6re9pQEFTfjHnArwqNH4K9kya8rR4XPjWqDo7dBB1MCZWdAoAcHveCZhU1pV3a",
  "key21": "5dMPjV9M937MUa8Pxqua3nMdfGaBuh5gWANCPd1XN5wTgUKYJH3JcZmqwjteuQL3TYeGLFyoscVJfR4A1gTSabpe",
  "key22": "2R6nAPG9qeLK2xyyYASy4xhKeF5pm1VerbYFvY6Fif97myX77vWexSPzyD6jfhySuGca1VzGNLo7jwMR5YRKPnVP",
  "key23": "5DvbdC77fRBaKpamoemW2tsUto4Av9LGJHAf6L24RxtrmwoFMayj6EUMxGJFcrwfGcNQ3vK6uPMmUnmVyL2nYs9T",
  "key24": "4hfkPNx7KYKKHra5EvdRW6reh2feTebfzswZqt9SZvZopAAjzDwDL7iSBVUZw8JWBkLFUBcPB4CkPArWkJ5iGxTS",
  "key25": "NZ9qAcd4f97AduPjHBCtptfaY2ty9abaaPMfpgaZejcf5hM4SxekE2YggZYLc67Z3C5oAaQ1JKsu8LmDuJzrLmc",
  "key26": "5kVKhSxfNy18Afam6MzxDjE7Y23XLvbUw15nZDZNiqL5ii49ikUNDAHGYZXJNGeAkbVJcTjDnsCarHk2VqWHHjy7",
  "key27": "4fn3WpWYJShEZbYGqrMU8bbe93u8JSFCuL6oRTVcqXuG3mn4WXfZWnsfWs9NxhoMWjGBTeMDep4vXD4ZhG2Cmk5A",
  "key28": "4hhbhppbdt7Y1vhHPiW4nVtLcwH8PBaHEzB2T1bLMgo8mah7udYAxaU8MUaVALWzgfA4BAr5dCzF89JJZhyWQBfS",
  "key29": "3UY1GTK56FJ2pqXFmz7ZTuUbPz8DBC37SuoTKM8dS1yYcGBCKbAUYRy2iqAKzTgjH8B3YZ8DNsbea3YdcoqpEoUF",
  "key30": "aMR4F7jhFTTwEV1sZFni3RMQ9v8kwoknKbpr7EtL9hnPZMhceo6TmAnvLMazgKd4WgybwwnHSCSibe4Vrp1C1Zo",
  "key31": "491yFMmDKi3tY6nSy9rntAEUtaRJN6MW3ViTFU76Bv5YpNCqBvn1EJ2XfSyNKB6Q7UEPUyiSizXNncuRHUknyaGK",
  "key32": "voSkyoNJsWbwVvv759bLjUDcvjPjcRXLdT7H9PnNWxQBCYscmDG4td9oo9BjZqYe2X3EHbbNqjmibThjRcpDBRG",
  "key33": "soyg66PSFjb33YdmWnMLTQ9cJdb4G83YCeqrVwHgyi6LAwNCWHPBx6mjGLRACu1Xpoo69SMNckpTicTHfKAorPu"
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
