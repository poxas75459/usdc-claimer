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
    "4iV72tCk97z6UQHJW5kS2m2QrFPSJfdeAJ8kcSZMp55fHAxHNfNumUNjMQVM49WL1pUzpqVpnobCgdUywA3d78tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgPZ2W9w4cTgia4Q34GSukc5awH2wkKxYDkBZJTMcdLGov1WKwKyhrBhdpGLjmcJjezNMt2iot8QeszhY6ZiJRG",
  "key1": "2JhWt27HpLqHdvhR3ffivYhb2cyceMep3KjKddV2cUp6hvKRgrTwky1ANgGh7kTvgeELqRTeXmvwyfHQbg5jcYdT",
  "key2": "3aAN24CFQWBDoezEuE3uVxjQnnMES7C5F2vRqsViRHqTokkqd2o4kgiTrKPye7URm7n39DVP8EabjdgNCPhiuLsP",
  "key3": "2wpRY1wn1vXu2awqDsGF3npwX33VpvzS1jwJPcPUY1QAH5c9e7a7HN65KAn8rbGfp4Z2pHbKPUVoJmKNRYpAGCWq",
  "key4": "3VDoi8YiCwB8MMEyvH7HrFuoEDkX78ugp8LZH7SnxsJQHdobUz1sZ5XddAkGEnews9ztab2cTzvaEh5sxVpYZThK",
  "key5": "31psCTzEusdVXtZcrqvJzS6WP2Cvv9BoQE4XGjCwdWYNoQRBrV6HvBqV5oMQWfWZifxrjTnTSMi5wEGAscEGViR5",
  "key6": "3H2wVs2vNtLoewyy3XdyE2Uz32BQ6UYpJjVDrC2LQw81aqmsk2gbCeLGDtwXSKwAkTPj7uteqvvD82st7Bt4iJju",
  "key7": "5azGr8TBPeF8D3rXjPNi4JHzUKkFJ5iUCAMMeejgDAx8XHLmB9aPuEwQg71bkZSmh2LFdmRVH4BAHbfrcZXX9Bo5",
  "key8": "2kbDHMkNkHPjFz2oVN83PYkFg5Txbq7Tt1krK13Y82rZV4qssMK1EhpMb9o2fUrzuGBiaSmJVPKXBYh3PCx3NCvi",
  "key9": "3mKBtcetb8Uj8M1VJfCBX42iDoBjJKRVUTA4CwZJn8VjjaRo1zeitCReLLinb8TmFmVsBpadWupxNaF9ohmxVy5F",
  "key10": "3b2EYmpPkPLuBiaiRYGE66HWqXw3o2U6azMGZjVKRNgJYQddY9VYNQcX3L4Y9z8aQrTFixbKrYsQu7wL8mTj9LoR",
  "key11": "3ArBoD2XYFrztQQcCpr3kvu5q3eYKscgvsSrANewhCApLDuyuDyxyKpPUNdqWBkTDZngFeSxC97iAaiwaGfugzKX",
  "key12": "4UfbDC9UxYxPwARFYonH3C5L9HZpmteQ5u9Aix35bwhk5tfFJH1Jk3unxbyUDnKxvEdPbUFHokthCtNdn92QQnc1",
  "key13": "4dBxeVew1Yu2aZzSGcuHLgjcLwDd32P3ms2Dkwgci5Ac2iuwGAMDRX9cN1BSCeuNPiCTLhtEj5wv5WCBUv8EaEAZ",
  "key14": "4EuZsxmpmf9ytTcx8kDV9t6ozKrzK72KcjWdGkbBgSWZcVNJH367fH5NTG45rNpVJcA8ZSrCqxhjFWsn4b137c51",
  "key15": "XyxnyKdBnca526mf735fH1eSc2UYZ7M45RMybHMLpRkY3jKyAPyc4BG3ofxPyf477D2PYRaLHSeEEgqh88xdRVv",
  "key16": "3E9NRrvBHUwGN35KBVuAn1E3w5VEhpubBHsuARkUPhVCMGTZduPFZ8BKov7KMAfZk1fEiqvVYH3s3hHJ1h9pdLWD",
  "key17": "4iCfPozvMDD7ocb6CmifpCy1twEmDkTJpcvYAxMDqSqvGnF5GfsBZDQ4b2isKrgBG2cjw6nNH6TMUf2DWax8264x",
  "key18": "5LPiPMMcMq9NJJybixjNiGEJTsgwDvKgbP9WA1pCQiVK28PyJ8S9eNH8eZxerSLUxzuxnwZZm862EpgMio4CSQVU",
  "key19": "54cuApbcUzeacdDeV8fThiZg2pPo87dANnLt1C3JqKy3mj9BzraJNXsQoMnmtasTkLm5V83QJhfrbqhgaBpca9s3",
  "key20": "27DWELsPCpiQHUESDokKHLztfvi6FwEN7ugUU139rZozUraD3dpy6UKNgZYraTStNw2Bz4QA2haAULrHD2gWqdVR",
  "key21": "37K3kToMcjvR25R447rxEioR2RpYSQuYPhGLGJGMcwhUwCyWnqBkp6HkRknkjW6NQFUFfpRsDYbn4GSzinX6Nz9s",
  "key22": "2Uic8THcx34tDbXF5krsXas8DhDStRDT86GfHN6eaynpvaU3xLG4JdgWNgCsAwZRm9U6S9JxJZtDkgofuD4v3D3t",
  "key23": "3YPeCchfZN2y3SZ8dQ4P1TUDJRdH1d4e9SKEooM1aCCPaUFT72iueSGia2JPhLeYgRX7xkBGk8TJ9trCsC94Etm",
  "key24": "4FGoPFRKvfzN4GULewHtGgBJCxQ8tck2VDdrPb32s3jPF6Bgp9RtTRVmfaqc8rygCUpBzApn8cEN6FVzLZ1EkXdf",
  "key25": "59DXLXwWnicMW4JCoRFkqyQowHhQKezSza56ELxzYpZiwCR1wRzvu2bu6yv1uESgAECKpz2gttfpCN4HC5ReXtUx",
  "key26": "2MVxKaA3pCLdiC1G5C9GWZcr7DSGoYsEJdSmJDgXs6g4VsayozfMJjLcf5Dh3ZRQkUdvwR2adMU2KRSrpo9cFiMM",
  "key27": "86dxBnJeEffGr7KoDCHYGCAPU4Tq6rWEjY4yraZnQEqekaSZe16TWPPEayRprhNczZ7YNafoiAAG8KhtBvQfty1",
  "key28": "3VGC1M9fYWCSX89s2UEZDBMpcBhNUhQEVMcF6yGYeyhY1Yv6DRzVpoyZ4pHjbKhSKpQp72r4ieGkBz9rfWs7sJGv",
  "key29": "3mmegAtofsCyttRwwytNjtvcjhyh3qRvepkJicUxwYzuLF38H5SHxJPfGR8aQ9HTAx6SRKsVzjtLwpiNcVb6HNdG",
  "key30": "5rwyqyiopEpxUf5hemZrbQP3qG8SETuMQx6czmxRnT4zNVTNoKp75W8A5o5TgeeTmXazWRHnag6wwvohSMYzJ15Z",
  "key31": "3Tu72W2Sack4y1g8vgzoPhgPjQCLnfxCxE2XFoK1JFQpWnYAGouuuugugDymNUyWa9LEYo5mhGWRX9XaFzidvJJv",
  "key32": "frYTPW1DEnHTxuPCLnXcQFbUSnDBHewgEs7cvS6LuTeGmLZEHTRYJKoubah398Hqos7VZvw427msxpLjxtvtWPA",
  "key33": "5HEbq9pcDzVoD7C2zgBzzwk5UKJovMVg9NE1WbkbQcfrNqnb3ynSEbGCCXKw6F3XKDRiiUdmP6GwPrgDaEkFdgiW",
  "key34": "57Nhgi7BSQeb1DgFHf9z8HvJ1pf9YHQA9HjP2Vi1JWdNFKi6dLatNW7yLUTZqEU5iRcb1oYoeoXaTc1e49GgEAq8"
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
