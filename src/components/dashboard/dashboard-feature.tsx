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
    "4y3tofR9mDNVQjtdGU3qFFx7v3sr6hmWGPMo5hWDARd3LwEz5Sckm6Joibuyw2Ca5s7aLyfeUU26sxVNExZmb65n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n17Ty3YhQr2asfGVVV7f2YJeijs8J76BovJkXM17BPtNDbdqSc8bMatMK8pEjYSfmYk4SKVo8FRuvQBuZYFYFBo",
  "key1": "5esrWzVg7eG5jkKxU9Qm2xquU5tFuZmEbe5YJfS6WDKN7JBMAu6tcscD2Y6v5WE9mBxF1YEvpueb2Gm95fxQca3Q",
  "key2": "cxaDKhUmQupEyME3gvqQJ7xjx2iCaKiVWb5ChvNBMnGSparGNM3ZEufTCE9k36jK9dmgCCAnCEMxTLAGhr2Eqtf",
  "key3": "5XVddGs5PkvFrq8tFS8AtqUbaPeq4obntUjdgqTJjuV9xgBYaPC4nbWefS8vvKkbrR294unbuR2byQnFtPTRA6pk",
  "key4": "22Vy1mXKRin2M56tyhxyRhCwycSsPL1rHNmhZRLkrwMRy6W6JhhMWK4NZx72FFt6Nu4dcQrVYP5jwPSYzn67YQnF",
  "key5": "4aJyzccokPsYB4sZGQ6RkpYgfmwXSpT1bztRoQK34rk7oyfYxHzPBe1jHWoaPfpMMgymru1Yd6zQBCoWAMHHSrtD",
  "key6": "4UxJAZ2XYotxXt4AmvCfzA51igNqooKqu3cJvUw5gXYBaspazD21iM3bfYMUayxTjeXKhZuCw48jv8uBigDfV7UN",
  "key7": "3fBBrKLCQnXNLckoWY1jjL2D1z3qf3JPu9zEnwbuwQx85PvuLexrnnKv6DjBaZQGT1qCbvhdnNZtxGY1GU2ypeZu",
  "key8": "4QipJVu99nfVAmzU8Y6kwPwkg4PRrrEgDwCdxyJgmmXrjc7KMKBZbqvK1Tr47CxKZyor4i2XyTM6xwhFwKzhJ9Di",
  "key9": "3GmPnL4R33fFqtLHKvfB8U78mkb2BwnrC7h2PFYhHVD5N2zDWJ1ALvN4aURmbue21bEbDQ4ysB3ZhgcXhtMWCUqx",
  "key10": "3tpt9LHWkbZnCsATodR6HBGWTipsaDtEYnJBgPM7sXXbEMHv5gM6ip1wjwxwXjGMX9DHKwsrEhc5VakayvciSxgh",
  "key11": "suFgpdyTeUN9sCaU6KtCWFLBSHmivJmUTAP5vWnWmgvG5z96ErCs8zxJpSHDSNu88GBDcQD99kwFHy8AhNtbT7S",
  "key12": "3CXGCDDBDKsVYSuztuKbfzDVti3ZR4LwMrnvxjhKQkdWwsrbgZFccd4ut677fqok7SCCjEmmzvSQz1rSvz6gLTgz",
  "key13": "KpTUidoG5P2zmyoZruQQosqEoNsWZrG6joSQbdqD8aStUhAobLmzJvzCz8hrGfXWvmRBaRfK43cRtFEALpgEBkT",
  "key14": "5mff3pTzr1ebPqmJpdYeWBDWh3SoHAwndY3Sc5v7GfBWon7UjdyF6RAZ44cuvMKvdoCUR9ejjz3aVyuxVqgAEA6g",
  "key15": "3oN11XmCYKjM8FGo26VShWRWcgiLjyXR4wLnY4f52fsd14grHUgNznPsqDbeeY2UkeWD7f4NKETYaUhEBKr1Weyd",
  "key16": "3gz4XNPyy6N1UHHNBWTM6dbLQYqryQ185xucy9WAbPariMX5SzvFG4q8KZVttAnUPd5tEx7a7BAbt7SjrJ3j9kuU",
  "key17": "HiyhqPbwj7dg9Yrynz1YgS6qWHsZdcFtV7D5HZJVzNQLrKbDkfeqyM9U56TepZLF5suXKYeZy3mXBekJAeH1trP",
  "key18": "SbQu9XSdTUera6hfZ8Wc4akUmEzudyVnxVwhB3MP8LCjbDPxeNZHEUX2YsUFVe4yTUyRbM76EfBG9TiGgo4Httd",
  "key19": "5asoaKAUquNwD2Yzr6sWbCRdgi9Rrv7hz9wYL9FQfLbGLZNKrkGuMWdDZotMHH8A84qUmwooddZfp3iYQKytQGhB",
  "key20": "2zKAXXbVke419gsSbfKU3evar23umfhQSjPGGs6AVmDhCE18jSiDzMgeFuF4MUrYzBwU62myp8JaAGY2jog2hZGS",
  "key21": "ovwgMmZJ588WE97bb2yqYeqmJFV7jrB5ouKKf4K2U7E893ka63HiHMjYUPgVHgh87pubmHNZ1XpxcHKbBpWYufa",
  "key22": "48H2HoQkWjtPEX6FVnyL9dPvHehLHT49P6w3qjgFNG5eyepuEx74GpbYhLBXYzRToqbbMZ2t2hXeZeANJK9UdZAM",
  "key23": "2EtowQeC7mXsYuYjq4qY12Zta2T8SnhbBg4wxXeFXxatxzFJ9HUjeBNF2DikQUFtyZCcG1aH7tsGULnf3ah5e7Mu",
  "key24": "5nfQbNV1vVqBDCgiFzeYkzBoVYWGF9gHx1HgsDcFtL2hsZ9WPmG3YzJZ2NvuB3UVvEKiPcE2bgvjJGFHiq24vyCg",
  "key25": "2RzNvRyLnS9ZYKdyyHTiVA3WqM9CgqbwWhq73RoV2w47RZPh9LdG7q9M39gqqrmBPeoKJ5Ghqgd6xsERw7LbzysN",
  "key26": "4Yc1SvCwQ3CP7gRXdYohEyHrbXNHFgjD4hSy3T5a7vxXhQttXbURSD2jDogVCZLRSJiWieqCzYRts3c7RKJsTzqM",
  "key27": "AbiXVbXtUWdVC879QJE4vqFNtaYeHoVcAardSpuLbHanSxkwnpwNenwi1Sp2N6tPzzhpcU2j8LTEuDfheAZFULf",
  "key28": "55QVGnjr3uqPUS1BQNqyj2XmDRU7MoCWbqs2pxsia2jS2fx5QQi6HqGhCMA8kTdGQzrSeK2fYetPU2qwESCrvj97",
  "key29": "huDc4Qs4xGFQjyuoibzaaSxxfY9sTYj6znP72AVYMBycjM32dvPQJMagVCxn4ro17QRoa3HEPV698P4wkoLKqyY",
  "key30": "49Nzi5UZ5Arj4Nbwu5San2GspDYxNm62HPforSmdfhcyonnU9kBSi5bMnGkfxf2E8PPHFDfbhPHuD83vF15hmZb2",
  "key31": "38Sp2tyQiXeGjiX62FMUS7vnXhTwkZY9ZtMLvSG8Ejj1MaHh4yPRSkfvxuvsJKyjKahDsgpJV1jaHjD5k7MNt2xz",
  "key32": "4TbJZfKvtnn1HukLtjdUUWCPMNW5cw5W51XS9nPTA3aNAFs4nxCt8eLYLBLEFUqm6ajC78NHgMi3iWQZVkU9s7FJ",
  "key33": "4SRssFVSgt1SLRQtwjf75mVyod6QBLPTBBqe87DkDohAWL6GJU45mTZp6Kbwa4qr5ebvP764fmnpWYT1Wzh2jM2p",
  "key34": "4BMsPJRVMUBuhpWz4K8x7zsDnr4ATtP9pTKRTwnSPwjKsF9DrdTxo9GzW3zUZaYEfeizdykSEZCwbe8pDrjAL8ps",
  "key35": "58rhNZAnE3cvyeC768Cspgg3KxwSYXfzpRUL92NfP2iAuStG3dexYQ8Yc1swCM8NsBHiSf2pM1g3ym7nXNcV7SqK",
  "key36": "4bKENXwhSxdfqegN4x4DZpfwKeRrB429nvQYFoCmKUxDagiF932TyPHAj1FfCjK8d5iLCASKCUm3qyGQs1X1PpmQ",
  "key37": "5B9HG91S7xrM4iLAn2sMTioDNExhEWmSFPGM2mBiVbBFWabjnYT497KRjSD31FjRWX1fWeqiAwjyxvB5rR3EVQaB",
  "key38": "3RD2v6VWM82z3GhopRNGGiKbcK5b6z4M9PGscWnCj9wBtQuAxycnTvJm7ZYyUWnZLfqc9Ke4hyRoERJxGS8TD1ef",
  "key39": "5LBFthxu4r976X5FdFDBD1MHsWzZVmMRHR9Npk7akN9dLMcPdYXUeUicD2hYcFU9Qbs3HVNEQ1BLmnfLnVekCK9g",
  "key40": "5XHvAZmNGqRHJ6LMKYiiNxkcWR4ytWsLoAqL22i98xxJ3uiES4Y1vNSpkJTAMGVNMu5Zo6V9daBwuhjJw2S2hovu"
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
