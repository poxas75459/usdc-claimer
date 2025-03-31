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
    "5W8V5smWmkmwFmo4imwEuR7Mq3pE4eB34n5qQp4kcSeyhc5bBEB4j5X2JQxMrZRfSRZ6UCRCbDkYi9zJekHi8sbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKMvQn4zHxtKWQxFkdp8dB9dKLoonjr5bvdtpQy8qum5L3mwLJUPE8bPj32tt146ZerCy1hxtDyVMaU7R8yH4sW",
  "key1": "42cL3yd69bpFvhkKe69Urvdy8jKxc19798Np3mwrEDwn9nHVx8CyZxrsV5BJaduy9h4MCiwtHsWKX8vGh4LwTa8u",
  "key2": "5V2kKnSFSp6ZdhEpqhYZnCg3cELJYMfVF4RqxBywDjRsC2C34kHNprzJGe66XQctDhh2u4YcGLyPvzjXFpbfu2Jw",
  "key3": "21fi9uUeH3mFooXodAoRvdxrYyehV2hCA1Sg6SpPWNaGpAwGRGfjV19ZWVB2z1JF4t6nRk9Y36JJzLvZ5wG91t4b",
  "key4": "2cMqjYmjECi8WS8d15FnmHJ1V3H8ta1JdDom7t4ZABzjo9vNxeNEqQh2MwqrzPtre4mzJXH6veEJK6tM2gxcJERF",
  "key5": "2vzFMqGx9kyELVRqVZ4tSGSKCHQVdaRtDKkkoXgfwmoTAuzjj8PK1cT2biZ9gm2oAXqD9aje4GCjyW7rtifNVcS",
  "key6": "5vbz1AW9SqrpWz9DsygrdDUi92YDBCtdGRRNFvjrEyTCFzVxirpQN9GpqkbFEvwFXczc2dZE3H6NWQgNibNcNEFU",
  "key7": "38WzsyVMH1GdLmahhFZfdTioGmLs1jKLFDYuiByCNmcdNrgSvsi87bZypAZfrYRC6q8ARNSg7Bqh4e63RiRtgVre",
  "key8": "5E3jnLwUVSMb7dP92U1dr6Lt6eWn4U9HUssGLvgdTg36362KhuBMuFtLWWSpx1hzZLEbhocNG21ygCqm5qxX3ZnF",
  "key9": "E5L4cq4AQWp5uZqJYKkPJ8uhW4dzh79SGuvhBR13yyPTbydZQr8WxNJQ9HEGe85g5UjoQYyb645vKz9VmieNjMS",
  "key10": "2tWUiWb4fUb4rrsXQnb7Vf6cEv7xdfYwwzT77y3ignUDF8jDaURHMTm3eUFN5n7hceN7qms49wqVDRywgYJybX7U",
  "key11": "3jhtrpxgXXkrFa3XwudrQTzQKKgSsttyfCSuXPsj3C8cSrPbuwXXGok5iRRk5EVNed4nCHmRbNwj3kbtX3rrXgXM",
  "key12": "2R2iQR7VxYFnYwbJz1jxY8Uw9L2dHT5fLVdxgvgKdQaWLucpbLL2Z2FCkn26oovk5LfhHWLiN2TmCdhtnp6Wx8Df",
  "key13": "32XWMLRZGUgKcRv2KHCrmvCpqSxWq8mCMSDiahBq5U4faiZtWyJ6hUeT1atY1y1LVYeS3Qg8v8QDmcxQw6ZQSa1j",
  "key14": "3Re7VVnpfTCPHhzrrZNDeoitp2T3JH9PEAvni6tXf58ahSyNA74katonRUteqm1a61Q4PQTUdyafwSdWjRUQexvd",
  "key15": "4hb2uWekyms7iengg1rUJNXtsqg9dvxkfLeFP2dHPXVoSFy54REH8m5wKFtVonPznzQrV27PzBHz8ktt9WyR1MRG",
  "key16": "5vjrf7PfPPMw4DwCcjVt8aeU2RHeSgKE1zhpw2HtTGkJbsjwjSCTAtrA4mphVfcjaX2FfKSDrCF7LAL6c2NsoNiu",
  "key17": "58r8cv9TpdkguLQ1nnFWmGTBBMaxfbn9xNLgch1NuhcRZfLHGjXW5cnkgcs2AMmgBPUUorXEqo46ypHJVpGAjK5s",
  "key18": "4QbaUeo4eQi1rqMrW31MwnPBPPZDtYEX3QDMygmTJM7cgWhGeTM6vSjQk8dTpgJiZySf5XrztRsRf81je8QjoLjU",
  "key19": "2tHQFVhYqHBH3BnRLnhMiHUCH5fXy2WUhjn8Sx36fij8wzAAo8ZT3jc32Fj813nFtwsXBSVoFyj7CXcLWUt1rxp9",
  "key20": "517Ca5zWNwgVHQcFKHRCLggWxQyd18PKNVjSPrBiJ6onBVyrU2LapaD7wvwC7AgzFeokrmc6hGW2U7eEqkf1pwyy",
  "key21": "2PSbAEJqZaDbAJaCUGKPNsJzbDk9xwtezAnQN4hKpzjuzSknzbhTWbvfZjZgWuKYbf34QQVhRp8VBEzFVb3dW3uP",
  "key22": "26E3R8U5fLEpvD6ngSituASXgsBZCeqtvU39PM8XfbhrTciEC96XzdNFkZU4UHheSHFc4XnZRQQXirzEisEXRP5S",
  "key23": "5L1QoNxMpMLFPcgipESKAuDDyVYmJ8GKgXF6ksTf78SQBC3UGTyCTGFkPbuWLoEErBM7PBUkmjvWS8AUiGg7WVpP",
  "key24": "HxnZvquPdPeAS7tPiGan4BTVKPKrpda8rcCvj6nX4u3JqouK8s66PbrqE3oSLtpNcA8b3dDLDfTUqt5p7qmYZNW",
  "key25": "5fWdRYmGTyTXiquz5byN9vNXXnupZyMcyMuvtJi554XYpqjkMzfpjHNucbHMU37Arot61kgYp7rm7gcBnAEaoEaw",
  "key26": "2UauBauNgWvBrPCpDB1AQQ3HAH2UcnQmdyFu2hPtj5fb1n9SJ9YHe3NuN6q1BaG7LebtvqrBgskZEfzFoMMvhAR6",
  "key27": "2Q9BpzedSnGshUrwGiFcZZe7LiJFzURNWiJi6tN9kcjNAeFWyDgUxRQRVLaJEQ4QBCjifgPsZ55bRT6VwBkAsaA4",
  "key28": "sdM6znTNkki8qvh1cypXwEpHUnX6zBXVn8JRQAp5TSfJXeBWq2JLoBPgfLQ489wEoHbnrzA2ZVk8qZTUZPUhB3N",
  "key29": "5WPYh7V24vzHbSSbrQ1W2CconFWXbUHSZZuDaqEECa3bUCkuY978SP3iUXjMRYD3SsWLMEYwetmGkC6fqcEKw1hx",
  "key30": "3D3mwJCCrFYpkLF1v2ZBr21eNSLcS1DhaTGAGCYfoEEbo1mNopaYA1C6DFQVHrAEdDomVCAjCyAYiU1MvH4Tcdb1",
  "key31": "5FfoAsZ741SqkMhzTrgt6bXxrWcCNYLu1mMcp4mvgW4tWPJd28CThae1d2Vc2SUeLKUCsSZxfAXRZUzZqk2p6reu",
  "key32": "56HQtZEUXyZZAMSJkrc9WYdFrd1gwWACPs9QRUcwUiLJ267ro7iVECVkrrEfs6vAhEpPHnqnZ7D1JMjMd9HCQx57",
  "key33": "4k2Af1Cg6jxkC9QXFbmomKstEGeSy5dqy17sLZZ57zeQPBUQXfCp86RFcsZWyqmcJ15zUJRpts6hYWMKfQCyPWHH",
  "key34": "2XVCnNLEywVP2xmXrn6Xwc4sc1LCciVqZtzWR6kJ1mT6B5bHQPAoj5VWALmhEpvWr2KmYiu2sWgfvhnZNNrw3pgy",
  "key35": "5m9Sgq4bkMWbhHcaDMnhncJ5mhESUPpRDdY7iaMGQk6pRt679CwYQ5HfqPF1KfkSTyGXk3j6LTqMEFLTNcuF76YY",
  "key36": "4KkoztjegbynSHKEVEtkSH6ShKsxB9M2RiEArVqNs6tvGcRH8Tf9fVgonZJA2gbuwwrr2pwHsnuYRAbZBVwNVjk8",
  "key37": "2nArTt6xJ9V53DNgK8Qx3iwBNZyTPU5Z6ejWSqhRMtwxXKpvhx6ZcE5yEvAXM5XgZQEyuJdkteb7dtd5CBitcMVA",
  "key38": "nvvAKc3X5NkhSxgQfsUka6DNXtQV3EghWGgH19qCjR2DkTBXZeAf6qtyEMYjcAte2XsTrmeELyEskDFoKdsju4K",
  "key39": "3qYsaevXQz8VnPUARyuYiLkcryHKs4feQrwPpvdQexKzjDd8ySFFxYnzhhXHW9zPKUCDrYXj7DkpasQvq8VyV28n",
  "key40": "5nDDk88rpk3tMDJdZUg87qj4fxNGq6HSZCLkYqZwQGgj8V3PyrzTzq8veMHdBSm38YHrhMCmbyNecNZjZQBdcMx4",
  "key41": "Y9Z1VUtDQLdTKq6ZprKQMAunQ41XrYvi8MX2jfE1hTZRcV8Pni3MCUgSwiVuh9fcb5uSvnxzJQcKLLFbPPji52z",
  "key42": "3dCNmP8iEdRhd9n6yChLoosvrAu68vqnJnTFsiGdCo3Znv5m1wWa8i1N6FNgxEmH5rEiaqo8sKbAaQML9qrPXMdF",
  "key43": "62j4TfQpquHcjDxEWDF7HrtjZfWAsXnHTrUyy5FGSrraLjms4hosPzLnfiJowQAj79GefXxzsj3BVwPr5kMrBNKZ",
  "key44": "3js51D82x95c1jfR4d4icaERgiAhiKgfd7vyDtcTzwnYRoPhGNLfYJzJnLv1JLN5x7H1TqQatUVtK5oCEGDtpczH",
  "key45": "wH4mACSAamqQkupYdcNwy2kAGkioxvKxRp5CtC24mzfecydYCVEkZ3v9kwMmMixWFnJG97FRJ2ecPtwKtCikVej",
  "key46": "3PU1YddUA6S2dA8XwWcw6mxTD25sX9dJ5WqRangabTUP2WSYNfWM19jXJtdaVqB45cF1ZaNu5LAmMXp3i1teSPLf",
  "key47": "221EALAFqyAxoeeZfNtzxoqHSNDmwD1rPe2cRbCju6RXLwk7wDxN6eQ8qFuswmRBP2eExVbSw12pr1v5VJJXAa6y",
  "key48": "3JVRHwC6J8h2T1n39Ga2NgZY3WgzFPn8Yc82wVJt18EK9qmBDphqTbBhjBvLKG2sXkiw51C3PvyEn6i8cCX9rgMJ"
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
