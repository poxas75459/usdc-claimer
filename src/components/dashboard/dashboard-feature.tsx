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
    "4Ur6EEgJaH6L9uFH1t42dxKyH3SZXKSY3KhADnTzDvTHiZjb83CWddgjXACQe1YJhkcuam7Xfa2iHeaJKJpZAzrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDn1ycXZ4rNe9mcEvNBRs5h4FWPdt5LTUZFAZTvR19Pzk8ahxw1i5KsmkruWaEUQ9sch4MFHuaRa3quhb6kRqMp",
  "key1": "3JVhRBkJRJPgdQ8k3W6oD6dpLN6bogegbdFUFCid7kENrBK4745Tenppn3Jo9F3acqgQyiDFLcKU5vDxpzfJKfQG",
  "key2": "2niNm6QtTvb49yUZrM89mTVEzL8UsuE6ANqHPbeEtuTp6QJCaXArVNJf93ECc7WHzKeQyGigAQG4aMuoBysAqm5f",
  "key3": "4wA8vDW1eHfXQwztEcaKq2PNGDph8Q9nTtdZoyteJnNLPD9DHQ4AR6mJfqv2CfFEqVr6RLtNnVyqiJsZPeaUEpjf",
  "key4": "3jujFRE5FvfywsFvPy67igL7naE75LBZwCq4GrYA9aFofXtsjQo1NH2FZ5Kxws58r9mvoeQ3twot78H1pZ3AsBHH",
  "key5": "fQL9sxMWtJU5ZRtTJXQJXFbstPeuY2otz9V8hBR4rXh9vGRBavLq6opAgb7KwNiczFcpZrQmwEiQpYsoRcoNrwc",
  "key6": "JG3fVreUvojb9izpufwDnvmgtzi9j3NdKP7vU6VbTZLwxPX8ZD5tUMTaAUgpeVWDH7yDK1EHnYYwSSmonQkXQCd",
  "key7": "3U5krc6QuZzMg4MhHLt4EgeZyk5UosNuYEQqEqXCCHVoVS7rH3ouUe3SVSp8WWLxekHdH7QS1BWg2MQbuy4WKJ8e",
  "key8": "34TnW4QmCsotKfchbTr1KuyTuJLqynhJgis88Hn2hmDuz55Q3B3B4ESATEQdLGoTig87QpMPrMfeJvUigXxUMpFQ",
  "key9": "L4Z4gY4y71iy9kGxVcMzopuvYGYP2hJLJaHYzCrLrzjyLmeSPKAjb2rXkoEgxEV3q7X86xgKa2AWNtwycVTCzNJ",
  "key10": "2NwczaAzkG4AHfK9NEtG1SFgVZKt1pv6dteoa1qSSB3AGvTHUiJ5QTSNAsnsk3dRhSyTawVBuGVurLN49QvoZJZE",
  "key11": "2Mn979GPQ6DCT7ARuBE833MrMvXmDt1w3skmoEkL7ik572vZkgH8izVU7B64hM4Zq5zAxZfAYhtXawkRwXXfSyiT",
  "key12": "2UbYAqoSrZmCpqjNkxvdF57a9bws2sZaBB9DoU9nXZMTVZB1MA11vpWtz4iaEk7WwKG5z6tEKELuVpSW1woqGosi",
  "key13": "58k6KYrRmzqzw9DndFi6fsUNcRKpo4ZuYsodekshb1aFX8UnX4ALwn8AwJJPA3NXDCe2igFQj7kvX9bisaTbqEtk",
  "key14": "2Rh5LHmfk2w9TSwDb27KY2KVkNwzooFErUAT5wo1nZpihn6r1PfM6XMRJgxvaX1rrVL3x6huYPv3MNRo5ghfHWhX",
  "key15": "37Lf9jEukBNaphBmC8KdvG14AyKuEsoHMSEgtXK5ZmGFQuEbMKXHfehJ98B1UPGXXrBo4dtJKPBf4kukowwUXVCr",
  "key16": "4UVzGLX5Tne1L6jEtKK7PCGouvQ4P4EbKMdTBgiXF2ZCYdzpXkbV1R3FX6wDkUJ2HiQ2erroW2B7H3ZV9bmxvbvB",
  "key17": "4hXvRRD5Y2uLVZp82PvTbU4MRUpAtuci91dq7bp6BoRatLMZAtYsLzxiLcERpz2z48Krg7virqHg27k3Wa6PSTV8",
  "key18": "5imAyKoCGHRKDBmZYQtNWnMPmJWUmYeNYjrPWbhvRk4Ew3bbcjLQfvBm1CDfxH8yAtdRPB72gjCBU7YhJMFrKEYV",
  "key19": "1dMAGZYbFusq8tL5qWJxRVAgJNn5FSBwThejUeRBjaYnfNTYETJfFem8SnJoW3GXasA5uyN5a1VkUq1zDmcZdYV",
  "key20": "23aXDghamE9k7rA1B3SD4dDrVE2ftUZuN5zjBpwvrBnbxoN9KiMBr8YDGQugFZDX1h3pzh7oaSwDuvR8gECokXxD",
  "key21": "3Jbo86NvyMLBejQJrMM1d1Tr7RZg2xnAm29zTbbETLkyhCwLk2jU8Qv7AVNdJG6puFXdJjFLgoC35W9n5Tzvu3Gt",
  "key22": "58gNTR3GY4oStUt4oBN2tgGNjh1qFpCNysUqf1SxvQtWyzNCQ1p7ho1sVqMujNFvii5QXxARzNuMVkSiyoDY4Lpr",
  "key23": "h8VAsLd7CYdFzCtvsExW2P85fwQeCJPmeS2aeoS48z5T5NovM7Q9BsTK78DhxoBihxDSyunRoypg8DMh1SRLshU",
  "key24": "3WSDxcut8rpFVUTJxWoEyDgJEeCn9dRGwVXDmdk9QG8JpeMbFZu8UY5UQ9J3inkLTBqBDBYMqP9dFTZjKLgmgfFH",
  "key25": "4TKwVG2AU5azGdQQXEPzZTgRCum8EdwHKg5muqqaZVJL1omMvRxHEM7TfNjCbMLNz5XNVGyaqs1CuKZDmNqogB6a",
  "key26": "61pmhKjC73ebMstamqiLbLL3AmBfkJsYrTWz74qbn6FWbpVKdtSdEr2NNNe7BHx1wPCXWdzx5f7Bz2RicMQrqufG",
  "key27": "2ZSD2Bvi4ZHC2zyWw3gQeNHK2mDvv38x7qXMY5dgaG4ZyK2nKFp1yuPGZbvMQMicMHfiYfHHfGzPWnjRkryYJxSi",
  "key28": "5DMqwBYQZ9ZJz34k2JnFm9W84hjigCZTKmDMD3vELB1gVPQ27TRxCQjdR6HWRjWnZxRq4vbwdZNdS6xkyuPWig5g",
  "key29": "XnRs3bpMxasfX9mLYAcjNzKJGR5MP5dtVYgGwkRWyzo1Z8zM929oGQLUHKQUgXLRUVVDFvaKGMGVer5K8jJekhW",
  "key30": "r3pYyGqSTn88mAyoox7P6Z3YZjE2dyDQ92tuF7hb3kPaWPL978tAiqXiJDh4wZoPaWhFp8AeSUjgvbwreLH189R",
  "key31": "3E6AQjkMYEPFeT2T7dW9vaqDgYGHSoReRGXHgoSpqAxwSeYxv1UCrC7Bgv27Sx6icgDJgucWFg51AgH8FnSaAb3p",
  "key32": "5p5wo5RPiaQ1d1d1CDNP9i8rWSGEwzCZXZMzb1GtFtXfVXQxay5gUB9kopjAHx2aXwoNqzG3KRrocobm6DWGc3Lt",
  "key33": "2mu5U7xqhxDHevERXVoz3wGQ3Z6VXTL11d9dc53szDVqh8AsXwgwLEgUwtxXYx64ki6sLh1GQtWduVPcDebPv71G",
  "key34": "4aunhAX8PLHeD4sGzarQmgtVsUZxa269qvahuyC23jiiaM6dsb9gC8vNUcKjh3qtxeZYpXcuYBJzM3LkCqQiVhGy",
  "key35": "3z5FKvMyuTaEYfMTyZ5eKATgH1DsjovivRSS2wh8Rmqyqtyx3H3cCMnqzhPPTEAsu1RW1s6tdjDS4PPghSSMb3tS",
  "key36": "5kp5o7L5c8JCj8GgyD9tWY1zEfXjEb8CqXK1jZTAZDYjhyGzgkeDETEqX6ExRy84sCSkxUMMxVTMSFoQVMmyfnnx",
  "key37": "4e8zUJdmco78vXWxsfGAEHsda3yP1c1dDfafCzGPCd8crwEDFtx8p3QdBPwBGFhN3Mk63N8XZBXEe66Q9oV5Xt19"
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
