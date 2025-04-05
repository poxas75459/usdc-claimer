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
    "3CgaWTNCE3QPHRete2E6a4XB13TbHwaDXx1CT3gSbtV6KfBYsVrHvLGxbyQSPJFSAfeTKjhgYbosUsUjPLJDDDRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t977VD8FkDV73jvFPqYvFjdP6Yj1cmizYb1pYM1FQdWPPpSyLPzHCkRTnDm7wUv5RxMWFJ5b9tWTaNBiXAV4w2o",
  "key1": "39fXDk5norFqeVPQNfLkrBQ9EhFLQA8Skfo9roGnTpGdsFi3JtziBjCLCt7qHtt9pxARgNnSJq3tnRZa644grPms",
  "key2": "3XkyoJzDCgYXtGDTTdp2HxipWoPbRcEcXvb2TmUEyCEVn6G6oRzeAY66VpTp7Rj5PDdYynhJT65TKvUq6wZzvEET",
  "key3": "4CynVCeFdNpZR1FZmbCSs1uAkGMQz3JT1RwkxRatwHuRPGtzFiwLa3jKijnp5XdAhBUR4FzYxcdwmi6YZFfR2v4L",
  "key4": "52nejxuM7cRkUxYEYw3hmQZ3YTLkkwvey8jaQ72gBZryC9zcqMChvuSiC5hHfXBhf3y3aTqMKEyx6iSKXztxjbrW",
  "key5": "2LDigQGYq7QvMUrRnNdTo5JNG9TVPjnxcY1FodggQ9zB5mJZMTkHsBLhJ8mXpGZhseu53Nci7FWJSk5V9EyLKdHy",
  "key6": "2j15Frm6Sza3JVGrBcykeazkxzsZXyMBFvShNzG4YGqHW7p3bk5VAVvBcVAXL9S7o6QcED253Ak3xCB6yBr3ZdZB",
  "key7": "4hNSvPXfGG32gmfYyQEyWwWAEq7bHeLSwMbYzAr3zKXXYaE8XhP6XuhHAtUWnthC8Fio17gaiDQRPkZ69eJv7YY1",
  "key8": "fummyAQbso417quVnMV4MtLcbSt1RYRrvZfpcuLq8p4xN7oUxCT4QoDucFDa2WqixSi3zjUAGVJxw2YR8t43qiX",
  "key9": "3io3aakFbgTn5NxfG6J3h7eRFMdAAvkfbnpSUN64WTPsWP8eYL7LCgCAbENUHVeLAeGLVdmx2W7njrstiMZg5sGV",
  "key10": "4SSPRxgaAfjHwmpUENCWJhGL3ivZBVDFiTHWCLReeucrahrpLS7MXU7EnHLVymKSLwasyWxCwDrKuAd8Lh47VBqp",
  "key11": "nYqQQHmUGBZMARqCHAY6PSCKUNZPpu4bi8Xw4ErSbnbdjVG6ptrvAnDyNwBTe6sQibEfMJwRAUiBiVd1J5XemKL",
  "key12": "emwQhDdaiu9E1Y3sRNVgRys91mz1x8FeNVLjEP4oTzoFMdfNeFuVXLBTmtbP9uVd47yCyzDdeXigmEEBVuSedBR",
  "key13": "63Xb5neKeXC9j58c5J6RTdfHTiKLMGMSTUg5jrKToCSd34zKmGABkvS3rCDBetDA8UAn8r25fPUPHiTxSJoZLk7q",
  "key14": "5H8Tp69pTUqEa4wqpZ2dXUDWDSbMnFSS6rxJiA3JHrMUHzsr2Zj5LpjQ29mPZd4r93QdEXMZR5oSZzx4sJL4fFWp",
  "key15": "5gq1JuBEAUEdgUbk3FFQSQiU9n2A3kaKjv7jgMw8JRVukbkFw7usZbRu7wZzX3JJd74aVFY1uQ6uGRqvZ55hr16i",
  "key16": "4Pj5eUFUBL6feakgsRA1kAjh7pME5ujEMUVr3r6bm6SggVstzKCXQWA2KKkM58sJwoHcMrYxjTRdXYveboscBBsT",
  "key17": "21rSifbsBwucdbobK4x99ADSUkbwSGQ3uh2wGo64crwJHatvsgNhJcFgN7MWoHvzu1kXQ5KWFWMhVQD6qpFgBaAE",
  "key18": "521jZq1yqPLZ9DtwTijJL9gTFiRseixXUiC8xG78o8E7ab2Bh5eudMT67TQhu3n8npKbt32fApQAAMYFDAjaHDcf",
  "key19": "62cpqCKZkJfwfUPDnj8rKevihc4ZCMmoaqdiNcvvBiHedNoVGcRcvDSpKBFBiqRiWNLrn2k6VjeYd8cVnEoLZ6c4",
  "key20": "j8K44jhF2QhsLZJ6jFJqzWdSkkjKS5Fcud9km79TagK5RvKsoeamgqvBB7CX15CBRoHRDwJDcyeLXAtACRJpd1p",
  "key21": "2NFDW26unpeFrybECQrykfTfN4Y4UuMosEbkmdvgM1DfsUFLV1JJPbNQtxBrobjmDw8Wa5nTjsY41NSeydsx3XYX",
  "key22": "2LUh4vPvszigVEFBYNCu4AcMcaU8tU5CkNLWzFN5tp6C8Wnj2yRtzEHP4PjEvw1w6rnWjyeNX1iXubpRrnXt9dJC",
  "key23": "jDXrwRaxr6jX5mMpdYaX2bfgPUVDCUjRhmtFaBgepqftwJBS6CNGApouNyewnZKGZEQvyqcnxzQ95dJpPPiZRBF",
  "key24": "5PDmwv4QgDXuXDpYr9RdN9UXELvW7XH39CeUyAbnNNzF7Y4d8Diqr6EZPpSJMQwoukVXGvEpekHY4PQAXSfv6JRg",
  "key25": "2vEbjEae7W3zqPk11dz8DgtUkUeG2cfsny7LYo73FJ3d8ZxQw2M8euHDEgdLuZ8EWLzjsFMWEnmsUWA2sB6iqiDv",
  "key26": "2GkFzybpS1DUoJGepf7UJb2t3wUQ3yjfkPMeCYFpipjrvgypeQrykxsukUmppuC6dhbwEn5unbX1qFpsdKVjCuQ4",
  "key27": "5fBXmgFQCWVmxwh64j4aiwRZBLXgdo76b347TZFEYYZATSrzoWvHVTGCp4tYB8AebtivtnzgaHKDDWayPenqxeFC",
  "key28": "5uzvT1tUyo6X2FRLzBNxu7p1LU9cAPxdhL11Bo1U49AKmjMyjrQsFotG3XykHjpyXrNUTvnEMjeHSuKdux4PRaeV",
  "key29": "4U8i68V2y19tTSXXcTHv9NgG5ng8h7HcVoaSw7mCGcEjiMw3kshSLuJ6F94EJRd3WLFff2xdMNkqbm6zKSNmnLHp",
  "key30": "zc1iYp794Ypo6kspq8r5uubu76wdUvfBjJ16n1hyu3aC8PjUA3kiqo8qFyvR8oWUB7uShMdkwTPc1NDedVG8Gc9",
  "key31": "2i94aXYTB9LHaN4bdhUuZjmL2uuL9VhFjGSntrBaC1qi9fnmDiaqiN8cJHvVZyNURY8freHq1SMQXvmTra8scvYo",
  "key32": "5mdsjCAaJLhiTDbs28ipTzvPiqupXH6nyGAdp3zbKgSYhnoVZx1aXQETXyZU2tGEUXQznwTZfBeqbsYhW3YeeQvg",
  "key33": "3UvFaWXzZAo25TMshNtyoTvLZb3DZMgGeY34F8YFA83zhtCAXKDkNgrJNn343mDYz7Txe7S4hC4duT1LmFDu4kZF",
  "key34": "3P1iiam3ceUuZQmFPp5U2xnca74AdwMgFrfiggwwwfKXj4hC1UBtQ2edJxtTwkGgYeoL3ugPcJ1FzDA6fvfsFF6U",
  "key35": "2KgkVu6ypPpu2Z9Qf4XhaL34HVBRnGatEEHg9W2WS7J8GFL6PakMrWyVFX2rqcQSZdSkw5yTc1BGSF35g83TYaDw",
  "key36": "TLXwvXCWzH8bxF16upYkxGnDjchDAcAMWZEvNAD645iXA1eTapYhDy2ExXunjLh4usMSi3WsLKnbybcEyUepLYt",
  "key37": "3qQpPH28askS29uxZyoqneQbz4mTH26mUZyuMXzWv1hUtieDYbXMZAy4jNEMftYw8VKgTfg5vrgZpBqs13LXBuV8",
  "key38": "4AWFrfx4GxREL6HZGhiKVE68xLMTLzDvTWPv4M5tiBQuijzd3WhVshfvjFRPk4bXzwgeQETwtA2UbAXTGraygixd"
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
