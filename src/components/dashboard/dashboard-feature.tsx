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
    "2sqYAprhHBvhnd2bus972DdbKy9koP6vVQSwBayJEp2yeDCv9rtiskWZjHCpNqtAL4q1B5sYEW482eJ4afquJdSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2er5GnnmuGQmGbJP1RngJJ8dT39N1hKH2WDvfQyrfae7nQydtRSAE6qLW8j52wgqjg6L7G7sa7pjvThc1grk7xUf",
  "key1": "dF8U2zjZ5ABnM1YPcVhph2C8jX2Ejc5XqoSRwqbKTf8JYiKQMaEoZC3K9VwTS5T5nMYkP8Wu4EFQe13EX3dbcZw",
  "key2": "67Mfn6Ldc7etuMMD4m1iWwEyoyehmXHm7XBMzFZSJoVKBKg2QQCb4b2bTAsECwKnfgu7CvTyVHqr2kbtUT8dcs99",
  "key3": "4UKYPjoeY4AJ1pWUKLon5sAG8EfYsCv7c9yPBu63j9QsRWiZrwQoHhHXNdv1jNaFmYvFwDNjEGDESMPZQqKiNvTV",
  "key4": "45JUUsGZQeNKJBeirGP1pZjBV8BUdnSd144S6E8uRReQnckbVFGmCKuQeAZjcGmwB73XzkziwGDiYaGgSqqKBwuW",
  "key5": "5ExZjSmeP28tMtiT7rLCwVuu4h7fA5Xv6gSaonwFy85a7E5Gj7bDFnondoqyd3mCmPsTXbcS5nXekW22fzTgyrgZ",
  "key6": "5ZKE51rVDXwn3WXZSsxA6QnLMVHgWbRta6HJDEsyXCtavtRtFvMs3SLiHpjWKB9fQR7YSGv5eNkPNtiPYqTjaTkb",
  "key7": "4ViRoEdxgZoeaaVK2qgp2zZcNbkGZDjRdJEHhXNGGVVh6hjsJVpqGK9cGWb8kGomECB83cNV7MMHmpjxbZeU5xDz",
  "key8": "3XvainKwi7zS6TEY5VtNLekeyp8NvWjtwgLyxqUuHU2tAWfKFv7pEjCzXk98KDpASAbPuNPGy1Y2MzLMj329GSgz",
  "key9": "2NLVKbGsba46Gbm3DgWEpksU2yUzjCnkDiEV6WP3Gq98W3eawGEfkTh7TJnPRJp8Wvrxv3392vCTZgsYcwUKym78",
  "key10": "5k7Ld5MeCE45AyaVZ9FUMdndJZ6NyYtAdB1Z8Y3RtFfg3GtkDfdDodzximC652sVso3X1Y2MZyHpuQFeLoaQaCus",
  "key11": "Hxm75k9guPHjPgctcHfEXB9iikPxH4p8dqP8YP2QANph4ZZ6SFoUAcEwdoczuwXSWGQWtpucff28eQ5BeFze8bW",
  "key12": "4jfG252HiS51wjRefVeDQ3tJP3hGnGorw4krCfcNPsW2hM974dGMrHpcXzrJWDaiD135dvg9ykQCg8EuvjfHJ6xr",
  "key13": "3KkXXd2onADBuRyh7wXekbXaNrfQcHAqdkL2fqTH548Thcms3zYFbY4aCMQwJpLyNgHSMLKHgod9jyJNS3cbGwS6",
  "key14": "5kkKPED7xRktiyxAqESaRrfAMEAMJrawttFVMyL6cNMk8s6NycMPS2s1qAPGwg1vmrALb5sVUQSUeuG39mJcqBj7",
  "key15": "4X1UBJL62Ped7XkaLBuMRkYoX4JxjyvoBsSa6GXzrzg8HCqDrE98V1vVtYocW3so4ZjMbwmj8wFZHn25xKsu9fzw",
  "key16": "4H9CVvnGLE2ShbBJ3NCbJfbXorQWs8rnaRj9bZYDgG3zNui2MwWb5o2MEHMBke3QpRT7oQm5ishm21tCy3xFgexL",
  "key17": "3WBT5sE9gwwYCurm6MWzF3YiYfsEUGBDaH4nGS7R7isAmYgLvaGh7hgUCs8YYh8kG1FYkoSaM7KDriURbjKqfjH7",
  "key18": "5LaGQPGHMTod1v4HivRD5gcSZiNdaJzWGbtXcSTU4ubCJVcxnVsELF9NVqnWp9Q6ydq6xRiq6cjyvQAkU2yWZTqH",
  "key19": "21Wxeqo6mr3zZrWJWks7HXGCvNKCBvu8Ey2A4ehUKyTWKvtbRwxs4WCfAW3VFMwyepb3QsRG9Raus4TBs1bhPvCk",
  "key20": "5zb428pcwRFkUsBZjX6fwkXWGmBDUA4N2tHX6BFYeVtck6cRS8cVNhJSDq8muyiBwaLTPN1KMUruo3nCDuxMZpnw",
  "key21": "34Ej38ic6t5n8Ca84VPDSgRtcmDKDUfAMPBKQMVckCGHZTx1UKckxfmK4oMBbgrqGraphX7UH5rb7RWtWdU9PUAe",
  "key22": "4Rx1ozCYbckPa9PKJJEymiz1YiBTmJRT8kK3WmhG91GR6JLYzqNwkKDEzqRuJT3gB3rR1UETspHupKaqetnbmnr8",
  "key23": "mcjsywAsXwDABiLWu2x3nKqcJhtSodR73P8RGUmh6ULQqEbeNovdZTbJXB432jEPbSG7dHBqhFCcZtC6sTo28vk",
  "key24": "3u8wZS7tXjixuwS1eeeVmM66dote71vKTd1Roumv291NZM6QmXtV3BhGCetheAcoHDacQiQquombFxqMe28J8uUU",
  "key25": "B5Um1ui8d6225Mk7ccT18WwgKgx4WDvUkF5qBQgQnhSay1tYu9DQECH4sY3spiPJZHwnyaamXPtEDftW4yQAZdn",
  "key26": "5uzy4uXt8cNLNwPnZDkcgeq3AP12aFWadZop8WP6CkmCpGjHrezcRmngwaLPD7NqhXGQ7NpKNgjR7GAqc3wAGgJB",
  "key27": "3dkUPiMfMH95GBjtMHqEPgFzJjAf8Gp4nf5exvnMy7h45EqJy97bRyKgxNyBiETuEuJs9JRoVRZSeztJngNdveNH",
  "key28": "wkeH3jD8YmqGASuD28ybTQz8f9Cxjef3tprpodjJMSyChKSbUyxasw6M5Fd95hTCCJXvbfUo64PaYMqPkCmDWK9",
  "key29": "6dYVxSQoazX6xD26N5V1htFkJeopGbHuXetxe9TU749zpwgsxwrj7dkAWQn47kR62CWJwPkfjWhcyJwv2oDbccK",
  "key30": "cTcrD91kiHZb7foCcuaY2bp4Y2WeErAhGTRyuc5VtssA1USCYkdUK9dUYbutA41q1oULRv7NBNJe3G94vU5SyYZ",
  "key31": "2vCC8GK1duX9eaby8YLetPjRe297gmm2PktiTaeyT63NG3RVAhzxUFCfENNnihk5tB61pgqFkqKKHkJfm5NabTJZ",
  "key32": "2ESHTVhrNvp3AQjgYKx4J8i7yafZV7KumdSuUryKmoXmo9LDYvdcM5WQv3CTgcwFuB9Zr2w7taQNbrN4vdRaZVx4",
  "key33": "z4ELZ1GUXmTkE84rZ4jo7mXhF6a7v1kD5xKYWJsKkhxKNjUrjMATwzyMTxWurVVNL34ANPyFhjovSipTqw16EGu",
  "key34": "uS8BNXm3FfoMtdsWu3ggMfjwddSJaeEVoCxRW5Z42vdFzkzsAoocNvdiFHgduAC2eCMajStjq5sav5hjxc3H9Vb",
  "key35": "5BkPKGXh2b11msWYghcr3tQz9wA677BDzWGUvuEgNZytxrD1DKbJxLC55QEBqBp2Q4XZz4H2B2UAU9uLvuLfGuYd",
  "key36": "57VYDWikMpcM9Ub98NPS98Gtz2abe9EbSzxh8w1S5UWt1ajtWDvuiBrdRhdHgMHvVmDLzZWMLtvfN8ebipPmDBEJ",
  "key37": "5N6p5ruuDjv3PFe5S3dfPMXESwdJJzWf22bKhsEM7vVzmXhZRAVbNK73w4rUYupUiBk3yVAii73REPSRRuUPaFom",
  "key38": "5wTmnPgBYm8quu9unMkRZdXLippSXCKExMx8Ay8bkYVnBBQt5ZeNKFy2SgRxbojGzcGdJzU2jUy3N9s8zKpaL6MH",
  "key39": "3nwTa6DYKnt4T7RvxeJHKfkAr7vpCvfm8jvXRaYuoJkUSCPmJiT7ycy9MSXxbB9xrFQhU7FPtu7TcaUTZRgNASof",
  "key40": "5r7wxmd9egnj2iMdrndhaekhMbfhJUVhtPLvmpAHu36qyU2tsyZE4AqRxdjv3Gw9QAnCcnpyyULjCh4w5QidUffP",
  "key41": "35MTRZjZKFzNUz1L2L9ksSBtfUB7qgrgGUgYaAzA3yEEGfLLb4byRxodokaEUNmYXZfu98U6PafKFuRi9xu8MLdp",
  "key42": "4cXXrWkv23viR5c38uF1YTk4EvCqhyQ8mzeMtYfrCwQx5syWFomBJq4UgC6oiqq8qZ7jv1oEx7uMM41Nt6YKp19F",
  "key43": "2vPUi1cRS8Gu2J1f8jTGGGCTTGomDcxemY7x99rmy2Yyf2A9Y9yMye4YdWA6RonWZvA4qHb8GbB38RzgBoDfRmQA",
  "key44": "xdnFNBE5zhT6x7Znkwg4yqZEa8AGBZWEqoKiaLczaCVm1cqb1EjX5w5XKNWfq8tuGmjaa8wJRFYCq5vCAXe1TAS",
  "key45": "4Yy1dWs6FFk5iBRuG6H82hri3ouPWASRMdQjKKpkqLHrTAAgGqb1DvNBm8VTsULbyykKjuR88VZzF3nEwWQyoNrq"
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
