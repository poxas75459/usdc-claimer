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
    "4vRy5gVanSPiYuRqtbuGpE1dMDfhokSgXYWF5ke34ri2ZBLsvaKLnpcmoQ5UjCWc5qWQWct2xrHe8nrEwU7nATuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4GJ5dk12vQ615CxFXwPsd3EHPWycY4pY56brRzthhQjPvV8k4aBJYpF9WyaKKQpgzFJpJoF1U4j4136nfaouZ1",
  "key1": "4utNqdz8BJUbQruB5LsLDugDbJskpJD7bR9SvHh6E5yZ4FBHVqvro16iGH5NHdDbbst7TGB6qxaNHT4yw3fa7223",
  "key2": "fQCEXZLLayn6dSHNLp954nw857HK474yvnmHPnqyAfWshGgqCPfx2PsvHXzuiAdfAhj8ezS5NZpPmcpBeCkdZTY",
  "key3": "2Agd9Hc5a8jHFKFBY6xo88o3FedfSzjKj52X9ZpbrnSerEyTTLCmuXeFSnBF7CCKQ1ksY6UtVLG2H7nZdpfDFZiA",
  "key4": "3TdUGrQFeumizVh2nMST55b4mcwKYi84PMuGS3xy6JT756FNvRZVr9xnpCVasNnNjJkeovGULMH4BKHxq2P3jGqg",
  "key5": "41wUnkoWRH39rSvzrW29oZqfKQeGKRsHeVbkiyErXjm3KEZA8crQySE49DWTHyj32Seqq8mFXcYXRFXNT8VLymeS",
  "key6": "2Na3cBoVN9MefSADXt9vEhWx5XkziA5KPHW8iRCtRT5x9XTyS9SAR5T2cMABr8pDBtCJsTKsHyw6mTnTHw296cpS",
  "key7": "47VjggVB9ed6usHfojzPSSyizXpVmaehgWStp9fwA7BjgyvZk573CxJt2WbpYc72t2hVZoRML9HBg9owYT2d7V2H",
  "key8": "2BC9zPc1u4vr3CnxNNqBJSbHMZdmAKSbLvz8LtK5t2ppQacoZuSTvWasRdu5nBeKjq5BNVzdxwKpGkTG2p1maJtA",
  "key9": "3puDtvAFkexSCyLph8mYjKPkCvstwRdf6EUpZ6atoJsRzwiRBcrcCG73kBVR9Xx1WvNPczH97jFyVSisV9M78Pne",
  "key10": "2GqbfMgygkZdg1xJxN5rg67MiJJbHNWWjQkq573Jft4j54zpj4Zs8JhXGoNyukxUj3btcRZpp4WCGv9aAf8gYpPZ",
  "key11": "sdWyHRpq2tWDS8xnTGg34qaUBMaYqyVX7o9VmLFw5dkWpxDcz76BJFLmud1wd6Ynb5Dm9zT2LyffWbmxnz9aM7s",
  "key12": "2yNprsMMWVydP91zpMzVr2QmXzAGtehdbVX32nTWiTrK3G1unw8A2E6W1KTLFPZaQ9b7S5wHiKYt3Kytg9xxMrNS",
  "key13": "4q8MCSh3HpBTRfhrC7nqoAFRkcMqBSGngCLLvxzQBF4tkCPYms3f8nvxDhXp1K5TzdCm4QV1XRBq63Wda5FwR2Sx",
  "key14": "5H5gZEv64hT9Kg7Gm6nqr15io55oDxhmkApmFuyeVZ3Dw2xVvgiJBNA6WNDuGh4uBcUHrpeX4zE615S8LvV1yXTX",
  "key15": "62Vzcvaofvyy3EykSG4HyUk1AhPgmokejKLSkVkAd1pAyDxi5ZujnnPC7JsVWHkCvicrNJ3YHg8QCLLG3xPMpNzi",
  "key16": "Vk5YoP4fAudABFrhmBqDkkt13P7MbRunbeK1jALyaL5gGwcRd6JTPULnF8v6wjApVtxt9kPk3ZAMXv9T3vk4QzM",
  "key17": "4yxpX5z55x4v9fxm1vK8VUKepKyqkhSdmZfpMd7NQ1n8mh2WqZTcBamy8SfHumsSeFSN4sqBCCogWcqBhhuhcU4t",
  "key18": "3zr96LXUSBfEkhG9Luf6evDynFnSY8TwiPDnujaHkZv8wz8432Ta8yMFybPVMJuiwTmxUN1DvCnkB9coPrPMjyuq",
  "key19": "amxJhnXQ8yBVHVJiEf1MEDTcWR1DqPy3FLhUHqmian6XT6h6jKEmb2mSARZneWmPKKa6UixTtL6L4TN3NTT38d3",
  "key20": "4g7aBhF38TGP5QbdoJH5KbTHUUJ4ZDTU9DB5puHkhrAcVuVxrSNVYapmF9wXZY5nwThNR1d4aD9iPT6YhQCxZxaz",
  "key21": "YcmGMqzxkjeRRY5fQzdUT8bXYqVu5JtFoHoYYQSw9eKqHJm2RA65BK5dS8kpsWab2tSBHy8HiyLVhHEeME3yXx1",
  "key22": "51259vFY7KvhGjaFAHCUbvExrS4uY9PMUbEj5F9eAbfwnYTonVqHjcgVR9EassSW5hM35MsByQTvz4r661Xc163v",
  "key23": "64EDeHcJT3qGs49qDLX92Z5d4TYip6cputZX6JDJ6JH3HnGVdQLcTZmZ8BudrQjWceFoxqF2hpFwLxJoS7vPU2Pp",
  "key24": "32WKcYFC9RVJXT6WCmcog1qA6yXsubocuDHw1H2v7LTbfCMLQUnc1g82PVp6viJPbpRB4d5szRs2ajxRXi1pinsu",
  "key25": "4xBaq8wBFnbfhVRMH6Cwts44bHHxHwsTuZ38LEG8FRnhS8rLBuvQz39XjGMSvYQ3hj1U7hwNh3mZcetzp2nhXb4V",
  "key26": "4NH6Yay3NP39cwMLqM48hd5iuDicR1mgN7rSoX3QqLb4oHySdPNxaHSPaC3VAb6TYaBGrk1GDaRCqQsb9phoGTFr",
  "key27": "3mChuAh6D3G5Qkj3pnZMWs42682MGN8Q9izMUAU8YzfaffF5VSXVpnEZGgJi2WwfHNW5rZzFEjFmt6E7svVwo7GW",
  "key28": "3vB4iV2dMs1zfGMDgasHQTWNuxAfFuKa9YgZQAVdxirM6SCJyosDjYqc6SRcW5MygHJu1Rn2pK9GZT4cyATpBET4",
  "key29": "2NNd6PCqKdNPnmrEtFERBEuAKRPfME6TsbFdGiqncMJZ6yYRXrYdQyiFKFzz2zp7Xmr1VnYaRq8ss9jAbdwmNgbk",
  "key30": "4g9CozyLvNVkBSm34w4vbTp3YEmkqCU8h6RjEvFmUPVUjqv8cSAFmRH8WnDsdvy28MS3GeENuTWxH5tr6zJq6FZJ",
  "key31": "365qgWP2HQx1oqqnxGBUYPnxbTWQGBafzVoWvnUHR1zs7QPYUv6vuRrnkdEdKxNFxDmbYTJHUZDmh6RAXBvZWCRY",
  "key32": "4pgeseXpXxfxbampMsncMuh7XzuPDhXYUwaSFSVX7F2zJqakxsatXYnUfYvxMf1HDYxfrVrBn3DiUcuYpmGHikgt",
  "key33": "5tV8PzjZ27jruVZ8WB7caENDCaHNRmYhvz388faTSNr51QTw4zkKNHNS2mFNU1pHu8hjsEG8EdFbtyGVy2zs16HS",
  "key34": "2NMzTyE2xC3Yss68AdTqVGYHJMRy21756U5SyW7hHKRKqA89jtY8BV8BQKcsPzCM68etuBszCcD2HcgUedqM8PFc",
  "key35": "33tM1NqDgS5KAtHP2rcsnBf2QxGPq94fEPWtSTf1CpdHbeQAdeFrsBjeAiajLxopvQ7TLLhKV3zqQjzvr1cf1pmk",
  "key36": "5qDUpXUByH2SQ3d5cf53cCfeAdbGsKgjcJCPCX9VgmyZdAzNcGQDkRtctGsH3ireHJ18EJ5HW1bdsz12jyAnEA59",
  "key37": "574omMyCqtsQhL81oQc8KN9m9quHHPydRAhxqu7oW9EoDBFR8TF5XHymNrzYdmPH41SV7QuoUr73Jar128TtwrMT"
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
