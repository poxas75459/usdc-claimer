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
    "ymHoR7icCURgbYnrGwoskQuBpNj9t8nevfMDFUGVnN7ZrB87ybadK9wrUQGL2y9Gnb81r7Q52MRHeAQu1KoQGp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gEVy1GxXsMx8CNjygSGs8o7ohsGfa7Hik7KybR8PisG7d8QMANCxsGj9PkEZAwYcSd58LhdjNaYdUPnDVs6pt8B",
  "key1": "5DaubEGkWMMgiSkQ6VNztGxcK9kXWuyEkPB6hBuEPurswBXXXMd6BvYXwrCf1VmzThsLPkQiSSyELdPBFQipEerh",
  "key2": "4DraAar79avHLw32BbjfBaniMAaXV4NTyLRDMYLJV44rUzDKQZughDHSJfwJVt8ZCAbUD9Nj7yiHLjeRoq7FHd2x",
  "key3": "3P8XsqNJfiVmgtyirFtct9YPaDGbWJryVuvSUn6AHJ8EnsX7R18CXiwNujcvuYuP8vGh4RBoczVwgjDNyVuikqj7",
  "key4": "46vLuRVBrR3NWfQbzAqy5NCAZZiB63D9cfVnSKjvVRw2VnnjNPeaztqZf651Zf7uoXtYNcKV1AH1xms6fvyE4BQh",
  "key5": "ZWpqb7rM1CdyBPsSqooRpTJnwhH2HXc9A23nMvdEWHweXGkNeimkMVpkRJiNP8FowsBEYXrwRxLUCznNc3G7xrp",
  "key6": "665oCdtieFe3aa7sFu42Rw61B6kHme3kkzAJxiiF7du5JG2UkCGhAvstxD8BfKBF17KYK8VRDim3pgda3KsVmASR",
  "key7": "3McGMTUi9a19vpDnjvgNorBMNfrbwDWb8VbuXPpS5C4xrsG5otdTNy227F1FbUVLzZxGPZD6ratcLx2K89Q7KDqr",
  "key8": "3tAiYFrKZiomMCzCzvcR42eoJFCSGDXdZJR3T4PMGa11gyuZdD6rTr8nHzYj1MqYqJHrJ2ccgpvQ1N5tCzZKepmg",
  "key9": "455MnWu7gtpuQT53SM1vEBhmGDy916qWKJGhACvE9PgAaDKuru4y3m8nzUvbM8JvGqmK4dNfWnThrkmNGc1eygd8",
  "key10": "4sR5G8P12NwpjoRBLryA7ntCE2JH74uSNaLFeebgjexSQUjHL5yoaipw1yMVbxd8hJXAJb6YbDMogz93LRoFZvnF",
  "key11": "5YiCfpXRN1BDK3Dte7ns9jZXarCykXoZZ1PgxnGuMt83DB881QPPsjXpdCquopwJDuqWFmf3Fp82szuN42xZEfYU",
  "key12": "5poaEKpZ1jHwLFVe6FnER3LC2bNBy5tTRZDtY7f2Hq28FvrQnCox4bLhTdZySumZVrunWt5CRTRdgmiX18FzsDUe",
  "key13": "v16so3hQRcVB1881DGosJoKhiB3xwFrRbHSNEbwxjwNsqUyqWZgDz6KbtvV4T5thPgeowZM1mk2WaBkoqBMXM6x",
  "key14": "4YSuZgkqnGnEgHaCRo1GEtDgTAh4ZqarNaD3G8FxrGf3WVm8VyWF67CLanum7fZpe8tD8YghoGQaKAWGZcB3hccQ",
  "key15": "2DZqtQ7ok1qjJLD7V1Xqs3vD7ywPf1eveUkWhaVeu5LxDzd8GCcfDJ5uAAVZ5R81RzVbSfhovoekDQbzFhsfRDN2",
  "key16": "9jwxZaVpLtaiqGfwdcmYTUhKfNxqbMupf2vEkGfC5DMrabTCS2BM4SKiqsaa3uLEEwcTmwepQAAccY3dz5bUY6u",
  "key17": "5vRtKZVcgotQZA5d9jpNTZC5vQzzEgeHQwwiaJh26rxwQdri8qqjHtKWiTnaFae88dWWdo2xdK6ndjmYREZQb6cD",
  "key18": "54kfFZV3KNJtzzTBap6JmJjBE2FTcY38TByWxswk9XMtPxiHh3fyTk9f1pUQrj3esixVQ2wqriyipQCCJtvMLkQD",
  "key19": "2xvz7XJbDMqhfbjSxWtAgTjNcujpS5X2Je2rN9eqiWRYWz85wwy5oq9SaWefQKL1zgWPBAeBu83qsPXgzv9NrHRj",
  "key20": "ZsDP5W6VbX9kWtKgBmPTN1MBEkyrTikXES52uxWYBuz95w7n3zKZsmCqtb7fTzKU5rKtBBufJ2xVavUUEfuEiAH",
  "key21": "y8EeMuG7nsFouDtfmHH5dkCwcTRz4bJcYYiuGvMLgnrS1dHsF5n4vmtxtvDDpSN4XVgtro9qDRd1SpuCCWKFCGi",
  "key22": "4QzaqhdMn3GE3HuUT1cwcxfr6dN8XyCx3gAAfLr561NmVLtxNRa7gxcSN7erKpQEEfgLEaMvDMNrDp3PnpvnAMd2",
  "key23": "3h26n3SwMXDxqYq7arkSBRabRe65zXJEeBDNyEt9rm4QtUEDrpfimTZb7MLRtSL9krNmWTbbou83jSxCZJofX7x3",
  "key24": "2mD2rc1Pi4gcDw89bEr6rpkymofeqXxNM36xRUgYsFQiiyWXF9fJ9ZVjwhyUVzUG8osinR5kdCvz5GuKKYA2rkYd",
  "key25": "yT385UKSt3icV6qU1snynwNpxV1ozJtaasd8JPN7ngAFderFNX4waJ7GeL1QvxcZjcxbeBHVUJmwQY6kwqAPtjG",
  "key26": "u6FRoBaC35qHU8aTxM2rK8nTUrxp6PCqqkrumUdKP9YC9ic2XbweqwBHSatWt21YXNHe3y14her2fwyoNrNGgiw",
  "key27": "3GtvqmravdvFu8gXAahg9z9BfBomb1Ca7nYNo3gDWWHe5chzaP12h4nzBSLw7FPb5k6wRZWBsDrMk54dQQfSRf5J",
  "key28": "5RCuvb2CjaqFfbyUrLLn7FVXfk4rF1rhxtgW1wh4Gcp7cHaWRu1mJgkdT9aNUEU9EgKrhSbXcApJsMddFMgGSFaH",
  "key29": "2XRhKARxUSxUAxaB5z8oirA2bSJbLuPeDwDZPKdtwGiatRysbTxb8QQBgVAM8vTMjXRhtbMUpQgqSLVorFZGRaXs",
  "key30": "43gsgLLFWg2vymenCvw7vbXd4JT9C5WLKdkkfkyA6dHJoFrbq4jYqcMjTcX7tUUaSXuAmJmdRgDy3jTqqHRnYLE9",
  "key31": "2fqKNg79SFNZoS4iyhbdiTEiZA2KjctfChoXrectFGjUim9fbutTUb31nDDygk5arYiETUfLbc3vVmBp5QGzGisD",
  "key32": "GjU8U21NrKgbFM7dbYdMY3BUfTGWMH2Pt9qsYhq7sn2s2pCrAXEGbQ85FJSEiFsByjn5gGqVmxfGtWHjbeWQJkJ",
  "key33": "2KeWYaZ8WrkyFFhCpsFD45GGFQfLwGJfE5jEPcYMiCD54GNxPWiwkoKJguPbzz7f9aoB3tRxja8Yb1ZLMpkTq5av",
  "key34": "3SSRVRiHDnu58oJtSmywYhvFPdYztjxBK4rcDQ3LKW25NibNfXXDXsST9Jx16ZeNpKCm9y3fBwDwH2NMBDYxssiA",
  "key35": "3tRsymtcpbdUU8uWNMYdM5pw2c7FaJFJUTSi3rqnfrsQPnHBqVgLU3Xhya41nS61Ak4WHMfSaz4nTcowEestTZar",
  "key36": "5qKyxo1c2rbgV8ovjEvVx3Ymm7fpNi8KLaBymget8xYrT5WUsmBdKY4LebtLi3weJsHqQrzXjUN2bYmHZjqXLDFK",
  "key37": "3ELLFin6jbp2JbhfcvACboAkNpH4Ee8jZNY8kBCN5WJcZW94cHUMyyUdtFNSS2V4UPxpbu7PZsr7YHfrbeLz3a2B",
  "key38": "2ygdHG24X3KuBLuL7YJsu4pZkkjxL8nU3UtmD4FVhRfksYGbwPHBtV8zE8wFhUR8LVMoeYuvbXqVJk8JfdVbVxgk",
  "key39": "55sjqCScsyDxSqUkcUMkrouxSN28UfWt9G6AdCZZGa1i1tYy8FwLGKa6N9PFaz5w1xHD69eS88s6XaBEQwvtgDwx",
  "key40": "mraRWjFSm2U9JogSEHxFD4fd6CXPpMiVN8hVSPGeurEVUDHfasQ8DbAJRBNRNyYvcTpu1GdVYHxLgt3jrjhwJAN",
  "key41": "51WnMKnqEBLiSDH4hmdk81L8iyxc3w4PDbKdHEXfrLxEsjoo5vwG7gn9jDbtGAashqXKmZr3CCv62rGJFhtGne1D",
  "key42": "3uuhuDuxpGYG4riHV6xrnNQnJMwidPdK9GaR97GCLRcEVcyBrVDMhqbFJScEtHwUkJ1a3GyrHfWFKFS4KWhbo3xs"
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
