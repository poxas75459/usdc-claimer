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
    "5xMz3aYHCNG8bnfpv1aQzBUm2smadcwGSohs7NwhPaw9FsNijqTqDtdV8N6SPGDiEoxrf1qj4fF5fuVUfeNo7KFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d8wNTV8ezgYNJGHa9ZoELHKX5M42c6hbq4ujrFZnTYCFs3cfoxHdz6TLynBJ76xuzJdAB512JBrPWwzdMqn3aus",
  "key1": "2DyYtptCtPb7F3iMTANbwNkwPMSxB2zZQxkZAnLjDjFPzua1jhAtvVpmnJnSQscr3YqBaLbCiC1FCFPJxQyrrShJ",
  "key2": "4oYStXDKzUDeA2TxrEUXrdmywhjABUk3DBGTwQzoAiCCPNvyfbTodAYHr6Qnvtb5WTs6GxLSt2HDRwDo2N7EPFfW",
  "key3": "4B3oK7FqWLcA3MgazyrnSQT7H6qotooUoyxz5vDL6iAvtxtSa7FG36gMwKMVJaApewb1n83iWdJjVsUhrEdarZSY",
  "key4": "4dtWea3K81HM1MoJDWNJs2zNwLhtPGg2DxsybHfvjVy6PbEAU4yuPR4CreGe1KyED7gw44RK9VNwVcDX7huPKQm4",
  "key5": "4m7YcFt2YX5JUAVCHsEVgp3weUEuX8CZu6yEUKM9794fv9kq9ZkT1uYJ7qsdVwamy7PQ22a6SrBNJmnZ3kFN5ccJ",
  "key6": "4yhgYDUbUeBgHdSmuPc2j5eSFQyeBwomNzi5bhkZ94eB7ehSzDnqfMuV7QYNKq6iLQk3DniVdPjs1YusRsTR39Ak",
  "key7": "58cubP1myP7DxbNdiNP4fH7rKDr1YdzYuSUEXgTTebiVK3ufVKECu8HjXwuQmvrM8w6KKY97b47JG4kcdGFJfjq2",
  "key8": "2Uz3LWqGeaEbXdQqdDvdX3HPQqXNMwzQyfLv59pkp3P4e5YL5K5W8vY7Bds9ZzUwAwcXT71ob3fLHZH2z8XQoHbA",
  "key9": "3K5TfnTYGCMcg3p1vFfVS5P5hvTb2J2U78orzEo3URSws33f1Hab4FJDS29cwgWm1KU5rBZRdnnHeWx8pVravXhF",
  "key10": "2F6XXiPzHAiWDp6cSv9vzA4gQkGYyejWjtvZEZUypZ42RQ3yjuvAEgMANHeRLAAz3uGPbpEyC45hjcTCzpnpPXxQ",
  "key11": "3rd5wa4n5hpRkpcnVmBEecXHRDYZZwro3tXNzjY3xWLcBEftseoE9uWmys9k6vVvhqqyMoCzfShyKkE3RvHFm7jy",
  "key12": "T826VNcsy2kBAWVreeFhr6DmT53ULekXr59rv5sQqy8TTQikJLJZwCPd8WzcSyTxVPddwA8KAQ65TuGYtjNa5R1",
  "key13": "2saok9NvkQ44ZaNrCoAG7LJsTNrbz1q8Q9XouCyobxzhe7obUkA7Q8DdGLg6ASHwcuvLXe3S2nCF5FRuiJQVF4hF",
  "key14": "3zUgimwyNcSH1FXxF5RNvQe5wv1zz4KnYD52SfyNB5y2CWT1MEU1ENyT9zLvuU7o7Jei6ewoquucbbPX8gmgUZ1",
  "key15": "GuxAQGnaG4cgPJNGxuch3dU3RX9fUKn6rbSPCd7chHB5rBshfEtNwfSddn6uqX4fKSYPKRqUMBUYEcYDoWoWu1U",
  "key16": "51a4zdyTuQxPiLqM6SGbk3H65Tn27wYfaVi7xfX81rXBZMR4eVJ9e1dh5aT4bu4ohUUbjsnkg1yV8Cgbk1KvX7oa",
  "key17": "426cGJhnacbuQvud1w3gFzwTCB3zzwmGyC134fzVzPbarhXB2if6hKwXUEKHHDPvuCbj35wipcUxhjAWDBuRWXDA",
  "key18": "5NDfNNLVdMAj59ZJieKTwyEM91p7tNQGcaCbUE6dBGERP1cuNdQMNeE3U2hJmKkbAkDA1Z1VnQ5bi5wpn5oottA",
  "key19": "3STe8Gio7TTsubjszs5m1cAve79c4dvunmkuiAXtS3yyo25kowQvLvbw5uL2aZrYt3h94MqRiyhefUHeYtHb4C9M",
  "key20": "4bN985fx5ftTQzcwNLJNpeM6zwGFhGLggApTa8HA1a1y1J2zDLuEGjo9NvfEPNxGqzQBtAxnTUYTaknqgowQXV7M",
  "key21": "4odwtM8QSNDumUzoCsXsvxPVkuX5kYYRyS9h3wrw5YoFFr99eK1WJqDTxzEtiFaH83dPardsbrS9CrTR9yQHxp3p",
  "key22": "gwV82oBeuHetTXscVbwofnES3KoZ4JoGw7bgFrty12LRRsqAPoFiLX2KRc6ZjLtkjxyxxAFac31vjX9qUJLbxZs",
  "key23": "5bqQpYjVSDUHKdjYgRAamV3EX9Bo2jNfGrS3i843Dr6gxjimzvgsMbCHDnUqNwzkEWEWiRLbMoHsV83RSes83sST",
  "key24": "24tpLi7xZFDnCHjYpxB1t2427q4Lb5pXef6FqEn5Bv38VBxWJoziUmxv5b25JkA6CUBofzFHELfRZ35uDUYLvKgb",
  "key25": "m5Uh6KFkfKtLMnmYW6PdFKvcWbrReEKhP78e6bJQNBWBvKfBqe1ovMjRvAZC3pQnjQmMX8zuSJvpjdSVuzucwvR",
  "key26": "2jqLXsCZAsuSoH8uQxYTPPW1nj7cReSdxNVmnVfpri3JsnphjzByBBQErDT53KXjGsCYyiP9szEMExUXwVBgUcAo",
  "key27": "58H1gx4R7GkMaoVa2ruhfSD5Ru77gKxQdLjm5MwYmv9E1skPBcGFDRwYZZqZ4zyPTFbokeaEYEtcQukpQphzuho5",
  "key28": "2LwXRrEqLBXWjfBer7tmBnNYkud4q5X7b1bA5zP1df1X4TB2geNyrrqDQb6cHg8gxc7CikjjVjuEjZtNz37Jtodk",
  "key29": "36RNAGh4zEKpHtcPwc5Tbo6PJv576bLsgFKaXFHW7renV7nACGbmSFuKkdT9LQhSFo1fabs591seaNwdeUQUp7KN",
  "key30": "5gt7CEo37wVd91cYAQvYjyJTES8XAHWnWhBNw2SS3LV9N6YD4ykeHSyKYBNeoT7MiWiHuuCSztBLxmrax2WJqixg",
  "key31": "3uGTptbyQKvV5D2UHqgAnsd1QBantHw4sbaPWWS1ZDXV2vWYbX7HVkJbBoZ2nJmso6EaZQxGwciz8wfbdxwzQ2XZ",
  "key32": "2eAxRKm9qxhSeL58Dba2JvNwb86n6yKJBUqY4pJyDhomdvj4nf3GCwjjTcrnAKqxwuZMUNwBmTdUQ2hoWqxMQkN4",
  "key33": "4xtnek2fYvDzfnCzmh3MnVJmEc5ADWnNViZsKXnJTzdP98XVDWx4q5vfb22PPbeyeF7uWF81JNL3goW4JKpDU1Kq",
  "key34": "54tDqp8e2524yEuZFNRTiShyGehSZgQyrCMDjHSuew3tWjdPTDr1rLBUBkNxgsabDAFCdCUgCFbppMmQVPg9VZxT",
  "key35": "5PCBAiY3n8wMreW6w9SryRTdurRDY6923vmFQsNG5BPKf7782DwxY9LFzo6ahbrViLu8npWT8TcqKRYww6C6CS7n",
  "key36": "3gbJzbqj3UqT8r312vhqGDUvjjcG7DajwRjvZpPFU3tiUQsHrxdhvQ1M1XFiG4H33WVMckqo96EJDtoRPaSmQHCk",
  "key37": "4YVhBVrnx8eQSUymf6btEFeQCPNvZpkTwkSKw5c3g9QMaePnK5uQRWjbmPna3eGiuvPYCGMYQttyKh2chE9abDGw",
  "key38": "3Q7zgr7GQw1vqm2FHDPA6HaXojLQ4ExVYJj8Mw9wDqP1P8cT373Ag1BMTPowu4923vuLrj1z8rjmXtZtHjzDkBtb",
  "key39": "26QwG9R4dCxLvLuShMz44UoKZ1xEnDzAqcRF3HJN6xS9HLPyYmYEwUg7376EV7NDLeuJ5Ag6XTXNnet8a34jFQqP"
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
