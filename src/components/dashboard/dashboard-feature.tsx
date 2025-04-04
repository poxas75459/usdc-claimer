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
    "v81TRtmN6mj1qkVdsnhk9S1E7y3ocJM7n7BzbssjeW73Qyfp92cv2t6btJ9jFN1atu95WVnnxiEUXJbpmiUHJy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZbd3Kbj7fZwt8WRnwr61FVmfNCAEjGdtVQyoD4iHm66C4fMVJMHsGr4tbKyAJnP8UTMfVEtcfchVHnEkKC3SdM",
  "key1": "7xg9SikNKwcEAzfxmyW51vuh4TGWoCXn6FqBYg1HjWZxXaeRopS5dKADn4L2BSAun1EwCcdtwGxZwWv7rqkR1s7",
  "key2": "3z5uFzg13UHikN42GygjDcJqRQuzcGJepPQ3nu8hqPQyETotaLbydVWRzAgu8S6Jjw2zb9e3yMskRxrfacWT8KLf",
  "key3": "376EHBb3hoDU3QBm1mRPEKFz8PndRiU45ZJnVKwkNnmxhbKKj1NH2s4Zqv61Y2Jo58Vg1vKHVXmMTUSBbf2Q26GK",
  "key4": "uRhyYyZB47DmfC3e5NyrjmunhtbfrQW2jih8fD3koqRo5FPwjzrzKrME3Th5wBf6pb71RBCABu1eUKUmmX25v3R",
  "key5": "4Ux3rsUSUadpGJMMxnJabgnkj1i68y7x29DErKgVo89FWD1L13v3YMF1SqnjoG9LMtDKvJ8rQPzg3HgCscPWgnRz",
  "key6": "229bdrheJCtv9cpw4hUnpbbmS59crnrhtGqiZqhchgC7pKewDRLzqJCg1NumaEKFcbgVJ2pFy76sSWrBieRrHace",
  "key7": "3GTuXqXFygrCdA4ZXaMb7xe17B1Mz2yyKra8yd6PyRaVTBCzVh6YuzTwGEJqr4adc1PZyHgVBPw1fvR4AAFZnNeo",
  "key8": "4Mb4tFPiZNYgRvXdZXrQRv5GTWAKN3fSSqtvmB1ftVVD7HqFZ4nE35j9C8QhqXsE4jY18idLERUSVJxUg7m5mv5R",
  "key9": "3ixXEagq8zWFAnzNyGsxLJwfM1g2kqMjxhPu8CeNrPwA2xH6QJHeeVVXHGDBTieXFLAfGRobGow3atb5odWbjKKR",
  "key10": "5dwz7BzswansxyiF4YyypreqmenYp9zNjf1BDLdCMBmhP3TBMz7koT7LEWoqmuwUWyUQqkWUe2ttBgLy6P3Ry8P",
  "key11": "D4BzgXixhSh4UWvgRoD7htzbLFCn8k3zLDTCzWEjPbYPeLLY18NNzUgtQ7WzqZpKNA9mzemHkRDrJ6KtxMBozLf",
  "key12": "2HuNTVnMmtCSXQAiBsfHrJt1zw7tNBx1M1ktJqo7NJM45rdxRz5qw8L8zgR4Eczeeniz4jFntcTvpDChq8rGsUyf",
  "key13": "25D754cRem8xMSeJHHwUHVpdKZaah7gcc6TsjF9mncdUsB5SVPSGGkLTswhy9Fqgme4Zb6AzJXTNbVsDDxoUD2CX",
  "key14": "3YW9Y4FRdHEAncb2WRFGaK2zKaHgeaj8jJQ4RUqJRmoHJtAJAoiG1PjFsY3RK1ix8tf62dcbZgpeUvSZ7H3rSLf",
  "key15": "2mJEqmP66F18trcJbgA2EjNgYaLVSVWyMWgVQee3UMdQDBfamP9vYuFek2xDwZyZMzMSzMYSk1sAhX5baahCe29",
  "key16": "4mGMztREsYJh1WUNMtCawfbjSy2xnygndtwXsQmDo9b1mtC8FgoGDWLuZf3aamQkvWkuP4SUCeNpKe1zsy46Vc4o",
  "key17": "4KFfDGHdbrThD8w3vsUkpHqMhfojVtUJL5cUN7rze3Kn7KB9eoj5YMfodzYsSQPREkt79kWc49t6HN5FCymYLxbu",
  "key18": "EMGWubMozKGbhLAbpaSnBLuFaQA7sY1qw5aJLgKZw5mzZKKqjTryvH7JTDpzY3Mh6nP4jufUy39wcTJUpepwNC8",
  "key19": "4UW7PjCLetcycr9f8DNrP2c8qekVTqRTGbF6E7xpcpnS4kfHNmGL2JPon55axkAt8tC9MNmKmJ9w1FWwasaBg762",
  "key20": "wjcvth53EKZcY5A2nvCVR94Hv4h4CYDAd3fBiXz7Yc3Y1kH2ZkRMi8ELXiZAVFygSmUmRyHyAXU5hGaZ1FNUDFJ",
  "key21": "24cs4j9ft7rphMKLBRifBoihKnSEFwYCQ7KFe2YZUyg92RqQpRudXjjmXEZJebp6jyWQsZSqVDryVuWyEbQHToAB",
  "key22": "5KsYgwURpEFbisuMd13xEr1yx8wGDV3pnrq3QVoXdzwF6o24ztZ9n4UhaCBzrUFQZXhVg6wEtG8Ci8CadT7hdbcz",
  "key23": "4eT3QTquQfHTAk9o5J2Q51hh46yaq1nTaJYvDApJ6vTrB9b6PPye5diS5uv7o5CqsiNahYQT52uw4uNcUV4Y3Eri",
  "key24": "2v4nXZ1qNiThwLjcNuJenpqjHZ1tHM8wCEos3RX4UwG5twQSWPpxyDa9gGLv288ArJp3VjqiKKtRJY4J3cwfd2Y1",
  "key25": "Ygdkcj7DsBruiJma7sakUY7DbkzfeotehYFUw67YM3SGgBZfFbYknEvn3XBbGkrEWy899VAjk184cmxHJWpyqSH",
  "key26": "rvy9dDP6sDVUdtxPYKXJG3xZSQ32JdXbaYJGm9XVCPKW8NL7FQ5equ6huUpahGixP5NFbymbDSszyYCf52PacJR",
  "key27": "2uHXjQJAUAn8ozNEfemMFQTjBWXRJSRNtYRRDgoe91s9n9vdSfsZskJCP85SrHJTFGzU9oWpC5H7A1fMLXAA74hw",
  "key28": "4U7hvwj1dK1Th6CGXSJQCpL3xcpjmqhuwvBjyHQCy2ui7YGopq9UFGG1gUVf64wUPHL5Df8QKrwkmBXR4PKJjkja",
  "key29": "oQnWugzMyUd9WQvSp18juHhBLgH6X2WCU4unqdkkG9Y5iWHube7c7yV9wcbRt87eHv9CSf6ef1bH9UMvoBjPu6a",
  "key30": "5xmk1Y2tjbHb2Ac4wBediEY8U6Bq4tWXi4CLGCViSuEEcP1vrLGfReN6AfDSJs3h85sogtTGTB1pqg7T9ZEpTcJx"
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
