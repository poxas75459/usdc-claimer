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
    "G55cPbVjVaexX4jvPmuJ6uJ9oDLmXpCJZvu8y4WPtJrhMqCTXGxTynGEBza89R48FyJgrWipd9hLgs1RTXyM2tS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NqmjrKR8QnUPx4Arz1QyLaRKmiz6eF2SQRBzMeH5ctUPSAQShcBGvKNiaAfbwAtqjSEEVga4Q2FSMKsN5QYPKE",
  "key1": "5UajuFP8BJWuSjXzbsGsWFcjpjanPoPvhfYxT8aG1JqZnaMd6nSzwM1yFuDYymoRHsY4jtWLTbYpr2SK5HPoNwwf",
  "key2": "4k6Wy1gqFX2i9NSTyH4cf1up24ss6pB2edQSMDcvyHMkz66ovA1xdYT7cDHBi7dxScnBknvtPwnGadG17y8PR4oq",
  "key3": "5dABcrCt42eAkwJ3HYbxA5VNpsu1WsCEVNXs1HnYDdF7hhAUgfRC9HPQQfokPEMeMKo2dGbcXbbgzobGV9Q1xi4w",
  "key4": "3s4BErVb1VtfNkqSEQfDkGM6TMhsTX9MHzxxH5jdW1hoc2B1tAr38PCRnHRnqSNdLixwhzgMGhYs9xX6EwzY2HBE",
  "key5": "WWhQhbqKGbypzzczwRc2LJTqXYxVb3KFEkEDgEmQJkf71mchbtRe5tkFWBUHaakbHWYyFqMHs5T8BRGqrMFgn2Y",
  "key6": "qgJauv8DYfvTiytjye2FHnm1EXrsNBBpLiYPsk3HuDNqZvsENDt7BCQMJpHdWysRCMffMEPyxbb11Vs3qDX12z1",
  "key7": "Aq57HGTjnTMUVBP5Qxfdni8ZMrT7t142yTzdcQo4uDa1hSYogqn9pW9T259FDnd7SPqhaooLoiBnTR8Eui8zitg",
  "key8": "64wSJ4d6osebH1DfDXmMUFLLQLfc5yF62hiQNVXisRd7G8xHHsbenA2iBGZM82P7aXdyfXBBqfmkZy3G6dCcLL2A",
  "key9": "2Q2N6JmqukSsdSp88KmNvUp2Q2XCSPsYs4sZtkFcUVGaBJYXekqbhvnEp8iFV61sri84Jc8xuFwQw5aEC3rkPzDy",
  "key10": "4ASK8LwDnTdPQNjGHWJb14zj1KYm236Brt17ci4kggLnT1yAZpxwSUTbh2vqE563srbmnqpzmQFQ8wComZ8kqQJi",
  "key11": "4fyHuRq1MHmHz59oYwgQY9B9iKtmfGaLGQnGakYKJPtU4HzzadXGMez1gjPFXYTQeyn5EUM69tEdqMT1jnYgwr5f",
  "key12": "3Qrrt1A8Kj2od8kimedLFBwD3xb7oVogAGasJpfvnLjRmKCkNVduwrEyAbJE4oza4sj8iYHeBqFh4jYqkAnsuJfd",
  "key13": "2qJtWZi31cSYaRQzJzmASrmPw1tJZazH85V4Htp2ot3gZixQz1p9PaP2WdDpoZnj3U5eM4qV3oTgsks73pRpSxP1",
  "key14": "2E9o3mqNeWveGUQB6K7JSDnPfxiWU2aArLb6KRfKkpaz8yvNzi44bAHu2zx4pC3FVi3oQYLD3p8j6atS9UUnsptE",
  "key15": "2Y34qdokGAuXNpLqpuYaRuoRAqcQsQHhSXkp3spKawBYVnrZCvoo8rpp7HRT8U5x7JcckpPioGfZKhH3TosEy1zQ",
  "key16": "2zUv1UvA9pFzYnBqAqxJQEAQm6E4i9B4xWMgHsqmc7C3t3BSVsuFXCcDCcsAEdVv48eAofouHnf4Vqc2pVqdwA3p",
  "key17": "4VHP7ggeVRL1oeic86EqSR1MJTaJ2YthJAQ34Wy3wQgZgj1kqauUbCwG95MvDsUoj3CNeQVK2nMDzXC59DUc2pcp",
  "key18": "35UPu1uKMW2kvLbrKqJjdjSzfM6Y7mr8g4fggJe3uG45Z2qvWAqgouC1aLHnYNXeJ7SvxEhPbkgPnASioXJ94uDW",
  "key19": "4QXsN4SANKAygSSzRoaYSukPX4CfK1ewYE5u9fGZfkJs3Pvgoefan1sFdN5Vpre2iw3oqMZRo2v9XqYTe6Hdv5Yo",
  "key20": "64TfWDm21j7ixrs1hXK88HDZ3Aan2hGoimvPJMfHTwELvgb767JgZZd8NF93BcPQAAzYWWJU9bkJpoyB2mwvYGSJ",
  "key21": "5Vg2Mmw8d7yQZUwgij9eMUyGPKVtoshGXYjsYcFrSy4oxBJcvgvRjb4RwoAySwrzEeNkDFuJ9wrWUcYeW7aoRbrN",
  "key22": "5MQWGLuvw26GRfgktRp9F15BkXojRxbCby2QaB3qmp5TYAoWpA7nekmofMtEVZY4VpskC3Zo9w8KGQsgwFaG7ten",
  "key23": "51WyKmRhhLP9WfHvBLVN92PSiFcbkXwdRmXQhvv3sMD83JqrVwFvsntPuABcYhEn93Ud3sTaPpsUPHUuWr8vCPyN",
  "key24": "3U8DBWEVGJ39ESLcpzUp6EW61VTTWaXcXxDrkiEgXpAxAxD1AQrS9ZacLPubqSFjVh7jqbpT3XJy7QQ3hNt6ZfTo",
  "key25": "3EW4muYTNxazzZBUKg1C8uGLqZyCfaaa9DoAzpWHg4yh9wgJML3FPkXXS4dh8XGF7Kh8iSgWRquFh81ByHSyJMqJ",
  "key26": "2xmMD37TtqKUqFYy4ZpekvGptqNXDj3nmnhRk4XdddkjBFdsbWBeR9wa7FZWwxmsuoooN6XHYxbNhD1KFEyjrtxx",
  "key27": "3d35Tg4uQwDBSRz1S7Bmh2FnZ13NWN28yPpv6RayxH7rhiTyYAs4WNSkicUULGNsRDCzFsoj96f86Pdrk7jaA8M4",
  "key28": "1djGUrnCPKo7kFPp1LL84gG3MFCDN3gWq3dVoT4HPJXR6n5RbQxz1cvwiSfC5rhV1fUqi9CSjJYCrusCfMiPk76"
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
