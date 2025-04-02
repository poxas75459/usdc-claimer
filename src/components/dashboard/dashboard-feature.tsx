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
    "4pGseR2PoKt85NniGVzwYYUiSqSt1UxmQJm74oxs7kVumLh1n7mweXi5riG8bzBDv96hQgWX14Evg1XwZhFR66xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f2CJkyMqYY8VUQCn69TbyE1em8arhkU6LBHtmqtTwG1qooJ8n2me8YjiP9tAXeGFki9ot7t5G4cNtjuZFYQ3hU6",
  "key1": "4hDCxipWGxoTGKL4wkgEwzKgsr1usPndwTJrHkWDTgokjvWYASQsRGbYTxXLGAbv1c51aNFv72NdXqYaiEQQZ2eo",
  "key2": "4972eEo1yhGbHB1CGTT8uWEd9sDoDQEcRk2px2ku555DacUrgWnKcp12CPTwakcPqXeDJ5yZ8WSkW5VdiuHFAg4f",
  "key3": "EEGJXReaY3cGgKT29oUMStAEZnwQu5vBkyGiYNN7a9kRPQbeEafPKY4TvpvBUyyRPXsVDq2rhAmLCGW95r1HXkD",
  "key4": "2yaTxukeSvGTgdBjJZrzTksbTn4roBhu6J72Zscw87qvsiSgs369xBtb5FNXeMV92nv3GxKNPpBY8ZgZuBykgixk",
  "key5": "4XhxmsFpaPAWoZ9gyrUCzhturocY9QbBvWkJksHPras4wo3SsYK6RKsThVWz6P65nvRSrDM42LYmusCLDiCqqEDP",
  "key6": "ZvaLUNyJkTiMzgzAhWn5GXuC6CQSghxuVdPqwftriSCUdMD2zmt7e1mS3ZLPfWKdYMuF4gcxuerpirTJUCrjboE",
  "key7": "5DzUAuvuvKKTtFpHR5xs5mSboGTFirSLFAxguou1u8QgnKUVsjPzbdHvSbHUHKyWAdAdFATbMjMzMUubj73wi9jC",
  "key8": "4sAcmRqMeG8875yZVgwBMn6DUu46AXskj6XVP6aY63CDX8CxbGJ32Z6CG91UPN8WzKDsQuNNuHpcDrTqd71krXwR",
  "key9": "2xPLpuJxGfkjcRF4S8gWBJDdbpPF78XBmK5Xs6fg43q4fHhm6mycY2W39bqZxZhTGHpVg4Yvxq9PrfczxuyVxFQ5",
  "key10": "uYrLVgH3fFyiDEyxYihdwdmEav7T3SFTbaa5h3Pdq2RZsy3NejLvWvS49BDWY6iAvwUawcX3nCqsiqBm8b9gTYp",
  "key11": "3EE6cBZA8q4di45bdzDKBfcumjq4PWcztmQ17n9VMwF8vwPfSmm3bwt5qYhr8rPRVVwsiJEbuiVf6FsoNJDqyQFJ",
  "key12": "kCncnaPGaJoxdLnbpZ2PPBzAoKHrf7FYYbn9qQb6A1hhQ7v5TFHnY6jDxC1oazw9U78zyAvvJaqiJ79tjCokKdh",
  "key13": "3KufFjXJEziXUxgGvRQECxkkLxfG5pb6b1KXYCPVZDBswe2dXJb77qtGegbF2NzkGfKcT96UnATeHJZcPXJkS7X1",
  "key14": "fb7fps6HDHsv5m4qdKsGX6L3x2VqEejm72fSnLiSNGSi8zDL2bcSnQg4MzpHV1NvoHR3KHAnv1KPgTY7LwX5SX3",
  "key15": "5mFCAQpndQem8UJAfHvCrBX51UbXf5R9cz2KRaTDTSXyt2TD85B21oq3GDKcUTDaezYdXYdYKDyNLpMBbCcaHTok",
  "key16": "3rzSBYFEXm3oRdyxrRVboymYHBxVJhnjicnTw3tktF2nHknkHmFq35NmvLPtG8CBxQTes3GLcYTWtR8Ybxa2fG3D",
  "key17": "2UrPJY2L1aDnhXZuAQFtoM3rNSh6BouHj2sXk196htRSWMa2U4GVrLfDdhdmTjcysG9ptJnvb2kYpdaWRftDUx5W",
  "key18": "5iHdgMrtYSwYpDCF8AfVmeQ6wB7rGXTX2ydCHSyAXnH2vTFDoR54NjF2yispovvQDxcGWQVkAganUTdWJZQp1ZQP",
  "key19": "2UEbG3KEFxY8Lty1TCLL4F7Yrc3DjMSKhZUMzVgqJe9iB6GZfuJiDpj4GnLVQmTTyjboW4wZdDiJvvueyAr66cGW",
  "key20": "5Yk8zeDQcrwas6jydkc4wyeBrpep11amFuR2TrbimegDsgchYBUQJ1bRMDFvSzsuTFe1wLSNKAyJRKesiXoZ6bcc",
  "key21": "2WgTFEUEZ4UWZadTqfozaWtfuZHreGppW2iELXGd28VyoKiT2BHkWFBsT3Znv9Y4qowAJ3MKeR31pY6yFQPkHddQ",
  "key22": "2WFYmuBNdoUq4AAHWQwBdJgofwLJL5owibQaAgTwXUTiDsUNLDzZVZEJ8M4zmtsJQddH8Bp9vyjBcaap2XVEix1x",
  "key23": "5Q3CZ3LdXh2zhoiRoF2KCfh8cTyBNbHtVv4pgt1BJMwTwFNEZxipwy3AAXYWo7CUi4u91Kgt5UNVWx8zrDRW8jHx",
  "key24": "G41Jp17f8ExvibwpTNNihqLHdfAhpCwB15eQKkV1A1AHdcmJbWxsgyocdVcThdZG4mupNUFU7oRsKuG6Qm4DvsH",
  "key25": "3ew2mR1eu69vuxiDc1JZKHAgcXv4WxphCk249xiXdiGvTs9qjWw2Vb6AAhYjT7mWEKCwNmKct76YqVqTLUgDV1d8",
  "key26": "QXHgRiUTnMCd9u56ZEKPVqa5HPQ3wfheUC7HtG8S8mDihGtSDm8JGumTsP1zgTfWg2SwbV7GoLTKczhoYskbAev",
  "key27": "4gvKESX6HE9EaWrr5ewNjV2Gq5SoqS79VGbWaqjZLG1BmQZwe3njzPjVqQjtvd3wXamkBLXyJUrmR5EBJmLsva7x",
  "key28": "46zc1dYHRotPLz58MwKXWaVUa47HwQjKvLQLv9Ws6mZZRFPH87nvc5ercHtDEBDnExd9pNaPaJuc11UP3G21MHag",
  "key29": "524PnhjYN23GN1SWKVHeGTsyCao9saM2iSKMMSMHRr4SFMK5wBjfh6vwqFZWGY19LUw85AZQ5EkyoLQwb8GUtWps",
  "key30": "5kxw1FSnh4HEDK5LtnvWxxeMq2PhvGSJVBcbMFvKu2muqvv1d2A7TAuhZgSJfFVbptp47SMYugNjPcj8XFBwGred",
  "key31": "22XHUMPwFHEa6CwEh5deDHpc5uUNfXvwDqbVPGiyVLPgtVaeDGfwgw7i5rNmKboyGq4TE5BqrbRGg4ZVgoQa5CUL",
  "key32": "5B7K6zEUQrUvosAEsXMCNtru5ooL36y5i1ZeaXe9xGyry8tsMe3wgasqADNBNzAZX3S3weD3sFSWBbseJibzBg1m",
  "key33": "3w3sJTG7pagxg7Cb1QxGFekdj1P7RtdCvwj8L3NrbCS22vizz2sF5VGBdh5CnCX7ZZBo6EY91WWCLXvHNgu1dX1N",
  "key34": "4SmNf4ruay74dbD4891tApHkW2RNUVUKkS3xFrKA7vDome8h7ut8EiP2HSnKTAiQAiU7YkbbwZQFd6H23cBhRG1T"
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
