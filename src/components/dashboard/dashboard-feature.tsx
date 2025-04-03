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
    "3J3yHtEPUzibC4bKZMkKueDmVk3YafLWXCSd4hEDXtiMVUfWubRULBwqtu2XVUhfXaRnoCBVpV71xviHWXvHL7ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38T6qWhP5SqGsQQYN5YLBZvDrx5GCE2QSZsL1DVMohJy8FpA25dgxrECr45qNbkrHqs8MQ6vf1VL75o5NGjMfLF9",
  "key1": "61e3AjdcHi3dbn5A6ZLfPrdn7C5UdcfmrtKjviTYjRfQ1SEymaR9FeXuZ6KSfcVZ4dxmGtgG6oGWimWxQkkhh2SU",
  "key2": "4AYDhBMWMjoZopwzVfG3Bkdca28TXLcZbGo4LQh7ggSyUo9DoMm3r4LjXHR2MRg5N9Z2KeTxZ86gLi93wb9bXm1Z",
  "key3": "dsjifrznWeqyaBZBLKg9kgG9rDciLBeFfm8uUu7BdwBgSR1BRQNTMyqbRQDYZnxrvSfwN1BhQLGsJ8zuvPtGhkN",
  "key4": "3UBqaLi13gZVCRgkzYHXdQqLN6JzsVq2QakszNbwwCrrrnmNe5NHrab1X9T5pjxADfoau9FfJpVPHgEDDUhFMB95",
  "key5": "5ZCfBWqjpU2hZ3zQBF3VBwgJbLJXY4LK5dXhC1CRtkdghafuxoJz2oLuHogQucEWHccb9cd5G3P7WGsR239gqw3j",
  "key6": "2aEvZ42atFPZjUesofcoBZQ49tKD5wC8R7B2nw8wEEWW88eKmRdxfXgTXUNkb3Eg3zZi9qvwYEWxWxrrrEs8944L",
  "key7": "3MeeVpMASAKiDADDcxBL8mSLKEQhdr9xH9Tqb5bunmojid9ZwihqgG93c6ThuqGuHSaXss2FnuEohjupaS9QgVoH",
  "key8": "2R4xEPfvLHnbcR8HVToZCxwHCtzvE96nm5qZdtSiUEx3dqn3gSDY7gJtJagzHXNE4GfCcYErKScsoCa4b9djFRvi",
  "key9": "3KFFhRRmqpThWe2TPuo6h4yZQcBna2hFmGvjmapxmXSxqVbJLLSyumVR2QGfNw3Dr2gK3JjkDK4CjMySNYLqjjJv",
  "key10": "5KqgYoVqghw42d3YcnMpirfDWbMVJurWkDUizUUyhn9PsjG1aQ5xfZ28N3mXqKksNE9UYU54nMEz3Sd8t4mLg7mu",
  "key11": "2obTCBaVTTpW67ex7aCpniYC5BXVZk8jHKhK7x69tmZAyygU3QmxJiLsgtUfhUnVAdgX88Z3CagUGe2DqM6jRE3z",
  "key12": "4sNqdFmtc4u7ozcTjYQ3ojQo7mih6M9gYuKSFvYxrYzces6CGYLLhgfiMJqct5EhH5DLuJaKkWqRyBmVJUT3rHjK",
  "key13": "5Fy8EvRoaS8tY7JgEPWRc3sFD26k8nUnyGjMAqyxRWQ8kF6KfSAHELDJRPxzUn8AMQNFkieNpcFjY1a61jwEj3C",
  "key14": "4AmmPeCy2Vn7qmsAWw2BcRkLAknASkbxFV2jxV7A8SRRU5XQH8QnLJWJSgUaghtmUqH45J3DtqhGS8dJoz7TWrnm",
  "key15": "5wBbjFV3rag6au2AbvFVqLXPjBRcnTPvNTm5o4KRxGYmjy8efGbBMCpaj6DwVeTwiFLsn4muVBbrvKZG2GGqZQs2",
  "key16": "92XQ3mH7xxVCLRgxme5nSfkTLNT1nvZs1Fgy5Lvv6sK1pcyfbMLkcDTAmFcPsS2MbNk1N7Aj5QxUd54XmrAFihA",
  "key17": "28pZ5TQCinKAFmJLTpVNQdnkCc6pATKjnJckEpmy9dN7FFBpto5DznSLkCnUW4SnQ1XRncHgimPF5jBCCMgSeCiF",
  "key18": "2tYSMvCbhGzDmEujYY7Fb77vQcMNkSJBRWm8AUoqUvVqZZCHESDTnWBvs9hkZVfUc4aRtiFVyGPX1fRCp3pG2YJk",
  "key19": "24HMZC5kksysgRVC5MDKWJGdhE3o6d1y9EzXdZQYWBnZ2K4PLXTPrrJozt8smmxDW5wWX6ATabVJRiuQfzx2xTgP",
  "key20": "2F3RMuA5b9VKHQSsdwr9DaBjLCJ13m1kovbLAiv3XeT2ZrMDPLhytEbhGDx3jzWSAP5Y6GA3qUBxSfY3SzygJQws",
  "key21": "4rc4Fj7nqSg75KLGnazfGVa9pnh5ihN1xhEwvMzRDqje77WuAt73Jwx4TSX8tjwPR1STmpajbcxvX3dNhRevC7WB",
  "key22": "48cXj7TEujTZpdTDEhoHzt3vWRqVzTyGetpQbj7hmw3P4ckGFdqAPzr82SMzjuis1Zm84XG9AweuM4AurAxTnwi9",
  "key23": "36DyL2e47Zo32bcZAEcyfxBUxXC2aFekfTvAscbj99qAsDZzJ6dotzUiXwnnkoqjzSpEc6t26E5iCvbCmgEZ866n",
  "key24": "2k8dZYMEa6aMeNQyDe895fEZMp8h3eszM4hB8sXTwbFyC7LKMGV4Nf45LKJ9weFdWuAmLPnJMbMzLmo6Q1zppwfq"
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
