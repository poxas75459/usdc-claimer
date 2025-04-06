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
    "ST32KNTcmSNLJVu4bU5R7iuUToPUFZGdohXM9VjkSF3oarR3PY9LmvgjxP5QSmEgWTJ8pfimFyuWZo8Mu4RCAXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wNEnLQ5yuNNkM2PVWAv6CZevoEGuij73sVUDfGS4TZYcXVubsULBKwvS37JnNfqr7k3JqftmtUf4S6JjDbHKCkd",
  "key1": "39iGKDAh2WysLjsJLEhSYNZUqmG5DkZF7HbXSn4N2ifrBHLppTTJKvrt1oGjoLTm7qjfEx5c77X6n4r529p2NYtF",
  "key2": "4VSSket15Q9G1vUGLhA6JRc4kK7qmvYEnT53oE6Bk5R9hPrNEDf6z3VYeDX25XWVmVGfMcjnhng1ttWqWwqS91jM",
  "key3": "2vzvEnt5TrTciwpcbkpgCMzyekoM4wFgiL7YGhhCYQxkcNoBVBJKJpZrfHzxHZ9Ccq6EjVysg1CrmvnrF5TBNSMz",
  "key4": "4AHzJo7zwRKwMrx9iHqdBqYE5qrvqFqN7Qy5wse1R8Sqe4zb8JAwLjsErdUGShCDocc2eSWAbwu7ixQVh4nAbPb8",
  "key5": "54xxt2tbEazvkpqZSBGTJNmCMxbCZTH3HR3SZ3ajcYdCCRu3wTSbQkNWsm2C8iEaBQcpnsfJKQxKgxfnvaV1pXRk",
  "key6": "6L9uofzMmap3aQWAgssKwpDxvaEpRF6xgDtiWpebJ3EJqraMqyy8xGwPMem5p3preAeVDGHxZA5LAx5nZBGviaP",
  "key7": "8Y2JQYbcaU39wKmsuDQ9KfQFShqTNxdghNZrgyRyEtfgeyPXE3VqYTjbhFq8kcwgnmUvZ3icW5QNNrYGSk4cgxA",
  "key8": "3gbqYwedfDebixg3Re5hJV21fiaGRJGsJoz3GdS9g8e13A7irS7Q4cpnk4tza7j8m4VYgkDPWbeTyEB8Rf7hckQP",
  "key9": "jTsdw8UDyqdqUSAJ8zxhodu9rAzPH7eZ7PDJDMD3gKAmvj1tFoFWCgXC4X9k45HroaGFMuwpDyT1D3AgP448bn7",
  "key10": "3tiL7x7MXPxfPUi1c8HsdHWX2Q66HHQ1ehfKDhhNjkxo7Rhq84LpwyBNfMFBvSo3XZnU4BCcGdoNtdbTMzbLuZnz",
  "key11": "3oksXAfV9FsNHxMP6jzTpspCTWUJfAznT5UP1KDB3GieeuFLnn2ZotSbfdvBDhMqQA8H1R5UrzryxkSfRYzeZQQs",
  "key12": "BBy6BVw7cJRG9PkQQwEiA9vLpfqxkMBYVKeRFVs1BYyDbFwUGqtGxW6CEiRa53JTFmtJk67n2An9jeMx1VEaX5B",
  "key13": "2yZBnrpBsP48BZsnLjSJLnLp6EgCWDdVedoX8od1gDVdRWdzWR8apn9XAGtdnocqgiursr4dAY5SidDWmNUB1aWN",
  "key14": "2RBqW22WvhHzwByGnWr5SXhp8jxqY9fFnxfiD5cDTzKxV2jNSgUrZnQv6QiV84msinCFay8jB8rUDUAgtNpy6hPH",
  "key15": "5BBP5DBNtLHLPVhWRjxdpuiZ5kYvGhmwXeUUoYdsjKM4tKy9GhXHXqau7mwzM9KY73RUf23LKDHsDzod5DXpZ3VB",
  "key16": "5bNeA4PZkS1W1JFh2ydZt5TS173pAWp2xkNPxc5Yb68tGWLecyse7hoHo7TZZKFc3LVLWbSknBpyMMv2cFAcc4eE",
  "key17": "bvsyhLMsQejretcqXva3L693fNe7QQ19XhUJm41FCk3WsgRp5Y3xWahXhAcWGAAY3jJ36rVxbv6ZcUcvEkgAoxB",
  "key18": "2RsGLwrzy7oS4PqrawGFuxPygaFkGkMurVYpXJncKAVjfvZ2jLnLtByChQQdw9LwoEXB6zCaqAYM9WC5NGi84FT9",
  "key19": "5aDiqPTjFPCCA6StCwBwxJv2uA1uqSxDfgtbExAXFhSw2U8AePxaLPScLsv6XkwsrK3izfTq2cH8EuMuy3duXTvZ",
  "key20": "36PJjFHceZqH48YF5udLP8R7yTuwbMqhcpXF7Ge5qvBhceH9JxiP9iUiB9BHkPDR5Y8NDWu5emgc6DbET5K7115p",
  "key21": "32SMKLQTX8iUbd4kiA5pVUftTkFbjvuE42TkYqnYw2iugHYm6g6CLE3u4rcKLdimdn8uKriRpPUff5riAraLEga6",
  "key22": "4DKJRs4Gy2if3h7dNSXCXBRfMTQ3LugzBj7x3QYHvAUcYpedhdcXyGEK6K3yzjKGimEK9zRYNpiZEGqhe9Jg251G",
  "key23": "4kPsu3i3WiR49AStWeu4r4ujtQyrETdYiyJsu6nNjdxspuGUU6fcXmgLg5tM6vETgdxY9cqHQo1FfZJSXUxxcANv",
  "key24": "2F939439k5Nap2fWguHpuRM4GqCdjKzd4z8FyorX7QhqpRxZpi2j1CD8y3T5Huzt3PX1QcZhT7rwRQMh4VEVtUNS",
  "key25": "2exZo3b9mVEvQ6g5wzxSzz4D5m7yvu6iLZ8hqGAUJqMFstHmRHdmC5u8eSzqvrnGyaSAUUhxJoFB8NT4vY6oom7A"
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
