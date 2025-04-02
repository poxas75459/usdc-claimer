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
    "TparAgZbUzkHe3d5BcRpjdueQGzF25qVLwKQVCDAU4SLitx4Yk6W4JdFRYywNqmAqKkuBJMcJUf3fHhQEXtiXZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MFdDFDoqRyFKju9vqRjpjtWNbDJPbYyoD7Vpa5Nvdkz5uWLCHqDPQt9jn4QTEWXmhVaYqoD8NfwPjZY7mhXWtfV",
  "key1": "4sBFDxY8HcwRytoC37965uj1dis1ohEo5gMQd7eLtZcQ7Sh41Ehcc7V9kg8HFnjTiKUQxWpHKRfZXX2yWXy5uz3D",
  "key2": "2QG5MBtYog3o4b3fqGjqUFSXovgfe2bFmcf8GdeMvncLdeq3czAmHutjaS5RrWq1wb22qDbq1assCjskboSqSDhn",
  "key3": "4arqoo4pSH7eFNRvNsCCcfv1Rh8aoUmFcc1mvWQydgzkQ3P4tYV9jStz8kXLjfySrtZYNmqKQYmiCkmEbazyaGNo",
  "key4": "5J2y6TwLjzWCvNy9UsJXZAupSkbdGiqAfg2e5QYqVzcxRyT5TzNA1XEyVffWpwgSqAVJdb788bJVHBRdMc5BirZw",
  "key5": "5Rdeh8quPBiwDHLHRGWU77Jm3RxhHh5aYsMkis8ahE5tR8acyQamZPGs9z2Qbr8XNcbzwC9RH6LTfnzjyo5iqFQK",
  "key6": "64u4FQgy4kEDwCaNy3q4tgLxBFHGVDt5pWGNVjpQjQpUx18NhiDF8LAUevEFXEhRuovLTUVfqSJNMFerq2msAfCy",
  "key7": "2btvzSSuMzdXeZ9DbVjjhZxTmKCz3Bt7ETtJce3vLRnyLJ4o1ep6Lfmi41thV69n3SZuLJhRZEvorLPAbF6Yeitv",
  "key8": "AcDMWJmBRUVCNTtzR6rFNRXi9z9b32XajwZdEbPGNaZHFnBbdNgqb1uxS7bEXJvUprK3VMRTG2MCqimbkSeYRXk",
  "key9": "4oJShjHZjLqVTvDUkJTnftWGuWfpsuFjr55NRJj1YuUKAV2Ps8ruYd9Gz3uS4a5XNnQW73kTMuWSbGRHdJa7ii6E",
  "key10": "3Wa92avcMHd9NwaBybjaiBe95AxyMdtDVwczGpBRxao1P8chPmmsUXj8iYi7UePJ2RP67DJRwzdrHgari9BpbLyL",
  "key11": "4QGbsKTFVr3B2shbJd4S5ZczsVKJUSgoidRTepYVm6RxCM5PnJEqMprReewWZzm5fWrZScL1mXtpfr5KTisoeLjQ",
  "key12": "4zjVDTtRE95D2T5vpJ8gFSJjRkPK3QE9aCyQhaY3TCcz2yP33pDPJVjSdfQRF4YEEEzgVDXDCT3ESdRadZfc6Hyy",
  "key13": "29zmDx7ZTncJPY9Yah6itPhbV9k8nWdnukURSrQ6aj9bWQSpqo4VEGT5FDwTwLiJ2Fc2AfdgADJuzEBGo4Wk49Nj",
  "key14": "3mtG36NHAo2mg2NQks7Su9iFVQjm4DXMBUGH67Rbtpr9T6YP6oowo71W56h4skYjPZpumruJqBSi4qHqE7wEa7sV",
  "key15": "36pV24yuJPnYG1gYUbb5EKiTQUn4tGV2zki9HYkVCcsDbNnQ9XXC1NERvLW6yyrYZd9paTB4it2WTm6XKqC2tkeq",
  "key16": "5sB3fPqYtqBUfLk45D5aup3FRbLKRQ4BGhfMPWPRQVPqerTJqMWNRXwv2L3vjZ7nzfc1yhAD5jqAzfFRta95skYq",
  "key17": "5XYP8SbccYgYg62mWNuuLhC9GrzQ15Em22PQQrge2hz1H6YE2mJtP5oP5ST3v3coRGcBJX47vvDXmfD5r8TSUnVU",
  "key18": "5iUVsHRgMUt2GmtfEobfSUz2rdLh6FcJWPd2j7btbHtUajnpE4NV3H4LkkcV96PK7nrwcQPj2rVW9UfSMwTkFq68",
  "key19": "5PKVyjtmLC8sYrUTMf5A31hz6Wjxsh69Frc8szF764FmHxBeYMeDV9cca859Lrqkj4tTgdGYTXDc6xj7vC9W34Co",
  "key20": "3FqaNHZ4s8A2D7GKeq4Jng6CBmiZfUrpA1SQc8vcvBsTWEddWRusKsXNJ498ci6W4gVu3sd2e1kqTCLFUj7FYkz3",
  "key21": "5BChjk4eiNZvd9ZGU3xChgmuqGsugZyjKEpREwQpNR4jTm68sb5eMGb7hdXMS8owwZPsznNFXm2R7GXH9HE21hka",
  "key22": "4nmLpXmvZpDxqAWmGierateSQ7sWTTTeeftkzbhuXC9pfd4bTP2zW67i7xPWnJ1bb5M1382J3ubeMwp8TzSiEiyK",
  "key23": "2eXZrCDPhdR26sFq7vaJMQMZdhg2GfGxwpkBNYCHyhk2P6E5XRSkAdW5LrLwEt2kEumBa4osTD7ieemd38ejqi1V",
  "key24": "2yBRxvV9TpTaggj3DDNzNzAZeBW88uArQdifuEu75cBFeXMpNmcnMGrNahJ14121NpBkyZMcJpJpyUhZUSj2soUP",
  "key25": "2b2TeNUrseKmy5v5wUzgyvxV74GoPqZhonemostGUMfhFhwSiZeSrynV9Ld13kwNAAT1C1nit5d7E91SJohCxdrt",
  "key26": "3aLfT9fmtf9DprR4WKMN1kNUYdsvhRHeRsqUj7PUNRcPREV1M96viJbVicCb8ruHyGdHoRLJSQdCx2waqP26uTiG",
  "key27": "3X1h7LmVMbzR1LPr8dbiZkyssHzzf74XqMGLEe6a8kSYJJvS96QNZ5EBwmQcNmu2bJdD7GcC9rkKveaGH7b3k1x4",
  "key28": "2aKweXh4t342g9moKiByiQD8WZzFnS28JfYWhK1BwFTTXUoZhtf6FczLEoZ89oEGkJ4S6B8D4HdUS1ftu1cDzVou",
  "key29": "49f8mvjddLcgfnh7pAn8EPqMFdKwpnpvyu8jT4t5xbvE2Z6u9HiULs2hDQFTUGG9ABHLSHjkbN8Py7FNnEo9KSLE",
  "key30": "4YtpkoPwhGZyDs3cVU5Z7zo7qAvudxZVk53aSRHu78bDtxw6G1r6KNdJTB9y72RAG42J8Z88iTXE4MMjCcGkRDXE",
  "key31": "Cbqo1bVHad3m6GT61ABzMDwuZTtJMCZfRsCPnTJ3iFLSbejA4rrvQRnLDGNbtdRFxPzDhWCU2UgvAabrgYAksE8",
  "key32": "59Dpux6nqbwcKi7hHJkagKuKcsfP4riy2vKXQS3dqYnMsXRinkBBpYFxbQqpkefNNVcvVJEqJHggLYb5uNzs87ac",
  "key33": "2axKVtJK5piBQKCMxwwbxhA5d1Z2KQnFoACtVeNrpNT5iLBmQgbA7AhdNCh4ZL27pKvipqct2qjXz1BVzBFa9Dw7",
  "key34": "2YUpq1sX25qiEhgx1uegftgvikCVoJmc5HQJiufAeFt2r64GHZHLXs1SuyHvVYqVeyokn88eorTYCT8hiuvBZ2X6",
  "key35": "2vBATM36sEgzMYc1mRQUY3u3b7hdMfjTwaykNuYChvqrPZYtyvH974p9dboi1RDNCahR6y5b1VQNCukhFcMVyeN8",
  "key36": "5xZ3ySuA7SPXKiboh1aJWAPwNnC2UigRauTaakwPYhjdqEvCpFSDuq6qxDmXzBAsUH6guqjA147SKcibXgHziT4w",
  "key37": "3scMYips6eshk1yrdwiHMY6WXk2BCvVhj3v7YkmcAgP8FFdEZssYzy2b3nJ2qczyPQ3nqZBkR3LpDeAPL81VAGjX",
  "key38": "643GDHXpZwhJmvXguCEFvbdxye6SSshowKdCnekVfZcTZuczCcGysCw8S2DArAn2PC9vNuXt1Af4fqCzfkf3sGzu",
  "key39": "6GJykcTouBcwFUfvzFjG5E2auxSaNFYKSx47kes7uPomJRe4ZT8oBEGUn3zhyi2CHxYo2ijMPHNJAmqLgcc81aK",
  "key40": "4jvY2XVe13zkf2JL6aynU7kLCw2eneyPx2wLzSDE4tbZNaEgFwiabvVqQddRqaqaktAYHkbN3eqCJ5Z3K3BvK9xQ",
  "key41": "2ZpWBcefndXzqGGtPCgFsvsYUfPsWPP47CTh5c5R13VfGym7rCz9NVx7jvR6beoG9sAdPEJFstpGiX68A7zx7jkF",
  "key42": "wtZ1BgTvywESxdax3NurErfYeLJbL6S38Ji2wvJa3JxFB4dVmeaUdp5N7bvqLCrHpAfbRVam6ukDQHD82CTVdTn"
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
