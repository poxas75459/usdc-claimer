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
    "4yPWjTo9DpPCqzFZ1NYfKPUo4jdSUKtzWgUt376RvFeRb1zjYJM3LNLuG8enupuDiotRjtX65SKMA4hcvuVsugk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjqVBGjJsD4S9mHp8C8ir7X2AszVHn3RgAbg3n46wvnq8LVzgv5TSiB7tZkToQMeDu5JYkFFAB2Kb8btZ4FWmz4",
  "key1": "5kGRF8UFSm6AKMTUVdpLXKV33txmBuo2PhFm9CPnyFaZ2VJBf3dXpw6KqZX2bXBCZ9N3fLrvNxpHzNAXg6Uavgxb",
  "key2": "3dpaWR36h7rSQYBn3xbZv4o6fPMmUtFCZncJ3RQt4CJMNtEzNYjFHpjsC1pEs5cfANxWYwEYcYPLxEkwtFK6ZuDx",
  "key3": "2V9Uxwg7CwAAHqYpggyqaxfPZ52XM3xCLMwtSHHp4vkth3RdPYj9iRfRQ6UutH6rssDzgk2WanstpkT66gikdxLn",
  "key4": "51qY8PpeU2QxkpzYLWDRC8jTfsFbxbJd63m5ngd3MH3VSzM33fV1jjv22hwSWRHHavehpbWpEDeGn12eJqFWAq8f",
  "key5": "4kAzGjYTDKwEE3ZQJpDhaMNBHT1adbH8KTz1PuunMa3cvHghCiW8UytZkDSyktqtFUkKc11hSgDV4aY9sBg3zN4J",
  "key6": "4jpgWPSxryHZU5GefHnZhEPA2bWWsgxFN1GLVz76K43a1WLL8b8ZuycvWwFLMAVXJSawBvErvXue6pESev5yNLus",
  "key7": "5tpDz9C1LA3Hwpc5NzFw8Mjg5uTLmfuAzqUXPncMfiuk2sDhL2Fe2FRuNTsVi7qjsN5cuDfsiVKvLYuDxYLGp5xR",
  "key8": "3MrTyCUhQxvaz1VXr4Fi5yCDWKcXQnHeQMHJpjrBXkQfAMnL4Q4JnZ8JWXAPoL2dEDVm4CeZHpjTtFyUpTVPkh2z",
  "key9": "59ZffYeS2rbgUkcZYePFDXL8pqoSuVsWFhoxh9XnQErErSQyZ68jeQWtibafKz72H2cJPZhpnWLWKXVDMHqRifcM",
  "key10": "2456r7Aa3yLHmCELDBttiGrrTCE8LQTh74pbD76Y7oPaJeBDTyGqro8h4qTCdPbUvWTpa3cteL6NyKLuebc5X91T",
  "key11": "5nyfwxPuEzj5fGSfTdVLVKxmMKmqtzbW3mvUbUVDPGXtBLU8UnK9jsxpS4mFaRCW7MmNuYVYSW5QxpkKt5kCgBNo",
  "key12": "3GR6HZa9qotb5x6s6X5jv9vdgxxMkKmLfpH4nUeypo3WSfqXnFgihtYuZLwRQvu2HU1GVQppYuQ894uKBDFsZaaa",
  "key13": "iuSZr9VMAcfAnpN3nHxHL5Pc4vMEavEPkkN1wKiBQRnU9wqXAHmRJdUyw9U6LtNf6aDbV6cwF19zACA15Drioze",
  "key14": "4UThn8X94xR9KViLL8P1F8mKGk9LLNKU6yzc9P62NtsTnmhQ8ybHdhq9yUaNwHJmiJiT23JjvAVpqRV3Z2156Dtp",
  "key15": "3WXstJNc7vB3Ho9ArwAWsprKWRndvk231b7XkvDYCYjmSdfRUWqsTwPNhkVasMsc3ULGeXzpUdZM8D5imUeiv2J",
  "key16": "iZ9gwJLkwje7VxcYU8dCwwwuy7p2bxpdiCk9EWb9T62E4bGpPwCpFQdq2R7yfB7MPv4az66jytbamAaUovruDLb",
  "key17": "2NuiR7HnAi2Y5gomf9oKKMx6Ud23DdjT8bHQGBR1YoAARkgbbCgg7EJhTFJctT6SAEm4tSMhRtdjo4kRSWP9zzCM",
  "key18": "4iGM4XW5HR3GN5CSz8NaWAfKBRukM6rwY3LxjdTwM1vgbodR1zkw4UVuqoxWgoEXixctrmWL7rNXRcjLq9kmVbdX",
  "key19": "3bxuibacNXyAxTWnM9DvgsLK9Rbwc8K8AFR22W43jhBLLYaHwPTAEnZrtFRiGjtdMCbtJmH11M9PdS2inKLWBzEx",
  "key20": "5NhAfYTxZtGP2iCnVKBGgH2L2D6PR6tgHKhfkBjV1fGBCLWmAmoVifBQ1g9QkR2GZGyZckYRzPMmbQgbSAvZbrkZ",
  "key21": "4setMRXYNhDKdR9a5Vn33hTDdMdJvXfQBWU4aJNVuGcDd9xGchgHeRqPu2vgfcApA6DD5KgNR5ySjxwphA4TTNtJ",
  "key22": "5ijydPqBZR2evJS6tDAQW7CuUvWkdm1bB9dN9mvR6vD6batPumiBDFsMk35qodC5X6CaZDJmdukzHEYMXicDCkgp",
  "key23": "2Q4cQVmS76cD87vYdzQCBMHC9eeGfFja2sszZsDczsFAP8Ga3MuZHA6xzQ8Jc1ekKVyBeQDqGvjBt4a98YTVoNe7",
  "key24": "4DJTwvJZTyFA4b5nTYkgfjUCwZ3R2Be3x7YazxSXMUQk1Pyd7ZVyvpZAUnT54qqdqvaCxf6BZCBMfA2JkHwWQpN5",
  "key25": "2qBwjeg3zLd9dkScJZFxKMdbRNJE9GZBjoWiwXKquZz7Q9AzCJNuPcztfxAgdRhKnyMSBwQpsWQjP6XRDoG9srXe",
  "key26": "3uYmpaAusKvchsX6SWsy5sta8abTmnc9i7QvF2g5rHEuEfFGZWV6Z48q5qeBw6CYrQ6yTMzokQHxvWQ2ykWZKtoW",
  "key27": "4veXdAYh91FhiGuevip8hDgFRBcB5F99QfNt2oKBvDSuqBM3M7QmM6nFU4SG5tiwPAEpkKPLeR1e9zT8JYr7iGqq",
  "key28": "4qSJtUngPyoyJifjvJzBPdK35pL3s25CjpsHDohVz3nva7zar2vSBG7YDxnWewzav8dE1Rt9c5nAp7osmYMRu3hG",
  "key29": "2havPgs6FEKTfiArUFfdu1ehcgmrU8rKr3Ckunw7bWFkqyaKAfbWHXmXdubkZ5fHKVgC4LstGmmGDQubKcTb91A4",
  "key30": "4bwmTfKsQCA5k8QGQYwpRAxGVUXStPdeDNnU7f7o76RUBh68G1h1E622PrZ2pHbEQinucXTG1ide1o3yStWP9JEB",
  "key31": "3EmsmMbBLhrA5fazqNm9hSoFscDF9awHFU7DwJJuAriGPdr1p2fNoTmRf8khjda8qHDvTN2urgtijPCwU219FFBy",
  "key32": "3iaKD8EgU4Rdt6xjsFadx8AUUerQJSGkrSJihSvUAVFU7f5fL4KuYSc1R7gdV23yodbVb6wBLLy9GmNVi3vzkSBj",
  "key33": "2wAVQqNgnHu3pshpxr3PA2YW1AX4cm45dRMMnm61Bj2TCPYuyXtR96qkxgC4VwTGpJjC6yBRpTqRKj4YGhk6bb1q",
  "key34": "2k1yZu7NwaqqN8V4YkKQg4WibdNb9kJhF1Wzc5v2xPex9vMWnBL4NVraxR7iaBrFcLnyfdyytdNpAN24VXcvLmMA",
  "key35": "52G1d14cR2jDZYFcwWZFMVbTKJzCeydpBdtVgMs75yvdyqHk3QxAU2ZLCQYvtkP7CQXWXUZcM2GXWbjv2xaygnnK",
  "key36": "3kKTRdmfndwEKqZzRT4oaP8CwiPNmkXSstWWXUq6GSis1VbXEM5gWu62FVM25e8sB31fobMs24gMQrQ9JNTXcEgf",
  "key37": "5ZgDqBWMxkWHqHhLwiSccxapwrrvDQxF5fi5oLk4edBjxAhtggWYwrSEc9ujZe7zG3UBwCb4gAJ1RhwsRWzvrn1D",
  "key38": "4Cdngp9enXKLCx4djxPAyzmyozTDUqSRqCLgCHLPvnJbtkyNQcJFBhgfVrLFyyZSeLNV7MdPNopKCz9juewEnzcF",
  "key39": "6JV1sjJUsx88AHi9ZKo7FwP9QMatWLwYZDokC7dKJ9mY56BEscT1HD2JwGKUsS24NuVdWGFFQfE4zY9Q6ZSyMu9",
  "key40": "o8wFv8394TJReiVR9ijrBqjQHwcvJp1E8PcbjD4eV19sdsQrxzziNdiMnCkjonLK6sKDoZsz4REcNd7YANfzDZk",
  "key41": "4hBzVazvtq9UeYAqEZDn3xkTXRnwuiw1FjWXoGnSnu3tAprt93kW78FGQbMtcpi7icM8w7WRWKrLsjFnEXMH7fKM",
  "key42": "2vBptvAZbTEEX3zh9CCMfD3vfcUd2nz18hD5Woa5hWWHoTBGnKqKYTrpwuBW2qm2SenH8zStC4RzqdpFR2Cj8cC2"
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
