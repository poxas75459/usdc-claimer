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
    "3exmdMgbkdfbpacoGQuymAm9cnazEPQZpwe3Z1mE94r2dDk5Rg2CwcUipUc3MsSJeYYvATNMqtr1uCXCMxPvqvZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCxGmX4QKcLZBLfpndUoaDi4vodeR3Qvj7Fb4x8W56TdcZwxrSaGfEntJK32JcGFg43ds6J8JbjiZsWbJsNqzma",
  "key1": "2DntNK3F9gjM9355zHWwZvQphHMAzSxkdvjD5RNjJqHdprrr2pFRRvby9EbfmDGjuyiXPW5dW64AQm1pnJZuQmdB",
  "key2": "5Uzs4ctqBFQbHF1fcNEc2RfRD9mVVhUQNbPH3KyQYSt369YXMZbiwWy3JGBDLL1PHjn2dt2xDCunzKLcLtBa1mgi",
  "key3": "5mamRYCbKuvYXdudUV1GQtyNwvW3qDuQAReNuxcT4Y6xEFULCzBvSacSactVRBwkHvVpDvDv3EghfXdMoWMy4TJY",
  "key4": "38KyeLZ8Q1aaMmiJbCjJhJkabGS78ZYN3oZEspomHBNLGJxmiZ7xQQyEGL5qoRrpmo6AfrE39AueGBg5rTDGMTKh",
  "key5": "2PmPbBvgrqvkG3LgRLkfQGzXBtb9fHmhEvaa3C2Gp5Qk19JcpsRRaRrMYVnuYJaqF9YDNMaYAxj7FCMuAMbLC1cC",
  "key6": "pxPAbEir5DXqNJoLN5FBwLbdeBFuoZC7SeUbCX3VxsVqMoR6F7xcECqoUD7SVoYabq2jPLrBWmZUZqR78FAuLWY",
  "key7": "2SSfdy2vxakMjT6LsZvJZNmvmQoc77UGMyn32ivfV4vwez5xusB2sd56QAxQ1LqD9vH4z2fcqqorGgaPzuppdZXW",
  "key8": "FoQAxSW9k8mSFiyu97RnfsPUQzVo32QPfoLfSukhhq1K9v3DMJPtqy1ATsdDpV3LSbDABaMSrMU4B697E9rY3b1",
  "key9": "3uFw862akhdGidEePG4TL3ifJJX7EqJhnyZMqQDU83zNS1VZufgm52oHcVofsum1SPM695s2ES3TR9h9zEepam1E",
  "key10": "5GKfpc3ap7DMRv5dNCMbsYyQJyKU21YHfooLFzJm3XgBfyAycx8fsh1KVwjGYGRj6iMBCDVidYNaH8yZHXJP9ayX",
  "key11": "4xV4RNzFqLdNG1Th1yeqQPfGiZne24k2sS4ubVnLZaPg4hVJX23EePEJ2QnUSbb69M6e532dLsLPcoQkfgNDWzxn",
  "key12": "3LL4P56wWQ6hPME6usTTvySVhQV1G4nDSfrKNe1vbLeA4vt86Bed2k5xweWBDubBahJKGVpf5uUXj48Z3paS3qQj",
  "key13": "56Muwp61EDqdnVtAhG4GZREGaLYR2TThAhhZPvEdENP76bVbYDmxiG4VNbGJu7bc5eMUswSTyXThBvnwH86uEZzm",
  "key14": "2w13mns1ksbbdXJCGWHjvUa53aEUd1b5atHL5XBBEYgFn67d5fwhrNfvBL5XVkTJEtv3XVbUwpUgVDJjH69X75Un",
  "key15": "BwrsDYnvbdD1xyh8p83E9x9WGLX8vvLcan8Jn2ZsUFuu8ug646i29uSo1TxtzNxEm67GkQwPrcKznLscg5wnhmD",
  "key16": "vZnee2SD5e9hQbGhh5KcTF5KN2WJKGVeiusRQ68dWTTKpnsXkSkNnbMoiPcXkM3fo6Pi8SjDyQ8bqL2o4XArRhZ",
  "key17": "2TLt9ggHoQ8ycYGybXSq13s8bjJoi9jDe8FgwmdQaVqRJvZKqEKEYBhqzXQmNFXzFhiJh17MhYxHX8f2d7wZ31Z9",
  "key18": "4spYLA6pnM2qgq7uQ7vx6E4FMg6sKkgPJijcVchZX2pVxuuzc5FPQY1TcNsPTfgT4fAJPfuuDbM7bk5F9qaLZ58L",
  "key19": "wCufHRsfsgpLYgHQnDVctVCPjzQ56CNuLGexN2j3vRAj775GADxa13fF6bySNHxQ7ieGMnd3EjcqjaaTXC8Pqs2",
  "key20": "gRt9DmhARQHX5P72LaYbE2FH6tTo2rzxC7f9nbDtcP12cN9FzTDLqLrgbRwq3TE1gn23CRGJZBf6dwHEisUrEzj",
  "key21": "3tJpkmhMV2U2dKhddFAKAumJ5kdNB6iYEGEVgiSfEUraecccSLTc3YxaGd1fhzG4AYA53UAnBG2MtZw71Jc2PHzF",
  "key22": "Daez5Q2EuYWse2HJa12dTcEVRNV5AG2tfYxrDGJopNeTzSMeq9V7G6rLthWAJ9CCNiVaA2ZY9t9LxhS8oSR4uTm",
  "key23": "pkSQmKzizNg2xUKuDX7qhccxqGPjUdWu5Vznk9gjwfRSSz8Zdf5XjDtbCxanJwiCb34HSqw7ZqwtQdLvN3vGhfn",
  "key24": "4BzKt9mA9vuQT4LKosFVwcVk8NHUy3SSxs25qYr2rmuZUGZYCrEBWryVCkPd8PBSykJzgyRYY8qJEPhGo3bJUDvn",
  "key25": "3xDazZ5iRoRAoe1Vrv6bzmoJmJ3ArGGekRWjAnuCH5HJwjz1WQVKgDYi3Qy7y229GHckGD1YFW8GT9tYwBSiNKaP",
  "key26": "3ZQcHhcR1sNor964JFTGWtGFSAT8x9u5sxqy2u9PUauQMMcqEWDkjK1EmDZk5sZMbmxNUqFN6pKSPEMNHbf9jQkR",
  "key27": "3A3beUfDQGrAuFuLUSm7SYDck97zV2qYrXSr9j4igug9VmyRPAq4ynKZrtyEqrJgqDV9ohtYHP9wjZzCKXmciHab",
  "key28": "2cqcVASjJw75GLqsGYMzVznQoJNpNoV3s6ZAEAPHsjoRhcR1EyGmtxactVfbNZfzXpbVeUhRKGMSrxnAzwCzXdut",
  "key29": "378MK75WdaqhRF6fMZzokgy1aGuURda2yY6zA2LsNZPBmm6QMSS9egTrZEwyHpV5XjEaDZaGBPvjffjPGAHPhb5T",
  "key30": "2r7LudRMzNQUWTv9ix5ZZbikFuFcpJEfEKn4WzqBXMDsosBfRkBUHyoCBfFs19syehLuq838d36yUfrhnviQMJLH",
  "key31": "46XYXYq5JRfim2z7nXeuo7Gh11xL7tamf49VR9W16kbHr5xm5HDwpbnKqEUfmoFZdM1cp26QsswwEDfGmwvGk3Pf",
  "key32": "2jaNbrWnKqyCBdMdUwuwNYttsdXgHif2FJ2TPo2oaeVBYz4xg3bPJZhUGNQ7gZpTK6q5TKmYJkvp1dn78c4grm8J",
  "key33": "2mHmoScJRhjUjGoBsthNtxg49yHBTTe7McLrPyr4bLAzRcdD9S7XRWFLEkWxkt8autPCkCgb3Qy9tF6d8wDfgz7X",
  "key34": "4zX21tvC1XHLLsX8pofBj8U5H7Mqrc36ukjdDnMXZMQt16Bm4dHNXesgYDgT3KdYedXj9QKQSoDQ2iov7wFGX3J8"
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
