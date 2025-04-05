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
    "2D4CiSFeXkBHewngXNGxyR3Y1cLB5Funw2Q8zVEtXzWk1M91N1yivkunPn3a9sFcaUAZjeRrCLRoXe8Bofhwe1M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55u4CkmuPH2QSFdo6U2qMVbkwDPzcpJNMmKDMrbgcFWb5VUcT6UuiD14ddRuHreEpoRb1Sy694hw2U6CmTaKZy2x",
  "key1": "439azMyVnuv9VnJFBMxVCDNvhNuCcUUT1vksfSJSucAGZU4cE88wCt21tjSSZHdyzGwTeLawqY5N9yYW7hknF96L",
  "key2": "3mxs35BT8sMQXdPHuu7yz2bJPN8oYsXugPZKzNEmiC5CNNfrYMu3AxiqZjzzNmQC6nkPcXEy1RH2Lfp2SfVhKVkN",
  "key3": "5SAzLUeyCAJ7sJtcCsdTRZc7DrhFBdKDnu8bYQ95QCf4AWoghphVZoKs4thdXni5txpVWj9uRnAmvm32vPM6Saaj",
  "key4": "3q7TYBLsFjUuCEE5j2c3U3g5ep2bCDXKhtdWXDgD8nyDU7QGQ24iiuFmYTPk57fz9o7Hmztz8LjHAEQChnryogA1",
  "key5": "3zxoV41xwuER7xdPQNiSXLaSDhvvKFAVqkvqPchdV7YLmznZWVCHnZtcFiRpdYQ8XgkKP4VvUaReQCjG9Xhtveej",
  "key6": "3azcznoMYipSchUMdhBeZ4qLHfuaXnT3ngVHwVK3LyUXBUrgEfjsQc6QkuTaxCbKGu36BfNzG3bF7j3vfPfBbwVV",
  "key7": "r6wDtUmangMhnqFmJ4KhSqov4Fc2GhPz8QMTRiTCUUtQmb4JQnAhDRd7z3zG3JYBq77c3tbAoHZrhyKSPyo3XYn",
  "key8": "eTa2JCY1S3BM8Pio29hWWvLjDTjBmoiNomVAcat5SoYh8AdH7Ak3E4h1g6fWqVNeXoivd6h2HoyVcLTczA9viKZ",
  "key9": "3c7bbL6kh7pZX6GQwrhoRVMQA1moD9ea5qs6rJT3ra2Uia9sfWxoTu3wyG73W1WiJxfBo9AoG5gPrJPohYZqsQPK",
  "key10": "2eQHgGyQkp8BpEbHYQkNpoGvGxVTDa4fpPtCXB1Kaigbs8ZzkWc8YC7xTfLxu3WuiecCJMZsMsVyK88BEHvucgg6",
  "key11": "3pgo25cXAWDuFJfohBT5gmBRHrsSB5iqUcfyxcxuJWUDwaJJwrSDCMojjgS9hsMUnkY6ceoP3oqbSZCCkRQvAsaE",
  "key12": "MY24TYGMDW2Z9dXVG8AX3d72ghNpookvbQuRiRWqngtqCLwhDD6RzhNUqYeQDApKcDWJMhYEE2rcA1tDozggN94",
  "key13": "5qviMs2sfWMABLcNzxM1iqiZ7f3JDCiWw2XhcxHAB2EqoFM4u32GZs6Ms1gbYsyCt4vskwfx3734qEJdUCKoVHZz",
  "key14": "gzcADBtBMeZMJtrcVFtQg42gXVQVY1RH2jdsL1wKiYU8UYDqT84TZoHW9KH2APKrAm2NkBZsAHubUcxD7ArsnNf",
  "key15": "64pctM6xTiFVJJtFytMouBdVK8H6MPB8CVZhNGmhcgBNcvZm3YoGr3Aav78P7navgTrZtJKz5ZDiXyHBbdLzkubi",
  "key16": "59zVynTkdLjnhYutUzKN9yi4YvpzuemBaoeLZZ3eivnKa1X8SvnoAJYPKiWnParRUxDmkDaLcQL8SAbtf271j3bQ",
  "key17": "5nKkE7VQhqnjPVScBgD6C2CnNt2SzefvxE1QvYHcoeVp5KygFz9mcs8gxGyczioqmwBjDNBtfm2mqzoxmiL6QwEJ",
  "key18": "2W5mUHF4kXduV2Gh4s6mB93TiLrqjXtgy2b8JdJXiBmXxjnQ9GrkZf3vErAB97PNnZ1tDUhKPWQz1UM1EEXsVgdm",
  "key19": "4Dwi3z8dtaqwMVaur8VX4zzGis1U3wCEeoGr7to6HpzoKoXwTRm3kMZESRo1iFgtJ7BpxjnCRB1Xhge9ffmq2gw5",
  "key20": "25jTBe6ij5Wsvs6TdhyojLhtQuqWAtiB3ooWTk5o3Dai2A5RBKWAdPR2vBQPiEK5VQa7PJGmEqyAsW4Dw4K3WX5u",
  "key21": "2g6d3sV8ZZzqCyzwPJGyupLG28LwUopsjGUwcZv5TbJtRna454YYr8Ry9Y2MtgneivVE7otRsnshCZTPHm4rJfTX",
  "key22": "3WnryraYmhfUXKqbC3BJVXGz5jHotwmTvrU9uped1tEh5jpSv1YvtYCv3DPHz5oGS3vQLSUUNveBNUt8pSNg2URh",
  "key23": "396yNzGbJ4977bZumxXwBhCzQBQmV5G8RoDi82dmEFEKd5vxHJehXiu2VYLF7kJjgk5gsnBEBuX7XbwcktmeifZJ",
  "key24": "UEESRseXMLSUhei43QNVr8yGdDJ2iVnLGq3ommAS42Rt8bsuHqjd8C24DVwu6DaiZz39nb6ucEXKPVuawUt2GP5",
  "key25": "3NzmtijqhsNdKXYvAkRe2XVhzeNkWiJFHa7pGsNSqW5GgfeT1YmEZCoMDfzo4KxgF6vninm7N5fTw6LgRHQJak4D",
  "key26": "yN2CjLP3cJw8bbB6nnqePxDJqh1uzwR3gnotNDMUiBTgnsiQ3R3VrvfVdRnZWG64Zjbk4hZHBW82etLbq6CF8bd",
  "key27": "4mMUqXMNq51q5uDT5WqVdZRgtvguk8Bwjfp2Gz373BYJwLr4ZmPXpvzEaVDuNfrroA3ZwPxbDdbpm8CDmGniG5F7",
  "key28": "4X8PemwymTtLsFjAQtb2zNg76jYArBNm9cKyg9BrEKoH5AbtfgktxNBEjgyq96tqQNKoLbnNacBrfaKVhCyQqdpo",
  "key29": "2SqvzZvnftt3tcCcxNMGw97MgygrFbV2hbX7WXsyVRBL1CoDQvxMf8YWks8LA1tfXrBHrtcdVZ1hX8NdgT5ZZxEn",
  "key30": "4Kvu35rnfx6aBJwGsqGvfN8yLxa7vswUmmADWG52JhZ7UpShxyHg9VeRLx5NLY1Egjj6o3i6CdLWt5bCoiWfqP1S",
  "key31": "66S2q23BD7q8W32sTjxRjptTsQ15PzEQrz9dujmvik4HUUySsm7T3myzfMhYwKJxWDL3P5rtZpv1yPFam1AVJr5k",
  "key32": "3inBvGFGwEzcwu7D5Gp2AeuGDBbKxsHKWi5mtqRbwjsqUMhyVRMCFumExC3aa6jvfZ35qqTmNzZc9dD8G6iQczZJ",
  "key33": "3NSWw1M5xJdYf35NytB7hjjAh4XAVhKEMoLzBadbRwXaTNuBbnfyMYKzJR6kJsLNuRPVeHHHVLXZZx8kSR9SmRLp",
  "key34": "34ZZuhNKZkWH2nEXETY9y6Cti8qgFqBj2EvpYjeoeVgLrzCwYHcgMH47Co5xPViSKRicN6cEDR3ajMHFuj12FTev",
  "key35": "4X2nbiEBRXpNQvqu5cP2PyWaFZkRci8RknKzzCpemkG2GavtndiEA4NgSZm6pfPuuW7NedzdmngLFXDFcy8xVK8T",
  "key36": "3VQx5rex33V1nde88m2zqV39nVuA4MRSseW9iyTc5M8cDsfRJfGupnAQRCYXbHddRhh9qogexfM6Rd8QKK4K7Pun",
  "key37": "3GCfFz5u2oytEaK4MavsNuDYLb86w3mvszN3bRctMWdryGtDAexkiBA8z3749jxvHX56AqjdPsTdeiAt85WTwrfg",
  "key38": "5N4SPjofxz11JA7gbEsAmxjkSoDHhQRSaHxSnsbpuvXjfHjPmB9dQm4BKA77dzeUwm8jWza3VaGcMQm8mHeQUFbf",
  "key39": "4YNADLA3xYzWKjYPBYA6DdcJTZdAP4wGPnh2mUNwG5P2dvB4Y4Ur3ttqJLSrjLnh9kKnFsSF9ZPQt3rC5hyCRAbh",
  "key40": "4q8s6S2zTV3PLAGe2C3ZzkSHzYEdDyCLwQU4i4Wrag21CQj2AsmEvo1PEuuQtodptuEioajPxnDA5UUhe8Zra4bL",
  "key41": "2eRm3ftoso6KarWt8SfP6JWAoFMaNryXA2Gpw78TG57bJTsS3gA2JuSb7zcc6Wv7VQGDLDd6uXah37YzwQKxi1rz",
  "key42": "2JQs1EiMCkmbMy4MsHjwcATNj2CpBNFSBQTEjqAoMJX6k1YssDryWCstRkFf7fyF5AJnchRbj1poHdUs9Ux7VmKL",
  "key43": "LUfWscrjmxU5R4YTv6juNk5U9cBcSHKz3sjGqsYfhE7M2uU9M4NEExiAbQGLUoD5g6dW5cU3VDi3QLHxmSxpedG",
  "key44": "36jenGqLfsbBkikKFa8vVT4i1TX5gvcrxxMSwmZt54kxJGXQAPoDYKaHbt3VZFkPahJJ7NHNdZENRtwZssLNJHfa",
  "key45": "31WwX6GunwjijUL2xyopc9zC6sqken4Dt3ow7Dz2o6cgSeERjDEzxxrcc6VppLckscaqsFz2yyn3SGiWMXyqu4qg",
  "key46": "5M2mttb6C4p27Lk4NHu4QhUh8AeKNfQHFBQS2mZKBuyoHBV39PUvMg8c5pHFFsFGjsFg6NJeMpFhmjuUfWUHtMU6",
  "key47": "ppxKgDRSTeZeHUHRD6aMbmGnVUpxksULPPgZiuhv15if4Fk2fghjUejyv7praEmxrrZfjoH3pgq9NZzbdZDXThb",
  "key48": "dC5gVYvKUUCugx9PRSKobParSwbnWkmi2JEbkwSBuUzfJmv95VmgffhWdURSPexVWw3RZHB83FJjH4jsAVTQAUv",
  "key49": "2muBw9g6htfZ5nhNFBfuSbzD3Z1yEZE1fg6DgKaqPbL7PpJLCNmpfioBPpCXK6enokxiPmgoxcj6v97eTV5bovCk"
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
