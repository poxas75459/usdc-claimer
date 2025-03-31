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
    "5EDrJuFe3DqBGfgDcW8nEsXvT1BHjzwwCsjqutReppbkZ5ttxMMvtVpndGiKRJj9ToKx1awvsr4jxXKbB7W4FxjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y6Ran9mtUxVGQpzJms7bpCHwbHAqWuVLrqFMCwqzbW5TV3oF3bH9tjMehWKpxUJNhMY41gbKEdXjPDiuEPxZ2aN",
  "key1": "2ZxXm34ddwmQK551ooKphXv3U7HPAe2LECJghNqgrxitc2cmKznD4pmneieaUPGeGDuYVEW1j77HvfbUpfP5EkoZ",
  "key2": "2A4TrMChuywbLjWJfP9aBgkUYutnYHfdkmNt8VfDCRv1eYkShad6pHJ9V5ipnbxZosyUeyDf4TPmiZuekwr7EpVh",
  "key3": "9z4t52k1u4q1tgpipB4gGhrtuLxKUxyUYpc4XPUd7E2dhuHtoCWXxcWyNGqURDr4iGzg8QZpuLWZkFztr6cQHjJ",
  "key4": "4HNZNCckypNmAKmg8hJBRSnZ7aQnbQNbkX5b6P86BTA5dAhDaBjHpYu53TMZ9C1mZ4yDNYs1abQNhK1RsCdhwUBe",
  "key5": "4rFaxxrP35LGAyig1JKybQxMGahmRAUxfL5JW8iWo2Lh59NZq4FyZFLDAs6c1qoiatvVvmvKguVWKyfn7SCCEA4s",
  "key6": "3ix25b3XXC7FuNMPfy18ja6puQZ6BpfYF3BZzC1PBfpBvkkpSCJSg5VTQUUPp2mkAQ3BKthkspRNgeoqd9rsnww4",
  "key7": "zEi8jqiMa15D4B38e2wxmaX3n7wVnmVGq5ZZzNty7TGmmheLZPzysP7yFZpbqyJ8WwZHy4qHqLoETdE5y3Jsfxk",
  "key8": "2NKsivZoUcFF6UfiC5mgMxnJBt1oUYhGe79aME8Gke7h157Q7rcqfa1TviFzCsGvwU7jQmJ3TuzyhHMAS1G4vQam",
  "key9": "4xAwiPyWi1kWASgedidfV3poRipTJwYsFjtuGNafje6KTQcCvxoXViAFEpw9LwCypnYQykCyJiR8e1VUSrbH79cy",
  "key10": "3Ytp1iHxHGF7cWmiwwJYDiLtE2Fd6gj65Tua3augu1T6DBHmpMJ8Gy33sxXxPrc6DYH6ftEgPkEG3wfAMeJL2pZg",
  "key11": "2yAnavh72muT1f97eJEN8GYLnNDFEquCmwgY1NkCVxdcMiB8Whgaryj7YbFWb4WFSpT1EzjkMzX92p1A2cKSZJEU",
  "key12": "6616DccJ8BoDxsaCdTwrKC1E8BAVhD47tbn9HFA2ghQGzsAGvXRfsfmZeNibk6YSsGd9KbUdvE1AQ6VKQ5C8dbEE",
  "key13": "cV5a9gXZapWieXh8hoXkaynQgxcQebLxGomoohZxgpSKGSqCTCSvg46dFycAq6H77ZyHjzrDLT1EMC8kF7EBxXw",
  "key14": "k3XhoXmsCMu4wF22RjR2Uqyjou4khBy5cZ7uEdayNYJuCkBzKuFcp76gCP2pedXTo65wcD27LdwFKrZ5GgCVii9",
  "key15": "5dfDX2Ee17b4bkenDz4wE9s7YVmUyp2oMox1RG4XhEj5WYBzYxgnyAuZaC8iefGSPEEMfSDQ9Yeu8o5XwGVBQ7W9",
  "key16": "vvNwmxfTw5M14mSkG8eJX4qkDZkhP9AAnKpq8WyK7SQSreXAwPWZyxoZcQF9bCRU7h5Lzr5sy5JvtocFseAS9Nr",
  "key17": "36s5yqimE3uVN8ot7szbnJgHuR2cg6yerGTk3jUegkG5RCknwDyFnqJyRbcvaM4AQcGprUyyXbEJGYAoazK7V5t5",
  "key18": "2YKjsoyC472rtAWV95jfsaek2TEkGouV7ZhfjVnJLb3G3BBYv4Cdzj1BeszWbRWorD28RJgT8VCPXFMBjsS9mrVv",
  "key19": "2cSeS9Xq4t5uajsWduLrUBSKsqZn3Tbmco6cp7eeEahQ7a7TDBbHXtLP1zgw9yWkNKhCEs34y7pT4cmTYXF2rFYk",
  "key20": "4sKwozv7yNueurQgMSTtKqbfSNonRwJ7wM2MZTyrYoEViscyy46Kjc9YzMyzZyyAe6M2vKGU1VWgssMpT5HL6yus",
  "key21": "48p2wpGZ16a5xkmdgSXAUDMveFkcoU3T9hYUiF3L6kc49xmEi6e46b4TtMCREX3d8jX52MUazR8z7p7dwjp5Xi7D",
  "key22": "4bvWhZE9wav8wJUSj4TYxfhrRugpkyU8p1vXRDxusg5LgEJkEz8ww9RPsa7BWqCU1ECUrT8tvWQpqZ5hGDSb8WHF",
  "key23": "4MVRWMPcxhpiZTFm8B4Cqkk5s9ameb5mA8jvN5NfN6pkL8urL9aP75xwXeaHKZLDHxJAaaZ51hvRu1Voa6QL5vRo",
  "key24": "3oXvKSPTdW3J4xp8KXF2rxK5A6GFyXDWLnA5GB7tGBRmFTiTCE7ptASmsPrrKyHhMQg7XEPyHA8yNSFpHLL3d1mv",
  "key25": "3CrPHXiyTvpuZzyY2p6d7jinWhMQEQ7R1qCqHrPH6M5apUhCpuso6prtv7hxrhUYY1twkiThmxLcsHhNsGG9GY6A",
  "key26": "5gtDgM5H28c6LqXeQ1PF4kqTqsw5HwEShkZWmxhrJTr5ASp44WWH1knmf39hTULVKjMeJ6pJTM3PrBdANwEJYCTZ",
  "key27": "5nNMeAQ2JSBHHcxNRXPhYndbsnmEewsMUZMyv3zz9WR4JdyWBtWWNzmbHZzVYEzLUQNNxveQKpLDQ9PRD2tLXSVF",
  "key28": "5QgzgR6M4CwCSHc2cuNDMavgsaXgVq4UgEYs9q3VgRFfrxaLMw5fMu239jeqqwQV46xqPyga4A92mzA1HVSm2xgx",
  "key29": "61hPid67MXoaPCM4zL6Ki4p7MZgrDNng76NfNiNTJCpS7hWkC2gy36inwJzqvA9DsuW9zQZ6GzyehvRVkq7hZFa8",
  "key30": "4PPoPxbJFtprFyYejwSZgcRy1D4MR4uE54uvXKH2GUvB9bny6qhxhRFZHwhDBeTDqymUh8JJDz19cHFN3JjUGCUy",
  "key31": "3JShvePrtcd8nwM5h4RwsaWjyowAmbmTUzNJLxWVsid2F2vLshcWr3AGB1QkvcxJfgnV8YsvEnF4kNRHnr4PqHbD",
  "key32": "XYJBiyoaNJUCmTzdKuBRkcwfqfR5NnfkFU2qN9A58Zsz6vhm6ydboaL3tpcohN9JGjaoSERfPyPExBYs4LDRjS5",
  "key33": "2v5Ts2LCUkAhQ3fPRK9j6XjpDwmMhC7hNnNbFTvNTM6B4u26oxYqir37WdZ5sizpoRG5T9XUcv7uSq6QrCZ9UhTG",
  "key34": "63BgohLVUMepxhkyu47NXdWuq4TX4PypoN5iSQgRKHJe2984hcRtDNWAAohmwQMA9csEbbQtuRcDw8Kyh7tx8ir4",
  "key35": "ond11Maz39LcP89zq5A4irUBsazjqXLbDKqNrFC8DAetnLqu4a1LebNunrkkpm6yLeHYzPS1wQXnxsvKpB2v6Nc",
  "key36": "5rK79XnUj15Lzfsn1ReAGAxxtixrAa8EKpgckFkrRiMQrZv2bwwE3TW4FRHGjRXzrhLV6WzUv8CrXnVVj4W1dYMg",
  "key37": "3Ty95JSUDZegQuU8695MmnCXS2fdKugPfAkKjou5JGErwJE96gaipzZohrCzV7wY68KVezcPGUSYGfMYaRFYbCgU",
  "key38": "3aJqypHkJrfkRH2W3gGP2mXYoFe5HXxxCczR619puDS7TMzUeoLcfryMCpSQ35AVSv5C1cbno7XBc14Rw2zvZYwv"
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
