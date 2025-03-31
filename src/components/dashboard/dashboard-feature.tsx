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
    "4nZ6ttuFRtrTxdMVo4kLMnSQtYhjMJr32CJWrKkFK6UUDo1bGADq6WyhnYwovGcX1VQKCkrEzdqaYBv2AmTde89X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G29C5AJbdv6H4QsQqJxaEcWGgLcpoLGoJZR5d325VxnMoTsfHv99pkpZhqp5ALArmDXoXzziwzboWYNvY5P59UL",
  "key1": "4RWupb26gPqJ97xBNth6aQWeLnffpVwbncStJNWBuV7ypVVuUXkvYzmqzgqieqoQwQ3mehSqgLq1J6sD9uJSvbTZ",
  "key2": "2tJaBz6Z1QmoSdQpzP9rzhQmJuMCM6xNDTVxGny7tk5MpU2k28td2ChnWPX1ZppP15gaKxs1Qav17xSjR8Vk7Pb",
  "key3": "CR2ManHvF54Ztw8n9MmGydLsvG7GWaTfqdTN9z3Cv6YEwv9QY1sJjc9eJTiei4WeijtYeqtdfsbnN5BioVXeDyV",
  "key4": "5kqxyPdnTNFa4Q8fSAp9e242xNyVuDP461Kk5Z4HAFcphAufh1MC9nCew9zF5tMV9nsoaCtSXbHon2DfG9527p8a",
  "key5": "4562B8Zkimdp75VxRn6c5hjaS4Ugih2b4gjFso3yjn4HPdPDzKh6Am36jVWhr1RRzwTD3dKYJnAXxBZdvjgmwG1t",
  "key6": "5jkgf57DfrqQj4T9WgXRrDZfjFFhLuM8JhjA6mgF9EwTzM9AiqBZAMHmrvXCt2AxCxwTGa9ghd3Z5NBV78hYFtei",
  "key7": "2f14jLMcCc6raSUVWdmnnJNdfQrCHxHsa4QHUW44j5MAHPh82ZjpETQm3vwTVsYNcFL7xp5rJxerUTQx3PSpnukG",
  "key8": "4rLC26uWXnedAx4nzRjUfFV6j5MRSK1uGVsZjjtLie5sVUgtrUKiCJFQ1WVdZYzaFPtgS97ECZU7eDURmqzBdmBn",
  "key9": "4wTsWvaKJiy4XGDHWDRhdhocmtg7Bi2jdrJrjq1KKnYQiwoeWrAWs6LQCVq2XSv2KWfqXumCYbeHDbmD1ASbm6ek",
  "key10": "2to3iNmokd5kJREBxGt8k7nt1tmFpBgfXKMe6j5nosZPNM9XqAMevM4s2vjztycwec5hQHsAfv56EngdzzhTooxX",
  "key11": "2Xah9yXmZKdyR74hqWQ7LocCP1NLNvtx6arwAUtuM6gQrsUYLbntRuFgGB7CnjUJUqPdQZ1eQ5rBu4SMk1Zg6KDf",
  "key12": "2ZRCjdsXJpzebxepMZC38D2Pp47Z6btk3sf4vtM3jGdxeFZ9k9xapkPT3PjnwGWrG7XSgtyPK1y5T22A96kkziWw",
  "key13": "3sD7tWL6Qu6c1WsCb9tJvrna8EUT26B7bzSd4XQ3rzuQN9VQGEWnqAzGSsbtJ4FXHiMrAHcfswF35W9AFxEaq2yr",
  "key14": "2mhDUrppGst82obHqLne2RmWcrqTsJufDdsUDNVoc5PrTa4LwgUhkGHnmQwnhE1xYeyVKCeA8ASDJGNcipiPbTXq",
  "key15": "2torR1PHfiCHGora4DqBNZu44MLWbJ2YAviS1HXoxgmuG64fLBkhPs5GnQwXokoquK86RKCEU9m4bTAyPGL8No1Q",
  "key16": "4hj8vXH9jtR6bVHsqnv7uH3Dbsi6djFZQrpLKcMAypBxhhx8bRf3e1W8eoVbCCojL2CTbToR8qwvqhzhCafY44p3",
  "key17": "2o3QfRw3bjrxRddarF2n2T43N4SZQeGjURneKzoATviPSwYCyHhae6b5TC7TLLYqu1atWhzteXe1mcCBCfW2XTbu",
  "key18": "3mfMKjw4WRGYz5FdpYagjb9RfaYgjfZ49gAkj6uWS9ML1fJi8t7Bx2ZFHveyodbcBX5R5r44isRbKsqM1bamJN3N",
  "key19": "4YZ6rwUR58R7qUCa2sd2SNSsJwLF5kE8zU3xhvsRhV3gu74dBERra9Ph3A3qv9znqtcGAAEL3kBrCVvjwBUMZYb2",
  "key20": "4NS8213AphkmdZqNxA56rmSgE64m5B6tobzPkH552UQ2ubFNjWy7vDog5a1Fpmp68Vf3aw24pTjThtWHmpPbC25n",
  "key21": "5EsTLryLLH6npjKmv71ccpwaQmteuWw3Jr9deWhwgpzCdVAdxDZJKwm4jM5ji4dcWVivwAt9yFJDNvLinrpvfy6N",
  "key22": "5ydNAcWzjE9Buf14JX6ygpRMUwRRANPPLCrzzH9tmueajSoZuuAKw4RyGffTAwKUDqMSKmB2YUNsZfYPz6VQ55f8",
  "key23": "3s5cqRkvmL7s3KenVGms8fStN9s5TxPoFavkTpjSxh4q4FLPteT7GSHnv5nS9RF1BwJiUcwNRm2xDD7NQ6Tdnmnm",
  "key24": "c65EC4fEAMWTnQ8DGEVxuJUH8pCK5RrBCAufc8exA5pfq9VtW1A3Yxc68BjpEg8EWVr2osreJ7bLwAfkeupQP8C",
  "key25": "46LhzeA3SqRk9tgn5Uy4rGLNokt5VaZNqH6iwzFwANdgDcTx6KCEXEitTknQcDYGHL89DG1oY36ZxkTUJqfM4638",
  "key26": "5BN9sBWZ7SGVKrAuB8S68Tn7XJj9TB3Bav94yBHXKhYtQN6iz7QVqUUni7i2tK7bZfsmgUgpN98JfksV9zjRZqht",
  "key27": "yEHEkf9EFz4z32tKtV6PRxHZs4iCFbcDcn1vVXpZKtXW8wZnDSmQz3X62CJHp144X1mJBjKxyUEmBX6yiPu2krd"
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
