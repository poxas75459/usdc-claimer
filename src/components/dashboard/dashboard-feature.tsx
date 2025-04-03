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
    "49Lu4Sxt52J2JeuHp2rvNoGJxTz7h8n14T1he1JhcmFGdPc1krhHrYnMt3SP33QjjeKCrC24rAGJo3DR3RV8AEbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpFr4BWwWY2JRDNcVMjZ68P4s1yGQa3cb4JKofr8q5dBhocBdqC84oS2nMFKYQAmHuMwDKMLgEeBAZvqwS1VJ9P",
  "key1": "4EkLqLMqrtiZzgUL6N1VSovFKoybEnsqsoGWRDe9xRM5K1SB2VWSTHrTgvxdPAoQvewV59w4GGU7xKhX9GpDNUFB",
  "key2": "62UuEbjkPSMVSi3JvrB7MASYay4aMsjane9myBaW6697t6nWen1biNhW5PJxtQLhZsP2qYFLWVvRWSidkMtKvxNP",
  "key3": "418FR8AjXZGYdBd63FYs2MZFWXW9MtKT3wnKyLEgFpFtFcNmr9FTKj37JcAkZNDeawhKSFvJj9LJhWDt97fUdMcZ",
  "key4": "2pk342qBwVVj752yCXZ2yT7rQfLSHZpy5r1yzmVaouXeQZZ1B6YPkDcKUfn6gQqLCbu32BbvEcqehHhGY1v9KGd6",
  "key5": "5DzFcJFu1Phg7SqKGFqPLayLGYLZLZ2A5P5ptN56QFQXc2h57yBSQD92uZo6DSeeTHyhMH3h3tAcFZiVV8v9vijz",
  "key6": "3jRsikYmkQ8np1chKKqStvbCrnzeidk97Dhqz3pYhsNJoZLvYpWEoaD5hJAQSfgHKw4JkPnH2c1xBxfZCgvMZkfF",
  "key7": "5W7jHCkjDcnhWrv78BxuvtYy5pf5S8u4tL4QVmgeJZtGmhXmkZKyy8hDYrXxsYHtHB8TQmnVb4RkTBzU1TBvb6cU",
  "key8": "2kwMiWqGWEK98bqugvAe7VWuPYSDFC1vmCjkKheSix2AW9GUkGFEMbLuSqBGfX8tujHdJSs2p8KiuaKtoH2BYTZd",
  "key9": "5VnhKeVZZUQ9oDfNi6kMVjLbRXDASvzrqpRdrWokAeTKMCT8WDgDtHF2j3QSLkrea6HFhHcjZdSU6gefRQ1asDDP",
  "key10": "2LFCiXtQbFgNEcw2RAw2W8uRsrKdg3P6AqwtRHRUm6MtCpSs14zVEwUYz4rbYUUwYGQ88QJpzwvKUrRDKHp5khVr",
  "key11": "2NeSgFzuRXjCzMAboCup3iqz39Hax1LhbnbxiZTyvG7kLssrUuyPfWF8RnKLr7kupNfUh3xsHGXi6iKdPmX15Usk",
  "key12": "2RaKbWMX3pSjnRh8UY653tKPB1rdAbc1bpcH2NecyLJB4cGbT2xecCeu3Y64mULGw7c6Hjy7kAHtYNPUD6ciquyG",
  "key13": "3CLfU5Ac5xUNjkw4BSXA2QDoESMUQfwsAwiBBkVVT2rfj24oBmGaeFnX6TPRb6BuZbGpLqKwvXMbjYk9VrfoVMSB",
  "key14": "mmEomijaKfhNQTsypkZgtjHc9LDkiGbi7hkd8AVbvnfc7psZEn4ocq4DCjTKfhjZtsXjkp1KQ3PtWy5kfhcoixX",
  "key15": "2UVC3RnnDfBUkJ5hNtPPoPjW1zmRgiQh99TbXsQ3NKGctEe8hNehD8nh3Pq1jEcVxEhfsbyZQtm8QJUaRFgJvukL",
  "key16": "7pL9kBtMExAPy4sKe8u1CwyiW7zGaxq2mada4HNbvGNcQVttdqwAGGBLJJX4UfyfeKcnE53joB6E6nA1pAp9iKy",
  "key17": "5bbrBJUocRsufwcFZ6fzZerKon1qpxM5mkXtX9kWjRwQMnoriAbZV9VPoQS7xVNmxpRSafrtCtB2oMJSMeUUq1ot",
  "key18": "5JWpZsVKYRoS8cdJfwCmAV857Ajo4bCzz2JW7WD1zA68NmbgufibnM1U4VfWUz9DNFr66KvyAPUyGj1hXgBwyDQS",
  "key19": "2cbfUVvctUAVQxacuMFvjHN4quXy7dzEtoPwkKRu7FFiP6HbP2HNkAWyiosNqfbBabTYvgtvxn1vkEE4pHHcUKKQ",
  "key20": "4fELDR1ihuSC2jo1w2at6B3SBDWWN3a2vH9httW4w6QhPN8dLukEMHk3P6k4T8dX8rFQzAUDJB555vr4S2YKgA2K",
  "key21": "218218Vx1ndAK9M1bnFZEXaY6Vh8NjJywZG5413Sbxs8YxaNpzBnGZahwpzDkKEU9xbnfDEgW4teQTZPBnAPPD9q",
  "key22": "5VUb6mb1qe5xivmXAY69Kj6isHU9nbvHjc1VeXkZRztnrUYzrVyt8gMfh1BujeHjiPFsQNhKUgwnr9xnHyzPDHtw",
  "key23": "4bEMtyWTnY3AFAeZ28kHunv5aiFhE35hJUR4TcD43JgucaWmMwiNCcD1AGZ8Kk61fMDn1s8221LkziuhHrJNXBLW",
  "key24": "mjomf11LzzGQgCQsXUv5YJW7rdkfURELsMpr2mqKA886jkjp7daXyiYkuqKVa6jPFaYPkuuUfmeYQcuUSXY5gYV",
  "key25": "7K8oieNFHEHbMxbwQAonbprsqJhBGs64igDkZQd67NoHpct3sY4drR6T9ZTeknnwHRvGnDccE1z8Q7wQA8XQ2iv",
  "key26": "3RGsaHiYo4WcbkRXFfvzM7yFzinXqmJzX4EyAGiLGUv3rnsnQ5YUuLdteTehKZ9PpDhqte4nzBQAiT83LHDggXGT",
  "key27": "2vty1mocXKcFVzWJz43mkMDc9utEPECDdkTYKo6A9CVKyqB4SLabtLXwhZHzAGVhQrGZHZdyT9dKXNe1L92MVdBp",
  "key28": "2tbCqui6SL8DXLkzT1YVYZy2ovsd4EXaRUdmXknvotxQ3bZrubFstBYi7peLH17MkQo3XfpUZhq8sHzbXWRdj8wi",
  "key29": "4D2YQ8RodAsQ68GhsMm5G4drGAs1zHWeaKkf1nDfh9xp8d3njrvDY9uzQYhVVNq8MPA7RYP1HoHwhkpHCCQMTbEP",
  "key30": "24AuhQWcRs6eVjxCnUfx1ui7QgsEjXq4APDLQKbAxHKHTVEdQDirJCnhE8db3otBq1EeS9PJkb36jGiQvkBMzFY2",
  "key31": "3jMgcypKT2DtUEA8bjieuxScFNmSxr3D7jomArhiuJsKYK1QSVLiPGYYo9vM2nSaGjjkDHKXnUeNudXYpathD8Pe",
  "key32": "32Zo4WBAB4CKgNGnCzYhWNa7iyqe47LrxA2psaKTQiiMjPebNW8hK82WyCJHXvkcwQpu13KyGs7ZJZqzQeXibHoY",
  "key33": "3a5t1JxxrcSKw67aAiLmKvReeRe3QZGa744vmR12AQ1dj3QA9vPExZh9vqHewG4MaXvm9q9ZUxdHRxJE1rGGeR9u"
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
