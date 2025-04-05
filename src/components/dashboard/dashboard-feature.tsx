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
    "3dzdxUsuUZ5b84vx1cuSMZh4PJXeeCDY5jTw2RBcyYn31SDs5jqFA2Pvj9xPzFVMp6D7EmQuxTpT7w5rRQWgN9Rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4izdArXJss9NRkamqSDgiaUY99LKg3RSp3FbSyh3URr55VufQd8egqdHGNsofx7ZN7TysXKKCGvjR4qU1AiHnaNr",
  "key1": "4eBjsCbo4tyANernXPTpXYWBXbHRywtrDxCXFKse9dwXajcZv9Qmme2iUrjsgccW3Paiz6v2qYhJAQBwJDYJYjtt",
  "key2": "5rYc2ckEjeGrmjYjBE1VD9SpWC6xw4FG7LnAZdgeHXCiL3E22vjiuyCFyQ2vm8WmetMrXdLfWc4qPRG6UnhNVhWf",
  "key3": "3T25Tb4JWaKBx5yp9MamvhHByjui1s6ug834RwGeAioXsH1B3w5EENsVBbjBUfnkrUGP1qCGhBb4bYRwwDhCviQ",
  "key4": "5Zvz9jmnv2TAfVgS1Ym3ApoSSwb9Mxtt4fo3odTkBHP4uo4cdaKA5YYuhaQDqeS7VYGNfazVdyXpm8DMqtbQ1n86",
  "key5": "355ANeKsv9FfTENPnmeQiFC3cYVBLkBwKV2rM6Y5dfUdTdUPKP6FJ4etyyet3Tw4kkArEbEaJS8fQ82aXRycbW7N",
  "key6": "XZdBanxsFnGvzsEQd1PK52wNptJxr8nphdwanm59nhpscDzVM9b24BxiQgFvcjcAMqreAaxRkDAB5yZdKwkwxZZ",
  "key7": "2m2ZpYif9mRK45QdZFVrB6G6nVg7WaqaaTUVjDbLnHpXt239Zb9J7fvh8FSjU6FWAgwyvnnycQb9Hd32Drgvr1xM",
  "key8": "5FSw1asWwvcir8FRRKCqX1d8wDcHfkDQsihqYavUgKodpFZtPdSH1CfM5CaDFa8pFcQN9bTLnwJHB6HdvNfLpohh",
  "key9": "hEXzooxCKPpMUkMFoL12cuFRfcVY7B8RuY1UYy55jzpaaKuv7pYyo2qjyUKkwpWxTXbAjq8sKSAiXQ84GTik4KQ",
  "key10": "5b1gmRkGiQmCSkn7WZg2ZTa5JoqZuQ1Td4TuaAUj45msjp1eFyPjmMFyKWyHwAG4uz96BgfomL3ZtDmj1MtUPffd",
  "key11": "43gPhc1aWsey8EC7RGbieSg38QwUR5ACHeYnA52q6deQQ8j6cyqgHUMCQFAbU1X84RGu2cRvtzD8BJAq2mGD7NGc",
  "key12": "2iKrDdNccGWqjG31sMwtVhhBkwTVz4b6uzMQMeYaC5UiXvME5uUSqQADzW26GN7boRmEaV4BmMSf5xJpAuhuxYr",
  "key13": "62DejKLfHt6Ej6kXNUk1e8D8fu2t1bQB5HKgPCqonSvV5r5KPJvZG7BjpeiF7C9eEtaeac1FXJStcYEmNtXy4jzt",
  "key14": "NE1kpG6YdEHJPSQkm1pEXXXZBzQ7gnKqr4PqVQmsnzifmH88SNsVbyJbmH9pkiQTqFUEcPpN6JVn4GK6dHCjiXG",
  "key15": "4rBb9ZBfzFxCeSpuHbVGbmRUeZ2gYhzzHXmGnmnTWGKq4BAKtsMTWqxkXKMejyAAkhb5GZaNUoQAVcH7ScsVs7Z",
  "key16": "5URhXKCVPvN6RCttBk1TCc3QWgKrgVbRtTYg4KP7RNinpefDQXzoddALAFmcjceuQgaftAfVcmW7MokBueGAQmFE",
  "key17": "32TorJ5VnquMq3TCbv9i88xavWk33dGdkhPUPdibu5d83kq97jNPvQfDkvBrPSck1VnY3emCPyacJ4frgrXkRWBd",
  "key18": "2Swd6xfih1kLXTSBpmr9AjBW2j6kiMwPRqLuyjhWHZB9ekzcNLuKaYFwG6U8NQWbBgKRBUopB6YpvWoyT2xvTEBJ",
  "key19": "5vDqu91qpiLoPtAFVhAPh1jvZihRPaN28Fnx6ZLag1PJvNa8d8cdbmXJLojKygkmbxmkzBbiYnfXsDo9P4R7Aoh2",
  "key20": "32ueXdTNwKZaSnMJ7T9NS1uVZUTAunDWAkAexdzBStw1BtVEiH47XV7xKfHiNmBTWuP2KTwrVbFdEVmyCCkZWwC",
  "key21": "4vqnwsLzAGX51TkWoEfAXUeZtzSB5fesBLGBKvaP1Sd9U5iwVpintjAUKWPW1DQPpeYVJrLMDYanDMJLqkbZyUAW",
  "key22": "4j5rgxXqHoyVmCrEzz5vALgNUKpATZ1iisYuDHS6jxc2ZQ4ji9XFJ52yN7wQ5Dn6PatKgp2YtmVnSdvFo5L32VXW",
  "key23": "4mdoFDUjgDASka2R639qhhJh8JisWoC4jUqyUrZWCAEzEsK6mwDKji3cvNKFWdkREdSATJxzW3qbeFgfNG8dcN9Q",
  "key24": "4qHuFM1nXWoSiZuanSFVQQCaiPk23dDCrAp7VaitFzs7GDSLzDQytMXRmVy319JEe8Uo2FWvkQy2qFiexJviwfpY",
  "key25": "4J6Ns4qexp3GdFEwq5jyfycfLRzG5pyo58Pom3engA2vjUvfLnv9RJtupBHauiKGPrNxDL6NKeoUUguHyovhg5KQ",
  "key26": "4cek33VhZqmz8JR3W9G88CCB5URnALPzMw3UUZcwNZMH3Ur6cpeL2uojefRAMmdSiyZyeMHeKgLDwnbbGRf1pCUB"
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
