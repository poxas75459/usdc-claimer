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
    "2ss5TuEB6A7P4GABj9TKiUd8tR7ULSr4jkFEbVFqbDeo42UZgyAiZMT4ZytM3F2XFDbJ2YDEKr8JRP54EL4AhQcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQjqe1VSUPwFR8LKh8JKrLLd4tNcN6HjAMEsMkvGjFKWfSzh2ZFxNHJf7AXxXZdWXSGGacrUeafsvx4DBh61XUe",
  "key1": "5zQAELLg9cs7t3PMfJ6TUqoy1SqekBpGHL74KyDL3iJkTxypASpUjQrQPgHQjEsVEHY5hqBqXJJP2TXMzrruTCuJ",
  "key2": "3mJpYPTGotZY5ZZRDXTHaLnQzK7buYgUdKi5bdb6J8hwVkXo7mdXendGKwfehsGBLLyb3LzXwE6dLnDMsVaK9PSh",
  "key3": "3pHoMWKHgGuMqFDxuFYhw1J1cUAes2cdbwmwpjULTZR1NDrRSoCnmAHWEDaRZLrTHTpUsviXZkpZepu5DEYJ86f2",
  "key4": "2svYmbyX1nvRLmskcGSxvDQNmVT9RcGPHfW5YCWgoigiRCbREtzhd78baxRq1PfmUzhM6AzcrTr67FxSbyyxta9C",
  "key5": "244Kr9mvNMjU6ZFm1qJuict9ZwwC57kcLtRFCBD8e7UTHB6PciHYb9CrNaqJDk4oFvt3AAGU9WypdXEq1K9WirrY",
  "key6": "jABEP9nZBsPppPdcZzKUFxUi8j9foCunmY6tja6B1obFM54Qj92k8mfERh6m4hebCyhT79bu5gBghhtBwmiRUUs",
  "key7": "2ftheboprnDfNHQ2F98fkuJu4RAJkRUcWWqBCh9iiiGZUdJUW7iVJh6vnvcwkU1utZQf6MuwRsUNpK87ojLMp1FG",
  "key8": "26UzXi21QAaT8UeokLxgEAGjMeZGj53wU2nukp9wHDd8m5jAwiCp9KaotgWJVia3hPuedQfUcza1RjfGuFT8dXax",
  "key9": "2SjqxpHjNmfDL5DS7CsCw4U5X18srW3fWyNh9E4kxxRDNiDgbgS7oTD1hE1HFJNEfwtSbZPcGAxurSdngM5EapFz",
  "key10": "5cgBVjMaycQuABuAEXJQHCHdHKZjNNvG5TxCDfCWYWMYGFUt9vg1ATqdY5Q78z6SPssET9fUEsUyHqnLEdBMWqx6",
  "key11": "35xfDEVgiRXe4AS2VPqscNau3CTHMuNDYwaUZSnC7mQ91gkjJttQSYsgDpwVpALDNxHfdJVcEWdj2QMz7e9VurXQ",
  "key12": "2s5hHkCR1EPAzHhU6iHTJBpbrzM3Bo5GXnv3jHn6yqxmTfd9wuwsB6GJCz6MU2E4MA3YDMPNcLUr4z9dEWRtXWMW",
  "key13": "48vgqRvMWjhGpxdzSbRo5SHw3Msz5Zi1boZa7VqfVC3pJEpokpfsHutAd5mo53zAfcPxdznV2TpcAKVo4C44hKma",
  "key14": "3o5Zh3ssvDJ373KJLY2c2Stq6A6PP2UEGWbs2MPBVFCaChTqKGT9CmDYV6vfw52FR9oPyufnDxXLPQw7gi2CP8aU",
  "key15": "4t1BjscxvYEWdR8mqSpLAFdydhob9qvXDx8d8qAZdtjss6FBBrzBuUk3jRdAHDZqsMXXj9L3xM4Nr26N5G2YzrCh",
  "key16": "2uVT1ZMBPNQXoxdoX8XQ1ou8zzix3Me4fLXJdqefH8hLADKZrUzVdEHzdZfHtCHABUECTt5N7ftcVYogsXg5oaPv",
  "key17": "4fpWekEkJv6NiDQbwGJm9ksCPH8mut64R42RHZtAVVsJLbFxREHgDuB26wURzYSxcNJwST2n8tapzK9rvVQkTBTG",
  "key18": "4xKiU6FjzqikGS5arMM1VPYrwGZfC4JyDH1EWGVdFQQ92894ZtbmQtdfQdvy4Exx7brZ9bvhQKAHZ6txLbnawkPw",
  "key19": "E2hhSx8x3qu4XFk1FMC1msehpd9WmPTqNfX9VQXhMHWfCwtgMEPUEH8k8SNjo4JpfCj6ePq6RfCHbs3nwqE7VcR",
  "key20": "4FBcTbFHdPAzkt6FM9vKDtMhY6CnhdVrfNJQ8wZPB9wDvz2mimCmq3b7QzZoXSLrk7f7YPChYzBA1dmBzcNQnWTD",
  "key21": "2AHQVeAPgj6BKMypu1ZhRWfNWzeohi7FrHPpnUr6qjpKi9Wy3QpatA511wagMJbCFxGN5XHC1AJ5178v84bJKt1S",
  "key22": "hmz3aaTRmdEuXoF9FKMQnxDUGvCjzogc8N6U5tRkARyT4PxPjnaBubvXezbDyNMwoV5pMA8Ffv4oPtwBiMbW5WN",
  "key23": "5Tp5qYxC3XGVMFEqrL9WxR93YmcULFcXyoVnMEM263d24HxYB3rKEnsVL9pekhuEy1tpozgyvaVkuvUZFacakQss",
  "key24": "45YfapEnDRWzhoamVnxWA2q3L5vMzffWzFu2AfRbigwaTDQSBWGBYv71AySsDXMGQdK7CQJDGugL4ZztMy89oLut",
  "key25": "5V9Jsxx3tCwKt2okrhEsk8qhVyu8bMPKR12qE6PDt5hhxQk77w43RdF6v44CbUZn8XQBCB1ZTEy1qfeh7KwnGvL9"
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
