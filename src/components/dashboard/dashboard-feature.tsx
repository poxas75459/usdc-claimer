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
    "WG3fSrWWVSpkC4GC5qfZLHj7hqGxdDWmpoH8c3k7emBugdbSQW2Zn2K2BUeaxuL4xa2f5cHHz745umPwBsUbatX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tEty563c9XCoJZx1rjmX9BW5tr7Umu3xkgS8wkW8AddZQwkyV8BD7qaN3aYPx62JHkMZqrnXhPW1zr2SLpFwwb",
  "key1": "dbpbNzQvQaHZCFM3aDiWcwSwvYvXy9L72zm2NKTXn2JM22snPASKpnRdnVLUMBGu84q2MKUyzsdau45T4dLDjbB",
  "key2": "38cKUERFRrrEihrKacy68YAbJwAJu2wDK7z6vXE6gTgRivX1FyzuqFhHfAiCCqArbUoRtqnke5hCLVC7tA5pEVSR",
  "key3": "3vPpZaEeiUyDM4cgygD8UQtTm6x8fLgcU9vb2DGW88radxNfcdDpTHbyMtrHXBSnvxVMtPxo7PXuguJJUF4M1fPj",
  "key4": "2TkCKSsMPmuJkMn9kPfHotjgG6YuJp7nE8A95EBmdDWaL8WWNgp95NPL6eiEjK5u4zCyTxWRH6R986g8gW2eBMsT",
  "key5": "353a2fXUYrXhPyLzjC5JVMZMYqB761DBgij1b5aSLYgxFUaMMfvQbm2QfwR7WiDdw7LfEVTVCTPBoc9wWGTbib1x",
  "key6": "33dcJymZpBYSVXfmtYHaTxyzmEeuo8GamJogVcePuc7iBUFAFY3qH2uJkVU2xAMvTE1o4a4iczrc4NvZw9vqeF2e",
  "key7": "pDsQ8VJgoXCEYwkbmdLckMzdSPH1ZuEvwbTb7sJZdjvNHHaMoKkP4nn4jPZDtWnbjDfUtvxeAj7GFV5NYnUsHpz",
  "key8": "3EDTufTaMtZVU5sum4HDaqaD5mYWdj1nWWfAx33feUzCjkNkus5o8E9cjFsDAhyDWPfhtmkBHxvBgmX2DtwodyXf",
  "key9": "2iA8gfBhUjikX3YzYHuhUtsCDpbqDYuHBLRkigiZUiEdtVbtHXbcsUQCL6D58AQY6fUgAgDffHmAmPyQruz3Kicp",
  "key10": "25x5PAFimXfePqU4o2oJiCcdiknWQAmVJD3F8DhZUibABFKCLzeEDc8N2qbxvFmv5fkdqBjnfuyRHMn2LfKJay2y",
  "key11": "3GbmCcCsCstA7LiQf1W1doCFxkV5oDM9uTdmAQnv8FiQhYiXj3njteU5m3CfrnZPvDiHb6PxL8bcyqZHZtrCvCp5",
  "key12": "4wGpQgZBsy2MbGkzAAEETo8LWWR4uYEkyBrU99F2W2yDZNYxnTz9LtQFUFdsapoJbyU671ASpVodjm1qbpDscDdv",
  "key13": "5NLJC6nsKDSZVkWSUQ51h9kSEadDMd9iScxmXDgzmZsVCToBgXvn4xTheq33Ectyyr1KaCyCjjtXiJV7pJr5bPhs",
  "key14": "JQzJdJHW7SKLFrmY6V365KxyiBTZTLQ7bznQ1u52e5pkiWAiabDwbeNo9iNTqCAxrCtpQRBwiQYjjZF7Gz3uokn",
  "key15": "4Z9RB1HUuPWjBLtNt9hP3BggC2EkjyFJykVSL3AKP3kbBux3QcLmtxtZEVmgfypKAd4zXqo3dVS16LXeAdbGtdBW",
  "key16": "QAPpSiLCiX6wBCq663umFSbagGQjRKKpRacSwm6idaSs4K7sHYFh2QioiKqqz59WhQhk8cjmC2NvKfCTPWoSMDV",
  "key17": "2dLYLfALNg7w7BV2vowkUNFPFtZpxc5ePd3DSfBhGicss5F9HY8xVNr6SXaTWJfxdekoyjX5CDrPgDMBMWkWSHuV",
  "key18": "5XmFwo1f2E31DDfNupnN66DcPLJZQP8dkK5uC3tF7kUHapvQpf5j2nM5WHQM6d2ufBEs4H8tY6aUe8f791Cr4RPr",
  "key19": "2ve8YD7dSaUJb7HaPbfdEPXvxnGt6d6panVGNJUwzryx9kV5wq5jXQtYTbRegheYsnJpFE9KEnEu3uNAj8y1vCZA",
  "key20": "2yKeygNk7K1cWqXaud5MdD67fkdTDQ17bMfmdet9fBiSdfxbWxy8NsMj8FxgxXcrLxM8FXjWtqPzmB2cbihjbJg8",
  "key21": "VwchvENWSctHnNJvxZsoh1A8wEmNS7ziTp132YfyHwDtRxJyYFWRSratd6M2oFpmXDD3Y7DCiVCRkc92XjNyJk2",
  "key22": "5PKseLyBXTGn17poBrQPBceE3U39TmW6xPjrZ5hFvtVb9GbzEtJcnwyq7HduWyEicHWEVGX1qUyY5DqXP5x8KUPN",
  "key23": "SyQqNLNEQwHdH8L6Y4isGCAnfXZYoYoPKLccumEfS3cKr9bE2iwjNMbjvtegYUQL637NyuHVGsMzUSv3TRk3YEg",
  "key24": "5PA1vPKhcSSTcQ7Ta9u4FH6XhPMvcRew8mR86w1NmzyiYWS4BCQjo98qyZWZhw9sQcxZbnjLKULv41F4aMS25qDU",
  "key25": "5fAzdULj993LPvvVwV4EWGNXSmZYTfjbi7GnrAML3kgJDMWBF3yRchb3iJFsDfirnkPM8xfkX6rRxVSr5d7DPh7m",
  "key26": "2U8m1eRqzonuCnWVjK4kJzvZvbvog4UAmh76Wg3yX2cmgQw2BfNtUBcUSX1d6sjhU9gzbkxmA72Pek23jinBj9mA",
  "key27": "3E5fSp86XwG8Sq4W8jvn53UUokVNP9tixsY7xcrQjYzfJyyWGj6UzAePeBdTbVjtH9EVu9UhGuUP6neFPn7CaRut",
  "key28": "1R83QavZGD1A3HFLQBiZX9m9hD5pECyVsEbbAuJQj4vKYd9ZuEm6e1GHPwHS35XT9A2WbPqjCEy3RymcDud1psS",
  "key29": "3fACQDEfPm2YibxUc4qVyK6ctqeyT35Cz4GAaCqJzbqJDjME8U1WisKYNGKSo9PX7GRRQhDudnTmDjsnMhH8mxrC",
  "key30": "3qTicEJXvXJ7XPyvQjggwqgtVgrKj4eKbdpWwRCKaSRZSxRnk5XSZDfJye1pYpQVDeUTZa3YsgvaBbvKCaEh3Fv9",
  "key31": "4D2sGuVGupBJxkdALBAdYfWFGDhGz4uNfXwQ8mqWf6Kac4m6csCYaxFGyi2cPK9vbBWXxCUtVsRFLEqntVYgQNCt",
  "key32": "4jcaH4fVqTdfJDgoHXQojBYv8UbdvvfnoKEmZzbP177CDdk1UGyndFm8Ln9G2oVJh9ZvUMYGiyrKVJcok8yVC6dW",
  "key33": "4xqwEtb1ogBg4tjeWjqYUtpoVisjLpSn8d7K9qu3MQvyHiDutmKLg5fsfwhpa2U1VBoEfzaBfQiinZeU9GjKtM7R",
  "key34": "2Fug2LaHEX57V31Zocp6VwNbzhvXWy4jH9bXCdMb76ibuRhH1N16qymwQUYModF4wH7qo2eeSiaLezphhxy9xYWd",
  "key35": "3ovnaqZbuzesLwq75BtyUzRCsod4rKvcLDMUtrbMTMwQNxczax7D5TX4reZWhyEY8DBvgFBn5ziednsFy96Ed6fY",
  "key36": "aH5phRYTCD3DnjCbziKvQNwai8dPAAmoBty2ktKsLYJce3L8jwGkQwXrYf3LnVk5BQWsHDtfdszKEodKdc18Sdh",
  "key37": "66cmrR6LewjYNLLqtYFhbYTtXiy6zXoFaDPj8pTm2CgxDPDij78J2RQJiayBcduAUepN2cKQCPGumrk5749iEmsg",
  "key38": "3nd2BazG2RiPZeoWZ6h1ihDAKqPtF6b8cKEMyPJCBaZ5PvqgXND8SbmfdextEmPAuDRh5Er1hMCGhNXQniB7Z6U4",
  "key39": "NUPa2fZKxr24UEKBiz5CN4w9D1WLYAVLmamxG9deeX1fCYFWEoyLYiibGegLnPwSmoUsycoUFs2Ahy5uTrJ9tpu",
  "key40": "4mWtNmFQs1BjtAC7nxkxsZJn7hw49UEY26paSGZbt8fAdveDGSUJ1MhcYYgftGEgqt7JpKMa9ZcaGDLaUDSzQu8J",
  "key41": "yz7PPhW9SEwcyibLtzeaDBTJr6iRajK8b1WhVb1Zwvi2eaB1atQ3NWfmpR2sCtW5CNARtjTKtN563gZoG9Zs1yk",
  "key42": "2hq5HTUUjCzwHuZhta2SAXvBQqGACi7mgMyobPyXzMwMtpdZyCaVVgrX39146Ak4BeGZUsRmXfbqHcZ8jEbH7orB",
  "key43": "4CPfYL9nFzzJP7sMnPeRhh9xQFkQ4aLk7P4saxtU1Zgv715d3C1BBrYyVsZwVb5RaV9QqUVxo7aE5E9vUXzBqXYT",
  "key44": "3puvAbaoY6o67tEhk7VFWeiFGqKnib3cverzduzCF1JtyzzRSSzfZF9GCq8Dr41vfm153bHXJe8STMhE55Zh1etM",
  "key45": "4buTmeZJjFhwyx33RKVQk9GWApYBstNJL8mkWFUD6y7dwZBtnueENwuj6e8xguoep8hqRd4QiakzayqVWWTa2QZ2",
  "key46": "4aNADS6tCGhonjiMiz1C1kvs1YQN29wEYtQLXhtWY694R8a3QgMyBHYCE1erxK6AEHEWjrBx8DQKFTok3M76K9jS",
  "key47": "62j8XWqAzzwcwg4vLFu4QwkxbZs6LJ23rq8yoWoXX6yGuB8fMiVuMZ85HtWq3erbFYfhxVLMVShQQwNnpaqX7RAb",
  "key48": "2cqfKk5DFxcs1KZe2FN1P7ntHY4AsibxGrGqHBqFWeDg9Taua2eTeAWCShY37oJFoFDFXRPhXXpowsMtmjpPuWog"
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
