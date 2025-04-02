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
    "4oDtFENkovwxwdydJKmKp4QJfM82ebziDMcHTvgVPkVoerdCHye11LYJcc9Hjn9Bd6KRsmpT5t1NwxJDEPtkNJtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42girXNA5P58PWpijVJ2awfNTCU22TwENkSJGeAH6dgdjebWH953bbrpfma48pa8SyfCcrBNc6RUda2pBJcNFBBB",
  "key1": "3qbmiTbABoDi3FbgTpNDuA6KhzMjHPdCWpfgQjsoCZurts8wRHQZUjkYLpHJCWWYQW5XjwGGVRr1hDPvjenZG9aV",
  "key2": "3boHchhnHm4xn8EwodNmvQaNiMqqbCwQPZJZncXwDuKPP8AM7xnBBMXkRowPSaAr5VfTPCuzjAAToGNBwvUPxbCp",
  "key3": "vj1N71Y1ZpPt4U3uALaq4o38tzkJhXP4tV8NuPbRR7TjKyz2zCiikyt71AQNx1mXWhekmG6ggCj4Rxn8N9HAoer",
  "key4": "2z2KSPHgFNAhBzz4Ke2B4ALo4C9ffGCDjTwmvJMEqRxCKBAApn8S9xUAc9SDzh3tjwCC3PzUyynGDshGZeDWhoJh",
  "key5": "4woLGQRtSpppgUCV8pijmFvd2kdgVisDTz4mMdqDWUYoRTYj4VdTx8hhQehdCAfUivo1YywnxCaHzbZWxqYTy2ky",
  "key6": "24EPAFTEVxA6bzir7vkFoqY8dLRRnE9e6xQcm5pTg7Nx1QFWivju3WPL2xkunmiwjGDLnbCi5MZ8Gf9bnaGw9iy4",
  "key7": "4zYtPKaY5GZNN9k4Cx6D2AHRbYWxyts1m8kXcP4E11K1Es5kZYpmg6F5yh4RVbMyaRcTB8RFe5MVU82qXZ2Rfy87",
  "key8": "H2wdFZwJ1frjrXp7JoHPuMVP3g8c74VHw5XSqNXk2C2PThV3da9HzUf1bkFezjtKdYx5XL4mXaZck4Vye1Qp32K",
  "key9": "4nXuZteK6eiBP7Cdk5titCWNTbFFX9J6QsnWju5doAzosSUcWGVnZXeVmbiAq3hvxmDsBkmaWNW1fLqkHrmrrRE9",
  "key10": "5LL4nW13vUKdQmpnFSdRCvoNU5Q1qdokf9mYNLohzx8aZhuYYWDKx41MEjhp3KTo5AE5j3FK5fQRFfKmGaxjxqkA",
  "key11": "4Yj3f8Z6wvM6P1R4VWzPJf8UAExN9AMmj3GGaaELjJG2wW56oKEBAAU36mJdycziUFqGm3eCgLQtciPgsFQSdW4p",
  "key12": "3J1EMR7w8PmzJbfiedTnKVdxAXL6NLY9hCd8q9u1Jjvgwf1DKhQoVczRjbApBogvozLmhwwTLzy1qM3SnJiUG5Ld",
  "key13": "4naNoDxAWrA9SpsvMjqL4z6vk5WuBMkWoh7RYGSJLznHwxZxiX5xcheQmW4P1NzcqBxisLkQ3fFxdAzqJkDAFaGu",
  "key14": "5Ehxjmf2HqsJKf7rssw2VT2RLbZriGd2X17bx78fdSfP7TUgdSdpSmJibzjGASKzQtaJXTU1B25JDsvudoHQirJG",
  "key15": "5KSxp6epSsPSp3TFX8b5AyEg69BxZiLKeMJr7je3bYZef6dkHEBABwi71NRivzYVCx2MQ4hn8LBuN2JJEFNkaiBd",
  "key16": "2jiVvjAzL2GhhUoKK4trni1eHecpWJ997jyTZzFPaHyNhetvByyjJt3msevxoKEXbi7yK8UoZjVjFhYz8JACXAXy",
  "key17": "41rP6MWae6G2F7SGspac1Zakug66ySWEaQDucScEFcZDGCEvfA5NKm4FRVsPcek2ZUDHkozyn6SvGvqReqCLJpdz",
  "key18": "4D3tc15ZtPAdiYRZ2a6FgYXopeBxQyiDt6FEKhpTquD4N3ZCg4ibuVcBeMzckXCSNGM53aXHprNZ1iRV2kfQ3aSd",
  "key19": "XiRYgwtH6QAqC63sH3j4Boe5SmFK38y9WTHxDTF9VeELmaAEJ5268BezcMDxHYdw27QJtGn4KCZd5N6Bn7vohfH",
  "key20": "59dDsZjAPuLY4vAsCwM7tG4A4gpM8ns96ewhGoWTZHASNWL45CSH27D1vLgPxxahPPjDsuHkWjyxPjqWiaSUS5Ym",
  "key21": "4jKCum6gNr3TurRBNmi1o8qTswjWjrEFH4mc82sKHh6xjRFPmB2XsBzt8fomX6p2Ko9xpeWeUj4wGGXXRduFqzaD",
  "key22": "5f2HYMELx3GazQeq9DDotnaenRR6272oUb94jdtJasPvg5Vduudrc67T9wUahszrR5zFKeRA1WcAV7pCcDVkuhQq",
  "key23": "3Ec6u7dUyhzXijocc1s4JVvqB3w2K6iv55JQw39PUCNHgUwAz4tCvQXKD8eu3Rtn4vMzcfpYqjVtmLGqBfCh8Fie",
  "key24": "2xNW6VoZEZVLpS9eqiZC9uZsDfzWos5zSF2Jb722Ds72wpf2HTppCr3sbSSFBjECiuccrRF9M222a1XNMX91HQhX",
  "key25": "3nmfJBxA7d7z9WTRY3D6i4udsyVemWsmYY5LrbXGvwyDk7zdmGP2kyaFUeunhavStyAb5hvX1i83eWEQqQnAhPSY",
  "key26": "39XUP8xGnQmEfAk8hmvLReJYcBZR4tweX4GcfiHCFFJua6KRkPatdJFdR67W7Lspfj5dtCkgcyP1FUn9edRuHUNS",
  "key27": "5MQqUJPEZLMex5vqZQwPbDFpxDvJQfFHfRDnBzRvqcdv6Pd3an2JYrg6uXo2sqcTVZYFTzR5KA9J9wyqhG7Jp2BB",
  "key28": "2xd98KhSFHYFcw5sgKab5hmfZTrMQHhRZwb7mYN9vMj1sLC6qsahJetxzBk75xH1DnUDCw2jYrDwcGVbVJXDz2M2",
  "key29": "pLVjwVcvPHuZHbpRni2xXDuwtAW69p582wTSPyExaKTxcdHBZ5JuKCDDJyNbPYUb4TGfxs5Fq8nzBEBiFpmjd9T",
  "key30": "51dntQ7LKYiJr4Va3sZbnM8oUwNASxsk7Adoh1uHmkk6FJq9KnsN3qXThVamjgubEzMbFpztDGmoq6VxGfJVYXV8",
  "key31": "2E8PsdwFNTf5UWf5vqfpvDvpYYy8i6QFo8FbFbu774AesEFMD7SnQEQcNYuv46XKoNFhw2z9Hm35w78qAswT2DQw",
  "key32": "4VHe7fQLuPJhHXJHP1SDiTnKTk9NTbg26ZGFn7uZyXynK7GEvrFf2p5vHPy9GVqEzWrQtMgVzcVEYaXjsgJWSoSC",
  "key33": "k4gCQDGxryNYNyrct9KzfhehKamXg8qmNcgBBNwMEadiXNohf9U6PAd5yyydnXdL9bTiWaSCvNQXCyGQK9Aqinr",
  "key34": "26vpKzB7tFFhfBP3EvHHZGEx4DPss82FQRvQXBa7uY2UrDF7KRfhekvp2i2WVkeaDLK2DXqTsnYvunEbaSYHhnQW",
  "key35": "4xhKdv7sqc8i7mwWG3Gc8XCPuESxRsx9dzWBFjYGJKqwmmzTWeaT8MwuVx5zB5G8aW5XPMeJcZiGcjCe47NeC5Ly",
  "key36": "5AKvu2VdgfYE4wUq2YfaVJ9JqFzczJRiy9Y7tQSyygR85UCWKXxRianFvAN4jcmpLkp2LvZfiEC3FLjP5JHjRg8p",
  "key37": "2SHTmeKdmFeWLe2VyamgTXhtudb1EvwoCBdnTSKuf4qxKAiru7uQKaFzDoPKwGUxWhP7R8nwjqA6ghw76fgNRdhY",
  "key38": "54Drkv2bdhjij43rogNZt18GT1TS1Qv8dQf3pzu4y97436JJvvMrfUQ9XPJoUqmYJWGTNZCWhcykFXjDgx1aUWWL",
  "key39": "3diDTAvLaZgcSsTvWdJKcYtWU5Qr7a4qyX9F3bdyxDhuYGVPFJ26vgVn2nHG1qA3YffUWRvkQ5P7cbpYxAXNmbTe"
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
