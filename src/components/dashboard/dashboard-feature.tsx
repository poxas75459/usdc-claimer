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
    "3zJCPaK1qHmdmCsvyETMhRiMdbREvScHwryoRxaTqdYbPSLHnbYKJaju14HZVNytyzgDjtmVqwKHhbSTy7APZUUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWxmfBTgpeFm8H8dD8DXRYB7DqC3b7Yrf1CYwT8MMmrwZeFdDkgBWdEHQKUNfMkvZ1doXPzYsAtcFv5vXca4Baw",
  "key1": "3kYo9xcD1vWszsR89tNibjSy9PmeainPvRVfhCt8aNhT3SgmEvLtJUW44o2TF1j4vMbR69qDvUfgEQXD79anYjPj",
  "key2": "d9K7Kx7uFy6EPSUES2SPE34ohmkS6TRN8TtD7XpD5nGNcU8KmqcHrDyW7c6d123PcLctfkN7wD3R1GnNBtM9LvK",
  "key3": "59KeQptnPSYRtSwyrKD82vUMTvoTLNNrkAnjJJmPwquw8EFDgSLTsTkefrGMEtMLRrx93mDLjReTNjnGZUH7amr2",
  "key4": "4jdFvJV1a1vdg2SifwvFjLvgoFJyjusd2JPA8VWwU9uABjDo4GWK4LrWuAtvprMsZeSLYeTjGmqjd6MEonpT3Ueb",
  "key5": "4uoXKRE1wzjcipx78XaxxXnNNbfVqWSScRN3WztHEDQhtZEvS33ty5aYUwzkVUPXeZJPJ4TZS971fhFYw1U2CWZ7",
  "key6": "2u7mwWCsYkvSdoWGQN1buyo67iWYZ7HoxPjZGiorynhCJ4674ZN4PPSFGfSwnLAfwUaE3AAyaZwte6bzk1gHnqAD",
  "key7": "51s2jGz9A4WE7r4utnsCo1EBfS8qi9vudvRhYWVBC9HqEeyjshA8sfdKj7AwxHzsXzqkRQUv18YPvyPbnMkibvuZ",
  "key8": "2uFmXcjAUS7oyMJgowgNuW9qNsYPn6DAoJ3mSLDDJU4MZPFSHNyoejeRNFFcbPwTrb6QEobHghdYYk8JcphZyHhz",
  "key9": "52qCagbYU7Z22pEyv9zG7DTN13NphCgmvD641XWyyF8dMakc5yitELqW8bE3xqmuNzQNmY6E7sLzMuczivfUHU35",
  "key10": "21CVvMinbw9Fz1bEfzGYAUEeGHDwqs8jvLVKEubkAdSK2Amoyt9837ZzcdDSZsHEMKpU1TxJJiChfNwjhTvLm3oi",
  "key11": "5Cbdz6Z1yEivb5GmSCogQ2qJ7gmv2iKN2J9x95WKm32vsEwv2MdbbjhRj262sMj58UYXDNxUmd7gfLoya5TWzxbx",
  "key12": "3ga8pNVaDnb6CGYM537Yh2JMyQiBP7qRWFjEbZ3kE727u67TgXnNG5JssGzrPABgPafWMNwM7YZJKKsLx19ABPdg",
  "key13": "66KPfcWWwEfUAJ5WbqicVaKXZEwmwyEUSZuVAu5fSx7uanc3SxLrFRacS2yjqE95NN4b1Cbw9NayqrK82Tcxa3vp",
  "key14": "4qReAtfgczcrZETPRCmzDpNcRTxDMG3UytVF1xFVQZ9ke5TWeh3rTVGEuuZEuxJk1dECvLY7XrZRNoN7ukcu6tUW",
  "key15": "4xRSujMjg8BnLH9vzueRQUDFe5YggonAvp4SnthvQ5WtvjPCuyjuZrYDLjpEj2n2Qdt5GBXw83mbcHX7scsQBcHC",
  "key16": "2QhiFqqqnVDCvchHV2NmhYzSrtuTWveUotCSG8GCxTBmA7UqngReRwCHCr1KS5Z17LrvCrLBH6QCLboEEzp9Kphm",
  "key17": "9L21ZqJw5BuDNPYLh9eLWzP47DVDo4m2CHkkXAe9oeTJXEcA5w1Ua9N7nbTQvgsSNvqXFJU8QyvjHL23KAZdCZG",
  "key18": "DsKHxydwdipUEyfZ8hPyRfwamSgETVnvezxSjiG7UGAF5S9jBjgTTPU5mj9R7DZZaka3qKXqyVCFqrnmW3Er3up",
  "key19": "3VWxzBGMYanJ8WZn6eWa8F1P2QAz68mkHQxh8sM8AX5SharWhw4HvWLzpqXfPNyfQ573QUQkT468o8E1aRar3m6c",
  "key20": "543aXgJ6bLuXYuoiHBmbpUqbnXTJLqNQnzXFf5rGCXrvQotNYcmPXJQapo3McT7YSMJ8fLorZK5mbvZCkwp8Bn3B",
  "key21": "4yCNNmUzpQYMWvv1tuEd7EkUcywKz4uE4CXeKU98asRitvGd4PFDcDyMduBDGDgzSVSXRFY4TRke8zv7ihMi6bVL",
  "key22": "2zo5RDgtigTpt18b8BwdmXPDWopm54sMP6Kd1cjTPHkR3BBtgYaPvZTsBzQwyizQmgYe61brpcuTjmkek9i12nBd",
  "key23": "4JvhtyjN74f6tHZR5bfWpN9Y2ynzSQsKF8Vo3o1LVGYFGuuQuCg7fBVhNayxWy5yzhvbq2FHEw4Gbh78eqtRJXAR",
  "key24": "2azkNWkjyqxhvkcTye6QtFrAgiyZha8BgXAugpqGse43hpRzFLav6FCKnS7ors98G4A9uarSxL5xoQCnR3zLkaeV"
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
