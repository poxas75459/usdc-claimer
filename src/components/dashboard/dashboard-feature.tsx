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
    "4x2TvjdEQut28aDoCjdUjkNKBMJyE14746xj9cTFmsFrsvMkes2TkP4TxERX16ZKqrsK1zTGoUU3UFqAVGeopap9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "224231cxcGDkrhQWeEvAUC7yX4g6Ug5o9ciYcPGJK2hMtkeh4B6PdVRq7DyWutJgyFhq3vXGRtg9QyVZysQrtR9z",
  "key1": "2oZmzSLjW31sfW5s7YhGdHREbXNQJAwWEtycbiAS86eWRFdsgB99TqfJWU3FzzZ54HbEeu6ZJ8sWKcB36si6nvTr",
  "key2": "4fSC3aKhpKpmwGmcuzQvGq7CFTSVPyUkgwcXixHGyVBQWmgjF6uz9WaanYnVaGNfzYZnjsVLe628M2mxC2Emjsgr",
  "key3": "67egR7mP6WMgoiAUFzuXDwMgx1sLDrB55EUCEDFjA2Nm5a5vy8nWtGtg6QqPmtvZbMHSVJbbKHiRD9PjTXGJk5Wz",
  "key4": "8P9aXGzap6cyzf5x2pPz7J9bWRWZT4KTYiD9PASLu6WEqHKAbFK33xbBqwbR9sSyQsyN8Z13uPaZsPuSBdR8798",
  "key5": "3LxMcFDyoTUSBPcUGD79JL3U4xuKuiVvkD1zKYPGfy4wwqaZ5ajjYwsM7Y8JoRJgnFpkvNyormqkKAyk84FyGqAW",
  "key6": "5h29PEnYApSKWYAarAhby3JxLMMtveQ1Jsfm8V8LYjYvTEK3sKq4SSmmTchchK18Nr2y3LhiBJ263haDxMWXGps7",
  "key7": "5BBZJGDy73WyYVuvMpADewVNZ8BvP5mXAncyxMJRXj3Upv7Jdw4WawkBMwBB89KKdKKafaC6TnDan7ztJbCW4d2f",
  "key8": "4yqN2xgGHacAVhJrShUq6i1A9ArJ2JiPLtm9cfLFu8Ehw39nnXBXF5gVuftDnCG8gd5ygq2E3xobautuURNRQxCb",
  "key9": "8rUGU1AATPMkRAv7w9vZKEMAEL23xsokoRN1xzJ4vZsJQxteDP6iyoLFF166ED1B7RGg9KcB6bab7JuP8EZjmZL",
  "key10": "4Drq7VmsC3nTaWE9NGeaJiGUSNh3KBbDLwBEzGmds7YMF1CaMYHEiA7yNRzWQ2XwNDsQJzP2rPs7MzooyypCi51U",
  "key11": "2knDTuqfhFDij5zR7KRBUvhL5BDG6xsVmWXev7yAaiU4hrF3rChGLWav1BCDFWVTQXaA8qXjTDUXDKV3T9fXJZD4",
  "key12": "4LyX5JAeobv3AHB2a8XkkLCysk4XcGTzy2NqsUEkQWkGf249KZvN8BaUooXNvxPgGEFoqHTPNHwofzV1EnMraRvm",
  "key13": "4AqX4oFcpBGaj4gxsfwZzohnUbwmGETUyZJzDYfYxtacudz15rmshCEqfq43w3BpNLYu87tGrTGHgLSQA72JLUqx",
  "key14": "D6zLqJMeoaYpxZmccymss7ZPNHBqfux2FZ6qNsmsJ4LAtEQcYJYL3QDkBLrkNnGAFtywaZYe51NNwkAHj8fbuB2",
  "key15": "5AZHE8dZ1Xoer5Jz5nvSvMMJcjvQPPNv2NE2i7Dc4Fe1jjNysN5wbk6ZPxdxGz3DH7RRg5NopRiyW1XUJPvA4cKD",
  "key16": "31jYQDMuMgHe9isFxVdZytM3zzQbY7Af8Kzd1YAuFK8N6bzdk36riSd5frx8Lj4oU7MTj6TyDeLMeAgdaxZvNvp8",
  "key17": "3FjraP71ctDPcFiBKggWdFp3TgpSa2J21JgyBW2vifCNqmeeCT3ZQB48vpwEzycXXwfhXndTKsoSKgzJpyZ89Zcn",
  "key18": "jXuDH1eMBqxuu5oXY2eJCxZ4WJGkSFMK7dZqKiNCbrcSLEox8kMEd9KYtom4QsDfYQdSmki3DugZNUgNYZjCGD3",
  "key19": "3JBLXBwRAbmf2if1knHJoCA2bmGZgY96DxGKPcJteJnRwjky3GdtWS5vypCmbk7ULrPAmdX9wfQkdXeJACLWrHV6",
  "key20": "3bc3N9e79WAEqYSFn5zpuRHomdERko1RQnfZbYLTDdD9zEb2LmcfrktP9suimu9Gf4XGPiKJUpup7LoVb9aP738L",
  "key21": "33nndAZZXu9cZg4W313oeZZfeHT8aFZ2T2V1zADJ3n6EwkMNLJyWmwuryDu64rzeBPzMkru5omtqGX8TfVdizoC3",
  "key22": "4sdjwq6yErwNd8qTgPknNmNBwfKnKh1hMQmv1PHWynKfRP5SjiujQipvcZQCSQSvn4zVrDEpULqLitWRbHRJYUGr",
  "key23": "3ZfNG8zHRpjX898Ket2qP239M5kQ387zCGmThkgas4esxprQ8GraGam26gUp8kDF3MEaxxs6U9nQnGJNC7xTaFLj",
  "key24": "29ZsNvt1kJnir3RGUu9uPaUkvXAuJ7LJk6QxZ6SVVmy58UsCPafcLkYHteHzkHSPW1dxgQ8XLmggwgfnw5sLzZQw",
  "key25": "hX3Z2HsvkEsX1E1i8ije4iKvdeug6nsFLt62tQNwksg4RwDRqfWcmzdh51VSvyHh7kNokGrhXTyQzDRbQEi8Y79",
  "key26": "u8mYLy1Ax9Hw69SS6ZD9HFLfTJy6LstUjZw5SPFqkMfYhNzs9ZZmFYZzaw27btDJCk7H2xoKrbtjQR36B5KQjs1",
  "key27": "4PUUy7Gok1tH9SNw9ntBdxCmpcNFn1Cq7eWgnQVDrG1qkfvv8kqZeFB9hybLFpxQyETCXMLG5WXqc14o6gCuJeqN",
  "key28": "3HLjrNSQvMuK2bn5LBKWMcTsPeRfEZg9xvnnMaktcHeCzGJ6nvQVeLrCccaDKMuXoT65JksW4JZXPxEgUepB31K2",
  "key29": "2RXJ9id752g9xAsFU3GdfFyu4QVXfm1fFvnHjz4URwieUPsQJVxMpd7yaCaoBAYJoKCSSzPrvj5NxoceBJAvAVqe",
  "key30": "2Z97gdZ19GmvU99KSkpabpxFUxrBKDVxLqK2RswWyQHN8TcEHd2Q62h4Uv2tjCg3zSZcDsGzf6QMvEFrm3giAzgD",
  "key31": "5NSP2LTjzJnfUaj4quVv1VH6ctJNn21DXFZdSUni8CcK6Ks1p7LUB3nHEmDhsdSyTkGHGbRWpN9xkA6N4HrFrZaY",
  "key32": "Jgy9v8gjzFw4Ky7cu37c7qQqn9LG7KoQPPh9m3iF6UDwDuvxTTZPPMA3P4KEBf9f1yU4v1kgM55Hon3C8gCLiet",
  "key33": "Ms8vLwt77cGaUSH6W3H5Fwd6YoFFhR3w7SUm9qiumur2rDAdVhQfV21B4K8qSWwwfZmdCCGGpJbHPqXFdVFuoDi"
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
