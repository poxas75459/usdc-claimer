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
    "4V75NVmX1MT1hKtBRhY3GZSN9f9i1XpnDdBxr5vJTALXMR4UftuQg4K63yQtvw4JsnkWPiudMqk1navUcvMfFZsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F1m6MH5qEAwRdkmfM8nneoxcGSJUkUZSvHcAerchPY1mCKUgb5utJwmi28yhZwSYURCbCaLuHPWRPH4JVD8E9Ka",
  "key1": "bMC7LEGwYiRawK2dBhxa4ZnxzkxyXbGqX3ByHVcBSWCYp9ufPvcEUuipbRKV6aJApnEMerg4i3Q3R2b8JPRdGDd",
  "key2": "ZQAqanDCr5jbuvYcHPAXLfEZoYjdCJYwsPLyUzakmw7yUqp8We8A6kZjg5oe3oCzAh4KW6EbDhYhh6XEdLe11dH",
  "key3": "3vqENr3Saa5XNht5jSf5bytLtAp7pHCXF25dEE4y6nDYSphtipVtuj8qsdJh6j8TUMgu3quE25nBMMvwWrk7uJge",
  "key4": "5ViZT5hya9BrbFGXmB2kQyTD8vzm8gCXk4zZ571oxGH6vfzVLoiS8SHcgoK7MtSGkbpcb2yVoqSuQsSirA2pBRcM",
  "key5": "2ZAxxDKyNjzX29d9TusGK7qanvcPaucqG5EgvN3DafrggAYEtRuzsWA3oqMtDsz7ksCxbKELMbXKY1mWnngU6TYz",
  "key6": "ZVsGG7oNzb46ZJrNENamuUArUuxrVzWXR6MCg8m4SiJuVsKcPtrLgDyPdFBmT8zR9PPtzQtT1dPwwK5QSje5823",
  "key7": "429UiuBQTCnBPMCGpQVvqNEzDXnB59TZWcTwdghytXZ2UjZhWEjMu78aeqbPfHXF4FJTrGExaPoqUf74kjyP3MmB",
  "key8": "3PB6PsHsrtCs4WNWrVCUFxpyMQakkBjqB4yFRo8crkgbeDFxG4jebANDx6k7aEJtwMyXWvL7VcuGnV6X4WfgJumb",
  "key9": "3QVpZkUpbq8wRbg1TVqZMbTVEksE2sr5DJQXrtjqi6PhePxT5nsLmMZvfrNtM6i9k1gCWuUPw7GyYE81YheHjaa6",
  "key10": "4cUhsiWfvaHz6E3jmvEeUT71usba8LCEgw9Kf5sXwQ4rtwFvYDEehwBQd6pLGyNZMrc94xQ9vCJfbPGb2ZSHNd95",
  "key11": "3QqtjJtW5zwzxVPGndhFUfBa2j2dq4S1ph2vUzX8WBUMGjpdCf6gKRCHx7ANVxKcXWmMgin2mmYej68tsM2uAeSi",
  "key12": "4wPXEC3HUufCeiaTVTAFUYKnKPAt9XCKjUFWseXz2YoXpXoXYNJ3vpG3rvJLkn31jMSWFgCmCtgnLGnCg9CsyjS1",
  "key13": "eQcB4nWLKvgCNe8nzt8CsxhqCcAinpVvX36JzjzJHu6NrVcFrSDCpo63ySSLRHFfBxJsHRE5cdUj167G8qa3dPa",
  "key14": "5cz8V2abyv3ieaN6bMj8rXEpZZ8ZJWdvH97GTXqevJNScRbKytMWEdgt8VRyeRrXgdYN4KgaQuRnemPC2nAnmc7L",
  "key15": "3FprB2vU4hJg7xqZDWxgW7nVy7KRgEnFoH8NZ9sHJYszN64LztA7JzbE2L3Af2MusypteS7ANiZLYECb7fWQ37GA",
  "key16": "5n4iUoPZyuX7ya7dtKEXpTvvrQV6X2s7h1GnGz2AwR2Dyj1NBJV6nXPLWyY28qPkD5FYZEN9zmPu1fbyUeiEDv9W",
  "key17": "5o26vNPjjx4DJqij6o5sEwqrdjYgyaDULy1fFUAEfucUbGmN6JvoMLiLoshLBu1R6BJdr9A6WmGEpjBYS86FfYhn",
  "key18": "3gDsXTGm3a9iW76Q5rrgaZRhQLMVzEzV9tHGBHyodp7yWMem4shLZn62TvHvTcCgzouPM8sNvSDZkmQNxW4gcbsG",
  "key19": "XbCy9KWaCjxAtBexJttBe646Yymose8MQyp2G9srgAUuQMeyBwfBhaRZmxfVntvKpUKfshHhXCF1muXbozWxCd8",
  "key20": "4q5AE6jGSsQd5CwWydWw8efh4yWzqrBLDGQZMqkGczva8Vp3txzyEyUgAoVHeQefjbmoFbtDtdaJbbR5h8zXwa8k",
  "key21": "5BLghAwtkZhTSNRXKmU4m5pKC8HcwxTCSSbpn1KPgr5Wiz1GBF288qGZJrNwxoGBUThkSeYX49AzCiF42ChrxGNw",
  "key22": "2qTMj6Lin4DMzwgkL2QHaHGFsiTLp2BTVBTheQjpCGeXcfyeC7RaWESoCXrSMhvZwzUvRF1gGwnoPUrqLdLC27Qn",
  "key23": "4rbLyvudyxbeZuwyy55yoszYFRM7RBmyyHPKiGiu1GnzeipeDUde9osYrS5U2E5qjrYDCmaVyrKF9Y1Vy5zcC8CW",
  "key24": "2tGhSxXyYRA2xp9cJcsFS4JTrZKAnZh5Y83q4RA81XpuFn7H93saZtC3C6f6vT9V4HjL8uHuAfpsdsM8sDZrXr12",
  "key25": "3NJHUBduWhZTKuTpnNZErEaHptFc2HntFWuQYd8ujVqXs5rYw8aPfc7kko3zYjsDPo3xf75w5wj8AeKZABDEokby",
  "key26": "5pVXo2djrGbpnTPuU6AmMkyZUpZjtCbGupv9CiuGLxgzCrf845NEa3NupkJGyQvkv8rg1A2dbDnryNcdrnCwMSc9",
  "key27": "5WhGkxm7S9t2q1rdeDTxVucoDdP6iNEYJXMz1jVGN81JsfdmL1KNUSJdkTsUC6C2hvV7mpJ5y73ADF9dAymV93At",
  "key28": "kazdDyE2tSgLyYGEyKT1erWWZfj68NsBQF3dvh5xHxHmqpyQfRv8fEJndDNkWATqxytzHU4J6DNMBa8PrJJKtkZ",
  "key29": "4R2nx5tNaj2D4ATyYjJZFC7yD1TfCgiH4RCvH8FvaT5GT3ydvaVXQGxzdTywXuYYkDZa81vc8WrNxp4fPpQgC4Hf",
  "key30": "3KRj2U2JA5Mm7Y6hnc3nrqgwYmzJCNhhshi8X6iBVP2ZQ2uMk2esMs8TsQbPhMmLQeKYAHSqDEDyXVgtB58crY5Z",
  "key31": "2kCbQ7eHLVvaqJ9vDzP565U2hMBmfgxZeEiikRw6HSwPBGTDmhEbdSZYQifHKpGqhSuY2338JzfyknUQu4PeWNi4",
  "key32": "3jiuwgVPmLBEfahPgKigRLR6DQtip5vvwE3Gav7VU5rWeQkHVPj6xhMu6v3xXp3fRvMwfkHSohHb7ZSFt2baiC1Q",
  "key33": "2WZ61az59WgNsF3uB7osi648ERsQRXDXKbgrUNvrVzAYeGKR5XMPBmPmZNjE75kXy9vJnbKwqMCEs3uNh5VKhQ6q",
  "key34": "35834ecT61VBeFJupXPU7M1ASeLiiXNtLbXGJzUFexnEQqYqa4EgEGgamFsEkn435H3JeX6TVNH7bdot4wnANbvP"
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
