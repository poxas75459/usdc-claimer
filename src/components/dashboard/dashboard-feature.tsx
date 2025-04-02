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
    "3AAVdRfqURcwQjBcaHzqg7B5q7UqRcs5VKyTAdj3FWN6HfEfgw1Yy8mwqgZftjLW9cwhYhPkBujPFDoEuVMhD5Me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYRpMqBLK1KB3Vc5QFxS8id2pzi1i3u2kKcTTwZeAkVxWTpMJ6F6BtRik1hiyVQEw8AF5cwbiwAcBpXekBDcRAj",
  "key1": "3GZpRAPjB1g2nU3Myk2soQP5LCfWgL1ha1VeXkw1KxMWLBPgLy2bhysWdFknV8odeha9TA61PkL2hz5goz1bPPob",
  "key2": "5mjr46Pdu8nxEKADXjwi7hkAgCLZMHk9wzsB4t88nysDnHPZGBPrMnN8n1725wzKwYxtVghpSwKpgnxPfuZmSPv5",
  "key3": "FVj5VshKeU383WZ3toywYC9j2onsrwncgUqUgh6kzHYrgrC8dwtAPgi3nX8UdvtWPiXFqGp9GJEedLqEEQWEJ7c",
  "key4": "4aDZs1RAKp55kxPMMbFWPZhDB76VTukrVbzpz6mxZtGSBK9V22GkR1mNHNmzrb4Tv3NzNqEUWwAod1P4vKWnHEZR",
  "key5": "3Gnvpbs3Uh7PCo9Xr1A8ePRRh8kuFGCtugYx2g1n28Bom7gi7xXQJYkuoD3HPZWqGGy3pt3TmcnVyLdzVBqVZbXG",
  "key6": "ThbvA7n3UifjnuUEHAr44KG2GUi9xNMKheKf1kLrBXFPPZH8AE3oEq7qpzrj43YhojV9XRnamc1MpChtKokbA9z",
  "key7": "PNcZcv8unAfxmnHrn6hBbywbjMPU8HSm7zH5EmRGrzpXmiK3oEXoaKS89rweT66FJuF7biFU4FWfy7tXVMBsDFJ",
  "key8": "2RrW5zvEq9ufBXCsoSX5VU2qP5N2X6YFXAgQMwCkqYKHNQkqECntSU6qC6vhuw24zTCQtifahHpTk1pzEcF9hekS",
  "key9": "2D1YBbEhQnS5YqBqEHXJYqVW7YmVy4o5Ya7re14XYEe7eQV5fG6eei7Ax1CuoVqNpfSk7Utmk4V7XMN98rZJ7NHZ",
  "key10": "34yfUFGDxeVEbTQwu7BS9bd7HruSNfcVvKhyeFuvV8G7Z4YEZ6NBLJyPHedFeMcea9uLSZhg9FoebLHr5HAz1YZi",
  "key11": "5mK4iq95LPcmJwC1kL6ndjAr7XRMX6bo2TuvK2zdKrdnF34tqUTp82BtRTpDwX8LvwEqwVHNUtbpapotUip5rptD",
  "key12": "5QkJSEdyMvQx679AV2aPGJDKx3uSVXhi4FKLaqqiuVqMN6hdRdiy9dxfZG8p6HPFBqxexUX4s2FXLJhDBHYcYrRc",
  "key13": "3R931Ft3JryfLjdbpyDa6rSFrveMmBeeH9uuGhUzYe5oPTpzNRnySMJUPKtTUASuA4VCtKckHrhgLQBUq9RXKWJg",
  "key14": "3yzkX5yqMoNiJKaF3GXAhWsWRXvHs512kKuu9KhzLyijUWvLjZY8FdHBU725bwpy3vVLP3AaDANzS6VPHVUBj9Sc",
  "key15": "3ehmMNUW6j21kpg3EiXjpP712eyHhSQ8Nyhco59WufZVYTuQ3zkfcdCq9UohnkKXc1M1YHoHbMymtz2E3P8QAHU8",
  "key16": "3UYM3dWYYacKo4zku4JPKFnZFUxXRVEP7gxhSuAGeVwMypugdTMxSfjc4FSPb7XPeXbyZAvg2VJMiJF9GcBGU6Wg",
  "key17": "5Sfrnvktaqfx1oi7tbYZNPwuSdbqVEZTpk9DrykYKk2xKjKiQHgmFGh7BaHZ95iEbsnruDDVAYSbpe1NzV7NHGbR",
  "key18": "X1nbvT9F44qQpcU7kt8hFv2S7yxZxFNJHNWhVfgLB1MRQh9emL93jABJXAradxb8DTVQ5YHvF3CV5HEAdNdcYs7",
  "key19": "25KBzDJgcNASWguHQoFaBBboMxcE7GkxFgt8WZNkbT2jx5QbGzpDLpUaJQCmuLuGYgWCYBFUYjjDib81r8eoyP1P",
  "key20": "4vfnhX4aa2nNHmJieQANYXcv1Hn28btmsqLZsR8G9PzfTNxnv4gZ8Au9cRSrZuaTCvdvCabpkyRjpXnRe8yFHuKa",
  "key21": "vu2v8QeAYk6WT61y4NDBH7SGVJsohapUAThrVPozFHG1DFxGXBL5iVSoTFPaXRVnA5c5TymJVvfMzL4cP7w78WY",
  "key22": "4vT3Bjj1UQYvFWX6AUevtmNPJHm3tC9NRcjbqfgjp1feUTRxbj96BmAoNT6mUKic1gCwjQa1x3eJCDs6UuPQMXZh",
  "key23": "2kVcNfvWhHGMY6jKeP9GCyapGzYQoVJzeHaN1LUGFusAdrC7C6YEUXZMFqVCxUWZnFZBoBptynEMdzpCABDxbpWp",
  "key24": "4jJz6wCRthDu4XA7ppu2ZUzqycPZMYXJ4NH88zE9mjqgnUm7RGCNyFYwnyJhNtFuozmNuG5qv4NZvoYVrFg8hHZU",
  "key25": "KiVf7bGsoVHw2xz4JrotwvaY2Zjq1fQaHQBpALQS9cNnQdc8PCXtmJdrBsbqxXTnSVbwGJenB1o3E9nNQ984NSd",
  "key26": "3ASgEwKnEkC4efCtA7TcMQ2hXLJwhPoHtRvYa4B3jypw7x4NzDTMA1SpT4cuiSJmoDt7BS4ke5aFp7gqGC5PYLy6",
  "key27": "qy6VXNtFNqFLF4SiJuxd6uRPFYDVk6GwMPqsTiK7PmczpQxsRfDC2RsdPcuyD7U3M8qAj5gTswatjK9V8fSRJtg",
  "key28": "kqP3bTpj4JVvrvCzkk4e3v4pYCNxwZmAL6qrm1msU8Y6VgBR6VNjb56L41QY5XrkTNfTcuK61urmKi4mafBRE8d",
  "key29": "4665wZwLDNUJeJM3KUNxFPx3uKT2uizUuh1WKGuf9cDV9vE3XkzYiTBdAmingGk3v9PCpckCk32ak2TMSLZKYvXY",
  "key30": "5wJpXovbsccFJkpNKQ83ea1uLhjAwfA1rAUCikDd5fB26boL8XBQqs83g9Xj67uRk929vSbjUc3Cp7Pw7rfgkbUS",
  "key31": "4uWP1uPHuziUEyX9aB3oBigvNN11av6uxPzNrkDp5umjUPKEsvkQ6hGv52fhHPqpK8v1X6zE3L8nH8agF6jNMxo8",
  "key32": "3ut9SaMKcHECxfeUmzxvUonWqvRPSD93fVwvWumim23j1jAU5B4VDot769GE5FhfjpTdBRyxGE29Qj8bdVRX5aYF",
  "key33": "4v9wGR2LQwicvA48G95MMFEs7qCBmTk1qH9m76xK5KixLb8EEPVZpmb3G5emLzgLtPWzkDJ698x3qGFprzvMeDn5",
  "key34": "3eX3foig9iEm83VT6dZQuLCZPco4t7N45Yssdinib3jkCnYBjf17CTf7s9hEdefFwaLXHkzh5xJ5N8nMYZSEADoL",
  "key35": "hV2mmcD1YffYdAaBceKVNkrCQ9cqJo294s9SDL91kaiX35YRqEmNZAbrh6iEDeURcphKwVyoWQtqjqJUajY5pYq",
  "key36": "46tqPKSxMJeEmYFwcQrhowT6EWBqcKVowL8Hyugvbd37SVPAbMbXnZ2wQpurWYsB3UDZzycWqz68p66xd59oAUcr",
  "key37": "3A3nYJttDdfXHzPgQwzjYbz5bxt4YjXqSKSEoLADyNYkiV2z9AD1jQK1STmuGaP53g2f4pUw5yeeVHUWbAvU5apr"
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
