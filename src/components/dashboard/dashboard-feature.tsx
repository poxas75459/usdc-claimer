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
    "5LESgyQt3bEXh5RYcg2wQtVn9AAU6j1QTy2YLd5dqUjqLzKJz2RAoqWHG6mxZf4TeW3MbEiDfPZu4gim84hqhFWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cfLEvgB6NhThQxyodBXuAVLhVSofYx9CenBPrDJwh4mze3BQs9qknhuVBNaK6ZiBKXyKF3J3fHQ8JXDpf5TCB4Y",
  "key1": "3mEX6zSeN8Fo5GZ51y5n1ssqtbiyCuq9aLiAwRPmaNwVbcF9tELdoJqsQPjUgVsnUKLqqvaE2qQVpbK4E4roeDHw",
  "key2": "3WtzN5xkac9nYKMj3LhQtA7dEgcQoy1avqJh9AZD7Do4sp5j71wfJA9hpFpKrTDxQnsSWNhkjq8MyLrsTFsNecgV",
  "key3": "TWi385ZqBC2ABT7kYSWX6kJeNEh5JSqx2DGhMQ7VDEBC2dmVuc36cuC4RDCumFmUeDc2qk1NtxxfZv9dT5Hic3X",
  "key4": "5e8rUymvV9ZEGdpGfmHqMcHrvgYmQZgBmUJWbQAfCW6GmjpafbY51SJFUZTCMUjRKkKcxGvaBQnaY4siYK5LYNQ",
  "key5": "4x4z9ukDBVW3KV1wBkruUaPzGKovSipaFTeA8RU4V4C6TfmEXJWut9MPbqWkC6zry1zjkLc4VS8xK6GAPQTMdTJE",
  "key6": "6Z2D348c43gfFzPyw18bVS8Lzk6PfU5Kmh4Jum7nnRvgD5uXHcPpY2L1Tm4LN9PDybLZ7Y6mwcKPFTXSjvM8C3L",
  "key7": "2x3edLjDkndCScWKGPNEgL4Vznb8Ze5NKHdeaAVe1GzEjbzxmzprg1La8Tagfdm99FVqCL4fJ1q2vBqAhCeqy4Uy",
  "key8": "KY8vnX6UhY6zAL3yYdVWntPjKSPV7M2m7ToCigYMxNATr2vHxC6FUmEfYy6cJ4uyPrH3Lps4MMbQBA1BMqYd3KL",
  "key9": "3ggNs51naUkLEYTVCgWDQfkGHQ4JKzNp6MCWPuvJpCXpjnnAR54i7SK2E1mpJ82KTKD69L2kwA7fuxskpQtJQaYF",
  "key10": "4TFZCjDdNQsMGCSYeMPDMghFr7a3TrTzKUZkD5rz5uD5dCicyjxZ8184KS4qfZ42uDh71xugVpuojReKtZPVF4qV",
  "key11": "64paGSzXn8ikAJxFZmkXmDhRAgzU8ZJSTuWREDYSb4awGyjW119r2NnuH7ySiZaLkFL7EDqgW3RhMpyoPZnS4bb6",
  "key12": "3QzmnrEh6wZ7JweqUErFxv4EdkT3RHNpFnGDhkZzyo9DUH9PBtXvV5q2mXnSdyPtnHhKpsL51Bdtjd5gfZ88DrJq",
  "key13": "61E9aXEHcJ9ycvk4Pfuq671ryorAkZxc5kSvz5M8De95Kyj5xe8HRo4vvTT1SqQFDhdYMtZvvjbJuUHnu7JZhz3t",
  "key14": "2xtWMjmznBgbFTtzyrEGsb1HM3wR7eyiq3MRvNxLjuq1T8VesFh7Rp8TY2a8yHMGJe6nRMW3NwmhwmbU6RTVtQoS",
  "key15": "goK8khPn9dGshQiMxhJgJ9CScrS8UaG35S4fRJvDhjdDoZZLdkaAFPYUp1xFc1n4MTUvdmCrbSL49Ed8BAVMJx9",
  "key16": "4QprfcPwv7vcMK1ofWkG5r86TTe3Pn6p6YJ8qACEEuMx4aAXNxJszNuEGUrm4Exwt2QqiRrhbNHp4vGjPCMHZwwq",
  "key17": "3uFNCwUu4xTjKqEMF6kMJfA7eoQNXCaCdC5BSgKccnvaz1cHQwUDREEGmLWniFQWgfu7eXxVMt4YqFKATR7tNvoo",
  "key18": "3UDvP8J86nj6ERYfR3hA7dsEaq9wrDu5DnAuhLg6pgN9GgTovxmqbXevf1EM3yzVm9QEjrFcNMLVAnWVnRfp5jD5",
  "key19": "3KNGDpw8z1itJn1YYWt78VozYkaTvhMhNVc8FXYJ3sLTK3HoMSbev8K1VWCjyGXe7UyK4TgaLZL7TSqjtugnZ3fj",
  "key20": "57Fpahc6oTeEYCAsQ6dGXgZZ738ukHYgJFMzLuvL2ptcv3e99F432whd12tY453sawjk1zmijRzoxJJUqbirzE1j",
  "key21": "3xbDduUPpFHpwQb4fSnR5CmyAc8Js5fDEuAPnRwwJ9YPK5eb4eTNiY9UrVoVMWwr7yDjxfaXAxSWwGNGXFNzdQvE",
  "key22": "2PapnZrcjHNey2jPd6V5eqD1T6Xj4N7ftwCVBwApG4xTumNVU7bsVCce8rLENGM6A3hhP8TWjeRPj8UVF8WzB6Bc",
  "key23": "3C6kBE7UyFWcx5QKDjefXdeJpJp9mVwcdkMpjbEsT9RqLkTCuJ6hmfJ6sWRUp7aJwbNNKPYrBV4NBaBM1X5YzXU2",
  "key24": "aRwDKi6yxZz65cFFBNBuPAfFKmap69uMuFpdXoESsLRacf8VCJYB6ZExXq7ot8LPamDNrXE2fJ6u237QNBuiFDC",
  "key25": "bnQJafiPgxWCCoYQuPv6QQL9wDqsRWWwDQ5v2s1MuH5kyTvkM7A3LcVDfCRbSTYNSDzkfzkc7e1JhUmSmkhjBJY",
  "key26": "29z1oRFXLHcCxHBysYbeTSznf91iEh7QzTXSkcvNMyhXMEKmaeENxj9SBVqCywgD2eVDSxyVQWKZBoNAqCXgvpoQ",
  "key27": "3utwiaoQVmHJFbr2ZYTzbxWehppCkWVUfWkZsLKUFY1aaaeUSmnSXmvKZWN1QHFUkg2AJWWU6ciVcvtdejwxFLuu",
  "key28": "2NN98hTbgEj8tsLQzyRPWeSGDS5dBJWkR171yRShEG1kug1JV9fyjknTfrVZGr73qMqGPyGgkqD745dXu1hJCozV",
  "key29": "mxqfNJ9znvSEAmb8UuBW4poqshbqUegoXz84yNrDTWt9uHxiN378id65r1zQf9m9Sy7ZNz7iVkfFPaLmvpVw8Br",
  "key30": "4FKeyBm7orvJogjAytVFQMhntNvJpo1F5L9sEAaPamx2wn88WiHWERjob6uXBpvo6H6G9K27D7QMHtvvcq7fCATi",
  "key31": "57yKNTBoo5tZNc9x1hw5RnJMadsdUCwkUrMzKvVi1PqnePUbXgtZmMoQkQCyKE5LNYFs7gKsMMVas9YHKnhnh1n",
  "key32": "3rAaK2xNHsFFCKokzBHHKgh6jdg5QSGkzSU8wiaZkNKYHqX7AcpkRTPu8zcBnQX4u8UbUdedmhZ9EvtBc4kWH5WX",
  "key33": "47ocuxVTuuhx5ftpUA7nNwqPvSq7NDfMN2q3Tbc5d2fWb9WkVkfJVs44J9skmKbKoJxgidamEr2uGeYrbcB9W7MD",
  "key34": "9mrgFfSvBunRGimrpzvRcoyhJZveKmhZz1ZK4RYLoXDvvtHCaA9czgUSZDpo19ZS3RQQFaeCoU5RGe3LVpqgGPQ",
  "key35": "3JqcWaEcB8yq54RuAnxLPqaQFBGGcvYeUb59ztzRYgoW7TCPxqDqZzJUn44YWn2pRbrBog8JXcnhNarkXhe1Ct9q",
  "key36": "5uyGA1BBWB6sCs6mqhvxzhw2VZWFfmcvFNgpdqhHZEHaKaGpHn1UCdymXL2qnj6tFGvNQHPCLgonHTaaMk5Fuwqo",
  "key37": "3EQtouUSX6WpcdpeF2pX66gXuboVzzxTz7X3R9yH1uPiRgh53hKjwzP8CXbZXFQ846Z4H47LxBW1fr3d21d4STKR",
  "key38": "3vYd2r1L9C6JgeyMTW1HdAneLPYTmmLzix1jaxp1QHN2X5mQBZSgU1bm2fV3zbiHP4zNgHukpLSFrgDt1QEAxiK2",
  "key39": "3edNhMt6ioJn51fTpdVTj1QKb65Vcp6k6Dteu9qnp9y5ZTeR6uX6UiRmNQGN4Zh6hWLKh3Emy37nuLFFJn7z8tUb",
  "key40": "4TmoRZH9K3JbBPaKDLgWvpj77y4772h1P1roa96TRTe5toHD3B75Giz2ULWKySTAEfqoAi8CDU4v4FHL1PRZ6aC1",
  "key41": "5NqLcj5DbNaUmVs442DyYfUwrBZb78oA8mtwuvvm3Xwb76vaNHCQNuc7QGL1G7Z4csHjX6Skut9m3WXCW5bmriLp"
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
