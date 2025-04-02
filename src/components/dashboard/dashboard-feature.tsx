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
    "3kQ2EqdmVcnpUPJt99gF1b7CvSXbJ3MMu3KVFtCtREtAPMx2ht9hhs5rxKcMjMCAeFP2vvy8HZfhSWb6H1Fc1Loi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "87s5X4KRBZ83QY4RjiLdHThXHiTqQ2JeNA1GMExpqJA48xW3Bbh18n33teiTLiwCLCMEe1irBygtDsnhKotQUyZ",
  "key1": "5zA8cZdhtJKinkaLxHFmUfycVgi55Xw7Sp9EZkcxzxmypXSxBAscn9Dam5HYTp7Gha3fC3TXoPGF5piqRcHQWESB",
  "key2": "3KsDktSe9bxzTunbqMzQHabYcYsWtMH9BRjfdJ7FnnLotXXmMySzXM8PasAEbjQLWwSSwoyBKNj7BJpe8ns7A8x",
  "key3": "592iiprPUgn6fySE1PNxxG78BnbVEZrWR1xwvxvKDWHdq7oqNj8QPEQ5x3pShMCJFkj9fDevy2uvYEajfy7udhTk",
  "key4": "4y2P8jV5Z7z2UF2oroi1pc6np8iqJ8Fa4T8aYHA752G4TkHtRf5MYTrT7zkVjTpRb1PB6P1u9uHL9rqCXHJM3tdp",
  "key5": "2C6JXRkGcxqva8ojsxpgzHBUhcVhQJL9b4QyBvPPoXwFAiff5jmwncNUSquBjSYSymR2Hr22jZ3eBzuuB9cSZLrS",
  "key6": "c4TseqK4hExnWZ2bfcemFjdD5Xnq8GrzLTa7K8dkXvn7tnt7BaBKZi7Wpot7pgiT4EiUSpKGEFCZyL2LCe2vGvh",
  "key7": "7Fy9DhPf2gsWcCrNq9TSKcDpZ8yG6wQ3sZETYt9ruQPUee5S4yR7Xw4JxeJfHMuWBXEDk6RSPKHz2xDyBD918ys",
  "key8": "4g1ZGVroHDazhqXPXiMN1hxVXQc35yHRpmSNMoZBitmkFuUuYUzKSS6BHwgnhepLBrzsnPnW5dFJRjfhz4qRC1wd",
  "key9": "3zVuEqXVa5TpH5aShhA9RPbtMuSc7BNHBGi3eimZn9uoCYqDeZkdYvHrcwDD2bmWpJZLHLiDxyYYZ965HhSHRHrX",
  "key10": "yQzD4V1cBhjLHTe4qQZfBJSSYX4yNZsfPKisw4DuqF8uP2Sn6ULk66i5pUTT3MfgTrfYfohWZ7aaMxufS1WnH4k",
  "key11": "5PPDwKyYf6W6PAWButKwJGCN8y11iLxrd16Hecc3mdDZhweWj8KFQZDEqhyPEYAPjEGUJVJqdR7mkWZcuEToxVks",
  "key12": "4skiiFeh3KAPWR4DfxtYhZ1K9VTSu4dpM9aALFoyasNX1GpTx3QJjkgd7QryDPgWYw77WC9BmkhDnboggCy1BgoV",
  "key13": "2ixWB518okoFmRdjUuGpf42TbNETFLpGDBdmZBwTzzWupojn8V2ygiexKWimnZgR2h1Ag2bKEEqdhAJWgHHkJ2cp",
  "key14": "3M2vZCAZywaGRyuhhNtGewyU3P5S7jiqBVrFNtLy88VTDrMJ1BDunaSQ5SnoPKPueseVCZ1XGeu7ihrn9PppXfyF",
  "key15": "3rzLeZ8jEdt6dZki65gNCsXAcrWZ629mh4gNYrAH91urCyNkzoeosj6qqoQ4GoswKtfPsv93tMvh1BnKTLkBnvPz",
  "key16": "5gU3rsMXQiLkgrvkiruTtTGuX4NtYJxk7zd3N4UGgZFMrLyK1ezoma2SBa2Mti6qgdFyZmpnB6mrK9rixGyZ69ob",
  "key17": "3DHV3cAbCggDfgWKaif7qb6V17YENjQFYaXLs3yy9ABsSQRs2L36fYG29VWEPBNZQBFTn371QMeWKZscM91HMDxW",
  "key18": "66SNEKR6gBHVrWFcQhaLcirQVe9ejEruh8v6Ja86pwEK17Zr7tk3c3cePi8wyxhb3SiQSuT3hpXCTq8po68Ed4VR",
  "key19": "38Q3F67m2NUCbKzaiNmnHd4SWGFtv8HuqvRMtvr3BjtpmcUWsURWKmP8jWJZ5Fgncx5DQT6woKpBVCrj6uwoqm3a",
  "key20": "4Wseg84GBXmuXkH7CjmdAjuvGnzSM8KTGXiTMW3NZXRRkoazEFic4D4YgYcj55FsCUqFSvkyBbKMoXcp4gtnjLD",
  "key21": "3xoHncaXkPiv1NCPpABiDhvReWZhFQKfyDXT5Kn1homVBzt4rrsP6ePPWu3Qj9aFXwP7VUfUgUuV1w6nnqduY48n",
  "key22": "1TsAZroLLhdeed6F1yXVL3ZQJrFYbprxrZ1WJpxUfbiyJUhDMFKicmZcy4M8RSNri4B6M2AKKo5XxdBE1X2qPAQ",
  "key23": "HonsMtVq1fpgFH32QSwQF1bW6fPQ1XGqLPGtvgMoAkDrxS5UbfJNpEnLnKM4zFVWaXwC14681cj4ar5EstdCsk8",
  "key24": "WiVcXt7PeTAc91njdo3WJo2nNq55WEShpK2iAqma24FtJtjQfuaxnc72EHQLhpDiaa2NQ4CCtR5aLFKsT6nYLdh",
  "key25": "zss2XFVKN637eTufbaeGFTSwbqz4DSTsfPcuBg1PFKV7sNXye2qYeohULGKB7Bpn7TtJZFWo4GSg4SBvqNgh5n9",
  "key26": "5YCKaQ3qyNnHpre3iFSXCkM6rDaLCf47NL9toPLBguWrGDovi3LjCJYzaqZShJTdJLhGWfKX9wUMqK1JUyGuWFiB",
  "key27": "42LZG9GDmAuJbtgftLbeGNZMLkXigCV5b2EtaHnW3tY4t5JDXoicc1D7R5dA7QXEC8u4eHC1fb6fu8YMmZ5pdwhZ",
  "key28": "535K4mVPGd8UdNJkj54Np7rA2G25t5xEuTNyFkwGQppFy9Y5NHGuNVqa7TMrQx69BWzLxDbgEcMBeJNog56chVRJ",
  "key29": "Jy1BxS9xY2wAGz2bzBuKuGSpdDYjLwYDeiC8uBKza4fFtCYjDhQNnQFpgrU3oHWv14qsgVi3xtxWSgbM1RTbJHh",
  "key30": "2hfLum9mPSTRWQhPrjZksMiE36AB66WmnyF6nZp6SbHaqKcVS9Us9aea6ZupR3H4wV8vZQ7cUgzRkWrodKtZxSUi",
  "key31": "2M1k3ptPJqqrXzRdQFSzTquMe83LAWBZAVnomqn6cQDH3EjcNERvD2DQu3Eouy1QfUks4iYc6SsZ8eVf1dh4hcVU",
  "key32": "3CJAFtGUTsChrPEUyKuXte4fN4dGSTqUMmjtUMTSCbFgSX8saKtawJLUJaij6dHqms4z1HoeuBDf1Ch65U8tpFMm",
  "key33": "34pvJtCdKNtLweiMzpfE669MvxQu2WL9kz2HViKk1SJtUMHi5mjBqsSy5CHKmF2KkyASvDH3jqPJnkTqPnnrGZrp",
  "key34": "M1rZsMmzjhhPAZxuGZZp1GcY2BeAQyFkQdJgaAAQnkqERhBafR5qJ2AaHYnb2bQa6S1DaUib1U9Wt4JRpURs1Lh",
  "key35": "4n5WKqFHVW7fQEmDtnyKtyevSGXsqi8aRgWzQjeFyT9RwbGZH3W8Yv1bi8FUBXuo1DXNCLBG2HdtUKuczVaB3ETH",
  "key36": "2eertUZH39ohy6sbCgmZfwnro2xjpJEUZXW7noHt5HEAcrL45NFR5D17yn1UrV7CzvUseDHGKUAf1kgc14N9feuM"
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
