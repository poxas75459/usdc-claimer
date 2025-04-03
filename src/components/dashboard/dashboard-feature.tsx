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
    "2ZKsoFQoFoTHSunf77KFNuo1qY9Lar3fQHNxPKUtbC2dnnstn4x2qsBCP3bndMMV4r6JgD2skucrz1GFuSq5g2n2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8hBus4fbejKMb581h3wAVmntgd3QeU9XbNDLvDAz9DQU1b7Dot6sfJNJ9uUnJAyDiKjS5MuCjYees9HjJ4fbcQ",
  "key1": "6455L1YNWDCzbVyxwhYsGtWwmmxVKEAZ5SbcQZ81u4Dpi572zDcku8kSAVKSvjAH76VdYS2GwpohZA4PGXMxZbjb",
  "key2": "2rGYk3T9QJZLvmk7vv8wHcBTefRe8ZdbHmQ1KCHdUxm7k1m3qn8FdvU7uJMES9bPBmtUEpUaezNNmHG2P4YWe68p",
  "key3": "66qNjiZFRwCUAYPEW5HdW9Ze35bLXoLWnvShCjUyXfVp6EmBgaWMm2dmVMR8bhTY5TfuZ95mKe4a5zWPPszA1bYW",
  "key4": "5L8Y6dJxu5Zj6SuFePDmEv8oEXFWFDYemGEnk6MNuXw1LpYCM4stLgW7rMyqKRT8FYu1bzq9VXQxrJvUYzAM5L6",
  "key5": "59ycV6T4WMYiBkyJhPtuz9zAFJ4St2uctZ6ehnvZFzh66eAvhiLrKQzjCSAqoCnBSa6bfBBJ5AcfncaRf92awZBh",
  "key6": "33iZF4E99o9et8TL1QJeYtyizCzJtg1Vbs8ABmBpGXLuG4FipHHsrgng1BhgiANQz5Nm4niA7LJvCbPWEudJx8B9",
  "key7": "jc63QcqNYzeytWoyGQYuDyufZQMmDHRu2cjR94MN8Gf2Bs1q2GAAZQnNJDAYqtd7xoVTcXCtdfEr54Fg3KVwAgg",
  "key8": "2WhYquK7twbbvi84jkk9L7uAA7JTerUFpfeg5S65673A3RhiJSgN6xuZ5Bcavgt2ZxPbGyGSkorDMbr69UrXMWFh",
  "key9": "4DW8B7JfxD8UZpni9Lw5ZKDamLUdS1ig9FDm35tzwVqAvZLdDVoiqocsLn3GsJJ1oxrDYSiTJDCfZNbGwW8HKiiG",
  "key10": "43YEm1WuxdUgASzPtzEWiHYgUVLRCHj8mUfE3CcQKt5BTEnMcbbHPT6RJkRuXcihbmaVdh9H1wUVPjtzVLvUNV2Y",
  "key11": "4F71TWeDH5m8hxCFHJKRqdgpV6CG2ZdUDL2GoMzduta9hYu8cUk18dDk25Nz8BqdZKaLx6QBDibsvWdZFMqeGcom",
  "key12": "QeEKnoMyKM8HFGpX5h9CQSVWUX2YU2MBQGkCkDMCcfkjqmZbLE9c6MTY6aJWuGBnaVf34AoC4zxAYSDQJ3LdfDT",
  "key13": "2hevorTizNm7MnyzWDErLn1t9Ac4dSRy3dnhanRkF4bTHwGT1kCFFrGqqKxXU4e2d82gDwa8VV6mL4EgigjNpG15",
  "key14": "7eWS4pbUdbfkWnXiD47sgjJC4FZDcogQGffaN7vQfEwRrDXatKQtG4KJNB9pt5QW9zdiA5z4aEbesr9Pz3PjJg5",
  "key15": "2dgrfBNAEUUx7HQpNfgG45NRNgoqoSpwbbs2xHaHKpu1XViiKskmCtCfYHL6cwiBEZzWgm1zmzmGXy7KR2YPdnUn",
  "key16": "TWBa1aqc6wrxXNnXbbV2ima71e5xFut3pvKRKQHMeFpQQoosPFWSDqbhmWj7g7j2rCmX6FMfAMr3QQw7X9Muguu",
  "key17": "2rN5FU5dEZyeEbbq7bfpgZhJgbWyaaNfyovJsboxLtcvrz7VaoYxoSwGirckausykwwJwaRWWbnK7fk7j1mD4a6w",
  "key18": "2FojNq7BBhizBqYLHeLLsLjk71BmCmY1GD8rQzJhedFTfkdkQuRTsM2bkj6JugkvEsRZE3fW4MVVhDQ25Nq2kd1Q",
  "key19": "fGPxFjfK7AZ9XkvXFMd1obeYe2agKsScFqWivfxud6y7L3Kd2H6qqmR8uMJ1nUrANqFUS2pv7yzEespS5KEbDFV",
  "key20": "3pfkmV2tgRPE1V78Xxa5ynhrBcMDgpPtQVL1ZhZqt4dPZXUyUQqf6xzTNzuE1t4YGBcHo8t2GefqMBctWdvPDQMM",
  "key21": "3J9qYqtt76LJCN5JJmmisqcLbxrYvKyuZQSMr3oRWVJegcDTDFSDdb1VduzZJbbDJxoBY2WChoVsPRPB4aG22yek",
  "key22": "AwGmiUgRThhdpQRjzbGzkrGsZypQZrQdPmSYUYkssM8XmJhNJb2ghAxr3j9BsnDKteiug1cuBXh4nwuqodcDJWS",
  "key23": "3T6qKyPhFnpVoyGAoeJvHAK4ciTHmYt4fgM7w69ZqxbUxMSMVt6qbjM8269YWGjNrpGg5gxxPP5LYMCbDiJ73FvS",
  "key24": "5oCruDV5fiF6bQRTAng26xLGdqTU2awBpbEurh1Mcj9gd98a9wpDALfM4S6Rm2G18XcFDtxHnaE8ated7ktTUB5d",
  "key25": "3fnGWV5Ea3cw5yV89RMZqYxPji8TW9f8BEK7WWeeQFGku8WcPAUeL32QHVqfWP9q2qoRgEU4CVrHNEkEG78DZDTG",
  "key26": "3YPd7db7uYuxuYyL3jf15mjdRzvFKWVG7ZSSe8zZ7FsU4wTUjvAmSGRSeDCBhTpmJvZ3Er7TAE193H5ZmnCZhGim",
  "key27": "3YmyHB5pManpKdwgEJM8gPd5tXkTzjMgYrKoCbFXi2RfrRkwqfJg6qZeiB1xb4LBTMAU6zMc6vAVhmMDLWoLRuTE",
  "key28": "5xHPcdDrLkH6LJJ626bEK6g3cWy1wTALxdSfymzZsYgRj8AMwAGppWVuxjfd5aLSYwmZN1Lr4WwMaopjqEhnhJi",
  "key29": "5EeZwEA2DUNwKcq6XZinoamiNpgKy36SNuo5uaR2NUenghfWW7KdfDhXJSS8LJqmnwWtXArqey9Ujx1VQLTmfzwp",
  "key30": "3WS34Rvnhwujt27ASwPQ1m6rR7fjCXxFtKWBUzKhRqLkLpa5ZkrvcMu8Wx5yijoP5R78A2d2qEcvbCDGmf4LfgfU",
  "key31": "5n495mvrrhY6J1pRoRMb6NJcJAj5ss2VTqiQpSB7ry1o4EPuj7Y1iqGfJNZqBFCKTFzdSrQniPwt31bm4oizjkL1",
  "key32": "2o14rXLBcaC1Qps7QvRQUuDG9vh8aKBCtTJYjjw63u2UifXhM3o2V2Gox8tgmW3BfKqEwXg36B4epEXrba52XDwp",
  "key33": "22Wrdb6QgxxUPuHAUtaZ9Jzhcgi3VozvfrKcsLjLkCJBR8oZoMBUHsyi64EEEEk7yofbHhZuXVWiZ7e1Ghwpazyq",
  "key34": "2LvN7pSCb7Yimy2HCVzWFk6yWdxpvB8yA8Nv9iy4xQGGGg83zU31BRgwcXLLy9srQJ9LXp6RXuxnnMnzcjFyh9ss",
  "key35": "2rpwJ4A4UaaGYD4GtFcz8sm4edjkZwg74bL3jEgCaRydfu11YbRYhxr8b2davSYpmcAb9CHHA6bXjPVQXkiKdZyA",
  "key36": "4pgwCQ93gBNgJ2Dbh63qdtCkik9EPAWHxhtdhcrbwBUUahpcHc8UqUu3uTX5txTxHgCvvMNwTiX312Mkgn9bjxkf",
  "key37": "3hMv8cY98dfEZg4zUyhdpYJzdoaRxDgnu7Ro7g7722xpWCyNY1u2eFsCV7kCcnQdfm5AAWAMJaEocFj99WmmPuCy",
  "key38": "49KDWoujUZiV2CNtDpx8XnbM24KQK7FGnDXcyZJq5yTmhHk5aqvq2hfLJwSoUtgyWjYXHo9EAcoryWpzLzhmjMfD",
  "key39": "5dXPYo4nvvVjsF2ENQ23gdnDmUJo2333LaBK18Hr4ijFJ3US6Bt32QKPXJqAP3JH6MprWTGwsrP1TdUHvRWMaoSD",
  "key40": "4sLAbG1333hU7K443y97kHWYZs5USRYHkmogsyn1SBWXWw8yfqKmYrirQhbiWECCAYGN9B7kzjYa9gnhQiKhGP3z",
  "key41": "cbo1RBo6aR5YSgbeeGp8iCHcETMkHRBeL7pqVbN7qoEbtMmVmPZafkpoeTQkncc7ptNZbeKUMbYp6TEC4VHcFgY",
  "key42": "4tcFDGkveobQTGSn2AcKABSHLKhtEs7cTwRXPvK7CDSHdSEUJCnQ4Qf4tk5PYy1JFknxaXmTDktA76KcqTBpMDCf",
  "key43": "2fZ8sYKfKCzqZxzBYvmHDyTBicvNuFmFhzYr6xFy9d34Mq7vwfc1uxaNP8NC4vFsbR4kwwjUth9nrB5vve7nWnZY",
  "key44": "5cSwytBGsAa6WQheb4b3FQirfqAKRVXVjSoAZroGWgkNMTPotJMNuMVnzDsQUGbFoMcwGRpQGzmZ6ZpZ45vPcWAN",
  "key45": "3aoGpkKKJ8wgAjTUTPPKYvgEGrEod6U9LsqKzySRmDgVohr2wQQVweyVvKk9TdPmnGRG9EwzM32pFc1QKvJuJS6Y",
  "key46": "2C4RXVDMzhnp3McCtFjsPzeQWqTG8npBjFrDbX9rQjAjLejQYYdRJQKUwamYUzoannn7rPjDg5RhsQdAeMhnfb3j",
  "key47": "2qkLiTSH1GA1jWm1apntU5AupUK4Bj8NHPhJaxCX2i1xFHKysD8FS6SqmJoaWztM2xbcESwU6rCDjjG3UtgHafXG"
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
