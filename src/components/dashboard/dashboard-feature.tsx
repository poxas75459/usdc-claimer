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
    "SjsaZRT5qSAx54qM5GEvJrF8Wo4huQLmGgwNTcRFUiM5kRDfNZaQXcpjw5fJMMz5pedQzYTXyBRc1JPej97dqs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "584keG5suNZVdGSnb37emBmmGoextNDP3CRh57xzAXoXn2FeHv144v3w8w4qh6wZwrxJgCNBNMbCFsEXhmVgBua9",
  "key1": "AxDq35t3pHRuXPG3jyEwNnpJbK6DctK8CVdixZoxnbE8hmKjWpw5wE5o7bavuH6Nit13QdbZXHNaBgFzxnuNVAx",
  "key2": "3L26ppopo94KL6tEJPqSqjqV2Ttp9PSLGfxKxqvo1M6Mw4irCTTxWULRwzLNkSGHxv9Cv2YHUvzn4dtCuY6R98rP",
  "key3": "467iKdWmoKyoBiqrX8ffWvASKXyGY69tiPgqafcDbMtBw8dK2d2ZmWKWewu1tSzWmBtDMuvKkJGFo5VyaTkpvjJw",
  "key4": "4bpiPobGCKJhV3xnQJ7aUN6ZGn6QyJv5CDt5a1qQUutBdmuvDAhiSajD55voYqeA4V7vA4a8aTr63XrXsiHLb4k4",
  "key5": "3uqT1o5DSSKpRy7nnATppZ8VemJTNYqF1EFqmsUc2NZwkQLyLZRbNEh8Du9tWofatGbUCieL39mgN6wmWwdJ5wD9",
  "key6": "CkyUeV6oD9gonNCDDjST4XrooEMMfD34FkmCcDWd454iESj2zoURvR2wkbVN9kneQMGEugREk5E5xTRsmoT6VTh",
  "key7": "2sX7T4umaNDKeURnBeenFYHfit9qDqFzuiHFADqdGHRsjo8DDyrWBDRgMkKnAVqyaf2QzGZLTYgFo334Wa5nvhnu",
  "key8": "2Ueu2eEfAWDRDMNSGy4HXDSj53pLn9JFQVQB1AUx13ArVAHYQBna7H5pMzRQ5SKMPnMENVXYrVr5noozPExjTYpu",
  "key9": "4rSbptsGUpUmKL6VFuhghEmaBFUDBQFKoTu79rqYhamb2cYaw85HEZGAbLUS6EP1ihASwL8pCbz1aVM2cS6L5uiy",
  "key10": "X3sHP2RWTMqxt3GcdKJW11KCHX9mmSVprkpnBF1UoDkm2fbRvR7x6J7cBiqLa8Aosr7yWcPoiEUK9r9j4ixkrjm",
  "key11": "5nSjAbjcUJ5mw9UDPWtzoUZihfvaUjbfygdetu5czgj8BE8T5bLRcpX62RwnhA8XMJzyaCBLA3vyK9CdUkAhYdb2",
  "key12": "53GqvDZK8bxmP7KLs2MErKjRMpSnWpEUApwtWBnxQXsw4Hfrpx7FS2ywkWCm8pTEWMbvx9gaiXTMbX46527bSBu6",
  "key13": "4TaT8SCPZ9emUSzHWJwjsHvqAk8U4XPUYF9S4RKaayyBtfsTq4XbT9XZMGG11Umuv86jBpsXkTrYWyZR5yBWdnL4",
  "key14": "358dojWC4wpQR35f8Brh4SLjjzBBfPypYyG4cP1mV3yuxSzW9aYrHH1dG8KnxCqoMSkfj5qfXAgFE8neDV5Mxfrt",
  "key15": "47ofken2QK1fAQkWNPrYfXDghd1VY9J1trRpgbmnWtZRZM8S22rBQwdYm7EaLt9Jh9iBdmWUVVwpBMnjmiqjw3Xa",
  "key16": "3mCyCWckZ2pyNeZ3Eof7jCk1f7poimzjiJ2U8n5UhphdTKQmTDNDGLpLfxKTuh6qnq7jZtAwQTjdGM2ZKXfLH869",
  "key17": "5bFWaGcXYcJSVKRVdrdcWuXtYuSm8Gftm5J7Y1cmZxRCepH4fYwAbbRnL4weRb9CA4fCw3Pc4S2PMpkRnawX8M5k",
  "key18": "VyBzHTjaDpohWnVSDmEnwpqZ6EesH2nrbMVqFwuyZWiJ5tqhBSfVYY76aVxumUi5cdCtiBYfbwNYxAPQ36LJJd6",
  "key19": "3ihxCgGCxmAFb4dFZJcx2QSHraXGJtY6UavxPvESF7aUc6Hdv6STmpWPhMLZFUXuj65YsyqswAZiuWecVQDKevPm",
  "key20": "43HduBSxVst13ZVbLyCvP6szK4dtpy3zWtq6dEDJmd1TMKMu5F3N7y3q6twcArFyD5fYFQMQw6cB8VdLnUeesHwR",
  "key21": "5eaDZ3RoVS3LZhMnvdgEgeBYSyz2aWoKqBjdQALZc715i2soAZRndWeDckP8VNsdfMoMAFv7s9r1iUUeUnoerS4p",
  "key22": "2KjajJZxyqnfgnegSbykDtPFD9WfZuD5BjfNSybohHmjUaTrMxDKNiMiCS73FvVpsdxPe7wpwqDXW4B8tH3NTTp1",
  "key23": "brvHUdeU8eBwi833xAPG5LkynJ8FJgdDqSZJFxp2J9BSJdnAtKFeCZgnKXWeaRHhsjPSJcwN9vRNrkJ8kXsVwwS",
  "key24": "5LqM882apEqtyveMarmwdGQEHZwyu1FQvjVzgexvsYvd4VWBozGUpZibpDaiXkU3QC9MqjbFcw47dAKt6jogCFP7",
  "key25": "4UTctXv4F8sjg1zsztFoo264yn5cL4onvtG7EjXygBocdnjbwXqdoM6Qdziy2s2FjqQZkbmFrpsTyya4BS68vhiR",
  "key26": "54h2xbgnWVQLrBNumXjKvxdoDvxx5bbxPsEL73w8WLVr3R21rm92Vwi1UFFsp6a1ASamYekLNvkYb6xbPBt8UAab",
  "key27": "2txH6euH7rnDknESRk1hRFMzNaw55dxafLtA81mMkm4qNkLzp3qfEqurV18Tx2ACHXkABc5SwK7Fehg3Hjq5vnwW",
  "key28": "b9VxM9mdb1bttzqSXNg8n6dsCTK1VEHX5cVa2dhRswUJLLAWUFQePuhSCXQZxRdYyhqRocnrYAJkWzqLLamTxS5",
  "key29": "45vnca7QqDW5TSeDh3nStv1wbGS8iGngK4QihAjNApAhbqnP5rPFtV3aq6axHJtr71pH8GxgiyVGwsgEyM5XunXA",
  "key30": "MvYkefSyDeZXLG32JkUkyGpRxoqMZT2WHCiWQgnad5FgVx1uXmxqKmNU3VDjh8aXhH1TpadHfXaL48Q9mFDLvQE",
  "key31": "3GHyGMQeouZX7TgqZdTm841ZgAW9rkUdxeGkcxzMGJhC9FPQKf1w9VeGSJZASRKUX8dsKcospnRMNDs6DAgD4CBf"
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
