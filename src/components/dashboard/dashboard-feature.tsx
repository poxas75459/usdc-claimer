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
    "44FWU6grVx254Fxm8abRcx9Av5YkqiidBWwrYKbsxaKqsXZ4hQsMAQDPgj6gkwFWyubU4FmeyzX2j5Ts8KtL4cvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxQ2DBCUWLKg17Uwyjdk5ywx5f464Y3oX6hqzkjUewqgXakCu2vfhP8y7G8t2g8x91vonWuz9XjNoDaXkvsxSHa",
  "key1": "eXMTkvpP9cCT3M56sZc2yxkkvdz5KZFF5GW1f5SiaK6zwNfza9Dcqs5QYjpEkSnGpCw9LZioLwRszBHXPcrhUmq",
  "key2": "5nMr1XPY8TFjZNMz8qemhkH46gQyZqqbUcQsgzANRBnnBKEdfproqZaKUfRTNvDJ7AA1PEAoiWFGhAQpFFN1Mtj",
  "key3": "3H7cSU1HhEkbkY8SETSUh4g53xkUerq8JMiW9hvf6nXoNpH6LRSxx7STqHrn52xwQK61vdt8WFa7irxpDAq5Ma9X",
  "key4": "2FFkn9f3rmme7fmJXrGGm6cLLoFiYuLY6HE9jzdZH1VEieAhXwRZGUcGApiA4vjxUKC6iWNRvUaRM4Ad4Kq5PWqr",
  "key5": "5QdEthH1hm6ArQAJa7hhfhR4vst1Fe7fRYSbG9iPt3NzoXCPmBSKCqvmcTUrekybVrj9uo1SetKnWPBEjrq3Yvhh",
  "key6": "5iL69UxckVjEdbnzZnt1nS9UqAvWYxen8PYrSP8GDkgv6g9voqNeWG2cyX3wrTVJaipCE9KQkcSX6ttHWqzphZAx",
  "key7": "4wkhnwkBU2VEU2g2bBrMDQALXxaz7Nxkonb6ZuSy6SxR4QNH7PPMbNmhEQ3emCfE7JqJJiB4e9muxo3NmzpHQdX7",
  "key8": "3ph25nGieeUAv141VKRVXp4AiSPDYQXdX4HdgSU2oSPDgRT5b693mpW3YLrwxSokZe2j1i335vu2GfyT1xdYyAxv",
  "key9": "23EqZZdJqPScGEHBXyMDjZXnWwSous3uwm6thvAFYCZioswsazAr8rwhXSVBHEPFAz3LGUGAQ6CkFctkJxKC4jSD",
  "key10": "3jSiWGew3pTxNcdTWfb7yvfjpQTyswuGnWQLdAYxQ3fG7Zim8L4BVA4qFrLnBC856wX1A9WBracEU5g8qVZoN7e4",
  "key11": "2nJJ4frbmfYfPa25qnxhHiEQxPoyvNVpxipfVBTzjJTtSmQ9TUCYV7JmNiQZNmEQA9yC9jNZNi4NyHxw1ewAqZcX",
  "key12": "2XM3aCLrZamFQid2CPZDMm2qCofaG3XgU38ugtvpVXBuPzEzWsZaCKLVtBCbP9EqZXPtxW9hJL4eUohouX3oHSFX",
  "key13": "Ydrgmc5XbWTU9U2CX9oz7Hnp7xhZpJN3sryhL1XCJAoN6mjFDKvYEq2JvP6mUTr4XAmuFkoTWi2fuQPRRbCMqGK",
  "key14": "2CMv1fejyujB13shwuUsti9KtUgae3pukv3xJaCpNrY7ymu6DuxibsTABkSfXwFAySQNvZUQRV5DVyYELBPdpbSx",
  "key15": "4rGyTrvHPUwjcjQpj5ue6NypwU2Wrx3yHBGFbqiU3o4bbSSxrgAS9M7kRGzn5ERVj3aTrn68FCoBxVVYptsjBb37",
  "key16": "2qbGJvS6MMim87AikpRK9JUN5VM2NDpfkybukSKzhyMYsVsQV6YmQXe3hNrH11ro8KHiucG3qEDeUnBbfQtpdyNs",
  "key17": "576LQgddfZ2ogQ2chRRseSUv29qrxwVC1SffUDTxautorEAiuGmtXVuDniu8h3zs3BkTz23D9Zdz1kJuB8mokPfU",
  "key18": "2FHUbGbgXh4dLj8mU1hUAHARCkX1ZH3eGKxuVSH42UhGrN3kdTX49vkcvqadnzgUqMbXUpMGUPR9Hy85kRPuuVcb",
  "key19": "2k8outoy7QH33X7jpQkyxbf98AKKC3ZQYC6dswrJbx4r7CUFg5UHKtCkSusMCf94gKb1LDStzqkdiVyFsijVbVbq",
  "key20": "5q5WNRUcxBxKBtM1ZwbaMhnwF2c6AKCwXEHaoHZC877eHjMXUoykL6jonFVqA3X5LL4hMM6bUnduiCrSSbZE1YUK",
  "key21": "5hsmCSqLHoWmpRZ4u7fDHuq88S9SeLSfGaaChfmWotaWAvw7TBcxKTAqhkpjipBHGvfbWVsjpT5b5SG4xEwHpiHT",
  "key22": "36Mzrxs94gY2aihschjDbLfv6VhjREEqEryLo5AjNfxEVVxvv2rFJcEMQpVfja6DkEwtV3pxjvpsnMDgYkBJahKD",
  "key23": "2YfeeW63zktvH6ZTgJk2Ug45c6yHkBk5hNDtXPaaFCW8j9aLymKNy5TSfTZV3zK3SEeRHStstPt7iDDbCz8YE7Yd",
  "key24": "21aB2Lw2veL6uXFdzthTdYUq4Hij8DBDt4i7o8BdYW8MF9muG49rU5HtJQuFm9uqnVHE8xthX7zS4ofzpQWAiMYp",
  "key25": "2XudMPC3FB3tt5vHxDTPBZoYFbphQs8Y2FgHbwfESRxmADiXki8YbnAQykco4xawxsJGNm5riZRvhjCZraUwpEFZ",
  "key26": "UCFHP6MaoqmqsUtcUMRy7KaumXiZGMmbp1dz1oUBCRUb3YxYaNNK9FDGPuSBAWHH7RfDW4Rys9KJVQzqrfdKwuk",
  "key27": "MgAwJ4C6DtGKEkytCprNAYuQjLbjLAfbpuGN2D6XbsSZxKu7Qa972N1KZDzzp7HV7R6PKYAeGtitCaZ9a9ER7wM",
  "key28": "4ZPP5asrfDAn28SSVZBG9hM59DRCpgCgRiSCiRMrPRnWj2EqvggjB19np9twm1efdwBNbfNoUxfrAS3YWwStyCYt",
  "key29": "4N4N3w9DThJ9c7DWRHKjmNGi2aJQHqpgEs1os9QqLvZmbazNyEZEegaUkQTPcyuXiZAWH6ecjMMHNuR3jzd6kAqe",
  "key30": "3K1i5HC8snwasz74Y9LZtH9i1dEAEkuyqAXnBH1RgBNiWEnJ8SEAMMJraJohG5kPwxBC7qsS5Jn1ahs1FSRuKMt5",
  "key31": "5bFzNnfXPqjVQzaUEVFhxXER1BDUM7JddmYkG97hoZBZdf6TLDHMNqtFa771T5uK9kqB3vq3K2zM6KsYw1ZnA2HQ",
  "key32": "3ag3rSbSWi4pTgAvboDEXWxfBhtQnuvGDD4DVEiZZ3roopyApSpAmrtWWSXCbTEzZpbFUsDFUHS7mD8m9ZyrorFS",
  "key33": "34TfAWVbG4C4GEZpSXbQM4zVfhBKWZQrrypQKN8jNBWhG6h5Ro212CoZyNzvDaFvasfhPrSViHZc5csAFg6PBBQc",
  "key34": "RrZeWeATRxf398Pon82gaTYoLBR316GNh6f9jAqXaSY5y575KwjMPgMXFvNNfmwv6jxPvP6PwvQGQFHMZGooqUt",
  "key35": "2RiKKpHrBLtZccuSVTjikjhEfrVqJNqgba1jngb1SUyGnZaNbM9UmVJMxZxewxsV5eiQCSENCpK7dpCsCgdpkAft",
  "key36": "5hKXwqjjqQtTBetBDMQYgrwWmWoLvuHhT6tre85bZ6TbddFmJkffDSQB6bmPGNHFt7CLQMuEKeMuJPfMdmdTJu5a",
  "key37": "X9VVBRrp3THp8D9jM46vgWxHbq3faaL1DoJDbr4sX1eWQDk7JKM1taVWiq3BAxmhFtFoCVW3KyvsHauCtzcw9WU",
  "key38": "KZq1jdBNJtjz9qZxiNLfjVdqRtuiy9vt4mEeSmdvpZdvvQe1Wy2HFDCpAdp5NotMkJix4jaHUuqynME4RJjf6CY",
  "key39": "2BcNAyNEna886Rmg5WoABAox1ztr2Ytwbhnrdzq7ARCxe5T6vRwJW4Wms8DLNY8NBiLfqG5b14zMrddo4G8B7SNr",
  "key40": "67Fe8epdpzmzqzYLhptpEubvuKMcFaXpN1SjPzvtuieMs8MmRVorF7vam5J4pjXXhgEuPXHkHVjHSaUEqPjA7BPL",
  "key41": "5RUK3mWgJkxnKwx2rPM3HwQViTAYtMfftP3FgqricoLYGqNspRv1jKxHptCL7sWXh2FjUo2Ag6hBhQfa4GiRByKM",
  "key42": "gyZ4qu7G3AgiRZ8suQyYbriGQ6Xi6ufndJYrhSQT9WgHS9gHQPT6MoHprDcxUkCFXHqdh9yL1UYqjVXJzS1ynd2",
  "key43": "57SnzcT5BsLxG6kMWaewtn3vQv2wUnJYkjBTmyHSHPwaMTsGosJvtWoYRCdtxDzGEvtqHMdN6N9jyWNjNbR4b9Gf",
  "key44": "3rUZuqoyAXwuN3ynW8MfdciHvfc3E5GptLXSb8aLH7TgVuLHHeoQqt9zormNbeA15ovYnUy2aRM5LJ94qm1Dhbuu"
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
