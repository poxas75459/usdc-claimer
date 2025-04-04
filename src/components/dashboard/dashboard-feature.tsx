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
    "2wNru1A3Hg3pF5bVVKmFtS9Z4Tkb9Tp727tH6i1GbzXad4bMCRUzfqCNSzbjEcsg3deeCxz7194NwBzmybxzZwxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gfoms6h6Apob2Q8Pq6wWRaM89zgdiA54YRSPTdCj4Q46otL3vTSdngLv5VwEhAQH3kbRszn4nTXMe9VGQo5uxSi",
  "key1": "5ZmS44W732EWz9Yqa4SPVb5FYWNG6wHUmwA6sKV1Jspj3hBd4H3izRQECJYWnH3JpEyB1KA5swNziTpQeX65eHJE",
  "key2": "2d8J8t8tyVYfu7X8kf5rTRVkLm3MVaKCx68WrFJB1efXGzvpQPszWixP8LrA8jCaZrEfYk6KscA4w8HqMSHiUHQh",
  "key3": "5Gt4uKUUnN3dTmGN5gsR6gfVXGHZbe7JSyBY3o3C6G3VqZUBTGRTYZsGE6D2274CY7BQ5Sc4muQtmbD1Copf1ji4",
  "key4": "4uFaNCLwVKzdScnKRBPdMii8YbrnxrMFKnoLSoMuty95qCiJHnYqKMbr1mWLE74PKtSBH3a7amfqqo47Var2xkoD",
  "key5": "jwTgtGx4V3SKLYfndfuvBd5usZDHnAvXSbSdytrdWuMwLf8EUnatGzt7mjiCkjC89fn7rxR7Xu2CLURtCMBWhKt",
  "key6": "4amvDNXN8BBnDsjWkiaMdMmZs78VQEBTn7uPf6UxkGXbAXBb6mRXoJAZ68Zoi8cWHXnfrdtLvUTVHfRkdtHaGG1c",
  "key7": "3831USgGiqvk8TdMWL7sMmHTngfMzBh5JWKzgwjg36BDQ5aBPLBPG4V91VSekmty3vcdyFnwysXUQJNvsXJfm7Bm",
  "key8": "5DEkx3CznFGLqceH7fkyjryzPztMi9rd748DokfpjY5AxwSNhTJYHjQ3V6g8Rhr83xgGiBEF6E13UVy9M4geApxa",
  "key9": "2QchiMdxDfWr4c9LqCFwuAeVVigS3s8aJvozNLDYgxC7w36iVybi6Mqc2N4ZvRWjAEeTHrKmurhcqt333P8ZwsQK",
  "key10": "38ZexJoQkHLT3ZBbaDA6SyHM3rWiazjm1Epan4JfZEfp9jrPh7D5zcsxf5L9S8RUsradYXpg77x7txFRTeCb5aAb",
  "key11": "4KXqL2Jv1BaGkQ13YxMRWdD6NNEF9jxkzmrThPeGr6mUHZaxSpixAzptNSxZPMyT12bEyb4vFn9QQigEV9WFeRB8",
  "key12": "dJ7kdSPB6tGVCsC4FMKgLym96QkaBTqaB5Pnqyx1yKvyFaoeZSasAkX9iBNuuHSZWWBnf12FbHwnvhrR73otL3K",
  "key13": "4QHiFBo7cz1kX9TNqK7wWcyggmz1SzPQND2QBE3smFsvXPahqPwt4pMZsRRbGsLiY8jfFgjNagzkHYkbR9hSPaGi",
  "key14": "Hezzbx8hgKZSENYc9UumGV1mu6oz5YNnhXKJkxTAqgAN33zgrxpzuWxxDWDEZn4f79ABzcVp1vPvwP9JZbnJUWN",
  "key15": "466AyCmRNNxGBkhj7yLUs2dCrDtpuzGpMvzRra5cX7BfbhMDwYw7gJzTBZ8TPgooTk8GWgSpr5n21cBKXNYTsVji",
  "key16": "3QKgJGK1S9hSPzgWBYs4X7npmprBeeWMK8Hps6QUC3mcMQxyHxkJ8gLvcTrxhnVL9eoz8GN6ugsoN9Fwtmst9cUH",
  "key17": "3CzaM5hPWWpEYHGQPTLJmmk4vGSwmveo9KieCb5wbqMkMFGXt132uHtsMfrjj4btSmSE33NaubHZMQ5KRJTmgg1q",
  "key18": "5WHgeFZFtsNJvRLEgGsysdMyLVTEa374dVNDZjxh6nrEtEH7kaQp8ZqhTNytreapXuHMNXkMqJJAWT1YVavAhSuR",
  "key19": "47cRRf6fLyoAoWp5uqtobHB7MtcxpaXJhqDEfMTCctHeZmLFGmynnVXUnWYJtYhKsd2MtBLFjst4cv3tWRQ78Wme",
  "key20": "64LqrkYBGhApWjWvULCN4vtdNQFRYigswt5ZBRYonsvHLaGMffR7FyU5hcb8MFZ1cChtZNzHEiM3y1ijq5TGnSDQ",
  "key21": "5cc3YktBX8uZDSrS3T5YNf6HpbpUEuntZvRtzYtG9WBLEr322U1z2XRqw3MfM1BCNaJkvpL4hhBapjbjcLAPb65P",
  "key22": "ttp9ySMZfQWM8TwNEhtiwzDMZorVx3ka6uRgg3Yjw1ayEUKuoxJtJjViDwPxcZhX1Es7fJabd2ATHgubwEmzfzF",
  "key23": "65fJnQ5Ks5QLPEia6e4Qmxk21LdzzoAUF2S6j4SCqDES4nQB6bu7sbBaTwTTdkt29DmgukwoDJHSwTArXjSRj2bH",
  "key24": "4J8GwamYcpx5paq8Uefse441heNcKjeMSitoneMZYmFE3EZNqKbVUJtJnwTRrUcYM8QnkwAHuy8rz8AJpGXfVxGx",
  "key25": "4bx5dEKPf8o4qU9Mzvcp4eYHaNYSYjAfpLzmrKzwVqztE24bqWiw8tsUZi8jaReU7Wj7uTVB28u2a5ytmLpwvCDk",
  "key26": "pPDaRsZgWqZ2Q62cQ1xY2Gzc1Y3MByGuafWznCh1JKERk2Ai2zhUw6fHjD3bXqgqKf5dAHnkbYV1ximsT9H7oAW",
  "key27": "491Cqx3pPBKepRBQqnEH5FPRB6f1dmC5DhdvMMWWLgrP8Rq1MJoyYdZ9e9sd3wfFD19wX4XJ2TmABRMf8znu8fKE",
  "key28": "4EEhzBE1A8Fnpta2WpRTPEKaNKuXP5D8b3ESvjt8WEfpv686iJ2c7Lx1ycjFqZTUj3ixHTsqbfCPcZ6PbZCo3htu",
  "key29": "37KFm3BiL5tfCnvcbvypXkvVKh4sXgvkCiQYpscFiGG6b5NS1Pi5Am3CbZwczhdsXBwm7z5Nwpp3dymRLyZkahWL",
  "key30": "279L7w5nS81mQ7P1cZdqqVKeDhw7vWVDGy7ZtY3ZDpno82b8fHUCSyhGy9WdmyKYeFBaqG7BGz7CjMt9vAhp39fy",
  "key31": "2V8AujpBaFeszgxvUPPsda4uj3qNiDvjqygioDckxBiraBgT7bkYR7XWpJ8UAqXmwD5ViuPozYgMpH5Wq4e8e7xi",
  "key32": "4UdXaKXmhkwHjcjoGEFfFDCr71D3zp9qhTBJyW72ABBB79F9miBeX1Mr2yb2qWizzipYPbEmK65j84jkCTihpY9P",
  "key33": "ipqfzctoNtBfzxYg9h8R2mACh8RcHxsbwhGhirqtvHT11dNKk5uPGqdPUEbw1S1d3HdVXyp7jpUphzDys2BrQ2w",
  "key34": "3Y1PfCAqHXSwWq5pKTgqJ8SVfVGjQRE35gCmj2hVDuhcYK65R5MEfpwnnYPcmg3NFevGjucny4256YcK3tufdNus",
  "key35": "37WYikRBvHGLTnGzp6PnaoB98PR5PkBDYbQjnTLqzZX4a9ZdgLa9AXvUwc5ApAKhdy4Xor5m3qNTec3u18iWXNA4",
  "key36": "5NX6LxP3FpWXWjMBN2RGJFnfTJ4hvAvUccrdBWFjTUEgCooPf4Y3ubbiRJYq7QYt8ShZvPJvgEarU4mbTDyiN9gE",
  "key37": "5MGSJiSjRPL4yEWEYVhhDxpzMiueV9ssE71FCTwhqibcXHH1g1e77YfV3rQFFEBaer77juq7yfW6pShp1MjWsayB",
  "key38": "4rkj1QpMGfQY5A8NQskd8JyW2nQVhD5wFJUZsZ5dcPjkGTntCCKL59tQFKPEJ2R6wsZrazCL6PjAfS9Wgqa1UQy3",
  "key39": "5BVZkWaRTUbATNGn8EtmJ5nfS8RYKVC7Qa5773Sw3AboC2mPnugYRKeVxLkjgYXmh2sVsTo3V4gCu5BF7xBZ691m",
  "key40": "5J9GTjhNwCym9xWxHTS58UaGFBzhBHJWS6jvAaCwkBH1fE4BJcnj6JU2JkPBWsddVQDaFc5x9dxCZFaWX3EA6dMT",
  "key41": "49SM9uvwrQDifiTQvBNfdGM7wt6rR5xp2dSGZJPGwRGSyJyMeVAhxgdibNHmk3oujgNxguR5YrLce1TTnu2zSDRa",
  "key42": "67fLZ4FJRLYUGSQbhu2JNLXESqPmCTuqWupvVn9xKyZT9bPJB5hCidgGeMFLbUyj8hboCezkBy8swJXyQ52zKhmx",
  "key43": "4TP7WPxXptWiUV3uFMnsUxT2CyEY5tPesCEYB7TwyfPp9JrNEKLzi1BXh3wzqxJf7tYxUn1BBBPLHMo9jof84ATC",
  "key44": "5gLkSme4LvcLTHMXfUML8FimBS6Gp1GPpEJ9RNEEf1zbWEk9aBw3ZGLARUsodtN76qZsPq1X2jJgAhM2TgL7Mt4f",
  "key45": "3Y2Mm4uPZAvU51Gc4Mn4WaKcoE1cwVdBcPCmUP85yQBRZotq1155pgPzRFFK5xwxemMgbjsn5DfQiXNWguK7n2Mv",
  "key46": "3wxTqJyHqPGUNDbtyVJE2hwyGhohTJiCPdvuKENhvec5VD2DsugoN7uCMbVAA4V7gyffhttCoZ6eNRkiDihhMgpC"
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
