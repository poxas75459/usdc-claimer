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
    "aSiBzS9nUMZvj7xvNSYjMaUBRQt7XB8ymhPCxAm59FVuiPoDu86qQeEk591FXL8WkAX8qEyDMfDnEENAM7SHuTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jH9vsG5LxSTFicSC7isbkdaCXnMSYdmGtwDZGavcPweww4tcFdypJkh1LuJtN69F7uGcGdqR4xBoNiddkkY3RNV",
  "key1": "5UuhZMjmHuYiKRC1EcHywRm8XjJXffQngRzFhCYbkE1DudSMrh91KHwAVeKXCzJUfCKbWu19NYfzuZRZN9kSDUjx",
  "key2": "55egkgUxNGM8WfxL9gB2EjRe9hg6v9mmVuuuczFEf8RAUYarY3zuVTK7sfGDYeaq83AeubiY2QvDFJrN45gDoGak",
  "key3": "5ZuDZvHpQwuExF8zXui9ddGNH5kwPCzQUPK6kFjDFL4Zo8HG7rV6D1Xa7sm236wCL5Ame8e9uec3HgN5jwJ6iJfQ",
  "key4": "3M1S5U8iauEkysWbyUT9gVtuNf4QVHXyQZQuFUYaN17qPsdyHgjQ6YQfLQaVBZsGhVfKYTnoGqvCUn7no4Uio2Ks",
  "key5": "5gjCYpfPHGMJj7sca2JVt5MfFuPpCfz4W4ZW81hJRxkerqQc1hB2sM86whkpTD1UVwwV4ikihixp9737aLEB1R7x",
  "key6": "3jKTau59jAGp3sLeBRQZQFTyTcfmweXTT2VRrj4eLQYz7ojJxuTV3jpqa7HgHtqGMumVHUZ2t7XScYby3S51hQKW",
  "key7": "4RefKpqctUxC6kNSxLorwcnT8EcYiMQeGDaRqmrZ5jLWGKRyfGhjFcUoouBFwgbhgqTSGU4QEiyqXzaQt33HwwLG",
  "key8": "2GnDLdv5TzUj1Ef8sJmCiX7iHKHwm5MbWuTeEd1FWWCjdm1WxvoUN8in3fTeWYX3HbULZLvUGdbGX9eFLrRpdtTq",
  "key9": "2np6kyxTHUAYtUgBNjBvAkZM3aqsnLKBGhwb3yBjaPZr5TgJwqzwXsM75SbqGVvahRgVvUu9rijA3NfXXDMVyAJ5",
  "key10": "4hGnPjtu5rBpTzBgMGb7Qu2oemGL1NP6gPpjirBob7EbzHiyPY3iNHKWB1nhBHvYcEqXAi6fmjboNnxhTMaamgiW",
  "key11": "4EUcSJzzqJSUYmxEvL7FZPowfTtXT6ttfWMQKZi2BSkmEegKh6nGEKZDn2qeukmgKWW1AkvHtK2hPQbLZCL3S445",
  "key12": "4EDhSjQD1LJ7j6RnM8twwjA6n4wywc7E422E4YcCyfRvH41wmnYqSYf3odnMxjxVxNDr4cxfzmrMbhP7qCzAaZsk",
  "key13": "m5sinkwS2Hgt8UrxEroDVtVZQgkqdk27WFozmvMbTBVGx1imphxQ221dAUb8vbChbUchSJBJFentCA6HgtycPQb",
  "key14": "4WezE88rDrmzAAtji26psfzdew4pniH9HKvysaAhXSSjr8bR8rQFUYViafzUzykeATKNJErCGJjwU3DzoqfUVWbM",
  "key15": "34SZFKfJGyJZV2t1eFY1DpDy2RT6PbFawr1p1wStNYM1cpfaq6qqY11K7svvWpYiSw8hbDo3BvbCVNhUfzcWT9yT",
  "key16": "5WvyjU45tL5N99QH1sPimLaf5LgKNUEVgfHpbhh99qFjuRdKPbiNWNM2mMSmavmVaaQ45YBgKRPqgVbq1UsRJp9P",
  "key17": "3SpwGxqHrFqA9osXnnDHNZ2QECLjbvWQwwxnX6mEFM1BQkezZG229n63AgGwSQad5pX1xVSo23uPMkjvy25xr3iG",
  "key18": "3vW7g8YxTkdj1Uf4KEtW1t5LyCcaXNBsVtKQmCeAuwbthyK5Kn7CZY7secWUphXncUcAbNrD8Za7Q6G2G3BUmWh8",
  "key19": "2gLhci6RghnPAvEATEva2jfVtCDNLFswEQQVVFDrYbEdwczVRBv1jnBdu7bw8C4J5xCzyTgXxeo62uaiVa8sLiHn",
  "key20": "2W4WhXMcpNiWYis91ofGgCPVQRTcopx2KQxMNc9Zg1oqC3zUrMAsYMYvcKbSizt2MzMZ3d5jkeoPvzftc3Tubvs2",
  "key21": "3SxqLaCuKN22ufPzpHrcvVJdsH8foWfhuR8VWCkBi2f52wR6cgptbyK1rdRXgaEfuZbBeUveUsLmHtexUEanfaVK",
  "key22": "4Bb3HUbG36a7g1WK5a2AgYCG1J83wyZeyGkK98gm4Cc9qFGcgXtuynWHzPAewThL7W6txC7m5Tfo5P63wo73bR71",
  "key23": "2qo6SPWUT232Rfxn8iEXDJHdSr2Cr1Wbxy4wjrBjePtqG2PYzSSEAPerQa4NpzZnaGJG1ed3QMY4a3Kn3wVRZy5V",
  "key24": "3RxBzbrLScpredA4tM5f3Lid2wjFXPCctee9BWo5AjUtE5KfJBguHYmgum1wuFZqxvn517EAQcoifKgNVpAKnDUy",
  "key25": "cFvgXs68U6tCwwTqW72H4RL4ggQw11L9EMeWUJx1QRdZdww7Ysmwh3M3ncKhwqDfJNwdLfjoWiJtffuoCGSX3ZQ",
  "key26": "2Wf5TeREEYVyg5E6dPJfRHjp4QdE5CWgFdiVy3yjum2yKPPKaJNJtktXtNAV49AnwYH2KQnrrhe6EBPqCBfp8uur",
  "key27": "2eRhjxH7erqaFFTcEX7FjoJJ3WCkQ8DUEPwsJh4ApfVFRmwYJcJQocBuUYosA4on1EEV2iwb82FDosNfRDdikd9D",
  "key28": "3xouDMRwFvmWRqDjFumWpNvbURDygnUwnsy5zRAFJCLq3E7wsmGFJxYfPjHEzQJnsb5WDXbu4CPZZQxERvX85KPS",
  "key29": "485jp4CSp7DsPmjFWhLer837JuroikezYXEfyWN3BDYDBdBzVthCg5ZraBH1kfuuVdQZ5xsBtpMsTMVirZWXh3Ej",
  "key30": "LpQgfRAjPSTZThwXuofNKrn3YhuzaRtvLPR4QJx8RdLiU5sLsbKAVANrgZf8BSH2Azacf2sBbhyn61xbGNn9JCZ",
  "key31": "5vX9M5b862s2bXGhVJJSysbe6babpNJnNwnumjtPpopEbYkhKSm5ZkLkGegzGEqzV3Usj76MLpbVMnntphCgxwhE",
  "key32": "4aFPKQRHC6tfAMhnhHCMSz3VtVh7UUXsMuG1pRxrTnwZC65nieW37vcgpVRdp16ZBGFVt74fBo1xyU9FmrofDQa5",
  "key33": "3Sk3cGSYsCsTip6iW4TdRRXr3mrr2cQWRMT3Sgohzg7b8hhN3Dxky1Rn3t1nUQkTPLveqJ7r2NqtBCCKhJq2bSTs",
  "key34": "EcShK3zrATgGQyZFbJ4LGmEJE1Y7ZxzGgK1EPZUQBv3uh1nne5Y96GYGenL8XkceGBDoyDqjs1RbihhhrXp18Mf",
  "key35": "ni1RiWXbwndRfu8okzuGUNr9dTkZ2CL2SPQ76fhTJfG7HekxRSVv4SnBHLAsaHR26g21isbkhHcPMdHb4jtGEMa",
  "key36": "5Es88Vu1haHHXDzbKjFzd5QXxTsDE5jL6fbJdoakEehN9uXZC76eGLWs5WgCqRSk49c636sUpJW3dkmvhC2wNwPy",
  "key37": "64YzR6mShKG7rhikNdHaArsW7zrXrepm4DiXoJarKARFh9fJ5P9qSKxKv1NkS2z1sRLuVFRUEARw1jAyvRFTELXv",
  "key38": "3pySYziLQWVFjjLHjrCuipd4BfpN4X21TyjYPXg1bJYx1YkL2wPztz175hPBHgjuDHuk1DSE6xR7mz4SsmEGmRD",
  "key39": "3c2sV8CqXYKCdS7BjRuAE4aa1eqnx6W8Hmqd5bZDwYnMznUx8UpSW8NSUdcPvWnz5kg5W6BWbZ9PHtm7bb2PGFCh",
  "key40": "4Hntd9r9nAQhAseKXN4bfhrM8cfJcn373sYuJfXCjejjmyzL1TzFwDrALmLLHFR4L86JHr76MbxbAgqfGLxSwEVQ",
  "key41": "5TaY2N8YZXaodESaaMhqRVrACaUXGAbyctdqnSxT1CdMKn2BkmYu28QPBGbdso5bZwWa7SWtS228bN5NCEpLRE1Y",
  "key42": "23U6R9t29vaEWAuwCVPrms7WH9y42hRVAfsnmmSREg6UZcDqNaEhh1gN3JHRvhngPpysWmskkpkvwxgx374pkFWP",
  "key43": "4HMe8iop3VZd5dCUhLo8qo9QqV1omTfpjiVRtrdM2ooLzb1X3TvQHAHBygkVhH2BAt8Mgu1Cvb6veXfRxYEzKNiU",
  "key44": "4ojHZUJuAGiZSqWEmCvC7f2nzGikkDPCDnmWTfMxtXk6NTePWyCmNxiG6QALrFff4maTA5cTdVe6nQntpidy9ojx",
  "key45": "2oziokVQdcCnGxjHhJVkGfWF6owbjtrbSBZMyeHpv3sEDcBERKPT648MpkoUDs1zXBKyisJG3iRzcy1kRkPJKmPH",
  "key46": "4DijebC2oC43Yh4gG27p9VGfXuaCTdppN2QWQqRY1b8J516yg8xQpfJLHC91kkPtNGfbb7Jt2CCseT3cjvUoNafY",
  "key47": "pcCKb1bdb56XQNeUCz9w9n2vjwqgq5RiNXuJGNyessKdHE31YnDbEuSzM5iSzEFfiXtQrGRsnyMDwjtDqi2diQL",
  "key48": "3Gk8Q2VFBBajP75Vx6V6MojBwKPBEtr7bwWBajuWWnF1g6D8j3GsWpBk8GfL2NfEm5xMiajS4r8PAMEhKwcyjZkQ",
  "key49": "3ffbRRBp1bphXB7vVABYBisYCP9r16oNPUe4wBwBhzp3u7FckJDZHTecZZ8Y3juQwBNhfdcAALhE4vjK4QN33ghH"
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
