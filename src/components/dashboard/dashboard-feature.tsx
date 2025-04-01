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
    "54fuAvBXVVNgkepMJa5ivqAQR3TcA5WvNrGwekhjJa3mnk5aChLMKE8JNEKGfzGLrKMJ6X4i39HVtFnPTSo2Powq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JoNUxY8kG5XhVa3pd5STHBbDxisrg6npdJ4feHfg58JuR73ACajR2t7dMzd4bS3a4heWAM3VJXLUHewHF5hv1uz",
  "key1": "4UJUTH5YaaZJFyf6mpALYA59ickwu6aedmcWKsRZYn2bQJbXzWt2exqZfaBLCsVw6VfMso5VSMLnY6seaGj8TAmS",
  "key2": "38A32SFnfZcA4MrAU1x83iwwRz6nP55hBtT42VofLNPyGGiW6s3fX7osEpDgcJn7ukLhvLKsumCBQxtB7KGomUyt",
  "key3": "4Bed9dZPfAvfhQNdFMqrJiVJLX9ByZhfimbUJoyWWGNgVg172kjtWASWQ1FDi4mjunatUyveFHEdS3ZFLCFRwUjd",
  "key4": "3Dv8vWejeWhtk2xBiPCiZfJpnf1Ebtco8EwRZbcWG3RWjJTQPwML2gNmyKVmDqXvkdx4ioE8NeVjXCHpUqRkjSpz",
  "key5": "3hjATtr3XugGLfAzjGuig4GcVrdzCUhtxKrmdrJwyckjuZLXhNTbx9HsDRC9dnaJ3XwtNLXuxBuSro1JkT4uqfFx",
  "key6": "4Jwh3QGBrmg7fXeciEywLAKJS7T67jKoH6vzY4pyoS7dy26XAJ5dHTnwmsSYYshHkBTcscvrGrkZTbEF8PjjsAg9",
  "key7": "4zJHWsGqx4dg2HPCG4GSVUBsXZF5Hy1NCbBJEMLUTdpMjjGe4cstZs1sEoZhQabyuiGRrGvWzc3kFb2FdXzVa2mK",
  "key8": "4ExMv2pjy7r7yT34eXCDfc6Kjsokyc5ytB1E4ni5qEKuMQTpQu1mAjmUfEFQeGjckMNQ3AymWBjZk7mgMEjhiMLp",
  "key9": "fGgQr4My1XKZg5oFee8iQdDAPTCxmKMSqczAGZqU48a3ejLcw2o86dr7rMMZRcE3KJf7MFt8A6qN14JrknstKGe",
  "key10": "4AkixqeKmUn2S6YkJuUqZ2fN4QbLRmeQwa8BE5wzSfJEaGZXrAnuLeAr2xrbZpSLwQoW7PXy6MyBR96s9ngvJozU",
  "key11": "5YejXvGLbwhBuCKvqb8ma4MmHK6L9dziRBZMkFD5eHBxUaCK4g7rCnTMcsj4wpPbwvtNViRc9mn1xGgHc4MJsq8h",
  "key12": "2Y8jzXjtEgkAP2yeNkcPx7VbU1RpFSGNpZDrRgnsH5Fb1GsP6YkAWtERPa9Et4FMwTBQtd3uKcaP9eMKVBe7UC6o",
  "key13": "3v47NCF9Sf6YdkViAYg5AHKYW9bLQv75FPQqaW3nWn5ydbonsfDxRHXPBUnHz8pvpi5YjM89TNa1N6W5Pf56Qo8V",
  "key14": "5t1fJd7mCqm8WrnGDFSaNuD1aPismP5TxhZ1sQSC1nwje7soDREpjhTH4NWGwbBNfgEMDXoKwRy3WPGy9uJqoVGA",
  "key15": "5HauobHByBhuJAGYxJhNypEsQ4CsMaJ1Mi8gAKTPFcHm4pVgCtBRagJnvqmz3TN6fmAAVeAQ57jaLUzkTWemh6bY",
  "key16": "64jZ7dFqE6CPfQuCvKj4rpsjQ3SZ5ptcn9ueWHkGmR3hBLnHVUGKPYwkZrNekV8J29ruN8i5PQhAHDVbM4jjmtKu",
  "key17": "5eDVLRLfQKavsxYQ178xV3zrQY3sM4xbRVmNpGymVhvCMYhkTpH39Ls3adtDLuJnbnjVBCBytHXSghzN28Ak4cWW",
  "key18": "4JrUxBo3T6pPYeFMwrbaW1zU2QkDF6E8kXBjsnVVM3tcM8g67brHo1zDoWkDPS1dDJoCH4sRZGyHEk415jyS69Yk",
  "key19": "122zFhaoTWHErqGE8BDj73vzi1fCoHyMGf7T586vjujvwANA3FhgouABYvCLg7oHZxRELYDmAE5oxfCnyBbykhtv",
  "key20": "39C3tKSPVo1mq2iVysZ7p4HkKALW7y3QjmoFtYuiDUnnmBmPTKjfNzvh377dpxKVKrY72mBN3k8jjQ3LeqnJmjM",
  "key21": "5Rjb9Vm5GyS9Qs9hXf7Ufhb2HRrjRXiNT85weW6wXorQqMKQjMniJBXHvPEJJqyYwQLvbcm8oxJYSicf94va6V43",
  "key22": "WjonbMHoJF6hu35A914ZQuGGbnxeiGALuzKHyiL7BFaHe5hsDN8jZeE2Hrx7Nszz3L944VSAN6nAdhgAZCpayTa",
  "key23": "5uJZfDGJR48bmymAibz9VuNoH7c121RMWtZ5XJrGsq9CDdAbnQ3xB8f4RXDPTPh4T2AX3qWBvT5ch74vp3fmMT4",
  "key24": "3ABKHxnKyx6zJSQUmqKtWCrWC59RerscBQGGfFt87GFQTsDe5WTxA7wWVv2zYYLmW5mqCPssWuNpmDg66jveYGjs",
  "key25": "4ubjMacn68q8hmcxT8V4xrNcSuZyygZKfAx7eUaPnVTmwoXM8ENvftJK8RL9eqcmmvwoRe1euMmuMthVxV5yAfP8",
  "key26": "4f8qWUvvbaopDmD35rFmgSS8jspGLqZBNnkpMikJg4EJoBr6LdUiJHasALUGz87V6QS8TdDqw66daUMRc4U3QgFw",
  "key27": "5VJWQ9u1Ee6tdVzdN5EuJ5hF8NnnWn8sfbZ9wcMooPxJd9BAu5CV3y2Lawf73uhDyToF2JQAS1yCjZ8kiuvPWtM9",
  "key28": "2nWSvJtwAFnGwfuQH52FqWmrXSPLU1GenX9uMYE6JCR7ftqEujvPkEAQJKRUx7D78dqFjfi2e3hCM6ovYjrcEfb1",
  "key29": "3h1Mb2ybGRa4hs71FF7hvqtvJUW9zAvGu33Euqa6yYQWA1ttRB2LJUWLKnzdjJB8DT2HA5wbQgf2AKrHPtwRnkox",
  "key30": "2pL1MpW6E7WSGUykJ92S26jVdmk9d493uZCBZTbtgZCgA56pni2WUCfz11tGkCMdUU3htyNkmVV8ZTqcRc8W1QRE",
  "key31": "5QGnPqZCyTpjuhEfUgRmzrbvXKarFFu8VYPNZzko8Aru8g26cj3MANEMRnuz1eJtp9NRXhRVMg4nTE4ENuR2e7sR",
  "key32": "2V44FYyfYhVneTJrC9UQtXbsfqkh9xbALoCZcfLakv1Jntn4CFgWX4PxxzNTseFKEKgKpRV6YACR8aVVUYQT6iLS",
  "key33": "2BBKQSXtsAyDQRprRzrM6tsyYBRiSx2D7FsbN3RJTvpfTKM6J9mxGwnoeuhaxQLzcV3baddvWRfh7iyEovoo5Aub"
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
