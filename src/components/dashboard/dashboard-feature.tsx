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
    "59kjP2EYzW8viiMpRfk7uDJJXRbsNePCKzpDv392DVg6irBL5YCjQwYVyHzrwd9vS5nwZG53KQpPgBegcJM8Qouc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ucDcGhKoWJpBjVaa7ToLijdUrGZFZ1Va5PrXWpDtAf2wEm8tKhJQVCZ8UULrWU34uXoQx3ffhxwGiMaf2fRMmyY",
  "key1": "4U3mTxyypvFsWNKzc8VuJKZtg3zSjvETgJYWqytjFZDUV4oVfWMMhATjABPaXAAgcqmyGqQzSNK7qdQvX28zqXGG",
  "key2": "4MShug3o9QDDMMzfR48ts5wJky6oi4aZDRfy8RTbqv9acodjEeek6SfakEj8jmKpNNKSArry44sksYTLf93QmXrx",
  "key3": "4iKPCZgjt4VBX7268jGZxbw7GgS5VcotUmzjvq57ac6xdbar5bSY9b68mCXiWnLSnZySKwVBs8vd8Wo1RKZKEHn4",
  "key4": "nLFDoNezCtVRtMYzGia9aAPdCtmZd8E3tb4SMPC27QMPnH8yA6QBgvD62CcUqdcQ5KskdjGfE8478bKL8uHjt4q",
  "key5": "5ZQvLU4KvMEWVbT7RGcn27eKEzcYn8PwgM6HPxL9wFgvXo3omEFoRLCdsP4sZSN9wM2fHCDgR1eB42LwffWeaXcw",
  "key6": "25a2AHBZF2GMoxuet2DXMVmoiFb3wfn7SfJL1hZupLKXhKXpfwEmBTsu469etLvs597RWmpv9pFGS7maR9NSEFwQ",
  "key7": "4sbu179HyGvi5pwhW9rrf7yiistE1K5NvAvG8oxeiTnN6G2fYhHsgGYC1ysbLt3TWU3o1BYnjc3djK9uwnLpBBBC",
  "key8": "2cCiyro5RzYXZgBWMEutPThVF5WLyGeEaaT9XsHbQpX3RBnyPu1ErZatVayKmFimCBqmfoTnQ34NnjKH1WPyAoDr",
  "key9": "45sULm7A7t1Xg3cZVCr4VVGBf2EsigR7GYhHkbxUiHaRP8SAnKui7M5AEaaHyLtK6zoM8c1GufYq3tM784YFbFeP",
  "key10": "w7zQW8wjZxNryxtyJ6TcHSRaFhRQsq8E7pfr5XFMfk9JPFbWLe2XcsWS2m3kCDZcFfp4xQaqCspcX8fQDqT3ceW",
  "key11": "5YqsUN3Nk89pMYpiD62QnKnoMih6BZwnSTgrkHAXNQsL4mfyXDwK3fJEHabmxjJU2B2y8eUB85jyVxYfUov1SxUC",
  "key12": "2nFr77hMv3cX3p1FgqRYimtdnTy2VCsBvdsrwTbJhMCt5dHhXVZLKkrU85fvwaz4uTCCkRCBYpqf1eMKVdztmX4B",
  "key13": "3CeNmr4um1mduUx6AfcV5b6HJPQHT1jTk5jwYJw2Kj6eE6Hb2d5t73Gp5nbKukoPXWgWvuEjgwwDMT6DrgtdnBEp",
  "key14": "HG9JiMLoJdyPELhA2RCeKXHFjUEGHu2YyFhydypaBVgUyV1FDScfhnE5QsPtrZisRBBjxxJ1CmNrU2N1aFmePuz",
  "key15": "5EsVdL9EWzzhhGyxsTH177RjWp5SaSvZLhQg3bchmWZrzzBcqwtW9CJLGf6tGUq2Ycy7Z89r3yvZ4JCBENWCndyX",
  "key16": "42cJiLH9EAxXnL7LHMb5AFY7eTfgEwNGMiSt1Ro8mygEsxP9uzVdgHAayjzixstYiMUAh3UGX71Tc68ynxYThe2v",
  "key17": "5szDB1c4FrBTBp4M2zL6vZ6PsKsRFvHHwzsZBt1hWs3F5gDh44mx5Agf7tc6MerztkRAT7YhojuJvwErBwqwfXP2",
  "key18": "4cBHWRCRFaC1W3bfQdWmJPTQUq19dXJ1cwRrEHVGxVryBz8m1TL955vewrnEWgmrPFXp1Ck8kHXf4guABaS3iCiA",
  "key19": "129YbdoaNF7VBn45HABMJgvVUFJoX1nZFBPbM4gnKktYDD7Qasgo3KbRrjoHZzntfx96Sr753t4PUkMxJsikraRS",
  "key20": "4d9sM6jWyyyoiVWctGQcGJwPBsxFPgzpk1RKGghSKnaNDpm3rYLz5YMYrxxunkKrUvWiQKCDutasez34cMXEM62A",
  "key21": "41oyCZU4skQYQFGv26cbAHHsQamKB8TAaedmjna1tuVY27NXDgL4KAHoDhLHK6B1P89aihav6NvKU5jPCuLsPKNS",
  "key22": "4ftJYV9w6itVxcmiJbgfvFojmCTcMb9DfmKmErqZRgendxzi3fz9iqcYfnMy7XeftAVV71bWzuZVz1vUoxBdVBAW",
  "key23": "rQznqawFbC1QPS2QCeP4mBz1CyAfVaxWJE3UfXZzd6xXdmZQ8C4DMgZsExdWmuYC9n1RXfiaWr7uNPwkyBxDMj9",
  "key24": "3q9CvgknhKE2c8YR8jBmBqiY851n15dfat4ECddtWEr5ZvzatcP8527Hogt3nXmrWiezxCx23LeQpPQa24CM4PYy",
  "key25": "45xFjhruZ1eUC4i7N4srrNFUPCVAUrkWTUXhTjZp5dQnjZKp3hw5LdReQLiM2ed5P1f4qtnacxnWUkpEigJMcsD1",
  "key26": "6AU5kUpkQkEqAZ5iu5Z4jhsMqXZ4TXx2qJRfZa8jK5pnWYCdVMereDy743L5yk6DqtrzAVqbZ8PkPETmw47FzVg",
  "key27": "sdNxHyJ7WNa76VYvAbGkBwm5pKLwNazdj1TRuLnbWSMH8JioagjmQGpmyEJryu5MVnnzoX3UtVbHXadaHeZYjxK",
  "key28": "5LacS71hbTS2izVL1qVkVFtxNaqzBvSfK8t2dhZsaLRhFkk6fMXPyMdaLLdPudxHdDMX7mhmv9QGeffmnmfkWHK",
  "key29": "64x2kC248znbhk8KRh4qtQixMA1kKwuVSfxbzYNyjQDtAqb45VpU6RbiqYKau9k86bXuD5jvZDdFn6ajnEXzNFg3",
  "key30": "zVaPm7YYCPZx5EYFdUFcuVwdB8oNFomnGBFDqWEpkZyqB9LSXYPswbqDQnJ72AmJxpHghAaR9fEoTfryKwdnb25",
  "key31": "4NB7UydAUJ5QS3YeFEDNArnjsSNc55TEP3KyMzLAfN5gBbnaU8zZKuF4nfKvP851qii9GFuqM7WpmXizzpfn6xg8",
  "key32": "2RgczThwHQ2V5JBFJjJettySYfZcUyENyKw3Sz4auwgSQ6m3kzqcVfeJP5unrsvm6RH5UCdmVu6R6CbAZ6AD6ee8",
  "key33": "2wWkYvPUzXMHHRAuqnEub66q7QSRDqNe3Q7tRGiq8S6bWRX9RU81HYmrgBwspwF5aubmmRYobXRtspGe6Me85i2v",
  "key34": "2phb8boridNZntsNLBAYiR5xqZU1dvsw8Q2Pg42um9q8qeQxXfanueAf8UXNMXrD7rTgbSG3DN6L1QNZdoQjGhMu",
  "key35": "2dYCYFHHaqaV1LsoYCEdkBSmnzStt1FMq7GhPPZFZUVhmuQLK4DsKzgXRDmmgH1BFwbLALqsCTkJzPVgaXDEmRSr",
  "key36": "5ruDiB2nkMG6bPASrbPNWLCjeoiXJaKEDWsNVV6UjFJiy63YgSuUdKvfEG4UTotcvkRLFJQTCcvCbupH7TG57Po",
  "key37": "5b9zFVTfJ19AsGFTp2Nv2zteFaMR7JicWLYEH4psgBRGivgQKMRHK5yXZwUTNr9dEtLFs3sqiju5rz7nACtmCEif",
  "key38": "3CaUVVn33B6YpqDAwKozSGrEVu7Wy7otPoga2yivSCvymCkTCPPqy12SSv825KKDJzbfXpEJiVqTgpw9oZhiVLwX",
  "key39": "4zFzvLv39KNmiefFH9UKTwWkK9KjdSaJMmNiZQo4H6c8JVB7ihGqPFSxSQ6qnjJaGBoFULFDyAjqxgi8DUyiEEqB",
  "key40": "62c5WhEeP1tXbrPJjYXCdX58rLiu5HSnLihEZKcHuDzCz4ffavSNxiA4SghfKJKVvsXDpHX2xyg1SicrAvdxr1NZ",
  "key41": "26kYPij8i55saBEhgYJqFcdiaebcaPKa1jDF3kx8uUG6f3ZNbjgwYWoKivb58rCkGEkZYbKJrrgcxZwNAhbAw3Uy",
  "key42": "3KWZtEFGYX5G5xmvXjfTZ96vkZay643dfTfkr9SuxNrYPDnWCS5JitfD8FKELPzgrFXn5bsr6fDh5uxEWKcdpDBV",
  "key43": "5JzxckMhNMrv8b7is9PZ9kjTtTxr49r7u1VKHRiJUCQ8bHTRMRJVPozqjQYR53z5TcBhK4Ds36ccx8ehm43DBX5h",
  "key44": "464UPATfsgrqTU9rNw8XvGvTbG9qYYM5f7LDLrJCrEaRy6BwPk57yBH5hGLo1BmJES5dT2H3mfPtNTEPRGtWhvzw",
  "key45": "4aBrCdWQ5vEiDTQ9ux6r38DL9FhCJViJLCJn8cYmqKiJPTiyjdYnFsKyELxr6A8v6fGdPceX8A3VBLG2E6eT7e57"
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
