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
    "3MqKDQdH2FNGxRmHvAyRCZLHgu8s5T2XQXdZos1ozy2SPUZBCtBGKzRMjNUC2D73WMm1nFYYBFdMVHBV93iyKwkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "erjvAiAFmed6hoeVv6VghETMptu1xRpN4ukWKoHbMBJaSHWcfUAJpwA9szLaduYtxoRfvgdU4f2GvFbosmL8GHS",
  "key1": "49KhmFEdUb9mEDKoWe1ybiApjveZgUkVnNx8yKj2CkxatwcAXhwCsoZzXJGa5scrMN4Eo3geH1ep9Ris1MWt4tdH",
  "key2": "yLnNBgkSBmiNwU2X9nKc5U95PXzVMYfq3xgNtLvdrg3wJBo5p9sXDecZekDFvYimMpKoY9s7sosBNeharzwc6aZ",
  "key3": "5YbVYjKUjDFDPUDq3g1UZmrYUoFRDGKCHR1gh6GjMiAM4yPJGYAnCQBaF1q4p3YLeoapWdGKAiTmNtDaPbS4SmrU",
  "key4": "qZ3qxM8z6UfNqzoruaVWjAQbmu7RZgTHq8hquDtMZ9HdjF46nPpZEKCLHdXVjKsWxS7a92RprJCDyLCXpb5i3pi",
  "key5": "5mUDZ7JzRpHCG2KrmvAMWsCUWjHpLPfaLWRRCqPeqxCQs3P7zthXTBTdgZ2YKYbeDKWjRLhyvrrLQvULPzRU9VkA",
  "key6": "2Auwucda6RRaFdaAJ2cRP2bwrdxAk6ixGpZ5PD8gPq5aCHegKHvQJjaYojsPfRRAy3dBgL3ebZi4k8TXvBEKiQcp",
  "key7": "SH2GMxjDuzArJiqda4Xxb9As21YXcYdW1XPHQknNSbtGMcZWpq5xEHEA2K8UNswysp6hrYsqcPGh6wM8n2AcA1N",
  "key8": "4v5ha8oVrB1TmYg4Ser1oaL44yJd7cYYWRDwWZP5CNtjeTruVe9HhS2RL4kXhNBsWQvTspKYmUX9SeT5RHd12WPC",
  "key9": "2LNbw3vsRfSBVgM5xhfkHNAd9rRF59fgjMoMZyZX47tGK1NGh5AJpvwHT9Q1Wd5UcVdmVXAZDFkVjjYRQEieySkB",
  "key10": "5y44ALDmo44ZKeEwNkvuVzoQTzSxvRRMDBC8Qiqq5pc4dPDevMk8KaaKXXzopQ5TjgwwxaiW4hFtxaBmCjGqKzZW",
  "key11": "3rUNijrJvQk2YP4oCbG6veUjvBL1Z3Snys2kh2MV7yQWkHdbN5ytb7qgPX28XPQS4EhiRekacacR1E6rG58PpvvF",
  "key12": "67qWYeqvu1tvHZDHbcRG5u33ee7ZsgR1xQgSSKxksgHRw9mqEA7KcrtwseCGwysXEHFkUbEBrJuSZp3uvMhh9T9Z",
  "key13": "2XBS9T9CkatqNAHJ1SQwMEdVB5oK21W36PWKFjRorT9deXVtr6WaXz6tSrdcNgCu2zquLHRpschcBsrjxREFJv61",
  "key14": "2pz3zuUkmNhjRnmmEnLUxS3yJx7SFPvsK6BCgVDV492pqGw1EasSahfXj6aRZ6qJ7XwpzWYUD8QjxHqquxynkvFf",
  "key15": "4J1SSYVgAVitzqYn4TVCUP8qhcuKcMthHKXAAJmWrbR9ZsaKq41FrYVJvT8CxQBPn4s4Uc2pBTdK1xQT9wyzmrqY",
  "key16": "5cHDuZUvxpx5JzvX5crDbSbi3StEW7wj5wDanYukqXzoTKKb1PJfbkDKzEVCeM3i3R8KfRgrEQGydz582kste8BL",
  "key17": "2KaVrBJM5pYWBjEiSiBBchxjgkRDBsjvstsv1vfmjewt5NnGUzudpc3deQknhyYZE7UQwzvq6mxBE1XNLZ1BBW7N",
  "key18": "2kAzihCUdQV7GvoiLfAfDLPn6FCvCWkopuysZZ52x6mW9jZcuyYnyGWSoiELbvA2ekEDAa4bcv8umWyaSvDXormD",
  "key19": "4UWQMH8JUf5zkCeDAzyzkvRULyJpMSgJiMTxR8iuftySoiqm74wWXHRA7rE5x7LPR1GQAKWnaupqoPtxQMoHdGJg",
  "key20": "3ABZHVAz3yxaEofRq2dKPTtqRpHsr6GMRV4cLc76LWUtqTKqPiAw76mj3XZ7YA3gWCnNGsAF7ASkERYpxrqkXdeD",
  "key21": "NQTtbyTMu6mvAU6xNueRjqH359u6Z7zXfcWJEeisKKm3UyY6tvt8AVmd87ynZPtHHMhC1xsCmiZEYfPns2vor6D",
  "key22": "3hrBotDwFmHaZVLeKLFYSVeNCbsjFDKWeANb3PiGksF79q7mpq2LTao15CQsdmBxokfngHcBzjacDhpZqFjTzCud",
  "key23": "wPRuiESP4cZJnTyLQVrWRTXcia3Pq1pg1rVJVjgSFE8idysmxpcCKowFUHaHFS1YEBYirUu3rWzqHfuzanX1wyn",
  "key24": "2iYCwuxD9bcSqjg1bpR6LZuPrLpLPpM2KSpqnmfwiqRd67VnBkCU17q6GugyLXEbEDYcjCKoMkusQpujan6PRucq",
  "key25": "AHUZqcGi5bizVASzm2rBxLF3Sz8bUV4V7NtAzuWdZ2ao7M8rVHhFNqaKLhqjMTVUAASvRrzsBTvXnFkKD58tciR",
  "key26": "4QK1UKSJCqWcpvxvZBeNaSVHyu7NPb5ztn5LKToUJFL6NqQxZormcaxE2m95vUmc86QbF4aeojN4CLv15vURcwt4",
  "key27": "jDqrPYdeCV88qokPwbth2qjVQzSgK3fF5ZaEHyztDDDCSRPizFKrryVhhTkqCiB3t7gn6uT7dbe8JxoJXdDMAFD",
  "key28": "54Fae8fWGv1HL9fzXBucKYEPxcqeB1qWYLng9cDeVR8op4QK21tjuvYh9ReWM1dj1uT2Ei4zGvy9KvWJ6GNTHWz9",
  "key29": "3tdFTsh28CLqrdYLcrwXLtUzx1GswsDQgNAJp8wkXdmk3mJ5SNtrAv4XSZY4pHpyqofak7cEVWRxVFUaBajmxcoh",
  "key30": "4Q6N8Hh2n58meoaCxVT1mnfqYtoixcNcQSgxSE7pH8gPPDngBSWG72bMGKhvUofhiVrir1De3MvVpm1bvDfPAyZX",
  "key31": "5pDxyRPrM9spHB3y4rnEFGNjyS8LpFfijkBzmhF5i4NEg5QJjrsoA2GAoxNPFkaGH4HSrSizx7i3tVnRW3k3usPJ",
  "key32": "2Tf6pV6DeCtJoKaUZSp3S9etypmN4kDmQEH1oFUNs4gzW1pM4RRzSKFDcUY9esvy2DyhCxAnJGPKLvUeJ8c5LuZZ",
  "key33": "ys63ZfELboEahFi1aqHAM6v7JK5UQeEo9b8KBbfJrAR1UYL3HDZTmeWRh9vwYszwGBeUNxAcB7z1xjdpbG6eD3r",
  "key34": "3HVve9bPW7MujaXe3SJend7fKnM7YL2bGxL1ecEQM1idY93G4hFunXdCqDoGq6puMhsjkRa62PkUQWAnbiCvRFKu",
  "key35": "5s6diWv9bZSxYUaDAFxkXhmQwSB3y3FVFM1x5j3fmZnTqcnA7qnZha3GyFmR8StKAH8oKKP55LGiKoEpysmwAw42",
  "key36": "4beVhdzrfdozREU7REfAH9KHQJyMTSxdQdaYtAA2z2EG8HGH6mTJVFbo1yanK89xQTaDbUX8GZCJwsGQrDmg3H7C",
  "key37": "2o8Zu2ME1HzEStyaoEfLYoh43o79YBU5pVK5MRrxwMKRDh4vDPRBR9RWBshj5gMabAwohDtFLxzz1i9wvaHxPcxp",
  "key38": "2ag3GBBSi5ztPLLVPj3BsEUZ2mSisEKpE395CWgp2pTosyT9bAADtkWJ6QZGiqDigUYQvfyce3ctC9XWBjobFvLQ",
  "key39": "3cnWUQPRzWPNkRmjwDudEFDiK4ssQPmHdoqGQQ3Cnv5AXjLNvwUmmr4vTThkwk55Jj7xdRJYaZcdZNWXL38BhESn"
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
