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
    "5TSdMJDcobobdd4THrSwBuB221HfiGo9vUTRHaxtp5ueTwnUAh7X3Bd2mecX7nMU8LJa5h87qq9DoUW4aCGzGntR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UU4G9q45Y6DCvArQxVjJP9peJwJmsb1DPKQ9Tk5rSQXRmJXguYqoQeTcJswcssdCyiaAUU6LAv1JKXWbbj4nBCT",
  "key1": "64BMs2VWPZZ6HkeB5rHTFFS3YD1Rt4LaBumxt8F6AjbgZxMbEoihMfDiKfUtuB9EGv7BdpFCq6Po56LWmqM5dTEQ",
  "key2": "3pppPMLeuW2ikrKXvmiKtjAuuJ5VvRpZZVcJaeZavnQACRf72wQiAYCni1eu7rc3yt1bTigT1YLhftRV1agDbZvk",
  "key3": "2icDbDTKD4ES8bYQLUkNG9Hc5uG6grZfrPfPqitLLNADXQeg8KDsyuxQL4kNcs441T16fvxay3L8mbVzuSAmnCYf",
  "key4": "2hVLYEtHeMfMQZWWH14a9kbbTYqDsSaGfJymK3r5xvQcV69w6K4RoQZ7iPuXThHQThRuSnHwwAFAhhWdcKHLNNZi",
  "key5": "2m7ymp88wQ2htiLt3YW76E1skde5PdipJLrFC1jpTNFBUcS7MYMa9ijLyKoBCRrcuQLVEVnaHphuBj6hiTtVL84V",
  "key6": "59e365RKanjfZgJNp87fwShx7BUjKE3is4bkWjHkJYQSnjZasE6vzPpmQ3uxDhT8zwtsAeCQpBeSDjo4HxfHysft",
  "key7": "2UWk7saYLtqonKnxLdC6DHaRRNquZ5XKJr43xL2uNwWrwGfiwtgcwNREAdLNsNyxV9hSyb5i76Pm9Ky6ayPr1xRz",
  "key8": "3C7pCyfcQLBTtgjLWnQ4PePKZHmJEZX5t2AL72AKKv1zrSwwF9LLE8gmqsXZxhpT2FZHEg7rcqQ6sesJjxo82jmM",
  "key9": "398c4fU8Svq9iSjWUkGKF8pLbdxHbFu9URUNjE9pezM5ogxQWDVShy4czxS5s4Ha7dxUy12kyKapewKicTuKBCRV",
  "key10": "5PBpasEcSggR4xHGCSWK9etZz35uUQKRP75nJ4pngBFs7Zi2iFUdhuQrgie4oYAjWWGPcae5xhaKh9GAN9EDpWt9",
  "key11": "3esFimihA67NMpNzix18HnhC7ipz59YjknrWXiwjfdaFSXCBi68C28EZ2rqUNVGJaPmVg9pAc66Ai8e4bf6z6cwh",
  "key12": "62oGX1JspqAiid5gdoCck99oKYQejQmwt15cqXMSedr1aQo4EMaRa1wmAu6F5v31hcwWGwypgoNFMJ72GTwjduK3",
  "key13": "5Y2BHadDyUZU5VqroLuFTD1KzPKVMgmBfFbzrRv57mZaaGxsSxwLx4uhKPBg9zVt9ux4GuWY2qqPM4k9WiWnyn7b",
  "key14": "5AqnsvxeRtjvFeeJfcoGLnrR24rq5aGQRodNi33GSdmM92rzyWArbM2YTMgSmiHATzNarhYtrE4bpVWmm1RsQA18",
  "key15": "5BSbi2w3QezSdnrtJCBfj7m3oXS5xJYFdhYKtWGBeCUWaFDFr47CDUo5DdtPJKsdGhXVUeomszkVVJniAZLrigr3",
  "key16": "62r7W3WYy423XMoRT7jHk84FfM21VfqPAXSbhX1Pz8wguXrt5biU6FgwaLHvu4di31P3cDfL7tvaKcTtS2js2yk3",
  "key17": "2cdBRkMeaqgEpF7c9xBbH6hQ21qimaXcyB3iyZ8q2SQWZbatiwd9KfbKSz6dUNQf8GovA37RCDktoxime2J8KWaY",
  "key18": "3kunGeWJtWCN5651229HqAY21FV2VHnJeZ4P6AVW4UHkmcMkXHMPaA1GdQ8cTsRoqDCDBPhfnc3KjMtnsUKrXZC8",
  "key19": "42ooynD6TS73FVEAwruYt2mtcxiaWLM5ZsSTV3Dqk2HwkCVuP7gyqKhHsPfPh5kvAqxN5wa5gHmpehXUWVkiB2y7",
  "key20": "N8efZ5UEQCBnuheZGrWzYcnhCbNf9di5mXhmVsrvWSFwwhWVYt95sNBkyuQvVhrWchCAY9XsPJQX2yLgMTkBdjB",
  "key21": "3HJ3FCjvPJfhoi9Wkx7r115CcW47sFV6VUmhqxEHZDaozggEpjx1PcnEH7paBfmK4QCWnkyqJTE5SxhXomEC3vFK",
  "key22": "3QXfisiJ8nEZhiy4M7RW9RMvGB5igUURuWJfx4KEr4Eg3orLiHcWFTFwcmNSBomnfzAWmd3kdvNYFkbyffserkMz",
  "key23": "AL2peKFLSW6mBtKUdwxDL9ewDTmgS7Yd2eUwqZVERiuF2WD39tmoChkKzrSeU4PpguzgJmvcjVrSRxNX5QvtksW",
  "key24": "HqkjwcFUTJdYQxqXNkZJmUvzr2Pd6xdMYqUv77GNtm1Gyr3cVUd3nQhHTjqNdVWBVG8L4iaay1xxBQkFefu1P85",
  "key25": "xeuQ4mQes9TpqnDbx7pxjBc1tDb9pXqrgdRcmjHdwEDsr1qeK2yS6GCxLYGfgRvwcHr9g1qniTWGAXrQrfWJGws",
  "key26": "4AUrMZrFqJfmVN2SEyz4ir1pQM3arp8PHbWD9gN4t5PDCoetNsF7tHJWza5a2Heb9rMTMVkg43CadBZ15ihvSwyV",
  "key27": "2m4R725XwSs9wWD4xmvrCRdcHbALFwCyifQ78ExFqSSVS7hfyBVYfdguzE9wZ7CwYY6U6DMkd4iU8MQ3GsT9hr4q",
  "key28": "2nYHTBskYTyJ1QXZ1JNWY3NJoPfLCa3Y3csy3kzKdxLBE3T34sbnfaEZgYz11ANCanh1tmynEjLMY7KWj8xHX9Cv",
  "key29": "38DGgqrQxYf3uCvb4u4mBQJvYzFKnJFKpAtYvBt6QQpRpkvJwTY9DW23b9kuezsR5QW7oF9ZamkFeuxuAqTEFjH1",
  "key30": "2jXisp5kVUxmAsH4PbTFa8qw4rdwY7Vox8HRup6GsMEeBEw81ziUP84bAvSX7MEF5S888dPb6hXG4orpT3Pk2WL8",
  "key31": "34feRzJx1K86cpyA7rgd4rc3cu9mHFeb6VsZoJab2UababXqgKRAxJ1cnhJuHewyXMdYwjTc21oa5NQMgCcEQUfF",
  "key32": "4nHBYPEj8FE8185HyrBU4pDnizuw1iqL8WKjkZF3otjmtnDJ1oxAWuisshLHCdNJ5GuEGvhX5SnFjd7bzFKb1QPb",
  "key33": "4ARSLb4QvNFRsLnyD2qnAs5V2H4SCosRCZDnMu33pWVdKPjrPNmJuUWvbCE85Y2Vu79rhuPN2iqpFRxHJgfF1xnm",
  "key34": "5j1Xkkk9uNeG6qhB4zzCgg1mDsVk5UxdZKpRgi5YsAyvhKk7B7mRYz7ihsnygm1qxTKYuz3rVoEdnd17NtwFw2wN"
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
