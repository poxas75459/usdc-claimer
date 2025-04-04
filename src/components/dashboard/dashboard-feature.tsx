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
    "4Y1oPMpRiC9eH29rZeCdG1jtiJCoMAQCJucSfqDCAjPwn9VGDXqQjhunxCzSGa3tzTfYxE9JMX21VkVFE7TXwoQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHb8SruMRNdbbbG98ymRTn4n8RebQ2n3iRBs5yCoSLQnmUK3Nz9j31eZ2cvcPnRXZVuxr9psoXyiz1CoXTXpgUM",
  "key1": "21MaLd3BSja5QUAsat3Uycw9bsUPKxRkGHQSWUzv1EgZERyUEoqDjBGzCk4XeQkEJ7KVKNYKyYNUFLs1SXNnLd31",
  "key2": "3MZKHCjaYciGVYGoFcQ3bneFrN5JHT4TVi8BmnCXEM124pEpuJHQCJmBUYBdNQmnXsXhnmevmaES87Sc7oe8UvkV",
  "key3": "2Mh2ZbY7ojZke1UPwS2oxn8MYoQD4umw4mM3EaUgWtLZyf9yVALbjFQgn4VcoMhrkcxbmJFPJZGP2iC3ieJbajib",
  "key4": "4cvtWoz5UbXjRH5pTTxcNsEN3Q6HWyCGQExSrNCv1vpK52jugmK3yuoEXfdhAtB1p8XBakJnjVdck5rCr5hiGjpj",
  "key5": "52VRpXAVgqJ64hYXC18LztoSfsWy79dME4XgPFsjHcR7hvHKo2gWijKYCHCmXxMXJvp6T9fUCADs3wa3DtWwjtfU",
  "key6": "shcCWdWdHgoBa7LeVt6DM2GQcMZ4AzYPBoehDbz3XukXBsvWuuk29otoj1zYWBpy6bn3cgqqYSrnqCo9T97D5cq",
  "key7": "4h7WR6J5ByRZcK6ThkHdmDMoq1TYFKiBcX9iHA1xCV9EK9HrJbDzLwSXPsKuwLA84FbW1qke6Hpbp2ctFZXnAE3V",
  "key8": "29wWByUu2ExbJqhMCthonVBpuqduNwoi6bxeGrnBGYSTJX8eHngRNyzVu9nB1GzCUW3WqYJo25q3QxSq6QZCBAfj",
  "key9": "3b8gCpgHraJAG8LTig2VX2N2xizKfinoJXuZCwyCk3G15r5ZjQzEzZ2AdgpyYxU2hYupqsaQoSyXpGkN1s7i6sci",
  "key10": "5nSV8q9r1nLHzZxa6kyKCHukJF5MFxZcgdwf6yhK1VJTPCGwEnPjgCGLaVV6pfWcWBtJikrwPLaneoTcDkbLPJXF",
  "key11": "4yYkfKKifsgcxMjPiEPtBFmsS7brjL6u9vauxTpeeg3zgpf2bYzMAQDF6LLpL1ZTSwtWZ6WrCq3uV4BPJS5NTVFb",
  "key12": "29wmgk3ow22VYJdHn3AhsMGwwJqFpyn3F3Cd5gXsPzveDTDFCZ37vSb3VY4ZzZTKV3YzDtkhx7yfNLgpDxCUCEcu",
  "key13": "61nkCzMzyy4x2jJNmF5ygQQPUVksv1DS7F63dE562G5uWtc9pK65ASbm1D4KhGi3WSEPCmNLKgxA3J7EHve9621s",
  "key14": "wcomzf2fR37vzrVm29M7nh5tzR2CLvuTnHVQ1MTBHLzUs9qAy33a3U2PpA6R3jGprypBEhiYZrcXs9juZDQDabs",
  "key15": "3AStUTKSLFiNucqLrf4brKZEdaQHKShy6hwpZc8sxsrHg4eVQJwKtvm2tih6s8b1jVspaoRihw489Dty2rZX7qVB",
  "key16": "3mbY3HaMrCJ4vmzHEiujkounMNvHvh4dktYTWaTeE4s3uqbpKBjjxPddyML7SHzUv9N3umJVKTDpny9zvxcY2Qrc",
  "key17": "51CrcdgTav22oDKd7ku8GCm8C1p3DxYeMF2QZMyk69Pmj9zU8G1w1MgpZNp3LNbWB8fiX5pCGBTQAqbpDvChBhdf",
  "key18": "3b1tJNx5dg7s9DMa6vqHMW4RZ3J9kyWFhj6ScvBetqF9ZiCx8SKybbu69GnNryBhYRn5EHAQBteWGaLthGmDFiYk",
  "key19": "SXpQrV8Wk1MXofjmUXyVJ2EdrSEhj8GwNmth4fguZ1RhPcjw123f4b9Redz53j7WxjftUQ333QJw4mrDXgY4QMT",
  "key20": "3yo87dvGn4b8sVn4QGnmmRYtEeJPd1NBAvqxnPwQxjypVJapUAgYwANkQRMMUn6GqzCHnFDfUFZ5ktvDWGKxeYC9",
  "key21": "26F7xSYKwPr5mb56syrHAV1NWaSRA7YGKtGnKWtNV5U88DXLCfk2BfxHubX48keDB3hFMmCH1E7GU3xMHGhmVUcj",
  "key22": "2dJXReavC6qqLm1FD9V67tWhnFMH1J8KcScKhHPZQKEjHARaC9AuXHXYLnj2kMDtk2QaaitYzUL1eDr9tGjX8teX",
  "key23": "Vf9Gs5rJTREJDzKBY9MYNAGbBAbCpsascMoZF4otsYDMvqz9QJwghrBR9UJA9RBPY4QRaBtruhRKCCthy5uNWsU",
  "key24": "2ZRbwcbB3TeYKiqDdTEEhFi513FZ2LjSASJYe9CwNjA4LeaZ8SSJRh5oN5byVQVSnuDshzoiNr8wSYKEJ5f4Dtvn",
  "key25": "2K3NWHyGZ8X8kDMgzh6iCiWbbBeY3mjUdiAtDD2cimqbyipPNakBPNB6adeqpP9YjmBuCiFg2vVnLc88fSRdrvD6",
  "key26": "2DzQaHpJ6BXjSBNhoxpauwx9b8PEPiZg7fTcMwRdcFxUz1CEHeaxSmCixpVKsXRK7zeitwWh14NQgnz7wL55jUWb",
  "key27": "4tSEYc4SueR42bbfWTbiNeyKutaUe8nTM11NXxrSEMn1t62zD89mF23E9mET4NW8HoR9CbzNjwqDTJLPGBZofjoU",
  "key28": "3Rhw8voWwuJGioZZDguWQXzXHAnNjw6diG9wn2wSyf2oGri2MP8ATNGHy9RLu3ymhPePzuFTdkspKaw7sXhnxvrD",
  "key29": "3eXNQbxFWKrhwVwdjcRhq2YZZPTjPJ7j8M5j56kBMB7yw2oZbpCACLmcJGe3JW1HUn5g1xajb6JfEyNVigJLifkX",
  "key30": "2bVyrZvUPDPn6uowrwwkhLXXR555Wsho6ijy1UT5HdApyKuP1ZVjoMmQVyxum4iXU2xXqY1ABUzAnKja52jtALQW",
  "key31": "3NDfdfPTW9rh8PeHbCAGuDrFyrTdssA6BdgWEN1gms1U2Dtt3sBR2ecP4g1BA6BDdThzsWiDv4TnhdHL1zrzsUXT",
  "key32": "t9UHmfBaZeJwW1wNFJZmdjhfEkTe7AcqTfXcJMECR8chWTYhS7HcABYWzrdcFq8nAtSUriMD6e1pVRuJEvE7cbg",
  "key33": "4UCEd4o4wRk3WdtAFR7fsiqmLDRkxRYSebimPQcPRCBmnopJWM72HKgmVTS1Ds6BRPyFcHXgsiLyKQSou4fg3WAV",
  "key34": "sdCJFmRkMZrHneJrTh3bHP9SBnnPAJSb5i2CCvRG2SApizP8MJvyNJifmqqimNaRXYP1kdUHqMT7pyXnhpSC9b5",
  "key35": "5c7w5WapypHqeDwEvnNgJBNQ34iK6Xu8t81mAWcs6sa7div1qijKinSYYqZvYqLkc9TGPt1h2s12z8uofyLEAHyr",
  "key36": "2fQB8scra6vJfpr1gnqQDbpC6oAarMX6JMeatfyCjAUrsfRw4zd9rBagkZNjnDCyNsidcUdP4jUiecTkXo2Qt8Ps",
  "key37": "49nDoyhX2n4sxL6r5CgWVg5Qp1GnwpxxJyyodK42J9iX4tgi2CMffxckNstEtVQ2NDQMDovSJPv73XAMzKH6Luzs",
  "key38": "5VYabqgNChh6oiNpJhtwVeRtUv3LYCioRkU8nVngdaYG1gQmia1HkHuSsfnqPSoRgQeC3mpUYkkEx7xqujXLttb7",
  "key39": "2fgT4orQGs3NymfGH6ds8QuYp68mL66pHTwDLmUUYSPWtwBrcX888joVzQHTKgvZ3vW4HMBfgoCMoh7JyMwW65Vu",
  "key40": "4cJVU6nW7HouKfiQTpgczQuDsE2ZqNroxsXRFZwKQBGCFKFapoUFbvTU2WeM2gCevbYaTojsk1wLcX3p35U7oUy1"
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
