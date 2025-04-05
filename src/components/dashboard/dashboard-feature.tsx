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
    "DyXVZ5MMc6KaNTGJdSL43nPXqo8WzCtwPNCwi7dacyXHiK97NBwfeX8Si7Z5XfkpJwWA2ejVC7jpuwd1rgQa3kc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JmonmQ57Qiiax1g89hzfEAbZk4G2RJc2Dzf3x9faP4JBhPMsp6QxyTw8ydERuhatgp5GBLaTaY8Rv3YeCCEXHF2",
  "key1": "4vnZoXb8QNLpu8Q8TR2ZNk6aUMu3PgfNDDxJ1QyCbs8DH8aBaezZ4QkSvVxLSE4sUEVnpFWE1VHNzNoqcHWR9wbv",
  "key2": "4kWG3m4zU3phSWmiihZsFKWTi8NLWCMAY4MGxYniKwYqXxmVKyWGAHn5CeU9rWtBvyBnuKMoYQKABLnyFWUh4YK6",
  "key3": "55Srz9W6iFoM28g2F4gUXcZ8d6qPKpxi5bGg4CPUCBHb1MJ2348iimhZnsYqoeJkvMRZjZd5eZ49Lw51DodTfMWY",
  "key4": "66eUeieq6r5qBRumuzxq5VJ2MviYX3G4tpd3Qb3cXFrgBRg8EPCAyAivZrfKHVgDjmxPcg3icwGufzWe1Ayshkjo",
  "key5": "5PiwfrX7cBLVBtUnJSvKAJUyGiwfavcrpwkoLCgoofrey8k1V5ZPkGEwV5f5syXCneBU3orxU6WzPMn2Eh6RTig4",
  "key6": "33A8crDxhdof9QT8HzwFS3bc79tXJcCC4fSaWgHyDydatpKtWhsJjCUxHpFp9y2DqzsS4V2pEwFG41oRE86q32nC",
  "key7": "3R4QMrjsWMsbnGCWbvJCHTAgdgSF8sAfWdGG89RKKpHvbgusdNRmSW6QgAfdtFPcbaHa9TdSbVXknqXMJf6GQAP7",
  "key8": "3sSbZGF7QAB9eJk4q6jshCUxWe6F4RouPxToX85gY5bSyR8zT3ovh1j3fBUvgzyubP5LQTyFEkNUKQ4GnqTgNAWR",
  "key9": "358PNEBmieAPsyZGE4SzoMNgDfJyRYC4UcfoXJubxTdJPW5yiMvhNuK4TmBJJTMwFWm7W1u2vRx2k1FkvKYdsWVr",
  "key10": "4n97F8hDoFw1jBVGnEVTdoXgL3WmtnZYhjDzvjLrNyaiS4qWrc71ivAT2x6a3aBfC5ynCyRLFvea2th9zXPkxnDY",
  "key11": "67VvvEdMMrsEGJx3Qy4k1CDR3EdFkn312CXHdmrxobUekEdd8x2gMWqY5pPw9ojMZa1cwp8oELTp9GML4hK6gQJE",
  "key12": "VyAzgEw3fuUfMhxv6S9CEdjTtNRm6puqPbVRq5jfdM8sxsMyKQfYvc1ZKDgdLjpTj5Z5pU6PxT7NHoJvCuUCdpV",
  "key13": "4P5GVFfnfm1Ki6vkFAXRG6QG1M1SoJRwbf5vFET5ijxnejYEzqsb9gbCg5eDkhHcsuQuLudn7qFSXU7m7HcoVrDX",
  "key14": "57jhXTDqTde1hMm8u6yUx9A4EUHX9aJ8L19VKiEkMed3TpQyFP6SBuREFLxXd1odAY7sLtsH56asqa4Af5rCxSmm",
  "key15": "54oVHe5MQ3UDpfPWeLhmf8GxQtn7cA4EKQK22wbSjm74d4qanAy4a1BA9KezkEyoSroFkbJgS4C2dWmeayAtgGHo",
  "key16": "c8fqYZ7DwpqnfH5wUrR6AMk26w6e4Np23N8pdT5pdsdWtCUP4kTa936wTfDmfxA27wMMPW54j4911SePh2kY8hm",
  "key17": "41axneB5JSS7ynhdwYXJKChcoA2TJ52aJi83HVUmY16GURmbuepU3XcsGKeyJis9Udiu2rj1nxzjbpvVSroqzKpw",
  "key18": "32w3hMicdJ9usA5QzJ95Zm9dM4oJSCord1yUj7Bc3Q1exDivjojoH2iBeuuPDkqzWENh9KNRQmpyHBxTvbkGFPQM",
  "key19": "5GrbGwZJfHAXXH58T6Ex9aNQs4xNzTk1iLWg42emX5ZsjgZWQd62gXDi2ARUEaqDMQ2Eg34RGPwAwbiruAHEKHN",
  "key20": "617XzFGJFJ4XvELQXTcFCxgipUcov43qeGWCHCye14wTKZBGFG7zPMDuzT5CUoPXwKKGfqQBijyPADtTfPt7ozJJ",
  "key21": "5jGN37P3iJnjWq9NWauGEVoMmfHNF2V1xM1aoUXzbgWRphqThf9eXWMasUqBAc1yxJzesspRrE5DXMns9ZKieKUv",
  "key22": "2564aSDH8JH7wLri8eeRQigUwg3WkcW6Se1zYCwyvbAS2Y2bVbmq6qmrBobYvBBQEiSmA8hx19QrQSnrsuAoBoYQ",
  "key23": "4XKc2XBc8cWkXSMTR7dHoh1qBopM5mYWrCsoiwaBHZWu4EWdTSC8d2hhTefZ51ChAuHLjKNQZaMdHHevKkFPRBVX",
  "key24": "5eipXqZ5j6M3n3HgaFcbZAWy3v29x2YdpJ81cDvE5eYgbmapjZKbwy9wWWC12bDDC5DymgbDye176nsGcYX4huFE",
  "key25": "o69jPSH7LUrboQtFmvo38XbkALUeo1jfAcNWy4ety727MjJnkpGa87mugHd3jUjeMk69je3jQFYmwp2tbmt8nti",
  "key26": "44mKnkums7Y6sKxgvCbHie56Uw3piWmwHjKzqVH9WuirBsCzCPWkoN92rnsFBm11HCQGpAdUPn56R3jfqw61HEE8",
  "key27": "3z2e16yVfxedkcJ62Rvx4jGWTMw8KP5n1L1MECZktLSKeKZuoirdMSSXuP7LJbJvBScPCfg4pLBvHeLVKrSSZ2nM",
  "key28": "2an5RiVzpA3wGqkJmb76gEQWxj7wVe76gLBfxYt8dw5RBfB267fi2DBFnDi66LEbcjfEmPFYaTwT2ZmbPkLLra8",
  "key29": "2yKLzgpERYskKccVYzoqDaeyq5s3NUrjy7vw2oYtDqWVUrkbJxMpgCJVdQPS4GjZRWsHN11jKjib1gUxiDLZMZZ8",
  "key30": "34voweB9JdCakb3hmoUe1WmEf4GNzR7AZmjz9Ljm53Lc8R7XreNcAozsDg3Sj3yB9HcTYftUSaNVDCEpi3QcU7ju",
  "key31": "5KMtPq7XN3su1ZoeRBAZoviAr6o8p4kFnRo3bFRyJouiXHYUa5zoxgpTe2JvZwvuQzNmcwe5nXEDQAV7ZquRAoZF",
  "key32": "XXnDN6GDnr1eMZjbqgX2jFjuZ59oqMazUeLRaZTTJke2sRY1Bq5SoXinL3xtPb5Q5pKHP1Z1baBY4VRxvAjnSt9",
  "key33": "51AhPbm6XztkPhBFuHet6CunHYACsbmw2QKPwQsYx5Btvh8y2CG18Boam1NciYRmZBooNB3Jp2jCQc4wTf48n9EL",
  "key34": "54mtwWxuCxDDGSfKW1ef7U6eB3QDE7FzVK41nNQX9Y69yGDVAjvtFNQdHoQqRGzGeiHHpyajzNLSkQ2SKfrMCXeo"
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
