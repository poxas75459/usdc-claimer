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
    "3RpxKNfkz99N52h44GeUBAjR9NPcinZFe3B4QpH5qDcRpSLkNSaK3cfS4TGWdcXJriC4eW6kJRzP6g1m6XKSnNG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jH9nijShtf3GuHKk4tZorKkf6ZTMU79WbjyiXitnetj7BjtKUDSNzjy8NutMNxEv2QFAjMgW9wvupRNRcLjUyYu",
  "key1": "4RenT8aALDQPd7H827bcnizRa6D1DxTcNS4gAN8DdhfUTgH2pf66nVYe55pS4o1juEFteeBZDGs9FYwvdraTWbk7",
  "key2": "4yrdHFY9tK4nUS9eYNmY47FELjwCJaRZihmWfa3Kaejt62XJxTNaVgpJiyWY2tXYS5Qj7PPgXCTcoi3KSjxYXRxn",
  "key3": "3AviNhExr9GK7WNdPdfwad39ZrbSLBTUNf2Rr9Qw5Mzda2pi7ZhuTT6TfrJhJvKmr4ubrowEEovFZo6VvE86D7zz",
  "key4": "5mnR5RHxeYzPUJR3noMemBRnLtLzEkSPVpwy3G6wGTo8HhTuAMURVi1oQcq1xpFRK99tMdHoJg1RmFVMWJAaeU1V",
  "key5": "3rvAJF9DJFSH6jtwrjYNewUXbj8y4XzCwK2sDnb5SJQ4hSk4QKoZDDdiXB2khBikbza4xUHjyTuRJA5NZJ4u87Km",
  "key6": "579yMxrzGJYurh5PzcjnNLGZGKXfktyY3NgCjhJRmcL2HFejiqdNyuDtHvNLZoREBfT3F3LF6BvCVZwW7YjCw7Qn",
  "key7": "wQypNNDYfPLnR2oAgnpMRXCWNbztfARm37CazNYZAZBgy42DBoenACVigKRWWASeFZCX8T8guLXexZ6CqB56TeL",
  "key8": "36j2Xfj39hebmBZZMRL3ECj7pzpUebsNUUWqn5hhRZEDnTEudNEAmUZAzvng3Jq1tmvPPeU9RZqe4NvhXmH2fZ7f",
  "key9": "29JhRNYqZnibJFk3r19LQXxfsUChnHX4mbJvYgE13t6qEAiEHkZw2CMWsm8LK3J7z1u82zWMj8d5Xe8P8gSAZh1A",
  "key10": "3hQEUHQjCDUeGDrYYuEAxN7R2LyAbu3BA5vDCi1p7fNgqhvHnpCtjURqtjaHwEbQy51ydZH62PqQaNr1V1uVfcqH",
  "key11": "kpjgGZrnzVBUMjn85kysgtdd1NY43YPJhopNgM6M71MHrQS2TsuTG9Zc1xiH3qkNP217GGQr9GbDp69e2tr98ep",
  "key12": "29krG95dUJuzEGZX9Kyh4HeX5gbQR5zhhR5NsFP5PLb5vgBq4F5joX7QenvfUtXxqGDZu97nxSuRCBKHZVAu8kCt",
  "key13": "3CDNkf7a4QMdqwTfBeCwrU1fQWt4xq9CxVbWPYVeAgcHoMfiRZGNxeToksDBGrGRFARJYBTHcciV4vowuAoE88WC",
  "key14": "uBbwT5FwYRnyeCpnq8bZG4ioVzuSK8aQnenYWosHsFwZKgZs6zMQg3cYhEhNzzH3jY4eq7iJNhGSboDpyv7F8ZU",
  "key15": "9DozQ3cHkKsrTHJsztjPUcrcx2VGCVeEwUh5eQf25rANbWVsZzD8wu3Etn2xGC1dioamShWp4LpJzg7muLnwGFt",
  "key16": "57xxo1PcUqsdaRc4TAG9oMvbTCMisat1TLzdPBgp5zBiXypYL7k2PYDUiCdPjvNCZmhyn2UE9FsfctfFVWxqHke4",
  "key17": "22AeWXUZfMVuy1BYJ73ZBdHACK6vReC5sdbthXdWn6JfyyjFoofq9MtrJyB1cxojKU2NfEUXaAbYmy4NdbFrgmuo",
  "key18": "5bPqWWMpYUymuyvFdg6MxbModwNAzb38dDq3ku8qgZPXs9vFQiK8gRdArNNfobHiGg45fK4FSmZHTaG7pJhvS442",
  "key19": "4naoUrUcCM5uEbmBuLnLDWGqaV6anBN4vko4VYsBF1iWN3M8XK3s8xvFUfNHTbVAeD6MhSKQVb3LRmMEh7FmeWdu",
  "key20": "5USHCtHooz3cSUmp35uqjMPBYK1tGER4NpaXvyG4jY1VoU752uNt5c7Z9Sw7q9RCHBRJ7ohuPVANeid4CEwmSjrZ",
  "key21": "3fhjLAKPZh2YN7EeGcQv1H3J2ojvnA3tq2vuJBUsCaBxpRb97SYszM2yLGQz1NidW3yJqmzqVHxuvjhEV83jNY6u",
  "key22": "32rpbabBVDR5EDRBajcqVGjSWYN4PPHWaLeXjtZoFPH7kbkakqJ4V1DjTxfFTqk1rXAVV3zMadXhgx1K9cFZUbvW",
  "key23": "61UyUV3GrNgWvyQUFXHs7LU7P8PH5dt3AAMVYNmybriZBr3EJhPbpF8fiQUhEMmjoyyLom7mNumwTMM6oP25EU4H",
  "key24": "5f8VJjNscEkyxoHTSRBnqN9MxKuDvagQ3vwadh829oN13qQG29fy88AtofSpDPayYCMedGje17hAhASGgoD1vJpw",
  "key25": "2Fqpfb3VKMV6LGA5ja72c1ZH9HAbPJwTCxmssEAhTdMWEryKA85qGJdvG8Ejxs6Frfz1bAKKYbeX3C4WjwVZ1cCz",
  "key26": "2vme7QgfmffKhDiqLotFJpeX635f5m6JCrFJEhSSTGQ3AoEWT6V1BLSB8nWJkXTULmjiJyaQHPPXoxKgLsQ2wSqd",
  "key27": "5Vbtr1XXF4bydSjnXB1TGgT9CR4PeH4c9R8W8UxMi44hDvQfnFbZdRiUAgtt55s11udrEzcJcAKSG2n9Fxg4Jnvw",
  "key28": "CAqmSMP5FZHP5ZdRowE8EYsBCDY3oGTfHTVg5UC1mPQPn7SnUQPTCN3rRzY9KajQYdcHaVmox8qHFHxH9vy5u6j",
  "key29": "3AboSqpmnjFkdVUTsZV7aMjxwyopXtHNdj8B3DPjMWpeesYnpWj9pafxgX19BH2Vj1ESCrG1bXoCD4mHByc3W3Wq",
  "key30": "3hLk3euzZXaFLQ83TRfCYAm85yarJY2fQdNfi47UFK7o4cJ9bvrsmXZ6YEtzyKxWiKrdZLybzkwYJ9AD1TGyMyeF",
  "key31": "5sgB5qUnxvRzDX1H85UTqDc9ay54q3H9fA7g17D6P5aKUW5ng1RdLk6QwFZqM5qYreJmjccZLw82HpiCNqdxRLzW",
  "key32": "3aUEZpgeri2w6TmarHxARKCqtPgdmmuq2inoByAjYzukPUr56xJW3Ep3JkgvkXWh37Uzfv2DpfS754x475xdGUH8",
  "key33": "5NBQmNWkbNBHtAuZD3aFAhyFni1NUaRqTped5TdLaexzKjzmafoApxDnM1fVUdmGW7XKuLqocmtQaLhaRqWk9bUA",
  "key34": "5zpigDrmpj23HRjiKGRV3U6GouKDaPFMGQFv4oh88ioRYyeCfZEZ3hYuCWgHC2GLcySzwvqsX1QySmU5SiH1yyo1",
  "key35": "2QVbS3Kb8B27VnbXtGpgsXBL8tFNxgUP92tiwcbh3JiubqJi9CLd3PmFxhN1eUE2tkCyAn8UbCs6QjeBvLvBm6Jr",
  "key36": "5kZywwJKTA3a3n9FcXhQ2fGbrxPJUMpFkhCHJj3AfxMcNE6hCm3YnakVwxxucMP8zYvscV2bQq3LKXiMjVC9F1xX",
  "key37": "3ZAoeT5soeGK5HRBumayuJUNUYfH69WZXnaWKnFf8SXhFNeJogC5y69DZLvJ8EEVhob1W8YN87Cd81AhRe88655",
  "key38": "3mxJySPYxH3JfXs18VSqzrJtCJToKLvHgjeBvWcRjQxezi7Gp91qwbMqaxwTNncNVAvQQAA3xksJEv5u9excpnjH"
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
