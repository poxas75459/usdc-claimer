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
    "3HPmVPG8SUSSCiEuTB2SjvGVy2ToaeM6HWQnvwkNycQMTqQKsUjkDs5W3pVT2qgY2UFfyftnKWiNhLnXWhN3TtYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UDJKtus8JqQ253AxMTreriEEdjq3oak2BiW6KD7vrm4ESKk9wbmdhs1t9PP3CE7Qyi2RbDpRMqkEe2GidSPzpJ",
  "key1": "bnshbcfQ5eFajP3At7uJHKoTmPCAxbVidyDGo983wKXVBLswNdiu7ez1fqGofJRsnuRUTSkSTMucuNNKt6AuWV6",
  "key2": "4ysT5UA8uHZxSLRRzzRarYfnnLFfpnZM68f5yonZkge7NznqHwYAwuWVU119PF94p5g2pWiQEmiiKU6A4GQHsmeM",
  "key3": "5FHg9ZzxHoHopAnZjvyqzJTvjzZePzri1bJeBi1bNGCtiaGY33nKSgCmzNB6FmwwehYTJArXRkJtrf4u5xZyeT5k",
  "key4": "5qQ1VDuHGN4uRnCr2ZgFovssgXheFWwtZKjiU9QHaZL92fZaBPidjqYm9SsCBPaEMGg53xeZdCWdT8dtv1BsH2Wr",
  "key5": "j54QtEw6FWw6EXMrnBhdETRgyXqbkHXrYcjZytXrbWujYLCpAP3FQKxj5YeskGoh9RGEu5Htdo2HWiezuRFeZXu",
  "key6": "3M5KCyPDHszw15wbbno5MNf7HRcJnxdgasuXCMCVN54JLYQEFavqrqtsWmhnqb711JnNamkqm1NMnWtWSrnU2c3G",
  "key7": "4MQqn7WzC6m142Uin33QT1ZfAri8AVkgmwSidwuvwUG8HRtvwZaeSMqAeJLd9dBXLWAYz2BPotCtY4k3zcDU3EJ8",
  "key8": "HktMVw3Vhfs3JNqWt1qBeQbedDZZGqxAqeDEXWxHYAKgXGv9o4JpFdA1qixT1h6xRdQceyGGdXyfiy5ahzDmJTq",
  "key9": "4AHnGik7KsiJxZg5wcjsnA6MGvvRfjSy2YUvShD1dkGztXZLxqiVtsQ9dHEzvK1n9GZTmis52yPX8XZc1cErNE6k",
  "key10": "4b1uCun9WkqYhNPtoUFdDFnQw7gtBH7hm3M8bBiABgeebAYAPuVrUa1Zj89776BeaWJJynkVnkZwT6ox5Kci1j1E",
  "key11": "EjbuKkB1PG3bEaxMwFpA7dHYLfauMXw9HxhvDAuNVsb5HkSgXZPnhyS3S1P8fFpkgbwBnF8ULzdTBviC7RTaAdQ",
  "key12": "3fLQu2bTWRqu4m7qcxzE8qXJntgvaPYpuaKCbhq4AKPFoUGcQvLCFxVxgdyRyyB723i1i4zENV83DLeJn7nr5BmC",
  "key13": "2eXVhqzUhut7cd13tBrz3swTEgCT9Km4mh87kZ3uwqGbMm8nkybHtNFDp9dfAwfRuTDVFBsproskpz2DBNcripco",
  "key14": "4tyFwpxWCBSGeMvCKA3RPGQLG21nkfMqELVM1iC6r3kmBBAHYeWcj4NQoCHn8LiFjRHsCUryn8dngr8Jw4XQJWqz",
  "key15": "Z1jD4JBNR7HbHhe92niKAit8gtRdcE3iMnLVo9gmLB7p9ZarkhqNSXQoBbkWu9MbFHqjTV6GhdHXLrTX5XtTyPt",
  "key16": "uEBtbqJBLPXHyxaXrHDMBYM3rMcErR1LqNhgqoTcVgiP8jCvF3LycqNNg4NUw4rc4cGs5cwMZWDepk9w8Es8wk1",
  "key17": "X4452n94oszY3U32hxqTK8cgoVSrJJHh3wzS5eCEaEGmDZTRZ5BtRhLPapXcNbEe7Wn2Xhqs2XxmznD75EncxRd",
  "key18": "61WJtWgHBnUnmE7ZH8SKD5tz68SPn75w77gcnvP2EtZCxnsxqUdLoWn2N1U3BQfK7jzbqVxBJj4vu5Vo9Kno9mGE",
  "key19": "3AxwtsYTNXByrkrJs8s8LJudonqrMNuLYzZr6X52X6xAbbFXqpuDrwN3GkYmz5udzVeVFV1w27zSVwgXMmahuq1p",
  "key20": "2aC3SoyFEpK2By36FJBAjHnuAh8F8bb2mSxKVmx48XudMMEpKijJPjRoxASgjTjFoRcEqpZyUrJ7x6ZqtMMcnmsj",
  "key21": "5yXvaBwiQMycvstzNjc5t9gLwU6V8Wv3rwe4nsxvSdue5sA4zpXK1nimXZ5ziPjQHtAqDWNaW3uRquChVG7myYuo",
  "key22": "32mk3d124XoaA93w6h9eKpKnoiirY98zRuVHeKPCryNbNB8vhFLggarRNrTBXpR6UNvnq7DToShayULbMSU9JGkt",
  "key23": "3kV5paDvRpN9Wim2AsjBvYUxCAifyeZyiSwp4X5fPxvP5YiNL81Bqp2Vn6G6JQGYciKHvVLzAgqRosVDz9ZxTmL3",
  "key24": "3Mz9ZfDUmLPq28rNUhtCv842xQgyv1R98xtacgR657pWjrdXh7n3syZffximpUmA4uUtBPEdDEGBZpWMv3uud5sd",
  "key25": "23rz5pz7QhgNBGWavsZ99Tw1gLxgvwYtgVcbHu3idwuZcNK16uWqzudpmBxiS94w4U5v6hdUcTDMJz2kiai7StPo",
  "key26": "3CTLJomwVijf4VbpuwEsjDLed88ZSZa1vpWe8GeT99ADbgZgq4kaCMX1QWL6411DrWpXKJqz9AxQhWXx4E8sEbZh",
  "key27": "3L5SKfZNUwVtfhgvuxQiY46ipf2Y2kVJ2o7qS2LbXnC5AGLH6KD9o4NraayrfLJYPjqzKQmBGfaoCS3KTiPcUxVF",
  "key28": "judmzsiZvde8tJ3xrVJ5uiVWnJrTeREsi2SSH1WfqvscVfDXJgojCp61sMGpB2cGXg2PpktN2JtPYL6NeP3qNcX",
  "key29": "3aJ9uYpeKD7wsRkzkQqA4t9VNqi3HKUAqDNvRFS7jweEoH9WrSxCRMSk5oMsbdaNnkHzY6WgrAgLieacnnAidHua",
  "key30": "5vhnXJEjPu46VfFvqHxR2W7zGGF8Hqc6W98f5hbAZckjFEumFtBqi9PYHeBuB87Aigb1fsBay7ZR4gYXC3AKXiwb",
  "key31": "3mdXmjrfdmyi4ij56fyUo1KPeC8GQKGff9Fv8DrpJ74pLGfPaMvPmBb36T8FYrTdJhzhNxc8W339JomaGkibVdjJ",
  "key32": "5cRRqVTJREFV2tmZqz4PFCpzDY6PLi67wMU8qgbnY4wSBdrdfChDvbnadQDuFbHizJ8xMADs1GnyQN4dYYJ3rJ8f",
  "key33": "2kohM8ZZdDz3Dw6QkKZe7GKkPtUjW2NoNcVn495diC9N1SDiXkdkvu5kXdPx2Mjd5imw9wVKBRKgZ42RDjxtmNES",
  "key34": "A3YYro9FNEshdneyeTTMcFGM2oroJJXXxwqKaCcFMasdEbV1C9DrQVBxq4DaDjRxWSMfdRc8MENvDvzjC54Adtr",
  "key35": "3v9Y4cz7tV5xWRE8qahqVMczcyWgDmn9eoxZzEo1b47fWqgFQ1GpYRHbqBA8qt8LLJSaBWpLppBt3ruRbjAyyMcw",
  "key36": "4144FLuoqo74MMdavp3xCqi9toDr4AgbiPXixwpcB6rFg6xKkVa2vetmaFubsjPLvoNrn5vGceSQnushcm9WxvTJ",
  "key37": "5c95UYS5Enb1TMbLG1x7UYt4bZeA2ixyF1en9HvbkzbNcmBSyXcu4ovAAmJqJTx2XzJJr7evL7nqDynBQMRrngnN",
  "key38": "5PntodXZA5W64nyz7CAUSe3nNhwZmFKsvz4h3cGCXwGvPfUz93jC7GJ6WfZEKGeRdG2zfn7jH1PBssnW5qMBjfi1",
  "key39": "3Po3YJaysU6vMbeviLAbDY6fi3Np2jcAe3nBrXFUoCjN83qdPc1yNw5KKrjiqEEjPraVcTjtn7pCspS9n96QFXzG",
  "key40": "mM5NDSzqXzipYmUhFeLipQBrdnCDDxr3uganq1rDzRtKvJYg4eHjq17fgeKWyXwGZuPM6piEajx3VzQiuy2ybP4",
  "key41": "4Ag2vPhMCDcUQozjjmC7Caan8xaBa1H3NkxbNeyWhw9JWXx9y1BoyKyMDgafdNBKvwavdn9yUUesdkMsmUfxyMbZ",
  "key42": "2izGRSfUwKff4T8u9ogzRuyGH8QrssJqQsdpYzp22ehdY7DK9gVaKMFJHQrq7aAeVDKvme48EQ163vwRtkHnhzk9",
  "key43": "2rThF9j2cRyLGX9d4gUJ7eDzeGyCnuGuq4x6w6QhSQSM6Cnm5ABN3KbUPyTgMbkAMxgA5qPAozVKJropzN1qgp2A",
  "key44": "5VEJsWifneDPZ6d2BdkVMCpWQCaDwxLv9kAfh54zrVPzq7Hbw9gUiUcTSrjRX4ib1oe97RvNpxTAsUJ9jjnae6YJ",
  "key45": "2gTXB6Ase7DyAmCsUMR7Hxn67wHzJdpAi63pFd7xJ2s1x2oWGwzTngjxGrcXhWcPWFbyQSDwDWGGzux2Vrk7m4MW",
  "key46": "5fBtcSMBJYcxLwy36k7AFy19BeWGY1w2b9gXS64WTx5ZMNbwVnqvnuE88zrnbrBnMqychzwTHyzfTWrrwXUjL8JQ",
  "key47": "55nEsEZX2AFnxBUNx5v4khkpmNSBgEETnAXGufb2P3djDVRxmnj6RpkQNko7vLfFjoXbPMBKQtauzNkEkBwUF11",
  "key48": "4SDu5qxTAqNzFTwRcU5gt4rUwiK2UDWxDg1aMoWBZEbehsUUNgdVuyFDeTL44Rjr7PpeXDmJzJBjnbtNUzHtexXN"
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
