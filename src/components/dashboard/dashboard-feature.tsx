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
    "4SKk7yXnUXhdcxMi4yzY156R3TkqcJeVwe8b1ht3QNZRpsn5AS2cdsu6exXCCPqEMDNRNx18BHWY6g4Lx7yqXpiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EivJcL9D3PVriQNv5CqX8k1vJXDY9ZW1A9huUA6c9eX9yQfX9jxJ1hbTJtYJXWyHXkrM4TpHwVYxvLpaAE3oiQ1",
  "key1": "3CwLm1DzyhKKLZ1bheUb9TMFj88WfAVUhwjyCv5ZT4eD9QhPH6i6ETYTKjMfmdUnJygQUNQp2pM9pLuYykCVTFsP",
  "key2": "4aikva2NphnKYmHPbC11DAXL6inbpjXzkPxtmdJoDgzL2s6hCiwvCemYSXv8yZ5WBsvSw5LyoaBL3tDZWTKW6AmF",
  "key3": "4Lb9p6U7gQunHQd7sQF1gziY4BdtaTHVP4yrFfWBydG99kEmSrgxjRJUUX9zivZzGcGaZnSdymPNDFxBrxjKotzj",
  "key4": "36oNQiuG8UEBH7JVTznNiqYTexFXC9mDUzkp2ivUJFCkreVEnpE2e133SUJasqQBaFMqmFvJFU1BBuMnHBzGoWbs",
  "key5": "zdFPgdiVS5xxYJDHFdF5A9ktWzTuHjVaEpTNJ5GBAvFJLkMffojL3jQtjqRXJMohmsKTpAb3fxzArS5JJTDY4qr",
  "key6": "2i8CSbWys5gDLjGCeFTncSHZweYWkwkV9wFVbmXGcRdxihJb8owvB6bXVdngsf3wtay1VC9zckppL4ScvJm6jrL5",
  "key7": "3BMtzm9N5LpSUqR7HN6pu9h2ZGfhTU4sN8zqvyv7PuPcPXg1VEoavwSgSxAAuhm1EaLQ4ptoqB72ecNRAtfC4Rg7",
  "key8": "5k7fSrN2kRoLhe92CfeoGUbfYB8Jif9cXKMXyqhu6k7rQpwzPS9EX91D7MuRJVehPCy8o4JNYrChw5RjAGkVH1Sn",
  "key9": "57Kiu3eLHiL8SQ1KfEsuMU8eD3CvTvyTj1APrzXbzdYtVt3kxZPnpRt1NCbUG5EYkL1NyY1ksKqSLCnAdRZdQP1p",
  "key10": "5RTacq7EhJpThYpmznTRNgAxbcUAbsuhpNLV1qpguy8NCTgGtnC9AvXN2i1oA3XbYRRAwmdRuZFghBH9GvweNn4p",
  "key11": "2aij4tXLMQrMeysg417jMDC5W3vVJ3UgApZecbqNmA55gPx4yg32kXK11NbFCTa3V1G8iB8CVnsHRahN38F77nGV",
  "key12": "2dYtPnfD5pVDdXtp8PoPGgLt3CmMfZJXiebyz7Q7PFbxk4udaZo3fi2Xb6mh8z3TbcLCSFzwvhpHAjwEbDaLEibh",
  "key13": "2BwU3UuAqNWd958XusE1jVpjqK7izSpVhyCj9qVSUDUTcJR15mizrWUNt8k6aEiV2RM9FnReBU2Y3MK8u5GR7JZn",
  "key14": "2urWGvkPhRNnVAk3yx6b5qGxmBr6qUtLr2g2mQ5y4DDbLRJAUVeVghP4v35QT9vGQ1HrvWMgU9EVM8uqgE5KjdKg",
  "key15": "4HLPpieTpkAMkjx7pA4DFzrG8yWFjAF2L1mhRouQKkgSTYY7Aas56g3FQrmNsJcT5YMr44E7dtpVgepUWkoHdSJB",
  "key16": "3YydxVbDAm1L1sRRkompatTu2fm2hegUXvnSF4wm5vEdCLwk2yK9W3q7nYYbtuAZbJ83yHuyF7xWhNA9ysvbiLAN",
  "key17": "Dh5ooB1oDFWxvjVKdF9x4NwXfzv6zjFYnXz3iPLmgYbzT35gkBredVy7ZP7vCE2zT1bjSM2xCWAHKgnMxTUmCDT",
  "key18": "3wrVE8tztLed3ScU2vbkEutDsyrAj36syMetT7hqkUUBTqJ1hUrVhnX9qmWuKKdgFyp7UL2wf1yE4nRfdhKAirnT",
  "key19": "jym2iuK8EVMWJ9kKuks4W828XL3fo9kdXx8ErAGiCK4msiMNtvZVeXWB6X3zvVhttyQezLRwp832Yo2PudgsVeu",
  "key20": "2ZN592Y4rKMsvh1yKcke2cnJMfmefJCdA4esQeEUCiZ5VJ4FN2wnVRFQVrT6VGUh9HrytGGm7QYppuULCgUfyKCu",
  "key21": "2BzZxhskaxQmSAkQ1srv6k7Ar2obnzYHvjRBzDxuZZoE1TH9jRZWwjZYnMDEt113ChDfHR4yJqA5omUQaYkD1Zgb",
  "key22": "1XzpyPDrmimMdUVaHi4gSiXrXL6Vk7WbPUvxgDMKWSKvARe65Ua4ahCVz8stZj9s3k7s8bZd4dNwNfjrUghFZ1w",
  "key23": "5e5jZSQdvUMS27ynkbeNyoDwsjfVsuMHDwUeCEyRECHhkKdoVNbuU257Yuxwr7vewF1KsWKRDDbZ42XsrFxAi7kq",
  "key24": "4cZPRQYJ7EgKDBjWFzkqnsktu3ZG4ngh9d5ztpx5Kqn1yKJqPrWjP22DHrUoyYZS9HJhtSaDmAumeqbWv8R1Xufx",
  "key25": "3zoHHShbEgPeFs3WhBjfcy2EgPGhDNDSjp7to51Bnqh55JBXykiRMAGpW3XiW9HhZuoQ2GTybSb4y6BvmVgFpYFG",
  "key26": "4rV2ktF2qjxy6rTRwoE4u72C5GHfXqh56qXY3gETMtnBGosyK84BBdPQijpojmJgUdbRJjNuPfV1Xkyjq2xTeCGA",
  "key27": "2aWRBnwC97Y6pm4m9eiFVz4NLsLR136971ETkFzMsKF7hTWcSR6buG9h2W9cTesD17GB34or9DjKVEM3P25qb53p",
  "key28": "2QPC6stUNp35JLbQPk689cCDGViejnRgQTBHVm5Vg7dJu7RDM4VUP6RahnX7pqgnc48BkozVYnQEyoxvM7QvJcpb",
  "key29": "5HXZt2mCqSVxcHLaR11DqCk4JNKNfh5yk46KfqBMiVSD5PxaFBY4NNgXcts7QMXd6xcUofYzF7NKp5YLDac8t2Rq",
  "key30": "2iLTWd9vzd2jdVFALJ8s9yi4ddSTxkmqYUweoR7jXME2h1koaywg1vFJuHqEU4aK5WgZWQ2xxFFbJcWXQUCsag9n",
  "key31": "kU8CgtF8DSeaEh3AnZfxmn1yUHBXwnGjrn7SsSRMYBdcd5icKw2FGPmtobkNP4TUa2uw4XvNUUWbALXCdxnhLZ6",
  "key32": "2DU6PV12v7DDeQQsPtmK341jSAyjePYdJGVqGTfTyPPQCGm4ijDw5X7DA8N7rWHbMjq7X2j9PkadX9pDrmLTwoSW",
  "key33": "3Es3fMTvNKtehmQdW1k5iLSeXg59uqz4VjYXDDx2AvN6cwnUS3akSA5ECgxQjhsEHFJUokRnzes8Nd5xps8QrSRC",
  "key34": "28SRnSsyGWhtRjL4FSdv6mLUDdpPjU4GVvmFUwCKx84drikUta2fgF2vaZCAunYZYXnsiYtAhVvk4SJbZy13o4Nc",
  "key35": "4xYHeP1Ci1zbJ5e1N6yprujL1cHsnWYEWKoYMA2DjikcAwQ4deEoqyizTEzRkM3bezSeT8pG7shbDWJ27EGa7c7b",
  "key36": "25i8Njg5f6Dyp4Kp3HDNGXKva6XF3iieofSo7qYgjd8ziVZnpVQFbwAu3ieEx5dUBwyQ6fGXeiEaaijm7EY4Z95R",
  "key37": "Qxt872yxsJ3tocKoZb36DNKmxotZ9Wixr2eaamHcayvQqQx4JYo53r5wu3X3kJDazqwxhuMgfFiPJEGFmmxJi3s",
  "key38": "ppeB4bASkccxGZuquZNW434gccMUGUxTLVKyBRAyp6KamryM4Ha1jVyzNUaXaAYhaxmgpDTp99E5iMUyBr7UeVC",
  "key39": "5KefTkViJLeEDuAg9RXxjKgJLeTiCCYWNF8JtkZaDHAtLAkMwRnfVnTTXKTZz2mvS2b6VginBTcXGqDn8airco2t"
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
