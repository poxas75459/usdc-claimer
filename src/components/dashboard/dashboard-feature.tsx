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
    "36jzABuXrjfk9jAJt7eJDSCNCnSgF3a4EY7d6949QYPNGaZ3wsd5CvDCQbLNr3KVfVDWjMFHSgj3ESWEW8hkWp4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsmwVe2eMu9dX9rgHdDEu4x4fLnNTF84JxmgWoQLe7fLq1TeLu1kfTkSFTTWZbE11vSR26rKhpdgGFYQiMSkkqW",
  "key1": "5rgeVSnNdLnGhaNCH67ExdoEihZF7qaCLX8sqEsMFqNS4tFqaTXGqiquJijuUDtCPudQ5q8HjgZcZ1bTT73Mzbss",
  "key2": "47N8Cg7cbqA9xDoLow6tSsdReGuhYcmnDxbFyhBGzerkA8i3qbmv3qBCkRjPi7kxaoCEf8g4N4uNMrkhajHFusKb",
  "key3": "3u3SHKyEVfA7Y8VVX9z34s62i5AKPadsnUvSiJF8jNkAgdiGCtkXSB9ErVbunVSv7otDfdFWXEGyxETZXp912fxq",
  "key4": "2ijp3DEysct1rF2oGAUZnt7cjoVJE8HEqGq5ViPNPGPFVNvaZeHRLgtZeyNWuJGoUcnSHHBPDgyf12vTBFFgHg5n",
  "key5": "3mau5pfVisKXyrRtykT7eq153AZGj62JaZuaNiU6ZLs3C7B3KUtCKDyCfxAChtCsY3K8uvEz7MopRWjdiro41i1X",
  "key6": "ufCKrrNKRmVgJLULhFVoyJqHszCUovMh7FdfTzpXPGkpfJhTnBitXZ9Kx8SntUPCjGMbMTR5K5yfgytkBXkowKb",
  "key7": "4ExeM9qD5BTVPrjEWpwgJLSBbXLWHFXXkQdRJd53EmvTtbaJTkCnfb2J6sZ19x38ECPU3YHGckbDjdLQFr9GMrnM",
  "key8": "4H3EdQBNz5qQZRss9nBDThXzKLPbnX1tXdXtmiX6FTfKJPYkZTn1zWBBu2cEjaMoiPFVPWaMe7P6yt3M8jWoWwnC",
  "key9": "2DNDCBKDcgB5RGMAoHqUvV8AtZAeSMZjqLXRGtu1zGDFSeEWwzrUWPCb4PvVFWvQb1RY7FTxABzMeg37GBEAVX1j",
  "key10": "629FnTLxEyHfZPPbdEgCzp1VYm12FxonHL1cHLtv5S6wzbcjfUsX8Z2p84JaALh7RJVVYQKbcZWH9i39rgVRDUkZ",
  "key11": "3Udnv6RzHt8Yw7vT4nXBjQHH1nPYcUon7tTmMy9X6UvTKEw4S4s4U8DMvT2R5m6wTUzXUcEzxQiqUFG5ejkVQa87",
  "key12": "41HM1fnGHxSWx6ncEmQXLc5G8JY51d1hdFH29sM67uUAUyQvhVECs5N3XGFmE2YheHWw2RNjuQ9GSbpgadNSfuMD",
  "key13": "2BTpwieT3bEkRczDmQLmKAVH1N3AoEfNPTQVn4fZtimjV3PoLNYkkfAXXZK7yDswnahwJpbCVassZrRwAXo4zsz4",
  "key14": "4WCqU58w6yccgDzD3twRbYYgxuDbx47zeNRrGLMvoXvifYKoFEUzyFx8yMB7x5n5jHUv7pYcZCTaVpt8GiQcnTR4",
  "key15": "2zD56V4YZPVWgDgYxSKrXAQyZ2eeyXqJvhZrHJNwGyAGrUj6XdwjWvTVuD1qhfv1CLYa4Bhmsdd22zWCSwWCjSzk",
  "key16": "3uoRvWyD7QHLib9pw87dcoRkAjV22NKekoUasdZyaXdvYrm8mPVNoot3iTNsvuSDUrAQNgzcSpgWeNNaoqbAmmUa",
  "key17": "Sff9cfHPaHrGxHdpmNuQHgMwATzxrQgmm1bgfrRYoP33tNRBekeSz7qwDSpCV2a7ytnPgMgi13UvYCyX2yjQjwy",
  "key18": "D7GTmfq6kJ6BuBboQsL4qnd8QrPoPRuTF9ccuYrTQRUeRq5sQ9w85iyNESaHH5kFTeXaPMYks8M74nwGNgY8cWP",
  "key19": "Sr8669ehUy2JC19Mog9qSS4qmFSWhkJFqENXr74PTHFKRxcvXQVULZmisodzy4tDveKhZPHaGRh2T8dU92B72b4",
  "key20": "3ND77VEA66oS4No1hbdyJejcC2KyuBh3jjkfwA2swzijHQxURAij4nULbeoPz22SHieuXfAZKsh7UphwHmchgMWo",
  "key21": "3MGj6hM7w2LbNcZ6tu5i1eADoTWmik6D8nJnBAgzTwGFNHxU1rF6eLdgWL1aMQRHuCPZ3hzXa8nPkgNbhXF7oMZa",
  "key22": "oiPF8wwJMZzxAHG9QT2gfcHNNiZG1PhTAVTs36CvhQzA6tRrDXZPgX4d5NdPN1fzdoJotmJK1UVRp3cjhgwAfDZ",
  "key23": "3ojhEWEuVJkFfcSLeoFLojoZSfnMjxfwWTBS228NtmotN5Tm7kaR11XFtXWQkQuzYmBKVmiQFfmpkjYGmrDcmcE5",
  "key24": "5nmZJTFH7mndtrvUWB9d9NXjAXWksrpZustdVth84AbW5EVNYqBknurhp8VTpZtitzVQ7cVdWr3wr2ts2DveQYLc"
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
