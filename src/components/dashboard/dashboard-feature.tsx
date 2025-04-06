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
    "R5harnQsDd4EqRv7jYX1ufzRuz4BiyWXTU67v5tGb2RE7jRd8pTG46uH4eRN5WtCjfCSua3UiiJzWpqwdXLwJBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRhbG5HHdhqimQeE21HxuDjTQCRtafDz584SuchSXurZmKVmiDs6meX3iciPYNkW2FhHp6tycbhWJxBLcmE5KfC",
  "key1": "2rdED7Vg5jZ6Wiyrq1vhm4KL9ezNofTHDfEF3LNiyYX4TogZj2fAkW5zrKZoFmy5xw5fa1npJ1u7qc6QyE7Wscfs",
  "key2": "5iy7MZjPdtfkDw2kUzARciW6jc7X6DhG24NEjybZ63eFVfkazeUoySVuwG7DUwAPJPiWNKyUuN7jYAaj9gGGs2Fh",
  "key3": "3WsGAKSLuagKKZCHHrSEo9CptVxTuzqTpn1WHiy39oveypzCLNMJK1uwHnDRbBFjbY3Gv9xazCHYRo9ytQqerMfH",
  "key4": "XHf5qZWH7snNFZxDFzvdWHcDTTfz9rj7CUDiTJUZpqZu9XgLqzBymSttcPxijEXneqfpqPj7vRYbrcVhYina9qj",
  "key5": "5acvy2FpGS1UMPBS4c1gr7bTMGAy3HjeGnY1fAZpEAPY1XEzDi7Ncg8VTX3R4HDgXPps9uRck5RbMEQ4t6rHvuvV",
  "key6": "5xUWv8k4dt1aPFQ631tUQE9eJhkKahaMrDZF7HizvA24kNjWtRRWGWNxXWNsF2iWC7bRxEswqW9W6mFEFD73fEif",
  "key7": "4MvUJQLNjGZLe6mZDPgxdweJryGew1pk2bV7KpWAg69vgWqV9UAn6G2LzQ45ANYkgjsfRN9Tznnr3dDCJRkRbU88",
  "key8": "5rCNgrjEVasLk89QYYS64wbDaxiyJZ7HQYKRiWYpYthoFE4wkw9j3yFDetUcdJz5cdu6QDLoRemcWp5rhABVmWDS",
  "key9": "44iiAScDkrTa3mB1HtpujKjzvtTvoNmjsRjdckfuynea6GJX8LKfFwNpCEVDejS16m2SMe9HfgihYjUbsna1Mn2W",
  "key10": "YEtNhsYmVjMNJDthzDDSaZcdayzdV4T1NPimNCZTE76Tx7qiY8DdEKdZtqtD9f95PFH1qDQhc9raV9jahz2pvCi",
  "key11": "513TyZvDemCbTmPrhfm4LieqVmv3npWoVvHNjVcucw4WgqE9MaMMFD6yoFvxoKHmQD6mbbWbtEr6HnpbedjaeK23",
  "key12": "57UfcwpzzZsbWnYxQ8mRnSfhbR6W8sjEXaEwh8QpThb3XwKTTpSfs8XGCCvJTnSaNPWeyJN4SXR5UoLtNHGS459o",
  "key13": "2hz9FTJ6NKYCXGJa9urENvzMtNn47Psr5B9e8imXjLh4vtxiZWUkdoCZTQ9CLq7Z8CuhwHwqFC9SPK3AbR84GPaX",
  "key14": "2Gneywi6fAT2r4Yw6fQiuSjSuqtXwkjQ5MKxDQWgZ4PyFXHdEfoLJet4xyZiV8r4f1dRFr28DSTMwGkvSrBDCbac",
  "key15": "4a5Z5MFkamM8F3RDQZpYDjfc7vJ4g4dif5ZrpyXDQAWzkr7LVTc1pk17XLE1CTKtgvNVUjfaagXxHtUmt7FSQf1r",
  "key16": "3uuK1SLHjGA4WSMjmUE7xPjnevp2AqLv8MzCiez1LdCugYyy6oUNh3EdqUKocs3rvFtuBktSBhZayuHqTix36QXr",
  "key17": "2FcCJv8zZ2Yd57JVSkws89KjRD3BKxoC7YshmsQbUos2EZDvFLNiSU37ZC3Jprg3vy6TcGxyiRM1S9JHu4vfoPJ",
  "key18": "57wNqxog1JquY7KziAt5HHiXmDZaLi8HHW9qtdNfsupo26x1nCNyVZ9grFmWfvqof1746s9tJpXxAfG651f5Ve49",
  "key19": "ivSXjNHPXcgQs2trXLpszHxKFqVw4YD7MHF8sYnP2mhCnLHxof2X92bYALaY9N7d5RDGEvvggd2PnYn66qbkUVx",
  "key20": "4NSheA55DbDZ7w2iD7qSESaLt83nAVtKcg9qmkvxcHDMGqQ6CQT6t9ZqKPtCB2cx1mUPwGEjEC2xq75gfNQDbeRM",
  "key21": "JvUJ5gGCx3BDPKWLfqXBWwzJnGV6fvghAULduc5cPNU61st9sAGQ799tiQtD2otgsKtFvuVTff1QtTXYDoZLqtd",
  "key22": "VN5fvnUfiULjB3xoRYTQCu8TMPXGwck8NugwDoVtSntjw4ynACJWE2HY6iJe12na8b9WJtgjHHjCty1LmsQFWU5",
  "key23": "iVDgNCMoESsfurvnaKQ8bwUedBhVXtwvyqd1kYJFdpYiYXzaXsBpTsak8i85m21ZGfHrNFy7WAYjnKVG8pYsCxH",
  "key24": "4gJzNTRQW3TSePXXc5ZrMRLJmn18Dc7hUnufqRpXG51g4zSEErHDP8ECe59ys3g9iyHEbrqwf9ZHyiNV3U9WKPdE",
  "key25": "2UtYxcQVjwJtBNEeaiLJEP9C7TbiQo2tGDZympDYUtN1SE8mdKYZFbsSUHbhnv8HERSyLLkVouMcxg8UiEENP5Q3",
  "key26": "35Ei3Wzx1XhwyFoTZ1afZGw7413a1TAFYEP3r385xge3sqdGqxQBtrtRaek5uAh8vmBor6xFZKvVWPSF3Lyobqa7",
  "key27": "5E2rFxgNeDxzgxNC6zEvTimXwi8F6teSa6sRymUyttdn9eEzh1wzbpwcnPWZcaPbBUrsoX1mfhC5XfoHbnJrvCnq",
  "key28": "vsodtuJNPWsmoLNTWRKyRaDs6d1rByvS8j3mwr8QSS8WSeSFg1eMiiqbdTCcLxV3tNyFCHfnBrhitU93Ey3TmvK",
  "key29": "r3LD2dNEusbhGL4BaFoN3YNDqVFN1TRTzA8xT4swbZpbyDAGhjraswM3oEPL9VaWT2Pt2wkfcsYn71WVGQfZKcf",
  "key30": "3nFB51FSqdoZie396Y6WrSPkhUiHyVeFRUx3q49yHJbP18kje644zNcsFBKktee7AibwQPw1ndTQJAJeGt6sSMmQ",
  "key31": "4i1PXPwPebwA4SjJioqscAWfXEYyfjxxytVd59NAss48YtGiASzTRNutVk1cXX9uHjofT56fFzqEJypzstSG8UCw",
  "key32": "56mF3mA3RisYDNQAFVA6LFGEiAEabu2Bq25UMXQTGBsrRm9guTy6FRhm62eCS1p975wXTEgG2wcsHsuPHcbKX92J",
  "key33": "4Gm3uAz3MVUdRnskUyF7WhPsew3dT6pQyLVGGQhQFrUySgRvS4Bs8AjnYsNAEahwg9eMHCwa9gbMjhSdjUg6zSEW",
  "key34": "5kMkCfD7QbujyBCJRBtoDZySZoqYDZoRmpBRwryCTYHRnMN5mSdzDU2kvr4WDja6UuHE1iAo4NV3MfnirashoYx2",
  "key35": "ZpTPotpEqAEJKGemqs8XQegBeojTcsQw7XgNncssbgAnZ9rsvmiGCx7byh1extXWbrQt1an9wktW63S2BoyJ38k",
  "key36": "pUwyfshqnZRxjVAXrHeazgR5WNEwTaS1jJv5LrCuWb7nj4erZ4XRMF9iu5FpdcAkvwGF5Mr9YMSy9VtPkDzh2fW",
  "key37": "WdXK1ePKuyyXNjSGDSzERBUNGwtMm3GukKHFDuEpuXtRjbKqfMus4NWtp1UFM6waQxAQQQ6kxTp9KqjWvPjPCuF",
  "key38": "5pihekDBa4RXrZ4WrJL6qER7ihC5VTbdak4WQQGQCGzmGngjvuaCE3bqRwU6qN5nfEDJyagzTiPtBAzqEEwFqP6E",
  "key39": "51QprHGPeJMnbH6yN79XimXYEaKFPKtGFcQjUtBCz3EY6dLieMHug5FZdYCZEXH5Arhd8Vk8Af7PTWDDF2uBbHEP"
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
