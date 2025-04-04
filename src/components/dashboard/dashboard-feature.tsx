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
    "23Bu3FakUP4xHU8AomLm2yFpyppJCqEiADPLfJdfZgV6tNycawi697c7HM88i28jSCHoT5Az2JhoJxhDb7fc4CDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GRmX8QWDjBd2e8uNHAWPnRMvidHYF4tD7B7AHWvq9SUCwN2whtXSd4oyB1LYRVQ6vkkh9DQJD5gMZDDCBP6CGU",
  "key1": "4g66JKeTp86NdvUSijefFNJktyotSaMUehcNLASGQsonLrTqQcfe7gWBcipYUFc2BjpB8xFvwQ98fGyenfEkMPdh",
  "key2": "5d9i1c7266zCprCMpPk6sFYCmRSD6p7tAJZxzLZYDqPx9YQzyeJ5sLN7hMtBHsbvGfoDYbNHGTjWLtqag9jpKVz",
  "key3": "4em29V5HtBWDxzi8Z5qdMXngygbMhKejx16zMro1oX8HvYsQhPYh5DpbCyppfazrpqYFSH1XcbLBEpPyiWJeiLL1",
  "key4": "4LJVsEi4uiK6y4LoiWznjjfruMDsL4ZxLrPiKgErRYrStDFJipAZMibJq3PgGyxbR4AbizjWZFMbTMkBAiQHnmzK",
  "key5": "kyusixbrYKf4t2NCHU2zGnn8VoHtbT5Vtvup4QWxkTPEGarL1mmKpegiydGpYQAjo2oavVRmeUWcKJHoW16nMhZ",
  "key6": "fsnLJ3C9Uv3dBUx6LaSg8Kmmqy7i2jBeTFto2XxqjSTH15x7zoN5TPZXEfBUGt3Mm5SGgsSfwDx1Pmb5iMZoQpn",
  "key7": "3N2kracE8rJ7iBrWPYrhchzS5TVJg9BcgxWYvqqkgV2J3oT2sEJeHtyWLwFWYiwTFt5QUxYweZZQPK9eYgjt3B9f",
  "key8": "bau49DBfzeZe4H7DbYbYM4vRPkTx3YrdUUiPjGnGhD3td6pFfJcRzmRFC4QifHn169mSg2KigV4gJHcxbs71Lp9",
  "key9": "ddFr2f3yfydKfp9soojMS6iQw6SLWGLAANWjDyNLwy77HFaCv6ALN7d2HraJMQdXzk3q47naJUp3jwUszTwS1rK",
  "key10": "kvAxXP7Xmn7EqicNXcbjRhxns9QC77mREzXjGCNUey3Cj36WEjekwpWju7ruEWF6GnRzRwLaDXuJHtNCFryNV5T",
  "key11": "xKRNMvfX4LkfehsTzXMCw1KLnmfSew9wG5C9vbZsgtwpSE6RC8GHB5KAkJ7zuhNyJbuaZFKaAZ9kxfw8iwhXofb",
  "key12": "35M4ihBMgkqqcSuPgMVhBV5Dd83ujz28d8YhWLZ9uREi3URdgF6zNuKdVcBn1GTttF5VvNWDiN6ZFmLSnvvAM256",
  "key13": "5LqhX4oKjVBp9MAWA7kBBkNhfr7EP8ZjRAzLk91PXvCm3iggwEZwioCKmmJATrAraYvVuJt4qKvnv989jsTEaZuf",
  "key14": "3obdT7xMiWGXWg9SmCTqhQDKC6kWdk1GiJbzoSH2WCpqJBUefpPdvCLREmcRhkhFy5UqmZPuDdMRxS1MGTr23KpG",
  "key15": "oyrvDbSNP63i4rwiiRErz8vkH4xwydU3eXsUZorLPCntQ8tSoeLdQd466GZFMRNMf4jz8y4XdsZS1KxEgo529ga",
  "key16": "5k5fMqXMnVYmHVo4xBRFetjacVH6ENCZjCPdkihSP46irQfABwNWDoxTFNQNATefFKg32dMcqpVyAhAsN7Tsc4hA",
  "key17": "2RaBk2WoYGSr65cWNdSRm6HLh93wLZa5ZRXzdaMX4FqKcszkdQaguW1dYjUdcYskxKQoXR5oefvh1eUfMfzoJYaE",
  "key18": "42daGGx8ScpQ6mXbU1JVkTg7CHfXFwkTbD6mJfC7rJyrSLHdy5522ZfBU3N4zYdmwJYq6AkGaETwGzA82FNCtmSg",
  "key19": "2enGcr8zmQbCD3U1ZVmPGZB8K85TEK1JdRbVfy9rGBs3Ra5MpBKo77t2kiEgQeQHE2N88eCqXeQZ7kQQZ9gBZkfG",
  "key20": "2yr64xhHQHrzCQ6qC3L3c3rBTuv2mYpdAajNP3naDEX1dsNkV93pfemTepeoiSQoJkXUfVQ3XQYwCzM5Bg6wpRec",
  "key21": "3do6JD8MRBZRLsbqUcknM363fhjLUvpjGdg7Yg5GmpBVwPSUPwdHv4iHXMuw1dnkPjQKuekEBYnjm4EWeSAqR8Dq",
  "key22": "vWteRnz4f2ALZu2a1kHpr3FB3TVJE5noL4KfXBeAduSrbPmZsfREwkkLKZYX9hps9Jnb9fvKdWHFHzHVQ4vRYN6",
  "key23": "9hpknxiURUhJS9CqLPT7sUm2tavTvDACVn1R6B68gPUaJQjPQQPZHAKH1iUP8nBLzZyzHUbZAff7F4jDVAi8Zdf",
  "key24": "2cCyYEXFv8AqsDj4PgYQ13sKUuYg2sb158F8EcozRtjMNj4CohACViwbwnCmwpBtDR9nrFKyYikrV9hfdchB6RLp",
  "key25": "XM5sjJ8GQ5Mo8GgHMhQUuV4VrZLSiFR1yvSjzyt6MD1FPeeEvtjj2UD1KPvBwK1QjsYjkPdayn4MJ8s1Znb7Zwg",
  "key26": "2Q6RW5PERvnanUdaPWsfzMv1MWWzFGFArbaXyPutbKJ4QfWFNMXAF4P4euo5wjmzXdBzqWouFdzzfBaDL8kTzQY8"
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
