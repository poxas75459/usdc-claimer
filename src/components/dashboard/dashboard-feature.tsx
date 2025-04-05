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
    "5yD56nGKwZBPHNbbLVTiX9g9ccn563KSz8PL6QwfBw5HoM9TmcmeKUtgpyvYpLf1S8FN3akLmU7RbFgCx5A35xek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ziYsXeNiMHA2gfDhFyLSJvxgCna2QRgqQVjXvixYBfAzEduC9MP4WgSJjt86QVzJJi1oAbQbLnmderqJnZHq7h",
  "key1": "3eC8JCovU31TFKb2VAwB1aMDxBrdg5KAsGeHkriZMmLsU5pECSGz9kbPdXUUZ82dfAVYoRGvHVEJCGWBPKaAWxSr",
  "key2": "4EKE7npbq5EV1XkNiBcJDm4LAE7XuG9C9VP6haaQjj3Up69VFvijwDFjrKPv23QhhBLBWHCf8VdoMxo9Xu9JTRhG",
  "key3": "2ij8oYEkDqCiWqUu5fFQbt3p7cJvtL78xPvjp5N8kEkAS7ZtDuq2sMR8SqtfVTKSqRbG5Z1inae1n9SkHpXL3Vr8",
  "key4": "3yDRKWKhX7kVe3effFGmG3Jgjbmyp5JLo1h2eLzJwRcXSeNrcWVRATJKhRhfzMVXbQnjnLxPrebg3vuTbABwveZv",
  "key5": "5PatfGwtK7TS1bBFAzK97rx4hG2WQACuHGsPffffgcmor2JjAzhQcPq9MxS7dwiMRJubT9eGW11mpxEutqYasYG2",
  "key6": "23f5P861zkT5yFu1w1FYSVoayvxZnDtU6ByRTdQmLfgG2gmuyex8ykW1mA6mXwiNy8Kd2M6o4CZ4YAWQvKF3My8n",
  "key7": "4of6m9e9xqjDjQGduuKzGWuEggLSE5L2F64GGbGNtWdw1jrgeaVnP3dDYRvroW6es4nH1rnCBmcgnGQL2n8EETB3",
  "key8": "5K9tbJUNQdb47GL59d4sPcoRdHkriaFmjkZS4ydtauKDj5Hgcrz5hQrD1HwYojw6t7gk6M47qG6L5iYc49mH3aEd",
  "key9": "2qdwUrFHn35K5f82QMsnecVELZqX146xTeQCwnua3GPW6RWSJM8WjrWeWoEmi5wLWDRxyo4JgoQQ8CPxAmWQCm7B",
  "key10": "4GWFkRQaTCnos4JNPwJ7nr54DgumBYn7ZT8mRBt45H572iahQ2uPeNzh4vMJUGgm5D9B7R7TUP7LWgGpajLrRi2w",
  "key11": "5kEDVhUjjDqsZA99PeNimiEWAgqtsyRvsVhF1wLMQRBerH11yJZ8yPsBnBFd9phRqSXULxX9fsYU9vwW5BLW3qkg",
  "key12": "WDWUjSKgfFGxW6aA8NMJ179HySe8sZ1o6EiT89sDz35vMYpAkVUKmhDoZpJ88yHt6REzbVj18UzvffcpAgp9NTJ",
  "key13": "3AWmvrqKDUmHWhpakGVbaRFdW4vrbPdJgVF9wu1pypkyqhk7E1XLdQzvnN4K17aaQsywzrY1KKqdLDVon1qxQyNd",
  "key14": "2Mpadg99q5HGiXcDyZ9mj28KRPjxDjF6mUqjU2MihcEE78nKNZkkBApF1CVe4n5YGfUTzQrzHNV3e4FBRv1qYmJk",
  "key15": "2wSLpTGq4xVBcfgU7erKsMEmHHupEezeYDKfB3c8mpgUuGnTfdYLkLLcFtQKfiiXDP22K2tkifQ9HrTj1HSeXwhk",
  "key16": "WfFcS7BaRNVKKKE68ZmABDBSRWg43Mg46cWbeyNmeKcwXoN44tPDoSWbYzDVW4t1BNfQt57gNS7rPW1FaGDRGPR",
  "key17": "3k5bZmK5YLv921PXn6aXwGpy7dYpKtLTuibP63xejyuBMgskzRtLCTwKv7h9BHNdEwURtMvVZ6AEmCDeF2pwdvCq",
  "key18": "2SPDygFQ7ri2WKZj1X4vyxa5GU3SobKVkwS4VZiJ7yq3eYSgrtT1pH8mDBgNACmhfw5eCHHDzV9zBxBFxh6oBAcd",
  "key19": "6781HwWKJqd9QNMZznwgk3E8CaP7bTG3iiQkm9u2naywh76UCLguJr3jF2uTQAwBsHWmj4dwEuDP3teaei3AG8hy",
  "key20": "mStrs3LFirKtYkUvVwMyEwwa4Mxoq6Lp9zwpCRD3vn76zS1aN6Zr4UPX5r7XKaR8D9615dvi2VnApGXUCdVS87F",
  "key21": "4ms3ZhyxzaNbYkar8pJo51TyfXqAtAd3DDASnUvo1LYwEykxgmbWTMQ42uJ6XWphaqmNPqVkCn8g96WYxb8WGqy6",
  "key22": "64nAJamKjH6dBqyD63Ji1G11fucu28mBrrByhVxvzR3kqdEBrJv6SdhqTP45kNKTPbqngF8WcUYivQ1T4iYqEs6G",
  "key23": "258yv28RCTenEUwXzv9Tk2PYqz2XZnpvH6XtNXjgoz7jYQW9Sb9Brrx3z6m5QeZ8nhjQKkrBiPKWgM8cEdLNJbvR",
  "key24": "5VTayL7VtxrUvaEVdnV5GcztqfForzg6sifX4D1cvt7pZT1pr4dq1rTsvG6ptZqLpeX3zKL41YVsb15agzhnjkJU",
  "key25": "5WtJukEuBC4QWpFuqUVb6Atun88Q1qZhsmSNKYwuicHacp8x11BQzBwwASPFQHYULDYTMKdoXPPro16biMMPm2cS",
  "key26": "256RZc1tm4x8KwsqmHmFXfmgm5cbokFW6Fm7X8RExcQaiDcyBB6TgAcfrSBn8iAynQieVpERDCTTk7NNJP99BjwT",
  "key27": "5RmKxkNpjHcLAVqFvPk11HpPKZBzXYKcNuoTpjKJfTCTaW46HqJqAk9s3iCxShhTDDmPyJtM8Wx1zpysZ2Xt7g8A",
  "key28": "xrfcMxjGF2RpWgrws7jMjwhoeDP2atcWtMvBJBYjBaYVc51rNvZBHrUMzQhnzsaKvDHGP4U7GCxrBLRVD9N9yWR",
  "key29": "41DkQXLjcPRTd3uiPXkq5JcutrJGiuAqf3AxZ5tZocgcbME66VoPRoN3ZvBUHQduWEnR8NSe8pA1mNfzgnbvUnPL",
  "key30": "6236qCHSgA1Xztbuu1RWxYLWr9VtgVpHgCbTMXXtf7dghoq7AmCdQJFLZDcSFYUtYJKQ9d9Kmov4bPUZdgWRj85g",
  "key31": "4THadowksHDJpwh91CBdTNe8hmSGMxN4C6Ngn7LzEuVT1rPSLjG9phXP33JWvs2jpGSJD5TsYyyNmYSnvQdX5hHU",
  "key32": "3kAYsXtD26rqpuCkshg4xJo9cqoRBodXJoH1ECnAdzsfPeMviNkP2qJcdih8hf8bPizuuatvqKEVvG2MjddPbhyA"
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
