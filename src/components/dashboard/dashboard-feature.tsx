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
    "4Pv2TuTKHGGPZCEZpzw9dQu2RPLgWwtbdBnvsmRCmNwSQwTuYPdjMRcxyHqSW7rEGRKXSmAbDokNGgEtkxKEkrPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEqitM5LjZRTGS9QbT3koXcgVhS9Z3htq2Dz9avsD467n9Gh56r4CwDtqSZpHA2kR1HxT2F7PFdKxnvexyDKtxw",
  "key1": "4KLVamTwNkuef5RZmTMNjNsXuwdvo1gyhCMwSvVhUcYuixyntNmRDuvZfaq6WfT9par2NLWScqo2cnt6VntD1R1i",
  "key2": "3A6CrGkGCtVK7ozAAuJYdoLsdQNGZzijU1Vf9vi8V7efmbMDggGWeeaR7K253pYSUgzcC7huptX4mGgxP3KY1KPU",
  "key3": "JnJtSjdotR4R2x9soYyAp5MTga4BgFiBGx7DEKzFoQNXtML9Acbiuho6UW7onnG1QZtjbkfcckQRezzJHrikddt",
  "key4": "4sdLXaNLEcfkLhhnxH6m586NLZtzZicyXU9LYv2X7fYNv5qAzq7zPL9dLo7d8zAyuQoJqSE8NVy92DbYAuAT9TUS",
  "key5": "44NL9YfiyBy6yHwir5WEbMi1fquAyafqnv1KCSt693tjA5FiLyNvW1n9jU6k1HpmskZ54Ni2ogxxko52G4xwAWdr",
  "key6": "4SBWWP6S8Vr2XZ9DBn4QsNbn7s2yTWmLYsGya5aUXet4LrbEsRQQ6SsQAHCuGFbnnqsdB3utLf2PXDiocKbqFByo",
  "key7": "5pxYuBy1PBDg9p1dxy8W64LAV6f4cdTZbEk1NdqvxYWHuDPZRsQqifQfu2ewLt5HY3Wwtc3e1wFgFQ4EhHWuzBU",
  "key8": "2C4XtqHEP9mycFvvH9Z69Qf673dMqe1UpUDUPubdvkXee4z5foUYhpBVMABAD1sV4HcNtKDyGpfWrPnsbDPzQBkr",
  "key9": "3xUJwFATfXUTM6qobrY1HYP3gf78GM92LtzqSAZHZQtgKVEEPpZrY2vCvUVsyp9KSqAcwm21wqHxeBinEd4hQoqP",
  "key10": "2fvYHBwux3z7QZoNEC6JZhkZqxVkZknyeQBr7UVmHxd3VzYC7wbB76nUAKKjQDC5nvUvH8h4UjQaxY2UJxXhfRzS",
  "key11": "2MRhFxCAzhfrWaj3XM1W42zD7wBCWA1pgzWrxwRZxktzb627YH4RrQorq549R7n7Kn166aqTp3ECeNzGyffsCyrC",
  "key12": "4bg3cge4S8VWHkJBK8wXohZ18mzPdcaJSk94s4FvaFqCvudKS7xunMV2Ks1ZERbbzLatPWrvEMcfCGpk8P8Q4dG1",
  "key13": "5xMYuXrdPN3G1baMB8STh953hmcNwAvLgtKo4EBY9Nemx7kfvZmMVDBgpmxUyqTYTmLdZHYQHGFCKb4dWq9XTpUb",
  "key14": "4RXY41G3rXfyMJGhjhKMJSfoRoQBACjNyBwgmf7ggSDMxQNVnkqoq9w1baTYRp9DqafZkPzETGxNhFWWTii5d6Qh",
  "key15": "2VmXHbTv642Vgjre551V53C6bAnA1txDeQVQV77sjzGrSWHwf3q4J5yPU2x4NfacZX7YzdN89ybnPBTX2HpoJzjD",
  "key16": "4J7exkCFUDv5F2veQbmTK9kaDyZkFjic6cMQnBwmgcgHtnYnFU66ArHFAdk6hEdYjenefpAKgUHdWVmHjr4dDtAU",
  "key17": "4KDyd54n8m3h2j6syuanKLD786Tq1ya9tQxe9gZxBHgx9FsbHJxqgfpUBo6n9BSj1N7btG5FrMcR16xMD4GdrCcP",
  "key18": "51HpsohR1CpN2hCKy3An2oH6Fd2sPoZM8fcwQyKyhNcQmgPe1emcXNqRH6CQPoN5LLfKye8Z49ez6ZMkebd7t7iJ",
  "key19": "4kNQ9TazrH7hapVgTqWu5DtMqnAjHHqoTdPB1RyZ8L4QtKrPoSg2TCDqxTC4xk6fsvUYKkxvsKZRaczFDGaMj2Qq",
  "key20": "2KikK68xciRAH33GX4poR9vuD6nbSnhBQWrfbiFTEjfXxChUYoMM6NQUcHyssVBv6qYMPEdNKESDuqafJsVvMg32",
  "key21": "2UtV9EoFTCbVnTJuBJ8pqRTkRFTMnFkM23dipPDbAc2ThVQMtv9DZg9KrM5hwV73xPCP5YojNtVzmq5pA3C4DQhj",
  "key22": "NyE3RyxEFZrmbh7E2tkhCL7FiGoUQjMYDxKkxTRJT5eN1u5frsjoi9UXg56iywGsK3wimw8GL2XjbghDYZCs2Ts",
  "key23": "3t7bE4cnoGF3spCjnDkRzy9mSrmJWdJHUMQTHcRdn2QcSjGH8NZNhmCq8JQmtFb9qQedyAzrXs8JhuwbSE924kmc",
  "key24": "4EurrPHL78dVxK5hP3JKCL21vayvJzs8s1mnZv5rKX4swBN3T8n8wqbV6gDSKrQ22ED7zRd3XoFibMQ1FH5ymC7h",
  "key25": "4sBsz1CwWTXHxuqDxhRsLiPrxm6vQCwZFx1S31qq2MG7M6GTnypQG2wb6MhRbKG2UnNaDPyqh1n25XQY1njAATvQ",
  "key26": "4rekbPUgzfC7LnYU2mvd7vhTup3ywahL74dPBcFgD2TunFEZkU9UNhTQt71NNm59u4unntEv8pY6CVpfTtw3WY7Y",
  "key27": "2kemUkYTzv6myatx2LcmamnGaGywusAxFksGnzThx3C93mAHVnyDHKKwj89ea27sNDcsmdTVzVyshxWzyNXVqSdx"
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
