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
    "2N6aaTSFzSFrvnj7gUUCuQDqDQToqbZX3ygF8vv7pnjZcsp4syW9tzG7NqN6ZWL75Q2CkRXdgnz2uejkUimzG4dR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EL9SbVcDDfBjLqSnXv4MsvJByubjHG1cmY4Fj4DDAmyaPojbdn6wK3iUGsVn1SNRH6Xs1AWUbKtY5LeXJcgZW5S",
  "key1": "2y42511W4bQCZvNgT52s5fd76pNbrKtiCYqRVCGzXv3qCDqwLdGcUTmjnBbuqR9mhEgexBauecu67TJS8LdccMBK",
  "key2": "5WSuAoPFXkcpDJhcGeZFwwYymospNc3AiB7dPe5FEJZFvKdjRrL2Fr1q8Hskt8MFmu1YC9RwDncozPsX4ckQaTyA",
  "key3": "33JwY3eALgGg7W4bJ3y9RKk2U9TysNxLmP6uE3fWdivGGxWL6YS2qvEDWqZVHdwYNTz4YwCBSwLi8jwZLXUysnAF",
  "key4": "NQZ6TDFPDLBdKWPBf4hXQVgxy8yo3pvWRz7gpnn3Wi9ho3eNtY2G66hP1hNbEjhmbrj2meQ5gcGEkfog4zEaqJX",
  "key5": "3HjA9vsJf5H3vQJ2jF4fib9NoyN4nRzqvvgfvpnkboUYnqLggEYTUxh9nAMWHWGHDLuKgDdzQYJxghAKfD1Dopq7",
  "key6": "3q8xaFsRmVujFFw9zJx1sBrsMMwTnGjgKYJg4TStFde8TCRb9Uq1EhHrynGne9zCigz8UT6gBnFszWJzPFaZgQT4",
  "key7": "2hgY2N1mWmG8pMmSD2z1xXfeKK5hAprQL1E7bmbXQ8y6uwztmxdJmaK3TLmCUwh6jTEqQbzwE757nqqqGcyqh96R",
  "key8": "1fpKF3NHnQZcZ2cSRZryRuReGrdMTaAH4QGRXUnswAbFirqBZDQnm2U3r8ds4mC42VdTG2JnZfPxzLcaWQpcaJr",
  "key9": "2bwETBZ8vKCDkNEJ8yKzvYnFLej1AEEjdvKiRFHofjroG2iSCYSR6cCSf9izFXUCRbXpDsC4QvfmQC3JGrxMGuN9",
  "key10": "3ufWydmxZZXdtgVEZGCFkwLhX2LLskGJ3Bb2YcpRJWLF9TdDUE7bH3ud8vTzoeYE4cYfC6ZXvDZJ4TZa6GqQPRDQ",
  "key11": "25ZHiQ7Mym8SP3hZGZSCnqSxUFAx9zqwrSfCHWr2qLG1LwWU5PzkttoyAmzaEP5s2QcFzTCSng7KuDou9hGPyzSR",
  "key12": "2Egr18apSzwR22UT4wGx87Yr9N6U8s3DgJEBNgQ4t49UVWVCDYSzYFnADTE17R1KZa1NdHuuQ9fg1ad56wSL8Vhq",
  "key13": "54yY8XU5KwFVasfbFbcA2f4CQFV6JeAViMXVULH1J2xPbfgAq3gg2TyWFSDrsMSsj7xDsWE2r6YVtNx1dWpxr4if",
  "key14": "4gL48k15QURRsaUupKovmMui5SQune3bxwaVs1nJZbYSrou5u4r9fZTdcaozrr4LqvdFs8PQHdaEks7R3jpUieRm",
  "key15": "4i79QAA46WE668UycaFsVywYUkmHQVdDVVg4Abeq6fKP7tktygZdN5HjNiEDCykDLgHGyd4pPMTcYFpmAPMKUKUr",
  "key16": "o3439LMagTPbi51p6VRC7TEoo3Qt4TmQe1hYQ4HeoSCHXC7nEVNp9mi2e9kHuL7Hf92s8d8EHBDXnis4SnXdkG7",
  "key17": "3emAcJsz3zdbCRhMh3wqpsVBUnBMFSPhNRcRwwoheYU3KfSqqKaonQHopfYFQ8hcfdbVcFA7z6HJZSQHy9UdcUdF",
  "key18": "qbrKhnb3ToSeNUZQQ25PzTYt3PPrgGcgAVoVgDVPm2ntNWD5Pw7MDig8Jy5PVx4Jjb8UErbh6GRFnnzfymjjahR",
  "key19": "3s1XQqLUyoAEdnDpBeuYib3ncjcAvzwDVP46EqK1tcp31f6svvGDKGqnqSLqsnEvbBWK1ZsCGhEdiRo3dFA33jZy",
  "key20": "4RiZr1DKRZMZ6D5qo3mY88Mi8VqDqgxZd9WMhaKtfct58i97ao51xCguSwxxPdjA6MVsCtZUgexqG2yK4NtzJT7W",
  "key21": "S5EBS7yeLLjH4vrx4EYFJcwgmmy1TPgKScDSzZxSXhoMWBzeYsy9w5YZiQ4CztTWQAxgh7jX9dEbNs6xD2VEodn",
  "key22": "J1pDPW3WVzZ4QPis2Fj5S1WoxRxgBMYfsuiuR1tuHVQRUTd3EZXgNyTKowBJCMqD2CcUFhmdtTnFbJhGmvKWYSo",
  "key23": "fiqujDxvCVC5JskxkdTBEKSRG1RhQZGBCisL4ay86MtwyJXHfeuLvj4ExaiN7p2EAFt6RXNP5Wi7P7tzjwZ4euF",
  "key24": "nc7i6eocZjFocXyHYQJumwo3uMQDMYcJQy3tke42RCLTYXNphPFTPxkwc3o6SaKiSbnaiUHr8jjgoczWDsC3b2y",
  "key25": "2v9WSpvBXSTPHikpB5c9EqBC5CxNCCSZnANau1BnJ9GtBy6qJrKFvQA5Qum65o1LB7qRvSuKcw4T79CbuLXHaokk",
  "key26": "4qjgSbwKSzEn3mRqSwdzBa3gMDiTYoDaEGrkScfqXbNr8F99dYj3EhsnY5CSy2F6jrMKm2acFazaFTirzYKLcse4",
  "key27": "2iXF9B8dUTZtpAx92znsUodYvJACbDkddmYKeAqUmkTU7i4bbtRPffxFX5MfbkmTsBuqopHen4ihp9ZQQmM68Jcv"
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
