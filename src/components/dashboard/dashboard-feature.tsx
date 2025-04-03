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
    "4eXDQaFpuKLvT2qeGfnHQeVrPrJFQ3aZRur5kVp2tzoVEmuDh8kbcJMuPBBNqHT8jXghRHXQNcB2VwaVodKDXx6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2jrZhLFC8kUDyTGSSVT5siyUEY1Xd63QJuUyKDtL2W8GuKxM8bvPAyYPcaBRUJqWHcdLA7Z8FPbUMdbpsVNCa5",
  "key1": "5qmwKby9R1TdSRah2V3g8TTxsQB4p2uxxumnaUwjENkt9dWtjpEd8Pg9NSNRAbyuXMxX9q8dUEJruYuubYkdbgqQ",
  "key2": "4EAR9GKEzBaNKuDcu5WgaGWTJr6YoPfct1kehsvXaSmcFAbRJ7wv97ohoYWgRk2AgvpU16oND3YeimcJH596Tq7b",
  "key3": "AgbdgjvzD6iE2cDkY8diXi2vDFjNRnEAtL1ZGoz9qBM5grZkp1KLGzGsbb5jQnMv4vf778S8KKUCgVg47UxBria",
  "key4": "5HfdFYUZY8a72Ga8jrr7ftS2aLfDEZKTXEqLSKzTyWDioxsw9DX3Ft6dfLFWe4uS9fkwc2AxyjZxKTTxU59oD96c",
  "key5": "63oHJjAZ7CmjVSVJEuau6esKgpaLYb6mvWUNiop4sZhP2CPt6uKViwAdjAFUx9giNWPuLMgEjgw74EGmmAE96shv",
  "key6": "66HNZBQY4eqeVvW3LAbKckgrySWy8Nw4xMRLtH95epzvmZAeztzjezbhJmimWTE5mQuoQZ5TXUZLoYGsv8UtoxuR",
  "key7": "3AoMsRtkKbpUzPyUBMecvz93dkEez1NfoT82vuWuMkA22cYNz2pE66KcaLhzqD6jcXoHUEvafM8JdzqwEK2gCxBV",
  "key8": "4jizE1wqcsZSKmcR9uXf7Yt5UJU3vvHoAtaR4CBk9W26CS58MxzRrXhW9XZoK1pKxgsoQVybjFi45DMZwMVxBp9F",
  "key9": "4TGaW7bym16HxMhtBgUdUdoS72WW1wFNRWVTRYpjVrYBKjhwEYGyu9MiPcp3CibUHT1jxJkY67VXjmK1CqoWrCpV",
  "key10": "4RL1J6A64cEhHF5Co8hedXMBvdYpvmR4MXuhc8Eu418ufbbQ8RZ22tBf6riVQA8hoGumrCVhshhEmpB3ZuUSXCFv",
  "key11": "476aTn6nKarvHE8Ci9KR57v21kmFLpLjQzuoVRBxpD8ayZjgHCdEUpvvxLbLSH8oXoACxMCbGVGb8UVYMtgnM37B",
  "key12": "3ZxKyAq7iRQfQhoi7AmNw5f2Dz31gbLMuU57cg7Uu8TWgPAgwz5xCL5vdnWyhPjmJhcWJymuEuMGsEkwEMrCSkUE",
  "key13": "2auMoiSQ5n8vmXwp4Z16KiXoAcWNcoq4KJ5dnW91ySPuCChjNSN9dMxB8FoUKrKjaLdEhXv5vNZUhF8cfc3MjCJH",
  "key14": "dRqidQGsVoCP5ApP1GUuTtie17y4MgcS9uLoBxWtDzMohHo9u7ahV5QCd2wyZbJzAfkXcgxh6BER7o6vMnYH8nv",
  "key15": "2JeY4G7VquF5Q8HWz7wTn6wknkB7zTcSXXNCgibLczmKp3sgsiWu4mu5A8aijDVX63yzFNKwYJ1n6y6sNCfXUkvo",
  "key16": "5F9DutJZ3XBkX2vQUb7wBESCHyhz8De7ajTEwhWS5GEyA2UR4VDkfVzxSZnPDj5NWWnxRJCyQxWi4PimVWTPKVg3",
  "key17": "3MKee4CcyJjSYM9SLCCXfvpsf9GWF8hBgdaQqpAzcLroSyH5N4wJtpfxCyq6Y9Zu2REM2KEM7s7TXc9VFwPinudF",
  "key18": "5dmjMLsR189cqB99QCASzJM74pBxzhBvB1DHY8R24rUpvYhg9XDeTVej3tiTUEWgFJFM91LKJQrw5hWezTt8tUBm",
  "key19": "zmeANx1L68s6B9WXGduZqGHVZ9sjB9d1JCrNbXnQ5kdXin5XoBvy6fQPHv1k7PwkH8Eabsribko55Erk8FnySBi",
  "key20": "782GPmZQfm7QFXigr5q6isDh3BkSbpdnQgs7dXt8SbNkvrHthJScS5jih9jnwR4KqSWyB4Nv3kAYWkciFEeyR9T",
  "key21": "Ged5gDRdKsFp4Mgs6YZwoR6uVrUsmhQQRhN9eBX7NwaBjUJw1qfmMtiM8LTobUREYpoaBQbjXMtH7ZzkN8Djn4b",
  "key22": "48ms1F2dFMJZV3F4FvgqqxLW7PudiwWp3h1swz3ChgeMibAtUx13GBMAtjA8feGnU1kRnaqv7ozJV3Q5niCjrEk5",
  "key23": "3W9C2iWGox9yk2J6X2Y6RAN9g4AVq1UE7LnCTEax5GacB5yu2HWoXqjuoBfeV2rN4nqnyd8gv3HefijbvvZTTbZc",
  "key24": "27LEEKQMGoowHiJgjCvD5E7jYHS3LXsEPHhXhsMkDepYBU6RVuFjqCVZ7zcGN4dKZMnjT5QSCQfJPV5BagUJdHHk",
  "key25": "24jAPRpPQkPXtqe2muRjT5BumYLSTZFNPmjrmajE1JfeXQoszgP3StLTX8aMXh89hqJzNkuKU7ipHhFf92j6A8H7"
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
