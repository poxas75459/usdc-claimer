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
    "37C3iuTPKMeXpnVeuiUtCbj54qbBBUVF1mEHeRFF8FqQcoCNEHW31Qxdt8uwcYEgEQvoTsJnLM5VLsdVV2zeRxpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YwCgWLb5GsqVwMnpqQBAJDnCi8HHda9vTR2gT29G8hoQrCic74cHDvoK6VPDibTzfeWiqnGCNEnQALoNbRzhcYe",
  "key1": "5RY9Y8zd7ojPgogBoRZMYS9h4LdffRNqPfWx6a1mYdXRvMAX4TY4xQ5ApjqefCef56ZtAsNcu95bah27hQ5FpUR2",
  "key2": "5jLDw88cK7uUJkqTrgQ7eUopds6zG1iCQmP7McYF94E92pkhthUsBx2XPaYoNQUiRu3HbFrxjCeEFKwzHjD9CEM4",
  "key3": "5UmZGVSeruHeJQA6S6cL6oE2qiPAwitMhtniRnpqX7Tj78RhYVanjPUGXmS7ywaWm4DdFgZ4sAekQCg57MGKggLP",
  "key4": "5FLZZMLCoTFJdzuAbNmvtKPDGMbzcyHiu3KwsQX5863ehEWGaded9qoZ4s6AeaoS6jbG7o8xPsdAmoEieD3DnhG6",
  "key5": "3aHsYvLWNJNxMF81N5AXN2dDFTH9bSxoXSYgCqc7qZANexZuEYsb1TQHahp1eTGYQtPxurovQN8DNxo78EDXmaa7",
  "key6": "4zxwgQH3pnAMCoHFwDn8kVpsYcUQcdHHQXHiBSPg2CTXKiD44GCtWgtt8Mj6kM19EbiEbttgADoF4PkAcHFAi36D",
  "key7": "5QVdXQtoNaMC2htsSKgWS3rh5621UxSJcXxsPKSuUDgt7YNcWpHiUeZRcMJ7ii5iibH36xD88w5BSpCXF6wj4GPV",
  "key8": "2tFHcC46X8a2MfRTqFrsiQbfLe4HusvrRyzqmtD7Yuewdm6xZix2MYdttuVVoJx4rdf1FEarXCUKsKPWqFTmcFhm",
  "key9": "3oYAd7CGxek9a9VFp8z5iBKhHoX3Q6cmP1g8GpzSwJqVJ2C2PvScKvEMhRhkDEHMZ7umo2qzco5GkLZC2ba1JWAZ",
  "key10": "3nPTHjF1WAqRRFcnhWd5cX9wJFKubR3RgcvK1ALYAzKbswj4WCQzDQwtmqUWL7rYNKpKXHCbzqcAnHr1BnLDseoY",
  "key11": "2pzjobybVHBz6xibYSYz5ZGG51YfXehwa6h7SmParbgZiwEwjV8kPGj4oY5rneErg8jK5ew1os5LWP96VDrk6jvZ",
  "key12": "4XsUxct6SJQZaA6cMQmCPtYrAPDkzeigwVuvqouqn2bnCUBvg961f65UqfpzTR9XbyrTjM9b87CfjVJoPedggUmL",
  "key13": "2w6o9HzmvP7AbK76Y5Q1GKhDwHr283LdVJypKtap214cfideMPFZMk5VR83P1MuZMf5pxvixvnBbR12HE9k9vjsG",
  "key14": "5HFMaxy1hBgeNmMFnjB2rH61j8pAKaPDVmrWGzoYGeza1K2f76ayPoL1ekAgXgRFpMYHB6kh73Pngq7AvxgLP91o",
  "key15": "2JVf2kL7sZhNG1Rx9rqsEz34MFLQGRzj1AScSZQK2vzn6hsin9ywcAzrebKcKCkit6DS9NXPxbaNdaEo1EUVy8F8",
  "key16": "2rXVfSSj6DaUTcNUvc38mybA5gZG5DWmqZiRRnc4wsPfqHXXzNY9Ea9JwfdBSZLRUkP92CS8R229eezqRYi1HbcK",
  "key17": "5DYteUc6mjBewzvSmRfkTn1eu9oeKNSk2sEeidbHWvze6sH9fHgDD589RpmGMWQPFo3UE8cnYnLMZszwnH2rMd4p",
  "key18": "2mazmRjng7QhNnXoTbYXtwccJA1a7Bw1twYqX2YRba8BV6S9RBGH8ChEgwNiJou7FqCPAfetfY2CdAGw3tJ5E2dP",
  "key19": "5cv663E5vHFCCq1LpTtWLnLDfjfEcfgx5ZwmAVUKmeNkyA2yxgisVSRF1u5EVCi6cq2y6XY8P5NBfF6Jck1p4F9t",
  "key20": "5USmnARbZ7crtc5EB154nQXKU96kVYZgLTmGySVHzaC6uiNRaVdtp6eFoG41cqzfXQEF71rxt3WAYBPJaZPhqcvj",
  "key21": "3h1AmFHYDbUXq6g9WqNhLArR9QQ3dRbFWEzfcr4mi1vt1uXvuDGhHKJdkYwjXQVZQf9mJKv1aVqupbTJZk6WZAJb",
  "key22": "3XtDGzKbQwuMHCsbPxSYcfFSNuEoRH41WhrPWH5rGRod6gtUASZWnrFQahQrtQSKfB9dU8AzxMcNBwwBLiBNVgDu",
  "key23": "4J8m5BoDL8G5pcyAEpDDvb2Q69Q8Gh9aFDuUQbJXSf3iG7SrYxMxGuihXUT6HJo5dPNDGzDDFtjziM6h5jpqzPBx",
  "key24": "uQnbk8mYHj4WSEjMyTRBHyrBNNmYBb7tvfqNtGg4Chofe8i1dData4JyXbwWMspGm2HhJYWTbsNAkX98phffqvk",
  "key25": "5F9d4XAtGpTbWocCXGZqo4wzM14XELJGrzKe6DJFHmzUD1WyaAx253zXfZ6crzmjXouNFAUZS7KngPv49gorpECH",
  "key26": "4TgFSH2JcQuADuhsjZUyGmpUcyWzCTDTjaXeLYTe9cV5yMVv8dRKT6Uigj2xiRAFBRKSUeQspJBSeq84ztuSCsUv",
  "key27": "4hpHEj4C3svF5JtYijoY2Byaphmn3tLSFi7myWw4nEYat2kHeKvFrZeEp3BvUb3p3yNcEYBVC4y6dVqGqerAhFfi",
  "key28": "2bgA9FRdQaRPhMTaPkCPmRk2NhuF9BUd8mSkD1busVzTWTmVXkQ29RB7GqzJ8Nuhep7Mfe98orq7FAt4GkrQZw6n",
  "key29": "4WEN9VnqXYNiXHzGoAmnrkn5BdGDX7WZYb6QmNsnZVuNv5C3CXWdpcSt6wiNgzV2rwLbNbmGdsJy2D7K8RctvCmg",
  "key30": "2Bh4wo5rw6QQqvvVxAr4YEfy6fbCr6C7fFYE3XrQaKjhQDdw9tPveWx98VGAh5ZXBHagbmRfEBQAyQ5BbxJFfZd1",
  "key31": "2iJZRpNpPpiUE8zDLPY6pYDAMEdRVDty94nJbtdMsdBhkVnrwtdBErkx9Vj7MpzgkK4qzF5wFkZRPFVDBioP1bWr",
  "key32": "5KTXPLXzc93Jchxu7LXXhj4RxeyriKmuiTsGCyiX3GFAenBvkBdmSoqXjCaNoPx7GT2WjmmaYxYHBwB11F6W2fnt",
  "key33": "2aqGLQPNPoUf6quQU54EzLkDiyJ2jjri2V4LfSPsSeZ5UzZ598pWbgp8vsGjUDH2EKiGLRajbeSeE5XgNeSA4Wev",
  "key34": "48DmhQnD5XsjfqJiSNdPs2twWZYcGUNfqXJ6ZoJbq7GzrUpryK26Hr8Vgo1ViZtEij7nxKQb5rLrH3hqAPq8gpNs",
  "key35": "5jESpsxxymShz4miiZJxfmDwBKgUsPGRWAoJVt4itkXoG2yxWjFGbaD42pXxzDnAFiHm6opnEYa5uLiUi9imeNeJ",
  "key36": "2YzDGUdYCo5vZ91vCY3diSiwPcSieKYa8tq14LA5qQMFY9qMik3BrTZEwJCc8zT7Q6xNHBEJWYb2ms3KUi6VnVcy",
  "key37": "3Ygan2ZdpRLi3WPXgCKSu8hYUm4eY2DfcZF7VbFzKaFJsq46VzUqKDGYpnU4LyePp17JiWpDpLK7APQnnZjFhryL",
  "key38": "5yo5T6dJniokQ52n2aB9QwTZFPsFWHnqhhLXc1rWcbDQzbkJYKFJeyCTx2C38G2tLeLqN1SWXxM5spTgy42JBrC8",
  "key39": "5bDrg8BTZc9maFX3x9sMY8cqHjhsnEsUHECHrEqYErEH68C6rbhZdcvNP6vncrvLouykRASq3anbauuutGUQmiDr",
  "key40": "2REiCBupk3r4mNhVcF6av6tAgwPvftfAH38UMAPaK9f5TtVog1Miaohuy7zeNoSUPikhmL1fhcJTonGE49RyTKNU",
  "key41": "4P6NRsrshG2m142BAHaVmPE5CK3PnWbs3M5hrrR3bNR8GUpnaDUmwvBoAJUwLh9SjSNkGj75LeBiadNRXrwYu6Rf",
  "key42": "3TsEiNP8N266KRm8G756pTXe1ZrbTL4twFKoamskJ1VCFaxwuz5PE8t8FsgeafvQG6iRbWEpsccLz46X97j6ZNpE",
  "key43": "2KofZmj8iZcbMRXgNZJ4tyM4xTqPNbR7nHCzeTJa5tRfdcuGx6VEJzTBw5kbaXehxiKFWDgpfpEWqHQ9MM5K2yvB",
  "key44": "3vqRJ9jKMAhmAwuriSVYncCBfxtG6G333WAht8NMAVBLHwZLMchjQrCPvbiBMGqUVDVVJDSB5Kvd3LHnkzteQ7VQ",
  "key45": "3dUdNi5sGFstZhmAt8uhdmTa1PbzLc9XAk9VMCFJ4vnuzSM5tXXu4FQXHM8HVPxzkEPPZTZhTBvP3GcYW7VFV4zY",
  "key46": "5URxP8Xo69hfnPyhAjBhvKvWWucKooV5MnaVxXwXJfc3Gufmxxdzgm6ZP8wvkQTSkWGcnDpzFd6Htxqt7guPkjTJ"
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
