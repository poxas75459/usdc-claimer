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
    "3jguVkfwDvAkaAtgGtuV7HNi1wSMNjGHP2S9H3i4SJZBm2SFpnhkJvNbDPEpqAXG4PMxyphBxszJ16LY5eWBNDH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FywGvw7ZBYu6rWoNqRiZsKJ1ASzLr3xSokqdwfANg8K9BktTvJMRdWJFiwjJrTbHk5UWTdS5b7gVBC5SckfYA3T",
  "key1": "5ymCtScStADzhxtXaehQyTEtv8nR2MwQ6EZuP6dXwJdpeQJY4YfZht2ppAohCEhx3HFGVHqZpHWhseejkKtJFVX2",
  "key2": "2KCMxvGLNRnMmaLdqebeKimp1JBqXd8UqQaWk2mQTtttgbjnR2DsUCdGBk6Psyk2ntkJ8c1q3MhiGWAXBM3qPzgu",
  "key3": "5cmJ2w3ccxRvLqUA93JtTQKJpimj8o1vfqNFYhGhcTUzXLJDpfZBWgzA49hS6wheKxaHXdGPMu11MPDik39uFa2U",
  "key4": "4h8k7Mgy61LWfKnJYdN5sst6KiRaBzBaEhgEv7h56cbw9nUVpNmto4Kt56eJ3zTjB4Kjir57Aq3zYqivdAmm8r7w",
  "key5": "5Vzc44i5URU2UzyFwbDUMmbTJZBcv2AacH7owCZBNwvv97FHxYsmozbN91TitKAsB4YRZ2yc2eDeUAivCUnoCrrf",
  "key6": "CczmZA5EK8CSEDXRAcxo89Js91Ttnv9y3DeEhwE8hCraNQWJRJX8JQCB7Fgb5e2Q5RXGhx6tazvPHD1LAcGQkE1",
  "key7": "z36Hs2YWEL3qY6XyeYZgdPz3jDbiY63okK518KkaDSQMk9QSCWGsRhKUnvkWvkhUd2pZRgeTqg5jFVwewG7aJu1",
  "key8": "3mScfMgFRNZiKsc8xoYQzbhoRbG9TbvR4wpWSqdnLZxJuvfYg5xBceVfRGH7K6hj6T18ASxPdJ3ovWdE78Go7sQB",
  "key9": "Q4reHKuM5irA7ipR1hbksEu6HwDbyMHw7kFGZeDemv7ocrZXVMfgct9FqUvxpSte1wAPEahzBSSxSXGPYmaSTmm",
  "key10": "5UkA3AURgvLnpp4Weh7MsfL4JcVVZw5rjaRT36ZKHQGQAS8wsF16t83Y3vmAYAE1TiQTvfFiQ3MybeZKgmTZM14K",
  "key11": "45yVhBmccx5r6c98YjvtTivWFTXaoAUxGpKGSf8QzqjDXym2rphknY5CJmxM15pMUjs3j6TEyaajiAJEs5QGpYNp",
  "key12": "JHS6oA5XVJ6bJE75bCL5qpyzg4H3BZGYxbfX3d6dFJWXa7P6TnYxg9aJ1VkBBgjCyzx3sCVYAmGbM2sHA86VTor",
  "key13": "3LKoZevpUCXYMfy1EvQyeZu8vb5T1euzyCjmU8fd4QZNjsXVHvzC9PLHR6u4KXUuNdCRxxxkWxaHHZ5J1wHyp6oC",
  "key14": "25tAkrX2ytuxzsQLmtXevWT1TVQ1YqX5ve5yPDrZh5vY3FkohKF12QWU8P7VwXJVMPqYah5Wdpi8Rwp2gV4HaVga",
  "key15": "4Yg79kxsa36aRRyuBA8Y6v3Qvz7Z2FAQuMKg3rZHsEVAcLi172tRoyjEibyKchemiT38TJ2wTzpRifXY8AQNpHg8",
  "key16": "Y5ymxbCE95BYKa9kryrjwgvriCkivwethWEwTbEmoVaBu7qvDgZdoVt7C8Q171UiV88rTm1gqL3WVdei1K89xvT",
  "key17": "y8wBGDbnLyq43Gf1ps1bPenFuDsEjmLNCKEbgjVmvxcbpf3WCnYB36EQXT1X8rCr6iZKop1dDK7HupphKjy8gZU",
  "key18": "28fAVy9GKPdRPni7139BWmMUFpgXWAfjUN9JG8rKWArBaktV92ykVEEaWj6eWuSmD1YuhshcuvpiMEBp7cEg5S9Z",
  "key19": "2mQoKd9JgkET2hzBqr3ZiqkHLFro4iZBq6B98CH5PsBYH7VVJrBw6dWxn8q3BMrU2CTFo37vNA9XpNaKxPoEJUK2",
  "key20": "8Gj7xELhCSpwvcvJ9kyfm5STiqFVC3WJsNz1zGzqVpxFZspW95LVjgWJYF2BUcvDowyLt5PE1pvdyhed8RgFbux",
  "key21": "3tHMnneDrSuww5QUpXu991cXVRR9t5cw5KqqUn37SHyZirUyLPpexyc6PGXNfDNNNZK59cjyhhywsZdce5B4e9Ma",
  "key22": "2tenVXp5xbtaFUmG9oJ8Cx8yZoV95xfw6kwpfH2rRefeownrK4LktyQkrRB5Wh7PYixNeBqgS1RYVC1RZ9NeGfLZ",
  "key23": "3b7a1cTFL7yycnuAgptGWsgYQREv2RkP3LwSs1twFQ6UbHpkDhYsn1jtTnaMpU7ptJSBehENrQbSQkLUt39H46hs",
  "key24": "2GZpWXkM3hJDgKL6nRv2uHpDBUF1A6Vd58WaYkyRF5rCkWir7ZfegEgjqjq2kzjyiJEjSAUkKTBwuafR2ku1Udz5",
  "key25": "513hauqZRHxS4poSofH7QSrNwSXG7ZM45i5sECakVTUhX28LGNFHD47gWTmf7ncUPg4UNK1ZXXqcPu9gcEFLF22L"
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
