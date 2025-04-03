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
    "28riRCRF58rEY3Tv1hjmCNKQ1SdaJSNeYWL3u9zz3vVidMErshyYJxPmvSS2wEPdvn7D19ss6buvFQaT4fTtAzQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z62gPW1nQ3UAkJDYoSBYnKNgCcCzZgAnGftgCUzWPRdrKEjbHZ8UyNPvwoJ76fe7xj8o32HP5PyhyTEuBvEuB9S",
  "key1": "JWjZdTcRdbt8aJXdw5LdNnbVgbSAUjt7vP4P95aFEjaqvFbu7qsvMgUAC7bRk8vNB5Rv2qtb1yFJzj1Z7t9X7kW",
  "key2": "tzLXTQ8Bif4LufhGR6jCkmGhWYdDujVDpEq17b5fFfaKP5snfkuhgPzicENzb7FwuNND3ibGKpgcCpA39zxv3JW",
  "key3": "3rHqQt8JMio1TFV2GWKNmuQC6F1zx8rwHGFwDPDu6GR2JBtmfQ8ZNJrM1bbuNG9pquMoR1eszqbkSWt6RhWygYpi",
  "key4": "5tUi2ZE1w7EHeNpZLXooDZWjcgqHR7ysHpJbh1g2n9MkphsZBx7bDnfQS6gNLYqW9ef5scU2Cy5scQu4ccnPHzdA",
  "key5": "5YTiUprs9ZTKrgVAmpj8kkmwimLUfhbNaQNek5JbnMWbm9dxPwgDPYbusxsM1k6KNPyQyyZDqJFTeNjtxZ4oQqFU",
  "key6": "649ie3gVK1A7m66tUvLNJFHFVBsxAJBiphMymfibKYAZiQyfAt1Ug49QBebv73HH5PpxSc6W7Nz2uLZQAnk8BgnC",
  "key7": "5aJqTmDHQrk65Z9D4RwGN6ukF7Vbk2pVMx2s1tJUN5quBTuR1uPLH8TbXfX7aurDhnMZnv2SygPHwS561vY55qzo",
  "key8": "64cmE3uNHW89cdyyicNepHFWHKrNTYFfqwhFSpgf6ov6QNNNbQF9e4CuJmF8AJYg6nJg49Fq2wArVV3QrJZMNXmY",
  "key9": "bWq8WD5oK92TAqr9HZzqsLqHt9BhTdR7Gfi19B9m9aaYWVajCMXCYc21TBcrqkSTSVMAfhQHDwtD6xYBxpZDMWB",
  "key10": "cALGfwGkCd43EZvZVri27PMgihsnMdPS2YiHAX9U6gxAoNxC1q1azLTS6wZm7gSpDLT8urahBzZHyQYd6oi8Q1E",
  "key11": "245aF2piKuuk3Jswi1v3EvqesN4EMCHWusDLL9a4rmj9xn7coZ23XpceQyPeYorA5HwxZaNVevZ1sb2h8mCDXPUz",
  "key12": "23QbG62NEAXo8ybYgzLXFqndJVsmFRDvjPVb5uK9VhaFa5EQnfeJUK6YxDPqmL94jfmv6wGs88FBEKQQdSVAAXG3",
  "key13": "2zttoqBtyWpTASX6owcY6hm1QMzaFDYQ99fW8RWMRYC3ULdjSXHkzojj3ym7sSMVfMTUfoF2p47wYwPzPwp7Afx9",
  "key14": "2caRiF2WKtBVEadkHMfpS5qvbub7KpiR77NFrCXFVxchkvqKv919gkcVdBXUaFAsm9my7tvooCuYZ5yV2mmw3yCP",
  "key15": "wxgcf2Q9LSadEBVWihGMqfoiVrVZETNvyaEru9Y9cznb1EqpcuTKHcLYPnaSCXQswesCsHUdWsD6WnwQrRgGz3a",
  "key16": "26mzgk1PvGnMZXaQdbgLKryBg2EPpH4P4sjJkeEKV3fLp3HLMaJHB8eG6QcW3ZaYKCYe9QyEg4ERDvgzKQQeEqL1",
  "key17": "38H9qCJbRgDuwHKdGC53Y7YSAtUY7hPy41ZXXjaSbhxcoAvQcVSyxXAtcrbcJnp4aqhHMJJj3gwZfXPcCYwAUczq",
  "key18": "3grF3NBxVuXPSEmsF8F6yXqwRVxxPabdEs7ectcFAfM7s13xD3pABcpiqVS26HrFen8GwHBAtZaWr2E9JpcoA93q",
  "key19": "2y7diW5vx6cY8NhNhzPYdFhWRjkDRbGahHoNWgZmh3chLGMXSqbFV4siqraEDE9NhaFLbMCJwGkffaV9gKLV33Re",
  "key20": "8oXmBm9zaPdEdfkWZsE2zmJpS4Wuvr7maJTmwMTQXuJ8H7HcvscM4qcwAc28vtP2yVgc2eg8wwhJk8Eg2pnZusk",
  "key21": "2WrB2i6CQbDQ3NQXzabzCG2EApkHb7AXiTsMa3MzGqVYvrz2u5N5qzqebbz4MLmV16vq4gBt6uBN61MVBR7APqgi",
  "key22": "25wjmBzKu1YrCgR9Y15FTvFiFq9GxYEopQifAgxebetVZ1SPcHpnWXWDKghWFzVbSfsgQK2WXLhjsGYDNvQbNEYs",
  "key23": "2vsHenEQgWtvboEaVLWUjoPMut9G1KMhMJFoRD7EnjmdGh218b4uukTB8PJXYEEaM9xzukzzYVkgeuB4weJacWd9",
  "key24": "3CQpB91UddQCFEgAWoQ1u4kSDLU6NkGtxzUXTvJ486L9LWDD5iYhmqefAgzmf13typkUoE9d9voZxNDRu7tq9yuK",
  "key25": "TRGRNTtfPytdCXSun5he8QM9CrNmzjhNvTmduCtu1sVduNK9Rto2HGxKhsYq9y2yn5gTXy3WM6h4JBD3MDvJiSh",
  "key26": "382JjRy5DVN7jwVH6kS47Lcc6YWDRZ6hCBW34xZdQmqEnhjiVTNFf1D2Dv6gFE2zU9x3f5B1qBzusmDMLFvHuFtm",
  "key27": "2ch3p4MmkKfZwwZZTafMzqEPvN24PDSJyKW3mMiBv7Latnuqm3LJ7nXXN58r36JNREWZMcpJwC2UPzSDAbpuqBhm",
  "key28": "4SUGLSvmsphuo1W6NaAQtXH4Y1aRs5DRzTYWJZ95Gbi9gK1QxiV2UV7hfUu7kffifkFcJgthiepxXt1NH5vLNcrK",
  "key29": "Kb2EF317WtxZ1Qp2PBUoNwYKRt9XafCyGgGE55Kxk4Ls3Sp2WcawyFjg7G4Do9QJN99onqyx6GnBMa4jYWVEwNc",
  "key30": "2c55fa1YMmapZXP5fg5HPeRaASayTESvaPJo3YXkib8HYzYHCeXdpMtYHdf6DRtUWnConyug85243ewim4DTt2FH"
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
