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
    "s7j1LXgJvirwWDfkStdVV18atyJjHf8462owoD74odvDhU9WPfLoiwsHfTqdk5FoVSTG2zdEWjQyKuByaCyGUEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3swfmoPF4RXkp26kLdCNPpHw6c44FeFT2fUH7fRoeGFxJjFXGZ443pPbksQ1vSDHrZAVRFQKdBTTVWaC35SfeoXF",
  "key1": "3wMhQdia8ysCbEfCmLSv8CRjojVv2pGWwnKGY3W21SnACTUeKjVmLvzUdBDTkHnhqjf2LFbNJpmbHcGKFMygAaZF",
  "key2": "355XffcP7K5g5d4fyXNJKijU4XjjLW73yx5gGfsawb1BEBvy64Wk7ANFymMLtqPxkiEPsSpafcYSGPPEGWdKZujc",
  "key3": "4VE5HxNsDWADddDZYK9xHtN7tyQBbnxQFKTEXEsYp1GzaDyF895C1GhQmWcyevPD7pyKqbmcztptZSky7D5uNNFx",
  "key4": "3cr4RKwessTpE3cn4HSYDpbH53tukxrGLkqD32MxTgFNxbjaVpyGKtahZMV6pUcpo4dUc48LLVozHHwZdatomn5f",
  "key5": "XuvPdjAY7krEhk58wpyxDpJabLzXaQuBfUCHSgx3mErrDQ6rWnUon97b64BFoc5Mhi7H6w8Lgpy1ewaPNaqwMDX",
  "key6": "Hhw29qrQqYeXn46MSyqSw7nq5ESCFJriLEe1euB7SLSmq353m4CnnE8pAvuAvbGmexe4GLgRrdKV6T7FVwAbBLF",
  "key7": "2mV2n3RcZgHEDmCFxUmkh4z8kZ6f7tB4edZ4Wx8i9XmVnsFa1YJQRHfw8RpfVt2AvPXESdbJdeZ8LS8NKArJvtu5",
  "key8": "BECzg6SSTMpoDdkmPPoGJnc6LZDwDjPSf2oBJmfNCav4duXrw8uJjpz9y3fa9xHf7eAf7njHqvHnDYKQPj3RL8A",
  "key9": "4WpkrDS7L5cyGY2BUyAkFViww2j3uomJvfYW7wVFMBEPCcPp5mA7n8Qc8d2nuCKnjUqUc9Ad19PC8QemJ5mhmu1r",
  "key10": "5PKW2ZQXkU1MNgGMEcPWAcZhiuo5PKZ3Q539VpiuXrm2QaJb4V4JqrjGv5PcB8F5uYyR31PB1ny7tYD2RdkM18S9",
  "key11": "5gFvPLf13qjumD5X5fqdYxPoBGsdGHvcHZKjfuoqzv8YbkFniQCB92pPrUa879Wx8wmQYHb9FC32pLMcsETcVNyA",
  "key12": "5dsg5c4C2GekQQ8bZpizffM9TVbcLSBXQnWreERCVQy8Ruuoi7wvgxAtwtGToPfXoWNNLFjaX5jk8Z4TvdNP4NQu",
  "key13": "3prfJVqX8yVVFczL69TdPDEQ1XJJ8yVuru1teGDWuGwjvtKQbbFVfXu5E2RYL95AWtLi4V5H3YnY2iyRGh695CAD",
  "key14": "jAhhjtgSuG1hyvqkT2pgpt251Pt99G29AsFUxfTTd4Zsq5yteZKCXW7P2Ayut6tXgYTSV5qF391Fvw56K1MZteF",
  "key15": "5XcRUeCEvVb5BRk6UB2B3os2t7Bx6AcUxGKPFZurCdiXAkKbN7HQjHUBYsLvgXvmU9FhLNNkVytxJMEaRAC3imEZ",
  "key16": "5EQrycBiJHZ1e6vx5eX2JJ6izXkPxiAp3sowekQMTojYMz6HenTnKnUYaGK8WV1KsTVerTUKev3cp9iy8T3dz1gD",
  "key17": "61otaAjkBpv2EH9kiqxFfBLrRy4SAUFVjWxYLtuPyxeg8HfD6Tk3SyUosHLWwa6Z2f2dtHLUVConahJ3Ztuc4fY5",
  "key18": "xQoQcAUygcgQ7FWnPKiLfCmF6qqfjYeFjtiJgwHezb4rSwDPrwL8rPPW7tCTQjpAyLFjps9X9ChGEPsM8fSjrWk",
  "key19": "5YWFVtYyskVXMeYEUnm6ahSzhrXAF2YqNYHBrBhoZrURZSXPFMmVKTGvxoHaH3NPiNgXTgcHbYE5rU4RMTd5WK9e",
  "key20": "5PxTqdrcnwYiNYfM8AwxvATfrhBvvZ3THFE7JBAd4m3WPfiGsYFb5mYjzNVBWvrxvRc8C854EHtmKStjNf6XeSS7",
  "key21": "3NYG9z4bR1peTFcWvWeYyMc8QUzMQh5hW6LAs9oJQaFi7JKjjn6KnDiZfL7wfApt7Lnbs8Br4VntGwL441YPzku7",
  "key22": "3DHLMyQqVCHFocwXsLpBT2woSfBGzsyrj7AFHFnvDobo1mBni8UYJrWiWfDmKP2ybR5AMUaAit2Q2uTzXsSFRhvC",
  "key23": "61rBGAj2S8HSQHqguBTo8NrrcPpYwn5XGdhdgJkKTcuE34U84hhpRJKtCVKA6mPkJqtjNWMJu1eBaM3wJnq9on4p",
  "key24": "66agEKn5c3VdD1UoRtZTfWuAJDczxSQPZZDQXjuL9k9Yxj9SScYiiKqNpUnUEWp7VBdfAk9NyKSRkdE3pNWCUSDD",
  "key25": "4EsuLcw4TjV5LUiRcPNt9r3kKGVxAWTupaV3YA8RhTHUj1595RR9VbNTocHU457rbz8UfuXTotqFDuEpnLHxZcYU",
  "key26": "3nc27XMGu68gjosnQBSSysLgcMd8EXbfD2XDwS3y4GcPivkf6ZZ1snNmY4nWhvgxWkSff8f1oP8p5gNFBSUdHine",
  "key27": "2GcaAMcFzqJshSyVmqVdhAZ2oKpptRpa28S43inyzHAaDETVUAoh7HKj9DaY5Bi2JL2yVYaVNec3uj4ejYerbqu5",
  "key28": "3u8w5A7RX87S3SPCxT5feyG5Tufw27F1o2JiTtbbJQFC7sxBy95FSaiFKjwFD6HDV98e1ZdkdBT9U4Zykjn7mFWj",
  "key29": "2ju9nFCGMtAFgtGBrzFEHWeR7Bp9HG9o9w9bzbdRSBpewBGQcm7EpAepXu1egeHcbvJfcwrkZrxSX6GQq5N71Q4t",
  "key30": "2yZUwP5pbY8QeDhZTo1JQPJJLTwxfy9KRiHSr4KGB8tPMmtsdyy3Ko5LtdG6xKFdtpcTUXp7SfNTUecnYb4pV8qz",
  "key31": "YtZjLeRpLjLQmkAL1yPkZMbtuDwUCBwgMu88Z8NkE8fp6aAicxrsN5SFt5qC1rFVz23DEknRAAXES1nW6uL8anW",
  "key32": "4imbXjbE2mARDVtMXvGDYDmAZkoRXiQhUpCwK3ErAu48LEjQujdApPg7SkDXcMEJkW3cZFbkcp6Exx3prhtTXtJp",
  "key33": "4nDyvFSqSpcYM4koWs2RkzqvS65Fr9sBmHFCyxGHd6GbqLFduutTCJaHYyJUkrWDqYYiksE1vJfadHxdYBCFyXp2",
  "key34": "35hH9ysxPxxEaFEn8dEb7KTTpy1LmcqwmW8zRA93oHCMysQdRmpK1Vety8VzPQPGM7QPM7fdvG2okeGYxfuHGXYD",
  "key35": "4LhrsykCuYa5s1PSU9RQ9XBWB7HgHqLYjupLu18CF4JdM88GqBVsXeyxBxVTa6u4n8Vp84Am5wHNQjxxAxkFTjg",
  "key36": "XoX37ApdWtuW8zioP6ws1YEZZyQhbdTZWjDe5pSmJNNvSqhF7J98SmCm51SS2NLUDK86P4pDX1R5t3xsrhdAXg3",
  "key37": "2U1syQZtL2rewavt5tJrJ83uwBCaDgAsdCp3yMph9erGcwFGLpfaPwTu1ay86MKgRq3i6NPaBBgHo21mhQebskQm"
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
