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
    "5vFbYJg88udSewme4gHfVXQh2j56NGXn3ZDcS5Jy6gh5ocwveYX9mU2rNBFimcfAZ9beXAyMHz8tNeB8FpKPBJ2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UzkXWRuafF4rQcjfa2fGNqzBRwneXLNatEFzNUg1m18xafwqfF4SrPkSa55BwrK2SuK4oVzrpwc45YcGdSDj597",
  "key1": "6ynM6Va7Ew6gE5gtB8c7ioHykcWyCNZPWebTq761Nvh8eTw44h7Z7GZkqmKqVAYgVwYqGQcdrfSJk3HgNdSA3g3",
  "key2": "2XrdvrVASRtNRvNSwGganGraVNtUkgBi8gHdBBxVA7Up1CcYArdT9kasFLVWHZ1QtAomWH3bpDFAEMwWDotqM6Sh",
  "key3": "4Gez5aiaPbY82Tht4btyazF7teuGfJ3ndGX4EqiLv7YfjrXYSytRJ4RRKk6PpHfjoft71xwBE6aQSh8d2ycebLbx",
  "key4": "2jK4B1R9UAriPCu23VkvCK5qFZX76gcp7HryppJaVCEhEwdLxukeyM4JpaEWSiob5SHWHHFku131f3CmepaBhryC",
  "key5": "qyojywFjERpuLKiN1kXgNNdQMw8m1WHMjnPk5KnxqABgTdFsppL43P749ZFWSZyaBRhcgxToB7Gus9rLYrvaMFu",
  "key6": "5xQqmdjbmkrFUcARZSczcqWXsAHoQcnyhQcsqELiBUF8yEKnTMLPhbGqEm5L5Kk3Fm5J1KYC8VVkiNCNCYX83YUn",
  "key7": "5nVwsYRcBA2nWuB9CiU6od78gE72KXx1EQgZaRG1GxY1jbobK9DnY7CyzxM6qGrtr2W42TQtQ7CTf7ZGMrRnibSz",
  "key8": "5BisvyyaJNJ16oAC5XbbDYE1C4s7g9PvCStXLDnFoCeaUancxVQWciAzKXBxUpn81mvQASa6qRJT7ZZgTGM92jFP",
  "key9": "4D6DFP55kidz54z4QLbxAYgRtKhviYrSas3bRr5NUmTwb35SQJrpqBfqCt6nVs5k4iwpcmZdt2mK4xwEk5Wvh5T1",
  "key10": "2V5oUjsL9c1nmkdNZ321kYC5YWSjq4oRYBUYk64g8xgWvXRov1NuzZRm1v8cRnJaTbyXsXehNqqEMdrCdYWMe4Z4",
  "key11": "4eXZRkbLowVa9xgozQizDTfRg7Q6EqzTPSXjcBw5TwzK9UpnQv2XPGFXUVCmDX6zqiSsN81hM21QvBWUAW8fWwz2",
  "key12": "P8giJd8XcJitcFRN8N8PuWTsPsDvXx5a3rKSEro1Ut7wyTMTrfdv7JBp2ocXAwi69fzcqN4b3MtGZbxsq6TVMXV",
  "key13": "3N52sMHshEvPEUGpwetFJJnaUiCc43QUTWWBatXSsw1FujNrbGS2CRffzV2EqTX7nn99gQxaZsBQVYJGaQPbT8JZ",
  "key14": "2M1RExYvvesV6jud1XgjmH2gaYvwpcKdwGJStCXSrt1sbpMds4K8j1aiZvt3CojU5h2FhgT156txehzeJZMhFw4W",
  "key15": "3w5oW9UVheJeph7xT8kc5xeC4wgDsdzvMQFWQDmXZgrQNkLMzuTJSRB3B6sv9kcn1cx37Pr5utGV3AwAExzuPf8F",
  "key16": "hxxTfNiRSvUhyfiTCousiWD6LKr9kmS8UFsKPnGF2abaQxTQqZJ6ututGmkmZqe4Un49nxtH4RtcgvYXnYqnR9a",
  "key17": "5VZCzs4iJWvee9frPMzQTgJvnyjLYTzrVxvHFPPZUHxH19ukQgYi7whsoH8hESzda6j3R8EbBAjkinkx4ufSHzub",
  "key18": "6bcAoWzK8frFyi19cPD3dy7Yc99iFD45ZB8ZJ6PiSxVhJ2jMAVAS8LgSwAkC4mJAzkTAAgKFmUoCC2V5TjiCDaN",
  "key19": "4YqmUJjnKPD3QHZtkGL2DUVVZNr8NV5L8koeZHCV8rG988rsu8d6hvuFVo4VmzN39QzXEsVDknP1YjhDj1uJsQun",
  "key20": "2EMtwr9AfEGS3FdRouyae2AYRWoNXR7bZLoRKrQbSHSxaupFQyN8cq2GTYZrnzZkv4s7om8gAW5P2dWqv2wbpNP3",
  "key21": "4CGkKwf78XEu3Ckz1WGTPY4Mah2WDBBRua5mcsbJ74P9tCHxcxBD4X9xKPiK3edawYLFfu5c8RsuVFzMJBrCk3Pp",
  "key22": "2GEQr8pf8waKLAJzMUGiEjJVCaTE5LMC8NW37DGbTqa6m4VNzYzzEVwgCiYeBHZUS981iQFr5vfELKnDDbZ3emfn",
  "key23": "4r5f9kGxfGrhfLZDrVaM8bTQHLj5cLy5FbuGX38cq1BPDmxC7ZbQ5Gr1ZgTjqcnxG6nAxxKziZwYjAmnpBraR6pU",
  "key24": "3GXNKdtnK14mJtWnwBz4nsEWZiw4QiZWqQJmvrGdoe3mFKyxhffS9QcmsnuxVxogbftkQXsPyRNHNz4ZdSLaNwjX",
  "key25": "39qDSw3rDaMkGpyqWS3HFAxM6Te4yaGH8MBqTDFLrNQEfq8pMh3ThkPbr3dsLStw18qTSwvXpdeFJJXaAsJ45yhf",
  "key26": "3pkQ4maa5QLxL5d7dzdhHTbWszRyFKjwU7CrQiW1GZnfWXbqvBMxBRKTGvDfrQV7wJJRt9JNRE5mmmaPoT35CeZK",
  "key27": "3TSTuqV1gfjRGHA8BoZd38Xpk2hErCaxwWEVBhJA787V1FoG5SBQNHgCvi57h3BHvMATNMyYqU3MPCz7UZwrM9on",
  "key28": "LbcPux2p46ph23a1iTd8gDgPeYSM3T1iZv1FdriLoCsUxGHWjL2MQa9o9D319puVposBSSd8gQWBA5xQupdBaPW",
  "key29": "2Co7iJWjYiYLRkkpGg3cNc6TJXitPLjjfWg75CfACGF3E2apkSMRxPG1zLjZXGSWBreaoEXZ3eMuCaR42sT4vzYX",
  "key30": "4em1vWW6Qxmw5vq312zg73iuaW9fKvLkrEYimWDYs5mZ8JNSyArA1DdTVoHYpYrF9TKy153mBaSfqzsCwoES6Y46",
  "key31": "22meE9o7tWaqnnt1QhS3M7QbWPVhtsNmTG6HZt14oeRirgwE7rBx7UYr1k9PisjkugjQdqoWhGQ4TG7SPkPBqCBm",
  "key32": "2rrmBXY2GpzouHV9tWtk1fxgFTWL8FynBt6ybtmP3BnKXnKU6WFE9RvSBShxy6F9DXx8accg7Kx39qH4Ean8RuQM"
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
