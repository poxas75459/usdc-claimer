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
    "E9aWC3wdcXaeeTz7VRT2txD9fHsmkpUAZ9aStAGea5Avj25wMF2r4r2Up8pjpgqtiHyoVURJrZfMt1TgLKe5JWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oSQUX3PBn5qiwLSMgoyPHkDwCnPGBAbdSxLaMSHf2qGN9ErnFwgW4TP82t4WthDLMijNo92jwU41uTFsKzsAUt2",
  "key1": "5Ne8GWqAMtqLmPsagmSQLip1L3ZsLFstv4cMa8Cpmhm37bX1Hv2GsAgEFXx43hBv3qMkrquHi7xeXXh9om7NFYrq",
  "key2": "5uk4QnDdHJmsFFgvXtq3eaGsteeWV7VRvJTfEeXUD8MFvE1uP6UoLz9ZKkzunuR8CyChZzmoDkz7ieoxL99c8vSy",
  "key3": "3wnf5m6G2bVCLauG8r8e7vBHLjb1BtWUNizdtgXj2s5B21iCRPKwBC16wkkQtrnjibB7m7aRtxtxVCLtGCEfwZWW",
  "key4": "cNFaC3bQtPRvsqpswgQaoAsfFJmCftTcyNaaSGt6PEKY2DXosiE1bWfaLdzz6BSRPMLXnD46nJEhBUecyVTYNEs",
  "key5": "5xq71d6HmgjygBDmRR4fkMftgwdopKr2NM3WcqSvnUb1D1ApKTGAb2uQfvKwoUrJkQg3M5VtWnmgC2b4fRPXMTDf",
  "key6": "3UtuuY8QdXwPeb8PnHTziruiELWVcjz6myyezQ8JzeF5dUMhBrpWzyt3VjSB122SW4NjCXZhEKJEyAq3pUFBVQH3",
  "key7": "4VmkFLiS6vpju1u4tMUKusYGuQLiZJVpbmnrHRAv86T3eep2R8ZamGRu1GP8NRimmAL4qu36dvcxd7b2Kjie8Gho",
  "key8": "3yEJs8oFKraqPvviyzbAsz1XT6oUc7ENthhScMbdPuAj2JXG938wVQprFhwrg8zVTxdBktSujff9HGwEb4T3tav2",
  "key9": "4SMGSqjCnitoSDEpATqFdCjQ6ssAwjx6US74Xnc5n9t6ukBsXhsULcTnBiw8dHfkQgJSJMNVGapfGKVHa2ZDVbLu",
  "key10": "479W8d2QntjxCn8djrfmzTyvpaD6NMXBg9LKyJLPi8ZeCHFHUZwgzQrLD6n8JuqBbU9J6uGD4Y6RVYRZpcw1kxxZ",
  "key11": "4Ly212BWMTwB6THWVYHx5PkQMtQHEuTkGSZdFEkC4YXazoVzqpdndgmaPuiKrZcR7jGCNCs8aFSu6rA4H18VvnCH",
  "key12": "3xrLhYj3ZJujq3nHshBR6R1TjXEPZS1QwqziPW83BPa2mbRij1QTV1ubw4BUZ5s72x5yjHkqNXUbjipFHWptGsAj",
  "key13": "3BQYvwDQzcfhnP7d6FYs7yWTphqqbtHHkwU9eSP2icf9vJv6m3rfY4NCHJmopLPELu1q7k5XcDMK5xX268WBn4Kz",
  "key14": "3EnUJVjcypQBPjee6QqD1u3bUYe7fZnon81iarMcrtK1WCwzKmq3iBWb96xvoJp2gsrJZinMoEhnKR61btNHf34s",
  "key15": "xyapv4W9ErcQkaGssiFaDaN1Uua7KPM28yT482RuMckjHwwMHcpQ9R74TVQmapzSbYbYTuxSe3aSU5LTN7xdKyp",
  "key16": "4sahA9JjhDaRfRnpdhHetqtHici97pBYctuzCqbMQQHhmNrz4f5ReF9Drxghha6SiPNyPrLAxrSAQbo5uGPL9WyY",
  "key17": "4WFX45fJ4EfhVCgR5QrhxAhg8sH2NkfBQEHMk3YK8Uj59GHBwuu5BENhgj39asRFQ633oKPd6ubZBtxLKqp6YYwn",
  "key18": "45AcjgGYBezvDwS7vecE1azUWJQ7okd54euwhhjvziEQPqdpoW68sCjkYrvxVRxsvqW87nAPPUnmLG4i22yncPMi",
  "key19": "3Sgfp5VxY8TzDY6SY7DvvaWcRZXVx5icoqzWnnJih6oEVQnAAJumtFiqcVHrZ5gmzkdG4XDwM5tSc5YLWuSdbYe2",
  "key20": "44w5Ucuso26LXfTzynZ7L4gERLpBiv3APxQFSzv6Voapy3fZLY4xLRwwke5ab2aCDsnfTRRhRNNXBydBaPajJ3Ct",
  "key21": "4BkEkbLAqBYBv9n3ZutW5QoRRZvuYp5FpwTxyZvffDcDUrWH3hJ7QapJiQ4e8p9EAQEBArTrC5VazSCzefecw4yd",
  "key22": "zHqNmVXZPQVdtrPxbf94oRV9JuyM3cx3QaJtvk5R3H1EaHzGgPLmzPHmrkKPza8gyHD1CCZ6sW3CfgoV1yYvmPu",
  "key23": "45CvddYr4i2jmqQgPp4CUQjhEBV6gDtYbhwM8WRe1vVB5uHhVNMmX2i7ETXYiGGgPwvYQeYqLwCn2R7ehuKf6ovB",
  "key24": "NxFDKbKabncrQ26GiCQBV5d8t8EjshUzPrcRfPkyuXLyNVh17jftH9cmZrocK4zmy5WAgfV3peqLsZ39HAH3hg6",
  "key25": "3dr1RKAeoQf2p1shPqJf69iuSvLBCxjcMMWRLRYNM3i9tXRQvSopyF6mt9qGoS8auHJjniKwoX4dwY4x8WjmZ4iK",
  "key26": "5SmvdV1pY8qWmLMjjAdkAj8c2s2MRQhKnnhRx13r5fFt9r4p3JiYG1bCymSiGnzusxNF5QEiJdit5fV2aD7oxRdt",
  "key27": "2rv2wTtL3gtNhPby1m6AG2jhqF3EaP4uw2yY1gZqp9Gb6x1PEvhD3S5JNSQYEXZB3vXTxER7D3dogmDz1tgJFD4w",
  "key28": "2xMp3BZCj8htDGpiCuiENK7LhF7DCMssEmGjd1ZLv7znaiggjwkkDqk5CeUW2ZcZegVb5hukfCVvyygeSg29Mvv3",
  "key29": "ChXzUqGsRxPqDhgSiVWaAEW4msghL8hv9j1p6v986rS1RMBbyS7F9r17o2Yr1kyaWZ4jyAdRi5cFAb21JwhEGWU"
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
