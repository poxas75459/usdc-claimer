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
    "3Ur8nTFDsKwxkwSoJMYHCuT6vyoGUTGybkHt2G67CJi42Ci2nzaexQLUQ5ELuXLRny4X7mtPoQK5k9brW376DX82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjTARTYyGbvws54KyQwqkos6jqFnBk7fTmPkzLqysQmmypMw8cNAHQeaXQo4qr1kkHMA2AGiW9JhENnQqBNA4jh",
  "key1": "5apPhNYRzZD7B7hyHvG5spr9z7WGYrZ5FLp7dAREQccx7pWASsQZYbDncPVdadw8aiVs6WYDUgw3mKTFFfcJbFqX",
  "key2": "oCi3DxBByNvutVpCLXZa3MhwBJKUSgTmsKFYtmFJHKwtkh7N3SdpWNJGALtEWJXMREE1vp4ScsnhE8DXSiKPNVG",
  "key3": "2Pwp9vyLKgarPBS7GtP2vtLmcdxoPWHHr1cFEq9FZ4wmTwMBrnyaXLuQHXvCbGjyC4B2wxV3nE2xP5QyJHFQitqC",
  "key4": "4cTmmFsQG9fQwVP4SQr6641SM5F6J8fsWAVEWXDBkWc6Xymk71fPQuJHzrezNFkwajSPe73BLVtPenuQX3VEMcog",
  "key5": "5xpmz1XZEwEA4umUNjYQU9U65nzmEeT7dZGhTrJxiKtUiVV4BAywrEELdJnVy916LTNfShMv6wbjtDLgnhxqNyHt",
  "key6": "5HKqwgekerFioVV4iivwqmTuXc5sYizRthEmym7g7n2E2ZJNnyCVhrqGrMK4zrsoBXDuLAFNqJ8xsETWTiU3sxjv",
  "key7": "2t3T1RuzAEectCAqXFkBx2BisuM3e1doJkS5VyWtpzZqGbJcBqHiemQ2oA99Qy1xH7yvcZXkyv9BRWBfCWDZaDo6",
  "key8": "4qQwQMvxrd6LywJYaKTGHiLuqHH6WLZRhHEk5ktQEoUoqQEmR3CTzjqHejwcTn8UuqFVi4JkkyeXA9s2tXwDKejC",
  "key9": "5vhcom5PBVJmmbUYMsLNAPwLmsyhXUE42B9fCWEDekBoPvjd8XFwvFY6bEh3rakLk8EzZZXMeLpf6Yyaq5zMUJaQ",
  "key10": "3M4uTtLSafdweXBoVghBGxCQViXWLr5CriBnMBwMuhuHaHcTXCg3dUs8LyuDFnboJUbsZUzNBLWHiqBcysEPwzxG",
  "key11": "wmjaspjYRZVrzUWqMUx6FVJg7NmiacAu8d8yWyV4yHnFdXrTVEUTRSGHvGKWzjzPyaZhscviwAJNHRkPhm7Qv9E",
  "key12": "5m9pCppHhXGkksynK4uUw2cayA8WhzMvSkNcVwnm7PNWVgQTP9vkhcKPnv8VPTiAc7BqtDrS2MYtNj83v6VZgxx2",
  "key13": "5QPXSGUL86GBBGPBQ49kT2voukccA2emVvjL9UmmqH1XAM8Et4owjT8uezNGqL2aoRo377bRiwsQM9RZPvXA6sQV",
  "key14": "26WPMt2spAm8HUsyANrPP7RAo6PsMrZzfTaPZPrfEZKXp7n4ZoHPg6ppDEY9RbHvBfxrWr7ZLpBe5kATqE1PnJKU",
  "key15": "3oC29vaDzRQy7Ttn49Fm6pBZW34wHkEQN5U64zJktJEcbD6u6rPgJ7MePQyv8hnSSa5FHeTjeHiX2FGdcqFSohJ6",
  "key16": "5ohpF6qYv4ouozWGJszfpjvvCAjXhW2PGgoccpkFU8NatP2n5a66gS1jVcnmBs19WdvcWLqK2VSeKVsjSdxXV77S",
  "key17": "2pLqoyCS2AGjdXNVNkHL8QUsqhpCqYmhhqbakyBuD9PCeogeetvqsXKwBoadCzMRP6a5CV884ZounhNzVZP6YKn7",
  "key18": "5j2MWXH4ZSAtG3j5HYYr3bGdcph9W2VozPJuKggfSGTJZuvhsLbD6NAxUMtptDSaC1ZbWbGpSGWpA7GbGJHFZq7A",
  "key19": "8q1mFCJTVtVZexYNbTsVc7VBdC8v8xZCyem6S2Jx1YCzubkkDvBww6NH7WzGxRtPGbRHhNFUs6z4rUtoLTAw41r",
  "key20": "3Y5Kaiw88aijvYxPbCUE5oD4P8JBCriPZf7yxjkc6L75ksFyxU35mPLXviteXamqbWyeNrQMnKG6nSLtZozDKFc",
  "key21": "5EcZZ6kWes4VTVFSCVeShjqWp4zTU6DxaY7v6XBnmFMGTJHXC1EDS4GFGAUmy3oxbuiJcW6HCAcKFDotdmWD5isR",
  "key22": "52MXbcCpLcsW3ryEwQNtKcwFgUsfGRQvpP7bwbPkpBFjQ4nb4NNdz1axSELErxnA4ss9GHMW5iYwhrxQ3zJBPLZD",
  "key23": "2ykX6ox736SHeRSr7HLMnbY9VN8QZcwrsmHBsswoWQb9xgguKfK5pnhUdXQeEuCsVpWv7S2dTRCuXWC6wSGcLufj",
  "key24": "4akMrrToUwd8seddFAgfXiDse83Lm969Gjvjkpcp6QFeQEYFqgqPK8Z3VKkNoYgu9tcPA7qa6EymTUJyJ9LGrkmX",
  "key25": "1gnCAwBpt5mfugZ61kA69LFZR148dFUnecADm8RnzWyyg5TFHipc4dUWW2Y8uRf4dy7ZDTYbEfftuCxa9msA64V",
  "key26": "2Uc33YbY8k84C8tTM1j4D5xT4ymdbgwpfPzbW5hs61PT2pxHDcayaZanbSRJvuaWErzKPua2wWx57EhNvwuZn1po",
  "key27": "4LKpixiPKrM1GJds9gWPh1Gi27SR2fPkh6rR96ULgiWLQEsLZfyqjYM7qiy6PNgAcxBoPDRmXK9ZDEFViW4xFMXi",
  "key28": "BEiM5oNmmMj6X5cZmqhUwZmgjhgseGKJZETmWSUHKR7zP8K5rXWZhtBJW35kBMXgJae4m1hAiCF8prR7zRPn6Jr",
  "key29": "wbpkHTryexTYsjcRFJMbhHyFoKKFJVeY12wiAt4GsH4W2tbZiVSRDssQMYhwxeTVTdEHdyVusYi6CA6qy43AjBv",
  "key30": "3WkuRYySzKHq25nrLvk2zkzEo8EAsrSVi64ASXa5v4r2H1qTfGXZdp8LzXKTgoRj2Ho3Ruwsm46rjEx78LdQUDMK",
  "key31": "2aCuraLyf54aXoosZg4Qk534Nm1L8ZU5C2RoMMYqN8KEgc3hr8yZwTrdSJFUEs9SmRrvhArym8pCabPq4vi624bo",
  "key32": "3mWnsLUbXPtbMhoszSYZUkoestjVodgiNq7WcheMDehQ3acCmMFCutKiam92m4YNCAfCL2QtUZxbArMxiTCxombH",
  "key33": "3j41jpBE2zSDAKtExwSPsabWkMBUmykDVdEpho2MDJJeZ44uZRxnzAbmHoLR1NYtL6Pn46UWFTeF7Yg3z58noWt5",
  "key34": "5pXgXjoAWE8yrcoiV4M1qr2U29fuNXezVwgomwyzVXEgP2CZz3rLjmSKeL5ciPQ6oJvyBamr5JjX1NF9336LvG8X",
  "key35": "2j8UYr8RDpamaZpnikZJNwBG6PHGrSCBXwMBg43Gh8EdguAz9nTVDwoc93PbL9nSYRjiDdQoLsHbH7UU3ZJbMR4s",
  "key36": "aYmGN1BoSUZMBiqYNdpESonp4R7RbKC8rmjScGmdnxkmehDUhLy1Avx5f7UeXcjengwFAgeBV37V2tWZdbATD1U",
  "key37": "4fBM6BMowXp2RDyfQCGwUcJqKioawX5iFLHFMYJx9vJjsWY3dj1r8M222aNxHBVKWVUPuBvfppoVu5ymFbite16Z",
  "key38": "5KhVfkcyp7NLrKSHuWcMVmsmz4Jmg6vX1ZASz6Y5qXJvhpbSyWNCMTTxT4n8CnCLe6tCQHKnoDLV6aTXKhAmTnic",
  "key39": "4RrHMDyEWrps2Tgtw8Dy4rYAwjrAoeBbhMTRAGveCrKqjwKK2chDBr7MgyAMPXUQspiRD35Jiyn8SRVQmJ4RJoAB",
  "key40": "2e2YEm6CwFrguFczvguLtG3UpZBau5WzGJCwA64hG2h7t33fTtx1QvXFTR8mEsPsPFCKyhjfSqxbt6kFq8jBNjPp",
  "key41": "615mgFMVWSgBopcvngStvLQuKktWCzjknRLAay79bDid55pyCpQX7tnxVcj6uK3sutYSkhs7qkGPEAfLsNNgZM81",
  "key42": "5ahxxyijtn7zfZzapmvA7ihWsU1fPfe281KLEgoCSwafvn3JoWsPHj77243ciSTUZ5Xu9CfGwvTefWUf5pJwMNLL",
  "key43": "31aHQN5X4X8x5TUWJQwfeiYptCHTgu8zp4e99mNMgP2dMuSUU7vMY2YZ5EVx2JH92hNpfzcerc9i227gnRbpSfDB",
  "key44": "Dn7naWCqDzfUsthGmm3hsBLqcrGkbwXza8NiW5XJGqXEg98pSFD4b9D52mUND2BerucbAUDNQEnRRhWFNC47PdF",
  "key45": "AJTguqCuhADLJHqRFzekP6xVtvSWpz7u3HSxbD8fLWb5VymiVExHEghfa8qgiodY2t58JjAY3BvHtZWtP8x1oxE",
  "key46": "5XY1Lsp1pKoohiHtFrXWe2N7MfQPcmwubAG8XJehhHZ6BQuMiYVmx9sxxWRhbYy1QdP3TVoo5N8PmrL9wt3sUwD8",
  "key47": "3Xy83KesfdDMgBwGZX4SeL39QdmYJXG8H1t6k9yRBuPT5GFTeGyXvJaYBBGPZDNzNzXuYEVFyHiTJnKaA2bqp5Fc",
  "key48": "5fJu4uv45cRVBA7kotvd3Y74yvyZCLaQzVVgccA2sQrRhHGMEWNpuwqvQYBfEoZ3tHAvckGBuHEFYKWMYKjxfUyu"
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
