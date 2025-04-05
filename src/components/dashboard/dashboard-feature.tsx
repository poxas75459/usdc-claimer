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
    "3DaNnbgT4KFFUZCPsDxhw9Amy8JTsmCvskKWAxsF9n3PruXjaXUJL6sBsxxEeGmVbxK318csMtQzxxBJvSgEvdfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDA6X9djcsiVSFVsQovdYLyv3nSAuJbaHRkM5mC63HRCDXMEzktf1JBEKNxzjYKcSDmSPeoazqn6JJhhbB3JYsF",
  "key1": "MN1NTX21XFKLxzUtNy9wby1ECq7jzanDr8FUSsGHnQ33fRneC1kBjUaoazR1pRkzZd392vAFndQBSuPLTjVZv9k",
  "key2": "3kDeZnquhS1Wh7Jg5CSvq1fegZ472zHHGypesT1vnJqqGrEKoprt7sXqr3S38ffXN4PbKNAH3CdDM8o9eGWcYoYr",
  "key3": "3ghvU7qS5CCxNpZJVHYPo8EyQnVbybBv1MmEniFy4WHAzQfggEKeJuAhq2V9JdfodzTHpD4XtiJW8b1QxFN5nfE6",
  "key4": "4FGS3LAMSEKC527wPhMMiwwTsCqnDDZ9gtr4vfHAUQWN4Rn4eD8WtEo1cTA2yxgaU8r9x8G8Aid2HQ52t8JBWtyj",
  "key5": "5kaaf6RMhgujQMmZ2MgiR7ebm7X2XzapiWWiYafu2mnWd1bMoHFwGasnymZPVbQ5hT5my69jBy7yA4HbD58mfjFB",
  "key6": "3dpLt5Cwz2FEoMCjziqsAiwd1eUV5eZL46gDb7GJbL8RjkmAcx5WR9x2DPahhqGvJ76NPHScSBWGgerUgz2i5gGj",
  "key7": "3W7y7nvTkGBZyAHQu7QrL8yM6KB1r8tD5FY4yhsixMGfeTs7Rm3UuS4ZALUuQQMhdhfSDUdUNbm5pVqLkxUg5iGa",
  "key8": "5cNmgAqdR56YftBPw4tw9dD4xLADMnZf1iZE4LZkEeU21eidf6kf1qLdB5sGAaoBwhyDoNNhMPfNr7YgkNdmedpB",
  "key9": "2WaoeNvG7sr3TstPMfCZVkor9cT1AyDuqtNqsKuxnGgbR9oXFmAHZq59JKNBQpni89xGeao19hWyeNejZPXtBhHW",
  "key10": "EHfBMJYNotR8Z5amVLDbWZub43HfPeGmsZ4QVN5pfw4CzXzsgLwEdMmDYyYTFXKzig83uLSrzxwoF859HocUUAW",
  "key11": "ZjrjCDdVNtvYppKxcTWpGdXsofA5uXSxAw48r5qfEQvnBEwH5ogYsKnHJpKNyEn2EA22zNhHb6KzgftFR21uKwM",
  "key12": "3pzY9PLzCtPbAzdLFcWc6vP3Eu7jzyvQkDNeisDejcRnwdK7v9QvyL48T9VAumAKYDKjVou8ca86WGBfgxKhUth3",
  "key13": "3CT7JZvE1RVj59c99wbZzg82PQ8zPBHdzrhGWKf5JRf28G6qZFaQ7EhUrDFszGu457hk9pcP1qEfJXPu8w1jE1y3",
  "key14": "LqWgTRHcfSPYxWAWFdLsgxrNcW98bVyZZXP3J8WfM7RGa6s9fcrFp39PAKQw7uCwXNU38h2sddQgfferJ2NYZmH",
  "key15": "2VyFgfjzcA51RmXXxhH6wxG5CgRurk9Da9t6x3MkgijqGWE8nKx1LmHGkkmfkzDTrs8f7prGxLmMMZvX8WSqpZTV",
  "key16": "5NmufYTBQRwjszKMVABCEi3oUeavnXqs383qFDuAWGVHhAZNpYyyg7xAbYYfiVtkMBMGkDVVsh4GrVroYGoLfUXF",
  "key17": "3KQPSCoqxyszyUJQSJ51PjiyHfTZhCCnRQkdguPnQmmewc3y6YWa1Q4EUqsYmfE5qZ3Ncg8ucvYcAcQL5CARNMzV",
  "key18": "53dKCbSXYqS4nKH8piuhZfncrikMYTcQGECtL3bmWTUSFJi1mipttuyGv8Y2GbxShaiQgEDVr7ejtWKZZouaYewi",
  "key19": "5NDrRtnBZbcAaqj6KotAG3jRY5jsn4V9sZxQwzzoR9Zb2yFbL4ySnDCaKmgMUnDs3Mgw1XLJ3ct5Pcr7HLVFhGwX",
  "key20": "5HpDVLRGnoF4KcY3qTKZQs6a9uurUVfqmuAFaESH1hqNhcERM3hLVMzqurnvfbdn5vqiZqwgswdoXR7wTnHMNKtC",
  "key21": "4uogGv7KUwNpZfubc41feNbiqUfrfP7Ct23vQnzqNnPsGZ5yYSfFAfRJ3zFnWJ2395cBM2Toq9xryAdWkNiWraFB",
  "key22": "3jiynEgKvWWi8Y8X6DFwCK4j7UcscpPz2EYm8G7y3NyKWSza493naZ3CXBUZ1eszCQJVK3ScvFnpcgFzjgU8q9Vf",
  "key23": "3cUSLKSz2yRSdkQJWUoh31tC5Mj93hLZ8FmzWMXDvpNhRhrmffmZUtydmw9P1KGDzqFLJGKbjqb8Xuq9AjwnbCAH",
  "key24": "4whuCnAtvoFQeDN4Hhy5gruRUAGRxj47RiCgVefm2BdsU7SE384SXr7uvSB19jXWsY5N3F7bb9FVYyUBMeKCqZsQ",
  "key25": "4JuEPt4A985YYXyuerzqyGvRWCE1Jd9CkHATX6xKTJHE85KmWDSVEFZPtsJq14M59kGqrXbG8ih8UcK9MnBVPhF3",
  "key26": "4hdpAuzjn7Tpa4dH2t5kBRStXKyHLRCybUpZBvAZZBA4tS5vFCSDgDTtX1oY2LTCVjCbH8kiAbCeAD3emAkbCXfd",
  "key27": "3md8Vt6oUxnsd4S95yEwE4oEmt92TtTqipDgxsMAvmD68HNUELd9SWou17DNZGR7yTsQu2HWhLzo8MR8CUAvAUQU",
  "key28": "56RCFwHsPHUPeXMp2F1WumYd1sZNZeYjEZFgpYL7MX3KR6Dm78pNBsJB6wnQE3z62LJ5VKs5TqYC56dr7PBKCmH1",
  "key29": "67cSyv2upMWMXGKnqYGRnYodkGzLqXSTN83aJiksj6qU7Sa39CY4HYArutnnEsjQnujTQGAHcSR5rzAUmoYavCv5",
  "key30": "4ZYHs3y1Mj5aqtXPR55fdra3h7EP7TCQDvQTKWWeSWN4Sn5vfRihgHUoShPpwYNd6fxgdE3V45LzeESEw5JNL5VB"
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
