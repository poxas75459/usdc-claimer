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
    "2fdLvyDgHAbATuQtfwtVyomoN5RmaW2XGjZEq8PP3uHyvqKwjZEamuidgndE3cA6EHp9nzGCo1MbDowFrC9jvJHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b36V7n4NvQ3QFZczBCttH3MDxPdGxRL7qNfHkVT9Xe8zcWBGAhm6Bkm6Ge3oywXtku7WXGQThjUfFer7dowPLY6",
  "key1": "2uFfUEj6fgiQw62cnYryQ9dAyMA5zeV6ygX8ZqdnRG2pbff9xy9WC5dX3seX3wvoiRvvycq8cFN4yMqhgCD5Nyte",
  "key2": "3AQCoLGW8uYGrpFBNU5LfMmePpLrXSuSibPvipVW3m2PNqZ2Z7dDaRH93Brzzsuf3U5YwjcGajFvZ7HjFk4QSFDr",
  "key3": "3moj41p9NhZCvc6o5NkS5wgHHAD2gAxUy4wiLHb3hiqJF4KfA8k2kXTUnrxrV627mZ1Cg8nZ1m1WfJtGfqrrNkWA",
  "key4": "48u9fRXMMdBuCTJbQJWahAsnmEeGaVxcK3PxXanJFQADEfTHHPVe4z21YF1K7sLXhturxiqp2r9oTgFmQwPpuxYx",
  "key5": "2fNBh9KDR45eCj6G5Y1JedC2kZbVeGL2w24cc16zjMBZtS1D4pKkifwV4D7aVGZfYYpbFwftckmcSo22D3Sk53FX",
  "key6": "3389H6YDVjmS3LM5Y4c6Qzy1UQE6aiy3N6KAz8Q3RYFGpy25By5w3Ywg5wLE4owMJatH7NL2bMt4W5uR3AN76mbT",
  "key7": "4Dkm7faHnw6zAX6W41692xhyktz1XrBsegpETQA3AXPbuNUWdX6cnNJZD9866jcQwcqgNCia8Q8fggz1PGxuXoqx",
  "key8": "3JLJ1jDYrwrAStmSQaQWw7rHUTPaBUCRpbPgE2enDox92fqh9QVQKMRi7YXkBnB2aByMyVhpoza2cQfwVbHA368y",
  "key9": "3Vncaat6TkHCtHxkhqY183MLEkryKRiLcaMGajYfpVZWatboa6ji4Lp4E4NnDpR4ke6KguhL3yKKUrXj3omfpgZg",
  "key10": "2iNvACDWLutiQzKH6jo7kT6QX2uoNiC4pGfY65P4V2sP7yrXbz9UNSKGHPiF57SGMg7tfVaYmo3EwvsqPbJdrfiA",
  "key11": "5W6aKLwWvAkpxDyeYh1X9R1bpUbcScJAPSNhWrX3g7xWpsn5ZyzTBZJCCdCRUJiL2pDt5wzbDceaQjgPk69TB6kq",
  "key12": "3A3djVafFHGwHNy74AmkTdp3RGGkyLDTPFeiHcH1yXq8ZbnYqZZNNxrD2iruEdCgv1KAy1ysZ8sbeD5j93bsfSWZ",
  "key13": "5vjdSypRPrCNaWzruosTeVs6bdNZv4Z8dirScJwATFwsHcFjTVT78ak9yZA2zWmCoXiz2SHwXM6r2NkjvsDZ6MYF",
  "key14": "28zQLDvEZj31YKzBbfnFZ31WbtVp7gSuxBeZ6syxPpsbQmZVFuixzU8nuWLFLphZtJWo53L4SWVyQHCbAXzL9yd6",
  "key15": "2WXmiTCDUB11GNtWcWgxneKYkMyMjekU5WvM3bPCx3NDUJVwjhsawzrZdf31roY2t8f9kQtvxoHivDLjZ7HFWzKB",
  "key16": "2M6YxEyHfZQQqpoPp9uzLUSFAAFxNdDc4B6o3kG3VgHiuS3rVA35PDa6pSiiCbKgo7vYYYF1MKJL8gfCP5FEH14V",
  "key17": "GxveKXCEEM77nDdNuY84mh4XWTd4UfbMkdRvSeuTTrPBD7HW652ycXg8ik79Y19gb9GAPhEwxbdbAf3RWWKFSCV",
  "key18": "5vEhAwKErXn8mwmRQx6JHNKLrMD8DE8x4ehL9VpC3WvxmNSpPi9rZWKmcaT9bVnRW6aYdneoAos9LE84VabyFbvP",
  "key19": "5Uf7VyxZx1ozV7LjWt5rdXYQb3kmNeyZHUoxf1f8iHYS7dGzCnCfCREZDAYFS6aSe8UGrT3fMy4Q8HrsDhP7MqAG",
  "key20": "2KBoG7v3joz9VTYfbAaBBgYV51VZG474VJsm1n2AehKidaXkr3Ph62bB45QGE3bbhSvQ8XZE3tvPHr4sg4GBLQPG",
  "key21": "tHcFHtRf7kpQ3vHL7RHpzDqhEztVkK8quEQjbJZRYZkmRNGrDc2CKb54FdL7gWRo73gXVdN89c1Fqc9Mp7Y7pyG",
  "key22": "4ocwVw14y6y6JtFXEZjvTHAZnZXmDjwDQj7WfxwkL8Lh61fGvL8TBrk4WkjbXxRWSqRG563JaZpy5DoqzxEnpTW7",
  "key23": "5TJE3WMwZ52JAKsqp1FomH2LFaa1zhcos7QgTVN8tf3L9U1GAsszyeiHFcKxfFGcitsBi8DBDhMHzfSdYCVHGCS1",
  "key24": "2Q3nLkmYnyzkjkEunRXZxTE9iAcRhAHuSt4HaT8ANPZx2x9M21os5cY2tHv39F25pZ4BhzdzbA6T7yuWtRU8coK1",
  "key25": "4KJ8arXmY1HoPhYHGxynixVdj912co5YwvZntzt1QyMhwEyPyJQBG2oPnuWEALQaEioqq6wwfdgeFghoHLaGVG23",
  "key26": "2up4k6qHPn46ecHy5ThFwiXdqEmLLmvTBQMvLQBUu2UM3Hq7xHyjokLMDVaAfsTFSumXqCRnLBfjZrBbPA3pDQpE",
  "key27": "3Y7box9eAbBrMsD7LN6D89fypvz9nRNra673wVVeVhjXEEz3VhgcVW8cyxX7GZsVrNNo3tskzb9sBSt5pCpyaMn9",
  "key28": "36GZKgLyELrrw1UjrH6tHuiLr8bGr3LbgoqMbHtd2jHz7j2Ke43JEdLov7czGrtpbJy86TPJGbfu2KbWC4YFsccV",
  "key29": "2nwEPuJP9Miktyz2S4hAeH9WxH1DshqTcfx8ez3eirMfKLsd5gWNrUCjuobF1sUkcgNZE6X9VtTiun6SAvPsS55B",
  "key30": "5kuQ64LPKXCLmHnEXXpnmkQmQYV7Ro7EdTe2iNoKt2HweZtiVLREroCXYyZFTc2CrxuoESJAvbSeNL7V9zupVBKS",
  "key31": "2PuZ2khfz4bWDCeoBCJ1rsmmcoKmrgzvzv9n2bxXCYp4KhkTMHSaxS8AKUmEBXAaDXigo4MWWMAe6cMuX9q5Fhuv"
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
