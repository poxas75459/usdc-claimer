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
    "cJCz9rTK5M9kxbiYjg5yervE2RDNU7fyq2hQ1jo9PUoRAAm3M1he9NeSZ5XyKrUHDdexDTR49GK5SjSngKt4TFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4noruPascLbH1zgAs7DhpPJ2wFLRTkWG3UaBVuRY9jXyZzhNuFZb9juopPT3ATU9P3yTdhDVv31gmGDFpAkb3D56",
  "key1": "2iNU5Y7YYJnSsTKfAmFWCx6ddWRqGZRyPpq3yoVqpciAaH1UoAaDWpRczub8qzZxxDjKag9HqQTYQE3BCYxMRDWK",
  "key2": "3MUuhkQyMTk3rPAKCZ1EwxHdNGZodoU8s21T68f9QhH43RETKE3RXnjShKRKYHTfEaqwhPR4ndWf2ajgkE3gBBEg",
  "key3": "dqbJ7QLUo1KB1sHLDciEpVtWudp1Z2jQYTAjsGzBsKrSxoCnfBzcb1BFr93jyVyG4xwoEyKjdtpfLKEQxTdWdEG",
  "key4": "5fQrMPqcpDCJaojwfkQBy78j5ved91XxSRn3WPcKyGQB2AXQbtH9tiRwGsRtXEDee3x3hpN1L5oCXM3wcDzW257A",
  "key5": "2aL9XNxfc13MQUZoq2WhoRzVADeNdS3T8HmDt2KbNAtpHECvPjq5kzem5WhNS1Xe8Fo2UWgJXzkEgHKXJh3n6kPP",
  "key6": "2zT69ornbESR3a5D72BpwBG7R5ZFhACqNFAUpCwovXHhvRYYWCqtxjko61zsPCu4iLgPdiNA8jDjxhfyG5m9Pggk",
  "key7": "4gJPU5hEG1GNMNNPTrzwjngWjMik849H2CVeap1VnS7kFSfY2HywXSads2ZmQsnE3oPhXdRgeYKtjJML31SM6RsU",
  "key8": "2Wx5EUXrkHuQLEukbYH6C39MWuMbh7P4nZ3NdiiZcnvqfZ7H84fV2ydyjE9kmSQ2RHHcDMsWGYiLFow6yzBK6VMD",
  "key9": "2vHXrnUK4osAv7rX5m4JTE6w3ic5AjNWhWUnrBhysKpyMLiDm9Ai8XDG2MsYRxfEcsemTZyWtvSMKYVtfNNmgi6U",
  "key10": "2a9pwvo9ergpB6xy6L4QWoN2cPWK5TAqtu24TcjRHZR4t5bnKr9BuBAi2HJGdJab5kXMhb9tZYXvv1eG51DPWY5m",
  "key11": "4NoyMgXUMDJShr4b5A5AnSh2bA8TAET5xJ2h3x96p4qjMPgbP5jWL4xDS3nFcnnQ1ukXm4jQhQSaHsfFLPgdQx8U",
  "key12": "BAktAyTnwEb419PzcbA3skNvsPPevy7cC6sb3uAVdb9LKzy9Le18Sc5XtqKoXWkCgXgzHT4mKhrL6L4N4LnFTDt",
  "key13": "37ZgrqfvLgFTHpCj4PhkrqthZC4NnHzNjRWnQcKzdVFTZSUB9oERNy6XwA2fUa5pP8CvpBGvsBeUpy56J4fxanAi",
  "key14": "K4TgKBccJn6MyfXVz6o9vbhMSj3iM8zWDwjwrH79kMrcdU6fpe3uz7UWJui7Q61Y97HTmSU54Aex5kFGYnUAj92",
  "key15": "62qV4h66TSVwL7nSNEfop7woxZPYAwQcnJ3ZyzZyfvFbC4PZaRNktST8Uoco2wy3q25TkhqonpTFU7xtYLfQcUkh",
  "key16": "Ff4fr325VMvAnh93EY8iA84K34xxa4HRB2mtY8sUdzFRBjNQtq7xGeKh36d8qb2huWMJKjehWa3tjCmx9kpxxbx",
  "key17": "3NiY8p46Mob1S2qwNyZrFxFCdXeMiKb9AyJRhNVLa9pYohX1K5n26iDJDEdcJuY1eJrJdsWWUtSCvpXEuN7n1x5A",
  "key18": "4zocHDDCkbi9zdNQEyrCqNCiNtunoR2m1NbcWsXf8r8JP5PbtiPPzsYSR8DePq9pdNPHmtmfyzKMFx6DBe74PCGM",
  "key19": "2CSMPBvxh1Hewd2NNbfPrvwbFhqq2HuaUzb4weGMpaBcKX9tNX6GLh67ZmRqW7qJ7caVD5igzoo8qy1emr4Y85eA",
  "key20": "2KSUrLjqBW4VFweub1PbvEu9UB59F62DZ1pFq3UYUQ2GCpztme1hDhqVNYnbinBKAtbfWKvBdEFFh5VB8LPTUWmE",
  "key21": "3cTUiGdAN5GiocFpAgaTkXfHEwv8ef4wT8QRaHY5eQPMoUM8eqmdAKgoBWjP2ixqDn8dtGZP9SGiCZbvPwtaoMLA",
  "key22": "3YiyzW5tijz13v7WU1NZFJBiEh1vJoHt2wzyMsQSUQgTHVsAihNpbdefCyawRz1YhyNGryyQetUoN6XPzKrdob9V",
  "key23": "3i8GP3bRA7mt94jMwuZRVKspB9zWEG8JFv7StTF5zA4rzoP19bvXWAxbxUb54kLqZAq2QC86MEyVvQGaZJVPFjfq",
  "key24": "2xyKvERDtZdoi9RB87JfHWaf8xwj1CVQJgmCuSA39nZaD67qdeazaa8CtLKnNGqzw9tHHpR6YDhQS946C8U7VMKF",
  "key25": "7jX8VsVap86EnfgqW7Ce6UDaY7iT16scYx2PNteQGULMK3vgsiGuUVGE4tEGkxcLijYQdT7Xd14zJeNUrhrHUC4",
  "key26": "3Et7B6u24s7WPhgfkZQWidPUnVnk32gvzTmcnmTpGv4cCaaunBHx6Ufwf5zWLT7WumKfoGxj916nkmpomPpAzuep",
  "key27": "5cPuj9nMRiycqMRJfgoQ5oQp9jdV9YW7rmgZJEL3vxX4Fe9N6w4i8S7HtKnFjznN5y51XhxWMDadorxfvdyr1Evh",
  "key28": "3Eh9ijUmcgNn5P4s1jonFSUiWn4SyKBfnsNL21R8UaZAGnMjy2gFdZuo728N5ZpQCG3CeY5UnijJiJDLakDNXa2A",
  "key29": "NYLFEfaBmCbhEvj2k7ufpggbmmGFrZmWkdJQTYozT4r48DTXCpPyRf7DTt7ZT9BYHGfUA9EQUW8YGDdQ6qFA6nT",
  "key30": "2FY3wQ9gGMt4oRMFSmx1eXBKnuLGDjdKoqaiUrfuZCegKdEkpthrT8sjpLMRBVdhKBJYEvAdzwM3dEd8MKSMk617",
  "key31": "Ao5P59aV8vbViFHoq57qYLTqGAeH9o4MDT5GxrjAaSL6Hjpk3EQxXRXzFkws9HhDrHxC7L6JNXiiep8ZNzxhVat",
  "key32": "5bhk96LYwfQMtG1mBT1L4WVTj4gW5h79hkXiX5CPB9SabxYkPCzjJfxe9hNzsBQU39bSzReL3va1BRmUVLYq5TE5",
  "key33": "36etL8rGpPmbgd67GNVdo52G9SYSAXu9AGq4wDc29WrEqzGbgWyQoPrboMR27LnstgPsn17BGY1niUEjyizW2b8Q",
  "key34": "2KgEhFQ8Bt5WvwPjVEH6pGZA2oELAnPjE9qJnoSfEt1abZS1PJZsQv6rV6DSif2h54YFPnsZoBRR1cSbJAdTVxms",
  "key35": "44KpukqQpQVGA4n83DsxU7AUcNpeacLuE9an7nqGSGqe2fk8xciNpNh6bBwiLU3rtzjsKrX3pgGQiMYF2s5wDnLW",
  "key36": "438oCFsygBm8CuaHcozZ37tmSq3tBffDxe9gTvDAtbrJvkNg7JAUantuLBZfSSYrezd5TdmS92qb5dKs2Dgutf6Y",
  "key37": "43meea3812ETJETWB9nZr1mHJaEjPrv7PPm2BTJnSLSkBo24xoQCynf6aGVH6XGEP2oYCSscQrx88KCoK49JaCCf",
  "key38": "2UczXZxVZTsTPK3ZRvUkcmjDvYWDEVE1syGpYobAhhBnVH4G7JHs8EFARNhMWYRzWBtWWdgS6JFdZbcuh53F95QT",
  "key39": "4nxAY3biSp1V5U6Zp3r7gMLY2ixZ27u8kCX5DoD3PNRCHTuLL22htbjqaourEZamFqMf5vhLBQvA4woMDvEmWzwR",
  "key40": "4dzKJkbFKK69GJjPFiGvAwPCbNiwGz6iTeutyDWubLNR3JdG64BowQ3KTUvgzsPch9s1JKmnJiKwaVukqZB1WW8K",
  "key41": "4WsgfDu7VhPQ5zDwQPJMouyPkrqA1Gb7ZoorTKYyxPu7LBPoNB6MJ93rhv6yUGUNzYiPu19A3v1HaGzCCP29abYd",
  "key42": "3aSXYdtUonD69oCrfXGePKuJMG66gcgbwSd9BoJpRnceVkwBmBP16JowgSgfe3th38iipJYbR41311X76tVAPsyR",
  "key43": "3NGLhj9hxTiYAV9wgDCZQK5ft5DBi14KpnhE1UpqaE4tjgNTfKL2Z1pZGwac4qu2afs1XnS5atzzpAvKteT2GmV1",
  "key44": "2VuXmnGdr1Aqzn4cBvk7DbW8zcxMnAvVx2dmQoh8UmoQadLKgRVvU3eWyCfDztWQdSzEZutQUWzoRhiyq9fvvvvk",
  "key45": "2pTNjEMAhzJY9uvJ8dr2Dqhj4XZdXoxiP4ZbEPbn6LRoHWSJUnNoJrPGyMs8piXRWamR4pNTWzfQ1iSbD4BvqN9J",
  "key46": "xKGsr2Psbx5ADDc7F6gJQF3NpcM15Gmn413t947D2CaYowykP9jZebkbsUx2KPskUtVeSXqVAzNvC4p6tRewp8v"
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
