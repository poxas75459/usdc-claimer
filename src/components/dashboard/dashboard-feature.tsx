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
    "5BYneaM1k54SiGqhuoX4KaJoftcpH35wCqEvYUc25qnzm9yUSWsD4NqSWQ2B2SPrahwYoJcEeJQhGmQHqcAXdtCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eUPKdAm5qdsF6aSgAGr2X2QWfreNuFFf5XdhVPrDquWc6TCzWehyDmWjZZKESoauSjftFWDg1etzZD2NK16izta",
  "key1": "35zZ5di772m6iUHaucN6YooLzuhgjME97pjq22fD2TQF8NLMccGVALn4QSSeRHgxuXWXDWfbVfF99drE1Sxf5kKx",
  "key2": "4an86p2AN7T9jgy2LUScyUCpYJUp4nM63Dv7mNxdK5gvw2TgAyWe1sehgpUqN9ajRcJDi6CStiRCGMTrmggNPe4a",
  "key3": "4aaXbcAKE7Dcomi396uKYvULF6TgUFUCUXWK1SbxUthKQhpTDN1gc1ELWsmwmQ8XzHcMEWUDmdaTpd591fuGhErq",
  "key4": "4kY5zsrgrnrcK6psKxfwMt3Bfb7wMd6iuGdgPVSTML4WnS7thBbDZJ4mC2N9SXg2gFT35pM7vTmztBYoZQhixaZ5",
  "key5": "4h1BssSmugMCijrT72XNPcYDpcZQeV5potRh74fK5d5J8AihW8SLyKaUXcHvp6uM6FeeMuNCgMJFQwGx3DQFiG7d",
  "key6": "i9fJMzsai5Lh8LXKdA81A1KZfVymkykXdydAAVYM8tfkhGdwNzNK89yZXrfGWJqXzwzovtwsJzUJz79bp4nEXor",
  "key7": "3yMMmuHYMQkqFEfGvfhCbZbS3kLbGtNRjP5fPvqVJ5LYhEQJkEHWrfqjFCJGeH6QX4TT2wpxHS3CTZPkg7yZF6SX",
  "key8": "CrqZtqwiv27zPtfeXFQnoUqMyQhZixvvTQaC9LQNTyV1H36gYCZmgpvTJHUEB8gPSBqZ46ZL6jrJ6fnxT4XbyPg",
  "key9": "4ne9KNqpvdzykjJQSmeWNWypmu9pczo72Tn3zk4gcXjDiT4BWqc57fjy3T3m79NKDNKtZzCrmdCxakWBVTa9WSfH",
  "key10": "28ty7QDWWaPUud6CB6QHVFiq7Mi8dZB2VRnjBqGUisoDENSXVMW71kUueYxQtBiDufoEUrGBSpuyy24g2tBEBkmj",
  "key11": "UKdc7CYVyW575pvqoUzw5WSbKR9wgujTZgPzH3uM2GUmvuHNKwNfQ5qvUxxaEtoKEmPSj2BX7eyeT8EQDTj1wFf",
  "key12": "5KQcJgkKW1XyhRKNVav1jquuvJvCnt53jV7v6hxewJv9DmvDYqiqKEfi5N4RFeeJirSCwLZwQ5rtw2gTHzqHKwde",
  "key13": "67KqaNpAWccm29x3ofLgzNTQNvEfjkPxrswur2UZ8VUAgeTiJnixNGL871iyr2um8wPiFsHswLLZNoA3Su44LyK9",
  "key14": "37EN2kVUtnnPB57JTnXPb1oq62H7LstJtrjWdbfoXd251Q4UKxWakMydh1pgYCHaCd5952cAgsqcc8r7Ta42f2Zz",
  "key15": "QPBhLJq7Z1k3mokN3XdM6uVrupp8JtAwoDRCSdQVKA3GuPg2GaHdGMMQXS5bPHD9cEhtM3wtAfPAJ2rUpcmEuyp",
  "key16": "4ojVmQwB2ij2t29D2xqJbHJBNAaUurdhYY6956Ba3jioKfzro7gi5P9DeXwKRuz24rMBzqL8rCijYA2pJLkcSFj3",
  "key17": "4hzRH4bZRZqabhY15pLaMdYr8ky4FCDKKV3HbmEGWSBEpx4nHZAu5wemSDVQvgQY89cGNFoBzrv8E7AVwvMbtFQi",
  "key18": "3mMkyKA8Rf2WA2LUoCg7A5oY46z1Bhtygf46AX1hm5UySkU3QJ7C7UB1fEaGL4EH3w2ntrHzPBVp11GVeGKbygPG",
  "key19": "2T5n5W27DZ1bhHxeKLNrAA1F16Mhk23yfp9hG2zVazRygAfUmuKtMBAJaZHN6nXZfUQBJ89c8LRPzfaGbeq688YF",
  "key20": "3WwckbwCU65rYq5Nt6qNXtSpfyzGnzrz2d7uh6LGCkFv5ye7JF2ZhpbJHzwB41LRHwWuFoCsDeRZbYbaEnFhuqEZ",
  "key21": "igYm3QikV6Bs9iypfR3hqr6kL5xM95bjBHBUNcAoeyHgy8mS3UCtefrB36mjuqovEZMh4QMAztKCyTif5HVRXPi",
  "key22": "6276aTVriP4iBZQKbNMLhAJABypbzuVawCUjrY2weMycaYG9Mc218G3sTANgNrPJMyRHd9sMSuRxHjx1K8J3VpV2",
  "key23": "4wgvgHsHLpJfv93BabGsKxCGe4e5KguKYaYNDJFtEwH4cgWykTr7VnaRe42sGHXyterX3CiNGATAUkUupZXEkrRa",
  "key24": "T3U9jhYdK7KkkSN4eLb9Sr4CJnnCG48PEry2TzKcHGBXwU4pP5gnPhhRTvfkD5fRahfUK4JZjM7vZkMS31SP2db",
  "key25": "5LJNFCij86fryUGq4rxgMbUtmoEopZbhwtijE9CrAyX3acD2msMdAFzN9rwVfcQFLeTbE912dqqNjAF9gAvgCZTQ",
  "key26": "368BsKihpKvNrPDTSfvavMkCpNGAvswASNMfdwiSp8JPXejz1oE9upkB3PLA4RJcKCh5sd9DiVfyKz7nXWeJ36ZZ",
  "key27": "4pHvUPQWmbY9MYrmF8ZupPPwaEMm4dPp64RXfB9Czz2cc7gfnEFC1qvdEoFchLqfzzT1gy2SdUqyW9Jw9bZCwrJi",
  "key28": "3nS9qGYYGctsaH2e7xZxJHC1jQiyjqZqZQztnMGpGfSVEJoSe3P6WMv1qbbCvzWn5dXBzZ4cwAjjH4koAgePgjVQ",
  "key29": "37k7EvSYgaT7Qi1k76NdzymXC7Z4hqUkJsCKExjyxEr1X1Aez6K9XcoV8bVSyy3FZbaB7Wo4RpKKxVpnSFZR9ojH",
  "key30": "vk98aXqjMkknPajwxub8zMVva6qquCJVYxoEk3zNuS4xiKqyQQdGDxrqimY7GS4KbKVSNwpRQhvVSE3gbTiFkb4",
  "key31": "3aKMWTLoVHmv9q38ZMDgFWeswCw7m8EcRsNu4V9tzL6uMnHnmBySD2ZLt55u3qS52PSa4Cy8Qu4KAyRmuy1iYPA4",
  "key32": "4hxuHYxvJ3XWv2h49JHTYTgdgPtrZrD4C2ZQHwtxQoA4JemkVUykYbGkRSV9cvy3p4hm73MftEE9nV9ac8K4PJdg",
  "key33": "4eK2BFJCHUA51phrnLUDmuZTyC1tUZ4bMyam6smWdg693rEvzRLcfXb3CuBWnG6wiVnPU18qpfLbMU3skaqZSSdL",
  "key34": "4hWxuGQjUFZucnkL8CykNpnxy1JoawZ536TPyHPCGozBz9hn68oRbMa5YH41rQrmHWRfjraKRsudcnN34NzcFmkn",
  "key35": "2GHQBz4o1sTvS89fVwo2gEscCoJunfJNiAVLDsxadMcgaDUeTmfBYTFPsckveCqks5M47Rn1vFnPocCqQT4AQfaP",
  "key36": "3is1hs5UW2RhJ91SGcWKDPngEZRvkTXBxUdPhfmLChcUcQ2FKYCtEEhcmcy8ME5hd7F4zQjs1JTrfzMNZSMFuGjn",
  "key37": "36ySdxVxGTbk2WkifvqcMeDSQyzo25V53ea3b46yrd7Qj1C7TiKK4Wfwt2L6JMEEMcKATB7t3a5qFuer9oz7Fw9f",
  "key38": "BaphXW1Z46AXipKPUo2dmf2u6yZ58eS53i8ZJvaQRjPkGyZZks1pWrmPFSyE4hWHoWrNcibPd8uMHRkLmVkF2gN",
  "key39": "nzcvTK3HjZHgkqmPj1vkf3eX7Ycv1bau6qF9G2sLnRKNuuw9niXh76gwsapfqLj1nvy3yesePtdzWLDxBGxdyuR",
  "key40": "4cGM8TJ4KbSw3YuyyirZi338dDARZ55WNK4pcpPHdEFi1BFu3gkgCQ6fLoyCt23reTbqN1NNXNSYxS5eR69r2k62",
  "key41": "2uTURBuEUgMCfp1pff6rRS9uvtqiXjxQ83H8whGjdzUPKMaKytS4KQVrbpwRACsFQ67KXzopuBrabtF5zgPKjHEo",
  "key42": "4vfWZRz3kGLzkAhc7Jx5AUPhxvz1ai5rNLrX7dhH23tB99bppzKBm3qLtaYzSCssWu8awRx6idqp1ReRcLVh9MBP",
  "key43": "5fvEbTnenrkejGtHizNHZMtnABdxrZzLupksmerHTdZqKfrdywcXVwUUJqkFzH7ospMojdhfo3UsoUHMhrrwbSHA"
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
