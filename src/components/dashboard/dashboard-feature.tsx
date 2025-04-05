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
    "3pUNSbXrepSd6f1T4cHiEU8v1ud2W8pKAGZrvfAd3rYXn7iDV1nGBEqxT8E93ANR5Fcyh3vCkV8wFg1nkYVTqrET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTDQPszWPSFR424XipRQRTZRqeKjDYCFdxpySwjdTzuXZdc8YaSVKRXF1NrbgjD6rt6vJ9xzw3uzyJ7zAHTWQ89",
  "key1": "3pBhYYhautJ37XJ54rgBSTSf6tVCULnjozJchEvYKNEtHKZXbc74xD5DxjfoFofUEsR4ATJLTqZu47XxGZiSPLpS",
  "key2": "2Yirp8Qxjgz1B5z6mBTtpt5mnCZbmrgyuNfq6fceP6m9fQP6btvGVCGHT28Vx41r3ohyPjUzU617n2D7EGbzLNo7",
  "key3": "27RB5RVVoYYDH3z4jR4XDo3KktG7dye26tV89LvTBg92PL64EGep4Y6nkPXow9FUTUNrfSBhH3YfxvnUdPfDP1Rq",
  "key4": "3iBUomid7rp9xz8XzpQ2zWsKHrPkYAbFQgug8kztGbHMFqc2UyUNp8rXwimcZBCzuZNwW5yqfvJzs4eCuzVkH3PG",
  "key5": "5i1rLQVbXRtXeDR3HJCWWLsn4kpt5r26bjJrea9D5rv9A8qoegjBRrGHSy9ZjhqGNFNJLTx4rtTE73z3SHi83JyD",
  "key6": "4b613FRzVayy9LBt2v2BzZzCYP6TjC7vhdZE6Q9PRy6k31b6K4Sa1iq2texuTD19JqDwwi5ZcoXZq9psvTMbJub2",
  "key7": "4ygad3YS4NjYLUJGS7hSfZ6hiiCpGRtPALi1tU3ysu3XTqJ4TSZAkmTqTWaiUdVAkkgbPh4NsxbV7BivAsiAsfxc",
  "key8": "5MJPqTExw5yy4rsK2oNMuux8HkoapKpXSw36hkeKPGQG3hmdRHSWvTuBF3MrGHnEBaCci1r5xvPe3Pjmb98ASvv8",
  "key9": "3v4FPtKczx1sSLBio8CrrZpaxe1UjXBeKJQiWo8xdGFCD4vPSfc2P7JhnQWCoQ1Aqmredr1rNA4ozdWfYVwUnoyo",
  "key10": "2qqytTewpptDn5oLQroRLQdgyGhiySDEAQAvyU3y77XZotUa9qrCCzFPkBa5iVWCqRGmx25dGxeQPKLuUSiG9r1U",
  "key11": "3UDgJJBDLmmiQiEBfcNwMrUiyF9JWZh5i7MrYr2iWdtZtW5tVSWke66xytDHwjR4hgHef1BRBEK7gDL59G3hsfBz",
  "key12": "2NfqJLsqt1ixwf4wNeJWzZDmgHLqooWgywt932EVNYnf1QXYFdK7Rk5TcsBHGTfCkUCXz2Zd5cjAxruk415LkBk5",
  "key13": "5CsnvUK5TsDdiBApDXUSHEE3RFhYonS3FcLgqG3enbao9w6NS7ra2wfBB38cdwXHBmcyFGHJQjScJpvbi6W9hric",
  "key14": "b3AZrERDQYktk6oBWcb6wcS9bsJ7fRip6wVSwpqqkiza4LD1wrQ8eCbP41MzncweoAwo8YEccnEqs9wcDjQqERd",
  "key15": "4ntKKeZWYfS7VcpUCMpyqoyZ7P2uLWXpxhmw63haxf37MvxdatqvLfqaVeRXc2wNmuk4rZ98Y6H8MuHLtJkPMTdZ",
  "key16": "3WNiKJZet6T4shWbinwunzYw5HhMSVZo1JAfz82seCjqvHZoSy4rFcAGF52gqhb3sczVx4XeZiHoKM91mrBExQZu",
  "key17": "42aC5wBDFU6W64K4jZrY6CQAgAJYeQC6uSGDDE7wDm3ATQAGaDNz1UAEgabeWwzFqc2f4ZryuxDT6Qm9LdVk9aVH",
  "key18": "57fFa5Mags1zq36HZXe4AsN4iCXSK38ZPNNmB3rB1kuSeEeToYwfexcJXxTEYF3i1CNiDwYstymCUEGQqaaaYEX4",
  "key19": "nJFpHkpGWze93Zow37NTsyB5vQerDuzYbhpRCjT85iCAthDd8pVhYENN8vyvFoQtDNBnzE2mrn4KQSA158TJfqu",
  "key20": "3rasfWe3ceUi44WbnBNQ9fmiMJbFnHxWoRr81ChfStPKyCgpY7e8VhdAy7yyN48pr9nFSnAfpu5LVYgJkedXZaYZ",
  "key21": "57zoJAo9bc2oYmVeWJ7nPdj9fiP2QjtLpgCnoPMxQndRfdaM5QqTtj3dXxqyFhTqNqMQFbBnYtJn2FUkBbr7cqdv",
  "key22": "4J99VhfD3bZrvp4JDFNeocea1FgX4VpjVM1P7DpjhfgJKXER1JPQXcvLsaSiwXa6BJFmMrfeCfoRdAjkQznFqxKe",
  "key23": "2fUc6gYGQ99YRWvrWZ5qobjY9U4BKgpGxNtLrxighge6zLythRLgoJVJybNpyQ8EGWr4dGt65AGQNjNg42AZLgck",
  "key24": "3ucarAkTR8iMV8tBLAvVxd1njcLmEoKVoctnKUi1AVFwXZnubV1uKukvSM3UA3z4tujgvCkRpY6gYcTXjudvsJfr",
  "key25": "3xdzYxjTSbM4oGzXtdhtSAGmwHa5UwBzLGkviAMMawHiXEQugaNTS8T39ZqfKQJVXnoXhaVHQGL6BezVUy6Evuho",
  "key26": "4ERXatZmpB3KPBNtcYiTkrjGN1t6dYF7FybnSCuyGdSjjJG9fTwhHv14s2x5UT41VVULtjL3aNkFMLPynoe3Razy",
  "key27": "3yusjrWGgJrHviWwb3xtNoSXfCkSsVwLFbaVUCzSa4uynqWDJtzwUa1hEiNPTocHaH2KR34mDV5Pz2LwZBgijz2H",
  "key28": "4rxZuvT3WBVYPVrryjU9LAkVuAaNWKpmn98c6syAeRBaKiiWzmGDgVwzRgJo6hMphA3L8nJDake9e3Ktw5DvWFPu",
  "key29": "4Vcmt4Y1cWgrbSXNsmdFLQ72PuJaKNqAuhmxDTratVFgSN3HLvEVZpWZngj4xifcnoF8NGZ1EEdcn8MZMeJmiUBE",
  "key30": "4Z1sGfVwy7TmfpbwsFnkCtyiVupaXSknt8FWperMhtLWRshKPTiDoJ7rAk1mVJktuQaoUQpAArJwvDpDEtBcUuPW",
  "key31": "27nmY3Ei5bCWtkbkKPk2eXyWNLg6nXo3vy6UJ32t4K4GMD2H67ZWrJmUMiTnk5GXuAieXfnUxsFxXXRWpWEYMHDn",
  "key32": "4PCP2KD5zvjBda3T5WnPh5tR8KJDg4tBqYW8nrdxELuHeoojX4Wy9Vq4DsUtvmfxjX2GEZdmXnm4nhN5awMjmPqC",
  "key33": "4g7sHXg1SDvSexEdZ2JkAtYhCJE4trXeoUwF1EKeGgyfcrj5zxazQPVMk1ohDtBsiH44jCD4ZUYXJRDaiB97koyE",
  "key34": "3hrWWMasBNKJJMfXnCqy7moxizoU2zRpywRtRzjRJ793nyJwz6FMKW3nwqKfWCL6bw8UAgB18LRpPh2pjD46tnR6",
  "key35": "2ygnbKQMCBg17bfqFytofzsx2HGrgQdVzEDZdZwpUP6UeQyWaovg4cTmroUpK7WcHXcjNbA1PjSEpry931mjxxLJ",
  "key36": "2n2xFH7LVuD3m5E9Q3iLv7CAZraan2HmabKYz5FjCv8Dt9Eh4uuuHzzKTHA6UJ9jMxsFsHP3A7XQqy3d6o8PL61c",
  "key37": "514j9StzX9ciJ4HQxPjjEw4QP7w8sCsPs2Lw1NfkL9WnHPVPCarATeBM5MvNtZpaM3SwByY7z3DcrekN6YgiBphh",
  "key38": "48ChTXtcdXBBda5sAmwaDFmcxFmCDZ6GN1YgakmJQCrZAVs1TyJNcquLAbBgVj792Re4NRyfPaRRfvpVcSpR5SoH",
  "key39": "3PvRVvtvoPeDqPnhezZ2Rw4u79SY1Z2SJ7AXYtWwKTxNj7bCFik8uwQEMerP5MCYGW4NXDjQDKmo1PtizXfe1YN9",
  "key40": "3wgzEpFVPSnwbWYw1fwJYtMMaX4VmRUVRJJYtig8VB4zEyMGovTVsxrF7Fq38sGsiKXNBZ2RE4p6sz2zHM54u5U2"
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
