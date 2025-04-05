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
    "4Uf1wz3LShKoVYWX6i6n3GQQ5YfVNrS4T3DRGBFYkjC7suKc3oANNuGertBUhSdu7mGjEbDVoiUnEMGhkSF6G6NT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDpyrm7RKbhEozdFE89hZZrf79X7gFbBBFXkSRGxwg3xTX7AV3rwexG926xE4uz3R2oBQUXqS79PkhGoSDtXkLn",
  "key1": "5NN1oEgygvFSuy8WKoQiQPcZex8yE3Nw4Sh6znZNbAqEc3cAEdKEmgYHY7NWR2CCXKe2AVjbjxQWETQqEfYZbkuW",
  "key2": "4bJ3np13D3BHU1JnkfixMnGUoYYadujTf8hn5W6g8tBHTGG2sBVLzMyhh7HzfZMfFL12CXf5DAbs5omKk5rLzZyQ",
  "key3": "sKxntrGPrnc7FydQNRWjCDpLcGmMx3Gwshi651p9exPQVY85VrPkvVSSV7Sud76d3Srrxdo7ZS673KWSh2LeiH7",
  "key4": "2eK5uJShcUVNrsuURXSiPvAdBRFE5kq1rSWWokkf7zAVTJkyKT2hu9GroGzqjLdDoSqqbp1BV1rCGjY5yYZa9TdZ",
  "key5": "55n7mFB5dBewchjfFWjJdhrtizhVmzaKNv1y8jWx9tBa8iFPfwn8X26MCLfpSMgzrGBx6p7i4PLe7PppeynQd6C2",
  "key6": "2f9kmdBxo2KNW7FKdcW37mCMxiA8nJecKPSM9jeU2SDNfYT218DTERXka6BAqSbwR9owdc5XumAfhrpSMFJ3wasB",
  "key7": "3q64gE9vAYFFb6uMw9wwSWZHTrQJMgBzWiUg5bXaB4b8cp4fvznE6dFaT1b7JXG5ZAs1eRoEMcyuiAH1qpdxWGQa",
  "key8": "4ZVKY3vAuuQFurWJCiWKTKYJFgJZh6o3qcdZj95bArTKZ4SL2FQPZc4Z91So4UjEbsxrG7877mLrU7T9mvRLgxg2",
  "key9": "3Q3HMnp4LHDK5ptPn83M26GbKsLUL1VrjqgPGPTKNxqvT9BNj6z89Yxt9dzUE22qsSdH6iq2um2XvN34VmHMW5Yv",
  "key10": "4RBC8NJHFxgeibm8AYNZgMhHksbLY8k97PEYpjcsJ9FmpAnEu1o647NEUae5w6Yhu8UXxMAxTweer7gjw86p7JCT",
  "key11": "52ZQyrHb3isaWXDWS8ojeNEK66bFQdiTfUFqtzMpH73xxosLQinpTi96kybpioUbYi2xEMKvSXxAKNiZrNUqx1g2",
  "key12": "46aogJLeu3DEW6B9bBT95mJLgf31Fb6rxSCtVTxeW1GXHXbe5Sddj1mfs6NkHppgcbt9DtmUvrg4HBM7KVKyTrax",
  "key13": "2rdPTpZb24QvkjgwhpCe7YDCjA3ERUvWng8gqmxdEsdtDHkFM4okv6XCnQH7atxKRd6nPgsENZBCqrQvhmoNjVX7",
  "key14": "2js4ibgmzbnheEATJdiZxC4H1B2XCzzwFtctbSxB1hFY34D9bNJMYYUjJucefEUTKLPRzVrD5KTSd3hYEunWyBTE",
  "key15": "3yjN2K4g5Pt1keVY4qSJ8TAjyUdGhAHsdXcMybJ8vNW4uEz6QtnJnTDe7eiyANqmS4ijyTRiwb53CTK1SGQz9iqy",
  "key16": "2oY81U8DoVR8XSjPgH1hUpdQbpLLZtWCLUY4K7KV2jiMZfBDRseAMh9MqHi4KHzpdb7xGZbydLaqHHMb9w7Cq7br",
  "key17": "3U7iNNMTgftrzTQoZTL4Fa6fabo3fPDnHkgwfu2TnmbeUo32pTGC2rAuy5UF1f1NbScM6UhMPCbRzWzA3rm9MqAv",
  "key18": "62vovvuzY2X1T3k1oWi5CDsg9jT5o7hw1oJ9JK1UJKHdi3yznmkznsKd4U3m5h3sSV9fSUyk8DxGqUnUb6v9uCg2",
  "key19": "3ZcXU5rw5oGyUMgcFMJNGPibZtp5xLfxUuDCXi276UAwQWM9wWoMgVW8h5PRBKrygedXBDrDB8dTaziJHgJ3EcFw",
  "key20": "5CfCJ2GWt8tu97Uet85Czt7s6FWFZFnJ3vdAPq3rLWcQCwBPPPaipAgneFAdJxSf6RjcVGs78Lrk2aFTnhmuXtKm",
  "key21": "4P7BFqQ37rQFqBvssSYvtEnHw6iN162SMAW87irZsRwVYaYRDkgQ1zgv2TpY6uMok3Q9S7o4gMqBBwJC2U1tmjjh",
  "key22": "5TSuSBtLyXALw51FVirws5pZGKeJzwCAjbSUVswLjoB4Hg7JvNS32cRsU1ZS6KRxm8PcCze68orLZYb7mXfAdHG7",
  "key23": "63eGq9Mx1F3PpWAfwfy2gQFduRS8ZJqZst8tVQGCgzakQr4YZUCKHLqfCoxo4NoV44pL9gF1mzejVD6vCJraHanS",
  "key24": "BZQkgbXSZ1Xmm9xtNSjRP2QSdQ8oD1UfbMsMdZecrHvympTgHKefHS6ddhhU25AGEWdkA9kzcg6P4qsY8gzrZcj",
  "key25": "2fEMkKwLX3R3JWwvCA8RakSYY6cJGQk1eJNbNU2Q7geF2jrPMCGj3iYpYgLmE9oRuxCSARhTSNi66TYZ3F7PdXz3",
  "key26": "4FbUrGmrZhrkNCJL2bMAPRjTRaWPtynSwESfbjHwN8ZahdZNSqNSHnJ9pmfcAikzBcBAZSK5KJiEAi52ELixXvYT",
  "key27": "4gxT873YG3NRdgQGFRWVDJ85WtqXHgjK3wS1vUxVR8znHpnSTSew7nSsg44grD7D6fUB2GVjANRRuCEQU11XWhTH",
  "key28": "3CjhXp3D7B9PJpXWeYmopXJ67kEjNhZ3WfLjCz9BWwUWpBYpgPEWRtKkNmTEQK9JurnV8jaSSyiwMPWZCdhn275t",
  "key29": "M6uAWQZm6PoMb1P5RSRnAdNnRpPK4DuhLyS4mJk8RG7bWCi7z1mUA5UZbbngzcTSMB5dyTpN7eSSd8wfZFUXTMe",
  "key30": "4YVt6wXmY3HrAJRnVBbyXxSh1qmM8fwDMKY7aUjAwxspig53x5j4JjubVh24SLVhEBdiv6ksTe6cP6ivdLnzENdM",
  "key31": "9wuJRwLWGjpWURdsQekNjcrJ4s3BYjMVdPT7jrk2HSxmaypSN2cqd3euZyyHU7j9D8guKa5sFJ9rkb6oucpxrLk",
  "key32": "5hPtSoo9rZDZCxTQ6S6yGDkYLEMuYXbjY3yjBWY2838heWK2kX1o9qWTAGYv3jNmVbxrgiiohQJs85za47b1UXSp",
  "key33": "4jpLo556GCadtrpC1528DG8kN5D11DFrVWJCTu1wNXVgd1G94rztQy3a2DWMkxV3LHueorSvZqELQmNSvoGg95ML",
  "key34": "ZDKd92xRyabts1H3Wb5wSvGbuLg2s1Cp1TvefVkAvebxwEuwVz6mwCbKbfsiYT7hZigDYxkNU62pZPS299sQxM5",
  "key35": "4XPqhSa17YcNmbcmNssoJKWPhgcCUkEuBpaHU6ZwoBfR89Ga7bd42xuWHRYdaPP9Z78ZkxsHTBN8JFiNkQZaYswE",
  "key36": "4Xvvakho2VXXXrJ6PpbRgdpftE72L73brKSkTVEujGRSH2vQMpcprmH1H6XSqALQpNyoEXgCdDrgQ1gcsseXNeeD",
  "key37": "2b8WUVRqKWGmKtV66F8HZ5JRKxCjKqT4ttakUt76JjS6YEgXZ99athbozpKQDfp9QGNnnNWTQvGLUFttdX4BNHJ8",
  "key38": "5uJKSefbvwJW5wikDTjSVatkhopUw5WJZfKjSsbPGBnAxGfDxtVkVMA7aMNr6vPYkmfX94YpQkWsD2T1Pi66WJkp",
  "key39": "4x64whmNcBcUN22xgQuwXUZ86sWstSjJhuKPsCVABzfuy3eMgGJb9NYSqcxCq5p6L32gZmkP6C7UUpvE6QZyhycQ",
  "key40": "5vfrf76W2FnRR43FCbtfmyhM2JLRytUdE5cb6PXjFw6JcfBVNVCBqyBtxjc1YJdWxDbdcBU5H7Jm3KHwPznLQJtv",
  "key41": "3imGo66sUMuAM5d1BuAsUHhAsxisqB2m8ffRcNDtgv4cFCKVpY8zWwm68mSXJwudLNnqS3h5PgBaWtqxB6JtJJvo",
  "key42": "4WWaAuNv1mX9Cfa1UbAN5Mej6f8KbjKNnR7z7cmLj7YrB12uZristdvSEdVKHUddXpA6M8YfhxXmkTJARyPcDxLZ",
  "key43": "2vg7z2YyegBzk7ksA4Eg8Vh5VVxSnnjviLwc8iRep7Kr4takEkTGh9PaGQjEC3j4zj1C3uvDykQiSSaAmUHGMMJA"
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
