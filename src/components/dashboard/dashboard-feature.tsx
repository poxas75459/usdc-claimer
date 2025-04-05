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
    "5VreyeLP2gxvdDmJod2J8hNNfMG5dnqx3trpoEJXEAonJkKZJv8WW8ZsYa6cQi6GVQiJw7Mgq3aRKf6RnzpZTPJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGkq69r7uoYgtaaA7uTxkbcdKPFQYsaUw9YV9WrSibNkfSENDpG1DuLjpjYcUdpZEZr4dw3EhTS8UtdbNt82tuA",
  "key1": "5ydD2T3k5Byp3XAJA7U2kjvNDCCcwLRsWTirrXpR4sjKFCxCan4g1k9X8fnPQWUrkSaUAHJkCxTJ5ZR5cxvdeAgE",
  "key2": "3ncA7jBitDB2sRmQvXeb3r3evcLcNAYVg5kZYYg4grtdoLsxbGehnDh3Cq77RFHBDrhEM5iZAvottGanJv9Ekr7H",
  "key3": "2otm3eJZ716c6AoKeD3spoLeRbYeD13qfuHzxHa677ZM4fPaVHGCXtyMqUjCufpV31km86fFy21ziHW4Xyirkh3n",
  "key4": "4whLNDmNRWkqap1JU5Eb3dV426dRgU26ysxqLNJk7ha4JXkXRRUaKDDgTXh7petfoScFeBaRkL4zQ6ioohPPB5qs",
  "key5": "2MYDh1CCGwQxKP7kEkYajQQfPM6ZKj7WPiAkBek1uBXHFPBiuqPg9qvsSTaKcErDDBwjcHtKppqfD5ZAoh3dnjmN",
  "key6": "3EPpgc9PaUfcmGvh66hZRYFNcvA9WTVgnqBXTrN1Wfy5UfyrpWzDtMPEFPeE5b8zYR2jYGFYYPmqFs8uWc4Kpeqn",
  "key7": "3P7cgGgW2AJh5yiqMvfy5LibtqfUDowf5rjn6pERwdLkxj771B9BtGJZyNnXJUnSE8DqLo58ZJRxj5P7WByiuNyt",
  "key8": "4ZGDmAyCWqCabqLCUBjWKgDXETwNKcr6uikf9HoUpd2uTkwKJvZzpPL3gUGwkp4QHy8xj8TVYyRBtDshEqhrhCys",
  "key9": "iWEx3owHZWGCayFeLikrBzXpbS8qmK153Ns9zPE4WybhZ3CVZ6uq5SfXDFgZgXXVv24buHaLvt71JuUpbTaK2xk",
  "key10": "396bZU1TbQDNhyYP2ZqsSWqTvSqSjCHYeRQ9S8ZpSwfu9f8RiqmpQo3Z6hCy3hbiEFJcV9LMv7ktyfkioKrS4gDH",
  "key11": "5eBxxdNkSpdYeKygTETQQUBGh1XydhTDjgk17rH9SRgw9Ju15RVHikKnwxbiGtcSjcEdJHYK2s24BtWqJBNP7snf",
  "key12": "5btiQiVfPre6RJ9QMWbGe4dkzEuR5dt2NEt2ZcMmWQxpAu48P9woU5nLKRGw7ADtJqonWfYx5qvAPS2vkJgbVmsh",
  "key13": "5P9Gdg1VCucpYcRSMwGaBEkAbt9juyHQtANvKGHF9JqkE2wekesyurNzFUwAL5aCtYiHT25MtDTtbQfm6uVf9T1",
  "key14": "4iEkhxTC49A4QXmgVTnGrToGEyfDCC5nU5JkTUZjagzoY5Aaoc1k6dBAxLqitFCgpyVVQ4TDmt1LuXAQD3fKGwqQ",
  "key15": "3Vck3mrU1kuTYRUdZ11jv1Y6cfwBkkaiFvhRgSSWvUcD3YwtPjLasUhreuzsdgArX1Zf9AtLo6H9B1KAbJjXQsEB",
  "key16": "4VSKH8vM7MtCQVaaCXHkcdikPFYPwcZpUL5jD9ybUN5Thw7xmNLjeuYU9tWZQ52a7DY38Jxdhz4bqyv3vXasMwK6",
  "key17": "4NTLmSo4H6AA8wnzMyv7yeCt6cLLDmpSNv4q5qdU9KvvaVxUajm29pumEXbd9o7C9Y3Y351pqZiEMC3KGucEcuzN",
  "key18": "2obTpCFgcBTVwEVnnx1byg4QkLHQyUD5BFBQugZwLatZTGmoUrPM3faTwv8E6kb7ehgSYumcBgYk1aSKB3ormQdC",
  "key19": "4oCdyQh2sG58jY9rpgkZngggBzPTDqkmHHnx42SGM9pPMauY3veLvrum4XQWN9J8527aV8Rfi4mh7LAMxK2yBqXg",
  "key20": "2wUEUNqD1y8BYbxe3EJJQReWeN7AVR96L2icZyfqUMgiC3mw3AV4pYC4jYijmyncbarMFCYSeuATEnwZxeetEFzQ",
  "key21": "41k34PvjPNGwHSYMkfgbCksLvwDmBFmJ5Zmye6eXr9dKjMYmhW9PkM7Xngm9gy2BVwkpVGsdsrfVga6st1VJHbai",
  "key22": "xRZapTd7jUxrVwkG8P7zuDC6oEpGe34EPXPDnBMn1SBoJmmbbeCFey58cqKCjVaJGub3dGDZgpRd6kn2w1pP4QD",
  "key23": "49gmBomNCLBBRM1XUJZhxC3eGAu5NgqM4pS8ctav6BHZyhbtKcWrycsHmgzGehHLk9Pgw2NVdqadg4rpzFozh6wX",
  "key24": "31u9GJo9YHUvvas5Totaqc2d3b1grtc6cAWP9HtsMEnjCEThX1z8GTSneUtvoDxWZAtU769QYpqNy4CCRKpzhE2x",
  "key25": "5p66gr8tocwBBEirbCjW58PYoiFPDcCuiYQ6PVv3TynZfHcRknYqjBuvxP8nikqVBHgUYqtBVfz1zxVVGH9PFfc9",
  "key26": "FU4hxtQdB7vowhqWTuPdJegmg1ZLuFskcXn1CRt1hEmNFJJAiKQcjvJonQx3M8tgrEnz6MeADTo7DazsxhZUAFD",
  "key27": "4N3VmL4S4pnBqGkNG65ti44eLxVARSoqYHSpR84g4xM9VAsFNpCu6Yf2yzJLyY98res4a5v7LgcmsifS7StFspGy",
  "key28": "66NLb63LMkZpJhJjQ4r3mv5NzjNns1LeHfC3RhpYf2sbyhycbFZW8z2fMeo3ERCSHC7JBhh5dp4PCdm6SxJDrDDD",
  "key29": "62EXGjKCfsi7nm55QUjULwwC5ZXbuoEfVn8U2TA3chffLiK1wTzyJKYobUdE6P54YqkojA3WZfttWEc7SJTPqFhz",
  "key30": "37DZirNq5rD6j29jsm22vDTtRpX3yn58C3JfzyAbpXrGXMXn7vK2uGhpcpBmqFCrWrYcPf75kmbqdBeAU7Rkzz4R",
  "key31": "4ud4tJyN3khsUW1fEyLGdS7VvHupNNNPEPeezb84WsjDEhsUU4xtMfAuSi1eKJWeY8H3SyuCCFSVLrswX48BgRRF",
  "key32": "5Un5KcH1eWyWdsFuWU2V8RTTnTjrnNo37JYtYURTs8pFUfDUUCpkHjW9ZLhUGERRaywPFAYuaxnm5dcKZsq1wkyi",
  "key33": "3kp1E3rKjxmXcJAzHpG4WZLYF6BA3UfKZqTp97dqyJHuhjBex9Pi59iokBavfiqTePKifuj73GkWYVfxuDCfvWC6",
  "key34": "5PkAiZahegta5SJJoVY7YPW7zEGhnfHjRLGtcgzQWazhu7nTag1zcZx1bCwHV4QJT54YFy1w62Z1NdTveKWJfmD8",
  "key35": "5cZ7TtcrxFXmmcRHe4z5o6567StZFLzFJReK6wSnyRXNRZaQdciGZTNsjAswc3qWSESquE3EkssKQJ1iRU3YT13g",
  "key36": "2nYRZSEPrcnHUNdhazhhKFuTB6o439nM1gt6yJ5qnV79RkKTKkuDUi5p5PwYkyUVMWDdiicRYTgFTzAxNhDh8MwQ",
  "key37": "3BCmwR3d87ZRrYGJbhEWkvgQbdrLmnLKxiiu5vBDcucMSSqUV1dDfNspzswB6jfUAn4Lp9HodRULxs9rC8nXVeHM",
  "key38": "2MssxoEUVgA6yQjvd3spHqCTYJoi8DwfgMvUyZ8oqgMvkATbQdZAxgXX2mxyoqiqJ1tWjC3RGQuyiKBfB9rzDyoQ",
  "key39": "238aG23TgD63oRKGtr7bSJBC7iPLbTYcJb2gpakZwCHGPE57ZRLwuwgNF5Eyh2r5VdE3YSYCpcA3iKvLFuEvDK4V",
  "key40": "2AYEt6NRigG8xs2pytgDQgWAuBuWcLtyAdxSkMPVKsujYnCGFmfBQtJ15SrC9PyEDvyf9FaqxVtj8KejSzpjzsKS",
  "key41": "411o7R38xSpE2BeudKc6uVtHLEHiGNoJ3wC4J7tAm52tCmaKUnJTRqXzfLyxJNZjp1C4c5WKT8jbXLPn6Rq7uPen",
  "key42": "5dkb63pXQGXkyoM9kLdP2h7Bsc2qe4MuvESJg9hRoQKozt4anJEP9CuNExV9SUUyCrr9Xmp1Pd3rYLhuGHBgRrur",
  "key43": "4ehK9e6uiN1XMkTQu7qYv6bHBQZU6sucPxoBAMetTKwemuV8QiCMmCFNxhEKwtY5yP2ApaNrn1eVXPbw9KeG8HK8",
  "key44": "61JLox7ABUWaxX1X6kzbr2ijWBNqzzQRtbvhL4SP5a9KrtQEHbbKZuo6Sdz6DpQST7abCKETFp5LSKEHk1kBMMkW",
  "key45": "5dQEwdxTYpqGPcxj9jiwMVgB1V5dptCTtKUjqG3zHQS1RCuhSy3mwXDk7N9J46S1G1MRaroDGjX82dVvu2ABBS3q",
  "key46": "2Z5UDdZE4S9DCHHkriwve4cpS6L82waivXG7ytAVtKUzgqjhrmybsLVbzTRdLHF5XPKzJRDGmbazUYJ72wYzSvG6",
  "key47": "5ypHA9oDAYaDrZQuno7kYJSB3MwPsgrGXzUDuiXMTPdDmUFzqYuw1HZdfc5Zj5duBUtg2hkhu7W3ZAmM3JMoRg6a"
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
