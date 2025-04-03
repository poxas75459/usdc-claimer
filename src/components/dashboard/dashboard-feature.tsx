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
    "64gGVnDfzvMYcD9ctLJey8GsghJhxxKtVPrAthe47fsYJdobRatxmUQXAyQfCihZXeTPWFnRUXpr2c887HMtWqk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WpwX1k641qX6NXJVbzsPnBJcQMyhP5xi1su3pUpQqXccp4uCPWMFocpcLYPZjqD8pDtxwi1wL3UNX7vfHNuy7Tn",
  "key1": "4EHx17zfcSCBAeFwnaK8R1BbiGxQ1LwMRqA1ZZeDVQabfTotzh5L8Vqksgc6tp6mDfSp8h9RDRs11zZUCWPkEwVi",
  "key2": "1ZwhiRpPuSGWycLJT9Eedh6XofpPtxTL7WqFNc1MyXnYS5vrgKwodwSGW5egpNH4JiQNxPWdUbkzBD2btkiKebD",
  "key3": "5oLN7Wp5subhGPuKc3sX7bT8voaS4VagFiKpbxSSCiwQ6KhnrbWfUYsUjodSbwzYuXvNTeFPGkEyp3kPDa2XJYij",
  "key4": "5m7YdrjP3HaA11546bHWGUU5DZF4QbrqgaZxzFoAbtjU2tDDPMY8p2S7eoAKctZ3ZCYgNx8BPntoveZjkStUZxE5",
  "key5": "cB8KRtFtxzxfCYAwJvjpTMuzr5kSAKyvnn17Est8tEVPmiMvsyKGsRPczgiVHtHAyrwuFLqYvW4WDa9JAiEBy2J",
  "key6": "5nwUbBQiRSTNXHsHJipyPsTjfMUbCexxmBuZz5RL5Zg4Wp4L5XbHgTpVhNepj4gbX3F6Kuzgvvf3Ahzpz4HYx5K8",
  "key7": "41jn1W8an9jaf9Y3SVCCn1zMGLGuc8iZyhSwSB92LfpHUG8MhaYvPn4GcACVoSwQsuwcTTiSJB7ob2VSssdpvA9N",
  "key8": "kko1TkRNrYdZGEX4d4ho2wvNCgU63LfqPsNLv28HpgB6BuppAZ6ErSykH6yDXzFopHy29YyctpPe6fr597C8TEy",
  "key9": "31GCJyK8FZ5i8mx2CAtw2nWhViXPuwYy2zb13NzPmnQ72Aap1bMq1Y49oRxT7uhsyc7JSW5ofNLaJ3Qs6o1pLMvL",
  "key10": "4K3uasSFU3ZL87Q9M3k4yoU18m8adWhJqGZFgdmML2Kn4nHgzzV1wBuPhrQG68Fx75hFu9zgmV8HMJG149ouTdeW",
  "key11": "cVUwuY5jgT4x6GqM4BosfRiZrnM67e1AothqFZHEU2DxiFkjK7Bfn8wurmDeJMesCwtDgshRWPgA1pBjRtAxvux",
  "key12": "5KVjuqGDRBn1W2MiD1oD1FWsjKRrke4kYqXdzps4gErJKbvLg88TUj9WZhswTz8S7mejeeb8eggtdZMTiak485w4",
  "key13": "4AhWuthCJXYeA4tR5kLser1gNUtKPpPDGxEUueNKqqgTyM2ttrVVSzBKyq2JBAkCFxC5v18cXr6RRKkSAjfNcXJB",
  "key14": "5HwFcPcBJ4XfXBfWAHaUtEBSdn14mN6NEnaRzA4F1G331dtu73Fe1VRJnS7Y9LYGQ2RVKZvcYgaTvfqJSjweEQFF",
  "key15": "5JRK9CGDwd5FQgHf6y5iHPfy1tVRZXknEogwgmEcvnniXVdPB47Afc3BPHfWpZEmnDBdCwrQSiNwWfRQAxdcJ5nQ",
  "key16": "3FQTezix6NSidACzBu6zdpBx5cBhUSx4XGPgMFJTv973fyoLZhQp8tyR9xXQQrjb5Hnq548w3Vjc6eJhvikGWNY7",
  "key17": "4uiw1yf1Ha8WJhZqtDLuV4PvNx8j5dbH36apqgjHcT5NBiZivsJcYvPCp2ZuKhuGDnmgC59TVvkDLWacQFx6wFxE",
  "key18": "VQUqvbBVuB1fgWiVHibrt36GDcCYrSxVDf62UFh3KZ53Auc4S3oPFgHsZrokWxMAsZ9CJwaEgbPtYsTxXmaBBHh",
  "key19": "4VBywzfrFGoy1iiyfoygwG4fDKjgEFnFg2MP5cU8fGsuNpXMsGoTsC4dJbda5mbRKM4ujUiTriYCASYt3hEUFWhQ",
  "key20": "5e43gwYvLWXTXRh49JN1HBMySHBtGggkBC8FavFzBZ6W6tvBZRBr6qAy2575tGJwu5mbEznLChuXEDFTywLjyc5q",
  "key21": "5qLGe997AEXP88dx9tpbFJpv3wFGLGAsegv8Zarmva1LqxdbduN6be4Yg5fsnFPLNf372nNm2PN75fsrxgHzanZu",
  "key22": "4ghZuuA5cMZqjn4jk1QHC92rhd4jNX2x5Zp9MdHNTn5kqawxdtTHhUfiR8wx5UV8vMfbTQBysJtPFBMHtbapD3N3",
  "key23": "2KCSsxSRFufoK9e6dHJ8TEb8wPSS8HfenqvZHgAVVgzJMuRyCkdqZptEQPgXQhmj4nt7xoRrhrZiYqotgaVRYrLT",
  "key24": "5mpTALwvxdySStRwrFAwWrzW2kquo1eZrUR1fymbHA2jWxcQGtwjBGBQpH7inKZuwFDdkWbPfFxMHG75ypsX2bVv",
  "key25": "3NbyZorNpxkDb6paJGBRDWjqHdvqwcUfB51AneWpYTp4pXNCcaJLHsphzhHQc5oPEHyRGcGt1gShmdbkkNsyEEQa",
  "key26": "2E7MpZzf2gbK1h9uhfSs4eL6cMDybywc1endrXUSA4ggiyNh8tvRmYsJN6fDbujL9tKmhVNkdYV9iD1osN8pj2nU",
  "key27": "Z8wU3aKkzSXn6swLLMVrsQaGd8PSJGegQv9uz5FLmtEU6aYwx8qXjuEqMHjKW7x9qjWimnbuWLCe1oFTAUPFj1W",
  "key28": "3mXaRkxrBdkw1wAadiHKcB45Z4huoesED8D351JytpheUed1BoRoH2dWtbxJmE5Bh8owq14sELWUZK47NFw4zPWD",
  "key29": "3CovLuH5GktRQozNnXgcNtS1CJe6DgPutEprE6MeN81RQcHcen9yGTr3cuP9pvqri3Y4t6S2jKtFS3KSRJm3aZSL",
  "key30": "pgsoxqobJWzJB2M9sb7jptdURq4C2zJ68QejiMVzbBTcJ4E5vJFeytNmyaMdKBqUBgBjnvn1MmjpxSDv6FqA8AX",
  "key31": "3RbpEVLmY9A5u9FgFsxLqevY8WM2mqD6NYAJR6S7ZjJ33MUibguLGZCyXZ7aCNj9mCrNmSGpW4XKiLmKs9apjtPx",
  "key32": "2YRpjznysXMLndsxbbeHFLQ551PqfpuBAfZxxdieFmB31rvqQSwUr6yuZGexz8XpxffGxF8kHBhH4fFLqpo5Ej12"
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
