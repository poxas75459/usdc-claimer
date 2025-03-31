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
    "3eKirzyLvZKwLLd5YVzgY4jKpPq2r124KYbPwdn5feGo3NckDGpZqt7QvfsSne2RJVK12iSoDbKaHU1fnrH1WhgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQphWfWodidiLGnixxgfdRPX1nSbR2r5dHntUyPhY4Y453YeVCmLfDxPXpXJ3mhheKJ9GJZQziFBjXfzUUXXKjP",
  "key1": "5FxiZ41FoxpWkiXtH2WFb62LJ7b3Abpi26BTqA79VZ1sQF4CZc7RVEQrPVM9sJxXENZkedh5FoKsC3j4g9gz1ieq",
  "key2": "y9dZkmC3vD8wF4p29spbsMkVcXwDPkiwdVPRqysF2e14Wxbpp9vD94K7L56usWhBkkqDZffpJJSu89prSsEUUQ3",
  "key3": "2wacHPnTkSQGVF9s4VsSSetY45f99u76LVUEC4UsNCaeAaqX9DWTzDke7aJxD8WgE8jqga5tAkDW3ezJWo44uH4e",
  "key4": "Txy5obcqAfXEd1LY8x5wEh1J8my5Yhdba26HJYsr6tpw37c8DxGAxyRjH5pCd5AnJxHeFb1Xij1dLKJ6zRGFerk",
  "key5": "5kkwjYkWsxak4GLxUoWRdhX5MqWHmNLtoBpn2fxrZmPa5Jg44a5CGvpSXemnpJUDdLFPZstdsFBM1DggSVaHZAH7",
  "key6": "3bQZ31sLco8gq9K1HKPHDbE62mp4JueyxKhnpikyxj8ak7vTvzFYfXi4DzpmpLitFg5V9oARSkRE4NEMXGFv4Xbj",
  "key7": "2WRmCS2s1viyQuYkTd9PV8hzQ28yybfwH6yg2p1fmiJ23bTgbYhkY5ZbTuc2RZjezK4ZT2qCrfEgpqvEPxho7QNw",
  "key8": "63r7z9Hoto1YmKYNFaKdvZSDtjBW11HFcEub2xCuLAzhSBNnZLMuFZyZk2pc8Y8uoX74o1zve1YL4s4BcTppP3b4",
  "key9": "5j54FLenEEn51143bqzi6zUG4uQwYToK93YmepNKwqWnqVY3irb5tG6Q3dGDKBtw7nah2kCEaMc2HY1aTDegmst9",
  "key10": "2z3QSq5xP2GLm9Sq1eWF1gD8Xb4EzRdSE2Mf9avALwzDP78ZXDcDfoKmg82gaMwTSTGMiRYULFkJU5m7MCJu6mrz",
  "key11": "4RqjiybReiKr44NC87pg6bHmH8Ww2MTkgacsdBNnB1nKDDaEGudnh3k16SRPAfjk7Mr1tPJ8svRd58sbtbSn69Sq",
  "key12": "3homzWK1wY5cDR4MDJmo99pUcmMU6Jmmfkk2mM5TTD3sukYPweQreUzb9FdCn6YpJrCRiB2rAD1HZ3jnsyxdV1SC",
  "key13": "2kNRvVXmwEHzTjLYxecgdH8teshntdXmN5WA3rJajmwyT4DrVRdyEAgupLLTZnux7whJiadHp8Urrwgi1wXSUfxR",
  "key14": "3a5cBQY8jkAt9qarnVY1yX8vikXPrVZZxv7DsqM6SxoM7Sn23R15ypcEUq7bNyENbr1WuEgNs4zRzVhQaGJxru14",
  "key15": "4wiwriUpsXrobvpJmhmg5jsoDeSVzVsiogJ7DJideRjqNvvPm5rdD66eTykTpsRp5TZf1sfMqsn9N8ktxqy88uej",
  "key16": "4Hbua4GvFe4WaU65jP2mSpNH8mq8AJa7a1SJgksmZrnRx8z8aQYmtcRz17zfc5K1x63stmc1PdwcckY3zSjBFVRQ",
  "key17": "4dStfjqVp4ojrdKjk6piTBAQpo8HQtJUxdFgnu7GH7pZk1pC7r71sS8DzZo6XBWgpGstG2RRiVbqRSEpwCQFngeD",
  "key18": "2ueyFPRNAZEQGBscuHwVNRTQxc8drgs3Ec9R723kr51i49dguP5BK5ERvZtqdYVEsahYbmUxFntx2oqaigAenzKj",
  "key19": "2XkXW8AtmEk6SKJXveBAsRKQPjpK77kN7CbxZ4t1ZzcVZTS5PQY4H3PmMP6qra68V9hc7ddZ2TDRLnmRTq95FVFo",
  "key20": "bUG1skvczeMGkThUm3cpxGMWsdKLNEtWkYNbaJwFe2Up5vP8YvQGSRhAmtena4W8PHhr8ngMWQWMLocRH5WYQtb",
  "key21": "61rrUYxysuWAsthacReTsKjkojusg4JWUjNJqCpHcpxPWfF984k5L4m4pcVQYnrJPNEsC75hfckB8QPniktF2tNP",
  "key22": "G2JpBVCSFsU79MUJy5d5DLYb8ftAgdp7m28HvCr7dKaj6btSeS3qK79eZ87WLxi3rvC7qHEXy4CWDFiAJib5zxS",
  "key23": "CWjjGNKV87Rh9v6iEKZk9Ek9d4HhXnngDosdsY277aRduaXYenmeLEYCVzUK69Di7sCFsRQBzag5TvXq66jtwPX",
  "key24": "3Xbnf3YZDCdrTutMaF21QQgYdc1QomRBzDANGBgRzaKxgcjGs9BxS5PevPUNRWTML4jbU9rT7f2Moop2zp23bHBm",
  "key25": "2ra5M9Cn6PiSeXCEWYXhvXXhseN8weRqVXpSeSbDoukzvWxDE6oeZeEdEX9gZWyyEXNwquUgsy4i4m5obBJURvP4",
  "key26": "5qwyfGLvJms6wQy1Z1KdziHyiNb6X1SHAeo1JzFeac9sd5ZK7M9P2qB722YDFE1qQwU7ew3Y4soqucCyJk6hX91y",
  "key27": "4e1HqFQGY8zFNW6zddg5BUC7XisPEyVEUHjYGhN6RkZ5sidw87Gv6ufCaXmnfwbgfbhxSTAfVmAodX7fQvGq8ymY",
  "key28": "5oweceTijwpT6rY6kiRwR3W1A6fNxHvmBWDWranee2rFN4vUFkqGToAnxTqWy3i6F7kBTkWxf3qP2j4PVUkLazY2",
  "key29": "2DVAj9fS7CERF5VALju8LMa2Atn6C9EcP3QiXwwKn28C36N3ZFv9D4E8RokaRszNpQ7CTWCvSJrurmgbMdMhf28c",
  "key30": "3Yz8RDSWkda1yY3LuWXt2zyTJHt7SVXuhu4thqCwKR4HnWRgf1iz9KLGrgdBaKiRTqvrQ5djmBTDhjkQ4LfJM6LL",
  "key31": "JoHiANNcYZaiShvr5JBXc1x77Sn71TDHWa3J57PHx1Da9kisPPmZxwK72qPtEtgkvoT3WGXJc1ZL4GWF8t93adx",
  "key32": "3RNhaHyshcgfMrGKH9PHXDd6NyRttLEWXEFbKkouz8FxpoDZWTcArCoKWHGVU7v358F6FaRYoU4w9GRmwnpvJa5u",
  "key33": "4w9N1ur5u2ERXaBPhYbUs1EaCAzx9oAKgywKkLbz4MF3TctJkqrGVJc97c61kBywztEe7mVU5G7huQCSt9c4p2kD",
  "key34": "GFpGZrAc6CyigWsSumpPZci9thHggY1sBBZ9W5ZEHmsKGSAhNTEkmxwEsppa4sEpuNynD9kkYJNLiVpUR1kArLR",
  "key35": "51jUo2hfPEdptWp8uf4eEHTjfWmUFHAevYKujt8iEWLAwisG28DhfLJ579nq4tHPM6W6LCHqihbp7TtDysLLpDwC",
  "key36": "2JfR1WpGN4H3H64p8L95cyYrQQ6MsvBAHdpFp8n5taY5yWjEkhRXYX1D25YfJ3SZehVQy6XXfdJ4szSve5rvUbDo",
  "key37": "3zp94Cs7MunzoF1aBNmuhfVFwcGGKhJrW1nkCgKa5zrz9iHKHiYiyBv8EuCZqHfrSyXRB1mSbRrVqPQnvKkFc7Q",
  "key38": "ddyDjfj46CagWCRqVhtY3K4gJkQsTYtE4qkUJjERmW9CJWg8oWmpZ6QXQbDENKkWe7MxGfh7R3cmDw548R9PjPU",
  "key39": "25Cxh9bmdhWxnABW978fTca6FG7KfEqNVnSwDdW4e3LZdfYRJ1CtSy7AV3qXKRSTWDHRsbTPLqHyzf7x86xtZVGG",
  "key40": "2eionpSG3EYgCGRbwYNMjscsiruzK86s8k3dukPaz7LJETiiNcr5WLm3Gbp5o4M8c12tw8TSktg1xfMy5ZtbQYfV",
  "key41": "sdGCRHSNH3QFfSWjV7t8ewKkuXMsTgSHnQqdcYbjmja2LnNo5tULFB9wZUud63Li6qU29iey6bDhVGqfBqYGtuR"
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
