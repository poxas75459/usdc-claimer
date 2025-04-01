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
    "3PQkQgbzsYHxpL1tEF1Krq8kqfxYty7gKg3CCrBj2wcSh9rhk9brrxPAigRfiZu8isRwfuZgqdHgTqYiqgTxdBWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AtQhbPTgtg2W4Lz2VNNa7ThGYEfxHufXX3dBBn4BwKKnK73MBU6qHh3QZDPsfWeXFwPn54LFbEtHhrAsQcWo27g",
  "key1": "3r15EJXshxeZ33aa3X8zU3Z1GEAcR6FU6MKVo9jNdD1C7a4GCcUdtywn3ZkomkCnuocQTjoK8mKWhHB2yCUJe29W",
  "key2": "3Czj5DKp84a35QG1w1MhtBZwHhkwU2FWZpaCkNJKm3w3q9fps2Bp2gftpvT11gds5em2UeCKPsp3JhGBw4TjPuPC",
  "key3": "4MnL39e4EBhej2KCqDKHeVVCuRcAgRSbVdRay36F4tUtbPd9uRVbU4ZUzX73FRmdvE8bEwjDyDZhXdECHa2uSpUS",
  "key4": "1p4Y4Dvd6xMR6zteTesFaCXF6JzxyhbrRN39BXD1duBuAxws5RgYKJ8k2uGjRdAmDa7vnfXdZB6Qus29Eorr2oQ",
  "key5": "5Ms1v44jUzchFgJt1Lth6K8xNwLgvU6XA6okSgXdihw4LZMf9vSbWATC5XzmF4aMph7jpGsjLJJc3AwqiSdWAKar",
  "key6": "4HDV8aHkSUzntfwJmwfjS1xCmsPfthWvbgUNPEZysMuq2Fke7eyhPn88j2b6SxQNbkovasPoU8HGnBjHUSjmdtGS",
  "key7": "4ANrVHiGPu2bmy173oav3ZQtrrYeVKJXnkPsZ1buvfZePStwQKiuwrFweYrSnKV1V1RMzqkAwdeU3i9m4kmdNMNM",
  "key8": "3trSoAJWHJCzqL8K5dQcoNcQhqEZv8hz7veb9Jkd2PMFAbr6hm5wytEzF5t1jQGXxNLJbL9RZMcjhL3K2ZVL8Bwq",
  "key9": "2WxD5Msi2m4aD8ho3DxSWUqL7ro1dRUFDfPyv6Ef6XdwfpmNNpu7RzvccyRBTh5nLWPQtkc6egpDYuZNCoptrHw7",
  "key10": "JG1AJarLsU3RuxapaHwu5mf3o2uCL7meDVZWnMMGWxKUZPxTcrbJaM6CEx5PVNPaReyjYzvT6UmXm2pBbbN6Ct9",
  "key11": "5isnufatpzV6Wb4994xidpNZCcQcyPWgsaRbdLrQRxJshmyWtk4JHDdbWRshwfb36SwQv8dfG7igtYMSMVZCrqk9",
  "key12": "36BAfnYXbRJPNgYNF1f39FjedFSAsAFjxBYrkyMP6HPwFoC28V3A27RJVZyNQb1vZio1Cs58X3c7tr6Qk6dDCQCA",
  "key13": "2bjXaRTzi3f6bhVU4Dx7DcRuan33JUYCvMgiVtbzAMzkZJEZLYTpwaWPQSk78gSgBAiVSbkPnh6RWU7ekJ4xA8Ye",
  "key14": "f9d6w36qpZWRjRLQykijZQaSsTveZJEfiV7JpvoNCEaJ9ncFUqvEKJx2fjamRiN7m4PefNjk7JKy7NvuxpCc2ix",
  "key15": "3LE8DtHKzRyHXPALDowg6es7TA9M3SJ8y5oC67XfP3JW4ZrQ4HkNVFbVE6rSj4zg5pg4jDC7QF25hXBP3bnxdZU9",
  "key16": "csk7DzquETCB8hJ177Cg1ugwFkZqUFhpgkyuvuFhVR34tyoSXRnptNp1mHN3J8VnjAnJ2oM3WLj5pXW9XREPQkM",
  "key17": "4MtGVGDgVUzuM651EgekyJPv6eG1MkAy7PULydWm53EAsB6XqBZ9BYnE6G9BEyyH7upeiUcBVVSkqBC7JoBYJ59c",
  "key18": "5oude5QhTkYQ95JyTKDLXu62vsLqGjqYvNrHMvsiLaDUdupU7yr2CLmvQfwLUus9amtGE5DMqATs6FfoqtyYkBQk",
  "key19": "4paPocHaNqUaqJMBSj94LVAqwY4Fmd2RXtPAf2KdioUWm6QxEtqbzyNmLJ3CXGnr1kZRhjf6xsTGvZZ9Bko4mw6S",
  "key20": "4HmNtCFv6mc5gAPmhHjWi86c8Ze6WYAZ6geaenLeA17YAdnbWxeNRGx3yNgVQiDaeWXzCpRZpumhUey2YxSwjGdB",
  "key21": "5XhNTSYFQG4mcEsV3hZXhwAAHZvAhS1eZiG8j14poR6VJXFjPNUjjon3Wsmy6gVN3kEkaTJoFrM7jdPXexEs4mDF",
  "key22": "51QQDZDfgfrQtozVAL6mXe4q6fsK7rcWE3UNFybhMmeUWhtxuTRnhiv9kRfPZdhqZCaJiQBicwa5rccAvYZk758P",
  "key23": "t2UqAV7TSe35YbVSRhua3uFzxG3ZFC1buhqf8Yi2neXrCZW9axi8DbrYV4a7c7pXTpn6aCZEcoHR6DLfQzGZyeL",
  "key24": "7JM6ffojbssh93cfJMYUjjP2AEXY78C8vCPwmV1GpZZAetdQwDGm1CjFFqwTCD1jMqKZuW4oanNnmZsiKhronnZ",
  "key25": "2pWyBzqqpk4x6VHPRLdrheQ1ec1gfDaK3Xg6fLLSjEaQnPmhp5R8NnMtJDQRuSdZJx95JsHAZbLFn3oKs5XJkXJ3",
  "key26": "3Q6fqBAJdmSp9Dr66nzr9FVEQf2cPDY9mzewYgLLUxsppz4aZuiEr3Smt2oHKErbpAB8vUEAz7aVZv3BPebKEmk4",
  "key27": "3bjGsKqMJFa6P8KXkGGr4oupv24Q38ToDVfXyRir8EkR4fFGzLqLinjzLwfSLCnTsm1DbcgEawCAihNp29p1JFcq",
  "key28": "5ndpm1Kau7AZmcasQc1wHE49i5y1FMTUDGZNfw5FpjEHpU2NxuYbaaEhxVmdjbb8ZRfiZvWUKjXWqZmsRuDhNT8F",
  "key29": "nVGCr2qoq7yzc3o9Ea7KQVAH3abKqgAVfqQs4kf7nj31Ud2yhQ4cfyPAxpNVNxPXQ7zAJnT5QurTNktf6EYmjQ6",
  "key30": "opuGam29pUZKkJWY5pnEq9ANAhjZ3ME1MhZrwBgEb6R6QqHfoefCSCA6eehsRcn7KHFTLNiQfSWsGk1Dq3s56SP",
  "key31": "4kmJmTMSswhk3VhUJXfEq95E1mvuQe8spNz3YyKFxd3UETb8CpC3V6cE38M7HvGyGGi4ZHpsCpCbrroNveRnRoEa",
  "key32": "5Xy1UGaKUwyKniaAX2YWtYMssUB6bB9yXeBuKmdwU2BDJ8gJupdjVLYJDREnDXSrRc88innjnZ6j2eaeiKeQo9e2",
  "key33": "36ix2C2NKNNpW3emnfJXNA3ncnz32JRmt2A9K4JZv63pceqtUd225HYQ8Hgh2TTyd6MoECtzGyKfTFMFXnDQU6ii",
  "key34": "2Cs8Sm2MsjLj3tWfRvuerc8ZniyZtnB6EEgvyDAGthQ3NqoKMHkBKp8y46wSmq1GnrNvEvRrV2w2X6QqpC2CFeij",
  "key35": "3z85hnSG4uVeYdjHwgbVVmwxeESGdoacjCbnNaVEsXXUJYDmT3KG3ioJEcfzwcfKHvRzreHDaTgdtxg5pYr2HtVD",
  "key36": "4NMpLUg4pJp9Y1GUSEa2LMW58osNX9hLZE3ZAC7WnqSA6RQN9Ltr6Xx6mMtJcFaao24aGJf55CLbENZFv2AVftdY",
  "key37": "S7i1Zyf5f5GdepXecfwveXHzpZRyapLcTK7BEBAuSxuvAcCxA1LYV6htZiqqSm7r1fJRgMd57SBTCcpmFQ7TVB7",
  "key38": "2zqvmFwRj3TfHuNVDqpt394bBYzpaPwmFQYpjGN2KgvK9FxBKXb3fNPnZmKnQNgqGdfra9nMpDSsda1n9HxrKJTo",
  "key39": "3GYCk4FCZSRSuUvZPjwgUxzhvLQw8JUDdzsSwe7bVKgr29sC6kx66cX6WQxFCujFyHW7Cv4brionPEwzCb7WZj3h",
  "key40": "4GF4QkKAMq7tn2vzqD2aS1tMuVty4xGYgmgmZNRdaKM2AmcypUy7xG6WDheRhCQF4yE3tQB5ZprU8UfRLpjwBAZ7",
  "key41": "3ZBmX3ZPnFzaveW8CssNrm2myPb4yvhhFzew2uNugGjAeMJEPaUviJkV6B8qCbQtwZToYctwjzbVgPUGEjdEpbCg",
  "key42": "5DG95vnPgqKwUF9Jp6YuoZo6A5MqpSex1iLZqdqcmfKkuzj6tc4niQ2jnnXturFUpnkfbkBoAaeo6xVGN9SEazSL",
  "key43": "2Sd8J3cyHUgEQ4UiyhYqyS9QsAK6hrZAmtveqJ2BCZ3XMHK9irWpbi19X8mMLzMGPpxD23SG9Gcrd47ZmtxbqQMs",
  "key44": "2hyWztkkh7nkLqwPAqKb8y4E5pPA3NpCh4DKiWunhsPreztN2FHnRCYSaQv7VS5WiYYsv7TpTfaztx6nnYpuzB9k",
  "key45": "2ZCYNw7dkpAzZatRqXyTVuvyiZ9geFghmAzUEtKzNBxTZvQhTiLefCH2CeU6JnsuG66skZ5AYMJkrpyEf8pu1RU1",
  "key46": "5L6sZcqBfqunKLgAexsvkfqRw2MdsnyatkmLghPU29Kvkuv8yBbKz3oTMTQ9LZZd6GMWD1NQ48BgLd49QtyhfHm9"
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
