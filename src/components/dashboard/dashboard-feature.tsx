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
    "FJ7vvKSh71qCrzU4TjnS5vZYhACk7GEn2gobyRbypLVGYCX14MW5CcoNjWchQmwhwr17zVtBC9DbQcp4eW9qUvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1NCBSR1rLvmHt41tMHUdpSAGiGg8TRKu1v4UaoeXiVtJWcfsGARFaU2sYFUcd7JJJFKY8PYVVH2K4feKpKKWAAJ",
  "key1": "2JRR4TVkMseGuGG2k7Vf6izMyFFK5gZhdMYXQ7eAKdxoqo7oihnJxhwGPXx6JtiMQyv92rSVgpfHk4jF6QK2Yqad",
  "key2": "VS1KhCv5xk6sM8bF3ZFaaD1zHJrHpgjnqEe9cYfoX8K8AedWteXyfpkZ6t9m5oYWJDXB1udeftv6KjCMXyXJNMr",
  "key3": "eMtoNkSrvsnMCoMu7hrBmcrU97K562YXDfMdbyb8JRjQ6FkXVKYX8qdvYWmVWT6Y3enE3SzbhLzUMSiwNZaF58u",
  "key4": "25FAbDaKoFnitYgDyT7KkEW9uizEnvmuHAsqEuY7txRNM5r4RLEyH9dXrg39hMmbBJpwXdnyPdeUEywd2z3JMtQ2",
  "key5": "3QdWmbXJnFnKgkn2FpdfGKQxrrYU6HDGiDQnXVX3n5G2FFvGfXPMS26psjwQ3eUcvwxqatQGG3ANiABbXqKqL5x4",
  "key6": "3qTwc1RaQHaeXpC1MMeKaEr93TqB2VzfkiwLcBBNfgDc6BXbK8amQJY926PZRmJbbTNQcMqBQbDW8sSiFdHnRdLX",
  "key7": "2yn65aswP6JeWJ5fZLETmcScnybcSNtJsj2E3mqPakoKUJ3DeuYvqbaoxErcKHwVYFEDWtXGUoTY3DTarMjdjYGs",
  "key8": "3GmuNFfcmA2b3VkmT43fu2rjaqMNxWzPZ3vxce6UnTV2XUsidsPSpVpaJbfTccCdZWZzn9shZ7nCqTFSJsojNhZ3",
  "key9": "3j2VZAFXnXsBTxmAoEiXrAC3JPWKycDPPsXh6ttHGRPKb9Qy9yxK6FmSAWXNMjftLDEZKsTXMmJUp7ZwRjNZshdE",
  "key10": "5A8K76w1MpApgp99q7dZbJe7pucURPde2kHQB6DxqK4XpHdaMM9oASmKH8Pf9ukfcmZLL3wp36fpm4vy9ABG9FkW",
  "key11": "2rUeJv9kA8ijbHLytbUwiBTV9tEyL3sBHTEsX8R6bRauss86NstQx3prGFKxLL7yCHwzGcNhNqdm2v2cdsxA3Pww",
  "key12": "riuk1jhUJiGxA5uKF7VJvZpNefBYgEahgE6pcTu2yJLy6fQwMFrZ2hq5odQvpA1K8YfNgKeRRo4kBgmsd5L7TAY",
  "key13": "5bsGPUkFTdxg8tHGgm5vVa8QufdHewXvxHfjpaUwsFYsWgiLAxCWKz1Au2akDTHrdjc1barQFEE6ydKsD52nJA6j",
  "key14": "Y2D7y7TY4bRE13LGt1JLs9xTuEdZd4qW3cdxD97HrDYRX9bAnLWa36ZRc5QR9hT5ZtBmE1X3p9H39zfZ2dC3uZD",
  "key15": "E4WSTYRY8sJHJiw7mTxFLy1QqtV281umCqoMAtAQUys9VA4dq4wcggKP3sJaE7vZfxvd77BNYiM7PB5JEcBrDXV",
  "key16": "2VcuqmzKd3SxWqsMFwnZTv7AfFRpX3PxDQyxgm7DkqZLNfJUFojykNuMdK54ugi2g6NxfCRDBi1oSTiav1skcezQ",
  "key17": "4JZGWyg2J4fkMi44oyAbuhoBNJt26KvRaHXDRShEwm2w62fBBwYcGxt8bSCJhaW1e6LadAfubAovKZBZh6jfnTw",
  "key18": "5RyNfiFcmB7SmaVi8ipj9iGwPLCR2aobfv9yaVigZeazMRfA9JAkfq8ndpWr4VchYCKh8BVuHGCuVzvRiW3ky2Y6",
  "key19": "3wpYfB7q9UeShRcW4vBrNCQqSiX5E9RJUw3gdXJJ1BfLKTo7fNWN7vZKjWbxhjJEnFtpCCqeXyapXzipudPKH7un",
  "key20": "4QnfhyNwACJHCeeJC8EwBobBkDUjSGAjhfFKwn5W24L81S3UdF6WSynJqD5EZMrWyhwNDyV1WW9iM4yxS6aXqWyS",
  "key21": "3HCHetEy8CDq31hH5L5gm8XmhnQyGTyqDkVLkHAN9TgrkeZivReAMcfDSXyQCH6zJ3ypNDed7Y1ka16Wvcvtxgrf",
  "key22": "h8ShuEFdPL54dv4kQ7jATo77vnvPbjwXGZFDqEK1jcZoiq6SFmVuak4hMrBt7kZW5FdPPbb9Mfrv2ySj8HHTejx",
  "key23": "3aD59djW2r6gANuU2poCaoBufqFSUHBJfgfNRMPUyxHPbQeWa82e2BRzhrzhMnkTb9QHeVm8uzc1zUgBnuS81tYU",
  "key24": "27KcfQNz5dS366LjomfXCAos8cb2XwkWa8YaYrWrBuDLvjNbXwuc5EBxBPzBUUfEANgPwbRjDTRga9TcXDHWJeQb",
  "key25": "45cjRdcTwnNzFRc8D7V2QtJFkMSaMcxeabEaJzRwnxxJ1ivbz1vUuDatUC8gNafpxv1nPyhonktVLAtrFmBd9QpF",
  "key26": "5mDtuqCpU8JQkzfX8WcwrwQ1XL1xPwqvkNEJA8Mn2rgNfRZswSvREthRjEgpHzJY3RB3kbnBUYc97RtrgWi23XbS",
  "key27": "XpTKfJBefmvRrPfD7CdNUuR3JebYvjcKMVYt1DVuXSDFM3Ryz5aWgvE2517MTmTfftsZRKeZgJ4qgEUqf6hXE83",
  "key28": "2iupNAWVeXeS7oVUmjVpE6J8zkwbaLq4CrEHXxWUZaFz2c7Esr7cpVYFxNbWhHsZRxRsWMLWJ5wWBAW3hLHz8iRk",
  "key29": "BwXMLETC2kP1B3DueAUi4u693aDSZBhPgme9QPe7yKbkwjn3V14iA4dLAZvYugyZxgyF2QYfNNL8WhpHMG21XTQ",
  "key30": "4xVf8WSmiKgyht4GFrRae9UM9uqryxT2XwUzayFrfeN2NCsWMdg55egtUpWnbTZ9FG2e9tR52yhocQF7ehGZ6J91",
  "key31": "5Xe7ZiSjiBFdJ1h5DtJ2fUWBiXwnquKZJJTBTeEZ5rmT8i3gv2fXWB6mTKep57MnrjHf4JQU6q5ngibuUWisjtkX",
  "key32": "4TY5MEc7qNEpgccoDVZwHgatCzDZ8QP5rCC4JECU9HYHF316YVXMbGwset8ABubT3vfonhs6jFQZaVz94uQHoK5b",
  "key33": "3QFPbLFUWHTCukFsryWoa5gA59HKLRBzzPw4P9a7LC4RL5eLVwDDWrJ66ve3dWtSUQ4cj4PQE8HC18k7HpuqapPv",
  "key34": "amamapy7NhVrsTVggh1d9CWWTKp2qVuApDaD8NRKkN5duFE3a1wwY2Ubs4FVXEp4yzq534dt6HFerKBs5WcSy7M",
  "key35": "5k4mdGxNtcQqssxWZe4qJJ9aYygGoU5ifXcBuXGAM2F6tTf5BukBtPQXTGBVdXEL4Ps2z6gi7X3tn74VsH6WcT7h",
  "key36": "51hEJZ7t968zwpgnavWZFpRRAdMZANfPieqrXmmABbTT4WxpFXLjZuLvKodhGgmD2j1z5xYafB8cqGUPctHkT5Sh",
  "key37": "4egA6AtYR7AU7FvtWdU1xp32C7eEfae26zZgN1hazj14P2pFWLzjqt5TyvuyE8BqHjZn8iT7bAZZ5RTFs32pyZJj",
  "key38": "2tt7hNGfGaaEWsMC7fr1BbgFqnxaU2vc2Z3uot47vaA7wuVyZyoDJ4MtgQGTf3cMnMDsRxtDdKA6Wue5TSpSKdNZ",
  "key39": "3eFWNz99ArUD3eX8sdPoWLwp4zmq1kzCqendfosNDDXpfH7dKJtQBtyLKQhr4kZWXkdEwgdEBaYhKM2GmXeNdgu6",
  "key40": "YJjgNQDJRnTj4eEJKaaM1fqwPRnp5LVgyaqc47H3AkpL3n4DZ4zZfpw1bhEi4wMHJBoL7UbPedmSJ6dpFgu4urA",
  "key41": "NMWkoith8EUDGTKUQAWvZ4nMtKEkSHXAuCDYKVkJNXuTTaQczWcfGpfR3sDoEMPLfC8kSYPhWsPpz8ewiETyANd",
  "key42": "3MKV4TpFtTQuPe9Ra8uQ4iyqy8Z4Jak81fftRZ6mAkGr1dPt8hfRrxtZPKHbpwxdYNcj8GoTcrpZUUysQs7mAsv",
  "key43": "5YUe33r3C6eKTpwSUwCWFgVo6aBN8YL8RvXH662pqJ2xX3jqkWmk6qpNpuAh4FxDzUB22htxpLfvJVxnXefpswZr",
  "key44": "3BPqFCe4cwuA4D9ZCweHxbpPjPULa9VALYx6aCTAirdx4365FBEqHcJBWuC7Eur3mSm9XtBNQYu7uFLPctpWqMzQ",
  "key45": "3pdEQUb9D4MZ3af5r3b9jzhtiH5JdpLQfsKYc5KtM3gajKDXswdgJxx23keNZsdy6t1yPJbr1osHpGwCu1a9VanA",
  "key46": "3NWFBecD8vozz3dmBa4ek9WqLhgN5uuCrGS1nvoAzsUD3gRJMhDfpWBeNYHcYgzTPgPE5o9ZzKx5JH5L8XqViJsj",
  "key47": "4zg5JavzGWowhzdHdxB6xiC6N5gH7PEsxCnZ9jsdCkWaV2ALQ4Atkk8M9b78fVk5KTFRguufZxtqrgKRXaA5gsXy",
  "key48": "2Ef2jCtkDuad3EsMP3UUpzeZkvj3GEK2YP5ma97orNmrEBPAJFebDm9WgsqFZWeBb6EsFYxbz5gaepEd7sMioMMv"
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
