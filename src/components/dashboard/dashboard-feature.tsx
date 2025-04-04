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
    "3Q49rEsGN2R1jrNuxHmeEBcNA9oe5YcY9gDwTRxfwWRo9XqYNzg1B116t1Q1m3TX6ffdmZjB2HZiSK1Rqbknd4Wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qg6zWYdJvQ8JXoRvXQYVwTtD1KbqskAtqFLPE2GZ7c6fhipw8DzDTPk6KLamnpkPhCwXoRY3Xu2ezNa6BTRSSno",
  "key1": "56cCNSpVwpMRKv5aXrSKByTxXXChLuMRtkXdbVEaopBR4vkhXr87DCpsWBbtFRoqNVbkhsNEpiHBtaScBfHjoCjD",
  "key2": "4nChbJeXQ3XdZArFjNLQhCQjMfS1U4ySonogtpemCjUMuDuTy4pEXu1qUFe6BqzF7VhTeJ2LZHpKqey5oyAtuj36",
  "key3": "3YFXnaBj8rUBey4VawxMTU7fxqxuWfDDADqmpRx9o44vFvcFoHmb1HeBBWhPASmCR1ttR3BPcZX3WebpZ5NKZLYk",
  "key4": "4cC7vnApChQJ2hq136EgpcEzrcQ5XNxmCB4XhM5PCe6tR2khoNFvab8axQhji9RPDQEm3oPwi3YkR23vUUNFEDr4",
  "key5": "5EUKoWFLtcQz8HRaDAgxffpGzfSkAW37AqvZzrDMcPLCLBJU5XgFFSXHQvqYXKeJZjYLPF8eFTvLDAGoWRBgo7jZ",
  "key6": "5PgWtToCyByJRmrsx81X65FUJYeRh2QH7ySdX2afWQPhoLkMKmYqWhJ9JkeJbAqEENEPVseQUYebikS7vC2R5R87",
  "key7": "56gi6qi9HNH6kfXAJfFcnpMTKo9VRanjGjYGLiDhNaU9kDz1UkSpuZwpRamHRFNAuUzDskCGiBVsWBzrB3ZgUgao",
  "key8": "2WpUYbxEryv1SZZsGL1ocDoHdWyXTDGABKUQzDfvP2nyhxvLu8mAvLiQD2RRexPLufMDZfePDakotBENN6JctrQR",
  "key9": "komGzVJHtpwpwTx3bQnZatzUx1HQGfLsMtZUkSHKP4xa59Yf2oh2qB4qFe1rdMu8NZoDkLQatZpb9bn46WLTuTg",
  "key10": "2mCN5YeRohXRyTaduHAx2UFQurLH7K13VJdqzieWgpszW9yxvRZBnPFFwDF4ALJmB1oEaPYwCFp8t3vuNgEyxpx7",
  "key11": "23sGs3Lq6srB3kyGDRaNzXGUc77hDevgsg2BEJjbGLczWNnTzCUgoP1MMvVZVapQpe23vw6BJic5LNvRcpkzjFuW",
  "key12": "3wzGdM1jucJyKQZ3nsTi9HhAkCrFGdggv4yrf1z7TxWRCy69dC9MR6jVxHsEvdaYXDn8NDP5YBT7x6NTYt8DkPeB",
  "key13": "42yz6XM8se2MbqBPFgn5DgZysFcAftJfNQziLyRGwon3JHYvEsxfaT5Yob2wJQ2FBCYUoXEhwqZ2rHQNXZiKWZYg",
  "key14": "4NyNNifwLXKnFDCUEbcKxjYjHyGUtCk2Ud6sHwvS493bpyHd5RU5VRs1wFHYp5G67gAER3pddfm66gHnBMpxpgkN",
  "key15": "4fJwAXmAZwPJyqwsLAR59QDVSHckexftUVFipMPYF6ogCPgq5a6ASSFtDDMq78WHmLphthQJTq8WbUdVJRfcoypG",
  "key16": "3Jhar4RxwtU4XyyRpFJ48vAWEkKSizmta5iUbuv8newtWeWYbfRMtQbJHWveW8Qe4W2AbWiG8zn7cWNutPJdPm8J",
  "key17": "32xcfTum1XrwTaE7wyvKD4JjM4fPW9oykrt68V8ukynSVr46o2U5tbKGvCNFLL4uarCST7BLo2AKzKdNkTE66oEa",
  "key18": "2PDpjXuR7qyLURuQqzHNgr6hkgJktAajMc6upev3vL8raTm9YgmSDYWJTZN2Hepw5zTPXTddZnrd3pNQTUAswJxE",
  "key19": "iXMV1s1vwxUD6kapEfwPRP9M7KDUP5T11gedVdZuvp1LicBoMzUskqPqLaxqFE3WHJnujB8ZDu8CLeS1B2CaK3e",
  "key20": "9VEVoCSuoSQyzh4ZWtLJa4qobFTbJErJVUcqM27aKxUda1jedyfSjzSjzuiUDx5M18MWSTAWFz3Gtvri5y2VLSh",
  "key21": "5wtK2SCLK4tKj6vGYRQN267GYxHEWfKt5esmjgSXdr2Gp9wg7oA2uNLrXAH9TFk7qoZMvZ39xzd4mCmM8MLNGCJs",
  "key22": "22S18eS77YmSGNnVuVkLH8F5MLkaQbRxEEYQG1RDKwVFiTL4iWboPCqS5gVL5EZPmaKRaJ4uJ8woeghWieiTxPxg",
  "key23": "3HSa7Le2QMcCBNJHbC24uHzaiWaeDk7XEg7F8LU9gDA3snchBaiqv5xJT1ERyWyK1Fc6dLy1zku7Sis1VmpWxFd9",
  "key24": "32G4ndDZDBW2FRG8jc3FHn5T1Z6A7o8PVw1waY4vkaXHp6QEz3pqt1knDANRwbPd7B4xbXjpBQKzp9Q37vyaecQj",
  "key25": "4Ja8eFVBoSFDGzz7KP1ZeHRNVz2afkjLHAnfuFmzNTCWxEtSws2bFGZjNnYJSTRt7DFix3kckvKyYqFG3hY3JpL4",
  "key26": "3AkVG5ePK1uA513v98GQEEThaNdoDP76cnwnoJX2TYj1pKgec3G44DGME8UtXzyseQwq5rc5hPDXjxCHBYct2Ckz",
  "key27": "RExHdKCoLaQPTL4X2jaPDVafnmR1UsxrVvuspZkmCAq4h7RBi68jvRnRAnWB16x1gKPKvRsDnbtGNXVW5YLrChU",
  "key28": "3AgYcvWzoX1U8CMrsB9GUevetW7URoGXHKzW9Ze2bMZK7Uk1dNQJtCCarTKivigUPiwKchdjEom2AuwsbF6wc2UX",
  "key29": "5vTpAW8CQLEunZ9roiVTdqudvDkKdfbmMBwSfwqmt7xkpvCDwmCyN4HYXr21cX21gYajXHHNxeo7dvj9aSoEcLZ3",
  "key30": "4C9MoEsHE1ao4SEbUuuj8EM4GAKqBjLsP6EsssdFV6CYfwnpuwZKnTCGxgJone5qpJmJ7abrGZMAxKYggesAxdXu"
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
