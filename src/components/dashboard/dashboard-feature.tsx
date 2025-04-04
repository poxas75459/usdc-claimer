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
    "5HvifaBtBXKmkWDVV9479csHsx3krCdvsEgFPDNX38Bhxu8nEfv9QEF2gqngmoqwzQBWTVuRFdAzGZQDEStqvBp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dmp1zZb86FpGAMc3UnN2E1CTH739MWCNB64h8AUxvVSUm8KmWWtydVWgszqZN6dXhMKiBCrexfM8ebBLrj2Gu3G",
  "key1": "52NWq2skTjG7azhpnmRu43XWyFPUBosGF27arRoz77SUfuT4ke5PTw9Um94fm63yAcNM9k4dxuSvnjpQAK7fYnTU",
  "key2": "3VxbEyRcMNMn5pdppk9UrFWbwop7DmNVi2MdL1oR3HvggNP7hXP4GGfJwF2DM5cpaLhXZUJtFmHeyxeSjEMrNiyQ",
  "key3": "3zTgf19PbkG2WXxtsQWTVexmMdzx1dt3bFQuE7u3k4AU2uwJ6R5aWHWW8PKLHKeN9q56NqNNTWt5F3bTN7F67SW2",
  "key4": "4nkUDQqBsgr2LLWCGYTBTzygrSrwbAh4pnp19HgXUjzRqjLbCYsmSmPxKJDb8uEtet6gtjmsvFh26iYvanUMLhqg",
  "key5": "5eRf3NBcHmfKCJnvG2pvQDVmjQdJfsxdyagtzndNuU1RdhiCCMMCiyTeAQWVUc1NLHm8GpLJ9ckwtFBfecbxbJH5",
  "key6": "5BAVxCQC3CNVp5QLZn9CVoRQHVaGUCHPnW6gVdJSFWPGjPb5eKFnfwoi4GPYaQX3WisiBsNJwXKdLPHQqZChXNVc",
  "key7": "31SJoKd7Dkj8EGLLuZUQJ2BFDEKAsmNQLf5ZjmAUa2GFfxten7fttcfPyFZXvnPLhxPRnHMUg7UR2hwc3S4vQkmK",
  "key8": "Ri1cXTLs4m5MBUsE2CVLHUJLxcwUQsVKfWXbf18j7Pq8cU4NC2C7ojHcKHWgsPpon43tZWP1mTa1GahRxcswqgY",
  "key9": "4KqTDSKov2q45QBR8JKiqNPYDcruuRD2pydByoXGzPHEi13fiuVzxaCZmuvT4io4XjtgWfrkBQECpD4T2uLD9e2d",
  "key10": "3BU5wYMM3TTE14LYsp6Kkwbuar6HbLoFQMhDZ4ZFEwZEbKaq41CsDdXAohM6qzydjawBARw2SLxiG3mqeQyAnLXg",
  "key11": "5hMoBZ7ovWFp7FkVcH6fvqQB8Pfv82fNmkNow9V9vn7KR1gmr6scmJHKds2cT8PMvxaxFYuYDv4EpivygrPiUzVw",
  "key12": "4UW7KfjvJwjNTvXq6UEJprBoyg7UvFPUxCoXSrBZuNKt2F7F7oktdDCxFgC5ofvnUG6do8QHDqFVjGPbZ2PAeNQy",
  "key13": "3GyBgZa5ZtpizpijHDB4sePFhmWrdGnKrDuoKykNN4YS1zKX6dnxp4Ev39a1kDYa7sHQrZwerLmxEhQLxQhK4Lih",
  "key14": "4d1PCZEcCV1rRNMAm3wqqqwo24aAzko1f2ku3VZH3LRzuZnahoe43ag28aEQqUu9XA4GLpvsuUNZwMfLW1JJY5hP",
  "key15": "4Yd8aup7scos33Q486ayAo6dyNVB8tK3kA93P5sh1YDyzxyCfrEEtfGTZUrNLpFL5KPwgG3679znoF8od5WzS6wZ",
  "key16": "3v97X5Bi87Bdy537y5DWpR4ZP7tB18LE7yF2cH9grRMMNtjuXGpZL1h9869FRd8vyu1xtGyEdfi1xPUuHrXuWUUv",
  "key17": "2NprzqXor3PCRTHCaaHBWp7QjG2v1kw71nafUs2EbaP1WAWGcmb59VT6b5jPLGTkh2BocwAKoKkVV393z5obqSN4",
  "key18": "2nLirYfJqtZuyxFZUigknmdGPtemsGXnZbeRreNFF6FLyxuu91mWr47R2AoqGxDQYYrDLgPfvtNuUXXZKKbff8aN",
  "key19": "53TwqN8Qgs13guVLtkmrhKcs6GvKQro9K7N7fJuEH6zxFi38u4yu5GDaHWY4AkkoEj5fXAnemdo2zNQRnEou7ktD",
  "key20": "3AFWVFSVTExqAATtKPFvW6e3MUL2dBwCgudzmnkjYDhR4j5vVUWC4cju59x1DEf71rw9hiNmjxTZWYs9gezbbruH",
  "key21": "bjDu9EvfsFDLKdDJhpjA789z2x5V93tdaUxhqehYrVXAUf8qfQhY7oBRfgh7RH1QaBfmUGbcKU8XmXd1dQc6fLq",
  "key22": "T3qLaGCC29mwKoFEXiAKr3oPbrkGzzhD7sLWsmhToDNZLzc7D6jkLneDvAKEk6quksMMt1PYw4s1hvY7otDAQhu",
  "key23": "HFsch94ctoUpcVqL4mci3nRPWJXoQzjGk9CcjHuDahPqkKmbRVPkpo1oJxBrYGV2LHezF2FQTS9q7iE457Wu8Eq",
  "key24": "2uNrtmJ5NuNAzunJTubwnTg7wn6ENBfeaTysKDfZHAodqqga13fXqiVhFXa4VbZFiZqemhhBjPcEqsLHoqGkjJvb",
  "key25": "4fCaXn77dGPjDmqp7EBUiHbPmwD3sxxJYixtki5Ryi29e9ay7dZrgGBzMUsZswo5JLBw8MYuYJvUhrrjV2pNJdhS",
  "key26": "42y5eP7XNGpY3kVjQbNeuJyGHZNDLLW3pM3wCxBnozf2QXbgynBkeHABZP5FEpnr4j4QKf36PVqj1wSs2AgRYTgg",
  "key27": "REAbqx2oTTHHMfpC71qeMxQwV9yzeMk1nuznq7jQAUM6ZKL1yax7bwgQrsYJAw3XauNTZDzZTwzMY8je4R1FFSG",
  "key28": "4ZdLcyHjQ2qyKpUHiGrzpw9fVk2u48XsyTDuUG7gP1mGgbhYAKw4MuFuuj5yMhyuDXHpXfDNBNRiajUVc7i4VrA7",
  "key29": "25yPhTRD5JX8RoWuSfcJJMrLwxx4KmehKNGPTCyayjHUeXDHqxp1ksPrTVcJ6gYMfXhZmT51WpMs771XjbTfw2gk",
  "key30": "5VmgypxukdLwchZ5jxRhGfq5cyxahgHpZc3A5fHwWZ7gm7p4fr6mbumv8ueS1sZFAapxdZGpdGDGPS9G7PLYK8eQ",
  "key31": "xcUu3k6qNAMJSjGckhv92QuWeThtkbARrKoGH4vf6ofsLdkuxdrDLkG26JmhTQdHxTEZ6YiEJn42yGuZXbqhaqy",
  "key32": "4JcEbhNqDzG4u1TyUqKrF231DPWVKP1bChqSpoy4cCkX7TedWzDR4DpB5DYJQZqsGVJX2Sdtu6cjR4vde4ZrKoY",
  "key33": "5h7Ztu9gdjfpiGPdZgtJ7pQuccEnnaeSDjouWMFJSE1p76dazHsSDW6axbAPpxDQBcD8WDsaQhR4fnAp8CyCBhat",
  "key34": "3N1vS2b6WiXkkwKZ5FcV6iYPd23HmW35ZGTK8EkPBQNgKUeQuikVALK1RCrtGdHauQgx61xWidPaMVTpAqsrgs1m"
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
