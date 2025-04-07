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
    "P1QU9TVXnJcm9rg3vVgRzq92CpELujshohnQ1hewfrhYN31jkcmBh4qBASsZBZg6UGgiLu73UvFeDdyB1kCbLhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfEnbibuFkuzdK6b6uwh9En6h3JeUJVAYcDvTY7RA2KD6ycgCfYc9LSAa7jGKcTKhbKsVAHynvdwexKmrBNG1qt",
  "key1": "3HMGH8yjmPWyfNtj9YQ3ofciu4ZvFCzHZrSkJPkoALWgPoFqXpMJqUtdPm1HvAbML6RDb2UBUPpcUkKF4QfgNWpw",
  "key2": "4eaiCRC2TLVxybXgMdhTYxAxcXnHDHtDZ3hkT5ibGa7wnBnFQXPAk6AJSHzF1w1LFP5aqnJUnyP25UwXj6NPuHnJ",
  "key3": "4msC4S37NKWsHruqqKUHfGb1E1v9eguN6yqdj249wbVfxDZtfmasTHxEVnHHFmngxS6SR492Et4H3HCRzycNcKPj",
  "key4": "5fdvsYRT68skpd61Uzqjy8EBTGvobzzr95r1aaTfSFjZDn5731zwSdoXi4asPasdStZXbQQ8C1vMFZ44ZXeG9rpP",
  "key5": "4rLbyLPqufXbcLwFFGSeGaipgm7ktyTKemwq8zb8zkmiLDhqf9u1dchqeonEAtFVLkQTXj2n3RBdiYsNF9iZ5SqT",
  "key6": "2cKNNchpDYSoy7N6hNSu8UL5wiusfw2BVY9dcFWJBBEpt9uVZUiKvdZDf8WcnnQDLgdwt1SdvZD8Lcn8n6Sb2JAe",
  "key7": "kWbM9zhbdfqrkpdLemnizYFK8SndwTCVgcRotypGpPepzEcgz6XC5St9i4NuBkcUjN3C8w5QNgTmHUAUNSSKYFZ",
  "key8": "4eQgXfK6ywfeH2A7ntpKtQxRJeLczNGuYnHD7YoWMEmcJpC2Bj8wQh3YhXmtXQoaAFkcGj9v41JKWBpGzSRQMaKv",
  "key9": "4FmGSg8WnCz3xWJiksR132vfCbTdUaRL3AiY7LdJ1DS2DTVd6j49YFp5U1EN3vdJJhZtYyxf2wQLufwuUj5raX3i",
  "key10": "3i5iHMF6yVg9d5fdsmBJiazWFstiGUigUfgnv6wRjCjLcDrNi1EP2Zed6ypS5j4M168n4vrT885Urjxd31JbaLEV",
  "key11": "3KT2TLtU2G3uTpFuKCFkKWXtFFZbEfX6YcZ2n4MPxETrTfXy8zr3pF8WxsWFAkr6f7zJbtMjCywByJ1HsYb65zcz",
  "key12": "4HMFkkbDvNXPg88mXML1UvxPX4QCez3B1EhKzdpjM4XPxnk7HMuUP5V3KTMen192oDMEZwGZaq57W2bVzcq2QUXZ",
  "key13": "4pbVjnxVBEvJmVcchcxF3H7rEWcRGFr2rhDWHuXtyFda6emPAM3ACDK3zHLrWwp6B2prA6ASToHXCG546QrybejR",
  "key14": "5Y3YuVRgmokrfUgEWPe7jX7UEJFP8X9eio1ZiLv8eYHrawx1N1c4qiyYuwPX531EY62rV1yYQnE8QYiQmSjAqxVC",
  "key15": "5PzLx98MhvWkVqQWkq4ZeR7XBeEo2eifBLrDc9cmB1nNw4G9KwQw9AsSV2RSyBb4ip99DUyaMcKREspz2wiU8gk6",
  "key16": "23tqvN8x71A1hAA2oCL2GHPmpjLZmEW6SXEehAZR6QnjKkDLF52rSYfZVdgyskrRxFnEw5hsSXaK6MU4KADnN6B2",
  "key17": "5rhKV9UdsowF8eyK8GM4K8KQUBjuSUZhbDMFpEF3X4VxPhstYsbFqiL7x5NhKbpskzMYR7acJpy71rU5KoA8MiE9",
  "key18": "iqJq7r8Xips7GkNGYCWCJFphLmYvFuKzQ6hrVK3y3q6An89hg48BhYzZLf7ihHTqDenpKAos7zMCcRu2nh4bBYv",
  "key19": "52wS9pFE29Kn8JH74oqwzLwjpuu7o84YYS5Cow4bwyKBjQeujETaBF284ZvEyWM3SKujJQU37PoKHkYGos11SoRm",
  "key20": "3JYC52RMbzyiHLDrHV2BzV3ahkPBsrjkHp9Qa5jjvsviuc25bPtZX1cY9XQCkurtJyYM8uWvwusFSSWiuGwLhySK",
  "key21": "Z1YwvChJbDjcDP9qTnkk1K5D2aqPTWphDwJhLYfdAEVwvZdwV37pvUKZtmuVSCY4NUskh9Jo7qLRgoCeeSsqgX8",
  "key22": "4hbuDBinHQtUjvGU8GZ2DYwxCpFwtW2mDc3ZfJ5Be5DD8oG6cr8Eonyk1yoZKAHCWH26Tvjb56yCHhnZZP2SUGjk",
  "key23": "YadwAxmNQ6DU7DesadxtgyH4QPnwiv3g3abQKPJEnkpJ1x4gkUUjo172cv1ncjo5gqkSoEXLVfR78g184QWKn37",
  "key24": "3CKKSaD4YWxfoVdYiNvepsLaonhdxJpVQ22aku98cH7NUEFAHwsfqnCBP5GMMi1tiy2Pm42w4ivTL4ffXTDqfits",
  "key25": "3s7fY7iyBmmyErCXCRt1rnYLvSHofsds6B98B5ka53UehhJ9mrHaVUE57QpEub4jeLfj1XdWuTBhusmqd3gRZ5ww",
  "key26": "3qTCW8koc8BnPadcHG6xb7n3hRMBKDGGc8nqSnyrW6cprxPiKMQmc3EUHuaEZAv8xemBvUmo8Vkkbe8z2NgUHPyr",
  "key27": "5jUyPJfw79DoTYwrFgD8SCumHW2Qq6C64QVYk91wQyM1Gh33SSUMYRhSksuCTbm8txLMKwNgEjG2siMcJveQB1e1",
  "key28": "cfwQXmtSPfrTBrvbEY5DAfzAZD5wfV3qd5qHHWyNoS26f4tNHdSDTsX5JmFoJzUqFRnQoTYY3Pv2hHTFTx2j68N",
  "key29": "m5YVHZGTfj29WCupgEJFmgaGYBGBt1bfbZxk2J3yrEHbB7BvegYWRHg5h69Ba1XtsfVT4SuSQdsUKnUnVGWFwSF",
  "key30": "2rQF1xccfuajDkmfzyKqqcXR7op5fyVdGQwAwbqbujxB78W5Wik4KSfmevUKoMhAkmen24iHVkkWsPL2ZTmpe5bC",
  "key31": "CNCVjQdxLB7veB9cAnv6aCusAHDEXRoSncr3tkofAkUjdm3SWqjcJNGakRftM3DyCcppwn2g4EmkeSgxHbBpXEk",
  "key32": "5DqtaPyo1NMnoYLf1V2wys8u3mAZTeCaE8paXuLvCL5HMGeFi3jHz8pJEqUtwbeqqdV9Auvbe8rsvNKvJyvTQWSo",
  "key33": "25Ek3yFTJZyJP6PPqJp1dQJervaeLi45g41PdPJ278ikjDagNtmssnnR8bBzTVGBoehqc9jTHYzGt1b1TgeT796J",
  "key34": "tCCtudbMEctNuqjXqDTuLNim79wHnaRn6nkp8xysEjoNz2hAWoVPQtRmunKobJKLsobTsejgBn58mMt4trr3MhD",
  "key35": "RuoLBq9c8cMRkNx4DRcvunSzszqoTdqLzupmEXW4AYZZ169pmZoEjSczYhY19DxUH2TpUy3hQWKMUAdxFETheaD",
  "key36": "3BzBHbSg7T8wnrdtKJqy2kbimV2DxFLkCU5ahjqpVVPyuTxkyukHKZiSNZBtFfuLsLuWLqbVbAcwGeuYPX8dMBKA",
  "key37": "5WwymoUSAivtiNvhVUKFAiCvmWJwKEJrn62SWunBkXCGtbczgAT19ApxgdANQuniGJ7AYVpcup8G3mHyChfRcVbT",
  "key38": "5LjZ9XL8T8kdJ9PDW9QnYm4oU1ZGNztVY75YGqKMoPbARskPwZTzfmyfgcJnCCZR6sD8oKiNEQdKhgFZa26vqc5V"
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
