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
    "3wdHe5HjzRFESGrB5asaEtjm8Ty8ZhgqorEJ2uUjJ3TFW9rV5VSjnZHCngRKSQWzXmkfu6y6T5QgzsdbtNWpg4Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmfj2NeuFiRgVM5d1j19CUuU4sHLEdDcpx16NzMZAzKt2TXYk8PCSjgYshLJkVCrU3HZYbQo4BkiUNrzBEXJaR8",
  "key1": "3vZq5u859ZL48TqfQKjKA7EGBdGrAofjLuw3qEnDsZavgHG5AHUvRg1XeYxpccf4aA4MdAK6kZtz2M3AtZVWnuzg",
  "key2": "4Zn9zYG3x8t9e5o7JxpuHMaj5aVbZNH6s1q8idKTdWD5UkXREumxKtqSGQ79z72RcnKyvPYut6m2X9LeD1B5zYQ9",
  "key3": "3YRiyDHTkEksi7TC3adioEKsUZr5NttX9ApKc8qNY98ouXgw721Tg64TrSyDi7SiUNrPkJmPYEHdDEyAV53roYCE",
  "key4": "2sc8aNsGnuC2ysGUgr5Fmra488RekHY8JjzXeVaKXhsHZkoVTQq71k6vsW7u3dBcaq6WA56xDrqdE1RA8vJhEHpf",
  "key5": "3th3VegqL5nyHgWsWrbxsYRZ2CRsQH4UJbuQpqwWyF4wnhzETCbixdEuU24tXoYSkd5Wq4NMnnYRcCVc4Q8HFcE3",
  "key6": "4P3zW6dpuJjwfjCU8yX8YkJgWUosVBrD67SAg78NdV3ZNXV9xDNP3sLnd3yeqMrehtBy4rh9emCE1kkjVUC98JHN",
  "key7": "3Z7DLvByyK8ELRqKeVY4k9BYk9Pkv4bKd6AqsQt1Xz4kdVwzkGg6K7ZyVMeFc6Ps8AWV2RndGTaefKa7x6hUopFa",
  "key8": "3x9paimCJxsbxUGFXi2Nq6BMqDvvh3e7ioNKT2eADTHiSaGLEp27v4ynJATynRaPZgrxQ41gLG8f797bpcP73XPo",
  "key9": "5dkJoqcvUWfhaEmniaZnXBAw8Lv2GXV6p47PxKZrQ2MyJppwkmSgA1jqnZWrBQxJJMyQRQZnowYodD2LW6jYUPCG",
  "key10": "5xrkUydaaoPYbi3NUt9eqKvHqyC3ZtaWoJdFSrjiHuDb74PYE88y3twEXyRV2YWi3WejkCNm1nwhE3LBHrDML2WJ",
  "key11": "2bS3oGjtdNVTxMFJ4UNG3eXP8DBGY982ExKAWkbKCetTZ72QSfC8ZjU63UBzNbGBq5nRnVAUJTFumWb8neikwZiK",
  "key12": "4A3df52TtbmZYH17qjomCqeWFmYsbhwAspWVaVPJigyCKz5Gc2R83ExXzgqWxkbzM2JyxhCKoJAxwQh3SMTk7MwX",
  "key13": "39643VAZNr5duefMT78Tiv93WJWW432VmD42qcksDoBV3ygaFuQKuiUyGZiXRdhk4gkHqF2QJjY5emYwjmjEcS9x",
  "key14": "5VVmgVXqzMbRRfCPvzguYKg3UCT12PasYhoYHSin8hbwREYWMwPf256Fnte4AHyVb9mw2nSSiwcN5z2VGyFZWCMt",
  "key15": "4PXW3nbVMA8Cy2JLEgbAvLbwrSb6q2uTHya98ym6eaGanM8WUTRqkTwYorEoX3SLz7nYUEjJf7JocdpUxRsE12x3",
  "key16": "5KK3Th1DZt2n9Kw8jy3RF7noVd864zprHBZvYF95pf5wA9k2wxVaSTzgTZCC69DUrtK2H4K2P57CY8EBVF8qhSuD",
  "key17": "5d8xWFMG5dyyWqM7HNgWGURsnzaNB9AFUXxs8GZJanH8qfrkcuxHWH35Yvd8VQrTfQ7wSmhBtgs1qwJXbTutHLiC",
  "key18": "45KSeqtyXevwsa3M8VtFfVuDSXHcGe7AXh4XocBVomZcEdxAA9bZiFGnwX5jccpGicytBWmGVSHwpyXcKHCMfJMQ",
  "key19": "5Vv8R7Y5BTsahczEq9zXdzZQGjCJqeqCCjuWkxiNAJYTB6eff7GK3Fg8MBBq9KeEj6E8oGyR5FrdifHRKFMNpJLd",
  "key20": "3ta2QhkNNh6xBQrSVM4CMxXYFsNvWxJ6g5UwUUEi2Ah28ayy4U3zCSuRF5pWxXyYztNUZyfHVkGVmLjcWDJb66XN",
  "key21": "4cMnfV5TqTMA4b2QinfkdaaupoCoS3zkogwidk4cWFhtsLq7ZrRquCRitmCmNhFz5eFHYhj95kft1WsFWQoEFsBz",
  "key22": "2KrQcUJ7X5h7KZSaFUWm6MFacXb6Yyoc5xnMJYCHF2Ec7XPgd5nWjyTGYDGED1hkqX8uRnXs4AzPMZ4NccoAuCXP",
  "key23": "3rX6LfUoVVjBEmo4UVZatWofN3D5VQdYc1uWEvW6nnX8BeaGiqWd8mqCWEi6jmfGgYEXBcmY2mhWtEWLicBj8qYT",
  "key24": "4uV73S3wofhyi3a5uvNEyFuTMCEwDSiz3neTrdEFJaqiwbFfKpxc7vtBBLHFVQqwTKBbaU7qFw6Qd5WE6RstshJ7",
  "key25": "4B2YPHxnyWFK74RmN3Kz64VT67ShYmpadpifQLEzo55ZoimhnUqAqn4jywwehNN7DM5gYdfGfqhvWAM4virU6sn1",
  "key26": "5uageRxqfMw1wMkQC4ep5XTPyN9uexTvGHS541vQWbyUn4r4KuD6xDbpKLE5b4HnoAe8z7BRxdJaC7q8QTc2Dhg1",
  "key27": "2MZUFPGWgwjVcTFaZRxKt1pLcdBNZBviDexC9jSMGMbE57a5QV7GamaiuWmPQeW4VEN5rRXrqNXeNXkqjbTBKHJB",
  "key28": "3aKPGAVmLkas9LtnPBjarz5hQMNKd9ym4wQkD9d2KdxDrV12oBmFAjpbUmdcp3FLTXWNQi3mscqsTbMg8buQYiaA",
  "key29": "5kRNeWhcXske5QfMHispHHDxfwQmqFrMcybXLdxcaXf3HqzcBVJjdw9j65q33irDQMeMEAg9q3xsjdZjZTchC5hT",
  "key30": "2t6jyJ4WTgEu7qfDsWnabhf5VPTCGtwYjX9tN39eJca1XSc7zSS4onRLeagMieF6FCJa35GbDukE3JRzBGaKgiAu",
  "key31": "36vWRyo3R5FgG8DynHryeQWF3xiwiDY8jG8rEXweDQQxMf6QzMu94LaREkucfxYWVPJU5HwzaYPy7mzTiXCUYXkJ",
  "key32": "3bQyohP97ts1yadCpN3u5vR61EV3Ny94SLxHNy7GBtJKFBuiqcRiVxUYhEF5oCYtUQSWAMA1zeByhLutyYmxikvo",
  "key33": "23S5pvXATJ2mXQ9B73jftNBzmVuyVh8BYySJV79qtnBdt1ufsQomtNSFjgsKHq4RLnkCuoLPPx8jVGyPmxk16V4d",
  "key34": "5GjGL2sjXbrHFtPxZZjF4vveg8FsdXDE8eUJ94fMeBfE292i78cffTdCatFpgpegvyqK8VVNNk1Jk59Zxk1gJqkH",
  "key35": "3u3SuoZ1r9N19NVvr9LGVU2oH7c2PBaFXNZFqMsvDyFcMnG9118gnYRPYaCbQth4ZE3BBcZrdmQWQPYjrst1zCnk",
  "key36": "5x4g1q7H35XwSsp1fvCLjjYfDKZtdSprDAYPmhDy2TBTJNLcc3UHdygdUuBA3T9z6HANBS9WKcn2qxz1EGrnF2qB",
  "key37": "64F2b29qiCEpW6BbGHQZvXAEF7rH5R2B35BGn3cchQCjHmyrgXTi3KDikpmRTqt4srn2DwiP7CgMa5mq32fkYwB4",
  "key38": "3zuGVmjr5Z8FrDjfykk3rMaWQQcypZuM4uy689TQAMW1tgmbiGbJ6ktvPisAnevnB38BGH4FoG9hjB9p31wA5iMo",
  "key39": "ocmEadAKjZZJRmdWxhtScDwyEtaYvR2NTnEz8g28KxXJVu8iHG4UatJXaUGxzSaZZdrQTEsmE5JjDc8hSuyQpBo",
  "key40": "fe7u81d3swY8z1E225LtMXTxGxMWnght1T85EEnTzyzXgtM5pTQzLGx78dLr3eSYhXWKh5BaQGEJkpQNwNV8iKj",
  "key41": "4UJsULKS6psNXwtYz6dVz2m7FaqhTck333fKe8TCaS3rXCuQT1XHmMv9BMnfknD5FetWsBBETGin8WwZFJd3YkeM"
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
