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
    "3nz9iJV9rqckkDYtXZwVbW185xC5JMNtr4EZTTViti9xN3KFq3FSVVVNY6vt96u4qfWY1EdJASQ1Qf5p7B4xyDkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REGbEtKBDtWukbJxRFuFx73z84p6YxCKKkn8RcUxCRE1VXNXa9wBHBJMapFy4uCt2Q6Q7ZGspZfUoQ2jSARhThJ",
  "key1": "5i3evpkwmurMk9F3k9GfAStL92qB4eyBu6UnnPQYAMwEDaHxoPTMBg7SqveKAF4aDGwHckThT5tbqp4ASY1wVqSs",
  "key2": "pM1mya6pUgeo5GZz3y4tdD5kW1gq2GqrkTmzbZA4Fiz4YDH9PyGRRdwWSLbLFmXEnHougaz7m4n3PBvi8dVy7pr",
  "key3": "4WJkEm2XjrPXDfGsbpECK8NQpmd1LbbEreEDrgv9oQaPEEQ7d4TxL8kpmLjqjPgDLriGrLKocUkH5RDgxCpy8Seq",
  "key4": "3EiSpaM7kyiYtKa2dUJCCxi5ArErZyhrzif2TcNbAPCAsdz3ASTm73KEhtzcaTBP8rfW2cxjgJ6PdQh1JQgLFUBo",
  "key5": "4wzKYtBMpdQAvPaNG8e6SAA6ZY8cyceXMvC3ZenBM6meR4sAc4tJvkMVwf5CG7oZ27x6riD7LSnR8RPojSbAyLLz",
  "key6": "33r3bFFKUtPKwdq482ksMvTtrHCcdakDL7Vi7NhXYhmkFGVDfQcX2ADaSnN7bp1MU8zqtx4JmBxo2VPMj3v2kKTA",
  "key7": "46dbMqXNinW4KQgkPvYi9pPgumcZkKdwTp4F6B4Lh2widNLujTVRWUpgytutknXuxgZvahHpnhBC7Bon52iQFXJi",
  "key8": "5nRi3XYSsN1HDaJ9vXaLRXpnhV4KYPipJnvmF9Jqp5VrWLVZCfcEYzvzz3MshavvtAbePUKSncesEzyMvTqqcCz5",
  "key9": "43pmsMyhvFQAemmAby5F7VpJSGnLj897o452XJgbQL6Lx95czu6YdtixdGNy1FckmQLaKUem2LfDi3eNcAo7BBFr",
  "key10": "XzGLFakaRJW2cA8hfLG2ZxPurw5kZhBCoTUyBg7J5qmSf92W82S2b5bbV8SfbKeKGyVxCz6gJ68hdJow39ZWiot",
  "key11": "4C1TZzyRAwhWnEi4qqCHFQWvvqqo1RbpygQptaurPobruNcLFqvA9R3yJxH1gZ3ayyvES74X7u1rgbe8tzD29jJP",
  "key12": "3BecXkVvFyRW5iB7hYneU3L6pDYigCgLas64qWkJzEB8afJCbbLAyhY3iuQv4ZLH3VjCvJUUDDt1TZW2TqZt4yJL",
  "key13": "2r8zQ76b4iBht328PXgTFxnogyaaTu6Zg5jDvyt9MzP7YRRZxAWmxqFVw7FaRmM5i12KqCtW7E8E89n1kkbMqShb",
  "key14": "5H1Z1nf74SDTa8AnQZjtxJkwjUG1gGSavxLqMPDdNcWNPQXbMxF6rM5n14o7HWbjQSpFMoYtUTsgDRPEdGVWVrfy",
  "key15": "4qyzQuy1of8gwHqZ5tjV8qvXfX5QrgWf2TFQ46bRTHF9RDTnTCp8RCZE81QYuwQGUiZv1tBMdk4a1SgCJ61EuPZK",
  "key16": "3tTmii5qgv4CaqzY2Xj6rCb9DUWZFUMKc5Dc4hraQGkrQgfgeGPVq2zSCdEKcbjbp31t85GXQ5RSvSgm72JWJPc",
  "key17": "5NZPcBQpd89RX1q4Wmti6ciQBVfbkhqNa9PPzYw67ZCP5UPTDtLjmL41HnCLxqk9meveCa4prZ1cvED6AzvqBGRz",
  "key18": "TrnwJ4gZ6t6orvBWi4X32p5N7pF3fdVMTjrF4q8Lqand9gTZrk3qFgBJWQK7znQR2ivQk8T3uzgYVJ4x5qHG8KU",
  "key19": "3gPzTbREcxrMSfyhrNjH7bntKykMtPKsTEGtSgwC6DNJFgkUWiELdX26a1higwYduD3z9t11ZQrUv3BXCw828kRx",
  "key20": "2kxS8wfrGsoWrXFeuHHy4p1Zqay2sfVGZTs3j44QQroq2972GQFZJxpRKK4kfJ6wnRFkcq6MrZN7h51xCLZ1wwHx",
  "key21": "3ik3CUn2C4hkrc6ooTkooWfrGeUCYAfuwfLkDegL5VV8uy4jSEvaGjLcy4sJxF9t8CPL1TLzRR3vTQF5vF3BvwFD",
  "key22": "31WzR2yenF9j7MbYBsK1bx3XJhCATpwmCks6rjayATEA7zd3ejYRhYSq3uejxNFRXUMrNWmr2SwL8mQHbcZXdtPP",
  "key23": "fD4xSxbZBg9SF4xXdJNC2xNJreS21jFXBn29amPM7AsM199ga7WdToV9TA8SgD4JMhafD565CEtbvRphncCRqaE",
  "key24": "4B3bU5RPwRPud7zc2KepoLawgn4wCDyXU6p82tQJspxUuj39KEMFHh2BFV44Jx8897DfFzQF9rjhZ5TAsEZesi4t",
  "key25": "5AN5QzXiCJKuKvQ2yvsaTDFHRmSsrZpp9hmKodiLvecJ6BhPk2s8q1pGZDtXr1EbZd1WyAHLSJq5jDMDaTimVzFf",
  "key26": "2QVS3r5UBEjwfsBDkA5KtBZoF9eMNBxwoSbxLFPAr37RGFzmtus6bcuu177imvx9wrqSiXRLGu7QC7EbonJwCTd7",
  "key27": "3PN76v3J33UcNCLZRK1gxdTgyNpZgmwcQgBV3NtApjxB4Pyfqm7uckay38QGHasewosDg5f6sVrAFFLHHEwNHLGn",
  "key28": "4ArvBR2Yh5oVGNGEDzKytw6B2MPygeEjmHX752tr81ksGXxZPUijFWadsnbYZgB2mkjT5eggzUsiFjyfu9q29b7f",
  "key29": "2a27xxCcGi2ozH7sqBhRbY7FgXfTNsWtfLHRBCrGQg81hyj9Lzs53JfTcsBqvHnqxCnfNdDJn4BZd9d9hozgT8nj",
  "key30": "38K4FisDF2p6aQ22bRxHfyAUotMvpTmYbLigu79SWFkULvE16PfxLZKawVHRWKbG2ppakChUiDejW5pTRoSU98mh",
  "key31": "5vfyQMNmCpNSyJUGJT5ikQAX2Ais2HKynJS7CV8HRvjA5bpsycdWKHTREHNyGdhKLbPgivEPZq5Xa1ckhTkJZCwC",
  "key32": "2244SM3a4jYyAWdgqSpDsFr1QHzbKyxE8Tmp8UtAUajvwfnccNp1XSHhvTTG7q7tYvVZH9K6HEo8usBtJz2dDov8",
  "key33": "DcWZRVbSXmaWv7GKsVJf82n83TNPfmFic1fFMEWog2wkXVfsZvNixjA74uCxfFRQ9xBahA5cQPAgBCNGPrrJvgx",
  "key34": "55agHy1XLSJDhTnvzCbdGtvV7R8sViz5Tqt2wcZ4wUo6eKMr2ZqNgCGSieN7v3hG2fND2QNzCDf36YDDrLJDE1Gj",
  "key35": "5dbiosBvDvWzxMrjzsad5D7ANG4p3gnPzYo9ugLoVC7i5pFjTqwEJfYXL4TwoRoNWYn7XHPt72ingYXUgUZbBoQ8",
  "key36": "797ZesUfqg9RzeU2YsTNat3BVkRG2Fh7vfx6AsPh6BHvPzkKdobehBKJrsjQdjTM9wMf7zK3oXjWF427aw44eTh",
  "key37": "5bmq2xXfheEGok8UDKt3XyYuo3GqcDYWZxUNxWjPoUC345buoDpkULtceW213n63PojpoJMUaPPpnRN9daTVNq7v",
  "key38": "5LaouuCavGEGnshJcffwXGSW3RmAjN7j2HC6EoFx8eHUmosWUHepMzDA7h7wi2jpobCxXF7RwR8gw3XZ3gnDpm2J",
  "key39": "qVzRJvELyQfVXa5c37eg3XnLPQe6gmNt8yDcWS54zu13UBgNZn4yuqWTzNqkrqAVtgSiH3GCjwXNxZ549MzJxea",
  "key40": "3Uz8FRJCReEZdAVRsg4zux3pBfhXx5uEJsLeoyw5K5KMkDJGJWMnUz44uhGE6aha3EDVNbjtRN91k37zruvkUac8",
  "key41": "vTWgxnEA5SsdzN6bdt1z3V67dpzLzgpsuPw2SbBpMYwcnEogpcKTqQHYgenTryrEo8aUq7sQtxQjnEyYKKjopzZ",
  "key42": "4RQorF2GDhbukJY2LHKWWvKc6JUvBVkFjv21xaDimpJq2ymku2Czyeh9BazLN8omHbm3x9CHWj6HQdFK2ETgxJx4",
  "key43": "3wFhuyJt9EHG1aJ37DHX6EJrKKZa2iMfySiLtR8VNL3nMGvPzVrUsC41L9Z2CHHDSgE8eeM5sYcWLAtR9s62UkJ7",
  "key44": "4oBco5ZrViCPSUq4zRdQcLEwHuUSE6bijHk1Hr2dRPiQ3hZSHQgKUZRWKGzyn8VR5aAbPqX2yLK1AfvNK411VYbU",
  "key45": "4oKcnWMQ4VdDueoWq4sQ8uoCUP3cPmr99m4KFzRiPGULfnzo3ty9qYNhqNyoNuQAfRk62U2NvwsgR1NbZzvbf9EK"
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
