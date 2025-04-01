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
    "23WiG8LVUr32GoCXAFzaPTvwQvUkfhD4LB3aXPKYd6BCaWfqUDvK8zd3cDpUoET9f6g6YUuJ5rTY2NovX3nzYJsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Ubd7F1cbii2CxHpeCC6AaYjjgwoYuy8EunZy5nfQjW3UspCDy39EBKL9DKYCW8g4aCTWNby46utTqugdzsQhLw",
  "key1": "4oDpZwAfzKykdGtGfbcDsVpotB3qF8h6YnNJTKwpLUWHDE7CkiTE3mnFco8FbGCKg2JBqMc1HcgW6EWRXGF9HrYV",
  "key2": "5r2BYnGDAKXUGKA1uexH96ukgtJhzft4u5HivX1B7bN8QpMZAm2Prt7yipChMk21t51nRA8KtGy8rh6rVBUHeLhu",
  "key3": "2ibk3X7YdpkaEoGn2G8Kpah5j61bGp6DQpLes5b631S24bysJfPCE7HSTmn1HYuHGxjZT5DqnNDEzZrLMSnX8EQu",
  "key4": "4kHZBpf2HYAqh1cxTFG251Vg9PG5erEk4aDK2kPQg3GrBaugx4gZetCGtU4ed8Bck2oXTbHUYw6JJPBopWvZDnHm",
  "key5": "4j3cdH2HZVr5JKZbNvHsimR2uduzApXZwpmAsCZo52QVMZvWbR8pHyS5X9NHMRfZrAcnmDe7mUUmYX44EXmmeQC8",
  "key6": "4CqTTDYc3c13WQPASNXnWnZnSapLp1oGTQQvB6PaDeKQGyZKR4EhtgNgjHZVF43CZHnNyTLk68PYfaiY94fmfFdW",
  "key7": "62WoRJYJKmty2WE4qXKaZR4MmJYkWNyQcCq1RmvCh5P8NcmzzhCceHKznWW8uD8zJtZnEnNRqRZr8vj1KTQqjPuJ",
  "key8": "2emeNRyMzbarVo8sx2JJU3ueQSwDoqngJmnqb9QWLfJVjHxm7FcVNMEbyTJaHoRnSCUs2PeAXvbYxbnedpbQDnC6",
  "key9": "26VR86G8eZ7Tv7LdfwteFFHJwKSxDnZbghfa6gTaLnkvJG1uxCUiWEmWVVA89XiQ26tXdc1WurJrg5rWHcnbZBjw",
  "key10": "4FQvE74rba9wq6T9rTwtbtGKAfhizQWtCHWQ3CiQnpHrtFUef11RF5QC9Q9P3TfhUJKQBjE1CvV6LNVFyazjWZBd",
  "key11": "3NTb6LvVgEViErjMkZN32DuUeZvjiKx7oNJ1KXdXgBMiU3YwZzyKjR7zrLjNZrLRMvnRv9HR2YV1tSnAZLtJQN2B",
  "key12": "3XNXfFJNjVeXtPDnkyF8ryZNLeatBkspTovCfVYzdkVSNDivxG4STd3JsYM3hQf1Do1YtPYrvkpSgTReDMkJpkXy",
  "key13": "bGDke6ckQ5YgjBuxLCUWN9VfbTuqBJjbKHcF3VociYPtv6u7bjUnq1apdErWnrwhvPvrbqRnZSJskpWcqJfKc7Y",
  "key14": "2LSRnnBVVJdio7ZAYa5r6GYTdF8sUaiv9qwseVSbKmvmYe7Z4MBP1teuP7VoD3yQFCsC98ge9FgzicE2gcKdxN3J",
  "key15": "4M8TCRgrhzUrtkqS3ZvnijhL7DSRdEV6zh9z9v7QcxfbbUVPBiEpZWafutgBTvJngkEdwuvpavMJCgTsgbecAtYh",
  "key16": "2aTNQoBuKqXhs1WvURktYMiwP8cnq2GuPoHFSMMbNM8be66dysCz1yW2r84amruvUeHjtHyjwvBvgwr2yh7x4jLR",
  "key17": "5jGLJ4F66HTUs28vvwQPVGV398CYHKXKTixsfLRHsjVRVdX7zHYP5PFKjZG6mxazw3v7U7ReCtrNbxtBA4erHMrx",
  "key18": "3DLdMn56fwxafUjDh58i6f7e7XpLimwzY3EXeT7Jcp74TFgtMxw8tkP78TuW8U2iYUrUgxLi6saGD2gWuhUbKgMT",
  "key19": "5GHK6RiggYK96a6QDcL8MQtUFiC4Q5nj9bjeXdbtjtk9BDoQDxLU821N2sUkGRZRYsQWNPSbB72bm8aysUbrgtr7",
  "key20": "55vENFCLsnF1nYtQhEA2oMraAVnSKg167UdJH11Ez1w8DtF9mkDKntXCEx7dCvZheNv2sd98FgwoGaShkARkWunC",
  "key21": "3ZViLA9fDKxRoZR2oud1LNo9J9BJqGNuuLrdqLy3oA2CywgLEuSkqJwR7ZLULwqLpasq9FBzTJ6ZvS9so95phVfA",
  "key22": "4frUkAuJBdZppHc7zjoN4Kud2ynUzFqK6cFyDoVPymLqQLF6ZJsYJeyfhhenYgTs1a38CaJrGdmXdpeEMQv13QJ9",
  "key23": "46APHGZvqWwTpxdftpghqRQqXktEpmz8kM4hnUHPrxR7Dh8tF7Vm5iWL7wPqukiKAzW4t8VmKtxEYmnDYAmhLGM7",
  "key24": "5U2xmHXU1xX5CL8FGbTiT78KPitqpjb2p975bS11ypyPBLLxMgCaWdGcbNqHtyspbHqSPPDi8CYGicMGfV1ih4za",
  "key25": "2XHEBnSCp9HjqDDia3FtyC8kagBpVoPUm8TEeA4gVn584JZDpeu5fDSS9c8fd3nkN3REs8aJ6KUzdGsHLpW2vsbV",
  "key26": "3uCfPptv1KBKaVnXgE4K5jy3BA8zPyHG6XzxPyhyD4QiYWsmyRR17xTpntptDCXT4HhexHkFHE1WCM7KBpdHSQgX",
  "key27": "JCTyDbHFU3V8GQYto8Gsr2FHHvbU7G1kXWMFtEj2YvkzUDzwPD47gjpQNjcte66efLCHSpNSPx1LjB4NPXUjRf3",
  "key28": "2wxFFRUwXhnGXhE5R64VENbLNVGvwfvJQhXJBkzGZhVXYTsTEq8Fix3XVE5kh4jQYZqjHtLq8GKuQrnWGEnsyfDQ",
  "key29": "PEbTVeahDS77qSaHWvRfT93d4XcdGwv8Dzo9WDv4S16bYDoYtzRNpaQzkeGJAC2PonhQsXpGzxsGSrNTq6X6vXG",
  "key30": "3C2tEbgaBeQGRVnqJvf5KGsPRJmYxMZZ3JUhYoL4HTK1A2Zok1LdbkUBfPagpBykdzXihGmi8gWgT5a2nDrm1ESk",
  "key31": "4WQpqAB1EQznAE32tC5gGPFoc4efCNt8c18V5Xo1VpZMw6DTFYwzoPmhEvCqMs6nik2UEXePhBeeNNuWiCBnvPhH",
  "key32": "61n4fkcP9zcGRDHTjpY1tKAmvtB58JAUkA5wNA8EvELAfhXbgwygaYd3isybWgJdYbLkZZriX1AcZJMrLMZrkf1Q",
  "key33": "DSUrR8ysJ9Doy8eWKFvMBTRTSrXEw9BJ6uTMHpbT1uzBHM1F9eyPUdcBf6HPmsQ1w1vL2g3VDR2uRdYfxqqfSR4",
  "key34": "5EtSKj5bv2gCDkFQpvtKhif6f25aWGHbMvXh6dcFr5TF1Pkds7QJM2BCNJYY3sVV2zfAXrDKdejYaHKhAitLFbGh",
  "key35": "3pu9CD9KDZi7rBaNsRSzh88XP8dUBKow4NtUvg7ffsGMzDGrXQgQ1ehtU7nHjQ5AxQTBZBJhKVercYgDrTZPkRHm",
  "key36": "KtwGXPxA9e4gEfFd35pQkN3qJpc6TdxnvgvLGp8gUkmdTqaBPoyR2pWq8zPuSzBVazH3qeFWfqiyF971dy8i5Kr",
  "key37": "4aGpYktdQCRvcWaBeer4MfQkduB9tTQjEJ2meSwqawVJbMAH5ki4aAmycC6TKRq5HwiekG8eQzC17KpVw8HdkeAu",
  "key38": "5hHUxShboYhw52qQ57dvQswff7DdmAcvhX2mFCTfRSMDuRcso342ChCTCdGsBo31g8PRxT7LoHLaZ3KX7jUZNkg6",
  "key39": "5axSh9suJia4hTXDfHci2UjkkqnbLdhvwnSuwEYmCUfmb9zfVTMpgpJcZwucGaPHy7HkJwJYzBgENW3aWTTXLRn5",
  "key40": "5jT5qtEHD9Hkuq89vnqKdvgPfba3xCZew1kRVWtFmFXfEveAe4gYH3yJP4oFDuX1xsx2VhVLchxVp1GTy45ZMD2u",
  "key41": "4bvSiQy68U7jHA2ZqJRu6j6h9QBzm2zwwFtkTn3E3PZQPUtmhdeQCgGax8TKDmDBwmWKLJu2SHj1CvMk2gXUxJ3J",
  "key42": "4uRdhBHsd8midoHpcwRiGr1yYrjjkKtjquMqSSFhthFXyXE8fzySBjiEMUaFQ24kLVsQ4udagKLGLGNCkWBCYxtq",
  "key43": "2356NNkGYaCAfzPTyQGHRxxcreedmYyDmprbJoMqTgVMPk7ksocD6ZSqsa2CczB2iXHUNeHbyBHrnPPYKCXeJbMx",
  "key44": "65i8qyhzWhcNbn8f356UYzNsgGSgh6FiTfEWGX7crhtRET5GqM24rPcqZUZAYNNqRst4oinwdAymxTcRmZkXuLJn",
  "key45": "2eEQFGcPgnXj172pbPX9ngcWexuRZz82kKs1orD5E2bqtTksJVwVwALFZewWDe5R9eMCyZ11VMWhLjWEBawKgD4Y",
  "key46": "4m8ZWoJ8W3xhyuo5fkJRtX6U4GNBeN53xwRm4UmdFhx1bpkx3m9jerav5wx2xfkzDZP636STBZkweB6njKFMsuJ2",
  "key47": "4ZV4pKUQkkaM3hW3QNDC3J9fEyujouq2jbR9tXM4EZQFzc2zQsHPpYYMfPmt9mktQQMUEndHjfThSV211UmWJ6iT",
  "key48": "ePq6y5rsyiLwrasVF7kTNo1YcJZzefrmet74j11UAgm1znA4MsYUu17LuEZPMpM2pBTWuS15uEZEHMVSuxVndzk",
  "key49": "4hMrZkNQfdBP33zgLjC9dxrjdhKEfSBUnK1wsqMtRjFeDBhRZbsEgSmK1pENi99PcGCLvfopEnwWcjmrYyhzBPed"
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
