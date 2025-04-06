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
    "qkZZDmWdBFK5BtnvP1wKdA3NXxsVwKuiS4kMq96Tk2E5GJXBaqauaTUy2xHhWeBTqvV9kegzTs12w3uEsX7e4hB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhTmpDFnw9koU2mBKAbXMsifQ79r2VKZrXbNhj6BZrdrHZA1h2ANwu5AtShBK5akLSqxU3ve8Y1VCxtmLuBcYsd",
  "key1": "56dt2eunN8pqjSrdQozjtXdFeZz5qsHcGuN3sejN7iLiUrjuEd2gVajkcQxVLs3F2wscZm1CpcNya45moRxSNbuZ",
  "key2": "2EAgYzLTTPtwFvThcp1wXS6zaPWix1jSbRixuZtXBZxodELAozW52FSwhjwdkXF9UWnFgh2278zaW5okgMEuwe3N",
  "key3": "3WCmbLnWxjs1PjoWpHn21vtA7M3P8qENzLeaXtZAYDWSJZnkyYYrgJDT7obZP2op1zCSmCnpL547KEJFvV5d4Hc1",
  "key4": "3XSLwyBok1yCbyz7qYM5cYjzsdMfn5TofG2mnpdNfGMh8g11XTF7DdktFAsWwyPEyReAUGUYvGdLydaeNrHzyipW",
  "key5": "4nr7CH87LnBhze4tQvB8c6zq2hh76GqcvNxbAzP5f6ZpvQTgrTtHHDaVEQbYbx9tVRXZNuRoqjAvYznaAXxT1T7n",
  "key6": "36H4PnpUj3649gCrgpenGYsCcooc6ME5Y7yF6wpVcBuSH1TBJMy8RTnXPCysBFKoCfh1ahoKpnX9RHetsgEwUa2a",
  "key7": "45ntTqzb98wCsoKT7tzxfF3DsN4A428ZRVJNzkfMduPs3gf1VVgTi9ybWAuGFrowXtdUenGTxHezYeNhUfnPURA5",
  "key8": "2UuMNvtQJZFKgosn3RxHNvS8ykzs2LNGsBp1VbszeFs7q6L757c6DcUDhWfAPxzGGiBRYNL2usQz2yaaCbKe1cJc",
  "key9": "5p4sjnLgDvFjazUpKPWxHYxiph6yiTJzwmdbnJDMjbEWjfEQq1sxcJJ9Hms7JbPg2c24sdLpwHTC46itgkybvVWC",
  "key10": "5sPgQrU2PbbUhqnJvmnU4ci8X4WA8AQjSfdrxsGXqsaM7PgmicsGE626SHnTsNcwBJ7zwcv2u4dKUTj39T691L8D",
  "key11": "3ceHQUr3Df52WK647tVavYrNpZmv7thwxWYXwpiNb2bQtvqnhXo6LYwj4cBTWtGYf12UV19b22YBPqxa7TsWtmgt",
  "key12": "5r6wi2LgDKMmSHH61EUKkHGJcH6xgxs1A2kwoQpJGdd1D3c8QAqTH46i5NUYMtmfKabsMBosW1Wc1X1neNkYzVWY",
  "key13": "399FBjyqErkMfAQiRaQfWWZKkm1Po99ZEUvYrtUrZyu8dxm1ByhMefcqFynGr6b3RK3MnZrY6phqTHR3Xut4xQxF",
  "key14": "2WFWjBjA3mNkWgoVAzQYjmtRKe8854DomaZRyHykmBKnXVNmXaKc2HyCWYNjxWjqf9QQQaMKkU4z3eMLLBXfBWd4",
  "key15": "42KZYjqBpyFQfHQA4aFZAyboKa2YmVweHSqgBNZGCGCBfTSRdH68CdfYhdFksChAgDSyFKxYJLGrxM5DEu7benfC",
  "key16": "3yKWyi4iGqFygBnfa72C56j1b2gVRjVXpLEVAXEYG21JMKxBjgYDdrGxSGbK9YC3eqSSs7ravWi7aXoVZm3zQYib",
  "key17": "5HkJ8mhAyL31WzbDiUujukP7TG86LnYYu8uYfZQFU2dKJsGNUSzmqidVZktX4Y9KWiQDo3hBLDdiak8YLbjVcGLe",
  "key18": "8m1qcijuVByJS8jqPuPX8Gmfchp4ZUikCusz2NcF2UvHBCbYXvwiifE2so6FnfXxaWzH3Rw7nZxNzZdwsoBbfZF",
  "key19": "vFEayN9KoSUjxvXZ35zBg2Sfusq49nKEeAUz6N8s9oHha4x8hfnNhbc5bFm3o2GNjC8otYQgFf4jWuWpT8MjswK",
  "key20": "61gRRp6P744sZ5cv56oEmd1HR2G81tFvPFN9NWmkJuohGYPy1LamD249pqnk3eqv7SeoMiirXnmfAyGVo89ds1uc",
  "key21": "5LsoiiDKATLToaZkMUGZJ7xN6HVkm8bMM8jTs3ydbUHmhhGD3g8SSA53JYyP8WxhTN17hYLMdbpmBqb2cLJSGasD",
  "key22": "BMafY84voRDca4TSsBGpEGNdo8wsUKFYzcZsZ7BNW61rwcad5nZv86XBkuGmmwVNJN6ABsM2WhFYp7GZF9oRshi",
  "key23": "28GyxG7Y1ut7R4DyNqPL7E2wTwoGkP5xRZUD17Stjp18423itSdBRoE517AqkDNzrFziwVbeatctCnZSUzD1mmnW",
  "key24": "4rPBTjZ8AKku6qjRKx5qUUnYBDwSbSR8hMmSHVTEkzaLnMgzyEhBKeLvX5BN93scKZmu83qVfXxQkbV5ZZ6ozBhH",
  "key25": "2RUH4xTmWPPucMTi4ZiqkpfgbVYDkyCHZSVBwZrGcXca8MpwhUR7ardYEzP4Rb38SMFWUAQ5pNt62Vif35hbXmP8",
  "key26": "3VLx7hMxiqmLTtaupYMf5bhomLnHoLCtUTd21W6V59okSRuzy9nyHjzRu493zdXi6euy5nppZfDSUAGxobgCAP8",
  "key27": "49YU5LeofXsxTwrX4wdHE8qnJBNKAQm1icsyQPENBFeEE3tTCFVBgv5GV5aQm8xhgspCDuUiBvAzNBXKLdFVXmjD",
  "key28": "3Z4ZjqY3E77gVFXSCZeEVzSR7iBNS3URQ8qZD4G76xForiM3WtHpoJqzhKsrdRRCfJpgCpiJ2a1pDtgR5wKYtHBT",
  "key29": "24WxrSr2nSC2AwYub3rAb5SHDmHYsdNU2xGc88D6LZiddsnwuHodYaJdsueN61CfKANVCpCjB2LHLMSc2rMQ1khS",
  "key30": "62mxUebN7s3cRdXSY6gsbrZn28mwMi1NDqpG9D5giME9YS2F3GjNr2RGzzJiPLP55arhBYecgb1xabK34VyMFpCZ",
  "key31": "3kMFv3oYr5Jjkww5o5URj7RN8ubvDbKUhJYnrdNcuwWhwBeJxNti5TFE131ajBjazFRRxygKP6LKEJdw9hbUezF9"
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
