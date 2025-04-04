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
    "2g2uboTP1x2vM9KknFRFLysTB6KPXBhARBKjTg8qDjt1L76uLiUk4WCRmK5gnLFFfnPLMoP1zdt4jWpk8kN4R2aU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caoGvEtJC7BJ3SaBFp79FSVPv3B2qWJ9jUaPXzLXtqqsSuMQhPhEZaiWYUXmcE9rLSFmn2NbFRXAXimyNpBSGSx",
  "key1": "3MaRPPQjLkJzx3RdTHCFRCawT2YgACCcdLzYiEgAvWu9Av9MeUDtaRMAersmZHT5cJuMS3rwRYPzdiaFAvKo2p2i",
  "key2": "2FJbhsNu8m11wV2MpCjW6GqL1ZubfNSFiPr6kQ7D85erT3vRdMk9sDf9GcPepeTB5zPzh3xKqjqfPqptodNEW5XQ",
  "key3": "2qQ8neM2QqSuWWQb3SgF42Q3BWMut6jsBQoepasvgsYs37xZ9k7uH7CmbdJShNDovU9dNHjE92QoPn4v5pwrKozk",
  "key4": "5fPBwY5VJ4TEobZFgSkzTsYVS6aN1Ys2JokmaXh29Hfy3UvBuc4HZkkHLdX2VGprbSa9vVsvQhQTRnNkzjs9AZnZ",
  "key5": "4RTXeks5t4y1ZrKTutHYoqu3LMdV7FmdvkMkS8UPcPbEMJfM97jaK7q7FX4RsKA9micWryfF28MBg7KmpS4583KA",
  "key6": "3zz7pUM8t7wtKLPwLCtR6rEf7RZnmzGukJPh5ssSnioLkwsrUMikp56bvv622zax1r3fxL2Shc3iXi2XVyTG2ebJ",
  "key7": "2ugHVbMFRJEGrtuYogJ6ohzpqH4VzjfZjs4gvVGGTBtn9uTsheaS29rqcwFXNXoVNTvDmEM9EB7JF9nniTdsuJFG",
  "key8": "2sVvwujAXPVab1TcuqjyukBNNAk55pLxbV3P3XpLXCHzLAowLk9WpWW4JWnCgH4j5meKeLie26C2PUA5GjVFphJE",
  "key9": "28FJ67PcvgkLptcFudEuUFNM4fGJt4N5k8GyS65Q9vQJNKjetY6vrKpc1R5dfJsbkTTA7xM3TKvk3FhEnXDySUXX",
  "key10": "apm2v7evKcQZ77i5RorSBQxPa9yUB3LAsJomztraAEtXmMKYfidxHUP85oSGoi5UtKqNtkRGdCRY91Leo36iEsT",
  "key11": "32xWx4Ng5sP3rAwktovLYRg2XusTm2iMJr3xAj781bLzPmc29E1YNwaYy897gQUtgzWzLextZh1rqsKTEQPkuCS",
  "key12": "2vkctk4Mpbdac6Ku1XA5yHhd5J3mfZCWRM5po7VNoebYc5krMGz38nCB66jt1aiPwqUrq8WoQ757rEhPeacoZfYC",
  "key13": "66SQAqss2DhdYDjrnJ7wuncr899YpC9AaGfRGTJasiGv9jHWC8Sn5XcHJjBYidyvU2zsv5ikjxCTRLQujx2kMY6H",
  "key14": "3LkaMB2gu8RouthhMVZ16HsMWwJHeUnwpYST8p4Xs1v4XEddTPGJMih8QrjLZvMCjWNKWkYCQWFY68yR55qYehtZ",
  "key15": "4qP59S2fh76aKMmf2BDt3pXhVBoW2tXvtBS3G12Xb3z6MMhGL1uGAXZqRyAzvzgvfwxux6XqY1pHQFcfz6NaofVY",
  "key16": "3jM1JwJ8aJtfwPM65zFBHtWvFB4wig7dhee7VWH2tZddcegibBUkNHdyVnd2reR9CECiBMn7fRF5AC1MRH7HZSjJ",
  "key17": "TYcLUq36K1WGDXNk3ScM2u3pyuQ6SZWkbZoEDaqLVJTeyRa7Frkw5swvKUEPT63RjBJPEnqMFEL1rQg3Xn6G7oF",
  "key18": "3X1Y4aYivXa1Mq9c6foFaipYVjkiJWXP8d7o6u6opMnkXcNAvw7t34d6FeX3DTS4vBPcDZXZtaBuqUddY59DXHUn",
  "key19": "39eGTh67ppvkNx7nUpx83X82okQc32jMNV2dukenq7r89HfwrK4cT1LByxS3DSUW3AixFa3DctQss3rm2Gp8mcFZ",
  "key20": "MrxQs9mMQhwsDtjhnumuHzjY8agwRBvXnYVqsAgeVcyiDckcTbUTTQc1GLFNzTmRAgMCTXNMrK4zTrAbdKKKQd5",
  "key21": "WrkzTBxVv7DKgbE4quSGQEkNczMdrGvrzhpbvWpsPQDbUE1PHACCp1hRy1UJNEcjWMujwDLw8NC5zTCRABoapZT",
  "key22": "BBNd47Fzt4S2fWZ3CbqWYgGcXAUU5fZQp9krVeVxeRJg8GS9ZjCzSYAriNUtB9ipQy8mg7W2KQiWyx9xc4pRZ3Y",
  "key23": "dZDqHLsH5fwUQnBqMddWKLfKPwAntpSdf2DiS6DZJmfURepSu1UUqZztM855QDofevwswp88XRbMfRbTnoVjqoW",
  "key24": "4YqdoEQSUAoc7R8TQz4CcwttqHF2DdPuyuj7EzBK2ziuvXohjoubPDKzLpeqQZNYpzHwQyFGqeFnAgEwKfiheHFE"
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
