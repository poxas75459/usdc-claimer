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
    "FDqGgDKs9WKp2PyV52o7fdLa8kW9n1RCMTHwbWJDRKxw9DxeYi7RP9C4qNsywwCC5Ud2HG3MFofoH3WxNi3YRMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4hWj7AVF7ovv1cKTAnCYivq1LuZjN1yoPvGCw9fhv6jASsPeSrqanamPgQN85bgmDrVRNh1VUkVJq3xXtLUqMX",
  "key1": "J1Dc8AehhWo3mMJmCDg1nfyMCPQShLuNjpfBbRscwYgSjTKdDUs5FZYb3tCjtreZHeF9NFkUnsYHb29ERUiZXL2",
  "key2": "2KSBUhmdhQmHJRvgG4EmitsQTAxfh2FdeWB8JH1RkeJgTKke8eKHW7Rcp1G3fKMMSTyTJb98sopsY6yqAftwAqpw",
  "key3": "3XBqgCqNoEtFxJLgRa1X6tKm9uXY7AYL9FC1T4GMp2fUp6mbiW8CtHcGRb43tWuLf8wEh4DuYEDV4Jnby9RLcQCK",
  "key4": "3GwEd9XFCDvSdAiNeTMHXa2YfpjpjUM4uUFP1v3wNosMRjvwMa23Dne8RKn1Br6LpWDzbW4ojFKrkoRSVWUZWCbY",
  "key5": "3svjWMsUJC5Dp2ZKcwUZL9U1kEFaQUcBenYBChwxnk249jbQvQpUom3nUFNH6izMNMTHwJR1NE9GhwvvAp3s8eDV",
  "key6": "2UvMfRRUoNMpnJMeLpCK61zM8sWJu1fZrGhgcLhLaUnuKiUb5T45J5j2CQ5sWucYZ5UpFC4qe8pyJ76Ay82ASC6f",
  "key7": "e7KQT1x5PSH3RU1To9egLfi3k8yUjTEcnaRXxpvy2NjwKFZzn9ec65kA7pprP4o7Tz5JYHkJMvBuC6zNgSS5uga",
  "key8": "5PAmPumQBDQJXNi5gcnLJMfVp2Acvatg2ZzvJ4wt57S823APpYRm17Q7TekyVR98SYnBkq1Ttq6EU8cv9Z2yt2df",
  "key9": "36m4aAMqquPTh94vJ3gnnyHXpepmvpRMFgz9M93kzj8SD8f9Vz7qjBJesFKP88rk3sYsVFqNsCmLZR2JSauA835K",
  "key10": "3aLDhL29kVwXdf14VJjxrFP5SzfVigy7YLTdrKLsJjJab3YemfunNhrg5wLegKP3TCV99UTVEUcKpTKMaCok5mq7",
  "key11": "5ta4Wyaq7huvSngRC1CBzufPqhTpTEXqyU1aWuyg2gyYQHtHUbBnQAsVsfSuLk2BUMqX4TWZyejnCHwFEY7QCRX3",
  "key12": "2wEchVF6CneYwP11LdQzPKoZGkXKMnEdGSHvg3HM2FkXdMn9jrUEkihAL4BemZvaLnwuhYwvrmnn7iZXP9P5V54Z",
  "key13": "5UtcTExojpBgpp3rtdARGh5twQLGD8MWVHSLck73kx9tWMuFXUFWRt5WP5MCxEpdaYNZB9mqGQqf59dz7ERRQbW3",
  "key14": "xuVmTXJgRiyY4Tq4gWD23r89M34EDGCZdPpDmQhiQd7C2hagLoqKmhKtRzASke5CP4V1z6kmVVVtcrYLruGnbtc",
  "key15": "4At638YjDRGurhXpHaLFsLTxawcpDzPfKhN7JoYKwcsNMHHY2eTRKWdaR1JGQNDaAQtuuwG8AnYvnjuFDAeVWjmb",
  "key16": "3U7UEUnGjpVQHZXXxsSpdrgatN6C9yRjybb93DvbpiDYPtnqGLkP3h7GpkQe3J3qsjnRybPBG7pFvweWoYcncToR",
  "key17": "3ebuWhe89Bv2uDZopvc6YxCyKQj1gW6gjLqeUPThgQoS15Wz2HTCn5Ua54bBHtLJQhpGNkkFkZr5ez2sgme8bhEt",
  "key18": "3hdcGT4JNbDsf6oBaZ9MXBLqyTnZXheyaPsPGcjkWQTYYYC8VVwhgkDvTd33rCFMa6faizPuPBPR3tZEJTBzVRqn",
  "key19": "4zsw1f2z2t3Ywhs6L96sesZdWJWBnusVBtCRGXkLGTf2VpitgYKTH7xTXwwu532XUdCwHQfarYaMQmMeyFaZDpjC",
  "key20": "2crjeRRj3Kw3o5AUm9tQh7AfXDYBsrMh87vHcJg6Zhqia2Ca9vSoDe4g8jGnzvd13pUFKTA8ZKE288oJTyDnkU21",
  "key21": "WAP3eAteLSftHaK5nLkMYorGumfMGJ4PDTGESA1vhDTC85NVvppzHpJv5oB7cJaNtsEvAZsiK7SMzEJX3MKqAvt",
  "key22": "Y9zBtVWWQ2MPW7hoNFhqmtJHQhKkpr2s8jGc79yLWFderhdiyxubj1Q6nmrvE2Tm2nhzAcnLChpMcubyMsFgdmi",
  "key23": "Dykr6CA3eiGNe544aKKa1SgUQt7woXMqEQ6PxAz6YWWe7A2h1pafGLdgeALLyaKHsFqXAUPYMYyDkLJfsSb1iiG",
  "key24": "5v78AXS19bgNGBfkGVSCYcxjy8ds1WcKMPFfbhyySPhHhrTFW69HUh83ZAC9Z35RuT6FC2eFiMFerqT1FsqyBtBC",
  "key25": "5VRNWXCE2Z2uECD2nQrnPew7bnj3in1MgUAUZwVM3x9jSFyHf1psgerpfmxWyxpb9UzHskjZP2z2LZZM9CxhTfDv",
  "key26": "557ewZWbFYymWtTN259CFd9XrbvV5TFnjhSWVSe7EU8twYkfXVZ74BBGpFZWR7TdrFJD3d4hPkD5DpDLKCh5kPWM",
  "key27": "5hdQvDFPtSK2DzfTHyr7fzknPbmWZbKUcsUDZEewCVymZArdTTNZLMiu6UZrtRjpyrPcvVGpcxMK2MLfxWhWHNJp",
  "key28": "4XnzVYwv2a9X8hZYpQRyDidE75NatW9zzcuixwCdfnXuhZSL3JCoTgpMzNYTCT8VXsyYvQHr4Pby7nwVhh6h9zy8",
  "key29": "5HEZoQitgM6Sj2TzkKPtmtchAX2WrjHbdfSnSeCfoP4e7nkWx24EeP4sE6Jb64e1hJXu6LcvHcNXsvdyxFM6CGg2",
  "key30": "64zp6tLvEqUV1V9FqDp6XWkt28ftyPi91kYCjTXJWg1kthLtCwKJqiYqQTj2DkmMXbcZ44bkfD8tRVo91j5tVXGL",
  "key31": "31EW3L38d7obdpj27dwCSixixNiqFytyuBg8voFFLhxx6CEoxDfqbgNZGrDWPnkgQpqP1d64K4cTcP7QP2ZF2FKF",
  "key32": "5eYnkLekXewwtpeQVeBNLBG2cJkUKnuRQo3uPDNVA4FSpfEc25S2J1FjRymQ13gm95AcRrbpBHFSpKt9T441raHf",
  "key33": "3yu1UKCd9kQsGQ6pjgUHybr9SCa81vGF5VLVfW8Eo1MwvMczTEsUSXYz6rP8Xsv9jHdcqQ93AHwZr5BvgShZRc6c",
  "key34": "4sDuHWBWDMf5AYXTdeu88pKQdHfeDfVtksFMtPSFCSEcojiwQJg3mqP9mbLEXqb9fQxvfYZW4tHLqCYpa4dCuCb1",
  "key35": "2xDSjucGVJqdDWNHn47YqAC5RSdJCmzPnFNrjBfbXVjPCeVC8BJcwfRTMfb1zm4HosaZgumVATyJ75g1Djtx5WbD",
  "key36": "3M4wvFY7975HJ2gWuyPnLDPVc4TjhCpfY973eVmUgQMNhnnFNza8SkEzL9FeJFWFCTn7XcjLn2wZ1Qv3EFqX7uuK",
  "key37": "47U94DjvTxMqHizfrq9KGEKzRpS8dqVoWNDj5QNG8trGiGSZ6iU8uHuZa6pqKcrmMVJDYqwqWSvUTCiQ8cPLqJP7",
  "key38": "3vq7npFew24iWTo1F6X97DUYdcJegHRu2p2XUQ1257sSdu47eAB1TmQ8N3jeJLUDsg6YvStBbteosuigyv6jpxNc",
  "key39": "35LPQRF5zEXCsiY33GmtxrqmPXEbAQwVoonm89hLFAzoXhf2624rDxQ9ZvviNEpKxZXoAQLtf81wLLHSLDWLRSL",
  "key40": "4JQXitPK5FK6kvvxGxmqFY1robJCmhKts3Ys49RUdV2srnY7KVA6iYFwna9L4huN8P8GZmz431P7wmq41yoPw7Jq",
  "key41": "3PDwL81Rhb7kMdkbuW47De525Hmman382r4tAj2kBoLBDkZquqaDLVJ6oCDtQgCGvwTPsGu4Au1BynGZuTyAyaDR",
  "key42": "RcrYZv6Y6BEj1TS356neE7aEP7YRQPeEJH45SbhvYVrnXGEmVsomEhE8rkr9n6kYVgk2EarsK5sTdnDLuUBCqyV"
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
