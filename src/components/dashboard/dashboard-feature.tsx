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
    "5YJdgvioHoLNfvae8gSQS4sXaVhuAUhfY9xhr3RBqHAzJwf435caYTHh2tFe2M2XXNTRRmFBAyWrfkzMxgmeekaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQayB2sPM4ij9C3mRo3wk3qAFd3wbQijMLAAanAdFV67RiqAMVLduAbxebjdNd8BdEgrA9JWR4cvVvm2hpBLqdw",
  "key1": "4QtMi8Ymh1Ru5YzjxRsPt7xWAd7aW51dgTBKf4LrV4NUEDPMaNAfQGvWn6XPx4eXk4Kwvqega87oeinZjzuYu5VY",
  "key2": "3w2aU43ttbfmyHGymHdoEVomf9j6kK8U2gmKTSUWwg1M1C9wRxycoUgJhbGakYDq6a9SmvUnjHniUYaPkBR2Abo5",
  "key3": "4V6aSm6kxj6jBWUdYrihpSSNmATkoc2kd3yAynGpfLnTMqPzW2J697RKhMQUfEo5YbK6P4uH8EeQKS848ZqC8C4u",
  "key4": "5q16c128NVRYJYacG3juLEVnQv2UBtDJ5EUdJcFN4TjL2TCJHL9LzPt9EXbTdUNwKdYEa6zyJ52Ur4v7fVLTCLP8",
  "key5": "3c9CPLqJWoDeFZdpNiUzqpAiiUFAam28wpZ9deaKcfZttpt2wnTMJu6yJFdkg95hNuPF126JJYTb5dnqnrXbRVnQ",
  "key6": "3TCzkhVaAEdqaxo85nPn9w7JS8jBvcs89SFMfENLAVgJyoKqrZ3PYwRRhWjDNofRGLSG9Tx2idK5DgiEA6L77hpU",
  "key7": "239x2EaGVMLCqQWyzWZo16JRGVoKxpd31eA8Bgj2XLuxvi4nPYa1WmK5VHAmFs6u4sL1FMJFqiLFYBCsxd3n1BzA",
  "key8": "2qeEQN4g54ttFkexoFvKMux12zzKBcYrunZGf6JXEMhKXYP9Gtid4NG9Lkdfc4sxhcL9tvdgC4JBH8CwGi4buXNk",
  "key9": "5phiGtX23Sd7bSeJaMZgJrxZxAzDr696zMk8GHdU1ihyvWx1UK46wV2em7GVR715ZjQkAWP6HJuvuYgQZ2amTofW",
  "key10": "2Gf6epY6oHNZPxEhBceKwRu9VqDMHbgVim96UkzDZ4qkNo5AikyPMmGgSgXLRBn4LAFsESZzfmUUZtxKqHjUsicB",
  "key11": "65NMEyNKi54fjq5Jgyi1887vXDmkqfJ4rXhHvuYxbptQ3YnDBtwJPST7MtdAxxWKoXkMh7ZfrXSXMFaVFB93sGfZ",
  "key12": "3QgrWAvmDAaE1WLz9jMnRQPAFjxaJWbZnCtHRnFuzJAfYUNE2Nw44FsNZri9tpfZsvJCKSnnJNpW9Jmojr3W8dFw",
  "key13": "5QAimyb5FSZsAZCMhuLQSSz78shMdCi3rtC5P7dBdUuGSsGCGyKN2ibzHwB4mwiEj3NUnAj8D2hRBk1Mu7fmWDH6",
  "key14": "4JQ7RayTuF2iBPvcYwVCgTxGrySdFsR6pmgWJvtoB3BSPDeyAGXcgxziW4THE59yw21LXEYNSi37XJMaqVEri7Nu",
  "key15": "45GHZZVR2rvQR4snch5jQ3PQ2u74ZuQ1o6yboKHDGMFyityVERaG11QudfVNQj4TsCHpLuQ7tP6gkrBA3aWCrnCX",
  "key16": "5AVvYXiLJNRG5KnhdJtJSpK5u7GJ1XP5z1sLjgTr6Kj5QiJ9mfVK4SePQZQ6sBsCyj52FZC2sUk1vZaXeAecPvTb",
  "key17": "3h7pLLcgnFPtc5BCGYWpWXVt1pCqqPAEx3KrT5XFGmPnf2CSBmq1komVCeKVbhTYyvDuwyNKqSRVH7L5kPG9qV8R",
  "key18": "3G2Lsme6D3H1yPo4P8nFLfzqX6oyCx4q7QUVsEuD7rcAnwvhvcGmc249jFsMa8PpSumYNg5XRo3GDV1QtU4ZRfw9",
  "key19": "4YR5W2XE6K7d8AVSH5SUvEbZhJ4GrpStzBRVutzT2RXmChzay56LEjzFFmwFK2j1gSkW48Dv1Ya4rJA9vXSgPc9v",
  "key20": "4q241wxNR3yMNbAgkPpb59HMMjH5q9qrSd92fhGUFzuP92jYSz9r3pKWKjgv6FDN1NgzKe1m6uFyobySicVEhwBT",
  "key21": "3iBGwxfNLH72jnMKswA8wSv6T891emEyjtf1bVt25jfgJE5SXb667b7G62ecjwFmHZgHM5xLFbd6KQQUPfC3jNbX",
  "key22": "5wt4uQErbsWVGxv2HSeBCdQFKkbQNmjWKv9eRSunVsiYsk7u6gLqXXDYJDoUCJ5FiLMju1RGP7uHZXSAxiH2GJir",
  "key23": "saB9YqNHLpTiAYtbPkvyD8WamnSAC9WwYfNmi6BL5eqWq8nToKTKvRb8ctZMUQpvP9EzrAYFjfauioRwzrAHJZ6",
  "key24": "4ToJyGTFvEqFwJkMa7CRBiQ6PTbpYD6gEuqF4kbrjWk3524fgugcE92cWiuy7g7ioXBafrtoM6TLcQi8adBwgNYU",
  "key25": "so14H3QBboyXWeE8FTmfxaH8w1Ai8CTL78sZKt4H5s3gPPAiZXc57H7pV9g4D7TqGbdrgXHqqGe5xhGsN5pLUjU",
  "key26": "2VRkfY6KnB6BjRdd1DeXFWcrp9c4omfc9xmdcjjMvCD1zMDUPRPM5TzLbb4K2nLdZx4QiuyzPbGP1GvUQHeKC6x",
  "key27": "554QULK8yX8ZpYNC2dr7yjmCTgsRhdZhDBuWfe772XxprYFtxs1dt7yVC1zGHe5KRz5vupdgcdKPBSyYyZAXaRmc",
  "key28": "46U7MAELf6C3SJpkvj8DauiVH8R1XqcJrCEH1tmyJCSPreqYuqrYob2Bjnga4AU2NiGExucDhPFQHW6G4CU5dL9y",
  "key29": "5rLB71jQnjuVeCCEqcobEsqAPHrZxGg1D6RQoXpeWrPAYLn2kq8RbHVBGSdM7rgjARzDU6PcSuXK2Yg9tGC1znym",
  "key30": "Fu1HJpWN8ZViwLn5xAfeoGc1e6nVFKwCQoLcPse9kMQg4wVe6gVKx9NytruN38QmzCa5jAwam7FPy5yGfAQoivG",
  "key31": "2bEALtU7JCN2RehDuQfJCazWfDJ4FqfEPG8xAyPcXjwXhvxwMr8BcwR1JZjwCsUHqL6vZpvhZG1r9SiEaGrKEWXm",
  "key32": "3Twck2LMuuywTHaV5Ve5jR5HJJGfGE27G99z5TfuPR8AsgDVmL5kuKktLxfqjX6LyeqKyJcnVe39igoPVHnLK7Mx",
  "key33": "5PeyR4yH1AXa3qcfrBM4bKfmwFwU6jwpSZ1emyo12CV9WTsx5EwBfyPu9qzPGWarG6AvJcRhishaHyxKHh8xYUzj",
  "key34": "52ZSyK5QPfVeDpXfAz1nuwDWznia72A8srPA7afPeVuLnRuThYgrtFqw9tj7QERyeiFnoAokd4dLA38wbdQgWAw8",
  "key35": "4KupK3LqPZ9vx6zMEbgcY558CdL4iEbojyPw8GaP3MKLyTfzbyCm2UrArur3gohcHa7f299MQvDJLaE6YrmyCjE3",
  "key36": "2wwTBhdLLYnKS8JcwNGE2AHyYFAhtwPxT6iq6Fnz9ErJRNWKjmi3qiWifopVuTqZPewjkKToV6kb6ufDvDvTDvVm",
  "key37": "3vqTa592oZAxeaZBjKKHXSj29u9KvNT5hB23K9L3iDiWzzmwnmyb84zVD6xDDnLxt6C3G3Z8TCtRa2VykVA25r2J",
  "key38": "3SzzPPtcXA36jRuYs3m1ZZssa9fznh4aDaYDE3HHik57tUZDH7vKbFzdWaukLpsodW7UULDmnP9j8Gu83p1ZqUe1",
  "key39": "4uu3LisT6vaJ45e6P9nniAnH5xanonbRezb1NEoN3yFwRSDAvKvXAaYwWHfXAKvj2KnqnrYgCx89ACZVotpsrdoi",
  "key40": "56o7KqoSVMvPF2dKF575NmtpMtKCkNaCb5LWw3u2t4xLUSuyvXCa7PRU6jSnA8esQYMVoaCojRH7M7krMkeLktEK",
  "key41": "5ZsYac1Rx3ZjwaQiFXQcytsvYfmojpRQXLeRDeMcPzwpecS6x6CbNAn4Wb94VSbZwTRQszy5nmqBj9sCjsZ6GcXS",
  "key42": "532x8zXSidtmcVZu9zLNAWVYM3QUwyYVWcNTjsx91HDSA4nmiyf6NgWr57uypLDqdjhJ4Sqc4j3jUNx5Ddhk5fdh",
  "key43": "vr8pspybEbFYswW2zd3pvxTTuJ6B9t8P5jAPkVY4Ww3t9w7eRTqexRu95NJAooW8kr2a4PRPXVVXMSWW3c5y4xF",
  "key44": "2aU5NfSCazFRB9TSHdVdeTwAgSBKk9voTiSw8ScVU8LvERPfrGBm2NYYD4HF1vPZo3x27y5woVVQ9y6xNBQwtCQ",
  "key45": "ZPnQ8UimEsvozfUHEr9DzkeqY3dzr7F34Wj6Rpc2HcmbvKcSyQTnaWBdQVUBwCXQAXGyoaYTdi4u6NbeKP1bAFi",
  "key46": "4anLK4V5EffBapHi1EY18Rbr6rosi19GwAyNAuoa2qMibWjcpmXXBTiCnxzmCc5y1TXVy3P3H4DC3LrJMA9nhtcQ",
  "key47": "3FZo2dyUdGyJM64J24dWGsT5vhN1uPnvFBWN1uuGA5f7mfWJ8f3GVaJUeFySnKMjzgey7u6aU8T7g1T9HCtGNwQ1",
  "key48": "38A7MVPAmiAG7NKkipjDy7Rs76vPNQwJFwBWjzjjnT8A6CGeADQw7e14iSX9YUyzHMsrTQBzacRXVVYPYYjvpBYc",
  "key49": "5atUrmbU49tJt67DZEyy9cr6xR1T9rgg1u2v7JaQStKntCQEjUHqPheVSjJZscis8R9AxbxzXTfbKmVnAwKofWuL"
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
