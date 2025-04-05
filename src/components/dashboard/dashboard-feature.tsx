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
    "cBRtRF6mMkR3P4QbERtpD7jT82pEZBPkdNZdZQ2gAGW8f9nVQGHBUN4dKPHvwLLu9uacveiyhVVudTzGQ8Vx7Jd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55117wkFEPbw8yDTHSkV6PL1gTjPc8Nx7bCrnk1gFEnx7bRxR9b9cb3TgfCudk8cdGA6Xah3QNNU65WK8Mz9Uz65",
  "key1": "2AUMYTeY3vHX7uysHhiifxbmwjogQ89iGrj1WPZoeMfojcpaiGmCkJHbJ4j5Fcvr4ywskEG2fGF7VHPMAvqQZ6K2",
  "key2": "2eZTHYdoZBteGa2Ff7awtWNkXMn1Yg9UT6kBZ93NVcFc35wuHsMoXrP1XeiJ4BHhaWuuSCZrwLXGyCGBphoeKsXA",
  "key3": "4wTdVmPxSXhP6idF1CUKMMV9vhMSzM5dqc7DRjTBUeGc1qM8NtfShPku4vUP99VpxzpWUbveaqz6FtwvkRKXQziG",
  "key4": "6yGMG6t4qzmdFaUfG4CViPtK5vxn7V8RoAffuK791fuS1x6JHQR11UsQk5ZcMX1XJPpb3bq2psbwWNVmLWxnUCH",
  "key5": "HGJCzmZ2Mk8qeSVyDoTauN7XNAGAYrMoNUSaszBbNQj4EJ6Ggp4uwFNCH52LjeBSYTw3HXbj5fa9Jcjsggkqm7o",
  "key6": "3Sq9xREeck6ARZa7h3udxChsL2a1mzys4aFfRbzRRHdP2E5qyjW8GWLj5o6tfkCymiewHfAydyHao6vGGwexStLL",
  "key7": "2kKheZQRHo1yTDdcPWZfT4vaEHMjqAYpD2nzhiMCcqtQx5jbcTZdtHGNsoEdJAdKPyJcdNHyWvz6ELE1TboAmj7P",
  "key8": "4XEbdcMZGwxDTqrFa7EcmqQnEBQVaboHN9oDSSYu6YbcJ34DQR4vQ6nydRzZWELJomFMx3Z3reyvftMcPL8K23UM",
  "key9": "4yCkm3A3vdRUg2KJ2WBtw8GA9kWnwKi7zhpCajLddvzksg6DvSjGSBugkqAuFdUwYrB33LmTD6QU64KcP2tZNU3M",
  "key10": "53Uzdx5io2mAskhnZWE8EtnFND9Z9pbS76Z1tvGVe9cqchtHFPdvLwSS9BTEKAVpxbY17LvasXqJJHVbPesxZduv",
  "key11": "5m6givY71fsP14NgncFcgCXRkY7gcvXUBYzjg5PP7992kXgeaRiaV665wFXsbotBt4UfVmKMw1R12y5jVR5bvmmB",
  "key12": "66mHGBxaJzRUUx42xDhkYb5dGVQ1TpemZvDmXkPdar5kWCj8xtBFG9USPPhW7Bwpn71vQxUNgHqoS3bNHY5C6thr",
  "key13": "2rGM69iiF8LjRyVQAR3X3SnrpCD78aMbpkXLpz6ppCtUtfTJ2hCaM97zFQ2ggKG65BZwWy6KV1nHrMoerGh6wzR",
  "key14": "Z65ipfJfQjT5QVkfkWyyEL8EUhvcRtmrUrVfZREw3pmEQj9jkWZUaCGe6PWk16fX4Bydk1sRLShGQLaqoKzqn57",
  "key15": "2B8dwUJvrdm6aHxwVrivnP6bDC2Bh1uKPdVsqwDh4kkzmvFvEfXB3bUVrTfvT412rNaEcSxPUnEzmHoCSoXwy7Fj",
  "key16": "4Reda5Kv8H7rGzkvxCS8pZLDtEf4xZytKk16W7TbJPY6kr71K7o9sTmbAWhDTdR2qiPRCqHdG2LmGzaCyHMni8yM",
  "key17": "oU2WC2WZumGK7zgk7TDEhaiqcEavRxQfrp2HEWTYZKG3cJoxMjqsMMBGbcAoM2GTfSbkhJekL2r1G8UpiBiXYvC",
  "key18": "kZjpVyeiTEBvAV3xc842kHnt5c1gXiMoHzj21ubSLchW5KSW9iMsdbtiE3WRAnwQkH1dUnoM1G7vmQ4Z79Sb43m",
  "key19": "4tukGD6xUYE9CUzwRGP2kkaN5eGY3tiZc49RVjKT1KzoNJNcFDi8wrkPgFK3uFnXjGDEp72JLfUPE5xn2qZFN8yh",
  "key20": "5agUKSj2YVrW18xBbXcybMPhK9LG8mcvq2BDuZYnpUjVG2gdLdz7wvHqisHY4JdSADu6J5HLAtuxUs3NzxJMnWg",
  "key21": "27gLCRqvtcDb2e1UJja76UoiyN4HfqgnQ5Y4bHXR8ZphPcydJKPJB3kfEiNkAAJSrBvLkUyFKWd9UR71J9hNWUs4",
  "key22": "3Y7CEkEE7YhVBZVMqZZntvtjGMLhUiUKUGEmGUUWGJNbBsr7h64fSvjTPudFUpSQVBdVrPmZAPVe4VsRfjz3vhPx",
  "key23": "4yEYCgirkdigx6SBS373NmbD3TQsGMRxak4YxNGaJRUiwsHK2hh4B5QitDSyzDSjrbqEYdBNpnrPZXocNw7uvTLj",
  "key24": "66usKwLhvHaWTNQpTk7zp7uRusFDfukFqBsH4ZSPq7D3vVgd7XE5eDq53YcQVoqsHcVLhXQv6e4LMEsyqqJRYonh",
  "key25": "5H9apoP8LM9gFjtbrw3sGfvnbxzixT8WSuN6FjP1a8KV7jCcM93KVAkwLf2hbALUyYGXoq6JzMubHU5KCCLHLeTb",
  "key26": "5twWJeewFTvBf8DMVADaLbVuSq3R8hmRmhqEJwv1HhvUbLyLrcD3CoyUgGUfwceic2exP8YVSb6wC3FqJR9biL4S",
  "key27": "2ZFiwk3mBKF9FMMMZLtSaY3Kjm3LjiVv2e9Xz1eZSj4USsCSwf4BSdvkC9NCGjHcwZaLDXnA42XQW4oyWcJBEJmH",
  "key28": "5eo1C7dRiK7zFRcTEKVmmg8u7dPKjHfq3dcecvR3mkLuU7AsUH4wdxEfb4YmhDwmvtqybaoaDajfUwjxzEcefz37",
  "key29": "3iyf12kGrBoaxMEUfUFgPnnjYwKvkcUie2V89AgRUKhhSJzAevs5kzRspmVcNc9ggbFauUUT5Ahe9mb92vxnkaZs",
  "key30": "bLq3P273rMgjej4niteDCZ6gknyyiP3z6sAMtRhLD28QsMvsnEntiRK4DxLAHi1H5kBbNxq7ssYMMZzLu5NFBPN",
  "key31": "2XF1cVnEfUbDJpz1E2kmug84zFbzfvN3hf3r4zM43LsXQMhhzuhJ2sywMQ78htVf75UcnKVTHNiJigDb4Laziucy",
  "key32": "5RY2Ro4pi7kDtjntQYVGygN4tvinQkNNUdLFFjwyNYVHzNgB2JHiGqkRBo5iAgVUS9V8LWnMTNE4t9m9tyXDCfXD",
  "key33": "3N8BHkJS1ZDcxD7kvZv9YhFhnbWYnd3aFucAY44KRME4nEjbuCKuC3Dpq5jYRFCiuaW4DWHBFw8BU2H7wux7vW3y",
  "key34": "5m47T5vSP8kZrnCcvxpgvugPiWeFg327LQpb5wAGFudSQ81Kf2G5bpvpYD7vLEj9XSgJRuBk44EX88Fob2Kn4Gj6",
  "key35": "2EvHrkt9ouv1vaGezPrkjX3nb7rTrKwEwTjGjBoBvccietfK8FwV9RowjqXrGuaRQ36SBE5ibrGKQxZr1VrEJa82",
  "key36": "2nb9NiFgiYjNQ1EpEWqQpCWNtZzyWhThwThwejpY5UxcrA4PfEwTuoJPLJBxxHKcxhCXgFwKuFZMHXP8LcwfDT3Z",
  "key37": "3q3FFtyhHK2qLcimmKZwkLN5REutJQrF9tU3G6YjkVTXDLrYAAveXZ4P2MDFoK6QFLuqhC2KJipttUy7MguMPXBC",
  "key38": "52RyEC16AnFgemEn4hsQM1RC38rAUKcL4qqqMn6mYvCLQrVUMnAAoKS8pA2VuG56PR4wPhVYUztvuB1kEZ8n964m",
  "key39": "2RaxvDq3DvPvwHoqeVEaAs2aSwVnCb7h6o6BtCT79KDfoNbWkvyxMt1Q5DmrntaCmB8niGNsy3ab316spDQQnkvr",
  "key40": "3Ze9PV6ajKDRc2foU4t4DwzCsecSZ5bkwgxxWJqzLn9YmV7iiKk2pSEnY4rBJdH31nQ16qiTYSvWAiBjif5QiwSg",
  "key41": "3GJdCHcmzaaVchckchYcpHsJMrFqgeWQBUYojhqxGuGoUGr9gzYt3j9zd7Uoy8ATc6FNhXJepTTX2Yabt4S4jH39",
  "key42": "2Av1Rcq9LC6ATA6M2uwSLpAkPp5RG8YA6JXTqcKJFzBbchDMhBq93s3eP8i2JoqWPbheaNeAebXCNEcRtxSzmGf",
  "key43": "93ebRMqPf3zh9kgYAqnpvPGvDCk3DmZkZo1A3FiizDJpbiU8eRMXrB8WJNnAqscEye49rYSgnjqPBQX7inp37zf",
  "key44": "ZXhoeDho7tbNi62RZsFAiCBDxmXLet3uocHGcUYppUHo6KE5CKgQJABbAiiLJbaBXB9nzSE12oouQEWa3YoBwqA",
  "key45": "532RFuz2hKFkxEhGQnxVEuX5QE3H4F4YyTBVicUzfHdQu79GNWGNa5L6vip2kNTSQZL5CtWFnwfQu4844bHVE2ah",
  "key46": "4HdMbpjuQ4sywwNc5JMbV9wLHtU3bUbBjo1GwrBEomPtdENQzwkXyjkJKN3SeFekUxNZdMcMczCSo2TsreKTBPMt",
  "key47": "2poZ1h42uYouMAJmiKygwmjJKpxFwY6C8LDW9N8EqQE76YKq1ow9fhhCFA93TveQxMq18cThLmeNTj8sH5EGax4n"
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
