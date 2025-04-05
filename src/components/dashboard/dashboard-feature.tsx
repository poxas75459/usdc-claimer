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
    "3MmEw3thLwfiDqaFxcn2sTG2NDQSaG7UJF1huUNbLfBkcvryJMYwdC2bedBUAt7S9J7bDLCVaDReVbKj6r5nswsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4t6Wbr5XVLXr7UcBatSkanFCZ9unEsnU41ncnysiZGSiLCwyFKg2zmAuwi26MynQt3uKCXyfaf9ohZPb941ncA",
  "key1": "mU9jutqqvq7rBCYi83d8gRpPNGkjZLboxC3jxiWwb15TN3SQQdmwhCwzQ93WnQqVQnXPsVpe7NxZ1jCMDKvA3x2",
  "key2": "59JZ2FtWLcKCf6aU2Yy12QEe1Pojv3soxpuDwxK836Me69A5pagUyc1m5gJQVZ7tYTAFjg6mSJzCpREkMT5Y194E",
  "key3": "WkgWvzjC34WGsTZ1Efrq7HHtVE21FMzwFk8LGrVJwj6k6jXm3YacEPbnh4afjj6nTyXrafixmDPcEh4saNcTX9y",
  "key4": "62CToeWX9ouaQLx6qzHcVtSL9UDVu1xWkvTNvtKaPAG6kAReZtazguXyyCCybbLgUtcTGv6WN5KByL83yGuDUZ8o",
  "key5": "2N3UysyRRd3acamxZvKcv7wiNwPtvECceDNiCZGaSuW8htWekgm7rW1bkQRMykqfgddBZykmpawTMRHDBy49rT9H",
  "key6": "23XjCHopxNMTyXyCTuzRo1Q9WdhJ2Z95WS4v6Y6Z8oSfMU54E4wnBjATACUC1hxJijaSKi1P9eCyRW9eFMG1pMKB",
  "key7": "ErVm99YtpvrMzZRiy2vw34HDDVjAadui5JC1JNnJqtqmz3JDHtVN8WXWRNHYYEKhhT2k5DkwcdWAvGz5wkTVBLW",
  "key8": "4ESVzcsZiLyLAZYC9Mbe83KBaQ9M6Ve44ReRvNoaB9tMJCGjDLipSuhYPjeyGUfVhUt3vQ9haBFH5Adxeif3KHVt",
  "key9": "v5JSqLTxyARx3akJjXkSTznfghZ2m4kh65BkJ3cfLx3dn1zxtL8xvohoFRWbdPkJeiRkFbwQikNmiKVe4VZsHed",
  "key10": "4mMoLmGa9BDQUUtFrdafQZeVySKze7fAVgoTViSwrktT7HdD68NbG4vSL4nqk581JdW5rBzEaW4NTjoStTtcwM1d",
  "key11": "5w9iH3NYaAeeYwirnpNPp1ohoRbc6CA363wF5y1SgSQUxC57kka3tj6v9GhFaZHtrjT1MDQ18xZKoakCEKnaJo7d",
  "key12": "3qingsciRr2uqA2XpaReNpTPih2CVgq8dJLjVJHFysfAjjMxN5ocznVu5JUPZCy9Gn5ZXDPWBpWVj5Cm4pSJaVjP",
  "key13": "3LHqTCVRpVJafzX3sowjcMBqYeHG15rmSrzNbFKUCtBjiKKfwpUZZRub1k7ivKBUJfyq5PWy2iUpxE5Uc4ULDfXN",
  "key14": "4AYzcBW56hdLrUrGe7azNLH3WaVLynA58e9XYtHjChTH2dCDEb1HjRydUiJb1hVZpbMeDkXAdopXJR1dpUMiZJ1k",
  "key15": "57RLsXNHDCyyYzLDdzf44qWHriGURHYDsnEo4YpnLjHDhTzojCbxBgKrQvfAsNuvkJSKuNaetNNgAvs5n3UHCiU9",
  "key16": "2RKzcRGaUjWszfNJhcot6qNhPkK3orwJtovb4w7AE6LdyyKKSkEUJbHC3TQKNcmtGXQrjeKBuQYhEq7YsuMWbt7T",
  "key17": "5rgBifVUxEyzJHFq9XuSUFhfjCquEqfnb6uJxFxidxm3vcSDTZZGC1xtLb6CyMx2XNX9GHQd9NdQBSENPW5UcDtu",
  "key18": "5gf8pxnaft2a5M173YAQM1dcHA6PwBQgVVM1btParw6zLwt9JodqEB5zxsyby5rKjWfMsEwW3hbhcfsPEjkfPYNc",
  "key19": "5Vwgqnx9prxhRrtnQ5kCQ9zpCdzFy6gn3Yw7TMrVD7doRmYszhYGtxEdnhbj99M67YwS2NqiLmG6eMc4juD9iayX",
  "key20": "ZNb85WwNT7113bJS43yfwVHBgbLC5Tkx8PyHKmHEmvzcEsxVMa4YdqyvBb3LpQ7PuGupt726GfweesbU5LikEKg",
  "key21": "2WTxKcsKayAmJb5D2okGrHB9EYczs3DGs36t7fyZzPRtq7aH1x3XWw9Ke2ApXMe55yZd9mM83SjVmnfom3v97km2",
  "key22": "LMvg9mfdDVaEYwHpnSXeNjH8tr4FTLXHmeAcnyGcQo4vqx5CJZDsZdaW18RnwenbTi3sHsZbwgunZxi4jZ2hV8N",
  "key23": "4R1ps8FpZbKqma9JJCvtV7KwHqKm87hPWQMWNkDrtYXEa1MjMyTnrz4WmCM6scU7iuvAsh1yX3zm635qxt2aWmnJ",
  "key24": "h3Hyice7sDTB6TtZxFnAHK81Z3eQaWwcKtRzKisw93eA8MaKLRtEXixPLF1vVYPPNoCj3AvxSSNwEpGeQPLHVsZ",
  "key25": "54TRBJ7Q2wMNTvQjkgaF115ZrFbLhhcJpsW4Amr9vgWPMsJ677zqjdiF3cPFqi2u2qUdLByXSg32xtoyMmVJbj2a",
  "key26": "3STfyrJfuhNSUTuZaBwPnNf5VyWZcwKbFQDY1ukkPUC65mDWcvMhBUFmRbN1hthKdi1LJv2jKzdA6W6K3MpgMLPR",
  "key27": "2CWmUDpTWJNCb4dyhAPLeRx7fRauWFbFipjfcveqDBDo2UERGQVT4bPZVrKQexAVxWoYnxXQqbYaEotFmcF1umJy",
  "key28": "5yR78y7uvy2rgTtwuvi9hF1fxLhJSzfTAb6aNn3rvzz7XFMW1JnZpNSPtqcSqrguFGcmmDP6H7AeFak9Yy7wW1LJ",
  "key29": "3aPJDPwnhcNfQAaCxCsD4iT5GpV2ay8HaY4pQGFzq5Abn2nZXtpQVwHfAkRXJGRNJmxHV5tdSijJRhuZ4oQGsUWp",
  "key30": "2bTVo7Ky62N6ykoLY5Nr13miMNg7FYYN6EEh14r1WbidDiRLbuHHsPyYtvpSSC9a8uadP5z6gwYdztoHMyuz1PAH"
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
