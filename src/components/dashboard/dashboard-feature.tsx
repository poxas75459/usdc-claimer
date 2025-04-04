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
    "ydU7eK3gMryzrwEJDqMkViVbGTDw7BVgKzPSBU6oB7ACdTsYUNgCWGJZmPzC126RpSWL8g5Uf9cmE2MpwYKjhtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mpLFwjNcKzkU9edtdxUcz6KC153pTPiTEtc8s6BKUeXPupPADQL2gWZvyw9D3nEJ1c5qgUAg1n7fLMi5Bht64kK",
  "key1": "3r3fMFm5WkNjbZA3XDEpMg14sFsswp8qFTBHzqkaTymsv7inWH2BRAjYPtV9dJQmv3dUMEcAKna5LyEwPgoQWNWs",
  "key2": "D16cYdzDpx5wUhinCv9nRgjfzxUXuhjsmLSr2XSP1AQ6brvSp7mn9CD6ZU1YnpP7Y89N3wJTraMUVgDKZh9rent",
  "key3": "2ktJJkaAV2j7hdHSr7NzDBqAwXTanUCg9n8py3QFQ2ZR3rFfFanLFgh2DzMTttarmR3kSPwgCvEoqgTkvgK4a6jq",
  "key4": "4ebLYzxRfxrbBGeTSkJy8yvKrah9ik6b4hcUcGk6Z1GLSqW2rj7oM7bWNnCkgzZVqMDYuf8aH7f2WUEomvPCFXtu",
  "key5": "TUqckErJU7oXpWXwSvjDHtukDzpQnvKYEK1GwXqEitVwXh8y2Bx5NrSYPyhk1sNBjHMCsuR1kMHMHhE5jLX4WdP",
  "key6": "5qkhcr2MEu7df5S8dzdBERf2iMrGAq7iqT3hiKVW3UFUqcwnAWRzijCzh5bABraLXfByAh4s4tUsrPFk2zWW3FtW",
  "key7": "5GyAUn2BaHtpBNH9Ngix2F71CkeKD8BYAxdvLTkoeFMW8fK4wUE5zKyDZBYXrvs21xsqbdkrmGKtwXQNEdREUf2y",
  "key8": "3ddYHjEmbQmLuNk4zjDREcZxqd8rjsADt9aELSTF7R8Kf4YBnh6Spgh56rvtoaH2jyLRJQ3NWQs8ZY8uKVJb31X1",
  "key9": "3Xh2YhfoxLVQBLPKmP7VCXQF4dYcjSz4fHZjCHD18xXvrqaRqE7TwKaPDWdt43JfBHj8dFqXdknSVVjyzm2xU5hC",
  "key10": "33fzU51sKKL7CF555ENUrWbKwtLvijj8an7c3EqJt263cNfocyB1T1NDFKMX4EvSYPcGPWPw67PEYo4cmQUjUn6P",
  "key11": "2TrCQsjdBo8GHfz7PoxD1TZv9jUKVNWxZfTd34f1hcLtiA5UJefby3gyj6n7c2GcV2g78EWuvbeGY2JkUKjyS4Ax",
  "key12": "4LdKTKttUkUSPrbqjeGcjEhxtW8u9Fjex6VkYdGqbcYWFZ1WpsfpNF2C8eJPVJrQ4H2kUrUrE6gKdJMHjJQvmoUE",
  "key13": "5bSnce3PfkLKGSASFZ64q1VK5Ca4nQeXDbbtrubBJe1PEuX8u4K7kH3Ku6vHPyEEz3fwqDihxJaF6jFkDEjfbdBz",
  "key14": "3GgnH3X1PFMnRZCJS8yxJvoWTGKbcs2QZyzyWBfrTZrKmHTjXjK8LjMbukuiAXA1PuRcwNNShFLvPaTRfHctATHm",
  "key15": "5iPNPMMpTdrYYznDZLjs7yTxUHxk6gXiknQnJFKVox1emhDEUfsDHuUk7VLEjd2xYkWoNFCLPWW694Mg5j2GUfvo",
  "key16": "3xkbj3YxT2faBvbAkQAuJNV3kcuE925GLVa474uHeooJDa3UCnQPL5GGshxQuUAqiDZ2e1rj5ae4NQg4Jbtne7yj",
  "key17": "286FAG9sEBWjvFoQy8LxkVEqDBtVsCRXH1YDbKFoJx9wUFaLRrXcYUexX7XgqA2BskMJyBGNMeYQM2DkP7PnmaKB",
  "key18": "2Bxji5CJKsAfo2fRRkW7Hre6ukJH6UFe7FpAoMyTh5eurSLM8aMyVapM73GpSaCCZ3W8FYACmpd4viMxDnTf3mBy",
  "key19": "4zrsZJ6RatdhVFPtYrQ9z6BgYgKfeUVpsWXHLo3hSpKDZzcoe2iAaLx8U8LkZeZ8Hy5U1LPMfJjbsZwUSk6oaL2T",
  "key20": "ooDiLRBA4eFofd9ZcwiGNnLqJKB4qBr9u2mEuJBwrooDmSZXjfaXMy16X9yeDnpceYppLQLBwhR5Fcn6AWEri4k",
  "key21": "5mGnQ12onkmu2iqeMNZX8hzNLs9Qyyf4FAtQqZQBBTictU5WUkFGvMrLeFMdC6BzguB6VR6jKMbjkn9g5cSVoNHs",
  "key22": "4rX6KAPgpAHuWFKbtpGYjwciQBKigvUQoyiYbddqxXjvu46bJeA1EpvENm85L9zMs62PTzxSXspcbLRkTjDnA56T",
  "key23": "35zR3SAtWvY8Kg9NrvMvTBLaJJaXi3z7bpgiG9SAYHDZGL3WRPtikqUpvL9kvSykxcjTsRhCq7hqTrFYAQ3uNPv7",
  "key24": "Qxf4Nik1xMKtWDZJY9VNTvgNnkpD6PEtFQwaugY53qR2ZvxdkbukFQCu7mi8ApKtURqJarUfneX9BoPEf3raXZ9",
  "key25": "3aB9yefTLVK6enEF9obWe5YQiGu9vrPu9ihm2a3YYjNP4FLnZMvkrdGUN8tbQZpDMYW3VDUVUmqgqoSqtXpc4fc3",
  "key26": "3zHd7MeUjsSyebLn2oaTu1Y7sB2iEX7YTA3UdiUnXKs8pBok4zUf5GhPHq2RhqSFsfAkL6kx5czEkNwZbWRg7xef",
  "key27": "4mxmN6z8irtNBLjuER3eLw7GbokdFFYNcDp5TZfs4gBt9N6pepyvGD72vsRnTKX4pWDakFGHKEP8WziUYrx6UTue",
  "key28": "3GKwkxa8DscKTyy1mJ7NsHKi2RBJenJ7KXqmhijEcuAp19Y2tPWASjkYsm3tZMekgScWQphaHFEZLRS1xxhPZL5a",
  "key29": "4QonQnNQMyqbjPtdxuoBYUKiP9ewTMb8jfUFgxuBBarn5w5TdLUiubFX4tndL9eWwfkyc3Cu8yTw8mQQxC3cZSnY",
  "key30": "61qLZ8WRVSpi5HjpmVZ6Lfd6Bi9VrzSACcwRxsgomtAFRLPHBHkKHY37WnYEBsH6XaPdf519J6vgaHxkSHNBB7j1",
  "key31": "2qsrFvVGaDL1Kr29H4kZR9uGahztAk9ZxMJDjckNLeRShWWGgoRRcmH7BoPhR6QfHcie4aU5iADE8V3kSXH5mcvd",
  "key32": "siBXdvuAgRZZf5ZHVjn9W6jMrqVavBsiVkPckw5HWG4ocbvzaAyfeRjtGGR2DesvJgRiCpMFwS7zwby1n49Ld5f",
  "key33": "5pcA2RMSqzZp3w7r8y2EELN53rowYdbC26HGBSiQ9cSZUUKqQVt7ov4QqAGTCUVyZrZJb961EM5xSrR4t4nNr8MS",
  "key34": "32YPjkALZdmbQDcRGnmYUuArG7BnDFtXLaTEwfHbyt8iqfwVfkMu5aHWFbsY4bbzAq9rSNCptYx2Ad384EEpaEKK",
  "key35": "2ixuDuW1nMmh4o9DJFNoUpmyJyAiCX8d6VegaMByaxEHPvTNggNo7X59A8x62V92A8t6yz8mVVe1hYZdVfK4gfSs",
  "key36": "5hRiuTQey4Bnyrz2PmrqAcN7PbR3tcRy22btY4kDtUMrWVBM2vftFMW35uAx4mmc93RwDTe1tTBwh6mYSXd4yFHA",
  "key37": "38WNTmGvJsQLUTGbM14p8KK8VwxzAWECsjwA3w7bmKNN5yzDU1P3wGeY8VYKHkLtngdvcVJV2tZHS1BTh2ihkeyq",
  "key38": "5hHb431FYG4QRFRjzqBAQLbY8Ugg5HJey6jNK2FvaFmPVjyWQhmV65QGtnyxdiB9xHdh4Yx5aJiS8MJ34q2uww5J",
  "key39": "P3BG1165nV3spWrxjmnndrN41ELr7FkxF6caVFVrGLpkvNBwp9dLdWZVzJRojMBoEDt6UcPQP2neb8gp82MsFsn",
  "key40": "45XwY4o6s3aWagLpefYeWysFPNoCC7ggenvNrw12jGoSnZkt7qhR9bHgxF7rSr7WpLeVGPE926LX66uL7HMxFqNz",
  "key41": "4FkucoGCqL2gHxAfdT7P1fwowwifraskVwMSVn738odUBjBjnMUguoK1bnJWygJg7vXWCVUjRoce7xT1aBuxv1E3",
  "key42": "5bCdnXoFBDyU5rbM66BrQbR9H33je5oN47mpcyUJkdPzHGQwEBhRXFCcGYMzDnPx6ZvS9j9qHsLr7DGafYyi8B8E"
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
