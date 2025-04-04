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
    "4sNCm3QgE7ucRr9YzcCHYdk5SZMfUYdWLdpDSmHj9554uogfV34uJmwgCvgfUuWjm3Wb86Ee2Ksa7GbpdvgRJt8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6jRFvML4rr9TTbHVXRAYoUEGinfq3zCmVKHHpcPDrJdUDRK5apu7dkZvXbiehNN8cfpERmjHx67QmtogBzV7Lze",
  "key1": "248Axrz2DotGmH9FFJryYrmzBrXFKsED8kEqjJ8LtxmT9zpxFDW98nbLHspuAoL3r3dHqEoqp9J9Mou2Cgxk7uEA",
  "key2": "9WCsURPZ5Wz9Y7QxahAvXrAP4vz2KsC2K9r1vvGz3c3YsygF7XrBS3sQiLXQSDu6Hx11YfnN2edBfJKBsXDHaP4",
  "key3": "Gf9tRmKfzX4u6LzthA1ZVjXUqRYzRdHXFXp9hjGFAJVbQAXQGWfuz8NnuDqaoJn6BhnfThruo6E1hqaiFa1Rf2K",
  "key4": "3RSf3tAQaRfVFiHtzNDSYYyS115QBTEoQFJojb7NRKuCzPgDedGSyqJj9PgdcszK43hwxzZ1cbDXoV24NbbX7ByJ",
  "key5": "3CDEAY3SANrUdNu2RVCUKU2kf55LBzJKdqyhXBQsFDZXNfphRGP4TjaQgbrmchzxDPJ5wPybNWRppXfVjvsKe886",
  "key6": "APqp5f17CjvN4rNd7gR9VaXWZyD3twVWYAFtvqH7Va8cyuR56NnP2wd3k5ZoWKNbt8dLz9WLA464H7HCSwASzCc",
  "key7": "5ve3ubn9KfFXzkfL34dBKoFbAYKnSnibs2hj6cmPu4ybYnyfCH7HkDKmM5h1R17NWq1vQaJ4HXp5XELCUxPrYcGR",
  "key8": "5iXNX8WnkcVMoscaHdF4f4bXjGh5SrJK9w8PYxaP16WsrhqeXAhv9VA5hPuX3h7Bh4HME6LdnQugQTwtYzZhenxF",
  "key9": "5ZqRARHSHVyuufQsq1rXgPJUJm3onvy6fn8orEU6yd8Fd736xezDPsi4erKUx8PihiRiVHgbwix1yzK8cjhSqspn",
  "key10": "3NzH4jTwZoiWDnH6fPwvczCnkbhgUP2jNTxcArTESgqgtfhvguJYiqXg77qZ7iFbvGgbn78xsb6LuG3dw3gb4PvV",
  "key11": "5ouBicMN3wi3N43Y7eCuABM9LDSjNzAc3LZbn6KvS97FyJ5U1r5UW6omFbXT7HLQUcKcVKRtTWF6mc3RQt7rqUpC",
  "key12": "3wBuXk3y8HmgwAQxqdcTYttPkR9y7Y6KZhuXdc79o4nEZjhXek6EJE8iMq7fJiVdfougqgcNQ9qkptcJqw3uNS1E",
  "key13": "ZjsvsJ3WGjWDufUtNKwGgDCxfmAPkDQHr7Q1yinBrkzWWEjayXv7KQQgxfe2gHDRvzPmzTohkYZJZEbrqsETcww",
  "key14": "5QGiDAM6HPLUmhdAMFSgT8TffqtYLPSLZbrk7hVN6XGPcuWaK8beeXKb5Y9UsE64UJu84CSFzZrvgp6gWovLeh4v",
  "key15": "49soxbLHsy9HNmqqxmbQejjaLMSeyQbUizksazZctfuvjcCdjXEKQKc9syCfrwPFf8r2gCi8XMWCufDWz8xBKu9E",
  "key16": "2WrZVvhf9UnRSyfoNB2ephBPhzHTW4degfsHuQn11QexuRdXXrHixRS35ByAPAyVySViHzzjuT4fPVWW5D1JSzgE",
  "key17": "21QXif6k44qbbyPJEnG3Yoc7mp1LqHd5MzUMNpgZ4Nr3rWSMz2Wu4zyGJBfKEVjwMvAjkoBjAFb1ereHhw7sRDMS",
  "key18": "35XKpbg9gG711wgDVQY2TfQZ35Hs66aMdi7hVU7ETGaQ4vMNQJBRjjqdiHb1N7KWPiH1kxV7keDEX4Y4Ww5us1or",
  "key19": "2LsEvfe99roCBTWj3ZVkDzmArV9q5S3icUXaSEzMuE772x6nPWNNNCkG6dJujoHn9VFbjHYZCZFJqEv9DTyCXxNt",
  "key20": "CY6ezGCCeAoECfwgRKna3UxGCWkqmmnp2XjSXZ5aYUfkBVTHVdrJFse3HZVRZTeLXpsMKCP7uEYVAesx7vH1wGW",
  "key21": "4KxyHUCPKTvzveGgaoNPaZpxBpSj6pJUR235MEjaZsbSt3eNHZyC1Tsk6LWfd3zJi9zJt3U3XkaA1EgQPfxZT6f4",
  "key22": "4k2RX2BWnuXnw2R4yuFnHFj2BKWiPhutoSCdzfga9jQSxf6YNRdXouC3fZzVjePGji6McuSGqAavFwCJguuVJjdo",
  "key23": "dj87HmCKi7ysnEG1mdwuNDHh4CnFKHg3MF8fGmLJpe4fiZvxC7aaJMGzAzMMQwUoU5tSzpczNhLZEPgPRDTzULD",
  "key24": "3knJDf4ppbyc1uFmEtC9kfaXvwVNmpTNehtpm4ym4qf1XvcDWkCqTpfHdhs2mHSaoZ1DjnXrZDgNae5srGnV5n3r",
  "key25": "2xooLooe7bZTjToamoD5bof9ZQPjKeT8bshK2BVVD5VdmYZQY6j4jwJsi6KuTB5zos8UTPhx91iWrtG6zY4eSA6t",
  "key26": "56zDNeLpd2jVNq21w3tgn3Px3SAnUV89gdsjUYzSosJJryGPYF52UAB9TZHsjcoSgyD46DYxoWd8nrjC7DwcuS3U"
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
