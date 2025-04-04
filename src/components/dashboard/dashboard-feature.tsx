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
    "3ydB7YjsKcMp1cWXCjwgVpV81MUnd8XUtdVaTKWkhTauSVQGPs9bBFWPHCiuGxjKmVHWf5eJ81j2ZQ1yk2YJ6DJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBdTTaCnAY5dFUrojWMLrE5sVjnd9G2oNg6ggQEdnHXjcn9JMx1Bb74CtC5eZxeLbkuRwT6V1BqcjpcaD5p8Tse",
  "key1": "5pvB1CYm429sK8ynKep5csPKHhtVZnXwFr1pefJVPA5b1uR7Rvze1CPp6eg2bo39iYGRzLKUkfsDYKoKiB8YAKqW",
  "key2": "ZRhYEcsPQzh4jCHjfZdDofGYpiG549XBY79d7pPeioW7k4LZ9Uu83RWJPKpS5CvUAVvKuLmfBV7tEoSNaEH7bWY",
  "key3": "2w7nwxMEhZAmDc15Xz1w3VcCLhpnDAEpVtLtvdUeEdXEShXXfTb7JxZSFtUJp8we3JKyNULvuCEwDvmmeVZAsiRD",
  "key4": "2NsRff3Z5uH1uxJNpowbMuGdF8vkLsNx4USr1q4zgQex74WXqkUsMa5abjgpgnakEemyXzJUSDfJj2MrbqLD1ydY",
  "key5": "47smxdJKTkQ9B4184zx633cXMbXLFqHtbGYPdTeWnvappu6gxUPVEYiFJ1XvVWEdcYwqVhBGHhdc1hN3A7FXG1tQ",
  "key6": "5FLfNoKhz6LG1CakmhMWFRx7rpZ6QPsot8eD4rpMoqVrYuYYbVRyz5yyLgj9ZKLUKTqQcjQDgDayQAWyqKHmy8YU",
  "key7": "66ed5qnpYWqfDFHzjuhdyU4zbeMXWXRyFXUMDujFUHd4h7LsHBLihZ8vCyxK8SHv7gDVvBXUbxsQXKUE3xJqG4Jp",
  "key8": "4RNT7Zis7G2b3aeh5FPpGXGkYJte8kt8EFpgCoMteE1en4wmyCHPez6mZA8eSqzMxNBJNXHWoPXzTQyg4UBSftLB",
  "key9": "4pcbimDzhweUXJRt7wPLq1Tzx9WgX7wpDNegyJT7VZxjeMnwS2xqk8B4XBWwqTtCm126UqmKLCTE2gvC6owRbShF",
  "key10": "5Gc2fkc9UxFfhNaRq1SZ47w9saf1ttP9enWM1ZVawzXBKD9bWz7Q5xwbxXWMAYWWbdt9uVVxRJL5J6eLMfLQRhcq",
  "key11": "5iFQkCuQSCfLhT6Z5K2fFsENMychQVZjLRgkKtE3bema63gKYrJ4ZQtARPFdZauXg7qMBy8JBNMnXhqhyR9wtmmY",
  "key12": "5FKxxabadFUTEzJrhWxitfsjpt4EMn2CraUj6K4KXMKh35Mo56tbn8Gnw2x4xAqzJWQ4EoGf8UFokeveXvLixyRk",
  "key13": "53JxXCBkPvGa2efNhvtH5L7aykiia1hxUvhon1UVndwCunqxsiR97mTJ6XoDwVDudjoQwEnsEmsFbLXxvaomgAyV",
  "key14": "5Zy23cRZBC9wRWos2FkT5N22g4kzeU1AYxHEqtbHh8qHn7EDk7Zc58y59uQfxNvQcHKg78D7g1SM4m3x4mggmXQe",
  "key15": "4MCGyhNrWyjf9jQmw4kHmBarqxB2X1xe4XTxzNTn8piR6NTpX4npCE8ZV97oDir6hF4JH1x63mMBDr1ZMPe8tbJd",
  "key16": "2N7Fg7NdoRuPvK2Dp53phM1dQoKwqD5PVmwMtto1hzo1AKJsXpauRSchj5PDBMRsNxb2GKdi9oyYoyg8reS69pWF",
  "key17": "65LwBizRgWikbm3iKRB8p1TF7P1paWC3RuVQUe4KGgd5WQnNEvCEutmCLUsAJRhpLY1Di8cmnF1Wb4ZXjXVwKp9Z",
  "key18": "3mYZ5YCMzQPEREWAFD6rkVn42wZrepXmLvNAwPMn63baNVh4QbrkThRzRWVWuMtLrTinQBDTNgAQzDYXoKDSeQbe",
  "key19": "QVk55bDHuQkzdXUHbZe8p9e7DqndF9WxAX2XaikEZMfMDwLKHXr2EyB6xCzxQjVD6rq4Jtp2oBLDECBz5F49fqJ",
  "key20": "4xT9XAizNdY6NAi9xpwvNGyTC2cd7p9vQ2AhTLrJByvF7K16D3TsXk5dzSGCoeBPzv94LjxrWbZhh5SXQTuE3A38",
  "key21": "4kxwjVm8G1NwysPRJsCCxyeRWCeYdjcdrkJSLk9itdG4rAA3kWv5LkrP5McE1voBU6ET3cfk1LXHTrRM4DPUCZfH",
  "key22": "5FQHf5gwge5JEnaySXecfUmf1wrukBwSdoizRXLHGmTdNv1bj1Pv3yPb6DPefoNt81S3iERGB97PWYCLW5G1kx92",
  "key23": "5XFa7yFCt9ZiHzVBBJyQc3HDWUYscpxFnNHC4ba3vkFeBFrZiUtaYrJ9SfkWe4UWoN73U4XxAHy845j8RRdmcD9N",
  "key24": "2HSGvksEpetmiShufsX5XSb7UksnVZYsrs98z2dpYiRZL8NWARFqF42SHKvW19CiiSjC2tVmN53TV3aU7TEZBj9Y",
  "key25": "4NX3Pc2sHZ1WXyUv2UVW7g5N6DXQhYSy1AVamjxHdvKpBG28Yup7zMxQTkByiSM7GrXq9L2iEHSVrJk5n22Vwty6",
  "key26": "3ADWA9feiXCed5h4xEFiRHx45Xc8PB2BFwR9UxJEmoQHnEybjjQ4krYaTvw2FuS7qWPbMsBmjyEdfe48xu3qpLG4",
  "key27": "P2q8n6YMWJMf4psSa7wr7je5d7bWicLMrbJ4gvgRxTHsRD59gPJWBQRcDDj9oy5L1gbXT4TKvFmeuwywn9yaFwQ",
  "key28": "mKfFoCenJKwjsEn4C3EkYxzxu581ieiL9hvhDZ7sHES6BFzomqY68PWo84gZCfknUapuEYyDuioSx1HJuFVpR4V",
  "key29": "3atGGDmt4HJPbwKPzzRUfxXskvam19KcFQE2Zm2UT2KV9zSR5qQEn2KBFn2rQdXc8w21NUWGRsvgAqFHyAHZ4rs9",
  "key30": "41BkBY13LBrvaz8Q5PPMKLiLfz9wr6z5saBgsq7GjweR5VJpv6EixRvLmBe4qBBi5ZNNsQKpywinsW4X9ckCHVw4"
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
