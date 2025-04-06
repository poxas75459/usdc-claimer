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
    "4xSJbJgnjbBym8TLhzVUPNjxo3t6Ax7sQEqJJSm7jnCE34uutVzcQ24quRWpRsv9HhzUDzxu2QcVnaG8y38yYbcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvnLjR8oSU7HzpXgnadVckyhAVxbhMqLKyHgAmSYK5UjZKcnXRGGoTokt5bjG3ViG4cFLPfHh3gh2uazAQ7x9zs",
  "key1": "6oVmbA3sAwDEpFhpoEqvJsdGWAPapevHi6RXypsoPjKEddMc8jR9Mnw5z57Mei4qYAFPYgnSMG6LmadSfbK61Pb",
  "key2": "4gWxwoR4BbZGpL7ASNwpqR3KpN9iQj39zJXqHoLhLEp8khXWXh1oCVqLeebmqzNbmMEQASQvepZ2cVLB6xpF2naY",
  "key3": "3E2uYPoQWtG5EaPLj2EaDSDApFqV4FJDJYpc3dmoXKsqwAiBxqpDo7paScWA2bc2A48LkwZxYAwuecgUos2EkhXx",
  "key4": "3MwNJamTRnabbQhTrngA78eetPtQnysK75oNFNYKRJfwRdBfpxst583G21Mui8D2AQvChoJHouX7qEmfYDX4PqHq",
  "key5": "2A7SrR8PcYUHCMkRpShucRj7iiE35VVWyaVK2jVPV17TXsaU1h63RZbFbK3e7r9cqCHm1gFGVy4JJ4HHrjVztZ87",
  "key6": "4vCtDPZXwYcJRPQ6rDGLjL8KwZseJfsnHwNEmuKZT8xG8Gk8Z8ERGVkcet9jLChkHBfVZ3V4qsYYNue8fE4v5Aao",
  "key7": "2nxLTx3REzfAJyX66obB8GUGZgUyZMVhetUynQYNExPQ5jMdoG5nAhc8i8qeftmyxLYAp6bskogQnyrNCJWMFhcR",
  "key8": "2KhXaAg2ESs57FwaV1eod5BEZrUbnpoEjJQMHNyBffy8Aeijs6tTjmsRPapbHoYiJJN2VUpvQrgr6y7St5ysSPd9",
  "key9": "YAPQaoSsEgtZdR97jgTQTj2ktNwZi818KTxEgjA2kKeZsgS9yFqXWwfYtAVDZWrozq41H78zbYbuN3ZdJ6zSzxe",
  "key10": "3QRnKNtXMFiK7YZQ5TvTzb6qULopC5geXDKZG6Q8obfAHEbiHPQ3Af8Q9JpyeYEoPGqht7DsNwAdnJjXed28MJDZ",
  "key11": "3zMj6P4vPTYX4UuUDQdBqoQJtqnRgXFib4wuaxpx2VkhfcrHTY68jFxcw7E95uPb2WchQgrEs9rjV6wRoDfG4CAy",
  "key12": "5eDN96G2bMqK2w4frm5TdEn5NmbemEDKBBtZUuT6T6U5FEGrJAu5tFMwRA3p9SCJe9rRL5NiW7EFvZTkgUahgqR5",
  "key13": "5iKNrifPv6zgNDJMQX438QWCTmrSK7L7mAkhCRTthQL57WMNAfJ3MfqFvg6j3SUsNgBKihzCjJaf6AQYaX6nQ2iu",
  "key14": "3QUqGrVMjYC2Gnm5sGpNZsMtYpXyNnBtWQ4ipz6m5VUMCmJE8earaT1nxmi9DHDDPr6SV65metgNKM5rZML7UQbe",
  "key15": "3fgK4Gk3gU6XRBY8oymEz6PsZB5wNKpbHgCPAwF6QS8ZSnLbVuA4frxFbSoQNmzdPhTzNPSqqV4xWGxMu3KhxN4t",
  "key16": "3aHEMB8LktmUcmdUrQLSMkjbK95SyvBwuCp9wdv36Ns6aBxbzvobBAvbRdiVqt1nMvPd6oYoSg54HKBfybH5vNGj",
  "key17": "4QuS3pnGRN6u2T63JxVWDxXUsgmJHUqPH69jEkLyGC1JBgMJbCL5974CkgUQUNJp6Z2FvyB1ukt5U1M8LiMK19Hm",
  "key18": "5YbSJy9FndFi8gizTY7cqicfHsrVPku91Fjxr729EevearQ1HQ3frcNDiWxwqe6RzheDjde2it3wTdVLTtYq9nBg",
  "key19": "5y9fqFUMzCzbaNDQde3JgjrhdMcWqG7adeXeqQr8Tkx7xVeuMuYCeBWtQrfBHgWdNDpEJD2qftEymRhDCjG1i9nw",
  "key20": "4T6V9MKtEiDM5q6P6QbdFsqqPWjreViVie6d8ttXV8SPT41ZHUm9F84zrUaYGUz6sgeXKMTF62pbbK7iu46iCWu5",
  "key21": "2iZUoiELJm2d9bffyzRGXvhh4aYJyre4ujxe2gxiucGEx65ARuUKsu6W45PNZPDfCkjyYM661KNLnbdcV5emtKng",
  "key22": "3fQpGboYNoXU51pQZA6Vu8bEmTCg7c3T6H8v2HuUnNtRfrsJMU9HNUay6oLX3XHNkVCEJyUpTxDLL28Pg4ikFfQ1",
  "key23": "RDSsCGXA3hgJcEX4a2DzXsaN1ufH8TGKRTt7THFMduuJXiz7h1KWz8sYv8aamTUKvBvzaRfGTQyZiwtHYhKyPFB",
  "key24": "2D85Pzf1fzCehRzKx6GaGLAKnbGacibP6dccJN316CVXgNzLxvD5m6CaueQiWstbpD8GBx8cxviLV2zcTYZ8gFaL",
  "key25": "4z5SH2frA22CyWbktxd7EMsHApetdLdZj7oPJvPuXdRDgryuJgBXkwouf46iUbhizS9Xw6DhdTsiLhV123JDbgVL",
  "key26": "3zveSN4WhtCuPtW1qpqVfbBhW3hZZsEYxQLsqKxRJiu5PyjrC75bDwMvpSX2PHKngLXaWy4ZVZmPDYgoMxwTNsvU",
  "key27": "4FSF35MdfSKBwygohweYCjzDWxvpCtFj8EkH86mmFirjPQnQFz6ZhMD4gtRMEZ1PURxj1G2KddvM2iyviRyk3LWa",
  "key28": "3d9RdqhNDS6hRCNYLHg6vzcNA9qcWGrGonZvacAQRpj2egz28SR5HZxkGJNbHJnRZW8r8sKtx2EMHmbLJjMmrcFp",
  "key29": "36ewSU7MVqmohjGKckK2w1jwQ1mgKYvvDMUnty2Z5MKK8KKQjerEu8msvk4DxR5SGdS7zZKNifaXgR9XSQEH8cBi",
  "key30": "38iWdCCDsPerRYAs1Nz9naA7dNrno8PXhUvTiGCLnP8EVXiNuBt7Vqenwzpw7VaogtGENA2kyGDSWHrEQ54rvSGh",
  "key31": "3ApHZTREuk6Abhxot6Dkcpcty1U5TrA6Hrz8cab3dE7W8CUV2XKHxJsGUKTJVfmUdgbsVzhUsbY5J3GqWHJvM1M9",
  "key32": "574SDvtVL4Xpe4GF1VAjcWbmMVmZ3FemrnukFYpGyLHc1eZfSPnfRr3ss8VT9G6BE1NSEeamwBXNFGduQYg4ipyo",
  "key33": "5qrnfEA9zxTmPgckZ87erG66BE6BdVngpy1mVyeQ93TF1daWC41J7ojvfmVgnM8yt31kAb3USawBUXszcxj1JySo",
  "key34": "4tbkNBnTdcWjX9VmyLBc4SZSxeNGvEQmPrFfcs2kdv8GUXVCtVANvUrnPkXiHnRKdCE7CJzWqR6qK2tTVETWwcJr",
  "key35": "c7JEVzjBwQMUbkE9ZDf6L1vgnsYm6gcYQwQrrTHFHsZQdSmDfCM6ghhKihsUZa9cjdTh5kRBmtRUM1KX5tsW8eR",
  "key36": "3B4onA8tZan6KGe3J5dn8T1PoKitNt1VDRnYwUPtyQNSHinWMQCewfafHRH7Y5jQKjhwEZfv6QkM6habTYSabrJY",
  "key37": "3UBQkayqEUwPpRffFWWcmiqthDZAwsk4QjzyzRxX6cyfMBiyBLd9e5shCgqEQU624UgiskzfhxKtgKFJL3da5Mzj",
  "key38": "of2H595ff9D8bGGgLdteVekF1kH8uXg4kyN2VQzR184aPgRcmyypcr7MqMBcTx4TNoQicmJ9Gx6MKgoNDVBUhRP",
  "key39": "2BNTaQZTjYx3LZQ4X48UdFBTb1y4hLJtspKDCkEmuKF2mazDNusqqvdCC4YnSwcp6XGwwrS8ZJbZJLE1731aDP4W",
  "key40": "3SoTLBJnQbz3JH9pZ78k43r7hDYhMMNoFvYYDpuayroaMpyfs5adFWUJccau3T49fZhRZsRSxhQ1WzXPVdpqL24t",
  "key41": "x7wmyHDsPoJUWGpPJeAN7N6eZPJawU4eUi3PWFGKELwKSi1S3xFAQj2toU7jTNL73dkunu22ekmS6Ku9uqUrrpq",
  "key42": "566n3KY1apqwvgZ7ghQUfpZ8e86F3aw1TWTb3NV8LRQvYtjFM2zr7fD6t54SA8eHt63LGy7ABbrYFSdWNQNpEexv",
  "key43": "4fMBH3amghKKkw79w96WUcxcapN5KJzmqTzoQ72pkShN8mwgYKpb4UK2U2worPZ7Gz8H462YCYNXyNeYekDuLJgz",
  "key44": "KReGfBw5KdbarDE3kZiVJ9SVqBWu9JuiaBAh5kQ82JR5uQH3KfC5D68y1md2vTX4JMXWq3yGfkbnJF2pWEjGiPA",
  "key45": "4xWupuJtUSEud8VmzfCa4MCHWbjsZPqTtLG1qGVbFdMXZ1Q62Gq1nWauf74LQZc5hMoxwApW35eT3xUoCpqxnDk6",
  "key46": "K7L8FVF1Q75fPAkR8YcoVSPnnumnQtMmt6mhoN8DGhstBCruAfpXL25Bpie9NapBFdYg4ua16QfsWFwzvva7BcC",
  "key47": "2oX6pjV4Z5rDnKWc2DssD4BVB4zGGqvY52syVCmaCwG6f1r6EYQgWF37amsgNN6tkR3VnCBvFSaCzokSkBEcmzwX"
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
