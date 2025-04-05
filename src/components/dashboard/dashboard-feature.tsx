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
    "4pmLz5596TThjtS1eYcrPartXtdgXRx6Rjtz1XNKUKraPjRjJBGFkjowS35CLWbQHY8D3pke4Dvavi5iRE4nbC6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MyeVSiukhfDF5EzxUKoypZZkfWPrz62RHqqB2zEVvvQ97Fzw8w85BJiaP5pvM2U5QxuscHfe4NB4Mv39er9ELYN",
  "key1": "4RzNZWMe97kmYqT36WeHhPRnHLD88aeTsgoNixgAbL74aoZVKHUb8r4krFdHKf54tr1W1u7FLDNfE4F3BoyzaF6N",
  "key2": "s1Auy8Yy1E6bV2Gpj3qpvtoSqBYJ7LtSm7ZhmXKtA5j8mqRqSrvN7Ms5GS4PB6CeiCciWsR7iGud8Nq6CgHrbr1",
  "key3": "44FumSajjnrLqsmpchfhsiFNpANbyUzNStAtHNJcRr6WaqYJj6W5EK9KruTtAnLyeWyXsVoXi9fXdQ7AsAEh1Eo3",
  "key4": "4uBTNyybkMNBbgo96E4uDAVgaEKgzvR1xBjY2UqrYttsHZX4hvnA3Jm18DKR5WEpRJcgwGCGMyxL9z95y4NsrDXN",
  "key5": "4QoUSvXoj1CgLvx5ZSBc8WYdiv5SjQWMMGh8aVA1D8W6Q5j5ycKEsRjHELiv8H3yPQoTi63TxEHoyZVZjgQQZ3Pk",
  "key6": "3XWQFzTZbz3XTHnM2GKUmQkJsAQYCrEv1xsSy56PACiYQzuNpK6ZM3vFdbyPbWCLZyktDbUv42vUaiUQhXU4bJnN",
  "key7": "3EYLYbisohW4jPCjkWqGcD5jxJW2A52AfUvaJacQnqDpMBUDxLodZXVnxvBhnHALQuTmAy5u1moAYqDPE3U1PLA1",
  "key8": "5QVsUxcdhsdZ7LxnTfku2b4p6RM4Cf8HNkkcxQUnU7BTUB8aHmrPmKRbqqC2NVggRGyufzqf2ugJ1LUM3Hoe1a43",
  "key9": "39iCMgF4ugZnxK3YDV9y2poV3F9QCVKTeNiQ6uN93dAuNPDZ9pDXFqusekW2mVVCU7n9m8K9mk3aAXrwLLGPSL82",
  "key10": "5X8q2oH4T5hrdEiCkRX4cFM3NZ8UnL55egHi6fpVqcVoPfv5XtC2JyRLrhedEdBx59iV8bwPPL2CvtP36kZjRdmy",
  "key11": "4R37RhSKdtrt2otFpmwkYQXYqV4UF3ozd64jnt7z1KHCcK2zvNqhtSVEPrh2SdBCoiF4hYjoqVk81wU1UcTFtyEz",
  "key12": "3Am1v16MEyYdmzSgVA7GfxELu8Yhfxbza1tDeaGzC36KhjFJGczTYkEzF9bEfx3DekfJfSUx5gNtx5udUcxHQjU3",
  "key13": "2GFxVugRRsv6MYRCJ3CzEHag3PDVLa5nihGy42WBCGYs658VrAVmTL6VQ67VYuykxHFwMNb64nxvzPnHh64Zvq7",
  "key14": "Ass4tFEj4AvoyV5iMrniAaJej59Xignb1tCykwXgtN5weTpUVVpsv88vm8Vb56mL1MQ3tHwL4s5ud8QcJrSMQ2E",
  "key15": "4MuPyNmTqHKHJVCtgmTHrqFhtFTmxRhdcbTRaw1Qb39TYB7hp1vCugLyA4Lrd7JymXNTHDKWWZqieZGRYUs3MGRu",
  "key16": "5dFjbkVUQz2PppBoAvs3TBofMwv9F5zQUYN6hZGxXdLgXdJupJN6VpZ9t2Gb83x37ah1Z3ZLsoaE3cAXF5jKHBoN",
  "key17": "5s9MjhZquaYo3Ahn2xHmm4P5kyzb4xhFNGeYiatKX8zgzGTaonUNjSrbus9ddj9nGBCSz8u16uqFGywWaNY51BuQ",
  "key18": "5YRbDMfXJJWorBeRYJ7ivL9X9FcJiZTPyJpNe3YHmiKDCp4e7qvnPduG5YmzZfWo8vYZJx1b8dhSJC7MLxAbKaHA",
  "key19": "2EEjtK3TkTtkYxmMtXKqWGMKTiVSzDoLpVFNfTDXtXe3LCzfG2akJKK9vxeJfwRtHYBF5tuBSUSxDwngxPShb9y3",
  "key20": "5hxEv23pWG9ccsyUL3WVCmv7ZzcZ2ogcdbjhJFii2kpfm61mZuRs5LGjAJbCeAeJogcx8d3D4C9wARMScQvkNw8B",
  "key21": "3LY216oZkAYJBat8PjhPajEqF5kvhvpDgvyCo5dBa4s7EiKbsJ6DZ9Jmz5LG3ZSurA5DrwnA5FE2LMeJSJUGQ4ph",
  "key22": "gNS89rpPUpXeTxJ1N4LFPykZAyP7joYJQxe3tTRh7b1HwPL9ybvcZW3nWYb3S6qtfko4PhvQbvYxbPV79Lr7S2u",
  "key23": "4GgR1wS2CHXEenxco7oERwRdmkU1CEDrBJETba85n3ok31DbF3TDHCLjPK6nJdFimZB42hoJKLvnhGYqJdwmYptK",
  "key24": "3vGo8aT2b48RP6Kns6thRSwR6817Eu5rYC8yDHY4NAFsNFPLPKYNh3EZ7R5LJWsCRmSygsf8G8UCbnUiyAgLNyAN",
  "key25": "2csNvJwywLcTgsbPcWveUpXSMqTNXL96ULzPJZSEji8v6vXJmM5AsbzSynx6BzKJNaQTS7KDkN7cHXp3djzSTsBj",
  "key26": "5dy2bvL8NxscU9PYSx8mTK2Kx8EE4NnbkxebBkaRSW9KFpGiVxda3aXxxXo2MCWxULrPxXeTCUvmDZ7WTUqCyFGM",
  "key27": "2xugfve69FcFMeG9ssNrh8wBYAEWUbgipiQWa2K9mKDU69129ypb2pxf3nX8jrznJcwjaoShgeZjVdVsZfL7VoTr",
  "key28": "4TiF9VqZ37YH6vemE9xhB1fBBm2864E3B5DHJdDmvBU5f4s4GeLtoKGd1jwfhvkfm87Ja6KigWbcKn5r8gb4BH4t",
  "key29": "nRdoWvAEdR34MVs7THjkKuo9FTxuXnJXpknppKsY6a9jRsqqjPDNFKVYZUSCbGPwq5XzFuRDBTyNmnNFNaziXFY",
  "key30": "4hWWaPVwf9n3v5AS8oEQqaAk2WTJb3CTXzhuifbyfKH7JYuRc4shusnGdvXxJBAuLhDrcD4KwXDUKfdN8SeCFdkF"
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
