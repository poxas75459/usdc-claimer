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
    "4hdQdo4qLff7kPhjUuJJVfTGsWerEhcy8pcfdkwWhMmQibqDcJ3sAJQVadmhopZQ6sNWg3siPQTN3cHbUUYhqBtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sb3wd7UQXxBVRYYJDK1MUwFbTCznFc2aspqCY7uzjyPQcbP9Wqq5T5x9teEGnei7rH2sWhfkScwM1wDvmwzv6nK",
  "key1": "3X9h5xZ4yCW7TVoxBTAY6DxMZWVjpU7XQQjDRbNwJUryZ37n2J7HfpzizJ8HXgXa9a5LLwDEv26zUawELeqeezXG",
  "key2": "NX5xCJgSBngv4zCXZK7KHWZhkxPsgQmvijRCZuFwFvacp28Gj2ShPyEta2Zbjcsg1eHyq4QvQmZf5NqfL28s6Q1",
  "key3": "4AS7LtRATgZxfCyC36yzz6nLqfUFigvnf3PYCT475TLfxrCoTJ6wdtY8Cxc6jEwz1iAwtPkV4pSbQmgjSkEHci3k",
  "key4": "4K6ar3wgGcUwAu98cWmhusY2VxJZ4CjDXWxcUKHL76yCJmyKzwqayKaU2kRGF4yMZ2kABoy8Q8jtjXg5YXyHvAhq",
  "key5": "4eh6pExMihTTHjUuT5mcDLo97vS4yMywQY5xKW9L1WVZDCGhS9Yv3P7My1ZZUfmfd5g2dSn3MP55Y1jy2kiqZMNj",
  "key6": "56qd3sq3tscAs6nYEyuomYcQrgHSCxkEbjb6HkrxjWPyf5QUYjgE2D4gFeTGSNsQpZcawVJRYFK9x6RWDsT2P3ez",
  "key7": "2pL2iRjQZvoWjerQGSMo8yi9RzHcq2uZSXnJ4JkFxp3iR2wNzzuVxMmimvWD6yBr8CkFA9HCVAKj3swMreSWog72",
  "key8": "5Wxpjf8F3Q3bRRoP1S8PCicJhrkG4TnAckn3n6sJuXivun75CrMcijjm1YNSe9gd1s6inUCUFotncV2q12H3G5DC",
  "key9": "5uFdSE7hUd7os6sKXQmEYB2QtNFiMDEtRksb8gfHjpZbcJ6rhxfQqST6QgfyD9Zoxd9XwNV8zTaVF55RKj6GWPiW",
  "key10": "vYN1ykSDcfxkJKGymfDG5sH49TGxNn4o62YSPYKXuVTPXiZQ4TwzWfc53Zxz13Jk2Gujzdho6P2BZuZsHguwioh",
  "key11": "5WQeiKWkRMDPaCjeFYVr5BtDbJUSHjmKeJYArbyKxfysgBBfXUNyVN3JaiXB2p98YKaQsmsRqXpRuXeHLBonacdm",
  "key12": "2qRZzr7f84fY9vPcaRFEU3c6VRbNvpbzbfrVmppJ9fLLtJs37cvwGQUo4M2SK4Bi6kfucZxnd2yzWgfFBZkc3Lo",
  "key13": "4dcrpt8Wj9vKVNyqZsrnXL4ZiwDpaXcgN2os6t2vZDbZGtn2qHoABwGG2EN1NkKxS3jHHN5kY6tFuBZwt7E2jdsV",
  "key14": "2J4YYWYYs3KsYhENBHm6Ddn78dr5YxadCGggh6jTyrDSA8cMkiHimaSNhyaTeZwLm7iSwYLgqrLL25zeMXNENPPJ",
  "key15": "3ArU5a5Cr1ywAisqPNXpRk5a8yNmDtHeEpgfJf7VJnySB8M8w2HE6EpdfWzQkUH6jy6FVRS27B3qSdBmSqQTtyTJ",
  "key16": "2ZPM2UX69yygzC3JYFFpU5jzYQWQmmaST1n17Nzy6KBgDxstsceGy8mq36UJ8GaPX4ktQyi8FaVJ9V9vXv11mskn",
  "key17": "kGDjtgsjnqn6otUN1eRV9jZZEUdNkMpt9VGdTb5TNP1qjp7e4fD6Qej71xDow9r2oiW6vCXLffKSiCSd3x5tfmi",
  "key18": "5C9fFPjnz3rDKDrgzRH3KoztunCWoQ9TtPwKH3RCst5jaMNsEVqrpdkbG8uoGUVvFJA5yr1mHtehdybXFUHyu5UV",
  "key19": "5vHSCB8T3EN4aoVgt17U2kfQ35hEyaRoNoCPxvVb4yecXeVP4TdxUEcX6y8WWAXPpMen8kNdxAAwfrSXAyzmD6sK",
  "key20": "5VYhYX9nsF862nZ5NgecUM59yAWavp9QQtnS3deyGSedj4vhq9vAkWmjc521pZv1vtXwzoyR5Ke5gPCpTfLNdSz6",
  "key21": "5eLJfEg6x7RyjZ25rtABJRypA7JaftGEY8Fg34cnJAyapNDsrU3PezATLC6vr6xLK53xEBpxhvbvr4LXd1EHX91H",
  "key22": "5iLuFK8za3Ruj4Ks29xkVmCtAFouuDV19k6SVT7Sb4JCNYURvzEVaW9uz3SAqT7Ur8MpUXFpxr9k7iMPj67KQXBv",
  "key23": "5xbjjNiLQMSQB3ui95FesNWh2EfTq26bGjJvQTTYHQbkCTPJW2bu3vYkznAgRTsE5jyfSxAAkZwWxSAAgrd7Acae",
  "key24": "588SZLRb7FPXamW8HiE7HrUEXqvWHPU3xKYRJ4PotTbXG1zLGxRgb1zVMVyyQ52YwQN1UgquNPmKmhJ2KicCPn65",
  "key25": "26tNWLv5YUhEQExGcgSsmi61Dv1JRc29fwvp67x2vjTDnsbPXcdi9kXvdm9ZcufN2PYMq2ZjrfuhSdrn2uxcy7rC",
  "key26": "4ecJDfExLEvRmHGdt5PsXuj3T6YxBAdBEwkngziygPEdKV9gotj2S3Ci7A3jDgarjo1t3ziEJVDVXqVAnFag3pdE",
  "key27": "5VnK4RmsHkRLn1pXNYhnVfaSCY8RhG9y7iT661CXNp83KKj6qd1EsUVwQMmr6z4rn4CKKaDZ8zJ7WwzNnKv1XoAJ",
  "key28": "t1BNeXohSk7ZVU3LAkqNfPL2ZkNCv7d73gNhjCzSWg7JvQYd2qMN4CzixNTP4nuK1EiUQGaU1rUa6sVBX6AA45J",
  "key29": "23jNckRsiv9vTVWAhzVsszDZzUh8AKQEGwZ69n9hxyww8TmpuT7uyK8ePENiJ1DX3uWvTyCzB23d8u4EJsJEQZyk",
  "key30": "2yJPeqicBL7EEw1qg3GJx4g65pioEnwVTLetAtd3CbsvQbvvA2f3NRjnMkhbkqcmxZ6zmSZ6mZVF78D6TojSzjo2",
  "key31": "X9uaRErHNyWcbEfAtJQbVWMjf7BcFrCZyZ5iAt6doeet8t83fn81tBFkCUL4XpsLjcKbnb2VANmV2kWEB4MiVn7",
  "key32": "3t2HZvcsbZZdFvgf9FsmXsSjTSjAfz8rY2uguLgDgx2iEjD5PPcH3vYwbAV8c8HDjVFYzKgixGd3FjMuAx8mrBQm",
  "key33": "2MULuPBnQtXnawBkd98Gf58qZCjdk2qwgMbvBzJwdgmL9RPpCRHUNuDx23iSH18Q8qhLdFLWRu34zHWreiwMdLiL",
  "key34": "28Wgd7wmiwQYxnD6gBMhYGXhhDcehd3jtWVURg55jCcwHHh7kp1Q6rVKvt3vBcyCvN5Bq87BYcs9Pyp5a1ZystXj",
  "key35": "5LYkg5Tcigp2BVoSVECiioLzLscGvkogRQabvn82pK4dyJhcDuMTyGkWvJmUanCaFS3hYXyGZKtKRWuYf1P41MQS",
  "key36": "3xzbEoQAd5ZysQEzcVmTD9mQyfdJwz1VqBSsi8Qj8DHuDChB9nfgNUbMtwbHL6kjYhoHemkhdWbms6K3jDndveUS",
  "key37": "5rwBoWj6mDR56NaFFPZ8FMSbfnHf1TsgxJjFtTXj6LDhT4GZV7BQjaLqMFc5tKfmQ885BARSBimeGMzEZRCHiqSK",
  "key38": "54wMctQ6HpVFbQp92NUPgLR1GXtA4UitiVfLgWeizd4NJz6ekvTBT3AD4ivMdDKWmrQuvQmbCwhNgpoGHfDMrC2n",
  "key39": "56UMbjQY1hPNAaN42AgbzPHMXHVz9UppR1hogpv7kv2kX7ymBqrwnnfbcbHrVBhGRcX8EgshwSRVKsBxXtGL6XQJ",
  "key40": "58GTtHFZxEC7eaai76A8RSW5Pi3gv6uPtwqjxF7671PoNDv3oyVhRumUiWs97FrdzyFpUAyoEqL2SFDGSUpVFgF7",
  "key41": "3opK88aQcdk46cCbbT6YytGSBYN4DnuMLa3gcvhNrmUXpDGAoMMLkBvh728HHLyfFNHLjMaHC83tnMiEhFhwdNF",
  "key42": "5NbCrvkuXdgdMKp74mEPna79e1cep3wcYHvQpqER9ehG44Ahf93YqXGB6nYniMnvVrGZuHKtSfG1z5XXZSpMouVv",
  "key43": "3AY1wrTCUGFZ9Uk8QnybtNeEurVGCTDaAHc4y3qoB8fka8LraXuNQ4tg66xMB4LJjeN2iHGWgiymFD1YAcdWAeJR",
  "key44": "5XK8NVPg588owxEHct54f5bxKpmYovUutR1mNLpPnx2mHnvmJv9xmEq6jEUU3qFa1XJPWx7WKewGYJ1qjaTLNKGu",
  "key45": "3END4UsxxrJke83uRniiE6PpXBBVZzfNEuTas6mU54HxTPoihn535kC4aN8WGBkQj7RytDfgkRiMZRkFQMbCiav2"
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
