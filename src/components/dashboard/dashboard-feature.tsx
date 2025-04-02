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
    "5nxfriS5hcrJAVaQFo4XWwkfhNCX7vBmrPMxHCC6XwHGbVFAoxuaeGE1sqSJfd4zv8tfM8reaQqZTzyM9teDZ4xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NkaPcbrcgR3TeMPGk5XSTY6mPAmTDhkRZQ6ATNPN9oix4T3JBKpBJZLKPQVaJK3CEFnA8stG6UeGdwdR1nhG212",
  "key1": "3b1WjrssxAB4rLq53WaACnBfipxG7HwPRi7AuiTqmZQUtMAVUN8NRjhjvYHTbrxhjsX6GnSxn1dRD51M9znzhbzw",
  "key2": "27X5uu15dPPmt5QosxDqz29B4uobLpdvFbc4uC1RSMzVZrrA66wvkBqL1H23m7JHZSfFezv8YynKnLY6sCWp4u9i",
  "key3": "2xb5gzA4pkcV85otgPp6enXN8GHtduXNVsfLxrVD3vKZmUdeUWRJ49Gem4rCSYbfKeiVt4syNDrhXHrrFjC2tq9P",
  "key4": "LPbw8c2YKPNxoUEvq1bwZjdgxbwiV9w2rHDiF98ZXpF6dCo2VDPoYCNfr2SThpsm21CJnJYn8pnrSzjTNQEq3PS",
  "key5": "YULTnfiH4funtVL87d9ETmq2sm61ZbmhbstHorzGJAf6LzzSvXbfhfS3AXkT1mTqXBaq5p7invm8zHfSewKhu6F",
  "key6": "3Byx9yXyZmgXpgPvQxdedkHYnXqoErLpdf91NmTJhYnsNL783tdvdiDKFrn1xxLvngkbTUVZSxqXMks2F6bzmwyn",
  "key7": "Y8L5Jyg3trfGT3kJyZHmnm65dyGyGTjVBrFbdAYg17xnaTrfH3rt7myvtVnGLLSZwY9jSV1nQXyypDBcFGmPJkv",
  "key8": "55koGnyhRDRPVKTbimm2DbjGXy9sUsXtqoHqTx2HB9J8MHtaajEdpKXqTovTDS2HD1T1eD3wqwRnRed5QnvFDSsL",
  "key9": "4pJp2V8qYMeJKGM3bLfVYzPar3T7nvBX57nk2ReArsiaXKzqem9P1Jz8ZcHG1Zbasjuf4MQ6DH79pRLP99hRX1tK",
  "key10": "2GbRy7tPCEuyoWxe3L3D3v5nXeC4fErB3PRY7arWD2SJV914qjr1QL8NvLe3pXripqkubvY8AoD5TdJWpPE47fJh",
  "key11": "3b3PXUgwf3zTxFRE3sA51fQejeeuXx8Z2dKoXFg8at1SXuVwGte6hpcatfdv9KSURDt5mYKjaoaNVweWuwdux5Zq",
  "key12": "4bhvDMhPtPiL2f2REChwmG9BzW48KNipwiTNKmeCR2iLDVQWgPjsy7a4gxvCw4d8tg4FE96VDAXUjCqMUHMrwDk1",
  "key13": "4iNFMgWnJpZ3zH24PK3bJWvX6FQSSWBQZZJyHb4oUjQXCz6mrYCde7yqoe6pyWXX3KGkqmvFnvsm3ygaRdsfqi2q",
  "key14": "vfuGgcBVkxErABp2TLNMJSuZ1dnthPmvQBNVPNiSeZd7zqtLXumaSfjsv4vGQEE8Cpvnk5qSBGVNvkv63xNBqgA",
  "key15": "2Y7km23274Es3Z26LjNGYzwqtLUckNo8HnLuufxC8zdeUWQoESmPNweCHqLZKGDampAaksMGPuCXweNmSSpXZFJU",
  "key16": "4crQY6Z6TLTCvBXstyskVmbkFRL3vmfVatBtf6PbVLeVK3zph5hvFYR7keNmoQ87awGniM8vifobWbnEggVDjYKQ",
  "key17": "LhQR6ycySFUJGeayN5s8XkVyPz3naeypBwEbETYUzoMMgUgLXHzWh2cDXz8k9hiEhvdm1Z4scdekvnxgum9Ku8x",
  "key18": "mjSh3eRdasq87mcmK5mzbVq6UUmxLCm4Qnizr7ZkZWH9HjhwYx2GJufsKbCo7J9pExRPTXBPsFDSsVBGeyVZooL",
  "key19": "3v5CbqTBPsBaWycK2R3GyqSJveLZBF4yGQESK8iPJHnG6DCoegKj2V4dcJEuNWa9wrf1rwfCaVtn1UBJGKWRLv37",
  "key20": "3Q4w1K4t5ptGspUuVzarHp3w945tNhxmGGwxhvMXHisFd5ZVMPEyC5fp2V181aQC7TXaqN4m2eBuFouVGwnQ8a7k",
  "key21": "2ePvNxdu78hmkLHbLwevcMqoRrishYm7C82geCAZBgfDNSfunJF2XCeL2s6GdW7NGkuNuC7vHExrr6SjFTmpX9ak",
  "key22": "3Tye6N1k3BgLGyxF9ZyXCy8so9aseoQoopL2BMgt7K4zCw5LDkWPbkVkWj9fpx11ko4wfYew7911zxN8VzYtRxNv",
  "key23": "2rzHWSEsz76Ck7m6HU8h6uxfWUbynvxomBNrJswccHPTN2xYVmb4unqAJKQE599NXaicSVtHJie5ssPjqQZZM1Bx",
  "key24": "5FBZ7DgN7PMwaQHxADGQnP8mvo8qJTxiArtCUpfvWVcmQrFVxJqQMdvYBCDWeQK6F7inzhmsePTnM6gfKw2ygK26",
  "key25": "4L3vcKSCyyTccNuM5FJPAeMpRFMdgCQSZuV89BJbiXaPgyLT1hYJ5mfzTcdm8Z9xtt1VNgMLHoNLgUwuvcZgz881",
  "key26": "4fyLuMGdLhMHCfRBDjs19PcdXyYip1rEAk3WKpoq488ifCdQi5TGusjsGA4qPMYY5kaQKYvZa5QYqmbGnkqzei8h",
  "key27": "4kgaoCRKt5WDzYuVZVftRs9WxHzZJdWTCpqBTuxKuSoXC4ShGFUambyKaVdvn7kpamChq5GEiBifWCSjKohXeeQt",
  "key28": "2xaeLts48tT3iEo7z7JP5grFzvVvsb4XzTRudFxi3PLsz2itMMFheoV9fSj9Uh2dCCRWTPCBaZmVTL25epA4MnSy",
  "key29": "4pqDcJEdK61g5Du4cvj14E2d7L63xyyUzMQgcAGVXjoZ2vYifwEvNte7NCqPqLxr5PyQH8hgNd2RQMDd1gDVwGPD",
  "key30": "4Gzos1Un3hDVEds4J9ofC8VuhMF6EDdy5FTwRxLYpwBn67HyQvrZAvvEnmxsb2zwC2pccpkQFAbTTKDSHXMV7Vhh",
  "key31": "5AAy59idYNdYsCnGU9Zp56AKMFViEmdN9VZp3ymmLWkCT8NCB439BbJpTRUHwDr4mnqC3weYSq6b6utXdTLyDHMg",
  "key32": "sPRuGLjVpypayedhSB1mJHEibpKpynGPaVFHX2yYt6CaG9YtvCrnkpVx6pRo241Lyn8rPabE53f3yqXMTJTzpdm",
  "key33": "2U1UBjm7PHr9tBJG1sFfAcNECQ4ws2upp6ofb6KFT6XtsxSTWYJ5k4tmJwkX3HMJu1i2bDCWmki22MqN3pjYsLkK",
  "key34": "5QYAuEFYdVbSMsRD66JeQFvePZp5hVHL5bn183dYiu4hVZs9L3NoEaLrM3XCQqSQR37mK6AaLXme4YXarcJ83jrd",
  "key35": "3nmMeYTaok8MTV2pWmo1S5b9QvcVkXNm9AmSdznxJK1wD3eYfCz44egSPmtopdiT5wkWjuy2ptr8mhFtSfoZg5hE",
  "key36": "5eakNpmiQ8vqUaXSLCTWZ3hVcoBhLvFs5fVUQqZqeQNBGUbmcLTHFwGQDr3MqrcQZRAsdEWWrEzRJzRLZ329LTWs"
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
