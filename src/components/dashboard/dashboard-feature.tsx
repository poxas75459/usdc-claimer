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
    "2GtCr9hvMeogdYXx1msQhfve4fNFXtqfRq7r1MWk1b2X6D16fwDCcb66AbRYLwnKpv2dQ4rupsjLCKfCgSfRdGxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMJDojiVuTzu2tiER2FM8KWqTn3epuyuL8ETXsVMtvmNWgebshzzEypN9NkiMxjkkZYtULaczxbp1iCQg3wACUX",
  "key1": "43hVr4kdGmGfTtAUyqzfhkp7EpSMT4ij5bKMPkhXUYVaghi4DnxwP615R2FTKRRrwjrSbuJ2qbyznM6iug3uKc6V",
  "key2": "5w2Amvx6Stvu2TVXNJzo7LfX3G2rbPyfaMkMeyzKn9pkb41EqgE7QrL2E3vFkTwz12sVKxNz5PkCcP7gjtX1iAcJ",
  "key3": "josXBamDdcPUCvWE4tr3buwavuk6EyXMS6o5xy7CpfNXzwfqqRtt8VbBTb3MTUcU6q1UDoKJJnLamFv8Vahua6Y",
  "key4": "5Kji6NVzPrac1eTdMJTxsQ3NGkbQHRoD6hxpXQhQNoh8if9MW4PKtcdgUsnd1rkGZDqzN3k1wLvFNMU6Pth7XL33",
  "key5": "5x6GcRbtUtf1E7JS1TR1kNQ4r9qqfqLQ8t7SEXjPxivGDX5zR41YT37K7gn3KMdzcevfUad5NEd8h8PYZnL3GyQq",
  "key6": "RFDhiaZ8wt7QoWUJp1L3zQhDcS7TQyDeaNGZJ5jFymZiWjwnuJtdiEiUtMjUyrsXkivBPkmBhdhE5A2K3jsmgpF",
  "key7": "47TY254141N9NH8svVrDpW2Xisqbw5jyyU5tvy1okHq3CrAV8QNVo3nH5RvyLRCECGZ4j2UQUSqsfeKq4etpKu7f",
  "key8": "2grb47q9SjopHLieta3n5JoHrm67d5YquN5JofAiLbkRwQ9y92VSamFQf5tBJX2iQPBEGoMa4gfpqxZmK2cpZ7DE",
  "key9": "3j9RV4Cy4xQBvkvaeqJJcC3pTCzaZ5ffWPRp7UTtB7UAeT4CUXzr9eA36N3igpdy7MNmmkKZ8qspGVnuRPp1UWR5",
  "key10": "4ATWsecobQwMvRrDi6KVRQy8X1hVjLm54GTjCJphxuGgrSs8mDN9s6nBVsEQD33wPsCALyMabqnhrnSZwukd5XDo",
  "key11": "49knAfNuKKkLbFbsv5162CA4jBHYSwpR9em8765T2Srmiwx83AKwX63c3vefPbYzxEaLDsAb4RExVxCE44Na7UKn",
  "key12": "2HtimzMDfg87JzGDReMd9kuSg37SoKABozjHHQzPhAf6b4stsMpwcNZXBeZWU9QQCX9UJcPzRxQdHwSctfdUFUEL",
  "key13": "5L66kFuvsG66s2wRndvvWgKntX9vt7yhJQ2iVcbucCndhgbWmG9uuEsiUk2HoBbkMu7EpXcSu3ieHRiLfdYuPzjL",
  "key14": "iP1corFTNjA5Dd4TX6LSEN9He27KwLorDkGoy7HGdT8X51sCu5icfjjNjEbmQAigP9TaN8d2eya1CtHniVH5tZB",
  "key15": "vwFc1ChtjshpiD9CVj7MvmEFHpN1r7VdkQkqSttc7YoZEfDPKp4ezjdkYJDrFWbW6GVPq8i9x4P5FwnFkbA5tsH",
  "key16": "3wf8y19pXJP3c9tY3u1YZ4AvafK85Cf5s96rb3mnBx4dCkxm1rtf5XFUoeFrtZggkX2QLML8p4TFcmw9RFETJozx",
  "key17": "txFTHxXAgu4A2F2CEh1tU7N7LyBM15yiBct42ygGsmhUUS11QgN9dp9iPEw7jvnGAMezJFWA2SvuGrnGsk1QSH9",
  "key18": "4wKzo3CyvJJ3NeUPdSMBpxcfYb7dpDwD9sXYmumYmCurqB3X3yW4pKxaBapMue8MHH59i4RqrtTDF7kkRef6Yy5s",
  "key19": "3kp6sg3i7SfDPg2HpGtr61XxiG4w6QxPHYV74b4QycmnJDNewBRUaYjda6GowLxm5nETYqsFmGdjAtW3zZgu4V6y",
  "key20": "31Gt6uHDeRXJNBiRzhjCsASCAZaefgDKLY4qDZsXSzH7QsHvzqF2BFzWi3hKrNHJxHWM77n7Vmb5GCpkiJTpNSQa",
  "key21": "4mVwiKBPyrH7me2FfxGZbPnsD4NJDDtmRH2grUwYEa4wq1BvnxdBk2ZUeN6jRppDxj49AoE8PjtY81WFAi8yPnJa",
  "key22": "VBZvK1wrRSWQdeQQfGfzckC7H6VyGUrALJQZyTVz1FiZ6E7ADXhf6qrxeZQQj4kUJujyyj9nTVMdziLL2N4ftcJ",
  "key23": "5ybgt1n17bVTBxayPtk5cDgsAtdkeksPKk2rtDrW6wZPz18o1GiQbwveRURkPWbSLy2SLVsCn6uNx8TwRz4XfZJy",
  "key24": "k7mujJuM2rNqfn7FKgo6wzNRjux1GFG3WbinxbMRZJZRLxTH9sZaDLzMEU5FARQoTxWcCEZ3q7GqCzbNy2fvirQ",
  "key25": "44HeZzP8jM7uB11VXNCZKDaMfMGvkEwrSDdTpab1pQBZCuzLm8rUJHCbgVVNWVYDuvHjkFzQ3CuawNU8xSddRvRX",
  "key26": "2NrXxeWFpTUYXoUFVT7rfGwdbVYd43ihGW3mUXMTBKbJF5oVZjXRgL5JVYAk6knwcge998TWd7NZ3JWAmZEqgoik",
  "key27": "21ax6kRXtjue4LyHjGTQ1UGFeYjBPzg1yxrFsgzA585WBqbx6pEmvnKJUqnFpoquM65TZQ4G3NjK2qn8EkY6HhNZ",
  "key28": "4Txqwbsb9rtuowXWeZGDpPtE7ensYESATajnrUB1gn7ugFJ5ZdCwc3MAydQmZn5Q7fp3K4TynQL4YwyKc1cv3PF1"
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
