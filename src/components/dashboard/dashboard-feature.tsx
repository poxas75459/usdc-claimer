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
    "2TzLBG9e32bSxhuA3kwyFYTyYq1cPrVz2SHGv9KXHPFCx9TcG1hy7E2k8rvuuv8uhrbmdx3dvYagzVJx977SKzT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TKRLCXXrM39YTmx6kDm7gyZrpKh1xTVZ8UVCdpeExvr1EbX1YmDp6yn4aoqriFRjaXWBbrV8ZhvNxWRHJX34MSN",
  "key1": "5XE87yPhvbyDBM9jL73ZKcqmgXSDogffoM32FHJXwxscGgdoimnXrF9sSDMEoKsvDQZNfcGKiraXvwuEEemaDF5g",
  "key2": "4nwJQ3YNTJA3HkhuAoisbgXWAL6YXuhRfu6Jokg12SPUXBX26rut64gcDd7Ka1nEVDBj7GgJY5SsnwnZSUMhUVEY",
  "key3": "4Y3DwBxPjg2urZ8QJueNJvgytQWpJBcBxpBQQSZoDJRC81RWMjtiwxri9hncnutaQeznmjzWkSfJE6qPGCqHXAJ7",
  "key4": "3fr4XQf3mLXEWR2udbszgDomoU7pyu1at2FFyAPhV6yiZtsnUE2gwoCzCkzYDor9V9Act5kM3CKEmaMsU4TcBKTi",
  "key5": "46BAKZKGnPwR8B8JC3owe979oH2pQ5Rt8d6yLioXRY3VJDr5wyPdE34TYLbkKL4oHHF4FdSvmJfv6BSw7w9URsPX",
  "key6": "2RGVQ3Wc656UHmKYJj2MU29oMC9AEiXJjsjaLN6W4Xe9wgDDP17SMqaB381JMbTdXgBF1u9kb68JRMjEG91hif6h",
  "key7": "4X3WvbSRW6jVLtLrExnEEnv3goKy3d2n8mbm2MQn4LoLLLSbEsH2c4ACajuHSBsJNYJiPFSCNxMHfTtGMcW1vTHV",
  "key8": "qEhtrH4PGiLcNLRmmSffyqiramfzF1c7uQXFHYgxeB1iKs3pcPcZQJC1m9AWSQXdKNUe2yXWaJDTWTsrjaoumKU",
  "key9": "2gMeDJT7Jc1JejtpRXzBttmGrosPETfFSgESLayYTyXyrKehxxYJoENjDLFX9wtye1cTTv4xzWcTEdTeV8JTgTBb",
  "key10": "5DmvS4edpzJs5ifGn9vjsuhS2EQnbkVdysjexA5tU9jhA2QJCzd3vAZh3nNwnRzUpGGLkkF7Mef6bBcYGXbAZU5D",
  "key11": "5g5NNMnkyogyp1PpL8ZyjKyMuALCEAL9y3DDAcQJWhJdU1gxmuorFHRVQbVYoxnEJnzC8UrJFDz1h1N8fXsXbfJb",
  "key12": "5TEAQ79Bi98EMLGMznW8GcnYfP35gYUVWuxQpy5rmupeWC6rPdzrvWkZHHN6AjEkQguZ4MyjYLnqAJ3MsgADK4cx",
  "key13": "5Yg4G2KaWBUBJaDCtq8cmvNbcdyTA4hzDV9gdKV9JGuHTUFQ6jDC1ux82e9dsbFBpT9vAyGBLc1P5p9X4AE8hf8R",
  "key14": "SuTV1gxWkHg9krnAkTYdZ5sCW7oKPVeM7Yujgtbm1YCioYKmad6ErQ28gwZe1tf7AKAMbu7mNEBbPuCm1gfaVYV",
  "key15": "5A3G8hHVNTnoAzCo7j5mMrCViHma2yM8Uxd5UNLTtizoRR9EJXXGSu1EaFxB5jStwdy11eUjh6apDAyCzYdjuDvb",
  "key16": "Xor1wW81fkSEQiLggsMGLVdAYJ89abD4HEhSqbA4mBak4SgCek9AmphWKAtRymAW9aL8qvW9RSGNJFG8etjHtHc",
  "key17": "dwMDTvowSnsikAVzzkmZfq25rMbq4yT22hmGnRqxirQiJLLiEeFMHQgYcFRn36fBK3uHLJ49t5hoL76m1VK3qJx",
  "key18": "4DFj84x2qkKd4S3Mkk331HZqJGqJbWhQr9uW9M62QCEUT3x3j8fkHr8fbbbs6R3NJaZCeQZEk2rrZgZVnK8ryn5x",
  "key19": "5v5SgSv32X9K5CzML32YXF3RRXyEmmVFAzX3Rbhh3YJ6ySzVLPHcz7kRi9vhar4Ye7JzG1ZUGTHsjiA51ufAnQB3",
  "key20": "5YjbL4CjQGZfYKtwUg2SfiJE3P5ngsgsTGtHnCmutREVpV6wNBaZmMuPxY24ZfpSj2ajds9wwf7q4ZtaupbMxK3M",
  "key21": "4DnLWXdu9PVyPXyPo4h5ChibCRBLyqxKeD9yhivKCBPvEKCTyr95KVDCsnrZUPiLoJMiCv2HWQPPY8eXXLAiwbWN",
  "key22": "5dgY6QgaqFmbuMDjLkUMXzmMtNejgBfpMEeUPYPPz9jgHAk7GTpUXJHazGCR5JsabQbxiCDg8ppsuiWuiDNhugwe",
  "key23": "4Et6JSKkU3ktdTp1tTtCcKAUKqSDdxESvjXyGKsHKuZtbLAisj2AgaDrNDCA6a3Ni47pFqTUug2SFHoP7XFEe1De",
  "key24": "4NJPBVAX58sVyomT6p1ZjocHDJZze4DbWrCotoGM3k2diQ6Bh8ZH64wxeQMAbDRNNPZieCkcEYeyzyRAM3KrZSYE"
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
