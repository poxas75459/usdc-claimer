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
    "2vvsHhdXhGeNfArd4gHEsmAEz7SChERSPGmpEQ4s4GnMyLyyWuhSeYTaA2vZLJ8fEgy2tEhruLrB16dyBzsskGBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUGHXUQu7EQR8QHWiSZFnMezerZEkL5eQhtcbYfRgW98trDZYs7n1o4jHreiyGuG3SjMWmDwSu6nSZVYSGpSKDi",
  "key1": "2hDaUZUpwhoPGtCV3bTn4pLPSAoAK23YyJ7xUZ2N8UYZ8DdyZ5YtxxqTpFEwoNxHxNnwZj3wmeJWd91WX9RXhRLB",
  "key2": "5L8kezS77p6MKAuN2MzbgzBbMbvXPvGqFFuRYT2SmzPjcaKELSdx1xxR9LShnwT5FG2n9eYNpqXr8U3sJwREodmE",
  "key3": "4vShQVY7x35HvHoYkcXxTFVX7LFzjLtykthQ8UsTX68oU51ey7mGB2vC6HyGgZZXQbwKdTjVu68AXnBw5EQdBkL",
  "key4": "4vyDgViUCPd63erZCUPJBsMgtJaXPL9eSgMm2U7Z3R7cnTpK3AbNDVmgEd2SMreVyjmcT9E1ULrpREq35cuRkPe2",
  "key5": "39JyQPxczVgBcz1aRRpEturN9wXCNyFqsM4CnAkHjdXVay1sUP22iTcm5iiNWzhDo8q1yrTEZoyQCp3AZPBnsr9P",
  "key6": "3Zq4riuoLEkNCKCRPNrQG54W5bEPyekYahrPmkX2Y4H62rUZsRCk5vLtLxz1bcJbvxGHk5qQXZ3sGWvjmEwdaAAA",
  "key7": "3wQePz8nnD5p4eXyzBZW66LTTzYU5ycDW3E9J57V47UwRDcv8PidNH37dS2XkfWDTJfUziGBgCrTSUiiJgfAaVDE",
  "key8": "No5xm6Q7zNbqZDezzd8XbRMJuJSK4ZRB8Wudb74KFvnPdkWrAjL5xnyi7ZzjtekySD1FwDJUaMGS2jrefHTTjyn",
  "key9": "4bfuwZ9draxSqUdi4ZGfoP6yLihhW1qg9fyP6WeZtWjhzd9vUnbkGgS4kyAhonkMfTWhtP66tSP28UXMW3n7uTAM",
  "key10": "4CmJQabts98WT4mrTrdupiufKq5JTT3yrEgAXJJ8VjxjrCLEHDFVRimDzBaKBaMi2FSTTS6o8uSLMfBnqzy68QwU",
  "key11": "tfyHSC9f7gRBxwHb2qpvKkKXGH67pQrvMrK5FP47TXzsBwLQxVj9inrTatZY6qDq8N3iLrnc8Jggsf6gZbbBDzt",
  "key12": "UQGMoEG89eQVrq9YK37mDjKCvAQeEzgBahXhgiLGDi3cz5w1yZXLCFRxR9wTzSfCXafXB429y81GSXjozhDszvb",
  "key13": "4YhWuKH6TE13A6pgkrW38srvrswwJdKGPCNipCLdaMFcaYFPrJeSrMKuLoVx2gxY1Tg1Q1VuYDyHgj1mGnyHggsi",
  "key14": "9nb3STiRJhUgYVRGPojCHkWTfgFdmtmXxgQ7rHKeY4brxXdF3zkS53xw93KCM1deANd7kL1egxaGLvzhY8LPK7L",
  "key15": "5ZVrZhpAXUd6KRVtUNS8oTZfXiFPA6JXVe6wguMFCbFuccs81T4RXUVJYkG4KbzN77idxRU2KP7bsXc9dZqdc1fE",
  "key16": "3jLR1yiYyJRQoUYtvoP9UmvKksdLLnKNhw4GiJBGiVYYSx5qwQGeP4VQP6KygwsSVuzKLuLv1njDj3DAUod6DnSb",
  "key17": "4Ck4EqQGDHFS12gTVqjhEvaJGKVn7kXraZyTeTMK4ZpCRKGt2HtuLj7AwRjmB8tC1ftftqJPsJbY2Xrc3AC3n2ZZ",
  "key18": "431YNfooiC7zZbzBNfXcD8p7cDjVZLDNA6caNWsN2GaiAW5op4xksf87tYsWB4f98X8zLMzmKupxMpkDivEpyirk",
  "key19": "2L8coegwjQiFDHY94FYyUqEJ2VUG5L2kdLhvGqa3FsZWRUsbU8ZYwtGeoLVcVFF1HyRfBHW1tBHxHQEkAkSn5Po1",
  "key20": "4aTCDUpWuqjsgMmBu66LzyYUHC4nq2ZteUuJMyoUvcnazpEUVx9vtsfBZq4Dsi4N6SRzkqbbTZrhUnZekQK616Ag",
  "key21": "5HwfcvkpFKkEgVcR6mhUbSSD8pYqKEkpR1DDbALJd1L4hBbxgwk7Z6toiLAGwGNeh84XVU63xo8fFvhGC6ePALcz",
  "key22": "5eMdP5yH5otBRP4ZhHR2f45ycbMrKwxefMqqFLTQZUgw3AhK7GZtV8SEuLz5WuFGVdThuyX1rRbLTyuAqrGuc9G6",
  "key23": "2QaV5sg1P6sRgD8HUq3AhA1hseMNCguh3DnWCeRinCdvq7piCo1U5m8DbBSkwZWywDUysyUWKR5CJvwuTtKaSZtJ",
  "key24": "JrUqSaMfZcBMQH2ocNGy3GouKg9gbYzPMKtjsHq6kJzcu1drMNvDvuyodACnSU9xsuv67jxtbmQyrpz2upVC9eG",
  "key25": "57Q5PBBsx1zMc8Pa2G5EwjLPNycMKUVESSdrfuwvcGc7dB4BgDsd7xkYbmqAqGCE5Ccub17FbesydXztoCznT3Ls",
  "key26": "pq2xXZtZvEffsW2MGbx52qubmX9KzToFCEhawUeASf88PBqf8LWw7czoxvxuzZJsRGh8EEaYXmhSbgp5mzjUXFi",
  "key27": "5L6nwAVhUEhxKVcsVCwDqEgorqQepAdw4KVvU9ULNTa8pN1zVbP4xr4HGatJZ5Bn8N3HEbauWpYY15d4JfGDMihK",
  "key28": "2pjGCSmq7w7naB2u264NHsfdjARvJ3EfVjWPZEToKrz5gXP8TnKF4ZjMvhHizsokTuKAyWYTjxq6w1NQD6f5TQji",
  "key29": "V6tN7ucXpb6HGKFaxwyTxcBhpfbKKu26TkU2oPhPz4vvmmDQjF1QS9vaK2HxC2qZFbcWtRdyeJQTEGxNxYaM5QG",
  "key30": "2dm7mFSp8vzgtUhpgXQx3Bz9vsD47wTpjxd8c4uapMV2cswTYWFTRS4JwhvvTi18QN52fJhXEWEnJVuT9JHwxcxo",
  "key31": "3tTum9f2yyJ5oQXnoDxybxkKeG5UQoXQA4qcZJC9vKeKCggh373EN8AXSVKSiGoPDFNJ4aoN8dTLU4JyWWfWm6Ct",
  "key32": "JRYzSFzL6oKYdwg2gkaAcjNPwNMZ7QbRdwVWUHQ7JKJXGebi9KZ4JaUGZPQ1a8ixwFEnULiXzPiGrU5632ggWNN",
  "key33": "ap1SNhJpZkJe2wSpPPRvtyTnghse3d4VTZ1Gay7DsqMWMvPVNA66EjwSRJ7Ro8Y22hvuYpX7Ps79FZLjGDwfQjv"
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
