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
    "5YdZ2XCNd79gTXijd3C9ruySjAuzeqMBoUBUzmcUrjK5R5yArprPUaPKb97Dnn36xWGaYfArTEzWUa5iZckp6HES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zFp6fQxReq5KXtvj8DFHDstBtkp1QaN5wkvLXU53UVGfvS1b1quShFz8NVD4EgNZPmKKhtunb1fwq5zvMoFWr5z",
  "key1": "3owS7onMJcBqFvJ4vHNpr6LtRkkwUUwqGGqqtdtr4aaTqpGrQgFALeUEBKEfCfPLkCkWZQYBicrpwYhX5M6qCarw",
  "key2": "4opH5yXoknDETrWFMVyaUKHLqHgHT4frwJRS9kkCEp8cLu24uSbieKahSyNiqC7K2HHw3EsEWs6K8ZfMrUYkKRBH",
  "key3": "Hn8psGbFKi77hemiSvSJYTZhf5zM91nfHHs4LTcgor8nkwSTSSBX69kNueqAZUKGqs4MES6fHN3V7yAy4Pp3aGU",
  "key4": "4vCfUyot4zYxPcEZGY3a7T5kGY9cKkZWVSj3DNTxtfmDuLswcyZM5jB6AkwZ31e1ob3QrG7JaBvh9PZzijJ1HqRM",
  "key5": "2dLz9g8VUfHHCJadFE6rRJzqSCYPoddtQ8uXf6adg938qT8A3dDdP7CAEKZ4Vf8QYwFzF2khqrjK7VsfBi7xUDLv",
  "key6": "2o67gekMjro8CJG4HvYqEootcGfpgeJRKUatvuaQwVob9XQsQFcmQNEJUNEDqNK5Cv43QNF7kCUokVaCxeFqNpMR",
  "key7": "5q9WqE6FuyGANcqaHKEWWuUGTpYdD9D3Rsh9g4CoS8K6tdEd6oLVFbYAnTUE5h8bX9NwNsBpYsDAzcPqYDwGNw8t",
  "key8": "56DXuwi77sPG3AUXcHf4RBV9Bs4xqLiPj3BpPJXWgUaoU52QjAMKpVYzDzAxA1Lue62nxgGePMNrRDpRruz97LpL",
  "key9": "3bw1NDejTAJJf1QqC7arotkChmcWofeH41cDEghW15bQgnhN4Cbkd1DkpwgTrjgGWti89VpiBhUs7Q3TqRGF2cEY",
  "key10": "53fFecRHVGP2kBUVWMMkk5tgnANwytSakrdmuwnPHVgMRv57wEUa3Wbjb3jwTZKYmmnD1Jy165QXGKGGZAYkrCU2",
  "key11": "65Tx1Hwusj9pVzHxtcjWrYzyvX2n8HnvCC3vh9mXG8zFrytugKnv5dqmPyMBKqX6UG6mg2gBY6JTQLetXbnhZfXe",
  "key12": "jEtVzQ9DPPLdfGLhuxGQYenAKMnAG3L1xSG9kMB5QYoa7juXRxeWeJnoP18dKaESv6zkNJaFdnPKnNp2r8jzNQq",
  "key13": "3zwFJpgPWemCpKGeUBK686u6iaUKGt9hj5Vokb1u2fMbPaZ8rSNrSL2zjz3AAJ6TzPQFJKknBg57dwc5jQqKQ9ro",
  "key14": "2V82MisB8krNMWwK3dDHRZecrYmmiYMvkjezpV5q5h8cCJkveeHX4QkJZtbbp93q2uGT41CQ5tfpcafKJuPBfxup",
  "key15": "3qhF3oYjCx6u4b2x4eMSyNNXvPsC3YQgvdX1cDSeSR8BPgCb53LyCdNLMoXLDnyCSnfg3aRGDom1oTCL3xKnaBZZ",
  "key16": "47SjTJkVVcjhPNfd1KYC4xAxPAwZ6RXeK9P2UV3Z86ePNaByMP6imwXL1qThN6VJFxe3T4AJnQyGrLpCCZYokPE4",
  "key17": "5T22b2Evfa2BJYUXg5W13QpeHpz7jPFrZoRJ6F3vuUk4Uj2qUQqfZKny8Q9WwZiQ3fVxSRXsyZFrZS4ojbNBfXgJ",
  "key18": "3yoM9Ez6ggPdfpNngPkdceLVEdGShWrvciQAnjAjhn2sxDTMLKTkuwoyd8gkhBhEs5tJ5satQSPsJWX9Giq1b99p",
  "key19": "5wZsYsEcRLBGw41k4EaRZTTR3VNkvFBMsVTt71DqPXWCWNyfbFdJeuhpTVM7sUUh3HYa93Ytx3mVK7b8B2RKmoox",
  "key20": "3ZVLuUHzWsUCLx6ePVPyJ9UYp1vk2tPM9hnGnL36eYFUg3DyimJ37pqoANxopxYGFUkU9z9ikCrfqpZ8dp8TqdMT",
  "key21": "4tFtQ1pumfgJ9HFBtUzzeAaetdNNiTNzbVNCt4oWYS9e3SCNHWy2CADA1diffMKfKyDmSJUnRtSskdnVce82BGCD",
  "key22": "ccX4axYX28VSUumMAEW4EKF7Tj6pSfJN2wLayjEiEAUJTvS3s31vu74JbySJ99qqHNUv5idb5627aDyQoBEpWE3",
  "key23": "3wqjiu5pFLwBuxEacq3eKabCvKRQYfsxy7xLfhwomswPJdJHpS7DGJ3YPgKviVYbkyhEf4FjdryWAza6MZYtXDDQ",
  "key24": "2Dq5WFoyXCF7nsVTm9vswH1J3SRQcTAABETiUWW2qmvhhPu3fQdkCqDNwxPrWtzZTFPpPLEhT9TL23SBNCyjrsJt",
  "key25": "448BkoenrzND6gCdWMresjH4r2QzRRCHNehwooo9sMarHTrDwKk9nxQj7m4VUi5pQwEP1TPJHTMXFdUJBFdVQ9Qg",
  "key26": "4y3dcxZrGu1SoLuCeZKJbFJM7952idEpRE9SSAWqmvsS4BfX323dzqRG4J3bMVbYGyXrGFRVFoAre46eo9rPfXHu",
  "key27": "4b7d9AA9mKvYkjARseBYiEJW13TPCSS4mFv72bMez57YGZABdDqj4T5MU6Q74LcLUfcaY6DzbMYudq2fFmByYf48"
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
