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
    "4wsWTyk1PcXXpvzaFXwd7vLfDbtUCRiHgjjfEQ6XNCgnikRAufvGLcvVtEows5dT6CLkLJDHw47jmo42EF8MCd6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTvJXRafQCtni1CZGFYEMh56XR8p2fqv4cYhUvoK7uwigXgJyUFh5a5cbVxwQE6pfXFFT7dLBwFhQCZwqUs85Cq",
  "key1": "ywWsqNcffsSFpEk9hZH682NzimtP9muMSFhkD3oChiMXrweBfhzPkL8gntvQpSK9mChLJcCnUywAAV4DNXFzkxK",
  "key2": "WRmiPhNYj8D4h3k1mX3UmkAfKLBLWBbfWNv6khjVGMqANjeUjZpn9s8pKM99PmZuc9aXGwTD1xW6fEsaYrdfGYs",
  "key3": "2Lj5Z2sjPWfi3mt7b5hNeMaBBx21YXXXPQgbAwff373SYA3L2o2LmPR79D5bx6FnrYW3JpgH1dpdVDQJBFpqePwC",
  "key4": "4Tmma2TDCKAYxbGtY85FDZnUp6GpgJftHT8aWcTtTaPRZK8FvdJVkDj2dE4qS1yrBvxoGxHCXR31Dmvvbr6ftJtU",
  "key5": "2R8YENYZZZWpovZkuPcaiV7tbccmbcL6bcgrw1WY9CnFYKBtWcxXZxLXDRGTB5mBKoWBdLskz9UXarLx1NkPchvN",
  "key6": "3M78ynFhW6nFeiYcDFwQLDvCvpAg4eEundTpREiyeoXvGQa9HfPka49Kicy5MqiNPUacAPBgW9K24xJv6R4iC8iE",
  "key7": "45p2Pvp7sLCeZWQ5TMVE6D6GHrGMqTT756sq5YyiQgJwLQLnHxfPgwCdJkXcjthdNnAy8RGAg7mwkzT7bMKLDd1W",
  "key8": "45ngdKzkZPcawQVNZqDqKkjpoP5onRcUn1pkkaMXY4yf9Cf3szyujSUz5zYvrWFEazLHM9SLS44iF1e6QKLY7qxY",
  "key9": "3TAyTF8yfMqSNdFJH54yzS7Ta3ttTwN7MCE3X9vXikemS4CpVsPHppRMjF6Gp1kPm54Xh8gJB78hKVBEj9XjrxBc",
  "key10": "5kN17PF8WdF6SyE9wo3Mxk7EPMmF8Ucw3QYR8n1MSW3zqRo6SNgry3QJaiD7mD61QRfgQwrsi3QWQEGvP24TeLKh",
  "key11": "3eprKAtoyYDUqFGe6Pkuwy6jKksxeHn7jgx4YoCFZKevrmRoiV1oiP2T41ynBaQ7dANsRGATJoiQbqSDJnthf8vL",
  "key12": "3gGgSQfZboHy5vAssfWrDSx3HSEhQdCgGQwT1HnQJyYWuwL7dRKX7W9tyqSiUjH9DCb3iet3oX2i6idXTKjUrBsu",
  "key13": "3RhKgUP7SwGCmF6r3C7FTxKVzHUAD2mdRZ9Tbr2abcdW9tCji9FBsfVhzfVZQpy1kuLsaKjQPzUYQSXmpva6y8m4",
  "key14": "3WR2idR3rkNdnUcsekpGH4qPaisRSMxgi42CzGD5rVGVGfvCsoDmCwiuNEZ3Hvxc6eYfxX5FUgkp6TJ8aAgE9TFy",
  "key15": "4XQzc8GBEggvu7DqQiSiVqQWLcNaAHW5uoEtr3D34NfjafxjpKt9npmutmVXeqA72NnPVfs3ouLX6sxF9ptGvWLp",
  "key16": "2rv55tYipLpsDWyLJVpnUnFqdNu6Uy8L2M5V8MWyd1TYnWPsrP1EaMw7vccfzreVTdXgtkfZgHu1pTGn9cN7eGub",
  "key17": "4n9EKr13wpQvuXTTWb4XA2EhLYVDcBb86zJfxd5EY5fBenucFGMFcs6YmNosFuM4mLL5XB9PNt47tyjmAaNWe1Ub",
  "key18": "5V6zJiUDdUxXZD8D3tzU4DHd7TucuJX9mHTyPrVVC5qtkjuMbH1NTNdNo6x5pvZTiJa2UrQNGLsVED22s9Z66sE6",
  "key19": "GejsqGHYVmZeKqzDvdvoVuWRe9L9UVat7c9FVsECEcPJQ3baq3WvnGFcnXeZd54gzLGRECcKDEbYv6u4a6ukJAK",
  "key20": "5LXATrNJtXxECqCigj3SyqjPEt9uzYv99fcS9CqnuT3WDv4WxFPd75trbdKdHx4d4fYvPCYYgVBqX59yLisn5nvT",
  "key21": "2AT6TG434m7uPc5N8nFLBPVfPAERG3xFcvH5dXruaLyJ1u4v8tGo3Jmh1mbYRNY3P7A464V48xfpmGgVaYNYLkUX",
  "key22": "3swBcyLu9YX5gnQrFfrzK2dE49k3fN9QRYNzu65rHifiJvWzW65JL1qj8fB1cPjMrQ3Y1pcM9zwCy1ug2iMz7F3c",
  "key23": "67EJywiDAjHpQEQDS2pbMkVdGuwhL4hCQsv8QEDXg9wi9nrCWEqiZF2bJeVyF5KLomdKiHFUfKgtssAGPV6z9gGo",
  "key24": "53avqSwwKQAucHhMEAMKbQDRnTADfypZjQ4s6BnZZxKLP73MA2whtbsWLHqr3EMxWJKFJ99rrk67di6RuQvN9fbB",
  "key25": "wdYn64asxC2ZZMDwnMQvXpns5BMjCdk1BC13RmEAG4PkfYmdyiC5kgFEWPP5J3bxgGvuMpMZiK4zwU7H79DaNMP"
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
