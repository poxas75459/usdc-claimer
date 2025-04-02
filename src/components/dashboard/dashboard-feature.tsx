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
    "4oo84TJm9HZ4Pde2StSnQ3QKADpAZ2XGXqR2Q5YH5TAkeGZcoc9nA1D3JhzTFux1nCinL3gBSdqA9668wyrcxYuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XGPcWLNBPPvoN2CeLzXzwa7tUuCGU1VqkTquX5e8bS6yGL5oza5s3uVQ7VvcUusQRariNuBAJsTb5yEkGJNxiSZ",
  "key1": "5rauafupibzBtuMSEycoLcYZz7kPRkbFGyjA6bdQ5M5DCgFNbtcoXcFJB55rmNuAX48eN36Z4WxWfaSf4HqkE1zy",
  "key2": "2545CsjG2wZ7GRQFbdrN5EMMtffjtug7vvR3rv9JQNvUmPx1Be9hnzE1xynZB3m7hxYdv8NRLyWVVZMhHGv4wdjo",
  "key3": "2V33FTMnan6Pbv946HLcdf5VPx8abGsbGdXdhhs5bc8pDiMVMtcmz6bADWusLRPcEms5qggsrUSeNwBLw8UtDvXa",
  "key4": "EdFzJATQKzL1qG5EbzqT3M42vdwUMToc5SJFkCvn3UMTw5F5GTT4pfV3reBLEoa58vypLa7MXhQ2uGxsMCUEhqq",
  "key5": "2gmmUX9zuVYYRY75Uvt9jhdKbQDq6oJuohsZEeHz1eWGe4WGoU2VnffKfc2bH4rjCTtt2LnQBD8yoq8BZoyBn2cG",
  "key6": "5H3Vuu94TMTyHWy1ZZUKQNw8cJiy8x64ohyXYYxf5rpR7CVFg5PuhYEwa8BYaudJXVuJJ9QC7XxFxM4vd2aYKQG1",
  "key7": "4VapGzW4uFbP7tNNeMekJ3jwC6wc7GwUZoBpMuKwAQeXVJYHSWWaMRuNwtfdEPubR8ZSyRyphkVRuqvvjMKHxpDy",
  "key8": "5MnvMS5oqva4HNcHnshfJoxBXbL9ar7YhAzqMTobQrk1FkDa7ypHFFwxaY4GyPnKTwNRXYcooLzTxFF34yxPj9Sm",
  "key9": "4TCvmVfowqicCZbKZLyHqXcRBdj97vpXpn1Vu5oZjCGUoSbs9qR93ARzL4rM8cUopd2baZbc8ZKTvyAaCg7biepM",
  "key10": "3fosCMyVrkEjXzAYevmpPkLonDewt7WAaoHfv6v58ZEX2k59rimjyKJ1v3XHNRrPfn2DPfVVWsiVYxJgw6JQPzcK",
  "key11": "2BSrwdopRRNHVY185Xa8uSms57sDJXjXDeVf6fDh8fMPdNQV5bmmnyoUAM84tTQK8ikzd3YRV1ffh7wGFXoVqk9y",
  "key12": "4idTiF3trWnxCxoaz93iTBjsdfDbmnHxF9mviEiWEznHKo1fT8P5jtSDMqnneF94Hcr1rCahFG9oS4xbyfPtYn3K",
  "key13": "XcxYA2w8p9WUH4QMUeJ4jFJaCj9PX7oqCs5nxzpvWVXpHKyv76tiPSxUNY2kNNf4TQ9FK4pVi6zyTGMeTay3ysT",
  "key14": "2CgbDJdeRwiuVW1kqVgAgEADMEaeVaDjv9z89DGTcFobeeEYKrAy8zNVxcLCTYAoNCYyysAuqEfmzMFYAP4J7KGd",
  "key15": "PdSv34UQEtN1nTQNrusV1Pn9VRiovb55QWx45BkEyazYBvRBb4HdAo21xgHtWDS32euxW3RXboXbCccyAavLPp5",
  "key16": "49AT7Jjq114tgqhu9TKPYyoHYQV2vMpF6B45XAGF7s1HqUDu4DV9iwixXZz48ETXs4ZaRW2mgZp3YRZkrPftsdC2",
  "key17": "5TNaonTFJCynfSsdyyGVdGjdHHYj4TmJRSdPEjVuL9CRysMQSAJZRGBgYE1jMkgG3AV9mH7UEjZXn7a3K2VzWBfD",
  "key18": "4NXGxT8kVfVfed2oejTJjJuozRfcbRMj7qbW9MMFKciTftDTp9vGaBpp2BoyUZ9QhtzkvSPihVfXgk3T8kDxiyyU",
  "key19": "32AA546sJtsYvxW6dsEh5HjdyRREjUFepiZfsrFHK21pKxwjAoefRwhjgVbkHp3PdbzBbpnsrLBhtPPpFbAm8FSB",
  "key20": "282J1d632bfQjYC8oNk4U1TjhyLcSvNrhbDJKqQBGT89hLKN3ZVf6GQekbGzMk1YiTZmwiStV2DeCturkJpnGhdA",
  "key21": "2FMWZSXHMZjpz8Dtqkrk4CtC1paXMxH2Mg3BjLbmKDJa4ZUqz7dHxJWwGXdTxp8hGdjvz8fXMsTjDDZ77NRpndK9",
  "key22": "4nP63cnNFYtVS3BXoBQmN8TYYCEm1bn7cGRgcrEEN1Ufpn4WoWUZCkehDHf8J4yaqpMeK7bzPL3PAntdKqxWsQDz",
  "key23": "4NvoMkCnyLpwWFJruQ4Pt3ViwDAuUqwc7Qr1baSQPXVaADSkbqup52T8KkeUtvDJNu3xb4wVss9oGTqrYF6wDhNz",
  "key24": "3D41AeDjpXUnpGjocnerUBDj9LwdK3RNcjejSjEkfHKpsyQNVfs4etaLAths6yTZgsPrwNBaNHAKq1VQSC5pwKXL",
  "key25": "4oSKGBJvm3Y3937DrmqDLUtrZdP47WTsdzjNWMsYHZWCUG8E6PN7QbDbTCFmbZskmQmPBkjjyU7TCUrX792dRD39",
  "key26": "4aUD2rY9qGAeW2yVzLnvRf1sBhfFLXsbQuvJ5ZnVwAGd1r4YW9Wdn7ryhLQkGft7CVJz2yAJJCTxJkLi35jndnq3",
  "key27": "32zU7gUnx4U4QCSyZPdQxYYruG1MdkPGJnKyiiHFkrnLaAzG5CtWX7Dxd3gKyqLfmNwb5x7L7jTcuBX6GqAHWVtS",
  "key28": "35k2f5Cux6fcfx1cmnuCfRFynzq962AprevvGE1VKPLZARAWtFNmWMSS2HuKwrDha1ouXCLgAhej66MekvUBMpJe",
  "key29": "3L2Y2DqXSSAM5eGfKAe3hYEzkcDd19Vb9quaqMQVta4xRRQAZviAjAip5Ce6q1wgitQPoMZHCUm7TvJhyX7odP3P",
  "key30": "PbzqF2jRF91MLSAcVCCemnmCSqRAeAQBByCizj3Qz6DDYDrJXm8xryyug2n9PHmCNYMub3LHa5wUNBLouUpgtfU",
  "key31": "4d2oAecWZybBCpL5Ke3fke2nLettfX11axcPr4x2NJS576kZYhYSEs3djk8iGYqAB5FcgZEZQUoc2B5h5hpnRF3J",
  "key32": "3hAKqZQrccY3kXEVmSWd4obai7vMhZe2i3DRDNPzcoF1X88bHxWvLfNutFHm39o8zya4KoPZenrauuNngDU9s5iP",
  "key33": "5YSDkYgyE49iBnA1MPtf6PU25NCPxDnUiaHGpFB6Cea47N7uwx9DtQXiBJexMkWmZbZQdPBoZzru7ZNxM553kMUZ",
  "key34": "4GR46kK88pY8a7tKbafVxZZ4RAAqkMWRpfLWyZTYJNzxFAgy7wbtMZAcQd9KTSp2iR1T6N1SnPmGj5Hka2QY17zu",
  "key35": "kmykZtEr4tQGKeCpfFfRuoTuCKqfG2oELb7LN4BK5N81SVAHB8cvUKfy6Lk9QDTwaE89AdyUA2H7GHTSAsfBGRv",
  "key36": "5gqPfyGUJ8U8oWibVBHM7PaQtPSKHFMsCvBcsxcMEd3PxusqFZYRSRXRWFrgpdQJKnVxLn2HJRBUVqtnCru1VEYC",
  "key37": "3xAu6Csd95kaWdSGmsiEovVeieSTuqYxwpMMFRiFS24HSSLUjFpieTCoYaJkYBVEDcH9MzrysK8zhbN7KhFusKLf"
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
