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
    "5Sz28VeNZdLTFyFtvs8cBz7SR1fphoBQygUzEJwjynj3eV4c5wMujVmzw4D88Gq6tThHc9eFYMEuHspLKTREEDSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Km6n1D5LHzeYSCTxDwQZav45nWWgWQt2MyU2MCWCKYuxpajgpnxBfHMyifPQYMtxPkdE6wZpUgrzN3dneUXh23T",
  "key1": "3PLhD6sDsxUbe3zgtUhuQiBgKNTEAGQcpExMsBnpBri6ZqKNKDYFpBXT1BMY1j9YXGnZumPcukV3qEvbnFCVhSut",
  "key2": "5j6nAKkoFXdww52JZLykETErYLNCZ8ehjdpFVcM5RzZX8cxpw5whntBN5fd34eHRxj6A2cAG1ntTWvDEDNwrF3Dd",
  "key3": "3qJseQLFhex2twyX96VFv59bNf4PQag25HoGiekrtzRxiLw1BDfSggRpY7fkBdJrG3iK5fk7rZ1SNJhMFGPk62T3",
  "key4": "2amLKoN9h2xQPA79sifScp227G6jVBKL7zhFpbGsfQXCV4UEdMcC1o39AdYDVp9RyETLkJZpV7c1aNQSXomg8752",
  "key5": "4yPvo326fHHWao5mxd9gLactQVuUCw5xXEmK4wf64wvJtEbMEfZiFgxmaN39g9Y1KNHnN41xaTibtHNzr4BdjR3u",
  "key6": "59E2jJpg5f1GLQssAXCnNuY3sWRe8Asxt9k6p2v9TQGJfLLiJMJwdN8QdiVtnJrdZUamFeVUmutNLhDhPf53Xh8C",
  "key7": "2FeZyFFeHjuUaCTmyVRt4xR5UsV9Lim5ppyxfkdLKxaaBtEt6gWnebBhUUvhiS7G6Lgshd5TKP5t2RkV9yEiTkdz",
  "key8": "4DMy8t73s2Bg5pi5rCLpJJFNYNSyrxU7Q9PEVPE5thvmXfragMBZ8R1Jnd75KRdHgLhppkTEUEoqQM8wKbi6ZaJb",
  "key9": "3qk2kyN1qbavtVBPVS8anB99RoiacfqMCLgAy1kyMQLLwS6mN8Qu2DMQWRGazzsCq9CzXRCWjM9zzE8XfHiGShtQ",
  "key10": "9EVeZs4f7zKMMMMSMHRTTNBShGmuRzh4knJccQRQvZaLGomR86aKd1GZsXBWpPqAECxcquEnPbXyScQboiiCpSE",
  "key11": "5QBvBxJ6CeaZdkbSPrjHuaJPrRS5zWaeoDzC1KqgPqwFZVzgMDSwkvPzmasfK1u2yevYLY4gsH4kK75GfiCKowwT",
  "key12": "5hF7QKyohjz5Ld1rfss5vq9j2CeUXxYNZ6GYUf3cpTAfZ7nQVYCCNpWRbNYQEoYvFDvxE4YTeswA3gwZxHZ2RZ5i",
  "key13": "8LefuhtSYMnu6ZfePFPv7bvdrzZnKp9H1vUEVT2g3VT3EJDc6X2jSzHTPVM85viejtJMx2rTcCYixfksYtyrLXb",
  "key14": "42hDchKnCDoYciHSRPkHK8TZo2XEGLLn6ehk2MscUGZb4WyQtaiujP7HFavJPnxEp6EeKiyfTeixWqWdJXU92SyJ",
  "key15": "5cPTWJ6h6akMYzwvnx3B2BA9bNMWKeao8nxvFJPpScU73mtHk8RifFMWk463UFKNx6kVWZFdYst11P64dw4h1DA9",
  "key16": "2nK8PdUcUWNmeNykpfpC8b3718sSeBzKaBrDv1xUadDBLkPzAxQiZoiDCq1J6Cu12f2AJ391wBWDR2v46ePt3zKM",
  "key17": "5b9J2mwYw14Cq3A4HXFLK2YfRiohpHEUdrSgXqqRwQ4R18A8JBrDhU3wSoXjGbxQV4rd3v3YzbyHdSq2ZEtuSXRj",
  "key18": "33ePLMmnmKJtCSiMonr4FShg26kKsNasAsNna1BdysF1dBc5QRecGuLKeDA8APkZph2iZmvArLCzp36f8FjUysQD",
  "key19": "HSvNX5aYf2bX5NB14wdyyxfLnLSCHGRZTEj8vTiybFgVuH48uF1UHypcsCwHEbcrgBP5a6VLqjEK8cGzsQh36Bt",
  "key20": "63y1dyVVbdvd5X46jD3JBueVWmW9M94aoJtx4uFdEsPjmhkLxTfSMkNnniADEHNEoavt6VA9BQaaNHnbkaeoy9mn",
  "key21": "2SjKrRExEyp8e6aKH4FLEX5TYQFDaBU5TrwfbL1JmpLsUxQaKbziafGYnoxowa2fVHGJWnK1Dc7P5bQKF7Apzp32",
  "key22": "266j7JvPdqHfkW7AVcFzonvDeQNDuHbW6BRe5r8jc6HEmLMufrainm9ZJws7B6Nmp4AZgDsdhhm4hXocfW6LoQkY",
  "key23": "3NX8AGrjxHhiNc2sFsv6zD6LkpGW6MoVYq5AdXDrRjRVPCivQFx8g7Ef8QmgF2UJv6nGExYUQ43nf3tJbmNwiv26",
  "key24": "2L544zXdAfCNR7LuxeDX73pUh8XuDgHQDKviiqgqxjH5p3wovXvacD1n9FJyhXALBhsLYSbZTb3adUMwxe3bdq7N",
  "key25": "5LuEX7iANm9mpdVcgyE55waZSfz6qry2yMDgBH9oFWKJapfg4BV18XLbzUVpnbba8pkgpjVZxSGUaWUyh8Paqw5Q",
  "key26": "V637qzWiaqoEyu5U1KeYoZKFT7ya9j23BMyaDCKgVJrN6rtWezfqcjypcioinnJBNG15S8qcVftxsYvLXpCGq2m",
  "key27": "4pCdqk7K71iSrP1YiEr1SfkLLc9qnVyvbmAgSiMMFeDnxM14pnEectS5KNZcBJj72peeTYXdYb35dv1oMYq1vPVB",
  "key28": "5SCURkaqYhNYhjWDisx4uykugybxft35AJUEE4y1xwnVWY91ns8bo9QTKfdqzikALZ5etQK3sLKQrCdZ22bm4J7j",
  "key29": "5tHWA4X8gXXwz2jYhP4Wi16qfvfm23isaNfApfwo9rhVM5AkgeE5W4eL611gtdaCJzFN7SCtbMwy553WJhwitbZK",
  "key30": "34HoWEkjk8wzCqpHA3q6mcPFBTaSHh7Hb5yNkqT8FSiPdPdYHNrwAFHtx1BqUR5SWhew27QFYm7piP14BikH8DUD",
  "key31": "3zvaqkuiU7E9wUxis29eSUCoirnGPKY83jfMARqjyAW6LLLXnXbgS4UC2CFFXwzejwg3jxvbVoovguuJM2PvAL4M",
  "key32": "28BF2uhJKMwdrvmUrBoBoG8QbAg2QpY74MDo7vt3NbdgQehJ9jw2e5QJX7PaBifAoA5TR9NiqTKuYLhKrv8ziTjb",
  "key33": "4uyaPfA84n9Ngp3rYJ3evzdCcCDBVdcxMcFqvQvNC6kD5cMBkhGpQRYCaHYL57RTwt7fBgDkKxkuLNpGDDawU1Qi",
  "key34": "2NzjoxqPW6aDndn1HP64JbSY49SYzUFqFDoLAdGBqVhgf6GGw6sUHzg997FPLdJ6NwRWC5qc48BJCKw94u48GLF",
  "key35": "5aDoRF86RLnet7t7xiKrUg1Xh5iPgrSP24BqeG4MjWHQ4Zg7YYnMFt32kwHQNjYZnP2H6BD4Yn8wiFdmtdv1bkgm",
  "key36": "4ssJFh5dzxPhsLCjXev2dsuKwSnRT8hzEX5rTV4cbSxY6D6ummGfLmULdHtaEF14bsyFC7wZu5dWphN88fUBDAvK"
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
