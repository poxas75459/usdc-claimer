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
    "5xgqFMZb3qKJB5CrrbUeWRs21sv7rRZy6GAwEbVxLWKRb4ryopCb8aSxBdsXysMtxznkBvA3mRre4ZJAYKNE5U83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UK6AsHogqkf98koB62n4KgLfYknffwU838ScwCLLUPHmxH22T1nwQa6dyyg9o4dryt6StHhtQeoDaX4JJMm2iB3",
  "key1": "KKQdY4jNGLAhyL5qM3ZgXqbA8C4YwizMhJyGiy75e3zf2JsW8qgryYJp2HuGEKFtfYrSJLo518wuMobm94yAzzb",
  "key2": "2Q4urgKdMSk9msDDKhNxZE8ptvqR1Javc4H8g9bRA61W3xgepN3JtgdjAidpWEFHC8D4sngFBhXcbAyVmKgCEAVe",
  "key3": "2C68LVWDCyhHd6AcfwrKmoaBNKHhPCaDCCnQNfAiz8DJeCjRoG6xZ2RLnaB5W6Hf77zuXvg1NfyNG68Ho54VrrPC",
  "key4": "5oDRaXAdYzrqNSd2ma6tpFpmFYtV8TVrkWMFxf8QX3EJmzoVZuH3TUX6zVsKnmgG1r9b4sgmcRVqxVMGaADj1X4p",
  "key5": "5CXyDxjhpcTQwianRuZhE5XmiLj6Sik19j9VzpzPfXLrKXJVFYsH4HBi4MFgpv9t6LkGVXUL961wbBVBfQMQXp1N",
  "key6": "2epp9c3qWgXUTpSusd52SSNiAx2RUdCGPBg3kG7qXux4wN6dWPZTD2TqY9BnxEDtXhTTPtxExjAVfRQeKV4mwiC6",
  "key7": "3YoxM6u2S4cV3oL45nBzQu5bDDoULorgUGTkgyQK6Z3UYEANsWr8Hy8uhZm3C7tq4PdZRmodQ8J8JNJS6MhhfoVH",
  "key8": "3VtxLaJFksYH9wbnvtJMviUMGsb5YnWRa1XfFWAqzzoWQfTzC1oQcXdFLqbnNEiwm83p3cukDSymfBiyHofz8ZpQ",
  "key9": "idndtoDJUrFqWKMVR1zSVaMk6HcdewBw5SFm83tmp3LJ3eiAd2KtQAVbGmiNaU9Zgn51jNCqakzo9EyhPmA1xur",
  "key10": "4HgK5853fZBUj6dNMc6ox1hLEVJBU4aF2CgiXkJ5G1ka2J2nD3fwTdGXDBbDcwBXQL5vuyTx4LUA1RvZpUcN89Tp",
  "key11": "24jRE6eorzwbnHAB3UBjafpaxvEzmbGRYor1tCPzdS6UrWWh4ecVv2tkvJcjrHj96cDPfmfoHKFs9z9DoFuv6D28",
  "key12": "25hh7wT73TBgMgjGyM4BJKqXCfyj1gppJiygZPqQ5Fn39jwDkce8xMTdaaXEcszjJ5Uixnc8fkLNP66qk1j77UtF",
  "key13": "2jFxMzt7Tkpve5PusEZaHga8y2vQCQgyQd3R6aRFpS2LKuH5KDTTY5hqnGVwcecPUEHboAmE5gXba8w7iHzNfN3b",
  "key14": "5gtvgCw5vpvAYRGH81r3nQp3VzzrNXtQcwnBEA6SQ3JXp4BPuWTBCXZ6GvmXJDjTRXHXxSGpR2wNqxBDXdmSm6XM",
  "key15": "5W5W4nueHwTPedNh5zDphJurhcT9A4VXvRsdE1t6f7X4fhsWD9EytiR9oCF4PZVRREcRfqZb4v99wzfarpBANdxE",
  "key16": "2TfEJz3qNWhMLp3u9acGQEaKxgUWDH2t3rbTJme2Xtc6vuZj8xZZKfVi4qjEJXjzqDwqhjXX32NqmFkpph19NavW",
  "key17": "3rXW2mCQGEBr5Exu3gXbV6b26PgvKRhnPcRVRYVeEidq2SxM6qFRtU8Ye3QWvWdTB6eGwcgpMJ1cJN7fFjTerZD3",
  "key18": "2UkEv7hUpkDCCLzNAxnGhxin3LBw7fpKtyDnGhERJogLy8mYiai4oAYp4wxphh87azNaNEBSj71EFgZcFNQ5Bmjm",
  "key19": "2zHY6Bf31Tb7RwXJGu9DTvBzfX3vuPBvQxox4Cta5JVdeoVUq7MjB4ThM7Zkfyn6f9fkcV4qfJkQ93bJGaLU2Xo3",
  "key20": "3uvnE7EpXufsfZq6DkHfpV83uyprBnQTUS2c8LdjYTfYmwd8ypWxP6eJpE1NJWETx3Lu6JusAumSL2RMm9KSBmBw",
  "key21": "2f2rUhcbmwVUqSMgfsfq9CJkRqCkaFNkRpDX1BMccUG63h67fVYHMtJkDhAVSYFyfq2Zudo4mNNCr7rp1kJbdP4B",
  "key22": "4mZ4VeZphs3h4iEYNNmTdRirdcQQ8Y8D7Zfukm8LEcE2m41JrEPCuRAiz5ig2K4xDd3nLowJaYsFnQscHqnakYDd",
  "key23": "ZhU4jdXoNWjCeUHpB4CvGypQVymxHPXWXoQh1vXT8nxqPKowQYq5oi4KXBEJzSwiLQCqu3nYKnrxmMqcpCUbnYX",
  "key24": "5F2rtCqZPp6jahMM4nXuQ2sTPFkgm2AgpHmx8oJieJSQu1RxqoqTBzHCdzmLhkqGKzB3guZZqY5rqgCi8yJ5shfK",
  "key25": "3fy5Ur4yFVryXchkj6A8zaspk1Km558KUqXSSa2yAQ1brUXRSzSmJUUGRXdZhWGP6m2oeesoqaUnmxeVPxNvpZb5",
  "key26": "3gE94vwA7V6wEs8Us6vY2pqmUHX8Rxbme82VC3vfLm9GRmspBEN2Rfu1WENMVkCmaugFuALkZHV7rjuYnnCrB6Jh",
  "key27": "3sT7saxHwszHknhyXKDwpp48BtPgkcm8NH7sZyjPWH3yHQkhEj8ojhWob7AbZYLVWFxq1pxAmLsD84559HgJPpJn",
  "key28": "7myXyPoe8K1uGNv9r2H8GcY4Z4cQrnwmukvfo6r5HyZgnkLfqkvqKFiHXm1EjvAAuJ3moFUmbwXxHd42ycP9N5A",
  "key29": "q9Uhacme3TU6iHv2rFqmbbQqrDs6tzUcnGRix5Zrm1zhrKmjgQk3VW9GB4oqyMEcZuCjLCi6YCLJNn7BbBrJYBa",
  "key30": "a1EmWFf5uGo21KvEXVYWN4QPVsQLea3QgjiWrGvtdVMEPt46QkUYeS3TdGrd7ZthoB5qK7QEQYZbi8FVRsDKCp3",
  "key31": "2w68gHbgPFR8wew6cjQjQCBqq5GtzyyERNreQdyem4JcAYSyc1vH82W6gXmw9kPpW7tX9HXFUWBCeZ1ehvC3zuna",
  "key32": "3Zyv51xp9YVoy5Z12TvKxj6Ah8UwkQ1UUDQsazt9CXPgQTnZjHANf9K8f2uhiv4FMmpzpagdL6qhzK4Ci2Z5QceS",
  "key33": "379brbV1euv8udam4n5dp1R115w3vXFLeCSSyKGPWr4KQZr1o895M2ddrq3qcmBDmNMuDWp22MGKKH6oFXMEwRA6",
  "key34": "g8GvnWQvAqevhHiZHAHKFz3d4GWJRKib3fxTzsUfjnxXczppiosUFTG1UKkLrFgSpbuWaQoQ7Fmsewd9NAvLGPy",
  "key35": "4amTbxgWGoT1fmJ4VKKDjJbcDLnhbX5jMuUrrdhCvBbG4vAvFJU2qWf9jB6irL96NeudMjhLFMruSe8F5J3zUYX7",
  "key36": "bWPy2KuJdPAoTyUj5Cn7SFtkDjPjGYaQCnzNb7aKXkBnHsWzcNjq23LowUaN4VW7oBqVwA76CFJXKAWfqibKKAj",
  "key37": "46eqaHdaop7VEir7ueJNgAaHNpkjrshqVvJ3GDjFTeyhDpBqdic7D3aPf4YrKqiLdqfNk1Zz5ZUC8jCp2LSPYReR",
  "key38": "3i91bpqdMQCnn6shQQe4Uozu2nmCvWkyrXpaXswxr1KVZQhD1hD7rjXbnAZjzfsxK9ZEzkdiMZ3yAojw3XgcHAL6",
  "key39": "5nA4XrK9iooK79zAqXBTd3bSz1ZtaD2aJJ3Sabty9SNqZD6RcsStK5tM9t5apeWpS942ACkSHMuBGNnCcFkDSuTe",
  "key40": "21U4DgeHuF2cXgaefwGjFSrFpzYKGYotfjVvsAUUL6d46JjDa2AtDZFfjnDLyTxMhPQDinyreKNhnBjH32DaDxdr",
  "key41": "2WGTgfK3UKM9xarSv4MTpchgNmiFAjEZPKPVHwKovGs5dkPoJ9NXYr27uXQRWvNPWG4RLE8hVjSMXCC5ESnXrSPj",
  "key42": "2nGVemgRtrq4tYqrLU8Nzv5HEPeHKx4yrdRc8uj7faY7LqoZjvd1bciNNvEkoZCUdi2qoAVEbgLpLnXawwNSh9vC",
  "key43": "Heai733pYNj46tZMwYNzVWajaTpA9Bb1uc88rnAooLjG372yJ3L9nDe6ikRYELVHJ1TKTwBmJ6uhTGWLisj9aC8",
  "key44": "64Sma1TZfsjXr2R45Dpq4npY7pjyJT769p6jpVCvizgomENDwRsMrZtK53SUAYzVU5L3CxqBJm4doBDqaE3JnjHd",
  "key45": "3JACkiQLXQ1d8fDtU8HnnF7L7hE7S9Fdru7rW451qAxLYPcqd9tGY8KfXRRhQhikoQpFihFBqV3ZZXodGXmSfkHM",
  "key46": "5yG7WTn1wtdcXg8V7yjjdE2bMT2mp5pT5js4ZnLixQBS9CNbWR1ZbA7uhTL1cpvzZLj7mDWWvBqBJaqngHZuJmET",
  "key47": "fA6bp6t81usW6C4Bvn4CKaJ4DYw1FG81zJSRGPRtgR3LynsPuyYzJPptF3sejYjLwmRhM9ZuFXewSgutCqA6ieD"
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
