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
    "qx2A4y1AmaibTSNPAE4D9DyuUcV3W8GXGRRquUgb641Y3LzSbEMzHiYpUPiTsffYPjNocbycuUEhNgFL9qEyyFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42aZDGEpwvjZy9avHtMjGDT3Hx6uuwMiU8SNszbtRyZkKpnAyN6auyXG9cPoiLJWLke5AA57jKj9BCxtTjVa8X5F",
  "key1": "2rmjHHCtwLdV4qznz1YL3vgdYG4ADngHxpvDKxnECrX34J6KNxqjEivDG4g1BWE2u6pmhUa4GwC3U5XspzCKCdxU",
  "key2": "2eh7FByotMpyJZpSv5NWmfGg8Bh59nX84GzTcxCMuV3XUAmXEP3yJBfVcAMHjkFEJ6U7STUDsEkCPnMvZ74bfcFN",
  "key3": "4eWy3WgYxxwZXsxseR9uPiq4rdErVKKvhbM5Y2XyaENmu1N5U5BkzB4CwLXp9uEuMZZ9ntoutavRpSNkfbH69A9N",
  "key4": "3b5B6R3iHbiGLJ3NWwDzmdb7FqXPk7RY3zhxuL44URU2cu9crvFpv6aDYm8zQ1Y4AfDn9hmafE1DdYBLu7Xss6cn",
  "key5": "2QWaJUPFcuZ7KZGeftdBwfuhgCq7rbcCkSpQzmaT8tjLUo9Vv5Q18gmbyr7stSGD6UmhVd6jmwEFSntoJeEmMmoE",
  "key6": "4jqM2usYwAkBY9nZRm6aqPv1jeVJ86nmG5GCAjXB1wJ9TytsMFkfwhMKJ6HRtyUWc9RrWo3Co9pfthNRLnBPkMpW",
  "key7": "2wntZWKs5ByMjSf8atsi15yxAkmLDqymD2q9LdA2tvJE8Q7Uoqr9zo8kszphHyg5q9FUf1hDDBPNRTTdgoS2Kd6y",
  "key8": "4aWMR98uYmSk8AmBNhE3cm796VgAM1nq5v1Po8aQFMJQPoYEbgxokk9xLWQpp4mXRCFUNx5BbUr9beQsCneG8M7X",
  "key9": "2tkuJiEMx3z3eBBXFghwdN6c1gmSVzBmLsy6cDUJjzia5CKWNZpz1XGsxRREarVnNDWTFbC4ksvghwxHCZAm3xAC",
  "key10": "4SuxUacNzD3Xy5W5RDWFKpYtXbZgsvrLWdDfWj9Luo4Ni2WqPxp7o3vQWxRAEMEWfsPvwCHjsPcj3bLkBRP2pCGn",
  "key11": "5SgTTKx4Kao4brNLn8dWoQ4B2Xym3DtnMsX6WPgeDCHf5b36xnNvec7xGNygm3Hrh1xDzC3UdTsMVUvMwonh3QuS",
  "key12": "3pnL5UJCTbFhEptgtcKfECb7ZXHaHtDi4DgLZchSh6Hdvvy8ohNWUopc8y98QBgnKrwd1YY3hvuh1R6Dw7WQfaTD",
  "key13": "2Qo6bgnQS3stwooADC7wwZ69ZuxTt6ZrTxbJACwg2h5zEvGBUfgVChunLMcPQgVf1uyS7gB3v3vfP6wiMzVyQAth",
  "key14": "5Wn1AxYJpfRHMCDsL1gaXs75jRMS1s1kJuiCFkhgiV2n6GTQ6v18WZH4zzgyG6UekMAMgpoC1D4gamAbvYYnRGfZ",
  "key15": "43eU5VuGhg2BkqTdkYjk1B99J7XuxgX8myrRwYqqXCDMdMgQKTKbALfjHigyYJ9iaRA4jKDRiAjgFb1n8a4ajDs2",
  "key16": "DQj1aRUho6FeLWqZBvuew7Mt8gz1LdpfRjmcLWoqjgBEM1YuzvKVVa9DPbKVX9kBGSEArTyFJxQvTunjyTF1GzT",
  "key17": "PJSohF8VSMPDLAqg3ausH8UrZNtfPe8HiwLe1iRURmkAWLrpUs88Xe2P7TmH28Fzu8tR9LFcr4Jd5ijWvqLWZKL",
  "key18": "3qbjKss8EqpRK3ZVWVM2HDJLoz7VaBRojSLWghr8X8Mvn2nfudFfs7CRhsvqs5aB24vE4bxQAZjC8nMfoStkfVh6",
  "key19": "3Eu5LdZKucPQQ99j8uuZtWLqDBYJQgpGqe8MmxT5LwD51Dq7RrpGXsWDZGX2UMbBg26CA7UpykjoJbdDoRhLhYXV",
  "key20": "2bWFSeUnhitEptVoeP2Ya8JtKEWEkxCUX6uRSwmuq69MKizQQSpF5HEBKXsd4CvtAdRHRD6stKGLo2dZXChVCrum",
  "key21": "5oyaAzGRZdn6RoZ2zve1mniPRFEZ1DSYw7sQdNS6J4M3cg7E1QEN2tveeYu1zNhArUZNPXybSxYs4kt92rMdNb5U",
  "key22": "3QVPQnrmQczPxGQUuPrGDdtKeny7GmqajFKfhBBonRpSHWiASTHx9v4ukpFR6WwFKzS2Q63yn515pgFp5w2ZEV4B",
  "key23": "5xxnfSLkVnBNq6fzzp4ZuPVCqobECki9V4uf6tMuhFYUTea95hGCwDccLDhbzW3TgXkwVtHd9jLWAd71BwNnSn8L",
  "key24": "2zGu1uL4agNb465WQHdNJty7G1DKDyXyWzUbyaxpAjc5ef8xNPE58K4Ww2fDxFnjRWc5GBLmivYBQUHyFrtN6sme",
  "key25": "3g4Q77PmFgZVTLeQwHMcF89bPn11fnj2FSViVMW2XMfPqgBuYXMVAW6qRLXkD9vmZHrPhvR6ErqDCdENcxHxkT3t",
  "key26": "sUnQketZwf644LzRJ95qKn6yJ1EPE4Unwwp5yX2Eoxj3YyjhixdoHDzLPjSTvSpmSr6KB7ea54PEV9WicHFDdNw",
  "key27": "3TNRHcM4GL31ajgajTBo5zXUx5uy4kWv5PWbiMcEcgZCdn6mriqHFetBVaSvbzQrYsU5s8WGbdchQcMqMXzXByxw",
  "key28": "5mzTv8A3RqcRputSbr4xq86tocWyBJAgKXEEGVDJAJun7njNjEctmqHaiDKKPbrFtePx6jbUaxsCk36ziMn2uQs8",
  "key29": "AZXjLkffRggrHLS2M1G8Sn8eSUABo7ovE5sDR58iHPj4cyDaYXhgcvZJ4kUJHpC8uUhZQm912WrrNdCwEe9JwFu",
  "key30": "3BBsAVJXdXgfroZLTfHm9METi8BHqKgYGFEi6cR46Rnvs853yq8zq4Wp7whz44DvUjbS8ChM4juWS3UVR2CbLsTb",
  "key31": "4ognwHZv5zvnHGzvB6uUNVbZPvTwPsuL77trku5MQ1T4PUkmhZ1m9au9PfLdGWMCLzHrrt8rPsMekvwJFmwiPciw",
  "key32": "4pm9q4vywJUp3jqEpqW7KH7CpQcBXujLNARPh43A47NWSY8pq2gguVhHhDzUzFSGYdVmLEwuNJX5DSv6s5ZqRr3s",
  "key33": "4tSbexeDtbhiThAz7zLxGMu8Z4JbyCXasijE8FCXFT4urz5bpQUuwovkhoP6dqYuyRwaJ2XEcMgPDhyPXTXKyLNg",
  "key34": "2urbKyYEjV1gF7EaSpS8krAPS4qnN3A6a6cX1m69C56Lx9YwQW7zojq8tXpmVYERBhTHFp567fcBCLd5ZiYfYGei",
  "key35": "5d58ymfYhGKbxvZCjjRU3myjMDopkmhLEURDqF54Cq1yCKJqe5A3V2FGtQVKEKSdW8B71zNFfpCZqCRWwGpzoAQa",
  "key36": "2ncmAtgGb5CyDvcbf29yb2TdkcAs3Vcfrk4xLdDCcJ7ZSvEMJ4YNQtTNjNj3DjjoKv8Tr7taENhDUMD9vmR1RnK8",
  "key37": "57YSt7t1XnqmidyqrZizZVq2o7K1gET22myGFrpvPHMrjUFDJxCVgnjtuuTmsvzgUD5n8CjbTdNbbCoYjyb2U74a",
  "key38": "3ZS2RmC8c3crj3yjqt9wMiPvUsRyy7w5nUc14bJx3BseNXTsWAtNRZAY1Liw2esUjU96rN7S3pnhXQV5AzPFFGsX",
  "key39": "8qPhT6fLvEC8GoQPkWHAu9nwM7127ky5RD647SH9ygYEWsnppFQYgxPtVfAQqiGzzbN5oEyMescLheW5xqGVgQW",
  "key40": "nQoCYiQDsVYNm37SXqhW38XvaXAzyy9BCuDMs3kDCfEfmkg58aaUnMnvrgKxoYYhmYTSgMB9yQEdVFjTPKu8Kmu",
  "key41": "4MdJHfbiMKHLypcgDYZeGFk54hfMhFfUkDAY7hP8WiddZ5DAVKJsWtB3gUCsjUGdbumJFmwNyVwUYbyJ2mipNthY",
  "key42": "3nrBqvWio6E1MPrqnWU4eYG1tFnALMgMqsGhavKX1jnD292N1sKBx5xXC7gfN11W27Qaen2EtSMjsEWmK8Q8qBEU",
  "key43": "56259joQd7ygXGaM3URWXqfizQJryV9HwobaPuWgEttYYFGfbHH32QXQzMsbUv9e4KvqQb5DJqCRXnHV5amZkxWH",
  "key44": "2kvPB67zfnpn1AWq7CU7XwDzaxQg8xEichwJroXL5AvjZj8XWYJYHQ4EjHF73fMaxgtY7ewXjMTmAx4pnUXXKZ9H"
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
