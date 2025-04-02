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
    "gRaoj6jPJnn5Dhsc9TYmwwomWxTLkU2WufnDnCuhaoN9KiPAAfELi4cxqNiLpgSCdRZUwkk2TGHEp2ZJ34BqJrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGXo4Ue86RYJet5XS47YdHZmexaN3zUukbFHpLGy1DN9itsng3uZJ8ztgNbQkdrQ1cNLMGP7AV3Np8W4JPLBYS8",
  "key1": "rEEiYRt3PgwTzhVT2frg29HXKPWDGKFUTRKCyquTAe8z4q9LkBjtVQgKfBtBEdhBcxVLSqMeyKFpFzrzZPFUwE1",
  "key2": "21j73D4mo4CUi45qYYxPYxQx9EDeuSC793yJM6buAevVHdoPN8YnPWkJb5opwDqaYg1GwavqLwv8fYx5iMg2DHcn",
  "key3": "fzBZNXfceYsXB49Z5L5mn4AHUGVTT7A1dXha4SscPvYQ6Z2oMmHQGhZruRHFoJJUrXLjxcJwxNRLwhEMNURngAM",
  "key4": "64v4uNPLamVsvstEEWHSYLrKV8QRCEBSWbMQiWCGHtbcKKXA8Tq4cDSPejijkGAF78kajpKtVbAuWx948U92K8q6",
  "key5": "3wdMLWSrC9NG16JXWqHyL2RKtppRQHqt4zxpTvAqmqfUDpfyAqTivj755aN1JdbzMY33gFNBcKZ4KTErG7TwcEGi",
  "key6": "4V94Wyo4vCf73ud5HcEJUWF6RRQMXJQyFdrJ6rKsv9qiGS8FnQC8ygK6fdHv2s1fYJh4YKaCGuTupdqXgBaqR472",
  "key7": "4EYzeeV1ztW1CaBN8arwxr7CXRKFhWUnxsDXJFHj76zLBuCjFeTXmX4MwQvrZoNerBgNGhercYJDxu4BU3mAeQNw",
  "key8": "3FZ2DzreiLnsNKCtnHmc7vDnj6DWbpY4kxHCNsaTeyAoujQRAwhWA8bArNfWG17xad9TyTADezuJFmXLAXtggk5T",
  "key9": "EDrBtGwv9SkEZwm1AVsq1fUhqN6xPhBS3JYksoCgmGL9Szv5PeDuCsyNdscuARh5zrkn1yEeMR4hzmR1TnamJtz",
  "key10": "4oxN3MR3ttAJngeh5HHyAPo2srdqAvTY61MTebok9ApWMmNrQ4jLUnVRynLox12mztxGGQt1p3Ew61u9yQsjZhqa",
  "key11": "246VYxzecsC5DLQmdQbznj2gzoobRwSpzwm5wbrNkfe3FX5x5fySi4FGQPE9YNSaKubJvVpCVFTw5eK6ixbw8fjW",
  "key12": "5yt7voHhdJRrYJomEwQj8b4PQTy1ZP4oi3vjhVx6dp5HjgrrN2nyUSM1d5RF32cZNLDAXcAbU9oH9N4A5ExK9rcL",
  "key13": "3fsb2Sgq68TLAgHPCLoTw4PxtfuXju75bk8gwX6TEN6xGsqPmRpTLoubAktRAN6h2bH1j5qTJ4NfBG57aoGyyYX7",
  "key14": "3dvx2BdMXYckB6XkwLETSzzMcYWg8AyaHE7PEsHxSTJfj5mrSKpBoUF5TUoeGEoFyjqp54xnZavPksxtM7BJjvY9",
  "key15": "JuuBTsMc6apZpnRtQLipGSfjxz7Dz3KYFuajs6ZRJfDeZbyK5Ps5Z15dsLjHDNqEr7ycTSRvYNUUA9oBnmFNkRd",
  "key16": "2KKWYS8aD384hkgBLwQ9iSLqfqX5pY2XrnNAaqJfZeg7MbpmRg5Uv4gYgkCaNhVLtxi35bBgB8VDb5bRstFqbjyL",
  "key17": "5HNmY161isTrP9H2mLmZgfTCvsicXQp3fyQjmfLUstzet7srQvZzmn8dAKcuUu5hJWPimrUf6rkmLtDNLga93MdV",
  "key18": "4ptcAR5eep6cmwdrRmrzex7dWfv6CkT3heagJdnxxSQRfNiLZjbXQNZDZpPdfzJo5MRom3sd68FkaZUX9UkQR8Jj",
  "key19": "4pvwyvULzZgqAkB8dx6ag819rh4MbHnVe5p76AXRsBcWEfWKrmGoqNTS3bm4eWoXmDXEY87AMzDNHG6B4jW7mgin",
  "key20": "364bHDtsh8Aiy2EhSLCKu5TX2A1wtqkN8gpyLgzocEzHjS5bqi7C6NTcwSbxXTuER2K4MpXFKRt549D1xQaBwY6q",
  "key21": "3e5VoBFS5cZ4kdTH66ZWW4p1r1VnUixfbxSeNLG1Eg5SJStuMCp7ZxKkpcoqB6wFQNacPmBsJSWM1ZkJ5bbddeNo",
  "key22": "5tzwv6R3ryZMaVngRTMWMfxCzAQLZ4VD8LUin5cZryDMGHWou5EnydPFnXXUoTZJZi3BDcpv1xKvBvqToNPchdoV",
  "key23": "42111GL3bnJ2oezjMVYU8GZQ45mScHs3xCASoRDoaMRj29mXbMW3wC2PweGo1XmApKjUrRyjcweopRfq5imgjFt3",
  "key24": "4vfDyWhLTbbGJsefkj5YoFnVGmhLXFSp3P7QGFwcgRYxLeWVrAV4sWT8oTZxkEL5YEjWNnVErstrynCnVSioohLX",
  "key25": "56f6zMPSov77YzJEhqqXGZyioak1wkUmj7wQ4DQ3oxFwMdaMtzwBrq1wMEgzHeFJcX3P41KTEXEgpQq6VyJkUwnS",
  "key26": "3yYtaydzk1pTDyGULTW24BzUffbRY8YChRyACSGUsDrVF4u1mpp97WHE4tsdknGJuQvpnpppcHgp9SdcuCXjkRe3",
  "key27": "2oaZbp8YrKcpyDGWovUESpHzq3XdxqsRv9EisJBPX8DpfT8FZSgTwQKpUsCBLbaxKjKh6jifFnjMV7zvzwQixS2X",
  "key28": "kenP5BUYFCLdtirrNLa8htKTfZ1YkUxxrz7Q3AWPjy748MHbV5NQaraqULgdMfLG1mvGa6tq2sEg5NP5hoFj9Cu",
  "key29": "5UWNfkBfW4bn8ZbrVzXCCgjZgzytkx9roowNY7fhMzRcaZNKZ8wk978k6fzopo2uENUnijkb3zU35i9TKRRQ1e1d",
  "key30": "31XPQnUMMYwcUdYTN682AXfh5yy9d2oE1HTUFbFaBGDRpTThvF6bishBZCQCZ5ytnURnp1Fy5jAbN4bTH98LCKi4",
  "key31": "5rCNi43BqbvUdgHAXLFB3fj3DK9Q5vAq9Zd6dStUFhNndFfDW4WP3ifLmi2KmeSm45MyL2iAuB9ZEyvYX7TNkCVL",
  "key32": "3irzG3ZsKHWtTe5teu74jJgxXj7bkJ1avj5eoMQxX18ryDSPYvEBzydQkA192mQTcdMztkrBxzusSYGkRhnYHM2C",
  "key33": "5TccBaeG2wUMmNcRyjehzHdH62f6HiqvEXPSwKCiTuPUgZ9rp1SdimRt6ggEZwGnZJ9JaSUQ9XUeEbShFhg1vbLC",
  "key34": "4p5FdHovmD8yPcemvvRqm9kavFWpNJQAYhuMpDRQJpNDJFrcUU3j377Do3TEuGsGaYmofUC8LRCDsZyAmx9hMrZY",
  "key35": "2d5qsfsxGpmE9bMZUhUrrELQFZwTTJBxofh81cDX1ubophVJZnJVohPtcTrkJ8pHxjung3diPy115pQWf7yjaUjV",
  "key36": "21VCnzuWjBhWzqotuogCuDS5Uzi48AxoE6UftSjSKmmTbCAiCd9DWeLAXD84sLjuAWdbNm7mLtj6S8jpGB6MBUYG",
  "key37": "3a3jtbUi9Lf36pg7fbuoB2cQ1bSLA7uAj2FMGtN4mb4w6uck9XWUGNgUZBGcM2NFjVGpcv1GdfYDGDdqT3JKsPm7",
  "key38": "sSvZim2P19jQw5W8WPGVN2Ucgh5CZmTxfQbkzuaXjQCxULQcQ6WwY92NK78h7kDwxWRDpnrY5dir5w7jBP1PW4j",
  "key39": "5c2jznS9TraptKaaoHS75TXq8WcbuuyffAhTZ3eYv2ZD2GgdmKZ8z854pS3G3Y4JuRwbZsvGKTDDteQbSB14UdWK",
  "key40": "45TALFL75E5qWNjX29zTojH6zqRQw6D6xyVo48ZZfuaTKKesGnGWdGCJDM4VUc3qjcm3y53K4EQnHUM5ZHmi9Pc5",
  "key41": "4UYmhnsUFkZcwwuMhc38LUvgWNb5bJhzXA4nicEy1akREFr6wzfuheStMUzRuwHdajCMgV68oRfZpYwakvhV81V7",
  "key42": "wyyYWM8h9R3hftJT92eYzsgFfj1xAviPnczcDcgX1gMg9d8XH73WHaASeYGMEuPj3qULFoTGoD3or3mt6WZy6yL",
  "key43": "qfXcrhSGJspxxBgZxUT3wdEnW7jsLE8KJuUxpR791VMkpkyd9aWf7xtLtFsARfPUfkfHm5dZp6iyfC34bZXXEVm",
  "key44": "2FgbJgJ6qftwNiAvhTV4z3qc8aPNakd8AVC45USDmEEZmdikVjyYzjXX2A1YAeHt63cDR4vQeo3uFsTcuQHmcPUh"
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
