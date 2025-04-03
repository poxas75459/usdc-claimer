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
    "nKgefG5Z825x2b18FGMggLj9F8Tcb13gmShQxrSvJK1Aot1Nsqen6fXesWQvTxmhDvm45YNuKhnkCziYKkWDfqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8v4zCgeEFxTrPRa5BY3RRro1tcmXXET5KPPLXcQKbCfUAPU2nxjKom1y2oFrUX27fND8iuuKKt9KwV1vw6AbWDu",
  "key1": "4VJLFYhbjf3r3eZ1ZDYnYphKgHUqiyaMNfm8WfxBY7Z1WxNJA7iCzZ8qqvjhk2UQFH9qnwEH9XMczoAYQjazjDmV",
  "key2": "57BZnTs2HMYyPhU2LJCmH7LHoTbkDGaNWCS2gPKYQUXa1zXiECmavT1Zffd7PDEcKFDh33uGQoB3HR6wEsvGaNU7",
  "key3": "5EMRDmquyhUkcuikpneEqfGfEKdkYfr2WTgcQBiTF7uiCm9KR2FHt2UdxEyB7dcnSnHzUFa6fvqvfcoLMv55htcG",
  "key4": "4PoTzxeXTyyWQ1xZWFxdcxVM6HHuu7UMfqnYyPXEyuVg89xy2wfCiuBKUTKaPuZKscPEPGJ3VX4nxsb5SShN52XY",
  "key5": "4g4hoT5JsVJPehpKdD6qswYBFEJs7GhfzzwKr4RvKBVDzUdyetDZDFCJBHFxeFYcWvuM7tPDKH1eoHuveoSPdsAK",
  "key6": "3AfZvSzozx5ASNeNdeRj9SEgbkD7GEkYFvgw7XuLv8xho1UJz7StJanfX3zmQoV5QKQWwHBVoC8oLwFTgTvjyvji",
  "key7": "Lh6NJic1AmDg5zj22KT58wXa8u69xT4HYDTzbKhRhkQLXbWR9ohp1NoKA1Eic4Cv6aZ77FJEAcGwJgpJtDYsuwp",
  "key8": "4iQLb8EnTxFmxUpAyDjH6Pw7Vzfc5Yc8gyCbfeToRaS7nfJSfYEzTJWz1RnZnjSigJRqUxXZBS78W5d7hgafrUtU",
  "key9": "5QW21NwJsD3jQtMjFMHnVDGjFbCFNKGPF6mLtFDTN8ydLvWPCmp5ntZG4S6JUNLSCm2GX5MszDnRGLHRYQKNR3PJ",
  "key10": "agXiVrdZrfHVZDgqzD7pBegUCaDzVw8yoyzCLRJwo1WvbBZT2jFwWiecMWbFFdbZjUy1HXLiUnLhaPwnzhrH2KR",
  "key11": "3WCveWu33novF1Z1EyHpA3BNELNAZJEBtKKQ2kJt138EAoJu6y8kQnvHu2xQC6RYahuGF6rJpnJggSbXzNrCSLtj",
  "key12": "4SuZCYYBgHNef3potQ7bosHCgDV4NAJtNBfinhS9LfgUrGYkndwegwPZ9vRMmZofq2pXkqsTJzUNoXCB5VauP81q",
  "key13": "5e4uuoqS65GWd66xqYNwbFvbZJB9QXkFADCzkFkpp8FZs4G4RKt9BWVkZXMQGqwmQBg9ahnduPVoN66qLuw7CNFa",
  "key14": "3QFu8XCeVFweyw1tpEdFdAeSurhgjXXcpeV2iEZKVXoH8NAY5rn1Y5EzxVFb4Pxcr3PnfBiR9vmzQBLVXNZD9sz8",
  "key15": "3UkRc3fSWu7b9oDxuQ6tCEzDabUsFFWRrs5oiPqoU4Th7zaB88KYqaBEmq9veEUee4US9SUWdzwnt7H3GSiwewsb",
  "key16": "XnhsB8Zk1ZcY7nC8p7cSnhA4bd2hwTpCsx44btRoAW8otC3ijyrbXAAu75aWiTy3onrP8f4oa6oF4QQ5iGuYGy4",
  "key17": "icp3m4w1prgicuuAPokCy9FsNrfq3VP91YRh2CmewjabdznCphddEiDacScNBUTZ4X9Q8aheWrr6WB6cy69nYDJ",
  "key18": "4DReo2tMCyp5R978zEHneCVtZaVJ4p5HfhMsFkYYAG2y1rxMVHCox5bXBRAzxqkrk5Co1wmEABuq6kAdei3i3nve",
  "key19": "nnvLLiENNDYLT9JpDM6YJ6UKT8ESytdzPh1ZDmbV1wNNJmfeAT1tX5ukQbAfNFnpemgXNdnXS8T7B3z2xRt8NRA",
  "key20": "254q22sgYpQRQKyz2bGP6KHxRtnS3672yttSGKF6s3FY4SHztTzuhNU25w9cKswgZcLRAeYSBerT7QCfVHu8hq8V",
  "key21": "593YtCTMYKJvMeGyGj3TZgoJZEtWyFoM91P8wBtsQEdb5cmFzXhkmFjMoG7vUZmxCzAVjKrtPRwtav47wnq6DwHh",
  "key22": "39WEoLQ8moE6oZhJ36jLtGTrUn2D2RNu43gU5WDvH88eaYVpmbBT64qbETYMxyqxMw3jEtJBvRvGp2kfeS8cdZL3",
  "key23": "5MaKSMdc4e7QqmMW4Gw5XbRs4mj1sbNoZtVBiRrMgb56M36uLGCpLJHE2BMD8moy1pCSaqrCi5eanEFNrRbytoXM",
  "key24": "2abZBCvFUMqgREnER2xjkj6zmgmYqZBjQeD2c1oSCpD3voLvMWj7gBhWatFpmRS1zsPeLRVZWVWNtHNprQ6ATs6B",
  "key25": "2FSzLFjBJv3XTLRnvAczRf4CooJx2jKhdGJas1DQogoyJmwu68f7TnUy55az8ZmBpiYC5HYVTuq6gWDNSW7pbAv4",
  "key26": "4AtREoy8gp1bmQpn9aPZ8R4HvhpL42y3TcJzHE3Xp3StHVbWgPgn9RhNSoBBQx4GFkGhs9t7VKXv4UcuTJvy4hfU",
  "key27": "3gHt29HwvKm1HRLy6CQsUGZNzJdjL7FACmybdDFjUgYCVwwgGS1hAAYroLabwTNqTxYApS9XaL96pUASC816WqBo",
  "key28": "4oYLDTzAAQRybkatVhhqJBmUTgpQn3A9HYWJZvdds6zzpcnDexXw9q4dnHUWpoQEJS4Su98EZvrNHLeE9GhMbhAS",
  "key29": "45hQ9PafRy65u8inbEoH9WXzzZJDY2rJNQ1poUyhcvoDAyUckvug3NH8QH2MrTWtPYqT1q4FAppiUT9KJDe5HBLD",
  "key30": "J19sCCQDmKfQ55Qit3pkcyzRHwMXynCntrth5mte4Nyv2CExXtZWT8hQDKpUB5N3d9u8npY9oNcSRCbVYrJqMAr",
  "key31": "3TfQZCgz6yTzS8Hw2Y2fJETCqjwqRNxgyRebGXu389q32KJr75U3JANDj2mDQJxCcNQRBizubEsqYB7byUvAfUNY",
  "key32": "5AE3Nsy2AD1CWdFh8AuAncBp69DKhbwtydz9cwPeTsukZRV8CDn8Yoac1rfQqna5Sd5tNEuCuacek1MVAPyMfjqg",
  "key33": "3UW7uJxA3DpH7R97S4qGVWkCPZJnquq7u4GEom2ALisHg2LFkV6ozXAyCp21m3zYd192kG4pfH1wUNp3GFLUsA1R",
  "key34": "2grYx1K52LmdsxzcGw4am5oWtXEC2ABCvyM4r3CyXiMtNJ2vFkCjSXi5nx6Ad1aAnAvAaL6pNAp4RWe56RiAzRYa",
  "key35": "3QT9fufp7BEFFbJLgoNiZvgyQM9faUR1rdLU62QJYS294BpTJUoqcXcS1SdspaZRK4HQJ44NTQJraanZ4iWctUF6",
  "key36": "3c2hFuoYJ5MdTNJ9M3b5G3yf7AFtUwQimP5fMWQwNHwTQpUxRLcqZaLSWwZomcLtwBK2EjizhoG1yKcmVwRLGDf1",
  "key37": "2yPy62K7Dqj5RDVUz3qJbY3uAqmDxmsBGHNWayFj8fYs1YW7nF8Ye7Q9GGdXEZnyJwHXAk5CCkaxV5XgncdBf1Vm",
  "key38": "5y7djaEXYcBNsXFgNHtSgmjpT338f8GDnwdps36uo1Wa4eo6ivoV4da5uQdkZUrCmqauuPfJ7cz3rQWyhL69UAPk",
  "key39": "T1pKAavhYg3yzHvwVDhnisocSHd6Ap3qLqvMSBDfb5caVZFJgJ8s6vrCjCtM4Nyd9PQz4aPx3Bfbs7e7XzgJvx6",
  "key40": "3en9it4UX4WTYAiuJEi5KCrMEi2Ao3qaz7KmuHezCbaqGw5FkQeE6EDwNYAsaGPDa1GQygMivkpXm2X9T6zKyu1z",
  "key41": "4UsumjhGaNs6nHecAraaghGT2xYv4UdxEXK4XSQH26X9AzPrb9DvmoeTcpXahiwvug2ibJGF6RhZ387FRwvfxDZ7",
  "key42": "4qWu8WyidH7or5gWY2jqGd6QLxN1ZJeMyDX3LkjAmnHm1pNQEQ5KnF2w6o2te9MbHkMWCfP9ajeZ9rN4RUP7qyX2",
  "key43": "2QUqz8bH1FdXa3MazsbMi7aG2Fz1RJcc5U8y5SjZrno4xEBRg21VsGgVK3WCYVpLfFKb7mZLqX3c2EdJeGV56QDz",
  "key44": "42tUupnS5Vt3mGa9Nazvh1PcLQ23Gr9GwumrvLSLq5Z9wTuyXWJm7euPeMaN339qTCyjyXK4hAPH8Q8L5uB1XcTj",
  "key45": "37BEJb7Rfja447hQwyEoJfGxTtbB5DttdCS4YHNvF5isfYJZEULTYwRhv5EQE79UGmvTUY2dyAHFxANKu8YzfJXe",
  "key46": "uwWGdh11ZRN2hTStn4cp92PpRbwcqYjLWJYsqxHkxs38t3BVzHEEvvEG1XGpHjcCiKFosQMRnffY34ehQQabhh1",
  "key47": "36DfuJbDyjPqx9KoQLwMQbV8TBYi4b2hPgfHP7iELtEdsrTUwmhGAWmjRY1LomvMUFFzhvHCcTneSej9uuvoTzZv",
  "key48": "3YcVqGduCF65Ui6jmFjUPkm1gYmKTq3hRD1wubS9FhVwsXP1gAvWotDjeopdCUJedYUZd2scNK7WGgmAxrxeuNnJ"
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
