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
    "2vSUghRrBy9MAgPp8eX1VTq2yCcC884rQATH5suwTnJ8jnsb8pRBhcQjfKxcdwdxwKCsBsRyRT7UPJwgd6k5UUxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LE1sVUoB1nNbWj76wsyhfB6F7GaKSRtT1WDbrqGiNKvjPS8itmNeWpnJaouXAhTDXv6jCDdKyxhESbzwemD8SHk",
  "key1": "4F86cMpDc6Dwvu4JPMrRRC9ZBCUte8BUKkNEUGf6icduBx5XhT5zi7ZsdR25pGJ7Wp7EWdGPTZMaAvShCdFmsBRj",
  "key2": "2HAQPSdqRWJHJhysRPqmLd8DypHwvM3iKQdRj52oJmmo43MJVj8h6F4sdqAJ2T9iC9NmxV2Edjnhy2soJF3JRoqg",
  "key3": "dmeoCu6nPc8PyfcQNJ61JCiyo6wpYbqwDNDzuSegF86GY1WUSSmXjHJxfKE7z9YEkSZ7L56sqa3PvzGS7vXsxCt",
  "key4": "3bdCAjQAien5J3WZZgFaSy1y5fTVgd6vNEhg4A4CRaL2LpLQeFjWvxHeHRGNgUJ4TBXSSqaLKqWAfdg4Xe8gWnak",
  "key5": "5UvZ4EmbGJdprEMbr43jsgPzJqeUvThqF7A19UpjBho7CwQD5czrk4ncP4DGfujNHhTeQyPNVy99WAGYj8m3UKGu",
  "key6": "2hM1Xfuekt1WKHdn8jMAz7gGyLU3AqrbFcCbzX5XbaHDDMpwEnLwywXTrJHXTxbb2Qvej4Ra3g81wh3xmEvqetP1",
  "key7": "3o6c9YyovCGiHW5vTdRbBYX69MNdqTbLngmQdaHGegqqiqRfrsrHJ1YJeKrPd7T6npMpqfK5WRbo6HbG5cRePcdn",
  "key8": "26TSyS3kEevYQjU9enH8vaD7Sd2B9JGAmvtfjGdqZg2rLKgNjRNQoMxGddK1d2GxyhTwwJ2rKHrnEM84otKEALpm",
  "key9": "3o2rqiSat6kuFLbXoh921eJHRBDMU8Z5JEoNeUszkwENdi8cx1gYXmXjUfBE8kBsZhiLidaeyb32QFkUmZt8iUWF",
  "key10": "3QvnHRs98ZEGagzRf5DazSMznW1uC5TBXpk7BJP2aUKEnK6gwdytETzWPMsFu8pLMbWiqLrX8ZBhr88d49URb8ms",
  "key11": "9xPTxMw1zWsEafhS4rePPppYuB8P9vdRcaw341wd3zgvhExKkMJBsyGTdTkf95phcebyeJnyv3XcMGEoHQwMadH",
  "key12": "2zqxQsY6hhuYhCcKsaEpfGcjZHkuXM1WGkE46cs4ST2T6aNwB7VD6gNdxMDcch2e4Aew4umhaY9Wp58ixg9EMyKy",
  "key13": "5ez1P953Bfr2HEoehtGegsM2XWowGq1ZtJAvw3LFaF8woD1y9TQdpXZJfYa2NTBE1Cx5syYEuLoL3Kp8QAetJiut",
  "key14": "PRckc8rmqJKua7qeuriZA9tSWkXGzrrk31Uni8dMJ7DmKWuCPxYfztmpjCciZsiE6ifTVEski5pgP2wDKW7udGc",
  "key15": "2g7JZyZTJ1zNK9fQvnDgYzL2z5HmPfEsfV8ePVqqaQvbnBamUGERbhy2t6WmHC7MF7apaK96DpXHzsGJvw4pm9eM",
  "key16": "26yCAZZ68ArXnby9MZkcWcXmNCBquDWXF6jVCsHrFM8qYKu7Dv2hhLx4hZJAcTwFDJFxXCreHAZ85qW6ax9osk1z",
  "key17": "46mgwjwrXX8gJKYPwMYHxvtEQQPYXcX7XPBrUuEyzMTrj5axxXdZUsHgpMVUNoAWju4dwe6g3riih418fwydpf63",
  "key18": "5iA9Eb4zmj2GA1AgsGavqwgacH8hMzMVLFBsgRk4fJTqsSXhKwXsQjhL5R5c4yE6PMP3SeCzwFWKz8jPtGv5u4vZ",
  "key19": "5w5iUXvpN3D1fp23dy6pmRnRDViWFDY3TvPLLuKLar5qnQ663YFxhAE9PVqjmGCtcEG9CWYK6tQC77Xcm7YGzXSm",
  "key20": "3koN8EKruM59Jca3XVGWTn48Eifc55QESZxjhHF4EGfZnDgrEDiUpnmth7aF2FRMicHTF58to6SzfRDwn71PVqt7",
  "key21": "5whxxEP4ciB77DdX1hrgVGzAzLWPfy4ysyreLrUZDxBxhz1Zb4HSjoNAyPVd67b1XesaMTpHScGFHwVmHGyrFPY9",
  "key22": "2i9rP9o2uraR81LhTitAzGaPevexjpCqzVU7TAapW5j7PCsZZXr4XEAPpArvK7D2XmyUjJj3PvUD8E89AyiBY2Qg",
  "key23": "2tjXUre86JnMpjoP1fRWb7mkeNyBKrwpLT8PCZ2w6AcRvCmGExQEBJ1AmR7m6rN8qaeAGD8KLJdR4FAwmbD5mM3w",
  "key24": "5tMKiDkj6woSKhJLiNKfCGE5vHMwkW9RvQ7wR3xd256a3T2cH41spScBeFQMdmV4VTqLprc1by3cZQxNXzAnu8gz",
  "key25": "5P5mqjgKE5yDDmxagNc1oWVwLCEXs152VvBU7UK3rhqfb2PVjtq1GVf9QPNhUJJ71bi8GPkyrX4Y3EJJL2vMdGyc",
  "key26": "2h3HsYwwgdJtrneUSMqPvGGu9ecVLKxbuqMmqbH2qGBYZH9RTgiw6rrtNJsB5jPiTnKRPXbCUaQLy4AzjfLkKKMg",
  "key27": "4Tkhd4Ww9BCxM9G3C2nqc5x2ZoE2cvTyNLadDtCipGft8bdP46xmn3USNpXEavGyDKd734RqgTSxueSHx7zBdxAK",
  "key28": "3YVLp11V2oDzdYWGGXD8PHG91MawS38JqKWthXbiFJdHb4RZJdXGvLDxKTQpmHKn3G1DoyYtBLFqJC7ae8BXN9cy",
  "key29": "3SWB5Y954rg3pngS98Fzp2NrYaixb1ixm4fBFureuxskb5TV4GcSpiJJid7Fn3ypFvzFaB2YDr4ZJfbHQY7zipxJ",
  "key30": "4VCch4nRdpyPzgxnVzQhG6WiUQH5kktVi8byToWbEra5QtF4taCfMx7YJM4XSwUr16jobs7dhPALdKQBz217LxQX",
  "key31": "5CV2SuCeK9g31Uav62ZBnGJqL9Ante1kkM8GVBLFxGjXJZ2qmNtnp8cM1cpdb7j2M7C8zj4HhGGp8CwDDFkmWg9x",
  "key32": "U42vqXQ2UeiHG6tEb2tXr7zAaWb8zwyLP5hqARCBrVj97AXZupvirbMg4zeB8MZQSEp2nZ96EFppegMkceZVxca",
  "key33": "3VHZY4eTZLfJL4TkdoQFWCLpYACeCtsWaDKi2vtmWRVdUN343wNzw31NK9DqyC6MaSxk8tug3q8PYLHHcsvHJGhb",
  "key34": "4TAcqcEiz43Av4sZrsCTUsR6jXvH3wwFH4WRXHzSVRNDd9TSJHZXBuBdRzPKwam5RMf2gYQ9bvCXH4r6XTX9CCzx",
  "key35": "56QEj5ZoZhzKPCWZZnRCgAf4KrDXavk1XAPEwzTjLizGecAuQZVLrTv4vxSzKej3LLbSYa6v6KCKXawej5U4G86b",
  "key36": "4QMDCE4yQUaR2yJWp9Yc7h4eWJhrxRGNQgDs6Kb4ZVUtp5KSSk4gWpsiqGYc3zxuB6J3QYcDCNyb1hdjVZzXDcmd",
  "key37": "5PckxLzwD9bUUKJUmKDrXBvfjfnHcCxEJFJZGwA1fmEVx7wbESxffNqASMCj8oyszuV9PUEurZH1UyVHnZcrRRg6",
  "key38": "4r2dPiaUQoD7eZ7cb8DnmhASWSb45Jr7sRVyTUySvDi7CEfQagW4GZRJurtcgo8sZbFfjj3StXKUUS6wmpLFoZgG",
  "key39": "2VWyqXNNH5hFQduKdH8yzdQtqRNwX6nMdzyNeJ8yMuyFTLTb9epxcANxVLYzJJM7FVJkBDr1Wtd6NnX5nF1dNnGA",
  "key40": "wXKeM2Q92JF1TkJtyW3vnavWbPLiNvRCZ9QmC7JiATEjPbjiqSYGNYg3UhqaVfSZ5JM6axVrz2NbkuvpzYUu1QP",
  "key41": "4hom5oH64qUMDdapmsPXhoptXUZCzBrBMuUP3FZmjfcx5mz7GD56c6hQNkiuE2psWZhW2jZFHXuG8886KS5RELbE",
  "key42": "NzuwJgDUCVgUcBTeHeWvoNNbZzXvbtGYHJSQ7qdQA7vk3MC2YzktuAKU7HULuUPF6P1WrHZBBBFNhimSmZePhv3",
  "key43": "3RhknWdtaXffXTakmhAaunDokrb8gaKAnRh2Cerz1tgtDSqNTQFJKjbzqaiZEqe6PpLMcbjkGYZ1AazFAjWyFXuu",
  "key44": "4vuK7iWDu646TfKXWEFvycEdtq9y3c6L6sRSVKDmVjSeUDnRpbCdt2AXv53df526z2Z3go7G5Zf2icoxECpkFS3d",
  "key45": "tH2fzPvirZP8d7HV5EkEuiC8a6noFNYjXmKN4N5D2ncFac2XhfRXo3BBco15q6dnXunseySLZ3zvmgAWZcRaQag"
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
