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
    "4gr6bw66abzgsPxQ16EkRuZft5djNmdtCzpVjuV4ZnUqr9tYynmHajCsrLq1LkiMVHXSW3uQQrunRhNQmfjseuKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DhbUAhRjAfKDwckngZK2vsrGvhNjjK1RvAspAh534unc7yHxTvjG7DV16PFBNYuFyXaSrbTkKSJPmaJgSZ6KbiR",
  "key1": "5i7U8pyjMwmgYgWFLD1jbjCvjseBP3BSMj86j5wH47tHTD5AuEAR7w3vcSeT5iBge3y7KLarFKTddBKr2h2WqjxZ",
  "key2": "3vVw2jk9hGBibYYzrTLJSk4DgsbSLZADjSrVSGrCTwWvvG7hU7hzEGJQULvD6qZBkH8Nkk22u8WNLufyQV4eoUCV",
  "key3": "2c1troWMueXL2ijQMuna6KQRvcupfykbUmPpgNUxMkZTnzCT8nSWwxx4gkHmThTV4UYGX5a9ucg6RhL2SK2zaD83",
  "key4": "36ZyFhXRcF6kTZFNkCukBExfh9vr2aka776C7YYerZ1kxxGCvBzCRrQsX6s3aNFoDXhP946Hf8LtEJE1qCTonKn4",
  "key5": "47GHsCqfCr9jCVhcT5LJ9W4kX8YPHumnVqb6MuQhKzz5DqTYN9TyaRBSTTJSFXvHL5LU3dAoFDwi5mp3sKEUvNUw",
  "key6": "568Zux79BTbWk4PEiztgVAb4ANRnDKTxMCX2h9SZUhMog9u1eKZme952Z8UV2PqRdXvxrXqeHRRMymPufGEZeJGi",
  "key7": "XMYBtA2qdRurSejvyv7AgBqdnztFS28HLgg22gpqYn59WTwSmb9J9b2op3MfK9tnicPgj2MMySGiGHSGDBKvGmW",
  "key8": "5PzC9XkCmzWb13P5AvAqwrJbwfJAWKaB6LxidvwXMRim7ReYZZ7g6dsxwFMXScZSf9UjzECKUGaLtMXviVxPbG6b",
  "key9": "3ajy2dz6rprZiwjGmYTfmgRGX5tYXEjMPKpRAeE2XH6yRkxq87FN7TckVdtM3RCPeJFVkKUr6QReqUx22GsGtD8E",
  "key10": "4Extsj1JYns1auw1oQGg515Z8Nrf63Cw59K8jjJMGT77WngJrMQJrvJfwSDST7h1noszjuX672Qkdp2yzqfhRJ8o",
  "key11": "2x3s8mFapTV5PYU9HFdZ3U3oZ22JY3U6JHvC6JMpdQn3B9nWcrCCBzo9vSt8L4Yspx7HmiZnCN6E9Jj24jAySRHP",
  "key12": "3ihjXruwJunJow5Ek5X6Scaf1Nv7bfTCCbVPMN4HXK297w1bWfFEVh8SpBPj7ztFNK6yrvSygqpMJsuSsvAY4v62",
  "key13": "3jiLtxg8BchcNXS4ZhrczsYo18AYWgWz9EQzPKBhH8uA9ALavj1FtJJPXnsBCbWfBzrTpeoXd1HtFKSyYnhQe6qm",
  "key14": "3ktmHhUGQbHd4n9pwmTfACjaHw242hB6XGGHp4UhFsYx6isTbvymkCQuennnDSTpUSKDytEyYJb4XehWRGie4wu2",
  "key15": "2SyTi4QsQu7DHJERCe5MiUdAB7ePB8U1czBzyr7oipp3f3eujSnf9PVX5Zeg7NnmzfAP8VLdBGJbMgDvkvKpbiWF",
  "key16": "2ZubZDb8FcERaHv3bxqGLgNVgskn6iLfyZyMvS3kULmkzD3V222DaCNxDFks7F4JxVWFGZRT3sJYQPwA3r7DuJUY",
  "key17": "5oqbkgJ7YVb7WeQfBS5XAWbLKCxsgY8mEF89A8yy8XxygHwhwZKuK1HmUj581sws3QZX3yj69tLFpG5SgDyjBF3b",
  "key18": "4fVJj6cWhaCiGQrfUDmnTCDTqz4mqNfj1yqHHR3psdLSXJMQDWQWB85HcavVfNB46WsUjGVegxDZsKwv2arWNmUm",
  "key19": "3HEjoSxby1kFxyo3vUs3cDGz7pBrcYufbJqZ616rZp25wFuW96jtkbZpWE9FdoSeMvX7jLRKXTW9JotqFW1DqPgs",
  "key20": "46X45YbwEVGughFnkmFfv2GjmvTWzzdNMJJyRde4r8saF8kacsadnhgqma5D1wd8m15zGcBjV4pTNKU44tW27Qjd",
  "key21": "5vxfAHK7TjRm9PucYS8pv6AwEULGq3uV9V3ttNai7ntiWnrVJLB7nbWLiebrmSGxwgW4mp1M5xXCni8RZ8wUxs3i",
  "key22": "2ohkSECyj7f8HFNo6fSNbabcJUtKCRcg2ELkTftjee2Tc7LdSZwUyoaSKc8xd73LXmj9gdqVYqWdF7embzsTxUHE",
  "key23": "453AjQf8qsT365gMVN5pXCPmMHaTvQKA8TkLhxxWrhcE3BxGNk64p4m51Wk54qk7eFx1Ks8tMwgBisdNewvHbmEZ",
  "key24": "58tufmju6P2iA37DoPKjrTsqcB1SuBLLBGfm8b9uJ56j1WtF1sFiW2i9NnyiFZmWb2ZhJJdqCwXsNSSwgz2v7Tcc",
  "key25": "2bcUKBKFv6hNge8GXyTZzR61ZBLSAHKxqYX5HkUMgBXSS9ZafaYF1quRQRT5oFPipCUrjoDWihqgKaG5VNSFc3WV",
  "key26": "HRk4Gi5gkx1DeFNFbrkdvQotKsyPw8wh5qHzAQpJ7vJ5AEGPm6f8zNS27F9x7D6bogPM1HPAftDzoiqPtzM1aRo",
  "key27": "3ajffJU1qzcsGumgukxQ6Hn5MUmhJo6E3LSubTSDtMfg9Sk3LCsyXpozTCkcRSYcDqsZKa7E2f9i6q6JQ6hQf5ex",
  "key28": "2YRHUaeZ4Eic7JX4zUBecJpjC3NdMw3ov9JCYZt7HsaNHWt1Ln6FntG7SGDnwn5M9ymubZzt8tvwgB7au7hP1D8Q",
  "key29": "3Wi1Gg9cPNqFmVDE41MsfAk2TqY1WX6jwa85bBeC8mn4VSgktS9Y864dMx2ZsBQ1uRTjqThhF3bYHQDT7CVtRfi",
  "key30": "3Zh7jNnAqHg4Cqjpf1n2U5mmMLbjmrCX4Yd7n7WDVJBAtTLVZpXjjhbxhCxo9vpVpUT2DqErhKzEAaWZLMhnjMgv",
  "key31": "2fCbKVuC9JjcV9xzFZaEXoTfeMg9uDA7HgCEBGUEbz6N2tLULWuKX9VMXDLPZpLaf4LrBR8dnNG4EotXrnqHvyV4",
  "key32": "4JfyHmvkRXfBkjwfj3WYzjwHRzojKKTXTeH6pxEUwQYXWJR2mAZt7gYzWd45mmXfjGbFGMWFVajyTLNRwtzfwnWA",
  "key33": "466p9ajpM3CEE6amehDXcMjsbv9ksWZ3m2hPA6QZCr2kW26UFDQ4SAgiece6seWf5YffJ3WCmzDJZCogroR77ifk",
  "key34": "2yjViR3ArVk7q7GrTPjPoxBMBpEWS3ZDbfUdjL9iL9zivQ8QFe7UzLui1tnM2T6JbwLy8WbZE7r5U2FEnNwuhD4F",
  "key35": "3kPALix7y88UWHFocRU391wmu2nWSnuPbHKNqpVYVXyq7nRfGNsMohyx5J2xeMDUFVFbuW7N3aXAg84ziVs8phrr",
  "key36": "mj2qowjViwLsNMKfJd1nhhSZCcByeAX7ztN12M95TZi7LZFjC1bYcM4xQqr1y6wtzaAsQeXvseRtSMszeEuZNRt",
  "key37": "xYyzTcLKNtVUi8ikzMAWFbWbiYeA5vJiLACURa3GekQJSDLH1CPFCxh2yecPLrp7857ffKVD3dAwYFU9EULaEv5",
  "key38": "gaatAdu5vMLEfmDkHKu3tw5cC2WUufdANjqJCJkd5pk1mReKoY26DHJmiQKUFmntHjCNfK7Lw2We4okDKwvfqL1",
  "key39": "5taL2QRJtvQqFKwBbyxLBUeZwaCMfdEzVuTyxcxfAbLN8wKyEgB725G9r2cgSnHcsFnkNnWE3tyZiNVHExR5KBga",
  "key40": "4oY6uy2FZCGP4e7yupAZhTg4dyCoGDCAQ184tfPQGgKRtfuw8pZBUxQVFjGiZLuGptuxuxPGqKbCC7B3t11Mkwp5",
  "key41": "3HGDTZkaCSZfLLp5Z7crLz6z7XRhg62sGPtcqqeWoZsPiTTinyG56CHDwNNYapsqPivaqDgZHmEXqVwgifRkXLc9",
  "key42": "5UPr1yViefkUHQsaYTXMZ98H3TNYLrTKVTpqW11Q75UKA4JQQmkJrjnrakvr3y7fsCEBficazSwiAuUtrBVfFoHy",
  "key43": "2YfyPqdhLEHpuc5PTYsLDio8MjLHL2MXUewPEVjD8kmLYfqmmPHgoSmjrfhfy2AWcwcKqtzBqLjVZ3pAqU6UmRcQ",
  "key44": "5PbtmBEpoMX9gocb1WD3qVJfRLH1QMKrUNPCCo7WVSajPv6WLHGkfzxNdHtzXMd2c5nxzgRF4YA6UUnxZjgG2UXS",
  "key45": "3udr3QKFgb4Fbh5ejTkNaGzSfjY7WqdTJYf5whGQ6CgKPUVRnzPnoJjEHkYHBsDLFj2NupG21qFEQLgAbwnDuFkD",
  "key46": "4EcQQttLwoaiV5JYApoyWKjSbudqfnDNAxKhohfND9HXCrFpdV9UFq1EFUgXCFRoMnSPdw9pkociHUdRSjzTJXHC",
  "key47": "4ocBNKiDX61YHkytBePoRhixA2sudnhebf4Wcewj7qd2g69f5THLmGTitMrdaaozgMPjxen11euf6Vh5EyBQwFRu",
  "key48": "4FuPgzZ7CKYhhT3jZy6AoSqx8jR74XqigTRTqXY3XemeinkpmkCcYMYN7nWdUf87HWANWzPVVXFF4rEwRfdfQKz5"
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
