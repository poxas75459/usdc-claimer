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
    "REfYBWjpCJqL1KTt3swDbJj3J5ptejzSfkAzqfLZEud2fTbr5VyAy3Fwq2wVPwt4LwPNxuHhGzsefX9WL8fgLnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48W9fMcioVDEFfK2g9QbWXgL1qNiXvViGq2WQ9bTSbejKJrXjmmvGWRtaUnsMcrL5XZ4qcFohAfNFKTgJwRxj6SH",
  "key1": "3Zj8Ec2o9dAcgYJsrvFcSMoGdwRsLczvzY9jUyd4xdSWypF57yyLKRWU7pSxzusvadSfxbeGnnfxb7mFhcL9uLjg",
  "key2": "qUwswVWDQAchUscFdCqdz4LMwzaMKvsVNzEDv4N9jjZVZvjd2kcaGGWvbYBy1EcnS1h515yD6nprABzPisNL3dq",
  "key3": "2ze93SW52dEa7oNDje1wMyvBFb1oMDTtvp7veD6ngysyjDjtBqsfU783pRCWoBTAfgG6PvrjHKD1RA3sBTcHY8F7",
  "key4": "5B6J4nZat2THRBgyYskhTNQKi44a4am2qCx4HKYsoP3gazhK58mwgWdfFzPUpYeqE3hJUdcwkwM3SGBFHp3SxtXP",
  "key5": "3SqKdKyNdQYGNubuNTMVrFy4imQNTYhs44EHTVhtHUbnYAm8cdTDHHo65pSdgJ9jkZBCzWPLH3E3jaQdUd5UDXiF",
  "key6": "4zNVRNoqLTfRiRwHWEpb5KH8tBgByGYktpZYVASELPzSgs39EpUTr69Xtg65RoVJQkRdDeZgBSQHcdfaDBrqSq4y",
  "key7": "tmnRR1TxXFaMrCyGeKjA4jBAZswmipnu3vixBVErE7XvLURysMKcsaqjrvh7jgHcp142X3qAkjdbbgvnF6x1xXX",
  "key8": "LcBJJ5ksdKZGC7UEPQSmNKFSbwWZ8rNtath7YL5EtcDLNKgnq5PtKU2YPTZYXKfnxW5vve1NhrjXK9HMR8tEB45",
  "key9": "xrqkjGj3HDbRGD64poqVQnbW1DeWB8fFsUGLmbxjb1GHS3C2qQQzyPgiStKeHyUvAkDc8hGfJWwe4mAmyg8sTXc",
  "key10": "67g4RGBZJDBM2jWvkav5FBX6s7DsFSpyjcXT56juoL41ZaVAZ6BwSW9hiZ8M8ZcBSCHnfc3xDseGMBDYWEus8Tcj",
  "key11": "3NnvuXZ1eUExyK4pVznn5Pc4tCytcqpXWxUEhs4JokmYpP2Y7KMb9GczyvJqgs6EX5uyxUfFBYxE8QVKXz6C7e35",
  "key12": "3pJLD1ZbW5pnJU5fCV2gQmBQMbQQHZXRo7YoUsEjq7E5ER5kBrX7YeLJUiGKpdyVSRyXD5Lv2Un3YAJHyhr8usEc",
  "key13": "RyRD5QexWnnLsUrnoK4TY6iiLn9bSmq4mQ3DeLs2xUxCZRWny5dcqUgwVSm4Ay1QWM87aUNhz7gaqxczhEavJGD",
  "key14": "4W7nCy7GcQ4vdehDKg6USxuifyMP1mx2ztPEcy3Jia4MYhxNS4d9PU3v8pQUP3YmSmyjpMuLiZNoiw6tr5q5WK33",
  "key15": "58aNfHh72fuumsiPANtCu5jJrpnrckCaM9Zy6NtmnPeUoo3kJuCwFc9EHbc4JVTUGugXeDS2FCGxTS2ig5rtHbFo",
  "key16": "3JL1qy6CAoxYDNRZQupWbboNAyRDZC8DRZ3i64jQj3AAifvkYch4dd6TYPqzReSH16VtKvbpvFrKJsnXeMSEWkoy",
  "key17": "4su7LY2NPuw21LajDXYxDNFcd93np8QrT69P2CoayKELeypRx7Semx3TX6dz9ntJGGbme6DMGVBkEoycUoR9kSSh",
  "key18": "49fwKfoktfdqLARAN5WgkF2utoLcxBFcaQroKELsAR7tJTDygW2gRwX2wnfmbhMgHAiHsqtAXUqdBJm84RpZLoNj",
  "key19": "fAhAwsxPsnE8iB2M2eTdk6Gjt8yQoj74wvvUygeLipr4VJ79cGp5fokbVs6wHbnt6frfwAXKCpXy8do9XyVQTrA",
  "key20": "2iHVocTTcdG1VjWtfSS7XpJf5Zt3Dfeg1nDqMDbDNccQQo5nM1LLFpsAmyRou7YsJarESCvgGDZ4Q7DHuNXF9T7h",
  "key21": "33EJwUEbf62pY1uoGWx1odCKbey5jUG4DpHb8LZjZNWPcPca6YvbTKrWm5QVyL3eY9xHHGcsMJHoYzA7meJnAjDj",
  "key22": "24ugt1KpUNRPbFfUVpM32UXj8AvdBtNzpSP2BmVFK4Y3GVbXiqNKdKXT2nqyzcYW3sEuEkdxGudMtdByjng9AbSw",
  "key23": "2RUebiiD9dRiRT3gYADqeYREPvcHSUWeYyP9KEdcjxKSbiwXygPy4hH9HR8XFNVQyv2EyHStAFYPjSj3GSRYstUV",
  "key24": "5FMAV89vVJJkWXYV3HuuKR5xgcSHdUjQVdgbS2ERhyChQPGkR5t7pK6EdZygci6SxNVpuffxLyJ6WKQRTGyAYBjU",
  "key25": "B5aKdefx89fYXykP9bCrMzWL5oYnX9SqQ6ZZ9om3V8yEhSuT8dHByYrXGqNAzMXWfXiSQFAyDnrpFnu8k21PEdT",
  "key26": "h8QrTwrPv4KhnAYKYaqntk6KMeuPnRAJqTr222uaPCs2rJDx8uRcBvpEL3ckn5BGG2KteBYkNYHXFeoG12E6vcr",
  "key27": "7bH9ebgUZigxfDJHpY4UPhWCTDYptYsempHsxAqXSNTXCznei3PDoRKQe5RrAytaZTbyT9v9voe6crRWpf4DZ8U",
  "key28": "4fCFywTwKwKauxeE7JLFzXUxUmQA4SeRuSux1hsf8NsKy3qiyFXapDRvakWMbba6rCcyQpGuPEfNWR7DuEj8op5s",
  "key29": "3k17p8ReyPJ49mqzsZJBvtZfjq1rTLf5bNo96GupWZJPUeYA6oToSEKrbLnRraFgWAqEv3GFzrWRPrf89tU3E3ZS",
  "key30": "2wR17Ys5HgBmw2ft72GZAkQG6JjKvvCvMAndZTaf5tWZaeMri9dtQH8jHpfTHG39bNXvQDWFksbBEwoZw5CHa3QW",
  "key31": "2uRddtpxUW6Qzuqv6qgYcnDZ66mEuG1gYGGcHUfgVQLFmMJYeTtwaNFuDqmuRAMVrQdUjHWSBXofrVwkw63xsobf",
  "key32": "3nBCGjYhofjrffq6dRZaAp9WXTAxpJzLD5vJxiMVx4mmuuPf3pi9uxg7tJpc1BcnchU5CxENXbE4jYQxumaSZih9",
  "key33": "4xtacQh2iRtXPWbkz9PdS7QC8hjBMWUYsQCfffggaHGTRVWhp3gejbe729km4abYBawsSttGDZURcf98aU9dX82x",
  "key34": "3sAeGmWT5YbNENACUtZPFQbBW5WCNTUcxPRnAvkGUo1sssSmWukR1FXVNGVdKtn9BoEszCwE5uXuPkhvvSg6WuJ5",
  "key35": "3HpCrS9HANgVaFwH5i8WUsZWdH5Y1PYXKkceAfzebCaUbBrYX66riv2mf8dyebDN9t1dfwu22WMncCTbBGwnE3oX",
  "key36": "1AV8rBrw1YiMi2HpJCa1Jr8mVcV7yryAN27XkgrQcDKPYscussTWyNjzupsqzkfx87Pd5enJc87QXKdLcDwVcSM",
  "key37": "ZMEr7SXpik1qiGuK4Pwa4PuKBEdqmeShG9nEgSp7rLJrtDAGfV1joUQ9WseXGAZQmN1jnMJ5GVW9DmAqHbq418q",
  "key38": "2SkujHa6t3wMdBP3yFnWQpNB6qgphd5zEu6dqX2hyGwdm3GTk1M8Gpbv4it9gN1tpapqdkZrEwJ3jopsaJtt8mLC",
  "key39": "yw6qPNV1jozKYYfZQZg2ff3hBBJrom4YQcpYkMYvpSoYvNaXZpVNxSZW3Bi4qpqKLfjW1pPGKU35nETGAdhS6EE"
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
