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
    "yaSqn3rSkiXmnJniLS8JCxJ55LJTH51VjJCgW881fupCBxXKBkiNuiGEq8iKj1RrLL67D2UUsF1bvhDoToTMMN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uoU8b9kb6AuRtVEHYH3J5jQKzBYSYfomJtuuNXecXF9tuXrwrQYVJ5BhmtYdU3bmX7qWXJxgS3N7PLtpWM8Gf7p",
  "key1": "65oHSYwvCKSdr9EtJsBQDTAszJ5uDf2YGi7EdrEeeTTkXuAorDYEuGZrXmjm4mkRfVV3MHpohLCHoXPLDFwzusSW",
  "key2": "347uK8jStubxFUPDA3JZZhZr8Ec23PRx9LwGPKuxBQkCnW2dPPsE9cAm4MZXLtvM2E5dxAKHfp9gt26jxAGz4fmm",
  "key3": "4HN7qG5DKsHSEGu6xgRSm2iDm9bTzgmWyzPxorsdoPrG1bJ6Uj4AU4kKdEKKQXjw6dwaVCYdEnsiGdZRZvqzA37J",
  "key4": "PcMkcWrbYpPgBqDDJA8W9f12abB6PyBMnUwmETdAqcJ582z9MwPdxBEAGwGsWjFErUDXgfKzWKJRpeHo9uucpo9",
  "key5": "2mcRgTRaBb4bP5hy8DwYWxDJbBEjjCRLF5MPYnpEhbAA7ZwoxrGVuSnVRSpoaiFXCtVMCgfGYmT75d6QrFvvLGkH",
  "key6": "2MsyVq9RJ8PnN2s6XBj2VirdUvtrZoiYGnEGwVcfTnib3kXYEEyMjsEW3Hd1HREe4Squ34VNwqBwGo2rt2xVS141",
  "key7": "5nD2atEfBP5vs5eJqXPKNcnCAoZibu7QMgwD7ekc5CFcHW4EnL3VEvFsnEwXWudsrKAwdb4yFCxw8RQLeEEjfHRC",
  "key8": "3YBmWrFEh1CfGwb7YooUWt7bbWhNJzMA51Uc2PNEMLGXVzdcD1iPLTTWoi15h5nYsTKwb4MwoBRfEYrf7Pw2cAJ9",
  "key9": "4bhdDCRvvPYspddK5NS3LSr2jEh12TjgGUmqy1pp7UukMKkW3fEqePLxTJc9Gsq5AZBUU7z6D365q4yvsAMXtxgh",
  "key10": "2oAaMT6uTBVdaKnTsDG7b2Ahmbbwf37HmrnSVQiSpG2WZax8FRVkzJCL8JjdEkZd6u86uz4LPDaEnMk27yRnRH6i",
  "key11": "612x6oc7khuZk7cruANAss2DkayiQxcZSKXa4igFqTkAKtBu3sHfHwLaVqx8LB3C8ZDo5468KEfpnj3d6fNZxWnT",
  "key12": "J78iKiqkCEKXLyv8c9Uo24gb9HMWppjBvjTsYVtcHETVWcTEKJ8Dz9zwvL4eNHg6YGLC4en6ZScqvwi4mr1UfxB",
  "key13": "iRnDbHc82Fhzm9YdwH3A97sY4vHcBM6UfBUnfnUj9HkAvTD6rt3kLKduxVFR8D5VJSWqfeCmNnpqZTY83D1bhGb",
  "key14": "283v2S29DKemeW9hVZ6xMn4dqsVzV59ef6RrkeGrqV6Hq1523axs5uhoLzx1NZapWHZ5kuwsG9nApvSBWgPMkvLV",
  "key15": "2XxndjCMKvsNhofPVhXt92eH8amugZMPP6m5BeMQaLiArybuVtY7FvbaftFiZ44ePiVrhFVcujKFsfp6XnxPwWB8",
  "key16": "45tivF5PYSTU3tZsjNHcTAiy7fxwLaV2SRgCcMSuB7zzFj9DY7mtrfRhzJh9qcwmN1PbNUJud1jqwSfFR83LgNzi",
  "key17": "2uCv4nv2XWccT8Ai6HeKLkeL4HEhWxyr4PCbfXk52EpKStxJn2LfickaBTmicmKAWAD3bg2Yr8H2P4EWQEUF1pNa",
  "key18": "2mX6spBt4rpPMZ819WXhLAhRvsbRaYC9PNdW4Xx7BR9szkTZPSm2Mw5mT2thkyhyZDRNtWu662nGczGfqT9TH3gM",
  "key19": "5oe7KhPpEoaxRMBdPwA9DRjGhPsKFJt7HSZENpbKQUYsmbviPWF2rbxEiyjbZSfSXSzNkyLShaQCkSRXgycMSvn",
  "key20": "374jeBHHhjHzPRdaU51F6Fvaugj2JxEKEVWYckEqdadpBJDc5U7yCYLc3N6oRapSghJJPj3v6FF7RH2e1GYDFCNf",
  "key21": "2myD9xQNn7YCn8oBv8hLpFNt9Xqaj3sQsXNnh4rK537u8DFJuXuDkSC4aLEBXrcH5RUdm9HyQ9PjK4JspKT6r1U9",
  "key22": "3QsbLCgaKnkarrJWTKHmwvBWNrZH8cX13JEHARxaVwxa2C7P3N9iYUomaihaYVRvXUNdvW1jwLkphtR27Yk8mGwJ",
  "key23": "kgCoYUV4DypYiWpWihWpcddZ8rqGQScRKqnEFPUENEpw7TqqszRnjtiB4uotDd63i5cZLBu1puPyeUB461tTfxL",
  "key24": "Sftt3QEFCZDaxawBW2UY7nymNXEu8J1RwaamTdMi2xBP57APgEPqwaFTVJodXxEYJ1sxXBkAuG7WRE1wTPGiTRZ",
  "key25": "2mDEHfDfNWLqi69Zc9Hc3zhPerj2YiW6PYyvVEwbZBtQ1a4r96jNVTtMFviAzMbMLXt6DicEbSe9S24SA3wC9aU9",
  "key26": "2yiNckXKjk6gJuhxHCMjxzN2G2MFTrqdVX2GHa7s6LfWxqgK3qHQxqYPKVjTD8psMzMkHJmHmnBdRXLZMQFbazBN",
  "key27": "5vm1DVboVSoNGGjRqw5EjoTr4y8gYwHms8wz2PiAn7ApohjGGJx2oLdV1QFmxp2pueyo4p9tdQ1F2TK4ZRrhJzWF",
  "key28": "2e3J2xf5VMedV7e3Hou1AQKGiLSDX2ikGdWZMvGLYizaekE1xZXBPvuwQErpXkp9bp4zyWrcthZNireQagNJN4yU",
  "key29": "4gG1UpGJenz8rx2Y5MtqQhNwMDQY6VkRp29m7rbPmLwYTLYF4FR9eUtDQiiP5Vxn4PoyxFRPspdHwyzRkW1XcH22",
  "key30": "3uMzRpQj3k92ovvgpwCHu5ERYN97tmpn2gxa3NGkRLb2NA6ubTCSArC38AJKhwpwXKfbX7w9wfMpMQbppZP5ru35",
  "key31": "4sy5XkJ9PjzMU1YByF3yMrxrwMpcy3KPw2ocfjz9gX3sLHLg3FRkYezTYngRR3hPspRrRinVep42eNyfi4QSh3t8",
  "key32": "5CfZn3rN3ZYXH4HR7kikAf582UEBxu6vSKey3nrm52H2oDdPpeuZoqS2BZiCrDJHHT1w7xD9KMSMMvaTfdcgfo41",
  "key33": "2bcoaobEqwSAdV78dJs6V5sVEE2vZMVtwXtrFj7YMeGRLHWWFJyFS8RuvK2XY2wT4pDqsbao2TEFtVpXiBQWMfru",
  "key34": "5iV6yoa4uXgXkES6Au7Nh9xF2X4phSrceUXffQbjSEJkExJrNnUczHJSV2iWypLFE7RYXB4tpDmHnkZjD6NZmtxR",
  "key35": "aUa6w79moRxhZJFFVuVYVcNvt5VtcaJJYmubEQKawxJf3Qyy9sWo2T64bbQxefVo9dxBGb9eaaPKRCg9e7jFfCs",
  "key36": "2bHLNjENhDywVnFB7chTL3TaBRoC8fayPMQCR9M2ty1xT1og7qtDPLT5NfX1eEPPAmg2trqjeu2J65beo78u7u73",
  "key37": "5fuxRUpQRZeFu5mgz3FhiRPAVaBMcke4F4BDbWwpkURUFBVF2qiu9uaNMtPQ5SrLVb7LqkajQzcn1qLNPm1uy9c7",
  "key38": "2Ey97wUMas344Sz9CqqL1udgK97G8Dcrz1Y1ibbQDgbW4ESZD8CQwtmsQ3H73xjbwpq9a4YmPkACBeb5TdJkK2Yr",
  "key39": "LQH9wJ8oHNNgH6wyFCPKLUyzBuht3PErTBiN6zMasMaB46F4bEing1p3quLqnvFZhjwCc2biRbG3t9w3LG9RkHL",
  "key40": "9QA2dwREAbcsPMYiQknqu4tjgWBazmVdX4fMFVkyiXGQeBRx4H5PZVjJQEHmeJ3ZgGUNoms6gFZqfFaheyn6UJL",
  "key41": "4UEt81D1qcZxeRgGoiiiuX6TZYLWxcUU3KrHeLDPPaq8BALsj1UaVJrUXGdboaFZhvgsBd8QxcbYKZStHYjRMjJU",
  "key42": "495VszxPYDSZdTejdmhWYhfw1cm1meFUoqFk3jMhpvdvRkk7BVUfQ6V7MHA8FoyN4hEqGrQzZgLv8DVdGGSv3VL",
  "key43": "5qZWB5yDoHpdu5d4jM7LE4mNVfEsTxs3hwnnsGFwH8EsWBQkD7izkzp6rZpGBj5dgtcV3MQ6DGoocyyyQdws1DDA",
  "key44": "4BtLMdbGHZtoMAhQxM3iewUqqePhMhah8twvRes55KDY7bGT7HJQABYNKagBem4yCuMGayiew2vF6iQT98pLm2p3",
  "key45": "25NpGkKy9ZnXJwpRNefnDnV2bde1xb5MrLEnq5tbfX7ovcFuX59e62UM8dRYo1ugyR1BunYvKTXyc2JpHkYafVa2",
  "key46": "i4AtYTBTZ33D4VoY8fqXK3aXKCJrW2LSyrPhbnoPnRWpnurASZEsf7ZyYAeYuZV4SqFkPGdMVb4tcgQQ1DgW14s",
  "key47": "JvRgbep7d6bfQ9Vw7PaHCXHC9NsMFuqK8sgM263KCeNAxqinACmmmyWH3vaStUrtUkjiUxxpa9RZb7sZyVGs2rm",
  "key48": "5nhtSwHkoL1LtpGJtNqGT9DfxbVBT7QxxLPzDNXc3LJukfNTg8hEyyu2XnNzfkZ95JH8nnCNYjaZTrqMej1QqTBT"
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
