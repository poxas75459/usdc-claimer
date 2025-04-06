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
    "9goXppupjL5LyMhHwCfN4Ex8w3xG1rbMAcLevuuHB5DkfRAiCqxbWLUzEFzBqQ2kR6w5F9cGtw6PZ3gRmbZdRas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUacmyXMvdmDN9goccvLz8oEi8J57DQ9RicjnU1rMgBTd89T4c9GoMtYYeEBbF7mNP7fecEK8cNGHnZpykYtLyf",
  "key1": "58tuyWBSfKmqkzhaiskekjfc2fyQ7HAXjzQBFfFB9paTaYRyuC798aeBnCxnVHgFfmNZFGPwpCqoMRSYLGkhQRpN",
  "key2": "5oeCK3g9L3iCfLp1USyeDXyLfc6cXzfXtMZc74WuRsfAB1HLMuvHmd8HC2Vv9RTzusGA4ziNbBPz7LCFFFGgnr7c",
  "key3": "4guCiMpjkxC4PWUAYg28fyGGYf1VnuPQWhLZKDaST6NUaoPBRZX343jUu7uJ81ohw4vVaaL6guJmYoY4Dtfqg3tJ",
  "key4": "4ej8zLgnoYnmqYL1LMdiCqZ3Xq3quznBDZh6N6keLAabDgSaQMwbmg21XVBV7uKsCF7Zz6hAizzQUFFmSGUF6ayS",
  "key5": "4a95KLYiynGqUY3Wf2Pey6CV1eqXdvR8eCJ636QQwUy9KhYuch4XuY14vshcPpCimBdb5zTaQnwETu8GevUhkq1E",
  "key6": "zfwJLZdTuLmMyURVMkV925UKBGy11f2rPQ7xvv7X66y31bBDgkeMd4e9MHUMP6tmfiwVbrpwrz5ZgLY4rVdK2aK",
  "key7": "65Wbdhz9E3otjHVYyZKdnUB99y4Ck495RdNzpCE3TVX8f4bY2JwKc5PedBw22n6NFL5pj9RsZWg1svtKipFP3jSn",
  "key8": "2MoVQJyGeXVcMR4k6avw2uhz2P9UykGv5wrtupQixNs5DwWcY9txdcWUzaC4MKDMvwAXkM9HoRNdV3cQ6nXgBy6u",
  "key9": "3RPLctE6oRuMW1BdVXjr6njnAinuayey9WwLNc7A4vHA57tDcb3kh3hxEXJWYAniMZfTpNBoCKdgQJw8jGfNariB",
  "key10": "zaXA9FpGdndm1oSvGmYnVJwzEaqKgWsfsABNqydpp6UKfnhWtARcPLDk64HfJjyo4QVjBmMjE2o7feiEBX8CTQG",
  "key11": "xM6VUTFioZbURkmNp1Dt2JNmfCtqkVX1XMexhxw1Do1ZLa3W3C69CpyxdZJHKJy76ekWuViSnqaEqLRZkT7WQxf",
  "key12": "4tPwrsR4mRpE6FvgrjFhgGGhdsxBLEsyzL3572DvSTvu2D7MR83WCUNjJVdgcSNSAAmkkKh47j56VGsTsncKfmf4",
  "key13": "4TVFbvAAj46NsQW2xDKUTiaQPsfesVFEYCuQJf1SuSE6FjfvMiGHjy42vUHGTkQbYaENSruXSQAJccTnesimPERn",
  "key14": "4XDQkJTmWxJD1t1MbgpmZtiEa9hTVzqjbUpXVFFvH3XExc3fY2nvXXFJqH7fjrbEwLWpEhxQ75iaS7L4xqU9yAgT",
  "key15": "5qivAAVP1Zp9EQuL8JUrLDmgoHxfqmXowHJWNCELE93ToL6oMVhRQDWcZKYbxWNyfcFspKzTAo2aKvhDSa957uV7",
  "key16": "5cE5u1xUHdZiU8ooURLswLp3eR2mtLZfXqtgP3HS44RCT1J1xWdavbWoxxC7WG8XdhZvgs1kG4YueiDJSeQSwrNa",
  "key17": "25JXNSEWQ2At4ZkEYi7gEeLeZidRj4FcvCdnDa196keULFEXGARZnbBu8KNGiTwZR37Vz8u5K8LEPv3h6Avb5f2d",
  "key18": "9VEXLNCN45DEmu9FrhDcpLqfUuuRmAuPZ4K2Ng7vxuFqpJNxgiqsnXLGrRF7eoLDdrgL6B6F4gbDF2sYMFQGrrP",
  "key19": "29fTis6v17YcsSs2yH8uD6wk35FKiy9WdwNBQdm1P5Qh1vfmKqS1z8WMp1cHJVk29TEgiq3m3LxEQtkEwFQ8Ghhc",
  "key20": "3PLR8YDGE1qfUPUK1Xot7kM2tw9SRcoav27zNBiSPrQ8AqTaRZ2dJ2TLrJcyN8N7fGyhh55cALFi4gFz26MvZ1fg",
  "key21": "3qKubYkLE7W4kDp36wdYdXaUQYwVdku5Yog84BgHDTFr9xYdXu55Ub2YDi3U52Y71eorjyCe6vGvR5gukGM62nTU",
  "key22": "3QGeNngvWhGkHZRorrix6CFxcJgNJXbUVbAZCQbhoyF3jnjdG6yB5MeSLXSFQr1rp9AgwfFu45aVc2RevPCC5WHu",
  "key23": "2L811Ru7UVrC6wqESLrewKTqSgcoec77sB7V7L2ZrMqkBwyms5YMFLVSeqGScdoZ4QPGhFewnmfGg14Rcq9S6gvZ",
  "key24": "2M3A2ftS59xZXD5dp9cn24a7BfWppKU4jaoiYMZ1AGWF6aWF4kQDi1f5bkWrpXyQnVyymj6Y4uxvs2yg8yxhDVkk"
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
