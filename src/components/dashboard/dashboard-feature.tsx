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
    "4MJ3M84FhPaNmncZgUWM14ujbyxvUvHZzKCeKbF9zc2RkGtCq1qReeiF1Ypyge96EGf5WVjZCE3o1kTMo9NQqQoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QZwzB5SmEejb8KDhvWsmkFLfv8EGStRBjqNb1ZY81W346NeXrrKj5d5wd7yJ914X2NVPbUMKTxmTNxqW7oiVcue",
  "key1": "XpWZ85MuN2Qp8YLtgicQe67db2UNXqAV5Te16zTSpHJaHiogkWZFiUvx3u2kfqqVbTpNgpXCxaf8N3zhAWtimuo",
  "key2": "2k2xMxrALMwoXbwGH1MsrmgaojcT64yRZrqSw5JLhXds4xsFwgmP9A4JKbA6Cn1jccdMrdyjuiGYuX6YyiLUpKVG",
  "key3": "59nMxCFtVg2cqtVC4de8hBbo6jH1KVkzdexzpAmq62qoqKWsVAuihjWg4DMsD9etfFqnk9zYtVDCi1u63oS26DV",
  "key4": "643QFVLH9bWSLAPooZR8Dw2f5Kw7Gt6rXNucarTyHjwPeAXDkBj1i2NpFj1NJ9i6inAyBDnb36uEEPjYPue8ddiZ",
  "key5": "3CMW9v8nHhVouZwp317d8ZmGAkv7H66vhQ27QyhAfd5vDdpzgyiMTngA6KgXwLjNaDen2G4XBkLMBXbgxGcbSqUB",
  "key6": "5unNJ1tBKpL54wE5H5jaw9PbyMzRLRuYnSvYRDc7B7rwD2uJEKrByyVnggnkFx7foXJWQLj3P8yhZnsLskgTYygH",
  "key7": "57oH8SK2HBM3VgNZEFEs26qbZjicroQfUmKXev7zX2Cq2PC777najdW5EECukhKwnpQK1ZYokSGamLHy1DEvf7ya",
  "key8": "1NdKQQKhnNKWmYfgQ4eaH1jn8VtsrZEtfjLnFyJAwMHjoQE5eQPMBnVfVbCapzh6qNULd9pFguGC47LFTA7tt37",
  "key9": "2rQLWhnRyxqDnhFtqxDxp3RQ31vYjBGsYaopF3eAJo5QqKe5g9MMTpMCSQumkpB3ZCjDiFt5DKb4vZCaaveqxmDC",
  "key10": "3aBHqdaVR7qBRCrsyt7WU6TQrUGELXwdV84RkM6ARG3XcaaaQzRduEaT3oLkptAw9YbMfnrdbcKeW4GFKWNprcjS",
  "key11": "5E1QK3rymk2HC1nufrKnbCdWpJmCp6kpRhENzaGgAVkeCj3cvmewVaxDTXXXQHT62pZJRibgQ1Pbsr5j1hpU1FCd",
  "key12": "4agNJsbiw4FtnyYWycYuskE5tyM3MRE9jt9pjhbA8QuoauddpNy5Um3F8HpTGS8foijx5Wccu2eKQjTLFc9RskA2",
  "key13": "2j47rS2C8s3uQJPsEYPeE3WhbeCL9XrwTLGUgzcgm5QjzZNx9e5PFZjFyVrGYQm7c5vRco6eFRnysN6x5XiugjwX",
  "key14": "d4jq4tXaYxyjwuXzFcjh7iQ2TL8svS5uPUByv6qUJ2FEbpQseUavEbdNoBLy9vU88LxztcDqD3Q4M1J1CyWGVBV",
  "key15": "3GsPCeBy38QLGQMu6RFJfGdtHvmVJg8daAUst4RbirLeTtweheePqkKqjtWosYmRs1H7jrfyqeKtgV2MQnMEyXmK",
  "key16": "32SoA3U4nGTuK4xwwAf4KH8WvRFZpUBybdrKMpcGw9Pv8XkqVQPjzyfD8jwv4m1Tcm4dYu6XbE5GsJKuDQLSUS3f",
  "key17": "2rsjM6fqFcGz3Gj93h4sdNeDZoPufGARtPNyPWnhaU5HfzY4L3MR2kFyxPHBjU3iw6sTYeejARWnHCiL3DaZPtGB",
  "key18": "TU1pRoW72a93sgNryMovKx9NBRsp8m2YLEtcnFw6r7A4KHM4vGhtoaT7jzyyLT1t57sNYzurAmUDRsBWzv59HoB",
  "key19": "4nkR8MtB4p7fNTRoRenD3J42dj7fnXRgGfxwPCEtiWFgjLrAf2WLWfNpcYizcAKP6k7dcJvsTzQbf3SHHXGcTGMQ",
  "key20": "2ZxuTnuApAV17q6aP56SBjLBDKr1EfKrPG6qPjByjsnw6xRTwdyC38enJBqcN8nXPgwe99jJtz8Btq37K1eQAmqZ",
  "key21": "3nYQxjTS92vQBWVdRv1558VJ5PiBVMoVzdv1q6LdDby2onaGoMVaWi61y5Ma5ex2fB2eKxHqJ3zXebVQoXnqfpur",
  "key22": "4B676uP9Aq6LLJ3kEhqfmrmvhFRBaoRvF99v53tfHkSdErUwmP8rtRba3LeJTsUdtagqKAJQXTu5C6qEqJQY8Stf",
  "key23": "3LRPEB4zs1hEGZ4wXndK2948njbquFWXzzxYxgRDWzP1CVLJq5xJU8xAAEcVKchPoHuTMHHCW3TuX7vBdFqY94GK",
  "key24": "Sy1jJ7mbU4RXv2k78uLxQCBgnNAD9acY1AXbdNXiNCKQKJ8j1asmivi4kpNLs1ezbSUs1azQPLuEF8Dy8wxYDyF",
  "key25": "2mSodcsvcfRt76As9dp5eSADSNNvLb4vppfVisz62hjyqMQeko1DJAXQHeEiLyaE7EPjSoABpfnHoWwxj6AdbDjy",
  "key26": "5jPP5qGDXGQchtfA1jpxQLx5Kf53s6Ahy7SBcsqYQmYqXKceA71q6DjU9qDQEV5GxhFDdQsfL7AJvWRxaPVcS8HQ",
  "key27": "2eDsvsWbKHZiwRgBAmH1DFBx2GytD7rWsCbT26MpC6ZMKsH1pdrVrUQ2mCCrZVj1UBmQuthnXs4D1Ty2iHRMb6nm",
  "key28": "B6CyLDVRqKHcZp4mScGBsiUF62jAdBhd8eGEQrZeaxPsNwxWsPvNhdCWAYhwKpn8DegzGgnJw1i3sn2TL2r98nE",
  "key29": "3rrmKWLHSR8NcKrp4scKzbLJ9w9Z1F298ka9E4ZYLoMdeCTBqVkpvR4kQCR3a1WXGka6GDWKX6ri47mN2h8Xaxxk",
  "key30": "64cENuiitcfRuid5oE7irBdQEK48H8Yq3wHvRcmrFtambAAPRTjUV3V2CHHjc6HcgKVmZEYAEaG8VREo6XxvRkJq",
  "key31": "oyCEf6NTkQrYaWKCLT8ywuKJmsNpKfYvHVpAS51tFK88nzq8srUxya9PiZbRmMW764ZYoEdqxs4D39TAkwpRqDi",
  "key32": "JRMGW1BipwGthGTL82Cu5Tp8txq3zH7QtapMbPNJXkGKdYuCkNha7oZfk7Dkjd7m4fkWduLszDL4rD2G7deBtP1",
  "key33": "5r5utrEzWGXA6fLqJHyLSPXtmaMgjJPPvNKvBqetUXbfrMzr966NhMHaSB9u7end1g3GdxbaED5S2ekkJg3emJ2X",
  "key34": "2bt3JyNths7URhhzQHRiup2HiuEv47FjtdzBtC1C8LqG7492cYYY6CTySQpq72bsJB38NJVK7wBcd9bFWZ4xJLN5",
  "key35": "35yit93C4eNdSGZ2DAn4M1jMtU68hbo8objm4g8hy751cm2JKzKdVyroM4b1cD3V6fTmwxXmviSr1MLjK1un14hj",
  "key36": "4D5Q1jSBq1qfiBMZo48KYUw5bByKSMSRRmwiKdadr76u8BDm4NkqkExus4qxemdQvxeNcRV8q5tgGtHTgkBZ9N4p",
  "key37": "3kM9ipryKng6nWXb7T7VoTAFPoemM4PQdnRX5MVZFWftwWxdH1VmJNJTvq84LV1Yf2edaRwioF7Hj8inQx7EC4F5"
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
