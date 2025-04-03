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
    "2BqQyzLqFwB6zYsZhvFqR7zNEK8KVQum5hbxjhgzRPZxXNWeiEU41uutPmSapWt22sPDymfhHySwpie7Jij7QrXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXkQtypEytFLg6kHJfvBkvoymwydpzkzVU2RYWpxZQqwP9KDrpHs3eaeyyCE2DjUZ6iG4G117W9wq3u6u563crh",
  "key1": "5n8w5RWaiUASoY6cWnnpha2fSoLwft7AuEYAbxYphq6p1sLzDH42VkkPdc2MvV6mqFRVCx663BHBkrjhqHPF2YtL",
  "key2": "6jE7YbJJZgTozM1jEz7XpQyvLJN6o1dbUX2g1d1J2NMZX7ApA1DJaxvyowRjEecxQvSjt8qCGuKvKBxKhZ6zTKb",
  "key3": "3eet9Zt9s7KRigUz4KDCB7PweAR988h6riF7kVQPscsh9oiddiZtsARw6iRMbznM3FUhijYCWJMXYBgWS3EVyyjn",
  "key4": "26CkXDvePZpt9WHDff8Bq7JQPfXMxg3rT9CkTBW5ZsczizS2UxC5SUpYEgaRmXr9dqbSpyQUNeZecgk6kBwwDWqx",
  "key5": "b1iLPtfLUVKJorprfXoFj8PfCc6DjFS7zjsaqKDP6qKkUyXZqrMmmDv5qnmbFRrqPYgLHuSWH2PRcg2W8WH2qwv",
  "key6": "3aeeMonTsRmz176BJXCQFazEGQ2mefQYtjAP5Ghfoo7jx9X6bpCLn6m36prCo4ZaanEqam2fw2nRsndoYYuomoK1",
  "key7": "58RV4cVTwDTHiXfkSijoDRtzYrtVSnBryBmrDEKeaTzFT1VajqkjZ4aEYWHo8J92MkiqT1YG2MtvHJLPZwrvyGtQ",
  "key8": "2zZqQH1wtEkARS4GY3RZAEg8xb6oj3HhB5KbCLH9ST3Sgs8iurk5vMAPsh7hyrK2qepmhxYR8Ltq8X52vLouoqCv",
  "key9": "55mfoBjc4fttLbqPQNhPkx99atAkRd2cDXN6qWxsRHE2fY4z85ubgeAPZCaP3N5zuAZMvoervzHeASthx5a32pUo",
  "key10": "3LnK5bC1noACqJmmDqFkn5PKqfH7yqnTUqiPftHV9N3oXH9zQ5FK5cfpTECoYCDQoXZC7mo8q2bH6JLSu34eMrYn",
  "key11": "2kTCE7g9RddiLEYm3CsFPUmuAtZArCFbz9xHccbtcpRUJ43oa9KRVdTJhtXFPocEXvhzVqTefF4h5HBqMo7jpMUG",
  "key12": "2VmyrTKP8jkq1TdwEtLUgNb21EAyUxbMfAz6pBJbd11BmrQGGqzsi9xJiCQSPCDiN2w3ZteQepCc6AxWtgT4y4yH",
  "key13": "5FWoBdmX6NuGNTFCTjdfAf1g2SzxBeVDx9eQFXipjGD7kYP9sjW58vRtTuuBfJSTrGs6Wb6s4mWf71GeBDUojEpU",
  "key14": "5npUV1geMq7P3x1uCPzWUiEPysm1ETJMNd2Vfjh5uqGaRjsvNcDXJXu6P4psuEbGCRQgXGeYzyzRThByQ6QgKD23",
  "key15": "3wbL7vkBxLxkmhGVscRY7zoJyLLYBaVefTC6JyUk4kjpT42eYZfmnr8c7x8qKiEY6DKeoZvU2HqvGiaJUFywuygV",
  "key16": "2j3QWeFyoC7ypp3NW5LAuwRP6q8ToNmM4LdA9KG571cKBJK7UVNZzi8ooTRjUDxFZg9rYfHwuDg5iiPBD8A2qi9h",
  "key17": "3vzFKqurdb6Q5TfJQiumFx8j8FKEMkHdbZXCwepLrz7AmM8XE8rfKUyuo9689tbBsym3kCWFu3s6X3c5KzVwksSD",
  "key18": "3YkR39LSCtVozKPBZvg5LZSecQVL8JGEhPuFBsastmnBPrbg7KTryf9ju54rMUZUHtdAXEwLvJJPuXFdHSwV5Y5b",
  "key19": "5m8MaEAZeu5sAqAQVeZZZRUdsNZH4QN2FNLXiyAoLyXzcR6TQ1kj2JHFVJtvGa2JX9V3AckoV6poTadfX3dQKpWp",
  "key20": "5FwRUpcMVNVkKNJp994RmwtLWvM3eACMKknLFJZZ5Ci3qoMhoN282BG6dY2d9J5hYVWcmDircr6Y38At27EZNyB5",
  "key21": "3Jmy4hmcsKU6MYTppR2h3YXWudPCADtmyhcZgHHez77PgUTPGKehw1N4c2SPVLxz1xDH7gPthL98T9tqVaQzTN83",
  "key22": "5CgeGYNWf8EJ6E7kieP1Zb8RfpdDBRAS5QPh7u3hP611Du1YVhebjp3p26yvBdYXVhACFUdXbc7JUVFiqMiy676j",
  "key23": "47QMmNtrL8CXw8itEyRJ9FSorNFYMznKokzrtsvzfheq3ktAWyEE58HwXSwniDhmTAtjVLfn6d2Pg6gLFSQs4fF6",
  "key24": "2JwGH5b9LRLfiG6TT3Szw5Bg9Dqe7KsSGkHVnBBQ9M2JgoSyVXjYf4oGDKMJCxMmcoxfYLYdzLnQvMdyFgV2YQKz",
  "key25": "YhCGg7aT7cA3pBBRFS51aSgNzrWTDXPrgq4LR7dD8EwykJm4TYnWTCebAgJhXtb9cP5qCLcEjzy93Ya9XvnBxDf",
  "key26": "5jhaJJnv9upbJUxPMnQCYDD1rmK7vCPMqSxLAvfjjcT7956S9YSJWoLrbh8MX3egqUYHrNXdAhKga578mUfrwRmv",
  "key27": "Gm3pZBBtZMfiTJ7SGCX7HF3GniqWzJ71N7pvbnNWqkquJZgRmR3ihQaBCUcCcADWstLWdyh1YLqRD51NGbvEA13",
  "key28": "2WMmfbJtj3bsHZ2kiuiiSQnzYtbXwMH1rLu24UpLNWNxWLgzNkQrRLouLA7TtMiRXzRPxVkHeBS7LheXNyRXhcwp",
  "key29": "3ph4xsSyj7BAJGuXfGc24S4TuHiiidosxWEZw1ah4z3vv4RGHs9TzgZd8tmNQxRbdhEbtk1Zx24ZJCp4W8wHt2Bp",
  "key30": "AJC6ETE584UN2QjPyn7eTxurrseTabp19kKkyKE4E59XSMsymELt3DFNSHgPy9kz4tUFySayHBTEq4wNQa7885T",
  "key31": "5EtYwxdGrMKFNrY1GUS8D7Ftu9tYtGyQ5aVFD8EboweDf6wrnEgFwHWNS9cz2fy1FZBPvcuCymTGKhHzt2qqMeC",
  "key32": "3oSyGcQhcDira7Br4rtFum7a3Z2ACcMbLeVK5zvVq8urazUwyJJCUg9tGGGbbuBYY9bs9novoknPH1wjCuMoNXYZ",
  "key33": "4VuUXfmU8VRLLKjYvgJ6sLUgMmcBStY9idqotSAJk3h1WrQoqjKGr5VEUMyNXQja4xbMvM3MUAvfbR8eSMa7uKQ1",
  "key34": "4VjfvaQ68RBJCo9bSqUhjji2sRmCEwzebiyuRM816Dh6rTwp3ybGR8gdWRpXy5oS4newsoyWFjoGPEo52e3ZnBr9",
  "key35": "4VQMoGmXsyfkqqojhvtCLK1t9NwCTDkA3j2oje7AwJTePjprB3Wvg2JMjk2TztsEKG92N9RtroKqpdapo7vYoQwF",
  "key36": "2sjpEAxmnsBuXFAA2aEUAmXAZ8WfiXdFnv9Y4iEGTs2fX2dPWyCzszdfiWzCaercUihiYQDtQui36ivis5zxHVgY",
  "key37": "3s5nLLpVJArMFKpmH62Q77BxB1YQQ8A4jX4R6mxXeKpZyiPrLi5C5BhVAfD8N7KQsH61xrN5XmFuo5YixpWPHUvU"
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
