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
    "3MbyCXDzzgc1Dz8jVTLta7CymTQnP5Xty4G3TN58nFAcZSXMb9yjgyoUUwjtJxdXFEjbENXV5fVZXxQoV6m2K6qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "97FUxDV9Poco9hMrvmibFm7vsdmePYwReP1jo4EVpU1viU2nVUu2swtEoBK3gV5ubUkkUXutHvNgRUUK1p2dAqG",
  "key1": "3rL18s8tMFvUZrCMpKSvEyiJ1tismsKyypBNo2eN4qT271C3ENW6KndWj3UL4W8mBboGbeG6ngiDcjPC1BybNYSm",
  "key2": "5AToPiWFdvs14pQRbGrPXrKZV1MKUEzCR82E8jroNDrY42WwxgcAPwSyxFykErtAfJkefVnUdTRrQrEpYNFBHFy1",
  "key3": "2dsnFncpiVkmGRPLsWxUrC7U3fqjCGcLBHfH6iMk74ETtn2whK4ndoEzmPas6PGryy8dwVUBsVvfFMBxMsYn1wFZ",
  "key4": "5zRJnrgfG732c7YMFvqiko3vbMq1ethZacuZ7DBr6PTcdE9wDBfhFqT22vkZk8WasP8Bctr91JXsdf9JgUq4J7qw",
  "key5": "572qUTSm64s33nmUon7Z6tHEQ4WdFGsuKWQk8yaexFZTPgvYhY48fZfadPhNEV8W9t8Fjn8qGZjQE6aVSBx1oxvJ",
  "key6": "2KCRhvvDW5Fh48Wm5rTxvcrCiAFrmkruKBjXn26MjnSSxsiVnvG1AjEYpmHWYM94uvBEmfBP1umhMvJwUCMTXjou",
  "key7": "GESKihJQQdstKXGKz9PuGjcqdxV1Szuob7KTccWgC8ptZ6JQ3GSRZCypD6KPkQBGXXyMAML4dq2yF1FanpABrD1",
  "key8": "2N7V58yqkvFz5nx6fF7VMUASLfGjfoFvtYoMk5HB1iQ6cN4ipNtogcBbfKWjYWMaDrgk8UhppHYXtUWDT4ysRaxF",
  "key9": "5jmMhtrzF3B8VGxMqF2Zy1FtuFWztskfCP8tkwZTMj82MARb423vAGtiUG1wBxjk2a2UNNAb9Vac7PfRyaBTZvU9",
  "key10": "3VqKkuCiz8nY5BC2BJLG7iTaGDkwvpdYxPZgQpPwrMSgm6YjEDYcriTSG325BaQqjV5tbD6FpTG8LcK8FEGK4SFz",
  "key11": "52zjCjWprTpRPzicUkr4B6dXWsURHooa5bQnGj8rp7bmm8E71KF5GqDZZ1h6naLEDNkvkEM2Xb6kx7L8t1r9SutE",
  "key12": "fSxyQshHNZENDd3CDXzycWS747GXjEMgZVQ2X6sKerDqhRwvoGqXLbD5gioTJQwQpGsPQzNicRzvm2BQG4z6uQz",
  "key13": "3ZPHYUUoxbxGjQv3haUWZG4w9Vx4rBhLcaVfMaVAMakPxxveoRfnFpRMd9kEduAh6aA5NnqbT5cBK7YKYu7awu3p",
  "key14": "5gZdCUto9EKszxNpdTnCwwGvdCsjmhNCnQn5jZJvfNuhVYn9TsaQj84DbbnwQ9kg8RxEzMHSqCc9dcRKVXKkSAn8",
  "key15": "X5mtuVgCFM3eFaPpYo6kicE2jiMD9iDRhP2UW47bAqKTgreuaf3ugBoHb8EfekNqpMtd7NgJwx3s59BG6sakEuE",
  "key16": "2RdMV9TzpwbwZCdHwS5SGxAL3bafU4RKGJuZzNY15NBEWJPWUMqtdwMcnaCcJfww2ymixE1tVKhAYaQBhhNGCcLc",
  "key17": "5fuKry9Q7YDsKWwbjT3giAQHhiG7Dx4JRRVr3XARUN8KYmTLmxKJ2uz362UQmvsojyGNZXGE6ryoUgjHSeJAp62D",
  "key18": "2M1VCQ7G1gkrpUEjg1ujsRGxmfcLLrB1XezzdUe8n1Q4qfmf2u5x3LdJskfaCv5BKDee6NaTNdmvV7BTrEE7s6Qp",
  "key19": "ncqa2eRJWRV13iZymrjj21VJn3tCZUFk4TtBHMbj9qkuWZU2iHXSqzoXWUviDBj87Qf4KeRzkd7pygCBB8BjqFC",
  "key20": "4tXZQqKzpLELMhXGydMkCHhQURBdVAQyMkjq4GyugD8rmyrHDUgwjKLdABU6dNmibbrrU2QhDuFvvhHVZAokURPV",
  "key21": "5J8VhbtFPRjNNSdWNXAaEKzjxraN5i6vNFRvmtnedFmEaTsHNiJ8L2Sg6DVyVbSxPKmPbjZVUo4gegA1X22Bphmv",
  "key22": "Fucbi4SimWX84MHeAWeQBrT1yuNu8eCDGNqstpkMcD6jcXzzEArwxQXFFfJXSCSTBbXTXWU11WPp6Z9SoQKk43J",
  "key23": "21B3L5qnk6rXRJmtuYqfDhjooitzQJQYA8oyy8rqWq4bEnSdnnd8iTjwJ2QSqtSUXoC1Gr3imf6oXo2NKuNNFFa1",
  "key24": "uyAfYr7SE6XyNST13X3BYtv6f9CDFHHEXFqygTi8gfTCP3eMkwEtUdQCESWcperKj71aSyiVZdRgdxqy2TcQaVF",
  "key25": "3bHEKobpYRFXZtknNfcFou2ndUYzd2AaPjCCyH2QmUoBj9o7KpTnRmE9FqtZ6v85a9Az45viDkcyLi5EtufhaBMA",
  "key26": "4DTiJmhhUEPLJvdCjD6a8oLjBGdQop6fCdocPgDuYg1TeiDVD71wfK5RLFoygLrN8p3tctsbxrbMicDec9FiVDm1",
  "key27": "5XVLR75foQ3oB8Vtp5Vw3TR8BZYHMvhPrnBNeusYPakw1GQ9zNqYGqxN213czha7LbGXFia3pTeApij31ZBWqC1u",
  "key28": "2GxTQybbanhbWYLNjxTsW4eAJphgd1vJyzjQ8MdJ5wwmuXd1PPF8QDRwiwrioP1r4f5DywPw3ygN2WimYMoh3hig",
  "key29": "3evcqcKgR9mjamYBD8qVrtDkAZ5rHVPPysED1WZerKhKpn7FacDmpgTFSszkE2FZsXUq9nHW62wdpe3MkbBkUyXv",
  "key30": "4BrCmWACJdvY9i9MjR2WT4XCKemnQDseLBK6ZWAEURN13246ao4GZkT1A6xVmEbbM8HdUimzkGpT9N7aB4tpW7QA",
  "key31": "62PBnLwAhTj75TJPDytYZ3dEcvMnQFS7ZLi66zcSjNJ47t35L8jdBddEjT33z2RPEAr5MTeJUupt3DvitT4ew6js",
  "key32": "3qNo8nA8AFQF89qvjhSp1e8YrWbEtcmoJgFEjEZzkKqa8ywwc2tk4fxkPK4EUKd61KdxCTctMe2SCd3SrYHXP2Mg",
  "key33": "25tmbds2eB15W8wD8irFk5cRJmBvbAWWGJM4sPydrSpMoezRpWcsuCeL1YLNsJ8audzuK5cNiZrn9DGRjquVCUvn",
  "key34": "5ab6xeeumP2auDnb4FD1ATi2JKDY7U1V6qtQfDAtgCHsPEu31VuBNk5QEhwqWfJspe3dgmQJ1fP6sNUtNfUyyRhg",
  "key35": "5DEyWa1KiLSPEiU1Exg7Kvf1Xf3MvPQVpJ2Q1kPErbWWXWHDo4Qn6supEgHCCa2C9X5ZWzkW7MDmfCR9Lm9HbXCo",
  "key36": "2f6fHypLE5e5aRvFWiNrxLxNjzjTBsGjfkEiBs1tUKV2J5g3DpmuKJ4erzARr74a5Qi68v2idxijRyTD8g81fdS1",
  "key37": "58NxaDgVEnqX1XBHBRL5dpWkWPi3YZ2md36TUixBKW6J9Du8FwL6yhWsUiLKEaK3XZumAamq81hsr1fmydKeeDqu",
  "key38": "5VFp1PD3Zrjdhkmor62jX5FtaVRTx7jLY1cbE5VtqXz2EZ9y8xdsNRMTZik9kUNhFYyf4UWyHgeYzbmXwEtVVwbT",
  "key39": "pK4R8zcepWLbn8Z9LbQxEia4cf7VyhUp79kWdVs6btDca2ct2DUvueB6T3DLh8NYcaPS7gagw4FJyxM5hQB19dz",
  "key40": "5JcXZBwu2GcXkJen6wyeqUy7faZpnn6QuwGThgLWVSQFyPquSkzVrLd8JnSxnqs7igfipRZLucpXtkwmrzHUSaCx"
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
