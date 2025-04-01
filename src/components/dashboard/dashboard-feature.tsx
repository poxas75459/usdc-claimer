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
    "wZSbYewNrjhYYy2c8Zk7hFP29VKdbXrMqPeRQ55UHWHRmamAJrL4HAvRLCdKuBotUNBzKkdUgZwEaaCSSiQLgxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44vVpXFTEk1K5qJaqVKGNDwNSQdgQkegkziNQvuEP8JiAUTuT5f99CgB6UgsY7xsPs4GQWJxzRF8n9oiG2T7nXGw",
  "key1": "jQDwtR4VS6Mfougbjg9raVAyqpHkhFF8pX6KDiw38watyE8c9HZn6gwB96gGQsSBcNex752phXbMPZkkTbQvKGN",
  "key2": "h4BpLsM7mix5nQGuzHuPxkKbJgyfqGCBv2a3CRykpwvkQhR4zJtJ9eJyV8sU9PzpdffiKJMgPkajNKchGdbvRX8",
  "key3": "4MfCisFELG9tjMz8hgc9gyoHBvN46F123gxfjrARoMfvDFwPxNH5D1FYvE7weeniD2RqTAwnFTB2gPcZjK526neK",
  "key4": "4V2CzfX2mezVv4gxsBYRmw3DP1hizFszc2wFsEVB1yCayLeaUNXLVKnoN2v73JfFuSq2LsV3ZE68XCGJ69iDpS6d",
  "key5": "3oKBE4eYzyQ1gC3cjugRiQKiXiHwQij68yU5PgKzUYv9vRtS4UuBko3vjH4MWYn2Y2dC2VMY6hMKhETAxQicgvsG",
  "key6": "4AyFirkdpWNXSXibnoPwyUeN3m5w8DPkC94aAY9JjqQBsBFbGwoSbL6AjgadjfJdtqoxZj9ZqvbV2iQ5R1UAJkEW",
  "key7": "2ZmFJ8ykNibdKSMaDwFeEpc4YP1FuciuKsHp42c7tEmPHzZcn4sg4UD5WwsucpCtRmgzP98UJQZHWdUQSBTgMzEX",
  "key8": "3GEvH1PzRSdvRJPfBQ7MFrPeQbQpTJwjd4MVTJZKF2KXKqNVWaTKDBZ6JQwZGdzKhUg4EUHzpk1SToTUjzmz9zAb",
  "key9": "37VuwAPG86xR2HBy8SBzbEV336n984j8Q1xNgPpjCSHXVFYT5WhL9N699UE6Kg1UNkUtjewuWRkog8BRRS4UrSH",
  "key10": "3eeiVWEUx1WkT2Hhrb7GGdKD1YVGP3iA763wW7x3VaFio5pNPEimcaSaiD1RoVAbWKWbJGifg4H1pC18cnoA28Zx",
  "key11": "3NX5VyeYvqRq9qab49iSZZn6n2DM41hVBmuPZJ4bsrwnLmKyij1zWqGiY86bEjpVfLcV7gGRfVrjHEyEgzQPhM5",
  "key12": "4mxgCYM2hda8ogAaUKAuhUZmDGbpr67hEzW85i8SLnHZ41NGWCdTU6wtEHyLYUhx4uUw1vTkJQPwNcce5x9AaTBD",
  "key13": "4JkwwYDfatJYVrHNaDkaetBmB3GwsUdX5GiG84XpS94ekUarGMgtdcwsBfFz65xXDygM1vc2fmwhhyGsvqjyDZ4K",
  "key14": "25k7FaBtsAWZpA33bSz6YoVW3SxoRyqyk4v3MJ89bfSn5WJxo65cdnBMGhfnUS6q9EqqMU3526g6J9o1bLUdLLVZ",
  "key15": "5catAaoNMgxLn8sSczW8YVtsE6eXRamM11UipDDzMzj1UhJiJDZg4qAa5d44AV7Yy7bagb92riQwywQ9D1k7PCJL",
  "key16": "3R2LU1MmL5xqWZU7KUHnmcKTTsN1bDtkvT65zWg2S2PygoMQeJHPcEsCM6yipshqV1jZVmXtQcWQSKJUMxairwoK",
  "key17": "268DTgtNaV3tZjUnsC4XUzL62yopJ68Mb3g2gvKb32JH9ywSGQz4bqGubZJzjBYnecW4xDPYasmy7TTWkc9vGFEG",
  "key18": "2wqTPMKRXqUtgWzP8yMvM3H97HjrW7wqY64z74x3wehXDgkpWGrb985ESHwsFqeGfHJjWXLT3fMsnbNdmFwNmE35",
  "key19": "2a6rDGr92ZEnNALhAiDbJwbTqdW4RVk49AGYpvr2Qn9ep1SE6K4N7Xhf3iGh2bvhyjCWA3gsp9rBdzasWF1mr9SH",
  "key20": "28kgtgEymU9DJLyapVri8uZJTQyy9agYZwX4P92iw1esNnGzeSDbrqDMSJa6TKeWGEQWuzc9D2biAwMPqHQG6Yyy",
  "key21": "5rkQv2Enu6ExDcU2pMK9d4D2EaGgJQFLDAA16xBanhMLqEYnvgTyM8zmnBvaQuPRR9cdbCQwQun4ZLLEWyfVNT3q",
  "key22": "3fRCcpNbETvwVg8brrGKUqSGeYCA99EXQ2Q8qPkCR4vzPACqwyNSP88NpVEioq8tRS5SQDRyEPppRLHW6G5w853b",
  "key23": "27H2a4WgDmxftNdETwWa4TzgZgAeZF22hpZpBZBQHQQA1RE9wR5u6ifYRiabpr8z6arYBCVUZ5A2aftj7oDahc6N",
  "key24": "5o4c27J3SCCPiwQF4HWcQbVnVhTchN9FjU2rvBge37h7MUBobzZUoKpNQ5tQEXSVb4qwMaKVV6mKJn3SCtE6GmNA",
  "key25": "2bQ3bs1RfiVsbhAHSc3aHtLZzKaeuo8Y1Mfh3Yo3Gw2t46pHXiWNZGpKkro69g6SGyWFxvH7WyWATbSWJYDcLJBe",
  "key26": "4nBkgMPwV9KxERZ45LNWRsrjxMubG3fhjATqUMfq3cNt925USvC8jEfm7jwvr8kdHudgQtgPTWh5A5sssLLK6CFE",
  "key27": "5maWwxPfUuuwJKhmzxegeAyRtyKp4EQ4CijfEkYks4r455dF5WKebEkgK3F4H3ZdJYd91AR1h4YEohY14NjnvVD1",
  "key28": "5ftrEJSwzULsV2UpDkZBheDYwB7evH8u5eq6LeU51X9Qpk5QvvZD6UmAF9m3zN46rUFJjm56VNxwsyMZcDoEVvet"
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
