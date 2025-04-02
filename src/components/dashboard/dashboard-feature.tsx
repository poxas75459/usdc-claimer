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
    "4VgK9e8SgpaAY1GS3yX8WQgFL2DQT91GYqwxxeNYpifFpdnvYnyLpyLdGeqJmo5F51umPJhLD5AB1X77mX8EkXnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z92KEg4cCQ5HvXk374QUbxdwZfpShNyn9wM7E6s7rZdt1zdzY6zVebGpfnirvz9LntYihaG29sqHzck7k5utPdf",
  "key1": "5qA1xU638JBfA8gBSkZzBP7mW75Q1Zw5wv82R4FWxf6dHkxiZh9XWUF4n8tdwTQmBrnrTNJ4MvpYNay5hgm4uneg",
  "key2": "5zWdaCEhTaS4sEBuKrYJT1xuSLznH1iuCY1SJZerd3jE2FtQLwj9ao5mfDxDaQe8xmcZapxYiceDpqXGnqwuN8QU",
  "key3": "4vfDnH9pffCuQQbi83u2fqgNvrX3GPYN7oYFeqojWx9pepKUqv7kJJBRTM36cKhJ6b3mirRVEgeFwcCZTx6E2CPH",
  "key4": "3eRFW5DieCqfALveRqi741WM6dR1d2Vt21sjUp6Gmayk24Kny45oBE5cFEkin1zL34DScW9moXCKZMa2KBMkAfjm",
  "key5": "4WcTvAmnhZ1u8SmSjRkLmaDs2DvxJM7odPxXaEPw1cJnV6pLfyqNzbuK3sBxFdMvCgntqyvoSmwCjq34zuJ5AZ4P",
  "key6": "38n91bUZ6KrDc6fzq2DJumYzidEhBpMvzKqH53bdwdJDoHGBq9QeP52PRSAYfkqiCTz5syBnf2gjk3CLL86aWWzT",
  "key7": "5nQEJHriSEbeKzZMZ35efVDpXPY1Scmrk7wS48Kh8QjfHukZYQi1WfJvPX6L7eeohCvM6cUbK2rHzK5ao1jsmo1u",
  "key8": "4FYomjEHBx6rmSGw6n1pRroS5d84LRBmshXNdVzbuFCT5iNkQ1gYV33RpR4HXxFZgATxQyHXWrqVHyqLtNBXpnQR",
  "key9": "5tsWJuddtJCkKekDWVg6N9hwPiWu7ZxFeFiyPsMzfJ7GChmfsrgL3wJHDFCgJ5nUGsqfc4AhdNaxkxTXjn1uix8x",
  "key10": "5HHZtdtYkKdJD7nuTtMepniC74UZnbLEMsJgP6Se7ojURapRePGBQj9is7G9rK2ir3FZwUVzkMx429qH7WbhWHNX",
  "key11": "3bX5hBj71NWQzGq34pFnehpXjCiF1e7HAPZ1yKiaoBBqCBHvEcQrRNNpLryBUtpZnrURaoEg8G7aCo8t3cgWzN9a",
  "key12": "YPUBkWFQPgY4XyM2xw1RikKzERewKjR1HJspsN4tK8wSZwkbYsY6fUN5z5SrWMmW83cqeWGnGT28pXET2aE6opq",
  "key13": "2hUWZsokS2U9V13U4ffAp9beStppWYscNv1fuPvQNjRjSkBTPnDXgV8tctTTa1UJv35YTX6Cn5ZFDntqpj8ENytq",
  "key14": "496rVKQs656AWYjJdLRcLaBqKmpRQQnadPUuKr5wLiqhXFYNua6DfYcN1o45SqLB29CWfu7hwTnhBYh64wQakF7g",
  "key15": "5wz52zA1y1rd4CVNjVT6334zNVyAsBTUKc1yYJNmwcEeGSaRoWgUd6TSXB4uoPGQjEqEHap2MLviKoF7HXX9JFLz",
  "key16": "HFaNcBMTEXH3pzady4ebpJD5t7hCb74ZZZWKBj7gv2ft57f3H274FsYfAWdvMx9wh78nkoKmkY74JB6nGip2ZQd",
  "key17": "4RcxGVkoJMn4ka5KHRMAMuMDo8kCcaza68Ex7Uosf4j2XAsCvMPaicQP1drzfGvbaYdw8Yvad6GZw3icBfX2xUWD",
  "key18": "5ujwXdzwTGcj5YKcJFAvUQkPFGpV9evTrAqRjTLahUFJiReituRVggWXFQqebdd6Umrr2cVj7Csa14CiFc5CogtQ",
  "key19": "23NfqXhJdTrQowznGbbUccQZ4JRmfFRHcvn5Seki77qnTyJNi2fHsrLu9A6cAJGox3uyciUMHYLVMm6hZYWV3uv3",
  "key20": "5tQU55FpnRyv8Yyc498s3qXW4k7B9iM9idKmkBrZfkrMdWr2dGGwiuyPSPutmydPBWtaUkikxQWoYonqKBSbn95n",
  "key21": "3WEN6nJjFCFcyTEvNEDxkgAarGamTsiKNrXLhoYbDTBoUFgcu9ZbWwcnKH18GU6XLvqdX6MRWiFN5vK8tcEvomGn",
  "key22": "4spwwkgmjCzqcavZdspxcCQsvuBGsEPKwFZeQ3rfUsuccyUhHMUPDC7XaXfQFn9xKSwU1RGDYgg3vK7k1EGXqRdY",
  "key23": "53MtWShU2EfJTtrKTK8rE34k19G9KYHbcRNRs4aSVnSTggoHX8KPM9aibT8njFdPKaz2BKrS2nqe7Rb9thJY9q1y",
  "key24": "3n2xJa4GbGBC3Nue4jsYHzrV42w563FA7RRaSqXzsckFM95A64BjTKmA44QyWRdZN1SW2mKg4vemXfHTa2RVaMLv"
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
