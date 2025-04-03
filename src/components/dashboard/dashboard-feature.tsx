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
    "2KAS34XWpUGTgCdaHfxFNoJE4VBaUpbv2XH3CmzBnJAEXsuxvZaTdTdGbrw1p7TMMvVZGURXBb9FwGxqLEuaMTbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41iBfTbJ1MiWn5ZpKp7cJUh8vEwEnkgEbk9SrfAssT3KjRFnbXNBW6zVVb9vgSetxrKK7Bu34B4NjQxat3HB2CCb",
  "key1": "3aNLnd5oSJMek2mBHXoVYZE7sMXB7nM4LNXUM2cH7GiRZyJx9Yu4M27LXY5XDtruDsk5tLxHe31goTEMaJ3BbBAe",
  "key2": "4UJhhDtixESJJMYQQQbBGsf5WjAH82dHnTng3zhb8zA4KeQFdN5XLiQGGTLCyz87uk5NCrwNHWs9q3kN7d9sSCW8",
  "key3": "2tKphWWjA9CTywPAT4Rnn1FTxyd7fiytmRJFU2opKTHiYszsqvJrG4o82fvoimnTuTtN1xhU8tcEcsH4BTywMV4P",
  "key4": "pcURHGshF7E5EjpJiUbVXMaVsNCGp8QEzRoEk2QXyYtjSKcFtJHQc3uf2rCP6X8JWJtPabaThS9v787Kco7bLPB",
  "key5": "4UEpqTv3WY4tqrg1S376a2XAnGnKxezVPZXEmqYHPt7Bxzy6RG45zFwhQWMgJ6iYgJDXeKnqHqafptmkTrC94yNs",
  "key6": "5Zt1NRRM1XGnrLucP8PpzWTxSBGBLMbU6jw3o4NSAn6ZtYv8Tc1mz1Zo1wRd69HbTzW2WkRkFrZ5LBS2dWnsgKhw",
  "key7": "4mqcLerwCjz3XT8RSf3Xghy5ShLy6wXEnYEQrCMjsgLq7YpGBciuBwCE3tycJftkRFrCKvp4NVDUNNJHJztpEPC2",
  "key8": "5HVE6mHUbH3SnZsdiC6Ame7zLbNwZaHiTGBXpLCequGuPNfpgg8QbcjxDgEz6nTnbjvGCwFnFkTGZMguY3mN48Lu",
  "key9": "4VWR8vc5DmqBKN4XJDVexZKXqyotipSSXji1tBjsiakN8aJkseuA7KgP9Es9edM1rY1bozHe2siQUhyAoLzjzrRt",
  "key10": "62ndHLbQ6pr8BGYDLqkup59aM6mTun7rfM5YUQEgRU57JRZrwfNZuVE3AuHRSdxNMgLWffDcRjfJc2fKWefBHZjG",
  "key11": "2fceVuz4LSzbRDuP4nb1ZArzv1SowoB5UPDKdSHy9tUWKxN7iqaSkPunpWpT2NPm4w9NeiGM9BMiwPrfUY1U4jmb",
  "key12": "64fWzgzMpSLmKt2dbi5Zz1NYqJSsjAM3Wcz5Zrevw37MCcDThtJN1R4pS8ymRLWAKnjy19Gm1eD94uRmpLvqNT6F",
  "key13": "1fe8fnVYg6UN5PnKGH8LQi5mNpkNgfLEUE323mxwkKUbXWJUWo7AkU4HXJH94ramCfDRRwrBP3Wq3PYBEpEGXyG",
  "key14": "3DCSHFgzPLPF8vx1bkorUSurS8WaUMAdbCvL85Bb7sy7c9ywpyPyyVLW3oyqB7dGGLoScV5muBKuZbCo5JePZVTK",
  "key15": "4rU2yR7Y1rNTMJmn8LL4Qf27bD5Rthx9LiK88H1pMY6bvuJbMHXJ2T4TJPnoZnkoiZo6MBMSQoVEgSm2RyYbkbCn",
  "key16": "2iPZTGyePiKNXXanMUMeekyAzDQmSYsfVcTgo97aXv234upfXyVTiPoVC35tuypJaGfrokHYNAW8oiNFmEdkBuhK",
  "key17": "QbkWDkMk3aQwK8FXAdhahYETKPcUfXRi5iodhtYekVHMxTQdT7r7q9m7KPxQj3VYj8zQRZnS1hALA4CjjsPwcdq",
  "key18": "5BfnXtrCtuLFnZAQHohZyPyYDWxeXdH4QjRRge2raZhqJskSdnqBRs6Gvc33Ug1cxA8fPD6WnKyNuKc8wPK8Z4Pp",
  "key19": "5JHkevzmdshdohiPR9tmXSryHAxmnQPnYS8iXN34JZRyufawhZnghQGRkxaip9q4AE56UDGGb5UmYWZChm9fLKvh",
  "key20": "4rWShLNGJJNXQTZScoasx6THhiGVgQ7hw2oa9TokMcjZ3frHwyEjsZAFvCiT9qbn8yakFGRFXg6nsWbp1DUcnAz4",
  "key21": "4wtuqc7CapHzJGYSSkTS3r9nmBbw4WHkYJJ2WCtjxgstNWjgfrcW1jPKSLZLAf2hMrkfd1UqVWfe1XYT7ARQ1nyD",
  "key22": "HaVmheEjGW4o8UJbM5uyQzk5sxJMiC1V96hK7ZnMEDdhHUr41XLcAbUA8xD9yAZ6UQxconFJDNPTELsLzVkHo8i",
  "key23": "4T5yG8nQ8J9jieXzhU51hBfKuBqKcXuvcE9k4oZKt2ofRynPqUdgLjAoAD8kUii8n2Rd4LwR4xzpRDgrddr8GXAS",
  "key24": "mLgstzmJpYiRkHUZJUJZ5VWmH4jooEYnfiYa6My4k4uA1A5LP2H1B6jEqf4EA7FVofmC2bYwX2qBfGUPWBX7k4V",
  "key25": "5PgeifBe8KNTXS6gaYyprRqZihQavdisUbTZvygKLXNJiz5bbvgLLxYKqYsW8VmQKwpDXE68jz4AXNRUYKSdBoXz",
  "key26": "3iEX72JLKRsXUHG6PGpZbRx4NVHsi1XQ2JYkQ32H6UvybTRrMLB2ZeMo1nyy2ESqDGDUbLaTngkdWxASmJjxqUhG",
  "key27": "52M7LLgHW4t5HiA9QFzGuFRQD3qeNcbtBsQK7wqRfh842wU8oX56RPxiPg1Hw2RwZiBQcRQ5DXSLHsHqnnE7jAx1",
  "key28": "4yH12tJk28FPEvqW5tfFEFjasKV2ya56Uw7oqFm51g4bndbMJRwcPt9PWyeuMK4kGaU7gj9fz136gVJ4pZEM3VVW",
  "key29": "5z3en3hxXU6q5bgZ5zLgCKKvV2jfyKtGp5Tt2ZY5UWFJk7bepr7Ewve7sdyCZS83d5xmn1QTEnxmDGgCpTH9zhwQ"
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
