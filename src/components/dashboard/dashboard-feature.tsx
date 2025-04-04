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
    "2SaopoY6ofAnYHWbn8BFwjjGHSB4LBZgaFF2LqeXKbvftGPxttkSVFjoM4PfmU9eD8TAqvf1ZYyCN5kQgGaTztXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4udgPm8sf5H5F63MmQKrFjyGwqZfP3BoxhxrpTprwzTHUjCKJaWzeSTnBz33MCnL9oWFdxmrDPFihnegbRUeo7xq",
  "key1": "3aFsNJViTkbv9PAfwBECdY7NFDB7fBwu9Ahqw58fPgK6zjkQx7wfrR2WKJJJChtzgxdgenaWGg3oLX7zojNtoffj",
  "key2": "2hmsc1qznKLiPLHjGsFmGc1eEd59KxWhXAYz3L3pvHwQSpNrHbrAAgtZSHyn2N2k3bk6TeBCyrE6HYur38iDoRH2",
  "key3": "58knuUkfESU9LzRZS9xJpLyAYaGNnfqKYuMoDFfQBHAAAmN9m8fGommorMaAhkZqTx9ZP8drBUnCNo3YLH7CRcyx",
  "key4": "5nBXmwDWUaCJ3Lrn73J4n7cVkHMYG7EWkhv2iRrt34egmTPW8zD1ozEEevoDy6xuH5rTTs7j7wVqvLyNAoVi4rFz",
  "key5": "4AS17iP7ydNnaRNPs4gFWG5ACCxYynDkiVT8VS8Mpf7s7e9G8WCSTWd3EKoJM1drhfbv7J2Z8psxiGwG4hRuoATc",
  "key6": "2z6iSMsU5WikK3YNXXhSvxQrUkcKjgq2wpcAgXtwuQpMCGtGPC3mnUGWAy6JSQPq8oxzcyR2HVsGgmG6JuPHstiP",
  "key7": "5f4KBpdATSTxkfpq6z3Xi572nfRxdDX3U5MUgTkwid9odLmbcUP7sG2Pq3vWDPZgTds6HM2eNFzRc5b7NYkizSB5",
  "key8": "4vgE8VXznBHhb5nNCJHUmk6BXFu4prosURYnXvNoMZEeThipjv1ScSQWJspthiLcGa2TiZu7caJCFsJW3Ere9k6n",
  "key9": "2FjDrGontRxhXUK5PkZkVRyYYwnAMPhWJC7Dh7W2gcFDLLWR4ZHPCpb77fUP2fQ8FXEYXUz3fVMJVNCmTWYKr12t",
  "key10": "3YuiqA4LAxQLgCoBhx6pkGBEAWan27SrychDLr2TFBkCjp1EUVJbcsE7rfS92K4UEVxqeH46aqJ3V3VC2ysxnJyf",
  "key11": "3j23cyEBeHEPsEW3vSwuNvcxfEZDzRbtF5B1ecYkPykFsfPq2draguywUGXCWDvEkhQ97UJxNpBgeYw4xFpsXuWK",
  "key12": "5UCd97z1Wf8M3SRZXUE1vSQTAEcv9aKCr7SLQG7RqHA2Rf83AuZdSwcQ5qWbXz7SJNYkifcYYNNpUm3qQkHAMDv9",
  "key13": "2CVi6mQxhyynVoRcrtVkKvnkKmVKyr8cwjs7ZXdwwLo4mfGtLJoDLDuHjvTNP7qDU5BrE9iViRMbyy57EX48Rwsd",
  "key14": "389QCHMbRBx16rWQRUvD5s75gbaM61mJLVFPteaq5xpkd55mRZGMpvJDNbh6M3DeThTg8SwrDMgwhiZUvY11rLRb",
  "key15": "3agq3prSorU2hweAtZcdFDYq9a3SpgEEVPAN5WpGkJMyvuR8gDgsr9eDbjdzgag9sCyhWXBqGigr5E2PFT4rLLAe",
  "key16": "2pjZFTiMtVXHqKwQeD81esARk2ov6x5Y9Bw9ZbPC4jBEudAk3m7F5ncfL8y6zVN6SvRmsYZZooueCurUmQNGdXVR",
  "key17": "358am7Xg1ZmLr51eyS5KNmhoVYUdtLdaqXmMUUn9A47GMGHmBq7C49SKLugXhQg5ZTKbHoZRtY7uB6yA8p8TkZ26",
  "key18": "wWDTZyt7LdogUuw4E2FiPBrrmpGNAcXT4tgYS2VuMcseiCrF56H43ptnzZhspqjk1VSckqZhbhFCap6uSsMQ7hu",
  "key19": "3BknwNa2DSg4tjbn4NUFTWWHzVS8AzRbfFjUy4xEcBE7kEZMVBQaC2EGUkq46TfPUEr6Bz9ViZer6DNXCMbRbwYy",
  "key20": "5HXBqDXDv8ujr3NruE5MhYSwvvhAHHqn7qJ1r1fiT67tcELVPriJayrhL6hiy3343BBenuFvR3f5mkJxDaoULB7o",
  "key21": "aLKwL41Kki1o9VfCfA1oGf45HuE7pvvqF26UNwXkYSrGXLAzNceuiXyiejWo63eWt8Ffeh6V2X5AnHjcypUKgNr",
  "key22": "2ZD6PgNpsuYDG7Gd57fT6VV5PXKPpztaySkxnck1NjXoLAzGkTSwufB3N8GZUrkqMhY1peVUo3Jo46shRLGG8Pyt",
  "key23": "2nkevAZNcFeu6RyZVW7JTD7bsZNdDp2btacexNqqeGepGuWnknb3dUrUa5xSLw6BcFfeBKNC7nyRGTEhZcBnq1xK",
  "key24": "594QejL627gKucLp7xJXDKrVFMpBjEmmTx4oVyGr4qsjr6xmwaftQSwsn7mYs1Sxa9rPuQAJgNmm4gjzQPVRk9AS",
  "key25": "3vJ6Lf9cXzzFjkDV6q5zdrHNFsLAfp7xYWMCBprUJ6ws8AVPpSgnkqpgkqf3uc5rm266PUURYi3jpq68eBqHWFjg",
  "key26": "4BPjr5b1P21k3zo6ftwavXtVtbrmiMcxGudstPHP3HmDicWs5Yzn7GE3oCZk2Ze2ikvYP9MT8ZFXATqitrrsimvd",
  "key27": "28aq32QnTyPGG9GsZVZxAreAUoTb44jQ3BKQ3jxmrcaVyUv2muY3DrkuS6TuJXQrc67MKBRAMSSeJmpHUpnzC8TS",
  "key28": "328PpBL6LMBfmy4yY3oBTBbJufH82LmBWNTEmtTbbJ8ekbvqoNkGRzNJTfrWrVQHcfqMv5jttapDHLde93NvvqwZ",
  "key29": "2BU2KjsREnwB3tsUBCsfhmnq659BNChJTkH3KnEFaGVdSoqgTDmwmnkAW6g7wDK2nG41XQ5TqadzBVa2NmFmWiH7",
  "key30": "DxRLmMQpKzVkf9VxYNL6LkRyKxKqkqgx9rBb98xjVn8eggPNuTcuUerJn8iuEg2QhS2iZjoJEB5tWscGQdorNeF",
  "key31": "3VoRD1tTLKWzAW2zpoSq3iY8wqLemJuuuucqN9YMFMiQtBy4iRTgKniLundwJu1y377MgNZDs94psBfwqhAvbA2E",
  "key32": "52xpeyBTrj5PPBFGkbbVaJAFMRW79PVn2NsWYpWPbQuE3EaVT4yovXC7DRoRKYpTQtEPB7bPHiCT13a47bnYFnAT",
  "key33": "CWSXiHexJpFECzv5pQPxbbT9ZRQFPMCyPyL8TAq8ySgKTGP6ukQ3vKboK4GNDYrCxCHMmKP7HbzGrruqRgXHbXC",
  "key34": "2duxWeCSP8oaL1PMAcZBbYjthTFUVFHmvY8WMDjZosAjm37WTgBAPNMArsXRNKgdunQLPEo5DJafSbRtcwDd7K64",
  "key35": "26jkQZfYQwaoQJuFDvkRmrd3Dr5tBwURvtxoLQPTJoooL8qCBDHWsuFaNseHpARcDEzvwRh1ADCR5JvmmieBX1es",
  "key36": "4464aPZGg1YtAWdtvn68abZc4HXHkq4HTiPJcNLXfAwCUS5k59vCQ4BcCZ9FZt8MDC6pUHVMHcrF9iULbikQynE6",
  "key37": "4sQAtcFyn5aczWCusoML9gf2WTj3cZXLkx2yBTsWpVxRvzcWMWvwezYdeEWwXx5Nf1u2uLVDdqzfB3kYra9oEJV",
  "key38": "2MNnxPA8MzGQdyMBXjZ6dBFdsFGsQPvA1SvoHxH3HtiLowET6QtfZSpnFKZXXrVvTetTF8KqFMksXtJpzUx4Bceh",
  "key39": "3X26GnhLnmaZPbjsainph71XYZTN4Fwbm1QeQ1ofnamfiGGfd8cbCMPYD8uQ7CCgwpsVmYUqu16RevMLbtZktUTf",
  "key40": "3pwzcbVC8912EEpRdYpMfH8NLvxbqx43S7TveboP7wtAtj99eJ9zP7hMxzUrbCuxZzpgZvEZRrhteuZ5RmsZ96XK",
  "key41": "4fNKEWmNwS8uGag1JfVaJ2kfPbGTX6Per5aFbJaEzCC799wTVF4VV475KZbTN5DY1FSTEygJo6vCVhXCUSUE5qV7",
  "key42": "WPYT1DuTTa7QUUQwAR6fTj21tC4NyveSrAWr3xuwRsxGXzM6JEbZGEeJFjd7R9XYYgAkSQyqaXTfzJqwrKwgvvt",
  "key43": "43t3DYVVqMbyXbYZFcnvYrMb44zmBBCPj72hGA8Zfi7LvcLmpuytPNkhn6dshiMYEtuLsh2uabWgNhaWcFbrHVbo",
  "key44": "2XSGn3BeGrd274yganyQdZU4Z1NfCoBj2bjnTBXmoNWS8UKFC2d2oP7Jd9vy6vAkrcn92Ej8J8ipNKducxjgK7pq",
  "key45": "3nWpJqmaKiwG3GVuvnzjFn7gfpGeAoZpCFCsuucA9izVYqdEphYynrJXFUFCrZQzfcuxgcrb48G9wHHS1WxbRzYf"
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
