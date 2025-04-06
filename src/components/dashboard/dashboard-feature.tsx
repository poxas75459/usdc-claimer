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
    "2aEDCms2Z1a8scfe91WGEwGFx1badMSX1ztTjzVH9nzxb1Br5y3kTGeEeyHcydzQtGxBVyw7f7WaWzwJBwUU5bAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PRwWiPUPKK16cVVr9SaqUnSEuKrsQc7Zxaij8WEiYb7vkbQ2B1KURCcdizVR98TyhAE4dSxUJJ7o6SaPRNroJf7",
  "key1": "35QigRUYB4Aan5sNY7mh54MdBAgcWoGJBGQv7NdCvsq4xRLNxwmAGLqPoSbSR2t2LhHVb6UYApDqfEE8A9jc2Fc3",
  "key2": "dyM9k8T2whafa4DwGKsgeGxEYFY19SE3d4VwXbpGZHBEe6KHXmybi22x4eYH3z2c941sjEWm4qBtgFf6xLRKPpQ",
  "key3": "3t6Gjm784Da8obCKpxEMHWivrGEGUpox14Ag3UShW69Mi2ewq5jZxDRn6tTAi2nnbcY1oVbzXKFmopQN7xakLFGB",
  "key4": "6Y1ZRSJWD36uTnY9YdsgPNQHToL4wRpATSmWbhoFa5yR8Wm92dDxnMGkgGsPWCnfUTBPcyWtX1sTBSBLDYMTXDV",
  "key5": "4gENRGawUsdtBcwMsneS3tZYdePpwdQ3YSMSLYrtH8ZJ5Xvx46CejAHLrnsD2AkvGnCiP12LRYQ5ptWBNdLQqqqm",
  "key6": "2N8wVqE6P2rSUfsdVYJ3whLsfh6dpGU4b45Q6nhkJGgHZuVWpD6zuukmXf7ARNTAqdNuZXtMbHKBa79f3iem3h2Y",
  "key7": "2M7Gsoy7YCERzarBRqbz4F6pn28tEmhABbuZi4C9eTKZfRuh7aHRcYrWZZKvy8ZZVsF4PPUKMBZLj3YnEiDRfrgr",
  "key8": "4A3dpfJ4fjUQ7dJVZwAt8wFRGwvJXATKgXs2MpzcZUvBvMcTG2oR8f3qwLa1vZ4DpXKUA3xoPiZK8rapd591Sf34",
  "key9": "3eibd7b2NtDQptyJXHLBGiEJWmHe4umz2Vx5hwBKgRTb2m2LwwqJBQeNTRXuwUwoQqHNrmMsRQ7PAeqvrt67pW9S",
  "key10": "4YKwDK4iaFWY59BppysuuMMDBJjqx3txMANnPk4ay5LM4e52hQZm5MS5uW8bao5e2VDH3eJ5RuuB2RPjpcomECHK",
  "key11": "5e2MVfpZtjHnbb18FijjBYPHetLnHUtRrrbuuaV4UEnLLKChuox6AinvWN2oehikRSpqMwYBeM1PRfUb5LziEUZa",
  "key12": "426BbfVe8giAWGFUEVn7B2bu95Rq8QD1wNXk7YqN3uWmMfHTPaEyw3aEZvHh5efXEMw7Wu4s8McwWpjYGwpoVm4n",
  "key13": "1iyRgJCRECEx9Y6WoaDMphD3qPsLHRBtj4XqAowGjYJLB376mdec7KePvuZE2eYruE8mP5xcakHFTT18b1Ey6oy",
  "key14": "269okaV5PXhxJJ8TBtznd7W2Ld9qXHxVnQ5ba14Cud8R6DNuZ7iP7WaGR8q5KZ7EzRptmDfvJgjJpDsTrGK3UNi8",
  "key15": "4uLPZBPP7F3b87JbzbCb8QQAP32cT64di7z4c7NBTfscXB3z3fF2XbGE42wjx7wC7mey5iNcBvA8upQKqERQbZmC",
  "key16": "oCiHgHLGdnJ8FKzkmy7sB8YmLmvMxSH16EKiXKCqyNLfU8AWABeQGNmonvTVmZSb9vBHEU1iZgEYETKq5BahXgB",
  "key17": "3TZNaZWHmZw6BqsWjk7gSr8LUrYL28RoHhPoCtj5x2d5ZcbAbtUvSU1nKQAVTVZpTz7thrxCH3sXd8trngXseMvL",
  "key18": "7L4efPdtHVyD3vb5WTpFbnD7hzSFANxfuHuMkPFMkaRvzVVQyYJh5ToPkh69p7Snnj6UaMnChw3duNFyDS86H3r",
  "key19": "diVAUjshZXEeNUWuNNCkPibK8pSNMXByYS5YHfJEUgjiFSBfKpv4L1PXVnApUE8pTd9munLdh7QShGZKbE7Y1MJ",
  "key20": "52AkEDuZtfFo5WHN6SkP4LsqN5m5X9z9rs7sxa9XfP5rjgneZSPfTX1LsHFTZPK3YdAbVbnPVcKgJU4ygAhWJG3",
  "key21": "4FngocubVmEZiuZ3Rcj7eb4oxgyRTvL48b39iggZj7yhZbooYdSfdt4ZkTEEocaUWoiXYdSP1GgdAxq421yHRwNf",
  "key22": "5YHUF1rmnVJFMAEss5vaERoQ5HaNkTg7xZK6g6pUCiTRPDsTywFiFUWTFwFnmwT8ACuFLk8r7KA5uBxSarnWDYe",
  "key23": "XJ3xknFao47XMVMuRWzejxKuHuNCi56rvHbtzmd75x75g7zzFmp4NZFMuP3rGy98GQHzRA63Z6rRskaZVeJiaGp",
  "key24": "3cogC3iJEZ6gR8xtRE9wMgyVkwZz5BaD1AwZnL6h4kejZHvmo5okTjsddFG5CpkjvKTdDnr5WMbZrcutUDffY9MH",
  "key25": "22qca4hVfmGahCXauT4ycyHeoewhjsFURSoctzBMt4FeNRspCxDURu53Ljh1Ka7sW87Rtk1WDvE2yk52WUiB1Gyj",
  "key26": "tYod2DUWGpLDSZs3Tu15E343ko85h5epBZRFaSCD73RRihAKXwrcigF7SuSXm436ZMAWkvnFDd9XA2vkW3wqv5E"
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
