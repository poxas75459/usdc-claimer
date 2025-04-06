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
    "62QuPk7JDz3HPRgbxncRZi2UqmFavAkxAKX2LfzBUMwLBpPqNeVoHUgqLq8aJNF4DbB4nMEBzcsSUbE6zWeGpj32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "538sPVmtDpC7uNjovkZBke3TXGsz237ecWoDe1JxUK6ABw6avoRJLp9QGXmT67QE87mj9ezuCdATsUJeYcQMSdTp",
  "key1": "5L5d6j6bj1pkgLqYvwka9c6Erc39qUtyNRB3oCnAPGXXaJ7BSy3k9jwboe2v4iAeUd6psXNU4fbLxLhAyd4H7qZn",
  "key2": "4L56MWKPFyDMsVwfsknaijbrCL26WnTaM8KakPREZge5xBnUVQGHxwdbtTFaecVBzLbaFxM649yRVxwiNASCsNzj",
  "key3": "5htbGJ5A6u3Agw2WASoPJQUwLyvjT23pd6JLxaZDnvtLkThv1aJ7jA2Kzakd1uNAWZfDphHVT1SpReZ9rLT8m8ne",
  "key4": "5248wH6nKKABSsNYK7HfmCf3tbKf3HJhP6TqbpnsZAx3KR7h47VtT6AYP1dLyBNNsaCWRUcAmSDW5e2PhWibB1LQ",
  "key5": "4F7fPJewBzsAn26wS8joYqFUs65LMAjZfgeo5yBwrfF8RgLnw9CCZiU8Aj6cAQSosyZsTUxNQumqoPHNuKB19DeQ",
  "key6": "w4iExyaQvE1REqzuM447LxGnjimy4iffZLdkZQPUrWE53XrXgfEJchqkf3KswLEXJi4hvAv5Tv7qFHcXKEQc78u",
  "key7": "anj1dZo87aAohSFesieUkctSSZgcSsZHJa7sw6iLuy8hQnfJfsGLMD4wudPPMXKSpdtrvCy4A1wYmUkaVCwTVoN",
  "key8": "5wdXpWUDhQcBUtB1rZHH951wNgtoaBXaxQ8w3yYW2q4J8ErWEgntukdN8pDuBFDCQKWKAiGXFmfVFVzRRvep7MBC",
  "key9": "2K849RDYrQGxKoDvVGLZxWCPdSEUUDWYi37yc9qbHTkLQPfyUNEyrDKvzDkpnPe9KSZnHenKZP4yabd8KuEoPAbs",
  "key10": "3JaF944m8zvKuMs3kvmwgrg2PrLQ18Xs11fAfiCWh7Wz5W4KN24QDbFA5RcpLqNQR7KgJtAxfpsmHfXJw5BzMNd7",
  "key11": "edDRPqvPP5rztGGkeReTywKgzE81Ax6gzyfpfXVUgntcEVGVrf3nnC1pseTkitbZkPQCZJhEmZJytH8naNGs2eh",
  "key12": "38KW5FheWH1Kde7sVzgnPCK6coFTXfPT3EyZQFojJejZoimWeQ3uyajhjGJs29i7guxZoREiqhQ5c9udGTeQtYCS",
  "key13": "2yA3rqkqVEGon5GxX5HVVtPD3rLhQjaXt9UQ1itKoDAAAot6YycpY3y3sULN6ikHu8iMKDRii9f4q2GkZvpHWar2",
  "key14": "5P9Am7LxMXyT6mjxJbVVjar1kP4LqwbGgVETSVVeSxH5MUHsD49gxoUXpUuwZwRzjDe9jxuWwhJiciekucqUWPCz",
  "key15": "rmVz2BSWnBMYcdQqk3jGcp2xN8mAAcJQfGxxoAx2HwvwN2snxf4VyzbxWSBywThY4Rd5sXBm87eG2xA5hzDMXWW",
  "key16": "3rcFZEqCCMmY6MiJBSU43fje9NkmvqzbvF8z6P4ZS6GLM4ygD5DU7uBotmXgE3aHq4DzetpbJTxurVPt6nFGi5mK",
  "key17": "4EWKEbfcAtPvbZfP6mfH3YiLMWpb7YLfiQypNC5ga7GRQL5h8LHCyRBSg2cnVXAVE5TdCfpaB75vVic5sU651UUU",
  "key18": "2FFbEQu24TJfSXjWG9HwoX7fNpFKxzyjLjxPVajfiQxxaNrKmmxFwowmkfBBj1gg8FLxdZVr2aTs3P9QtSkCUc7E",
  "key19": "WWi2wBtVXXyAMqERcJtuTTfwBBYGsTnqNtxyZhZkPE8KrRjVi3994WUaYrdU2GBWpTsPJHMN1x6ri8omD16JEmw",
  "key20": "35E8LqSr1D4c8S6v9RKMr1CM1YDc3isxpxbEQigWXCS8SJ1RG4mAFekjE1V2t3vJbgewFoqgYJH6GSTdjMrGM1FB",
  "key21": "4WcjGT1V3ssw2SQKhDqLHWcNqyhwei73UNGFyskjDGMbMaQk67qxxWg1dSfL2n2GxfYwKbiamNZ2FxxPi3uosvBZ",
  "key22": "2ukzXdNRoPpAk3tLubba8KAvNwQgQDURbT7sopppCtfYhD4yE7zDZF6v6fkmYd85ZdQuF9JEG28RRfPGtob8TLJC",
  "key23": "27s1yvkPU232CKRVyR6dj8cBuvRXLLdXRb4jnpHwKTmbcC1H3ZxFouardmpV6KprAfZgby3Uwy5e4wBVTfqHdxVZ",
  "key24": "3CpWdLHAePmwoYpqBJriNsd9zBBreErLDneqpE6ogoFNtQu6QWtfcqpFrM7WMuHgCZEzbYHYca9iXxh61mbK6Qqu",
  "key25": "2C6Uck2u2SWxFFdNYmNFMNoxsYiQ7Dp4WW2ATgfBMJYu3ppytJ3DfYWFWjw1tYma5u3nSwuXP2zxdbnnzH8bY2D3",
  "key26": "3JwwDNo5J5dnHbzqthTKoN7s2EhsPHEnH9uRvkY7uUUvsnCs2LrHZEjz6WSBjH3JAbxD1V7TpfjPuZnwHsftYLLZ",
  "key27": "5AfgDsh8wZJhzdZfCa6z3mNGsccDMLYeLj7UNtwC45Uxhf5twG39zkbpw9T39T6znuz17yhSgQY6xFpKuMHQ5d6P",
  "key28": "jJn8Nip5fgzuRdSoeqZARysZYcAcShVY7MtKdYKL3ZB24Mrh5Hwh5y7KoGEKM1zzbxYfJfBXbtf2yZ2XsLeyiQS",
  "key29": "eoDyYrSpKCJrDBmYBaoc6JLRpDBoHufCrjEhdER7ZuYYwpdNRbBKn5k7bNqs43LjR72ejKpX9aPCx8ifNcnw7TG",
  "key30": "4teZzSeCSpepBtyfpNeLnNqk88i9RJMxLpt1tLhqh6LQTu9t27pYGk2o9pXeKpFBR5vdFSErJ7XKDuawGZrqM2un",
  "key31": "2pryzSkqcqgPccUFK5AgriP3cZhADMVxRqvguJ795wn1NJubXTi5ZTDEDEYfmGRWKkMLF138dGxt9Pmf7ig8U2fh",
  "key32": "5zoStmWAQECaxtb8a7pToqcoV8ocBiCYpuuwRKgFb9kBzyJJEatBXRaNVCag3DgKTUwRAT11TiZTpTgB5UJTcr3D",
  "key33": "3JphSCDkPM8wzVbhtH7jjyqLNKcPg2AhbSDTrvdXYptksA6FfjT5jMpqWUSSXEBTTydiCXEi6cpepXUBFHXYWqEo",
  "key34": "5jdxkVtkCX7S2Y2ETFKaKFbBUaZQ9N8J2z3uRKgkFyZSN5MZgfPed2e5PesfLraYFsogeofcQTDuEopuFFTcDR4",
  "key35": "XHhtLeX7zoU8kRFpzYBoLQxtktN8Txgh2Y1YNuipPtBHd6qpdDamEsynnZ9ij8tSbjray8uChcfSfvRXuJrcaNm",
  "key36": "3ePGy58B8prKDNx4fEK21CmcFS5q2VMTGTcQsQHLFciAQWhGrHtQKMpZPFc7qxAsXtwoTvVR72LrkxxZ2ZG8KnTZ",
  "key37": "4htZko98PNkYLDF51BY2uTCdtXtSyye9aJm3LUEBmoC2ziM4j16jt77vQkWkZet2Y9sXEVxmKkJdrkvjptSnHUJm",
  "key38": "9h8Bbi2hhB3nR7sF62AHWJGoE3jZ9QYDszywknUhFRzYBKXbGyWJtDMiurvZbXPBpH7rYewDJehdxraHxCbaeWw",
  "key39": "2wGTq84TSgJ6Kzo5pW1pM3ukeB5yvnUQkrTCvowWjznLVGWJiXNVfaAzx5L5Y7k7Hj6NWHZpAfoSR3E8TMkT5R7p",
  "key40": "5aq8SrrfYWA69vPYnq8ZkYAkDLEqpHCngJp9ATTdhZZL4CqPsWenLQL43vvSZgcGBMwXK8kYSmTV6UEXKWqsjT8V",
  "key41": "3nFZKm9QTa4NEKkuRWgiyzBV2fdG9ZhEZHVGMEXEyoimeXAeahAMzXLwsKoxBTAyBig3m1q6HZWBJmvgjW4ESRKf",
  "key42": "25tmonyTVXdcxRfZJCNyod3prZx7fcyPua4pQE6YrPbs4PCjgJft6s9H6rJMnncwpFvPLVaCjveESYECwtbEwPV1",
  "key43": "2Z5wFoupwcPcw4xurL93BKvsnnJomqiFjy6sc64XTeXuhErSHH8fSnUXz4hxgcLP2HT511aduAVnDFNtqhaPbSx5",
  "key44": "DwLmyjTuK26VxRkQNK883zPYcx4jBvPEZDiWrJAiQsa6Z71af5Yj8kyUCA36vkXfiqAfGuFQeSnyNtm2q7wjbcK",
  "key45": "5q2K3447UP1Rr58T5CAxgAaWP6JxsysVtmwJVUaa4iy4mneGhL41cTxbLKsksps1BraR8japooMwe59fPzp6v8Mq"
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
