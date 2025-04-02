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
    "29J1kxNe5VuvG4D52YUczfUxZRgERz1Fx95srSGy6KqSx7gWLtLKuR6EqLM9Ve8zF1ySy7176qWKqs41GbF5k1Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SAwicCbGfzY8i6L6TkF25RzqpFGHtGxWttefY1WiN6heyM3eGQU8uPFayqHD4WYgRofDYCRwTxHTz4iMZZsrK8m",
  "key1": "2KMAmp8u61vhMind8Cvy86d5PLRVxSnBm4BKQoE1AUPBaKnGBWy6jw8r7pwWyrHwdiZoMXnRMQjDy35FhnAiqrQ1",
  "key2": "tJ8eP6cw8L4FSwMf7gxQ2gSyogfJoxyEedoxvRzDY8Yv9nPXj56SStpsSySrvpuYuptYdHCcgfPrZPpBPPE6Hod",
  "key3": "5TKKw5oHs5Lh4b72tUVAVq9RRmU8nT5JCMqkwoCGFmt2AEEt5Ld2JRzWKoWQMak4KFKSPY7po8smG5hFHLP3DwL4",
  "key4": "4VrhuSALLbuCbpCKVZ69vhJVbgPkoWuagDzKWTN1Up1vKaKqpiuF3PL88g24j2Q8fHmqBeET9gYrH9L49Svyuqcd",
  "key5": "5VwzF4FfYX43bNPYpJWHXtUW1cbvqvtaAHF51L4QsHD4DKLgkZgMmttcUXbpECvrAGyFVkAQYcUasXiwNrCs9rA1",
  "key6": "3Xhur4uhz6RSNckdzBahMztn2UoY7Yd2GM59a2z3VcjMhtKC7bWawr9NW1vEHNqGwgKgqHKuiEZgyfTqBbue2Nee",
  "key7": "Cr1DKxKo87638SMn1vCYkSJPcBTSi4x6ge4FRtRKX9Ni9SD2i78Uo4p24FNYKDvxWYHGDPriBXUUSqVSeVwFDk1",
  "key8": "5P7pyQE9EM7mrAZFETbj1zmJmA2jkZPT7A8NULqTj3eMtRVXjpZuVVKNzVKd9qYfyecAnMmHhN1PKCtw85k9M5Cy",
  "key9": "2HEWdt5HoJQksKCNi2HYZvkQ89VY8WZ29KHwosjKuXKdXAKxjKiQQQPSjFewQDKWurPbshZCHxvj7vfC3XPoNvvK",
  "key10": "h44f1jj4apkf1aj4pZDQg1GPUu8FRDm6iwaTym3ZL1fQGcRHmV6Mubqvpy1JNxTiceQ43QKk4RMW8n2ZJ3HbWDi",
  "key11": "V61cf35A6sFq1N2sejTJZA3Pc8SRxCnKuAVVbi7mjUD69YsZAnALJYFCks4fV8hqqhZ62XSdBgXEf83TDkDKeP2",
  "key12": "5k4Y1P2oNjtKTmFF16UvXtMD5uQbdYMzvwPDadfvcbvF6XPmiGpMhDTcopSsC2cwkbVer9qCbct2hquyHgvCYaWA",
  "key13": "5ngX5Kys5jsAkMLxkAqefaMTr45w7G2onLcMBxN1egWWfmsYGDSZrjmF8DGm2V26UU9WaPDY72wV8Nem5FfTWgoH",
  "key14": "4dQLHLsUVF2H7JW3xNLJtUGRDXCVhv6FmmVzFn6PS2vd16bhXHsf8FGBpc3DiRa17YzVv2Uf7XxtmKSqfD1QFYkX",
  "key15": "47Kg8zUbZPpPtz3HNCn8HLGHLqf3snHLenj3JKTc5PH8Jc8y1CdCjVR9yLZ1aHwkrnnXoDhWrx3kqiD5NBwgxiVz",
  "key16": "3eXqwqS2ZZHrQViFbCEK5PumLpWfcgPeh57e58WnrxhvNuaeYNRn2fzZZNsfaDSxFA618AjWYnGBhkDNvLaVNUKm",
  "key17": "Gu9Gj6cMxBfgVkV2kG9EFBvf54hsfctBeSU8KSMFbqd8TJMy5MpbbzA1JmvwAeFHoU3szcxPi323SfFLsCd2Lgz",
  "key18": "5q8uUzVPPVx4yhCTKq8pYBQY77Jc1wTB8haaivwpezhE2HHAXr9HpyMV7xDgaVnqD5HFFGd4nSGP2fx6ogibhPCB",
  "key19": "3TXGGVmUZRf2omx6Hg3jiHtBUXrmj2ezyDDB6PcFYi1DF4uQFk6sGXsLPRWxWQ2uoF1ThgoCotutkT4Q2XrDDbSB",
  "key20": "3p1jtwALkMC5x5UbBgEhPVfoj8L6EbfoMwdeFjFof3FT7RoiZ3CFwkBowjPLcP7kZqWtkS3n3ypR6H9mYE86XoEi",
  "key21": "3bTA5Eo3PZgN8CVmTvcgKgJFXzd6sj2R7FJawMEHtot4eG7p4HT8SZUN2Se3kEWxY4VxCNXDuF1UArxuKawtA48H",
  "key22": "3iKEzycRB9QEaCZ2u1XQ3DBx9tBjyrWaPj6h7bQqCJD4h5iKzAL2TMm2hbXuwisUsKsGfncy4K96JsVBK8CoZP5J",
  "key23": "rmAgZXBPuZvDRMTmurBJrDxxAdEfBQ6f4fKJxPgEDqSXeU9iHeyoYHiaeqBXZEDCk2qhcTCGTrWnCqnzJR4KCs5",
  "key24": "2sMsHz3BGAMivpPLbpoNygZREmoDS4VGTLPteobqi1jm45eMj3SZAFMSzSw82hHZRQ1JurzzdoY3TT3MnSMQvhDL",
  "key25": "2PWMT13E44a2JAfXp4mY1opAK7wL9QPHJC1hwhztzT2d5TmGWCe9vgkMPReTQpdmqZG5eFiLjfEHuNsDAjo9NPq8",
  "key26": "5itGdHTpCcut8DuP2PAQtZcdYWDprytAzFbHSJP4qxfqhAMtpLK4KruNa8vbi9GsFVYvxNPvJ6vhWBhmyVTiSdk9",
  "key27": "3wVeaBgpiDasKCvsHq5wU46vppEhBJQ3pmwaeSiCM9hXGYisFcY4d2H22aHg4YizpnxviRLQiavEfYLq2qdqWirY",
  "key28": "2ViqxoykVRAV62LKHd91FbjaXbMgGbmUnZsYNxozCo6T2t4tvJrpeTkevjsxJcXhdr5ZPHDtHQK6eXSG3DfC3yRu",
  "key29": "4Rqzf7CMg8wWAVBUwZwvBccsjNsLeEAqfUKrJZ3dfEV7jUjSZsRvuPRJTP2pcEaB2sqmhUwAbbBpwYBKNXwZR1fi",
  "key30": "3wyda2Nk1hnTRTf5TWBRNC8w9yV8kL2BQLWfqDKkvxSheeUesnSM8RHMFFHMaFyr84NCWFX5M8dLkXyJp7d6TPFc",
  "key31": "5CoUHNMEyLebwXfzF5yqC8rvsXaCFM3fWn84iGhJsWVw5MRU75nMaReSBAmmCNWPy4JByvwHSzuf61KRXejv1Kpo",
  "key32": "cZok6Z8hk6DZLkMhgwew5cqUV75LZJGEHtZ3g2FcXnbNGBZdb6ARTmrkHmUjBN6mw8iEsgPuCLHBoyFBH3dLAAH",
  "key33": "3pTZhbhT8aPucNkCfBWfeKbxJtRwbyRoiEghK2Yr4BJ37sSJTufrn2tYHEXgkziodPPyqh2raPKkM7ZSRyCv5ECB",
  "key34": "3ou4CjWwvLgYNeoeyka5zGu6D5Kddfso9jzKPWhZFY2Vvdc8mjTYQsUekBdm8mV9uqFS9q5LA2di839G6Z5xbXBb",
  "key35": "4JorkB28W6xpxJ5iiwtckSsJWQSMw5akyW37w9LTZVNv3WkwzgZduxN8NJmPmGzU43v6h3AUSAVn6HGUjYFeXYfe",
  "key36": "53zZ8vTFf2mVwL8EhUtPYGJFZHagwhky9hmGUTfhcMrRr7YMGX8k1F17pXyDaU7NVXkhj7C2VEcmESiRsBUvGNMM",
  "key37": "23UZwQRwvFE3MRwSDTYqdVPSdVSMZbkCa4cnGNuAwRTWSqSmuHhy1VYGQhSx677mZjSKqvzkmhgJbUpd9UgjaRmi",
  "key38": "4iZZwZTG2N9E6nj7j5TZTDmEtTYMxUerKrE34vGRAYVVUrnZ2QTL6VCFvLodmHQaLyey9b1aZVUSDmMge53PTFMs",
  "key39": "45Cq62DFNyV1JrX4oCMozxRmxQpcnfCdtA8EYkUpeGdG9aUDqQFPtXwU9n4WMnpm6c8HxkFJnFV6M7BStWGNwf6S",
  "key40": "58swn3BPTUa62DzfgPfBwqqi4ZXZNUW9c3ktovU7JeJoT5VEirc7N41HejR5UXJbHxw9zGEmEPcJRZu9vbcfzcih",
  "key41": "3bHSAJ2WfkPWLjtWgyogWnY5J1DxcUDuHPdTDeumUpcwMxuLSpeiKRHpYQ44uCPssN14mQfTG7zcSjFiUB81SnKd",
  "key42": "FYvq3wwTCfQfZQQaC14PYbdm9DZyFR6MkxM6dWwGRt6aX7EhN21YHMbHL6QgEnQ2R2CZHkaxhR4bzjysf3U9z2n",
  "key43": "59dwUm1E9e6eHREjTgnxqf4xWQdmNK19j6xHeNyhkhLRmYyvYj91tBk5Siq27mxPESGM7kgV13QDY2jSzgcbNwiR",
  "key44": "5CpMGyBWBMGMwtrMFHpi9XyKarTtefsRuP1ZfdLbaZdJhqNd2xtGrzFsZ8sgypoBRP7cJcHnGnz18NmEri5BS2VV",
  "key45": "4qzD7VViweWxqpKQqxV2Lx4HHEJU7MQRifadhiDZQ8iBi5LhXqGXxV73pkhpUx8VKyRtsPMCow4ff5hk9qzuJzQ4",
  "key46": "4QDBJ4kQ6idqjPrHB2gcCWxq6BGPpFjHwYQfKanBynPpm6euP4TVJaXZnWrrEs6A6Ditk8qTsWNZvNjN6hFEYKqh",
  "key47": "o2geWGQEsamPbqVDKMPv5qf7kn9fvjDdcfjbVACRaskLLpjzimTVDC9hRstz3SfzYMn6YiHrqo93k2cWLVSgFGB",
  "key48": "3DbTP34kf8A9SSrUs1fGaTg9A8zuXJsPKgSG4PiipqUc5vrzeKHPT9TrsvrPgGdfoBkbQ5GYCcmAUAzJ41sH8TyW"
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
