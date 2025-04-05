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
    "2iZLXc6i2dqRGa8m8j6kTKqKJsrLUybUym1K2NKzfJL3Qi35T7yje5pXehdymy7dXuwv5DCGsARtKqjbr1c6FXnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HxK2brygDMHbbDoi7kMEzhB9dgqR9j9oR8jJwDvFtFeYEmSCnVF2MyxRNQA2xg3T3HFUAbb5hiTtdgkGfDPy495",
  "key1": "TQK2TuDzb1vPkCPb5Z8z7zfTPdugge7StaHNFGgL3DP1xw5QA7sQ3pLgmp6y4qBV7mtKuwzB9cFjsKg9kiDzJJ8",
  "key2": "3BymTj6tW3zhg9PTC1omXLQNL2ghxVJBVJP5wYRQueovPtkiASiD8FRqoxMywS8FfzNNjvF9mti2tjYyZj6ADXnC",
  "key3": "43BLm7CcHUp9fBwxQKoFWPFEEbjVxmgREB7H7m21ja3HxUJ1jX46CstqSw85NG49S5PRtAi33XUmQMiXQHWzvWv3",
  "key4": "5VPafS1jbQVTy1k3dWMNBMUeh62kNCnjUoZhm4Qye6R6ggbuWpGzhNVsruMzfiVKR9dnBYVS9DuygXBWznrta7xE",
  "key5": "3xyKdtXsaKV5WR4zrsSjwKRtmLUwWcUQi4pHWgs1nwsvCenDRygL6n8c9PvYGwsLRBPReXjXpQnu8caoR9QA5bgC",
  "key6": "3gvNZUDQLwa3TSrqsp6cCxe5qcEsLHArxT8oEnaf199j1Hrpkoyt7cDETesxiYLEv2ea2ca7Snou9Y8A7gjUwBAU",
  "key7": "2VfVQ1YWqtnbwoJ9tyHRcgrphcL3oXiEDA6mu7KfzCpjr5zwXoCHnE3WvCF3hUcujMfdtZFRQwkDUwFxRFno7yLe",
  "key8": "QTXM1XdjhSax9FJ6eMdn78EGLiR558CNqevmy2v2NbhwarYSRLywTZ7719TrDjbHKg6xtngaf5VqS5EM74qhwF5",
  "key9": "5FWfsZME2av28Pb95gZWEeadLzEeJmDBe6BYzvbdbaWUBpZ8dbJfksJ1WMGyZ4pZBNfafWtN9iHcnStUEkdenEPz",
  "key10": "3mfXi4bDDRqGJT4t1njqGjf5ee2Bx55BQmzoJmxLgyT1ejhWmmwaTfRKQyR5QD6wR2mbZ9pviVASnKniYLs99HJB",
  "key11": "3RQctvvjKyxiAB4Nc4wTnLuV1BDNXQv7qdZBibxmpkktki1LRDN3sbYKtprdxN2b4nb2VqGG3WZt93LZsdC6QjNM",
  "key12": "3kVm2oXLTqsKzhhWNE553kEfJVwePuG5Egs4N9cRsiG1SwwsTYta8L9b8gGcdwWQnof6CvBNAeaqdjwvS74ZMVUB",
  "key13": "2KVb6icuPBJqoKmeXuMFY6BNzy7JceFGN5mxeMccGFbnRAiKdT2UUjh1F4bP928kDajjhgSNm43vuQsQWERFXRQZ",
  "key14": "AFvPTbsggPsF5abwR4Ff8diznda5B6STW1ooBvDBfKeS82wejtbpiG69aZbZ4NfLHmSwXrxVoecB2M2qen2o9AX",
  "key15": "3uNxKZz3cW78WYXC8x2wVbdnbg1yE9cn4RXJiBf97yWhBjsFh6GzXoTEu5gdcMokp4Axk6Wzqayp4CKkE59h1TQT",
  "key16": "2pm4QUehnSN38K6D1YVLrWjW3yQ8VvwdoroYeaC9B7xvA1s6w4xW5bb8VwruYWWopS67Etkgw4cRk21P6rtBdViC",
  "key17": "4yDiFVJnngDo6MVorEaY3y763jdj4uyqmLhPeQh1RZCiNaJY9dmryfxLiznDbRYk4eFTwUXjfzHWavj6FN4Fody2",
  "key18": "47VKU5AdTmYJgGa7QkoZHL6pySgfWtWpY5SVvXjBXnk4XT5YhdbwQHbFgwRJswrphfqTTVcefuMMbNqwaLPWRfSN",
  "key19": "3q9RB7WNJ3j1PJEgbfCnBnoNsaer5VuZLq9gXSsfMgfyTXu85eixfDDRBCqBPiwh66YwveL7p8Vv9Bsd1WqPLwuy",
  "key20": "4mNE1MbcNC5JsZpRxAgsZt5jsaE5iitdYRncEPVSwCUFwzsVjACAwRXC9HfgaLG7vVwovDBDhfoiKbgThHRRPPcE",
  "key21": "96bHevYam44gNGy2mD3REBLbYKGSVw2qXQwnUJ6pRfZkkxmfpvcvSpHFzNXuYQfdq7vXFufcTt9Zv8fXr4z8Kse",
  "key22": "2zK6EEhyeb4f3q3ia8uapqQo9WqLY5wrnkHTsngPUosVqjuxtEQS4KmPGPTqn8Wd17tsWBeuoVehrHNWc54GqwZD",
  "key23": "2L64bWzNPiLgsSnTgSFtuuu2LTPwXB8mPi9bKdJaTTUUxfT6qL6b2pNdFmakXLkeYZRi397mZRnztxn7mohXrxwm",
  "key24": "M5YE7eyTJVLxjkLjuDkZVo77KZ22im4b4jaWAaFwExDX4WsExPEWn43X1kto9dBTDrnRpcL3uBW5zjbR8fDbDAY",
  "key25": "3KXKbQWEf5XMYPFTxoxq57tv8Rr2B3RMkRAfbNzSwGPE71yTRh395RVndveBDVp6EEo8yGzTSdG66hmXdxShC9GU",
  "key26": "64nCRjia5sUV4bVBaR9xzyiBGmpMJTRjaUWPK2CXpKwE3uwC54oG7AsGa4BCzabjgqMn9pTJctA1MddAP9yoLBP5",
  "key27": "2WENXtsngdDyK9SynN22qxLJ8fD1gRVBjFtm9EmsNvcKhvakykokumvF5gogWYCxaXmTbCYiLMsjRAUPBPPpDtFC",
  "key28": "526DkNQdwsD7fJ3k6JdFCVWzJsErBXqr3bWJF3Hh1YkEti6ChnRahWW2NVrCiaznLp2hFu2wSb8HBpnvknHHEC2w",
  "key29": "47E4ezX74k3Mrbu7EMTtaMGbkNLsmQXRCaJgRKkQXc2SsxGC17To7XGiRm9QNU6DrhtuUmZqrErvwyC2MGYkurXa",
  "key30": "2rGCGvnDDcXGuGc1TjVksBy6xsc6b4Suy6GLnYdiR67HBt1eMFY3L4xNXQUmQ94cR3RBCgK8NKAfT2dpYtKrLxtQ",
  "key31": "AsRRDSbV39rVCzPKovj8H7brmQ1cGG6EzwsNm3x3NoNu5U4FAixZEf2eZVpKY8BANSwjeYTV76k8CMqKd6T4nS6",
  "key32": "4zLTXH4U9SGkuzMVPBWQ6xrQDanVfwFHvp91pP6NydYkaQt1xHLG6s6taZUXzwdm1NubP94y4FNJxorzznbJJ1AD",
  "key33": "4GSauoTK7vynNepW5UVenmKyWpJ7ZRpjW37macQCRWFHPZkR3Sv7Je9fyU5j9beniHkVVdQJX3MNjuBZ9jkM9nGu",
  "key34": "2FTBdu5YXS5qgUjiJH5ZPyMQLnboZJ4f6BT4LDZnKXfimacWS3nt8na32eiWRhsURKVECG5vdod9ReXezrmSSH5K",
  "key35": "2NUap5Fcxuo8PkSBDmjgJs7pqiXP71AivwjqnNpHpGHAZnkpUqp4c7UXvrfhbm4ks3SXsjMZvErr6cZkjtpLZKav",
  "key36": "4xo9RzQyzizrVUv8khFAy36kvdXG7w7gkZm1wqH9X1yMPw7SqLgdUXZWo6jtd61JxgofpiZ1tiUikfckLJP81BoA"
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
