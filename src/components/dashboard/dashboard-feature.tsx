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
    "3Qf6Tde1jpbgnkYg2UxCEid97LV4AhJGH6Pi8PZLfXPTnfhejuCT559bXMa5cvEgxp5JJz7DAK5T6puZ1pujJMCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49P9sZBDGJWpziWoKq4i8h3W7RUf8r9YWV2sQzBnZcwceakYZMgKyu2zKVE3aJ5ZyKqidSPkcoyx4MiDxceh5fXH",
  "key1": "5xRmC6bRtuTo4sBjxNf8mDBPnxPRAGYHQAfQ4TjXZQFH258hk4oW3hVVffirFcBB8Wd8cBpNZtFZUmD8sp82SG2n",
  "key2": "45TQhSUBLX4wgrAYnFVy8bUJfKUJEwVoARNEEDdCs6YX1tmFEoyAQD8ySpx8YcTaCmvpnpEZiCe1wN6MAVQMoSnV",
  "key3": "3KxacuaBKsb619sShYXr2VF4vfJdsSSCEVfMPnBSs9jsUAQCdGDFoZkuyxevWMw2oaq76JRQzBw9mkE3DskJG1Cv",
  "key4": "3a8Q2JisQPKWSsTKzjcNYGz4QWXDo49xUKPLgHw6e9Cd7gxwpQ67CxHoXjXBVqQcQ7M3VaU8zQmgc2DhvAYq6gcg",
  "key5": "2LjXvL9UC5n9LxEYnN9cgT7vfPbwVFufobSfaiD5rGVgo8TF9u3VrKMLips9WNrbhcJH8s6BCeqQ4HQTkhV5bQ45",
  "key6": "titRxLb8aWd5AfreNTEPY2zYqCDFmmEJDySfKPpofZfgJzRcP5SRKZqhqYbmLj37zZ719uCgGhdXbLrg2uAUZxC",
  "key7": "3HXGXrtLfQRCc7uiEFXiP1tpTtZRz37XCfq6hgrQZLgh7i46hnvHtsRjJrVL9F7hWUApafUFv9aV7oXiW4nbW3fU",
  "key8": "46kghrECBkKAUtbq5TW76NyE9LHZFQTrYuF5QvFMc6TC8SCLAqMSn8tTLvLkPrDeyAKPxa7doayWHjw8X7apEAZk",
  "key9": "55GjPv4ErPdGgqzMtKEUGsAJJdYPLd5HyBedBkrdSNDpiF11FRKZXePj3PPEfJbMGfyyLtnfVFAVMKQ9M4ibJgsM",
  "key10": "4E9TAmNsNMmkGSReruT25YSkGVqcpTQbZturSfqCQpokB5FvL1qY1GgejnNHHY5AX2BZcePoePWNuXEKLYmrWVjA",
  "key11": "4SMNuKUS9DYKmcnMxRDbepvMu95KWJTbzxMEDyaGHfTMMEDKCqwxKsXGtnwYvQZFHnnqB1tLW2e865zVrqpRJMqF",
  "key12": "4xGzBzyDxDBEWFsw5LDPKPosGKjwy2iNK91G9pdYRAykDQoazeUWoDWTaeAMRkFpMU7EG44CY65xq6tVm1Gma7M8",
  "key13": "3hNLodRDjgixJ9SYtpC31oSYg62tsEnZagayhfUpZHQZWy5kDWaWMez1ghcQAMsM2WR4Nv4mSKjDwtorCcKoVA3k",
  "key14": "3QfpuQ54ymJ53Baa5mVkJYpvs7wRiCsKuViKQnoHZB28ZsRkWn9KSKobfR2riqTVYMyhRcU6Zt9iSgQX2xwrjPcX",
  "key15": "5XeGREr9qssDFSDBKkzvNKFfVGnc7tDVuEXLqDjssqpLNhmd7xtTSwyux4BPXTaJzfQLn3ruW7dE3kixZFawNxkL",
  "key16": "3qEbM1sCYQVMCVpu7Yh34K939UqqezYyZ9wcXqMT4FAmqBV7ShGRwPk8rFiZVija3LX8WiVRxTYxtguYxLrQ3YSk",
  "key17": "3xAbfj2Mez3dJJf8MJ1u2KUuBsyWUKYwGNekK5MzER7sPN21taekJnVKUsNFxFd7DtdUoMGVw8ebNAiL2ognZJp7",
  "key18": "3zst2kKNRUMU4Y1J9WpyVCfy4BxiWDSVE1yXAi1ozzqeeYMdAyGmm8CS7QPKMah9mndG4Hu6AXUJfmKKbhnfwRnS",
  "key19": "2XnjHbb7ErUjVDufgHXaqQnpswVS4VQaN36dHYynQVx4b4Hpdw6WtS4SvgweG5DwugbMMpSq6K4Q1cKAHDvLLcXj",
  "key20": "392V7fycRa6vWfeYsFDSW15cMsrNRinLN8TBBpCY5E7hSt6XDU5iA59ERMdRqf6s2u4ic1yLr8S9vKb99pRt2oj9",
  "key21": "2nfdkyLVKLL6QEk4yYMUccXg25nA5H6gpmLX8sHXLsWyYS9BPaWF2tRywsHmiLNANejMS61BrfkyytjhcizXS1EC",
  "key22": "GGCUecorcvySryHkLna5qjRd8mMkS4Zn9g6HZVLztURa6cJvCmY4K9TDahUhN9P3VftifZ2raHmitPxsKfrXrZ5",
  "key23": "4DDrthdkxmWAEM6pm5GoT5KGW6pihQw2A9mENU4kEJPqzRM2bsM4FbCtTAEYJ2z5pCgWSnyo8e4cSfNkiyTcv6tS",
  "key24": "4stmxwfaKwWsQfGTdHuYktAkv32XttYXYwzUFETCkzYq6sYHked1QwUYZcACLoy6bz3v1QkNUw2jPxMPcnSWx2iS",
  "key25": "2Tgj1QHtuRYNsHDWwW9kaVHoffLwDEdKkaJ7Nvtoc5nRp1wsRnNbCJ4XvUvnrMzX5uMgkKcCvn7VAnfEZUXNfNqC",
  "key26": "5gzKYe5ynZvctHF1AJtbXe6LAshxzNzbmVV8U7qArmpu8oLU32aeWVZcj9CGNVToW6SG1UhYV8bKe4hrCQRTJ3v5",
  "key27": "2VqQk71tAqQHBAvEK1RJ8Yw1DzqikE51r873bfHUpb7RscsPYK7UFv2JP34Fg2VdHrdCBXfUXj4KpMj7znLXouDv",
  "key28": "2SYYJ57sedbf118tsA5CzUoiWqLESqNm1AXBJ83cToHGNhD1iUdjgEHJcZMqhcENwvXCdoY2eM3WoTaAfijs4CQt",
  "key29": "nvGuBR2WaEPqeGqyJyvdfwKert11JJVdsrrBX18ADdrHbaMFm2HLCoA2EDqRExJxkvZ96ucD8t8cY689Jvfv2Hm",
  "key30": "5RijhqBdtdQagrGtWvAK3G1SWLFYUdmJH6PyEcQ53QnnmhbHx15xCNSZi8swueiidTwse6RC7rxvn5WuZKUYVqa5",
  "key31": "4qEAKtDGD8h7KFB6ZvbChgiaF5CoGV88r1L11XwiUa2JndkpmQKgB2j64b7DLRKxoTc1XtpwUY7Yb68tkMifqyxc",
  "key32": "3AuEYQtgiZXz5VpuzXCgQCNG3dr4fkXhXe493KmgdCUSter8hN47uxwn4ajc2WbLPqYPyQYMpuFj4Nz3JT7qNqdk",
  "key33": "5oZMfPUh4kz36pd8nM69S7eR8zxUsEzgg5Vyt5gJbMfPQZEb5uAL1aFVSfDumVgcd37KxsMohJkjH3dtSYa3rZpG",
  "key34": "4y4vfNa1YXq7EocRYuWXLFvHa9KRkgr7BAun5ayjkbjjSsPjTMc641GuqCmPEtqkqATendfzHh3FnVz2eJErDxzP",
  "key35": "aDPuw6d2Nif2UiCT6axuVXLMYtbr9mQzDA83jyER1YN1mGmXqha6ehMH3Pk89bYyBdrdNpWNBMgz3Rg4a9z6bve",
  "key36": "mSv6HhyvsaqwPSp1vvZCSyrZKbqHz2qiBbTRPeWv6H7z3R7STJcpYEjGG94d2dXxudW8X4FJbR3zbDQXQzSejNf",
  "key37": "2FsRWZoSteb9L4PmHesQ6Xqvpdfhy3GHVZrXkhkx2BCuLmx9GiHNVaaKcUgA4dUjvD7zNiCE2GpEJ4KDPPvUJh28",
  "key38": "344Vbdvn56SRFUyCK5AArgE3pbksNrQ2eKvY8mq3L4SJbbYKJEjd1Kk7hfGExZ8JfM3kkp6Mpgrc5zyN2kmw6DaK",
  "key39": "76HyctM5VdKPR2xdzadqq1QhJ9LYuCWceg7hjqPceTGRg62rHt4Hz72PUKaiyUuuz3H6oNPLYXoqZWXPXspeKK8",
  "key40": "4FECh4DsS1FxUrJFFvBoGG8is4zVTymxEVhWAcnZJvkExWgD8cv8dcZ3iWYTuBc33kc3YxoPY9JFag5GEeewUmQB",
  "key41": "2hvJmfBcJ2JaxNSyPupCjQq6Bm5ShLoAKdZfuCjvZRcKHeyYpnLtzNbEapYNPqbLf97wwCZVLikverKyrLRHQ5cG",
  "key42": "5PedWe9H4rJPLpEFuTZF4GQ2JDmtzXLYz77qGr72uMtUFaBxZ3g1i8QoSBB6bXeenNmrxsVNd7NLPS8MmpeBE1oA",
  "key43": "fQ749dNZZF94KYxkQwe3q9QmHVkDEQueHfnKN8GpfYHw1ZzQnNo1ZEAPYxScmQomov1oQSVePSanS2e2q2nELGJ",
  "key44": "wWoyT2rR2vgZX1fcwqLrqBaSdfLBN4rm3Mc7q38FDL1CDJsikdG77tsWRB6Cajyy5BEhNgHzjhy9kJzopUoaE8U",
  "key45": "3FCEg2XMABUUoVbUgWCMwuaLKYrSL3mxz2duChWs5sMyyV7zQLMhNDDAh38xcxf1MyXdxGs6EsMcMHRbddkCnhRc"
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
