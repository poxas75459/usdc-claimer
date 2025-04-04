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
    "33EWyQrkUTgxHUg1KozygDqutEDFk2Lzk885CiAMXjYGBubHmD2pV31hnARJDXdGW2nLCTZL7kQLrk5m2UyoALQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mycn2KY6KmR8w5pv7jZWNVd2FAbE87n5ptSMu18CeUCiYicKFi6PGTRj2oo14LbBoddAXjwCkFTtvJyT32ncNMd",
  "key1": "3ECr38GBZXsEhyEnthsaqDD3MBV75askvrrFFkvzmzr58yby25qMEGsohJwzEd17ZsHDtqxVdj5AmLLRDvnzXtch",
  "key2": "QLygs64p9cvNrjVMUURS55cEyEy1gTN5fZRoj3wVFux8FvQHwjAvm7PUQKGqZFMLdnrSS8X9HmVgMZct5v1XKBg",
  "key3": "5FTN6eeKxtw5AYiDdbpoMDikdX2sd8ycstLWAJiKoonQuFkbjweViTCQyKmJoGUUd7qjpy2vJ7CNnNgh2BwHjpp3",
  "key4": "2E9nsXTxEK9dDNY7VRSXRH1gXFM21aU42EyGwHScwiN8wLhK4VhGHZigw85YpBuhUA8AR9xK72kCadjQoegBToYc",
  "key5": "14hRcYq4ZHX2ve6ztctRrkx3Xia8FU3ohMmBtTps7sTcYMLEcQAypocUvqPQng4kxsdTjFasMtKnrF7M4euozrS",
  "key6": "URxi3xtBCezVQZKuzVxGgNqjEXnrRnMScGe6eobKyChL1Nm7dEeqpPLGLVsuaio73t2PhWpnXrs149UPuAr3Hbv",
  "key7": "2a7xMAdu1BkWK49RH1Nx2w3hFy8xErMppELcvnSKeMvGvbYqcFq97Db4kbgYGfQp9o5CXEZ6X3d5zjoiuzYuWxaX",
  "key8": "5J5MoFMRMNk5D5wMo854Zyr5eZ8rKzAiAvYPEJWUD2brEUHQuBkn6PhrT5GV6DvTUVsAA85TGEgLXahgw1KCxXQo",
  "key9": "biG9RrDdRKUBxAbbRNzuwf7v5LtkEsH4xYszYnyEgim7kssfFXB52L7ipSzX4smfDkQEVhRXVBDdByfjbr765ta",
  "key10": "4Le9a6mvS9SQceozksz8UNb11ajFpg1tupxgadvkLSq41AjGunvuXH5XZsxDR9hFsKBUmi4pnahCs9321pR1NGh6",
  "key11": "43mKWA1rAnLxqddc2pSG1cy1mjFBBCJZUurddgyJdxNzDMiEnfnHGa2ski3RaodmjK3YbFZvR7Ag4FxRM3KYYDCN",
  "key12": "2W9qeSuwWkWsfxqqLeWHW4wUDP13Pp1NBq39Sg95irnVh58jUHmihhoZ92nzgmH3Ycy4FJhYcMNaSjKWRK7Dsq6m",
  "key13": "3XdkQoHdfNm2XaYh3inSYNAXm37DDh6DEdRkHNxjAXVrHfkeYSJuLFqRpJ2C5xt2hboi1gXyy1PiWFEZqoaESDnJ",
  "key14": "2rJouiLMNQqKnte1bcVHwq2Zqu7iFZLnZivNjVrbfAt3MuBeFxkXEx6TdZbE8uqJJwHTabwhk58N7e1d36Zj7mEq",
  "key15": "3Xm6PoBDr8sSKHCfexPbWhb7KkqyGPJdmsneQixKq9PDwokEdVfWGhvZAxyPB5DxoBSCrsE4TAZj7Ap3wRLnHwtW",
  "key16": "rF8GvexRgyGehmKwS4ddwaCcXLain3CqxCTEpLHkvPUkyrFe2vwhSPhr6axPtekDhqqByQazKXAXp6uwM6aqgTz",
  "key17": "2MFXiRvhFoYGg8fshiB4RZ6nJkRHnjCWMRVxcwv97v1aUDPoS4KUUd8bny3ueyFf6kwyGtxwVkjMceBVyVYaiPaM",
  "key18": "3kFWiYvJhNjBxtibgF6vJUdK46j5EGoBNSqeLZnUZF1uikVcpZLrW2QjkpGuci3LuCNuGu9TBJ3efw19NAWoRk7i",
  "key19": "4sqXsyVuD4mtNEYukKjgv33AZFvWoUjceZuKXT5zzGZ3eM7rcesLRZUR3cZY86Hb2uSKQGKrbLPAK6FSrMSnyc11",
  "key20": "s1odWTvV9caf5FVXn2hVFTC8PrH3w9iDbwrjzv3Rd6yTcUnZiru2tdkA5xyDMNrR4KM32E8tcb9bhZWC5jxr9wi",
  "key21": "5Tw6NDNNwWVRj3ksiVpY3q32ggZndXJjLXZvYsKzErVbFVhs6xtjsXUQbaj6jyVF4143J3jNxStKHLWFf6eA3ssM",
  "key22": "ihCsBCavn3WN3LoBX15cMFjbEZQeWi3QhqMgQds1EmLLxE3r97KnVC7B5piq5qomeRzTuMwXoBicp4yBNJJFqzv",
  "key23": "371B5YyZ9ZB8aDSFdHTz1QWPExfeZFtW8d8dFM8QEhF5Jv9htQ4YkKpFfJ3zCM5UpsJH17podscw47e74v1ZYH8e",
  "key24": "5DQZMtZvMwTE2XbhyX2iQSr2r6hTev1rvcsiF6sbGEgM5WQknrJ8xHB3wTh5J5ebnzbvP45mSfuGYsT7ExLWHPj5",
  "key25": "ZGiDxizoqD3yJe8UEkauLyf7wSUJYYaPhrB3x8hLD7YEsVhfyfKSsumxphBVZhMPq7vDb3PtCsM2YVRAU7wLcyW",
  "key26": "3WjWbrfn3fs3sTfSKGw2G8aaj6ecL5MKmGU9wrZdWvszdEuQ7QgMCRCREHVwCh5MVgiPBtThYwkg15ABiufJ4fBY",
  "key27": "5bMeNapAHtEXLLYDrHU4c7Y9BnZMdb58iAHxszaW2TMwnnrVkz9Can9NC1TFxmNDGHnJaD12cVNCG39ceUa2Ebh1",
  "key28": "3Jh4EMLRTUkiije4WUrRwFzVXhvYTNVnqpaTmf2a7PgSczsuzZajQfCTzXmfYUEaBpbxoVaAAwwwB7nngUzfCaJV",
  "key29": "4PA8e9SaVU4FKQpp94cF74BYotApkUt6ZvRdCaF5SXXs59MxgsJJ8x5u8oYiBCqu4VsEB9Gn3nG3BxdZrfqBrhDU",
  "key30": "24MCD7wdDKLvwDM3MWmRoszv8Pz12LkTxqmkwX5cu1noDLzSYLKwevdco4qhRdXpwEeWy8GagGmYtQEo7j7et34P",
  "key31": "58553C8dpYwnPTZgiXZkY6RgN1o3e91CrsmonsMyjU4EGaFFtjwJ7F3p7J4oH2nRhSPpPaGmUswKE1DvaifYWRY"
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
