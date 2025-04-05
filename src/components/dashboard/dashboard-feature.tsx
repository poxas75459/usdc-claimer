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
    "666BZTX11StpA4B8t9ExGR2VUh98LrSGbZgsL46ztH93gpPqfSsU51Hif42WKwHRy7EL1VHMXzfneWax27N3LYSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rE27KkievsoVMMjxmSfmyhbncXCUV9mXvWw2hwnVC1Cc2h5Lfv9qi6JJh6HMXyXu7XAmC4uQDJXqGhzQZsao8SG",
  "key1": "5TtjXrQupUAcmQ1WHDg7aNY4o1yfskUmocgEsVtPYFkqb7zyXhCPmhd6YropxXVZ5p1U4JmMKpEvdFAz92TxciAE",
  "key2": "5FkfQjyLCUHRS9sB4f9pogK76KbFu348WPXqBL64EBAs9r24U1JuA71SsGbqJW7HLSDNE6sGE54SvepzY8ULwbTh",
  "key3": "36T7umnrQXpAEz1q29ThHkwjbgH67z7e71UejUAvW5V84Sic1oqjYCkFGJJb2jKRU9MG7oyKUTbuoSyqHBQ1P1sD",
  "key4": "PhPMst8moyykZzkox9gmk62xtbcQLSCxi5ihVTnN8sCJSeeV62qzEec7uMdCh4B4URTCqTrRHjzEfb6N4CKTfLM",
  "key5": "QUEE9co3EFMtxKcAF5QXQdgWFzKuFeDENtAmmg84aJAsgGAhEVnEh3tiWqikPYwLRsgci6ECLfuuSxoL2rxwEpL",
  "key6": "5eq2YtNrEAkG8h2PLtDT4keKYRHoNimZcwzENjPxX49TcQrKHxvpepP2Mcbq2ZyhRqUvPfUWxb8iCwdmQJcxE9DV",
  "key7": "5DV1A1w67SNuPzQheTsX7xsnydvyyJ7RfeGzVFkE7RRsdFTzVr8sBNNMBdH65SABYV7k8UbtdNeZyYxpfSNWBvMh",
  "key8": "3NHzfmpahHxpFgY8eJf9Y6D2YVjHxtkWbGcjGtLiqVShiSzEWkXkr4KU5kzvFtUrURrGhugrkNrgUSdLbFdTt6C4",
  "key9": "YYrFA7TUBB98pys5QFdv9CrxGJQvakW6jBSr1fdphWimPmuku5HN3ZU8i24RLcv5pzv2mpCuyLCTQEcvaNf7J78",
  "key10": "5pEkAHALA4njNG3ZaAtm5PxTgwtSfg7e3cMU4uV4phQo7tsh8DViAx2PeYDDQKNovWqiwM8He7gVhSDDX8HLQuJr",
  "key11": "2yLLZpvXkKY1KF4ktgnZCVNAk9K7pxm9noWWeKcsaqGvYJxLzWewGpQLWH7DgjJTmeMcxyfpXipiq2HUc2EVec22",
  "key12": "5coY9cg33gAMdDdkLJfuZjCKzEof5ZfdtNP7YqJLS5AkVuZNBdVZUkFr3DY9pGpsko5MFF1GD8AK2NWGWZYv9TSF",
  "key13": "3RWSkPGdRJQu3xA8WLPLJr2pozDpQtQx4pUy9kJrdV7eyVWV2KG7kpT7JTY8z4UbmLScTX6czZpmzyUNxpKfmKpJ",
  "key14": "2BpS9gRmDpHtWCr3A8u9X3JSajbdXxprKCCdc9B3fbQyxo6nJtfXp7wW8E1cnkNiSGVeWFh271CbnP85Dx2J7iAH",
  "key15": "4ufox7PfEgRoputMgRCYSXc6P2arh39wLs88sZDTp5D1uhv3iBy5F7nN2FWFuyVY6dEYdwHNCaq5y1Er9eJ96WvR",
  "key16": "2QzPnjHDuT5FMyxJ2cRsr7PjRuuR6w25gbTQkEn1edY2qjyf7iHurLJGb8Rokjmx9n99MnET9tkuq5WV8UKwxgqV",
  "key17": "346yAEqfHpStqkfyoev8b3mE6TT6MamyAqYynirVVubZbVasHaNL16TJ73kzdGaza3L6ea7zZfC9jZbJzyNnXmHu",
  "key18": "5sym1PoT2ynfS3CLfJbMiFzh8ZL7UGhTuj9J3aR7Y72HjcRazhLm78tbrMCapxBaqopi2L4aQEpZYCdekj8WBKGj",
  "key19": "64axeKfZjnXbanFnYnb3HcE3bauS4DHN9goNaEQmK7NnmTwJ33tYDSur7oXdnrz5oSa4Vu5J5FBt5uEhDvystuYY",
  "key20": "2EizrgyLAoa3nNiWaKj8t3KWJanVZz7VYLtPgusosEq8zukaTn6Hg3RzKKATQsyuuzkKCktoUJud2YXsEgy7DBvy",
  "key21": "q6sCo2HGHYVnCFstxUbFaCEHja9uYuNjC3xYqBNd2Zu3RuHjbMWoa8opGDoxJLhrCDB1BfQnNQ7gTcS3iXqV9Vr",
  "key22": "JH524pmCExrg73fPEAWFMuEdVd8a3mT7ZWPWqdv9sH3kCyNN1Sg1Z8sVJQmhtg9AnTrE7GEdmc4J6FnSsVVi5Ar",
  "key23": "5ug626FP1snGmqyfgscWJxRhJQHLdBomefkLBPhhCZpSGEAnRcin6CtCpgHd4TxjL1WWoLZc9CebFou8nNM2bAtb",
  "key24": "vcr24Wvh4mXkU28MremPR3FmGChwTRSRYUFeeWhW8Zk2i5GFmWDDi4o9gDjVB6WUWC9PWogSN9nCBkcT194KbVR",
  "key25": "58GgajWNBFEU47g4XhmLciQHH3JSHn93NiH2mQEJe7F5xmZwnCf3SGEfyhSKQNqJQSjTKCyJHnj73hx14akWFxS1",
  "key26": "A2MGa5FteLSbW11aZjdiZigi1B5VRWn9aTx3YSpV2hBVcY1VGc7MpyrXWSWgxAhv2QMHJz2LXcGemgxuC3Z4EiF",
  "key27": "67ZXcb9qLsbZy2QxU6DYsiTKScQrsRdZPHdTZySxcwNxE9ywRrBthr3dQKGLnTAzUFepB8gdz1PhJZ7YWKZ4AAtH",
  "key28": "47ZSZjUoGMF4kz4SZQNaQhDJSeydLozxW1esjwbtTbAETke8w4e4mhgWTU7c1LqscCrLg4QExKMtc7eypu7GM1tU",
  "key29": "fEStD6GH9ne49Bt9bLpz1FbJeG2od52Xwh96hWgbqkGPLHnBrhZKu9mjRnJAfC15WEQk7E3NK64S7FVvw2KvCmN"
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
