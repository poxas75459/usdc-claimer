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
    "3q2CEcY4avPSuJeRbKw3s6aWQ4y3SWGxmcjNrMiqzy3b3TpHVtxBVzuZcVe8My9pBYrBQ9rRukodyNgpxag5w5aN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xhc2oE9ykkouv5XnXCbW1GBj4BCKhXgBkdaWuzHAL71o8u8GjdAfxGUQaNMSDkamG7MT5NuogPAGqAeY9hC2kdf",
  "key1": "5cHN4MkeCgjiWAofEfw7tjosAfzupXwFePuohU7fo5JCzFmdCRduTHwcE27L64WVDATVVeDFLBq1CwiQhTn2qGcM",
  "key2": "2kTn3TJxcuWRoxmwDtmnzNHQNHvRmn8N1oQU1PS3ofybH4GrTxe6DJ4jRUm56726awTXHWD7VnMt8HJmjx2i4RRH",
  "key3": "45Q2khMyw4UNg2xpgskLrwGzaZdLJgBDyvTcBRJaY31dXpomcWCZGENeV7zJrqeLyFp7Kv9q21AdVzxpieB4kT7d",
  "key4": "39ronxcTw4bmc3aw78vqA2vLLVFLEfHn2yqJHQysVU5kKxmM8e67zTpLKjb7TAetwMF3RXkmbkpLLg99W92Scdsb",
  "key5": "24EK6Fae2wMRZqYMAEJYT6qiRyeTntcec1nA9Rsx7YyETMipFUmRmYPBruwoYbvLkoKLMUT3JAVfbRRFTpB4UdwJ",
  "key6": "2YaTGXpiN2C772C3zeb5KGiqPJwnyFjqE28cNjg4dTCt4M1SGC8kQquFWPC5jb2TdBwXL9viMKxBUKTWiazNUyhU",
  "key7": "hh6AGpFP6sjkzFZ17Ht3XNrsdVACM7Qdj6ANjtsYjDeC7786yeg7ZbpVu8yEGA8KFA9UK4eGWMrwr7BtGJm7qL1",
  "key8": "zAQKaR5F9yPisdm7ALKuynLHQKNZLGG1KMNZDXSHYid5e4VrvkPRs7bMZ4i5ezvdogGaF4YAxgECX2h7uftGHNA",
  "key9": "2kjPn5ArckFMVriTo22gMpES5fhknV8FUzWuTsowFx4wzXE5xTyACCcwyT6Lh1RVsSCo3vSwcPZY9hBdbhBQAwQS",
  "key10": "fDXVvbbrXt83mJKYZvpuh9p8jkL4PD8GhBfWpuzZqMjvSoaWKsy4LL5D6gt9URdqURuq6RrENTjL8RxzajUghn6",
  "key11": "5mg8RSnhjyZ78H1B9hP9fcD9tMCZeuNjiaVuaoSpNXLmit8g6Xe53r5QMgZfrY1amFhXvxYgTwZf9PbX82s3HZgN",
  "key12": "5ozxfMy4kxmu96RXXZhsJrkG9SJmZwrMs1gPqgCBhroAz2TkcW6C7oXjLxT6PUnr7FdfBbpH3dgYcMKoga6Qgy2M",
  "key13": "5QWN11ncL616tgGqpoyf5P7tVjhXz2cfHEcQefreHBmkWAGn9YCwGnTyxCsbmGQoWxiiXPwRx3cEBmJg24gKwQML",
  "key14": "2bebyJt5HXJvc8P9RMC9CU9rDLcwT3yrBpBXjLu4kYy62GUYyNqgrSCyZveAroDiGvH5FHsCpLoN21w9pS52RLnH",
  "key15": "iQxvak2N2yn5gFe5GqNmin8FLbrGaEpGMbZtNY2eRYg6eAsY1ogKrd5uRzLNLCAKRCyWHY6ZDC3gi9hkkjBSPzz",
  "key16": "5KQQry5TTCgnRuxyinJ4hekHEPhkDTnJx5S2qLSoJuRxH5Kj1KSgZbbHQCAKeJ546DEXrAkp6eQMUXJUf9bHzPTL",
  "key17": "35nV3RUm3vy61DgyXkrB1sdVxjybiKg2UDbbjg5easXGKVz3aSFjVizzjaTQGdbsmDaN5ThZPW3Dh1AYF6RXiUwa",
  "key18": "MDjeZHioPLu2EbUPhejJNK4cEjM6YNpHKFSMB2ySwc9txG17srjnY8jVMB9tu8edzxVwE2CJqQ2FLe682z7pmUY",
  "key19": "3cj5soT5P5Bi8Fxz34jNUGa9pbr88prwPmsNCLVeasX8ho3NpHkZbWT72NTWBC1EpACbyDg9RNJMtCQAtBkdB1iw",
  "key20": "3wPGLU26aQiCpsibxDEbJE5RTc6odmAEpx5TUwdQk3nz8snAR2YV6tNaKCvPqcGggrHG7DHoZQCWRFDnmzT92Lcb",
  "key21": "KF3jfaSdU2niVcszB9eQSEQuy8KH6RDjwJcp7EDeqePud8rf9Pm4MjPDgEBcvJQ1q6JQQfRkcYpD31CDAHQ38w1",
  "key22": "4A9jP72uwgG4xzNZSb8oGAqvxu7WDvpX7di11RGuF2UVW4fjMJ7TXqGu2NX1eHetFWAjtC1CheLCPBVKCj5r8wtH",
  "key23": "jZS8Hq7Ezu8Br4Eg9bzRg552mHX7DPp8cuNdGWieg8jjgQsHTuD7jALAJMkm1g2j4awPQDzcPpwcdfnGtr7wWYY",
  "key24": "4bL6mZ5JvWdjYhGoFRTGgS5AtvmDp8Bbjg5yinJtr69UQxR6PZNTFpXtTZqzcrmu2dDHDkb21fr96cZSZfV8EBwL",
  "key25": "5ppx9uFW6oxHbGPGZpzSBngkcVEDgvkUbxgdsuJmV77RmNpEEaGSoE64U8AYrkVkSsGarQTZv2EnK7zKoY3Ko4uZ",
  "key26": "2vVqbXTzUxqUPR6X36YQhhYBQqGMUnxGWERjB7WoQVkX1GmcEeTJVh7D4f3C7QHi9pJU9GvTG8JBvHb1my3CJ4Y4",
  "key27": "ghuHpcrCcz6FDsMWvnMX1Xr8hRnn7Zyxqvq7Lr72W6SS1dUgC1umbRPC4stKoJ3K5A8x9EWBT4Pkg1nL2CS41yQ",
  "key28": "4eGW1R6E73B5JvoXogqY9T4yRkTVk2VKKH6K4Mft97u3fbMhCLyuhCeoC2PnRW39eiDzNVbEnxodRpqJQJna5wuA",
  "key29": "5sfPyQFqxUXykQNa2yxTdwiqzDSUmLewZSeUybUMmxubWEjRDebkj7dtx7kyrkMpsQZWZfRcy7EXKkSrhh9QtTvB"
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
