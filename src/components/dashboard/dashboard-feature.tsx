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
    "Puxu75VSgi4XBNcjgTS46rnt1LGZQF6hrVxFbb1HBtbrZGpqiUSmEkHsY74ZAzdsYhkqdJvUzPuaMDhH2QG9GN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcbUsxch93JqgMULqUGvztNTrDxTNyDKMR1dxM9jHfbW99fLGWjWQJLdgF31CephxNAFDFaZUovpvTABcS2MNwV",
  "key1": "2ua8fSCRFpSr3wAAKPv54fn8EM5CnJQnUnZBdFFgfUyoGK1pUM2gmmKXwQRsMfc5L7pfDF17ZvoyWuFe1Xr8DzGP",
  "key2": "5tEn4PTaiCJCTsV6sqgYSDR9TRxMnFXvCa2dx6hofRsZ6YYezrt7HspVX5zQ2B5Nnc4zkZuY16AX76CFkPT681Wj",
  "key3": "4bPYFkE385Z1RMi92mJZ3fYkjkpKnejLgVXABtJeJSFzJkaTvC4UEpVwoyswM45KrmBtFr8uTmubE4XcyaHcY5Dv",
  "key4": "5dm22UQAsu96pakh77MxDQxYFCxJLUVrEzy8kD6x83m7nvzRUTaKXGKj2oFjSsy5RtntcfBbMJLem127P3GcnNN3",
  "key5": "zoggqZbyHPF3VnDDGQskBmQdsBwurfLJUDnkWBzVVHTmQ379uZ8GW7TciSZvwZ3rYCEoHs9WdSTRGEgVE3eVRng",
  "key6": "2bRaAngB22FZTGki8CaKdG7bJSCSJ3HRZVkhMevJannAZZnTWxX1ebZiZerLqBTw1HuUnh4YcQGMVJx9vVnqtrnM",
  "key7": "56UFwxFs8EUt2A98C3GrFCveC1RDFLeVsmDFDKh7GGrTRsxD3RXzMQn2yhFAXwR6Qw32mBwnR3psMSfEVnwo7qLS",
  "key8": "3iQ23asPSuoab1cqSL7hVXvWcdcTgnnF2TrMovJaoCVBdFLZrkkNsSxqrqgn6xdVipdF7Rfd3xiKkCkTVLxas2MA",
  "key9": "C5KSuZw5w5D5PcGwyJwtv2SqBxAXsX2mfU7VdiA2rend6NajQTvbkhcURgRExkpUT6fFofCpRhHKGCWempdQPKy",
  "key10": "g5zdXcKtr22iUTPk6XfNph3s1NJ3QP8QgoMquUmVkAfGvgBKtXaxLBSnV27JQP1wqRk5UfEwYEzh3i8v2iFfxcX",
  "key11": "4jqohqJujctj3sJmKCZxToVt4qZGU47bhz5XdS6tJF7963S7i4YD1p1U21cEmAPKtGfQtsJAeipQqYicAcHzYY3Y",
  "key12": "8dZaTg9awYgShLxySjroeewfcAmJ4hEoeWP7846G2Yc54uZ32EzuiTkxKgKAhx9bkBrTiwLimhUfAfJNRceZNA7",
  "key13": "4djN671B8CeEvSMRLUWnsTTDsJ5XZLtCspDq5DUVyv1HFzZsMfkKwkwwkegtr8VCW3uPnS1bJVqAXVyZejXBafV7",
  "key14": "2y6NWxgr6fHdbce4ADiGeMEb62Hd4F6tSWEcRUE221tWE6h3wMur3fBe15tHD4ZvfmDQbgH5ZQRMm5r97ytvMDdF",
  "key15": "3Yk1qtWzkKRWupW1iJz1UmF7TQEFVhTBybjgB9wGTWPbbk9MJs58HpXu9p9rzTUNKMTLAPPka5u67wEfjQpKKuzU",
  "key16": "2wYoSPem2SNgJyeJrrfHgB8dVKD4ewC3gjDQCABRdk5zmj162gdkjXJFgBXz5e5a53SxPtrchzZLbXCfttuyM2pw",
  "key17": "5EAbeehN2yNCDchi1mMgEbMWXDpP61W9U3hqggtg7t3QkFWqYQfwQXGTpKfb4HoVpo2hqs1wugD9RX6qEw9K5mLL",
  "key18": "5rA55g3gVpQnD8i2aGFF91jco6aLi6fqoKf2u7FR69avMhSMDRsQzF8MeRPhejEz4HvQyHedL8Qn7CqvH4jVrGfH",
  "key19": "5NTuVxiaRQ6up8dZ7wU2rwxdoahfHiUXJpTyVoEQDi7gVHhrN8hvcN6Uh2Fwnqu3BjnBDgDZueNPNinq5Jk3w24",
  "key20": "5f8hVrZQyYVfsVXY2zAtBPKEdS9QoMve5fjzNmFX6ZKRj2hb5a77RTtQsRXhHHsrgsQxA2hw1MDHaPRxUk2t5q4Y",
  "key21": "sqxhE1eSKmeiSz1S3KmBqbbMUr9DNv6dmJwzb2Unq4Ng4Q63gcAUmeKMriFKKRHeY3uTM9Sqek2wt3VXoap7wcJ",
  "key22": "3sFPFqoucV4FhhTwzCszxq5xjVnny6GooAJyFGuDcHwgGnxHCVMmHyTemeQMTGjyMQLVSJB2f5ph31GZVKcmVyCX",
  "key23": "4pE45pQfVCgtx8WDdVmki7ppQNH2p6Zwn5tXGvzT3GjkF3pnGe1ZC8wf458EUHxoUarnaJjZg742As5YK25b6z5u",
  "key24": "38c8F26kR9CdPi8gtKipBvQZcpvcr6zb6AXvFbPvNXGSmiux5PVTsyh39RCNZi7n3ovUwPfmSQ8ToQicoP6L4wob",
  "key25": "3kNm2Bt5KhrwTRS8LoHpY1AURmvmGoFXbDP4aFbFk2YdPS43tPa6DsEaWGCEpWsJK1c6DrGJ25Coh28QyENxNgpN",
  "key26": "2ucJzNqGEFwNnK67U3hb5kbBssAsSehHKeryaFddsQtAgtvxmjDHfGR828ZGyRgfWGuoC2imBHhM9euTgtcb78bo",
  "key27": "4dmUXqfHPPfBV8WksxAgBSNGzNTiohFpFcLmLYh9ydraZQvC63tdpu5Um7nyBb4PoKSj315tRE8hbz4iY9nyLmcT",
  "key28": "5QWjshRJURFi6v3iJwXmg7thpP6TqLsC1SkTkQppepvHT1a7HM7eZaP5eS1yedeVYrurPYgmwibf1J3oaU3AdaFG",
  "key29": "5TkeTyUVnVRexE12dgSnDdCPqnjeSHomsHakzT7MgADHH7fV9R2yFpbwLTbvBLCwyhnERENi45WDpoMHW4JGe4M1",
  "key30": "3RiMhuiDmZ2At7CcLZDRgfGLnbWa7JPRAFBx5arN6Qo9CQbTz4nMiwBrAPN4dfSuQcKJx5t1JnsfrwfQ3BaoMeiV",
  "key31": "5N2SJuvSCR5YVb2Yp6RS26ZBi8WB4cGb3XyEWmcMngUGWGCXMHwoWk8eJ7vfGVc8ys27jgVX2cosLQvpPQ6SuvjV",
  "key32": "3BrYxbALFKPuxcrqg4RiKaTVFoTq6DC6bunBqbskNfEGMhMyiqryJzeCb6kZoZFeDMTUCbLFnjafxAhfAyMA2roP",
  "key33": "59pkscN4PnMFAbRZwBVCQCm8tFqmw7FrBB86Sn6DzHevHCwACbWQHGzzPSoFEtD6ASMzv9JJqZ5sJEaVccZgBfnv",
  "key34": "2pruTP2Vp2QQ7UxKh3WntbpBeAFHmFT58UdsxmjuHvn4VJkgQdX5abkMTq6AFH7PrGhwMVDvfkopMZ8oQzAdaYRp",
  "key35": "32gpDMLVhcoCziofaFFztW2ddgK7yjozh9h8fT6XXbvSj5rZMf9gVLaqahtGzWYXvbYMVzy6RrVt5YZBkfnJZ3BV",
  "key36": "67YWN5qcXAxXAsLGgeLF8y6qibbru2aMnXBxfrofw4AWvTNXfmBAKZLjCY1Tv8uzDAcFEWKoXsUiVT2ah2w77SzN",
  "key37": "N61syPM7qxqp2Di8YTFk7SXUcHWehhLuQMgYjkaEP963NPK1HZxDX71EqqaaXu6XmWgbdfWCMtWGNZ431cn7nay",
  "key38": "4b2U2F3ffJgww6KGBL2sJq33B4xCh2kQ7hi1ucz2KUFRmJBoVNpY2JVqoigHh2o1zQN42SjSVcSqijD5CkWgnHga",
  "key39": "5VrS1YAfMt7as7PWFudaJHZPxJUo8giP466FYnmvFd8N8VfX9wcQTFYDZEAkarqiiBmUYGaoJMBSLCnfS7itkMed",
  "key40": "284wphHtbsZokVjkQf9Gh1xD8sds9AhomF9xM5s3mUSpHbyMDFQR3kYNoGeCaQNAV1xMMQ7yBKeccgyCDsUx6VNg",
  "key41": "2X8FcuoWfLGbG92KNT4qbTwRKkGXKA5tfaE9DY8umH3nwpZX1M7KChZHzgApg2nFQuYGkfCxQQ6A2Lg7UDkVSHMW",
  "key42": "inhZsAiU4sKosdw7WMVTDBy9FmSYPMQVUV62xENVUQxEtjm1efkd5xYMoZ3cMst1tstz1iDLesYv8uvjvnXfscJ",
  "key43": "WPyF2QPzShmZ2EbduLCS1qHmS4keECM4t53cAtg6niy3RCdmZJh4Ew2QZCpxeZ8gYdMhCerEf1LUvy3UaAwGwEG",
  "key44": "4A186dvuxjEHBr3iaRvtudnN9mKV5SzB3nvkSC3tvj3xagLyVL9s4AuMc7nV1Xe1Bq1T6m2J5xMCDZu2yFPnBN9f",
  "key45": "2W646AFjNoydazRBUF5om2SeZb7KdgxKN8BbwoC2NCAE61bpy4ViABr29ePkFQ4rSQsBgkvov6niLw2PMRDopBGo",
  "key46": "NBM4NymAupg5oAC5Hi3ReXNYjSgb2s9wfDnNatZrg6Xce2r8NCM4wMVxF3ea7oDZXUhWQXTVxJViqNgJhXc4Rpi",
  "key47": "fiHub1RE1EwVDyx6MiVH4W5VZj6waXnSNUKDtR8MxQsi4QYnT3pFmW9p39WDogCtHRhQPWK9rwEtZ4Lu1FKiNzT",
  "key48": "UEZhWqoURiKD1MLVZZtDrTgydd2c8pf5eQQZGHPf5pimWTE5NEEpneiADByP35G2fmteFJvEuqYm44Lib5B31WV"
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
