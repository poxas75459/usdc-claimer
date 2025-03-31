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
    "4UYJfw3CSz5QA5hawjK5X1qj3CSrkqbU4n33uf9xygqVaep1nvk1rRBPwy8uXcC7hxk38JUrZouifMhq2rwXuhFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUeyzaygvdT4xvyfcaYQ9cjfWtETe94XoNH74siBRnSmw3Hg8Jd14SpV8AWHZWok2TPn8vqjFUJvR8iUjcPcyXe",
  "key1": "sXxa9KrTFDsyPJVySrEt8YLc2hzJspyvYTy7kGczktdJZ3AsJZ9uUXx3otGjhKRPHBRMQgEPyhVLhJniDQARuCc",
  "key2": "4nFvwzC5pkg1L2JsKSM4beGPkiUf9uYeVwwYSEeRxdD1PqUYss11aotCKYv4jrAbWJ8uvwC88ZB3n81GNGW6CTCu",
  "key3": "5D1kmBfjASiJ6JJhSSoouGZsdkuM582grC4XUm8eFtY7RTfkcRGhaSGLbgXfZp1vDXNPNjYzbLzu5fYQmsnYWiBp",
  "key4": "2gc2LMF31kssEnpqgpbvXrdyRw5xKR3MpoKV4uV4zJHuzSxpJx3LUrPBmvweZDRLJQwQq5NW3t7FNRMJSfcsZDUo",
  "key5": "5MiZqViYLxcSdcihHkD5378Fm9r3KxERVyKk2BBs8vE5PNd5mrppxNYRiZZy7hhg2ygNgm8vVyHxEuk6TUHKYdcU",
  "key6": "2TANfNb9BsGeLX6KWZDSPxayXsWhFrHcD8hkVunwytpQQLSozLW5k3VvJprdn5Jiv1bcYhfW8BSXQuDsewhhnbqX",
  "key7": "3EjBDW3L4iVQr2eS7AqJ1ce7QzXfZeC32dtB62ZZzMje36Tz6XUx7j6vo4rzwcNbe2512NVPaTzv6xcp8MKQyE14",
  "key8": "3HasJcsc2P8ks5dXjiAFm2XsN3qm1WQT52D6dhxwRiUWcBEt6tXMhuUADqJS9JtfaHVGgcxWddduBYYU1RvQBRbm",
  "key9": "24yb7Cgbfj79hWy4jyDYwxbneJYaUQgmaPA8XDa4gKUSFXh4uPAV9XU7fUxXzxU9tJRLppNesnyT4TUQMPrtLpv2",
  "key10": "3fe4xdsbb35rZjrPhQKJQyQ4DVHtpKiMWjjjQZ9FHW9FiRKRWg3Vm9i6qZaSW73rt9V3qghPp83zbG5dyKhNJ9Gw",
  "key11": "5wkzm4HZPhQXbPyLksJ1gx31xFZ1nnf3YKAQaKXWBPJyziBBsuozWuVPfQdWbLuHXyu6VavbJZMn3dUNfenPcJ2Y",
  "key12": "56uZRQX2tmAu6uyygX1n5EbTxq5vxf5D8ZhKPV3wtrvXX8ysfzzag6VYHP6H2DsqdGJstJZwrBZ19w2StapDJ3c2",
  "key13": "3pRPcmtSpKeADUw7dF55mGA212u4cr6Vc3dE4L6Txmpo4fbnUPtDM9iPrgKBcFJiprMrs87o7fUnw5RhYMs3o3tr",
  "key14": "Lgmmr8VfuX7nBZJDfje4uPF64rn5YaYjg54vjPnemnwci2AyTxoiUZCBH53KthdCayQLHpdnH2gMDL7CFsVfN1e",
  "key15": "4apKjvuZCs3LSeWysiPdqz2eR6BzURTM1DF8PoLVXnyNEzPdpCUqGxCHxFHY5CSZGasckjNQMAfCbfCWssco6kE1",
  "key16": "PZR84Eon4MgLtMKqaTA3ym4rZUwZhrvFHMAi4xWfazYMCuQWEUAp56nT7HsnAYAaUBX3D5S4LxJWxJNm9CwWanB",
  "key17": "4UyATsnPY2QBuPwnCoSMS6WYYw3YLGGgjgbqYbsqy6HM17hnxTft6NAkKLektNqG9Uu7yKrUA2wDquMMwg3qEY3j",
  "key18": "LDuMYAWSd7TsxWj3SsVNjcmDYYMipwyKHfbwQivshL3VMg72VjSYeJ3MtAPurswXT4SnmsR8uDhracmuY5eqQjs",
  "key19": "V43yHdiphoz7oJXzAiwNu453Yaj68o9XDvSsBxJ8ZPq9XVH8CcYHQ8ChoBJFZPeSqt3VWrm5Xw1zsjwsxeujXND",
  "key20": "41q4avbFEhWjW2KLmC21q18PYRLvURG95akMbtH52xCs7TYPtYx7syiQFrPQXq8R9t8peiTWnjmiTJht7jfqjkXr",
  "key21": "F82Dpwdzz7tDGBwZjnj2KcR1PmBxYnSQtVeHq3nGBUBxpDBSN8Y3kZ2Ucq1u8aqzDNmCyntMpNvFj3ttyDH4YYN",
  "key22": "QncC6kusi5rPLrhu76jzVLneezuTk2ioiLaX6BAKGvM2WXxu2LRdhzZ17BARMZMq9H8J4JfixxMyf44gJJMuV8G",
  "key23": "4rEhNqqGxKPUNDskwhNHTLKZM9AFCFCKCipQ2JDsKvmAFC8mrt5R5Sx6TNT3zzUg1pqMD9TM2gucWU34K77rHv2P",
  "key24": "5YUkbGFALnBPGivE7V3fXrW9BzNrVbGwurAggRUExWkJn3baUNbcYPRjueCtpXXVrXeYqKp8RwhTN5NPAfJLWDx8",
  "key25": "5J4iXXWSDPvr4HfukpbJYdy9bH2o6NSUR2YbrSZZhufKsw6epx3Y1aVMAzJBGQiBkeEYkzcVyHkDLe8WV2bZ71G9",
  "key26": "2SJiWM7wxFjjBQzAWrhFDyZbobnGuhgfLAd9nfH2p9JqYau2ysp3HECX1jp8kpAyHC4YyGKux4r2HQpru71Jxas6",
  "key27": "5x2Fhptpv93VCx4ad2xVBsyXbtLFy288XierLJ4UHFTZkuCDKHs5b1uPyMu1KoF4xcKrpBisbyQmdQc3uUfZVFxV",
  "key28": "2dTdQWRWsYCj2QkurpUu4HsKnsi6DnUJ9imsXpwkukVuNeDsG7RYdumDtShRiBq9a1UxkhMJcKz2e14cPgp2DqGv",
  "key29": "5mKJP7n3qpdA5vChaJRwkiJXJn2wELPmkqvfzbA5u7Fp13j5oJj1qEdRaUhW3KANKbyKuStdHbNqt9toaMiG3zxH",
  "key30": "3fQPfLbmbbqubxTS4wnykZGDfnBDEoW7YqyYtMHdndkmerPs9iiYHEY2rpU1fzZPy8Bj1C9kQ2eeHKLbcFYRt81V",
  "key31": "3f88LG3XBD4giLemMmKjczpHDnm3inq7ZDX8GJWd9tWERy5bGCY9dSktcEeb1DrdeKeEc5DMDnbFoPWWiVC2ddhX",
  "key32": "35PKiwiUSEi64pnnMrHcD6S8fuC1aVUyEq2tXcwdGTV4AeX7wWhCFxnwJcJcRpyN9eSVX96CcG94a7AaV3pCCU4b",
  "key33": "wiPae2ZNweeBMEMaKoR6Y15xSCWZiBi1QqPtgeHS6LzUkbib3RmMexEFY8aCqzJbRQw8NWw8tj9PHnh9gp84sCU",
  "key34": "3rsRpweCv4RpqPJv8MJBWVppKQ4twUCWy6TSGg2XtFPWGQ4FjZFLoUV5YKpeDhV1WrRpsNwRJoAnpVCmBs3cYVxp",
  "key35": "4S5JwtvHqFCW9eQ9KQMc4Q2dwH5nDBB63SCyfcS4G3XcWcSfAwRgpgTX7hfM4hAr9Yt2jXwPXC5ukTmbk5j7tis9",
  "key36": "5esHxRxuSysx5rdLtvEhk9VPvSdaDV9EAwn76Hk4UDJJy2K8t3SYUaGnjdpA3KVy5UxihYyZjWhCEE7f4T9VB93i",
  "key37": "4DvNcCM5PsZkbke1Fx3oNS7WyMdP3sDRCNQ3CXvTkBADVymWVE1vcoi4ZfWnyyAzDHTwmLGyymiMRij1igBssBVn",
  "key38": "3NyM7nVRaeFBDTToLduEC8B3juHffBrdgwLAFsHo11kmzdZkfGDZiTXFQBEXeEReQXnN1DYdD8L82YTvtY58mJLX",
  "key39": "37Q8YVyJUHstd6quFQArAqaJkdEFMy3ZEFzMtvqxZznKn1rFjkpPYFven7iY8Kgycc3X6ZEy4LwkRCt3QD3GN3tJ",
  "key40": "4vqVbXKiZkNN1cdbrDS6wsbjBioAruJLRiucmb1xrWuVmuKwppwTQh2nUedPWiKZfvUWdfxkxd22uYPdiZ9NwSHK",
  "key41": "26JiwWviebGT2nnoQrrugE8Mof4swe8nQB7e3Eoc7r9WTP2HryCD9ZCnGnQo53L8moZKsraVgr2bYjoRotR1CNQJ",
  "key42": "2yuTbfrBQVa587dx2NpjQbQ5Vus4v5cpbnpWP4PGNz5NN9WWPs2QRBd9yDyaW5QKJF36YyyGAVcBmYxsBUy7sA2X"
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
