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
    "2cWT9eNdvx8EBz6dvuUJR4VuPtxrCxbx4ZAijCL9HMcwrqc2dRsfkfC7281scdX3C1tp6qDgpLBKd5KhXbshRpsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GrYdqMk3anZdsCDhVRJNrPbAFFC2pexo3vjq9H1xPrx1RL644ZRyAoCN245Pphgzcr2LQMiEAxK2tMBaJRBE3uQ",
  "key1": "5BZiGFXMtBev2AvNRipxLm2cKVLLvHxssSWJ4PwQZviV93MXae4scaxgbPJ2Yaa1Z9AShFcpd1k5q25CnRkb6633",
  "key2": "sykqgpetpafeCVNr3iJ5NRLF3tCXEE8tdEEa7HLny5jVeXevsEvTZm7qUaUFWm2ThMWmoGpTmxKb68xx45X1XoC",
  "key3": "57zKvqFSgkWMerVmRvungWcCc2AeaPaNcAvyB8zT4G8Zk4aseExnGZ1gZPHMMSpoTXmwp2sZUmX9DB3RJRvCCXGJ",
  "key4": "397wUpfZWDi3u71gDb6TnBH4C4WbKMNULFQmKbKGQwgzhRuQ68tBqRiQpn279NXCY5yeYCkvmPMwUP8EEvZQEy6x",
  "key5": "2oNCHpypgSzmq1d5ZhSospZkEeJdYiw1ksU7Z4vAtHRbAm9HgC4K5Jqv5mgK2Weq6yG9J3zrLB74Evjo7H3L5UdA",
  "key6": "i9LFWSmWvtpXMtfiFsdpaeZ9P764RLWuo6KAvf62goUXtzBBWJ2UkuZxLiu5okjh1Ps7hpeTYu7NEHLvyAqxcvV",
  "key7": "5qRci4Sj96yvdQLZED9Zf4zT5xncVeUEZ873nzCvhKHu1UfWQmupAspVGiu7WnVPVHbTVDcNet2PcuhKAJZc17L7",
  "key8": "5LxbGi2dRj1ekNqEjtyJioH6AFd3pLD17QXE6pfwFmvQgg71Wub9kq7SREzv9gYHtA7jU8Et8VKaRMmAYxLiHoGC",
  "key9": "2gXCULfAd55racVfzNVrMpfdDBmu6uAMEV1WbQCGnwHjG8p6Dt8RNaxDHQbxZbjUnQAi8tnkDtGq8zcjGrDZ6zA9",
  "key10": "MmPeR8ry2AqrP5po1r8Xkxa7UcTkFCXmEp7mUkkua4EtuuZPRDDpeTT4EVYDhsRXabYc9CxswfM1KwRN229qyi5",
  "key11": "63jytkarppCEWbHhtXyy1YZNGrTmqHMyJ17RfFk38z6YjHBthB4qVMCmB2kNycbPZTfaFjcxhE4K65fAZMzhB8UA",
  "key12": "39h1yxZz3L9DQYc8YYkbnvVD1aHEB9p4sFWpBjJ37ciTPLtUNttPxLMcb3Lu8wUJD5TAWaUno8Ja4J4VAKW1XM8y",
  "key13": "Dy1G3z7GachQQJ3cFCYLaTgKx5eQehdaUYNAkbgTJopTCAmGMs4cCZxGH1tWPC98zsPsNLxBJgoJ5ZuHUgPtQEc",
  "key14": "4sbyEKCcReWYLeiLz4jK7FnRiCwd7BbubYyqfnErpEKbXQtm1Ph6FkxHQMxe2PsJfD3opaTb3DrH99vpYXiBhGop",
  "key15": "21VpmHKwqQpZJEF4HscbA9HqRALxG41DwUFg8Qg81pdbJKEwbZeUjQsy236T8HFovXi11cmr14mm2QuasYdVPapW",
  "key16": "5HSWB2NMxwhP6cSpZzbrb4ibcSderfHfMocyjVSDpNAz7DGsaytDyfnJuU4QWxzTPQ6g6enDm9u9CcjWmTWk6Z2c",
  "key17": "3fnadvmajcad2g8roq7cMebpHaeADPLVJQ3QhMqfKVS7kAKvzWrV3qHVNUoXn7FTjXvV7mNpexckkxAkgL9Ht1PH",
  "key18": "W2yXW7zTNGpGqGM2fPVjZ67H1y5uvH6BacqUuNp1TdtiBXynG7PZZdnhFmAp6wMqqDrPbvo8CcCLc62dYnz11pW",
  "key19": "2cGcqwjsQigL2Fmo8Fed6zYzVCt8qkEEPSrSoaJuQCi3kysMvTYVyeszxfVpFSv88nq9AnDcfKuJdkNLGn1RBnsQ",
  "key20": "4BxF9kfMMvasGVHtR53WJ6ENL7DnFBBUrAucVkM4cGNxJPYjNzQBadNeEf5tWEZPnnrXEpoueZVTfoyZt4FGVMdU",
  "key21": "GL4BdfmSP7bgag1JcKkuiiQCtjc9SptY6sYmHniX8Yu5TRjy61UgJ4ASiPE81RomfwcgP7yKsM3Hkfpcxuve9S2",
  "key22": "vmbvcbXQxqCLy1ymTUDT4ucEdkZPoXS1RPWcu1WUseKGNAKWVpHBm5XBshshWpQv5KzqoEi2A7LaXW574PrPNJU",
  "key23": "2bxU32juTH4j8LbKNdA5H6L7judGutoE1Qje5zy9LtMb2xJz7LP2QbUyie9vJXwxAMbj1m3Wx9NMiHzTZmRKEoj5",
  "key24": "59dQAbJFf8rKHNTdw8FBg9inbk3qWY7pE1bcR3Gdof2AQ4WcxhQQWs2VTpAS6sVX3Ys2NgJgqf6VWyEXnbZkZ4JQ",
  "key25": "3AkkdKYCXD6mtdajvtApMYfHsMJPMKYSkGbmRcy8LYDpGQMSLys5uyZs1FkPACqwpGb5DYgwNJ8cSBPWfyCjuESE",
  "key26": "pC4kivMvueR4amcKcP8P6Rbc4k9tQ7ayHP2z7sszTizFwPchM7haX5Nz8U2FJiTjBGZGkCYDuguGEiU71dSpQVf",
  "key27": "3dc8owMf9Fob9bdQYo15QXxMb4DiedHdqq1TUUxxEA5NQM4XQv88ZexBg8TCJbwSepaQ4SSwzt1D6fy4BiNRiKgP",
  "key28": "64Ed5zPuvgXB7xGQeJ9Pxz6KceTQn3fgPXUanXAQopURnDefqp5RN1N5TmYY2sLQaww8ChaNadxoprK7tu8RLWxg",
  "key29": "5yGAr4484CLajcrwXFmkKw5Qjrcmw8Hk8jezCZ3socjSGUwXweAn6VPGJGy5a4EwA2cFhVoAUzRAB8wDQw9UAsjo",
  "key30": "4FG6u5cKYBDgwfLyuQQSmjA5o9qM55hdDJxSaQcf99xxK8ApNHCK8cqcbsegSbMKMwPkqD7ArzQZpHPxz31FFAUo",
  "key31": "4tBwSuczpmzNV6meaNQ4GaUTn2vTMYYpP5kQQEMvw5tyKCq7QVxTkuzq2w3XxoYzecv2uAwUyA3Hq4VDjxRaCMNH"
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
