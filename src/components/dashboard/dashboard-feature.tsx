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
    "iEF7mj2UgUZLgrftPXoV6ZPkGnhJmMVWBmBU1wfS4gLnDWjcyXndNun9vfw31fSVkXXPmqg5wkME99XiUrui4GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2yXCTKsvQjA2KvkLGa1cAP7YGWxqTRtfGoT2xx27xBKqSU6fcbXiYEN2XCqBaktsrSVUFHAaybmuHCiF8YUqQt",
  "key1": "5sLiSezd6is8e8XtpGRf41bpAWbmMXawtaPyav2AN4HqvaJSpQQ2XhH9KtYkVTAHzDGMLaDZvTyJgUdcrXi2mf9k",
  "key2": "9YwbiVwfXv1ADbtEmTyrv3g356DgAjdem5T8wWFQc1Ce2HSyfiY11xQ7wQKCVdFDvYutwxzLnQkwBg4nLs1Xk79",
  "key3": "39Fv8aYJ8qzZw4haf9rbXkAisGo4nUEHKVuwWkjbL2JhUaANdece6kpKdYe59to4vKBXLu8uaUhp2CjKRQxJBcDj",
  "key4": "5pvBWuJGjJVini5xKG9XGu4cV8igm8Xv3Xk3fUduN3GzzAfJW5bb3WnbaeC6so2tpRzR3ebkbJkS53M48k8AQemT",
  "key5": "5CWEausw4SfHSesmSPjBDajzMakwZLyoLYDSq4YkhiUU5uJvTqA8bTWBTyTd5yCpt3vSiWkpm3U8Bxo9hsuSv7J",
  "key6": "4x61xWQU1mVa7CXn5kc8TzaAK9SzSVBykLhTMGasZExLjhtWPM3SKcHXYAdRrARfb2q4NCZN9ZAaT8YmLe1nwnWb",
  "key7": "pwk2jHWnPDMpW6o8Z7JMvtFYN7QUJbhqdkNRqcmiJhqUd5dnQRuUr8i1D7Dy7wVhgjTqrkEztLps94V2QKaYEKG",
  "key8": "2Uw5Q2dqDNbmDnJrVVqPeUpDcZ6i4mu5UuRHvqjFuiBz55goqtdqeJaeeZE2TjeJDvtcWdtKbHCQEi8jprK63K9p",
  "key9": "3RvcUo6t3RLB9mxYhikjPtyU5dZFKCqbnyA6PEqxCUdjimB1X6w7JE3X6sD2Zqs618fqPkEJ3aYNVhFUbKivN7pM",
  "key10": "5mmw1RJMpnDLYg7FYzAaRQ6NTs2aSSZ4a1KhGMMmN3QDEyuStGm9TZay6P9D2L6JGEqDcQfFHTxqdgojun83jsP9",
  "key11": "LhP4jCKCCDddDBCkxHXena3HtXMXH6MfuXtiTA5wQNwn7t9XJsTLQpRsnNbW3JjPK5nxYEYy4KywxsAbLtSB4fn",
  "key12": "5TVtmffxn5F7p4NwVM7Qu2BpdmjrT53kTrb9A4QtnLytNp5HgZEfiziJU2vTAma1t2cVeMYNcsyqqCt1JTQ1Lsf",
  "key13": "4j2dSdFNZGxQok4JGcgtgHrftWqEcoq2tP6JyVqRqEEiTgsfDVap4DTkF6Uro6V7hYHXwnzGNBRX8Q6RAb2PQdy9",
  "key14": "3RzLBZykw5RLhw6dNCiZb9611nNrtwDJJ7YWTMBWQYme7z4LDJZkkFTS7xsje6z9zB2zBFVQwo67KEkcmFeQEf9o",
  "key15": "5t5WsbCsEYfdTJdxYNx7B1Vhpq9PVtgZCjeYUfPzY3VTc9FJLiye2o1tfzDmQU57ZeqMYdD2GxE6NnPUJDZ8yJW",
  "key16": "42Zj1f5JJup4J75BB7fTsfYP52tU59eeA78kpHy1q7UKXXy4QSGKvdMtikXpV5yPKjjrojUeAfabJrAEGwQqrFJ8",
  "key17": "5a77FkdrcPCt4QroNQ2Emuzsq23mExxcGi6F8vrW3xuxkJRAUYFaW1XNELkxfevrWq3rPjQUyL37mnzXyziYCn7S",
  "key18": "6qbbF5Fv8m6strs93mtckebyxrAk7JLULqWvF4jLKTUiRi1Y8H1uBjbwcDS2MAFSMnLPKnS9SruyKCzXG441WdA",
  "key19": "28KUtWM5mnCw28z5wyNCVSe8HMbLF3UqPFXAX4Q3yPTjLoGeZkXvcDVBMcWG2yUX9eNsgmfkcTUPpDNbu9Xd9Y6P",
  "key20": "19pc2TCaxyM2xTuVfyo8wichZbgWHRWrMou23SS6TjXinErn93WqFXZLrJ1oCtt7n4vznAjcDfX7PwXtArmFS4d",
  "key21": "3B7fiXkSNu1oramgebT2uVhFDiXhNEDaJXeDTtA7YbFuHT6v3nrBJeVgekAxmVmLdaRvE9uJRf86bubHwzguWbHn",
  "key22": "3yDnvvkqXwhioPCSiugFdrBSXZWTpmkF9JA16JvY3N2v6xMVNuMzjSfBXGNcrqbe7LBhUQxF8asFahGT4XtFCSu5",
  "key23": "2NJ6CptpwnH8XouF7xD3SNott5Be8q3HjVNWXRw6nszke9RQWkKCH7WK9oiXT7rvDchePjJ2jkNcJ1EcoSydTtNH",
  "key24": "5yNMRsDhci4XmDgWqkSGqpfBq6acMLkuVRhBoAJqtvXCPCwqpdVznCvWXwQbmi12puwURNiTxBYQh75HUtP1QEar",
  "key25": "2M42YbvBJLU9vrTSZh8ykQR12vPhfSrCFFaS3KN39tSimdifZFmmow4cXSMkQwYqK72kK5a9TmBRrn4ksaRsBUr5",
  "key26": "2FCa7q6gc1uykwBBMNpm1Z9ZHyQg4i3wT2DTiWMtFa1nGxHrUhj2x6j9aiB1TPeX4QRvNJ336rsERvJvGzNmSjY",
  "key27": "23gT1PPkaqurHsnMCj7zrPkzA64tsVo814mtwSH1DjQkRRy5P7rj2Q83cGrnRQ3DBmUBgMEm6bf5E9s85xEsVZfh",
  "key28": "2DZDBoC6zSA3TmZqh2wEtx1r7YVVDNWHGEE3oyDBexAxccYeZ51kg36G3C3hq43Wez9k6p1qbiLuAhJG82tUZeGK",
  "key29": "5hb3juE6LwtKdf1YiXX8PCjRWP33RavkiKb5xhdTUFkeR1oVHza2ABSACCS8XgNkrA9UfcpCumVEYMBpKSTiyV67",
  "key30": "nb1iscCnszyhSKhGQik3vaU6ojuXhnzRgrC2ChosdwQpBkmt2bBTFmMEvkjK891vTrepUKkYaTvZStFyhaJ4fkR"
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
