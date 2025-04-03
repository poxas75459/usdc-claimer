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
    "5H63MVN7zyQLe7gPef1r2xAKmAxCRxyDxG7FpT1QAesXNDWjnVoDsS6kytD8Q9pCKxKAASqMTKfpPh7reow9J4cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epH1iNGpXdV6JXjzEWL5LMpJirXjmdZAJXk98SArJ2JJCxb1XsAzax5DyYjwZhvHfAKm8D4dTEG5tRrqegd9yGu",
  "key1": "9DnaUR4PZrHdXVYbaEMuKWoWJ7kaPxDS8oQdALKqKgHu1ngCKkZ3VriesYMj8NUvZQtj6xv9WhbbgYhWdUtU7dV",
  "key2": "3z4HoepSRgyZKE4dWPugdrh58pEL2DbxjioiUjqcjyThnAY18Bx4JqVUsTdRta7WsRo7bp69ga7QWqJoz25da6xz",
  "key3": "4si1b53nYF1xkCtazDh4bt6fzaHwqiuzeFxP5pr4GLX1zJPsjua9ZZcR1iJNnyJ6FfVGCdKddZpHCirXo8Yf2euk",
  "key4": "3znXHCMPcqeepvUhbWuKg3PLCSbqt3sWofYydjcizbRMHbzkSiJafaTz8wVxpdurNaFgg9MQVJk2ha5hdtraSv94",
  "key5": "2ef2fxiKkDtTu3g5eBTqdXQSfqgVMccYBFWk7SQ4SYrqqBfKXVuAmpCqHQSi4BDbHjAt4FU6i6bcZxsrsp9gbGUZ",
  "key6": "43jKfR249pm1R2Tzy5JSf9EqXRgMLL5iCMXMgQ6mdpYz6zBSZrkGB4WvFBK7VBpftdHFEFF85w7i6mnstB3pp1jL",
  "key7": "MAoUkN7yLzJBeo4WnV3wcjQQznbxxzuHqxTATaRcqa7G5avrqdzj838KeyyftmMczobPUFaSHRenostsYmH5rHY",
  "key8": "2kvLiGhiiMCZ6MP5pCKrNmzLbXDdvo8nq5TNAZ5kGL4d2xM5tepcgchbePwpYj56o6pM6amKJpkpPeFkExEojm8W",
  "key9": "619zUDGtaftcp9v67fkdHXeJP32sVh3jXzZEHcFunMYBZAjoKFe9MUZCAs1Jan3HfujqoSdDQMWdmexSt4FQVyEG",
  "key10": "284djC9PzBZhNT2YHKTrJjSPXbU2G1CdWhcG3MuSxLaPY9iksRd8WHEcaTgs6XHq17pSf89UhHHrbsm37DSJKSAd",
  "key11": "5guYFSaBi6wLRmRQQDsbUK179cPJEj7HuPzTPksgfyTE58NnboFkD34k8ZW7KCQiug3rKSTPRLAzdJyCKhV8T5Lq",
  "key12": "2oQNNFAUVTqvfYb2r1GzPa29AQacme5MksTQ7xpfeywzG7vFQQ27Z85FL8nAqJetd5Dvrv9cKdoDa2icSjcN5GH2",
  "key13": "3LhFL8kbxoJX1jtR6Mi5yK5pGMhm7qCJEjP8E4HJfZgdcGyAvkGXy74cB39xZKDL2e7FdjmCLjtGCkGnyTtxHHSp",
  "key14": "3qXkPX8VP1HhM5s1QsJgBDdeBSa1urZCTKgCRRDLUd1S85i1s2oTRydtfNbBWJuj2w65ZKxeFbYC76j4zu6XAc5s",
  "key15": "btgaTcSko7Cv1iW4hq1nq2LnahT8d8EGPw2dn3NPDo5czo6qgc5H6RCGSGkA3wxHSneae4NfyHb2cRdrTt5uxVT",
  "key16": "3VTpqHtPhP7d4WXUHevcDWhTgbtRyekc6o5VGHJthAnttGEpNW414PzVYYLDTXsKNUvhAfe2iN8VPneJL7zMGkwM",
  "key17": "2hWvMe7M394mwpKRMTGXGFnkdHK1iVxnW481TQGkdUzi8Tu4L5XuMckJpt4A7TtRX4aEQnoGFKtjf7N5n8ANmSSx",
  "key18": "5JKVZjqy93sL4uikdqj8vkU7Ea8VdJfSJ8HaNxrCt1Y5fYpPmJza3uRDcKRweE5dizRHs4vwftZCaUUis77u3DQ3",
  "key19": "oFQHWTkUQA7nLk6BBLRvv7buBPEuUbpEsio8ob3B34t651zPfNNxwHdDx8VFfn1KpEeUzV4FyMNpVnquGnHRM5h",
  "key20": "66oSeCiqmYqQ3Qri5x4buf45n2GHRfRuDEqSPuKYWqB74tSoF7SjGDPbN1oHXzqqDQjr6zjEfdKLoYwzEFt6Cj5D",
  "key21": "3ZBxCkffgibuEQNWvJaRbtaaa175tog58vYbti8Ygo3oBNKDh4X8z9zDD1afFNtG19rRfxpgeQYZiYwfktwtRtmM",
  "key22": "ZcAZSk1du94WoThTDkbmLzErAjgJBzV8wpNWECQoFLt7ShQANoQbtx98UToLDbzcKBnuPW2C8qCRByfzNFq7LJu",
  "key23": "3DvnnuuhXVHsX1tLEMSRo7JSW3gEc62uw5NVU5VyZUAjfoXhG7q8F4eKDSJag94JPWQouUrEzJFL4TmqaHtZKwC1",
  "key24": "2QyUSqAvGgYsvCMwjJMqvweyhNZaaQdnbFHESYTC4ma2xsYGCwK7CaYzoUFSSu8JSYckzMNExTMgnxpMJs7qck8U",
  "key25": "3sDd6vYzjddzeaxukTVJPJiebLa3hicEdAhm8mquZjSdaJ1NWaaVVCgiG3nErP7Z2JahAw7P3PG7yx9VpRzkDgLU",
  "key26": "2dqrVXqJ9wPz5r1mZyDWLuSTy9x7E98BfWjsSGb8METgeXwt5uPNaACn7nzW3W3DfeqqDMMG8MQDgLouRJenxNMS",
  "key27": "4zGyRHnPxKHsWRmHQfsU18wHjMsvfyjfZdpcmmrpbmyXSHFQwmZk7uLPiD9KVRvyd8mfFkuSRtMgHk9cU6ma2suU",
  "key28": "wjLwE7mKvuuZ3zSKnPB36yrYGqAT5mzWRfEevh45iJXU3DYzSogmXLB9Rt9ywMdv8S9qqSVFf13C1RURXXTZsyA",
  "key29": "5iHewrbrDtWwEAANZefSjhPLhND5PxgJLxjWCNtY7YzErhRRKjnbopsJ33DTunjKAWyNQE4iR9Y8R5g4KV9bJ7YK",
  "key30": "5esZ155RDkZ8zoFTFtfyV4zVdtudVreuHtJeaCVLTWp5CADKZza61cpPJ6QJVPVHuxankjGu988yQzQmagvUMkgr",
  "key31": "5TXS7ZMoLbGAeYA52A6tVHURZA8iMibVrd2vVhyWsn9ZwZFh6cFN4F6YkhV6pzvuT1y5tnZHxL1rQNcM9cTRV61g",
  "key32": "2VerbYr6MtvCZRh6JkL55cBJxaFsU36P2yxUFmDtQF1U9gPA5BLUcP37ntZqfH1UcvxL4TP3AAdrn8PDAVebgYcs",
  "key33": "5x4JnuGiPPpxvhJbpEj9LwMH59LN2JFUYTtn1A5VkGEY4gCbgra83Bg1NW9ASKTpYutEPigQZsoJ1gWpE1CkAvc6",
  "key34": "4RFsqjaKyA5sP1jcTankfy8dDGaj6LbeFkxhxBZW9HWr1cDg8M6ZsXmLg9cYQPBdmRWM6msdJ5VNFT5P4XQC9QbF",
  "key35": "4ESgf12FbVfCXMLB9Faf3VMk4gHYK7nkJcUPjvGqz4xMfw5p5T72EAPtPnFAHzRHLqAoKckQMA2bjm6n3BGp5KrU",
  "key36": "5bNRGyveaAmZWiHpAmLjVT6quM2NGJWDbQmdyVZpsckUDcrSxo3gFBArUtBc6XXV6oqamnr2xkJHLzUins3go69j",
  "key37": "2bwmAZiHAdBNX6rgECyXppMyxAunqnC5QCjmNfJeKpW52Zk9PEGJceiXMyYKXfuY4dzyGZ8Zfj1VecXFSiDzgWNE",
  "key38": "3EvY1D1UYQPzrutRSFmPTseXym4wkRJBSs3EodgZ8JDw7mpQCvS9st94YUmTdp4W47KieTk1kqj1AyvPR9c1ayzM",
  "key39": "2quNUCB7H8AsqQdq9rHFFooWRASCMhphsBfGpKs2zTgyiS68qdvv2XBVkg4boVg18RYNpDVyJququFi4TZu2a1fV",
  "key40": "FXEahh6Zm8fQ3bCqypDdre3bUGSrHC787yonqxerdMQ3iDW7RLpgRBwKaJJ1tGA3RwHjHYJNY1kwCwF7Gkn8UoD"
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
