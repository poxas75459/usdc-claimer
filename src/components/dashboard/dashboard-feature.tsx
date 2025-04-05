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
    "2xwLZj9umG4RmN6TQtC3UqmApYCqiYTtKDakoFqy96M7dnBqf7g1xzNBNFAHiRBwZiE13nenBfDux5o1LnsPHQzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7spja15gG7jpAxPDqveEbF2sA4kTeVymP9Zj8hG77c9ZssgSJBUTSEYC2h4MvAzTDaXk3FxwdTzfQ8X8kddgZzN",
  "key1": "E5AZkSov9QiymMPVhyJJsf42NovbW5TqjKWngSz6CrhCHC9fZA5DGvKyQ2iPw1dGrQ3UmhzxFDeD6rWzE68nbdt",
  "key2": "2hcAb37C1oTZMYbjbCxiFwSX1SCWpc6QVMTxZEjTrUGMv8Vo7pcX8CNAfdgw9pRiPSJcSsUcPxoXw9mtozBa8WNC",
  "key3": "2Sf92mepwas99VXvBFjK5pVNdSvbwQHeSSBzD9d7fh5HskyodN72bJorTdpCFRLBhRnqvs6sydybTTN6CRHZ57zk",
  "key4": "ZRpJVtWx5EvvZQHhMoMRbxRwtJAGBuSvjTNQ4bkvWSCbQdrpjGwKRHFTbYtn8FGi3p1VXJXnopYDh9u34VuUAMG",
  "key5": "1n3utgi4o2ud2QDLdyoiurSAjyQg4gTdnJ8mzMtM7ZUsX6XH9yLpviqvFFcdMckGwJh84ytoqUJLHZgND62bkfe",
  "key6": "2B5RX7gMexTGEb43RxQQBTwDKpxt1o1MdoKJ3XY9uz8CvHxMLXjwSHrw1FtsgzC37HQcqxJaabVxCqBVW8TBaQJ5",
  "key7": "6561WA27geBLC3kc9seRbRJYaNLpMHpG7cJ1ea3NhHD3EzaTw2tzEKL1jshgvsBT1t29pjmoTfzeFQeXCQJhJaTQ",
  "key8": "eD7tEjBt8RnEap1mrEoUy4JA3Jh5xnp8sbvzTC6niZCQwoD5RDocXhoNDvpWzwyHKcXnJFdLc6qhhMX1eiJxNXh",
  "key9": "XwXRMJQvfHqVHd3KyRkya9Gcgm44o3pdoXmPLFPjJw8PSemwq2fCyszbzL5gpKi21De9bn7Q9u4wZHkZUiRtCwb",
  "key10": "5LNp2nwen8VcwSmwsyXESmyEprL67AVz4T8afdMdMM5PmtBqbHNuZfzzMaZvmXs9TyPu557qWe6PAPMvXWKiv9uo",
  "key11": "2XsAffEfnZGiAN2gsAeoqnETBb2C5XqjVmpuuNnMCuWMVcpEvhvyov7RVtTciWDqNKWAt2PuwB697TL5gdCWnzuY",
  "key12": "5pEwydqgBdBKdkTtEPeBGKPTnFPePpDQsyb6bRrdipq1x3RWGUxJcNrofc65nXL6p1NEn9PizZjLLxUqBGyMPidJ",
  "key13": "4bgwgLjCMKBMJo6pHXZuNcSywnzszmHLjX5Fg4vB3ygkqVxvNhiVB1DBwRppjeHjMbzCsCLxxRt3kf9EyYRMCYxX",
  "key14": "4Ywdn9wsXvDpJg4bNw2ipkypeFBPUoEJxLqkJEMN7T83fF2iZuxbBDprKLPx2bLGxzcHLX1zEMGjo2gqXLPL9yDa",
  "key15": "2DQJaLLAPY6NUtaXHBVs442RXmDvpB8o7Y867qLY3CLEv5bZGLVmo3D8HqDWqX6A6tfP3njD5mAWXCFwJUSKtSWG",
  "key16": "5iT1MMH7MkUC52Zt71iryH6jXsVhMDDSkbxDELcr1hdWX4LmSi3onjVYxdDeFkBMjGD6tvhKTWpgZHW2XKoRuVpj",
  "key17": "2xozdURjcTscM5zoYougKtgi1tbk7uKq5vss5W3snT3E8XJc8eeKC4fqyht8NrvCAAhAv4khvzV59vWjf2p4Xhxz",
  "key18": "59JhTH7oTd3e9nt4421yJjZ4JcMwaYU5KdrYzgABZycegT2cYwKEu3H8sJh7DVhSsq44t86FY95B6gDnFfHxccpi",
  "key19": "5exQtULydYpAPqWce72BYNCJHWsXacYXNSMM7fJAe97qWt9RRK2ABRqBLAxEqAiXY9kGnkzAxDuV3kzvMKXXsAdT",
  "key20": "4mZgqXSQAogZuN43au7SJaKmM7yhnKEd79TUaYv3UHZQiGYuEt7zyT3NLuk1ywPb3Tx7tmgk7g913q67UnVBpZ1",
  "key21": "34AVQUQoV5m3fmBx8RtaFLxkuz3Ead2SAqC8Lhkzi97KCr8vYQevfsHSnqKBWxEteKcnUdLzWF6cocaRjmu5ZumK",
  "key22": "3idmStPE5T5npmq8HtD3Ewh1pWYo5mfz4t6Xzu1vTB6ebrwVV63Q17GcbdqFMvoCSCHFphpA94v7BgyzGD2mSyPC",
  "key23": "54FLA4VgfT2hXdUzQcztypEFZj5qxiBkVCjrHWStFhS3FbFBbGbMGXT4Ukx9ofwXN6Mz3xjGW1qiTgbu3JvhP9Wi",
  "key24": "5ouPWk1LkNoeRyLPYuYfzmK4BQ3KygdwtsJRNnC1tLjd1rS667ptBhSh19D71AiahcaBmGh6rRUvx68FBGUgXJtd",
  "key25": "4mbR6vUwPeY1pQF2ZZBoGVxbcGHGEQhg7PdqdbVh9dFbGgzgb5eR2bVFxwk5HNZaLPG7xP8EDVJMFEDwnmAdzFAb",
  "key26": "3bq754gadAWTLN5JB4K7jG6ExVVwKmDojaogMdHcVRF4NBosdAEuF5JpWEFGAN6ZtKn7AqHVKXnVA7eRufcbTdnM",
  "key27": "2FvCW6Lg9LEe6dVq5YxHurKqFrzET41pmXnd9J9iPrjxRH7CHsQsArvzgS7KK4rzaE7E9WS5W1cEmZcW1UcttDuR",
  "key28": "35M9pA3rTH2guRBxPW46GHsbC67ZZkL5DiC7v8VyP7DmnCTTJkNpREGhYdizmD3nvsv69vpY4DVMMdeAQ4MmDrF3",
  "key29": "3fvJZxeb8dsgWtZgCDCMedvMMzuJsKdovk2DMqBXvpec5uv1M9kXMpcLjecEhTipX8uy6f779QL5zzGiFR55iPfr",
  "key30": "yQgNTMMPL1y3cQqnuL1opgR4jWUYPvFY4q47g2z27u4kp7ifNSVkQe4tt9dvJYy5zCsfZ2pke6dQBX3pxXmY4HC",
  "key31": "iQC2xbac42MrtcGtnXXDixprgw8jjfFe5shrDEqDGE61TgrhRXsETki47amRf8mWufMUYN6gH2kDExWsxy9f4FA",
  "key32": "3VvtGPZJ3dfdxqr9bUw3bYpSwotX4K5LxTMcHxViJZBqqwn6DUJR8ArCnd5YS26UEnuvcsoe6sY4Uf6KdtCmmobv",
  "key33": "VF34VZ6iymkn85m5Mvj35dLsYLgGpDP3BEEpQT7Uq3nqtBH5ka59F3yV1LNhbqTMmDcFVKnBWi4iijtygg1qsE4",
  "key34": "3a8pGYeTqUagQy61T4RvFHL4UcBMzJ45bXgNNUbKmGG5rYqfvqVQVvmv5uDcCh4WkFodiQPcUukwZEzoapXQEhon"
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
