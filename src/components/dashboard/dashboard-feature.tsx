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
    "3kiGFfZf1uwehLKpTpWavdm9HrGwWJwhWZr5TayxsWfNEuvCBnRefEeCPVskx7GLySBdzHGDjHLgnXFM4HgNAXsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b6yyLPc7FmiudkjahcwYNbNzz17BRyAyScPiPtijs1dCKsAR3Sj8SH7xwvnBcXCiTpnGPiHxX1AZV9iZRLGRtU1",
  "key1": "3cfcZuD3gKDLBcXoNAgrV81A5WTBKTbLfe4GNfHWGvPHoBZtYk2pdYKC1zrB4QH2Y5Ese4BgBfuTky3xSKaWwCdQ",
  "key2": "2dBn7hC6XY8qkUUzqCkJxkUHFX53Bcs4k4RTurHEQWEAimttMeBWQLhCgvCHVH7vP5AL6fn6Vx4hhExd4VBAR1xg",
  "key3": "3MU15t8ZnPzXwYdcRYFPH5NNEKg3akQNuFqL4Jf1Vtc9K4P91iMjXjphhQRQxT6GNjER2KeTyPMQRBv6jnUZTg7Y",
  "key4": "4N4NY8VfnKJRC6sTVynJPyvinbVBVhdpFDwad5yoHZnvXf8kYFpFX2GnMExiSH6F3ivhYmgJMFpj6hiaNLQmx56r",
  "key5": "2ePmhqpYx4RnRYCnUY8jqvdTvs1BfbePzqHDNM2UNKDVb6BWdxVnSpeMpxbCjBsH2dt49aaDsrWfuZFaZJmNz3q7",
  "key6": "3SioixGNWaQYZ1s7U8MeuDjQmJ1Dga9xj1nCV9UatV2N9AUttVJhDxmgRWdKFmNpeBMvcP4HZ9dA6xw1rU3hegdy",
  "key7": "4HgTjP4ief2rQb3cqvNjemXm4gd58RJssYao9ZXyyQP8VzqYn67KguMFj3DLvuH8ojYhBet4R6jN7oJZp768ibaF",
  "key8": "3vFCLotkWhAjUkfH7qQsc36LJeuU55Nqohi1uVCu2Z6tAk4BW9gL2LXmaXdHZQusxSwhN2UZn7r9QnT9KsxJkDZ1",
  "key9": "2RdFbPDtQFDaY9V6UJdeggHxtaTmWNCA1xaPm1qkxFYPL7hqyB42yMUwDDa9dVSGmbB99o5e2dZwkutJ58Ft23Kn",
  "key10": "rjGaL7VkZSk5KDzhiUJ4BE1aoZBqDFXEa5tU1rCb12i9vmjwjMfpUJCgSimnABDaA5vvCANn117oZTitDqwhR4k",
  "key11": "5NfAFiyJRJo8shcSsKEmC8HWNigiyBFTLSeZiFcRMEmm6DRjDcHfz4nR7zUPj4H4QT7bAPHbmVDQXF6o2Nc1EVU6",
  "key12": "3exAdUB6Z8SK5nh343vakA6yxJFC1yaSE4w83JzXdzr4aywWadprikrb8XXYTL4vkZACjgBLhKj2z5Ry45xiEweJ",
  "key13": "adpji4cAZvVFdk2jFTEmEGur4DvRKJwTQCHbgbJ649uLhfWFij7qjc8cEpZT8BqEvQuL7Mb4xfibWxXX8HxzohX",
  "key14": "5ms8kuUyqyjnH9wN2Z1hogx8tVHEcJ9QquprjHvoHi3sVG9XoGeFCoB9kwy3grcjkT89Jesso3PEf8ygng45UpEe",
  "key15": "4jNEktZ4Embi76MJ6eZprUoadhnA5XXzCULiKCamyuNq1dcztvt1CjJCSU89EGSrAQEKiADYeZn3LJHqxQNRzDYe",
  "key16": "33RdCngGLcVg5tMmumu526B47XrbZZMEfa7A4mevr2GorbaFw9jUjjyfxW6Tenysz7inVJU3YJ3WXL9Q2fzSHxtw",
  "key17": "5uy57eutUFQveZmnBpNyiT5YG2VLFqLprDqMezcS5P5BYVW39foDmMpmfJQ3i4DFztQBpTdBKhTm34Pwb6BWeEqb",
  "key18": "5Fsa5WDoc1gswpPfAP4fx2z9koyPnW8CsY5mEMTgWV7Lgu74nxqtPAk3tPMJh4WW4LtwPu4V2sEJw8synkqfFkWQ",
  "key19": "6Dqn1cXMUueX7XJSjNdH3vcD3YmrrzHciEAoLQKSv4fzgX2ETUn8VPfAg9BmxM7JhVt7t54Zdk3WnxpMbhQmU9P",
  "key20": "2P3yC5Ytms28xgtSzyL1FM7fCgyDkv5d1Na3aqMSS8vx25XE4QTCPe6WubxwKh6KwTQh8NMrEqbu16vCjddg9rqm",
  "key21": "tq2v8utYVqr12vvjWTw3889Yy4jS2Hbdwv7FCokUQxWqvKCKhpb9F7dum4TqXq3vJoxZuH9W7pmAnWFYfSSWRnn",
  "key22": "WaiM9x7LSuKtWdfNW6EYwhrJp6VvA6tZRmhYB7zQP94MtmbMJyCimeSACT3zd9KVVxKfVM7tA5YzocseeEB35ME",
  "key23": "4PVK323ab1wdf3gEuYfhL1zn7mJZMUyVK1C2X3Ym7cF357BEY5PX7WPT1jysGqsBY4RuGsDmCu2KFzpCJoGmatC9",
  "key24": "3Pk9TL9PK4kbBcuozbpHzfN3aNzuUYu6faQFhGEdrUm9bm3mruZUEy9B6gefk1KVpL5CDXFV3mswMRiHWamCDVPK",
  "key25": "3HVZjVeW5qWA1kdjAi6QgnuFcMxD6pcDDj4fzao8DZxBjz55o87SJ2FRG74euczKi9YkKw3MWj5YFCwRauH8aqwF",
  "key26": "3CeaQ8XZdoSPXCdWNxNCorTLqj6sah7964WaLYqBhxwtFeNxCaVHkjtWJ5srVxVpgAieRSdaLctkxTPmncT11Poc",
  "key27": "5XUSJPcj1tEhFgGhxuUSAz2wCwQbhMpog3rdmMK6bwaEWqHb9bsbqKHHkoKS8gW7g4xz6KpjZkAfAvWrLPVqdQUT",
  "key28": "3unz8ru4TirKHy3dCQnWNtimDRKiPKwRJLAVsWa5o1wSh8oSnKPQnKFrzCAGcDtqzrYNE7uz82GXUZwdKmjo2cKk",
  "key29": "2uRUq8ozj9R1xuDnkvU2grpd37wqvNZqRJmidksCWe1EggAGS6PW2aKbmXRyJqimJ7RWqYF6dW3V2bR1xUhfMFEC",
  "key30": "2GVHk4xg8yZ4zoygePof5xVDKGCmiAAy7b2cUeSXKi3Ny65ukFaKEHNyx6jm7QDsdFo8tKjrSC96QrSH5ePyoehM",
  "key31": "5tsdH7J4babjxk12epd3dPHrknRCQPCHUzRzrXofWFKmGzfiFAt1XyXPwJ5G5EcJdtrKvmnCHisNMX34Yui9iTh9"
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
