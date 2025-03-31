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
    "3s2pPZzcXfAoSDUBBVHSC1frtbzE3yDGjuzaie6RSzsdB3j1ThGUwgVcPB5PwCNm3kAGKLCeeiFYMfqNQLeG33Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UTasoirCSVCxtmJVj4VZohD5fWsyvRHHKbbqnCcmvtDy1UnszKVP7zwdhMXf18xe83EzC3Bsy3NNkaYEruS5Yw3",
  "key1": "2uXHL6PsdvMAMLUUBa7BUoFYNnwFqyxbUmd89pmgHrK3GmTQKLcLVS25my2968KgEzMBmLy3u3QeRuCMwwGEd8cd",
  "key2": "5F3qzqNjwp5bpNftTtQ1Xo8PfThBqYw7yf8kUfMynDM9N8ne9AP1WsEAMy2mg7Wdhcnv2HdStxK2nXEd6nuRsVZy",
  "key3": "okV4uonkUGLPTMTA2sttMgt4enw2pm3ZybgEU1XYy9unhhYydCtCpxmanS1qTvhpxschjJEE5rxxkUpfPGNPpqU",
  "key4": "4Nmab49fQP2euBLvycf59FfSaQ7LJ1WkwTiMhEZw61ad7VKENKpaB3ZP16WUFnbc5sVmK8tVUzCCh7QmTx3HD9dg",
  "key5": "aEcr2nMpFtz5gqq68n2GjGJ6ufJQ8CGX1pAuVZcGauqYAQxmA8QUh74hPVuG5opFPW7YNijwTzcHUJaYr6fhMuw",
  "key6": "5GPSRbzuhvtv1CYBALJXT439zfSD3ZpU43svGMAPdic49U7n51m5sofK8Sfm3DBdHQ8wB1n5xCqvCGsPYz7VipEX",
  "key7": "5vrzndT3mCdRxmU4ZBZjMG4D8LS3qziLKm5LWZPGX9MMFFrbnsswbPTStKw2cXQ3HvCa46xpP9KzP8asBoZgm1oB",
  "key8": "3hFuSQKwAKogSYZ6epEb3HzJ4NJCiTgkPSDQ3ToYhttCQ6XRKS2NrGHMXFZ2cJqCDz4GUeqVMWCDqaqcixjfzrHa",
  "key9": "2yJdYoW2jkT4H6RCbyg6jeCkBSRmUJUzonBxvQs4oVf3ktAYZBNHTKThjUcQrk5g9i8ipsuKYzy33owurWPBUhwK",
  "key10": "5RXATzfcxnmnmzT9E9qX2U9yT7NssvkyUqcAp2KEnmubd8SQ3VU6Kcb1YPQTumkEyP3tS8SHETpe11AtJnWybSNR",
  "key11": "5ZApNGwjG4kd7DL9JwzTwwpwgkTrFWSufZkwjZ7owxCzAYhHKX9hbn8PEtFdegxfvSNC5tmL6HXNPXMyyyjJ3ANv",
  "key12": "2K3QhjB75b3jjRZEGxj6uqQWxCPp3f69WsEKtnfh3qZvDgwCTZgyEiez2iZ17DVdY7mnvUcmgGM82PN6wEYHNTiB",
  "key13": "2e3rUexzNSioVeePvLwai7cDHeYE8RSndACMDgKH55ZKQMncaetN38xjkEGVcL6UohttaJZsbessreVxRtBYzP9j",
  "key14": "5czQCUX3nLJ8NCqA5WhuVSKLQpcADEGDx9HBy3KbsJ1ZrFM75ZbFkEHRvkyCLQNQ8pJ1LD3uVrqNYjHCDnzVXWjW",
  "key15": "2Fx116h1DAa7v3FJGzjq1XkUUYd6iJswHFA2nsP1nWwvvvTw9MMsZPdbTZ7gLgPnpJCzQuf4mzKN3PU4anYaHg9N",
  "key16": "wQnEcHmHyWH9gfZdeFJCpCx4c9JPgerNy7AbJPunUJxU7t16g7esQ4MCushYeZNAuM7qV37udiAaN46gBywFfSz",
  "key17": "261NJAXNsJKuGNr3zYHtLqx21J7i6FWEjMa9DU5aqYEmsVwmB99KNhZx4tTxTXrKhCojqiDvB4noBw3MykebJYEM",
  "key18": "3KKbgMbR4huEawg6TWRsZjvw1umfW6cTPM8FhmAQB4aretwVNK1zRryc1LKsnPh8BtHaxD4atsiS3yh87NT8sitZ",
  "key19": "N7k4VB4DWGq5eTgbWbNardV2HpRPBuyXDrGU7G7RnLWBMng9vefWVeD9xQzHdDAkDvNjmyaoQ6K6fb1rtnD5BBu",
  "key20": "3G1u1i5eQjEio3TGHwTsc5NsqP5DmFLbtRxtVyjHiZKbux5Q7djwE7R7GZFCSGjLXtJyUqCfvghJneXujv5gnPtc",
  "key21": "F2rQ72FWY2t5fJaVRSyYzqkBqktcEdtxRpMjvFkPsR3bWnPKo4aury9tpRdXxQmcBDhZ5A2mjC2zRrbZovphNdf",
  "key22": "RVYcVHwoXSi6sFXgqAA9Zv12UMhEgPb74w7jcUANjbXrBCuKRVzda3EDfz3pmsSHiaERE22SitAGDA8gB9r3GmL",
  "key23": "4gJJeFBk7AEH2eYeHCpZUhHJqS8fXNVQDU8yEDASDYDQjrwkNnHMQzaUgfdN1qyavyywuHQ9f6D7JfjvaLzC21WH",
  "key24": "2SxFHktPfqhXGqhXyHajxJ8gCif3noDfnxqkGqE4qyovva57j3cXXnLHJ1JgJdNVSsfQGHCde8hdUp4iVXQzmFMJ",
  "key25": "2JdhVhQCjLH8eafyFtsrbmtcgo5aB5HYEA5yEoZMLnnDwSKiV1Y1T7LqY13sHotXUQgNNs51pagW2VczRqoMXTSg",
  "key26": "h1UnhcpLWDmF9fUXe3WAqEmL4WtHLvxqyX7GxSCzpwqbZg2JFT3yXccpeatjTUHFjoQxeoQs9MLtpentsrtT36E",
  "key27": "2nwHFTjdx7n5kSEK2pD3k1nvkwCZFmReDYoXEEgs7ZGtddcjrjntwo4fDD3cFZAAaiWorDoaDSeGjSL7bJ3n6P1u",
  "key28": "2vRgNY4q68s1XPcxfX3HjwmhHh3qivk3aXP4zwQDPZgS9RXajkMendXCq4vPoR2VvD4HkfU2fXqAwrJLpnajGaCB",
  "key29": "4543viPYe6ZqpFk4nysJQFaG6ZiPXDsCJAkCGpfuh5QAfB7Q2tS5hLx1j7jm1hCEEaYqNsPTPbdQ9gCkmvi4gwaz",
  "key30": "7nj4mL8yj3JxwF7XEpqogd3xzdNpocoxyyzpYk6zLdnixSUAenXRMm3ZUdhv9GXeFyATQJZhj8SfghURWk1VxoZ",
  "key31": "JnZmMggH4UygcxCcQg9RrniBWJDBsikRd13ZpkjGWhV7p9rDbtoiQQ5APQEW2A1vaZF8AqFB7fDVWau8ASHtvuT",
  "key32": "4gtXwpAw7LSidhLfmZpvGp3u87RB5RTr6cbZfjWaz7P8UffE7gburaqpFBXDbLEyf5D2cF7mFdcLmVGLJDKkuj1d",
  "key33": "4pvggSUFZXV93mBkXu3zTDjSTzLWJJ87FCuvN7ryQ8MMBRWGm6t71RgCYYM2S2uXPkmrnQF8pAFgSQVPorSdkNzd",
  "key34": "3LgBvTYtogc75bwcjgbTaWa6LgbY3MYvmbG7EV6vF9ow5ckzuHFBjzq321scRhsd3kEt8Rdkj97haopQPRcTf7og",
  "key35": "4DwNR6b5nKgReyJhJ998xpH6hMoeYXyJ4BiWVUJs3NTrcPB9uj54wVTFiTw4ErnDEfuF9wf4KBDTbe8Xg18BmwVo",
  "key36": "2kiMZaTZH2mL5CBEYcQd5KyK2635jA2p6MXHm3FH2NrXQAdAFWNbixZy8N3V9oozT2hHfeyAurYkAiuzzymarQqq",
  "key37": "5rrFeUd2zfnXi53SS8ntq2Nr4o2K99iXo4VngTWH3DBd8MSZmS8meHCQgcFKD5NBErTutbzpAAHJbY9dWwaTxnTk",
  "key38": "B8uerknfN7gLAEhRtCbrnVozQTnmAr4rPU2PZ9ucPBGBR3MRvzGZec8HfQqj94BzQAHAXe9m52JAVukqQkuddwL"
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
