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
    "5EUq2YrBCk29YQijS85jQL6mVgBkggg1QNyNgqGs7uHmoGoES3X6UAqMD3Zuki7eJudteiMz6C4vsyg8HNBhrfTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NaUcVwaahynHhcAJck5Jegos14KUvu4wuiH5EEhyXG1q5UWEfZeodNf2y43sduiwBmLXYtEWXDJHSMh2gXWTELD",
  "key1": "31FJibnS9o9pC9EWqSMvszWZsiSy39DhiMyqNXraz9Wt4mhyqp9fWbLDeu2xmwjQ6vueuWKag8kY4VPDjgNLeHRq",
  "key2": "55ei978Ntb8pLbcgfrGgDS1oiepmLXkKAzTrxVrD5yRdphJPvpBt3ezNSA1seHUfZiEY1YUvyVtvjHp7Us9Fb7of",
  "key3": "5Gp773DDjyGjhcCsqx6S4yaJCQ7r5BTvfAcTdLaxzvR969SpvdGEkZTCBR3X63Qd1n3BcBLakYjvDc9s5GUqn28e",
  "key4": "5SkFehY18zp1WArpMAgdCvUavDNkW7zwwAEEpUL5vGaiiNQ1DqcBorbiacqnYdXSn79wQQprpu4QrVc2Q5RrrU1X",
  "key5": "39r8kk1jQ8XrCaXYmPWMWZRvgkP6Bd6JFiEq2g358musaPCPabv7m5FCTBEY387AbpWLR7SmHsYkJn5gCEU5BkR4",
  "key6": "2o6uFdAqqc4HnyZwF1cms7cnAs5Pfi2GogMzj5NjpwrZhCRVmBcbhg5DPyJTiF7bcAzFtjUYMN74CYUH2SGbkYSA",
  "key7": "4QKSny1C7ykj9zy2BBdXcesy3Vborzdqe9G79KTaAzgznyxedtsoqzMPTsQxtH9NkranxkrsKtd9VhVbxSxNHaGw",
  "key8": "3x2GyXKyGKH19F5mnjTGaG4qDY4BczLbLoAYoxh36AbzgnmXcU97AdjSM6c1AKvQ95YooFQEJaJ4F4HjQKBGVj5H",
  "key9": "2zWhg8kf5D6GqL7U2tWymEGigEytG1devXurA6GXGfgcMAsd2eeUSL8CCGcLcgkYdqVoRKh7quYCNwset4fWooF",
  "key10": "3gvCsZsoS8wzgqdWntwdq8W7jGLsrs49K7TDCZdiFNU3jdCtxM1zHBHL4MVPxMcEv1qYZU7bWr4JK9isy8bGQMkR",
  "key11": "34m9YrzGidQ1NStUqMCdHasPPPQXrZC63dh4xYMzrW7iBZREpdCDjPStTX55K1v9Pii3jPM3gEwSuykZ7xJ42YGu",
  "key12": "56TjfKfRCdAmCGBDEkrZmQTnsAaUYtDkV1NxuHwhDMo5TCdZmA2eK7QwrGaFaCfdCX6awUffWuZ1Znw7q7Xpz7r9",
  "key13": "9DKfsiNmDnDyyrHB863Fk9EsuVceeGnyieiKpp2AvmXFEZWhsUz2vwTcQaz8C9Eo87oBGh94qZara7krDDhke1D",
  "key14": "4yb3urBKq4K3swYoCtZwWntbgJMDQGNXa5Evv5ufbg5c7paauiYLSBGRGx8gNtt8TAKiVmntF6S8xm5f2bJN7YSt",
  "key15": "2AeS7W1PMex8AVjp1JgHcok1SXWDpqXc4JKAcHs4vsjkzLF6kurEDdK4Cu9T9R61zf52Una4cohqrLuDiDqcGhQw",
  "key16": "3U4YvgzDqVAEFinsRuxWdUJaubJNSTUU6LDAZzRpKknQtcVRSsWRsDCuaX84oNkBnZ7bHLMsJa1QPrZPwi2AiWBH",
  "key17": "54ScPrPNTbKacA8uVDzTLu38Gv4zn6aPzJosHcrgs29Y1o76geN2e8fq2qvXuLwfgwFknHJ5FXB3fYhvXCjcTzxU",
  "key18": "3jvw5Tv24cB5RTz8KUACBtTbNNDvWqG1wod8Q3cbbysjbDYEr3FzPpQwTr7Djvhufd3RnAcAKzmEvhWYfhbGyumY",
  "key19": "3yBvxcj5TyYpQPUyggY7gmyyNykBPSptxDWmzB6RB9S7fBS2yRd4QKmMh6d1MZWnADBh9aWjNfAx4mTSzyUvZ2vA",
  "key20": "3rFkDeWeeuFF9H731QTQDCHFZrdySa2p9pK9t6EiLGDnuxnEcbEizMQLwByhHxejPW7PKbva4ayagsMyRqW6LPG6",
  "key21": "3JmSFmaEaa4GZuPcS8mJD7p2u6TcqTmRgQyCxoqwnhBbbwvwgFQ75gUdvzcJYjTh2XoKsFBCC9CP2psSJ7j3EjE5",
  "key22": "2qXioPk5fAXBkJMpdFQ735B2nyU4X8ezBRiKL6vdda2oqwcR7rxB979oRqVb5kxHsQtnhmoNQVAq1PinMgKfEADw",
  "key23": "3H7TqRd8ncYFqZ4NyqtbZJM6hyaxoEmZFj2gH4TH6TFDUBbmGCVQK4NqFwdbDVzFPxMcv6CL2Tacgt3VhiVUGAcD",
  "key24": "2huJwJtPWfCsUGNE2VdcNBhPu2oChFp7U39tQQ5hPUGRDutW5XD9kVuxxZDmLMajksauRq4Q6LBwz594p21LvnrB",
  "key25": "2Z7M2m3R7J29hDmj1F5rQ7qSzDhy6sR8RfjgHn4tTmkTNKQM1zKqBDmfdQei1jZP9nVmdeUpMDASSjAQwS3vg6r7",
  "key26": "5b4xUPdS8nhbxqBVMS2mfzAQsfaC74vYoKX4dwGeGZXsodaafR5Ph8BbWUrY4gXiGetSBK9mB1Y1cyqckBR6fAVS",
  "key27": "5ZvBvFyhhtUby7q1CfsfXiTTh6Whr2foFf35zhzdsNXrEfirxsx3n8f56n2exssJPVkK6rmXZCAbKeCGtEjNu7HX",
  "key28": "3cp5FC4DhEXiLcb17iEN4y26bwrvodj18zPBanQ9ioUEH7rW3WxjASXkiQWMeDtnpDJUKVbrH469HG93p5mjLY6R",
  "key29": "5u8f7Fz4AJeC7pvxfYkp7N5oZv1Z4WD9X6bfMCvN5VrZdwTXWuxz9BypqBNfm9zwsaCXFX3VVepDJxKt8HaEbgho",
  "key30": "3e1AZk6z7g15CkQFamjLdYGcW93KpzkxoUSV2t1rH1LMHMzmduVQXQ8FVi7u7TwRVn5WjDR9pEyZosvkgSs51xVo",
  "key31": "4oj6gx5WM6HJ8n8Dg8gx22yKbw7z5oE7hfngUbbGrFZfz6JafQMZecg7KUUn8Tq5xbSisXXq2PtR896kzL6ZeP79",
  "key32": "3XYzWFHpXMs9QMGUnV4nTfUWqDkMe2NBVZYBaNik66ivZJtwTe25iN1jwz6VYobuLKgVnpAuoSEy9GVgGRnphP3Z",
  "key33": "2FBvkpt9UTMsEakFZpopFBbuiN3BK8Gdj7tM9Y9CaNcsNL4vEJ8Vherztj6yL2wxkVvYgyqgYoEPoEzZ2ccm4gsb",
  "key34": "4NWC7m3JxbYdWyJFWyNbeprMmv7eMXm32iKXQz7vniJo3v5EsZBtuX8VLApCq3wUHyq3thMQxEsEipB8CxfjxoCZ",
  "key35": "419qrrtcsnd1eJWvjq4EcMUsofC54x4p54YuTMuB3b2hZD5BWaexLCwEvMTWRsfYK3gth7LFeK6GXYy6z5q5iYxP",
  "key36": "3UCHPWc1vicj8wqgbdXP8aJ7sBiEGo4nEYDq9HEND1aZPW9FppT12oPnSKyMENDKEykwMHNQw1dK29roKZGcDc5a",
  "key37": "WiRVB1kUhuX8uy821BuL6MXXetEXe9VnUrEvYy8PTHzqBcu4r79bKWLkGQdJMUE7Y67bCFhuN6EYyGx2UVkyFRf",
  "key38": "2PnsVoF9G5bzCwpT2woPHuMqzNPJf2fpgh6eNQRDD5ASz6n8bZWTq3a71cuVoNX7UonE6PzpQWex3d2TGc2Rxz8Q",
  "key39": "386VqvqqMHGqnmgKmsSQ7AfP153XE9UQEBepLddPkxGTuus7ZbTd4RhavgL7bfs1zxn4oLD52Rc9LNciy2HPqFFM",
  "key40": "Af24bd4YeqPTHpYwL1AEPXjoR7bWiQyaVXZ6vcTDLVnxrDDXd2fESoEjDahy2SFB7zkTsJq9gsFk7scwp7mf2jH"
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
