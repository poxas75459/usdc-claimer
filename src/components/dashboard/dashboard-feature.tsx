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
    "5odu3AasainBfVsAok4SEgLuv8YvWJ8c6GRqJTDtA3AeeshfBKuJw1nrj4LDvGHn5aF8MxyPocYr9YJgAkLRJ4aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2frvvKgTW7MzYGs7cJt6zDS6bwTxW54hciHH4CLBkUDXAt1CLtMGrdSdQhXtx3NjcUYsj9uqktJorxXVFYDidAPu",
  "key1": "5MCaeFCSpuCLkjALg38hGgnyXVGQ4DGJt7hoSAPC11ff1uYbvPpwEAiPJtDfDoohmWsGvhPfpexTnQkUUJH9ampH",
  "key2": "pQCYagXfz3YgpZ8bTYS96TYyt1CsjQj8Y3S2efkHdbymCUXBo1zpbJ8ZpGxmuQWPhq9enK3nWrSxPQK7ppGKdya",
  "key3": "hjMRbyPjDUU8qbhb23CjHmGgYkSqGGUphzXUnqfJcrGpCwb1mZDCjwrhdQ8BL8x4zYEEfFX3un6nTcTFPxZFtUD",
  "key4": "88WZ8RHFT6sqXrUQSY2EYJE4rXnpviquof2LMR3A2dVygdPymeGhN5q9z6GC4zUs4TVtk72oKmbg53z6QvTvUKv",
  "key5": "4xeRjw7tWvD8BurEaxYuZg4Raf9e5RwPgCKqT4EXRNpFgj6dbxQtzwBmQTSoCodxQeRqf92DTUTAn38v2KCGtBrw",
  "key6": "39Xxw2ViJ3jZ5XMWRHpX8cWgHq6M3428nQvvgdhrVu4Vs74dpaT4RJgtE8KoWts9B6iMQcWXYSBkY4xmGX59vG6Z",
  "key7": "jH5rKnytrvjaSyAtahkwPAF9aioSLcx3Ri7vbjuNL2EBZJPeVvdZcASgYizHYq2CGFt61b3iiRmkg6SKZLp85es",
  "key8": "2vE2MLh3zgNZF7QPaJMHEXbYWPKxN3mVGXbLaDo6A9jfdisaJ9uTVNBhMpAZNrY1x16HJF9J986SfsPiKLZNLTxp",
  "key9": "33UieuDv43wBhYWqK7VR2TBzagFRuXGeq9TtNSCLjzSPj2T6YAUpNzySQTsDmaW2w3QBPxY2QpnWcMa34C2YPevN",
  "key10": "3JX7rhYHJ3E2Ti6U7JTtdgUUeXF4M1CwaFGMkcbDeuaT1fW9oaV5cNHzeFeM5HWuocoxURkxhZPRVN85z6jnCTpT",
  "key11": "31jsm6ACjs6MGZRBtFHXkdFkEGmJkJuAxTowecAfp2vx4WJuc94rMYW86HvkuToL6UsDbcLzdTD4VLoGNTmnS2Uq",
  "key12": "3eMc7VRhpjvP1MSBWuLJsPQh1JF7hQMTyC3P3r7bLsHtJuRVfBnJYEpYKo6V2e7QBMh5jBHNMQfpqQZeM4PcNKLd",
  "key13": "2g7B9fTGGK4G8hrMjgkLrL3n8g8mrrYMW7ChCPPveBGt11245BoQv2epwh5wkN65mAruJxiv158BnmqmWg5ADHKb",
  "key14": "25BMcUAKyhgaPHNLvU9Frn2f4EC5qsUtgKHfbpjmQe92ZCnhWpg6QEMbf6vYtggNdrxEvFnHwqsAYFyR7EnYEaez",
  "key15": "5FapkEyw2sjF7b6wTvRGzvGcGTJN9xCJVnUSN9QECAfSkMUPZW6A8A7486Ui3zEAwMguyNttsHeQdRk4RoxGTfjt",
  "key16": "5Gn8RFRGkd5aKsLCWpiaa5YMBaS4pttRJNWPffwK1YQD33oFdk9P4ezPPVA3amTVKMfctz8eowaoRpNAEohJM6mD",
  "key17": "5oMq9Pty26wCC75vmqvTXeXjzgSnedCW5xqpygfBJyt6Ma1RbbMJ55SxXeH75DuPWTVBY1necq8WH9nMnPChXakM",
  "key18": "5enEAnQUXvGaDPAgP85MXSLQerjmP8Zk4tYLkRmevu1AEAikgFzQu86Tqt259rmwsS4etMj3YQAWAswrHmVuoiUD",
  "key19": "3zjG6R2612ukkMTJKHPyoVm6QngQ2HJq8o1rExBGTGHadD1g1NSEsZ1Q7EnQCexUVkwkoJqJC8quRJuhb9PZGvas",
  "key20": "5hrgQrpLvcut3kuNDg2uFqL66vtoWGsHH17fRdHU99gtNWBS9pYM1QPMd5cimcfzGwvBcbdiiMsyitUqgtDnR36C",
  "key21": "3jn5eTpwAQ2aTRtFiVyFBPYWt9cJuNrW5noGxX5xeUAdZ3igv6oikq3zMCFufMQpLCio1TzBmYwSiRBXBpxLE2uV",
  "key22": "3UbKSbfApAXszourkm5fuwGKBkA8HrB9SbqdKYLcsgRoWPdnLG7BJ8SWVDxsadffzUKs2Lqx7sabAiiR5qBersmv",
  "key23": "a9Xh5dwRt2QDSiFZkX9GEF4nwzc17cNctnHgGNrkTPrxkt8gi8opYnm2tNEp1uvJtSxDnBSthZnEoNqQozRDNcS",
  "key24": "3qXV93D8wZwAabynBgSZr1Xz7mHEGywtaEy6LoizzVd9o9r7xvNJFBRcqW1YCXXVjs9wL1jA7tfBYZ744VMcaRWk",
  "key25": "2BpV479gmPDAU555U4qReYQWdkuc5DpnuUdzQWXt6FLrYabQPcDXNz3d4vhoAtRnAz5FKuA628aNNnhF4LcRLYsP",
  "key26": "5ht1Jk1s8BC7uZC6rWByY4Rkk8bkqq6u4jMdsLbfSPcQoDm7KrUx1e4SrEmzLcTsdygCB2SJDnSU3Yu69QW8Dhmx",
  "key27": "8FC67Yw9Kx6ocC3pNfbqWYYCjv91o1r8XBZLG5QuPNWv2P8Xy3DQNv7ZTjCikggNocCVanovQxuzTpdhw9aKLnD",
  "key28": "MMh8gTMJq8eonJUyzbBsev7iYvY6MZwgfT4thzY2WUGyatBn5zH6vwzcRjmdbwbVNqeRbBNmstZEja4Bbn5NdX1"
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
