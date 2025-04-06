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
    "2mFm8fBNtsDdSFSkLSAxTkrmS6wYQ8EUb3HPrg27K8YSuQXXfT6KUtDTJ7zG96vLCr83aKJkZSy1keKB9MetfmzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REnJgjE46Mtq631ne9vfkCYckVi4v4ezgLmf5jMA5Vfv1WzQbeCeYw7EA6ywjKEm4v4kxqjmeUUW45tzRcCLtho",
  "key1": "4mEJ4RGkTpffR2GGF75i9prwBjBjF7R6nzKUaSBG2NX7QmAgTQa3TKheLFFigj71DxXgLQM5ikhkz2eoZ8ZcbNyb",
  "key2": "2TfzCn8731CzUVtQpGS5GQbmHH7tu6qnAy7LfBvrteEQCUuN4WcbSUpdLWVv83M5k1phccx71sTZNbr2EDnzTAXx",
  "key3": "4WG8ptvXDKNmwpfHKH1NyhEsGmNe1uagdGD7Y9e44EXbPqMQRxrP7LDNVpryaYPdTwKpSh6xbe1GXxepTGaoagTc",
  "key4": "25HAhcDnSccT4DpAH5eSNWQRG1gsrm7P7WwceBZ1a7ck6q8Wiz6ynTTqUkYe6p8DpucpAeVcUdm4fe4XHbdBUPkH",
  "key5": "48cKkB2CFGp69ZQVW2sKsrCCb7oVFmyUY6DcJtkXmh6ZHSZJ59e9LgjgyMhzF42DKHR8zDNnUfCTbBvFdJU7ZS5E",
  "key6": "4q7athyQTffazHkYvprDv2GDEVVCiyo7Up75sZqHBZfj1LzqwhfwZnhk6MawaB2DvJQwJ8iDfGsY7wvRQqBDp5Hy",
  "key7": "5a5ZidshfRE7suMFg8jJmA7U9XYuMGS8pA84ZYZTnsZAqsQ9L3BC6o1zcgWoyaSDX1kAyqQvR9aKdM6m7c3tcHTa",
  "key8": "TvNLzjAjDKv2cG7kYDaJPQV41FWHTKSZj9EX2fXHPzj3kZMQGAWQccuJTynBhE4sPNByDcYiJLchhsQDXAKh131",
  "key9": "NhKEwwb6MUnbgu75sZ64EdDBGPy8J1AW6ucASmMFDtPXJunU9gcxvjYd7KnoJpc6xWy5XVPjd4iwkjFUtgQudEU",
  "key10": "4ADHZNe9jshwKhFsWiX6Bpr9DpiqKQ2HvhQ5GzHbzpEprDCkrZG6cbmZVsg5KNKjZA5K6jxHLJtgdz85EpdtpHQ4",
  "key11": "35pRn4ooqMFjxnP4p6iCkw8zgazMxM1Pxn2YVxqzGuU3YwprDrKTLSG84YjjgXGwGgczHhwSdBRaJA73LFSR12yG",
  "key12": "Q1SwdcmBP2XU728C5j57KL4x11sU3XLex7iBADrSW3xQJbQekb8T2T71H6xjTBZbcqkn32uQ4PehoqhVEGUoEoD",
  "key13": "VBuMjNk29jqa897crGSpWXfwbebVgWXWd6t1mErxTLswjjSVx13NDBE22kqLv4zuxeErvJJtbtKxDjJWQoyWYQx",
  "key14": "36F5s8gwfcLjxEU9FAz87rsUaxG4pTyLVMZSYQAhnjmCwD1pjVhoz6xBhpZwxpcsNNQFd9SFmo1ueq9bFxTrXbx1",
  "key15": "EuZR1rX24pdMsX7Kmdixp9npW44ybbNV1W68njw6HCdfTnsqj8RFp7f8hwQQCK5WNo439aCqL1yuLSisw5g3j2b",
  "key16": "ToWytcnd9PwQAyJWVkne3c4LEmmybXVTGPgGT82FFNuiCSrXpHqPEYz2GhXp8f8LYVSawQWbFQLJKnuY6DEgaNY",
  "key17": "2ejUZDfjVFghM7y4BcFbpPgzuo94Mg1qjFJaiiUFV5neMTfJT9TziWReQDsurhLf3jdwMx2v19SBERbEguSa5aWz",
  "key18": "2gMNvBijx8ALnxmnkv8KBS4w18hA9yFhayoWjz9cbyeNR2eNUMUtSyWCr6GhF3BW77PiXHTsMLHnVtpEJ8vo8LbJ",
  "key19": "jD9DsdoaPrqbNk76EMSa8J1UYNepei7mefLxKuifqNxqxLVF4cezMjKvT2s8kevkDto5FzodJKoAVzn4jQ1KV9N",
  "key20": "vGSCyj6soGiRSBbys1CZz9mmYvGHd27pn9LziJcpvvZfRm1EH8biu4rozMqW9SPQrX8mdRidhctGJRFfTAPx6vv",
  "key21": "2x5SkbiXk2x8rgbWK3ZztJ1krjVfzNLN1BFE7yYCcxnHMh8M6JqBBPEfRxUwPBvgaZxN92yr4TvgYbBjji8SqYV4",
  "key22": "3UTR2oRnLcuRvfW9gUhx3XX5DYiRsdqT7aHHdVWnbkQepdRueyvFkMHn7sYtrpuFprtnTnxVNzGdYXVAYbgkKio4",
  "key23": "3FFfA9koo19N1drQcdzgrQRzqZe3t2yABmeqHivYaZhf6GvhW4gMoZswddoqTq5L9fW59YBr8oCoHKx2wmYKYdwQ",
  "key24": "5mGdMEtqNW1XVNBqLsdCThYVfEjNd2URPwrzSNBoWfSNvBdHWJ1psKTTsccoDXdwNdZEJLBY5Tmt9t2Mp3kuPDrp",
  "key25": "4SAVNCAwVKdZW2NZApHxDEACU1SndXhkb6AbaJLM4jKhSXnNwT4XvJXJdG5xpdZ1MthJk7Q9wktNgHurY9h5wp38",
  "key26": "H6fAdThwv3vKRmzoZBBWJxeMJQq2fk7ZLbyM8S5YwKu37jphegzGJuK2tbx1NhVK4p4QH6Jn52cwbTPGqE1zUPF",
  "key27": "qRVSzbrYbwBdTgJP49B2dyxUDUaEbzHH1uKpX6yVg4WxymJwdsE9EjcNRouWmZhexUvyBt8J3y3BWUiuPVrMQ9d"
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
