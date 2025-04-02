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
    "gFDmJP88yN6PxQfo2VCWP528eNPCzxqRBHsuomT7AANHid1GFUbKCurbyCx5avBds4kq41KgMRtavmR2L8x4mGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279W9d6TcZebmYE3NrbfRDEC4NDFKePvv23DTb9Arv2HwuvKDKLWiJVcEjRt6ZrgAfc31SxuJ2HEyFGsCqtzij91",
  "key1": "4g22g5wLXY4NrV4dp8eu5Bd9ZqndLru5FjVq698HAZEv3XxuP98LMaff7uuz6iL1VDQ24Fe3R8YGvszGXLPEuXqG",
  "key2": "5QBSP7tmCGpj3geqirb2fgDoy5e2Vve1BpCnZv8nhSzrR3Vb1qeTnsKYJrK768SUNCH1fMUDQNH3d34X84WGrVXy",
  "key3": "4HdcrywQhqEp3XXDHUqBEW4E9QB4yqtoDGxkjZA9XPR4pKPTSeETaq99CMWjwMsGwmwz1KEpji1848oQYGTYMkNZ",
  "key4": "35CWAEzhosM5m4fSmFM2XcwD5h83wkenjWfXSAUZE4c8TYeuAKn4J1UtGbPJ6Lbn1SUwpLZaDqH2QZ3reXp5xK6P",
  "key5": "3FdaA1R63v35B44wgAPQ4GYAjKrAKebtJeP8v4buBa5BRUo5YLyP69xGEDUb2yHTJdBjNKvrJim5dKPgd2xjUqCk",
  "key6": "AsUpw8rBBVT9h37PNrxWpdRoCxxB9b7XbWsebpn1FZ1F7en5m3Fs4uhH882DNM95sozXWQ4xhCfduN4Ya7Yneox",
  "key7": "5wcgkV33J7EF1PhE8hmefeKroxiZ8WnGBgds7FW64qbzgAxvBJtAHre8VvaTKSEn15C7qeC8MnM21PcjHahPu3kR",
  "key8": "4cVLqYnN3MvLHa2q1cqosWrQ41FtQ6oXMDzW8p2d5hii6nZnKcHH69JXQBgYEt2cNcghPpUsCtY4KQofHtrMDNwN",
  "key9": "4mqLbEKx5Ep8AaZghS9Rg86bBeKrLCzfW3u2mkoYt5A8cFybnV7RjBreTEV2f7yGf64AZ6ZcRomXwTFVEc5zreYS",
  "key10": "AgEpjL84Nm2WxHReVnnLibu5hr1Ysifa9QXAtGGMdHVxqQWvN1WU9WAS2QR2NGmy6LSi47JQje4QifdYAmzoak3",
  "key11": "3wCuZZrGL98tbNnhqNxVzWyKorx9eJ3xzCAPPcJeiRreBBz8qsjszpZ2a4gTiJM9htsmdpNbhpgWLdsqULcQ3nJj",
  "key12": "5AV7Eh2LC4WwF7CYY8LtBd7191WWxqAuoJ3jAier4XqornHxy7Rt91Hc93SUpz4pgiT8wU3WYeAPdtmWVRQW4kby",
  "key13": "4Ra2Lj3Jetaqhpw6rvft9ypfTbBexhyQZRubscNNnxj4XAR3S136FTwBtexXP2rgMgVVzVjLwLLbkpoqsmKhY2Lp",
  "key14": "3RwuGkk53hEFgLEybsgUq3vWp4wD9eSygWxpzVFZwtXQGDcpuMeCdMuUjTYaSgoppTNLJvj5MnoyKJqx8qD14vsb",
  "key15": "2s45EUq25iUj7EXVnto85xKqaWUmcBKXM7iJbDyNvoFodb26i4tDuvj1RKMykniteruKJiw5aAqrBxcUMBE9AkKN",
  "key16": "5ny61erRTWVzCCVhLHmM8awtVYjbFAUUxvdLkcM2Pz9X2R23VrweFnBM3CkZD5ZHpj3AyK4byEo2c9D94RGtTQkt",
  "key17": "24UjjYtPxfS4nH67zUQednE8wuU2TYSNx4bqRf4T7Fx4nX25xfr7vL2FkFKFb55Tiuo9jjYcSme1CBTgdPxbAQbQ",
  "key18": "4AeRNhTKzc5DsjNYs3oTxfG77Dnyxsq6HpCeZFstqJTFnbT7dSGujpz4X3S3df1U9BGyMxGRBsPhZP244r7Pxuyt",
  "key19": "3UCDcjqiegPfs49zdPDPYJ4t7qc1gAuWGHaaANUipfBhxoD7FVWhKbXYtDj3r4PKHonCRvJ95CCvWznPuEhKc4xE",
  "key20": "sLWjgTYbi2EmsxCdL8jBXunj8w597PpiMxEALWEqzWaSm9VLzFmCWingh1Y8wSApCGLxJuaZ8txXY6zew2oSvUc",
  "key21": "3fP7dnoAH7z7WHrJtUMC5G2NdMNTvBtAKdae2FvXiJxRteTWKUUSAwNa2bCCGRXdxQJ5iKFc7KzTD859Upp6PEoq",
  "key22": "3vSFqbEgEUM5JncYvGERQv4ZhAFNqUUEHKhhUDnBKfjS6jwq8UEPwP43AY9UzfkXAuSVfSpDy9nmaPAi3v4gZ77S",
  "key23": "vfrpbz4a8fLpWfYDzM7Yqgzhc7dYaavN82S6sFv9rvtzbpT5e5wtfbSh4eT4LsMWQZTHxoS8dFP1vnKz9vb4zGB",
  "key24": "CFvDA35LmuUo9vnCkRSLpN7EAPgGvyWr2yUYmVzexJPPKXZptfxwJQd4HBD3zAJP4wyCyVncLJhCQbHkmF6FSKi",
  "key25": "4znivSSYSaovyDYZzhgeWwsCWWij9DFiqEtX2YZnwJxQHe9hhw2rQ7Cj6NKMZ3oa4Z8x4QkZi1X6QrscWg4qTgrj"
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
