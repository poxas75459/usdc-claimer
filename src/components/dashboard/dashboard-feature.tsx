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
    "dDzdrWsa7Y7ReS2sYMkfCYRc12EqdsXkC4gdkDtYbvLVCAxUXwqvNqXqt3rhCK5LHSC9VzXepTd4TeQp61PXs9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T2CpVKzkJ4nsDnKkmAnyXxByz7D9JUBzE7GRTLtTBW8WqVyFgpmCmXnjXy93iiUKRzprCGkZrrJwowqEcHghG7",
  "key1": "3ozYR9Muc8tmzYSQwXG6wu4farHsFz2P7tnUUWdLUoTbw6KMnjGof6RvnQYQPCdSAkPj9KZJz67reWRtHowtPM94",
  "key2": "4ii7HkNDsdCYMKGyfyNoY6hDXt59BTwKxD5CvtqY5uwKH2JxkREYD2iqMHdATha5DCHXGYP1yeoQeUz33vthUVvb",
  "key3": "4sBtk8CxrZ9hJw9hxk2UrMgh13g2sm6UdoYEXrXxmtDMTF3pXFqwPsKCePZvSmVpeSa74RWkmRmLG3g3GSsHwosV",
  "key4": "4jpuMketKALWSB5a1vonsmvroVPsJH2oYNRinm7BrgrqA5Ag3ab4f466LaxSexb7eAf23KkpNcYpqciSzzofUrn7",
  "key5": "5xYj8a1BK8SMbdo7RdJNS2y19h92xUCsD1hMrabHzizaSTdh5rJcfvx4bej9nZtLXzZD7hT3z44cw2kKoBr1GwNZ",
  "key6": "5g6CPo5Yrd69a8oYpwLkFtBN3XmmGWUUe9RvxeGUkTkjguRpYfmdFCK7jyVjS8oKnr44o74BXq4ZsqAD5MP1SnYA",
  "key7": "3JL5FSaQBwTAkbiDHd3NaRjCqNMYXCxG9rz7fyMdThT4yd75VvLUcmcJJLcracFycJpe4zQ6wfZEvp6V5ejHpYH",
  "key8": "3bHv46raCHye1B1XfyuuENjmSQEHshtF82ejD71fe28gQ6GzvK6s1Nct5KSj8XuVXCpLp8Bwv611cJe4HjJWUGyR",
  "key9": "32Xtgt8DeYE33m24z8sbptLhFA8bNj5Mm7Y3bN5ghrMs1L6n4MEqKyLxQJSgp7WME3ov1G3Xb4qvNAa1tCXnX7kv",
  "key10": "2TCNJkeDjK8gdck7e4EvqeJ45tyUMEuK93xJsVe3yDz1skZRnUd5HUsmFvCYe4aXcE89JY5ozSmBuDEavvZhFFKj",
  "key11": "2EsfYrRuLfu9pNUbgaK94CGdrb7wpZWtPxg1iHT9HYZjMKNwE15wgcBF6vRft6JRQqLvbCwgj6VT9h295PnsCr4J",
  "key12": "4HsWWXFrUKfmswvt6w7PaCtoHkaW7TaJRaiHjqjcQEp1m9MxFowwxrqetkfkjsk8tuxD1aHKpE5hFRfP1CYggA7V",
  "key13": "3x8SHn8nMyrnXfMRYEwJpC19KADEUvJndaupUkpkzLzssJG2cyRvH8DHdxUudBACHVNG5mAbqQeMJ2DkQ8MntNyW",
  "key14": "3dCRdZjRQ8CgAujh9gDCEfCEKioNcAqUsARchrVpggbqj7VHoWnh5yLhyYXwiJSC7z6iBoiND6kvtk9rk2yJZy1j",
  "key15": "4hPjhTZyzHPS2uZWnwd72RcsQvTGxs25BJUTGoEhEFcdi3pdKaLK1R1R2HXqiPrUUwJsd7yQwAVe17y7BUu7WjDk",
  "key16": "4jxsKfLNRWTAZMivxzBHbYKqcQvLBr9MBZKTqedQNAyA2u9R5ZmrTaaZC4o6kfNuCik8ZZ4phzstFoocQitikxPc",
  "key17": "59XACm5atnd5vwhiynY9JNRYyVMU7mYt6HXcVkcquqrmH9ys3FZ3wE5qjEtJbLH4bmJ8A4tAAhYw7sARqymJ1M6F",
  "key18": "31bFhyvvSDFaUGaoiLviAw2FRtDVYVdBbJDmtkGgxueYwDDSuQ4qWR92KgSsvx7bXcmxJ5eMxY6z32bwpp5rSoqT",
  "key19": "5MwzTkQD8tamFJKSjYASruEqXzosTJRGrXXvQoW2quKDoV6JCQbZEnYGy8THGZ5huZeWCFNenGbSbVqxf2FsGt4N",
  "key20": "3z4eKLEawfQevosWpD7MXtgxdcWyW9qmodoS6itLe7sCc2Mhdhf8Qn1tcumwwytJqZV9yu2j8iR4HLGi1oaKUatr",
  "key21": "3d2XPJvNQTqfbjnvaQTF1bRVhJ5Z1cLMuYXuQxwq5XKCtJFZAPscMdugRCBrtNZdzf8vVgUyQbTwnt8iKiYB8fsW",
  "key22": "3TuJswRuj5rikL6rAFG5ZyctoeSJqi4aPy6XMjVBQjbdGdn4AZje2MC97aUzAX6HCAe71uB2ecg8ca8DmnEU4471",
  "key23": "gQp8XeFY6JwmJq6wDgENRbj2BFzhvcrx2vJnmNJTC1cpsh3VwsXguBF7f2UYcsKf3Utdqs7ci25uNyAKVJ9Npoy",
  "key24": "3vyusi82JqknUwc5XxBa8yWrY4GteWcVSmGPkvdpzTjaCT5QvJDNv2psmNadYUL3rdpwvNgVirVdLEJk2AdtpxaK",
  "key25": "EymDp4HkDnU1GcapH2vj3GsPF71pCZqEi87UwzKpji3etWod7FURi61ocRfTyiSZTHD64d5qGMwszRYybwUbjrk",
  "key26": "3gJQ9XoUYHFEHmDUDo8mf5VEtezEa9MMGzkHhs3bsxxJvFJedDond86AnDrqkpPrZvLadaL6RMYHQvDrCDoPC5vc",
  "key27": "282kmJFnPdmvvwN6eaH5QuJUi2fSwSP1Zgnp69bwgRp4qEaZTikNY8GjF1MuCBntmW7GPxhZYuGXmWHpMuaLaq7o",
  "key28": "2q6dsQxoofcUpN4g1Siyh9Kk27cFY8JNhdfW41dSN3orUHuvnWW64cBLrVqKSt16QP8M7zCLRtaQA3sJVH17uvAk",
  "key29": "3Y8mEuZTEcGgmZ7DLUwQMn4ortLhiftRydJLty25wAnVpFAMP9aywgxJJQmox72dyonbagQTbs1hWBpR933MZoFk",
  "key30": "gFxeQK73YLpm3GSCaEH3rk2SA1e7NGXiLQU5GAxcZSXsTHsVdVFxi4BGRqNeXGfodJ4BiWas1SmUtbey4c9grQ9",
  "key31": "3i6HYmtrM883knsfSRTYiXb4g3Ek6BCTpHk7VHH9TackuFdko7nL8mdTTbLsLowGjk7wprkN55CekCrjqrFa7T2T",
  "key32": "NG1p8eViCdqEJKYRZ4yaK82RHuWaPyKGcDoNaAaGzwdxZasRKWzN25JGZzKUgbg35qEyQqFTA3gXmwXeFnwDRwY",
  "key33": "4UTC8M9c24RjzphMFHUzuua5QFeYCD5yXPQ1WzWyQZn1Z5rCjw9nyEoU3CAxC3v14iF2saUVAADbqUCjP71i4qy5",
  "key34": "4DR7w3ntzDCneaHwAtXHcVJsLX6bHkNXpXw1fex4YKGDXfQiZxFMHAW4sZzD9KfzgwLMdfG7NNQPhG3yDGgjbh8E",
  "key35": "5zddaSBZtCoYXZwaJK9kK7KEitH2BNDebeLeXkE5JVgpySyovAZfajNjThYaj6Z4fKT3vT36wL3pqJB2FN8FonFC",
  "key36": "4MZfcNhPUmg75zCr1AEUtARSvFbXvwchdgBf75euAen3GZeHsDZwqVWB4NbX34T9ohnBBT4rJS36vz5wyoQ6zJhj",
  "key37": "4W2j544dKU4TvTFVKqFjjgaZzfDkSi4mxCw1riF9tsjEv5hJ8KApmUNin4QjpYxvcSyggNP1PtrpRfCTgBB78thH",
  "key38": "4HbVtohxbGwcgau8Voe7o6yTXHQP6M7ZoxN65McrSZR7N66GQLEoYGXd971Dmtp1FE2RCv8bLiMJWaVxA6QCuhHu",
  "key39": "4YJyB8D4CtXL9Peb4WcJMbswHjf6wkUaJxh2huez8vE354U5UL1RYAnoctVkmrHBdsi5tfsbZE2y4YDZpUp6ppTu",
  "key40": "3cQr1HjdVbUdytKWu1SrWf1Sf5JLYScdZZdcW96V8g5JpFraLHqMM1vkQXj5gkMy56BzcSQdTsUgtjQazHr7EkHg",
  "key41": "3tvG8472reSTWuyvJvZm9jN1xcnzDVa1Pccxd23L4VQpHexXc8xBVv1BujhYNEL2rhCQwAjX6EB9kPYopToex3EG",
  "key42": "61SFvCKsG8v2tEzR6fxQujP1uiYCMQc9PLbw6BhQE361gehZTFTZxT2g2pWPWr5qWDiBAdfwzof6Hqh7Xh4xW7CL",
  "key43": "4cdL1wsAVKJjJfGXTCiQsXiHQQCbgGnPbNCLLvXxN7ueHLgeJ6t3Xtw9P1oPhvk56GW9cTkJcbbarUKAuKhkXxX3",
  "key44": "4aGsBDfSErnrhjd6kSYk6kQy5nqUw4LmvLwvzbB8MoRneqtpwhptKT4q39sxmGLyQ6HcykXCMkAvzjiRhhEciwxa",
  "key45": "3X3Yio1dqEU8UZ3zrpfrUnXMrCg1DWkSZCEso6isanWRu4s2RjJ8bVCb5LHP8FsatPwK9wyn9eD3ihiUyzi4TXHJ"
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
