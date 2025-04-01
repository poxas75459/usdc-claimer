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
    "2Rj4imhuojfrkN3vamu85K3LoNND51XL9JNs3cPLd5cistyAU1MSpgPD7fvcYGgbFERfa6cVZ1gbevTZSZCt8btM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzHqdezApNEUBnwTdLAvp5CAjHLviosWxGgv35jN7fWqUfCZbGX7Fzk4GJuMaAJWYVYz7GVgFcU6PvXP9LcauVp",
  "key1": "2C6jbUEgSNeVh1bX4PzPa3YpAsAvL9mbuNS8acurHJvKz3znrp2RJa3JydzGjn8TS18rJfDTpFbXMppHUgnYwLMg",
  "key2": "TwE3LrFYjBziDcXP6hnX3aGr7YR9my5jWmUauGRLteNwkTVp9aZd99KJumTqZd5SFWW7MjCX1Q21z42h4RSHAUH",
  "key3": "4qsPsVNSt4f6jmkzHC9b38uabuQ9sXK7p144g1A4JrVG3xxdXuRYZsPPmFqXaJuSLVwgDemdYLk4HiXaM2Bk2S8b",
  "key4": "2xdeJWjvGeq3bJ259MNiRLsTYPVZeyCyVKgPfbWtPRpwuEP5qxKiJuCvbvBQDzQanvBmsZ5UYGQkcGGTb8d4Bcio",
  "key5": "3vaMUNs7q6dygBxMvyzMSdcmQ3hQWZSUAFQpiba3k6T7xQ2fwZKBeiuN1bW5rTnvn3TWLTd6MKVHtxR13uvZKtvJ",
  "key6": "4fWTNs1WoqNmUod75whVwaf3QZaXewJrK4s12hpwqJ6jWHEYcVc3ZAMKGpMyUzA8zsY9M2qPx26Dx8erCxrCtPph",
  "key7": "5fMpzTPXAwbwJHBWWPJRDaiQ1hUnqYpZgGhujwG6qSAFUQF8S1VCr5izeNeFGnsXPqe2MybXAw1p8645X1XPy3z2",
  "key8": "2CotNuFEqwRngYXNuASYZxe4o8JbGL6EWf9iQci6HQN6Vp2N6g6mPJf4qHA6vx1eoAUGYHxutDumpcyGiXBqwVuZ",
  "key9": "2AiDrJMjUUZfKrwCfY9sSow56iw8dVhTfvV6nwD8KTxetGQNkqrkT5umSyN7R7JLghPQBJEZwqFvD2Byo4YGVMQd",
  "key10": "21R2vq6xwnfyVM5uZhJZqn3odECit5UwZAgvPV69admKCrnvSZHK6dUi7HrAz5KLccuvwLtpYuRrSKK3t1eZf5ss",
  "key11": "24TAXj55wZR4oVr3pB4s8GTsgnjYMA1PYSUaNXsRhVQcgnkEMMCrpJhY9bGq6bHF9YRsuSy8uXRqDHJrzUgFBamD",
  "key12": "59yzVx9j8VtHVzgHjWrzstmf3LuWvFhPyVf7tbXQmKeLh5Jjz4kbYDm2WwZjgy7AoVTxgGRehhX8tTwgJ4V6M9ue",
  "key13": "34FYgt3BjLZ2eGzAc3GcvVbAW9m49zm38g8qtfpnhAesy3dgSM5tM3cN8qLPVETpFaiRZBBvo3wDvYDqebpGHQ22",
  "key14": "3EFQshspvdUHuP1twSqodNqKPxnW8YbmyXtAp4XXwsxPbpKnBHpnd9adLJ522RX8Nf3PEhoBPoEkEPXDABgrKqDS",
  "key15": "4hhQ8e7reXdypaExDnd1xkodjucaWzjZ3SdpkhAP5eCop6CzeV49xaDZyQct5LuwLHSEqn2maDHYTPJTq4nR9qBL",
  "key16": "3NDCkELaThd1YfAvqqYrFpiVKNHBBG8yPxmxKsivdwQAYEBQ2SN8s1Nmk7Z7LhTuPzvsxfZ3GTtameUGZxVjGj1S",
  "key17": "543VGZpm62t9WahGgS9hmhwLHQ88Q38qXYdBRcBHgyQbXFArRPph6DGCpF5PopDHdUQyBeeCo3fd5UdVEG9Sfe6v",
  "key18": "oXWAVJW4KffDfminjTZwbAwudNJMXfTDq7CTMmqkVtKYBwphsdsMohf4qsuFyLNsuanxPcewQoUjy82uHK1Kywb",
  "key19": "2sSxUW3Ao7K8jej7rNuVaJenh6zvB5pAXC6qKBMwyUiXPaXFdDUmKAS7DoAic5t4Mxpt2Qrs59zJ7KipaQjoP26z",
  "key20": "3hJMPQZG4dsgrRnRE8NnMbre3vyqpG5kcuGsWmrpGidAwicGjdG13KMiLUCkQ6CPp3MSoVs2zKa1MGzZswk2tBUR",
  "key21": "243T7ysxhkQ6ZJTveuxAxBFQ8dj5Q1N1YvUBaCtQZsuzqiSs2q8TLhiJDk75Z1cuLxxokSR9KsLbNkvoFKXUiCo8",
  "key22": "u8fb4pT88FduLai34bBmtaw4BoN564nJAmFShcaBkhFfUfbhhZRopXGFEVNf76q8bGeLe9pCZeQorFGYwyb3Mk9",
  "key23": "ohrXPqSybwEvHuQYLGv4CDGxZuKjJsnHHXNzoTmnMCtXvcQMVrjDtd4FBt9fPByq6Qy9jTLirfCZiUBFu7Q2Cnq",
  "key24": "5ktaY46re94Adt6erfc2R7wj95TgYVV7uLyJHQrKmx1KjT8Yhd63t3x7LPZMopWvvSGuA9iCdTpAnjuTT1BdTQDm",
  "key25": "3mvTTVxuFLNstp5rqa6qKtVdui8EKXztvwvfsPMHn32TNFzXbpp9fre9ryru19izA2bCzVe6h4WEvs172RJiZ7Bi",
  "key26": "4AArFun7RC4DdsSbdLDiSgVj11kPXdNwf1fVoqJ58PLNvmBXGXsftybYEc8uWZS32NW9QEpsBZunLQqPP1TC59SL",
  "key27": "4ycMN9SPRQu3z2VgshxmkYdevJYhs7Z1FNZep9suFm1iLnKMNc45LUefAA38sgTeFyNurqnAFFpPtFgUxB5VBbhD",
  "key28": "512vCNRHiXwYRnQEkCzRxvWBU1MUEgr8Zm1JwZAuYaErfR11TL95aa8GHmYmBudWKF1MAm19sBrNywGJwFJxSWWG",
  "key29": "3aqxgxM48iRngFAfMZg5cXesKRx67U9jwcwurzv27srzvfJ4QFv4hxEh73YAfydhqurfJuJX4GygdcFQRsb1reqV",
  "key30": "3m6JvmtvKXUHhSzcEA4x72V3dhNs5g8s97ShNxcXWxGXj8hpmaaWwgQ6M8zprCfW1s73twewgqwDdq97MCF314ge",
  "key31": "5rV7W8Gy4VKnoXs5kdrBxjdTK9gCHCB8PmUnJavD852DC4CxgKMdEMgbF9yu77HUbkJ2QqNyX2uV4zzDA6rDHspZ",
  "key32": "2rbWNivzJ3g49ZCWFjPxZP6uPDvPAz1TpMTVZ3Nn8UZZjFbCAP4ZfZxQyCqxSFmL2WFc3EaSh8q23ZQNpBWnehn8",
  "key33": "4BPK8hPk2uZew2vPTQMAbyoRN1Jp5JN7FEWaThyrvkkfuCYTtaXgXV52yrSN9uznRyGUSXJr8gdTTAj3eHG9qt9j",
  "key34": "46hFteUexMbbAD56BsNDKNx2m92BtoMiWwWaGei667oFqK73dtGaLbBhaFbtQ1XErVwmHQWdUnyf2whTFSdmcEMH",
  "key35": "gUSrYojhrdSx2nMv7e9QXbQiL8wX5XZ9gbV2XF7qMgDLkSgUPu3Tj7CLVSYUsN7AwqD8x3iBzwKi7WJjo7cuxLQ",
  "key36": "3DUvHerSPoPwwso2rTVFG9s6uAd4XNs7AGxKTAMRRVQT7rZouEE81QMn4j8cNrXfUUoXYzWuXhh5APCRzNUVxrLo",
  "key37": "2FBSWKAMoSqf4KkPKnJAp55Jmboh5gYoK5jQEDfQjmwymA9Ycz72vTknCZsQXeSBggsQ7q1ctzq7uUnCYbg2B5jJ",
  "key38": "3DAjyJSxH83D14QxyLtqjiY2PKEMqxLZbjeUtVN377acLAaYZKzzeeg6MCAxr56AN7b7sa6Kvrh4MeyuGvohQmdm",
  "key39": "9NKammdLaxEZtcWeAFxEEJtZcTkEJ6FxXfk9PFnsqPHvfWJN7SnNTyhUsirX39y6CW6TkWTkA6iNVZH2NER62qE",
  "key40": "5P5aGPXt4obkgVtxfAqLeybGrBNsyJXqeAn47HHGeBEcFRwvYYuKv7p9gjd5KpFXv8qgFF7oBF4iAFjqfVBgAEou",
  "key41": "ABMe5UF9GJUT1BNjW7C6jr38XHysepTkUjCc2HLUnvM1H8rLGXyPhHckeU1oKLbr4DhebS3xB2i7NWmupVuersn"
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
