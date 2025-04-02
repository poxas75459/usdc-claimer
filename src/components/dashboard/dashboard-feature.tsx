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
    "2MgK8wK9f85TRHbvRwewndQEGe25EeFK3gK89QQSCeznC2dYJu1VxMDZNAV4rJ4ED7kH8WTHAFXMsRT7juTiGLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivRe7Wz4CZkh52Rtuneyn2ue6xLDqcaUtmEPF1GBwTk91C5VK3wKxmQnh1myTCt1k2ZimnbUboraKvN586f2xSV",
  "key1": "2iuRUJ5t4goifF6bv9PTZQJqrEJqEq623ujxXeUSRQCppPbZZULYGQGSEXHWVuhvCkGgSBZCg6gGo1A2N5ZHWKZG",
  "key2": "5b4Yeq6X3NvFocnUDhQLkY3DJsHLxuddCMfdnLZSrnUEpr2dxJS9S6Ju4CtwWNxAXPPxV48ShjeBdNw7uCwV2H8H",
  "key3": "2D8AqQJWL7LfLTQZfmUhLfYQVqGStrHc4sJzD4NZasNvxfUDbbFACgCrv7jVw2PS45znxspjDw4Y6uAqh63UpguC",
  "key4": "gkyt2XfZHXctiZ5n4pQPUDZYGsK3PxxFh9njHSfkXrBKhQAq8r9Hr3fuw8CXhqDf96aHKCuSqYhq3bK1Ns5TLzz",
  "key5": "4WaqmdnWETtKVGaCinNCGhvQQgRWUGD5aHQZ4BK2Ge6A7x2EBfKx8oTNaGAoht34vEcDsZTreEy3VzW8Eua7v9Yg",
  "key6": "2Fe3vWrMypGGkseiKz6DpRijfty8fR6skCPoV4LkCUoJkvMAHJPSGbFDUKYMqK42o7hU8oQpzoDkErogjyZ1dJNm",
  "key7": "4CUZAxu4VBv8jTdMFim2GJy7XMM5CwjvXzJdvinKEDGuD7ujm1TfhzSpXrxkgRVzVus4oyy5N2jZmMUUsxsBq7Nm",
  "key8": "5qFhqKSdWfmpjuLiiXGo9cMhoJyvyyWabFAfszQC4x7XxiGqB7vdybmTQGiSpLm5Gr1wmr22mEW7RSUjyLDUidCp",
  "key9": "4L1WqhrrBw7eEMgRz5fdPAw9GpA9S4nQwf4f8oRFZcpz99kkbHR8RKmwUFPpVAxgedj53MSvuXafrQXgT8Md6DXK",
  "key10": "jKKE5ADQoCtCDfBimvLF8HXM9QywzA3j8pBLVMQGNZHfWcD67QxrMXPMVxSii484jUGYTcBTNmdsoF4GbTsN8jd",
  "key11": "4iPe3MSnyNaF8BH6GpZiwLUAQ55eERjVMJp1RyaQpBvGhF3eTWQnFoAp66Q4zaiLFTDKjuVBpeDCHGHvRQWX81dE",
  "key12": "5ffrHZcqVuZ3y9raWxCsGa8diC4AiBnJtGY4KSk1yJio8JvicC5RLPPcNaBVzGTthnwxUziFYmWfwCVozaScoikd",
  "key13": "2LJnmu9q47iWVVRek5vwM9cqVifL2eVX1j3kG6i8Gx6WgNqZuS7HcjdNyLec3G92QjzArPTxbieqn3V2qFsCzvii",
  "key14": "dMCKCBnvNd9S8APkt5rvfyFuzsWqmb9FsYKGtUuRamGg7ybbiEfpWM4qmfPGig4GC3Ms8TZXoXvSMaX2gd6Vg8H",
  "key15": "659sa9KYvWnCzAvUdyqGF7A44NuBj9MTcQpAGmXFURSZzWYJjSCPfzNunSAK6x4gqATw3BSLoqUdpeJaLis3YVrU",
  "key16": "2EjcakyowYJoXwysiA47ixQTnEzR7bsig9ARQjH8o1znUB23VJwXD8yfKHNDVZhsjCLTWcwS2JsCqqn2rRDrnLxP",
  "key17": "3bSe5imE2eGFkPYSE1pYecW8EXcVA4QtCPwiFxKishmKTC3J2G4P3xygxGC1Kh6u1euEkcdwkcyctYe4AkzeRUfY",
  "key18": "4tCTS7F8dfjVjMcksj9e4vUsHSduk5NnSwTF9RF6xDbhtnhXUHrij941PJUQUWGeb7GEpAU7kRq1ymgJPtXXzBp1",
  "key19": "4Wba8NvQWi4Q1Jcw1avsEChVPKqE5Q7BTmUmx7ht3RNs28rV1s1txiFuc57CMBZKk6LZgLnCUwr2q7KT7cbGzBVm",
  "key20": "4HrNpf4WWjrjNraHeFKkvYmNfTHzmWhaxJwhX8JAVf5bEiAWGzx7VzenmHBoVcYk33mUQS9h8EDRU2EQYMgwGSjW",
  "key21": "2ZwYTyByeMXZpxMAWXjg13dsLh4pshdbjYaVUQZAxGZkwon5FbryPTk6aN7svnbc4a4ojUnM8hTJrACV2NichHxP",
  "key22": "3SU4oPG1bUq8ZHwu7Ys46cbHfUyFBssR83krDh4nMjvFBKGzT9QX5QRWDPfuVzMfapwVfrbYba4zNihhE3Yn22kX",
  "key23": "4QJtzYhaNvY24FKSpnuK2GYj5TR5yGPLPYzC51XnAcV5Fti72hRT16xii6B2D7PseaCLgjHdtnRXwRf9Ef6XJdxN",
  "key24": "VyyLZUeiMerTPanCX59Qa39y1uEWTrAeGiQYHVCWYDiRUj2vtN1ovbuAj2dRNb3CiAiJHnsUP9M2hLDyMhwTNZx",
  "key25": "5QXG2fVHBEFii1bF8NqNMtf6cyHfoFeUJe2cpota7MW2vpdEFa1w1UoCTUjMCwSLZSvz1yGzpmkECDvPYS1q5pek",
  "key26": "2sFvPZpzzUQNJkG5swkaHTKkTN5e4DW57Nw8VvRE8LVAVEyNfvAHYuR2aEX6wwvihYao9xDd6NDECAhiVFBr216g",
  "key27": "4aFmAzTL4wxFXCquqd4ZdRamUqsDU8adtGigv3i1DyqMpVycY7AJA3uu2W6q3Vf2yyHbKZuHiFBYFxgSKiJZtT2Z",
  "key28": "3NxF6v6dNvGGEQNhAL351P4e3WTe5HiBWuUm3qJo9tUwX7qB2AXhCxRjkxU5sXNYxMuknhLTHGnL6994bP6HmMpa",
  "key29": "5yhTnaR6yapSfNTGXGusQyHpPUYpKYasBS4zKuTFCREy2r6kumBZDTy6Mzxj3hWnZvEKvqc2MERFD6CSGAZYn6Nk",
  "key30": "2LQ8a5fFbhko9DsdY4JqPV9oqkEitSdc9arKJNRHPwhMhLU3jf6FHhondnAYUWxfe6WQMmJX29XDbBim8bW7xzXL",
  "key31": "5cCUaqqrk6AuKDtUGoWukxbA6zRAgf65kp1qrLRKi4WvAjjQGYUXTjWNm4mVsmxDms5eK7hSoBBtgwLQK6USzrjz",
  "key32": "dwyfvfPD3qHjRBxzZdJqMjtYUAkwkorZ8Z8AKxxyeYoJCXybbUSFAmB2m3fNFcEyKAkDzmmCH9evQyiQnsFav4x",
  "key33": "2e6EaMKmQbqQQgGJSJUwCXv3oMKFPreipvrrisGj2t2vXtsSaPeyfdWPSzJ6VJphAX3ez6pGPVp2JgD4QP5KPa16",
  "key34": "57KxeffVW6VM7yAxWHGDuUR91tCZJpCLKZWAG8Uqo8Z2uJy4V9Q2MDXzNCtKrWwrxdkv9kfBByzFVTPgftYgourj",
  "key35": "Hyt4c918pWdFxzt2KxpYndLQYUeTRky1cLpLPnHuJHYSQCx7fUsT6tkoMAZCu6nLoVTVNo7UKR9p1StzVgngaGt",
  "key36": "2S6qcFQoCUzknCmZDtCAc5kc1djwamwkyqLHAciWXpnRPPg25bv3QaTotTjHo9YAZ3TaURstymwU8FfhT86CNFn6",
  "key37": "4tsdf9TTNDtn8J4jBidGqUEB5AzHP3RV1PLb4bhH71Bkbff5X4gub26MHrvWWKifxAfFuhqhQ93aJFy2VAVGDtaA",
  "key38": "2cZnnanPCF1ZKevtDaGLT3qDareumQ5amyA2B5RFrf7sEhp5XievP5QEeTghz4xa2AQMnr9DxrxPBRJmQWcPJYbv",
  "key39": "o11ExGbJwYkbekpCrkZPDLZ7npTvakDs6xFKUgvtcZC7Hbx1Nm1Zx4R226FZC5H4VtghuCxqvBbuMZgnCiQ6awK",
  "key40": "4y4f76mJx51GKeE3KkRbCCouJ52qTjEvSXw82cuSHqkb76fB2Vrz6MHxaFZNUHnRxM5cjE1Dhzum9GMW9iuvyvNG",
  "key41": "5SazMGL1gRvdciixSqEdxYhk9gRt5RuzSrE7JosQhFeUFN7uEtiSe6L4RLneHm9p1bVFAvSnDNEvP9nXwyRi8Ext",
  "key42": "91jcwZVGekoRU7QVVdMv9HYHYoCMjoXVYUvw2Tibcg2sQvKsbTxXngJMAV8azrnigqT7GQYDAbeqheQRsX4rK4G"
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
