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
    "yVELCnt7sNcqGVCeXbF5vosnfS41m3vxWr9yrRo7fhDxqYYgRowKhAMdLZVSo5pX7QH7XnS8EbajvYGghkLTAJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJnHqWJqJMpRBEyr6jvb49rhPtHhhe1VNHkBPD45VtGM6ab7Vy997e4w9fHYNGamgMRSpNi8Mi1qDsbsWzhVkNd",
  "key1": "JmEqrtnuhoprLFUqwsmvmrGyh3YYjCyEiHxVwjYpQaYRbqXCNG9rHAEBYC98Spiwz5rDCQWUG3SbuPdpo4xr4HV",
  "key2": "5KLemTUAjToFXfaRbhHXbMgpoTJqLhumEc3sPPUabsr4oMQa8TSGYKAt3AXn3Mkw9bz9RQVLEvbXeWmUEi3hEQ8E",
  "key3": "2WUFQf7zZRJfHNyL5H97T89P8AusrAz6sjFiYDxxjLzKGE67qarYvbQ1p3zkJjaHSGpgQ7JKKupyQNphEFhaQzmH",
  "key4": "5f5DRjJY5RV7gWubNUqsNYZuDCMQaMs3zAG1Fb7VSQjCqcfA53x9oYcndrqymDA1gSCpjezctxx7dmAt2XCR9Tsu",
  "key5": "4igJnGCyAi8FarEXgMM83DGK4z7XSoStJYwsB11pQRVGHwsJJ3SecitWLUT36qhDVZAxvkrxRXbWTz8RRoTxqmzY",
  "key6": "3Uchz41AANoFz7YMLndDdS93oF6toWb6mohj8hWpwSYzGQD8ggVMuneTgW2Y8ATLgYgzsEUNXf8BeE7Q556xcxrN",
  "key7": "5rGZWxnZcG7DmfGMv8T1jadNZQDuw8KJxWqvqA8ihA5ZEJbQXkLaxKGKSKUCcSZN9vsyQnjHYakjzzL4vdFTsVrs",
  "key8": "2yAgCWs3Gb4kM7iZQW2yEBqZGrRSj7XFtFh7a5xfUH4cHGFaTwr6PzrnizuGynVS7y3AWRNtMNRRcnqcYu5KVvk",
  "key9": "zGezoz16hewMEXpuBCYUS23sbQ8RvoztrZXZ2ihkRNSctj7uHQWvpKHGm3e98YjssE1cbmHAUc2HYwZ5ax4qp1Z",
  "key10": "bFKraawDEXAALFD7p6K8FkbkbEpzxHUn35wddcFRYfM2xzCvrQDEg1JPRECbaBC4dw5hZw1iDezkxBpSEwnwJCH",
  "key11": "2K7mm6i1bV5nMiHF7thy8VNF4Giy7MGb57fs7mWRHAwyMDMjcF7dDxGp1tGXteZ83xXbHxEbgkJ1mxh14HRNDq91",
  "key12": "XUpamYVMZxBcSJ11Ke4ZAduSwiguWGzFU6sEzdDoNecdNfGrjYy7tXbiMn7HxyJnuH91UZ7hoKryEhTsXgJEhpz",
  "key13": "3zDcGyS9DcQZP5VqGTV9UpTSkMJSifqSVzzHH7W9gdzA8UGQ8HJvi2fv9h51F77iVaRyiB7C78nBxvsD69dYa4K5",
  "key14": "2sYLFizqiXX46U83kaFBm1e8ug3Pepb4Rg8k8H3cA1ZxLZpERpNemeJzVXdeYkGXsurus6aBwL9Ae7FMfcqCKpko",
  "key15": "3zEF4gib5ayahoG4wKcV2fWJM5rMCNhdkWKQRw9qtP94bTCPdiLJ4PpT3kdQx3cgFKd8DvQMWC1E7ttFrX5ngQxz",
  "key16": "43nuJwbkXNpM1si1gwSaGDgibp6C5izPqkqRF4sV4W8CtWvbJijTETKu6ju5QNehrQgxsyC9KPGnv4FBK22fq8Yz",
  "key17": "3MhPjPDWCXULjcY7jqkmne56mud9AFSuHBpZT7ZYv3xZo7fRFRZ4LVvBjbbPPmmNSd1Gzpgx6GsCPTcqLwEhWPmF",
  "key18": "3p4SmtWoeFERaknL1pi2cwg2u3AunoEJeJB61LSZUe8Mtror3x7NyMEzA4j42zt7iBEmPp7vGh7j2QPUGk8Hogaa",
  "key19": "2Ty3kWiCD1UPPGt5QFfv34naohHUb53uDVzn9bhfF5FmzRSGueNBUnTpxt8yC6pQMwsJ7bQ99JAWYxpprcRWddPz",
  "key20": "3MgFEfSjsqZbmXnK26jJ8Hima7gdnvepDpAiFTUHrsaeH1L1HAoJ3U2uzSKPDMumLSDb85BAXWyPp6W6ndmfSjym",
  "key21": "23Vb2ee8iqV5Y5YLMmGKaCmxHmEpu2xfgQV6sz4yNQaBcWviYFEePygoVGNhKioiBEtLfnZBfpP32GgBVSyBxdrn",
  "key22": "7qLsLTAM93tDn8YrJEboWLFM4HAqPjDvVhNjYZbPZnzbb7FxruwEeh8gVxtmLikBKv6xEkwXCsSA2B9fh1ZhE2A",
  "key23": "5HGSp5QZ3t8Yi9zeZrA7miB4SVRXLJkPZ6fR3EiTdg9B25JC7Bm3m48WpFVVRZPe5XTFa4tCgGrbwQhQaYTPizZU",
  "key24": "2QvUEKH6jvn4wfMvSHgBsL1pc44Bvx1riEE6ssH4eDhaZ2FzMBcLne36h3NX4uc3zh5PmmRSCqNWokMotqhWVPgm",
  "key25": "3e66jLg76nMjJN1X8ZWL31QH8SCrHXpij4nYGoHd8F1478Ds1fRbizT5YbmC4bMa7cA79rb1yXnX1o8tZQL7Ha2e",
  "key26": "H7HsBxfaAHmnk1bsLhPoWtJsnUAMMQtZgENjpvpdowXYPAmpwSVgUwCNjDx6tcqaKosj4D3B8rFUdFJysUvJqJt",
  "key27": "2aVTHxwaSFG9GntRwEJ9LyHSqtQ8hjyp9SA5DGvJ5AUfTzbrAt2pUWL3KKgB6NRBUw2Q5GaWX8TUtjduDBG1rYYD",
  "key28": "4GqBEKKRLVmt1fsVPcFTahQDVVUp4gqyNeGzvU8xZKUsbDTso1HCaGLzhB1eNP5jP8sFifCkVEibZGcJggxrbdWk",
  "key29": "4KDV4b4Qykk3FDm3Kz3PPC3kXNn4sq7Jq4HL47YTy1K1nwrPqc4ZMKk7MwuVBQFrm4PaHRJTqyvJjrtKNHnuvHpC",
  "key30": "2tbmzwkrtB3drmpfsMA7Mhj6VyG1wXsaqknjfxFBh5DdV8prHYBivMb6DNuJvBGMcMf3ms7jrwo7ZoiAcByDMcL2",
  "key31": "fJqVtFXPNVrUY2UGBzeF6C12ayqjGmw4BKGYko2xscMRf8tW85atx7AbrjuZD2pxMCtRmBJxg7u3HNVnDEspbZ1",
  "key32": "bWdEt4jHR2q8pLYWFupN3RLiL9hKC6Euj1vxFCUX7qwpcMQkW1rg1aDfGMNKFJTyBDXqEipS69TRqX6G5icuPfa",
  "key33": "34HT8UM1ntQ8HPSjzSSwMbvVe5D42vEUWMzQsmaaJy4daRty8DVvVS4oqUYDXEcBr7pm4emTSxpAPuAiziBbNCUK",
  "key34": "YVJqeNM74HigFeCR4b2tLJNqCEMTd3YDFSotN48E5dbA2eCnzLPBX75RkonzCmggb2r2xGSaKXkoE8iAREwn73n",
  "key35": "62wECXaSL3vjiBaGhaQFUf7XhsJ6EujB8Nw5SvDiGivahpWx9Q336yrWkcsNy3sfuMBaHWkK2YbKvdRxPBZ8Wdck",
  "key36": "4fzY55fvMGdqSH6pZJL5EQpCNZwVeWF47n7WzjhpALTsUx2UcksK64697M3b8pgGnEzf3qHws6o4PEgXGoRozLSx",
  "key37": "5LFrT56HidpG5NVGHNtHgYtdC5oSKjbCRUuxkNAdXFjDqA7kiaog4LuD1y4iQiQFo7eNXUcMpjzjQvSD3usNC45k",
  "key38": "2djbAiVN8Taz7KUBz2VXmTyuYnTEjmyQYsdbU89f6s15SzmNuLWL6h6xtrM2VCxwQ1Fdxdv3LwK6qW92JnLdKqBH",
  "key39": "5pupPQcKKUwfnWbPnQc6KYZ82tKvxbKXSeWRTUgiHzNPJydXr936rxx4HczkvmSFnkt3Dzx8iCsDdDnwAFxCCWQ5",
  "key40": "3z2MuDzC6112vNBnsGgqMMJrZrHVUbQBoyrBWit41TFxemiWqZgzZnaKU3FUp8tpxxwN2pxAcm3hrx9cNGKYr85W",
  "key41": "5WJ4NjJ96ps5CajiwGcGknyZfrhPMVBhun5pUjER191Z1i48m1fUhcbf1vnXH63QQa7h53GQLmU5xUNgQMXRZWZd",
  "key42": "EePFT9rhmkfVdzUYyEw5msY1DocueuAjX5e1NXZVDDQcCwySdTCdNjQTPdwrYUk8GJLk4dzAMZoT6CVB9hyzJvz",
  "key43": "2NjbxkG6uTL536PTmYpSZS3YfwBEwKyibrgLxKSrpUF4bfb9P6nF6thDkTqvaaSkBUq9Fr2SSv5heNz7SksJersq",
  "key44": "4cWaG9cWG2iS5qHHmXGB7Q3c69ZeR21cXKw5hdWtYviAhNpziCXM8iX2Zzd4fu5iC3wCsJVweHiAwyiFUkeAPmaK",
  "key45": "4sMQWVjHNPKEQrR3e5cgiGpiwvDAUk7PkNyEHnzKzyzTPqra1JwgeK5uz4U5U9qhXrJUXzzHoS38BBq7fGkLpUEd",
  "key46": "3QsmtM6gffzJjT7qjdJ7KhsuVb4RHotKcLoLmcCrjngERLz6DAFpDRbQmNKtwwTiPMZx9zEXSjv9nALdCCmSzTQB",
  "key47": "5QRJ4uZg3GjCyYkaRbsdTCB9PJtL8k1ACAuMbbDXx4cawwocfyjn5YnhWTduKkBPUYVMiqWmKNvCHrrGgSurU5jv"
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
