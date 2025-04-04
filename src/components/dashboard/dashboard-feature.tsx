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
    "4W8oYq132uo4Zd4kWVotFkDGeddD9637JsM5JZRcFHZH6gWSfQP8TquzfLotviwDrN7Nmhix3ak5xnK1dngsBaMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gcaPsfX1wvFdv6jpEj3fwK7a1mFC2uBzoL37eEPa1DgeHBqkH3s4unJZe2k2ajSwsvGvTy4XLLRtrjLgkAnyGpN",
  "key1": "2pvnx9QJUeTuJhwUdtXPsWMEWHeEvZaEG7qDetsYz1hPjMEqVCfR2CMxdV49VePphqY6a85X5Ck946tceJbTACFn",
  "key2": "583M8Yy6kcmeePC3vneSZkwuMCapRRjJFUuwXmzgqUbUDS4YthJCTDajdwM4BUXwVCDdCxekCN2mwLpk5yBXQwfZ",
  "key3": "5DZq6yb985b1WiG7kQ8uhx3M3DLxKJV6upLkZFTWWWFt97eTB3PZQkiMGKy42iYTf5xNWMCpp9LmKQTkXqiHRhCW",
  "key4": "4kH6CSQ9nSVUuZmkEbyymdB8XkyCzEYNmDAG7TeA4tr1BV2pBdkyUYnprDLE8mHcxrfywEgyeHG64dQpxF7TWEEC",
  "key5": "322cprzX4mxx6gPxHvKTAxJtrigGgdjHTVobSvVtmFxvfX3XLmYdNFfTCzk2mLeDCUDWTLBoZtHg2zEzJWvXcbZy",
  "key6": "5MuzZhAndGTweLujQK4DpqZTiSXyt5o4yGpjtCCrXxKqwWqzdXxdB5k1NUfoJjhhWHdLcdFLSEg6KV39o79kNfB6",
  "key7": "4PJPg8VY1phsfnr91C5uPSSGQPBZb2Lc53PxmwkeuFZYZBbPvQmJKpF1t8wzni35bJhHpz7pRDHATizwYyX8W4xe",
  "key8": "5fR35KjP4HkK1ETccKSRcfpwnwcN5DvxsbJrqjQqbK1Xp9kBdu3kph29BtZrUNDHuYYC6kbMwBHwrKWVyNyRNV11",
  "key9": "5TeZ6FmTYarPBmMKvYveQKCg2bUzP16gUk9kg6piZEU5NjmCisgUibw9DYguVgfPdicQXyoU2iWdnj5fuWD5skwx",
  "key10": "4t8jAY3WX936UW5HLECYwXUCXb1CBA9KFErjtGg83hKTqRu9ckbrJ4579bZFAVsTHE5wq3JK97oedLDCYhHXggce",
  "key11": "54j5cAXruihANfPzEmiwo2pfG2jKiUk8LUHid3zfBUQQqdDyjStF18tqAMZLC9YHgGzgmDJ5a7ZpSXNkdggfDhgV",
  "key12": "4w4RFcYbXXQqKFkvk7mAwRghAp9uKWKjrdj5sBvQxUm7fUzJafHKZU6x6wgWSosizoSfNjDkiXMELhmpMaaJ5buG",
  "key13": "Ka46zfn7oh3fQWdQQXg1seeaf9rafq5Gv42zcaqM71H93PCtzyms5u1kQYkA6fzYh7faC1Cj4y2t9oT9vMBQg8h",
  "key14": "5orXtuzm6PUtHeNrEQ7bgUYuGpFx9D2EHhu9JZ3AoTi9QFEGoaxe3KL9SwAdE1zscskG2FKRHh5EcqLFBjMnnqK4",
  "key15": "5WAKhqVSiAjqKCLH2f6wAkCevczsSX8UQjw5TKxNoPyze92x4R9DzmzAbFZm21QNXcKkRr6M7twnxXteQVskwc1x",
  "key16": "29wfWoDi4BqRaBYvuFURnmi8SCZKkTdy25yPW3oPZsMXpytTMVQseTXC2SxX9Xd8PdDY4KDofCAw76oxYKYgUCKs",
  "key17": "2kBc5urgY835PpDpw7cYwWTTEQthxCyY5pKF7gXbBFv6MpmjJhxmQsK8VmANGVqF1yRmuy3pB1PXukUfSfKSzP2m",
  "key18": "2xts3LjgLmRKC2gNYRsaTK1G3UkhBKkFTGGqkDLrxoLYqCLJWed5cm7Aw2qjWCA3AQ6PTuyxgPSvNZPDSWkFUj1a",
  "key19": "479aRx8cevvHkaVYFkzcTa5qHBEDUic5pxevkfdaJbwJ9Z5TxeRNCRMP2daPNW724wvqutedxK3J7NMh4vdMLwBq",
  "key20": "2kCy7faUYYkYCB6NEWj9GZjbCn2cDkiznE8a85NXRrYcAUFpiduqGdUBRTViyZEwrjLbqpUJbPHdSvZESdiEd93t",
  "key21": "c4Qac9BoY4Wks33KVk7n1kPzJ1pnqKEyPSrqMHwrc5Y3KHSKDoJdPgfQ5foKzbY7T8JfcLeEeLTzm5PmeQkMszK",
  "key22": "5uem9hq8A7uj2ZQA2dZwoCLrYgoUjgq4AwAGFFSxwTn4MnrD7GrgN263mZgxggYphH2vpRVn4wLz6XPdgSrwmfut",
  "key23": "31BrfL2fa8msyGi32RQoZSYyCH2gbHQjLj2G3ssVLMHmhVc3JnpWEqpt9W1C8t662qTtS919Tnzmwi7Tq4u3yyDB",
  "key24": "3oL212MHPpX6DTPj46SgQEKTQR9E5HSKoxFRj8TMeHVA4JMWJTZACVLXYmszyKKdG7rXzopiQHYF4N7sCeqU55Uh",
  "key25": "4vSzBjy62ubgFyavWERswbFk49KPkBCTyGw8htoXkm4pK5ZQc1KTi1m44MKga2mFz5maS2FyLb7nGqptBdo7AMF1",
  "key26": "vYnS1EiNygCo4Au599V3xt3ECFASovhwJLrheLHXJRYQjSQS6NfWfP5nMsQESWywRajcgz6GDpuH8DfFtU9iNRq",
  "key27": "5mMpporz83ohLXDCZrQzre5AFHMtdMtBPufndBXcrHDcbhxTJw6pL48SnXDqFUSXKtdQsKBcUsGHXDzGVUwbqPzu"
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
