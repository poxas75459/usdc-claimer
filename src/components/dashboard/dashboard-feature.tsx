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
    "5juVxXFKwZCUmMv56j3BrcTW5WdDV4tuaG5XKUrMAwKnWCEi8Bt7Fs1xqEaX7neQKVgATHxjwQj6PSJXDaF61oYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCq9KL6ZvbX3SXFZgk9woc168BaBeuQSRLMWxvC5amwEZQrUHzC71PrGjiS5os4JqkSRuwhXsgdrbmm99Q5Jcif",
  "key1": "4EAJ7nNerpPn684J837GEZQA2ACMp41mNFdU6JYGWq4M7349G5Ajs6WbYT41vfsvjH3jTetnF6StF2TVDQkjwQyC",
  "key2": "3UMqR19QYEyiX6MnFsbXmV2jXh7eZ4KRoj5DQuM5n9Vh35cGf1sqJ8KQNCdSUthohu38xw1eQWEC758ud3FRsUYC",
  "key3": "Y1Gspm9ab4UkjLH8TWDrs2KhhB2HqTKSpG6x1jBRJeCYmzjWD553ZdopmosNaF6YgLyDh6pGV7C5kyQ1uJ5Ac6q",
  "key4": "4kMPdhJB2tezVFi5ZNBP76oEtJ1v3yVU7Hf4ArGck2cyZQ7XcWNTc3ZBPvDiPoRqV4qSR54EJZEkxYoqR5oe8QPi",
  "key5": "5gxa8uGeeW66sNx112fCm4Pmzr1HiwRt5EdfX5p6RDDTMseWq34rgifF36Q2zm5F5d1YX3Lg5nMA8hk9wtKDHceX",
  "key6": "2ZrnTVg1AzzuvK3zNxaRomTAGq5nV1VHBEZY1Sd1tu3YXbfLTxDwJKt9CFokvG4woykbs8rumn1qXdUtWQKXV4ZZ",
  "key7": "5ugfGZyiSBzKXpuA1RhKtj9DH4qyjZUzkYHfenNkUEWko7xiv4XRocbbUeJydUFQyLY5QdM8SD7Dk6jUCvG117uS",
  "key8": "4hJLnoJWzPaKcWDX1rHEZAxg51jiwRjPQfVRWihMdEajJGN8f5m99aBoUSpFeN33PRaUVnC2QHRwF8uy6TJSyEeX",
  "key9": "6SiWTtbds6DfjCCqTzsmwq4L9Y3kZjoXqdLx74CPZ8KEQhNEdsow34m4amYAN2sMvP51ifi6xEymAw9A2SeeSg2",
  "key10": "53hxau76NBNtD2DbVxhFf7V2CCpX2dpqQutbbi4t6e9Zh9AwSoFQwiCi7TJyCMMngPPJ4APZao3Hp4cL6o8C52Sg",
  "key11": "548dPb17iWGf66BfEMUbr9s2q1hyJERFktFyh6wNf4TDuyHxWK5hvNqjPRkYX3nBTLf1wUnUJhwVhqVDgpFwGF2F",
  "key12": "3jXYPgfCWCy1c5aQAK8KeN4X1aUQZtwxwjuhWNkbwAaAAAMwDM63ExCtXzceF12zXzRyRFpYgcq3MgGWwT9UzUpN",
  "key13": "2GbZoW3kMaqA1v8uLkf3z7iiNVCSsaotci5DFNEkZEmDAjbkEjB8bUDoE8diW3pq47N7wjh3TLjJRFrG2mMfJgoS",
  "key14": "3s5BbJySyqHEeDYpXsHUGSwg6mnrAwg68iKRvikrZ3h2qrugBiFTAXwSXj8XteF8DCp85XS5C4m3sTZh23vJFTXh",
  "key15": "1229qAzqdXqFGFecFsz4v8khBjtqNTWKFga9nS2ogVEd4muc8XjsAZzfry5ewbFZJUK2N8FxCKd2hncFbHjcNmyu",
  "key16": "5jMGX85rYG3Jq5tetWZ5KpMdhv5HgkcUyhTZdNH5cTN95yUyubmSf331vxY4NJc4MXewhzdKaguGEMvdMHCqnUAT",
  "key17": "SB1hxCnWMWSuVRPsPGfzR4N5erR9SKBi7CUNoz9rfBucN6Kvd34oVEBK5j9enJKyUHeeEH5Lbf2LFyhzKmjb3cg",
  "key18": "3neWSWw5cgbLY7jT8cFXGVjyGwLBmnVwfwqHYeFfMVNMV1PBVDpvmar1nDjbuT12RForLTtqeZRjxno3qqovhU85",
  "key19": "4mSoPgRiTKHs2sMEmzqGEMRYrHkMhCAyPBoXzr5dHPiXej1hmVFt3yywap4CXCxEQm7LsPeGkgxCbifvBuiAbkKD",
  "key20": "4HAjdCWkXBADSCNArpYLdT3igzvj6wu6n7zZQsAZ7HK9jiPGuKppdYL1gM8G2auFXJZPcjTPW8jNiP2UkafogwGk",
  "key21": "2GH4TgJLHgvyUayHXVc5JsDbGWJ6h7Hy1RMESkfUVtgXpe1X5DqGzUMD9iiZ5LqQR6vcfQC4Dxyia4nmDaQbt8zP",
  "key22": "5UyosvoSkHog5N7KJbxvjcfhq52mPakW7YyrZcRq396MdWWqcAirQ4iv5tuozaF2ABtxEdCJdzq6kciy8aYbxthy",
  "key23": "3RwEDmvWzp8P5ePJZJZzSpQTcq3NbDP1XUvZfFWeBzwMfZGqBGhDL6y4ofpGQXz8GzTTKV6Fkwf7PoERFkV3x9vw",
  "key24": "3FCCLAXM3DcAZqzpterZBpz6mKaCKPupkGRHn9R93ZtTnmPmXNTdGnq3Bkw189D39K2Fd9qDanUKMCYsu3pSeGso",
  "key25": "47BF7Ag4XHxFKAWxPScy1JCiEDLargpYVfjqzdsaZYgXMbk6Q4Tg2kUFayF1efXHRm4PSQ1TaHZ6iUxRrB1LvpkQ",
  "key26": "3afoDPncEG65qpsRM9r98KJHZKQjFLRmpyQYYmwfYxp9oHbzPJsg96Jx34Xze9XpoXHoq4CHTc3L3ngDDG9c5xkn",
  "key27": "5FVN6kvfvfPMVVU4PJrK89Xtb7g644XqknRGjCVbVyS8JyEPMnn7152ZT7oFSWttS5Echk2tYtok5PETTY5h5om2",
  "key28": "2BYK4sGmMcFk8gUH9GjE1b8g2aotFTWqpP2Xgndpgv2LAXeMbHpXbYFo9tpRsTnPHGxfzm5XzbKE7jDeqoHckU6X",
  "key29": "2hM9rrcSbWmWe67sLFw3ASjJE96AacRqrpUuWPGPgCzwzzL8JPrvTfe5TuAACzVjc76YSmH4GV65i59KAJvSnMx9",
  "key30": "2dBznY4wvDt9M8oAWy3E68wxtRQoBtBJukcqdytGNrrUCBtMfTSRdwbspqqBdL7cfEgFDWR5EmUVqmynLsNhYybG",
  "key31": "36BJyBQmDLc3sVWVGTHpWHs9awebrVGSdgmYikcHLjixW8639ZqxwEUtpcSA7eHpGppmkMs7ABhRXmnxbf1CzDJm",
  "key32": "2mcvgbiZemVG9uzBaDssKvAavo4PAQXAyhjwcF9EmFV5oVJy3jwjRb2RyMA9teqFyDpnSyTWtczo48EETXSe5fBZ",
  "key33": "66S2tnfe5SFybAKt7D8w2WXBL6Yaqq23af7qcrVnufMUR8qzfQNcDaeBXhFjCsRUrNKDyHQLmbb2qGvr6dKAXKEu",
  "key34": "4of1pNE5Bx8c7Cok4Db7FmQon3bxaPHRTFVN457ovDDYWoAWEbxUCZA1N4Z74ZAndXcn9UiXsdNBk4gFqtvyhRKF",
  "key35": "ikKTrtx6gXWPhWXFbf293T3YvEHdF5GMZiMJaCckNg3Wj5SJYy2fap2FHALEHQqRrqVqxBBkaiHnA5H26vCPp7i",
  "key36": "247x3j6rntoFAJ8P2XCPB32LGbm5pyRdBUaKcGHRrte5R5q3iTmR3PA5oiPTPjb8sLbbVB2vpZErYeP2vUWuWJ9M",
  "key37": "2cAv2EPxynnzYcq7MF4jJ2Bm9qdPUwxjyc4yNJLDb1udmaiyH4sxTTVwJFPJuyhWqsaiWKs7ytkQ7WFSuTQAiqLQ",
  "key38": "4dVfU4WmTiu8Y7ffLnqmQeMEWQtc1UJU3WHX3GbSzpXX85vvcxnGQSd1KDKWFjmNJbaAe241bAzQT2yusJ94b7ML",
  "key39": "2BeGHzw4eRLZZKmMePQ6Ck3uFo9D5z88JRx17dgWD6M74ftDHHJmGL47YoMx2Y9Tzs479fYfyZZxBwV8cAYczxvX",
  "key40": "5PBxrVHXxbuGfyy2PjVJDPDZ5sR7mEFdmbv34CB5mpvUZv5YSd7Twh3dqrWjqwVbJSDcMZn1bCHpcVZnFAf4XozL",
  "key41": "GSpQ2yEmEfTKYSganXsxMoPVxFbaZGfNZwkid6yKyJYTft3SQEdvnGLjmgjPH3xVLeoYb6WRnVUHbqkAvP9Joze",
  "key42": "sQMAsZnUyacTtD1ePviMHvyzd7N7YUmx9cVKknWkTukhSnQGUbtFy2WLv8WCz2PU4F9FHibqxd9Reh4iK2HJbko",
  "key43": "23X72LX25fL2isdzWsoiutqVTPtoAvWzcZS3QcadfiYeT91Aek59ZFKaTMd8a3mVEXhMwt9WDyyARBM8cs35JAST",
  "key44": "Qb2VZwvdr4JEZfXaNpRSxXHDxbZoBz55soMgebWhh16LsKgJq4oRfLqiJurHgmsMdzVyaXp4kzP2var8duta4pK",
  "key45": "2Xu8A5ABxVXVqqdf2pAAHGEyneE36KEZ9mkMrEQnXgp1JfzpAsXo61HGaRo9sB5ZxmmpCbqzn9riWNtNtXhNq4pU"
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
