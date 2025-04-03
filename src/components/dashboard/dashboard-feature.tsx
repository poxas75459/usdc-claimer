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
    "PEyvzFDECCZPKKRUvGiDVkQRNH3E2URGBcW6UEFbB3HipmxQfCz5oGZyP1D53tSqtZt5FrtvJiL6z5HUSM7V2hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CaHpXqg3MECmch7ofUumW6HrusLVKZZWXunaD5GHRxct9mmVndRMs7hhFWQezeg5SaK1QaXBFbqm3Mwt6p38XRw",
  "key1": "ztbfvfzj7jvZRwnstngPomM6FiZoK5HiwsfcBdEt8VJs371bofcE3UTATNVr6P6Xvjq22jiafSt2ayyq2ZpvhUe",
  "key2": "4f9tXfhRcXHx8kmT4gfnCpC3bKDnwVRJY8VJBvrJR3djqzp4rVqfUrUpXMX8DougoEm18vggQdjBKjQH3no8tYX3",
  "key3": "223zdfRzid9dG8wamudBcroceiJUjEVPWh6EHGD4kPBRPVaWWjBpVNUhCBqxPhvtr8dsCXyqMKY5fudNbz8hk3kw",
  "key4": "5qdX1UsBHUVJsLkYBjx4YBe5RrG4UMB2w9bmsEHNAJ2JApxSiwyfXdGiCZe62BZgWb3J5MgXuQHFrNgYbJZSnZxW",
  "key5": "4NLpDDERdQ98zhWz3Pp5WjeAumvwKuVXCVud6zr4gLdQTCY1D7XYAwGFkeds3JpnvcxhuKgoD6DowvCrE4cmaohf",
  "key6": "4dED8n56oaeijqaG7QShGTAEn9TXqn2nyYBxkPxoz2eaAzn92EQk2CoT9CR2mu1URV8nsw6yaqpG954VDceoMpST",
  "key7": "66GkRDJN6FQBWqQHTbjYMmYswwoND6YnA1MeBRuoKfvpawjjVm3otcrbHdAydNVQ2131gTbdDj9WA48QZkgEprk5",
  "key8": "5iQjFSaCLieMwLW7rQhd4SpZdSgpJ28zKjYyvxyp9yVr19WQMiRsK1ZquTye1mJeFcz1xLcqRyVqAbWMpDFUrZmx",
  "key9": "35agJGko78K6Ub5vBdpJmSt55qVcpCDRgNefPqtK1ZyNTLyjS7isKYrWvmnTAxWtBurSVh3F9MguFvU5wyJYwRbw",
  "key10": "5cfn5HAfS1CxykvK3YkEVvwE5EVF3bjFJQGrsGvC7ckevW95S5eEvZRDhXDPEQfSftSs2oYU7GSMYYWCnUMUtgwm",
  "key11": "28qtTfZ7dcuUGatJYNsu4yPPrWuyCMaLt9KR4Vtk1yLWH8UhKeiEKhsqumY2prStUYdMhCURmwxQjiAy6CssEfZt",
  "key12": "4iC7vUGw22ouFMdwDQyvAQCzsbtt1HcBcgfA1gNWi2PLTKpXiQVwtSL9bPBH1zyjdus9KqQ9uRSv9Vu5vuRUUV6b",
  "key13": "5HHweF1ePz8aF21i8i3mnVT9v6U3yriZsSkX8BdXbnEpzX2CRYZHWbh5omknv3daY9m83u9eNa7TKmL4gu3WpUn9",
  "key14": "5iEdiUAymjjX4yiGyhfayBHhgJzKDxjX9awvzYBSycicSSCjFenbwrP2RamBNrhCC4SFr8RuS1ijBhf8BwbKxuno",
  "key15": "47KXde2RpPrUwgZXoSQxtRKdDeHd2qzLec3TzERgZRhy8ExqaSVVtCqQpSxe7cmH57uuGtkvasriXgSmh2M4QZUZ",
  "key16": "4eB8HKTo6b2v7GWDWHSs9hK75CecPApT8BKN3Liyx28i5272MT3SW3jN8z7jxXa9Be2ddz5NqQy3DKPTN4mUfck1",
  "key17": "3umNBEqv13eC5ZiK9m8sssqk6aMrGZ1rZV9tnzCYe4PY8P3xBavY466QBJ25ZgkgJdK5fCU8KJ9L4cDp82E1TRhg",
  "key18": "3kWciA1k119qRdpuJucMBc9XfQa49BMPXCXXp28YKRHPXNMStUvbKyT7GbefCi6GnDUj6EiC9T8pdFbWUcgCgtnr",
  "key19": "3XJtAJKqPKaVMFigHLL9qfTeCraXYKeqX27EjoKyKv87bM7E8FSD4aWVcHq57kYCstUhwuhEJ45xFfr2jznbDZeA",
  "key20": "CMoKtM1B72YoqAdatGyjvmpcKZnb79CuyjvwsD4gEtLe5EWz2vZX16MGQUpbLXcWKNjgtiQfh8WFwQYrXMWWAwY",
  "key21": "3RVUGWaP8X44uXH42Zdq4Z4bNNDG8QjfbKmoMBQK6M6hBk3qwzVCrA9PRM4rg3yEJuoVGmiNtHpjpWy9J1wnVbRm",
  "key22": "4PvhhAZDQQirZirvTXhiCc8DtrYe3kYrdiCQcTqGRb5HzvfS6ByS9oivPTrH9B7EGSjfN3vLxM26XWs52U4mepYC",
  "key23": "i8f7YinpVxnDoBrDYJS3CXkAHoWrw5Qub1z8eW8UqEwKK7osy3LXpoT6Scyri5GBimMG2DPBh4TreYiHaCYSAQu",
  "key24": "427kz6nVz6Z4bBppVWzBHvtCAPWm8copFiibHertnG1AgN5gVYSkTmGwYaPXEq8x9Mwgkt8ArR1h9NAb6e2YiFw5",
  "key25": "58teWfAa3o6t5wPfF3Q15aQ5wUBJPsJcFz6xRr3E8Xp349AWeVU2qWL1BZh5ZddJmthxYi2S6MWUBTW8bWmHkrRa",
  "key26": "4su1SPbr9cYX9654tiHLaDsu58rxDF7irfdcXxQ8p3xXgfUwKTQ4u3mtHox9ywEHkjafVc3uBmTmzXqxkoU4xE5o",
  "key27": "6684ZUV3goSZ8tZGac4Zwh8Bh5FqCQQ9Sv8U5V9RrfmPYJXhTT4KCWR3uiQRSBvcWN6edE9DFyhEn5YH4jDM4aPm",
  "key28": "3cueK3VXj5aZ34LLXeoQYTxSnTchtK5EDXdMtoD5msq3A7TfYka7kSxnUeiyQzVF6eDPqXGQBgUjss6NAZhoLfGk",
  "key29": "3kR6NwvQG13g93LVE1eGqKKfP8ekZMbWxAqVKjR58fNdV6sUWSYAXH9YcdECUB7mV7MwRQi7s9w8Fw1AEVkCYfTg",
  "key30": "4n3U5GiHgBtdcdLjBncpAuKbCsdYW1qYtgwHSj2PMDRrQiM32ZwDptjxX12LKGYsKjkk1wt5rqX7CuBzq5qoguys",
  "key31": "2FTYPkS5Ri8AkdAAxzQnjUjTGBcTmNyH6wCh7UVPuBF7w4wst2vtzquiQfLYDbDuv9MWLH21fFg4LNPmtFGhbtbk",
  "key32": "2Nh6e6seidreqjuqXgobTGQaWgjzu1RBwGzPPQpSJaRLKyx8QGUjcEtVYAyJrMB9nxKPJcecMVmbbRQezXTyp8Xp",
  "key33": "a7XB1U5dqPR4q25iTYWkT7oAtg3Ar7MBo8siWv9N3uevsp4szRLYXNJgSxD1v47JuJGGskDUQ6kJfLBRgDUR7T8",
  "key34": "5La6xeBFJ1ko2rTviVDNRhvzWR3toWU7TW23KGavWjUEL1NCGV4K8FzZb8HH83a6ZG3iLkxUMP9o8KJE7y7ss53o",
  "key35": "3X7jLnMydAcsXRjVyEiMFLefrKFnYq9Nmq3EhK1B2W42KMp1BdLWz7MA4Hobbo7iQGRZHPon17Tzfgts4HWZKk6F",
  "key36": "5czFgDhEB6bbh5fveVKbFbks8FuP3Jo2MaBEwBMeVENg6uKMUnpN3yZvVewhpuY4Bj66znKv8a4xUBAjzcA3p3Hy",
  "key37": "YHJ9XjnoBXPdgji6x7TjotMA6YnKjLwtMXsds9FfFHnqVg1zFdeYhPmBjCaS3Z3Y2jeLmsUnWeWJxdfLyhHS3KS",
  "key38": "eNbM8GFLZC6HNU1VVPTp6QHAPhDwivh2cndjZHvzeQc7GarrLXPQACoBsAVLx4qzUPipu8dFMjNLWhYgYAsuua9",
  "key39": "2NXy96SjhQNHfFaMNJQyXn1zLLxWurCsh7pzvH5DajQmcmFSEc4y764JhZnMDxLFE9DPK6NRALR7PuwFgu1672Sx",
  "key40": "2wizjKtn3FJtRfLtcs33Zxq9H6pyqpy7B9gV9s2GExXsQ7Tx1tLMJF73Rskd6GDvsVZixXo7EghEAMLr9HwH8TWs",
  "key41": "3XfyYThXAyb1wvxN74W7r1cJ9eNxAfYWJKcmDL5WV9TnubEHPyYfxFftmdpjLL6sZsuHcypePk8HBsPBHa8kzGEg",
  "key42": "3PmXUV6NPWEXZVGc8kVeqt4c4Fis3J48azxeLpbhj7uS3iowjPQ24DHWWNArC4GSynVixYv6bV45XkN2iXJZch7K",
  "key43": "41fZs9nGFcAYd8XGaztuyeGjw5W9FKps2tSFQNnLxQeAeigVQZVedSsD8XTktBdXtuB6Com2F6NF2LE23zbKbxUv",
  "key44": "5kbij5meRvcSdW3PXcEeVaintXExAwCsyBmHYRBFnrqyz2HSQNJKBEEKSLhH22KJw4dwFfcKNw9JTodYQ5KhYPAY",
  "key45": "4FXXteE1CchgyhrcFmLtzhBMih9YRCjkygjh8EvfiqNU9oaqZwaA2J3wzK2Y6wPtJ8tfHy2VrXR6geiUo4SJV5qb",
  "key46": "3brkpY6UipX3kGRfveFZAB6dn2p1Lyq2Sb87sodSa1oEU9t4DtfDpomhgn7BSS3RMF3JYW57VbxdmzYCoqu4pbRE",
  "key47": "3YZztEeTXtrLPQCiz2TG3nnSgctLpkMBHRtq1ezhiGMdhEaxf9SdmSf4JTMsuPybDFtAqSy6V6sdudS3ugoAR26D",
  "key48": "2fzG5rqxqsPtR2QhMjfiP6zTAtgVAz2wRwGJk6VhUvQjCAxH6NQxmZWFEw7bjqd3QEBu82dTJ2zqnLLPXVFfyANG",
  "key49": "LMZ9G31cboFJk6NaKqcdptfsGXZM5S53h379NpBLRKcB4KtKe6UESquvVeG3BQE99esT3EyaUHiUcsZjVs2Ryt2"
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
