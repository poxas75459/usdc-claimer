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
    "dofgLc4ewyUZAV1bs2fkL7zU85QWEs4xh5bT1W6kf6dhAfVvNc5d9GprFnvnxNtsWw4mnD9RCRZcDHAjRr9nmSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EAt5aQbNnjGoBWTcoSuS6pTyZSQoBqP5U8yMfhcUTRi7MXWZq8N916L9VxKBw2cBUsh2aGLX16wHMwL9cHCyMBS",
  "key1": "4tahmPh9XBqsevMR39mwABUntw39HXPVYjViAbpHfvKG48edra5UyAozqVR3g2z7m8k2YpoAGRRwY3caZ74HcZky",
  "key2": "2AWhTKErtgStbbHqZVj4t3bfLuWbj1QvEj3hVokYa4vxxJb3gcKQDaGUFxnVRAjV4CSehU8tPVuEz8dTiGLLbddT",
  "key3": "3z6J6F6D8TYZ85KbtQkgVFWiRmqsnZ6t3wMhJEZrmHnTSn676w3kkywSYndHGNMxb8vxXPgqwXhg9JQQpk1a9Wdm",
  "key4": "3ztfCCNRn6ck1hwKvWkv9kyQqMZv8BjWegVFCFCG9zx6gdY9oNL6E41tDirVZ1u6QJ3p78EsNAHWQtGYcNB7GHTH",
  "key5": "5haAtPzNT6s6w95vigb1hCenTB38tX2tNd5gjUf3Z82NeQ1ApqaHneVaS5fXVaUATee4v4dTj1KL6qEkj8SbrPdh",
  "key6": "aecQpBw3BtCbLqm9n9URg8MaJf5fSv7TMu16crXFS3q15Gx5LPvz4NiYdMh9w6kFiWLrDysjzEiYtneBbKu3hWp",
  "key7": "452CAvzwjnwQs1dWx17N8BSm5ePojnu4KAeFM9eQYPSPeXN1ov1as2YTw5A8ceFEFAGU3W9EXnJqG2KxJAAcJbWG",
  "key8": "2dWTSQ3cFhGsjX7h9fqJUh4LY4MMsjZCxieyg5aijiByHkAL5QgKSbZHBhXSVf75KXYCFHiHsdFuTRkTfcGa41GY",
  "key9": "4qSWfgqntnnbEjetnK5bMmMmK1Fkmroni66FgKH2EBTcgGTyJ3ANi9oz9YvtvAaFkuD23tzfjt6ZkhrT16APZ4KU",
  "key10": "3nr76zpzu4F1y2xfkV4Bn2rWLBXn7R7aG6VB3RAbhx5C4DXmf1R9Gi7ocQbvqvv64gLBGR3yw3Y7LPAzWGfyUY43",
  "key11": "5akrxrKQMFV98iCN3SYsEpnG82G2Q2G9cWApgWGusWR4WacmgXeomZpTkimDxQt7FaLYWUC9Sg2huE8WEeJTMnYu",
  "key12": "2N1vePK2WtdBj2cv1rQcgvSsLWgEEL7DXD34CWr4EWdQBpwrKSjbPS6HC5c6h6kV8Gq4tJnHFALtvcJDkBpwZC82",
  "key13": "B1Vsx5unSV5yZgGD9A81NjhQdJLC6T6uR1CodWsXQ8SbWm2x16ecXiew4ADV5x5EhF1ppPSxXiJBist3E3obgEo",
  "key14": "axLQdY61fp5oks4151tSQx8uNAowGvDV9FF67cFLFBtv7huruG1DKy2Rzru2NFuMeh6i4KRVEB3vatQ6hCwV8xj",
  "key15": "fCNf5swf82ddS9PBYnGPBSFULmKCpmyDgrQcj1UbPkPnRHKYEh4WB7cPX2avG8R1GpJuckykCVFe6Fa2m67dYg9",
  "key16": "2eW7UHFar43qF9DjAn7eRGoBY5dtvJuZNnTaKpPFntitcLpLo3616DVCpb69bUvgVPBAP9VEtDdgExYksugK2Kao",
  "key17": "2JoHrCdJFuLGCaj51amJ36bZgm2nJz7P31YgBMsAu9PnLyk5cUFPR6p2BraMjpEGAqShcNsyozP6fXfKAGABDcFp",
  "key18": "4pJPL7pQmpNB9VxDeVAStAh3jefGuDDon5fH8SmPu9C6h5BwgTGcg22sPAvEy7brHGefatdriuaXA7typ5BGxyrT",
  "key19": "59XzpmtctKDtxPdLasYU3NkASaqisBvjjMWUtZkqmceDu4iqkAD2n7xScByDZCsk7bf5RyncpgGiuhfcDeiwSstF",
  "key20": "3yPNqS3Fv7KBATUdpH6rMH46WMsnM75oZzDAEiaMxdBBopHn17Pgu52cVr791HaiH4trf2wY49Ld9zY4KK2Y5nR6",
  "key21": "49LyGuVQMSDx6FjYkTu3W22GMp5yxXrL28DRtUQDTYFCVGEm1XUMfgJjEVPi1ksxRcHKQoEMnTATvxJpEABgkWXu",
  "key22": "463zxhWJuXiKe41ms1ZQxzy4hh1qDFGyu4jVHaBfSJiL7zpZ2beurnsLFZAtxExhYBMYQTSuwmjXXaGLXa8CLatZ",
  "key23": "2LFQJZEm98dG8pzFDZKcGvTMKuFrFjFwusvDwqXE6V9qZXooh1Y7jTCyvuHyVbAGNHVoZWyrGunD7sPuZBEUdfAV",
  "key24": "5VwBE7VrDsiRj2JFdKULmdDk4sFTFuuuuA9m3EKQHZLsbu2pXapcL4Mm5twECjm9irEebf18ht4vHe11qpJWahVC",
  "key25": "61iQPAR4CVGq6KKSib4wPbmgCXQWxYRmYkmucu8xAgJ7a1rtDb91eJwhfqpmLkoXKK2cKooYfhaUH8nT78Fg918Z",
  "key26": "2W2b1JvEk1E9fT6XhyGbYjFJmu85zLBLZBPLjzFZaX75ZJqVG6qxtxzZGPDJ3bKVKsPG3n3XmNpPyWwK56Rn1WUV",
  "key27": "2QHppNKwyunQnCCnY4N9QikJ7w1o3Kiqg4L47xTH7kFQ8ra8wFVnBhHa3JsSdzFQTkig8DvY5JJgYcZAc5CaKVe3",
  "key28": "2W9DaNuMYPtWU57XTkSsPx4Mf7815c69c6ZfiuLA7t1jurFQDSapgmE3vtH4BnvKRvsw3Nhjo9p3iarjjb6gmSEY",
  "key29": "2F7gtb9c4txEUYTQDFHXwLHnTwE6AYK4nDB6ba8fheqFHsndQaXiuev1XMf4yM9iw2UahGmHDaMYBfGhhJt1LHKf",
  "key30": "z1ZKETkQHitkE9cCJpf7kjm19WVWBAqZee76tATq9uDTupruhuW1QNTJbvQbvZLrFJtXAJ7PqoAC5LASX27dn9h",
  "key31": "25GEK9HNrzahTEzPoQ1AB9CK2C8F25TNs5zDwtgtbFEAutKr3KsUgByZGgVmH6v6AuC5TbFe7NMSLCHhvA76e6eJ",
  "key32": "42jb1UAQ9qZTVqiYRaoT3LBKyzCbmgPpv9tS6XcoUCAhgE7qMEoFgTN1Fo1rnXb9o4aNVbxkQ2ePeMZgnW1TYNfg",
  "key33": "64QgK1t8oWVRMsdfTwNmu4zGQgct2wKM3s4f3yon3tbVzLUvs8Vbz2EHSSpVfQ84DSYnEnjn5gJ5QykW554xzsx6",
  "key34": "RJoBf8UoDpBUKCTxaefnw5ZJgRKePTAaTREVorhDZqB1cC2m9z594dEEH94LRBk8LTR3QdFdbkBFjDWgggt2qcP",
  "key35": "4tSzKmJPvZQdyGXyaxqrveP5sAgf7Uef4y29r683SSKiYn1RzFTrCbDGPoKeUnDHdPAnGXAg2wHxK6Gsb3tgWuTW",
  "key36": "4Aq4xcG9X7G2kKHU3hYSuB5ruQU2c2TodPCbu8PyKUEZKDmHuXTM9mM7nLyEnpbaBPrqjLgSRvEg9tpMJseiFy5N",
  "key37": "5U8v1t8sq1HttYKawbj7n4JnDEvkdGVgtMmKJC4zZZ1pEJPBypwiSGygaFDrrvXC2EWBKNTpb5d36w2bNEPQUvwX",
  "key38": "3gM1VcQbPHDJVVnTMCmF56LUpTPrZU1eV9TkQDYYWGRhsBxHpecsfKBmLWdNMvWBeLRJe7YSoxpGKopex6RmDaY4",
  "key39": "26Eamqnine9WJQMwV1KWQwF5ngVigFkhjZbLJK6fj11E186NQpLwTx7oZuTFt3pjBrw988iWCV1neR5voaVNQd8D",
  "key40": "5nPfVrSYeaSMpLJ7wJDwa9dhkuJiWB5EzUenBhVvkmrCtRCgtYm1bvrAhs6FyHJ36xrRRSJTXwnQXjhUWTH1nw6c",
  "key41": "2CwW9dFy8YKTwEMywjsE5MpBZKPfvew2WZrDLuZYHDgZbDRMmJkTLcNVGSdKbJEpGSZqyp4dvM7bHWxoJMRstznj",
  "key42": "3cc4nDb7PoX4AxZiTwQSSU352dY9keaHJo71hry2Ryh4XYH5VwcbnHuHFNcMWUVoXzsuJNfuwxBhHih31CGi5rh",
  "key43": "9zDRaxZRFPC8PwFfFeGdmseLjLL5PFqrqrHqAa5fRPwbmt1ayUgNaCuXkagbfR21zS2VFrqCD36iCfcE81amEvf",
  "key44": "N9TFXq6VHAXQKXKVqLHsPak3KdEJ4XDDSvjCAtwM5XguSQqHvdtAJKsUDW61YQo8TjLkFkaVBTEQkKPe46um2Cb",
  "key45": "TcKCcW1CeajS8ZyofEAMtQU2eaBPyhrY7ysgdpULMWByPT4Q2KDUGBW4HyQdNETkBa4LtnpDbV9kLv55Hg7Qv3n",
  "key46": "2YVM4VZercXz5fXLdXPoX4xxaYFkb5stB4KPRepoxnDsa8vC6XHULrHc6Qo9adu6easKKyhctHYJ69Zh8L5fSXD8",
  "key47": "2JVz92oRLs85Eh6SzLwmiXZAAUcCw8WszHszgkEXWrvRMt6P5jxwuQLCih2hkR61X153ZKHqgmCgryK8HFDGG5FV",
  "key48": "PWT2ju4CnM2ccw1u6Q1hSiciiHMvpFHtxxEn9vBW4LaYmKVb5jWWatvDvL2XaN3pZM8gAXBwxYYsnQJ7b774CSd"
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
