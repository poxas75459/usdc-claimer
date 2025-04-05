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
    "4LDhBUNFQEBR4gDwSTTssAL3v65rY51BE2BqvC5y8gCRGwpfWqdDZXz1BLUHJ37FncrxDCw7xnFGfUz4nXBhBbxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NH8VkYvnMCUHunkxEXkRJcVEN7wf4FbQi6i31rcxnzwKy8FBu6qvjRLJzaiRPbrrV33wMKRQ2AEUvSmD8YNgyKV",
  "key1": "2JCvnc4qGaggg12PBwjNoQGqsr5BQi8HxWDQR2HhLBEWgGdTHcyEw4SVWZWHDoGFzeUdL5HQW7bpzwXWxSt6A5pm",
  "key2": "2socQHRUS8FQM7ixuQE4UNuTeefeJCAXCKSjWCcpyUQmL9ZhR2TQSe86APcXv3Qh7hZThxUvBXMeUyrRpSZgdQDw",
  "key3": "2EXxWAeiedrVkzpeFV4phRfVCvsKR4jXufVygYBwRnrjscC3bWBwLLemGUkGFCV8yznsdoCb3z8zkXAgJ9DYND1m",
  "key4": "2NsC7Z1bKL2UtLBd9uc4iqs2nU8dQmUC7UhTK8WsQzjazcBM2uBW5yesTfTPDzEC1Y94koyBivaroPAvL9N3oaHZ",
  "key5": "5gjkXdQMFpnqge2CW3MYacU57u84VpkKs4mJHwMhQZ32GXK1bxRgcMFC163PP8W1in5mTQbFis6dJs2nMVa8CHDK",
  "key6": "2cWmvD6gEQmPuRDcJARbHvdGC37YCnToow2Aj6Ka2R2w2DYCy7Tj8C4Cz9dUgRTQJwdpastSeQ9H2za2PYdMYt1R",
  "key7": "kTHoW8g28sqsyMxeiVdhr4TCVLSR9p93BW1M5scgzyBVLa9aKfCvbyLW4CQSsVgQUKQLdUiZbNEDaLTcrFtNE3X",
  "key8": "2x11Jr8zsqY16kcBJNC1KrDu8JPVLphTyj7fdgRV9NeCd4uv4ZnoPom3ZkpaPw898UaRJrL3pz459AMwf1sJUtFd",
  "key9": "XeiwC7QTQdKtaEUrbSPvio9cQBvV9YEsEdNj5uK3hR59ZTYEtKr2o4NFBvv1SwxFQ3yvTGwH3PSn1Cw6hwfdjvt",
  "key10": "3UNksMCR7yqn64W3R4QK7CvLLznJBsxkQ2dzJLgGvthLLRMuQ846fQVd1u7Gwp8eRiRhZRiSTxvJm3oU9onQjRHe",
  "key11": "37oxUPjy9gabQR5nRh15LoVKk6f6YoTtXvW37zYxDkRM9Xjmp8wUmGZQxkaE4YRWrbMLrpZuEuZ9Z9414tXQ9XvP",
  "key12": "5KAoqQGEkHFjxj7EbocELbQ8hvQfizibKBK12qHNpHAYBDjgmf7yS7QpZwtTuayBCgwFaSUPZcxAwwAFbUHWsx19",
  "key13": "jYCpz2u7e6rP1uvsm3dcaEBNKQggnpf11L8wfpuproT9zSJzFbtQBDucGXL57RNYmRPbkuu2pBx5KKsLnvYHYJ4",
  "key14": "67QzL3Vu7JuS43iT1cPZemfNgwHWUC4sGoqTcL5u1Vo6Sb3XdXp3vLiaRuTNojFLa4MzYLv11syNTAavRZeJ7vmB",
  "key15": "42SSk9zopS1w62tfjbpKxotif4q5up9pRaQRX2ypBqpSeW54AQUsJm3fZwH49WHoZarQQ96xmZHww2M1J2aDYpeH",
  "key16": "3fqBS3arQBRHWDE7Y1sCqyMTsvkE7pyqdu5yKms616gTkMbPw1LyGAjYegSBgoXRSVFQNMdnesLPGkC2PnNKo7sq",
  "key17": "2izgYZumdbgR5gR52VmgpD678wccFL3FJ6xYEHRgX1DtT97g7LAGiL586X4ZYFKsu6mXNe1TTyEL5mkDC9JGYEJb",
  "key18": "KyFtmba9qMqLrc7g5opmB6vjGXdWxF7zCMbuJYgSX9W1Xnxg2xgkUP7An64wYxDNQJGQWCRVM3geEDjywnrKqXS",
  "key19": "4nBtX8WTjGmLTDh9EHtAyzamV1b8fgzT7K4zBm7Zb8MKRqS9fcdr1cUQe1uSa8qAFcLEbK9bXNhjbLvBstP7X4uH",
  "key20": "3HcfWasiFo7LECgp6qXznVWx6aAgmQxEXQCdfqLGos4xtEFziiqELnvqaBPnQSndqwemPFCAP86TT1jWugEupmuT",
  "key21": "3M6FNjL6HomfmpPaT319apM6aLCv6FpHY9LwHfXB3DpJ3VXgfuZWfr6oLuwbspS9kJV6qfr5KaMgNXcNNr1CirR6",
  "key22": "5PBfhn6xAdAZpMj32PNFtsjd4MB8VVX5KUgSpVGERbkZrJgb4WGusmLr5uBbhnwJ4vpybAkc6xgebr3XFhWUZ1kt",
  "key23": "4TbmjgZo4RWuStPA2mfYxPEDjG8aoZvQVDpLjSg3N1PFn14oLJBWhaj4SDQTBSrME7rwRaaJmv1s7sqfhbdgpaao",
  "key24": "3ht4TNeMBmSmFKEhrBnYxZU3jvQdNiaZ6s6efdADVmnjV6MtN5cKFVDZXxQbr3tgsyxmgtTMUZGyi5QcEJxGhqeV",
  "key25": "338HuBhNJZJPhHk3uyGYaNakKbMAceZzSEaZHdjgM1aqubJ3mzELi4X41o2JPDuUUwfwP3VfjN56Yf9q2CnuV4Bs",
  "key26": "31H9HvRaL1EitNNEUj4QufhVJPL2cYti9Crfu6dqo81QKXx7KsyJGca3GjYnXrNiu9sP5gLNLYtcynAjvqsSATgd",
  "key27": "5VJqrchFA8qL5hZ5WcHEhJZ3igZSj9ujhhUrNHpDyVdAZjSte8qwJepjx9bXLoRxQG1H2LtgS17JNzWJyGPSM4BM",
  "key28": "5AT3hZwYW7YeiPBR6HvtNSBR52j5Myo6UqvrTL8Tw1BsxuAsn7Nj9XFtvmhpeCEk55N65aZbEoKS6fRbpG4e2DBV",
  "key29": "fzvuRpwiqp6ixWdpDuNpDmSm6q21jnerddxHDhPKyWxgmpgsDX2BPSUBdY2WZi3XqT5WDego4PJFCjo9H5CMdkC",
  "key30": "292U3N4WT1fvo5fZzwGBXVhy8xWyc9tKieqCkL3SsustzbZkrRb1LaWifYVfJCQ7WUo3ZU1vmrit4tCrf3caRvjc",
  "key31": "mzFtKGZxfzJotAR6q6sLNv75CqPF7wufZj2sqhuvku8bR6zeuxLyCpDReMrFtXw2dYo4rVkxjHkdG2ipBGnEbdn",
  "key32": "24TTErR3nA5q5urLDDRX5QwEDnpTjkG1vFtX46VsguHVqb5iqeRKbUTecdcQzNWivMpE1GRDFSXoHwN3uuunEFv5",
  "key33": "MgbtK5Cgrpv3iyQeEQnVekmucSiCq2GZrRnnng3xifE5YVyDKaDrLLjLF7KMKvnDiqGpWE9um3AcCwQbf3QuMHp",
  "key34": "22GUebsesBY3VtSNsTscZzXMTWwkT3yJZnUsdS2SdjE9JUUdsKtkXa3WpcAiKcWe5C6DJRygSVrVrQ9LYCnWAemq",
  "key35": "BqLKSjd5qVoqEpKcgUkss8pPaqQZHrjJEU9VTBa1aLsugzJuLvDwxxmtRCHrqSvntiQeA49mXWWTCMM5UumGHg8",
  "key36": "4ko2WhgCyCMxi9KkV4ua5ULwHhRvh4qSAA3zhMmvJJ8UNG6hEoD9z7Npj8Am1LvvAXLHpzZyhZzkUpf2MyZqcS71",
  "key37": "qSkvovKKX5jT3fSa2Bw1WE8oQGVj4TZw4vDEzReS4rnjtkdJ4GohzyQFhV1Af31BKAUcDry3Hec8A7gw3GwVxJ2",
  "key38": "42FDZXHiY53DB9cTRqNzLmAuGAeHtYZyVNKDpt9rwSWWGcKzSjZCzoJTwfbWXuaGLXEo6Cq7UudDdJFuq4zrcKjF",
  "key39": "39FW7786zh5L37Nz1GKy322ZW8XdCDab7yiUH9KCL9gWcMVsN3YxdGfaThv73MTFy8tEHGxQEkUzUrF4f5gZpE8r",
  "key40": "43BpDLMaSrsjPX6ZHjKhctmgUw8FLNVX1TMuYTcHE3zYbCD3M479hFcu4GyH3mn5DPTa7PMqRQerWg7mGpQtTrXh",
  "key41": "3GgsoXbid1d9cJfXyrWESatraH6gJ2EsrqwsEy6Gv7Pt7oFUXcLDQ5xBZY1EgAPsjAyS77zmZAp9Mka6KxaaMLNV",
  "key42": "3vaJ5omsPwc6QG3pFZcz64XiGGTDApNGRhsF28dQHe9BnQxxUyNtCTa3e9pErFmCVfEBDxNfPT8SHsabh7pn6pQ4",
  "key43": "42s2wXsHKH234jMfbLyKJwi3erhY9Q4cNNVutpACypeuoEXgPSdxREHE8MW4T19C6b8piAXYSxL82V5NcGADCLKu",
  "key44": "3DCwtsj9PaPHHfNftmkpXA3MEzr2HqCoZRmWLeVmbiQtj34amhWBKEUnq6FZnZDDwGSVed1jKqKFXj2pN9eRr2ce",
  "key45": "2z842EBhKVFSuigwyKJdaLeVuz4CP71AQuzyc9ubV7ENBeT9jx5mXeMccyzxAg6r1UcePGe9WJXNJiVT5spFXEjn",
  "key46": "5cz7JtiBm3NMZbdv5cPmBgy4DVVB9GXB9oT4XYxxTd9y2rSQLNCqhz9bAUSfx7QfaUBZeSkdEGqBjmhSbfipvVQh"
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
