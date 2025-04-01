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
    "4agcz3fjVmqMGNGTcqCDSLM7gvYsSYgY7XqirDKR2RcGVGfPboTChtE4SWCAkfQRdRzUoTL8BDHENR9J9uiiBPUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bN25KNf2faPsAsRUKuovpM8aKHtZEpmWwNnFvJZTJrj2SFN5DWF7bB2dJJuQWPvHeLcck7h5udCPgaUeWshVe95",
  "key1": "KKnVtipUrWXTr9N3cNYhau2hC5V7nPEWGnoZpN8fKQJtEr9ZoARwj9HirQKaAhPvhK8C9PMJ9XvHmsMGRS1AE9b",
  "key2": "27jBC7wvqVo8FR6adomfkJjMCWifJYDd7gXnk4kxWr9dw9WWua6sbP93BwLjp26vjiRnpPSJa8GUjmGuQrWiKqp8",
  "key3": "cDnKE26R2apfcJjihoKkJXM8jA7iQT74URMvTuSV4bLsFcFx55zEv9xdymn5ySNqcknEJoBwnxjyUZSKBKZW7TD",
  "key4": "2JSyCf5D6wLtNbiZjRm3SvA2fxSgahpY7KupYejECdo9rSzfywaAvHJiKVof397RS5S4ZGcD3WdZFwMowfjfUPM1",
  "key5": "4V57QUF73TnHVwGY9rjQoSHdxTrqg1Fc3RvCJzuFWkJw3mJVXgwLwXV13GJy3ZqBn4Sgi43afkE3GkUHYjxndN1v",
  "key6": "2m9YkfHzYX2q4Dtg9MkxLRacK3mLBkvtu6ktrnLxS9bxfGjDzzivDYoX37wivVdP1GFCnR8XXaARKWsm3PxAcVqV",
  "key7": "5sNqT6SXC93hMNYPMQB9hye7TJfQS3VysSLcw4osZozyRn7HnRYz8oaoNbEh4soLPpVDu4ruCSFJ438FKrAHM9SL",
  "key8": "4qfo6KxjsAhprW9oYwrrKoUUuyWnJZpquHn7vYSZQJ2p88icnrh1VBvteei7s4qGHLRWTC778XNhEPgvfUrMSY8A",
  "key9": "5XysLN3onuBwB9EjvrLtSVkjU9Jv9pZeQ8fG7TrMG3CqVGFzVnuwkcmkdM7uixatiDCZVXSFfT1PAm3PqsMdQYKr",
  "key10": "39QSy3r5je2f7GZ3jgf4YghP7qRJMbk1AVX6grVTSaGsxNpYSdRrEdaw9s87pHkQH9rMh13a5yVsYjQ7n8bDPEbF",
  "key11": "2TGD7fFtiDnsVeeB5gAx4yRSHtrctnrVQG458SVpkHKpUgDnpQ55Y8jTcDfDj1jp7JpHkg1YRxH5WeWVPF2WZTPi",
  "key12": "3Jg4it3SK9eTPyT4Q1qR8sr2YJqvmuR9mQKHbh6pqLAerNvMD4Dt2uebkZKUfURQ4NuMkC4gF3teF3R9zfE92q7w",
  "key13": "3MvsAm21gssj2D6JijvEFeAWi6FYW4jNV5Eh52MPqsEU4eRbCwiyeCuPCqxsUW5nAQyWtbh5D24ViaQ8bpoiKVv",
  "key14": "3KPhfihvQ3jAZyrznZt1HLjiz7B6DftVpyWw8EdMbtUSDpzP3o8Gh5vt1CeGdjbWCv4iNZ3TQPHwPn4oH9QPh6iF",
  "key15": "3zKTfBhUnxUVQz1B5cXvUaNzYqqbLDLBuKQX7n2XjAEXs8YZ9HQDWfgjMAftfuZEk2yGRhWn3oZJGg5orugExjLU",
  "key16": "4bcorGfhaaozcCrJbAmVGR9Yq2qa89FizCP87GJuSx1dZ4f8mDX5MB8HFarMjojjbPp2McVFxfFcg86uT4RjgKAV",
  "key17": "2aa8R1dtDJUMfCXb5VFRH9wfVgXDZMMHFQfcpYYRpDzPRXXtJJqjVRSFanKt387t8iQYgxMFY61Tdv8CmvRbaZcg",
  "key18": "2sbq751PLaWUW7JSixzQGKKECf5xFvhkbhvb6H718tyhtf4dtsSzARRsyeWnrn4EGMgjyHmnUJNvkhKCPxrv6DzP",
  "key19": "2Ry9RNWKnaphibFJxU4hNunS9oKz5p3QW1ykWkxrpzVQ28Vt7vDbZemUU4bDkTYPWT5TfdEubhbHCGnjaeY22vSp",
  "key20": "5ZrKrRy39KZ6BSdoCjFD8iav4evek9HDEDxFYdqjPss1iCVJP3TraNBQjNrS7yGhUZ1GdJRqeL91jMsczMbsYg33",
  "key21": "5BGCdJdgyfqfJreyEKeXV5wUJfjNSd7mATGa7QPKFXMT4LDq9h7AxnxTvTWdztjk8cEKUSYRobVmphbLnUnHM8xR",
  "key22": "3S5uBYQCvdwoTYtE1oBU1yTJsRh9F9rPyCTsZHfr21JU2vVsrPr1YeN8oFpc7tTngZphQRp2YntNFNAuEXep2tY8",
  "key23": "5qs6463HcYnPJvazthSC4LqRcRe4tgegAMnYdUkGGQmmKdbeJ1JtMZu31enM8SdrUkALVN3xsLynYAJ43tnAsuMn",
  "key24": "4knGkdbp7Pu6wkiokNujXriXcbhJbL36JwKdJpsj3sfyFvfi5LQM6E5BKXGK7RFKyf5KZ3nPLFiAYWJoCrPB6K8b",
  "key25": "iv6ghTDpCbpq2WcGc5QR7CZweVGKi2EWKgCRFj1qhTVaTTSrEALHM52Ta8xYrpM21RH2mkB3UciN3uUDHhjTxQP",
  "key26": "39SbNwJzrs3oBxQyK1GLAFpimyBS3uR1qhsnqXKpu6Tukgv28JpjTToiZiTAtUgoyvTPCT7bHrt6cBix52oJSyVz",
  "key27": "3b4Vu2kD56dAbDAY8smxPD9koenZBjHezEbpv15CKFeJQRqQj14C2tNnAZpjz7b2fT6HMXR1gMx439RxNZAriTmm",
  "key28": "5o8SZy9sTXqmrWD73emr79GhjopKjKUw7xhcy3UGoNbAgp6UFi1gasJ9Gekp2u47chZbrC3wGCadwPoNvudAFyhb",
  "key29": "5DaL2Gyvq7PGTscFcSjaGNCxxepB6YuGoN86zE3KA3k1XT5FZSxoefsof25Asm4CheNZ9qBmJWJsaHcJztXJPYCq",
  "key30": "3o5n8zY4J2f3oVFKhojdWLxj24PxyHioaiQ5kbKCAoDzqc91MburgFrDRT7fDZBEDMNsyLcKppuChQ66LnJ9ATfA",
  "key31": "4afn34NEEdQaQDy66xjKePqyPtHVef37j7P2w7evrczLFMmHXokGnwCUovTME4g73RTRBhNwcRDUjsdCx94QFU15",
  "key32": "7paxDyCZMjTy7KLQzfjFUNYKAUsn2YZo8mVEtTQKeMMQRT87vUkjSCnyimnc34MsnkmpsppiX7UfRUqVTxiMabz",
  "key33": "Ra64y9HuWGxWdRAmgBtuPj5fpQboqzPQ67BX77e1CfhdYZMkfxywizHFgbtXyTu7NvDqGEUv1Z4oSXQiugouuiU",
  "key34": "3vpZ63ZGEQMr8kkNnX77CAh26uLNfCc452ot2yWqk6FiabMV6vCST9Ehdendaf1k6CCJ8evLRe2mgQ4kX8MGbLqM",
  "key35": "2RYdd1UDNXVHuSsXv7J212tCLLgv4gRTHdMGMcExu1z7qS9Tn6QWmif5HnCCDpdxXbvyhN9hbe5tDK1miZKbeSaQ",
  "key36": "4ner4o8zmRU91RqxcFA5nkFPhkmms6V9wKdFbYnoQcg15aoavN1ozpa3GgJCnZJPvssF1CWGxDoPkvrAN5CfV2mf"
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
