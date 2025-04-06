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
    "48tPihQFCDCRjTPsnJHKz5KihKf4LAA24uyXGonYdeCSBwRs6jam7j6AEkbnUpBVVoKmczUanvQk2iaeMjzeh1F8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63wUuAuF1aSxvPBinu1FdtxHzmoz36aUc6f11Azf7FMPgdWSSonBYwQEwnWdNS62HLH6rtvJAQGBhDESMu7drZdP",
  "key1": "2uPEzM7Gt1mhLwNdMp6d3Ws1kLbrSgSW412YtjNjvcjewBWd2n3J8jMYahKR2Xng8Kg6n3iSGwJmE5ndL7QdWsrS",
  "key2": "62PKRHWH1S8KSsupv3PoCgtu5aE1oirdmphoEeey8YmJbCnWx7z5WoH5MQZfXxKR2eE8n1BGTXVsejyXZTxcwd44",
  "key3": "2wwahjLiBnzSwsUjCwYjZBTWZjMwatNSzeMSApMzsYSC8R119nKMgZhaTUb1RWsRXjEfsd6TK6e8HGip171fcV4d",
  "key4": "5do6AhZqaZh8hA4QkGhqPmPSAhigZ1qqFxrRsNmPFdyid1U6qs8Bb8VDhds5c2Kb9jRh3iPNsyWiaqSbXYY1RPTf",
  "key5": "3kHDSHiZZw8PTk8WpHVvctNziWDidvTmMdFNSPgFTgXDbWfTVuKCLCmApDqffzM6D4rrUwiEkh85RVp6wemQ5MEx",
  "key6": "CUNq77zoJpxDgDv3VhpjM8Euf6C9QxHnSoVCwbVLsrhKzaRPSyP6geAJwh1GEtAutUuCbWVuY4CuNtx3Dqm4zM3",
  "key7": "2Ksz64hb4SmgespEMqNTmo9FBds85mvphWfvYqtGUYEJR58sneJu7TXi5GiZH5rs5Lpiy3FgcNm7KtXLt1LvCsmb",
  "key8": "2K9M4okAMc85D7KKyTx5w9ACyvhYGe5SQuPyU1kSjxFnKAhhoNibZ2oNCUTTFhcQAuPP7eZPbYNhBQ77nJ1k4txQ",
  "key9": "5nCdnKqcKGDKrcptvYbRxFJ4tMgYmENxBaz91T2dbWinPyxwi42Yf3ewBGKVS6nNbGFWieTHF9YvLUF4NNHU3546",
  "key10": "3FHzMcLQHq4TzNEC916orFuZZQyHYbi3Xd5Tka5rUwQdvou5knVJrTXBBms7Apgm6wvBhdzDDCRunGqDQhcBsxHr",
  "key11": "5fei5dUNSRLvR6Y3aGHTQUEivgc36GsAm9jGfpRjR9RDDKUXfJz1cy4jX3DmRvLgBbJsbd62xGXRZg9bXxRikN1w",
  "key12": "5tZtKKoVqEFEFkTKt2m8GUqqq1CGQXQMfNqcAosRWtjEKWC8ajiPFfosQWV3HcDvvamUBFMTNxAULHiBpiFGEAhm",
  "key13": "MpqQcC5emNgnUizbBwh9bgsCVkBJ1z3bcAaTdYXCNvpGtd4Qegnz38Wtg1pMWwdF3wyVoamLyP4HGN22P5FVAQY",
  "key14": "3tdwEFLDpFoK6t1632q2jDorZFwpbLNy6D4WgLLj3UXbWrq42ZARsfwEG7m5ZGJbw6Rx3Urjkc2TdMF91ZeL1VCQ",
  "key15": "2ypGdyPmCkAHn7eAvmisZm4RHtiXPvRiHyZAz8bE87dmqYPdeK5UaRW6xU6mECt9efttS73rydW3Bt2tu62pbAvk",
  "key16": "4Kj1Aw9LoHLL2VooZ7UZtHwPntTC5okVJPVRTf34F3UR3WekZLrW9qFFTGgs3HVA6YThiG5xUu9kuGAjkvJAC8tE",
  "key17": "4RujPnxhAbQJuj8vgSiV3CG9YC5Hrc8Xqs2NSggM7YbTtJe2GSuD3QfzZ2RY3avetV4i5Fc8Gnqu48LZVzpGqwGt",
  "key18": "39TX8kkQmLhMZRkoGCkwGB7xCEXb1mooaRk618XpzDUv46niRzkP8ahREGNMJzguwotLyzH3XH9MJkbW4smJi8jc",
  "key19": "3LibM2ggKkU2ohXZb4KPXAjVS7Aoo4t4dC3UMG1NW9ik2q3qC3UjU2ZhvX9JgGW4AFAxThe6NwncCMiBuA6hqjF8",
  "key20": "5J3dZHAWfdQ24xiN4AJ89Cbf37Hjtj5fDmXUM3DXbzMsFvSnDcnAMe91MXr9Nc3AokhiNUeUSMYRGHXwcMWFHSBz",
  "key21": "4N4hSo6Dgt2QUQaACfU4ki3Zk8NkDZtABfXzTx787mG9RbuctBHmo64vZMun4KwPYqeaHQFrwUY7FWceXkCbnsHR",
  "key22": "5XHJ3Jw43ddEWmQ3jggftHQDP1tr9ZwKJR8PqjbrNuCQAdN1p7ayRmWBzf583Xv35ckgKrVyRsMDyLAu3nh6kBd3",
  "key23": "3EyuHTMQsvuN7Gf2MAoRMPwyC98ttMMY9ajNBNv9DEpSBp46uLe4TTYs8Dsf3Ph5Mt72tTZcxNKPAzLibF67rnnr",
  "key24": "2Jxc4qM7YwzMbUaUNMrByPAoSojKnvcPSJgp4pjFbQkbfznxfgJ6p1RhLUau7zPoesvqwZco6JXBmLw4X2zjV3zT",
  "key25": "3rygF7y5TQSA4gJTgTkJWF9riZmL3r5PSAb6TK9qSaXq9ny6V6cJGBNjqKSjqWDqbZUsPLRhCpzYQ3psexLn2H1d",
  "key26": "2vByfbDhay3MeCDZqYLMpQj1rdvGs9Dg28MEV49UDu6wyb3uXM1TpHqr8Gic4B5rncjXmgSmfjEik41FNyuqGXJL",
  "key27": "3qQg736tPqDHgKVu8V4GdivsUTGdm1z24PaBfFHfgfXvfpjmmnZ4hb25MsvgCkkWC2ktMZK9jGYo5Fuo1ADvk1uE",
  "key28": "5Mb8assHrTeehSoByAg8xKqgxpgeazx5W9g2yko6NoZKRV6C8cNmSCnKgA5qoLZgtNjUMyEaygSy12LtWcRJZqu2",
  "key29": "2EPnNGkcnpkFgDYAKC2NT4hbXHaXNFDPS6BAA2dSpBdNUQYQuqxo3yK911tqRhG9LS6VJaKt9HpvrntprufNvSD6",
  "key30": "4qrbEDgRx9byVq8EU7YF2RtGAJtEbNDkVsxoH9KSKhPtj8BLE21z1cHqTG6A3EVQ4mtjk8jdXd7kwVbwcgMDsMW7",
  "key31": "43ppAnh9RjBdkvc7c8UjdJJEE5cc2nrRFRUNv6QsyU5fHPWFKyUngesMBeTU3R36qqypikByL1nY7nw9i57oWKZX",
  "key32": "o7Fy1H4GN4im99tRC9yhB2HGig2oYV6K2h213rFNjXs9tDm4HwGzNcUamdJ4nd5ykWs6yQC31vdVfpUpF8VXSrS",
  "key33": "2M7gNLgy5eB16k1T853L3gSD1gDP4KZLd3hQhYnQqmFimp9XCoWMDmADk4WT2q1oGgdQEsywF4LGPHftdhDWbiNN",
  "key34": "2VsqpAp9GB1XimHXjLGmyUJqsJyiDdKWoFHgT5L5ENcut8UojkjSrzcjL4t69XzCNxpUzhGyrSCCeA4qWSRLSvkh",
  "key35": "2n8F16gANpS53TX3enXrGziaHEjQMZSTV8du3WuzUZmJVWm36ZUJv5wjZ42jBvDASih1s9cZM5t1DZGSbCGdiWdS",
  "key36": "4oqmqkkUbhvR3meA62mJjVdcfBy76RyWDP5dDc42WW6KTb5EAGEjJHaPCEXWRMWDKFxfbuwp36EPKymECSXzqMcx",
  "key37": "3ZyWf2SEpSPbhKg5X1zprHgCxzGc559CGZcVe8ePPyGPYu8gmDuvxFH53VLCmAXLL1zMx8z7KfHcNkfAjf6nzd6X"
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
