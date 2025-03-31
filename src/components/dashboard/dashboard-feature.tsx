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
    "ZFSxscJrgFT3TciTLrbXkEnHjeqs85WM3rqHBwdBNqgiDucMkZwgTNgbb5umzpgzF1Ryvd4z6URYjBbv3jdKgUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NsrK9qDt7UuvE5oQPyJVzcPpAPAu4JXnUw1yPZsFNeu3KLjBcegWwvvbq8amSmL9oqNMj7RfdQRxLgiRCk2bbF",
  "key1": "65vLPTadPXgnAkg4nsXfhQozgVAehQkyQQxn6bwktfh99hjjdpkjFgMH2b7HUS9bHVTiHzRwiqC5ZrM6J9F88WNZ",
  "key2": "47JM9zQ5wUDu4dgge8CivGNa7V3u4mfP47fysosdLSSjGRj4kBsyrhBXwpzmqbzw6viWWEDN9PzMKkGWRkybp3Sg",
  "key3": "3jupK3t6xXTThfVZ5a5ZQZfnvq4YHoc8Xs42ZJ44CgnUNyzJH9xXb4tFHFsunmXCSuk2ESjUxPGx7CVyDW2hZ9Up",
  "key4": "5jnBXG1jzodcEbbmJeKg1DTsteJt2Uvjg9uwVMePQbsmZt7Bk3fcHAtxYJXt5CGrRWurz9o3TA8JGi1utN59DskB",
  "key5": "4ow2QEj3mD81XZiiX4EaPd7vEz1Eg5M8Vfn7gRP9fLxYmejE6SiPjzAhTCYhVUhdF82JqewLYU1anvgjEF4yGbrm",
  "key6": "3qMqBie6xSudnxDrCxVcV5Vhxkh6gLgKB5YEWHt5Ljh4ZFBT7y9b64UVnCbc9P6txgdwizvRjbTEdTB9Wt844Y6K",
  "key7": "64z8QLnPLcuoaskstNPhwfMwasLW7EZBcb9xyr3Q7xWLGeZ3vwe8w4PemWNQseETRBUnP1wNMETvVsFMLp2moFJc",
  "key8": "hDRvayk6YYR7PaGuaY9uAeAw1kpFscnBk6tYUEd49UttUpQzcwFLkenzDTfW7NTHiczP4DmfDuq9Fgx452CVL24",
  "key9": "CJdiB95mgqz5QPvrN6pDF1XLUv38g6LAVQWELrd9XnKJ9JanuJ9ZEU7KBuhH8AEDPPZwZva2T6EhsT9LcF4NWuy",
  "key10": "FiHQNorHqPXfB93qZSpHh7PXXLPXkHQpjqiYJFa7fTcsbjopmJKU154sa4pAbsdXmTo3yThbaJWoeSEawQK1hSs",
  "key11": "5Cr7G9YCA5aekH8AeCzBHT9jM25YSHC4bApaJohkHMS5bkUneJ4bKdmWtD38Ucd1SWDZsqpe4XZZNnAcZFLKPcix",
  "key12": "4easq4p4cEYuyFzcLNqmBSYrztjv7tSYF3MdmWwe5BTueBQExFLkP8kGJxFZGRKPAUsC7s4rsdghwuNDnPC6iEbh",
  "key13": "4yc4zwuMsdh1xwVmwo4BC5KQqKvs3vHuxKjy3u6Kx3GQkYcTQ82jvJtNMGZucbw3tqjaM6v6iADXFTUH1BekpMA9",
  "key14": "4uE4e1upotD93GwkbNM1Jm7KZ5Fr2kBy1d3JHPDuHCPUP25FqJhneTFnphQ7WsKtREVhSybcdo1jhXhQFn1g2xi3",
  "key15": "5LVK736Bxt6MPZAJe4oKQBAWDsWLADgPrLJDrozq4xrQ3qWHM55W3n2durQedveYoHAbY3zuJSdSSRLiYyRkWS5B",
  "key16": "4Zkh47aYVjtJJPZDx1qcV1q98Y2rBHnXxGqEj5TKYmvmSveEuTwF9fRpWtpUNB2PxU4m8SzWcrP9vGAJ75YfgbaL",
  "key17": "5EBAExyxkjStTkS65eFvFnV9a7HzgGijzT9BMc2SGV4yRcktGqrygA8Dvj1W6vmxCiZxrb2YRU1TQeFK6dbZvHKb",
  "key18": "DCJLc5weXa8b2QJJ2KJuWWogMSASqBT5NicU346dLmPnKcwR6HvEtNZnGNMU6H6JH7gtwy2jP7BGeSLC6Fpno2g",
  "key19": "4DT6CWxrRB26o13ZF3nxMmQUXBraX9q8b9VD1rSY5oBR4C56gbVdwjr6oNbtB98oHzXdVAyYr5fAoJrAtAgNVYp5",
  "key20": "2aMW9tWLMiGo96bgWErZChZggvKfug1HVp1MFkLnre1qmroDxU8UKcVQ4Vp46ebvXmFHAc52Y1kK77zePdK6Noxi",
  "key21": "47YEWoVqjqPvSoGV25tHUZko15ZXd8YJUzxo2rhxRMphdFCXGabDVhY4WpUpwgF3U6hB7S3oL15hqYY2ypCsdj5m",
  "key22": "4CQqege6mjmm68iL4VNWuKCAHjboMtqxzSqrNoHMn1pF1rpoJdj6NtkwgpiAiX5szFjnJ53vXxyhjje5Kkm8A6Kt",
  "key23": "2Evy7Ntt7s4gdzDoe7k5GbMtvshDWhHjrhjr1p8EEqYvskQ6k3SQxUc6hmLZLe5wHQVa71dQmRuT4du9QwUpwNyy",
  "key24": "4ySovUY4X2BuAy8Dg7xRVPMTsCGQaWHXE9mFjuDB1x8re5QwhrA4uRtc6nevgw541EZSodN8QzBmVu4xCSqpmZq3",
  "key25": "362mb9nCnCGf3fVqnYiWvQ26BcN1nEneMzrKxJwhXjb6kYT1mpdxRoaXDvpMXPBcqyipmvL87zJyxGRdiu49mEBJ",
  "key26": "4PXrXDrWhKK2YBncN4RUY86fFSGVarURDsK5mbns78qxGbhs1NK1UZysv7N728nencQoe9sWMpYgdhaGrarQJ6ij",
  "key27": "64UvWPNiAErupkwaCudHcvaLhAhhmNPhsdRhQgfSKHNYqqzg8WW29tT6ewL7d44rEEd1cncBaPdDw5eH3E4oRjUH",
  "key28": "3cGDEZNd3gErTd5Lnujq4hHySBHiMC43iUi1zEjdCvE39dhkjbUVAoes6tsrVUbXSmeNg3hwWyQCBW7jfbUL5vw9",
  "key29": "2Fqe9MYnHcR3pPCRSHQAiDNaj5YX3YhkM75JdBUmZP591Hr8Bu9EBH2gaBEkfnNrXd8yrjmzmD74sQNpZeswAf3j",
  "key30": "4YW1nkWSN32oLmxD8bQ5WBu8Y2LsH637kcmJJoRtfF2AFap5PSYTzRmCUw45UkqTmHhqHQGjB1z8mnqeyAMYSMnk",
  "key31": "irKPPaycENUboWuFsF8q7CGtruitmxRawiHRsK1TocHjwdFWArbcw4HD1ptz73CSuC3EtfyHJ24ZEAsa6SPJ5Zk",
  "key32": "4fqWia4BM1htpvWki1AsWVC4Z5u3bp2coXUDCjXhynBRsD1TXq154BcRQRyGptKqFvWNNJVWu67axHTG8czWECRM",
  "key33": "CszFE9ZJ5fNBCjQ3sdgZUyPGPQcZjU5f3T8h1nSYggGouP1Me4Z1gEAP43rEKyYCEvKiPRxZ4etqdfEx8t1jDh7"
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
