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
    "48xg7a8acTRKrX4RMcHcji91W7qbSmjYmNDzskg2D2M1boLLjuGo1gTDWcsPUaHRpCiDtFdVJhLjDvmCcLvVBu7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfjYeU2BsDow7JSaNm4Yh4xMnCj5zx2g9Uem4YGuuEw5wtEg5jC1g6hUxmipiXUDsvBqYom5YYJp2SgpZd6Pot1",
  "key1": "4HmgiBj9QGQpdSEnDnfFhn2Zf2M3ze2YVYNocjxKbFEb6HwPg6vnaVRwhwBzztwpoDhDERWvQmvMLobqvCNaYzzL",
  "key2": "5rjcbgfXqZSAWSwRhCz2TNJsrH1j17AotMFvqYvCw1F7fPCjbGUCFyhtPBv6peMdneFoYzVxe5EmUMGbyrq8JdDL",
  "key3": "3LrZdA9KoD1VhptMa3kHTomcKByaNJnbz1465ek8M59zyye7EfdyRQAcw5VbAsgFQzfvuD4SELwLvqZENVdqXrcW",
  "key4": "3o9YTm2Jzvsj9VHbzQjXRdmSym5M5Vna1kxUqG9Btiq6BRvRdiLPaXzLmRpVP1xVLRyeMWkHcFL5hnH3qpZV4pBF",
  "key5": "5rDdEZ13dVcopWaWbDzvzbL2vLGRUdUDgtb9jXYUF1soLq1KCDMuFm8YjM2dgtyS3gr9nLzSCiNvaijjLpjZ8tv9",
  "key6": "3CVKbfHYCjPDpZRmKVmbs1Sjq2h6BqtcJUHYNkUM8DksiS8yCfsJMYSvJc4ikKy8CGeywj2ckmW9zcJmmd8JQik1",
  "key7": "5Fxg89iG4ifgywLLCqxguzAzUSnvCgzAsfzukBNanNN5WZFbLKhgkUVvEtp7xFh1tQwmBtxD1Zm6xa3gEkvJS6Kz",
  "key8": "55FutytmcAEed2TJDmvwZdou6DvcGaEonfYT7JK11jbaRkz13Tt6pcGX7s7fJ7hSsFhZ1TPB9FxH3q44AhnUmAmy",
  "key9": "v9BShuSPFpcFmDYgjhUB6MnjMu2Nxc2CH9KQWPMaJ5JrrHCUHoavuUoMjvnCW2XEhdTWJZMifVkWQ7Vk5WujkQE",
  "key10": "4U6TQqevfkAQdvpsQR5JRUX9wNcad6LV7gdPiMmVTJHUMUbsnBZVFFySCzFJu9fZZZdER6SoDsT14TfQ1hHvHvcg",
  "key11": "2SEm2quNKQyWKQUKoJujRfSWURdVcZmpVxEWhMD9pzSES636eUPG6orzJZz7825DQdrMgrpfhaZBHxiz6vkp14hj",
  "key12": "4H3sonJX6PrZG2hYqx9o2ongdTgMdz5SHwPo6o9pFbYXSxG7Tu84pZ1we3nkEHzZ5mcmm5kBSKr1oE32ijvTm7W8",
  "key13": "2Xb9bDbRAy3RzDfhWt6xF3stH6HBAizd5C2jPD4TmH5LrwKKjQxUWWfYzYTdvXuXeMv1HnnwMjuZsiTDzXAmbrmP",
  "key14": "4PhJKxb1KCjLvkNh9BQSw7pc3m8utUmz8TLTYraWZ3yQmZB7ZhEjcbiQzyJzncJ5YHtPpRrTyHLL6Bh7Me1WJHCA",
  "key15": "HZqmvLo2QwJSzyTWbYtg1hE99pAPBt5pLxrzBWbHKrKF63ZDmXnxaRdC2CZW5ognGR6z8iXQYVbFz6B4yRQfWQK",
  "key16": "2ahynNhgycFxF7xeJUbHze7dYwtAtVLsmnF4uKoHYT5dMMueHBtVdSiCYQuVTX4zSTruEMdXpy3W24ftnSxUCgAF",
  "key17": "3uRu1cfCD5Ua6t7C8A77GRUsGwYhtXZaNG1hcfqsh1PYroNwDUEi4g2wnSbkZhtrrF8zLp3MRYENFnrXwZKxU37j",
  "key18": "4PyQm8MrFd6ggyDTKLry1RdyjoJYGtA1AXA4TN7CCvnEo4mHwm28Wgp9aw5ySRCZTNzrmwsfx62CY3U67DL8CtjM",
  "key19": "3Cz1zefVKM24yXNiLckWD9bovhY6VQcb4ooUhHEL4ab4ro5pjeQr1WZi9F8gbwCK8DpoxLFpBAcZLnJt1tcjERmL",
  "key20": "FTXuq2x6ko1Toz7etVPwohVpy13nTKRgNqpPnu6ZaiNFuJNfPRAn7fwiqRUYPXBd4CXhu7Srr2vS24Vc9QQFXqb",
  "key21": "4Tn686S8Br2njowkiYZWcjvS3egY7jWYmrfqoYfEa2m2sntNskMhZv9PBduz2qFBPWYaGv87tV1AH6DRitPea9hH",
  "key22": "GHKwSttqKGar5cS2zFRZMybSX2S2LoUybW39DRw39J4AMccKqorRfgdHuQKfRLTXnYLprYotVgASck4uCSG8r64",
  "key23": "YuspJsdCATuxcw4VAkj5o5iH9dfYL4y3XFWdL5wFrwbCBMov22eUqV5kNwTCRkCSk7ahmZCU5qoWCnKG9uEQ4HN",
  "key24": "3namcJqTgEBDnhshYTv2QqRMSzvyj3EukR5NcfgyFb6mdi6bhWkDQypLeYn54CHquvzzKexR71FCnQDDozVc3cn5",
  "key25": "LSPvU8mHSLQSPeyd2QPDtf3ZPVnNhmtzYngz1t9LcWSUkPTUtHPPMR5CQwpLFgwovobTxHbYjFj6dJB1FBQaUaV"
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
