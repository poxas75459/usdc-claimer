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
    "5vWiFZCPyyWFXksWHsmyRPhzsURVCU1n7MUmdLfSFxpqrvFDcXrVpWZcTYYSMtQaXpxuw8mFHbyXh1y5DLk3q8ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x74mtPGRLFrcy8JqHFWD8Ebc7SqarbBTBUtneDDnrYuNUGCFFpUh6nYZiLx1bJ9bbE8DZKiP7VzCcbM92fgS9QF",
  "key1": "4JUw88LEv8MK6waYdTmGFaTDLi1tCuryNQNBacoHv3UZH65KSan8zUvESWkWjoRocpCiiHZbaXTdinGxvFQXhpob",
  "key2": "4QiDZ53oYHVx8MX3U9iHuWondxjP6LtieyqezVESTFLqz5yvrhv6dkBkdXhiJxyzjNss9jLDgPXmyYJU8xBr6R5",
  "key3": "5ioKcaGq5ZuxNyLfpwaACGbr5QFTeboF8dnkJ4UZDG98eHspxBdbVoZEVwxmy6zmygjLVuLBMaeAhF583XPzo5wr",
  "key4": "Ae4u1hVvvwaiAaGvJyjt6kpF4dByG4UYpG8Pdigw4dA2mkTocc9yLmHfodRJDRgmnJEbgYRik9CMLumzNhe14WV",
  "key5": "5pzeWa3KGFbEgC1tpv4JpC5Lsgym6mcaeBoAygG9VtqyxqKnEK3r6JT8hDiR1zM7UHaN25jaMjc2DbM8LpkAh4ZD",
  "key6": "27dGRVj13Q4QtKmqb6WZSaLPNmANavCUQf4zUdc2aSqAhoVCtoZkfeVu35DanfQayoQNLB2A5G1yvGVCUeeLSk6q",
  "key7": "5gkQGmV6TRtoG3JpccpPH3BHDZVVfc8aVwNxCdBvUShSBbQmb9RB5v5gWgonfDbF5Y2nXHSEPEwJCHxXLuNvFXSs",
  "key8": "zGC1ubrx4zSYxGQ7wUkE5z23ByGtheNkCiyGtZK9rdwmJkr5chEJwvjNNixV8i969WiCuCfAagNzEM1SR76z8oP",
  "key9": "62ym9umiGiUSeEE8v5SvznaerLKtSRmoPnyaVS48UmYWdCJPkVGZrt3qqmPMbVeNbcPWPBmUPWUSrybnLsQWbgsm",
  "key10": "5EiVoR9sRQHmi7qdCwd4rM68GnCSjnU9V22j5UsefHTXVuoVMsdgQzHsDmoYLbLM5aZbuesremDfatv3oPK3FPen",
  "key11": "jyNLwAu2kzKRig4DScGXG5AQwcnWPL3vSDrftNrUixWPKWyLJzzPaHpTyGCDDjke6P1cnSBfFsj2pfPwurK77Vx",
  "key12": "5A9dv5ZYWMRfT2FtebefzoKyfqgyQjUqGLZSFUVgm2x32L5rGKr7FGfUmW6v6oWAGMBxGzdWc9BxogfwXbH8nvin",
  "key13": "iNjmSJ6in44tQF4z9ByvvMxdYqyVyKD4Bm5vDivKBKbgaQVvZz94wskUxaqbpQZbyCxcUeCgBbSNixrPh91KjD7",
  "key14": "3Sf6s17R5YVm9HyM1t3pwi7htXebn8QsH43hNct5q2EJQ6NdHVQx9VQVw3VutMQrucRyM1ZLk5ku3YMNLxv7vM8t",
  "key15": "4EzYHzraugiQgKAebudLVyEVNcShC7bDC9EkCEx7pK6NvCi62JMrjpFrVB1ujXf1VCem3JhUpgRWL7TucYeqSyTs",
  "key16": "HPrqnEtkUQ6hQtSHhca832Zx5zTu1phv8WaMibA4UnyQj4fDocRg4xk7madVReZ7XrorJvpk8mK3q8W7ELdixBh",
  "key17": "4rRkmi28yJgyRy65mzR8VvMKjAu82m3HQMf6mNqUgvnFDwMpzYsmQoFrbRCwjgVD6SPi7k4RGoJq99FYXNB3eCP5",
  "key18": "62mKPYngykwG7Nd1EFezQEa1fPuDWsPMSfuWeB3PpzNMsCHkvuf4gZUNQCjCWrg5ftsmGT2Dn2uF7J33Xg3Gmhhy",
  "key19": "4wSSianG5vKroV5WCnEZfLxUXGPzkDDSLD318QEvTGgEo2XaF9sqp9SMk4WygHqNvm3WFrDrJLHQtdFn6AFCmPu",
  "key20": "5asTc5QXadiT6g6NkqbFKc25FseaWmdimbNRaPBZ8FsSqJTrwmCAogpZTxLwygG8jP9nTqYJQP7PzWhhmynpw8fJ",
  "key21": "5UbomyNodTvoL7w7HJRfnZ3RfZMByp3WNmurAaCkqVeDJpHqvXpTfMT6F86jYEaWxaF2nNYPdmXUUahgAqvVtC3R",
  "key22": "5V8kBSbewHgjWAYYyzGTzWWdkYSmJr8aMSH6HSL5a41KcoxXMQiUj4Qq25Qgyca7DmSo3J9j7mMCVk8G7xLqn82U",
  "key23": "2fKCvaCnWJfD576tEP6rT43tLcmjCBTcsVhXDxZ4fcLZubR4VErMxw2Abzj5Lku7QeXRQpvqf78VEPuyoRpJfjSm",
  "key24": "5QWzxnfqnzstoRTMwiHFLE8UhdjagL1eopdaByj2ZYwJKiWdqU8Gynd6Mj4EYyBnjwXHoype76VXmSgzCq5qiCuK",
  "key25": "4HgYF6kYEs7x6Tv8rBLxGcd2oG1JM6W1CJFuxAZjvnBcYx989uRvjBLiL5GCjfNRs7o3ugNdVj8ft2bh8zQmyxUP",
  "key26": "ARLq1JsiHu3K7G6Egv8bXmjJenzXyZMK7smbs8NN4L4S2Au8sDgVXgmPuH3Bxc51RyedqU7VMPToNUJiVYhk3fN",
  "key27": "4wHMXG5ZMUYZ3MNTvDhKkNWC1piFzYqroz47AMLBY3nmKJGQ232JCUyBt2qcYpAixq2Gn6NnFESj54Apgr6VHAFV",
  "key28": "4UMSKyQsRZNTFoEhF3sv2B8DgjaxavoCFniXNrKqJsxUEhrZHszFWvW9XXSxaQQLRST5bmyaGiHwkTorM8HeDArf",
  "key29": "4JQNaBGCpbePPopHneaNz66N2s89bErVY4NmaSuCeyskA55JZ98TmW5pMmgNBxwL47RdeH9dYm6ohHTv691WnAKK",
  "key30": "3vuMM3sNo141qkp5xQ2UJ1BPosBTpWKzAB5WJCZJ3zET6N1VrKGtBr8rgtDbtQKP8oBY9uNYCRwckwX6FLhwnPdy",
  "key31": "2a9yfq4JnfMHyVdMcYuEvhns6BHSidHyvAgQh3wAcgECYbb3kfVPQgPUST1Z9CZFMDr4EHjCxjKtp5fjHap524YQ",
  "key32": "3NXWkzje3c3GWomNXjtQcMANNQwsUDeoxzsabYDdUmGj1eja627Jn1uo4z22YzVpMwFAUCz9v92w8R7HoSnr3aiN",
  "key33": "348RSZQjNx923P1dPvj3kw62SUwm5GSQ1EUWL5QBndmKJoukyPU4wNy6nMkj73ZgbqRW3dJwxcq3jNmY8SZ1Dny4",
  "key34": "3fSJrxg1HmqGHtxpUJfGSTfCatEf7T2B8X7A8jE3EzaZLXRU4U5nbjMjGZuqk5VxiABXWkMa4dE1nQ53RXS68YEU"
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
