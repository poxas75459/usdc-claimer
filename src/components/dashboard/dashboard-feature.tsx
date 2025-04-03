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
    "4SJLY5WJK19Rcayi5YZBNFpeYw4GdUANr1pZUbrjCXGooCHGbRf4BvCFMBebYWH9Dx8mTuWQPRWUwbumWbYAfokt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3tiYuxqBKtpGUsCYT3EPMqAJqBS1ZJfJjkSP9EwBPd8QXCJa5pgxxwtK55HwN5k1a6tozaTVwowpDR5AJWmQ6r",
  "key1": "4F1gkcstxoYR3AqCKaRQifYkouGXLS4AR3BkrAs1ocDGUyUWC6BUJqkQaog4aicm8MAXGhzDHe9zdzdUFcsKC1rv",
  "key2": "2Jy8Zwgoq3TGo19geePJYGXJ3DW1QhrdtfQhnRErkPoUdut7erVdASbAxVD7kdVQaZjdc41qTBbSQ5C6swzPoRx",
  "key3": "2dN32fTUuY6fqr78tKxo2D8XoqF2yU2u1pc2sxk7wsFJaHVe9Xf3otbaVAWnonskBFH23dduS5DurnQg5zC5vgwi",
  "key4": "3LzReP5mDfEoVpPcjPfosZuFt8Y4BGd7npfAys71eJuMJhUEvcM4jy6DXZc3vf5hbwpGj4g1iBJmRAbWGhvBaYTA",
  "key5": "2uM8uE2cYz1MooPwvUdzqRUGjekxDH7q8VogSTpowA8cvQtNV57KhZ52iqr8MyHB71kH2EY1p4LNgpbV7TSEx4mY",
  "key6": "4s3NJZCd85En5KMe2FWP1RBqoFTmrjDZxfcTKe5X3aJr9jn4mPSwrrZ8NECuydw1A1FBTWrwchsz9fJzC2L8qM36",
  "key7": "2YvJc4csBBUHKyAKHabFUXMcJNHRQyAN9Gv7E8F9YyjmU9E9HUVznRNtEG3mhAymgyuBErbYjnEp6iXgYb9KXwWu",
  "key8": "WiMBc5ryQdGxH6v1yq8FTjHrSHwXiy5yKEQGbYmv1GKGt7K256d8t6dxigeVQRNMaGy2HvMxEZw2hcJLdQt9zw9",
  "key9": "5BNQCCWiPTYsrCBhDbEg2RCpMx9iK5C2328mcd55Mhoa6LFCiRVGvFkQTDs59gSGpcYMVsurePbfx2pWTrUZxeaV",
  "key10": "3WxVpjd57tfd6MRJQXpgPrVc4dmLjCkb2aF7AAoppWN6ABuMdvjFyvobUxeJtyjun7R5MyrwvAa5h6qxiEe1HNmR",
  "key11": "67nit54hwagYraC5fxf9iEJnfR7EQVwqdehSUukquhUyqNaRunkrZQdNamBHm8Co8ciwWSiWyUXEdLFexVHg4DTy",
  "key12": "X9zYQyUWzvnSQAZFDK4zs4jMA9fjkDr35ACiPDMGB8MW2oqjC7rN6L1o4n4xHozHuJzQT8EdHpPxdpkPTanHgxb",
  "key13": "5kBxwn3cucPcY7nthnJwAnmKCqEyCYAhMXCuEH3NakcZCPyNv81RpKX5WBd1Y7bseVTSefeYHksmziS3vMHXk9kr",
  "key14": "3tkmwRcZuEgH7W34Dy1M5fvnYmAcEX5GkUuMFr4MntGE5QqanLBimhP7ZWme1vAmStU2QfCCV3PPP2THB6D5HcG",
  "key15": "5LXRo9JBdkb2pNtPPLGrdE3JGLk8NtY4i5zZaZrHVtNQ53RfiFGLipcTHpCNgCi7SffnVsan298CJfmDmYdNq1pa",
  "key16": "5gZZRP3k53f8p2zHPV4sdYzUXqk6oFq4V1KX8w8itwekeZwhYiu2DWVZ2dxjrMZDceBFKAw5B5jFErkvhwTx4uuq",
  "key17": "hh9PePYNFLyXhH2aMW7DRzi3gVg7aNmGkyau93cyM5g7LhPUv2aVFpRt2EQXZF3CQm4PM1kjDY9or4NwinQiRec",
  "key18": "2qga8PA7Rg5Q8HV5PC298rpKfv1xhqkatmtUizVtWcLsxb93rsC5Srk2zwdgji1VNGLRYKwtmi9sQK98yRed7JdG",
  "key19": "QrGQdTbcytPh4m1GDwstWf972YctKjbiPSsQDFHaPiJeNA6ahuuf1EiwHef4sQhSsPVjdSGQXSm3Nk5JrYbp8Cm",
  "key20": "CQL2PJPU7hjB9rszmNL4tWrX1PNxftaSEwtKjqVvPatbpE9uMxZeo3tyFyWvkrDkJF1H7nW9yEYGJY3EPRKZg1e",
  "key21": "59bcBw6e4pHVuJVywHYvX5qbvvZSCrTfobKsTFRmpNuyFy2VZDquDWA4BYevTJymiqRLtbzwjWbSy9Sd7YqFZExa",
  "key22": "37JCghR1d6nNfSCLuEb8Q13LNsS8w2AnshLAo4TBKQniZ6U6fA5mGp16qBvg4Ltbs1wz2zDWr7XvgrmTY6eE836t",
  "key23": "3YLm8yoePd1U8sywaq3F9QpetGpSKHkx6etuJpUR26dht1v84qhGBXyg1bSjFoELReK9hpmP3SSoP8TM4kfo4up5",
  "key24": "eY1crPT7B2ZAKeF7Rw2CbR7RaHnPyTBU8GEV7dhmX1JeZLpzDfngpVUCbu19wxWV5vgFymuRuFFYBEhKqZDoSFh",
  "key25": "YTd3sRhfe2B9fM394mQf3Le7Kai2MFqHvjmtkhWhFiMbQqT6PLR4zf1wfd6yspK3Lvpt1yuKX9Yf7R1hC5T6om3",
  "key26": "2GbrKcmJBQy5euepWAQd8o8CNRDZwx653cDd7JAeFbBoquxssFJnQ1Fx9GRMAWkLUei2b7g8CfmZq83Qd6QTo3EP",
  "key27": "39TYoxPqMrVioBvbKufsBPSWyMLrmLXhnepWcoYmT59djKiGpnDcLbGiEQKjVcfHsKMpxKH8sSeGsKT2WBDAd6Pb",
  "key28": "5sMmBTPVVuDaUHYoFKrCCo3pJBo7sJ7qRixv24CYzprYHvvXzGUNC9y62LUsfWLVZdx94DuVEDspHvhE4FnEHoaP",
  "key29": "3tu88GmLEJbRtQ3h3AGSPd89KdZFdN238RXKngnebLg18Ej3Kx37gYQB7vneVzLsPjKpfabZUQEqDcdaS41da9HR",
  "key30": "3Vb14anpd5p1L1wb6U7bTrFkTYpvai4nNcoLkWH8dXqGsmiW3wv1HZaiHgvbh3dvr4xAf8fLXPgLvVoELHhhTyNQ",
  "key31": "bYWUFAqrqZxsiToZpqBzSJFXHVGUKhPA5qm4ErXpK59D5hRwN986rz1Wm9ZqEG2p8jpRGqTi6pkvuz5hWn9CLY9",
  "key32": "42cTFnZ92AGUdiAE1kqaoj9t8cUZE1W8qUw6FJTAgUYj6zK8PuUYwmxx1Yb6kXcgZaEfJYVLu8ZunfmAtN4TT18m",
  "key33": "5FqSHUbkka15AsNeYMaUK16XZre9ERBKP9CfwcjvvEe4Q9xRgZFrRq1pJsVkmViW9kAgyYd5EUzGv7GHMosXqaQe",
  "key34": "2jtSCjw69gyTo8XbWiRQt3HzjtExwTKNPdbBnxkWcs2SCjgLXBnjPeGoK62izZ4hvL1fdsYueurLtAXJ5TpoNRw",
  "key35": "2a7bLxQqE4FT1wwoJLeiJQskPvqusSdUodHFEs2nwCaBYGjBsarGsLLMUokX9ueD1FoW7nY1nzqUqPJvaGqrhMMS",
  "key36": "o1m6qPT1T1MMx12rNXrX6CdLBEFCTnJQUs31iz773LADLdhLofCSPWowqyarHog517LCckDKBfSMxFsfYzTAVmu",
  "key37": "4uhkonZfrtFMse9pM1bfCR49SjBxz1SfrpLke3hmb878NKARvjFqu1pthJRdJeMKF1wP5rFJhVPE46HNRwN5cKdK",
  "key38": "42guP6LF4xy5HNvJaLQqkRkqyNTXW8sveeYKQhkaaBZRVqoosgvctVuX2mT6p19xosRYbHqHR6Twc4CDFq52rEVJ",
  "key39": "3CMyAzaKBxK6muDjo3Fu9bXkh3tb6jAtTe3L7noKqZ1wFvbn1nQDEfhKqiSpUtdBdToZZhXpotLPcXKWXZwm4Hhx",
  "key40": "4Z6sh1q8j6gPFYTQn25qZmWKAv4xH987YmuKbrPJoM6JthQFVXXExENfe4kYkdu17LstRgM7iCsnhvYCej9AGUUh",
  "key41": "vfWiTKsyxpqa2xm9MizBz4UTX7265xEs2Xg4rvZXAFTq5ztoWmgHmCwNsiKubPGAR6uc2yCeryiXgex4U4x1gh8",
  "key42": "5V1B5QmJRJyb1X5ieMNgg1Uc4tUryCvfJdeVGrbYhdB2eoD45cGDfcMz9tA6Mxj8LC1BcwtuPBfKEH4Nmt5bRSQa",
  "key43": "5CFuNNEkrVxgDxE3DEijahCyymxrHBxpyYrFjy2SvpHpgf3aajLV1FJF23HXsDtX8EPAZZCEwbHtnx7FAwknsm4E",
  "key44": "5aRudh6YjiNq1CKw4FVhimxkVTVGCv5h48ubvcwreP9EE4MxBxg6bxdKHAWWDoWBxrNZZoCfUirofrNW2yEKYECq",
  "key45": "52QzRPWY3wCYzjD3m38TncWBviRAcLmRVhvcjQcRt4QxnRJv21UELKvBTSV8qGdhWYZGFEJPhGv2GZDViQLr1oGM"
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
