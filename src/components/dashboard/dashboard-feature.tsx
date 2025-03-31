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
    "2hw8G7MegU4jPnSHQ9TRsLSDtZtb9HzDvkDQVmxroBS4ZzWi9vDjbgoStswqDvZ1FDg5f23vQwKNCwpfepP44sNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yr1pZQ93yJftMwquyyhsd5on6s3AsaNBL1ezKyuj2yJ9xZBzZcXaDp5LQPjWATb7dnnocgr2H6uCHjjUDo7EcxG",
  "key1": "3octGnPL4WpznUztqUnhYuwjgdp6vLHxZb1qc5LjMS73Qi9qNyVsosUVujJqh5cwrXiSmjHbKc8LXmUDGUJdNJ2g",
  "key2": "F6q9zgCBM4977ZiWxeMPCMP4FqJgsgUzNhxrdKhfutqQwCNvMpSjKNh4VmyaU4VN3VAvgHcmzqjxFrDNXpiaZNM",
  "key3": "28oS1v6bKYPCTTuTGjAH3sJK1CbrTrKsksnHpVsiSD2XciGYKVtASENy6m3ZYS8U8XAXX3jhmr6QiB4UZWyfRKHo",
  "key4": "5doUXwZY48Mxsa8gAH5mn1mvHdLRq99LZT1N5asxwCyqH38VQN54mbTxxkXA3TubuJZyePwbyUYZ8NsbXyJ5rJVq",
  "key5": "54RSQrqbv7vXBaun4DTaygRt8exUyyqbJoYZCkh5hRqxnYAS1jgi7P8Td89EeC5N5r9EfQQRtwFEaXqTnY69zoGn",
  "key6": "2GraSamrTau4ZiCSkgrZUWe6KYJLcKrdzgXmYghUxKgdLUrEhyhXb6u7bDqZUsaM7ceyN8deUSanYdBdS7ZX82wW",
  "key7": "2M9r9GyouB1Z5RWv38PevyoJ4yD2dsWpWh9E5YrJmqZGQAJRcXX64aGs5zUgvGz1nWgLFKUuRiSEeJ9q2FmpTAj3",
  "key8": "295kxsLp5XkKGFRRtMpiEieYagKkkEjtULeSxaEZqop2V8kSZaCvy8XU7Bbfb5qPrWwvCPPkZjdXN9PS74EZgpmJ",
  "key9": "PcJHSeDyCrD1JWJg7dxZCXT6sbJYvG4ptR1WdtM73Xi42vWGHdEcifM2ZnMuEsz7Rd8KRCawX387mYm3Q4WdfwM",
  "key10": "Ea9zb62o5F5ich9SDKPsybrE3VzeXtH8Gtb5M6yoHkCj2FFELLA8zVuY2LW2URhLaAwZoWtvfwCVoDmaz7Z8pa6",
  "key11": "811ToRGgubhTf2LTS1evroQ3GcaSTuWQSjmCi8U6i1WkK988c8XDLBCVc32vqhfz1aXeFnpHzZdNqAXmMjD6t9J",
  "key12": "3sfmyPcqngtM9NKKcbaAybdSky3852fEgwv3aGMoKgiTee9TLDkFCaCF5U1aXhcGmrRC69hJGnA6nAsZEKpopiWG",
  "key13": "WMAEQuBEgGVjQvfTuyuSpZS4bArXBXHp5UEktsFDa3Gw5Dm9msXaQZXhnzbPooEBWoJgZ79mhtxhu2MYj1qP7Mc",
  "key14": "481ZfWSom7AbpxmtZdj8fQMVhRYBCUgufxuPB5bmMr9dAfdTycXBxGX73zEYgXQJ1ik1CbgXHukjfui7p3DerA45",
  "key15": "4BiPK2UwrXFJ97MwmnGvULuSYYJihgVJJdY4nYMfUusNFmQE44SF7nJq8JPra9U5h48JTj6wR7q9cxUFqL4Jf7Bz",
  "key16": "25qduprAgEghERDSQSAtusotpMTRYocmVk2DTy1UWxEPRGi2vV4rU5VXcz1q9BJshhNFjsWtped2Q1xN1jht3fBS",
  "key17": "4XcZ5oMDEwMwRYYZW2xjhUNMAz1SDQjcKYbJTyjEfZkUNqskF2PH2tUgdHoUPk4gW16X8iRUzHNyKgK9Kx9nkrFp",
  "key18": "5aWoKcW7hz1UR21oQiopWmxNmmh3ffzFVuwbPoUx1fhWXZtUf5CMfz6BLYyBisP4oLXJQjPBaspHMwgLVmteh3Zr",
  "key19": "3vFoeuRBr8bFp9jyoDpawv8AbvU2inq8rDZyg3RfLNh2Ny8zmUqQ7XDogGEJvRmJgDAgAYDxoESJTk3pFKAdS7uE",
  "key20": "4pHznSpirZwUsrAUHnrNs7v5r7ekmMNgYmX7LqPQJjQsUkvEkkLkq9vXp9oE1AyKoBUBeuJR75z4cVjbQYz2dQra",
  "key21": "3qwkRRApf3FcT7MFRQzVtTEAUuLtCbVnwVuZRCADzY43ZXVAxBDUuaciiEqyBN7r3vibpgvwinRqqdEu8eFwZME6",
  "key22": "h16GsjbBDtEpqVD27cGGzfNV67cb8xiVFTbUKdu78FqvbFifkke8oGQ87DKuun9BWyjYjcvHX7LJRWNiSXSBrcm",
  "key23": "3qfCLL4AwWTL4ZesjWEYUgzoQBErycNDCp7ZKu7WZNNkL7YGS7e9a3kVBjScjZkpx3XKMwvK6aNngy4z9g7fRoT9",
  "key24": "2dcLUNXPu1YTdS2togNEhHKmxuwzyXDzLShuHfNjsLxs7nShVKaeHfjh6B9mfPEFbTs1XPE6bDcFqtzLVhCL9pfJ",
  "key25": "2CjvpTcSHT2ywr4PVKKBobEQB37Wm6ygn8nu9gyVgwje4BW5i4nqHrnVTgTGi4rGRYLnxBW7xkqktnHUdhgpH9AL",
  "key26": "2CXQe7nTAdVLBgYT3CL8Xp1ofKeEgs2ZRtZZSbnTwPvJin9BcfADBmc1MZ9mDsVypdSnVVProybiLBVRbAR5J1NA",
  "key27": "3vfuLKzPjzE7JgtcjNHvfb8VmY23Lnx47dxFuf3mnaC52qT3ra4AxrkEbShGW5XsyjzAA3KfW4zNjq8Q9Y4q5x9o",
  "key28": "5oA35XfNqDSxrvU7NHGCghmmofqtd7K6n5oujFUot37JEb4Wi5HPAkkLr1EQzoMgxtTRMRuo4w7m1cD31sq7zdFB",
  "key29": "486vx9CfyNCmsfbDEYvTxusYAazK6VDVGZEkmWKuUs1VAmHY6GEk79jJJ7NfhaebNz33wsjf1mVy7mU7Kit6bKzH",
  "key30": "37RZtk7i9dKAqF7htpCWvkoK7f5MbFZd65vWnfp7y1viAqLzz7Q8inMkQFFMT5cMc28qEBes7EYcK5DmXtYW5KY",
  "key31": "7PuqrzdwdtKYCzJBGgb6RPFbzRa5ZEno9SnwJfeyoGhy98cGX7KmQXYuxGyCdB2bVNvmr9ehYR7wo3wRYrtNBhT",
  "key32": "63sE4asVhhc3zmJqVnKvij7q95k7VnSzrg286adtLY8PE2BhodjYdJM21LYDpRYd9GW9TqsmAkwGTnH5NgJGUzUx"
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
