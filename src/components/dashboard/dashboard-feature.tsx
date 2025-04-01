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
    "RPaTGA6DzyBBEBhcgCrfwUyjWKisVtSx6CddVXpUVGfCcBK8xMN2pcrK6Sm1Z33BFkbPDYMXvs3DyifYb9YuRB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZB47DXrDhHrBUbjwLERYzkh6c2UmoznRJ9VKbvcRJkcapSJBLSmWjLAmVW3Xx9ZTmtM39hqY1H1AratfopgTpYV",
  "key1": "2fwpPPhtTW53vcURhYHXUgTEcbinybMXgbo6ieZgV8ScCenCPKUwkppbLYmikNGPSN7J3SJe5nvoyULTwXptZ2kR",
  "key2": "2TrH9ELnLQHaMjBnqGREyeSpZgfUCLEBVS52Ri1S2ngPmgfni6HBtDeiTCn9jCRHQjt1YdURJ6ZGbqquvhCnri1b",
  "key3": "4ACfgkH5HoJsee1DUvx9XjnedD5LfL3J1XuNzYc4k6X41hGNpk1rrwAmm1TCoMaPRvSL1bNEjYcYYVjXyaHuXU52",
  "key4": "4C4QzEVjS8BSNT6cNgwztmraRxyxAF2VbkxnkFM4u37gZML3w6vN5tA4CeN6ZiFaQ7E4s6VBziXgiFaS9vnP2TMT",
  "key5": "34xgCt6YCL1YnFPzw6PipepEVRbgfyFYArGJEiKCtgh7smZEjcSv4hN7fKHB4xS1wLWGKWTYVNGSmyHZJNrQwshr",
  "key6": "CUmrmWVdep1AUn3sTRNzYfxFipjmTUmcQoxJeZQ9xa8PcRgENVHhWuWvTqx4BEsn8sYGXNUrEGpFiihRDqszm6K",
  "key7": "3CYMYzRYGCFG3mcNBqKfqeoUNWBDVKGmNLsrCRxt7DcFVcWD3f75hvVHjjdGVgvWsmyKr3Ew55drLN4jY2ZrUhMT",
  "key8": "4zHam5KyGf7Br8pE6HCCc9S7PDjh9uXqtBPv9bhGWZthjFJe2kWVvykbqrigtU4pNSdLUvtRoxkg8iWkCjMoVmq8",
  "key9": "5GLkbFTsvPAuKPeYt2eSG8fSKzMKJo3nQvu2JVazK41USJdQSTup4uuYk8WTYiTsxQ1A9wqdgLfsHaFzJjHPH3gY",
  "key10": "5r8AnT15tX35Y41TBjaLz6DeAUnaMoLAaipN8XMKtcSwu5GYg2xUWKsDrBT87pxANpf9bbq9ApNGnWEjFADg4PZi",
  "key11": "62HRxARm7SKvFVsjrvQFS14KKRSJJexg38ktcGszGsFdcSE5MpzEBxV4bwZ5VpLFV2ybVrxStn81nQr28nmyBESP",
  "key12": "5QE1gkD6tYzAjqetkAb8YhWJ7PkU8eV3Ff2WVb1rJQmfRK6fmyuArKHztLorVXw3yoBPzJqk1v7qYGMdwhi2yGYM",
  "key13": "6424eshdViTLFHgDw6bAoTQdknuzECLnTYsCj3fWLmT6VZizaKhyAanhqpnCChV8DRskwJHo8ePRZTk2zRBgp4Mq",
  "key14": "4cKkEBriJRFi5HCx6NGhhJvgShbFu3X6Y3QXZeBNfGjsCWYLKtrmZgAj2cxZzUdY9XSHp9c2dBJmPi9fcsSeJHBL",
  "key15": "2pgRm5dAk8VFk5ZWPbRGoLmb76icyx9HsiiTWN3tD3guHsY7z5Vz254Ry9BptRSBnFwmqH7k6eRUtogYsgmpzGpW",
  "key16": "5MyQ4JvdxZzZXzBjseUDyg4ei9uWNBTdL85inS3fgw2PwxPW3bfA5Pvp88wkwr6KsKR6sxXivKAgmxTTzFysQbqh",
  "key17": "3SNm83GkKTbKKZSt66Se7yqmk67TyD7y5ky5wUye9e31sQfixJaywofQrEzE3sKfr6Zjz8A9isq6WNhPPWXmtJKC",
  "key18": "2hGaTqSSh7xRmX5mNPjhSwLuDd5rQgNgf6uMMtK2cDoGTkyYantjeTShQfX7JWX8rkFL2PwexLw3ZHCkpt32NYjm",
  "key19": "4Ywqyu3883NUNDXLJkvvgbo3vckRsWL3saECp1u7aB9wLAiWiCCHzRne2raG2D7Nq4YH3HR82iuxkh1txwuMgcPN",
  "key20": "5Ldyy87h3QpAvVH4LqnV1D5dAYQLi4LLbjtSkNr7TNkhQGEVP7pWm8BKddRB5eUcYW3sqoFkdDabeW7nHzQh4inm",
  "key21": "4otRZjDXmfDtRUMq1GtCBDGSeEKjXsHxTxZRxK4hXQ9DJR6cQFshvsuYZKA1kKQSYWDAqHqEEShaUYq2rBrxKrxw",
  "key22": "vLxtEsigP4AMMda5JXBhxNDuRuR5YHD9DRqZZw8ptBtufKdQPySxADKEW3AFyFEfAZNEVrfLCNopXJ2QnxmKxw7",
  "key23": "3GD6KcqDMhtA5i7mMJTsgwAGJWTMSdcdCFymt5PGeHNZhQ9Mr4CwfoAxgaYVpaUfoVc8L3kATssWVwZSDC7r5r5C",
  "key24": "ahd96duzJYzGgCVUcMH3PYmvaScMgpzT9kXzogqVbbQYZFpkZew3gymRYVe46x6ZAURjvp4fck3x3cEH9kJTq5f",
  "key25": "5KwEo9NzFzXkiQTBe1x5BoT943gmTto2LgheKJTo7RRaDaJJkgUwQTh3r5uNYEPL5kqBRgjF8c7xAatzd2AcMee",
  "key26": "5bWKF7AEbyoTp9UXVsTx4qc26nUeyuqUBgvSDTbLH5LarbLyD65MAso2BS1mn4VBLShUdKf3hQtmdJMEc6Dnka7B",
  "key27": "pYuy3UJ4zXnZQPpKULVRUX4JAxunfttRyNxpaBK1o3iq34JeMeahTZ3CYWzLqtc4qgdGPsjXCCB3PxF7uHsmNmA",
  "key28": "2nBe3NEHyFGzVdiXM665AroQVJwt1XrKKoYJVGYKxDjM3aksfWEPpie7NZyVF5JF7JKWD2GCE9wG3KfuNvb3J6Dc",
  "key29": "59ikk8EwkDXdFEhYWdSD8sJaPEex5VaqDuh7bG7mwHa8T1ysQ8CRuKqjD1WiZ8sjzzBhfPQj6SgiUoPgkLEaoCPX",
  "key30": "4bazwULGtbqSZ8dWZKJz1YC9rqzDWWcrVa7XeNAZsWqE3HQuYSjWU1Mje5smtwgW8REZSgU83wQLrs95Re3ZSbwJ",
  "key31": "egfa3An1QcfAQK125fwA7GsXGfayzgFxVENSZ4M324jEK6f7vWuSiZRMv8LFo35t7q5MdSKJXSGo1xH49iovfP5",
  "key32": "4D3qBUtxjJeRGBErEK37FycDNRsUwEXomDhoGvs9aGmue8wKAUTAotxHofw415yX1bzMQ3cWpNc5LHPSq3nYhAE",
  "key33": "29VurpZCCB5jv2ZscpEG1aLXtvVzuwFofUEUAeanzujMK7Fi6UVGWeBUDcsGYqFLmhteZVZqb3xhuELFMPeA2bRj",
  "key34": "6259M1c4mUnCbZUY5MZRtzR9E1Q41WvYWnznSRReQwV1drzSxAf3UA3oD6KA1z5x8RV1KMVoJuGZMiTc3i37X5JF",
  "key35": "2253qpgTieuP794w45guwPhjjWdjBCdgu9SHK7W5LTV3HwWbKaEMxNZK1EFHYB77Tao34RjYEg5689gJurYjmkMk",
  "key36": "3vz4FJthHT9HuP4WEjbgESXk1v1JZDosoCSzQxXBEj4CumtN3EPurCJXmvZZBW4tm5nLQBKcbgVSnVsk3AvRAzmD",
  "key37": "w3cAtphJQDbS1JfPb6PZgRULVRTZJhhtQVyfiokRY8sjyd1MQZ8BvWjn1oquFsKbeuiEo9aEc2fzKpMtxW5aE62",
  "key38": "gJHEf6ySxqQioW3oaEaBHEDcaC9SkdfAPhXMZqCNbbamjqZ1LEyNC6w4Cw3CDsvPSw5fbDuWCKAznGg6AsixZCR",
  "key39": "5f7AjYoLm8zM7x2hsLc3mTK6JsQ8hbS1s5vgiMkr3vpqWCm2CPY51azmMZkCdBsonCnFVURF4yeNYfzDzkxganH9",
  "key40": "5LJxo2zokmFcHtT975zk5ipkYNM78xrsZ5WPGc7tYYCi4fv6kRE6ZeLt1XT94eD2Xntvam6fN8efuScAbdosy8fR",
  "key41": "5x2tSD1fuRKJDzbqt2CuKtZjJWFZ9duE9Un1YLCfGRCkX6y6YmJidVSXqaKUia8JG1PVsmcx9jRhnFscdT2tB5bm",
  "key42": "4v6EgtpejrEqfcM2S1jgbk3y1GqEfpv7x84Yx8nsCg68yfAD64d3QoyqbQzACAR2ddLN4pa7XGoiR28o6rmsy5Sv",
  "key43": "3yc4tJgANGaesEPppf473Tn7EiQsDfBidbmTyPmh1NaN4Vmi1EqpyK8qeLyrsiYiQHKdUtfAyoGoZtjMztcLTE6M",
  "key44": "5ohrKTG1HESrsAgVs7HNQRYQkzRSLJ5QWrKk8A1urbLeM8m84cBgYCGSeDLCRMhSCKFjp2kgyYLGGNeQLbVXQd1g",
  "key45": "4ScwSSBRyb1pLsipekCAQp71zmMxDmqTDNzwtTM4vEZZRjwwXAcqMa7qnkB97FkdsSUKyQPeDz9EGqjHkgKoLBSm",
  "key46": "2iVUgfoYuaBKbNTbnSeFyavLsQstihJyRxP25rjbXVpChHriraqnMC8KXsH35izUfDMMBXepZs72AuAeh67pvv2f",
  "key47": "2gem3LgRm1rY3C6BCb8pGvM6ohvQHPTCXfBFn8tbnYjG8JzGKh68FdJxDMQLhSzqJ1CKVL9a4UXkUmhSrqSVD9dL"
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
