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
    "2aeGTw66RtULxiHS46oPDEMhrBrCuwsAECNKVoRPA3bh7qa5T2qskX63BrKASesmHdcGwQgGGUk3Jk6dD5xdWHrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QrJT8VKrEkM3xhYgeWxS6RQGyoAJTgs1VVhEaKqSDc13v3dGPZzwMrq1oSGcaZvUWBEBkD9BHxsSd7z2hWKBuu5",
  "key1": "2NVT5r2sdqbeJbs2awQpavokVBv4XvXP2dKfFKYtb6GWJKvC1wnJ3Ev6b8EMaWKQoTwMJuCKPs6DKYRg8Jqekndh",
  "key2": "28BurSS4v12uthfeUpdUstAFfZdGtGdduN9AYiqUFDCfjFokuPBRyVcAuRgCSPJqDuZb4kniJ9JDk9GA2ZVj7Sua",
  "key3": "4CT5jdE7XGHVKAZv8rmsiYJkVGPK8uLYJ6uHLtKBdwNGyHVHxtGRy1PbFdAGJBZeLECy26WuVvknChXhD2Nw6KEt",
  "key4": "47jA7JAHpU8zyzd6ZLgmRNmmrLq1D8d9KbFvf3hCaxZttgKU2SYi6yBHMoyRHZzoVP33Bw9mkHyioDbVCnStcgdx",
  "key5": "5jMm4e4r6NydQVfuRfRrNr9P7mx3Gj7ZnrepDtWiZhZKd7DdCGs5Pa2pp32psbk6NttPQ2hRW5aMEByMcYz35uLd",
  "key6": "5KfU4myfS73mGjaUFcVue6cmwQTRYKDQLYvPKCAstxwKgHQ8KrNfB1gpeJLWEb3XNoxq39yN7jXp54HTjs5zw9Sg",
  "key7": "4nse9VwQAtKPKuwSBZV7Fhfy8tSTxDrNYwkqpQDMdGcgod199nBRw1xRTYAhpt3tAUGmNkZGFFPDvdM9cu7cTrQj",
  "key8": "5nu6743cYBy3A6XVZQdf1iH4RrApPvJBRcwBerxDEwnjWUEDCCf6tjrhCRM8MbECdhp3jsAwSwKuTZNioawZhWBz",
  "key9": "5Ev8nXWHeoHGZcy2cL6o5ECYrxLpi3wscCJQkZkKnx9JGE3oXyKa4YWKXCqsXLdZmuyJAmugBqJes8HjrCTx4ZNQ",
  "key10": "SwpqhNH6NVXHJSH8D75w6iRu1HWbsHiDWmGGA1VkAy3YnSvqjWys9X82ViXLnvZbatadLhEwtaz3kgtxEkMMoMn",
  "key11": "2TmC8dHcjCwtGYWQo96mYzuPBkoGnsQnx8ZtYZRhoQh7Vhi1iLS5X7fWeqWAi2oH7jgrmXjXQjHX1pjQb2npgLyr",
  "key12": "3TknQdaR8K43V6CQo6EJ6rEZBr8Z5SgL82NEaNR234yycZRNt7HzgdW8KPPvorL4wy9WLa9a4gsfhFK2PBi7DNrj",
  "key13": "2rFKcGH1wRtGPhm3HpV4tnnqctvMAoU8MqzuqVynC7EtoQNS4v3pVCCUfYQ2z4FG8SXhN3w7CDdVM71N3naz95x",
  "key14": "38o78o5V8dJX9y1qjPcUNNUxM7HDqgZYmqbRL7gEcCkWeJNYN94sASkDYpkDiEjfCiYA44Z3un3U5Rti4n2GREbD",
  "key15": "4UkUXwqyNHeoqyEqx7KPQiXj8xtMpGf1vAL6LDxkSD9tYUUZxDG6YTBuXw6BdkZz8HqAyKdGGQefu9rR1n9E7GRJ",
  "key16": "QdQLwzZ2LnCsNmwpreHtPFGed7X92CqxA7Uod7SyGfwosxE3pZRek4Ro7y2ysfseZZeySELpUeq7niyQXiedKZF",
  "key17": "2tA2W3jAQxpeE1pQgdcxsE7CyP2WRZCHGuxL4i1KG26LwHTDDD7hg8v8bc9zU75jyk42DE8cXiBt1GV3EWj98mXx",
  "key18": "NVSTSwHAKFUww6btuzM8F19j7BSfy5AuCxJ1WtjTvnJEKZGheXTR4yrb7r7BN2dnwLmMRReqc5gLXuTC787jD7E",
  "key19": "MpKg5dcVcfebPWoz4bpn85rn4sfUXQUYKvvpJPE14jeytYkmaZtgwqiwvJU6ENKXW4FMojqCeyfX1sWaAi8EcgB",
  "key20": "4PfZk8T16r1wwusYyaaJU4xyEVL89P2ycXKFscwn3uAzgxNrCA18EzMM3GJvCmJ3FpYaTEdezqLoZeeiMB3r3cor",
  "key21": "4ji9XHy4GwxNbQRJzXuF585yWwCXh825AvQ3w4JGcNoPez6Y5B6Gtv8d36JKfFWpCZ7z18SP3eL3aF1UBn27wDm5",
  "key22": "37AF6oV8manbgbc9akiMe6XSABxWmckAJXfd3DqXn9mbeSxXdqWPNv4Hz8VNzLMCrrwK4K4xiNQBM29ds9hshNgK",
  "key23": "24NiSFcC3G1jZzgYJJauv1Yej6iJaqN3AmHpTCxt6NCwF7kJArcnA7i5DHsSqPzcg9Fni5QhheggJzbjxkRi6gYY",
  "key24": "9yTh1M3ZpTNo582HGEbxhTEA8RfXm38yTtXU7vFKX1qD3nY9WD56Xbiiwtsrds8BZwpjFCrnD2oj2BEQYgQWhZD",
  "key25": "4NCMLqv4JUpVnR2d2TUYL6PiiF7Y3yVwucugstKpccA8C877GMurFbdX7cRb5QYfZXwtMaiQTAgFmk1odzzi1MEg",
  "key26": "2kJz2AjETX8MG3WUfjhuxNrxVKvEiPoFRz44ggSFgCDhrrFXrKnqYb11JH54VZMfcPeWGbPofcF4J9Y9a4TURrvg",
  "key27": "429dvDcbHWtHSpd1rAvc6yo8LUC5jHiaooxe2FNWmGkMJeNQfZG5nQrmBxyMr1aVGRTackKnGnHTiDJBuHDBkcef",
  "key28": "5J3bDmQh87ojaZJTwSxksY9FGGPTyF9CNQnqeX7Tv7DaPDL3fvBVhwQ1Cwos7Y3zjueifqKVaJ8ECwNAiqnaHmsJ",
  "key29": "2bXHru9LxVP6ayhqW1RoNiGYZzmSgszKgR67rhW3dQzV9qjNSUiVBk4iKN2fVXz7Fbvksn95LVsG9hQfHSaMNePJ",
  "key30": "2j6AWqTVWVQsstMhj4xvAL5ZBKusrRb7cRX3mMi1jMxtPxX2sjLocv6xXzFbM5gQLpdXNvtb6rZgWqus37EDgv76",
  "key31": "2iCtKzukoopemNiq55uEo6ZKWLeerGUqBYqct3UhEYtgVor2fYbPkzaMQSxi6rPWBWuoezQxWV4JdVddgFGLWo3w",
  "key32": "GmcvSk5rZ5qi7f6gbXmXVf5xVp9Ttpeac7kxoxJ3wtnnPaZM1kXmhfFcPQkfJxRYenncQD88oegX75oNY2oU1Dh",
  "key33": "2ucmvkNQHjz6kQmkzFVfUmfsDjUPqwA561jx8ygqwVZcn4c8UpABz6LPohU9Xp2pZfGkxbVkbHtCfDhanoZFRoLd",
  "key34": "2YWwNxGXWudLxHV6GHnW513oqDmoPjyhRTvBt7QDoGaEkshSttwRR4XkrBdoVaRiLvpaAtdG513kzAQeKECGTZLq",
  "key35": "62GxkignvpygAi8nrLVwuQDjx9Uz77Q1xypRtYAiXXg9RuBwwaeF9Fnnbf6yvXfTg3TcUaTGrf79Xcc2jSEBNgcj",
  "key36": "YoUgMgDYFmHowJjXp57jECeX6PQAJ4xWZM48pCWgAXRtBhKUe6RQ4wC5M4BDw9WyAWBRFK4UU2uMpKBCcmgMjMM"
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
