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
    "4RofLFDwioVssZJ4KaJmyyCVm4qu8wvzd5XTKKLRqHsLoLabNebyBsC9twqew5soVUJ7MFudHszUD1tdpcuqyWdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GfeuAvS3GsbCA1SSDmAFyRKcPimaAF5LGKkTvmsmWVx3AaRLyMMSuD6B4BtuwBzkWtXX3JAyQmJtSKkVjufVdSi",
  "key1": "3VEJUbsmmRWqmryqccqRhQQV1VTa6vpKvL1AAb5gdUMAcADM2mpQwvTRsJ5NxnVjr2VtMNFvXFj3JvLgcgokTJmm",
  "key2": "4EaAG1AaRzZc49kwHg216Wic2TCyDUshzowGXKC64ESXq8kgkQyddoPFe4QRDGRR6xtNzG3vMxBMEY9BNSWK8koe",
  "key3": "37H8zGQHnWoBe8SQJoYzguz8HBSA8r1fWoWw1JpY79rTBmMKdhFU4LaCgQkZVnsiNgmzxk95Kq8MMyXm6KvBGfjD",
  "key4": "5cbyQLnGuv9AenBX34CaZFLx5DHdEgFLS2iwAru4rJhEFviQpwDX4kueVBZjsz9y6pwoiUzs7BGDZHSunnGcHHc4",
  "key5": "65A3s3ydzY5fvL3ajd5v6sRmoNjRiiC9b23dLwow5EgfZV7QH6R3rFpNQ3Uew7ESqmzvrnCfojXWYzjHNaq9fYue",
  "key6": "3rprqsNWWvtHSNt4bHrfARAq9yxR8ucUdjSLGAyYmpja5JJZ7mzrUjavoGnLfYVi1hZpB5CbgEKAQvXpYUxwh9b7",
  "key7": "4VBXzv5b74syw6qd47Bszpt7gndnZtV1sdRqPUo9gHveFbGWDphPxsD8Q3i27sUegemweZU2X2xNd71iE1RaDM5",
  "key8": "37xSDvbV2wTYQiGyyfgtNFhdCYVj8k7omYUffC3ZjdwJo81rvbdQLny1pPqLxB7G7qfHMBgQYs6zRMPwRNy57sZq",
  "key9": "4yeugqWjB2vR3xSYbfyYVjQ6EYxyruQxeCfPeVchCCZpULYQKuexJz1mAXZnjz248zLTMZaXyxGqJk92nxzxuVj1",
  "key10": "2ERCJz6PdwuEm2CUbAfsr9qQYQ5wc1MqfyESCSM49WGr7sSeVu3vmjxXtmtQwDdL3eKb3PheAZuFFL16t1fDKX7N",
  "key11": "2TNXHo7iAsaJxeF33ZjPSs1brv2AJ2LKn3dQGzjGCtPUqH3fPRg6cARfzjQqtidapnkwMemJeyHotRMq2QLtWuJb",
  "key12": "21Lyq4qQQUY1i1k177ZFzRETxFPyfB8h9ZqtwXzjdFvrTxukyWLYgbtKJxqZjMCZwGo9x7XDqWrwgs6v54QWL6jY",
  "key13": "pRKx6BiZpX848bhBPc1bzwgpYCee3VxYCPpag7pA7xKMyriVRux7hiCsaGr3Y6gLc6J6W4mcVrHZkmctBruRGDg",
  "key14": "4zFq4ozg6y5dYz8zqogPq7HXFFBNT7sAUdQH6d8Hf8buXYgctJnbLvmWDoAa91MuMdGEsZiMaq6V3EfmQtgxPvWr",
  "key15": "4UphyaYAoPyWxwZGj59U2p8oTHmm3NrDQJzs8XBiB35hAtLewWhkfQwYqKANM5tzmTH7DLcmozemES2VKrtC4V4D",
  "key16": "2KBWgAfy4ajV9BxdmC7aWjmJVfzMQUapitbFbzZHMREUBg7oeb8zjEnxizQbdArvDk626EtbZowRS3V9TmmcXAjv",
  "key17": "2xjTZhAiHFG67rDxKxcyia7XLyHMG2VpTpAHqCYDGoAAAFiEPvn8KShN9JtCNBQQVWc3oHAdoNZPpiENk1DBSdif",
  "key18": "4Eu8D176uR78pCzreJwY7Eb34572wyCpPqD7Y7wobUHGECXin791w2kJx2huNDUkRSzyNpWFy1xh2KQVHiujitvF",
  "key19": "2xUWmiYqBTxDkCGkefS3LWZFzPw2DgKAUDJhVV956aezd9FjVcSLFZVVn27yNac6LnYaHwkfhqE18ZZ2GVZyrmBV",
  "key20": "3ohZzcjtcEKMDwbd7cR19YLbWRNTty8tzPjC5LPbFVMrm8df5oogCyDvD3KVFMJB9JxWcpvDCkdk8ZhQt868X2RH",
  "key21": "5amupiq4BjtLfWaJkEmYoAu4X8LWKq6N2YiN6gcHw7VQioj2VzVz1TP2zPC8Ezsg1QaeKYmYnZ6KCzrqoncEMcNp",
  "key22": "61naiqaDRYHJR1v5phByEDwFEb8WH27ww96EHeaSReVdFmJyzDsBAKM5q27KdWn9ackLN7cn13MYxLYM8F5pwSwY",
  "key23": "5qHVb3wgV5smDASwSpiK7LUXHBMJSfYrinjejiKmqwksH2UzLed7CZR9DJMaQ9eiGnsudVQ7u6m9Wi4gyjKrADp7",
  "key24": "2pX27p6jaon8hFxTdGFFYtwLDM7qfjvbUk4VwEsMGRPPm1HZCm3isHYsfpVvEsB2nbqpjeiZ7xXPqKbfMvMiYs7L",
  "key25": "5aqLrhitJpamXqKcFYmv2QfCk4Rn4cN3inyEDXJPQqZUbEQtn5Li9fHTV5KeWZKaMW5v9YV8nFpKuopDekQmbez4",
  "key26": "63jbGoYEQmcFEhhkaUaindZoTJSb5x13yVw18GGLx3pDAEiWfq1Xjc5Lg1HJPHv3XMeVP52hgWGjnQFAMDdWfpG8",
  "key27": "5QDc2PtpNX2YM88KxUiop37uR5pYxkruZf9tmZdkZRdKRQxJH3LEXLjXoKkxVgRBpp3AybpkicFZfWpVBAqTjg8Y",
  "key28": "3YPAbn6oCEpR29xiHmttEsx1v1RbLUF3EtJxMAcACzYTdkXkRh3ghfyWVnx5GcwB2y5mVB7ZnyhjWZLwrCWNKcrC",
  "key29": "2PfqhdYuPFj62LVzTMmdP1CPqNctTuXYpBCUh19xU5FwBWkQVHiYbchtV16pbs9CFEAp7UNCc9BMQ9XChHfApxaL",
  "key30": "2PEKaCxr9Jb84fvTUtEE8CMyC8RoAkxGmDAJs9iz3TaT5QSY6E4tCEifQwCLHFExq3vxaECpzqkL58QxuDefTEaj"
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
