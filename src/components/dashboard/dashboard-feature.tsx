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
    "2ThZqjQkKdjZJjPEu5E2sX5REk4kpbCxcrmCPNyxvZMae47T1rp5fxXo9BHydyANGnivFp6BpEfQVhd8offFw9EL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Aj2ykE1p5bCkZstxMKfzfB9Hd4Meu9kHGrihaZtqx9guRkCzW7JNWQ1h1JMdjgedwoEAUdC1saZaAP5aUtVhq2",
  "key1": "5SzRYUWDfEDnA6rbQynJHjANZ6sDcJah4vhcyqefpDMYPx3YU1XG2fgm2a9goahNfTyDwW2JZtpXaP3iGkTdvTGP",
  "key2": "4zdATHwS7Pvj94yP4LJNviNxWa1qaNokou2btSWdKgDD56RYav9W4fRMHmHGX632jRH1uPmaSA9ugdZ8d3MwBAjg",
  "key3": "29Z1MJf75JfbyktPTwcX5R1shyd38BNB5bkmCBaCmd4UJMt5vBAfznvYeR7ZJh8U1ACXss6Fz4hjc4STV495P7KD",
  "key4": "29x5MnK8DJa1gaVBea78ucHiWkiMhXHSX4LK1twwuFTQPSphDwprsi7d4vRAySXqtYR1tLjUBX3dGs2SbJxMfW6v",
  "key5": "47qZwkMd8JubPRjD5X5H1raxcxvwvqJDMG5aPMz7dehK59KBygUM5na9tLFHQS9wBoAEqCFgwCoeyFGQmQepPbup",
  "key6": "4Y25f8MZjfoBZFoLaumkvxTGXddtgAtfyZqK3DTGRTTndXnRRrnr5vy38kzFh5bimeVcMFSY5wXUtwJ6E9bZ7AFc",
  "key7": "jDFASwFH8GUr1PwVvx7DK37XLoBjrK6oEEDAyYQiCmqxiGfv5civ9VejL5NGEGWWMXbya968bsdqhk9qjkhpJ4N",
  "key8": "29xgd8Fvzn9q4tfF6CjPkgxHYMYmrpzXs47PhUwFqogBJz5nphjgQxH1kgxKZ5bMXnh89cKFSqBSgYUcEXSUNqhk",
  "key9": "2EEGVHXVMLjhLfvMb2Gs87cBgogeR62VJxBuuDyFySdbYFyj9e5KcppKNop6Pc1rwUCKC5iyVdwFoMVR7aU85uZs",
  "key10": "4KwLdxcrr54XHZ7EEzJxNwoerTfd4PhCByD2rWkroAnEk1DLUeZFhyhCaMrNBpe1PH3sKrKFVYhtUWPyiN5qxsiq",
  "key11": "5soQeoF3kWHruUnrnZxBCxwyarWauqw154h2q9f6NWEV2H1nfdyv6s3Aks3X2W4P9xzjRVDtpmCEh2a6yG7reX5W",
  "key12": "3YkssvnocdDFCd4KuYkQE4e1EseFBWFg57uSpzvcBNzzaN6QDRTkbnCx7QFY2EhrPLRkcvLao3z4S5UTdNTsVep",
  "key13": "2vpRuznPkZ8H5WcFwGstt6UB5dFtia9mzUA1TxvJayxsWLTHPoPhz2p3QH7ZiECWV58f6aB3mtsNWio5rQ5eKeW9",
  "key14": "65dVgSYSM9YS25TUGUAbF9L2KioR7s9vBgfgpopWmWPPcSvBcepAC3pJZ3DAv1ENqcc6yERsBQwVa1yj8W8WJH1s",
  "key15": "3R1GV16bEe2zvXs3NB58nmLm5qQuJjPmR8pFB8B8Vg9fWjPEXs62wYmFtUv1VW8Kfi3wQrPWjyzpdH1DMxX82e8",
  "key16": "xMArkyimiJ2VxZR6U6QRqcn3HMwDtBemr26e3uxkiozKdngcTyLCvKk7SRoSzHy7qmA2CkLgsnnRArNGcZ2gT4d",
  "key17": "3kdyWbhjJfkBEW53ELEeT7iUKvK1j8UZz3TasAGRXQMTtN1q9WwfhVqtGAo3etK8k56rDrzr7vaEwVgRvr1XgewM",
  "key18": "gmgGseWqTFCc2WCt6PLf8gWebk5UqjsPBUJKU438HPyMWoR4XV2dD3phDe6fyXcbG5JSATJetcNuVqfJfSM3hgn",
  "key19": "2QDU6QXGpjAyLPiS6yMMqBxoDgvS6H8CTx2W13actuDacBZGRGLx7LqjASgNBMpfkKzpjHsed1iPCDFE3ivJxZpo",
  "key20": "2PNd7Pdy2gg3ee3cSi6Sd5inr5gebnqaAcEQhcYFT7MEBpnEJvndfM67BXBYd3MsD8CKZrBDRvDduLtFXozaGwdW",
  "key21": "5GU1B5XjZUXbuv38KnCkhm7Tmmv9g3bdeGevnMaHmARZLrLMeL7FBJ85E2qgEQVvfuPRBXs4iaz7kYdgHHiexHEx",
  "key22": "7StE61ZPunmVTBMrbwn8SZBzC2vmrjv8g4jqWXk1tE2tXj3qZobYYuQVErG5rJYnzotDGi4Fg4d7n7xRsg7XRrq",
  "key23": "3GEEbFRNZZYZP9yT9jZF5mW7Muy7oi28wZkh1M1pKgj5BkVdqpzRx4k6fKxAZqneoR7RyQRycojkNqn4uMsbTTMR",
  "key24": "4PVWGyUwVSTVNKf8bXbn6qees5gihr2xnLrDwRTi34Hpo7AEgwDourFCd8kqgNk1dN4eVqmN9kANza5vhmeKHpMP",
  "key25": "5kPaiydsgw2bcf74L2tL64FXe3zxVCohgJrJCpDsRbzA3yu8Y8qFUvmyYp7SkJz4DwgPT4GzTo2PHdfvcrNfrARs",
  "key26": "5YZPDYsnopMPru8w98PqNYKEVLgcJNdYMoyz3QTABJEZMXfakcHSu2UCBx7Vjs6B3KZ4hS8tiiPQLFFmsMXjQFLZ",
  "key27": "5KW6UM2ZEjPCdtv1Qn5EiAZ6Zt1p3U38QQkKayMexKDBt2nXhPbj9f4UQMpkk7v5W2MhQ3ev7ZiUuKWJnTqTLyT2",
  "key28": "vFoguBGdy7HrdJDpEMsS5V8qzF56FtMz7EEC7LQYArYEjxLVPYJvHoampcxGDsvbYZpphEvaabWTxqgo6agc3pF",
  "key29": "41BJf4naSoQwLym9DnfKmbHtQMGN7MtaZbNXLknjUQLtuLd6XA8yhbC72rLgLfevT45QV5epCe5U5VPBtwU2VUHj",
  "key30": "29WAWyw93QJZYAQMLx3GKN3rjD8XY197VYTUTG83DdzRHmWR7uEVWxijGnuBtjFKgUeCRUemAhTJoEreLCkho4TM",
  "key31": "55tc2YW1vEJZBZqJpM63HHhw2Ud2edQrvaReP2w5xRW4LFnZVj8v1ubnakmahPvHLLAL3utfLG5uSgGx8JdWocSu",
  "key32": "51k87G3jwGHHha5bHK5WvLYtitPcjzES5LyPf3qWutaScWi9ivzhj7sYyRcoycbnLeUnnhCT4uULUoDJhoFDxYyr",
  "key33": "4KzjNySdCXoqDR38hvQEuHgwAVbUDSug9v5aEmbtDHUHrpnme64FyLdMuFaezxEMCxyv2TmrtWDpMGkXUc8bAyZf",
  "key34": "2gp3BWzvoM2UwgSkdUA3N9Jn2f2Za7AiZzGmFf8zVXnDAMRy8wFySH7ewYdRu7VfyKnKWPwaYbM6wkfX2RNUhDGm"
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
