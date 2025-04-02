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
    "4K921fhoKtagaT9tvZLZZkzwmW9XMRLFMvn5iMQm6LVYdPyr1ZvmaAWANN54uedfkyctNbREn3jQG6DBRhxcq65d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHuxvJjWwGyu1TBuSfGBPFSAvhWUEXSG5JbHvjrEmqkxKTWLwcqKCVrL4M8ZhsRR5fSXBuQNpNCDiATpMdsdwJd",
  "key1": "3WqwuSxk89EFoqj4dPY66ZDiuFc2sCrUZMi8UdJg1PRdayv3nYZPSQkdcQoAzA7cyN7uEMYKSYcQvCDFhevjgdD4",
  "key2": "3HtsuvGGErK2o7tXVjvVAjriCma8KuQcNC5vbhbqSCP73gwExaEBfLFWLREFFrFvUmQm1Y5dVy4GjLVoG2WNtYce",
  "key3": "31r5dctqzo8WZoYxWtYyeRFdrn9s7fVAftjLRNgf4rPL1HYHDQUY275PMZ6UcjfNhjZT1SkrRMfHCWUYtuQeA4Cq",
  "key4": "3WcAeGTxjW9bBAGvXXdxqDdMPN6xxyXDWJKidNPs2PBJ8Ra8oJypPet8cvEtsGzmmdLcZCFbx8uN1UGjb2WLsLtY",
  "key5": "5gALafQ3dn9wF5T6pFyr7ck2HYQGVe5pQUDxeja7Hy8QirTBue98rLWjQ185XGnXjx7rGGXvA7mpyrztJJSnQk7V",
  "key6": "iVGvfV1u8WLwAGZaGhKoGp2zfvfYR4R5XvtHv8VaLFKRK8EThqnmhaE52wWHoE3muJe1EwV9gxC68kqkq49Hwqv",
  "key7": "2tgYTFiy5Xd5z8yBXbDnA45UeeM2xU96dPNpFo8MrrpWBYEkjVVQcWke7bZwgsVtvD9Sr7X9eDENtuoHJNXBgxf7",
  "key8": "uyLMw69qsgyf98eCXUDD292NN2ZPiG4MTxUKZGRfR1b8d2GcjQHJMcWrTkikV3ACFugoDdmdMYxbQRcgBbjSdBA",
  "key9": "2z4KYHHaURY3Ma5s7XMPozYpAgbmMmEP1aT2NrgG2ZW6d6BxcX6nVEabDw3joGooGzSDf1tqxadKYUcusKDxFLcY",
  "key10": "3piYL4QDJZrcZVZnT4DqExum9uxPPRLAg7CcWZ9mD6NNbVBwAia27JbzKYySsR8f4bvXJd4jkt92ZXw8BkWqr5by",
  "key11": "5BJE1Teoi8XZnEbHG1gXDrwhAAV6VCz8gangqiCTGnhYi7TmkufL3V1NjYkUHgrVf6Qk2Wanj6whDu3CwETXjbzL",
  "key12": "4Ff9yBsAEViD3FPx2LHAW3LHtnYshwtLvSyYUe81E5q4FdRZJkrgbZaqpKQ9YyThzXNUKiMuBYiijbw7AFM8jHLe",
  "key13": "3kij8AKJzQLNR6Y7ktDBrViAxnxaJdoyJbykWVw8akazpx3GgirrzNmFze2hpnqmbQBbZicN4kT5UaQh6sjew6Lw",
  "key14": "zeKXDm4jXeuHboDJjcjLShJs1H27tnCrKrAMoqvJ3Zq9Fbn1k9vUZk8JrKcR9VErMJcsi88AqcpbLN7mJ4rh6qQ",
  "key15": "5zqQcsQnhDLLU6NBoU4XcjqmZRrM2SJSM7ZEg9sauLHUuVLV1rRHqjUr6q2e7odPhpMVpa86pn6zc63WmYcpzkxu",
  "key16": "2mLNVstBMcWsBNoadqYp8tiYtDFwxaRWURsZ82ZcVinv3WdwTfN57SSVVTnJpkxgn3fKQJxqb7XexX7bq6G2u3VL",
  "key17": "2BBL2rpqrbmdTdffmULQJAYu4AsjebrH4YN7WdLTgdVTmfLASzjr8782v6e3aDH6xyqctnte6AtkMnaL6fEmVvYu",
  "key18": "3AYP6RqB14tp9g4HsJhnMMrDcA2MEp2i4tzEcXog4eNmpVJRHb119Ffxsbv9ztUkdq7mGVBJ5JvCLFvDQrgj4otQ",
  "key19": "2hQKvVw6w2hNJM7eRnYpVYq1uuCjs8R1xLsqN7bpyJ7DM9Urf6fArmnc6WSuJaXDH5PozFUMfhQfsYoTrRvTZzdu",
  "key20": "qYYe9SKH7fHdzxBuxxHMsB4CUTMQqQG2NkTio8z9YwEmzTCFkFTBdZS3Rh6vA1R2Du3bkE2ZLe7uPoUsamraTD6",
  "key21": "3bQkXQpoQPUSTj9LEJ49gYwcXoZciZsQAZNGWPSP5qAorgFFm4h7NtcvptYmUPDxfZBGEEzX6g3a1QkxETmMn91B",
  "key22": "dgpnwPWbxuHDRxuqjsyCvdoqsJ8LcDisjCoES4Cs6smyBZqwpHePt6ee8H4pVk6xKH4i7pLDscWeUzUCCfX4yM8",
  "key23": "2daMYDmVF49dK63fXTzdA5S7XuCNXj2UacjxvFQ6VUNSx4iChXJufTgbYrifc1LTrcB137UtHqttxUZy1XvtCH2C",
  "key24": "eZVCRwUQdBg96S8eDHHoea24762PGh5MAfznwRrUw35uHe1MzBUH57k8hJXBY7GuSgguQorqUFza8sGJb7zWPXc",
  "key25": "61NtMfiRjoyGV1bzAFHUNeXmM5Yaywp3sdX2VeW6TNkoDVN6reGBhuEZVcMbfyepdjxfS5gnwpyXkDhWEufH5HG5",
  "key26": "3tAJxm2YTLLSYhLtYVFv29CjF2buWJXsXYejDMJ3e5qXGcMyuA6Vo5TkMkKv1gF8oYo8KqjkjcydQf89MMzkdNKP",
  "key27": "kZAj6bAovFiw14efUvQ6nDn5HAW7jN5emTaatYR4dWLkcWbFHHVxM8yYxT4A2c98wFjc3jPn1tzrQzDdcHohxen",
  "key28": "pYWPnDUU3TZd58kaqGYM51XpGyPKrC1ksDzcQpSGjzzhFKwMgKGq3ttFtriSVELrWC9Tss1XjCdW53kWYZd55j1",
  "key29": "5nqmRZfS3HGe9WMUaXMU3kuKn4PLiuwcRt4pxxvy5kvaV2cqa7yZMxMKKCGQWXoeVYpxFTtTfebWGAuU5881T2KP",
  "key30": "61X7YK3tpTczKxMmCwKPBrUpHVwPo1QStYAembbcxTqvhxyqzZgdcR9U1MBZa2Are65iWaSzxaQ6GkD3aXoZKrnr",
  "key31": "2edBY7NtQZ5KLptBC51FcToGUWY1LXcg7vvFy4sJKUB3dnmbix1z915EbRWyJQ6s97dfT1TLvQs2eJ15zC9JfdY1",
  "key32": "qXGBpC2c7s7Pd8z4b2ZDKEjALmnjaG1Acx2XnapVAabXhULEAmRcdxTntSyUGjKbGZdrSoaboJjRi4fZvgejrno",
  "key33": "2RGhQq9Z7EHc2W4ekRweqxDDJYx18JcZiyeHTB5JQeBzFNQkgQDzJmbn7hNwACWKWsx5kpPYKAHFrmCzCATdQTDS",
  "key34": "2C58YwmYUbigxyJSkSFD4znPmEspo1bMXpjwHHFThDpEmYTiuYfNmkMSZXikf9DKMMWm1hkxjMAGPnH9xhnrKB1i"
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
