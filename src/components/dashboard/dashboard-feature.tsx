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
    "Fre6okvXaFyGreBjHD3vhnEw4KEFEo1MhDb9hzpHW7N835vDtHxeaBQ8t56hMGcrUbqwxXju2VnfssACVLfxfgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jad9GnjLbvG32CpNZjpMb5BdF2JF6ctAsMgqD97m57zRB5Efa7Vni94j3nxLDkg2Y3XAqqxWmH6MFR9oeJ1MBLv",
  "key1": "52JQvAL4zKbVQmeRLCp6wR6XvKn2CZmuyYMT1MVKFL5Xs3oBvCHPZkQcGSsWFnnFcMZpA26UuKUwQLATQ12as5TB",
  "key2": "5FnMhdaEegThBVVgU6Ga5Yx288rToNoG59UmsVkp85JCvQFKUw6rQq2LgRVPqAGqRAgHtQTEdjw3aiK9vtXnNatj",
  "key3": "2PEY8KxRxW5oKWhAwGazfkMWg1UsFHeD7i4YMdknfYvj3RKhut1MvvJcXqAkoYkXrk7pUruUeQSw93SptE7Z7NXr",
  "key4": "2KbNLTwZZFcEvsihoioCrHdQaoJkSuSLNjXW9q6oHeThfF4tnznMEg1gtBMqbkaFxDuyHFXLXYfnKEVPp2x3escx",
  "key5": "4KSKeM8KgjMuDYjFAEpFot7gmmPMT5h7EXnCSvjGNvfPhb99JLGBbMjSriCGczwWX73gkKiZgNfrisPhTXdjLZ1b",
  "key6": "2xgum7S2QyxYNDH24vE3DEYA7gvBpuCMR16nem5SZcSTHp98JWt4pkWywDzvXHzEGdc8ceQH6VCGMKkMabCKxmoR",
  "key7": "4X4DQQTVSfEmjrT79ert4kayvTyk4S422yNXRELCg57VpEDM4o8VJrTXj7LbKEU5ZYYfdu25eojejL7GECgBe3bx",
  "key8": "5aPwcnj9EDTe2zrzWV9mXyYthWzpxQUZHdLGgwUeH6yK3T8X5kpj2qhyyDUpRpQxeSscMCkizFzH5hyho1ZkfPMw",
  "key9": "zwaPsbaFsA5FNtAmbaTdjhgHkRXyhAvSUPTG63rMJotd7aoLnxWs7vR82W1GVouh33JWoNdiyEcUk5pS8EvUXUX",
  "key10": "3QRvi3xptyrfmgisT7G2uxNLQ9eKxYVeXGLsTKLWhySPydJ3d7RF3Edy7ZcuMsCxKZ9miehdWK67Q7N6KTjakGpT",
  "key11": "RY3yv9F3KRMzMQCatRwJvPAJjBf7YBBTjqAMdztdQHAy7nWwphySEaaHSffojRLHRWtYgnYXWer3tBxJWSejQVF",
  "key12": "4norqez9Tngcwh36Y8tx8ki7WA31v76viGbVsvqmcHqQpHtnBEM8HVCRQWZewyLW7VSSC1M2jvRCRHzdFxmG4Q6Y",
  "key13": "3ECu9Widsutoe7yhcmU5VMZ2fKDLqJdzf1qvfmRpS4Ti7TUSdVYUbCs7WJtRsusMd13rfowGFN1UsvfwUxCfsk8d",
  "key14": "1fbxE5VRD1qSCVfhW7hpqAJwd28X2KJa7TTfpKD4Dk8jbXNim1Fhy1VEjjSKpkpNSGB2CQiAyAc6yWDFHfXHJ3H",
  "key15": "2kCga9ABqfoshi33RtYPWz1VqgULSnG7j9QgQ9RGaqFYLE9mp5Do2RvJ431QUrnjQpUxSEjC1YshwLnsS7SoXMoy",
  "key16": "66kxppKxTfr6BinyQkrZBTDg9YbqA7sFTQc25mSJgFCgPpqqTqCrU91Lh5RBqoty8zQE24XBbmwY7uGKM63bPZX6",
  "key17": "wFTZMMNKyYbhRMpgL3ywfKGDsZc4gVRfQksvo4Atb8rpaY76uY5hpgNGFHkiaT3wXPKAbkRVb3g5z3WjJPPg6rw",
  "key18": "5zR53PhW8YixJ41ZZ3mNFm94gRGqBEKTJT9RcShHofyobgxLkRYGhaFvsbB2LCKudDcTRG8cTniY9tYQvrZC1B7Y",
  "key19": "2j4PKtiyRJRNfcjMJPhWP9RWVfdjJwGsPzaAhRAv5ULr7F46wM8gJYSRXdMggNvVWazmXf2hqjsXH5xE1F1cDojk",
  "key20": "3Zp6GVfw7TvuPATVKaXZrdERXQUW6vT97FJQyWtTkFsPnRBQHbuBGJZbGF92EN3y9je8FQUXssKM8LsqrR5crnhh",
  "key21": "3MJZWCzFvpXjBzh4t8Q4M4SizRnwMnCnCDaHv5vNT8QfZgzyyp6SRx3Qbz9KJkcwoSUfPudBbiH1RBZNKvaFaVgF",
  "key22": "3yQHo2eKXPkEz6j8jdSjsmr6sDN4djwKaw9VKDp9Fe7LSsAaGpcmFqDmo5WQFvE5Hk1wTjVYmtUhF4d56hi7EjwE",
  "key23": "25RSYmFTDUCZsakLJEW6YQ9A4QEutsydFZcv6Cxzfs6meB9CToKPSHEitM8YJM72us6RLXkpVVnAbVeTTXGpsy7c",
  "key24": "5aT7eGdGZHrXMeLE6poNaSMhHjZDvGEAnsJs6UoHerw1DKotbW3fUHEuUjWqfvbR8uWgCW62BHRp6N9fdeLgFWTt",
  "key25": "3fbk9qiBGmRsUTZyzvSYLixxpj2VFW7joERuDEieH2nyFPVSwCCUvm1d5zJjn6W9aKJwsx3Fvj5QN98zVvn7DoHw",
  "key26": "55mmUDMmSpjwJqWhSsJy2HBP6gZny18LeXQNaAMKZ8uPT64u5pE1nHnNj4zGSQiwUH6bxxYWrk5w4BZTNY1D4Gzm",
  "key27": "mA1HXp1fS2MCmhKH5W4nFyjndJF4XMWTmMXNce6GMrHXQ5w9sDxU7ejNFxWX1YXvbYSwypFtAe68TMEco9A7wUq",
  "key28": "3TAWqdgTVP5mTzRtn9UwtVY4HmNWjRy6x13M14ZmT38Y3g3ed8gAMtCDqE3uw1VDiwyANdsczaxrPP8C5J68zyU9",
  "key29": "hx8Ea7Pwh257bFPySmiev7v3RBh8VuSiY4ZSjht21ZPHfDdb2cBAm4DnCJXwcNq3Ns4fEt4FxJfgBKFSQtgQsQm",
  "key30": "4rxHGTDZZyqK7o1myngKJh9Wux1MkLffdVVxeToPPYLqd8cnXmCGNKn2CjQqaTyUkY55cJxHTv8XhBxAfXUi9mvo",
  "key31": "4AYRx7g697SHVozipf4thsrjZrWxZ5eUVf9Mhv8G6BetcWNn9y8oYrai1FFqUDTgtC2jcWWj3rWprfyhKGFwuBmB",
  "key32": "dJPj8V5jbpWtY16tEtbRsKw8qaA6KDEWVuZnZaVVofJP8wzrKwXBw9TR6Zct4QSP6EJBjuMPoLdWapY9jLgBBW3",
  "key33": "4o152VjL9qWYdgQdd5kPC9w4MZ56cVoBU3BfajfVK99sRAoQEnn2SZgMkbqqDL5g4MtsxELCAf8tk8fenc1gutd5",
  "key34": "m3MCX3CvaCshcmcfkHwG4GSCeJgycQzZDf4zZifMtxRjFPNTS2mzRtaWpWUfetKz5euEeJyQUbSLgfZynJaGNA7",
  "key35": "iwkSx1XmDyf7AEMTDHngPDZnB7Lbr3KjF5ZCugwzUAap6z857ast4n1nXPm4ZpShhYkD6m5Di7taFtcDZzChzMj",
  "key36": "a3dKfY1jE7f1dHyDzf2ttcSR7jszVgGuZeYsyygLprLDkdd2ipV5EmQ27YwNfkamCHsCD76awaMLHg1XjeokUfK",
  "key37": "5pheivz428zNG8GtzpoAYyq9Kq2tH4xKCCoWLvccHhija3W5y1JrpkEAr2FabM13M4QRcSrxUaLrKCoRWQkX4vbo"
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
