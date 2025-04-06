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
    "5cCifpP9i2AdUF742oKSDrziuRt9zkTwhYsdreTwNpy5JAmUi4PenVzBAQhjRT2KhppqVaFvLvwTFtPSMuB7K6Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5UX7uEEP82uGMvnvz5XyytZtcioCkHEjVchoFANXxtCHgxNGbeTnWgqkwAuUPXPrXAKXfPrHWThm9Js1YpX4Bn",
  "key1": "c3JjQFdyyhGgQL9UqSpFB6xXczH25PYH9MpmVZpn3QRnYRsVKdcJzUbR5sAaCyFU8kYzeazX46jwrjG4b8Z6M2Z",
  "key2": "5d2eHxCJ4wFv21WY5cYERu6GyMVcm8S6BvZrEKYZSDvBzFAG5fi1rY3F1D8gtkeVaKg6dejbTJccxaXTBuArZ6UW",
  "key3": "63ji5jQewXk3BuNngW4FKwcMH9yaB5zSCkGeogyp8jnxvNMtc19c7gUBPumywkx3z2nVCXKMrYkYwMPMPwfzpvV7",
  "key4": "2r94goWLVgHECWvWyuSbi1nZa6A5QqMFmN1LDrTZsrsAqPur82Q47zqauQAb9wEKLqzVUtc76Zz2Yhfha4xRqBr",
  "key5": "3Jy1KKsQwncL1o28zqV47bS3JpdrMKsePuvELnu4Ni6RxtJsYa64oHBLCEc5ADqNjxtevwoaQ8wrkKLzprzpq3Gz",
  "key6": "3dnGx3riGNaejJSxwfUPwXh58SznNbDSpn7UHfs8Da1Cb7F836YVML1JywpTo7AbNUcf7h8vS8dHAp19WnJNpYHK",
  "key7": "3rZ4aqF8Nb5BgpZtZVdFjaT1vhgstfQH52umNjfbit5ZRYKTyNHtxDYYJN7tqVG6WNmcspfpahVPdNEv35oC8wAW",
  "key8": "41ZUcmYJinKYk7bkAN6BeycLepNHdbMSJexSGxp5JadjAMXUjufzSBbMmPG9cnTCfVQgHHEBwdghNQyQYyUXRwMV",
  "key9": "6cq98LeBarsTYEVaMW2xFgkvLUtywFTFgxA4f5SkDSN4kfyDBgodKFs6vpNgaqZzFRhRwtupqe6eeWMeKDo9cZj",
  "key10": "4AENaLQdUEbitLHeKG4c6aC1iqzg4JnxGrbpcbnkJT7swt7cza7e5G94syqCkcKKWNoCjkemXpeEgsSLnjHjZ8mQ",
  "key11": "4Jvy28ZK8p7VoqmxZRVDgLDffhE54n82LH9Mo4NU7UaHZUjMHvaF3qqjtVEi4ASQu8TcHd645hQRkX1CcEnwd1Ak",
  "key12": "64XWcizsi8muzcaRm4NMN8Q28Y89VBm9R5iC7hCwMuxXrnyrea1kpZDTYDCoVMRUt77fDJEkP9vW2frUyzXWqmEn",
  "key13": "EVbKwFDKwVBV8uoS9iA34BEGki6oJAubTNg1gP8rUVhttNC8EmLTc6ZaBRbZLYiFGb7KN9T4PsEv2mNSUj2pgja",
  "key14": "3ieJVLTftqBZs8gAqFfeaX3bzhQg2JJ5QenXw43iYAc4Kq2Kj3VKxFxRQFTxF5RR5v9Qp68Yf6p5eNrrp33UzVHz",
  "key15": "cTBf2f6EAdaHL18KiSTS4YdmchrqLrzy7kGP7c5Y4dut5Zfv8ddDHCCH9ogsgrW6X1PRcQgbA3y6CVvaS1RKqMG",
  "key16": "3m2BVDpeVPShDRBf7gcowLpP5mA38rUsauzxh7ZZtQ8KHuaQTPMacJmXMVFqUwnJQgpLoYtG3XTUjW9fbYYm5oPt",
  "key17": "5JPHtWN5Yxc8X3NYQ6y1T5gYzQrRmwetU8nb2GBi7EzFwrJSNNLKWPDmKVJAj7zg1eifzc2hd4fFfQtdkcfgWyFg",
  "key18": "7xsrwYuofXHng5vtFgrHMSozCE8P6EGhL2xf6eJwo2H4Zf9thFWdxrzA1TrsE34J8QcHqWcnPTCvNDVGHXRmPZL",
  "key19": "5bKxDWGE611fbD1mZGDNzp75YSUbRshbMustcbbUBrTfdSUprmHFzyrPFw7Mi3DHDaoq3jVvc9Ln5HvXaeVHCnM2",
  "key20": "MjqcTW71kqGMCoYZumhcUKetFxt3FqjxpqwxhdeLjjj9g19nhhqQL8TgQJEuU6yK6FpJrY857HRkaMv1pLVfBRr",
  "key21": "4ABhhkxxveMCeSNYNDQk13w8fwuyMQgTjawgfVzLJxoQhgSZ4cfwVYDHEz9abiPAnrmKAzmfthd57YwHymsTdkdh",
  "key22": "4WCr2nue1UaWpkbCd5TVtzZYrtwGfAMkp3H1dWbMNMUa2iofgwABk9LQeoFfBe4nW8tzAHnRx9UngzgahoN4vAFe",
  "key23": "3GSL1AyQWfNE4BcTywwYdLcn3yWbVErMsFHZN8mPmAzgfBJUXg9b6vKrfqQ7EoBKvAwhzfoGycFrXN5hMo5QWQgr",
  "key24": "2qsyQArUThcB3pBqYHfvNpfnpgQM9SxqM7db6gfXMvqVpS5EgoH3D7H7mrjmAaSG3Q8w4CWYx7PMpJVGpR6CAcD9",
  "key25": "3qEc6du3f8v9ZYRch7oDLCz8h5ez1Bb5rgf9Kr46FqQSC296TkFUrBBzPDrKb2ccUmz6edpyRfyuFveJ4Ho3RpLj",
  "key26": "fMWKgwbEy17sFBpmX7q5HrTJexn2xBSatcXB7bPU8QM4ppyj7PbQokebyfPb8t14EaWPnTwTpGoJhQKRecsoUaL",
  "key27": "3P4fGHjKd4iMDtETZuHoyPCdFMvajgKz2XvokVGz6HKvqJbBy2CGphjmRTVg75TpvLUmiHFjfBM8uPSGJw2GeKFd",
  "key28": "3KqDtLvCxXv9r6BEcFWPnkq1sPgPKwexfbtXjwdRD5HfVRYssKtcTeLNhZ5YJ62oJ3sWgqA3HVXeY3ZgDLK7cJE2",
  "key29": "51WpNfCFeH5hXP1YGzWEqLxSyCmVwNE2VYDNRkWt1u8ztWpjudst48xMY2iAPXh4DZTtD2CuGGH7kB5Wy7YJHTsX",
  "key30": "jkpTNeJfB3U6Yjg6Kh5NLhS2QbzXTnqsbaRuRPvUTt9U6QuFB3JPTuQH2istJBD2RTv67ZpicGvfhqZh7wahhBb",
  "key31": "5psYmAkZMDxATLqbkzVArbstM2Eb27c4B6AB5c76RauXS2YsoGHk8wikeinry2gfoMA7x1Ezwz5fqXb2mHtdZrB6",
  "key32": "5KPX2BfysFC9eqNbhpiXUWqFGSkrTR8rj3ou9PgSs3MNT1uLsZDBgWYWuetbtZRTGtyB2ABjvveVeFmP729XxN6L",
  "key33": "3kKUaTcgpGtS1pLd324SiLuQivRkcbKMz7XZf2QRvxLDHQgngZvmguUB5rCvRp6P3Fx7q82ELgNrRS5J73macuHA",
  "key34": "2nGCgttc4y1cvLEEGV7jPQ7cJ2hW7PKhBwo13yZNU2wwS21qs9BViBGZUpTqBEuZMdgihQQUknoQMUo9vaV7wgxh",
  "key35": "oP2BtQabRWuKGZ6SfFEEpGSgHaAXKWUEaVWZWrVg9NMBDacgwmj9cEtbCfWRTx2pmyCUsoqUNTWwPigTCms7yjS",
  "key36": "4eRWswVkxxKW8EvhGq4XpKnFEykEHEvWhvmBs59JzVw25wtBcN6fppLmXNoKHyMyFVj24RvGNrEMHES6uY5cCWGZ",
  "key37": "YTi3iUXdRNKN1cfz1eXr3wHnMQGAzcvxvCuQsTdricsWQz3TokZQ664MSxCNUyDmMs2mZFYdD3G9v8mUypKHu3q",
  "key38": "64ZEHf1dtByzu8gNxDG2yoBzmD19KvJX2PtDDBry4UFaGAiTt7qna2MeMCXvhSvsSzonbzovxBhUE3GgqmQtUZLr",
  "key39": "2PbEcqEEi6CSRZcPjTWYrWjLfS2UL44hBmmaSXSfGUSDGNsWz6ugw2GJyJr6SUJRaFAWWHbHxXwCaq7WyYGjD1XW",
  "key40": "5REQUTdt1KCtoo916unNamGZGr5PhfibfAiyo8JdxcaU29SYAQtaShoLWDF3hpUU8MNuJJpjhZnDfcrNK4QJSgKV",
  "key41": "2Wi3RfttrMSQGk6GSMGwzGnDipLBNsPbzv6MLNJSFnWsMq1n8oR56VAq2qSMDS5ijJCDNq44GWnvEsohecoBLayx",
  "key42": "2iH8Z6STY3crbk7AsQNAv151uKXSR6sVuKywYtVquFJPockcJpfQCzDadRGYFgeXBqgQnhxEn8g8en84BeqVfNkE",
  "key43": "3uhZYvSAaC3f2Kk82uKhnWxbdeZYfnErtFoKSKGGViHrt8ZpYq3qRwEtxFCnVE31Qq19dnHWBFfcTBZQV5vodYUe",
  "key44": "4P1wFvBnzbiH8pxPXGPX82cZVYWhAnWao2BDYhXMzZd6vtupvDswpVX8yaae1qKt5erpjrBW688JW3cYDsrkABeP"
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
