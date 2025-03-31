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
    "3nNuJmY62iSQawMfsiEi6rWHXKJvFVmgXGZHqqomXkSqqKhh4WZ5PXBmsFqoF3zYj1PtJkkYbwnHv2oWhzYxQokr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56JWaTjbRsxuVccDdev5cf9fg6vW8mELa6qauqvsJkdNmmZvtHyZUmr6YuNqjaZZDee5pdeqqyAT8i3JgtozFM9g",
  "key1": "2RDvcLDmPqAW6dig2g4UKvf5j8tGBSvUEerdqAtiKnFEeA7y9XaT1ayY4Q2iM1WECHWwz5MY9rJ3xfVUfD7S4j4W",
  "key2": "BA8Eb2CKvsAir5HLauRtVhruZUJLx1BvhKUXMRMRTNVHWutWTQ53tr39ybBDQdJ9R8zAEuzmzL7E1SLnGxnBDV9",
  "key3": "XsPSSM85ihtm5zoerCzGHpLzZE85Pgqb6spqNbVWGcYY1ZLBRASaMbtxCjtcquDxXfsp4ZKy7tpiZz3ACM94eZM",
  "key4": "3WssLktzBAkcdQrj5Bc6nQvkgMmQzgHcpVZFLyM91P4zWaCNDxGjBs5ctkaZQUR9bpQswpEbvySUSf37QPb2jfh1",
  "key5": "41GZ1WDUx1p5diFkQzuQVPnkfJzDWyfZzqbt8MuM6koFA9HUe19yGenkjF2TJff7LmHAa93hfkdDLbVEkvdfivqw",
  "key6": "5Shke4YpYYaVo2ygbnA9mAMYjmdnumrWHh1Aiq3fPbsbu43qekcKGk1o5vfVeMYZbDncSxDHSCQjFMfzjJ1eWrMF",
  "key7": "4XRHtWRSeXmzgkcm28BL2LAKU89NBV9i6yWHt6FxaWyfMgWvMAfc9a8zEMMPyLLttzavc1cyLPbnHXpUMHuNLX4s",
  "key8": "41cCGVJSaEprBcX9Ti43AcvxUJWokwQHpEPTMpjfwmGvowRShK2RgctUxDfPtTM9i6mUG6kZ55jJjXCZAjB8Xmd4",
  "key9": "2MbNYKwPH1SkXPrYcLq1neu7Eo4d5godbb2jvHdWGAvcD1cYLJndM84iUacquqwsYdhWDEPtaXuLixUM1yYhuhMh",
  "key10": "d55dzSpCGViS5m74EQhpwVxdBmJmq81yf3VqaszbnAfC7rgXCqWGPFEzJYNGmWviQyouqq4WYgyEmPauaquusQt",
  "key11": "szo5EQbvNuq5hh7mFXBNp9xpLwBXxo9ta9c8NA6kpUM6ksAoZ5RuCv1acSoh4ZPtUqjMnBdUFW6yYoL6sPg1K6Y",
  "key12": "mbG3AoJ55Fzm1DgtAPpkyAWMNvwCxjs2fCjXJzbeS698o15X9yEXx1wicBYPnrusuSzBMnsEF9skos8h69MbyW3",
  "key13": "w68J87NovojYFMEohiowPGgDH86k7a7414UwUMDP75xmpbWHp4tDsZ63iU9qZCXi2dBLdfPM5M4dzGhtV3kHKUU",
  "key14": "67r5xkmDU7BaxcV1MwfJzrZyieGojEzGDsQzygqwutN1XrdF9skidq6d2DnhtCFeGtqirqy75Sgy2iJP4mGc93i",
  "key15": "2TLcXDuTiDUKRgJL12LnweiMZHabekEhTBu6XXXFYGCe5sqscgcyB2ExkQ4Ba5AMR21raDdcGMZD1L1mQfqcTPdS",
  "key16": "3ssGn2YUtwVrNNoCDThAD1jSjJ7x6zXeadpXL6wPpZW2R98AkKg94bvcsuVD8FG5KreehujSmoryCRCNToEBYAQ3",
  "key17": "5LRe5GbSBWx6JVKKVzHwckKiM1C4phDTkmGCksnQFtj2NF35c6iDfqize6T3mHk6CKaJVp1S3gpK6FZC7GVHXj1z",
  "key18": "2PpLVq2RrybyX9km4gGvqijExDcYhhWf3DujMBppmqQwa6ZzSYxgJ3BxsKsV8Xa8WtnJFshKjZnKSBhakgXXpKw8",
  "key19": "41iJ3bVg4KmPP8mjD2ZJGfsysuhu289siJEuXWZJJuAEfMZTABN9ZvKeFHv6tPAHXCqNwLkejdJGivEAM1Fu2r1o",
  "key20": "54R24Z3jdupy6YS4m37SKu3jF2ZS4PdLdWhkkHMvsJLpi5PjmqkT7dXWiYeW4vX2qT4uZFXJMT3iFy6AqJp4KSpB",
  "key21": "3qFz9wLhCFbLD3t7TRejfhJ3fpPraiBi6mKXseGb7qvSu5sTVcn1AHtTv869dcruHsE271xX2HfTx9a3Nq3Rikko",
  "key22": "3PzcW2CSXw2fWkMAtkrYXnLshTaZbCVoMG66TX3MFcyU9x8mFfMTv9dor8MFTfz8TTGJCzmMRMaE9cBMosu8o8yo",
  "key23": "3wgUoHZgrh41KJxhmc2UsyKvLPzkZddya6Y1MWhWJqjUiy8eLqT92AL1EpFPabfXQgBeNr93RBxRU3kjmz5F7bvA",
  "key24": "63iSPv6ivFB4DxwqzmHHnCPgnB74msZhCpo9xRa3jMa9oKfvR6rPCJoxa7N8zpNoM9kEZo3rWzESzYShDbejX98e",
  "key25": "3moW85yRiU1Fhhy4QWMxoi2cfam5K9dJYVbSNAYu4dcbU2U7tuY4nL1FGghfMxiJmoMxRJsmhNRQ9jiV1fWjCXxA",
  "key26": "XHaZ4gzvgP6EXMeTSwq3ppeyt84CfrBgt3bZBVbJqJVb7oazgWWNUQRhfv4WHwFBv5Go6XCKd7PMuiLHdD5r7NQ",
  "key27": "4efLNy2CkwhDNxLn5dMPPPxt1f3FAe6Xwm9dowJNAtzCBPgoH7Pi2hXfrNNhZbD9fezZ53NXmg827nSM97f2U69n",
  "key28": "vJPqYxVGZcG6S6XGCmMPqSNB56c3SVD9yEEjjCp2kS7ajwUSXDNVbRFFDEuk6TmM8K9QcucaVYCXcczVUVjnY6Q",
  "key29": "4oJLNhmKxUmsvohiJTmFTG2WehiWPEMUy68y8teYeJxkg9F7E73nRKBQq59JTqjTZpwqQErUMxuM2ov78AdFkwme",
  "key30": "3nn7HBH4P2qPCQfYtWFzPXnN1TMo6wuHjtJgw1kJKKMdk3yGS74qDxiavDnmfndpcRjCzog1VbumYhJT2JkrLpzy",
  "key31": "3fTt5Cnvq5o3NshmW1Mu5hHEu5oZwyYgHG2gzLPW4AiosA8Lzb3jhab2fV8dykM2xJ3bvQUfHvGTcccbjJx2y9Pf",
  "key32": "w5Z6x3fmqpXgRKCEat9P1gqCzd3nG2ph5gX34wEyeaKLq8WM15vVDFFQxzQ2T6nRDZyMWjA8Pr7V2mcMi1XfXGw",
  "key33": "2UXSKiBgyzbnKTCcJDfcf3b7duL8rZZMUQUrQfnfyqgtd3ammTgcNpokvrZkWD5mRaVP2L1E32dfrCtRrv3rT3E7",
  "key34": "3BNntG99WHAr8kbFnZFjqJAh3zkU4koFqaMM1SqBM2UC6XHx83gPdeuECA7Y8MdsQhagrTogvkwYoZ9vLHk42fyc",
  "key35": "2X86chX5hKXprje1AeWLBLhAsix3GyGZCpYABtUudyqtZw9NHQfSQDVKK9yUejkLK6E5iHhWp1Psz8Q6Mihgpjec",
  "key36": "5C7Kb9w4bVaZCknY7v4RFMr9XcQAscDbijMfXwQBfgxdDiSe8Gg3fwX5jr1948r4MJUSgfpfLVh1FwL3Don9VP1n",
  "key37": "4qZLtqV26VzCKEFMa3ZHp6YD1V2sRT5pyCwyHeCPL1Vi7WMk4LsEwxCJFTPX8GuhaQDtScJe2YcKMDhLdETtU7K9"
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
