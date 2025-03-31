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
    "3LCgxUJEBL1xJLo6rtiYoYnMgtVM4ZgU1YVwWK5V46wa5mu57Xf3Nk1zTVDc5DcTutj2sz5qKHHXCEJbZddKQi5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJgixCGrRfvuEmiewqpauK9qJYrLZ5q5DheCBmZaicTZ36iVTpDn6Do565sDjxCnqTvHiuR5mnWMSBnc7LjTxzT",
  "key1": "4xpH5A1Nrcym2BwGCCe3ubFYe4bbzUKaw91jZ6tGKNQ4bQf3Q2i2s48MDmBm5ZUuSV3XXDmKpWKnHw8mTHKKFJH8",
  "key2": "64xB4pSYo9tZxgQXJmrfgGWumhj9TtCZs3S7eFrimpGZ7SJcP2wvZd9TPTNU3DpJK8CnXjRXMbZ7tpMowspCR7rc",
  "key3": "3mW9aSyoq4sVKJ8uD5D3ggK4UvhZpk27F64LcDmZvQExuGQwJG7G4bYn8us5kb21mHkEjnUuhKVv53HJ4h13KRo6",
  "key4": "3ukt9eBbwyQNeGJLqfYFKqgEcEiB9CMLsF8DatiXtqk8HxMD91KXvVoGexqEEiowbyCiSfG86stvqbHFB7WS1Wp9",
  "key5": "Br96E6CAStpAL9W8jxbd5pVAPHbB5h8XBdidUiaJ72K9aumQMu19D4DAzKiucxYMyCFJzZcAixTjguY2L18rcXY",
  "key6": "5Y3iSqJZ26d7J7DeLG4q4dQrkRtxhNqHQkJNy4PpqSHJ7B8UTw5eKbuHm2PyLj1qPxygsWD6QzNtW36a9zvjDiFU",
  "key7": "2LzKEEVCbtQjzYFnaSt511VteuP1ELXRVW2pcDoVQBeLL1iQGSDJ9cdFkWQVXCgiESQY2ydZSg1j4iosQe9pFu6a",
  "key8": "FxoWbmu6v8Drxfzzjsn68bswCU7FQCPN6MEUW2HkHygK5pcs5wYWww4xK2H7Q9nKRtGmZxch8sUva1UYBfBuTe9",
  "key9": "uMMybRYa9tZ5vntMQgTgMKUKFYoFK2W4uBfF9CdBW9mSE8W22VYPDroXnCCCTx6ZFpcWfGMGiHMyoXMSuxEAQ2g",
  "key10": "v6wnCuejum6Tkd21iNdW7S2GjyQViHMmhQe6ANWvHEzbHvAY8CTjrrgZWThsxh35kD6XrYsRJQGW8dumQBM1Jxw",
  "key11": "2hC7PDwiHhhja1CeNTA1myg7W3RYumwE1asRB3F9xvTcKg1ixMTzU6rDHbZxux765MDXQQLFCtEaRDvffLnuuhvB",
  "key12": "2Sb1J9cH2Eof64bVdCefbQtdmhEZth7Zhkuvg6SNZMWeFeSm19Edz4ShihFKXtc32EGWvvTBEZGHWVwWDzzoS84X",
  "key13": "3ddLxr7k4ue1xfpuHvEghksRw8hr74jLPLsgcsnojRyNGwE8YZHS251cJno1etDnSD44KUqcGyF8H9ocfEcgUcB8",
  "key14": "3LiBSHkwSC7GfdsbRjdKRe1JNBnGCs1v5pPhMX1bobC3H2jgSsP3A4mZCG8Tpg4jBUqPVomS4RabdYiX2EMb7UsV",
  "key15": "4imw6YF435Sjuj8jLz7zJNEAbj6sX3ykLJiZuwBJ3jhr4qxaveC7kwNPnL6SRbKyJnLc7qooJoctpeFTBG147KtT",
  "key16": "5C6D4F6sYrCjU6tUq1asRpt8TRrJ5CJJT5dL9WGDbrq3utdx35JuYpNLauajZamptsaxRrAqAUbgznTSekrjJ9bU",
  "key17": "2Cuoc2VXoiok31NNRfEN1yqKozZsADhsnQT7yz1RnJhaaSv5iHdqTLVeYBbTA3X4sWC1MehQdPbmdnxQB8WnXQrV",
  "key18": "5FpUFQdyaCS5GCLJ564esXB2BJDWSx5TYK2XXW8tQYwHHuTCPoSfjg5PqPmGvpqH7atRNHAZ66JhAEyL8iJeXFfh",
  "key19": "29R5SeKjW5uWUpybhJgvhB44cuhWPzKvh48LR6EAb2KjHEZpNgAAUL38mjcjG5wJL1jBo56Z1qLYUANWRL9ZZpNb",
  "key20": "YTbtY47G4XFeetwkDqb4A67LhG3pW1ge8CQU7Yy9r5mGo6wGz9M5Ti3onYRaSwXJ6UTn6KxytaFrCsQLw9zNs84",
  "key21": "2RC5W2HcbdXQjp7BP6BNqQCoi2cn45TEmFFpCtRXrH9tQrJvroB96Fs7i8R79UBcKTYNbyErHWXrswTEh6go6mBA",
  "key22": "5ou2e43PSjQE4Mah8U9AzTgQaeVaRgKxWgxNhB5tc5zXGzpxo4pHiAPPyf7vuQm8tFnPCyfxmSibQfqaqGfQrb5F",
  "key23": "24NPvv4KAeVeFu2R8Ak2KtYtAcSLi5uG42uPA7GenFFS2yyjkUp5tZnWBc6ZbUVKzrm7XPHxqR2FGBmYDYtnd7DK",
  "key24": "5Y9o9AjfC4a2JkzbAD8Gem9avBgja3kzgCMxLrMVJysBy2MZR6FHpPMv1LFfwDTAF6YQPzdkzBvzaGcq9zCmAQJC",
  "key25": "3MY7Bcs2QP7iRw6sVFMWUPsa54S85JQAF4wrRAMgoJQeMo1fdaDdVjsW2ZVDZS7sZNStMKM9tfvdDnRaHrUaUEkE",
  "key26": "4DqgGzvLGTw5pFQBfz14LSoeAu3UK3H6guQ6K8FehECAa1k9Qa2ouMoiJ9enJ4ZGd3orHEkpe7mkNbaKnNhXQwyU",
  "key27": "5TSXSQbR6sCAHpGuQ1rXGzs2dJ9c3sEyLXpLTHficMzwHBCvhySpLE6J5MD8hSR8izLFcrpE8LJipDJW3Hmkd3h8",
  "key28": "3gCJ2o4qZR6iu1H7wcrFbjQ3uwd1hmjioXMXxERBfKjFe4RwJCAKBxqe2r6sPRkex4U9giCwAfSc2iZowSFvpzUF",
  "key29": "zi7wY7s7wbVfG51cCpaRsbNXjv4kjjhCBSUAVpbT3aqroQr8PQrzdzzTsvH1CxqMcnwYe9fSN9DEtrXG2vFS1Tr",
  "key30": "5szVpGyrxUq5YrqnzRLbK5oJ7tjUALhFe27PxvrsYpVTNxQSiaZPpzBirakqhZhFb5sd87vh3myb5MTai3FkKMSq"
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
