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
    "2qeC9eFc2Eytth6uZ6P4VyAmNjRyonarPQ2RXjRnqNK3Upr3Jk5xiDRGxyYeg9aiE5xA5rE754o55LRFyNFoqev6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pZPMpXcJPQ34DXQMYjyGVwvSfNRKb87BHjiJB6kpcSTLpjuCNDPUM17dwiH49co9mjZgErEcmCmE7GEt8QJDz5r",
  "key1": "TXmUmRhzAhSW9ygMLVuMm6eTNMLtw2PucTpYCvGPh8xZcnZ8iw49vfX3gZmF8ggt142NctX8rdbRu8ED8ccVnPd",
  "key2": "39ALRmeT5upWQZPoHsbQsbUoBuBHu6jhQFQRmDcRDzZ2mfKGmw3MZAvCiZ4zH2X3uoiaii9W2cLJ4vp7QKPxUSTy",
  "key3": "56CK8AVBNnC8jrRTBDLzK6j5v6wKqmCJ9nhDgL5tyka8kegET6DK3u2CEykCVebojtJeMg98Dd4zHxnZMeqT7Gmz",
  "key4": "rWT3pizEsMgVAxw1Evrnw5XLsRoUqhCoZwh5vqWKRzwpigw5PrfJYgxgr4JcPywpY7n3X5HNQbUKf7DQDy5AWMh",
  "key5": "5DGBd7HxEADW1Scy3Vg9LV1fSRhPuYeXPn7SVn35wPpp7kvcFvUvxF7KzE44Ve8wnv4CPseUKjevuprYPcWDdbue",
  "key6": "58bgRJbz7vzaNiZexgNUNEr3zjZTqqZuDa7GPhbvXmLyGrRZzSY1C9hwQC86jLpRyac7SRasWAyKJMs2whpTA98p",
  "key7": "2SA1dgS19H6gqtdSgBiKPp5rwgPMMYDmMYUw47A8qKGgVDQkdMhkUBhwfRdT18om524C9BP53UHLQ2fURLDwRbZe",
  "key8": "53PZQD3RytEqHTMhDS34xMNMUXL85XePeKhjF91atsZfupL43dHBZU6Vms8PCcxdKrJ3AowaPLd8Zar4712r4MR2",
  "key9": "2tazEU7jjTMz9LseMAu2paqGJDf9Sr2r3T69iYK11KfDNFLapUnjYAN4enucZ9xZUaU61BXedoz9KZic81aYshSx",
  "key10": "4EoPZdPjW6uVjhz4rw1WoR4smZrsaLmxaMnwqZsztEzcX6AehxvNw6faHccRpREJdiEU3e27FCAPctmgkKfbFwbo",
  "key11": "V68jFTxiXpuP4KFFVyF8T8SeLscCGRivns58pUExReG8u4NEbNxKNDBwyb31MKXmDTQPmP7pqQeYAkqRH8WJvXU",
  "key12": "2VbcaQxwWXd2abcH3HGajxdLTyy2Bt8iMC3AF9QkJJj42E5kGBcFENSuXo3uD8ggbBok5xSqn4CHjEJFuDDLJxLa",
  "key13": "cZ2fuZekfwQLSNVg4thxkQw4ibhLVqrMXRjtY39igFmUTAKSGJUrtN58c7FQeKUZxSxzDe5ngEaAp7T5fDvjxdR",
  "key14": "4qBFP77GwvFXvpMV1AABoTb96m5WTGB2SWvdJqFMFa6ifq8qrudAFRFvUS9RKDM6PCmNAZVT6bN5EXd6DzU6Sm5v",
  "key15": "4ePNDZ4J3MqX5PGgzh3benpe6Xvox42kEiFVjxCeT6GtvT1GChJ2RXtitPx4xqAjoZK7NzM1quMBrk6Z6btNR6JV",
  "key16": "3DEjUeyeV5FakXruKMWEdFi1igNi38Kzt47rTf3amRVh398LeeXKUR32kUugWuZXpvGmNpwRhWnX8w1prYQYRMCk",
  "key17": "2gQftDNNQsKotiAzDG78tm58dVrizTXo1ECKXah3TGWqcDExbmwUa8Miv97xgNrj4hH16R5mHYK2cDKW2HkVMNcJ",
  "key18": "4Ej93xXUL2V3xSZ2qnbsSMWmZmTkQRVGT4Z6fVMBGHR6WFDET3HCdrzqNGKUG9RsBV8yjKvr6XXbzNB8PiKLohWh",
  "key19": "5dDsddasDfxJL9gE8H4jGe4fGq45ZoiANAjrFhGsprHStZfCoLGswMi9Vb7zCcPXcmSwGnRT7ZwvhDakevRbzsfQ",
  "key20": "2eCiHb3Tja2HQnTu5bic7HJYm9581y5EwMSarP5LCbaJXv7qe4wgCWQX6srNA92cHDSre6qNB2nWW3NYPQuE9Pkg",
  "key21": "3WbWE4iXWqCLpE7ceNudYQVrPpKjpRdjLeA8dTHNMU3ZkyKLSn5Et7kCNrb4rSte8jStRRn1s6WWqV8e2yAvbYEE",
  "key22": "5vEwm3Fh1aJfyUy5biYF8rCVrfGxj2eJVyQqTN54djNsuPR3h5Hfpn3vnznZ7dXnKMguqQngfs6SoEiMrLASgA1m",
  "key23": "aG3p4LtXgPRtwAcR3aAnXnvYJaPEtNDipYH4fAJsMFCVSysqMwMA4tTJn6PzeH5oGDM5tm13hLv8FPaEHjB4Ajv",
  "key24": "43q9CN6ambjmG4Y6oa1tak6YmpTcktmnDxWGFaFenH63gMYAHu4VYw61pFCSUjY2ifHf6jBUtKiiZYLyyefSoKK2",
  "key25": "WP6fjo2Nior2sdijsPeezaVmsqwC58nKCAy7MzmntvebVb6vCuh9UxTau3jqR4SuP1pgvAvJ4smLWsVqD6sx6ft",
  "key26": "33wj8zp9oPMLbEKXadBmy3ZL6WaFdFWsyPqVDAvkLzMvf6DY6ajWJqPG9Fu7e515wB7Hu7apYa8Wp7qPfTx3w8kK",
  "key27": "5wE5i3W7f9FCsXinBguTzAzPNMj8kB9s7fqe5TvjgQm5NMpJmoyewDmqMt2GfXCTbXGcY1mLPFW3RS3C9gzK3iMG",
  "key28": "3g2dQ5WaZH317LCxLBDk6XzGevnNUSMN5Ub7mLzJJJQwQU39UwzZYs2zjnvTBGggSmSJC5V9YDiKDtW6c58QEFo3",
  "key29": "5N29LNxYCsRjdtszhe3wuLw5H66PZKuhqEhghahJ9MfZUxy3LPRFa4n557fs8YtNGoKriEavURi8DjLeeowXvLNF",
  "key30": "4K9Xg1Z4FeqiaN154Tu1wphQT1NPJdEcEEAcd4LEAkAJE9o4QCf34sJJ4CHv7hPvPTzYQWtEAYC7sFN9XAsB6EWm"
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
