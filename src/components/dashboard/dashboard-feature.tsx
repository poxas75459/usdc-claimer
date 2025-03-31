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
    "3H2rXntoRRV15vkuWt7dKrvEJDQzY3zkUxuRbQVAXkw69yoZdkvjuCs9g3QvCbHbJgdfwYTSgyAsT8Y4cSHscVrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8ofJF3qmAf4eHbDAxHjH5ewGNsxaG2qC48LE29j5zTppFi2ofNdPxZvGQMTa5fBmx2u8ZKTbczJQ6H51VcGCv1",
  "key1": "mwAUqVMsaTF2P9Ta5U9EpWGJF3KTpMKDK1mj4W9WUaLotKrPyBdVTExgNApRH2QLbzZNDn2ebEPucnsj6hkAf9h",
  "key2": "5rY9Wcrq1jTfQmuNuB4UAYNia1vE6UTQFFiqinr8cUrKvoMGc4oG3aEm1n7rtHnwEt9VcwEFsXVC29zAqmg2LtUv",
  "key3": "574n3oL8SazAqAtkZfR3bfNiawLYB3eMLjws5onXrQWbUw4z431qNVS2d4iVpb8ZEGY6jEfrrRfGVA7Gexaqsuhp",
  "key4": "3UYZGB8BGUt6agfvUB5wxmyuUazAeSFPcFumCb4GkDmYVn795US9SADBgy8bk9cTqwMdw8rSUHE3qj5PYYcmMbMh",
  "key5": "3uBqLyKeV7WBdQ4meMTSNJXy2eRbp1A5cC2AJWyyckBug6RUUJcWsRUpaTkN7Nk1nmE9ZF3ujV188HAVq1rerwDm",
  "key6": "5tg9JQwB19KiC88a6XBBXN2FjSZcofczxWcfNTpZJZqVAKGTgZethQq8LsyKfCujxgppPFbxwb4ns2U9AZ7BfVBX",
  "key7": "5DZchFUoqSWdhzhMnPrwHosfnbJKcirwbffHhHkhfCGFzw4PeT91My2dNWoDHvYC7opoZfN8t8QFfyS58HD6t3yH",
  "key8": "5ybuJrwdFmfHkXEPmHfmPpjDTTJi6BdgoPvsvXPjkRbNMd3SBWyL5qCkaCQXw5Ezae1CMEfKK9i44nvXm22aUVAE",
  "key9": "2nNmuAK2k9bQMqecNz6bF2u4kSaMt5egfevzHTL2bmEkF9aS14JiN7DektweaskYSV3Ndw546iXuNpKthjRwHyhA",
  "key10": "42KMjxuyoBYYgYEvGNGNAApjRf1AHHfAjgte3RmPNS5CjqNDfPFJW1zscnfrjGdeudKA8xfTnkPgeu1Xf59H65cF",
  "key11": "oPapHCnVtky3x9jJGkBJx9tLxHQdv3jFid1NpgiKvf6yoEGrPr7EwAQKndLC86f8edKeERzoHSGCBPnpahVhwR2",
  "key12": "3ATaCJUbKXFjvijZ2vqttXLTYeUfXBoJHqwPeHtwn8hWMqB8vZ4W7RqqEGTt4efcbhbqQr2djDjgBBP4oUTWTCsG",
  "key13": "2cvQEcCkt1wLWCugRzHa54h9eDECM6ffdNHJF9X63iVKfxBNbjTGqbYtZaocbSJzHbkAm85ZTpdm5aUowRwA89EM",
  "key14": "5hNQdyX6T9RaDttGzmtRqUTAcibqGyAmfz29PUrZzU8xLhZxUDNf1M9s7qJKR4yAD91jFA4aBryVR3AhaTHLfSch",
  "key15": "2tYmYCSMv9ZhU9piUkYjjeXB3wt8m3RUjsv9dTdzHQpQM9ccUB9L4GyDymQD84PvRyzLSK2SCNi8EtcXzMD6EGKx",
  "key16": "5HqWjD78ZexsCafHXh2AffVEaKWVBxvJbaGqZNhW7tRnP2EeRDV3tT99gTEqnQsQQMFopZEkUvjxsEboaqRwC4FB",
  "key17": "3porFn1tct8X8DTRLaVoy9rhdJCDg7hgxzSg2qVbCMN5DyD94o21tUaicMDC5nWpkRxHaNPNh31noAFzMVwfYzqL",
  "key18": "63HQRwGFSCxZocBddwzMMginjUkFBgtYjVF5XKDUwPr2PoJWjCsZampFVJ22ZFu8hTVrBgcneax7KFKRgbDqXwvb",
  "key19": "3wRnHUifyhJhmWG2zgZg9QQWRKw7BGW8oYsutAKmrbepUPypGbM6Jb33FjL1ikjxmbRmU6rDgzCnjQwWgETZe3Th",
  "key20": "5EX4CovTwEcwgRNBDigEgHQiDZyVFANVq9NjemASwpmjzQNhnem9snawY8fMLHE4PW454nChAJpwiQMqHE1xn2SA",
  "key21": "4Yd2YPM14ZyrZ5kN7W74ey1aTxGzW9j3SMq1zV6Xen1nxw5Jsp7G1xVXYgJ14ydwi2FLDJRFbWJwSxBq4zhTQz7G",
  "key22": "4ZV2hdPbRTjoC9kHcVVmA7N5w8ahEFnYfGQDYmEtRpWoZmFEDv6XZiyTHyWosjTZw5ge7eP8iw1bjnEaob45Zmgi",
  "key23": "3ESCFvGv7tqri8Q1PjdCYBTSPuYLjjLdpcck4FnSugCb1JtRdu8G3WJGQmyMCZRkFjmbTBX1Z9hzDEgPmiRrhowm",
  "key24": "5eMKuvSupAf5XTTT4g7r9W9CcroWQHinNNAURweUgD9J4UWCSMbV51QiiSzPJfzC6ZZJLjELKd5QxuLepEd89SJh",
  "key25": "2XoZchL5t4qsLaazKPY2Wo5GauhBm3F6wptcVviUnKpCN1k3Pby5jkyMsDnuYh2chRigLK2zeDzwPNYjK7DTSLqk",
  "key26": "3V4BAgUZNmHBij8e3j21hogMjKS5dGovCBwyHLbigL2o8LykrU1Czk2rGi8KAvCsDiRUuzxeZwejYX5CPSRsBFdU",
  "key27": "QCE8fQ6LQevWnRf7AobhkiKH6ZcovAZNKYSeRHsymBJKMeihhcDR7HNsr7k9yQ4yrApYhDeUeVeq3vigowFrvJU",
  "key28": "4yCarm6zpuf12kvC7SCjg9nfaqACVCUnhGffsFUiTcy5awEeitmrZcpSUQ6Q1JZnX97EnTMoDBWzBWb8VvcQ7Do3",
  "key29": "3bQUz88jBQrtCEDbsi7zrVct5SJgUqTvb4UduoAoHTVnizjsm7XPNyBeRQxDuEMdNfw2auUaKcJpjrJfdvTEPB9b",
  "key30": "5eVLiSBu6p3P5pKbxYMZ1LztQGqSoDd8fk5uHmDCDacjAnKwUSX7MCFvCqPgnqEQdvZXvpwyvuWdQqnPN1h1gB6m",
  "key31": "58MWQKGAoxZJ9vydygLz17qHtdQT61F3xNf5ghtNRdJqdxnhk7Ks1V3z33siggMGfb3uPzJkoMmAgbcs1bycqLGy",
  "key32": "4tCtwDMZKEpGueeTUumyqvubWHpx7v6hQ9Lnee5ZLiAkkvbyq1hEoi3ViMY72aReLBETsMX3w3Zrd2qdik6R2UfR",
  "key33": "2npYiRuGEJKMCygJgsnT84xUWXTXMqmyh118uiKRYVHwZ6eVhiUeyfi15VKAiaf9ZSWRBq15QYNo36SAqfir3s7A",
  "key34": "3svKSGY6kmeQhQ3JGeKoKiJdAAVTocJMHQRgPMMGhqgD6QK7HgYhmhPJGAcMJjTYTjqNz4vt5W9BSoc2uMWNVyL4",
  "key35": "kngDRUqezJ3sZTLMUwcbhPSe4JUbt8qmyFDNtXquByG2vCZTd39ggUV4K9tpyNKCXwxBw2HxABcFwyGXrQ9mSaB",
  "key36": "2yTnNdnU9dNkzX1KLuebL2cX41eHDQXpyFU2eJo2YqAtABzKq45izX1mJbBqSxrsEDaLQrnjwHJkEhsQC9MEKeyi",
  "key37": "4TFGqsHWBaNkn7hpCoC1k9Zv72EkppC1ivQYhcbMd3JH6CA9rZj8Ew4Sk133YofkypXji7Z2gXjDrg8bap5CzE3M",
  "key38": "5542MJ7rUwCFpPejJBrRcSjrzd2sosXxRpBeixDd6VFKpvpZMjgpXx342frMA5XTuAjeuZHKUP7BppnzihsgTQrb",
  "key39": "4pw4QqyaWUXsr3YPNVG4DqiLZR8icfzwt1RmtKSQc9VSB9YTTcsjsGXwA5ZY7e2iYXEG2BWdkGGhFCV18kXvoSdi",
  "key40": "2UAHGTiNcAyPYtAmDFnRvbFGaUqBgPjucnCdzWw8n9tr6GuMXAv48shevfsgi8BSH7g2rAGfSNhPLscZhhoLgF3X",
  "key41": "2C1Yo3ZR7Fcwi5R8g3sDf4WnqBgGLu3E7YjzrbtusDeSDYBEq2MMGxeX4SJ9cFJJZQnfrEvHLWpD8RUbQmgvzAyu",
  "key42": "2KSFczQAgemdHzQz8Km9S1qauB2UULibYg2NzmyGGs9LbBfk7jSAQbR86snukDruiQ2yUbnoa3NfGMmt57QCXw47",
  "key43": "55sq4NsghzuAxfbsQwf5k4UobEDjAxhrSAp1Ny1xF5K2fLQnSiMt4LidgPyCiBpqcQH45TrskzFr5he3GoeEtzbR",
  "key44": "GLsFxzbLftzvJpfHBm69SA1SYg6ZQXwSV8TUGsarfnV2Q1GuSu6sHtrMUvQoFfzJY93PFgSSKvPSKr92ZsQN7jt"
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
