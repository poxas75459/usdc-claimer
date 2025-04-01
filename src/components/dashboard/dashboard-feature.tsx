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
    "Ei228Hwckgd6jbxkcnHaMMA7UxoeDgCnkjF1aG8SYVxt2kKNxnysXT8tygeLwwmnrNpZkU8NingaALkZdm8outv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cozw4Eu3FQJWngymqSuKXEHbDyeNe7xbhGxSBEV1NS1gbh5jpmG7cg4xj1j2uAEtFFU16Thodbjw6bbbNozmavp",
  "key1": "5pBaCw2ugXrJBy4GU1XUiRmS2x7DDv3nJuV7C9nfffg9yZSvih5YJn9YLBAjcCskSCrQjTrDLAawPLYmRjeCnA3e",
  "key2": "5zS9EL1UKC1CsxWV5t4fv8pLVZ5E2P6DoJKPbdV6G959G8ggi18TkvZr955GNFv26A3oj9pgPEnFFjaDKVMvN5kN",
  "key3": "2D8xFdyrncCSUZuH5y1R5ezx83PMFY2KprTvbsvcmaRda7HLAicDoX7o3hd7C8ddJ56LmnpjmMh3zDGRcckbWLy1",
  "key4": "5VZ62pmhhWvJpaipnz43aVTjwVTVAnMoEdqM4wnYdMXcj6FCQQvq9bVzA5t9gYnbrNpL1exDUWZ3hLiypcJHLV8o",
  "key5": "44pVmSmuGSa8KQnLRXy13n8ij2rCWs8s95NuNzZiHAer1zkAU1PR4AVNBWkF3QuSXQqmdK2x8Jf77NJenwhF1v1f",
  "key6": "5HEiALKb5w4WCAoKdvsxBjhbVKsVFDsSpakqMABxzRg8j4adheEMxTSjra1HFAFTrnL8MAWCQykV3iYjzg6YGtkw",
  "key7": "FE5efNR7AA5g4Lz87XWAovKyXP97G2eCKEGPQHS9ckcVfXx8k1A76TXAb3MVSQVC6CVPhrgsMJqS1UW4tQwgDoH",
  "key8": "2QXzhmmu4HU38HjeyTqhi2ZofcuGChvHgQvtW7ZCpscmWkoSGaigqwRzGiN2HLBS6pJWVhTWLSPJGKEnNBei1e4T",
  "key9": "Q88fo7vuFNzS9Ski9i6uaKvgqmKwcKcUZj9pBANXZ3f6ZMsczPVg5inAWVVp9tQPEmr5SJVXHiSw4FwaLuw3CYa",
  "key10": "GFxJAe9oBUBgzHdK5XKbg2zM9jkbWTwfhXRHV4Adfdgj6yX3kYACLZUcigA4Kq1APAi3mHKWGL2Rxmn4Rxo1bfZ",
  "key11": "tMZDuHHGv3i69Bjy8Rd3QJjM27X2f5GNFwJrrXNyQqsQPaJcmDW3ctsZTrsVrDAzEjBNa7WWqjYtUiz3wrvMDiD",
  "key12": "2VApihgvv955YDR9phamZzUFD5FF8QPScBXuSvaeSuemAB8L1pzuEeSp1Cr58ApVeBRjPacorZGj6bjc6FZgjQ3P",
  "key13": "5a4S2XW7337vNjpbrodPkecfuFu5vPGYfvwspG25nMDi6qKVBUxHQbqR3XyRAEvty6hr2U74PLNwiqLpBhTjDz1d",
  "key14": "3rogmZS4dvwQHmJyYkCivbditix9bss4mQK5YcGx31SNnqvLcPJQapGUaiMQccqeH6vBjPuw9qyRxjJAwdg8ifQx",
  "key15": "3YZwQtUcQa9xa14F6LvaBSwq4rbz4xpoHPtxTXFACgsDfHR5cF4GNSmhj1TnTzkGPzVrh1kCk4c4RkFPNwxZGsBj",
  "key16": "5b4Ku1aSY6589bVK8fP54fbmj9q5gB3ShCpcXcs9fCLsbsQGMpCjyBM8My6mSHh2KgHXCHQKKhvkRHXqnHfzEPT9",
  "key17": "4UNeFMK9iPaQuiPhV4oETQZw1PdTocrDVw5ntMQteKDiXQkoFfoZCvRtNXV9N7YCoMbLvNqCqR98qoU8vLGGuSi6",
  "key18": "3zT2WNGGL8VbzhCLkjH7szct5UXsvNviRHpmzpFKuRjeNmy6CU2zWEAR4gouWnA8xRfE3VkF9LDMyJS8gHM9dCMx",
  "key19": "X1avqcp1e9KPG9C7jjzqvR2NLfUPfbkbQSid1Z6VYctGrvvrYiKAXHXWY84iUxzTAL3xJrtswamSjLWnvgLXV9g",
  "key20": "5pmwAWcU1AHfVUwqzDXyFxuqHT7J7rtPKXuPynrH1rXTJ1RsjfAFrrUNuEtuHNSrwx2UR2uN1p8DDAvGRWzPF9ag",
  "key21": "5V4TnGi8qP8hgNvtvpYjb8cXnk23moMfVy3BwfGCUUz5CoSp9ChdDceMUjAVYk7xXiqxrr5xq1QaAVV3bR6Mhqfn",
  "key22": "5JRsQW4XyMY6kv2LCTK2DNDHDNenhoiM79AmrZCNh9QraTgDHfx7QQo8QGanFmCXT7PUJdghq8NjTVsNyEALfi1f",
  "key23": "2GoUbafnxGgLHypjuA6sm6EdMjRjqV5T6oB3XhUqcBU2haN7MzAbVjvifij4AeCUcPMBzHFiJZJY6ZLUyTZ3YBPb",
  "key24": "54DFLi9f1Lp5HhMbKnwgWQzTbRCUdzNoAV6TjvGrnYuDFTq1xysBxyKB5YihghTQU5mmr4h3RXorughcFArTojzM",
  "key25": "4Ud7eQo96jzxCw4V8WijJXu2HhHY77MeYmZ7MSa8S19Bn3WRdwprvMTnoudxL29AvzkVHbkAvkRVMxhyn6NwiUn1",
  "key26": "tvpdsHqZaEKPPEisbfzcd1rnJS4JpHy5DA85SapUEcYx2sN6ioGHGU2n5CvWdKzg2cXYsqzAiWQKe2QDsiSb8Yk",
  "key27": "3pwWcndLZUQCxHru6Gc16mDqMSva1KmoN4Uh3WoUApKFL4LgWTq3Zf3HTUaw1vJ37bv8DsVKSCAXqrpfRszjqbrF",
  "key28": "2wiDcUrFHFyvfNYzpKcKN7QN5Sj8nX4NBfANiqbd6boWGM9qbNajKDjpNSfV3pQahiPw9CcYotjZNG3tumw9VAgx",
  "key29": "67FZ4S5uHuyfDLFjJC2tgm3d8cNZr5qCfRmTqJuFCvsLUsWL38Bd6URs7gxbxky2cCVj1G3nA2iDTWKHBkqcS9aZ",
  "key30": "3vh1JQ1DF5SksVXGX41NoAdxSY8dzNfk3DdALj84oDeRN86FvGFNuiGqHobLULk5TJvKNv7iw9v9r9qJfb2iSLDB",
  "key31": "4pXSc8WrSJYjYvqs37BjXz3ovuepJFVCVewwCYYCNrTNrcMoh4FfX1VvB4afnSaSTFPJLQd5bKevmQAxXz77vojG",
  "key32": "3NgS3TADBQEanpgHYMkeyinbpLKEtDcwd6mmrGbEWBMe2serAhFst4AY2e66sPYMs8EN6wwPoGFgvQo13HuEtAUt",
  "key33": "41zZVEpJPuzrJTy6tNfAJ3Za8WCTBXXeXR45ucFRXDyXpHUbjiR36zWkLZhjEQaHG6mmQBxxEtBNrScvrqhnBJKM",
  "key34": "3jR49tYnUPWPkfPozd25uJD3DgCvMfPuuFbFXxykmZcwkWCxZv1S4RJrTXFPjKKNCAjibqNYCHKNrm6TcbVfh7yJ",
  "key35": "4swfhzweNpKsQhEh4rqbXsdMhC6fg8CrdMiAq6SFyjhu4KpimQw2FXK4kqEQxZKJJ22d9hixywbLuXz5k2mJGCQP",
  "key36": "PKuBdELqPb8Rw4UubQ4NDFhZknewLRG4VnfngyKhrmRevU1ioe96rfUmN9EFBMhnpoKUi6TLaN9UnJoKMVFvCqD",
  "key37": "VgHdexXJmzciFq2QGE4zFJrkp3KfEU8VLvNMjS7MKxzQugfAhzk8J6H3FKkmAB2Z5EAaQWHXxmFabQ1fN5nCDx2",
  "key38": "34SmXYRUGQmT5KyYPkBT579bqz5KdGgShUjJCFGXidgGdWcALkZue8iHd9iURSMtUBfG3ovDytBgzCi8y7eXZcAz",
  "key39": "5m5NKGgkyEzVR1d59F3GJX932zdSuR7Bj5kGEM5EH5Zo9FrfA5jMTCfFftUGhCXF62mvg1QEVe54ohG8VBznFZUB",
  "key40": "3e7PMnBzCkPBj5FhCXmhNNBE34dcBSKUtwahNyQzxKHy3hxDG3Znk8c78aXFCJnDY3UxC3JB8CYBkUtCAWUXm2CY",
  "key41": "62UPLi5SdsP4BVs6eKmC7nrqTTuqPncrCtZwH7fJnambzHVqzahW8VXCML2NU6LnyYghZrP2jyeUFoayzxUsdxKf",
  "key42": "5bbUSNdqGFa8pMZ9qvrtHUgodBQLyfrKvmRLvjknPvS4ZJaDUZ15yaShCsgo3hzcZkYog8XwWSrtXnwb3s8VhcoS",
  "key43": "5GmuWLpxFga1A2e8txiC3AVCRM5xGeuNArDFcKauvhAUEbqobssMkZb8g7VZDyBvX967f8d4bQZHdKb73jm6M8aL",
  "key44": "32oD2tJvKjgxtwpV7t1YbNo1zYdA4dQnB6CFSKKDX3hWNCQ8mknuC7CXYDtDWNMAgDbcjDhsLZEs4pS1Epc35Cfg",
  "key45": "4VCGwUvTK6LRKXnJWyFJNC2ZDfu8pvQ37gqkpZmdvtPzuKzJVdMMBtewc36PbG4nGeBBLKLUXKKBh5b5gHoYLLR2",
  "key46": "4pa3p2mDh1GdL1JVWD6mn6sy7KyZjKhRtp1joaNKWM2m229yZnYtFqYyYugqoRV5VABdwpryYPnU13SEe8kA6NwR",
  "key47": "jim2AzTjTha2ktj75gbB7DHnbDds3gL4jZW9jbmB3f9S7iATPNF7Aif6SxprzAxhrzmDzNXiKCTrFgdzLYCQjFy",
  "key48": "66zqAwyih4bdTfPQ4rFU4LYyLhfSXg2XCZoa6ULE18yM3jc2J1qVDhBkgrWcWHXiB6NJhMQJHsprnUiehBTTcat"
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
