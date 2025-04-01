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
    "3iZ2Ju8Tv4uasHv4LMHCiXpFWW7YfF791jbaTM577LyuczwUb5fssBLEywMt9sBUsS7Lxx6nzo6ymaBr1FFDwhrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJX2T8XWUyxwGmjznKHvNhcDrufbTcasAU5W9mjN9qrSi6eqdHGrMjCUKPoDJVctexAqUG9KftBHJJM5Mk4WHph",
  "key1": "2eXacLQxxG3itp3YSUf3XMa1DF1Fv1NbR4SiqvdBZLdCstDNSyxDmaZBz1B6sWGmb28yJT1gSNX5g42jpcdt46YJ",
  "key2": "4hatkejeMD2NSYfCVwEEyUXWibdpa1RYNXVir3HR3yDgSuJ4R1iWuv4rivu4AvY5rUk51Frh7FvakgVY1wGUDiGh",
  "key3": "48pcVarAjA1GzrPKoQUEbwWrWaWtVkhw5B6BxxwG2VSqCkrWMX8KZdVFsd9r7Zyf8d7gYCha3tAqS1bEtqb8h4ZP",
  "key4": "66rcCi6HiSPoX7ZHJFzvGGU3oFJibz3SeFxTBW3jz7UpgsqdNJ2kxhCt1optooaoTrb6VRvkG2mWGXKtjsowqiHV",
  "key5": "53CF6v24pXP45rwW5Q4rgKCy8xGBNoyYZgaComDCyF6zPfUKbZFuDrPPEkTW6sFJcHEvdvjx736ztJomkJ6fS9AB",
  "key6": "2nbd5oVybKsJm7yun7CosRoKao1EWjp2TK4Zm6J9mEoD8CMedB7T5Qovpei2kr2YJ44vGBuJqvFs6uH3TXbw3mut",
  "key7": "3zAiL1va27UQnQQcFz4cnWHMUNVDhXZb62ReRwBhgHatn8AycJbZjaWBS8gSziMPBhQijd4YbQ1cHKk644ThQEAc",
  "key8": "3Bgud78avZ2BcvXaFihcxui4BK1Y8wGUixNqjpCHpUgettn6svxLLxJAbh1PbjCVH5V6oTDjkuoQsqmQBPEQJsiA",
  "key9": "4BzMxSiP8k2YwJstLQSUDgf8Krfvg7URY3QwinEYcxPAtxz6SCDrWa9vnoSiREqJsR5qRcMsVPU4nBeNgQd14k7H",
  "key10": "57Dro2XybrSudPN9u4g3fan2a7KFQfeBjKoqz7oSefwMSsjWSvtGzgMs8AGhRED1QTpEi6LYoNDaTB6z3syoh4yY",
  "key11": "3NeF3vQp8iDBsqnbv3dduRFivceX3YGTVy5GnpxQJ9c8oxQ2B7QoURe7dmkvQRCybQ4AHspzeigEeyZsnjGjobxk",
  "key12": "53LDAw6Yy4PqGTmLHDCuxq5SLmDFLwpd979W8pzzaJpyCVWqCqxqt7XFXyhEoQDBQ4xFuWShSLhgaSnYNfEkiW8T",
  "key13": "34JFGEhNinDdpAJDtAVrMAXvUxuHx3fUNoctf31rMXASNgsnckHKrkyCGLy95daAaCESuWKyq6RCiH9PJtm8bMCZ",
  "key14": "5Ptwg7knC5WqE6XLsTVAvRAGZRm7ChqKensuNbqsSoTn3RthN6K7MqqJqZkxorXhxQ1QW2BQLpf9zxAVUw6Tutsi",
  "key15": "oiSvg1oWBAoudMPcGvQWFyRTNz36Mi8SzAYtQ7DMKXij3Nad7YbReSv4x89u6YomjjfVroCc819VmSn4cLGncVJ",
  "key16": "6U8uYMCuYwXnwxvcmndMwMyBWMph1LfPm3zTtB3pnn9fQc9bPqLffXTfYkWjBGjzYW6e5iKjYZ7pwRUgX4X8Nni",
  "key17": "RPEA1xwSzLQB77RbvuDTvivGnFwkyJFzwjfzwSMRdgk21xCeNDyCk5tmmhKUhX5LbHbpDV6qJhvJYbWCKY5BoNG",
  "key18": "32y8hgGiKGkN5fDCDZE2h24ZWBQPNj4eeztUvLzK18YtkWsdkURGmah18ggAicdmxUrV2byQA2Nf45e8VXTcVHny",
  "key19": "2gEr7Q2devCSfb2HiEXGifFDPwEdHNdEfZVCSY299aucHDgFqwEq2A3ULvMaqpFJ6VHeaw7mZCr2guiHarVSzno4",
  "key20": "2WJMrwEfBr8QsA3oonRRwxk6mLyhhb2eNjgStwaX1bmHiixJeWgKjsT9kqGzsUkVBUAPRcoC2zCYQReRorruHyoG",
  "key21": "4dAP8qXoissgvRt2DZXSqW142cb7LL6zNGiL2f8dzTNjYwJyPBenToRnuBDhYQKgFAD68WvkHBcR58eeSdkV115x",
  "key22": "3HLrCJhU6fP8nfLnErbCBj1GGZS38NGkAwwFK3Xs8CszKQtnY5T7UAUZftajuYRHdhmych5NEwCTBJfqDJeRGdjW",
  "key23": "2WW2VzLoPV35952KNGdouwiSw4w565rS3unrwk6fDWGek3EtRhqGw1NKQhh6iRcRyo9nJPrKwLJWLrHxp3N9GjCJ",
  "key24": "5KbxJbZVKybo9wg6HZEV8EwDr59ZzYA3uXeLLWsAyGrcvSwtZYRcy6GwRUwnGfXFuBpMFRc2jndQHkxikpumfRxA"
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
