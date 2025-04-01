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
    "48MfuNAX3dXSNm9uVTzH4G4pp8oHUt9tTtVTDpcAHdKqypS2xYXhA9VfMpmoWWa75jXpGfoWKEtwM82jMEL2zKee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DDJfVFmAo7FRAnTCxn53StjCBCgYJADTpLuGv3vGRwCGaq3vQP9NFbJfytdPBzZ18UBK611wVrnTrqmPoemJemC",
  "key1": "5RbQqPicHzLyQdAUTX3yjkfoQxvHfBdKoLY4AeUcMP9JF1WM1EcVXkeoRdm6zk5HeFBYTvym6fqWA2vVKPhVZDHR",
  "key2": "25V5pYFdokoQXEkmwxSKKmZQB5vZfcJhvYbG3EYpsTJN8y1za3Sj6Z79FvYToTzQnhwkwjF2apMjNpTfFkQa63Dr",
  "key3": "3oSyj89ny52nNEb93cSpFrKUa65CQ696v1NQYBjRUb7NGPeALhmoYnWv18BofzcXyczcr9JMs7UQRFM6ErHmostP",
  "key4": "2kPe7t6hDiatKrvBiU9o6YtteQxqobZW2ZQ2zWPJtZ5REFWka7fb64wfgZZheMsq2YPYNEs9RaVjuLhjRutUSnnQ",
  "key5": "2wYrMdxQ4aftAqQqaZkN2dnGwXhvyVUjVG73M9eNXxGadH2E5b3pqUvtgedxVHN59QrFHgPQcshnSbjXDzBP5F5G",
  "key6": "5YvmzBpKKxfqSJTK2fWT1gXfQ97FHY3q89HZwvr6EVknFxr9ebRkVURheA1wPS7twYmRpUKy2t42Hfw31gwjAu63",
  "key7": "5QFSeoNdKv594WZMc1fJkmbL65PKeVDxzHbEBTojGyPCUjG4fnD4b8bPMCKaFaTB53LFXu3FjoBFky1xUoUQXJYY",
  "key8": "4x33u6heTzKfJ3MkA2fTn7jKgvLvSVooMwxy5Jq7Wc8bCCXp45w2CcmG683p4RejofmVPFehDCVnLMmirM7xaAMa",
  "key9": "5xX3F84tfw2btHadttykqiu4Z5TkDUdh8MoyvuLCFfpB1uFGPhh1Caw7G4Ek6dMFcSBWZcnFFruJQ9oFCPznQRXq",
  "key10": "5f4yyiVmSYWoSHT4KfFQGB9Yb8oY4xBXP44ZW6Q6bz8FLdfjKLSDfug1Zxhi19sispyRTfsVYMfd3sMa2R6PCHgS",
  "key11": "2csMUybZzvgnLfH4KD7gfpRMQV1sShWoQ6gfW2qWajiwrbKXLhKjzYmePtwkbhE6LBuepP1tWbQ35hR7Js71N3sJ",
  "key12": "3FBMbm9Tn1FWdxxNfvajv2R2GkrYYv5JnFib7pSESvQak3Lrq4DMtG7vhakhZdarVN2o5ZwfPD9rdJ1RhyVthnXQ",
  "key13": "4ehwsxut6utfkUFXXFoUpeM1XiX4gdQ7Cdppvs4UrRxKtgqdNhKwyPVVT4CcKNF7XdfjpxuQFXnzabwQUuoGUAJV",
  "key14": "4JoaMcvkgAA4Pv141sfCgzpSp8ByG6o669hTuZgXFgPQTfFQQRayx8veAtxmtNdAgr3y98DYr973kTz3hu49zM1E",
  "key15": "4TELEehgpgAYb9piMSZdKXEyFpfUXEVoNRS46cUn1f4J4LURpfWYPy8TYxVGk4qq1GfwNifZTAfKuHQmF8X2ALWA",
  "key16": "4MjHhtcvvRgHx3hWNoucNtcc8WKMvraLzzEG5LcFRkrDv3sfzebGyqk4fSjEbHUUS5VZvJj3jkxdVDX4CB1nwhFA",
  "key17": "3rxN9H8qQYbY7Ev76VSkMLYZSLKEdj7v3FzwyEH54zmE8uSvKRckgD4naKV1P4ScRLqLy2FAHJzUgRugLt1mpepG",
  "key18": "533Vvp85bgkDTgL2KrnMkx2K9T5hiBWUnJM4PqrHpRGNPB5pq9pzdVJv7jN6b48uoMFJrLcU7xCYJa5sRrJ9ekZF",
  "key19": "3gYX9ztDSfep4J2UtYgnPPQHnKQWdjHQkQwofqF1fHpAVnnHHaWKQB3TazgLVHgmFFacEJCnvkNJ8xuG7yFWvpgr",
  "key20": "5V54jFgb6u52BjwWuY7E4YXDAUQWoeSFzHa8m16TKK8kpbfptzuVpkL7nDMh4BZEtrq2KF4zWzmUQvKodZUJsiND",
  "key21": "4uWhokPcyCJdidMuU9NWnrcqZ9wkKDezKJcxYosC7LbpenE6uCVeCDRNFLGrqdxTE1kM3YcqoDHz1s9pfNDdmEgQ",
  "key22": "2RxzuRSt991tnwBRD48eHUiD8yqkd92UvgAtbsv78QshLEZN8BZtUM7SVCrwnf3v1KUf1PKmk8HusK6oDSgk5aKH",
  "key23": "3nLwpbMTPRtyDJA3xp92X9zG6gyTgVxzYGSTfgDPJ4gRbSG1hqhvonPN9hE4yyfUy6E3yihd2ekbR9q9TG962pPF",
  "key24": "257o5Tdpan6EsYV77RfAVv1FZpm69SgEpkPTTZE4j1rS7N6wrcET43EbBFoBxaWEyvfKdpvwGsLftoeMPkMcdiiG",
  "key25": "2wxdyqRDoVKkqM6ZJQFDu5rwxjvtS2n6oFmkZHYEV5W88bXas1R8v6UcTBC7JLfTSFhrhwRDrH4LpKmuvmuYsd4N",
  "key26": "4E1stqkK3QyQz9S5VCsmr6shyKQMf9QNFQLSDufPUyT8P8SNNSWTPHaz2gW4QYCgHUCx7N7DSao8eZaj5BAD8B2J",
  "key27": "4DNw458FV3b7kSyoJ8t2iiAWNxYCsVSxvuCDQU4fcZTgL5nbo6bB4ZHgoJR7Nu9p6S8JBR8kZutTWbCSVBLu1eXC",
  "key28": "43XiXyLMLPVg3QfBbMBHJaXeV1r5tj8tViHeTn1Jhti8CRLWMAXm9qK4TyzDcKgj3uevHydzFPRBzvqSf6FRF3Zk",
  "key29": "2uMeuUVs4JhTsZ7sRVUkzx3Xv9Z5ZjBDjUm5ZfFtrQhCE1cLdsgAHQcyuxDKUZu6xognspxZgf8yN3BJT1FWd629",
  "key30": "63q5q2w6e4pDDV9mPVy1hPTZ4xipVaHJAHQ3VAvnPAmvJtvHVBubWr6Y3NaQwLH5BiLdFDFUQfaLLBK1R7VttwxP",
  "key31": "3SNsbwVhmo3yuciQuZzgCCmr2wCx3X4hVkLbqpNUuoak9uc9Tvq52mBNVnb6hWsULk4VH9rMbmqnczjoB5AWfQxS",
  "key32": "3GNLvrY22HdZXxCcibFHZVHUdmUjEHxG5PXJPJNBxjhdT8NpSJqQjcc2r3Mgq74yuqv52GZynKjuvj3ng1EWzCoX",
  "key33": "4pAacDHamSHSTvtj8nrTUQ2z5P4pcWXHcr13vYWMcwF36eEvXPmeafsRs12QJP4B8jfUMTx3N3QDYzUyo17PpEox",
  "key34": "2bq9GmBCK8baekrA4TCt516iZfQVMtCo74vTKvEcLG1MEYsYsck5eEV6uRGXs3Bv3Mo3Hq6Xf62SM34nUSJfy3Pk",
  "key35": "gqthcTnXF4TEDoo7nD4zer5wD5QWkK7uKseNuAqiCWzx7VkC3cyViJmxS9vyqEE3MK3pDb6Zsv77Cs7igRnE6Ef",
  "key36": "3HyrwAQL5nm1vYDYEkiVzB2Ya9N7uvaFcES4xpqqn9XeuoifZCpEkGhFGvP8XxBcYWLJYTr9Q5ou2k9c4FWYinva",
  "key37": "5sw3iAXxmxGUkRkvQmMAfKx9tjm7NvYJwnzoyU1w1pbKipgY1rVcAEsnFWEJBgniJC53nsrHKYJ4CGdrQorJyMK4",
  "key38": "3v2Ea8BtgtugXweMjdE8cTjcAMHtG3xWsPZFeRguey1TuyvigNVjtRk5sfCNsEvLvinLY2XDWGvfnK8PyAgKjpKd",
  "key39": "3EZ8F1WiiJC6XHZZUZZCPx86KGaS4ozeq62nNha6rc4yCFDppKyRMpt1nvb4h9KwQc31KYGcJGE9QSEFR4JshMEi",
  "key40": "66v1HQqzsnYMW1qwi1WVtmL4eY9GE2riTZhhTQVWAXmgRDv2GPQHrVjde8WXmBdTu2aEBsDk2FV2LcriwFuYrBXX",
  "key41": "5emrRbRkct4YiKd1q6u4bRCTEHmtmNtwyPu31F1u6FRRj3EQVR4VTxTUBL6MXMEHdBH4Vd8rrn3sPUZcbyhxbU52",
  "key42": "3jEhYZt58A2RZT4V6PwFvsA5fFFnD8ndV6ShogrDfq8PYCKcjAe7XUXT8xrpd8buFXM1Mcu3hW6byDFUyqQ1CG4K",
  "key43": "5LqaHhVKYjj7MehuNfzSeK1YJYejGF4iedW9m1Ro6JNvo4Jwbheqnnc6vj3ju5SBCoByPLPGYZHBacP9h5r1EWbD",
  "key44": "2USUDqAcwcfF6mBYeedRdFyFssLwjAU54S7vAyaYYzYwVBCvXVDFXQv1wFdd9tpqX3t4GPjB31rr9iRKnn7AFz2W",
  "key45": "hwHJyrksymmikux3CzYGocj2vyTMMSdec3rdDNcBxMb9ec5JfAdDm8hnDytKKdhG3LUxpiNL4jxKJrz1TGMW7gt",
  "key46": "cqPbnUTZsAhzYeFFxojMXVJBAEN7aUac6g1zbxPqudpkHdMPf1FBh1Jcpa8XV7XQ9cXt3ucVHVxPA48NWhzEnDt"
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
