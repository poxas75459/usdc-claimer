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
    "5NVVeqU4a2SY9gwk3vdfTMpYbWJtcN9nyh3Ca7eaPh98qFwWwrRC8tVbwADMuGWr2eZsTXmii83yksec64MRjc5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2E8txbohEBpRof8RLV5scs4hzZvjeyHdFuRLV6zhMbaegKrwrxAnVNy5cuRExGorRcM899SZmr4bZwpLpXvush",
  "key1": "u1y3GVxzzggoRSDuQDS59cefs8t65H9aq7QpGQa2woQtTUQDfLLpmu3q3hHUYhgmJPtcBRJ6EicgE8dg9oAiQG3",
  "key2": "3cWgrTmbzFPAoyRvCjWZyBceDHoPDofAEhM8NdFJNiwRW613JraphdXJZJtu3pwZCFefB3Yq174TBiD7o8xgdvx7",
  "key3": "2UBGB3P75kKYs21VCw6dfBNgXY5BrfwwNUQkVeFopH8EjBddRcZRdYxYHy6MvaymaezBrsMEb5uzm2xDnPMRUXDU",
  "key4": "28eojiiG7NTWimsTLRocCxxcAhW932svdv27H8813RVPP94BRbseTBiML1e3L3byg1XaMX5pc6VsxcahnLBE3jPT",
  "key5": "3xdkP841QmoyQQ8G3se2PLcvq8DgtyUWXeLBMqtwP4e4sHDxNvmibgNPGhPiTYXNntdgSwQqrsJq4wFu8iPSbyJa",
  "key6": "737vx1Roi9SSyCfsvTmAaskdhxvkAmTJ3Kbwki2vjpVKgjTp5JmJPSyqTtXJ7nkqffLW4C8Y1ucaoN3U5sGN1L1",
  "key7": "Q2GETEAqDjHVNQ3NeMpEYbnFeuqh3YjfYFteffVZRiwXwoZf5EzkmsBCbCBBeWZmdwKUjiAHcnWiNBnVPFGTqvs",
  "key8": "689GY73jbkuKjQmndNbKoLNuBxd14zhkgbjd7UpdEByXPb2i6vXG7oL1LnW1RmGAzzuQCte517e9y8ULMJEpvQc",
  "key9": "2fpCnCNjpNCdkU1oJo5QfyMGmJxDxLxYNN2ftFzUj32gLjRG1JHP1NFy8rpJKg3We87JzJmUBuUuTeV7nTRaypod",
  "key10": "41AubWgYcbTDnfZzkzhscJ4zmDWRZEknmv57Lb6W34ffvr3mxJfoxACKWxS74pG2x3w1PGRyZoMuNd15MUvm2qes",
  "key11": "4dBgfcKnFKXvxikZkNTGkV2pP2uU2Vzq6pU5gephtp4QHGg6EVsN5WR4HXcRpzVFMjpZae2F3nuCyjLPCsn5QsNa",
  "key12": "51yVb8zbu7Nfv9zd2PChTuAdVWNHqZy6Nm3UUwUfUc6KsuuYsKSJRChphLGTavA1En2TdE3nwSgDn7M5RoPRYgcB",
  "key13": "3XxxRTBihzoPxN2Wf3Qtt5CERoncTk9VvPDtqvez9sFPpM59Mbs2sdmiaKUXR9awEgbpPWkthqbsF6xNo5EWMCzK",
  "key14": "2gCqvZENzP8USee6DCqgbEUpwXBCcZMFDJ9yTy9y6kpZme3Q24HjPV7GXdS7fJ3USh9owfchnJQ5qumTRPnJu5a4",
  "key15": "4ti9zmHzBHzjwnghzUYChNkGF9M1JEtKWXnnpxaRAJ6pPAcLdmw2St1XnFZXGs2hZeenK8UPtzcn2SvyJbcpqbR7",
  "key16": "QEtAmUaVn4Yh3FjQEfGQ7Ut2cNgxn7e56w5aefeDNdYkeKSFEeaB2UGLth37HfayyDv1MrBYg2MtWGaCkVCkx7o",
  "key17": "4d8W1x6cHSCT9hSU6xwR9YggV7sUWMXzf7YjA5SrhbKViVeFnFS46oXF8S1n8s2U2auiRrti15D61z7h11svsuFw",
  "key18": "4bpSSEH73ikGB1b38uRZvL14bwBXRV8Htcyax8LGgkaGzncFGtGosZp5H9axuH3ccrsGH4g9pi6UvCjSUABjPxR7",
  "key19": "25qqqR731UB29JKsqLbawQWbZUtVamg6BmRULB86KWG5ku5QnwV1wkUa8dfWZGnoFBof7s3GsYjdG7BmJtdtazhh",
  "key20": "M6K3ZNnLDtGGcUgJxs151E2AYJqMmyqaT7x4wqK751fHEHCvv2TD52N1n1QdfHgcRZf8zXMdPyRPEKF9xtvpLeW",
  "key21": "4cSh5WMn5L1vYqbBPdC9Fhws6dWcWivaGJq5pjHqUgPALPd4Kb5ZkriqFL7kSMixiP5N45BshGZaHdE6jn4KZ7zm",
  "key22": "2RPyXVKF62cFvVeAEUxKYxAyuDP6C3NHB7Ejk4vsmYA2TnUmjQvmLxSrMJvvgFfBpGkLBnvnKnx3t5gTV1EapfPC",
  "key23": "5kKktfCJaQounb2ddRsJLWoEU1C6qUkDKSr3JsDiKFktX3tFcs1q4AFYV1ee4KiA3sCNWGeFdNbPTR4kR9gJhpwW",
  "key24": "6ABWRap6ynMQrLxdz7jXwsVWMMhRzNtSUNWqwUbcEFYP3s3FkHXyWs4KxBDceXKZo7cXvGJVL1KpGgd9twM6UnB",
  "key25": "372dCLbNhyThTDN3eqwieuxJHhz7P8bDs2uG2ksEozZX3czv2Sv6t7jA7muGtTQaGzHRoGSYiyppohJqo5BQaXqJ",
  "key26": "37Yvhryf27RRbsfBJApZoW8LG7nHESDqSUJ2E6MgLKkzFksCvdVRcQRYGuT1v5cHVpBnK5B8vowBAt7ZC8zTb8uq",
  "key27": "gBVsQ8a44zMmEYHFuFy6sAf5J5FMGDKqarNNrVfPcRVkWV44nct8SSNwZHpDR4pJeiF7oftvhWUuCXepVd71DV1"
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
