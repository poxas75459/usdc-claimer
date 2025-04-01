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
    "5JU4xjyfVnMphDi7p6w83ZoddUvWdMYHM4yjiNoSmT2EMYAF8aEqTM4bDmVY4CTDBgCMQNMGdYfuQssu3HLKbZAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5idY9DANnBEbor1CAQiVYeRYFUzMuyXXRSAymVmAUXa3sYeFSkWGudS4z1aJmryzok3pVhwXbRuqMHaw2Bh3jB",
  "key1": "VSggwQurDddeUdUzEcJ16bs9q74QFbifn2YqE54StFB4juo7qXnnFq5SAaiFyqVCFMJJNk3Bi1mMwimd5V1MtBa",
  "key2": "3FVwVyCiQgLtbU7X36z72sZYbPrnf9F73QaJq4qSdwGG2t3pyzY1dnMykhLHSLeX8skf8woxWDBv2KPQXyDMLd2x",
  "key3": "5MkcU4Fwx1DS3C8HTEFajd3W4P6XaqokhBMT21JbA2wKZfFAf7jPLUqgmkCThHDoAeXgtuJBPo8zmeWCBSMriRGs",
  "key4": "2EXK9pMYYnBTnp8zzUKNYzNjaMtwLBiFowZPRsEoCg8FNsxCdU6rpKQj9nepyArUKHXCYp3qRfqhU1f5RBvNC3ap",
  "key5": "2NXNBEfjKT2EUtksHCh1JXfUPQkycjjkJJ683XzApnQ8RG1jt2yu8R241uUavT7RF7jYPqAfL7KYMBacTVgUnVCY",
  "key6": "25HUMNHEU3tcAeXFzfyAekoSLiA1Pg3kd7hquifbczWGZg3BwCfgQyB5niyq9nxFekAKazeqqtrfoPfHuKMK8VFp",
  "key7": "tck56mL29dyVoCZShTPatDhYQtsSe12Prdd4Y9biAWJZadkmGt7exSDjMX7eqQJ7AVfGLhiZzUUxVccCcYhTgGF",
  "key8": "4QNGd2kS26fod5nTNgJUzQKx2WiSpeorS8VK1mPa21T4xiAmy6pemqbkykR7MUfYEqSFD1EwyaTq8aJQjhoggm9y",
  "key9": "22R2imEQa3aWqdMD7RPrdMtVPPqBNQeqFwUoGnPuHjzznHqzsDfuhw8xbQ267aEayan4WAunere7HWcSEjgztyGK",
  "key10": "6213GGfUkYxNVciBqKZGaAg9YGoxZoYHErnS3dhTS5qewKxhPjgj3LXvgbcP385eZXpXvr9kJcvSGLVWwps7VjpK",
  "key11": "559iR45H36mUzYRN4vaqPzeHuAZ5spNsi89ExdbWrmtTtDT12dqXWioUB51VmNv7j4v31PrWjpnuYLRPMEnseqwt",
  "key12": "46j1R4irPUy7fw8jMNGV6cdV9RFcMw5igZLy7RFDnmRVVPhcoKcGz7wY5B9H9hZUjXbPWZUg5gHSLpR3WqgKDnCg",
  "key13": "4Pw6r5srKGUWTySFR5VetWV11V7egw3Q25FbzvJGCD4rFQpKTicX5KmV6SGfoW9WXcjgWFZgYgSJT3yEqcimArhx",
  "key14": "4giJjYS4EUcgcQkBb5j9qCTTgfutXesyYheLtSiJfjupfJU56Lsz4ejytv4ksVkG9UNjrxBgF1mZKFDHyax2fwCP",
  "key15": "4mEPfZU2ooXXPAofG5wyHCi5KFPH2BPXbT3GBfVZFmVaWfWD9t95AT2eKrcSKdp4tDPyyhowRRdGAUX9fQQAStX2",
  "key16": "4dA11uwXS2siYy9ACfSss1KBqJKLnTqTkBvCgZyUZ5DNXU8sfBxt8BeHBTAtPeehbpphS8Y5YX4hgWzYhoqq5YEM",
  "key17": "41DSrwNonzAz6RMfV5uuC5dqnkULoPzbdk8qtQi8nnQ6agjDN1gUis5z6JSW9JRdriTC68xAHna23NmQjAcCFdP3",
  "key18": "JB2pXqJwAYfKUs9bSVK5WTnwWVSH3Mdqf6rXmF5yVANd23vkDPahShnapdzeYEtPgt9ef1MMtaxpYNdYABogNBC",
  "key19": "2bZzQhQaLBY8So8gPpEc9YoPiJCtgau7LH7JutqWM3uAPsE5GRBNLaLUYQUqmmaKyUBNXHTKWGPcicPaJtFPB6it",
  "key20": "5m478fP9vJMdBCL6TeHgo7jjgCbc6PT6oi4exHktgTkPzRGAtJZLcy3GXM7kTAFYDuVbzLiaHNvSQVb4AHPa8ZP1",
  "key21": "65vxvJuNJJMXfNfVcxD2GfXLtpgDeyvLjGNppTS6xVfjHkFJM1HBeASEc4GGUQjtAmv5TdMPzwxfYqzPTUdSQji6",
  "key22": "58EWUcsDJ5d35ScFxcRSE5VYghiXesnboJmj2na5ajnbVXWaoDkbwG5bdUknuAQGVKDt1MDEVRt1CfMEYwYa9eFw",
  "key23": "WgbVjPwVeC4jbymbjjeXKjxKWfQcMcix9jMd7KrKtFwdRXLuoEtZmQ9hbQGLcnnyHK7Ei6TzLr6MmFTqKkjChNo",
  "key24": "3oVDPsdov2RfVjDv49sirZbFTWFG44rSWzfuDNXwLHcKQ6wte7UVEKRkVQ6UDYZMU5Xs4V4xbLnuHHv5CM8EwQ2Y",
  "key25": "4bpHswB81y4beiC43wpYKhe7ULsJf2WKnMYxtZWQHWjMm1aeB28BCYjLr7njn1chVG2pRSQMDswAk6kDtQux9vbr",
  "key26": "SKGX2xsPLTSTvKohv3TK5MrnJ21xevp5HXjSS2uuvPatw64LuMN6o2rt7iXRMH3kiZFzpQ1VWv5RKpN3Bb57QcD",
  "key27": "fWsc7v9tDizehfd5yJgQzCPjADWQV9bg5P9Qzxhf1rGd7sCiL77ebMEVToRVUTV2Mdw5uqFog8hyf7zAv5MZrHa",
  "key28": "33fDJejMDDqmCMbKrmRQKi51xotFa1dRVVDcjg8XGuYHhP3pr7pbkh4Mym3pXDjnAcBgCcUERH3BMvp75gfC1Sdy",
  "key29": "2p1ZdgjkAZLzE4oDGeeB8j2WVaqtfMAwK9HbUvbG5dH5a54T22APmwouaKq4AG18kNFHBJh5e8m1AHQHZToYQ4zX",
  "key30": "jEEm4q5x2y19nbGpZXRGn4QqN47e9Kwr2YJZGBGpyCpym4XQKPxoMVk5uFL8gtTGMZ51DtNPmDuZSkxzLAQxfmn",
  "key31": "2VjB6SoPZuRAao5ku5YxvKNwLDHrryj59q5wSEyX2TDf4LdzZqCP4LT2QgB8jmARxEhfE6KsK4oiPgibiDiKffgN",
  "key32": "2ZEYdm4chHNEbBs2Bh5fCn3rw5nHknntvfrduAma7wnJmY1uo1yuBRe3goUfXfNhFDPJEqM2aKrm6KZqWFJdddhE",
  "key33": "5NuwcTGiTP6JNkr4XKebX2WJpC4STKamDWvwT1dkeW5Kw3mdeXT1HQFL1swD6cbFM31YKAzGSFoc7N9z2CahtJBk",
  "key34": "jdVPCBPobkpkynfsgedKFrqQetzDCkZFhG6BSHdDoheCcECmMVnuuybh58LF7oC8GwK297WcqLTW1THFcVbR41A",
  "key35": "4eLT8FEzZahUWv1DMFuEPNoUnX7MDQALoPNG1BXEuJ2xgVR2XbgVkZbfxDRvKiUhZ5RbuEKsQN6xQmKnmWJ8g8Dc",
  "key36": "xhJ1HTweQ8rUG2dUqYSCvtf7UM87Zx4iicuJX4U1UzCU8j8UT3bjuNPmMgVipT1TFZk4poKU67i69kdsrZVD3Gy",
  "key37": "3GT7naZbuv2JBnbXmh2Hcd5S8y6dLYxuEai6JQeu9onZFW83LQRukk65bXbvB5CGnG3J33MEbsjfvs6jZtCTcLgB",
  "key38": "47HH7pN8vxndenLd4Va9kZtECaMfdZ23Awep5onqmZSCYzzkTHvZX9MMFCmV24Kadr6vAYJsVaEsRXKQjJZFJdvn",
  "key39": "47bTftgxy5xe1YEXBBReXMNmU8c8jtew4H6bGuk5Lwy7MmBkgZw8hrnyMTJCXtaur4FTWB2fBoSukvNNEunrntQ",
  "key40": "4JqCE2gU3KEy7bzBDYuvt7D4Ark3jufz8aRTy3FMbthPYrt4ycWtvMHQxvF4MpCqHx2MN2yrzqTEHxsyPBoRDoTg",
  "key41": "26KBcxxMPbxv4Nsc6ZnL2DAKbu789nv9ZsAAr38Fecnw5GsKHJj83VvnSQQbULi9DccPKQkV5zap9khzkYN8rHwR",
  "key42": "2Zsf3NdnxGvpDJyixYapoCYP8RBCiPhUsLKAwMCEt5mM2C9HAuFw544mfN1D7d4qusrE9ZW2jJE3ksUaNj8bMkjS",
  "key43": "8VoCHHcft52KzdKKgB7zPhCuySUtw2E6MDioRmGhozmtp4ttZegySorcaM9a2za2UxfzDt9fYWhDFRMggXDSnzD",
  "key44": "4JdxE6Y7vgV3qAmfRQqHHN9wksRMdwrVQr1txk7Pf8VoGzCRZAhUgGQgBwLmyYYyewZ6bRYpk5nYriz1EcjxC1cT",
  "key45": "5Z6XcHBUrbU4TJUKmYUxqXPhcMktzXiAPmSCNKaCEt6btjbUYfg7TWuQdHnoGLPjQsQZWREkLi8bQjfcSGyS3igZ",
  "key46": "4EGU3AwV5YWZLWkJJRspVAuGNHamk4m4SD2QHQyyTBW6akuGfxkbX4ps9JT8PYfEcHzX7i8jM59QL3T8KnZnWPkU"
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
