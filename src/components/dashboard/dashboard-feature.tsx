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
    "2EgCmHhAn1EnfCQudFs72YsUBR1p41otscUDx6xGNU6eL3riN1LEXHHJsVqpGRmTRJ16fB6vDofM7cYtz6Kkv8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K65cF34hPsD8xCzGAccJGN5LqMZh2Cb5gmZMsWnTESvgvDnhFuA3iGxJMjaLrfkxuDuHPEQJhmvWjUYz938JMtH",
  "key1": "2n2QXdXffgrBKsfj2Nz3Yuwwyk13rMMaB12pByKzUHkqeaZKRNhpBVSBejzLekfQEWX96gsnBPTi48UZeowz2r1B",
  "key2": "2VWeDimQSwp6AxdWQ9y1D1sAG9m9sMJFgeyugXRu3GBLrNc5HM2sCwHaG3Bu28p6PZtPBGqbpRSncmyDNRuCSiyM",
  "key3": "4dh8TicHwbPSBJ37Fv5pRUYwzWaJtogU6ChLmRrjRHjm8qxZETdyfRbrDa3AJjtfx3j4Gv6epFYjky5jd8czS27t",
  "key4": "2mukbgp58YVi6VDXyam83DntUTPpZHFQTXbbxwZECTUx7oN6XJ1myKnAtMacrgejoC5fqjU19AkJqCT77JvS1pb6",
  "key5": "3kgEh62bepDa64LVfdqGUrSwMahwELAspNxDgBZ4DctKveMbELpqkMa4HJvMjDauoWxy5uqzNeGoZSQiv2G4Bmqh",
  "key6": "4GmRP3zixdrsmzRsKQ1V2a61Zk5eW3RxFhsP3AoBEm8mJcZTeaWedoXFZC1MvJzwuffxMWDqZGhNbMjZAKmtDMZY",
  "key7": "2CrJRZwguaRmZTAynopzAqvWJt4JCZWvpSwuiDurKh8RS6tsvf8F5RGtpTjPwajNWcJ8RQy6SHmCWb7eiYz2qujC",
  "key8": "54vuRQctFX3NZnLKgDHQ2H1FXiaFk4S5pgKjjSA7f27TPbzRRc5t24xGMBhdTi3xwsMYnLJgLVzECq9fmW3sHtcT",
  "key9": "4spod1ypP8r8Z5Gfiw9NP4w6jAns4a1RsKaHQFYC9mvEQZnt1fdSCd8V7hFmq5mzVGbP5uYs34STRFcEkh7qTJoQ",
  "key10": "3VYfyrtMvvwKUXRBZ8ftbKF2RkmR4JNqfKSu2FTLKLrokpeRaRc2Qzyv3BG1QMQLJe2jtCTBaQR5inkRqBH8bR2B",
  "key11": "CLPXzreYPdoNRrx9kk2k7Qmshxsj3jCJGfjvvtMaSBUpzjszMAvm3d3dwcQ288wCHTN92KibcCwpNdKhNqfBAPK",
  "key12": "MfR1tAJMydKw6V5coeGHkLbJtcdBMvXcq6DBEbVBBnQuXWxHiiKN4z9t7kvmbvscKaJwxyubLUSsLLhtAT2t7BD",
  "key13": "2bedMhsM8FUXUUgaPvaYqasbxLfD1aU8fqyvB96CTiKGk76WMmGTbSudHicEgtMq6aCq4729gjAAXD79e2WSsoEv",
  "key14": "3M9uiyJuk9t3VxKofcKgpppgMm8xgsEgfbXM8vMn9HhdfqVh2VozYfQrqQT5G315w9QTdVherEbb5doLHXAXw529",
  "key15": "3iGrZpZukJeaMket5iEzMbWnxWET6j3JzhHeydcvHxmkN34BsjmmTTzgz1jW2k3UTrqpmgWXGkQU2Nuj5Pghw5is",
  "key16": "3QbR5Khq6iiW8MExqzJhrTsRePD4Y9eVbHcPFGxEnDHthdTecwFrUXB8Wot9SPZXqaTUyNf1PNXcFNFsUgUkwF6q",
  "key17": "9NQByG73GdBsoQQYoXkL8H2QpGfYuT8otGUSFd3cJn1Xm3JSNTmBqhceKSf3NJ2Jg828JmdkDhm9cu5MbRNWgqq",
  "key18": "5DKwnwW2mKhoZcTiwk3ayPBN73vxhh6XNTKG9o38YsAa56kDrTpRYiqqyw5LbEGsd9CYd9BwCwAd2h3JzVvk8Cko",
  "key19": "2ru6wwDrFTBeGbdoETwLkVbeNFHdtkVskcHjASZyWDVWmNLiTXUx7geLKxqsrC7dV5ZeRbuRq2HXgnETqs97kuuu",
  "key20": "eUAHoJtKT7ADbd61jVHZGaPgj1RLpXyBKwLdc6DhQA3pFBdKWR2XrvjmNodgGUGQSLtkG34JoVofm8mSyPaq84i",
  "key21": "2ehY3QGGhLkdSiFXRVZZmEHvz5Gs1DroTnhL6LkjvZoYFuzy3SzGbPCvbBWpyyRi5Z4GikWGf6zAXLQVjZXYPbYE",
  "key22": "3t6VMiYT12Fd5xdaND1bLW7CrYuRM7Do5U33HVcxkRq1RcTDDJunUj8tpwrkaSmXMyBRGMtpzNMs4G9aHN4HjMpT",
  "key23": "5yFa72uM9a9Knr7QJ9G9SEiJCSozuAp2sCsZG7uAFYPQbQAHX1Nv6ribL4VC5CvLVX4ZRW7bGKEYikuZoJnCRx4q",
  "key24": "2MDwGtLwLP2r5D7YAhztg6TJhKaPq5sRBDqhVypgYVoePJZ7twgmPmm2n517sWxKGs8YaGTpXEX7amo6w3UUTBRh",
  "key25": "4m17pct5yG6LMVFMCE3jx9wkE5JrPooiUb5KLTedJoZ39J3zx1ZAjNc2KoG3pLxhmegBzEELYJDrznWtK463xb5c",
  "key26": "4ca6AkPX41ezZaghY2WWbngcqxunNGjD8RnnxnLTrUfB4tvzcSvMwkxe4DQgsC2kcK7v5DJWAtLc6WZ9VVnFMUPv",
  "key27": "35joSkMUPZxxiZorNEG2qhVVZRDdYcqeBxiXAvJhnTbaRp3GjTcY3EhHpdesAzgxNSu1nDhcGAW6A7XtpVkmqtjV",
  "key28": "3PKrWNX6A2o4vejwUu6zif9y7JqbqkNkiLhu4qMP1Las9LQYZzWjTW8cqYHenX7UeCrhy4qsMkWv4McnJoYbH8Xg",
  "key29": "4EoeEjBbEzvP4eDVopoyFHRisE9F8E3VTQPNbuE6xYTfsw2AUpL3hmLJrF7RttP6Nnccmdrvgw5yRoum4jPD3shj",
  "key30": "sfHWdcmwtZ2LHCemT7ujBnaQCn58Wd3DCb9SGSxTrmxxbaXJ7T7WNvR8JDH9BJWkRFaajP9chfeFY6p2KxzZPgd",
  "key31": "m1hgeQGJh2JtJNor4etpTXcgJcwCm1XG6KeDMaheaKYrXTftAUHd3bvuXoxW9q6oJQuGDJubRMNVhbk4V8tSVUa",
  "key32": "zewzLiKsoVgregwqN8REgD14axUM8UUvkU5Rv25XsB2ikdQ9M28SxegfJUDrpfGQvgm7gdwpbAYVtyzxMfqQFjN"
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
