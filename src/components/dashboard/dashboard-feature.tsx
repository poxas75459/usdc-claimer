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
    "38PP6zq1KQDCm4LbmnJggdepcStjMxJ96PywutxiLdf3cH2DfPkwjeaAGd386NsV5J5XnDF87i3bCWMVhFEasTWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7zQrF3wAwkZDbcHwFwza97ehvU69KJV4p7ow7z45MX8EcCUNJMA2rVifMwg6YVu7chuUmJZyEdgVYDQ6UJwweq",
  "key1": "5pRgmAzj8UATM9TY3NEstvf9qsFCJYqbS4xEyJXWTDLvAejDoUpN3uZhup572TtZps9RjBVUYSGzTybsg5a8wmbW",
  "key2": "2DobnhTmrULWEE5pBKxt7GK9eiA6KuvwXS8UFjrpfxQeLTBvEBrWkovWshMjnMLSumPQkS41X9tLvqkpWJZuFSNt",
  "key3": "VY9t9E1mF18PNuWqCJ9T1RUxJmT3XMSY1GEufefmXWzDUUZTpsPRAQHFXV8AYU8NeGxNZv6HRH7mL1CcVf6CwGv",
  "key4": "5pANXRmzFXYtZr7E4wqRAFd6n4gvD2E2FqWCXRj3bR7eg5WQ2PWtcp4sLwsjGmQtvV2TvJ5abfrrBUkuV1Rbar1i",
  "key5": "5E2rmKUMZVogXxFUECBHCmQA6eYjkJ9yo5mEtMRW3DVtGQdmdepmrrXaSVbjMu76TF1Tg391P4k7nGTnJi6kUL9L",
  "key6": "2bLsPwbTcFGidysqLMh7D1WPZWEGcC9UrXbYbLeL6f3FEpNRS11VGgm2jt2fUpx8DwvR1R82nRzaR5o4v6bdUVPW",
  "key7": "5o3d6tX7f4oGK3fCsSG8FCCVFpkJY8Zv4Syq3SYh2bZxsYXsa9XjU48cs2kcZSG3RgLeLD9R712E7ocLe1ADW1MZ",
  "key8": "3jhSvqRAD81WorWBxdpYAVs2r1qEv9Buad3VAJZtmSmPjyCFSgnwMwDHJSmo2Mv9AWtkpGUAwqW8KFgFwXLYdtm",
  "key9": "2q3Yyhh4XshndFnDMrqaYggYb88VZkAMDn94D6gvVn68mtTRJZTzNn4m5bKHvpn3NAEBAX2jU5AFW3SwXpc7MGDx",
  "key10": "3Mf6JssZ9aZz1M477CBHa23EgUXdcamYH6YhNHfjdU77P4gY6chjpf49dFgcHrveBUYdMwMKKy9b1zUQUbw4RS9H",
  "key11": "rvsL6hA4TNAm5WtyutmQc2pZotPSgobDfoRAvCdVo2CagGyMSGqcUURykcRxhV9b1YFxfQLqF2iM7oZhdyoRC4z",
  "key12": "5QAafQNsrRwBhYa96YXzWxjBsmC6Eh6W9nR4GDceuKbLPzd14AyAMcdRxqVuXrtQcPWrgEkpWdXXX9hdxMqovqHT",
  "key13": "3qGP4tjG7Fa94UD3Yq1jripAShjqeRmWcwdFFonmeqBuuRcQH4pru6g6jevK5YUeT2SUtaj68Qar2ZjeBPveiGZv",
  "key14": "2tAuDvwRKZS5NTtr6uUawbJnQE3F62WW4ok81mJj5Z7iXFWB5egQh4U2BxwkGakmP2fkUU5sgK8fi45F25874kT8",
  "key15": "3xCxxKTVDAhSPVkkxiPCypbftfMCbzHVw7pH9Bu2Mg34n4qz7tYGpP7LFzRfdyTcA78bp5ey3cCRTuJz5whdz2Pu",
  "key16": "618ijCfu8nvw6ZakhkjUygFAJsVsixR6NG3tUmK9Rj4YQG8MwmKJ9yNjhjgqBcsS7y7B3vS2uVrUpCQCSCV94c2t",
  "key17": "3kufttmTxa7RcrMqyHEjkWJPokFvbLMgXNzhZpWqAPhQjShzvFnG5ACApZRoS38xrz4zNKvrG7gZtFbCuvb25qaK",
  "key18": "5r2YzrUWHPkXLEqwnoZdiMwwtTsStJKgit62GqDhRxdxYtPaCcS2guouV4j5kgSAhJps9Jru7NLtzZ83gkQjWZZ8",
  "key19": "nx9wdUSxvQvmVS8qEsSdtsuPmJNg2P8TBSvqeWLAnTscrEpZJDeFHb83EKMoraQxnmdbouGUzocVgN3vWnXibWJ",
  "key20": "2kWsWTMUE6TrpBrjmYDUa4UFKEd7JBmBWNXw3JCh29ix51XbW46TewK4VdTT4qHZ7pM6Ueb6dMTXBPqGwfvvki5h",
  "key21": "3BHAo5DaY7KyouU8W1W1reeQ2m4kyTae8GoK7Je2pp1g4Twit6uys1zzgCT1rbtYPgHCpnteLbWrcJbFFsyXMKf2",
  "key22": "5rAxVnjTcE2K3xNYqok9cWkZPhZeXywhSeta3T2Nc4nqCUQRRFYmEhpJbxZm9epnovXDyJzeJV134R1QLV9Znzbo",
  "key23": "4xJWd8TPGw8D53jc3AsEmE8CTN41gnQvWwEoYtzeJQwvcDzgXUhjSqSs9NDExo5XeAVpxVfUHBhpZBZhhAUkwFsv",
  "key24": "66FBNhGhG9TXhuKvgg1sjvUhXvHB4rfQa5oF94EXntpnHAB9qGzPUa8LRzF5oyzACdszjbfQWUoAZT98Q2Hnt2ZL",
  "key25": "5G642gfKGHejqfWf1CqCeQRe6qSL9hfmMa2UBf9SgR7VYJg8cYoDc5mRW744iwHdk7dvoWWWw4APDW14gwPKxsSW",
  "key26": "2TapX6HWUqgcXckYgQxWA5gFEsqzHNZZWfZKndo9EnudAmRgiEYbFHAzjFXG1juLFpUdpCTRj87i3MsY1Z4A7W1p",
  "key27": "33rXFZWVDy3w7xyL855176mYXYWGM34WC3hHHXyQAiY8N9j5WGE5vGak84AgWY1eG98TnRsGpwqi7FxpnZcyGwZB",
  "key28": "5YHMUceU7jD9Wej9PgQVTewAwLi8pAnqfkDyBLW5yyzP7TJwABp25EXkD42d6CjsQRQLtB9KSWAf29XMPa6A6wLw",
  "key29": "5q9w8ffnQjFF1Xp5A89mnhg8FxLB3L2qUwixNp43A7mEnrtFjBsNuBMBAGupZeaFu8MFPH115QiSgJmbQRoCWQr5",
  "key30": "5GqWTUejncgofq6reDdP4MgSjULwUk99Qbz4ViRH1oLT2cnra42bGrQdEoDMoXoNsBfjXPjMvYgcth1ZsjEvEtnL",
  "key31": "uuZoygn1D3ZCH85XQcJcu8fsGhZUgoM4SKNKtjVBNcnMTBrFvMm5weMaqGssV2uStbMCGGbSS6g9bC7qqx4qPqL",
  "key32": "GdK6qejBdhusGeLRyrYsshEJ9uRTt49JKLLGZvBedmMiyxXpMXAxbEUy9VcBgVQLJrKugPTVJ6ZmRNBKWcaug2o",
  "key33": "56biwxay9BNyNLFRHZfaHQ6fGdhJL9XQ7RZeXrxD7kCwzotkj2E5yei2C2N7CeLpSCfShoswocusFCPMegtda3M5",
  "key34": "u4NVgggcWUxrpwxYk346yAoqphdV9tbjggmJ9Gw4Q1XhoLji9PFeN7ZRcXq6JrTLY8F4JBtQRRHUjCmQ2KLj4iR",
  "key35": "uMd2SBtCrFiTp8htaGVjr5nDHfiAkDfqtyjZ9fu5mtMF8tJowRJtTqJC5ME6zH41B21Cz2ux1PVTrPCyqwV9HRF",
  "key36": "3qTT5bozcCdg3M9EK7GFaz7fPH8QFpAuE1qnpHBpkYN9sMhoEh4iLQBmN54wa5NvyC2sk5AdiaAJ2ow23W15kY2G",
  "key37": "62UuzcAUozbYnE7bAfWHGkSatzJvg1p9Vo5WvKkq8u2T9jHpE6azHgyAyskzSGLD3vTBgMhWresLnuxeJdw8Zorg",
  "key38": "3NgLjDp27w563CTgyuCfK1Tbn4NoAaeYWxahGUiNcE7i7nnTyH7wVufvgSBAxpZHYDDyFeV2h2et3bxRdoyGvYGT",
  "key39": "4dx5iCY9pgS8ZJ7ZkE1SeSTztQ8U2c4pSYKXhVvCVjxPTPnB5h4jj1pcsFRPt3eAKmakvFyAqZ8kGNxY4WGbmNXB",
  "key40": "5eoVVQGUBGbL48cvjuLvubNgQffB1H4zV4C1atLYcwqWjSy9gTxCU6KMCKiBsGpGCnHm3da4qUZPXSxtRufEtHmJ",
  "key41": "5HkeyakzabTgFkBXVSBXg6Z1jsZXiRqKWFQPcDbfEQZ8bMm9bQzcCZRMrxtdeQdiArw8shjiN8PejjjTU9MAcTBy",
  "key42": "3zizNr6WPa367FfXS1QcQMpZ8AqGRS5Ly4cb2jM6UGQaaqpnzMUNdfYdeNLAxN1pRAMUPVwMGBFx1aaD7jqdCn8K",
  "key43": "4UoH5pFeFEEwGDT5dsnTtbcHAuPTDqdy4NWdPikVLe4NGE5uVZLgt8vA4DZDd6JndQN8MMiE3Tw8QKxLD7eEMsi7",
  "key44": "5oWoz6Hhf6Bv5QYxeaYsneE316KHSVvGhm1aJU7t1dqptkhXz2dW9GAyFmpDTcbiJBhT7NcLF1bih3Z51KSWFZsJ",
  "key45": "zb2KmU33WF6MdPYSg4Gv4KBM9NK8syir3LgKmRU1F1bqKaHe7mYPBFYMt3dpmyHP1sS8kkxnnuszh8aAupEoife",
  "key46": "2vZe3XzAMsbFfKr6wrCxiUu6mgrRiXcnWrdzKaQXeamvxtks9wCWgodk7Ya22TfRAAY1u7Akg6VEWnjw9Ag5Cpp3",
  "key47": "opwi792Q2E62mureXVQRaVyyVHER9VhuGxhgshQjEBHSaRCjTLWBoCGKRDFFtF8EZFEdfkZycFQTTaedpx8k94x",
  "key48": "12461NK9VY7GiZbyRjqFUnbCy9H1atTZR3hxZp9GpnAACWsQXqKD6SA9JZ6EYQBaDTbKQPRrcProatnvJLuz73ex",
  "key49": "3kxzdd17xgxZaM1Tpg2HxQW7NL7HRg2bF6tbGDCgpnr3gtrj81Rtq9Nm3pMKmiGer7x4qRZNoSzu1TML6m7wLjoD"
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
