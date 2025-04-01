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
    "5cCZmYEioMo1Z9mQwsknwHMrxrchzXbCDzgk9Y96o9L6Fmt4nGVHL1U1eQSkvKQALKTh3xJHCTtdzBMzcS7t5677"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ljkk1eu5AQjrAyqyXrN5VZYGF9zrcZsv1nRYY33o2Jq2Boch5Nbkt2c1VfFFjgNoR5D8T33AiCPLeo6HCzFtWGk",
  "key1": "mK6mdBHjk7RsUPaitanwG3qaCMPiUBR6aM3mihH2c1is9LUD1cKePho29f6FzTWrSVCrtT9kuEVv2NXFrMtHi6D",
  "key2": "5aQqxRQ1kPM7RtycfBtxd8xo8irDXZYBux6PcE5W3nd5FxE4Co3uu5gUkCd1X467BGp5iyzNwEgi9cELU2FMGy4Y",
  "key3": "f7JQ3RKNUMmr27DCgKdMC7zLhKxZcAuWQt4WSfTgV8LT7YftnTSpwFAR9a2QpfsBoEMqwN5TZXVcsTMgfa7Axu4",
  "key4": "5QZiKw8dzvVCyyid2RpFu3uemuoN8DLjAchmDXpXgpJH9U5EP1Hx9hj9poqpfUcYWTxWYA3Lp5vopd98gcSnoZvj",
  "key5": "5uhHBs1pB7AEpowjkEYwQMD7PGE981vnAEupCuncUzMDCxVmdB4s7th9hX6zdDnmubNCXMAygfZzrzLx9dj4DysV",
  "key6": "46xRZXbLBYDNacmD5CFR74VVXWQaDq64RQV3KZekphiDAi97NRZ6c2sCha3tE23nfJjhkSHhiFeYa1Hj4HdvYHW6",
  "key7": "2AA9xrMGPiR8AbSFrmeSNCpGqrRhZM7zN9xv87kRwvpgB7KA386NzxotZL7zN2MwaqXuVx3Vw1KvnzPBoz27PdAL",
  "key8": "4EhxeVs7mxF17M7FvLWvuQefx6GXWTXd9UgGMw7QTKtPs87TSjb78BMSC51dLdqKA8oroag8CGD6ySDWGwEUQTkR",
  "key9": "L1aapMucfVKUQDfjcQe49KwycWQEHXDFRbuKSuSdXzNA9No4rRs1QxzK5Hp579eivpuV2kMd1P3UmBFgfw2Za6U",
  "key10": "3PxyqVaBAn9UzZLetTM4ZBRsa1Uo6uXTZAEGcM5o16fkYMfP2DcGzBsUbHbjTcWTWkCDShXUQZdq9aY7nGHEcXXj",
  "key11": "2Wqyy4oNSXLA2Tga94qVXfZGfgzdrhdPUcvjjSEzoeqUeNYRDSZVfVM7bJxopWin8JGh3kCGFdz4VvFHV49Y7FZx",
  "key12": "21vs18DoWWKnQR1kZkkiYkMXXkXXec3E7bXVNwWrF8mq5HKWpfbWawUSyZ2HRkCYXBCFcNi1p8YNy778o9ZRZHuH",
  "key13": "2b1JL2rTv6iSQmun4LuGR4u1WY2Yp8yEvLknBkypzuYVVdBvqiueVEEiyfSfkKAZzVMK8hquDEAk3XEr3HtesJsZ",
  "key14": "pcZy5G4ByFM5mmBJeDTcd1x4U8QVBtmcx2SkWiH2dTvmw4AmudnQkJUdQEvHA1dELNbmPrZxzi1PWgsbkjUSFeB",
  "key15": "3GDA9YhJ7XDTFoByxovx99vrKjV8pw5qP5A589A5KYQ5FtgFG5Xk52gUt7TstMgwwGbKGV3oZL91FWMZ73JCPN9b",
  "key16": "2JZS8pndpp5VYybFou1qoSW7yixV9pwVERP521XiS9K85fiydmqEWRue7euvGe2d1ZeREFnzsLeNbu7TngFJEeUz",
  "key17": "w8Y3qkJMuN6do6VTEHaxrDq6izxf3V6CuMQSxgUmyoVXxUkTx7L9D9b4p7Lm9B9Ev4s87nBKnn9nwqdvTLscGjj",
  "key18": "4eJXCuY6549NmZiP1Q1HK6wCggpyEuDmyBEtqV8NCYqhr6oW9kD4c2oFF39ZvCVeZpmAYqGjkB3hNtkLZShBtV1t",
  "key19": "3ARWHhKwVQS3CPLaW7AevJsakpE9rrk1Md78Ybb2ijJ4PH4aYUU1yVuvPBh1oZu1LFD94pzUNPvKrTb2dD8g1MkA",
  "key20": "4Xzha3AQq2VxnVe31WyWf8C1z9HjqJXgW17F7VEkH9kksm3eWJ94R9cP58x5rWLwf4c8bs8GrXy3FkfgkaV7N9AS",
  "key21": "5ZQegawi7PPAoFGx64JaYJJRiMxVtPNoDQdTkpHPTBS3KrfB5suxSK5NZtTmM5JbEh48ozPmec4UdAXwsttqaFX5",
  "key22": "trygXvC2KoBeNoA8DsK654G6EcTADn1vxJPJauwSRD41U4BB2DkC91jdVq99e1eu7w6emC2rGy2G5JL8XAtC685",
  "key23": "4E1uNsKLDtnaKwhVJEHffYT1VAJehbTncNaHS8MqLv5Qm2qqqbiE6mtBoPu74CQkJ4CSc93DC7x93wKNpSBiVwVn",
  "key24": "4MBr3YnxU9rYU299msHZBsZigkmY2X3Lceuxj8VRgnwL7qxgzFj6zUZmvpZyrAqRRRXJSgHBgxkzzeMS6EH4T233",
  "key25": "5jD6DaJfkKuyd65c67Ta3yamdC3NnZcLXL1JMVhJBWEBYARhwtTCZDoZ9Sg5U12zGiViWUXaWVQLfioHxXqQoZua",
  "key26": "3tdb7gPPsUgUWP2Lu7HNrSxw3fjAwm7XSn6CyxqsutAzFT18jtsyh6bq4Bb9huyToKNvyPLGWAjd6XEbr7j6ZRaB",
  "key27": "44fpEBk4m7BESRZRXXFei6aezc6yukHkXR9tj5Ricm4YwDMSV8cVzXpyVfu1xbdPTPqHe3fqJT3wEbKkYrVKiSc1",
  "key28": "5KFRzRXLi3c2ZFsWTdNZRMZArMT6QSrw2RfAaqAEGXkiMWYvxSACx4bvmZu4iusRoMAomTqJznzScCU3deNivaGM",
  "key29": "U3AW9nySyBxSVfF9NVsNSMZAS83YK3GXE9zazuJhJww4UGqEPATCPRuxuZmH3pKoaDwxwVpXtJVE5t8v5VJXwbH",
  "key30": "5KDAPnsUzK6moj4g3V1bsYBWfubx7qxKUNUwTiWrBBaxrwkb61xx8S7sa77NpCGv5tyBqoKFrYLcbjVsK1vETnm6",
  "key31": "4fU8KE8ZLQS3EDMkzwd6M71gzMCNZePSPdNw5YCPuucyWQSQ8CvzSFy6NWAre6rCNnAChuq9ZTwJtYGY7QrhmkkT",
  "key32": "5729UP2iEe6bbFYDc5TPPjkcdwnDYmsT8xY5j8WhBE9KxqJ3HJfJwkB9e1erom9eoX5rcH4iHdrGkLBn5EBEyV7A",
  "key33": "2KZNBX17JNjiwjoR7yZD5iApo1DGgurmncP2Q4zqR4gsh87Ds3ZfhKVvycnZmNUvhutS83WsQwUrCC3wz9dYG1Rr",
  "key34": "5cmTh543nSQxSjwbH6upz4GgcpGq4UZ9tsVCxyotmpa6q59PEKwjJ9bQ4t1ErxPQzpkjZvcNKZ4LfCepBPGHHjCz",
  "key35": "4xkphQoeY6qfJszVZsXL1NUDUK6DoSYjs99qzBwvo3jMvFiajJsj2VbFGv3DL2sYdMkjkVfRZVYJQ8CVZ5UJ2jmt",
  "key36": "2KtpK57GjbiY36Hba8exxSkuQH988d9ZayzncmqWHFHfYxswRrTa9g5XnNc6uXL3HRtkZFt5Pkk8Xfo1SeajXMFj",
  "key37": "3EjmCMS8eWjVcgeYF3foHufz4WB9gY1ySQpjLngGr5QU1cKTFd7TfSVtdUxp6pg2v2T9fkMoqS6x6VShPefzyteF",
  "key38": "2c6Dc9zNASxE3c2HSDYGXZ26xBi2gbgRZA43urtG8bouPh193dZ3PHUscrz4TWFnWJDgGB5EjytJ7KPj47Y2dPcT"
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
