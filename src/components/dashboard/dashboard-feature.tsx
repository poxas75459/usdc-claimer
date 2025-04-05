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
    "5twBDAU9nbRsggV347vdNAXii2HgCoJeKTykVqUK8V4amcJs1RxwiDVgwofEhnmcRTYJS8W5XMGYQXbH9FgttKwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AhaSZLE2ECRSvewGou2GQNpwfiYgfWCRFPj5Mb6rV9tEqsgKR52QqwAtEWthwFLYLRKZGAVs89QehhWrKExmkq4",
  "key1": "sVCicGYvie3rjqsVw2Lh3JhuzENdSVGWRXfj72DXaTW5bYDsXzgqw5D8xgBJCmJ9vRcAFSLwa53dF4R2hrDoPUn",
  "key2": "5zWYw5gS3EX2N1icyhMMJ5FSPc6Ug9jSDCTAijYtuspDgeTcXFPbmhAzZheio2hgLXQf7sqyRp4EZh33tqCBXysS",
  "key3": "3f81vDGusDq6bRx6Egc2Xvqa5dUkcs6DZiZUMGFd5QA8kBU57mouH4qrTbp8PNb1vcSTthuFVjjGue7FPLGF1F3Z",
  "key4": "2DgtmQ9sPhcLpFaTLYeNa3LBViSV77RLtq2zRxmDH76eJMCA9E9TGnUi3zZKQi8282Nz5ZgAEaNcWyo3bCfwVMh6",
  "key5": "4rcF793ci4w1FbgbFCoGt6htFwJxRJbn8ZzuwrfanwV9NmsHagTajFMZazc77wzwuD7mJw5RkNqQCG6vGaeURdcJ",
  "key6": "3krFejd9BCqUVJ3Q4WWDG7n6aZdTpDcXzdC3w3g9pCaD6kgizsDJJzskzPuA7YRLNCEv9GZfUL4pZ4VBnQ4uvA36",
  "key7": "5CnsR3r4T1e7A8JCZUfNcH8XicroMBEVfpnmnru3BE1sXrUnmTvua9LCfAWbLPgqGDTyTd6AdSpGZXZNm8e8SrwT",
  "key8": "3CheLWBCDUt2m7GGt6n1GQDocuF8YaxmNFeEkpkEqxR888KrB2CJZf8CsGdsFXGoAucdMZw9anTnhxSLWy95DrVT",
  "key9": "637oNsktXb2NcGufnbG6StFwTQZtsy2H685TwaegEuhB9upR9qvPezLvdWdXAVATp98nVrkuSNPjbG4VU7DWcWms",
  "key10": "3u5ucwTX8EuDj3U2wZk3eibTou1XGnovE24CPsKyebrJUsQ7UNua835gRcf4V3Pv43kh67y4FrWxDDgfADzHCBM3",
  "key11": "b7vyW874duDA36ibJbtDEZYm5wyjaQWnWobivHAgEkiKJnLhW1B6sYhkJAYwPJyCM4yVUbJpUddPope7yQrioUV",
  "key12": "U52C38Gg8XN8jmy3Z36mgDFoc3q3EiFA4jLfSv4GGAjkqin8pNdc4Aw5LsjAFrY3Mor8bA2gpiZ1K9p26mTuup3",
  "key13": "bvNhegtvjiPcMbKdsBNJtamk9Yxm9zMQhtHP8g9CTowny5Fv5CdFsJNjbHBc4mhxLNwzw8TnLiHAkgoZS94hcRr",
  "key14": "Q4EzQd5vpUqjvbkEn7q81HK43ej7Y8GYTLepCkeQzoRj3EX6QscC3r7dG549UjPrXC6Tjds58gtfqKvQjbJnKFS",
  "key15": "4dw6fMUfS1iWD86g3Xqvbx7PkzmjwCQZa8c8V65fW2BzK4nNq6s5xKNFKKT3anov96kWc1Nd5bDqazmM59vxKUT2",
  "key16": "48EBM2kPaHpaAwhX2afcVZsLCgcUVQf4acAm7GHKNwHLGBCFBM1whJQ1bdca6XQce5JnkMx5wgw4iCM2Wh79v1U3",
  "key17": "2R2ZoLJHKC3nmgWNCjCwKwiBa1vzHTXkZnN2gReY4ftPutrr5mE77q3LP6dpp2FFBp7kTTUN6VANZB9L5gNtZEbs",
  "key18": "2c1ErGJBbGSQkwnVvQVKn1HYKzpz4pDFi6oAXnUG56UabEMw1BgGmFmaZDzPWmAoJB3piRpTcMwyB2Va2BVQGQMx",
  "key19": "2kJ3Y49qBe7EverWoBXLSo2sa61r4jv3BKgrkzFyn2KXenMeD7nFTEPp6v39WocQW6ByVdb1R4voNKRvoVditRso",
  "key20": "4P8zm1nLUNFQh2svgNYzCyiLNJEZdwNLnNCZvosN3vXZEdotDvhaXeAhJFVjxFhzsv5sSRD2DHPd4x8XmSLzJmFr",
  "key21": "pSktSnQXuTkieiNjmbjg5593EuHk8KrEJFSyYwium9z6qhi1fzxfsP5xvUNRUN8Q1vXsgcQPtj3R64uaGsXovsb",
  "key22": "2ji5Wo6L8nNj45xTqNRhGJxDpsMbsn22rueqmDc9qXDTieCx8pqd9aXEZK7EQ8k6zK8dyFXL9bHNGfrBPi2gdoa7",
  "key23": "672EfnKm1rcuDwEoNURXKgj7ihxHbCUZ3VZzpomSP72599qZfhvJf4cHd9n8ATdkwdp1BydBfVLxeA1YGznnPcY8",
  "key24": "3XRdE5ypB7erkfybqhQKtEoR4eHh5YvtmrFNQjRr8NDcwvBArX5PvmEabn13HbXK1rJfRFmQjyD3pk8mN34tnaNQ",
  "key25": "3saHiybzq3yKqbz6LWAqasWPiv8PVSKCoZQ8f6w8MhXShkv56X8nCcrLTf7rj953VbjWS2WTtxu4GdJhjtADUD6n",
  "key26": "4UugCSpHPat96qhsHwKMRo2xibttNuM3x7DkoSZsx5f6jHBTmn6ScQqZaPmdJ3h4L2BUBHPC1V69ozKQVz7jCXQW",
  "key27": "1GGCJbG4q4NrCjzTbFiHHS8p7usjNJVrSz1TPUHKVqZAuFtkhePCUzFWxmxw1KL24toFPTWN8vCyD1uFbc5oemX",
  "key28": "5Y5SXy6EomzvQqVMM8ZwN1iAoJz5WtmwqcNracc4ugezP1mvDHTDxvvcUYzPGgWvtEAdfgESHaE6Y3RFgHGNJaWH",
  "key29": "4cnSpvgaxdTF5GnMNUx1hbAsoDb1hhVfjy3ovC8HpehejPtESVxW1s9bgNeUDeL1izchLwASPVWhePahBGRBtsrs",
  "key30": "5N1bTSXHxa62tDZPm75VtKWAUxnm2YnVmAPY92u2YRra6Sx3en2Po9BeXo6d36SM2m7eLxCQZwBwT31EepgD7BQc",
  "key31": "2Rt136GGqoUoyXzzZ95eUudpXGyuMeQ97RnMz5Hx9G61KwPqL7zLppZKS6XUyCKTF7MGSzUQDCsKpgRodDZACJhc",
  "key32": "LtC2PRzGdUbxyQ1gNhJduHSc2J49FFhUVKswfVwo3Kwet5rPkcFQvMQUfC5UvSJPmgeZmUiW8wymudtpZd5g8G3",
  "key33": "2iCMCEHWB3gbZwC3vKrgFyGXGc1zqMcnQedbfZ44hdAiZNU7j47sJNuz3fsXkkKhYnLYUz9E9gMjDMfpsjWok5iq",
  "key34": "51GJoM2PKbSYAjLJYNxcwNntDaGPmkdL5oC2YpNhMLC2mD3r9yuSA4HJBCAUdDnVSwK8ePNbdpEeX9vxodDyrFTp",
  "key35": "2jXzgjrrjnhamg4abzzUsMBQkZqMxgAhxEHcRTMkuHooF3NhuT2tVnFiNzZDoL5F2hZ8RXKWbfkFQtwAK5uscaQQ",
  "key36": "52t5F3CpXfxMm3Mt9RKPnG9a7o75teWH4ij5SMeyEWeZacWEGAX7sEd5Sei2HQxYZbYK21Fov6KJ3kJbCQpDb2Sq",
  "key37": "5JLLec4F4gVeYdcVuXyGRNS3mobFG9SmLTHP7XnC3uiY3iqUGTHEzbGg2ACw6FcZpTwpDMRXwg4FHG1xoKVaqtW6",
  "key38": "3dg6xBggFtxjHzP9WTisuC2WybL6XdWkF6MAxUGKseYWz32n1HHH8Xn1dv9uzbCDskdyq9dgUZoVxuNsicHuvn5j",
  "key39": "4jeja1KDqrCGsE36cLfzMXpZknHATha7MTdmQb49YAyYSRywpHAnUsadSZQASW9J5Be4G3R6BEd55ujanWtEGTdn",
  "key40": "2R6yxFTETWnozGBRqMEf3WsgEX2yAN1BZzQVqYZQKiv7m757PxiqmpJGDGoPSceFLgghrbpGH6dMnavQqnsZptFg",
  "key41": "dvvoiAuvVz6PbyUJXuUZdwFkAriQdyExnZiQcb3w2294YhBjGRs4Sghm1acDaRnpMCQzAJbdUrJ8c3xiNm7Foqe",
  "key42": "3ZveGEpuAH13qAXsdAUo6zskkt7XmVeLNNJmjxJpDxgWBL1X2Ya1T5qNDVGHWFhyWBJLg1o9CtVratyZZiAD2fvY",
  "key43": "3i4au1ie7oqQQthu2sz6PpQS29awRf1oDSQAEYfK2KTdCgH1UEJGvFSMc38U2rHTTP1WK4x5Fn1CGpz6JNq4cHbq",
  "key44": "2gRPPsE9MAhKv5aKKdR9d2jkygRLGdkmXKDFEurwwQop33vDb7i2aaKF1TiivvkTqTnymftNgnEoGnsThzdyTZTF"
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
