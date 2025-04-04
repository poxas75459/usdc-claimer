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
    "GSrmiwkyiPcWMrSNGZ81MEmdViPFAWLcC4UWAa23CvaRHF9FZXvoZXM518KiyidhySFgiPFo8uEADmzZnXXrqqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaighdJgWVcgaNbEkoKEe3UNoYuyW882WcGH955kL1nCJJonirrnfHuRsg488d76oPP5sLSbJPrbcaMnUmiTot",
  "key1": "37obqgLw9FT3hbrprgdC5WAb2GCr98b1f6jVt6tRP6QJLFDqvNokNYSsQYohEodBRbFpiTaiDRd4Yk5XqJenHGe",
  "key2": "5DsssF8c6aGUZSqRQKR8RttRwNmw4xtboE6PjBRFgY9tyrh6QBcAnwpSVsYzfAbba7y4mZGgnttQT1fexqj7bDbd",
  "key3": "5GYtixUzrC3c95u8XTJMBcfr94dbTrMbLUanDnbRk66XWT8iBxq2dj1rydPgT3kJ62pVw2YSTX3qGnGJoK3YNz3G",
  "key4": "2TvnkLZPvPVoumEoBEUJkQ7XqGicwmnP4YZvvYSyG3nWA9oLZ1qZyv5nvG27CAvhpJpFcbXB6DEjJnYcvtoVfhVs",
  "key5": "4VJetb1UpQVU1KHFH8p9rasC9Pj6hLxjeRgFSt7uFAue84BsNyeyPRRPFGmhpARBjxrFPHgY2oDC5qimH3XNex2C",
  "key6": "38LF8Z4JFgKBpe342XogSmiQm7x2WXFgqhPFzG2dpnFLp6MqjDLn9uKiHv5CpsStY1bjEFghgirRvHbYw6Hr43zV",
  "key7": "NvG5niKThouU5GjFddsGtXqJXqbVosrqS63wi1BCUv2xj7HDCS1eSBSYjifXmU6XvVnPT14BEFA5Sh1AdrT8eJ5",
  "key8": "4Rc2nr28kT7icL5rnXPGK57qSSjkcCyVQ1HmGZMLWoHVhLHwNWTogKHajEBkTNV7LhBgzLQ3ksmKa7DzzetAjCp9",
  "key9": "5NPSkYtRQT8xE4MNcTtE2pNba3TRewX2vHpZfk9Xz7vozMsgG8rRMiKtrqwXgjBUsAFh9qYMUr2A6qsDELdjJEU1",
  "key10": "2QdZkzM9amnQ9qEa91ja2ogt4FRbTecGnZLWcq5YvUaPSDnsBihQCmvUYTDPiXe8sujmWsmvRszzcj6iKTfGhbfn",
  "key11": "5XyoNkN7oqQG1DeYRHQCispt6crAzwcj1BBaVZENrWZXdHKsMwdoRqJrrGAup8Nios6N1GXfgK9Yg4WcRsjRPzqn",
  "key12": "7GdYseezzJXP1TLoVL4gaozgGmKdnUuoNi9XWKNSAtZ81dr3LZLditDgNMPqRkbB2moEV9zLWVD1GgYwrZN8ge8",
  "key13": "28Q128H7zoY95W6d9PhaqKjiczQEtC5Tta2fuJSEivk3S52sZ4ZHWRndhXM8VeZAGVoyEy42K4kUptzJaL6DTvSS",
  "key14": "2iJSFaXQNq9bGfRL9LeuBad2rft4FmDXJEHFRsNzsq2RoZYLMwzxVwSP5wUBT4HLKCuxUVhpgU7qn3LGNR1ARe3v",
  "key15": "67iGbaPTnjyQaNfUAdYLjAw2KzdvyCeXMVHrpUGCAXt67eNTR5uuZ3YDSh8rJaZBYxqMNEJDkNheiiegRksKRyFg",
  "key16": "5Aw69ofiDZn2NZgYLL3W8njEa2Vy2HY3qr1V6tPC8fjagQZs45r3pYEc9ivwanZv56ujPdmKV5RUiC5CM794rLCx",
  "key17": "2ZDq7atDxDbmW1veY6QKU59sDaEeBzbZcGRynMc7s4Bus1CukeMt2HjgrEwhXnoezu6KiE3MAwcomYEd3tXVXJeE",
  "key18": "4x1d8GvajH9rpiWctgt35bGh7AStk5yasFBYe4WtbAgstr98fMuPob4wHdqFuX22BNYEmYv2wCuyoqHkkZASizsK",
  "key19": "QKEiHvakMZbdHiHxeTvwKGGuytXCReiyEQx651TnH5A4UFreAW8sPAnvTcxjP1BoBhEV5jKKFNzDq3U7c8akGg9",
  "key20": "5CZsZETzusfgPdpNp2eGHA8rQzFMpPJUHTK9HD8ooGhyrKsYBnQdcR2xEpinDNsWXym8kiLw3fDBaJ7bRDrNBTsa",
  "key21": "hgVk8zwvwzxmdMi74KQJ6CzM7PHwvgdSQFZGEdH4vBJQiFjWmLCJ5xGTM95jm9foW4DSZLqHLNcFRXQZpFz327y",
  "key22": "5KsUTPvmYHm6teRbxFraw3VCwnD9G4DRAFDtCGnyq3xXooU6ELBouKEoWpQgUvbbCpR9Xk8BH9S7mJ7z6LfgTGhN",
  "key23": "3z4n8tS9y84CCDFwdwQikRNuWxkQbJyo1FFs47JYkvBkdWyuQ4kE1rvRT5B653Ef3GXtwzudaGUYVLv7HtV39W5F",
  "key24": "3xfu38H4MtqNUbwrU4LNghnA8QMNGRcQVwS1E91ux9dyhHoK6ensWJJCbdyPXzS6CX4s4ffr2bK918JyneXubJVG",
  "key25": "4x2MgFtwn988Rzvi3P7z3Y8kgwDLuaeGSEKFyePiX74soz9nsQGbwDoKr8qm76gKHMZnUBh9U8giJYdJ2u3XZuTt",
  "key26": "2hhQa33VPLKDvGYZQURTQMUDA43VoNpNTzAYeTX6JQvcFDLEq1E4GV2S19MZuZEEs5VxN43B29YEiXX5NPs1EP7r",
  "key27": "4bUriT4bKkyfHGqqW8qUtF6Je7vhs4uK5FnuSMyxKQSB4pCbvumNVZtviPMg7eXBWJKtyDwnJvZacPkYRj31ZvgK",
  "key28": "mEaMaqvhM4bBAeRvGzygTvQwPqvdmVLpyDwpcG76iVmX9pJPe2RBYnw6u9VG9bdGkfmnhQfTWrf9bpj1mTq2Do4",
  "key29": "2sWkZGrtV9W15kuAwtNC4m37F2riiPwTDUasxrA8DuzZmQvySuULNpxBs5ejdAZjy6XcgixCXzCm2QhZNkWCyFSy",
  "key30": "45JoGxf3JYPJAdVHKH7ycBAiLnTWURHr7jekP87MdLcszHJvFn94YqZchcFcnT4rB1nmvDKVu5ecYtGbFbUhcz4B",
  "key31": "4CVAaZPhk7ng1G4ZiWdkuGG4mrtYCZ1DVuWvrQzAc9WpoxADfy4VQ2MXEaxgu97izuFMatvWTqH9mx5JXc1jDkdD",
  "key32": "3eetWjwe2EswwUUTzLCppfPLZDNCTMqpodgJVdnC5irJWfcRbMgrfUAfjZ3iZMSE6TpX9Ge6SrwpzBvgYgqSyxf6",
  "key33": "5M1XoLYjL5geNaR9UpcZarFhFf6dLNsFgWE3yU5hGqLaES8avxZPej4Nqi5PqL8ZhKt9rUsotsVDY3n3VreFd73G"
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
