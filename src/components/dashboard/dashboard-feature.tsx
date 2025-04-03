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
    "pxPChPbjEWqB6uMXdBwoGDqK8WDXdYAQMKn7Mh5CckPnWcowD1Pm3BJiGH7KuVjEkXagna4v6fnhBzHXAAk4puU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Lp55LetVWBjH7SMR6F36JJ8WPX1Lt1FYggAMacTyk72qD8uVxHDzJxhcHbntgshxjRJwk3CBEP2niMNXmyv638",
  "key1": "31WMbidGnJDLzE7kASLPbRfaPXD1AkboGdPudPnbBwQLRMuSpPiS785mxygtda1aWHURDwNoueqMwJJEoFDfphhH",
  "key2": "3FTkXGGnj4jSiRQE41XF3q1uPCgUFZTW42DAAgQXtEQx9J3RoeuNG7PJYjg2GE5cpMuBoeUts6oqV35XkYp7oB2Z",
  "key3": "2eL8Eop1TVrXF4mMRdtJBH8LUczij4epnXwgVmg5ZSS55hF3JwrVTVvFMZcJrxPyfDm4Tx3tqxEZv51kgdTaDXEV",
  "key4": "3shDKdQ7QEqjUBtVhqD5KhKs1z8HzA5MRMsroUUpJBZFwv4yEjoPu7H3mqBZz15zeVjRp79DAg7PQzGficvwH1yC",
  "key5": "5bwwszhkMHjC4y3RAayxA1S3buL9bGHmb57DdBrq2ZYqoTaydsWN2JpX1YQyRfpD8YCWKwnYuNg8FyTZt8dMENeH",
  "key6": "4AA8f67oTtt49n7njSvF2uAi4jYpe1A36WW2XwFESoLxjri7q82LftBYmGEcwvAJqAEjiY2MdH9mdwZERdSGWqCt",
  "key7": "3jgoQ3hFkVURbvk6Mfi9chRL6dqLsnfY5vcMnLCLKMsHPmTiBg6qFdGQiScX1UyieeXvxMh9YdtiKiduVC2zUvg2",
  "key8": "44LqkWSK9SwAjxiG8NuLEmBskXteJNVisJvFcFFeejEzjTcXmdz9J92FbdEVXKYLDoTUZmeM7Rd9pQv9SoDffAHy",
  "key9": "42Q42j6u98AX93oXH3D6Sx3Xs7benpnFekfG63fo8hCk1uaDHJuupcu7t9sDpcHXjMeXPQs7u1D2jj5RdS9CfpcZ",
  "key10": "4dXzPxLpCnaJ9CWGGc4zn8wXDsUCNK3K5UXLW8AvBWjCmMErJMTGAafHX8yTCG3Wd2sbvKvkXgZBHyHGELcUWKk4",
  "key11": "5Fmgp32b8ZihSNmswfb5DahL8MRUiHGySUtBTCiH8xTjDkpE7r96JhpX9hYnvvkPeaYnQg9yr3SMFe9xmFvihCxq",
  "key12": "ZNVD9eBAUqBZwvBA1iScuNE3rgC3LkrnFKiiq3X1hwLpdcUzrYUeeR9HCNtV2n1YoTkbeTBiUdzZuyxgZwtdfd5",
  "key13": "5d39zJAuxoqrfEpZHNjWtVTKuP2W6GEGSdaModRaBGcfjX9Cx1u1hNZN4PTYmHmwRwUL18gXyCrJn53nC2XcVLwF",
  "key14": "3UeNHurcUzknUx3UtdjWD6tHzgfABh5NWksXRr8xhNXstE11srv9L5nwXg8eSe3XutiB4YTEFah82XszJfUuwsnU",
  "key15": "3wLv31dsDNETo4Sevdkcy7pCuaN2HfruF9z9kb7BmJKESDiDUEnC9fqQN8V6iFRc6Bd9LHz7foCt6JdkpJrGq665",
  "key16": "27fTkRtwq4mdbqe4hVhwaixHqQqC33RT9BTrxCoR5RReXHRBhBDxjswVEeyfaM1jByQSJaLpBvqfPYt3aMgGJwdK",
  "key17": "4UhTpwrb8H74mQ3wdeSyjQm8hYM3WbaydjGyph8TDQjXKDNaiR9B2SCxs4fMdSbgAMx5JCps8KnuBbVsJxwo7Jkj",
  "key18": "31X8HUEokyVGzZZvpUbHBxAwLyPDFHUB1SqMKxJz89BnagTWTNgpwwMFuXYDs8CzoXyTCp4jCWQi1ktMJNtog5Fa",
  "key19": "5QYey22MhBEJyYuuh7qfRF68ioTi6UmndwZxEkk2RNpEZWM1uKb39MSt2pUrBycw2VVzYN2VefAGK6RfjUvfJo81",
  "key20": "2hX9365qbQLv4giJQbutFHXbfZVh5aYoAhNk8tYAiyL56w5PhFrjBGSzdnEsdbEvVX75dDneo5cY57RerNwKyBpV",
  "key21": "3mkxNPLf46Qa7GFprhmvVa1BhDnSWwh3g7oa3DqQxLeH4Lgm1jK4ABkXofQTYGnTi22XVr1QgR6Mg95LJxwbz4wx",
  "key22": "5bhki3syQnsvExarkM51RtKsURSgUgQoNxhktQLsjd7B1HKdajRYPXju4hT94SbwgkkvXiG1F4qpQ2CmYtwa2wyB",
  "key23": "nFUj4AsuUXJaPxomrr7ZKJL1U6x6wUa5cXd2Gc2Y8pHFRVifXNkPjoiinwdCBwqbBQwJJJRknkmv5sbAtsywLgP",
  "key24": "4YnChivCnxZNY1jSYKyAM4N5XFzfvR3oYhmuvScSSnboxomhr18wYFNBuYhcxj9TWTETiSuoPEqds8AUxipoU5a6",
  "key25": "4jHXJoUBequWP1mhVxt6d7NxPv8hBafijZreWYwt3dd1WeWExJcfXiaK6TP1dZyZYPpMbTKrZEjFiw8pGDXAkbQ8",
  "key26": "3sGhhRkyaAA2vvPiw9mDSHq31DosPuQPCgoYD59YR4iB7pvSBffzKQGpDgZtPiLXWGZmkCm2TX4usaLzrXQyk64V",
  "key27": "5WWptmaFpEcPYJ11KykSNJBCszptTr4byDqLBzCeiR2fzjoUEBLnskmg8Wwd9FJZNRHPtuQaoMW8RRna6o538JCy",
  "key28": "4h6auzvrwWUVmtCThigGK3CKiAjh4WqupMiV6mZ8sPq7dCWyaHgv1KMbA6BaLDWjbJaACm1AVFd7NWS9Bw21f4bU",
  "key29": "629zBqzJELF5H5KmRFD2QtCotcemUKhrii7moA72BbPjU4VRR3GzrgEAbVZWLxwXQcrBX9nXx4TtYfFLZJzTWSqr",
  "key30": "5DUQ3JtXPCvnCTSsSDTa4BoqRy6iTJ7vnnMLGqnxo2BjJJsPAfeMeEQ6bZkE1A5nuuxeWL2tTEZ7YTAg3WaRELGL",
  "key31": "3uvHqpdc81t7Ret1aKixfwN1pVNsDspAUcL8hEexRhZEKPb6i3kuztYAHFsohCfJGmmP9EGaQx3eKdRezgLTQ8pP",
  "key32": "BXkFgqs4ZozAadMUatANYJ9mcWQfzGPQXj95zCvUMisTUGWDdnmgDAYmeTSkuZMG3MpjZrQJAFNT7C8EBnGuqFq",
  "key33": "36YR7STJCB1gHPk9PEWhSAayM5S2PdUyCxLXohyJTMMgBTpocbUBuNuAqL8bhv7zwqd8SBDwhfkdiKiTnksKcTR5",
  "key34": "2QZ1xvD5q4Nh81Gaum1Qjegb5LtVxpJwymeSeUk51Gu1dbTikx5PP17PqPxQbL8gAqyqyd4238SQ3CtcidfawbBK",
  "key35": "Nu5haH1nZHScKhigUV3wqmm58kgNsiGJ6pwxwXxxT9jLaj2ZgSBN8pK9pbsuidnKfVNUevfwTRdB5ZTTJLGTSth",
  "key36": "5abAHVW5FN89rwztZFGjeKokT7YdKHeySfNeWtE1dQrSzrHXtnpivKmPXRXTVXQ37wxGSpciXtDQAYajwYrx4ufQ",
  "key37": "2bD2kDcZrGvuA4aqzB8Uws6TPhcGGaoGVba4isnxYp3yP7DCXNqXVcJw61KFtRaRSxiTTCe2jbWqk3e2f1rH4K9S",
  "key38": "3JTatuHJ98Xv2bx8y1BhG5oG6g9S19XBtHg7AHj47v2uL8NhWXBoY7DKUzVmuLYuenT2RVorsTtmpGSde6M8ynkA",
  "key39": "4iwKYmfra3sNmN8Tij2eLPpMrX4jPDbATx1aBxRs5Jm7Rx1C2pihrsEsMX11XULYntXkKQ7SBXrPZDpo36BZ7Te3",
  "key40": "sncteaJPUMfkHXZVMjQKN4dd3S4zBNXdU1ixF3nA5tvnfxUSQeme6aYENLhkzrEA3SXyi4Fw4Enn3uwhYYF2WSW",
  "key41": "2CVkbfai91TeCpo6aTeTA4e15cuYJUmokNFCWAHvnEdZmcdqtzuond3d4fdv7hJZ9qbSkDsK21eMWSL7hiT3pbUU",
  "key42": "4M6m2uEHu48WLjg8RbQFMkuMrBUho693YecUg5MCADCz7cWQB4zZ2FVjibfhrveBsJXgTH5f2LZvhLdcEFRVE3QT",
  "key43": "5hie6xjCwLDhZnXk17TJFobQtrxtq6mtGztUnmsnrJG1Kvn4pfmikGsMG84fiK9HGcu253vpgxUdS5aS6R4kJ7xP",
  "key44": "2NzFegJmZF7xUfZqrNsHmaQGuENALTx6NrPg2s71ep65WwWXJg25stnG2MkzHdYT7oFFfWxBjMUdV2KSVMF6iS4a",
  "key45": "kWB8Mshf4kkKDDcDub4LCJ3u77bbaYX5yUH1Lv9MmH1xeK3V7eBVi61Dq54YP4NeVBQ3ERtBoavcPx1jH8XqstR"
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
