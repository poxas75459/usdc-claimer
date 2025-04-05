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
    "34RB392tM3Df3WjWXf35nfELN2yX2iq56HMHrETBmposQcGgPi6bCvVF9jK3XoNbQr8BezBstE44grHhP8Qc75Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WfSPTGvQB4VVxGWthnkEuL5K2nxPQKe58uovK6tWQHpfuLbjpv1PgvwtkMJs4v6kM8yiNBhVYbGzZVr1Tsw3cXQ",
  "key1": "5sqnMXvLHeKZu3ozxxbWAXdd3DQKkEScErcgj3AMjp4b3AJFMQXjYTFzMciQ87XrLLGTu6VqgXHUwPJAWenadBwv",
  "key2": "4rXN8DM8W43UgUJAVC7BoEeS49k4XrZztQsgdU6QbCJCJaHUSa7SBcL6egAobavhNWssZ1bmysbSSLgmcnWS4jft",
  "key3": "kkayYTYLecALpcXFJLoLxUxBqxxChb4NrTsTLp3CydomzfJC3FnKVQXYnmN8dopgDK6GNeci3zmKjRukMXgmDWM",
  "key4": "33r9NVtvvdiXvfjrvnMhmp8rddEJEoZJgE48UTF53Auk2LuM4PiqhggMdVgw86bDBr1wREw2p4ZeSTCCGqxEBKmA",
  "key5": "aYDwC56Jdmpqjmmmo96Te9YeP26pmhMbYqkCLTsTCuo3EUqq37YYMgoLvcAmLDxe5RpgBJMeVfpkaZU8VjWAuxT",
  "key6": "3s7JC199cteKFTddag6myvW3b2MnXcbEAcT5e6cZinZikH5A7syhYbUkDoPHqDwnh5vRP3NFxooPVJ5LbHWBaq8y",
  "key7": "22fo43cyk2QECrcd99P52z9pSjaZTWnC8rsLi7JSBcyLquhygYgZfLeyZqgipQb4NTvQy88SoYyiCEwYbG1eZTmR",
  "key8": "67SydKkBu21S6fDY4y667HP5fNg9zczpMxKgUpU9SFpwFMWmbZuXbBxugzZJTfXNAjDiteMzrDWzrfFuFEQ6pYTQ",
  "key9": "2ekRTcCThD33Y76csYrPe9c4LUr1HnNpkhTo3ft9fwwsWJmQKweQwrNJY5fisBQbyp2uTjvah6YjNPBkWZ6237ab",
  "key10": "4dLuwiEGqxr4QmoG51Sg6qUCDdnwi7GDzeuRuf9Avgw3X8dMfm7t9TihAzLnHRais8GXarRnPrELgWb5ro6sY8nh",
  "key11": "5zUUSpb7MRnMipND9rdMZAgVceyqH9Dog7zcYPbbJU9EtajzttG5iiPwBrkgiV1kiaz5TuKY5G5DghPn84TXjZR2",
  "key12": "y8WpaNybe9RPTGVTkXSJmZvMoDL4qmkqbsZX4p782GY8e1H6SioMvUjRP4pLBUKhvyhyWrkvEq4rsrgGryLab8S",
  "key13": "2L4vVtiB9oqxhYq7YPFaekisWxh66MyVkT7MWgHgqzcV7sVb1A8rtziyKCRuJrCtPcq6dqJTYoCcMoprneEkD684",
  "key14": "3zJNgqP1A43XFE3SMES1uY88t8yKVK32dhYJNfZgeddHaBy2FjKK3D5rZwW4aAh7dF5DgsHfWzLuPiviDQEugd4w",
  "key15": "48BSiAFVzorUE1sp5T3g1sY6aNFQfWkX9RS5oZC7ozXtG29M4t7w8rfoiALt1cUjy7ehFgJUqoc47QP37MzQfdqF",
  "key16": "2Qg5ZDNSh8HmVe6YRuYuQw5HFYzU4PcVFLPCK2HKDpKQVPRSC6eUmNncG9ch1kyf4wE3Q9jQ6Xx4JjrAyX7Wc65x",
  "key17": "3Dk8NTQP8NTY9Unk6FGH6p22oQ6iG4hLWFAVD4PxjNMGwaGqXzB1MmPXkdduoPkjoYJuKFxWoJhqidaqT5GZReW8",
  "key18": "2Av4fg2KNGsHZSoC1edsay9m3DMJLAKQZX7JNjc46HtnVanwN5hTJ8BdkvdqxBQWjpJiyhkdw3MDMKCJ7vD2youQ",
  "key19": "f6KTzsDWy7aLw63nqzmG4wpJRT2UEhmn67g9gE8fvpddkhp2NxRmEBwpzgtZqqxeoxZgqvSQA6g1HwKmVkdiYU4",
  "key20": "nLowyWdzGcc9BaPVXpcxwCjmnxsyNYLPSt3f2DbBbGFpXRYhvDb97wnreDXUvsoJHVPdow4hYcGESRT93GwvoHg",
  "key21": "2ML6NFiNdLWtTYjJRx3apGUuT1yBzuXcFUqkc8obkiKEn7Zm8fFA3x5DmqTaVuuTb3VQzoFpnRQo5kvj6AQGxD8h",
  "key22": "3qVNVr7adJJUotCzXRPpvTp77bRZ5Yib66zMyMc3BUtjRWTnDDhYwqHaMqeGeN5NTBVmqNMRvMfLjBAwk5mM9y9z",
  "key23": "5ByVM8Un24ztiZbEJqp1XSwLM6ZNHqUnTyiW3qwgnGwPRgeJ8Z5ExE28fibY8pbsEdbsuyx3N7ZGE5i7L63dnJJg",
  "key24": "5uzJEYm26TxfbRDTJkFKwN41kMTCNdVfC65qsbByMNg3qS3SiSsyjmGsC5BfATyWnpJSGZzhfVAitWwg1KcTjpo1",
  "key25": "2BQ4hNXfuchSCirT5q7MAy2PL7PkUGce42Yt52rpQZNZEPTpa9Cd1yVTUjeT7y6C1SzMcpMWPR4x6DmTapgF6ios",
  "key26": "4YPoGzD7yAm82SznCS2Y87aifEndS1Ud8VX7agzdAYoHGMGZXJRuc1jvoLZ9htnLqFm9YRKbn3LsDsBwcJzXagK3",
  "key27": "3tW4Kc2TtCeHPf393b5kBppEuFpJGty7pbPYRLqz78KFdxND6EcLSrJx25YQAsESPFFtKtYYaz59AMGDfdttZwVN",
  "key28": "56T7f2dMBMu3W42LbnwYmeo5MrFniWS1WXZWd7RAc1kCXujJPAKwr8LMWW3kCyV5EKzhg5o8CX9Fgi7EwsnpF1b6",
  "key29": "64TGro6dnbVBVD3W1ZEVtmB3V8rojXRFoVYQ7MfPr7UrowFdq9iRVtSEGaSm6jzKXZV3tnx1uBzdS8MPzfteeS8C",
  "key30": "4h7cfcFFf4fgaxb6kBLbuw8HoNmM7oS9CShFUYTcf12JsBBzaB6HMXQXNtXTmjkAqDbS8EsjeGdQ3mKqRyeL8Co4",
  "key31": "2XdEVKX7Dm1PJhTn4b9d3B5RasMzWwkBRDLcCGVftPGapJj6fA4GTzVmUTrF8qUeGUYEBskygLUKNcgmcrepdyLW",
  "key32": "5HgxcRwETojGGRvSF1u481u3qr6zFHG89KGaYFAxv6Rd4MqKadnsTSWRYRH6PkAELJkKrN3AVCh8mRb8Yg1Q97rz",
  "key33": "2ACuuLnjXW94xHQ7UofT5uhdesw256bQxPD2uJKtGNdVtL3bgYY7iC4tKo1MqM26QYRdCj3QRvjZ45vHJNDVcyr4",
  "key34": "57TBbUijWcg82xGMR8k3fkSVhsYYKFv1FjSkuYFrx8mjjmVT2A7MjgQx2K61CUq5AxiY1Enw22V7XiapLJ2uh4bk",
  "key35": "55o4QZDxc55U9SzgpAvMVhFhWYufyz1jPZd4vLHSweR2FvB25HeGvXE52y9NnNMEt6U5pWRP95uEjESg2BoFaU3G",
  "key36": "5deWRB2ueGevtMKiwHB5TB1Aa2pTPjqP8jyRPXC3xgbmUFxV1bnw6vNDVF9g7dcjhBcbPHtiYmJNRS4T96Hhu4WD",
  "key37": "5ZE6pUtqxrG1ztNJdCeWZGG9GNyF15GDKVmyyF5FmzvNVY412zsQgpHNHsh4AKMEVAQm3bEqCYaYNajxQq6SDL9T",
  "key38": "4jp1Uape37yN927JHpwGrJyVPCB4Rb4sEwDbENAY3E66esEfjYcWUsk4GxmfS3xJ5EYMhFFBotcEQauoMimRuWtG"
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
