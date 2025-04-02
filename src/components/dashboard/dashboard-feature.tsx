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
    "5hwteJe6oJJCtcDRJUaC7nnDPk54KZx92CGxF9YYkesF1ZHsYD3vKSz6P9uHqtzNyXsCF4fGawcGTqfa3t36MgFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kogBmJpiXV4PiUV24cEP1Juxpe4kcBc7EVbcjsKwGfJN7dxBV83LwNm1opppmmnici6fbBy8FS1H7EopwjfFQbJ",
  "key1": "4iUofdBSKF7We2fJbkhcJdNmivh9HGUrfLV6b7UEtJJ6Gt2GVPW2uSwB6KQfmCYd5xESqBdtywin2bGcci3SudHZ",
  "key2": "52gzRw4kykSfUaU3B4SsGkorLByJXrMuC5q9TZ9ToEmnBEM4TdhctZjkUvq16uBXGrPNwc6uoQp7VJ1iNoY5PkFR",
  "key3": "4ArnxwGbTzsySrJmZex2HG9Vct8AGPQpA69yfzSFQqT6UUsdBNLRji9RXHKkqG9WwxbhNgKQZKjFy9g9w6wceCq3",
  "key4": "5c1LZvsECww2tXHZWjzFRhVBE7Q5g3RTxFheDH9SU3Eb9cufH9frE52A9EL3tJDyt7LJ4H7U5TnYRgmzWLBnMudM",
  "key5": "duaCoZHsDvmNAVB6cKWYUrsYoWmNrYQ1dfGHM8kGenUjGCqzFNztmTMz6MAqE26qwQcB2tDiTuntt5EQEsTA3Jc",
  "key6": "5qeTz5YxXApmn58op1DF5iM7v1SPLDZg6bHRQEf68bwBXSimztuTYnWaKnDKJGmeVLM9hCg1PvaahTgb2unSdMsq",
  "key7": "2zPLs3hmwGAd9p6MpF4N3Wyi9RWATkr4J9NAqRJXTRmyPRMddDcs76V9HEmfkYor8hrroFVgk4VKvjbjZG7hnvHh",
  "key8": "3M27RY4jtpNtfq1EzMvFNstftYUyXdCUu3cAXNt1mbUSGrS1actQwtEa9DJGWh3qJFLQMDLmFCnJ9FuGSN5gABy3",
  "key9": "2aWLAasftYtSrRQtRRzPDqfhmugLsWh6TVZaGFztYHdLybhPKJ16m2AT9HgoGshza2P2a8VQwivNCpSUmWgPFnwo",
  "key10": "4f5QTLbEoewePgrBVa2a2nGjXBGFfG9yxPmUYxn7BZfuZoeQhha2bMsmyhzwixs9aP5L6pBnm3XGxRe3qctKrytE",
  "key11": "59HL9jZam5BJzv5tYW6V4NFHou1aEjWC5PQzUh6FADpQSWStnuqBCb785DBvpqGAFNqAZFPhBz6MvFZkjFe9ce1a",
  "key12": "44dbnyBYDbSE94RWcsZUNrjp2kSLovHQRs1yJVmhWPkRNjXQrZ3zFuzEJvhSvyKfCeVex2sW1c1caD5aBKsALA16",
  "key13": "3M8aoCcShSdb7wgEPjpiLx37kNUC1B8cEebPVek5zKvxKPund3RPuka12Dy8cMg84b1cRaa97v1RbYoXoSqhaRnN",
  "key14": "5PCCFeL89oHin9XxJxnBD6L3YLTzuyCtgeBzApbodzKvm5xeiCiBxKuywegr1s8jTXdboJYFMJLWhRuftfSzcwe1",
  "key15": "3T9Rt86iySAPiQHp7QNHLjdjdvtmTrv8gHM9dxiev5JqX1WUnzRgF2JhGUWvt2Ftt6j9SWCgMQptfkWqE5VErvRo",
  "key16": "5h3jtQfocmDsmoJgCfQyodkwrHbafMvxNdDbWsUnyg3YidABaHt8VUnwHt36LF2WTuBAsZPgnhvMYtWZ4iMHmSe9",
  "key17": "5F112BUHPK3W6tWdH6dAq9vJuk9X5bM3coFjdjdknfQxi22jGJ8WU1Skh7i3kYPu6WKbzrHZk8zNcg9tHz3K1742",
  "key18": "5NJiNbbemXnBRhQnn3TXrN1iUtpN79EiagkgZ4JKZkJZErqk1Fw4uVv7dUK7BZdcYKucyZBFevJeZ3QnN5HgYw4q",
  "key19": "5Ga5QfDBH5B9fx326S9KYHHpRfgwZstVD29kVm4ykrz2hgR9cszaXHUADiFd437uzjAocUCDXVypcGhDfvraDoBA",
  "key20": "2KdoDHXf8QLLSrBicMsguKtz944ArhF5Mv9WcpSUzjpz2Qm7HF8oXZYMpukiz5FBDnAUyGXhKJf7Lyp68kHiopXd",
  "key21": "35BHwiaXf1n2XvzDEpkctQ3Ppt9XCTRWdGocRRmKYfLCSbfQ3PCd5KkS2rqD9sNM4rovy7wZV1eLetMXCws5kk6t",
  "key22": "5NFsZQgmKoKz843Sj8zMf3YJxvp3SokcvLojYzkDrkuV8xkURDxXJ3Dhh2cLe4DAJQdkfMmAN6L9ffGFWj5pMxgs",
  "key23": "3uZeKG8Phx1xQEpJ8GuxtYjNkyUPBJVUG59EsXmkGsHf2RZoHGWQG5D8A1QBnz5iJdjfavmvFmjdfWbDPEAa1FoJ",
  "key24": "3e3TUm18EqRfN7LGpFythF3iVTLum7GT9UJKUho4poC8iNEQxuz3K4ciKXH8cS3QQHhuBUNFHBbxfAP6JJ6AuGne",
  "key25": "358cyBpkHjxe9FRgbcyfRci1Bs5cZHesYqjeELYy9hdv7XFGdeodmHZWfG5DaRP6D5VnGcfuL3DrXkUMYg9W7CCL",
  "key26": "5WTKtsAp264AN6jy1EtDpmzXvLAqtR2t9VvSsc8vGVzbx5E5jw3p7Fn3wZnFJvKEDtHbyimBoUZSq4SeMr4xTW3g",
  "key27": "4wtAYCyDDwxQP2UvKTyZyUFRFRpxu6hTmEx5RP2j1gZ4rHBpXtSV7pkSEd5DZqy1BvP2pV8BWkCcgEyhDVF5BwhU",
  "key28": "2YU4wcwGjzazbBYhivjWxMPcAXex1jWMXvVaZpECXhb694twQLiYvqsvu4LY55mHoynguiAKVycB2cH7SJinYBKo",
  "key29": "3SRofzrULHcf3FsUKyouK1uL5FjFHkXY761kyimXUtk25hE14raxb2pugaq9kfgj1bya8MfM7zoC4siTYxQLzg6G",
  "key30": "RsdTgoq9tdjFcwPpg34DAEDczmRUHnjiy6e8mFU4wBrPeG9Rqcut8o56TjFGwimnYDDQXdguKFKeZYxwjpAbwSJ",
  "key31": "Zg8FMhFSfZF3MMbwJn3eaa7DXu4dfcF3rAnWd3jeEqdvdkHyE95MqDyKrndJsmaFTXDVwdFh9GYom9zdXPqjCgS",
  "key32": "2s67dGwVzMmsJ3BXDv3qXH8fm4gStKaq2ihCkdxHW9EXsftu6BhyHsHui6Dh39yTcgQzjifsq7VJ9NxA2Eju56H7",
  "key33": "25QdCeCRQ7M4rvXmXVAQVy4nCFBMXodiqg9j1ucgDkNzrtSh6qYot96hKCjjDgRZKuiAApqhHE9HrGnWYzCyDiRz",
  "key34": "4EP9X3RJSHBfJKBe8yEYTM5XHvXjNyGM1RP7Gto6Pg5VdxJUWY8XTec2pcMuxGP9HazffL3cLYxRXeSpspjLj28u",
  "key35": "2Tj5mBPjpFJaTdGWPNo36YPhfEP5KsLYMwgfxjNJPTq8iFBHS1TV9z4M8bSUbjHq62DoASMRzYWXrhFrabEG8X6L",
  "key36": "2gc8Wr74pPVEQ3BRMo4vjcvKCfrZjpaLRpCig9WAci9oWWEwgLXXMwffE3Q37M7s8xzALPqyAQ7oSgU2XmLyBjPx",
  "key37": "AbfZS9pmgAuJHsZ6axwmC6ysU1QWk3ZFS3qeY9A5dn1AGXga7uFJWkgJgaqkU5HEDzzVhAKLqZsoZeTV5PnVfZj",
  "key38": "63ejAaVuumBoUzs46AnAeUoTLLUXDpNYuBzjXzciX2WKscJXDRBZky679Uw6bPqVmmdJnbDAMsaGQmD9risrUwBq",
  "key39": "3Eh9m2weJ3PswtmyNdfu4WahqwaML4QbhMKeSVHQjwMJJq2q4kuah1FnGwDnE6FMLmoLu3WLddvSsiPeyvfGskC",
  "key40": "3kdYtV42X8HJZQUbXZUBRenJ48qereUhKSBjthEzFySvaMnFcuN3HnYpgmjG1zGCheJMNAJMCUGDvKsWAn1r3auY",
  "key41": "2sCZZxuWserMMFcS4RGZvs4J8CXMmHkziU719LSrnvQEH81UunxwGeMnNxNwvdFzcdnoejKUyLjqv45kB9HFTvg9",
  "key42": "5dPZYP6drJtb9zTBYzUVXHXixU2FbrhSQyHkMknoQRhDUpZ82k43MsaHbgBW2m9HGWHhtrpTkQoH6KF8qCCqrnUQ"
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
