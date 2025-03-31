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
    "23HC5RfvT46fFg2h37A4jMtHEZwBu5zj1d2iPxsCribEtg2n2LurHc9Z8UvtsboQ2nzBxLkswhUuEpTGcidZoBgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKAy1esz6RAK7UopDxcjbHkGft7zpSZdnWn5DLwZXnrRB2z1oS97b5vt75tvwSq6YRBqec8nmwF3fQkdf2itsi4",
  "key1": "48YT5qpjw21LtKCwbZrSC73QjVwXMuqXXYhKtTDjS7RkHNUM1EUFbr4b8KLJuSgCzgSTecqcyxHYuhtkDJ94fy63",
  "key2": "4zgF4ww5f3y8jzC8PEzRMbSMoLniPx9ZnVqARN9dafe4sJrTL4t5PiagCoTfJhXmrwWMH1fzECttuxdZQ39xNDiD",
  "key3": "29opwSBBaiWk2DS3F7PkAg3kAKSoc3gF1v1bEAtPgZjh71A8TX76inzRayWrnQ2VRKgGxbkM9QKMyQS7iha1fiks",
  "key4": "zxDnSP2AfNu4w8ZL7NUfozHxyL3ktsBxTjMofzgZSmVv5cuBM2Mx1aqyviZASwn5wRDk79zYYqQaSpnMtR8NgdD",
  "key5": "2iXDKkrmctR7SHDxrpapAXhb91NMpcNqChXEhUXr3pZVseTt5FMScMDrWLXSCYvfnLPDua41o8CC3uNewEUWw2PZ",
  "key6": "bai3ad3ERi3tCvFFpp7RyXoh6i7YXnHzqmJKU8bL3NWWneREXmJKudhBBgpJxVGqeeM6VmLRuDE8ue7JRemdMpJ",
  "key7": "S9YWAvCbAg6tYZhf2PmqDEGym3dwtmHokPtp1fuLPFNrTTSX8o9rUoHKWkHA43UPjXdwa22mRMdinX354qURE7g",
  "key8": "4Dr9G9uHoMBfQMtbRH237XwW3Jzm6UzQEkbNDeGLzqncmtFgQ98oiFRQ8deANCjvtBFUD2XjewSCRhpakr7veYcM",
  "key9": "4MsGFV3MrGUDx7Bpaj8nJNYDjLjfJRhzW96QREuXB94F5FxxwQy9WfED9KhE9fmUB9VHCzzSScN6qUtoZCquCpj7",
  "key10": "37pozzuAaLTpKS5uMPfji439y1wsyV7NentonxLRrbhZeZsNQvnp38wxFApWWes4fU1rgsyhNNoTYmjAYPwprx3",
  "key11": "4JPS1cW58qZifuiW9CcPaeLSXTxSEndtXHaMa9G8rdnN6HpQgoancfYpcX3SyFY47UpeGdSTFaVtLzAZ2HKi8UbL",
  "key12": "5qRDVUeXQ7ayVgkHvXXfte5WLgEPEp65gtBe9wFLKopDfRyMPqTuHv8zEJgzt3N6AqXzTMvNb7q8aBzsJPrpoXDS",
  "key13": "4S3vuGUDuN7NRz41zwkN8aWpzeNXGAQAvf4q3R7CkkA6zD9nkAtxnjbb8X5qqqVLSvdh6yxLcFfGgBDxPGz4AgJ2",
  "key14": "3wCsSqAiAYvLtcyKK2FDA934kwAoxqwTuSpL71vQNviigLZemGSfQsdpshnzdqeYp4RZQBmP8MPUL3M5yE1U3vdi",
  "key15": "4iV4LV2AaecV5XLJxWAZvkCuLx1aVbZKQNbwsv4x7m8p6fKXiPB4shJFUAUTdwvv9jM1GabQMnfSTSDvPzJ5YhVv",
  "key16": "5NPmv3BdFQg8qbdkXLLvn7kL3cjJA5gWQxYbdhc8jHar9p6btEW8Amy9tooc7SXV1aBMYeNZBRKBSxKrMXBBJeWA",
  "key17": "tJbc1CiQhEGVCjD2PnsJmLgYaLKYSfyz7HjDdGru4nx2YFfVG3LKoCtVb8vgL74yZHTvJSWvXN1d5Le3qxnQrLd",
  "key18": "5H66pV75U1DDYKH33bsnDMZ6RBLCW5MzXVNyTDhGNXUfds6X8aaDRbMA4QbopYoyh8fUFyb5XYwsnHyU3g2TFMco",
  "key19": "5fEbLFwEvEW5RGNniUhMjwEhsFTR4n6sNrpn1syMyfh1YSbWh32YKEWEZtPjho4joh63ozjJmD8PMDzwAQ9mPVVL",
  "key20": "54K2mhkVbCaMSm3GPNWMwRsde2UcC7z2q9Avy4DJuodypumt8BDZgyVpq5vfFehCHkjcCi7cSnfrPFuLtudRSNoH",
  "key21": "Zs2h5by59XjXf2z4ata4wBx4rDEarRYfV314TwMFN8hVVRbzhvJ3T27Lt9HEmnPZLU5swovS6SkwzeeUc7eLTP7",
  "key22": "2iub4Nf3PgULyemmqKpGcKgQpv34oDW8Jgh1f1qLfk68bzDLK7hh873rvXiSUU2yJxFTvccXvyQWzrM9y4A1efsZ",
  "key23": "2AP82qnqvrvf1AsVTd4xzDBnAbdnuUxYQ77KQyVhEqiMYxAey6vDHuSkCXSDYSipqNGLzDcZ4WC2ReZ6w9LrvMcD",
  "key24": "3wgi6J5792o5CmWor8Cmk7XGZpecpCbaQ2tjv5dMJWyfgHeMqkjbCcJmnnmBt8gPp33togkNsmicwuRwXbdfGvtV",
  "key25": "2w6o9cjpJnG9k9SHUc9ku9Tm49WZzbCsMsup9y9RKv6zF5CtpC6ucmCaUKN9amwJwviWJodW9ej3x4aatBw7SJb8",
  "key26": "z4A4AjSBVGpWpmwKrcWRgXecSAVy4X31mfjh1e819u9vcf6cjBLzQXTKCgHHtZPo4t9EtJtUWynvxnjspe5m2Dy",
  "key27": "3uhB6nSaVWHMtKm1bwXk3s2qZQjay3unyHoBUaP8rfGNx8WR2oj7HfxLFSygzGWUeDgzT1g3nux8BPMf1sWvLkvo",
  "key28": "3rRTwiYP4cENc7MhHr3J7M66GJs1YVnUiG6Rjyh3ojDbpvYD2q6DhzNRn4roUsPNXL1wUMqnqR2DsFUNgyExWYNz",
  "key29": "3jmt7GLQaf3X3vnCaDWCRbKuYjKmW6gQxozj7MveuUzmZk6LHCi5hRX7gjCqN8ECKP5nm6ofNR9UFwSFkuEaVKUN",
  "key30": "3CkJznh8RoAmUKvr4iRp7DVQ8Pxk7fN9AqGmeDUQ2HZpMxzAnByHaPucMA75vJt4o15yhRfF8jaLXf1JCoDAWQNi",
  "key31": "9Lx2emyWpoEqfjnspAgYJtn23owXhN9sGmsnzBppzQ3PAeqUdFMER1xKZo5RDvTFpKQEtws6qyFppzBvmfe2ZWv",
  "key32": "U5dTTiBEciZSRi7UW3T5oqfXWqT626dVJCP8J3dxpD9wQcmYSD46Yis9uZzK1bdXVRsD51mVFoXwritbhgWBxtr"
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
