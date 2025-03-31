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
    "RqbmDqRvurLtoXGKZ1FCLQNNZJ7boSf3BHUKMv5K5NKcUaAYdYy94e5ZApqDx4tCDoH3LUcxUs8rcJC5pvRKvaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpeZLehs41gfxnvNBJqjp2WcmBmodCifisghPtfUPPYBz4S28ZrNE5GqsahtyuKhbH8MqpWfCMicUUPjNAYHdse",
  "key1": "3SM1Hak3CF65if7j89bz5KMHwnR9zr32H8HPxnaXwZmrZ3ZLYobzWWvAQXLnUoeRWzg4WV5X6Rq1Bjq2QV5PUbZV",
  "key2": "2gETNR5yDTHm5smPEWwhsGXtkWf3EoSEJCshBgkjq4WjZycF4GqPepKjSXWb98GpYs8Mn5HunstXpue5aiPogbXm",
  "key3": "4fftZxo96wCqP1omn3cSYNjRz9AZQMHXFsEV8P23jT8J5waoHcKy7x9GHwi3qxrR6CEejrT6YLGBN1HHjieHMPJW",
  "key4": "5zejjSLDFCXaShPrwipGevz1Z9qMkpThzb7tdxVBvJCQG3jQtmCbQxuxHsEAC9Mp5x9pprvXdwwGSpYk2BNCvuWd",
  "key5": "2sT2zfKAB26cAbcuYqMxPHzxp1WKmvLpHBvDKqGyVStd6LA68Gv5W6cTnAEJzjFsyoSLJujG6f3w5pNtM6oGPRbv",
  "key6": "4MqWX3XZGBednLGy75JBrnpdMRArot2g4v4cU9CDFGVvWyh6tWcP6rcL9diUi3wAUPit4hyYptwQ9dC2X5Pd3ENi",
  "key7": "ZMm42azMZNNSqtv9JDGJMkJxEaYwqRXkqEXqEJgoVt2oQHUQqyWRGH5iPzSM2sjZSL2Fn983n3o3WqdpapgPrAe",
  "key8": "3pnyuzNNR18HmZFxw6EQz2jnousCGMEKjueo1Jh7UoxsrEzfFTQdk3u5jSTNnbZVPNKSNstzuj4SuR7Jw8VBAYKF",
  "key9": "2sXEwaGb9fyRy18fwxzPJ1x4BRk7oj6J4pStMn9Gt7YAwgcCoYbsBE6kstG82c2cSk4JkBM8ZNM3sfipnvVDzuDp",
  "key10": "3FTMQbjtMT35KMVjNPs18XUhEwjhvY36PtASBcerWsbs1HmYqT12D4toeqiojWiazzKXiTBD66ERVhHFHna3wn6W",
  "key11": "H3kAzbGhx7JN8B96qzsTR1aZZxadwQgkpSiFgjoVodPyWyDX8gkkxzSnG1XqsQaACoTjA9WUEQGd5ntfWquyJ5R",
  "key12": "5ZHgQwuS7vMiUonGQjSDN87GLRgC2AKnscuzcMvUY1Ptvhm9tewcxbyNF4fWBX9Wkxj5eeYqtWF5GoLbH3foZNi3",
  "key13": "9vVaKu5hiyxuYwyWYMVYq5jSsA6wvXoJVn8w6sDXkWti6BYxLFcb6XML5AywsrBpoL7LKgD7vrwpbcT4jpmdLqM",
  "key14": "4E4vwzPD9Z1A65imDT62wESS8dQPGVdwmLeGQsCcv4EAzJzyDespYNYUbUH4dzckoU827LQfMVPbu1D3tMEjB4QF",
  "key15": "3xJMWMTq5Xmy7wwjuEQvEXmUegTAzjKP7JTfUe3xoNwDDti9YTv8yqLkRqaKMxFQMtp5tbqin61LcbzJNsr3Q2Dw",
  "key16": "27v2FU3rreT4vq4pZ5u563LaUsnuaRW2fZiramdQqqSnkgXt4KeDygx1KMxP3QC4Wf8gKMQTT5s8ghJUmawHEVrh",
  "key17": "4y1Zjvt1E8oGB8UVdQHJGB7P87hiQM6an68QYpUgphe4HopcZtNp2GT2LAwJvXVEzR3fYmWL9PRPcmJejxnWrFBb",
  "key18": "3RU7mMuDDor4MB8y8UCY7KXAq61AcC39qhrQX4nmja44wo39pEAqfuovHxXEfP76HFLUzaiVSLao68sDUAkLLBG2",
  "key19": "4CWW86BQWGzTgDoqurnDyTxLVQAgVrUmYsNgSkJr9LgKbSrU1sWVrvKNX9jUpkzbPPu5ksoKqbxrwrMj2hAcZX4C",
  "key20": "27UoWWsfYutoEipifu4rCQZQsqJ4ahmUdJvBAbcoXJTzYYuhseyijTb1jg6dGRHkZnE8zwowUAgDmsxTZ5yXq5h3",
  "key21": "53GbDkDMpo44TwYcv4apfoYZY8ghCxYQX5xATdCvQSdU7xGTMkU29i6UE7YwQdkD9ZiZwmYweFhUdoyTjsCST4pN",
  "key22": "2Su9hpTvP5xYp9pJL4zhQcHMeB2mSqUx18Msc89CaSqQ49B2p1NG7LVkw1yff3H4mkwoZVJ8obidrtwZ6omMQPNf",
  "key23": "e129d81zdymbhL7RajXJGGvFXmKemAgwYkgKni2X86NKwdJz1SqFDRfnDe4WFy1UQeir1kAB8bXCdccHut6pc5g",
  "key24": "b2mYdQLN9hSrhy5CFTr8jnQAnmMN1Rvuz7rBha5FKYLxqcQTyiLt3V7UB9qK2Cjq6bUEQaAWPcGEtPpWFshqj3m",
  "key25": "2NN3DJUkk2owEfS8Ph1Y1rNQdvhS4VGaC46VppG9Fxb4nrLhTL2Li6vrTLxn3ggit4LbxqiukDbNjucMigVCLGnL",
  "key26": "51YMW8GE2EV2t3wsrZNc83g9X5ig4aU62dCzpoFmFcxSswZwXVvKyf7utDzvUtt64NR1FKrzGTUfvrqgkZqKGKNF",
  "key27": "3kds7gmFQ1Ho6xi4DWiUjz3gbDNyYuAWYdHZMmix6RyPehrBLmzjY5Bkc6BFh2rvCExyGfu1wUKDLKn5BMtQYVzF",
  "key28": "4As3362m8jDrhfPPyLouukD2QBA5dEc7Xk8DYGsCJpLLeDEAyTiZGV2t87P8uaY8m1JdirM5EEXaSGWp346q3eUB",
  "key29": "4PpXhHs1REhFPWs2UxrV4cnNiXVdjRc2V6S9fGQRCPc6oX2joMY7vdAaupubeYXEU9MAtDSXcsGfh22eUxFnxqXW",
  "key30": "2vLqsTyh6S4R9YUqBxHbbpCKDjirvf9YoR5GQRycmrQTVvhvizMidfVBGsNmY8XHZPE5MWgy8wYKUaSYK4fqCQHN",
  "key31": "4YxmEZhyVzDgesJ7fmC5ofSJqfQpy8eKUsiFxnTARdF4NU7UuokpbzeKUFivriZQVjMSdVMfYe8evFCB24biX577",
  "key32": "2NsbkkcdPAbvTgcwkMSwCza9e33Yvxn5peSjusvkZ9ByHzmu8GmkYwvCyHSqkvn3azRZC6DXBGf1u3xZ9HuEAuA1",
  "key33": "2ScfG71YaWnjL5SJB4W2yunYG5kjSaoxhB88dZzFkGw2vA3uECGs1V6VVRyh9BrtkVWDqRZgkPRAFcpDX7PJfMTx",
  "key34": "5v7z3iBQj1xx7pdj8GV36hihWkbSjRCPcQ3w2Z7RCU4cgmumRMohvo3fFhTUmnv2P2SA8nrzfP8Sf2B88XLaCgSX",
  "key35": "34ZmhqZbqEcj417cbwPK9FA7cEfSxvKW7pBBsDHcznQGZLrX9LjXDQHT9Pokt4orfUBfYtx2CRUD2wAmywfozi2S",
  "key36": "5yAVAc7CAvSfoynpD5uqqFZxAxc6vGPopMwG3k8Xe94TkqxXqtF7WC3GMwua9nu9gZhDx44US5am7s9Vx6AKZaDQ",
  "key37": "3Dhmqxs1eQ5uBeZaGBQfNESbEBPrvGnKoVECzexXpSuyxu3xuCbDTwWERqq6pvRXGJed3SHnSuhmbnTgCJr1UoHd",
  "key38": "5YCGwJtQ7cCAWjAzQvXDRuU4h9aL9gVJmAuAXtEQLmK955tdR5jbiYTtMxT9mxEjz1fRehC4X4EUpAbGSpAqMSAv",
  "key39": "gZzPhCvVsASH6uDuQzYi5qx3gzjZJ3hdFAE44esotvuMAwEgdDJJoGcFBF6p6cTvM5Uxw6ubLBvA8WS7mYDwBV8",
  "key40": "WnKTxA1uM9MFq4mU45NSWZi4kLrRCyQSKRAKaSamtuLDSbAed7vCvh4u7AB3bTuJyoxKBjdZQ4odX92Gm4uhSUW",
  "key41": "2KkUUzivcazFrnVBYQkEkfnLP7x3YBm65ftwfCzSVCoQBxWFTZcXdvLJH7VgH2GsvQFkZDwNoJaCmKg8QEQQ6dEB",
  "key42": "42M88Lt75QZKqnozXeVo8pKKJP7PRAnt4Rw1tC7H8Y4qNvekkFRhnKXLE8X6YZiqwfaoRfYvjgj7oMRJ9ExsVPCU",
  "key43": "58GsPCn5XsRmKi9QduaVFJLHMdeBcj6PGucnmA8HSdKZkWQxGguUyga8STqgNfG73SDcaVRVrHcEAddAttFroNMF",
  "key44": "2c8MekeKy4LGc9L1pPNLcHTbsfiWsW2kZjQky1rvw2sTGUbfoDaUVa6G9Hf1LwqihJTUcLo4wh4pA1s4KDRvHxTm",
  "key45": "56kNLhJYpbfiTif1dkuUTZghPgoe71hmU8KGA8J56oJvVzvGp9hE1s4EsZkCnM2KvNmLqqUbLm3oxNQ7BFfd8VCK",
  "key46": "zbRGttmm12DkToYjNZd2XSGY7wySgL4cLUWStYTUv1N2LCjNKAZib3HbvKR92bZcS8WdUVpZL74SoiCvUQoH8L5",
  "key47": "3xbeHE2vacUCmizAEMCcCMpLGwDyZEwTVbGa6BZL3zHu4vuHejH5r7oPK6v8fJxfhkqSARmmf2zeek9LVX1PsYTx"
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
