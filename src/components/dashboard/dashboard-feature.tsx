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
    "5Y8wptTmmcXEHCt1nUbUFJ874jyYMLBBvSxUUE7gauDBp7Be6bw6iB9Yort3ttyqfWyodHjvyFgsKoyHvfkk1fjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UYAdeP5wKgyXFkJPSDJ5jT2pYVk3wicohk8yrv5VWQHK9wSKkSQs85tgwpKZnT8m1BaqTvPoR15b31Mgr5788Q2",
  "key1": "31Zzm7anzpCRbjQRiY3hC1FGW1oQFNMJAk1tmJWmkqHCqbQVnFWXEyzjmrkVt7eHxKkkrMZ92oSdCEN1SwkbB3Go",
  "key2": "5BNn19NcjjQ27wrjnKq8QB1KUricp9SyvvDLhtWzoEEsWURbeoDxiMmTr7w6uKVnHWTst5DULfsaDrWALutJV7hg",
  "key3": "4JanhJWTCivqmdeb9RKdzFoA6B9bRq2WcWrjdsWZazkKvhWy2pD2Bw3sQtyjPBVMWusM6NkviLFTCRH3FGwAzXbK",
  "key4": "2bMHuP8jzGfRyUDYAHLgwqB2fP4k7GypGtMMhtzrNFhWC3QT4gn29VsoMEPbQYDALxR9ScGSPBR1tuRTqrTMQF4",
  "key5": "2x1LrdgrYkygJjMcxSujTJiogkphcr4RZzdgYhgLpQs9FYE4pXKsvL7Rm32vKMRS114ZciGrn1vdbrPaYzyVLq1u",
  "key6": "HRdq3qKomqoRWhC3JWP5dScCta1YBs6eYhqCfi5X2HcYZ7E8EBQAahKMuTGxQgk3iKSYpc3SczDbDLZQ6frRP91",
  "key7": "5xYtVCqTtxf2iJiu64itZqtdwkggUEr8xmmJ5fWKWGcY3fG6BgjYzUGZXuZGvvq1yx2dFr2G9RjdW5qYpCCog6s2",
  "key8": "4ZdEGMHdbCyxpBS1CCFSgfEts1mYpic4pxBmdtQhLTEUbi26csRkQhEq1VagpJMHVW6chWjCeUAc6L5XWfp9uUzw",
  "key9": "ev25e3FkwJK2PKwSVYdoTZxcRQ7A4VU6HzB6DKor2a3o5TRkUW2dA6TxhiMJVgEvogarzbjptsnr7oVxmrt2kjJ",
  "key10": "2yVj7DCx9A6jqnaphJMS4P8cH49PH2oEPjLLcTa4WWkB9GgVgQknRA9EskYR2796EhTwbE8Z6UaLW2oZYEWvRZv8",
  "key11": "3VrEeeCVa3cry3uvtotWqTt6wBnszMdHfKWhc5sYQyGWmkux7Cn7t5iyX4gFQ2SGo3KwktY2WPvBDbcdaTzFHnTn",
  "key12": "3wZbjrWQfMTJqci625MUFPjJBRrbM6dzve2aDYpp4NVyRXrn7scDe8NNhrQuHXeEXiaXBTdBatabujfRdDr2A4ki",
  "key13": "25KdfRnwqz69Wz9MHDa9Jne5A92UXhHbPjVdiRF7w7hzMaowNJ4KshknRQtCxAQ89wMf8vbfbzgigDs7AFMsyu1d",
  "key14": "3hcYvcMzCTMZst19R6nhpjJ6iNjAAfQntfenPh8mywzUFVrcT1YsQSYy6rfeCkLicgJU81ZfSAzo4mZ6ooM4LJrC",
  "key15": "2vPnTrLJK4YEyPqyJ5Hj21BRFK5Yo1dGtADndYmUvLFWe5TzeSz1RBnwTkxu1hjvFcxtf1WaMt9bg37kMWDkZZzT",
  "key16": "2JCAyj2Euh6miYUNNmySatuh7U7GDTrgEXcs3NyquppXbwAT54AasL1z8RmSHn8YgsbusofCsziXwG8yg1oqzGkq",
  "key17": "4d4FhNYcqi1nFy92QVRuVAY8CmkgqMenstqBkFTs2poWRRNXNeCEDsUq2ECqMcgV9UGbvzrQgSF5ycQ4GD1M4A16",
  "key18": "3nAVJHvSEEhcStWtVT6DbaiZUKVSDHu8AZjdvfa9o85vnQ5MLSxyFibysHtk7f1aTHqMbd7iGPPDYFWnKMGaB55E",
  "key19": "2JkKbAAuiRQ2aHVUNhvthcMZWjg1dfXUqdF71PWjr5TKApey8UCXvX2SxHSEQLoeMEdon7RBx65S3oRpS33vbh6e",
  "key20": "53r5mk1JEgiN6S2Rfbe5bgjtsjkuYHi77FTfbg6fFtUpUdQMkfNkD1Lmx6TfCwJZBWvJdDvTSy5faHDKkBwH7SmX",
  "key21": "nkgognroRv9BQyEtGuCSSPSoxDnicj7iqUaCwvK9UzzJXCpVA2j1hNApxLT96bbDoSwykqqPwXYS98ibwTKEifi",
  "key22": "5oWM7T9KffjXS8xN48i6yKmD3q7zZGrbyBSdsFr1qbR5ToCyzCNYjuMQkbXVNPy1VrwCdcAvNc4zaEvBLLng5STK",
  "key23": "5BwKQMW7FSo8KmP3DkfkuZr5cJ4faBYswnH8bumLcFFExWvArdFouQvHn9391CJD7SMMLj6qiTSVrbbAju3vArBm",
  "key24": "25PqN8tgFwsi7KtDUCZZXjT9psdqQju5qCTD6FR2QA5U1McR8kupE8tkYdc2yoZrzsYqRbWCEH7Cm9LMLF3EdKeT",
  "key25": "39xoZGCZ8X7LJyKPeCAEzKXtvP4TTUzGKn167mruL5V5jdGVn1zvdtHa9MKuTFJxDHZ3XPVtf92mv5GWLYXPQ3gG",
  "key26": "Tq5SomxPkWuoCGQTxGHLwZjKcKiiW3ntxtL5JDDQAghGThfay2NFBwrG1KCJQZQRcbniAD4ATk9pXCWADrUTn9L",
  "key27": "3iqxietqQ4HcFgFzC3XV9Wy5sFAmCakWGC4M56LqcTbGDBZKUK3mnqsmbRvDEFtYzFk2SBjrwEXu1E1UbwJEdjta",
  "key28": "nhWdAA21PcmB1ZU175647bkLqg9jGMqxL6dkeM18GB7YPkDyMgAC6gwWFiv8GFHooWBPGqBtjBKpTWm1bt7fnts",
  "key29": "67DDBQ6r2jzi9DaA5NTJxu3Xa61vexros4LgNMSDLFpaw9h7uW2JZtsQRXLnf1a2co7WAxN1doPSDDa9L9doiJ6s",
  "key30": "39eNeVUbFSB5uvQrLnm92qivyN2LFhjXJggks5n3aWypT4DoE8wesFCLDax53Jg8JnUTUT2t3kpSjrQ7SRgiaT9v",
  "key31": "2w3uuM27znrcSt4apovRBe9fRVh6fP5P9M2Q2VdhrmjGsYDpDhH1REaN8A1oNyS75bsRuy3aqBNxxbFagjdyMmwC",
  "key32": "2vaNRUgZQP9Lb9CJ6Z967xBjAQPF1YjaUPaS2h3nkJ6GbB4C7A78KLSq7SuWgHXd1uuFsB9g22TRFMuq5XBkqQY9",
  "key33": "4JspZUMuGy2jqqinEeKrQMmX1855LkKTj8bsGHdTuUnPEiPcT6hhVika65NKw3BEr4D62Jvc18RjvrinG19rN7UG",
  "key34": "3BKQubPv2wih1A4p1r91WVhnvX3MiosFSzSuaLbr9Tfh2ACBha28FJLpyokfGignG1Dj17vQx8pJcNecsW82F4jD"
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
