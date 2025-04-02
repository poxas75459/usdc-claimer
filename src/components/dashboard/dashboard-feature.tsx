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
    "2pJC6YACfV498ndPzfoQP9vz9wez9igMmkzyupfeaQghrPTXUyzigDQiVjDyqwcg4HT8u95pZUowAg1DDarAfvte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eFotaguq1xwADMBJPfmhonaQ9eB8MgZmDLGxQMzS5gJA92joYHF22oyJAyH9f3iCrNPygdpNuG9TF2NB4pdGat",
  "key1": "it4oNX2gVeZRuiJGuVpcHXT5RiMN1uPPX8C66XCvQtdsAnWxegPcvyyf7meiFKiuvZLddvZnRYXDiaMpCR9Dgi4",
  "key2": "2bmQJQr1dCnvLgDpj9rvFQnNkkF9fFDN31GdvLvpn985TsJTu4JmkXHCpyLjSwdi7YdmdPYWKDF5qtakfLc9Agqf",
  "key3": "3YkrHRhcZEUDALiDx2Dez39AzynpgrhCTBC9yLnm2iqFo7Z3tXVqCAQ2MKSpNvYcve9Zyjkq7HHba91XpBrX4F4J",
  "key4": "2aS8DE4AZpLs2kDyxLaNfWWRQgA5qJ3vFm8QEnsEeEVg1Rt6gWfLrXEfGoyd1ryFCdbwbRA8zYV6mordKJtwNmE5",
  "key5": "2RrQqwpeDgCu6uvmwohCYfG8qC957TjBnz6z2kerdWYpeZ6jziF7mbdaVcQDdvhyKrdQkLyYa3rN1QF7QFvrDTzE",
  "key6": "5KxiPqi9STiYZuJ9j2iuwLD6e2u41V25RVgGzBiiTB3oweiHXYh2HCMt7N3WwsD5jUdZaVMXo3RKSpTL9FKqvqtU",
  "key7": "5BhBUuP1qXsD8M6jncJPbc33BhSec5r8NxHKxr81wNfC3uio8nmymMvDxv8gcJBsw8tRZWu5AC2VdNwjWYEUG683",
  "key8": "4SpmSp87PazGdi6XmYj4Mz88dUTAhfwuBZY6ARi12mHDcC2BU6wF9ixetTGmHspjm1tXFVvZD5bKdWy9fwcCeRdz",
  "key9": "3huddRxE6WPnfzAsKypsjXppAWMGK4cyicR5ZmvFn66YkY5s99bRSVZ1wbFbWwvKrjWq8rYmJ6Qu7ZBoGWAy6n76",
  "key10": "iUobmvGLJdpK1ivmyWySN83READTUqrdHEnJUcnveTufaHbuPQt4sh6P5cGAqN91DGqRnnYPGaVcJKFLyxSER3y",
  "key11": "2Qi9rG9xPgbfQBvANSqKFXiowCBA1afZc8J4Uqn2kHzAgmk9dBmTEb4ZQktpXu48SceyTC2iU5LY3mpUtstDV3Hd",
  "key12": "4h7hFrbBo4F9KRWvR9NNpG8djArZYhkNMHAXH9s1G9UmRB7qAoYYfqoqkchnKojxmk64epWg8AYLy9v2aUtKMaRC",
  "key13": "4p4AqCKVbvHgUjABFh9vsPjkdm7SZhyiH6wUj6rPAzD6yppqiN7doB6sfiM39SXb9FoUEhiiRHWukvjLUZwa8deM",
  "key14": "44wMw2AQULR7LCQC7ck7oR2GAJFm9ftf8WjRovMJsPSVfcAZ4qFqjqovX6ChBWVi3ENtDE4szXipcZpWwewfFHJQ",
  "key15": "5unRUudAgaLRtbgHXL8BFL27QW6uavqY38TjCKsWaZEHk1AmKTGZ6MXP9LV73gYCB1gk2KD1dNApvyHfWdYhx7mm",
  "key16": "2NqbCTFSuthPT9m5EFrERpq9rR1LvKDGsF9VFZg6FvPLCAXPbRyYWgB3XEqjUuxL42cAW6zaLoWEj75ue2fZeggt",
  "key17": "3dsmcUcDB3fSijsckeKpXBq7RwzhFT9L6jyguEQgZFmkPqD7uVsWRU7jxsqsp5ZZ7gDb9hEkHDpKxmT1vK6JgYV9",
  "key18": "hsxf4WgyUVBzqHKjyo7CWe89tbgzrYbCecfwQBFL3KDVHaxnrX9SctBbDHCLymnYxjYgnJVex366fHfjkRpUBns",
  "key19": "3Qro5Kj6DvkiG9unufnDir8baJUsgWrscC7hmNwmyVYKFwVUALGM6nbNLyLZejukms7MQkk9ZiMEhcG3XCUeC1WK",
  "key20": "398bciiKheW2wXTVbjbhGPjzTE7DW3m7idtfXrdArKaqk7yuxLr9PXx3oqqk3ykgAfAbNbMT5AZiUewjBhmRDRaM",
  "key21": "3XJ2N7TXprdWmmSMQFkb7faDYf7xBKdmWPH6haAStb9hAaDmbGjxibJCPTzn7DkFwJEVbCvgFw1zPECsxPtBA2MD",
  "key22": "2NmiL1NUgmAYjghk562CaR5d7WPFm8a2vBrTJRm8LwqN1cz2RACpyNEauwd4Ydzksg9kdWQCwGhwwbnJjS1gA4v6",
  "key23": "4ocMbf7UMax8Pqjv2wd84yoQUveWJ3qxF7ew7pFQfkUUEY6Sgpcps6fSuMaRRVYTPE4r2Qv6j8zd4VJQ2pEAZz6Q",
  "key24": "4z7oPuiuM2dSztSkf7YJ6R93Je4no1wLekSkJ3fPPmdqDArwvwkyz4x5vstbWiHFwE9RqMLs5qxDoCAdMW2hPSy8",
  "key25": "5eU2zFFKP4hLL33ioYnXWJ7Sx4nRA49njSXwMo43VqJdq3JbJB1y3V2zU89RFRccMf1zSBmNf3H65AwRofUUkFsw",
  "key26": "2Wp8AMNoTCoXUk9kBVRJwj2a8AESCrzVxCvoRkTWsK2J38AscVUrjtdWuqspLGWyYw8E9uVR6SSjhvuiwSNdTbzQ",
  "key27": "47pSwGLB73yVZkTj4tzsYhMGK6MGQ1jVi52YqzEaXBvVJeWwjiiGGiHye91HBGAmsowkQ6EYnQEgP38aXE5AH3vB",
  "key28": "5tfqU8zWfsjbgAAsLC6nG48UPZAecGEKZYADwYtkci5HspDhBs9oWSzBkagSnxQeWyxv3W9vyJArJmR8DNuECCDS",
  "key29": "5MoUGxuQxxp4PUJX23uDRwtHk2xMgHt6WgbjDjgBJoiT6GMHiZnEzRFmMphWAZbgVqcStZ3cVJpjy1yPXpnzrE5F",
  "key30": "2NPbxKmqKFp2txRJsD1qdxC3chT67AqSZWzyYxEXqtAFVSzpTpMi2mJLyqbm9ZNJwP1HnT3M9db55K974UrMp6iC",
  "key31": "2T93ZdKScwpPJdWtroJGS1s3ppLUuH1tPp35x8s6WS8z8rxpFZ3a2vfxpQbriNKsVDscSx26sLgL8yVDuhyzEnm8",
  "key32": "4VuGXNQZPgcHiWpuSnAYVfLVfVazffiaf8D6QWiktaWnQYiZQTguqEbEg2ndCw3Qi7rqox4auqEspsBXnbEzBdJt",
  "key33": "4YEG8tkWaS46JPMmWLCadbU4DVnaTC1xws6yYDwMtf3EWCYfkci23vmSnhQ3Yj6x7Z8VEZEMyaxJTLp7ExvHPFjs",
  "key34": "4TWarcrahvgg6c4ejPpXJzG97iw8H6LH33LLb9coXgL19cjD38mDFG6ra7NMX4NUkaqDkWaJa1bsSg39N148hEoF"
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
