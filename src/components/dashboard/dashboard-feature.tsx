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
    "5DiitgUVYqZV5dLMzmiNRoGGceV2o8qkXEQUFtxwZbAXnTf745QBZSBnpVRUFkUjQrURznjncwbQUq5VpwiAkpFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGCvpXp4F6MSE9Kgjsq3myzL9RpQgcs8mmgnLz7SNEkKPUyeMi8dU3tcS6tYu1mD6p7JxdJAbWXxt8LVsqGyDbV",
  "key1": "64y7nCDwVKbjSwR6vLWgjhZemRV23U3r5BxvxGteKZpNG8uQXy6M7BKtEcvDhEEev9c6tPGuwFfszFkfhkndEr9x",
  "key2": "4wkczzgubXmZ2hbXkeeJKQWnCgzyfn3PK6aXCijxPjRF61ygyhdqd3DEhSvNDCEehUNtWABcR7SxcKFeFfejgoSc",
  "key3": "iUdBak7KcFwnGHhsLiDzNrVvsM15TqgLJr2JU7MCm4MzUQV1jPk3QUiLk7URG9b7bgTGfteUQJ471wW6W9frpuD",
  "key4": "4Sg2sXWZ8SfeWhUwdQz7mRaq4G7iCswCgfaak7ozzZA7HNUoQoAqZ9HokCnSmBGhJiSGrjNQFcuNAShPKYFA7xEM",
  "key5": "2V37y9ZtmizxaMLUJZzmdwuauu8pPHGr5fkJ4FpXuaWrTdiBq2G6GCCK4DTSzsRxadTHMhwsy8svjYLsv2qGAQ77",
  "key6": "2EtsRZg85Pygq5qGqngSgZyQX4f7Wm7vzeE77UdQNAnzAoQSAb2AeX1i6BQRo6UrojPNr33UvVfaynhLLTc2wxPS",
  "key7": "3bwKNgxJJd5qNCS2T9CwtS7nRNRTaBy28UZeDYWZEdKS1na4GeSQueVeHjW35AuKMbnVjY955BneGJZR2kfDWiKU",
  "key8": "2oPvcc3UjiAjXRtPrdsxmKnBPX94B6SaDAawArQMf77fUbW8vhtFhR4SqrXxE9T1m8jPrYhvL4kT2rgkj3vP6SHD",
  "key9": "w9XTi8fJ76LdT9gYe2RsfX2Ng44tcxUahunWVQX7YMWENsQ2NjexcD8u1b35mTaQJTacp946Qy8sVUGurwi5ns8",
  "key10": "28iU7phoBypg2cM13YknuhS4Se2W1oGTN4vVwWuf7ZMP7knG3P6jcqwoFMFDawmqCWYe4UkDufRmk7TMJs4TuASg",
  "key11": "5g39MxS8sQMEUmaxQgxaL13deQ3soTU7zCR6k7MA37BeQQjUYmh38DX4jScPLdpTJj7hF3LcmFAzaA4PZYeG6wV1",
  "key12": "5xdgsRmTE6inW8LW8Kxu2n7Az9A7EK5egrxN9qNrmAgAkMm7tXnb4wc7dWAY5uJ3uKeQny9A7iVCDh7viPjS71JC",
  "key13": "2ZtpYfQcJjUeG1dVrxz3in7MsryzSA8JA4cdpJYbcVW4D4mz44nFFbfqgpMwb3groS1XjAoxNyWvebxwxDymBp54",
  "key14": "xTCTMTvtpDTomUcXi59Hixs3yxU5gRnE2TKCqiMBi6YgGYG1P1Xd3QdeBjMh8KodMFvAPebBygo6cqf8uwoBFAF",
  "key15": "3fPLFzqFqiArq3Qnfffh89pAhzYqrXJk3QMVzjPCyA5r2dMikCR7nuPAH9JXpJ9GQ7ahxsS9SvFu7E4qQUfYk1xL",
  "key16": "bbj1M8kCRvJ79G9R5cPJ526e5UP2pnfyeCkr5d5iTvjAQRJitiDycAgxtAeT4koUciHmGprdoan5rnzzsk9ELfr",
  "key17": "35VFjuaxeKn1tqrAYFuQvbU94hX5UBg8SC14cJtQfqwuFdvV4hYW3r7x4rG6J4JWFkiuQsMgFxSKp8RXFSS41cgx",
  "key18": "2z3pzsTA7GC6DzVimJrEMfvJfgAwtZe7MSXbjCc4ZKHX9xLU4x6b4E4TNETmSssfPtS6aewTSmMiYWowQGjbGLHF",
  "key19": "4GWmWKDMWBnX9bUGDjn5N357aYCTWgwu4PVvbr3CaBBiyKADhfrtLXZcUbHCCQQCenyCUgyLb4c7FDcnxQS4nVDL",
  "key20": "5Qb1DSnhkrs1uuUFgzuNPgBbTAf3ezjMpc338GUmEYZ4rnrjDYZR51Y6dWz6u7Un246vffG6opg26epxu3wWarEA",
  "key21": "2FJ63EiBxmDdz685D1LTm89duDkundN5MgUYKYbPDuvEruoF95DAfkrhgYFFyesLgB4bCwvv5roJidkZsmhdbvuc",
  "key22": "21VeBwDJKCTDJVrXTqQn3DU6NTchVapgBwKXjWUxj57tr7VGKC4B7XP28hWEoVVkCAmNuZ5rBpq3v433uwWiofv2",
  "key23": "5UbaVBj1rMfXxStKUUDJdS8QxmCFfhUbG5oPbMWGSUTeVS2kS5Gkuikc8VhkWcu1FjF1XNpVgtSwmoSArBFqPLQ7",
  "key24": "4obTBytcykQGsGTmwbB3fASS8S1uqmVGsG8rU6jpQn1JAm1NvchqNskbfVvs97XfcNpw4tFt3rLg66ZpoT4UNoHP",
  "key25": "2HCo2sphFLA79HmSTEXnMsVsWnfET4KoMHVAQnXW1LrQhVHkg3cGid9GQE1kxiR8N8rQ67GRYUWibinMTrGNXj29",
  "key26": "2bM4K6iNdb6sZtLphczP6XPdAAnqvtVApCR3PL9hbbrTnUmLdqssVHPprEXkRCKqLHDLcb1VvMLTmbRfsdRv8je",
  "key27": "37CkSccMKqbyJyYSPxxDpKYqtyHZot4WDj9WrwXF72q4in6KhyH8bpyNj2UM4wS1odCrMCJdT92FZbKLnQ6XqfPr",
  "key28": "3HVz8wLC8CiLc6mUtyQqPoVmxhVdqJRe62E1eyfjswNjdSVPSLnZgE5aWSt6EVoKY7wAUvFrAdujvhvrCiJLbqER",
  "key29": "4bQrmSnvFt9AuC85W1QZJuxiPP5pyEATGYnTLixVkkrAPiTz2LzbCE1e6kPaG8vphAxZQwR9czrvGiFntPfMSrfv",
  "key30": "3MLyCJnMDJp22hReZnDhBbs9cFifzRNFPm58EQswK8Tj1LKKraicT2mzPPUcpxZ5LsyWeysCA37e9kFKpJjJvV7t",
  "key31": "41emn39fxN7YHq5ckKC63JswJNvX774X8pBQzW7u4Ei4pXwrdHcsXXd5STNnhYjUxAMT5T2JwMJVUBtV2BGzwjPW",
  "key32": "651fQhBvLpjmiyQhW1uWFaafyVhqgFeywboenopNbovhQMt7ebv5o79sSLzBGj2pY4sNEsVsMorKdEh1BQUuAXZC",
  "key33": "rZNXWjCSiap2hHPFVM7M1zKnhPdjTXfwfxY7R9zPoF2BPpcPs4EM947dJ5mRQ9L9zXFa4qPm1JwmPBa94ATVEzF",
  "key34": "24xrwjcKkxTfPNvagT4ERTV5aVZ5rY4TLgbqiEUjLio44Soh1njdXmmZuXrWntQ92qzEuQMFzD4JFKQbse2Unrrq",
  "key35": "pHpjDuN36aAozkCeqFk1AZfUxpMdkphqDK46xPpisYWMUTTBLKXL2ZZ27HJqpFk3TY6t8JsP6yk1cLdSkRYFbpR",
  "key36": "wFBZD7j2CuvoiLUezCUtSdeS21qQBjdZzrejY2bNF4LC9N6pZEcvnhjzeJQgho5RDpmSdHpraSgn4imyfkHrwLW",
  "key37": "3FPxEV2MEJHFE5n1z51Z66rLamhDZYzKQtAxfiTUM8Z64K27PRX9KnVxxhorSMHDVmQ7wKCKCerMey9cAq1pCDBd",
  "key38": "28q6N3jh9ud56ySPFxeKMPNc6sbmggoRLb8Di9GSHwgSatANT2TSebdDV3JQ2yrHogexKez9242WtAwCJGKsXPy4",
  "key39": "4d8hpGm6oBNWWGSB7sLCdRWtVzPeUfVQBZ3Y5B7bwyqFgSkTsuSLXD9PkugwS5TcoGbUEc3o3oLTTo7qhfp6AirE",
  "key40": "5KRvDAj27t8aC6Qnj4z86V4fyzvXHreLUiUEwMTp4eJBxFzuS2K2Mj6B7cBpMJWhoznma1ZrrPXP3TQsqxbx1VDu",
  "key41": "4S3QpoWVJziTiFfqYMdfJLpo8J7Jx3DuhdMxVAo5aJzHg54Apkd4yxGVNWUn3nLz6PKP89wLdxY6xoP2Bs2xWvHz",
  "key42": "4bVjocXUW2dutHwATS4fjhybzMoQFg9MZL72d1UeMQQ7CmxoNNRwVyKp2CkoV6wnH2B3eFTgfXBqMGdviG41rXgJ",
  "key43": "3BRU6E93rHsAqHWJBUEnPDWTFSeyNN1iCjpi23zGdGqNJ1WywNJ4ZAT32q9VEX6gsn6MvMgevrvF8yiGYXPXFhrb",
  "key44": "4PutTu6SVmQgC4PYVsZ5Q5nMgGVcpzFw3i195vaqfhAK7ruCvy5X1EQfc7BJNPKD4Gt7sHsUP9zgdPundGApGDAv",
  "key45": "2S2fXyaHSCaUgyKkdwVsct9UvcUeBuzpSD8eFr1QYkQi6veVxpJK8en6HPQSZaEgPTC6axuMVoFqBNSyGCZowbzF"
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
