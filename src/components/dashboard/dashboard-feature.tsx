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
    "PVmXjHHHi5QpdiusV62atDMxMv6JtmKWiW8Jexf6oc8wSE8Ft8EZBCgyTUzspzbh9PN4jBV56U1eZ43imjGfRNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXHcV9xj2HL4Du5xgsGnjt7GHb2eW2PSXWhMSHNbhR65UpFqhh7VAQJLNsMCfBz45xp3DY8Bu75kUx5CvsJVt5c",
  "key1": "66MYvXhpGLRbGn3PSfXRBbyPiGcrryQZ8KGoytK7LgwwaPpxwAxM9SrroXuqWYAj8A4jpwxJcp3a5WAbQ7zCGSHv",
  "key2": "42Bh2NmDyJyipxAYp3yvM4RRzGrCoNgHiedxnaABoHRgnAQM1FTVCfs6UQ3U6KfdbdonJm4zEruydMoxqz3kZKhx",
  "key3": "5tgiF414DJfuvqCDS4isBCpNjmE6YKEmfKoKp4hqW6pEzN7pKqjrEGxQ1CTXHxRksVWeBoqeVF9CPrzEgVCpZtsp",
  "key4": "4Lqgc1R1cEh3aXnjk9B6DAZZ2gTDvNK9gxuzgz5nx5KUccuS5UPMkhdTMKMwWsu2GLDBFWTeHLLGw4dQV1TminEr",
  "key5": "3L1oQ36Xh8TdS2m5NdtLvxDf7fwmrjWxvHGHSydLJuw3nYbNLAr4zxREgLFNtkpeiy64G9sxrKvzkkamBjMBCzX1",
  "key6": "56eXtz9xxpjzDsk2Wiyomh5dZorBP2CeLXiF4DtABHCrdUsCaRLcWDf1ADzHTgwjvjNXokYABCDpq6YZupGMBJh6",
  "key7": "smdP24teLfhkeGJNseJUaFVEbYteXdiTPjMuyr4xPM4iVsw8gmYBn5MGcGTYrmJcVSNyVpxPv4emHEoF6JKfgvY",
  "key8": "5aTkBc5aToRb3zLcTWMEnDVp54sGbF3m8HGqFLvn4tmvMLbQkycLL3rtwE1VR9snMy67Q7V2wVFiAzPweYmU9aF9",
  "key9": "jKMYMzk14PN222ETyynhvbdj9jDf46NZBozN8RhszdL3SNdz4uT6PCcswsJb9DyqvXq9EAez58CCpYKB3Mu3XSD",
  "key10": "4CJAeiSj4aV5XFojy6HEcs2RTwmDBqWjqnHt4QwPiiEXvDTWtC5tPYySkAa1qJwT7LQ7xo3MiLX44GuLtVQRpBeh",
  "key11": "4jE5o9xDVrMvx33Mi19JhUYaWC2rBpeYVH5PMrZK7JeH6eVPdXwkH8JpBkzpCX9yxWwZtr2TwC6cwTnsUwuFeyia",
  "key12": "5s8xqp6wqYXq3XVmSZFvBMHqk8LgEf58gZh8xWBVuMzeedxCuWoW8bUuxGh7ezz6jX5vfDAs5otmbWwoa1J7nZvN",
  "key13": "qhfiJX9PgZgniELVV4exMphGnNvyGWGwFjcvHMpA1b3RhtpBHcw9ygRbJb7Wx8J9BwrCSxNLZsKvzYa4xUrhe3F",
  "key14": "3HcBQcqyhPVCsbmwij9tgZ5v99uNMLnUaBHLsESRJpWLAAjb4F1NHYQspiWi8zoVAVzSprCvUE5DpKnqqG5T3kZc",
  "key15": "5mXzTSN9BQKQMAiUBYKw7NtsWLvpg175ze4Hw7zR26z6XUb2KHBvA5eaQ1SD2UdTuG1zSdo1VnSNUrE33MixEKiV",
  "key16": "5TcHpDquiwWKVccaqGc5xvqwGHZzw1sPWBNwUDf1JttABfSXxuLePa6nn8SaVd9Xt72SpJRhAhbnQeL3LNnQ9awJ",
  "key17": "4F14EykBYNGnz8CA3TKkPbeUjRWeGGUqbYS64fTqMu8pYP2XsjkvSiuwEuXyfXX95movm5pm4VS9pLJJ8R4wJF1Q",
  "key18": "4Y7hnTNfneFBjpHim1tWcF89feZauckigsHG6r4da2g32b3T68xASFLjShz4gLxMvYhG4UA3Gf8YT5xTEmhUrtcw",
  "key19": "4hMaepgbwnxSaag3VySLpgbHfjkj6FqTrfXnoKhPAURs9g6yJJv9T2oceSZ9Sc35LEXQdMXds6sWjTxNfExpGvn5",
  "key20": "2J2sDwC1rW7fhvJd4voi68LhBdmJJZr7CNpYX3r7BuF9cF6d1oqieXMtXB6SdCfAixJV6aqFRSVHV6hJPD2nKmvY",
  "key21": "4wpdPqvdLDmVYH2whXGN6arh9yY524h1J7GFgSkueBenK1aJCuYNmozKC7pmV11Kid4qNkF1bAKVt154ZjXtAEwk",
  "key22": "skNtz9TPSgf8JNpkgHNEbMMkxdW24c5MffBFbvGzFVmtAyHGnQvRLKaJ2VpCWgbJyxnATEPHkTvLN27zTg5bb6i",
  "key23": "37KspDwpBGUvnXu4G6md7FJXDVHpana2NNwd8zHpjABgo1rTCeWW8p8xvTRZUKzzeqV6NTKdE9dfMGxGYq6y8rt9",
  "key24": "653QLiijfqUK8nWE3ZJ2RdXE7Jcojabp51mmNHQmT88FWmGJsXvPoMPEynZHdjoA16JS1EiBbNmqfyF7rUoC8LMN",
  "key25": "on4rmCo4GgE39omJgUxH6um5YccYm3ZYtQzeb9gaqPJCyCtUX1XW9CibQGk6LCkLQ6Fs9MA92gQQ1Kd1WweDm6J",
  "key26": "b3cCggowNeoEYKLfb5YvKBVNdwU4J8mXXNBazewnZM5qGkwwwFVEEwwFAosp8cF9KykKWU61U8k9xGZGiFzQdgv",
  "key27": "2PQrQnBHXXo2r3TR6tt4pnGyi1ZHcmbCcbNotKoZXZprCoyRSixQ3Aes3evof4po2TWiGm2eTYnkuUpSaZKMekGP",
  "key28": "5yeScvD3z3XQhqpjpH8fnoG2jJKnsZA1e6UUpFzyYGZnePreAB6kNVQupx8gtka9aFGvWLAQqYdRjDrB1hTgUVUt",
  "key29": "2oFECsf48Jd2b52qSFxVt5mkzeHoYTS2ZHQUUgKxC8dVWbyF8b47LGw8MT8ssouR2X1E3bU5CW53m1SLAotnUrn6",
  "key30": "2PZvp3HvcJFQ5CRiBTcRkJ4dx2EsTfRDhdLATY146yz52ugaUaCJ5JjD2mEZoGTDoutxxPytPJ6Axi58PwFFULYw",
  "key31": "3C5RtkZkE6CQN3vs99L47zDvgyZjp3MXH3FfhfktkWjPaH2KWX1Qdm7Gsd6shxgKhGFxLBeqwiezC1kPWmVgFE4U",
  "key32": "bN8gmSmorJ3TVKBPFavMkfYhorxghvYLXYAs2mWYLmMPtMaKA8QgY2dHRD92eaEXvQUkGmDsBXrPd32e1wFahM8",
  "key33": "65C2DmrbqQZsg1u1F48H6vzR3btEvsd1BniVSPi1Z2gNJ7SJQ7hALoeg2JWyeFNS3CdSfPEdLtwJK4oEmqFNECEp",
  "key34": "4sJYwuvk6b1k338hKq3qDAjDiNxkiBo4wMn7QbYqRMCMF9cRtrMZ2QHxxXSYjL6hcMYMzGuw7of3aj4L7q3nbyTf",
  "key35": "5THELphC8fp9cJSf3UTVgDA65yBZzoVsVnGiY5LqHpkziryqQ5eDKAA1NN2eGsDg4hXE6QJDKp7Ypzcdgs31McoT",
  "key36": "558sk5GtyqN4idwtV1JHpHr8gn8iYAmbGFjJfBmaLJ2tLXmBAop1xhni2R7nRPpM1e4iLcYThbC9ee5hKvP9kZ5L",
  "key37": "kYoNq1LptHon2J2K2rwFUfqnS5CpsGErU3vsVPwYu5tBhqu4iKFVfvw2VWQYD4R2ixDJ5ER8hLwayV3bWErk6ri",
  "key38": "3hj4EfQTbkMQDLM8dC9zkJVri4x5G5bXk6Erj2u6ncD4KUiFzUbNDG8ia4D8HZVBNGhWuTdRj68CiFyCapU6iaZm",
  "key39": "33Q2WgUujQ2fGbb7nKHGqkRz8YyVgMzJPWgWZ8eTUrQjFW8NGgKq7XurBYGFcQj68m7ZqFg2HoFH7JGWpC1zzfHK",
  "key40": "2McQNmTzu4PnJxBxhdmREDSqiAacPufMiXvmuRAMSK5AV1EYTg2Zw14RUkB4XKRrc9XoG7EQqAa9Cj2szqzZg5Q8",
  "key41": "2eFnoaxcCuyxqHBnUM14JQU3UiKgh2m11YP7kjXdnb1sAVXtxZiBkii8Cy3PU87CsVTKNEyqmoqKh6b4eFsgsvhA",
  "key42": "3nPNYLjfNEALcjHAswogVwRj5Ya4ZXyipHRmPoXG7RNwegCzUgEpxbq1ZfKudh84j3BRhtUKaKN7uKAAkeYvjxK7",
  "key43": "2VwMLTPaiJDPeV4tMCCZKnQR54epxCK2pDUrV9b1pv414cRByki9UVxDSJiB5sjbG9BgSKGsATmXwzibNfm8Vkny"
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
