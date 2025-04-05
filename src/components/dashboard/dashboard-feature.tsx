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
    "D6sG8VjMR41BuQh1UDUx6pnB386v5qyWJ95qWiUfGz7NgViwumTUoz6RVeYu7wQrBsBmGRQjAhhPC2fvQjXB2pC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n2xDtSSA2fMNJ8W1DVQ3PApaR9yGfodib6upGCxASZ2jTqcv4t3hCYQ4R4vaS5Axj6PpUC2rerZU6mWVDqAMrcv",
  "key1": "5VP8Fo4b2mhYRu8LFCRHdwTupRsxbEqoDK3oWcBuWf4STS44boxhdx5Kptjqsr2k8VaberBnFeGo598RLj8gWhhu",
  "key2": "4bCsZ8BrJM988WgfhrR7z7NHgXKTJJkKjqgNXA4BzGUAxEdC3Ug6d7bCbU8mD2muMv8DKXpU1x2AxjS1njQFa3Fc",
  "key3": "qjVw5oapmDugfeRZ2NnKV4UcwgDkcviVQegvtgxdMAgyd9Zfduux49Ba2EhaCLE1X3mC6wbGi69wzMFSgxqPQSm",
  "key4": "5SXL6DpBk9reg1wtdWwfbAEonUuyKW134aS7PDfpYjQonKXJPnKsjuqAWTT7hnEPELZpHmjGJ8cKukUvz24rcDH9",
  "key5": "4tUC8z5URmJKreNahNCuWzRFPLnD2fi9hjVVXb23rsniQBbftV3nBTmERip1J2rGFbPscK2gYT3UvhusGej3kZe4",
  "key6": "5oyNCB3sxcCDc9bPMghYUiDacaxfuUJkSLcaJuCKXsn51E1oM4d68oe4Rqk77Fxz6JieHNpoRATZV8dKHySaW5Tv",
  "key7": "5r11nrVpQpMQsbm23fDKu2WbLkCw8b5wN8g43wiLjZckSj5r7JasCqu1hTJqmGCu4HhaxFg2bnEEmdPUNrB7frQ5",
  "key8": "5zjTGkuj7KYKWWQFJjjDc9ydeLdygskUCxSW78CM2wQSXFQpu4qeS8GW3vZCTDetMn3d2KUN6oiKWg8T1gzX1TRR",
  "key9": "qKscYMKBWJ8J47m8obLNdQGgxkP2RBv7F74JRhNo68soqJwy8kmiNkwtK4vqen6eXBVNpe5mREVGpr1YJN2EYvt",
  "key10": "2q4TtYJgW3iNyCoBQDYqwnSycedyEmXTEjGUgSj7hMg6WzCThg1ihDixUfw4AYxeFSetGGqMCwwwKmaV4mSihK5n",
  "key11": "5kVHQMjEnoDAHH4XM4XzRpiGCYa1EYvhvRFcUFB23GYAGFVuLVivBHKF86aLBR6qCyBdLqDgWqRAB3tZMCGGesaT",
  "key12": "9ToJDGSt6uiXfc5wRgLR1zFBdQPL2ptzwxnPQNJY5h2PfRn89S9C1z4iz6GoSkgaGLffhU1hFDzgWL9us6F31t9",
  "key13": "2AgNyNGT9ArFXS1CEFfyEipcBNc4SUUpBdbjguEift7kEmBikhQ7k1uGcZAHzbAiyQykzbCF2qeoXL1McxgpWxw5",
  "key14": "5Nsr6Dc9Em7sPScwFQ69xiBsptQtoPiuyFT1AcUGETmKVuRn7T8bFCCovpxcHNuGm5wBr4PAmjta4Lcof3qPB8u7",
  "key15": "5xQRsnPsbJCBDD5saKeGGYng6cu8tDqEWHtibF9acRiid2Kkxri8Yg4upJuB8rrZDYGM46ixqDqtFGdVXrtLe5XM",
  "key16": "5mLiHu8CiEnXvgax5deUMriTy4yNfWsFiraRSTJ5dDuJ35pfuqyjfCi8oy2GKPjahZ8BxBNSZqehqb1X2AQbBoho",
  "key17": "4ST9HRbTWiKeLCyZsn38Y6Czw3yyJzuTnBY16SMBtk9ahXBYBKBqm4JjvW8qyULiaiiyMgFEMbocJfuJteCx27rw",
  "key18": "2Zo7yyD5EYDtvhx8CpsfJWGFVJwNUReGAjGYzR59t5kozQKA5SSMyynCLvDHUWdkcGdGQUhRa1NWuJi71wWu2TcR",
  "key19": "3PStgreL7XYHsdnmFvtBgVdxA5FxC5BGJ6dY8LwDD1cbXM9frSk4BUX59fnV8e1DSFQ1MinAYW1efshzKcCg22nq",
  "key20": "2i1ZEnRbZWTSkqeK2AwbKS3LQzgnDmnfzy3YGtX8XJvQsMRu7KAHihbFV6nUf57vhtUt3ku19CLyQQkxTxmBC3oa",
  "key21": "2gcc16xvLVTCoGNBWXDbhHzWhZVCvWPxseVeyS8wpJEACDGb3WJHFnLQyCj47FrgvYv2QhNcHQYa8C1cHuaqDPUF",
  "key22": "2XGTgVoczbrm8tt8M5SLrKsTMEfdCZUu6TJ52DamAdp9cvuHkR4JG53iEaZAXNPf9RdQC3VFXfsm7LEeWfdUVjxs",
  "key23": "2h1U7KNHnPUqdkPxR5LjG72T5svrU4ZEoh6PMdPZwNEv8CgTzPnmXLALwmd96eQ3CgGzC9hmaFNZRZ7gkYoZUQxY",
  "key24": "2jcVdJt3ixWbQfQCi6gfS9wc5mDHVdug9rwfLyJdiefTvLRun7oWNqmTwkj44kQs36e5LJr5wMZM5Jz3mEXbSE89",
  "key25": "4T5RJKPe2Zrh6q7NfNPgVJ5hAhrTLiTbwxy4jTc1njjHDmmJodp7xyYb7RU68J69aQGUtRFmmdb7b24yVzVYwjpn",
  "key26": "5oDY13juYw96qEC4AZfga9SqWRanJhJYkmF9tszdwZyQS5NjqY55RLKcSFcd3mPEqRJ9vdDHSwmmDjzkkUt5FAwr",
  "key27": "FRtqnx9beukxt1e3jrisKMi3W9oktsUx5Z3Aw6VighR3tgSZehuUEK2BHEXGYmSiYGiJHvJbc2wURCMqRPBrT6c",
  "key28": "4PFxn1W5qdckvKVt5ytAvjeSLz6Xpp4ebjZpfhrUBTsuk5rPvs7Wn52Chzvm4hQESB2khVYBaknTDRHUghMJwzP",
  "key29": "2HDU3xwN4LMiTMG17aQuCz75jxvc1hvpynT8mxHQQcgpB33KKsRiHoasGuMT6jxBrjWvA49W2251RtPthEURifjC"
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
