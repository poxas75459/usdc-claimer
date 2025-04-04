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
    "7UepHfALVZ1RmEbphjumAKnvMUqR67EpJXLwZG5A96rTrb4YdqNTVHXyeNgjkzeWPL5mJENyrExMoL3RT7sqoex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K1s6w5RPBBFpi2ditbt7AKfXFZuXpQGfysaQHBe3SyRgSRkgJDU7RLs8NHPRFMdaWv5MbLpdKErfDVAT2Vaafsh",
  "key1": "o6oWhNZVbG1KnHsWmREduusApxpZ7q2H5Y8NDeP33kLrLEtnAvANZeVnUsez7cDprCziTr57ngsaBgDvohfHKew",
  "key2": "5E6uU4UTUfhSUaisfPz1zcgft7RLziNbe9s6SxnzDa4NueodzN8aqQWAfg6xvVTnUvJBSP8gckju66nYra8NukxQ",
  "key3": "2WhP3ssLwBovY8JdbNpGW3M3mYU7wLExqzXjose3naNeixfa4ox4K7ZWs119McsWT76xcz51whMCXh6feXMuT25K",
  "key4": "3S9BCuuPb2UMQSkZeiNMw92eSXjayA4uG6dJEKu7YD5HCR96gRbjChNGhLjr48HoJdjvXMexFKey54yWvPpEFFeb",
  "key5": "3osctqNkdtafvRai92GugSML79L3SB578poQG2SZrPEsxHLer5QbE4RASdFeBDGwn6wEXFHPYhNYU5uf3yU6U5NB",
  "key6": "UXz5k5tFmGB9Nb3dNGVS8zchXZcjrnoCftqN8Q87sNrhsmLiy34t1Z5fYxB9DQfjor1pCm9db3HZ8csgFryuiP2",
  "key7": "4GsBg25us6AACnHFRVPUtgLbc1XvR2YKoKrmbV46vjm1LH4AR3vyUfVPNEAPUdF5PyPUWqb7HvbdhR13V8AzoFon",
  "key8": "bD4vDt69KMqyaoZX9xm61aTaMLqdgdWYNPXyFgUaWweD6gihVyFRjuufu6ZaWLnhCJfWLegk9skQF6JKfPyAsTt",
  "key9": "5czNFmEaPXvARxLdwp9nvJddZcQYB81bEpsjbQEBkH29TxHzKBdn1bbdHfZ8KkxyRH4DNCFAT6d8LAP7HyqiemeH",
  "key10": "4vWSnqfzCwJdKhpGFLFSMC5CJp3Xip3b4dwtkzbGLQtXQUihB2HrKjAykyaReKCkgaEJG1zhi2UjyVpWiWvM4kPD",
  "key11": "5FdznCP7P7VM7MRff8epu6BsWv7jSdZPXeRPuuMij4NH5LwNF6rfrHiBDDeu9xpxioBMggAT2g81j4jYq5J32r6i",
  "key12": "gS3NegUu3677UBjTYkbNBLsRbbYDvvWsmX1z76rfPWZwYSkvgcH4BYCTrNDyjuoxMum3NxjRHNvhsstWrUbWDos",
  "key13": "2i9XK8RzYZne7QFMNJnjTUGQLpcgixgr2neTD7cDrV9miSNrAXxYoGfssJaUMXu6qUn1M1yXYfbN8inqGi8Nmq5H",
  "key14": "24vDBD1SjLw1CzSAfR18Uz3ygbyafXz9vaHRvorr5qjZ5A5qEawkoYDDmeXr5dWRvhgJGN7wMybveVBiFehTwpcT",
  "key15": "2Fy7ECqDosRydt47XKxHnrEGbgJezVvDyaEXZ9oxCpQ4iN9CA3gARnZuZWUzRA7xeBXtB2bi8HBoF8ofDTWuQ7D7",
  "key16": "5uFCvBir2pBbtHwedFWhYpxe669fo74nuDcxxtMSGDEJRrY3xHk6W7SwyVSg3xFChYVuAESKZQF9nonBcbL3T1sf",
  "key17": "5kvTBiK2AWWXajF8E7uKVcapi4Hi7X2ac5geYdf26d5d5eiV1ih7vSZWSyuAxSeCAh7Dsghz16CrKw8pVgP4mLdp",
  "key18": "3CzHKTMSakZiE19bw84mFsEimHgSuAd7Me4JczSBg9fVG3fyRUDeyYD6D5tc3tbGeV8D18fEwLvMiAk2znajPirs",
  "key19": "4TFWmBpfgHnZpPAZp83w12aKm3PtG1SemGDXzyqogRK6ZdaM69yRKbikgb2hC3dkTnKSA3KbtqaCNQj1AoeBazti",
  "key20": "etgCJKHLAoPusSZV7pgges4rSwvaZm1rsWvZGknqdTY8kxT7xXX4rXK5zp6NqkFFuGNpQ2zF2AxqmDrJtDVVsax",
  "key21": "3a33kfFKgSqUjipaf3PCcSYY2peZWdkQS3exHGZhtmRETw3TjoW3VJKRQY9wdDqUzHoh2uqVkQAc14oyuKEuErxy",
  "key22": "ecnLiqK2eNuzaNVsUTwC66raRq4Vzxsr87yYYKif1HmWqcMPLzstUfz5u9YZ4s6cVbBoT5K76mMF8SeHDreJV8B",
  "key23": "2jmTrK6xdM3g2WDvxRrekUNkhJwrgdPLHCDZQ5xWu1XazNrta6oJ38M6HMdHgUkn2d7AbBVKKJ88GjWyuC1W3sCu",
  "key24": "4TRnywZKw3uUQeN3JfDK7gWfX9ZmqHf1MMPxtakujfCor5NzhT5SjL3KyUbtVHVwQvFKENNcq9VscMys9cGqMw4r",
  "key25": "3dMR2x68rHvGbRLitjtGrQvPEfyZJ7TTWnmPh2YiUrRQ3PMK222fAnL37Nc8eRNxftXDZqd27TJuZJfS8E8Qyc9E",
  "key26": "pUWvCttmpaDcp4n7XAaUnFDTUka7cAnjaXK1HqPtEHqKG7Cxur9eJVaPeAJfk1ZUSyr1XVoVcBeDq6cS42T6AVm",
  "key27": "oAX8HkNDMwB8NgKZMPMCraXtbGST2ZAr7tEYEKbh33WEJP72S7EcSgLw5MzJ4K2mcMeZAz1CpMGNfzTSxHwMebW",
  "key28": "2WVUNP67ELzG1T6gzjt2vY9m4BAaJoRhFhJrBxhuCMhWL2ZgVf1XjzLGUNeaNxxCfX9i5qGXMm489w2vDdMFcbxE",
  "key29": "5kDyg79EWpd6LXQ1nmsuCrVGjcoxHzCgSxbrx3t84taBennaricXPG1B9bBW9sj9ygXxoeJGimu6fDAHwQ4vVY1Y",
  "key30": "3PiVFguZ3N8ULKkBXWNeq5FgtwtMLE3akHYs9cyVDpnjiVCyhFE8EVsn6baArCxSSpdQ2p1uTpikPUCXAeWXosLU",
  "key31": "5PnuWdX2AnT1UfVPACYtVQSz9ZY38VXZpeuoMQZzAWkSCExYMCUszysVuTMW5tLUXkyyhQ21V5HU5hMR5yfLgddD",
  "key32": "3CS4pgbxPofbjYXjFtk3ioMYHLNaQDZ3qMzSA2ZabWJV5SAVby6cmosbR3wqPB5iRdMM4if2Kzbgvq9rzXJoCBjb",
  "key33": "3zwc8mZszqSBFRMUvhjnNp6Zs5ztrKQUoybpVQvUd6M3jFXjhe8g1nQn4ewdqLTVkWkwpxC7LKeyc91HM2zYkpRq",
  "key34": "5EqDF2pefFwoRSbu5NNNrsJRUBnp6UzidU253rdU6ms2vEya2KAz2wbKAaNCHXAkcjLHpkviD59SjqsrP18CG1Ud",
  "key35": "WpMicsV4gi4nU7spMkPbZmqLWphjvWUgnYwPXEtXwdem4iJmqeCGCJx1edWCAqpYEFsmF54iMW4oDUxhc937MME",
  "key36": "4kY2VbnBiHCtZXEhTLqGaXG3XFUb74N8sXUyuB7XjfK6Lywb7t9PMGZWz2FQtEnyFBxbbhJHDUGQob1ii8MWVpH1",
  "key37": "4iGHsj9ap1mzBujgsWyeAFVcFHaq1QnzTQamJkT9xcormT4b1ERHJeyqYKMPwGZBuNkUtWiud5RsAwt2GYeWZjD7",
  "key38": "2fFh5LPGdCCDZjmnLrr1x7hEbuXtRfbnWnCke1padFp91YiQgEKRXMsLxR7nMuYeT6Qk92PEj3gfwWHEkZtTWUHn",
  "key39": "2VfNBBN95czXdgPWMN792oJxH6zWupMh47wBQhaWwe1Vx5WoDctS1fsg2cKNWYsRoq2Nyt8q2GPT3AJEY9p24jdG",
  "key40": "3uk3WDrbdvg9RBFHbob3B7imveBYhvXEvg1WAGZQG9pSuSW6zzeKKqkyewAwG3CddQyK6PR6XGLi3cRSiqmMF2bz",
  "key41": "48C8qCgTDVdZXjHEqoaMx4oySLmjKbRLs8H7KBtwEWGcG6rstAZp48rqFf1zAnNrgKzwEwB1BkV2DPg6jj3mpe2R",
  "key42": "62a39GqkDopNra8NgstwinkLLb7rR4849pdSWZzsWXuHnEJ6sDnzLdqYej4sfuXpSJgW5y6iTtxg4Fh1vPyn598p",
  "key43": "3unhDsZGkz1fPPXYAMuM27ShyE2Z1EJXE6FVmDzmUWRb9sGr7KXVaxccfZKF9YgvczLhALUsT6TUiDJo2yzfEpnJ",
  "key44": "2rBhHLB8Zod3E4L5MTc1xZpzy6Kmur9iiXWt25hUBSkGFt7M5ZeE4XH5hGvDZiVxmDud3pmj8GJ7x6HH33cjZCZD",
  "key45": "2diFcTU6FVatcjAkKaUs87pPWPdMzFVHe3yiY51cxrQL2xqDgHVRYdDJoV9HErtEmgufmfusk7yPezZ5QVp7m4ML",
  "key46": "2p6VmQBKgpJXxT8VL6UAz3DpPM6mqudX78SGfo6crQEfusoA42uhy6DcwdreN3qr4hPxy3MZWMUabyQBXj6bzDVx"
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
