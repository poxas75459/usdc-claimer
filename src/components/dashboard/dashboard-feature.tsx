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
    "5SRKsmX881zUqtJtz16BcZcyFTLf4mYuujXS9MgWZYvS1EUT7v7LVshDiXwFcgcipajtTiLNUX3zBwDs1GZEoXjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TuutwZLc3hana9o5jwBeRW5bq1AacQhYhdEJNTFvDyU1X2eoqcdptDwnMNVJbnMfjrz47mrRubc6j4UbKjdhNSL",
  "key1": "4Tc3duT3YtwFKy74G954V46K4oyMaXU75SmpUZVcUxnfrMP21iTGfwhUproRSLMt8LtoyLaVPEV5dVYdG4Q5vPjp",
  "key2": "3HPzCbWkhwGY89tYxHowj9EJyKjtkAYeoQ1FdMSHFY4swCu9PFrswWby5r3bFKBANbo9fMjXsPBpVWfuJGJK7RUt",
  "key3": "4qoDnTDFH6jVDbb6hZCYj5Q6Uqcgo6pJzGArkhzj4dBJoTsgEwQdJYwc3zBFYJLV2kSjdZjVnhuio6aAgvnHtaXf",
  "key4": "37Z6BahdeYBNhSqe14eAidAgEQiDc7affuB122LfynoXS8rUtpmYhNHY4rr4U8GPV5HiWnwqKCwjoVPKAhAQn4xb",
  "key5": "5QF7SNzSg882CpBEwrK1Wiv2hu67nv81e2J5sZMR5aYWQ7XdXKqGqM6TnRvio3QgEfGprQXRMvb33QhdBmhhbqQg",
  "key6": "3LMb7Ga1XFd7mht17eZcYUaceVT1kgV9h79ogKrTahN9sgCBkCDcJcUHfkVDGrmWWbk9rF534Ct2ko9M5ub2M5Cb",
  "key7": "2vo8wG3vkNhCjd4jNH3W3Xxb8E5guq2jzV7TyyouLtWcx2VBBLzzKkWcebovijBzMBBUjrDFXSudeNkX9ziaVC67",
  "key8": "5hUneKcBYd1qGSgTtGTMxS8sB4hHJ8GemN477oYxafmpgF4nJ99pEvMhYu3R33HDT64B49camDtfTbarGNHyRHrt",
  "key9": "3UTPb2poXfbPQdfohmbRuZ74saP86LTs6k1SpDXbFogm9ApwWwKeCDj2CMUmCd2hQzL99VDLW4pGXnvAc7naskjW",
  "key10": "2gp9CNmVBohLgh4TQYhH1ghWQ9qmCPJi9sd1z9BrnWjfnDQrKp8oMksP4HryEXWx3HbcUyoETJ4eryZZsUY6pgyt",
  "key11": "4YBYfXpD4tLHri6o3HJehaPuWoZzRyQizAMHGkyFnzvAnxtqA2EHrNK7z1rMJGxEDA1zgogPA95ENR4RNk34d61X",
  "key12": "5rpYJeMByLtxsHnFKKchHpMnAdbpxVyFj7HNLGzUDdREpQgx9KkG71WfebJgKHs53CVsYCfqj6GbUe4aag86tMuY",
  "key13": "4mjP5fFkD2LaLDzBfJZ7iAnWCpJSmGiURgcDjYKxnVKJX4hGoBXgG6Jxghf2JEnV5HZTbqNwQJVhvzne6UVrgNNY",
  "key14": "3PtrWQouy4wghCFgubdnsvKYyLGLHqRc95DL3f7JWg4KzmyZPXv76gxrDre1QxLsWXBXTQtcfZW5kko5vADHP5Qj",
  "key15": "32YpNLZqJXtyFs4ESMPVrTBm821EkZWom7JKENC282VJE3gAZS364nV9pPm99okfkeTqmnZRY54o6oYrtW9A2X39",
  "key16": "rBtaHj6nFVBb9zoNfDoVvTF2XwsF9aUBBaK63MX6JXWSU6VfpZdggburnR5QrJZ65tnYS9N6WUBoYJET7yozZEL",
  "key17": "5PGzMMuwdMS3Zi7fuBwUqpBHN1ZSxLEHCVgkyT9ieBtQtWKQca3WCg1f1XHhoqxQr7FBeGHH9mxuE3ENuB52ft2B",
  "key18": "Nxpcg97Aqnn8HcbsZrZHKJFoyQKA9jNAPt1zErugeVYAmDhZUuyGQ8hXn4UbZEabjBLPnAk7KegzfiDAV7S88EX",
  "key19": "5DCC662Q2abstjQ1kATZWfXSNf5Uk2YsX8JzNnqv1FaSmYg622A9CFgd1jvCTm6jRf1kZkCscowUJBu9Af3sUtRZ",
  "key20": "4RAgCjrfRn3DordDwcpi6tpQUdR9U7u9Py9gnccwER4PpXLxDpJXJu7Lo546DdDkoqpvwAQymX2d9RWFmFytaBzj",
  "key21": "yZrqMqX8xhvWAsPwbgsFG3htvom8FvjcvfVHy64H9CS5euw5warTwxYe7m3sAv2AzwEfKJtd9gn4bBv6Wnc7tuN",
  "key22": "55ewqViTkJyc2P6CUD5w6vifkUtNtmWm2WGxY324UHjRAmyHfgg1DxvBxA4BpsKofFt9ziAx1Ak9wJYVv7wBWM8j",
  "key23": "4ojrK5w8KhJxPHSrJD3Qrw4W8ijjczQAYPFwzzFEJN5e9jbnHcgo3GGc5nPx1HWLw8LNJS3ugY1GCQXpykcvCk7x",
  "key24": "3wiRUaTyA9uVPRLq6wzTtvweFazb8c8BBcJYg5KyWLbUk4FHD9Cg6g6bndf7mkBMRVM8HP68agbFgrPtfJnRWkbd",
  "key25": "2UGP9LQRqmj2mTrGpJRyhewmQZVGUTfw8StD9yPEGnnPfXFWqZMpLwEwYDkfTNAFCQJECC3ACBmu7LzGGVtANoi6",
  "key26": "2AKYW9Qc8FgMoApeHkYoraDAzpJf2nbBQTcoeMFk3oU72hquNW2QJufDwZ1jTpe57WqdAvWgrCDLjx6nJdX1oAT",
  "key27": "2XSaqsWFC9roymjfCvxZURQhZy87BfpAgzgnRdV1rFnpGEQ3jtYQHrFBWuG9Pk5zYN7CdGu2zrLuDcencEyx9rdY",
  "key28": "5wWpcHQVRp2uvoHt89WHVoGjFUyfEcQN2nAdiWZyBc5eABXrTncRRXaeqbkkGjWwAK6EcnTq3VAYXU4vbQztYmAa",
  "key29": "62Xr6812W8Sdd6i3iDtGwu9GfyHaZQfZU7b6ciiB3n1eCCtDC3UQJB9CcUKSGppav9Eo7Z84YThwWfUAPcJjo9Vr",
  "key30": "4mTBoy3XsvuQZJHTU6BmJn4uwEcaJzekyf44NpoN3dhsh8uvVZKdLej5fdMTD2Mk3PdzaiQjgfyo5G7GQCyNXmC2",
  "key31": "2qnq8i38mY2hAZ3YprxfZZYcnMoCuJtEue1LQ5GRFSG4stJ5MYY4e66kNjCtpUVxp6BHAsPoXhTNoTuSx3X8P2dv",
  "key32": "4yEDMruX96Ptz3JVGtDnE9hP2R6sEyvbKGegQeFfidnxobSmHeyWPE3upQtCJs8VqT66jSJXdfsUBM9x9NvCBTad",
  "key33": "vFMs3NYCrfVa68umAAgZVHJQYhZXRTamSeJs1Fahi5MMC9TkhH71VPJVB9diS3MoSdSQqenT1z8X8qvYKTVrTSe",
  "key34": "3i33tQ5DGXqjQ1kFuZv3e1VUcBfPUNgdHV3HctrLzPNARhD7MZCnVsujYHHJsnfpwHE8ZPbyWVh6Lg9dd8MdySKc",
  "key35": "2MP38RgYcHjMAPagUBQgpcGUQfNtKrNtoaeR5LSiZLccjqQ5Te3rV9iRJ65j4S3ZVH8pb2mTzxL1REwCC6J2YYMA",
  "key36": "4EVpETB6XQfyLEWP8RwBtaW2cp66bohFcK1kvTwSwbF4MrXPdCbRe2xYPzoMkUe5n9hFppBg6qy9FEPthnw9xoQx",
  "key37": "3fVZrM9mTVx4NvsR9mG3TPiNPgLtKwJbiJbKBK8bGanmEhXYcM9qbhJ6cyFEb9dpGEN7fjhrRor26gHNdDPQsqvQ",
  "key38": "5ZD32YpFjuaZaJMBo6UY3QCdAgkFc59jY8tLu5X6ruBx8d6cVf9vpbccFq1ytn2bkhSLxZWstWuQD4HUyB2xSwth",
  "key39": "56ummvFWvhVCaDeAgGwKzkgE4cj2d4LRVhTPeHyyo8aYv78DGjWp6Yc3KLiaApgdxqMs9kAuy6zvDFJFS5iZ73p3",
  "key40": "2iWUvgSiBYctSmrzp8KrkqcbyqA8nGddo8r98QHSqGgre779EpFtQSEZW6WogGctFUczgLFZk4sBMPjxfTmD83Zu",
  "key41": "5whjnc2vreByG6nNmsCoAUDkfSN871Y7STjwxN9KVZ6eUe7ivy83yqR6UyTAuXd5ij1ZTvaTynf2F1WAVb4XNDiK",
  "key42": "3Pgd4jEXFrn2MHSeWEsvwayKRqeG39LKCcpoUmaLagR7ngNgbLdwnKBWmheFoMek1x4VTHSx6m3GuJgAECE3MgPv",
  "key43": "4qBYrX6fSdmDL3SUdBWnhEijcZ6hcE9mJ31VsrRciR2xQaH5ajTHzmRz9tdZG4cHEUA3Y8w7wjqHodxTPdF7cqc7"
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
