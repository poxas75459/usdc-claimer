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
    "umhjkmbVHRfTY6Z688PK3w2eQNiRfe75zR9npFSu7EC1ZRetVQzkCtag1JAbKzwNX4ptraHoB6XsCi7FQC9qLnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537cHBz5GYz1mo2bK732js3Tx7XFCQGEqcjJzymqqbY8e78CbfGURbFhPFcmLQyoqo94PCK1rnMYjs4bm3VYmdQa",
  "key1": "3pmWsutdE7wgHGVUtXqGBmgBLLVgbEipAB9q8m135BMXgxvvn3jRSbFdVT1PGXr6L2qXztXhkBqDmnikdY7crbEk",
  "key2": "YwuTrMFoe1eBRb2QHrn5NWUJgXzKvYXD64outr1XeB8Mv1E8FdVx7mviGcDFzQqhPeYHHbU4xQmHuR5iMGr1b7z",
  "key3": "2tMcS9fe9aW8KUSkdMXQ7ZvpfymErQ5Uu312CYUN4JH1QXoWBmYyMhVooPWP2kk6jLSxhohNJhSE7kze9qKMMNJW",
  "key4": "3UF9yRytrGNZPjwxPztAhhzXome67UaDub9R69ZJjyF9xZTnjszmExCSzSoV2r2oDwB2PP1zqFaDHzxR8ipEjFKv",
  "key5": "2X5Jb3a3Bcvs1mKPA965bZyaD5uMkK1bBHhaqB47Qpt3fDDXZB8rnSumbP6NfAFqm32ENFsjKVCgXj9Upk7Cd9bc",
  "key6": "4Us1QhXJaAp8NHCrUkg8hkces9sxqRTmTsMXwbJoiUQjsZQnctbAL5rMUQBPAmC5VGDXgrdhLveQP3pw6Jt76gzq",
  "key7": "mmWt8jwsN4CMLJTnGPhhZXvRUus5df92rifhfrPcxG533PGo3qgtxMXWaSJ5mokNBspKAWMyoeEXwmAddhHoWZB",
  "key8": "5gDzkqyKBrk6Rik1zkws1R87ZGoEuTtR5ndNKLM74dfwQJGEiQxQKz274BUtSTa2wyQMu7DkLWQxboQYspVNy5rL",
  "key9": "3S5gdu7LTSSKeD5CEoQfyYygK8xNcgRcFUMPH2LtATzfUvJt11ziaDR4ou1BjYs4xfqaN7uWSAfVp24BiYT7TaCt",
  "key10": "4uM1JaZpou3uTXpvDbiX4JgHJwfe3YupbXjoK6ad9NvzhJQu8JwhDi3ZwcnDHeuPG1W8GZYf2WgEMtv9zZhVCJxx",
  "key11": "5yFPgxpZxAAK79NiQ1oQWWgutvVhHA22fqPJemWBjc6TyPnUpAQbPFKQEPmCbB8stWiXFCAG1GCe1DV6x4B53tkU",
  "key12": "4HnT94tmfUEJxVFRcXPxPKsgZoYd8Q8N5pcAPoCrbxTzqPM2JTYgTGd915aqiR7Nd7HCV9YVopTtWdUMGWJpj3Sk",
  "key13": "2AcejyWfmENt4n9L3nA2GnMx7m1UpVi5kFFLcLt7xnrzMaANhxmss89cYDEaTGrnrwAaRVpMg6bgCgYr3UACBb3Q",
  "key14": "4DkiywDjLeRF2kFZAqHkYZpV47rpxsuf61vNFrVjj5HwskY4XexC8pWD5hDkCEwLPvxUe6JSifUNdbou8GmuoZNY",
  "key15": "61Nt1h9TG7Z2prmQ16nXZgCQJTJ2YZCTLdgf24DQBD4brm554k5vLpycqEXWbKcWNSCgKoGV8hRzYxgPKSYVkwBi",
  "key16": "8obTCddxvc9qWADQf7RtoC5bBPkUD14D1iKLDgCNiiHB3RkPkzEpEobS6EeoBpg7vA3vjGCb97YYuZ6qU15Nxvj",
  "key17": "5v8EBaJE3hN9mnkGFWc4p2jmu5NnP5YFqnutWjAFRVv6niZjchDADKFTnDXtzm2AdgPcY9ErM2wLdUFfAKC9SiZy",
  "key18": "5QWuCiPJtgZZKfmQ4VQiTpbfDm6QbjndKx9hRdMD5eCWR5aEae4KwDncgo1MsSemtKzGgyMdQupVRNcFDirmnGfr",
  "key19": "3bcRza4k5hdf8VCc2J6RojtJFyG8F81sBJPHkR74K3xw3X8i6ALK999wAp4pkwFAw1dUqPC4mMx4Zr4qspYXSDCB",
  "key20": "4tJCcyRD1YVgGkeQ8xySxRPEpDmLPrAYQFoEgyxtaHJ1wZVcajDNaRv9fYiaUHqgTtbmLUvP1DS1AWRDiFC83VsP",
  "key21": "5fPorrcDksH1ia8sb4yjZnKWZXZNLbNjGt391ucZw8x5odwRbU28cZG1H9XcQ5S4LjTPJGFz1wuZbFQ8JAt8H6no",
  "key22": "4vurXpcAcwayFDUQM2QBTEwhVMCoKwqtrMUqK4gRUEuTQrLaB42c5rEJdC4ADgeYniQDo89jj7dtykbR3D1YuL9N",
  "key23": "4c3f6s3XgKfmPsohzvk9exurhwbSLdf2iohfmrNkJcJe3aUMB1WjReGUeRqxqi3wcpERe374WkkNwnfM28VW4pY7",
  "key24": "37wg3QoixLpzsa5hjZo7R7A8pCcTKxc8E6XVhfvTjEzr66eCVsipRCwwos1ZZe8KFvXavFdrYxK7jhL2Ud94k7Gx",
  "key25": "4XQcrjoQCvhWfR7ZmYxNVeAvxAmfyLqtA66bA9fG5jqsLkKDeqxYtVwLEw5XFhHSW3U6gzJoe8MqXPo5bderdP6r",
  "key26": "3KVHTHXiFWorHC5JHGgTyTQEaTtQBnN83frvrayae7E1gp216kwozWb8RaFBf5WMrQpXchN8PmHr4GtaBbVQppJE",
  "key27": "2f2KdsLksx3s6Sx1CK5Fh87C4dBxtQmRduVQ6oVjaovHMdEDJZDa4RNQVCcEte4iXzarUZtP3yH7kVYtKVqJW6Qd",
  "key28": "4AiBxqRhk9NNTaBzodMtEkQn6xQ68tVXCgQiSoy99L7zowTVKLTX7scszZXk4M1j1XKaBVmAkyrwCGTzJJwo1vQu",
  "key29": "3T74zocRxkZLuCbj2JPaj1P8PGctgK9o123yQXSW1FAkPee2JLnwattQ3sn66t3S4MbRXPqRyz6RAR5CX3cmfZzq",
  "key30": "262JiqmBJhV6aQSuaFEQdWR9z3YoRyDD1LnAEG8uZQ13HTFza3q1sPybDwS8vNZ3sEWLB91XuadUhvgpEZvWDhXm",
  "key31": "2aPVPSq7GuMLk9wgGacsU2dS2RxBbv8cbZcR2TJNEaxD47nB9tbdNtLHaX5WnEaMUVYDk5gJNdfe6bRih76e4CPG",
  "key32": "3zTMVodgXSnm8rQC3pB5KSgPQHqYKfCEofabEq5tstZnQxFSxmgC5cuMmngttMkPjLnaPx5hE6z2WTHVgHrcCfbP",
  "key33": "2L1ZNJbHU1JZ6nnx7wbSGwSNdFv2N92cJnR1ghecfxXdqwhza8CRDPdkRgJfAe7SBquXyHZMxkwd1vFFMa4Fzs6d",
  "key34": "5Jkm6JVH4vbDT9eJ76rn3HqFeopMXgDva6sN7c8pLVrKEXNYomcSJvxLadLvX55ZTk35KVKasEzQiCRm2nzqWe6S",
  "key35": "3VEGhyRsweEaHJMPa9zphpvpPLbhFrv5HxQkuHxN5ygL8eQ9726CctJQAR1MHbHTFbbgJ3J82ai4UzUFFzzJFYF7",
  "key36": "58TnYqRQyi7FVDDYjUuStmPsiTs8irgL1g5V48gqxbrkrDvi5ZANwHXBzTaszzGmvef1Gw7vywLaFV8cwxx3Vyrd",
  "key37": "4yYPoX6pf4h61CxyoDSypqqCoWJxDdMwkY7voakL1v3nFk8z5arMnMNts3oZKyEfNAKoLy4jE2Lww46dZZji13bq",
  "key38": "V3SQJLHCCrT9nLTM1kPf1SEpFq6wDKoNziP3qpd9PSB1jfEENGkRtyoAsXkVH7CYzd4SHDJ6Svc6HdDnGuKi6DY",
  "key39": "mS7XeJDXE6tVaU7Ljm6oEK3X5jGWJAcbK2nfo1GuBhF7EstULwBmnzd1Lz5p9humJo6KLfxRqUaBZH1iU8m47v7",
  "key40": "42A1DPnysiY94cKinYGWJRG7P6FMtZPciWfPzSro1rMq4AGPQcksjLvA7hs4kmvVR4TDkuSxqmP2KZGYrLroGAEe",
  "key41": "58JBgMckjqnuKhv9MVMccDProjnxgC9c57CTzMZPiNcpN1s16dRjYHPktiX62WDhSPpX6Z7y7MPtzWdGW1oXhLUZ",
  "key42": "4DAJjRvqiSmth86T2AzcJN9GTSDV7QBj2QPduHgTBdTNsiVrMidqLkFknvw358uGo5p1je6CpWYJughK8Z7HQV3J",
  "key43": "4L6NSqMrceMzGkXPxdNnZk88sBdkn5PXK5LxQcbWW8cPuCzwu36vaFC7ujxkmqGE2ZXhu4DEkL1DnScWSokGd2sa",
  "key44": "3NBh5uEuWH2GuDuUwtgFVf91qLGTRvj4VDNi3ZCPQQ9SDUUb3vpVc4sYPJCbxVhzdpkXp3qdd2Mgj1F6cE7uekNo",
  "key45": "rujiSKdoabiMk37H17w9fYqX1eSHY9e6XZqdxd3is5pyVWZ5Vf217FnGrCtL6U1cgzZq6nKt6xFPcPesEGmx2hd",
  "key46": "4R4k8S6rKwqNvG1zhmAuPYSMYdxTUsdLXHXJbWkWtosnm4Snc2kP1ZtdaYsjKx8gBKF7jNBKM159mjgXG3nMou8b",
  "key47": "4YbAj5cJRxXKDizh5BVaMFJws3iJBZDLRPgBqpALGguKDwjjN8FR8NysnzVqEQz6CMb5hZ4PJ8DbLBKg85UtZ8SR",
  "key48": "4uDFwwvJUWYL8s6jYrXMpP3YknNBhR8WkZ9KVmjDKJJp3hne714JbnFoAMo6bTciCBFFzdPjHwh3XjHhjg8ktefp"
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
