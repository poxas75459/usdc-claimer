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
    "5zr3qF72oFpXSe2qF2rsAR4Uz8keLf4vrg7PkLjmyZgz3VC76SqqKsKTjtphrJysgd5wytWXyy7fCoZGhq13XMCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMxLDS9aZ1dfqpwP54BDXFrFwLRU8PybRJHmLRTHkh6en5zENttRF9K4Qb8mZRviEt8AoQcSQ1DNK2kUguQhdz4",
  "key1": "DWWhguCn1TJaNagbyHew1xt1fJfa69xL3v1VcTvcjN5ZdhkwC7odbdXfp7FykiNwqnjHsuazkxpqU4jPg6KFpkA",
  "key2": "3QdR7TLmvgTo8kqq5X6xKUqkNqaPNQpXRavvbmKTCDr3CD5D8G6r5R5j7Y74Rjo3Ewvy6F5rCkHHiiLYPRzLFue7",
  "key3": "2gCk8bj9AD85pzJv5H5opzLVDP8CSuzHjK43hcMCGGJ8nqicwdWe1LzP8jujkvfmuR4CLxQzdpjknRt5E7eLq1hA",
  "key4": "PznLFGPcUD5T3NpSs32i1tNSrxHZhb1Yg2rqXGcRtGRV3ExFuDgCtfKsTyFC7ef8rAYj3SzHKGzE7Bo2q6Yc9Ev",
  "key5": "maBrpGuHQvc2N6T66oPTT5rz3tfbcfTKAqWmC7wcL2fSkTCrAnmQrpweSwm9LZKgGQEBGQnsNghwW38ARKmHGnm",
  "key6": "4C878b2Z98jf71DgV8wQtk1EnLFty9DTD6tjWpqLE3duvoYcwgDRoLKgjnuVbDhue7kLjKc25shFFTadkZjZ6dkY",
  "key7": "wVhLZU62ff28VrD4zrh8NKSGzvzw7w4FMhPbPfaTps2RJFUo7GyGD9sbsQa6PVNqJrWPD3KXY7Pzj7xo8pqzBBn",
  "key8": "2pCQouoz46A4KHA2sVbq8cfM3HZ9CE3iUw61hdT7WuHencoGtLcpRafKDYzQgmoc5dvXw9x3qbbHWrDz7JgivqpC",
  "key9": "395dXaDjD7M7QS4e5WTJ3KyXCiWrJ83f2FPS8jzUXBUjke5rDKenCj9wDX8dsf4sCpmMc6GUADQb5FsQSWmQREWF",
  "key10": "3vwCodLTqD2aadNK1xjPKp6L7gtJbLaBEgWFa1GQVHeDL5FVngULmyEFMcRyvSAXRej4EUpp4X78DUepCUtWi8ad",
  "key11": "3X9vw3Yfgv4KNMAk5itbXxoct5cEs7twyiQW23BmCcD2NiH6PTCrE8fxqKdPTm5i1ZZg6yQ9cXtwPzz2vPmGCPw6",
  "key12": "3c12uzn37WH4NedTFYBuYRYbX9pbHRCkyY75ThCLASutJoeLwsVSWL31PAVA9PN7cp1iSNFeZncyQbSEEAHnk9ob",
  "key13": "3nw9gQ54EGUod31vf1vQF22zmTK9dokPYFW54Yx9XKwKxRQB5CZNsJJWbPnL6nq9NKS5D1TxnuDjHDkbU7Gq6Spj",
  "key14": "2DwvYnp7KyVFFL65nGuyRnJRvWvEBFQx7fgYt5dbXXgnc4Mtj74ygWAVREfdHQ4tJBbJT4BPrKJmHAdSCyBHqVWK",
  "key15": "4hZto5fQ2S3GgurpXbZcTryNmemCLf3gDiWubxVK3h7gYWGXFqhCBsp8QDTiWTt4c7cLQwUVAWww67jMx2XxXDsy",
  "key16": "3UDBFEERNPNsVf9NjeZAQKdVsHcNDoCQaqtJssY7sYi5sAbDsStH9KGaM2oW1bAjo7KqLZnMVsCczFpXr75YDJWf",
  "key17": "2RBkbXstG24Ynm6zhqUe65PrxWDdruihaGqQ5pdcHZWrryZzzNyjZ8ubBGuxhLm24nNWsAmVQaCDpuPDP7MhPdXf",
  "key18": "4eq4SDqXoUvwna5ugfMBVuzSHZFGMmQaFpFun4PvwMrq6awzgqRz9ZqS9caVndk2MfKw8x3bYmmwdcUuMi3SuFYD",
  "key19": "5V2scaEaEVZ3rtiTgcnQBg4NQvFcUPRXrpPyaPXV839bw53Lutr1NAHSnGJeF7qNbPrCURMTZJndSwkLZkz3GuKS",
  "key20": "N8bUJAP4dDk23htT4phdotPVYDTWtpdUjjQ6C5m8tvcaySfCRN8DA14Ysg4UWkUjUp5ccG9SQ1ABpKVCAToHB3Z",
  "key21": "3oqR3JJDiEQutRA3qTz82vN9veagbwQ5hhCzQm8gkAqD8F3rwSpFYdhxSEbcBoo63AB4jhYpwgYpyAcWsGbmEpAX",
  "key22": "64cswFDqVvmJ7w3bfvWwkB8ftr52Z5vekZvLArSUSzPjQXLMj2sGFHCgkEX3KbRCY3uXr7ExGnYdTdQfWi8WpGc1",
  "key23": "5EP88Xn2DTdzymxyB6J39QUXWzdDGU7eoRkdxsis1YHB4CBnKHqxNmAMg92dtX6ZytH32PBTA9Re265wYUJzFyGv",
  "key24": "iwZAV4MMjzFrf4LEwpeGcTACPBcEPdUfaHLb5NgAL29sWfW63Z6oMS8zF1xFcsx93n6d9zis7xV4zFA1nrYQGHY",
  "key25": "3HJbVmPuy9DDA4W97iyvCRiZx4ADjxrQ9abmFLhoCQrbQChUD72MWHWGscgJY2LoCwWyVKCHbZfz74STRmnDxxjP",
  "key26": "4DPHQcKUGZ6Q64qty6hWaXQVKRsvmsxQU56STWMaV4rggRxnEPYe2cnqBJzcKy846EyNmywiF69atrEjmtXwMvAW",
  "key27": "4fy3jSZUGu9VKd5Hhbd36Ao6hfhDBSnTFMEbo65bzwey84Tg2QGEcTLVdiwN5MCxi5pAu7Nx3EUbXtRQMBzm2w5s",
  "key28": "4FJrQH3BxEPuPWMr8BW6ousbMEi8VPdGEeAeJ4r2VsMMhF1toCuzM5DvBu9PWYZJYs2mNWyyVYswsg4RUcteV8y5",
  "key29": "2H7oFgP6GqwuAMbC1YkXJNxwJHKyFxxNjoRRuVnAKJcwn5tsGaD99DrygtnAFNJpv9KSrZB43Z9yBnfRKRHMKDkA",
  "key30": "43auhGqtXWWY2zQeTyb7RZG4shHVSKVPqYyDyFbeAB1KuXRH3tvZLFMifPGwMdyya1xA8V3iik2pdgU6y7NNHtCe",
  "key31": "5bCefZygUu6TsHb57bCnJJe923AmUjxpskxgKncNKmig9BmSLmgxnFC8hckvuDA8Vj6gCZEsYrCkdMFhog28cKW9",
  "key32": "5c8mLUiVjgv6Am4H43p6343jSTKtNRVpTH9qsicjvRAQ8HdGboQkkDEHYz6WupzFckvKZxvS4NL5ShJLZw3R9nU2",
  "key33": "3k6NhsQeujremY8wL9XrS4EuY21XaTceeaMABZwMWQtX2ihp2hxPc8vv1Ay57sbKNF18PGGGVpeRXUoeMEB2f9bS",
  "key34": "2r7CeDp62TiTve98buHh2d39Mzj59KRYzU7c67aDJdZWFFc8cXMNwgTCXR2j4TjuKsMchvXnQXWFYJiYNdzKhx4Z",
  "key35": "SzW3omjped7ZTeHC5g3pxxNbrov5eMqqUhm7P1gRbx9r7k6pXC91w5UgcY1T7rHecJnSiNENBVePMiekuU3dkEy",
  "key36": "3bNMeCHHd2QHP676QwTWaAzdLEAuFS8hDaamtLmRxEj9xWd9114p5MFRHF1YtGUbjpAC1z4zikiuYWSuNwKnMj6P",
  "key37": "MJyrGhwo2e67VsPxnjj8WBQHQMcDtPeaPVf1Az5SPm2cUtyz2pcfeaprcQZKzv8AkMnwFNdYPH6XNrjYKXcjMgr",
  "key38": "5kQEGoyBEBRh4sdeHba15SnSZCCJDLgEBn5mLWo83d499GWfHi4xDytZ81fimsWu1DtJB1wrpdypddsTK9QTcnPd",
  "key39": "Sot4WnKXxNRNNgyPverAuxFURqDsZtsa3moAfpjV7PPY38LeRVk9G5Tg2aPngUaHPvGPaqnvfs3wEyN3ZVAyRvE",
  "key40": "533eTQWzKe7WyWCSwhKS1LYR7sZozuruAdb3beTTRkf2DyGviqrHeAzpJmxqkDuHQiLCfredd9xWuq1iGeL5K2cy",
  "key41": "4ef8f7UShcxZZwbFENWDMedkig8xDdtG74qNUPCjmghYVtovRKHAwCfz6dGyJKoFxVhcdQomDy6YodnLpZeSF7fB",
  "key42": "4bZDGhhfdzuZsGMk5AUxin2GZ7dBgUkk1eXiw5SikW1QodrwjbVQncMfcsandFJcECwKjcWLmnkjm55D8AUxdcVL",
  "key43": "LGXhrGcqRMyJn8LyX3Vy2JKrjwufY1tCYjCrHs82m3tCJhcUGvLxNutBV5uB56dkK29CUhxPStp3YvBjzYE3J7K",
  "key44": "5UPBiRuXxBxLWrYwLtPyH7kxiC4bpgDWtmhZ1yLgFQVopTjeJ9w4uefDW55HdxACL5kRC8ZhvxhwWgbQSmNg5Nf6"
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
