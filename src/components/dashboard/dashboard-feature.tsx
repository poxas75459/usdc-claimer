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
    "3ZXLmEwVBjmma8MX7UceM9mugD6dNoTE6RF16mCrg7zuSoYr8CPhfGKUJPEvMLR5d6H3R4UwSyZoZmc6WeGgXhTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rQWVn2djs5ieVEeMEqAWSGt3x9P9as2d8jsMxHSwLTav6WdGtqP1fvmLjCrDqVZhKaCX4rGnwUTrayiooJs8uX",
  "key1": "3EdYF9Kfy9SJAPDXW92RLsMdcxircEucEcZHzduVSL5oquCnqiDMuwRnzfZPE8D7jqBJLEnfGAK5XVZbKYT2WP98",
  "key2": "2ghpi1bA5FCWJy4aXjC6AD6pkNgncVLCEmnMDoWsjK37PrArX3m6D5W1ewnSMGTScU4JVYEqz9kihwX2pADPUrN4",
  "key3": "512mrCfLv4MRgA6WAei9rgbYN2Ppxk4bH7FMYtKFGLX4AEmBgycHuMUrwbqhiXjutmEBrp5LGY87gWDPYWJ8zaA3",
  "key4": "5Eq9b6M4ykZ62ank5sZVEUrCWJnxPPHvTpUeEhHunqp5AepbBZbvA6b2AofBApCmWHN82U2tuEyy47i2n6WJbmp",
  "key5": "5k2Ux2E4PAobE5umBQZqjJAfxGCdRqcUSQGYX6jLBVkeyjVKHq9gBRXPCks6TpHrSEngyPmWQGjDHicjxYCyDbqF",
  "key6": "6FJmKyk2kLqHNrJd2imtTN6Gawq8R1UyGDHrQrP1ucRoeaSHnUPyZCEWSmmbLJLHjrU4F13duJ1L9r8Pk5hbVNB",
  "key7": "2SAxSV4FQCc9rHBfFaWoco4RQGn5og9etvsJPxo2wLXo6LfEGb4pVgJ28wWrJ6gwFN9qWPDRdFVSTUbbQX4Kqy1z",
  "key8": "BCwhwTN77SJLr8jh2CCnDfWbcdNAi5SxvUhKLERAd5czue5A3HzwjdHLRnPtAG8niGDaWPfeDYCG9n13JNYVwuh",
  "key9": "2dCQWvH9ibYDZvevtuPcRCApguHX9qK495mdkDp4ATSr4bMJ8j3PABkAQ3J5FW61rWmYFe3YJX8PeNuU9HFRzuYN",
  "key10": "4uKavD7N1LXGCdCnodNM6SsibqvpW9XmLCcJj3ao2jGL9XiL5vAyea367Q7TKbX8zSDa7ZduHEj5tpq2XDwSdMHh",
  "key11": "4JPYAAipEWiVAJJkEfqzHKr9YSGMVTUwiAYjaP63fAiVA38TCbXqAKWMfjUz9kCh5vGNysAdCvnwVDMD9zGqvEw8",
  "key12": "3eaqayoUaSPL7VijUpaCTsbMN6YwAbxxkasM9QDiR876Tmazc3meXFa9REB7vgpG8HiisM8Nazrxxm8SFDfqfmLA",
  "key13": "29QwwuuLigQtFqmtRUvq3KaAj3pdD91vV5MYG4Sg3T9gcFymERMihe7sA6bPJ5t1UqSaMR6qfisdPLLEbW9Fzd4H",
  "key14": "4hudxhDt1S28yb5zYAV6pZNLTNep3QHQCnHyK8TvkeTBYQa5ixgBG4H3P6wSGAvnHxhW94zXsucnJNH4RvyYXLB7",
  "key15": "4wooQigCzJPn4AJGPQ8Rg3sRw8C52byGSkBdexBiBNKSy2zjzSAxTZ7MaXLNXcmQxskLuUpiHycMoWSfS3RhNMRj",
  "key16": "5epw9zXagTLWoDMUvGAYg44QczG5o43q4QLEhUAVysD7Fbija383T19WMNYEx5Qfy74hcaUw77cZRBvn4QqgMyAF",
  "key17": "3fghqhJKWtoJ9WhmhAyNyQT1zwukbmzqWH8aJTHjmCFCUCMLaTBdBCYL7UqQkWK2m6bmwneyRwmZzeaCtpctXL9V",
  "key18": "PL2nQeFWggUy4mbNdPE9oAPavw2nvG4TLjMGsDxyzdPc1hURkWLU2kMojcFEXUrZuqex8WJToZ1JbELH3mBaFvK",
  "key19": "3mfVzZZug8mc1r4cg4uepYpq2xYbz6XbbeJhyP5WV3JttzuhpVxwBxiBHfMTsUKFLYA5dP4SE3T9Mz1XdCGe3Kbh",
  "key20": "5sW1Be3Ej1A6CBRJMBpqZpWNx2gaEPbRerfTBLUF5F6rN2G6sugKxigZt4d3Wuygc2KW1UqBznc3wrwkRfHCG17U",
  "key21": "KvnYV4wMz8x6t5VqjGxHSpbGDXPRMmX8uDEhdLKfq7ydurGk5hA2MD3Pi7zFfGZDs9D3uRQbRti5WSxQvYGWzJH",
  "key22": "5adwa2jwus9CkU5msG4czCXnKviGC5Pv8y41Mtb2FAciaFkJ52parPsN9SKM6mL3stfQNbHtkGia8MLSXptiSDv4",
  "key23": "4AUp1J39TWPM65MsLAGEtoRAnp3XxT7kPwqPpqGS9RVC2T1zkCWK5QJV4drW85P2eEm74vpLSvGVHqso1XqRCr3j",
  "key24": "2hpwUQkWKgvYziiWUNg9S1seoE8nDcZJegLW2XgP1r9AN2FyCxA1GdCw4bnTNZZDf7oRZAbGPDWyUc1rS5jAR1CD",
  "key25": "59GZ8o7Joibj66mCXFKe3FbgGjXqXVTn7nifzhDkysere5B2dK3quUrPejTePb9nRgP9FKBHyeASRuPBfz6SyzuX",
  "key26": "4UNUrHmbXZ5emQ2aWatu2veabU3JwY6Vw6TbxZDC89oQsxxNQXc7cN1UZhSGitzdTyutHEbwMKCF5NBdZfTRGomC",
  "key27": "3UjW5okUPmZZbCTMw8YU8B2pRAPZvPTvVwGuaS8sJdnfUZr8ck5DF97M1bEmxLKB5zdMvBDtRCtukKFvL8iU8e2e",
  "key28": "H69pHsFKFvzAXQsED2XU81PX8gyL4acbq3tNCNXnuRb3HuTMyFaqwQaUzS6g2txi5xsFLgtzCVDmcwLdc1fjfgT",
  "key29": "5QpmAAWFgsooG3i2nd1A3rToGTsH5w98vkuh2s5RxiyoRKYSnttUw9nAR5Sp2FAzQiEuCEtep4Ti7kUEcknhJC2S",
  "key30": "3mXq2xwC46MnAXaczARGV1v7tiSadiH4kXkrRLgYsstWKXTwrtA7TuivEVcdMPjbTGvzWJtSDMP5E8hcV6rteFEX",
  "key31": "482zmhnr968FDYKjr8caMegwSRMqzkBCp8pGqAKANQxRBK2EaT4zAD5PjrxLxgE834rKKuEPEEN3GuUqY2Bhybqe",
  "key32": "3Mp6fL4uf6bmKLPvwh36WRKz7EdBdnSnTrsbWojttTcHbz5B6UTUHEjT6aNv2hPsyY9HZqTaon4xH4b8M7EksZXR",
  "key33": "2K9QzfzeBCKoWnyMrzeXKu9cQKdLbDcg4n4Ea5ov7BCahMLeAMtnKVAWBxV7wwV3ytZQendc3H5qriCVD4Ccc94r",
  "key34": "5dVG4mWcTm4DHbsiSxcakybHGuw7oFmNp1zUyFzsP3UmiQSJ8jWWZTn3sY7kS8cpryJNVv75D3JNjEMj7YhVaXrE",
  "key35": "2W5tCJRGVTo7xLPmUSFFbFWNfHEpUvnSMcy2VPZZswwFkMDDZTh9K1myokS9mhkjPZh6mxTgQ27mgdGNYy4s2bG",
  "key36": "k3EY9HxQEKxbyzKu2tVmoaAmdPxos4gDq2FmVZLNAeHkBskYgnKubtddfoKgApAAauC8HEnoRXA4cjPHkeyDLPC",
  "key37": "4YburnCG3ViqxfH6a5zNu6VRaLfBSgB6RqFNPVg2riH3Wn7ywBWu7aosnmJEWrvh3bwu15zC8Z2VkzFMBobChkmA",
  "key38": "5cFi5GVbdJzXqvpGSJ43xFN6TxMuuavEDYWeEkT4FkCZq3oDLL7Ken8kYj4E7U2WvEBTzs7jBjKxi4NwGPWvp5uj"
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
