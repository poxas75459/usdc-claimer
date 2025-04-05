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
    "2L84AGeyNtjdCktNbuw1sbFUDeYwPBExm2w6eJpBPv8XoGMYU83DwVFD9Xar3iuTY8H9um4YmHZDJ41EiZ2FN8my"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RD1huNGk1csZQf9HyPxEr3DfNXpUQy8WCCD7kmKWGBPL3jFuxNq7kUtg1akqQs6KZQeR6eujpbK7na5BXzojd5y",
  "key1": "bv3EA6sQGU35TbgKvcqLy6VdCo3JLvwuBg7RKLrM6c1D8i3jWpomeexew65qqDNJz32JhsczbbDzgU8Vswi26aL",
  "key2": "3Pfgp6XLmNwfUhX6Ht4wXrgdLL7YrjgHWJ5txQenacxzXW29RicibyvL57vsYoV2H2nkCMfEjzxHmWbmnKsQ1shE",
  "key3": "5FtB39pGEwzBH3Bc4BVYboriz6svZGXiWSQMkFxoKfehkQKxYyNN7nwZE5rXvrAbPBZBhMog4yqZZPdGcNZNeWNw",
  "key4": "3yJzXtQvjvcBZqgS6jMTVjt5CKf3g75FUV4dMwug3ekPH2DB9R3VqJ7JiQEgsAFotr44rejZHJvqzs7AHuW4aftp",
  "key5": "3PynunWz6zW8yaK7RHqup1zfuYfAPuGjyZbYck6nwZddo1q2SSDCkLcYWEzGGQmYdZ9VE93QqpZhAHfNCH8SGN7m",
  "key6": "SDdtv6ic9VQQMuc2WTcStHA7S1is6rWwg2to3AzmwBEQj7WJTQR8C6jV8yJEe52r4QxEKAU5WhGqAeYismF3umi",
  "key7": "oHkpZjvw7udVoEy9k5PfPdCBW7vrsvEjA7DTUmwSHLwCtVqzBwCXe8qkX42n5Y5h8ZZWKE2Zsj5QkwZBT1LYAyE",
  "key8": "4w4fRZKBa5fXUoYY5jj83LCQojzsJoBHCKaB4d4iPPN6QEfkMAfns6AbGU63qbCGC5ip1ZUc3CDneYGJFyhwbhsk",
  "key9": "5vZQnVKqgoHhBroNRFsErf5ZjbYVmbrFM5bXB94gfph9kSTZX5GQGRWpa1n1BtNGx6Qjwant3VUsd3Sc7kuStXiz",
  "key10": "3gRBYRwt1EvwXh8L92RxwPTysSSst5nCykWumBMyaqfupeoNPwQtTDsg5ufLSqh9PnJQ2RXpddi4QTHDLpRiB4pA",
  "key11": "rYe3Y5PeVHUDc7FZN46NBdMKYVK6qH2adgE2yVAAi6uyiT62YumPtpDGCB6iXXP6pdJoX7z74cQX9b32jDHowDh",
  "key12": "2rCHRsCRXJsZgKEzA7ZX1WtskQsZfkwy2GQMHvmvAeNDE4yokhJJCoP2EZBvo2Qwo5z47PWMJW5tCFTGkAUikp1U",
  "key13": "3VUNF34ADohC21veBNQzYLPWR6q8H5c2zACd51nHmcBgjvJqDdyeYegsm5qyVF7hcGkh9wRr9CemMDQLNq1j3rqv",
  "key14": "4Dupd87Dd4nMPXqwzejLyUt4sYSkrMNvRbCF8DU11VWhF11gzVRpr3Rz7cfGcxJNeJcdxMvrxUkvJBnMoAABjXTT",
  "key15": "44ssvtB8uR2DVBnqnkDmhhUe1UhDtyJ4weF432kuDRBxcEP86qMe5GKnbWx3dhgEvuPxAbqTp1XWAuLjwiwgoq2p",
  "key16": "4XLETY1kR8gQCJGGvRLdmiUvVchqiCG7qBebTZKydS4j8uvpFfGDEnKPM7dsLVd1cSHK6rq2jSDyeeuBkJTahRWs",
  "key17": "3xwzoERLjrK2cWNMDVmWDdMBgD3q3WBMfpYFkMgRpQhUAmwto28piSYsPppyiKJQ9LCYp7948NmgZXZxqBJzxcQT",
  "key18": "hK16bVf5xGBHHpR4ysohsqpJSuZHySyejKhthCAjW1u12jzQuL1fgnzjotWTVL34dpfu8A7jdnsu7wxcXjnZHsz",
  "key19": "3zxHtohvuWLFyEznsiF92taEx1WWyhE7jRto2zkyUqGS9CVYE3jzdZwceyKrivFv1mWsbxL4fyBdjV5sfHsTC36b",
  "key20": "3z1AQr4GtdBDLSuzmDybUcroEEEQe8Yb9dQFkR1Y8iCsVKF41AAit4pNpSqSGp6sSzRyj32YYn4W6SM56bT1a4B9",
  "key21": "2pXjA6znLvu12DcVYWb8XYU7fT2f3EnJqKyccugFqN3Kohagnqb1SWNDPK6HDkh5n1FwHFkkpeMuad6CNCuki89Y",
  "key22": "oHny4hLSAR99rLutsNQKgQuSqsUusjp4i7eEYbEFGHCKFTwYmDHFcLbJ5SESQMpURGcWYQUBrLtcRhtvRuXD2qR",
  "key23": "4odyHt6orVhFFWfFdASre7Rx8x3GmoMN3G1Twd6CmdSYvyUgMKvkvKpns62sK78rwo2E1ETuJmrsqn1cPUgWe1ND",
  "key24": "3neK5L2S5RDg6dkirRY5tX4xbpygVWgZTcHvJ1BRKX5NwYWB5tsvB9TBNk5ikY4EfCLJGT9Efmyda5zqSvAUDfLi",
  "key25": "2tK4KYaZwzot184iH3f9QAQG7J9vdHcgGqscz5Dye4Jdzp3MDtPViPKTS2spqjCAz6fqC8YVoa3YoBHLfwvY9b9",
  "key26": "42SCpY9VDTu8U7MBEY5S8T8eQBUSKJyYNTsjLqnDJLSGaHJvMawsSz5FkTz2NtcpNGHPSvcm3czKArGZhDJZsqg2",
  "key27": "6bRouc6jrzTRGsRab6ryJJQghKL6kxBGRZQGwTCszPYg21pTvbcBvAbqxEotQXftXgXbMEHVCRvmKMMKFxEtdzU",
  "key28": "PNKiicATpaECTjdteU22w722knyufeSnvEAjaJDE2LYo8hEnW3jUYQ4JsFGg22XwgmnSUfauMeSd1vWG9S9LqNB",
  "key29": "5XAnjVttpsAc8Rfr66vxsSHX6VuYanh8moc83TGNzk1PWY1AaLTw3A7tfK5ejnf8f5h9QsLfovMrnh64JDXCWWtU",
  "key30": "3NCTVnqqiTEFHtW2apiXy3X8hh4Ny98dmjY2aJHk7ZumBx8nmfh3PkWbfiRANruZyZVmivCpZTsrVd3mbYyKc42h",
  "key31": "W1VeTiYKCAWvqxCJ4A6WunmDjsUA5AS5AzaqSkNdm3e5tZRMNJBNLqX41ezX15ThC53pDkoHCc8rrR8P8ZgN2jj",
  "key32": "4FyvLLjRBJSfLLoskhkkBoB3fJw5S3M7C7rig6owJHEAZC6VU2XrqxCJ4TniTTScs4xMU1Cq8h7awGvZom627yGM",
  "key33": "2WtjzPyhjpW7wQnGecXeAFHKuXZBAaWakgyXEJGjTf4mumqRzJQnA98BUA7eVauGYov1RUBKMCQMF1kNCzUPWMk2",
  "key34": "29tfr9KE7ra1G4CvhiJGb6JmcVpVcQkgjHiJWcGRi9vbvM8uwkXeH8QoT52Ps3qtjRdcqTERgyspwiz54q7sExzw",
  "key35": "4cKEYMRWJn8qfWeR6NGxee5k78KuMzvL8sghkVUz2ybMJ6MtN3DjkRtmnh1mN4dVkqWUZkgQRih7BddDSdnYyRp4",
  "key36": "9uNJmTqsFPxYhX8Lh77M8hTs42WRn5ee1RvmskwAWZgCVvEJ9hPtNzHxomZdg6UwntgokKGWbKRvui7rMyWZ21t",
  "key37": "2FV1UG44xqbcdeonvbugfebs8ikmoL1q4iruv6zSsyNHm8iMyUFe7xDLpfeGxbcwSqdwXnS6UJmSkeX2Cwm8UjVy",
  "key38": "2RuCTke7WEksipCzCifLyEjE9gRdYpYjjm2r7S3jr9RZUAdG5pAShHsJBwkwxaHgWZAarae8Lnec4fpvzjALDCsb",
  "key39": "3dKa6aVYWBXzZU2wCEzTAYuYjY1EuvR5ft7VQn8pzF1AGtQKkWVznaTTE8rUXCrSxnquPr7ufcgvZJoiYHm69U49",
  "key40": "YTG2KHC4Q32BZGrB8PBULNacTALYnNV8Pr4EBBcWEjCA1yUNp6T1NoLY6NsV2pVUnyzKHc3vDTKqmVWaehaiqZa"
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
