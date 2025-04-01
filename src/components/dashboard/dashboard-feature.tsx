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
    "27yqgzEHmczPx4UWwXqrjkcxwStjYkZfvD1goY4qNmGSDRPfQHLgfWmDfM1aALkpZfDaiEXgUmPDeDkEbeV2NsCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQadfWV6YXw6FQK5A8yiU6vtaex4bfy4K6gBYcPFV7E8Y2TaBAP2XFDZ5d4vAkvF4DzFeifGG7PHByjTPDBjkm3",
  "key1": "4S7zWxdmCnHpMoA6TL1iX4BFdbTmLKaMcKWyXNmBcSWUgL8cCCR5VvyCSschR4ifixKquFzV7hLypveVUUfADXb7",
  "key2": "5cmx1KnvmJxBQTtV7jc6o6spiUuCM22cCZdSLmDqzSbTDVUhxKZPFy9LVNyeuo7fx7uAtUwJfrLfPhTxh47jP5a7",
  "key3": "5AbaBLWT1JSpndSoqbWQzqbTSmrN9EjgcbKiV3tzj76dnZ9doqAZXfs9UsB2brzyoEUUTpTPbFQ4ebawARg5jm4r",
  "key4": "2QvinLE6GZw6fnu72XJ3V2iUWiBqKm86brSHdqsYtbnv8dDCxdoTMNBEMhad77nmNtUTZdcY9G1jALkZu2G1B7p2",
  "key5": "2aM5NAFQCT21RWCVYdMcfpBbGmWQUhBzkrAdFeE3TXPz6WAY62MJQY5rrAmceKZVL5Ubhmq4HBPmC7P9rjAgcvp7",
  "key6": "4SBVwYe8CUY6RRvbavdxDP3NWDWQbt2oAaQ9zEd8MV3YPQgHjqZM9Qf1MkVhYzE2BbF5PdnuPgUzpdH6DTweKdmv",
  "key7": "5WMsiz1PRfakWY6LuxrsuZ9tyYyA78PQZw4j9xNyZEFhmLcKerTMyJBqtvbUS5gWukxe4QHoXtRLk67Eg7y6LSZq",
  "key8": "5hMARw1u6YfNDe7W3FcbU27wtpAJjKFBamuG87ztvYcAiu2ihhXJ4n1qTzf36fVjMMke68L9Z1D8sL26hsW7xsAM",
  "key9": "2NKDd19ZirXc6hmGbuPeuVKNTsP6Nb8kZs9X212cHuytnwWru2UbZJ1SVmgh4GVroCKbceJXtB7puUGdBpiHoBD5",
  "key10": "5ewTqEaEnZ28vz9JKtPuVTuuTmQfGCqar2yBZL9UwPjGPJ5YMVoAY4wDGazE2XmtkKawYpJatfTXyB3MAyvRwizm",
  "key11": "434qot9wgMhntRiZBsw36sB3DvYEFXba7ouQp42TKEB7ZXp8AxUZ486UQZp136PBX6qpDRLsBdrVggxbdew2f1Rv",
  "key12": "43TVgjRybj7ioUAgRjKuZKBQjsjmcS3nR5mtqoLN9n19YwyYMXvg1636xRAyfnNC9wzKRhhSjoBqFe8L5UW4nX2W",
  "key13": "fjwRnekkBSGJKEHmm7iDgyA1g3UjJoWZLHNEmYcEXs5cmxWEpXMYMPGftYnzcMoynwb9CfgepkLxgiMqEitfytL",
  "key14": "22mJX7vfgCM1kFTbbYeRg9nopNAQREoMNSc86nRt65zVikRyJhrH8c1T8fpVgRj4JkdwbLAFbLLcdDH2zeUfe2PN",
  "key15": "1Wn7EmHJYcvAaLPn9g62ipgfsHp4A6spuWMe3hENEZSY8qA1uEM7QBKHnBVCn2vPnXWze7sfNA2Z6dV4qFUpktW",
  "key16": "43TeG6sLveR1Lfg72J1YDq9Wi49u2nP7f7CQkdcQamhQAcjV4oCygaZA5eJeEdz8TVdiSQDoKe5hU6J8YAiHf7UB",
  "key17": "2z6n94UnMC4uUd2LqkTFnsD8FNZyFTUisBytsMN7hBovaYVQWwptsxxDRv586s1rMYdRgHJZyyRQZmkNdkGYDs1M",
  "key18": "SK7qzmPZ2ostcr4VHSkh2mox3Fi88RETpkqCZpdxewLYp3bUgLvQLTwEHarNEUjR1ALLoYXvP7Zk7DrZWNTdnDA",
  "key19": "5QW6aduEzWTh5dHet7Gyv32REhpDvbi8Mi61gCwSfYHPTjXoDmCFsUxpP8keEQRQNGuodFwMNXE1u8XNV3n8zt7U",
  "key20": "2uT8WuEpmq6AU75KfoQZKu41qY648DZTwtAWVJkRAtzQG5QSo2s1kq7exNzWgTx2r7CJXr9XFYZtxncqvCHVpnPo",
  "key21": "4bVqm8n9HSUphBURyei8AS2yBgSZk3EuKvgguqPnjYMZDuH97nHzdTCW4gki4UQsyXpokXwT3wDyMjNExQr27psC",
  "key22": "51NZ2JwYQBwxcvPRYauBWjbcD1M3ihyKvPNSU3UfuQqQ7djSocVDXSzM2WEfgiH7pPqZKZRn142JjqGmwnYyu4Fy",
  "key23": "4a1UEc7jNwJc22d1hsjTvc1bt1Hofy7ZX9m8tE9UxhSM4azUHE9JbGzCfzeWTTkcNy1bvq6qbKrWQ6DZiSEKqCrr",
  "key24": "DLsnKumqnep62LraUrfW9hPUcqb5GXHfuV2yvJPFkptFKn3Qpeu4roeD2xvRjLFRk7WGXdX8RxgbYqKWRLKYdjE",
  "key25": "2YCXAJHky7Nw4vkQgJ82ZEcsW5zXD2EbAKjHNNAnK3XjfYhmUQitDan7DxamUhB5GimdkynUtrTJd5g59cSZiX3y",
  "key26": "5W78LDrawtkwPmtht7fpd8zZsRWkwAMoechGosWPqJDNnVMrh4nvwRdDBj94qEW9smtg7jHP7wMi6fXN3RaK1Zro",
  "key27": "2T9GJ8JCRhenwJf6fD93inQTtvqdBP1h5LEULZeSxz2AqTcPU5zb8tQn9CN5mLEKigeGj28D8imWaCzCqCpYnJJw",
  "key28": "2VB7mj1uVyzjqp5nuBshEK9mBKGhrA39MoRAPE2mghf5uBZUey1S1CEZvcSW8BzzcFazjAi35L1MvZA3v6Ki6sdb",
  "key29": "4GK3E3XW4AnGcRHYcwYnBpxjkqBkKH6FMfW3dtG7R29HJwHCrjwCmGs8qhDG9XhiCzfKWtC12SnoJ4o5aZLumamZ",
  "key30": "4eGHXGU2TZB52tbShQrDfBz2NGciP6EqmvrchxmDSDr8s9RQdkkNjY1P9ALPJxR3BQF8VFXCnSTQVAGmxk7MQ3N",
  "key31": "2iNyUfjfiEfoux3GSXkA1wAt8fuA9jnVX9Fm7KKyPf7CW4Ah8T66WLLH9bK5mfPTgRNkUx6Z2oCrcBmjknPiEy3b",
  "key32": "25SoJPpA1ahY7hmiTKcYJExcdk9MNCpmno8kcWwd7SPBsAHkaZiWcxzQuehuD49gsCr3A4fgUtyxAutCy3cf2DcD",
  "key33": "3FasPAFGf6AdDgiuoZyQcFBzdfN4BYWFDSHkWZfRFLmLxBncA2XvC7w43rA8j5QMfuuZHBY7Tm9SuWnSpaiZr6gq",
  "key34": "h7LpyMrrbteXb6SZzoRSEPnjmTSzVdqUVR1UPe8KkPtc7y4RQRpCpXhWouRUuvLKgCLAopKtDEfKkRvC3gs8Xvb",
  "key35": "2tFMhEnT18SrkUonZUSuevutkuGMFStox5CGB46VciefYBEZCqccEZTRBfQaxLnGzXWBCmBQUPL7WvsRC2kcnHxN",
  "key36": "67e7DhmqGMB1yYfmXyye3bGWf5FgBiE4A3uiH7F7yXAHntj3GfP65z4khFhoa9NVYDqN5rAi1BTJ9mwfw1oMsu9n",
  "key37": "yJaK3kZQtx9jVUY9rVmSU1tCMdZjFiE7bHMr521SqNEsLs5YBVZUXkFAmgo7sdaAohvQhKAnH9EAMuqdVmHbz97",
  "key38": "5HHyuNd4fjWgejrGgNfbiSepkvfYFcsy5SrJKLLjdseK7ibowdtTbyqEa5yWyfJqxYg3wiYvoRmqGBtwcoMV692h",
  "key39": "21EAkpy8P93gdNBo3bWf7nv5DMrK7kJBDMPWqMFw8AEj2Dn3s8Xu5qNVzA5VDZSDWhgJ2jggfDhoXhPhSDSNKKaz",
  "key40": "5DzNCGei5YcNVGiw1DYeWAa3b8U5t7DsgTCGUMc8ANPAPNt8LGiBT1NBoDyjqU3Mo7WZ9DsMAnVV3UP3XqDRMoLT"
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
