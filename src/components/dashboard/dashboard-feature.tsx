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
    "apu4qpKY4YVHt6vvWATzUsVDJLJZJA3V8wytFkYDBxVPfoDkmR5nLBX1DhDM1FozKQ9k53xxMUKqb5ivEHXAZGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TXqTLG89z8RtMozxHb2eovzZa4zW7xuJeDqKtpy6r8Cq43GEET2bf66dvfwDWAgvsHcdGCGcvmHXr5ywDCji25T",
  "key1": "2qBfM3xzzb2NbuxdYQ7LyhAKDrmS8ZzGoAvjSbsrcWaSG8zpW6d6XM79Sz2PGs6doTmDeFUu5srGg7TPCc4Smk7Y",
  "key2": "iwiAwR4GGUiQ9f3yobtYhCfJapQf589tAkL6qvGHRw8H4FdPpFqCbaXGLbMSdkmvb6pXXy6RDtGBRssn1UoVKZG",
  "key3": "4ADPJQCGtHXB1oBGjqM1PhEdGiPLoSAB3jfBCzse7yCkMpxu75SP5k2AvyKD9Rz4j51EgSDNcDMxyawbNzAoGtsb",
  "key4": "3DjjA5NwF867jymMnpfwT4J8zEhZQgkNsRkj7spDXNn3v3WfjL2xo9BjjmF4DMo8mXPR6zYjxtsSdDYDGdD3dEXH",
  "key5": "5djBW9Auwd6TGePfvJ9VDGHZqdD9YJkrSBPn8q1K5Dj3jbK2fSXYEMhzbwYadCJgM8xzUEPRu92pi14MtSvmRNEm",
  "key6": "3FXQyNzQyEJtrqk5uHJ26WzDSCD57gmzSJKXVMuBzvb8MT6mtXFmixE2njrLUkTW6RAyij9GyGzLq5y8e31oxy6H",
  "key7": "4myWSw7GfKPvhkLkn7VxEUwJjPytELGShxsQYdKeLFhg2x3KD5MLB5i6DTciLNwewc5dnkDLbosczkoRUEqBiky9",
  "key8": "231Gi7pSN8yP9Uw5BqkeyJNYfoSpBDiZrRJNsSUk4ru9zZWQVVstezXUu29HY9Exdr3gjjHSsxJR9Jebi9PCs4tf",
  "key9": "3zGsTaSmiMLKpawf2VyPRJWxNLZpx1pfBWdHM4mgLyKZMNESBPUerXgEnJfd4PTzmG1LHHQ44QcKweH8bTnFFkGh",
  "key10": "2XHZRBwwthZ7RAym4f6n3vpS3L82EgJ5QSTn7KaJXoNYxsgxLDk5xGoh1eh3yGrNeeNYXUtGPbn6YG8AnRtM63qC",
  "key11": "2tWXLfeGSpVkKZpSiNiUK2iVAau24MCxCYod1kxnjMXsYR9rkw1hHqAGGtPRDaM3xTugeKNXCepksFBr9WTSTmsx",
  "key12": "45qrxRZusRUUZuEL6tsdWZUuBjtivJ2gPQyFHNibTjQ4Qou3vk8x8FVr9JUEnFCRAndVpqbAUmEowj6rA7ep42Li",
  "key13": "4UqsYWRv7xsDyRZCotAEv9K8PeehEHdKZ3VH9UBvjTR92deQvyGLGy8dGvWrGG5ayVDbCmrz1KkbNNLMELrJ4y4Z",
  "key14": "bAWT3uBYZbVeScbTiLmcsnKFBb59hPZABnFGSxkJzhWSY2XTneZd2jMmVX39RTMgY8ppnuakVBrj8ynPgwfsQr6",
  "key15": "4dKXPCPAqnN7nJCYcvTJ7Sn3SMfGhcMG1HGne4RAwEmFMhL2y1nnR9EHuQHYvYyPJtfSrjT5BnH33BzaY2zYuKAi",
  "key16": "2irBzRHUX2DUCkDffd5nCTZzat9RrMJbh5MNvCLQb25dk16YK3A65GLp9QnUynaNgf5WbtZooxA9nc4RTpRBSLDE",
  "key17": "cp4WQJMnrPywWYwHrfxBhLDtRFVbgJpN1C97rdy7cea1XvRuuxkHfJHJyVQzQoEy6YyRVXCWXvi5VbBHZSwGSCL",
  "key18": "2cjH6ZFJ4muKLX2s7jwDyWnkbveaK6EBEtk5j6vHq6fChNf3vUnPEctPBQKm3v2CuBW5bR5mUee5uGttmwd1DJH7",
  "key19": "njgRCKD4SBTfn4av7X6wQfTFfQSaXBF3PY2Rk9eXnNufvTJmwzsXLbLfFaWfAVPWa6FVxG6T2SpGBqu3yfrKDi7",
  "key20": "22FRJmr9PbaK5xcJsyTJxRHn9fi5kfKbshEqeTcxjLAVg8ra4hfR8LXvazhpS9wszpPet3TEuAb1H5piYQTTkNqL",
  "key21": "3Qe3jq18LSap4aLjAYGKF2pw6Vt6ddUMrtKtq4hKLNKQepXjuM1Jun51LKVsYHbs6ZPRgH11L1Uq5j6HjFY7iuim",
  "key22": "45xA8zhxQ5E7mYs5dAZm8b95wpB2rq1RDLSnYUKerJPUhQCMeUPbFLYAm98aq1XVnkH8GpoSa6uM5gjkDKxRJ4Q",
  "key23": "66M5Kpd3XFYggMf7LdqKr9SaQpU9BjXSS1KFeZzHN89VD1zgMtCYpyx579ShyTFsf9mS1mNKoP1KfHynpnj4diqk",
  "key24": "5N2SQaUXGYVCaayiD38N2vGDmzLnKBtcR5GmABFgT1sUQFLgxH8uji6MiVRZM7aPx3sufgoqa9hfLgXuuTziEvAQ",
  "key25": "3K7AgCC5VKH7VunhXS2pBtiW7EP2PiN2ZprjeEEiMsoYckMDRUH9M2rFt6S6Gq9Qt6773p8aTY5yRZn6kgD7xNN1",
  "key26": "2iiQr8jCssoSyxMXcE5TV2aWxGvSVwwoCvbPFxrq21JgknkmFJFQoEkrqY5jHTt3GwHRd9aAPqaizbfy2KZFD8Sg",
  "key27": "2WrxEJeHKyxkNq88qEHWnKoSpX1B8LoDyDfYy7y9LTuAEaYc9uMecK6Zkf3tmf3bq3ticZrxWaTGcdvXRZLrZYHD",
  "key28": "K1c3RhbNuvtSsTrMSWhyBphgrjgBuS5hMjZS3bJ52Uc7CxTgLsMApk6wXk7ABmA81qikh78qdkQr74GV3t2x8YP",
  "key29": "3fzUVb7Mx1K77CnCxojN2BPbZFqPSPT4JjfR7UWTJUaB7JNB6CXszh5obCrMZL4XMiciVKbapuN2MQ5eU7qw9N3R"
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
