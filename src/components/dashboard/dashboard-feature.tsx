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
    "LfCQLAnefo1tgBgT6rr2fBWSbxSE9CnSvA8LHBw56mpDxBB2XxVdczBPEDxm7pxxtuDq2JwdHNHVMgBafSHYjDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NKTbumuPCn737Y9eAr26hBV6Nn2dyDQjrAYuMoFV9nTtuHCiacJzPaNdAZazfTjbwJLkZRwYAg8Vw5jNJVvoNe7",
  "key1": "3qE3LWfhMfMfzPjowxUyMZWQhoFxk2qvnKp5AavAQEFvvDi9toBXEmzjorDNGy3zKC5ATRGgvcNBjzmUqQE2XgMw",
  "key2": "sNNqCUv9rH2afbuXN71piZUZTYaMAPDw1nRGnFNVqjgMw38CinGiUrqYfHEMAQwivDrbqYWfHZiZBrWkrLJnKo9",
  "key3": "5wdtV3vmdeHSFPoamSEcVBa2sLdwZF5HHZPVe7X3ocmeGfGsnTNhHJSQRCKZj22sLrrWDwGrcq78skoCUbxiqFoW",
  "key4": "45viJ6F1BtxDLvS3EATxN3FFJCasPBRE5NeGGYf5fjnimHb2mjNWtJ6R6kBPr1tTojE9vZaLMajBGN8Diis29CZT",
  "key5": "4HhjiPyPQicZWrhy24qHxRmqWRNgz2DiSbzEwRbWwZjGwhqrC9pQ1kd1rMFERm8Kc93DupusXDBJJsdDeAYyh3cP",
  "key6": "guvoVqbBsazrSVzqxKYLGiRLf3JSB1ECeBvHRcfQXJDhXXLGNcxTSEu5nwngXxmTfaLtpZxNGc9EfBqu2iAPRy8",
  "key7": "QyRTAmiQ1YN4GNgycWDbZmqkZk1U7kBk9oBWi1fXBAVpRfewP1wjRPPBL2ESX5o1gV8Jr45s5og671zoJHNoxy7",
  "key8": "3zWaT4aUFF8Q3LtfEwksQ9N8auNofdMmkT6HbP6b3pVY8chmGtuTNgL44wpSHPYFyTvJSj2wnNqfDKgoJ9bnNQg3",
  "key9": "5YbL8pytQA1xbfHPARoGF6rs5jdQU3oSqqiVd1DwxGZb4UzYJMPfgsR472w81XJF47TGxKwHb9U1yxEBFgrBvbXm",
  "key10": "64a68W5ed34XWpnz6KuzeVEFrKcVFbn2apo4hLQMUArFAhFbe6cqEh5ka6FqtFYwx5CGXzp17mynUZtvHGBBgBVR",
  "key11": "3JajdVAm3ei6nx9qUDCy9LvQBrYKNDLLLtzXXY8cgq7xBpZSnVJNw5mH4jsJb4Ga9rcUpaF3q2AB9aSXuVTdB7eX",
  "key12": "5HMEuGVXsy8cWNVRxCCRZPG8TxKbgfQhGed9wxPBd5X7TkdoSLidWtfns4DoRfhzE4mvSSB3LoMpiij4ugibkae1",
  "key13": "2xBdrSV9rXTjsoS6BqtSZFeJrKUFw3uwEZx8cvTpFEc28CdwKuBLWUtKx3yiaRbrW2UHjCTjbYZRwGb8Pe4CRx2T",
  "key14": "2a9vTgoctR7sPuuYiu1NjV9ob738qXEYQiCFtcGJnkBdJhU5TurKfTb3L9VzHEVMsYeCj3QpQZS9TQ2PcFWdaJWS",
  "key15": "3VCw2mBZRUaTLtFjoakG4p4UhdaeJRmp1ww48GV5S86woRYYWjxV9eJfRUVTSK1QBGfAzzPrdeE5z75ytzduHAvS",
  "key16": "36wCxmZRuM69QEJTHTcpCL95apZBAKnH1yGpsq3x7ugVkpGWQjXhH6gajZdQ4ftBQvsqnUPxZLRzXrbx36XtJCba",
  "key17": "M9AKfSTFAqw5m9cFBC3TMz1yaLXARikRuFTWWA3GxbPuSezS7iUtqnt5gK2PnArTgmbw93Fi8hoTNbYqXjLdvcp",
  "key18": "4ZiM1PUR8MbcCpexYkMDdQei8TH5RGxcnbT4hxCD2McfuFUAFXWSLnYydB9z5rLaVTUb8LeGq7M5i7irNwrobSQT",
  "key19": "4S6pxVVyUqq4poGvq3GgwBUscxrJE1WyLXtAYahC6yfLRkaLRJpQBo6AdHiGiVJn8dJ4NSA8jXuxQc8wBySCEzPA",
  "key20": "5zNkaNhuyhDwZSkfRZ6i22KefKwtXB3nAxmHL2SrUSNSunUAjQtYLsPtATiQqP7qfDw5de4mhUnodaR3VPQS1Kue",
  "key21": "HNsTwY1Rm7ZsWQkEptFgvZ5fP8an351J3z5s85xBFukAYTeBvPkT5rbGcj95uymt6mXh5rVatghjvTCvtgBgWj3",
  "key22": "2o89iYYH4aH1PhZTrUKEDRaYmnNMkJ5DQot6M1DPrZ8hUUcegKoEWq2m1PywUqDsBcJFaMLbj7yqNbNh8xo3Pn8A",
  "key23": "gkyZDag2aW9yg2Y1UuT6FpZeWSiWgnJSBixcokT6HnEpqeNeaNmdoW7zAk4ViSpe4aXmdK9TUqzQG7ZeHYjhKdJ",
  "key24": "553cVJuptndRpYkuHbwuT1sdbj7QHmvJRuqtZ5kVSSYoN5RRtQNCK3puswsYnr71cXdv3WvGQTaDJ93TkDctwFpf",
  "key25": "4eqiwsVPBDiEudaH9Vxjs5qbdDDZhGG6rFYp9kbhA76JqWC9ydrhtQqkRwVQoy2XXR2T2a3TMavFWsNkAnzVuCUQ",
  "key26": "3QGM8eV73JrW5n8fD5mi6NB7TstTwVtKJ4ZgoJu2Eh8wb1SUx2dP1B2YihV5qDH5NeCCCu8GXAYhmMum1Vmb7oZ4",
  "key27": "3EwwA36XrbtZWpRzv5FdqUjSo986JH96J3PxmZY76kng81E5KLeH9JozGwHnZKwFT4QqoBdsDZLBezG5XKpBPvRd",
  "key28": "2nTVz4iQm5ahohxpX3yCH4r65tHYwPbotQroMwycSM3ZYi5KDTbeWBAo9ry51xvVXyXs7xV9hJ3oSRMiSe8zfSaq",
  "key29": "5SwQfeWXpiBNn6vu3uZPyyjqSLPhirhyukfCWxxX9dJEnPZ7Ziy7wstLDVrzUiqV7twzyf6ywcYJhaxBqm79YjHR",
  "key30": "3PanrQ29aXBBMsiZSqvZSBtQcgDvnvCHkyu9Uyct1r1gaFCv7Qhyk4ZuPLhTpqViCqrQ6wKD72WDpBwyK5814WPa"
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
