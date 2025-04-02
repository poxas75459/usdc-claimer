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
    "MR1bK4L3TERLn3uKeNUsJKmmxNWvWZ3mxQHxQA4JEnyqzsy22qTW1oBe8S2sdpv7DjaD7LmBN7XUc6iBd9VrEJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Skq15pMZsghJxEeU3GFVoPAqzgmyp61skGG4tzfXZX7yHYveSvW2atyjFbBN3vQ41uEfDuVAXwVAR9pydzqLwp8",
  "key1": "5S9MCzBFctoFJRxvA99n9M2LQQPaHaUrn4uGzhHoLQTYKPA1SDhtbYeXfXcEa5tJyPrnKrTCMTJy4bv12UT5o7cJ",
  "key2": "4MevTK2MdC87GiBMMpeAtuqmvaHvLoV33VYWvb97q8qijNAVuNGe8NSVJYhswxxDusB9QbgsGghDu6r6MYFaKT86",
  "key3": "NFUgSVtAvaYJ3CacFRCXGekwKSv89QEubxgenS9cYWkGPv35wtTeA3Gdoz86iBU37HnD7LabDhdBrbm5BDuEVA9",
  "key4": "3SFpjdr3h2bwXxqt5UkfUFzb8MdU1K19tnTusaNdbK49x14uG6aSqj9gD7frUUrDiyQHV8XiWF4g9dqngPfKeP4n",
  "key5": "i2vXgXVBNDtWTDh4SVZ8X66zeQyAor4cU82MhUVJXshzdxewZsRPt7vD6KnnDYZv9Ht8GYrGF3NBq8ZnmK6WrjY",
  "key6": "4aBJKZECLLRMMkvJCRWsPYeZEjob8y4AJ6gziVHURuEpe2FSa5oBeFzJZLEbCeMqKUEMh1FSpiHs1seHxyNDF5jV",
  "key7": "4PyJUhRd4QAWGAX1rUFXDrR7Yo8XAdfRDve3uTpEepmYuNvNWtWBDeWVRjWQK2iGQPN9VRs8U17Hs6Fm5X8f7EqA",
  "key8": "5sjDtZNkTtJ2AuF7vEojxPjJfKyiqxXPVETSkHGZfoWw4Z6DZLGQidnS4TBRiS6sQUTECPm4gCcuUisc7VYoefCK",
  "key9": "5QVSmC7zDsaHvYnVVgxNnE8hUhwPusJJh2tNt4cyft72FufxTohqY9gA5bADz3dkgxGuJPgHQ3Q1BUGNqZr1Xzfs",
  "key10": "5yeh6zZv2PCTWNTonvr3hVhJYozyCFmf55bpHhQAuDNJEzidEiFQaZQYBWFRVsKhQidoSPuRpk7K4ZKbYMrsXvJT",
  "key11": "3RzRzMJcnK2adczEhHWiWmcWVLiRD55HSs8VtfTNsPQdCaQQuqhTYexq3d9PwoAfsVj2sPTn1ULphLobsz3qVRB6",
  "key12": "5Uzcr1CJfDpzaCLSBuSJGUm9LbEvgHWfQLRmm3SdRMSWWdn5fRD1BkGaRKRxnNFzNrCEikxHnLG549Hc45ALTaG",
  "key13": "4oMk7qGY16WzJWKnSPNXyNMKUyN1upoTDktk9rZieF7s7wKRcZPdZkbcUUWGFkNRJURr1n4Ggw78onzKhufyaVrt",
  "key14": "DUCQW32ubBVyTF3Z6eL4gr5mRjiktMSEBd1m4yREuh1NGqKNV3fLh38mpnLBgjukanef5wiQrVcJTNgcV6mK6Tb",
  "key15": "v7J1u8yQW4sGUbcfuxntMWRmY9Ygghz7tu8P3YTmSYz32WBCJWoQnZvvhCFvsuNLhuQVLWN28VnJzXzJWuPR4T8",
  "key16": "678rcgtQoHUbpPK6hQBxyfVT166ScD3BGES2vRmshJMBS4fnUt37HuGU6HKs1teRs7AwXZCyTXCHZ5mptvcVWeGL",
  "key17": "4Fgmgo4CW27686e51UG8BoTRyMSQ86W5qi3h6rjDq1TaWbRXEPZNurGG4UqAwoiub8DbUcdPXCxKH3t85sMqaaZH",
  "key18": "5X6BkUZV55kM3GvU7XhnpNi4cNGmgChpM5Lobkqv34iopjTLbhjiVkPXzfApU5Gf3vzZMHPyBFa3hGaHsarwgah1",
  "key19": "5RcYvFhe6m2vZWjQY7ENGPXnVYHVo9tgDWCVHp4uEELTKVWNiuR2wHKYxgi1F8otxgSAoPdzMvTzceExmc18FMMv",
  "key20": "2n3t4UJTTBWkKCoZCAbQyWUAmQS79yvP7A7bqxyjK3iHKZDGh935JEVecJLGr1YBK6C6f87smA2URFGVKpcYWNzJ",
  "key21": "2H9LCaAqwFZBnQV249CdE3CmBQvStSBHw7QQa6gcnsGPed2L51RWZpsG3VWFFFtiaC1kfQoMMUAzxPSV4StPGt9t",
  "key22": "4rJQCB7PyD5WNH8h24co3YEv6W8cctobfMg9FVKE8Quc3gJHqBKWjC4XJwBhYuuY6bjLGhTXtPrMAg2P9ucJ2zY2",
  "key23": "33o1dHwbJ2tDVdVPgsuvrQzyr4tU6N8eH7yuqQqDNhVfrCrrqDziBFhzVqT9PDzr3rcXkwsVpXfdv7cYu8iBN3tJ",
  "key24": "4EWVGwC3UQMrsNeDk3oUJg4VVnJ2zy64RRg8GmGTV6ZuEkv5AuEF8iyxy4juXmonwAQy8vtKH1kAYqzHnGcyLQMU",
  "key25": "5NXckw69wuBz4cdZ9aJSt91s5f5zKF6kV2RTVwBpx98DrS5GLMSgFXBikteF937rrQ45ZqiZL6jipLwq68qMrX8N",
  "key26": "4v4nHJm4HNfzWn8xw4uf8gixAZhLNtA8M7dARwj9r9wx9UEA5TQtC2rV98cMXdQShYXfDynSb7XUKSHu1bakNrSi",
  "key27": "5VV1CQnYhNmzPcQ5BdAxP6tcZT2MG6rftmwZR1nLQ6XSN7Sm6Ht7x1r3Gj8QVUkfvtKgZDV6LSCM97HceiAE1UTY",
  "key28": "3CqkjQkUa47g3xqi2A8zpWmC7Dtp59REB2qqc8Mv5yNeWDgdQKEWvhud7NHRnjZZMa9Wne6vkwTFBnrceSgkMePa",
  "key29": "5wuGgPmrX2GWt9fsgSK7Eq37nZvhm2gT5N39NiDWmTnYhMJ41aYeVCuMvW8hTkrLAphfzxh1uT69pb8DJLWbE2vB",
  "key30": "3kRZenpHTAUGS2jokE1F1tgCbirN5otjvs5CYLL3g4a76Yib1xWoFQMxBAsv2kPuy9EuRK3uXQrSdyDsMbYMxyqQ",
  "key31": "2AMLP9X8AkXMjbzRRn3mZuyw3ph2udvbDpCFx8RewaEgFveWeLUXDzikeLV4Fe3teaN2K4apzPZtTaHT8pyJpvCE",
  "key32": "MQuES3YXGCy2vkjzsxGvR7SHsgjkJyGE6nZeE6REKbkHuo5Qsjmi2EyukDZxPomT7tjJ2js3VS3RoLKmnSjcfMa",
  "key33": "65wZSeqv8xv8APJDRmZ2H8rAKZ4Mx3wmz8pRHhJxrkaJ2VjJkpU9aZfesbzAwb1X1QJSzawBxnLm7S31yQxPY9by"
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
