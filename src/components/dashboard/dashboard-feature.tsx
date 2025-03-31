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
    "3z1RBHNqP2Lt45VKPP4JTbpvQ1F4KkcessXg9XJv4nKmg9zU9G89U1Wtj61PeyN92za5Gzh2wsxetq9KJU2U4vhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnD25K4YgG567kxuEs3pMQgFKetyct3LBotnFi3YzLHBK69xftp6DZtwKhShWYwBu3TaiDHqdZ1Wr27DE2Tsn58",
  "key1": "wfhNri5t2fdfMwuDdL29KYc5Xnjk8fWc1Mtf9nQUuSvzfnVnoUDVS4P2W87tTkBFARXjyb21BdUCKVgPkgCyc3Q",
  "key2": "5FpzhLfw6JmmjXhpkDW2eiUjFg11SAdvP1eG87WR6rePe6Y9exjg4xPR54uD3LZH75pk1wbGyfXogbTKRQMsYz5R",
  "key3": "2tj6GezPaFELtBa58B5N2ebpjrmYTNVeRkqmqq74Vac25Py5Dpvr6BVnaH6ZU4Hqd6ZaWBejJKTJrn5fUMz94JdS",
  "key4": "4fgfN4T3o89X19bNfcrj6pNBvJZbotkgi3iXRfBJkyhaZ9gVYupXY6789YRznQ61esD6UJw4pinw8FaQAZADZxRE",
  "key5": "GzGHk8ox1Ccqj1bAFnCJE6wf83g59yjt4vKCzCbf4EFReRAuWQwet4sradFbLNVASwtJaVEyLEjPtsV7rbHMwGd",
  "key6": "5fHxGmo3f5kXdhvWsgFCXjh7VkMQm7FHXFocdtfdkT1k8uEvkp7yJw7BmQZYDyQyxytikDEtKSpQJB9E6J6WSLg",
  "key7": "4QjPL4zfHcyD9AQcdyaAPQ1xuF188HsJCRsLrTCUrXifxqJbfBiw5vkiozkuiQwEFbexUJ14q98QBu4a1GAK4FYW",
  "key8": "3KwxwBueRZVbCBB1npjzRakrWMqDmqj2Xfp5mdNLdKbRBZFeqW2EDWk2S1C1EEbdYTjWyYAmpqDXEAaRZWSaMa66",
  "key9": "64yUAkGjdihQe4eoNDmYxmoM4NBYqxDqDvFEu9oY6wLPvqSxzT7H8RRd5GSedjjYQhNamjJQmv5GhBrUxxSsfp5k",
  "key10": "3iGEMhBtDAJXQPEdsZLuDYznzC1iapLryo941JD2PDfrGP31VArZbPqbfUbXrzgvg3BP7kBKPuoacB21gyoMLJa9",
  "key11": "2oU8hLFU686ymoBuAXMtigjAxHdsenezhhiok9XMoBzU4meFvnQ3o8hSbaE9V6QXLYff7LoPooBYAxkjt3LS5xJY",
  "key12": "5gcgontMXUWAkJZvkBjC4Pxfvb3YDMPcUeknf6cSkgKtKxH94z2teyVqfoV9W5na6H42gemHSbiyS9gTpRa8yHMx",
  "key13": "sJgLyRx6XasVfsGtgUa2DcVQHBUa9JfRd9xbMhPqwPXbUtgjTT3Gkje6rTXJVsFxQeFkmg2k3NNHCQNeZbb4oz7",
  "key14": "5rK4hrjnF6SYZ1DJA1WpCKTVHSAtfUYU7Tagb9TMubkCihS1GL7hPmJUrxJbpSjDL9BqLHC5MiGfRvJxp5zDpNQD",
  "key15": "3N76ToqK9q7p6X1ZvxjRvRpi8e2U349GxdZVCwyJ5TwYLhCBAzcCVKBGLeBhpNiNXzqGLyiGVaULEEuiSoPSJs5T",
  "key16": "55SDJma7kowcqdMep7NqdMeCqVj7me3o9dak6XM9jRVveTPNh9ZnhHYxAHFENtQcy2cNZQjUwP3zG48LHiCNnX3f",
  "key17": "5sJBUso9LyiCStWxnezTSABvix7LMn8uELCQpgoycbx7nKYD8AhgqZXpRtCEziFxABsuNae7kEuGDKiGx8E3Vmne",
  "key18": "3gEph3qh76w9PhEmavERkzTtsARZvZbyd3e2ojkDUpL2LmXcHQUbZE6UPkzUGfVrXXvDPWSwziDgpfiDigfFYBh3",
  "key19": "sp3GDecUo4mEVD5CLr2j3LzhcCY8fFw7ThznrAcieapDU4GUCajsWWgVD7yR743ffC9Azzrg7AU3WtoLatsdRTq",
  "key20": "QrQLoRuHcfGYwjbmbqqTicCKAiBX3rYAyKgntQnWoPLdswpb5BbyRwH37pWSC2k3bM1AvTsnjM9HJADHMJmU7vU",
  "key21": "37hr6KenE6LyokDh2oufCBjQ8eYnNEZQ7Z4KtK4bLXdPLhrMNjhdLmzDVHTCj3GMqSvZvG3p6VJNmPYRLurfoKWE",
  "key22": "53wh2qtukn2C6GkU1Z8jXytFAYwuWmgz5ooSDVcKhJWZZgqRooGnwnhBzBw9MjXbC2jGfJebKu7C8Y9FLWxJdLix",
  "key23": "2mXeeVejHc6EdTBrAMuKpAJgZmLYHXnB8J5aULctzcutHU8nwgxmDm8A8k9RxtEv6fToQZDzarkkTbdNwSxST7uC",
  "key24": "ZjJzY4MdxFPpaAbhKCofQGdq7R1pgLag2M4Ki7d9wfPB3rZ7L2HYqMoJFqokAexj9U9EuUXH4jBSe3UCJfHFqrc",
  "key25": "3RvVLi9gmvvW4xtsDHaGn8kbq78ZccZnpvAmatungbgrAaMniJjKRJfm4tUmMvGwgdAqTE68bWe2EcEX5wkPKiWR",
  "key26": "TGhVGoTE6jLCgud8Q62M8uXz5bK5EWGqxdM8eDFBZsMDvUPnhkWR4ZdSZunsH7zh2P4bFgZaot8tbs8xETpALhd",
  "key27": "5vfHRUapWET7gdPUxRzALN1FKYGbzhutdDopd8t3QtNTz4ufkT9mLE5cixGWbQVdd1EUwDgXCtt4k31Pu4PXGGZ8",
  "key28": "4dku6QeeNTb37dp7AXYSXn7i4UcSZJmepTzwbKMje5Zp3Bm2L3KSPqVeAzqtc9P5a5EbF665Kk4NEyTicdTL2Vjm",
  "key29": "JpckF5AabkKkpf325UvbGw53tpUo2X4RcKvnyHFiBDdhKKeF8yoxSYgvw17MAJphwEd4CJh1dwkfeG3opU2FFzd",
  "key30": "2odB9np2oU8hvorFEqikKBqMuQ7F993kcCw6jBGmuPy1xmKanieYGw3HszpeXDYhbJbWF1wVZutRy9xX1aZjvWMW",
  "key31": "63wYGt3nvQ4237Sugt1sRwzDXbEusC5qbXSiUMCF7ESReYoUYCmQkfA7hZNoYEBnfu7j4wh617F7KDS1RHw211Qs",
  "key32": "478nVv7resKNj7memrZuFKUiLw3gBPYrqk1LuvKGsn2TjKWwvbvPnJKzrhN2rmqPi5rgBtjCkMcc3MtZwDVR32Hi",
  "key33": "3qz3x9sKYR2cwZCtogLLHBJUPHV2US3AvAXeA4KD97HajomBvAzgkdcsAx2x2wRAfJHbP6vxmafQasKNaUyz5jzR",
  "key34": "56r82U2Ph4qqULznoDizqsb6XSR8oMQ5wsxwuNk2GmSoYKm19aHaQ2wq2S5L1GmhQKrf6NduqNGRZXzXaZecPw4p",
  "key35": "8vPmN9oPXkCgTEqko1TUS7VPbtwoTWBRvH9yVsCTsKj2vBZeYERNuQY5bofgATSF5ufBzdmWHe1iLtGuXP6QEKo",
  "key36": "3uXfUAH559ZzuMThymSzaHJMC1ZkE8gRfsachcrfA6koffaGiCCWNCnCLTpfygPNP4AGQyr7tjEZPemXcJupx5kZ",
  "key37": "2qw9SgLFsLaerYnscDv4EdN562ArhgXKYfVUNt2AkRb5T5uUao7eTioKGcoytGN1F3nFLWRwAAtJ5ikpvSKaufBB",
  "key38": "PWHk7apSukLnCotR4NwVaErccXmcEYWkdbqJ26WNfXwxEt5bQowV4QW8Y6WTtRE5rQfBBKUP23X9fNLte4MMMyG",
  "key39": "2y3DPDrw1dMh82rZAsP5CUZtdUxjbWaLqQGi7wu28hda1TWS35gLscJXNrgkCozRzzcUFo3R4HLzzrw4sZKin3o8",
  "key40": "36L9F4CebjToGBek4eB6XBv7rvENZj4Kv6GrR1WG4Mfk5ULt1DcJZe36HAN2vHFedzSkCZjxno9JhKwdJGZQRe6m",
  "key41": "3trMBudCCnBrVd6MMNcDaEEvRkmf8H66mTAjzGwz3TWTfxyk92xVGMSYsUD3sUHzo4NjckbbVu8xVL3jA1odoXK4",
  "key42": "4cWvFvSyDPm2Ud4Z97ZNc5J6KGvhbFFyhv4gYALMNJfKQymJXbSV4z6wGpQswuL2dB6zokt4vStpGeobPGtHUawB",
  "key43": "5TjnVMsxRvoLGDeJ4art1KY4fXTSLKeVywVGorcAi5Eg8DriXNoytCFhAvVQqfeYmJh41tU43JcLNbaBLU2VAK9T",
  "key44": "4ttnoT9aHNTJujnMZC3SsAx85ZhkmrAX14rdEJcL2VxZwgmhfKvHzrCyqAV2Pft1veCf2s41TvweJx8PVtiP5638",
  "key45": "2wzfXdNoW4xaAoSaaHB7kW9B6jr62R3J93KscTmW5MVDyYocD8Z7v9SrzebzacnBKDhyiuLVMBPrxcnH3rfmXo9S"
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
