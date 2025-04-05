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
    "5PviFrYKEMZ7yxLvJHKsELoGvi8sPcXHAJPcczTg7NCueya6ysQgP7ACXogZoUoLbSm6WZ1RCVTTLWHGfAdnuQGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4694i6SdK46RDXoPGzGnK3hUMWp1xq7QR6GgfHq4fAvatCfkvh1QcfXf5nZKMfJ1C5wXL9k4Vjy8kcvPpPyK13mk",
  "key1": "Cp9WVNf7dvFiUnzAbHa8riRPJjyFmquyDRtuQEV8dDCNzUcJcTvRQ9rSjMC46ZV4WskkgF5b3hevymXZvRQGVfB",
  "key2": "5K8j983SRwzGibCTssTpFUPQVX4Sk16gDpv7XTW5ar6chzgckD8xgKhDssbuetqJnonZrXQMws881yiLbv9djLkP",
  "key3": "5r3frAEuAUHVWPFLxpciuW6c8ioYpBQRPFm9QHpTX8s9F8BiiDB4PxTREbBoynT24qY4AKGco8hFCRjdfH1gZQVf",
  "key4": "3A1ujwHxgZdaF7NfyFZpdG19AF8GGVzRbVFswbMjBMixeB782zFGciptXDjYJEFfAX8moTBappppEwVxvcXKhmN6",
  "key5": "27GzJeaHHn5nRThaBDuUHqd35XayghhzXRfzNfAx4smQVUWVKKvW5eLWT98f5cXHS7TqcbcFNC3ZDy3Jq6VxPKms",
  "key6": "T7coShEtPoj8RKaWAVp4GjqK5USEXPsGkoK6CxCQHn7HopkEWfB3WHHjUcE3zqvtM3xTYDfxT94da6RoZLSdVfQ",
  "key7": "2yf6QPsfy4dCBuQ4tE2aYepbrNaWgnCMShb2BADjG4ZgJ4b7a3ACfAgWTYBdh8Q5oRNnj7CPtc7SuajPzk2hMgVd",
  "key8": "2N5HNDv2N7P1j9vszrfiDFegAg4NYvcHTx75hPMZKB4zGCEf3N1YGG9BtMJz9gPMpwYzyzUSZ54kg65iGyUQUw8s",
  "key9": "47tD6QSkEYDyczLD2FU8D8mhBJDtGyV4AibCkRTMHiAaKXYKCmMZUTgpQstSWxNDGr6TRrfHMiH2dg6GWo46Uji9",
  "key10": "4oUSVSA64FMStBmRsxaGy4xBLiKpVnzXjUXHvNzYUvvBXM3Bw5r9ZHC1Sh5vJrrXRHQ7TQey6XjLFTc6BLAyzRKi",
  "key11": "3LNL7dj5aMr2TsFRNNUteC1s1NvRMyLVChtErbehvJEpRKPNNyXeiDSNMoyKCm4wucrf71Tpymvbdg6iGuGybmJA",
  "key12": "63jFdxVUjimHnaeHL1Z1NqXPH419vLJ2PeVLgbPTMwwdh5pqiPypPaammYGNRnaL5DxZGMRiSyv1Hn49JtGGSbwV",
  "key13": "3iM7GpVRju156eDZzj2DAfPULJKFnSDByz58BKD3QziFMhFE2gTp4d2GyrnX7UR5zCMsYaJpRitFptZHMVUKHVvr",
  "key14": "6jArCAcXJjp12psCZAs5iKGnp9NwLWk8gC9wuyyx5BKopH4ddjCLyS2chmuh52ictuUyjHu7kep9vYSmEGYAgQ1",
  "key15": "2rqJouH6fuykcn25ZcjTswsNG6gtfVZTXJa7EmPa4tQoAsj7aWB34sBsbowvmn6eQjmYmDT9g4pNZuAweULUeZz4",
  "key16": "s1aRRRvtQg5FSZjFggcWwmc4PYWbKyEXPJ5jw2T8FdqLA6GU1vSYMa5QD4LA58BqWijPZpQyy1ywJT2ZqdB2awg",
  "key17": "5AoZKZM44g4WusTrbsrfrVtdA8zLcfwZSQCGNFsgPfmjqT4T1tjYHpSXMrCBSKT4epQEq9ZtpzzFkHJf8grHkEwW",
  "key18": "5ynQEZJ8p8FW1keqVpMprYssP3AHuBtypmyDBC5RoXUGSw5rhKs87aLWmkFJLcmbzwziMPUGsC2k7cDBpmMbP5aC",
  "key19": "3PKbK6m2oYrxoFVFrTcnmRfQsLt2WDxPtCpX3rbNV2bJwvmmFwYDUjbqT436B9FhewmgVxQBDHBD2VxSQYzNtjt4",
  "key20": "nFQfJ1LBjmv8NR95aRgkfs9o4u7dxyHTmhNNkRh4vkdfs4mbxZB8MDN4YXCVJ68ar4ujK5oAKm5DDjKG51mAvDv",
  "key21": "36WL489auVjZsDutua5GbSyZJ8SeDNgS4u4MZThQo5n15FrXTA5vq65yGPNFTvcfvw5QAsjncjSgmR9Zos3ckLuc",
  "key22": "2Jv5L4DMNhyVgFtT1a1FDvqF4fnRGPXnNqBSjrJmXCpXGdXvwppgHp26U3T5HG9UVKFCEHvXmMYJJMcGoh2jokUf",
  "key23": "XSuDzo2Mp9pbMsFGkv2bfYSuPn3a6U1orMH9QBnsz1cz1x5fd4suE6tBqrNMVAEK8ZiMQKNTMjXAqxaCk57apJm",
  "key24": "2j6ZyJFY18nTumBLVrePU6fMRLA9BT8G3RzckautWjsDTR13WaiaBrVrH5Lz89yUzebS5iCeiQ8TGxPbKq6aVD3M",
  "key25": "4ZBUJfaXry9cPf7fJmpwUFEANpqVojJRmgH1kuKeLpD9iJojGxJs5QkGrDko8u5Vnc7k26GGxyNUJZpHomTTfvJJ",
  "key26": "54wFqdnTrPzxxFMYcKt7c3swDfWa1HcyydZ8Hi9RZw4SWBnCw8D3noA2w2Yd8gaaxhcYuJSEA7Lygfe9yqJULsCu",
  "key27": "66PFTkW1VBraKuLfs5cWhLy3QYfFbsbg37CEijt7GLuYw9fY6WFqvi6q7fDPHZHSi8twUjjF2SwLwkatRD3hevWt",
  "key28": "5B11nFW6dUrCWzPbguo4ja7pmRQjibXbWnqmRr8Hk8yBzTUFARkLHeskxKkhEG3k3mW5G3PnwtYGz5SYSDde5ptv",
  "key29": "FWowtFFvagd88gUughCHZu7g6A4q2zbKeSJzRkSK5MxnQFA3WqNgVVGwwWNEZVEGRomJsmCtFyasDX95DE2bsUB",
  "key30": "5NsHjiux9Yq8915dXyghVzVUBAM6b7xLWqdRWsVfavog7ZjVoUZtKeUsaeHZHRAqdPeTQSmVRahoZxcD3tjeWAPJ",
  "key31": "eKVDQFbLV9hPNzDVs2edKpJMRk92CR9YT1r47Av8ZPmvYME3c6azbTd7M9RqFoPku2zWd1tgjxFUrVYx5gAqEZ8",
  "key32": "31nA7LU1Haj7uyBbisEWqzeV1PQXziXfWGKiLrU4tLaFF4oBi7ERx1vTxQnFcKTSCQrVQZvpBqJUSYG2oSzmZ3o",
  "key33": "5gfFvwrojCHMKc4zXFiEoDdM35YmTbxN7vF7c66NQuEVh9CfbZEqqmrpuSdV1Eg4uTCKkCAJwu31SToPeWmGsupy",
  "key34": "3dLuvWR9pc3AWtiv9C5QrF1yj7BvCRYDvW1t8wh6MGKbqVt4GDzK8Pxvh7yuX3WpZcisMXVUp6sc3NAcDn7rnakz",
  "key35": "cbJiTHXHU6LW1NTipKaqDDRx4c4Z2ib96FRdLR6qEoAp6Rk1LD2FCwEPPftUYeig6zTKJrwm1pTnfDEanjsp97H",
  "key36": "4VtUfewjgh4fJ8YBeBdcBm5RYz51Ns2Ssb1jqE7GrQwDRtpCzdf5QMeUaa18UXb6XDk8spTuDo6ZG33FiR1qnWz2",
  "key37": "2fda3egqDJMv6dbgPhfMgUvbZaaAjVbmB1W1feaUT4dDSUVbd9RDAMRvCabKUrijQJ821fygRtS4jJBfyQnx5CDD",
  "key38": "3qe8hLRHsyyj5V6XywDVENF87VyuunQHndCtVZQyWTFoDQtVQjSaKWQVg2ZeVNVznuGtCi2nvcUBDe4yZqW7iLCt",
  "key39": "2AnZGJTp18J6rT42zm9Am8jkbwp9ZV6nzuwUcYgq4Z6nFNxe6rXj4Cdzb4UfEHS8yz4XLpo7z3YRnrNNGnfQivDJ"
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
