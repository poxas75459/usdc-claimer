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
    "4RwEExtL8K58AaBVz99rxCVu98dcCeB4LSK1Ukof3PtXoArwCebZfZrkE538Xoc7eGM7W2U1cpGeX4BNkSdKHJxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59LPkpnJH3794wL2mLH7mmPo1u1nPZJoDxg8NQ1raGJkZ7LCJkUYv9LN4uFzSEH5guDQVZADwoQiuA8b5PB59vZD",
  "key1": "2pWzgP7j6kW6XR5PWcnTBB3NSrfNha7mzsJGPnzkdShp7kC3UmbtvpdG85SmnHusBUXztWeXiDY9aW6jJJVU1kzg",
  "key2": "5inGgN7nswo8wbaPrKXabbiB2b1VMKRZqi2oqmzJnDYK37ydL2HTXivgDR51dqEosSJGpNT5kxd65SC7jqTwoXwv",
  "key3": "67hu7W7z6bizasqNNyo8Zj7886T5HZN8h15n8CHykszM3BrjBwgStYUY1jEe8yuvrSrJPSXUE2Dk4XYi5S1peSDx",
  "key4": "4sxzCWSRA7kQHdVm1kbjXvKJx9qRcLqn7eA32Lh2EA5AGPRNPd17tmMJjezWXJCnMC9G65nGyuS4UhLqXLUzXMH1",
  "key5": "2XFdokVR6sRTbz2NMHD5VWQTr6mzcZbfDVEHfceWJiP5UvsZapLcvvdFdxUB6zKFkxgn7iGdxExrKtbzGphsNtyF",
  "key6": "3PMXbFCT6Ptgtjbqh1xaFfq7JQnbdn2DYqAmnU1bhUJufUzKgEtgdJU37PLXrPcrbCVEjMZSWwHoHnUzi5wEAaR8",
  "key7": "1rffHHif44Egg59saPxRxcczT1sGcpFXWAgSwqmyfFtc7MRGxVc5M2xwVic6Qx64kFiMj4KU8XReWojATsSkmz9",
  "key8": "2nj3hvPL5iUFxGkeE3YPt8KrUkQ9HL9ntxMvgMoPPT6V4AVXNvAR8ndVt42kYbAFWBTgrTmrDRLE8CBhToufxRP4",
  "key9": "4BvjSSrKDXNGxB6r1Dtjv6xdHxSyPKC9fqPUiUAjqZkNHzgUDfh6dMx1rMtFZMfDwnLEDm4Gz94pwHW3dkmJ9KW1",
  "key10": "5FRCKgXSFfe25n8t9ZsCXSrH4M2bTmWHXq8RbxryviJaPoAtNUkQKAEh6N11fYvSaoWevn2BFqfXnt4UQ5TqfX6x",
  "key11": "34NvyS31FBVu9xRT69hij9GrWbb82KhGE3326Espp6GJp8aEn7weMQEAVC1VWJqFe82RqRdG6gX3Hu8m44axS7oY",
  "key12": "xy6N52UxKApVnPJ6CVqjscvaAXwg2r5YDWuz3hjHUzA1mmtKvY8CysGySj82Xz2sVv22ttM9TR9AMdJBr58euAB",
  "key13": "5yeRbSxfzxQkea3mxXHzU4ZAqWnj3Fx4XHAm8kuxVdM3toqyme3AHss2LSzk8h3h1K5RFJKzedHgqGGfdtKv6Ppn",
  "key14": "bT5FgMumVDFtuBSXBDM2uJsgTdHUwwRyjeurtynneKqtyacghZfkhDkQH8uaekWuUHzk7EWW3Sqc3d2DjJWJPCS",
  "key15": "38EKLAxPCLDfr8sjh4APR6TRpSxooJndYBudZSaWstKeJDMSsfZrRUqpT5UcrnTmjCp6MBaiQKevavfF9eLbrzyP",
  "key16": "UPNP64FgqRroSYH8bzVve8aNgHEhLAw2XorTm9cqJJUgVfgjgvwVQuAytnYTR4Efz2p5q7bTp36zj85iUtoUukm",
  "key17": "F4dCXMySWUjQWrwoCGeQUtfihJGJdW7mNoDwNkAnPCeLo1Szvc8JXMGv3yeAf8ZkqrGSzVph1QAnr7YsgDFttdJ",
  "key18": "jm76WwQiszRxpGpLN2gwq1egNq27gAqLuQdjLMcGsR1SP698nSK2TBD3iuF7PHQjBjTE7RXousgqxXN5d4xx2Fa",
  "key19": "5MPKi25zcq8Vddi8uBB3AbJPa8GC97WNU1emZ6tcTCJchgKNKDTqSfkrLwquRivCNqgtyCU9byeacLH6FnchR8dY",
  "key20": "4fmaDejaSD66rvQfFVVCjgHvh5bJMsJuEvAdu9Jbxgcu8mgPkZQh7iM8fLLWsBgssBckLPcci7u9xNeTvkrjvTYJ",
  "key21": "66SYYN7fBkLjtXKHB1XbGzCFRiX65RsRYLpp43XDCsoRPb8YvXAdPEvxXyAh82E9YWfLuafoEBBdkySUNEm7ru86",
  "key22": "41yEKD5tYZgThBTnBbn1aK6M6VArHqtYU9B38mZEqbctecDFPYxKEAq1UeCg1818q4pENS5jef7q2xetnFrjgt8n",
  "key23": "3YpLkh11xCCdvKsMRpQKyRC3oz82KEqnwD8j1tjzW45G2UPoyVBxEgHjAPRnJZEA2QYPghpJM8SdDvK6QkcQEyky",
  "key24": "4EXhseNhuekN83CSjFwF9XGB4K9bwYVTHXtY5kueFcYz5uJ2px1BhVcAqmtd5uLFMrMTBju6KBRbAgF3i1Vdey2k",
  "key25": "3bHinF4seJSdNNW8Y87vzRBFRs2nxqTYLpxkHgGNFEh1MDbgD4Ez26YpqE6B863QoV2VY9AjevLRsUjT1kcsMFRe",
  "key26": "pQGwUj7BAtxx6BJBTGzxg9YN2rrZsiRsdoFQUX8suTC3WfKRz4XDXrxWPX3cVAPzrU3u7qWRGmYpZN3Qhfi6rag",
  "key27": "vVJNVYvzKQoUqq6gC65uPvTk13q8CL1V5djGebbK9s1rdi3JaunbUoob17Xsmq6CQuiTVQSSVT1se6cwUY6gwxP",
  "key28": "63nrq3JfcwUeF5uhXtKQzRxsBR3DNjZxrPpLiNnYVQuFfvqTfgoUKb7dAsaYW7d2Bdg7bWr2CeDcLG2WyHXNutFv",
  "key29": "5CT1eMFpVSJyTTp5nida2BD2uUFe4fW4uz7tCcxLRcevgZr1NjCiCATp8KEFa4fWVbembtGsYWF7xK5szms8bVg4",
  "key30": "5w6UDL7h4yACLMH3eAgMhxgNHEaoUed3Te1rtFupiBZgk9b5hvWxJcs88yfForzDNhg1xfsT6Fo5U1w9pFSW6nFj",
  "key31": "3P5G1BRUp26LMamEHbeG9LSvy9tLVZcd3kQpocKE6rt84652ZyKRBSgqKWvvUiJtmh98qmrosUgL5Hn1zcXB18Pe",
  "key32": "5TCssQwtNum9cmkBn9PEkusF42fBAWVhVrMFDQ2YigExfC5BUvrEUN5mFJ3oJFyooQXSk2Gw9nZL6qMjr521pgU4",
  "key33": "YMmFPhMPb3npAMXWmg3UTq6cRo4YCC4qAtmCP3JSLcXUnxmrFogiNmT3gp6EjeXpeUPbnJc4Jd5vTqrgSmonsEr",
  "key34": "4NB8mocbeA8n2inydztRDam6zowTmkMsXH4fh9mFBi8MwEEpxfZE1GLnur3ZyqczSppity4Z3QuXFxTgpUqTBpuN",
  "key35": "wB3D7QQoSyppLqJGGe4HbpDEFXYK7pWvSu3b1Acpd9p6oHkdbivKqz7TwtzoUpiWAbaba1GF7nPHLCG8ktWjdpx",
  "key36": "5UWdtgY3TGcerdjKg7QYpRWExD1UGUobd4dwxaRqaaMQuAsjcCKD1kJ1AjjrjhkEsdNaBWc7Q8Nxpk9bNPzSVcw4",
  "key37": "4xwJNxHnJfgcttWdcCkpYCEAmwNZaXDKYo9Ebgmg4XJqRv6VHACPGmmEcSzkSBAxWMENrWcXkUsuDgpBxaQZ13YV",
  "key38": "3hN61gHL8Sj5L6QoARGF2E68GKoqFzSFUUAJDUHWM4AiMMrDWHW9JqsBn1JknoEtYf3eMoDLrBFJuiA9gcGzUPee",
  "key39": "5nj61De4Vqbtf6sDQLhYLv5AKW9EPg5S1cqKccguirEtWUB4HvvUR8ynSRKuEgwc5P8ByUizBWA2s6SXwXEcLTd6",
  "key40": "2mZ4ZQr1k4zADK4ByLf3ZaxQeykADXSTFehCUegwFtuSDfEDyrBFb4bXk9LRB5f9xyiq7PWng6TbQHvc7pPGVDYD",
  "key41": "5RucndUwcX8DvrfUB2TfXkVyPqEwZFVawy1DDXMxYuvkd1dkf9rVG9oS3D5n16Rju6HTLEiY81eC6xqHmk849jfs",
  "key42": "2L5wyWjGHMrLw72pPyv7CFZwSynMzbJdxnoX6Dy7omPc7V4H1scCTay8RWL6wrZFKr3zGdERoDPjndpdDxz4Ezdp",
  "key43": "vCY3f2VZjULkevKcJK4hzSEnnTUFiG7Emqo635KtXZVUiGdmyjFieBxksmz23W33szSXq7R9j5jZEoxYpsM2pMc",
  "key44": "2hirur6kFkbqSGTyLSnXrQBtEx1ChZNbHD2QtPtoFekahaiZjJjhCGtKD3aA9VMREqr4neZYhcVA5nXyFAYg1AJz",
  "key45": "2HhvpqG2SobuBUaXTWVijQ4PmoJQ6g3jvDSTCHo6ciHnVsy4EqJbYX7oC6BbpBinWqRcsNiEmC4W1HLABq3t7ZrZ",
  "key46": "33a5xRJ3aUELdceqb7Kv24pvTczbwY5ntmmDrY8TPmZnGPMnEDpNVBmmbtDVmtu1Bb5NAZbEearTqTocKTpSvbtY"
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
