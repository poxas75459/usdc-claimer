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
    "3BtK4NAZFiH3nP1LLtKBjwoK4uaDtyJeuScxF29XYWf6dm8YAcvf7bpx99DQyDM43NfQxKqkBrYWC9ELAk3Nntov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJ3HKF2jwcCrXMMpdaGw4xCGQ47H2eZfxQ1DP2o9NtWSvFMyY7XRXQqrCxBgtk7ESKXfDw4SEBe8r3n4JcBUQJ3",
  "key1": "KJmJXVDj5izHX8swgu3WNuW6qrNs8e6iUKVQKDBhWbPjFG39yQ7AUESsowLrVLCm7by99Soub1NNtJMijdvryNe",
  "key2": "31KqD2c1bcUk8r1gcYNoJyVinvcoC7Ncw9ZPefe9y9r6TS7aqz7tn8TjnXvXTzSV8ngxYLJsCMFpxdZtLAJ8XLDV",
  "key3": "3g1394KA3K1PhCoqcskQzLisuHYNhYVyNuDxy6MZriATq7xgL3CFzkq47dbqgS4WWAr9P7pNDBcD2WDTEEGHjw2W",
  "key4": "3UgjSYgZvaJWd7VkNgFWCzvDNYSMLMJtaUT4Ywgoh5g5ZZzjZdr8haWaaij5yLHmwRdWP8knE2AHQQa2AkjsLCcU",
  "key5": "4Hc3dEL2pqfm1xmcCkGXpR8gtoBSMmS72dbivhCesefrCQFYVSn1MV418kYoPDbSW7JemkkCs7jPGLDq2z8X3yfY",
  "key6": "cs8RrpH57xFbHQCBXbjpZacjXndG29ZMxsS8SqcHZdxi47eD2Tqgw87pGTLr1TLzEwHb1YHE1wG8qASxoYSvHtq",
  "key7": "47MwxgNRnM9VxQ3q2kEotuEfUjf1fbo6EPDQfGE78Via3V1rUyxXhUiiAsnpbe1x9LkHFx1Um6jJWLr8Zog13iLu",
  "key8": "2Vx4e9sune3tA6b7tsaGg8ASkWbgGXz23iZnHszYhV9pQh6znzY6Fx1dnhuaBMxB6SzHUX6gYcXR83jWpdEkTcmy",
  "key9": "2U4wG1q8S7z7NcSWEKGNssCDRUZtv7SxWvqhy78sk4KKEBCiHNsu9v4vJp5VPWR8xfWa7VvJdm5TWhXH4nhWYzaB",
  "key10": "4Y6ywg1tchqGHikvhEMEoZxmH644iLnsrJwPATxF9nm99rk9J92Sn2VQ977MLXuesPK77o4eWZVpHGayors4z1z4",
  "key11": "2MD7ukUBdaZCiFN5WeMD3KF8shVzMWEJ3b2rpETWYDRv7m5RyYWdiPQ86td1oZkHC593mqjo8bK4FLtrpmEwff3z",
  "key12": "2SfWzj5PSUJfvKrPNmjWFa2AnbGuFeRFbQLKUfkShfLqpD5XWHJxRqbEt5PjV18oH2dvE8Rb96hKr7zQ4iryyaoP",
  "key13": "2bZpmgDRgHJkJ8ne45oUu1jyvBknHZctt5DHqYMALFY6vipH734fLGi9piaupVKBTMHv119qeuH2oZV67uF4UWVM",
  "key14": "3PVJQpeq7LUXzTg82srQMEGyzkWVsMZu5G7YWbbSwtDUmJV8MELzJ1H9wRYrMhazKJF4NNowMQbdXVM4ma335kdN",
  "key15": "3jHTh6CiCxuZ1BffgCLGaVQK91bnmkkvZ34k8Jwc118xKZCj4PJiHTWv1aA7XM6DEBPyNdRx3oBByUwzeqHL9Q89",
  "key16": "3rQq6FFEPBhfLL22tEWdLJqa3p8sKS2jVDsUr3dQu4E2mnZxYT3seohmHD2sVtdWGC1BewytBfMKNjuari67dX7s",
  "key17": "3HphRhE4prpfxtzeV22dL18FY9sizYerHj5j8jUu9TrSvdtRw4AKjprSxoKJRugXnxgASYKgVKqXFUFvF7bwT5xa",
  "key18": "37Pz7qGRKW7gPzpwSDgKJMCTt6LmeBebZMSnz9s9FCx8qz8kEhMTryj1PYhkYmuguuJsgApZo6ft2pDY1D6EYXEL",
  "key19": "369SiE8xQCuxUvYAxWJtSqcbwsWugWBkGQNExWpLVNvgiivinuK1csGH9XEK8gBMzF8tniDSwc4cRvsFfUruLbdw",
  "key20": "5pZJpRzLXtBHunm6ggRtp1o2dT1xNeVgn72Mukt9TBXBxXfzrvFPtjCFtAPu7Xyf9f5FbsTcA6SuVdzZuerKKLcJ",
  "key21": "SdcZTKtVhqdPjjoRWRByq47QKzZMeEPHc6FzbJtK4awVRxmvZM62stbTQrNtAa9wHSyCJDZBD2ChuXpfesy1Txk",
  "key22": "4pUXDdZrVZNCFWxnSdaS7PzrG2yqSJAV9rpCgraXgJbo6Fjcmi2Re45miK4cbQNWmmmePyr3aj7ycSLTjdaYPF7b",
  "key23": "5W9znrc3JagTNG1zCGfhz7Nm5McFdcQctiwC322YZJDLd6982Fy7P5gURUmBDNUEyC99SGLGmaTdQB7jvGeZCJ77",
  "key24": "3zTbxWAwz8qnS9gwvu7Q2qhDwF2ts6abhTMGB1s9cUP7wvBcoj42d1hfTZrvsjanzLfwrYCUyfkJ1uxqnV3vhWLZ",
  "key25": "2e6Vmz2PME42c3b9Cjr8y4j8A2WqAkvfxx9K4Fkrr5vGmGraALEXJ8xHzpYz1cqN1Jpm3kNQnZUVGJm3q5vTpasr",
  "key26": "45jERYKxnTX2Da7VMpjwWXDTkygVewkp9KgbVabPgb44gG29gjHipXd9eKozQJ3KZP7K5jfJLJKNKmdmrbjCRVLw",
  "key27": "2iWqZdnb4K1QUcrWZqU158x8xq6UREFMRtgX7AK8B1npnQtMVsbvwbUei7YZbaBs4oDA3EeiHByR6mLH6i2kwYTy",
  "key28": "3FcxoxiBnQsHwBvBhCJzaGY1nGxyYfSCfsmyh5s8JLBQgNm5h7p5Rcgq1LCaazZPSDxqbwfDgzmxJnAQJDigH4om",
  "key29": "huhXFL43BqvNoiTcTGxFxhjRkCaknSncjw6sMqNUqW58QUquK6fS1moQ1djFsrdMTByHazKFR7YLNe4g6x7ukWs",
  "key30": "CpLCTayjT6wfWZuP7bLaxeka4iSmQn6SN3TbLVyJLefwAS6czvgkc5PuPZ1QKT3AK5fKRX4Eu5D3S56ogwN7MzY",
  "key31": "517cXdKwRxXJgbZMEKH12oDQ8xdnZGuofMAVCDHnRYGZKAfQT7sRPM93RRZZiz6rkiYm4238dKLTd3z6xTw9DvCa",
  "key32": "4FcF2U6RnaiV8f2NJTJqgWsq1GnrUY8FzpNtpfrzcsNhL3kkKGdmxMgxydgqhun2WEK33Zy8vTMbPPiD625i4S7P",
  "key33": "5Wn5W1TaTY3QC4zRYFQTvPsbNkExwYEQeoJN6RRxNaAzyQQrQCRxtgofLx6cNHXzCqyZ84hDtmr57MJstHMJQ5rr",
  "key34": "59sAnTrtDmrBEBR5Edr5RK8HXuzSdw9D1sWKDtz3TtgZJDq6T78evMzWfk89AXVmwdcehvqqVmabeN9pnimK3yEy",
  "key35": "4nLpPy7T8rgewDKx98Ad9VYE8Yn6bPzRTgygcPUcRMwich7L7L5QFKwugVQBt1X3tZx2kocvsW9aHopFYk6Don72",
  "key36": "3scGLJoXDM33RUiM2awX2okN7G8QGGXf22Q5cJ678rixRfEvMsmj51PLQseJ9S2UGK83a8krW8m2vznEkpDD6wvH",
  "key37": "4HDHVSyXCabcGU22rgN66qovu7mXGxCp4hGdXj7Vwkw1ANUC9ZsNochMAPjLwUcu9FFF5nusMWfAsN5SFBWjRpRq",
  "key38": "2VVoXeRkJ6JeKE4A74pxMdxFTERi7ffheEhwahKHWQx4WHG1HcZJCY6uB8w7CUwNUqkzJM3ZaSMFny6GceYbHAMu",
  "key39": "eR52ER7RQhF3TBGLJbSP6NSEaeDyEpXp3DnZG2dRkE2t2curjBFvxspTrGWU3BQQucYJDZhPk3S6KGA64QbPR2j",
  "key40": "4G1ifZ8yrk2VegJvcKvWAdNctuzxv9SHgeYgDbjrW1SB2R2GbgfMKcL3raEvx479fCckfwgnkZAp2hHQPNMG2PWK",
  "key41": "3Nm5g4DhM8FH4PgkS9sewmsqeBJG8UTLh294ekkBycU5RAqMXYimS5GHsxFet9VthpuSvKqdJAWHWpVMMYpenjLF",
  "key42": "54jefytKf1VgAmDB3mWaVFYaZKFzbxWryjPiTsmbm4dEyV12MC7FbT6FvZGXKE97tSuscARZj93m1mkMrKftvmHV",
  "key43": "5nDeih34puBs4otWaonLmNgVduYju2uDd2LJRPYjJo5F9r3hvaAT4DzpNadN4rvKwPWmn9s14nFD8FZTsBYLd5Zp"
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
