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
    "TYQ2ndHvouRyo1qM2oDwai4pDRHisn8D6ivNqdnN5P3Rm3W4VRwfUbmtmiH2UFVzjQ9S8pjTiAX1ycPGdRakSgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDR9HUEpcaX5Ve1vdENNWmk6DHpD9SB8HnBThxNXc62Ui1L3SfwWu6uA8Ry21eBFQmgvSyRJ1ZgWipjbPvcx6ua",
  "key1": "v4C4ThaKZAVUcbq8VSj2zs1qVzS9PYjY3pMTuPVzaJsStYvZ2Ht3NrdRqHBFMLBybSkLjvEibg88XtF9w71HwTn",
  "key2": "5QYkwvamGyjeU3XC1BRGJQ5hLkgyqiySMdq6nDraTyNHtF84JWgwibZpN5JnU32BLSFAoFv8Sd4TeyK4KuvjgjMG",
  "key3": "3teZQKvjbcmxW5FASeAeM3gQGGuJ4EG6hrT3zQ4QpoMkMXRNAo5BPLGuj33rtuXT8ECXYiuyU9UPEGZ5g4ytixsv",
  "key4": "4SM2kHWnqugb2NVcjwwwtQSP46wDYK3FTMWV2pDeyJawp4x9yyP2FKgnkEQjvUxLEuJfwpbPXQv2mNyXvmBYqyqb",
  "key5": "4UnCsfVDc8Q67rs79j9uMdDAJUaAcsNXVwL8PsaL6Q5UZibEd8g2G8EkGmoJXSJGAU63tU23egWM8YYiiReeUL6K",
  "key6": "5aZyBWe8wn5jrcbdNPSbcTvNiJNHchHX6g9R8o1VG9UCjd7vM7xxM2f7bqjjfeV7QL1qn3wGzFL2QE8ZxS9tJiT2",
  "key7": "67c3CawFQQK1r4vRYRk6znCUcrei2PVKVBsR8D27RasQJGkjZst6NG2gruR8y6wcDAg1WgjHfH6R8mx44ESxfoaL",
  "key8": "3BkVbkYfta1KcUCPsFyFnYstjNYSvnYLVrPiSqXWdWG5AgxNgtqvEcWULGfgyJLSVeFj2fZr16dyJqwuV6UMuuFd",
  "key9": "4oGQ7hm1BSWUxtPsbrafZWQEGzhhRTiFyqYj1m6ZGnprQibFvucuyaLy6FCqNPGwWXJz1oV4hrcJHczmZQH4jKP5",
  "key10": "4gQU1YQxnS99QCav2n8aQzkY3ruhz8sg1Bs5jt4fu1B14jVXLUDpGVDW11MAV37YnqG5zk31CqbD5uQKuHQtRznp",
  "key11": "Gtu1ck9AxddiWTGkfUAhCnzkxeSjWyTtMh2ypvE3kYjZCn8NmNzPKd8ksEkYhD3efMvCu2VdeZsFG1xZCPFZ3fs",
  "key12": "3ggML8DFrSaZgL6XkGAqMT1mj5T567SYZbeHwrKtDfP5vo2X7mH4bcCKDuwdJbp5kDaCR51fkAYV1XZ2eG5HD3TX",
  "key13": "4ewkWREFZEj8LGN2W6TjG8evtpCFa5D88h9B5FMmAiCxFDKdJfQJCtrgLP9J3pqgRuVxsaw15w9X7RdxYgZywHdn",
  "key14": "648HFjWWphDakxQZV2favyjSbwZkm2LTPPkF466Ci3jDX1yT5H9dNZxR7GwkanRAShaB2cz66Hvw6akT5RAWTP4J",
  "key15": "3GYVwghX9BP7Pom6cDDBS4PQSdFZKoJHhutwXA7xXHFEJq8RQ9jqvzT4A8MthubrNJ54abFAxwUhpxsZCD7n73aD",
  "key16": "5Gwqugf4pLu7ZvaixCj1gjAViqSFnCf7kMS27b6VrmRmHmu8idRhSJkmoGuwsBBrmtt9VtGDDYfFJA7QPp14L2Sb",
  "key17": "4YgT1eC9izLn27PZjsHEnkdBgg4czyJUw7jc4x1n6XXL3GAkj5W7QwkM4FsdttwzBo2rk5n1cJ653vzps4GuiGZ3",
  "key18": "4bxKyoihytT9CXmVR11CXjjd7CumYwLJfFgXox2ZuyXJUcoZ5GyqQdNVnJ7XSq7xmRe7fSYfUpyZU4gbKGtBMzR7",
  "key19": "2JmBmyZGp4bZdaMMP3G19AVeyUH8UdvDzssTRYtKUBq9tntiHjZ4YChcdqhovtYMueZhw6dpFvUmzjWG3kZDqk9m",
  "key20": "2bm61RiZczzeTEMXdSRedTXFsr4LsdCy119xrrJMjLrnVEXzcs9mkVVG41BKXDbypHTfSdFfdAc1qkXFPMHUVd6k",
  "key21": "5zPWCf1N6o4Q8CN7YR7C7rNnnDhWQxTU8oXeknsXo21BT5L4ykcGaTAFW5AZ6itrbvykhLyKdiKuFwk12WrnczoZ",
  "key22": "5mHRzjJvpPrSmuMbueHkPh61YRRRmpfRGMbM4rU9BrSo4fwXiybzW5JDuv9Smrb3op4xwuPjSCq3dL3P8TZn4Pvh",
  "key23": "5RUSKTSATunLWzKEgEghDJwjgbgdMv8QHQcBtwcxPSBABiZ8xA3LiGKuAVNa2F88auaxcTSbPVgd7pomF5gHsnh8",
  "key24": "2mg9LbzKad91S9Arxt3dhk5YyxRbxG9H5yB8nG54sVF1PWwuikM9sZKKzqtzixB9HhWVQZjTWniw6iZM8QEeoacW",
  "key25": "2MQ6WUtgLWdqBbXzV624R4vN3cHBXFhQsoh8UVhbzLt1tNvpyJoXW2rvJGbsL8gJLmRX5wFtd4gfvTbcLc3gHA9q",
  "key26": "w6FaPWLiVe6Z2RtL6ERKSzDNDP5A3pHPyLLj7iHwtZEtcS83iFknuBckRCA2foEXUFRLtFkGY1JiyP8Wa8rwTR8",
  "key27": "3spZUWpnkxzh2zBtrpHZUYcuVMakQMjKEhkhFe9nG4mKKW1RuGxr5UL8VNdu4A1zuyNzHypEwRc6HaQskLk6yGvQ",
  "key28": "e2g3gxuyqoPDYgaKCJQ8EvXSqFdJ63dCnFj3h2dHhjwjpqawfokuW58Dn1gUbSd8NQxRWbqtMt2kbac2aN5YGfX",
  "key29": "KZd7c22P6qwD9gCpcmkdQpSi8TMGTBZQGcdNNQSFgELHBi4NAz6K22v6sLZrSi29wLh3S7yhAtizkzEcjeQ6CwH"
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
