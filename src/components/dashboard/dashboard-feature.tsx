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
    "wNSVwwZ4rj3oxHeciPnzPYskXXi51StpzvGCugTruNwTqAYbbjbg4yHWYjA222dSiS7JjUWc5bMNh5ktxCXr5Hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42mSBW67cBjVV2ez1ws7CSXF7iWANEcwo2WyuhBLJfiwubCMeb2enpmGmFMews3qVfK5zQmUk8Pk9M1ha7Rphf9B",
  "key1": "3X38AZU69ERZHAgKr9UNrEiivpzZuMh26VCwNmoVHH9VzTtZMP5hT9MCwc6zoAHKrKXfBFoVvVdmPQmPBhJ55oAw",
  "key2": "5BtHUJ2JiZGzm8vJQ7fgwuPoMvSZFQqrRhtRbzzvL7WiMckS7iT9f6JEdCnitq5d2ktxhsgwJjz6H9SJuod4qzxg",
  "key3": "2mctZkwNrgfF89yqt2iTUpQLQd6Kp44zJA5KTsii3VeYzi9mxjnWZNym31M6qFwwHe4Xxt71ViHPDGCL83S2sUwn",
  "key4": "338sq6HLCWztPNgHfuDcrH593U8HNmJCc2Ye8Pwr96uWriFFmxoXaYpvv4g3bURhJutYcHdtVJAvzYDwNdsnhUHJ",
  "key5": "2zHYfrEzxkpBBeD11abr6uZ3oyATFQPfktt4rCw8FuWPLhPuMCCESC68E1W6bWJkP2av2TQcj3GvNucWGQPjTTib",
  "key6": "4UuT6Ctz2W7dfgdoM6ZZaJw7z35LtLq9rFiMN8fWscf3HekyzBzUAAw2Y2XkUYudPVNiq2wiHb9VCaocu58RQ8nv",
  "key7": "4baMNXCGrxnGgWaNogqjMwRQbQ14pfq4QyT1mXuRfeeshAcJM7ACGmmrU3PgxpcnZHZ3JiaXaHMd6mAsBTcwaVoi",
  "key8": "4LUUZ4w8uMMWB9tSUC1nKc8C4iBXJYn3pU83BNxrorwo1AHJNprfSZaB76joCtMxXqYcSCGw3zovwKf5Qn2L2YBJ",
  "key9": "3RMg7A6nSLs7ev4btaYhSdE4NGiQsUV8EunFd8nRcfCFWuChKX93Yh3XL9MojbYSMofvz2ZH7fn34DHpaUG5rtmR",
  "key10": "2VBJMK4v7yHEjN7jfg2ZqfKrbqgc15wFhucGnV7PtV3Kpy2B1yvZB5zvMj3dYUsDvtXaibAGbFMTuHidEdc13Gdw",
  "key11": "fxMgDt3yabkCiVZkNnX4t2vhUiScoh36fDRJCH6ScM88a1xvYxg7sr8XFDo7zBrEh25mgsnAEnpAmtuscWz79Fe",
  "key12": "2fgnGcUmURdDE4RkvhMqxQyTGfRmDnQkoKdcxoDzVaEyQsGWeLGJx3mBAJvXHmA9YVydVi2BMmEVTkhdur6E75q9",
  "key13": "47DzgrseM5TuY11oAbtomJPZ31dDNoA3f7XLrMWTSFiTm8ZwmxZGp5q56tDKQ9XTt4tf69LDWSKxzUCBTWmwxR4y",
  "key14": "4cB5PQaEUxE5hyuuZLVkU4TKA8e5NyJ9zbZdHugQvVB7chnDZ8yraYukUXjS58sCNDFACmvMrYtYSAFzfQaSu6jG",
  "key15": "63hAGb7X62P6UpZC1ifq8VHLir8ocN6ya2xTrCnweuwKoNmFrdQpaKTivNTHTYT8G9qnw8gg5JZAgzworAZktjxR",
  "key16": "5pdtVSg4acL8CU9NurFaFThQPYRQazuW9eFvv61EfPTYStJs7DgASitSD17pbeaxG1ME7kabh3kcz7iUTeTj7re9",
  "key17": "2Zz2C1DtmK2vCvDTDdq2ungxtou8zfXxrXCRb9fWrcUyCmGBZc6gKTS5aq4xpWTj71HpxPwfQgK6Kknz9YvzwGeL",
  "key18": "5nBkCLErdLEafiQ67mwGBwJ89mhgwtzUWFQ99APJoeYkyFaYB27dYm4U9hXadyKFdmoLBQyAzwn544vv85nFMWjf",
  "key19": "5WfRXthM1JxL74L5b56nf14Seq14scwEjdqHgcufURM78h9axmWWU4ADdtdtnJ6AJiY3eiJbmvvNe2WGmYaNRqFT",
  "key20": "2aLznSsBGGwzCACyY4HYi6bTouWBjWLuJUYWK7XzwgwH73Z6YyxTJJQRTDP3zwTB5UPwVTttQ6DvXFnL5ZiQq9Dq",
  "key21": "4fC71SPiukbSJAHgWDeFCtaJmVE15uJGnGZncv4pqLi8cGAQPLuqaCJZ1U1bFaVfa7VembVbkfS7uDjkgrwX1mZA",
  "key22": "h4yy3XrAJaYQpLYzSmaVwrvHy6btWzZzboa6Kmmapm5449vcGAtNeQV8swb3fqrSKWUhEdJPMgxSfoENgGvAULH",
  "key23": "2prQh2FV1TCzJz4U5AbToFadpE7H4FsRp3NegmiPGoSQG5aJYnU7qs4zngNpNk4AjwsjxGaS7ZeJkKFodxu8mn9s",
  "key24": "4EFXkB8pyJfJmfkGvW6QX1hxkpuv5u8RCVNnA8HBaJhitGQwkP24R4qWuJgb7MZa1h9CXdcjGFwrCY6U7Xm82UtR",
  "key25": "5K2XRsNLHox9jVzewkYwrnAkWQWWLEHYra8zCVTUNNpJpowSKg3aLkuEfVBk1K4TdGaKV9wF32nbvH8SUuuX7gcs"
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
