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
    "44uNodDsvsEpiWMFCwU8gG7WwmmevyVnfLM3hEL1cLDaLHBtEDw1iuPFdNmzNda55YFm6KDeznbagUwwbqUuzUaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RsC9eZNCJDMSj8D4hzjHnKv8PBWJPZfqakhPR4dfdnzAYjDdtiqYjDkCzwCykuYLHkPGtgtGkjTvZoL4yjtBKHw",
  "key1": "414bgw2CYBBH2BMXs48vCKjSbHNscdUho7VSCbN5tc4gtcjTK33jawgDAhfFt6G69ceqWjog68JmMG6ZioA8wLS5",
  "key2": "3PGmQXiZJtnZ7uP4di1z6HbJDUtGS6pUYUhhBHpWdZUkcbJBKoHB28orCpL1q9vC7AEWc1fvp8FkjbMRaNLYrur",
  "key3": "T2ZHubdSFqqtpUZuEqZJL9h78me4EHWzZgTHFQXb8TfrtSZZZemz5S4jupzSaDBipXQd6RHzZ1vfxwUkn2LG5tQ",
  "key4": "2R8bJbP7CSfcnuwdbBo4JajgWQTJsaKGpWvRX1HU4QJnAtbxkrbQbqDesGJi92bN2DTYoDFdx3U5rVUBRCX5xePK",
  "key5": "5zjrwkkqXqgZRarcGEGwja2GFd6by1PArGfa9BRe9aESAUcatyW7btroCpFtpkTbAA74Q1U93a2QrrLKFuZ1FRru",
  "key6": "21AV4pR2MtWJQ3SypFiXjY32it6TSZ7ce8eNRBT12qFmXvcy6egucdaZv7jfYDyrE2Kh1ZTSRqLev8FrEbRoMNSX",
  "key7": "tEEq5mJuzMjzUwNRTGo8SDnM9im9behsh53cCEZoqzoCqsFNxC154D8kwnTgTstBakUg4Hdq56QyTokMwDwK36H",
  "key8": "3DntJrFpiKdF2Y5d5XXx3puJbgA1bRRytEPkZ2uMYKUqZkSCeWh2grx6zszp5tY9VBMNt4u24hfqPVEL3zTJgHfT",
  "key9": "5HtM6zsA3pLbbRV6mM525xdqDSwcN4VVzie5AbL4LZGBxh47kYUuQWFCv4gbiLWcGmNAc2vh1K4RNj2cB96YrYRT",
  "key10": "26tqydE8VcoptYaoj9B7QzdmNhtL28k1JWfJAkkAS86E2iPYYX2Xcx8MqpkXo2o2DLZByJUF4GXT5FFpPqQnxeo6",
  "key11": "3KpoAuNvKGdSLq1t1WqphM9X5p8LTbwAWAQgZBaw1C5nxndwneY1YbDd9cxrpasSzN2oLHDXtNxBa93eZhZetgsM",
  "key12": "FnnVxm8ngnsr2t6dPQ2bY6BuU6HasmLcL3VtJTDEtdJKkhoy6bRMHnSf497TaYt29bgrbjzok1MGVtrZno3yKSv",
  "key13": "1dAgAgZHVwcd2BYZ7sZRiwpHHFajyvS8d7EJsCok5UwctYiC7YJxJZmQNL1zwK5GK9Te7pd4g6xQwNtuGTPaRgd",
  "key14": "3c7XCagFpAqKFr2VnBLyXhbKiJhWA1Vc1YhB19pHkxySGGnj8msXFHiiTRRD1vqrhsgpGKtex5p14WLReniEEk1K",
  "key15": "3sTAbmHVmW2xVSJ6skjEytE6DQTS5GPTTpFPd3JzJBJYiVottRtaLjSrrvsTsxePpxVezf2hKyxpoUtRCxwgPj8T",
  "key16": "5FXiT2T5PxarnyBbFykRpwLYvKAmHkaKHQ3D4uJhfWGKFawBzavPBuYNQwK2YasNhfQnF4c4YKssshqBffv2HH6Q",
  "key17": "2Zd4yHaSx4NhnGweNskRMPQn8h2iVmmVPxA9wFsv2CzJP42XTLUcfymc5sMvmEJzDAjp8ymkLTt7GDrptT1RiQ77",
  "key18": "21hktgrYYCpFbRtY7a7zHogx7S3dLZ1FAEq8qtKKMBadBRcwgTq9aDFoTkGYFT51suysF28Lq3F1R2eTbnCNQL65",
  "key19": "23wbd1byUvY7ATaygbKm2wJa2xw31utHFKauHeymAafN4JDrSd4772VCi2G4ATSWmVZvMtH6PkYuK9dL2g1NgnLt",
  "key20": "5k3bnG3woaJo2TS4yAaLdtoeFG75knyAjvk8D2mp1coBQvLFXiqihGN5YNpBKbUGBYQ3xP9xbdik23iLZ3duwJhq",
  "key21": "3pSSBuGV1iRixSQss8CJoQS9sqkrsv3CGfMiQzxV2FeUQ2urSSBG762361MjLcgzuj5kD5KFtkhbQSvkkrbPiaqV",
  "key22": "2ZtcCqYSfvvtjbs7FtyNCacndFzKS32LMAN1uFGiEwtz2EeBX1aLbab1U11GyXg9A6NuWYLKWYwyH2WsjTK62HN8",
  "key23": "4XY8RaLCjeBE3eD94cK4tGP5hkEptsMmMpA453YdU8zYkWTQGogxv35dCzEWXpz5yzcz3iLCmtXNDqVY6pVqbPn6",
  "key24": "4NAZ2xH6hsSMSAVMB8164HocdDVmSf7dVWe2YT5hpMD3F69LhW4xKBzA8WCWoadT5kbaHhc86xahPjDHZpDiCzvj",
  "key25": "2dnxVsbVe14dnLRXb33cBH5YytyshZUWEMTZKZzYmysqLVPYgjSUhY818T3YPvLmf6ZZVoWHzZTWDzDdJXgpN8kD",
  "key26": "42S5ubnoaZtagJopBkspm5urkchFYWyQpeggEsSVR99ogZCUwWEZaX8Ms4DtjXnWMm5hd1ik71V7AoyuwhQKa51i",
  "key27": "5HxP4L5cb1gXtQ176zcus2MNNFKKaSytgTdVdsb2xEHtnkxMPEhdJnSM3BsmzZa2r6prP5E2rcayB11eQpuH3gTF",
  "key28": "5unarS4RtquXiPFt1QPtPM28jk5Y5uxAyw6VfPSFNnLaaGvrwXEsQCKcuPDwPnXNEWFi8u1MFcdqRrzjJpEb4YLp",
  "key29": "4voSURk6LdGCEzA2j3cjP5sRxdjUJHW4aWGm5AEK4yU9gYDB2hdyFxgNUBc5ZetMF2BcxLE1bsrwRAJ562Ld7D5X",
  "key30": "4ExdZSUVscrLUXnLhb9aD1EhmL8DL1Sao76REY7ABNNvVHauydZX4vcvm6aoayks1kySw3xP3XQBte7fYmJ3zhwD",
  "key31": "38g31wd3R8PcB4Avmd3RC4FrcVtv6sKDx5W1GRSXvHthLg4eCNtDrDMfvRvQkuQ1HZt44BgKhXkqbm5o6e1b3EMZ",
  "key32": "VujEJEtRLd5aA52EqKw65i7mtyGtstXwC9p3sSH6qZe43rMvZBBW3Z6woUmY1cyevX14URVtQX8MpYdGWsx5Mj5",
  "key33": "3ury7BT4m3VGpCdWCUXYSvkGqpg8ANsn5bVoX4kJJZodw5gEx7YML65xVbWtzXC1XUnDnUKgKwKUhHFL6zyLcnHG",
  "key34": "2daJmAVGwKfph8TAPvJqTnntAhTbwoAdemBGK2kbZnFnu7ktnmZv9M7BbVV1qUaGE3oiXLgCxUTsyz3TGS9Pjrst",
  "key35": "5LgmwxyUjmk51R4QWGGqhsxdVNvq8x1Y7QuyGaGB1E1myzyfpR8pUQs69G49E5gAkykqfsoJY93eJJDnEXpZVfS",
  "key36": "eR7kAghFEYJY8etFudpBSpKJ8owyRsmBqD6uvcD4dCSdcoyEF6tczs3TrifhiGF8YYNzUF2ZqnRRmyJicdUcXXD",
  "key37": "2dvwJxoSsNyZaMniYMwhfCJG8WLWgMpm8FW3bhkmJpVYMmJFCVMGkvZQC4U6jpTnS537vz7ypAFPwrrjzY5x6vPS",
  "key38": "9u6LpY21NS4TbAidMr9YfRtTzs6TVKFjgFfXWC1UXjURqQSu9d2RjCGRfNSU6ETRU2xft7dUTXCMGMPk1rpk6Vt",
  "key39": "2Rta7J6TAkRFcQQrtrrQD6xrmc1ruH5fyPSSzjjZPVNEi1D2JsqgfNL8seomrn5RBNR1iMFRPBCB5hC9G249Mj2m"
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
