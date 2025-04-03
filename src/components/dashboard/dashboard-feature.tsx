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
    "2h3LhbDwpszHk55b9wiWivDrRV16ZL4QQHJgEdDnNtU5ghTRRd4UA13Q2qDvDPzycEqnKVdYVVCrFi45oj8KCqzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2Vi2fYb4jbLVN8vQCXsNjbnLXR5Jq1bPBUaLLUnVHNoXnpv74T3PMVPEjhBr2GzqaYyEiwCot6EEVZc4MqsqQv",
  "key1": "2NndpVXpvf6YvAerLG7DTtVq8g9LtJPwvdiGn2uicYYHATUVgZSSGvbJUTEaswy8meXU3rUWzxLNEeSE3QxXb2gn",
  "key2": "2zEjfhS2SC199FfWxrThDhckXqhuTLTTeZeXokuYBBKUBPu6U7Hz6x1kqPPCo9Vc9Lu83ghqbagjBJssKiXdWvT",
  "key3": "2npFaiUepvQSGd7bTzeyn865F2Sx1MpYAwcZAF7Mh4xTcYoZG33LsjMhRMNSaMEATAzZvE448uEcmrz8jY5Tqpyg",
  "key4": "5WajDdhQa24gnacKjny3sSzKkmdKNreQAGSP4jPxkzfZeErAHw8SQGtjzfz5PU4BJebaCfHA2JHneW7dtArrUksK",
  "key5": "31bXnZ7SvWxhKHFzk6t6PCmn5mgV4uWcoHwyVXAez9RcBQYPYYMokUzfmTARtK6Bj8xRUDoMxhzYVFUjFrbVpui6",
  "key6": "3VFXKjdjJgw5cNkMk5ypY3xXDuFQRRLkLdYBnutqRh8axGAwXuG8TknX78gH6PbP1kSHCRFV2wSp7ZdY2PDs1YbN",
  "key7": "5EHRJ8Apny8SkMycEm2BtvedVtf4U9PAtdZ6xmmzCrTSgR2VQnLvrJNx4z7YYp8kbT5Z5w7R5Hru187ohC8WRzmc",
  "key8": "jBq436nmXBNCWK1ByqZ5pucySTyvJTyXFQZJzADEPRocBV5fC6tQB7PF1g6jwBD11QadD1zr9CND2sDaXtxNkJf",
  "key9": "63jgfAkmr2GieCHXwfJ5Amj6Na9o1VVtivxUV2NbcQzQ1Z2CBC51mMeWkfLgwWYGTKY5HazcStiwFBCjG3d6cyeQ",
  "key10": "5qqJtJELssRvt2RvvYtiKvSPCtpYJ5JaS1Cjyzrc4KtjcRh6LUA11nEz5xDzx8qxrG28vQSdPgUKoKx3VStkp5c2",
  "key11": "3sTcKYAmp9uQdA7UqHb3qdCzPdTNiAaiE3Sd4yh3ZzkwJX36KNbYnrokXfQMAX2ZS2tW38MSLWxSv3PMSEErswLr",
  "key12": "36By9KaF8vPpPS6UnFWaqQtoLt6qgfcB2ntFJ5gE2zzHYAd1Juh527qDyDMNpj2fP25NiSCbutNiV6axsoDE2D92",
  "key13": "4XKWjqhTK8D6Du6Hqar1xDyBy7g1N2GTNKjiRfB2GHBNr4rN8LGi6JxDk4KyRbs7yN4Urva7frJEtumDRK1DBcFL",
  "key14": "xibrWehbWSiJ8dwJnjhXzjrXZjePD4PXeXqMsF5Lm6ByQMLPcEg7Vhe5cyHJnkNL1es3pGTK5ivTVksmQe8rdb5",
  "key15": "3tR1juqhW37EE9fpq8qVdvhJMK7N29H7u2kGAKuvNdAWo83rXy5s1rMNgR87BR5UoqLpMvTArByGUvyAUCJrZPos",
  "key16": "3aNtp4e2yaho4aDP1f5MwEbqNLb6zcWrtDyr5aMyrP9B3dFHbRZqxTkB3N3rKJDi2BkdjqY91xWTwucQS5EWNenG",
  "key17": "5pCyKZ9jwpHjyttpgK12pqmNVkCw2oqQXjnWfRgi5eb9Y8jaYdhqWZJF46U3L9RwVXTUNBaw2ddqLj2Kw3UGUM5L",
  "key18": "2hmwVXSL6mDNnbBdHvAoBCFAfRW3vJejzEhsSrzaqXfDHtti6AQLNNB3tiYStRMcwJWdD1LMpytbpmiahrFgSbKn",
  "key19": "4584gbTqRQt3DSFAtuXDkDjmH1F51q1jQyrzn1MsaQVkqxmfhbNrWrVD4R35Gmee1HFrKDqxooRrYbpAY2RdsQ3c",
  "key20": "4vyUwXGmsQ7XfTcHfSKQxdbfBdzXCEAQGwADkpwRxVVFSLgrjqDyTe9sM1vc2kQQH6aCeMW6KvZmo8MEsYJARj53",
  "key21": "GGf1uBDZqLjzW1dpY2vsYcWwKGmifg8HmX4fjxdaDLwHoCGYn3t2C4NifAf5FeT1g6abPNRHxwsQ57kkBif7AUb",
  "key22": "5aPTHuZiyQtxoM4qWzH17KpwE2CgW2ZBPewspFskpRoNGxSGSWFyp6vMd4fz4Lj881QAmWf18UKXxn12g2nXFKjK",
  "key23": "stadmwLRDgMQGH7TgaVwsRB5fqge5N4Bybr1HNY8MLWB1m5opbwqxb1tCDGLng4dC3M85E739DZL9QgKSdBCGKu",
  "key24": "4zvPafFz2KHr9zBka6xy8W6BwvCY3nuATzGjN3nckhzjZ3Mn5BBGdfDGhyb9TzhN3DnjADtjGfNGsqFEv5eWf9po",
  "key25": "2c9yiFDpoHCFzrsiJZA6ogsv3o7xJ2KbzdMEbR3TZzMyEsdf7grbcGytYULrqYBZnArkoZum8SqqRUw45kQytzLs",
  "key26": "5LJD4chYGXrfDp9LWT8kLWE6DYbyZLeyeQGi83rVoBgsBkSMsj5inEcCLs8c7n61fuBet6hAXpE3QNGtcs9Kv4tW",
  "key27": "5JstwfJBKM6gy1qUxvr7nfBAsQsebxVAVScKVqnua5m8YXqs74Ko43rh68dL7EjSzsbTXVq1J58MUjvbojt1zp3u",
  "key28": "3UdHsZoshtTdYb62WkZo3jqzf3EzQk3hrEtGEjXnkPFkqjVhHjDKiBRfVAFdCeoieSEgGp4KFoPS7SZ2aTSTJyBr",
  "key29": "2CBuVqpe2CsMAamreL1k4z3sh2jCHi3Q3JbJpxJABd2JApPzmbF5R4hjyWQrJthNQwc7o2mnsHZ7QhdFMRx6yhXC",
  "key30": "a22zDq6QdHJo87ddLg5CYNpTvnbgeBpDzGgurPVVHJ2gVyezCtM5v78BrSFuYbrSUuXxLKa3K8fUU13qmjoAQrv",
  "key31": "3PXHLwy4SFBGmqFPitDonK3hsVm9frUX2nbHJQLT1q1sc62xQwMrhfZfBEE5fXivxvQbj32NzzRH1xgtpMHREHX8",
  "key32": "4BNau5yUhfJq9dhrtf38CVLqD6CaWNnwrQ3BQv2RxBcbbDRWwrNCDDH9Vd7K5aQEJkiyksnWbFqCnSKXz4WsbSNW",
  "key33": "2TbtxqTYjLQyapEdoqafRdzAm8FivC2fhKcm5bwqGMZkCiG2uSXF615BjPVgQYPGU3ZSvhpGuv41T6viLfNb56aq",
  "key34": "cv3iyiQdsZvTYRrs5qoN2eFJwWKDX45i6KmzPxxEGW4UVc8JcxEFKwhHQecsDA64CyjsnwHoTVojHdQcjYDMm9A",
  "key35": "uHSiV56HzTLkLmfX5fWM8fNnBoCUbj2H9VvaE1V5p5CCjjUBmLPArgFNBGC8xe6S3GLJdASH4f1aAwfsbHeQowQ",
  "key36": "24obZK1RFd7TD8Bqeq8omzWZ1iw9GPjnzXgZAUhxpETW3CnK24gGB3nYBLvh6oUpTHdm1yHF8TZf1R2oXRytaiRy",
  "key37": "56gTgnvAL5ZHFKJL1o1tQj4ajyHZAQLrPnUA8B1uiJc19GLw31cpJryPvSSpxV6DeCehkvLdv9PFhPQ1bx6YSXKi",
  "key38": "51W6dveqz2oAZFzmnxSZCT4TrbT8gEWyFN2zX8n6wHjsKAT3zw8wUYn2WAryGhexrnKq7ULfao8ohn37etdsUgAG",
  "key39": "34vbqgMg7Yw2Gpmsvt538pNRCjjMyEVHKxANNz4bXf93DYsfSdKn6ssNGwEjLeyxX6H47ruUUQseKVTkHBwaScnr",
  "key40": "3Vv1ughvuX5W4UVUuzfbd1e23SmXQS8bnQ6Dk38JYJeChkozzebb2wGWJC7p7ZjopUYNrKC77BZZTgSRLuqdLHm4",
  "key41": "3EQFwxJa38tV9umahLpPydCsmFckyWva1bxsbniZF6dVfnULVc8ZN3zGu9XhtKQpkaGpExeWM39UTbeNWEGwifY9",
  "key42": "n5EZqjg6qqniZZtH5zSBpVD7GGPeastgQzWhWkHQAvyoKbsbKZaePmoRqpDsCjvf2xLUs14JGGSbuJLfP6wZz6E",
  "key43": "M22MfZK11urGovJ4qYErbLtrQ6KpW2nTfSYEMSVN3pKX4TtVNR5rZUtk1SkdARg6Wj2JYZPzvcXmRakYnfoYV9s",
  "key44": "2zHL1fGMCcNgTMkjYPq8FGs8sPEZhrTsruM3nsQMeHbEQsf6mhB7hwdBhbs6HDTkFBFKw8qM6Ws1hqADN2QcgwAS"
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
