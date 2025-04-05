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
    "5x7cj5qPn4MnwmUgDxAM3VaRnGsebjuJLcQbvPWvrFWyhebZustgZePDdvBZFEEcH8UQQRLvDpsx9bLCCRZs8rKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRryNdbEbtpKFUXedSqVUX5hPvsRrytEuRbKW4CxDzj97CMUV45443yi6fbni68dNYiG316ss5pkr79ioQNYcnz",
  "key1": "raYBHTD4Hd8GnxRFSkRPnGaYbmmmfhnBya9o9RrHhnEyEG5uFsqqotK3QKSVRSZPQbL4TfzWa1cPoTPzGkBtdKk",
  "key2": "f9wKEaMvbgGCYTX4Eay5yrBC94er5upF84p4qz347zYqefBznCJiiBJ8EmUqrKfACni8ABgewANTFhXYeHeRh1M",
  "key3": "3A5VhQWj9hT9EpUFQ8XyKtXKNTQPu9iJ4dkH16W6sz3xXTpFNy1y4WvZcZmDoKTebKCB3jdn4oHWbwaNNGQLQmGB",
  "key4": "3f8ruZtf6Fe4k8fErpTk2PqWy26dyZcgF2C1hA8Wf8VeDxpxQbpTvKYxmDMkBLCN2YvqZZqMzytm1ReC1yxVoQxw",
  "key5": "63zPJ8MMuvQ8L9Yc8uuYNpiPXsaq95pyTUANWdDqptwgsRgYncMWYNzwfgAen1Q721MTr1kb9XdUJKoSSBEZ6qK7",
  "key6": "2rkMpKfso2afc58dkpAf3JHgUmos9edXEAwFyavmj86RXtJUCgLnMrtGNGv7nqXTBW5emjqegsd68d1UxTt14tJU",
  "key7": "45uPHPS6EPKy7WV9joqREjpGewpb6f9frrYEc8DUqEbAnzRydSQBrs6X7aG7ecZhxJZhk1hAtWmFfgREBahPgzrk",
  "key8": "5xQcb3j25mkaBA4aTsUEyF1aDPRxUqiijpcw1kz2SbwUP2Yrp13XK4BtWmzgknzjbXMUfutRk2nZP2N7YGVLq26Z",
  "key9": "5Y93yi8e9y7bVysxyuK5AcohYTuw6e29yyUkNt51oaXKHbA2iVw7fgy5myYpFPrqXfcjWKoi8k3wp8TiQ4QjDSF",
  "key10": "2VNDnNAmQAwvCrXFKzJhBgbiiNAjGZoEeZdAAPZRYXMHCaUUk2PrGLqx17PaQ1yaebuqyymYDxcw9qtSLhWfDb4S",
  "key11": "2VMSdiMdhg1RjvQNc7t1ZQ6N82fgKHb9KbUmSftu7UEdWcP4F9ZmGJ6q6TFXEBNbbMetLTFdnHAwZnuQUq978VsL",
  "key12": "54BVLmuQNHcVaPsmjCo5fwC4zsX97Brt9ubGsQKJD1LoXwgMBocZnYBVHkMh1LpDpPLUAq5YYU6kSh9Ktbus6ttX",
  "key13": "3yfPHfZTPtHzeNBom24YSZ1S8GKvvrgNcqxjcHNwK8zVqT4jczhuQnMPRnz7uXKgyVC92JSs7ec4NtiRW8DXMvtA",
  "key14": "5MrhM6Wy7SdFSdtEXr1zTJ3qh9Mcjdxf9rtybaU8qjkwe5G9T3nkXpej59U2ABcBsNaBT6Un8YxZXvW35wjnZrYK",
  "key15": "5r8xfJSioGadpLwr7WytbBbq1EuG4mURbWypg4x1qH7Q6f2b3ZX3YR1x5a73Mmibv6VUphHzcUUxJLLWJ7E9LdEN",
  "key16": "2yWEpAVGXLadksbhodNdbw4bZay2Y2sB824VdeKSD9dnh8VW13qvurbHSW8T81maiqTXWjiwbcCRdqxKS3mc434E",
  "key17": "59KkYbG2XEsRD2zxhFn63LaQfsQn9RicdH7kNUHGhEDtZyALpm9noU3FnUTp7gHtYTJEAhCX5ZcX79AjeFddpvSs",
  "key18": "3JDTvLUzirtczyZgMYmAh5v4k6dBpDdAGoJjdANm2CUJ9jZYieRL7B8eLnwxMyBjacyoCDCaciHAuexrHNK1JtCS",
  "key19": "4rcZ8cHxo5qDDTJ3qxLZsS2MwXE4gHPSiAwWPEWhiryvffNincnSErRCSyywJMvJnJi7X426m63cfuPCxqo5VSwv",
  "key20": "5vyddx6sSduGF4n1oesvaHj4361JBUbrhfiEAqvX2XqwXcbqg33X1J1ZfPMZ6DfmH4brey4gZEhmPPzzTW1UNq87",
  "key21": "5kz71FMLdB8smB49yWq8XHwF1a1N6AdRBfwNGhiH8unpHoz9cmCWCM2EdMgmdL3fhvo79NFved3XQKyjNSL9fFeN",
  "key22": "SG5oEN5LRMWtBaJ34UoRyu726pdG7A6jRGt5AYNrWW6G9E5t3Tb1mufDcNwUJJQFJyMd2JmzJCAdqr3aX4JVMv9",
  "key23": "3atu2rEhkvwegHkU5qy7mxmwkRdpBddSWse4mWbYqYuPHowgbm5p7eD7d3i7rShyujd3NBF4d3PwFDsrjegrUx32",
  "key24": "39gBWpLTEfvRW2imrpRPjvyun5Kn7qCgrpcD8UustSzyhKTjYsDNWbUsDQkfoJ1VeDh8ndiUZ2gzn7TszB3PhTsF",
  "key25": "2uMdp6C2ZfQRnjnwtSBj7tcwJ1nuQbfe3upHEfspTm7bEaUe1j7wgnQNuTgvJbT85X1jv48foUkbMG6sAFtgUjrk",
  "key26": "5ex2a2ipFdMtvbWkQNjZTJGAXPVhpyXzEg33ZT6fMhG7URFfmqYUkQTdnd5dF9YoNCJHimG2Rok5fDU8FL2FPczX",
  "key27": "3d9u21HXi2584653sqt9c2BD5g4G2efTKY8AF7bddbXn9URTVnYNjSui3r6SMKQUFkbui3RU3ZPQGhgacS74pyi7",
  "key28": "4nd7jq4T8agaVV84nsUjLVjC6DndpTr2oJRshz6XWgDXZLoE44pKAUVek5eLM6vk75UCntyMFaQkqQvimotsQ9eU",
  "key29": "4u8CkQ7aXi6sX4eZJCGDZvaSrwSLdBVJNutx9irsUWmSDVqRLAn2sgoGYQWzMRThe7bw19MwXUxSdxocbeGx8aQM",
  "key30": "2S3oyJwra2mBYLQsBb8NzSwAgGeTNjSaZdeJNyS9HDjbLsFdedvsxoa3vdMd4DCwmdEhLW4LLgZgvnakfpx51vEn",
  "key31": "3tpdVjDVXyYmLk9HfcpaDAdGmAgQTqEgDx7mKaUABn2tRbSHPpHCS8V8VT5t4rGwbBLzxdXf6HMUxgNpewQ37Bug",
  "key32": "5SAMoDA1ioNEjB5BCrcDjj3SkFL3UTf1xQjrFCin8ubogx9GwV9w9e5gEPgtjcXcNwddyjvBimMNPwjjUJmRCRy5",
  "key33": "62TawwcS9LRnQ2UdpuPTNbw3PtBE6McKykpRu6LdiibftWHivS5HAFGMwBbNRaU9qhSALAAFttSCFXzVXW4crjjH",
  "key34": "3khqmf6F3FbTrXPhMD286tmd9zBy1agySUQZY1G65nbT2jnWb5KuG3X66gvkZ4xywaFy8vrK5ocaeAVVY4DW6hmd",
  "key35": "3v53NB61EYz95TSUDeAXDha9hGhyPo7EXtuFhVbtNayDuLaxcRGH1vnUjEjjHYKk5Qo4Bvqv6pFLA2j7R5psNvoG",
  "key36": "4nwhQ2AvipkpPLQK9PL9WhrpBhG4qx8grEGTADG3GNCxrbDzbs9ZG6w3jjKSDVhtzd6YrxVuVvazWoWTcZShEG7j"
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
