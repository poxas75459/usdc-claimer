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
    "3V5MVKaYsRnrhp5e8WGAxQAgrnDQQFyyY1QGbRQYS3KuSBVqKFNVQXr5PujSMjv9pRNqD6E8SFiJnCbR47W6q2pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "miFGU4ByzSMJVs48ZyqSgXRcEhduacabMxDx5C5MyUKsAoFF7uJejE9qXmtxZhoUSB7eLBgxyT8uF3suX9x1KWW",
  "key1": "5uq6uVSP22DuMbSnCpSFfKXNQ7WpQXo9eNkZNPyVQXBZMgHdyxwMQhdnzePiYhZG7PBqAkxNuTSq3rewuQFfxBJk",
  "key2": "3w4LxC7c4oiqYUfcxfLMx1v5Q3mv8xSBd9GK3dJM5zNyZDvqoqVCkXgA8AXvChWiYiCqTsnwZ795udWdGqSKPpWJ",
  "key3": "3WpJDbGbWVdYoEBKD5EmUbMQLGmyrbT9VgeCc3KD58gHSty3WaUntwMxStaugZouh5vjPP5MJagqK9NTb3BZ7DPU",
  "key4": "2HP4Ei7qTavfPFosfGUHbwrrDh9yEZkydhFmP1dEjvV2q3hHrg8Tbwj6rw127nwgEqPFiux28RiRV1sUCbukyf8N",
  "key5": "2zfGu5B8Bv5xk5JmkmDopCzm3NG7zYvCaN5MzgaFpSQbxLwX4HGxJSgWozr42DYkXb4GtXuFXzPkMmyUXUrhgFjM",
  "key6": "5ZxSTjJyZyR8wF1nWngA3KmEA9rq4kvZiMWQpf9c6EWstkvQyudb58Xf6YZoD7AKAe9b1UzxJaXyvyr4K2s94Nc",
  "key7": "4KPDP3vDHWN7xpgHesK7qHmiTFNxXmV9m95tyXdGtWxyabywgrUE28ZqnHUFXkew68FesT19z7krAksjRioK8tDB",
  "key8": "4bUjnWtD1tiqybjN3kajCfQTzQmzrk1LiWZ5joEpQeLMt1G5QF7ybo5rcCEVnZUXf2nQYqjeEMN8uyXfi8XpbP7N",
  "key9": "8SVrBDEq32ymUJnnhBtGggYJpnB3mntPRSCVx3isvSXx8UmPfyjphc8Fxjrcej5fe17UQBMnbvJqZ6mcNgd4TEd",
  "key10": "66Vqv9X5CbpZMKjNHfQtpeuhSBx8WXPC8iu5UkxvkfiUvXK9RAWYmzwCYhvFkN91a5i1WA2Bc1cmop4yjG1FcrNJ",
  "key11": "3ranY1adDaT1sHezvKNXAdXvrvFBrREwRFEZD2JPaXwrXE4igDhAbf4icEi9qdMG8FLNeKybVdtbbwtb4fV9JHz",
  "key12": "4BNqF926C2XtzDSvwF4uPdKzypmxv6mfF5RhdcTu5y2L8y21AptMBH8Qk5ey8T5PafEVu5buREmys1sEgcKcLv75",
  "key13": "56roL4Dz66M1DkExyXtJARcQe1dSrhZUYgLkqk8kddTF7q2WwidE8eCx1R6mzzPMmnvwTKKEy92Ny2JGRNuU7HZU",
  "key14": "4KPTFE47dEi7CphPj2nd2jQaFV6f9PW3osf86smdaYzcTymWpB7cy6u8LHgYiSYuax6Vr4wrj3ed44TN4CWygxAx",
  "key15": "2CFU3wykL5BMpBc5HuHW43ychaxKRfny6pwRwrhU3AzKCqq3BvZEPaJ3C2Y3Kix69wjmUUPeznZPhBacchJ74S73",
  "key16": "4Sp8e5ngVD2LNS6CHUvDGpPDcnoBaCEHURwQXgRyGNga3ufWLNF7NVBgZaLZ7objuHfLD8Wf4QYcp19YuNU8mRKV",
  "key17": "56oLBz5hXdVo6emuDeXFc4HGj57Jxh31e3vCJaVD646zd8q2kujEBdjUoehVyGgmNPJXX5s3BTQp3rVMwgqjgJiQ",
  "key18": "5TtkKcNTb9rAF8f9d3xrgyUdBzfQYUUeNXv1XVjGhiWgbLJLzKhr4PsSsGV6xKe6KkRcwpEYTDYKvewV37kMqAf4",
  "key19": "3RX7T8jp8jEbkB3LvbavyBS5bZ1guAZqvuMr4iVCRAYuN2QaNfNKUiibjAVVWLwEtEJr6M1ckhMWRKZ1XP883yFS",
  "key20": "3pXuJkWKgo1cdeQDsEdrZLDm2NzgBZxova6z4q3wcEp8PcCMAUYVUJYoHBoNPS7cjuyru9sCYbDGRi955bj7c8RV",
  "key21": "5Y4vkGXFyyiQjbGMrRfjoqQJbq1ajTKF2oRJTwKezrNoP5AcnVAdEjJYJ1upnWHmDybEVzSfd9BVv4ySSc7H33n2",
  "key22": "4UWuhUuwoDJLiNmeha2oMg7xr7BywVqpzgaYJ6rd1koW8jT8Pjhh6E6gph1mj32xwefrT4E8nxgcDRp9hXcZdHeD",
  "key23": "3kEroWtXs3nHi5Q57zGDzZLfgAJc2MwEZn4ZBTy7ERkAWMC8Azq7kTnaheLJhQfSnbJDhZjZLmvrPJMxXid3uFWR",
  "key24": "5s6Ncew3nHY4mX27p25f33HY7cCLkakKK8Y1wrjpzVzJJE9zQmmkPNktJqVjVSiGmGx9CYBps4xVjUJ2ApiBks2B",
  "key25": "54Cd2aiBVRtFAPBR4SADFR7d3qjbu6ozTCjdgyfnequ54GQFn1Xahhc9kanY1NQeec6o4zcMrEw2Ma5432LfvKzS",
  "key26": "AVwN3iaqeqEhzbsYBiXRZpe4xhUvyL6jZzpqHU6fFiW4M8tHNUHk5Z87yvb36EQ7ujFsvyTXygHWrB1MRf6i7bV",
  "key27": "SsRCgmQYX9VCyzfoCQTvXdhtyDWVtSRYtur4mupp3W81y3xQtU399u596Q3ejvTnV22ciVQve4yLXUV3LrdZP8y",
  "key28": "38TuJaWjQD6bZTRPaoS2swB4fk4EnjQTDd719bwF5mj47hqvbtGz8R3ssGcngnAs2gj54nihZmvtZJcp2EqZnj7y"
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
