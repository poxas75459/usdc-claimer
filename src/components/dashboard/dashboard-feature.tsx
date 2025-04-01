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
    "5eHykaPFzFkLgJyUnRRvUrTkVH9Zi5TNQv6AAJFCykSdvEXqPY41UWWcQF11Fv81MxpCrfeF9LZVwtzsSwi3Ywu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2siyjkjw8QbukgdpF8BdZoNFNViA2Tz1dFWc7oCAzbzZsG9ChZA8hbdYeWTmYvVTxZoWpKKDrtZD58DjQwVWHs6G",
  "key1": "3ABmPemPTGszsop4yaxzzeGoMFxYNWJQH1sAn5JWuZ3W9rBmNq1jopvrDdsRkzXyxnZzkkEABnZt5PA45BCFH3ht",
  "key2": "58oFJNNKiZNUqZMAqD8qN4Zx4UW1U7FULy1FVD8tAdCJAkMtwM8xVmkkeTfrrVxfksm3bmVrKdPw5fqDV11jpm79",
  "key3": "A2hsKh9HAAAh5rRognjrdJvmm9pQp2RJAwV6ntm9aEN8XetUvJdw8XKK4bv12ghkdePBFjTLPpqW5zZYX6MFYTA",
  "key4": "3Fsyi6S5TLchEJaShkcdfmVpgffAy3VLHhLd2hDchpdRZKQ2qcF65dTVThFSmnMG95CDayCA4QCVjDPp9nq2nAPn",
  "key5": "5vfcCg7DKvthm9FTWvRzubPZbU2XYQacc3m1v162pDwBVhf6CgVF9zyXXKjSfT5yMsoUi4UBZhBiTqkcz531fHzz",
  "key6": "4Xnoq8aagQ4UtGu4tjB4qavyde246hupMqTeTDNy43wtXeqq6hL86pjGcUTdR5dn8dL4VwEWFUA2cCbgeQPnWF67",
  "key7": "4WiD6rvCirzVHwooE3nv8aaoHU7GWNz6QiHULJbjvHTE7f8YhgxFDX1CUXooiAsT9Y97aYPbm6RynNHaQKDRGYER",
  "key8": "3c645DN2h8Jiy1YNXhG7CQvWyaRuA8Ec88aYJs13t2B2EpdWEfimSD98afseQ164a5LyYWs7sZcpMYqTRdzZp5co",
  "key9": "3PFnYJwjK8ysrNLEYRrCvVQRBYKVbEo8bFmXjwqrZPQ4U9VNc6FA4yojSy6GKHYqkt6HNA4gjjxGq39x6f7vT8B8",
  "key10": "5UGw2XpsfWtMaSSzMNwPEkANp8EuSK8x5AygqZAoXoLFgirqVp44XD5cFFLXSoS2r8LTCH6RY4GExxoPxRQR5SsU",
  "key11": "4DRGTaGgBkd47Cds9HrRx46TtWoWcgN4wHfpnvAxBLoANZ8am7vLeGAvMKobWWNXqq7RFpqUpLq8jymH5GNGmkS8",
  "key12": "4tT5JAhBWofUXya2HCEDrFNFBKQgrKMu8KLxFL1v7w5JXHNVgQhtZxiEJeRqc1aj2GtZUY7hnkf3hz8umKibZ5Rr",
  "key13": "5WMsENjNQwUubqW2VbLHBSRCciovAkKpKYq3Lafmk4ucCC1xYpnMcN8pRettiTUC3prHRv5m7aWTjSXFx1kPBcfY",
  "key14": "5SZLSGrmadN25NNSdMj6VTN5XBx9TwX95YjKDyKQFeJVtfgCkQYgBWxBJ3JYqu3q14hh2vZV7JDaor6aFdEQjD8a",
  "key15": "5opGNhkcQcF4wgELDDVYLDRZy9yhkuXLWkd841MDKgvqiVHN5xx6bXtdp99zcGkoWGVqqVvC1oBNHyuKo9KPHUtK",
  "key16": "4GuCck97nPcrYKctHJWAchABW9KSCUv9hcqQzyJZdD5qxNX3iaNmDXtyC41LLZKG1UEY5QpLthLi4R2e2EjZWzuc",
  "key17": "5VMP6vj3RJu7qCjtQtqpTpUvXgRdg6PBynyhYUdBoM96wBoH8uc1FRQQ34vqepzHtMYxum4TX528GvaDkrvr1M1G",
  "key18": "43U1at574siS3oe1hhYu1wsXh5zoHSmTRWCywjQQfwnchVHmwZ7k1A9yvd6iV4DyxAn198x9JQDSKryvNLG3JpaH",
  "key19": "r4XzpQwmspdJ5KwjA6cm8i3AypJ6xXNmUdBCePc2ty5tjpiumKqDQRbDkHoDgZyrcQAd1KFe2XLhkGP9u7wrHuf",
  "key20": "3A33ambLqmpdzUJHBAMbKbGbqXxv9jfE72xkQrXhXhts57E35dqmB5vh6ToNjWQsLZDFb3HUhNUE2kLHjWG9DMRL",
  "key21": "5WyQpUWefTLBARAWkxwhgs9enaWMcdPEHN9Z3QALxsfKXqNn7FKxUsh2XiaP1bm4usQRx4TCXvS1GDzDkGscbEum",
  "key22": "VGRxTdHHG2J33LgT6M2RpfoSetEhZedCbHDNjjGTkuZNTNP9qBB5JFRmmx5CDUFek1qUNX1wFGfKmuSMWyJWE4t",
  "key23": "36ENWfV8EFFMUNX76y4N1518foiA8CPsYYbdt4Sx1Z8fUqv8j3mkEzpiGVwXKTgQN9Jcrr51LSh5rWKnqxyE2NYx",
  "key24": "4A8DV1pT5vDJ57oBeqEN2HqaZg2587VDqb9VJj4SvjyKK3u74z6WbhSn5dETR5YgP6xaA8ktYUUDJ4H7ErnAzf4P",
  "key25": "2dXCg6iaRKyFdf4E7ncRNJtbufQgp113AmspF2eeUvKLbX3q8zgXtwJZPYJjWZ8UdB1vrDxsg5MTbBUKqudeETYu",
  "key26": "fNWVHKa1BwPGE2G36dsEKkbcCNbsJNXYAtkSHA33wHa3RZGVWfJUAA5nCemeMK5VaTzTjtzSH7vwhjsqbFf7GKw",
  "key27": "5f46Gx6vnAURWpi98k8PK9rSn7CmNkVYefTgtZ1qCHKsVBTi2tdGofbCaKg43jtqsUVNx382ZHc4vZ4kjHqxP2iw",
  "key28": "24XfCNBHcSDJQ3UkEUuX7R5hfM1WxGzhaMcxYGhS8nSqj52qzESZEjVss3padwQSyTMX88i2osqDMK3hQHFKk1ZD",
  "key29": "3DPgyH1u5TUcwSmGeXEw9KX9HHk4B3Vce1hprrG28mvb5TTkge1p4fu7wGRjCxbMgUneTbgPy5zY7FV86baGGGYC",
  "key30": "35GoTEVP3we19RTBEtqvuhnV5C4SfVg48bGJJJBCgk3mi4UNNkXeFNfKwV9eWmLqr511qzumJhJBedmcvtsWqP1s",
  "key31": "3b1CsZFoJVPqyfXcewzp1RYu5nEQqusryTFQX7DeSwBNvqSv4XCDVD9KWCE3XXGr2UQvYfRPLqVsaA2cBep4VnJx",
  "key32": "54mH64siTKL3CwFY6rBimMZ9vc3dQtNngyDbR7MFmKU5TWZT7C8wYhNrhVN8SMWPHSXEAqBcCoB6iqFpBhjjnBJj",
  "key33": "4v4yX3yeKdz3TgTGE1h5HBis4vszAEKAJ22XFssfacKMdy1d2FszsizQcsiLGz3jTeBCBccF6RXxUjFtLnSwXcvH",
  "key34": "5BcjA314pBtgPpZNZyd6waJbJBLRjGi66ZFS912Q3GCkAvkTHYFXSbAGCS1eboBhgLnGJUHVQMtXWrjgmtnRMV1C",
  "key35": "2xpwKBywJ9b84i6TDaRW7gz9MfDtNh8iC5m3ynxKQer1goD191NLcJ4Yrkp2CXvsSLuZKfDMYPBP2PM1ikqbnTLq",
  "key36": "bPbvxuvnuUBAm977VokJRakQvfpbYXJsEHFc1RWDrHH4VtisMT97Zwb68TbEKipYpWR4VsSN6M8KJ77hGLikyLr",
  "key37": "2JrzGyZ51y672rWNPSQAgfTZzjBhqdViL5G5dnYvYMfqYvuAiBoEqjdQdWBftafjakBWR4Vf3DMpuTnohhGqWGUE",
  "key38": "2KLVyhVmaboTC4T8NSKjcYdRC6xyXf2eepjdS2BQcU3fSkL52Q631ER4izmVZykoZrTFUwPDaQzoubXSSMiCkQMk",
  "key39": "4ffcTVRjCDprUVde4VzkGaT7ntiBNXujCA3KYYixmdx6VcQT4ceJzPa6ZorQikHuu3irJGPSzCyWnXpWoDEiCqvn",
  "key40": "3pAMzFf7aJCd6H1iiccfGVXHZARQ375519napPNHDLSAPCG1Q5uKnrVQGFfe9rM9e3D56BbqD81fRJ5Z7qMLcn1y",
  "key41": "5PXFNWrHcBuqMJBW4xyfg923uNhCjHnXdbDoF1TLoePFqGJchDKQyMVBksZWiP3pofpZgL5izx9qSL32EvfzQbpq",
  "key42": "2FM7MwcnydtF8JbncsSAmuTXr8bnYAngPAFva2wiCTy6vdzXxVmYvvZx9jcQWCYarsx7DwkkXdiBq4MANsdsCZuY",
  "key43": "2inLyKBHKMu1akDz4D3g2F8nWqBQiDgh8DF47v1jfaMvgWRAvWcMjNrxCuf56b7E2KYwrFh8j68jsRm46ArZHsfx",
  "key44": "qYJynXKmFWcqW7P5dM66THibFjoha37FHhBTWkmAP5TmkDPuLYexTTS9HN1xHVkkFZvpBeLSowm3v9gRiZdGJ84",
  "key45": "4g6PdZpchHmrycEwNrsku6gHpChym9bRR6fznGhvT6KPXg5boh3174VPqgaU5QsnrfbrxvHHYPfnWtR9dE9SrQ1k"
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
