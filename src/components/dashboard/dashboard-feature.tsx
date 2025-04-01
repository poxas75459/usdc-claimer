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
    "Y14xHNFmVQvLR4sNQnmXh8MGNLSCQUm3AjsKBigrEFedsSdGG3h8DbAya3cEHFJAUHSGmsGmVRZoHoFh41rp5sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kc6SxjqTBfVv9QWFjQDHKBZjb9mugLQoQjNVjQqrp2a76nLmVtx5oozKAgygncwudoRqCYf1gLGJ1V8crqb1zHd",
  "key1": "2oxL41rMaevZ7K5nE1vVoKBFKaFxTT4adydJJ2s354uxBwURFzT5BEgeQ4in3Roo4GfVhzgnpmCtLjpJFk9qSdUd",
  "key2": "3X6di5uYv2nTyNAMMX7a9uxQGEgFpZX5jZPHsamVs8ZiiZKzJBhihrHuW8c4ZH8Ytyz3u7G2tmNW6pTAyNkaDUML",
  "key3": "53YjAQcQF9zuZ7fEnh6PDW2s6J5wr68Ddhk2BhmPdChRE3QvgKTSwJyYus1M6MAAfHdHmU1tkaU2jnLmCm2SaHdR",
  "key4": "3kANFbw7vbprjGq61cXVt5fgbV6x6UGzRNBYh5jn9BxybAw6wfbCCGbSB81UoHJnKFCoowP6v41psaMWHhTt8ZAq",
  "key5": "5VhrhAdwcX4azVFTjyrKPcspCTg2hG862PVKuAuUbVV2oEBYLgcXDhLdvQq6CZ8gaCRiEKmVzzJDVgyLKoLroxo1",
  "key6": "3xEs2gXUUmyUAv1GTPX3GPdJrikMFUE9EcUw8eAb9p3aqY54xiGqMjbDEbdz3hH8Maq29jqoQmhD5mJdqc4YZdaE",
  "key7": "21jqmMEUNpRvRgqgKT5hSL6PCTrucJBQYDgFhY5LEVymeLZ9McgQYzWAuNwgVvtqnqWZYN2tiLg2iDckfeGGDKSq",
  "key8": "gDdTJHcsF19pDTchQQwuR7jEmy8gQFgoBDtjP49mkGyfWTCGPL2PyQrsAiB14SkpUXfFvbuk1A6SuP1CpSo4reQ",
  "key9": "qLjNmvVkZdnhuENrmsChu3xmDXNfsfznSHuAWkkkjMvefe4mqUEZR8au9Jpw8J6chpTTMcdTNXxAai4VMbjXhaS",
  "key10": "4BMdqUaHcPvHr2B49GNJ2QxepPkEnR8aDdddZkte19azBgPfjvr2ZhSHHuKEb57GmPfCcAVhckBAhgE9gsvo6YaT",
  "key11": "3PeqXJdhjeo3aKgWRQ3B8JQcvwv75TUp9u7o3c14gALSN3PH53s8VNc1egXRmewmut1tJtNUqQeQcXKFio1MicQA",
  "key12": "2qNiXXtqrtRoxWc2kELkE9kfxaCKzEEXGo5fJsMEG5cXiJNz45KvzSoyyceokzrG7XMCkrXPdD2esVkTie26YmmD",
  "key13": "44bwS5NiYVMfXLpxF4gVBQSTWG2YNYsDBnsjzUv1trSGPHXba7LWAiKYreNL9K6aiFYiVNuaje1UQRmUrvDa9rdi",
  "key14": "5gVKGWYbwmUcpFeJ5LR1kEtJowLA9ST4AJCWJEuydbQ8q8C8MUstCpryCVkrgGw7vayFBVvvxvbTVDatjtKZmdc2",
  "key15": "5RpQsDia3Puq7dEgvN8fvUaVWsG9jkn1HceVHNRN1xpsyJmZJTEWbkZWnhQKUYaRoZxqvG1szQVyid3Dvuah64G1",
  "key16": "5NkSG2DJkyv4geTSizhbEym7Lb4mAiU5u67Ekx6vK2eGHTqpkj5pN8HxeRY5KBS7ozRkXySGwavk3wavKry1UnFJ",
  "key17": "VSF6BBFmZdV13d5LWsr2JLEuwACQpWPyMUfbwe3rZJ97s1h6MzBwMBWpxkDLKvienJuTQynkEYvMEoZDZt5teRc",
  "key18": "3Y2CmXibXSrfrbkYdZ2QyfwMiCTQHrWPgopuksknDvzEe89eX9HE51vLyh6FmJCGse7iLwMGesnRTKpYRmgkm4rL",
  "key19": "4XrZohmSQyoCui48M5vAFiHNdjSWBZFveZVdA25HyGE29NQMgm9Ezs2kKpduoK2QiQPignGbs1ymA1gEweGyLSyv",
  "key20": "3HySZmW38rr3nAvzuz6M98YwQmgeLGRMv4LpAtYoCfEfCVFmPmCWwUwoPMYp6aMNUYSPqLk1wZ7XRzzcbmigCHkY",
  "key21": "28dXtrWejiFJBowFk4UCQYaWkaic4FbBtu3auAWpJb3kSW4U7RG9wVTG1oM4o1AhxifJV2JDggyPzL3YFUXmxLFQ",
  "key22": "5hY1mPSqd8urdEySf9uaPCS4d2BKqrAp6gcsyK9DaTJoSghDPw2akAbbtnyxeRA3KDjTJ7Dimytsvv5b16xBkBC5",
  "key23": "2UhEk27CHk5KBemaf3nJCTfDhjc9YX2thkmLW3TR9xbkCp6Xb7pt6ssTmEdur2WdcJ9TaEw539nTg3RFqK31fCjA",
  "key24": "2sKUafdckdbgoJ5XfzmAZCMWtujLGHE2jud6hGbdcUwZwk8XQF8PKKtmCUMU4Fhhk5GM85qv2t4bgtgjRuftqp8x",
  "key25": "43GMiYgGvKdjeUrLNtJfPpwPEy2fdnHz3LvQ4Ys5oejSMQWV18p6C82DvccVX8JYTpKJoY6aReLhhXKXAHThtXiq",
  "key26": "2kSzxnvMsAmAbhF2uoMKy4MB45Zbx9f8WdcHe3y66j22eJ4KvdVwYkrXAGd8HfwXgMxPJexzHDod31ADgLLigWTb",
  "key27": "53wt8qViJvoJYAtfCsxoPezL831uS94dNVCPyfZVBrPvK8bLPn5eCgfxdPhsvMpo6HSV1m7j5Ltt1ShKKAZnKRYe",
  "key28": "24Zky8p1JmD3G8yBUEyPGeyrgqZzXjrBLTEQgpucP7hrFksshniRkPPb9FG71QimbA2phs2mUqNsimzE4V9NJr34",
  "key29": "Zz4ULwtcm4o4dEwPzxe4BEYYDvU8jHwNXybsNGRS6GU5K9k7PV7WQ1drQdzwxWbFR5QPmqkbiKTzHqdKCeT88iN",
  "key30": "3mki9HJ7X4Td4S1tt1gicf8CV5i4V1NhWiHdxTLTDnW6AvqeyheS9dbXtUji2NDvFqzqR4u5WmxxD56WGudbBZaU"
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
