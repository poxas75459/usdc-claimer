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
    "9JhhTpBothm29bzz1A7oJ27ZJefjh39dRfW4doLakqmbRCg4CCyb9TUM3aXaNXzEBiSeafKtGQQqPi1apkM794m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j8y7JeUrDBPjbauZ7BzSonHXSHL96ZhCzqD46QHy7jk7LG7CrorUtbqzx1BnPgaMxYXrhHTSxf1soMQgPTMGZca",
  "key1": "3UgPXPFxvfVvYchyc27qjdL47JPLYq2AzWcXKFppf56oJWbhqNVpEC26o9S1VTzrk9muECyynoaGo9m8EepZFE2n",
  "key2": "4hhcTEFGZ8uJ4kjXRUVnzSmz1YiDctyWcn7thJqb3Jji8F9gEmrq9baNBLnzKJpsfacv8rn4ioopBntY8AF4pRh1",
  "key3": "4bi8KQECeVhZX2Ae6GTLy2TZPY3SpKKfbwEfMVRAStnywBwn8gCLNqeS58KUANCNqy3CLMBkmmFYoqbxRJBHEbip",
  "key4": "3VqLAHHRgMYe1Yx1V1gPdMseL5EBe3WRjmY2NbiXrAwPRyMxoRmyGUX4W7fC6UcLYdX9xVhFeXR5cxGCWEsjGLfF",
  "key5": "3DCJxoNU4FK8PjWHS9Ep8Kp3ps4xyjztRWp36LjJUqQ7ZX6Wsay6oJ5o3GVwaX6ch8DyqWixnCsiZo7RqCnZUwpW",
  "key6": "sM5UbD4DpRRABtGXHkR75pxtoKNR7RYaUVjEFir8NY3G27zcJALF2JZGpddc9sSBXzjoRWFDc3xWTFYQR3LdM6i",
  "key7": "5QNHNSeFyzQpkGJpp7bzouevmgC16qrEMdYxJkKZ8c7UnDWGx6aE2QuMhGiW261CTXcSHV3qxNfqTDm8ZdLszjAq",
  "key8": "3pfiJXZSN7yniGQtGQSbCCLcZW8txzuxtK8nNbofpxYudTFyKBi5m3KQMN7yDZ21DQk3SBQtM7kC1aTqrLYphdnt",
  "key9": "L5jox6ReEqXeRmPGrDJGLSs2TxCdsLkRZuzwvpF3jhyEGz25oNtXjSDxyyzbhgbN4Lo7SGZKEDcRNx1CsZ32r38",
  "key10": "3HX7knD4ys2EhHWwT5Tb3NXwBnGyW8kf11GJPaeicWbhoSmSSSrhTvN1yWFeh1ujvFQgM6JdAdNVudEPjxLBSkBR",
  "key11": "5rQacEu3DuCHr99MFUaMoMgE63RmiM4dNer2Y9FWJZBPNBjf3HRpZcaRbHEeLMNhafGqXimN2EV9mj395viDFQQ",
  "key12": "4hkvEYNx2PzBU2K276GVLo5GZBU2ccFNVDGHLZyPosYrHGYZNBXLndHiDZmeYE1T63BzeJM2gdjMwYvMR1iJPRUL",
  "key13": "48gBvjYUhssd9mYNuWyqBjj6R1wNerKSF6cmcwA6KPjD37oLaQcyR7MSu7PMbV5xYbaRSg3GStrn5Vgw3uBVAf5Q",
  "key14": "5S7TY6GunN6HWh7U1htGiL8MjR9LxFxRc8EvRdoDGGfZSBnCoF1RpujMo7V5w73ZjugS3r5THkdv9d8cDbfAoE5r",
  "key15": "BLxa9XZExAMyi3mVPhJbfKTGhtrkXfqUx2YSghJqnUJqtDP4NyDsCpU9XC5aTXgyAwfbUdLYtH3bGBpAV4yeFPT",
  "key16": "gQxotJmbG2WX28jhb9feRocdrp7cyDCJYW2cGLgBYt4RbaPbMcYyDoRwHCX3by5TqHcPt1gNPrqa7MGXaGcYh1L",
  "key17": "2ha32fwVp7auxHCBHvmED16r25S8tVNU4QmCgTAuG6wttvAFVvrU2YREKXMuASCPJxAtutRzzL4SMxXm4y1S2HQW",
  "key18": "3eHfSCPZrnMrWBFbGsPZr9HSAu1XQuAaMVBUJKfxPd6ogWEbrykoqhhFGuN6KdaWnPsqGfQq6AWqUGHkYEV1JNiN",
  "key19": "eQCb8NCFkc6aRh638GLV7LKACpUHE2HknNc2zL5c5dHqsJ7hpMiSU3XpyQQM3fwT3Uhpu6AJNTJ421gMMfc7wSX",
  "key20": "32cAFRL3cb1VhaZxdiT6wG5Tr5s2GErsjjHrD9VJFPVxtCCgEXXmo9nPgd74cQPHqyLFKKvb1C73bBkikzuspyos",
  "key21": "DBQetoweRN211M1KgJf2SM1MWEdqCVYS6ZEpE1VGPpNSDuM3jrzRUn8Go74Nc8BUFtQJ23LNSnhb4xJFWpducT8",
  "key22": "54oeopDThKctyurRHk6oN268RVMaBeCLKZrsgEdsfeUjXkzdcK4SreFChdBhva5UUtmqadgBWQBeXtYpNSjhMx62",
  "key23": "2ojv1wEjsfag2BGyCLoyc6ThmM2AzS9DWGrwWVDQaR55hkJ1YZUe232BWBNo1V1JwzLKZLHiBmK7rF2Q1SSN6DVw",
  "key24": "fXgy4s6bSHkgNEvYnLyUd7vCwpCBLhLLGZiqS7LX1en9x9aew29SZo69yFYNjnxTAvqZQhi34GB2suKhEh6ZJUw",
  "key25": "2gMUcP9Fh4sxV64LM3Vfg3qZoMnSxCNu5KkS2XvmNKonmcPkLjGyYrEiwZ5GXDfk2FNxsE4KL34AHfuLk6eDue6V",
  "key26": "2MMFN8nubqixhh1D447pTZQvSSPasHyDgiMEF35jhvowfXcGYdq3wSwn6SEECFJvmsZU2xPSjWLcUq9v2yeNXyA3",
  "key27": "5JjtK3fSzCwq3Cv3Np3UdHDBUtyvGff2sUkJNVt6vveL6gMnPeigoDHWtLuBPSZGF4eZbBpZv1M7gXyPH8zMJtEC",
  "key28": "t1SrifU8fPHXVy9DfBG93xf2YMQ8PnMweUfnpMegS5sDvQpBBccsbVbsxF5KjujNMF7TqH9bAF6YJ9xEfrNdpJs",
  "key29": "64bnHpPUiWHSm1cZGsxbw7Yv5z5XdD6EdLM624UpZHPweZ1VDxKQAFNrzZkuGjcjpsuEhw3Wav6Sk9U1MBiNzRi8",
  "key30": "5uLiNVYSbUz5z5s3rRpYBF2QCzFDvqVtfcbqi4ySbFokCWzFZPkmVFrGdB5WCM1z1AsXrENfcVK8RpV9Xf6dqEfC",
  "key31": "QXK6JbZ8Ut1QhB7GKVpLLkN6FqRpGDNSEouEcRDbvFFGRd7155CqkB6KMKkT7vYu2pNAVwR4MB8hsAkikQNb3jw",
  "key32": "5kZXtwWnBBkKvxp8ETNDufp8mSVAUNunQy5dUyy447dnQePXJ2NhAhooFxJXkkMb42eg13L6FYSHfqQoBCc8dK7a",
  "key33": "e53Be65VyGS49VE6iDpZRAPHXYKdVccstTENvMrj3NEo4p9yHec22EddfzTtq8CvPAVNn1y9YxNQsgUM6Wbi7vQ",
  "key34": "4Tc8Xxx5acTWvXA4QsypV2skVWpqudUmRGAgmcPpjzuLNKJLSSmfcBjDbW1oEubJCsD7qjujhR8hKUjEk3BmPQsn",
  "key35": "5KWEkSvN33ZTGFaD1des6yp4MCxbL1UDaqTpzUKyNscHXztJP4zgeDAWbRi8twE1jNoW8JHtvBv6SGYumut19Y4n",
  "key36": "3ZCxUNHCcQzFcAak5bLNYifroSXB4gwr6TpC955KtfdFLvXHL9579fwzuqnm7mHKd9ZL3sZ2NuRpXpRZNJwZ6cGE",
  "key37": "4QmsJbiApFWnUCNLYtYtmn7N8ze9JWDU5LgaJtUZ5eubF9Yugxg4nofwQwEcs9BdH91gbJeAviLMLf3HbGssiizs",
  "key38": "3NqJPe7gRLD7R3mGhDPC3YybeCoEvg4QhszaF8L7FoKmhYwpqzfskStrN34WQo4Co9afWuiPwo9B1pVuTYTEgpW6",
  "key39": "2JbJRg8DvNKWyx1H57BHGY4Vz89wguEuYAH6T7uMrgoqk5wLXiTeL6aJMwfqmVzrXckfaRJriuChfpFrmq9ZMFzh"
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
