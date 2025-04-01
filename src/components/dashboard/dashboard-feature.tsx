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
    "651GEzoRznEavEU72zkVW2Kpp5bnQevqa3FR7sRH5EqSp31GzULmJE3TZesyWbsvdMGHdPWYMdtemV8oxRRXT1jM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcTUSS1QtM9Ke9RFMF6b2Qnf9APhzGXh3P8g2Ckz3DzSC5riXkcLP8dzqRcCKTQsvPrFsm1FoLE3uQbnW8GEMKD",
  "key1": "3o1aWFxoRux5Ck5eWpRq8piWp6tWNTALuAMF9YV57pzUcydebVn1dTwC61AtMgyppJRTdS37JNAU7cmfpwUT11qz",
  "key2": "kbJF4Gfg7JRtuQRv561VV9WpXxMLGMQtsNUM8vQ4PQMdzYkUjsSZqHCkrJrUdc2CekT7sEG5t6vEYZKEy12y9fg",
  "key3": "5ZQtGLhuGVPEMoaWCvvRHLXqbfH9aFyZnEJsmM9CA3qCQzzv8S3E2zJGHAf7HQTA45FpKfujHrRGwV8gfTpzYLZE",
  "key4": "42v5RibmP89rzEHChUFihtkoiNRVHYDP2bingwYTpkPBpfiVjWuKJAgo9QuXdTi55HQCkq3UHRzBxC61JFCqUx4u",
  "key5": "3wwMoSGFbxgMM81euBY3AyrCWr4b4bZaCLZLUjbGZF3C95Rmnacc3YL8WTy9sKpERkuTobkrF8AnzV39UTUkGxt2",
  "key6": "toXMXkRNDu9RowyjpmXFthLBjMJsDf4xivtoR21EgrS8cop5BTsBvqDa8EZ1ydTpuxNTPLKDN74fuGdgwtj4Q6n",
  "key7": "4LLWWg9TVC5rUDWj1SQf1o7LpBkBGH31J63kQbAcB3PsXZf4W91t1g3ndRTjB6vuAgocfa7oEq7mpTzwoLUk5mSQ",
  "key8": "WMyNnSXUBXoAqChbgPq8Sc9TVwh7pWy5btaDJ39W759BXE7Pn1N8Mm56EWH34nGgbRemUbG22nFtMzoTf8qzXLJ",
  "key9": "2EpaPQ7f8sBFaT4XdGCNDmHGYiLcd7XuJLXGNBc72ZuFhAF6ffEVeVaXEwE3NKGNakAKWX2miFJtKbxv6w4K7dKW",
  "key10": "4REJ993hTQ8Y7KvFegjLB21G1mV3KNtK9ajMgm5QhdZz2Sm1eEwPBSbEP6HTh3YRZa4fWXaswRxS2xMiRurSy5gx",
  "key11": "62ChNK2Kqe1ggXQcFT83LyBpfpgvrxypeHb7c4AoTcQ5Q3bTMiPFwB3G7dWCZXLPhSj8xW7mugCq8Y8YaJP9T6Qr",
  "key12": "41qFQyka4P7gY4L95DGNjXopCb5WdaY2uHMfHaA55gXJm4Lsc2EXpSh5duNoyf9nDQNAUAaoqv8y17x6JkWzsWZo",
  "key13": "49mz3XxFqSaM64EC3XRaxMAGfxJkTK7xNby7cbYWAqCRAZp44pdQM1yjZ6HhX6aZfaNsTSx1U1j1FXfD2Q3dZavS",
  "key14": "4tUFSDBCWAqWgvYdTEt1tuRoma6BH9mqL9pTQStNta5VLknxgksSzxAtsuRm4qqHCW1xRePDyDaNC3yyh1NQPH1T",
  "key15": "4cWy23SAvGGtLPRrRnGzPhKeHvcGDYYdsSSsU5yYtQ5JHFgdDTuVQar3CSYCS4TrJcyg92BjAkxTMqYZq65z72Ce",
  "key16": "4JXo7Lm1EYb25oQgyKteoMuP3MVVpTEUUTaa4RPtpXoWvgBAFSigXjQgj1VKeBvQLXLy4XZ2wBeFSSD6G8aeiRbM",
  "key17": "4xN7visvw2dgoDPpTzuq23abT2oifrTRgWhNXoQnb9RVCuD5SvTfGgByvs3PQTUr6R7AjVwbqJUigSeB1uaQMJix",
  "key18": "3Kfq3Z8q8Go5fGG9NJncQyhGE3a5VHXxbzmCsxN2rtTfPEpq79m56KyTrDW6AkRyt8vtNQDPTVscK9rgVKkjG9yW",
  "key19": "2DMGN5HHBQZxk8LXDVQXP4P4LqPKRDwZKsXcCrGVYXSSjwAQHAQdVj6N5mJswCGfEEhf4Dp7rD9C4oPv3Q5ZCF4C",
  "key20": "5eXGuK5LmFapeQM5YcKciSPnYULWgg4ZBZb9dHcBEEUJY4m9CrsdBKf9888EeZCnQqQnLPYAR73Zeq3Ze8B6c734",
  "key21": "5KhbkvmcXci6tHKnaEvJ6REQuH3nTHTz7qQwvP8X7dmTmF2uFFEFwYLE8QDcZTKPhpS9RiyNywWQCW7pCGqRgwtj",
  "key22": "4x8uJuRWierW7hUbj3Q1zMLX8BcMXGSMcYmyYUXBfh1fenUzwJ12Ar1GQf6wZ8jpGAHvdmMjLyRa4LSAGa7Fnkhs",
  "key23": "34bCwYNLoCuNS2kLqd2JUvbUQ2eKqTukKLZYrNVRei3S7pHah24YKPVQNfhXKSaB2szYz6Uf4o1ExDo3L9x6si1K",
  "key24": "2mSWsiQtA8TCJ91hSXfBZrwGrEqKKS8hjrSikDQw8artapCDxH8v9ne2qQYtNNY9FVdA7QBj7Q3nvrKAUvK6UA68",
  "key25": "4FGukTKFYy5LWiMp42ydAxJjcyBAhNNmirCkCfRZztwYXh5LFMYXKWGzZhUagLXYrbUxoA6P4FRshawcezr4ueoD",
  "key26": "2GcwNgppHKurPAc9nsCt5H4LwPSKVUDaTzTJ5jAGzkhaM2fmZVs74S6FJBYNBGxby8nbmEGTe6JLy5G51qt8smYN"
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
