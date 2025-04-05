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
    "4aH8LsWFUcdfrTnLfqY4ZAvQFYVM2uj8pC5rDwYM9CpAozukxEBTuQJ3WDkMZ6GYoucWbXUVPwcSoX1iSMsMj84B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mh5kuRf5VBeK2HuSs4UMr6vNPLrakc58HiLsQ7GoVbKsCPD5fkyd3YnjPPGJ99kBiYqPkTqKJNhEG8y5WUk9P3G",
  "key1": "3djxb6zPCCCZ3UrjWC1LW1bNe84oX2DoaSFJ9fbHbDxLBXGB2o7cd5V1mUyxakHGUBaPxyD1T2UcZzvutJEA4GJX",
  "key2": "66ABk7xRaUqF2sGDWBJErZk4WnmfyKbJ16oJxeYLyfirT9bkBdvij1sBQvERYUvXqfE8wwPMLkcoicnKMWTKS3DG",
  "key3": "4C3wFA7fn9dR2eHLJi3eWu1tnRsm8fA7tGGkJigxeHvkVqDweLqnhHwPSYhufffQv6eAbCXkUUqRZtCiZyVEZxx5",
  "key4": "4VrvwvM4iaL74ncTqQ3nHn1T3wPw8JcqsvjE64kTxpVYJ2R1buFobXacRaUXkuKTzRqj5bVSTFN3G3yoR8M5y35g",
  "key5": "KFhFguuGQZjS4pZu1BV9ZbU3z7a7TLQxjMgLJh9sSqsuayTrfDdMQAAs3cyLjWXawE8sFokNEF9JLhWqgMdBeKf",
  "key6": "oXoeSTVZSzYQZbwg8i11hrw7DRFmNwz1L2M8GTYWEJhM8PUozk8VLrSn5ztqYEfZmWFMjMU6c8TysbajT6m2LMv",
  "key7": "5NAsCFAhT6kV4TtzBYrkkaYeaffH9nqW2DswhJRmHgv7sg36Xj1VZvcmXaRWwDtxW7MRMn3ZxBzFNeKeEnCRVHCx",
  "key8": "62xW7v8wDT9XTGBEykemwna1Xu2mpCjrV3iiHtSdJCkrTbk4aoehz5MVSz95McWC7WqYnVRKvKuVxvYEC27xRWED",
  "key9": "5KFp2RBfp8QiHJkcTRsPi73x84jU5z8XNBR19CELvqiENUSUmxETgacWdFCTm7mX9hy2XyNphqt4skbkv7Jod6dH",
  "key10": "PBHhNhcaQcy2Ux96HTxcnjNABcfNkjQXwgJw8W3qeWPAj4tKRTnjG8Yz33XsJagJertePoe8vpaWakVZGowPQaY",
  "key11": "4fPxA7ZNJKtn785dEWSgEtLTNMH5vN6TDAssWSodqNSfZtp9fz6Z2LpzhQskLAG82k71mwL89nqF2238U8hZRenj",
  "key12": "US3684RawVsFYaZHSyQpt6FzfgJkkvmkDfCT5JAEdAd9sV6e9mULnjYP7TQqGppxQd5XGmGbVqao9UckfA9Scmt",
  "key13": "5GNd6PnMZidfSVgEu5HMHm4jisbeDUV4QmoDcAWGWd3umxMnrXtXEqM8b2yuVnCCBytfmTkS6vPh5kXhUgfsiod1",
  "key14": "2XLnhFefuG2x8EdDRUt5aHCHPhSHpiX5Ss727AZJ7Dux1kNcMshu5fVZmtLEtbihqvNRZrJWR6wfgeaywpE4vXX4",
  "key15": "2E5zAyuv92KRb9r5Jehkqdv6ckZ5EwCAGF7P8tQX8661iQDYx5QqWbfWcsxy9TcBqq1o7CMFeEhELxfgyjPH5TTd",
  "key16": "45htcrPReToMkURXcLQwgqMyQp7ruk9Vh5NSUDKKZxsTK9gh5VrnFD8NgSwNcoyBsLRixJduFTTfRNtwGr2LLgvw",
  "key17": "3Nei26NcetWSreJNdfmE9NhPmcrHfLdUyrKaQfg4kGPyAoX2pZ6tvetrvKQRfSGWMmjEQY9MopNn19zg1VisGWyB",
  "key18": "2bmViHwoiekijScfcEBhjWRfxVEYTKAKqRxRpbZsiMcBUiW9mDDRjNH6TZC8A8HL7M1MebDdjq7JxZCbcP34fNL",
  "key19": "QqLDwxtE8t5iWVGPhG3iAmKESL91xgZjYv8aKgwtGtT53htGQnanFbhtKbdKhwn7EvuFevdmyB75wS8Y4QXS4uT",
  "key20": "3kDMgzSGoVTNMWkWD8n947uRMBusqnXqbYBwh7RqXiw4P16waR9LUxb7MWeEbugwAoBVkA9sDVS7BdxKCTNZ3utF",
  "key21": "5g6JN5P7gpjLypysPkmbbBds71yZCdwkjBExvN2S9P2ZxzESfw6DU7nZnpdYNUu783hYpp1vQiMNk3sq6RyBusxH",
  "key22": "2dkpjMqTFGL7i3RuiRrQxyQ1m8AantmyF9uJddXLFMyuuqx6njnb9jWKCiAA4D6iEBbCyp9dNdpkNfXBEFYvpKeh",
  "key23": "5XMhp4MMkQp4t8wF6DZnoPyTaJcgTmDEEFQyqrtymrteZ5bRo4CNiHVyYzgojdqdFDwxE9fTujMhpmHq1VTxAnv7",
  "key24": "5JqWWFh6QkN1zxC2bs1diAznwpEwk6ny4zjS58uHkq14RmCtwFmrTtKxbVLryctHM8NAQvsSggDDBmzhoieN12eg",
  "key25": "2jBPXeS7iv2gsviguyqmQ7REt1wmPsKCpSJrkprfsK9Cb5G8VybZLvtoAsb1of1X33zdtEhp7wLRtu9DT22VpYHM",
  "key26": "3tRXz19repVUe8aChHTnHp8XCcpSbdoQQX86Cwp7BTQkFeCYXw5pK14gUPacfT1Vobb6ovi94jk8JTmwJMRAZcCu",
  "key27": "5bfvV2g1NRq8FGt89Tahz3ct2nFpRgK6gNVuM7W86JCinqPjA4mT6cakjL1UMt1DjLHHKuKgK5A4Nhkt87PQHzq2",
  "key28": "4Xb7T3E5t8ZRXKc9ipEgTeyGT2MpxN9ViS3os9PqBAVgT4vSnu3tJWjWeYQNXR7ckSr3QGaCii1hrmkhGoMxDKSG",
  "key29": "2aGKZtVsWsYVUwEkb7Vc6GfnygxwqURQN5JvvtfUGznDTQbt66go7XpR1CVWyWEGVHmdUHK25XYUBV3zRXHvrwEY",
  "key30": "2qbWhfqziDM6y8kREd4ZXtFdhusKFNpCGuMc5zYzbG9P9LXjKVMJS7yTTkw7mGtZXDQU6zDf1hF5mv2us2Z1dKw1",
  "key31": "3uCX51rx3zoJF8cCkrG9pBn1N77c85scbsSK2QLDekpoP9KxvGtVBMeqNMRn62Jz5RnU92EgV5nk3iEqFMatdbDm",
  "key32": "23Qxt5RdrPUFxEr3pFaHmsDqEgJzaZsBnn2JbxLx5XvPUqYvnwJVQ5s5vymCRHhsyVKt44ccE4PViCKKKH1rxb15"
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
