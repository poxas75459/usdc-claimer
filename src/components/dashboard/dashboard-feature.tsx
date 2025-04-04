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
    "2bbAx6hY6Sma3GayKnA8U6PhimHrPQDsNafrvCHcHCeAE658jb97N9W5UekifCGmLA6puwuG5Aqys7AkrFhz1wCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i6gUncnqZgS5LSvrJRtffprtsreNDD8VoUcxbTVbq1aVaoyUznqBii8icrNAZ1uNhYZnK5yjLGy3Qf6hDM8gVZB",
  "key1": "MWmYjgXdjMAvfWMcPFRE7MTWqoCh3Bgj3rP8aZ5CR8eAvwEuwc8bnYfp6QKzVw75cLF4C8wtdduh81RJKmdMsnY",
  "key2": "5VP3nFsE1GusroCJgzHCH278hgvJ8izZ95j4cVAGhk3rhZf9NtDtwVpYFUYAX86qyrDGk5Tvpf28QdevgtzGmVJB",
  "key3": "3N71Hxo1oynAREawb3cxK5i4DWeDktADwVmAa8FhSYDdbz3C367eWjmZbHYfUJNj3EwocnSHtJxFEFhjktKrapjT",
  "key4": "3NjwpuXZ4uypypLdxmQWKFvVPgpbgnvTZQfNyuvD1tSidEqipLJJZYSQwLUyThAgYjYmsXakwwbCdoSCC3VFWbYF",
  "key5": "5LkDtHspqTYSoKR2jcXzsrEC5FxhB15RpFAag1UztHzqm5T5TzMM7uZyHE258mjYC11pd1qugPCgux6EKjihQh9C",
  "key6": "3aKie4USbjrFhUoGP3zNnsis9uvcKS7yGCUUdpv3Xztx2YWpmWBv5zxAGdh5h9eSxJs12fpoxoCcyRcv8tF1FxJp",
  "key7": "3uNx9KTKwoPUaTZyua3oq3efFTSx9LeRARLZcms3vxHZmCyR3sBfeJ6n8WYnDTGSYt7oxgVnu1PLhCjyKf7dyuGq",
  "key8": "CkA4HDAZGSVVTeMk21CadMQr8tbjg3KBWqHFfUN4P7V9u3RtxanZLE8HUtdZoUjCdBGi5tXuJpopoWKsGrtjr2V",
  "key9": "3cH6nwHxGWJimxqpM4inPCSDBzyhqL55VTyEQ1DtQiH7kZMbGgMJ2k85kZSK6EjvU4u8fKbyhysxJGz4v5vXhdgt",
  "key10": "64r7V1wGZhNBMTZYYf2Y9Q9MXLbmLhHSdxMtDSa4rReicgkSiQuw4cSPaGAs1spkYBoZ9SjrcuWZwu9EhuQAGQgx",
  "key11": "4gZc6eDNeH7FL1MnhxeDCU8benTvnH45D7sny1uRUM69gSfxcTGS3NDGJZPL1WjsT5vUqb7pAdK2nLosjAxmQaxp",
  "key12": "3htTe6rZsinkNjBxmXZBc9LUD2EdZ5MoA68pRN6pAcX3Wi9X6RxUxdJ1RUDDMCCuj3PDpcfB93Cgj57wJ5KboYEH",
  "key13": "5Th8RYFkfwZqpif5vJ8hsndcz6zeKcTZEm4aN4isXpehcLsg1X9HwjZ1LmKbnDiLnpooQoueUbZGXyC9ajvqBzS9",
  "key14": "HaACctHtgfo5ejW8RBfFc6KX8wkK5f7weMig9sDbkQ39dmxoSF9UqVZySiwVvuizWGG7boCEo5U7iyB6tkdt7pa",
  "key15": "4iWJSxJWr68UjwvjLvD9sE1iAj5GEFccx8W2cwHnB1AFYVgkw9MS32WjCn9bDWrp1351n3QWfo96jGsXFnWKEyUh",
  "key16": "3pBmQ9ivbh82nhKrR45SEWRcg8FsJDSAuQBCCgt3EHXHXeqPfRWkwJPjc2taW9RQ7LwEvV4hHM2WxFcMg4daKwgu",
  "key17": "4bawXTQsE1fYxijoWxaCUgcjAyQqDMfXBPc9pCfRSX4ocMJwit8VuoprvF7H7nFdoe1THjbyWWBcMh8nkXz6TyDu",
  "key18": "2TVzcXbPxeDjtUgWxcU9bWC9FH5NBphsG9asconXaYdufpu8TaASmVnRH9hjUBATpAho6ZU7yYEe25RvWdHQUkPs",
  "key19": "3G4gbLQhAgUs9y5DrgYFTCwCPUrP4G1UE1cHQQwHP47aqLQZZrEofEd9LxoFrKJ426dL3UUYWA8JnHH6LFkZ9Uo4",
  "key20": "5vDJmhuE31pFpdjohM3jz6iMWdz7bZQXqprQbytssabWyQ1bMEWCA46DnLweLuRNEkpfxPchpB3QMom93n1yC11e",
  "key21": "5rMHrmy1yqYN3J5gSCeCU3ZbMeqiJLbMhR2geTrodiaUzQyX2K8FmxDjF6USSegYUQ6i4P9dcgycNDMTKRoWPBWe",
  "key22": "56EwuHTDjmgtM78SDAkncFqhEc8qvtFQxr1df9Tp8qm9miRVZ42zn9xetT6KyxixfscJn32UyrCAt3FmLE9kvn8x",
  "key23": "3iG8wvw98JWszEr1VTpCqS8BGLHkJJMNDLNkDk9FYEHKjijXYgRWqScGYJKwuqmftBj9RmsSYJKNcVPJdf2b1trR",
  "key24": "3hXUJuKJBWuwFK6N2t6zsPRfz2AV71BzWztaJtHEsNbuWFgFMLwdCxWsuDfLU3dqt6HzdiuBG5E64ewvGqN2YbGz",
  "key25": "5G3kwUDqGZaFDpD1ZznzPbNxFHi3SRL8w8sC9wQVh93fPzwjm6UTFz3sdEWmkEbdyNfxYqjHcPQn6Xh1SGPNpGwc",
  "key26": "2eUEbbkHGqzHe2jaQNZHuCaZWeCi8zkDuFVZeniF299MJw3qbcZZawpWnz1PPGMc2aYUev6XUodMFAD7Afn2TkZu",
  "key27": "5c4zs4qb29rb9UTnvRx6sC5cbUCL9ZqGGTzE4brmuMzqV6JKrDw5XjsdyqpAQtdg7KkR3T5dkPHVVaYj3LpLBvVv",
  "key28": "54ka1XG287HJPFyAeiBadRUfsjbgxHzNzGCygfK8mSYGeuSbupLBNUkMasf3QvNhUx4UL4dyPsuJQtAawvZiHa6Y",
  "key29": "5Mu9cSBnRnsC57enn5G6saFDUPpDqiLBgowGNXoTbkkAnjpeKkhiormazukDqaZeP9mvJiyz24TT1BjCfogtxHpd",
  "key30": "2RSEA2cv4G25YBRPrFezkgfef11ZW5nW2yqbY6isStru129kvmM3xA1gm6fa1oRcpBaTz8mVixqZcyN2nNty3PEs",
  "key31": "46zzFk74m6r3YoJb3GLTWJYEXNNx6yv2S3SfxYhKGuPnwi1a5Y9uNwKsJJjTUNT6DjQFPPFdqsZAtB6CqAFRJUTM",
  "key32": "5WktQo9LWhiMxV2JGgF5J1vU4SDHmjnpa14dcScR8jBzZN3wDkgxBgSatosGK5iiGnaJnBzEYvhvVv7fuFfQcEFY",
  "key33": "3nRSEeLrFgPXdCvaaiDjTsyQg9nPESyHVEsQFkzn4y77UEBeh16v7VmCw55qFvwwTBvVC16UsqV53sG1Y4gB435s",
  "key34": "442yKVhoqLnsmrKKb2b71FuTtRdmxH6byQYjUCWLB7ymub9v95mz3F8pLw28xEo8yXqdPCuYp4aFMptSXoBCyTKQ",
  "key35": "2v8DP32drjfdHWujH7djrtAmwLH9kXuJQrSzKw4BCkxJQC5zd7K4tS3ZjuoQGUUBANVA2fRgRzAyYGYicmQQacen",
  "key36": "3r6nNJWfPpBuAvB9xgi9skn7yEaN3r6Hp5MjBQNfY5Ef2hH7p17oo1xfDZqiLrfBis27kvxrUj6tJGE9Ey68db8J",
  "key37": "Qx2YR9VD7XMmT37aFu4WNL4AbB2iY1xvWd5bMxHmzr8gSMP9FEcp6NqXK3gcNMpVwCawZwQRnJpkXq3KieogTBG",
  "key38": "621t2kCBKMc9AtkwnsazTeyh2d3b8BdCt4fSVGLzZTnw6nG1LHUSDRaKshnFbvn5tNSxjCThHQrsC519H8adjG5Z",
  "key39": "3Znhh5eDoLWRAyw98vWHuv4Y9aAZqXcsfcuCeE2eC2xdg9FtuBjvhwGcjGN9GJZ7bFaPRgpQsSwdQNLZ3b1hLkEH",
  "key40": "388tN1Rt9sxGk1zZfJgtWkgdbYqwEGnXJMBF3yfJrFgJzhBTcFG8YPckTsA4r2LmnaMGke9eQW4Q9kyxpSj1PXtY"
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
