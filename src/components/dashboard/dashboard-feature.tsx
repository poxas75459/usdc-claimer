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
    "3RCWju63yXjuAQjmU75U8w5FSWfj7CJ7Du2RUgozcKDm67KyHgvsuFhEumNzWzTqVVrySqsHCNTYeQkucTw4MPkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEYAmyHfXxJEf2CUvgqjrhEnNpb7UwBVNG7YiYfCLgG2pdeVmyVHrnZkoyhiRFbjEtXUWyAaihS4NiY3Ck9xERj",
  "key1": "PP5j7YmKBcjvtLe43kWrqs4LxQfLpphtLPPAyS634HfCfxuANjnFHfXSW9tppLSXAJTBwwjEtpoRBuczz4q4pdX",
  "key2": "3STqcoVvvRwsbAXzToiLRW9HuKoHu9CkDhgK9cpws7C9YXER2MxE62tHSambxeNRDfAAcNF2QG3FoEAymgmdczgP",
  "key3": "248kp46htaF2mUJjXHxZD9pEq5VzjyHMtnFL9epdNKitQaFfjKWA5VkjC2r1HjYY5YJx8feauDoxbbxVPcTRRj6y",
  "key4": "4yiYqZWgN12Gcy5ndPuzxfr8YHAqh4vxXJt3VMbKJ3uMVkgtL7fixp4QzEVnhTFGMkGcag9z5oHWYKV5Agmoik5k",
  "key5": "J5VuS1quHrStyHDqdhY3R6a4z6jSzeEbFaopJ9vg6y8pcAmXLgMJTuAVCMwCh3MoanXsZAugbiCJW4jSjYxeRrj",
  "key6": "33GsiKQfGemuCbtNH3ufHWXzELtfaMLUPnBBrvT2GMWv64AbScJ5FSdTHzf6fmvSC2GYgRH1rDLK9krVjwLav5ax",
  "key7": "4kggBATyjpKKzdHLkRXW3F9LANUY7Hk4FE5AfNbjUDAJLB4eQdb8dcoRvwansyQHxfTDAz9kbBTd5BCQZjTwQNEA",
  "key8": "4iGYaXqMtDn2cA7i9xR8hBd4mE8EgQHUn2uYzFzPhaw8JfKLrMtWzJm8MUEhwjopKFy7QGuv78hhS3waAcyUjqy",
  "key9": "s1zDBSX2QKpJZejQxM61FfGxRT37fWF2GFbcqNnzJ253bfoG29mLEPjj4pxAaooSU9Bh9aGpXLHxydPnpDmk5TJ",
  "key10": "5MLoZ7vHP9G2j5FKgaHhDJveB7pb195KDR7U5by4KZwJ5bdqxGr89KFnNNLvH3vC6dZn4S8A6EUn9gD1491KCGTB",
  "key11": "3dUwRKQHDyJpysZGWruZwqaGZo2fn8VYXnR6Q5My6rqQAoYsbGoWUNXzBWWZLhNsaYEtvZ2ods4qyZsW2xKrvy5E",
  "key12": "3JnwzaxfyfJyKj5BsScsmMUojqwYD49Y1etRGVr6Dbo3S5nhxnxT1PkSeDX6wgk8uNrgj7ZJ32Z7xXbvWwkXFLiv",
  "key13": "2YEebHbYXHPdbAFmD7fY5atH9AtJqyZe4cDq8LxfDGujXGU8j1TA5gPxcbN7a8G5HsL7muQQaCs6BiM9XM4mBbKx",
  "key14": "39uGXVCFJqe61zXVZsU123k7ymVSTj7Bsc1dYGUhpJLQ4XyqWEgvJHCR6rydUoHt8K3KDCGp6GWTNnHNb88PbLJJ",
  "key15": "3oSBPTVMytQdksWcX98Xa6Nsoksyrfpka2bvXCyt5yyNKQkzp1sh7N78y9azUJHUh9MZ7Vqdek98WU8MkGUFFMZC",
  "key16": "38hfoxnbVBUgmLv8Qm2oj5xgPSFuFewXXQbo1KxYmjEzYMuFUc4QQq6KXe2DPQBF9vWpvJWispoGCoSf6A223gwd",
  "key17": "5qF7bYqN8mfeDTHoUUDqVW8hif4A9RWAi6tBkFkkduGYmWqEa678o6qMrsXZni2yRfHPv5YeEnuA38wffd41MURV",
  "key18": "gknZ3Dx9bde4ZyYatyzg1WRUu7pEJjmNW7mPZuDrsgoNpfJNdg9sn1DNPAQkdASR5pAnNm1PnJmkdGtLEUbhzeq",
  "key19": "3UBGDvZnaJT6khw1CAR7EPEiafp9JFdnczkYNHB2wSSy9Tj48ekFKeg5SAddKoNxyecwtG4FczgttGf36qXzK9j",
  "key20": "3qQuWxk5DynU2tpoKunmduadfVeRaNPeifhXAcYox7XXxohibawKbyBK7iNz4TAxwukrRRk7kz5RRQBqsqqRznGf",
  "key21": "5SHtvJdTYmaGRa1XaKRMoJ62sa6VCaj15xtoiz4PqRk2N8ZQfAn1WCAfGbcCGwW1D9scUsMxpuZbrwbHsEBav9A2",
  "key22": "3KVBsMNwEwYBTiHPsdBoYFHA6T46v6dPp78XpKuupJnaCzkTBbCzFNbqchbccVhsswqELAfuSehHGwCzgmeMEPk8",
  "key23": "y8ELfNh19UFPXPz8z1drtihmKpq443CJhHJRD4kWonRQEzpbeLqwrH6bV6h3cidBRDSq6pdxMxbXamH8fXyGTrj",
  "key24": "4QxGC2HeSMC4uddJbB682KKfVjKdszm5P2aGyZmNcPdGSZXgVkLYfy9v1GiQsE9sB7RKBUQx5Lsus62YvWyr1R1W",
  "key25": "4ozbDFZSwTPvAv78DRimQoDh4wmuJyQPTSxpmtQSDpPUpRrRkfUBvZJbLJNY4eYB9WUUpMm62YdH9hpQAhAm8mJV",
  "key26": "36JtGBDtV2TBgVKPLUV9QD7MhPHfHjgVxTrEK11DZoQFNtWZAqHQMXRtk5ycut1CQdcMA78fi18zhuyk4u85dSnx",
  "key27": "2pBPdSkLQBjPxxJbNzrR91HJad3WwBaPUgtAnHuCQvCtfG5sVuJaMUbTjxnTfJ8eQ7L3sMT5eXErDC5XJ135DHa1",
  "key28": "3rbPRGKXSqJ1KUKPQMYJ2x8NdDWr5sWdWojErFo3A6p1kUDcAow7VcQyWCvDxmbn8Wcee54AAeRbix92vv6iCY7B",
  "key29": "3GAPbmqQqq5rWVD21uVu7fmKoo9vhgimY3f6SLhdoTs6tL45txiLuXUgwhZLu1YgWnFvD99hEYZKMrDPGE7fcurj",
  "key30": "5X3Z1Cshntbuj6nJCc5FbBkmoW4Y47edVnf42YRZJpQgLPEH3jgzWLNEQZHTBdB3E8VoJJnm44GcTFUHdreF2GLE",
  "key31": "5TUUkUCUXTNtwxZBgKH8odDFy2mt3pE4ZrJUBAckHhwDn4HaJBYQCxZGrs4wDsWjHPP63jPAmoScfyDAj9wt7FpG",
  "key32": "49sagHwmmGQrb3sRYwVn1ojiuwNpTVT3qD1vvxkawbNY4bUdKoN1st1EsRcJHJ2zxz5SuBv8UZZWzdNCnZ1gyRY9",
  "key33": "5wZPvoAC31wY68LqgwCuxWyqcSfQgTSJxY66uoUAS7ozEyf3VufRQC4YozYXVdNa835TgdRkaTRyRrNCpMHtbGnJ",
  "key34": "EhwTD4CM17oWyRoHyBZpLoHP8Z8E6usgDYQHnJgegdDGAXepUbMrb4gj2L9KthDzqXAs8yww6xribsMbcoGrgWc"
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
