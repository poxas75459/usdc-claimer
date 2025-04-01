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
    "34d8nNAjU5vhH5EYW6AFuPQ989jKGmwGCEU4wXm6DVHd6RRUv3U4XyaWkg1ysHxZU8hKxbBTE72iXTwm4WM82KnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66JDNTMXTqrrh81XHVeBPV188La8JZ5rE4h1xcfyVhDJzfdQDTQ53MTgZgix3uVTeQteEQDB9FvRZc6uYGpeGFVU",
  "key1": "kCadFwEfwMTLQzMLF1zLa1RcbyJUTi1i22yMyJEw5hSTNvtnXfXgWzgWMDiMm48R2YtGAGvGoW28TyG6GGHJkNB",
  "key2": "3ju4qeXLgD8UbmNMWqgfAQNpTCqMZonUt7tQiwwVJMcxtJVptvWhkjVPmjzaZWnTLhMb2XWkYmuqwYE3D85Xra5K",
  "key3": "4LzfdnioTWt4CBehFhs5R7Y9SE8ZneXnCU5SoMV9zEBek4CJ5dKTc3iu1S13GDq8diwCyTc9jEoVYN8PZUFnfNoe",
  "key4": "3zkvZWtzCFVSQiabAWCFoVFJjo1pkBUf5HNxZFB5GQnNTdxByq37dfo6GNxqXiG9zC9JoepdUaEQbjZQQCVmwcqj",
  "key5": "36ypahT1whDHu2pLEAFDKYnk3CJQrcD54pkxgmAK2g9GYDVBTUF6eT8s3fix4C7eN8i1gh5PXhYti1ih5JRzj1PF",
  "key6": "2rGVkfZBsFPD36Mkum11UimPrT1ZjyTuTTiE322GHVGSRCC49TyqCF5NHpPFGDt16uvqq4WrYjocgD15N5SWBHUG",
  "key7": "519mnbnzfnm61rjouCRL9evhXnhQoRREC3whSo8TwkZG63zHmouT397SzvCSDHtJXyp9YT1sdwudT8x9MabAWGom",
  "key8": "2ccNgLoGfuzDFmumt48QHmdJh1fHzrS4WXqMfUDjsFn9kDvSN1Ctg6fYshTRqrABF2xwtCnGHGTxTuoqoAauXAFX",
  "key9": "3Y8F877qLfMco12hWPWwGQVfQy5s2twh7fWk31ksh6MFdB91EJtZPihuDrkF6mKkMeYQo8vA94ZxpdP6V415SW8n",
  "key10": "2MGJyLyVEwzkZKmBBD8k8ddFBJwMxDuMJySYbsNQSxKc1c2cFLT5qqBBzA9CX5RWCiTbQzTjtoocSU1WSRMFPznV",
  "key11": "3y5nQRv1gGrTcYqsvwbxxEq3UTdpdF1Mqy3naRA6nAsHy4hEcYpEXFf2RrYwho6xj2xHdFz6f7FrFR7hgXTwMwp9",
  "key12": "5j68o6Mo2jEXUjY6XqdzSJChWjq3y6dHao5Sn8BPkuhvYbWJ8Evt3JptUaPXTBppFhEvQrNVef4UfW8SnGNs6aDD",
  "key13": "55XLDgTEyhjGZUJKnX33hUTUhbHZ8y3Z6JRZiJYBMksjApnM5kSrQSPSsNTS4BBUSLXo9wd7m8FWNZTMxDQB44nu",
  "key14": "2oEqGMzMGzEGwLmHgNZtStLFx4iN7QvQHToQFCk23W3Ut3Bv7CnsWFyEGmPCUykRgnb6jru9J66ge8oj2vxQv9JG",
  "key15": "23AmUEVmyEfRTmN3yqNmezXQSeXsnnsMkqde9cm3ZtrmAqpFgzyNbAyaUm5vQvoqyuSwPutQekZf2fgYc8qCcRzk",
  "key16": "36xEkidSTjV7BDGFMfGWnbUejC3wxR3Yy5MvYgtSCkff688711itcsRAbvWwjUyNU2eURgjciNwW3nhgbtAtGNo9",
  "key17": "3CubVDeTF4a8LUgvFeWmZVXedcQz5KgdpmWGDkqBnEGmNR3inHaaka1ThdnwySNh8E8WCBoRBEixQ1tN18L2esTv",
  "key18": "4WYU2wNx1gmzZJ8vxmxUBMengHmgGdKBeuWrh5ycVmij6mXBv6gJYNArHiJov4PrSwNYfQRCLSRguXuQkX6aZu7x",
  "key19": "wtuDLXngN9HHUDQexGJQ2momNg6GQP1TsxPtq7WLCepPuBuku7d7Fki9482iddQBPD4uAimtJQ8kkjwQ7ueTvGx",
  "key20": "tR1eUo69Rt1rjovR5DiNRCuZUX6oL1zSqbeGrv3j6XwbsRogAdZvfSTqbXApsEZbZcD87Cx69cTiXpnbTDRk9ak",
  "key21": "55duepYQ53raX9xV7ZuJf1wJWiiWpDdrdZyLZLFhjkRFPzaQBd2ybshCFgDJursnq7uvyxbNQd4NdEURgD1hiaWH",
  "key22": "3CpLUioRJ4LRiGvfNiVF9txRiX36b7E8exir234n1ok5tdFrhuxPhn2mbzF25b7kVY4ipWhp7zAGEsrQmXsjqVHF",
  "key23": "4rormdBdkiBCgVdiZBDN1HHP4QyXPvcLnmSvAYZs5NK2PEhULERV2rzE32Er1HT7AQnuWwrYi63WysAij9TFye9Y",
  "key24": "3bvK9L3LuFvcuey2ctYCrVScSBuHANbYXtHVV24GhdQZq7h6TXzJux8jHG8W6Zw9uSp6E49dXzj9t9JhzBmSpBMS",
  "key25": "3uPYKeV3hD6L4FBxrhNiB9yR6swc6vWn8tV3W4Gd85KeefWrnwaUAZXLudEgDMB6ToQcnLtGPRbSVBv8L5HM9D18",
  "key26": "kokB3hRGa3xFZ1ZV9LqrVEMuVuC1LJwHKmUgonugiXwyfkcTYnjwnu91Miri7QT2LF13HeNE3jHXj4HdsthkriS",
  "key27": "2v4svXxkdgo8BPUYaMvzw7F5QEBd3hVCDfcWvRLMd7M6HahtAWrtR2TZUnQb29cuoTt4ZQ2RDhL4BXNXDfWM6DdH",
  "key28": "2MweYeWEH2jEFPh4dkccvasZaw2HqA5j5MxvosCczMKmcPpXZfRfCgb67JChy9wySDRV3AfFv5SruPF7Rqy2y6Mf",
  "key29": "5URpuQGwat728rySKKDoNqzqWSZLGwzf2x1dotediwaC47Q2zzaD7QPh6ok1RdELL7cJRi5FZfL7JXVX37gcS4Sv",
  "key30": "3aTZNjAZM1a5T95QR1Q52XMqkkhqqheFdMPYMhkHtT12bXjNzfow7Bn3FemW1SLGCDtVkPHNmy94mKCsvS8odYaW",
  "key31": "ihv43E2oCgRR7rbZpwUo7omjaXKoJQqKNry3MzXYDLphXYLnGcsS7ndHXDmskMqUEeH8pThE4topTPtXHgWEDZG",
  "key32": "27QCtjXZU4b4BFNgNLVawD8WgzXRcqNcKcqJKfvzokCBHyQiSkJDp7RFLH6wejfEAoySm9CrhsieDo1WzxYDFTp1"
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
