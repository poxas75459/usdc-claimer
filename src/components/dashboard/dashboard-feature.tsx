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
    "4br5rekWvrJZETy3SBHkm31pUGykDKvuKBwgMPh3zSBy4gwAetg2gbG6VFt7dKe1cmWiWP4Vc6pXe9Y5cZyK4kj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUFvK5VQeWpqL9mRWsudi3EzxTP2s28uFjwGC872QxYRVNrMVesJFBJrX543sPuD5ZhqJ8Z3YNQzn98GMqADRLk",
  "key1": "5PsVcuwVunRCS9J76DT7mpBehXtjaDM6uTioLN6pXNCpkKeR7kSba3HTb9QnXjWvnVN3j3cazrkoAWoCnYyzCAg1",
  "key2": "5nw1LcqPGPsFVF7XTARPw6yB8qPRH4q16P4WHnAHvm7upApnadocp1WmNxb6DdSbcnc6rcqu4UjGshPixHCBSoVv",
  "key3": "4oBUMQfasvfZHgE7bAb5qjLn4Xh17RG4UonhKeRjPQELKUKzddJQ6LCoGAEs31vJ3nCKn4rF6sqL9K6PFMs3XUsp",
  "key4": "3xY7KgaBJxf9ZqtkN3mRupdWocZKnNfQewft72R6Y49doEFnbhqee2QDF5i4gcdKo7JbWcvnLXPcJp4RFHHGyyXh",
  "key5": "wVwPZnbLsRNfxizmWfGh9PrYPJk5CauP4ZwZvAjTC9CufXDcpcM3Q7CjP4yk2JG7QPNPPKrvK14Z3mynu4buNZM",
  "key6": "314hn7HzqUcxkB7LAhNzStooaPe9X5PncvUf92mtyZ4DFKJtzUQC1oCRWAW7pfsGcktZoHMWJVapDxZEuvQ65c5v",
  "key7": "3hv1vKRiFbNyb97otPJxzfH7V9zKURg7pCtc7jQ5ixqs6xnKt4xRrJJ1UtZP1nZSPik1E7eYkCqj1rwYej9eJEH8",
  "key8": "5LRZXS6bJsh9nExphX7y7WjHZaTjZwHdGe9Kv6uRXWsaxiGB6SaaewZKbjfpFwPb6WevRapXTrnktadGtNtYQDRB",
  "key9": "3JBeAtwRtPsgJf7ggv9UqPkngSiSazsoJUaZyeNR4LWJKf2Rmde7qQ728FTEfAkcZpV7xgxRRE6e8Ba1rmiejrS9",
  "key10": "3E34z4eCG9vUQQ5h2yRovDLV2vc3iVz1UB5yaRYPbbcRsooCLqnRPadmiifiv4UJtgq4irPqtJ11iqcLgahvU33Z",
  "key11": "VHuneg4W1CgViKznr2LRZfgiH8fPTDxBgZN8kRfsUMmG3SugkLYvjyRTq2Rqz3yEDRWWBtiCfSjNZzRuH7zukWf",
  "key12": "3xnYVu6zHq43GvYMCWs1u1CUvxj4xihmdqw5HvfaJjKMDacQgFVv65ixS59aqoDfqzdGbFBCj2JZkiyL8727zyvV",
  "key13": "5UupfGBg89dpeQCkQqhVV5dQiy71YuwRhqz99shhhM2YJTLsJsQr7Mzp7UdWyyBaiX9Bd2GPzSbYvBN2BxhiNgB6",
  "key14": "5tMva4q6YFRgoPGPk5hFfNcS4gNh3z2Ks1quG9QKHtPeK85xQkRSHTtR1Z1obc3vQntd5mWHi7acLD2xEkj1o6Bs",
  "key15": "2LiaBwJshz8e1mSgYgwXXpNFgWwfoqwkXG4BPK56pb9MMv7wtiPwZcv8mDMmrbhmUXUDxVZNS9B2Wp7eERGs9HjW",
  "key16": "RMiQh6pN7hz8s1DDbLFpUzLPmi8f4wgFKdxQHT45mjyHXS8s5q8gFNkBNZRLi1mq24TVvYp1pWXdBzVuKv4x5mh",
  "key17": "5BvUnEEFsr7YK4L3cRyv2wa5E6WVuastw2wnKgYtJ3m6wxW8ducXUsLoWFk3K2CNeWAooYGXFND6HrUjGYma516d",
  "key18": "YgxwZKYymfnoQDF9GrsMoS2hRhFL2ZgmkCqUC4X6eHemhLqaAH82YfPu51wdaFmM4HAwCd2F7zQeEN9kfU2DrxL",
  "key19": "QqSrPRDPWVDjjBW4t3usGfEuNzPSzjhBRqWWNo8DtKQfiJJW87KRRBEyzoGf1hxp787kPfiypwELyxYB6jfkSXt",
  "key20": "5KMUz7h5q3c4NBh4im1oR1wEbdhVn6eXco7qVcH4oLB7NDeh9ZUg4HCitaDBroapghe4xEYtp8LVfzXeG8xkwinN",
  "key21": "56qK7t5oBDcWtUhoHv7ST4GX7EwqV44WQjRtThFVCQBhRZjaWtbuGRRHQzRGYnSxegm1VpxribfZLsu67XC5e9bm",
  "key22": "22FUaTop6rDbGxhz8kFbF8ddeLbtE4P2UBZLT8UcmYZbh2H58x5GK2rT4ZELAGBcVjheTTwSw26xeHbJnYgXVvPE",
  "key23": "4YW7U3P97NwEbScuquYTYu6VeQsboFQiJgZppRvJTdDgzw5vwsEb61Xk9gBXPQSssX4a2yT9CGfSAYnQQteeE9D4",
  "key24": "3TXN1bPpguaZLXRoPj18fqFc5bn3Yz1eFGy8KAXAdSXSHuLNhJMZaU3QDNV9XNo6sRwpuWWyKuMtSKEpA8pbSJrD",
  "key25": "2AMMtwDTefMniLZtc9mbCWW71otchZBtb2nCR7Nqmse3kkJPTttpgS9yb7rkMoFFLYUyfXWvbQku8qo17Qr6rhqc",
  "key26": "LCCXYtQvNyevrfHXjTMmAQCGwDzQ4kThNQc1mjnBbxWCs8Sy79QGiCwxEePFH3jtsBZJPpcJyQKqpozGF8dw6Vy",
  "key27": "pQnobZeaMdi8f1vSzrkba6JkUex4abrz6siSMbzubpm3VA1m1uBfjWrmMseFRu1E6De2RuHCezFWJuygekY7pvS",
  "key28": "5hoY7kLVzTQ1vrjrybr8M18EfN4kFDZQ5jFQno3JqFTt6aWjEBLknS7tybMJzE1rkwrtFb9kANVsBMnAWMkoaC6G",
  "key29": "W5jk5jL5QrkTZweMNUrUiV12xbjXojQGrzUdm4mb3xmmxACJH3b7x3GbnABZH4tUHLtr7JF4yBWs8x3RoMYD87d",
  "key30": "jXg1W6agtC496SK8khv4iLrooZ4gSuvXgAd4WEhxUb1RVQoGByhpU48BacUDSf8Ress3Q5dsSDWhhhxLSLZb4C9",
  "key31": "qThtbxfFsTcBzY7kifNPQktpwpdxqUFj2NwG2pDKoYcP4mixzTBBVm7CcocyfnE268rfLKGug65tsosXvB8hqRU",
  "key32": "5CrWVvEgTbvhBTD4gHvjmXBH68LPKx51bKmiM7Y3sTFzREmMZMqp1xzNmPxVrAZojT4z7YGCAUKV275ACF18oX2e",
  "key33": "i979AGLFFYQegVYiGN4zxHcNNvxT42Ku7a1ojBKZdW1LCQrvkhTsrS3imXG3gHikzwaKD2NkRfkDgeWGbzz78vN",
  "key34": "4utxDBbjrLxw4LVNpw2V4zEf2u6hZeaUM1kDvjG6vEx8P1kZqLCAa1NwMmA3ehefVtBKuePCiWbaK1uV6U6Ns87j",
  "key35": "5sdxPLTunbhR8La9yR9Y3NVpScn6tAuDDGNVPirs2H6k3MSveKumMf2x4ueWsakbJPz3dZzeAhZT7mMdYBNcg4Gq",
  "key36": "3Y6PFqDhRwWSr8ekpVp4abn8dFLft9PQntX7UDGjip4dXY55amKUDtWEcaxK2oYLUxY5EhYtKBNXti93PTLUCN6L",
  "key37": "3dCT1pBYRrbNbGgGU2mW4JeZYgNEXCx8fBufvmm1WivVMPx4iaiSEBwUDZc5hx6dx1CEN21JFzkKqjYi6vaLawM2",
  "key38": "3uBzkAwnk3ihsKtMLiviqSMxWkpWUWFwq4fi5v1LvjkZjSmtxcYDYVuhaeEBVRhJVFRHnyywe1udWtsUyw7jwNRx",
  "key39": "fpY9pgX3YNeHm84T1QrhyuF7ahgXD8KcAcn1fFSdonj7dGa7uoY72ZeGDtWbTA8jv11nefZNXYQVs6jh4TPQhTn",
  "key40": "39MEuQfRkiVYVdovXn9ymuYN9Mz731KcrnGMFwGRQYzoco7J9Gg5hXPnFFW7dm3fmmG5PeojihWpZYhKpzcrvYrh",
  "key41": "4E4iRFsj2x8moJ9muPqDq3mJMARHUbS2aM6UrL8XFcr4A6tuVDP1yA6UQux7baxiDdu3avM6UKjpoiVLf9ES5ojt",
  "key42": "2iz2GJFYLgaAna6KkmZ7gh93wkwzK3Y8zbJQuyPSu4jzkwYd6xbiAmw2HwPnzce6KMb53CkgqhYPXKqAxxuGCiVN",
  "key43": "42sFSnP2WTefnGrnwZTq1vBttQRnzKdLwc7ucGdwk85GTEWnZ5Z2GU8ynfGurGDoJsQ8h9qoBrvAMHc82u8crvE3",
  "key44": "3LwwH4XnTSbLoh9q3PDdMNkP4ERLzbgeFbKLMPcfcmyGq8rSfjtv3LqXphnTK9d1yiQzHwGmPmYiMb6CQ371xNzA",
  "key45": "5f4BoY3T4opbnpy5PJGFZvwC2SbWy3VYVXvSkqW4SJHVVM6kCCRiZCStKRFL47eHjHzYXiZnjaqra2oPhDTPKqWg"
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
