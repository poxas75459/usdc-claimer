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
    "5pjXgd8UAYXpgZKthBvuxdfLcUcgpj8G7gNguQG6ggFKh9gkpxfffpWgUqdb7vijAZMafMdJLNUyrSzdAPtgoiws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LTZhLFyDs75rKpkADzJGuqXF6q1JP7SLGoFmVhusoGftoEFfvwZ2DMY6tWB5egFR4qfQmbcUrETHjjzgw3SsVpp",
  "key1": "2FV4YCMbbHczVkj2311f1xBnYjN16yKwQT8KfW14CjWWUwTEArCTKxmf3ozQyDS9got6htRQunSJbSN64oSHPCvR",
  "key2": "2sBVC2me77Ce4bWkgPRPNt6v3zwPvLQBze7EQF9qfo2HfRpqtyfGZ5AzxVcddfABZjvv8Uw95XmoQ5s2mYgy9xkY",
  "key3": "2jJiUphW7fYkwxiMNMnj1XFTKqxy8AGpreEM8Pzj9YXocN4nxMrE6LGA71MSGzy5dDYRhtUNih1FWJYmyqZ5dhWf",
  "key4": "4gyCVCSQgqnnZRaFp53KVcbQhLaNLYhhXDBXaCBwTYdovnDBGCrH5SEXDfimNvF9mc8k41sDyBjFkDCBc4bxzPEU",
  "key5": "YgUNpdXuxn2HMvk1jsE38WDkjx1jRHPnkAgMryxRytLqo3Y6CT4R8kmt1GQJ3kMMnEZxxR1NcDWwt96UtX33WNm",
  "key6": "52jVYC1jWRKtfE9sM5wLLGBsXmDc8xvw4otmTa9R3mEeThNBxEoN4ZYmbw4kKFfHX7WuQsHUFGUJLBS2opma2AEj",
  "key7": "4K8uTfsMLf9pnaK1GZEbKZMujbk1a4PTu38gwVPo783PWhY48FkT7WjcR3ptv4vkjgWcd3LnEN1zormqqh1syPZm",
  "key8": "5Zd85kCXFibu3jPHPu8YPFLELZtUj6vynkpZfKsfmwQ54Zidys41XhXWMohHxPFHPFqt2bGxxVmEu2KJC79swnVE",
  "key9": "64nWcW1eYZ48vYNzJJsHkhUtrxKD4p2FX4Bm9wSkUQ5919F5ygGSL1KJa2VAH6BrvQKi8BKaCEReWgMsdxTKZeUk",
  "key10": "5NmjfAYPHrhfD42YeEAhDZzkkh27Lfh2WmoVbuSBDgsgADqf9PeixumMZzdS5jXxnx9RqQHjDSPoyKqYa9FwRHFd",
  "key11": "36jvmXKugDf6PR1ANe98cADDuLbe7hFWNP8vu9A5GFFWaPCGK41mCLFaMhXdwyW9qinzmTBHBDzGJJ11fTnV1bEf",
  "key12": "39QWeP5yL1SCwEvZ3iY6TgGNybkvhGsz72k8dUoMGajmJJrKj8cyQMLHsUji2rbRNM3vRu4eFPZ6qj5uq5rJ7iQD",
  "key13": "u44rfzoqcEddrv7R15hedwkM6ojKdck1i9PK4pThgCYkPpgURtQoBdrhuAdYbRza3jdE7PB3n9dr9Z1Qu2paLcq",
  "key14": "5Ycw4iciSFBAyCaJjPc3bSTfYDeJRw34tTYVcqR8yKcSUPbgsKhfMeG2tzZmpadpW4enjkaLAY5GoZTKEyyk7KVt",
  "key15": "4jW1XwUB7PzomrAtTYPLFhVYNGJNHFLG7X9CVG9Xm5bt2GfR9NDVohUFoicj3wWwRk3YDrN7tCsh9Lr33pan7mod",
  "key16": "4CSJYtAsPieytUDhDwoWL1a9nBpd44D74nnTnQrLo4pZCsFiHceW9Cd82LkrQYkCJWKPXBH9DVLG4BSpALiXwks",
  "key17": "3QV5Cv9d1CRzEYsMXzQHytGZTh17MrAfd9pGWMGwain6ZwZjcbN8Xop9jWJdUfjpBTtrL9Tmifcwq64oSSi7UCKc",
  "key18": "28nC1T54hsVDmpy6LbXFGZW8bYpn5t3BxNVvHJJJZ5xo9WasssMD6M43JPqQYzU8H1DXKVsxBhHWAqYW6q2jhoYz",
  "key19": "2dzNNAhAbv6RJE31xM18gxALt9xQyN9wVXkLQ8EWnXFLdTpnwCCSGtreWQmP53skPCHvhSQ6m3VvG2mZZfArGj3i",
  "key20": "5QAW7Hr5sWkP6DCovz1qWwBm5MPYfrYrhQ5QsF2mpWK1ak2Forw6DbTyFiTW4U7zJznrcuVRif3EkkAiC5KeooHx",
  "key21": "4xjdkppepk3P8eG1cRBQXchqifDCwcJQJRrXVSbfc4S1iDmhBmceTNyWKb8zJVtwNdt1jwA4Ye8yrWHgeg9is9CZ",
  "key22": "2Ad8P5nPU7uuXDURicxzQgtLXt2zpRJwF5QMevqzuxCN2Wcgh9h7SHHeTLhKVeJNT9Q6NTZbW8smuGSdTtMy2yGA",
  "key23": "5qECZpqgmZ6iFvpWGj3kN5yirTdGzzZUPmr86urtWHfG4rS4Ejc8WiPFXFMYsye17HtZ1ngwWWB3kUMF42xEWZU1",
  "key24": "qLjLt4JuqqHcm54sZ5pDrLV3e6qTzdmKZnHPmHZdtT1tPz3taQuwkS3NrWfoidjuZm5cHB2aqsdstJL1Zm6AV8Y",
  "key25": "8jf5F25ajqg2fPzKFbWgGgaVZD5fCzoibJRJBoV7GdyPqCTzjLks6gEHviahewvVPg1Hb7Nddc3TCrpb8GodmFZ",
  "key26": "1fb48e173xnQxAfrpMHbRfSeh69zmyTF12CD6kjLRCbeqzUSzgrjyKMSQ4ttNNG3pZRpAqbvX8iPzQTyWzpSfck",
  "key27": "4ZuBqEZW3RuDohAXYNFEwKeFmnw5W9eBWEUdZzeYP2wNWgDeZpqJviJd2qwwbzX9PD6PZQZYoqqmpj9TWsgmjEFy",
  "key28": "3hdqawECJCdK2AzwCGQBNX6xwuPqqhYrtbGeXFqHndJU6kA8S8kdNPmRsvL3m86sSqcE2dKKCVjaeRk536fWFViH"
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
