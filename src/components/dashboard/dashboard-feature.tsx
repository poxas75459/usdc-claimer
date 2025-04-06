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
    "4T9hzdWRfqXtzUP3Rd6H3UU7dx9qkQkCREheC4asqL3saoiVg25gU4zfCfAYf6RiExPCzPbkLukQfWmEER8oixfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qaSL6bRoyP9MuQaEk6JG5ErM7Nhwu4eNvr97dfpGTNhFZZmNoTUpsMvuG6jgHXFXEhwCV55e3hmHFxk8rjGQDRB",
  "key1": "2zgyG6pG7dNB5wJrfNPDXQAkSbz72nZZtPJ7PYB3b8h8qwk9NDUoo9AEMGJSec4Ec1ZauhLKXHf3fHs2q7vtGndw",
  "key2": "5Gg6TQh97QV29zpQi2VxcAFJ17xjDoB9L6cGUbaTGodiZfJP5hgtpaFQxXEyv1rLQapSDL9ofmUdW6wtkt7xQUij",
  "key3": "4fi4UPASXWuFcnDs4aJ35K2hbhXnzp1uxUs7YxRzeJa8WSm8X3jVeZA8xVXLDiZ6vYR7xPcH6VUDBW2rjhrakHbF",
  "key4": "3VyoYb5o8dou2vJwQHoJWDsfnm4h7ts8c8yWwa85ruXUQ2XSoasZLfsohqSTFVDmpd5QoLzqh9vVkxq8H2NEVDoY",
  "key5": "2KstMCD9j1w9HjhKQpsPiFtCGinMTvCwcNtnjnK4fFjcJe6EqYbqxmPoy6BgUEybGgC2176ehLF85mPLG28oMS2S",
  "key6": "px8fzHW4GSGm3QK7bD3PZnvU7hd6K3NyCadCjxAAe51SYgjpj2nyNCDVhzpnAPKsCywUs1mJBdbzmXAbZGKeUC9",
  "key7": "2kiGY8SNux7UrLEAtiBaPxik894oggKy3CyZxzjbGEoYmaXjBA1AvSskFjmyKDJPSnN5oW3EiH9q9h5pWz8hwgFe",
  "key8": "3Ucx52Pv5v2kSsUJk7JtDCiHt7m1bNZXMP7xvkGHtxCSFZRxfMDQnneh5aXoXWqvem3rYhAiygz7KZ3U8owUH1DD",
  "key9": "36RPW7snzwkFbbTXFKe1jZYE8XSiNBe3nnTMR5cMKjJJfdiqZ7TN7PN5PK1PR3eFuV3D9wkyXoRaCRaQresHJCUj",
  "key10": "2h35TYNCAWgXK5tKxXSnpY362PiD4VJY7Q8Lbnt3ixzPMfpcJWgoBuhLrLUqBpaRcHGMifW5eovEMBV6u8odk5qw",
  "key11": "4ccbzVW8oWQ7Hj1XiQsCbAFRrHZrpfuJPm2GpPp1kJjbMhyofGmA4GPVX8LC3qiakJKm6r5gADmuMuB58QSsZw6T",
  "key12": "3j1AnxuJKxgAaKj76dLkCvMxZQB1ARxvBKwt6ViE8VAHntAVdZgw8Bo3rftC2jY3KvgCkLHdb4nUwceJMF5FrWGR",
  "key13": "2YkE9ZU9wjCKT5KjF321pLv2NP5eMJ4F3VoDGc59VEhsSaERT1VdvnYbiS2Pxp4uh17DyaNVgYekReAPmibQQXja",
  "key14": "sdtdqAzCioDvokZyLs929McJNSzi2GWjEHqCygCjJDBNex15zd6im5sxaNwtwKrqNPKstVjF3Rh1yv72ms3vSty",
  "key15": "3F77SoFsUYxpxUkG5QLFngM3sXxXoPBnT9ZxxbWd7ievxZt85XCeRyvWQm8GPaoyC71dRqy8yZxodJzcMErziUnc",
  "key16": "UqeNhWAeFkFXdMTDas3r4CvJ81P88yVUFaZXn22vYm57KdUMn1Yewz5XtyPTeUfpUV1sbAk3dcat7PdFzbF7KLG",
  "key17": "4A5XSpuNioK1d8RLcP7e5KsAqSfPeczasjUhhqVBKFDtxVBZceVk88zYWpunmwubuEpwmCGrEkhbiWxLCPFhQjYn",
  "key18": "pmk28DDLi6C3AdEeF5xmu7Uo66qvB8Ue7YmeZ6s1tz4rjRAaoQf6U9J2qKyR94WTtbxuifDJHsf6xjMVMAjGUfq",
  "key19": "4CwzmdTHkc316N2maepW9E6kqurz39tvncptUzCN8t7b8GXXf1pPxsLF77rJwD1Bsx7TG5G6fTLftKJsUoN18DmR",
  "key20": "3xYxpkCm1c7rpH1PS9RFepNGm7A7dPHTqPSSButyCt9R6xQrpdpQ9v6oC2HrRuJcgYugG5Cok5evasU3dLJX2tgK",
  "key21": "4TK5edHxtxWJ5TM4pQoqqV2o4hqDZXELnHHLHEKByDkbhTQCUZt4NeECgtsb7rr2A86ipzA8ZQAqn2itJ7CpRoJg",
  "key22": "4W3tHHVMYWGTLoXFFrnppDkwH7tTfJ6D3Ag7QYjbBheed3AgKEdha1Yne7Ho9USsxroSTTdGRpwMKxTFw69VSYC1",
  "key23": "3yStJk7J48oBZunzRWZB9BHLYfzU5cJuE23tNai2iVfnuUu39UTHjr25x94VZbm7T9LUk3a8v3YNui1WQYKAKvY8",
  "key24": "5W15UipPoz7Sc7AkLw5KKP8XswYjtF5okKhXiEDbjWcYTZqWHCnvbaDsLLkEFdcyCwS5LAN1EWXuBH7LwrtiJkhf",
  "key25": "4tb9Lq7c57eqWWhoWaAkoT3gtTk6CegwWVNS3gB4ySSRitsHhhNMd9rt2XSnkJMtf8bxtckTuNPgJG5ik1e31hRM",
  "key26": "rVYZbtjzkW5WCyYJZh3Pwe7RbjQr8SXxC6L5BksnEoWUTg3Z4y1ZK1YDcbMqdi1abkufu3wr7DjfMDXHZC2of71",
  "key27": "5GLve7LcHxh6b2LmhcnaN2JF6NnVW1Efwwowhy9upVqG9HvLZRg6nGhW4xoT5ACB2QY7WZUVuTdqzXfE2RjqTz61",
  "key28": "Dq2mHR8xDGdFMYgY1fnTngUmyQUzz96bPJHHsotX7RWBoCioPV2bimN7HjhZan7U7MWo1kxYYVos3LLAW6gBRYj",
  "key29": "4VJJVBdz4rridWq4DER9YVA4GvsNcncDtFn2ihxV8Qb3dChkaz1tSbvjYM47hWh1hTPEiM2bAYeWi8smhgFruLpu",
  "key30": "61p37vmnhSNrRnEbYesCd1q2dEVn3c72yAddphPqVRfEQxWEo9jnv7B1HxakkxNHyZ4q9PxVJuzGubfqFZkS5Ec8"
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
