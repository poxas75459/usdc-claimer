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
    "4mp8HrwGKci1M3rwpG8U5LyceK66tYcE7HtgMYbMD3h723Bj23bcg5faNhpXjVnHq6h7gmCiEeJrjnWXxWyh5DWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9yVETE7Zy72WwRfL5hqDHzmPhyiJaZybjoQyasrA9dGcogTTJP5SYJh2ci79uDLChMB3bVDuPi1WykUe7wiLCh",
  "key1": "65uevT8KdYVBKu281fLi5u5jGdaYZ4Q4PPpD36uWyHvVZ69q7KLVj5synKuHpwvykN3d2SbxUsDFL6YVpTVJwqt8",
  "key2": "5yRa9G91Az6GbZBZbAtWYXLJB1tzbqttvWwmHPw6u3iM5VZbteA9bDZSKW7BL7rtwxWQcpANamMt5KueoYzU5EbM",
  "key3": "4ynjBCLauYXrP9qVj1UNYnc3c2Bqftcaa8cZJeJ86X4FUaE1Lamoh3z3wVhhJp8NFZVmLQNTyQDy9G5WPxKKkXky",
  "key4": "4E6cX5qnrQ3QVvJQwjoZdGU1NY1Fs94cDqibwJbxhcxbhWGjVX4FPBLUWBJtAGJLfHieELqXtPUqRXKyf1fvjgrZ",
  "key5": "5Qqf6z7JBTuAtEX9NSsdqrPiPEmi2c1EtYXLers6E2sDJzM3wv6zzibGRttQJJfrdu3E6eRM8BnMxbhD7J9pCkcU",
  "key6": "4driDrw9j5m3r41q8Ye8xVmqzYw1QEoVqBrfHstSwkLGxjWhPZ9dhS9iQwpYHv7stCu4pCfCE1o1ZKriCiVYc4A8",
  "key7": "5w69aLw9W2Zg84N5gymDrzMpzxXgEc2Enw2YcEaM2LeFbaAc9gJzjDCPfX28mpVMP5BuHQJb8NNPJVD8KAnES5Eq",
  "key8": "25V9vGsZ5ACFWa2CudZjZQN3hsnqTnVkDDkTgGzffFmjxA2YWiebuNCY5CPWdvz5wefcj5mcuCeoV2AtCGc6VHZk",
  "key9": "2RJ6TTYY63eimXhmYyJMATN68bKvSzN1S3hn4mNqVf6dJHdQ2V8XonFJxksGZ5RA8NHS93Mw1JhaoLpuHfQu6Ffa",
  "key10": "5JiyVsLBUKcZuneGJDv1hJemL1u3LuPeSGwhoNeH8o8VhC5FaKCxi9dRo19gnvK6h4W5RDC2J3J2Tv22fFEUFjzJ",
  "key11": "66vqUqLRw68TZC4UUi7nTttBrx5zREsc2QJQBKTDqTQ552Y7McrzGk8YCQRkYfY5zBrrgGaZkRyb8JVw9fxBLbky",
  "key12": "fYoizN2mnqLL41NDxggUbiXkxmDywwxVT1JPUXeknabZG9Bz1ngU26FdspgZCdBjk8HBbYG48d4jtG4iakmrRXZ",
  "key13": "4cZDkqL4dsm4vP7LhwAjbiWmDGvwWpoJ8aobpYrHJaXcsnjGZPLeWUxdPX2Md7RY9PkKFaW7iJJpn2JXqnRsmshy",
  "key14": "3qNDYxQEdjgfN8VKYHusZm9uizK5Yzwvp5kqT4NpvcdTRSdprjXLWjXuBYCyVzUWjdK7pPXVcfrTa2DSpFfk4qRP",
  "key15": "5a93PQUSR8cBgjUBo2j1d91DEhvy79LRrsrwJoJcT86uGgttDsodzqc9Jf2LoHPMZwfUSz5MV3muvRWU5dPLuuv6",
  "key16": "35sH65ksvJM2jwz8MGu4uMufGYxWxS6idzmoJirCMWkrYFL2FjLumrbhfFAXTgHj9mQZ9KEnYti4B7LD14wQS7sX",
  "key17": "4oNhxufrFxiAcb87J7NZXmz1h54B1NkMLQFYfMxnporGYeVBcVwR5iWALsDQ9cjpWSstTbBUo2KZ2NW5vcrsncR4",
  "key18": "5o5SoyU2AZpyjtAafQCiZkqbg2tis2cQVQvM5sEp6wencYE8VowBsMrU8fmZDXrkjKyx2NdLXZiU9Esz1tU5JeUg",
  "key19": "58CLE8j6qUHLz56jdNwxXSNCgs78TtzaUtZwVV8dYPNiorBtAHw85Dzz75U65XXjzmdj4fCfFfvboD4ZtLrWbUat",
  "key20": "3ke8nB5H8eFfLZf7CpZfZWGt6Gji9DvshrU5AbpmPFmbnjwjGTSDGGkU4VonkSf5yKVGdrTF8TQboAS3QC7mdtj6",
  "key21": "2dffmuoZ9MgaLB4Gjv7XDRTmhmiPdoUKcJb2zWaVXcF1bsj5jYQSBYNTmYazNhsUwh1U9CTDe6kQKDhxMvDeumxG",
  "key22": "641N17eSaYGCwnTH1qRZ2KRJpYcBkT3eDrMh5JbERCZ7atmcP2ijEYrUUU8wFaQigqf1g2wXb4xWQJr9r1r939WF",
  "key23": "5CewT6LLwLf2QKPewUtMTGtWPTSsDwwK9c4tckbD4h9r5iHTZSriNYM85oMSYcsD26mzUCd1nQ442ijpUnwgTL7z",
  "key24": "3vBoGh8hDpTeSCM7Em2ppRrTi8wdsHEJNFKdFDwrPrWjuJun72sMqm11LrH24rRRf2z5YPxbku3pe8xQxKYQKN7T",
  "key25": "9cYQVot7KDSR4bAgFZqZH2nqWxjLihfZKLpQpzYo4k6MkTF2N1145MgEubZiLbZre7n31d7oCKHUbHmYAZFnEs3",
  "key26": "3xNsVHT44HvDnzWgFdnYxMGxQhi1SffMS8BDQpF2kSCqKyVDYmNgBzED9E4jz9U9ebC1LLw5hyWUzUiPEg86yYE6",
  "key27": "3nyTJwJS8JmUAZbPqZcrBGjuFNwDuLvN6DUJ3EJ99Ddd7UoS5VcagEBiuFQfs5WPWuYCtst4rhK1yXiBY1eE2k2v",
  "key28": "2Z5YHb34EypEuXQrHT5BLwXriVJ3ZTpcTBpzsbMEdnpMFfQnainhkb6cajbBBjmjbsYYDmtrEehsttSs2bG94Fyo",
  "key29": "2mqT91AZJzZ4ofHQWURLJAcxkj5YwxMdgtU4xva4x5Jwmpvge7CyhGUd1Pfau9kEqcNQ9RgxL3hsnTY2xokpNrEL",
  "key30": "2MJqkv64UYFXyDFdQo1a1csyoQadNzhnf2FFTYhhBkjYsPq5e349biQrL5d6kmT6B3WCbtb77hYiUWMfshaBmBhH",
  "key31": "WAggwT71DsV5mVnr2VMGzu6tA9BYr4ZGBcVceNLbJpPsnzXcNvmzQryxHK4ujZZcTQPA7V2fXStRwE6NmvAt55i",
  "key32": "DhBEMzE45g9EWGgYMN9dao4CUjRXnkWgrBf7HN3c2a2oJ8qBQhMMLU4qdpcRhV4wtbbxivaMDWC9LhBMv9jVypB"
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
