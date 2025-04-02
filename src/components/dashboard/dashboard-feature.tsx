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
    "2rAwuv3DN9SwKRc1P4iA5Nk5Q2eMgrHQHxFWsq7VAhF9LLdsqCY2LfAC7BrzEDPid2RnZVEsFKj74vsjn6av7UHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCm5UticiwXJfVAteKwEk5Tuce1tXuJmNaR6wBc8CJzQhv5f4udNmfsGp2C1WiYeXwdytynx7qShPzZHs1dhWqD",
  "key1": "57F8wEk5PPm9stnT8hoSHBedowmrK3YcoFD9jWnWfjrbb2FvuuVAQFdN586WTuTL3a8JQ1WeGhMFc7NC9a9TsRwc",
  "key2": "3ktqsGgNPqr2ZcvkyydHuq96o8xJoy1CMPd1AdWtXEHX1TSqqcXgaE9eSb6z1nN16VSwpmCGo93h9Us7QoxSX2Wi",
  "key3": "2ajdiUkiWUHEUHFCfMib3qWVNpfshxjkaEpj7X2jrQLXP1Ap85zmTSGZTvjgieTrSido5aUFVpeXFS58ZsgiJeTz",
  "key4": "2E6kaKixbsPp8GQKuTK7SkLba66DDqy51cLhztKEaj9UxVxks43QfPG3LFUsmC8BvnaMfWoreCgMccqMob6Jcd1T",
  "key5": "4w5qaMfPGQfi8okmgGunhP6dPxMhdLXYhBovZXXTWMdKo59Rf9tsYoeKKrASQD1hrQT4xXjA623CGAj5ShwQKssF",
  "key6": "RyTcX1AmntAXeW69uSeFJc1MUr6raf8XPoiZF8B7fcYS9ZFrEZL49rXx43AJT2hB53LGhiKv56obMhVyAuhqVcw",
  "key7": "61uJTas78ZRawEiGeXSKuUGCbnfnxEiZgrztvVwci29WzVLkr5VEvVDniBfV9Y7JqcqVyGxneS25NVqEgY1YF5JS",
  "key8": "5FEXD7HGxouubR27x6tqdcebFboWQEnDCQebmAXupqJvMBeBtLFvBGggHrGMDgZ2Wg5qCyRsDU7qTPFTE4sEmhsU",
  "key9": "5hvLRMLSY9oR6McgFXbRWunS8A2pCFLjcfHeXsRFTPVVeQdxJ1c94fuT38FGCBVyM5TQMwx14GidcLr1j1wdxyi6",
  "key10": "3iQxEebSVZkm5GuHBrXum4S3SJcxt2HxwcoHYQJWmZgBiyZMCTPt5wg5SXtd9TwJ4PY4evVUPPxb2ocMG9qaqVUa",
  "key11": "2C8ZFoo1KaGEJZpq4yQyiaBWPSLW8NWp6Ee8kLsbdLZEsuTHPQ9vNie46Qo1T9YouAt1gHHePV2mHy3JtHDhKL2X",
  "key12": "479fctWWBfs6vd6MLAY4CdvJLrov3uZmiEyGsjNHC9LznaEcKE3Fd8ibeFuTBRBGLxJUp6hQwTuKS5Y8GNmnpzSe",
  "key13": "eQDrZt7Absqf61NazMjXmsvdDb6nGWxP8rdUUArQUy3sRSuaa7fs6gM2yJ6Lqed4NbmnGKrx7G6xTaXy5WMoC8g",
  "key14": "3XH1cjkyEbujkPJZjFjTGD1VJZe7hcm6UQKrrvPPkwrdUnkSRGcGCkuhdPkaxRCSUnoYkdo2x2iBBsJx4aEXP41g",
  "key15": "5CNTXN6dBDiwFD35xCCVEEahSymS3G2BZe6p8GMjDtiWacuBPuByCfkUs8hX27fXHMHMR5LL9Da4t53czptyxRtH",
  "key16": "29Xb4FQLYGBTTq7VG5hqcbXa6LroyGcPogeh9gHHnb6RTemraQNYMqFP3W2CgMp6Kpjs6dqPkec7zx59cagQX16t",
  "key17": "3y5H137dm2JSAaHRyAAFhP5DUsC77WwuTCJUqLK1JC3ENwE8xTyp1GnLGxDHY3CecRfx7gQa94V4qpAi9SNPZTWJ",
  "key18": "oqdzSovVLm7keQiYVLSwQqNPCe9BGD7Pp4d8fvZozayArrQ2qTG415dEBqnwWJZtoeoeg9HtsTvYyfL6zWfmrue",
  "key19": "3fcDvVDSwje4m7wUe5dFapNNfKNsv5FjL3BHfaGqHtxmeq9KDvAATba1RLNAqgmmSiwJzEgayGR9tKhtN3Ypwnmz",
  "key20": "33RN5iBwrjYLfGs12th9jn2K6ogJTM5oKCUxuLVqoMLc9baPjnPnzbR2NjRxLwnMkn2HLbSeBzybZJ9Nd85u81oM",
  "key21": "2GDBEwQrw95gr1hESHnoRN7Qng23fNPeJ61UfrbHgbFcRiNvoad5tEb1vyyqB2ia8YUgun2SSADMCjZML9i64dXh",
  "key22": "65iJ8bJ6Dx7e87iQgMQ9VQJdYPWSg42iPBYqsXjokvbv8317JKdZhbM1xvaprw77K8UsYFEV5vGk5MRKbjHCkbPJ",
  "key23": "414vBPtraimpZRaj81bjZuHvu9MqyzuYmKYhZqyCNzhSuVgpatE53tRwh94wXtZGVyn1kMk6RNZEQ7hXHHEY4sYT",
  "key24": "3yf7LQqLmb4E8TKncf5GBcx6YbrMqzMww2o1VAhuvxxNFM5vN4mkRpiS1VNtJZgVUyJ6a8e4omJExHagUJLFG4jk",
  "key25": "3UVh2dGTqpSvxxuRjvMbARcyV7rQnJmMLKGhLnZG1HksjYsPVZKwpfSjUnqrCSpMfSEa2CHgZTunLH7WZbZ3T88a",
  "key26": "3maNAfMnPF7FBimU8T3UicoBYDQog3wJYzh3h4ynZ8tdb66ce5NWWHyTUtfzXhMCFzDC1ciqTx46WpWuFj5DiYhA",
  "key27": "2vbvX81CvSz4Y4LUU3m2soVyNTaUda7FdAEwrZ6g4EnPXSpwLz13GSSSk3Di8Bger6A2kNrfbXDhxTPh4zVnVHt1",
  "key28": "56533oVz6EZoumr3JBiXe9VEY9GfsQuZB6rSjPj2gZBC9YSfAQfiwJhF2gDHF8UfdY73vrZXncQvTEZGaGTzcqLE"
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
