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
    "PMHyzK3vB32Z162nKJBMnpZRosJUNkTyKxXPsCsy9A2n2SBhECb3u4aETm7oyERa3HQC9yCSaUhiE3eDiKxVmQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihtgQksnSSrxLWwaMujEDKF2ALwBLrA6PDjxCUffy8b5gJAJ213NvE19LZoxKneD98v2SVke41eYLU7yu7zFqZj",
  "key1": "3gCfubZHWcfXbueavtkzC4k6qKqVseR9iawpmrFqBEeRJb5NqNVPx8Y31SYppiH5chxqbQNK7V4pvCgZqW4sSTXu",
  "key2": "t8mGidonC1qiyFkp89dJV4XvzVTBG3kaAab3Tz9Zcin6rwrLckQZEG2tRAcGJzmPy5RWYt2Er25zxyVhTsg93FD",
  "key3": "63DVyzJZZ99aU62GHy6hwhiyjFGKTxmbV7sKgxMwgipXJMJpKhb6dn5h5SqaW5zqfv8Q2cppEmWW9HZjBJfF5AkF",
  "key4": "3kHScdYfrGmmjJFDw7u29Q29N5DkvxSXhYWrs28May5F45V7YM2irWLk3K6MDStMRF7gJefefb3ohMk2yD9yW7NU",
  "key5": "62ZJefsBBcPibGwEzhxYDd61bzHCKDGUpzMy6LkTx4haHbiszEFDwZHmSqnZfcnhGZ4tunA7wx2CfHmn2vM46qic",
  "key6": "4LDMVs9gkcZ4dSHBEP492EWHU2UKytwTT7jf4yrvtMubqJvdusByvouP6Evs2eEdgZHhWwcowyeVUwxiwU16khbj",
  "key7": "2NkD6UzRdmAWmdsb9DxyYuZzXX1fWPbjTQ8HVUWVQ1XhXKggbiPPskcJe7kdxkTJ4ebNGVBSMUHdkeuMvr3KJbbZ",
  "key8": "iSpKfJAcGViTxBxbLLst9vwZiT7zcGhGS7cvh6jHuRTC73yUVxMYBave3JfhbgcD6EopxwB4aif4DuyzkzNPA9C",
  "key9": "5Q9J2LCxVw6d8PXmLg9BijqYHqdZ3K76a4ZnDDqFm62TnbKy85VqiSEAa8C98QfLZWcXBCUm5h9pMKxofKBVEnzE",
  "key10": "3VmHT5um2SVXrhKM6Up4VtuTbMsbjrGSoTTJBPf78ZKYmStauRYyhJ6tZCNGsx2f8FB8PcJZMUhEgk4CthXNzQAH",
  "key11": "2SK1z3dUEu3Y5Vzug3SQBdwzLgsUdS28wBdU5ozVhmV7fMJXaeHizso2kEJNtRd3h4WPM1SHJ5vKFWLWhNe7dW3M",
  "key12": "4KUB9CADj5vSHeQq1qrETnScgQksetxX9Pi1WXKwzwak3LXBrZPpHyFhMRNQa31VHpffppBBABBbhv9VNoUn9RKV",
  "key13": "49FdJ7oMTQSKRu54U6yegCDGCe277YbBYrt4AjfJJ3zRi3FkNGPgTmh6QHFu4p5TB3iekTn2Xi1695h18EQsd3bx",
  "key14": "5PSXiQ2i3MphJ8Jccszs963mjLEX6ddURnPjCVmD3YRirTAyDTNsrPWGhgKj6MeZnLnX645dpdeBaaJruAyduJhe",
  "key15": "2vNhmo6cRSyGqGzS4w6iLmM5usCcp5kdNGvedsYpr5JSSCAvamcUe8iW7MDEtF7NSDwoKU4m2ts6C1HDyTGdz5mL",
  "key16": "TWiwWgfp6RctijTDREF1t6M7MJS5YVpHhtujoVxmUZtUszZw1gpNLQEFG86ZFfpgHoEgusNVUimuWXCnobzBfD6",
  "key17": "2WG9N8dUejfRsN72ongCd6AVpMiQoVswuYKdwcofDDTBgAGTCEWLRtK3yKr5kDniXWs3AeUEUwTHn8EW2jUA42Ed",
  "key18": "LNPqZQwUZzYazJMfyt8ECnwQgdXGMCcqAiuHLQyeCywuoTcsSbfET5vZhAXhYZry7zz9pE8D3uacCAUbqDuohjD",
  "key19": "4AUxk1RanCiWunjn3w65RS4hxhGet22tb73jvBUFJu3moBs9dZt576e5KEtjJdFWt7CWeqNydiEo8cEq2LxSvwTE",
  "key20": "67pBWrdjnu6kUPG7G6c4VzYTG3UA2kKwbJeyGUMV7u49B4pVkaRGGwmngmwEbCQcCNsYyj2Zn6mV78d2A38L1Wke",
  "key21": "5Lf3zMnEpU1pS4fZTy6Q5EpG4NSe6wUzyhjbaqGtw4ZeT496QjoGd9pg78skP5R81v1WcJf67RJGpwaPj7m7936z",
  "key22": "31PLBmia4tN7cPf8L4qQLVj75ybzeHaHyxe2WL4vc9pJZCjje5shATG3b4qCu5wWP6xoFTsQGqJi2pndtjJV1WLU",
  "key23": "KGhqnzvDKC5sGXhxUDGvKNJbmpvatXrFYxZBcvga3oUyyp24c1z9nBymZBm6P27FjtfdKhjdBeHw79N3pum3EAx",
  "key24": "5XAu6kAAzHur7DkWck86cLAYR4rcxdmKdfzvhmqW22kP7zLNfZAH4FNSxDJP14Zd3MacRpQoXBzVF1QRZDnPzamu",
  "key25": "2iUYKdzZv1z2ffSXdyzgGTpowDYGYKVb25iEATw355pk69hE5fTCFfe68M7HkKo26iDnKiJVpgvHTa7xgZih9Xuy",
  "key26": "4AWuj2sz9wkgZPnNoKdURgvjxG61vMycKiMM3xGy44J7Q6jdGsyTdywPPSS3aNC7xAKfKqMUA2Ywn3VNbpK2AQPy",
  "key27": "5KZ7EBQL53hGM6uCjUsjQkedhUvQqEehWPobBbPiGjd1x8W1gAsUDbBRafkkhwMRx4GmCbqHTDAt2WJtcMkgmb14",
  "key28": "4y6ScoiVsGQo7NzzrHcuKCiujdrEuWvJH6v2kxTzMRxGPoET6ZK1TFtaHpPbARhwEsBHJQFGWWFSbvetGkduRfL6",
  "key29": "4eBjarbGx5uAXZRFiGjEQFjz6mUBXbefiZVb9ze4GUhLkt9fw2EKgCY8Z1KsfJabVAeSiBdAHTESa38CE34mtgXc",
  "key30": "5TggVygyrfAnvZuAHs5WRL4EeuK7txfaBkcH6hQehKQujCSk3hATLzBNCJ7QCLhmdWEseEdkm8nUqHVFBosc3YGe",
  "key31": "2g2BbBjGivw67n7JjzKuZFL7fLEpRcC329p7RtwZW6P8hs47AekJ3miEik6Ptc2WkxTqS6S67CNi5gDozfoyVzia",
  "key32": "3vjmSTcJnFrc9x3PqDxhokXGNAmf5UEm6RJdSUVeNSJxqEvTSsRqeakNBG1hV1prurK1UTAfyxtaYLi2Tvfii17p",
  "key33": "4w7qC7JVJTjRFyTct4CSpgE3uEUbTDSa9jguSJikbuWyqhj6CAn7Acd8cWA98iiEVorbjBcPFsKMpSMaDF8asbqP",
  "key34": "5fjrZGCpg3BwGgH73S2WY1aKUPmFWxPL3CAwP4pYPjzkUz7RZ99Vq4S6uyBWq5WnefGwgS9p2on2gAYGgrPp2dev",
  "key35": "u6Vhx4fhg5oMnVzAt3QitDLxUBuvVFGX66XLEvbsvRTpVSgMhP2XwwVhUCocxRJYor5CcmWeGyfuB3uyn1f6XQU",
  "key36": "eMiPHXB4qMkPMHKwKNNPkd1J7bRKy6d3ecqXoGa5G5i8dm17eQbCxbmrjwrhA5r2a5tco4uGfXYX5kXYqnvu28E",
  "key37": "57QzQGxq94RSmrrNj58pF3AGXZanZNqffFwAa2142VJi9j86LeeyrBvpLh5vXDcTEqWn9tzkVJSSKGmxQp8Q9tNB",
  "key38": "3UUjnXgVcTKUXxZcqTryqKdxTPyh7RvpXhC125ekA9sS5KqeQ6T3M86zhkP59vu8T2GnGxwALLVu32cBz9SmtvEs"
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
