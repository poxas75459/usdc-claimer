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
    "3ZhkXt7wVpsGPF1tco6Phap3cyF44849Eeb5sm9Yr2DZuHzKDhChXHumPdTH5bLp1j1KKYP9fvtpfz5Xb68EL8JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Cf571vFCp1hA2Ph2ceKDsihbCB4DE8EZ3x9zvi1uzfNtAqw8q98az4CAxjSqaPsirMSVPbM4jgfWDLYMVa4t4e",
  "key1": "3Xvczj9nutSy9BPdQdfDm2ovsWxXTLowxpaw4sRRWr3ohyYbXxDo1oACdXU5g2kkp8GnHQbBPWKnVFkvJvYTyYy5",
  "key2": "3B53jrbdzEEC1CDuf13iZb658CScqFPAtM2TmEtb8GapaLYzQW1YCA1pQwj7pMEp8C4fgaHWgYo8fJQHFuwzPEjL",
  "key3": "4qGutfvRCAaWHVz99GuqjtUczvfp2AXSbHNCs5YEC3YgddTJ83zj7R1U3nuK1frBVnNvz1yMZAnuYmZvBw6o8RWt",
  "key4": "2B4LQ9t11WCHS9BpUjmMTZwFSzwnj5M4sALg8NaSp8q5mLWhfua64PVFsT2VjXV3EoGkaaukhwcVGbGk99cLHrfV",
  "key5": "4487QFxFmVbg2t6DuDr6TQ9tPDaAFDPcVWuD3kN4CKwFoftPiNw2NbVohjDtax88Aog6rhPT5RwXnTQsyGx7ghrs",
  "key6": "58s8FWPacxasZNcsZnJp95WxBZH2P6jxk5F8CrxYKaxqGgFNPFeEpLuVEXfk3tBzPgz4jd2EBPGD5LP3UUQgwdny",
  "key7": "5FP6XbX5qZiFBE8JPknfnWdwM7yfqmxJNfrHK6RdXVq5FtBaNrB42F2T8vWVFuVEhGWFPJ2egNnAkemcdC95E6fQ",
  "key8": "9xYtBaZxzytXhtKwgM8bnTrwDJrp67rwmoiD79ufbfrKU6MRJquSfAkusR4yGSrY2Fma2k6cWYT4Y7VoCz51Bgj",
  "key9": "56FLJFyBPmQXRXYbeHuanssYnJGsGGPMMaPPCp6y5S4qDWMWd1v8ysbx1YFdXsBYZtQ2NLZ5gnavNQA6uX5T1Auc",
  "key10": "4tjM3tmfmTXH1LBP7gmve4zVwtYQGmFwpUqM7v3LBFsH7JygQm1Yj63QNmp73xWmHGVga1eLbYy5bDokQB9CBinh",
  "key11": "3WoEWoi9aSpxKUYRTVYwRoKhQEnXkpqizfFh19eRbpk3jd9ZwcK87ZihuxVJAPdQ1GgKWssP2B8s7udL9e7BjWBQ",
  "key12": "ihd9Vkm2Tp1uVb3TZjhTZogSVuHDvFhXVRfMrSpzVafhKbgsrB2EGphrPWgfQiwWmBZX7PVDWmDzgMn5caHunrc",
  "key13": "5RWCHcngEv3QKWCqzta8ZfgAZVM8Pj3tQcTWZu8fmEpeEr2G9cAFWLBCzSD6BzjEDZpL2628GDZWedxq5cfU8HEN",
  "key14": "5P62FQDbrp6BmNgBosWFkKjd7hoiZiA1SU5vdNCUG32wmcsK6GTLuvudN4rp4Up6QnLcFTBxAuiSR1RYe7BoWuQi",
  "key15": "4t3wPgyeMti68JhXfjnSF6upK76rom5zH9Lcop9vw4V4dafEoySetTtkeJkZoLLUxLp5jvVQvjy8MVEp5m9F7Yj5",
  "key16": "2G86HEtaXwFbZKVeUMLowSmaiB58r4LC6jL3cAzRBuDMgxieRPQhK19Y5wEQPGKZaBr8ysEEDVKRZrvt4RJSoQXN",
  "key17": "2YjK72nm9GcEm5W9KNo3DgnNvEZRkfxkgm6aRpgfG38sroQ4go7ejSgvxjzVxbTRaqaQ7x9nRBAoeoj5hjDDLEUT",
  "key18": "5GxDTcco8g2rn2en1j6zff5JaLVM7aqdhEi1Sw5YDYDmWyfLunWokvS5MjTKWpGeiQ9Ko2XX1CMvhhPMAvaHbteM",
  "key19": "5swk16hh3MFx3Z8wMfUx39bSg4gRXYzCkpVF6e2f9hf8SHgD68Y3FUVQbSS6WKtLRSZvcPufpXYMNdJYzLjqdQQr",
  "key20": "2nL6iU61yK5roYrbspJQ5TtfHtkiT7WcJzU1NPijGSDstnGfWW6G9zQgvuMdQeoBnCaKQqJAoyUcSDX8Y8Uk9eLb",
  "key21": "gBG2V2Rb2wChdDkr8s8Pd1DcEVqXS9UWKvMqg1uLFTancbd7GRzYfCNnfV3YFoMxUciCvQXTN9SCGJGFHXmXWw4",
  "key22": "3mWmfBpWsvt5mGCLUB2HhfokGVMT7DRTompPr7TYHnySAVwabADNqseFJrrBDJj4NpxocSgtn389FqhHPtkPwuN3",
  "key23": "53TjampN37VWpWdvxX3cgS9uJhX6p9Vj3dBziZYEmtz92JHNQzD711bZYocWhyqjje5yHzun1EvVQtGRm2GGC3SJ",
  "key24": "3FMkx7MwLWPsi6KsHWQe7Yjmd9MZtrB5B1gwCPLDXReSFBYGcZn9Sujg8pagbHrxpndNvPxs5eSN67xRuMWNsyuZ",
  "key25": "3yuZCjU3rG19xw884xJGHjum4K7QXgdjNXoanCu6oWi1J2nsKQGKytXYmPbWdF886McKUvicnqckU97PWYRijXsc",
  "key26": "2n5XwWimEcrjMLD9qbAkUYFQeFvyLPpfmpdTJLN89h37vCaPcy3HQ9MWoHG5RiqpuKWCtpkFhBZvmvMMUoptj5c",
  "key27": "5hhqqdjSprcxnVhm7J64Q86D2KAFRau23mbK5tVRozNS8YKNrEug9ssKa5TovXbsutYa7m5vcPUyckJWkNtihEpt",
  "key28": "3qbiLrDkfHBdr1NyBS4fJC2iBW5Sjz7nhMbewaskiucwTJZSTwC8Au373YsGV8iTbj6xncmebJmR6tydHHcXPVVT",
  "key29": "4T8WvDBN16YoPr4TtQJ3YCbfjBczhqL3dSsWcP3Sv2pLdPCRD2KHLZEam8vKBgpH5okTTo8SykAW4RHXa686qS71",
  "key30": "5JwqH3siS3c1gD9a5wVoFv5Dit442U3xesC6gMZi4EWbeczk5aU9zdJpdGNNu85orEBDux111DJntV1jMiWrcW8D",
  "key31": "3fC6EFEQE1CoWaGkwANWnXaGmvabP1LX7HCZtZbqfy6m8jVxm6b4eiTmEMLdRjP95UaZxWesh4YnZ3Xf8hnbHehK",
  "key32": "487dswNgG9NYeA5mFE29r4QjmWDCAfCyrnvy8crmWQs6xwvLMDFoAnae8R9taMBvw3ai3vjzdQnQ5CLa9a5MozHF",
  "key33": "35XxLYK5tnPMKQSBUvx29uh4Tpgb7WbAFyCnhQNHsSt6qsuM8QLjWJ6kAxiHjcSpbbHqct2Ta6BoLeyoSefeRa72",
  "key34": "5itWRWWyAGF2Vw5NGvvoJtDBFthdnR4Fh2QvBzJENEu2cPQPYy3EQVgSYTVbwmc3nazng2NCfJ6VxppNN5yNAHFT",
  "key35": "zMEmGtedgM2h7ita84aTy1bE4EC9J8V1V4xWDeNa3BCfC7UzYvCvEsWv3ZPNwHuPwwbUGAm98A53o4FL56oAK2p",
  "key36": "eXiAoAYza1PESoYAqpR9EFLQieQdiSSoqxze1htrfw8WEe3HzEkQ6U4c53VY46Z2YNQ8YUAyVvsfCtD2DaJYvpn",
  "key37": "2gMwUYEMfmE74WG4B2FGWyYJTzi1u6Eud9VchTpMFUXB46dwiqcL5bvWUpXLteFA5WRgdi5cBYzKD3J9Dv379T64",
  "key38": "5J7uGLJgRPyuqtEJeqBUfqJAp2oVHU42uZx15RC6LqqhawyTrH96cerWJLFTBMxo3scetKpzNAaUw3jbxYw3TX58",
  "key39": "hE2gGQhX4WoTKEtQ55HXDcYmtc1QyqwmWCjRRjUaNkHk9aQFC2EJ7jsMdqoYmeSPoS6iJKhxJYAKnp8TsJNETCh",
  "key40": "f2YEpU9XRqyvJ99qcNt7bASQNGR67NqDhofLXUZpnb7eveHUrF53qURpnvyiafxQ9NFaYFPzafk89boZqBvpjwL"
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
