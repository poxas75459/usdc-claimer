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
    "2iC4MczqL4jbmuVAf4F2bzTvCzTvHPcMrs5uzZopFQAq4ZhVpC7iCcnWksgXsw5zbgZ1nh3Bo9mQUJubkvGvt6xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iV9Uv9F1krYd3byEQrSmhgVavBMeXVy5YYk5Th6dRNFtijc3ymPDLqdsGiWzYd9nmS4cjKEFGa6UVaaG4PgBM2d",
  "key1": "3SvNMP7R8iYEZtZ3QuPfkRAFc8pm6dGpSzJNPCoc34AUpnQsvhyvRK7JKjfFBkkTYdeSrScQBYrYJgqthxQKSQW1",
  "key2": "2Y9Z1BtEs7XgzdEQfQbTWkBkAcjAdhK8bEabWjEdHkNFPQ9sAbSY9Xxc4tkT9Qh7DW8ZbJjEgZqnQgvtoHfVJ9LP",
  "key3": "32BkSKKVewEWQh5tpYzJowyJKWgmdjz5QYdv39q7emRyo1KURhtWujJH4DA7qmckGDxDPKfDMyqg2CF2CnSRtshZ",
  "key4": "61Vbc95uCf5eBSWb7PJGGrkBkKKjqVsVVTi5KZ8XpBk3JYzHNYfJqeJ5tHdkX8QLhuMmCUGJ2t8KijVUP57YiWzi",
  "key5": "4BHrLRxqhtGmgZmA9bWgM1qGZatuVNMjuRe1cayDw1BdCkVtCo8xEKnmhfvSYMkYyzeRYhVRPBM25qgdV2mq76Ds",
  "key6": "2Ar99kx1Zyn6TBRgx6sgbu1FfsACcsoVjcGFzFapXLrB8M4TMLDNXgNcJTUkz8BiZTYW6isuQhb3jNKi4hdmeebM",
  "key7": "67LkTJW4g9dY7VTjp9b7MnMevZrRfpyFQsnmwDYEHubtBj2xzcvwTigz5QeZABSWyg5ZQpRgvgSofPRfjVNU2qMX",
  "key8": "3buEpjJhhBrDMMj3euGFHt9WNciZUyc7sumFjUBe7zd6ejYVy3W3USpS7van79xnjW5LvekndKDkibfLVjchn9PZ",
  "key9": "4jX91irAW3rCTjZdKJQ6Wi6F3pUTeBEQyVcBvS4CCML6UkuX7tgvbdAgLznyc2tpo3T2R2AZhuzeS52VvgSykouP",
  "key10": "2z3vj8CbtaGiEZF82Td1epKQ1VXq9a5Wedxet6ys27WzbNhTGW3cNZRH8NsxUeh4hnHY2AFCPNf8rnwktD3VAdPg",
  "key11": "52jkJsGCr1bqvGKRKr16H53GEFPsmU6eyfyiXyDRChkAUKdhopNSVPrMJHis4AYrXmxFRYNLQ3bqHQLTnuDpgc2v",
  "key12": "3GhFMe68DKRSjVHs2P8aqnKAppmtrYbD341YJiTkTayTM4MXX5bUiruoqWR4z2NfJ3SuEzxQVq6gZZf9Y77b868K",
  "key13": "3spHt3ekzXGWEHTefhnL3uhUNXqxnipoybU2AxccyA5aR9BseKFxzeuHgpirHf7knz3HLZT6AEX2rHPcUBomxzB6",
  "key14": "2dzXkiJctEWCWYd2qSqKFuKjvQCMSuRF3eGisTLHNyRZFQdBqUXrXmqpnxVAdF4hCKWs7qg452JywWqabTbqFCrs",
  "key15": "4Kt6CYuCeRKMyvf9o1PkjCHYe3QkoccjWmLPGMvwwbQu8nQJjJdWmmY9jRoRjtTCADSpECaQbTYq3ZZoyXvX6sJn",
  "key16": "hobujJfV32vZc81mvv6EYAno1F2dnK13AFDtYPHkxBiTV3SRB2P82n2b4sP8ciY4aWnH1QQkx9C7vqBUBTJrpRZ",
  "key17": "3Q8weupVNuGFtWuhAQ6xLxRgGFXR5gp23G3p7DuY3NH5mXP4hK4fGkCuXGxWzG2h4sptAkEH8Z8VpWDj9ei5ykHU",
  "key18": "2XD8DKB31nznmKrXvdxr18oxwaQuHuVTCaRbJUm7PUhTb3pvLsBNLqDzVvruPZCoHqrhNKFwHeUQ2nB8MpV4Vy2L",
  "key19": "3Nx9SHUqF3gZ64zrkAPopry1nV25vu45zP3XHViPfFNZSvGbHye854Rt6XNVKqkgb3xrQP6Xs8rU2pQannN4rKWz",
  "key20": "2WGRYLmyim6pif7tVpieN77sskehBJvMesWqQJwa5tzovrP4TWn9KVDGx1VUHkjqjQRc544SyV6C4QoqxdXxd6Jx",
  "key21": "2UeEivmZfetoAjfuYcU7XL4NaX8tPnPM42wn2ddzU3WaMF8bZRjDfRyvsm2p3CXfGkU9CKCuvyFZfLtJnubmhYeZ",
  "key22": "2wBKNrfVehvgjtqjpgHCQEN192gpoLGfq8a1i5KV9SC6Vxymrdi9SouvwL5RD8m3pabHS3x65ATx7azzepKeHwCY",
  "key23": "4TKAVtZVEk5KdFkZhNbo1evygfiH7F1N3eCpc1SbE36quqZJKdxzdPkirGbzoEGN5vdrDXkRdK8uDWsiReZ7Jtt8",
  "key24": "mwtvp6pE4ij91yko4PjdehJmcL8UxEE1euj2mcYQsvtgUUoXRntE2Y5VaRvZ1du9rmDik3JdvqCmx84qZRmxAGr",
  "key25": "5ngXSeemXxvbgzTCpJ5Q7KFxNxbbhAHp5kpDMwyGVSJ9Ssqc7nb9VPpKcdiaWzjrW9o9qvQECj5dzTdSwG5BfNRJ",
  "key26": "45srun8bENPAZrftRDe8E5A6NKeLx2bQe83Vr3YeU3SqAxz6Y1J2bnvbFrBtWXhBcFHmYKvjMgxoiqmPLRnCajiF",
  "key27": "5hCK6AXzmw52WV9XZuegRXNNK8Bn2VJfEs8mrCipTziyLh3KZmQF7kZ49PgNzh72jxXnijjCKw8xp121tmyoDueW",
  "key28": "5LPfy5zvA6GfD6WN2pp42MQytorEYzttooYEPpCzxYN3yBaZpcmDjZHcgWKUdAtiZ5zwWzCC6W9ES4DcqTUyXtn2",
  "key29": "2byTacS4JbFF2qzqCuXuDAV1Wo6g4EbyvGBeKG7LMZVYHJV7dsxrBMg1p6fgQPUn7AFQZ1CfHSCcfUaHmWEJcGf",
  "key30": "5QtA4BcAHUYJhP54yVa4nRMs6K7jV7vL2Swo7p8ZxKL3uBYUZetzKz7rr69bFikvrSwmkqoxtvKpSPQXKYh4eeZx",
  "key31": "3hUwitMBYhPrtK8Ba9PvViwCEUYwe7F117figFXLxCGebFevuaaCED9DF1gECqctdxXmPstV4cbqM9fSi3xCRGf9",
  "key32": "4cZABcRWxVVwC2jodsmsVuu6oTBNifq99en2XXVR9FkFneSmT3E3rUf9MFjddpUCMbeTCY8y1ZcnMT7vzQyKUvXp",
  "key33": "22GoPQUUi6xKkEeReWjJ63VhunL3ZCxjeTFKs7vpF3LeMKy9Ytr8M4a1NtaYrMXcXcJMvJ2umAapiCN8xKT2obGE",
  "key34": "2422C6DHarX1oGVnquzAkM5t4YNS4SuWFAEacghe5gxqe3HsvnMSq2baUnE18KkQGuXbfzq7BYDixAK3ukQ5jcnx",
  "key35": "5i2wsmDd7C3PpbkqJ5JrfmEEeoGpVYfWMvDJT4QxLENNbqzMXpsdUkJKnDWzC5Hc4EaxB8GAbYXBB723yeAqGX8Y",
  "key36": "45wh6MGNH6FwjYjNPcHkL722X19YTqiCTgPBfYbgyhCdXaEXi7kPfN1TcDLTxx6FNV97utX8HxZRvBcBR6g4XFyv",
  "key37": "Cf4Z8HuHGY6eMkhvE3q9RXgET7wgeUmvapYD5ysJQik7oRBbJHeYAPY1h1xCztx8G8qdKbeLShEnFfaaWM8vQWK",
  "key38": "44AnCz3gw1FAY2feEDroxnW4xiEXS3a5qgDy1Bd17rqXSfCaEoALvf915tpRxRf64jYPGh3FmyJjr9Ef2jF7Yra4",
  "key39": "51p5atHz1fmdVRjSAdhF8HWW3ja4T9jNZHNQHTcmm19TZcocHrL6Yz7UFhWLFYjQD5i2yW4YxPy3srLy8JBcp9Ex",
  "key40": "4wDEettTpyW2Ctj5w3B7qHSQAWeCca8uiaaBGpx33Vhs9s2RAD9quPN3uNFrhA3bki579i5aEuCvACp2UQPkEMxc",
  "key41": "46ftJtgSSpxpVBKmq3H5yq7D15zPnyxDuvWyRvW49RRivQCQhNfEmerJipuS9vxffPviz4hywt9epJdebT11yFDP"
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
