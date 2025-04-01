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
    "NQ4vvbzadmxzRQu3ooeorP7LBSwBR5z6H4vu16LqehBD5Qbt6q9QgpayZRg225RqGnpHGWt8mToJj2spfBqTj42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Cr4z3n4qk1tvpvX7LwaqJCdx4X42DR4rVYaETxt817HQMra3yoccp3cNTXatxE3uUTEjBbaUhadLNfdbjobB71",
  "key1": "4qU2Bg8aG6YL3nNjuSFbTgJ2QtWPYCNayhSkC6yosmqSxLyxy9YR9GNnNDKv9J5ypJJH8gP46G6zGavkQrmbmg7z",
  "key2": "619sxyeKUTaUhPPTd2dthdYs7aEqSWRJ9nA2MAHDS5JUM4SDaMJZNDu1tGiPSk6yoEScbw6mitm8fGwDWrcUFTDP",
  "key3": "2TdMLosNqbkGsnTsaFLFHeCdniY64tNp4WWwsip9pzpKP42wF66rBVFAf7gjbT6i2Yt7x2ZLi3zUDdkuouDr3z1w",
  "key4": "4ctea5MzBEdfkAfr4ud4nSbSj4P8qNnuyr3SkRFF1Wnu7gPqVV1NpQGoB7LsfW7eiveoeu3oc4TMgHpJCity9zWA",
  "key5": "Gtdyy2ckdP9kkvKtdYuZvK6EsJgM5hFEk4Uc6y11nDiVgtxEYuZXez73YvQYkLBA9zRsA5quWCbtxdsdL97n3z8",
  "key6": "3PaypyfRnCTaHZwpDytzyySiFMok65DVcmwNPBHx9njgH3zNxAvmZLUK7DwPKguApE37qoySkZjnj8og4ocbXUt9",
  "key7": "2vHXwsa7bwMWw3sZtPQQyKRomP9F69x2rQdyQwHhqqgP2LC8BpTrz39byqXqCftiGSCqSX9jZQiiQHgc99RtbKAr",
  "key8": "3bBj8hySXCf759rMySCGTN8vsELo8HzjCuKrGAkLjc6WBe5AvvPSrG1XDk9gwkiQcFCRWdn9pYbPxE9G21XmvZX4",
  "key9": "3GtAbxNMZUAW2tdhcUu8EnfoYERBdnSfrn82Kf9qPKrAsJSafduxr9cKZs7yy2UTVuKFghmrzZvqL9z1Zc23sbb5",
  "key10": "hqei5yocGCkvCRnW4u6eZe3F6MUwCmtkuagMkGi4o8BTy2gJqPiBNCcFWwoNYJ9B1h8pPmsR8iEeCt1UiBCsoyM",
  "key11": "4kv83ktSqRGR7yswf2BT95KArZYfZ3oUWKVddRhMGfMAHJ5CojnDPyqmLsD2yZg3cspjPWBgCXKwpsbpcSWS2Dts",
  "key12": "2gaV6QuFq9KRS5RQ7zDevGGxUucQ67zL6iSuHGWmydErRi5oN4CJJ5fkbfFUU2VJX99TQR5s1zexCvQREnp5jsne",
  "key13": "3rCGuCKo8y1xvSE4EJhJgMnHi3mtwtAAeBDPhRTVLyn87duDGH843rSoZGufikF3e3cotxMEcmszCzirXyVRCYjt",
  "key14": "4sXkSJrSycdx1etqTbXbwV8T89aXPQ73idXNjcQTCocH61sSSuKkk73WE1FivoauEiarLykmYah5EiwqMUrFWBaF",
  "key15": "5mRTRTTXm4yh7WjrxTZ8Se953Vp1kee3xsN57BdSAzZ436QpadDBbcBKYw13SoR3TuPGsLbJ5Bf5u7E75dged5iX",
  "key16": "2KXoWUhJFsZ3uePwQK51faBbsTtM2JArwWNMYmxzd2Z4EtiG6cgioAvsN2vpA1HEKZeJRUDSh7ppv2MdKb4o41Dz",
  "key17": "5fRGZRirBvGC5t5cN3vuWZGJhVeRinJnC2uFcAdjdqbr1UzyqqwCoe89Xp9wBAfvsxtUz3PQLtJBBcBbPMSk2qqm",
  "key18": "2wZjJ3p3Q5GMTLBHwNRn9ZAWHiTpWgP1gHui2boa6Ccvha43kM5GgY9oNDnsia7DvNvCtscU7sCwCJX7FWvTxeeZ",
  "key19": "2NPnvxWBNvh4bbg8GH2znaVvYqNvCbwSjbbxfrdozjkcf445ecJq2iZ6zoBC1KN32xi7c7sKEYMHy6CjVU9ma8PC",
  "key20": "5ZhWcQEeBxERcMUaockXAeouyzzJkU7pCDKB67HxiLcNnE65nU8ecxhW8qHy1zJHpA7UuXQjoH1eNvohas7cgNMn",
  "key21": "5zpowWvHi6AmkommMKWq3KyCxTB6BSLiHRf4fKZ31QzcCYYChHSJF6jiXVQZEQuRbUzdzuB1dQ2njTnZKwzuRz2b",
  "key22": "2hyinMsk6tUJFJFAdkxDENeJe8yeABBV5J5u7j1SdNc5q8wmhnqGpLzmYLc3JdZFnRgGJyGiDNpQK35Ywz7H43m7",
  "key23": "36c8CB9a7ev4WTWRYb57EhwhchV5ydZyeukBLrUUJ7tFo2cwhVPmDqWubc1h6ysg17X3KEJAjnDYtCBDPFGPfxsV",
  "key24": "44f8tWFPxb6GJ74xzzmrFDgshnUYQ1M1kSc92JiTmh4UvnbgUMkreepBKsvckjx48wViAuA4o4V9yCd3FHRaFd4e",
  "key25": "2tgUsXx4PvZNx2S3zCzwzMwF8jcGcFJN1fcRHRt7sYTcbUwyh6TDaY8uUzMzmvUSALaEoEGSdZ3km4dfhdCtPJGy",
  "key26": "2SsmBLSHM9j3m2DKkEVQh5cRSpUHNN3uDQcQQEtDCzudzJhAET4pwApY8eDg57XpQiLpH9bFaA1EiRYzXxTHP8f2",
  "key27": "26X1U5cE31LUH7zkkstPgvfn9uKstouTgWoceiE8TKQu8MTAp7qjkHiA1iVskskFwAHkk8jjoxKiD6z2LMN7AdPe",
  "key28": "3PsNvMP49wfb4fwr82b8wKPotDu6rNrBKV93CfxTPYgaJzspWAjRtucWAhS2qnd6WUDqoz1BwP7zT5ajvbA9CkVd",
  "key29": "2DwYEees64KGycwBF7KYzrHyenZ8b9Z5urFFGE99iNQgHc7PFghPtQ9ksDDhUVkAVNPwR4QMb7UDCo9B94HuuELU",
  "key30": "qE5ysnXyrHQDSz2AzsTWQbx4nokhEvMbYGgXXwMNNKsBtBhgKFq5VqcH3tsToCKL9QM6SGV9LNGFskR3GRcsx3R",
  "key31": "4ZvobKM2fdXhZqLU5pGSK9PsYnKdKxT2sWvqK4hx4bWc33jwaN3THVYieGQr6zgS8pczcPepFmT8q3Gog65r6XUV",
  "key32": "4RUNK9R4bGvo6wFA8TrA4WJe3X6yP8y3tEBPwwB7TqrxA3paMotMYXzWWb4Wp7Gyo9XbJLdDjV2gYGFTXAZtDZTF"
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
