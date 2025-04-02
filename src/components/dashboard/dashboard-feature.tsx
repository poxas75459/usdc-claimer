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
    "2ZNC2fgVhLFx9xRbd7GmQkxAesXMYZfMDRe42QvKynx1APph32qbxSNaKPpD4buk6fgo8GjbsjJ2aNYWX71Bsx1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KWmCMzZt2NVHTAvfoFC56fKpKrjXNeBFpK6i2FLqfSujvRHpKzQFgYgesov5qXgNxA4Tdnmw1zdLpa9faSEDs35",
  "key1": "4TTP38zbA2JtEHQLeCsoP7tzdCQZgE4kYcDyzPMVF9JzkuZXLdo4tYZ2SCPiuuFnKTUfQvuXMTmtLZQYi2cqUrsQ",
  "key2": "32qnaCBBzXxj4qHtsb3F7qHGbgMX6FgT2qgDDo1iBoUvNZfnr5zYxx6JnLtCgVZJmuFsaw266GcjsNA3HCVjLeYE",
  "key3": "4ZaNSqZvP1NVXxeqywhZzpRHnFD28brSg4dzNW5gpFybtgMLEu1F6VMnVzeC44cYgt5yY7S2NWusZjyvJM382srT",
  "key4": "m6J7RqdAWkYrkc3wQuG9ZbVc8i3grMgiAm12HmaRWAgc8JtZjqwCv8kEsb8Y8rRCY4Xj87pFQsTgCjmnH8TNmV3",
  "key5": "2eXKHx14vvYWiVD5oMT17WvNURpaGgtAFC3GSqRZAhjXKVstkPzyfcpGH1KVfhsF4omkY6wuQcuPwjPFsCtMQLoN",
  "key6": "EkG6RPtsWeRdqMMtUHvyK8F5NsDy38q41KoQXMGzFL1N7e3eGRX21wP5WZuK7THgZSytrk6aumtA1tDBAqC53Br",
  "key7": "oiagP644PJEE9YNje6XNPfhFRxcuhgG2EhuVkfN1mWfwT6LUKTezCiuSwTMvhbsCBuZfXXb3T9YbmKP32NPCwsn",
  "key8": "4iMDuKMULzRNoWB1XZvmg4bp3zsvq5WkrrrLpX4svKc5W8ASG74foaNPxRZ35LoxvNbRnZ7vDhepBja3Jr391Tnv",
  "key9": "5iRPEQWsHXK39qYJoR2dWsi18WoENVyzG6WNaZsiwaBTWT4rLAMwZPPvPk7Huh9ZzfqsvBkNYs66Ajv3VgzqP74U",
  "key10": "4d2YXPERcot91eZPZVyQx6sCMCtYVJNV11Eqp8JiWUXrfihQriyVRjGLiBc6CMGo8vys46JChVq5isuYXX3Rcqek",
  "key11": "iDTa1t1noNZJmVDXgm6caYnXExZ67ugcWjNzcj1dwxk5RyEdLAf2Ku4h25fpaj72cgnyEvGJzSStt2ezw6NnBNc",
  "key12": "3p2KyKNgofjZtF6oquFfK5WKtrTLjGqR7hk5k8aZXG3hswUFRMR6qtoMQcGEMvaKZZeMsXSKreeLbwZh2GPqYtTg",
  "key13": "BHqnzr1tEosQHLQe9AtAHAFJUoLCvpswnWcfpmtQ4NrMbGaY8RK6chE62VyqnDwR6APgrBEACpBoUdPMb2dbzqB",
  "key14": "4T4ZkAvDHR3ajoS4CtAi1fxNg4McfyGVeLGmFuT8bsmWjaP59eP9KYP9WvKt5mHpn4D272HmCtdn57zVnEVCy5wh",
  "key15": "5gnw61YZ4ASgE5gGnARHb726U6PVoeLJPDAVApcM9FFnGCBkD5iL2WLDeWZn5ijxYUHcHLiuKWq8NFJZzrro2RKE",
  "key16": "4kqtnk9eaBb19J3vBvDSU514NMVQrha1hm9EqxRTiBLRyPmthUZBkzgYAtfGCyJ1FBAZ5fuNoYN1ZaYC27ViDiBz",
  "key17": "4LUHEVnNwSBkqbeUkVXcRUoKCDLzbi4qSZSFJgkBg7BycGRxwwVa2HgC9nkJCxHEe37RFFtoEonhMqe2M3QjhSL2",
  "key18": "5mPbdBEZ2GunKKKTxCrwyJJN5fiFw92AfAJVX4UUzCPvh16um41chR2oLoXRLSa8TY7JC8c5HW1UG5yapwMmKFd1",
  "key19": "5U6fQuHAaPWBo2JMKhgWzzxEyqzmvH5iG4iBYZMTSZdAF9KYZ76SQDfYfKo7DhA6dhpokE63a6ASQeqNWF2BSFCU",
  "key20": "34s4ddUGonFsNcYHvp7fusahCBEYjdnqRvcarPg1SQBXH5pQojSUEq6h3ZZesKSJQg75tjxJjj4aEAc1jYdZr7VC",
  "key21": "JW2vEekYNEPxkJJjxnSexcQ7CbuaFHqsRrDF57DSLCfpwMLiAEBYUdvVfTDf3a6CjiozqwR9BGcFSrVH4EBmxQH",
  "key22": "XrjZPNjM8CUu1FunpimempX6EnGiGGZpCTX39hn67hs5pTCQ821i1dT22kZ986eQePJkugnSZ6zQV8NuxmeqYD3",
  "key23": "39MyTntkhMAL4g2rTYuzMYqVdqbsTHu4iRoMbVxH2k51Po5FKZDGg1MQUAbLUNHS81hf3ktDCtptdwE3tZis5qr6",
  "key24": "2eyAXf9zjGXCoKB4inYYV3cxm5RNyNHKPMWJk8Mpp3hxJVfxGydDSQJd5PPxYrY8PdvC9h7kSunXAaTzuZZFxQXi",
  "key25": "2f284t9mzH8mYQnqhFLG5XrFLERmTQkU1oqUgKk1YF4bZyuJDH5f38tiJqxq48ETfwLuk8GvpFZ4LuRCcBLJAAVe",
  "key26": "3qVNqyWGHZAfzQqqoBhDDjsGNDpjQDBNCejmyKUyxdXWKoSWi4p74jyUWptP7uWLiSTS6t4fiMrMpAkforrhcpm",
  "key27": "y1CbxMb7B1v7TW9W8nL2BsfEbJNGMd4jMXvg6cTxzXhu66Ex6gz6hzf9xExRbLUTFSeD1oXzfGoa8vyU3QjSERF"
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
