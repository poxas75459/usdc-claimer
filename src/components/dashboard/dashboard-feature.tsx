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
    "579DLCcVPjGcbnc65Ek4NbrTiXuk1M29sCBbpFGMantQShpYa47a8mABwV6cWaD385KEKdh5akoq9JvjveooSVTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xx3JumUaiFKxKLH9RywxGtKazHhesr8XKvvowtoufoqgE2wRxn5QiWn2fWDJefDTJEsHaDP1KqTaHpmfCSYjrvz",
  "key1": "2tRtoEfBPgi4UB8VCmzLTAgVjP8xkbAaFvQGsrhtEQ1EjHroVxNH731sfkfR8uhACP4QWE38fd3pUQ9qfQNgrZst",
  "key2": "5cJwoSr9VKgrppfvRJmCjCgd4JkEazm8R6VsoUj559tkhufASfNtW3kDLpiqoeGEF6Gwt7VL6jrueM3Utkp7hbWg",
  "key3": "2pQjNtuyC2Ez9cyqc852Rsu48iZUQ89ZaRYr6LSqyGCQFjXV67ehZmuHhAJk9vqdBhWsudiVqomxKG4TQUx7p28C",
  "key4": "3H6k3mWuhGM22pCvfeLgVrx2mtSTzGDMcEDqGrGePU2xUsFcwnkNXrzuXkPnnvPNCKBjuXnQzTbQMcCkwFocBhHF",
  "key5": "5VUGBH6n64jyvpinMWdKtQXwEdCSeSyX1ftD7UgveNkfGzZfwcG3c22J9pNkU9MfnMgFfzDEyvr8YSVA5UbRCCms",
  "key6": "8T4AXJudsDBo57MmQDF4iZNhPsBz7gvYgZxVaDVwbGPQYW7iSgVMgDZUEgLHzy59HzizmF8cw9GnMzLNTnPrjCD",
  "key7": "2s16rnUHb5eUQdH7D3ocFLYG9y74wcnawTGVxuWhpwxBfjfweL5ysiA1kRLgvtjLSyWCLYTvpNeBV2xP2aKnd6jv",
  "key8": "5qXajPnWPNEkLCrGLCqDdr6tdhFyYEtG4y9fPFsXCWFPjey3dSqMt1tVxm5dJX6eKBSFbo5691Q26k7hEqGyM5Hw",
  "key9": "25nW2bHf3Y9ugitLWQsZaTR3RgsrUrSvBMoYpnnbnNmuZS8p4XZvr3N9X4w16BDjs1oE8BNzVTGoAxmDoY726nwH",
  "key10": "4V3Cxipk6sqC3fXHhfU6PPP2QbFVEUjXBbbboujs9CQZ8LqNP8HNmWbWXqefcSDgbN6ZzHVfLUL4rJnRwChdGvqd",
  "key11": "5VUqUHXYuz9n8ubomwhh2pq4cjE6qgc6CtgwP4n7YXeYJfxzDbJRZCbWEsWonQbUCmTeWtcKb8Vi95DYXFPMPeF6",
  "key12": "pPuPWei48DgbbG5iLzuQ6dFE6j1F6mV31AK93gz6SmMfJRpDhLPHg3zuysYfu3tUySRmjxuBoBMT6X4b5FSb1F8",
  "key13": "4gki3hT6X4cpcx3RAGJR1uG5xEXL9CXqauabft7m4Y62Bwu7Y4Q4r5Z42rfEYZ9LXLoDVNG2wmJjrjwauwrTYJcx",
  "key14": "64D2HwcU3Ww4T6EmG64n7sa8RjaiQTgwTgJrSATcmfu9wMy3gw3c6rxmSWVWABaYyXJsU6EatzcNDy1VHe7Ju1Rq",
  "key15": "WxiuyVb2ycmABDU9jMx56e17Qd3ryuiJ4QXjFeuycnx2WtnwCAc267fbpYUjfy4jcH7Q9Pwfu6CxwaZ4JMFgAfX",
  "key16": "4BwADH2yYnLTFGJ99jrZXUZZsy2MGFigG2xgvGiQ68qv4PANVEg6FYowC61iejFjUCoGUu7Wo3vV6WKq7TgjLGce",
  "key17": "2xg7C84QkaqyPK8c2TpAcP5XWy2AQCYpUiNeGs1Y9hYRW4TW4Qgeruo35NDFz7XNrfv2SYiLcBKwVzKfGvzpv6zY",
  "key18": "25ZU83RWzauUZ3cF2kLn8KTHMCB9GMkxVNALaAchmv3oGg1LnicDwAYGe4jTfsSvQJzBASRt4JWayrJgj2UtPET3",
  "key19": "2LdVo7Biyk5gBVTLT4c8h6zKco8Fd6Unp5c8xd35EDrJDZx3EjjMdtY9RA5PhZFoYwHz44QE5kCfHw6xitCeFFH1",
  "key20": "2FFJdUDgw9KB3h3ax6zUsozk8jSaupWG6ouCHqXveGgk7HXnFUm7jJMi1ZxQ4R6zrFSBoKj8Sqz4WfPtoCgN1Jj2",
  "key21": "5rKA9xuCHyFtLGPAdpAJHoQ9f78uaAXwvuZX6Apa7PYyu9LWPMo8YAEDDiFUatGRWvFtMz8TiSSM8GGwmKVgJGne",
  "key22": "59ykfqvFmfUmq6X4M8W9stMZJRnefr2cfqeWCrWhXTxoJeFDqwHCkQCZTtBQ4egvXu81Pa4QEyXEPDbVUC4kBEch",
  "key23": "22yPkz4kiGpv2fUEU2Tpu95DPSa2HJGopk69aTom6jn7z3nNrQbHfBxSzuSC9YRGmRqsvFeSNDD7MziNiJgCN6Tp",
  "key24": "GTWzDaf4rkZxX85Jz4hnNSJ6MofA1TF4DSmAFi6fEmPD7BcXnMj8GfVvMjmdv4sPbktkmedwKf7tH82JAaswo2H",
  "key25": "5m18M78uZMZ9b6kMFGM3V7dbmxHRzc6P4FXvrscpx3ez9xrvG4YDzvm7K4V2kojo2Rp4Non3eeKVnDhKJdx8fYcD",
  "key26": "4tHRYVRAZ9jGNYN2Qfq3AXJV5J9jmtxQZazJVcWFR1zXnYbKQsRUtpRfygRv8mwerFXg5YGiPwkEdEXPtWrS5Ugo",
  "key27": "32HC2KTZxuLuvNpT8BtaRBSmesBWBM3hB2gR63xdhF4xB5XH1yzPXdrzzpQBEtbV7mdAGBgwyFTccEC264XkgChM",
  "key28": "4XzHtqMmoGvggXgHr3qxYFE1AJJn2zcHe5ogUi8xKgcBNKZFT71JKRjdjk9iExsxx8JzWJibyeEeHTSqknpMqd3h",
  "key29": "2TETntRP4H423wEJ8K2TdawQMueArNuSAZoEbFu6GpPbAzRv9Ay4zttDBNFPeVoqnMTE9UEY4HuXPNT2eEoft6Jk",
  "key30": "PkPSMXWmcSHyMmWESP9u97xFAevm68qw6idHorNABstig2SXpjn3wP63xRGmwnRoXBy5A7yBXpTnaNxEHRJpSto",
  "key31": "3HxkMaUpyYi8Z59yZtYpeqKBSTJR6SQMjvne2BmFt873T6BYsf1cnhThpu1XGa1eJVV41K4eU9EUYbWQ31iVRFYE",
  "key32": "2FFpgrtM9yU94m2SR6beCKnV72rWbpxsjioG1MnUkUjrnQC1CLVuPy1LjGFtpTTp4ZF6sdxGD5PyE5FnhPfJof4e",
  "key33": "o39hwr7Tyi8JFBH2XzhPQgaLVd9BP9PKvpdRGhFnUzW7PghxyiD4CJDFaKN9HbssxUkTLcBURmCCWLTunxhetbn",
  "key34": "3cLjFscMqnaPgP2WPuM5ttsxg1GJqBuQSKH9C1PSpwJPQo8jLMg2qypyGKjzZ8wv9ZyrRmjgrUqkmRJ8Dogynt5B",
  "key35": "39qZJT1ar4VBNvuWQDQqXEYpC8Ta5kw8exbGYzwgXcdbbF914sex8uv2FzThyWY7NtwjsTL8ruYV3VsFqRDPmigj",
  "key36": "66qrMqUzrSWu1TshvFGdoRiJDmcJCe41qpWxokmV6qepXKaUpzHHpsAYwsiZkaEA7ZjF7X9AW1XbqHuHaGmYycnu",
  "key37": "55d2Kb58d53wddPUeBt5LFWyS1kaHdHYvEh1rg2grQMGcoA7nRPvAQgntpQgcXBG7n6k6iqXo3CFB9jcs11hFD8k",
  "key38": "3NVMWFNr7QzLy4dRgn9aqT3iYbCcDhnV12XKUfSaGX644YpHJ8gCaFSojao7XL3JzWeJmfhkKtpAEQn5Y3ha7QiV",
  "key39": "5fRQXsmEUpm1AUVoQnSMqkKq6Q5LGoSRK4Q48CHPpJKi2X3iqHaS8YRKXR2zuYRfZBiXz8h4Mse2jjSSubRKeS7s",
  "key40": "62otsxS8Vi9ikzTVTsuk121aR1zdUYsFxq5jEbjA45PwfcBXBGnG5fYHFRDKb1v5qpnybGbP743hS658JZgXpKqv",
  "key41": "5tWzSJ3hxqu39XeU8vicZCeVeBh9GAgE36cpzXn6NZxGoQ9kohC8bVLqNCPHfb5wYJY8u61KD6HkbGEwvfmb4X7B"
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
