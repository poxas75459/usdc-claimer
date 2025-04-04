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
    "5riQAWFcq9woiPiFBVKKoqYhkjg8qAtMtW1Tx1AMyeKrAYHoaagxowfo8NCEQc52h4aqSdDXgxgMNmMmGVwS7XcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vt6VF5VTSww4p97RnBFZaZjYf7EgPZ5aqAqnrk9urHNc9JXb3tLqxLgXSzbfDNbLvHK6DEGz4SXkJuGjg5jMSzj",
  "key1": "67PsYMZWGx7GmJ6Z2gqHE7TtGBhgpDYExqH8aDkTY766ofRBKgvLgpyy2kdJPJGg26okkWoMx43JjFujVJT6qHEF",
  "key2": "63Jg5ALjJDoTqVsCF3pXpMvAorhUog7969rqUj49uFTtSmacigGfd5tsdyRWHDN2cnVPTSVdbGz9HHrRYKVj6rcK",
  "key3": "KptK8JEMpTSGo25c9ix1jisnwJTudEsD4gRaHqZfsCSaxZb3d6Br6VmBs4bLwq7KUMCxMraP715LmHBpo6q7wQb",
  "key4": "5TFtudtSp7KckrDBMNadCLSXzcdmcA6gfWvLUxhRQp8VEVoJkwp3DqVipTVS5GhFrDDDWhNSPUX6AooZTU6xPj6Z",
  "key5": "DwbAH2N4nXnCKG4ECUeCGsmSAP4TszvjWAeCJbbHiredJpYWWQHeRbNzRT4zKnRw3ti4K3okGwoG5dH5bE4yJvx",
  "key6": "5R8ny231snMpTuKz8Tm3RAMRRnvWgcF3SrvJBJa6xiT64KN3T2iKUTkoa8KHkS7Q77LwcT5zeESyh73zaQZaXQs",
  "key7": "2HYgFjTggUCR3gHo35axEqEjmVpHTbNuF693wuhtACkv4fE45QqufPFGp4rv9amugVVAWHT5mSbuF9ZVqP1UqqPn",
  "key8": "2oMsWiMqGcpVk3Fr4AeXgFifDsHX8YVjbrN9wHA9k35M2yPUQ54ZDnAjXosRxXhfx8B7RyrYVsWTDL9sAmeGGmfN",
  "key9": "4maoYLeif8WXNjen6MFhSRDsSEDPsxCHkFbQeV9oySv5DPLot8dCs1G8vjzBvsbtHzc54pakTw8kgyT3Zgrv9XYn",
  "key10": "2a8S1Ls9JGWzRur1H6MEDj9giKDfJLu5qMjJUraTGtYGxwcUP2snp18QYNaF3bQBr8rWeE1Dt3j85PjHhNY5qxEU",
  "key11": "2GhTymxwkRnZ1aaAWmg5nNGwWQ7H5A4edjS2Vq7oT1Ub6UwT4RSGU1v9QCxPbQuuDaeGVMdFE8CzKxmdXn3gbbqp",
  "key12": "5iAFUfRKFUi6pznyAPM7w31XLNTQSJ4NvLoM7WTQTXbSmEakjM3AAqPG8zdwcfWNuYQ68HjCMJFHhQUagXXV8mqD",
  "key13": "ZeWTrDpqJt1ZgTGean7XGF4zHY5Sv4YoA1Vdt7nr6fxAWvEyFPCLRFx6NybmJcmB1B6snjbibBfycWxzjtQQUTy",
  "key14": "V2JxeU4MhAx8Dqd5x7eGRXGSCN1ei7NeZNCfQCDf8nSWrZEj1AVWN1E9dSwCH8KwzTsmXSE9ZmhfA3kf61r3bUJ",
  "key15": "3ZwACNvWk3N8iLenSD1JKXgTMRZdoeRYKrt94wPo8miWEjCKRqSFBgD18DmH3mDHpENjRbZnsywcUaNrCSJfqkHo",
  "key16": "4jB818sRX74m8Pohh6gKTsj7KWYiFDDbZzY2piJgid5C8BS2AWQkVbhbkvjNoesY4GmJinsjmffHTkVQ8gsbciRu",
  "key17": "59mN8KqyqtSymKLnNF1eP1YGUSX9pgsLRxZDL1NZ1mr9aWqtuFTGKNPpdt7d3ou39GBcTsd4fMtYYwef1vjNj9zm",
  "key18": "5v1x92drhPjchuTxbFXfy6GUV8xA31cuNzW7cDhfbzx4Y9rxQABLUXXYqt8Jndm22y2CSCbbPqqw9ZgnRsNHNY1r",
  "key19": "5dX6zzhyvjqPU3zXUKAgGcg2egbJQukp8tkNSDsqtNvoCbovrN9PTfTazBeB4j1wQbjhvXPqrqseYzZ3gShuzVW9",
  "key20": "5Uu2kCA2rwDRt12tcaTekXdPUFMEoD8ZeGY8ZLvut4Hhjj1nY1Ppp3RzArJNzWv6XNz2pTBGXKkCNWuKfNfAuk7K",
  "key21": "3DXN5nNH1mXC8oJgiSQz1WVap51bVbv72DZSSK97iVa5KuLtFQv5wGxMSAdArupgg22Va4X8ctFnEYHr7JpAArKo",
  "key22": "67J4upnc5A5MR9sHcZm3CG75g2p6UWkUCbyd2b7yGdsrBSqeXe9VjqZCTRUQ78YT18ZT8ci2uedfe5JX7Rd7suZg",
  "key23": "5zYMMmS7FLW5kFqVrkRasSKfjiWksWoBeRKr4LLbz3MAyFmjjwSZpYyGHjhAAuGS8PacG8qNK2WpHNBnwWjFjTEz",
  "key24": "3BnowVPvTDBwS5C2WQrEXLJLFoErp69C9Q5Zr9zQNVsBArtr2Gn3DSoYwJ664Cy772jPV5QiKUMXUpaYKuF7n3wq",
  "key25": "2HWB4b1xko5Fem5Da9UaXfmZff5q8ijxRttfTYDBGwJMQ4X4wEexTrLJwLWe6mkVGfaFfGwDgC4FC7dsr1zm7zUk",
  "key26": "5cd5T5LE8rCH9U8FCNVK5xGNYTSkBLqAtXJSbJZEEmG43ngy4MrMF1uBA9GBMCRMKvBMec1eLVsF2LC3esuPZZWn",
  "key27": "WJq9vNDYog9abjoUZvykz8NGPgwBjUQUfmabCVZHWxwRRjXAC43JYJ8cEMQNJ26G6UnhNGrAgPPm2ByjTfzWMH8",
  "key28": "5scXJp1z99jZCmsFX18dmpxeqRfVtHwdSnZsQhizjYv3CCJLEFYW7dijp24HaSWTLmp93ejcnPjBHgF7R2MHhS7L",
  "key29": "3SWp3hiRxQRurfBQjap4ghTjqiZgVhLxUn57aHneewS9c8vppj8nxGsGytx311tKjN3zmCdca5jQVbvKheeKkbjZ",
  "key30": "4dd9JFgzuUGHE3bMPeWxq2ce57su48Yxpeybj9DpypPUmB67ZqdPuR9weQunHoTdGB6KqH4AzHnCzAG3DfABnksW",
  "key31": "3Gd9nWwvWZhdVhd3Xx7K2ocF1fZnh995owYjfGa1vtZ45eaUyf1UG3qpSPzJPH175U9ntZNf5gkBw4YdZeMY7zDS",
  "key32": "3CvVkazCJVUBTNkp1SdL9okuQbwrcN3PbjynfbSj6N4tQ4NM8y5RqCWewfXWmduAoMaUaTTjg9nrwTS5p8sf2bSU",
  "key33": "TqtUZzRW4yZHJGixhWhakBVb5A5cbZ7UErXGTi8JxSCnbCZUcuPTDx9WDXDCJuRQJcYsEq5FZF2GHpFAUQvMUa9",
  "key34": "4az7hKfTboj8YkF2nEHNm9mZ6mD3rVaC2h63uvEnqPPJHqwBTsstFKoEnd5Bg6tCWg2aS8dPUsRhSA4y6C2BAHV6",
  "key35": "2KsK3pp2gq6MP6uN82joaSHSuTgBg3eaoXiSodVAbdXXRY2pmaHLq3Sg4DrkTCaWfgbe28JLozzTdKASUYUps2pX",
  "key36": "4BCXFzvRxdpCigoN75mhADd87by1sSxzuostMAXzW41wdSHigGJBFtX5y13Ahoi3gjN7wjAEVt518op9WiR1SuuL",
  "key37": "2YVBrhHPp5eGVbuwh4z58R9S1765Fr45YCbSBpyM1zfAmi5wS1gnLhTfx1STCbkWSwrnj4icq9cRskcr1P6QJnjc",
  "key38": "4TvK9Bkt1ekemnB2LfHz5jWuZsZU9nTT7jgJseoPqLxBHMd1mt16HbiAjsjQk8gb63XoywgAYRCXfHwzsi3FKbey",
  "key39": "2Hz3ius9MwULqUwEVbB3zzNxwvaDGK1JbDPzEtMSPhg4dKDXBAXWFgzA7Tw7GshrffXHADAQQgFPPWBy1txYCYxa",
  "key40": "5EgFiZ3J6Qf9rYewYqoq3JnzaawXBy5BzydbXMggj4AnFRveUBTswb67fhq5xoQQqsdttziBcNqGjwdaksWjcHCM",
  "key41": "v45DTKBSqupXAWLnHWq2ssT2hSoMcRScBdkN16h8ikhoF2bJHep5NVSdYLaMg36avCaCa12Y7NpHCzSBnhYbq4L",
  "key42": "3W9qCDCPqozVQ2cL5uxH9irUezsaPKaj4Wxoozrzv28idn4GR23oRvNbswKGwic8qhjc6a7cvg34VczwRhTV22oo"
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
