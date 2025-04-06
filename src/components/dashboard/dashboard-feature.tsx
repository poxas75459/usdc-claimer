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
    "3oXmixKMm4GVkCC7jShRUHoDkTFoxHt7UggToAUfzZVoR19fF7Y4ySR5iqoNADS8wvEBTQir4vFPPvJUHAxaVSEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22UE73ZPd6owVz4NhvdmDhAPyncpBFSijxozE3zC1SKLB87ZQLdiUf8t2Rv6UDGb2HaDid752zHwywg5wxP9KkoQ",
  "key1": "i6BLHB5MjKpEGjPnQ84V77rqbqAwUeVPzzTz6nTM24BrZMw3D9EL5PLwgQP8aLDnBKJUXwqhTkVFLCQ2sTU5hQR",
  "key2": "3dhgctksYimksfbfTJwyspCK1aUTEdhYXk2qEMq4uatp6hftov54TB9hXt4kX1nJifx2D7bNPu2izYgTyQXdDjQb",
  "key3": "34snVGn6ywr7HTeChu8Jd8tLTDTpDzJuetL3farhwMyW3READ4yPi9JFFQd5xnSiBi2PNxvN2jwGZ8sKpiDK5KFP",
  "key4": "3rymGh2DJCP8kYMQvcqBc2FajCTshYh6hx7hDtA1kV8Yqkvk8XNHSBQowPEaBUy6X25WghGFri1kr7db37eJi1qV",
  "key5": "5pgUyyKXsun1sfe6mmdS5FghCk5j3VgfW3JkabeLFbgj4ag3zY3nhg3aBmHzb13Z1TgwAxCf7MMkoFs6Ddt4MH9P",
  "key6": "3P5JvDtMtf9poikj11g7P6riTJrRBNzsmCJEEYQE3PJtfM3zcpSArXs3L7iCepqGDnHJSSQYzPbznByyyiu8DU3g",
  "key7": "Ln225wV1UPTuVzULZfsZDk2ApNX77TRJZcps78dWVzMHWM3wgzXcoVDKy2TxMWYHscK688r6Zm78UBWkzWFGSdA",
  "key8": "4TDb85xaUfGFtnL5T5rZh7wqtncERcL1Beiuk4hAJNJRL8nckfRXmWnzpCDVyqvVCGnd4PCcRUGFYFPa2x4Fdh4c",
  "key9": "22ycJ4uoS4yREs772ddpxiSW7PB5wbNBW52WyCtN3Nq6M8SHeUwEFuLgMQ3jx2e8gPfKgeBUqVFyoByEJRULNCsQ",
  "key10": "t8jLRMrDDViixad5yG8EvyrjFuP2hMwfzZgSYCQvUsFqmS1L91mCQ81TXW4eYU17m2PzeX6jcqGtJpNmCaKVd38",
  "key11": "5wZFXDkKFhxhB8SDZSqE8eu5YBQuvWspq4ewCTCoFfrL5sAVU6V29136vYk5BakB9KWRnyQQKMpDQMt6UpjYWJmf",
  "key12": "8f2Zcw7nGafyMFTDcReRoYrw85y1JvFBBnqZfu6jdhj2LJ8MvaETyn8ZhEoCHkuRhYDeEMqh4LT46ZXUZxbm8zt",
  "key13": "4nGbRJJQvgJ3E7yFc7oHUdhWuME2EjV1hcfbtygJjodjZerfUaCt7mG46yYohhw2BcTYA4bXS4gbMuLdCpGJ9rtU",
  "key14": "3tbCGcTsLAXTGH88rnRyG8qBUZXPqJEGQUkoD8YGBVn5UPhggoJKjENacY5KPooLVNtcWkCSPvWK6kyeLZ1jrgSN",
  "key15": "sJ3Mv9spa8yHJpyD5yJC9BPY1KaMRsXeuVvPUsc27xu6b6nxGmfNeQKsnrChutTGGHeTNN9eL6YawoJnVGoJKqX",
  "key16": "3zSENDX5EFrve8Mx4HXLpMYMH5g6W7MDHyY1VGvuakWuHgRYXEo3UvUz6DDtXkZXwZbBpWHCUkhrt5BofpGSmch4",
  "key17": "24UWZ1x3moLvEETD3Z4h9TZWmgyQusVnKAD61UPNNmpFUiDjCyeXxWnrsMUydc24jXGfWgYKCY8AkCpF139d28fU",
  "key18": "4oFbD5dXjyQCFBUiScTA4iGyoaNUsPxLr4gemRc6nvmyhDsRmzqTXxUuxogpWqs78qvvW73AEZdRfQGEGxNxAP2t",
  "key19": "uhyBokxC9WLtzGPDcNXyMhbssLTvPwPQ9PmfCRjfPWP2vqGn9m5jeZsnWEFP1ec4eaJ3TuFm4ubQHsL5YXSQtLc",
  "key20": "3vFuLQ947kb34psLMmQ82kgrAgMkBY74rMNRW8jF4spMSMYThbDUmBjYAuy5hKtNjoLYGDCt66ReT53EQzFKrU4j",
  "key21": "3P4ovRpFL1zc8pQdkyGDJDf9YgStEh5pweUTFzfmaGDRaVV5TzUznWs4k9Knup32ETfi9TkPcZHTns9VPMs1HA3N",
  "key22": "2NHnRzG7sjMzg24EcCv3RoXbQZEPfRjaNGCwxogWUg9ew35Bby3795QTWd8iiL6HWKd2N8vrFAL5w3Yq4oDPFqof",
  "key23": "5tD5heKntBTpWHcQ2UPyeFGBeWNNxpi5LsnHHddcWYMnNYxiRZnqJodmrjPXBbh1tZCXF76Dk6hWPXKLMgJWMM6P",
  "key24": "62njfiEinzEWZZm7XQdXFxQSHu21nzvJD7K4qCt2kwikycssCZbidPTU37eheKtdzW4hNYPtdHdARgpMayiBHMvr",
  "key25": "4zub7uLCuQNSGVY8eY8sbsJEvvMMapviMPmt65a2h3oYXKQHNk4xxYyaRJoj3Cp4EZkc5jbdbkFyVWBnTMBJkhZm",
  "key26": "2kNs77hR5RNH8VZxRrDS42G4wVfn1DQJndLBL3rovbDCCTZUE7facMDsw7ay6aE7B1cdivshBCTJQyv9X41m1vEG",
  "key27": "2hovaW6KwGb56fuku4PJGmDbSx1b57TTR1QWNXBd5S8LrFiU2QhjEqFy48D6T5hDAzr1bHRk3949JfZkCnbD1hP1",
  "key28": "3X9tR2EyFc3tehUdq6QgdqeUEa5i6LbfRyoWGXe5wWEcv7df7f5oXjkxwQZFeS4WVc2cVABjfs7c1mivHDkAjy8Q",
  "key29": "uoPcUQC93VJLNevU2rPyT7b5WT1m4udr65D6xSpMAjwuNzVVJ2mduCr5WYUHutQJCVSb4YQQxXr63f4pXKqMpx2",
  "key30": "8hrYQR1dW6iTJixCKGqbp65VKVFFVfSQBJXJocoYjFr4FKdTU8oA9Az5CJK7iAA45h8ELHnqTod8fZWs5TqP4md",
  "key31": "3TP1xkyDzb5mYD6bh6qZHT5Hhg2oSFbZjHogiW6qeg5RVJnttJUCDf1QqagJDbpevA2j2GwMUw2fdAdBSd3KhizK",
  "key32": "5yzXwhNCEpuELf9vhQb8qpGbdHJrZqkN9MAPpkjp5qigvpDZdTNiYnqDLL9E6uC3EnQMS13oc56Az3zCd4aqXUK2"
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
