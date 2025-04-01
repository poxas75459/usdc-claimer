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
    "4uSrvqg8Gabc3xyUXowDRVEEHAGBvYG8YvJZF53r6UDmzpsJQzoqvGY5EPmVRu4nt7fP1R8dXWzKa1Z7ptnbEx2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44M8GGxewvBSCaZYQZyKHRyXMfvBdFJix6dNeRWLzHsbD2J4cwmSVvvRBpbTgGDxqULs9CkMR3KobcC9bDkJmzLb",
  "key1": "3R3eJbQxbmB2DuzWrfaTNeiAxvteYW7Ge89SE7jrGeThcGNB2Y2dafeCGvC7HqmJMs4KquUtMTFF5rEo93iGwk9E",
  "key2": "3kgxKkPNQhkTobweSWgbPVAS95u5LYsMLmtVcUWWdh7xBzkGPywemNq8KMmZZ1dqN3nmu34AaBQMGpXybtHWMVEh",
  "key3": "3wtU5Y5DcoaAgzrQZACTAxvyfBEU2NhmGHQDgS1FcCKcthkE91dksgodVPNorVyjokwDu626XuooJYHZvUwcDKKK",
  "key4": "3KSymRD8ob9Sryrmwa4TZbCd1RzQH8fgLj9EM1cek1RayQNynqKPpDtr54vks1rNtsDdfBWsFMqMJoCudB83urnZ",
  "key5": "oUNWFi2pBuiXSdspGiaXioLK3ZuTuFrr1KKyN3Qt21SJQrNf3u4AhS7z785S2nvSKhkLD3U4gbWLcFUHkm9morv",
  "key6": "4pKoY8GCKfjFMqAPnHVe4B4J7mm3rJRpNquB5jrbrEyjqkMDKQD39h2SmCX7nmPiMz9Yyp9SDwsoyB9eVe75ftAa",
  "key7": "369khKkWHFdUkBfoRGNdsbMpN6R5x9iLQ3dPmsiwjpmo6Bt7QTFKzWy7NnN1hDPot4SbvyormX6ZWZ6pqv2ic1FU",
  "key8": "27xP5DExQ6QVBLb21G9Wa2S29vU4s74j3MWfWjuFQjG4jYsXJVFur8mUCCYayZvHsusetM5J9jBefMr577jy4th6",
  "key9": "5X2Xa8Y34Ev3TEi51MYYv3jPoVhADjFJVRTze5AS545nsGx8S9avWNRejqai1aphCzXm3DS5Dw2we2drkXpPohcu",
  "key10": "3NtUuE5ddA9Nucg2k4Ayt9MwkK3xiNXMeEs27KDZL2F1VrV5PvygeCzSuEPSmF5fveoGf8B6khCs4KNehbTXGcy9",
  "key11": "5fsSjaifCkukL55scQLTBAa1Z4dpvYG3Hu3eJSKidFReopEZDVjG9FQPNh95R1grGnKqtAwa68Ex4BvyczL3g1qw",
  "key12": "5vNNndnhnV5tz78wsgbcEAtA9ZiMBEpu42MbQYn8noBVjP4uS1kut3vH66N47rwS1bn1uatrmnDMMcQFRg2zJC8g",
  "key13": "3Vmo31JACG5YZ1Mkt6wgRjwkvXJJaApevd8Zkb94kfWzwbg77zsMF73eyZEZWUyqxJAjRzeCCSdbqh3DXQYMpUHL",
  "key14": "2mDm4JLSZPNqRdCfhNSY6BjjRVAUe2hr4gEeekGxknpoVQkQP9R1yuekCKgNX9QzTh5dF6hM2paJzRmVvPccaqKG",
  "key15": "32CdnYWHMDMq34FKe5RrzEVWZhEiv39qfn6mVrHNqaay1YKcBg6ZzDb7MYRpUSiAB7DM4k1oWU81mDT5cTR4dVPF",
  "key16": "67mbdeQ76XgVwRQpLzGWS7NVtpUsmpocgs5UPGyhTsAAjZEjfACEYrBMuBpSAH9EUKeQKbpriKMFEDDha9zGGAv1",
  "key17": "5dqjFGhtkFGPdmujnWBKA2q1C9F8F84CaXK3pFZQeBF53bNNYC79HNTjknnxV8jVd2f9xKxRytNUw8ZXund2df6Q",
  "key18": "5snVRUzpXLvzYWw9JusvKxZn8q1SeUH9PV1gpZiBHVF6Yk7CFB2eeHMmKfy8DZR3cpEDrdVr7Ds8odLzQhFear9S",
  "key19": "4Qq8xrF5yNVmrUcJgMoaxRjaRYvQSwVv9X8J82XQu6HrJWssYc7sVbhxR8WhUnyGoB9PPYwa421de5xgdFsQdvC2",
  "key20": "33it3rpXnNq7FuA6fBMhtDvsRrDd5TLB1oGjPpYqEdQXvbqqyLTm36Xn8Vjgnn1VWXwgsVnvTuqSNsnzLJhvTEZN",
  "key21": "2DG4zygq3dCRzoHoujVDL6KcRAZhtkpGFFotiHaojBVHKcPAN2Nzpw5NSEmZwygXBVLRr9V1g4nNzzQHtTGgFAoV",
  "key22": "34nXXs5xJ3uRTsK97egvLb28vGmi4EM656DWkdoWQmabsMchQqtLtQScMK2Syxf2ayatDDrWwb2YVJ99kx9bmWTN",
  "key23": "3E9bdhUj9RFFgQeWRzARoLbqrAqtmevWsd7XHTuechpk3uwx7KKzQj8YscvRkD2SW5uM39rwv6dNY8m8eZ94ik2S",
  "key24": "5nnrUoGGiJnQBHFfe8LiofsHvgSfrzVv7YtT4CyrEJuQtMboQBaGPvw79oB3CKemRhTk8wVWgDptHYC8m77TTHPQ",
  "key25": "63tuKjLNXwtEKQzuLPq8Y5rQ7kmpDVkk9KTwometgSUwqRf3mXoKXs18VGCWGEaZ7E79j29zZUDBCymPdHjpdhxi",
  "key26": "67pfkCf9soTmLDFd33Gh3BjRr3Ae2poE68gWvHwbEpJPJZXgjUY8dNdPszwkBFLrbvJUcUh9B4jWosjhSqyD53aM",
  "key27": "LV5UKKLqCKrU6EbRZoE4Vrc7z1q1bA9UhzHonhvpmqNxrLMEv4RUZte5a4yLeP4h3KWJJEtLiN1TGxFFeyHZ1PY",
  "key28": "HPojNtNjGXhVK88Zi57C2SJR2U5LhPBoCr1PL9itWsrQkTLPpEpQb8N4ouPcdkWVvbTZCqGF6Wdfqjh7AfuCdsk",
  "key29": "5hNgV7h67DDD6Dky5VbfuujFC7f5PuVz46pSQfNMGJhsavS9KpfeHr1fJM1NsMt5wk4z3T4MiZ6mmuMMxZzrXPQf",
  "key30": "4XUQ965bHHg2caTRibX6pdmxqxbeMrpsc8q4uXKpCqGEzhZh23bfsZZkabKcioGommEt3hJfV3QdfFBPaU1tisC2",
  "key31": "5qNKdXHLuMRDB3FR6Kpp8HKdXzodXt7WUVkVXmBKhyEqSWsikaeVLRSnnZfgCGAZiSC2caYf8zTooTjK4fa2jeNq",
  "key32": "2H6KH1w8TcKp1cyU8eLQcpuKpXdrxhWRhut8ProurzdBAGERmEdgP8DNjYtiw5jzAndHfieTpGzvMbeqq2XcFdCj",
  "key33": "5LPx4YhB7qucKDbmUJ6eyeQCJdhCdrmSkKoUdfNGErAxwA9xYgbF6n9qzCvJZvvTtmJ775CpZ5sxGJPHrft1mh7n",
  "key34": "53kXLubjcW7k1yG1LoX2sb8gVj6ccCm6pqEbZYdonYPcaQQuvtvewCMzKiUR7kvoBkJDtZQHJwdx24KCSXWQywmx",
  "key35": "RoLQsnpjyD1JUTodM7LxueNRCjrzALhT4CFcD4a1pLXrPa8uYMrbmRQoA1XxAiWP2CAijAANZEKhPWM5Mt3kna4",
  "key36": "128fnikXTNgH8y9ajh5e542K8Nk2mg5yxuFBoeXwnRDhDSZz8EyRLnzVcikLcY39ewwnhLdqH396F8RdHDEen6Ki",
  "key37": "4K9kConS6nm8w9kyDcpjATfrywCJXxM431akLKHokgWb8XwM1Jd3NqFNxQqVr6gCXgcPxME1mkVbQGasMm85tahg",
  "key38": "W6xqrJtxGUjBghiUbkJ4CdQnW2Bz3a6sTG17C7AqWehVdtXH33ZxRwiBRoHiLCqxKaZL8KeA81UQw48DNmD5ciy",
  "key39": "5NT4mz3Gxo8AAdR5d4PTqQkm1vcrz24QDthDWYK6VLnJrcJbQS2KZJctAq9w4nFtfw9zZTECDZBmqiFMcWCG8AAb",
  "key40": "3EcttXgCLVqpBWH6fyUmaG49zuDM2YL2qqokz6nyvXTvWGkS4iToGfVxLncHJWAjwqKvbiPpKqgDtohCusETr7ri",
  "key41": "ycBJ4WiCd5ch8vNYRdyLSd84F6N3uGMUbD2pXXQYE64rcVdWC5yWeR3ahFXbmrrgzA8qd18Sff51BRZRB9TdpRp",
  "key42": "6q1PARfB7TFWL3ZBErsHANx36bNkWTVf92ctxhtrJVjFfrMptMcrNrGd3LYZSADvsmVfX5gF1FxgUiwyDNqxt45",
  "key43": "3yTqkZ4KoKaMGtR6ZhModotVoProqviGfnrWCN82fwjmGhgFs5L11kVJ4gboYgxhwwDjrhuFWnj9KzDWrNpnUCBe",
  "key44": "toTZqYsdMP4NhHE7kBTRKRYEfUS8Sgw34AKQ8NbEbbe35sqw4v3QgWtzgDUmjgQmxs4HtoW5TAeXDhWcJ6eDMmr",
  "key45": "2qmPtiq6hVGCHkH367XeLV1fLhdi5bajg5Te3V9McDWHVvR8GQYiJa5ady3sQkSN9XY1Mo7QFzbexjWTtBb9C171",
  "key46": "cd6wzXu1ZYe5LLi2ajK6ULHdWooUytipKR6caaxrSgfpcYgfnh8tAH9rMcSj73t9ELw3KVyFJNWF7bc8LLjUAW4",
  "key47": "3QDquNijqaDkkRhayxvvtGBGUHDzSbM7VGxKSqrZJTjpm3SscsDuzQD8mdVxc27WS4tB4WxjAijh5tFpJxjijnbg",
  "key48": "2xnza9uo9QA1of9ofdopaMkWBCvC6DoHvFACA2A4H3z5kJzgj8SvtFVtYzKovyHR6LLW8um2UtUDee2yUyRnFdNi",
  "key49": "DSJ5yebcE6nHi4n7cuCY2kWGFHxkkVwj9ebURWne8DT5pR5Xt78Q1ekeSHXBwe2zdGrUxSbUME4FuBQNdhxtvRj"
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
