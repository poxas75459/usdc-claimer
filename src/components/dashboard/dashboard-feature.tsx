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
    "3PvMkpbr25RBvGhzzJ7jBbBY4q1Xizss3JYsQ3jcTVmZLHwYzg1cyuCrk1NppfMRSSCiSCvPWxqtbEynRDELWXiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BS2A9CWUb3srLDgNGFAY29Tzs9EUV88FUjkybf2ivbVuJ6vJm3uq6nRjXJd7U71Q4cW4BAG68hyREW8b4JW5Y4J",
  "key1": "Ws9P2U2Guvt2LBEaDCfmpHu5r5SV1hWdf4D9BmEcSDjjvcifEc6LKQPmLk7FTqj2cBfboGsF3aXMDrsX1R28yUj",
  "key2": "3nTxFQF8PQMDpn2QB35wW1tbnpwwWwgR4eHu8QXtum7KAobvSYyg1AnorcALqBWKkkX4hvqj1tWxKfo1TuYpCBGL",
  "key3": "48AF4fm3h4TnSf3tCo9eKCKk22cKegCmrczfrBXoXzcz64nzMD7FkgoUiNEcxxkGUXVFjpmv4DaenbPKq1ahVrMV",
  "key4": "49n7DFYiQGtS5VKEbDahbhURzMsdGKbSnxeacLDxMSHiVpEoWL8Sk67LjC6D1VYWyccbRrHwhuiCmXRwL4K5gaUY",
  "key5": "2e1s4UTKWvCgB6i3LmLik1gDHHmMtrymFk75MHyTA5MNRcF8UPAkWFWEXrHRN9QhWaUch2MWjp71CzJncrgpK97P",
  "key6": "2n3hZNK5YNGpq7wXfqB56NqZEeyYAbxdJ6pXVJoSow15KU1Fh2TpvuLKCfR1Vm1SGeJShkyXMfyvahAvz9Zdw5yT",
  "key7": "4SxZ8FbnWVW6ArgFA5tWcAXhwQbdFt5qCcSVEguz2Ht51DZ4wgfKeayEqQgUsbniGnWfZi4c3cZw6WygYjgV2NzS",
  "key8": "3hGkUuPvNbwghwcKCMbHyfgY3c6DYDQorKHLKfSjeyzqNSr6FcJVG53FCcdLLz8Zkk1cSNm3FYkcso7epdyjjW3c",
  "key9": "64qAckZMKGVyXVetbYY4cZ9HPZwc53KiQ6fBZx892U8hs2pceeGUSGuPpYJaAFyUFoRn5ZerS5HhSFfg4VRUdPqk",
  "key10": "4NE2c71cfFKUShJE2J4b5ew3R2oqvH5jhSdGUe7P2WXvADvvWbYSvwkowUWvnpyfnhtrkbA4K8FnPUhfjEqbD2t3",
  "key11": "2W1edBAEhVoYxp7bvx9MyS6M8ZiDJnSrLGiZckNQxjdzx3pie3zzBZff9wM638BmqMdTrZbsW88TJTnyi28Zpyf3",
  "key12": "32oiQ6KL5E9TBQyJiYPZq1CS1PCY2Aa6oQ65LJRNJ8xqXsJbKWCKgYmKzCEsQPttaiBERASdmdwwpZTY5Dk8G4NN",
  "key13": "43cdu9Uw1tzVjYcg8TEQhqC5Kf2qUbkqENshMVKsnWuVsAjL1Fr71pQxjtaqczUnrHb7JvfBEjAeiV2MUTYiUy2t",
  "key14": "4rZ7VcmDhTNqnJREfAAh6XXZAo8U4g5nxpCpSxP8ZqbHYR5i2f5UvkfbcEDGuVbS7GTG63PYVemC6TjmKdvXmUGw",
  "key15": "62B5Zh4YNut6RRL2LYoDhexqWq7pY4TKo8CuiLVES8SSdPfFTULnKS6cWYEnj5zWevXjjPfT9yX25FTMitMGBEXj",
  "key16": "55VGG5sGQNzCnYFcyMs5PVaAJeJH1mopKsD3Zczt5PvmgwoetckjJVPyEEe4PH22KJHDy5EMXSv2v7SpNWw54o5s",
  "key17": "4oUpxmfezNXanaTVZUXkeAsNZnhVa3aLYDDqwFdJv8XCkwRds1zWRS6LLoCXYDzds16sjhwsvdC43uvJFa2k4ybd",
  "key18": "VtFPtLwfNbUGT6zrjjRFmNnifDUkf4Qz3CNiYJxHiMu794bbq7wt8MvFUhK21pyqhJ76iDk7PjFd1YEk11pBRmK",
  "key19": "5FDH4aQT423uFU41qXk8dDatQTvDh3Vp6TqPUXo5xydmfiGijpB5KgFFX9iWXjHscGTNVMS6C7BZqSBTrsqyc6Y8",
  "key20": "4MCVZDNbnjy299wmnRsraMukt1twcShMVwj6umpvoQcQzsACNZzLp3qXRo34zuGWJYbLRTiDFqWmqocQYKGoY1NQ",
  "key21": "4h4Gcr84qLSvniy7DgLHJagrJwPgRh1nwneTjC9e6oQwsVe4LhybFhAfrLdkzRFasG3aMFAHzmgJ4ARMEzDr48Um",
  "key22": "b7nkkm1hJ8SnFf1JZNdpqukTFaXUfz9L9F7K8L3hchG6aS6GqZugy8VDwNKagkVxgvjXDB1sKSzXvSNTfEuKkto",
  "key23": "5ny12ChFuAgvZ1jsRxKALza8CmLnoTxvzNgxYXpmWiexqRrS3fdEV4w6xzqFrPrxSNFcAavi75PL5at6z6Bf4Wsh",
  "key24": "kXhRGntn3KXd6q4Xb2PzxJDD2ghy1fKg8jypsSHLY7zudty3T9ygt861TCF3afqKnpyy41nHQZ9KFecbBakDsSF",
  "key25": "S3jDMvynzHvH3fqS8E95iJ18DgxHuZ8i8xPLL9eY4ZVU1KZKGbaZPHwDsjHfoKPM5pbN3DncuzuTdnXwQhAByCe",
  "key26": "kUdGRRLgHvEffVswR736ud8YRoH82TxaNfe88xK77ZMBoNeY8xFkcWoTNaTtzFwcZFs2haHkhyvXEGpyxhToBjq",
  "key27": "2wepUaHTuHtv23eF1rNSE9cRTtkdT6Lu2RgTwo7k2QkHqjmNYDrt7JLjuBR1uz2brgDhryvYMGNt67AKH8pgibUa",
  "key28": "pDUXerFCdkD62vca9rC3dKhEHzUh6kzaxfh6vUZJz3VYjaKsP4jXT9T9NaDMKSF9xMKv567McYmVh5L6jPBSk8x",
  "key29": "5ojegykNPedajGbZb1hkWsoCKczRojZGwitrn2G7xWXqmc4DeLPw7BThNsTtoXGUEMrosbxAcWz2qocbuNyWZUwK",
  "key30": "2s2XoMXsq2zGMY6zRbE5JMB3vBTCnPQi3PqeRPBtJXqHUbK9wWJq3L88AZ84BAyP5srEdTEmhorxFeUtiSzkmTQh",
  "key31": "xCMNyvKkUi62xFXHC3Bmvht8bd1hXpPisKXzCvezioNb3en7wLvEDDMjsrkCZux4rsQWZwTjoG5aPVAmGJGpCjo",
  "key32": "C5EVuCVijJzGCt13NmRTwt5iy62AmrkhWraC9Evi5QDAUeUBh3vMDiZ6VuQN4JLEaco7R4UVdEbBac2Fv9meR8p",
  "key33": "337PPTBq4V3RH3TqYm1XGxECUrte7zRDQXN9RVDQvZea6r4Qba1Ct1zxrG6pCQEPhjewKt6f8GGkKesMrHpSSiPh",
  "key34": "5W8cFPL6dgWmzaJK7uDxWVVoCXV9C9QgWC96DLgdE1ZgdPB74d5n5YUaGZGV9pX5Mgx9gFrN6EiDPRxkKsBZjLEo",
  "key35": "3vof6J9tEoCZJVejBJFTnP6RDKLbGFi7Xh9vahs1gMijc3Ky3AbpeDByd9qiDwWzy6cDznYHuzEAUPUVsoBWtBpc",
  "key36": "5U5PmYaMKxoKjdsizpWPR7ziGie5Nt6cpMtsQDbmiwsLyHSYQTz8sRvUdxtXYPFoXCjogQofknYMVY7Yy3pECBV6",
  "key37": "55x1Z11UHqgfzHNMYyeXGDrrFBGMExR6NfnNULgWKuQZPXEEjzgqonqGTf56Fzo4fiUBhZLtwwivDapu5T2mthMs",
  "key38": "Ed8a3bAEYUAXHaZQuZorogsNCs2MM5MpYiC7ryKhYMyzQn8MSwALQhoELmvrjAP1ndRBuVsDVMPKz7ufUiV1yXg",
  "key39": "41M6DybgHcHuffjK5fCfYAh4nNiVRMVce2ECnXABJ5QD596miT8mLSqkVnU4VsGRqLnzLxZ8YsdLGLJJicwZw5d4",
  "key40": "3KGbgr68MxnBTMdd63qPk3tBqqi7BXsmUFE1ij5QWem1auMpE9oRzvLebCTm7iLawadfSLD523Nn1GhK2TrZeFng",
  "key41": "8rdyLaSHZohuRwekRXPdRGB7f2qp42CscUsNNAJY2rzfJSzVd5Cghr8r4cZ7MTfs94fXokpHvrkKXaUGT9oUnAv",
  "key42": "5tf8NKPi6uyChS3U1VnbPWR9u5GhkFLo2WCY7KUcdAerAvRR2j7BTEWHScv694F32JMDDsP3KD3sJxpxzYTW8vZt",
  "key43": "2mhHJiDA4VRssnAYiJWit17AA8uUFKqYCqnSX9xoH6y4qLbS5zsuPuqx48hJ6jBYXfRubEUf1SN7KVeiLwJrdN6D"
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
