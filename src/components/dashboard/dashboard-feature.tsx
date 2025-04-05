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
    "3uAjTMEn37adAQKo6c3akEnyPwsUfCwvKxqbcwbyc3EsQWRbHNaifyBYXdG1be2P7Pw2oA5mtqTv2i3ASNtqz7me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KLyDUtDVXG2NXk4D26QjmvNxuMXe9iAgkB5bJjnzopReWfEVDd3hjK6HTuGJ64jJBWtJhiJuqE2mFFjUEmw1Fx1",
  "key1": "rKPa8vRZF9SeAJPM2d9rGdEibToArRejBrzxGJYSirB4sHcrQcBvCcPbx8FDH3rsrBy3CC7MXJf6K5VJvCP91FW",
  "key2": "28KMGxSzcM2b72ek73a5UM6vAnMH8GK6MkmhV7XZJpdoG363NqsbvNTx6TM7XqCpvo5kcyqrhZK2t5vCQRbzUCMj",
  "key3": "5kKL1waovPA8EH8L7wG8QmorQpnv4uqFjdq7mQ9k96LoPBbFiExqTMaXA2pC7SsrHVRFtdAUJ3iM93Y5Ak9RUx9n",
  "key4": "67KNjB7WQrHV8eesxij7pB3y7SGZDh799dufZmMMjHa7swCidhotRsaxkHs5XoQwjiymvkgyYja5anprTFRFPdrf",
  "key5": "tZZeEAej3oqX8Z5aFYrowQ5WgbKP93Xs2X7tCmo7FCabKZcYx3Ff31qJLfx3zcPHsHtXR1AXpzR9WKvcLACcHMv",
  "key6": "2ibLs3TDHzsTA8csdEYyKfmY2TA1QpUsSHr36dA5sJRSPNcvTfaP32TgRvbNW69miLtcA2dk3rDEiXA54F9js4jA",
  "key7": "pjeZKSEbKCHaEWPzTQS87ufSMiewN9PuY8FB7trG1xrKhW1AmaBYtpuRK55QEDNyZtxCZfejEpGVGgRaeqjF6i4",
  "key8": "2Qq1GL4zkvzob7sW7QBP6b4cXjenBKynKUPHJmKZys56bwMXHQPPFTbUszhVLouRc6rUitxoyzt78QWnWuiNVzLq",
  "key9": "4RzNLiqNELqs7vGigdKABk4xJUpwrYwApneZVzTHF8rfxeSvvDWCobrBKUS32y9uUMbGNWHSWR41DfgFFAAtgtNk",
  "key10": "4YEz6aXWZqhf6pCZ7FmFRae81yLuRzifc37p4PFqC2NdrU59M37rNzHctg5knf9xCMBWKjz7VCxQxXYAf6zSiZWE",
  "key11": "4Q8m8qxQrGNhG4hhW5d5i4mufbjJBJVckC6wL83fWgmefof7ffVm2yva1qEeszG4KpCTqcY61nmLBNyqJvg7GPVo",
  "key12": "4jgnNvbYVzj5caRoppDHHPxZCPenARAynawuXymYT8rxqeYby58HaxWC8qZVbaMVCQBTgdFexgHpwZznwKWY6Fe9",
  "key13": "2ogY26EvPK7wDNWVK3i4VPvS9vgVq6M91xN5wCSJb2MZvrozMcaTeUaTAzXsVecysLhruoAbXWR6rmj5zgWNQMfV",
  "key14": "4ugpP5EN4fH3hnDQmedS7FecUM7SupMXcm55YQ2aq54dXmiz4CWFU78JZKJ1zFBhNdTZm5rJVePYiYvNaCs5zsJo",
  "key15": "2YfxxLoe84mdCkCL3r3bDpCqXzRctq4bBC8BZEB3uDYVZYYs5CngwV4faVx4b1ueK8eHyFyT1Jy7R4G9wRGpnUDW",
  "key16": "49GS7AgU7xkaRw6cRHB76XcaLHfHKzfyS7UWTyAzuoAr6ioiRWpMPg9KHjryJ2N4qAiPzLQP1289Bp9KEH9VV5t",
  "key17": "SkU3XddBGsXABSHw5z8QMrt4N3E2vtdom3mDJQoy9jNMS7LkR3shj3sWwRdyLLwsWicWJuyzDpvPe1GcYSytedd",
  "key18": "E2zJWCPTKX8HoK6Je7E8SNHYRhq7a3EVMZf1fLn6cZFjBF4MayCqwkpniqpJ1eP4GEGe97MjjhvYpcMZvLVGkr1",
  "key19": "4ru2SXGhP87vr4DyfnYrhzKTwEPHByA55GNhRKxkBUDnjVC1Z9UgF2LLrWBFRquG9ahZALNGWYdeKEPf9r1xVpeL",
  "key20": "3PuDruLorRfpTEE13t4XA7KkG1zRGj7m7Qrqu958oHokB8H9BHrpRdkQ3oAyLqKjY1ZnY4wC7BbfwJSq2crYv9pW",
  "key21": "263efmKLFkv3kqGiLYApsCvvQyrsG777CZ9KnSzHdePjuezFgwTzXdG7UZZHWXkyjcUyNjQMLviGPUAFjHCzmAd6",
  "key22": "dKTmThGu7ZkTg93u2aYX4ALcp7xfeBQrstpNaiExe1PXpMtQ2hETLoHDXqZYtiuxNwLr36U2gcGCaZAfy1CSAe6",
  "key23": "3aDfjPBMznfgmVMp7mxUJ2xhHs9oaFpbYb5tjSYSkF7ziDKdZs8bYuKC1aQfr1zrDh4fRAUxb6tvs3MhLpKpAhZt",
  "key24": "4i6rXqPnpregCBgGB8QZseeQKn7SVM7KBpCA6p4oHnprrZRTgA446Q6qCHKCXqCrgsdGt7VTmC959eYK2BvF8TFT",
  "key25": "MNTasKKhfCvd6c1KActMNvwjM9nWcCDcZHaKDjL8vtg2e8LX2hq8UFofNnH8nZ1XXKPpyKSZe6xqUs5XMMVsjzF",
  "key26": "4mokrAtdK5yT5R3PtL9auhfyhtT4KWgWn83HKuw5AghsLobukmhUKvoxULLfywNYP3dRhSxUhNZzQAw8VYyvGTsA",
  "key27": "59WJ48QPj1HwAtmtepUWibp9URksDYbAtPGRpgEspX577jkEW5LBRfK9q5iPQf1Pn3gH67dwu6MGhUSwNCU2s6Hq",
  "key28": "5Jfnhnb4vP9SMTmuCB3CcL1wBTCiKNug97TphmHFXsXuTY3CnDMCxABijZYGBEnirxLkWiyrod1gwHYkNYBc6wNC",
  "key29": "4LjX5mTyUbWws1CjzzoBAJUkDpzYpGYNXUj3Ww8211Uo5zRWeeY4jWAFF3547PyNgR9J2i7QYMJKd2ouwPFKXGP6",
  "key30": "3uLqUZdTByjsQkGnAFnBwLqqaLaw7cGfV9p1QmUbumvosbDp69rv84VkEogjA72UjY1Ao4JDiisd5sZtDYwBb2sZ",
  "key31": "3xZR8bN8ipGkzw4JjRYVzhZwWXBBF7daYLBQHzyTxtRxgYS3G1xkt3MCDzLy5nCmrzuBFBPR9N8bmpVZv2MNE62q",
  "key32": "5TQKCsvxrEbDLNPEjWRb6efpN8zR4Kao7eyaCLSYeJLECV8jazPVVvq3MzaDGFRBajFZ7W1Bx3CZdGH8HNe2e2gs",
  "key33": "5Beqg1TjSZKBuQHj3RrjtiU7uSLqEudgn2Fh8oMtKkvKW8P9G8S9oa8nKHcMjx2YjQhdsSFGccbynYcjnBoPSRq5",
  "key34": "2D8YmMG5HQqUCxcYFNbXorAweJ48AkrqQMu9n3kgZfPARcq6ZTadV4ckeGchuMepJdxsMGqfyNMNRZ99B45p3zfp",
  "key35": "23FGHCHexDqYpULGZeVviB5bNwSV2BHF1U5jDAbuJLzbXvFEHYk74RbbCQUjiWd5LnKxFTfngCsK3y5GKNgoh38u",
  "key36": "5dTuUKLsvGguaxMQpCdKwypCGkT6Pmp1YhJgZH7frUUjfiC2eXuKKruuUm98H5p7wcusnS3Rv7ZEGTJQ5uqi5jgC",
  "key37": "2fLWmiqrAe8dKGCQzaXuAkrDbGAT6KCC3YXghujezUjLstpx4nKndRYWonLu2Gx1Hs5yqTjVLR4FauHjGq6mvftz",
  "key38": "51D5TtUK64vhaR5VrJnr3hqu1ff8n2wgAChoS1aZdmQjhEKxP8Y95pbozagnHFgPMV6nKRhyqReyPk8dr24TL5fd",
  "key39": "64og1C2AVfdw1cnmAifDheeYomR3UXVGY4ysWYQS5GZLfDzi23JGLzFkyf5Beb6SMVXemuiPdLxiTfoiA4wVz3wZ",
  "key40": "3dGyd48H3ur8YdU8LMSiYAfCrFUdBvth8UkGMPJ1PBstBLdn4qjZNBDjGtPfy3wAwGTekyurRp1rvR2xX2JHDx4n",
  "key41": "YGQor3P9XR1jgtqhZwCcgL1QB4FPhAD1udzvBfXKzLw4Dxxi6YoD5gR6C7EUgwhjX4e5qdUTdUThrqz6MjjoPZC",
  "key42": "4nGVxjCy38t1cWQSrQRdYe27UihXXrtFGoHFjWEo9kffib6twDuyPVcs1UyzSFqv53NDkAuzVNE6rbYepCZX8c3Y",
  "key43": "2ogdnZXa2UHCPLmocrydR3cVumCAAnMzVRfxiDfQhgveQsnSjfQPBUor2MYq8Eupyny4DGYeTTcMZBghxBFP7yzh",
  "key44": "4ANbqTL3cqKC1vRc8ntT5FjJXxjZ3ZbGHSBM5eAznNbL6b4DLQWUr37oYgxkvJpMRsdXaGVGCX93wgvhWCwPQvuZ",
  "key45": "5cYdSomtFeuxSfaHH6ZPtCMbwKopu4qd7wSVFdSeRQvzo4MhMn9NudW4dA3vF4fNJw1nV2Uxqg181LEWjS9S4vzn"
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
