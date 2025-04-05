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
    "2UA4N4Az5yo64BgTupcNLAWLyRAPRokX86tSszvCCoNYJNUEJoyyrxZMAQwizW5hsqXvuPsm68jMqucD3tWPisRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p8RA76igQrWMncBBkDMY4GENpt17HRt3jD4o1xm1AyfV6LFbsFnnucsTMfyUPGbtDb3kY7VUtkBbhGVMW6FSc3L",
  "key1": "L4gBNybpggtJYvxfocxvfq9vgqHfvf1BEpybjuLs8mi9VkPFyXPQbgMTKswg5vcV7i3SLKZCMTmMS7nUbgVcrBx",
  "key2": "4q9JjthbVvCuTCAh5o5WBVnCmmAWDCYhRL2VozaBXGYmzgkUcpgpEucbBrrTniq6qYNR8Lv6FndHdjMHcjVpnJSj",
  "key3": "n8MDS5mZnH4uy9GngNr9nhKnfWTBLpyfqgaeT5K95V8CsFp6C5PZkxZsp1XMQbFGMVXzvWsf62qKsK1ahHyg7Ht",
  "key4": "4mV6Ewy8pRiUbCpy3vCBpWHw9tQhhjYHPwyjWKyKeXGMBzw5D4X2sTnQpQd5YukUGDpUadHd5cShCrFvEN9aLv4c",
  "key5": "5mFUZLcKeeHdwusbaeKBfEAtRJH1mYSJpKmofkSeGyeXtZzyso7VB268M7Fr7Zie2Q6qQcr59v5tqoPUYmGmPhk5",
  "key6": "5KZMSGW5uJjaP5xcaCenhY9BDLUC4JvdRXXtpDQtiYkUvALvSv3krFyDuSbhqnG9XA8fz6QXwjuB6SkdsUywxfdY",
  "key7": "3kbKroWsYu9CdKNbj8tVwsfcUtr4pDgiXxucE3ii7YXmRfSDHTtxzHCD9y2BFQuoDY6JdCxHMZLfFBWDFLQjJXnZ",
  "key8": "1WXpjTHGx5Lrziy7B72ph85N2us11XXG9Kz8Rb7tsVjwVb72GiWJThdZJ2FdiD41WV9VAPdWLQceb7a48SLLp2w",
  "key9": "23FthVrNTL5rxcfxbK7VAMRsos9LaxW3BbRgj4JSWoMFnYWLFBahkcSXMtWvf7MjNDATWoq932n7dZ4YgkaGiYzv",
  "key10": "nf2mHBhhVgTrg2MzXiSzxa7purMXcVC9cVbYVqLjqNS7eq44AduiwoJ5QwLSCCU21LajpLBD8VCs8MZ94uGB6f7",
  "key11": "2g1sNnk4EKhCDiDiUmfCMGFXCFihZodNagRJmPeTfYZ5hogK3gMe4g2zqEHyjimh7a3Ht9ZrMQLRU6128snPdzQp",
  "key12": "rbkEo2iVML5w2d53wzHfHLYmfHXjXnJkP9AiYq6ecAZEknjeddcD5qEKCEskr5CJR4s9WJmcca1ZSj5LgjFLbBt",
  "key13": "4H6PE4E8MNHBtN8jyZofNnkhc4vrx4SMaygSz1NUMgsbqoTBDYp8HWJyARugBfcBvmwoeJ8wDpgMDnhUwHBTtuGp",
  "key14": "32S49YYfhNSVbPT8d2BkMcsckbwUZ8ikyyipALUEsSMLES2W8ZLhkdLHYqfnZ5hHenzr2MSxDEzFssJwhkFsByVs",
  "key15": "63p4XpJvReDn67dFBSe5PgDUmMpvuvbF5PbMi4yy31dUwxjxkNMqmczKcRdAnXeKKbabDs65CRcij2nz3xa2DJhf",
  "key16": "4EKmPUUQetanPAmtjsot6hUh318mV3CdJBwg88gSHZ28Zz5P9rXTi4SHw1MPPZmoT6hFqBSXUBRYiRxhwQQMwQ7z",
  "key17": "5m3SUUCEcpQqP79G7hDniLCGN1iEHszxo6ZzcJHuhzuzdNYuMNviVP2HNpjvGKSRpCZ9nsPp2EFP5RuSzsHAwWMt",
  "key18": "35i3geES5txMLq5gsVXABbWEWPs3kix2sqtdHibVaAr3dq5TP8ubedviZwXnciyTGEdgPUA8snj1KZ96NxjCkTKN",
  "key19": "3JEexgjSUgYuWwWhjdpUFGFB2PyiC6VRkyGv9uLtDjMXasvahoTZUVgKSw5pc5qnWGYmKEX7eJuDpu4fErqMVH9A",
  "key20": "5kZ2KyYrTo5hosYYB5uoEmCNZVBMmKQQNdAcSKsTZ77dSDqekDc82UKEkSBcBLL4ePZySKfPmrbYK2EkWzVs6ZzQ",
  "key21": "64R4zbcrGmU95hJZXAtPnY6Y2HAa2rwxByooufzKkrsxA9GzxVKv5qhJrxtA1iZcdLN5gGUU6qY5DxRuE5DXFVya",
  "key22": "3kiiJarErLDxeUJEXGyv9kHB3VkqYXqrSZ8TjUE2caPFJzbEVwtPjxHFhAVDsomrN29vbTKeR1wAiJQ3dkEPpwEG",
  "key23": "RT4ktYMt33LQfuFBfi2D1z7zwHnvyubhoocjkU7VzoMwjeJrEeYmPvVjVugsN4M4uSwtDFf3kysX28cqJ7Hobi5",
  "key24": "3VsUNVCvTNYz4xqcNrX3YzKNdCFRDNaLWNBrYgoYvsrPEVxiMn9hDD9QSvhm9183uc69qX3XhtqwtbArGANzgx5B",
  "key25": "5J3RngAYw3ZgBRREzyVSnVG9KhYveMdrqpf6KL6kEpBQkjaHgiyExL6wkHBib3ww9br5UqUm3WDTDrWRJAGMzRCw",
  "key26": "5bC9NPVrmVLURYWAADmrZBtWDxWEnVSx1FkodwTwwBtiUr5C1bBP38EDZE3o1ANoHCZKeFDhFEmLxqUMZqhchtAy",
  "key27": "4Jfh8LJxaAeeJutQin4muvRprfo6P6wxmDDaW8y4uUtTqPSaCLw4Ji6Hqh8SaAJ59EksxYb2DDa6WJtLmuGVWoZD",
  "key28": "1Tdz6aBTxJbQVwUAbSWjuBLdAcPJUaQnsbfM65hhETkL8dAtgUuLvUWMBBLhrfSaWaoaEtEkA414Zp2S29UfEeZ",
  "key29": "3gLLNqCB21KNRyTVJBJSRa4sTvJCPpnJSHBstKaAFUzshH3SzSyxSGRdHA6DY7yAPx2vhRGL2B9YhKokRsByDDRC",
  "key30": "33b5jKD5Y9oaHjYGVfjv62a3KdfvLgN7jWubiNBnmz2nP92f6SLLvuaWsJRaAdw2iz2WjzFzj8tAEsFZBghF82Hk",
  "key31": "5p2mnJRd7T5bkBB3GrNEx4NCsU2qmNUwrT2jcNspzZbA5cvHMJiRxAzswKp2XnxDLDrrTWdRBqRpuKo19rb2k5y3",
  "key32": "5SDh81QzRJn7bkV9wXpdrANcvtgcHcZg73TUuHW3BKbNj6h9VaUmoMtJ7MRVssEiVmXa62zT8UKVNz7FYyj6XAMt",
  "key33": "4F5pgiSAx1AFQaDahHZiteb6JbH52rzQWTmSNdkvQKB8nYojqV3DK97C8qhN9oZgmTRS6o5x4b2hUwQqoiHdVM3z",
  "key34": "4HawvaMmZc9woTykwwwhQNoxk2Q79ss6VsWqeTNqq1Zm3FMbwFGnji7oEFKY8KQnPDezRn2mAKTjcsmnwGcUtbaz",
  "key35": "44gz9vVXkNiVUztZGkJpptyG7VroyPHpKR55RoKdMgsByFuqHs4AMsXyDtNBtC5j7cY3p3TYUqvWd6WyZ6qdzoog",
  "key36": "4dFdp3GCZq5PPcvwxX4dih28bepZD4X2o6SBergnYwRTJHJhb3Ae7aGJKEo8vN9nhUuGZTmv54oh4jSjgp1VN6yx"
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
