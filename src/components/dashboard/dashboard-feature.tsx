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
    "5XBvyzb2tzPhjgFZjFRVi9knWd3ASE3xrAdbrbmikYCRK6mGXCKnFUN5dyyWWsEXryJgw7oYtJ23aSLrXmyAqQem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Das9k4pySRR7doQjjQahw9YDZQzSzK4sbuBPFePhaCXGwvBGjcpfAoVGBXqVp4E8mH7UMwY4fdtfC3vW9Xa1zNG",
  "key1": "4hzhjE6JNSBo1r2TUqu1kDXzQYGVpHeMw9rvJyn3jkyvTQ1Jh2zN28cqeMeJsHaP6kqGLzLJJoXLNMxY9kagDLiU",
  "key2": "GV9Lb4b8JzThcKwTgPHSYQJjfBJLpE75F2iygY7KFJr8GurevJhSeEemPhW5Rf3PdyVwExMYmANBo8d46SuJYLt",
  "key3": "Pm6qzZaj5zb97KDsWHgC9faSdkLE6pTF18tQtvt1Xf9trkcwrYWFKEUWnbMbFSBARd6Mh1ULfMWfTZWGwuLkqSd",
  "key4": "2eEUrWrWfGKKFSPX9nYnQ8zzqmff93WduBwW8qykcMJ5vMUdF8dTq4NVETTeiBqry34YkUCNTLyhFZghMnb3zQUY",
  "key5": "2s9yqknEfhzBuvGTrTfJUTbjEJYj4gWsEkkr34fN1MsnB5z64jAEhHQ4njBd4oh6arNDXLT9KJV6p8MRYpyn2kcc",
  "key6": "M6GJ8RNWyiWTKdU25pLjfaGnYsXn9tJ74udsFC4B6fhZQvvvxRXJWe92AmaykruRb76owL4rTeCQZQFKjsiu5ye",
  "key7": "5Bta4G8czGcKgmunScdz9DwhqoFzcJ3yBiwmS7rPRiWfie74xzTJ2qvAQygkuU9LbVJtMfW7k5u2Ls6zX7XFHdfw",
  "key8": "5oJwAgV2CgUPSc1brndM5dkf4Sr9FLpiLcjpwmAqu7NfqxWfEUnkEeBFMJrQyZMgxULCJEEuSF9JSEg2Wqumw8L4",
  "key9": "66XcgP6RMNnyc7XSzpsYCsGxXn5xoqn1UsVNWeEr6xpx52YVFXBCjmuiVtD3x7XGjmh3jnpuuSHYfBBgHu3qmtoQ",
  "key10": "3hYre1rKNj2u96ZUpd2GbiUmrjhSpjgMJK148mFJ9GhSdJCzGMKxQfpS97Psz9KCjEGFJFES7tt9qdC3mLLbUVo6",
  "key11": "rs2amcgocaDW2pfzrAoHYohNUaRh15LahdZkxkDmu2ST7Rx8JUBLscJZSSiu3rVGkdLUsGmvigz5e9TUVXDBcTZ",
  "key12": "4AgV5tNn3QgPK5Wg8xAcwBdNbNj5QdLcftFowqYWwkmmyUAK2Pckzfvmzi7WZ8qtHMcS9bFDTLBuqshobx6rtoQD",
  "key13": "USbSW9S8VUNFJJLgCvyDa9MHAZGBhVkXuyHLe4wviMzSKoG1PptEDxeNmJadYndWAgJK3t3kshNGwdGYqBY1qjG",
  "key14": "2xKv6sis7c1CGyodZPDkTX3tQLAvEqjGayzTtandJZX4w55UXosu3iX52aqp8wrYpTbfU6m9BMeQ99WpVAZa3cf5",
  "key15": "4aX74nBCiH51VwY2hkmwhi7MXFkFQo7UG4q9HHx2oC7bFDH2ew44pg5GY6pNmfFjfzcMBFPfsgpNfDvFJ3bzVXKW",
  "key16": "Tv2A9r5WrW7pW7vLnLAJzUseLm4NBgJEL8ksLPYabyG3jaPYgQs1y7hukstMDGSpraMdf4ZHDmzFkcX2GK8f2y2",
  "key17": "66Uh2k8gd5rUbuSzTivmQ9mv3bWykZfA4b6XxY3YPgwor9FVj7DUoizPUPLabEGArxctvQba6Rvtt3jwyTQ8ir4F",
  "key18": "2SUFAq7iN1cLH2sucae8nSqnRjiKypk9eukr3WcUmAQBwL8p273a1qfTPd34tsjEy1NHzwVFdQZocdjZpKQfiQmU",
  "key19": "37UnJfSqFFt5zdm6CiWSCAieZkVyvEyvWAUZwLvTGf1hjXDUuWUiB6hSuJsnoLhiGxaWRYXJPXMivzNB8fAhPHEg",
  "key20": "3Vk5NnW5EXgmydhxFe89HVEvX9AhxAi2SSVuVZHKpCS8uvR85EMN8GQCxjVzjKnWthypBnjuiBhPCdEoc1m1RzSP",
  "key21": "AkttxDuoJGtNqJYujQ5jyBtcii3PHMqh6C3cb44Fgg8GeAk2X74ywBRWYx47v7XakHTJBqeVkQyVpU2C5xdBFS4",
  "key22": "3ZjUELnaRrgoc9iqe1xcKXyqnFwUX4ycY5EhaGkFakHd5KBYcpCPnAozcvp1qbWjmpn7c4Fzi5VKjGmhyjRi46GP",
  "key23": "2sS88kpvox7omFeJDtsHaR76UuBnrzjhGXhcATkRHGhJbL2DNQu3aB8VDaUfYmqMmfMPWnKe4ZX1gTMtGkELNQ6w",
  "key24": "3EcXg54bYE5SGzEFv3oo4ZioAbSMWCFAC3aRbLHfXbyefMPNK4QV3Bv486kvvgVPpMNp77MbvPgyJxYtZnRBo2fb",
  "key25": "3vDTHsnuMhddb9u7mUHqs7pQn4XrUkgoMCUCCap1tDf76GfhxeLfCELc233mXhAr4P8c4GvhcLoxXDiuqHYxY4FQ",
  "key26": "4u1VAx7a9RSdAWmWwrCCCo9MK7on5Du9aC2XDDMGKmHg5STzcxPAtGo8brPHZnhokDSLo3K8mdwrtbDBxgAzTtic",
  "key27": "31pVsMuwwuJ6MkXfbQ6GuvVYsHNPPHZx88tMtRGWrAQYPJpCqUyP1yTqc5g67aELkeEgA4gAWUT3naftG4141Ggu",
  "key28": "fikq1p3bD3X6Qouq6T6GCwqei7i1RJ5uKDXz9pP9Tn3UKNsv9srLapYBT8cDdmpRu6RCn9jZ6rv41X5oRJNof18",
  "key29": "36ps7JtayB5WvdfALwrnkNqWE5d8XmU8vkRnaHboDVCvuDvsm7h9ZRYZNvRUEdeMxmJAz4HgyUHfEZECv1hYrZrt",
  "key30": "3JrtdsS9fuk537J5z9EHPM7E2eddzGBhAwvdnD6WPGLg5Aj7hUBtKLa6GZUhwDtU3wVKQME9cTUP4qPmakWigJ5s"
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
