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
    "4qjwhYH4KafkG4J3EDjrG5hVxU5o2SecwjCEyVydJGU63dGxjcWRSDsaPGK8B8WJWegwLHS4QUiamKrxnHer8L3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsZos6BKCbD9Z5W7TnKoaD6sKFL8MFncieebP4A5wrRdP16Fsr8xmocbJLyki2tbqFYVNgPWLfVLxpYR7o8z4Sf",
  "key1": "WVixn8Vaf2qyEcsp1MXHvcyTd6J4YRZo14gcj4wV39HeJqsmUMX9v7XcbYc3r3YvkFDE1z7ecKug9TdnPmq2vCM",
  "key2": "5jeBbkGJ9sRNXE62eXn3px3kGpvjwJ5EZhgoyT1DmDsf23syK7JVeUrVWNJrFLPundjKCKstjWWSpyvYX3vjCgK1",
  "key3": "5THJRkr1ctA8PNRkZekt85MagBiA8ntHcZWJf9zQQB5QomjNXsNtc6UeECNaXb1y9pHFGvJyk6ixy25TKkqfUeBp",
  "key4": "62R2cEEXYT7SvqQpTKLy5xaoD4GeaNqyXnbmKWnmvTuWrSqt7JQZqxnHVRY1vaPczmAa2G1onoVG3HmKAnbmS6P",
  "key5": "4ycE9MBhKBBFf28GyG3z7kufwzRWBjzRTSku7akmyi7qe14wFiMzyCDwHPMRSUMwHb4ofTp3CLaxiUrEfK6Rx15i",
  "key6": "4GMsfo1oThCZEmHD9Qm8RLW2NusYtH7dQx1DFQ8Zkxa2tfCxibMLFfTuJiHpsSmbAhFVeUf9N9MMX3tU1SmgN1sN",
  "key7": "36qxNoaxyM3u1ph4NF29zRbEUFbyM3ycbsMaKDRmzvCFKddzVHxsvs8zCazedjz5XdT3xH7snsXgq3XHGTZY5pyy",
  "key8": "3Jfd6wD3qAxdAX9A2STCLTToy2kCAQK1D86bjaQMALFmixJq2ZMSw9GUqKGHgoaiuYDXbjLy1Hx9uh2ys5eQWRTy",
  "key9": "26mT2A1tFt7BJi5JPPJvDEu58RVJfdr9PgMSQvByyv64iAv545L4GautuZ8Ck3aR9QFAaFePKQxmVsJCnq4fHtdk",
  "key10": "2PksnjoGZKmfRyERhe7fQCVEL3S77R8vb6tf31u5QVTpcCADgEfb7DSmQW3DD3sjEMenZTNzosJrttGQKrQzZdht",
  "key11": "4eYKD2XCA222h1APHvm2ZEVvdo5kCpGqXiazTCzLsdyjxCFf6feX5nQW93fpPmQqRn2zo8renNTTWWNVmCB9w1Ap",
  "key12": "5k7vb56PQtp7we2SWz6uGHY5yoscRkNcnG2Kx88JyXZ7T8z5A3ztqfMXTWz3rSd9kKssmtp1NL2gmooU6aLhC5iF",
  "key13": "479jj37jS72be8h9a7sXPRWwLmTRpBeTGYDNR18xZeJmWevXzGSkUHxYyDrz9DVZbgHMydmFwKZxNC5xmycBCa9b",
  "key14": "5yVb4H5TQyPJTe6eYj5spCejBL4ziCgjeWuNrrHZt261R6GQdTsqpnf4G88qwmogcyLmCJpiUp5SumrpiVmamY47",
  "key15": "LYGpvg2Xfy9EQDL6722CK3w1rkhSFKMLEWxRozGvfiV65NND6Rtsg1kW6ZvwNmK7HC2XpJ2rpkm1yjhFJtaJqfZ",
  "key16": "47Cp4exdKpT1ekBAp2GLaGEjuRCkUmMxCKaa4Npt2pyNypDxkM6HzFUWygev5FQfZsUPQxaPJAZosFYZuEdHQFTx",
  "key17": "56wcKuo5D3nPZE5tufE4Txkjn1CX8obzCvKuTpRVd8gViKebBu9p2dHnwLpW72KtfDtq3UxYXiV9ZmxqxBDZHcSn",
  "key18": "5iTVTDogcwVKo7TCW5S2nRJ21HeY7SgJa7JuMzER5zcFagqG4xVPDd3fU2KijekP7RS1E4Bq7dLDoH8BG8q7KZte",
  "key19": "2prMLNwFH3nmQYx4TCmm4YWqoWP7eVj7LdeuHiSnvQJGKvd4jqXyyCYmmgCvoRFC242V2GHaxuUmjufKJsVTZqwp",
  "key20": "2MDfWXqw9rrVQrcc4ZDhEKo8Q5tmMJSViAmwR5E9sDPPRRB11zTCHUNLraskEkHjRrDjCNLhGJteWJwJ3ngXfXQR",
  "key21": "52rvMqBXhjNWYmpcYVpF8pmN5RmNMKKnT4RTdk6FmitTVQ9cVQGpWppQ2m7XAdSwBNdDqxpoeWwVPURvrKXvewDT",
  "key22": "3papZJfQ849iRr2oPy7LNp8o4hEHn9XQ1Y6tpdn9uTz8MKqc5F9fDHKnhSK47ZCaApKTGaR4oSUe6KNQuDszWEBu",
  "key23": "uo9Vprea3CDX2pM69RvoHJoDL23CAw2bCnR7K3YDVhP2XTWqiokxPCzcEBxFtmNEmAVNinJwZmCpg8bg5LaVEsi",
  "key24": "2EcJ3ebabKLiJviQHCUtq3mcg1zQJK2hpspf3Z2etYN3HXhV6BrcAh4ySyHuSb6oEryUPouxY5UH7vtagVeiXxjr",
  "key25": "2jxa63hhi2wtumisXE6C5rYPfLjMX4uy9fY2SCJBFtcpPcmDBJFXDu7mNuS5yfo5UxnchMoziyF2FV6gFBW8wPds"
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
