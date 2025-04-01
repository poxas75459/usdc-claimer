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
    "82xVthcAUNzxHSVKw7KqpyhWfvi1ifusP5FKgYUqRaXCZzdt7sSjmoCmhdCB8fX7hhATDVPgTgZ6AeQT1yQPGtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfwysN4WAWVGeP8wE5ahhMYzxzSKv6eWdBiZrBUdH8LrGGEhvX5VNAcXkXSHvrar2WsC7hPCZg3WwNy955NrKep",
  "key1": "4RNQnZEU18MHojb71wFnpNWeoR3uxJZ1F92L1RDkaUZ7bWb6cJz2Mv6FPFFyRHw6kjLTAJnFEoK7yozsvkXSGaEm",
  "key2": "4AXUMk8BYT6McWer22JR1nmXFjoCkmPQmVaNH9aFEtQ6zpXs6Mj39VFSu37F6S7sRc9pRG3jcYfKapNWmsyajaCW",
  "key3": "2xbVVaKX8wFLEff9jKe6htRfXbcMmAvg3zj8SYJJUm4HCdDRph7mG7Mdy2n4hAaEuVvrhNJogTEypG1ckr4LxrP9",
  "key4": "61513CQwiJecFSa95YkNF7XTSQRQJS7v5iLdeKeGjvEEhzXCnede6wHHibePqkmK9QW6YvAjUtUwGnZoWph84WE6",
  "key5": "5ppBziii3axG2bBByLVyx47XdxmbEHc28y2ubE1KMxN3H2hdvFqdiekfCj4zxoUD5ePLLvMK9hJLXDouJZs7KWGC",
  "key6": "2kHFuasfE5yBEdV3o8aDoVHQMTcQLRg7tSVmp9pRSydy7x5aQw1BoPnnasty14XLQm7rJzvzkTxEKnqwgQ14mfyf",
  "key7": "Gp4XX13fTwu7jQ7JTweLGwYWGyJQj3QEoAtjecmrFCwuDqbSS1u2okGaBehwY8ydRvLKLNBnAvNHqe9ETRC4ekK",
  "key8": "2wt53V8NZXjUYYaHxQTHKiSNhwSnBJKtnHkYsSuwUb2ysxh4aaPER7VTetfF9z9HXVmakUGEqQUr9tYtLURH37Lc",
  "key9": "4umrsVwib4vriER2yXiTjAgNn2AgaWCDttTrbj2tDiaZb9h8UvwQM5YrrYc7sDMu5bL9sYWxXSnMZ2ZYqW8dubyA",
  "key10": "5Pb5r7jvQZs1mfGaVUrUTK9r1PwxFHAc2iJ4xVTZAJbETK31TkigszdVb18aKo3XgsKZHWiaEwZKnU6zQ37vjrm3",
  "key11": "5JxGbmSp4zpjZt2dACChpmB34akFTko29AzZpaKwerdKTZVy8nVVqJZdX3p8zXhZcMQmrZd9zx8VgmAm9mq5RQWx",
  "key12": "5mx6AP1aMbV2YiN9TRZbE2TiYbFShueu7pzkrjDxQtrib3PMzJTN3Woz7eByAyWvmJkY5uTPrgCErjxaqrag5Qe1",
  "key13": "2UjtSxmwwcjHvjgaAxNUcp8JUEDwZLBBHt859xKgKtsifZeyEwDWRb66WzLVRDLZchgQsNdRrfqhaWxwZCXz3DwU",
  "key14": "2bYcDVzbDNMgYkWgBWrBosN25vJp1TLhSM1VdKec1cwD8L39iZXUkRiaHRJdG17SsPS9AzZXvKgExEeK9Us98m9u",
  "key15": "63qWmVGwm73sfZ4poEj83pbtwhgAv2YCYQzrDgVZaUzksN1N48doNa7itHqFzp3ambhK6XsDtym2qutNqtV5ddtV",
  "key16": "TziQJxssn2mrtJVdngJNhfp5rWraKu3x19Z5VdfqYgukm39s3fr6JsZYidcYkVfSjwsioyyv1kYSBPnJ9aVaWaw",
  "key17": "2QbjUENmA9K8SbHMB5SXWDSmMGBzS7zQNAL3Q3SCvqDLfbvmZSo5osHtBj4vXymsViEpBehWxHqcgseXzqBAbaAR",
  "key18": "62Cof4AHeem4btaGbwSvmjtRYmF8oKJR5h8nyuoiatsRsZWBpM8EazVUDLzDyELzwJFJRwPfEw57UZmyKGxdWZuw",
  "key19": "MjxTSXa65PZwx7ieFFkZ2JG4S9c77BjttihRPvgZJfCWaZbs9tTRKSobAA14SHbW2hn5cDpKtH9JH7KGKQENt4D",
  "key20": "5nc73uNrodDF4ibgexDyKZstHuNghM9ALT3Mp2u6rDsghxi7RQB5yBH96HL7YBDGnu7C4D5X5U9wCG1qFpU1Xdfc",
  "key21": "oLjBnFBdDyJJPK1ktXkbrLuZMPBrcRXVQSKA75C6dKwVy5PCZnZDnYn2aeyKfkuP5m5enVkdyMjGUUeM6o6dNkP",
  "key22": "3DuuGAdjzPMfhZcrPihm88j5xWXGVKBkR9LMKMaAuu9ACeyZnWRefF75wvzzHZxCkRU6aCnWXASczpyQvQBVeknk",
  "key23": "66DtfJf7HaQVCdZhSW2NCvBB38Hd5RYMoWAuJnKAQzz2SpMmyr2cEBAXP6VCWAjQ61ntSftDgfnSix34hBdNKoHo",
  "key24": "4f9Ker7mVhrBH4NG95Fj78tRRf5MEZUNEWpA5JY4tcSynfSTg48NPGsvCMDcDP7n5ekjcb2Cp2uP4B865nceCQEu",
  "key25": "2No3S9Wsnh5QhAyVC9T4qSvW2SKfzFwEGVS2qTBiWGJjzyaRTK6WEDwHsT4EREXKihZg5M2BonPR24UzUpdWxfx6",
  "key26": "2Uk3K9UiqNJehfcxSKdeZsKpoqMK97HS9Kg8SHJMdidKD2b9ZtEbwzhU76ELaeqdZR2igNDKoEtaZkXmpCNabdsX",
  "key27": "3JUM11hAcWBUvyurmZSr83ZB1pRqDvAfBx1iZvWadfrwrmSEJGQZCiPZLQGH4Uz6wXWtpt6phidGAEsQkPVmqeve",
  "key28": "5pFwftoogZdssYy4RB36PrcCnozLaXyPHR7UEpCdfj1FT9qyaM3JCGrJJvMfYBPYp3iQDhcv6t3xQyeobPWBNaKK",
  "key29": "5smYN3faQKHvpB5nu969fGA2ono2hcbQobdZAoePqN87ifCUxR5dp4pXZbgX1TAddmehy9ESqkXcirxujJ3USzee",
  "key30": "3dzA4HynP534dosDUZ3oNnDqW57VPa45qphiHZorKtJiRsSBBWXxNK1tLbF6oB4czuMsePKrynhNo9MR3ArA1g5a",
  "key31": "4Nswpzv1TU1dwEGf1JYDj4UFWRGHo4k8L4VmTVGqpWqkJW6oymKWJ6XuGGZbFbMDBwTFzavhr9ihyxUPtJApppQF",
  "key32": "3zL5z9FdXaWGzS9p56AbrzMLu5q1kAmEhQy4vDb6xGpMCoMUZSxYS4Zbp1XsBkdZKyiGkFKhUMKpRzpPp26WaE6W",
  "key33": "4VSQKWpaGpFCp2PiwaHHhvtVTPbTFhWNypb8xdeHSMJBMUrUPvHYXhinQFQcgnYuWtSH95JLWRjz7kAZc9PNXS8W",
  "key34": "5DiHAZkx2pzaQPm3W3Vj5XSRaiBDTYcFA8fmakpkS8Rv9KGqfqHy65x9Q1mMbqBZoMdQTpTECVz6ywDaGeywtQMK",
  "key35": "33YGaFsEs5G2qVpRKFrAUgGjhFmUAZzCDB6UbTyrEitkVRDv2MYQRLfDJMtU1rMWdy6SUxRQUPn36z4NrvanU8j7",
  "key36": "4LmA3VaxGbqPyEY1B25xieXrRPT2vnsjPFx9vYhULR2hwzPCyTEUScGkAKWw7nLbxZddf6hF9i1RjTfiXE3y3siF",
  "key37": "4ADe1zcLop6jcqvwe9vyjdXu36Ryh3UYybWrZXVstJSfe55aoCnadRyGRrm1ttHPd9ZHQH2Ez4ZLdDaZ2fHTDES5",
  "key38": "2ewdYV7HERjbS7mwbAGtK6XtHAZTMyU5bNGH1CMbZhEuAbgndYk7ds9YpZpge1ftx9KZCZiJDwdE6A3VZZhgtoZF",
  "key39": "kmH5q3ydf2UnCSzPiwxavmjxnRgHJCkTfFSEyHpcihzKToet2ViqJEGuUMHMaKoruwfuPGCL6VJ2AXapSnPeu62",
  "key40": "3Ecqwh24m3bfN6hfw94RMDwq83FNeAtx5DSJLTExVJd8AZu6PwbWU3knafaxdZk2utFNNb9LgqhQgaovEmV44UxK",
  "key41": "jK3cynNBXmH9pNrBEH7ht4nZvdtrMrMxKXB6CW7sNsB1C54VA2oV1Lip1RUAHknHCFdDoqYHGr6VeBjvHwzLwd1"
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
