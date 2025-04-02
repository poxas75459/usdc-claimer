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
    "2r2rgtNZz98UyKoAcJo35Ywf1yHFGDUquQKqGRSuCrhtksDizFfxby4e7bmg5VBTrHp35kjvAfG1iTV33rJhJjTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxHctEUvMRbbijGmMEYUE6VPkDp51TwHbR6r4hZQZnhtTXGazjG9egqKJ74aFzKQSJdn4RgiJAg2MsZCNaauDo9",
  "key1": "7EAs6yufu4H5MsVMLRiGY485gGFfCGZJhiUWAbJRZdzgNxA5qxzFpHoMxGmRMF3jKfaXe8QYUZhnKHK18PGjQbq",
  "key2": "35nDpwxQrStmMVjHx3KpJ51LD3yCEbrmCmzsW3sngoAqwSpdBsZYqs4ZSPxBqd1nfAeK2jwr667BK7CrUBAQJFTa",
  "key3": "5EpwNbwXiA2xBmnwuStmwqaXsQqfwVqhp1Amt6mqfepGht41MMehe4wioxtS6xbcipPtkEd3suB4p5rdxCzMzJpR",
  "key4": "gFj1xMLrN4AiRsePxBo8q2q5wB6PF6EkzLZo5GtZLnFiGwbKDb17dEakYSFWUmJGjEmuqjBW2XriAZ4wuXbHEyV",
  "key5": "WFQonfK9Y3bg9kLmt1WvBpZGDdXFfvDF4zLPxXvM4he6mMzmRNzooPtHjVi1tZiDXSycMSNCcuKzWiismtcgDru",
  "key6": "4Kmbg3nAPiaQ3NFzX8nJfMKvL4Dg6YTE3fouV1c1Bf3DLUX9vnm3AGDjVdkv2vK3Dh2d4pSGbZpJcxC8nrhfn5un",
  "key7": "38NdkR8GCqT9bgNZ1rHbbJFAk5U5AiVnXX5vYx9bpznVJrsHbDQAsAWSBnsLSVrug3RuJg3bLhp2zhgDJKoWrMts",
  "key8": "2naT5DQDnzj5JwvaAar36yKUsRmnkHPAT6xoetG5iSMsdCxNXkPbpMT6YDaw6XEYjNMpo6saHDktkGpArtstVvE4",
  "key9": "5yahigAx4YmkV44o48JAfbRqcBas2ZAdNMGbVHBhVvKsx2sDTdkzWHGAFqdcBmKCXX6zDdfeYx78zFAfc2ySEpN7",
  "key10": "wnGSFKbQKMxcfRY9ka656bzYJkvugHrGLCgwJuKwp3dAFgkCuDaCzhVT7St2WxdSKSxt8RhhUV9RntsK7J1PTKm",
  "key11": "2k5m9TQRfGaoprQLMDhm8Hos27X54zqjiomc13dMfsZqa2QqRXaGgyaUzmLg2sXMwFmL7uEUWi3kKvmqB7aQJhqd",
  "key12": "2ZRtYmVUBAYWmAwsb3eLiho5Ktbhb7A4drNzcYquCfJPum5ptyWiQ2QyxBGNsNG8NKS8gZDmucyzYR339VbHhYFx",
  "key13": "3TXAB8FtonsaQD9UDfH8amhGDqr1SEcA1RN7q9LoV3j9pXuAHzP1wbCubuvTNTjtVzmBsbRWPQ5yiXTYDk7YPVEE",
  "key14": "4quLQYhGL2MGSscHwPnCButNLnNE1eer1mYdoeFU6PcYysGFGShWSHHEGCS2kq9beDsG75ukTJhCWnKU6ZkcWp5u",
  "key15": "2bw5rsto7DF36QeQD3C4LrRvF4Le8CTQoaDvAxc58EXtnLCKq5pfi1GBroQCJrP4BH5hvGeTYyMi2HX5myS9tcnZ",
  "key16": "3eMz4NAmxyvyFYkYsqWN1Q8rPJZqeyQkfr8sQMXSWzz8mhNx8W6Gd3TMwZRRBtaNFSLgSfXK68yqFLcSv9RTjJfF",
  "key17": "3ZWgjrdcrhiuqXfvjQKp14kGLKQwm1RJDV3k7LHsmp3A8yT93y6PUFSWBEK1WejuFqMbFmojGmxYEAGSboMdi6Ku",
  "key18": "2LusEmGKcFexEhXxoHnjTNeSkcYNwyKH2kLWcfuUNqyLCHb3eL1EdqFVjDu1i2twnXytGxVZBToJXQ7KhHUYq4Sa",
  "key19": "24AzJkuRiPf7wiJK7pvFUKRn5HQYRfdiPGNRjbcB7ceaiKrFMN7tPNyEHRQ858WVZjfcYSG8JSqqFd7DT55W7mPt",
  "key20": "3i2At86axzREgxUqpci49xpweaj67jKYV39LVV7qQX98ETRkozEJmwUSgpiKpiDbq7G7rL6uL2av3411xAPLPaZy",
  "key21": "DNekK3NFG3rj2Wnt9C2YCxtxfsJxJaqsck7Q8TD273v5VSPpEmzkYJctA1p9QyU8Lg1ywohTCaT4uhySE5QDRJ7",
  "key22": "5xYYUPaQQXwzo3vJmEB8WUSyTWFYZ6J6AoXCyc4BtZsqv7hpFSEj5RCKvjhY2i7CPrKtd3QNJhGw7YaBszJEUKKj",
  "key23": "2sfhdG7jQzfRNUb9wnM5QuyQLHYQ7fQ6FutHZK41sGFv2tJg7KxgLaTZeeHLyZrk87kCbLxVBD98wBrAFRxsMycA",
  "key24": "3kreLHMpCfCb4qWhvRePJhcC5Za3mAsmwXdgWeuYxCgVY9K4cCwzBycgKXG4XuT7Wq41Vd86zeifW8RZGwCeZVQs",
  "key25": "5SG2cTsktGnWTfiZ6UV32SGQdtTRHnBwcHkzF6ffEAuk1ofZXC4zhATurVSdJEXpV86VVwm9oK7qdhrUn6s8toM",
  "key26": "2r1kpdfsUcWo1aFi8FW4Cpc5kVp3MpJ7Sq8d8Q5Qn1xXmnkSe7n1LGHzJWRJmrdsyGCEnS8qr4DREdV8vmbY79pU",
  "key27": "5iTgzwLqJVb9WUHUPSee8WS7EyGoozxa1v7N1DRqPm3BWGWKR3XfLtzAVmcXHVJw7Uxs5vyRoba4nAzaEoPzKBLc",
  "key28": "44KbzGkowipRe8TEeDSnz4AdmfqUbf6QNC17985DcBECSwe2BQMPnK87LPqu1W7uDjp6ejz1Q48fqzaeQuUQfRng",
  "key29": "5wM7hU9tDdnSPtgWSJUMNBF41oAUZZ1ru2c68ieRZi9ajEr8PjZQj5ckbEZumtenx5KHdDroSp79BtsFVwTuff5t"
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
