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
    "44txDuwnvwkQn1iDmeUStE8M9h9dmCL95CicBnbvhELQyZdbkBCJLw3gVB7sJ5z5E2Soa6y67mTFGzD2PFiKyr7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GJdiV3TfysgVHwar9RV357WjqPUc996ChqfSHaUw5kBKTXsauTUbJFbHaZ4piAVPyTx8iep4okiJSBtPbiQoyhS",
  "key1": "4f4oDkaBXeYJzFdoQz3XwoTdTJ7JHttKMNy6Th1YGX1o71qCuVGxJ5M3njP69kqLTvjzR8mi3yibqyjPkmoiTv2V",
  "key2": "4Cn6zsFRKPG6enAQcmyUnpDSUDsdwjC2MEJuJibiYHmVNogCAWUzCEAYqYmDHxWXcTLbP7bKniXptiNEwjBUt1Le",
  "key3": "2rNN5J9qpt152mYu2BStjBqGZads4C5RuXahRwXgdxM81GJBZukYzGyUjRL9y7xRRq3uK3SZTaGWaEYH4DPRGBT7",
  "key4": "45TRuc9NEmK3bKNZSDAJqiKg6zU9hJ9xWBMyRwd1oXDA1TUfZo5B24T4r5LZa1eeaCGwptTQ4F8Un9nvGBYznMzP",
  "key5": "4WUKekmthXfQdnD5PrhZ2uua2ubdKcgB6uGy9RhGThdSuVxKiYqDPUFoXNEVvLAp9CJokjQdNcZDNfbdpiCaQoCn",
  "key6": "52BvMZsEK77e8xv1j5Nf7iQTsPgHFgqgLNFJRSSze3M4Z1LLLzqxKiWaj7s59Q6VaNK6SvVJC4aEqeJmqQ2KghSg",
  "key7": "4Vc4ZhBz7EBX5p2zY5xkqYiv1pdUHVEegxTADbBwxtQ33m4aLHkmoZC2rCmz3Box58Txez1DsCpXVTjTG1VZnatG",
  "key8": "PiHGBPtBYZKKMVpixbBoSULNQ8yCqN5DQntro2XxVkQSvpkxuAgZ3eEyhBYcj1v4g5VuoJ6ZTZ9q1e6kDAR1FKJ",
  "key9": "4SPfziiaRCqyufmEf4jEnqvLeJDQu5qdetJUGPhsGJah5PkAFyLTjt69W4fEbF9DMoCYVBnvntrkmFMFphMZZ4Pz",
  "key10": "m8JU16FuLSVvdUQ9RggwEAMPRfHKS3A2UsAVn5N5unDWkzBP2XN9DShCCY6Jhkg4cNzpXi1cCUY2dQbVpvseRBR",
  "key11": "4CjSjdjuvJD6qGobzeWdcdBmG2if4o9V9BTaiaBcmvo4HHJaLJHtSvbgfgatomypmfJC2rzGVYEVEDS1d3X8CDtH",
  "key12": "5KU2gtJ84NpuXjYnvbvhC5C6XD7wtzqyZYeAfmK3xnvj7ww4kfd3oCqeSWyEaoSEZUD7jCLwWjJ9hRL72ANAtHmF",
  "key13": "XACmDed1KueDPEbF8LAhQeerLNXrbV42CoiedwpDnJb7MwJmo7YqNsfcsg5kCrGTina4PPTJWWUCBZ8EjEt9Nmi",
  "key14": "4QcGsZTherna5ZCFPE7FgA7YAbtJc9nGefXwbz3SgRMbKm3BaQ5GDupBZdTZ68skjAcjjeFtH7RahmgMGQLHU3Dj",
  "key15": "zNQuZGPjXW9rHGjuBzyqptQFqG93E3pKToyRq2BdApigHLnigjAz9JCaCwVLXFw5PdZvqsw3GA15EDrpN8MBdWM",
  "key16": "4raRF8foG7fxeqUBnXFfrD89vaDjGGJQNSiRWLxY9aNNiK17uTwcbHpXhkW1bPk7SobS2QqgRiZwAaFEw8LuEnms",
  "key17": "2tJ3XtnZeupUprHDxNCRXmeqK8TbghPTS54fSy5FeaSysiQ2vkvzxgaV1fZMEyc5YkN3GboTqhdMCYEwd7iv5ena",
  "key18": "fphTXJyk9t6DeJgqa6u3cWPwh9qwoHwfUnV1LJyaVLZmnN16HRGDvnYeJgiNfQwp49SYTD3QRwFMaqvMCRUAGMk",
  "key19": "5QCtw2jCdZP7RDFijfrqGK4JnC9Aia9sTqiQtVt1VopmEbwRHxhFVEKqEedmirCdeL1ex58riRZpgqGScvvMEnmQ",
  "key20": "55SPoyzvyZmpwWThAXuf1DcRUwrsb9FGvx5BU2bzH657v1E5E5fvcekpPhd7ChuKTXy4Zv7srGTr9Jirh1XE2h7U",
  "key21": "42RK8xZoWMnsKpmWMfoNELyfPqhgteriP1gRzy3st7jyYQuJ3JUvCWMk1TYJHPdbBQqswnaG5RbfrexufsGgzLQB",
  "key22": "5GeAV7Q61F89316VcW39z2Szh4JHptabChww2MzSvKFXVTboE4BwaKnKPBV5A6agseELzPdmHF49zvrT8eAXcgZh",
  "key23": "5QUVQKhwMH4ekGjGyWRh664sESuooZBPGM5Pk1gPSS21g7QaTrGLodSisScZcGxBCxRwrcikxebPHDiQ3o1qKdDJ",
  "key24": "cJp6ka39TcFBHgdpQ7Rq5LD3grR3AZdRK27zbkGCGz9MWgKuw3fY4kLfCYP44WwHno4FbbSuXKX48ft39LiEVUT",
  "key25": "4poXp1gmjkuD85dKDPZXuQB9SJtvs1pEoKL62qZXPAXuzDsYxkBnkVZVBAYM82hjMuMjmQiKMhTam9SkXBmWz5Ph",
  "key26": "4LdeTAC9WT2RNqn3mzssCTi3EH1vL8n751ZPT4CMTZYqWSjBC4nurpNsCoCZQahSc6FMieT8UYfkYNKyWBAccS1",
  "key27": "2PzeLYATWBeXXSawmFzCczKyuRtC7yo4p1f9PMEEE5rbTySupNPycwK3oGVRnJfuUbbopo49X6TSVud8fCA2JL36",
  "key28": "4SrPSr5Ca8bqXyiJzcXDKKg6dhyauj4MBJCJUtexmT7JHn4xhaDPUnJBKRadHZN4odMs95t1vP9w8Dn2wK8bcSbN",
  "key29": "4fc3EmvjEpqyp9NSPnrsE1JnMK5iuijbyoJcJyGLp8JyDo1Z7wxJ8WkyAtWCgLYC2WSuVpNye7yTq31CSWqU5K3W",
  "key30": "5u5kg4Kk3hhX2pfea2LThnG15waVK9GSY7nH8RpPqyWEPys4sQDd4J5Zg924co8sibvujQBvEZydxd3cnwtychg9",
  "key31": "36VUstwdCo3i7FYrG6XYidthCAvkwSuJzr7Pmm4dtRNFfyq8i7FD1RR2EEMwRcNRDHJjfxooZudCTcV9QY3N2CPZ",
  "key32": "5yE2jw7HwMiDfiZvta3w6kTxgSZskJaJA98Gr17FCwRWhbGpFdEM9qQTkvHMxxJwykaTW49T1M1FPWnSkvmkZ2hH",
  "key33": "2T17iScaEfHkwEsyZwFwJ2HdBFoAYuho3V79dVCbDBptxUWmta4pwxzuHomSJARMtPpdv1JhNe5gkqun3K27PXTX",
  "key34": "3vdtoPNYovVF7ouPsgLygjTdr9a6hXqnSMXL4YK8qfQKdEJC3JdSDejW62eh2u9GAV1AAtHbkCXyRhpccw3prjRB",
  "key35": "4zdbzoj7tkRpcYv7uN7PgPj8gSnjZNR3qTXaUeSxtGfPMwtFSfugMk2xrRNWZZzKQpzTUqAMnzvYSaTr4katw4hd",
  "key36": "2wT8jwNrkKwDfuNWUcmv2ryfwcCs6SDaRyxgvhQjKJHXzmU2VD5r4VYj9TJgP2MDDT2hGKmHsqwpoLp4UYoSLo9Q",
  "key37": "32ZM11tfPmEPb6pJp52wKPTYGdH5LEFcR7hQKd7XesPToNQJYsrkFxJt8TqsinFFiTJ4rWkPz7k3oJ48kFzSizPK"
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
