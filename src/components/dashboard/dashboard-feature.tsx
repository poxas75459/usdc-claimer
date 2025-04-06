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
    "455Feery4wiwwPQ5XTNHBaZ7XDntiXKs41V9nBsAn3Q1cPsjm9v4V4ncxPh511j89wnpJin5ng6xbz3e1sMgKPqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zC6jc2Bi8kqcR8gq14USHYQb99ZYx1AVhqoVdEeiiJ1qwz9PTC558mHF5jw3rwmR9Ar4QP25gVtEz7PveZahj7Q",
  "key1": "59wnxrXkNDaYH427xpEhu3e2rthAM1MMWYhFfKC6euGPnbAp5p6qDtkxvd6ssBkZ7b1rtq7Y5LxK2FWBffMWJiqA",
  "key2": "5tPcLk1P3ocCBpA8jDUvbJMZPwQYU2eNpKZ66mnLAWc2FKJwbtiv8zYh95k6q5nfVn7ofmUmm7kzSyEAsuA4c6c7",
  "key3": "4PVWdTTtHLXRPFvoaKJXFTj44NaAcMGDMgPSQGSXdDTFQagwC15bMKC3BvHeFrqN7JRBmAM3RjPHurtUTMfACccx",
  "key4": "SkDvJU5VXXKfcG458Eszvea8gknzbeBbRTFAC9KxNbt57fAbz8MxJRZQS5Yq9Ff5Bbncd4Ss9MDkGbwmaEovwQ7",
  "key5": "PMgt1ZiuJqUE6sznYhHT8ePinSudBWMwuPHYxkufq1tXnBGff2iHAakHTxiZyVUuFdbxgo2tNgg5ZBeHVcPjvgM",
  "key6": "64upwbio8nSbkNPe6k1KKWAdj3XG4UDR1F36ExNEAMhvDGBD439JxiwwBpR5oorMbaqkahSAM5G5nwEYncvFBVU7",
  "key7": "277HYBjYSMjyi8QhVhPqtzFZdamMU8whCFVrB3cvLeTTMcj5fHxwfzoBvxRzCnCgzJkgptqkGqYQ4hrrkEfnnwHQ",
  "key8": "5ejKD6DAirb4CYfVm9MuryeKtXnPEixnLgd3zNYvQXFps44h8PaAmG69sbkqeQskzsXAeiA82L8xNWKfku4ofSgd",
  "key9": "1GVotPexSQzRdSVANcJcDtGawn2U7ZCcaHcU98Mum8TqYFfqGri63K3hr849NfP8AHEUmoJvvUce4SrYSre7u55",
  "key10": "wHA52bGTYbsHkydrNNcUYvoev6aovSYqVgiYfwgSz8QEpMH7soLXJAixEF8YNZ293ctPG3r2TTUtdUuxUKfU55s",
  "key11": "YWgLBedKW7MBuqyeGoQpviW1jdFA7m98iuduQENm1i2LSGtWzdFDASbDZTizChNV67jP6tgVhmHZXDeVid8p16t",
  "key12": "4bUYZfEzJjMFJ24Ppz2poGbhMkGdi2iqPDJcQRQjoeEJMPafTc3JJ6PQ7ZPxCuKwRH7EN7WE7uDkvpkPCQuQFJcB",
  "key13": "cxaQobhXNzmt7Be8eQbMh37MKS1btqSLit67gkn5vpzWiXHsCnS5CKp91t4XNz8uYAFCbDMZakXbmUq3EpGndru",
  "key14": "3tP7pD4GcT9sg7MTWPUZTFiXyfrmMThejQqJDCPMR5FRGjRffxkRYdYKbxc3m66XVGNzAgG43GLYTjcAtybUxWS6",
  "key15": "38jDXWV5AhZQUDBTnKJV7kuPjomToLM9b4zcMyQVVLXhqWMpxYQisPzgRu5R1FsQgez1HsaoEMQo7xEBqCwgWPRz",
  "key16": "8hMBGpJp1oTmZ36CfUg93vu4ztPWuZiQjrDtrNHVnWFnXFi2dyZTeC1T3trnbLeJHaicBZ68DnSm3p7fvq9aKe1",
  "key17": "5FV6Tgq8jFGUr7eFG6x45DMK7guvGao4tAuuQfkody36Xd9Up7HzoqxcA89h6oXTc4V93LqdKZRvuggextTYoyjZ",
  "key18": "4JMnJmrCg8VkZyPwTiyPKvYo9GkmqQzvXkqTEfR2bfGHEFAAFxU18WQCHXt5XVuyZCWo4tK4zFrdwUepjvFHBjsf",
  "key19": "5qe8rGxHvD61AKxHuuhWjU4DXfCYXFuj3euqNVFpCkmQdDLZCt7ZtZbsw6ZG3eoTLNJNi9TzWSyTJ6FxEQtLEDnv",
  "key20": "4HRw3Jnt8XvpF2dtcu8J8RbLS6ECtVMkfnmuryhnEs63rKFR2WZFpYKtYyqsJ1ubkWR8jN4Lp7WRttjrWxV8VTCz",
  "key21": "4tRkiNidnRGo2E7ZdAtnEDAASMnyP2mT3n2VanV6iFCvXFgL3vVJdAGYsWLZRPCk8Yk8giCXWmVHVzqqQrqxUGty",
  "key22": "4EmUR8R28WEMyMif1rQBWBxH7457FidS5fSicCtHZXEFxFcqZmefoFFGH78dCjPAWWhfcz6mLxjNnKYbVQSdCzKD",
  "key23": "L94M7sHcPvJGG5ALfAAYp1NtF8DEfYSNvXWhf35YmNe6nd2DF3c7Lf9QBFGEEo8uSNndV6xDN1hK6gsBmkTk9ub",
  "key24": "2YKFNWAjESw4dHPkU3E3JyADSuKb2UKijdN32a3KV6NTY3KH3YWv7JFoWaKLXhwM41ba2pNbHWXXpw26VjiLGdho",
  "key25": "3BoLTZYHCvYmR9EWqTkkE8eTrjBndJq1J1rocYbhqLHygopVXmoZjpqyyoZyctmkoNXpdVfRCfabgZjrNYd8BjiV",
  "key26": "4s2CWsF42zbYavCEKoBqLqDCSpFz3Y3DksADbU5jqqdkv5nP7fNMDPp1zr48bwbqgiq1SbmJ2L2aX2pDWoJ1F3a1",
  "key27": "erXWdJXwthEWqEbeNvgrxUp2ayVAMXJDQiwNnYse79tQsfFdG5fXbg3YurYHVojB5i6fbR1Bzmhpb4mQsQmkLpZ",
  "key28": "4cLGU6Q1BaNbokg4yh97EvaA3aLM8voxKZH4dsJKVhbmBDUfL4o5N5ei5FZLrwpc8WvXVHeMFY3QRzcog2fwBgc4",
  "key29": "5BQiJqZPV6kJ7rcA27jYHmAypciCNatCKSVmYjCWRpLkV4FPgLqTv9M2qQ54uyDcyh6cgCkXUVkh4fuLYvMVgHbV",
  "key30": "5seLpDaP7mbCFzTrPxFJHgKjoV3dCKHpYr79sSDGRaLtSamdWrYFJLFohuZHiBkW1MoMsTt61bFyGsJ33FPAkwb5",
  "key31": "5nEuNrXoyjrLjM4esMfNPr1v5Q2u7dKxUVLaPKfTBVnp7KxBFuQpALpfne14zjr3i7Vv4V7xzqMhEqeqyc6nuzST",
  "key32": "2oj1ZCoirGsRugLvpebGLYjNv413oTWaECXVn3LMCQC4cyTrF5AtYpMYh6BgMQxA1STdBqCF1LBdLrUvDvRWjuP7",
  "key33": "2VtNtRZZoAdqHmucKwSk8aq2c3rPJoXQFqm6zQwZWN6NuSw2Z6U9rzsUU6uu3z6Rpu5oVE4nKHDir8ws6esZtZyV",
  "key34": "gkbD6Zpob6Y3cRbtrMmrieMDAXLAaSJFrr9mQHfScGUfoUbNjH6W88BMrGu6JeVCviGiLbrgsYayZMDxULycDRk",
  "key35": "4d7xu7hb8rgAKDrb3Qnoo5AwMMiFnJtf1RNjtTcpja6yT3L5dFbEE3rhDtruTB3ERiCE9nyrZSrUpaGTzrbW4rmN",
  "key36": "3QAQwsdi8mcxFrXHGkf1RyVwD4i7YLKP2WC9MXcYQbamtUSUqMZ7q4wHkfsVxMp31ENYDMFw8ZhE7JbdcgjVKGzx",
  "key37": "5QxCukiZF6wUAqLfZWJL5BzLMd63g3VewMaaftxzj7XtWxSaHqixYwzDG2SeaQZRdYofdbqrcEZ4Y4ZsTfcRhon",
  "key38": "praCVXqBgQfjbokTrkj63NchSwuCbzPYsPDDSHQ9eEP8BFcnYPHg6PoggraFFg5TNG6L19oJAH813XMZQ6HEgLR"
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
