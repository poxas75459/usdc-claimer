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
    "2AmVmdJvSi91vHji73auaVH9qoYpwhMRAV21QqKnZKmohc9oqbjibzbWPuGWT1AuHJx2ArwFwX6mRYnQ6SStaynK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iwXiANsiA4BETdsc211ej3SHSRtNxWXAy6zbm9R3RuC82Bg5sra1edxGnLUx4cKRTJHoBB7oB2n5N3ov9esEBSX",
  "key1": "5Uo822fAW3XtkSbPZ2DaCphkwiHUvDKxy5c6YWGmKWnVB2HZFFEHxXGsPEmi9ZsfikU6iWPu1w7NcFw5U9pv5tBr",
  "key2": "2fY1AKnwHwjE39hEXrTFQBtPyYo6SKaJoM8JSeMLUB6DNXvq7uZMiFT3naUeTtjByamqGkkHsVZX2k6rWLyXxVuC",
  "key3": "5T6Z4ErkfZxRmqcRVwb2tWZ8fdqyCRtLwhyWRSPBbC4eLnfgB6GHNdHhJpUs85YizBJ3Pa7JGvaiBQriKHKyFpFm",
  "key4": "3nmfX2CFUr1gHGmVhsjX3jeaQMTckpaDxVmuSG2euS2hTWxQRoCvdPkRVWjxPo3zQiQuQzRF8dxwm4qigJB67sAg",
  "key5": "41tSHkSJT3GccBApNU4WWZNbpksq1UXf9zf2oX3t7UojitbJt6tH4euEDFRd342e7apLC24Sm38jRYAZHthuf2jS",
  "key6": "2qYizTxr7MoanUUgwHTvjwfHwQKtVN3SrZDQUWbsKiC3sYKWEi7oUfPybb3A2wPFTieEeF3Vfwm5dGGes6nvA7LZ",
  "key7": "X1QYUuhTdYvDkGcufwLQJ4s4k8Xi2XbfCxARJy88pUmmB4a1fEpCV1HEkTNM5CXy3eVpFUPtdA7RQpXu6hXwviE",
  "key8": "2hZkkok3nHXUDRcqbk1Dh7x4f8NDV4sPMmSkHrPrrU541An5Lj1Q4XCRZac2s96bwwJHWwM1na5bqaV9p3tc5vqf",
  "key9": "5uwTGL9WMYvxrPtU1YLLf7gQwD6mSWtiZxWxKDk65F1cRv3mmSBcbsCKbYKQCEpUfhxvf8mkrGG9BYdRQipsVeG3",
  "key10": "DMQ1ntjdt2GHSbqwoPqGWgETiry3TLEW6m8npmjtQuqPXhRr4m73gMQBrk3oVifMW1mz3iHbu22FzGCDjAdJGaq",
  "key11": "5Gk5dKR5khMtte9R4yfu2ZhypYnJaNXpRQ1MEuvFZhuNjzQMAwKyZcsBvyqcnfQaQHvpibyUG1xA5ezuYBVKmzkB",
  "key12": "2RXDxBJcqnNWxUhgko6AsRUeTe8nPLHzLPGxtuiFskSXTJitRxz8HjYwoLBiiPaoMCqgfJJwhoPii44f99gvjufd",
  "key13": "3LeLK6t9MsLPwU4iHmghjxcW16kMLoaMjoUjfDmfY6ZhzWN1M1gmn4JgS7VEjpF2QsdyvZWzuxqmJAndksSbQoHn",
  "key14": "2rMrAt1DCE7YDkarEkzFKFVTeRqHAiR9mgYfnFafnAbXycKEqmbiADgpMpAmgArUEkpJcA5ERjJaRr6iDT5WCzgz",
  "key15": "4sGFTWMwgyrSz9UkAmTDDQKNBWFx3WxosDEGNgyZeo8vnVRKjfo57KiXN4SzSwCtwYbZivhCBMcDNBFKCrtJwRBp",
  "key16": "2qvFKAweKNvQaC3r83PccJzmAGfWFmDfUwLDpZXp34UtuomiqH36tsfJDt58Kb4BTffYFt6KNeTuD6L3kT5ZVQQD",
  "key17": "5JiaoqhaiCW8FRBSxCeLsyez4eVVW5wTy9YWzTBTLjH8KVAFzjGD6sbPKuwGv7rJAHYr1uGaSRAduXWn2Whnk18u",
  "key18": "52d7SHQLMFyu6FgrFLwrbsoavYxKY8SDzLUr2LuvpPf5jKoAGQppu3Jy1suMMNkoM4WLaMUSt9CDjrvyGAGk6x9N",
  "key19": "4Jg1FaYzx9dKmFm118KTJjrUt1YXB3PjnimMmGRueKbk3k1ShTmmbdBEM1CVPvZEzVvm7EEHHPao25UsMrawynRJ",
  "key20": "3cVGbHcsHTN714fVeDZD9oPJ8WJoJQDExUTDRG55JRHVr3i1eFzpJwEC6sdLkkqyGFRV5qjtxFYQHf1euxw49GCf",
  "key21": "MryA2DYNf8wamaNJShAaAyAu8MDvE5e6qu1SeKXVrZCdz9tjL9CpHhs5Q2BfS3zK3UCJsh6s2WMMoqpuP4eCu1i",
  "key22": "4GzNhTCHnNUP3trThtu9dqWHxyLRocstRmXFxc2cVCSMjfRC3NT4bs59eujXefiChhYQb9Th9o4pHhqpcmxhnbta",
  "key23": "5WMj2iEsL6q6LTvmjwM3u18SjLURPFCqR95PQkjJNR8FEDtCVD4w14cWxnmdh9DesZ6EAzPNY3Eo9eTKR1pd3ALz",
  "key24": "49jTaTKtZzUM5KQ6ijSc3zLGMGc2K1eeVvqgac9XmzQyUwA8y1YBAYhbLZsF6feon14pu1cq5ySS9TBWPkhtB3Yz",
  "key25": "485SS7gurwrs6XGrVXN7c8xEiAHLnE35MYt9TvfM4GLdzL4cNb5fXKiyT5FP21eBmiSLub5rkfT5BkEBDiHQihwx",
  "key26": "Ye3wmSaPLiNXMTc7NGMfqs2PR4qE3C3ohGntAAmRdZYou1h4BiuQZ47L2MD6B6NwLb86KkztuV5qXn8LguSUCSB",
  "key27": "5EqbaTAhSqFzkCGKVKunihp5DxKihcTyU5Bzt8w7gq1ZXDtKiuvD33mwogQqRqQW1Y4HJqjB3PoY1joxHz5Z58RM",
  "key28": "3atF6WCVqEDskNQ6dkNAU2MfcNywyysiSYZkFDYRDCAinP3mhcdPCn4RMcHWNotsa7RAjLqeAZ5MyGkqd11RSvMp",
  "key29": "5PdLdbUahxN3ZD2cjGBK6Pbq2Nce4tBWMuMbiTsYDjDVWyLEN79Pk4c15ip6rNercgCzCM8Z1YYqUwmBaZ5aYo7f",
  "key30": "2t93v4yp5cfwvR2htvEM8QUQseeLV8R27hx9cWBLq1DswFfxwJRo7S6JVxch1Zsirs74yD8AW2ysPVVDZu3oeGcW",
  "key31": "yupJrfAYAAL8NQjYs44Ltsrx3DUjeMGRXpmp86kb9ZUVLmNoSS3CfSXXGyRiFQEsMSRZSJ74KtNzcpGVrhH69cj",
  "key32": "2uooZAvTomoN3y4DcZT1Bjkxwt9DwW1JeT7t4PV8WHrEMEQSdvdpTHjF2N9hYthEt3C1Y1xSfHT1HhCSw1rLzZEu",
  "key33": "2mhk2DkvuVQA5qgCw76BsXEpTZ7XYwFD5ugii3ANUGkxBPyihzc9kPW6RvbudktmarN8wLqLdyoJafKZrzkhpVZK",
  "key34": "5KjUnk8DmjV61Zvx8wY9guRQETWrs6f5gbKjjGkJYgUJ24u9zzy6dQUDoGVLvYt6SrLXTMFu9RhFSYr9E7EgjYX7",
  "key35": "5QswN1DP2z7YTGH98rdidhNH1L2bHfTTuMD7wEpAg8GXpofu7P4SWei8y2fNojMTBgJXckJqxi7RoEjE74fyWggx"
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
