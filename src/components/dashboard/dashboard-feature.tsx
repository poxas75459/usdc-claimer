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
    "5VgCSS1stuzuUXPzQBqmvBqVSWaMwG3GQWNPyWJgkqu9od1f9SchApvoaisKMUzpWB3aFDgFCwC5iLFi2Uy9MzpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNahSH3DZ6UxfcfaJCFJ36y2bSRJgdwzoUWK1K2tLKQWfZfMVMfxeyKXdiYy32XxM6gKp21KYE6KdMKkiLHjuic",
  "key1": "da6enipZHqPocj9ag2bXVRXKLWFgeeUHdgvugVFvvJRuVQM3DJ7cnzK7YHHvL7m1sNDo4o4BhMCNx9UUPD5GCCX",
  "key2": "5GZWuT3mdyzjPiU2GEdWvcGWLG8ez1do7GaVvQhGLrAb2ZwKkWh8qTQW58w9FuXfoF5QcBtRS3KhEKjN65bV8JZE",
  "key3": "3Cu1VZUW2cdmeW1vBeHJnx8yNf1x6uZumj7ZdymV6KPTDVnThbuTaCB7zs9toqtE6DDeY4tff4bxBVdryFF354nr",
  "key4": "5QqeucratQMrf7udqeLRcZpkua5cBnE2yMQB28joH3KY7SjAFz8Zw8wQR2i5Aung71qhxXSAVaNiTecfHYwuj9Mb",
  "key5": "5MS9GATw3wrAZRzRyXaPufqTUurLARJEkgk947fvqC61pUjbzDTXSSARWFMcCMWYepjbxfHi5WTvXNWqVjLNKhCx",
  "key6": "4gZUeynevKunwW4RVUd9vg3Jgfu9ppqEZ7PGyYgi1EKXHgbhXBmx7HisY44FwVy7qf393ZrY4fKNzqAa5teXMmvf",
  "key7": "5X8WZHbamKjNHSo5GjKrCEK4wtSJu6dSsYpyxxQgRk2t5CRFM3rad9cSxjUYj9UmJENvsEXCaSRQWwotCBe6gYS4",
  "key8": "33qYLi6d7UKDrVqvoRHR4B945ZTtN3MczLa43EUdbEQWkPEx2Ws7uusZvBQtVdoCeik4pp7MFRgeSAMZdvCEFMZD",
  "key9": "ZHEkB5vwTFTYqEaChQ15cxchw3PnSDdoQiyFqRrWx7SYeLEYz81ey4bh3W6eMDvGvKB1ECbusrrz2CdbwHLytwz",
  "key10": "371t5uGNa4uzn3ysaUgbSVx4cRke2jM111A2bLXEJAWEvprBg94cJTbJLc8dxuxVS97U3bwk1BVmh8qQyDGHdC3e",
  "key11": "8XCoRXZRjmTtQrVbtQ5qByrkUZk9WzZ3EQSFEZJBGCnN5nxhX1dcxMoPLiNh2uUxSqe2uVx4c9peCcLanKJTZH3",
  "key12": "5XMhWxdNKiRRcG3uRszePbERGUDqg9H2cETewY1TJXY8i8aSbw6vKwyEwpgnVAWPZmFzqK3bs9gadG2FhYhzUyoX",
  "key13": "2i8523jiXM2t7SaZbCDfnWuY1XGuLVjQADKmrVsjyjUKrEgi1BGqQqQ3HyRPj39tNVVjBE9BmDyfNFPYYV5iMWjm",
  "key14": "4YarKsZDRnHUrjQj141q1muwfTRzUzZwoMY3QvGq6VTLsS8LUSyDRDDDrJK7kEtcteDtkUq76vt36ehEnCKRnVbq",
  "key15": "5csqtphKQTHZaFFUHm6p5umRY5QrmEmodhsdBCw4KipSN7eFywHGkZgDr7LmhbAZ1PB1LgzoibpusjrAAVVoxn8S",
  "key16": "4Mv7LKskc6gBhBhahjXiDuSm59r7fk6Zs9MyjijJk9aF1fZ2KUD6tYCqz4dESDeucxeknX6ZLhtt96ordA8UTGVf",
  "key17": "4q39sRfoRJo3BoW3K4eEcUTooGnWKGV9RNmD5vZMjvb5LZnqne3ds4iggmWYWdVjiCKtWyZmHTYGQiHrVYshN3qj",
  "key18": "3gFyAG7dJzmJnvHfWXXMYW3NXibgTgeg1YJUMGiCFncXQVXavfpHm9g4Apy6xKnxZg3ScgZbzQWpyWZHkvNDHhfL",
  "key19": "4ZwQMgN3NGTcHpaDAWQXVUFCRmkLxwHt2VAFF2YqT23XCWzR2frxhh8ppCzo97evP5bkxmC6oqb15YFtpw7i4LA9",
  "key20": "4o7GwJJScAP78vnFv6J93bcuyCsKxtefQcuaL7qurkXySdHFTC57zgxux6ezmJpV1viy2PgtYVf6jbrSRVFsGoCo",
  "key21": "izUzZFxx6mXCCwUksgaHLuVpqCySGfTg1nvySxRLB4iKK4KZF7H92db1Fm3r4Cu7TrgbzHZdWBhJs8bkmXy2KjZ",
  "key22": "4Fymc6hwufzVao42zn1DLrXt6Xbo87UL3zYWZoJCgzcxFW5oVRgBEXqaFdCRrtaivekNQ2pugrHmnjExhBTqK7FK",
  "key23": "4TfCrewsA2U1XLHgCRQncD61cyArQbgWYndQMvyACGZGgqFpg6kKk4p9Psivsq9sb9xUEY7hVjA6e42sKL5CEYwA",
  "key24": "4hEnMYiMmudMwdzHjYBpgEzbRPh3iCwtFVd7d93Xfgq4BHr5vMMGNHDjwaYkd1KCWiBqCHUAyjoaGvs73UBJy3YL",
  "key25": "5Rw1zVk97Wq31k69SoxYFpqVzmMfb8iwMKqhm23fh9LDvjFVqBZdbjeNy18R1W8GGFfSjuEzTiz3cf8rRoJkVwDr",
  "key26": "4eFq23mgX8XwKKQfjUM1zbXyTfpeSBWCSeYgFQfG5KRWgfUpNhY1HV4KccRhLEEivhV7NLingRA4TZNukEar2WUk",
  "key27": "2MEXczah6zpdr9Btomb7z6SUK7YjrVy5LGoBkKchPvgSPdRYFjSFCMoyn7LAB5kUnXp9gVvWs8XgpYSKMQURkbP4",
  "key28": "3xQYP1tvt5uKv6aP43VG9yDwbtzuh1i8bRRb4sT7ZA6veN5PQcwDdwExFfrJ2Fka7nr1GK9PaPL2GSzMBhTJjidc",
  "key29": "4GW9rBAvJSwak14B29nc95rFri23u3F51BSn8G2hwv4KoFGkhgDrSdYUWRJczpP7LHy1qKNoVXCWRfzpAxAdmWxq",
  "key30": "4X9nYNRRN7xvSy46TCMpizXqHuC9Mu8rHGynoDKQ1rjk73ebyRxXxJURoXghDD4Xm6qTbUnFJoerFwJzvfwUjTQY",
  "key31": "4J4r8vrCQaPWdi2xbgLALBK6jVZ3PxMuEuzUvizZZvLVwuE7uBj9xk3TWaU13qwRv7mGZjGWe8WGXfUAP11G3hou",
  "key32": "3vXA6RWp2YDLW6jTdtapjwLMDAV8ovbhp6tq1H9QWKTVU4kNZ4iLuqTkKWnkuB9BnYMgdx1GnhUfQh13gMNN9Et",
  "key33": "JEW3P28tCexyWVohRkcZc3wrWEbLJieeTkZUdcyQkQSjcL5nHRDfWp9712Rweq6QMmHzrXrRmjG4yQFdM7QDzCn",
  "key34": "5da4hnssH5wi8yDUyrRZfxyKWt2iyXoNwexNHZgzjf6sAWqv58acfUF8iMe8ctpYHSb4zPs3vNqqnT4p2PxnzLUu",
  "key35": "2rDbSpeyB4gwa8j6AzwEYbfPc7DPG4HTeD2Cn51xPG6TiLyf3c31UXZy36Jg9aLe62bkD98wHnopm9RazihAfd3B"
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
