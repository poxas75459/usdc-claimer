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
    "42Ci7qYCf1MJHXv687qXk28f1Kfa7pBwKAeorEysb5sWpdtPvLcfb8x74QVVStuWMoeLVMFsTaPNJ3DSFhBU96P1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGWpZfktugQx1qiJk9CyzqSZtaL4UZ6z5Vn7z3rhirFrgA6zjsTKWyhqqUy82p3nHM8sQ6cz4kCj5MjMHw39yQ1",
  "key1": "5bs49Hp5eLaYg9z99i5dgj7uRZC5xcMV2ZnjTUSx3cmmKiWCbHz1LekMedrM3MeeNvJsbJQvyAKveJgJBvhGzStV",
  "key2": "4dDscJiv2ExzP5sQAu6MaFWnv4iVmsC4EPNMhtsuB46ToRqQkbSmZmETwNqfPDB7DXcSvkP3YciLWBuFyBvg6hXm",
  "key3": "vxpQ4kWiVwqbXKWvrKA2AWeLHmKjPpZhEazsNS2KVdSRqKHbKSWddqRVNthF7fYvBDb3Ugc9eKiJPrnBHGmegm5",
  "key4": "fsuQMedT3Qud546eM4V6LvUqeLVmhTqsR7JSpe2QrFQwQRz3S7BRSdNaEczHpt1NmQwiUWhZmrZhZEWgTp9JxWG",
  "key5": "5ZTicHvUnUPzsm9xeHVq5q2YsVy6Z7eJsqUuzcX3PPXH7J4rGPXsFHtVKxcZyAV7dyCq56HWv681eksDyveSwPc2",
  "key6": "2h1tgR8yjrR2jrS8n7kCKQAZ9vMFGwWdqqjoVyvruGqEsXdwGLLuV2pr2sARTHpDQpWk2gE59VzZ8f9V96SNZjPS",
  "key7": "3Qwg4oTuZDucPERQ7JLQeR5QguUxbjYMrdp5ue8MVQAVZcUwjuAEz18YuAaZw1rr9FU8HeyBFaTDYpwVybg8mFcK",
  "key8": "3feqAdM2RCNfXiB5ZG3meeRFEtMKASRcCmPAAmgMycjZF8x9PjEHPA1aKsemEBapnPc7oLTjXqQ8V8TdpykeJz9L",
  "key9": "2WXc2JpGznBoLMLXhqS39B7qoHmXMdD22qfU75Lpw6jBmd1xC6rX1AziHjLfMyujHQACy74E9DXuNAnSwpKZCr6Q",
  "key10": "2xDbbbzAmeBm1Q5tpDngqwDksnrS64g7LTLMAjNo8AGaUf1eSe6WMYN25DXyYtTUg2Pb8jbe9Yq8n8Hjz26SacRG",
  "key11": "3gYvRsLuQb6XzoPpVJwsxF19q6T9VK5sKb6DQrvBKhbvj4UJRZM41V4wBUrbXSf4e6k9Najqtp97hiU4hwVVWNKi",
  "key12": "5LBGVkSXPg7HwyX7VfYUqxTrpbddgB4yBgxtoxSsZNHEFsJeco4JthdPoa464e7RAAe3DQKLPMwzfiP7ywPGaBbN",
  "key13": "3weivUFQT6J5vmSdiKMPbPpuNwEdURrXotk4Q7E2pB3GLggtnVoq2iuNofAiM7cY2JB5b2VfvXodbhahHKvFUbfu",
  "key14": "5GP5zy3wLQRyKiRY69rtPebdRvocEvdCxftKjnCNbiwWZgaB9WRnCV8YnJQpm1d4F7v8p3Sj96keBxVaHT5nSK5n",
  "key15": "25MKgVEREMk8kyymVMnMN99bG1XxUWA7TeGFPd9tythdiQR6hnfY6z2wQscszK2pyn74pMue6tUuFPb8Yf2m7egx",
  "key16": "5FLGQfqQ9G5x1MLGFkP1qeSycUQkBKMF1WFGiTTrKSwPK3ktvhtaGUGwQ5PAvDdySmBftri3DV8FtmmihGm4DdFU",
  "key17": "emo6wffYaB5S2m1Q9hV8Bmi9ATGxbDVyGta6qUQDxMGGjHWHkuyTnewSLdLTkAQhrm2awDA3cm4jDLvydfky71K",
  "key18": "2TjY9irzkveLf2iAJkEjZ3vvuYYpoCcp2MmybwipZZfwKQCp6Y8DBMafZjqgBmJXFNhVh6GxEzWzbFEtm5RntAkX",
  "key19": "2nhYkj9NpDcYFH4WL6uPs6iHUEQFgbbquUv7Micy1JcrnzAbcHbQzHDgg2fmyTJSCdpybYARTCXfJdRpMrVf6HEg",
  "key20": "2bWztBmwB7TwhkQ1SXr9mGY9sWLykX5V99kqrcjDcRShL8az2VyP4Jv8sQ25VYm49A3qQmMhumzHrLfcSH3xmSyJ",
  "key21": "3TYHmBZW1zxqnf5Z7ZWZeLZwa7HVks57WKx7xTL4FtgkQbofDr3DSXtPSLkEiTWShtCaQUyHvTZhUDz2r4hC8x1o",
  "key22": "ZWC1An1c5ExUrbRc12XkH8G7ebpgMCS59VhtbJZGoUYpyyFkR2wgvxBv28u9SsNFzR94Sm1uVJnz8UvhgJzwAzz",
  "key23": "3stc9Xb4A75c24wk6aRiSBT14s7LUWYuTF6gmbHEPBQtdDe2pJJbfVqJSm6fQokbyidgPS2VtAzWUaS65GaRDWrT",
  "key24": "5fK5fAeFDzD3pJxY3iMkVMyNJ7dHvxw56NnnD6mG5HeDhNLGka9Zo1iXneqHZqjckX7sggxSeYvfSPsMnYBRTdik",
  "key25": "2iAWBbQ62ZqvBKiqJYZeXQVA4VmkUZeH77T3hhw2sdwLn4QZyvfKqkUYX3wZQsXvfz2ibSu4LpfuYSmL9rkE57aC",
  "key26": "oFYuQtEAryQyEuBG7QZx9zfRpFHfrJKV42rnmSJdS7L3UYanWvSthS7cT1zzKHvvaksYf16wGgubJULkrpZtitE",
  "key27": "3XapoHB3EHgme4T4bKyjK8KjvvV2XhUToUZeaMPRQjVt8quYH27pUUpGeyAX5TgWjoh6VFT7Ze1eijnU2VBkrtzq"
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
