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
    "49o9vDS2Vw2ABhGe1J7yW2qUFmx2MoTTvq9YbD41sGPqWcqFMdh59uGDdR4ZEaKVnExStSKqBJPC9Pn9UfXqbnmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AZ8Np3FGL7JP3mQ7mFM9rKfPzVc8QgA1Wa3bqDFy2Xk5MbYMZEbXQKbTDRZuxDfYXtRcknCJ4p6QhvFLt8SfPar",
  "key1": "XeDkiBQ5oW3vYQ6Ew1GpnFcWzLuQV5xV2udL6EUuEZkohoU9HW1ghxPU2iPWWrMcns2mZXHeEviSmdw75QBGqzT",
  "key2": "pabhskK8ZyHGEHTsq8v3M7kxSeNZEw4UoLPSwe1p5NkDzz2KBdoPfVgFrCwzjN1qkYwVmUbASr4QHVZyNNb9YFK",
  "key3": "jcCwU844U6NXrNvoogYzD65atdtKKc97HLHnhT85sW7HSHBQFoMG5N7Z6V4fRULG1FFGfFoC1d3u7UFHUvHpUca",
  "key4": "5kDYz9fCc9bMPHVQfNeekptpbpw8s2c7ZkQxWJLjhghxn1y9wqJWARXscccTbuh49RiHbnfdjSFZZriP6ZSTUeH6",
  "key5": "EMGfyEb3oX5FKn3vcYbqSqEr1ri3ExJp3CMZ1d8WsTKic7sqBNQrZsaiE8X193qqNWUcTNpiP77YWyE9WKCYF62",
  "key6": "RytN2sU7b3xpgTY3XFuPbb1APEBWZ16rmvWEyrtVaZTyU97eKwqYF4r3HAve51MjCS6ofDNikzNAsteYKo1Axzd",
  "key7": "3Eq2Vmoz6Hck7wh7HB7ZDSdDV5jcHGVQppngJZoagPZawbPkxox9o5A72kiQGnioVgrCWehjs8gmkGmx8fbRfsEu",
  "key8": "35s8UXzshdTQ8NVy88BKpVVCJGdHK5h2QTjEqYu7wkfQKzxDUPZi2DQoqvkd8QpX2rgYgBVAUmbxemrkCHDwcaQA",
  "key9": "5mHMgQ8gmnHQv61itWtCuCdqYJg3Zc21WgskP5xa1hrxF8wAV2XsPMN56v7gpRjbfDd6wUo4vyZS8VjdJvHiv81a",
  "key10": "4RyDcx6bJ6v9RV9LrVUNUs9WgJTrmfExGzymhY5KevQcLBuXBhzQojH5LWdHcmV79gwqaUe7hYyTVUz7HzKv7Nff",
  "key11": "5FH1PnWQqLrcjajcExU2XuWobkKu1MpMwNLbPTVonyfiM8qMJHY7Z2o8iGnkbPVcTgqRJTXECpgQ12kEU2gZRaTb",
  "key12": "H6P3mtZwieBwr3Lq8hWhTZYc7yqPohdTK61c7TpVaDcp3TzSUKyiV3DVLrcWLHfXpLVMpktNSYar86GUQykTJwC",
  "key13": "3TX4wKvpe7MFuRFmXeH1stpmqij5X4zjigMzy9bod6DoPjnW1nz7QRNnmsMq8XLeXjLe5KJkBnJEQswvwJb4GmvK",
  "key14": "2bMyziv4WPKCVwDtj2v4MmtWPQhtJnYDckPV35TerN831fspRpmbaxWUvdJENUxHW9TpL8ApA4cmH2v7DJkKEh7x",
  "key15": "5oJzp7Dbzd7665LSyYq5Si6HNZnc2BUTpJFWYA4wipQMfHizXAUiew9P8TE72Ekr9t1eaR8bZuTHCuDfZc73tc7G",
  "key16": "27J4J75QA525PssUu1f9nnuQhpHYBVehbVeupDQoBhZqbEj8ZMA5vUouDCeXo8FfXMH3dZ5EwTztxbQPd7WY1MCK",
  "key17": "qf9Twis38uZTLUkeiDAk3RzUv3GJxCcwDDrPcoLv2tc52rKmd18uCxKPemqDSFzdLAmrbjDqMAxq2ggt6CyHYFK",
  "key18": "5K3BZz1BB433tQa8EhDf1WKAWYEW6RvsHcDkinqbNPDKENpgghBQjCsH5iHVGiyHcEvPXT4MNXLnrUhd1g4uSj7e",
  "key19": "JCdKBrbJ3RSkHWMNHezV3YTDe2GhCY89YrCqETPHbVdRqdUDBi4fs1wHLNNXQsNhirfPqfBtY3WuLfc3UwLw8uy",
  "key20": "2PnmEsERQPdrRiDFjARWH7Mcee47zsiHe5vHD3X7Nn83ugQB6UhZea9ePBLGwK6dARXhUciU66ya2DVyjFUbA5Bz",
  "key21": "cY4UBunA7qJhJwgmLVDqKQDHpBkybA83PnPSfvmbruG2RCyGRM6TxJ4EA2an233k4NYBzgfXkCQhoDePhLJ6qvT",
  "key22": "3VaDeCMtoN9atEQKeRCqX6362HjKZLvYpTkyw3msoNP6gux9J6fLEHq94g5QF1uRNN3VVApnp7Uhox2jrsvXipVb",
  "key23": "3CPtUVXnNEVRYdNbUaXc9GrnqwzP9LiNYUmVQHJvgKXZpaSL5ArsJYgvbETDbYMXzeXp42PUMkHa1usH4eks4cLu",
  "key24": "29gQBvv8g7qMjVoBLpEvBA44BSfpEfkYQNQHaUaR9G2LkJqfsF68oaVgTWhnWvpR1W7wSToQbQu351Z1Y1P6Xuo3",
  "key25": "3YXagik22mrybuNNsYikrQpEtbQc2XQqWAqMToZubyNfjDoEpuwQm4sEz9epNQuVkw51CzBzpwRngmdzVLbdj3Y",
  "key26": "2QaC9mgQ1iaw853XGLcRz8Jvgx2jjA74S4d6rhtE8srM1qx7nAy1EWKkLR8wkvAMPQTbZ8cFoMHidw8y9PcoZcnW",
  "key27": "H6ZPyTZAYx2h8BCb69C5CK563tM1oCUJTK6iGmzXTZgdH7QzBnDogVVLc6PBPPni2EeS1JQy9pSp6yUKv7P4N1X",
  "key28": "2mJZv5qMFw9FSnJ1EfQAAoAiLB7Gx1VymTsDYSbcNHTyiUu2uWAXNjrXjBYayhi5eSieZPdKutLnmGofusGv18g1",
  "key29": "3vnh3S3dVHrxyVKartgx5HYstnLvcyQV17yfWUUSwmthhK1pkkBHk8wFuFbSpj5BHCmjrFKuy4LfSkiaj5YTZBG7",
  "key30": "2J4MMoBzHw6jyvWCEKAsbZLdNbw2vCzWi9vdeeawyL7AAKRsJa4pFAjVKcQoMNfHVfjVHzUCYat2hEzdyaEUVWe7",
  "key31": "Aop7aFQXHMf1tz1gntBxKmDJS3h148YFZMx3n6BS1TVNizBrcdhCCvdFYSA4bybUPbVxj5xv89DBpy6J534HnGn",
  "key32": "3TstSd3dTFsGct86pyeMAd7y1CRq6Vcw2EPwSMSy2tcqc7iVSrEcxCgxXFc7BAS7r2BzGGifhhwSGDsdnRxxZWZr",
  "key33": "4vw6A8hKCxDF7QM7oyKMzkh9Rw6Lr9rVYhtFm8gnvsgym4MrFcnCxXAgSzM4PL9nW5jVDx57xEK77urr1g6NXgK4",
  "key34": "35ruhunimmn4mLbaorSnZBWkGCzPUhPo61kgFquhT8H9F7X17dH6VGHx2NSkJ9ZWFaJNgAFinCSBnDGGy2Q55WmN",
  "key35": "4KzvHT3CpbmrdCNTN2uQkzCNVZCVeFzyN6KDmxBVDJDTDgUoYxLMPhNdYQ1faWKQ59nERFnm5QHFWuuL3whTJM8q",
  "key36": "iYuJxWFm13GoohSoREGNyNyUJmn4ea9g3QvbVcMgoSFucgQMU5UpBusm81yFLgQhCtcUBRuVq4kmkywRWXPLXPH",
  "key37": "2BfYd4Ntxhf3RZfdPmvusQnEHCMQkjHTLCFgqCLFNuxz3KQXsewPv6B1S28wnJLxjxy6zWDL5NH5EsAivx42GzJz",
  "key38": "reYK8jAqCY69czmwM6aVMDadjPxZRvSrEUgnPkYC3DvcqtL7E1R8A73aZrPPuYWHUm1wb9GZJfQZywWTmsUTeeY",
  "key39": "5hJwRcvW86qnxA4g5viRsqVRdHVL91nekosu4jgvD5pZgieYVJGLme16G1fAmpBzfThvpgYmEjrmVZrwtTKR1WiW",
  "key40": "3kLtnxwD4nKfZueCdM6MH3weenquQwQPAtjNoegf7uKXxeivSaCTCfGT4wXHjeGLG27stdU6mv5CeoCoPbnujkUB",
  "key41": "4oRSu45Lu5AbUXQXZMEHmBMfvoryPs36P51ym11GWvk8TMBTgB3or5TcJ1MiXkMustqUuT9a4ujZiL5Nr7p8noxR",
  "key42": "mdaJtVizWSphGctnue3Q3ngRX7d2Q6qLyUPbJXVwJ24sKYQ4awetEnrP1Lerr92NGSerxt3XAwAT4kfcxhSNoD9",
  "key43": "5UWcAo1wngW8C7H3V7WukXLuByof2FFxjwTVVqHiaU3bmfmSV5sst2dzDhjDvmReutGX4p6B9MBCQamghKtT1FPb"
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
