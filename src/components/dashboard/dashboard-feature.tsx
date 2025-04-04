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
    "2ugrWRaGvpTAgtCsJ6aCqzsm2J9TKz7vFNzPgzzNJPp5P1Ns7aFfibFdduWmpjU1vD1tv6GUZJYVv7rSeMrayVpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z2HBvaCCukYWmJqYXHqBx2SRUhmhiFHkBhrCKBFve3DBHNqqRjoCd1onrywoVXPBvq3H3aKv1VUnKFXY67qtrdM",
  "key1": "sz9fpQ9YkFjsDaT1VdnAaBSESh4mXdXuFFfu1TssJ9Jx7upWgiFXvFfCYAmb6xsPZpXT8FewSVnpsPJ4eVsFBRc",
  "key2": "2G7urZECGVYRqt2qnCgZUQ7EKKNjjEu3Xj3aLti3xAa6dRuJivq7UqvRvpqgyModg4wrp3zPFFw6oTZkuGMucHf8",
  "key3": "5CsCQEyTwv34RvsJSi22rscYPFhWBc1vSPAvnQYgi2S4yQujbJfcnvNHBCvDEHqma8jJbZG88S3UsvoSc52P5dMp",
  "key4": "tv3hxdUzEkwwHVqktturtwM3uNhSSh4VdEhb1hSBE8AWPQK7k7thUDEuajGojp67uAncaiGzufp8wD9yWuBAWgm",
  "key5": "q4Xvhu49dPJ3dwdkKjQq6G4tFqqisvsM3yMkc1nsCSqH91SBLf87YAU4EnqD88kVapUrBVAHf9tQEk8vRCHs2uG",
  "key6": "22qL9tYqpRifCnhLSn8TSFsR4JrT5FqvzwDP5qYqybndqaHhHu6h7uLnECN14HmmxsnMdy7cqiNQ1QxRajvvAHiw",
  "key7": "5uGHvqhg24CZQZjTggbP9Vys97Tn1yZ4UBtv91t4Nhtogbm6zWrWCqBnBZmzjkn3h8PB8mUpFZKmLFBk4oDVpLkF",
  "key8": "5PsF6Pug8VjZAxGoMM2cJEPeg5VyDSm5A39sah1jtsDd5wAAPB69UNtfepMkhpgSEa9GHvgS7NDsNUbxq8Vgq3z7",
  "key9": "5rzCyRLkHZP9h3TTYPRS4Eo2YxtRSs7yWNzKKh9UVpNoaVFxS9vnfSdbhk8oqy6RYZuLB7SMEHEyCaCnKyGVEW4v",
  "key10": "2KY2ekU56nNWUZ5t4BUh9TpRW29t7KR6MRgkBfiTCFWENG7M4FBYmdBzJUy63VtXh8JCuVLKL2cvdVHVsNyQ5SU4",
  "key11": "5Lwy6Mnf97iJP4uLrhnAaiSK2XFebHHgNrTiepNagWyFvhFJtyYszHFustaBZnrtxoeZ4yGHUvRTVX75cLa9ebKu",
  "key12": "2pNAwcJDWePFv4nQp4rRHH7RyqQsG6U4CEtyAs8p3bAniWSunRravTbPUnGziAaPpDPcas9963YgiG2ybbDxwWCx",
  "key13": "53tuUv3FnYxuX8Rt2wUwQg5QSCwdcJfsn1m1t1GhdrfLEvfVMU4H5YURApkxUJk78SUHfVQ14jbzcQMEg8dFGvEh",
  "key14": "2WFw6ukWy61tef1FsBYoUzwmtJFkYQFn7FzBsTk8EX9KTWX52nAK3u3W1UdRd29eG7CiLY7FpnRDAW2126STePWA",
  "key15": "2CPVASn8jR7unBgDPvcCqa5JXjF1H6Hwqmbi91hWE34fKyoMxKZbyLMwUmAN5QsT1Xm8QmzTDM1WgWwtBNhpav8w",
  "key16": "5WKmF7HMSEoAkCQTfz2EstDs87wb2zHJE2PDwFNb2nUKuhMVAXFkLmLmXrXgFfr9VRT4sqnqvhFNzSwQqvzx1uCR",
  "key17": "3sapRr8a791s26GDKENQByaaqy19RiRS3ypZ6TTuLz8WqXRBMToqbVqoRoK6YMk5qLg41dmr2eGfPoJCL1baXr7m",
  "key18": "4JsoMDdnPa8knfnA6KWmwa3w5GvTrbmTX48BhMEBXp86KrHos5DPQHKseCSA6qoyUazViokkBJRYqoLHx994uGp5",
  "key19": "5MusTSHsCPqrsS25eKoWVSV77geX89wNUwS7dbca9CN9GxBnSvkQMwd6azRNV4zJ7GNSMuJbGcWj87q7PgsWkCS9",
  "key20": "RZcRguyHAn6bxbeaEXz9nBUd93mdgVkL6DDST7GMX8o1ggXzPdkH8yVoPNTfVVvPKHtMRdSDdnN3Z2sx3qSCwQx",
  "key21": "5Fbq2iVAYzebUuWNS1hv7wXomK7ZJs2DVvpnWKJY4gGrjbEkx4NZA5zcqVCqRq3PhRwR3tgCQsMZd97QxAeWg5Y1",
  "key22": "4MyyzmrEX9mrRnFL4ney79jjpjzZQpPgR8rDiETZjymA2ugizFSGYRVhnVdTU3ba5PAyGonciskL4z2CcKR9zRCd",
  "key23": "4fYhQUCGrSVDD2muuqUfqTz7iea9ATDT34q3qhkeutuJZ1RSgcxWmj7Kpka2HvrYpwktEQDastAozqE73m9T8pSp",
  "key24": "4Lebo9ZLq79ymFUGXCN7noCUSg587T9AApbCocWyNTLpwLhgG61Ft5n1XrjNQ4GZojwpY3Nie8F7tdyXaQncqNf4",
  "key25": "3Yiv6L4BHj4ryMvUJM1DGs8v6E1hCsCsSYKKHCNtkrL9gUMSfZQb7qYJQFNnT9AKXg963ZsLnVLX8pgQr5uWJsrc",
  "key26": "4yZbp3KEuLaZxFbTih4Gc7y4rrxEiBcUso3EP5Umgtg4rkTjxkyPDpPMs3qwd2eSi9x4yYH1xvgNGENwUHCZ5fDZ",
  "key27": "2HaSbpB8j4BMPvgyaXhk5zVpxDwYnkeHygv3TgKDB8DEPksFpm2Vyo8pZK8NBQUGkJNB2yPHBLY8Uy3V3kx9dRTN",
  "key28": "3kgkMWHAWPNGgWfjW8tbEW1dCnEuse63ZsFoeSUwESFVVMHWkW3QWpy4q4dgd2f8t5QCPHkJ4WujW6k7fYgEP3Dy",
  "key29": "3nEjkt4cbFFa7S1a8g7xvXGXCjkaAA3noppVaukVhRFzEJyHjR2qgS7XRLt8BF94NgyBXJRiC2GqUyVmkcvHfES9",
  "key30": "4nBEHtY9F5TcxgmDYZ7QgSgTqm5fxRVWz51gayHeaGWtikY4c27RWBRDtJWqjwGuitDHY3ZRd5su6afgVWntAj7",
  "key31": "7Xfv5NYTqi6dSGN7M9B8WsLsrhKimcca9yK6VdJs58chxeCP4HBTpJtrKqrZ9hNv2s4jZSuznzyeK8G8dpC1f79",
  "key32": "3i3ESB64d2bQnTLUZcmw1ktFvFUWckKzbj9yvhgRkS4YQmgNK2bgEwPcFNtRESrM2h82eY7Zx83hB3chorTVqayr",
  "key33": "4ArbkXFYtYSMMkjm7oM2ib6SmALe4i5rRhn2N3HJ2tHBNAyYerW2reQZVYGnJ9Toq5HP2AjQUYfmcJw863QX5hXF",
  "key34": "2mZB1rfaJwEbbhRhHM2WA3rHzXqkf1UyUhsqpMLyHcfBYCU2KoFrhRedfjBeEQFFYdXSeCnPL7yTcvRkLmjsKCbE",
  "key35": "5aiJKGA1d6UisXzJvE1sXKev5c4QfWJMPPiwu98VXN58D1J73qVHX7rWHMiGXCt77sey1UKWas55ykJBcSWHcsSq",
  "key36": "3tejqWATVstiQntnAaKEBNeFsyZRVY9yWWGvAEn3WerxEBy3CA44ogVF4BFvHZKepSSPSTavyLVd1GcZcBphgR8Y",
  "key37": "5egvziDmAowoEcAtSBHTAYA89T4Szs7xawKAkMos5ovZoNy7WS5dVx8EwKABYMAA7V6YnwLCAF84ssc6JwnG8y9u"
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
