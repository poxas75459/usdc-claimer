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
    "4Ndtw2Wmixd8rC8aHKbRdivUj2XwzwbP29NLWUo9fugD5Jah6irXHQ17yWCnLJZ9LFQ2cZsMUqvetvvpUkQWHpyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnL4vUDciZNX7ECPwMtgmG5FudaVDPLcB4TgHXHMwJrSEEiMKmER2r3zqsdYqUWQCEiGu5sXbptvgpjPCMe3o58",
  "key1": "2B8R7KQnEWdp8byqGU86CWzXSfgBuvXVrcBuLcwaJwUp2NmQgcGwGEdbNXmAATQvyVwBVwG925roFyVy142vW5LX",
  "key2": "4ktWf73L7jJyjFe7X4TMiLqt88aWr6c2xGBSrSfYLZao7dgNfU4fnZvKFd8aJiwXNJKjYr7JA6BpnhVwvPANZUa7",
  "key3": "22BtBM6rj46bVFBaZjUxDdDzCoKHTReDCvQwXeAiufgvCYMB7sLW4MMNbNstRfYLNw7FzxcEf9FnrH1UdMtzrqw8",
  "key4": "GYP44cJ4q3aGcbHcGxKJ7veH8o3UPkjdGvDvEEQuNh3NskaUobqbC4RhqmMhnQ7mrKt4TxM1PtDRQXaiVz9RHAF",
  "key5": "3F9v5arqAxNb6Tqe2MS7UztgCVNwNzw7GkK3yRV5MnnNovNnPB6bX6xhJxdbnahwAShF9pNZukvR4e9xTHh1C95J",
  "key6": "2rM9gtutF4BMuaRW9HJ9ivhMZ3742JrUPgtRqT8kRAocYfuPdT7LX4RjBpEu2VdUk4peaJtngPNbzhrmp9oYgAAJ",
  "key7": "37zLEL8Zf2Twg7EgwAa9GckCQKeV13imqwCVmzesRuVCe3f3sTMChmNdbLbc5hRf7QppN2PzH8wUrbUbozZM9LK5",
  "key8": "4Efbd5U7cydUSZQZBU8D6LNYx2XfepLcuaG3LBUjTyHGPQyzeHT6LXioG5rmLqXLLcxjiMJazj57Bkg8RZVbLGaH",
  "key9": "4DCaFY1QSD5jZstzSg45yAiPeFLiGEh75WGiP1znaVepn6mzs61a8PSomcFdwfFHSRj86t3fcM5z4z5MHxRKyxJy",
  "key10": "3DNup7Gvnoj6o2cGSwcQi2CvsmoJDPNGK7kPrmnz6fRGYE7Pvy53q42BuctCjLjSu282gHB1ederh9G9cZTKRGMx",
  "key11": "3iZMLvuwvEoPs31Byqkp1BzupLuaGvJ6KBR6VZQDpWYdMjDku5KrB8LmjjpDn5K3hAEcM75NNgaLGQcmg4cCjnQ6",
  "key12": "5iesDyhgBKBJz2f4hTKM8p8EvbXYQB4azf9HnqU6hw3SKbPtUi9HmQojBr3dQDTdK6CkUkbu5sA4oEVhz1tJ2auF",
  "key13": "23pPqagJcAdxBeNnYDoge236hFiBRPTA1ZKGfwKuqzS68LBXgtHaLT2TTg5hANF5QAKrjp7M7dCnkwwHt9pLanzV",
  "key14": "5dMB1x9j3gZsiTAiYjQ2ibHg25xNf8CCEAPnp4eoF696xFZakMj9awfyitzkKLWAV2CU2JkExjcavxedw4MEq4A5",
  "key15": "3C85NJz5YjFFE8piyehLNgDRoA8iA9GTnzGh8daiTAFvdvthT3xJ3WeYSUKbDY4Pbpgxzt1PeoRWd8V595nCjGHf",
  "key16": "2ncXkc8NQm2DKhEbYtYzQzd1mLzjqYuGy2ykUE9zp3gjSQJXrCy9ZZiz4MBgxFYUc9EUZmGM45MRvUWsmypd37nV",
  "key17": "5mqpT8ftXTG2Tjj2qpBz8RE9GHNZBSkeD2TfSZoAZ3679upw3dy5fG6M3kAhT6Ra61DLPGJYjRD9sqTtMJiH1s15",
  "key18": "gCpEdNi41wbX5kYPCUZqysn4riQFDALwznqroQtqCyb6rmidyoF1z4Mjfg3YpAxTNsfMXgnoUkbraViAGdnSn2E",
  "key19": "35M8nxT4r6e6zJvFMCxf9qVJ233E5h2Y6wNdpe88LB6p65R12xvYK3BbRXhbp1g8wCQkYDRWUpvMh3YZNRkzY6tL",
  "key20": "4SDtBE2WCt8JzrkKZ8RjwW7ep8pP7Hdqf21HKWi6VbQ9jPCrACfv9eopQDcc3u3qvtcc8zH3V7pZ9TVfFDc9LaaG",
  "key21": "2eRNYCnB4MuCWDYX8koFwVzCKb8uh7Gog2mVpVifo9jKTVT4e2NQ7dWsDWYhyy29mdazrHK3f8pV7x7niq8dCq5c",
  "key22": "4dP3Yyg1CejMYjEkmcmBmYFFSeLqShsvxeQh1DA7Uy3gxX48Dge1Des6YyTp8UkPz8JzAxQAfLw2B5kYfHy6SKsM",
  "key23": "494mJUNRqiUqwaStPcGoep62ybvkkp5EPfNtYH7BHGbo1xKdy14ygjEaqtdFfVAJvC6aC2YmUeXj47EGJcJcEa51",
  "key24": "2U7XA2dBp5eFyyV1YKBSrPNw4LEArjUfYokczTt5ag2NZZZvwrYx9KkJYRJeB9bf7Goh7UMQbuYn1AQjsgbTCMr5",
  "key25": "5JB2Zk42vPhms87r8Bq4f4dTanE2biWCPKSw9vGZkpP2vRjwNBzXnLv2jpThh1HoisuBxL3yLTvgkAzpZMChN25z",
  "key26": "5VY9WkYaNNrv29be9XoYrgYk7Rn9XVc1izTPGHCDnBgVa3qRojsNFrsRQr35h4zKecq9BijFe3Bew2QA8HdQ7CcR",
  "key27": "58czB3upqn19UjCMf63zqCvLHmpfnDLFH5EZPAthVtJUbXemFpGBuasaVKmqHGVWhKxT3PcsY12tuQKCfta8yNMP",
  "key28": "3ZrQeGLwf9zyhqWtgr5E6W1gqniKGxxBiUPhdVYoySkYcRJU6wviXU26nh8HoTtR6SCmSYwrcK1NQfJJ9twHTkEx",
  "key29": "5qUbkv1rdptcVCjfsXHygVCYJRCm8DAT7jzC4LSi96kaiTDbyKTSKbwAXGZUJiwbg3PRMnvpZukqfen5oGsN3YMg",
  "key30": "5UuMvoFwas1bKDvDZEzdJY6HX35fj1CVTVLr8LvpurHmbFDvgpoLM1G1E4ByHCxeyfiD8x1dEJcJyHwfU4oMRTpx",
  "key31": "4Fb6i9raKwBTEFTRiviMXzVcxuZihCSkmQPkiLqeRZ63QzVLfFzQ2arARbbffUbQybPV5fk7zmD1F3Phacay4AxU",
  "key32": "38v9v4kYeaSA8ZLmktrxFAi1JCCbSgTTencycyupfPUXaoGijT19rndEgVoP79SCPFnTth5qe5pF8S8gFySiNB8P",
  "key33": "2pokMQfHUeJFz2HN3Mdp298QTLB9LdQvEiV1RNcry2YHmJHzrbKAAJqqgE35axeyEd2t4tgeapPh5gdLAA9tuisn",
  "key34": "ZTQWLrrWk19XHQ4VMntbySKiDGEDvELC2NXAtgop9ySNqFHJK2FfCJn1pnGHi5fnbansCUsRt5B6eAD7pX8bRwZ",
  "key35": "4RJpbaABxnsppdHTh1bs2166WrXctkHk9PyTDQesx3RzParEfJkqM8XF1NGFRCofL5hrxRWgkXkTM9WpqbzkbkrM",
  "key36": "2ky8JAU7AiwLJZDbuJmeCAQkZ76CJMu5Srnh7Vh4okLaf7Bk7FghcbNiWbduA4QfwRQG5K7XhZ9TobkTcTmmhVTP",
  "key37": "32AA1L1QWGeZE2xgWk6gNbW8eLEyQkAbJDfmJ7NkwST5PoDS89B5U4BELdnC7YAQkLsHY2tpRvrDZyKahwBZK5D",
  "key38": "4D2AxTikA14R6U9omtnf6RhUtU6fng3CBSe6sj9LMr7XTu7etLCkY1wcHjNfRPaQZgjvvSM17VeMW883FfaDGR4Z",
  "key39": "26FPp1DYRy78LdbRPKk4GkCXxJoro5sr53mo97UZ1fJaSB3KpxJZXiV4x71iev5mFcfZ9ELfNYsxrBFQx8KZ1Du9",
  "key40": "29arwq2wqGqaLB1p7sjTDmw7b3tJcbpX9tcpLPNtPeQSkgVRSwu8nAaGD7GZiLqu5ix11vQkK2u5AikgiewJ9Hfh",
  "key41": "5LzpizYXKnKxgdTNDhQZfpkBBnVExJArXxwJDLWuFR1aRyGqdV6wGiikRCiH7Nr83aCn194zWJST6wDpxWq3GEM3",
  "key42": "5iZ6EZiRhj8y6RTcCBM9CJxE3EdVaNQgxFNggSQEmT4pGSZbmbYgMQ5quWA1TXfhjd8N46b6QAE18wa8okGgeJ9q",
  "key43": "4VbaKDVZV6UtfFhU38f8mA466nA9h6rJRHnBiKBuQahpCVVNTsxC1kB1UKBQVQJTdurg3MwtrZDPnWeMYjrWmkdZ",
  "key44": "5d1MFeBcUozmZksjFdJfNr2cpxoXYSyVtXxyhZzNsxQhSAA993gApvA5LiPwwnvmkTrMgnVeHNhKhLwxDngpwZgA",
  "key45": "SvdQqPQG5wqzCQGfawqv8xZ7nHMCb93LEDCkgQ5VQiCfnwMRV6ATZQzsuTEbM3GYXLtZHk2rgsjGkisHjCP1MWb",
  "key46": "4KRKA2cWsoFY2JbcX5MvewfhVBoczLshQgEeroFTaYoc9m2rxTDir5yZ4nfNRXCbCs6pZfwTfaVdXMbH5SBvxc5",
  "key47": "57FnpZhXzZM8k3qHUntrirng3H63fAYwnqoZafGJ3qYwxzbQ4NjRnTAFmjD94bF35khFXer1G79kEFuT81vT8nWq"
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
