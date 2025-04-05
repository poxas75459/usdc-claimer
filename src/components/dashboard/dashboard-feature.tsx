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
    "d2MZxZJb2CvNjjdbD3muTDSBb9bSfHB8PW92gsSieXuHPzF3rZD7Z9HiV5FLzGXVpiznG2xwrzbKc27bnCQWvw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yhb1NiHia4XRxoavefPY7gk7iBA2cCdMwgrtaqY9uqspZqyZKzyTaWPHVLpzCvjYmgDyRvTyC2X6RidASLmmSqb",
  "key1": "4hqPtwcy9tZrnWZUPWX7wXbkVwxcrbyV4BNhVGm9bdu5HSPVzN3b2fNt6QuPNwqqiyvbd1wgD1Xzkp3AQpmasADx",
  "key2": "48Wubo84FBGnq77JmkLUNB9Teg5CXtsteDuhtpSRUGPtfS6UP5fHHQAZNmE1dxbxffh7vhJdspX2ktA5UdZZFKJu",
  "key3": "5b1SqxYmDhQ6QuWBmqee8c8N8Dbh4dWmytveuJRAu3xmzYncFmdwcpzbDnfhqqCyUR52nKEmsR5qHCtktriyYeC",
  "key4": "5CUUSWqB1TYTyanrisyrQPEvKZi6bYq7XHx1KmPdQf5SLpvXH7iCES8d88CT4bPGtGyCMgkJGxMVJzx76TaevpND",
  "key5": "5bw8yeM1456GtGCNcuEasYaqMW9R6evULwotAyJFdt9TtqaP2kfjBz2yuH3PTmm3EBEMkBD9gA93vpR47TxvJRMU",
  "key6": "4ZhJeHWHf6yzAj8Ge9UJk657aNiq8ztFkF9Gib9L3pbt15gH4842qHEsAcQ9v7piXfouNFB3XWZPUMSYE7BCMqw1",
  "key7": "3GA6q3GLLRtgjXWSyCgVnkTAZdfRmffo19Wuai8nscTUKQwMjmYv3FcFw8m4bY5384odeyzKLfrMWYY9BtfKw6Vu",
  "key8": "5Sdm8mTS6dYV3e2Eo9Hq5jHkSjoF7pauLyqWSMUbVA5M3L51HoSyPKXw8jxgLRxbmnjQT3R9mfVi8QaBNXEtdBVT",
  "key9": "2qi5a5byWnvbS57BDwBBNiMA8RHUrJng6BbqGLWE3tcEC5LhDvW5kKZUf3sQZWEp17DRqKmdkkjy2rJwamrnGhh2",
  "key10": "5yFMjhUFtjbvCr1MCxsJAyqtEiP4yroHhKjvnZgwizrHKWKs5AXRfbfEbpCEMNkjFaZoZRCSiVLzprZRZa3VmHpK",
  "key11": "3Nf7mHEdSYjZb4minokTsZxPS7vSkpbvLvqtyhqjeYsRFNgDHyjBsgsJ19JzhivKM2qPHxt3JxdetbWNCrcXu8wr",
  "key12": "5RiVU4TvHUN8dtibqmcBAgAuEY1F21LMhFxYo3PpDaF5LRgyJJyWF6D4H7rGyV3agk86AMNGQMy5D68E6yVde8te",
  "key13": "4h3xWyzKpA9LauyYn8PLJg6riqsx4N4ree2s9h1NZmFebku7XXWsf4xs6cXa2dhvGyFjH5rbJ6i4CRWjWCiZVopU",
  "key14": "2g4QZfEJgiJDpvDGZgESA9rMbqyn6uCmpVxqTgb8CA9MF1nEa4KJ5RJue58ydugun7pwCLgMdeE4mfcA4q1ia2on",
  "key15": "3yijZBdaP1Hxh2XXJByJmE7U2sUfmc3phtn87MXhuRjKacvMCweJU9SJFVeNMMZn3mJyz8Tx9ebkMe327pSnH5dz",
  "key16": "2JJmadu7aBZCwi1sH3VMKS7bKjUXrAH7J7wVs1p7ENAskhGZAWJHkTuxFBjxw8uPRJpKNYN1oLUofYwneZdaogLh",
  "key17": "3ecLsDZALnMve9Y9uQRXQA4J6Ubw4Cy57GBG5k6BK39dvEvdC8x4xryBH17sxLpYu2VutELwrMgUHubB5WoEjm6c",
  "key18": "5pP5FEk1ejCTUtEgSQyFYbvj5ZWA6PoMDy5Y9ppULKFX5nY8n7nkB5QYg8HfyjZdbPFEnuvNX913VMpc9ErMGvrp",
  "key19": "5Cid3BhAFDRiwDLfiT1kZJ4sAUHN88WfC5NyyNikPVW5rSSQ9rVtUG7cMx8ZtFM5FBTNzzgavNvrK4cvfHCW136S",
  "key20": "5jBXm4agZS8pBYLj4mXu4GUiUg9csMBRgJcQ3BbhNmBB4sSWfiaoy6aYp8dxZbfKQXPVLhiS5V3juAdDxs28YrxA",
  "key21": "3TRJzybnTJy98WpTQCtoP3xc9ftW9SdecJA4sixB848m941RKnP3CKJh1YAtVcHCKzmDAqNqKFubf2LjEiieHd5K",
  "key22": "2cjzYxFUxLVFRAzfVtSxanFGKNzv6e2ivziyf87JNdnkmy6jkWsZ9DHWZBkdJBrWZ6nwCwubC3Vzfrs4RNKz7fXK",
  "key23": "2NVg8V3gLAE3qRDMkB8x5xf8mfv3KDJAhuQrbyJCwYQLLzvfS2DeersLebKuFiKZGBUHUVfKekwnx9qXcFuWjBfx",
  "key24": "ddCJBWW3hjSYDEMPP9imnTXzLyvLoxvxeEycuGDhEqRweuR6vR7HZN2Wnv7muny7z12LFFS4EdCXev4PGdxhu1b",
  "key25": "4m2kL8L6NiFRGUrrEKLTHgWUm5fwkTLK47cy5nzysUnDUT8MLGspZ8saUtDYfiHMoP6cJwwN1Wxx36abWkpnpuPA",
  "key26": "4sVFbCEbu16Risdk4AkMz21DvJYTTmzPrLP4aj8xeUhvbKUUsHwjVQgMTTsGYjAouaB4FtCsqsZ5rqsCTU8VJFek",
  "key27": "3KGJqx1nUU8WxmL7aRbFYSkaH8SDiqGC6WTVDXyYhZojzXBRdBcfSGJGMCpYWU8Ar1pKM3GFxC79xcM5Genehg3L",
  "key28": "3hgLYT9dacY11LMh5QxGTPmUey6ip9UJon9SY2qb2s4jgZFoUzB8uP1nRxUA1UNFz3o4V4MC4HCrCTYgeNcKX2Vk",
  "key29": "5ZdVq2aj358cbX7rGmD8ipQYXurxqw8gRiwfmnRX9BnD491WqAShRjVaKeX1oof5K4aMxkHywcWCW8i19NeDydUQ",
  "key30": "2pqco9mNiUYaytpG2SVGb2G9w2WPREEBLeVnzh8gLusUe7TrjF2i3w5A5CAF627ToGiJ84kygtEvFkJbiJojDnpc",
  "key31": "Lz9eaMAWWB3irrJko2aEjN87xy8bZWn5b812hKkVsZ74byi3oddXw3oi38wLgi5tUtzHeacvYvxJDq2zHxW7fbU",
  "key32": "39w2tmLFHEgpCW61b5ePbBb1865EuGhyN9oip8YZ2iqQrnwsTV3R6CA1akxmHB8HHppgJkymhagbJr9DhoPTYmpU",
  "key33": "21WWUodm7xf9CkqNyygyEFoy3ySo1V43mtG8nJjukhRRtyTx8S2m7f55X736ytr8tgEen5g65DPoqCSbvYLJjZT8",
  "key34": "2GptFTQUmxTZz2oTgRwmykEpmHSAT8zcCmsEqTZrx5aRTUcB7xmC3K9EnSCNPGhVZePZxesCMh5hc8djckfoDmEp",
  "key35": "54zN7iXzRx53fFNgEz81pFonAfveQLzpnDh8K4PDnHZvspZj6aC2Ya3t1iZvWP697TiXhBiBXkd5RJdL54Bb8upo",
  "key36": "2TQmp3PHUwwmkcAKAmGJfRpBvead8XphkSwhLV4yx2ZLc6r1fYHo4FPDMoMJGa1XVATaKCJfrRBQBkquK6kDoxDF",
  "key37": "4zTH1WG8uYFEJwca4wfBCy9Dt4Mt3daKpajSVcwfz3AEj9DYMqvyuDw5UPNiWAZqW5GFcmXWrEHn4FBp5XZ3Fp1c",
  "key38": "ikss6AgZ13U6tdkEweV232C5mThFhSsX2QT4EEe89LhNngf1wzAbVnVNrGccm9moJmMeJSFmBvydjFCZS1RBSBz",
  "key39": "4dLFhA3abQPcXqp4skf1KNjPhwLVGQswPjnpC4rWWJa1Uj62bxYgb96bMXLVPHLAnfRzyG8SZBJc7YZdwUdY8GGq",
  "key40": "2MACCLS8Zc8WChHNzDj8bAjzvhRF23ftcuGdhVBM4E74hf1h9G88GjJXJk1JMUQFfixjENn38uQrCVDvgFgQooji",
  "key41": "43Xm5JqG6NotKixEBQaq6u7QkuZSzpqFnZdbG4haxThj16ijXFWeHTaraVMbVWqfVyuZYudpUQmfKc9tGNUBVzGc"
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
