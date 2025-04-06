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
    "QTrCP1WYGert9d7iDNyh1dwu9heiaM5uetup3Lmt25wRaZTBqKxKh1ye9tcv68SqxxWywEiaEf9o9RzwJnmewxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JLMjNgNXHKWtyBzL31d3eKbxWybA5iPttHFiksJFmgjhakrTfQgjUMax8f7hmxLEEg776hePq1TJTuEkjBHiWf",
  "key1": "5saP1iKMn2jZC4Ec3MJa9NqVmXicJNG4CNzbKYZ42uUNCNkkXvnQJyvMEAgELMyKmNAMnZw8bTNxTZ1tWAmuuxbe",
  "key2": "2kuyvn2vJ5LgoU623M63stgR6wBpyavPq8Wkxdt1U9du4vKbYSoKPg3VmQsrj3ksuCR1ymqo4uNteJ4ydsLuP5eV",
  "key3": "2t3VYDQsM58K8NgQ8g3kxMrnRStGtFARxjFcDVdkGGjhaUFXYj95WYdUeTcEU2mULyrS1vAV4JN1dGDbV2azxiSE",
  "key4": "2HqsQzo8CtjS4EZqt3PDbFx7RbUcpzBjRcfFhj6CqHZEo7y5ath23QUWjsuxnWbQEDKTZGpSdKiX1SFSuiHHPbuD",
  "key5": "4jbiJLjP2d5mnrnCXGGjPeK3w22ArSZaoxXhgGuc6xcBkein1AgJjRGQBBxFjgigdgdnMp4VQ4owSzYUy6cXQaGZ",
  "key6": "3fXe8TriSCPkrWFariPS7MeFURCZfMffFTjPxktNYU9sH4RGUyUoVz28agE1s8MPhZ3CPWkAYwiggB5bksmRjmM8",
  "key7": "2EYsX49DWXdZDrsin226ipeKsEUHz3qH3NR4HNSefhH49cWD15jR8YHLVt2u1m5pPqCbeDjVWChc1yfk7v839hrb",
  "key8": "5tCCACGLJxxJUgrkmd9CXNCVFKyitkK7gBMSNryoyJqyJTKkKwBu2mt4vUvazHHiqZHsZjrTAVv1cnpJWLQjMpq7",
  "key9": "29od9ECCqULSj2hLmRpZgrxjvwVax7KFrKHbA1JyNF3Ez7jtLDpqgoB6hw3sNafvp2LAvMzvxXGnmZiC2WX5H8P1",
  "key10": "dqZE3yzSvT3RPBfhDAY9CxgrsWjP5fkr9XVSrKjfyt151VQVMTtioKNZwYZP8UUcPnpv9WC394wGzR4YNYW1TGM",
  "key11": "4eNawNZU9hXSzEkQtt64igXca7Js2ARp2dhtARviCWFBwaEmMv97j2x9kgWJMcjfFAb84FW31EKoNiaKcq5t1Xfu",
  "key12": "25NZvuebK4oki8Ad7Jy2cW9Vt4kAGH41VVykM6TF1ohU3Zob9fTgx3NHTy3bVfQDGpoXXTqqC1jLMxM7CF42xXpr",
  "key13": "44ViSkReaEG6HtzunSWAc4W839WhPxUn5Mcprk3LgTRqZGj1QSgN7jgQtSQoKwh4mr537nKKUxqafTnQcyQu3EM5",
  "key14": "2ospZy6pzDb4rde8bmGTXGzptqx3rhqsP91XQxVaguLt2tjDQmHhD1dp9agrAA1mhxLNt3nAdVV91mbbP6ARLwVg",
  "key15": "Urkdfz1KoMaY7eU8oNFV6DMtzX2Bxos7fJ6nqqioQJmSiqYBYGRb2UsLkbYSp62VMHTicyKa9dtvaTT3kB59LAc",
  "key16": "47ddu7pDkQDaWRU7ndhMUsyhznHJtCNNKZuj5xegwEHpUAtDhyzNR93pFTuF9qi2t9ki5Y8hdwGqNzL1e5kUyR9s",
  "key17": "3gf7bvSqGbHY67aJvfpd8ZtV3BejbqC5147UFo7aQS4636pd2edfx8drRPDoaA7hSMJgTksfqCgR4pHdkK5uEELt",
  "key18": "5sGW3eeBLbkqUwbZ3oDw79RHXwLjvRfSejpb1QiZTXExb3c8UykBcivuVtCVKZYdY6DtKghEPuNobFj5aLkXEzPM",
  "key19": "5emQuL4wPA7zhBvpAVF9WnPuYE5TkZnmnLCmRZL2XJuT5ysGegKj4jtrXF9e9VYBm3XydFfUpfGvs56UM66LvXFU",
  "key20": "3cnbB4PyL9zdZ63knwJiGZkvDKX7J9A6U2Qs8PhhbnmcyypKMskbDbbmgbHCtzbPz6ev6qKCN15htKd3DEghDDAT",
  "key21": "i8ELFDz4w9Lzj8j2pAkKiFceuZHzbkWszGAYtYvWGxLodyoSBRJczEcnQda3vUUquq2rb6KUWwUa2zstzpjhziG",
  "key22": "29hHY2MkY5vG64tGNg1nt5ThVj645njkYWtuyKnUbHkzgMJENnPGURqz4QFuT4w2vfAYKsbNKTwbFkMVaAQtm9tR",
  "key23": "6agNzpCFSd4p4NAWDJMHXk6YcETsQtnxmTy3bXvQJ6YUQwE39szb3Sc571ctbBUdxxd84UNJezNDTiu95zFxiBR",
  "key24": "655nC3hRUJJPRo7Ph3ebT1Mhd14W4bKkQHDCs2fxvkGURQ3RrrN3c4rKSc23gCGsjVz2uaY6fGDPh4WCnDxPVPZK",
  "key25": "28TRjWAfr6mA4f5U1ehtvKLRanC69UARA4Yw7cFti6GqVbYogdRxZf6Cecs1bMpDKZAXdGB78oP4yMrQdHou9m95",
  "key26": "5Dg64XivEvgwrxgZntos2ch5FYCfdpTWt4W2qRNHc6xf87VTMoerWogEyBCv9oXYLGMYXeNY8p6dPRFGZnKdCLey",
  "key27": "3n7cur7sJ71Zeex6GZxWWBeQxiXNxUfPvBcyF9G5xri4HgsqTjtsLdb8MPnZKEtkYdhHvVAHiv5wCvKS96v2z7SY",
  "key28": "fhMUJbE8BcjiMmH2pggY41yhbS8n2ZSnVsH4pooa9mRxQhwUNDHVWq247PZ53Z5oKWiw4Ld5CQiAqF8WALWsit9",
  "key29": "5TY32ACc9SUcSePJFQ99HQvHNnukRtu1WwnLdQrLRxDeQqNWSUjaCwXP1iNBXQv8iVWKH6kzyqb1LSCUsWZ7en8m",
  "key30": "VUEjCTKXs5EtdoqyHNaCCREc35fcog8UYje4f9opkXEUkLKxE9N3wCTEFE8Fb4QE35V8fDwmhKztjc9FGdyUB1G",
  "key31": "4pmkKepsQ3uiTrYbpRnZcvYSiAiSUPwRSkHCbadaBbSkBZ8e4p8iHStfBdMagLEtLeEpo6Ysg2T3ydc8xnB2um4i",
  "key32": "yc78MMoCQTWU6UN5Whwb676bTC6L4Q95sYHTfHfoonbRx6vXbFyL1kW5Xpp4jQkRCPHQ68tLU8rFQLEDqSz5hvo",
  "key33": "3Ho9vLYw5RjDC8J6eevr3CTEoKP3pJHLooAcpUCSMENsgzbqgbNKoxYk8T3cRi5bXf7RuQLr9KWWJFwQd2sWqgtN",
  "key34": "2eWAwhCo4Sc7h65gMZbiZzi2KGLW4PmTmx9m8ctwCcHzbQfYwSynywMDLUNL4udWkEx5N1AUAxd5sCAHJuhr5GXK",
  "key35": "7nJpNuPTQn5KErsdzosvJr2w5iGCktPzCS1FeeeZu3PTNKLZvY538SXUucX6LbHpysuxnEmj85FXSEwcfQHxwKb",
  "key36": "63kRyZfwkkNfj2gFotp1itGruz44gfwPiaxY51vjMe6BwU4NY9X1EQ5b17XRBn5YSwB34x7waGhyVvdLHZLkRZ2M",
  "key37": "4M68EzPzapLJXMUoiLEKyLK6Q3QuKWiGndBoGGGvbNbiZP5gQzBtTnByTbLTWdiMekgskB7SzUNmUex9P2mmETh3",
  "key38": "5HtAGdZAE9XYU4oBAEdgaMtJ46At6pNYscXqSWXJnoesDBZBBWbtkpWCcUGYbXesURtdb26vDFieNnCuw3n86E5q",
  "key39": "5wnFz33KPSz9hErHmGgV3SC2a9YS56FAvzTz8irssM6wRbkszZxWpvvBBUXt3AV9dcvBVJXyd7r8K3ziojjG6Stm",
  "key40": "5br58zrAR1LimYxhboqDmE7WmA6QN2MChjZxXsKtnY1DSSAdjtCP3bkP5dDjhZJ6gsFRLc9zMCgEq9NTWuztcDev",
  "key41": "2nDP7dPAxabPy6PZvkzoVkTPHVn7d6xT6YEwDYqifYXrCo96nMJZ5Yogiqmrt1pGNfwB18jma6Gou6sUworp1VNw",
  "key42": "2vbm1Cj1BVn2WPVXvMCfntNi3uuxXYjB1fMeKNadankuKphArVUFn54N21JVu8EJLZbcqMLGt3aUa9ysDmMLZBUy",
  "key43": "5cM1kRAVPtiYyKMVtE8DG1WN1ha52nk6GGuHLkrKowNoGrEKQ4Dn7EscEfLz3DKYGv3KskwSX4HxD3qp1Gx29HGi",
  "key44": "4m9XpV8uUfGpCPWP6QrQQnGKvxVKMZNFZNRjppZpS3gPYVCNegiRKkNjECthHJ2Ek9L2C8gFwRTeJBDhwdd2xnnC",
  "key45": "4GXJeTrRScxyskP9djGr2VKUXM5qm6tZ6vU8gPb4Yo2uXH4sdR6hCXQZbbqbJDbhAUh5XK48KcSaQNhLcLrPtwux",
  "key46": "3tH9dT6ATRauw9Jvmz6HwT2gDTXRzbSAv2tQTPMdLchEVsbVfkDnecmfhyZKyrHU7oVFVFhdZY16pBfgTqWQwhnt",
  "key47": "2mUa5m61fgT2aP8DkdvwLk6hm4WeX5QocKJy9AvGmdGFo1STif34UucC8ANaEx6Tzc935X5hhN9fbZD2XdauhJvV"
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
