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
    "4t25QCBdRVfK5eY7G7kNTVqSJjm8jUwbWTxBsbdpj8Z1nP83E2UQk7wpSGC4pGhCQC69LpYXD5fDnHarXvtXGLqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHnmiPzTzpGALVzFSWwajYBQFacSXnGCLsijN2KshsrTUsq8z6iDuDcekYewxVEhyrNPLsxeQXBmNZq913pR1js",
  "key1": "5wXPtNAVrGryuukJuvwiMjodozWpFHruMxPjsxNuqHV6zRqkP2z3zvzmTRVpcgXr61ve8jRuSpqGqGidTvFNRJDi",
  "key2": "5Fi3nEqMcg2Roj1cDZh6ok6RgTrj8gkdByybczUQmRnrW5BGam5sjyRVcnqoScvuqncrHvR4tLBEKq6rpU5a3yVE",
  "key3": "63BoxZvz9KjqSfvoHsxdqRPB9BtcktKZpsCNcyd2dUQ82gU6ueaa9kSEKSEq9wfpTCueacd8vCs5Evw3Zsx9TyQ2",
  "key4": "RS3zu9NLtGkVywefiHLHxrxjxvbAGDJJHe5Z27Pw6Yq3VFbHN9PLKxZHNfWbwm2LXhhWrqkTd4CQjs65xtLuZSE",
  "key5": "32exgYdJpS1AssnxsyFrqcv9mTgQrxjLgg8F6BC2qaiRCbsS5rrbmqC4Dag2SW8sYBFLEEiKz5yV2S53XABta4EF",
  "key6": "5LUj9mbdu7V7tVf6BxuTs19m4zSLT5BVMZCTVht7rQ4RG5tNPry1pcD7jMfh9KGqbsyLL7Afi3iRKpuXeLtQevP8",
  "key7": "5fZv6Gw5rRHZgUc4qQdVnQ9LXdoTZUM7iy4WLMWiUo5jxvBHUXxY2twtFLkEMjPC4RpcQKTrCHxK9K5ZqUR13m3S",
  "key8": "fHHToerGtbSnrVCz5LGk3cVb9Pc5SPW1n8h7N7ztTyzsv2EWvfQddn2TPFV44Na6HavB9xwntDUznHu4hFk5sds",
  "key9": "39RDkXRKnRHcRhnCizAA9qNNzVSKbk26x7xaYBmegwgwP1T7GEMGyxkvJyAzGGVwtJeHwES2ri7FiPVnrWRfkSnK",
  "key10": "4rrBd5HUwGZ9Ui1HJg6LYDSX2KvyZftKGN5FjQ6Ewe7M3xG9S8B6Br9vEgtxdJWgRKp5mKcrCJRhqr7DjcdpyMvM",
  "key11": "5h9bCRi2yNxde42dWDxe7rygtBAvX4pyCwbR2PQU4MEUNAzKFr3seFXBspdjTYnoTqeGDKvTYBFpx6x4tz9MrhVD",
  "key12": "UWUh8jMzPL3LvXqYGjpriLSbRTx9m2A5HmGLWQj2y8w1epJNa5y1tJeA3UruSuTG1iNMiQjBrrNATmCsby39tXA",
  "key13": "iUeHQhTjnFczo8F87FHMPDLpGiBhKchpG7yC5mbcww3Rhsg6CuZWjHeBVb1ZEA7i9RYZof9rRpwciQZbf5y8ovr",
  "key14": "43mT8RvTidvdoisqsDHndikUgkM9VFfdW3PKWQQXVGfoGZTHFpR4prAXEsGCEP5DjbWRmx7oWEx4eWK8LTKusfus",
  "key15": "2kisz9TicptyrBAvTQJSdgp8nTGa6Lx5V78nmiHXm3zU7ht542VPMg3qDU6WTotBtZLVKEYCXSKN9pKEcccFszT",
  "key16": "57mkoFuiWypvdBogh7PGVoU191wHQKDVazQDhCi8MQ4E5NGL4rE7P8hoLL7dWFhioqKr2XqQftrQ1FcYUZreYuz5",
  "key17": "3U9udgqS3WWvwGvDV2k1J3a3oseMnwAACA7Vi6d39oxg8Ro9Wo4TYw9BA8GMkG9pL9m4yJmMuKb6PsMSmTiat1RV",
  "key18": "2h7PxDG3BPMQt9jAxaYx6Pc2cU6jX9HHx3XkF9hVvEmxCLdS3rrXj6bCpq9oXAKqCk9rbrkjqhcoAJHK8vbT6Rcf",
  "key19": "3L3AQZVP9oUSyJCd5dzuNJiQBXFbS39uSPG18GiJYwQ9mNj6eyYq3A5gWP3VW8i9uNJnqFTf2VsJRk7CKc5izUXj",
  "key20": "2JWFd4mpz5N2aXi4y25R3t6wfpNKtcvSDtyViemHcuxtucq3F6XYCbqYZdkeJvvfpGh3vkMeXwGK2SeoNvjTwqjp",
  "key21": "NgZ5tzdcuLZXHctG274DLpcM9wdVapV5wBLbofShbyVseCu2ZasmXjQEqVpvYGumjUsUYwQNkeDqy15oABD6p6z",
  "key22": "iSezGTp1u8wjLY9n6BqeXKRD49tHw4b2JMXQsv9q89EzbPmJxC3LwhXwRYg4Yba9Z5mN7iZ9da6JRnp3bhiTH3N",
  "key23": "2XeZB6bSNrymG82rY5crizZcRJX1HJBqKaMb5vS48KG6fVDe7mCuRuusuu49x4kt85WAqQWitxRRrT7nG8BrurZM",
  "key24": "5vs66jmaXJzCVyFhA2usRtZmyDjifqgSMVBZMQEzookV1S1PX2KvoxSDHsh94MWonFXk4q2zo8kgSacyXSUiiR3x",
  "key25": "HcqVUGAFRbeDJz3MoqZ8oUzzHE6sDAgU8NF5bsxYBx2SsApPHNd9BjUJ3cXQpzPuEj6h9UcEKy5JmcAzTmZg9EP",
  "key26": "5UTnpmQW75JJ9Yye6xYyp2EhHxR6DPfiUvq22fTBfs6b61sS16mAXFFw2wjoiFU6uKQ85Y57UnDnmhrKDmwbATMA",
  "key27": "5J64sw8of6SBwQ6Srt2sMQnmLsf8QsTqf766thu7goMen2z6aMhX5XeQ348V8Js3PCBymvM3rUW6tSytkzb73eTt",
  "key28": "e31vWKjxRR4HW2oMF1V14THprMV8RNaZ3iuLQ5sugQSZpAY2g17sPfdRvZkSTUGeAysCF7QET1pT6Tpi9NNmouV",
  "key29": "5vJewrDAngh8meyKzqUa7RCA3Jdes5SxqUqkzUmQgokX8aTKGE5AwT3hsBzcUNRwS7b44rqnm3N8D57bbyfhWsw3",
  "key30": "5agyi9EPTrHhhSkMBf74WjGwan7i1wJWJR49Y3uC9BVssNUrd5czYz8HCJvS4T2Vp4vnpqRAAumkx7GxdkmcRKQS",
  "key31": "5KaxGDf8oZYHry88tw5D6EbNRrY6WojenEyDasMCoyYF6ygYxyPehWLZF3sDGsAFQpDfPiCoot9FySkyN6mDp2Jh",
  "key32": "3eNGFMUQNj7XQh17N3AC3JscKDwnXNFitkt71C3sMLLEECXgnu1qtNUUE2DtwiQ5YV6z4rT1jt5ZYytNaSx5bwAp"
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
