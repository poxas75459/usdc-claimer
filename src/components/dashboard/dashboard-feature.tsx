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
    "4P8mnAe9KZ6W38Az7bYFbgqbpCNVdm6mbgh5kvfMcKCc4TsEEjRcU68vKXChNQ6VtJPFwsxXmPHHysuqREZDJ523"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5c2iTpZgopd5NCMJFb1dPaUcxfE9jBm71nD1zoK1Q6qYS6Ewv1SLhtKm5Y5RR76UE41ELqx2SsdMkbZN6HPAyR",
  "key1": "3zkbdykAGHfL3w7r61kXdsPwieBHsvYv8YLhwKb69r4Ba5CdiYkAvsSqvN1VDsmv4zd789MKVWMpCHBbDgKfW8Pc",
  "key2": "4yzTcwMsbhuS6rHtUEtJmQg3qytzPLGEpNjPFjgD9GKk7n22Hst5uFhXEqBKmTT3D1RVaVFnN7P2rqa6nh3vq5VS",
  "key3": "522PF7pwpfiGvPPeTWaMw3hNu6JXNktzJWaskiUBMu1DCqfkAZ9JFad8N7FcBciZ7yML6SZnAyTuQcV3JpHctS7V",
  "key4": "2W3TPWCqkTbz7rYNUgrHYeSoomJLZvwcq3oHY8uyLYwbqHhYGizegc1LQJaJqjHFkiTAJuqzGUPksfru4Ku5a12M",
  "key5": "4noSu8jBnz2JQC5Hoei41qDEes3CwMQtoA4vqdSwvDWWLR1swwvgRwUxmn42HfSw6HMSrJJtkmiHhjncEVqUE5Qw",
  "key6": "51xd6QZHfmtgYR9kzDxL7EyvsCdaWw66YSf2tQUPpoWPvB96Zo3nRjqvrtsSrY3uSDC5tYWiCVenpMwUu1Vy54ZV",
  "key7": "qmak49zcsisNyomitz6ZigGanZxpm6TGtfkJezukUCguRt51cwjdrziEaQ1uMW4cyMjiX7WhkDVXWkoX6WRThM8",
  "key8": "zET69NdMPVZN4wgxPreRE5Jm92MzfK6pXniL3Nt9kTcWZPrTXPPUb2GfiCHPYLtfLMWB2VQjc1uzp2Tp8sKts4u",
  "key9": "pNJE8mdn7tZp6zc4QusX4VpVftBDF1taRv7CmcTXd9vJ1peuv5eQUrDjfp7Gvp7xgLukBUkEAJFj2w2hRYFZU9v",
  "key10": "3KguKaZSy8L3Wa19vjzVPztgBg1sCtNULKTHvnhwNKf8gLngW3FKYnHBxqWc7N1b2KxLXXoUdc8DDsHzFMvtSo5U",
  "key11": "bgmoQfaJW75Hz2aRcrQybS8YTLoq8qr3DTy3LSNWSYEAjwAgchP2gs2RvvNLhDP3xYE4FeMqeRt3yqFtjN2u8zi",
  "key12": "2SA35R9jFSBz3Bm4Fcqvn9CvZRG4wqAY7L7MXw5dK79TnK9YqNzWKJwSX6rhEJpAHz2Mbrs719z5TjpPDHW5UxVC",
  "key13": "4LpxddVfhrFPK3QQD214nuzR6PyFTTNN88ZaNsKhwtQbTHNcyJtyXB5dVgqz7asLqJv9nWbEidXn5PXaVYPiPhcy",
  "key14": "5bkKt6Kw1mL9Pb1eqHFHQyj1r6CjykkBspwKUoWmQGLwN51c2j8Do8P5ZmRch1uocZiTE88Easunfm17Pus49Ekj",
  "key15": "5sZUGf7Wh9YjoyrSB1Gb2UBump2g2ixdpbcVTDnJkkJBbMvuySrtvdfecJZCeYycvVHg2GkxME8vmP3KEzuPzxNq",
  "key16": "4Ge4a45HAqKvKg7N5SxdrRTe2bBTwNma8QBx9srg8AzmevkfJsBz7Qov1fYzuxrCW4B9yM9J1KtcVgws7Fdz8Jjw",
  "key17": "67gxQXm8oLsksE6wvGwZxMtzEJu37LBiLxVHDsjUJnXkKD6xeGK38mccw1b1t8YMskdDawFYrd2ySiNr8N1QLhit",
  "key18": "3pDJQdX65dZjRHQcDgCRQChfqeuD9cKHygtA85eHMdTB22Xo2Peqgp8zqAUyruoamX3Z9vs4KiVZ9dboTgLRVXQa",
  "key19": "412kBpaYU45DZ2vQER7pF8cWaYhsi59N9NsTqeSuSzaR4hXGAGvL2z5QL9inM4NCj6CUzgHCFvugMEt2ywdKbxmY",
  "key20": "2LGb1VtqXp57BjrmyCKxKyikBJPn5vBRUaPkaah5uweKG7hCdR7ySMLHXVtvaxNk66WjW9T4cvNNZc2d3BfFGNWV",
  "key21": "186NWkHWiUZKdRrGZz5FLR9DExmSJWhShjqDiAzdwECPK1v6xNvQ71tVSPUw7DssJtF8KWc2tfNi7EZMPNBJYEY",
  "key22": "46rnRTAPgsgQgdGuhgQyG31hRnCr7LfptR6UvLn5NxDwpDyNkFLoz28wtKLv3b9tuaVRjjiSDZw8fausy2nDZB5c",
  "key23": "4TkJHFGS8ueei8kXmfbd9Myv6gzRFeL935kAZ88t2tEhXi5fXDodEEQ7FtHYwsvHDhixBWZaPStvsVTevHeB66s8",
  "key24": "42MZH6SpVy3sSyKLVpy2QA6hVH1yKGfCEYCkbNa96uoB6Q1MAPBDj18YF2vAtSrqSkTL8sZUvhMvmToQxXRTxbTm",
  "key25": "4B1JSF5tbSKg7QvT99pNybe8QUbDWUxaswZcphwcruetCNYQT1AMJ5AiVV79nDt8jRjpBKQQDP4LcbBaPbbh4Q9P",
  "key26": "4Bjeo5QKHshJaFwtYjXL48M1ZgYmtG2gTyfX92ziXtjvN719Urtovjbngk6MsbcwGrEp6zgpQkUFpG8L2osC8QaU",
  "key27": "3BjZo3oqcq3w7rJXAQ1H9NB2Pr3Ns2PswUWCYrUqu8Xgy9a4iCNpcKr9LHLh2JUZrCA4g1xToCKrDS1MK55TPDDv",
  "key28": "31M4eEGmbZVQ98iQTJTRUpWnckxmuZcVEgyRFsiQcPjFv1Q56CqDH2nj1FYCrS7pJFSP8RgkNRAzNc4bNRJNiRpt",
  "key29": "k4Nu7xBrtNo9MQsmpbAsCSYcYGMreZ4ArvPw5pb4m711kVPZiFV5m9wsRaMXTytfoQ9GWp2HTKfpBB9qz7YKfm1",
  "key30": "2YfZZg6YPKS1zfHBdynNgHiGvrh2uc7J3563KgT6jPzTtBuzLqLkMga3mV5EfJxyG9SLowReTd4PDtqdm7vXjv2J",
  "key31": "42Xx5umKtSWWkK9SDBQ6rYxWkDv4dRpv7ttzSmpv7X1LGDyUUEHkJTg2MmggXzfqSQ2Ttsrf2tSt6XBzRKWfrw7y",
  "key32": "5Sio37X4xAf4mimSJEoc5SLBANbxaM5VPh2Me3SKjo17zzKNAwTV5pLBZnvW6Ha9p6oe1VjEu6baZbEXiuG3DN8x",
  "key33": "5ZR2zATXpmWPkvu1nibeQJxQcCDZZbSJDRRUjoKwJiKXaft5TPvksTsjdsrA6b19G56uQgHaptrKg52RmX5Q28Nf",
  "key34": "3DCno41mSKShsAWR6hVkohicX3VmfqjGcdwHqp5CkyiH5TZ3tiQU4vg2d2ieWeMmqKeAT5uhwjGMxz3u81trHi6f",
  "key35": "3G4rvyDWajS77dDBy2PdjPNDBacrrPNL2aKnZ5EffFqhqFLcYKimRYP6k2xqpZQkTBg1d5GFZ2tm7cA5UvhEjgTH",
  "key36": "5VnHNmRZJS1fExbyiQzBTESR2qekX8jDaFdB28t7uGTEDVq2GVhkyfwYTfsjywcrAnJqZ1j2fYKRVEDK3TubeKTU",
  "key37": "3xGrdhzNevp1pAy4hAChRZbPEz9kPnha7uqRNCxaCaL1pDuWD3zSqcTS7nsHwfSAhRMptPKWJkWHtW8hH5jkgHbT",
  "key38": "3vQzQ4awWUoWzFJhNJJ3D8dkipuK53bUsWxZxeA8VdzsyLVJBDm9D2t7UruuzvCiKhKFrejU2z72CxcMtjDN2f3q",
  "key39": "3hPDREbgVZjb3zt9QSbPjf3ZkE3a5R3ctMVmaHVPE7aFPBpTuQ52EWo1RjKeBQYhrEuY9ubCqmz6bpN9T2hAJXu1"
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
