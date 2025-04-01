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
    "kt7ZSjEkwNqSRGpACXFUgG6RL5mAujyagvU67gr1tUUDbk2pH45bMDXCTov2LiKgTxTKjWEcq7yzuXmApAUGqq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c8u4QTrbVWQ3CTK7kj9sPiRGK2PQb7rtARC68vsHpFr1HfAKZCY13jjLLTnXrAbfD5bvixemgC1aTwEQRgJA6aU",
  "key1": "58D7ojr5jmEcNjfGSbj8NXQgFv4tDtjR8KKshZ5HpGETciLpfy639Br1xsCx6BBd9N8RAnt7NW7zKDUZnBZB3HU3",
  "key2": "5sSPK7t4i5uWqAMorCBXTvBYrzZcpquFagiacX2ouhMTQ6C4XLv2MbigKHQ9mUuDJhkFxxuptnmYJb11VEAhgfgZ",
  "key3": "2qjVXUqbVaEVcz84YqeeYMNaNZn9vYcP8QXEzohSTVTR8jYJgcsAujubZTSQvz2gvEkYHLEGq52HCLVW3kdDMWQQ",
  "key4": "5kVPj8oSUoFNZ6zDwEqutH4iSKW8p1LpBAAKEQKH1tLoMXN7JR415kzTVjHxGfRSoMXv6yPtBoSHoiNw2MCEciK6",
  "key5": "28saCE1sd4sD9VgAzL6jfJq5xrYd5n6ZjwxKNSAz8vkpqLHm8Xepzofk2Sfjo3eeK3pAyXnvukJyCLAquz6AwEHD",
  "key6": "3rZEckNqwwy1b4ZufdEcwf8yKpo9twjs9HKBAd3cFp21uSjegrjc47EN26vHYaYeCvp8kCzgfgYQeyQwnACyajeM",
  "key7": "4jr7ibNkSNHipmthYRDnBhRwdLWyyEPB8FVm2CkwD65EktrnYxtyrPbEePBRtcqdTn1EbTXm59QssBEkCWX53MCS",
  "key8": "4J6wXb88GgsTVPMP6f4bkV39XW7zB4BDKkxcfVvjEk8VejbWuWtdNwbjRidFgTnyF2yXZhAodMowZ4UiSZjSNfHz",
  "key9": "5oSFuVDuXzZDjMEyTAcXwziBukiixYmMdoMB9cHvJGffFsZtJBESVt4bwjwu4QebA3BGY8kZHrDN5E1QgnN69RCq",
  "key10": "3pvmUubbkVXhU5nv6RQ8iqaCpc7nhvAe4efgerQP6c8cAq9MphcCdrgG4YA33v6oW5Ca5P5SRxn7CwzQx34FGxF1",
  "key11": "4yxgVsKwQKrUsvHiYfexmwEAk2uTi8Dyz3etG2uKw2DYQ9ycM4JQWaJT2ipR5YUDrY6nLbxfftyqNdsDd3wFej96",
  "key12": "R5LWTwd2saGuwxtRaGjC4Mn8LQa5rdJVTCe2hvZu2dTsNg6STJtrzSHusvseNYU8GrarQZBUMWi5tzGTzB9MVUn",
  "key13": "fGZEnmrA3SQaM2sttyE2rUQRX7ZeeNbyrYWxs5piyv4Bdf7LFS5DkjXAmuTQTaNorhaKo7MKr5Ux1C6tUQ66eHz",
  "key14": "4PPnZjmFGku4NpyzCYoBVQfQdoVG6S8cpCsTsjgmTsxwe1aGCN3GbEbmSTKnrmXz49MirDURB7UkjLxu2A5nG1D7",
  "key15": "5oR8E6MZv8RTufbT2FQmRJbk8LamEiBd9UXoEZU2jGcJk48taXru6GnDBssXMmvmSQiRx6zr4hNTVnYo1kvKRYin",
  "key16": "2MoyTvhzjFvEPmFZvRmQLSHYn62cprAWPNXpcMEKBUoVhbXqyGCgR3jinaoonTW7qv3qhM4u2uPFrkAgDQwPMiv6",
  "key17": "2EDHXTFHeLmBbMMLRPV9Vg7VXzwDQbbdf2tRmAnbGLdp7cFrnWhnkGgJd5SrfijK35fLXbruyh5xCVSCE7HBukgH",
  "key18": "5q54PnHfW8iJdB6uuZcfFnKaQbTznnDxhoHzdN4sTJw5Ggfnj1x3Sjc2o2tJ7ADRnp9X8mz7XkDKbi5rwjDdjBZS",
  "key19": "2PKicSM771Duhm6uoxPrUHC5yeFr9Vdg6vCFazypZo2wFShMbhawQzqeSjdh3fQeAz5HuQGcEsYYed9wtUn6nm1E",
  "key20": "58jCPJGckbNg7ZoswW3Sqt1seUrq2aa2n18sswpEaYPCnc6iSmBDRqZpPVbvsoAeHW9YwTvxE7YzcE4gTdE7KPWR",
  "key21": "5zkNwd7o8Uy2znoGsgw5AX5vqiRa4xeAznfaUksKhpufU86uRbewxXUTZTZFAcsjLDrtGY4UNnwPyQWwAsbct49d",
  "key22": "3tdvVZhinvPRqvWhrsTuuTVjgSBujL5fas4viUVW2mxcfDpkKLVLp2mkwi8wKcRfp4k48ZZZ3gQR9AtmjPxanvD9",
  "key23": "2uMHCKk4AWYfNccM6ns7JRSuWH6YW4Do9kw2fKcQ4zaph2U8gq9KgpX5a961QVWuYxvZznxSd4bcx4pCWJb9YKR1",
  "key24": "5JFcWWATDGxACihBjxcNeiZssejjruvGcbGWPiBwNfpu8epKUsM5FHv82NP3PTX2YWx3imYLiyWW3dufS1AQFhkd",
  "key25": "3Tfp9KX8yZduST61dNJ8X5Q3Ec82isJq6cbERnMUpWro1hASMVS8yYHsehRwJqGcTuW6MKUgKUXAU6m9E4xoE8Q6",
  "key26": "3WWBFnivvaCTQVubvTESZzBunxBK5xzNqyPim5SSk1QMCpLtJH8a3tWTFqqPgf2W3LpKaKszQ8R2ZoiWTkgwY6UD",
  "key27": "2X87uY4iiA5svGQnm1kuMoM5FWdUFHBsc7HXiSRF2YzDW87f2iU6eN5677FzDSQKYBvtRvdR3FNJffWyCiARqg8q",
  "key28": "3iZcuEjqz14myup3gYwbvcfLWxGctaQLGofGfYgMdQG2kNcuPbxPvkvWVymUr6E1mLyR8NAvoDbYVEHhNWP2Qfay",
  "key29": "5k27sNpnVvxcdLafe4o6dymZQzaotBmi9a3RcqrCz9n2Q7bjDghNwv7Fx8Rkim7RGvW4EUhg8sg5Z5cAyo1yu2tn",
  "key30": "3Q6sXc6SvXMy9HE8udYpiB9XpKEDfCp1Gk6Tv32fwLGzWX1JjdQfDfmFjs6BdaaVzY5Fnjw4PUxHrsjvbisjtVon",
  "key31": "5eKYWhZe6XCrwAfddM1rTTBk52GGHaxtWYisJ9vEYrUq8NbeUWuW345XjnEkKUa1o7diycWCXYdzJD8Y67kuZEE7",
  "key32": "2eUWL7Y2akZLi39gcvW937bKD9WvX2VqyjiaXAGPGpNW7kamYPKs3wQxkjzWxRvU1BV8vTYt7nFPzF9APDkg6aL",
  "key33": "4rQm82yNrNcbamHjcAhCZJwT7zEz3yevUHCE7oWqP7rnPWztZUKnDfM3YbkSoyo7gLCZqsTV7U8hnGCcv8xNpZR3",
  "key34": "3AW364qaHFXv4AcL8A6r4SE8CkiT6YSgjSo5gUjnTr4zDscf3H1qC3634LCVwFD9zvSY1o98CanfF8oHjTMALKt2",
  "key35": "3bH9jK4ZCJKcQJSa6kh7B2D88TdZ3ppScpfAkTk9ACEEUTkkYCrrDrmG7vBNJPAf2vz1hPKqnNgYZaHsawykTDWb",
  "key36": "4P9rbTvQuE28HjX7hXWRMvRYLiD8ChxkBVFS483jdnaRsupRubBkyZA9XkE8DkTPhL4JN5Y6rmPxQir7prMkHExw",
  "key37": "4XNrVzaFdP1dfayF8MNXUfyaS4eTwTBoiBdjzt3r4XdpTncQiuNWvsYrrz36i5LHfNvyYCf3snb5yJa97bAML8Uc",
  "key38": "3mg6472XDRU4NGxaTKcyKFArEw5dAQK6eavMQFdDkdzkX55vaoY1Nqzc7Qq9SHgCyNkNksNk4Sg47gG3vCHJVFqT",
  "key39": "619XWgnAbSFPSnhi8X22wrqZQgYs4d4ERM2c7kiN3dpiEugJaEswxoNUSHVDXFBqovjwvV6YsQwMMsWUH6BJsD6C"
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
