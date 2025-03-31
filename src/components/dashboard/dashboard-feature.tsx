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
    "39p84kfX8ADR6AqxbnkESBErq7obSGWkuKv9xWsTgkJenXsfxPGHBYZDxqWp4uA2eaeCH5x4tp4rQzchLCAxSa8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jFeV2DNkjKZihkJmj3WibSVnB19YCGEfL2s5Wuw1UQ45KLY5iYRpKUgxRErDzcQwvdboUQREgiik2jMmLYtu47f",
  "key1": "56sQGg2DW1AskrvEToEBAARV7mB5cPdbdMH1wCoGFgHLjPsbU6YUsBtctM8GKEHvMAgqPHGdcVwzsbwEtWrt3yym",
  "key2": "56r53jFZZNnz8BBTfqMjEDPV33WcmgGqu8UFLWyK6ZD985NnYJqrozGbHVcuqj1XX9PRGzEntRbBiCss62UGZRXi",
  "key3": "4C5hCvXcVZVbVryiLEjNQKtDoXroSAMug3f984uxTMHygyxiP46RJRkhWH3aBz3naQyWemRpGy4iQWPLocyHJrpP",
  "key4": "5qK1Lm22jpiXzpoTtBKKDxN7M4tRFKAxPNStc3AfURDR8cFKKDpNKVHMgUQuxfPFwmmm4Brzn1XRgDx79MQ8e6Hx",
  "key5": "5QUYaNAzvrchy7TMD2iyj6sNj1HAVzrbQgGdeDXdxzqBQVi6vDXKndMiVVWf86sRmNXYDzEFuEFVPs7Zp2ghtfyA",
  "key6": "5iMxe3MJKTBhkTvGCVi2srtFQuM6Bi81tKwXpVuHdtZCWcLdprwK8waENUvmxEvM5zMKiif92rvpGWU5wpoVUYuA",
  "key7": "59XfnT9QWZPxGj8p2zYEr98iPDrAJYYr9XRUu9wJH4GQGJqsYFjF2VgFkVJFcyd6LuEwQUTsiZf1xmBEVWLVGEbE",
  "key8": "3nm3dzJMTFCN4hGcGUJER4fCmBDfQAGZRmxeW7TvCPLKVGt3ianSLBoRFd7xEPmLTARLNDVWKi8BCKB8CHYADHJV",
  "key9": "2XChZ4T64gWrWxvPvKeU2UMzXiK6C6JqeztvD9XGUJKXbHozKLnMeaJkyFLHji7YXvL52iiZrCfDnHSEPD9M8zER",
  "key10": "2dSuWw8xEZyYHGkXBJEtRKLXDTRV1mrJEpUDucAkEGCXXdahKFz7KQPj5YekfA29eHQ9x2LHtPfz4UcW1SAB67Pn",
  "key11": "3WKWbShjTSAi2AN7HRuMwDUPk7Yd9Wp6saSvaJE6hPb7GEQEUnTQ6LzLXVbTpMCB8ZL1DwNQApYoL2cRjCiVBJYS",
  "key12": "4HmaXP8adhi5zqXzhLH3Arokcatgby1teZVomhsnpXF9H2rv4dKAC1pv2Tagd7GS5UegfF26M7xsRrHpUW52gnw3",
  "key13": "2LkotoKQeVCUreBNg22LyjmewSoLJWgPihX7vaNmQLhDzYhMq3p1Q8iWiRM7ZnUpxqgeAWz5RpWY5A7pir6ozNPg",
  "key14": "3tNYh6S8EUDFanxMvzXM32zCqUfsWhfMNcsHXhk1vbjM2LMZfqdQ4ZiuWKc2nYa9JEH9EBPsaAnN1tjBjqPyzS1R",
  "key15": "2vqtsKEbqvqhuAQCGtKcPq3ae4RzZo8hVVLZHPxxpjbnKtcMYaFoZx7ERffeqaCQw3f5wjYiLUBmhS4RMpnAvKrf",
  "key16": "3kzwNMsYQVZoWQVkHacg3GJJZnvMQAd87E3s1KQAHNPuY62qf64EFpiwXBYJoeo8mgBBkd7QTBAze7AzGhHpXJUz",
  "key17": "3S1w7ntNnnHg2A5fr5wYwiayVjA6EVCwXSeKCw4n68b8SNDgXyngeWaSSGs8KEAsAE9KTFtovL2NhMBBYf2z8wEr",
  "key18": "5QgGMBCAqFk4mdJZyEZcTovdBnJsQki2GFzv3m7SWt5eQJ3rvQoktCxsau9MrZCEgxBSkwRWTuHetKeXVYYXRjQe",
  "key19": "A8siDGqnzAGNLZaLQeNyi3EAE7XL8evXzjpAFEUWRRFWUYfwHNvmKbnT4XVBwo4nJHp9VQGfrnGNZFEfr1LCk39",
  "key20": "DBeAoMxRWxdLpaJnX5F9AhghA5RhXttf5eEMjU9G45SShTruhnAQPUAD1VACxAovmV4raUpEz91P5skXFCF4nSw",
  "key21": "4nHTLxiYiLsYNGqtMiKngYWeeBG7NCr2tpcF4cUYFbyQn2itabeQDfZh5cSofZPuCwvPwx1gZ5oskCC8Y21yU2rw",
  "key22": "2vs86n6LmZmT4MzzuCLFn6UzzEniphnAUn9DTpbozE82iz1MKJ7Q6FfqgGtjA2cm3QEcxyAo7FjwCRGn56b9VmGA",
  "key23": "64adPAHVxxzs9KmG5Zyf3bEq7GLxwFu8ZTbGTV2uWUwffu4mVJbqLax4Wc6fDHgDEKrdLsY5xcdHfTAWQF92c8kc",
  "key24": "65Xan7vjgWVVjS2WEDKVdV6ktLHYwibrYYCTZWdUmyCyzfaA1VRgtnHVQJbqm8X6zhHZhYEmKwFTfJXEoio5S4Ws",
  "key25": "3KXBaPWyx6VXrdDGK3nNp4Me4yyKRtRW8bFTbKE21ZbTkHTukxfTYk3BBwChMnpCPYUuGeufrWdXSAqQZturLHMg",
  "key26": "37NW3pTiAEdtiyUF9AtfVyCZiCdLukKAdbw6zf8jjbTQydsUK73bs1ZtsBVDRmVn7LHERd83i7qAPdKMiRN8HL87",
  "key27": "TRPdqpMrkvzu2k2bKgu4hiar7iyT7Ae5vYq6ekxoZu3U1YVdM6mnC86FtVvB8bZrZNCPj7F7ZYsxT5VtVnRjHpT",
  "key28": "5uLfoy19dzPfKS58Te3F9YRt3x6cFGB1yU6AH86AbodLsue1QxoqVYnH2AkDdLYsRAzL6UFdTSv37cnnp2D5aSyh",
  "key29": "4gbBPQQZnChUEsQ4GZpxZa5KNbSaU7shq7Q4b3fp6i48VAJonyNSBXshUa5iDihtmhYdRpjZGpngxbeYogKgATqy",
  "key30": "26Sd7CNtNnhcTqU1DouzxB3UQMstdm4BGunkmMm3bj9QDBNCDBN1Y5eaNbRrJRb38uN8aDYdNyKb5NPWfD8Drki7",
  "key31": "4RcgjVzaTXbrA2fyYn56WN4jQjs7vkc4cppwFjM9GcJVbYfFSTr3oTLLDRo6YzEKznoz473sXs5bVAu2vZBcu9bz",
  "key32": "4JCJYVEUu8R17GAFznLc5Vrj2DjEBqRykxULNykQJTKAvQTDQv4dMhAnhMY3ABNBXgiUZcFFx5YrSmdE3uKgptEc",
  "key33": "WT8LVnJdTajJVWX5QQPqFARwcqXBkisW5QvmiASmSWPypLDf4A4GS55jJjC6SwtEHSZ8pREhVroBauW5TzsmDLm",
  "key34": "2uBRaM52V2kbQ13W8LXy6TrLfYqbZMX4XXwPb3RPpMPfE7CQDq9A4EvWVoi8P9bEaRyZ2fALrcU6WsbYx3XWi313",
  "key35": "3pahnNkr3GqNjFcsUdtE37ahGLxoozPDnZCtXPAQea2mEzQXXoBoVgviEwJ4DWGuuMZMvJDuLpXmQ1niKJtL1cSx",
  "key36": "36Gn4v4xDAkNhuiFMhVjoUmx84DYihkRc1nBfHkjTkFZ6AQ6GTpcwdngiEKAc2mmjNCHyGFtKpQunZ8g3FnD3fQS",
  "key37": "2v1ZrDQqaoBiS1xAK5yXHRwWuRR6qkRAJQYouRjfUvmGUFRmAL5ougRJpFs6kknBRNeaQtkGy51weKQQFdzmEoVj",
  "key38": "5Zr77PgnoBfVEwYcj6W8gjSeyyrsXzheL6EuKvEj8iaXWogEXLpH97eJCzYtZ7KGvksCxsayybZKxEh3W6cw1A9s",
  "key39": "2nWN3fusNkcY2m2UjmwBeU75m287GW9LQhyPmassttrr1WSDNDAQsvpSc3MA9oKbQPNT4ao715evFfGD45bi2ejx",
  "key40": "Hw2bi9GaWP51fWhyKQ4cVzQeYUAfpH4CS68brrJZZm1aC3cyRHVejsC6QgNcuC1E62QmFHkXf24tvcyhpNLkTy2",
  "key41": "2vp1vfLnDwy2mqa9KM2J3FuhpJQgNSoynsJaCqUzr9JQejzAw1RhPbPGonGjPfdeYzrFS2fHPjWxZBPizqE492fy",
  "key42": "3rom2mxi4GyhL4h3bGJLio9TnYnz9wy49UWdeJZUMBqPTAHdte7NYCUPWouQPxoxGoYfQv22K9DuJJdw9mQM7aWz",
  "key43": "27GtRyUtgqw2UXik52jcjSqiDWkiba9fMMa7DqM3NNT5o77HoDHYJ2QFUicwPonuJtDsXRwoAQN2sJXYbm24SB74",
  "key44": "JbBbQhJpwpT85k6sCTfcQvbA8y99sEzG9VHJRvAPUVp2x5NCwAbzG2u997fHMjRg3P9MP8jDFZ52DJ8z6Uf15r2",
  "key45": "reoo5hVfdFAe9YciMGpj5Jc4Kif36tkRL888UthQm9YsgX3RcwhN6hcrsyA8E8WUKtSBoQ2h8rSdMfSmqLo3qBe",
  "key46": "22YszfJMS4U9nFDqBpH247bCfaVPMxv11uRyfa3DwuqrYSG3TuChj12zAfGEibpWos1vbq3jY2EsdGvH4XNZViis"
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
