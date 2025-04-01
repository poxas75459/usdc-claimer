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
    "2NV79btjmBHvQ3AMudgyiUGWfSbnwhwcwtY43t5UzfkCMo7kPk3bMTEEQxxqXhbr5ffr3txf41s6VirvKcv7Wbys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HX29Krob1rsFhgB2CYg1tYYzsgaCFrMkuqvsbXZrTyi8YHVZh29Fzj9ydMqALFLoKyD9A8QF3WaoXYMqDUx9JdQ",
  "key1": "55x64m7fbYZku3qtyHjU9aqH6LN9AFmt2j65NNa7a3orUDb6Q63P1mthhJUsLKcgpwDYyMMhn8ufGw97G7bDRtqT",
  "key2": "5EVCqToDBmy3orLdQcVvwxMEU5CyQDF1TnSHnUS5C7ArGzmLTNSYX5E7hHL2G5zLVApmU6h6sxL7usEaf8CrmQcT",
  "key3": "29APrCv9viS1xtUmmfArb455zVPTgmCAJVSs9avpfLuL12Pg9diygswczoNeyeTcLx8y4vrgivPbxEcQBdnv2kUy",
  "key4": "3HvDwhWZ92bn8NwmQgpqdM37e1E7ZDnm2jgEpU2to15dvyhNUrbHbEJKhRCYPHT3HK1Mezd2dRr2ZFsD95bFyi6e",
  "key5": "35qVWVEgcykXayKS5sR9V4fr29UKPvWUCWP7EUUbajNG1Cdj8e1B7jUji7xf7fBXy5t7qsZN3pY1CfLbddx3baxR",
  "key6": "6358bGx6YV9GZzp9qadiArjh2T1AyfiFjwDKMbyq9byaBRk25RkbYXXxtBkJKYA3SaSx5St49X19ib1gHkf3XneU",
  "key7": "5oRrxKThAGY28rb7VpGZd5pLqtq5wc8L9K7Pf1DfuhGtamcvm2xQfY9gzKiVkXqUTEaTGbjqLpRhbXHAK8RfoL9o",
  "key8": "32SbrSSc6JsZwFk1i9TTb7WVbkZnuhd7hk21f23tKqvcbYC3GDvXXdpQSZZR8MdW1w3A12PgQESH2TWKspp1w2J8",
  "key9": "3Db89nWFnuYnxLr2t3SJhkFuZkP2wN9VatmJbqLqUJ1XjNpXbURZJEUnV7mgaFiUwTXo9vVtP1VWTxnsgjS56wF",
  "key10": "Xb1oftmPsuk9b6778vi9JFz9nsbLNrmpdjLkt8wafN9qUrZHFGQ1X2je93C1CD1xyZ6AHYAJfwzxo8bjT6EauAf",
  "key11": "2baYQmeKgSKHhRY1GhW9e9Fx7c5P3pT7NbAdp2K3RTJW5RBhXjJu7WEEWoNx2PuNt4xfSCKPx7CpqNqAG89beXuf",
  "key12": "2KMuVPKMJR1xADMyLmYaFjQ57hRxNWY7D7cJLxY9fREtCt19bKHPbzoyyvyVBNapS2kowWRLqccwncZZiWnhhvq6",
  "key13": "5gmyuouxTjBx8yhqXRZiCAwjQdDcWf78nSv8fonZQhMawB51RyiLRN7gHmHnah48VUb12ZD4cF9SgXHxe3mKeLGP",
  "key14": "4Bg7RF3F52umha9UeRd5idtjnmBt8JeKADn8sUnUQPtsrgsuQ3hQPUNPnKMqiGv5akaYA6T28djocjPJnmhPwpyD",
  "key15": "5ZpN5mChZqUkJ5bg2V2F2h61D6obq5nRXXCCh3ANDL4RDLm388z2tibsti1SodG8vf7tZCcsNvSLo3wNHgFMzmcH",
  "key16": "6423xUUEgQ3ysBsWsLNk9C64BodJdaqsZjtfnChjyQ6RwPkrZVoxntLQW6re1ULcC4Buuk2BawKu6kKgtczU4he",
  "key17": "5Lq3eM8izS2Uuv3vYAFr33jMAGcgaGFz7cAE2kq8ardqAmD3zxvfErjTwfqKxQtCtY4tyWfVPtsu8njipCfp1hu2",
  "key18": "3cLHjn5579gHBwHgihf437JWPFd3eX6edQRL5Q4VBNrMqCvahFN1cfabNt1BrBEP4L9c9umygTggFBJUmCy9tq3i",
  "key19": "2DkPTRFySkii7XdhHjfCXwUK7BieeqLj7t8EevqdHyxpSg216KujuuCXCQ5W65z1T3wC2HzyRXXysHb41U3kiejV",
  "key20": "3m539bgRXjWTFjvN2k7CtaaiMz9o1m3KFU7VMXQMbVAxugiHQeTqmTDgiLkCvMJHSyVctqJ5cmnEcE4VcGDkTKq4",
  "key21": "2KUYtpkCm7fTSRn9ocA8ZPCRL2ubQqao9uUR8qcewEDzojBJ4fDyZsyD4notZHLAfoEZJ9SVMeTKTg4iZaJMoNvF",
  "key22": "3EfAFoaNW8CYvSkmXMpkCyEJdDp9cFuGGaLc2UMQJsryd9FAk9huBhnvsRE8R4GShqE59HLgs29gdxDL88fFK7LF",
  "key23": "TQNGcSNSAS42c8scDhE1Ex87jAos15SwHrUYkC74KbWX9FvWycveH6XMacJYQM63ThCXZXQdTgLE2vJeQdTQmzA",
  "key24": "TaffJFr8pauUzPvnUoAxQSXJAm9mWMxtaZ11g7rsqHeousooeacvHvdJbcKhAHJSBSfE1cKy9rHeCvTCJN3iwPj",
  "key25": "9btoFi163jUVzdu4WSDTgWcYMJRbsZEjah3UYLypuxAJP1zyPPfkLeW64BN8F5cx32prA2hbZUtFnchN8UzDEQG",
  "key26": "62AVkuj7odWcoQm2gv3NQuvx24WkgSsAqgFkRTgi4ph9hcTKryzn5tJTQuupWLunxwf9znuwY9bjv1Zb2s5QKkjM",
  "key27": "2ye8NNT9H2qb46Z3itkMwpAVLXCjHfdKeyW4vdDV8qUrnirjXzpzbdeRTasyLwwvuELJkhbsLUu4ZvKprDQarqWL",
  "key28": "3DdGcqCqfYPmV8KdYUM2EQ7mXZf8v2h7EamQtnuQbeQqXGg2nwo5ccycKkwLZ7Q9rsshJxycGAs7UHKfcRtHyvWY",
  "key29": "4EacyvKPVaAtLBWeXT15jsL45ydNG4AkNWCxQrcJascV4NoLCFGAZBHchSdaEtJqzqN5h4Ut1ob2MhhwXc2SjJxm",
  "key30": "3m6hb7tEkboGkkVzNiyhoZXTQuUCxML19GvN4hBznNpncugSXJBey5j6kFjiAmQuWppLCDfyyhdcUMv58SCSHzQz",
  "key31": "21K6e1hpFuJwxEzrKePFfnoCMTkC36BRftUJWJnSRwp7eTuNnesSSbBxTiWYQxfhxVpSXjYTpaEkEnvctziwaw3w",
  "key32": "5Qi7RFs4y9vWzD5Y9VvCyQBQ82eHDkteMw9VrcHXdAZALPjBWRB8mxA1sVUPb3MWqvwb2S5tNNjqrFwcLCAqPvuw",
  "key33": "t937vsJgowsSxBivTiKd1hWvnp8UnUTrgBNo1mvuUhYUKLJkte2o1kqKpyMeddie9Vj1rKHvfgjTu3TkMb6fnTP",
  "key34": "1qbmF4gzWNUakmqDUhxzwx2GREybeyrkoS3dwNxcL4SdcZWAFztKVRM7UtM9zR6rh19CkZCWUC3RESQmMUGJpYz",
  "key35": "4LBbfowmeaQrYX5ryDzoBJyLnsnueqgVpYg43uAqmhvqxgqYnekGSRaE16bpjZ2KfLpzqBuhjHbdkbtth4a2s76A",
  "key36": "2HR7LzieSvdNKoW6C3autMfP3fnp351yDB6uMippRXnfdGeQ9MyA3qkKit9iq1d3zkFzEe6TbmxwHG7UySgZmbAT"
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
