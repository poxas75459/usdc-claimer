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
    "4BhQBw64wKfQe18JtgokHLESzUutXvgf2XHoEcN1ZDQ2z2XmJKi47ERioiwPeGT9DzmAucUY4tN9bPukqR5g9UXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QeT5KsawgTJS4u9bPGopVcEPCRPD9EG2ZZYXU7D7ZvV5QAgDUCmbcYMazbWfN9vZKzc6iXeSbrDg7nxdqp9DKc9",
  "key1": "5ezhcpxFrtaoGAW4u7wcvxvYpzSv3mAM29uW56ZYCsHWsX2935EE53eKcyo6MGUT8zP7kEsEB6kbN7q6tJCvpY1r",
  "key2": "5KipsVFZNTdJTXHdaaBNh3nZtRDCc6BBgmpFKuGjf9FFnHP7vGZjVhim8PJ1P66ug65TrKQAGedJKRxNj8pqTR3h",
  "key3": "4GXAHCs2kXPaKgx56KxkVZiUNYac2FKkdVmC7bk5LvnRQrcHpukZohsf5Y8PKXMLfeJhPkMdpmdaqPDDxSPKWDbY",
  "key4": "2tRdsafeWZawvHVQ3mWfisas3GtX7mQoNdjE4jZ79739dutBEknkr9tCJChkiB6V6cyufq5k7E7JYC9pAL5cpmFa",
  "key5": "n2WxyRXcMjPbjuBsCXqx3AK4JLVeybctreQ6ou2Yfru5e4juSjc6qiTefHEjNg4U2kNgvDZYCybgMzBD9ndoedW",
  "key6": "2LT8EUiFHwC67su3BLRsrqpQQdW3j4UEDzXoLm29rq3Nx8iQd82AGri8k4dTjWRvzCsHBjEu5zFCyftA2M6EmtMA",
  "key7": "4tvsTKW5BNiPJmrpxUCmKTT9ERkVMz3isq7wP5Cu1DsJLXvZSV8SHfjXF3MahpDjjhJuVYSMH8W7hANPdq9M5h3j",
  "key8": "3EhsirHEA8ncZCEB7Ab8UvBqmaTSeQ1Te2eY7SdL7WDf6SeapYNRXDU7bjDNBepbvXyx59Q59jPa3D1MgczBsNyW",
  "key9": "48GNEEiQcpZ6mu2pcGEvxULNj1zJtRprXSHfzxiQZqFFP9ECry9G54EBvDothRcMHbbg3CJ4yVH5bFY9KVtqzDjv",
  "key10": "5nZDV6Zb8sw32ucTmXhCwSaoxdgjDNg8JRrPsVagqDp6gGUqJzz1uao1Ymj12DpgkkUnHNuLyTptz2AtLg38zDYk",
  "key11": "46aSKYUaKxT8nnyjENY7J1esfy29FDJ9vo5wuG9iYzdYp4KdefbW7o8euidVL8twKxAwWvjYRhEhVT49wpJg4KAh",
  "key12": "dbSYENDJS1H5TjWrfQfBodwn8B1vXe187yBrr3tSAdrHmrGyqCxAgCqTeDHMBzQKXv6DwD6hzEZLoWhPvYbcMJ3",
  "key13": "4rcn347es6GQ5oNmxhgwNsiw8PGWF29wPyK2QhUCMjopV3iqkiLPhryykm219rz3jtJgwGxU5Qux4JCmcK7vUd7Y",
  "key14": "5L5zkFEPA7CNV51CSQpcDgPzDs8B81Ju5xxuJUnKH83d4hpD7YFJDM5BHYjSofjTfgBisNXksKp6nP8q4FPhuEeX",
  "key15": "51AsErsAs71xMxKdp64Bjro4rCred3Y46UbEkqMEPh3zr3yuMjbdTMeZvZ74sMCtBgdygFKunNVUkHQjjPDbn7uh",
  "key16": "4DgP4BfkHr65CoyamxCBAQEK2ZPdMNLmq2RxM6EBbtHMEfia6Pg1ySBXDZLrotm3qqHzQwAhTrH74aurJdnbvwtB",
  "key17": "2M7n78mqRMNaBNcmv8tZ3LFtdbaL7VsAR7ALgb2PQqRXE9skcHYHB4jwgvgm1DfYVENNsUmWr3BTR2oeFhWGyPDE",
  "key18": "4kgkj5v3TuaExnNDH88m8dqtu4MFY4zndnzNfim72Gjshg9t1awdvbiedRcFyKjfbLstDySw4i5gm2JJx8MTu3i2",
  "key19": "3WJqo2qTQhbbPawhQqcbUf12TnpEq2veGuxtxbBEv8dPR8A7rFFbYFDnkakpSyXjdBeKVy7vJvtFf69PpRgfobtJ",
  "key20": "3y84C1eC7SdXhPYVbEvjMQp2xyRpH15ADQ3pCcDy4Azuz5smy5wiSbKAVaQPSwVnmrebMaPt9EfHqcN49VL3nqjU",
  "key21": "3DhHAHqUuB113YNrZZdATYJAm3UNnXKNWUksnGceX6zetTq77tUnYy8p8jaaGy89oBJbk8ri9FC65aJU7rZ9FHuB",
  "key22": "38nTFAz1b6Y98AwH8aXLHQxM9MoLbWvV1P5iBFW5GH9DpQkKYJ8WgzM8xm3SAuoKBz9BGxNarkZ8Zz7cxkDeEQbs",
  "key23": "Ch1UCQpieawRFFbGQGJ1FrWTXZWgmKD5rsUjAWvwQzjqof4gP6AfHwSDQSqMHheom6QxNb7REfTnGXPrcUECF6E",
  "key24": "3bLf5arbktHayqyXpBQ9tuAmoM7Vpv4n4z9AKWGv88Yz4ji7LYwbv37CTxqf2wmW7c6JujJ9tB19ZGc2hXz5DAWG",
  "key25": "2TkfsckppZjYAvXgcjF5r6TMRjhPdqMXCb4P2r6oEYoH2oopjmwufyHTNvg4i7BHiMX7emEQwGPH6cGEFYjHSnRt",
  "key26": "4kkTygPkLYpwMgrF5PnYnWqxdQHwHXVq4puZ1Gq2JFre9j5fJvbDkdnoQsDtpSoLcFqqZrhrEXrPeRasq6VNBGAi",
  "key27": "2RvER48zfZB9xT89C1VnpUdWjKPzn8azjggsLSSrt9AXM8kuXqEvQYpyeMe6TceXnesUVEtz7peaevLw8N6gxQB4",
  "key28": "2eJqZoYRzamNaqEqvMCgUVmoDjSED1s2WhxjkRbdVyWo2WhJzDTP1pTi2yUFLJe1rabsDVDfZkU2p6au5gJEoDnv",
  "key29": "Fy3jEjPwHwXQ2fWwuP8TdK3TyE4UEQGDRGNvZGn3jTKNxtgKKQNAdRE3rxCHE76dJju9egcjw8ZGkza11nJDb2Z",
  "key30": "35p2YLAc6DEpSCXxebVHf6HkX3rghs5NhGatWHJx7RkMfhA4cT8yJrbe99Z99ugDrS4r3iTHUds6wj86CHxRSARW",
  "key31": "5Kjpy6yEUqujehcydie7zThVoTMvuuMwDjW4MduA6yGbFBtuHMkqUfzBWHYbPHAH5knyeBWdgwDtj1JgypMAXwiz",
  "key32": "4adPfczbXwoArvZNZseMyKvcENzhzA2wvDuhqCVZhHmdDu3qtn2hhG325NSb9QxySeh3k1BbzfbwyjbYk2pXebDV",
  "key33": "2ZchG6Vxmz1CYfWpfx1HbAtYoPk6UbdH8iYxiJBPLBVzbcMkRpB878bjNNsQJ8Dmp6iM6eq9PWQmGvdhZ6mGH1M4"
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
