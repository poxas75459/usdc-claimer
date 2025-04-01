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
    "2AXrfRns4vu6q2eXVCxhQnNcXH8P7Q9ZdaFfZVPKAqnaKV41zNQrBFdB79xdqhfheboYnTw1VCBVaCEGrS4HsA8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4UxzUgn4MYL98ojTcVu3FRVHMgyKvo61wqrPmB4F7g1KzK9ctRqV5LvKwY26tqTh8oJrPTVFaBeJ2bpeS3kQQM",
  "key1": "3mpQEqNEk9WEhtTs5jcsm1og8P5mzvAcg6NW4cVmCfrvbqF9j8SU1daZ3ZvC6drdS3Gr7nD7Hm6gnTFLJPkjszgU",
  "key2": "3UxkwRXHippSdKRNyJkip4zSsyPeVhgYVLYUHcMyxvrHEhUcFopCNTFrPfzg9Jzq1vEcRU4Wyj8yKbRJES8PySxP",
  "key3": "4oj4GJnm4yrAMHUYTjKEFi4jpeXb5fdkfpvReKdnB8JmPMUkgorGu92hYcGhzi1Uco8XUKZSdWjLYW9ZQ4xTzD1u",
  "key4": "3utdjQXSzE8RTymG7BVFrsabWDUDuxYQ3gsfQQSNoZgTJdgKysApevoVgnBvFyCnVYecrqJ5FAofn77pSxsYAWNK",
  "key5": "2KJ62i775GVbVY6q8sJ4DqwL6cMBr3i7KtCmChZC5KkoKC8hbrhJxfQjK7Yxv9b71Bs8b7G6f6pUNNmtMk5Btzvu",
  "key6": "5oMpXvLRTDNJWz6basZwr7MNoncRa5RAAWBfgV99Eqhmk8WABo9AL5KY9X2RYyCZAx8yaPpEXejep1hgZg1MR89t",
  "key7": "5B5eJ9Fg9j9tsBVwa4FwBBR7suXQvF22XfaQLRWHtYVPEz8wcanx8Ff51J4Pc4gMjH4PKcjTQf8PpRMUmr2roNZf",
  "key8": "3QArTmHW7K1fWdSHMoMRJt69xx6afrLQ1V2kp5P69wK66vB19Xj2GSXo8zMZwrBD27iYBf38dXXMjUAz3y1PDuov",
  "key9": "2bim5jP9uG2ARwgfB1KrYaN1wH5SzWJcjLPChAJts7muehQq5spBAau4hPPriHtCSqKWGFUeP6xN7jJKRaURFp76",
  "key10": "2MVrrPL7uVArLganLuGVxhgYG7tpA1fcnWDYroXSGWX7HmQNAQ89URXTqD9y6SMdGxXgdWFaizVFci3WTXHgQDHR",
  "key11": "24RFaDi96Vhrcmow9t8FX5iEGMMo8jo4yXTqrgKqMwM1WB9sAXyoERXTQ3cTxUzeED66LJ4r2e2N8DyDhqrMjVYQ",
  "key12": "2yE4azm65vMa7n112bHUSdryk9MeRMzmBxXeCCseHK9BbQswMoFfvVBq3a33qZAvqNH1PJJBgThsFP1NzTEZhE9v",
  "key13": "fmCHv3K4xAkUrTrrYS7C2pQkDpp3kw3DZCZRkVq1YJQo7NeVLcvfhzDNanxZD4mxUXfHKg3hfCZHqiHvy2RmWoY",
  "key14": "571mydaqgwRT6Hky8MzYuHn5if4EtZPBu39WMmvG6bzQm6Zw5nFZHJpjKB5tjfGpMQKtnUPhS4BCFu8WrnrXSVfe",
  "key15": "48fV6wGrpic6C7gkiryLi6UK689BmKTrKHuahkLxvYiyefRRPBBPoqdeuuBAKV4oEHFacf6svVt1MRxZw4JCpL3f",
  "key16": "b5GgvJPgCMqdbkMBi6NZyT8c4nHSKjojzHki43FKzK9jnkUZ6hapHtaC42D5dbrTFkdvapcgsLpaM4b9DNpSW8p",
  "key17": "5HoRvaBnLoNTiR4iyKWeZSZqCjwUrix5AzUrn5rcq9onTzUhb6P6z98Ag7UPSA6ohFuawFBxspAdYLmxcAG6kTqJ",
  "key18": "5s9vT61Ypz1aocQB38nu7S2vyp7AwTHrWZvzydcyNwTsb7BEiD451nQ2njB8WByh3urhTC65MsmaMU4WinCFwo3u",
  "key19": "4zZiGpBqwrmChi9GE6GrQvEPSEmDAQuDjTVqG5bjhP73jmPvJ3TEz1kh68dVGa3whBC15AK6hVCLhKqpvo9x5cXp",
  "key20": "3jaQQTj8VXtRjCg8Mjzrt4RozDYoAE3hpDFkrHC4eyppV2NzPP4pHUMVCNdMZ7UXmLYwh76nL4KmVAaXJftKXRMD",
  "key21": "27jhkLMDi68Za3FqJMmzTmwbRuebXQa3FzN8Po5va64RFGxuzzaTL65RtBuzCkTmoJ7BLo77Dk7aeaknovPzqLUG",
  "key22": "5AnRd6sn6cK2gcppZoAMmNgHU31HZQQsYTazipTeS9wheh9jrTkbk5vnBEvpYeWVFkCHShiKY3Kf2Xa8wHun2X43",
  "key23": "2q3dTDmY66yQJdvrwJNEZab5PM4t8LVgQzDK9qVLLYGX1YkV1d7xDK3ocmnoY4iXYMhSLVpznJ2zcqBoCmohDrf9",
  "key24": "5EPPrupQmMiLQ22UCucn8RQjtA6bnNe5CgTw3M1RLMhZCxzDDTLCLoJxVBifhUdsxMfBu2uJBsQzhxD7V6mADgy9",
  "key25": "4MCGX3uDkzWrVr16VL7wSSaf41RJsteQ6oWnzj5eToruVTKxDu3kfxcWBBL8ZKCZaKxonYjnSaZnW3GBerC2mo6P"
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
