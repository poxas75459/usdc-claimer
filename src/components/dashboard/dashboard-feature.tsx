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
    "4FfH52a8HvqP56MJEofdcFM6Yz8NwbJS4g2jXbN3C4oiV5JkCjg48Kc6GPuGpqTC1zHaT1F8rFb1szk3g8wRqYyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vp8PpzoEsLAP73SR4wadUDFq5Ef4Qom7ynwhy16XG4xoBCH1HMscBmAHL6wco3NsyCBar4xo2UoH5abZcUZAuEW",
  "key1": "3hCvzMRMh7JtRnDVF7Q62QfJRXyhzhxoxbJhYxkHVPJDNqwDU4qhdHVpyr7NUwDygy1rMMsZHWBWEezwwwfsoCwW",
  "key2": "5eJnrxVZ1CfKUt1Xnpm3uajcS6JuLkdNdQL6ALc7bSFmQ4pvLUgGE9vvBdTHpeHe3RxyepV8usfWGE6KdAsUAqdX",
  "key3": "3FU6TNbRZWw7RRg1Kv2vmWMekWPAKzzmWNvC9j5bRwU3p7nwW73ncjX9aSxdJXGLeydYBZ9gUK4MZjizVFQMH6uo",
  "key4": "4zRp4hvaxPKAGU5QfSPg5RE6n1LektFU1oM9WiBDQwraJt3Dt7tUmt4TjEmePAnsNH4UsW8hdNqzXUEf5n2PdQUQ",
  "key5": "MB2pMGSRor33Yq2F6YPu6Qggw8QVPEPhgpv4uN5zUuvt51vsUMCe671Ege3JXJz3NDnZrkyFzvmmtLpBMBHL9oz",
  "key6": "4bnAeHjHURKmar569sFcLTVFMo1c3Ztu9c82aGxQJnRE9554Cb3qxqHRc7FQY27TPc8wYhoVs16Emy1WMDs1cJgp",
  "key7": "2s9VcRsuskCKHbjaRo6D8SzpqjzC9tenS3Z4LXWNAMM29t4K1tCNzEGkwUA3hugVMe9Wyw8dsLqsUkLhTQ9ahs2D",
  "key8": "2Q6d7qawPCACfqRniu6Amm8auumKirfX5vNQ5pSvkpAkqXuBVaHhfzwSg1hUh9smELmWM9s1oZsT9MXDjSqfHUau",
  "key9": "4sr5DMwF7NuTupyd8rVN33eTMhqxu6BzM7apYH7xcLdtfH9JnYgBr8Z1kxbP5Y3pbTGpFNH8aq9qXoAzzN7e1U8N",
  "key10": "3rxkXVebHcETAyRRTi2ToHXeigeFAoJNeQZfTeFmhprHtcFnyga4K4rhxdFo74Cv1hT3ZKGSzYKyua1AE9JaimE5",
  "key11": "5TJPs8L9wVBTdP9ixQpnJtzoHueUCbMS3y4hDCmSHa48B9vdJmSFbB8zyX8TLRLyaLNT6UrLK12JbR5ybgv5ZT9e",
  "key12": "2SQGMddhMkyzhBqDwtnfAgna1wsEhLPBqkbi526E17j2TJ9XjMFSxDEjH8zrSqcxCzv577JU77UCC9aCZVDgzDSG",
  "key13": "4UGzXYHnXxcJMS9q5YrDuzx8PenQXJJdRcL7PQ9nrPKVpXu4tGrQNyP5tp9zL4a69YB4vL9z3MHvFQ6keYu7z3KV",
  "key14": "BXMi1qnRY4o1wW5M6g1vjFcgE8A2XHhpiXwyATYHayi24Abymy65tDuYy54HxUHRbrXdEdDDzoTZpubfss7z8Qn",
  "key15": "33WcieP6kaKXEoc1wj72oqdEs5rjt2NHvUavntRs62aD4fsAQ21muKis6uGYNeuzC8hV2ccDU5Qrb868UYu8NKyT",
  "key16": "N4A44dGHdY6e5UfgK6WWWJdkgBGeU8UVHq2pDC6W68rTMEdicQwvtmFc5YErSmQqfndABb4Ug1tqA9KyeGuDCvL",
  "key17": "4navJ6JsB4DMQkVsoAVJhoMA3Nphm5Bw5YKwd62nTzCRF1jQNdsMyR1jQx7bAo2rDCAnfAj4qrDzapN1o6vZ7m2m",
  "key18": "2T7z1ex3SW9ANY7kBFz6YnWnGoKaEyjU85VsECpsJdgHzfDDUMAi62XmJ8ZYfeZ67oHH4yCZzNLTEejYVLTbJgDt",
  "key19": "MNpEyzYtAC6gqcA3JR54isB2ppLMK5rpTj7CiSonAWHiYFZjskKQCD3WCPnt9Gj8BRmq4FMszQ9uHH8Xirxya27",
  "key20": "AcEish2Ng8Pe7qJg4VbEH4oSY3DwgRsUorz56iYnHkAgnCJhA9rM4sMmkkR8p9SYHZPQtTp6yaAYV4dmW6HVCwK",
  "key21": "3p72PM83xC9aLmVfL9SFL75sqRCSTQ25M4a7eUydna58anP7YmHTY8BuXoSAMpjQCf1fjLSSsfkZTcA62bj2MVki",
  "key22": "58xHxEVzFCUgJEdzGxvLxayDu1Gj9F673njqCKA1ynGPAbG3zcvBjxoqBRN9TNaBinAHANuDhf2nhA8PUYSQaSm1",
  "key23": "5MmeAZm9iqSqFRk8ChDvcoEsmrp1vzhnpsqEMK1k4rt6E6YNicWU8Z18HjZwGvFQuCxsf64VmqjMuqCnWqrnwibX",
  "key24": "2vaAXTWCRJngxCP17FrgPZV6Gx7vkjuPBHyxhQXuGZ7gcJfhABW4aB4EfoiY4RHwzUJtQ2WF16ZAQMx7LpcaQ2De",
  "key25": "3PesVKiVcab5fMncJo6dZJq8UpafiqFijKiEtUw97uM5kuoFSUExHbvCFMfcMQd3YUR58Ggk2GeQ6o4fakt4R8j",
  "key26": "WgJefriuyGRdvn81h1MUkv8VfcEnuZ3JwKWuTd1VUBfjkXkNFJP8bhuPFWdJ76RF3h6B7koEuXm7mmB5GhzH9ug",
  "key27": "5EcQN6oDTtzVvTTRYvUUdDmPNpXex1SJ6sNJMzH5b58bfRm2zkVPEXepjff5kaYooLrfuxBwk2yFTsQ6gj3ozqAY",
  "key28": "m6SVTor3iJdZbhUD67vAZesTLQiBvqRwfm4STsysWjDHzeYuk3tL5sL8kwFDfNxDuZNfJ2a7MdqauuFJEJaHVRg",
  "key29": "2Tbcsee8aA1YpMGyZLANJyFhpAXWCVujmsxqPXesPPNgPCAA195LZs77omtehst7yPxWPQA1GsrW8USnoh8WaSe9",
  "key30": "3VvGPEAnWmgyxLeKNFEnshjQT76orF5venUkiqZ3rvtyibvEwxYjYaPcrYERHybPabsKBCEGKJNAwcedCrtKQhPU",
  "key31": "3NKugabqNo1ES7NpndM1rdqQRLKUz5rAbAwhVSTLXwBRE2boJKwcVsJdP2ij8K4PepggAHuv9BSXX6agAUNRwxKz",
  "key32": "3C6EogD2E7qXuELM2QkbFvwsUb9VTp8yooDV59i9hsZrQo5SRKQw32ZYit9QQrKY3U2Tf9znjT2Gg44aejxKP161",
  "key33": "5YooZGT7x3J6yDejsT83YnrzKC4mWEonXYFUBYmqmgbVwF5pgD2rzoPVXem8pzehsS4zJVE3nPNTvZGARkRKoTRP",
  "key34": "iQjMdtybe7eyptj8oNGYY3fnvTf1fJ6BqerqgMcCK5DtBjb5Vxy3XhzDUb7jKkDJuPj7aAbChVRseXQMJvTuJj3",
  "key35": "mR32skxVcTBK5FvLRKdHMZKS94857bQGk47GDYoaXUPQtRJFD1CY1LP8gkpBYNRQSEikPbXHegs1pTuNzUNBywC",
  "key36": "5wAtpJJsij9M4E3FSYU7PQGJzYZcEwhdVwBeGbg2gekLdyxkDSPGR42vrWAsw9SxtYFn4Gto7nH97P6oUp9EGutP",
  "key37": "5Gc6UqfUkfLwhQg6mVZuZKvUkW8nGs9TF3dDuVUENvgaYnC8fv1zqx42hm9kFDwt8W47K7M5dBAzZmEJjPQLD5LG",
  "key38": "qvH4339zmMLeMDoHRVk7C1wx6R1yqM3KVMMGUDRzX6ZsjnP4R8gkrZgiTcGoqsWQo41hNwgujUKrX5vgdVy2q2z",
  "key39": "5rVYV5G4syc99uvd3CWKgLYoV1U7Xnr88ZQ3nd4JgUaVKnKxHDZVq3GVcPuYPHt2hdREcAvjrwAvUtxdCtnJZM4b",
  "key40": "4SXZR6jPoh2n6XnL62ZSStgG3oZZuUZtKegB5QLDkt1kgFHthNBueLAHvvrm6zrTdgBoBCq6fSwAUUGFt6uV8PCQ",
  "key41": "4H3cHe3QdqKjfebnTMDx1BPNh8EGQU58DS2WYz1QwsKATwq3HoXvEU4TSjV5vYW9s41Rb9K2gagqUcXYNU4Cfp2c",
  "key42": "2dfL9oVFvdC8WnvCQvpLyR6j3nz1vgVLbFBtLuiw44S55BH1CnETWzFCfpbRgE7k23LU7p5oSReuE7RVzq63u4zo",
  "key43": "5f1CFcMsZ1CHw5MN1csZ8MssuPKJ1bYodAc1Wa81d6WSdPYaGjKNyfgDpbssdbtTkuHG6dKgQx5dwbce18qWesZe",
  "key44": "3oPgcue8VRMWBhze8MusV42y3RS714fDzj8G2vo2VCHfprJzrPvax6mjWfk91FnHsRW2LkqDcGqpNS2kcKmuint8",
  "key45": "2GLjuYSJMg97KYRdePf5TzmtTCBYQUV6fp1GpKWJsXURxME9VhPg7HfoNKk5myVhWcsf4ZDYtT3knaEPbStp6o6k"
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
