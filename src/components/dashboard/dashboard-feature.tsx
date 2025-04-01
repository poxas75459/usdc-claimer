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
    "tbqJu5Syr58msouoXx2mQbX3xTuyJZmBQDQXjWhNNcsTFKnaC1sTB9LsJZ3k256bbphU64nbtVcmVcdZKBc5uug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45MjBn9Pvwd93q7wovJUWuVmPXJ6TwWDs154Zq78faYjrvHQ6Zz28FkaABPRCW11rqfEEtb2gjj5JnksHTCFLag2",
  "key1": "2RhYabK5vnE9emdrgZMUWiu126FYtGQ3oqsmLD91M9c7t6bqHeifd8QqRwPNaz47SKw9vGaCym9CnY8FG1R71xyf",
  "key2": "2vEpndVvdafyQwHQxDQ2nRLeW24iHek2MTvkASGeNTkfgFTCjg8V3brr5fkxFZmnXV2WJvQsNZASA7aG2a41ykpG",
  "key3": "kx1y4V8dF5WyG4D6XQZMSbhd2zFxyUgjPa2dKegMqUUb2fc7nV6aTwM1UCLt71UDomnxqpVV1q3jySPFsJEsGYY",
  "key4": "276mPYeEATFGAfiuhMxLZz8gtD3MvT8k279zhrBGsyhXhJebmncK8Kn5HxcTZqn9iYHydQYLthvnbu6QqxtK9BUq",
  "key5": "2Br2aAkT5PNE2wmsjgm9cwbwTk2HXLiDgF7QFDtP5XwSevcKzyzA9SmPxVYXVJ96G42CQh4RDrTWVDt6YZZeEUAE",
  "key6": "nqaLKgJRNqntoJUsRWsVxCRynE5VvMkkQWLri17RGyz7VNRd3XYszhuyMjjsBxuHNagPFfaYnknHnV39U72jnja",
  "key7": "453FGCV8Rn9x4vfze6c8mBoeuX9uQqLjK555wjEExcXFSWJDSg898uSadoWBSKjciLRzhqvCP9gw8qzDR4DhQ3eq",
  "key8": "55VoQy6vDrvB3ZSgCs9xK4yvVHTcwv89k7xhLezcecrmBJmwkrT13FZrJ1aNF6JJtBXa8AnVrao1ho57ZwyhLgtR",
  "key9": "2uo2XZMZjmRZNHGctT4LmLrHMwZnNbbPxbAqkcNb2UP2YueDKc4jv5Q6GMbMU3C43tU6vaqTzxZ65YrxfWmTDHhq",
  "key10": "23vUkzQdBtQzzMUNwEojLLncfDEP7d88XQkcovHaaAe8vdwYDkCMCV1zJFNPWbWGCQakm8YxjrL4YjDBd84b4vLu",
  "key11": "5UqMEomwaoUb8AqPH1Kqk4A2FRKrm2LJHHf388sencXfVH1hdKJSnyFGWpGWW3QabzpMsBD6ehvL1aHyCdhKMehy",
  "key12": "3izNvzebvwMhsGDojo5wC7wJPiXBfhHaRgPrX4goBEvCoLBYunyMYbqS9YkdwsneSTmbPusizYnm2ZcJf6d3MXpv",
  "key13": "3hqpo4G6UXGFPCcHiriqRJxjMABrxv1cMj8jRVhSzEcsMtxhUg1PKkWagCBek9WLRrPnW9W16LFMaxLGJwaN7hzx",
  "key14": "gpz1w52ysesAne2xTT1XejQTYDwh6dLZNo3CK1CohULvDZJrPpRpKXD9nZXfxvoDivVQKqUs3nRftS6ufDd3Gy7",
  "key15": "5S4Eh4Kj2uuQAprcxBNT4gmWbhcfUEr9zdXyXRnQ1SRAE2ifbSrmHwCLJNG131rxxuuRHbMfWcoFShSvFT6wtq8c",
  "key16": "5TWFinMcv7YKy9P2gYq8CVhVTTmYiqvDHQn15khjz62TjErJZouexqLj2tTjVYUBjx4tWdigRWSHDbhJDuFMzBHS",
  "key17": "528RwehQRdCFr7fNoKRth68YptD4Jx5675XcS2XLYX3QnabVyww8Tb8HzDnfdDf57idQpa44zLU9ibKC8dXE1mp8",
  "key18": "33r1cPmPGaTnRHFHsTdosQ5GTfBYBGXbUBXjxK6VpBpx9tHo7ZZ4VT1CrF2JFJ2pzcBW2SZ1i2nsQwseycaL3CW8",
  "key19": "269rQfVxijXmMMSKay7h6qJSsu3iy8B17vMXMhXqLz9dBtoUuUMpvA81XtUVsd7ct1HFhGJBx2PQx8hJHudJkVmq",
  "key20": "47Bf3mhGohmk23HVDPMoXvukLuvJdDfLqsd5bu92k6WRyaDdBbAmnLzng8krT5cRbpRqTAwNHBFPnj6Z1HHVB7KT",
  "key21": "4Hdqh2PfMfJD55jMq1nHkZAMBDRaphGKYpu3TFfi7q15hTEYrnctszX7PFezK6Z77234Syixji549qKsqnr9cz3W",
  "key22": "X8Ta2rHWw4aCgacGsUEecpM187ib1ViTd3wNw85Gnv51io6vqjpNg879zUxsCuXvEW6M4Dz6V5j5pXn5TbbxPpG",
  "key23": "5MnhMxarxLK3npYrGkzqne5WCrafqTddGqKvQe72tuewCbvx4YQmQnYmBQnXpAxzpreHtJHJkAhUaaLihhGJrdxw",
  "key24": "3sTSLGwWFXBN18xpxDT6bxSse4GBsMxm9W2f6rGiyfpTA9Lvvxh6aJqYrXUeB2fREHXU3JxF7zQ4QfLo6C1q4MAM",
  "key25": "5b6oCRJMwekDP5TQi1RKfvk67swAvhPp2AM1dGEXqobdoborr92W6ibr79Roqr7b9ZX8xak6DLAU56zoxqaXk4LR",
  "key26": "62TPX2Gsnov8NXoFsxzYyUHaTi2PrJkxeB644a4jQTzZAzxo8tAmGohMGGhr3im8iG9kSvVmEyyVWkxH9iDHKffn",
  "key27": "3oQnUSdCx8gQwbTYZQVm8s817eGbEJM3b2BtT6u12CBE4QQAAsrKyHC8Jbvtku3aeFyyRN2NrXrhKZQCkpnEzELU",
  "key28": "LenTfMpAehkvdhJexyaVRQ7H97BoNzgZstKJ5pB5q1ZQTNBCHJ9LhbTx5fDFVn5N2bxEjhcgqwejcEzvDM7H69j"
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
