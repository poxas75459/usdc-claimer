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
    "nU6n2oE5yPLiicxjUtoVHQnX9TdogBptueA4119NRLbXxzxtJZRRnMxaPXjLRVirTho1yrRj68FeoM65N98gnf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SsWwSKB3YkeBeeKrbtkRMNn2AjV4XieV3JhaY2jASzUTz4FuTsyGhPQvFjvvT3dcBHAqzkNfgL6VGwQyABrwoFo",
  "key1": "3nirxeVCq7ruF3DgEhzMpQZabWTug96cFmS2pui6raQTsevPM94NpjrWFbwikyjpkAcgnUjrAxWW8EHEbqqw9SE7",
  "key2": "5Vos3o8cYLjS4HWY5MgQa1fiv1o14AT3wWLNz4CxzidqnDV3VAgTt4g8QMNoNxHK8pachi3PDKUKZSaRns5Y526X",
  "key3": "24z4sH6Hp65SV4nTqXp5PBR8nvCp7X8t4Jjzgm1X2AS5FH82HAiw7Q1ySje2yFdPeujyQTb9uatjU31Fr5WvkRgK",
  "key4": "62Lo76BdjdqJzHQ8J1X7y9koZLxNgBFK9ADz2nBVoguUeGjZi6kecABnbwY85oZZJ3KWKEzmYFcHThti4L1Gs4Zo",
  "key5": "4XgE7fMUvtoL4tVG4tcW4r6bmfwUa4gFWQ1cSsk9gY5AAJ4oJYabzxiQVRgjx121kNnzGEt2zoad4sRDQiiVRsZy",
  "key6": "GieHyMmQTiShzXtSD7KFGDizeFFEJCJoMoRhC2WdLT4WWKdYXJ1z1WAopqjoiRL6HqJ7TKVVFSHVYeXhav4QV6f",
  "key7": "5hE82E9Hzsqa94aT1K5QGjTW8JhNyYqpTc1ubS6ZtUaDH1pc7vxQMkKPxVMnpjchDtEJqXJYiX2QPUJC1mDheimp",
  "key8": "X3e5ZhSkNCXoRgdQJKtDma4FejDa6xX91iZZX6KznajuG6e5Bz8XiNU7oNktLMvUGZprrpFfRGUyfa6t3nn1k9W",
  "key9": "39dQ4LEiJiVuN6ieuYBCbxQK841gsdz1cwxWfcX3YdRqC6CPScSPr4dj3ktR7wjyYviwUN9kqg4916QdHCt1BC87",
  "key10": "3aAifG4cqs2SXcd47xYVSha3ZcwFdc5iCEcYRr77nRXZrW3s1njaWVWfEb82oxyttYNgbzPpTZLJZCfJHHFcJcsS",
  "key11": "5unme4QP7FzVYLoBbbKVzsSukaMpmcnhvmqDHWcuWvRy7wQkpDx9EC8pgm3wA5cYq7w9CiUaTfjFryteQTTm1iAF",
  "key12": "41M93FD18CtSvfukbTqUW27zH6ti6dMfwEpAEVksdynweXUhKysJA5qisPbBdiugeBpDineNfLv1AbPpewmBwqzJ",
  "key13": "x9oRt3rdBoWip2t1i2rnfcGwoeBd73f5pj1VmCZApSU6sDU3VX1QK4CQwjyj1nTkZZYTvgbVSvs4gFuBrwgKWvn",
  "key14": "37yD1c2ZAQ2mkD9PFe3CZtREV1aqZLrhQixVhcHq1CRUDiGSBZe7wvb1F8tM5njfyWo22RCaLcCCxPcQcm427fsD",
  "key15": "4TJqXWhb1jMaP3PJMHcyEeHDyNTyZjEVUyDwe832Qw4VBcsfQrxdhMLiLUoNCCPGUi2TT7wZaxF8sjZyAeioHCvf",
  "key16": "4GbVbi58ihHxpZ7WCm3Tt3f8VhGffPuVRQFhgjbxqBgzQLUL5cnCexTAcqanAPN13MHAoU3ZisaYFr1RWoP4pvV6",
  "key17": "3Y71fsD3okBLDepTdG996ML5HTFCFGE1FZ6HsKFTJ58rMydVehZgLXy5fR4BTE5vCn7Wm5y362fuoHdrQz7dTJJo",
  "key18": "5cbihUsnCDQ8g2vrf496KzTuGi4N3eEeQMgoxpRJrEJAL5jLi48yYkT8AAKtscziRdujyRqgjuXCM9ufaHwJdGb3",
  "key19": "535vLQUgZW94F4HPLTMTaybZBunM2YaqsHH2PPVmD9H3JC4N5Xmid4VdNKVU8sv8TPCk9TGoobPxk4KZaBpYh5rw",
  "key20": "27NQgrkwsyjGtZK91sZTSGR88g15yMC8iJs3XiBTFTrWVRDtEUuuLwoSvhRhLak7NeHNj5tWK8sC6jzB1fj6MbRD",
  "key21": "3khKG4APYEAeks2KcttfWAfezP3mtAdFJyGWtBKF7PHtNdJPcmuDASpcC2LbV6AWvJeEYBPoKx7KoTRMZ7E4ntAm",
  "key22": "34ZvdhjXULoZKB45DPcBvWQWUABLfYY8o6zkxb4yaBj151RHf1d1Y5C4gSKvE99dLPffm79YpE4Z87gjrP5fzWE2",
  "key23": "4SpvKwKnYQ9KbrC89ZmwpPH7PLbSskgDc8DoUia15gDc68pqcSQDVkqeyzsL8W4jFWc39iNN8ym8vqwKh3vvboBv",
  "key24": "29juahYamb2fzuqzeGM2U7jEz5iBW9KhQZCNQfsVjtkgFs2NuHSgYT5MeC6wDjAzfGRwytPJfrkVffQDsnSumupo",
  "key25": "3fwRGNGJhMiAM8aQf3U1hcCiDLV1SnSnGR9VEDEmu7eMieyC7hKVctMhyMweoAhoSC4D7ucXZvfCV8T8oRS1oHzk",
  "key26": "28iRVYehVqckfEdGatruhwgXoWGpkxEcSprec7DmaZBpHhjykUanK18tKB4kidEcyd39uQhULW5h2Zxgopmcyggm",
  "key27": "2dWjoWJi1maqzDeVfDwseuqdjG9pkWYxHJerqqvCXtKDpC8e7P66fHvF4pKVqmcmio2ta9LuFJ5JKrQ9BzrcMhpj",
  "key28": "4otxJ3HCtW38tzdWBaUN4mbBQ5R2J4XH1z45wXbpNrGSKzVoxncAsyWpTjTsGFL5e9HFgxswbzic5w9CdnUNM24c",
  "key29": "5KedcFLaBgYsjwsnxa9zkH4zkHjbF6XyCtTiVWxaRUhnA9Mf8cjr26GTSDc69nZthJ3yTvsgBwT1cAcjoNqDp5eN",
  "key30": "45DEHYQCXcgpUC5jWJQTgfKKKutBvaFZ4YRxoRL9jkMU6gA39NUdpn1VKnAHhVipF8DoUcCQ89eiMexVC5h4Bqui",
  "key31": "67TmbYSt8zyTLWkaXJwS8foGhyqDxSihsAsokUiZ8dEWGAiVqJ69XrQpMiud33v2wDNLpvJSiMcqNz2GfMHoqBZn",
  "key32": "5y7Ji1QTtePbhiDdkg9knXEou64FBfJZ4CshbMEogt7aL8TGh1bYrqKAoqYN1ZD46BzW2gktfYqhQnX37ChMHXox",
  "key33": "5kd3tD9W4pKGCDUH17WbDTLH1Qo861z89rWpxsGvS78hkSunodXECwytCxodhzXDxaEXGGWxZJFXNmpJYytRohHG",
  "key34": "672nUjAYDVDzFhcrgKuH9kQ1cprezPCuQAzZtrpRrCFU5UnoitecTjZmynTGaPitrXRfQTEkYYxcwTUPgodtMtCj",
  "key35": "5chwBtjvppCcx2DZ6mcezevTvSTZykYXApbfrPAaYMEnfsFJYsyygQ6KVzKg3A9KsG85EQ1AeJbyRECGzjzmMKmm",
  "key36": "4ZhkcvLcYBVjZjxQeYMjzbf3ASRqZLM1ntEswwp8JDgp3ZiTdgeroiVSnE66ryRsnNNTkcjCTR4WSinYu6CCBkRe",
  "key37": "5C23NKPsV38ehrG9tEzAXvaniTX2W9JwW3HvkNfNR4oZWenwQKRp8XhvWfQcNRTyxpG7x4rKbe9rZaNjNhQGKBwF",
  "key38": "4BnFbLA2KxbimUW6f5JRm7K626BLc5oFGe3DECRXsJUha5CVgPfbwdNhoCJtZc8YJtZi3wXdtEQMaHSwma97zCyk",
  "key39": "3zhwWwhTejejPwwBsGEckRqxrczjwyiPpSu6PXgAotp3ge99YPTgtKufB65Q5KNQ93dLAeaBjMvN87uaajGTweAB",
  "key40": "578vQJn6nzyvqQ8JwCwJLeM7YEVrpcMUpCQDoifrNNW7TxNyNL5MqBS6uaEqYYyC7rJ7txqpMSGbsdhcxusTUWwv",
  "key41": "3GKgHmhWYbhCXfPbFFYgEdhD46jpKq5FycJbtAsVX29A6Yc6fDRLAKsn6UuzEd59r1QAgjZthzhwPyGzUWiCV18Q",
  "key42": "MqWYarrRdXDXUnKU5Ro4Ucozci9rWXoYSHSZZHFf3V833KrEibMQ4YrFYCpQNAUXnoYryE8Lv3KtP6Ayc9hXPAe",
  "key43": "xHtBGcUh8ZLr1npKyZUuj89DUBYQuqUNhVswYAtmEPjQm8osKx6iRqS7hBmHgboTSqM2zPYwrLfpG3Uq4v4dsyX",
  "key44": "2UaksnFQGbZnxgN7tpDdJy7XtwqwHwC5hkm2VhoXPTdg77eRtUoRJYPiuWcMTk9qd63R6i5k4E6A1foo4Fqgp5KQ",
  "key45": "usV6NH85XL6Zh5AWFz2XEPF9H7oQindfiwEH23KorRQAj7jUFGU5GMUC3yQTgfQ6WR51BzqXQpUPbx6ZS9wEM71",
  "key46": "4XWhxj4UWvhb9tJVE5yaJ1BiV34FAJxKEXWDthUE5zdu263dCbQbx14y1ZLaE1wGMgtAFTMDWCdwPCk33iUzPugb"
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
