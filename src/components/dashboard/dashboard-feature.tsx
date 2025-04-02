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
    "2Lt7ttakLXU6b9dMx2QCVtmigiJ3ETSWyy9ZP4vBRj9EAifcD3E4Ui5J9tzxNF8JjKQkNhkam6PMb9eo7qEKczTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JuuaxNga3tsoo2x8727cQAL5qTFNnLwPCKDwFVtQpRbKAekQb5WdVqnNHuZu1wh7JUKzDE4Wk4ErbErCaFaDmC",
  "key1": "2d1pYq9x5hUqo3YeCoHU3mVvdbonfcpA7fPNw47jtVc6aTY6PeBT8g5FApvCjVugL93kheqZEs8U7nnyrR76RkUf",
  "key2": "5NHScZFyR9K5vHV5U7rQc7QPoSBnEH3nkjtj11nnBtpJbqJwoapPnPH9qjRrRrvcDoFUd7ZKLsbpEFQx4m2KbRa4",
  "key3": "5Etjs6mo25qXT1YWAmcB6yR7WDwxb6Thu7CLjvXWoFF23hYoeRVSQ9k9BwJERTedcxxsvZeQYWkq4TctZwkab7dv",
  "key4": "3r3i8LEezfS57NQ9Wg7Zhdt26MZ8Qzeovpu61pzfXYAjDdeNWzY6F89QLoGAh1ShWj264rp3JcAMkSdoojW28Cfg",
  "key5": "5K2QhgJqqsyNDJoqNHzjjU2buE8veHZN1ahG9SPtKTcEBJX4nLQLDxkNwi9FGxVztgFk6fmybpxWa6TrEbMBupSm",
  "key6": "3VdqDDqePpY9X2Wi4GJFEbcNmsrCzwsWLiBU2eZPRR4Y8RhjncyzHbU9wKvstBtyCeYWpeabdfWQyvWsouA2HWPh",
  "key7": "3rCRT814Cdz7wpqYZkLEPtvisKDPS57WQsiDtFoRjrmZ2VM5tykACqyXi5vHq24qjeTpJ5k2fQ49BTycJVSqYLvy",
  "key8": "3oJPbpfzdQhWm5ozobSEDBUrdoooGtfV8uueSL2p3LbNS5VPizkSpa4rtnYJSyWTuakskXEAYnaW42y9K4FgE7jE",
  "key9": "2VzJp2Zz4cEiMmdYrpzGV6psJPc7p5NPwe8M4NUgdDur5Qb7BCCF9pDiqn2Lmc8ZpqddaRYQuWFi5JbXkvqpZUwZ",
  "key10": "cdzYA3TNGmAeW9sRcnVkpBG8b4HKrQAL9aoLMty747vkw8WFjUnNbF9REV5ao21SH17Tdg8GrfsFCzL23Qco1v4",
  "key11": "2heHXCj7H6VKP2i8W9a8oLGyqZ684oGJy6365fwyeV6PZa3i8PsanGmWyojKdnEdstBqQQpdqe12xtJZ7YHw4rsB",
  "key12": "5d7EM4H4L9pCQbg4QaZ5hCSq13qTCAPxdAtkPxwbadsvrDo2cPPcqv7Bu6efPowrrYc4ZigL6hUyyqJ7nkm9kFgL",
  "key13": "3JA5zL1pVBXuoL3wKPJCZV9eJrCQEnMTG1qHbkEac8g8FzPzfaGJ2GDC27fow159RhS5mg2eAk1tut5dQTNfM5rF",
  "key14": "VQ9EsEhSmUsF2Y4byhsUxmrCFc6RgPkuW7v9ueYoj34dx5exrAxenYmXDgb24CySkMvDNdk3sKkFVWXX3xcwN32",
  "key15": "3qngXjY3HJ4HFCds9qRwkzUem2pKpxMxpnoc4UPx7CRz2kWp6s13VooKXeg1pYZrEYo4qh73b7jRHsZpGT9eW4Gr",
  "key16": "fQkEWzsxCvPjUyuTYRKBXN2hAQUr9JdryPxwSBErfNzcudiMxseqZnVhJfi3meocCqrswpdTSPTqQWW4ESJ5zfq",
  "key17": "3oRwoKL9V9eSdUFcZcGVo1ew9RtoMqDv2NrmXzxtRqd4wvtKdZPkyEgDcuRTSb82K8ncpEKD8zCEUTMyBjDjJEq5",
  "key18": "4PVusNkZftnL4ukeKvGmU5pDxCLR4gs9FqEyjzyf9ggp1KpJRbN66PN3HmV5iCPRk8LmJanAhJPmhUTEGxmZSs7W",
  "key19": "2MvcrFrz2tbacwVqUkxwZRAFPvdimiJ1Y2eJfLVTtCGc1d9BmfbKWxR4A8EmM4rwZjCxUKTr3yLXcqySZ2mKy2mi",
  "key20": "5XN8ppGwKB11nU5CViHTwjnJUXknynhVp7C7Sy1STkc5pnR5mDqvhEoJntRL6nBLFS4Qb2hy3xLFmyyFBCSiuTwV",
  "key21": "3zfwzAheULJVBvmF6zKW855mkm2CRwkYyJDWip7saBkLRphUpv3hqkZn9WMCL9mpZAXy5uxBfnnKVigbERFHD8Vk",
  "key22": "3DXLC1cMK2YUkxnGtT2ztCaMBcMKPohPHqhgwyjyTboaQHejyeRQ4A3AJbhr4yfoq4heBgyjkx4d6sqqxVDFMqpY",
  "key23": "TP5PmW8yd5nP4mVogw5A7qcRCcu5rduRFVN4ba9TqaV19xRjoS3g3Uid8pvFoitw5jwCoynkiiTtoMG2Tq9CmVr",
  "key24": "5JcvyagMEoVmMe5fH4QLvCNtnkizmMY1HPTqeUx5QmeSGgX2QY9WBazzVinPTrtbnBAc18bLabNmYK9pAcwkoWaJ",
  "key25": "2CUqdEESF83pfKp1xMEd2n1kwjZ58FWSdwtshkPhzwXwJKcAbzHKBi6k9mpT3tHU3wcvT6sK5RGewnFTh1iPWVCr",
  "key26": "5YVafoXYfeMuAN6dGzLC9rEg4VUAWJX5V8GiA3zzdtAX1y2F4fZy7hoVXZS2qJzrDFWTZ2jqUV4gekoCNwD1KUvN",
  "key27": "cyy6qrEAzGXPfWPSB7Xh9YnyiPWjeNpCD3d4i2gPZ4GqgTF3hXyq5buwnaTJeaezeU1ao8npfZjHn9bZzjXBZeN",
  "key28": "5xsn3bEEgJtqVZTpRnDkX1q4tKFrW4JknvgcexrJWfwNytYPcEPYcREENQCHVmytZtGqXAJU7HWQorvfVMYLQ5wm",
  "key29": "2pLPC2VKvq4wC8m41msdwvQ5eExesDuhwcM7J6kBoH4h1EPUiKPzYyjW62PwPP4mvM7bykXfnzjzpk33bWsTqVME",
  "key30": "KoLxkYmfCm3zdpcmmx3PvXtiBwh2DogaQkNdcC6NsxnpYr2PeFb9Srmn7PHEDe4shwFR6YxWRH1tSXtontJ8brx"
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
