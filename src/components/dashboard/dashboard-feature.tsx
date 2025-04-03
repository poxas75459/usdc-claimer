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
    "YnpfHEAJSu3ByB27JrCmZKGPgRvFHTSX1Yu8RDqPD2u93JwvJx4kiUwC9yGxH1aUncbzZxcC2Hp3eZZxnQuUGqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4buAa5Nji2xMyy4NkQkXmbge6RNU8c51bVR1k5AFdUTyxuBEXKEiptQgwn1ghzqmXb6RWgGxb6a7GBQcGwtghFP2",
  "key1": "5hArsE1Y2UvjjQMQppvje8NBV9yDz6mbxSzrHQ37RsxEVwmvVCdxC3sALhmgcgqufodXsKDkDvQH1te2fTweyeGZ",
  "key2": "ReaRr89FnNdAd8KnsU9pMJ2XMkMePnYEZcYCAyHQP3gYeJU3Wm5HgpV6wEaV1pKRtxtQTz1LjzfK4tk85tjHqT3",
  "key3": "3BKrTpSemUhvZU4hRfyDVUGKRVUEvYpTWvCoPh8Au5me2SHEnm3d9dzXcHiDvibAy8mMFZkkUYsvySfpuDwrtcxK",
  "key4": "EFRmgztS5fjdB7ebsG1Kywrjm9NKzT9QEH6e3uv4RFJxuabYuPyr4UQBUS6HiZUqpnP6AEwgTqZfcYf47ztMC97",
  "key5": "2i5zVtce7w17GtGh8cLYVAsRye2uzQc6o5c2woaKMkry2Q3ZjxBiwXigUgUL8NwZZ8jieLxRYY3Hf1HoYqHuBAMZ",
  "key6": "tNt5TrMcSGocy2qTH7nxJ7TCbGQvxHmem6CgYYFD8uQ1wLmhRwsqr5GbanNwQ1amxZW5dqMueG6A6jLZ5fjUa9y",
  "key7": "5YCJXC2aosRgHKdpfhFXy6UsBvZFJ7RSTWT5PfdswX4EGytizzTtiNexWQ3hgpZiNiRvwBPryM2gnCCDkxUgw2tX",
  "key8": "2rv44a9nMqS38NsQqh5MmVSJBuGigN2VQMPfGgsQswRnqSjrgNJseCZiSHh8AADWHjxHixMBq2EZAzqF8aSriRG2",
  "key9": "3r4CGwFFV55WPmHEWfEcMUksx6yh87X6rH9dvVR9eTnangwWiYmcqnLzY49UADHPk7WdHMCNq1fTaopty9UX7bxU",
  "key10": "5YatCa7DfZTCR8avMuQJj96G8GoxD9ZZdCcT7fkYAeLhCw6h1iFEH4zdwQXM7Xm8dEi32WUYVpAMjAnckFPJYW7E",
  "key11": "2vueBykVa1gkjb2pWhmmavzrcXYsMVKaNyCcVKxdL2LrEYkW9xE2jh7nJxXgX1qoUzFK9gJvR1TkBTaVAVTL1fFH",
  "key12": "2pGgLGPwmPnNESLxtpRzq5T7ADXc5h6wRm2Mrtr9oQwx1qdC9GESDfzyQdnvoPAbDgQ5kPLzWG8L1wgBzxAGvA8Q",
  "key13": "7uYCHVBg8LkyxsPjnpjyQJntjcu8W3qriSe52FuxpRPzy6pDV5wK38FLBrgH4u3hSG7dK1qP7wDmaU5awJBvRNQ",
  "key14": "DsSLQXWRw8WdvGy4PsH7kAAVaMYGbhu3AoyfwfC7j4euPjiz1ZMPSnwMaRyszX26L56Pc5MjUccHhuqnjXFmrmg",
  "key15": "5utHeu9Z3GLVTbymNircVQt9Jq2aUjd2PhkPR8b5g13mvypcc9SJLE6YU1PNMDGX4Zjww1FAHZMLq3KskQ2zMDSH",
  "key16": "oppaarLK4vRhA9BZATPBZspDMvQq9hnuEoXsphZrvmxdta79C24Hq98bTF61JaFzxXCjf89dkUxXcY4An5urR8W",
  "key17": "3BhQc8J318v4aKZstVd6yFKDDEdsv4nDgeGdRxaPiS991UcCeP2gpq5mfLKUTN9F7sg4PupGFEZwna9gZP93QhH7",
  "key18": "39fYuxh5tskwTH9HTj5iuSmTM9BqQ5xGxAWSyahb1YNnYYEKF1NnFobn1sFffMKwJtH6ayZEzEWzbcodLokwA9LX",
  "key19": "41TQ6kx65fWAvGEH6AgM1dEAVy6R7a9YgjwMzq6CiRpKKHasHLFmhQpXA4mpVk1JWxKqqYXm4AqQD9YD4wP4BKAN",
  "key20": "5oXWZFnVbQMfr3TXNsVV5AVfAeCF5bscHNbBdhgmpA3AUsJvsdiC6RH5KQiQgpJydxZmfpkUiyVpwmeJTTh1J13T",
  "key21": "2v7ye43EjQnciRshqZdEGguvcSVjVyjuDgDtrbmLQKFtp3fWPf413n7EUZso1U1u33XBPXp3H6gLqXFntGazXune",
  "key22": "3sCcynTkdTVPVRc7rEAwAAPdLbpNEHt2oAPcokxdtLvDyudR7HR1nhPhYwYchhmNhMGVeXw16rUcPkFeCCZKXNA5",
  "key23": "S5txd8b6qkQH1T6guAjAt7yG57c5u7RJ5WSDhvHytQbXytPqcZ2dbwkuXDoZkqiAuNrTBX4iQhYxsK3SobaLhut",
  "key24": "63Hdo7QXMLLUQ7G2AnVSR7QBxXsknhjmjpx8uE3vr5m1wRJWUCjyXjyi7gUvprSfG9M445uHimuLxiCpLiAVxwzA",
  "key25": "5gc9aYAXphm27kWrEpCufPErPJYrAbJdKAhd9hrhedC1tvd7Nx1XaU5t9aC9UA7rGTbxGULD5ixcaWu8zLNZCQsT",
  "key26": "oZBfdgN1pW8zhuNKAQzTGuwLf59oWz7dB5mLEauHN6HqiyEYt5hPyS7XsMPP9zmBKFx5BUij4TzypAC1zMRQKCa",
  "key27": "5oSbqntU3KPess2nCK8vyTMo8XAYEQoYtuhup6b35EJ7mwPYsBQQBtrc7URmsjRavrrcmvBPV4emgRdDFpNTMxPX",
  "key28": "4ioxAsYqf2jjPnqq7Ys193yreTpX34xFqD8JEtuKURVecB34V8eXm4iNsCq9zXhgYNQGqzkcvoikQLKZzDezahf8",
  "key29": "5iHbpqnzSeahbF89LX1Lns2yKeXRaBimSPc6GPx7f8g1LnJMd3RBupph6WiFwHg4aWionGGt84KHgB8Mqoc54Eg4",
  "key30": "2AXP3pMQTzL8nhSQYCiQrDsPRDDw1xvFQu52AarMuRUYsYuUnweiFRjCm2VkhMkF42gscyebts4dbBzDh7YXXhaX",
  "key31": "29PfB69us7ZwDGzkgtgVdercNXdtKHgbEQ15uL1Bc6SMb8Qw7jhnFqZrd8NK7y8MBVsRjD6VPH6AixzJKWTY2m86",
  "key32": "5iqPg6LeZHsZZ1G6dykMJjiu2UHK1QGcSBArhDagWzWpU2M5vuwCw2pvAExM4xBsNJSwTjicksxJVVY8FNZgNuBh",
  "key33": "Tpr44HNRwz9nzXG8JuXp4tzscPscrVd7Njc83mG3RmtFFWVp4K9uTy7osB2eGdgeaYKmEPRcyUct9L84Nkcbq6f",
  "key34": "2dgmSpd4HsvkiyK84iH3Va6DfmA53pUqTtZzMpinvz2N2qTiqcdoFcVQX4zKBjzbpJBDHaoKJo3R3x2jiFYrBapL",
  "key35": "48W3apxM8MQQfrApcYq54KKoL4rnyNM6rfUZqFG3psoaAoMhTohBEmkT1bdNyicpuWfTNZxA3PAZYAS9WkpsoYD9",
  "key36": "NVr9UNVapuzaqHJCXErPZuspHkT2ZW4fuBrKCvov3kzS87mEwJjubEV1xv2MkvRSAHZXVG6kpnoumhppACXUjaW",
  "key37": "4KyRhozTuwMZ4YN7WdZux3WWXTYwXNwvSJnnUAbUwm2oGtSxYZZXUL6A18qiaovKHRYN1ZsRCTGyn1u9gjuj1kFM",
  "key38": "2wPHdj5GsgBPbUitENKTWpxrMphWrz2p1PFABX27YrqStvyk6ZJcKrvxrrZmQ9j3gafxecetdv4ZuL12gumhL3o1",
  "key39": "4NdRaAgduB18TqzuXkJZUz2NwWhENTC8LwsNQE2DfKzC1aLr6aJYS8D8pXAvpBnodwmFhNWRN6fPAdevQWtSgjf",
  "key40": "33JazeKDX3cgzasVE3HZ6GVBAr7eB3FBBG2MVhyUCPKX9STkpBsUAEzY9JRfmrbLPFojjkohq1nrjpAX7cax8DF1",
  "key41": "5YG2BLtxYYYbcEj86ffsRCX1t3Earyq79vPZVrendQ7tFmd8A2JiAmnhuDuEKb1F9nQWxnf7en9cRMNgNeahfsM6",
  "key42": "4BebjbZqr5dqZ3EFTYjhvQAeFgbMKcgrWj2Nq1vdY3h3ip1CYXVakz6gixcjsJKA3ue3tNd2CqtA61oepw3RyivJ",
  "key43": "22pzYCnvF246kMsA1WcGAh6ugtyK7hX3nieMS8H6owPfDUX1ZCDRXnPfNJFpm7Ez2BAPorVMTCMTBtUR5EHTVZmz",
  "key44": "3kc4f797ista6NBU7eGw9H6TyfVT8JP5VDFs9h4LQXYJGjgesnSwqKj2LjwrQFVRk3giothshiWmFXJRAJ7dgFMe",
  "key45": "g1YuM32HCPE8ZdRiabav8oVi8C2yjzLzbPXF7WynHYM8SHpgSfxrKPkDbJq3o1gPh98x9EUwkGNSTArtGmsUNi5",
  "key46": "4phwWBeT8QmFd7jKkMArpeCaGBx4uwT7e1PuHiocWcSAMkjzEGUSygjfgBbtc7gZHxetUnYNU1zndC5PbBPPjD4s",
  "key47": "5MgASz6ZkeWaSDq9xMJTPUeLdEXtgtJzVq3WsUMv7kYsrwMpcAvMyPJA4KF5vY5rHX3GLohu6aDai1NZnkWPGUfn",
  "key48": "VvMGcBcavy3txcQd5oD3tbrGWaassW5KXpZRCz2KU16b6Z3mKtXfeJf3cE62Wa7pcXKoJkfHwy6Gk2Bt2iMYqMv"
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
