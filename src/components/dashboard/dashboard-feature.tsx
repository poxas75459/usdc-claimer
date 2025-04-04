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
    "56kSq8F53gLU3jwajKmMSVYNZ6ESLMMtUBaGHJbWByE7uiuH6qci1XZ1ahmfXAT5WpqLcDuVsjV82NqFBfhWN5ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U6sJ2TLQL9C8dD2kKtxhRzot2Yh2w4t7aA4HsNAQKgtmmot5722B7Qy2utcMbBDgaqnQxg4h2Do2f4DPeyDrbmg",
  "key1": "LHWxyspCtSjgFc42a9YHDNG9tC79xgBfPxCZ79uth8GeQZZ3hXS316o5oKv17augtYciqrCvS2hffZDBNbLnrVG",
  "key2": "5dX2mvYJtrtFNQnkG43zCUuGisQVmkaVrcCduP7sTwDAzQa4zw2bZ2iBJZx566ewwqrzdRQcEp6jbYYVoDwg286J",
  "key3": "NiuBxaB59JaJBdvZ6cKianaZK3feWoXq4WizzV5DMXKDcDmXpZyM4Hguy4sUGxuvAV45pdTGoZXB8W5yCnfAr2E",
  "key4": "3MM8JHq17n3Z6padVUt86qJ28upinKgfRB9kWaLqFxpirisj68mZZiDRWdBKeGqEFws1ujUch2HFVBGD4XnXN2ri",
  "key5": "5hTPVb43fhwGKeVjmDEBUdvDs67YTNhTngKnwfemsj6s6o1aPHpsHLZn3Ck6kWa8hYi35KF98eiaqvZqVp23pBhN",
  "key6": "PgrRoQDG29Nwvv4yNukJUoVCKzWD2UU16p1ixqjEbhvX2ovEsw1W2nx95XKEvvS9AnbVcGGALU42fkEjJnRpiUW",
  "key7": "5U2yGtx9dPJr4YV7GHP7Z1iDsuBnRLJsUV5JVZ5u19dC6cAxc5jhxcy95puEYKx8dNMQzZAiGQr6dgDgNdx9u1y3",
  "key8": "5nDRameGivcHFemhgNCbswP9te71A4zufUuKgmynTLSUeMKJdB3Zn9hTAyufRAMVZNXWX88hhcit3puyXDGaMLnh",
  "key9": "3RGScnDH3wDisfKd74J3ZnWy6eRr2Ww4D9S3yAhwyh6CEejFanTiFjZfJQxGF9Rinsnn6HfZ2eWg8aaigVM1VUtg",
  "key10": "3Jqkzxo18mSsseDWjmK2yTVh8rLFpn71EMDjPP6BYQYbZwkfBVawzH6K9PyMMwjAndgSZV5qkBnB2vaMVCkvKeTm",
  "key11": "dXvZHBxrLsQMFVsXVuqiyRHCMSwQEJkN1M78UVuL87jW745EU4AGZzSFV6PRGzQ4oR2gCnaa7zpNzxHZktvjFXE",
  "key12": "ExxA4N86KWibhzgzon5gqRBYxxmfKbJd9AvKB7on7enue5U91epKdFwwsLf2CRugoejxNcrVBPJkp55MeQJmJJ7",
  "key13": "RnUSjoXrpBWLw2Qox3zApUzD4pUfBWkQoPDtoEkdMJPKZ8Uh5EKaq3X6vKu8NzbAyUhKcS47rUXcm6XDAT5xHvp",
  "key14": "4AMcTAYF7wVAroLS1nb8XciorWUJdL5CEWZzqRB7K38Ub7RjYaaZ54pP4XBXNgwjoKfa8irVa6L6wAuxjZ6VHPty",
  "key15": "2kVnVBs9tPWC1AARtnKwsvwUis4kvgSUN7Yrnf8fArkp72ey6U9LaSBvUHSFGF79RFX3SqxmbkoRTcGmTgoL4UvX",
  "key16": "2Dq9UUHHvxBT2xQRFqtktfQ4xKtuWjhY8cEsygge9LFkYX5Y7wWAhjcF2c2De9FXKcyyB6wYYMiJCTeE1PR7dXy3",
  "key17": "3iq1XVHMCEjBQXHL4v4ytP46D7ub7x3xgEmFU9fq9S7ayTbz4PkkpKEQmRDy1j7TGxDa6SiNizrooNSSYTWiiZNM",
  "key18": "FiNn6wqEdiCxYw4z2wKFyMKKk51KQLBzPqNiumXyoU8QV8aW3bu6gqz9dMysPZpjwRGJWHVMYgtvMbRvUjQwQJZ",
  "key19": "5qr6ZC21vt8BrdWsRKdFQbEBDEvTHxghK3JfugsydGV1mjegZmNrbYprQhkuLTUamZHVJLG7Ety9pBRwDBT28U8P",
  "key20": "4aEXwx3mvn4zRLRKuT9QQU2xdJR5rrd16z1CEP5HyEdCbc3LatLXpR2xZ6C7G38iB6KsDh3Jh3EsjnYtkGscoWob",
  "key21": "2GA4Ppk6yDkxCGcynQkshCjboHKwZhacrhJ4ptR4q9JdTxuDVmnVT1v7JyFaefKwjqS3rrivSuasPiwXXi1xf5Ct",
  "key22": "XcuWh29KV5R8ymTizt89Tym8vUBEndkcWx3ReJMVjDw11mpycHjduUqCZBhZg5ZbqUs4fFV6zuWqq9KXZ716h5j",
  "key23": "42aAkoavhczhpyY8pZUc6qwJ5M4A8XAYMuzrugYszx3QFqwLcWS5txrmjSKP8xChJ8eU1GBubQ64EtExRovgnqzD",
  "key24": "5daejUcTEGQPcRoxm2T9t8P9PEWXYwKfwzQgWZvH76TJSaqke5G8NqMuLXwSVPYPwMNNqcaZpZUhsogJfmDbVr4B",
  "key25": "4CmJsTiPGMusKhgX7zeEBUZgcACCvbPEJEUpvMd8NJeZ4GG9zvs2bGJWZvsdLw2ozTSmRcLKEo2VKjbc44uLnzt6",
  "key26": "rB7qPwWLcrxK8HvavYEi8e8DC7YZUddQtEFYPkUx6TPYbsiZfqWVXd4UeG1f4YSbpA1oKk6wAuv2DNgD2jm7QDB",
  "key27": "tCPe65bNZRijabo1g1tSmTUT7aDqeBwxyfZvjSQ1p3G1BXj64ve3bXKqwXb4BBsj79mpGGYBVgRaKEFc2tfBkvX",
  "key28": "ViX363keHMMhaCjZHkWYHZMaZLZkPhvi9UWNA3KCDQTYgrnfLSqTTaPTYdz3fDn1nwD3hUFLsM2mnXtaZhYNwB3",
  "key29": "2asmh4vGZJTGNEWWtoebQBBR6Kn6GVnq5r4hsAWLqwfCzRq3JHpqMvq7EwC81FpgF1zxUf3iFzYAsaHg7dZ5z9be",
  "key30": "TMNHetS8SvGRsozP2gFBYwx7dSdFPADLM9PcECdqcE1UMKHS6o12jxNRaPwvFZbHNVeCBfNZ2hWC1XJKyFhE5fS",
  "key31": "2WaiaQP8fS8pGQbj5Jq75xgPVLhAB6BeUzRGHmiNUVkUESNH3gkZDxReUZM7ePWv2vopYFfaveqp6qrAth4zwd2b",
  "key32": "fkrEAbs3RdJMWcs7nWU6zXi5F6HhVSginKagonmYCWkstaYswizJ2G2pnhDxxuHzFRowRXmtNzPdifC3eCGdntL",
  "key33": "LjiGaVLHtERNmRsqRt2wUSF3rDj46Ss6PpQp3UqUUCzC2Pk2mYFv5zjct6SX63obTcB9yPyVYQxRevhZiqbYsr9",
  "key34": "4Zy9MU9tXfg9fBsqMfLhyKFkBJ2tqAgsYqJEfuqYDmbRpDbBhN2LTFzMYvWR8eafxwnEwCpjam29o2DENSS2WvdR",
  "key35": "2Uk6a3yQCYpVv3zad9p8HtfpHEYMLKDugp8EkK6n3ZQgFb3V757fMrZ6CCobb8YC3m4QpQnZxrxbpAMrr9uY7SKn",
  "key36": "2g3wqD9Xa61MoT4i3ztMD6aJV3CwKu1PjoCMFJSpE8GLhxoJYxKHEfYFVQBVsykoh1vekLnrVc7qwFKVWhZ7zMsi",
  "key37": "65aTpjGoMDPmR9G91u4S9bXKYe1QpPsq8pQ73a2dxEq8VpWR2DJkogoP7HL4m2PrRob38XVmjb49nz18UQD2PGtu",
  "key38": "3FHsJkqfN4HUKaHttXo2CuWhffngiNraxKDgnuGi7BX9Adtnk1yRTYYNkb2aTYmwBsy7dYAVXXmifCo3HyiV9Mtf",
  "key39": "RuwLX9sEjuUsTqLh6iYPjDuoXreYE4cHUz3F6oGLq3UxdVdH4sp163LrTEhG4dhp2eKUXvdLHp5vSAhtbCgQJtG",
  "key40": "2HR6CAh4sGeUMEn1LATGFiK5e7ddeWuL1xz5291F9qkAQbm7KFwuUhVFKjCCGixB8ZwqbUspup7mqYwGYHFRCsa9",
  "key41": "47WGYJ46qu83Hk2pxAmDr9QaPP1RaRZyeriFNz4CHxjx9SDhNwx8Wt8Qe4ES7BTWSce9rGTc79fZvSqhj1W5sky3",
  "key42": "5Z1aico1hGyaYXgu2FUUVrBfxkvuDNPrhyE26j8UWjC8SwVXJ5Qv5y6n4Z7S3xreHaGnrSYGfnHPoBeE6tqb3uX1"
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
