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
    "5JPPm8LHrRyRJQSSQiBspjidyNuidFUip6ZGKyU4sVUhq9DLpGJMVjQunvKTMdKAUtUdrd4VfVfhqQV5YJbGC4AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tBR5JqEUe15zTrxWxNQXJa6tM5e7PhJLJbnWnzBuUxY793Uaxe5c5gCiWcACVNt6HB9eK7B6BeKYtK2FpGRXsqi",
  "key1": "2TxxYu71W56Wc6Kr4p5s4pfubzYf6Qnf9R26zWEnkdk1RyV8NVjJkw5eZ1zEJ1v8o65U8TgvPysJM9d6QvuKhJqr",
  "key2": "4TYQHJNx6c3ksj3kha3zJEDhaouLpWRpR7ny6RL9YvWuTS4oP8RDyXGGXGfyntHBozct5kcSQJ1h9azabP1CKLGb",
  "key3": "5DL7JcVBf1jrry6sM2zMenK9GinULm6G9mLXicYGsAjEwMUsHuh93xcUkvb8yvoRFahznVz7bWB1ZyWhQRjX9bqR",
  "key4": "fSZePvWJoWGXh1yo2fXUdgfj9jwJXgJMZVehLkRvs4TQBGFuo93oQzjfQNZgbaGmmSfLE5K3QPp7U6cav117cEU",
  "key5": "5cybaDb5aV9bGYEJ5gUtZAmfVCUhEeFCf3wiuCyHu32je7YLTpqPadQyPxTT99Y7rGejVUzAhUuVD7RWCWCEhnjq",
  "key6": "2VXynWQCPTDRsHbo5ccQks6rZU2AdbynnDwEYECZf81q4vuRNAyx2A9XpcSN6AXJKC6WLj71xGxGJFjQ989raVwN",
  "key7": "58cUuMh2tu7tRue5qcgkixSSbN8hvJM4evdjD66s9j8jVgYriujY9TeLaRxQE96R4CD5fGretpf9G9rTFLtuUTrj",
  "key8": "5Gu2N9knkDk9wie6j46ZKqZcrWEK57JnE7yTGea83Vo9GhWia1wAqHA94QLEVWWiV13uov4BxaUqpKT6pzZpMYh4",
  "key9": "2Fum61U2TTdnT1RuuznzJVoYudRKkAmSYSVYRSXdHPF9h7KbdYYdcrQJvwwqJ34osQvuCXnqxu7MC5GdyCz9vSLA",
  "key10": "qH6Kyutg99RgTr1gZLubyR2Fj9zg8cPWo56N8mN979DfyF5RZFVvQQ9NgtZ8KsyzAbiSbnsXp4SxYiJTE8ZxJoR",
  "key11": "3mqQi9HZLJvyBcJR9mfFGbDukgmoXjWyDF1r9rdUj1FKkNArvKy4RrabSp6WS1GWyp1RvW7sCp3u36mTxipgAc12",
  "key12": "4pjMwmrQQ5hot4WFpVqPgfYxK97ucL6jQrPqMvkUifrhSqsfPvPeeU7KTUGNArzdUhur9TQfRW3iByhx85571v5Q",
  "key13": "2zCzwh9Rg9Sif6JWocWir8UmpgQ2GEYwtBvhkQNJKUeN1wRBheZWBC4siS1UouXL7euYBfPQvKi99BKdw54vLQpQ",
  "key14": "2GaWeZ1s8VTvYSkrDYVxhr7g1ZjgdazuJnLcYnVyFhKpDLhHDa7ckniPUQc9kfETQbrYwqqY8QKVq4EaCVhnCZN2",
  "key15": "66HgP1bHRoFSyHVrDqKio6AK3EYMr2ML9xy5rihiEiZmGbbvr6K2JLAHD2marDtM9ExhJDmYWU8SznUgTAFJzNP4",
  "key16": "5YZP383yfNQYHtTdefTujnbGP4txjeX5QgrWsMGjVJof7wCzgo1AdxwVaZSJjvJT2oXznb6SUxcguUBVNZmVLeeH",
  "key17": "2VLNqSHgD7MH7XfynrybgPnPYmpMu33tkztcgavq5XVKCksmvWJmBz7YGuxXKvaHReKySSgQhu5qFeGnPt1G8P13",
  "key18": "2Mw37C82yb4LXMggJhcH2Fk44jaSFzc277FhGQ8pwQn8XJ8466mz2y7jvSDqqjppLf5EgR8oNj7Hb3rut5z4zT1a",
  "key19": "4BFVd5RFSfhhRMNtUQPTkEiwQFk2jGboknGVQNqjRFoy7TYNPLsQqv4hwJn7vbpfZsJJa1PWWSnUkc2KRtpDGU4R",
  "key20": "n95D6goiqELj29XuhEvTjSoTF2fFhhnr9LpWhFkDGS2vEX4j8GRQdbW5cF7n8PzzD4Dx7NPeMhc8LrgBPFih79Z",
  "key21": "2fraYvLvR1rSZV2U4D7PyswA9WUUdDRbvBn21Gz6TNKLiRVERkqCWAUDxAPU3x9c9zNzGUWDxSdHVXakiiNQPGPP",
  "key22": "zMNaztvCMX9n7REh426CSawRrKTa9z4mRwwDaRGpmPGdkGtEwRt7t2gsZ4PWQv7igaDQrhpkXmVGbzD4XwzLRLs",
  "key23": "63kjnTKq7rKE5bqww3LLRX2oM7h2f2PEvNZp3AVs22TXA2h8wqGWd7EXK25WdyJK2ggy3sxphrNL32GrMow7VBp1",
  "key24": "2cfEL9g5Wj5R3TmHh866W9TcFmKhxsKTatV82Pz57NSEhuRMbZuvjRjBufXU1rQWtSJJrCAeuQTX1KUHdSzGJsBF",
  "key25": "5bUcbu9VGLo1q7p79pS1FFNVbdczjjmY6FfSrnz6s3iBqqRaFdNKa8uViVnYdTu884wJxfxDVqwbRLyvvsPGoWCg",
  "key26": "WFD1gpVfukmrKRVqFn22FmNvbeBhNg7GqNFfz1maC71DXZ6bMwAvQeDirUUhZBrTujXT8K656TwGxdJjNwoyW1Q",
  "key27": "2RYXkfbWvvsgWPu1x3kHBirW77MfrjQUPuF1x9MejRzBfbh2Fktyp64XiaxFMgEw6wXoHrNsXBBXFuyvGGv7c9M8",
  "key28": "VffoJbVyo5zofLgrBdPFQi8CkfhXTMrSxuYbQkKmn5QhbA8kK52rsAonYXgB4ctiR6NYeo2xTgy3uxXY7bYUPAT",
  "key29": "4cK5eTnTRnUvUMDiXdWdre5DxEzWcz81AmhfBE9N1vSMfCHubttbsrCmq5N8ofQMmXApZTZhPjwwzzyh8pyWwvYT",
  "key30": "4zaM5aM37c7NpQwo8Vn3CiTqeVwAyaCKmKEzigr1G5a5nEn4ktTuGq79MKz6vWxGVDFF2pg4vkmbkxGmSzd1nYwJ",
  "key31": "2T8goUhXmci9bBpyXFiKM4M4tHmQ6AthQ5y3M6eBCNX7wtiqZogasnsX6t9mDBSKPykPpTHNg2S9rUbU59uvbMz9",
  "key32": "41sQT37zsUh6cxYCwuoB5vWyC3Ydj4Et7hQZBpo1Nuy6vY1XANC1vrN4T7QfBKoAgwKhzFmQNdoP3sFrg4A8tRPs",
  "key33": "2VrxpLgGTYGEzxnJ9RXfQams6HL1aUaBpRhdkPeQb3UaCAXNnbNKydLB7eVedEZdu61NLCwjc6VrZU4HtdjqdRgg",
  "key34": "51VeVuqG48MmSyyubudr6s5tvYa5NVeLB2MKAdAGPuYZvmrbicGHKqC9jHT2eaFxVrQdWHDoXMkmPEdYTWU6Sg9Q",
  "key35": "2HqN5pMhSKS7zPKNHM56kod1mA3TXYFGkf6CC38ajFa9sAbtneT7VAFh1e5RSspd7kVr8d2tmKnQ2tyE5PF2JLVU",
  "key36": "3vceGd4ZtU28HMfutpSEBoPyKnDrUjw67WDfS6fkeJMxaN77JdgK1cBKuNEonJeZMzybf3yDxSm6U6Gs8hHyhRpU",
  "key37": "2sCqRAyCzqm67c5XcPaw5qcKGomWDnuS2QFn5CN517m1tHzRbkQSo5iJeUwFX5uiRHAaBTxjqooXTeH78iRYof1U",
  "key38": "4YYGqakq6ZwCZBuN3ifdxLnBz6HavvoU37oS3EJtcXDKQ5wF92WDguq78WxywLyzkiAof9gg63YMaSESGjy1wk3A",
  "key39": "2w28gXMk6xHHHtpFvqdMyst7SkoH1SF4zifARLVEDLkBYaYUUZGbAqgbVNPM9AVJueT6ULSu2LnkUPAciiZzPzKU",
  "key40": "2daPf7Uo8wJygTXiQKDwJTQmZPdAhkppKXfMd8QLi9FbE2NiD2N5TCQteDQvQMnhTzSD6W2a1FEM4yXgk4XYkzew",
  "key41": "4ihw8od9f4GaZJ9RDsM3u96QgjE78QghgGLYYPsu4FaoqSsAgSBWVi1ZvBGzQbo91M6NCh2952JLFucdrDX1LLnd",
  "key42": "3VSVBKAF3Tpnm41ut5KfJDU6FAQ9oqcBhDgHfAXU3QJ5PMARtHRpCsVRgyfz9BJ1JRrX9nfHiLZAzJ37dSPze1gk",
  "key43": "2jNws7TyzEGvd87Zhzar1W1RVDwD2pLCwarBM5BmZn1n3GpL7cwyM14YFgxauadHwxhukc3qquBgygfyjkDpyaM9",
  "key44": "DjtUDHuZLUNQmL6T82DYAefePL9oTSHsrLVbxyBAkdGuGadv4jHQWB9arCGrZ4AqQGrW2GDNtg32qkzcujQBF85",
  "key45": "pKkP784i5ZMpjcSqXaRRAPQFzGZVjBgdhAaimNsnuAWA2guEM95WkJCnbTbWTwE7QTz5NLVxcFfoNGrsqC7yf12",
  "key46": "2W7XjJQyKSNnF91iBRFUbMbaUt4xLu6iW8XoneG1TpjfBNQz5RTzLToE7Y19L9qsPhGTXPDJRhAXVnZDgQSFSqgj"
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
