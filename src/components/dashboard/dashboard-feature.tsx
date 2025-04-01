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
    "zY31i8YbBu9yMNCFAPrHQufKgWny3h1NN1i7Si6EfUnXzwa6CkXMFWx7otZ8KbzA1Ux7Qti7qt7o9GEyHuyVxHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZxGQn1nAnoxo1mpqRuP4ZjFqNTCT9dghWx4pdmw5WZYN94Gq9TdZ7UmEqDrxNRPnFRKDG7MgRSTMDmaEg1pPG5P",
  "key1": "4hr1EmnDB46dTtPkq3V2btxVgJX6rh75rabukK1d7e6vvvRptsyDyHSFLXwF6aicsRfeNXw1R4z3wUa1h4Y9MtVr",
  "key2": "4NGuM2et7EFx9TGR2PEi45xfUvoEzqrhigBwxaMs6RA6pRQC2dTrVW3K52e8X6sbEyQoiq8Q53csXeSQXaa16PLa",
  "key3": "pD8x9t291uPXRofbyv8JijXzaBowkenNcr8hLSG6CCbpqTcGxNWxR4PT7YGc9JQnBEnkvTM49EYjASWevU6VdQR",
  "key4": "5q6s23CvaQYbFnpEwTQrVQ46vBeSK6tyWDNPRMTZfTtufRHBRkzBzxNixFU1MPzPjW6utLiGKGJGP3h3zmyYtUNK",
  "key5": "3p8HwT1P1bDXpnZ6uRLpsGfotKymzUif7st3V4xasABHSxqWvMMwmkZKvkgHZbaQvfBMCxudbmKEpunFiVr64D3w",
  "key6": "4oxWZSMoyLmd51yWFxEjsoad8JfosKkd6Vy44vHxvLEPsLsDEszkybbhJdbVuyKfyVLLoMohuYEDb5PhhqrM9U8T",
  "key7": "5gZJNHhMkMMiGYCra4WtBhem6BK86qAokrhGw16GeXi8UUL6xhGbeimskevWRF2Y38Pw6GGGXZAYd9NCX7RtB1bC",
  "key8": "53bYeyxGS1hKEFZPNvBVvK3qGgwFEsJ21H6itu981wey78dS9Hg7gQLgSAM3oCnaghfrBUdV3kmP4W7deTrz87tw",
  "key9": "5gPQbLTYLWZAUPeSGYQkJmUUYUVtUsVFREe6Z3v8eWKgzhHDRNuHbENWY3TGnqvmTyT8adaUshL9pnyJ1ZH2L7yL",
  "key10": "2tw9bhpwYzj4x6ZzeH1RR6r2U2mEQYx1uDej14T5zLFvp2sYNNpUUzpBwVEr2ZQ19PH6ikCmW41E1tN9Fvjx4Jwc",
  "key11": "5Sg4Wzc3YyWVAHTdmL2tbJgYdxaFnAr2Cij6xCuxc8frXyRDKCYLe7dMkZHJcBPCodKucGeM7aBSkwU7FcqJzEu",
  "key12": "31cjYcB3byY35znxFV9PixvzXXkviUvM7tUCbJcrGsnuQQNQJrzku9LoPkUArZV77epRrkZkDKCxLaVwXFMQpUux",
  "key13": "2528t2fd4x9E1egSJsehNMmDComFyabop9YmMCuj2MKLRUBEGMiXfn2Z6c8ZG5B4R2Bbjqf1N3EnBdUdWvREzaLi",
  "key14": "2REfL84LuAP5WZpen4Tpzv4bS61hqGyvJF7e5mGKpBqnA1hMjnzrxyx2DqikDJwVrasGDqV1dcBcptFb9oY1QQo8",
  "key15": "2nbss6rrnDR97XoAuqUdZAj7u4aJWnyGchEJGQ6j94c223QuGDsLr2F4HvDo2GNn6xs5RYW1TLYZURED1pRTnihj",
  "key16": "cSJ2UYCGspKirPdJAbj5xMpsiGWiHp8zr3wYoojTuP8UBHEn52oF1VLdEhiXkfeqp81ZGzeL7zMJx2cg41FkNjn",
  "key17": "2E6zP6KjAGfobHThXUCMGqMz4KEwuXqUa9vGu5gncvRmwaYZ3oQHU2VmavsiQ9DYN47C617cE1wzcLMarBAAGZF7",
  "key18": "3em2aPZUnidiMPHwrSebqBDKddFpsnwC1K6mqQB76cUCNgYocvUDk9CsuVqEPSiV46WpTr3w4MvMvmTTyUfA9v6S",
  "key19": "2zowL64UkqxskVgFms9cDw1iuCEbyCNBcMCeeSjHTywTXa97EB6i48s8Beh2aCQTZC4p59MBDi2SdeREMVCVoXDL",
  "key20": "29XCyrrxqWo4voMtajnQY5cd6tPJxn7UVLi9bqt7Kmkg6orDDCEnhDmwGJex2s5Git4Bomnade2tvaoNv6JoA1s9",
  "key21": "zuNGr3ooEKk6wJtNEZfyLX718J2ZQJ1WcpMkzFVvDpNFFhJA5YbhTCEaWx8DCiYEB8pctbMjdkcRjScdtzMDuPo",
  "key22": "AAXQ3jfCnyRRBePC2TwiktfCV64svZZrp6ygAMufYfP6NPCdEVVCHk6nTuiXKuyJ7RCEhoDfb9chagEgjN9WTb3",
  "key23": "2rvjc3oQH3EDijFin8yBaUC3UsbE9qnkV1gU87phCwL5btwTznpsnt5ENERJu1Qf71Jj1KAexzyevDpe8WgDzKda",
  "key24": "34zqWzDRU3SSutWhmhzLVFQfTVCpBcoBHvVYyBgTpMXEyVWeL1dapb9fZyn7HE1JRfRXbtxEAPAmo429srrxe61R",
  "key25": "5qXVC512K5VzR6TLr4ZRiik1iCUUC1heXR9CQBNkAobvArNdbxzzjbPrhz8wGGHvifmfZdv46Vu99aW47ZXJp23p",
  "key26": "5oNshVamirw6koXMaf8ZN1Q8uKVtNUJFz9CYMgcbSU8A66trtAKCyeRWvDHACxvxPfo6UJ31VaMtmJZTvHKwUtuy",
  "key27": "2WkcvrB9tgQLMMFv4MuWi7ZCQVeNRFvzCzZWbeJQYqD6SEzHPvqww1SkdGDjxSpZYLQWeo8NQpTVMfc4YZroA3ak",
  "key28": "274DHsULotwk2vM9m1cdApTP3jCT1zmFiAY4GVgXMGb6qPFy6vwjsyfwhUsNQrzDawv73HPggffXjfXhe9C4nWEK",
  "key29": "2X9WBgTh6PV54sK5mZUfc5Q5tPUFcX6EUA5Mf9YaxSLbiLVdYMji4qTpsJfbpGWjVa5mmfF5FYwsgogHzoPAHPuV",
  "key30": "4CSLJbJ9wdt8wR1mdzLSNRK99CvwpeSSJTzkV1ap3VgT9FyNa1nU2jYae2XiHqW4yhTF3UZpoWDozNzVaEfTewmA",
  "key31": "3krDaxu1CHuGYE4BDd3sk1c6qDFyaHrHHn7MgaJdvEgwY5yiXvBxc1tVTmVE2CekdyVEQg5VBaUuGfMjDc6oEoAx",
  "key32": "2iSD5dAn2h6GF5tobdgeuucocMVhfcmvUDTppyk5qgyRr6M1mzzW6ZzH6FqvjC3o9AZAPYDS2zJPZWS8qzc2SBNK",
  "key33": "56PY9FNDgo3ffPUij6GgkYjtYogiMz3HQXM5wk1Y4ZAxJRHpCewqWcPSRtqWP1gtrWhbjZn2faxuDmdsJUX7s4LH",
  "key34": "5kBKEzvnWumFw5ZYgz53ALaFDtCBwx8i79MKb8mhcgMfH7tbjQtNKb2TQ1veYRBhEe6tNfmj2Kay4DEhvmCom3oX",
  "key35": "FxKN9qR8YFmvaxTLd8RmYmkPBXRtR6Pa13b4Fty6gnJ9EQuWMudr95XP8tnz9CGpvTkyaumRSoNwDHvYUkj1Sj5",
  "key36": "58sbPLgtT9jqkt77y1ADN9DSrAGZVfwr3gg6hFVxY1EcxRQ75vqGEujWFJPyQCPiWGqSZFb2Tim3xiwf4v1LJ8tF",
  "key37": "5kr7frfJsrUA476eatRzyZdAhqyx6h8W3hHANwWNzwemX8TFdoe33tt8Eyt9JBzTJ5mj9tpN9YU5Rh8Xyrvc5Vm9",
  "key38": "5rqYdbFXbRWqUoCg1KXzahjEsz7SLYKETpnGBrcPwNuH2x9N1NZhxg78X7HkJmUYAhZQmV8616gpYpbfgGhC1fm2",
  "key39": "5ryfXVUFM7iaykHfvzFQH9vjW4RfnMgz7MsZ3khiNQk53K5Wn2xTthQcUaWLArUs45eBBs9GXR3YNygNLEMJtUZ9",
  "key40": "5iqhtxHaudUMsSuVqSYkF38y4JbLG46ESqwcR8G7jtwP8TAuaj94MCaqpKRoKqEdtrUD75X4spM3KPfQMxDJSAgp",
  "key41": "3GKKiVLv78x29mBeTC1n7njJudxYGjhzexkWV13JgfkQHE7vvgaoUTqvJ6sNHaAqN2rznWW3DLsxVifM1NDHSdkb"
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
