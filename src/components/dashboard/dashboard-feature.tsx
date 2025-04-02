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
    "2SrCETR9oxgdfGnJENbb1H2hKAqD3ZHXC6XUa8a6awYUX4rUpzAjxtrGkrFRR5ob8t35rNM4FeYHXxTiR7h28Rpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TnrbzbqwM9Nj7qsYNPHbJqjG1k2ugHaCebLkpvW579gh6U3DevC9qVFfHJRTt7uDjgmXyqJqMFdJbJLvLyvaQ38",
  "key1": "YDqnVTKoe7tjZXQxn5BuErXTzcnvCtPojyU2XFm2QGrU2TbjaPeVtTimYv1qbEozdvucSkv5HQxhnK35BE87aVy",
  "key2": "21bjSpqPo3zzenhiWBmTTzLj2cZF7X1yv3SWHbox5WntLqhLNkg62Bwh5QJucYcbzr2TASjyydaqx9htwtWUL9g6",
  "key3": "D6unZemhu9jnGvAwXhiQVsAkTdfiDCauzVpnwLwWdbhmDkpff45XctCUHtDyRYv1QZ7EjELth423RtDAAhbZ4mS",
  "key4": "kDC5uVYdz1k3hmSQbXbBcaXAr7a5WhjCY1oRdVA2bUtFiy6WFcmGVmZ7yqkcgu73ro7Zi3CPJSBgtgg42SnSHHo",
  "key5": "4w9YxUtGkXPypsvrCvcJjsJ2t2wtTT3bVzBDGA6SkqvBeZqsKrEwBPFzsZoLf9LXSz2L8kFLePtQUJy2NWk4D53F",
  "key6": "2qJrBCsmygqFzexraAb6Q4JxKBt9wFrHKKo1G47aZdc6ard91NEWQrGtqKoSPeH819qnsmBXGoh1JawdDoaHJQG2",
  "key7": "3dVT2QPTt6rpPbR33FreiHcHmtqLwi3wdfmZtFeERo66Q3NUecxD19AvkohxV3xC5gkdXtQFxtYNHUKFZTTNuqj6",
  "key8": "5F7RM2NkJDsijkW7etWKaxzXEQ32d56fv4Bv8YBjs59MSePSARfx6U9JNkYQdEEXonPVb4XtFYq1fMUzuonHXHcu",
  "key9": "2bvozLuFwJkmVbHxu3k4Y8mrkZgKHaQfQz6sniqFjcTEF1Wf8sEytedNw2fYhUUJFVj8unPW6cpL4DwH2DcbGUN",
  "key10": "4kjKMc4jcd7aPBB4ixrBHkVsVKGaPsB6AwFjY1sjjnUFS9uR4mJ1y67iwkeeLvPfSN8pZHVXnBDnzqdo5Nv2qKhn",
  "key11": "37dGEf8hdKtHNQxD6uZwH38y3k7CXXFiMMy9eiRzqGFEaDJ1VNveqe79m35pnJRaZ6XtdyN2XS85JvY9RNpUUYr4",
  "key12": "3GZ5YGgBbMuCvHZMoa1wVmxNrsXy8jrgYuHNnspeXaoDLfNvuNRRNMcJKsa1JTqDvRzMgSUsYwfLKjXfF4eqFR8K",
  "key13": "2CgRaemZeNA6wvAwx7wp7wunJ8VeyDWY2KrxVQ6hzTNbVAiREdqTZAPJksxpZTMHjWTxGZr6nBDKEE8w16MmzxDm",
  "key14": "3xc2wTZiTDzww9UCiFcYw5Fm1KDNBJ8EuAp7j1suhQPGG4UQnAuwb61aVCnVTqPhbzwWSdasHYNYMuYLeVqs4mcQ",
  "key15": "3tgah4dSdoDC1AToCG4AuLjo5VCvd8t7TnbjQgyYFdfKEgWsr9HPztgjA8hKggGE5Lr95T35zp3WqfJqzZ5aixTp",
  "key16": "2a41Rv2Q6xXGAg1eousVwZKBRaht9EHREieXmcgMSvgm1vkZ8tUVCXuDFBo9cDSXwVTdhbUtKYpBGJyKE8kkNgmR",
  "key17": "53Ad9ovgoa55eJsRxwdWiLBWixEWnJk5XYsnirmSBFC91L6TS54dupXQ5Q5xqauTwpba5frmPqFZK6eAUSwh1xKA",
  "key18": "3guJc5QrjZAGu7GWTryYYck4C5gt4omaXqZUh6ByU7cXSTcAwddARWSwDCq4AWXVGrDzBMXLVUiQZ1KiZgSb8kgZ",
  "key19": "gHjkxad8mnQJN9in99YMkp6eA7jCAsBpGTbQSa7NshiGrPnkUjh2paSSEEEqU3kstC7CDWGiaqBaqCGrEQewuSR",
  "key20": "51KKe9rQQdZ5jcFMCcNEzkDcHWdJUnqE4UpYK9A2Y6uXKvrCkp3QDjVcbjQP6pVsdkx59Lg5aMckp5Pm85FNBcdE",
  "key21": "34RNxTg7mGB4sfFMMGWGDQqkzeVjN4G1bcfTsiQjTRkAP9RnVnHVtf4WdyuagSgtFBBhiv7hdkoMy5tqYQbXKo3m",
  "key22": "41CE6tTNu6UoVgd44X13kdUPNcvFByhwWYvsa7zY6xshkNQLcowasuw2oyDezvjzBNtbpRgTKwAYQA477g44hzhq",
  "key23": "3punJJbr5PK5yyzPg7aN19S1TEGCnS7bXGcAZCLcVPVdszY6fuCfUdjyp1mgRbQXeVVEAR1yy9cgCzveUBcu5ydj",
  "key24": "5HGB8zJHs9fAKfykeYo61Mm2kW57MkocRBKMb4JgMMoD9SyEBtnMdNyjA3qjTDi5reZxByh6kF2MGGHMkjCEbDoh",
  "key25": "kJuHcLPxqowxfg7gq84sTzrqoEh7hdFzMkvBbUApeKG4yLNvmet3zyLs2uecGjSaaP849Aou6DP8LyWXn7p8dTi",
  "key26": "4yywCeZkg9V3QndnSsVJq3CtRjwZapYGysQeGSMz3XVBN1qTsidrRBXCvKxopCJe6k2KTaeQ6jiVVxoEK4v4MDCu",
  "key27": "4xeG9cYgxRY1dXKRU2Sh5t7TFKEUBUTcPEBEuwTpRdVkUQJMzBVTf3kzafxZCM5GLvfTiTqNgUYEwDCCrhUG1yAy",
  "key28": "2gLpLtEmTxQPGyQESsmAEPKB2SNaphDcmNFmSkw4N2bkRKNYoUPDtnGxrn22NwYdG5sFeic6eLbk9CoeBRJP4W1h",
  "key29": "EXerCTc9bQMGsAJHM3GqqrEGoDQPjpCohUPaoWg2dDFDvXXQu3Q657xoV61PwVQRSMpUee9DjuskuGP2ueiVpvb",
  "key30": "2fwAJcSiLasapaEgEj9o7D2AHMyMNsXRu4mAUCrHULcDc7wz4LMCPEZnXMf2QgydvGNEBmjhQ6CbiTjBBcpJerCJ",
  "key31": "3sS6VkAjGAK9aeaPCwfVSzL2W3EhLrduftUxjCEj7Q4oLuBdRDuJcMpUcrs3YhNgJf2PYHKmMrWZCB68YePj8njN",
  "key32": "3vKrjD2ftJvZy7pPtsvByYhMpmB8kMBQ4RmZ4hDehBMWYybckDDT6cdMufFPjcpXDKjwvyM37ftCUDy7cZaXZPCE",
  "key33": "UgH4NFNmubGZHkVBHJAwBSUU8bChsKZYLmpYDtwEjif1JckGrH9iDuZS9LqZpb1mPtUZ2bszpBrLbZFu5guG4m2"
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
