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
    "2dmBMWLfvGVTm9uwxQLMmLDUzYBUeQcv9nMhXqAtXYrmgKv1HV7w8EPn4FUDBRAmLM3TmzrQUyCoqH3DZnqWQhmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mo9TKSfTQ6986kbMaqFVkJxLt3MrqXh1k3gE4Vw7XLeRLh5wzHPHy46EiNc44E3gu9UUESkEu74GA4RhA4DmEBM",
  "key1": "5PBkFxRPyPHbeaMTCWq4BGF3yXsyMwsVhgjrSDy7w9Mc5SN9H64UJpRdAFE2J7TDqrTsJABb8zmUky8oziBoykAF",
  "key2": "5TUGdP5VURFhWDN67DozyVcmFfCZGsMwt9ByGkzARtjsYFXU51X5wAPwQQkhXpccnStuoqCAUXveRXDEs1cQ2m3q",
  "key3": "q7qF4Z7M8iHZYTSQ8BgoGT9Duy6B4pb3mP2edn37vtLa7UGFDg76KVUaFLDQ5Bu68PAtLr9d63ZAixqP48TFeT2",
  "key4": "bfCeEBk9EdLhxVQA9SjXeDqNZHvyG1U1Ab5EAY9BrsGTFC9FeqmCsnXGtEh8CvCUHEhwjJqeyAESJpeAJvyZaFo",
  "key5": "3bkez1vW13VkgCN7iYnJFpDxHahTzskbAQeYZ4kBS8kdvzccKtyRmjZhPR882hDEsRp4m6P3FCrtVzFocQNBbXWc",
  "key6": "35NaL7rV26Yz2pCnuYDptNYNcSX7UAUQZjBUc1jviGd37RL611JHBwN43Qi81Wwtt9etvtc9xzju5jvt35mTwXKP",
  "key7": "TxR4MgZXUmtjc2Ku21RmkHtEEFbFoXzvDqjHiKXq9rqUme5MnSdp3Nk8uftFtXwrrGw2JB7JNy9pMVTKhMT1kuJ",
  "key8": "2XH7kYLMUFbJYyMM2jPdA1Zfz4C4gRs3PvYHSrbW69F7pZLvUYxMGXDkTZLULB4Ph9uLDNw2tTEcdQyEpPbwMrbc",
  "key9": "5wonvLNpWm9b3awmBt55L1P8hsf96sg7ruBzeVSMhEeHvNnbqS9FdZAxM5w3uH9XL6M2oWikSCLqkwHjA65BkmR3",
  "key10": "4TBRCovNjoPSFMdCX1FYAg1zCF1RSkyvBDFZMpHy5mbKWUo27M89ft9J5LVsad9kWBbCeDgV6UXoA7rEsWCYeKrE",
  "key11": "3XH6Sbn4CWmVSnZ7wkDjTaqsQEQPSeFkSQ5hhSBpqiGbc2ptQkriSgtJ8qkJpFzESkgRRh3YFkgf2ebEB9HhND1x",
  "key12": "NwxWhkJxgA4GESQwNiZdDtLUKjigqvKCVeSqs9FV2yKFevJKbi2ECrmcQZU2LtFhrzbJ2MEDQJNX3fLRPExHHL9",
  "key13": "4DAdFkNCx1UcZXWXYaU83K6hjdKoPhV2YmcDP6vr6WVY65nxymSir4KnK46QNJB8L1A5iWsLY8jDXvH6jmND8ouu",
  "key14": "3WGgvPniZ4UBgyYZKd7468wJKRLhrdnsyatoR6gGDf5AjBRAoQ6VwvXXyyhkRLvQDcStuQNdhGEEuerpvLJnPSpU",
  "key15": "2GNKuwUpwrSubkjwEz9UhvvmhofTuyMSWY2px4KDrtT7z1uc7FwkSrmUrNiFajzCgFsLUmmdoae7DUBw7X1uUvhh",
  "key16": "4MxvHBfhkBKbpiDQ9Ln8SddPA3kRWbds7pcP7YWf8Hg2zce6yFSoM8FuQmBHp4k6D5MyJ2FHjx7EuLpjqfjiDP3m",
  "key17": "ZscctqV62MYKhUXrkKzP38NrhLTuB9B6HTWosFPs58zbvnaYaunorry6VAebB6ZK2ndHYG2wH3Y8X7CDwuCC31n",
  "key18": "5AWu96PBtLc6CaptoHj48FscjdmgoBGodRaiemeGH4D5xVZiS5SycNk97ypnenyLjHoxXsyergVH2KHwZzYqKnZ7",
  "key19": "4kFiH8LxjGfw9csamocCRWuvKuzPgo6VU3nFYXiJZVTfxKWtCu7SXWAvFmERbDiKvstk3KhkvMhoav3RoB2eq454",
  "key20": "B4xU2AbmGepdgwwEMryUfF1nKaLuKR1h4pjyUWQcVAeQ5g7FMLvzJ7kz32WgpTwXPxnghgpJ17vSmBysQ5uZqT6",
  "key21": "28RCJwYhgV2jACLXpXSzhHR6j2QcuMVYWffmSyBENTpgqGanYNkbppk1zJ6ivSCoScEJzSU6zKVJ9giB95xGZUmV",
  "key22": "44saktfkvCXNkzt1hwSeNhRBUjQJwgexu3dGzhnvsrhUa4WXqkd9g4DfSudLxaEoZ7Z9btbPcy7rzYykaNXXkEdv",
  "key23": "5nucG14wd4JS7Fn2PuL4P9HkhxBYCvRXVihCYHjci1Z69D9W11NHAdZFnSzsbPHKDqsiJhuJs3pfgkmJ5DQDccj7",
  "key24": "5N5hVY8sdAZvfUSUaUk2RiMKvRo4G6btVagYuijpVBbpTyTG2Raz7aMXj2hkfxQuriEA4D1mcNPJWU17Ei2TKjGN",
  "key25": "26oBXu1SR7yGN1PWAAfH3G6PWwwQDzLJgMuQi5eHapWQwE8FZYQE6v53Mbiacvmt9fkNeCbcjwPoh3VXzZqGKtWM",
  "key26": "2kByKzDRoRE8xkAu6F43trzATnzUmHMUJwLf6hHs4v9dP4PpMBMwGrh1xn5oauugot8nJfTcpUCyUGYtuk9Zvym1",
  "key27": "2oNP9L6DWiEYosHkEjKoxQ7ZANGXXbjhj3Rv6CLRN7KsNiTAQArBnnpMAFzjoXcKi6Qt8bPhCqgtQiVpQMUuNix9",
  "key28": "57AyWc7Cs7vWQoqTY7E4MuU7juE7Csaj2jY9PH9izhmvE6E4oYriP7o9aMB7jGCwBn87pSRrNWoKQuitTCGC1s6i",
  "key29": "4Q4LQbZGKqwQu2RYemgFrUsYZ26r6FQxZaxdUyLZSXE27diBU4rqEoeo5bZiJMNjQ1y4SKBguUpBeroTwhJEmB87",
  "key30": "4LJc6oqJ9Hf6ZUnmM7UHM9P4RwRsYYkzrY5NqXA9htCTPSbuZJBvFVQNedH6ULPCo3CtY9cEFgar9KH9PNLSAsta",
  "key31": "2aqGDUNjeqJ56gSmZsTvzyrpiETmoYa8GcW1DTkxjJsLewEFWr1NgNRWKYRg8gMvBaCU5uBQdyPhcQz8wKtRYLu9",
  "key32": "ymcSyrwsdtwqrNu8hHDqunNWNf65PvQH8bkKp2X3mgm6QoK5p9UYdoKFAyGud4EugsPqPhgqRE2QtQYiZqbryAe",
  "key33": "5Z4kqv7iLKhGvZPrf9Q3J6msDLvxDG4anRnmMNkyXZFL6F6smh8BCcuvszA3sAHaQGyBXAWasaLhuUn1PKf61npF",
  "key34": "JXu98ZMP6v1B8SPzo1dDQGAYYa8AowSdrerC4UkWiGbTczoXST7dMeCTCtm1oooFhmuhkEL8mDd2zQPjMc2KHzf"
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
