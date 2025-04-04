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
    "2o46yCbKAMtiDG5iRWo8zwRKxYSwd9oMDG7FwkiGHKevWeJAHPTrhBSi3Kqxgn83aNg4UCrvMBNrHBpW5558t8b1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DQGnoxjqa1uNRKsfJrbP5drUBzKHVhREBZttU59Jx1bg4aneWFrCWshEhon9nGN6yffuRFxPs1ur2ARfAjCCLe",
  "key1": "5rEToenHMX21mcic3inCC8r4beENyNRAgD2MGUQNqCPDD5X5CQnTC4AXK7dH9V3F7CnTWHTyYQCw9SfGDhrw5QFC",
  "key2": "Rpuo6xwPc7TvX94wrdgMFS1sawmPWZbu13A1mnHA1rtyeXvr85rZ6vemPzGoZb3gJY9h7uJ47f5mTjpKLM34HR6",
  "key3": "5QwdtjyrLThC11d4dkQNr1Vd9hCuWZXHEz6pd99nxYhQkdyywCpAeWysTWzusET4PLhiyHPBgTQNNPS4ZqLiLjPX",
  "key4": "5bZJJuJQs6uAW3QDvXJXi6MMpF8mVRLS6DfPUxtg9bwg1eb3DVUpmh4jmABK1qwURovT8N8UZL5bVHxt1PSyQVPy",
  "key5": "3FauTXqhGyTvZnoh9k7ixChgUaMxsVFBW18bUoGfWibE18d75uQK3tJ9TnXAru7MjFTLEE2Z7A975NzvnBG3nbhS",
  "key6": "B6Qo187qTn5SBoHSKpuYJ6eRLF88zhnXmv2kFR6bYdZuqBzYyBcuYaGLz5khgnE4JEWiQ3yoV1RC9kD3ZnKQw3n",
  "key7": "2AVH6s3D3bYGvL1CFqtroFtbeFcEWXLxCtwa7uj6mmn8LjsX2KV7FqSX7jp4eqdbBERyW6eZCHZ1vDxrXNBfRHZe",
  "key8": "3BGWxKmvy62Y8MsYGRgvcxUGM3SAsTvepHXvdqYrBvNbZ1g2Lf7aa3myzaEaKAYiEx61oQ7WKxyEBSg58utsRBdT",
  "key9": "cEJMSLei8rsfqE9qqPAR38uSAC5YQPAR1ZkqHZ6xAM2DLKfGe7sx2rhSy1nTvpXncrhTznEHPNdWMQ5Ab2pdvWG",
  "key10": "4xtmSYiW4ovWkDaS3QGPuu6tty51VKFrS3fYyZ6hHguNcQgZGDv6ALiBZyYzVGAsG7qMJvC8jAtxVzUEAeiSBDMS",
  "key11": "3mua9cNYQcA3DV99KGSUcADUeLoKjvWxCjCAKB1rvJDeDGr1gG8V9FHLyYN4XD8XgaAypz3sbrGjzF8eRRRRhNMP",
  "key12": "57MN98QNdRuX6MDpJuitSc8wdyBmyk7SJH8cynzE6RVFwZ8SsT4ZaF741RtRtAKrxxxEQkXqCJYfcXhhZjsE7KsG",
  "key13": "UDxHFYMcu9SeCBVaF1feLAY8QwjvFxViXP2v3ydy8VQGhs4ueuBqyhh9bRX5WuU1McNSQV3BtMpvuKX5mSdHSFU",
  "key14": "2g2JyHxNoNgUVuf5vJE7Vkyz1hAyztsojg4hHjFjCeJDNUR68pkws2okaQNkqwR2qmTvQgaBgx6R6L3pw19FXFnx",
  "key15": "3Ndnfr8vgvX5Cye9AJeUxUugU9eC3QbvmwT8yqudWxJpABaADJkgpxxkqZhQSjzykYSoz5JdP9rfSSsYyogcTyoG",
  "key16": "36wwyYsZi9u5B43d59vmx4kZyVKdz4XfTbjjaFBYGoF2dwy5BDQfMRcMEkg56EgjpSk8wm2wjLbihQQFZM36ucg9",
  "key17": "2bHEsxZVQqLVtwNmhnGp1SUGBb9Jt4wDrre2r4oghPTwM3udjUWeUk84GSNe16FPLwBSQJoF5r9c5C2nyULewUJS",
  "key18": "2mNtrnXKNvFWzA9ZvHp638sqpS1Uw5dGB22oKLNnaj4t3mpFSETfVWhd98BNhiykeZKwVA6DBC5t9soBpQJPJRub",
  "key19": "5q352ab9SPhgqEkJhuoky84kFKfbg3FF2dNcA9rmTabz65sncPxbLvTnWcdSRCcuBEjQkdPLZeVLpwxiG4APMZiM",
  "key20": "67j5nU7Tc8GJjbJNBtan2jWfUyDkQP96w6R5ybKyRNubKEAzNkZmqJLK7Viys1kAfSfmKWqeoRLfkhzzBRGK4cTm",
  "key21": "53eshrQ6p9cC7s9QLHNgWt5oToTJC1uBkQTHPEGdS7rnPvWchcLtuzvJ6UcYZdzH7BEUGNghCU4UJLDzfFZquVm8",
  "key22": "3azSnNht5YX7mkMC2HxeiTMyChCoyWwr7MYN25Jr3YFAdw9VJrBkj9QHEF1Fwp77aPndexrwVdVsuBEqkQ2cWyjN",
  "key23": "zHZeFqQuzTE32qMmoh2Cb1KRwxqBeEJrjZSgKKeUeJ5ed8oRqYGbB9ZcFcKdeKMwGxhBJuQioRY632rPp5Hv61C",
  "key24": "2XxwBXw7kMJ1xuBpZ4WDBZfZdHEXwA4DzDsZGCM4mdpyajMAQsBZ421rqwDYZkotT9ew2um3rbvgnXoEcAKBtiWa",
  "key25": "5jEngEXmsLz4wVEaWpMbpynKMithT9uepZGcgT7i4oLMs1dGr7TzeCEMeeTny1bWU5WfFzLW94nhQP4LDaVuZofM",
  "key26": "2evvqfZRSUYtWAHWz1m55VnHXrQiKih9PKt7WzscCzhycJbUsw1h2eYrTQ1vv44hCGweqbk2YRd82UPV4t2kSVbw",
  "key27": "38e9chHWempY6MKM9hNHkpX59Zw95BfhD4Ukr5vYgAMPzKhXF2JWLVzogCr2YEftWnqum2ZsMJTABN5D44Upty8e",
  "key28": "3EfqYajMCeHxxaFwuL3iwKircv82MhQCSiuFRZAsxfcMuGSSwAf23sWU4DGFsb5Wq8rD8r1ZwjiS32zoLYfgC5gZ",
  "key29": "27ME6UMZKbiEJ2oAEEs5v8VbGjeELhsNF7kQ9qnJL7cN9CKvxgYvmDyFxQzHR2zcj8eXgWpqBJjfYDhK6x6U3CZg",
  "key30": "47c6z57HswPPcrSQrZAeMMBnNHvsF8JPYFQ7qA9iNQuzLDAvHkdhVqeX88tCFsfvGirR1rCMbttLyiP7UfmDLVQ3",
  "key31": "B7L4jnVca3MqJe95VjLBnhZAxDSPYX7qCBt2mu51kT96hNTqKYd8FPLkbJUc41f9CqdYxjrxhcFNKpNn4BhJ6ZY",
  "key32": "2D7rPnC25pZ6Kwjvy81FeipK4eSLRRJGrDG8dzDfgMtaZq4x8b1a8wPRu87neBypYLDWPGN92jHeEqEtwCoAaz4n",
  "key33": "5d6iLmwYLkEXkhMUsJ5vEzrp2PEMPXBT2tYgjgzzuSNCMfM6yhsTvtJeyys5xDLh4HLsXC3XmSEA81NHZYbFpJ95",
  "key34": "5MY3SM8eFm8qLMz9qq7NXBHhFLKtARb1jA6y8HxMQWYHL7FPSVuNNUkFCS8xsTkXSJht9f1hgvi96LMKnfCovN3v",
  "key35": "cixNK3V79PgVCt9gYgYLedCuoZ9hiavnqKTBD4ThmDKp8xCP3K3mPykwzwwyiPofoYYgW83ixZjwvo4pj68bMKQ",
  "key36": "59Jr8nPbpCjxoa2UaXtwdWvykth8tahHiqhiQp5EmrsyquaenGgrmEEDj1yE4yVGrUhVAdyuT5wYzv5kCJo11Aun",
  "key37": "4Q5erTRve78dZmXU3RK52jsKc9RnA7rCtsA97BmmD4fNYQSCmzcTwrLTYJsn6TL6BJA289qBoxP4EyHhdzgUXnF7",
  "key38": "4j8MeZtbtJAjfXGw9ccRXqzuw9W8f6iRgrbhxeuvpuKo7xNyHhmwe4sVnkNWzZiJcproxcppfKzsBbtqVnr61qBM",
  "key39": "4HkALDwEyVfE27BPY8FR8SRbbETGUHcuMW8LB4rXSh8qzPXPhc3B8YF1qXg3K37yYMH2zwkGzvjYybUFjpvRtdBM",
  "key40": "PRigvPTQ9MJFFbb5NFMpLumjFKawKqzYpdubQsjiLC17PPaHDQ1dQXPGgFQ6giviV8SAKZdzy9XKcwghDADH4og",
  "key41": "51esixz7UiHDhZasuEbaRpKXCm1TPC1ZPR9s5jz1vNGY2vBzt6V1bXHZRCSLyw9XqLEp8cVshwQmC14hSh7BZKSL",
  "key42": "42W2fH4qwecr4ENS8ZJTrJdbEwHJ3F2YkZ8b4wmRUeAJc6o7cor1MvQ96cP91qr9BTu7W58Ypq9SkK9NzG9c3Stj"
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
