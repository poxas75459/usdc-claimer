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
    "4wV9NG6a4KZeLL5DHErcu2SV1e9LBoiWEqDn1Wk67JqGJ4WoRu129K9WBzXcGLTKJgBho3wgjNeXw3D8zTPGwcNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fyire687553ML5RQu4iLE2v8TCHZLTttct2fo8bszibxnJJ33i3yyUKjTFoLEXftEnBN8AP3iykmEMrLWw8QEL3",
  "key1": "4oWLSD7Pn2jvJV9BtjFeRn37Si7NFFoJi4bfZ8nVLnUxf1PnW5nzcZU3V13ih83CB2qpysMmsuEqxLVzuJzYJWXn",
  "key2": "4rhsnLDwYfFPeZkepL18Xoaqd21w21obCogFf2sFzXYHQx99W3YovgmikW9282mf2WnesQEugGFcDV7ZvtZgJaHR",
  "key3": "5KLDzr7NH4RJKrDbo2qJFEfXm2vW9YeyhFosYSTvZEZ1c6cPGPPaEV9GJH2DG6dm9sHM3s6VLqMa3wgq6bnxK8sD",
  "key4": "3DWheyTfAnCxrXK43P93ikDx6Dpqe82vo1fGVkS7VanY19bYw5Yemndjudh5kDxLZet7jh2qcVwW1XKdsywAZvBq",
  "key5": "jBEsmUKEF25rwJ2MLLyTH6UtgRDiLEBVVirWNQv4GAhU875dmNg2HPJpEXMXZRdmmjgW3hGUSvv5V8ztELAnNQg",
  "key6": "3KG9GCsERpkfwwpi1SqqJHYCt4Te1ZdBf9i7KDEyRb1EYojydMLX9ZqyKz3YZeZt1iCtai6P6ifGD7rDQUtcxGXs",
  "key7": "3E8Pcm2RyxFaanJfhQfm9o1qmZa8qs19Dh7jYjTcPpPxFKiKRxX7WHTdLq9AQE72w338AWqdFbGmBEBf1JK5xiky",
  "key8": "2mEx2NDQvrrQg14EUw6UGoG3MAuBa13ZxhYVh5kfu1oam4nu4Y4SGzBrdtou6YrfoMBykoikfE8qJSRtpxVcQBZV",
  "key9": "4Z7JHmnDjkEwhk5pPnMiqeH9dhcHxYa3abQLrxPSysCbZneZ3gEyhSAZ3Dk7qxoVDpjD15KB5QyqaUV6ExAuQkyD",
  "key10": "4S5JfCmFWSWoRXeJiD55CzTioYnUcivEDk3f58HKiJedJah1XRnB6uEPqbPvGCoYvUFPYzSoSruAosf8UxMhYsSp",
  "key11": "5kwsNy1GcwANaVKb87FydNDriYLEZPZ4fe4BDhLkKsPZCJYmRAX1JWw8DE4N5yW9yFEbyHdcapZrYdhQkN34TvFC",
  "key12": "2ujAiZzrczChv6VXAC2zH2hokpEiMRpXW1gSN1qBK5qWfrPkp11uVFdtmaydedof4P3G9wQKN7ez2qJCw6ijEUbv",
  "key13": "3jtvgPqYDd9Cm7RDJPMqTWE8X2L2rZKdYCRKkuF2w1L2DJ5KkUaqkqBjuTCdowh9wc9uUKnwRC8YKDdsjxEEywdh",
  "key14": "4fSNmy5toGZsnWPofJ7Wz1P7nNUW9Takz8B77uHUcQN41E3sXUR71sqNUcn3NA6BAJDgjrQ6tCNaBWTp3a4czLeZ",
  "key15": "5DscvBnSmYRzhp4ACqL969gdMmsRoqUp8h7GqbSPym2YeVpWXCmjUCN9g3evySq2Lm5S7tmvHHfDbHT4ESDUeG2z",
  "key16": "yMujPc4rswBAVXtFFcUigbmiKwhdanctAGBDmp3Z3csqu3x9P9peVC9sx7Wh5p9GMu3jqPjYfKGP8HwpqBfDup5",
  "key17": "4mXMzCkCdHG7ddDAoYwHRVoGpcrgzcE988zihSvCCgYJQEc2fPPNeDZj3PMqyuMRUr6n47u6X9YL4Ytg7VZyLsxw",
  "key18": "3QtuYKYfYLw3tbie9rL5HuHtBpnPfQdiBoFsh1xfWd5jqg8r8vfuPdq1vX9yJQFfTEhnRRJoBjLsbMCByLKceGjP",
  "key19": "54Vtzv5CXY2HKDBgNCAYEtXKQAbxAkMQHnjD1mJq6zVAhR3x1UE7DcENCsgFgJSjnKDCKfGGUudGoPPTwZGUEa6E",
  "key20": "4G8KwWh6v6m2eF7CJYxAvgPfHtZGKTrSoXVAdW7XGioxaSps9hfLKsQ3gJmcBvHoj6kNcHYe3NcaRMeu2vRfri72",
  "key21": "2L3DdiG2QgxLnvb5FzYfxzgktDfxwdvuCH73snzkbse1HdeQHBpRvCYeCr2Yvw1fqJLaFEfnJSrYHE42HykHFNbj",
  "key22": "XsTAvqyL5c1kgpHGQwQMek4YtydEizhSwc9W258tSjXAL69wjZ6hbXbdffCLLS2EqLY1VPAAL52t4W4LZpf26GS",
  "key23": "TKXdXSSUxfXZduM7enyPBVm4pS1ZSJBEvCH2U5FquSdxyjjJhvrRDRtgBe3QzsU3Y5r5V575dfkCjBuhqJ7wfTV",
  "key24": "4BVSN3C3uwDXGUoFDYPMNbBten4PgfzW99p1GsvQJrc3NHZbgct54JVABmuRb7ZCtvKb5bFMcMU5dsEuQtzohy3r",
  "key25": "3gNCmrmbe9CMaiSUpw379wAPeqjaTbxJUey4EDrdWbchssc7HhxHDj2c3e3SKTTAG2jnGnvttZuYPXUMY1zNzRYi",
  "key26": "2qudQ714TsD7nGcyzGBnhwvBSWkph6eXyqSGi8fF3fjCVtH34hWy1p7HhnzjShsMvRty9LKuuEjdyNgMZUjSRQXX",
  "key27": "24Rseks3EHTEiatYGi9AzZJhxJ5L6tMUnMyr2Ltd2rMr8y7D2GvS7T7dwcDjVag8BJzESi2Qxn2aWUEFyT1rCQde",
  "key28": "2bSoZC7BWKhpq7xDpFkUZriqSuNRFg357TG4Ezz9b325CitqCCMxXSc9KzrZKRFkx4ca71QHuF6zNQRraRkFzTaF",
  "key29": "JfbJqHa4j99X2JgPGFsVydjc1yxEktv5THK3rci8Tay4XHqw8wr65Gf5kihnAvDhgjWdiugf8aaL7RcvLBM6W6o",
  "key30": "3PtdXAkXiKf6yw8SHRzmziHR3KVLL4nDRUeHKU5gRVKXhPXeKaKL2pGCF4TXrLnSdChFkLvY7jApNdCqvLxWTpwX",
  "key31": "5g4gPw1jkYGLWXRzx5zpRG6vqx817egMcgqsSToWByoG4LBkgr8ZAfVdp1HXYYMFCmQrkNZT3SR4ZH5jJbDYy2JN",
  "key32": "5TRVHK8KRuUXGs3tLnffT2gPusNTX4nPf4H8kxKGRxmsY8N9qHFJ9M2U1tsyP1nwt5544wfb2nQz8oeygPHoVwkt",
  "key33": "2qgQwp2xWjbxR7BRZVnPG4ibqdyKJTEkpoJXzcU9Fup7dknpSErzfgdzhNsVjuRDnAfMGvxm7yaTxtSEAKPXZ8N9",
  "key34": "3DzAnwxMxUKoGKHk5ZR7vda8qLdJTmgmC8Ko6gM9jvHy1mgjAjny7UGioExp5ePnMXEtFVKfZzLUJJjqRQswDxEJ",
  "key35": "56gabq3e3Vasfqn3mH3gyah2ntLF2Bo3Mz1Enf1MHzdpk2rMJH4rjMBUrNDKPRMvUekziHbm3cJM8spVEspBp2rp",
  "key36": "cym8mpu9BfAtMw8uXQs9mGj3rLeG3dnL3tw3MHWPePdqqa5fWK6dxx7hhFsfyaK4SiuSPkNx6uLg5KpeYte1KaM",
  "key37": "3W8HD4MRqXmxGzKW8f8iqpfVNkd513RBKGira35AzbnTmDb7uVguKwWmkH1cW3H1em6jTc3UfQhhhVTLp3dzEerm",
  "key38": "2tFFsD6a9gQ8jK66dWu29x8UzNyXWZbwAki99aCwhsyEsrqccM9mNKHgnX4e9MZKvRFjhfrRaL7dtk5S121Aq7c8",
  "key39": "5BspiKXBSrGR5wfDF8Y5gcrCoZDFTVzKiJBkFNUSksEPMzC2uVPkVCuZCRb6ixXr9XMU4GoCNefqGFwy6o5T68x1",
  "key40": "2UV77JFKx9scyu18Gg79a8h9GrwhFqHm87aupFoFu7WojqvKqKLLN7ct1UVF4N3P1cEWSHmApy91RyZPMKZVMZT"
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
