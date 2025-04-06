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
    "44TgxtcbWhXgkxSL1VA1oWKKjLhCj7bU8VC9rkTtdyJ8H6Gnh2E1sgt2p88q72nizmTCwTYQyWAstNJdWQV5X7p2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E9rMG5b8msM65S6q2pwcqtUKjWBLkRKcAZCmjwMXSYQ16s5ub2qAVsRcx9CphUSaSFPNYbAmj3XvCHApngGPTRN",
  "key1": "3QJKSzdxg16mgooNtWw7wSNpWecuTuYh9YCRL7qNssgCgmxB3SBBZLpiiQkB95AGZM84KqagxmJgnkPN2qBg8wgS",
  "key2": "3RwFUAf2uFiBXKxYa9QKVofQBKD8WT2vRSgTM6gUTZUCu7Q8g3UtzpdqZjm8uBRwt5j9qyECFG1V154pBuGwCfYQ",
  "key3": "5ikypNytfWCx7HGPMUBusox1t4RoaEonRcwpz95yQDZtSh3kZb1BTTeUCgzFyoau4egQWQ5XTGbK35spKbiQAH4h",
  "key4": "3cyMRavuABLJyanVXJoSSjvvGgspibbDYrLubXdXKAwoSfyssC7D99BXijEXpgFRR6SM1UWyhQRdN84eFJj2r7gq",
  "key5": "27rrCDnXqwua9SGjykfYiMDNQMq8wrHkgNNgGsna96MkDaZ1nANRxGbRNcwBvUs6D7JkGGS1Ytred4REbzvjo6hv",
  "key6": "3GUcuCt7Ahk5QidKFtAm6g1SsXGkrKWSuoSaWxzrucXptXEkTJmZSvSUB71AusoTq5QgT4QHXndjLX9KjDfW9QJk",
  "key7": "2EjK46pMV26sthgFfBRvxAEujoQbfDZKhciVBXaKxdMCqTx1H6Cgk3viuwDeJWESPqtFaQoVwAXJ7iyXm6kSmQaN",
  "key8": "5h8xDGEuzvKoB1raxRyngpwAz16LqNgDhtcMtoveixqwTRHXc9E7VyK3Dv5exP6qWpQVBCQirUo8dFL3vFtvLLa5",
  "key9": "4B36ZCpqaQr9LwwwKicFTDaMBcM37eTfnymB4DAf7nic8xzWLeF1pq58HJzdV2KJrHb776c8nM1hFqBV2zrBzXnT",
  "key10": "5XDvKUZVR4rQbnxRqxTRmTQGFqDB2kqSHJUrspdYdNwGQn3iGQqewisMd3Zd4r5dH6GKZYkLpCntyLXWyum9bg42",
  "key11": "4FaxYPUDLe3F8dRxTDS1aD2MsaStUnib2PfRWLiuFNFDUtQvstLtmqPDQaEQdVDAZqMGXeK8L8kCufYxc1yoGEPT",
  "key12": "3HrW4v7q9yTS5XzJ5kEyWyTmTg1z5k8pXYWPeaQ5xVzyc97GMCa33YBhaXTaCh7KtMGfecLUCVHkwG6oCiAz6zfk",
  "key13": "3Jm64jrq3kPYpKNaP7eHiT1FpSzQWhzfKAzHLoy8UgsbmhAfcMCnxedLXWZAQUXJWKXFFo1efRYSmLtSCCcM2VGr",
  "key14": "4LVB9ry732Y5VHtJxRUHtexWHZWwH9JP2hfgpXLkZiEKMRzyhXZYEKBcMfcGssKYLgWSoQ2ZtjMJT4rSzWFJGndi",
  "key15": "AibJUHvaMDuVgwbFFJf7rqFhomUYv9NqpxWGH9PRJZzwxVFetXKZQ1yAzV1Zmt195TuDm2PQhyWgt87oxpvXHCy",
  "key16": "4vhKJEAqC7Cwqw2HEvHmeXpPCKDkfb8Gw8eaNkxUjojZEG4Ak2HDyVVrRLBMVSJY2SKPF9kL2kKU9LySkTwitbvf",
  "key17": "4uA4uYHsHRDB1bV8WJd92n1zP3nwjuc61Z9YPXFFDKkhK7k7Ze2r1Wmbam3EsgZYFDZXHhBPHbbtdTwyDLeUQFMC",
  "key18": "cKdDnysfB9pScn3ZQigqDnbxVVpUgvCycJp2fHSAsFqZTHHXzGnjs2b1b7AyMcyN8kAobPVpUktYhfErvjA3bhe",
  "key19": "2tEFTgMEtiZzPiWZt3gpsR1MJe6Zje68hLvRj748CfUTX44mAoUA6Q9vvLRhNMweNSm9tZxvj7SaujLPW4eJokoN",
  "key20": "26ZkhAB2sVm4WNnFTddGY3aQdAb6SdG4KD4sM5vZYVsNbYSNZpLFh53CoTbkFPzgC8BUNCVJC5gEDoUjLLZNTrCY",
  "key21": "4p3soFY9tkEeL8R2wfzcmdC2HoAZ6UciNyKDaqp4TuPqwvnbvjeNBzkBfMLTAJRrvtzEiXGW1XLgmksQzgQGvq6r",
  "key22": "5MP83gRtFZR2zvKTVAQBsenPKNDJL7sBYN77jkwAuDzPX69XVYq75zx881uzm7zXVvvHtRfvSY4wHfNnRosbyELP",
  "key23": "5RUZqnds6BbRUChYWtcGt9RUmEin3KMt9M9VSYzntMdn5h1t8Nrmgur6BosKUfCUUFfaemquQoYnQCDEvTu38Zbv",
  "key24": "4XMK2xZq6seA7XfuwRPy3nZUwiexQU8iCSvdnTaRGauhwAH27c8DkNAjE9tpyQYBxBEG8EsMBSwpQfzcxBCwa1wz",
  "key25": "5Sj69hFvkFk77NjskxJSsQGxXYnqUtqoPM5uoyGqzPWRenrfKz9TquVH3deXZxyzTutA3PVZBCHXNCvJCq9FRkx6",
  "key26": "2NGfQaGAc9UQbeMCGkpghf4Syaw3HAhgUCdG2wikqB1hMXBtTEZ3jnNkWWxzQ5RqytcLJ28HanL6atx5iCLRrAXM",
  "key27": "5c3ny3Rrkqw4ZbyQuXMJkB72JLehhdgxSrcZqKGUSCPM5iWMfKoSW4NTg8kDbcCyGgas23oRHb8skGBJ3X6fRntS",
  "key28": "2dnHscfP2UD8A9XxbfZTsTBSt1X4XxLt254HTh2sNPAKQmJkrFDafYayMgGrDLppYjAbAvBzC7LQJkErx75ZqpyH"
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
