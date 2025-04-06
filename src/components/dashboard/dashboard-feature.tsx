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
    "4SFg46kXuPo89fUsHM6PcEb9Yd1TYSKRB7wSYHWevWp457m28hxY1SSMe4hDka6Fins4SZKRyedceA1SuLXgVCLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8x38PNVLqq8qrEQWcm1nqKuwmdbmy8ZAbepfJrK6xbHuoJW7mZPwRJfye1M9LVjDimPYjoaYJQSxkX2wr6EMLc",
  "key1": "Zt7bo6gkrWEix1qgTZR1nC7twpQsLNQaXnERUz3NWU1W3pMxK8YTASbqgspsPv5mg7Vqh8wbT49Z4JP3doMnbbC",
  "key2": "3m3CNAptSpAFss8JHm1SxXDtxKTmDLnLNqivGYfv4JE2LQqX7uGmDUuLC8Wy2JuGcN5WBMsyZT4bSZQF4yadUsww",
  "key3": "5ewLWLdpCE5xG8n3VrrR5RoVTG8H5dakjjo1vGL6CNagYYVqHkUxTaAduBzjPD5ytB2h2F3HpQDj9UdmWmUXaPha",
  "key4": "2h1LVFaVHMhWtge7r1o8qoh6Af7SoSZaGuDyFGfXmRX3i8xUiu2uZcwoadJW3PRFUXWx335NAV8mfyYwevewFtY5",
  "key5": "3mbwtqR1vdoxbofUYxtnYBzU34uV7Dzpz38ByBohVaxRrBF9rUh9cCWT9uLcgJQ8GeSxeurkrjoLTAN73dXcKCmT",
  "key6": "54Wn9Ngkgmy12qGJSs9TgoMPLcd6tidgmEQrpowfbENFH2A2xtH7QStUkWPF41gJsVoDWQpg2rhmwmv5bCrEGkz2",
  "key7": "51xzLZ3s7M1XZAupEvaDjRuhXnhc35dN4R4aLQm9cnkdAzJBBtvdDT2FF9sskbF9VaXcbeVYzYCLoFRF4G88uvw6",
  "key8": "3dtNL1HS5yVhmijdgz5EqC6XEwcJJZh3wogUwzKD4ZzH6nc2vFobR5ZuKp6sF8xSmKH4VFMZKzHgSTcCwtPz4G4J",
  "key9": "5qCz1HgCMXi4Q6N6iSrLNhirt6WTDNr1mQqAwa9DabiXy8KucUPccPW4qjWQrN1tosXhp54sMEpxL9xxCCYJMqPH",
  "key10": "4fbAEqyZ9x34W4v1aZ7TAvc1x9ktFZ6VZ3XeQgKwbXPitkXM4donpHJxUvSjzAU1Pm7ayH87c5UE28zrVse2N9YE",
  "key11": "3Kk6EiJCYGUkGnYYhKeCnenSsmtgZAbpjAEuMPK7Qm9KeHLU5jcwXPe27SEUn5Eua5jXvJdzycnzPfGYWCNfn1Gi",
  "key12": "5PJGAsL5r8eTmfASWWvpn9JCLFhv8yoAHHe1LqzhAxHqHnrShD3j8iYF4qeFQ54xcw1u14eLjorDMmp37W9oRgP7",
  "key13": "2rQKc4t1w8wi7eUNZgbp27yrVF39JytwXezecNNtmwC6BdjUWcvdTwvqKQizRiaqKz3t3meYcx8CTepVrxmkYxih",
  "key14": "2zK5LNpcTwJXmoxGkaY7QX3Szk8Z6Qphz8dvbBqsMrv3AUTTC2gnemGBhhPedpyqSnv4secCyHXoB23dtVfbXvHv",
  "key15": "G9gCVTaP1eR2pMzbrPbENgjAYyLJYcGWyHK7x1vzkNPmHfLqzQQWbnFFQjtkVbbh453669yo2o3HALv6Qx13VeH",
  "key16": "3oCmSgLMUSkxZjp9Ys43FwyesoNaG5nkHd3MFrHuxCJHjHXy3phTZqgKkjrs9Xqa5XcBs18opMD255vMQapYhyPR",
  "key17": "5daiKXeLfosteXG8BndfVs1Fi6PZaqiUJuq6jbFGZsmdZxzJkg3cm5AtQQKD9kKpNGuXAJvzqfTDQYr4JmB8WR5N",
  "key18": "5RXimgkQCk6EhZnCW5ANRghCENDEc5LdjVi3911kAy3Rg9QXwjiPkgrYhHzMujoNm2kBCMYkFmboK8pMAftYXvZ9",
  "key19": "4tGy8DFnsmGCQMC71BdWAKJfXAcwhCfJbdYhKkutNq8NaFKDxc63j239AwZoDdnJU7LXiGpsj6xXLMofoAxZ1obn",
  "key20": "3ujtndQQhndrZiS4egFf1kEuoRaWm6Y9m6Agntz1NNtpDV22s6ZAUWqG9gnMeE55GfEEb2wZuSUQLUF9gpAv7qsd",
  "key21": "KJa9ee8GBdfSJ4NFnB17z9vhpKXXKUENVCTUc7sMw5nrwMpYuL9j7vTG3jqgaZ7E3dUC8JEqkgAf6RfWdsxWioi",
  "key22": "5DEW3ULLejgJR6EwWAHg3VaDg69xXtPcG6y9e8BHLRa4xQUvYVeXJ4gpd3y2NwKDQQXSTgAQEocTy8Sio351PF8Z",
  "key23": "3ziPbHD16WmWTFq1DZi4qpy927YS9YLnwYSxYUozAhH7s1v3LS6T4qD3TMnuhHv7RwgW3NQnTVBafYjsR8yJ9wT5",
  "key24": "5Ctv3NHr8Y8QicHNt42QFg2x1fzzFhqLFQ1ximScUc2GiB8e6jknPaMnW86j4EyhLjBjzFT3auQ3rUnd5VNDBRzo",
  "key25": "5jgEXPXoazGibETcS9SdNFmNhJsGkp6mem3HuQjcaqDWbG99bYv8KzjxeGTZNFdWMRX52JL1MD1EH24gPGWL1GBU",
  "key26": "2QxABFsWGPXE6fce5stNxAi4gQ462LDSM1PnvBkfTRzq9SsodSMxrNKzRZ72UTEN5HyZBvzb3To8hie5Bns2scCc",
  "key27": "4HcCuwrLtXNZULwrhzkd8xmeJ6LcZsfiG53tdB6ytSBGsARuoPysBJiMw8QKrdh4hFhRtQLQa92YzLmA5dR7X8Hq",
  "key28": "4dUnfHCyULRTWQFMTZ7BCFz1rjXjbujQrKM1r37vKtwtSr31KP8X5JyVKRKeJaCarc6hu7ucY4asg6YCi7FUJqdc",
  "key29": "58yp65Hx7z2HS1NJAaPbgxhCYFeK2gQAN8fbuC22zwjNiviYHQ6KYTpEbFMmQPcbSRH28MdqjeP5mK27CaDifwrq",
  "key30": "Eqj38ny9bDi6sVwjf79kfTdh5byX5moePN2LW9wAhh4HFffqQY1cRrDBPjAq6wUvEs73kf1q24ru4wzrrSc2tib",
  "key31": "4aqWXg6efp4YYxHEJXcZ4cCGniJdmMpFpgfDHd6tjh3JsBp7t4Bhu8y5Kam7BT5dD11BFs8aM7mnqxUriXtw22mR",
  "key32": "65WR7sifqzFBzPN7tKG8Cnqb7VkoAYAJrrVXGztxEZw21JPt3YTJ5NUDrwknk81xoiKDFA1DyDyPsg2ekUJi7Vvk",
  "key33": "JLURYtwYtEu8oMbqhtbHcFW22Kf3D4XZkhyk2t5NowwFh27B99XPbQrmucDudBp7Q928JXzRW45NowoP2gQoxzU",
  "key34": "2YVDJ8bV2HFhbSHfi6jwvh1PefznXGC15cyK8eG7SWyQaKPYmHfm8Ypd8Rqm2xKkMGuZ9T7ejSQRUpQx6Jf861hd",
  "key35": "UF85otvtytcsoCd3yfszgJkFow8Q8AwbRwABeNeJkqU7HNzWASn8f7sYATVBmpUT8JKw9sH9NwyGB7Ra5JRXC12",
  "key36": "32YB8Lsars8cQD6pLkwobcSDfjbySBABHGuLn15A3afr5WXSYpiyzmEdgikF6EqbjDXtNTK73ioDkGrJWgwYo2Q8",
  "key37": "5HKgm5eDouwo6eursurwn8Xt9qzcYx2ioUzqz5dKNXtahVcjwejpNZXLCUpx4vh8zK2xTCU5AiJNMg9hSQN4KD9E",
  "key38": "33JMjGa7W26BsKmK4BjMk3FjhSshtBtLSLm9s5V1RRkpaR3LupusbznhiQnHrMXF9aSok1pqpwkKacMF171VfbM6",
  "key39": "2X5x4UnFvDkQFaojFrfbxuhzuC5XFAFyivLDCMDWRjxzEruZiH4BES4MQh1k2X8rWK5aMpLpU81C47JGhKuziGAt",
  "key40": "fmdi59ar8H7b4SZeLxwcEWQ2mvQBBz3Ckt66PahaSHHDdiEYhtvixmf6ZQofktP6YM2zRMAuenX7q7fGUjt47eL",
  "key41": "4U4E8woN7NunjQTuTbGKhdULVAaCHjq3wiL23DqeZUV637P3XHnr7bhieqPTB19ZiWMzMxRJ75A9su1wwngpZPQk",
  "key42": "58ijVtetgD145wFWidxXaKEANdtGwvFtLsWJ75Hc6oitC1NckkD8LDCmeSW3yswGJ3sCY6Rr1oiSQi1YoyJ9tEP4",
  "key43": "5MXcRaxRzroqdEUz19pEzoitBp2Vd6thzhDWbxkDRpC16W1P2tCzwwX1FspQzbFtwqhPMnYJtuPj8BP6vcFPdaS6"
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
