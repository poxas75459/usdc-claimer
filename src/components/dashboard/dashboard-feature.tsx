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
    "3HJH5ng6Fuz8NZmaz7NWzfaQQJbBoUSNtBiHYBXwLxTMJrKg6yZ95xZXNyMbG36tfdpuS3fihuDd34WyqyJNrnVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrY8jTRVbv8LEDVvmRZkp82UhE287wGpHwYHPTDkH9XjT2d444YPHburmfoRbBuZstV7up4uXN1ji1uB4aMuVZv",
  "key1": "4LtbsfFocFHMrtU9Su67KBDmjTeenX7mUKQGaGUgEKsS4atBDTEXkZZEUA3WDADR3kEWvrTwEAnecDiJa378q7Vb",
  "key2": "4MQHSB8WZdeZcXEzvXHJAiR9Hm7bWEBFtJ8zFongur6un6wSt7KLM9CbZboB2retMqxysYTc2iVKQ3v3xr62Ngwj",
  "key3": "kkiirzQQxiP76tSCbUT7Hu5GMsfVKfcbQo9nc9BkcEZeoy6chvH72hAY8poUJdR2yjVcf4X1nVzDMTtbxcknQHJ",
  "key4": "W8kAbfKRDVCde4PL4eBvYMdeFw1RFwQekYe4Z2iNBvjPae8inppsAgk6YM6EMkq7ifDFf85tW2iCYD82GTba6LJ",
  "key5": "2YB7FgL9wNS5iKBWstcmURVBA4cmYbFnWqDLRnMAaELcKLHf4hwX7ruokqET2FprCPBuQupwNFJbrxNp7E2fibTX",
  "key6": "gRszH716JPsAsS8nkB97tpLPFRDuKqDZcUTs3Xhg88hLj5AL523fRXpcPVgSR6MveawChzWzbC2jVwTP7cbyDMi",
  "key7": "2fgVS1HFCcazESvihRGyo3KAEZ54W36vYR7Y4dnEmoniwZSDwaen4dHEFcDfkRefVe9iPCweE3TZoAwjz2nC2XTP",
  "key8": "PVHaP8Ma9r4sCUhZLCfALJGSzedZwxKC4P17KCYTuVuAJRjEhQxuuMMmGSfoNf844pXLWCg77mVFHxr4TNpHpCi",
  "key9": "3TypDYcTDHSYoeLphhdprVnKUTjPZvtgnG7riUtWqAsoF4gVREaRULxkiMNZgmaL4S15ZXRw9TnVJtVTvB8V7KZh",
  "key10": "AgcvGoM68xGJYGs4jbnZ3EFJbo7wnQak7pPF9roUzmCoWYpdY4DvGozXNPhWCHpHvy9msyR4Q5Hh1uqe1Tx72js",
  "key11": "24uYE9dFUFGrQy5xkPjvMAscYKoGnuGhvGQrLniK6EGB5KAi4KWnyYJmmNrRLePnZ5AqpBy8GutqFskT58X7e21q",
  "key12": "2vZ57zmKLZcnvsZAu6k8oJeoEWnaRFtAWTiv17KW61j9ZT5Q7aQAPPJXU6AT2txL6J4Cqw84hZVt1i3U8M97sFcB",
  "key13": "2jStdbWnAn2iAyh2mdcn5j9CWEoZBLzw554AMZ3Kg7i6A3YcX6Cby6r4LrwmizpeyFnzpKNjZQGjkuPEieFoS7Wu",
  "key14": "3qSpMDedy7yWUx8RDSjTPajwfhdgSYckByrPo8bxmtn7CsRfj9AS6dbXrqPE8FVPdAcZLjG4u1u9wxkiWy2Pio4d",
  "key15": "2NXrZUiJdabL3i7m9mY2Viexts7J6smvcHLhHCjuGg6D87ddfRG1HD8fV928gEMjGF21usrG4GjryC58wsE5DNrH",
  "key16": "4dDF8mpkGmv5WxyTmhKS8y79GQKR3CDQbJkSZivhzFFTo2UMY8hBcmJNm3NX5GKkiyK5rYNMG91MPxLB9bddRQT4",
  "key17": "4iTXFSE7c88fnGLakXaUBrb2uy2kRS9GD5ZA5PK4ujNLQkkJxiTdn754R8Tiyg2iSFqgvcmg73J6h9x2GV8PLv6X",
  "key18": "2LLBDghLAruijQH5JEZzxKJnbmMfQTXgxezHbLpKqSBfLCABH1cQw14dX9W4DsreVKDgV9FxyAJ3rJX54xECdeRq",
  "key19": "5gAMhUxhL7K5kZbENGbSueFUJLWJwCnKjVDjMiYwECt9ZnTBe9HSLXRByHUyFsXVF8Pm9scCfrtqhdYDa6guVrGH",
  "key20": "4WQ2UrVd9hBPtEWwPo6kExt85V4LAWVUZng8k8FpkwkmdcktoQCNVhPtgbJ6F9nDmyKfCuRsxSuuzZarUCcPKGPW",
  "key21": "6JNiYgpRmeK3JYbaj2RNADm2Qvr2K7K2s8KFgBuoHaaHpTTXLh6hag7LsAHyhVFTykrW497uKLrhBWczRAkEzc4",
  "key22": "616SZPnazTKgeBcwprK5GMTjNWCesxr9UWMt2UdmHMfG43XNK1aFa554LTCZchaKmsGJ9dsiot4ozYJPujGFaK8v",
  "key23": "295iKY8KN5wjFwzhgSzFoW2dqyYjByg7DwwnVe9kugj5f4GUaVTsjd3rZsUyuY1pP1fkfqWLq487ZRRftuRtcC6V",
  "key24": "4w73pANPkuZk75ipdsRRuzqFjTvKrcaGoMB4SXg4QGyXEHPmD6kiDt9eSeXsksgaZPsnL7d7Taz9jw8paEpkKRYT",
  "key25": "5uy7zyGjeQrezm6TpAU3eCSD2zfvfCyZN8BzkzfiQ4HEwF23ZWFwkKuESVACe9J95hF9TYynhk1u8Zqr1MNTG9UM",
  "key26": "XwMrbfQzVFzZa2hFW396T6hUf1mBWwhRczwgD97u2NCp6pL62ETLWphEyucesEs7MoBnpBddFQ3f4Fgc7dCNHNJ",
  "key27": "4TCDdiCJ5B44KXajJsHtun6NjHmxvyYcokxw8w43yZDNmDnJApUkLAatqm8v6jr29pwjdGKGhizQ63NNnb4SvtWV",
  "key28": "2BD1QuQQNGi6TCs932kcfdTYKjRH4JTsPW4SXzSuWzoAoi3Y7grG5VsFFt263UMDZuSFZWmdn5raqmzdYrtZ2Ex1",
  "key29": "2XrBDWkQxnmAMTrijwyiYoNmtvgEPtzex6vJEnr1Q4enbjB9iQhy6uVdfEmW7fKH9GGMjTPW87W8oFhyjroVRTa1",
  "key30": "4QBuVNnLdEFkQgsQdfhRBV7sbHSnFd6XhMdMsyZrTCrm3x8FFLxvQc92C5SMFVDRbSBffs6EafKRCme1WhkqTMqV",
  "key31": "2gSFqDtTfVAd2J3Yqv68NZ2NRA5BJhASHvb7LeLg7uDT66vFk4mneEAhAgUyFsH1SbAWXh74ercQfRTzRxPMWHCT",
  "key32": "3ZxQZ6asgVJroB8fede1EaWBCA576rcv4ASFCRoULkGY6mEDrLAcb9AUYq97T72UvG2QGW9r9cTtFjGxVzNkRZ6P",
  "key33": "2BHY96uCciZbtuYg74HGNGB7bYgN1issi9cRSAfg2NLxJfA9t257tS6wr7WAyvYChTdFm5wssjz69WiWcphFBbme",
  "key34": "2cc32mxZuwzUDAo2C9VZ9Q28tyeh3M3QEkaVii4XjJfger9KiruBydt9ktALFxtpCTBFBr1HQSGVTzBK1NZ2cS14",
  "key35": "2gP4zTEXjpkebqnxh7JCvDGXqQfXoS6QFC4ZBWQcgpsWWkJf9XE1mF4N4Nr2SBuZLcRx7FYU1uGVAy45V4H19L29",
  "key36": "5DK95bL9nsS1Rm6tFd6mvmzwQFrGHXiciUwKBAsV8XTbWeRmdNkqUoik9Vv66ocGbkGdQkvyQogB3EvjLczp3xbJ",
  "key37": "aMKYeVxphsg4kcQ2icHonGBQCEXrzW95J2aGXaqcWMDTFDsLbsPwGLkS4pMPnDsqVcWhyH1L4ZnojGtsGGKtcd1"
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
