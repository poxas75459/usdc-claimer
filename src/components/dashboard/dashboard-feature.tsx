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
    "3AXWm56r1kPUoqw6tquDpMXnNcYCUsBkq32xTnePT9ztqbGtTn9XTupJVM72x2poQBmZqvyA9LrrhMovVoP4PPdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31B9Tdz731kaQQZDmD9zG2SNCujGnqDScHSi8eNYqYytgEtmvnL6huDCaW96EDXKzMk6Gw39dTCubafWWeb1p45H",
  "key1": "55omSWVLt8BNjnkN8eoypw33TH3166g8S4xwczELWY3Lx6DaT3MTKZe7GEgbnMRCs73GrP4U6K4Mkc9H9RDtRZ78",
  "key2": "4tRc9RCVm8woyMiQpAV2goMhSbg6wCeGUB4woXVvzvhJqBnTkrNrFhfKxckGGUm1fTLCmmdx69a82ADBXtaFChSA",
  "key3": "JDENPwdBcRXimdZzaizrKtM7RLnE5KGa1dRMJfNf1bxUGJuNLo5Ht7MP6MeA2mLMdb7hAtQTCNpVqmwEDxYxBEc",
  "key4": "2YhW6AH7PWBBFzNdkwSAfW6rjR7npfKY9zmBZdK2dZaW38s7zbs5uuzWeG9922ungbQyaRM2EARTNhn34KF7gn88",
  "key5": "39ozYLDHbSRXbFRgMTfEG8d3LEs8Bfm4qrH6pbfEX3csmQ7HF1ebuyU1KqYWmf8yqVWsVvaxQTwXqqkk8pPpNj23",
  "key6": "ppkBJVjR4bKNUrqNaErTvWbdftP2axRmZaesfQ2oSsxm7q4aZXfciktYrw9VT8gmh2KEyDTFbtEorb1QgQ1Bh6a",
  "key7": "3WrAPx5yZFCxE9AgW451iPZUpcVqSTjLY7ZHUHfqpMHUzb7sWwwZYV7DnHnEPM1HSK4RQkAieBJNvgUC2qyeVTKd",
  "key8": "4YjEwHBhZt2rTZBjLs87wL3XKVp7FtTnYocFu5f5v4v4Uo9M2HTgXsfe59PhSYjCzrx1QJ8KgjdKWZpqd1NLwWi5",
  "key9": "2ShoKM51T7FmjUqaZbRFVbAzKXwqbC117icvSGGcSkM4k2YoFcyYPHwPqqpfBSzAq1kqQZ4XDPrvL6g7hkra8EYB",
  "key10": "2pupK98HX8429Nhj9HFvd7Gf8jsZmnSp3s9Q3rEweXSDcAZg912rirgGjozRtjUapckfjndhErxLAU4jRDujCh5M",
  "key11": "3dTuvUWi39atCBW2SBwyScxBjtsHCHKm4mtEPK6W6nQ6ducF5HDanNncRrK47QJykgwR2fyyShAA55wAX9U426sC",
  "key12": "381C6gyejCTTGbPJSwr11BdBhgBThAN6S1Qv3qWPpTdviMWjNdiVrbcV8M2nWVvnAmmzfCmiLDJAgR8kazn4AEvA",
  "key13": "2yhuveHyaQMiDaSHFTFXNKtogZdoPhxVdebntRuMcPLBm4NhGiB7TrngAogFyUQh59McEDCmyCencAhppkTuLyVR",
  "key14": "5JYn7iMAFZSB2ggPHSD6fsrdAdmemM7qGnkCmEEpmViUYqMYKncQq9YuWgP4J1dhALfyQzdwmHmoSC1Hkn5Lm6TF",
  "key15": "2AUQsQZmcoTPkyhE8gfMcv7wug4VwYUWLmaujzFEEFDtAS7GkBjf5j8pLMskMX6vkF3NsvJucGyRpoFLsKcRKhU5",
  "key16": "5Tb2shFZK7JFrbXkiVuaEUnvn5cRXURLs5WTBWZBYZr8aPpTwr5ebuuzXyCx71durXrDRdSQxMAc7U9YJf3KWgTV",
  "key17": "4tKQECyvqm4WdJ2zcmTT5C3MbCxtRnQSbKXbFuJ7RsPDhJJgpM786WLE9Y8LidAhebFPWUJucN87N5bCQ8U3Yw7b",
  "key18": "3rSjptqcAYKmruTWFZRfrbH9qdgtn4J9utsuYXHVqjAT9jzo4qiK8ViaxkXbUZXSC8yu6wySdVvpiho2AemWSzxP",
  "key19": "PdTFiGoknegARNHoWUzgMhrJXfmvBX1a8TgYQ2vMXR7ahkt7WBorLwjgXvUJx8ruaXpXentNxBVTyqHDh7b6w2w",
  "key20": "tFj992FfKL5o7jTDNWHC4Q7NSVhEZVaQ23AvUSM6zjAsbzX4eA1YeZhihZhcYK2ChDutMqvS6KctWzYD2KqxBfe",
  "key21": "3UGiAVVMQDYAC2DqBwrGas6vjxt4gvXMUTwh63Hszsw7WZ3iZm4kVkTobRXzgzQeatw8BpCKUUd8C8uhVG2EJJox",
  "key22": "4Ax12RDyg6PDcdTcEbuMjaCaYB1rpXtcTz11TLxcbVGuRfWcDQFMv3q1ysMoMY3zGiSiZy9RL5WPWXQ93XcYg52K",
  "key23": "24uFbT6gPh5z3gtYjbK1R6TiR6VZuyZ3t2Rp1tXx8UiQ9HU2crr5wQUjws8PwphAXFRJXTiFL1urSdgMSL83NetJ",
  "key24": "5nXkkbZzxnpNK15ybhGy6vxQBVJiUAnEoLrrhVPP9XeNBD8KEfvQrnfdnozEvPiHd5ZGGB8iVBRh4DPRFb14CePp",
  "key25": "5U4TswLRWaasJ1MDKY4REWZ6jMRAare1G2ibdooPWbyAHVqrjkQRwS6KNeXNkLHFQ7SJZuCdkRzYqgHFbY2PbV4q",
  "key26": "63HkoTduwdX4ufBT5RLgS4JrE7Ma4TcNunLGNv7jUfj7JCt3M4RA5MA1hpbujt5YN49xFALdNuk1kvcdTACbu6xm",
  "key27": "3kY4KUAx5jXCV3uHVdjsPQ4xZBmPwLfzzpitmjXeHPrinbPeqbfUFcgN1vR4pL6brSGZjGweQHvFveJhN1XgurQ8",
  "key28": "3vySHovhQAJZPyq1URZd9ZwssyJRULE5Et1pGpdW8yP4GPpxcA1eGRjR7AhBrFCZHSDxvojJekLyRxGEavCRgXXf",
  "key29": "21K9ni4MVxomsQ6pJMPqijiTskHLcVFNnUrsa9UQZ76nRPkjk4LYakEjnoX1MSpXoGS33YEPNc79DAynpf1VXB63",
  "key30": "282GHVwbCqGkogk6PnGCmFsvZeFYmqrZbWeEsj1L41Xh56xkH16eMSKPceKarZJ3zhhvPdh5RiVrSnsqy75UWy7v",
  "key31": "2KiH25YfxiNxzSqtH93rX3BP4CpK8b16EmsKwpbyqQbn8AiS53ge7gVAFPCXhahTzUkhYtv2TsCEf4KHiJ3MUoXJ",
  "key32": "ibnx3y3yzQaHysnh6LkcC9jLKVJNsxLU7rsTmcKcxEmvxciMRC8mTmbwrfforJL7Qcx271EyrRwxhBG8FLuQ1Ru",
  "key33": "4jLzePQYoM3yWC6jUZTZqXt4b1PwTwyXzGtcjhWso2U5cd1PxjENRQEK1qRq2GwL5R5wzdtmen97eVcEGDRvkVmY",
  "key34": "2gWKPVTKMDmnjnonCNqAiAs1NsnrcKGN3V1edvqrTaZbAnkDwuwkkFNs1SbVmeJvCsM7Rp4nSz6Zu6uep89dwKTZ",
  "key35": "5uQCDALD7ixyXBxgwEhmkBSHcEvDgTy426podJ6wkik7Yz8RrWsfqybcwjHYQJayGPXcngD42EHiura5MTRhRDJm",
  "key36": "GTDRXSds4MWJsUL8HHLkMsiRT5C8EQvYoT6XX65Advih6bEsPKsJEDRh3aMib5wYjLXD53ftVbJyRMv1BjzJ1uW",
  "key37": "evSosJbNojKobL4wMqJKzFP8Pj9PeeF8VqfnSaZxA332XmYZWnwTRRCanrHyx8xL7oJBEhP8mAfZpgoijGPkdMr",
  "key38": "eQ5CGo37F3DF8z4j2qQAnxPhuweJiAT5oasBHDWAPfUT2CeuXf5rxurHtZmGjkAdj4kJYzCMWyEAfx7KEDxcwvi",
  "key39": "CsiGiRVvT7zsumbg2NUH3Zxexs7wUtFdzBbPmJvUKowzx3s6tt2K9oZrUS5Eke2osbwkErAhyquhCK2iwU6eQUj",
  "key40": "5BMApSHiEbwmcdexUsFeEtCyBNcqLnkAS8S1cbz8GJLEzsscFxS42g5LCyiPiYHpPBnKXRNp4PjTHQeTZVXZP7D4",
  "key41": "XAD7BDq7gu1uUMyqK8xxUDejaYF8eRf9uQsjC2BrqZR9MwPdXbg3UerNmCRahpQv8u9AE4eiL6xxLDCLAeW9PjA",
  "key42": "3TNKNPodAoq88yPz6W3duyC7jPDYeVheKdEz95iEApxpfNDYW61hwpiH7kbqemXt9888FTjL3kVug9zbdgPYEijw",
  "key43": "iQ1WJPF7pWK2QMbotfa2ayYu4VDfPPFfD4S4kwyBofcoptvERUA5yuDqTeLDdSGVjXV6r1kH9sCjTkVZGogVZms",
  "key44": "38BJW5cnTXqoa1f9NcXApQogZKr8nPoq9XamfUGNfyPgDcMDjX5dRqXrCUmDvgVVH9h7EgoR3vKinHUMVjLT6ycC",
  "key45": "3yTFg1kku86SRVt4kr3sT16bMEtQFKzBuvDGyN3PtCmhx4t8F95JkG8p89ZnzvhxwHEkmQ11R5kHu89FHZb8DXzq",
  "key46": "c8U1umaNjQzhmLxUcyPCxkBh4HCxGPvHZsefbFWRSSrq3KnuEucARV8RCoYhA8QLCMKWVrCBfBWznsN3gA7kd6Z"
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
