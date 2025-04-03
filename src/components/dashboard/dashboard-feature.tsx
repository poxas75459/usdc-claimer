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
    "dbEtnekGxur6hG5PijxU2Dobi1JuH8nuMSie6w5ApUAxpJbjAVvfiSZsYASuLCdMS7ZBezNzvTt9WtUEahxdspo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHg5wBsjoVHkpt47uTvqEegKcG93xvErmVAdGreGzEWpU8hYL7BUoR4ZfPD3b9XZJiN4k6LGbQQvAFbC2u7y4cg",
  "key1": "4VqUK9f64nyD7ie3apR64Mv15YnwvHYSYVNBL9xgBdQpfofTTv8xZwNoX2XcbYaQjeQAd4aq3CKrwx8VCsxBp5tf",
  "key2": "3qvAKkPcSrgLdrsVpMUbAmUQJU8ndSW2NfXgQHVq79moS6HzyfvRCEW3z4Zmqx63RrPuzCczpFTvndb2mE9b7SWa",
  "key3": "ey3as5g4AZQN8Xur29ufYGD1TFrLPEoNd615jkZNoB2PxZgrnxavvWPSmRTEzvV61uHzW28abzehn4azYkaSybG",
  "key4": "3EieJDsY1FK29ZMQmerbJgU9TifphYoNgjmC6sBRMXLqnee321DqZoe3cdQmcyKDUGVgPpJDPY4mkUgLDt7Ymm3S",
  "key5": "62B7JG3N7kza6KLEcTRpJvHEwruCunaY4WAyQ11yLwZhqx6WwU9tEmiqouQKfMs1DduBy24jJk975Fo8QQWAq5FZ",
  "key6": "7MrqmcYy26SWvoWZQEkWbLAy26d7uWQKhsdqHV5PBLLDCCx8wLA1P9DNzoQrBvmgvTLF9tKNuXC9FknfbDJJKjC",
  "key7": "3AT68VajuVB7FCCVFudPMAfi1wsAwLJk7C911gPMwGegfRwanRSxm92M472xBFAQZshdhNVk6VtWQvYZFxfeAs4f",
  "key8": "2ab8rk4mrPm6rnZ5w8V7WuufgAv4PUJG6EeyWPF4UED1vxNQwA5Wvap9AFph3y7pbFsDD2XXmiUiy2EzNauBVD1N",
  "key9": "4QyskjFYofm2dcAdFkkF3y3PNiL1ktAPbp1xLD3uascMuSqzyXELRui5LcCqAMWFRtcjwWvyLmPv1xJYcnEsRvJe",
  "key10": "294CzcnTZ9wH5EGcWbgKcodaw5zNvGUGu2itFbD24iCk2JJYYT7KnkAcvPU4BAPnsfviYxDr1JMx1uFr7ung8Kdv",
  "key11": "VeraZrdFPSbvaugF3M21juPrTomCpL3oBjoCK7RkpTggi7TvnoTiTBnzryDj1S6aqWajNVfgkjcXHg3Yb7Ricmm",
  "key12": "5d4LsZ6zNHi4MTqyztNtTFHYaicdZJPr3JiWqmVAo33TAJbrkkisLvzpKtyq2XYsrdjSrEghc67iQabcRpNAGHaq",
  "key13": "5wgbtJqrC7DMi32TRMa4a9ENte1S1MMVFYi9jbuHgqvzn4qRsTQCy1c1b2T4KPNVMTjN3ZqpX7BuBzX2M9j4211X",
  "key14": "3w5PYmhqywuUQK8p1vDNvfXAtXZaHKkhDyu2GesKK4rLFx1NbRuK6jomRnv5p6Wep27xS487c9Cec8qFomS9395h",
  "key15": "RJJhKHJdoNZEFi8L7a3A1JyuKccEkgKsPWfCPiC18MuGVyAzCW5pfbRismUDx3RBZ1s9sLLinTSBDQdGjFwYXi5",
  "key16": "3ie3RTM4mzRst2PPDcdQjRieBp72W4oZ83CgzHWT5yfwscNsn4w9mbpnC8abRoca4iPeQ8zMYHYuTEFQP36vpRhD",
  "key17": "2XYq3jSz82ZoP1WBeDfui9WyXdm3c3iveAjetZSxM5pdC1RdfLhBGjWZnuuxK6mmsqEuoyYm448mN4UkeRyb35gK",
  "key18": "4p78WvBsvtjSt9A35ipM9YYmtvQMrbZrgwh3A3SAudYQfgv1uSFk8ABg9aLmsANcCzXW7hNNLUfFh6CkosA1JWky",
  "key19": "65R5WNXCCeUG8fxVE3hgqHv71N2YxXrGznjCtNnLLggnm96ZjjVSDrscptiRoee7e7etm6Q5mV6Rd5mWbJDa7S2b",
  "key20": "4iUtpinh2t26aMV1ZRcpU5ALxRLS6v6WkfQZzugKtkCyuVWFF4VX2t76aNp1vfW3Yus79oKegETDr47i7PtCRW2N",
  "key21": "53RohzNar1LitvySe1ACJXjyffSrjiJHejwpBZLrFYZ1LaQaRxK2Bx7WDG2wRT7vNtnMDZkpsfQmh51oLS1F5W9S",
  "key22": "4yzoRPtFfq661a5wCo1aB7AHJgXB8wCEHYS1BC5ycqJiLLwmba6PtoqftNoJtt4iXGnRoTZKAHMp48MJYFiennn5",
  "key23": "5Q1fHzjia4rC1HRvqSy7s4xrSd9ovTAjTAV5bTQKUT2k9gzgXeDgapAdcLmh127y8YYa8qDpkmbDkm1dWk3boyGa",
  "key24": "2qoaVi3422dya7QURdzcsr8aTFjjTujWTXnRdWKt5QbwDruse2EojWrKJFNeY8LoiNngDTPEWYnMknoQVr8UrJeW",
  "key25": "4p1Fkrmkrknm8GYYqfwaV7AQov8HawyPgrtQkdzWZnz7c7vt2iETzozNp16bsADY9cQhh1jzQuNyzcfRbVAY9Bcz",
  "key26": "67PTD8wQEiYR7jwXWLg8QCLnJC1kc4ixxzsragbkqXzhXJLVw4eYTRwuAmrBnsm1pgYmpe6E5ftd5heG3dq2zENB",
  "key27": "2ujugXKaGRJFDrq73FwnrV5bCY4VuQsbi6W7SL3dhiVYMnqo7UUpce97mMSWBPmoZV9GE9eq9AKXc9aNvpHwBgFm",
  "key28": "2sy7Fu83z7tw5JLkaMrojanr9PqZtfJBUXLbvtPtuMb4xdnt2psJkKM3UpddqRLeSdSVHXYBrdUGvVaKfXs4qiHK",
  "key29": "4zoJf63c8ncfg7HYMjyh3sj1M1P1GTxBAuAkuXaekgv5VLNewvy4Q3frmEsuG4KujjPjiATyzE88LqC8R6vfYtyC",
  "key30": "itnpm8eH4fn9Vu4njybS3Vd4ZhNFA1r1mntbNfzhivsyysqeDRg63wCbVaDh2jprc7oXp2RUFpPkGAFRTfcVcXN",
  "key31": "2p9TaAYQgWrRJ8sGXfP6fHuJfyeLPqucR6ny9KRzeZ9ZtdDyNS3tAzu6mwsTSW41wXedTeEgVNKS7vhVxxvSgJ2x",
  "key32": "4YJN4v6yLT24ak5W2tg2JdGDTkn2gSF8CDj646C9LHA5QJ8W8sagwkEsRssTPhs8HqqnaTRgbf5eX4DAxyhj4nxG",
  "key33": "A9dn2eDCQv5VRVukqURz4BLChBH5cPFDrdF8ogxoavFaQPc8bTjhCtKYwGo1rESxqJN6gDXmkgFHnGuUrHnBPWc",
  "key34": "5P1nHVvM1Ysa8jPL7as8J6uF4kJP2aQNJXMzhVScDe71AHcEC11qEt9MDgZAPyCzh5dGF8RbF78kDGDf78pwB66h",
  "key35": "4wQkR54UmgDBtwzKi4UCJR8N2iLkpt79QG1h4hV9xqBPG1ZBF7GJVKhEzHSsUCU5aP47Pn5ybrrru3axfimVWkNv"
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
