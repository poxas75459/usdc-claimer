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
    "4jFKZbNHuKzv1aKZc75TiP4n6yvfjqJesGQMGNpvAFGezMuw8W8VB2E1Jwrm278VL24sMB5WdtQ4ge3JZtGjmBbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGBz8EDLknxiEc5G7uvf5uDcAS138pWmTfNvEQFpTEQFcCRsbMkTycDKKb9VFLbYcKu7tfMGvYU6YXCU4xhCL7Q",
  "key1": "2pgWdgcZm9DC436RhujiE4XnFccgk9mSdv1bh9tDekwjFHwuqbyMH7PzaWYLivyirNnd9ngZRtfCyHeNccFBSuMa",
  "key2": "4Ko2hnDE2gZkAjVgBbAwwKfztoSiLupc9gHaes9GKAkJTk4ywTytFN8NpT8JJY3tthQW9ZAP8cAcrAdiuoSd1J21",
  "key3": "4zFYrHBzCNQrhzJJ13QLKGECcLwpbivB1S1wM4ZAHtkvsX4qRent2oqQ3RvZmM6Xvk6scNiP32iycaeQzf7mmU5x",
  "key4": "3WBNxaFpD5PjXfnJ96s78k2gUkjuta3BRvz4M7eNhthJXXoNUEy3FYgHu1KK2Y87TmWRqiwGbS8884S4S9UYTBWr",
  "key5": "3mb2pbAdo6MpFd7hM1WP91YjPc8wr8JHPeH1EidnQEzqPox2VvQ5DWvNP4uZNTa6V2JMb7nVYwaFw6YiDHm1j93p",
  "key6": "3hfA3LYRcjS9aF54nuazgxMzMcnc2MCtQvLZueDHP9FgLKRnWc8xeX1sDqKBGviBK5v5RwahSuRZ7D2e37h5ViiC",
  "key7": "34do3mfKVjhovxXyEpwgFPCbytZTpjGfFJHP7Ag2YPCiw7FQbgESnem5WKbid8bFZ9yjsfzJHkzUVuXuZC7X7nCc",
  "key8": "2Kso6FLYEd147ra28o4NAWiS3Vr8q6WBcHfJiXvBfSzct2uVJyMBTAviLEYaQ6HCngfTQudUHJUHprrENPpxP6ey",
  "key9": "3AufZZdgzqi2dq9Pqogd1ytScC3nADPo4u8oFqbyLJV5WLqyPrarvUUHXmXTz3aMKymEgMJhorBevRY4UZJzJyj7",
  "key10": "3Da6BazEqVtCbmL7oQcBee8aH8WYaPwCdqZ3ffGycoSMh3YEzVut2aJBxxLG9QCXBocr6XxhRB53YEP34V1wD7Ex",
  "key11": "4fH7afVt3EZWGwWpMUN9AMX4GUmSxP85w18rovaUyeHYD1eVkeRWBpgLRQ4ynsbYZcNGHezMyqt6H9Y1GjmiwfAV",
  "key12": "2LY2891ScXhemp7Fw1DWvGQvigx8bN34YLiUDfJhjJU11F33SQKPP9n3fiGyeLZhBgMMAKuzQzjWuCvEqTF3Fiox",
  "key13": "5dczPHLpMYoRT5NfmPQUrW5T6VnEQQEdPBZqLW6q3TBGZqjw8aJ6G7Twz31yJskrLK8eNnChLg1YD1MLjWUyvnpq",
  "key14": "5bC4G7QkPgHLF6mCVkRbKKfz2c6wHXLdfLGzjeUZ7ac5NinEZjL3ZrEEiobQA3542u9yLH2EHLgPCXLoAEZaKncX",
  "key15": "KB2f6KAhbQv8wTmpARnauhVPn3AmoXNwxkoDN7dc4MCipMYJWcSSwrAfwxE32A9V1ntqhcKVprbiUFunGhN3a45",
  "key16": "xACgLphkS3Q3yXqAt9LkDLAs2ekwKenwGaHxsuJMpMBKrKg9Tof5w3BYQMah6xBsKgEpiBRbQw3E3onMkEtVEVf",
  "key17": "2Lopv8mhQRf3BZegnCTJafQTUQMBdAfbxttgc89kQBce3uhYjWdZqBgEN11FnckLkv9EVoipNd8iL1jFWVW34pL3",
  "key18": "4hcuRXn7jxaUkxj52dXhKnz6ZcqfTJZBdJu5e1eULzquPz9c66K4VrccJXWMyppsnVJpmt1M2uJU3XJZjcvXDucc",
  "key19": "zRgezCdNKoeFbN6uzbojKUTKWErJvWdn6RX5SQUcN27vp3EWR11uKpbM5rzC6xLF6MBN7WecMEuenfxc1tub86F",
  "key20": "3Eq6TPaKgeTA7gVRATdGT9tpy1xo8wgwRHiScxjMUEf6TAb8vJHk42DUGEUX1P2eY9nZ1BGXjPLA8i1QZ5kjKS92",
  "key21": "2t84W9LBDDz9qP6vh2WLofCrNaFvvZVXk8ryH1TPKuJu6mszx4GdxvRcUvyq5u1gZ1ZfmuGyDapQMvBXXZhnZezK",
  "key22": "hcfoNdPkKCtZaMtyHNFbseM4VVBEouxutTa2EEBH2vLZbAbrDPNrMnPn3yNdNyqLfLEsAEnjfb1xbZBRLen2JtJ",
  "key23": "4BNZgK2nKzU8Gsm2QdvkVjYaxEhGEbN2EGj2Hgr61bZBh5vkKkBAZeBWcyzSsXYqfxc698CLRsTsCptzSCMkDzaQ",
  "key24": "4twfdHgbMeHSQ7Vi6ZDDWYXxkGaVBZ3xJDinVUbH32hYaN97o16dxmdAHo2DXW3nYiKfyRq3pf6zcNLuBbSG1wye",
  "key25": "2aSaqX9LeAxzxY1PA19ade8pLeBzWiPLz6a3CqsLrkRvGBWhMn2vCiLiaG6kionfnuCF5py9QUKELiJ4vTFbv1Fy",
  "key26": "MDk4WkWdKd6LsHGzEJXhw8xUn2YLLpTPieMwWBBzP6J6fztGQ6igfXUEeNeap6KrhxfWzD3oUM54AHbDbymULJu",
  "key27": "2KfypehV3f96t5nUSpkLUqLaga5iotmvM95WbXifzKvM2agA4KHa9UC17kVqd43qJAWgSM1Cxe526wZdG4RbmVKr",
  "key28": "2XfjC4kzmnxqmAmAbGUe1tE2tXwdkVZMrKJNV7S47CMfYNHbnaEYmMCczXEcuHYLftM1mzdtfcmwKt9TvgQA4YoY",
  "key29": "2UnABFSMpFqybL8qiSzyYZ1TMWJEo9MjwMndeVShGPrcUkqM4h8CTK5Zy8qMjDNj9xkZK1kJQPw5HVXoKxUbx7pS",
  "key30": "35kqssRZTY1WSAho6vJu8YP1K2m5cPYfJrrZ87N8QWnqZUsJW7PqJE6uVQndYGVQGsnV34XPP1V2yLUC1uxcAkvL",
  "key31": "4L7JqksyGFruuqV5cRxeJB4x2SxTEENF7SHtgq6v2pzMvCMbj3RPovZw2viDoRzh7bL3zahMtc4DgdTqokncm5HY",
  "key32": "3VVLbHVQZoyTezrcvJxiX534CE1y8PRXNMq4X1La5qLMizhsmR3Gjg75ogjDpr2rRTthz46bdWBGSGV3ZBh1zGbq",
  "key33": "2KYHXBzcPyMXVi198z7SCCiCoD4j3aSceXWVoExZgS2GVeYJwtiboyYKieHcTyLZfDKoXsxrdeE1rGqmaJKkxAvb",
  "key34": "2Eo8FFwyu1sw7vPToSgd5xtVVvXyR4Qw18wAHyjxTqUEBKzq4JaNTSLdCrCpQ1ANuAXLEujBRYzHiPqqsa3CGgiu",
  "key35": "5QS7wVGbzMVQS6SejZo2eioLUiYE52uRiByppVFUiKuM3HBxpuy586DwegVDhrKL7rGxPTNiC3Lt5HGA29CszxqU",
  "key36": "5KZeMzkmsSkNLTeMDBALLHu8L3qdu1Bj4uEXhQVtxqgg4a1AM2FCCpyPh2qabd26bprmj1KTZ5LcZuZZvyZmAvgq",
  "key37": "ent3A2AsHmoAxf6ymuokP6Ryqvgx93pq53AmBrMzG4hCk9LoAqm4C94jiJrmhx83Pcr9mcYzhoA54CBNMpUen7g",
  "key38": "5Cb7igvc1V9ipzPvz7W8ECpyRRxKfXGw1hH5FBsqZYLTNKwcT8qtzLD9np9fChQdNjo3p1EHAs6U2TWfeRkoTXZA",
  "key39": "i8TgqZRztsZw1ashWDnsUwvx4RbtVmXL6dyTrk1PPwWtrNkR8sUm4RXtykURtxZBwVvk6Q84BrutXo8pJbQgwaE",
  "key40": "3HwnP6ZPvcNA2kbn1RfG7W7CgTsn9weXZ9Gr2Ybr2S4A2R1UgQXueaCcVevsMuYa7JxFNLNS2wRWfqA9Cp8MY34C",
  "key41": "3KnGygZUK5fR3wgAVEX9DPvN4ddeRwzHK2QEYWZAXZiRzQbebeyGiVWKJc1RjBn727DHYMz3mzbVqYS9PdbeRDZt",
  "key42": "4sHTML61zjna1zKGNJGUPtWtRmJhptapg3NoUGCTmEGV42XNswh5DrinXt7L2yvKiEKFQQN97vBXVLGwYaJ7aRvv"
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
