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
    "PNErjFCMCTWEd7dY9KrEn8LFJj3xtF4MWQyJXCjsFLAVLRKtKFRonVZb6Cyap22pwXDU6CYABwHkyY5P1hwvSvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CCkhogx9fXmq32AdeM5bj5WPtBNzbBKfhYZ7WppVkaxmmP4D8Uxhp92HXH2f4fbQKEGFEan6STDHbkLfzV5dz7",
  "key1": "4Px6LaXzqf6Vo7mURnduVdGG4dVSVKTfghQSKWp5aGj7siDGbdcJHDT4Hi6umoEYRXRWxpCCRPDA2axu8crhV2RX",
  "key2": "5Z9MUtQXviquuu2KduH2RTimd21GPzpsn8qPuReu3LUGKd5MJmqKfDo65AduuxQ3gMPaXA5nzof4RskTHzVs6BF8",
  "key3": "2hxiejcKvLG5ktPmwvnxPgbknFwsspSziseuEykj9wmp3Ni4kxSrGC4A6KMCC95vE31bjEdPjkWkWnneTv8iBgzs",
  "key4": "4YKcFskpfLC8tvfXsFrgLJEtxJ9dHAScv6Sv3F4QKFFkW46XaHH5QiaNBMonRffc4Jhw6WiEpkQqcfC6YEqkbSjD",
  "key5": "5v6PsPNFK21eYB7DzynRDnAHFd2Ws5LUqfaUdmhGGKn6eVmrFXkJWUhFpzGQ3d3p8UZDH7Ls6KcZasYCyesTvwEM",
  "key6": "2RYFPuBKZSdNEkkoHvkrWSSBrjaEZQrT7SAM1dp48kogiccDNHL4vTsCVAgX2BNH5MMu6sn6NtkPvZoQUXJRYzH7",
  "key7": "2cxHmiZVJ8MSQ51g7NLYipDQy2SELtv1ypBHPgU9x9HtNUTwtzcpbaECCjTWcoGi4maVKpJAWHVCTySmD57N7WhH",
  "key8": "2yGfCYUonHrwT2iKiJH7uMTiRF7vfVKcJAWdwP8wi81qp33VP5dAiBTrm7Wqu6otmqRywiTL5oTw4nHmubDF3t5b",
  "key9": "5zYKvMXnHHNitXRp1ytUT2Tu4B7qePfJBhsS66qcwdtLFZ1gjbDnpYsVtzET3cdQR5vznLd5HbYTm6xQLzdSSdCE",
  "key10": "uS1BPYnMvYHp8puDmAu3hzhAbv5gSaYv6h8gqjfDpdeMCpb5eJhz4Ti5Q1jUfND2m9gvwjCKjySoAQqDMiWBkbz",
  "key11": "3dy98HsCejJmJNWKPfw3aR5n1iq8C3YR8hbS5M3W4viYYLo9tyU8oaNVAynpPddkwLVcUATmdVkJBRcoPnAnhqDP",
  "key12": "47jRb6ATAGfxwGdm8YxY5nzeNdvK2CdgQJCMQzNWiJqYHDQcXBoHRLk9PAAyFDcsEAABLJRNC4Q6h24aDkNNVYFo",
  "key13": "Byhb5uPSK2Gr7B9KBpFrj7uoZd5ha8frCMRCvTVdTz2Eu5PJhJ2UBXVwRnZSXt9mxaGwHEwf7YQZBMvjaPTCdJK",
  "key14": "2vWUVoNZY2EqrBD1qJr5DmMH5EPuyzamjobZsAMKiVP91pTv2Ja4eqjpYFrCewLo69AzDyYNGpgbcbriBX2Audu1",
  "key15": "56ganeo44ZZoJQcrNaygw3FfUobJqNFPoM6vXZVPPC88qWcFTorzmzfA5qtPMRxmwbuKLq1gvNVKMqrjnqSK7e2C",
  "key16": "42kGGddYhxeCUQ9YKu1oUxs2fy9sUvfXoi35RCQceieiRf7buPKvfYoas1HEBXdTPmqayrJonKLuyUWMMfvnMe3n",
  "key17": "4fYuajiyae2SefSYq2XPeVA8VX2moFQSv46MuaD1YS5GfCoR7KyX8MEJXpfpfp66NtUqk9qhiNjW7JJ3Ud9ey2WP",
  "key18": "zyTJs5tWK5UbzV17rzEAdG6CUzwW2GX1KQ3KxUHePS3qwSQt51xpBh9Wr7VBDd1t5jTVZFYbzsrQcBGgM2SbX7v",
  "key19": "62dQ8YuNWLLnX6Q6a9e3tCi3QCVqNqD69kA6Zi8xLACRvE24F9wFuyDq7uCm2fsk3oSHSvM5Rx2t9SRr6vaw1zXW",
  "key20": "3557CnEvgWnpwJFYWoLURvdPGKMrGfgyLR7hjNqEmkcCcfM2L9VSLHU5kFwaYrEgSgUQEkNJF5TYz6UH2qnbhCet",
  "key21": "2YGcWLy5hUsKsxyWNzthfjbWE2nhNVwD4iDoo5EMwpUquV7JQ8j3R4y9F6zuSJnFFGPdMBRvEgmGb6nhV6VKJcTh",
  "key22": "5VYoe2MYYQWCbCduZrQ3o9Bc8VGqwDb5zyvtKZoWAwfxEDVb3sVPUGAKz5RUXAWYwMe5YtZSWVxmL36CkxcT3v27",
  "key23": "5FN97PMCpmswuVswfYq6c3a4ZcRkFhTo4y8rdXriFKvpF14Ke7EBtCDB3kZTnGtRiqdrciDu3BNJa2EFhE94zcnY",
  "key24": "5hewrw481qaqbPHhoWQKowFBC2DxnWbZonRfwDCfNA9EGXTqtyizcqNbQbkJ87VumaSNP2xtqEro1npwRqzQyEYj",
  "key25": "3go1C4DK7x4a5RN7gCF9V8MBVZLn8YDqiTSEov38MoXsXy7VRZ86BPyW26MkGy5qmiRV1GLfzYk4GYFnK7wUuCAy",
  "key26": "5edDCortzrEqtmrNz68YBK6tm1KxrNF5ZxM3TrJ6XrY39L5jaTymUA2WcM5dGzVwzkPNAfVxWnUpm71ZrH3V8zqg",
  "key27": "3puX9JxjsMNwFhYVbwJEHLraXdfh8KpHp39PQZYY5dBmaugLeAQmQCm3CdkqUqrp7zifgCYgY8zAYALCbYnQH3gp",
  "key28": "3CVaEUzrmomL5NqZDJhHvvtXu2batKtjjJjR9QZRn2eYKy4KQYXDQ39tPtp3SYAKPEBARVxoQYXkLDqUb1KfihXE",
  "key29": "4zz7buTWcUVqCKeKmue6TRZdZ1K6RyvGPTSR3P4Qb75HKNfk1EkT7hm6gbGK92368cMirEeSozPZ2By8Hja6ZcdV",
  "key30": "3c43EsUpcWr6dBfic4SrFNKwRxCybzcpzr9LU3XvVybS5AWJqozUQkweoPMQSUzExmo3GL4tywQ7gjLBQ9eB5aMo",
  "key31": "2sR8riwZKLKVJqkU1d2srW9XtcMq8XsmhEy6Yh3fmgiGCsjBW5E216owcrAK3ncWaoPqHQJbYJe3rCg1DtbYcu1B",
  "key32": "9sYQtgvjPhH7A87xUGhZ2mUJyfVAoE2cyjANeR8CVV2VaVMVAGZrsS3re3aERSerQy3QWVkuPAoqaHzkkDaYEg3",
  "key33": "5Y8qEt3SC7VbiYZ6QB3SLpB8p8Lvh7HGVxUoxSuqh8A8yMBrhcHDKnkqv44X3RCkQUvwBMy5NNKoR8L4W7BqZEog",
  "key34": "2ATW9fA7f9pY1EbQCNk8f5JgiJUDaPTYEgHw1mYKJpDN2GQJorjESFxEtTEAoHGd4U79Q2CmGtj9VVfjrWHPJFtP",
  "key35": "RZAQCoBzNzA4YK1WUcLgLv9hJHrDoTFk1wkNa2g8XXyi3KzEyCT7m8LaRqTeexwMpvKxojDccPPtf4Uke6QqDYn",
  "key36": "c1otEV2qMpLk1t7Lek61kbqHBqEVHee8hFmbYYiG1aVfc3pgYEAf6ZhyNZ42fW76mGb2aS4diKDsPNxxPUzTAEu",
  "key37": "5wMPfmsu1RDAZsyH6ERmWn7E1Ds1G3273VmEDHGwnN95cCWBqUBXQC86Ak5Dn32avtMYvupDAUTa5BZz84wmFQG4",
  "key38": "oCs24M7zY9KYANTer4gK4KLnemFvgsSzipJ6xh7gmFmiRaiPeHzd6YAHQBDzC4qPSEpCLLYcpWh9kechSn9Q9H8",
  "key39": "5khPPJbmS5wHV4td7b4JxaD7RmZADbaR9x6xnh592fRXuTk3KeBGMsDKf98wyg3y7joALASxd4pgrYEs9r4R4cfQ",
  "key40": "r8xDRiH73oQtDM7gi2MmczABZGnqfumVn1MtHSofUUtHDmD1Vc9b4Gr966B1MUiXbjmPo3ei5f4MMKAEka8U2h6"
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
