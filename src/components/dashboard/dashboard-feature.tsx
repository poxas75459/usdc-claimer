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
    "BZzoPUT8RHajQ4Cnt28mmL3JQpNWHeR92rkgJy9sKw9GXwdUmanAX3vio2MiNUZna74paocfm8aqqXgjJ9Ajmix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55SGeK4RyDJZfqBRjYpkdNt1KCCjGZpwULoSG4b9h4mqGcoYG2qBJH7Lwt1PxwpQjW3aPcbJ4bTf34ngDfBMrPZ9",
  "key1": "5tDJhHDqS4pTuF31chCufiFWPyUC3QrpLPE7Bni15c9RaM2FXPSR4HoYNc9oYSjs9nwhLfFBPYGXxJFVo5yygQhZ",
  "key2": "4RLHwWgUgw2dBL59iv9sWj35kvLWis5HmZXHW1828f4XBPDVMG8UCZa1FSr1Ay6aenuRycY9MZzyS8nmeeGdLatP",
  "key3": "3BHjBDcrLXD9GLjjjPTMCPzTCmGrU1ivWkWfxSQXHSZkuExvRSB7wCihYp3D82VbTDDo7ScyAaFyN1VoDvcWB8oA",
  "key4": "46D7KXSanVhKBCmNtmdXokezRiMNkjerdqZMvSR1sAfrKk1vGJbdyDSGUGWL8Y8xX1k4kgemoLFwEFPt4tUVhXU6",
  "key5": "36UK7b9EpF4V7YHsDqDMW28hzTF2kqXvmMdR1PSNtmpBAAB1GCFUo2ezqF2E5qQT8tUWJN8S1mFY6jVPP1ex3daY",
  "key6": "2UzpH5rPjQAtQM3zWQvN8oEBBz3oqRd7mVmbYe9Cb1Ni2v76anuTX7oNxZV5K5Wxe9b72ckxffa884W6qQxmZHyj",
  "key7": "5UyyF5WCcMsu1CYYEYH3apwJU4udDBnAtRKnwXxmMQzRtPmMwKrJ6mmxPhjqjj7MQThWYFdHuVYDHKcQUbP2tq2c",
  "key8": "4iTrM4ZbfkXa4BZj2y3DorHnxLn5xajfCtRQDFJERnt8dxQGEA2oFxjhuHsMt19vbMsPMhCBHU4MxxUbbacLWhFP",
  "key9": "3kC2GwnzZh5iFP3HqVkLmo9cJbVeGt9oKAqFPhHmsmdGL11W5NjFDYCXjXhw8pPVCUa3kiTtbPb7xokYoDBMxaAd",
  "key10": "2VPJBxGsyCxZDBmsN9UtyUGiF96QDJtFWFSSfLGcvoxE97wpnNpCMQHHaK9oYdEn8PCq8cDoAHGHDXvDaF2nvj1v",
  "key11": "4upFqm23vtjSUQbWcxnvqSKaibzKsJr4owmW1GW2dohBD2rvodh2xGa7SZwtnJvASdNQZae5mP1XsgXD3HuVwwuM",
  "key12": "2nsUba1UobsmmxdzqAA251AaDyjZAod6VSCGri8encQeQuXBjFdCrBWekYPMAQYXNdUYwhFce19LKEhRKciu7UYh",
  "key13": "2wiv4uvjt7iMxmaU2xaT9FYVYhU9ddezcKjz9rmkF5NRKUVDuRd6Z8JpR3nbnnvHoiffjWFqLGEzo8skzmskFdrq",
  "key14": "3gXiownhj2ZPczUinUSzSN17gxGUReTyAHRH9wCGUY2tisP58EsyTBx168ekVgygsp1V9TUn7JRQgjhGRRFcisid",
  "key15": "3pACvGE3Z3hGm36MvwoR6tYPwKUPzaLKuSiy16Pc2Z69kmR1fcAxsMR3b8QvNwyxzXnP9BNSBKe8LPn4i3zsRtev",
  "key16": "zW158QwoPbY6QSrUm9iJYSXbkyroQLvz6PT1VLbd4iJjSYGR1zjrKgK6oXQ7TgdM8Z3fMSsYBXPq9NXcMMnSHH6",
  "key17": "2D7BfCqJQJLinNY1cfTxgY5432od2MzsK9DZrmv47v9SA9UpZqcgmFFmTSHpXTe47jz3wJ81pwSKUKYFm1ZMrD6i",
  "key18": "551jdMud9jzTB7w7FCLSpLpugU44R6qybJcy9P847nt73CpD5X3zbBbYLgNZNvKfQWvguvvtfa7PXLBMYP9DHVH2",
  "key19": "427ckzm71QVff8C9cuzzm8J1Lr7dBYhotguFgjrv15RRCcdKqnuM2tak2saqXGvS921sxVu2zXYjtvbHSbLPpMhY",
  "key20": "xxMHJhFJyyG6misaZaLNYp7ZHsQ3ipam3YYZLa9GUv5J9mKVaZXZauuN3gb6fYdLCUkiwHnXnb4L7LCWLRfTJpW",
  "key21": "5Ytu82h5sJq6ugbcp22SgSCEscscxmyyMiuLCmMNBLeDY3rM3Ku5h5dXrbBcEFJHcizhSsJdP5Fe6qhwPRSP6oQe",
  "key22": "5T9xr2j3BmPmbtkTsxp7c6Ydg9cC8WtN9YA1QxfJQ713pXiVnLKDXJijkCDQPzbNVr9yna51m1Mbr3yDnLuUTYhi",
  "key23": "4DGJVozR9kNi5JzsjvDWB9uhfKuxx6aX3sJ1JMo3dG3v6YvFkJjSjubwfgUvorXwva9aJjzC3szAAfao8HtCm93q",
  "key24": "5FNirz8mfhzN3wtYP6JWhAi66w8Xx3uUgcH95c1TSZ8QWxovZoBZxKY2vXA2mRWEjScDLKwUzdYQ8vaS9KEJTc5N",
  "key25": "3hQwkaXHmSDqeE7WGB1k5qYM94tVyKfkgceNUsQXP8nSUcg59seQwo88a85XopSGUx17sD5XmoDR7KS2QCsDCpuN",
  "key26": "3VR3tjuowQkqxJ54EP1RaZPLXHg95YgXTwjERBKKUwf2qb5N8neAiPVmbVzP8oxKTPWsZJ9hmE8UKSM18BFhT3BF",
  "key27": "4EVpCMfnYPp2MkP8ACqb7pqyUjcWddYDgidLoFBiCnpAxabhrKMdTwPUj4CFG5mFKChATTe1fvotfbyUzuJGtTKi",
  "key28": "3RXwVTCi9GkYXh9EX9ritoLJEASr7FAwK77Gm9U5dN5syXsiR17SuxxkRqKLrq8gDQ755TY9FGiBRJGhdR7QgaLa"
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
