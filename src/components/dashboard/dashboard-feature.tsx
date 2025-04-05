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
    "5RUQmguF7qL12BGRRu9souqb7qvmEkmqx9fX9bQEmYwpc7uFWWrnWXHDcjdD9Kun3o5qx8yFBDgGJPHmatjQpQ5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "572q57JEmkgFpJJtG3qAFy8BJCmLGSQsW9GpVGQmvN4jqNHvoLmfa9hRCnUwKvpwTXnfLdEDdMXS2AabnfPcQta5",
  "key1": "5FAJ77S7T93ik4Rys1ZBVupimtuvEUqph3vM2SwNeUyKUrYs1bEgoByozCfWFh5C9Z4ijyRNkVGyVyiyLWZSXHsL",
  "key2": "4kPxpK69GEudpdLkHeKH6c16L7ZLpP2gsEt5GLEWMuSz3QuDke1Tp876j7ZkepsTfDnfB2K93RDqkDhuWYLDRhoU",
  "key3": "4ukJuvEm6ngpYnWiNcjzxKJCGFtvaqyt9c3m8YKtcKiSt3YRSpJanA2keA8QSPzKVSoMzHcHoyJxRKEmMsLEuXuu",
  "key4": "44HuJHVL1jjJ7zBhBJ4eJpcAtd3z4gRJRtf35kjESbz3BJmbVqW1r9dBZhgAMhcfGFZoGpCCpZPvMWpRTCgJgXk9",
  "key5": "2omRvakDikL3v65MZz9zeFPTEiGYjY5rgZB9VXwtXifsGC1NuvSNt2wDjX2VYxNvxQkEGQjPX31BdR3JB3ZAERMR",
  "key6": "4fMYLpTLLAs1pu334bgPe2su2pnB9sRzHhBZQS9nDZq9CMAersg25WxJHhSnFnTX6B1Uc1nnT8oKeSEnC3xu3odZ",
  "key7": "2bxsQRUuTAEQBYKjksKB5v5kQfd5Pzja5CoGnJ6R9LsNipFpbtrXpu5zZ9wEzJxJKF8HU8fCqbiz2zSVpEJWQGZt",
  "key8": "2mmqt94CknYebRMGrTTwqjBQzjtYHWW316RQdkQ4NtWoJ3xuSuMPmdwt86jm8d6Z542WwvRM96wrVZoei1yMm69Q",
  "key9": "2LAS8jCukiLfCcrne6PK9cQQMN6Efe1frZk3zyaMWKJAuM8EQVGQFA2M9XEGawHaehERHmCe3dpYA5sd2NriJc2p",
  "key10": "3FzJTd5WDoX5YpDEJGbL6aZPJ5z9kPbNL26wig5TUo1SiAL8hDCLmHZzVZ3i46c3UV9GcPecYXov9QpfX94BeTYa",
  "key11": "44Sgjf1LApZDPtKaZ4S7yNcVMpCZSRK1A7GhxHpyFHyW8FukXSJJvh2udggowzNcdrMcQvy1WQc9Ze6xQ7qSGUAv",
  "key12": "4xoAz2WAjMBUqgjXPDsZnagWnzafCa4Vq2hP1MX7Sbhzn2ChpgK3R6K7houxmZxpgfs13g9csiRD3bmxkAzd7vjV",
  "key13": "5NzkEnGu42GR7Yye7UPxSsydfENXDvNoakrA9JeQLoXMVrGXGSarekkashHWANGAtf9khkqLpBzRYgsx9CK7vk2i",
  "key14": "38QuUaU97fqVPStwSnQXy8PoHemV5MLFYdYbwivPhu4VyWa3Cj97uDfi5eUCJt38Nso5h1aBCEqump7dzoc5tvZQ",
  "key15": "2PGCtFtZ937jf3LhmthRLneWevHHFptr91X5NPvRFRWdhwFZuityQPooEUhJopQysgmLp1cPDLdgMJ7dMM6aeHv4",
  "key16": "5FNWpBXRP8Hch84Cozn4zNFcCKghvJ2x81ZcGH57FEoaCLK32ReC3BYrazjF9ci1pHEVnRZU4azTp1Rwn2PAaD7b",
  "key17": "3utxMf3AFxH38gz18XLRj6Azmcm11sNLw2oxcdFQgGHbGPJm2Dr2QcP44Ybw3qrYkJ6fnoTx8MaZ4B4vWEdRGtNS",
  "key18": "bLi7jLnJZmRwMu1b52SJcFRuEbraUwAeKe8X4WHjCYB9XogHXsUdagbH3wdtJZUoBaWXVTibEyRfjMM7D7mqULU",
  "key19": "2oWt6DuDkRxqJ1v6A6cgJgJ7py5SZr61cJRnCgb59Mp7jKLaewRpUHuGmcZ849njbzR4SpLn355zftxJ8jyea7Ed",
  "key20": "4hu1dddRMhHFJQaNs825S39e2tcwwetwSxqTc5LwZDSWdYuT9ryzsJVqCGpkvrhs1gFLPziMgeQgFVSVTYRbpLRz",
  "key21": "4JzcvMiw5i9quvpjXgHCWQRyboyVWB3Z7bNKUFQSQc9PTJiQgcxh9Z1Fih6Hg6Bno67LCwuJA5APadVJ4bij43or",
  "key22": "4WouyteAGG33xB6gXhBbc4b31HLdD16ZJdTnx46jQZHT37R4DYNFXbEPWU36TMjY2SRf8D1LqsNVFozGDiPkP7HA",
  "key23": "5bdy1iwKQwM81djBFE1rtUfz36wReJ312e2VqBxd41uLxWzE1CL5x7WKMTfHREx4YsRnW5grmZbjXNxdqtjzW1aH",
  "key24": "McVX3tWJxSbqiWgQvXVbTCR4Zy6nBHHbARid7rZjqW8F2iij1A3HrMbv5rWtyBsjjDNNWnKKG9VhN1QmrMUEWyr",
  "key25": "zYRPpWjNQUzLTVuTGRgYNqJygcescG7hMpWuhuCja3Fw5c99XKpxkT6uETskZWiMknZNENhcTCdpqjwnyZegWkj",
  "key26": "3U3gVDMWEhnmWi3Eo7jGKydvGgfJTA3NY7mgUXNyL1PAtg5eAGXvaGZAfF9iauAiwDXpMjGpCFGcagPj7nr9BcDw",
  "key27": "5aRjMJkDvEcytaCLSS31UZrtuTQVvBkAK8vVbN2oEwg7FoWdJ4Xe8CYtsV8CsEZxKddoWpHPgn2GCUJMX7X8AAA9",
  "key28": "56db363yQQxZaLu4fKQYyHE8JdBPSRLDWsFyjHuyzJNyspVtKWbgGwSJSYLanKCTUqRrdzDjnXBWJiepyt5sezRg",
  "key29": "5j2Vwgp9EWSgqgechRmwTwSCPx2ExrVL7Wd7YS1osiycVzVM7de5yvJppgy69mTypnvgVprMoGVWLGsM7amMvzKP",
  "key30": "5d5TAYDtFBLgCUz5A2b25Zcd1ifCKaaEcGXzNuYfHRVVW15tRFPKzNWseR2AxmfKzaHPL9nVA7kNvmvpfSsqUj7K",
  "key31": "2Z33fMm4bmkFwaPjsnayBdRaSuJN645ao72NTxndqta2N7SnSoozNBV8LWSZRmZrVDMLecPdJcFDYd6A8Ut8G4dd",
  "key32": "FwizGfgtjz5X1myTNjtCjwCTxaU7EtJkb9hJAsP6JhmBtrfJmNzYq7F4n9kRA5imRxV6UGt9tsXHcg76oKXUSmt",
  "key33": "2sRC1EcX9jbdugjqPBJ9uJqePYADDJHdQwaCCGaygHWcrEATomsKXNmvrNYPT8PKun5ENRsA1STGHE3ab21W8D93",
  "key34": "5k4NgsPa57PcubqmWTDoUTmcoCEbHh6fxXi91xdYXnZr67mZUALVb2TGGz9gRbdtwQ4vTmYrBnFRTWFicHQXmYC2",
  "key35": "VLHdbrLqmKczay7aaRQmYSdUZSS5ymmBC46yVKpJntcFqG2dwZ3iwxLETWfY4Fb5S3gKaQtisSJKGGZTxuUGEKV",
  "key36": "3w9S6BtXYQZ5nRuiCzqkRVmABubpqiW6aXQxrc1mruMWJVxFwiDCQm4w9tve2BUMFkgCLRGAcUCnoGZQSGouQidp",
  "key37": "2Lmv5kc5FWJptqE7NaaFxhFzTeVhobbaki3Zny6kBVsnbAoamsFRWjafuq9YcbKMGt23Xvn2HCUsXM1sEnT2jNn",
  "key38": "5aMp23kj1YYJstzJo4cWYoaaFMMe5Zn5DrnadBuowFANqTGiKRkSUjAu7zmdSX7oKdg5sfbqhd7DFP17pccrB5NQ",
  "key39": "32rv1yFGBVBba5o8aWHcEvAVwYZRuUqhvqfWP6b6ZxrWaS6RgE27QkECbTq1tpETnuiEPw5TwXqZhfSvdZA1xMj8",
  "key40": "2mAQGd1ES6Zx75jRJocsLZALUxumRGLj5NnUoCbHWXBd16CndgWbpiLkKoxHvkdbSjGCyZJpV4jL5PcSAg9WHi6y",
  "key41": "5ZNrXjVoiFbhRN7q3wDqURikKVVav6kVtXVkj8EttTmGCDjt9vUwuK3ccdVttmLDirG3dUQuozEtYSQhxXkYdEf3",
  "key42": "54UgoPCpSi931RXdEGbSAJeWBmsofsfpv1dvuqjmiEo2CRtdx3SLLRk7xS4D1rPwg6oceCDaXZUjr4KXp11SSqb8",
  "key43": "3v7UoaSRfzw1LqLJqjmpyNYRnzHmWuJD4wH2e51BTn8DreXnZqyiEa54ApwghfSJzqWP2jSkTtV5tzD1xqJ9P3ys",
  "key44": "2quXWQwRiDBkjYepX2ZVdGqNTmswiEHxiTJTdEgAqCEgjNbithffrLZDe3Sxv7XW1j17XbdzjPK1weYuevwqyEBf",
  "key45": "4b2HhrUEbYe8WYFYQnfJVEpui64uaf3U98TofmjoBuwukRiyEkCADFU2786UWwrXt6sVrWan4426CZLf7HdCAqcj",
  "key46": "2XfWP21mTqaGpGQXhFzeUF7Rdo19fB3xPu8yZS5pt9Kcroyfhr7L4Ucqf4atNeNEXkT7JbWtWtzsmrtz9XWiV3Xc",
  "key47": "4AzF6kYkDPNbXwk4u8G542hHFiS33woNMYyxwCGSHmvLK5vFCTUN3628jCRayemzSTTzBhEP35UCLGXDwguRkFtS",
  "key48": "5BTokU63dpkQznAXfCwrzwyPzWH2YKe9o6eVrtPcryCTWUaDLATqD5VyBZZ8spNiDG6PL6ZCqAr3nSZbtpv4foQP",
  "key49": "4rfR3nPfkz6qEGNAuEUWtUQUoDmU8L79zc3ExisHxMCDnpVkABZNjT8z6EJjcdYo6opRBEBWJ22CvGvz8q8UCBUw"
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
