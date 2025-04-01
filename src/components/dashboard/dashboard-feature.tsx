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
    "2MemSuiuWyHstJA1owQmS93GQZ3yvDJTwZM7BfLC3LwfT7nLj8DJA9DAyHQZ3Ybadobktj9V651Eu2dPw34qRf6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XocRG2yDGw1fLZxsRc7V1dCKKyk6JGgmnEY1whM2r2bdHDmkAAKDs9GabGiS7JM5wEyAH5Pnpqc9rfERFs9NDe2",
  "key1": "VPHoKYThtDpAkqnukX9cUhr9gRHBmmwPZt1LtELcniJDbEZHq8D454aZo6QBdc9zXHafWwaxtuVn8H11vNqvSR6",
  "key2": "4ahU1QYLxmCtKN2HAWyYzB9KL7EouX3rE7TADRceStDwpknApNnuhrcQSkBUB3DE6deE2ghF5y6fJekWhMs3zjFQ",
  "key3": "2RUabXm8kXV1VvqGzLqkHskHQT3rxzNFiuE8u3EDLWghurLoAfMipEDP6nVavteaUYTLPG4sWem6NGn1Um2Dnq6m",
  "key4": "4ui8V11ABTn3DRb8QDaWVfxk7HMqfG4GRdUdJprPNoUBN45v3VPcsPVCViHG85TdC1dBWCaWkYcRk3YgPexviSXt",
  "key5": "SiXw7KR9CSiJh4nJ56Tgu8CbBVBjy1TWn6vwdbKLwuzcmb2euQdDAo6MJk2oGTEwE8eoppJmkWwUMHZuKJ9SQD1",
  "key6": "4Ph4yXm7sxmT8fBaKLCHuWhMa5pQGwGfhqqNvrnUty1syDkdAJyLEr1FrsUXYFZPWoc6BM8E2UFxsqHqApBtkuRG",
  "key7": "5mQb7YWQDT7NJYwbpeDkW15Ag3zmnZ1YZTn1eP83Epyy65nhsbiqfuHQJoe9GRwpUWZVxS54M8mgsA9UpNenmunU",
  "key8": "3yHm2G9XsgVW6YzAJZDREqFj3C2EZTxLe8yH5jvNiMdRbQGYdDVxXzhmkvtgWhWkno1Fgpkkd6TzZg1jAGRthYag",
  "key9": "2TZ75pFt7eXKvEnwVP48K9Qd3KWyNJ6ggCdKSC3uta1wktZdxg4qMF8EVrG521j7qsekZmjDCQ7UNKfcPDpsb9ZU",
  "key10": "23Z3adWexivUT48GXjVpZboDYfMqLV9CXCzRxwzbjfU3wksXYYjTr5cYYSrVco8VcS67RtNMh2K9N86v84kLT6jk",
  "key11": "2JGkP7aEKNkPh3bnnYyAgmG5PpYgLJ9fibuKi2a68arGrQMc7vZhL35YQ2LAmY6eRSqiKAfZ57jJJNGP6Gq1XE63",
  "key12": "2TK4X1EeFZUqobxMPkzT3PyqeLzDcBFSnkeFqVziRL4tbeu5VPXqMPByCJy6iy9qY37op6qgsXHq5tE2Tfu8Uc9h",
  "key13": "45ukBstkMzR8ntSh7UMXzHsUwCeoogfUwTS3rB7My7F9PSg1AhpzWXTMtxmEDSMNu58yHNzvRqFdBNZN3SNzQHbL",
  "key14": "PJmttB68mdqvCDHcs7EzDHgjsq7QZH31JHHXPrqJVuu7ZaXiLwakv9tathwnZgrsDbQQZasKQgM2mNkLGao1bZk",
  "key15": "4FDFgLJJWrUWBkjZkC478j1xtEoackg4PrDjumsE5puP7mtifJwegwNh8UiRMYBogtAmiRmEWg8nRPnwJuKBRZQw",
  "key16": "4zmv48E4S4qLxq866nk1G3ppbyFXDMQD29scboqvFbncL1Seyc3ZoEm7DJTzoqdonT7ULaVkNSfxzxwat2uGjvM5",
  "key17": "bPvRY44tpf6hWkehmv4ifBe7PFSJTtrp3nvLtf4oJroftYnPVG1HzeSVugLsUwwrAXUz1hhd26mcGiqvmZjb4Pt",
  "key18": "5oWwNBL2MYDrpPNQuXY6D7MJ19PLfPUJ6fm6pjUFUKtcGzukgQcUiFJauC8YYPP7FtGBeFBfYqJ4mv2ymz1JLoD3",
  "key19": "NDRDrCcJGKMnPFhDjPrMzi8vLvdT41uRJr7EGEEMAGWFV7yvo1XBwYB6uQp5HEJbn5bDheJhDPVkQDDWxmp7AJg",
  "key20": "4AKXNP2sMqpaZMMtZmtY6qsi9SjDt8hBqDLMYARAEaWKmSo1RoRGsmQ468boYLw3FGeNLYVdGLz2gFghjxrKyjST",
  "key21": "4VNEjeREV1rHRN7TMbKYravQXZvxRcUYbzG2CBSQcG53qAL2JUfTpzV9rHFTu4uq7VJYLYobj93ekeUMWSJsydY9",
  "key22": "4VUjtcJNidV5JRfbTnbYd37z8K6rtKAqx9smEbhXrzVApbLW3eRp4grCjDosH99ngn3dsZt6zraffJvD6YrXdx9M",
  "key23": "4YMhNvs98zANp4EP4vxrBFC7jmhCJCkZg2of9UjHXjeEY75CMUgVVWFU6db3yxEhkiZ1YfdScrvKj4H6zuEoWbae",
  "key24": "2VrgdsVoChiAuMXLdMaNPzh7B5oNo59cHHyo7VkRnA3NS4tV344cu1fmPRnZFooupG2ovTNxzjnvBE5uf7BrhuXZ",
  "key25": "4NURGDQtS6SJ6MfjhjpyVFNQ827LA3CAygtRKdvmPEie1kKQGAqi8Kr23xUnCnHiFiVpCNzCgvEVGZm9fxmBuwh9",
  "key26": "2VGNYKRVpXCoQ2nGgPUaoxqPhrGvWoSoDiTKK8wttC4erA3oPuqTohsEE3uxf2CSpeHrqr2QLineLr6Qv47LZpg1",
  "key27": "67jrRkrrxCURsUMR3c8aAjxcebhEdxpckYisLKwSY6SvRMc5dfZRXJgwho4TaTEAN3WyGyqKcjnzzAHLb6U2shRK",
  "key28": "5FGnsF96cAz8NCJBJp3yp8hCdeJxAGXtJS9xyGSXvD7VYMLi4gG2g96y7PvB3zVE6QZQaDssRhcTNkLcpRioYr3p",
  "key29": "3D2qnv74ZjdhCLDxQjgpX59JdtdvGGxvdZ7BWKFkYzDoXhQgSe7JJWgZiXBctgwPRX268W7HVkCmTdWtFNHKH5TP",
  "key30": "26ajT4R6UpVi34RjW9DqvJWcXDYtd2tJnFWs44x8UUvobqGZ5pFYWEEqHy2LUXrk2YNpGcEF8xqEL2TEHYzskR1K",
  "key31": "5qVvSmrxjgt8XVXyYJtYh6HmkEEsZNVhxHuAvvmyeybygReyM1q2enNzccmcupbyMQAhzwv5Xfkz41mDrNh6z5qd",
  "key32": "447KraPtqMu9k1qqstW8H9z9dLp8nmceGQubQSg7hphK9fuVfrMdeN2BamJTMRuUPDW5VzWjVDcxXjdBpkXKRLkn",
  "key33": "2RxPE4ucDe9w7L5WLsndEABkAJFPruPEiev38uEy48wiXZCLGTUmMFscvttFZrkx4MYA41vwnVgUKSa4pwE5HZPG",
  "key34": "2DYEQpkntYLf2MtBfLRc1qQ5C6dK68877rPeyQStGyKHzBfyA5V3VMV7A8S1rKSPY4huUFpMCZLWiKq6vCyZhgv2",
  "key35": "vGNV6ovKRGmngECqybFwUFu1UsKnK2SgtqSPFxvJsMwJESTKiV8nFyGMwNmU2hUz4LddYsry7LkNDKiruYXVWVY"
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
