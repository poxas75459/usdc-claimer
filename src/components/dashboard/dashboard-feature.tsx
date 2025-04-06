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
    "5tSZnDELbq8NzghH8yHkKJB7mNiD6AZGqkKpWTmMr9GPh9TGXocK7hbaYPmAx9Re89FGU31CTAN81jP5CwMocY3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bD8qNoJx3bpXnTS1s3Qj6C8xRLMZdwRHSZxqHUsbxn9T4vX6PcQRtYpASh8irGPJ6WqzLdFFssACdPBGX1SizGf",
  "key1": "5vn9MnxaYgsrRkVTWkqLuRfhxJ9rrjoJArnXsEXSdVVNbYPANtSDAXXaszfufp74tcCRacUGTSx7HbZ8sDJdXMYA",
  "key2": "jbRGjDmPbCCTB6hqKfyJbJofoJ9obrVFGtnWvYkfxUtwFXfezakL8NkgcE99xCp7GKThP4fcebqDRzf6aCYXMYZ",
  "key3": "4SzVQSfWtDHfaBphNZE4SmhR8SF2MDgo23KLJMeFLtRT6Um4eyrscXAacPMCece3YDkztQHBTx3qyodKiSwV7kiW",
  "key4": "5F5ibNTmU6dJarPUdHzSKVCAFsh2eWxcp74a2MiUnHpzfkGnPu1EgSxTNasQoZqKrqoBn84X1Rc1xz94yW4ttibk",
  "key5": "5kkHCPak6SgTxvQydBmH1odFtYivv2fX46vU7Rips1edZu2TCYKGzB8kh7CXQTNChJ7cQ3ubGP7dZM5m8DHohmh2",
  "key6": "4Ks6nECEP2qr5ZEGduR271Ur3HewCPaorS74FZM1zbHsnDkKbqss3TC4cdtDqbf2Ww8Mmm867PjQiArVSVfkPDZ2",
  "key7": "3UUTUYSemGkYMbQjJHAbgBwXnxA1D2eYG6enhvL2cGNH2dEkW1ZoUSA4h5hMBmjeZSfrqviabvz1LkUoMB1qV4Lb",
  "key8": "3R2GvC5pgotKvAUz1bzSzLTW9Qrd5qPVUrVea5SFtFd36W82CWa7RLWVQrxRHE46zu7JCRsRMrUm5d3PoeYC84Z3",
  "key9": "2vX88Qmi1WMXM6fAZYUBMSxEYXWqRph9yHcqrxd5QhQMGgh2DjoXy3V8CsQJQUYRmrLBzXxJKpUE356uR9bnZ7TC",
  "key10": "2GKrCqL6tDWZ93HPEBnQsrcefYrmpaieJNoqDQMKLFjmx2VYQMycXgBy4mmcDSFjAq4CDApSfbwRVHrm95fgZgLx",
  "key11": "4iauyTNHcRKYTz4RBHyt65vVjto69iMjBZ9BQoLCfnq5k9oaQwSpUohztTaKNcfMFB439TEhwG75EkJDHe9rhVHQ",
  "key12": "54iuDD289BN3QUYXGZPhay2HcWu8XV4j5jasibLyRnrK7C4LPUp6oLMayNZbjLPSmkcL887X9ZeUCeAYVWaFEUSp",
  "key13": "shaf66SwvK7Gh7oTXfb1i4svy63sxw4wDxSs4rrfThs5JPh9uPLXMRSVr7rGwmztNnsbXPezMp7DoAciLqdGL5W",
  "key14": "2veHrSj7SWi3W9ke2BW48oE5sWLEzycv35iw8i5RqWx856GtFNK75pcS9DP2LxfvXW4B4cdAcbyxhsbohANMwkqw",
  "key15": "4oAR7uSK1byBDbQHTRmaVYExsJkPcmkVK6ThB6mAVLhX6FewDGzozmDSqSMBf1kC6NkdDFAthLFk2pEgz2t972y1",
  "key16": "bERZbRDPC4fiGva2xpnGGfSRXDrZAH7oQ2umAt5tPXPyTKE5dd1NifXScASHk1eX2pbXj8oPaG4kyd1yEKLexHt",
  "key17": "3tg9tPVqSXWStPgAt2WPNwGD1Qn7ZTwTfCFBUYKMEm2dWPgmdTuzR3gHYQeU6VMKyBpRtbL7kL22E7NujtCFvqgL",
  "key18": "4gSTweN24pvH58dVz9La7r2amwwFdVjjvr7rYQRXXzSa7SDVJRxzGYJmZdB7qxyRhpc2b884c8RWdJJyxrDXxiSQ",
  "key19": "hbYJ3PCZ78uhdf89bpDqosPFw9XvGEjr756qUPjSDkLq8upscM7vXvGHPfCsHbUDFRFg1mXsR5aH3kf6uSCTV5C",
  "key20": "3m3PtXxaG36a7MRxexEgT7ACAKCJVK2QLkqRisafAGj7sQbAsRUgRjiEeYHeAbdi6Ch2D1ck4Pjx7pjjfrCzm5AQ",
  "key21": "4HA57GtBuymcUgWeUuHwdjeohoQiv1uYtSVZkYeHCXKpaLg3FyGGnnDCDL7QMvobwCe62tgbEVLwB4zquuw5FAAA",
  "key22": "3yqpEuSDqfiRHsVnnt44K2juwnZCurrEvMBKNjxQhupgto31not7MMSpqZj2bnQHUmo8Lu8hYJpYTawxyuKYsBFk",
  "key23": "4NeHWtpxJ8LaJRfR63ZqQQqmia2ekjzFfFVUNwNTf3KTQXVAAxK4fQ51B2YtiRBoY5CvkMJXz2tPZyJa3uk42YNB",
  "key24": "4YVefq9dBhuDmmc38gjS9oS8YzNmiKzFfUnhhfmkYTcoyWnadNddi34jFRGYhUAd7UTVTEKjNnmGUunwroweRGHB",
  "key25": "36YGME8oxDfdkpujZMGqS8NA6eRcMxFRwmb9fR7JY7qQpLQA7grgyVzmKX9jpqrAbgQdYBU7xCtdVZXLU7N7d2Sh",
  "key26": "5FfkdwSdTi86ah2Ag6Q98cAQVqVJcHck1mcK7MfXWrM2HS3esp4zvwQj2GTKqvVervLhKruv93UTdJaJLDAmp7SQ",
  "key27": "5fBSbaed9akv1s5W3Df7TbsjexcyccHNprZFXWqhbnD6c7p4bJd3SEnnGo9kBPuKLQ1ovwSFFP5MQ5u5NET7Qie4",
  "key28": "5uj2EHjABcA2q22twJtodGF3iWnaLGvFUKDZyhtLLY9reNboMifaGq4AGKgaaT5p2JmWVncTc4QJhRkJGnPY7QQG",
  "key29": "3cP34uNTygd4zzpRsSBWbFPeoYhYL5epiUGzYWGZuPKrrp2gDykHYnAXBFetyLebK2eSV9PzcwhT265bBBNWckYB",
  "key30": "5NgPCVqbbkoVwGLVmbhX8xdbrTjRbyzatz4WYyR1jJbu8zxrPSFyrK4UdhJSAotwxN5CXVBzbt3oZu61HHcPtaHR",
  "key31": "47147Vivvs3rcErZ9PGe6ijLaWL5pSmkeFDaXhSSp2qT2EZHDJaLzQLpmY3hQcfDB4chG7PoKVZkbJUzdJ2oUiQQ",
  "key32": "4Jw1czXjbuqNrFtA6sRxK4C8Hxm3kSAP3nA22GxFk632tgaXqh2NBQGt5SKh4MrKgHuAWb4eo6GbBhYYEjjRRuHP",
  "key33": "kY154LFaJAAZtfF7d979LJPm6t7WnigoVECf7XMhcvvXUWqFgZPjoZGj3MFMSDtNvWG5J2Pp4idDe3htXt1wrUN",
  "key34": "RWCLw42fgtabCUDZZNdgrqiwHQYkCKf3fmL8Z8EAqBDDJ45opD2UCG4uirALmTjAqQ4S26yK5SnVYFudWuv6qpB"
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
