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
    "X1Qm531MkSDkdVenCpYV53U2eZ4E1Gi4wbMdYHepuz21QmYvDnPEmHZcUXknHvtkfH8J1gwy6wE71mTXKFHN86U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFBjKj7AVokr2DefCsGjK7btSkjp4DKV4zfJUgTjh63YBSAsnZiZtR1Jg8g8DRbpDA8uHm8ciZaMRFWZ18fBK6m",
  "key1": "3aeWF873ZS8TxW2SRNS6QhaSkDqD4YUcGCkJq9ZauKmZ7uNeQraUatCyAWxVxF3TJD3yEmUcMxXWdKYQcUtZFJzQ",
  "key2": "4NcfpETwpakszYAYPzCuiAxA4fBmrc4tdEvCFU2GrXNBGahFN3UZy7dMvuWMixUXHLPTGXrmT55u7QNMMe4XthTw",
  "key3": "5ZcwzXZPZM1HwYMZbSMuw4XS75YHvHjQL5M3WExDcfAy72EJPwfjLVYJwMHdZLiuRdbwqsyMQhuvgJ8Tj3kgcHtk",
  "key4": "4oSTK3c2h213KzbQNNg1Jaa9NiQhU7sEyviCQ8ygAxSwEYBRgtEJ6w7mniX6KiZqsTSobixyFjERegUiQUmd8b9p",
  "key5": "3oYTRV6RYTTdBrfng1yFB4jGEG5S92M1LXeBimGYmQarhrEcrfU54zs8DkMA1LMPiBTRtZ7iwja1NNJL8hGMp5k5",
  "key6": "24QQgZ4V9tjVSoJ9M9UUcBL3jmvMo515RfSQDQKaYk9a9yM89cJ3HkfSNtPu6rah81dtNvEsNp4KHFmGU565odYX",
  "key7": "N5AR2RRVCxngaT5Nzto4wV7D9SSWzZhr88ysmsbvNs4ktE3JeeYGLJ9oSd81r13qoSkh1j6NTtuazV5NxPf9vBo",
  "key8": "5TGT6mZDEDAYVwa4cyoqnMPe8xmG3SJjXE2rhc56WnME9feoERgiUX2srjguZXsobA7hMRxFTWHDgnrbwJ2T77xH",
  "key9": "3bEFmYP3MVJJH59beCNQEvA5hak7KousHHJtdWajYhVSFaPm5RxDTsJVWveyLiq2wgYgFEdLhCCsAVaBtkn48pP5",
  "key10": "2144WiyG2L5Jv9xSHnWV868wfvhan3yxJ4YMVkiJ6D9nr1dcFYk9kVBrSHgvAA9JkMKtNfbYzqTHsVgVUwHxRgjy",
  "key11": "2wh9fGELjJp7pt9V46kpeWYBKgLdiacewQUHoDvU7ms2nUBmfNKWKJSo1FxkQUCvQURhJcfXr1v1ZnedF4yBLheA",
  "key12": "2fP7qWxwBgHpqouXunNgCk1Av4qKUSanfg2kEBQW75Df4i3oEsQCjDeE5uRhA8p3o3rVfKLgbtANDyBzDh5LPXdc",
  "key13": "3Qe675Lyt9DQBZpTVVQscMRzBJk2sv3xJ443ihXCUpPpkysXbSgivB8nMeTUHBZgKtihhqpxTUUkaz2fgTUiVG9T",
  "key14": "4Hkw3L32jj4DCHFnBNSe67mVvmqepXKdmRRECYLqLp6pSoQ4DbcxNRpnLKq66va8VT312XLuwiuv8ndpoin32t8T",
  "key15": "NgqeCCz1RyoMp2CYdmwuJY6JLXbNiAHQ7V4gL2aMWYePi8W2ft5wNPVnyJznJSgomcmbpuyo9q7qvZGshEYBXLw",
  "key16": "5PGsQSujSVmaxV4bnyaDHe9AmH8pZX1X9ry6zMpyAp94jRDqDZJhRKA7WEbyBtWDfX2ATosNvpGwaMTH6HCJZb9a",
  "key17": "34PMqg2kqjBs2tXqeMdwMS5UShV7QhskxqteAeqYdvBYR8XhnwfZBDm52NDs18exWkPKxwox5yLc7Y3oaHihb9K5",
  "key18": "eAizXYfgnyzJQjh2LqY3TXe8BsZMAJinnw4JUy564ddG1QjwgCL7UhRjWcBQ6W2V2BJ8ew8fEGZ7Zzi4CAr7r9Z",
  "key19": "5DcmN31A2xPQZVZuB66JuPkeRmCPAsj3BbWtYAcYws6Pm7m3MatfNo7UEEnLdonUtVKt8uS4zbw6dkXnj9Jp24LV",
  "key20": "E2Kh6urpfdhTLHSMdZ74kv8gHzFEFNcaYtb2i3NhPNaJMqLd592rg59nHQJ9tvH3UVTXCLhPqRYQjnkp6v3Lsm1",
  "key21": "4geLMdQkMoDMyT1ZnDSvuH26A5THZdanoF3Z7EpY2v136JLNw8TgzVC1gEmhK1CyQr6gTG3RRPqLE6Beta8bRyAz",
  "key22": "tNn7H9gt6CfG4z1WNTbCPeosPdWjAwwQZ7zL9GwNC36rkYvjdaBwkEszkz9aPiTBtjVBSk7JFRbRs2dVx9d7uu5",
  "key23": "ZZ3MD7ch5ZVnAXsxPH9eEJyabF43qAtUbhzBWWQa6SNcVDWiTCHoyQuwyCYru1yAKANyYfvDeTcS8QzVCe1stYu",
  "key24": "3CQxPUGjNtr1ZkJ93j4uZfvJu1Gz3hvUnqyAZwSyC2XxqDSjzVULWYtP6rmhvJPSxLkgz7k86Xj9BiKiN3wKKy3H",
  "key25": "2JAn4FWUXoAeSiARW1g7jPR4utEQsxdCZS4dNy2ZBSpvBAsAUUuA5u34dVdsJu6bZBWhjbrTRAf9seH1XrPMxXvB",
  "key26": "5i232ypWzFYSMCPq46boQs9C9tyDTDm1cG5cJ3zPWE6eenJFDia1APgaKwqBK2S8uamRdXk2kRv2huvkSTXkzjX4",
  "key27": "3d8B1UVJMuhp7ZuxStigC33kx1a9vtwjjfHRzkLhvJfa7BETZX5iDcB8qsJJHUgZD4h1FnqFXJeueZB32hdaaTZ1",
  "key28": "5iKiGbZW6v3sixCv3RYaKUDyPQJVijaA72vcSQ5eJJcPGwb8TwTaqbuFai4SwzTnGsMmrmCehcFnnGQjHJJoJu3z",
  "key29": "2SxJKxu8964bZeGD1oymHFYG51xVTSFiiA7cESjXL2Vyj2rirn56yQHcE7WDAHTsZ8bEoMgKFZad61dJTSaXaZvp",
  "key30": "276rPGDWhDw5MDP7pQJnhg7opqpn74uDSHKynCtteVGiUhGfttEg6LskdDDB3wkJmThiEFAsTSwQ8TC1KMzGz9e9",
  "key31": "2nA7QPL5Mqa3HMJ7zNeMLmHTe3Rb8orhn8WKi3iR1MfnG6NWVQf6D7uwXXPj1x9e1cJRvSpyRavUSaEmYWPhH2vp",
  "key32": "66DwofciyCkLuTCYUVi6LSTFMRHp6bcVABZnqHG8DNpRUR3Y9x2QFB2G8suHmqt33k9skEsYZ8e5PbE5Eqcr2XRQ",
  "key33": "4FzjBF1rpeiLELTExzMK76q38DVhDWe4YFgK9nK5C7AAtJEc8Y1uQBA3gLWPZZjdxBZo2e3akQaQj43oyRMH4PQ2",
  "key34": "2QQ6cuJtuWf77MJnaPde4EyQY26Y92Eo3WVe4ovitNUcW5agDhh422YhqRHTvDqq4G7Q99dYTmfVpS6t4FGa4Zzu",
  "key35": "3U6HzQgfJc6yDd4TqmaG7qELzGm4JEM4DH8yHheKs5gq8VaBKNjCg7ZqviZJrjxDnXuKxRdBHSqFFqUxknSS3LL",
  "key36": "37PR3r7Wv6MPF81VQRkrh5zMR9HDiF5HGhgJPjqHiCm5KifzYZ1cd9eptwXcrdvntKzUeV2tEgKK6PgFXEw6cwKW",
  "key37": "3wKyKUNwamiCLrmcZvYFwcfq1zRtAVeTvfvQ8Ktrk39x5xH4wf4pABEN6qdydAhY1D4FLPgGwGfMmvDJYYEi6nHc",
  "key38": "4JkZWhhTcSHYiWwZ4pSfSDa4oWPoVs1kKeuLvLFxDK2TkrHiyAmdj1yyFUEDwzkX3Nz1Mjtpv4cLCXt9cu4iEb3F",
  "key39": "3MKJkNDWx4dGiWsvBTWdDgQCwvW6C92GJBJdJqdCavZ5uzdLDeTvCu6YfcCwzU8ss1gpUvax4csxu52wZfrU9Kaf",
  "key40": "yYjtvsT7frdv7WkgwvhgWxtCdGWR6HVyBSuH9rLVnFBT5HgVKAm3dwzq5neEHfLcN4xoUk8DJDv75XiQ8ygvYnL",
  "key41": "2mxYWrg4ba8DeBm68zECTvtS8rg2gLwwHkhiPhzVtLpEDMs7pdGv4HNQWd1P62N24g3aQtes1ZEHZNFxjP8Waj1F",
  "key42": "3t5TUPDezHet59dUdX4MmSwgj8HhtV48kFbJoKGNMRaC7ZtG8kobuuAJXUYZ5vUCgTGBiTDyhZ2pCKwTekTVt9nE",
  "key43": "ygK5AwpDCS8LfCpqAv6dHtcVs6YFKhkY74vvCKGvCA7Hb5A9maBmLKrSPoZEbPvGVt1xxC2MaKm1KuPUtRVyfwK"
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
