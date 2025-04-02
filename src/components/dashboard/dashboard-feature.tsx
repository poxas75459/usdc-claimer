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
    "qXqChAN66xp9H56RU3rhUMGSh948tTLEnBAcZSn2ZwmhbY1SxTnBXTdBsDtV5bJGzLiifQ7v9Ae9XWjYjBSofbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJXghBUNXjwvdthC4uyFWc7BvM1CBThN2Y7S9K9e8x2Qz7c6eW1DBhdM72TJLfMjBDqRC2qLGLR3eb3EZ1Ztbft",
  "key1": "5a3LzbEykrh6d7ZcgHRXqsNxneYPT4WuqqJyBt35FBTy6HWTTSs9Atvb4JQxMhwnbHRaTMgMn1ZbCeXaynC4qoin",
  "key2": "5RmgPvkPW5NCCHVp8hnWgHw9x2W8Xtj5yznzhEQMGmnUjBuuLvDFhkzWihWGy6qWmzAZfua3Apj5Kp8AVZmhtQHW",
  "key3": "7Hd9c2Ed2oJ4N9qhvGRdDDjajwpzrA4J6uvpyWEdyyFrH52FjF7eFTog6Tt3eWScFTubcpeYP7RH8xrS8ocSqwM",
  "key4": "5JesTnUr5xcbRV11mLC7FbrBnZUdL8LaLUAeUGAxVbSJ2HUBMH6mtfsMi54zyjQremJp4YSAjqSLdEPL8N7cwjwn",
  "key5": "3ZHrkpJrSAy1bsbnZZyDRPVa3fDbYnCKLAgb3MLMYpTJLDM6dmJBPLrHyfeeG55xLHtsBDRLYT6ie8o8BE7kqgwz",
  "key6": "2eFHftiMf3UBT9a3aaG6AjhjPVi9LxmGXQdWkNEWXQwHTLZ53e9uxea1ToXPLxamSSJ11AxppUt2hRtrsq41HwnW",
  "key7": "4vCFNggHy8gaQoQa5LWnswweNnYChbejiW9YjY4mqt8qbFBJk6Ujg4pKY4BnyesS6Am4eKZqWLDUxiQDcNguEghi",
  "key8": "4B9TBoU3SK5sSz5Gd9RUjCmNGNKPJa4E5dPASEaWCa2AH3UTCVnNNBX9a5kEu6rwtWPZdrySoUbaF3RBLukG1mWg",
  "key9": "38VU5BqeSdM73qYxZsr6Qj7aH9498BS6VU7QTAETH5Qm8rQoTo5ts1ThAUR3xvcDEjPFuzT2Zdm7STbqxBudTBAd",
  "key10": "39rUgZGRk4KC2K1MSTPkNm3zyksheHask56HqVnZ83ns9CXcsH6iij8JqFX8MjgJ4ZC4rqBBSFRzMVHcsYKoZz1x",
  "key11": "2YkUJccdSpg7XMhQRY8y7pBhMxRF2GMmGaoZSPmvsH1ZXFR5wGQuQCJ4pJ6JTiytbYv2rWskVtGVsYoLJkaHGcAf",
  "key12": "5hukTJPxBbreDuM8SCJLRW4JZPr3bFBTpYAVsBv2FaoKojdUk447nX3tC83i4DWw4P67vpea1b2ahGipCfnRqLmS",
  "key13": "pfEwVNBnsXjRryHoPT5dYw88LeUHTs4uYUNmBrPZayNNoyDvvU5RnBy8ajHeZvFnKfSKcqhM3fhKRd5kfH3bjUM",
  "key14": "59cEGt5RZ3XZARWdnJNX6zotLAUEy92Yipb3TGFCtdzwRAFQUKsLvt3LgweqZCvHbj4YTtnqGLWev9yMmxs6LtMR",
  "key15": "4YnYSX3XP2jgFPnU2ChcxxQ3RiVXcH2Dh6bSEtyQG6CkuJoaeFDJ4SkaBJfhHRnC3miCM6oNMXpc5TR7wPETsLRz",
  "key16": "3QfSi6VF9FSpAw9A5sU7JmefqYBP8kPJcC3dKskTPcKc9ASUs3wDqjL6QPnbdX6AGs6hg9oB5e5KAjgWdBSmfSYN",
  "key17": "2UKKq1zj3iQePiwEViPACTEnW6baLG8QaCd7e7AcjetGe3dcNsmnyVpFKeyR9xjzDF2hddZKN1Tc8kbvCk7JkYxf",
  "key18": "4FmXJbMTQqrr9Tg8xxJBgmykAfzZcZWSsNE6wEU947AXvCpdsV1K2sZKzpnNbVA9wWWzC6ouAzRAtYTh6GNb5iu3",
  "key19": "5tP5MYXwNRFigEabfuCoTWpyLEiFXF3A6Dehs6RQpViP2J78ZZFvyhLuNXTBwz3hjGWH6WhUagE1wGzuVkcwD1jf",
  "key20": "2Z7PvWSXMXLEkF3fd4aGYayi2BNPea2Ugd9A6Jmg5UAvw6ohEfXjdrSE5AsCMgKDkEXojaZZKuN2nQkXp5fbLvum",
  "key21": "cyYamHu5NS3P9Pt1SAhwK8oByrvpLSjYY8NbFMUMm5x6NUBkq74SH6MuB7dACUAHSZsmYPWSU33idsNmuXkVWgp",
  "key22": "3do3ghgxmJQWVVieSF45wqURhj654CWUcur7LAAm7CSpBefQjqjxpQA76sneyVjQbJYTgyshZfbL9PrDWkPnKtrh",
  "key23": "5bw5UVS89HFgv8h2YCosGGJ7Sf9Ha9YyKHsBMswgqRuP2tjbycStAwwJskhLqmdn3jhovNyFz8LbSpU2kDsqTsoS",
  "key24": "5K62i7J5AdN1RJBmWjp6aCS34878k2716T243nj4bqoQbrPeKSHUEBrrEdmoFkzQeoUyjx8AtHb7YRrtrNqx4AvY",
  "key25": "9umKHfhFS2sSPv7j2WhwgxbtgV2XTMumDKZsmsV7FbpbgWDV3EvtwFhJUvEtqPqKxAv83HcecqYMxV7xUe6FNdS",
  "key26": "45RPKcpd9Bf692HFtVrekp5KFZ6Pen7VdzhwVwnRwqbXFcnDMK9AkyrJHjPN68SFzgNt2z9FX3oNgdKeTKStqtwQ"
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
