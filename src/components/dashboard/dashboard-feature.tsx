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
    "3z4zx7iCP8zaonPAMi5E8A9t7n8ctkAThF9fM35FGgMh55NdKkzm5D7W7wDWN85g5A1zPPVPxZFKE2G7JgxArvuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frxgNxN11rJcYJs5X7RneGzrjUEYAdwMrzKFuBpyfAFJhzNpSy1TVADqBXcbYmKRWfZszK3N2QZvFJ3SL1aqkJn",
  "key1": "8Zg7pRD1X8pXrSnVo2cPdBCrp8nASEeUQ9VfeaL2oafgnAVzKKbrJJeHaJQ3osc3jmHkRPtEZpcXxBceBEHw2uU",
  "key2": "4HcCNVtDdj5gFtcYADivardNfs1iRSqD2V5B3Gbd96UdjtA1V8EfHEM21nSgj86NJsD8KU4EkLQhbdt7LNUcwAWK",
  "key3": "4PxayrWab2wm6rK3V5vNF8E2L4orbxiSjYzTtuRHHBzrQLLtSSUJEnckNeSrJtFLriQS1xRmvNJobSpGt4ekKX1K",
  "key4": "3FCJJRmt4wUBwKuq1X4iMgKi4ZzGi6kvZgyXf9XH7mghHUbLhksdWgdtwvas4qNRXjTnJHpBBZzXFLZRqZBd8MYk",
  "key5": "4by2x5WR1TJJX2hHqxJiTr5RfHVq4j4xTu1Yac2VVT6sYYJtPwyAfp1uq2gMkM2nLdwzu4pHq2rAPDkfNAnPCW4x",
  "key6": "3LdKxZDKUYe8B8oEpLZExRBXEUFMGp1JMymegW8HTwiLonYp43coaeXDoBD9nMzSB9VFvnjn2WpTNPupgvpeYsvR",
  "key7": "4KudQqfiB7nrdoYW2dN1G5RVH5LHzUUErJ1aacVNhPwMJhZhpTTSzffaN7EEoKh2eTVYQodzWUG5Ak5aBzYQ7Wwy",
  "key8": "4UAcY1fdMc5uHVmrVf4FXPvDw5khwDgmMjLTheXUpTJrQcgrv9qyaa7eas2zNgHGXXPSGvNTwJxzBvnM38kGoTSP",
  "key9": "3PKDQiVWGKamdenspwAsamjC31nfN2rw349YCak2uq5breFqvGwZRBFZCC3Tj17kUSUGxuNbxt9AWUfvHbhw4yAE",
  "key10": "3ui36XAXZejy1z5iEoNV8t7igga9hingzmAuKV1MAwYBb7xirwgx1xAKqwYyKYySuYwnsVuzxhiKTRKL2oeeFhf1",
  "key11": "3iga7LBThS1aQGJwyvQ9iaLhZ9zuNroAL8rdYaANnK7ppVz5gN5KcGt6UEwsnydonFKsy4aC6p3EqwW9u9vVMvKT",
  "key12": "5t1SirE7t2FRQA7hS35RsgPCYpSJW3mABspLuyJJ6XVidgguJCSMQKUm5ym4VjVqgUpWih4CwoBbraCUHuEevKnZ",
  "key13": "3LaoGvZGJkdZq7f7eTgqLXAqcSH9B3XL415U3vSmuudvhArEyuS6vjxsniraNJqd6DFq1s6VgszatCz2TvoXm1aH",
  "key14": "4fTQfMV9BMbvsX27ZtrPuMAzVAMqbX6AEDQH8UqnWkN3NAyb7YmfhE4srWsJk8G5t7ncyfdsZxgurk7xX3vKRJGi",
  "key15": "3JdkqgPUTBwaULN2ftbVDzHbL1CZUFykSjH6f2bjbiX5BTJmrUzbMVtC4xBpGwB8WTZjYZ7x7dnAMnfSUGSQKjG7",
  "key16": "5coyX14G8oCPZbDCgjxXwnoeugMcEXK7ed6bc9RctEdCnrnEVAJsWCDv7qbxbadXAxNqwrDKgxjPKb4fH7fXakmM",
  "key17": "668uvDHJWr7VoyFsJQDQZYpRYoqfhiwm4TcETF54QPErRNXtiWCfp4LfmNT7Vq8s4XUaNERGwponrmspoQRKJY9V",
  "key18": "5hquJUoifYzokkb1MuHTfpde2yK1C8ooYnSpWrxcL3WySjTV9FG8PgtYc2XJ1syFwHwFcUMZeC12MCbgGqfu44vC",
  "key19": "21cTJ4wEvoiFf7y2FSh9a8VLZ7jBZBFJ3g6n4KQ2yUShSWmnEdghRtgbqXqRNaBVRfBmPSNCUqrDodLUkAqnjqAH",
  "key20": "5Af9c9GAiKowfjZtDRFwau8VBp7LSwme4k2BFsY4buGEbgd2BoynkCjo8uT5SdVPasiMEABnfExxHTS63vqr5iCt",
  "key21": "3LSxEdgyV79yDc56fK5rRAnZpJjpKk6SGqemmoVc8Gpd6whDip6nao2gTPGyiBFpgh9XRUZgZBsUr4XxuwA3Gq3C",
  "key22": "yjNn6CKc5G3Bthey9exuZZiT2cY169kbFApeB93cmi9AiTUw8NEqZZrkryjfuJu7y61eVx1UVJ2j9NHCgnQzpLf",
  "key23": "5m5gfqu8x6ZYaG7wWdzKPxZBPtnvPE6KxqEawUMK6tsZ7BKacieLZah6LGH1sLW5bveFpvivBQWi8byJekJonMRv",
  "key24": "4r4ZWe6btGHLGuqHBSDZENb3PgAJLF1aV8zNaqeXbaWztVg8Jm5LqcWUnQbCvXksxW38WuRPHjzNhrxGexXCq24m",
  "key25": "4QycTgq1AUmQG9txJJgSHYsADtJ8S3cpDnJJoyvQAzG9eaXhrmnPgjuRQUhNnRnex2mxbhiknCvCWDnvz5GmBZvR",
  "key26": "41VNp5WvTYndTcZupvYLxRBS8N76tnoPdz6NRKZUgjuYKD2yfovu31r1wLeR8uCRfHgdfE5Viaz6ZT8eUbp9u7Hr",
  "key27": "629JnsHaKBu8gpddSgwEorNFUrKnHG4iM5ZuDAaHQAUqCkpDeBkSfiHYjks4UX2HYjhCsLimFYEVQboohq8xfADj",
  "key28": "4YiNnrbqKKXrykdJfBkyAREJa3TL3hhVvEC7PnojxBJbEWpeNixwcUp1Cz1FvJE78sXBZZKWJkbxec4pbBgy1obc",
  "key29": "2xHHQsNHutgAfsaPh25pJ62wDvLnu85bofxoePDMmpqgD3ZQbSLUTRjG9teWthj8NV8YNEkMChKHreUopnomYQvq",
  "key30": "5c49LRiCrM4FpDyqUFxE2nfZTMptPo9fFXKHooy2C2aBZbML4e7pWcQS3E7BAiG9LKhA4EzxXM6E6DYXQFuV3Vod"
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
