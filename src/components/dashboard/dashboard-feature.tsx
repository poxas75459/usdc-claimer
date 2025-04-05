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
    "2TXbD7dWdGr8TYN52QMGU8wa29PwDPaL7qAQMiA27AtKfZPbFNsvPkPeykgr64WHBqektJ8c1h4BDWnsyDuAAFNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7cQPkKrgvRJwabZA7x39gJhhVBiujkhJMGQbDWLstABF8egDFDN28wdnJSvrjV2QGwprqKvdFfif1XyckecHNr",
  "key1": "2AqKwkVK9ZEqiYWWPQyHChKhDxRPixBX7J44hUmG13GKE96u1huEk79aVLjBj7QR2Z28pDJaKTTkhsCVW3R9gn2K",
  "key2": "2eUznFMgkKaxEqescC6MMuPC3DX2MCSVXdKXrf21UvsmoJ4m9wypa5JH4kCW6n4Lx98FrWBvh6zA4vJM93LsGPvo",
  "key3": "4EEcSBApQBPvZuR1ktQvbyrVwUZAnsGa3u4KVz9ZF3nr9GdsnbTMFKYdtbtvr8ugV8H57nZ7WTQ8DbDPPbau22Jz",
  "key4": "4SsFFco5ZXf7kcXSHx7W6zi4xeNpAoTcp7af47dXzHEq9smwH2h3vgTWMPY8QCVmuGBxhvKQ2jTFzvt8YTYjdPMG",
  "key5": "9mbapkHpQbk4GdyZC6899yiLqQhGhra5mkZycz2mDRt4Sp4JitTnaKMkPj23fh9JvNAf5ToKED4SgajVhLjEjCz",
  "key6": "3wrwqn1UmDZ1CkAgZve1pugmR6Y23uFTbtLv3HDQvR6Kp2FPouvgBbRqxi3FvJZRfxQJvdyDqmpB9WGsNNLwJCGq",
  "key7": "2rXr4RtaQ8FQzxszXgeY4UaDBe9Erf6W45hLDQYUaEiT1nqJ1KVAJ4ifnLvhf3GGJu2gvc6ZEXxXtU1Qg4Vgynsp",
  "key8": "64NBfKjyiU8aagRRd9je21Qpf5ddK576BqmJe94VkX7wBbLcVqi6sJxC9spVKRu2k93bMQwrUJjNnSttF5LfaBJH",
  "key9": "32UkxeeDE4sF38QsW4FVi3nrhCPkMBAtStdvPg5T3eExhEpsHRiG2nC3HGMv96v1UkLp4LLaoMCQD1s3Da2aL9CD",
  "key10": "4rweLvqBRPYsiodgbYysyJJ65BT7uHHLeg9MwnYMmNuSfcDwBrMrvNeS1HZpC76CwbATqUx9PS4E71NfGHZSJfew",
  "key11": "3U1Y8TKkeSb1rhzE9NjZ7C6VPEjvjBGzDM1wqSWtDopehnhwdpmFHK1RUJsb67ZhziQDBHwA1rDQycPQu5DEC86c",
  "key12": "tNK4bnEgcSXQSXmGGRRQHYwRA3jPTSXQ8Ge1wJuCErpBytnVj4YgaucdMZFnz9hMptDpYTJ6qnJLU1SoSHLtX27",
  "key13": "4yQsexYgNNRFPhSAmcbBaHmVokKtB7o7XkbmiDz7uWCF2ZJuqkCxY1tEmdnqLrY2f2nPQRpmCrrqCrwCWBt8tjnz",
  "key14": "4yGs33EUBpSbLDGYL9U28G9GrJVyMpVLE4VGwCpaiSLdJBWGXqmAzurbxzuvv316Gx3SW4EmwtNYC86Vh12Evmxd",
  "key15": "2Q52h6rimHwZ94GPH3bEp9oAohpgnLVEHCXUnSsEkYqi1sSxEcrMMTC7bB1gMpnwsw5nqjWGEtVLaFFkfixiP452",
  "key16": "3EGTqjzCgetihaU8kBduprphk6eUHuexwfKkV72R3jEwHDAZUm1FEHFTTVmB9Wr3ZdEmCKjHMpcN5ADs4w7y6VWc",
  "key17": "5bnNfKWiN3pdXjPt8R3bSZKcJFsyWLVd4eqjh8MXcQuEfCcJ8d7U5BiKbs3zjQ5yZmrQ5buugW1teitYGk7HqwRQ",
  "key18": "2NsGkg3oehMGs4ifXvb6SXBspSQokwKKcJbnWZWDp19dUze4nFYJu88GSAqXnuEtSBbamyKWuFTaTduW1s8AfYhj",
  "key19": "55wbHB5rWUbGa5rjdGA6b5AeNNJepAEn281ovWSmY8S2foJHeh4T6cFMzqNMi1VqpjJtnXFVntM8YpfnQ946EGvC",
  "key20": "JytMHuQKMQxwN9PusdR6Xd4REagZ6mracLa9NmhES4nhhGNuTsvCSrqgwmNyLb2vvkP7GDEw31JTf7ECtf2nFcV",
  "key21": "2An8n7fYEWXduxYpKRhRdy7J6DgMSnoNoqxcPLQ1au3WsNFkvtu31r8hrRzpuGfiL2h8GjnXiCDA29sjKBKfKKMw",
  "key22": "tUhVo4efnjTH7BBzJYMNg4QzVEJ19xi9oLHbRWZo3sGQ7JCUVawiDSg8wG46eALpLsdGwPKwkN4woDT4NvhHbx1",
  "key23": "31Md73Bsuw44tjbNcRk9akUYfpjRwcQMtvoawtJCYnHAawoh1w1yGdQm6UD1XyvrLykfQjJsDxWpnqcjymszhdkR",
  "key24": "3QsLyfycAeuFet3eqhd9uYCAJQosYLiY3cJq5vmP9cjYZuHEmcUCui1CQMyB1yL73KajfibKKnBWziids99DgeDK",
  "key25": "xe5aPTLpFVx43vNdgPH4Ymha96h6yyRPnCEEhEqBRT5AHhE4FPkogX36YE54kV1PKYXxEaTY9mxnbDcKYUKjmyJ",
  "key26": "3PYE3VdH1toeRfigufsyLG53SfzDL7u5rVJXVXctvRGM3s6eAtS1i1tYRMTHr8QzYxh7xubNL41soKF31Lz1ARCb",
  "key27": "2JRdnmMbUo7oRWT6n8FQttpQMhWZPniWUDotibQJjsXJVB94fv1ER4APxoRxZTXWjfK5eRFVwzZ9ATfmnQWkvH5f",
  "key28": "3XxopmBRPobh32UbsTjWTFQjZ4x54A7aTpkoaUVbmciyCPTPBXntryV993Md2wZLTjihPKQmjR5mDGZC4FtyA6UQ",
  "key29": "5S3ooTtXGwPAzsfz4B4VqRc42SKSH5HRGzzTLQv1zHxFPPvfuo8G18tBUdobdXHG68TgokRGQLyCN4zPhzTtK5X5",
  "key30": "3DLeCgyb5h5mWGppafGi3J9KrqsATqi62sg5hcPGhCQw3vLfC4sgSjvpQXz9kVoFKMT5xcnTfxYdbpExU2ab3Voq",
  "key31": "22XSRCWMU3FAoFJnZ87GrDp2KbLZiejSGSVnKvokYC8AznFBRPpWAR6tnJvF6zgZ4EZHLSLba6qLBVPjQoXQfgDC",
  "key32": "4xqX8WsqFmihHp6cUoAmRpzn1HCwZdwWHK1YP5fPqyWcCWv34TzS1wB3aavrq35gjiFZwtFWxq2PxjzYmTxQVG33",
  "key33": "C8nufCKBnfpN6vJ5awguUFZMoufaTyHVEg4LVybQxhoDXxFEwAyBKuqRZZkFe55fQp2Cz62myFFRcuMzZPhYvUY",
  "key34": "2R2ZR4B5LCkbHLHYSqSo8gEGBtcaXQ3QRoehDdNStKgRmmLxedyPogbW8wYa7b8xhMxXVnEJ6mEHBSdRcdeMDNhK",
  "key35": "P6QGEmkKu26CNqUXnLDtTUxyX8WJyZEJoUhQ9VdcawzUUuSN31NbQb7HbaH7fxcS2BM2ewVHRkkmmg5wGK8XSDB",
  "key36": "4haryfdxaKQnSTEq6jJVNLy1aX8Eb3eFJs1TWfJgkMqxeHftuDmb5bGCPzMF2amW7LzFtDWiNWBXjejJDFZA9cxU",
  "key37": "2Av9NNXU7p4AuuQCEqVu4BXhj37eniXad7XtbcRaEmeUJZsR9m9RCcCx1drxd5kFN8ijkC37Sw8bkAXCyH6v9wgD",
  "key38": "3TWsEg189CkjVZsrDkMZ2AbypNFFLicpoiC6MtwmESUmeYe4AFsCZpxoBDh9kFkKKgm6iYfjkMBPZaXgdLTHgbCp",
  "key39": "3x6VkRg5zruXRrXs5SsoeXgno9g1soJdcB3caZaoscUoYNWV7KaptMyVAAEAPA5E9U1w4TmEz9uXdEQErAtkWivH",
  "key40": "4UhBzbr1SUTYs5D46yNuTzoevgAQM5vxWV8LHzT7sJwxYBa6V9A3cinjrTKT91CEXkgQovkjdkNuPfT4PMAfz8sJ",
  "key41": "uqUR4sRxymSC8DdFJmMuifwZrUSLEfTrPmaBAM4AK7QHL9eEc9TqQGd6w2np4Av2UASkNb98d5fC5V8MAnGReo1",
  "key42": "5KjaT355UdAHSo9RPb4XYSjw7rUxZATZ1tWYuQ4CHz3uTKbvMhhSawFUa6BoLCngnzGg1juGrECehwAiz9Ti8zaW"
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
