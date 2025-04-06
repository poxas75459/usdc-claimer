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
    "2tmMprdDMro1aE1WHgYK4iqxL3NiXuoqLmkK5CdhxFiWrGjq59DDWR89vL3DkVgR7hoxDuN6XhyYWgCKs85LFAio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fPWcNamkkrQctWR63cPvJh8JtdS4Sq4F6f5tqrACsErzoSJ6mPtTQm4EWxmmzs5v7GmjDgRjVFPvGRbfWNFJprX",
  "key1": "3mhq1Kpk6Apqcd4Vu6h9xiihndVDbUr87K5NR58T1QByXqoGsQwa2rvgTWg9rq1XpbDi4U3mmxkBwGBXahLLBmSi",
  "key2": "4PhRut5p9UugD82xa7AsPtgtVDR9oK4rU2Dam5BW7KAkbgZqVW4TFNZo5SG8Zh3Q1nx62w6pZepgSRtB8D4UVHEc",
  "key3": "2en5LUpAmbDg69iJVBu7xx84tfd2nEv5vUs89982SgDvVDH3pRsENrT6fciiyB2KqGaTL77Md11AcJyTJ4pjzKc3",
  "key4": "4asbK5eNoxJhAgjd7niUPvujwpJgoEmzKd5EMAdvMsPsDT6qgv6pVjAjQHNhLtajyKH39H2L8tUmy9T2Bc2Ha6N7",
  "key5": "4xp9DDV3y8ZfPgEzRtcHoZp3qnVhdwJiaZTqZy5yaUNJ7hcMq7eLpBkxMoGbjoUHkR4kHtusKdu7itAbwBXN9yvw",
  "key6": "3e45Xpg7M66js8yf4181mPiSWboV84zv8wMmV1QQY4KvrqW5Tzuf9DFK63ZhDBkvaMaAyfsCU5aVYCy7w7795bUu",
  "key7": "2VUfSnqJs5hieLzNKAgrpMR2cwJDrFp6RUj4vF5LJHMGiEf2PqeCp8Xvtctr3Wfmi6yrxz5gnPYkfWdqr78Q12KS",
  "key8": "3brDPEhSgY5DWXZW6FbPmthRfA6ogZYe5RGe1twvFXnHAiKpddpDYuk8eXtr8kAMLJhyQMDwABQUKXwUj9FXkjgV",
  "key9": "eVyKnuPBTW2hgp896CawgannVtHEf1xEkDBPsxKrBuMzG4zWT4KmvHvKRRTHhdmxPZR8XLNeGMpwNsGPohoRr9E",
  "key10": "4LVKqXHHVCfcmqcbTKJcyPwkGF1P3AZ56dajL5BT1UpAQKyhU5hrkPEp8y2MUsYhPkcGJYyhDedMwDxbVGwRZaoQ",
  "key11": "3uXWGwbgtXBeabFN4pUvXxSz2QYrZ3U926Vw8KA5zre4SqmVgg3r7P3iHe9dFXsMPW11gRNwAo8S6QVtNd2MEDUx",
  "key12": "7kmHpTKqCaBs9VPcqGmXKffb9BQPxuoF3k8ESyUWdtmdZwsaadvSHAfVCDCndkpWRSDBaQovUmUsNgivXs4nJVa",
  "key13": "3xGfonnLa6bCLEW9dY2Zu7vz77x21gc8U2kSx7eaCzmUnCKX7jsZZqd8qtifYXSAML1ZPAtziFb2r66aBp4wCWAM",
  "key14": "43dtkTFQGoHuKUhc2zVDBUtC2a8H8takL7qE1xRtaaxk6K3yKAoCCw6dCWVveSYTBuw76Xc8CmUFvLWvnXM9hxuz",
  "key15": "2zgGbj1SZjKXHoZQn7J7ca5cTiJWcspNV5MXqWsYh8oJqphgU8BPM9kTTnJpBN2NM61kWYQ6daTT8wQ8jYyAdM4V",
  "key16": "ZrMfx3d1GxKm6tUxr8N51C6iwCzoGrxgbcnKzcdGjWQWZtezLkaEh6j9EanSHLRdYxtg6ZG8rxZrfuHHkeLc5pc",
  "key17": "ymRt3EpFsWq3DwfULjaynycUsyYXfUNgme1BY2gvYAKExiMn4f9RzW54jooLep5kFbAqLpZzKizhy3aPSyB3Dge",
  "key18": "2A8raUSRnhTABKv7NGv2kx2BK4VY1Lciz8hxxbUzCmTKTkrY8CbR9DJ9nQ5wrpG8VkQVipyk97DTUM9FZMRsQorF",
  "key19": "koUDSNFAe6V8hAWXfGUzFw3JkU8D5NNJqcUnXN5XEaA2jkKH1QrTANS2JR4gmKGvE78pFe1SHkD2hGESHsLuRwH",
  "key20": "253agTMpm3p2tc1DFBKf7K7aEoSCCyxJ7JHAXHfPR3ZTiULNdxHRYfCUoCWj5kbJU2zUZypMbMNh3EQuX6KnPjYc",
  "key21": "5MA83TfLvyxLaqEg1mXrtaaAEdJt88H8MQKfps2nVFh9BVAe8NQQxGqVG5UA4D1XdiPcwMAvNhTCv1PWsu6SEJDj",
  "key22": "53ukrA9wVWMuqf8pMf3VENkqKUhvxmcy1i9EcY7GJ27qxyaira5kjiLQmXp7ogLAWRWdGKHHvRf6pbFZqoPRjoZ2",
  "key23": "e6v8BCtvLZ52eoRqkRz1GpkUsVdBbQQj5Zgz7SBRE5YCRrd6f78ZstnDU5ruhnhSzTBHxWdPn5nPJpDkW3MVoUf",
  "key24": "4uYSWmJdorToXMkM2iHzPA4psBiBHSArjZTfUk8FCMFezPN4xc2ozdgcfCR53FgCXaR31ynaDqz6MLnSBRQxZiTA",
  "key25": "3pr6evYYy4MAaV68gDLJ4audLxu9PoU17QogetXBkhFDDk4Cob1EW5CQEWivY6PgdcNGW97f4X4H7KphYfn48TE4",
  "key26": "5Bqm518c83cXbCtbnUMRVWxbWHjquKrFweR6q6yAYsdxHoNPgMnuZkpgC5b4srcomtHY8GgB3bunowQKQeB48C8Q",
  "key27": "9jmeodbMsw9Qbzr22aJE8jDbhdHQwBCNpNdCbcvuJycFrBkKywdqUk9tQeohhgrwUFN85CPJQTFNLgFqQeCLkmu",
  "key28": "TzWLw3J5AEBmCYyvJX8rt1UWULs5Etvsyo6wjwkGvbbaJK7UJnWeMZzfCvisHCMxLqmhva9ekCgMNWnoEaHLMSk",
  "key29": "3FEF2mDUbjADdLXNswUZyGWeUQ2Qp36V3U3j4fN2b9uGqKxph1poA82NJULQyQNMPQkcJQbdBBfRmD4ZKuU82Nc3",
  "key30": "3x8AQJ6rSX9X9W2Kjq4eFyoDAopybSzphihUAN5bqCf8NKi8muftEsNd9BKTVu5mpiNUm3THA4MxEJ8caAmVgED7",
  "key31": "MuJ4ECPhshHYxYHXVLNCQRo6DLyRcB96pnY7m4QFDGrUuJmGjvtfTFMvJsyTpWB9QLL7RRvQrv9bDDbnzj625Tx",
  "key32": "4WYi9zXtY5iEjqzaVpVxAxKrm1YX6nsA5LC18uq2frc181JXKEvXL4z6KBWWoGN3piz1uqBPVViGYZARN9DhEnQz",
  "key33": "27Md6f2PLaKYzYjF4b1tgQXB4ehDowTgPQET5nMfFusC4E9u9ZUMz1jFsGpBHEQAYVdrR8azXJjnLg8BQ44RKkRr",
  "key34": "ed68BTF8hs7HZAyLxQ3FiEEWkkbETvXdwN9aocF57ZXdtMxtzU2gV5z3DbJUWJnb39e7B4QhAiTstxdd6yTctLY",
  "key35": "3CprHuE4id7rgFKraevygSqRZkUVRrpGKAorv9e7zy2Sf9PR16czW8Rr7nJHvoUZvvit4g8LAEdBjnG2Yc5aFuiC",
  "key36": "5DY9gnzjm9Rg7SHQjyMHNxAzAsVdKX4B9zxQd5iXyJrs8BCb4gLZAE5uknVvnohbvRdbHg6LdgPG45FB9PpbtGgx",
  "key37": "56PosMS23wv9A1ySWPDep2s3Md4bz8YQ2g3D5WdU7WstNiuENXgQT7Tp6oqAKvwtYWBZ8PmrBBALwe9joJZpxdKQ",
  "key38": "4gKyPvMYT7nMMDp3Eh5pWXZ3BBBmzeCEHzL8GA5REJ3S3G8PobKqsJ3sbddZE4wAk865UnowFDgtWH3z6i3zDJDg",
  "key39": "nwMEiXCSKBN2j7dbrveVqXf38Rfw3o1gQTLR6CZ8DrbHXcsPh1X9cQ3H2GqUdELDPu9juYmmj6rEbzxvv1Y4RLb",
  "key40": "3FnZ7YDgYLCuhvBJD6XQ91pr1RcHBaKejAYYeK3d3mNZx5174E4WHWGngH7bVQKUt93JtZk5m3wufoqZxBREZCkr",
  "key41": "4Bchh48TimjdaxX2gr4w9m4uixzXqvNLddU28H3en6rpBgajFSRvZsFR75dw5ti2bdgrohgcApHoUa6oF5CR3fVu"
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
