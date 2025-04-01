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
    "2zqVtwPC6HnygCqCjF6nicxchDX3b5APnbQnzRrKoTpEejJY3GXmq2bYXrtP99b6Jv6MpbxveMuNW8Eo3jbEx8Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZH7AqtEGwkyxUyGRZbWna7TobaEeZm9vifyfDRbMuT3Zj1E6cd9pVTJkcCKUE2xcrKh3gRiYCgc9DY8cy7RDDm",
  "key1": "4cMBg9iWEBndTtUCmsRxs4kzpoFyYtZST6JFWhVAxPkGg19mXTxjQNkapp9J17DvPewuGMp26PCqR34bMMtJLc7j",
  "key2": "5fago9AvitFEwfBCwvRn3GJh3iX3Rak2GwFH7XmuKrUsuXD4cyqZzuvdYfFkjERervN1fxcZBc2XDkbrSrMt9rch",
  "key3": "4rRerxXk3mZhXevy8Ap4fYGpongRHVFoeQb3kYxPiLKQUeAoCU6j1Fza7kYbztXwmmejarRYBr3z2XTPPzKYXuwJ",
  "key4": "34GgcEciADRfLBLAp4XdgPrbn7kHUTtwzQUs8hFG7y1N6bmFNPfgt8JogosVGfzaVbrbWz6uYoVwCR3HjAEMWiEv",
  "key5": "t4gVxq63qgKo2jdgCXrVvYNxMcaYQbjuSGiBCPxVjjfCfjHaY77gJcpf9iPDfUcLK4WzVdYZ9Gk4P5cm4NeRHmn",
  "key6": "4vmadvQkQqoCenaR5uoH4seR79SU4x62ygQYZz4sQodJqJm2LvWGFDZ344jdpPGckUw7PREtEhTxSUP5ScxTjyx8",
  "key7": "2oZzg2Kmtbfyj99SRqCB76ZnhVxNzU6hRQ8gUgJYLnGaDVt2FBpPbKZF3uYQzYQJZGo29bh94kwQtY5NkjPq1x9g",
  "key8": "EmjnHryqtJp2g5dntSCNWrLtYtEJDgfS9GzbGsyzx6X9ym7eyGsnxbXmFjC1GpD1HBkfzw1Mwy3niezhs8JhZka",
  "key9": "uoX7f3znGHXXNm4RdrGECFHZi9x8hnadLTegFC9n6kQHkKcCKHt5pxYuBYKntZeaosSw2jV73Cn9oP6UAq1LVkz",
  "key10": "2iUg6YJ1jPRtinMXR5t7qJKxgfRpBZLzG6VtrNjnw94SmE39F4Yqk8KLcD23hQqptVcpXmtv53N3BQWw7HE1A9P6",
  "key11": "4a8EVjGDqEpt185GZjFqDi8rUuKucguPo3uehyPjSMSZehdLLvzZ1S2Z3EhAZAoLzZ8A6ggy3mc2zrsYMENxP8sg",
  "key12": "2Dh8F2FFa8cQa7J5JdqutAudvHg8He6ujeqfNb321r2CS73E9AoWES38acznQaxLqk68hB5RAq8SXLFUTQwQmoSF",
  "key13": "2DMA26e9DRACM6M5abVbtdHSM1uoJT2Qf1VPtdpSognnCwnPsUxEFLmdieh9QAkRXWWd9zciNEtniECbVtQBM9Hq",
  "key14": "2XMf1QJc35RjkRv8gVgyjhJ79N5j13J4vh97KibgQVSahWijpJwV49gXHC3P4ugqJWktPQKziaFPSY4mvWUKLxRp",
  "key15": "3FMxYJfYrNz4tjcPf5mTVyzWFsrnDzrhkuC3yYUiobw7WbeHzAYj6ftKohufp1XyHP91U6F7vudPaXESXNX6Jq6i",
  "key16": "4YbAUy5NfgGK7kJYKNYdmpFGBdzX35yXJ5fgoQE8JpAYj796R2bFmt8aCnAwyVtpDm9FnxuJG13GBqaTi1jEE4Nx",
  "key17": "3QANcFno23EuHkDxP55gscixvhL2HVJyBo8jNJiAVW4gYnFyrNGEsq6Xy9NCtQMj9m8zCDaLC2fTwG71rheHcZab",
  "key18": "Ss9ncjwnj54WHgpZdBzVKAypdu9moPiEuk1gJCVyUzn9BuTZDKhvw3zyB2uHywUW9a6TJKkqukRWWUc1GXyXP9W",
  "key19": "QwPYP3D5xqTWJzazUUED4ZYjGNCbKzorRRhxitUaDT4eLYwEK1NVfsQ4y7CUi9HxpWcVdyzez9b1F1SCATqWXse",
  "key20": "3qXx4cby1Y4H3p76nXX4ARoe5MR4QPsCYyKdkkSMG5qpZDNAftUfD42Z6eh9s5sXsvuo7WuQo7atEMeGV4sJyQo7",
  "key21": "CZg3CuNb7RYdWL6CQC6jo8tVTBaroKo2CLjaMprb9Giq8Wmdjb2XfTUK5XZZ34zeHEu68cLoUMDzk6HHL53HmvR",
  "key22": "2iViKa2BP1e8mXH488tfzX7yRzrj6vgfNzmbV1BiRT8DwpZWVd7kWSf25frTuGUgqYLp1NEYctfVMpiK5uYyqcGj",
  "key23": "2w5kCJKHMBeDb64Yd3NfVtgQFB1biPYMZUEsdXFJctbVwawJbVc37SCU5gKGTrfWdwiARDUA1MMd1MjwxCDkVkD2",
  "key24": "2LQTS2NimpST43u79XGAtZqveGKf7x4sFKurgAUpAg44Db3xZSoe1YT1Brf3XRY7zuBiaCCJ1VMj5EJeVL9HHCow",
  "key25": "5ugYMZ5rL752xU8qahX6LMCZZtQVySDuwWmkRPFCovzFRKia18tvm8feVcJGXo8nT3rSeV6PPhNreuy4D2xoefgn",
  "key26": "NNSiVcXwVGxmokUt2XpRMndPYxtkJvTAYRbGwtaANqFixxp3pH8CNeZ3FzQEfLxiqSj6KyqTYLyCfyxk7vpX7LJ",
  "key27": "4bzWg2r6RdyyvwN8GePgT5N6iKNUiPvGgLBQaUiHh1nkXenapWwfezDMgnQHo9L8wfaamKG9wUuhMZhQpdCUMU1s",
  "key28": "4hBpk8cK6iTywUVaVizaFnaCUgbRxSk6hVSmxE1nYzdqurx6hsLJV8oGAQim5yacYV2P2VaGsQhxi3PG8g39iZA3",
  "key29": "3tJszHs35DBjizCBhBtczeCHMqQ8X2k7zBdY4kCKPGA5bWcJrsaJ32wY76hWaMnfUxhozwUCqK4J9BNGJjSzcbER",
  "key30": "yhA93nj88WAhq3s7LT7A1e7CSR4gtCojT9M9xWFwaVhsa9BRq1CvcgqkDjNwLaNN6zwxvjNpAprtFcyhek5rTwv",
  "key31": "Yq384hWHwVCT92hk6zT1BbXSsh5bTMxUpi9KL4uWTkRi3DGWEizEVAWAqujr1mWjJ5syS6aYXCqVSFw3UXperVo",
  "key32": "31EQhL5b36MKc6pFd1hUkmDZ7QcfWy8YaqdDJ9N4cpNw3BXqZdRmNjvJmdP2fGvLAVLaZ3gMrc5NTmL45ydzJsWf",
  "key33": "3mNpmasr72X6y58UN5A8efwNyJHqcBb9GoBWHtPyxYRwgjuJ2jXGmFoeD7YhSBbLD8PeQpaRhjasFxtyZV1dJgk5",
  "key34": "3YFnS7BvyigyFc81zXHfSpojdy6iwuDuGyDzYY9z6H6Sz7z1WxjJ8S4xUuiziCeivTjsHa5RGgzADZtb5cKj6vbq",
  "key35": "NxGATwctXCAUSbaEAtKR4Gmxo7NhZw8gK8Zd5J5wCgjU9J3JnxVftgyhSU9gquxV6tEBsVcVbi6EZVdsugnymMX",
  "key36": "4UbAtxCGpntBU5i1jnU8T2PQC6zCmqAypbHdvHTagYvtY2oLx7Z2DR1YnqhBtEBq4RyuucMLy676VKVWGgr95355",
  "key37": "2fw1hmmXSZiFjCoxXX1VmmeY7mYMSY14svv52Z1D1w1JqMuxQAu9t91NveMvsghfk5K8NySmFqN27XdaPgsNXQrw",
  "key38": "4kzpjnibaMToqvwm745eEGcKzcCD5oya5ijqCmbhncdkBmTP5JFaEvpENaiKweQBeUu9Lq6tQJxvdZi6QdMCPG8i",
  "key39": "5uKWnrpGgsc9tiJwBGeE78JwF3xDsukjVug34SSojuNWxkyaoZ3hJWmbABadzSeossF2Xb9kJNFkwdqCmVQ5SRUv",
  "key40": "2fuJLgh9NjGFk4BJPUDkDcJHPRnzSVL4VQG3hZ4u1UX2Pm4Jdm8JWdFKs1PxAzcE283CsS1VXthdzjrZLeFcwDGn",
  "key41": "4FH5HNjiu4wRZRhFFjyqC2AX48tp5PfTMXeSs9G4Aksuh9Y5cdZreercPiscGEgodNQrcL8cuaNvs6C2yPuEFYWA",
  "key42": "5GkP5Rfe6NzC6XFVALzsqtjxWpNG3nGFXAccX5fj2Dqx5qZXxNzi62uMg26ZeY4wRchtT6JUobsCSgb29a54uQm7",
  "key43": "3YxRJkK6fdm7W1hixid2po9F38QGYFEBrapR41V4rB4fGL1UWFANvy2Z4pyfBqWb6dpAMQDzoYej1c61FDvTwUMS",
  "key44": "4oX4iSYAk322XGwdaJVNBKcf44P3XTSe3fP5QMxFscM35APNrcenmkTazLM3BfZ4n6UaWkohCH8WVFsV2p7CgEcb",
  "key45": "2fR7uj6yyfeGbpwJYAa1Cdva9HkaDcedUTYXw5q3xiMn4TKgKyG1DjDp8VQ1HTs1R1YS88Hhj4YGZu8unQM5kFBm",
  "key46": "STpMLPpE91kcJSQNFYmPYAaGGUiWqJ2dnDjEjh1PTLUioPZ9K3dyFtuMmJSdYm47HFc9nfASudzJdYcdZhjXMGQ"
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
