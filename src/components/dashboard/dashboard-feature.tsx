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
    "2fLhi2Vto8oQ2zjPTzfCJLVQZqPwfskMeUgsJpPqZ4tNCvvtW5pf6kTAJ5ivAwjVfRhHLkHJ84FWsjFyUK7JHGbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UXy5egq7SFuF2ZRNxiQjR1J4PcfUnHD7K3wiUGn1y5T8qhzb1oTynznXYpxPSTg7P7fBcqcCyEeahFnvYPFLjnT",
  "key1": "5jMNByMJwrPAVxS4QbpoADG97iCtgPTNRXg5NoHF4fhZyLYwqdfjBPmymBgrFyRBUP9ac5vdzeD4sWQznuEYXL51",
  "key2": "hv1vLHWCzUY7A6GELaXBPG2ZjoswLSREvAFQeKBCNsn6TszuQLsnRbEVfGy26LKAkhVN3sERmCAoWBoaKPUmsfK",
  "key3": "4pWdmW8Zo7aNUxzuCurSoLHafHiDfvfaVfGATnneYQdXsXzMcYqDxHmQujWzXoBzXBeuehmuDBQCEEUSG4uheZSg",
  "key4": "5di7MPRZVvbBVzuM8LPnkKqnnJBGHY99vWpfpwgNcm6jiigEKGSQ6gM8KjgSdqv16xMPdvQ5VmbnaCfHgv9fGzQn",
  "key5": "4KPmQxWaXkD2KDRYnZDjZjfKhrbB76MUZCK5rxf6ggaD5y5n4nnGW9WeHvabHb7doanff9WiPHdEKrK6oqaG119x",
  "key6": "2yCDo6GBvDZoSS1FCwC5S3S4Udx1vBfM7FxKoLWcxp3cbRwUvU7EUMKZdLFvvLpLMKSowpqHwRTfUNebkwjuQGdd",
  "key7": "5jx7hLQhvvGMYDTUreHhrpzv3YsKXCCoy5esxCE1uDSgFbAj9Jxin4zm6FMznmNHZrWB4DRdTSf3hD3ER3krjyjK",
  "key8": "245Hqws2KAv28dZLenCG4NhD8NbZ6PNBupS2As4G6MkLyDg1SYL9bTeJNtUdQXMgp9THNGw39znGufFSwmawhEtk",
  "key9": "224Xb2BkX1tGgYrL4CujzRbHw1MTaB3aLFauj6UVzK1YMbvfwEd6rJSzfpAG2Yac6SWPepWmydUweQS25ZGg4UPq",
  "key10": "XbWYNuvzGWxYoh222x7CEjhRKGKXEm8s8HG1SvfUd6i8yaFk1bvS1NwMXhBmJ7vVyxV6YVKQxW5xoa3B7Jq3YZU",
  "key11": "24BPw8e3SrAUBte33xPjaXuj29ioeSk76B6UGg1eBdWdnWrbRpRqsms2rg4jPS2t2szGLeTkNphYnjr33cHMTBx7",
  "key12": "23vHsKrxeSEuvNX5wZJDAi8ccwzaG8YhxwFgeh319t43vBfKPoBU4n5RX1YMRH3WXPaN7bejoUJ3uHGk3agqNyYr",
  "key13": "3w9o6MmpGjpf4HvKz736n8Uid8BQdAQduo6CRBnSr6NqtYdgahv7zh9j3tAMDCUFgGYtNqtoNUA1542iZdqBXjLz",
  "key14": "5jByr8sW4J1od5BmjitiMVwjsDHLgzQf9fHMQGmxt34qMt6oj423YXKMjkfqFkrhqwHUvDHAo1ZrL71YZi1i6CwP",
  "key15": "5pj3zrYsW4XCdqs8gnrntEuhQ6sfZoUgdR2uZ1Edsr4unvBhGenMz6JUZWdoqZK3boYWcipBBkRyE3f3jz8axPZf",
  "key16": "3e7riBYLZdu53dkGVitkpE8UoiHRj8TCmsQoaAP5QBBDWjjsTyYvAPBVg8Xb655iuWnj9zLMpKwsKcah2A7H4ZGV",
  "key17": "NKkcLqftjCdwefKVV75UnLBpjErJjhxAbvQfuTi5koncNSZ4YSUYxh7RqGXGmvbzGESXMunPSyLy1JFk6GumLfC",
  "key18": "4JUsfbHuBKB2jeFbsRNDN6qg3DhRvKgn5mVHzNbvAjPgEA8mYdskbbNKfR2wGzE8zkBZ2k2AgZRy1KWKnkFQGaLz",
  "key19": "3gYkxXwCej4dc8MrL6SrZa6be7cBVLL8uZDp2bYwdabfuRxvzoeLcxnog8Sy4niLNECe2FpALXYv8L25pJcRnGM5",
  "key20": "2iBgy5A3RfQdZwk2iSToJW7NDRu43J8D8ZuCD4uXyCdCmXyeGyzaebiQ9mnsyMwZaruyC9bgkX4QVaeSYt7ArV8b",
  "key21": "3k9xeKc5iLZLVB9uM4QnNCkXH63Jzm7CYEeLfouFPbeMNXBKghJwH3MaFY7een3b93nfqfy9ytn5pTeEKhuuNJ4x",
  "key22": "5vQWUou2ktrRZVEzpYFr1G6jx5C2L4ENZGUuvWtnHSvpBFSBws3PJewrsKGvuVM1EooQ1wyN1wZdXXvqVB9spaMj",
  "key23": "5Zuf8sLDW3RkfzSNmuVT8gRtwVZAwFG26fegyjrY875WiBe8f1TVcQ2EkJnWT34GyDefEsQ5HpDVzEJNZGYLjRoy",
  "key24": "3dkjzVbmcibDhgHwjrwG3xySq8TbQGkwYLrEGWvyRrHnkBZYes8TWrRYF1gCJBwDWB3uf9TC2XJaQhMCeMsUg1Sy",
  "key25": "zMKkEkewYjPw4WLRgCvXod16YQbuR3KYZ5nxjA6LzwZ13j7WaVKM5Ba5Pvob87kNEbc5rSuszhTSDMtSBu9dcqN"
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
