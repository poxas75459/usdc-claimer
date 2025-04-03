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
    "5ysABtu6Q418aCLwR1w2R1NkNPNvP6PLV3hGSej5ZawE8fR12mXD9QGzw7ZipiSuCCeFzo8cwwGNLgkXPW5SQ12f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WTuj5mJQi7VVG9ZL3WxvJKnSjDk9rEcFQojYTck1knS9UpSq7NaAWnLQPCimEZEhFgJenmrTdTUqDSXsd5uk4L",
  "key1": "5UsDJsv5piFdQPXB9FBu5zHnGsmhp6y3XSNpVrqfnFbXUYrSeRg1QfZsb3eYQeUNds721BHF3pBEEQ8HSdHXuTti",
  "key2": "47DaXG7Thc3MUGgBgYGXL695w5VLsJRZ5DB8CBtn5doS49nRfTwscaWZZ8GB5TPzfXTKVDeNVFmkH3exRjdZg2Hm",
  "key3": "2oDNMkyfPJEZp33TXwau7GcB7phBfMMYZBoz9TS2PKbvzpWETyxMMadYb8uP8QPUaXRnVyo6Y8gZKcXKBhjk2iqG",
  "key4": "35yKPakgYN8PUkVtg6hryeYExJfLu3u3bGogREKS1Knrss9kZzhBpS8bEDDtew7FTxYoGSQffqedZwa9g3sVN1xK",
  "key5": "2Z4VosFRLVGqn5oKeiXEnn2nx2S8wuSkhDdjTowmKBfzBCpewPdLPSDeb874T5wwGFhdZpj4YhSrUEt36YdewVyf",
  "key6": "2NuNByune4c6so6ToTULGou253PzMSZBrLa9tmY3nXCpwaVmF5ZZ6FpHtHRkoPyfdM5cZeQqz4XyDmcjZYuJFn2f",
  "key7": "2Ub2PR193yYRB2qppR3L9StkCQT1ZqsCuZ7JyyU67dqHhbSgRQAb5YoGnh7NDPags54UxeN2vkMWLTuy4xKUiy6B",
  "key8": "4mCtHsU3FGXXEdVKdzPj3Evp17ZZBoGyg49vJo6yWFu6QFn3UHkjNFsAzgavNraNfHJWJx5t4kwSbtDpzRYwrGyt",
  "key9": "2QLEbrZLmBoevN9iKh3EKnGDVzB4xhgJamx25GjjmAQxamTJpTCChoMAPj2Mt5UDyLudmtPYG1wnNPrEZFrgGR1g",
  "key10": "5jE5ZMuc393hWdVWr9oj7nXTDZuzThT4JZc9dz4awpsSZYSMU8vRKG2t1pyv4m4hzVDGDyR3yBv2a48pNffemAif",
  "key11": "5G2qzRn1k4c87NCZM7oVVghHacdwZ2DTiZrBHZq7jjcph1TeYNXsWSugvrQn61d3P58CKpcw6KRSdroLXBrwko9u",
  "key12": "5NxgeECc5yvbWwhXN28A7PKPgLesV6p8683wdUFn9o5EudJikgfgAH9nhrsS6FzmsaaoSsyGMpkGcTZvNyz6Pevu",
  "key13": "2QfV8dDJPRZzGp3hfGJSgHvvidVEtzjRAbaJJi6q3MmNKxNWLY6sJZSADgmV3dntxjA1UVT2QPPE6wn6vpsPMznY",
  "key14": "5jUGkLvEgA1jcgBfGGW4nZPc9kR7cLJFPE3LSEbmcTcnH6ZaKrUFtgY3utEkMk6kATt86hwE3NWLAhvJNvX5cztM",
  "key15": "3byQQXrf18XDfTANV4wuaLyN6o4zXoorbmTha1QFz9tozxqhAonufxvNhH5rsKr2ZsAThsggdbu9szLb1ZxzFWa",
  "key16": "3VUsRrHyYvBGoqFAhGWh95RA49hZMNveraNQkGQRyXLXfkpM4Q89izqadh25EC1GijPVq94AMnFYdEUhWhMCw3c2",
  "key17": "41g5WpFNLe6waAXbRXCfk1yEpCH7KWCgbCJe7Uk481D2AZE7YyEkstURzLVN97zfFuHCK5HwMo858427Nz21horx",
  "key18": "tuUwMemxgrC28gycbwbj357GnhVZcBbtm9VV1zRfXcVZ5C4LepCqzSA3RtRYWStBoFcjF9GuCqixvvHcoCV93M2",
  "key19": "ijmbBpnVAfzP4Jq8xDKCqgLtgmop7LCsB4w9Wx7TYftDnMhZCPLAq7tmgWz4YDCTgor74rdsFbN7DqkJvay8bZh",
  "key20": "2tYR65sTx3m48XnfoUJt87fW5pGt2sJVGSLk4GYxUHpS82JRUjapyfRqKnUiWZGDmHnAtUhbAj251bT56rdmcYC5",
  "key21": "64jtg6Qkqw66KpdxG6B1cqfxe1a1ijUApJ6iZ9xYijzyUA7K31sZsaXwS8JJMWzpDhsvr8BoXWiH9Vohod1gsjtQ",
  "key22": "Z7igDLR9BsJm1piJ4mPkJkGMME2CbTwXUCe2jF8oqWVssSkhBkJ1aEaU4S9PFZHzf9sgerEmacDTQPXkhtsCPvW",
  "key23": "5DHPuNx5NhP4xopi168yDAD9sGJSGSZwXetqQqZZmiLVmXRVJpUZ5F9g5GCEy2dME3jDPUmVdBZAihMiSnNHPuZM",
  "key24": "55Mdxywxhq6MLuB7d4HZGxMTukmup34x6bsiH6T8yVyef5fQRX7te8u9CouVsTLGdA9W1w7rGbfoGPvkWb2GEZQR",
  "key25": "E8VmERRxac5i8KWB19YpE9hbzKCt3v2uRWGRykzeKK9zCoJX3bF5pWatPh57Er3vBciDpmYcJNUsAc71JvQLe7n",
  "key26": "g3d4BxCRxSVSU9PmJs8k7zU6pmjFvKUL3346ov2mzPYNbhQt5f7ebsdTcLYFhFrAQgKUeb5s7MDPGbMhmDw6ay9",
  "key27": "5TuMzN9PPLe5oMPJnG8L2xSEvbo2gKvw5NiaAyPvaBfy7Xvh9eMK4x2qCtRoMXixiE2RhTyPUrdT7v5emifMR2Ph"
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
