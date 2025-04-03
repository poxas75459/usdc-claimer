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
    "66ay64xciCPAgEWYAuDUpHCixzcxLQTXsUQ7UgjWdh45EZDpDicNAXV2JEA2iCd79pSt3Lp4xWiwX9DPwqcpf5Cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kXjNn9FSe6ouELF8Lb5wmNLffoEmXD1eAHArPhvmFmiaJWNMARe8VqhJsZWjwsvVX6shDMisU8o7WXYRaZdJ273",
  "key1": "4S7s2Mz2SfXZ9vjHNQTREFeEVbnQYL1hRH4AekjDq8C62scFwhYzMG1tzs3eCEeS1tQpyj7X9sXK6DNzigJKYMej",
  "key2": "jjxrYoUB2obDUrTJJpo4TFN3u6DJb6xtG7tgVvhZumD6r9eLzHPYq5cZ3cGL51Q5meBzCwYz2TgPqEWVKUHgU5T",
  "key3": "PAJtV5PZj5K5VKuBqTgYpVrg6PZnLjMnK7ZfeQYmXVjjNMNkU4Z9HpUHyPzje8p2QCXJG1esmAWTg4CLWs5Ftda",
  "key4": "CnvbVKGLVNAKmXHWgaMcdq9oVeEb9koiH9eNyovQgWvk6A8NkS7qDjbF1JtfBPpGT2JhLFrEfLgajkqgDMJZA2j",
  "key5": "3YgQibmGYCCsYoBbf92TrSSrKAy99kcobFHZq8yr7mLpcWxC3WKza29KqYz4ZrfAw5WW7vxs5v5NFrXoNonRycSU",
  "key6": "taJuE1cgNE9b4UrtVrQm41GMns73KzvRoomZ5srdu6THgAFk2qaG765QW16gT8BCkFPYkMZ1uBrcNdkM2k3oLio",
  "key7": "42r1MRxWBY1VAy9EUmHniK4CjGqYhhgo4R7ZrhNuWe5DL8FFUYEJLCMvUJdzPjarXzLvmTFDLUE3EGBFXfeCKWkw",
  "key8": "2xLW7Yh891Y8xt5YEx4ruyaYUhpxX5fnuKvoUxsyirhEr2viinYjx6xA7BwRh7o37LSWKosRZcAf9pSGfayo5uxZ",
  "key9": "2Hdn1GcWH2pZuktgavGbJrhiTt6PVWfa7MJJLXKi7soizxyRYkKgCMZqa33hB8YEGsPEGtC3BKi8TBJYJk4XSfbd",
  "key10": "3CSziPDHaPyfRmbEENJoJ1ho9TaUCXsMqbZQbjm8R7QNKbmTNX3F85vQEmzEyDHCux8eY8vWCAyGZEWhHaMeVXvd",
  "key11": "5Vj1iCCL8bQ6PXcLtD9koaXqGjYRdnTpoXBXqqBQ2M4Y5Jr7YBMzyyZn3jQksiuNtPdjW9AoZ1ESSW7aA4y7Vniw",
  "key12": "5gTh45o3YLrQn3g5aT5qZgwE3rrxAEM1fsqPoJioDyANdHf6indWTxUJXu7hzafqyMpZNvysN7n9FzPGPfXDEB4A",
  "key13": "4UV8Hh1RbvrCPGpM99XXb6xqXcAUBxcTQcZgWMAFG41VszLkqEg9xdimK79o8L8pJXgYutUuHwffPmJvZKz9exus",
  "key14": "26hormVACYHCetLqcVy7Zk5kcryB5ZjJvokvFpQnT3U3j4W5UZTe8uVzUSBGkN1ecVS7KabXhAwLao14mRbS3hg1",
  "key15": "3hd9djp2To8Gy1fKc9o2Qnw1kbgfRhkGkqRX3QmcWjiY35WfAMpk8KeyxAxR7fLqzprqAwru274xBQR5aDcBNTqU",
  "key16": "2yK9t3Dv6K2Q3mEGoporebZt6ADRQzPJHpLzcsC8hAbXmHS6ZAfqAUqhgM6FMEbVx57486GF7Hg5PiMEcv2BsCvL",
  "key17": "4YkoABPGXu4NHnZMKuxVYThJbo4btye1DnEroY8NqGzXh5oQhMW4YkWCtGKSwqBYh3c5gqrRqpwwqMfoD9m6fBnd",
  "key18": "41TEDDf5riTDM2VrL9F4roVpjh4CW3CdbpKnYvjjJeuxqEuYnn4Wie3TMLfTuRsNFPbEhS7bL2s8g1KjwAuFFnHP",
  "key19": "2rhWv1NAUY6aBhAkCK15DX1J4743coKW5a3uLBocgK7FF1Lv6K2K58TBj5nePPGq6xMeo4yuRa1uFtSPNDPaAQAU",
  "key20": "3hLYKQ6gHYKQbKbgrJfoRNZ1UCW98dWXbWbG8sfFLrsw85d6Y3pvaP7NNL1sEP6WrqPdQXJ7B2rkXxJYydLbCDeA",
  "key21": "3DYderCBFPBDkYb1hRxSCbXtwr1hUQ7x1ZAZGF2dQuTSygojGWDnEeFKXtzNxBaa7sinA5bJdT57umNarWgtdZa3",
  "key22": "4Pk3MP7rRczKtc7S3p5Csze4tPePNPKugLcaic6kpwbh16UjzC9FoC5N5ok9QKJDs7ZExcsezuLLzmsaEaf95Sns",
  "key23": "27AxAHhvw81nHc1BkrJQCrhmDKfR7k7DzHwbS4mMQXNnAdW7WRZFe1Chd2HPtP5qCdubPTR4DqasBUF7puzX1A5W",
  "key24": "2D8GC5zvFkw4HJcB4JemvdGqDD5gUjy2ZHmiWc8sN2oX3SyqwWNY8TNi4AnmfavWmfG8KMuoKGPNP3h58cqWgi23",
  "key25": "3wQNtBVNf9atEyFX9VUe9dXbsARHST1KZsxhAnXxMqrfmbyq8GayozSH7nmJW1EdVtAy5Ub86bLkAofv5wziLN3i",
  "key26": "3ASpWpWBGUTYxaJTThAGRZJdeyNbTjX7ik9dZEp4pB3ixAhj5uVxfkBq3Aqc7k1XDsRX5RXYRjGiEcC4Kpmnbvz1",
  "key27": "5zp7LhT1ZHiaQfHeKypfa6KDVh1ZkEJVVDqiaAE4mZWmPxcD3LtzQiHFiQELmpHeBxMSqL3F89aqZ4sLqxxN4rAA",
  "key28": "2Nr7QJ8BFvYRH1mBkFFbro2xnXcvgrWxPNUg6fN8LiQMnSkHRxQwfMJWXsiGcnqKqxAiPzRPBtssibyub5XHtbnt",
  "key29": "x3cTkFAngG1qokHCryEQaA8QMzNnFMDyPqdtPyLHy3tskwSEJPPSSqX4WZbJCEeBjjHkLFBB7bUsQ6wTccGqZ6K",
  "key30": "3hEw59jJJn3JvAY2z7eoSRFMLdRU1xjf1RqeHBz2QSq3GCqiV3nsP7pXESAEDuJQUX26pziM5i5zEuprwF3DBq5J",
  "key31": "pczfKrNmU51TX8ESgfYrTgYrVYx8CHEqnTBMCeKMJA6CLntMKPkCQXVRspfh18cytShsUB7fgdsMseFn7cDThar"
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
