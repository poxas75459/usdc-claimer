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
    "zERLrkzvGFHUczvcudmdUW64cnPg5GxrJpRi8xNZw2ndvhwoCnKgp5f9QHF4s26SugLqEefxE6id2uQNTw6mL2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NsytQMVytjv88az8hunnfo9qBLCrfzzjTmRMYBphZAXZXYHYMSSAQoWEKgW2NJVTmxjgPbxd8jZGDPEHUGi7Tn",
  "key1": "4MhFxiKJMYFuKpqbE2W6rKF3wuLC5w8CHZzbKUGbuegeyaGUo93r17hxVqB5hs5DAuZGEH1Z6SnVVEPM9FWmEebR",
  "key2": "2aPeQLaxktvTzcQJKnKegh9TyzqQ8NjzcV59RDQihTGbGCu8LZDXFe2wmAi1xkeapaPd2Q1e3MjH8oo3zXnCH3FB",
  "key3": "3bHfiiGqNqiCz832spsVuY6YiZcBSJhBSHXuVAXW4jYk5sZgTv6mGPNd3JfmCceA6Lb1dQTkxx2uWcZE9sde7Hut",
  "key4": "57MLVuofvhNauzgNfCozNB6pfQ4A4F5CTmRVCvMUzfM9zrsE8XWUcwskKCjx9YfPP2PrADPNN2oyXDBHC7dheRAG",
  "key5": "5WozXhvRDfwUcAKGkxKEbbpqGe1UvrPrEn7noaJYdir83XEbStmTMwBUAf6fKRXD4diWtUVaP71s74fUWGmMSbEs",
  "key6": "4LbZKQ8R7M9K1jcwDh1Vv2wEq2i6enhmSJ99QgwpWcFYvdPnhH3q81LN4ucHWPyTaX6qiQBRJMVyvTvBQRRShD7A",
  "key7": "2vJFns3EgFbRhDvRhrMKsReWosJWgHJdqPNA4Dsc9Dd4EUEqtraXpqUaUbC8FYs7a6WUfU6YXjopX836ato2etf1",
  "key8": "642AQecDaEPrCfGzMweWZYAaDfaJCz9WisUJRbQKY7cxxhwwTknFhfMB8PxpL1dxprzmnXdVuc85xTfVYBVAewf2",
  "key9": "43oJfFqh4wGci5D766Vnq4X5HeE914EzUq9RZZ5TMprTpHn49nTWDRuJgsJu8GSKsCCNUm6zn6VAA91GNMCybufn",
  "key10": "4YM1augnzKxPu7J5YyA8YYyyzHgwkDk3S8gahQZrpJyXzdtQhhnRibDfsiBFZMQp9JhZUXSYsDwXtSybXpk7XnLY",
  "key11": "4XRomtvAspjy3zLkJxnWaWAQm3sah9AdhYjVJVWfUWcHVgpaKkeAF47rTK4hvGomtJD2B5W6CRWPBmvMX4HGvUt5",
  "key12": "3EbcoNsjUwTNm5MUKH9mpcXuuGDiPvmRK9RTTRgwK29St3Z5vycVcKZaokA6kQo617MfUzWiLqDwfvtpV8xiCdJ2",
  "key13": "4rxc9xByHwyKaZxv1uMZcAAcvMNoZDxU8tst3vyCzdyP5JJmKqkMaWABQ9oWgV6Z9Lbok7p31udPi6WmpNYp3C9B",
  "key14": "58TQPYWkeRDz5JDFraa9C4WcmY5idTCL5Zv8ME9gYHTFEzPfPJh5yuWmFdJtnTwsdC2bmZak9FeZ49KUEwN6hCiB",
  "key15": "Jju2D4JCuxfxNzSFqi6x5ofiLfx4eYWcpLxLxHeosj8ePpfjGae9GT9YYGqCahDhCNXMmnNY3ts26iXmwMFJty9",
  "key16": "353KfWzkzQhtjxM9d8SKqcPtjVJbLk9Q7iXLyJS3iKMY8u9sQ35in4NWK7eNBVD8CXBhxrA1sTsH6kygwKbWRCkP",
  "key17": "KDMVnoYoZHnN4R4qF1yZ2zAj8gy8pi3xiDhSzXq8e8AKCTCYqb4aXYmUAzkGtVyX69DcBBgTfHUTdU5thJNFmH4",
  "key18": "39bNmGdZioroqSeo9gwyAnDS3ecYNMa75zB4t8fcvyaqiTRKLeiFPvgETL64yjqQVFANgtTFfk8N2oc4pRJGnNT2",
  "key19": "4YnPHS7r4wt2LEs3CUiJ2xo6DPGH54ibDwdnwUfj4GtXhDmeLZVrqzKbs6GHBUBSo8XZ1m3kLUrfSryqYtxagXtB",
  "key20": "4nMh9Fzn3BoEX2K3hW5u15pqH4mGaigKiNDcN4m3d2qu7QF1wS3TE7YU7mUnHNiabu2Ly8mZrTPwxgroLojAAjG8",
  "key21": "66P2dXqA7F4t1MUh3wSvXEnhtXu8yHD3kEJe1j9Ly6pyq1gAtgDXDUyTKWQc6D5MNNPhtdoBGYvXvSSrwKfuaKth",
  "key22": "2GDLo28p73aPnfJYSjQAgKjBEnBQrCwBB7wg1Furh8HBJ9khVWBSpU6x7QRqLFLoJUgMbdc8fCeScJaXnT2wBFmy",
  "key23": "EsPCaJdsd365GdNXRdZb12eqwMGqcaGWsTJHzrWLqtu8Md91S72Ui3gBtdSf2YT5iFCJmXpwMrck5cUeYvi9aZr",
  "key24": "CunpXfhtTU4F3X2GRZ2rMDCnqoMkcgGEdfc4RjzAA69hd8EtGaD6wz4RJzoniimwkrFGX6Jde8YSGtmW2GarkJT",
  "key25": "5NiuBqUtCziDowSqUFeMbD9zzXScF5tQn9tucYPz44fBPexeUgD7Pc5nLDog2Eppq5p7NxQ27kwvLjvPsDebxpkT",
  "key26": "5D7ReH46Z7UtFMUL4YYYybhGrsEcDXsCMoYupayVBkBHJL2bpW9UjcZR9XD4Pf1FzMrcifWRdQDQiZCRDKdffPPt",
  "key27": "318upLf8YXKmVWVizx4MJ8LfSWG7hVCSoHPYVYV7kZ3TCEQdNgG49iCCJtdKP7bomig7EFz3XqH8wbpuspaZhjVA",
  "key28": "2dXpnkQsTx4gUp66e5yVL1FhAQGn1UDE5xyqop1RmfrDLFFpYHPc73EqRsUptX6BQGBiEREGC3ViUDwphwjuhLA7",
  "key29": "3irXDwLR6t5VsP9EBYLfdiGTHJAuU9Am2TYFkg1UiDsKFnnXseKhi7fQtxHT8kGZr9DbD6ANfRRW4JCAyaz5doo3",
  "key30": "eG2phdVs8LSzdTJ84gVbbp7r4SUSyYPn2P94Uwn8HFRmdkPNPyWyGsrzSARXimz6CSuEJuJYBEHABNPTDG2iB4N",
  "key31": "NdSez2XRTBGhPSHMKfAAHEjJc7ng8i9JJf4Bg8fFJUzfhP5JnoZRMVE3Bxh4YR9RECkpBBNtwy9tUmtGMyPKnBW",
  "key32": "5YYqCLV6UUQKYrATRRokjNQiWifKGp5H8VRVcUTWJvWzDM4P1v2xRupQrB6dK4N4nDmp1y1RhXXVQvseQ1HPBvGx",
  "key33": "4Na9Quwbp3xbXugmKPenQKvoVAyxbJRks9iEAufGrnMn44JoHYy4J3eEEqU6xX7wpCCnSzUXqBuTdhwkT4ybDxLw",
  "key34": "4Nkn1adp6wBZGQohAJoEK1YCFbyrxYdo4PLNdQ65nqoqPWWVfHDkrtSS8rbtep5beEL3s5gCJvySNRBsNkLXsfog",
  "key35": "4oH5csyKWSTtbai8U31pWTZv2n7Gvd1SqbJJXdFG6ZBTadYYzUC4m9BPNimMvZnmUEDagxNMcLpv2KMuqfYfXXFs",
  "key36": "55W9oCB2ec8AWBRu1jLj9KBqebEMRkUb2fM9oUH6AaY5FFi5pbwDTkVL5aTtcde58oocgiUoKxGmDm8SUPiyFVBd",
  "key37": "4pxeBkzgPrPnVsKa7oDX5jeBDo7WdvQuH9ygz51zn14PeQo6j6k6Kbo2te56kn4xHgS6P9kSZ9ytxdubYWhzs28S",
  "key38": "RSDLYnwS6B3t1EFoFhuucoiqJgtQYxJUG2v2StoKDSjsb3HMCAc1thT77qnC5T8UaKL6dML2673L3svWhz83Wzj"
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
