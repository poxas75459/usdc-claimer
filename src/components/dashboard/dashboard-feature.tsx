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
    "382xwa4dmbRExc3yjauYgMpFo6psPZ3TFFcwktRcFCWuZUUroy8JacRs42uryWgsDVeDWvMXpQFSe1b42WftVZYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PAEsBpsDUoTDNk1pTFS6a2js5pQY8EYNiYQCC5TYYazCoqQgFH22LKj8HKL5bPofak5Xo5m7jLqKeQbmoNJcy8C",
  "key1": "pTNPoibESGMxoPmbScS8jiHgSqhnoZQio6S7fKZT9iKiGj3RzmyNc3srkDe47xaanfW8SPKWmutp762MivH9PVD",
  "key2": "4WyCwBc7g2nLKE4wkpPzALGoF3DWPfSAUPgLH9V36ovkhj8FwTHw4poRwwzDyuTKZHTd7BgiiNN5bpoJWVAgY8KN",
  "key3": "46KjbnRnJ4H6cbvfdKxs2685JSocg3yRez9mruVYrrvujNqQG97oZSmT4vheDe1mESVSgnP8KnTLq3QufXh1Vxti",
  "key4": "48pUUy2W4sDRkaqkRNoDWm5chAjDGpXGRBqjTLvX9nytQr3vA1ZPc9bF4a8XhsNW1EDk7mPxjDJt5SUEoyvwu7zd",
  "key5": "4xGez84yEce7FrSWxJ2ajY8wXSq9vyCd8w9toiRqWoG97KSfftA7wHLKfP3WpeM2kdc9XfuX61E2DUiUpjp7WeLt",
  "key6": "3xrsb2H4Mtagi1G9GkwezjeRrM1DbVMY1uEPUyZd1CMS3SUdNLF6yxD9W9Lwx62pqMCpEdS8CQTgt749dPXuuHxA",
  "key7": "3K8d6A3FRntUYV11udBS4R8syurmueHHcNRBdiZMpNm6QpMAqx5cMdmfvw5Q7HWfxZQ8yzQsucY9goZVhhz9iEiB",
  "key8": "y4AY6wV5YUCdrCezgpumYsCVdu9m4x3aDAeC8CLQAjXkTMWcx7FCdr7XzTQXp5ntNkvVCAfbnSRfwPcajfsmzeG",
  "key9": "3fKofAs2DS6EthtpVsgJWW3cac6WVNSD7gJ1pi5d3maSz7u1BY4hcdaRTpWWa8P7CyC12iBJnoL9m2qZfaAYC2uX",
  "key10": "chyDro3q5BRroRPU6XLqzfpfhxVPFUWi2JzPidhFh7XZWmnLmyNo7DWhhBAJm5zJ5FhkKtU3f2RfQvgdj5tdq6T",
  "key11": "3EQghA94X6r6jorBbZyuJzZwcg8r4WoBQakNwYfjkR4Vo2tm2eXqh4NmaL6C2HUXgxUhrubyY8W3Mi93g8cfPQdr",
  "key12": "4QRqfLEVD9QULLFDJ3gHbuSHUy7qqEK5dNcyd8x5yUDJ6dkdAyXKpZzuPbFydfF37umMg3aH3P6D9KsuNW8F9T39",
  "key13": "4h8uyZK4E64dDBF7LdvwcjJf6HohJf8iBdVKtDiPUYzfDdbEXnsAbx1E8sZpB12jxHPECrWxYcYQ1D3Kof94WrSr",
  "key14": "2hdQFURA8tBsxyCHTvk4FWzB8ScuTuhXieCWtBfumHwwX7tDXmPF8pvgXyqjifxKPqtHGc245y5ZMxrnoHqHk7DU",
  "key15": "2C9F1VUJuWsBHiW1nR2od4aJWEtF8xduLSt4vKkd5HLQZRFMM1eM3gHBZnfoeknZorHyUwFMY1YwbYVGGo6GhwHG",
  "key16": "2qBZ8eDeFfDdELPbb3LTae3rha6z3QRXPuxWbddbrPY7W5JcsQTKnoAtpoxxCJRfV42S5Pp63jAqnR64m1TK5Aqw",
  "key17": "3fpuQfmK2GuQYsoAmMNYmyeL23hpguqKVjX5tYJ6zWw6X3HsktG6hF5ScbZEGMT8JUaHrkD1gW7pcsbTMhZN9JSe",
  "key18": "3pNdToZv3qS5R3DuwMezsk9RYF9RJ3HLsrUod29foDL1TnDtLajunTLexMnYAo1VWZYDNyKWXkVmagUYjuHm5HQ3",
  "key19": "3fUfc3iMFmB2Aovqbp92JEhAhkK2E9BE7sK32pEowURV3T6UnwvdyczBJUtqWqaFtuHf9GZ1AaTii6mDWd1jRpcS",
  "key20": "5h9dC3q7u13BR7GCLtN7mSWV4BszUJCyef2MhARsPgjA4DcKYq4GmWU2AhMRhXshFMXvC1gc2ib84yT4UPZPnsE4",
  "key21": "2BJB8vt51KGHH4hbxCWSEMSjRUFbGkkVBPvFXrcTM3LD5TCuJrGNYQ8TWHq2FWgCJqiLJFxKRSb16Kntno5iCukZ",
  "key22": "58wXdxxKFLDJYk2BfVgREPyZ8Kmym8E95HMcwBMSkgANxZ4tR2svE8GKfYYWAMAQLwrc1fPALjvNYUMtffBAZ3Xz",
  "key23": "3i6fBu3SdWgQtP3DZKfdvwJT6ff7d3v9Q2ndEbiHGDf5d2oWdUqS7R75aAgYokrX1Kcg2xcxYfw2ZKuiEEgRYu1T",
  "key24": "64kA367ELuXWTweah74pR9MQYMSa1TU1o2MiQQCvVYRPA4jPfpQSBk9hEm46GgXsm7tqKciJUPcHV3rw3erKx4L6",
  "key25": "2YFsjB38RZKTSTX9pX75gpWUrnwFjtqmAueCsEPxj9W9qsBZ5iiqkC6Ax4YX3iyFSB4oXsEJGwq3M1kXBc81yR6j",
  "key26": "4q92LxXtFf49Ttuyicn3wNMExZjK3oahXHhNw4GWHEf3BAWmH6vxbiMcuTvQjpZfb78fhoD76z5aE9EaESbgE9CC",
  "key27": "5eqUvWCiBoy9HrSg7phHpLXGQuAVnnr1VbUxUx1MtqoXPCS7EGP5XdtakBgMcdmLFeYmTSCLPujbWkAUBzjdqASP",
  "key28": "3s9hTHAZ1nUFcqTAHyp9Hb5T81H5CsFx5XNJjgpkfXtz2gGgSYaULVy5fEMrCNHG9Ny7NRkbmSyiDDTBoW2p7b4z",
  "key29": "563ssxx8wGJDEXfrra9zwxiBP9CXGRmL7i6yHpTXbPAnj8mjcJTUGB8hBaLUySxM9sELsVqvkRXJG37LxsXNPKEB",
  "key30": "5TpnRKqxnsJ5wrxbin4bBqhuE8QM1cFUgfGETtpmYU9fxj7btdUDyFtCc8cNYmpJrN8DXjK6sJcD67r2pYdAVefm",
  "key31": "4hoacLNhXBWE7PEfTpbYBvQYK7oCdDFVcG5e3YC55HqRwJNDjfkbgvyCKvGXfDWP8P5NAcujufS8KdkgFaTDLYD6",
  "key32": "3JEFaSJDytMcBB49YoCX93YxDbL1UQg1pikrMfvxx3uNVRjGSVM9dJZryqjt9AQBuBcX9R5bqgPqCBHY5HSVwiVH",
  "key33": "e3e4uzg8egqXGH5f75c24zDJbrHKovbhcr9QT4wh7MdkPpcccbdWJpCMUywzoBJJEFAutCpsMdvcssW9kUycWwL",
  "key34": "5j1CynMQP9YDvJL5PnYZ9pWMXuWh8AWfnnF5qapv3XidgvnfYRjcLnZiH2PtqPMdDmHANZt7wtZ2TePAkrCQ7jNM",
  "key35": "3e3XEPAi6UmjgihTkWYKhg3qe1iV9kBnxNKSfEJgDtCyVCzga42unmTRvPBTb1kUxto4JGsCmubBrJeMTDoqoeXa",
  "key36": "4QGsU5qxRBBWuw3bT63Mf9jSvBNnV9L4f8B8daWM3BMhnbT7LWD5kcqJYU3DnULokLdev7hep6vg96B4TCTxizV5",
  "key37": "5Uv3JxvdAtk1baQTCPYFRwWTVmc7FAREr6ViQQDg3Adoq91par91a9jCZCBmXEFqcmqRoqip43kx2RBBV2gzbYBi",
  "key38": "5Qp5BZM1FKoNA5UzpGMu9kYtsGLsYGpJ8Ng2DJfLffVYyzeNvzp5V2YUMQd2mpo1PkCmiCoYuPiGn6qXfv6na6Yd",
  "key39": "XQU3wA35MJ9UHnqqQ6Pez6uk3Y2JnREYcp6fz4ma6jGUj116CcvsyTCnEC6TCty2565HK2K3pfvmBgAL3KMBUPT",
  "key40": "Mde8c7GK8xpRt3fQLk5VYWdioDCLDqqp5FNjccjJ7hgLw9MmWD7qRrKrbs4v3jer879xNKaYuDFPXS4fx2mszDJ"
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
