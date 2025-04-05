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
    "eC9Er2fy8Z44pqK6tkbtkMxCXvRwEetV7eCEfJ3dC4E4n462FUdB5uQg6nKbU5NCzfKQVz67ay4CLwGR4RsHBaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KaXFJR45s3vTCfJPyGKmyFjkhAxrQqRiQvReANkoCD5yTGwUtUAXD6enmkfCnrV35UgBVFQ3NkLywzuQC4JsDx5",
  "key1": "2uhVsQqr2TQevS2gSRb6VU7NW4HPARD7Ti5T183bLxcwnFicCTAAjNv3Q6T8fNqDFJZV7SAVtHxrSpr2p9GmzuSf",
  "key2": "3meHpfVSSzzN2owUFLjBjbCwgzU8QQXFmjcKHkvL2ZX9BgGU2rFW8YDsLPFn5uFWr333kpZeEMpsRWo4aey4RTA8",
  "key3": "5wgTf93h667fzqmGAY8sMGND4PQ7Vu9BR85jLJdRrg6JHjGydRvmK6xToJRZUCXbFCNCTVTJ65sSHsoW8DKPx9EX",
  "key4": "3cPD4m54DdpoLgLJdCgDVnJwUCKiWSgQ8xxCn7K8HJBcddrPjmj9Ryq3X3xd27Mh7SmaudaZvGUcwT1aP6qHuRwD",
  "key5": "2VhqE3GWMi9kMLLrKwdDekFpyWstpTaV5qUqh5BQYyYqkpzXfTBHJBHkohNyfkVwKd7GuUdXkSTEnYjJYnBPXnfP",
  "key6": "Cw7YDdg6rsDvFBe4mbLw6YRH6MyUGqzrifk2NYpUYFda9j7TShJjCoBmoTgNK4GABekSMYSwxBzRoZkHJEHYBWd",
  "key7": "3QndcsFLa7CFtMuhPKtYqPDAttyGQYQVxWGY9w5qivUpVXX82FWpGS1kSaWFKzE8QqJpUrsN136oQDVLxAq6x4DP",
  "key8": "JZ9opkGpAt8QYuZmG5L1c2hUs6LDVgcix392GXVea1GWF3k75qQk1xFJaUNbjSrkDGgUMLcAkg9NzU4gTS76eMx",
  "key9": "eGzkqzCteyr5BDEQmstBfj2pYg5m5qaDvVyfh2eRuwMp7sc4SsEaLu9tKKoe6jy2ZTVBQ8ptbpZUZHnEj9UjUHU",
  "key10": "2ThDyUJYk8o2cG7v4rLYS5eseCNTjG1sEG2TLk9o2ALLZQSuwubxGv9CcdPNmXfWdg4JE4oJjpDkyZTmJfqabtXs",
  "key11": "Bogmy91iLML5iWsDRRNgjfEzDRuNMXQpVWQ37sG8iEjeU7RM692qSeGtwiCFsS4zsjKKecxiaZ62zgEokEGrnXx",
  "key12": "3PFH5haxUQiHr1Yxdt3mneEe3buxpZxN4YdCv3W3nSn8ycUCuu9tFxqWXNoNVmuzLgLeh2mrMGtWyiThN7WruHEM",
  "key13": "3C7U8yQ6RNEy2FEifRWVtQAmXHhGpmKpiGhEzXZonHzeXmugazWt5CYx2VfK7KpCEcZ919uU6s6XENKogPJvPt1v",
  "key14": "3XqWz95ZVN3FrgUy7JEus8ATfZ14QxaMihezYLRP4UShZEoRY3CpgfNwyYaPpiG8CwhTP79PB8juYq11EBfeDrF9",
  "key15": "3gP4tESTTKVkbnT8vg5KroNRSaLQxygxXYoMs3J2JrUxoWKjqNaYChXkqHmD9WCiGhvj7jW3rdEzBvhVriTjTtbN",
  "key16": "3HRnJuJD1uyXsH4vVMj8x4DnS7CtEw41e51VZK6iGsruYSctqp4yHKCboYPr14HKrd1xX13d3DX8QwY9TD8XzWC7",
  "key17": "3WCcHD4AwxaLyG9fi1ArY2AZjWAPg6Ksfgn9CTFkT7DGMyMVzfKRfYKhD3GY3BxUnW4kDwMhq3hKS69uD4xqjdqM",
  "key18": "4gK3kVeN7B6a71y4usDSyY6dJVXnkzWezQSnzd9WXFEZwicz6mcm5jUEcttzg9cBe3fd1TQmVWcC56uRLdMckgKM",
  "key19": "26hyFptkSzEWgnyn9cLHBykVLamXn7r79L2fJ6jshD6z543pw7QQYu4zMvCnM2XmJxRanxWfAiyz6t5A5bn8uGoH",
  "key20": "7Eez4XKFpaWvHhV9VKtg7B1hNp6gJfNJzYLdvttVxKQMdoLkmn9NPZKGvBgFu9M9zwJeibxqkWQGDbuUvfHqDqK",
  "key21": "4ptmofVa43RyT9W5xFADUn1jPZkevCkS2wNKriiYKMcbN5oRegWVJMeRRvrdCAqyARoMZGvSJmJiRnQYhLhSP7gw",
  "key22": "LKh8ANo2j6GjiMwExfm3icwweh5Vj1zY8qNvpJVa5sGshwny6i3LWr6UymRcuSDkoYuRRJzPT7SmWiZdEQ52Kwx",
  "key23": "jeidRRubHYyKSEC9Rtm84zVSd3H2QEZUVQFPnGuh2eX3gSrgiyperj3c6EbzJXyzX1xmduoxpDzfMVqTBYf1khK",
  "key24": "2HjY59J7DtBLRbMgs6XrGTqNjnpFAzA2X8pFb3cVtFbPvuYm7DiNhT8pg5JTf1Z1VYgMZ27As7U2oPPx93Gt29d4",
  "key25": "4mBAkoip8qti6G3BrsE4LfSgpvnfaPbMreeeW5QJkwaRucCmBy2HfenTTBU964tTiLbCPN4tTQfqafeMhzhV2Vbq",
  "key26": "MPS1BeidXnyc92hNTNh6a3Rgs3jPVjUiBXjDT64esE2gouUPddKAM7ZeXNQNeyFkdqN6nXPDyyvdVV6jJJMLDh4",
  "key27": "4hse1AJfwrG3a2NSN9fYTg1fHT3ob2EEcC8rDoB2rVSrE39m7XjyaBYcNjE6yZJgxdbmuNEHxrkMa2qFqH9okYvT",
  "key28": "2Pt6xSqk24ekUyAUVKeyUPucPzADkTGDc1CGxcQk2FegNYE2x3KRnb9EXWoDKZUQr8dfEsFbG3UgPESD9CJy3kfZ",
  "key29": "2S4TLCYAdUW2kEQi8cQgcjo9f32ZowqQGxBKwwmHW6tD2cQVpwDgFo2y5fxGK7x6cW9R2z4oBGAtEtVCL6Xf5qum",
  "key30": "4JKHYx9bJsXHW6GAnkjKjsRhr2Gg9JqHwFt81qFLzpUWJD33egivKfqPLXdZLUdj6rETN1jdDHQ5BSTdjxMmzFix",
  "key31": "3p9TjDXGy38pEs8zYRBCxmg4naxA4Pvs4XCaL5ZAWC7kiF8Qz8jxzL9uBCWTXasVkic1NMFRNpTKyhMTNsWWSrnU",
  "key32": "4KiuEBKNW52hMEbV6Jhi7wX892oypRRAXDa7231scD7C63tDKkgiWwspVnz8YkFwoHL2pqckZq9Yqwzjbx9A4ydJ",
  "key33": "44z3zyN6KVvxUkzGAYq8uegsGXw6aj48Ra5oquEM6KgRM26JWC4wNdWPShk2mSW6JtKwJR8kqcqiVY7cwweC6MRh",
  "key34": "5F9TotyAom1vyJFnXrauoYSp49dvMZLpmUdrKN6S5DdAV2MJdbusq2wRcqnywSYTLqxnmP4k1yeWTrTRLSjDuV4Y",
  "key35": "2u4QbT3vheoRF1GtZN4GovrF5ngoEnpKsKopZ2mf149aNzSqnKJP1NSzKvHX1fBSTpKUqSx9iR9do7RqmZBnS5P7",
  "key36": "2ExV9pK3PoyJjMqZYp4G589U9yfBMBuoSaG8DD6nbZoFPwZTrcur2zCAgKkKjTyyvhd8Juzy1cwLsdXHHiwzmrqw",
  "key37": "5geVpvHND4emHY8KYSgXNRRp8Kf8GmVXo4227sjkj1hvbujTMRbnqRz8NCpx67DSA7GHZtBMvuNgsoyVHHsDX94m",
  "key38": "7UMBTCFQMqMj4ECafETYXgSEUHLJDPmV6SfJrNWkVhHRiNPQvRk2KyiCbo3GfXWZZf8DKtsP9qzxRSWYwtTvG98",
  "key39": "p4uKknKR7evsTeofn18QfaY2LFna8HBVZHjMxDErXNrsdXbLHp256bsxpHGpchvcNnjoRrRAZ6KSg41tpyRtoqx",
  "key40": "LQXMDZAGUcKRxQCJguVaiZRp6aV2gHB9gV5SRm6sdjduBA1N5B94B4NdvzLdsY1BALwqrHs9oiFty7RugNPJ5LH",
  "key41": "4a7ywWdDftzkqPATTCAxHpZUC1WTVwndFvPMTrk13UPAs8U8QyzQnSS1k7VVeZ9zSiajfMy5zbUVFFzCn1ZH7pXh",
  "key42": "GcYbWQgp3Y2tz9NiXj8M2YeZTdYkL3CD4foiboVvXJPSmZ1eydHmayBRVeDP8ZfgLq56e7wSBvqoJv3qh4X3R4n",
  "key43": "3g234yDToPwDwisxBDhsSJfCneXXUVBf3E8nPNcmNAgqSrtYWvnoqYrLapJ8zfrdBM7g3LHjEkPeY8jFwkMdG5hy"
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
