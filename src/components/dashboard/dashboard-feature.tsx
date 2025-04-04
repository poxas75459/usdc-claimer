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
    "HmVHcj3ASbdKwH2dhnZoHPq7n43ANkZgNHb5SFEugxXVwSYAci51ZS9H4q5UWunvH9kfRZUXBCYNnSmW2pNuLXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VvtAspX86dy1LjZkUdun1wFRKTiTPbSbXRkv4wZRBvwEpU4d7FMhhUhDr3Cy9EXLKXyBW2yX2MqCNnHHvCCajPs",
  "key1": "27NE7uHzhJiC1DXWaH8XSd7fo3v37RyU3JDHwNJHy31aaDs1KHRiw3Z1eBBsN7se4KPCHXGY7Hcv256PyXbVJzse",
  "key2": "66ABF8WMaKRZiGdoZ6zHP6TDFTAgLg2MQ9DKTSG5yYMfiwpuhiXk3NmqdB2Sovr6Az3id5aQqGmqRdVqvM78vLDM",
  "key3": "5xoEQ84ZmyHELfwpFGGTuTNYBc3eAYP8BuNxhJkeVJubhmkFb31CyBisRyWJ49xwFoPMvCo59ur1upvTWuJLKQGJ",
  "key4": "ZNpHsfEt4Y8JtGJdX43uQzkUat2uKp5PBKjDSnYj1BZg8voWzw7E49GBkmXWpZnBg8mJg2AfHFGg8VvLjLyGoz8",
  "key5": "2gvtckc2inq9tA8bBWbzrX7UAXAp7m8eC4Se2Hifi1wJRAqLH18bkgmcVeumPM4LCtG48bYgZji5jMDPxPuqzHDC",
  "key6": "Uda3vh1KE1xWimm5HBSKqVjzgrADU4HZZ9A9FDdR38YHiXWqhKeepwSNSneCi4wBUBm2hZP2Y8Vh9yqAvaTgM3j",
  "key7": "5MWKzdsjF2oACsaDLSsZs5kEnozGZiq9pKQ2n1sNBF9Xhr9TkAfoPAuJuySxRCRdQTTAPsPH973VvnPJxS1aWkap",
  "key8": "DVngcsnL5kMSuCn5wSXbzAEzyP3S6k4tHpkhHMFrnQ7QwN3oGWS8SVQZL4i59pighYHKSjANJpctV18jrsY3c2y",
  "key9": "2sGDvmhKoS2AwSCqLZt7tASM4yaY7V5DvJFdH38Vz16ByyWGKRP8UCSFSyZgEjADcc84rNVh7MigthyyPbUaxJrP",
  "key10": "WppYVnEh7VA6fiZnYX77smGRJrz2Cv6CZrj4qpYCDcfYv4XEnZTJUUvBLrzdiC2SzCu5pgCXLnCuKkwwpktrJCZ",
  "key11": "3fTmDkxrdpjHUYpyVMFj2FabyfHMfF47HWJDB2nmKg7xFz1JNr1BVmnzKeujWdju6DDuJqFEjBBMFUby9ZNfbXtG",
  "key12": "2upR1zY56yGZx5QuLoi3H4xg2PnG4W17ufhfVGFu9hFs8LthwGdT4jm2wJHgmEgm93Gi8fhbgdGExJS9YCFenPUz",
  "key13": "3niu48TXEHSCz46mctDW66HnmnsPNaPidh6VhZC6WvHhCEJesiQhFauLPLJBprT72EYVZznUJ5LizxKzFpky54q9",
  "key14": "7RZ98dWroagjrw4zwLaCzCA8cixByUxWd8CgC3DiJEKUXY5qVYhHQepQU7xivaYDQmmzteqLZiQtsAVviw1CXKG",
  "key15": "5hk4AZ9BfJ1cWKhkTPvaYLfBxDKrSGkk3zLKUtoTAUkcPs6ZfiD1e7tqFSESNMsXGmNhniTgVAyvSrZV2ek4nL8R",
  "key16": "39Pujrc8SYFW3BjTP92vWAu1PSoGdnK8P9CioHus8xpTTqB7t6ZvaD3zJ4i4wPcHbSeWfyTu9zqeXpsQPXpux9Wq",
  "key17": "2Gomp6FUnjJtVqnXosekLMm8s113yNrzA5Zb2qzNQj9keHTJFaY9j2xThesHvpnmc5LbmAb7LziDXPJ5MFSGFmcx",
  "key18": "29oNhbYMXaad3c9KGLdNiBGYZcQBXwY2FEHyxmYDa7b8HMfKZiRokrFEFqN6dVozwX9bb7NSRVU8he7PrzGAw714",
  "key19": "3KR9vPK9aSTWGTdqBMQdM8k6b3YfYfcArjBSdWK2z9nqX95t25FSCpxeztuiwHYreXjF9L7bpkye6UsT3LckbvQF",
  "key20": "2hXA24ZEyqnXYkTWwENA8e1HbsArTbvdj2c3tX6tj4Mh84MjmdQV8oJ69rNJg1h4BbYV3qTEVM7CA8oNagYhALyf",
  "key21": "29FKkN7yLDRMCCcxQgteiWHPsDY8vx5XafJACVUB3xj8Jaby3LpixpGSTr94pSi3dBWsgFe6sMk1EssLqPFAs1ac",
  "key22": "2oAT2fk8qxVNiiVSLQurPspJiH3TpXmnFss2A5PCo8ppr8TYg42idrJbgFPnM7eofqBPEereKKoxQzPMihbuqV6D",
  "key23": "3evXEwsb8C8uogjoKgsW5yJpgQSTc19j8qAfyoBcAyAvSda19yb4WC5kkPfBUnqp2wnM1EjTCUR9phVsxM75bQCQ",
  "key24": "3zBGpEBRX4735bk9pCivPvniMCcNR49KwXULUY8C7kuG9U5nNtmjHeNQqZrdTBqef53PDojoYgFHUqoFfLA6QS6t",
  "key25": "2W15hzuRhDsxXoNLNu4f2UUh114g6A8HLC9aJ38PMDnwpnV9kLkdiDCJDxGKqGFJPdKdhsNRmhvQL6if822Yp5RS",
  "key26": "5gFBnmPABJ9gNaQ8MqdJ8D6gVCv68GDqtoGfbjovvXBSqDr8xXGmkhpHAGknDnPLXr96HuVk1CpXAp3LCF7fRKX4",
  "key27": "5eUFaqZzcGdYSakGiqUJ3Zxs3tZLUg3ECCjd8CogDswRwE5uDbsSxmwXnwi6atXXbuE256gdVw3Ux3rvM5VWsWcs",
  "key28": "2R9mFBeSpkHC2roZrd72VYEqRsBKaJDcASu7Ni1e5A55Fgjhw9L6bV7CfXg3ALz9Y3rpWD1ryZRakvLaimbevCDh",
  "key29": "41HhgxnkAs2HUjKvTpaF2Y5Whdq9qtKrdDDrKEkW8qVaY7fiiyxcVkkSfYae4ruiqND2CqqdkVuPdt1UVNkhXTK8",
  "key30": "wonjXVjwB9cTYs4qAuiuRu4DUPuXAJiwbKL4oAFyzbE1QZ9NrDYsVb8JzAaGV5nhVk4AkmSMQWFy1pRJgZF5f9G",
  "key31": "67CgEZsggYeFep46e6c3DhbqGSiMbf5iM66dat3A9dB1A5inmC2rihjUagA8qpxNnCqWn7hCZLHSs5dqHeuyeDfW",
  "key32": "XZdsby2MLgMHPvUcxWZo41oTbNCq7mQZFfCRwu3pASyjkpcC8fvN2QC4ZJhJdkYgHd3ZuJPksfPWhYKbAhHp3Ca",
  "key33": "3w3trpVaHeM7rxcpBNaW97GmfjeHnXGFaVoAFd6iGxD2m5B4Rg2MdG7PpGLqeTPCNRwdqRwUUeUfqh6gZhYQNiuX",
  "key34": "5ep6C5xg3WVZbmWVoSA8K66rG4Xn29GiG4o159P9oNjC7h7GLQB3RAmS2177FTomMykv3MGpw7wQgMEUvUT9AyAJ",
  "key35": "2hr7ACEBJnZBjhXXcn9ZPBjfdSo5Hrph4wyyWKdKTSxReXjsW1gMyDBTshzdSa6n3d8e3omMiN9oj9ozB7qERHM7",
  "key36": "5XypHZmAduxKSS5yq15YKQVvsDE7EtxfcHx8F92i15W5RsNDdP7Xx6ASBVUKqDYA8pSuJaAQRXHG43efTpoCwVSf",
  "key37": "zPYhDxypZcATrVPjRDqNK6Re1iPXNkcmMA5vmbkj84RztHKfYtL2xuiRyC9Z6AaTXtGFh76EmXwETVqCq33ijLN",
  "key38": "3AvWHZ8Z58NGiuJoEty7UWGoQTUpjrtXQPdEAX3PdXC22J46hzszoPENgE9tcdEMGhSE3vcKBwqs5YZgS6MvjY1R",
  "key39": "3egZ2SKdadxVqgWjaUtTVsU8YTiBWigKp2U9a3Nu7zvQs9M3Tg9E4vBAuLurRt3NJVhB1ZYkXkWqmWXGAjmir5bR",
  "key40": "3z9SDmRevTnEH86V824jHRao38Si25PUDh88s5i6SKYwPmoyaDdyh9JbyDJCZCddPxsE4f1KptkMPbubczJ47acQ",
  "key41": "2BqRJ3bYSUx9aJ4DeeoL6mZKsZkR5dJgQCvF2tyVevv2SQSZv3innZTjQyWA8yB1GkzVVwhtpcfToHNHUDDWYbjp",
  "key42": "dD2Htxhe1GFkq8tDM3fbACazfJgfexWo8nx4YBc3AggnzU14csfyiq1KFg9ovxTyfacaH92vfpyMpgsSLi93sFc",
  "key43": "Yd18Td8sEFxQmcqsBHm7NoFSuNJYp4B2QaVYyY1YgaizdmjNkAFSr7k79yYeB53NnXQGvoXKBh5bBAWtEvBZMqS"
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
