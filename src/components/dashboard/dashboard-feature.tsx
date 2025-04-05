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
    "2g5px8vHxP2mUrCP8qui4AYpNwsqEQ3Pw8TavehQx57zSQb82eQ3LR7vfhd2yEEy9CxK3cnqvQivqjU59NyHhYwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tW3sUD1paRSBeiQWX6PXsv1aUf6u4xYCEVgMSncdz5xyP2JSzwB2dgUybyHwmbJ4AuXy4c3tLLoxesFHtFFEgM",
  "key1": "5nbKie6hEhHG9Kad4YC5k9poaeL73TAUZYRMmc8g5t8xncNtJ2XqBMMB92WWjw4z6WE3MM7JfpczPWjpCKGkxfGY",
  "key2": "2zqhvJ1uwymHHXswHJ5FXGvmcfnimZ6BgEULw4cfmnebTWg8vfQ7WuHZvbXys8apqKPQTqHtZWoth9o1qJRGULvc",
  "key3": "64s5h3SykeGxmVCiB3Ce7KGUosLbheEsm1pBPMMRVhgjr7ftGFA2BmbQw7P6YmVDuJNbZUthSUZUARzLE8GGRxFz",
  "key4": "53vEgJQn8SGCAkcDqNwgfHramd8DmiNnhFoRQwQFMV4QG6yzdjG6fb8czvLPTdg6sJYe5yKcTcw7aEorQ5Rwm3m",
  "key5": "i1oxTkfDmT9amyd4HEScmo67FwGZpTLykUGuXCEGwMtpm8EJJGJqJXbyCxUiNKfh3bSkbEvnmW3GL9571DH6g56",
  "key6": "574ZrwTYz8b5oQ7mCnF1BEr4Mnma4rgBUojnhUanyHuRKnUuK182zpZttMxm218dbrThiTBUYf2zjT6UAZP1C9QU",
  "key7": "5B8S43vtFbYVv9qJA6khknNCgsnuUt8utGjCbTMBzJfd2keGpLSok7o51xec2UccpQaHyb7euZJWZFT1QADDm9gb",
  "key8": "4doG2dk1mJYse6L1EP7Zj83dxoFQNuwmLtvMMWhqsbg2tBRjFDeVP8myckQcRRCkx8sKREr3d1eWX9oBvgeZyxKu",
  "key9": "3UNWMH3n7EdVccRsPdSiASM6c7QNZnGwzuyWGRvhhU474jq3y4pQv6B4j78cZzACiobc7NDoToXvwSgesKjon9kg",
  "key10": "PGpfUZzw9Gjj3eZnjetAr7qVnN5EKfgMmdtsEwE6N341xUqhpLeUBpXknQRmnwWTGMm6fXPW1jGJGDPLt9ETGbn",
  "key11": "UYnXtg1PcwQBynrtC2SvFJMqwNupAEt72Zc5FMjchJKpA6uFGUWCSHsADGV2xjwGBzM8bBJTRmHVX1QwYHpeaJd",
  "key12": "3AUktdT7rrWLNNmUgFvTanHFh6BLq7WxZp9sTbpsV6gAXaUBhT1GtN1cgK9Ny9sAQ5KhD4C6E1hTBazBp9NFGgiF",
  "key13": "39vvjTJKE277pFCBbHyrkCrcRuEXqeHfzLNkUGbLrBLEbbvbZ5cqM2aNZEps7JX4uE4CPUnHfjUXLr4WXXjoJAZN",
  "key14": "4fozwpoTL4BY9boGtzwRuVPvPB5DKgLDpqFPPUmfAZUQND4PHsiB1dxM5fX2zKWXccZfn6y2j7ZNuXKw4EZUWfm5",
  "key15": "51nnNnoLNgvdshbpBBn2yJAATpDQw2A212GYreFGEju6RYSSCFH8HrMV5n5qeqoMLth2pzaXRDAGzQYVjzhT3jTg",
  "key16": "KrxVrq78pSHg6miREZoE8Eu77H6LyMtXTjkU543Be8dXWqHsvZwhjUdJsh31AiRRmqAQMLmPq3Rf7HjyEpUZ413",
  "key17": "3f9sKJCDRSPJ4aCY17f6xiksyhjtEAxSTWjoSmHSJkv2xV9Rx3NXxZMPeak7ejwWiJ7Q1uTV5MZuxTytiptC2puW",
  "key18": "5FVv2J7GWi3nY1br9dvv2Bzq42pWz3jt5scEy8EUV7C5dmvkukpxZzLcS3Mu4sPr3XDfBW8dT8Pk1DUSGp5vZwyN",
  "key19": "4vuh5WnfSS2E6eCLGwjX4jqgbqRqS3BQLk5j1v8nU3DQTBChmq7HkY7nTR5Bkv57VTC2mtxCftpBVASg4V4Jja8B",
  "key20": "DHpsFiNNUH7Mw7bqk5XCrZTTwJ6AqpHnrkm7D9RC3PVZNhBBvPWb1Bn6dvNzButJShrM7rq5XGwawe7upP6NUfW",
  "key21": "81VoXAcEeECPPeJMXkK24zCHR85vo65oGB1e7gRtXe9MpyoUVG9F8XUyxKfuGc6wGSnSeEQvE1fbMPrc63MpQkW",
  "key22": "2Yh3UerxYnCGG8HDoTZpB4rJPB9evhmTxy2nnixtC5ZPrabDh7EkbsuxGd4q7mpnBPxfn8AXshADuuUAzeTQp8CN",
  "key23": "4CeJYePQ57vRrReQqYHsX9odre1RvHoVfiaHkrTbQvyLnYGHt1w64dkQWVtBAcNjbxwksZ6nkfHmLXnUY49Jjs46",
  "key24": "4do2YFosxTSDti4xTTFNxxwkxtw1vSpiDDfmiapLPoPEtzk1mpD6p25wFjkndaiQoZmAunYGv3PXxmHiD9kdytok",
  "key25": "2QhQstJWEkcTnN6hzhRAau8iPSc8M9MCc7KEwFHGSV7biG1x3jiKEGVDbEswHFt73NbZTCtBahkhuz7LAbtf1s32",
  "key26": "5x492fQm7t7vaiLHEFoEn9fe8UUvJCfFcssQDucjTquzpWdAt8Q8dhFDCQ6APKnckni8SUteJ6d9wKwyX3iEmVr1",
  "key27": "qqBMQkcjWf6Jo9Sj9Z2iqZt2gHKw4esVChE6ry8iLyAYD2waPz5G1xQdowCoFPJfMuR6e19d7PKmG532mhG4onZ",
  "key28": "4Q68mPbreohbSpPNLaizFzhqQjT8QKptj2L1zyLRvU9Kgk2S1QkMBY7sVEFWS7MR4B9RuqcHFAUZFdAMDyAM8ZNs",
  "key29": "xchdeF4DaeoGMNC4Nfc5eh2SYuvED94VuBoRuN88cinfidMvHkCE273jAv8H6vv5u2EuUFBrr4KJajNGgbb2zxz",
  "key30": "2ZN2CvxNvcdxy37YYwwaYAPTVwkxBKMf3LdgFnqmzYuRkArdekMwD1UX4Nw8VB84PhNWsZXdpdYuxZMYVR2xrEtN",
  "key31": "2JKreHhyRCfRJvEFx6Q3a3DSby2BcSzMDJxxSYUaC5k2Sdb2UtmLqS426FzPporLsCRqjXyb6TBURxeHndKeswAu",
  "key32": "4b72hhXrTrHz2qr8FuujnxbHFFJjwcgWFqrd6WBuxm6qqwxqWjwHPBfoFJfaXGUiW6p3m2aJyJPXp4abhy8JW8Xq",
  "key33": "4idWcoa3KKXMM9Ahx2Q96HsMVQ711Ka3JobAqWBSsxTJXMzKzqnE1vMkvoPWACyWMUAf6SBdALPuiYRue6Evzemx",
  "key34": "2wP4xHSFETzLbWCGzQBDMuck4n7stDvDsPi5cXu8Q2uq494gi2bAJ1tyEL9WgoQDBYQ9aNuoAwG2VKf1HWxcMtKy",
  "key35": "3ZLenAqtJYeHadAmy3q97kvcnjp3HbdaGyEB1K82b6hQ46JSegrwzDCk23ZR8dxDSVzwnJ4BLMhsXc8rr8sPRbum",
  "key36": "5omL4Q2vwTzti3y2FMwwYjkr8XgVmYKETj6bxNCsAtTG53rycSfG7x88hTqLMhKv6o5YXDKQTbKuzPS5kSBKN5Zs",
  "key37": "5Ru4NKGLDg3XAi7PhnEBCddwBX9pVsmCPNLEMoKWrvjNNYorvN1zvpHK6Hqg5pJRBw39jZLGvoZyuPoKDzewurbm",
  "key38": "3QeNpdT1o2b9CGPZUEind9hgt9tmTdM5PBjXFUzCnmc8uKjgC3RKXs3DiWV3am7Ty7ePLKebfxjPYEP4D3FrTvkX",
  "key39": "5xTsUjisBCBSWpLf336X8DrB1kJZMEBTTFqMUqSvcDT9qbAB5ck31RoTV4oAPz4hr7dHpwEJLBEugthbsWbrwZZL",
  "key40": "4nKXiaDwkFzgmvod78FChyWCUfa1JSgz2qY3tQbohJEWnf1VKoZb9YQ6FZjFN42Po4esxewg7PVSaskdhVAETnQj",
  "key41": "2ZfW7wrqhU33PbkubcTHGeYwuFPofSs2TTwAeQqAKtyKabV919PB55kUzmV4LkXDQua31FrNBMmb2dDo1R1Va1vm",
  "key42": "4A2z7cL18uFVhCoGetygKbwMyg3fq2y58YVBnpPz63SKYGLCU6Hhp1jdUiyxqqUkMFhSwJQgMyCckz4EJuk9f7MC",
  "key43": "656yn4sg5AKbtP1uCEkxR1aUXLUE98LNaGpaQ6RSwGL7v6X1ynnaN1zXdembRcEv8993TE9HwEEwJtrcLV5tAMXC",
  "key44": "5w5rYdkPmtWC55p76KyktyQ9cQQix2xwvEcg58B4moRznaY4fjLKZZMfQiqmE6yzwfp5yrUGQbkRnYwJKtHxBSR1",
  "key45": "ypEaqZR4L9un1bpfxVYqkXYKBnu6wA9Kd4MQ1vdYKZJQLidbAEJrFdZ4GZcaWxw36WbHbbPsVkD1fMHH4KCCEky",
  "key46": "5Y7nmkj6aEoz6Uy6MG8bQH9FHZ5v3e9B3HGKec6if3KPFTsEy4wTSm6fdT55YGuQ44cyBsu2NL6ejvca1ATwig1K",
  "key47": "5Ps9Lt3VrDj4dc8vMvQFU1LiyBnq2RJ1bdjgPzyG1Zi9UMxBMaPvN1jDgtdNJLpi9vCWZeaSF4FCL621Ts1hJfcJ",
  "key48": "4MwMcbVPAQz2xD9f37ijcA3KKTWp5WF8yoXW5a6wH5raPWAtmpgMKXFCN3sVWtZgbj4jqo9fmenLkCqVdNdAyLi8"
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
