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
    "2bZqN3ugiuHwbJLtohmQA6jdAn9zM8BC7tUR1ixVwxpsisQmBLveFpMLQd1KEP21Jj4AM4ERdfDW3e4Lw5Tju24b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "76nSxSaiaizp6n23BPuMgDttbLGpLM4mMKopFbxf4x11DX5DPXhE8KZXnw18piZuyyozibZckc8HnnxV5FSN8Af",
  "key1": "4MeYrUSgavFgQuUUtaZrNuSoEutqjDfhCv6jBwb4md9toQqzqBxLUfCACkqt6QC3E5wzgsBpfMnbxDo88MARAMKi",
  "key2": "4j9zDcShCedtpAttuAx1HCMo3ugDN1m8CANZ9QsdR2BMBUB6rbEqox8ihXGj5rc4fCkRcqo1rtR48pETxCwe2aRB",
  "key3": "2cjCf4JZExvz5ay9iNK83tDXzsGkjsU6LP5bAASyEMBf39GyKP5omhX2CkUNXpx8kdquqfNoTUk4iY3N1JuEmRpt",
  "key4": "5ujUbcHhCS35waCsSnCSNqe6doM4ZrX52D543bgHLEHxJefSeaB9HYLuDMU8ST9hYkEHsrbNyYoXYMtdQjdTAVJr",
  "key5": "2vGGBByqzujUK8fCdp32Xd1wrZs1vw2BXZ5n88a1UvX4Yzd8Cw1BcjhE2w6KWG15gy8pCgkZVvQCMejYnYLExFxG",
  "key6": "2HF9v3MjFGdFcJLqGjMcwX9RnKmtRBLjc7G7YAFaNLFeHjyH1wQGFQ4hTwa8mbPpyFb5PfJqaTmpcSF8ciPo4bu2",
  "key7": "2iFyk3vLx6A22NBNDPwjTEHLgWQdWV6kwyhqAStSnZ1JQ574uXgfR3puc6oVYtkj8Kxh3XASHw2BdkhP7xY9gYqC",
  "key8": "3tmt6PRaRS7rparPDnhpu94BRwVrz1mQ6qpSXfhVVRbR7xNjGEuZKUdswgCgVxaN4AZL1PYukNHXQRFkDozbdsJ8",
  "key9": "5P4m69iBVyqaDiBReymKwbk5Az3AXBoqGRC8tRSrYMzy9zHSJi7vjhKWTVks4in7dD4kY1F3FuAFmNJ16c1zvyVL",
  "key10": "3NRiV8FMh8GVfSEYECts3PcFbFb9Rgt33koDKSNGNtnv2S51hFKy4qhGLJFTpBsV7cfuQNxjUTwjNekjqmWuY7dg",
  "key11": "4JijFexB5fm8cjQL3jrqmbpUZ1s3SSHkQ7NFNfgE4xKaC74uJebf38fQK7pUBq6SK34dVTmZ9t9cMDqJnHtHXY3s",
  "key12": "1c18Td4oZ2w3vHpNLYabKvDHaAjgoM9c87eu15exUP8WJghbjTu11GT8WdCC5EWcX8DLyAb8dWqB3uD1sGaVJXx",
  "key13": "3Xci3xxPDS1szH3sLxNR1gpcEJgQZm8FBLw8o1QVVk2twXbmudTpCFsYGjQaWPtnVMpdQWvPYAoB6T7Mv2Pv8qps",
  "key14": "5gFxnBzzfqiDZQcNCX8wu5X7eYFteKc2Uu4ZrsGZJpLTHMxYp67E6zQEyUqbe7af9T7JkuTdyVvAVYBWjTwgas7t",
  "key15": "4R6MAG8baxXPPBxt7XxFbUe5UGgWaeB9mctxsit2fAv9Ce7YRGUNXPb5GWmB8beLUHKP55rJqzKLoMtaD6z3Q85p",
  "key16": "2YdwCWmCUhkdA37W6hhjYfxfmSjDDtis6bvMet9P3tzrjWiPZtCg3zobWaoPMe3tvJ8aRPKdpQbJTNAAB1F3h8jC",
  "key17": "J5pC3ZnJiopMaWiuU9bmgj53VovPAd1oPVvotRdKk5dg5pWBe5rxYwTJwKGXK2FwgYcT1vF1RApAVNUrQLSuKZD",
  "key18": "HQQUiz7Dvh1F1zyQeqzx5vTehgVYZUXV2FW2p77aFAZnLdVHDHSoYWBbCWZGaTM3B1FmBvQUtg19iWA8Km1VjhC",
  "key19": "4DVXd6aSbmk2oKVKux2Xaoyi1M2Cc72cvyUJ9134eAoSEhBp3SF88MUriVNcYA6XnXQH9BkxNekxAhU8ZRYJfgSp",
  "key20": "zCqyWM9BMQe3ASaShx7AXSBb9S8mLgL4rkjg1h48tyTHYQen6bJPhdkmZsDGVVzYpo93AbuKXHCaga1FJ5DJXU3",
  "key21": "37tXXVKiXPkS4Uh2JHugerzArnt8b8REuXVcEEJt8f17Q1yBqtmJv1zgDuJpR2ihbvFt4qjsptj8rHmuXNEL13Qs",
  "key22": "3vEiJ7eqTXCMR73UZ3aDPrGa2d1rtjad7nTtM5bJYekGwQ8dgTuBMx8KtKhraNdCiUG3SCYcpcv3UQgb8rAvoo7S",
  "key23": "5WLjSJU4oML3NfWRTd9ovzKzJERsM8nqNoZZPMocgKHVXRhxQq1A8EUtFmU3vpa1o4YLGk9iwPJwHHQR3c9xE4ds",
  "key24": "3rcJcPQu6kckdAbpG7GUKiV3C4ASiiF6e38SDgAPhCMMNeoirYtbBRUEKnf1NfQNATS79uWBuGdbNeVsaxcFSxn2",
  "key25": "3bFi2GAxpKdtSZJggSkca4NRaLWU7ZMfZgSpjUtiax5BUGnjGSHFZh5UDxNK5zt58YSm2GrLBEoe9BGNvBxA5Tvz",
  "key26": "3sUo7Fd5muaYaotENqz6d7VT9xKyj6i82gFJHjV5kfZzL29dZRHaEqctGYg19PjJdGfCgxXTgxwDR98LM3FvxA6p",
  "key27": "5dH9Br6HDjYBJs4A7yFEgLQVj37tXiegzNADQnrwepSVpXHviWu9Q1Egrgv2S1bQpY7Ae1FJ5zMrWY7oyQ6RWsWj",
  "key28": "4k48mhsk9q6oaU52SqtAwj2LuqdFaiNkQY99QSEjkbygfuV3Ae1S42828jqLHwFsf9awdKtHpHmKzCY9cPJPu88D",
  "key29": "5qJMi7pry13sULamwqn2sQDWXG8np1JHQHan2ojD3gag5WmqZK7Aysu8mMyDnHY1GHHNngGNh619oZ2juk734rnc",
  "key30": "3JrXyfCSksPnctRjRQJWmPP8ZqBEP7xvyekXVjDz5JwTqvnGF2ydAfs3RUT1TEafiGxbxEbjbPxwbyA3spSokZDh",
  "key31": "53M5mKP6fAyFiihuXo2BQLYsm3Jn5PvYFCHADKPFoNmEn451akPMW6zZtzsMztksTuqu3HLZ4DA2v1o292awVCxa",
  "key32": "2xJK8Q3qdf9MEXo8RABwyDU9gDU675LCsSubMJaumd6nsdVvMsgQgYBPD8147zgTqH5vd7ouaWC6Y4ErxNdK4di7",
  "key33": "3yV1WvmJtz9owKS2bnzFFm3rtok3rH4vcLDpMc5bSuw4oAtmFecHz771oT7u4jLzAgACVEBMVGutuJPWtdgtYK3i",
  "key34": "Uj9LPUgjAanAy4GG1AnCmDCVZxWLvRdRHXBFnTEXyLNN7Rew7os3yTrCyRTZfTVfzDrzdDn4tzCqLzKioXyHWPD",
  "key35": "5BmTU7BAqoLiz54NpyLDHN2mJikDtECXft7BDPXwEdMmrK6X5aHTTsGaZze4Msy7RfYE7RhcQPb9P3HsQbdS6dXo",
  "key36": "4HoMwk9D6Emzd3Wca3VghQsdmcmRYi12KwyyXNKbwQCTaSLZVck5qEZCp9Lbmc6boDysbPVXookJkZPwUXt9Z94S"
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
