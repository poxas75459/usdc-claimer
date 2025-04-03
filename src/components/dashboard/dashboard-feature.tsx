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
    "3aASWpDnAZ9u8GKPjecQ9tkeDRiKwkNunR3XDoJhTaFkBJxDe9tT56iBtxVuSDNS3SY28Qb8YkSEpxxiPe9QnVPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G3frWsTrmtv9iBZ23d3P8hkrNL2mqwdkdpsC5fKgjdP8dbXD5vkyXPS2M7XhWzacUQVEEj81WaZ3rWcY5Lq5xBw",
  "key1": "4znX1Dbf6fVp8HCYmwugRFpctqVCkqhKJe59jsxpNGMuyDYDQADeXwrzjQ4UCLWSuNy9cfSUREjd9aPbHq6q4ECZ",
  "key2": "3m4pBXV9fyFSToXvcAjwXSENBfGNpwc8b4ahfjmwjniGyfLkQgh6a9z4sfEw4G8NqZPr9Y7fNBTdqsdUsiHGLNBH",
  "key3": "gcgS3m6Dc5DPUH4LyEECUrK8CrutCusA3nEJpLm3x6orTbxq4diYpYHPyZt1vsJWbpMbaxV4L1TaF7NEkAWqEfk",
  "key4": "2MKUVfQXvrCbgVmELD56P4SoFTnRigxV9VsD3sEKKn5pohU6687ZRZHAMrdTy4JkxnSMLuk6MAQrQzLc2WHj8Vx9",
  "key5": "5FeoQcWp1s1PUUygR3wJvutGCEXiwT9F2NTE2514dQybywskcVS1jTPBRcTBSagfG5rYXeZE1PysEKxGWVsagAnW",
  "key6": "44SnGV5pgVoCN3GRS3HZM6kvyUoXwrZv3pijf4WVmeDGy7LZERSJRHu22oPw2w7s3mXH7thK9ytbBE9WECCnJz3J",
  "key7": "4m8CLRQqca63X6hMN1EFoW2K3Xq5zKJBMdD7B4iThVYBFjRXvZGexKqbkEXEFDLi8B5wXKjvjHwbN5s2pM6g8N6h",
  "key8": "56dtWYQYTzanEPnUK6KyuZw93ae791dD3pudVtmkGa4BMwri8UkyhsKWRTVCDPiw95cmMy4eHHvgXAGfDSWYXb7a",
  "key9": "2x8sW6YMhgMN2kW35fk8nbmWLQ1ibu99jBszCnvPnEzjSaHUuE7NwNeaCdfXjwZDnCvxutA7rWQVLJszP8W5qJsd",
  "key10": "4S5wYUdV7ktg4G8N5oaHtMx9z1Je658qjr1uccXNK4Dg9HHj7WzN6hP9BYK8DnYQhZ8Q25gdN2LQ3PSYMa3e7YvS",
  "key11": "GR4NQoeHeNZ3FaZtgwimWShmTcCHymRuLEBQvmB2ZRZZWbu8sdX6sKAZ1XWLz6TtmBJSJbAJY8f7kKUMhKnx7BP",
  "key12": "45V6N8wzLtpUSe5R5ysAsTyJXbs6dvQGqX9Pk1eogDRr8LUPEpnLopj7M3AxSb6c2xJZE1TYBScLGh9a1HZmrFK3",
  "key13": "gYigRj9ZmgJirCCErt269EZsEeXxZ3V7KQjFks2Z7fKg9TfUWpXEWCjxZiyJTfBHZcruXRqu5M4axq1t8fxsQDr",
  "key14": "2GYtt7zJyF263FH4G2ZefuvcX66mq2VozzQJjUsLXjuLq7K8jj2nEZFwhaYYeKjun4SGkzJQVbZT5r3TYa4CtHKM",
  "key15": "3nXMsZ37VeQSWkyYMA1pQNkLAnS7XVyYrZLZfhJnXwHWzdRSL35JhcrvnFNctKxbJbJvh9qi7kPcTm71RpxAA6UC",
  "key16": "2YtErq8qvLHrDpSufb49HyyHKFTVV19nG74cE5yWBb4JgcuFtrGVFhSvryxva24xY1n8QhCvKM3S1FxtpKT2a8me",
  "key17": "5YKXDtCfQEyvptN3DFEBDNcEvpEgdBvbMYcsQDV5qNuGPM7Mqce4hw77xC5t6fe7RYHzpbAWE1eeJALnF3UEXjRg",
  "key18": "2Ur6jAu4JQoT94cxvS363wv2B2sxgBXExTvVtxiFYcHa3TANu1yVjnqsU6tdPZeiSN5o5WUH9rkkzQyoPKYPjk27",
  "key19": "25b5Yt8FQgp8eEXT3HgEiRt8k6BtaU9SG9VNdRvTgYbAmWPR7FMJSVHQqRLo4k2TnRN7sHoz258uAz1yG3Cvu9co",
  "key20": "5ZZNTBWpATobSo3k2peSAX6xM6VsTS65Uz4Sa3TVsZNJLRFZgpYoXaqisogLVEzQdpYtssyYcjKUmf65CWZM7R9z",
  "key21": "3rUJNMTMKzKrGL8Q7VEQxi8DTNDikWj4MMXodimxGLnXK7fb2RV5X8B6BPhqq9hUnALFsbJtmLUTnsmfcSHRk3kW",
  "key22": "4g8xph8tpP9ZGemPAPLAfRomXjWfwFVXwSgPw3FyUJfSRMNccV1M6aZSQNWtzo3su6tc2LuKsPoN2PGETd7QMmEe",
  "key23": "3Z6c8RzUGNFaTxA5fc3K6Q2P97tEG5fv8x29ERY7MSvHtWQTxMzHWe9fPEq14iNCrDMnope1af7EECuyoHubCyzv",
  "key24": "5wF3svJUAeokMt8qBo1JBR53TZ1zdCy6wt1LWtp3j2VfXEYT67hFkxG8BzW83s7xGVm4qRynFxSVTpsoqL2trL2m",
  "key25": "4ngN7FTuWCcBkCtpx4JeFkqmaTWBV6jPojWPbR471puBUAkgC4fRKBpYBUsEdL8efgu7wc7xycpQ7fGHRWFubiG",
  "key26": "2jGrp78KVDzAYHCRncZJNQJF35n4tCtvQ6HC3ZkxmAru5fwTMKuAyYLX9bUiYEecEEpJNhUM7HXPNmeL7TG8wcPR",
  "key27": "2dEJzVP5eyGA1M6GMxXvt9z8JZDA553cgSj1i6xB8av2cXi3b6oEfJnGPdQhBiP4voeH9BDrT7EuhPu98EKXsAmV",
  "key28": "2Ai6SUdn9VijzXR2GdYYCn9SdutPvnztvrr86W7yDkSJFnmkdxaJHFSyHdP4KdLr6ZAZ694TGEDRThhMaGkD1aQY",
  "key29": "3xfRs1V3QuzpAXHs43GedERyD7WMrjShCrdmnWVhCKqsGTad2MPSm5MEsZccGLsJPtefognw9m23hSsPprkMpNTB"
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
