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
    "64efDiqvrPpmo8M6RoevvDfmqejDVuvUceSVnJxjH6KepDA6XeFaKU3o5tUrpVh3mup9goZ3PhRNyJVjzjj5VYNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3he27fGo7Pn8gRqAUdmMzBttHWFLda1ZqGDvRAfz2pHkXUHruRbX9zuHzWhY34hC3TBKY8EN5q3c2cTtzNeaT7ZW",
  "key1": "3wrnBcnu5PSSYt3K6wgnpG6P4SxxyEsnDqDWQusWcs7aqjj2MgyCycYd4HPTxV9G4uKKVqKpDyX8GJvT7kYmdCR8",
  "key2": "3sVUTULd6fGmFSg5QNKbpGZ8NPHmcgJrGdDQicU2vRMyTzc2ercBVapcLciiKmGyAYXwPuAQEn3oVeSuyZ3FcyuG",
  "key3": "5uJLxmPVEGYy7gdTDyt7CCMmcDLTEVjcd14v6kpVyshPhmWuLt8VcuuY7QVuUSiwHcQLSDoaoVx5nQXcrsW4mMUw",
  "key4": "4gECHdu1e5wXo7yLgnMy1KPgaXXSc3mkb2byWQwtEarDSA9SHpXTz6hYVQd6Db2jQgcDuLjP7ujVQ5ZcwW64y4AT",
  "key5": "CHBdXE7hVE44X8wets9cYiSjZVPuw9RpXmizhxTLv15JzsWDALYvVnFWibWXUSPPV7p9MmZ2WqPLtScFKVr6bKt",
  "key6": "4T4xo5LbRHhmvKLTa1wKbRXsWR1GDtyVEYfrpUqCprZjhLAzVTJVzJAv4S2z6fgC3mD6aeaVwPMPXr6uyQBb6FVv",
  "key7": "23ZkLJSnLMmiCBtA7wRHZ6c29cDSj4EMPmf4R8btLxfKVY7FK5B3oewgKLc7wkZvpAi2zBG4L2a6tUYC9piTEcBF",
  "key8": "4HFWM1uFGj4ppK5Jf9QhS4FFmMmfWZQEkF5FnQuAopVzt1UtBo16Efe4pezzxMgMdzK9ZsW3p8ho8VBpoyp8Jzcw",
  "key9": "2gGEUfu6P8P5vQhXtTvxuYSsbX8VXM2SwVZAvDLnASisHa4scAo3mdt64ayiB2xd1oND2MdSPX6k2jgZ89z7kmmm",
  "key10": "59iL5m5X37rD1Y23URRHwnuLGCdxiaqeM6dTFF7PLXG1XSy5pv47MqLXfY2esui24Soj8G711BrNjPkYsARuovtA",
  "key11": "2q2qt6ePCf82FY6rYNxnEbmL9GetDVUAaNQcHyE8rT1oz5czvSuWnZhxfwXvxP62NnQpoT97nqjv43ARqabhLyQH",
  "key12": "51ff8Fh3JkDuJgkEKxoyYBnbeswTbyojDAi8PE2W6HpfkDNJV4GhGimy4er9AugPAsipbRKLrsDcAdPeisYJV2Dt",
  "key13": "YMs1kepspj66feMj3uFpDbgLUjHhZ2WaGQDez6SYnp7NS5XUhMgddZVAXJw8cgeNYzR68xrGfLVMM7oo3LjCdyf",
  "key14": "5j5XEhjLbmnLRLH1GzAC6jGrSvxtw7btwbxvVGmyuGKmmVn5wzAMjD1XBW9xpP77StpxsjzvZZazcGzi5fb5fjGX",
  "key15": "41GeNYQN9rEV5Jj2HGuSRhgDsMHesAqU5Pva3HMJgj49PLHFZDpjji8VhybeyiknHBXiXEBDtxWFpxmZQ9P4ySoc",
  "key16": "3GTzBokT8iJwzvFCqXuoAUr7DUxt9pGjvozpg8etzZQFs2h41CK5VzFi6ED3tNM2pg2SPKU24feH1bMQ4gmJKQXB",
  "key17": "5qfD4zNBXPXG46Jv6ZBfAhtmQiQcyQvjttucn2Rjs1AfiH8E9EKvPByVCYuw3LsAGchLK5TJngH45qyCBm5r6G6a",
  "key18": "4nipQWKTr8ZnXbLkexVpn5KoLPt95vckPp1ndaNPbNQ93eY6TyW6hRd7nQNeurscBvG6zEgCqVsjseb9nyzxqyv3",
  "key19": "QaG2YuwaxG46pUgzLAJUrD8yXe5cDLVXSu8WMT3Zayz3TDHWBUkx9JDGoLHGqEEB91Hstx3QeKRFTs8rDTyQ2Tq",
  "key20": "2mUY1dGUyWPBDtzMAHJG9owWHJdkieaQGhctWKgCRnFcLwPGi3CvSLdPM6Dq4Lgnm1Uyama77B87UmNjaqpYTQRo",
  "key21": "JG5SGcjFxDFjoYH1M5AxdmfLNg2wxrukD5R9TkTsFPMd5z9E2JwhJrWaSpirXD49c1QG7Cf5zbtNbPTjuEf6Cji",
  "key22": "4BC8iM1AK59PggDEAFwdNcAJosUp7HqxdgxmuFZW3zDZvbGMzLUhG99FCWKn2FQVcfzvLF1bUd5k78xErk16TB82",
  "key23": "2KNewrdsqHLerT7dBL6kgKo1RqGXbaCpK2aJsRoCAixwpHYgUodPomhJjWE72zbSsbi7kgMr5eNsZRPVGq1qmgq",
  "key24": "52aJEGSeFy9GeTZiawASHdZCgWLsEtjbJ9hnFACvKfDgNX9HLn1dD7QkpUofvX9mZMfKF9tYXBco9fLfJzHZbHd1",
  "key25": "4nUpctmSwtC5AcPbTZ2NeCSoCM1JncJuZ75Gqt5J4RoZHpcL5XiH5PfMe24VUFFtP93R5g517VwcbiPLaXb7MsD3",
  "key26": "2EJcwEcjJV1pxnTCnFTMgJgg5hhErRCKTnF2Ta8ZogjSB7kGmhsdMwepTwnB5nw42tgCgvHC3FFKe3p64JuAy2FH",
  "key27": "CRdj7R8hNP1jLmH8h7YZ7nFp8jM3gPu61e4gdnJieARwCcLUJCF159YCnJMUnVmr5duXKP12qASsWSpoahU2AJm",
  "key28": "4Yd1KTxQHxZj6JnwLSLDdqdjAHrMigaVw8pdrFqk2H9995tvW3R33QwCSXr1bHKpGzn6bjztDpasyLScj737KrNH",
  "key29": "2xEYp5jfCXDVUNaNQ6UkRJKxxBa6VwqvgjmDCqPR3pXkaPGHweMj1U9rvkbxtJBYAVfUiSgcQGyk8mUsHsHYDNkU",
  "key30": "3YVkF6ALjCs72MZcbtoHhCSNPHaV4NgUYNiC3vc2PkgJxem83oBN1Mv9aZVzinyHFnd67cVXF9UM2eQMHVMNGSwW",
  "key31": "31SMMYkbtG7UBFWZpzs7Tj6tUqpdJzjUfpSdhciUGPc98PVBbgDmHfbXBDsPkUNcCFoqzyphbjBX8MGdi5L9ejF2",
  "key32": "kJpxNMC4MSTXAAwUpXFucQMdG3BEDKZHWPC7n1oWYQjxFhAzaMAi1CBTN7EgvLXST1pNZ2nUP3Pt8qti65c4nQd",
  "key33": "4dcXdS8pt2YH5g4yPkxHHNcRXRH1doQ8MRK5iNAWBc9SjKpE15MBSNH9QTcxCbBKApc6ZorK2TgsZHANiMcZYfS7",
  "key34": "55kpS2LEi7MEyNgbtcbkxKmWoNinwviqtXqpjNvPnhWHMDV7fri2tmy7bCbr6KRNoWXRqreAHEAC7cPQpEU9f62A",
  "key35": "3WfkLtU2iG2QauBLBNeAn298ogWFGykWkuuVfRWScrEXn8AUnUSUA7PgEMeBcmLQtY7QeTp2UUuUvjcrW5dL232i",
  "key36": "4RViEvne6dVFWXaaqc4icKgs7HtpaZgMqixkTs5K81fT2xgB7aEMGJyFzfdXnZ1iUuUMaXotiikUEx44zY6hUn6K",
  "key37": "2L2AAcNfwdVKjUhUoBTiL8f7Sg5SGrWdBnqMT2UV36XGicgGkS5fAJPtdnnTLVxY8uoQccL47PEbngYmeEqdtqDe",
  "key38": "31S4dgxUjSr7HVDagaGKdhvwFFBwrVpY2ePzSEoFXUiFdG1YGRS8cbAD8GtoXmUpGc5zgxrZefoFRrysRHQkwNbE",
  "key39": "5nYoV95v3UvvjVKmV7N3WMDWUVEREG6YrsvmmV5up8uXLtFgX3Wxs3coMwKHxb7qVZS8YjDoG2BPtRxpCwbkPuzA",
  "key40": "4W5XaVEMfsod8KQPTw5AdSGG1HMwceULtuk7cednV8bCYW4uQALtAnvCfHTfA6C9VbR4cHUxSvwcwGLoP1dYcZof",
  "key41": "4bPcitKPMiW6BExkuPYCYzYxh8A6XEAyFomHWyt7i22q2Uk4ooCuSCBeR1S3veXsK2qRpzFPYvDkw4gdZZX4rgQb",
  "key42": "2okkVDtwKcye2FSKmgdFXvfh7ARfHCzZNTq2D2mCetmdguvCpL56V2x9zNRMk7YNbpaEKsMvT5hgmz4rGrdPVcDU"
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
