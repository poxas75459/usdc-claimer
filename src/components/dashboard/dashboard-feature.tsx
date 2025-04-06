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
    "5YQfhbk1s4ZrXopckWh585AKA73KnqhY11bfTr8u4uB9U7R89ij44wgphdVkXeEEpX2rGbobcaps7DMHovap87rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2qCMPza6nRVwLy3CPEPXrR4MvLi61qfPYDbNsHkvWAthKFSoAHvwN5RmghNZMcRw1gdkCJK17zHBJandZFvv6F",
  "key1": "vBeDwDPAbvffVnydchHAQKHLvDKMcZhqQKxkDBxr75T4A68rptjWi1aVbHpKQWsDR7tNC9hGZG2cEHTMvR6hLUM",
  "key2": "3Dmj3PD7yMH8Cb8H3guHqziqNx6Wi1ixuzWo9hzDroEYJ5PkbcaGsdX3nQ598oZ3vqvqdWSXBQgDgyvczxq7GAkf",
  "key3": "43T9ejY8NSwpDLM2bsS6SynP5gvBt9dnCfy73UE55rJvxz7z7LseQnEz4bfBRkNSHhaozrXYYr8naCUgi63UGBrp",
  "key4": "453o4BXLpRF5AmBcR9Gj93xjuNAALH6T8B8eUr99MDGsokpPBcJzCSetHQHDtsvqo7sygWs5opiAuTZkfNhjsqJr",
  "key5": "3HgHASu4ozEqEo44aBaLFxSnpY47Q2xoJ8oyzPu7bdKCnp8cHCawb4nGk55QBqbkf55ZmLWKQvsPHfbtVUukJfYb",
  "key6": "3HuKJL5hxjcLy1mfxWVPis1C4r2iGfxYCvJh6x9ZRiYnohYkAMLYDfnFCgEegrFw79qxpyXeUNSNtSXa8JajbKzZ",
  "key7": "4gi8nzxqFjXqfeLNjTiSSiwDqkbL8CZHR8n7Wwf7sGgdaLTkfQkTdgDZVWzBbyTf85RsK2TJtnjEbijBMtvyBHpT",
  "key8": "4tDKYVGQnGaFoxHxZUGasNEsFqHKvgCnt7hGrEX4nNgiKudYnMoL7wRr37phV199MaThUBrs9x5Ru6NWz8zEizmZ",
  "key9": "2MapZDT5V9bVYRHu3NBJt4M8BgoHMx54MmLuzdxiSD9JL6dLAgcf684zXe8X1obLrVMiVwiw63GtbaxVh2q7rpCi",
  "key10": "5ZF2Un4NqMCEwG4oiyNawRkxU71CGphxKH8t8VrZTBMjXiUdp15CDYNwj9DDY8VqqFzaP31F6KTGqpm4FBoCqEog",
  "key11": "48vd1kXoEDJGXVwQ1XPsG4tf6dNuE4kkmEbqLf4JNFYaT7AcX2eELobyHNKG9HtTnzduy76L1fWYR4ctchuS4p5k",
  "key12": "5PvKTpfz3SBTUg9YfwAXAk9Uo2WHb5Pc5KJo8MY5FbwLGRVCpm1phCwaf7kSML4FSMUqTxGyZ9NZZ3rnBvSFYoHn",
  "key13": "32MrpJqmJ3DLPuWrsi7c9UE8ZocetSFhZoXjb2qjzk3hUj5sFbRXaBmrfkHAUuTeJRq798TtFnFTCRLtZDY296Nr",
  "key14": "4TNn9vCJGhegcse7qNti27gKCLKZRxJPujJGNq5pxJqyL2ohd3z4nC6VtQUvGBHNRKT42f19S5iKg2fLShFGy2bc",
  "key15": "d74zpdpkk5LEvjeY5dsMcyjFCaq8X6apY9SSgCWx4JHCikK5Bid7NCCPQWJ12yF6jsZSxfniUcSLS7J2b8LF4Cn",
  "key16": "48W26mF9gQxCTTWMLQ9xhguxCu3brLAHsnnY15uuDua661um2b4W8P8j4nNqBRDN449HSKhAgaiwiWTMW5Zh9gyU",
  "key17": "L2qz3k2rU9mbXZeJqeCw5J26eYmXTry8s3YEt3ge4TQmSVjt3V3hite75jGf7xhFCFRtgp32zHrRcCAVyAfaEWS",
  "key18": "4c8rH67fcUTRwbRwkm7kdUzrKT435xuSw2eKfjktQ8tnbFdDUn8vM9zCNxR9ptdDW9bmiCt6NwxsaPmmiZoXRETG",
  "key19": "44PMcyhRzKQFbNAYW9woFcCyPFkfQ46J7hAEdizpLhG4Wag6HUJDgPnhMBCGZpXPjmDwHwrpw6cEwrRQXAnFpgBW",
  "key20": "2EMuAgJr1mWzSwiNSrMTHfEBUu8SBvm8tpZVQi14FK8Lwc6rVQGehc3egEAwSe35jEDqFurgd21VYbkKtmRRA4f5",
  "key21": "4Ub5EeNGW5igsPahmi4VGb5KKEwV76KbGTNrAZNkt1PPWNCWgCLkpqaH9JcqDx4e4zPTn7c6GTE6KUNAZ7xZ5xTN",
  "key22": "2kGEih5gHS76Zt31NVXzYCraSd3gS3YUwYLXWD28QZuEprqizvoquD8d8Umz1tywqC1EGWNMc2e3SY2ZRjn4YbRu",
  "key23": "7GPCJq4g4oK2oaZyXycLeMk7FYUc76wH93eRAMSLxBCjxLgRLtruBEnZqwjjVyjWFAhUXTTTMYAuXdvZ5zFcPz3",
  "key24": "2ALj6XL8sjkXCkWFR2DxoQYDityqgq1cZETczziCN61LHurTcdAZmGMgAqkyDEsvNdjUJw86Ptj5aZ2HfWLAJAdt",
  "key25": "Jjz28bhzJP2BTJXCcnmCagiznQ1ptmqoaMQLqc6cLAXfg5qHMkPiXrTXgwhkMhL3xnjJZdyFKZh6uGuH3gN2Xrq",
  "key26": "Nvw2vEYPqmmFXSYR7B4doGt1zcrmumEjHUXBB6UzT2LcRpzfLDgCJ9E3n4UDDNqHNtycz8mm8bL1DwVxnVeYhjc",
  "key27": "4eGc5VHw59UKdjxzTJt1Ma5ZJk5xkb9XJt9ZEFLXADtviVa21PZqXaYxzKXQhceFwhxsUBeWU7fTf5xK6gjRBRzr",
  "key28": "3GRM21XG9b6Q9NtGYZzVirTHsboLjJPxXS5DLYcKTd4x9EZGZEgaPbhoyeZvEqUKGhNzLXhKmx1a3XAqpcEv9oaM",
  "key29": "37fZfNP6tcKQBRBx2eH2FY1sxgVeKYcc7mPDUog811CDtVhiGCcWXr11DeawpTFUs4fXhwEUEkii8vZ661W3LxUZ",
  "key30": "4gUv58DsZ2y2Nwgf6jwoWKi23uu8SxLwXDGtTBrocrWc8FUzXgcUBGVat4PfaxzrQSPZoaYutLrUUGFEXWuvUR5D",
  "key31": "5Fc61MgLmTNpygTpjkcuHZXWxWi9tCkMqYjsei3ePg7t76pR4a9C7qhDBzsQHtkqqThHcXRXet9SzUxxwfVqxFpK",
  "key32": "42w4FayJ2Qq5yxy9uwit7cPrbZYz6Yv6bwfX1F8T97KVR6uJMHEDM6ifn3hhyqtWQLPxiBCDvKbSVBTD1MDV8BUh",
  "key33": "4wBdBFnUdB114TtS8r82QC4dGW2b2cLJSVfXonjseoE4TvX3FME6ugFtN3FqQkSvqTVoC91uRwdafTctA4tA8tV6",
  "key34": "3eqmRQWSco1rAjmKjVEnxLomNM3SoVm8YYLVGc9Ymh2eQRe2mLZcVWLgNSnddDEMEANhgASKyy4uSiPHzZ3UtirX",
  "key35": "4Qe3xnUBfAjb5VL5osyfXoEE9LE1LkZM8FycAvVmp4kDHsMaUBvgGnQ8wZAGrCYchS1iEkcrDiUgTBtYgxrsYqzX",
  "key36": "wBC4F2nZRtgwD82m8dJnpkNkpJrSj29vBTqXM5ucaz1nfoxtafP9stNYxu77Zq8AgEpiEJgh5BZ3LKzerqjooeb",
  "key37": "2Sy4ZuSReJhtCU2fLT1YHNQbU6VpPxpZGsHRgCKZxyH5Dud913qReKvHFSGUhJRXva8fuHKNDQEziHmsT2jf6wm6",
  "key38": "516ZKdmHa42kKPNzTxd223mGUNcuT4K1xLPGrJyeKnmFSAtGKcyJBGjMdwksEpZ1FtoDzosVN4gRTvRtLnDhxK1Z",
  "key39": "1t2GdEtSeWWFZFbmbZSrGGQ9KT3eRUwhocakLf21Do4j4QzGUmM8raPnW7n9YvcB72ns7K1BW9PLv7iL5CbUnFV",
  "key40": "5hhWy72YGtexKNi8eyad7eNb7V1f2BfM4KqHNPB6RjEh5uJBA6J9mtz38gJwiUQQQwwmJtZjDy6PxFgsUuaLrpuC",
  "key41": "RBUhXW3TSBXLhd2XnxPbPoJJUoELPjbSScvHMdBr8wLStbeih5iw1VmvqZ7m4FRWie7uW4Ssq3jKyXfyj7j5Bgf",
  "key42": "5iVJtetaA91UEzw1j62UiLQAuAqWH6YZByQAoga7rCvcBZgp8fXqFG9hAsHMnHLpmBbWZ2reM3voLYT5YZMaHE6F",
  "key43": "5WGJLEcmHxpKYrgoyyUXeuWyEgQ5CMyrdTZN5QkSDmJmpch7KMbiGF3yDp3wN9BL7u2SMWDyVnsKXd3uvgV91WJi",
  "key44": "5TPqYiWkt8pMhXFzWogQ8G1zWqgLqEUkZhUZbhZaVajqvHvhqTS1uFwXebYfDCE6p71uyZbLSgKPTdqioyv8BEhk",
  "key45": "2czpDEDDg2ijmcV9UxgN77yhzFQBPvmLcYtvfDrugW4qDYk5mR2EukMNY6LVvgPduHABD1tXnH8D1eRkQpj9UwwA",
  "key46": "3s7ZG6s5w6pnrFewLmKv4c4LZEbT93RzS5aSYDJHyncmGLMT8HG4p4W9D6j5q5bhxRCvjBM16DqNrRM8yLCx5Y2L",
  "key47": "3i6TDNUFF95z4LwdmPYCcm6u6K2FqkeHeViGse3VHgSyzxirc2R9VahAuidPGmD47qq2xpZ2R6ZLfWajpx81ZauQ",
  "key48": "2opnG1rsVszXzoqV4o495yrh6FaPSdsDKPZkdgVGfGc3tysrH5dm14oPod4HkRDNF5ivWF2Hz2BqGGX9YUmBycPF",
  "key49": "56q3wB32AW1wY8rUgbQ3a4usULUHforaTHvnNGiJgzgcZq9dAbVRH2wkKmV2ZzxNvEF1ne3t5M2RVjCqiY2kn3LP"
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
