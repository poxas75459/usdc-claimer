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
    "5snHvcv2WhNUNdSLX9eCXmHHYkoM64QxgnABUuAqbQkMTTK4HTKtxQS7q3Le32WpzxPf9EKj4FvrP2y2Hbd2Hq2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WnWT2piJxToGR4Rxxvzb8jmG6KvdiCa91wGKyNfVVwuCah9Yz1bDAYYCzHHRKadFh8Dr6kQ5jfzqX36wFQdHYr9",
  "key1": "3RBb9hed2yEUcThn4diRLjcPd7iPwTQdR4GM67M1ztY78evGpV18st32PqNYFgMd6k7DXJRWCB1xKo4faGwgUvXx",
  "key2": "5FQmNEiVpbNCdsJFi2xZujNsu6yYTAc5YMBCfuGwrnKgBF4FzqRxKz8iitqG9XVXHyQkUJmM9yu3uDCSNEagV7qZ",
  "key3": "4MxmLyqER3bs9YfQuZAUY8ZFt2KRiKLVJR6rGv1RL8aLwamXueVkZgwpdtknSkVJMWb9tB8gKwFUNg877AKq8mGj",
  "key4": "4gb9BPnrYU9L5SbhqR6xoL1sEjEtWqyBs7ajz9YKZbAoXQHYKn3KynzxJHDVuSrNiikYKEzHNgCbBLzqByecCkRQ",
  "key5": "54cVyEza8qGY9TWSerkiL2QrykiURuy69NozY5SzeCaiy4iWbjLhVJYKDSL117iKw8jwnFtx1vmRWTYiJaxgm62f",
  "key6": "3SmY4sPQfmXGTiLgD2vgJk63vqNduGCNvBHFUD59knwk17gq8zVu6fkzxMysw56XZDFovKBmCdaJF3WHmn9mjaS7",
  "key7": "4on6aVtUbXEAADQANdVpTSJotaB8iZ7ak2P9VLoc3yS7eneHzVcBEhMzDtjCpLhrRx7JZbqdkNQVMUxgDD1PojUR",
  "key8": "LvFtKj1npi1n5V9cUe3yCJbn5t5656uTtfLaEGBQmn25EiXHTD7CKbPNpfqZtNMuQxz9y3ZLHdfgayhd3EzXv9V",
  "key9": "2T1VcbMnYgcXdTsKX2ApGEHDeMKWhK2F8LAYCvT7bpfA878rJp7LDkyAUBGeAj68AFsZGwjg3JSd81ZBoadfbXjK",
  "key10": "k7syGq7yiFVNyycpdDSvLw1FsAEBKcxcSU8v4sTx81GTk5KA6U5MvGobpR18tvYPE1YXHZbsJ5PJfY6yhizFnZr",
  "key11": "28jXZ7pYc4b4wE6fLUgPzxLLVh1wr2dkFaKqkmm1BcRzKeM4CFWEMmTXjkEnWYi3Dsg8tFA5PchF5VnA7HDc2VbH",
  "key12": "28zRTAyq4GWFmGfpRN22nqd4iy1KjdgET9JNCKSudEbejXFVF9qtadPE6jcxBe5cozj5HvJxUc1XFYTtgb7yso8Y",
  "key13": "4UH15FFWRcQ4wB9VhbJxhyt6QDQQGzRsLWWqQa5SRtHSpMwoz21WZRiqKSW2gt32dRbB7qYyh62xwxrs7CD4RiuN",
  "key14": "66K9wshPp3BsLqKW8XsSdqq3VhEi4Pt8de8emjFEGgihYgktRTCcNqp7QyE2X6BGRARSG7tbMD9HYtvhzdbkFHJe",
  "key15": "3BYe8cSWCXgskr1mzfZbTDMhEkvbpf2iB5KEGVn721WCCVZdjpahyGsgzstbJCrxHRzW2PgeWQXXFMUB1i1fxadh",
  "key16": "4HuCyuM2rzWATE8BjxkRhPzM4uFWXHwMG1YSWerYhaQTiKuiUEeHdY7r5AJAE6Ld18cNLmYFgaQ9djzGUSpC4ssu",
  "key17": "5UFyUSm9bv87wssoypha9uc5tj9nEN5uicbSTgiA1MzQMJGHEWnRenWkjcPi5pZfumFvyT4eFsTZVQPBGfpPLdZw",
  "key18": "2REq6SToN3tMYKPwUszLQV3HSr1zxUnbUH12a1ez9zNtgCbfsad3E2a1XZbPFD2FUTwAwsnpqXUihZMHqdhW3SFe",
  "key19": "EXYHPAHGECrpThPdwP81D3VQNu6BL4nwjGRNeJss2MJfvXsKnD9cswFNmKme8EwMCBkKs8iYCpd37tmCignk8Dd",
  "key20": "2G3mu7qr743z5721wgJaJ71EKWceQaArpwuZ96sCCBma3JaJCdE7zKi1ZMmBUZbdfYwbvUUrznHLigycCYe9eZw9",
  "key21": "YfvkjNSR6U1SqG8HYEzCRLdt8d3pj4f42nVds6y3oXXxm1vgFgcY7BuYJFoZzHika5SLXysCDGfXK7fPoUwW9Bu",
  "key22": "3vDbig1TXawxDK7rJR8n7JLaccFYMo5Qf5rrYrjb7juzFbLs8ZiKryTMizot7fnk1bocNnn9iWb6j8SAU5rrkpdY",
  "key23": "57XDEVPncQHXjjUTmFJ76gnYCaarZtdFgBd5jsw1qii69TLzZ7KgoepYv8KLrTnBvk5yeV7SFhfC2wwK6VzCUmoQ",
  "key24": "4e8ZdVP5Wq5yiGnb4K14yCaAcp88xy36N41u4yZNymHgqyXPkutSZuw52uuWZ7euv2Z9sJQuguukCUYJuBZYVrs8",
  "key25": "cuAk8JnNMoHDEaaqKWbwBUncSPDmMQs14svFkB7VLkFQmwyVZ1NCEoS1HaJuSNQPdtLN9QSUpVJhn6hVpe9v3sy",
  "key26": "52RjqFXjvr73NmGr8eT3Rm2gX4ftjALi8fmUGqPDeWZqfNQLdhDxmpKs2q7biqB2nNbTH6wmkDv9YFAUPfyf6yrf",
  "key27": "4uFVbBprdCULUrDJy7MbE99bk8mrojurSwuMJaDjVqiAu5QnzDoX6iVG1vcaY9KLPgktABQx86gmMKCAZzzfDHLt",
  "key28": "4nkDE6K8bMQVW1ZmLvDmDoSVLaGvKKYuLEPAPWWyS8XKs3bVm5waFLpaLdWo8Fu4eAtJPWS4nxNHCAV9Uqsbgmmq",
  "key29": "3rnn2M5qjArL2GiLQFHZctv5YhfmnHzUDu1rhHiDf9VzYTJiqbxuxopPEmEbijhypDkYJYQr9kUNqJhjKboW7zhr",
  "key30": "quz3mbNQqsyniQW7NMmW2b4Y5AXzKrXkueLWktFrG3aG9CFeKaQCgdJyY1epLNukFknbZs67U1egNHit8Jq5RBd",
  "key31": "43iZUcUi4ziCkEap5vA8oY7f9AryAZYPcT5RoHjZQAxJb1g7XxbT1vrB6Qa1NE8EgJxj8hYCSrzj2RNZyR14rmZm",
  "key32": "25hNrm5tEhFCGyETwnucxA8SawVPLfQqnw9DBRrCswd4nPoCBo2WesyawemxPg3hdkkJdHRcAC42Ev7AGMB7LvnJ",
  "key33": "2PvCjoLGTEqQT8L71tpQS87dT6naDX3mqPmiPMVVxmHUkLH4v4YiLCZHrtYaPHNUZki11X7Z27H4njvtivHs8vbZ",
  "key34": "4JMoEDvXuPAJHnTunkmX7vTdiZF2wPX5iu21ygcUccMbn9nh5JUBf1ieEwTeesfSHTBhtQyuZfsJtcAfpbwRN72P",
  "key35": "5MY9GfbR8pBav3sJscqkpD5oCjwhqCgHftjccaFzTXbwtMVDWi4bLDzzsReV5ijMaiyckkyYZz8H6ST3eD2YyPKt",
  "key36": "4tQoW71HJq3ZLpSKMh7rBMrBHU2sS1kTToxKAHzD45zwpmy3qX3TzXr5K9zHXNGbE31fXvNZBqNMumkKT9dvB2xr"
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
