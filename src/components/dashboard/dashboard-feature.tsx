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
    "4WnyvsPP1dGssJASTrLigowavLKdEtNcJLoKY5yxhEWMqjHgAteXEeqMY2agPL5DkKZEPiE2yTcYaBLZEr4QbhQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "441jRaUU2Z7jEXC6dd5ctAzoA4moSp2wEkKKcMg26r3SwWS5PTwstaqajqM5Fw4Lsk7t2zYormg3XSdNZBXaCZrP",
  "key1": "3MwUdRA1Y2fNBUPqG8o9tf68G6D8JDA8WgvcLv4VZCi66QfNPjyxPnw3Q1mWo1gc4d3sggXLFtxgPV1bs1qjZ2n6",
  "key2": "2dKWQKgfSUp393tvMy7tkwEfhR4HicAtddrTGvZ4s8nbCjGcFDL3pr9jZG1TFTRBTZnNghmxKjR6pWYH8CUj6ejQ",
  "key3": "5sMANcGnfHuEnbF5e2cs8a35zDxuKJH3yegzt2tMFMx72ZaNraAqPZd8ZR9PQmrwuGcADnkKkz3g8eGSghpa2Zoe",
  "key4": "KLCZFLmD6QqZ8dCWsPUgQVqZ5C6xTyL9qRJLA3f1KZiy2iThVEqYtkwuS7yxGRG8LWU9KpwVoGYWmkdpgRh4zps",
  "key5": "3NY7cJNjJGCn4tHPqthbF12RtK1cy3dZVWdTz4hJcTMBVpbim1y2dKjzikf55iqvFN6x1QxyjAGgzHmAFhVpu3EA",
  "key6": "4qN7LoasssRaK4zt1LUrEbs87kLpNWstwiWq2Pz6kVKpT5AtktWA5DJZ6hDCGrDLeLScBGDmpHFvcZii29pm8cdN",
  "key7": "5mNKbgcPdkD8cLaZUPEmw3gpVin4ykkNgbG37BAuKAjAJtzP3pgyrPrigufZPDQFjuUs437vogsdcHTkFpXYYGYB",
  "key8": "4z2Ppm5ZwPtXDmj649MAycp5JYhwhfV34w67r6ZNqA698aPYQ4fiwtEsTLT6EBmrGcRvywtu7PypqC5BkchCZWpF",
  "key9": "29qER32Ua1mFmqtCbB7dMvFrdvp1mKHgkU6Y4JqXTr4tcX16XrWi4tX8Vpa5UZpkSJQh3jiqzcCASFLnJ5X24NRg",
  "key10": "4F7ZR22gzGh7AyXgjEzfg2tW3BBms8fvDoX2XstZTMmjZCij6P1QpxEKWnLMYbmHu4WLBqx7AxTvNzvGPhAzTYgy",
  "key11": "3Uzv4Y7R8cDyBRR3qmSQJrhztRzdZWKdmKHzza2gatnyPJCHamR7P6zGBiDMKW6SHSzaHUB56NKqFeWLse8cH9Fw",
  "key12": "4sbpcrUdjQJy7CFJNernSk7phB9M2KuNJjR6r6pcwZaX4qMquKYRAmoAxKPq58s9HeXJWtHDQuzHMFTmcE4nhD2n",
  "key13": "2ifZWquJq7eeaSvrapC6372ZJurEN8vEaAnXd9dZcecS2UFeU6cyaExh4WdsuULbNmY9A55Dgg1ik4PcAH2B5XNW",
  "key14": "5QELcpNWyezfjQPgkVYS5GshLSV6b82KZXv5RfPotwnT2SqtFfhZ43sBx9x671eqnfhocu1NPfG4e86FCUMeSFXP",
  "key15": "YfDWXX6bDHuLbjxZrz55Yiazo7QJHCrczdqy2Toan1T2Ae2Wi1C2HYWYPGW1oJn3c4hY7VjvWraMJzuAmKJAU23",
  "key16": "4KcgFikb5QgyvvfGf6GeFi1i9pZiUZB6TUtpMrz9bysMX5y5N1uE7Ms1GAsk86tYumByKi7r5qTL5UbaQHBzLivx",
  "key17": "5Ajn9qC6s7rEa6zwxq8jmRRHrj9c6EWeQH2zKqkAZVEdVMyr7NPA5tYrLHN6Nf9Dt5khhachV3L2a8jCQ7AfQvdS",
  "key18": "2BEo8FFDDWFvKcHQADuHjSviALeWjHDaFv6Fx3UrMfsjuErZEAYZmueuTJaCfZijwBFKih2yKbPBoNVoFcF7g8XL",
  "key19": "3URJSexcAZpU1nEwBjgJcx21wipaXY76eu9SiyVjwBmg8KkB5hdV9U8fmq6UAdZZE6HnFtKhWiC3tviokPZioxFe",
  "key20": "KfGWW6C99poZxAygU5ZbPqq6BA2x6kPEUg4mxtDhaQ2XqwCCrFxjYk3ZSTDXrqhc7myHTpe2VVFoy9zkG4VwAYs",
  "key21": "5YwSfhCoBt3p6wGxzJmG2e3iffyKXGBQkeFKQPieARvELBgvyd3qdboh8W5MVsM51RyR9xaiCDLHs4MD4aiWmBii",
  "key22": "2fTmTfWH5S8Jb8RjJrR3yxEYr7HSwoCDs8YhC6uMiY3NJiveMyQM7zfpXGuQUsJhSSNcshBkTZkPHcwaF6smJvfv",
  "key23": "3LTgo49zWgQUxUr3gN1SMEqcYVxzRAEZS3pcUi56TMRSGVDciVZNnuvZKUmmkdGucrGTVK2JDLkmc6KypukG91BB",
  "key24": "PChr19w52dc1xVbUzmMToxZi2yUAcevsB53f6ZVjiZnwDejqZkgr4nduJERYDVQQdiTG8NZ6XgXvonLX3QkztMo",
  "key25": "4Sj5F7fVVNXTKU2pNvoECDrZYQ1PUCfzyy8Yos6xHQPLxJDJFcEabxU7bWUqsjYx1DmHSdx13CjCA61XYCWyT1dR",
  "key26": "nbXEPfYYhj1Uu67FMFB4gVRU948jgV4c2deudjCuaSNvgr4jYoHo98uxhe6beSt4WQbhLH4UQkeEB9tPKUujfGP",
  "key27": "5RhPxk6KHHYmMzUD5b7mSJPvsmUvraebHZGKtETMHeFWAtqC4pTYdy7y5CBaRZaeBK437LwjfxWpSucugDznbr4n",
  "key28": "37oESDkCPQGUYYZX97KrGsWsYU3LuHtWEV1Qo2sRxJZEZJLJatpvit5GiXrL5bXD73E3RYhkQQjzmQyuNUq6AqrJ",
  "key29": "5K77M2gfMvQw8t9ms8yHUY3wHCyWmRfoQKg42URjVzyaucVqACRcZo3hzEnAkB1rUV9e6MLU89x5idMyqkchcmDZ",
  "key30": "3eU5sJWTkEgbfg9pY4aJb2ME33VnFZUnRiNqbqewvW4bGYTxiZBgeiKkwYnXuQQ8ErxLkTxuiyJZsD4NhNbr5MDh",
  "key31": "3reea9TYqpFfi8g5YPMEzJ6Uj5ZxjqnRfn3NjmMSJuBQQUNsKhvqNTZ2GcDtfmYXvnEnNojwS2svK57eXNN9WRMQ",
  "key32": "3DBMmACBJJLX4KzQWhV8EyQTfPP5rKWWwrCusRbz1RFDXwYVunzBJRUWt9Ud2MnLCdKUtE9rw5aPjkCvqcJ26wjo"
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
