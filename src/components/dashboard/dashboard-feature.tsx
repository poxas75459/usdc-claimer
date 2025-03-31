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
    "5Hkv5fomLgYruNrVQmhfcQD1z4DxXzx12beRi1YLHjTMP6RfbNSEUJtFGzhrQoNW2sxw1r2ECBRoniQydZ74VMMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jyqgURnihaMbS3SAPH8VuAsFoZAQS2zCVV3pdX5YASnJLXKtN18ECrn47FezhnWjjDzD7oVVPHZQZvQ3V8kKZd2",
  "key1": "4CdNkMCmLUWWp449NZ4SkhEfnfPpk3Ped9LWj59tfyAkaxiVHGcpwATUs7pXhceoEMuLKQZ21vtuzfKf79omsXWz",
  "key2": "3YKmbFzVRmtW6U6kxmoMx3HumeterGaNy7qe7PgAiHuVjBhQXeYYPwX2RrrJCZzd8rkUiVTFiVsdp6JLqnH21fG",
  "key3": "3X2RTFn2FbQHzcDRBENwKvfDTX4n89DKyTNyC1p1Bag7EkHWACtR6Y6q7zkXmqpp9Z6gbCZvyyFnjxLjGGed1dQ3",
  "key4": "KTqQAyL1fvSfJni7m5tQxQXoPCKZmBJ5SGwcDdDp3cMYXQFLMhDUiAKpm12wTwFYvv1Don7yZLp8oLdpPk5XEAj",
  "key5": "2YMasvmk993SNeDwD9STzowD9u6UzWUXs9bJPcEJGk8S9rukpGnPfNyvGobMBiXb3RqxGA7s5L1fteMtXzEoNJ8C",
  "key6": "62nrLf8sXrjYDCfTQzSUpWNvTKfFTn6ZLXpXgfZAGKZ2ikEx91tc7fiWQrBQRNSwp5DcxkWDrjAV7mhKtzY3Q1AW",
  "key7": "38jeF9Adz4wxnM2QHbrkpbSr3zh6sMWEfsWmNL4aJ1SPqZj6LF7Y6og6Doo1qBEj8SPHKNd2vqSvE8Za7t7iGtgs",
  "key8": "4YT89h1hksuSTiT2NMCywWUd7e1rN78Pmas8HTiFQkJif1pWQnaqwmePmjGWkDkuXpp5LYeMTqxaUYvYTKpzMMtZ",
  "key9": "44oDjGn7TG1ZTyRLFnrKrUeAerfwye37b3M8Y1xJBBD3DKNhAJny76dZnUxKd2aDmbJqPviyv1hypVhT9n1NH8Ea",
  "key10": "2X9tB3WoKvJNF7a9JqdivWizoZqipFEL1FCVPMWTN7weSvWz6HXGikMGWbagdfyxTf35nBxX6gtDm2jFEdQx5yAa",
  "key11": "5xcdbaB35pLhdFpPNj1nsmY1mfahCNhQbtGJSHjyjS1Las3VFHn53msvFmbm3hdz9aHjdmosdHMZgrBNF86hpVme",
  "key12": "2c2M4xeq2WxqonCrGhLTjx8KSpFvGvQKBahuCwsxZzCZKBmFXLTtjeCKKiqMHL46RzxFyBbGExBUMJxv2qYFmqXT",
  "key13": "5RVG2pxdmAVyqgAMefYBXqEEaoTdHtva8iLsF5gTW3Znch9Mb1gdU1GdkW8cDp3RnRMnpopMGoMseEXog9gfoH7X",
  "key14": "hRHD38w3cxq63X7VtxEpTMNgqQckC3eau9hPj5XKE4Z1aqeFSo7zfCGW2ujstdZAT8HXyT6jTPXD9odQ9wiFAkH",
  "key15": "4dYmWLhVnB6ZpRiUDzRHryLDb6hEwz7vndZR2iSP7NQTMUgjcxqU2Z7xeMYkG3ZwgJti5KmnLdVd4uyysSaKNWaQ",
  "key16": "8rqW9oHGsvVDJrSUFc4EFfw8qpm7tNz1Laec8eLFWFUfmjmyiTGdxNyW9anQt6rYaWdkZAS72fYuSoEFgjJv5x6",
  "key17": "2nRkckdQBPs4FGEjoRKVatpq3NgjMHwuUEGdQxhSK7R8H8jfrD1aFnVCSnG7weHyN6QJHn9qEXhAH4CyXdcTS5EN",
  "key18": "ewHptFMHELqhR5FCSHnBYUAuiQc1rP4PV32yGXgoqedoqbAYpoJVH54gQ8GP3KDFiDmbvV3zG8LZApKBQotZ7xF",
  "key19": "4YK9pjFr83SBvv5FnkGGfSzuG4PGLUDHYxDHdm6zWoRJaaFcor2zWujgE46xZsQRbkh8ctN5L7tnhSpBBDLZG8RJ",
  "key20": "5YNWPyxkswXnZWH57CpV8Jrh5CYYBuYraG61G8PA4x7VJhvgyHAFtbuZ78YVfbeUg4pjuHUTjbpszDKiUcDVQm7d",
  "key21": "3fx6gmBjmTSxrWLHfGLXRvhnwF8kTzSpB13bant92dZkoMtxjLFKKY2TTPkkWpUYqH283XmYLFscdsqz8YRuaeqY",
  "key22": "5xvUDxUnWyoWKwkrkH4XnYspr3X58YbAqfAugs2QdEprbKV8bvgBEhj8nnEDFoNcpAY7upzAFMuc86yAYhvYmhFt",
  "key23": "5JBjCkXqdrNSujN7h7W8JZB7UspEHh7mkbNJBtcZWyXsiFsiSwqsAuAQ8j6Xg5hoSbdH7T28tmYms8fVLBRaNYCa",
  "key24": "2ajdHwqaBKwEWPCF9bJFJgbhj5K29ooD29CpKyvjR4ouTxz4Cj2cdPcC4vHWqBiU7ZRA6mWNSCJv7BdeTeg6Co9a",
  "key25": "2hjnhG7dSkX6f887NLcZdLX9aLmgZ7UK1u5XMQRoHAPCxLm49haEQvkortdoD8XaEDLcUefSYJ3uHwr5B5pMoS6W",
  "key26": "2WS1Sn51SBrkYJkhQCCBY9EFPKMqHqXMroJ4pPPXNJKZ2bJsMHdMqsEPCvy5daFynraNXQCsoWttHVvnZ9f6LQzM",
  "key27": "mRxGFfbswUZLFLH7gyU5umCdmikJoXuPEdmx3JaCBFuMJKAKQnKDQMZp8ACHuGf1EV6YwkojZ4ficfHNW6BVhAS",
  "key28": "3yF2PSUPYLHdmHxK4UJy1aUczkAqaGT3oc8PdXmZyDws8R2JY6NnMcc37oLLTYxUzCfaDhBjgCFL6wei5A3DYXFb",
  "key29": "5DReV6ApD2SHecFFqXf4WZ1zHZtqDCbctMhwqxtu8fKx9vcyeARbENjjNqU19wsMGiLUSPFgA1DMvBDaZ1v6mRZX"
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
