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
    "5tQXiHHd9vJCNKMYuKGUitJ8JkGasXjJs7wuT49jVYNnKLHqqDfNdUTRxv6XsH97EgJ1hi6HvqvFA9weX6eFkkqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Q9QVFLmXTvRdE2WdD8ip3xpRURBYpasVNYfnC8sN4zCAGZ6rX5CDdaob9krUsfYD4H5hxmz7Y4ikfy3snjXfPN",
  "key1": "SoJnJmYimw3GmB1aQhkZd7RDhDVF6p7sQStQ8Xy8tKbuuVumsbyoKmP6QtyWZYK599RAwKcBEzEZNvTRzfRWpr6",
  "key2": "37QWsLAzqc8x6sRv9VtbDrcdG9ifWTasLhpwjyfVwXmBobsmDaVuZJXa3bJx1gDGuprtfDEisnhp49AcQ2dLYaxn",
  "key3": "dfJbsCHFT72qUGviT4gJReU2SBTjKeTgFaLjMzGXZMKeZ29UJG6yADv4CVqMbVw77MEQ4jwRrhDoUnpSRziXD8N",
  "key4": "pjg6W3D1LsH4ZmuPW4QpJSGW5CYgwYoemmdKmoUxu3KA5KmWHuceS54SvqSywRueCi7iwpwkjqMCKw1zrt3RM96",
  "key5": "N9626UeAr4GHxN2NPjzqmW2PFyiVu2FJkQRpHSnS6hn4r1RBzvdPrnCpyHfCdMYNbKCAvctPns9Qhm6UPEX76cT",
  "key6": "1t9K8Xz6huc2gh4TGviB1dAxoEpMSQzg6zqQjNzBfbrekcsoT8jQvondsXYha3KhGkdEBGgT3htLg2vh3sNFHP1",
  "key7": "57uMGkGhYiFQcL5uswsoFUqTFkKvCndKGzd4YsQgidvzL4tCzoZUDYART1AM6aSLUUcrPrNckspWBfUJi36ELefz",
  "key8": "42dkBjM77nATGVYY859TChHBBk8vge6WanPVRZ7kp1tFDyJJDM2uwFDBWa8BJ9zzHn3Mw8wTw6jNhDBgMUqAZPBv",
  "key9": "3tHe4mt4t1twi67XNrVNgPae2DhkccUv7Pu31SE2CoTYAX4KvbjhkhAU694g7CJrBSsHd39ptgXsy4Da6MyoDoez",
  "key10": "5NA1LHMHtoZnXxwrJjHVB1kP3UXVjdqudqNNSa4UsiCqA5jXmGXCDXriWmRyhV5qjRHob35eKkd6jbz7YQXAD3YB",
  "key11": "2hefsFq3vSFkKSigucBMj6PzHQSDUk4AK1kmPq8XH9gTujaHpFL3cQ1Zv45bVntvMCHaLLwwUtHXarfrUDM5f8m3",
  "key12": "ZoRyUrUgMZdMmdUYWR4SYrVPpUZw3HZRPRshSHW2Dzq1mfLm2iTrjd3AohdBrFmAU2y7Rwb6y44W3U4qGtqAo5s",
  "key13": "2tcuGrLVoKbyU8n1tHDWvmRYxTM7YjaHfacjSJYZVryoj6g6Me8XCxjusVuUkkB1a4ACq5aJab7bdhszRctDZyog",
  "key14": "7TE8AkDRkbaZGewvPnE4qNgMSeWSshdrvPZfy2AUvFmH9tW2tGMrftDbYzmkoxTMwV6DKGoVhEKzVMEiHky6iqS",
  "key15": "5T9RAQbPG1iPfKHRQP9j2tC83zY3UNQSPVYQ3Xxt2kQh3RrPBwJAshePVWh4BuJs7xgmKdR9zog3YAzBgHwFtnrC",
  "key16": "qwfYhVFHhqPbFe6dmyT8rnWGXxW7mn8NqJ1iwgg4Avi4cfSPDp4R3EDEpB8QgNgCYGzB6USB6WocK1kBfvAC3jU",
  "key17": "2qwrVeE9e1tiQj39QdYbaBAR7onqqV5sfCy81TeoJQrmZwam86CDmruMAgoqTsSQpi52EnVzp75JuzYF1vbi1Swu",
  "key18": "4xjKifYsVr12U88Eq9e4fKqEFGxNTffHshW3yPckETsrSeW5gWwn7SDZyPJ1KmW4yD21P6KSVPGECBSxgf2s8JU4",
  "key19": "2dRrM5gG5aeLX2nJoYQA84DvtGWzbzsAtKPRyuGE2p97PcdhbjZt76Yyu1bD9HG24tRJZPi3EmUnafRiemdNLwrB",
  "key20": "3o65oLLieCr5fWctE59CEqJxsecnByzRFXwkNmywvzPdDMceCZJyAmB6rwvvPJr663nADegh4qfaP2DXyFMvidfz",
  "key21": "5o4LJKAaJSdSbVTugAKa2gnKuVoYfYfXd14q8nqHtmT5CQbup412eAT9gF2YoXD79B8YV5MRLRAGhqEQn7T8j7y7",
  "key22": "2azdb3GJ9DACchT6HXBJdfiFWVKaALUxjs23sSmucw1ZfhPunBXbafaupuMQMejBWEVWycALPnaAkCXHn8Frrebi",
  "key23": "5DXUMvvrHkGducohavXGhUPF43LUG8rwT6MTdycpjCTB1GC5X9qR3tULWqCEBtXGB5bjvGErwzrb9eE2h5KEH9uR",
  "key24": "2JLdUGUWoRQFivNsJcqZPrp8PsLj5fA9gND6DBHaaykjfNt1FKhCd9zcHLNNmqe9mPYj75kbeEEcuxMLGEA8Hjg7",
  "key25": "FBXJiwkSELDvJhaqvuZCZWz2vq7PbU4TFvk2vP49toW1Encys22rThXQqXWhk5uA5QU9d1ZbgDeBH1kWjDDUW3P",
  "key26": "3p57LQXBemDNqBCRJxrbaZ4MugQPCoCDAybYTVxS7cgE6Se1k9eBaJe4AofHFEGBnpc4bJT4kDcb8Q8uX6yvMXxN",
  "key27": "S4zYekNzBX729Y7rkfe2fuaDbUJb1qCV8RoDCGqvWH28nyKLtZW6AnybC7bJsM1xqePMfDj6KC22YGub8Fyjn4w",
  "key28": "67ZpFEaYubdqJnnyQPcSkTwZR6byPJ32qukxrPMUsx5ksTvabPnGvihfnzcmi24G18HsHAEopcSHDLu95yT63ZGS",
  "key29": "5r4QXpfQkDswSwradV4iUwxJtsFYHkJGaCpEcGdr3AQLrpe74xBbqLiAHcNSdKq3PjYRrm9C4WtmRNw22hg7ddm8",
  "key30": "5ktgrEgnrbKZheNHpERVFv6zNVwVWHuGoaFJVNxNc5oMZtToJ7Y4VMJX7RMJHBSVMLBSWxuwEzEKCt49HuPaK5EK",
  "key31": "3xMjwAgdUzD2qbBKPEAb5UamKGmESvVPuSZpmjWWo8ptseNkkVhRJsYma3eZEywGTB9hbRDwvBuZsvb7bVmLWNQt",
  "key32": "9UaKFNKiqQ1vPDDJHLcxp6LEyKn6h7nK5bEM3CRi9vzW4wrqWBL5csPr4QzXniQnhS23CignJvT9wU6o3PRQw8a",
  "key33": "3xqnKHk625q18F4ZByP3yPCDXXiiz2CYdjz5EeQm6xvBZaC2dxWCStrLcdRFaFqaQ3mCc9j8rLnHxmzHdUgn4uYB",
  "key34": "3hBMqiuy1bwCzjeuvhndw7XxsuRxMdcNj8sF9uDwiaZVTQF3vjJNM8VwqcXHVdtcAQaEJDvWZbCQ2rzRQjf2BPVe",
  "key35": "tebrBsepUjk8W35fB1YJ6J4bskhb7d1QVez1ToTS51M42vwwqpv77sZoFphJQvBZHcX2FMFwwqrvzpgqEsFyE3S",
  "key36": "3QiP2vBbp7XH8pNguTRo5rG17rMhVuGdWgaAbGyjnTiwwfSGXZsMpvdmtZtQaJbMwx7k7UcPD7e4Vk4MSwwzXBv9",
  "key37": "2Jkx2Jg16g4U1cckqvNRn2PPosn6m3Uw8dNnuWCepumfzSWFTRFokNQctBPBua4aRxPpDifLRdvWBfkpoZW1vKQo",
  "key38": "3CBD69V7yRdMiSTkvycRjgpq6TAX7gwbEjdfVPDkhuyWxdiFz8L5rJeKpZEmfaepEhzStb6jeQNMQx7MoHAtGD8o",
  "key39": "exe2WuMXWU6xomNjnKqr7HLvXQpVcWNQW2V9w1fb56MhRKZ5D1ddhjNDHiEvr5iBB7RqkjVmS2rwtXyRsCVjK7p",
  "key40": "HbwvvdseyBE6Vbvm1Jt9Ew6dJCXd3snfeuL7YFZJdQAL2XQRDBBS8U556aYdpQLVRsX2bHpNUk5YKfFPsWPx1vj",
  "key41": "SdpRBHzVTea6RdwLZxw3NeKyoGifsm9LETo2rtkiMPmyBKd4ze39reGsmQVWoT3CJewjWfzvLWo3vnaVgkZApap",
  "key42": "2eEQVp9YwDhripXRMw7GngKNitxLNbELc8icEyngxM73LqDzQBJwXP7kTDnfgAfe99JTeC7ESqKHLdXpgJku9h1q",
  "key43": "22ZyQVFqYjFLjSTwSoHctZm3TYdhN7EUMLa2WCH72B85wvXAAGdY3VjNmYxDnhvgD1U6mPAUz8BVHThp5h647JiR",
  "key44": "5KWKs6tRSZwfhAei7aP6LhgdenzkbuGEzapAqkyeqkpLYwSQK4QfivtXHTeuEqJZapA8b5xKUU4b4tpgE9uNafVv",
  "key45": "4bnbDDpBMaq55aHT8Tfs4MYmdkrxVofCL914baumLsRUjdHuvqyCwPUzndpTRgQXzfW1ieuWe7RqoUehkLNR55HF",
  "key46": "ki44nkbFChCsd7YjXTwEFVkKvWnj8yjX4oKvrdHmKLGVLf2LZjh4ZxQqKi1gCnNhL23WVyomspXogdRmtsdhcCR"
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
