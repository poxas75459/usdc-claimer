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
    "2wHHvsBZ4Jj8GT3yaP9P6pX2ZXRBStkDKJkRSA89UQjKF7RrJLw2tRftbcb6pEP9FM28ypeEb29HqTey9748rA1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4RZwiECvcXic5kqEGVLpdJhuuCkG3qU3VWxtH5KahAADHURk2mRbvTmWTGEEBoJbPBDsPFqDqCSqmrYwACEKjN",
  "key1": "uKjyedwyqKdabmugbMQBLG1ogxnPa4ddeWGaZL9qFUpEijyPYo47wAAwzdqoaCCinZDSFsnhK1erzj6JoS2n9SD",
  "key2": "3e96nfVzSQbsh61SNv8B1LUJDvRtm4PwvXfk777F2uVDiCsq5us9hr9TJov3abjzjf7yNQwD3XjsBkCgzMmhPPFW",
  "key3": "5hkSZuXa6fx1KvhgUWVzEzDWkw9StHiZnTc6ynWuzhuDmja8eyEd4nzTTqHBJv5oDE1Dc8bm1JKmEpgksN9kaemt",
  "key4": "58MnJMRCn8FwkRydcxiEpVVf2NRHC42Ac3f8hkGiMh65pJb1jy93NqHSUNpjMWW2dCZNZXzrcYMjyLV1Jyq4VyLV",
  "key5": "2iLWrAUMp6JE1pBnhepaGQTvKpt7rfq8Q9A6UeVfsSNEC1WYuvd2irxY4pWAtDjSW1zAp3LjbGSVqxgWbNEk2GVz",
  "key6": "36c9okv7ihLYesQzv3UK6htbhqaW5f6vX5Sg665GpSjX5LAL7BPu7n1VCByDRjhCH1ZhGuzk54PLdBnt7M8usReE",
  "key7": "5EfCVYTZVDaxJ6WnbB9B8NqiCiAYrH9HphgDpESimjdPM8ESjGGrWyyznNGR81y31bVj4cMV4aqQD7Lm2krb72cf",
  "key8": "hTky4ox8javTB21YJd63u3k7uw48UBLAjyb9QvPbS7j2AGqYCZq4rVWQMw6Vi2VfNv9Avv4xHgbZ2VpABzcJH5S",
  "key9": "59FxycGvan6dotyMgfwL4PQwcu1SCJRrx9QCt9KVtuPVTudY49Wiu2PnBNmY2mCY4FcoeWuYPjZgbwkK7kLbioF9",
  "key10": "xXKmApmy98PqDKLZUVfy76jzDFaXHtrDdd4YqZ4VZ4tVxVPFQVgonAXm7uHhUGKQs4aqm9Bd6fgnQuRzDDsuEdK",
  "key11": "5ZSiicUfr4ecAd2DogpWt6ejbQCY9uSiQ8xa3LpYU6upYiZ4UGUcfKbJXVR6wnyj6oZ2RCFQ5uqcUQPgbTtxn6ph",
  "key12": "HAmjAWMcwYr4aruuLLGCkVypENpy9DZrZQB6ciggUVZnHR2AqKWQ5W5NGZzqJG5m8fGBby9EkgxAsq1g3fwJnam",
  "key13": "25URgjgosFGTkkSNY8AtvdtLPz3BpLR6Bw7aZxM6YWccD4xS4Pzx28jaDBtKabADCRpD6LnLA4ZEGaQpMrh7wUy9",
  "key14": "4cKmUx1zUSjj9AmdT7SeQZVpRK1QsgTy13NoErAj9sY2FCqfu8Yd4dmrizNUnxvPtTgnnDR8GvuFZvjF4CseCb3c",
  "key15": "5Mm2mNs9SZabozCsXDuAHRYe3QqDaZNzvvcyEUxhGGxMb2e3LAAUNQqUE8shv7BUhfB5ibhhusj2UvF1WxSGWUdY",
  "key16": "26z3NCYJrmahKTuq4p3HtYgxv5oRqEjqyCXNRQx9rsPu7iwD3BDjyMSoKtY6kJjcX3ePE2Xn6miiCYhMjLhZSWoH",
  "key17": "3EybqBB9uR2E35UHjzxeJpYZeUk3aLZMhjQcRSy815wsnJosTdyzpED1xcmonPZrTk5DFigr17Z4asMm8FYppULY",
  "key18": "5RH9ZZoJCxwbhnyKXNA99dAvPEiZFEJDkTTRyk3tjhPvqZxqJTM95uGA6ebskb8M2LA1aHuSYY6ZUZ7oBckcXkcv",
  "key19": "ZiBiqwDgf4ReYHfzx4VDFuAYxogFWbiwY2cGrQeVd8knX8SyWDiX5HxPEqDbE7uQpuwcE33R2ZGsqGdLBRgCLUQ",
  "key20": "2aFPVfW1ttpXyGkB8GuVfh3WNyHkQ8DBxfHkyBq2vG8FrdEGveXUegUPtV53hGTwWm5iLEwJjDbWigoZBj7Uv5N4",
  "key21": "37YyRj6ZedxJxTAr75pgxMaYU76UpzCJUQoEK9W9hpSx9jv4sN2z53SmnRQfeFiE3k3k8bHPu9S3ZXFgmJ7dg76w",
  "key22": "2AxMN4WvyaBvLXA6TbqUvw5FZFhVEnfokUZaWRJPLpqcmKUKKUGGrXyZCC2jwVCFWQKty2Q3sKY2DuGKpwW9ARfs",
  "key23": "4ugyny28jr6wazEAR1Uu7mm2cHh4Er5Uq1jzmXhkYcG4TaGKVkFYKfRWS2yQz8d3Pq7R6r1n4umZdJh23iXZy8T1",
  "key24": "2M8Lqn7WFipgJ9JurhF35bttqMcJAwrN1BWe31ZKo1HYpsXQW7vPxedGiGhRuaVHdtS519C8rbZmyT4N37ujVP4b"
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
