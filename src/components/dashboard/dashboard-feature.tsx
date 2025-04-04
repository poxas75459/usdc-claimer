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
    "29DyYuqTwXDZt2gbDzq8hS3v5mbtupepo9RmyZmuC2CgAqSdpD9vnyMjiwsrXNGPFPC6r6bq4ikLNtjL4iwvgZiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfRqJybBykTZZZrzhT1AsYowVS48aMQSJMxsUnsQm3b9vuyGFyNV1vSocWUbGcCG1j7jPfarnehNFBvd5tJxXB8",
  "key1": "sRBnyAKfipqaSZcwG69ZTMEX8A39LxJNfqqDLvYEqwN9guwnyDA2gFRsmSt1PwNoCb4tXokK4gaLxSYyLqY6R9h",
  "key2": "2bWLyj2aBPAZCb1GXGTkwB7cENdSHPgW3PkxtbAMFVphPNmXpgbit2hZMRvxQKtnMvKhj8cbAL4wY6rKZCbC4eMz",
  "key3": "34VdBg373gDKTVggTEPFwvk1rKYRb79LxZpRkQLotyLyfnbobR7KGtsGxgyF695eGbS55vPC9CnacNfrD6MzRJeS",
  "key4": "65Qdubxy9UGivCWAx9w1b9yLQuErXr1HUBxY5ZcJoprmP39D7kGD6aBJzx65t3WBe1g2rJ8jf1eEWnPzY1bfZau9",
  "key5": "434ufQ5GTv5wDmade5FCkiC2odJxKGVSaC4BkiDhQxhj7B6JpDaA7qVfzTJ3KQErzfkNro8KG7SkLTcBev92Mg25",
  "key6": "eQBX927N3kcq7q2HccGHvATnDhgY28m473hQKNNLdT2Eun2W7RZehxgsKsZrdzDGNoGWfLZJk9QnfNy4BJtE3HE",
  "key7": "3dvrdWKCwcz6HbPjSoEzVELCSv2ncLRcJfs4YACCVvJfFQ6nYybFLVtuxVCnutnKGdPzPa9bnftftruK2EfEq8RJ",
  "key8": "4LBp4eYSwNh7mvCeNsc8KazhzSnPB1CzhmApjtNvi7op2EJqxvrGSHQ7rHUaRJS2ReuiqvopRqvP1aJNQwggZY4u",
  "key9": "3nu8X1E1pfv6mXBKa42T5jviemwcMXnnx88qAwDzPNpJgkEKjtuMApHRLtipXbZJcHGheBicQ94mUAkALgUjUkbu",
  "key10": "41dSUUyTjyU5YUTon8UUJVMdNU9WZ6c2QnXKFmVzqvzW6LiCnUZEpZf4p98EwAT4eAYe6gxEjEWpLyuZpxqAmnNZ",
  "key11": "5DZEyn3EoDjKVxVRCUfq55hvqs4YFJTa7eeB22itD9DToWZvAYbjgMQBWREgqQWT2BmBdDbjdq1B7jva35dSMo2w",
  "key12": "646SwnKk5GVhWFwmqPMjJJbMSpQjQXotBF92HqGF5kab8BmXS5mssR497qanGuna6Yr77w6fjgGT1ET29iGogdn6",
  "key13": "5e83rQNShsjAWL2RpdHK9bXcD5nPGpq9HojB57ahf7YHdGuy53SszSq2aTwPH6zzvxUayeqkBhaCv914StGiTdJH",
  "key14": "4pubZkStvfvMRhLDhY9wDQieV51jbuugZiYymLU3BPPG25KeiXmreSgyRvpmkqV6hmwCUtw7CCmMKDaR1E8MU3v",
  "key15": "3ySGjrmRL1F8CznfNduFmnqWWf8o2kHDEqRrPL1kftQsqbtyCM4jeLmLeZxP99ir8bLz5F81WZKjsisUtnyZC19L",
  "key16": "YD2ZTeo59AhiUG2DRq2XPuiMi4mirMLs2tDeD1jWZEbQyM6gDD5UtE7VfF3TJ8XYQ54tvaychPpEEbJwp2ydqdP",
  "key17": "3Vx6XGQWmi25H18AYWzauQ3yRNvey8cJBqNEbwYa5kQ5x2hdYiJfZqdFDr7HzkduQGtD2GJyhMj1MX8cuBMjqkVX",
  "key18": "4eZcyJru26THEzBNZEe8G3FZdbT4Bbf5ABTHhjiZXDw7TKpQ7CgyvFn3e8Gm9RZYiCQzFBE9dLbFNUXTnXiyS2fq",
  "key19": "3FUmYB2SeV9u2Zw977QtRipebKMgNMVxhRWufrK2B2X6BbHhGxVMTdzBQTXJVfLXfRNtKRMVcPwN9H5B7yfSD6tq",
  "key20": "5QStBScrmniy81dH1QQgUh1xSdDtFhZBLbG3prpv6vZQN2R8e5YmyFhNnqcskFd31Kf4e5HYGF74Uga7Q3csejEL",
  "key21": "cQ3bGYHm8KQpZ4DcLrJwyFNESp2AQvmh2LMzUJAcvHytwfpKMLkHzMuPtUUvgoJk1CWbaGHxMaZuBF9FNAw62Dh",
  "key22": "2v3sCC6s22QmrixaiYHd8ynPGiACcpLCHFiQj8JJQ3PvQsju8PnQnDXGsL5KwP2nLxZqLbY8d2cGVFoM9vYwXmc3",
  "key23": "4A6bi4acv9ytP8KwgbYr64ec8xUWq1pXKavKJe2KLaaQLG6Qd9b2gsE3d2YEL2zE1Rip32NLr13aCgiQKWupmLsi",
  "key24": "3eQxbxGsDzG8ZjGUFgUF2Nw3a5RACBzzBmUF59jBahhtv9rGFdTPFW8Jbv9RR5M4tMnH6BB4sXg8bcE1hSeFvyHF"
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
