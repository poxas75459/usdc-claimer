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
    "4xy4wu69Pr9aXMQx88Zgzr4BvZ4Eu62bD1yg8BBK33TyUvjCRsF8KwV4SDTnYPds5yVrf864BrmbnR1f4yfmMXUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FuQKjpAGR8uEYs2QV91miBvEwuLe5bHziFmSaXqD4YE1Wvy2vmic7YmYNxAidXaG2tar7Xs7214MJGKpkBZ8E2P",
  "key1": "3ZZFs5X4Uc9xnrGy66gZ9wgBvjDoXSvFyFgSWuwaeJnTQLHEzfq3ZmSicoQYkY1SjDZqKgvcd7xvJcdVtfjmGcYm",
  "key2": "3CrQt2Y2jNWvStBn1vfPzDj6S8XKrM5ShSRTTtMQAmmxDpEzmVWWw3JSRLw357DnBZiGjU7hqBto6BRw4RfBZNL4",
  "key3": "4je2St8Phy3btLgtUnnc8FwY1f2nhVP1qzBad2NFBJk5giCHbSmNeUvBW6wYX6Mas5dPajSY1SBBoDiPctndcbyp",
  "key4": "258uNubfhqkzUAoroYrBzQ1kjwr6nkz2ggsaUrd3CTkdd9eW72mcQoBfCj65yheMSCC5kzzY9DXpE5TFHzxRpKWZ",
  "key5": "5ikJyhjrorTS6Vfzhek3cqWKkz7G5VoREexZq4NrgeEJKZpvXD422hnzQGzzFx4XN3m4DGBwDrK83rhmDnjyqAtZ",
  "key6": "3sR89yjEeZs7MhyR3qxno2EJEkruEitXkQcVrQgper1a7x9fxgsFRRbGzHTbM85nwPEs3gwRKcWNHwBX4prF7wB9",
  "key7": "2QMYkd2ux5rJcs89ZyFrTfWk2cNvwvm1nnvY1mcxmepWU8roZDXQwND2b9PRw9V4p44Brtw3Mw4VWgesq2QGfCQv",
  "key8": "5atV3ygEAxG86Jgnjb29MM47fEjp4LJeG5zZFoLdJEBQF7iarb8NHwCXkzYqsHJ9BHFfYfYkMz4ujBvqQH44C8Rz",
  "key9": "5psTpkP7YXGAJzTYthgNPVbhHAQcJohEz8NQP65DSg7n8ETYauCF6iEZLnTJqa9zJ6tKYiShdmXZLvQne53x2Cig",
  "key10": "4rEW9cf5CdCTFnr4x21DGu1VcZvBgCuVzhJR5u9iu16og43BMS7Dg4qoGCCtsg2nWCWvzrWyJaWFopXRCtBbaLLK",
  "key11": "2F89JqD4xjJNW6qJjBtN6Zs8Bvj2wNeqcRaogg4RJ8J8UH22f1bYJHYabAbtsRUNYkNpMVRJeox3nqc1uPg8Dhbk",
  "key12": "4YqCzBzYyYpU7voZKZzWHkKoXMDZJ91mV85GZPcYUW4RsAeTWtmQeRkfSDQ78VERXY4QtAmck6N4ZcshzjyJfRgA",
  "key13": "3GzqLzHqJXbis6TF4qJuAHobLWKrQkms7UQhChKEgkjsDa3JFFJqbsky9cNYYxp9WLbhFhCpp2Mj9xVaCWgsKEBa",
  "key14": "3ZQ7avuhoGkndhmtUvWtvEoF2c7XPwu8ZcxSCiDA2ujRpAoobfy1gBV1wqVMNJ53ER7n3vhzb4eFFCoKJ7962dMy",
  "key15": "3AWpLvSRSiVFKyW3bEPcqMvgKVnHTBw7wprKBnxvpjhAVneRyZRwA961gp6gZDFRpqXUtRfGscuLEPnTNFoWtJ24",
  "key16": "5fDyGogiaGhQcrPWcGKCpb8QpSWN5x4o1mjDME3jv4qq57w6NzWocmHMncrfBppJgZG192zU8CSf5uunub7iuZDC",
  "key17": "4fNfM8u1yXS9hZdyDxg8gYT6NomgATCScHRDK4Hz9q9W352XPJQxx7W4NWHddz5yJNFbeRBW6buzAxU8xBDy61PG",
  "key18": "2e9yL4r3J6U2L1PGGNt7qZ6dDjmiTLVBdSze7N3CDq1rqb3rMJx9iyoFHTKzG3aiG5E3a4QWN4r3Vgz3BA8cBpkK",
  "key19": "qx8vGrFgQJxFgUTkFF2yD8Szb6FE2aRgbGf9K6wMdqfMfHPFKDYciGEkNP5ezmJSESec9usbgaSR45EpDKqRbup",
  "key20": "3GNH5LWAJkdkZDbTWHdfVdadKQf5YDBqFceEckTnutnFjpMwf4VPZQvnejCVfXqh8WdzFdZsV84xFWWhvtbz3xav",
  "key21": "5sapteip2jQTQqtLyMWD2sYsYkHaMeUjpsSaHpVVPEpiskP4vkgN1rrae8SMfYaaAJwnxXc1W9r6M1SWKjkPgRii",
  "key22": "2pdqfCvbh3DeZW5gqPvo9bYeeL9kGnqnkFdweYZjAuND1NDM1PWcNMRySMNG4Qe3E9q8seZRbxmZdGrT7HzEPBuR",
  "key23": "5mhJ6boqGoJdGCfsPGqrpiYzt2AFdrQwE3KW1mrRvJcVK423QpJ5N6xnG8c4bTj59WoipCpr1vzKgGZ4xCoNdx2v",
  "key24": "4CiKMvjYH8bF5B3PhDV1Up2DrsjGR1y7ohi2NZF35grbkEu2HS8bvTJCQozpVghSNERhDAaLtvwSLz55c4XQCPXq",
  "key25": "8zAqVn4SrKnhL4d8dwGhzuwW7LXqZ3CgcwCJBmFLdhCYxgUryaaEx4BTSdtdKZw8o9m5unEpTrG1usyDPvk7LzJ",
  "key26": "JFBEUiydehkdsB9y8GKY1HQiT9tqwmhnxRmaEHrvKhuTzo2b5rN4uYHr3V8SbPXcUxBMGAuDmRitUMj2pnFnJcz",
  "key27": "1i4qKKhJ3cVRh3kCD2HCWMHdhkTwoSJWGz4nrqwWbE8uYcMPwpHU9EWdd5WX14ccQBhpfrgG1C3ppcvwWicf5MV",
  "key28": "5SURDPcM6cePoZcAVJFsgGaXKfgCYHnaiudvrebs1u63aPP1cFZ15NcTZaiHwWhuaQ2nnniDRn2GjLasfwxuXbkK",
  "key29": "4GjwQy1QH6DV2jKiUFH8z85gepVCj8VcF9DTiiyjNNUuLCJGkGzRfJHw2dKdJDM6FyNpkFVCLY2ZWr6tbbrR9tww",
  "key30": "2yaJ4AzA1yey1TfPFcNA7A2bsMxo4ByajaEPcZEGSaeVe6zn6MrgWZy4sTkADy5ANnxXHj1iwXUTSJrUnCWThA72",
  "key31": "8gvGe1ch7Lo3VFM5xi8nycZq2pALMhoVbKu97tB7JJo5h47AUCTHens8aZHXb97d79iFUqQzsv7NVahay6Kvzm9",
  "key32": "3j3RkpJk7qTkikggvvdxcHmJYb5hwMMqC6tM4gbhbwk22b1iEzvNmtmEZJkr8htBM5P41ih2QVWhcMdVq6pepNav",
  "key33": "3NEHg2pVnH8sYpRuoJodvmK6htBgzhESFT1krSTrwhGY1HqJgVXfpEHudmMKLw4ceB71k2FQuzjjrfQX4dEDQjC",
  "key34": "36tNBoxWTQeGe5qsUehQUQD3FyAeXn5AU1GRsVqDejyMqK1iBb4AQdaF9esMWhU35jbTaEP5woYCDwvj5cn8zJks",
  "key35": "3CnMNLC1GzLM2xbCZc9KVRgGxQwdmCb6d9pUhKDjpqxwoCvvKPgPehBQs6JvGjuzgNpw58GDYYt5reTzK8MvyjFs",
  "key36": "4Ld62ww1TVCnm3DW9XC2M4nNei96cNpAXpskzQ3pbJ4q4MMTHYJyD8v96UmQJ2XsASBSQNJTuQDpq1KLRyPM3ejF",
  "key37": "4RPFkMd1FMeeRrrBMKLm4WUa3E3N5mGjqSmLJP7kBUwqAy26uCpTaxbBGo76shAre6itAV3m2fM14TUmv5QobdR4",
  "key38": "4KfNqiPqDrs3xwvguxutLWX8Mt7ykmKZKrK8CZrn4EekHGNkW6aKhK99Fq2bHihV8QMpRGuyLWebmQyaCQzjZgkw",
  "key39": "3oWRtqS3LxgGFUrRYEcB3mfuc9NPiSVLRKKtjt5wPXRReLJeAAfP8ySjmg1v53EUXVSxdCunBftDFKP8Rz98pVtD",
  "key40": "5BD7fUhgAvBx4HHDM7A6ZV7CSZCWz9GqgUFpGYJyj3xY4p2Cwtxssg1AmQvfFoD9frKz5GtSCXUUTrTru1z53cw7",
  "key41": "4NA7v9g17FfbU8rQZWfHfnWVwa3H6dnv799TdHrB645CHGZWjFdfvESEi1mbFWMCLTxHNCcsdyzXikY1dzF3aNCS",
  "key42": "5QYmtjTq6VRooyAwcTE2PTMpowcwsszD3vkRzLEFfbVxwxsjHSbjGFNNXCH9Arhg2ZLRHCmtygYTB1A6yBaRhw3V",
  "key43": "253iPbPHKCz6yLpRMRKaPEV6Ye8sqa1ekecXhiEbvcDUie7Y2SAGnZVfBsaUAbxSaAxjHreD3zS2F4TYRgz1i494",
  "key44": "3yawNXum9CnHJdQYfqVeg3ZpYqwDheeF16hkr595svyNNXmWaL8ieMePJcwXdJEyB4skwrMhEiHPce3EDK23S39m"
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
