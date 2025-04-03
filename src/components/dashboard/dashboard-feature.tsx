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
    "64vL7v2S5LbTiWtEhPYQNBppy6HGiG3RQ3oS4YWbek9PcGGCPaA4SuM9jGUcPCPoxUVYz2LaQ7b1VaQ7X5ww6tvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExKCkoS7KC4R4yEDdraW2mVFbkxgqWvmhnmSr3prEBs9UK8ZQTNJPfzxQeoDsBEbMJAMmbjzE4C2QeEqETCbhMz",
  "key1": "4H8YG4ysfN7P9u3vuWMaJGv2hFApT94oSmiANZyFqYnaSVwNDbbEUn5VuQmY8XVSv1SyKr5pWGWVDU6KWyz999fq",
  "key2": "354cvUZzB92t3y1NKLxFB9Gwx4F3U6fEZ8KP6569YSaecvgSBxCXhKwP8HK9RxZnMRXQKXEm867qyXCnNWpUipMF",
  "key3": "4Gv7Tvbrv2v1C2ms6j99FH9GVhAeyAYocw9T7V16ynfTk3SGbUH2iVDVjR4XGYrPwpNs3Von12rHPaNLhZBVLTNq",
  "key4": "2S6Bidwe41QNiGmZB6y6p28WW3wBNTcpJeoNmKR47hptfbJcn6oZ56xZZdAVp8ZV7FCaH3mm48g2v25Y3wskqcLT",
  "key5": "2L5KjqV9Ym7X2XeCtb1EU8FtVHz3TP1goseawVsRWYAQBqPhMj1Mr3C9p57Y5QQQcr6Fk6ALRZHPnq8WDM1Dauvt",
  "key6": "2MvjuZ4gcLCm5hNyjNresq8TdBW8fWupQuUpdVdobzTUqsnfxK38cUboH4X51V2Bt3WxPTHyHkaQ23fDkVv9VK1g",
  "key7": "2YUbWgXXmpRVMMB85EFwURMnE2KGKLoLnuzb5QoFp7itBanAqLsHdM8L4kUaFUhDmQFpfocvHzvUAhpv82KWo87A",
  "key8": "3AtswWaJ2rk4Ln6BqBHLFLXWvqRDm83Ru4qAtFnRBQLtA7zjgRPGUPbJbsARJSZ52AwMjMuHQhLcq31EGYxojRgA",
  "key9": "4BQTMsF7DFJiBvQo1ZCjLcQfHmjUEiYi1d3XjEXbpntH6wJoFzdwH5L61zkH3NFV1LU3RBwTs7A5hdiD8RGK3idY",
  "key10": "4annKJvePy6xBiuKGnZrHRUxzSzd5N1sGMobmUj85gBKzBBYBCJF84gaeM21WjNXHyXuuGoKRv1Tn5NeWfU2Dx9R",
  "key11": "NsHD1xsxHK9Co2ob2AXi8F5SV3RqrzzKH5kNYwLTqnSSc5wQKRDfBJuKd331VbNFHgXg7dqtC5Fb58Qmfy8XqJP",
  "key12": "4xBViRoJdqZsbUf6Wn1v8UCxbYkn4yuYpLCEPA3eGTCophStGzLwVeMpePaD2EZ9C2qs9tqHdYHTG3zCdNLc6usD",
  "key13": "64Nex8CiGq9Z4bA9KHdbYUxyner6jWy9LS3nnWFmruhdQA4oFq797qzjhANJbsLQRoUDre4ZPfxDjvnE6BCeZyUD",
  "key14": "MaGYGFRSNfxnBAWqRPhFthrNQLpyztYMPNFTbP5FfL1oggKMDCaoMAYmqoA8HbFsmPGrmuLButsg9xcJvsMCctc",
  "key15": "5qw9QmhyY2VEje5uQ1e1FUrPMux7ahXYLPFZYGnbtxwHQTtwtYAJJRrn4Yq1c1BFZUkbLUyZSyP8XkNtmSBvYJxk",
  "key16": "36EXs1v6ufHW3ML8Z9reeBL3feh5MHgCmYrtZFXPMwyxtgKotdnQ3pXoEJhhaML4VhdF4YBmtU3weADVeJBA4xm1",
  "key17": "qqn8sFXHXcckF1iD3kWJA1nXaEasoeSLmCVxuFyZ47nCtyMtxtPbKXK8VfFWvTSJpfbArb1VEMHdhbUWjdAdL3n",
  "key18": "2rXFjTtAYvuwU7mAHkRJr41JMT4B7WZrAnNPzYgEXhiBfvexEpizXzFEga6iV1Aijvu9Ysde4X55Mune51Zi8ZPg",
  "key19": "5iW2KZPtT6zQGCJMMe7VeN7MtDQxMaA1gtxrejjGUrzcP8WrKEmApW2kSVajzKDbfMmDhUYjbhUGDpv7cDYeMdPY",
  "key20": "4DPttksVNRQAi7hKQxjePZLwuwpvnDRKeyuB6gMkKBMGA8YQdZnfmiWn39LkJ4SfJQ266pKksVPMeJdGre9vzMJx",
  "key21": "3jBCdBucP69H7NHvttNWLoc3E1mhAR1wktQ8pCzFjYKyzBvQiCCbjQ8R1YtnrRTZh7aHgxcnVXu437hj1F3qZLHL",
  "key22": "3FXTwUAP4NirEanSg5DiurCUGhfq4HwvLpuKyPfkW5JCYGsH4bTJecdTqj9A5bqBLudMttQgDUn3LTqkWqSjveHi",
  "key23": "44XzizYiZ8U2JVVCV1HqdKfUKwvBzSDLNg5pxqcKKuGwLp1GphAVV1XEsnT1niJ317hBKyj7mhxgsNXrWq7KpTUi",
  "key24": "3yGRT9gchqe2N3nGVBHE1qUDaGphHRCZpqAZnRua1MKC7KwRWDUfHsUYMTeZqfVjc5FgtJWwTL5tubQA7tGRpAGv",
  "key25": "3DtxF6fHsJgSzs4FeDtB1Spcww8Q2hKrFfEaYTceDe1RBmU8FPdvbT2QfuxvmTmYj1X4vH4PFSWUipPVvr11wKsn",
  "key26": "34nMvQzboZsFhm9YchLugYLxrqEjPcsLAgVbPgzEMM9k5xJVfy3vdeqjaPLX5ceJMJKEnMphB1aMieJzGvqKYyfG",
  "key27": "3HUkbaVfj4NqfPqNu9qyiz2Ka5RMcc4TUM43UjC8hivoWpJx3XTsLqV7HUByrpvsNDKX4mF2uzrAZHprRi8nzMeB",
  "key28": "4tpgUC1AhAnZCT44gfyYkzvybkQxw8p6c9kczmss9crhY7giLiNvXFD5fZ6Js92StPAvUfHpzY1ppFKbEqq5Ebeu",
  "key29": "2xWBySezPtRSTcvDxEYxjyvXFjZHuR3mpkfL71hZmBKHgtRPN8xiv4N9LVoYHQYzgwE7JHDKEtmukddhXeZypt5G",
  "key30": "QpPua6Yvrv1iJyGpPFjyXhMwMjx3A1HGmpYvhwJafCAosJGRfmRcEJaTkut3yQTzoCW3X1QNeeivNByiL6LYSGi",
  "key31": "5yt32zkhreN1U49EyuLhHQYReqB8TFt5r8iuJXSjqRbkR9hopQ4aVLtt1t2DpBDJa8nJAtfhiA5F5EYTYp3JoMWg",
  "key32": "5YJkuHLinPXUXFHhHxkHqjzK9jVv8XjqDP1LhZsANU2Kz3exs6M1VigBZcuqZAZptco9GKv3Bn3xTnr6VXnQZ63k",
  "key33": "4H3xnqWadkNVLpPoqhgzXDvy3QmsFPdfW9eSenp6xFmDsLN3GMbRJjichkqrLCVi9Ky4MGAaNyxJSCrcksRyU2Dc",
  "key34": "3WFyB374gknmAfiibYnc9S7fMKw2JLANF5U3JgwFEraTVm7gekgTwbcSUCZZq5Hw7wZivyPyrvVzCJZnNPs5W8xX",
  "key35": "2wQUfyot9BMEPefMK67rZFGHZ1tJvrynV1opAYuTiVG5g8QK1a8YVYFAmqrgMeLfUKsfX3i4n9WDAosKCAcj7xw9",
  "key36": "3WNW3FqDo4h8iWZxs9DZrKhism7dFx8LU9F6gBivXHbWj5YvkTLX4XQaWQYj64p8kdLyypzZQunqJGdnqVNzU7jE"
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
