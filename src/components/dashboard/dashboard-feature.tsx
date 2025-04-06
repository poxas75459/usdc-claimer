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
    "24vnHPpq7UxQRzLv414xVhLihWzdFWPqLFju3YQFA4CGioS9QWXu5bVQHQXq51na79QafhEPCRPw6aCAk36zzvDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3g2FYD1rJ6nC6JUGvjvMFRQPwQJzigrExjqDq3XsjBtZFpwiJC1ABBg9oPe2KPv5eha7uvT9MyuT7VudzJzUu",
  "key1": "5hJ2FnhGBEwAtDn3JKWBMP1cbqyjwEMgkKzkQaWfAfGe1xrSyphvY6M57W4Grai45cFAdWdMfQ3944LYSZ7SBEzX",
  "key2": "3796VtBiqBSZLUz48uGoeQFrcdMZ6YsquVPeFGEVwpiarAPv4bFWTWnbA9xth6w1PfogfWvFGtbeigR3HPa2N6AK",
  "key3": "57CG4FR6Tw3XjjzC46ro2jtWcHJDiyeytQTTRtd8NdFikdwKwuAYsZe4rqdp8ppQVn4Qmnyy7TaYV1Z7ABVjoBD6",
  "key4": "2HxF7pwdP4QieWhMXnAhTuHUVPyvoUs4mZw6woVidd3v8EfNXrkoTJjDmriDWsS9XajQktuqtkaoa3yJMpZUgHPF",
  "key5": "2xUn72Cz4ixqGJbyfeshrhpNq42AnLddmYqnKJ16zbV9xQ33ZEtQEKYQPBgwUgpbF2WQGKAmjNTujQPRQ6g3X1Fs",
  "key6": "4ZTgrS3ham59PiN4fri2U7pC9WvRNYtogbTtKg1VVy8FcxgMW9snZhaodzp8dyDsNUZSmLkjG6N5ux7EKVXSbE1D",
  "key7": "5r9MzeVKKFwMKoYumpK4EuEMiMqVwjnTXY6w3HpwYo3DWuzQrayHhHPJSGFVo3YTzsfWrj8DE75d287EGs54fmia",
  "key8": "2HbMCELKAc15qm7UBcKvJFErtcqfSfPz3BWRwsWEorUSwXARhbEv2ozSrzdgw8CWb6Rf7gsHi9zNL3HmSdU1G99S",
  "key9": "337DRttsRjKAcSN6TXfQobkGULC8bgEXEmRXuQ5NKwJWzTGanuJnpwYG6T16J3UwQinTVUyPDq7NjsBFEX9DVQJp",
  "key10": "2JRYxK9MmCKAcC53iSf6hq5WL9soefDrQGJYAeRGrCWipN3tUdK88HnQwBZQVqzFJsxoKSyQnaBGaiWSmxmYUogT",
  "key11": "3WVxfj9L19nSr3EAmqkxqWiJcghCD2qkTADcuSDvCNiDDHMxfLDNE2u6Aud1vcbyYDMX8PFTu39i7u4qW9FihCjr",
  "key12": "2oh7fiLe7AQK4bM6CqRaqLMEsXbxweGvg9281rxtwC4UcpoEfsd4DYhVSn3HEUnW1xd68D8HD2KdVdWfSYd2Hnz2",
  "key13": "3ZpyGPsYrR3hAAbPZcm2yq5YwXLohpMcrnxF59yahs2Jf2HWvWvQ3yMoacFU6pH6rH6qTszbV3JBbvGUwTqGX2Wx",
  "key14": "2eCJ7Cu64bjT8zDZEpzWqmRe3TL4wX74zjrXoMMps6y4k1euTbsrEm9wTMN4carzeVwj6QnisLZDKWB9vkL54EaB",
  "key15": "2zCMuA2KudHtj4XDjRWs4ecxT2H9hGUZjC9PGc7pECTUv9QswfbcuL3Wjhw5Rvx1zTUEo3m16CNfhH8m5MMek8qv",
  "key16": "23CcU1xkRWdUuryNiWb3nSc9mwZcGxm7aUqrchHomUDNnfxQQ4cQLAb4AZpri2s4z1frzSBxe4CSYCZZGV76jihv",
  "key17": "1jU8mrgRQPNNj9et5PPxyMFpiuAA1qPptJzzHsr6qYAvq3jY22hPR8mxfBNzw8gzfPeCgonLxJmytdbcETRkWBU",
  "key18": "48C8yubHGMm82M4jWfTL4j3oCrSum2wHhvzwb9iYRtdYzFeb8uL3euT1eyWyLWjZZBXf2zEcUcujN7kUzVZmz39U",
  "key19": "29nU4dnryYWPjgzG1VrDL74AJzgdkmwSt2mFgQp2MTNYm18rewsb1mgcZfYjuQB77tuETSzSCCbwXZqtJXwKX3Hx",
  "key20": "53pDFc2ERJ2ygpPh4WjCb58Xec2GoQrAREMQyeTtR8Sw6K6ykW7e67tcqEh11ku7eMs2YJUG1SK37a3g7pBVSHTn",
  "key21": "K4TPF9Af6awXnNjC7MFduBNx9v7CNDxeeCqbjVUkuYnyVUHuaXVXekikAJvFwK8f3RGzP82tkSGSywE9zzQUsAD",
  "key22": "64sRcoSDTJKDUqLEpcXiCPBmzcdJB92Teuk5LemQHmdJJzcaD7rUu9oH6y76EyG3vWceoE3PTRVR1ZEMFxQJ4A2u",
  "key23": "5B7biLmyARNqr5WV3b7AUfq2foqNLUzcVjJYdQgBDxXrVVm3opjMZY1JKbQqz2NJf269KRxBdGK7JwNzuoGhu1ts",
  "key24": "4j9BqfR6SRef8datwbopiuffQZLD8DQcYsbWnqWc9fy7G2vPXLrmjiEsxvdTKWbGdGuqN3USM4Mv3CyxxxGaoUM5",
  "key25": "5rGvi288Z9wcTe2vkB8tfd8eyGD5BCGR4HQNpTf1oo2kvJoGrVKx9dMmDgNhkL54YM6W588VVyhaRjrX9c9bEPrT",
  "key26": "3YJ7gMYEdH5ARSRmzY39dDeXu9ktBQrVWUStBZ5HwDEG9Jg4da9pPP2Sj4V77ej7pFLoqa6REKFrWaeoe7a6nemM",
  "key27": "2Ri3wgdCcHPCgo2cJuiRKmid6JgKYeDfBN8jwT5piwop1aCyyHfBS1K1VF2KLgcHDXmHtxUnUuNqv1Qfrd9rQC1L",
  "key28": "2URteivep2BftbM3ZhsBEq2V2a2jKKoU9pXidnR9MEHbE3Z6UxLh9f2MCKAs9UxGDyPWVarY2YkQYhhFx9o65ia8",
  "key29": "4jKH7rHXHdk8QZ1KYagrzFg63rJWdwQtTLXRS1H5QqFjDkER6pnzZZ9UUrmruiVHrGddezr5jg5ym9jzGXvZyzKp",
  "key30": "5cZ6adGTNcAJFbedc63tZzsmr6vvjYxiX2XTqf7tCr5dvvRwHMg5DzBFhSDUiuprfSSXzSFZnirhb13ekDdjSFr5",
  "key31": "5MLA8yeYqP37FWJgNUrJyioJ4c3ieg7SvZLp3qxVHn4hxnM2o72Esz4zkiy1gSHYoHEHV5Sx4EXa6aCRXKTUXwkj",
  "key32": "2nrhAj1H1Kqn7ipjJwJLih6mBrP6DLwJBfearcnnHtdvgLbMQBeeZjYSCMNWCyjafobwhXnf5JvAcHA7NJS2X3Zq",
  "key33": "4Yhjrnd218kyjfyaZ6pPYgMf4MwJwrgDmaKDdzSxSb6tNdGdKUjBuRXAmKDXodfVzdLSqtKA8asxwo5M2y7NYmsM",
  "key34": "1kyTpPfXDcm8txu9eNf8QY3H1KjgzTXyhXPyCWLVwYGopBiw3tMkomFbur7CFbL2YDHDCf2pmxXVB4U5uHa6oAw",
  "key35": "35T4aHzhLVuuaNYAe85SAieSo3hhaaANcQmkPLeEcmNm7sd7sypuTgXeVvGJQUfYCwrDi3h1S2myyZyZuDAPTXJ5",
  "key36": "3U3H5uw7Sdw3wQ9osxRJEMcYW11MExrVMdyBZF8kY9makSBkcaJ24j1UwcHnskkCtoWT9Yrk9QmiLvqiYWQptM7m",
  "key37": "35c3Q8LjHkJhrDnzJ6p8act191BxforE9GYcmpgR1YwwNdnSA2AhYTqQ7D6LRdMGAfT5Z62F5mpuQJJQeyyMi7dU"
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
