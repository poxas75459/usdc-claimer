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
    "5aPpwoLjppdNtX2gmARE1PMjEnfcEmde91YfKwmgvEobAvSrixCg2NM6DPx6JYPYD8yqH162R9KTqp45rwW2QMbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ieoypEfKhkK7CSCA6QbQ8AkwY4zZ1Y4NT2jUvDowJvsA2zFBvhbxaXVYEKPgGQxKg8Lo7dW3H8uAwP2dd7kFhrB",
  "key1": "2pP5Ne8rwi6Ja3uWnhFBnCDRGDPdZtpjxZC8T9Y5m4KDiP8vcwVd5n8mJdx9N35ezhUTfPPTSGodomr7YErq1nGs",
  "key2": "5PdM3YMHVEYHTwjyo4AZHmL9PwX7CygGiuXekcWbBaD8g6UkEC6q38tsj5uHKLg6EMhEmevz5bBC9uSzejL4VocB",
  "key3": "5Y6FyQkfb2budiQhpizo5tqe9ZVgnkz21TnJyTPJYTiFy5QJhs7jWBzvuPe3UdZdS1U7gqfrU2Ff9NNaJqJJo7K",
  "key4": "2bN18gfUUrud58F1yTjxg8CesVux2qtShCaXNuTQgUWqJ3eLSZcHxC4xE8wXCyMUYmQVsmwy5AK47ZW8TwjyovJh",
  "key5": "2mdHU2CbA14BcjUvq788KnE2EjF3mnFC7LSTKCi5zFMTpERfaa3uUya2rWfdriQvDcwmCQbPaC4uMg8rwK1RFZKL",
  "key6": "5KMdjiEnPAKUUNp3SNTeXneLmkMB2mD47nsbKdm8PzsCwryTzx9VLvFFpZNppeUUCe1u2uyjGRKxouUSVYzTB7Mg",
  "key7": "4obgdRSAbYmCLLBQJGTWhieDjYxVJ25sP9dueNMqNDeYfUQU2EexaEYs9yJ3bj87k1eNKr6WLvdmYmjH5KApsWju",
  "key8": "3eiSXM5AqZCAs9BZdfe2CbBLUgmpLwN7uYbBKR3r8XZM16qxt5jzXYjy4ECSSepWvRhf9zaD8qxvyScoaDrcQQNT",
  "key9": "5tsxE4p6BJ2YjtseNAfwGooJyp4FLnzy7kr4Bca1cXFSqmRXqKfoJzf2UaWrPhDgSacSjzizBguCpT7ZpcneWaL4",
  "key10": "48A8TpE7gAwhajavcWKNse4RMSfVsGj3Ua672uq5Pszp8FC34dgF6tsCxqaZgo5U26pVakbCnA99mZuWiDNPRcYA",
  "key11": "3epx1A9k4AQ88L5aH7sw6NaeQJrjqQhHe7Yn7g8DmZ3gUTGFXvErgvWssLBmTNiyBUhDhrqLv7bLcjGKpNTmK726",
  "key12": "3og6pRFTSuQmanqU6faqfi3kLQn91YqeXXpsNPTjpw2Vkia1kHScjQQA3yvc3iHHhTxC8AmhUQXMkan3sXU8PAYi",
  "key13": "5V2dEfW3KHPTtowZuKPsmxrheKFXyz83534XyAYCV7szZC7jzvw8hiNqunMNt58KMYzYWY3ry8Ldfun6ZUbwu3Go",
  "key14": "2i6RCJxQtW5o3rU3eWy38BwXzHDYZwaoPVG1R3Gm7EgKK5t9tonccDN5BQTsYkZ9wg5jP6j5WXFuhXCSpdvzeHy8",
  "key15": "5GcEsQLcwmRQxx9bh9hBwe1WXSevLQxRksQExR7zAoSyqRnz1WnYMPtCtGBMX2en6Xk8DJddTfWYRDxLHyc1ANyn",
  "key16": "5C4XjTncBZQNyXD6SxrUXKxg1vXuwMCQiQYfnsdRyU4krA6KbMKKyWHPfvkrGA8ZQXTpf5VXZSf7e3eGHJuJ6wPm",
  "key17": "52LcPbJB7eBor52nXwtTLvY5xzqXgutrafGd2UTUKBd18TH9G6Y9Dc1hGMXCcQvR4JwRpYV2xvf8Ynqr1SXsq3jM",
  "key18": "3TJaZDFSik2TGSUfey9RW7mvAuiKynHVsSb1KoynbAAaki7fxyKAn3PuFkk1BBLA7wG1fHYUrHDHThboHKjiCsKk",
  "key19": "5u8FF8ZEnML7txWGQWQQHboVECKorTKVNLdu2kZGpQc2UAM26mMf4UFaTtcetFSeSp45iRXp7VWCqfcyDZHULwXb",
  "key20": "4WzFZ7Nh3gNYJ6G88dq3y9s8JzCd86y6Hb3775UZ1qyhQaRjvZYMMtvv1PkYUDS5VRsbqHBK5THnF8YxbMEeSdHH",
  "key21": "3ztzU1u1nbykKukun5ViTJBP8U4Hc2YHR5dK29dnAxz9FcpJkR8wEEgQMpZJgD1TDr2zvpTwvdNAYPwUJQzqLLni",
  "key22": "42g1BCrrrTGsv6Wd8bAoGwKRYhCBkFbpyouPdr26MtcxbSNQGm811pBWG4y3MRNF6mNxqA3KW5ijsw29XytfnyWi",
  "key23": "2Y2nX178Z3miuStmeCFzEAdGMCu1CKhiLbKvEXTBGPkeHaA7u4PvfcpYAud9s4MSihACxNhjUZYjWVneNEax1YSv",
  "key24": "5Y1nki9ayss87izTMnZ9gdo5jbBUhX5TUEN1MZNKfAhZrzJ6zVrnAxpFjwDWePYcgbBvgELjYvkN1nui6GW597q9",
  "key25": "2baudbm8BPGruJUVEGBTS2GyrVtzY2bmuTHn8vCAq1JBGiGmyCKNB6XuUBJYW66XEcuUSzQmZxSebsvgH9MLKRob",
  "key26": "2SpZVVcyTSp5hdLhjPRqEhtbAG3TyVEQoom1xPtHgyLhAtUPgjMxawkPcCgN3csGLbuuZv7Hzd4gbZSz3fjsziQC",
  "key27": "2P5J7iDvL9WbTHYufcBG9qTGNNpsZ3pj4GP8g9ceqkH9B8qCF8gQjk4wRhRW23akZ31pnGZcnazTdJS4WgHN1mii"
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
