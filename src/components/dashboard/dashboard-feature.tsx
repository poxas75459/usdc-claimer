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
    "4CTCJt1oDfLAM2GJM9CA7LeKLdE1auqivvAGGDQrNeeMxpHmPmCCBZ9bFvt6Kf37HPB4NGinMQLMjc5ypu4TRTV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QjLbMBZWKPR7oVA73zqWP3hcRvHP3Yd9XThqB1d3h2NmF4yHgunrbCycB23q3hLmHtAD4Wjrd4ucGEX3SUKxFuQ",
  "key1": "39U7DTxuRSZfkJXddS9f2rUCLsKsJir7G4C25LbDN8q3y32AYsEqxiGWkZAeoFWLJewaYyuYjvDQENDi13qJMqUy",
  "key2": "4vuuFebDViq6sxJkUyzm5DjybS7VMcR2uwybbiUE8kZvxzMqnKEk7ZGU9hHZXaP87ooaX2QMRvyUjejnGKYwj1kM",
  "key3": "439FxhDfMmS6kH48jKVhyy95WxkuxeV7bwn1V3jQr5PWsps32QXdLQ8dxdjRyhQh73YLijCfw2cvP1rvNo2uAfwz",
  "key4": "3pMWWJGyphxZQFf3JzeLb2hVzdFQYVGFH4jvWQUZuVu4ZTKvc4W5rZ26P8x53bmQJg5xj9n6UG56ouQBU915jHkk",
  "key5": "5mgZPRVd2oJciqw7SkGr7JpYecB56azYaNoGp9mgvYESmhQexfwrhdvvc28LbCD1iC9qmvhrnUrwsGj7QZcXVuft",
  "key6": "2yPGyBUQYnLPB6iXopLb877KUKyez8pHoGNyz96wP8nvvKcQhJnVm7V6ZqXfnuCZsiJ6nQegFjR4qXAMufpuJycg",
  "key7": "4KWuaNzsa5GyQvAYKmSW1BbdT6gAJNRhob4jkPoeocDci3kkZ29XFWgJavUjnQy9VRE5fLRZt3RyNkFwa9zbgpVT",
  "key8": "3R2457VarKbXZ3wdhra4NHcBWoogf2NUDQm4Gx8nPAqgdzqKgXbNqPGBEjwDmuTLbWuNyf8r2sWJSt3QQjHDz1Mc",
  "key9": "55mQDgQbQB2PnQDat833LPXbzp8GAhWtMzGG4SKJYtzbXZ6tePM7kZG2gKpctfek6bfQpjy3ZCdfahfqFGhGZUwp",
  "key10": "4XwBN16fwHQkh2wsrhfQ4UwzR9ZaVZEyUT9fiWJMKqY9gb1B2Dj387BeRtH1prK1XdzMtmdbsSJJfdjdGUPveGn2",
  "key11": "2ZoppP3QvkCCYs1Tpnh1gZztWRipAcJ9v1txnZmePiENxmgfFa9HKcbAW1qx7orS1iiyjNbMBXeFPgzw6Y3b6aDh",
  "key12": "45SGeucEcikH2SwWZWi19GWVhDdNTbZuN2SyeYDuL9KH2LAiGKGtfTXKJPomUszsb7zHCSLJ2y5AwVLydgxUNn6B",
  "key13": "3VgSMozw1KUD4RQa16ZdbcESXChb7nx7BGcdH1YB8B93rrW1DCgqXPbZvCtpDa1W95RsX1kEyhZRx5iKL5U8ehRg",
  "key14": "2xLzYRjiHJFipdSSfM14zBktDC1HmyC9JHdECX8NJcYdGvaAcBFiDCu5oF2aQgzS3ByixoHvV77m6pz3PiRfHE6p",
  "key15": "27GrGiBcx6vyu7965aVKiuX8AEDoD9EhQCWHLWUSK9RhP6zxjBK5fSkw8qgEQsL4kWKp43c17m7XbzMzB3JrdzEE",
  "key16": "2zt6JwafuUDBeMw7bjEoujBzgTiXBSVjiptVybM7FC27iva3YU5H7WXbcoroADobxodHcGVJyiyf76G8ibeNcinE",
  "key17": "Vj7t3zjtHAfQhKETWiCjCjqMyQFv1XtbovR8XbLrtev2X8qw5bM733eARopk7bQ8XAofMNwwfuTFj12HB9HgytD",
  "key18": "3QeFHmqnAsk4sY3Zupgi2iBxcCiG5Ld3SRz6iGb5MasSDfpW6FRUkvFNNRNKdpqThwQeTzvY5HNSRM4jL8BFbWoB",
  "key19": "4v66VPCAo27R3iGYJVKYfytWUHxH1mDzcVCKZRwoinhskBs69x5SsxCXVoHiwUKXZXkAUUy9evrMutHTg9A37eut",
  "key20": "4WvoVWqn4Tr7M2FfK6HPzzSYqyAvuJj8zZmTXs2DRpegsgPW2jAFVmufjyg5jgsR2WRjxmPrzmjxydgErPS8Jjoh",
  "key21": "jxxpYctp5sSGw9vHYwJLPtmf2NKqLPx1aL9TMLmy9ENHxy3BuKVhuUoDLp42XcHNqu4vzCjcXHZqKQjSGLF3jjk",
  "key22": "4XUcEth8FCZ4BTuNyaCjNKK6z7capYmQzKih2DWYLyq5DP5ME4tZiNNrK99Mwdh3YK5owGaEt6bEPx8quQxYDShQ",
  "key23": "4nieXPqooows2aPrp1dfF8LBhcRS7UBs8tMBzkCF5ZXDpFTZZXAwK4uELqcJCtXhb3qqDVHGon6iteEA1NiScJ1v",
  "key24": "2DQEbzwpPG6Y6awYAQDqeaS7c8QuNLKWxCFnsGS5UaHYbSui916ATPtKAZaFR54Y7Beooo5y45udVCbPr9hRf9ui",
  "key25": "2J1PtNKusWStR2oqf9M4gUDu3Qx8rYf3HAPJSpe8zSNdp5CRWDqEHmkboCvjtoWmT5v81jHhMP2JVZCygfugmNWB",
  "key26": "4uTtTAwJ7HP5Ci56pBkwXSXCMdbmxmH9Q4g6oKThL9SuyxfzJZRAcRWqPiqj1yyS9t8G3VesgiiS1y18kT2VnL2Y",
  "key27": "5fTTcV9bfaShqh9rhhosE9D66GQv5HTqjEXXth4MrU3M2Y9UPcWUdiWA571aCbYH7vXxVPKh1QP5DkRvTnEaambN",
  "key28": "2xmVprf6ZPon3nGRVpmJYtoboS1v4x616km4Qn6nb8Wrhr2LV2VxpNr1uTR8Aagh5gDUj9beujcBisDcWUqGRD9A",
  "key29": "731iA8zqKBnAPasyzKTVgubNaJ9YUnMrBGMC27ik9XSwWYRkwL1fXojwsx8gujDWseRU9ANKnyBwJoMMvtNCmrR",
  "key30": "5oyrBMXUyL9r6tDUKF3topJcJyteW4GRctjtHrLJXyrhSwDkzDdLG7T1Syiqe1Wbn3T7zQRZJZNW3DjBPopuSjH7"
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
