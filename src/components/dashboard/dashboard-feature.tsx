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
    "C5P5ohsgvptPULdoe6LNCqQhNm6AAD8wskno2NWJ61BZvq3EKFCck4U6tjAwHtGH1S6W9fY885wBFHdvrZ2ur43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XgVN23C3KZ1aBDTMSgoXt4SUjbuXq9wWnB5LFRJShSJbDHizYhdQyA6cKnQPuv3vJXzbSR45f6THK6314SqteQC",
  "key1": "5JaJyFPk9thFsctMrNoPN35BjfT3mdeTF68mbbhn4QF5MKgRdPAnwfvJgQGMuMMrUKmYpCdoCHuaWtzEdU8htAsg",
  "key2": "51YiAPmu2ofu45vPAkLAkWgcTBLeFWc7aiXsppxdVbo3zpExdREmvx2f3cPWV9D2yGYcHrGjvvvUGHMz9FQuHfJq",
  "key3": "4nExaM14As1mLU8zeLWkx6HqDrLcnycqTSXGTfUrZak3YR1qMXaM2BeqibjBZfBoVgBhoSTNfLq8eAKGDTMNQrTH",
  "key4": "5XL1YQuG5NepnD23mBWfNdGLLWVtPNpeS2zS3tVH38pAtwvefCXvUBY4abNKwQLNvsjzzRACypSUD6NjEt42vxxG",
  "key5": "4fDrBFxqkipQ9HU3raYpzk5kKfvz5jo4CQYZPfnDuqZTWLgJBTTCwkFHZ9GsEvdrEgdth4ENSUc14NFd1bKpnNwy",
  "key6": "2PtraitvV3V2b4m6s19r4kfBppwekp1FQNxS8sTW9zrTa9UNPbsTwiNoBfgLZmsxK2KdqZEzXCPP18pnVebpAoo2",
  "key7": "5owYhVTyYvdD1apy94CYUHYnq2NpYKAa96V9aknfQk6EK82HUmQGN2vmKLMCvCbdUPWURFXmJMutx5vP7bj4qtEu",
  "key8": "2fSBR76zdbyM3c3K9A5h54x72JkoLzHyh728aKaQSQ9iHLCyMASgpTzBwCFgegoYrTqT6imcyMrXv13cBefzRSUX",
  "key9": "4MWNtY8XkaAxsMTc7ZGZmJAbauJoWbwHDMGBBS6YDgLrFRepBbJ1zhe8fHpct42GQxAJ3bUoxzfRVDajAFBkF81E",
  "key10": "3nmm7Q8XNpSrrbaZfLWqtW4ztAxRujFTbxDW7VgjTxFz9nZa3y11nAFn8PjGEX7zKYrFFy9aAYhd2E7fjwLVcxtG",
  "key11": "2GZqDKQc1HLoWbFdVzHFJyjZCWbmYhEAGUQCKt79bcnTh31WJAusU41f8o54wTDPtbamDs15JtaXpWMsbNGr18Qj",
  "key12": "5gtursW9cBZYwaZ2c1Bsj8TotDRMTGdBzGzgTHTBjmT2cC5b4ntz1Wp8ciHb3QrHcS5vbKaXzGNfFAoaHZhvoH5z",
  "key13": "35YJ3N4ShEq32rjX7EqrmAP213qFBUqK4AuCytWdqrJzF4CQCePeADR27SuzvmFLniZnhBDjUN6JP2uarnZdoBTb",
  "key14": "3H6hFX6Nd6WLEmN5ryKXAYU6sMMxeXruLcnWfhcei97SJu6W5hzbX1Vxp9LKy9gwwyXYeD7QtqxpH7gmM6y5SjZw",
  "key15": "4HrGw5jr6E84briV7MQRu2ex4u4BMUfKBgXUx55QxRK1CGeNJR6NWugCFsLqhoS4YbKBBkgCfdcuuhNf6qdx6cw7",
  "key16": "3S83bGhtcKRUozx9aDHo8XXTCNj4kDTaE34eBsdCV962Gp7tuVamusXKDGXhEirxQhR1yTq5iDHdZ15FMo1sHe1P",
  "key17": "23SZw76kiaVEkrtHWCJyAvNfG9UxYbVKkRWEzF89esrFeLBzB7pUj5CEdU2b9Vtt8vyY8XmC8j1Fx6UeSGGyhwUe",
  "key18": "5tnQ2YrvxiH1nAWy1TbputzyjcjqNnEzTCUBdTiGkq7QFDUWSNmmMS6aa5nxFze9QTk2dnxKYABFXQmaLgEwasHE",
  "key19": "F2U4rV23qEufxqrUjM3xcqVwww6gC5ixByyctfjskWYYvUUQ3ZPDA1BJxtUGghewDDu4WZALMqjhhWTkMnNcKgM",
  "key20": "591haxdCAoyedkKeLHj8iHGzFAF5wmLfEdcsuoVDXtw4iz33TS9N7zfXtnMRdzPkEJDwDxc3dWyZBzc8egww8prY",
  "key21": "3d7pc2oVNHJrcSUSLN7KKgLoykmLNTJt4EymjqE5B1v7zroGyphsCjB6B7yURa2A7DpWcWVPravGLEE6sEQkFjag",
  "key22": "oW2E7KQr2P2pqUDe7VyoXF8sUrqMceSg6Hw1tJBcpuEoHmPoBvSQbxU4Lu7BVt5on3gMBFjLofLxofXjHp3482u",
  "key23": "guZpNsBNrGGKViUNewmFwup8umBjsxw3zDd9zn5EnCmUdbRh6YWfhDWMCcumNfM1AQ7HcyubSXsmBqTTzoLW16G",
  "key24": "2AjqPDxeAzELprgFi1ZatEsEaX2Cb1uGHzGFpTmW1bwywiJjhuCBUE56JM2H3HEa3HaYaXVtULpPjq4CetB22WYZ",
  "key25": "34d3uprjTfNf8xXFvyBxRvZ2yoex3kgNa7jq25uBsSHBPQz4eGrsKF5VYAuJCvjCJQ11xdurNZE9bbhia8cU2QwW",
  "key26": "4nHDiXvcbv8jLCW4wofBHcsvTNigr6hhHP2QEWU8ZMFmnVgajtY4scuX6Yz5hWQNFMVEHXq5M1i4BLjY6oGqny8W",
  "key27": "58n8jZnC9fTyWw5djg7Voj6jYFMu4a3bsBr64KB5nd3irsoWV356pb7g7QZCqvhxHue2eVN5B9juUT6L8QwvFxFm",
  "key28": "58gC7MW8JFGd2CqojQ5YzJR4gdM4tB2qUaLXkfn3xP4BfJQvd12uVy8p6UtVwSboFxB34JRVvt6iRHeN7Tg72PrF",
  "key29": "2BuWwrPQz61sdwyVMvsxDgJX6etTUm7YG4YV2B6GupWeUN9kSUTwNd28cHm2YMZ2feHWuMzc5j59sdtYSS5md2sv",
  "key30": "2acv4rPLSzpXEJ1g2atDPWPvX8xN6SpbSoXtAezSv1VAwY9eJ9HFxCmo4NsGHjyXzN7za38UtozCZrGxyr7ouFzf",
  "key31": "2NgrqzFT3wUPM1ywZsDWZWUwWxohMeYBHJDvk5Y3rpuGJBm6rx1XpnYiYDu1DwmJZGtQg7yWFu8u8C5otm2f3jXa",
  "key32": "3EZiFsQmUEgFJdePigUGDnbzFEC6De4ggahYSiVJ3F4bXANMoR5R3AQm5TSdLvr1kZSyF8FMopti9nZPBhqG6rnZ",
  "key33": "3X1eDj1SDbSze6VQAc6Gdp4bxRPLo9ERRkBiBhZDqbj3RvzVF1rFQ5SzPeeGga5hnEzqeHiEziDHoiLku38nUtWH",
  "key34": "3GQQ1PrHSxWdDkGoYK7hgKCoeAjLnrCPP4Qgvo3uAPKJBQgSx28XbzowjMkLi85EmRQXfdEWYM11rr9JrKxUz8PQ",
  "key35": "4D8JUDyUtqjdqSue9u5X54zXcgcJUGv2bcK2ThEX7bNipigYj48hStK7aqxqMMYScqsvnu9H6BMywEDHQeLiECQp",
  "key36": "TkQXRdz29CzTwvjJ4F93uY8kjjLdYxEas8vQG5CtGiSABNmYTo3k6cYsmge9pQiA36AMT7XZ9Y68Kv9g5YGGv2W",
  "key37": "2NrFhmRxC6jy6FzEzg2UKS4UXw7egEskcqzKbsViAxjVZ1FYPHzURX9Pt7Gp35DN6pedeVqtuGZfGXUBTNwgM2iM",
  "key38": "5JVUzxiGLDnnayM9LVoWvHSgYn8aZHUa5ciQHHMv9g3Vc9wSCTNbvb5mdeMhMtDqw7GHVKy7g9YABGDhMhEKibLc",
  "key39": "3rMt5MQrey9qSJvmjJGcey68Xjsksw6eShfW3XtNyREbZeRZxjxpCxefBZoWUBkrNUie7fv3kZWtEE1UkQLEXWt9",
  "key40": "2NGVQoPaRgqbgQzTbetNUQFo9Amp4NyFkE9kf6dpuWG1KKK64Pe6F89EbeXQ1sQ9G6AzaA81rYwJsVc1TB6Ha3VA",
  "key41": "4hJ77ibikSdRtt8o5XZyL55Er5zVkoD48NTKV8rtfUAWa1ymnr3EDRAEiroUR8duQEQKYjQzjcTJLeb6XpCZZLrm",
  "key42": "62YqYX3Y6jSYm51bo4f5Aq3ZUsumUfX2CDQod9fH5Xqghe7Kd7DSN14YxE3nEVBemhNoCegMdafeLTaVzUxPtY9p",
  "key43": "5MjczPVEM38mrwoV5ddQ9VjKaKk3wtBAG6FxLK2cRyh5MCt24baYp4frX3cbgrALE8xYZDYhVbcjsJCSdnT8Lmeb"
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
