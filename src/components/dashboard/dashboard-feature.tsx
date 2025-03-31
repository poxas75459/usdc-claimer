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
    "4WoJc2mAddbBQDroJAWf2xQSCfmLcx1scZ5YRwzEpizegD2x4zphPBKg1mFfPQjVSD4SySDWiDRrEW1iFitFjPn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E6wZeXaAvxAXdcdxLRtQKA3kSbWoWHese9pAWiZEbWzLJ1a2q4eYQzT1GbURXfLkG1KhsMqs9SwwMmJFG8a6YEH",
  "key1": "253BdyQMvKDyRxjsqqoiwWjjPuTjsBDkFwhmzBqCDVie7pT8vWyU2UTzq3CHvkFiLmMJxNxiqcTdtGQYqyj3PpY1",
  "key2": "4kaNqho6AyXsjHpSQWcmDTQfDbsvsAjZDJGjjB9RsscCHFkVE3whzdsRo3ZcRYutwC39RSPH1hzHd6cqDNQ1XcoP",
  "key3": "21dPQoSCc1ti8Jq82hXfx1iyxzqF8ME4UtYSQnbw6L77uCWxgwbhrLXa94FfuMsYHdUsKhErmwZyQ7Mv5wP6B3NB",
  "key4": "5yoBV9at1mEACktj2RE3DFQZR4iEsoyAHE5FbtkNe4A3pGmWXNdwGUvB9rwMf9owAJDnaUFzyky3hgMYNVZp8ySU",
  "key5": "2uGbLm19d4b5qcGdKkeodFR6z5a5wH2b3XjtR3u2cS3u5BzCjjsnpsS716QXySrjuzsSzDeR7WLLzn7gHa8vXh5t",
  "key6": "5MkkHS4EnykU3HriQWYSjuFJv1r65GbeBgVUkipT5QA9L4MtvwG28BWqMptDRgDvynArgf5Z5zJ3j3epDS2cAUCY",
  "key7": "4mas5xSAqX664miz6XXVBAvWgNzeUyNBvPTP3WSNrxBzihrvFudfGRo1xfFphsthVUiuASwK7oyTJCZ97Y8YbiR8",
  "key8": "fzBPpiUWaykejbAMxia1ggWfRmTeZHnHCZfCQv4oWtMr52UUbSdckdYmem6c9C948LjPozjwfL1ZRvjepc48ygF",
  "key9": "3F36h9d2z25Cua31QKbsyitGfmHiReSfjDx9xBBQZJXDKsdaJ6p71dnfSZ63EXEWodj1GtbGr68QYt67yTAwZ33G",
  "key10": "5RPEdp26rK7GrvB6caTKVjuEmSXe6NBLjVpmXqFGu9h9SPpo6LvTF8m13L3hnv8SbArhsTczbkcp96x8z5CwDJtL",
  "key11": "32ahbYa8nEz9hByiexVY9t4nVtjgk9E3KP1PFpcHPUwWWyzJaH8nFHpnJAgVPipEATSZpzqBrWL3NE2eBP9LPSm8",
  "key12": "2udho2BY5xpCJLmoTQU7HPeYN8YdgWn2iKMmKFuSQx89suhWAbeakHc2yoDHVdbxVcqKByfUqoh3wdpuuvnjLSfJ",
  "key13": "365LLzMjYkQMNNHHQWHQKbi589mDtjRKwjSrCrJHcyJvYwinpkB9cDJ4C39YMCj4mdGhuYJTR1Rx5oAZimCedwuh",
  "key14": "jbH7sNmAkFfurCdXo6bsLDb3pEJLJRBV3yBXzSvHU3SXim19eaDmGZuvGLN5k2N9HDH5WY3J5VZfmG9C5FESSBn",
  "key15": "5iAoKS4dvfjrByTquN9NKjwgZkHtjtgpzZZAM4mrkrnQ9RjmLFNamavJGh54uDnFAN4hsYtNAAvv2xQp5PdX4JWr",
  "key16": "MZLSXa6QSpXNdNPXMbqCdE5etTJCkZy3frvMxy1mUqeHECX8UwshvVepYMymNQXVVLg19R658CW2U6Fd152XSBe",
  "key17": "3zQsed3ZfoCeqkb9w66p4TMv9ePnCpT1HQGEJFBQKoFQWo9k57dMB1gKxUKimBmYHidknzBNsbqSkLxmQ1NB5YnP",
  "key18": "3gccjhbFtMos1fBQByUqgFUqpbq3yKpcH3bbE43UCHGoFfqpTwHoY8XpD6hNmVUp6bCDC6X2jS8dhs6VN3Doh7ZW",
  "key19": "3oHwrhoenugzdr2z631ikwAhMcDQAnSPD9yBS95PADTpUGpb3zhiMUPDi9t4aAideW11Xmmi7pQxfVzGriVmNSAe",
  "key20": "2cKL9pYBfTfMXqCaH6BmKzukyNGWsqMYHtmeg8eTv8WcAjRfcrhitHdcahjNmiU55zMqNmZWUgdSG7ZzrTnqVPPM",
  "key21": "4TogxNz3QAuG1DtpCNCADdMEh3KvbCeKTMUcm3YLSYx3E7Ur2uvaafN76CBPHTguEdhVs1XrLGAQVvJXauSN16xj",
  "key22": "35D3QZ1KDsnsjAr9heXTV67UDaAfmJZmgcao4M2uZyxdLyiYbjQncGrSiVTpfPBFhLuSc6uiEM71AkKtr9HxGJ2J",
  "key23": "wuTDofzEGox1t1MeXTDyPwvvKpbkgaVdccEhGwPXdJ9xcm8wborSz41woBfTZo7f9L6Uta9FYn2NFdskjgJRtds",
  "key24": "4DCXCLym1GoJRM9fPjCEwrQ2kjaRSQBXRMXsD51LywPEjcCqkTRWxS7qPLkZ2Zmu2njhV9zZuYEW3RFB9HC6pqKw",
  "key25": "3Nm1LqugtJvFj4X9qbLxkvGStJyqhjtvFbaS58xD3Zu5WNj9T4jBStRQxkAktznmyrDski3snGp8JQPg7rGyA3Gt",
  "key26": "3Yo4HuumfBo6gBYjUZmgq49CDbsjrcPfDKVzTdZjZBjrNASBjZB2QEciUb1rZH1TwY534zLuNYh8cudeevozTgYX",
  "key27": "3gtG23EdUJ4hYGM184LYuH33NvRSsLD3FVi2HqTGptKVwtt2SMtGLptH47XfM5wS9tU29A7enmzY9UHG1VjtLrTu",
  "key28": "5E45qY8GbQiHfEb3xvFS79MYQi99mVmVPsGHVByL52XrMJtcoymjbQ7zyWHTXPuaKCe5cUQazEEsJX6aiiG8bmYw",
  "key29": "3J7gWxEyppobd7bKmW55ggm61KcYvS7i29D6oSt7LwFhQym6fWMZ7vQMxT2K1HAe7VQXBVhT2TbRhYVPSwBfgShQ",
  "key30": "ntCohd5VfU3iHSi1aGFtwVcc2UBx7Q6dWEW4YFBJvGRKmUehv1cxXNqgQtTi1mcmDRcUjKiHsKk88aSp5dd5Sdh",
  "key31": "4ESFWt81U8q8Ts2DqSEgnQpQngowHhy1RdzQLWZGWwcLT66EbxM1U3AVAzhSRhDo4vy7Xwq7cu6eYzLKVHR6zFZg",
  "key32": "5hbjaRkc65uuqsvPFkx16YL6LE8AwwdxkcakgsQVrwz7cLhyDiEaDa6P39ah1XBzvnSZMBVU3vK4UDyAt8VFxBrr",
  "key33": "3wKi2bVUg7v46xSaWhK5vghoVrSCTBhStmh7EVtFoQsyk112TsHkJLCZWQgy2jQuSh264AeejtMCmSwD1U7MYT8R",
  "key34": "NtiektuRBW7T93puYpKEC6XDeREcvnW8F4WATqy6iDNqDRLNY7tk9W3jK3pZRYcNQUN2MxfhiTXdnP4nAuXiJtf",
  "key35": "4NiwgdqzvJk8H5jghNSugzPi5TUM16hYQmbkwVH91dzS6cfMTZRvsnwSFEQzx4AZ3mKy2ufGmCA5xL7SSpsdhxfB",
  "key36": "39tzNhWNtp3FGSxTJFnTLvpGUeZMBcKowMXH9rX13EP1bG3tKrEKtzEna2GjCb2SdQJizK2stTZejGq2fbbDsZX8",
  "key37": "2Yyrbe12UtxEofy7vNeekkDZ3L17spk6LpSN4BTvrxPY158ePaWsVj8EHPVbaotCmEEnn8HSvBjV5UomZjM8diXK",
  "key38": "7ezfngpheGDibvMHDt3JYieeWUJAPnBcJrFxN4ZNaNEsbcptweZfs9kJud4DDGvnGTKpqr2psdQdagA8jHUM8qQ",
  "key39": "R4NhtKaPdvPccfg69EzLtMW3pWQ9fJPy4gGuFJfMQGnBMfrL1NqzowLpVK9pBw9Xfb6mkepcwK3EYBWJziX2tTA",
  "key40": "4Ef4aoej9AbjP9yu4EiJGbpotz9tZs8ni7NwxFp3699gKdcegLgLzDgM8deq5FnZqpotmr44SqsFVQBvvfvN15j1",
  "key41": "5BvVdAcT2KJZX2SNK5AZakmdvjZGC1CG9riaSDuqk4BwpWhYpuBh42Q8VQtPcg4Bp3mCq9vGUhgc1qEYJ7cCiAVf",
  "key42": "2gAYYbC5gcokhotciQZMR9orumhaUE5Ae7UBcsV9h2NCysv1aifN38xYQeQZKAkQyy9rFiZ4QwVqt7Tgp2arZPpq",
  "key43": "3Tmnpc3hyphmN2wHffn7L8uLtyskRFATrpEsAxdBTxgBAW23q6JER17vDJTjYRz2Te4m3uTqePzMdQsGAkj8xkD8",
  "key44": "2uNMBdondnWetNRo476msPqmE5uMnKE82zfY58u9x3DzNjuz9sXz3TEG6LqbSToMgY3M4r116LGUKM9iffYLzd76",
  "key45": "2Zk1c5xkVHELmZ4L4nG7mEQ8kQcoUzbg7xNXBrZZCNpngPWdWahKw8HUWquWoDM5dgsb9RVMRgpTykemaEMuPBqt",
  "key46": "2bzMJn8BrBy1HnwJ3FX4uN1XGc23T66Hgbmi98qfmERXAx7V7h62rHDgKFgTnNtpTWLP5utE647R7Dj8s5rbWvc3"
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
