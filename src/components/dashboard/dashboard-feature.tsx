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
    "2Sa4VASfWHffPjEtaSwnngG4TY34bso87EJoG8ereuNWEB4zrSbxizrPk6Ywc5ej51vnQzGjpgVMp9sjr2gGcQsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29L8Nr4BTsrbgER6XJ3HLL8gpQRSp22ejGGps9r6rUQs2pNmmUU4p9tkREhMzxpvDnBgN8SBfKeunZNhiGzwhM7s",
  "key1": "7UWPRTeyCXi8SPPnGf86c7tbLdjFJBhtyt7XKcBtp8tfsaY5paLCZqMnrXnAkyEnKwHjjF9toLwuaCf88WoNtWA",
  "key2": "2YnL1afGbwM9665E51dc4UB71PToWdLRDWimweV3aveEgqJjrtmYSjEJHHdUorWZdcBq2qNJYzjqBGHuQ2VCU8Vs",
  "key3": "4gt88vvXxsfuJ9t8TMudgtMg6r5harJgDtdoi58LVQsVnYEoSbcDu6G5mDK72hvqRpKVa1mSBG3virEPdSDgnr8t",
  "key4": "4o4FoGKVgg63anku4snEZ83LSPXjShm1YTVsDfPqsHi5KKqJ6oRbjAXNrGGDWfkUsuGcK3xqAzgYarzLDM54LoM6",
  "key5": "2fRinEH6GADB7Ua7K9enzzSqRAM1gZB43DoH4LDs1PRfzLHF5ZLhLW1Cn4s7HVtXdnjfc2p7smJgCgS6R5hLC7HA",
  "key6": "4GC3SaUB2NUhYxqXAGxnARhrrkp2f25n4mu4VeAPF1RG6gpoJus7AHLutn2FASve8hYZKDuweeKJV79gknTCTZsn",
  "key7": "5SiLeDeZczPD3JPdF1KiFsSvd9GmyzT89csBo8oUWC14MHHzTPiwQ2ftyDLEvF5EksbW6CVkAHUyE6jWdGSeQYsV",
  "key8": "4opGHciFrUVy1Ry3QnJLkpzeioa5vdz9g4EQdx6xdMXPaLJDjWiohcNJfG99GgJLA9qouRg754HcUrE3MNFdoTVk",
  "key9": "2GxQXC4XRmomt87CVYdERrRcyz8ZkmfekGsJXQnrVsyUgmp6B5gozvpRorFbriE6oZcCvbV5KssPUoyeBBCJen8F",
  "key10": "u23BiYrXeVWbU8SVSNoc5ALy5M9PEd69bUL2LPQDCuXmvrJzjKkX1BFVJNfHMqyy88yjvVArKEV6Fp4Vz7VpmWj",
  "key11": "4g2ixZ9a9qiApgLGEzp4cc8yGYg9yLZZNGBMGk56XizznJRtfD15BbE5dhPzTSu8BWBvEsP7G74TL7yFZv5Zi9q5",
  "key12": "5Wr51ZVSXY4Kk1mGj2qKCRvD6MTdBhXRy3BL9h3sokKx6bTV8jjt4B5mF3xGgpvJACDFMqoTBq5jjkMyzjnbj7Rj",
  "key13": "4iaBHKaSdxTJTtTgsDTi6wSAYxw2fXV9qAfta8y4y7yHsNEStmoCXkhqY3QF8N97yfexEcpJSdTkAWGnBVxZUJ2N",
  "key14": "2M19dDmRXdeL1BgTJknEJWaWnELTCHjFs9HQyUU3gUZAtePseJPnLqe5NbtDWdvg4R3RhFiHHThc2JtJAZk6bfWg",
  "key15": "47TaJ7NoX1S2psvUazcKmkkj38Yy4sxYtcKdxE7DdvcDZxbbiB7QHsJ3ydFH4C6uXXdtkViHis7Vb7Kw1A54DNJ1",
  "key16": "5ucF38kvvDpc8azXYHyycRMtHGs9paSToverbBQWnVQje2SkWjsUKPPjuQ7h8w1813bfmurshwgMqL8yXgXcew5K",
  "key17": "4uFXkFGGs58QDstPvnpxjDSdC3MHsbzG87SygdNYYNBSLfJq34zZTtdFsnt8LxiqWj2Wo99dE1pNU56g8w61DKcF",
  "key18": "26LEGsHpuvEjtsvzmbUDQhw79zcP22jjDfVLr5R4BdAUt4EwXWMrFRqbmQQ65QJUnySmwKzv4HMZAAd6fEsxPUVh",
  "key19": "BeZXBonDMe463nCbvUb7AbpjZPyzmvdxiBrv6swkbkesCjot3iSqcLdbHdYZZobEyc4kHiNW3Q6E4CRqvNAS8YZ",
  "key20": "5jWTFx2nRDkPjYoUymSHUd2BGpfPadLksKGMFhEdYqkxgtHxSk27TtUMzRi3PyFAWHRdcRGUa1dCLc9JWmpKN8yk",
  "key21": "3dbDg62DgiA6hmXGbNLRqXnfrmivmJ8Gtfp39pjDKubPPWnsRTM6jZu13Qg2xXDk6V3mZvTv7eM7e4z2zzZosX3E",
  "key22": "4WQFnaLMEqwetyMmPgPQPWwzHE4sYesMBENMp4vCmdG3ZWFD8XdWrUmdwx6bmNDg2Zp3HvcSoARf9zvkJ4auSahM",
  "key23": "24RRXW1BQpRVRhxaq7bdKRAkADyQoMRT6Sn8XRAcARrQpQpE6QLeLWpp6dKpgYZ6VF7o4jqNdtHEEy4zj8DDWXgS",
  "key24": "2uyZXgCHEL9PHutFXNobKsAMarcyKKVYtNtaRkopnL7q6jgimbnV3AJMbGeF39cw5eFynkod2WxmzMTK1EanbGg1",
  "key25": "HdggCow2PsFTd7TYE62MVZzSLRV5wZXUTfjMCtasiMM69VYRQ6Wgwjn5kJSD9trPxbFhP7jjJ1zSsbdJmUiJtjp",
  "key26": "2x6hgByBJNS7W3rbbf8kePEvzvfLa2a9GS5YRxFEogpBJviFrwoPsFGqjGsi5PG9DHgEK6wz9WUtieKhhRDddSuG",
  "key27": "rkLgMtedPr6JUCbvsKY9jicMXw4fAAuVvAeTS65FfhEvFkVo3Gc53rqiFRNUTm2N4mixtcVnkY7dVypoygy57Vy",
  "key28": "5TQoV3xQawpVufBx4ECxpoGTJpevsD6W4hhjrV6cZiQsk4aXR4HMq3PTgcPVbApdBgqeUWXimR2uQGEY57uUKRBQ",
  "key29": "3FHsbpt1vcr2r4vqb534g39PU2jjt25j8cdSEHHDgT1kskU6EqBPQhy9Bncv45cVK4TtpVdZ72gepB5apSWELmLh",
  "key30": "3UHSkUMZ7PHJhSDnTNeEenMkvhQC7Bpr7qf1US7vs1YCvqs8AAsi9RvMnx5BmguVgKUqaeq7JERufZpDpWZPdG4X",
  "key31": "4TEnXuEwLgbVzSa6kBToeb8YpkeB8wXeCZ4fNkD7aQPV25cQTVFNVyhJL7iGNY4ekDTwgun5h1azEsaVvxub7vQn",
  "key32": "5Lw96YLYuLWaUZ2ChNgeNjSi79a1iqXYudRDiT8mQaePkStYrNAJgxhW7scwheYcsLdh2NCGH4pa9Y6QkaWS9AqW",
  "key33": "vGbMHMQw5hQtshidLxKsGjps6LefY9JQMJGrZjCXFZrL9r1bxhXS4sUTGdT9hrPiCwjkFmA2gk3RWoAQVUi1wuD",
  "key34": "5SBhUV4wjcJ1mZCXtrbRfViQRoTxKfVpxoJrfydoTHhEXr9qVwUkEQJkZnuAP59j15JfXaC4nXNyDE75rk3YdQte",
  "key35": "4J1UPGLrRRwKkws7cA4tKTQNA6pp5D1abs6nudVNxX8B6M1dShXH1gu2j4ghiXhreaxsm1U7WQkCiZ6KpWBfCcBG",
  "key36": "5ec8U9WbKsgdNa78yMXc3FxX1YdY2yySWKvmjJ38CTfj3TVWsQ4MJExaxESuijpwvmXtoPMY4eLXsgdVzCiDDgYv",
  "key37": "4yqxMLLTPkbWCNgunnu8Y8HshzzmKriZuFViKQxx734mDVCcRsKJtFSyrGdhK7QniDgEtUXEfuAtnrw2PESQFAb"
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
