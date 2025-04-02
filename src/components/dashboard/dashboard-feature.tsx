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
    "3DHvnDGganrXvVnadTkwnzayLQkEk2jfamJH7rFDasGfZPS4Y1sJq59ueGWjn2Q2XaRed5tTgGFbNF2ggaYGsBnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vvzqPDKQVVjR4SryvdZGHc2mUfHBo9SfNPjFWD7kjPKaQX819ZsUsF1QFKqoYMh8ez3soe1GNPGonQBwK4w4zP",
  "key1": "ns4mLbEkep2SCkhEkccm8zxCaoq6jMqughFfzGvQudj8ymSuk9Rpg82A6bYgRbGioHdM26jj4r3wmw9tY3fzvmQ",
  "key2": "5qFzQdcm6hjoWqxqp8MQMySzGky953oQ6TksRej3yY7BQUaiRbgecodY6gyMRQXm3rGtcBgNQkHpTLCTLdVuW1mA",
  "key3": "3mDnj8pJiXABM39modoVbjHawVLozYfWLDz6BTSBpa2P9vyCv5rpoz4j8ZCWLube9pUg4Xc3GYpsnLqkKPVw4gBe",
  "key4": "2TpYyqpfcQozcCkkVPRqqteQz5zZu4BDdE3LoFFqCERwP1fpWFBzC1NUit68w6q3cGqBis2xVLju3kD2rCqgT4qZ",
  "key5": "4vTp1gLyM8TKg32HpA5cLexK6nCgnQbMkVkaGMRmUQ4MRioMZvVd5gqKcTmYA5uWvTzUNzDBSestJM1SDRvbgbqr",
  "key6": "5dQE7Zwr2E2cbe825WV8GwERd8hin8RQ4srdwyhq3bPueum7uopCLnheu5c3LjCnMWoPyK5ZXnGidpvBW5kTTvyC",
  "key7": "CqhgJf9qvQG7i7rZHg1kvF4KEzKU5f7WgX1ibDrGcwfNyAUhVn5VF5hqL3yHGEeKE3aZfgaxhDYRcUSMMc7D79u",
  "key8": "5j6RCpunsDFjQxREmrKj9c8CheuuCsXziEb4DPfxrFLptvDSZhArh5ieWHJiRNXaFAa4sq4UvNcwkNN7rU8qBuhA",
  "key9": "2FYPm8nC7MU52qPBe4oToqABpppDZj8tuouS1pCZ6TVaZPCAxFi2fJogYxYsCgRi6ZRnKFdE6BKMeLM1tsHTHszt",
  "key10": "oPNqDe221ZVtWJh7ZXihnYg3o84bHALzGCqtFKLevTvVxZwWx8cSs2pwToJ9KYhpCHAqxJpsSMY55eXHehtDRGc",
  "key11": "3nofKxC5zuhtH6PfKPHLrtJ59Bra5cQcL1n4DovZHv2SSB3JhF6BLNR6eu1CxTtMha5moG1enCqTDqhW8TCkRJRc",
  "key12": "51HQHBYLRFuNACTrB6NRNYghrnSxeyvP5r2JDazZxDwnSRDKLC8giR8L6ACiKCkJdWd7p6kFQnzGpKUQf466aVMp",
  "key13": "5AVMvbP9jYiZCzB61uNz9LYuChzpUWTn7S36sfKvSPH1uxEXZCuT69NoaaqwSxv3V4rguwFTqdA3unBo9j7kyUmF",
  "key14": "39KTKd6RZFS42U6TFqGDEV5bKS4byzkPkaQYV91uEKWbxMprJ3x6uXbiKpUxnsTF3kZQTrJpgFURkLEEu1UVeGVD",
  "key15": "4ZRgo4RD5pbMjC5zv12tS5sHJ64uL5B1RhXD6zmcePFfYcM4BSPzwKmeGYk2Le8PLvrUx8NcnDy33LkEejc5vgJV",
  "key16": "2q8TDqkTTz3Kegqtq2Nk2zJ3Qc1odgrzuEDGmCR5rzBdGCRadtnWaXcN2TMLizMy2Ef6avqEcPwGn7exaA7n8Vgk",
  "key17": "kYMLiLuiZt2xFDQp5rTg78xMCqThwyV97RqtLKcwa8xQEqbXPXmsCqDFhzU3ScHakzLB1fir1LtwosfGC1n3khb",
  "key18": "LbwGFkZKABtE1DAtoBiM1b3a7eo4XYezziMwVayBwd6tP1Lxw11NeGHf8CCdm6Hz86BTDuXM4WztY9KxW55K1wK",
  "key19": "58V6coFgKdocRPzwtXQYzrLKaddPfzBZDZPyL5t4jcyzxR4rCvihkjjsnLA7nHvm7UF7VZYpAVEjFMt3M3aU73T2",
  "key20": "5PENmypa5MEzveVjZNXRG6WgWku2FJT1GydoyG9kvpGr2ZLnE2bt66bXHg11WRA14G7735eJrFNXywbV8xGikFaG",
  "key21": "3qrSTt1zWSxu86jg3ykHndB5mGu2FjLxWddeGECqz994sZkNhYg2RA3xKSsjHUvN7EUKLBU5t9L6uUc5TwxRfnHC",
  "key22": "fVQD2dxm9b4dpLHS5GRkNsrVo7CD7p7ybojnCA9zyNrxZk27QiKhKmeQCPQq7qhRGvudWTwDeARNY6d2pFTtG49",
  "key23": "2gJSBZ8Qbx7Y6F9psCzPVGkBFXZYnhDd3jcwcdNhVxNPeKqSE5GYS2m1uWcqGTMW9tw39bZ9cjLF9Hi9dsbVgHVZ",
  "key24": "5VzRtVJoswhs2SM1bGFA7fMjRT8m1LttTLHdBJbrQLwi1DL8vd3QDdfcA5KteQ3N63fJynofVitmj43PkKyimUvx",
  "key25": "3tTe5GTKrLnWuPYmJjr1eN42xLxw8LS72jgtcA9sx9S3n4uCrRjTAq6Te2tP6d6eosJJJC3E5i2R2EwJZF2t7rz9",
  "key26": "2WfGsUzo37LhviyfydRLa5mn3JJhb5VH2EfFLjX4Qwvu6jqYh1YTy4fnyEYvSQEVE7hvojv9RCjBmrDiRAQaamqd",
  "key27": "E9gyEBitJM6TZrxq3u8Q2PHUNW7QvVpE15WzSQtLJCxC3X3BXF5fx56urf1Ui6MDX2Ckz2pZPS2ycJiRTinnCye",
  "key28": "5nN2UZLhqx2UFBunUWGdf69b21iPNrpLAGGqRykpLN5asmdrigjTHStutFZpu5SrKvZcrnWzhBkMp3hdtbcgvpyZ",
  "key29": "yuCbWwrgoJeCSp1XvFjT1m5NwuwiSfBT5g7pXs8ooZv8kYFW5y5pGUvNBK2i7LzMVisWTpfPZLrt2iCgtcEq7Fc",
  "key30": "3bwgAqBbHxv4uas1t4VXwoan5SDMd5RH6m4fGoV8Zo5kUMFUD9Lzh64UAcPu664YfpgPCxk1pSaQUXH6877zCL1y",
  "key31": "42hXWGcawH1Tc8Pj7rj2gjQj837QiEistgx5bzgd1LUSSZBHeoUWhezQmtwD7L5P2Qz7y73ktKhHtX1mxSR52Lg8",
  "key32": "2iH6EmmRHUn7ro7caXkd74GLFxYHPgx4avopm541kA7qU9zuyR5KxFDvdqC9Q5W2EaUxKrQx4Sd8DwPrLz5zQNqL",
  "key33": "r1sQDJKzxyJog5Echuu4FswYwZqrTozUZGpsZzjYx4uUc23skSnqT2ip3HLVD5vvM2Qzds8TEPTiPiTofTKeN6J",
  "key34": "SLb8cDYAjti2JnitWjuDzorxZhpz6xvTFk7DHxZmwtmjbcqEyEqT6i4ZQ4KCNdVSqayGN7fyJpUmBtAnM9h3NDq",
  "key35": "2ECm2CuqHvvE178um83A8PbCKZoYt2u99jFmSKrS95V5tYGdDRY94NCdhCS6jwqRUjAGZzMrcGTNwqNhrynucV4s",
  "key36": "5qmbsWu5RzawBHbCfgES18FVBBkssS6CopL6PaMPbDfbwQ64AC7VPhYjXzsJxEMe1SmFLosBAsnXes43huzRMY5R",
  "key37": "54C8bWMtagoAeMJmQkouz9zrcPEYqPiHXRn6qSo8VaiR29ZScyE72yqsA8qWgztxv2HUjGWY9cXJrGMM9K2PRFBc",
  "key38": "59ES6Bv6jFrymPi89ZRNWPGp4LpfBsc9KvLbDrecyKrUQ7St9TGdyNKEtzNhR8j73TDWu7hCr5UjXCQK6AasCbEe",
  "key39": "2Szoo1ba6FeAMaCy3hBcvUHVRGZJYxdua4EtCHH1VZ7JtCNdo2udN4r5aaGPWDgEhiEbyWYEzz21sC2LT7Uf5Mdj",
  "key40": "3jmwYzxUZ7AHGnYPMvf8gn6go9z7Ak6mpeZ26YqBGpTd7iwJrDMsHAD9TGKxsPfnQG8eCPLBaHZDAxG1Ho8wuZQT",
  "key41": "2k1u2X7dccXKx5cc4CtuckeCKukroTczCaiqHqDQcCreqP27oeJogKQxXm6Nt6ymtki4vmu7saasoN9dsPAT3sQ8",
  "key42": "4sKdjn2YzqpzXsCMwzhMg1Kib34cFoWVcihu47bW4oZqNByteKofRqWa7U3j8VVqneQNaErpFj8z1KZ4HF8aWyM1",
  "key43": "3ZSLoZ42cJgCjnR3P59m2dVSDuUAyU8JfPUuup6vgjp8jCAn95uY5tcJqcXxqium7iyiTtfdA1dfjzDcqzbmkhVK"
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
