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
    "4h9LDnmGjm2o1g2zWR8YDRAnDm9XdgAnRQMrpBmKLKRRLP8uWKMjjredDPdUhZkwBAHsmktajxt2c2YckzjFKkDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6dkJauagYahLtwUUaBZD13wMYHQmuxmABakGsUJ8PnJk74UDgPNANzBY5cQtEUjzg6YKakZnuMkqEriakvtkx3",
  "key1": "SidJjmiNaw1UHXVYmaRKpBxBRDFHRm4ju84XCxAJeuUzTM6FnqAnr7ryKDHiRDMXws2VL2Fw8YmcCsmEwZYb8yo",
  "key2": "4E2oJ3wvJJYECatsNpVt4UopD6EHCn7VVCTZJDJWv1xWhWtUe8Bp6CL9ZqiBUmfMYznubJyTdYTpbBUbDzfxp1yx",
  "key3": "5KgYiSMLNdXuxGcJENP1Nn9UJV9b3DomMDD33MSRp75mat99AhC9YuMHvuqZmuXVsrBTvRNeCMDitcrKbSmVoUze",
  "key4": "4mX6Wv5hL51TaoXRWUurhcRPwTEiit5uYAEKVTeECk8RoW7iJW6LH7JLDwm7syfBB4Z5c4AJFvxfYFqLYPS8R2KA",
  "key5": "3X45aCR1syHv7ED6AjZfvKFcK3GR7DXz2hEcAqx3uFwDcYrnDf4n7ud7ah5191SxPFP2FJz9KnVbtrJdRfmET65F",
  "key6": "5SRJ7KMbVjKm5GzmoXNsqppK5ND5Fbk1efZVdB1WNBsoRxBqnXwuEt6fsc6bBXgVaFo7MoJwodPf9zdscvmZDTcd",
  "key7": "ortMEcyhpLYSQSipjJdfSerxNDNj7xLJRx222uCRo2sqZS81CQXwTooCYm6Ck39yQtD2ypwvyC4PtXUKD85kwfU",
  "key8": "CUTyhS44tjXuuP4dYhKQvXfYFffbBmQBsvJ3EqgzVqsYUEGPMJjD3dYHQPEKNsK652e9U4faTJevLpjNuP5VHkZ",
  "key9": "2MvgRxraDTTjFsomMgVnJE4HN8BSYfXyQqHWCBJVW6u53pure2vTxaX9izoFcF8UDA7Y6zCVUGrMqtiW9PQfRJaL",
  "key10": "2Z2FAGZzEizRxUoK2DHNJsNn4si6WUtDs45HXiH3rZz3KbR6opEKXp2KxnSvf75hyKYBqBnArYAW2BvKQ3fZP1sE",
  "key11": "ihQNHaSks4GwrMsGV23XRozHANx57amCdojzGq74WkXaKkF8QtFMw8whf6Asrm11op2UbxTwJQJf6zT7pSCudVH",
  "key12": "LcxJZdkQJApPcYkgpsu6JBFNy47biabyS9B5acTWHaSfvDckZwcv5ez6S3CnYJhxjV8V25DbhSWFYn33nToGTMC",
  "key13": "7nEBs3qmyUBo3nkVEVisNevEkWrcdgKLNTDCscj8sYDXKFT96Ggq9iy9mRdP8HT6u1tcKQYuBTSDamqjm7YXgdt",
  "key14": "3VxagMikZb7M92U9ekUAz9TkcBvXWchXp6yFXDWBLwtcPHxBHx5CFLC4otxu9KwQoSfhVGF3AVf9udB8smyzW1os",
  "key15": "437KgmBnix2JJkxNgjBumg9xYex6YcXUbD2dzp4dFmtT25um2SXjgcNs4qQmJniEqpcpTLXJEtEaPp7dxQCj1MHT",
  "key16": "977VUhK1hHDBBaDssqjnWhVBo1G7W2zw54zYBxesQD9rCKTFs667iMoLvuqLW8M5KwMjrTG2hdJ5ZQKRjB62To6",
  "key17": "CzWZGwSmUimRjvkEJQWSNy8JXm28NCkvFjxif29y4cVgsXmiDGJaw2x7z96M2tnrMbUpg781jYapkoRQnJG3xBW",
  "key18": "41nThczPhjK7deRhD43ifZCMyWEtM6dn8w4nhAHwAGaPRC39AvnuZ4LDSn8GQasTznriPMjuxUQgsbuPBP2WycZX",
  "key19": "3FbjajBRXSXxCkWMq9MNpQXk6SfbPm7jk9vqTPYoutAq56cuUuc5zDUr6EzGrDcDuLPhv1CskiEZm3EqbNxHhyoW",
  "key20": "67m6vhr9EonjwsbLSvkzLAh4E927VzLxMoDLfLxZBjiCuP1wM7Xry4z56tmXgiHWupYUin1QpJqDNTr4bNVVbgLt",
  "key21": "63BopikUYNv7ihkUvYd34JCdnAHhQ3rdHZsqhFzkYNjBcFfSE5LQUJLYx3WXYjRmnNnZveCaraALS6tCj7AzA9TY",
  "key22": "4CF4cJSqAy3tnJWYVT8ZUjLHVrkx8mREswZyE1hRLscFnztGyctWTydXfP9Cpdmp2airhqYDKxzLputGde4HBjH2",
  "key23": "4LD7vgfq12JbzLCeeJz7afq6s3Ukrzef2qhGMHuuXaN1FRtU9kVzPakmignWbqwMJezHELaH3dQpnRZpuZDnSicS",
  "key24": "5wTBDFADEVNCNZrEVPuTU3dN2Fs4N2DGz1H2xWJP1beGaK6m5Y5vwCKisLQ1pLNpdWni6po2z1ksguxgSbubMtMt",
  "key25": "5SPam9ckaW6AzXa7NK3hb1PF6gPHNNojpeQYDy5rvV61DC1xxKm1Z33CBQ1xMiEBGNtjrg93FbVL7CCewtN5mhSr",
  "key26": "5fstjzxLNdZzhbaUBeQJu4BDzUtmVLtoLpubcuQAK4C9VZ3hHWieztHfPU5HED2Foq98wXFp3gaifDXiVz5hj8sr",
  "key27": "2JW5Jj3gMGhm6HXA2XbFRSdc3FYhb6MtkK249jVDxCsjzENr6cZw9ZNzqMZFFXoJoFuWYhYdnaSFhodmNMuzRH29",
  "key28": "2masCnzvbjxyXCyDDjcUuAZHvgDRU27aS65YS623fbm3KqHpY5GNkKvjFNRsghucPA3iBw4Wiz8QGpySpk1BtHpT",
  "key29": "4bJu3zhwn3Z6KxKPbYUxB6Ji4H817entpo6WXxXQ5NNYFu9xzVhiZgMnnMhXe11i93MdA7C1Cu5drehQvUejrK9U",
  "key30": "63whKLoswLixAViUTaTh2BTEMc6i1gG2CS7ZW6ie9vuZFADLd6AeC7whqkypJDyquSjtLSTVVxj9ojHhmZVdWAZD",
  "key31": "4Lr9iF3ioDt3RpRJe1qEiy8oSVTkGQ2mcjdAgsXwc56xBdfh85iwFrzsbcmPghJi9txRHNmMRs3tJ9k6xwsMXSgk",
  "key32": "4QkM37eh2KHhjHVaxYjM5wQSpkvqjSLLouUw4FSsUntMaX9bx43UVLopNsKxqHxQNk9g29jptcSPH5gQ6GxNmwij",
  "key33": "SoGDBn38aJywFWwCCQMDZaQJAhvTFu2De1vxAfzNCpqMS9D8t8AdF5kHwJCtp3XtKZMtaFyPRi2nUZGXXiBoMLH",
  "key34": "5dVD7cnrXdmaGdzRuBEWCR5RW536JDLgC32zAWt1UoSQ2KXK6vRCwSsokN15AfTZKQFtep4XkXa4n94RokWuNCHA",
  "key35": "64CcdCJwbLciNgwSZ6Xag3a3Khj3KHdvWBYSnRJi2r2b8CSjqojCrisdovEaQGxnjsTHGg4EotQs3kp58anQuoo4",
  "key36": "eZyDmW6PQxhYmsXfzzmvrXtrT911pE8eCZWTZf8Ffq8oUaR2tZxf1s3tox2couWLudUtvqHi4rS7MBVwk6WfoJe",
  "key37": "RDX1vfeU8kg2hvnXbcSRu7Pj9FyZh3ScyahAhYD7j5uWQRChQRrayYgiVXyXYCGnzi6gMMDyvhJo7aweapZrJGu",
  "key38": "3CP3qhh5gxhGp5Uc1cgsTyWMmGzTxhtXPhUpaQ5nqAxJKvertaSSQRV3xMeZ2qLEcy47mFypUQxj4SjKZdt7dg6B",
  "key39": "3pB8Aob7kLCyqeSM3Xa5AEnnp7M1D1Dr5jqXdUNRyeHAnkTLt3U4zgoAoT53ppctogwucVqPJBtQJQZCaUvYBbun",
  "key40": "2tencFSzsb3bj8qEHvMHbjMycXrxc7f4r5vBvTMc7zLdq6V4HDrBoRQuooPsEvRBAfkZEc8bSevaLnmufL88rxGe"
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
