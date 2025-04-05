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
    "64hLpSv9mzZsGCad3mHLLVhgWboTJsQuuRHEjEM1CeAnENcMrePpKmn8kKsnPnep3kU6BDZB96HFwNsjaJ4w6nVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ui96qQttu2GfSWw1AL4nNjG6JZhEohCtjzuJe9JJWZGac28BcFJgLHtDmY5eSBbFzwwcXaiNf6se9XxKR8XPJfm",
  "key1": "2BEwrREpeQeBMxUu56F4SkAKTMANXhnouAszUgX3KMkppwxqibG5y5XGXcMNR9NaBs9ENQfJUm2wTaTpEoSQocAW",
  "key2": "nVWxyzGF5nRhv2ckvWPHZx7JuyCEpg7okGNq9GFp8vsu6VznueVRoDyKTeQyGqGhXDZcYXtNgJASM3ypsqavYNd",
  "key3": "5sBv3FUvcveoyUyBQXm5tCJbCqL7nERmHjT98njeJ77aKgdFWN8scHoA6AAmsTDeXi858dXLKoABRDcTh1koJTvi",
  "key4": "MLQ3dWDjeAFkgBiuejbkD97dLZZmHNW8xvYcjB8LZD71BeJWN94kmJhoB6Gvc8y5c7geDc6MTR9sJey4FWwc43F",
  "key5": "4KAiViUNGuSRD4tLiJcXrY8zp21T2F8aTsFAkdgCGYLsN3VyZBpowYzh3V4kHkjnx2PkTXabeFJ8bxiFh5vEpsic",
  "key6": "4AFn2EWc7HryKxivpP67FZKMJJJ9b2DzxMf91Z9VxQoq2Kx7E4BoGgugvYi65M6jHtHBBAruNxTgv1iBv2wWrhTG",
  "key7": "82K6nufQjnmBzKn1HyRt7LGB9UZ7nY49V7dUY3insgmSzpJvLZ25SK6sw7LffLcrsS1tpDDu8S4b5bibHCYJB63",
  "key8": "3MvhqBxuveD6xZgfCjPbXTXy3JZZLvYtC8htPQKZHec4h1e5rhUYeFysHmaTSDTqhFBuEeK6zCCrq1CnFxoBVB2X",
  "key9": "Nogjq8bmMJHkxvHrEwvRQmk1sd2TPYVc1nadwpatZCRWAHcFL84Qdw2onwCV4L1xtzVbr6yr5fs6cgCnHwNxtmD",
  "key10": "2RQL22s19szL4ZG1Q5ZnVAS4jpGmG5gLrZfNX2TQbojUGSf41fSTFphX9n86P46RQBg4UfUJ9uY4Ezr2eiXQxwR7",
  "key11": "ahzjPFxaYgYoo7sGxs2tdzzszhujQfhHqtbhTNSczEM9zFpC6pC74cTsb8FFkEHwWFT91RSDzyDXCZ3k6ZLvAQE",
  "key12": "2ppCixGH7WFpnvjLBfpb4rmcshG2BCjFiM9pbRRjnztQq8JA2GJ91v8p3LiFuTZMThdvPDHeBPHMTvzT94nTRDsE",
  "key13": "5gBdLv5o1h3P5oYxyw2VGhqWie34HH7ZFpfB7dW9BkK8ezFHjKqgHjZdQxoPqZ8AVNDAN3gvjWKjQZrEWD94mCzK",
  "key14": "3fygH82Prcrdk318GTnDcCAwDBABLDpmtodWP2exTXFGVosJBFmR1dFm8V4kXzEpYbPgeeJPVc4NeAPGsxKFwArY",
  "key15": "4AM97xSzW7u4sYFiXDA2SjhFegXVcnULoN5iwVdZVP6uX7zJBCntzUZgv6J37qLFneLaV5AN8tfxamt2R6DzaSjz",
  "key16": "2NKWHE9GriocjVArahx5S5HrbVJS7vAvNLMwqSFGCrULrGvzWogxK1PxwyhuaE6pDnoNkaF28hp2QviYeioiYPNe",
  "key17": "5HgMsTDCiiYVKLFsDUhDqE1xJg9K5xXL3C9jkBWQ5HQWx3zk1LuYS9AwmYbKL8GhYyREY7LKMW5cyrt89hp8DRA",
  "key18": "5aKkeexYSs3mJoHLvk5w449gyrYhM27zmAo46ni4Wgm1pFKJGEqUeoDxZRSKNaYgoya2uqJ7ghmqu6S2ED5WVv1V",
  "key19": "3dLBM9akMy2wsXsf1uGkr1hneW51QukCXrrontRhg3hxW3LG28N8n77QLfvQmEmsg55YbohsA2vKLXPLHN7XTeRL",
  "key20": "61QfWWDGTEUFnQ1jFWEBDrmG7hqmbeacBhonbCM9dbwByjAeTNB8BTNwcpphTYMhipMxaGr1pRhycizzgPW8N9xd",
  "key21": "4eaifLcxNwyhqM8LCa6DrBn12fi4WCLXHXiC6cckk6v1zKJuTFdAta8Qxyuwc1BafKmvfmZUyxwF2WAWpj13u5Z6",
  "key22": "3G4W3znGMpCLq2GP2hm3hUjKkoUtDpnuSso4RP9inowk6hsxcF2PnosUim73c8YLK4rhKcJAJf2LeDuGwvBJ1Zop",
  "key23": "1roefkmwtbx35Kb8ZmmCEpPLYgC8zTBnhALGQUgKCm5T9FzUPCrsA6k4VLusJkswGvDAdfmYKfPtzTM1XqNChX3",
  "key24": "54bdYPxkbdpDmZGCRs8BruwSFxgNFU6H1dtQPjwy8LGHVM31gMM87GJGjyGurmf9CZzAM2w6WiG1cNbQRwJPAGhQ",
  "key25": "Er8jzSQk8t6cySxBnHi7EY3tmmnf5ZMdzUVpyUSqaHjLrUudcV8MrwjWo4VqHLRidtD4Lw32Fc8Vj982fr5qeEp",
  "key26": "3yEQD2sgxNQk2Jqh35cmvaiJL6Hqe3iQGsqh1NoNtEsdWduP4ygn7sXmvqPxZN1BKwwBrnPor33aJ6gtT3kEZvMx",
  "key27": "3U4a1NNZoo1S2aN8aVxR3aUfKU4t5yye1K1VFYCh6TMG4X2FgKrpYc23nzS3jM3v13TRBwYuVpeUcdcxRAV9TSNc",
  "key28": "5ppWEAKnxUbwJCPog2ijqPbGvak3dKVP2PRCbRuzUwqNNLmMZj1Af6A4VCDHbxKpnSCxYVtq7t7Lkd2DtfRUPKm5",
  "key29": "4B64EPb4moWZYADFsrTUSMhbfy21iYqT8gEh7qpzGW2oPnVHKQpci1t1buo7znffjnbPJY4QSQ49iuKee6KNetAM",
  "key30": "5XWwCX97CjbSmMufhmq7Pi558bNXS6CJzagEhyTBQEuZs1KZyAoeaCuaRG9gTBnZsaMVWKsckcx5BjFqA1DNziGQ",
  "key31": "rqYW9Kk3RmCfpLRp9MTfRxDiVm5QwTnTFtLLjJER48N6m1fakiMsF9pKmLzRmEDg8J6LFTbwdE6CYrMGtxKbAy7",
  "key32": "3Rcvwxus7LnMnYWfxspFx91ZMqMFUfawyedNzzamkJwVBxjcNE3bymVZHUYGzrYvBPkvLZPiWZMJ3FuRtxRgsQGQ",
  "key33": "3ohUypN5UgPsCmXfHWMGpYZxaYhPUmYL2ZtgYAHGSd6DPme272MgYgkvtoFdobcJpnQiDns11BNw7gjZgoGs3Uds",
  "key34": "3a9FvURsfLBg5MdLKoG7HFQrmKxt6PC4mMxGMPqK4XBh11U3uYdNs8kiUhFqY42yzDLs6de2jtx7Lrud58bkVzM5",
  "key35": "3DS4tcc49Kqf7kQuj764kcdmmVhu5zzZ13hkBKXiVH7mA7GLQxmFuLknCSRX5KpfXM8A8dkbdvrPsLaJMrdwroZ9",
  "key36": "65Cuiru4vmZNYzuRuSDZwaswvsNjTZS3n6o8YZQuPTGJhHzqDq8a1vhPPXysVhgExRYMEHWxFzVzVKKWQ5AHDpUr",
  "key37": "2FVVahk7AhcR6vVPDNrS9FinQdJmZnW3uZJCwcgNdLkYYLixaZPUZqp6zU74xArfWWw1RqSBE8rKAL7zZjwxjrVF",
  "key38": "5RTMp8YU5ivDvqkMbRKyiVLdpdWHuUxxYAbf9UkWnPGnvgoUAscSVsWCJot46BUdYp4HcpYHmyAX6yVaBaBEwnwN",
  "key39": "2nDSwRMtp4dB9GrPXduneYTnwDqsAWKJRddGj4CvSx15Dd8PwWZ1PkMY6bvbkTbg6VTk8Rwh2oGw4GGULcgmMFZQ",
  "key40": "2PPEFBB3ZSz1jZR7u97VoEPGqxxfKKsC7pTjchyzawC4EUius5hx1z6UgteNN7CF771dxrbzJmaURPNqsTdJqCtF",
  "key41": "2NZvjbMygXzEaLBDmmJyFHhBEEdBiy9WrByGpGB8W5xUYDGNLJrHvFMiX9u4HBi3G4q68fB6UwcSwbCbtHMQbtx9",
  "key42": "ob8oSCTmmNK1JXvMtgHgg35BjrxAezCxDH7Dukc4wVi5siVdcMwxCD2Leeex3oNoQ3ug3Kr8yZksRmR6LnCMbKJ",
  "key43": "fpVN48FHS9xvZ5ZYt69etgLpCEWc7aEfu1Px163ogY4ELEVDJMK5BLwFLp9yDfJfGaE59Tn9wanDQg5SaCTPrqk",
  "key44": "Xun7GPWcBFAhF92UQjxpz2v1ktBRjydrhEArqhoZtfQcxDPRc7VdSBLT9RBHwrdtSxRpTMsCRKyiBDCHjvHb8kQ"
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
