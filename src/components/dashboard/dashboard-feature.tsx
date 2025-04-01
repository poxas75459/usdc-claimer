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
    "z6ZXtAMy1aeS75kHLAq3GJazcKPoGUU8bePt2oSFET91y5nugXdTBpjWwtuixZqrjXJ19nR8PN75q2JGnq5PrhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1qHxPsGdtQkJXdP3dwWCBBzXSYWgcz2V4nsYJy2zX2DpiTYBaSC1TuPPZMdej1nnq5iPvSZZb2KuDFGiFwRKKK",
  "key1": "3ugkskWufRU7gSgoXAyknMHj2dPoyKH4N1i6YcMAWdgLgE9HfdjzbqXvD7K7rwAw4PaNPetn2XDVGg9DcKzdcHk",
  "key2": "2rktNn6KQ7WJvd8opdBdvBPHY1YcZwibSWKy2d6FryMmYTiteVaYow12RmBsh3k7fme58WaYW3GjjLf3AxNMq2zs",
  "key3": "2HXRaaEEUaXPt3jGyrH8CUMNFPQgPgtbdAYE9Y6d1xqzzAwkny4usFiyh6GGqRYt6MHdVjvzrRjs3Wv9KZ3MxjyH",
  "key4": "4fAhK1U7ZcDnq7FsQLMvYMmEudwPHrX8CCQTpHdWLZQeafmcGTXTAQkN8f9QEu84RJGbNJsVJFxk8ZqCjX8vhu1C",
  "key5": "53VvewSw8g7ebCvzKuiNP3cL29uy3CkUVhPKg48JxXNNv4D6R3FAYcDEn1ZfMjrq8A7FqX5mJkHHDUyhec5ZAaB1",
  "key6": "2bthzet8DqHkRALRJJaCrJBCEgZAzYgtB5yKKPPBddC15FPd1U9AjUvDWj8vwzoJro6EDifswHCP5K42CW1v5XYf",
  "key7": "5cJJypN1xmLhtjE1mtwZN8Lnd1VENtEwvXdEcMMhqpjmA4uhv5998JkobNp46CLr6QF2a2rnw2WqAvaBS7yHnzjS",
  "key8": "2QWBwU4zwwtsG2s5AeGc1cSnVzi9LpJnHkgUozX7Qi8ysUFSL5RaUEurWqhHjSz5jwS3CayGw2ZkhgQxFHJAGyTo",
  "key9": "5QG3YDoGuanuqNJqds6eCSMocDou3g18B6sh5qTHxnkG1BFjnfew8q4J5xw2LxbzQWdDRFTmrSPDrRnjjmuvkDfT",
  "key10": "5T4PwEUqfv6PN1zW7EhiPUrf5WqWCTjeTCtoXKZa5ciGvgzDF3keSv9ESPvZyydNXhWM9vViZ8aegZnNFUeNfEAP",
  "key11": "23NRB5p7tcqnTy29rSaAeojjeJSCjTkLktYpJQ97amnG8ypNZQhagzAG77K47oCtFKPAM4gLDV8C5SGv8FHYf4SP",
  "key12": "4WcpstVrKDt9ymTLK9VtKeWQYLy1fakqpgaqhu8ymfxs2U8fAJJDw3tCPJnNb6vCijnAVdgUc1sKYDp3ANA7kW9J",
  "key13": "LdbdVQAkF6sub2sX748c7CEKHjXffvqHtG6D5jmntox6cAWXajEWsnZYErFnMG88HvrPZ1tAXbKQz1qDiP2zkz7",
  "key14": "3kSHmacFv5fjJDcA19Him7545osX8XaExa9bkRRZ9eRXftMFZd5VYvpaExPQT9fSEEz2TeS99Evp7YQvYEMfJyeR",
  "key15": "oVxTAoG4yPHXZuFvagENEKLeppS2QnpGNDk7NUhHp1SACuGZetJnPfaU6AChUiXxxmXpLVB4YcYURvjhTAToMPA",
  "key16": "2uRrmTydjMrwPu1FRmwZxLSv7jgBn8Bx5cS8UgVpJfCxDVBV4UwbDHaRzm131rm9HeVJT6mQEz4p4QEiH1MBHmVs",
  "key17": "4s5HVhvc1uMD5VApKYvV56YAJmfPUNVgb6DyVd7i1bVpzMhU2T2mFiPkQ9yX7ffH5qCpXV3zid9BN777gsAxoGtb",
  "key18": "uQqZ4ygKMziXHoRuCR6uUdLfzgF1AxyMSqD1pcqQyvmYmX9RVWqm7GqM6dBiCz8fbhaLR9DnuL4PFkmqEcukMyn",
  "key19": "5UqmyoqrieYnGZq4tThb4jd1Z4NHCCs76FCQHqQJVhm9HFEvGdi7GoTPFuS9Xf3xvxUtKqChHQSkqfvgMnMp6M8w",
  "key20": "ySHUzuJZWV3wuemy2r1aXo5mqqZDopZeYNS6rLkPCqpvEeYankT5VdFD9Ay39jsXaCNUvgdjyw9xsx918ky5gBv",
  "key21": "tGdmUCECHPejGS1i6X4Jeu2QqopSr9nRnmHyg53ht8FidWGPGW3EZZ9PSxxK46haRqjGfq2YEdzqApY8kHt7KXj",
  "key22": "AxSojDAjKQ8Mq2QXLiRrB6osArWP4AUNq74uQcg14mEqymNv4D8VZerKFoJyXHQhk5faewU6igMtoKbi5kPzDP2",
  "key23": "9GJrw7UF7dVCoNEnztBqaBzRcyUHeFce8Yc8rwTvcKj3yLrq5cKA1AcwdJq7n5hsyyjXiDQuZJ8Ryy7rvggcCKd",
  "key24": "3HtpSZjiv4KZF4RFgARTC8f9LCGdsGQZrXWBkdqVRa6EAxnUYSwYeUQskBPpNSox1841P75S77nHZY38zXCr23AT",
  "key25": "apcndqfKqFAJLM27oueAdXHYDK3yQzJNFyFxtxekzq189NZkAJrmm5JaPpsxe6ykngXuENQt6xpixdEsbjdpdS1",
  "key26": "2vCT6sjwamP3cNn6PghWUKRaeov9qKxJruGho9k37s7gg6wtDGiWzeggZqewWTpoBKamPxzGNR1r52vNFW2kBRpL",
  "key27": "5zwwXV5AWAA88s4mEDWUPZWNzZur1N5x2FFuBxWssF16MuvFa78rUeeHeuX46YLAUXtppiuomQDg2D5AkGtJtajf",
  "key28": "2C5NuwdK98CwbWuUSM25wK1bDJotUDNPxtvQt17UiPyzrsZ8RpXCSKAKrazbV2EErSsfjPP3eJG5zEBDrNV57zm9",
  "key29": "2KXsKS7LzwpT6C1YrRqDsN615Ltf5wMpHpW39dyZYBLs6fZduyn3UxjKugPk7oPjLiNP7hZKGnoxnujD1Pyu4ZrH",
  "key30": "Znv1Lr5uHDisXPg4cJTTmbBXraLMuAxqewxkvcdCxsDqLMM4zYaKy5xSkgCABm2cA4E4ihRZSP1zcN8SBTRzJ7d",
  "key31": "2umk2ZJUngb9XBH6HFM4XLdnUuizeKgW22WVsE3i6FtXnebrSCskiVynKjL1Rb8cTWMqroivjHnmjfpQYrBS9Ahm",
  "key32": "4ez7vvpGveeH4LpUi9raKEpsDhPpxpYkt7MUtWNnM9eTZ4GEVRwNA79FEWxGEhqAMwHczeh5oG5TBp5LH1sz1iH7",
  "key33": "4ZqL6uFRpmdazyy1Y3jaAz3VvSXjV6zg7F4HtMaNzFjnDdpiSaqcbw5pK6gZoXeaEut3r7u411kcfgRpFUyktZjg",
  "key34": "5naX38PW2vMZ8nkeENU7nTrifUsZd25xM2h4fJv8kfwrJxT4Y9G6E94PLPaLTvqXzkae6XPuzJZ3wygPRaPrJb5H",
  "key35": "5pSLzVSqTsaYy1SWsECE56zY3ZDwnoK1WJ7RF1te1VfifdZL3qJL2sPYwbH8zrL5RWhAhKaZb9LknN4Zsn1U8rE8",
  "key36": "59uDRamgifaPgb3GUqQEjmx6hzAZtrE9fUYstaoSLDo2KYvkp7QVhxeCXkz79h3ob9YNvHaCC2N1agusqE4PDmYT",
  "key37": "5d7CNEwn9M5emMHxk2iCAksk6UxbRCeq7ScYbw9xRi1ZEDWFq7QetgcHG6RSFQ1UyAq2Nr6JcGUTWU42pJ6mEbBD"
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
