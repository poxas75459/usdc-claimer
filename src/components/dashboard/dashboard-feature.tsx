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
    "2SJfJSWgJR7Xq4V5zD5FUHLf2jgXGK4wyKLUNfH7yhDwmWZ5yrvoY3qwskvf6XvvaYbrNWw1trCZRBrfSaYvxfL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBaZq21GE3RsjdaXSS6eTpLDxEw2Si1rUmJvpFQ9LAyYhrKGAAtK2jR73BNus3mR8SByZ62iwuWzYtgLGkv43LK",
  "key1": "2riCMgQohDC5WEA6tLQSxXTKRJocYntija9eCNXJ8zdT7FwpeQLN6W5F4rYnfYqXf5C2br6ZWeVPbLSiKpWy6u9i",
  "key2": "5VQi6CSpnHCJLA9uhbQwCHAYvMPsJDH6QXGDd9f2k35Zvmd2VnFHWHC1CqhjAtThkA2z8raXLAgc82obUxsb5yYb",
  "key3": "5AQsoFiVVKYmH7Fp89nQMT44nDJKCr7MifSF7xKy7Xsc3DauXAcHeZKmgPQr7SquF5gxz2WzqaaLBTBZa8LnaUJU",
  "key4": "xwrDs9moPULi6Yeb1YWm7rt5VfggMa7AHwYRJSiDJZiD5cwNaNfAYiWmdRbi63SAXx631VhS6GHWMkTdJHJkRaS",
  "key5": "5MKAKhbJU7Adrz5xtqcgBdMj9QuNg1R35AWwRbmm8KCwGCRWTWjNN4avP35aP6JqXrGkhxAiZgwXrmhSDNrEPvqv",
  "key6": "5FzXssFS4gW5VzeDE8MdCNKpLPP6LhMmpWqoh2USsbVi1SQnNSEDHEZu4uiZQQXn33tRsjVuWvfCdjTgeGBkEPzC",
  "key7": "33LTiyhCEJkEsB3K8Ld9KzoYZg7pDRaHtEvZ9NoELTutjPwVcNz4582oHoUQ1E6ZLnhWFz2Ekb3qfoz5bNAWBaB9",
  "key8": "2UwdkSKLAVWcHHJffuVoURVr7iDHadwg7bKgYfQRwCYJJ8qofk8ec1jKKrDm9pHxBjiCd4jkCHff8HYRHTH8X46j",
  "key9": "4mSqYco9h1kE62nJvjkyP3ejNpD4B8F253ic9DaUL6tRQreaZwZ1zNU1ESz4BwsHTt4eefQX526rge85h6SuFjUb",
  "key10": "4URfGuHYooyAS6pUhjHHGeJLphQi5LywFjCqErCPyxm5pztqhcTX5f3BG6Kmjta6aWMTeGz8ce3tSeDD3fMtS2gy",
  "key11": "3V7q8sDFejxF97ycnA2ytADNNPJUYgfJ16SNSkxmW55x3QLHHvn6WKfvwNGBvuSoQ9rxy5sD3fdZSdzb3pTSY8qz",
  "key12": "4GbHJu7U85G4Nhvfw62ymUR651nYy7RK7ysGAq1sgHhKgQTRNvGhR2bgafqDCHFNztMSdhXNGtXoYSgVj1JN851C",
  "key13": "2wcwE3yavZaD5Rh6ihcXvQGgf2CZadFpoXekoVTFD7PaCEitfMNCRideonUYSxHZd3zB6Kwe3jvB7RbqJ5e1aiQU",
  "key14": "5srpRTHHquspW2yKUag3xLgQpGEkbsb6pqBoDADfassqmxVeaXgPBMC4JExv9KZtXUnsjmXK49pXk5nofQKjvziJ",
  "key15": "3rbR9MH1j2Y7pB8BApWzrcqdH6ajSM9ygog8kquPA88QjDR3XMF2B7HACumHvHYG3FMP5JyLnXehVxneB6gvFks5",
  "key16": "3JnEmsHSF3s1uFz47ydc4n16BJpp1kFiceeCDymm1mQ54rtawU4emaB2ZYRg6QdAb1KUs2xyBwiELD21aMMFJe23",
  "key17": "3BwcTxc4ZjoJ9SYWq2TJ3kcdp27Q2RMoS7QoHbo89nEmoNDWBpE1wPuxU1TbG4af4HL8aQFUREX5dSKz85wqUGvt",
  "key18": "5VZaoKo2ZT5cntcryJqDroboiir3JUGwTtQ33o3VthJKX7joivaY7YLJLJEU9SyW3dz4RgGMGZE9PeG235SfmL7v",
  "key19": "4E1Q24APxGuBtt4Mbhbr3RNV7om2VYPPQawwJYxtCMaZk8DYbCeF7e7qNimu9CGaA1doWyn9eBjWMrcu659nUvoy",
  "key20": "4L72mYH2P3CPdP7tKry6Hruxke3giVkWN5VuD9rXj2EBNsPPbfpH47yZyC9Q34ivdFWmA3yDZ6wqFbF2Nu3ox7TJ",
  "key21": "5jVBwTwxsUWGXNfgsarXzC81mpWoRSD9JTWfeZAyjtdt848bQ2RtPhC66p9SMrM4ZXWM5qj1ERtDyNZEDtdWapN6",
  "key22": "AfxBgoYx8Sn3r8sfGK4Uvx29rDf1H5dBGwvPd9TD8TssT959W5PzjjFo5y8EVfc8raAVtjD9pCPqowdMjH1kfLV",
  "key23": "3EMU3iKpc6GSnywCJXo9qmbRNfDnfSJtQEPJvkrrScMiBjq7RLpe6wDhEse1zHMa6btjq8EyzmJCYdewF74ozvwk",
  "key24": "3oVxzJcG6DH1sHhYWZeEkhtNwRCDQMhM54qWCxSvzf3p5TRAXeMKoFiQzeJjLiy8kbGpMWARrtiXt31Nipews4BM",
  "key25": "3Ubxwk2RAU4SQL6q4XhYBnn1WHMbPYDL76G1q3jxKQRArVXfAJAGSWyf8Jzz4kCDPUrCFtwTQgLd6Bj6Cdrim9Wx"
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
