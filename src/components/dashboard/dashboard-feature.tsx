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
    "KR4yhzhFXyodR1oEzoBDBRFQZ4AsUWCnfpd2Ud52XHcEajRgzmyhcMQ9qN55uLcmTvFAsM8jcPBPWDUWYzWZGw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ij3f3fc7V2yQ4VuZqidgoGFAD7BVqpBnd8ZoP178ogb4PjmpX7eh3Xtk5nHmV5oGVB5atgoq546d7nx7WTGiYpS",
  "key1": "2trEYGAa2kqfL8pWBaua24WxXdhe6TLQWH1huGnRsMRZTARuoqzQcB6vQSCiLc9b9ZVzA4Pc4V2zAhFVXw2rgJJo",
  "key2": "2Wyonz6ANd828BHb9zggym5h4VykNqWTeQe6MNfLVhfRoXpn6NryfM5bsz4vktDPj9bLgJCcFKr9aycH3bFvgq5C",
  "key3": "42h1qHvSRTznrMCAzBSxaMA4ZswoWuNv4SvKyFZP8PSYKWYgmjq9j9zhraYkoLGTZUb9f7EjtAr1hSaN4dZ8LrT",
  "key4": "4ZyosLeNbeHwAgsCDNdd7xQtJRXCSZMGa9WnC7Zw8BM3AYzTkYAMhoh512Vnfm1oJnbA4EGTGeugzgMnG5LWpLQv",
  "key5": "3jAYmvjhNUYeGJzTgtheKKaZ9gc7xcEYfDP5ci8zdN6VrP1m7NxzZHkgDKe2YCYS3ij4GWr3qpauQNqRYipsMS9t",
  "key6": "5WtCqpJUm7ZnMt4PmttWEBdarSizfhWdwgRjnovde8YTPESveRRe8THzzSv3Z4Dymi8wKYBwwhX6QLqADo9x8ZVd",
  "key7": "5FxouzN5xBtvHZACb4rC12KWApUKSHuD5SYsVn4JHHoAxNT7ttQXEwaGTvz74vp4VHDEAVafsAn2Pxh3goKHbi17",
  "key8": "2ZJRQMzZQ5o1mcJ24aaTYF7Azp6gtkJvgQxf38MFNpJEQ16t4PssSrbHuE6c4tMwvZERAj3SujTBsgihpGG1XP6Z",
  "key9": "4NUQsQPmZzKeYbfKpwoNz7tNfz8wFUuCa6mq31FFSBrsVSkNnRaeCREc9sp7rSYFmKMt6YQqqdC1uzf3G2uz2xP3",
  "key10": "5nTXDYYqqQX3ij7xzXWwaTJGDDz5GbkJdT2rKd25iFVkogeY14nyyAXfQCfHYP17rdUtJPyTm4gxCadoQ1ATgbfD",
  "key11": "2FP6bxLDpoTLwn9yFqH5fvYfoV5cQP8zuVuL21FbyNN4hTNUnwhTsKg8NqRp2GBzK87AbvcbbbxzYJNiYth53MGY",
  "key12": "qADYiKijvxsv27XyeancePe5f7iuoiZYRyaocbguD2Crpt4vV5ctpUL1A7VNFtYebpwp3qhTphihAmis55eVAKr",
  "key13": "3CWx9fg3UZvzrKa4QaucyDEQuoDiiA8d87fs84crnq1oX2XsgSBqMrMXdMEfiU4vpc6jwBhUTjapRNrDycNaBpWJ",
  "key14": "2peq7WbAhrkUwcNeajyERtE9jnPmR8FWrfvui7CwE8g2f6Sc373re7SrR7cxFsPHurWUoihe26nvgkP2DNFnqa4U",
  "key15": "5rHjLRheEnDgUhBhmVbuJR77Uny3LJGtgdMFe3BpgQtTjJNLMCNQq83Pu8qWQ2x9FJQh3ejp3tqThamw2rndfSfE",
  "key16": "54TPiLbH4jH5XrKeLiZvMu1Cba3HDqAkktFHKWCH1APp1Mz4MQ6C9EfmMhMqqnixRdX7TxrtuH5NhWojR5koCmbb",
  "key17": "52fwhAHQJtCbRw6DSxSe8qB7sNB6RBA6x3QoTDVsLGvjTN1MjkDD9g9j7RSrmbwTKgrZ8w8AERkcruCygW3hWWv1",
  "key18": "3EMtztTXzmHYxQAfcHtzqrWySyXDjAMMzp8MtrgFycdosmpgJERf6J4x6J5F12X7NqHb9wRo5gsb1sHQ4gxYtXsR",
  "key19": "5Cg94N9SjF1NGCW4SrHPA4b2qm2JfBzADf9xAMUVnKHc5358wAnAZBn6VXUxHVAT4q2RKtWQKSQ2hd4QgpEDjuj8",
  "key20": "HZB9Vfv1R2xVoH8N2mVeA8Cun2dx9BK7PoKRKcd7o873qh46MsrCcJeS4oh7kZ15NUVoyRi31TN955An89dBc4j",
  "key21": "4cNbu9DrtvPzSwQxpGXt3hHpRmvgRBr2Eyk8mHNhjmTbuqE38RQwjzzhr5HuHaDXYnuEhgXpY8mUNWKM6knTS4Qp",
  "key22": "5KTyHA8ome2XUA1ChzHjGxffWLbyJCLbxcSd6fdWPTGF13KL3qZgL82N6Mj6aSy1Ko69S2gS7w4Atvv2hJMBpovF",
  "key23": "3ZpNTSB51AwuEuwrqgAiYevL3s2HpFjZ7frxCJFyN8Woob63YUwtBfFFA4BTpX8Q9c3or8tUrM5ekp3pyEKAxC3w",
  "key24": "NCbrXS9sEvdf1fP4VuKPS4n5nwirFuB2ZUnywp12JnjGmHwBRoEc1RNDYjxS5qB6F4bjZdifxF7nQTa2dmFf9yv",
  "key25": "3rRtes6iE4iHc4vforxYzs5wBGmMBTqDkdCKLnkiwUx2SH6iUAFrzgC6NyJTZwfsop9ww3nAocXYjkE7b66uFXWt"
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
