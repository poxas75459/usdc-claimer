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
    "5YHjdfAWm1exat6ABEdJWHysCXt4AQJn5cbWTJi6hSxNJiZB1bMcDSMeJ76PZ5SbFyPQvuL91MbY5yweFeTY7bR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XddGWWsx2fDUaTJHZWKFgRkCEFCqUrThSbWBRn73cdy5mfiUe6Z8aQyJXdFfedocsKm747MfmWA9W63TcvR4ipU",
  "key1": "4CtvYi7KeqrK6ENYvsub2baYUUtnWzd2WHBXRKPB5bxGkeWrVfMukiMmVvMSyRvjoQDT3jqgLVz4ZmT5JhjKurqY",
  "key2": "5YSSyDLoFKFiqFAgydkKmNAvT8hFck5LRmPggnhDPriwg9i3trXRdV2oonbCKTBFnQxd1V8o3NcrU3p1jPHMCi24",
  "key3": "3ZcquqoTAK4ZXcaX6a88bR1ZCfizgXJm4txnz37JcCmXSS62s3rRYV2oRGSnnvTjNp4ZLWQKgwfkTbRJ9eoG7SAQ",
  "key4": "o3SMhb5vvxmeHFKcYR1zbZUWix4Hq4UXk9mNK3RKmPXdrWNegEaVzmNUTxWhgyeMwfeXNAuY9GiLcCjHaD9ZaP5",
  "key5": "3ALmfN24wZ3dhraXx4BJCGSxU7NuuTiRNc1RWJKeAdUrtSXXDTw2NSkidkL5wtEWYT7EUuCxMqnsi7NVj4qYqQAC",
  "key6": "62Q5jNvBhx2dtgewS7fNKcnuUMr3GkGgiVQTdsJo7acD1gVeqbubFDHYJR1yFBGYxkRpP1739ULEUr4we3Brhuh5",
  "key7": "sVJNRiTqCRRiF5SKENM25iLkaZFoEgxUgL3cRgLm2ZLXy3tsE8hcWQ3pt4GnngN8uuSLM5uBqQR9ARL7Fqv3bSu",
  "key8": "35rds9fyBPEdSUsYNTZnbvsyEPe5fXrRivLTWFBfwVw4NXzsrtFEtqMXWikWwhWDCY37ZZcS41Cas2gQuzwYP5QF",
  "key9": "fdNBJf613BtaPyb862oDMpZr2rVxe4mW1UVN73whQjc2PMSRZpgRn57Es2n7tehByYa3Q7SCnfbcMAuqLdfVH53",
  "key10": "3cPuY9pnKsKy7mpnWqpBhTxpkhfUH53bZ6XhLkjCjib7kvv1rE3aKXdepTm1GoWTkAYWXfx5kdS9mqZcRf3czuDr",
  "key11": "2obxzBWjYQYmftz9z9cRiCPP3jPjutqkkZUGqScB99YsEmyrXTPxEQ6pwpYMvzFGQTJwwzAK8Tn6cxoVMs3KBhxV",
  "key12": "3ECkf5v4oD16NbvGqYXtgsy1ggo3wcUm7SkXKUtRMHESGj3PAjoaKjB4d4T6mnxAf2JWneRfDT1cjJqSEubECR1Z",
  "key13": "3g4yTDkYveUNycZLnZMXzhHsoCyi4YsJa7RCY3oznVegh8M4JRiERarCJ7Bz94hWDe1p34tQGxXw95skYmwSvLfv",
  "key14": "41oTKLm7rbeswu6mjTsyM5numKPDqXwexoUFajnBVY6q1wipa8KPVnW9bh8cg9mqCeZgXTxuzr3BpUxCr82ybrK8",
  "key15": "3VMTCk2yjgDnqrLPypXrv7VVCbYtEUi1pbKKSG5Dm1kF9sUFtJbHksQXThKxtJ58CQ58EkSTSrXf3QMv32aXYkLJ",
  "key16": "4iUTtCN7vSB4JhcKhc5wusYvgQfgS6knwk8fsXEFt2CnwUd1uYuznrkTfVQpDyN7xoahpk63ogyEk5XunvU2HoVu",
  "key17": "U2CJGQ1pJEYP7z9ANNwo2dX9GjVynXDK3G5fPCaKXmtkEwxjk4h2baAp4ipBbp2P7S38LhdB3qDJV9TY7Z4zTYk",
  "key18": "2x2ATmN4x2asyqrW7sy1KsGCp8HPvv9zCootF4qSyczChfYMKUPPo6F56qmfdqRCK8jN5673wsRjG9sEa9nfK3XB",
  "key19": "3v1xX8xGwrAyfpagofFNszDDN9a67REbn5bjLL3Rufdq3BtsZoM25cakSm8WwXDYPWVgSLM8gyGJ8Jw79a2Dv3pP",
  "key20": "45iu1YkpgN9E8x1LcqNvUo3zd6Q1gstyaGSbMz2enLH1srFhGrFS53UNAqRj92ft5avYy2GysJqvzm3rrQCpgtGY",
  "key21": "4MPKb3UzKHt1wfwV8CMQWfxjAb3mmN1Yg4juYGZRSCPMUVtMfcW6bJypqSVYpfZe8e4EqVnQTXyDL6KdS7D42rFu",
  "key22": "2rAyVCDP8L8PPgqsoVByujEKxGBvffQ6ijqCR6GCx8BrAhvdTUrDbVLFT9eyuEFf8SnVcN1jmAF4QxpVKG2pmHKQ",
  "key23": "4BtgH4HBzgyqsfejzvTNSfbes7ERn8Cs6y8VFAiJ74BNwNZLGwBDphdiZfcbUNfDcJxM6DATGRbZxfmdhjYtcNMM",
  "key24": "5NLuSLutbYuztrpFw2snkbUrocFXr1h7KuZKjphVw2Y73Vd4w6Ph6Pv4qp5DMopuABUBx3tMUjr3rrRs5cyCngWo",
  "key25": "MTeNW1WinZ5BkW1s3qTLFA79BKE7UrqeVHS4ZuPwepQEXAQpECnfz6NtLXzP58yskFFP35QT5AkoB9DXWUNp7c7",
  "key26": "Xe8e7TPGDrmrfcrTpSiG2vEMN92dTbtPhD51tdVDRxa6uLYLnGQTJFba7dqHmAh6csnrmBfanLVPddTxc5qfFqL",
  "key27": "2N6VY4YTfKdav6tF9ZZWHWpyXVf8n8ycMbebEy1ozUsXGEW5gAGzegndiqkfcz15i1sUdTYdCNpN4DCPCSip4P4f",
  "key28": "G29Sfnz5x12Sr6JveiWLxj8BiGb5AHWeencNjvVf8SsJQwUVzTjya99AWaESUmTXCP3GADdyH92aUyfyKNW2Ag9",
  "key29": "4KsFw1sk5w3Di4n2eUPr1s3j4YGz4QTgxqKWxq92A6xUkVegZXm4T4LEtiF4fTNTEnXnixQZe4N9gPHkJzt7x5Xh",
  "key30": "26s7vivpskpX5dULZx1cRmnQ64icSEZtC1psBE7tSper39MAbegF6vvJQkAH9ec8BgkR25K21poWbahP8FUBuzpF",
  "key31": "29LJmqD89TF44Ar8MUGJhwgCtpEkwm7r9bWEJouskXP5jvocZNGopCo5N8p2FhSvni4YEVQsd4JY27tK3Ke5vrf9",
  "key32": "3JUGVhSsTvHTXNbh82L3MYRU9GxjLgZedDqZoxhyiJRNt1jvZKy2iz72VeEwePSKQuUR1nCMJR4wQg2rL5HGjCUj"
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
