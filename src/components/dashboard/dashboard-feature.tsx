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
    "QHinEsosdNGPXUBHzvgyLgAEJvemmwZEd2AsL7feHo573enSyqErhtzeRbjaXuDYG5AToZfWhpHawRwr3d24qfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fcb7z9amSECetJNvhzXW4G8447UP84ErD2RbAykFgk4U7YGDWvCHG5Byg5f8PPxCbFrEhYymgYVgX8pGesLvBAi",
  "key1": "3ub2r896sEcktcgJzU1qsqUc8PtPuqmZ591jSvanYS9qfokfgmZRt7dGuUEw33VygEnTYmZJhTkMPWEPR657exxe",
  "key2": "UUge8wVBdNpBc9HXcaR7PNbtuZyVjtgaCCXyHVUnjoawcuLzDBTuYy2GREZ7io865L2brEvCGQXiBe8Q4jo5Rdf",
  "key3": "4qGAQvRgAnmYZxWPjfci7QkqfyNrQMvvd64hB9UrSYfXiBiMVHxbJeMTJZbNaUe6FsMQqQ5uVCALGww1mb5uT9mg",
  "key4": "3m81dRqqSJCJeNSgKSW5DDBbugjdwLrwcyCeBhRP5nMkiotc4ysPYu7vmTqSsjPcXYmuK5vkpbnG1GQBmE4n1iBS",
  "key5": "TRobKCNDFCWChUYborgjdfG54m3XzV5rBREwTvDexoP3q3mLMByiQZsovVWQhgVyjo44mueZMiPzVBJBueZh6g6",
  "key6": "3jnAhPFB5cpcebMAQEnYhBicyeyBXpi9ok3ej3mQqyEoXiH9cwdpnrReNn9iKMr1h6C4V9n5aybb842xF3T78aC5",
  "key7": "5WjGBh4wGnrAdzofP3JFD54TfKWfAUXo8QhRBXYtppXLwMmVhaSUYVcRNGmEV2uGUMsx96VV9HYUgociAwMzLaii",
  "key8": "5WmhqDnB53CLP99ih81YCiuf76asgtKGhQCmwiRBmH9KrTYH8ecjDvKM9Civp7PWa1i879aHBjdifJWzXEL3mRp9",
  "key9": "7cCNuHXRu1JEWcCtR3AmFAv5FUz5hb4WpqR5ReTweXxzmoYHEM7M98bPXKSmkTAWV1tYpxZ88gc8uvXUUHGKtcp",
  "key10": "29Cj9X13oufnHzuq4U79ov6NgSwQGXoEevuBqF3adbLNK9gQAfUTfREmZUnCPQ98jYpp8RwVdguj1RXHjn1u9zd4",
  "key11": "3CdFefAENsLkc4d5ozYC7iz4LuL8yGZ34jSYigaH8BAVnCFWcvNFmtmJy9HQFYnD73rc1EztztwnKMdSSHnucGAz",
  "key12": "5CC2VMfS6b7un4mzVXjCScCQRADLFhMVHA1TBXWVavU45tksjKMxX2MutzQcsXqbrkgqH6DMAa2Ge8CnN1YMfrTi",
  "key13": "4f94dRSARDCVJwFPtApxyKyFYVjuZ5Fum7cCTnfVgTsbPMxiL4uBenLWnSHuxJyLuKQJQwSv6rohQgXUtCV9tbLT",
  "key14": "GjZm8psdLLvkuaXWXdgTgFbCZPZc8hRbzMXjBstACAAyjV9J3jGhBsKV3CrpnFfjZ2Q8wPbEize4Z4FHJ4vdj6m",
  "key15": "2qhkyhHsB5KcZ3QoujivDn6pBXJv565GsJ8orYrKLYxHJGRjCoxtVbpyiTKgzrT2QLQ9fmP5dSpJZtDAHaVMj4EL",
  "key16": "4mx32UG5SkXY86fGT1Ahyvfj6vt9DUYM6Wm4nvbMTVmdkFE9eqj5qJbTqnM8CrW4S2y7DfRgEULcGsdEeeFTm23Y",
  "key17": "4fowCs5pTnA74St7bgKxPeAzTZnJVMxdLYebU3TPP1uRL1shVAntxW2ynFiQmdiPLwN16jTypqFDMoAowZKjmFT4",
  "key18": "2fSXB7e5A6bsQQqUyP4QUU8aq9tBdWWSKvZ61YbS8jyRurnNMcsXcQKBxbgiuccGryrg4dRcdD7qXFPL4zpNESQw",
  "key19": "ciEBvaCiFoo6pQMNmLGYSz9k6uTwgiu8cG6HS7xZQjAjfCbMEFjYLvNSC6TCbiQEXwVLjb8RsW4qHoDTA4QQzHq",
  "key20": "3EjpoTDJzhtbhcxuiSNHVXkrTWGs1Qbvudgk6AhNyXKcxP8jZhVbnnHjtNFc7E3qMNgfNiRiyJfoxuXmf57XLFqd",
  "key21": "5VJyB31dsJJdbv8MRRHY68sixUafUTyRK2cCS9ZrA7R6T4ghCNKuxZGch7o5kKHgW2d7jmiVHCcDiNZtkzRg7HzB",
  "key22": "64mfKgdqkhtcJZWPQypVrtwpSYEyUKo6PHTLvJfAVFLFP7jpLy9EjkJQ6PM1RTsqbQY97hii5YUPMRy49JhcRmB1",
  "key23": "aGp3HhfweDdtQQhQpXEX7x8TMe595bSdkiTBJhMLbci8a738L6o2tFNDAyLDaY8fmNkeAfZy2vsiSwDwY4P3Nrd",
  "key24": "1kfgVDes59aotJCXkuLoDjxm77erPmZdDYaSf8rrkHtUEoVizSUxQknn3CSt6MZ4nKY86S6Q9GN97NmQwutfv6A",
  "key25": "2tjs1d9hCcBx5WXATeeMqJpxwxFJMJsU1Gs6ngtHxcgrXyLYHrFjRVrMxDJFgEaa92YknbFisKfQr3mAkwmfH4jQ",
  "key26": "5EyPj8PjhyUyPBUZcYiBpQJkKrJyyymGRn1pvCDgTq6mbrwbBqoe9hTJWnDCTetKjMX5tBUQToxykS1iWLvCHkg2",
  "key27": "2ow9UsoRb5iX3eXbKPmidiPLWCAQodTFV7LTq7PPdoCs7v3PQ8T9juwzT9PvXHM4ttvEcvM4DhzdujDhAGE3UcaC",
  "key28": "3X5RcSF2T2prY34s6TWDNWf1gCEhdqWNJAxKsYcEPapPbLQaukmxp7yptpqijpoJeEULeqsifyLhDRCHzAsLbNWo",
  "key29": "4Yidk7gW8C6XZE6PR4SPLBeuBspMyfZhYbb8PpDLJYcexdPb9oAmGDVftcdEZDTrF5C15KRebe5fsfT24YqfnbqZ",
  "key30": "2ErJSjhcXLfdNdJNqjKpnxjVwrhjwj4GLnawaW9rheQdXhjTeFAbficBzxMMv9i4x26dyLLvxrW4aaDZxpeAmeCf",
  "key31": "5uJYgUbZNa89peimTEsua8B6YgnxJUa3sxad6QUQs9Er2XksSaf38LG7bCYRT2nM9ymXSjuuAmMBjc2jcMPyta9E",
  "key32": "36pyXm8aLR9cyC3GeNcxfoJ5LRpzGj339p6oPq2XNZfmz4L9zfcowQQ2f2gu9GgJvjpZUtwpwp59HM2X8d7TYuQb",
  "key33": "4TFjZeEfRTWxqNJMuTrexpacMzYbACMPr6Z9B61XoHUJ7KrD6ZeCAdgnoxKQh1zGjB2dR56n4Uwgw4WQnEDNyPg7",
  "key34": "4z3cGihnrRyRFE9Ghd1JqWhwYFvMGwFiaddddX2JXjAxchHmtLqfcU9JDNpXKhimgUgFXw1DZPSd4eYeGzSvjSnu",
  "key35": "5dgeBFCX4L5fwWqG5KqCXZM6icDVhoR2z4wmugrbwht4g4wYnp1L1RmA8U6yBembzJ7goKYD4umnDsSmWkxBAEkf",
  "key36": "5usugWio27omk767YeNhhnjopWfitaBQoY9YhQkWoQ2PEododWqb8hXyEPxRm23EjBMJ4XgySaLGYWPD7xwHgxBX",
  "key37": "5W8stF1f8d17ejY9DnCPUmZfxtWUphuGPct131xQScXhpavfJ4SqXLcWanJCwcqNS7jjN9s2AVzBAaTkHyk1ZWHr",
  "key38": "UFqgCTiAdy9Fe8vHjcxbkBaiCGWf6JMVEKFPJFm4af6aLExKeyLD4dQakmAaxfBSph3MCCKCjyeTmQDj1GAesYd",
  "key39": "JPQ6SMyPXeCM2dJZaoX5p4aH3gUWiqpnmj4s9b5edi7W7UEZ3tGzgV859e8qEX7ULNEMv1qDUnqh4J6gcJ6J9PN",
  "key40": "3NQWeDRRkhL4TyHYstNAahaZZaEX6hW3vWDTXsQh2z9w1pjUNpRJ7wPrbpWGYwYb24nr4d3Jqm3q9tGvJYebqLW3",
  "key41": "38ghabc9zrotUstMZNJ4EKx66zLqBefTgCuVmGWNNiLtKDfPq3N4EByhroxjRvNbXUbRZB1EadaQEnuim16Cfkxt"
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
