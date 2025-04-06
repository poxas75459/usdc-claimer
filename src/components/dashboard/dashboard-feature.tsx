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
    "5Z2Vqh1irbMUQQGtxZMuv8k13eEoB3mNZxivHcfJzB8934tK2Erye6i7hd1NnH5jeyvdQgvAHxRU836786FPWzx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26WnECF3GG5VpQPct7KivAzWWmnjXTQShfsYH2GBgcCHXnpfCDf6Mkp3R4FB7aHPAarugAHdW7nm2aayjWratHAc",
  "key1": "2LEtN4VQtUxyB6rit1kkYfNh9jyhPnivJJUMW5LKMVKMwEK2cMRHZd8RuqazndD2kaxDNE9hhWqKFvCFoBCZYhpY",
  "key2": "QG9K2gRMAnWeaikqkXD4JtubrvKfvTJ9KGuYsLVwmKdeqAw6ZXBtwj2sDYsNdtwhtakRq65nvjsdUbo5hrB5M8n",
  "key3": "9hRwnp8Cy6F6S6KsPz9b4nQoqksxqGHprK8mv8pV66Xx2ynt353fFYsatZr9YKETDDLUkaQG6wYmhpCxcNrkiaf",
  "key4": "5gj2QEGYkMqFUJis2LBehYXTmZZybbHHhGrqLvKaHsRqkLJygHMi5whASgSstRYPQW1gDay7NixM6sS3x5Wq8ryq",
  "key5": "3N162FAE2ZJ97wsYmMFFyBY3mFy9mKZwbChUGNEECVtVVFFJVtGY2YPBnzo3ScjTFGF6etRe1zexMye3FFsPMbwJ",
  "key6": "5YzPzG1bRzDFxAqL66YA7knPjGoJqcBa9qNrv1aV8qC4a9u9D7L5ofgZdLWbmdtkbkwTYycvnVXWn6gBscTi1qra",
  "key7": "37uAXEuWZPC63Px83LCZVE3fdwLgfmVLB5myize5d1ueaphvCZgKHrLyb481QBuDFN66v2aLZcDrwgeza2jdaRbj",
  "key8": "5rndNvKFmDZF9XJiPADLRV4QrSeafTTUd2vzWHSTL9QYxcCQ74aXM5MvDqh6avsfu1ZokzEvEnFG4Y3krTqCF3eg",
  "key9": "3mQokAAigfU9T93K17Q2GHdatMsyj9WofNLfvaFkf3xyTVihc35KfeXbMegdyzysRtKeJjVDJnxueFUk7PoYHFW2",
  "key10": "wZUxnoonWRRbZbnFJXdX4LMc4gL4TvxMrrJSww9ZyxWa6o1kkeDXLyBfqDbrvuFw13Zz1dHAw4zSw4VANefc7pD",
  "key11": "24wtjxiYzJdSyRH91pLaUAY4iHaWEAMhM7XFz8eQET1FWsQLkRsbUhHeL87JWUVWtW6czeb2tqncim4DzKn6BQcE",
  "key12": "2ge9VUJh69Aa3ACmgDotoA1heBb22f7MB6nqqMba9xwcbbhtEL5LxRU5LWaoTaMZak5Kx87BiCLjqsaEw1vR1CkJ",
  "key13": "4Sp9r8UtqYaSXTFvdwSxgGFJWYU2btKnH52idt9jyq8ARJTV67naPMWh1Fcqjh8bGS8xrpVbSCSyq81k5SffhoCk",
  "key14": "4dcgZC9zqLbQHnNT6C8gYajMYiwcFXoMMprByUQZjDqxgugTYtWP6UrTiXrn9HubBU38TtgLt98qBSUrRUxTNWDY",
  "key15": "5fEcme8c9QXG1D5YeCoSoCTreoUJYqeu3s1UXJCV1nQXGBbQC9XYkCxUH12GzMrWqMf9GMdM6QaocQn4Gj1i6ysX",
  "key16": "5oZPVKkyUZLdpx5YnMXcVuUTAsxWKnKnHJ1KoU6gLTrdu7zeHMbFNPcDLu2JHakpGMioZ9WuNsB9K9sdWsQGvc7U",
  "key17": "3grATYUWefUU5ChnW8p29kY31RLS23H5JWYbDVN2K7SEv4EWeepqYvoMbALaYtjnYNfnymk4PBisqJ94tt9jGUcR",
  "key18": "5XRDy7UWudXpmQSuDBuACa8hLdSRCvcqDSaHAhq4y3EXui1ct95d3aZAaXr6dH9XQ8dDAb9bVz13yR5hGddae4iR",
  "key19": "42n6Ui5qDy5NNVYrWuqS4JAawuJMkc4U9tza7LwXwnPZVnBrMjkEHtRKJ4GcL15dqdCfGpca7pcHLkfWGgRW2zV9",
  "key20": "2vgqyGYCBzmMWtoEjHR3DK52WWr3RxhgaYtp4ZufGpxTrAXA2mnTNuENZnWaueunG7y2VaVUXiPQz9hioN4eeJ2d",
  "key21": "36Q1PgGdKE4YYuaTbfj1Ww1AhdUH5SnwjS2WvNcz8srDmHTzy8rx4eps2ESpoYu36pPDkvFhAJmWuD4QAAfam2Dg",
  "key22": "3iGvnmKAvQVJY6TC7kzH5CrdKStxVvid4QiSve7PG4tEw4riLRi97fStvnWjKJZuNXHFg1ZrauEPTGaKe4FHWm4n",
  "key23": "3mwgmXbaAzxDUJSb7rHmNm3fFRdETaoLwhWsyZd2NkLhDbKdLG92TXQGfg76yuBBoXoms4DHboXD7Xn5eaLHrtdk",
  "key24": "UMAavQ79MGCaHfo4CzrndDUDAWMNPP9xAYEdqMEP9CwaNPEfKBn3jEXvefroCjzaArr89sX7ds9MGUQCJ1eYG1s",
  "key25": "4HjHfpH6HTT2rqAmcCvhqoUDgCtZPUG9wQXFbddMXqdouXTBunjrCZqgb6U1V3g4inxo4udMURWZyAkCDRAYkAAm",
  "key26": "3TKLdW1aGeTrQTshZkqZFk4NbudtXoci6f28R4DwFmTkvet7trXiitDaizDqP1TGAKDU5akGmYsbw4Vzy3cHFgqT",
  "key27": "3pcpUXyijhHzGyWCPZSkE2LyPYJQQK79BTP8nEAV3VqvEwHpQQuFbBVAfRXnoKMcoNMo94prKrK3JA1iy9gQ6doT",
  "key28": "q66AJ9tFzRmrGmqyxYHmNyumUGubNuBhjT2CG5ePMuFTJHLY4yDtU6r3a2egTewc1jZmpGjEoXoPgtWks4zEBEE",
  "key29": "4915YQBDT79yvqpz2s5D4MWLoycvEBHKEzfXjnWn6ujjnNfuQJecZ9FtFJK7Ryhw44WBCp5RNoeFLhfpTa72ZXFZ",
  "key30": "25JgyttB4AV2wxgSNY6j1Jx8TJLfwn5WDAePzHmiog7ZQRNS8hvnNfASiH6GjzD4VwM1i9iDXpaJGCUNQ3Ugy1C4",
  "key31": "icAHmWChZziKYx8V2oVVo98bBjDhnWaWNpZTgtdjwBu4N39wgQRjFUn1qo8YqEU2B7Jv1r1nNVL1a9rck7AdkZx",
  "key32": "5rtiLDfhHzgW5apM17uA5BTWLsf8yZyzwFvr8T5iDgftmDroQXrCqCNYd9zW8XQZYgqyZXwp3TsJisyxG8jVefAD",
  "key33": "25cDmA4bxc41n1CBes8aNwfzUfjz8zQ4v6MCEmHs8WcbGg6dnRdmmdBhd8WsABQEFXrKj3UnemRJqLCKMPxc86jx",
  "key34": "BfGzpwhyTwiwWCDz9x1QfcowqtSWnkBYLwxqAPhon2Z3FTsAqxLkzupj257doCz5baZqhLX7rGs2gJxnZZJkMQF",
  "key35": "5eUbxqZehv4EuT8h47mpHxowUE3GdT2UJ9JMCXJ1bCo1kYBStBvta3gMpdm99KPzUDtfhzMfkATwUWk8AgyM9nhB",
  "key36": "5ak4qoKYWUDBLa7QdbKACyBVyXdKTs3XG9BcxHRQCHz4HTfyfRyL4wrxk8PtB9FrHFqH8WfesSjrC7pbH8JP9sg7",
  "key37": "5eXtjkay5cevie2RMWbRxtmP3MrhyzAcCnj287sEA7HNJXD61uGPGRZUD1EQxAzpnDG8xJZvt8ywxVHWLog2F6C1",
  "key38": "3WHKoTrbtnqoeom14qpfu2wZkCfCnACC81Tb7GYvWU3JhwXg9cZX433cTupu3XfCy7QM4GQeLwkL1DRWqGdmEX56",
  "key39": "5eC5Y4Y11AsU6WspxmcXUnZPUMGSZc3CvCQXoUhNchAEV3CphG5fQGGvEreMMe82vZSeVMvBWhsHrnn2jejoeJKi",
  "key40": "3sK9aHoNQcWbFfjiUxCqVxfaDTvGYvE6VmiDPrpxgLxcAJ4b7ZLmvAtMFzGkXWtSdYz2gxnQm1ZxtAhB9WYCLFHS",
  "key41": "4MiLixZdVtE9cHnyAf4w6MFiyfBDpj3ZWmi3NrzdzSYTcXGCZHMZnkfYD8RfFeKWYQpRUMV1SFMg9nfxL9Xw5Fv1",
  "key42": "21fh9FKYVdvEmMd1EQ8zTctvmisaqcoUxEZwLVcLTzyAbudmtG2w111hnc4SxLmAPgfPBqLhaEz6xutXXzCwai3v",
  "key43": "4r7e94PPfXYEDdGt2nWtcGwErn3kHRfGH26CgMV1AJdjewG2P2fLnwSQKSWxCTVjq848tKeXa2M6VPe8cYsncZ6t",
  "key44": "4DMGwDgCXmvXmGcDL4ChF9B3vMeyHReq9sRqizWFovr5ycByGGzba5r695sAdfay11ezrxV4gDrsXe4v1tY4qfwk",
  "key45": "3Z3S51DtD5kGg5Tryu4ASVmq9hTGSo3Kc8Sf9NRMRB7mZLfphCfn4AmFm4TdpuHgTUbXtrckDYcvW3EATRVMFn53",
  "key46": "L6AAhqwUzia8bjreHAgNEMDpvLdA3dfqa3zcgvVDSjemx4Q5JtTefGRPuLS3s4bd8zW6ezSP7TaiBPL5HLKYR9N"
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
