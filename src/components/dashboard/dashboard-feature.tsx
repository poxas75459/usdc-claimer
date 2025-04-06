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
    "3FUsxLWXSKTuXrRMA8sHmTJ9yHCqb85xZA8QaUzdcCjJEmMDVitd68vfyZd4K5CtMKsPiydxyMUxdpSSAhLfWsAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ztuqGeu1T7eNNCCQhePFSHLbg4JVK6cwvYs6XDB2pU2KQbZjkdZR4YnY8D4T2FmNQoLTcTR6scNEXiZUztmkYUC",
  "key1": "JFSMCHJRgzSeMGbK8Q8TV9ZRYzF7qsEqxmirfqm43U2iTXTDc8tP7XwTnMggz4jTNcg8dEfxoeHYyBJiaprjDV2",
  "key2": "nKSws84s8PPrjzorWvApVcWJb3YbRts8x4gDbfHgNWxCo1d3yBzj6NDT25y4H2eF7mfvk7yAAV6UTnZPk1WevzJ",
  "key3": "25YdHJUQBsDVTJSmcQDEj7X2a5WQt3xCwaDbsYEa18hx8kH3evifnhoVq7mS95j1QwxWgcXmQpKEK3FRNBzDZCAY",
  "key4": "22nrG6ztPFBhGLSoSpqsseQ8uBaDP8sRDP2Na3gnfph8ozJpuVPuaWUJFRh1i3YBsEa9oDFz9eBcqDeoqL7aNixo",
  "key5": "3Bgr6EXFDSjCrBmcGeQc2PkVW92Tdac4r8iY3kbQdvj7K4djeY11ffiEb5xibHYjNMrnYbCaxbiZrMzXUWeiTyiK",
  "key6": "3wXCtqZNd863xNjkFcgN7dUK5MdXiQaXXdrghXpPBffmsCX1JxX27q2us15QetM63YfbvauuUBHsXPYMRTTiPNLS",
  "key7": "J1s3TgddW6tcTeiQsdAf2pkDHtF4KH5abNeaZ3GEhEWyejQmWDjaQfKfQADAbUCuaJENkGJUZD1L5wZh9M84h44",
  "key8": "cEpWETGn3Fm8xp6oLPqBAZAXRoXi5s8ExjioiHTjHMkvMTJe2wXFpPme916jTcTeQGSKJDYVwJyyJhLnZs6uVJG",
  "key9": "22gyQzAvgMzrXbXubGMjW24FZcLyyxuQeRBtzd8jBiQFgcRgYwa633A7mrk6GxkQ6cRuYxnL5JP7YdvrfoMNAV4H",
  "key10": "2VbjWcUSLZDozjwv6CLdBMR4DX9ZE3HLTZ8T3moiTHs64fHkY3upjrrxN8Nj87BL5uzgwcZ3svKXqTMdTSYeW2jd",
  "key11": "2VarK5RTj9gR3UcSexAkrikBRMja6JqRhCiwSMuYzNwJWK8F9hscCS8XND6r3REJcLtQtVXBcRSr5iDof6Xg1yHk",
  "key12": "4oMrd6rq7PCSa646oZavCWHojDk9QZh74NydjnE9TF7r8kAZCDUNNQ466MTu94EeZtKGigkwKRWyNFJZgeCLWzFv",
  "key13": "2CU9wu4FhrDV95gP6BYK17aaUb5TzvXTMubdoczaUccAvTzAntbM8Pdr3Y741dUNfBTxKWHmRDSGp7116JGMBBQ4",
  "key14": "4br9mo5M5eFyD7CQibM3rDtymUPyuZq1dGBXxp2zPDoesdt9s9riAnAHJnEcwoMjU9rJc4Y3gYTn4XfgDxzWikQA",
  "key15": "5LDHBkcNEvx3wdXL9xpmnWiB1NMAuHHQYf6Sgg7m5h4SoJzF7gtdmTN1qcr2P6Xfyte2MotVqMQrFZvgcwWqP14P",
  "key16": "5XtCQHTRNN8pnASES3Je71qZgWTfywb42R9xgHbMBmcASwZ6b5nJvDLz78gEDKpgAZq5ju4tPBuASUEN83Cs6nyc",
  "key17": "4o7mt7x4fMjgNXeiQuGsAghWHfZRYLWeLZwGttmzRdewPTC9kGUkHTCnqNVoHTYsiMFHmVZVnpNASsudzx57aLA2",
  "key18": "5qDa54qFDDUWiiM4qVW1EePhXjSeUB7FJ3Rw228qj8v6y4GBpewkgWEdxx5B4GKWYdase8QbjWMWA3YQWanuVUZH",
  "key19": "Q4nMQyRYZUkGEyzMbzFEs1KfwbkW96JEu41pfmiTwi1hCjy7RXSYkdyJtpYPuhftVjZrgyWNCsgs3VJTr8eSkRt",
  "key20": "2cQLqSnDH24qpoeiVNUFtcGghbJcvme29h2B35mw7Gh768uBLVc65j2CmpVspbXUmjN44H7dZ2mgvBAGfALv4Ty4",
  "key21": "57XEkLB9yBbr1U1A2Ewei2svHtrNAEVybKCgkH4TXqjLPU3wF3n223xtiiuVgjua8SbPC3j6PkWGc6h9SCQfukdP",
  "key22": "5dB1JASowQ1UvTmmhdZtF8uVU4uws7edfAYuVNJJ8rE6EutPc3M6wpibPgBkFujx7R9CZS3BqjP2eEkMhbEhsKyr",
  "key23": "uyDkWt5aNcwGNbKANgaZUSwN1sF6Lkeqi2qw4tv5A38KwXRtaZj8maGmwBdQPcV3juj5tJ7cUp3cyHaSiw7xkWJ",
  "key24": "3DnHULm8HLL3W4Vn8ND6MYZzkkoZocuTCPc3j7i9BXCZW9rGYhR3UHjDrRrfi3bsnNwENeY85m9Cyxterh4EWDBa",
  "key25": "2hYoikW8gN7rqXJbzRgXdxdNjU7JM8xQaGPMy1j4ou5xLsFdKXLyHRLWcxPSu4Dc4gkbimgPcf74tZv716H3ZHmx",
  "key26": "XDdJCNCsPMmUjSfqxfvroNcUddB5AjLxfw34EGh9gs7kiiBHfGSmMUHFb8JBZ7FXQLNwdvjKGK5vbTBsXUnHXQ1",
  "key27": "2bp5DMRcbdjMNDmuryFGpLeu3KewkYJU9u65obLtsFwav5PNZjoRtqLq9K592jDjTW65F57k9DPRccfnZB9QceRf",
  "key28": "2aTrknfg9hsVs9nRU9gj54CEbQxDoRZr9KXa4aJ3CjaX19GaHgANQrTtaSwVe1TaeJnk1f21PHxqt5KV68KGBBSs",
  "key29": "4JUSrNZdexvNWTXMHB9hcmRAoKK85x55ZhUjQGUxqPdqiBjBDV3NVSCzuN4neGLk51cDd7GGRU5D4k1Rh9V61maG",
  "key30": "49iKCuKfCfptNDV7H2454MqebfZXYGDJKdpM3Pu3mRCnWi2dyo5z7n8RBvuRXxpVfVkyoZtGYJjVweFV2m3VBw2m",
  "key31": "4pHms8u3PUWQf6BdeGZ2Qe9obex7wxNo7D9sH6H4B52pswYp8VyMaKDtUe6wWMmhUgXRSRwiut4NVojiuFXaZDnf",
  "key32": "TwhH6qDZsuQpcSsdQVfSyxpzN622x6uzvy56CcXdTohRHEq9F63jAquzpqY1LTaVDAzzeoRKixTzgRohK82YxGm",
  "key33": "3V4GaUTV3RVikj9dwxurW2GQfr5c8mwQ9M77ZMxEjDP8WdDbvRBHbkccQLBYok82jgqEmfEN6ypigCYNQf5fjEDF",
  "key34": "539vUZDCe4oqGaMGx3qLfFH9Lu5nKDE3CwHEAgXvKUpKhj2VYhi3A9suLAVKjjks5ijcN61KNmbCmnK8oUCDwQ1E",
  "key35": "drpeff64WPqDWCrGFB7V1MNHLPibMXW6v3iLABR1zcdDe9j3yf5iZhqjcEenr7YzKwfEveM7PTjM5UTvCp733FN",
  "key36": "4JLrKPCVknzs8M5FSHAEX1xpS9rvYDxPAVevge7r1D6A2KcqLkBNENhL1aRG27EsL7Hvg1n7TEehcDbcQugrvrB3",
  "key37": "LmGUvms93CNFNvGGXBGRsAQjh96CbzKqMcSunrRsm8Z5EwqWRxEW2Hdn6RcM2Tb3z1pJGz6ZnAsyrXWin8CuEK8",
  "key38": "3oywESNVkuhgRMiU552JYpJzcaysV3P6uFC5ARD8fhxtDMZvnf7jX9BaxibEdadad7WQ2FpEc5Tt79MMibKGhGs9",
  "key39": "46t8Gqr3AibHsVEZPWsXfGiXaUs97nHJGG25ReehGPCnhUXtgnLNRojH1dAsRVrH3hyUtqor2KHkR1CeSA51rTEb",
  "key40": "3f3HqpBciaP76sPYETwbavFSZVCYZ2ExMBwUycQ71hjUrK3sihGpiKjQpbMWqrTceJmocGvmzSKpgMGL4Dw3Yt7R",
  "key41": "4FKT92H3N62XugeK3tGb62AFx1unfXpvEedqumLcLFzwK4ApaqVNHURKss2PYuT7ARC4msBtob22L6pQGwduSgL8",
  "key42": "siAjmm3FKH6JzVVoCynfYZeXf5aGxyrNp7ZVoDqzVVqXiDD9W1sCvEhVQAFMAc2WKgdsTj8MTDZMygFWJVaaLAY",
  "key43": "4KjmaFo3x653R4jDAdFAd2sdZiNpJJrpjxNk5cKbHJJsSXv99PDRT7cm9oKoAcD42ooK418sYdSTreJhcx6beRWD",
  "key44": "3Pj5tMwRDmAEP54okN58bkLFNzFQPS3F7ZZQBPGZCKVXvuaPU2ooN3r5ehH2aWtMoBt2poxy4j3HVrubo1DLsRRV",
  "key45": "51qnS77Lvtd4Leo5QUwZmn83Q37kC2jG7JKD5rqJBpMQna7nnQVkTANqWLZyHe2ekc92JZw5esVKfj9v8UVbKhS5",
  "key46": "jtJXfCYJKoiJ5oaPhTSwZg7ZXk48SiUhg5qr13TUczdwMQGkTC94bZmHLM8X4hfGYRmjmqUaERJ3MxfpkZBophc"
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
