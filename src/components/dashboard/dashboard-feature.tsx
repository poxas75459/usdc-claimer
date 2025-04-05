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
    "4ZPZ1qK47dXhymSaeAAUCwCiXvcij4gNh6zqn678jcuwvUj94BTCNoCfWUbFKPiXNXqrRxHzzUt9SNKLt5cXLVyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Su8DCcMFnjuq4sRB4KEyxKDpciRF3snjaSoQa6Gyx5BKNmBwybVpKSxLJaVpuKCazovLtPDRf5gy4fP1xu1QHbX",
  "key1": "GA1fAbyK8f9a8fyU9PayYycFYjSnQxMDL9y613QHtXDKyqtgMp7TELhxhoVCfn1XpLChqvHcDumJcAHbBUzQ5CY",
  "key2": "3ctS62NWYoeQdjpaooECTyJ2c5m57cg19o5rQq4jEbEsGr4aHEjPqjnmT8fAZuJMRRaVDnVUuLxCtfmQhibPT78b",
  "key3": "5m3hETr2V4sG4uKtCYQVvXT8XCrZhTHua9bAymkvpixaSVkzjqTqduAJoEivcwnte3KyTjfiSa4ohSXkn8e2y4b6",
  "key4": "uAWZ7WWQrNdzjHaiSLmDFdqWYGLQweYQAMjn1MJ5z3gsd8BwtEmXHPhrv2zCsxmhEnP45pSaHLZ1wz3ss6ZY1mT",
  "key5": "2Gz2vBHEFsvQGE7oVwRwD3m7nQR5Ub6KNeSqsMjibXX4fChLvbEuHdTMFPA8z2xJy4GJ8NevtgXL2HVWobkN9Ra5",
  "key6": "5bUdBucZvkCRHfj1V58RDbDKpt8i6HPqB2ghmERDyF84gC7ELbCB4qJV8Gm7YeQwtFEMJJY3SiMhqnkuJxrDKJqU",
  "key7": "4h4v4ZFKDmTTZwuTpPee7aJqt6zxHwGp5r8L46wJrSNtWTmDv8zEFoZ6oCgqRDc966PG9nrUJFYhMapyc7QqKqdn",
  "key8": "3RKx5oEHuD31gv4hhFdmNJcm17rce7gERwuM9GnfP69srGLrA7szdHq5HddsVS2gbdL4ApfdYT37ZebtEWq2H3Vg",
  "key9": "5kgkqpzJAp8orj2oqPwzPBgpCEaHdvhJxWUSwpZvn66wQoJYxjP3jweCqKBgP2zCQbpcvRGhFoqXSz4xsgNrU3pj",
  "key10": "2obNvho4N744dSfBStBBYFvzN5VgaR2VTFfYTp5BxZjwrqszo86osCEDFeVv2DAB8XeYpYAikZL2PcXbYoD7nJud",
  "key11": "579eBJyJMunqpR4zxX8xZpATH74j9yrUSZf8VBgmFcFKcSmrBfjbJfjf4XQmy6Ra2xndiwaR8ss4cuUk5yZsUtb6",
  "key12": "wViYvrf4XcsN1zjdoR1ggaUeWHrbGUd8V8V6aZyKbqgGKJGLpuRRRBsVy6Rz2uoKnoEf2haGSs9NSfg9gbd7bSR",
  "key13": "4iaewv4adSGcm2s2pEt1QuBGxVMqS7emsSxejoL9obqz3UEd9NHkLvUzZ9d78P9vHdi2gRrprjaMK9Y9xLBoaQtP",
  "key14": "3HefUKRkhoro5UXUNPhwhHrYfBAbxu8bf5F2fmL58N6iyR22orR2kpKMPxKJCEgWvSsCvYHcXd3rLVqnq21JQrgL",
  "key15": "3inhrLMvQcAA9psxG4Ktc2W9evaJmWGkeZaR6u6KGEVof9x4bG1Lh6BT2DiNqQjA1RafLnuCjcDMSu5CBjyJP24P",
  "key16": "678hRaYAxHg1jxhdNPfTBp1iQ91pgKDNjhAD2MuERj35ZAqFhJVwbf43EYmN53xFQ1q4xL46tLEwiiaLANLznFFd",
  "key17": "AxJieMZNasFmWjPDDf5sU1RYgmafUZrGiiCvXRHtTyBzcSz9vKwzw4kQrQRd2UvWAT97KHrakDnXabtuBWPzmCV",
  "key18": "siBkcqpjExPLeDaoF7G1h96tf3pFuPsPTu6JG1b8CN41ayx5LcmHnicPE3KC2VkBUT5dzza61PH6KyDPXKSkKfe",
  "key19": "46CqhKsZndEjqd4KriRbcyhqD6iYkqXnwH7Lqvm1QRNbyUjww5nUGnoKdBbDp7KiNjo36sNuAtpmESHo33xHqfHz",
  "key20": "5UANALfNbG3YD5EMncZubUuAWXdFETwXE2gpgkFjmjJwU97hhHxCCw6pmKsNKqyYJPCPaLiuFSXfKUnANDGn2c56",
  "key21": "55hJghxMbmzn3S8prSuTHYCHnFfXxopYRe1tdzWaa9mbTTKCYfMAScNNdCGWj1rSDyZVhttt7gLq6SXuRmHbVYxi",
  "key22": "5a1EMo5dGcb9ExLYLbCW1WeoTY8D68xbYsdzZD6aFERc9TMwD7386uuMNxGGQYiKEuaFgWf465LAz3QyK3urwUpM",
  "key23": "3UwxakUxCMQBJz5HjpD7qn5aDc9ujdLvsJpWtUM6kuyCa54yckaNUEzAZ6A6MqSVBEjmXwMvVd5vZfw4GNZSgHTf",
  "key24": "5qBbusegdAqFWqn8gENwwzYZRheZVEZ5a3KatmXUv6dBkUcC1h1ehrMYiM5UYUbv1fGNddJMFxKT6558ab76oz9k",
  "key25": "4sYB7uy3fVNqiJ4LLrNTrsdL2moJspBobRNVwtRWr9C5X5BmbdrRC8nyRii5cpG8tRbGJVV7Yap3bm79SzNN6TSC",
  "key26": "37A1Pnk9ELZMnXG2gatpFyn9B7T95rEXHF5UTPy82A4ab3FW1Cv4bjDY9cKyWJvsakyH83R4JysoDwujSspLWmf4",
  "key27": "3k2UMSiTUC9hstQKijkoC6wqu5tfF6M3LukfAX2BcYsqMapr9Y8vUXgRdcM9mhWxT83RF2VbEb3g2h8VYgJfSN46",
  "key28": "63p82zzSmMS69AxUBgSWdb4Xq7k97zpnNEKh5Q12ZQzccm1wFqhEjATQFojs5NBXcfHdfRn4FQvrsdyCjUe2hhUU",
  "key29": "4vegmf3QMz9TZCm8vUFckZptRqF5G73zrmhuTdoC3FgJpXQo89SGP7xf5pVgqtzoyt9DqxeNUuuk4T2kwHD3ScQN",
  "key30": "4CMVhHb3q2QyHbSDb1pBWDxmeAkYecQFAj3Abz9knbsa7PCLnxGV1TQ33xqhZt9ncmcHKCZ4y3RHSjMK6z7YPYx6",
  "key31": "2RibU8t2XKdqbdamKGESJZ1DFcF5fY8F5RqwA1Leed4agzsqN93oWPPvq2Kmg2rG3bNY7XfLMVycokYjeVcfsQ1x",
  "key32": "5S8VYPKnYPFjVaFnfQ2KbntCdQLspWLsi8pJbg5EJT1AF4KaASs4irdCRLbPTyKoehrPBreStdSo6cVfT7ssoQj4",
  "key33": "Y4V6LbKirrAiPN7Xhj5Udmj3gEpZJYU9HnGxcutDxJx2wukvLDge7vYnMUz5pUr7JMM3qi4djj5Y1z1mDNk2Juw",
  "key34": "mnbjTfhBaw1eyCwgpU5NKpSy4Lxc7UguDzs7TT8L1S5bA1sdLQfk9gqBeMgMMd2JMmoiXWZwV63C7V8ydQHzqH7",
  "key35": "2TfAojFYFR4iKSsdSvnSbgKgFPJuTDuEHc9N12wBuPybEnZ9KMJPZDrvNDw8nrk6pc9fAZU9dEPmt7zu8q9a3KrQ",
  "key36": "2LfPvRLUhXaXxjjaWG71LZEBFV1VbJTH7u3k9HVPQb4i87Bpn4azzAbkYNxqmfz7v1j2dDmTHWG1i9KqwBsbuSY2",
  "key37": "2VEoq3aPFwNN2RVeCvA5pyW1zUz7kYBG7QxwQ5qWmGncNgFM5EsvqLeEJfmLEYGDrAnn3sNf2qNEk9wfXDbiAkdC",
  "key38": "5vNuHdSWbxvCd4gE19GWKynPdPXQ7i3HeafxyZmfmLZJdEjtRvVBSiBCw1xqcWEa8JRvMmf7uZmHLb1EXDpaJSBT",
  "key39": "121mMAvvGXKTVNJcD6LYtP34XXmvZuXvERqiNGp2MobJiME3cAtwMztDr1rXdikYzHUcf2u7B8RLj6h71ajWQdfA"
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
