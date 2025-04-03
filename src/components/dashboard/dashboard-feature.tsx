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
    "4AUEKSi8PZA2U7zvGsyARB914XeNw4tQRvJSdsE6xfwzKmQjKZKm6BKTP8hHpk9o97CXaH8NV2vVePnWDRMoCCzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUAjqGusRxTZG4ZXdFj7tyfDJXTBsRAyRY9xMUJrJyDC4V2jWK2txKWAc3vCNNGUSuhBz5WRtDLuS4M6Up7EoPG",
  "key1": "5AqSmTxUYrGbtRcGMVysbtbUUYR53ayHRAFdK5KqBgwRqgPsREJXWGLDdCkCkoUsrD4R6qp1gTsGjH2dmNNgNZMg",
  "key2": "9RewvYrcpt2UtEiQpKdtggs5DhiUhhnqy2g4CreQRhwXYRBYDZSqkFp3XA9ZuyPfHt8H6BnXGGASvKxYK8PmZJE",
  "key3": "3ihbLVKnHisa2ZTfkK755VyhmgQv4fCm1ouSXN2XNLTWANnpu9PfudGTRDxn9ViQAzfnFsHi97Gfn8FUh5pV5GER",
  "key4": "XBZSZqt4LX9n8LHWhaWjJEjYArsYEqEeZGdo45W4jdHxdwtWJSJbrtPhZoJRAxWTheV6gksawQgdbSA9vwwj5sK",
  "key5": "3kRB4D52g9bXY2JJDpo5XeidVwSmdLY4kULJ48WujnKGebNs8NBs532rwZzz7qh4xjFeGHrRfrRRN9ZsuJKmcHpb",
  "key6": "3VLu8AJzBEzzjkx16WkDUwKPMBKSRbzxd9br9wdjjLYuwkEdUf1nkFxjWHA2e4q9w2Z6D6UkkyefWumGrnCYjUWd",
  "key7": "5jvk1t7du1zp3L2q9KsWziYZfJehQ9fzGcb8CyL81AUYPwUr6nSr1k5djTiFWdC9zUAizcyagf6dWv2v21Liy3Rz",
  "key8": "4ZWqJszFskwSjqCuJgamZs6kL2964tkSCMWZw1hK9sJN15DvP6xhUnqjHo23zNudUbdFgeYPnfhzrNBnyE3tb7EG",
  "key9": "23Tm5Ubdub4UwWgZtL4FJQDffC7BG5pgoae2yY6tVGpgFJgPpCWKJzHq8M827twUEzmZ96boUDLViGMDHzqc5uxA",
  "key10": "58wEcNjyk4AtwPJ5UDQAiaKT54CAQrcqeDzgq2euraHLex7xbhLD5YmvcGbUpTW97keLWEeqjgHNDnLpWJQhPpim",
  "key11": "5H65XT68T2mRDTDU57xnP3Wrd7hMW9XtMA4VPY3Q7z8xNtfy8zLG2cZL9h7ki9VU2XpFQwEMWMeFCGDVDsgdMWL4",
  "key12": "N9DzkujCWD4LdoeY2yYrnkbFGEkURrrFzgWGbmwVMnajLHskjbRy1koGxyJUc53A8WaEFjaBC4nwDxMy1HD8d9D",
  "key13": "3QojrifwuxTKLMds2NK4koDMJZpNNCwmVwrBbXXRCScH16BvfB3VujqrwzxKFCYoDDWjV7m8ck5bjXamATE4GdUh",
  "key14": "3Pa6paZBU3W5x9DEhAXrdAgKf2kWZzFumJ9fCrFHRJnNCnBX6sH7mfFE7U6DHJsRj13ynf89Q6B8UqVjrWJVhsp",
  "key15": "3LWRcHV7xise23hT7Tt66suFWoQoXU4izNnQ94aSHfpgNQxiXtejsijYFaZiMG4WodkFWHt32cBPuoK6iR1baEKi",
  "key16": "23LJC8VoQ4hZQ2zfM6VbWtBVN2rKfsqMHG5WHN7KUT8tjwMefcfRGQxjhN1ZBtdBbiSu9HhUUaU7NVUofWXo8fsS",
  "key17": "3rNaGYjnKtJiCBci8egxJ4uxWACTwEmREuFfF6wnQJorF7KB3Kjsu6yBLsWDoexQhYoQ4MNHJMD4umzwbG4xz7kB",
  "key18": "6461RxmgCc4YcjyAXHrYMXwBiA2MuBbt5F1dfdMEDQg8RWJYwhbVDeMJRtPNm1QtwCa8gXHPz5J1sdrb9ttY65et",
  "key19": "wJYwYsiTpM8H1vw2i8RUtkLt4caNWyEapjPLQuTboG8Bdkva5qysKJpBHWpewqzJred3XZAV5SP9RgATBqhwtyj",
  "key20": "t7cV5soxu8L5pbphjsAzHomuqeY4AQnm2fWemGnsR2VEr3BWfmdHPfsKnWs5f7bE5zGVDpX5SjPG9C7i2tS2Pxw",
  "key21": "4zMeYUB1CsVewwgHgfYFF5cH3cRMxY9d4Hmu5b4uNU4T1wDi1cvaBLPbQV4qFRndLtKKgDJdguqaNkhcCn9EvLri",
  "key22": "7aeV8W3FrDYBMvK5bs8AHFYzcSDsie6ngGoWo8dMX7ihZnLyUNxf2A3JYpZJFchBpLdTKCTUnsMgPzVh9Exy3UD",
  "key23": "3gm89CFbR2saLX2LrCFRaG8SJUEVk6CEUUuUzr48yc6fqY35koHjvpERNHF2x63JibTMFTck1RQmNdDWb2xe2VfG",
  "key24": "3oo5bk4xtzP6qvKAJrDRSNPpUqjJvrr9WoEL8SMvWWWWZn8sycLDkspHn9hFabuaYdFEgbYA4LBGLzciL34k9NXM",
  "key25": "3ZHTDKbMnHYWcAePoKzugtzwNd22v1jK2atY1XcA5Zujwaq3rBvynsRenA5PKZihKH8VKQUi46rD2nu2dV2bsfGr",
  "key26": "k9vvk6TvM7vZdwxyxjM7cKVNPLATwo4xnm8CskoMa3twY2g3ajFUueD7TpeY9PfATDSy8U1ihBziZjKsskAZDFG",
  "key27": "4hLk3mYzDxMHUD4ZdLs9nWJgMwX9k1V3GyWMHSmJ7A5LqockSyfLzf3PtLjPTZaepnjhJ4SbweCUs5gCvdfcTcRr",
  "key28": "43k82caiqyNZhSTq7BX6AkPhbiZGE8ALRbhzfJY7rZkNcXRKYqKnWUjfz1i6soyitPLCDVNvSUeY68bWbG5ZmiRA",
  "key29": "3Ai3e6pR8vrZsB4zMiYwAEUGU3UcxBUkYRCJches45iU9PoGDULxt85Nr1PwptX9QbqjTDy6XRx5eh26zHdmfLwY",
  "key30": "4fbZJp96rGSXWPj6dAy5HXk6vWgXetbgmxAueJsxuuad4aqafMeg7ZaTLobiY5CWQgyGAfwEbaGR6UkvW9MsF2bu",
  "key31": "3ujSeJa5MpELR3DYRkgcuEAQDx2gYndVRLTTXNXmSthBVJgPZbQx1gZnQ3AFR7SnHoaRUtV5xfrR8XXUauTbe3Vp"
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
