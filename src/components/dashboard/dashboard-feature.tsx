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
    "3p5n6b7Ug8X2GvJVjau6eK5AwVEEfi2dWmm58spGUsVRRBZJagPHvKP1kHw86bWca2Tnsxu4TeYpVi2Jk1s1o1ob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqQYsmCevbEirbn68QDeeHFQ6FRTb5Ra21UFMptRonjSyS1AMRpwhqFjDddBbxbPd1LTiW7fDTEE79iHoKZ7tdJ",
  "key1": "4UEZ5mW3Z18BggzWKHMgvWxuzf3bYYXLru9Ukoi5QBAXoyU4XBRiLKGk7JGYQRhZ5QQ9a5CLhE5aaTGXnzrwxZJ",
  "key2": "S36eijc6GBqXNs7wJ5CPB6JSrFpD23yMM6CJk1jtQ6Tr5YqZDEtA29CGcP7ACgVx2swe31tLS6MMJXAZProJRj6",
  "key3": "4W89erhqACpjsvtEgK1MUoqJsPfDZQ4xrEnJatJqLkq1kHmXwiTijXQ4wRpfPCNWcTQX2aCGxCqjhtPkujQN3SEt",
  "key4": "5KDcbfAzjLzmA8aEKwqpiK3tK32dfji7p5fFVky68sBjrfMxkaXczXXFDxScu1BDWQWYVriPWxjuuXWNstZb1bdi",
  "key5": "4Z99RLSEmzSZvmJ9b6HgPWUC9drQ8q4U66GfgPcePRghSxrcXaq5GrqhtzuoqZaqxRbDViHqME7qiGngBNVc14ZP",
  "key6": "46mLaGpbxNBhQnQwHYddY536TwTEBgqB6tZhdsYCQVyqmDwteyUx4dtL7pTVpKn1nPiy6MfttT5DwJ9ceJoQxcdP",
  "key7": "3tzBx9bvyYHP7bszmR912NVNmcGeLtPKqbjjKvmycrxdybJ9GDmDbpv3rxdxyYnyEWPQhyG9HRoX7YWEZw4N5Syu",
  "key8": "5ut4XEQrYZxUq3eVh4Pzwy6A96ti5FXfwMACR5UuQNkMbmdNnhCzJTdxbyNSpC6nizmk3NSVpR8kLfx99VJZp4Mo",
  "key9": "4XLegyCRpJ41ATLBCAShJdcJsZYgBcuVpmCSzn534vLP48w9iAFmHrBzxKffQkusw6x4cacKrApd4CvY6sWB6EaM",
  "key10": "39qfKFkBWZDPrmbrAuNTNMTmkCjmhNq2GCHAkrqX79AfocUHraL5BksiSwDNVrF8R8V54r6T8yY3fTZ9GPmaQdCT",
  "key11": "5oHztgaqLd7M6MHS9GbbgsGLfQBNUG8RqjMamxEqXV266yDEGxCqoSk8qvtHj3VjakEsYuFTMWRZMnqHnBDDF3rx",
  "key12": "3GfcqxJiZam4boT5HUgnmA8Pnr1jabVdGKY8W3JnVoZgqqECZ3ss9fB5z7TQykSPWj1StUMvQ3pEGg3dBDbYraK7",
  "key13": "4hZVLjSuTp6BZW6d7nFwsJBFYvcbtnp5nN2wdjzr8uCmCn2Ss1uDMTZUkuXYNRGVfyRQSB3NB1XcmQwt7aUU2C2s",
  "key14": "GLiSDF7B2sTh7jcKGJ7r83ogL63UTDD9tBuPtF57W1z5p8BNaJsiVC9d7BACqLvHfL28y85hgyqpUq5izhd7cWZ",
  "key15": "2HdpsRcEWiqxvsbdph5AoY7WVfxiyXvGBhhc3Hux3Lv6zJJ7NnR6E7cBwmkXth4AWt5R42TYWzyFZadn1ADi5yHY",
  "key16": "C2QPYVYJN9VRh71bc9APuSvUtXMDWzQpxk6D9csNFJ9EVwtcexWhXFWLAsFo1nweapfZR8Rj75PTfD8jgUAMbiX",
  "key17": "4S3bBciuUGC4jMKK3Wt38s1SM3CwfD3D3RqMKnRCky4A2SxtRa6n8gMdwzyVuMtxBDSoaFCa1mJanAHC1TLTMJvH",
  "key18": "4PUj2TyWYpTZ5WwRSzPRkeY3vTLkeWzKfSXSWQcZfSAb248RJyfvreackMwTQ6LxdscdWuvPF1KXf3hoJRJf1Nm4",
  "key19": "LNhLYeHsT4MT5iGWM6826DELsYHR9JjX5JcPYuQjm1pRjZwsjgmujtaLFvhNPpseJsNXnrJYFoxeLUWvzRWuMrW",
  "key20": "aL2CfPVyu54mN7YEHfnrcyVMAfx19AqLtYeFMhRtZLYZs3bhbwS7qvwcBo5LpmBihYA17u9RWSNFsR1jg4uAegS",
  "key21": "5SvFXM1S3BeVguyYX3bXxZkJhT2N5jAoTcF373whpwg5nABFF6yfSmyDxnbCW2oxwNqa8yvGAxCDHgrdRQKnYmxW",
  "key22": "29vNhNFsBrCAjBGtXb2hWWPr3ZHLWMvcEtTG14QeQFTAiXwzUEQv8kd238Ts4LziDx1LsmXdoNSZB9gapkwkz8Xc",
  "key23": "3ZnsM6XGz44we6pYQM6U9Jnwqg3NCCkUSdKxnB4kEW8ppcDpTGww9MnptYgfSBHmCBGr8bmCpfwuXwq4xMtsZvHX",
  "key24": "3tNZpu2sSJgzAQfwbH9xJgrDcXndZxFbqxAQaZn3NKzhBawy2XaBa4asvDQR23hH4Uhpxqnfbn6mkobuZG6WKpfn",
  "key25": "2A49h25UEuvbahdHm6vNqXYZw6XekNUo793FzJFauwd3p4hKGG8TDjeUgMaq5B44X5oek96WHRRBMyCrm8DeTXjc",
  "key26": "3aYH96Y6RyXgSyWDg6SYeuzZwwBBNPop1CBXhsFujNBqmpejWVDZRvW5K6gn1u5yobwvH8cTsXrVAhY5M6QngXm5",
  "key27": "PDQhrgtJuguZiiWSNYrUUnMWWToz857heeEr5LJYL7G4HGqLDxCfoT5PvDJ28n3zxRwsXmh76XSCGDRUbDM421Y",
  "key28": "nBbkRfbCcudUfyb5YPSEsRWoUMBiDDC53RrzCFDAaEctaED9ZMYCf3ZA7sqxcyevi8VnkjMLYAzmKPibmgzPFDx",
  "key29": "3wrNpME7fFuvxLgU4xsHQddjh6tsgseki1CcurRrbCz1pY2ZbcKW7PFW4CGhbebhrr44LwNqr9YSNuAyF47KSQBX",
  "key30": "3TLpkmddKDtXHiZqQSUJnKL7GyS9Lna8mt6PhXzJLrGBEbfRhGzdRXTPRVaaJ7nhY5AAFWWewJY5SHtxUcA1Zr8C",
  "key31": "4YUFGNJvFeCaYTwiEEnq6Q16eXXvpwVajv1PtZfRQmHdXQSk1G1GhvkqcgxkoppgBoYTSAF5w86uPhoVF9Z7EGaV",
  "key32": "2paaxX8qysd4vaLW76sW2MqMKwaHVKX9kDAFmrgLmsuFHY2NgWJMd3CP9djfiS8jkWWiU4qkYaKcmBZNu193Ba5h",
  "key33": "5itmdftUSyvQaCSCPLTiqQQBi2XQ9QSCiwhpLiQLWLJH4RXF6MUHFTuSa3fhAC5hVL4sfo3BRZ4Nj6RbATiAz7QQ",
  "key34": "47B1XhzRut9jJ8bqGznT5B4m93cL2qAgwWGr2WoVtwNhSHdb46E6U8BD4UK9A3QGdoW7X4CmGe1oJscyF8rjqibf",
  "key35": "qt7NvDcA5ZPHdQtwpVSAAA6WUsnrdu6RemQfXtKuEku4oC2Vdbu9A4pY52FvYgMWuFv2y98RUktbHeQUz3xEH9d",
  "key36": "3PvLBzNzabKPkPsHD7kr7hKS9pypSjqMzNG6Qs2jCrXjsNcM7L2xZct7HgSxc81xtQMVSWTbZnFFqUz7KxJgVFEf",
  "key37": "3e4KLZVPKZEXmEfkmMMYYCyTvREM2JJ6sNifycCY3i9eEBrPUwXmfn3Tb7xSqd1fit6WjAMKANtMhW4snRypjE8d",
  "key38": "4VBkWQvo9qsobNmm3sRdRoDuY5LEpN9MCqPqiukdWXdSs25LafRhxTGzubwDZLxTf8ZNWUeYriRNSRLN69naBiDc"
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
