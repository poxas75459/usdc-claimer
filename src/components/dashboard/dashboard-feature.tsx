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
    "2y3UdpobusTasCRWsuEAgZstGCzRyqVrpmrj7x1EHvYSGHCQrjbaVAydi2CVoCbkwX8tKxUS6XEuMfbCutN2n2WD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7Ks2JsCtxFanrnfqkq4Egz6YLHC2QBKrtswQoLRsPcfuxw1rx5yey4q3KehvpMzt1Mj5DGtfdRNR3ij7SRTtNP",
  "key1": "32eFQrXLodUdwviBSmfXpRCVWD5EAWVKgNGCRPwpT6sncCYbytTcmipjW6ymYpP4V1TDLWeR497CL6KEdxV1wTZ7",
  "key2": "441JiuTz6s2aN8RozbL6UnPLRjZJXUcvtm6cak2gkH2Jq2uHhL5HrkMujWx3bHaRhhALsjAspCTVbmmu6EMzaTqT",
  "key3": "4bQnK8AZwno26Apyo6sUmMvNKkEpE4J9k3bcJ3KHQeUgaHHQQh4pvzVNceomp5ccZDTR42QsnTVwVzPKVNCtUhah",
  "key4": "3waV4gQ8iFvJpzaWJ88sib7Qz9Z9zeW3QdUiesSPTGVM28DV6bdiPgKYVjnR1YmMn8jdXhW6GyJc3fK9YRjF5Fh1",
  "key5": "EJhnxeefQePZzZdtsDfjoRAWeGBstBFcoX5fMajyfH7xP4BMKLrPPT7CMjGdioMVx1Jp6A7T5paen3mBNuRienV",
  "key6": "4q95X3QjX7DguP8JyMifdww5Whd4KvuB1wuYLESuucLeNh4HUUmF2BjALgDzwzYBjH1SMftRt573Wb5YcSnhEu1o",
  "key7": "3G97UgwxtkudjYCxktHRTnUWxhFV45iWrMqnwkggyztjSqZfjFdPzSNVQAEKfLxnm9a2xfdBYyzmJ1RPDWhrJU7h",
  "key8": "63okH58ujjrUx4mEqiHgWV7X2QNxF38pzm9EgK4g2GZBV8yb5KzCSAKPfY9Jmo4qw7qVvzRVkRTnNjwEb8DJnao9",
  "key9": "4U2jQPsKCDVnFUAb1ZQXB7oNuV1DvkxAnG5M23WnsYebYjfbKWT6jj7KUFVXbAQL8dtXmzrueiqSryJmMoakPBdy",
  "key10": "hqK8dMHPkNmMN17veWm3AzigwbbUbazSiDaV2zKHuqziZtcd35RFUtZ1gSpaEpRBHqa5UKbVZaNNKgNUJ1E8aLD",
  "key11": "FivP3sc7ht6Y7UiDWNWFbC7rYwvV24AJGwR9WCbcPbK7kEdD72rvkaSJLyP13nCRqp2oPneeohKgQch39BUajxR",
  "key12": "2UncgubKmDAjU8HhEK5pSRJcKCKWPAa59UMjue9S7Y5JiXhjg2HYe7PiUkCZzTHB6RXeBWJnfmXWD5Lg2YTN8TGs",
  "key13": "tV33ZPj3pm4uysDFF5WigUTHTNgzZMAeWHLPe5WbLvbhRZdTaiwLDTRgjvUiuWcSuyJD8BjbTSDQ82g7TcGW3Li",
  "key14": "M6qQTpP18iLP1TY6FVhTANBC6PeLLxSEduuG9LVFNoyWVVu7gq9PnqVzMaUKbYiLLkCXJNrEVU23ubJiJiGGYmz",
  "key15": "4oWBVUFANWMmMQB5tfqpqqmzDYQt24f3hughmyMXy8WG1Fm3EGyRK6XkXvMFKDwLaY4Jw1mraQpcGHzjukDqa5Ba",
  "key16": "4CnASDWnjCkkrnCivdmxAz7xUWZgwLUSv8cCejoJkJNdFNgB7yVVEAJmCZ8n14ekX9kXG9Uvnv1LRiyvyg3KuNHU",
  "key17": "3dxqnpNF8WskyR3DWgW2csypCte2fpPZiSNmhA1ikUE3u7msZzYWuAqcdkEEx95uyozrdRmRnwQ7dkv6nobnMFoj",
  "key18": "2dqihKfyEARHB8E95p1DcoQkLmUdef3tLzTnpdjMLeuvdjo1t2V2r5ncEPfHsYMGs28RQqSR3BrGbneFrbzyL6hs",
  "key19": "uxsnt9tUaJMyXbyAz2igvU4JdEKV8sCRB4EQGe59bE1ACrK58XuoSakTuoyDpxTYhk25ExnoNVDGoGUJ5cDNxgq",
  "key20": "2qkDUL8tcq35ADbLeXyEA3h7aE48LKBw5eUuuwmivQysGvPSSRVupwdN8KzgHK5WbmYoc7pBAcBpkTzijnSxnEi8",
  "key21": "5yDDWYz27fmFh4nxozARKfNvATMjWLjvsJXtWygG4Bw1Bwec435xQs3nMyVJuAorRZTXDy1F2N5bE4j2Di1Xdegw",
  "key22": "5FBBMtwZTrjkh8shw5yDXgUCuhN1LRrEHrRmCi3gi7MJAk5mdU1QFhudrK2S2JYhuJHr36co29f8zCn5KY19teMV",
  "key23": "u2q1LWpQ1TQH7q2qstA3wsmwtufyVsKk5sDjRMNVsP4wUAnNud9DmPvzome2j2AXMe8gK9SSgbxDUVFcZGHDFLg",
  "key24": "661V9rtoaJY7CUkeawYjNJQ44XdzhBQiADUAswystvFHmz9JahPFmJJvJYGmJFn4TvUV7VnWwdjGG3QkvEKy7cRE",
  "key25": "3nwDCmH7cT6hpxg6NCMpsSLHczWwmzNfD94NoD4N8nRyywpxwnWNyda96sbBDSa4uQ8h9ekvNXhAQGiJNndqm188",
  "key26": "33iAvsRv7rv3pRDsroAhcsVjim3SQmdLMr4Andy834Kh2HMDxscmrHK672Gj6i7a325jjsh8YXxrUG4wUEqfEShy",
  "key27": "4LVz4LJocNar16JgfwhXMA19vEbVMqfx7ULwNCtbovQPzzSUMKUAdJSThWCSzwasYaGeFDJG6C1JveKAkiGYA4XK"
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
