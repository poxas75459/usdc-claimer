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
    "2iicxPitBG1sbKSYV1MT6ix2DziqSFNiLRaDfELtFetnF31UsGGNw2wPMyssrsTeJZxSkGyxYTymHPPvVEJhZWWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gtjG1U6HievSjpKUv1eYMqta8x2Z1wNv4tcLgYXfq961WwrshuhhBDvBAXLApZbFo4199TZsGLh2TZ9o8JVhE8Z",
  "key1": "319DHSFKQ8dzRsmiXmVPkMccsXny48rkFPSN1BtbLg7MXE7BxKLxZA8XUx1dJsbK3vKTfiwK2Hqxn3MHVFDECD9A",
  "key2": "YNQwPPsFdDhReqoFG6eDfMyxJRs1JdfoWJ5fY9qcedbrxiMRrTWMndnB9gnUbPuYbA5im18EXdq7p8p1v3R5acP",
  "key3": "59h6Tz4fzAzb1oSoBKAcnoAEsCY5rmZh4HY3eNgSPokwHpczj7Ag6FS3f8bhBTAJXASEVYmDyDGBVmndCfqChnV9",
  "key4": "5gMrVzf812RbBcWLPLrYTHGc8MVcDPNhxhXTz4AUcbLorD6ETDVUhS9HqGbCGyWxV1mw5oWBHE2dFDgVvLysannZ",
  "key5": "28zAP8qEky1d9gKzaW9spuso4KgmFLikt4gy6QVGzPNeRKcJV17ztj9ES6VnUtPk93HGKuzGspgFfFE8RQEwp48A",
  "key6": "rNL7WVKj5SjCRPSsCkrbbuFBURb6Us6pn3KLWqRMyAoS5H134pFVjySdZXiAQU4Rzqt6gWqrQacCUdy9eoRYq1v",
  "key7": "2FxnvcP4VYCc9vrs4ogd7pNgnDn96ooeGgMax34umzzvS58NKNFCEtSiNVFhkkRGGWiFBirPLcMQxzKRrpTwc44A",
  "key8": "2FZjfMhVXeik92oYC1KDJPhZPDmjqTpgTRTjNdsYDYGxJHmHpzyq9CDD9zV5ktkzj9aPXCFmcQcZVQqkjwag3cNq",
  "key9": "31mbsCZFF9bsx6UEsPuhcHji5F9RNo2fsw7xSMKE7hZDwMmX5yYmHS2u6gXY6kXPgMie8eW7eY4qZk9okXiAZtnD",
  "key10": "2BEGbErebPKZUCqEUzMsYqasCUTGACJ3qSJy3Dsv8S9Tmsi6ZdEpGiuGfArGrv97xZCaDNNJLYVstVKGDAhaZbqT",
  "key11": "2dP4CXPeNpryX58LQcfn6dVPp8RnTgQ9oYcPHFrov3e9Zt22hthfcufARr8Rb61WdawzzxvtGfey7RGPxb2HJaHA",
  "key12": "5mp2hWkbzFBg87ZvSFXtYPqJjEVUFncZV8nBstdW7oNoWGfBTogMUDvgGrjESTtVMw2dBXBDNZ8tqTBD7LAmTcZV",
  "key13": "34RnEN6EgBANtMQZWYDH13fxksXdquo2YMqKmmmX6PG9gTwBQ2z2ZB6kPJwf4qfNuqLuuBRtWMYag4yNfgmVSrb",
  "key14": "2ScTvFeoZNr2SgMEHCYvqqkVcRZR4UpX16EEQgSFPvPAMY48rDX7XGudSmEp2nTcRGNwGQGLfSuFFEzYovXgEEd2",
  "key15": "4DXwUfnQwg7t3yLEakUmMz56JqJh3BwNP3W4dPdpD2trTBhnKFCHrqJc9Ztt6HyadG74ik6te8UxooEbgdp1gpbB",
  "key16": "4jskr78Ysk4J3pCvonwxFTA357LsRepHZmouviQF2vgMKDot3yBX6YcBznQVR5mSwpvbv2QRhM5ss5PEehCqbCxz",
  "key17": "3XoiLcGj9BaVZcdsJHFBzDB3zjdGeW4vymdLnuJMGuCZg8U6oGFusjBdVsT55b4v3CUCR346ZRw2C7MMiXZb9EGQ",
  "key18": "4WmEPhYDK5aPbLcUHHKhGjmhjTjfaE7GgaDTLr8zGq3PcZNmtLK2RsK5wBSiR6AaLHHdGZBJyht2LnpsRQQjkX1T",
  "key19": "5KxVVJUoytJLrFNwuVRi31SrMuQsyjWbofcTJhtWY8T4Wst2nZwBSY1U1UjkAcVbXR96eHGSxNxXhRYkroEceJDF",
  "key20": "5JtdmJV4LzybMgrf32VhhuixLhbCfsWGYh4fXxrZ411W3A9Qo8ek3r7PYAofkoz3ao5hX7wpSeygLNrPuMM6jT1",
  "key21": "46RwfWG1CcTaEvB1Qe7ZyeuFrBtfdRzbMSUsVdQD8yYaaS9PdanjG4J37iN5uLToqqgzVQgrYPSgn8pS4jpTQGqE",
  "key22": "STrSYA7P6GoFFftZMkpsqjN2HTB9G22AUeLxBGCzskHhYYWHnNM5HnYNzpyq2U88xZTCsBMiD5XFY93Jh9Wihh8",
  "key23": "2Q4F67RqJua7qmshxBFMacogGHKyon9tamq74quWFyby5y74LY54N8KNwETsZwsKX1A4LDx8zxQtY7RqHTL62W5L",
  "key24": "523PN6udGM3AkpHgi6aERsJpLiUjQDWqRKo7FH7uzfTuLqjJD8RWiFTsL5znr6iQ54GZfzsSxGRMt388QyYQQkTC",
  "key25": "4pD6CgVy9dbamewMqoHg9AGVhUUC33MAGJTgLsBT5qowiAcosveKqfpaoVjx6woQJQhjXRY3Y7skTj9Rz9DYif2M",
  "key26": "3BtF3hqhL4hEUDVGZqtPSdp9Z8KiZgAtYjfhtecSPjhoq7Vbv3BLCVGTChu7NWKLK4oA2hWGCwXRvGwifzk5mWc8",
  "key27": "3kAdqMNYEHcbdF5GTHgUKiV54SYVFFQXJFd5i3VT3ZNMTtru5Q82pCCM5TPfdeH6QufR3FNCakSFQXHD62kP7f7X",
  "key28": "4uDVYzhVt4XFEfNV7r5U5CfzV44mJnhe6oZqv4kLktr3NL3VrssPpUh2UHNM3z94NTCsMS79GhwrYsXDDRbCqavt",
  "key29": "29A1jGffEHhEPXiXVhhxKV7SC6HamisXiYae94rTjGx3cuGVJjANCWwchd7z2j6cAPckVVE3ocdBcB3bbFf26UJt",
  "key30": "2gyPqPLqHVWWVE2KfSeyC1pCgt6eRohqSwY43Kju5E5MKPUoVektNZGfr5Bhhzgx8fW73zEcTbpq7bLiXJNmUVYa",
  "key31": "2p96RkewTRGTd7TqDph9sf4ii2iZDXv7KtPaVkasDZemkmAGtyCXw4PSVW8cu8z4mhkDtTYD2Ykp4wkAEr6WEFUu",
  "key32": "3tfGLwwV78SwtzXwZMZjY77otoBLrgQPN3oZeRHncnrGG3rWAFSx4Bvnk7nRFns5vXwTgs6zT2TjYQNTZ9eeDwdZ",
  "key33": "3BYwhTddniZ3xaQ6FsUKtcQFcRyXGEW7ArsDwbkpGXhUykePXimszkCpNXhzVFDmfFz4JPaeFdBVxPV4f6P2qXRU",
  "key34": "4Fs8bFVVQJAi2DAweT55fSJMTMDJb38VPukBMzbr7B92DbpXnMZYmiBJmocCABRa29ttTPDS5veF8x7KWV6Qdm9c",
  "key35": "3cyc68youQ5T3ERT2NuDXqCDvv9cWnJSTKDf7khzMq6M7sw5d6SGB45EhjJ3sHP8p3a1J5xuphvouSA8iCc6XegS",
  "key36": "jYxbKK3KQh4DyjfegEJGHRrEfDyzpmJ3jGB1u1KVzLpvCBt2c6jv4JMky5G9bQVmAQkXz3nk2Z4LuqebEK35Z4k",
  "key37": "HSaUjraqAb3EQDR79eJx6Gyai9o8dZhcwYcF6VzdeAoZnSpwvBJchYuKXScHE3yptNBiYJYHni4jEq78gZTmnze",
  "key38": "5VnrGj7jT6MYPevnDdH3KHGEV4NeJM6rKgmhgNT5NtzNHDJ14WVwLQvJviLDf7kFr9Mj2f3fbVwZsHbX9vqHwZFU",
  "key39": "472HKncVPh69bDXVM5MeAWEQ4c6HVB3TSq2seTSJEF5dMsUHh99RMD4KPBhJfwSMoCT8reDLfWFwA69BAiS65mnL",
  "key40": "vzKxgirRiauo2YkFSvMBnveZrnU4FUgn6cLuTfmVKgkvfqMBo8vWrXWdaua9bfPrqYHF8qUbH2dJobTR6opr8oN",
  "key41": "3MTee4FpVd6URVJK1yDiqjRYxkApQerYUyXa23X8vGc1qQuLEZNm8xiARSjmqUQy1utivYXnrDA1Es8upUJn5TRT",
  "key42": "32ofwVv9Dx39nwe4XrNpa6uARY4ghKwbcUpRBVkJYvoDqwhjawWNXRJ4kgXS9QGRPDqh1iCVyE9YCia4o7uupmt6",
  "key43": "4kq2AfF8VSpeX4DvvDACNpxAwUGGB25RdKFyfADL2VS86WKHmV1MZQFcffvh7GgCgLHE6rHX1ESvgmALA8U2tgzG",
  "key44": "2EAs5ogPKjCqUK7PbLoAGswn16uibwjzyu7sM6dNMyiYPCmmZXicYTb6u9MZhXqRhBXKm9brbAJJRxzYHb6fHuZR",
  "key45": "3PMfFeuS6BLhgXWm4ioVz3dR6WJVNkKDvD7SydKxFsjNY2RCzQDMbCHbCmJJyxjpBKpLv6aLfWCKY2Mvkai8HYXE",
  "key46": "3qvW1j214pg1iFfVuFTRHgDQEsEkDhSLb4z1Aj4RZDSgJ2xkZYFWWC3DWXc44gr2rv7rfXYLuN6c8Cd6UUdy19D1",
  "key47": "49j5XXEYJgZRqxUjFxb7PNE6Puk69UhQda4eHmoG89d3a2C6UsqPNkzzRVJGMXbtqkuqHFyH1AQSNXfRFvT1q4rs",
  "key48": "2Q945et4BMfvGy7wb3pZvaAbGjY2PiCZFX2JAVHSfrvrotiLjVZfGV925hvGEKBm57zpV3FMnWxLGr81D1YLYF7h"
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
