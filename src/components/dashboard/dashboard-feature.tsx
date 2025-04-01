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
    "28csXRM1VM4uWo2scLBTqJKdZU6Gk2nXfuMNbZmAky8ascRFZ94LbXmKuDe4HzcJmFZgKhGDpmf5c5aQ2mYkxwDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c8L7BJsYg4FcUpkFJe2g5PE5Fexr2zSbaWkdQKWgr1FP9qpqYZHPa6mwquiUieVW4wn7zBSaL97zMqQRDwPwbj2",
  "key1": "3Suf36EFYHhwKY2xgfwnfnYixY61E9fDNFzocHGx8nJUX4qu2r2HxBdTzH1i9RrpWLyGYhaSCXT4tYQwZs6KP4r9",
  "key2": "3NpDMTodfMnaYHydLG53uKuVaujrTtL7QCJmrSHqeCKRtrFWJCzaNqxLDiUpNLP58a2T6DDs5bcB76LjGp7VyvsM",
  "key3": "2TEv9C1Pb92tnXP1nx9hnsJwHaWWqAtGp25zTceSs8RSwVBHhtBBnCJWr2aR7zq22SsqtxjnYWHQ8EGRs6vJ2pA2",
  "key4": "5FBDjh4A6xSRraouQejJuDEnMioXgj4SxRLjQPF5HosrBUx9BhxRjA9risHXcYEo9i1giAdqkkW1aw9F94P8Lmub",
  "key5": "3uCG61LLpq6b9HXyWEZ8DmzqbfLiVKeH4VNSzVAboMrgYaKNZjKoX6P1yAvnunrFA9gE8ki3ftGK6Ubk89r5CPaU",
  "key6": "21VcTXTjPtwpdk9ZHae518H935YuUFyU9nk5W7pqWPucc7y4rXSYT4eTiv9XGHbNz193MYSKssdF3ywvjZev5GrJ",
  "key7": "3eTvAmpLXLNej3ze15cDnz9u2qQXv6XcfvZzoEwqFaGZcVzwvr15TK5Y6wBGNTMKzgtFmaZh41Ji9TmCeyheLTkw",
  "key8": "5WGX65aq9e4aq2rbZkenBbfWTLnkxTq2YLifx179955qjosun8C1xjRav4MJYwRDgJVgzzoGexDzX6VNdHjkM24B",
  "key9": "2XLs7Mwv7APcpzBm9KQp83TKNqixzQt4GrvzX57BQGRVUgAbQbf11MtdjJ5iZyatM9wzYytowkA7hBytqKYcJ5ro",
  "key10": "2JKzJ7R2NwJLLcKgzitXEpQzCdsxAuS4QYYF5m3EeCQ2uF9XWe5wt7X3iM28RTrL4yJvo2ESUgGgAiHrswmwpgJJ",
  "key11": "hg3JgScrg7gp6v6eLwri2w6eLdcYi2yyke8BndxpHVj14CzBgT5VKLb2VrocwytqESgBjb1ijLHxeWSj224uUJn",
  "key12": "2ydttPqLZ7xPCpoAkwui2Y4zSc7iif8NjL7acGQijBwrhvAUGaGVUfSQBe9R3iPAGCB4M13C4kdp4oMhGGtqsvCT",
  "key13": "4yJ6o6DSBjqTWWQFzt6CM2BXFNpmKLyiLgtWp9feXEEcnErmA9xHjo51a3kysGpnjctdMqBX4AbvtEJHNeUXx18C",
  "key14": "329635LgQqTd7SciTR3k1CQms9KaYPCCAyaL2WEEpL5QJ47r98VYcSXcEdSqgY2QzFfBFgFUptjTeHoUFRS9m5WG",
  "key15": "4R4JRt4NW8ViWBsWxcNdV63ap4yHE3axW3ExHsuZvLvh8m8xJrHXWWuCu9P7f7wfAMmbn2cChG4Fjsc1QQDv2FrV",
  "key16": "2qecDSr9MAxA692rGSbqRzb6YVEbZzLtB6j71jCPmvAri3v44KASo4dSzNNiT6EZq1UugC4U8f49tyaqKevczUit",
  "key17": "632PsmAAw4Lun8r53vk4hYHQk5xPY4bT44FCshNRQP8LX1Mihxqe8jHMKD54xsBYSHvhNux6TqnqPpPwNn6faPi9",
  "key18": "5W98YnVLaxwzYfS5wrTV9z2yDccEyrquDqgrsUSAMVqPjBqnTvRCnY2mCbHaoBJL69MmLNiYVnVwxHRDb2jQL471",
  "key19": "2yyyXvUGM8iyLf13buH1V71kPdkNhp5s92RsT6PAAUzkkpPet4wWQfzQZRwhF1KnxpipTu7LqJsCzLYqajyJVm2q",
  "key20": "4mLYUBN8J9Haxf9gJkkzSrBWokrSpDuV8rNG1QJr92QtDB9BLbQmRZ7Tuz3XmoM3qnbk7sX1m6B7dD1Q6cZ9zRjZ",
  "key21": "3rjMSK8FLAS3ghZPk1MNQygad14NBFDd3XtPHzM6G2ajZfiGgU6SpV2kVBC42d1GwRua7zobn9DyX3NNEnBbfaKW",
  "key22": "3XPb8XKsae9BYFmMfwA2X3m4yBnjwtN7tHzYv6W1f5PRNs7vjeUdWGSXeGvzPh6RbhDxZ5hhvFf7YYzs9c23KYE7",
  "key23": "3ymH2bthQEgjoVFBjkYVV7GRNELfQyMdomzfFXVewrwjcGthPdifUfjPWVVtdiczuDJxt2fXE1sbijxy6wq7cpz6",
  "key24": "3GThpE5xqCPe3kPfupTF3XFuDsxG7FjkEML4mHSwvevC1wN9HiL9YUUYD1rU93ZNRwEzuk93mMKEiTuGFCDinG7q",
  "key25": "5q9QP7ugznKQgUYdzuXeGa3ujoeoag1f6bc7gmUGTKwe3dKmXNDCJxZNZAbgEJdNts3ARZWvLZb7fzCXE2rogwbW",
  "key26": "5nsFsYq6YpE3uKwAv8b9yBSLg29xHyi7WhGPiknfCX4aKBs4kcnj3VBUJCpnL7EVcLgHeC7J581WmvoxL4YK5Dxz",
  "key27": "2gymp2xqrDcrfcdiea3Bd5iohCawTT3Luh1Vu9AgS9mHD76Twn5ej5yYeiF4EKGY5kHSsYWefHHwf48RJyyAi2cU",
  "key28": "2Lyih2SbeSNZnXsSVwiVWEfK4MQjmR7DxNswsQUU9bfCAt3ChJZDjZfrub3rJnFCW8XhauYuBK24qw78utFAHq8M"
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
