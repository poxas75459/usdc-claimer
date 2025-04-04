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
    "2pPp1KJKF1Wrn2usSBvm95Rv7FaxVVNxFpy9g5LNtkLXkfXzJxJRtwNd2t39HA4MsD1b2Aa47cZAGmkU1e5gFzSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQP734Q8PVMCNFuUEYRm6GZBRYikxKvHh5Y5NueNEsB1fLP1fx9MmD5Rn5dgaML3sQFLvLh8gptfHphByKEgJKy",
  "key1": "2eULW4cnYpgP6kJjqmJwSmtPyv5RpVdykUPpyiSggzsZGteiXccS9ZrM6YPsg2eoa7evvUQzSp4gRJTaSwX2Y6bz",
  "key2": "2KJa48Lu1criXAh97hzyM9qPb78Bianunhxdz254cy8WuhriPkJmj2PWsKQeTr88ba2jz4kYvCnvmsFRHt6wsfKc",
  "key3": "51yFNT28G4vTgz9uWCL8iZjCaqLuqwAYSL554gdjPxweBpFMFoVP2ngeUBtwSnHZtZ9hyVcfLEteUaPAg58xk68n",
  "key4": "4fWdFPfWeMvQpnfpQLcWWQx9DAiPECV3iUSv1V2PQb3MkaRRcNCQPL6Fyew3ZE8xPxjB4zC2zDxajjLMSauRCTZL",
  "key5": "2SKRbVDsaMkNRh5FiHb5cAWFzQPpkHsdoGg2Aipu9v9jd41jhbcVYvJoxVZP75fyvUm7UvgTEkYJBm34XHBPxiMG",
  "key6": "39YxYNTNc1zUuxxw3t8VwDSCFoABRg2ahK9a1aWM1W9HzryrWbEomVFuauGTW2VwF49KykDAhaiHdGiCsJUo32Gf",
  "key7": "5oha8Vyvc3AdTYzjsxApQxrtSqrixgKDf7w7A1ujxzmcrcCGUYGHAG8sfN5P5Dhgv1nzfF3gqe8f5NjLxZjtXSgK",
  "key8": "56vfNR9kWXqFut6iz5CXfKcQuzpryFPf7SFqgBuebXtZBU1jtUx7wVhqj8hMf6Bvsg7iBaRwhpF6rPJZdU2iAydG",
  "key9": "5AZzVHWyirthTK385VyDxfMmjYTgnj44cSXzT6X3oJdchbJPzB5jnbWq84bgTx915z44MmK5jxM2LXngZuoryxAn",
  "key10": "3jcntvhmBv6UZ2KFZNgUfhjrnsu1W3GcjfLY8TTBtNXhGt3mDKwm53EQm8UDX7g1QaFzZ5C3expNE3UbZNahusmr",
  "key11": "4zfdqbnTUXxg1Tr4eqjMahHZhsXJMrt7oULqeZ4Z3pF83mhi6NhDaWtpEvBKqqYLrcJUhtq31tnze47pi7eKyaHb",
  "key12": "2pqbAzMwUKwZo9CY7YvJngVG1oJWeSmKJDDPkVgV17SzyHhoQa4iUxWFyrcHzgR5KpyWTsGwgBp7ArPhydvDLRgg",
  "key13": "4HTk4rYMZrupVtiCRnoznnv1Nkdr2hMLxCZGEpE55MQ8QyBN3ekpERnZUBfukagqKp3YEZZ4YyzdUBr8G2bTop8Q",
  "key14": "2s3qJaNDGkmFiJtHz5rsTntP9wqqbfP3ZU5iUWX6DjwGSs7fZgiCSGSsNDRQWbVKg2XfYRmiSwMCpjHZESH9nRRA",
  "key15": "3GGY18tf25JUDi1FBLV92jKFVLikxiBa7iYFTFEGMwBue1sxvpKACsSK46SyJiYWNpUCYXNmvA2febG7qrXTKZ6j",
  "key16": "5ApG6sQNKSFYwsyqkQcpW7LvXrmj21onANPmrngUV6ktCjww1EuiNVPBorQv7zDDoiPPsuAX7ti1qhMhaQQ2DQ47",
  "key17": "2g6ZrDQRzQkXzUrCUm4nCe5pT1Jui7we7W7kGDgadjMBzRYtpAPxtc27BbiQgCtJmL76RyXFqnNRR8TbpBnQRyyR",
  "key18": "2sKZ5W8K1mw5Za1H2qVP7eyy5FtxVS8eFfBUNBZSiXWre9PGeviGhCCF6Qhx5b1kdvbntU9AMF5zqmdkUuAyY6Bf",
  "key19": "2kMP3WbZvVA8jXivXcR1UnS1vJ24osa82AE4EG4qE827CLnxav7qzyu7iPw2VMZANxtPqDE4CGFjtuEitGB2Mv9p",
  "key20": "35HBcNsqzTqKMyRLaZFVZ4o4tvUhtiLa3VCiVE97LFmHDM9XRBJxoTLWAkWDNXBoa3iqUMSXhRYAR1c3PH4YfvR4",
  "key21": "2XYvjEGeKYsUc4jJ8YG1n6dHpGfPN9QdqyvT7y54U9gU57o3RPgn8boDQT9MFjnwNeAXwHJxTm23rnKnp8vNCYw1",
  "key22": "3zQVhEYnJj73a4BYmi3wUztohd3UZTFqVsv8seXWM6Geb2LcNRxE5tU13QfhmfPqtFsJ9sckJYmBRm4Sbx8JphSC",
  "key23": "fZEyvHbmmwYNZTso1iY89716v3tVKhoFUAcHaYz5nB9KAoXbYJAMjGpgj8njpC8c645azD2nHk7JLFEN3VG98Ji",
  "key24": "2Gqj4JJgW6WqVM89i7ZATBoHy8TqgNu4qhchtQKUqPpt1enaMdD7fAnM4txshGUp8k3VCjdAQFSegBc4SVrEXYge",
  "key25": "51W5bSACxhoK58efvzvYAbwhuNvxhecL7SDEwMcxbRcBDsdPkg4GhJWzYjF8de325yK3Z1qr6JKHZikapRSuTVHz",
  "key26": "65BhuGwZTqzB55UdP44G7vSQawYkTdC4G9TkrmjkYbGW1drPGQcFZwC1c1j915vuFyFHaEYu9AHJYqFDySskExbM",
  "key27": "3WxJYPgGDAGjSJmy5Li25S5DwJz4mXy8SDAUCZmo685GSaXiyiHuzqeFpYMyApTNoynqwnaZrSQ7GVMt8ihJhk13",
  "key28": "5kA73HYET5fns7aVd5V3CqKE2doSYM6dxsVH11ttCHJMJ5whZKoS8NWbR6ffm4adm1cWzmcv8pH1Dx2Z19AZ9MWM",
  "key29": "3Bhja3FHDnfBWPuJB2CPYrTxqAD5gAJkQHsxmZFjY7fAmeaYkbkiZBHTU1njYY5U8UFdars3zh6ZnzqCymG76pPe",
  "key30": "2YAJwKTgLeLPeQUJ85h2FharVFuDza34m1XPuF5W4XUBhHAGUbLQQXvnpujnS3Q7hNM26ymjCtwN8jVJoy5Wpj7g",
  "key31": "5ReYkD5BUmng7ZMNtFmyzoGGk7jvsn6ZYjkErqBcZcWrn85PDH5wVfaXwtXHix3WNFGDk43UYQaz1H2CGMVbRggK",
  "key32": "5VcuvF1P7NoXrB6dAFNTsU8h6mQ7ccvAw2gvcvYcMMekLJWXdMN6bpkfjkVMp2sAtEvmMfDcqa6ov5uGzvuLZFPc",
  "key33": "5WxBCVGwYvSFCic1KcNTjU1D5LmyFsXHQKRc2axM4dScsnV2Z1LPDrpF5ohoBXCRkrp4kppMM2jJFDChRobBWvAj",
  "key34": "3rAPvpbEQCzxL29cuYBevjfqXx48MiXqmvRHaenVeqbRyvFrxrPfon77DXcEyQwWrAosstVsk8y146h3rAjRSmsr",
  "key35": "3UPV8iVT73ZU4qB61ERh42b98iYmWQWHkPWrPwivFwojPsWEUETdV1VZCks6peUAVJbZ1azXagLVsvcHGPbkseEQ",
  "key36": "2ud2bBSjGXcWAL4TuJaZkyd4Zt7GR9MaSFRZvrAYd5i9Uupg9Cu51fgCkq14gKN4gPbFCJDXfyVYqcitrz2c3gVs",
  "key37": "cnexmwMnf1m6maUXtXBF83sd7GGhcY2sDHtUnmyVJVgXK7LeGyZmDzfMvP9iZk9o96g9U7TwZfTk2qgHLm7Esg2",
  "key38": "4fVDywSmyxMffrQJCJat2nqgN8ngmJG8JyNiMrCcvQZjeBjmNz88uhSoNWxmjGVVum61fydkJdUkk57GMM3bCANY",
  "key39": "2bjcBk8tcwM8byqNLCysHeLu4QuK1t3ALhfjrP4HEemo8FEgpMoPpJ9DXQxU6z8kb1p296iY3D1Ukga5SzfYXwiq",
  "key40": "cMsziXv3J7zNRaeGprjDF681xp3g9T7n1TGHyNAmLCu6xfXs1EyQG1G91udU9eih3mDsgLrRTyuWbbicUqaSKXb",
  "key41": "2yLrZkREWgsbW72zvW73spnmZHuDiFoTGPikaTAt2wCd7CthokguNiBnXNgWd6uJkp1ciz7t8qfxaR9jy4ZTYJTr",
  "key42": "uFevs3meNwN8LuzPqnLdvMTb5x2uNFdLAPRBfaJ9rJnRj1x4vf2crBUmrwbG6FrTfGtBYNBKLSrDHVWrUix8jtF",
  "key43": "4FuJyDqYoBb9VohGatTixnL3zwpf69ksmhgpWhz6mpUDp8wmd7bJVRrYFJpD89BuBzDUEgfNVrQjeXK49apz2Kq6",
  "key44": "2z73wT1MvmFdB8vfuaXWP1aCHwtT5LT94sfDkf6U62D1AZmRBz1XT4aWnHANzwqcqJ8HTVu5yJ38yVCqWzoRyfBV",
  "key45": "26myXqWYF4dPQb4dMQx7iXRMJ1m2SrJxJoYN9U2YwrUzpPtf29UNCZmRGRh3DDz7c8DdJLuJYds1rBPayjztjyEU",
  "key46": "5LeH6WfZddpNpBqULatEMMcnYRNXuWD8C9dzJ1rxF1cQ5aUpYjzDvG9k9Uk8ybhs86yCWbvxTF1hs4g2n3da4vF4",
  "key47": "2aW6Jzfs6sVrxzrJ5Jkx848qtNsNaMKrXjFjiJhBxExdPmLgZvLPux7mtPPd81DvuU19LzJyBSvp6Z5TGRpeFaJU",
  "key48": "2cjmydHkXaYowgjHrEwhDbKCpbWezdkqFzrGsN3n8AbLcyn4azU9N6cuBzvUSCfUPt3tgrDh7EJXrkTLikBbGUAp"
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
