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
    "3DJ5H58wKogvQ9Nees6RRwTsZc24e9hdiQjiyFaiQvz4Cy8fD3WbASA7fY59DmV7s7g3HVxG65bU3C1dV1PEtHss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "csqmMp19U754v7ypEK5B8hSmbHGi6H7KfHaX2oSdTVrUJW8PbLt7xeJuiWRcATTMzQnwCi6kdDSPohHVqnUL7tU",
  "key1": "4QHL1hrS4kY4KsJsZPtDSWSe65FjWeTZdxeptfxj8PhiUgqncfk3GNhBfgaUw2aiVsQCqHzQAWGn6oiEswvfwv2P",
  "key2": "2oQfgbj9G8bHsQgnnCdGmFcTvmm41oZBczFbZc9L2TGhTxVHa7jBfVfCUKhdcubAVtASPXwj6ZfQZxFaCNNQqwMy",
  "key3": "5yEAeCvMPxHrQZ7f9adkksEUsHd4PUNir3XRw6oPQA4SV95gwniyKfCZSee6RubCjKA62Xdd7xYE7MzSTfNS3rkz",
  "key4": "2Y7qfRFkrqKE6py4k4oD9vf9FkhYQzRPze5bBpW5kY9TFC3J1NuftX9uhNrZzMmesmLWw5kp96FdPNHbfvGjd7w8",
  "key5": "64oPmpyTsAEXtRWaTxZikH9JybECFXTyo111SaBkoE7wQDZDFnmitEPpN5cDE2JsyGLdSQsdjhgLxMPhYkvwFLM",
  "key6": "nUS9vWxKR3VhdM81YWkgb3ow7K9hJhuX1N17aEvo6VyjJH1NPx66sXJRdJF9zct9VvfLsNjLa5EfkJKvsWdu1jb",
  "key7": "4aKquc2AE4LVxizTR2CLc3CdD4RpTJXWbwEQXWgfdsYHJYvTCHXyiMetcnguNazqFBu9b8XCtgSXdDrCXMSgn7jP",
  "key8": "pWR9ndsdnL9eRSnRcG5BEGFNgeXrSD1WV3gZxztNMz1XPUBWfocZxTqkUnJ42Ch1yfnYVx1CfBtMqEnEETFqoCB",
  "key9": "4ZKpjW8CppgRp6esHqQPfTiTxGMzJYPrurJcRiykVeUg2X793aaGkZd8TqVTYn1jJErT4u6Kdt78M8QQK7xbeNc9",
  "key10": "44PS5FwRAouEska31H37VGhHbfWQni5u321Eb3HYbTmgEjHy54dnKfAtRUDPinGTmW8KYcSzosxDDbm3habKKMyD",
  "key11": "3ijcuGscrLtaurFuNvHjpniy5X4PjQQhokqcPuGkkrumbErqNpqQbjvrZ48Zcu6ZkU9EQQ8NEptNwQS6PkpHkxHN",
  "key12": "5JFK213ga6WJCr2tXUiCEmhZhG4kzeZ8wePSHGkB286SKeCQXfsh9Mpn6zme2aEQAfateCf1ujqH2aTnSA4z3R4L",
  "key13": "4J6mh8DBDGmkSNmMg9mGpm192WjzfEdzyB2b9uZW9eKGrDfZ1J8tf9KKsmtT7YktJQRtvjLCjReUXukjQTN4xC6F",
  "key14": "25mjLUBLZgys6E7Jw1HEas83ETW8jA1Ce6HbE1NVUUuafTy4azykXuTvyZvwAh85ywJvLA5BigDDNHSEKobRCNYi",
  "key15": "42s19Wh5v82TVvCzZBcwBp8r5276d9qPeNdB73EonikAaHqqV34cn7bGUtCuf9QUm6LuVo6bNJRzsUMjZcNh3avo",
  "key16": "3dCFwvomen4jzgXT7dR8P9WXzTJDvaUhs817S1McS4sgMV2oiadhtTXHNKZTm7CdQQyizkjqNRB9ovsdhSh4RAXa",
  "key17": "4wxAQyJZAQ2J6hZwuKHBWoHRXqAsvfV5zKgXVfuHoiocEtbDX8cvewLAEBPPCMU5PSntPaqLDanzQBWSzeEW16Yb",
  "key18": "28U4jVFMNCeGqgh44DMqXGzhGyhrYTEJ5wzJ3msNnWL9TwE89KTQuZ3EPjnx78Bab1qYdT9aLXN8XgSVTjiqSTcB",
  "key19": "3xHhiSojQymWtgrtAKz3x3ufccFQwBpsGap9ztK29zhY2EsWKRoKnVSDvg5pMj12LU8ur4sPK4QdssZrs6vcN9Zv",
  "key20": "2ZndpXvdJv1d8k4QyvYmNppt4Ax2hTa5CDVgVqKsUwz4pR1kTbmxE4boybLAMhZBoEngtQy3KaCB11efXmvBHSjz",
  "key21": "21f1scAaLJQ6DpFCW3XkEZnjjctp4WyXxXeReaJcVutEZuZxvcqaPkXPQUetX6tqUKbkFF49PPSNvmMUrRLiNrff",
  "key22": "5GYiq6Z2aNvmeD4jvzKDWiTBtL3QHGrwT1XBYubN6rGY2Qqt88jkfpq51Hb4aUiYkRRmEDruGUk3MBwXWkRDHgL1",
  "key23": "3S7jdRLk9XcVLNhd2owmv9w9dyXCKKrq6HcXBbFLbrTY5uAtQX9GajVEfGhz75WPM3dexiWV1qEgJXQRBP3FPsgP",
  "key24": "3jzZpsGq8rjSuH8NhSoGFNUmDhBWygtgZqGd1zAh8w3eMSjhW9hx8QYkAcg4huteEZ7oeA2HKr4ScKiJ3GRrVD1q",
  "key25": "2esAeG91hzFy8jsLVh9u1h7DPyNShF7jXabPfafoS2cQ4Z2r1EyKvACpfWFqcvWnddnsdfBMhzyhgWPW97tJ4oaU",
  "key26": "5op95eqobYWSAyV1QYxLAuxqJRf9zaHZpraSEwaP3HTH6dLb4mgrQLd6RRm5GT7ksxJr66LBKyc17JJFZ9SMCpV2",
  "key27": "8GbGm1r7da2Utj7RTZ9jvb1DY4sEFuX4mTyuFJ5hW7Wg79Qy5Y1rJ4nzpuDnL1QeSs6NC6KDQ2vWef45eBbPzzJ",
  "key28": "hKUSmyWUprzCfxkBp6h9uUTCUfRURqxCJEXRBj1iGkZFPTh4BHmyZydEDnmGimpox5SDNrrwmpGXdu9aSgrGVsm",
  "key29": "2EgEkLH2nX2fKWViU7WzGJMSVNT7FWv2TEjmEuuwGS1PsdR8EPY54kenqLXSScYbjPmkxX8MWgJBkG9YmRZMv8vU",
  "key30": "2cr1opEyRoct94ymyUFC4c47oPY5aLVMMU5HtK99NFeMLZ6faxKYdMuTN4CAfg6ksEQ5u4GoyaQb4wW9ypGDy1Ht",
  "key31": "Vpn14ewAWh8xU4SwMgbi8jMNSzsVt27mkCKhBJ4TyR9mvmFugbH8nyFqg6LRBoDFvdY5VqiuieQxn2ZHAK3BXPd",
  "key32": "5yfkJZbpvN4rN4X32rSrxyyTVCUc6BcyjC2aveu3Fyk9sqo2nMrbZ3i6FUmeV2FnHPukhFsav7Zf6K18FgyMQx5N",
  "key33": "2bVjtQL4WMjv71c6fjVkRve8Ladoxt11U5psoyciWSxDt9qdRfGpcaRLwjoENKu5AQvr18H873rCM3h6UsKPyPQB",
  "key34": "tJxqaqpmW7XCUHLexYcZoxrUZfqMb9Kp5aeQ1ZCSckyfp4qkTAEWe6y4iNMmQ57PGMNzuzwzYdM1skeaC66Bhb9",
  "key35": "5BoDt9Eu1zBEXfMaAf6dXBD6MG59UnZktHjkFRYpbmbvcS71vgJt8RW7ssQsZ9DhqGuRSZhNQUzYcPQS8QXP21A",
  "key36": "2bHr6qxKLmnhSNoNWbpwJWREGjBJob1bKTYs5G8KLRd9Xi8B1wSB8ddv8AJYUbZrpmkKXMUrdqdHQpyoVtAWcymJ",
  "key37": "5s6P3qv7yjWkJNqTTyVtJwc9bsKoLv6KCmeu78tqpAziy7pcuLwj8HLaxDvPtmcF3TBfkjPBAVJnSy36sZavNstF",
  "key38": "2U9CPXQqehYUgcTUUUePoyzaXtWUqeXxSDWbS3EjLHDNrSXug31spkXjpw16HUQdeyTaGAeEZohqWEwACrB8RjUW",
  "key39": "37FhyE1pLA4irmbDu7MKEfhVgiUg3aoGDva5NnEm1iXyrs38SefyJi1vUYdPHSwvQLTQtaHwa41Wyx3ggeU5SmrG",
  "key40": "5Nc55vmEXzNJPAWo5hn6pMKHjWgfPGkLawfVyq61NHx4RaHKKs4Row64Koq5CMuVbYGQ6aJ55Y6rKK9f7XPvzEYX",
  "key41": "41r4SRYzkcg9CXSvXtVr9Jwg5ywXDgQ7nrkyZfd2KJKtKhm3FTrhnQ9G4JGUYZcDMxwgS4hZvjkD5uH75ddHVbjg"
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
