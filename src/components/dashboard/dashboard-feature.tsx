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
    "4pxQQoifT7XhCQ93hZ959rLDMgQ7WQBNu2N74BPpdcRkVMEQ7sWH1qmLuhqFzjFhERRSDgucu3Rkui5N1eSi3F8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yKL4BWDX4mR1JVrrwibbMt1etr1DXA7kZW9mq2DRYopcbRsP9jViko727a83v79YMNz4KpiFEhipzPKNuoxvWAL",
  "key1": "4oCdP7ZCyrhebQUV8YvHdAzHbKcjxZ57e1cewVZynoj7rUWYaWj6iwiSt5ZTLvnizi3XrnNWwH9Ly9yrudqkHxyQ",
  "key2": "5BCATTQGVVvs1Bmrgvsx9rEz6FWrZ6ZbfGE33sg25at2NkpANUtCCC9wDC3y9BWkH3E5zJSVZjEhuJpuCgCi8D2c",
  "key3": "4vGYERJuFAx35AxYY4zmJFawtc4X76AFhkxcpPdbzNSF92uJ6NunYXxtbLRskxUGmpX1wRX8UgYKJUXVWw3WJEfG",
  "key4": "4ZbroBDeoL9XgcVXLEfnn6w7PLJ7pypMiKVJQLFNNndVvSWq5UB3VLxFk6q5JwFvjrtGHwHdLZHEMcC9T779gZvs",
  "key5": "2f9TKJo1fca8utKS15WnT5GERj43KhhRS117QDLZDbf39goiv4BbKs75evKkkUbkEgtaUBC7jvC1E8mddBfdypv",
  "key6": "8GU82SyeoTqbeb39jZvXBSwyEP6xiG3dLSRdQXZprLzEdDqVJ51acwhj7WhxQoudDLYEtqonrz2wzZKnQhPTrPC",
  "key7": "3uaVVWdqyZEZTMtKNSQav2MDcchdgKc8ttACp1LZkuYaZh7poRAVrTYiQybLyGjqr8enKsAefx5fcLb25gze5t6W",
  "key8": "5dmJw4JmpuodJANb3eFfDRGajpPm6E7XVt1SuxRWwQSG73TDEu7e4cXjQVjAAJri84GTvfKU6YNpKb2SkRw9r8LN",
  "key9": "4uTZEh9KsH8MHoj9uvUQnQSySJACkRk7xJvi6HvATTHwVEvo64gAacYAtMz2jGPUaGg8EKf71CCysb89qKoXvfnR",
  "key10": "35Y8Hg7pxu4q6R8qi3EJ2uBWRzbSsGNB6UvGYcZARYR2WHBg8jyZAz1jqaVyovCJsywPKvcsWYigrkE5uU6ynUV7",
  "key11": "bhAsikWNhEQrYsdWshLtsf47sN2Tr1CxRVdFJRfcf142UGTj2CEZwNozhNSLSyKKqR9arTyCP2mcXdnQnnhd863",
  "key12": "3t9gXZ4Jo1UKruGugRij9itcuXK2N3QHHsUVm7ho1G49PANwTTq7ZGyVxeMSSgHeg78qrT82FXdXu6vjdfj1cob5",
  "key13": "5zFngATA56pNHzD4hS3cjjYf4iheQdz1bXFqrZ5vjwwLMTMRiDA3qgbZZLjaomdfsT45SY7YTV3Cnq9yjKPBR7kr",
  "key14": "5NdVYZhogEy4Udb8ckA78csE4VcLFMGEbfzNn83RLZmfYrx7V4BSzUhZvZ8bMmaLfvfxmRsEeMfF7B3DRjFb6mRb",
  "key15": "3FhYyLP8uX48ysqmDgNWFy6PvXsj2Ek716A6byzXnYqPEUoiaDA5pHjfQVCLGVkE1rQLLNUp19THkDc17zC6fxcZ",
  "key16": "3v9GLQ4BiVMXtNffy6in7ysCg6pAMRKWzBs4EyCUtzNVCBm7hb35Z1fjQH3vsrSynZgHia17xusX9nLfDGN3RHQL",
  "key17": "4gvt2XgDaUaPZKD5zTo4YX52qNyUgFynohfqcPDaU4BffjPP4KNiRmgsV2rFFL9f2cTNw8UwkbCtKWf79wKiBQ51",
  "key18": "4BxD5WUPhwShqrnxJ9Yiz6ZBXiDeZiyrtzFA8n7AsgGcELZVC1KNo6oaoKhcqvvoa7kh5nmQqi6QpMiQU22XJMts",
  "key19": "3DK3A3LSyjNSjif5Xebsfe7yeQreh9XYgELHJGJwNrT72f8sKW4ZtXeLrm8cC51KXsD2EoUAeCKT2mQ4pHAvPu34",
  "key20": "3pEXkKH8jKLeCddJ6pjBtZZNJ5z4HEodNSNRGzpvoTeRNboFjm4Wkk34uzaBhmibD4MUHoYDhDYKuVdU5t6mcZdR",
  "key21": "4wWt4G2puFSfvUojaQLCxvjZFuG7ghUhT9HtgMYzjwrPa7LczDGvRFNmgCcyToug6XtnaMnd6XnGWbtaJVySV2jX",
  "key22": "3cn6HavupPTqasWQVv55Z27KHapT6aWQ3MRDS1Gi1kqYSiUFR12s1v1FXLNE6xXpd2ujehpTE1FirMYfgjX6h8Bj",
  "key23": "5z4mUCGGt84HJoNKcUiKktQ3zpD8s3yUG1FNyxgCDvMBnVH8nWHZJTZVPDUb4FnQz6ZBmwPwB6aQTW2NTs16W5Vj",
  "key24": "3a12kcU7wSiA42mGjGP6xST9Y3k9BZMZmsw6t4kVDetTcsXipEv1Dzz6Ya4eLMpCgvhroJB7TqYnAzBeZ896Qe7z",
  "key25": "2c6fBZs8BfZqHw6E9rBpyLJyjk3TTC2L9wPfXHBs2HdVNd8qagvyasMF2MeqrWi8VxSnDagqvAdxKVwQcD8F5tYS",
  "key26": "Jpd1wfEzgdtM9vZ68mXd5Wwg3WXtgRnFPZE9BgL6zr35QecxirPJqc1i1xjvuiQ7BzMUwCSKFVPp9q8mMjykZYR",
  "key27": "4RSFMZfq8BFWDabpXcdwaTekdruc6Q9PQfj58fVeSZ4PjaL3x72aHnZ6pS5eXuuycUepPHrN7qPZ5SodkbCzrdsG",
  "key28": "5vJEyGWNoUg3mCJ1PD15bnfRLNMMRT6WuhPcSVDcGMtT1yFWZFcHFMexxYjuCagoBzsywiAfjiibrxiAADxkpgn6",
  "key29": "4GuoV6sy5Yz9Y5k6DxPVqCrowmTZMQ1hZbmwf1ZzYHog2LHsfHM7dkD5JbaX3ASHgywJFRWXwAaWUq57CpztJZQ8",
  "key30": "kVdfGtnUzaBnYgq3t2sTo6bfjPwmBJcmaNTjj6ejEaFpRte2XDANJLKhv2H4aU43nTKniwEVwp6ERqKJbKsk822",
  "key31": "278H5xAN8njyWTRRNtCfw5JpSwEFgGFh3JwSPAbVRPXGi5xzdv28n3ffnf4x2tFCQjmzv7BHkNud5Fqgf9RtBUJX",
  "key32": "L3EigZn49eQkEUW298xYvNxH7NJgThsmNqPXWvTWNMcEUch5tyKonfFWB7BcquqeSXbyHpXdMDoDuwTsdcUukkT",
  "key33": "379MGcFexgKA9sKvT99gpHoJULcnYovhajiT8NoBGXAy6UgkcQsHEZMPA3gD48yVVXSS4HonnLNXDopG71jP4q6J",
  "key34": "2iLzbZJdD19scSj8kKhPtE5PhshW7q8iMxGkHoTA5tzLvaEiGe7qNMy3sNnmtoEPWbm1xDEcBmM7kgsLSMPpRBZ9",
  "key35": "29AiG7BBTJjzsDbRCCwJNF38QiPYmEmWvtiGsiKiXJkNze5DQe4rx36TH2az9Ao7bFDypZtzMAztLEWWSiQukqwL",
  "key36": "jmraUFSKJBn4SG4fcADauwA4UHny57fXp2vEA7tFttWxATWb5tYZLjjY7HNEu5pvW5fkbzmaJH9sRSGauHJhMyL",
  "key37": "2aajZvtYBfXwFjkNpaobh51uT3Z1cPP1BRFv7JEu3ybpsZZunmBhshTXtiAcL4CntF8K7wxgJ3nPu3hvsEQzRpCY"
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
