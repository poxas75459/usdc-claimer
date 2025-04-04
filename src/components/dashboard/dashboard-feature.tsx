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
    "5XwK6xhrnkChueqPnRa65VqDmB9JG54mf2nQxrfsrXn7dbwg9wdHsD8peRjnkwDBwtre29rt8uZU1LD5zZrR5FDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sVAfK6oGwxdDtPLDmy6NZ6zuWqHRE1jBmNs4HroTE3Tzm5yaxN2XVys1XPndHU8SfhA6Spu8LspcttrEy1Q3KYB",
  "key1": "1kkig48qZsRfUTbLfkUSiQTAY2CaajBfa5CVLCFaQG9KKGUvxvBGD2Cnw1K85xe39VS55fXrQa3nj2Givst2h4U",
  "key2": "5Bsx7EP4F5RV7oi6Mf5wRtcNBuRMgMWxzkrQ6DRux9KiDmfHheWyVGqGhLAEmwCPWYTSt6NG3Jx2rWZWRfsRjmT6",
  "key3": "nMso3DV9rfyZ6PxuqzRA9i5UUa1FCKsbzkwQJa4JaULUZ2PWoGVsiLfZcpS4BK94katkeAfpn9Bs2UuUw555voJ",
  "key4": "2zgwqzdVwiFdMV6NyNmNEHBtweCedJJdqKyAJcXyEaP6ubJWgrLBFB9jc1woy2kt3s89hWkAmGRDGyFVksnNAUP5",
  "key5": "uAJ2chyKMyxuRFeu1fKSYJBmUqarAfg4ZRW5nWG1gUXvBNGu6PVTcHksStUcinXxfRKhFSpenjF1gpDBM6NsTio",
  "key6": "63qKeHy46aR5wbU3yRktNn25J7atrJo4G45PE8qm2XfEQrzi8hBLBRkxsR8V9xFt9iygybDET8yT8HbqREC2W15L",
  "key7": "2PJV6gcPstYDQ3MPDWPUrmcG33NPtKRPype8fwpHfm3EeW5aN4XEskk17UZ6YkKFLnLfh3hvPeDS9ByhSUveu2P",
  "key8": "2X4Lzf5pMkg67BGZArgtkccYAZQQNxmKmqpE5s5RKZs7Y7dbUPT3WxSSobyYw3EZZmv5FkaXuB2ejPNe6L2iRrfj",
  "key9": "2k8KSvsiDW1ALzU7iYbZuimefi7PNFFnzKfwSqaghRkoo8yWjXyz6hzpVMExR8Ho1HjBZpbwdBU4PngHVzxMzLXT",
  "key10": "2vHL8FGWohdUYGfUXuVvt425bGRcKMudm9fxW6Cdy5FNABbnmnZJciSkfEmWzCpTWCakVx1dRuwH8RCKbR868H9Z",
  "key11": "UKJg89yh9RkgEAScc4TfkT1GeWxk1Gv2tb3TggaCKbT39aANifp4yt5Vi1PjaBTFV6YtugV9SErL5pfmeXWogUC",
  "key12": "3TZhPucHzmcHEEGBFdod5f1XxXR1Az5gKoGy5V1gXQRhE79M5wVDckHuqT3axzKGt2yBoJL3jcCV5z3W5rqHaQyF",
  "key13": "5Ne8XgeiDrD4chR6DxSSQpXiWiQG9BuhvwXwavcJtTRY1uEVMvZdzHBubmk3NftZbwfMabJPR2ALqrAXwVUmNNns",
  "key14": "2wWnUj3LiuLNbiNcNBhGiyL5FZz9nn7V2BfB9m2hi5NpbqMr2XYqz8w7JaGA4faZs9cGnf5wtkhVVsbzQY5MHqTq",
  "key15": "MuCJPL1pqzwEocbs8oaT45XoarSEBUzmgjRCtP75ZrS9iq71WT9psz4E7sSkyYXH4q4XDaNaax4BqdbJND5ZWsB",
  "key16": "BCAz6ZKFj8N58qooGUJNvH9H89hGbutGgVyzWwAMh5m2uswV4yqZsmJ6n1eD5cZyigppWhPFpQRDfU9BdyijwqR",
  "key17": "44mzEmvydT5J2Abm9DJUJpkN9hueYoobRzDfh8SaF1TYoiPuZCRchbaDGkFSjiFWRFW6WjEmnkH8ZC9wBiUvquYK",
  "key18": "3i7SepmjsPJ86EdwukXFvYVvuKnWdCSkX8joiyPdCjfE4DqFNUu5DU7pKwiuy6x3FRLnbFnj3HpeQQJi1c1Mow5g",
  "key19": "29qjHY2cqrLCfR7qXXkR8uwDeoYuXriZHeuDun48xQitGAqAiMbb4ngMXQVVBsVVpjiosDfEb57A8FebjaHcEpHr",
  "key20": "v5abfpz5y4s4xNAXQBAh6GEdw8ks4ESfUwyTSALkaT3cgfPfDD8njdCGmQ4LWh3VQ2nNZXbDX3Ddq5gm4DJm94G",
  "key21": "4x3mZVSbwevVJL8CjDDh5bNQpb8Q5SGWRBM5Y1ZsgspHZ4xAJPw4M8eFbMmPh2WAT5Kj3WzTC4ncuV9yXowDKPuA",
  "key22": "BVqw2ShCw6j4LZGSmzcNjoaSjgFRhimMpDjZtdpNepEdTfseu6Fr3dTozq8FCc4muAuKFAZcSDqcHWooQCapDLi",
  "key23": "4LyYvHy99U7dX265ed3xqHNy7nZYAMsB4M4EZaVrigBenSbCYj8t1Tz8uCTLfgLZDQSnq8TNqSrgmRNefPHivKVJ",
  "key24": "4RseFjpgYtqZhdtq9CtupM9QiXoUFxAghsrWh5uwryXn8A6HcH6nTDGmxsAFFTes3Q5XBn3FgrbfJiUjGaWxiQfE",
  "key25": "z9SbqGAUBqfyTkDemw1vQXtwUJnimT7hZHs47aUQWyJtChXiJ3JQGZbEmoJ5F4sBoQXkXwaGA9nwtqikMhiNey5",
  "key26": "3Fc3CLeg2gScu2zSciAsNZdkkLJ13rcgpUYWThfmyEnHoQ4YzrDthWwnrbGkD1xuZ3GeQ7bkhiJaWMrbPTGDg3kT",
  "key27": "4bp6Ub9QQccU8BxPT3MTXVSEP8ssUkZWrb6HrDnZ2rN7B9vt45U2huiour8AfbihpUJHKT1jANWfP85p5eU5ABLF",
  "key28": "24KfuvPD1PQv5FRtFKSjiBVuaKgWUJ1rZezCN9Gb1z4EP5f1LDTgGUKAzqrgss7xpEK6qboLPCTzutZYTvA3CTwv",
  "key29": "2GJFNcnuL8jG2175hW2wK4FxSC9bL3bd6oKQpKyKy5hy7x5pGTSNXnqnzbamAmk5nn8BHLAWro8HHfJCLe6SQUUw",
  "key30": "3KaCfmjsbGHq4tG8P1N4uDD76cYCjbpEJB7BYygonK5woPsEjuMapNhqssmfSRQjviNyFGEyzuG8yRzC1xTURbFs",
  "key31": "NQV5UaFh9rkeQtzcT6pCpLpTv2UUYutk1ydvguCJmqS5ENJqo7shWS5ZxwxhiiGrUept3oNMeZpkyUBEy1f3py2",
  "key32": "5DqPLEzoZjdzmxiKFMa4CybQvmmmek4z8AXNqev8P8jwLrbscLp6LdwAzzg4g15He9Y573dwf5bJGfS5hut23spn",
  "key33": "2cGyNzL1N7EQaCqts2rg3ia8ZGiUeUoQWxH9JCm8VGYPxN2uME3L4MhtrvzZbczwM9R7f8vFiRHFphA8VnKeWGw9"
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
