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
    "2U2B86fQPP1dJvC3ucuAWrJoGbZeqJn8wTaUsaqskW7x19w43yRwYsgVg5Brw55KBbcCjPtJZU73YwK9HdviPz3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYUcFECxMXTRBHXaf5NCsrpSzLp988rcte66nGEAwqtBzirpG9PNSYkFkMAMW5g5Sqd7pRZjNcJU2Swn8U9YoZu",
  "key1": "2MQsuKhUdqivSCDc77t1FphoCREi2dqaHrs8wYzkVvsmkHKSLpv4EvRVDia5om5EKvsoZAGUHg76DB1KkB46ye2A",
  "key2": "v9pr66ctV7cvGxbk4GUHx3Rrf18HQTnqWqVF9mJk4cQvwbeg4NyVDGYAheWBvPyiX96hWKwrMUVNgqrK8hf6VDB",
  "key3": "5mKAUxPzr9VYXxrgoGdYBZNLswKk3uKL9HgkqfZXA8XGcxbtcDEbe7wmbNWX1JDrqsGk6QgZb9p652tp6fFb9fm3",
  "key4": "4k9Q7qfycyksFMcjYbPcRM1pfK1p8V7ui8urri8QV7CSSia3naj73Jy6Y4xeKzKYdyjikzC4L6T3Qpqoxe7taRTL",
  "key5": "3BQt4X8HMgF82EAbxGpr6eHzBon4WJYaaMFchKx6oFo5BZLV9YuM1QfrDWaDDZ1HTcvQZqcrsvMWwihSxHXyTJs7",
  "key6": "4B1PuMJpYLZSYTR4a1UHBigCKdsCX9qnDZRfM6h4Nwsw6btXRRPqXe4BqELb6nWVT7w3agp1DeSxd6t6u3rCMkSi",
  "key7": "53Pn4UUPdW7i2hdq7LgwXcAwTvJMaXRjvPhJ3kQ2R5FmpQUf4SBugrXZMhMbGF1bFdDAqazn9uNva75At9unq8Nx",
  "key8": "LxvpoLzigVUGzbouEMpYx93fydxiEoN9M5HmUFoxm7CC87vwSfwzS8g9nZB6QbytJmM3RBfgbj94n2NkX4yAoPW",
  "key9": "4YHdJ5tW6jhf3ua2nT1S1AAkKFPcuzeqW1wyMfJbgBcYgF5QjVZ9WgR9zw3z2tKfzUH1BgF7eXiA817ADWgBk3vd",
  "key10": "5LF8HNBhHRwpdb2j5iCSbq2XQ7m4QCbsYY5rLSr849x6zbunsQDUiM63HVTniEzQPgpYq9MeU3K1ZwQM4cZ8tJHo",
  "key11": "CLMBFV8PEwSQ5ShaDBtgf9BEosnnDUJdxm55zrEeEKVEYP5Cp2oyVySE7Kkw66CRSPN4anYrstPiwqu96nnR4WP",
  "key12": "4iGC1rL4W6zKNbMVmpMRsPYHjypfjEjMDhEoL76nHoQs93wQzho2EUYXaGzdcxHADatBTDirMHaiJVoxhgNpQoVD",
  "key13": "2MR6CaFyiKvbvwz7Nh3erJbFdThm7bXiesykyK8tjxDxWXQbtzAwmLAthJo6GXvdkdtCxHyA7AAp2rJmHZoHfgrN",
  "key14": "2SB4zU9SUkgnzCjRiRS5D5pzVUpAgWad5naSyrNdiCLy7ynDzPzYyBMc4QGKEUhSGtgioDjoRpchxScX7gP6dNdp",
  "key15": "kjxhucZBByq8fG2UYNvfY144tkhwr5cQhiivJKqoAYkG3d1MhhzMaWQoJArp7FdggHUJLiad1fZoL9GdX29vgXo",
  "key16": "3m7prpoQ9rAQb9k9xMLF7GTPSAMdL59Z8Du5ecrh7LWmpVcErWetmLFesxSEZyGPNQqRCYxnbreUjh4diKTzJgdR",
  "key17": "5ptL64xWAgGLZuszSZyBGq1qfyN5ZmqpMGbSUjqEzxFh9uLR8hDaSNpr5bgWRs6QcNkWE9tjn9xRGNjK5zsnuuLN",
  "key18": "y4rDrjR2Y5CAgjqSGbZBu59UAsG1GHVeBa4pXenGQkcZCQWzN4LSLNcsWdQJHmH4fReyWSQ6soSVfDAPcupaZtk",
  "key19": "59JHkz7wmjReBpdiJF3tJdxyUxeVALbv3MBnXXD1KTZGhyd98yNRCfvJQfa5iyMc991RjkBc9jUu333uB5ddZH52",
  "key20": "3QxwoZqLHxd2By4d7dpFA1VF5Wbruf4sohabPwWZ9ELAB9ne6q2kTfekvVPbVsBD9bHpnudcWGvKnVtncUGYrN9k",
  "key21": "2w6Hh4qaSgw7CwHfmTEYGKhGEMWVu7tqGiUYG3wTiY7abvs7jGBqB834N8qkNpYc7Ddu8c6Q4QWnb6UiGSRofx5r",
  "key22": "5C3XD6iLygrzDPaGPJSKDMcnU5ZH5ipDdBeQtzr7KZZuH4NZbGyxDjq53v9vAv1gNnuLpSssHaJqSckhgz2xX3SA",
  "key23": "5Y2RwWHm5WZG5oHoKY2PmzTmNqi4TMyQzBXpoBCnazTKP8jExmFBCEo3RVYZyGYs7N47uUx4RAseGk47mBogQD7S",
  "key24": "23gmMwkVBHnBRrbSYekC4iKgcP2SFkPccs3x57Kr4C71zzpYS3syoMXWw7mTcqn9bj8WbZVER15uTDHLd3TeCDaT",
  "key25": "JDuJtLaqvzghmDzEvpVuexTSQn8fzcZPTsQsTBaaGy4ijJzwa2xvuP3wyFN3jQiVLd9d8xTXkD2FjuNbFfBbnVT",
  "key26": "4Yhpn9CXqbS4Ck6adkQWoTYadbKFRLA9vsv4Dv1GTejLBb6ZtmzE1nVwroaYHpNEMiYoJS8ZRjPcci7QVkR1hdWf",
  "key27": "2DAoNw3h4J6Bi68EfhwmQchYtq9KSkGKeyMX1RP1Qrp76TfRZxYTVd7fNWqJP94YaEGBSaGYug9vZWXXaxfi8rie",
  "key28": "3i4d9PkahRye6GcNyfKMpK4vVovPnpe4jNGsb6w82RgUUpGLyyx5TNxtoa5NwCz1t98xE8i6x7tatdVaEGvwsHFW",
  "key29": "3qaGKphUGPkV6qZRA2QY4x9v7JQVc53iLT2jdQcJrXqDPNtw52AF2szuHyEuJyxbUuLGJ7qN4Fo8ubCeS9dPH9Lk",
  "key30": "33aNV2rt1dtBEXV939YF2LuH9KkCuiGniarpfaR3xgZo6yttDZyXbJjqfDkeCcvcPm2yKB1ZDvZ4EroHNZb35LwJ",
  "key31": "3D8U25ia1KMA6n4YUD3TSfHoo6fdrXRtfmp1ufpKdCCzNJsDWNc9bGbPh4yTjK2rkp8hQvfWNSAmMwC2D2EWy3UY",
  "key32": "2PCcf3QqEjGjvcwtmpJNG51RnQqgfUNNSaFDmstv1eLwirNUVw8SiDDoqCEECABDuSDCQkLXvWgNnCsgcM6RUwwR"
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
