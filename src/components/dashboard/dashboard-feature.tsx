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
    "4wG8cuPBZTjTCLurV4v95miEPxGBSrNBNXX7Ksoy7x9wUhRJPR9Zt4UqFcJ6Dr7Yrf9BHoiCvRbMJJS4u6m4YSFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65RmA2CHwQfkLJWWtth3P7A5LnMULLFQERicYraA7BaFHbUSBeKYcUsprXQNaJgiHAG9hF8VVkdHifeF4UQJY5Ld",
  "key1": "PvARKnvLqWgaHoDBQQu5aUQc84fRX87w3WVtBJ3mhu9hyvnCrKGrVUGaCeVK9vvsxjkrfx1iANueB2sKoWf3rLB",
  "key2": "4c42X5tpnk4YgxUoxSbDg52FedMAw6uCnACmNRYV2i6CQRMHCmsyCDPNMh44JRdTgFQPfy8TRW5MeHBCo5osERY3",
  "key3": "5G1MV52QvkVAAZDGoY48aKPG5EQswSJctxkF83nnCo97nb8o8dsL43959qMdZf28Qdk8BkeUjixoxgPq1LrfGfNK",
  "key4": "iyJgVZbwu2HnovA53vHAMmKx14itJMBAchG64wBKeXTPakPbYGP2N3CQD7EejGudzdReCpyhoHxkUkaUTvZ9k8s",
  "key5": "4YG9ZbyzqysTRevz9V2JmUEy1yroSTxdte5pWHVBx96TsR8LFS8znpYEJzkVXjeWdsUvQFhZCtnQWTFUGkSq3gF6",
  "key6": "4vrjQvNEJqm6VNM3fSbFFgWuPwLfVACHHZ4iBUVugzdoVmrCV2NBLTDYzZu5Laep5DKzy15NCnKLqCvuqyVWnL8D",
  "key7": "4dLJWa89E4HnKFqUto9G2DVZ38ahqfQZtVZrxzsdnz4TUp1JYYy6tW9fGPgQFWBPsW9wCcAUgViFiZRj342RotHM",
  "key8": "3CkvUxtUPMh1Z19ApVJTatRxZx1jDRBZg8WYWLXMJnFnqaoXrCAzUinG9vqWhVpSn5vMpK4c7LEAwkn6xddFJ4pM",
  "key9": "2vPuzrGYRz16UczR6W3FVoRgvhSyYTvdudsSk19aFysJkcsi58YsduuVx5V71No9tcWem5proDbLvAWLakhMvSMj",
  "key10": "64j3y6Qhq3gDj6Try7BswAtPNL5FKqpZushRjctDdpdMpj54izq2mzfziVjvZ21UzpXZrJuewGYKhZDWafSHhS42",
  "key11": "2RZKH7kxQQqRoTAXC63Q3CQ84HZUTPGdkndux5jUzmk4jYacH1h518PeUU9otQevo2dWefptBzoX2KNC8wLXHbDp",
  "key12": "38Fi3w6BranZxmfec8jw232yXNFmeh9vSsGZWxRJNfYqrz9DBwGpvR3B3zubBPLxxpnyt7X7RYUqVhgUsJNDL61y",
  "key13": "41iaS7mNopkX8STFqsZzKuqhdH5PdsYZSzh8cuLRwL8A9VSYkFTcxCmqcwBVvozp5xSN4gkq1XTqorbxNb97Rbzb",
  "key14": "2Qv4GBi9aq1CE81zNmWzByLH5iwijCAs25KGNM8t983nNyNMJiqKMkm6X7ZUFf7vQe6gU8sinmnh5oENiPSBnZpQ",
  "key15": "53xj2AWDZ1gNfYV1VsHqAEvHZQ4Yez3r877pD7v7Dn4aWALLdHGa7S8rLhMDARvpGFgXF39zAMD91k726A1hpDyA",
  "key16": "4ZRNVYhCkakKoswnQVgkaKrPKtTfu1FrJjA699nWGLKn6V1ebT71ZAGp4px6KbSLUgZwZKAz4PcUy5R2zQgXnY6o",
  "key17": "5RQiMPuapQjPVMqFvLVgWYeEZkJd8zQbcMqU5KZSQuah6wEfvVDdmvabe2b8Mjki9UeoTJ5JXkTJwMa6P29Lf57j",
  "key18": "2oFBSAmvWEgJbXDKfB9CQsZhStQ1Pvq2J7btcQNHywoEvY8JHxpVvFVzjfMPn9pyN2HYf7Q8Htaytxo67CDQjHhp",
  "key19": "5vKYsmrQf9ycoLWWy5wmETbbvWhiH3sGzsfsQ8oW6U9h3H9ozDM2peMwKoXU1cL11TYdnSsMncVBdDfMgWrFRjtb",
  "key20": "5DjAfquRwZGeWkMgmS4Vn9xA2eqaCEmxdjssmLEZe1fUvKQsdoLmXpqFJX5mKmivcVdstNy16f7y1JTeEHkfeq97",
  "key21": "3jja88on2Vd25EEaWmunieYb7R7wC8KUQ2oQxUMdjF6EEYatPeYaU91qSXnuWmEZGWeXAjEqFM14nvjBjyRXzsD1",
  "key22": "3LJpc4oskoB6LH6xLUV9XpC3CibWLwPoPmU11stCymsjBU41JB9Y43BMXYK87HHKhfLPnJeodCpyX3bGp61qMSto",
  "key23": "3m2DkH5v55yrcRwemmaCLJJT4Eb6NoKKhxfb5SHLtGrzMmQn4QqdyDrB18vincPd4fmZwrrtoK6nXfGkeiCzmJJc",
  "key24": "2QzoDyFNar4sMGLZn2ZPesszs9qgo7U7Zjj5FTzUMRio9Jy679vyfEHPNc4LyVVPSwm8KF4u7HQFisECErTNuo2E",
  "key25": "4Qz8JhCjbXXvtmmVkU3pnMsTNNuEnnvRjX9bCJQxPEE7FwV86FBXSx2UdURBnkVvLq3Yk7p1TgVXnM4ADQfpwiWy",
  "key26": "5MtNqufFVmGG48kCA4BnarSDs16ZP8qQMCNcDrG88SLNRyTcKfSFYt1zz9GH6pTcLn4dsKTFig8j9ASreBTN7aH4",
  "key27": "4tVDcFwVrkd2HUfeJbGTqAvG7CWKyzp2Fjn8puT7W7GUUrJmVxeRydf2EzT5BbBEy5cNvSMCqaehzW6PQSAseVNc",
  "key28": "2qZdk7Fq2FZJMZBAvroaeGVNtGcMrLvsLHH1dVdqbdpe3bTxb7YBcEqqPJj4uXGM5ec7f8jUxPjsVQceATGwUPkd",
  "key29": "2geQF3yqRMGwX12Rrafe2C5jV9YMk34hB9UwuxJSEuoriK4B4SFBnKoTwSbtGRjteZptqhfLshnWjaZGjKyQdTPD",
  "key30": "56SoYQ5oYDzVnhQU7FfkB97vApSdc6vhVPcbTAExHD2iQdJQWTPq7wPkq2JJKpLzCLuErvyTExPm5bSd3JVSAaqA",
  "key31": "4Mg67SdeC15DEsi3RkT6EqmiQieNyDQYAm4Zg4PNF78EGLxyAi6JgJLp2WRiZfT6ymEjQBCAKQFVPVHkgaUF1RB",
  "key32": "22MsrztJ7tbtW2eZNEd8i2azx3CNW4xG3fdZqxa26gXfwFPVhPT7MkPq1BCWxN5cPYxP46E4AJLRLjvL4Fd54uLY",
  "key33": "4zfGae5R6ZcvhcU9VebhaJXyEwfXkuDHxEf8vaReJRg6JNnYyLchsH6pWmKAkQezW8aFmEiNozhi97v6syJ1g3Zw",
  "key34": "5WSQwk5K4KMGj7x4ziinMRvvH2SFX3qACzpr41byf1fJ5B9b4g5RAA2ZVwcUkEkgxXjBg1biPyESAcp42zgFS1XR",
  "key35": "5Kn69tAzG37zxYEtfEAJ8cQ5Z2raXmoD7vWKhPbPV5gHmYjFn6nDck5aaq7eVznbyeyajPuRLR8JvZaswzBg3U7W",
  "key36": "22QURBektu43a1cqL8fw3PQJms324SMksuuH2xZERnXv9JNN1nTyCK6cx5DqJFf3P32ynPswvGvtUaZDejUQd2wT",
  "key37": "2hoJrqMLB9dy7zm1tSZWwKgbU9v7Wgt2hBHYmWvXBnYsM8vpnwzhuxfJw2qzc22D7LWwLrWc8qeBq8vkYZRk6xDp",
  "key38": "iSd1jZRs1nXV6kHKGhWmh1iAUtahNsoQxK3vGuumqZX2EYtTPDDgHfcVWEaccAE9Cs2iucWfWWMdLdasYUpYibf",
  "key39": "3zDF3unhfbL3VAsHs7UsMENHWC4Hm74aHuGaD23imFoDRdLpC93KK9YY87Re2tWQ5bgQejJFon7MHUBQYwG3raoz",
  "key40": "T8oY7gdk6fBX7hxsg4YgvWDZi4aVNDzRyaoFw7eXWDj52DQZzFEvqmBUa98KT6dwoAiHTUWrUFU3xhm1AsbXbx2",
  "key41": "5pSNDz79R6NLFA5rjNkC7APWApXJADMm9CmNMY27LVG29wT1TrXBwxjYAWkJEmsMpYGKrHpxDJioDd6Qq5ivTMz",
  "key42": "4ESoXkuX9Gc2fy3DFetEZixYyTyZgxMW53zMevmBFxkEx4BZsrLyw8AWu6jWVMp4bUmAFu28tE3jEgNfR99pDa3K",
  "key43": "2Z14SAYWqu8SjbAmrckYpuV53mD3aVuMTkfLWuHS7NKEz58Q9N57ayS7Tkea7brgXMXdyxwrJjXq8ojcUEi5hid7",
  "key44": "2AbE6GyfdugkiB7t9ULsCARt9Be7ybZH8boRVBMrV7FAfFuFJ34GRtKmHDp8NTMBfdHmckVpLoSnMKPHnB3KNWJG",
  "key45": "3NyJc829jZGCBu9V4zQD1A3oMRxFSNJtEeAtNrxKrqjCZ8VyQgMawaMVxF3iwS21wP5i7de8hgagXTMo42HnUV1N",
  "key46": "2dmHx9RNzDFtSjpcczmhqWAyJ57YEpFoN4oc8oQ5Kba1GfkRPxR26WW2WqiHRstWVwRhpdgv6ruECyCBkYB3xgwy",
  "key47": "5wBgfHY4Gd315SxStjUse53SUwu9ihFtkQxShxjWM7LYz4Nrzr4b1V34VusL3hDxudZkt6gpsVy8yz5py4cQLbjg",
  "key48": "KZW2Cct1qne4Txc9iXvY1Q61rEJpyLA8rx6jvTQ3fbH6GanDrKFhCkmfPMrvbeBpso7jxnkUz5U1fAAB9vaymUX",
  "key49": "5M2WMkHaLxtfcDPducmDSsTsqnMPHhGjyRz4Kek8pJGfinpoxKhhU118GtP6wML3494vFBUJH3cRLfrvBjorGTRH"
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
