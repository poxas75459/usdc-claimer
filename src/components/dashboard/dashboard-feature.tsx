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
    "32ZiXGtAr7J94hDVFJNAP8CZo2ihqunLQQYY1JyE2CZyxSBtSzrHrqrx426B2s4nmML8t4ka1apn9kwqdQZoD59P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r4LbYv5gSKjVjo8uqiSfR8BwJ1g6Gtx5UdBPET46Eypu5Qhs9thjSWi6XTEEihiGzgDEcRwWaaCUTTay7oD1WD7",
  "key1": "3TSY8FK2feJDeHBccsSqQzqcU4378vfd2NZFhpzCcHZy9Qy6FM7gHB7FvCGpTHC8pYiPu57KyjovzKYwkS6QMXsD",
  "key2": "2RBNtccEmRDwpGZ1CsZPVb1KKapAZmZNMq2JJYAE5sgkzGzhyT45Sio4SxxNza4KiB9DanavKzFj1cnLD65sWEHH",
  "key3": "39t76Humfdg3TFDfCodsQQNnL2AfsyU95S64JYtixKRHjkrwtKWeG2HqyXf3tPHdDEPR4vczYqwMgQhrzXkquHAe",
  "key4": "4cDtB6rP2oue6K8op6CxQuzG59ndSgbda1GoJY72DRQooSMvQhcyYMi7ccpFbTFapg7Vq1gBKgEfNYRJ9zqsBr9E",
  "key5": "2wJfS8mGoEAbswqeHYe8V6Q4Cpc3qNyLs3zQvfjpNUBRfStCqin3NDpuECWzQ9its3SBoiT3zf1aLQXZ46DmB9vQ",
  "key6": "5sp7Gb1Re1xGeN8QAJagYZYczWr4mXWirjh8nfE5e8sQBVRsyhgSRDXhjDkoZsmmCiPH35ta2C6441PE3g9cM5NY",
  "key7": "1SWzEeyF2Tm9hkL3R2Am6eF681KNgmtHZNjn3fzeyuMv59sLJMo2oSzzAfCtEpu5aC4KYA1ERE98tW7Nf3bScp8",
  "key8": "5kS7KjQxWRp5WNRzWJRMdmkunsyeo35q6xXn2axNGk5ErdM6YhPusxRP4DaY5yJggH8X9vb3ApfDLeDvkrqLw7eE",
  "key9": "T1i98u4LkmRgMRth6rFN14NbftUgELnVSg8sbFmtAVwqqdLbFaq8xeAQwokiNfsLu89eUcRELaCtJwAydqWGTxa",
  "key10": "4JfuYQiCDCYnpA6oUrcwpoZS8BFyAdUF2tKAYU5qPZD6a8GJMKd4Pjw2pQkXHnbm9BrWhinPX5c368zHMFwQYshL",
  "key11": "3j7tuS5QfPbMhJGUU7n6djyxgGjDzbnDkREw1VX4Zt2wGhkchssa4b2XKsUiDRLS15RtBUsxZd5cNdfmjuGiktWs",
  "key12": "5mKVu1x9DYJXRx3MA4JxA5hZr3o7yNmDWm7HKdKiu7zZ8R22pWGFpjQVY7LxoFngLkMR1tJjo3WyCcpvTaipPSmJ",
  "key13": "668R8KTsp9E5i49jcxADxibddVttiYGLxpBEqNpUEZPcvUJN183WBQDKuswPNYqYzvK29zFZD44C1yGzHLYsU88L",
  "key14": "5LmHg7RNTDHaQCpTzpR8dDVdJqNJ4vGzyPSeangqxvCNAUUAicJbUKuFDK2gYyHH8pZvSc7MGa18U83fCHWBhhk4",
  "key15": "AuhLXELjqpEjZSy4wGjyPe52wjPWsrADKrGgL17CvQkN1xVEz2RzobqPn3Yhg49PxMz43F6W7SX2tdHJ8JeeAhw",
  "key16": "bcsXs54mH5DVTitA9knXU2DQsvv4hsPAiRhL2Q4xqWY8GMpDHNbAKLoyZXJZYkENDPpFzFrhKt9UMHCtea6jWGj",
  "key17": "28cQVKUFF6KXoq3T5RCwBGJygZkvgZSX6ckyzNg2JY7L9ZMTYA4ynh1UyxByvwg2VMby9QSDGkZLPLSw3Z62QKte",
  "key18": "3xr4x37r4x7FVvpM1dgSLtDJn98czpjnxdAy1x4nmEiAeLeTmAJtQjrxSK4qVvjjW8zWYfhW2gV9sySbZUMUhELJ",
  "key19": "5H3RTt93qDnbJCc1EjNomGG14SjyCbRzvkaJDLqCBP1WW5GNQUT2kNru4MpjQeFYqxCze6fHambSmNyacpPKtnzJ",
  "key20": "mtppLAWhgrRmeMSg6UxT9ggidx5DkSQaAwaUNWdLxYuWmJwrjQrougabGhba6i6B5HhEXuTKFeFigVzpYDhs5xt",
  "key21": "4dSpNY4btz5MLJ11BthTvzhvxoRZJ51PvCkDuSPs3MT2RqUgjdxtiywmh9GbqS64sW39Qy3K6VJBgsU2xWxs3LGS",
  "key22": "2R6JfCtMNst5Y9n4KeBaUr1Xnrtxaicz9eBDBzX3Exg3Z9Z9p4BL81GL1T9QgHwWi4JAHrZ8bLhr4H82q3XRwVdN",
  "key23": "3g7GPM4DXLSfsu7qBf9KJ7xD9UiZ11RCrBvywBnZzKEVpx8ntuaoskPA8M5J235eXtVGEMkWvmpwA9Wo6K4HMzJ3",
  "key24": "6kzDesdGdvXVzpALg7YAHMnmvGsi1gaS9Cnn1E7pSCJqCo1f7vofY5BKNCVWYvjYpEYH24MM1Ren9NtS5LfV4CM",
  "key25": "3VkLBcHq7icpwRkVbMNfHvSjjN4hNxum1mXr6L14T5UvTFvKHT2uoEYNEWSsHf433iHY2zJH2Q5DpTgYo7b4BHfw",
  "key26": "39HShjXYKpLpdrbdUni8tr5isCudtzpetWJZLbMJSnCAJwKoosUnEtDHjRcy8ztCMnG8pZEX2fkBTd8zxSRwBQ6b",
  "key27": "56tdtKGLE4kbP1aKNn7oPxiN53WhVJ2Lc6opzBEckj8TVvGPAsf87fnQLoT7dbZTBgYsS11EwGXZa4mVv2mXCome",
  "key28": "53v9DjdSE7pJ2ZaV47GoVKfvrCJPfafzrP55mcpx7YFkk7Yd7J5LqbBTfToSg8rvBnn9dZBL136caBY4jf51aGSh",
  "key29": "tutWJkHFvHZXngZvWLpYHr1xWcsXiXuJwZrp5FQqbCTiUWHDAT5X4Ne5LjU8h8Riv6t7Ek5wzoGuCB7fcD5jEJD",
  "key30": "2FMVb9kGn8Hnn4rfvsUq74mB3wXbU7sYwYCzzisGLb1mSvxQXfXpK3bLpF8cnv9NqUJBNHh6aMVBRZBaF5HCrL14",
  "key31": "493EmXfpnLgqve9XGeZn8W3wuYFNXxeYaweJxZzcSJjpK7ZfGYak8PSx24axF2sNJ9abchYdPoPrrY7ANgHaakfk",
  "key32": "4je7TsJMtuLFnEGzL8X7MwKK4qXodgD4s82gBz5UZS7moCfuHDt1b2HyDc62RUELZvd8a5EzKSYpdKDsKB8wm9TW",
  "key33": "dyFUqxr65bRfhjQWYUaYRcMDJ5ekAzdLTRMyXyUNEzNjFXkorwGMzbJ6ycT8NGWGvWbBxXjftdsajDchjd4uYTy",
  "key34": "36uukZvjEXochurXhBgrWBw7Cw6AjLb25ToPsqUtZkQYVsQWV9DfFp7S86z9YeGqahv7Tvp2W8xWnVq8xmbdotR2",
  "key35": "3fkDz1SxdmUn69FkC88zwUDXfYUEAvaSUHVEJjthcYy6BFM9tqub8ygXwsKmwXzXDkc5wjk83yRA1KAveLCxfX7Y",
  "key36": "348BR87jAWFzg37T4BLTfMseFSYTSc7XFCBwNwMrkmZN4g1gbAaJVzgGjwaCnSfJGiTSCGrjq5VvMHALZyKaxHKT",
  "key37": "41Ax7wUB3gUXV74TUSTLDizSi96FpEKtErMFf6Fq4ktXezPMjH2cYgraUBFW8uBuapNrX3xba1K5QVWMuMwbS1JE",
  "key38": "31dwCiQD5n34gS4mT134Joo4sANgDDnjYquupDyNGKVAkWzF4dsiqc8JrdNxuDMFHfjme3VKS97t6ETfgNSk4P4j",
  "key39": "4zRyKAhUwsiwj69ntyiBgsneBQskdgDLqeEvmEVstg8GtTesCVZUEe5eEXcHfc3vDdLtnDix51JgfSTCYgS34sZe",
  "key40": "3wnrtPrNTC5PWzAcSw9CRXs6Lgpgqe4ZgArbfxZ8gu19MzpRgTbXHXvNtXbQ3HfkLWAe9UDTUC7UDq5y1GGPSyk8",
  "key41": "4PfyZss2da1hCPnmHPBhM4ZKW172xw6dKMTLxZdqvJJxAZcUkwB5eAvFvxbmbwFeu7tD7ZFXmSj7jW6GaqsSMQyo",
  "key42": "53dawTs1CN5A7WWCvLfpskHcFe6pfA5Dzc2fNPp2pN3RwQ7dW8mDZLouKryDiPLryu1M2mVquKPLNgMrwWzrVqSa",
  "key43": "3eoGFMw7vcHBmMsjveeSmqn2S6BocWaBPxRL7BjoWHuGdqHMmYPFJDG5qvPFDdQXFtMYf74WR6QEhp94WxFCi8ZX",
  "key44": "5eeDJ78qikg9cfq7cZsZRrm6fY1EJb9w7o42UboeFfe475mF51UwLvCkfgzdS8VMaXnwGCGzcynrtQKy52DYedJG",
  "key45": "5hy8r6XniGNHoRuSjsYipcmgHVoYJUoHUSdTQJWbMoiU4fCgwVMh1ei7EU7aj5f1FEnTvRXQHtnBnHtVyXCgFdB9",
  "key46": "3Yt5tST3qapsRCztpnqep1b22jtfEPuuja3TV8iZETMJjEfjMshJRJkX31XKyz5bvho2SHWsSvdLQqhdLfGXbP72",
  "key47": "3GDU5qrjwz1xTj1ypLEh7eKf4jnSUVByBg35qJon1E1Qm766yLdHsD6PFzdBBHa5gZGTFdSKyMKo65He43ep5ixk"
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
