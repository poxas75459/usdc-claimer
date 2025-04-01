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
    "CcdfQ5DVVoMGZMaXWaNtGMaxRFkRwsc26V62BgAGghjrCj4iSgtrgZ5ngWaU6nQ69BBRmqwthFxYBziHx411MZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U83vswdA5SNp2TkmyN9PMZLCVwjzEVtcUTL1xCwZffkFqKpH2LBCA7VjEtz72xQopH96tFyjCFrUJQSFHwnLGnN",
  "key1": "3VxdcY8MMXRf9hnaQX6XeGQsP6kZgfhQuB4N4tEbGFJgAwtaVBPfQqSrHpF6vQGcgoRzaC3mXTMH7Anh9uJ7SYTx",
  "key2": "327PBzt3zCCTWQjbkiqtFJZkLu6fqQqD8Tkcz9SLr9rJ7cRBgNBDyCH3bob9ST81rZdm582wTeofHu5bHMvNxrVx",
  "key3": "eLvLWwMYhNa1axTTxgGKALNqjWX3rBfYbSPG1gFfSf2PCK1mMS51eBaB36rmxdB87m7UqDCgkiAsD4ceVpwR89C",
  "key4": "4xgMzN9h6AZ1oGz3cV5CS2BEDQzCFjSBDf9JFsopdiaCPbS33caJmiHNbQmXMH7tBpDEYvzjpTZzgbes9JPKmQki",
  "key5": "2ccC43hgRiq1yvzvQcn5rqbrMGQDB6xNBQHmnaMNZ1hnL4AnsaWYq2G7KRJzvQfYPuHpj2qUnmnXs9TNSvqkJ4s5",
  "key6": "4hV2gQhXnB4NqfGMadwdnY8nh8sUULS8tBDwK3GfJcDQ5RjQMXXDWmchPZY3FetkJQATvfCQFeXptSGtkCqW4gsu",
  "key7": "4ETNYM7wSTkTiGcdaF5d6yr4EyxHwJvmE7yAvxUmf9ezgwTeFLF65yWVhwjTKwqJeDCXimz7Cmp8zuiBsL1VyUj7",
  "key8": "3bAR77XpkCitr5ReDqMnJqWb7T23opztD7iFvLgaktuZzVRoPoiAoatDYUSNU5i1BDsP5aFy4jmUiwYRi5Kyhm5w",
  "key9": "387K3Pe2jY3K8S5mwRD1HmgvUqY8SRFz4zGdn5BzFL5cfbAJQbCmm58DyEszk8f27B71WuHHcyBoXKRbLV88xuJN",
  "key10": "YqyExHgxt6K6JeQsCyKohx7bX3p5CWtRh341E9DmVivhRjQ1hMpCdoMprMMWzsNFxhbwfyLcHoF5AambkBVse1A",
  "key11": "5ELBNh2aQCaenQdCntgZE66cWE7NyeLpyjwQMjxCdUGoD7zUMkjGeGQK2t9RwmrF9kxQQJLzaXwUujfpB5hewGeR",
  "key12": "31N2f3FGTMtifL7eMdh7ov2vuf3KPHsdTndUmpzvvxh6N6zGpG78VirHbe77BYRqrwDS4zfKDo7onv2jcNnHkmrX",
  "key13": "2a9SQrN7zYoXUWEHCz4wpZadYyKcc6WcTXYkKNEGDpdcXrQ7ZGvHAxnfMFGaMdjPJ5YxBn7FLuXYTmcnYgC5nYta",
  "key14": "XKF3g69QK4MHTVBUwU7GiaYp5rzJtWDWYCbT7k2SLc2nHs3azCLj6eX3FqhjrC1Q8ZE5NYJQeBRrvwJ6er51tcp",
  "key15": "3oehmUQCfRktvwuQGEjvdNVibuXVpjuy571jcoWZboEMd3Y1cNU761JXT2QSbsj9WhByPjcF9a9B8z2VJXQWNDbC",
  "key16": "2gVabo8MoG5DtibDxG4VDA4zR1oUowQQPA7E82L9nTjUsmGCe3fZEXg17Hjd3aLHy6qAiebYs2bjML47vFY4ioQx",
  "key17": "9wa5oo3CT4kMsJ8YQBTwk6QcyekdgW4QZvcNMJmvJLttYkpuTEyC8AzSMkDtzoHvymoEWXYPcVFbAefxubScH8L",
  "key18": "48CTEKihBG2CJb81WbCuMptzuX5L28MfFe7L2Xi4UV9oZQ5rDDMPJvajznysuZZZBinVFEefMmokq4D5H1ttLeSz",
  "key19": "5DiSMhMgq6WFoxzvjEHaTbZ1JSp96gH2WHeqrmV1Nr1g7fGvaVHSCGricHp6hLkUAYeSmZw8NzUcMYWTCGyWSnhU",
  "key20": "3vumrq1XMTktpW6UpKPFPj9RXgFw8SGVWtF2LXytRjA1ARZskT6R8Z1xcTBizKwiEmKYwMgtTYN3t6SwuBDno6F6",
  "key21": "58vRafAHZ3FyQsCvfV4ty1ZkK9CS5NBXwkwmpRrNid1ZFWZJ7VA7cmLr93pYutkvEmXswcPZYfHJWLrbdnevixMR",
  "key22": "v8VDg1rBEmEPUCpS9vunzVebU1inr6Gui8wgRPfw5XrZn3vJoS4toeBscAN8ihtKosu39C9Gi2Uu3znqkyxv55r",
  "key23": "5hGk8KTDYGKb7xX2ikceKqWtUvKKfknXdZW8AVfPwn2KfpKowZN8WVyRprLryW2aYQfovX8Gjf2h36epyCFLjhMd",
  "key24": "57ht52NnXsSSNjLd6MZjBBryobJSPwyBbqCZoqoysgtmLDGWyogLY38F2sAfoAnr2r4ae3NmwEzjQT6vsxkxy6WR",
  "key25": "67Pi2T3o3TAbbrd12T2xGpXw4mUGkkA5T51Lpnzv2VsHjtY895BrTnRL3BGgGuRWymPNcqqtWeJ9p9nCbkoTK8kb",
  "key26": "5ERbLAwZ3zpdaNhHMqHDnL9rcFXjX7h3DgbW9wniSWmTrbxb8gYeV4HWTr7ztwedWGx13nTkmkVBVCPf7rusgXZt",
  "key27": "2W4ykTs7MbDcmNn2Ag9uXPmS2DR7FByRE2qozuYcQ4y8EfSezLUDqcZTKqFnvj3nj6b39GH4pstENVb5aM2yFkiE",
  "key28": "23fKBWJNSEdtmnw1n5ZK6r6vsYQAwFk1ZXTNrhVbJjLvsCGHcR9xi8Mbraa6m4Nrjc49s6jwzztLai1xqE9XHeuN",
  "key29": "4mso3oPk6Fvjrwmr32oVa5oNoJUSxYv1izypNYSta1apMyXJz2ocGngcpHx6mTahCueMTnKXCtW6xTkFsE6AinxF",
  "key30": "3vDnnFiJw9q4NsHYRLS3wKGxSVCU3rL1xDXdenKv2L8pd8XnxnEYiEboCcSXVJM9yB6N6PR3Ej6QJ22N8tDqV3EA",
  "key31": "3SK5CWSZQVafC3CvbMy39ALXFdE8UV8A7Y49ne16svmcWmuYuJUD48huRdDMX7fFMjDDbTsUuuVDXQVy9VSZhofP",
  "key32": "2rUYvhCN5rENySPctM7CSkPzYJquVx9YfVFSNfSdE1RwCbhwFSAiiQxB5UqafKNWs8NpnEZjJ2VPjX3VHNhqAbHY",
  "key33": "5Yy4p9mjVSjP1wQDzHZ8Q5DdqqtQmkaUwoAVBdwBsewSEiQapmmidUMFortytFtAHrkULLb37sBY4XLSTr5X9rhN",
  "key34": "3ibFwGQbHKZyhpcdEJm5pxFtEa9pzBJZrW7LnRnKXWhMnUxd6e5NEXCPaqjexnewPGGYwPgJyPx42VRhdwxmJwBA",
  "key35": "3g5sMGSdnaWu2ZM7ziJgnWJRuydQShBaaQKbiaVKvz6LamswMFvKcJXzZs535GG8pHT9e5hsD8WfjHxpkUPJSMsz",
  "key36": "56ycH4ReHDTrPenVkQ4EDqcq71Vn6RykzjJB5KV929Y5tFWAehSYNJmY1Laa14mqppGckWPirtaTSJzoy26PpEhV",
  "key37": "Pc2QHxwTLCi3X8oMHirxwVC5zJ8krS3apCjy2W7pkFiMACykAysS2pz6RNTsanXbx3iJEeWtr2L53cbwiTwUbpw",
  "key38": "5NQZDVBmVuEH6fLovkTvRZfjRy4HUhwNwwz1k5HLRHr75whcRuMPoRCDrLhFBfVk5hXteiDrkqK9WiVjhPxYVUVB",
  "key39": "4EUksi39oGwgkdsmGRyd9LtQMtonKMiuNRUPrRY6bxdqAiUKXSr4sSKv7G1LzLZxqvMsjmeY2U5tZo8MUdUqvQqz",
  "key40": "3j82TgZim94AN5ZGTK8CRvAvY7ZTLhDJtwiLu2h45eLjXFbZVzRxSNH8mDVNa1sQWgZTm6uC8bUrcR5xiStvJm5a",
  "key41": "5UQV3ZYQLdS2cEGKJaJzgQsNPHbrXVgjyVdmNJ19wkYcL5JbXMxqm2vuvECBuNW696A3Sm1qa77DQCKzJD6qucST",
  "key42": "46BGVFPhTq84F5ZNPVyjWmpAE2WRpUgSSUyXSVcukppSwMVFB9qF8wPq37hffeqcHmvx27SPJB3CvyoPyVqeb8nv",
  "key43": "4xoR3rTEBa1su1xndRaagXtESavVMhqehqeowwufKyS2P6xwB1P2ajs3Z9o9qyfsvy3EYwNkVp1WwttxjrzgA4T4"
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
