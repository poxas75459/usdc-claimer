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
    "3rCPBZeNPYYx1GCh9VDG2kHSMonKvkB8jLzYmzSJwbJ6YzkZTkHNAGh38qo1GVv9HQSp4XS8Gc8NoVvuMUafvQaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjX33CSsp1CDtKir39A2MmvY6JXqLnkFhjhZiXoywWaEEYFX3C5WmTHt9raA5ayutLC467GdSESYRhU9CLJDJzw",
  "key1": "38e8So5yeeRyypD1TYM8iNRa1MsqsySBuKkj7UA8VfzEZBWxHYVxFNmrru2TGMDYZ8rtgNBbZQf9Vcmu4toQngqw",
  "key2": "3tFakp9ix5x8wLYmY1c2fwNcR5vSMXMU3uypeUX7BqtHngYZkQWG81zx5B8yQTvRzZo9Xcmdrmo8gqSvYm8a4p2U",
  "key3": "5Bc5LvumNBZSETvwiKqERbUasXzPrGGJuGrv2d9a2nMFt5yGnW8TsETnWdWN7CafL9KcSnQNU1xsCtgkPFoSDLjp",
  "key4": "2KLDQgF5DwBmZp2ZWNjHPrt7rTZKE2ea5smP6ZmEueyYxyuaMqQma88QgMxi9ynCxS38JURZ3aobvZtBxVKX5Sqo",
  "key5": "33jdN4d76kH3SSkyj2FwoJCM5gAsrwdAaxiJS7pQMvLtyeAE4Q8G7wTBtwS493biLXXqEDhJAQr5e1hbQJhobx7G",
  "key6": "4vqZDK2NjzcSmDLxR79TJGAyF8q8M1XbbF7AM4Uyi5GoJufVmpqd4RnsTqWYexUnLAt9YEdccZ1cFQXqV5Qxb84k",
  "key7": "2wv8hoe1rndYq9nFx47y3YBoNkBtMVEGSFcLZKVckvge1nEoVShRsfDvyLYcueGRoyxfsLFj5LsvM33o2swLBvrr",
  "key8": "4cNbDkaTDqBXzof646TQpuq1q45knWMhGfY5KNi9QHd465Tb4dZp4GVwmQdxxnJ994UYb6AFqzvNFzDDmvwztfcW",
  "key9": "3KPNkxygvvqHHjojet3BWfGerSUdDMtBMyH5Rdvns2wwHBcYbRQZpUDGJwknm99Y8ySwgKUgV2Nh27bKLWHYd2rm",
  "key10": "2XR6b5xfZ4XZtkFHLeJTZV6oNaAfHvvk92aWxfpLxgizJX1biW5nfAP3qXPtKwsxFrW7Y4wDugc5qrUmsx6sb1UN",
  "key11": "5upHayzWykXuccjsgsepEkGMnt5KYYk8UyEQ7nE2jucM32FHxKfg9zgNBreWBBMvccyVHpg51G9189oE11DfGepg",
  "key12": "5BfiUe5eCduky4P7Cvrt3BWe9LydnVcHSzHMzXSrD1qHLsZjDdYhnkKxZdHN9Jg44Fp4fWq5ARsX8WbZieyUd26V",
  "key13": "2w4bT8RKfVwQvBNBP3UzKC4WqrDJCZ4LwutaTkmrUYywTnAKVDQoDYFgQTxYKo2zDSovUNQMHgbcCcSRt448oqPc",
  "key14": "2qbgmPJBgxf2qURdsGSQhGVjdkqnTGtVywQK32xfQ3EZFSw4DVGr7iftME1h4dyV3W5jDy7JnnVxSqLWScTxf6qq",
  "key15": "4pyB7hgwLVjDkak5aSHcH3ghkSHTS9HWJZVF47bmsQ38gSngD34iu85NC4Yu1PrBjbQKN3FjAQi3wceFQb7j3w5N",
  "key16": "2QPxtFPqUibeDq6ibUfmKRce24UKnjJiA6TBtcX2RrTzZDCULHPAPjDatGhKwo1soGgAD1tNCwos8u2SwhSc3egQ",
  "key17": "2oJR7Y3v4RbwHJLLzYmj6RsrwG7dYnhwGtHA2q8621gvAhNmZ12aFm6aeT2NPZQSykU3VkzNy9V6n4qdhuiLGDey",
  "key18": "4RH3Ja2cVPfT7JQnqTJRUj21Mrx2N6iWNHkgTqTxAqojw3GK34mQ2j61wjE95z3ZT75bL7ogwnozDgwTZr5pvrDy",
  "key19": "2gsLsuWAqw32gYzHECwVcteTD3avTic58YokNWLFSZ2nirXU9SAp4qe9qFosu5YEL1NzdVJ2dGYRSn55u1PRauPE",
  "key20": "oLoVPbrvjoGDaG9BUKqeeR5HTWM8YRsgb9zi2PGsERaF9tqAEnGgYoST5RSjWajBeAD5f3jb6QhAwMEZ5riSEmg",
  "key21": "Qr3o7ySPvJKiTcVskS3xjaeKpb6ejULZLqDr4CmLFmFpEpHSYfekS5ALpxHBHuTK2TfPcpBMk7vomDt5uheKaTb",
  "key22": "252ppbbScwHX3vodVkpc1ZLxyuCeDBGN9y9TQYMUxJuDEtUNo1UNMguDPFH4q7TSn3DgmHwD5RHNwK8nBBfrHtej",
  "key23": "44hxcWq44a6JcfLzu3qyJP7MDH4U3cHzEVzQURZLD7jMjYjHvN1HbahYEQzvLXBV8aWx2Dd7GTmJYNMLxf77jug8",
  "key24": "8YPbRu4oxnDGZXM2efy1W1TdY4i7rK5HZs4XVHxqZumVBsfPP7vgNkpyNpWqBCGXw6duAB5vVPs7LuS6NF4BryR",
  "key25": "4NrK7dLmTjmhgTCjic4XmTHpUppuHnptRcKj8pgCfQpncHR9ZpXL58vJRs8CF2jUGSfMfoHsvpqk3Nf5tRXdB3mh",
  "key26": "3BsdNvFMfaH1we2skUa7cWf3mM4NnPFXHDwiNYLycHxLypPWBvWPSZiRSAUgfAThNGM9rSeM6DqPs58GDccbjC7V",
  "key27": "3UkHJwz1fRcCe58x6oC4C2T5rpwhNcY1bKGXgM7GV5zAcbheD1ohnuuczwt922xLtxYoSkhXQFD4ANejSueisSS8",
  "key28": "4abVoCBLZ4W2Yz2jushQqUQMXDJL2pZnLgumtPH622soeaQdvN6GAJBes7ncQt1mhhXDZaVYJh4BrfTPPKQmLTJp",
  "key29": "5ze8RuJVwBNJfkTCvxbgve6fioGv9AEj9DfnoaRyQiFFuDnHNpcRvVGbxoTAyDzc8CoWvJVBJehquydbYZsyVgCh",
  "key30": "2rdsQps7bj5gvhKPoSuCwvfBRqwZqR2WxkeNnXVR67LzVBoVbEpUzHYNEsh2Q4TzSPbqsq6vyfV8SPNybVzbzTrg",
  "key31": "5aDr68J4EzJAu3qpa3RXa1cMd9Eh84mZSPdksjbUDpnCraKue4kvXCTtV6EiT2yLDNC2eeAzNY486x6RvH9nKMW3",
  "key32": "3mdNtTNGLoZmvMLz4cbxrP8gbcps6MWfvpyJDPeDsfnX94JxmFM3Vq5W6jH2oZB35JWCXV7wEdzWQkxsyJMbHbe8",
  "key33": "3MT35Zn6dYZ1G6bS1RgDner9RdcfXKfHzANYEvkpPDGZMaN24BhYnWEC71XSp8sKNsN55mUNeQNJjZmYaoVf5nS6",
  "key34": "2bJ3f7EdqKqX3sqedFXL1C7qzFpr1UVJQ5NmjEkbrRiwpRxaySdgEeEtAEDPw5QDXjLnfCNDu6LZSimsBrKoA9TJ",
  "key35": "4LQBaYaXrKf87uGgPpxdHpRLZA63T42eSxrPN7c6ZzHkzdxhN9qPGCpqYRsrSj9eZowKmncawHoEUNbJxoXU8FTb",
  "key36": "4mh3RWFFJkWKkgQJmTTuauPtNoSXEPq3eMAmJ2dgge7eKfkMik8xZaARkxYWwbUivpYKxLFqtL4FVMd4FRJ2WKG4",
  "key37": "38b5z21B4vNF2cV1JFJ2mTLiFz2dkBgtxKw3hWFj1nZA4cJvNyz7emg6evTrcTyCSJQusKzZ9jBMmH6wkNoHUWoZ",
  "key38": "4JPmoVYqfXupz4J5LoAorPosqSTMssnYJ2pfsLQJA7KHd32wdtrebvRbaJ8uTtHxVFpeiWYwAMvob7aChqmSU2iX",
  "key39": "3TDeS6Vatq24PhVka3DK1U8kXPVFxonSDL9NJsioTRL4GpFRxDjPQndLq5wyL6rNeD5gr41YpmjBgbvNLkqkDd3R",
  "key40": "31XnyHTyyNMF1eJ8pVhWqCMhoaN3orYRj252gK4Yfrvucxbcqutk4w73zdPrCme3NnNumLbZzx7EYZjy9keSDyz2",
  "key41": "25hDiHCASsUAC4ZBcmv3MRPrPDB9i5Rn7fWx6k7oypGow5TcgBcfSV77TPWFJrfUX7D3af3fYY4nTcNDLBh5zUho",
  "key42": "Gc17LE2rNct2yM9XpNzjZCiigPmADgSAzL3XECtWaAzUnFKENrkaQ4im58eowiaKJzQbF1mXcd6vJdrYF8BCaB6",
  "key43": "5yjbNkZeHxyrEJ8bueiAW6r5MjJ3Ktukor89gtB3o1B7Q9wTByeFEzrBzXJ13Xif6LzU2Jee5nxhYqB1NDyGYrQy",
  "key44": "3LS8feLkKV6UvowpywGSkTAjSpaJHSufL7VAe5YWWUjuHvrdryVFVNxzKfrs22jMwdJiEvf4yLxf8S8AqVw3CjWm",
  "key45": "5T2QSzA8DXb6aGubdPJ1q5vXrdS91pWyQnh3UkDLTuqN7bDUxoxpe4bGs3X3dMCEJNrz7HXA4xcVgZSJM1jpPiu6",
  "key46": "F4cHFTajpcgGwCPhb4TDXmskwa6Fi9RTMhnUgi73oVKcPazQhv1mUTjJYVKzqEaeuQsXUz1iYuhM56P7xtfA6c3",
  "key47": "TcZ1BaPjo9WdYsekDfXeRBW1ry9yAnu6SdkCMEtc14NDtpVF5kEyndDBw5hFWBYPUXVJJjeSuKzrzFKuf2EGTTT"
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
