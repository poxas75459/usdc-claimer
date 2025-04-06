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
    "dTLPjvzf6FHSLL6CMaChLZWbnGbL792DBEWADFPsV6v2zjQhruNcywh3Wohdo7oxsqhYD2scFUAdFQrbPAEXVek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yNJPp6apuAsGASJX4MCdsBpvSfYyTjoDXt1qPiEoRiCSvQ1WtZhn84etra7Kq7oq6xMh5tPf6sW16N7Kg4keg2S",
  "key1": "4XddcXWsEbL3uJ4eEYxNYGobkt4z8wGMqgLTPyS9SKTuxqLG7sKzrnRmvt7AJusZdXFss8iQ7fLGya58SMyoJsWg",
  "key2": "2NEC2auR5jAPNEowahHCcfbdHKAdViSDyfCnwBVjWh3U56vYrh6PsmFguR31YZX5qs94G1dXAtX1iee3r1W6QgUg",
  "key3": "hKunUYprD3fD1fCbRsBMTp4DqRmY7AHggJUoqXNZzgV5YEHtZY1cnTXKput5vVdirdtnssHT5T5tmDKBqE5AV5z",
  "key4": "4CPE7y4a7dzPJoyfYCCMHrqUtKBn4HfJ9SB5W5MNV1uTPxGhFXvxgMp1k3AGMnDsQXgTio7qbTY7bEnskAkN3zqn",
  "key5": "3eV3fYannN4PWfLHBqNsqftM18NvgSCNEqpiSMJQSG11oVDqNH5EkSnAWfsv8tvUN5rVWkKoZegDgGRQMASYzWK7",
  "key6": "5TBEpaw67BwxXsWRF1GSmhMmKhcAxkogxziHM4KAXM8F7KNg3dg2BLVmfQMexfJ4smt2FeVNDbtKzFxNqwZGM3ha",
  "key7": "4qZrx7Wi84PggZC4RHG7hL6BvrcPTpzfHdvHyBuPmMTqsgBdhUhWTRx4kYvdCMxuUeVT671xKJ34zop4BxGwdyMG",
  "key8": "3766PaQQRxuGdHP3XjUu7t7WmfohLVbRe4i2B9xJGEE8TGwU4vahvvqUaw9WYCtWdCLfFau5eTa2CNeuFy5n75x5",
  "key9": "4UYM9J2k3AMGsoUfJHViyyXWvigK6BCSRUBHZqNW4H3t2rTTf7shWv3RRrfuaQSenovPYPvEQ3J64vViBQco7Hzu",
  "key10": "5WEU1EHXTrm2YUuHJAGgxnWYLLKXTucJniiobYkJbyamNqpazocFNtrB9q2msz84b16m5X6uztir9EaV4cFmmubr",
  "key11": "SSQur6n2BdPC5CmMhH8hPCTLRLUexvz5pccpboXXsRRYft9DrAgaEbtX5avCfHYxxRmriYKvsBmcMRAoM2T1EQR",
  "key12": "JCjaLNqt9CXkBauNygwVun7EcMwixFGTY1MTYCggHNFVjGVuboBX9vgoZgYLn1fMLDjp66DTjrnZFiZj21xrpWm",
  "key13": "2LEgFUvcfZRKwgf9Vu6uKB2RYRh7YKgGtMZNPgc1dDB5JhnfyE6UoPaKKyy5Kz4Zdh6zGk7Y77eEFViy2HyEAjZ2",
  "key14": "2UG3aYp8bHxfPntRvtaFLcwo7ByqzJea9STLgrrNRD9Uxs2XPxUiCMF14GzkG9ERYkPYJtybDN9AHFEhtJrBxGih",
  "key15": "3vnPyX7y6C8fqQDAbTVPWb1ST2ZWRcgH7dBVv4EZRh34UEszMxmaYzkMZs1WSKq4pETygpzdfZ6CpjmnFWosuPK8",
  "key16": "31q8biscXDR69rZfqYfGRYefREGHwnseAGKDwQRV88DEnpF2sJV7X9cZdRzkbaCHiVXpyoAyzDaiV6aXHRufYgJK",
  "key17": "5xp4Y8JGpHTNpQ81VhANT2Y9HTJcYLzyP668STj7e5qXDSm5WQUTtQvz8CLnmcxJ2uLQyQhp5stGQ4zWJCerd3Y4",
  "key18": "31v1qJBSawFDNRch8M938mk7s6n5XCWFZWPXPXC6qKH9GUaHc7WYwqkyEQ9BpFexoDoPaUxRV8wnGwrBZKvg5FNq",
  "key19": "3PbEF5MZUDE3r8kYEk6gsxxqEC71424o34pzTQc4j3d49vchX6XB9SwizsZjDJunFsVHu7Y9mUaXj1FTSYiooYWR",
  "key20": "4oE5TzCcPak75fR2M2322928oLPdkCZuyHYR5LzTCW5LqoFWhsaDGkUsHMsovSWZ6h3o7N7X5NfQKhuxL5LBRqxy",
  "key21": "4Nsj5aWSoswJ71KiUpXsFpWEXf7TQFCu2CEqwSnzF5PqYXEes3CmXW8XnHjnMuHDS7bKccW5Cm5dAhAnh8uui1wp",
  "key22": "4EvtEXWTyGPbVKnNbJgWgbxZgc3Vzht4cJkGuEYTgmkTaA53erzpozHGZNSWQw6cfUvvLBpLigBaHCePprwugrDp",
  "key23": "5VxGwo72nk3kxbGgUe9EM24ngpu1m7gEtfgrCKpmFRmcRRoPRV7CHCUF8ehnfg3bnLHvjh7s88NmbHd476iasmzw",
  "key24": "JQcqEjKec652adCnQXSgJ9pDHM5ES5zydxNf2kfeSUgxKPzMMZ5CaXWwQotWe6wrktVPZ6u3GSxMQYsxmeaYidz",
  "key25": "2Tboga9psruvSJUMbZNJnKJPcJ1BJftaFjAtXDuRujdHTJahRKbyWeSuXbCoh3eEineNRnMC1x23AWNzfAKkpozB",
  "key26": "2aWFRtLq8EkhkfdzhnpoVcaRJ4QypqbeKdfEZw7cYEr9ofUgJpHGaQwH1u5KHWMMmrCZCGVTMwdvnrDb9PoWNbZ1",
  "key27": "4KFZ6z2K1wUtF8VnF18DBiWjGNcmKnWphC4n5S6RpP9y5fFUhBuqhYCABHtWUHxi8cBmxW7KB99JSuc52sbxC6HV",
  "key28": "4EPHc5GFJ1qZ4vU9tgsSLrMnWr69fX3jJJnhVWZsaHeGq6sNzebsgQUSF9Xy9gLMLoi1HysCz5QAqZ7xfSyKaUyG",
  "key29": "4NDfsY5M68xLQ8CLmjBztGWaLSY3FMjgaYLkH27R4xj8Nr11PhNKhSSHDBTaPaT7eAFQPe8Xopq4sZruYt7qaMVF",
  "key30": "2nwabhKpBQeKv74ZYkz7TPzMu4BCWNGYM9B7ZQZx5x75vYMYstzFmibJbGHZadEjJjmYvyNSEVSQK8sixncxjz7",
  "key31": "5JsKkwVrYu7YFLymCMQbdirJkqtyEDRkbrKh2BG3RNjxtfGFGtLtBzG6nTNfj61Ya1GLAbn7x5XedDEYf3YxJSx9",
  "key32": "5fNVerfqRNz3zy4hddX4ygzCvBbW9Jj9w9Yg9xeCUgfJPK6Eiiv8FuywdLM6QwE65MpsSFi2GB8qQ2y1faZReFuS",
  "key33": "44H3Z1YCmLdQwoNxdswcUnf9KXHhZZ9uVauSbLWru5qkDa3Gsmy4P6nuuXcnQqmjqaopnwHgf2bN5V51Ze8im9fn",
  "key34": "4cfriziR1YimAnyn2msZnnKb77ErQZtcSQztxY9oo9nKVv79eh9w3LfRmHSQLdUD5hypie6iiucGdPksv3hcRHz6",
  "key35": "3Q7HWdadXJtXbWP6ozCAfHAvivtqTcHCnGB2WUbeWMzd7YD6qLiQjL8oymH3SUAGm6gvitgGAx9DWuqMWZgeobzZ",
  "key36": "RbSkqjKpxakCqT3xW7w1La2Cwkwhr3qVTmcuk21DbAFrN5BBf5U1d4zFAKSVq96Cow4aoxBSHmEw757GFeeEFMh",
  "key37": "KSo82UQEEvqKbEqZu5wwC4uendGYXT6exvLaUQ33U5UJZNjr4g1NhEux8pFB3qPhwKaVvWd6rMsXcJu3RL5G3ow",
  "key38": "1unYbPobtPmhRZDHp4bFBXG154VjmNvCoT3V8RUbwAxekPXCFhyjLQ2eCfkzhZsebg1uZJKppm9mTyHGEoz3fed"
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
