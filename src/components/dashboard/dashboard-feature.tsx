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
    "59BExcDAuUXXNoBK1GpLt37S5P5AKhLp4VZiEE7rU2RXM3eQAKnEPzwP5h2zv8Zd4mvTrmNhXuX9VP99YS5rSThX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4xfnnf5ownreoU6bZtpM6HPKD7cHvf1nHzX3tFY3gZNDyEaHVPaGYuky8fRSZNn5yocbGC66qWVa2UYxwU8XEq",
  "key1": "4CF6GFdAfKQUVhpjXJbageX5QWFDbXbbpoPmNecGiDksALBbpCAQbVbqRhRKVyGXGLGEJ7dR95cm6WW8a9YVC3mk",
  "key2": "3GcqUUa61xvvAN9N6aCe9UMJcRsYM6fHtzGiHTtKhiS41RmMzEERFJW4geyQuWFbXhw91KntpZHRZhPBCMWvRRJ1",
  "key3": "5gG2RJCduhDfNWKFoHEZ7oz9LXTbdbmHb6rdu6B6yY9XwGYcoMtBB2LqaRmw82vsg973wbmvf7hvYosiMkjT2bsB",
  "key4": "2BkcP4S4jUApRrkn4WQMVEdqZ4VDF4TzD6icprJNBWHTcT6BKdfNb92yxwtHuxfAHxoSvNeRNeoKDzjneDhfAMKs",
  "key5": "653AL4ZFA5oiFdiDdqqrVaGGRQq3kSSLFUBTnzpW9f4xM43HVUx1fiQ6DVii3xnjCjD2mdcN54sMCLSLeYbiTvJJ",
  "key6": "CZ7va9pcMje68TNNmvZzYuWwnSoHq99qLNUFC8x26PWNpUM316fb32b4aqN5PLUPmZgFi2e1JU5mq8JWzkmDPFk",
  "key7": "4jkWVeRweLqK3rZdz8rTbkMAmuryynEPv15RWTpBNtkeR7ah23ywtsAUSRnJTsyufcEhsJunMZNu3fZgmFETPh9B",
  "key8": "3RDdkzmZAYCg9iMVGdVgnMZrnohZsS12omf8Ap2uqXTy7tBf74NksmaRMhuKVv5Yfxu6E5rUXE1Ve8tcRCkCDtjA",
  "key9": "5LaMynLXF6hoRMbvNZ8i4p612o2QT65Rx2ySiuSpBsYHnmcb1gnp5UjiHtmL2oaSzTH7aJRZpJx5SXND63tkL1XB",
  "key10": "3je4mQgkR8GQC5vRYor22x6QgULjTHZJdrugtM49nXy3fDxiEfTWxnWb5eLz3gKChQiT8pguS44kqXngoaHpGTY4",
  "key11": "2eCEk6UNXivEv2LuR8iv3wQm1D3K3c1jUgk613CNbGD7rFyqFoEVXMLRMDUBJVZowFgUMmar44s4xURuAYu7Me4G",
  "key12": "5FiFTZmFB3ypNJqGUkUMUEqHSG8J9Ch6rRAYfjiRbfGAXT1Sa2Z6piUhmjCTZXF7Hnib1qnMPdvV5ZdMKwjNHGYJ",
  "key13": "3xDoVk4kguogE6VpFfvNbUu9usQsd4QGSB6EJ99W1fb7ucDjd4bSyr2gX8b6vjvzTHgT4icaZX2SvSk7wPGao8EK",
  "key14": "5M4htsdWn8SeWrHcJh5GwxEqyKcJMdHM7rWw7dwnojJzJdY6UJU7FfwfanW2ZE4xCtG1rnFUxHxafadkwkkXR1zA",
  "key15": "3h2D1K5bo1bUsvbS5dx8VPsbt2E61PXyDcSpWQFU4S9svtBMdZmqtnhyX7yVoC98jDkmDHDmDj6vLS1ovV87xSeb",
  "key16": "5Sfab48rx9zCBcjN5bMP8Zk9V15eG3p6hsp8dGxirVakGqBgVtEcCuLFyxb2PKDH9JUUWSvxdXuQJpZTGFvj8XhB",
  "key17": "39Ka6EK4xYNqUj1X1Vf46CZTnXV5TaPhgprx79hhsoLHC4wn8ptgCHQQqZAy4GRALvbhjLHiiyhp7erbrgG8V9Qr",
  "key18": "4BRTTPFCNfSWZVtcokCbXRmFVa3PdYZXX9zWsTpHmxuwwxZwzAQGSavkP7nve2eVwT9qXLSbcMmfrCewqsk2YbHA",
  "key19": "38EhrRn66tEcCi21VqbHpzSbLGNwan7PYSExVPeLkCdv4QLc8H4y15UTaVwVGZv8eCe3HnSueamTFtnqqoiLnPJQ",
  "key20": "25pQszv36BBJiz3bUnSTtv2zrPNWh5hFfjt5WQzKDdKkhZeToA98P1vuwrNnnPzPJozMJrWbL8Z5d6NfMeRbzUc4",
  "key21": "5pGCQYrKrufC9iwxFWZYP8GdV6t4XA4mHxnQYFUFMaeSen7rj6seKYeJTgwZL6tWimkkyyiMiGxzZihLVf5MwkCn",
  "key22": "4VP9Hg7nS1bgLQdZ43KTBfN9mUeXXgKyJvqyvNJUdEqqEit62jxFz5LJVDPiHySFKeSjToqcfyc9eRQEciinoy9G",
  "key23": "2FvSDzBBdYLgk9MKjpMX6grJ6fuVWz5eHidZvqxkWXd6DLgek9wdPLQGbURa3ppPQBP7UnJkVbYKtVxQuAqxPXuN",
  "key24": "SNHHrVghHBXLzV6NyBmFSyhc7VyqfQVT18Gf7Dt8M3KdmqVgobkQ3qTz18mSY5cKAhiqTn3z3QWvGjPEfoPE4ju",
  "key25": "2dY7zgzq2BbYVbqFtdpUhhVLjxYXAFHJj4DXio2SowGezj5CMypRvLwyvw3Doie4dmMt3qwtVYTUaZWkAVqkpu9r",
  "key26": "2BmbRTK6juDNZX9vurxwV7LiGucb82mdYE1VoK3kEWcvGB5nTvpRFZL2x1R9Aw2UPz6LEL3F1wDrwz7QRK8fo3up",
  "key27": "3kRq4d3kJEQGswYnQ8w6Xv4ennkbyyVPRWbqo8aQiroaX35QcHV4nShJGU48RPZGp39SutQbRbNxeath9ECm76QU",
  "key28": "4zWhpmN8e8dAdJucNRgXogFDbpSANUGFiY3Ez9Xmf6fkJcmZy66YShGG6ddC9HXzEzrXbTVVV1MtLyp6A5oKHxFi",
  "key29": "3L5YKCFUXSNMV8dgtxA8guzo2JjWfonCSLNXWn6zificXBnRCehVAV1pHkscuMaT7LcQF2yzowAyXBtgQ28S8cnV",
  "key30": "2Rtd4EqRNfZmUrWtNqkcVB5kNrBEbpmskXrmPECfZbn38ueMNH3X8z29oTEbD62CU64AiJeTGWDTG3koVzWuBRyU",
  "key31": "3ghgEDiGv8JStz8wvZ59G4i64HK7BNzkf1LsWdQvG5Rdyi5hobsKSJC2PUogcMkMx9pbwHcsR7a3zQR3i7fzaDuD",
  "key32": "2VEJAF4nrtKDuPvTvKRT86XiYFfK8ckH6p1hXHa9M6KgZyRf64ikjps3y9Q3UA5xY6oQrNkWkxPqAg2pw5re1zum",
  "key33": "2T8HSFW1bG9PvpJ5s5hcuSKVgRqkeyjQ8Eb1yCf4vZhWpHScWL9q1i9gReRPU73uLsxjioqc1SySoHpaCqfD84eG",
  "key34": "5pp1kduEWoRYaVU22EUE4HydDuQAnRgeZSc7skjwgKGEDkbRoYXeeGX9ws7RJwbZXAiGD4hqoMESNyjfNePyxHNa",
  "key35": "4xV4gQBnGQHfLXHjF4jotpofTiB13yYXGdNPLUHcFZjKNNesGUyvqQEJYuB6cDT68cXcHo1hJFEx1uN1Z7FsTCJr"
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
