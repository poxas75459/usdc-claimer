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
    "2XkA8tFz2EpsqoYW8s8s32oWEATVt8PGSqRaagi3xedT5p8RXh3fo1MgE1XkuLCoH1eEYXdmvZS2bkGXGJSWcWNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KdGsJruzB8R9AvdXM7DD8pAFsFJ22oxxKq2Ja6BUUDcTxky7FPh81mwDBgc59C4vspU9WhUDG9PNeNRVEhFT8S1",
  "key1": "5qnRZfG7SytuDqHEFqJkEC54Kd23W9DepYrLkGa2nvX4ivtgJQuX7YNFSmAG2vp8KqFaEy9n5wpN5HbWRsRre32k",
  "key2": "39kc4ALWscVxENDzY1xbdaFSHUShvYnTv8wSdpBcHBQMakXgeRWauTzSpvVpQyJELdHQZ145eJYcxe9UpQEYvdDe",
  "key3": "31LqqmFV8iJN3AX1bYLG4SXvWVeSszQjgGSzsiFzGLd1kwMDUDmEafKBjg14KkubfnEKGTCxmMYtZeCeQdQ3A31f",
  "key4": "2AkcMSGTqS2vprGrbaMUfpskn7ufoHBuEibE3dwx3JXKf2qSDzt5FXQoUePnfKvcuxfDjTrbt2CAnQ5nyhjPHCGr",
  "key5": "3Daw9U1K6ZWbPYeXtFCoJFwKfmWCJ5piEXxBLUzBtm9KfykXJ3h5oYdrYjrYLpLaux2ivPowsSCMW7MomvUjRxgy",
  "key6": "3a35pHZoiQfPVoykXojtGst8QnGCbgSJ5xoHtQkPc2iuaQ5JdW99aDe1UuBG3Pp3MqvSq62Xu1FGnX5V1fVhQToq",
  "key7": "5YipEVtxnFVB2epdtTkLMah6SJgUfp4prbRvS3bT8KjzcTk7Fa6zYYDs5icjDN2cFhmGKPDFbAwXW5vGUimbPBJM",
  "key8": "3PzQF1KDPoNrwzMaiGCtsVKDMmkZV4Ns5cY47X34DyyjwLoSm7RWW5ZZsiQKwTurK93RDyv3grfr2Pes5gZxCNwX",
  "key9": "4oNoZnTThoqrbjFa2rSskHAyKunfWJ12HhXMnm6DBLjmrWLD9GNfJ1zhhxPrxZ34rQFfgTqrijqU89r55XtCKbZ5",
  "key10": "5U1EPjRqiS5a1H72De1BvrfoPsNMTHR4SJPmXzNQEsCpTUgB9xYb7Z5G59JQRiw7SHABJdoC4igN828H2d26Hyi1",
  "key11": "4ktCHznBjXupEJf9UG9oe3yjByWnMYH2Mqpr2kksgBtqqCeTZTWP3aT85Waoyqi3CCUVwkymR2uDHBvrwqcvbLmv",
  "key12": "34GZEaFKooZ2C5f9yVMgNavoEhg4PfpAsE5pciWz9KYPQtmYoU1bhZsEf6y9i73EpTFBLup3VE3Jk35XX5jv5QUD",
  "key13": "Z4yKWUkMvNpRU7DhKtqVNeFPUYYBihNYtq8yTZYL9rFL84PJNEZJuDBWwQ1yJR1D62KjfDLmkuX5scjwfAHACa2",
  "key14": "5gLpiUvJy4hCzJhAn87tjPBo4tXEmsGQtnrMF3WfMe3ZNyRZA6vsi9BHYiKTp5LrR7MmhbJpeHQRTGFMVnEuE55G",
  "key15": "5UffxDTDNz8T8GyiwZdDuqo1tHzgNb3vAkHLKyZ1GsqneRELDfKujS6bVV49G4rjxna7hiaYCUdpjHbKqz5eKPiK",
  "key16": "phhsffgEZFzJVvVY3UbSbP6aFhoczR8Y7B2VuaMqu4beq1zZVgDYu2zJTbNVwwFs8ABKceryURtXYGpeQDyEGRx",
  "key17": "4HBomtCessUZZo6HgSyeu7mHwXQZZvrWiicmkEC5f3mU6j9JRdtP4jnJoa3CTiQEGoJWS7ZYN9PVgyBuUe7uibWY",
  "key18": "2w7hTb97F384qCPtcQTgiX4jP8haQovmwasvkSy7Teu7uEdb7vtNf2N1CXnU4PF2zgpvUqwHv8SgJrv37LRWeEnv",
  "key19": "2xXZFak2LrWfFRr3r6VTYrWwXGcyyamWan9o4R6en2LwGygMVdKe7ntVW6KyfLAuUzUkhvK4VJxWJ2noTAUE8vJj",
  "key20": "41UKuHdcfRA1GAwRsHfCTT2GMTRpzV3B9cSEHGFAy8DYy1aoHWvFZN4YsHJDU2cHtnZa65716JtckqB7WPygd8g5",
  "key21": "3TKN255HedRC3BAeJyXGze3zFxFs1qNJ42kLtrq6PrH5NZbgXQ5Yi6YUfe3RizdmPKt6fkMbVpEYQzPMyasCHJZ4",
  "key22": "41sVKbCgh8G4UvAKjgubSmw86YpqYCLccy1FgaEACHnavpQfxKaosHrXzvbuFkyxufH9jLDWhWxZrZqifgg1F4e2",
  "key23": "2YzWENhcsCMKRXhVpDiYuVzHgqGkXPUt5LD3pDRhRzkjfdpyArw2QqAqUHUz9s2dkiWEmTtMDNTrwDWVmAU331TP",
  "key24": "2vNvGYcuX2fe9gZuRVXYCFsauDBopNMwShzWow78aoyEhHrhS7ZhiXd7Sbe5RMc1d3DfGa84rgW7YuYcbUeYaC2h",
  "key25": "4qfT735rPybankVVW44bpR4eWTcfmPGBpm5CgVgqC5nLSRpFjLDyeL7gDaeT8GHwHUQQ7597nj3gtmtscZHBmRLj",
  "key26": "5UiB5SCtp6aAyKqdhcaw3N6YHKVZ47a62MtPGtnSipNouiDKVbV4YWA8v1t8ozQyTxwdGh7nkozPYWu2zVNF7qMU",
  "key27": "25TvEqQNkkqHH6JwMXNiDQJSnse4afztCTiM1wjRE1MLfn5oWjAnVYWHj8EdsDRj7qEqdKdrgHpvQ2B7FztPteEy",
  "key28": "5PiLs3P3SjyTz1hJCfhfQX1S5o54KwCKTWAADD1bV3E89p3m2NNUeBVDEgZXcQ7jRdds1r65ir35GLUJrSBFVmSk",
  "key29": "52yj9Xtn4yxiwJepirHABdffcgxv8R12b8pTFCmxyUdzCWbDeiehBewkoHDmDsTGssHxMscmQHXaj7goxUb1p64Z",
  "key30": "4ZybaQ8GcgfvjXfaG7eP3e4AgW72BSjo6Gb6FZC1Q2xj1S2BoJK6VGSGcWs2VvFiEywok7zgudhona74FLRcdx38",
  "key31": "3aZQ5LNmjm1V3cDwtkiMGPei7b5mfKat3AoPvpwR7kJAchCDSz5EpuyEPjZ97bRGwgbsFutzdg4mpEN1hXkS98uC",
  "key32": "2LZxZQh5YjxCUFrVK7kdmad3oM1piwDCaw1Wu3fTKFkKBoMxtm6o1RErXVdznsazmFR3mRb6ce7wyTuv34Qa5Uyp",
  "key33": "4d3JbJzFtAzCyMCQbjpgiRAsr1zezTFesRYPkRkDXcD7v995nTBaYLHGrBwcFRHXirmoAuuaJFV1eGUwc7P7XsuS",
  "key34": "2V2yyPjcU9pMv2QyUnGX3JPrm8Th1ESpYeJTPm7Yrbo8aNoLiTxXb2FYGFaZSNfmjC986v86BXGtWDvaq9ohWDCd",
  "key35": "64Wr8vM8aVAwFfWM7wgG8TpPwqVmKcxGsCEqqPr38EaBPyQsmGKSc9Qere5HsrYoDjxzBV4ZpQhoF4FUeCVzNts",
  "key36": "47oosmMg1K5NEQBWvaTiVzth2HZkDYXqWWgmAmcingWnmbfaKVtjkqPnathRuCBiTiNCW3KyUTgZDC67M9K4iUDh",
  "key37": "pz45cxWGgdjXFKajHSHzd7HjsBqNeMbWERQ1zGAEEFH8vXW9UDbWHdevWYLHW1nT4BK6LSxz33aZVXY2thAhnwF",
  "key38": "5JwNnkjo1rT69gjrGccUhDPmvpGU2XsiDL5moDDwkaj2cw4FnKKacrHTVM5tMpGuGPPfYjmULpiTbRwvEMB7XNnE",
  "key39": "3NnRWWvuVqhSgdjYc4r5gkDkjM2tunTfy6Gd19wcVAbDz3DFXgU6ueKfTRYFErtaBNyu5zi31ujHYk1HWtUbAYEi",
  "key40": "2EFogMvyoXDnfiH7vqSqZo4SJRvgF88yqhp7ajGYUF6oGVL5aLQGmiHAxxWcsMxy9EGtzdcLcUbqZT1S8UhBF695",
  "key41": "2QE7dUbWBvy7X5fvZ5U98QEX6dXPMmn8YuDfjDmHWNwVDZtBbZBib2YrW6oZdihn7652mCefQmVJYDcHiwH7Es3C",
  "key42": "tYoWwfgbfGwXYTVaFvVxoC2NsqERnnxtRRP7cHByS2fL3o6rGXsoxD4mvLEevsQtC9BdeUaYSA79XTrfPziYH5N",
  "key43": "4AVJxUc7C5bKksaDXaB8X11FySUTgY82gbXbaNimQm7dk9H7saaBbDLG6MYLKq3yhLwGkt9Suy4yqTx79VS95L9F",
  "key44": "5bXuGLfDbUx6AtQxDMJJt3VxV6T7D1YD6zt3T7Yg9C95hpAYR4yMp6iEGGXWCgs6QwvGg4pL992PRiBQUMWBFb6x",
  "key45": "4jrZ3PMvJKF6gxU6T6FGgTHePuR9fEJK3xzksVwCtcBr4wivzd81jtDxzYUtsXmbXg9KXDaFdcvW2GutSVr8wAAB",
  "key46": "5CgWdr2yDCDPqnqYJMYgxSNpTsTYAtyw1JPHALBisHs2iBZGiUYb5Exjy1LW6eE1doufGhV4Gsd7iqts6wyxHQHw",
  "key47": "4AQcop45oVJqFqQrcERTNqG4KUMyV1AkguEWnjZMELkPv9k3YLXQmHLjoJnwUApFbsgDbjKui1v3uS2geFVzXVEh",
  "key48": "5AUKEscCzkPK6UrxtGeCYGiiv4HtZWzUeDRFRDkzK2VXzcKA44a6JBgViVa81oFoT1G8i1tBv9sFGTp2jUijdTHG",
  "key49": "4mjfAWFqTDyUZ3ikroNenKeGskQhQLRzziCj94GoH15P3DK5RnX3GEbAjR8WhU7tA7V5jCaxYavH8TwpKcDu5s3V"
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
