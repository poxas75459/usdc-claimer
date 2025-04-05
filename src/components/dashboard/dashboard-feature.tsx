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
    "Ljvn3bMPfbue65AQNtKbBMWpnizW9yD8MwkxLMefhHJ2Lv15Q5VuRoCsXkM89tFw6Ng6Ku3howAFMDk6Fcuqbor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tqcLH18AaJLRCZubSsFokEqtRp2NYffR8De5rRm5r3piGGBrZSsVpD5NMJQFHMu2xmHyxD6DNx4gj2pZG9FzF69",
  "key1": "5XtSjDmaVR1BGdzqxgra7iYKK7zfWmGJpKUkyM6hXwM8MYMSufJB8XEK1YKtKJm1ur9fDRTzQCxbwGR1pF7RoLBJ",
  "key2": "iL1cnTiiKYCkR3S8x32yqHu2jokbvdaKxSsBJFprCmxvRBRBbNjV4bEfTUmRVoc5fuhtP83NocnsKStrDvAwnd5",
  "key3": "5wqBDzwj5s7xpuKUNetQiZ1deEvvBMftdrJwS5XSPizg4b8vJTqqhzHpVwHyym45rrjnHNsX5MbZ9eyePoLRVwhB",
  "key4": "eHk2yNWV24sBgiDNTLq4iKrWgP8f9D215vBazE8sMjfXXRMDYDfNFDynPm3FTXDCak6wHrmDNo8TmajGgNSk3T1",
  "key5": "5i5YjuqaXUgY22JZzsqARvz4JwyFejPTCTwahXYRMsVpPDzBBAszmSRUoiopHVcDcARqpyzR6Fau5bNptx6WYAX",
  "key6": "4YoPDeH4xEYJeA8bfL173kRXEsjwk16z1P9nqsyXNwq2pbrwUgYCeh3gKyfZQpHAyWf1gUakZgMEC7TaYJ7hAfF6",
  "key7": "2uessox9DzhVJJtp2vF64gwz6ogkX5APZVyyxqh5JrQ7hFLqTr6bVJRkLpiyEv7vTY3ND33aT3treHKbn7w65euB",
  "key8": "3V2xP9pZowBuPNayunmFEK2rRT3ZWSdmDqbxSZf83cqmCMfqBm1PzaB3SzwT4jKUnKkSgYQ9YpcsezgX8L6qF1f3",
  "key9": "8po8ocT6WCuwdaEthcyxgJubf7JqnqWLBXx4ooSNF1zkX7pmYAos2oyQoGven4WebVAbfJUqNCxVwTDFvWK3A3D",
  "key10": "4p7meY72VFcZMVB9PgjdoNURm7QuvdYZsu94c5k48VXCLYWDV82M6mbbrFaAKX2RTKmsT9nNzm6rBxrNfPx1h82b",
  "key11": "24bw8YQwkVRVRAUHftVLLTRj8xqtYKmj55aXHve1wk5QppJ5j4oKj5Km6VfpEUp8qJVWnj4By6XuxVUGLHi3ou1z",
  "key12": "4AfLaadYxUNKVuuRfQt91zD4capoTdkf9t4XQkK7SmXcQb82GQpeUKPe55Rv1tpWjKcECUZNVgJs6mP1PqnJRKML",
  "key13": "3P62bBr8PtgHJ1vyrLA4u8YLHjWrg13PuDqwPZPGvrU2NEoe8L3QCjVCYZ7ykNaczPEyPooLssHDLiCL8gxTGZeY",
  "key14": "3K9GKi8Vr8YfVKKakGaHQ5tSG3hjHLXE3Ykpbn1kYLAgVZFBm9kXXFUz6cDX4D5TRTY7UwXXGzaj1s9BbbnSLqp",
  "key15": "2qhZPhjjfugfwMjgMtEf8faM8eK3KJvPkrWLHaPLzQHJDqq7ULEWWcytqkPSDyiD6r2wW7D3cKVnjAsT88fniP9U",
  "key16": "2VQbFf3DJADci86LfvpLdwp2vXPj8A1wuRfGVhcn6gtEVz33gtcouDbJf7arndV6GXkDrx5UgXHjNgxAS8dkYszg",
  "key17": "3UyUpQxaTJuj5pkpxMuUzNQcqPCToL3spjJywpuFGVq378i4TTib8bLNEXFhH821hTXm6VjTixJYrBZGZKKFMg1B",
  "key18": "5HgQo1MCKu8vV9EtGYCheXvwrsn7gpqqvAVCtTT9xwHiB9vfgEbawHnXxVG3wGLHGNPfsp7dLKFXz1Z8D187JegR",
  "key19": "5DFwiT94W9CAGbgUTgF7FPUopyHuk9bkjMW5KSPVV1y5bULb5xh4B5qV6wJMD1mA4x1TEG6e1CmhQZEJWmyAC4Lm",
  "key20": "51EaMLpmAzxnRLQtkU8otYn47XhBVDzURPDe8YAVr7Pnr7EAAiGCoRjbByjSqFhxLUK3rdPqK98erchQMwS1C3GG",
  "key21": "4bEjcMWbcMscFENNhsFUGULuk5bHXRLbM1sZn3RRbZ5ZkVqFmsDVYcD5LN7dcxoTw1RNuRzmzWZaebANPGhfP926",
  "key22": "be7UjtRLkyAtW5ZDVAw1daabKZ7ecfnkhbf3UcNE2ZFzGdccsQAwiDbkZK5M5z3paJ92HHF9L2nce4YDNSQ2Gj1",
  "key23": "fmCnwihHJe4ky3gMPZYtoFivSdoPnYNquq8xysYdy21X5ajGoeUQF5q8qNBr5dzCew8sdU7HvA5x2jhKEksA2hE",
  "key24": "5ATxXGRJcarnvKP1DA36aEhCYL1RCQoirohwtEqQR3xairQf8jdLZkck4xBtrRywMF1gbZDHuDtq5cxP93J5a4y1",
  "key25": "5MB7qYbt6Sje9kMi4UF2dxFH1L1rw6kWyV63n9RE9hGBfjyfVbxx4MdK3C46ZDiefs1ZaFWXfT8rU5gDDBoExaR3",
  "key26": "32AKT7Npn3WoVRT2RAS5DHB4A4ac2146tHhoa4bfgn7fkemzxrkS8gY8DJSQBGGsy3MajHtSrn6v9Hrt8Y8zmNVq",
  "key27": "8j7f1vw62uCXtFR5swHuzZa7oLTbXhKKZJCDWPEvnWx71y5G2NRA9xEqBy7RSgZZa8h99J4WzC3mqtHbAeqBaKD",
  "key28": "4tsaRqzUypTpc6wvEdvas3LJRxDDBTmw2ioum3peYSMbY3oELLWwG3J1rf7fx7utsZh65t9z5NGP8wVNKyhx9jeT",
  "key29": "3TRGjgd6mxh7UwjqTQPndBtj8fJdS8KYYoeuW6muG8X9J6565MpMdeJAQ4rSzWYiZHkbd94HBH2fuu2jQMZyPeA",
  "key30": "3vrx7jLxCBYVP1VR7XvTd65Lnnsa3Dy9KFNUjPXJQ83DPyfxQpbrBecyn8LjqKFEcaTCf66CgchCZ6s3a6iyKzkE",
  "key31": "5tD4Yufyg4mFEwFkVEX3Y7M1kzruE7wT1HsyXYcTdex5WvW5W5d2W3aRrYKuoPM4DynGYDW3qYeFfiRGjX61Xa9i",
  "key32": "5arU9tktwt5jR322NUN14TvjWgXA2L8qW9B9owMbSR63qMqviq2hViFBF8ZgfnvNoZEoUGX29bAzAA3fCk7Cqgqe",
  "key33": "2y4B54uYAqHXi8YyAsikoiHDFxhmumL9KUSFPuSr4WPyeYDnjBVpp4NwpYYNHeLcrqXTGd2TVsYjZkuUdHFrraUw",
  "key34": "3ZSHeSHmPpGVxmGJyGLDWAm9nCFA5piwzsXnN9BY7muaBQTCUpU3H56CvuM4CuSHD2PnBpMvhTmgtSL4xBo1N2rU",
  "key35": "2C6qWDHh9J71yGUm9AqdXmEuwNTW2Gi2iLVywc9NUBFmctPZQW1ynSCtvBipooRzCBkGMbXLCEvrCAdnb4svCj7v"
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
