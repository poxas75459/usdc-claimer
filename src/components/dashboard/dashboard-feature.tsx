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
    "5qD5m2w1aoCZke8newjWPy2ibVGFSCbXFam3b5a6AQkrbEqNszjGeChS4Ct4zMddjpEjShTim5KZwRTQvAtBM6Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oztPyxDyjF3fcz6rtKnbTmM8ygbijK5wrHjL7RspWZdCs3bcZgkrefrQYtNmvQ7ysapAZB54e22iyX9Mb4Q3z2U",
  "key1": "2nrmgk6K4DhGjKUk7WQNRkBf37nA6EW5uaxwuX6EpYcBizXANPaz8pqs3CoGgF7nAZGZ2tzf2Lb4mhnRh3sp9qyL",
  "key2": "WYbXk7ksEF5qe8Ldv5jd2kikGy8VTD1FK44Xq8bc4VCNRWMapCqqXTpcy2YXzdVAkGXRRsMnoKU9kiWvNjcxCUt",
  "key3": "5sdNFfuhq6rHgBDfy5S4y3nroyDmfi1TbVDKHZo31nNiuYBU36EmEeAVoMDjkRUN2WsJRXN4LgtLP2BaHpamXp8o",
  "key4": "4b7bDPPjFo1mwggimofHvRD4zdkZEuNvzoqXoEphdXjZA8iBdHzc7Ua4U8nSB5RWkgG6XSgmvG6CenByc6jBX7mL",
  "key5": "3uJW1uH9VM5kdg9U7dhD6UUZchGVJnzsi4qbs8oFPW33TywMDb66aWGpUww9PReZiFhJezeVHkAejy2zBEHcsaqR",
  "key6": "5fG7TBkJi46ArWst6kQ6sDQxkS6zkfUmDvk9Sit7QjUzsyvsNdEYckafHwpVk4VMWmZmiNMaLBSvt5efJUQyuoeQ",
  "key7": "2FJ1prx63oYZvwxDWGamBWvHMXdvMgWcaTyG7QQFuREaFcQMt6jTu81QzLf4YBFRBfpJ8hLB8Gmprmpb4bMoxACi",
  "key8": "4y2A5EySzgxhnvkf7cvV2EKGB4oP48TgocsYg29WmAV7AnsEkk2LtxphQMs4iqn1HaUB8baavrvmph2aQbkMPGtA",
  "key9": "2PDhFMhMwy7Le1cWEpUhCdaVmgS8gc2T5mN26sCKeZpWGR9B8pBY81zXVMsKupa9vbxMWF2FSaeifMJTBJAww82k",
  "key10": "3F3WJ3ovm92gY67M6XMqNHEeTeoF11ZbwotaG9ZgPaEy5afDDMn5UMJZQV9cV41BVzEFxSNpDCH6GtQmNvb5ovib",
  "key11": "7f8tPAp1qjes6ybLGWNyJwFHJjbB4Jv19E86MGAUATSy5QViQYY64HoKLmLPuFH1WyfkeuVKdDHKgMdgCS8TqAF",
  "key12": "4ZdzsTCag2ywG9oyj9Y9dbYLQfc932Soevt423hVbv8MMCFY6HMbWsB4Jy5KKX27PcbuBYRHreb3Hme1QJbP3ApS",
  "key13": "4fDknAXGhaEjzLezu8Esd29vrPhf2DUi5He4N2AnvjcCDc4bt8NA4ew6CJLeiufUvdDigbQXy9NtjB7A95LShKPc",
  "key14": "fPiCY3QWk4n3g8LMwdkWHZ1uxbbKNAHmfuBoBSdoM51wvnKtzguj3HY5b7GNH8MceGYyzuyPWniB9zmiv5UHH7z",
  "key15": "5hiShm96KdgBTsQ8ZjXgcdmJv9eCMVbXi1ePUntG2jXC4LcfpPsTmr6zr8RtD4DuhSDGVVhrp9k3XkRR7dXKji7s",
  "key16": "3WuM6GGnZwhykAy5vNuxaSqgi8QC6FzeRhEy7GEVLamp8gHmq2wEYw4Dada4MieWjLXqB365JsXhs7duFeXj6hLb",
  "key17": "sSfPFx4nC5hxaraPc3jU952quE1suSyHm6axK1tARnMYGXJHnQcQtKdpGcdYLWxVKP3fMudnQWEd9wCMPrkewaA",
  "key18": "64WbeE2ynQS7VM2vsyCX2WLzHc1cCLkmpPe6zRbTaiTmrsxoQNbZqYoYLQYhffcXULknvoBE6LGYub9xyzRmRmGm",
  "key19": "85a59CS5Y93nTQw2JKWaqHYsuZrLmpPcm6r1j1qE59GKSuFjVHiPeh4j1sKBgUFBr4oni1Xcm7RWzfBdLqVLW3x",
  "key20": "3PjgmU6kLQ2zmvoFTsqBwsbnCxRBGBNCfR6ZYzEJbbq2v8CCmA3CqMMWg9D39P3h424vQoFQ6tPvEQ6gspbL8ukV",
  "key21": "66a1ZZA4E9zVXt5zAdsUb3b72u5edarzXkoTtVwxaXxpAgbkhGArfqX35A6T5vDUWxi3HBEQgX8Zf94FyEc9aKEe",
  "key22": "4DH89nqDLnXdYVNrp6JqLCFk6FS1q66s6uJk5ey8HsXAXgDeME8yVs4CigtZhRN8iN4nexgLWKqqaquvpUY8KVWB",
  "key23": "3hagitFbYh9iXN3NxxLanrs4y6B3E2jp62P33AFWCoHxwpGdZkxq725ejp7uA7oCgJcDYGnHHswWN5jbMFJGjpvQ",
  "key24": "44HRpspogfo6Y2qDC5MEh2CWmb6iRiLTXkWqrejwxn6WxYLW6zyZYq7oefjH6BtHKyvPGDYtK4GNRPr5qPP7Vi8d",
  "key25": "4MuuMXsZ2krh2fCufA1zyiV7PhDEBRjALcrLgkUrAvoXt9rrDJnjQ5z1DZ9TSFBA4M2szcfpA2wW5C2esode6npi",
  "key26": "5Ai1sQ4xdPgtR6Ujb7MmTygszaqxHmGXQLdj4UcyVPCRXkbhN6K9qfGfsZkMj5M588rK1kfsEdHxLARUMwazQHed",
  "key27": "4WfZqWYnUzf5VLfCiHuU7WHirVU7J1EV2AUgWErXf7DfCPhZiYqQjRt9CxqUFH8gAd6zhisyJXbiCdNVNp43nqm7",
  "key28": "m4zncaYHxTuEsb33HGG8yKrvSLTWgiPT8cm9jHajk568Wc4sps2krXftE3ESb1fhKAckjHJ1zMdp3AEZPU1TdkV",
  "key29": "22QumD8GHVH2si8NAzoyn3E6A1KhSZHa9ZjLm45mYL9cbJrf2RoABSfp5FcCxRo7yenuF5WgL4AfRbZabPyPRRPj",
  "key30": "57Gg7mk7ATcbevGv9y2DxRwLfwJByECXZF9QGKmL1QsGQ9hKizFKAi6bv1acK2MMALRt6imjYUGGmevHhHZY13Uj",
  "key31": "PpLQZmUmTqQMwSbT2BW33bZ1GTeMrFEKLeN9KXfK6LvFWFf3VC9ptCyc3Kvi8Qhjw2wL8fszV9ckXRyikbUyjPd",
  "key32": "2QAo8Js4eNKxfDSMXaNWuDsVhKgAHTEr7NbtQDiorgiaKh2adxdWnsRj7vLPKjtppot9QxPELgvUZ7QKHTd3icxB",
  "key33": "pky6arvgAQF5tzd3iyKHBYHA29wf1dYBgooJhmqXABT19KBjZqNvxQaJquSGjEKaRpj3bg8yvknDYt1cFS2tR3j",
  "key34": "4DSBKSoZH9pFgztLmQNFpAc175Gzn9AaH5NFmeeR9CL3BAFBxNj9MHaDnqDM93wiZyekYA54YwKrjWmsRAGaszph"
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
