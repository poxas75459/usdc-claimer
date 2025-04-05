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
    "3sy4PUTiqxwcBGoJebBr4U5biy3zTqT8XzmYdHbuxhfqL3PsebEAh7eJRBbFXS1WvKTjrRh4yqJwjEr4frNW7Yfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51fSyvuEWhNQaCbRCDpzXxgGpcqnkwasArZkSWYAkXnbrK2GeBaKVas2otLGbQ2CHFasFzqUbC9BuaCeU3kWUZNR",
  "key1": "3MeCFUfmHpbNTeM3mtuRRCVqbSAkNowyH2FVQetWXWRxus8bVpRAxNReZ379tPYGXawwb7hSExfXDF9pDWVDovHq",
  "key2": "pQgt86xcjpTiEEPW1zkBPxpzNouxaL7aopYTF53WuTv35dhkLP4qost28AB5TRxZAoZyhJdpD7qHZeXefQkcpGW",
  "key3": "3zJXDsAPdiscu7NYoA5NouHMzcqksvWTRXr2LkUsPLLwYjibe6BwUqGgiSHCohtbJXk8N7xjLPaG9Wx2RCY9RrAL",
  "key4": "3YcL2QNNtKhaR4w8wi3CQH42WDzoaGnf7vcatR6iemtLrprHzfN8ignX7A4UMjXCUcL6635ZXbMZSxp85EckU4Py",
  "key5": "65nPVJT9TY7Uosa94BxfM4h91q1k6koMKzALEPuvQJxuJvjPvGz2cw8VERdYqAGiaQqHxn1d5WZcfA1YN8uEormw",
  "key6": "2CpEMaQBBqX724MnZkthGhyF58MDv5mbLsXbgvtQ3FiDMHWdxYWsefeTqBMVL5RcpWsBQSUGzU985tCFYAMVdHwv",
  "key7": "4Ncdn34zumgrHorMcEQUawR9GUxRoVXPFD6yhFRYw5CFRNX96gsKzD1G5H5f5xW5Xm63eq4LhmpwzreosH5KcUqV",
  "key8": "5zLREx5cHjsab2pcqzswqSHaW9xJYsJhoQ9cKjHzWZ6pUC1fDytXBdLyA1F2x5WpxZ9ox9zDRDg7aYwgnt6gRQkT",
  "key9": "3zj8TcDY2cV9ij8w5YwZSu3nXzgiumykciZZ7nMssQzbqvRNWPxvKEgNCdmwG7PbsyNyqkP4iSfmMJGRbbAQRXUz",
  "key10": "QKdNfDyKz7u4y1DVKPNdzufw7ZZbpAPd9nLTYSRQ2JCo8n7tWvegXsmxWQ634KVppZ91EKkLwBCyyW2YhjAbAb2",
  "key11": "2VSLe9Xx6o21RUVStHMyV3FHQhcJ3LWGMKP463wGPBB6LwEZmWnTjTLWeqHu7sog6RWZDitW9uWauf8Sw243GYkY",
  "key12": "AE21N91DTVbs2wnJ13xHY2BowhrKzti3xhxheb3vDdGteuGz3bbkBbWqBjhxx2eTDbFxbbefsHJpnF57bP8kTQB",
  "key13": "3Yw1XxWhbbXUuFkhoLH5wikV6LyZmATQ4RERFTp8PjEmjkJ1ZtxEfWB1PWmV54QzkfTysBT4M6QpXyLxJLhWgbW6",
  "key14": "3vA6DY7kPSqGPkJVdCj9w2nAb3zggvwyxqE6bPjehSPS2QexEE9g4XRTtgkzS3resjjVJGSAT7c7RCxKp7ZZ9LcH",
  "key15": "21okRxuJUq6fVUaNSkTZa11bEz3MmqqnViEeVFdFgT4De3mX92DcRFwVKCkkqm5wHdqTDzAbfsnXKTKNE9XNkvuu",
  "key16": "2942EvtRgwiXBCw52T59WHqgrWQ37yFZ2wjRX9aywSSad5ZCpL812PsZM8Q89xhxLcsNoDPHyaFbxJ7uKPorhhE6",
  "key17": "tc2ipSDcz4nWfjD7g49zaJ3dGRbJDvKgpKtdVRUEvjYsmoYZbSmDdcUDU1ME9HTevRmdX9mrckuBhWwFM2ULDS1",
  "key18": "4ihMhy62QPZASXk2QdukU9obz43hhqmdRY3MGfiFBeHfm8oL4LMbHndb9CQXHpkGajJk9hcYbekMCwrjDwYCkLF8",
  "key19": "5SfC3rzGjqyikd3bUSLkLqb8fCTpGgpSSjd4sPBv6S1mcvaBNLGjGqiDZdHhUVjrH4fZ8uoQkEoAgU4LqBsp7p5X",
  "key20": "3sz573M5FniotZUnUdEAVB7LUQrRouqhxRsFf5CKdmr5i7UxG44VQd6Xm1eZWEqTf2mp7caDdfrzgv2pGsv3zaxL",
  "key21": "VsGKMpcz3V6HwHbWidPauEpSqrTqo2UfeWuMUyaqbQNe1i68fWJaUb1ZmRqb5JxN9UgiY2yWxProRqsHHZedXjn",
  "key22": "3gqUUKWP76FrkKbT8uYwSVP5TtE4Wsa5TmV4VpjLpJ6KDHYL7pvZFC6vyWxMMj124GbCfUUE6W1w9tfHNh27G4h6",
  "key23": "Xbqe9c5BDVSnyNuBUeVqY9TpFYYcwY9PwNs45MN5ozKFdCJ5rbemhDd2tVeNBY8WqtPi7p6K84JTKKz77otyD3Z",
  "key24": "Eyr7wLRvT4Dmci5rVcUwJ6mWDSSxzTDV5RbCQFNb15a6oeroPKL1h17xxsNXgD85G2sdXtdf7PJG2tyq7REqLCj",
  "key25": "22TyiqM56k9M3jchaqa3Vmi8ogzKj73aqALrhZ98p9hrJcfx9CPH7Ax1EVC95Y9y2Zc8o5dVM8m4JbmWiHzn4XPn",
  "key26": "5aksiK4RWNyfwh4NnTB7LJpioF6YG2dgscmmfXvZZ8y1XHgwrPzvgfnt4LRhuqycfbLBgz6iHghndk3VDecx4sBD",
  "key27": "biTpZ2SaxWS6i4hJE1gHwm6FYXaQ1ekaK5yZQ878ZRxP31URRZkBjp2TDSFeNBpNFoPTNBBxw4uCNtv8bNNDwxD",
  "key28": "5ke9n71td1Wpj997ALLwxr611Udj8VYERDCXpQLcFL5NvbtK1jbRaeg3V1mN49YH31vmxMQhif4WewFYzef6ubWe",
  "key29": "2LZWsBEX19n3KQGqkbix1PgbtrUsc6Xff4Nk5gBS1FkwPimkBBDXxQ8YCbWa2MxgGPTRdjPfVg3GPT8bM4Yh1F5T"
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
