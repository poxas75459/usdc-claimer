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
    "XX3Sz7P2E1LctyM57UmENnCz3KK6juYjUipW6nuCqjQDT9TXe33Mqu41R3bFa4uXS7q2xpW6x5S1uzX1aizN9PK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Fpdmombj7PxDcPku922oq4EEWjhYzugxLYoLy2NrZs894guEtvnVpDjGs5owhgnJRxonvjbLupDEu5pCeUz2hz",
  "key1": "3Qk1rcY3CCYZLavVgpWaEmk15iQSoN2R2g5yvk78uNYcgvspjsdn4zbMJYbpUaaZkzVyUdyBp4uznLYhohCxjGts",
  "key2": "5wk9R1c7UyG8X6v4tFhJ3Ej3eSYm5p759yKi2seVY7z3MxJhMAPhAjCjLmZdg8USvC3yVwLUVeFbSwTTioi96Ea8",
  "key3": "3VZmE7rWtXLHh2dDXMKzJ13N74w6FQeLuh2HgJR8qYSqhvdDcfrCbgZU87Mp6e6PL36ofGFKMzEV4d9XpSkr1aQG",
  "key4": "A22fngGJGSz5afiVfZb6yDEYbFPrsKTtMLtAQFZVFkrKwmXPg5w7PxBzhgH8jxNnm4nsKmMgmGeifdsELntQjgp",
  "key5": "2fhgouFQv8QGGB8sc351tMETDEXmQe1hR6jn3LuvbHvZvw6kQsiB39aXBx9DjZ6sqbUyvUKJa198ov2LReocQpBu",
  "key6": "L98QXgg8nAKrjhpEjZDBXVTqUp6dYnhcffg7YJ9PsvYbJiPmwmBYTVfyr4RRN36QYdNU2x1R9JKBhwHDMtadcQX",
  "key7": "22Sxeh1oQsR7FBLVnjUcY8w4hDwQcziguXuDiBPh9a4UTfTHKTyw7sL3wenaDukNbELrRGWMbZ8EpbSECdEK2ybr",
  "key8": "2NrXVJqS8EkMfX4pQNkF65wqVmznmo65kZz8U9BFB1X8hB1vKCvwfAjj1evtmKwzaz5gvituyukY2EUK1tajguk7",
  "key9": "4PBWRiiRXEqCqvxLgpg8ieJHY6w3nXZimhBfmgoh5y5XFq3ssQEpwGQKo6mu2MyKGe5sZGKCAzRMvCnxsazq8VAg",
  "key10": "3NHsPSV4iDcDLi8FpsB82EHxd1zUYTvPatka15tUbKaLjLRi7euabM3SvE8nWE63up4u3fDovV7ajxSwpWspTzNj",
  "key11": "4gcofcL8Aw866REQYu2WBZXD2zhbAkEmttfKpPRQYUQiif5NPZCpfsK5dmpFfihfPp7nz6kWSF4S18Bvh2t9X6Hm",
  "key12": "5NBuT8ZWUbLoF1iVJyUkRwCQ7tjxfq5GwtsjZwR3HD4YsFktvhKf5DRRDhqoLxoRAiWerX6y4tbr5gYHv1sYCMTo",
  "key13": "1ZcmEuumbz9iE3x24QP2upsyKryVr6RQgjsHuEJ3gb4PZxDtRNMHna1H3MMzbtnDsp6DZBzUeDguevGc1m5fFnP",
  "key14": "4tNHe7B4iq4ZzGaFmPUN81wLSkDYdBKxERCU5WdH7CFs78aTN2F7GwTv6FxkMAGPYCYFgtzv5mvNZPAvKzdwo8FG",
  "key15": "Wou38GL7BAm9WtnhgJLmDtFiN5HJD5dZWRqyoj43vivUTmPRKeXxyEMPGhhGuK9dmQ9qMXMYjcmeiU2DUePjpDu",
  "key16": "58VQAw5ZzDh2pUumsPkkEtNfd5ePpHxAEcdSrbtXPyoSkDzGkMJGM3V48D6Fe72yuYw8pRVghSB2LCGpLSgu1mfo",
  "key17": "5fKUtpWJKMpj13GvPcBCMwnVbFTagNUaVXyqe7mn5NR1mzDy3LBZAsGvtK8nk6bydye6XKd5X3DpzMpggVRVyZ8g",
  "key18": "58FUvpVji5tNGnyBqsa7wA4zJLhbCzo7QejcdJLE2Qh4i5NF9SH8fPoaBKzaDkgCD7mKQNMp2wNXYJd5eGEsWxik",
  "key19": "93QTPrE1nAwuYq7YJUDquTGLm8QZq7azWDzcdxFH75UVnpRLbXRpBSZzf2m3Pj2P3nxM7vF76CsUTa7XhDGNYvR",
  "key20": "5FCWMe3ofuRJykhSSa8CgBvE2PMBEJNPkJGuFc1d5MoR36cHBfFVi1ipcxRKK6Ffv22gfWdw6t1jYkUi82W6n4u1",
  "key21": "676ZvfPw4qPgABvm7e5jpgVBXErEpXF8gxT2XkL311o4wUmdkzi5wbfzM1ddfqsVhdvBqd5EnN41WSyfxZaHEeKR",
  "key22": "2ej5MQJrhuRBvCcEZMUR4T6JpWwkdgtD1APYToURBs9jvSynGndhpxGC1TwoR9ghMRuRPNP3QZs8TBi6im5FNQN2",
  "key23": "4yJ1BbbzehYfEHNysVexR5Dnqypr1LM9j8kwiGc3tosGcyapaEhodC29jaR1ae598KuTkJi1AzPLM1sm4vsxfxQs",
  "key24": "3wFHHyrHDjfRqJr3hsBoJbhErZZ2hS7nLhQqfpXKdRgd2ydbUDQEcHrSweD8zZQKvsaPdtw1t6hP2XMUHHNab3VP",
  "key25": "4q7P6PwUsPz1nQ8SuZBzQFz2qrz6sYQXJt8s6ssosc2piRbtNNrZUsHh3DCbSeZE9YKW7aUcb9G5HHhABYSd5o2N",
  "key26": "bFkS5Zu9UKg2mAZz6ARFFCzqtwjcHpNVE7MDCsjtFic3h8iiz6tgUqUvKphUFhMVKrMarLhiLEnmpKz8iAXTGc2",
  "key27": "5iexHCYG9zrhnwL4t62h2TQNrxwdoUFRGZGRhjJEMhFbL2VntWfeVo1DkY2WY9HXj8AfoHAHWcHS4LnDE7bfPVm",
  "key28": "2BNvXtN3Kyc2bE1aPB3Dcpjct8gbWWTJ7SKZbAUmNXdUD4Ywwvr4zRcrhLXX7mmQ76kLLDMVLMhqh9QX83j146ei",
  "key29": "5EEP3FNxFbs6iVD2P55haoQfWorSNDxsMcNFZ4TY9FThkyTogLeWXcFwFVovEBded5DmkTEFML7kMsJW7j2xYKtc",
  "key30": "4GV5kmVzqdr2S6REfxdLmDHBTZLwidDKZUHA2STLd44FQ5F8DJAJiyK52Moo6LXkRvsFdMTLPGjSMvyoBPLfarbA",
  "key31": "ceuaLT8he8QFARNHqpMPNe5YmgEKuSB8iLG13wDcN1k8uBzheW87xoWjYJBXsSskDhs3aDX89YxN313JGL3xN68",
  "key32": "FSP52xczY3vzkXPT5WZJoB3mGfWiq629GxPpwxE2Lyx2kBKcbXbiaEesgogqnuZJUWS2MeAPJFhSpitRvrS5YLs",
  "key33": "BuwexyeJZQTg6osrR7b6Gm74H13b5AY9NNFpRyo7KFB9RdnKircR17ah5GSHsj1mXzme7xmu6NFJkkkY2giZv5J",
  "key34": "onkbvf77eBkGY11KkP24MxsvutJK9KVFRHmVj55UEtANNpsNQEEFpYuqZHudwQKbX6Hmo47R8xcn61QMM6qgrif",
  "key35": "2zRrvkHfmHAYF1uYQhk9vF4Fi9rjFt9PagEFinS4669aFzvDBrw6ZxkhbeJDgwtC54FUePR2oLu8MvQ4BHvKL5Qx",
  "key36": "3xRr6N9cYRknfyfTirpQJZdxteVQLgqe6EfWQAGnAayW3haSy8nGXKyVjJgC3EYp3rjwAS7qJP638NK7W5xLfX8Z",
  "key37": "5wzdK2PbNsGSq7pvkS3FjbjNKJvbammmnHPFYx8NiNuswHDSDDYMVY9zzvboqrr4bnAg8FD6bHTzhv79cgQAHYU9",
  "key38": "2T2osjZesaqtWupWqUwooryYTfVKG68Yra723fSTNxkKeXCGdtXRs5A47po9Nr2Ly6y5CtfDHTfMUGKuWLHJRX4B",
  "key39": "5vfyqSkeF9LbPnH5gRcQwft8y5cC6ueWsyyWbSCqoaaZhxkh9zpxvk6zoLueNvMpehHyzDG3nPxoNp5tYMJDhNQN",
  "key40": "67UEdcY9haGQfvzWR9Hr5sooj8n3M9JrZgKkGrJCqambwkMUapVyG2PoXSPZXW1bgQbLHYHkp2pBmDQutVHAxVCY",
  "key41": "4ggwL6B3WXuzw921wdbZPZMAz8Z2JeEXsMEtLiybcKKfm9jGkpJASYo1YSSVi562emiFbzCqiFHrncBJ32wf1r4W",
  "key42": "2uhdL52UUTJh7SNY7A8iGPkZS8YD73iiqvKbtHk6Zmn6oZbtThvwCJpA8hYTeRiRVsKwZF3WiLtkziuuqJLwq6gT"
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
