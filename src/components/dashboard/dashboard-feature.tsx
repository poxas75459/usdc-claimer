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
    "3qNLGawCmHP2U6CV2RHaZwG4yUGcXsWZTJ3CDeKfHCzTeNyqBN4rJaQWKfkibdJfwkeKb6Kofoh2J4TBHu5hAQaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FGRHi3xDDSfqQ6Cu3YLE85uo1sam8hXV6TuahWUMwmuKEkZQhjeZowkFspTYLh1AVvKrH1HQYWMMU8GFsa3G4Ej",
  "key1": "5ee14SWSSQr5c3g9ihvntBcgyFFhE5wqFWkHq3wFtSFj3EyoiC7Kf3RmDTDQcyjYQfDGqKykJkxNJJex7KR1sePB",
  "key2": "5375BhqfVc3KsrQq5XtWBhTdzmCue1BNd58hRjgHRNpPCDnFaHk2AB5fwP1kaMPzcC9BfD4zuu46fKtDHtCuUvHf",
  "key3": "5UKHoDX9AeMnRqfuw2qLJGy7uSLhKkaUPR4Nk6jqbhL3o1vSm1QR7caAVxcvsAgRSFBM42CxXbVJkShYqEmyfEwZ",
  "key4": "5YhYsQQ1gheVD3NGoDgR2h42r4tfoRC61EwrBWLVx7b2ExYMDE3uJbPxZsFw8DVn39ntGfq4db93RYhXku2SBak7",
  "key5": "33a8jaNPannMmo4S83gqQHiwgrAZp9vh8RaH3YdL5vP1WBwG2BdgR9N7mKnhPpTDipedWLDZLZDxnZisxHUb1y7R",
  "key6": "59hNQRf6mfkAQPGiV1DhQkPFTRPzPJWeni3TTSXGbnHHynnjdAbJxc4qSiYkUvzo7g3t959rHCMQC8tAxyBrZjFv",
  "key7": "46rxGy7xWPwBM8ZfBj6PRzfUpH8vtkJgt1ygBcCkNH78L5ViauVm7tGz2anJFFh7qvArCn3V8A6irdcj4GCF9FtS",
  "key8": "3UwUqVMKg8XdjotFzVsJnU4qgcieVcoX3C7tJf7CdUBMeVaXs727N5kQSyt2c9YkjpUevfjfxV5gdXFKaKyMehMV",
  "key9": "4PQDYHghPfPrD1zcxiVKUsdDFvTXE61UAWw5yH3BCC2GZidqZHoJDNcpT8gA2a9by2YvFAUUjJeDDaHUN89Xe6Re",
  "key10": "5Q4BeAHVEHhGLDBsWxk56ogG6Es3RkCWMGRRDYULETXJWSjMbj5Xi5dwpsnSvhqy5f1UP9de99TnBYSS9aincP4x",
  "key11": "3mJw5teZA5o4AAm7oS3DeCpgY84S9QWpYPWGSosYAeJDsMWwz56BptLWbDRpZL2cJkdzHsTAWtUkJJ2BKjbg9vL2",
  "key12": "2nok8adoFAgvrGfVXzfkqrR5uzuthp2MwYT2jSjLM19AGt8PRJmsFdHzMKMkXycSpmsNAQpHSmToTeRhXTVAuVrr",
  "key13": "221tS3TAebQbhGuf3UJzENM4ADqRr4ZDi8USmpyoAm5EDYe7YbeCyZew5RhXDcaNorHDUodZDFWtao55wWxhNdwy",
  "key14": "q1CzobCKjHfocAUSMRyhoA7gu6vZ8k4Z1ddBt5aZBMS5nvecJXnuLJw8o2N1MPc7mPZqnSuYAewk5mTQDRsai24",
  "key15": "2iYkeVcxzrom9F7Ahx6JaNv7ndaLJAjCErkz7hDfNio1W6ztXvboRKqW34amuRD1vgs7hStuJyDLjeb5Vs7dFq6D",
  "key16": "35t9bsmdaYcGt64aP74tcy3ddpMZ9ggbEXWAN4VSEWn16tMJuUrBErUdiBwPZbDuZqzxJiHE923thtuohfysFnRj",
  "key17": "2MHwASNr4CnYykztceW37J9C4Qg5f6rz4JwU41hSjwa3GWoCryJSucUiHZuENsN5YfRQWv9RTp4sJD7uxUfwHv2M",
  "key18": "fQ4ffhddVMrrp8maFVN9FouUWbUccHvH3ovkFbT8oMyR2Ha5pdumpbNnpTSY6EtetjnpuBh6kgmx59kvKWGgGEg",
  "key19": "3asRoR2CRDgCKpyhukqc9tT5nsAM22NZMKEP32J4hnmxt9GyudCEocWAY42B2w4N857xSJ9581Uce5qdYnQACXrm",
  "key20": "5krLpjAPWUFRA2R7R1zBerpRfJ2YS63b9bx1E3bttRTzsSYytQqC1vEkm8WFXKYdMN7SETThU3TKDfZvpTzr69cb",
  "key21": "4YQBSCq2F83teeHA3eUMzmYCuEdR74aRnN488HgeWsPS8Z4qmDXQ4Xg3Hahu2jdDWviMueB1uUhJ2TCq2aJi9kLB",
  "key22": "5MQRekTC8poxzLuhxgvXARTq4e7rDMpDRnotCAJkPqgoX2uHiBAZrMtx3ykKdXKjSWWh9cfXFZksx8CmefaBvkER",
  "key23": "4QWeRFLqDREgGuK2JzmeosAkBdaGCC4ummtqd2Fx9odxmeZZAH95fGbFfKidpwgSTFdvTDkqPQ8YpN3agRFMEGGL",
  "key24": "5Ak7CWSMMn2hvR4DGynQY98JThdazTSQPW9ADTgseNLtzSVb6qCVEXd83DQMLsTHHbEhTn2Anzr4ZjRb6DsNdYtj",
  "key25": "2kJJbYo2Vzwn2MYCxTzZWAbJn8qvr2e12RSPjLcCG9C4yLxTYXMCDutaFUUP8RTTT1VV4kMrZzKZykwV5LGqvkyZ",
  "key26": "559RUrZACcUDYusC2MS5UhJUqmv129YYpHEJP3x6Dds4ogWZdYFUfohMCjBwmRdWkWan7WupofTrZQgutyjT6EDV",
  "key27": "4dzXUaKdWLdu9Rr8x5Dj81icwSciD9gtJiedFTeGnM3m65QkH3PeZD7XCdjedJ2EZduJsqK6Cw3F4xD9CjDixQkP",
  "key28": "3Qr52qSYAin3F47KWXQ361Q1JtvmnzHPBBiZcUrrySsYq2bgL5daxGzokDyUVhXQvWUSWSBMNeNYHDohDKJFxKak",
  "key29": "WmoTy7AwoZ327QKkGUsKw1u8f2dA8CwjCBUihQU9kVUqfnUyEW94rRuSCzLNvoPGWwQnsR4vuoCSnQbx13SAdmp",
  "key30": "3iEV3Ce61iXBRfYGZaTbqNTaBVg8E7uAL5m9i6AuW3jUhja24vJqAUjimGFaMS2nvY5iRQxSYyTqvud4ZqmcYEYT",
  "key31": "27XfDeLoBALVzy3DB4sSqLcXoAJbHxkSxEyqnJGw99W434VwSfGqTELUMzrJEEhqVtWaW2BEuiY4ZxBEJbw6tWPC",
  "key32": "DigbCrav27cBuLXyn7ah6r72uSbZAadSaFGBwCG1S9hzSzaSfyPAN4C3RHPGnVyhJpC2BwHa9DHfkSDeJa31VTA",
  "key33": "5AdpndQUVCw9UPDqmPUrAf6XaN7u5VDaqQM1cKEaWPkkHmB76vVH1rbTmTdYu1nqiHYWmQJjMRaZH6PUfdAF2q88",
  "key34": "2biCDQGoEDoiiuaqECTDfiJBb72XHhr48MFjwE87Q6yYXuQh8nmYQ85aUktNHxk6EywJrm42AyBetpVwVTUknUU1",
  "key35": "5cpZWaeyXviA7FBNKamyZPSeF8qMXgwU3h6985HAXcFSky3nPkLFpRNy4Ahctcx74fSJZQmPLbuzm7wv1g5qXWfj",
  "key36": "4tV5zenre48vsM3PAokMUNpaAEm3M8s2P3jPp7EtmUj2u7xZCi4pdZ8WzUBEoAjXZKVVfnUdbeyTLX5ETyv6LwFd",
  "key37": "3ygYhsh6p2uTYVarTpR6L1oyskRYdehtGnTxDMZk1NsbwbuS3G528YXxw1F76vVaUeV5Tv9VZZsSFzJKyU48zvM5"
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
