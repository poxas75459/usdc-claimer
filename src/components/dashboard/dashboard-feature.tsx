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
    "T2S8KcbG2rGLRsgjYNXwwS1MnQwM9Miu3Wc42WxE9mky3t9qEZpV5k3e5uT9KtGNCUTzz1kKdS5avAsgKoY7xAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTEZL6EbgvsxcR3xHCKSYTFhjVaP2Aa2AMz1ucV4mHSm1Vm7SQReF3fU6vUrq1LqWdp4TSZdFcZ9D1zCGcVuvo4",
  "key1": "3WjNbhZWd6Wh5W2DGQAYUFLCxNNfQfmfbmstinEJq6F8aA6YnqnU2cnwUoYn12RGWKFz2Hp6QxtnMW6kjxyVGBkW",
  "key2": "sGMo9wbTrEUsBuyFZEN7NSPuqkbYD2UxANkuyeVAyRdsZzN8ZjLk3J1xihgyL1tavcVULQkybfkecRsHjsXf9yd",
  "key3": "64WtmV7uAQA5gB7kKEWw691hpFDgVDZG44ufBqjLWwFLgfw9HLfryT32SiXbGRTMpxgZjZ5XyEC4s4p7bzZj3M5b",
  "key4": "41DNpGQxRS8974tKQacJWeqbFiAFgYFDmYTAvkRAxqDNrErQuHf5ozHAiuSJ5XGwcSaUvg38fS8Yk7MAY6gdPRYQ",
  "key5": "2CHsKZgk1RDfgYEXsT8nSEc6fd5K4d3eRBoPcwgrsvMBXL4BQtLdqvveGFL7JF9nc6X9BoVNrzfphEGBC2tsbyN9",
  "key6": "4iRgwYF3MqDSeRTzYQgSDGyLjjmEU32xuULF9gTfRK9rPDHgdrU9kik8fUZMpiYqJsFc4D8o6iCsi9yjvYtmdiQ",
  "key7": "bgkWBpJTkN8cS4Koam9J1N3CWPwwGDy8f1giirpdvv4qdFzENFHynC1Yk6cGSWtGNAvW2hinckiQgitpAeJrSa1",
  "key8": "2nJsVCwbPh59TZ9uywK73pgvr3KuBdGcDo5MQ26riAZcfx6LPZjrMqurVh4zAkfjmuUvman6AUHshUS4yEBT7vYQ",
  "key9": "E8g4Aa9fkiiSRMGkPjpKmS23c7LH4rXEEe1pcdueHSzrp9ihMSkiU7LMvfHBQWvz94Vj6J8ACxbZNWEgZ1CQLdx",
  "key10": "3v5Njps3HUW3eVn5gYaoVAa4jznBxcwoft5h5dpH1wcHMQ8MEyzS4sKRycfZNvPjvgURnXjsTkADN6bL3W6XGMyD",
  "key11": "yTNwmRwJT1kMyBwBbvpBYgeSnWnZTs6RRsEGTLYZCK2393rGEh7apnSxrcFhhp8zRzZQRpyZh5SRAgyen4sR2Nr",
  "key12": "D5JvW9BjJWFx4qGL1KHtmuZ6rjjksU1z4DWCauHuaEhBUCud5QcRkbdfWzQn36cYui6BtxQkiTpSPvMerpeu8BJ",
  "key13": "5bjbbmBsdPh2qfKMGVDx2oubczvFEf8KrDQKpYVQomW668nJq2q7jJNWmbntmNTFFkpBnxUmKh45c8nYAgX6XxV9",
  "key14": "EMKzUHwhAudM7PrQYiXjhMsJESmnzY5tQWpohpRrVKqzqVb1mYcgchtfqri1KVddSZoGezLekirjeqFzsLogxFs",
  "key15": "543e6ZDCH18L5a9k35QWvoXhvENkgw1ydxDeR2YvT8EFTP2pWxcZ6ogydaF1kRMGKXo7EKJQWk4JQpBhXD6fRT5Z",
  "key16": "PR1QzSCC9uShuKcpZ8fX2vwEJSSYNmXJVSp2AZGR42qBQha9v2ids2TmMUnwPEX6CuxngNfGRgRvPwk7gsfKZMN",
  "key17": "4HBBSqLDA1kyT3P962Ht32Q8GqknxdQQvLnmDEvM2wCFPrL9b2YvJc7hnNxfjfJaDtqHBcvR1f8EDGYPd5cj7eha",
  "key18": "27mqGwG6mbHaQ4kRRnucPRecv56o7wJFCgf32UKsssooC9KzXJ22UioBt5uJAs54sR5DX5GMjJbt228Ge6R472WS",
  "key19": "67TESg6JfZsVtWGF8ChQXT3G3WwVTrWWHX4QpH9c7a998vATZvLChU9JXTFhT68GPFYvpahCq4QX4Jr1siBUaGXJ",
  "key20": "4X76efKm5ZAhdhw3YCvXz6DghqHj8mZ3wiTjobW5RzPPenuQn2cC7FjV4VDicLrBq6iS1bWmv36MctLyyycizrAr",
  "key21": "5GwPuZKPnJdxRFYyJB6qje6Q9wZeBjLyVWxndZCBNxPLPWXATfjGAtHenE53wG9bSySeWxiE5BFagUhHyNY9dSKK",
  "key22": "3ohJuzjhJwohoSQZEKNaHefociWh1RCbQbT2rWNqfhkVRKFG4SXy267NzghuDEkvF2fnKR6gFDiWjaNz5QsByPEV",
  "key23": "3Ju3KMCXvtT5rktLG4pRnWeDAEUutbdrUEGWoEsEnXdEzyA1oZnDpoNuF8wuo9RGR27xQJG6U4B2B4PdEmTWpW9f",
  "key24": "43Frsje4WB1C8C6yzvkb9tkfnsjgTtaTMfsFHBECeExmwNVsuGrNNgNTkE6445ri2UizR5XFaASCXfwSJuUxn3e3",
  "key25": "4WJP8SYVrRQVopJEnueSKeYC81RERnob8WBDQ47kXSnZR3d4RwUPHQ15LdEvK4LCEJhRMsjnbXfAUwqjKYQjbdLN",
  "key26": "67M78NW5r6gMSt69nkBnwbUACuuwiSmjWxfyETmFd6tsPvxJAiigFw2pcrVTbd3y9snzHGaepKbtL4wsoxzj4MSC",
  "key27": "4NhkPZernTV4N6qrtLcfYJv65g4TCKpLKBryzEe1ad8NcH3ivxs3VhctseNhDN2Xc8M5cJggKagKXALnXrrTqmHf",
  "key28": "5XQULdhDgEVeBxaFuqocx9ixcrK41FwhAYgiLQoKq3GyxwacpHinSjpgmszSJrCx86nnS9A6qAkArZcJdUrEsmY4",
  "key29": "42m3QbyXjRfcubakVpnzi7oqU4356Y5at965HkUTDsQxKgL9apYPb8XLgASG9HjRgzAuh4oQC8xHUsSNAc8sxtzn",
  "key30": "49NLkedUAArgehu5AoKTTFFBmozE3G4SJS5Ef8pRzK7QMCcUxFNAwMnQji8d8GHvs6wSQHhy3NP63TYX26Mpe2sa",
  "key31": "5dTu6iDHD43bWzjoPvFo7U7ALtdE37rHYKJT64pFS7eLCvGV2WthwBreR16UCh1x6EgkFkgXr4BK9fVMmtMzLkQZ",
  "key32": "5MxAhuBKrNdkSfHKtZUsrAFhCohBKBxN2i2c4PELboByBSzHVuuGPKxCUVoM29JF7PYLHpt5CRju5JkvRTh9hXka",
  "key33": "f5jSHvRZfXGwn5ieYuuhuiNyMkAgx1nuJ2DHEpRJA3sX923ouAjmKgWSdpgWCvQjtTVNb3DZZYbpGKYk24HFp6C",
  "key34": "Hg3CZxJDfSR4hUhg39BsV3guieh5UD3Ss37PBVKpC19kjX1YtJsCugta3pJKbWHWiP4mpjipjRQ7v941naJPsem",
  "key35": "34K76eFqJd8JKcDJp7bwtQzX2A83qQ3R2trKEQoBsXNWDp9shDi8cWE5rBwdCBqv4idwSkDrSgSaD7BnS6UUdAEz"
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
