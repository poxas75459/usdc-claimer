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
    "VWsv4KzPgZHx437CCK83kEdeLKp6rhoZ2DfnPihUTas4atgkWmcmnyPZ7HeshV2mfeNL6qfy81p44yd2PJCveVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DfvFzP2H13kTZVrggJN57RDwvs9NwzUgR6GoSjM13PGtMb1ah74HaJfdgpcaqrniM4GKQ7kZp6xKE9zgATAZfG6",
  "key1": "2kPK3QGit1JbTDwGFzc9mRFAcR87VCnG7LX9yfohzFUMu2HNeuvGosPA9SxhmtxkZSpo2iRP2wdZR3bL5Y8RXShg",
  "key2": "5P21spVuiMnEtVdqStMGs4CQyBgzUDMiV71oZXmLJC29mt9b6KtiCS1gE3LtWDXtscjXjf6eRpX21AXh2cF4ye71",
  "key3": "5SmojoyXhppRmPdmg2NXJtstmtjFrrMb5NgoSpJdCqxd13qpo35vf2sNAfz4Phd5e72ofC1Ea4xe2cqY1yLo4KCX",
  "key4": "38Q3FTnqi2tMCMFGTQLEUigCB9cmjyTpkZRvj2oJjXShsnagvVKzoH54SshgQsYVbFmwEYfEZtBEdoYhzjhneDmg",
  "key5": "57A8S92szhWamm6WRGpbVmCAmc73ifuranZwceXppJaW8yGyQxh1Y5u6a88V4y9CVeHiAKLqr6ejyqrj118AhV2Z",
  "key6": "4ofstq9VdawZiNAyj3L8yej58Jn9BbLzTpxGSY3VWuitKruvrPoJYnfqbkQXh4HhBnieaE7a4FoGfYtAdFNHhVTB",
  "key7": "3527X8zh1w8suqQkh7kM7zLYiHxhaU4ihaMHzcNszRwbCAsw9vaYCcxUNCZbiKqJofvM3W4pZ2ppkg4AP3EtitzM",
  "key8": "PwWkCEUQ2vp9t1i1pqjBqhjyRAGpjy4AKUiFr1n69LErUJE3YQmoa5KxeLfCq7C5ESotCDepWz4G5nCz7HrFS4D",
  "key9": "4GmvkvAAMSLvDstZ7TzJK4X6UjbzQK73wYeqofqwLj3eJbYYdv2iavnnRJpiFBWKUACoV7tNeV63pB5Gqt3Jb2yw",
  "key10": "5CY6GTcFMUDP2QSzaD3dgAtHc2JbWLP4LMR8K8TXCjZVRFbbseNy42FqHiEpRYeJpQipFkCBunpcstQ7rWNL4AoX",
  "key11": "4YvC18mTwA1A9j1iSaoegA2iJqaJWruQ7HiPa8ky54DHDjqJ5xuq4kVy1V942gn3obGUjLWQbXE5Xu3s7b3S34Kn",
  "key12": "2hFFGkw2tRmiEoCgsbUujsYJPQX4bttsCY9P7wpuL8iYg5RtuGoSE3t2FhU57kevMvUhmikpqRjARgFHMGqbLfJB",
  "key13": "2h2GftekT6rUvQvFBUV7HgxxCd2nCs3aMSQExxEwiGk9XrGPjnNznQmRUk2MVhE7AeRsM4mcD7UUkeUQ9ifrq7ot",
  "key14": "hYawnyhAqb8A5MsWThNvyER3hHb6g8ej5rPKU48Ljp5vRRbiavtPsBw8Bp5vuqjryG51pCcGsVhqjD2aUc2rn7v",
  "key15": "A2Cjh59DCptfQnf41xYQUm1GxPq3X3kxNhgwoZFdBrLwA5oRWU64EtV3rqTHA5TMnmqVh1zTkRktEgVuz8h3car",
  "key16": "5H5hbmaLdu7sWQ7o68kXbxr4c69M4Akbqvh5tifT3QJD4YgpcuW1HEzk3B5ety5cZY3r4KFAZVSmZkXccMyLHmxm",
  "key17": "X368DweSvyxPZugs3ohTdZLofLeKLQU4hKo23CtdKkNgnMRPEKNqTisQa8yL2wYpEi8gk1V5gihPtFjvGRjsrmU",
  "key18": "3yTZFDwDtg9sVrWdrtm5EPsHzZMgXJ1n4QDRd37QcJWV5rExASmB3vB6oBYxveXt8rpvhdowDoCjEBsMA1Eqc2xe",
  "key19": "4MvAf1EsfmJZF4NFzLThZ6bXEhAkGUYweRpJTShgUHYWE1BLpCrQRGdCd2Rok1T9WmtTbmtGQ5bjLTR6jBUBNDM5",
  "key20": "3gajE6FUZPxHtcQ6QCHQqR2ZhruToh3zc8CvWbBvzbVe5E6bpHAdgaPRumxYqKP3L89Tm9H6THagq4r1oTAZEhA4",
  "key21": "2nbmDM7bXBRzTyUTcvVTmp326jcwoyU3ToR8wGSFK9g57wohBoAGRFzVN8CvANvfxSSdFATwirHnNszPjWYKr8He",
  "key22": "3npB4514Cbda5o6yArug76EedLjvXKpducdWVL4uxTGiTayVBJGAnhQX4qjF9x5XRPc9AP27ruVxbkbcGwF42UQS",
  "key23": "4Zj8oZFKAZBK64PRMYZSUAw3zc6kqKvvSAuSYh1R5bw1YzAsbEfTCaPFhRh39csYtimugtszhPPKp9bucAfbvSe6",
  "key24": "3aGepk2wvawzpX3BaWswKVnRzodTd2DyLrYFivhzB3iUnb74TKraRbQiEf81amNcVoSC5btP1DUtjshQqrpA91Kz",
  "key25": "3tPUHYS5h6asbEWLdNh13281ZrjGHo7DmwDMWcewVkTEZDdCakrkhSAkY5ZPuJ8xDM2dmFSK9mwAQSQRQAPiKk3v",
  "key26": "uBkeyDu5hwHVT2sX1cX5feADYDzPP5Be3MtJ2fPq263k42Uguaoj1qcngBdvCkLuJeAzCPpAMJChRpH2EjrCDg3",
  "key27": "AmqMKkQqbMnbDSbQqwjAbijQFwk7jc29hbVeMS8W277yWavawFj1VigK4FgdS7Ffc5AHbzeWGsC8f1d22Jwz5F1",
  "key28": "4zakAsi4VvcSDmxemMCBVkGqNRAfYG59y8WiHhHmL5T5gy77FfUe46icNEcvkRigFqA2AKDW3ZKGZgU7zCRxCrbf",
  "key29": "RkLY191gRCu7qVGMJj6BTCZUT4UJZUN21pAWiB9jU3zLv5GYHhXtwSdyB9x5MSvbaWu32m2kMgwQGc2WsGcHaAe",
  "key30": "uR693RnyDh6aczf5saNQC2pSxqQFyM2PgBVY974MVs6NDAi8gg6UNEQ17drewqaMx4zb8e6jFmwNrFgzM7H7zJg",
  "key31": "5jVYiht64RCPG3aGv1Zcwh7mCaxDThy8iUf79pvJsT4oDoHUcfnxq3eb7fN5fNgFQUUg6FaGnPWpQ4rj8ELu5xEH"
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
