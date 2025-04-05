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
    "k34YCV8yad243z1zTGMZ27p3zgXwxo9jKeVzoanVRNEZPdyuKLgGXVfCv31CL73AbLbD8hRR83WseLnCdCfTHNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EonMFBnTZQRHTuvA6xMwqhtakFDoaEcqAF9kZQecQzd74Bx6qspw8HQ92JixVETRziUWa3zWGcKZvjgGR9g9NYC",
  "key1": "4yqgfKTEqAgo5HxgkpGvdrnpGvxx4sNnhJiiX86BstQMQctarxtEdyqBLQ8XYK98qTPyMunBnb1W9XdLQewGpNC6",
  "key2": "Q5ZqvQrLC7RU1Z21vmbqNh7YvsXH2mc26Sos1kdv5qBiCXZNsnibdR9fmKzTmasNoPgwjkNaiWM2HakYe1TAy2J",
  "key3": "39SC9hDADRGCgsAxgCceftm8nMb3u6XD2rMV1fCBsxybW41rsH9vuKcifCcEqQEboP3nGksPMnLTxzmhM5Tc2VzS",
  "key4": "56RuWZqEgHPregucwPtQQFEhP81foTQjeJZEtyxajuvTXsSdkJQvYZwwe8xARddQtgp3zGKMcFWXMJtrH6NPrA5Q",
  "key5": "zAkthtwepgptcQutCNtBnScXcEEg15YVdDKmwRgnwJt86iZPC38uziby6CyoMdQLX1TsLGFH9KpS3cZWdCyamJm",
  "key6": "44nEchsWzMA8BUPGYMwNcp7HpKP8HzyEsH54NwjngYwDUnjnrXCPgrxgGX6jNbo8J6FrFhJdk8GvBpDj4cwGzsiJ",
  "key7": "5UThAYTKbjEGTy9CQdr3JCqUipfxpdqGudb44R72Kq9Np4KfuiVeZPXGZCxYdoj43ZstEyzrVhydqk9i7b8ada6x",
  "key8": "MTRGghCRB77efPFVtesHeigAQMHccjQ2n7nw9jj3ooDGewTYZNRGNddkZiPyqzXReKQG58PQY2ZK77rMvKj1dSo",
  "key9": "LpEMxSYDPSnB259DgmxFVkEekQs79hVXraJxhY89f7RohHbLiFmwmr2FDXYbWEjiLVyCAAeWmuPYuaeG9PLaow6",
  "key10": "5ZybdkZ2G2aghjkKk2RvAwMjvTbERuAMbSw9bb7BzuhoXNvufDSp5xHXSvs4kXPWko4ZjC4gee9wDqkdc9XPC12L",
  "key11": "3aPQX58JHb6nq9pqU6DkikhXj55wpAikj7PjquLetRujeagoBawQ2SuHTUNMgR9TA3PbwpggYJTPAdNAWpQd8X81",
  "key12": "TmgLgkBzr8vdzWtqFgR616zCf3WLPthJsbYhEuz48QNCPyrz8zxB144hYC5iDjuShdcTeX6ayZVPY5Vtb5a97NR",
  "key13": "3pcoZ8TzfugTV5Zio93uurPxmyjKZLQpAQS1Fq1XgRGEkydiuCGiCzqyA8E6FFQdeJhApGyf8RJFmz6gHA8tKEgc",
  "key14": "4Phj5UVFvfz6ytwW4qse7BCyydSsctQmt91jnpUqU67QcG5rkRnLpKCEjuGsSbFgabX1gnuSwQ15QqvXWJ5HTnch",
  "key15": "3gjd8jJfiC5SACxaAPpAoZ1XAm7czEYAEk6RTTQSetAR4ZrSuMYF7pvDN6PieKq6ftF2kXzxDCiesLvwMzPS7WeV",
  "key16": "5kT4DDSoErMKjaKc9zUc6LeeZoNQtoR8QNpjn8P9E4NLYzuwgmPFhpAJT4fnb2Hdv57ZtEbCzSvasa6fYFrzKALz",
  "key17": "341i78nqh8oqDdfbuW4opW6vk9bALa2gbvzD4J3HTULYfwzKfEsfRa9nSmkRTd5bRKmdwCxgmPPUdTAEa5TfoL4z",
  "key18": "2KCArLuvmm8JBddnyDoJeo8tJCY8Jmykh1k8Su2k1g1yHFsk3y7AiMzym1iqEbB4DweSkhgL2mCfKe9yRJoz99Je",
  "key19": "5j4SbYA2odM1i9kscyVgK9AVcihcN2U2MhyiajnMbhxArsarhJQjXu2wETWYrCohJmuVVWYsCbGoMReC8zcZnE85",
  "key20": "2yamTVqNYH6a2tVgG1Tcspn2uYksKFLLM7iBY9vzKfmf3VCvKSSYnn1y1wPWFAsbNUGGoHSwfuaW3whMZNbErg9P",
  "key21": "2RJduiVPfsCdKYoPPN1FCHEGuVAuk4TfWGgQKHH6kpJHcdiJk54MwEHymtJjqiytouVGCg4Br4K7JZBbAjDWhA56",
  "key22": "sx7grURn7NA9SN7RtXdCytYTvGeti6UxZXbRd9Y75kSfvQwEJQAQAJyLWq5Nt7yAausQapYd6Nxh7AxhjxfZERN",
  "key23": "32LNZEDSBFKRpjSY387zMjAqJ8idFmeWQkFiMK2qzd46N1WMsYag6YQNFXUAYgx3NGEU3h4w1htUmYfZuxufvaMa",
  "key24": "2Q9sPPJj1Dd5zAEghzt3xjh2TL7yNAGj9r6m1V8Z8y3ENzMybd1bNmmx9NDHiL6ZLaoo4jV8zV3kGH7y7AhDVa76",
  "key25": "2dzXRJ3eacLLzUEGGsUn9xtVAoggi7mi6pKfywcavjDCJCYtWFm8xnQbghhDpXs5gnGyJ3qkLpx5j3JZN7YjcPqC",
  "key26": "om2CmNLhWV2F2EBbnv4CgpkftCdu8H7yTyYL5B1NPSCcTHWAnecaQPY72XmF1uwKzeQRc5B5vc1F5Cd7sMzYB6j",
  "key27": "5PRjS7GZDLZTqcoNrBSg3E7CAipGzmyiJXGHKgc51LUE3yZQHt7D9bcgUfcNm3TsL9yMeEUzSh9KN2EDC5tk5h3v",
  "key28": "42ZZvrDF3etP19Shi6snhSA94aRWSDRDK5CAqYSzmC5gCH1u1UaT13yt1pq8k1g44seKgTTYN54upwArW2jytabC",
  "key29": "4R2dmvZEsPAX7XQ3EZBugcc5NA1HJVjCG5GHVZ1h7SWZSSojQh4pYSCP1fmVqSPknKWQxGMJDZ4zS6kQAjeZ6uuk",
  "key30": "364vs962bAQXMGEwXATVoyYNQsVCDB8oW4cqocmbRBHph9dYViwdrPrBPpBYagzgpWhu6heHH8hqEtmVGRd7QKY9",
  "key31": "3B1Qez7Y5GqiFxqHoSkmU2RAjdFuL4KzWReKyETiP3QMiKbP4DpqRuTZv29i6MyL9C9xfwN4JsrQbjVgrBN5JPr6",
  "key32": "3N9EyWheF5Dzy2mmti4jLvwrZKhHD3LGn59WZCQoULLrCq8P5YY4E9Y8BewqTLoobxJzKUWZa88jpKsNNn9zrriQ",
  "key33": "268Ata3Q6b29sFR4PXrfLkaMTCUkAhShheht3suBGTsA7GDvRjzZc255sdYkn32nmmWjfVqet8HbfMHRenUr6jTY",
  "key34": "3VSsLyvhXGgtxze6rir445WYuSeM8kXVTJxXD3jyb8FmbNDF19qKRtWQEbo1vnBfUVhRbaYYk4w46vR8CTwkzwp8",
  "key35": "NhtXTLMBccVjEnqJMXTMAFh3VVgQ3GiCFSqDrYs1eE8UV56gZ2qaTm4kmxjqvz6MkzrizZSGfQspz269aWJ17LC",
  "key36": "4wmUafu2SrtuuXMHoCzWcxrZW23fnQvta2BLdgesc96kJHhfTMnF4i9sSe3JaMiFm688YykrzQgydzxPSXH1ZmXN",
  "key37": "HSCpNr8Qw4qmgkZEF3q8oJqSk1HGeRUcW8ARXjoBFXF7Wa6mcJypQjpEz97CsRMxsyYeXqn4y9T2i4pKFjjiYnK",
  "key38": "2hUbKoVi8tKM89JJCSgXa3rsDJvad7XFUruSPc56MVeeuDrvrdJ5ZQ76SkCUvdxZxeEHvtyhoj1Lb6NnVfXJVNG9",
  "key39": "5zsqe4obq5VPpj669ui6UZTVwQhwmPwKbpRuddMDSRCX3HKE4H9oHssXRCTBedUGq5aXUoberX9dUNCTLUpBLjh8",
  "key40": "2CcZbm5yrDNnZJBh62EXe4AHsUtnXBuDXYbjX8uXExe9BQRrxDNCtPwqV5H1iErsZhDsiYzrd2JaEVBH5L7DHWUS",
  "key41": "5ZST15duhqRfQsTv1n4F28Bs6snnV3a7v2CKT2dgaCeXHrPaTfQhnfrwgRefVYoCwtU6dmmoeMq99BtRGWhUH475",
  "key42": "5wxDfQbE21z7EiUb4j9cxT2fDM6HEXdsqg2Y99jWJd9NUf1VDm96aYVmZiEsZEteqjoDnFmY3udyQQsB8RTisMeg",
  "key43": "3u19r24ZiRLXQMtbQfMfXiTEDHCjPRX2zvaFy9RJmXudktLMEgYx4b2GjvtE5jz9UqPP5w5MkU5ehKy3KdJCLYZK",
  "key44": "39rcWfHFkUUGXAVHyaqHSL956hf8noyUde2hx9T5hcNB1ycPN91LekVHYbJhkbeJQjseof8G1TH6ok2XkRbSn4Pb",
  "key45": "2Ju8vCZVZCnDwMDY8MPjiovb121FMc16TbzASJbPGfz1MgQFaqGy2Fr1GJ2CdBef1jxjAint42PTtPZnEGzFKjU4",
  "key46": "3Z8cdmrj1qRmsScSK5m1k9ruYG7FQpufbft18SQpbdV4Q7uEYznXPnHjUMD47jzkguqEVeT7PoS9YWhjTipuPobd",
  "key47": "R6Ci75uVE3xvhwxi5heiHhs9kihnQtCZkPmEyzUifm1gEhZbqdzrH2bHpP2skAP6hx28RVWYM9BLijUAwHLdD45",
  "key48": "5TWNcrdHtjT5FFxmVD6rPBwoWiSfNRXcgHQHrvDtwgTD7xYa8sNH5agVxx8GgRFM7pWNgjTe7US4y9c2ddWs35fL",
  "key49": "3DeAUJf6xSgLpCLyr9WDpMRpCuXUJXjcxAzFyhjRbS9xHuHpXFLjs4x1gxXA6p1KjpN58kqC1WuH3ERBfzMGuPsh"
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
