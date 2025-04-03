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
    "5PXfLWc58amt9MG4RdVUxogwvkniu9Lj4k9xb3SQDy4U6X5Tx47eCbZ8hBJDowe9o9nGJh839p6wf5itap4cf8Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26PMSfX8KNAxpUMLeVeSHtBzRxo5nx5fxVAGb69srKwZNSc6QHHLK9e8siaQfuarx7NPQLgcYeKLFrvur7YUH5HH",
  "key1": "3aPHfEzNjMouUsiR6XH6PAut9DuogRUwpquhw5LrxnR7bmBGzaofsn4TPQ9SpgHQesX9ucdPG2AgktJYkk1WwKEH",
  "key2": "3ZUWgPvXAXBi3fjsN6Vp5dTkbJhrzLYyJtmQuQQ3yiXXbGwQh6w9FzYSLPAiUqXfL9yCxHkfeZSHGU5bRF2AoXre",
  "key3": "3uboGX4Vjgg5J2pJHBQm5UahoBahEJM9bRxxarEuEXEE3Vww1HQdxYypu967ePnSRxe69xkRGt5TAEpvo4fRBu2w",
  "key4": "2ef3ZSiHRoYGwtcRd5GXyQyFrcPxjiwg9So253gsA5qR15Ykyd2puzMaMkK7yLZLRayP3rJzGZncVNgxmSF8u7ri",
  "key5": "5FDyFjNWFDEJQeypjErpD6Xvr4gKUTaLtvaaHtb9iTHJMfKHy7tHeNH2WzqXHkT37xabkTTE3jB4f5riuVZb72Db",
  "key6": "4tXZD2CPY3kKAgfyDNXQEG9rdPR7NYLjZXZ7ztri9fZmbYkKwc4TfXvViUy128uQ8eSUbyqBaTe1MMKnjp4EzTin",
  "key7": "2ebE6xGZWB1EtHzq1Mik3qkYAmJWQC5graSkFqSjK7wsLTHPEQrgw6bHEnV9rv9k6Hy2TC6udRLD2amTWVwzio89",
  "key8": "2TYHTCqiYBcCxTdGf9Vqy9EY1gYJkmf18FGCS852dBXzBMM6XWQz1Tb4s3cRkGXYgXi6tkBuo7mKLBfYXkxAgsb4",
  "key9": "2JsEJPTGMkoPtJLkancB3VuedAkX3mcnAPtwW1qNkLH1YN1mWSp8DCuxSyMSgh4eo5YxHKGMZ31nezaDkVnZ1kz1",
  "key10": "2Y4Nn12PySzqGTNyQDS12esKDRHpzAqsCpsUBgLw7y9gS218PPNs9prbpXxxq4vnzN6wBZWZ253eMFn24goCp4f8",
  "key11": "Mr7sXUaMGyr7yUrfBAPrqw2hpKSemNzMrUkxMCSKp6vhSEvPEDMQvpZ7Q2gofJBz98dbNRrfPnf7XMeZAvpC6tK",
  "key12": "qW49Uv16iMKDCYjtpA4VmwGfrLM3LBavsawJ6F5Pu6gPaknHT5MqFxY5QVsRymXSk4KXMNMG24Va7sJV5ZjhHa3",
  "key13": "5tdDcwXkB1zNRDGGfPpuFkobSCuuqG5Fkw7eT56fWMBzTQm3abeYjFE6rjdaNRZw1E3ppAqLW7wzDd9s4doSJyZD",
  "key14": "2RWdY1jBWm6N53F4Y6hTb96Km5DdTHy5SyczNzgJ1DfX7JMfScFkBsgtiTUgRLYejiTxmf7GCNo8hXD7QyDMPWKk",
  "key15": "2gHPeyawSr7EPCSWerizFenbAhbEuAjdvRizVGpN87wDtmz6ob8XpeaCDARs5oazNiPFiH7E4cpLM9bim7bMpwSy",
  "key16": "3cRkwE2Ch8sMUVPXhKQMtmfCHe4iKbNxgxtmfodhCt6sY8BeEZgTK8HFAop3nffgxAVQo7DZMUrk6DdGi7Uqr3mz",
  "key17": "3mvj1733t3guaWKMm7TKEFjWpAdTuuMwhne2uPHZfisYeRj9nqCb53nHE1JXQqj1PQL3k9jFU8doWYrzoo7aYJxj",
  "key18": "zHENnnxUbBBuDDmNPHg9Y2Rv1zLPT2bG2hMQ87kbHvkKQ9UbyABrkfqzaoWiqoRavFfa1ijsxGGHfaA98FBv4Cu",
  "key19": "4Jaw74KUf92HQS8JLh4Qbgt1nN7RyDpnYSRvPqbEjFUsNt9B2g4QoKPp9VWjUUqLNTXoJT84QDDQX8BNx5wjgWez",
  "key20": "5ni4CGTJV2FGGavnJP7c5XfMXzmV6gfPVFWUusvYha3oK8vrbJ934UiZkgPKjE6qrgXLcDVC5ndepb77brwLMqaU",
  "key21": "TEjeVHhJ9VcN1CssCQowAeczmaGfYuycLzkhB2a3KbWJWPS6SG8ZMH9sy4odsmX6J7JJ1nDioWBzcJrEMeSSbXG",
  "key22": "4hEA8XXYmtX8fa15U4if2ZcjC12EX6unAJFBVBHjpCnkcTQRXviFUaWEVAp9sqbQomMcqYJxZNhkbrLQR9nLmYic",
  "key23": "59Pz3LZ3WH6CKLWZF7vBq9hWYUYeEBQQfaJxa7rE8wPM4GxGXwpzNaRnWEuSqTugwca9WAyEoy2dVvYyN8krKqZE",
  "key24": "5StsKBJsUtQtXinsciZv4uaY1uxPhEpAzw5vs86CqkASVTENxAZtXeDxNGSyX91bw4g2d5iWWMxZCdaJ7UKMWMff",
  "key25": "5QW4wCSrUPetgMxNL2uGmZz5tGkYAxSvyXxnEDHgmsu1Wg9nPzvLfYwTdpRa95xWNZghofgKHonmPghMLs1xeQvx",
  "key26": "5mHfihy4syAhx8gcjqy8Byaffsv5uHhWfnD43pT6LHn4uFMooKG5waxQp11W2BtpUNrpRHEAudLFk5F5H5Jsasu6",
  "key27": "2iZxKZcT3vA9xqkF1JG8eZjpAAQobbjQ9Qg6Gh58ptVhhxftNWK7FLpAzZMgxAxp9yEZWGGfrKDzYctVEsBgmeLc",
  "key28": "4uPjWyNDN4yM6toT8Qsj8b1sV224zQNA5h1F7zuwNewigKRTx4doxY3yQcG66d5u6DbpJFjWw1pyFDrBJ5Js1GHX",
  "key29": "4wcPsGJnBhQBwcECZwFXW2hgdCxEK6zXK19WxJ3Bw74sZwuTnbUeReJAW3VD1FwmErQXywSZFXarYJXmSfKyJ9To",
  "key30": "DKpZURjUgxb7PGB4k2TwbJ5crN7uH9xRuNKDcszDVy2MRrzcZx72CQcUvqjG5qCekTWeRRBiAsQXdfXfHUs2SG7",
  "key31": "2FQorvcYdYo6BhZUJxiMPasqKNNBTYou6CTsyWyUvFxJofbLLtrRVW8V1QAZ2aU6uVb1kHHR29hrPRTWcrPnRtPt",
  "key32": "2AXiiyTyyi7ZYFZdCYYQAbLd6NTDTebh3GxFGocbakkPeyVdiwWFA2pQqYGjMTVJwtamcYhkfEsBtJkA39iK17UA",
  "key33": "4ErA3t4bMUZVBtYEATqFZTkFHBarEPqnngFF4ps683wgUov3KEu1f5Z5VmE1AG22zzgJuGzWNkkV7mkdrMz1XLjD",
  "key34": "jW3d2FAtKR8Jgnmo7wM9ReHTg72f88rNRtGSbqaHfhHvAivLmTrWEWR5pcLsXDu93yNKFoC2KBLqfKTuRJXLshd",
  "key35": "TehCBNsXjvSvmn2ts9ZyYzmnrByUcQ9w8vpm7LoRYxHds1n38vBfFW66Q3JijBscifuHtx4dfHmncaZscuvyNNt",
  "key36": "4NYZdBwBHjJNhpuJtZnDmaVnuW3jcnQGszJa4QnX6fczGgXs4FjL41BysQmYAmjSkkKqUXBPhngskXVX6qW8vBq8",
  "key37": "PZyDmjYiJagYN2XFPT6J7Sx34G62SeJ8uxUmEcMjqWaaMaFXKqVeqDpBzK4rBDc7TxnEDYFDxXFfH7LzFRmd3xZ",
  "key38": "5jWzGBTzfWzHvuWeyveiBSVkBLGqd9iQW4b6e1zpUoqn8EQ9UBXBUKSsTa3ig3ccNs1et8rcVpK8fH1D4xYQb8AC",
  "key39": "5W6YKfwLV96VrvrGoqothZPxq2exyZjBU3V9nUWKLqt5m9GEk3mxuy5nJq6uo6FxHJiBuzzxt3Yi5VbZmqasN3S1"
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
