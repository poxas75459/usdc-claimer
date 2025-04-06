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
    "22qtYzwWtgcVBSnig1phCHmd9dWQhUnnwLcneKAVUg65kZvWTTVwauYxP2RQmJvASMjFUgQ8X3inUz9n3GktA3qD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uvc7cB6K4oLTrDKzxDRmMhfax4sPb9M37maF3eSagaRiRVycmXdL5sz27mEJWrcbZik3FRBhq7rnqLJT36Z4NLA",
  "key1": "2txEq3Re4H9yFWWKssCeK2XYnpzn4s4QSsJXm1bpZYqNbEp5Qd8b5hvtPwdzeUY95KzSFazsi54BgXUjs2q7CArF",
  "key2": "4fZUMK2dmoj2RMjUUTrLTpaXC2NCkgRLMmHFB1ApCELVLKYJcDXpc6tFPdC4mQRTK2tSqRkcykAuKv9pR4QhTwRc",
  "key3": "B8qmEBCtkdw4JkCerCFNaMWTWZzTamWxfDMZT1VYDbRqdvyEFDbyqDmjvm8dByR2EzB6uZPvg1irFPVadURyZmH",
  "key4": "5EDucewag3fDtvGWf7MV46AZEjoP8PzhrPumaU1B3JDjw91TvKiemvquJcoXeNrwwBHfsVVfVW9naDnTB4eG29gL",
  "key5": "2HeyYNu7TZJwE2Fv8X5ooVpG37JZEXg9FuURvVwVpYAMHvnj3sT3zWEpFYvYEUTp8DUaAicZdiAjDfeykEEoi4me",
  "key6": "4kTzdKT7XgZZHwKo79hL9dLxdW6AY9QxA3nybGYJiMBUpGT4jqLMHwYsaevCfdV1KpwdNM3evnCR3SEAx5suvfxr",
  "key7": "26MVAokjaDQz9GX4w9DoRgRXC3JC6BbdY9YoGxcLoHVZxVycbxM7oNu5cgHf213hv8G9EzgF6pYz6ZxK9Jbq35Re",
  "key8": "5PzQzAqEPbTZqmPQy88drVoXwdfFHn91kMeGrp2Hxzgcd4eA44j7AC3ot7EJrvsiZfYcB397iSAfzGByyCDgrix1",
  "key9": "2fyLrHuWVpNVibbqTyS4mnfRtKLrdhMZXAMqLiQAsDd6UqMvgNQtRbWZmHEf5TvjcvMANamS5wKuqJhfZdH9QM6W",
  "key10": "4JHbmYRbszESnY2DWkrynBx4wPtTFSfF2XUCBBuR7u1EUQgmEtWHpYUToih5byeb9Za3ETU4wC6bbca22wAWUYXz",
  "key11": "4A4RhFYGR4DrEbnY3Dw8c4V6TG6VfV6pHMhjSF9nyFMcKN911eryWcnKHPsAVWCBNMBDddiHe4GKYdwsp1KTvo77",
  "key12": "5ZLUqxzxrzBvKKBvhG7MSojky1Vwg26bdYiboHeGHnVCQdWpmFiWbjqtAfKb1y6PQY7UTM8GFKigGpvkT6pKaCGA",
  "key13": "3yzEpi4XKVQ8rp8iPjxMYbvun4ahu2YKLEfax5fbftYaYYG8HFiLbw7yoSS4EtmXNXNqhaF347Zx5x12ndLCkBnz",
  "key14": "59ZVLRS3cExKvxRzYseH7dPca2pEMFu3L9bPUoqhrqvG1EdegBVNbCDF3YmJEfaq5E6apMj6m1tMpeRd3gtnMVKh",
  "key15": "BkBrgPLYnp6NoE5xKY9JNDvGRV6CrHbPVQ6pvGGwrNz2RbDpTsWvMW6RnhrcnRA4RgtxiHoPszA3AQWNi28geUX",
  "key16": "4gPriUEqX1Mv2Stwxd98C9WSnzhzoTRWZtj8ximb7tmkwxXtTkXHS9o5BCck9rX2bk2Hjs7Dm8bNj71Mts5pFEfm",
  "key17": "4o9vE63fNiZLniiCa6PFB8ewQdsRbVKx6gwXu3L7b2rDQqmy4zvTTvTUpsavPKV4BsyGoCeBoxWH2ZwsPoAE3rLT",
  "key18": "36Qy1pbpaW4E3UKFRpfpynFEb63ZAiEoX8HtGgvfi3Fay8Muk7bnSjtcwZiv4oGw1Lh56Ymr21iCLdweDyCHt87P",
  "key19": "4b7cf22cN4NPFKrjp5GK7CxaZSjC17eyz78ZEH9ycre51fmWecChBNKfoVh1JaKK1j24CveyntUAHFVxh92d7d3Y",
  "key20": "WaQZYq4JE1pZJdqdks9GpQ6qPLa8xjiVhhjYokVaCBvm9wSHWPMitrYhd86ms9GM9jPKuuDf7b442LtxPieBERa",
  "key21": "5GaJeGuqFjuyxTgu5st3kxDX8mJwcvwxFptxBdRzDXED758JVwfSM5AaSzWcqb8MvnKKHtXeLDW7Cb6EKYvBPtw9",
  "key22": "ybzPt4K9Anib894pvcPVt3kpbqCd9vgx2LN1hueZa9NL7DoxJmWaCafbzDvn3kRmo4HSgFtua6kpKMmMxRDhzPy",
  "key23": "5BPyBDt8SQ9LipZwxjbTGVZMU9ZxKTgifGveLFTTQgMTeTCBZZMfmJh2KnE5tGLi2v4AvLdVjf5kYgF1drTv8sAR",
  "key24": "4QMK2cckD2YwscRjFV79KL5GAiP8SZ8YnK1bsjmU1xQFxkTKPFLpzpZkmsJDMhcUC8P3MUzthcLP6DAWCps7vVXc",
  "key25": "4W9PXpzPrSFbXWzjMskL6QeiSXv7UkyE9vMqbBc4gxHdUpXRpeJVc3vkaHU1mTq2a8KTDmuvdZWFZvVDKuzafcf2",
  "key26": "2w6NVBwqhKe7FwnbvVX4bCwfYoHH9oqFFdGtifoYkuWmX1Q1TqAXoFEuMN4nwLC86LWxncBg9f97cdYuRLiw6cgA",
  "key27": "5Z1WUyHXefocC2d9mcA13qEJ48PMm71g2Sw6psBoZK4w9dfrv95QHxNtXxqAVnciYno6iMM5g7y2BXrX3uEJda3f",
  "key28": "5kz8QbireLD5ccoakhbqkLLm4RSBghvN8icfiygbibALgU5QCaTMpHnv2PpBxS7fVu9P2gGS1wtqrme4xdywVjr2",
  "key29": "xerxscLJdayJBGEgzbz1qBNhjWGDfjim9sEouHUxAFKKMrEWKhNAk3vidB9kazCqHBBJicrXb6Xip2jWMgrxjDQ",
  "key30": "3Jzx3XotoHgHoh8Yqavt1NhKRWHL6qfCVYzxHu6PZgr4WfcyEkG4Y2vHGA1MBmYYF3K5t77yoGVkYgmyxN9t59sV",
  "key31": "56fv2VwJ16CnicbkCa5KmRLKQPGZAfCZDJR2F8GMZqgrJR1Z2PXXQoh1unZASDRgq6URt8rqY2g443fMfUAYQQQs",
  "key32": "4VA93JdtDrfanG5dWQUVZt4HiGxFr5F2E91p3wfHzsecayhHS5gv12gPoFH7wrFKmNKb7JqGBRUqxpwjeRypfx3q",
  "key33": "3meDwrvsgQFt6HjqbgjJfVWra7qk4z5gDCAmKnfyHtm5qCbxaRj2KJGPmY2MhyW3eiqFrfQBnHZEfaGopX7K7Bfm",
  "key34": "4tXmro316EVFjXcnvBBPj5T5aMU9k8GJ7PhnWLAiEgAPoFbXU8CRuwhdh1BfxpyuwWf38sZ5rMryCuUMTuTdQNQm",
  "key35": "zQGnnsguGk8J4rgUbfFB3SYTEVR2TZPAQortxgR1tC83LFN2pYn7Z67yXm3ECWYeJnH7AKzwANEvMgkkhW1NmGr",
  "key36": "3Gk9kPT5C63E3tE5bBmqcmdorwATNMoBNzK1sDCjPUC9WGxteiCXkD85iL3q82vog6TTohs98thWzqN272Wtp8rz",
  "key37": "S8bYGN2jggSAYbi8a5MJDkZU96UJz5e5gqVAYf1srBY1rwQhP8DJzx1khP9BE81Gh2CV5hXCe1DfeCANd2zDGSK",
  "key38": "2J9YdnhoqrxdBoaAt8Rb9jU1ESUC8RBysbaWB4DPeenZCT5dqEstJDqPvwYeBAXfitny2H9GbFTbCRpyrE5VedWa",
  "key39": "zzk1eqTfrcu8zqEFG1k2WsXbDQEhy8VwnMJBD2F8Z1BifMoG69FBUeecCWEqcJWRPkqUKgKiP9bmVwZ9d7me4Gd"
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
