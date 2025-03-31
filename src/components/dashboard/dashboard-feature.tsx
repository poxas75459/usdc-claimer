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
    "UXyrZ8xJ6GF1ks7Pq65LvxLf5MTp7PVARgSNAc7B4PBM1JPkJfY9QTptt9rmugJP4u8T8XKrveRcBkfQvKguQYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53SDqLmgZn27eMr6hWramHKRmBGg5rnZPrHffFwv3W6mnYww8Ar4KGoEie2f4RryJsxFP7eyR3rtwQfAXVSp97hR",
  "key1": "3LH2d7LZBzrHz8bNixfdZmPrv4V5b8tnnNdfQRk1Y4ZTro4BQz9N56gYzGxmzqjrHNhAYwkqJ7Xo9W82F1sxJjwY",
  "key2": "2VZ5hptGDqApBn7qknm9XZrfzCg5V9aDjKVE6yY3fusAa6Zi3QW42ZUmVwBTsZwjbHk9gW3KPcc5pgWKJx2GziM7",
  "key3": "4L6Fusa2k8XGpcnMtV1mBJiR2hgNEDJwGPspa8tVaD6sw1eaDaGiqgSEiCh5fMzErbe9mdbR8jdCQzKkDvh2hzXy",
  "key4": "FLyUJUuvJWfieaUWKoFZ8dCpd8zzGD1CoMxDXCTKnoTJBFZrZbcF4VW5jLbLKaieVzPo8cymzL42WKMiwcqBWTr",
  "key5": "3nbmKziVHkqaoJK3d9mUXKy37gGwaMRGszpAkfZiL1iLu9926uQybH2Y51DfXaBzgBFBmgcx1auLRxiK9yvPkgCw",
  "key6": "rVCmgak1qtSVqjNBndV5p9UK4QnXYgKZjrk9kX5GZz8Sz21RXLUSXV943U8MS3gBsUz4MgEXcy8uT4CFfzT2oNi",
  "key7": "2r3WSSPiNJq1iH2cWyHG1dsjtgWZG92eRL7BLQmdCwiuvqD69rGi2WVko4joNxm8amhuYNPUCG6xLYbpttyxuLKQ",
  "key8": "62wp7XYFmK7dKpofj7ag51BbUiV77MoZafKFgPMXRx5J16pueEQh1bLJTu6X65Qtr1ng7wkAEo615WgErR7TWgxw",
  "key9": "cGxJYJ4ZUcimiguHiiEBtHFcb5mFTJZGW1LEYuwq9p51bF7TUpAae8iDDouMKFXC6cUhyDJXXDEf992e2ZvTQjC",
  "key10": "5xy4DyWBQkLeMuqZKBMVyrZSFBPTsq3nu43w6XAvnFCsccBWkAQPvq9uweQKQNn5HK6EQAoYzRn2GbN9TPSkEidL",
  "key11": "2gBGAWAExPUtCUu1hHr6gP1dGM9vSHzp8FKAjtD5WwznSj9FGybxZVDhs4rugdurvYUbiCQwVpd1h6abwkN4kuMQ",
  "key12": "5AAwSWviwNjvwTktAoDrknVEMn58mQxFofKYLanA1ngHfYT7wsTMxuDowTvJmHLVxiScxu1npLYyUMg6DViS5pck",
  "key13": "5c3L29ogYCDggCcuayaq2oS7nMvFkRp74ao4WoTQmgQ3Jk8KxEQUfDb7NHY3ZW4JiLtNB6YDnwtkvdiAJfCesrj2",
  "key14": "3kbBosiUJiBPMAwysxe9xobKnbF2svxue1Cw6K8QdRA7woMGD4UCGBZSGVG2WSV9xYLJeQqGwjK8RkFHQxK7TSvk",
  "key15": "53ngJJfvMt7YzYc8e5zSBBZBGHH41URjUFuwXzTtVj1QkPzsq4syNnzjeMvnKzL6dcefxJWQJwPcyM4nQxUzz5ZQ",
  "key16": "2Y29NdtgYYFLuTcX4t6om1qrCBjVcEyX7ttx16M71M5cYRToNMsGLjd4BFfkjXQYkyBxBaCVeDPkrUhqqFRbuoA5",
  "key17": "3bufwLFyKPbCi4tb7698LuAvW4hXDMoJccKqRFkpvbXsZHUE1ehbNp2q1PsZG7TdJWbb67cK1Qbk5HmEjqJbi4Cc",
  "key18": "4HtsvvDkmt7HqAyv9EouFLgG2UUjuidxkxuX5CbX8eoiDZbVJ9UStHTjLKPSNBaKtTzc2DxLNjSNuvEYufjqLB6g",
  "key19": "3ideE4n3fxSwR9q1tBgVtrSpSQY1tTMU63nJatTc2q4uGcnhRtAQtGaVadqxnHuzqoA81hbhF8D1CbYCL8HuLUmC",
  "key20": "4S4EKsUhrsLwWi6XdgdNthoCJRSEbZDCfC99sFQLS96hoPp8FiPQWD7tfrfjAGizFdXBgVmKjQk2W5afYqLDpz6z",
  "key21": "4oM6amPJqUcj741jYirmgcPfPPZXvPfCYWtxHkFC8xJB239xyRSFSoJg5spUbSK8hLJdxwE5zPnvspaQ9j3UmqR1",
  "key22": "4RjhkJsdcjpKsS1Muzd3sp12jmrZSL3km9GQbDKuwaSWfWhBqC34eBLd2D59G7KnWwbeT4miLJu44fJw9AR28CmR",
  "key23": "5y7qUHyqGErGJnpBkfvdhh9zzJJj8WFVZ8J6bxn1ehQgxhmsLQ8hN2i6SijEYESXfUH7iYbjvgXvuJHxoqrACC6t",
  "key24": "4vWW1BbJJuPYimL2awumFmhJx7AUShXE6ctC29WQ8UfxGRLHcRq7psBEeDuQeCCrrpJG2bCbpsMosbUVBFeB45eG",
  "key25": "4tVgwhZrZM18a4S725BW9yUU1dvP7touYfn5z75KyrfZxj1gBjcEHgJJGxwkqVWLn84Z5A8EK84jyRngjLFkWmm6",
  "key26": "4vBTLkmEZHKdEQnvCBiyo1rt3mLZTAn8rYNL9LdVNFbEYFswSMk69gKNT3gW8xp4hvqHCJwSAJf2wnrH7ygjzqzv",
  "key27": "4G6VpXhYo1znVUmzhut7FdMoPYWeFx5tFGKZGrrtJsXTgZcNCjJ7i4ctb4TCXK9kMhWTYqdfZiYnJSzG1TBRtSM8",
  "key28": "4F6iaGoKP27f6AEpyrAvjSn15gNbn2upFPrLadNPhpVH5BtYnHsAGQ7ogBZ9ohjd3gCjVdMgZ28iDxDDA3QeEHwh",
  "key29": "5bQ3bhB7nsRQfDfxujX36PZNYaeWgNv1yoTS6wAeiT56q7rYjbFAdbFrEVAiuPRESTURtKsuNN3xPSgkxDjRCbr6",
  "key30": "5qpJPZnMLuSJNfmgDwZ8FbYyzJsbnfVyf2ZChUjyM4AToXVgN3qN8K9GYVWKyYyrKzZwQVUYmR1Gov2vTLZUib7R",
  "key31": "3ATKkfim95PtbERCachuph9JDGXdb1qkLaXBEEsP1AutpiCEgvtBRfMBaCRF5MM8ne4q97m95Z3o1dbA8kEumrMU",
  "key32": "5e221HcqA42mR4aW7AZLfNV935wQcGYK81BxfPyQmVyaZWA4KZxDtLEabKFUEWwS22NskGxiAt41mWQGMScwiQZJ",
  "key33": "3QMVHMKFXhmhzujo24pEiP2PCr73LLBGvStYkjMsEJUyUfrtUQF2z8AJUHycyhsoxo3HNbxgRgdbu6t2WzUMDdwK",
  "key34": "3qMv3Vohz8PSCCkkQLxSTohyjRa4SwJoXBSwGRf2QAHBKbVtq5f1sNHCyiRmVPDsUf2NhPt9zS14ibyJqYXdo1pG",
  "key35": "5ntiXh1w4bbV1T6D9a9i5WGhwfa11WxpkwUbA2GtKAvpW2ZKMWaGBgiZGtdhSHA8RbyUj29HhNZceSjCtwZVaU6M",
  "key36": "2wriLDAdWvmdPvpYGjVdPcKQrj1dVJzR5q6fk6A7Rfq1XzkxrShisiow9bGECzXpYjBNYSgT6YaAzCGssVS8P63g",
  "key37": "5FM4Gx8LYhiXn7XYeU93ew429besWT8TcxqzXUXAuFTU8pCtKke8YLrbVsEkLsw5FEH68mTTpEPYaihvzP4gULNa",
  "key38": "5bihZMNeJUznGgwWYwECmbF2AUWvdoDDBMqB1KhL6YjmmKuY6DdMQQ3C5UviSDwNWmJQSPBMcKnefPsDCPPsabZW",
  "key39": "3uNdksbTyEoXzsjJZHpcMoghuFmLhgjm3RsidsBW8qaMULSAmw1Yrc5UYz1PTMTnkZKNzzu2ebQX7wQuVhfEwos5",
  "key40": "5vw2HDBanhGTUjV1GrhJCHcCNaXD3Z8ddoRRddis1ff4GeFfn3u2A7rJKSqGVRzFjfwtyZkET6weQrkyY5gx5WXC",
  "key41": "3ZjE3pzKUzgZr6pv2XdzaW6HmBkZov9iKSeG3nUPQzjBVqRdmJgaBexzQ34i5PYYjKkQxUTGYxEGBXMfXaMeb2Br",
  "key42": "47b7tJBX9cNXw5FSVAGsUp79kkLZyPcFYFoNvXaGqBhxH7YD9v4v4Ci5FvzynLemduhxdA4U62G2mjHFkteA3VGq"
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
