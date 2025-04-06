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
    "4MdtJqBF2YCX57jn8RW5fcCcpo5ct9wpudFUtrjTfEYEngbS8Y3etk1D1kw6SHGYtt1mdJ1vXqZ4nKsNw2CqJ6QA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tr7S7GdYiGujeG4w9zuT6XfUJ5WwGJhyXydtNAm3ftGEbw7dretXx22qK6Vy1j3wGHZfVBrcoruDu96sdhd4pB2",
  "key1": "2KUC2M4H7r3rwb8jDMu9qqcmPPrHFBnZebt7t94R8C4mxnaJyQpXTzsuXssF2Bi6mgvqFDP153bJWanQqwDhzVUZ",
  "key2": "c8JLmToAaRW3nJSFbdLsnMbRVm73dKp3FRFZJReknq3Y8cPBySXEJTWcAKAKcNHK2hV9ZMDSfKqkfokYbotTVur",
  "key3": "5kK5hZKKFcGkU6vHGCDgBZ7wtvw1jdmELfuBdEEtmZLkkjANikCaVAz88RSsyVpRwknd8TFJeYEY2uJhvBkuz1h1",
  "key4": "cb52ci6gKa9KrCxRHW8b64gKhFfTk8769EDCexSFeMWQ6FywTeZkRrFuvSzKrAQNbCtc1KXf8rX8E81SpBwrRnp",
  "key5": "5NhSCjxGbCu67ARpiiV7rXPQCuzWiRRCLRW3t8rwNHkmgX2iKbAoa6XdRtc5ih5QhmQs32pLVLYADNZQ5x8fnDFo",
  "key6": "2UeNDVzM7HMmfvFVtZvHDGGtozQcsiq6SnvRAJKozyTBVEJvUsvtiAXPB1LAERQZC2J3DiWVm71H2bbKEDW8WCH8",
  "key7": "2m48qEppbnNGvJ3HLZ1NHkwZc2fgmUR37NWzJKy5ArjGmw3MT776WJCWhWpfvMzNDknAvcoweuAbDJcK4yivY5EK",
  "key8": "37pg7hWdYNHx4VLi1TawWvxdCU2RJSLmwG1ZfCH8sny2Eh2N4XGihsQ5Di12U9qTtcu2XL8E9Xx7d6RG82bFuoTB",
  "key9": "5y2DYfMpTeYTpfEZJvLf6xvUWVsBJ6EdqSv7iUCU7iC2PvtxEVNxPqAQS7hn4oyC1TeZhZnHm566jN13kd43xkTU",
  "key10": "4TGaCPZb9mmXZ776AonExr9kEFN5ht9JqknSSKMXD5tdQu6qXHvXG9MusHTsrKsK8P6SnH445GTLJo2nMjBA5YKa",
  "key11": "2CsLvTzjjvXUdp4krnFoXevRSdEx6Q9Xeg4ku1YigFpW4u2bQqTtSjXWfRfm8Vw5hb4gnsBj8kRYcGtE3N5nqB2i",
  "key12": "52usUceUhXutDYGRUofySRHipzdopD5F8GnWoknv7By6vPSmmEtz84fsW8172JKYFhXkjSScnM6DB4bmNwEbSP77",
  "key13": "3pGmStw7FU8vRfbMtUYwAXJcyUfdC8m6Dr7Lm2W5e3k7ixS7jRCHkHxgHGCFAApxZ1zg6aGEXKBUbcPJQGxbhdar",
  "key14": "65hb12CP9FHc9mCivH1yte4fNroyGow3cKG4mWXB9Qh5M88ekNtiCX6B4FkQfWaHyHfFKwQwV82fRCBTZ73iqahn",
  "key15": "637pARbhtvfSG78q4AMU7bBdYck6jD8aHzkYT8k6hdz9yEFmPvCip4g8XXFnQk8hJAYK3yr7Rm2dt77duQVkb4tQ",
  "key16": "2WtyuFtwHfnAXZN7KHAruYe5XAWNzWDxdPay2TuDr6zJZ6z4uKzjaGb2HNHhzsPGG19a1cgqBk4yicCgAhsyXb4z",
  "key17": "5y1jvgYpKSxMDmXwMo2NTp1FA43u8Z2HhambmFQWX9ztTUCbshDXRDrAERwRj8oAJMuB1xmJzLAswKKJEZCRZ57L",
  "key18": "4aQszcxkS3s4Yc7sdPZvKZRuxDmbtvDLRtrnUT9Mxt56MvkZWLNqVyJaVBqJgo2sz1SmeZFhmyJub9Us7AN9jy6M",
  "key19": "5Qs7ZPCP79hKUVcn9zzDrY5jVEsm6hNaq3wTNViECVtqNfSbVQjrGzqW7ssHt7vUcYdAGnzkuPTHDzVkLwxtESMU",
  "key20": "5VdUmNurKhBmrNimzKyh53jEFBURhFTBHpwtv8rYt2WBQ378D5PQxtTYgdhQS7MVY7tQz2GrJ6wUzWghfELXVCsH",
  "key21": "5wgpdNRCiaZ12C3Juch3oXZ2w6SdRaJo97RGR6c6W1Htd6UrHssFa4AuY2gRN9Ps7Ddw8HCBkKDRpWTtuyXV9Wt",
  "key22": "LDYTL6pYhdDAQQVCGTkfYsgaZQgTQjm6VFWfWDns6V9GbTGhVcb6SWhWLrTsQ32D5My8svbtsbLwpiTQtehBbAP",
  "key23": "42n63G1geg6XH7BGYaYyoVnkai41kMYntTrSP2wq5giqeGMF85F4dtmYCCSgfhgVgG2rc9uUJfHJG1wKz3aSuQSe",
  "key24": "CCL6V5tzvvWXXdrooxiEQx95ormWu5bgtm9hkKPqEdkvTefY8Tz8v4ZvC3J3vMzqFhKSGXcpJM5NaEdwSyDziVc",
  "key25": "6RGv7tpiWLo6mw6xTAwQrdqovYpPq16EuiewNtpCvVrqFxVdz1CEmdaWuhWYHGW8pLNngnBtrd9HY9hZgNoMogv",
  "key26": "3dw2LEhGpeWrgTH3Vhb8qXXS4Y5wbqDobd4sweZrfw22pRt5ssUVTLhtQ8e6JdCKNYzQq2fa5pLPEqw7BJaBfpsr",
  "key27": "2RgAo5cgVUfo5YuotbTWk74TQnWZRDgQeQDDDPfMT8hepMa96YHAaLq5kM2iwMBpk9vu2hCDx4UieZKM7ySqHaKF",
  "key28": "3xYDgk8CwGztuDQspb5hyY6AE1Hg2gMTHomKAq3dEgiSmehgttbpjntqQUg3MvBiekwohJFZLA2xcrcKQJXZk6MB",
  "key29": "5LVksVL8ny72JgAWaHApK6ypG1cZYWChYxZSzQy1vByPxpp97z3x9xyg3DXqHCVB2rKiK1vNKSdnoBGY4SspSmFh",
  "key30": "4PbNwZt5UWGrGAAhDa7moqBXPm4eKGBZeSA2PWRCiqBaSWKQ2NukHeZoXsKP4cZsAetxbRY7qTLGCi6N6wRbuNdV",
  "key31": "3gVrtw4rGf7gb5wfe1NkYSxekruNL2P4NWX9uA89ymKTxCUKD7UaWaRvQaNnjvPSDvivDTvCo6tvg6WEBAHKzWjy",
  "key32": "2KXJG7TUWSxGZk6nN6FRxsp2g8y5z9rHtSXX9NWmN6PEv12F4nq8qqXHcfCVHN5Tr69xuxPTjTExp2mVARwEGoYH",
  "key33": "2tdCJVe2NUWDMQsaWMtZ24ksUNYnAePhQjyzuTuGFEWShPeBTdxJCbL41cUzcbRSW4E4j9NdbELJ8zvjwaS4fdv3",
  "key34": "2vgofpMrEiSu8aA7dWpcEJY1LG9wPHU4E8fXZtXiB9SjCL8DggYfyJb7fKDou4zYF3HfGBotyi26dLsbFu9u77zc",
  "key35": "idNS1NKR58CiTSTdcHSiHuhidjj3Pi7f1ztZtra7nccvZ7UB57yzpdaRFxTxuUya37K8KQCqCNcSMXK7xCZsGwZ",
  "key36": "59FpmCj6SjRXC8fqGfdHBYvTXj9aKLeZUpALT7no7tsr4f2UdtUtTeeHa1qxS93xMTY9QihrcvLAeJ25xzk5Cqae",
  "key37": "52YWbeR4wa5THJNyq68KdvYWFhWmRFZLjJypVCGnUhRSiJ4cAuLgjGWUnMauhPAT7G4rJAejrXYSmmaL7h64pzDA",
  "key38": "5VTxZhdGM7TeW9ojL3dityxXKSVNQ8o7bGDHHa835sk1Y23J55KAnx9H5YhANtHX9FT4JJUijkRHdM2zeXNnuNbx",
  "key39": "22SEgyEcEGzMQeESiizarWyaSQE5eajfFYJbYiGn1RrktX1HA17fV7gMAHyhtz8kFC7VnioM2JUJYJi9dxfbcCbq",
  "key40": "5mo5JgXneJSFYuESkbQWgDcGUpbbJ29yzWhbugQ3cTriEGSoEXEYGjhPYg9d2HfhmJqCxWQ7EPnjqfSYAT5sMYM8",
  "key41": "34sueQDD6pBE4cwc72m57QLxz8ATex2zpnVPTgiH9ujuiMX3UAz9pmtRCLgkPgmfQ1Duaerv8ikArhCH3ynab9qM",
  "key42": "22nGH8DDfuPXFV4qUvJ8vYKofpV9QH7cx9ht1sRn2JFXJRsnDacu8URm7mYbwnUwRvu5B1PcZNNZ1MPjTH8NdWfo",
  "key43": "kdZzZjSWnXymyT3t6KPNDFbJYNjJFyQBAog2qFxhjZ1fEokJyjGu5ZCVqqoHxm5qdJZB1at5YotnNHNjKKqvQsy",
  "key44": "3sxYc32angrEQ9Tskmmpq9Um63aQVDXW19Hmrybp6Gaj8vfA2PdHxBqkJcRQhjZZU2CaAefaSwssHtcRfvRLsk3R",
  "key45": "3xPKJGaZXChB9m8Dm4mmmELFRgfVE4wCWnqeddFYUvvHVFjjQWqtYm3DQgnTxK6rGft2iGP4oKE7teE8UtNtHFm5",
  "key46": "5s8Ye4bobimJfHTYQmBbFBPtjnkTyAKd7TjAVBd4vnH2S6Zobg2FzZ1mkb2eGa5JjFNjHU9pS5wDCr2nbWx7gCmj",
  "key47": "2PHnnHd62FpSfc2n6ErToQV8YZzzaeoM8MkCteKRNgwLoTLHHH1KQnDUb3PhRJbo46LtjKQCk3y9VXwTMPQb4Ns"
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
