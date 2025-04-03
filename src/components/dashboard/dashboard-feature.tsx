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
    "uCWBjHcGaCGwFiaNrafw4RRabqMbzWU4bpH84Vy1aK9e4sk31GfMVAfQJo1browiGQeNus1Jsxg6jhd8vGtidfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5fjTzh2bu5aEiorXRBc4Jkc8zTuxTwzfCrkWDzp93RyTXqi4vUWxwnKz38SyoJ5iPiaGNwD9tkMpWAcqJXA97h",
  "key1": "4pBuZwqCCKJcBntPMnFQtg1PmuEq6LAJjTkcAezhz1PmDQMMHGNJrozNg7wgMYGcwpzqx3x9h8Ec89XmEYTZnJyE",
  "key2": "67PNznNfTQLtTWqZQ3YZUzbSkKxZVLhjdfP87ShFUSX5mSANtRAYb56Qg68ou5zLwsc7Msgq3GVeoEh3DJmfBHuT",
  "key3": "3MkRTcgFySvkzMU98Fj9BaebDSk93BtiuMARP2ZyVs8hMTRcis12T7KZcW3tsLr3JeMrcwwpymAK2L7qqbddJaQz",
  "key4": "2rEV1vnzr71851qwhabnKwXEmFsrwgbzUrDJFaGY8sPxDMe5wrmcsA79KL9PNwa6tmkj8TQYRdXf1NooyRU6WTyb",
  "key5": "d7T1pTXDZ7csEceMNfq8DG7jDigAjaWKi3vWyuGEEFx6Bzjingm3k2wj5Mc2nK1XV6m9vd1UrnbALtWEuFHNbHq",
  "key6": "3iS2UG6PLFcquC5SPs5D3UKeYMv5qxP4QkPHZ7FTRk34PmrUiA1UyHBz42DBoE7wgMjMYqdMiTeQtgiQ95xB1aif",
  "key7": "5GHfXredAPkSnfzfADYt5JAQdxLkJjM95gyPBmEgeBajDhWBvMR8w3dRXtyRHvcq1zZ3kDAzjpG1ej2qoi3vtHiz",
  "key8": "3P1PPtZCoWGcKEC4TRMUMK2CkR4qWQGGTb9n17HAHefYGhGSjsEH9FwAZSxrmPcfbZTzyrwhFtK5xN9VGG6Ndbws",
  "key9": "3Zu9nWWp66AJJnUKg1HadTmyUL6LP4yTc1QS75Di3BvCsrkWxyrdxSdY8MC4J8oWWxVgEqJPbPdj1MkLsTtKAW7P",
  "key10": "2ECiwNzr9sLVpoGkwBmTxn5Bn3heRmuHZD7UuutXoYysPxbqq3MBGY79JeoercNi3BZDvx11wHTA45Qwg8ADowXk",
  "key11": "4ZfCpaZruP9PDGvtGQ9EAwisELjxZgASXU6AYmdc3peCtbtUVfysLaehhWLP8jXHXvCnsgDrPwKhVvSQkFhWrXcT",
  "key12": "5M3xTAB5YHBSJk1LrduDqj2jzM2kkCmM6hQcNkKGD7eFWGf7tWtaCX6CJHemo1xUcx2kGsj3jbZe9prjxhLdqd7p",
  "key13": "5yUKmvNMQCwUhyPyzsyikYgfBaFS3NtTcbrbF5Z2dMNnyoqLcPFKzJnDqjGtQ5bcB5PMFfmpo7d9L5GHfsjrGX6B",
  "key14": "4CzugFQJ79QJMxftyX438CjRAwhaHz9dzCzT1sUmDHU6wjH6pFfH5AEtxA1VVvdNfQi1Xpt888jheE7TKVtwABfM",
  "key15": "4t1A9G4Ld2NbnuE1nZXBiBxA83YiKEJKB4jbACLibphC3RWm8BrCbmgF8ZbMw3DAzBFyHmSJ4jWRBwTfCxB11NWN",
  "key16": "2mz9j1uuN5JDzrMv5YNsfHDfk6S16pWDcxHbxDZR4Zu33636wJSdV6fuNeVjaepHXRXHhrT6zc9JogR7L4zXiQgi",
  "key17": "55TEWoQ9GQwJSYhSuuA3euyecZMbpHTFDfM3PhzA4oATWJrvPmQAQnAk3ym9jweBxocnumYtM5pNcSESUEoG2xMD",
  "key18": "4sn1v7Agn1vxCtVksQeVibkew1J7uChQ1teeupaACB3erd8pG4HJxdWp6HHHtKgiERSGYNXwHpDEiHT8c7ejwsB",
  "key19": "64eVUamUpfXGrY8YqA2SDrswtRwuPxa1xSPvveUBEDadUGs8eoBpxeXtbLbNSFffJ6BLFy56339QBGbRy35BBuPG",
  "key20": "4b7Boc67p1q7kDmdxbru6QFjhANFYQck9eVxebwdW3isfJjAmTuorJP3RWT52CgHAZNvfsdXKSoBDhELHroNpoy9",
  "key21": "2qqA5HLpeDTUsBY3oH5iaEVQURqDZVkrcrpPBD298qDpt9Gu3LAjhgBGeVJ3gMpccw4rpjXVYMgrxKpXUTBvNK4x",
  "key22": "38FYaeRRb38NwnUN8ChJ7b353t4RADH1zgpFnTqQKcKrzZjpSF6kz5RKQtsTLu9vXgVeC1TGGTcsvwCPBxHzmZyQ",
  "key23": "2nyanmtvJNESbEcCZvHf2qzZJtCSaaashuLSFfQobnj1XPVhdsx9NxqkGP7b2HzVibzNRzdpi95AEr4nS7jvL9xg",
  "key24": "2T3gh9EWzdhGpu9U2sonoDHTVRDVZCvyyAFvZNSQwVpTE6p9assxPcsASwTvQWuN18NvU9sAay3CuSQdZr8ffcne",
  "key25": "3sPYEp1r7HibxKt8bVZarajSuqxzAofV26yihKArWiGbqa2d2AynKk4sU5YLAmHJjKTATXMpWrEfFxw7xTr1i1HU",
  "key26": "3sovfedXTYwR4QvyjHCrTSiiiZW2SfhWYG8hwFCUQFFhzKjWG2op6Y2SLbaKSbFJSqQ2VZBDyVyspfhPH8EsQWV2",
  "key27": "Zt8iwT9uV79pNMhDzjxVEmzWpLp8XFLxTAxRbmw2iUdi55xKdi1oY7xEqPJ8R1kiwJuFTUcvLWjAN2xyfL5EaNj",
  "key28": "adpEr3WiLaHHyKuBU5i6endaEDoypcrHHBw2CMC7DtH2zCMEFd9mgTb4iz4UKYsKjE2XMfwWUMPK8QivJ6m2FnU",
  "key29": "5cSNp7Y76ZUc1kGNmuLatSXfDj349RWy8RFDo32uq4ai4SE3EogBbE5pcKn94wzBZnopqi28ZdrmXG814zeJexUV",
  "key30": "3TyuRVDDLR2LbdZXr3BmkWoZGZgMEU4Jz3jZkzZUCCUkvhy1yddiwKheHeN4y5ZyW7T2ySMsU7dhQ6AgLRZaWYxR",
  "key31": "31i4WD5yQrb3PUQBQJ92u12kVwWgLMwtQQt9JRRTu8BQ5e328fApesEtDsRbyfPeZ27ipXYFjXzPFWMH6vGTowDo",
  "key32": "4RE8ryh3N251Z73fxjKSqdS3Vbic7AZhtKwZLP1RZHvo1qimLMJVP1ii1NrbwyQFauPuF4jpgsRrpwR72FTbViP4",
  "key33": "5Vxdo8VKgbQthvpsztGKGByDyhKfhQHSPGX3KqvzBgS5wgRgQvUCoDApEnJMMExGb7qkBZxjM5hwCHGuMb6XhPHF",
  "key34": "4K9BdxTfTGD7HEVQ7xE8Ks13cDH7oaEb4g5kxhpqBjp4zmbT4ctrvHmdJw3GvpXStsr49cQBrM66NvLJCzvvSg8V",
  "key35": "57fbcLnCYMGYFes666DyeCBAQde2DSb5XHoFPsYxhLhcTG1icvcnqWc9PCrhcPLZ4B47H8TfP6ziQ3mzwwEs5GxS",
  "key36": "549nMa58arPb21LUYCEH2aGViDCKmSAC9jiEcYDsdEDDQv2ordRzi3LEiMCyr1Q5WCn3AeWu42K7vwtkVygJxuf5"
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
