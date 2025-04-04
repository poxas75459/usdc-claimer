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
    "4eH6XeUUajnZkU9aEB4UQQTGVa7JgqTWafFMVoEXTjGwpgAmYxHcCRoLjKCoQzG74x77QYy7Q6nHXEbWezWtiWEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QhK83Nx1ptWecPsJmsMav7Hcjqytn9WeSsJhGVcd2wAFNKEJqrkjju3q62bBrrBB7gkW3PYpBgHM9jhvWq95SW2",
  "key1": "8qkPL43FeuSrVfsQK3u7W8gNL1oWR17W7zAt2Cq4mT8Pt7DArUs1KMt4eb5rgnCJYyeF81AWKq7kT22o61wdGtv",
  "key2": "4V2kWsEY1wdk1mNcq3zLtV6KxrRcuhEVQeCJgiyLMWJkrikgq2umgt8pPTgaBDkH6EeBGvQUwzU5etgVwgiV8m9z",
  "key3": "4UXddCsuj8cwygNJfqCu5357rqBzs2vJP1Y8SWG1PRbVza1YsMzkznEhC7gpgzMGEnC2mVN2qTSThaGgZ7mwCgr9",
  "key4": "4roePF9kcpKerEkJxHQqXWUgs3jijoi7ZMcZ7JKQsj6jN5uPHw4cktDTXFhPELZkXxczrvidkNnQo72XYbwzDnQn",
  "key5": "S8gpTPcyg8LZVBgY2hxzhCVMyA6ygGgZjzRJLNESw3KovwpZ3KMk8WdNKzSV1HvG3G53uQ5SKNiXThVDgbTHG38",
  "key6": "5BYoxfNZEumzKZxDAutie9gFTMda8SuSXRXgZoVWcYAJY6teSDBo3bPEM8Pyuaas1QzPwBS1Kn3KVtwHpJc3r7Sd",
  "key7": "4qhRwLojXQpovx4UorbmHbSruKNvEjX5UimAVfRhnsPXx3JG8T2YtJHgPySUcFmSQp9pgWvsvDa46PfLy7TDioCg",
  "key8": "3cAzWjdKKYBGbMHDucCek8bR8z6kXqFpCM2NJdHEhX91NGu1R5s6etXbSG9jpkF7tukneDZqDvfVGWRrqKUhTUi5",
  "key9": "5nJrnF3SQ4NMWfhnFfSMLQ7NkECotXmkbXcRAHR8Md81kxVsub9vEcuavqrpMxb7WkEtd8kzo4MTYA8ex8JQUfj2",
  "key10": "3ghvKhG2dNKZwZjMNfV34bF5i68B4fckbgsqZekSbqKmcCaVMLnvHUUW1X3VP8QiHZYZnLMY5TgfpK3yYccx8qo4",
  "key11": "4dGuKnBE7PZxJTiSTpqgYdo5hWejga7gL7XCAAdjnA6rNwmnU4RZwUBhjHYgN6ezdqhNTeKj7fF6LmE8vSdMMcqK",
  "key12": "CK2tiqXxX8BsAhoii7ibBfbPqea6mGEgupPx8rDY96U9Fp14vfgY7yzadRnQJkB1M7FQAdYWhw5Gqs2Hr5e5GJm",
  "key13": "2UfvmqgttVXXAuEofaWn3SmArNHn3wBDJysLn3UQTqSxh9oRGsMYAf7zhSpDDjvbRD72XNu9Yrf7twVFuKBidujf",
  "key14": "2MuoUNETVACNwvgSzSwdaYPvttjkzhxnQkrc1jRey6DZrekZdqNDWwhQXcSJkR2BniPUSqrdz5M9ZCvzU2vsfzhj",
  "key15": "5Aj8U2AV8GzqWm8rVtEkoxiBhbUNmyDoduegDu7oFuuRYSeFmmwhDat2Y5AEmmeP3EsLkc3kyE7TDpTDcEteXxLB",
  "key16": "4SVJRKWD1iidUSnqYy4kNHpXdk8feDA8hmJM3up2np9g8Xg8JnaBWaRLPnXw32415hChjRK5ANtJijYQZ3jAB658",
  "key17": "2jeDh4gCMgivzN6Frdv9Q62Mf5MpwT8VKUhje4HkcAhRrxkGKpTfiJZ8Giz32LVdobfpFWPqq8o27n3THgdLbN9Z",
  "key18": "3VFdaJFQ1NDsqXSmXNi9wSnyTLKEoagE2qKNtoyNNrHmES23omaYKtXj9ZnMkXxKVkMesXN8Gj1eTqKAaEsS2Dvh",
  "key19": "4kZ9ucZdNd2Asad6PzvELZ1uPKpH8RMaRUPMHsVwJPJN975MpMoUu7u7E2PTj76Dqrq4M9e6v8n2BSzX6k4y1HnY",
  "key20": "59rrS2hj91TbLxQzHud5XsZUQeyjgAhSgiwfzskDE2gcNMP8oL7HCfy1s4Kbp9oBiay5aWDqVAsEkE935CL6wtas",
  "key21": "37pCrF5JW9yUx6y5bscaz1gtafKif4z2QTLr92KUCCBwxKRPiBKXeBhuULnQo9Ef6n8b1Xn9DC9aXgboagsVGvcZ",
  "key22": "XuTV23cpHrT6Br8VjntLtgA7LsP2m4DuPiMB4iYzAVF18Xd3jbAtNmS3rahzZmJAkVhzN3D7WeB4zumubNwkPSf",
  "key23": "i1RSP4D9FwVoEDXJePW4gFVEiNYqi1WegDNwcwRexZW6CHAxmcRrsLuje5K9TR63dAUE5VdBTDprRXcvyURRJhN",
  "key24": "32w9UUfqaowGzRfcyedcrQVRjVVBoG7YR2TpoM4vuBdmwEa2uYgBa8nAVEHHSdFWKo6a6qfHHZBSLqamUA44XiNw",
  "key25": "44N4mGcHwViEx4MFBsnXZhqA5UFRhdoqyF31Ziv3uwsiVBucnEwC7RVawAWLY4XJYN4FBmssZYsDP5LFwAFhwFFh",
  "key26": "5gANqzZNUJGLj6Y4Do3pd3T5Z8GCJF2GDxhYzKDDwV6tafzF431sDy8g3Z1waXi76Fyqdis72ts99ifCvnXT82Vw",
  "key27": "4YAJvfGGdgsFy8EGGbajxAMJboXJHr5nN34HeUdcx8ZAMoDdFnh158D49KnS1J3wpjTRitj9mBG8EWaAQSBG4KWP",
  "key28": "5ZHa1JTNso9QsY6UNaBr1SXVAKSUVHapfP7EtGSKrekMcFA5PPAxKaoB9bCQS74KxwLihUs43uAtn4xnBXby8ykp",
  "key29": "4v776ocxjLpv5P1HBcSEZNfzWnNB9Mk6uW1MuvErwBTxbGTKLhXPSV8pEXfcFfXoxGZWkJuHF8BJLeajPEJYWXvr",
  "key30": "5RU6o524B8fs4ZeSZkUVLRu31GDptTVCQzhzuoSmf2qTTsBAXbgSFPbYqHshSWMmtcsAxUvnXsoUibqf4YZXYa3v",
  "key31": "3iUXA5RRrAHxkqwpyH8eExFRWAMRRL4xvgmNcjxTx3rQrBcVaQvy7hGFRJj7tCTFisK97DbGSvYStWtPxBnKdv3a",
  "key32": "36HEUSTgbYKqWfWRmcfmhsRrqrQEMqMoB3ZEwmESqi4hJ1RESceEmXHS35N3UxFiE8jLZMnBp2LwvwNFhgGYujJL",
  "key33": "4cuCCmZQbPrLrsCQyjQqry85fr7JjAg4vAM2upaQzvEM4LJDyBPhC1RzFQTEmAw4rWuCM9KLnLvCc2PjooPEdTi7",
  "key34": "3ZoGcamkLnZj5aXvJCsbqNzsCACzg9yxtw29PoemwEZv3VCMspQNKn6W9jkdYEJFcxydMaCuNFYztoVqDyeMnb7k",
  "key35": "ELJ8F41wNW6stZ5diKWAsKUyt6V83cLbEpaNS7hwZQRR3CHCCuK5nZvGUkY5YreBmfX5Ksi11k1eVXWQavKDhML",
  "key36": "5sj3indXDdB7119npBW8i9Y6tYebfSsVipLH4FmLMp2sNZAmF5H9xLdCXbrieUgr7S1fbvURbPPVrkQfP8gCFd87",
  "key37": "5uiWwvLBLFfSVGQkeyLg5JnXeUKFFuJtaYuHSzU43XpXELk4iaF8aN3HVWWPe6T9yALkBGewtrjCuerLYkyQrbx7",
  "key38": "4tW334uBAvJr9Mxcs6wZ6Q1wc9FqveWx2SUfnAam7v3FKSyPdhxSvGXmdGSGuGVrjggTbP7vSJNGwoVaD59mdfXA",
  "key39": "61TbsX9TTD2QjvM1GutGae9P3KAuDZbUYRwCZetyUbiP1fZUAAGNRZGc8TMMnYsovtGcUJ4YpRS5WsLSFsLb3WJz",
  "key40": "2Sp537JM7Kt5vNsSsgkKJdUvVNioFP9nx8nCmbCrMEqLC7zo3Veo5Hanao8gDkSbk6mA8CHvHLtyuuxTuHFBut1",
  "key41": "5qN3oyFwLh7CmG6T44bBWH6tBjj9RNsJJRbeck51Qfmb7mmEUGX1GQ6nb6kBqPsAeQCubnozeN7J7uSLnayPVJgT"
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
