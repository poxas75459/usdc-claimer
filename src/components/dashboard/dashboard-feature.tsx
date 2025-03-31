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
    "4FpWW7hcJrU1cdktjYhaoyByPw8ri7omXnHd75JXP2vx3Kz4E3hVXdpqXQS265vsHN4TWCSCsmMCu88gXgE9c5h4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCz3C39tbr4uBKzgJNFHKabcYUyn6Nw94oiMGRBDBc1EcPZeKLaPQcCUM7yoNFTjfdB7U9MKvkYnXQ7mFQUVJpy",
  "key1": "3uqnpuLCEgTJorxBUtRHu6bF7u9Sowz2oygXru1pz6un95iiRDK7fVNFU3YhQmieBvfDbUmW4HXv5E32kwWKtuR2",
  "key2": "4mcyX2tyUig7YPgJ7Aa6Kwb521JFGvKpHWoibDMUxiCtCjbyGL8CL4U1wHZi8XD7HxDRmUc7KHnzPD7GH3uAxYW3",
  "key3": "3qsvX1pUNmEjgS4j4yg26zgAUJWxTvkyNjeZU3uYYkni8qLPkA9WkUoHWHpGuYmDA5HxFzFs8Q5Sm17wHqx2MUY4",
  "key4": "5PGVnuvcWFPKgTLZxm2bJNgurM8vskTEZ1XzPAKsSw1nVBjeG1J1vrMGdyRAnFkpxTzJX94MPuWEUysHTPCofwNi",
  "key5": "2SnULqDYXeNjn7hfaxCWY5CGTwuxXduhqwbJfQc3oCEshj2tsqZQ6wJpX6fjatCn5kLQxd8Ki7sVUJFLvNB3uJoL",
  "key6": "4UuruJdBmVbsDTP6ZSzeMcmGfiWnhJ8mTLZ8EWiBFNo6oEbYbEdRJEfxSCsCuZGbXuix1TC8ZH5icx1HpJsW922Z",
  "key7": "59iRSFPUTkdnzmh9JF9hg96D5pz3iFWmfmRvQQftD1Lp6nBPn1UvYa6ALShXcB3dU9hCHG6jFF6c83zw7xqoZ6u8",
  "key8": "3dzxMEAa6dVps9pYMJWECKFqe5JJAjqFWhQtuRhXRNLs1hbAEKrmmdbSvMGtv8XDeD7WYNB6CKHiv6doKdkSVe9C",
  "key9": "5LAUaiSsficq1vBrMgoEFHDxDjcTjr49EFV3uUJ43SyWS3SAiwNv9XqgpyHtacBrtTzpZwsjSZHjeUybYns2avDY",
  "key10": "3Ut7RQ8UP3oXWJ5ZowVrvC5TKegypneDn2LSvJTdte4xrDpoYYUhBX4HrxrY1mn8UcxNydTLUv2kkczQYBSxAPKC",
  "key11": "2T6kKE5AhYXKREk4xtp1Fx5cimcCGWt1ZbD9qQD1Pzxxm491qVkm2guDVzW1Bsw99KBqXkFaRUGQ4Z73exa7nqqr",
  "key12": "4uPuY3f63pzbzLeJQPdgCZGtPHbavbmyDQi59d2wxh5EdtusyaA7mRKT5qvPXEr74sXJDSsVhodJM1aSuaeru4mj",
  "key13": "3yWcV788Y5ieFtXYauFsp3xMGneXBrP29APhJKqyRftTwCsLoPi4JJwbXbWmutiHXzWFMTpLWAQSgWir9FAm9zyL",
  "key14": "H2JvXXF55fwVxnnwkVyLeK6dbpVA3DienrEs8pToMVUaYKReDxxHShgFjxh8muyDYh86fvCs3CrEMU4ZigAypAa",
  "key15": "5Q117JmTSQ8yz5EUWWUDgSHDAQMsiVqgrwSYbt9raHXvQycjdaVfhv8dzJSF1anXDXMd8r4H2J9AQYrfWBT9L9HT",
  "key16": "3SBsRfjRniYFW4VNQoo4QS8ru5eNmKoUh9E9JiYPmDJSreq5jEnHd9gso73tMdnkehwNwcoT7VAr8v9JJy1811wT",
  "key17": "3vLYvTvHhocVaryBnVBcF77oc5hs5kCbNwSVix7iJ5uSQWsD4vDgq2FdcacwtgZ7gs5v7qiaaRA6aQDL8MPZyrkK",
  "key18": "5Vf9Xscn7w4kfZdTw8zU5D4uracrHAjYDdxCURFPAJe7EV9UeKVyNzxbwkQ8yXoBZPvArDpb4aYdn9HFvWJusREP",
  "key19": "4XjpyotEfRDWsbDZQGpURkTX6jGUb9irSvBGYK883kdYicuj3uiQbBpshMTqmsExmJxaT8WRzjLV1F5u7YVdkG4W",
  "key20": "gXTqVye4crLf9RzyHgnGiaBLeHxBuDJ98GmRGTPVcduYmFiM8vCNJqrB2iqhRWy2zQVuRfnJUe4DhzD6wGkP9Ug",
  "key21": "37atkewAyz8MyspgxcDGeJpKjMgi3RunYzeau4uHd8fhEvUP598kZkHfTJqWh4xHmciKCC5Bau3HFtmXApSCa3Fj",
  "key22": "4H7oV1F5xymG4pDiMq3utCn8D9pkqnQjJbzfC4Tc6CxXgQz2xxfpQm6b3tXiLAEMoMLDxW85mCGjDf4Bwoegudev",
  "key23": "2pvQxrJvTwRjnfFCVtkpX8M3r2EboRTA8NZZGh2xJrRmVw1gbWJo9CyqgjmUzFra2VLZHVs3tcusz6Kje4qUdZH4",
  "key24": "129Hu3rc7i2TUCtxYFjscQixV6MMRvUgg78zHG38tHMgFo2twrWJQfwvzE7zSJMS4PZ4K8mRzoSgQoYv36emqLAe",
  "key25": "3zzmV2mwzjncy9MYBJHLKLK64vRrLpo9cniLd5ZgseecFGCwFbnqj36muP9cToiuohraYDVzjnUZTeDfoMPZGYrt",
  "key26": "3k36KsTqg5rByoEoKPdN55NxAra9w4GdMNt3iD23Z1EpczifjdnjXB9enMKYwK7q3ud9x3ygQFcm4k7p4pYuzSuH",
  "key27": "371zrSnCbQYbVErNPRLsEjDqwGjEHdCJx1AKB2G9gC6hJszeQzQxbUekuLGzYSouZZVYNrbEPQJdth1Hk8s1Hzmz",
  "key28": "3f4cMSzg5NYPASgWbvNd6SzYMg6fBHf2Qc4RgsLA8XmfHJFsxVLhJNSThHDArHW1KtXuVUTbcZv87fzvoqTUHuEQ",
  "key29": "4w4hh8c7MXqY5vRGLmRVAtFpW5nL7436kYQr3WEV45atYeSuouzQeQr19DVfPCWfx1RviHn2sr9TVNsorrixcJ3M",
  "key30": "4umiB6EGqzvHF7MUqzdazz6qgfCF57TniHdZ11mDR3yRZGRtoyfMkLidLoerHstp54tbhy8pA9XsjjZEHF6TciqM",
  "key31": "D4DY3MXrAR5QbrAUksHRTQvf6mfk4kaCwyuBtCGjJPiJSVYHEArGUgPZhXLyqk9V7QEfByvRdZLjwXgK68EyxYb",
  "key32": "5wDo2vY5wWzibscBkgCqyjBb56zGjtHze2ptQf9dSs7dRtY9LqqjgnQubLZviZXYUYS9Ff5eDXjCP6dyEQ9ekS3r",
  "key33": "4BDVbvQSqHTAPugZeUYvRvhUDHciWD6wPfctNZ8EjR3RGNT76dJJ94suWc24avPFiENux4FSm4v9sZ1rvoJf4hSK",
  "key34": "nz4zA4nhARPLpa7gS8Qy6DoL7jMtmav3SV3Kq2opiu7oJ45Cufh5LHivnjk8cjzJyXtMPdFsWhQoknytYkaAGC6",
  "key35": "5hXcobumsvFe4YaXyJgLZTqsgGgMgwEbmHDQggzvZWrnU98KHLxU8ab7f3Gjn7U4t1g83im6g3KZorXusK55tWHr",
  "key36": "a9JhGgSpAr8WRodyyHqeMCtkxece3Audje3Bguxxmc4mYLBfJWYvxNmDq6yNWUUJ1Mn5WUMXiGnKJ6j7WmEK1N3",
  "key37": "5H4SV5bvSoGYYDgwGgszTopf1dsyYc9roqUxuMbWQoJKobuxDybatnEdGDiQ1xYQ7MN5HArVn4hHmuRUEjqaD1qz",
  "key38": "GD9PLkER3bB7126fu5tzK48P2ar4ACZqMsVYDFBAZnspsLR6FWeMi1XVnTdKkNvrcmjFawLebc8snhR9PH2wKmG",
  "key39": "5joEPNn3BCMfanA6BSm8UJWDPb8peUrMV2C1ykd77Htf966HVVveCfZ7ddUvJ9BzSbMMMmcVufUPJhpd8tMTShJp",
  "key40": "ffhydmkxiqjAHBF1Z9F84gjTmJRs3RP8vDUgFjEDVADREY4nsbcQRon23MmPiJbuU8n44cychPKBAYCAB6Lxb6T",
  "key41": "o5i8XMsBaskCEHG51VJkr8i1ga2jxmtJhSnh2CvELtewvxGs7tPp2FTxRdyihsJvuscHjmCChWZD4S93XbaDS5K",
  "key42": "47yeAkcZWUGD43ZDYTGJ5jogQ3dRxCPMNVUtgUWAX9o36AaERwXifqkaokdGTNh2zACacuNcGHfSCVVgwJHhUtFk",
  "key43": "3ZGprpLYJcDKt8DPzC2rnyaaxDMYmAtzo9QFC54tXSsEVc5BGVChgpr1NmQS489szBHB7V2t8XWD4rud2iyoHvFK"
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
