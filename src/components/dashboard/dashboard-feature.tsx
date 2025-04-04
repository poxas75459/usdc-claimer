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
    "4kkPjAZX5q3qbtAds1VznhVVp1iHRHmjr7E1kX9rR2YsnTFtdgfLG4hLjirpxX5gqLiZwgNcwhQUy6WwZw7GGvQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHq37baQ78Mb3nHeKGWQH5Dchkoja5uU8J8QFRGNTumwcNAZm5xp6AXy2xoLLa5noAxAgyS3coPeMXperEG1bif",
  "key1": "2V85cwofs9HyY82Pn2aHBf15pjX6gZ8dBonUgjNHmDc1DNYYZeoGy3zJEAPLQHGGqUjcSZJ4cfELM8TMTBEjiCuf",
  "key2": "23ZS3aHvSwt5NgPWC5hDN8uNYrXRGveqtW4mecZagyGCLpBUcT16ipmsz8Vj7YWJJRcAXhsNEgXEKRdNUWqD4H4x",
  "key3": "JVGR2wKD4oMHVTJE75NSxETPChXWKPniwNH2Zg6VcxuZ1SHuY3NcgtY8hAia14mcQBopESqmKEunpKxCXuYsMzb",
  "key4": "2NNqNekkL5u7MQxjXvZ5fjxHAptZLdviX2BLFNuKyvED9EhUkphm77ExvuRUjjeoXRM8r7GZ79Kn4Erh5a58f8sw",
  "key5": "2QSJxGCzHeakJUpTuP2yYvV2AETHY2iMmyxMMiBiz94eNjQwY7gHE6aXoEbMmTa8kwErGLzQwSvR3vaQBcMqABEs",
  "key6": "3XkLd6EhYUdsnEQoQKeXCSnKbz8aAvSQSno7qLFVvgDvdE2MjwJB7hhhtfg7FvcP7RdWqmp1Vm9EJV9aJh1cWBJB",
  "key7": "4Mqqmo7Ckq1vhktVEu495tzzRz6kfY3Zy7S9fmgQkNuCTxfBYeKkyN29GHBviZmHQ3eJTUUNmFPLKkvYLF96wHvc",
  "key8": "63ED5R8a4nc4gXAoLDmqBKkmXsqoEs9NQxPmQTJi1bPrkAgHr37wWWNf94gkeFzJRV4YkyXjJ6Bj1cPp9dDTvJkh",
  "key9": "4MBSbSC54TcBuCkYX7LBTgZD6pDi8vUYtgMcpZiVYddbTE75gc8rWxbqsE5Jnkuj4TEn41XuwfTmH2WujcYqo1mN",
  "key10": "4xxJw6SdF64ngmpwdgnjSTk3qxfnrMRn88fPyuNkq8YhzXu5AkheYwLcgZGnseoNieG8wcDcHRL3BPbMHphVuNPQ",
  "key11": "325nDjaV9MLmWsT3fw496WEH1d2FXM6JiWDvDV9hPdXuGTPV7DgzUxjK8coDbozJDTj7hwHLQSq3S8yHuKoZo3Ga",
  "key12": "53gczapZHA5UZCf6iJsp8irHvJhS4sakMMkc1dhiaY9ma6QNc7HMjqmVa67YK5nAHSS64bboohBtkdHPKoXCpY6F",
  "key13": "252F2gQYGJmFvEhMkh5Kyb6s8sotvaAbNpyYvMtRvRtq31AsEFR47XNsveg4fXNf35B6VDV74vAp3ukFBcRAEskG",
  "key14": "2sLcxJr6zkPNKXBb4SzG9S4iLkrrEMSrAuqY7gRsKgTdGytBRa1xvNgGj5WeWD1CXZXyKRC1i8m2T5mwfDLSiFgW",
  "key15": "5TfZaZkei5hjh5jawjzj4uideL9YHStYNRKLpFf6Kp58gWDuwqqbehK4vfXc9cq8f6hLcDjDPWJHfeug33h18YHm",
  "key16": "2kfP3xTi5etiA9CBEAfvuTfP5g779FzvN494rdVhQVDD6E1zCoj7ngL6Nw1dv6LvmMCDFKz2x843ppHCQWMQf3TJ",
  "key17": "3pnyPQoz1EBiuwsz5NPv1HBvEUSp9MnhAYLgZd9YBDJXRLny8m58TEwW84GAmjMkJdgNrrHWkDc5RmWusrgcKoZ9",
  "key18": "4dP9niRXDXRTKgcPugvyUEmUaSPSEhM9ycM4LDTzGWaAmWBLYTqdehZswkYL39LLoAaewFXp8qYU9wjvNgzH2n14",
  "key19": "5ckpPRJxWXaHz4hayGYXHT5sTTG58KREKkh6tyhSi1RJzW8nHiTw2ibCSFpURFGxTXRV9hnRqHJ1AxwAS2VhEzWQ",
  "key20": "Buf9HrvjxfdJBo9bPyMePXzdUFTgAsm8Lkqvd2mkkmmjpwY82ckGhPBGJwbEzhmrV9y8edWqkDwkMdy5EQx2nCG",
  "key21": "61qzoaCvVqJNh6XwJXRxj7XCo5EBhMXGdLbDqMxBH7iQCEwJTRsN7H7zDRkc2nsFp6ysUr4PQAW9rPS7UaxhsvnS",
  "key22": "4MpE3qijZJCD5fPpVNffrTd8SqEezXPwyhZ99vG5eSRCi1VfWgurNkkYETXLeiuUKrScwU3BWbWnS2Uu6iugnoV3",
  "key23": "2pyJiYYGKqCFJkfiPPtZyPLAYriRH5G3DDRErCFtMExwCGcgXVi8cCKi14xVUVQC972TbekQRn5pCczKbVd7rHv3",
  "key24": "46XLuPKK4Rb82MLNUXZB5YhNdEr9NdLs9oiafJA1v8WrsnEEu8KcRcfhqwkn1fhKgkvih48mBMXPePYX9FPoDMyV",
  "key25": "Up8vtEKQXvy3JxZmn1GdbSpSoQs1iW6c2Wn6kTt96Z6SskgaKhsPm8TfUkgv9x9JnGMoCHv2QTU68i2tbp9bBKm",
  "key26": "3vNTyRkzmYPENUZ1dWqC6Ctc7DkY3xTrJytQGJLbC91KZtERUaVpimhhdqu9gG716oPgrSgKoHyZTay1utwzWzyF",
  "key27": "5ENDDts17xSPjiBysorriBtiuBS5H8d4THcdC7nwTBxBhcbR5MBuMTAANjvvyg9aB3nGDnb3uhX9bvn4pRQGQaHF",
  "key28": "2MYAkUfUcfm8KZidHNUMD5WumXakUaHjEgR3feBC6jSJaQyHfhFQKtftqpc4aGZCdniSPbAriKCCf73Unpgm5v6T",
  "key29": "2SV3n17cubJ2fxtQ4iL4enCkUC7bc5TyS1aEcLqB5LyoB7cTD1SxhXUZGids7G99mkCG1MbZjqAgpy4pWX1xhnc2",
  "key30": "ttwXCY1CeUMu5otnWRd5XH32sw5j2gLUQNxsfaxtqKtofKq1iHqiHh5gyLHays9bCATvYpPU1zKYWp9aMy7bmr3",
  "key31": "4MDcuHX4HWbjPcbJjPhhb8WaAhwSfdWCpemTPEseYsm6EPeNWuqHVmE29EA9X6nxfSqdmTbwg6kQioTvzjPBkc2B"
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
