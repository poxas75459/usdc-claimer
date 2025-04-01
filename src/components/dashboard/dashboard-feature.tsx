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
    "4pkVc5rSCWcFxsTAMMdQ8CiSQ9BKHpZWDFwkXgANNRfsfXq6MzT1Jj3Kdr4dMhhB2fkEwhaUL22Rkz7ND7VfPE6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EEHNFGe9We7fhEP5mJwmUhcxF5KTxpVk7rKdHvXNNCbo7nNTuqXnCZB1vw6HgZfxficiEnCCCxeWwpLxgw8AB1",
  "key1": "2aBRLaFCC6HmYbGZMJiUBZP1Fhr8HANnwSAw6LhRxB4KcbYG7dG6eb9PcFCUgk6YzXutD2zTKjxBWxWepdaSktwt",
  "key2": "34ZyMat3dikHjtzzCQaEAs1n6kgBddMZShS7jNrTLRVRobwTqCaCD5CTHR2EVTHfH8NYf2C928VUGbsu7hmt9V83",
  "key3": "396ebcSYzAcFHCQiwbmyNFsVYL7Bo9bGXUeR16Ma8Qb63AtP1LQUyUjat38pQioaL7mx1B52ohnjtdW8VtEDNcVc",
  "key4": "4kgyzudEPPEvBDNBBToz1dUjehF2cquhjM7rPCskdWR6f8ATg2oMZYgupbHq56LAuwbnwSbV99cbWBmSq1NN5SHQ",
  "key5": "3cwRGo8cBYKmNzEJ8oqutau2g8aELe5wmPK6XAygw3pdKVVXEmggx3oGhe5qAkFmkpiWVKv5r1XawBkb8bVwFWSD",
  "key6": "2EbAfLXEd3xcchGyyxKb9QCDQDCmNgwkoHauDNDwayz98SSjEkX5MMAZETzRKXLuqVBcPbCXaBWTRXjJPmH1HXUK",
  "key7": "5CQZj3HNGZc39gL3UBXvzRWG3YdofQWJdVEYPKP8vFnq6GSVMpTHbFigx6GEc54MFkvLbKBjzUDJGWB29hJs8PnQ",
  "key8": "HR2hAXbTTDuuLxzuqxjC6YCvrvmvA4k6b1cXr9wQm6Kv6Ci6CBvx8RfKnm5Wj644JUfnYBq41zLVpqGF1c6uZZN",
  "key9": "5EbPAVHccC2i7xB6AaLrYUaPzBi2Jo3Mg7zKF7SGoguB4Pq2eyosY1CwnQ3T1ZjetXm92Bjy1gdd1ubSQDnvi2YW",
  "key10": "5Ki76zMqGUUptuc7oTvZaQqu1SdxACeRrQiFJ4kTrdByx5yMd9yFrpsgRyyNUX2MLsLXKduKVEaM7MweytLZdjvK",
  "key11": "3w42AkGEwR3bn4EBLbtWHVBgiPKhWhbWPkgscv4A1SF5bckeQL3nySiBmAYzKoCAW3jD1XNTBJqGXrR6dUtZUKfY",
  "key12": "2nFP78qErcTkkGxoHed2Xcxj8umacTXHYStsjpe5myVvPjcnToan6xe7tzNXR1GwgRggacXWCkUNnfAP6G1R4KW4",
  "key13": "3PhTRJLcMY9oXkMqZTf5P3n1tqW7jMxzPUZaAUSyhiGVhRsA8QDyavMYQ3ZrSA3gifqZ678cGJTk5NsFV5yCMkYH",
  "key14": "46h4CJTTDT2n8TXr64KqMWwmSVSNVa6A5ev4VFX4McfAmC7bn337zZDZR9emvEvDjGVSwuHD4aeYAhXnMjedQ1tJ",
  "key15": "2eAfRbFAzPJLKF3WUYzGqLZBcXah6BK8SwRjLRuevSm15yV87m16Em6R8KaJkHoStoezDvXauGGT8RRyLgnqtHsi",
  "key16": "27BmnAUGW1mdzRdVH8gDdzRUsr8qPivDAnEMoPFgZ9tGVsZikCdCjHkjaYH5JvAFY8qfcqKSZvGCxTkoABzV9fg4",
  "key17": "o7DAek7EohhPJYyePKAMvQ6jsHNnG1xyXS7VuBK3KYrH8evQQbgj1oqYL53C7MuDv2JwSFYMsFTYrg12EzBroTx",
  "key18": "3Moihn9p4kCewAx8WYhMqef77LzF75qBjNoXSwtDS1i9cwLNaJAxKkJhUPabdnWykZLxWdczaUn6t5TQhrZzAFBk",
  "key19": "Y7zJyLMJZnD4TCqLyeSk9xL4DLxGkEHQs4UFny2k6nj2szqadLs6Q8QMtyBxgeJX79ZpVcg1wNSH6rAg5vjPQNF",
  "key20": "34boxXQmM1YSZ97THviHTeXY346XxvinMxBKX7UxCEzCrxiJapAjSy3vMmbsfZCd2pPtY695Yr5rdtTNumrs1B2P",
  "key21": "3z1acu8HZof5UNDDNSDpkjE7UBTmCiREWR6dku2aH2Aqz3pfFWwMJE8UVDMi8tg8SXtC6cZpRD9CCWoUn53WRrxv",
  "key22": "2Bx7fgX8NTJ3Vikir8m5ZdDtqbAgBsXHo7GZaXEnM8fn4cfivKNAdSh8GsdncCTsHs9yhQ72t3ooTYhHPVu9LrRp",
  "key23": "4CXA8jCREbQCv1EirWs7p5q5XsgYvcdhM78rEzzXQDxPYXPYJdmwVnrA5gs1xYfhcSc5pmGRn5tjtMSZkypvqMv7",
  "key24": "eCQxFY8rmPcyeNqyXgZdAf1UJkUyLUZAR9GkdXPHDWfTnKbqMSVMadjPL9aqYesYY4JzD6mh2mMfMCC47spAGNY",
  "key25": "67XSPdDYM2ww8yzJjRru1LEZaUp3eBkoVMbdDjK8g6suqC93rZ7Jna7DHpjau4AKDxoFQTkbmyYLmdLHhe25v1Tf",
  "key26": "4hLdohJgLoVovavXCNjhmTxiuq1xC2H3NmY2NCZ3BEefRuw8mp4vDrmejx5K2LWUbqsJuzx1ph8HHnZvLa4a2nqP",
  "key27": "2UmjGLDMb8TLg3JL96ae8p49rXeraDeA2ccmdFU9WwrRTeALgraUZeAcu9Xo3mEtyqDbKRPkK3RLvriac9b1Z12o",
  "key28": "5KbYepJddhS3MFVUozkKNM6JiTmCFVGBvgih4haNVB1FJZjj4HaGX5hFYQrMBbTYFA5gs1X9ULHk2DBqansh7nQY",
  "key29": "3r2Bm6F86bkD7B7gxVMVxRstDnKcBbKinsR63SDrZqUJ3kuDXxss6SnXDKsvtMVv4QS39E43uCbU3F4uRKMshs25",
  "key30": "4cT3EcEziB7mkXC3g4U5bwnRRr4pYHU5S9udh6C2TmMPsjr7EUAn8xZJVNypRgF9wn8TRejmkZb9e3HWUELvLkCb",
  "key31": "613sJJNgapLWGcNo8sLLihBAxLbeCdSxzfuKcZnqdwgLKFNQVNXHskRxPrxJ139PDYzRWEdUonCUmjGZzTXLjdwv",
  "key32": "3xb8wT8Fi39FAWcTgtttF1MEqgkfDUbvrHfEK8ELCYjrNBuXrbV66nBMaA516keS5Dz57Bfz75fg6StDerc6Euoz",
  "key33": "1p7kyZvCryf2uGMQ1L3uQLd49p4nikDqbopVekU2ti3gGG92ehG3vnJdhZqJrDq3kn19EwA6PCGhvwgPE8FD1jU",
  "key34": "5VWWH7QjZwAkoBoenu49BpdnmcjQygnoFRK8VnfTBCkdZ33mqMe3FDv5cm3SMkkUHwm93MTpN5AL6HpT57uwEvbp",
  "key35": "2eLqiWafG4PGCSuJpxMbGU2YKafkSqb2zLmZgjfBxX73N3gsnpYYeHfnRi4hHsgbTaiyDDDLWoS9b1misZ9X5zip",
  "key36": "63MxYRM8A9K1sX37L7N12S4j5jdUXdZ2ZEzA3ohhLntBm6wvDgskvr9v6wqQuQAprXoTfkVZsVdutTNf5Xp6f68P",
  "key37": "5u8Y3nf8grPURgqBALryi4WWYu6MiwD6gz8BVNtdLKoGKYDut6QeLmWPqNZhgA4rttGxfpwEGLUbdyeb1zPRCLS8",
  "key38": "5zjXkaASRMAgXmP6nZDMn68A8hsBu7KkyoCYNzKBrcpebcGh927jjHBNxbecvWkGKNB3hT4sc3CXLYQkBDiQ1den",
  "key39": "2urdu6ruBSLoNfWQJwb1t2PqFApnamMSKtqh23pJq4Z7XwKFp5KMnLTj4eGXTb1fWF6xzzTALLxJrYHVdDFTzC89",
  "key40": "UweHdt8zKz5rcgeQJDdnDRFxzBqzgckGSSHgZtPEXbpMZq7vYrFRRjmxJRgLrvrZRg6b6os1zMhC3qLETRMbQkW",
  "key41": "1reXVSWjuFVCGUEoPgu2k15prUpYqLydfYKV3h8jVDyfbCJKpuRz5ZvwfAFYxYkqzdb8nmSuK2p79HuZijgtxhy",
  "key42": "2LVjwc8ek3BvXhKF6p7Cnbrq4WfaWj92DU7Jdcb2nq26LZ4Rx1pLnPoGXEe6RgYqUrBcfiwuWUwequurUQKBpPUZ",
  "key43": "5Bs4hh4mMGsGLzE363eK2abujAnGPxpBuFD7okE5SA2puP9SjVHyFdhWDtcepS5jP18ccAo3wAaLGVRdj6UmWhZi",
  "key44": "24jCkoqRcu27cyyF5nvok5HxnFqtL8UmgCaAzCTjPSxTzpGSLKycGScPsQ66e1wgnqrne21gMaTAqbQJUUS9jLiV",
  "key45": "45HWB4UeeGUr79Bbhv4CmpkipKjP4keALK8VyETDeXQgzW464dAZKnEjFmXViTf8EjJQZaxwJWLdpy3X8ri4zrC8",
  "key46": "3enbKJWAHf1n7fU4RxuGzMCs2NRWEBYXMgVaVAYt2A7fg9EUnG3ijs9n6HSZAuQb7bfH9qPe7RtECsJLMZ6MUGka",
  "key47": "3UrtiBaAo77TQy2Deegs7ZzkDZPaSDHD1RybNFpnZhevxAdCw1zt55oeiufWr4AbdHeTYiZRpNnAy9hyra6orSoU",
  "key48": "2gpX1bHz3ha7V5LmLmxuQyNZ3nvBMWLEatFtXenbi9qgg38oCiCx4E4rCoJYC8H8f715psCWDbZHo9PYNyMbi6of",
  "key49": "5zCprGmANR3XZ7P2knhFVMHV6mSCTY3fr1tsC2gRf64uLzo5tRf3gCThyNWe1PQUtFQN2Na1dbxiPKNiG7tkrnzA"
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
