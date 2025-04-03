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
    "XEn3nEP2gNTCH26wc2GVBFvvr1UxpnVbXVyAD2Yr8RLey65sJ2DHGNCcMBPEBsz7mncx2jZ87eAhQwon3TUMdiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MAgfDbGrpBZ2hjooaQTpYho8y7FLJiGqB6AWxPB6Pbmxcs8vMeA6DwvNhfJCVG5PY85ZTMHuTJaq5N5Vj2h8h4w",
  "key1": "2jjrELm43Jum7tfSTkSVgMv4NWzcvVEZ2gSYEbr1j6Cn9fsPYKfSorfzJ8pWHzW1wXTFY7GQgEgMXmD7dq7W6MGF",
  "key2": "5CDPcqPP1AgNV4rMWNquZ6mgKwk8ZYpMFDrKGd2p3mm1cWKCWV6aeE7bzfGGiurr3HvQCrYFTrdaDBJnV9FfxB1K",
  "key3": "3huRwxdSgrbkTASxJ2LiWbDggmzGtLLHAR7DPhnPqh9RJTAF31QeKFd9DuTRH14NkrEcaBUEKX9s3wKSHmz9AV2E",
  "key4": "4Fku7ZUqdF8VdjNDehRkX7UygE9Gfa2hcsA27pd3GnkhszSd5QkuGRqHTwKdztUrDYE8PZmrstycsmgB32EytR1S",
  "key5": "249t4GTUowZjHDrG14gbfxPc2LEX46jCNok3iiKnvgV5Msq7q8ineYbG5DWMXkehHVhe5jTBShcsWmjwJWKPeghy",
  "key6": "32EwRugoDw6EnthJLdpbD5QUaf53h8VEjZ94c32vfgG3JC5NMqJ26eL1cMkrr6tjUbf3s39FpUAACrL97PGRr7tt",
  "key7": "3VSHpVw73MWue1h3yJUhAb23qY1QLttVntmqjcNQgtF7aqkb5PGeTBiu9LVRpLhmit3Lpv6VLfv8iKFBfqt1wcf7",
  "key8": "5rrCLq4JRBENJEMf5DQvArHzc9weHLHHW7HkEJpTB3cLZhPBL8ArwcHY9tHyq1hv6Akc7oWamMpMBRHyzibz5huj",
  "key9": "5DGPUWh2BCRqEqt7qrmmF1WS7uVpbLMzNewNyfTMzU6HGLkgXjrJTqUtxZmwDvcdrA1a965tYXV6VNcKK8h6AoEg",
  "key10": "5sUkDeWXwgeVu5vKYBXpNDmrn6seYNn3eU2VhqGgzscaRXQ1H9v59XtxatEyFA1aXg5xCF9asrQ9QA3NW9VYG47C",
  "key11": "bwtakhGkxrhqtbLXRMD6aVxoea8M5ZmmiCbdHEcKSkYx5WrKWpZNmWNxyXmvENvR6BFACk7mQ4ed5CEFQ4ez2Vu",
  "key12": "3DkpUT4sTLFoqFBucL9LehWUEDCuYPEt3GxGrJEAGQXDJxFkZhxNNfp8hGjwiEhnpfboMqJq3myVMr4TBfwLvsnD",
  "key13": "1uVJs6vS2UGZHopSgVfeNYTYtsL1NU7rSSimaZHRNinFEJG9p4iz4ozpmsfWWVjWtPDLi4nN8c1zws5YVUkxxc",
  "key14": "3phAodRD4sBjuumFwsckDXvHVjGhNFk49PmgWyxZnoBE8ug3wfcqTvLxvWnJ3hKpnHRnag96RTw1D2snyhPoo6cH",
  "key15": "5T8YHFA8xPmejuMZYCxEcHGrsyiMy8sxPpAakjDRPNxET6zkmSB6mr5Cn85PntVtsQLtcpYKdKYshEvsRsAd3Bk3",
  "key16": "2NZhKkqivZ5BvVVaiVCmaKdePgkA3f6gSvtDzwjr2bFiM71VdDiYuT5d46iX2nqD8B2DHdnTy9di1McVvXj8MmJc",
  "key17": "3TGG3ZwzgwocMCGrsqh9Cwsmsh5yzW14PpCS3Kibh5W2ubBTe892hLjgfw5hR1LAEQMuFL2CR47ZshCdHnguH3MU",
  "key18": "3JLDdPqkQ78KQsmKwmu4RiHkGVFD2ShaRyncqFyAAaWTQZdEfrvqjyUqLJpPYGqmLs5Zbb3WjrnoKjyWu8uTAzo4",
  "key19": "3NY9VuePph6c5hCL1SY9AExSnXugeGtP9iHRv8duHSfozmjg3nsQEAX1CARoQrd7jgTnsUBsqq5Q531p2jek78Xy",
  "key20": "3m6bct3Na5QFXrS1aevBF85qJhWxtWLERqrMzJb3VdUpMNqg7p7KiyzrTZyHq2r4HC32BkxP3K5dbaPiigx7DXg4",
  "key21": "2CM3BrTcMaDC7JQ5aEem6GmrUok2REtGENK3QSmYCaMqSBU4Uf2zMModiYnAK7Ak8ET3u5hHj79DipGcATWPYifr",
  "key22": "3SneRbmHaxhP6ss2fJm8Cvfy7NRsobuayf5YkYgwS5DbKMghKVBVzREaGevY3jDGuMmshrhQzoD9K477jeBbaVW1",
  "key23": "2LYSWxaB912ykMCqBHfbej4rM13N8cJBkotDWy57qf7sXstjbY7tqqMGx1GLQETkZPsbUERPgyiTAWVXX8VwjiCR",
  "key24": "4YWbDAAo4ic7cLuqMkeEs2WJnG7mxiqVGtnDoNp6nERtXZgb4PRVvTU2RDTd3eFkXyuTcFEpzzcPhhRjoEyckjUp",
  "key25": "3XNrxRiyRMGbZmfTHibArfS38MvtSPs6sozr9HiFcnVSovQXcyGdsKPsNoU8S4LtuJsqi64coahnD37JdeGwtBa7",
  "key26": "2YVXR7GM8n66d7nUsqzsbdH5HAF6cAirrqPP7i4t4yj9G4x9gJ9MMgo1W1VcowqEhDLyPW6FZX4q6Hrr1krbAs8f",
  "key27": "5L8SSzh31oZCJHFxPs8PNawyY4WkcbmSmRCifZLa1JmRo5GNa2NTcLoWe4mDscgnJjEasyRJxPtfSqqNHkU7Ftxy",
  "key28": "5xa7AxZavyosXNYKMm5yCnYdfe3gGdoc9WYgswC8zeYVNgnRADT9AEAYMEbfcsKm24ZVtg6M8usu8WVXSwkffZJk",
  "key29": "2phY5adbS8pwoBCF8QQhhmRPyntXaJREvSJ9223iV5mxpBbce5SQBnj9pZLTUCik4CJRjZHNXLsbKdDtXqLaXELu",
  "key30": "5avCP119V2uaaNvtVEbR76Z1zgDw6UZSNuyuftPDrB5WU8P1T1z9HdSwGcKwZbqLBApUnUxqR1k4wpHCzKPQoG5V",
  "key31": "3uquSCcgMcP6iT46sLHQLzZfsSSQCprUNtXxMKYF3ijEfVBVpQoibWsBqm6Ja3bLivyZy1NnRVJA54fByoCzXfD4",
  "key32": "REd8S9sR31BmQwBmyW4o9BvHRzWFZWz4EpKsSDNzh3s3nBun91LofauhDjyDRMufkEHtVs2aRd1Rup338SKqL6J",
  "key33": "7v863H7CJr8VmrTTSVCfKd7rHuQYbPQEoesj5K6SyR4r9DGzYBtSe73ZtWzWxNn2GiSFjTZVbmTmMQ2D8oRwofD",
  "key34": "m7V9TpPCZXJfgtQnTuNEkNYuqkSvtgHp8eazkPwbHPeTFpw8oywVaaFNVhPhdRfLVekfgtwKf1yE63jK9pxfW36",
  "key35": "41fgJN38ezA46RE2jG3DpUmm739iLB86bVdLLTenXNYShDTrfbLauioz6STt7vfFFDnoVnyDettEa36PkNe5G2qo",
  "key36": "2vZKvojKFst5JFcfwisG5MSDZjXyWypZ9FsixMz7Y4QufunrmSi3LXT6k7p8h8zZhvihzsuzzadDfTMBDcGfb8Nm",
  "key37": "3MG1jGoWaVDsDaPcAVMuGmJE4CuB66pVdF6VQmAaYmQmNVNacxkyc1zF3ijKk8siQE9BSgztazkoSL6QfkJusQUt",
  "key38": "5hEu8CfbwZHSqGiAnZ1JV4XvUYPKTLKwtJiBUexvNiiF99eAKbjD35LW1cscanXtKajQC636Z2ZjGofdhsdjFnRX",
  "key39": "3AdQwbsLUun7XTY471dACzAw5uCuk4bq2dxA4hUGWv4HSiRyTbE2NRbFPwRqAQwtgW8dRxYVNV38HVvEsX8AYYzx"
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
