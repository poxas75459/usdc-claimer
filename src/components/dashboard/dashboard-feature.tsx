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
    "DyApDm6AJMj6pe3rudyvRXzhbpjP5DSrZdqRDbip1J1Yn4vahEWkG9LvLPSHGy789BPoNsqs3bC67opgfshGuYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tWr6QJpTezWGKfBnowcsRy7zdVR2nt3oPd5bWLWrjGdB6cfGBgRFLSTknpwDJRcT4oL9hMBeAxUSSCPCkqYm6q3",
  "key1": "3fZwkNHEYGfAG1BjmYrxZtScnkTUDpASf8yRAip21qHfKUEovQpY6ZreuW8pAvfgkmLtFHQEafU9v3SvFZBi4gv8",
  "key2": "zdB3p8HCgZzeAenKgCbQASA3DKtJy1msforb5doHquu2aCTddzAyYCBxXoYd8yS3TifJT5WW99qVBmMVk3oNFui",
  "key3": "2pAcRURpHr4KJLYZqRet4RJNcCjnGAbRfqiXQESHMPj1ANp7xMQBLZk5efk3yM6Q5ZbWHgmaARdurzphgrfWfpHb",
  "key4": "hGMR8NB5wpwaVtPmiwy67AwYokHWsvehhQi3sXRUTEdu7Unc43vsxdrLi4sQEzxU3c9oANZSbC7T3HajNVdMNFa",
  "key5": "5B4TCqyMTL2m96QYpFTofUu1otnSEUE2pDxU1zsPsUREvtP4JyasojiwcnWudy6Wgihum3gtPqBGwmsAZwuqJGjs",
  "key6": "4sE1Dq4NSUZxTdLMdAxx7zwo98zwhf5oopgB5ZLh7NtbW95udVgXYzUsufFqYn7CSwbbK5YDsYnRA9W5bR5KrmJW",
  "key7": "567euggx5zRUwh1QnDd8L7goKG5EtbQ3yjTWVWRmPSSFyGExvD3k44r9oiowyWojJRAM1XQXszdEPSMqG44rKaMm",
  "key8": "3DNsGCYcYos7KRbaa6T4WmvQFtNpnthhUxyUhmFvwxwLAZwRmgTNTVntBHxQzULdGX1Nx77YYto3PARtrRZbFMTc",
  "key9": "auVdwVDVmTJxdNGvCVbz63PaTwhSz5AehtshHkdqXK48FhDkH5danRmvgjyvAEt5nYoYhkd6BXpERrHyZGHkhZe",
  "key10": "Cd1NqvptmiWi4Viq9EEVvxvJwPp3u22iLzgpyd61FMQ6SPYcb7TGK6RAqZ9zB2QdSvifUFuJvYrLc3WEfNRKgvL",
  "key11": "4MpxXEVRQFjF3mYrsyZaqAw4d47qpc49HgsKsXsxDnwxd2uDYoF2rNDWJN2kH3PvBkcsSkHQYBZqPthjiuthRR84",
  "key12": "4q3PUqYCbVtypp1S3LKZ7JTC9ELAMXNis2n2ysBxutRwNRqX9xWu4PaHgynV6Deoun4zfRY8ZV6QzWDJAq5TzkZw",
  "key13": "394dmEADkVTvf1ByThDLRHQ15pNjHXNVaYLpWkP6W79fK6Zfm1Z73aBcAh1DAXqHFsDneibU9wEbqKbQvjXgZ8va",
  "key14": "5YzExYNEWUdy5nCqnYBjq3aWjVJp1KutXu9nRyQixZ4hJw73Yynnn4WkvToUMgxswKBiUzFbjUBDQxvo6XKAedFj",
  "key15": "2apogLW1bEK6xwN9gyAZ2HK7y3PrHu2VpaTQjar8qG7hJ1V1Q1vHbTdsku4wAdm9bZuPTKqLv6YwpBEYwEBKMY6Y",
  "key16": "3ECrUd1H9Ke9d53gAQZXpRpvZExSkfNwXy8EXRQ6cWMcV7oWpeKiipJ3Sn6nYuZgEA6GEXby16U9Gf8z1q5CQLMP",
  "key17": "5dU24Pm89gTa6LGUGWV4n3hVWp6uuRxmAnkgvQwo5KhYHJigBdAMVi3WFy7EzJhA2KJMR6jPJFyHCeHBVbLXgfoY",
  "key18": "24ExKErs3badiWz71GUT2dhTetRY7Z8Uy3Kx5uTgXE2qwuLuNAUcFGJ8fQpBZtz52LFP5zLbdBiAMv2MD2NqKQuv",
  "key19": "3rPbCtPAj7QAWq7m8ySCNSRw63GRMjBURavJCWBCb7WZB9TYVcFwjy5t4oNG1Q268Q9niyEemnWaaXQ4ft9JkxrA",
  "key20": "AMJCNzX7uuYLdjmKLymAHx3Kt6s2LCZttmBVXufCqXnrPCcu8uvq3o3d2Se81ZG2BTb5g266fSkyQrSPNDhupB9",
  "key21": "3C5yPmP9ys5dmkk5egeJwwE9QYPx2Ng9gLSpat4ojLbuCNkPp33642hngzC41TeWVG4DNsQkT3AAjoErMVzMCbSY",
  "key22": "5vd4LXn6vUepYy8kQFoRdjmJvx8uoJH965dE5VxjSuKmBQHM8r9mj9ADHe9czfxsiuZwh7SKYa9K5zUCXXEgfnYt",
  "key23": "4ZWSeMiv17PwssxC4RZhUTy169WeQqvNUVxsG53tuy9yH7T7idPRDJshP6TpmpesrJtgdmcVBYEMdUftTkFN9WfV",
  "key24": "Bw5D1e8BB3qiVgVENP7MGPnECuEt3KwTAgKogiBRA2VHj7JLfXNPuQaVc3zFxaSu8Fgq23M3Vqrbzt69cbmmu81",
  "key25": "5b18hzqrudWmPbN4YPTNF3qWGWkktsToA2CQRU6nZAeg388HjiXcu2kFXVRLWLXtfWq6CkR1kYvo3fhk2yxrUv6q",
  "key26": "3YcSJTtrAAVVyVXb3ScwDfdL4gXak3EyddLDwGW2KbRGj8DsaS3PVUfj3DwCh2hZja7W9gRqrMwtG4Pq2Pyb3g8w",
  "key27": "4GbywKY4hZGr9DxPcpZag8ydF1V59JVTk6cMafVKwRsC2qUPWHANC7TBZgp2QcQwxe8wB7mfhRHjayezGZJkASxV",
  "key28": "63nBY7j5yHWYPzieM7sNdZQuJhz8Bu8KFadygMW9HeMPhv4AxMmJs31GLCHdz4yX7xwx6gUpipz4Fje8BsNbv9Wk",
  "key29": "5Ti25zXiktRKbjRS2i1FaHMfQP5sPeQseZ5hatHfyoL12WeDYL1BG36fZhJ8xnCM9CmxodYPAQf2rtWgA5fwzzWE",
  "key30": "45zTHzH2egYxFNLSJ9BPgF7gt8y4Z2diMGmbPT1iyHzDLegTwUxo6WE2xiTu4YT1tihQ3BTA3v53nDenwqrHgjU7",
  "key31": "5ZB4z6MzCJ29dG9cX2WUihwCmxBKkjLW55MfyvrGVdbcAqCpXEHApBRAp3SdmcfPijQJZf6fgWHRCqUPa3GhquC8",
  "key32": "r4SRknxkTjKBsTke2QcVrq1RHLUVyCGbEjmkVJ96xS9MNsWhuKfbKXnxCWFtYuhSVjyqJVDgqy7ncKcJPVa1afG",
  "key33": "4fx8Uy6Txmt2HvMoi7fci3G3gbVwbdmHV3Jjbbha6eAx4irZ9aMdSuQtvmzJxZztydGpzSFND18jJQpDRKu3pr8N",
  "key34": "rgW4VSrb89PQ3WNpFRC21qArbDtSBBrdjUoLhoR1jNt291obsRaDGSAf8pvfdacy4habNcewVM8kLS313P8vUh4",
  "key35": "3gihzz2ffiTACPMfaCbL1KhgnNMb32YvehyN24YZs3KTCgbj11y6QJfAin8HJ5CBbScyCUzEqvJXc7mKKDUKyv1h",
  "key36": "5a214FKGnQgcBG59J8m4JcHvkpDvUUXXWQHDjeVs16iUBgrizrXQ37nHiCDnCQykN7P8DCFoyhyhbDySyMx6baEu",
  "key37": "4QJWCEZgGMxhQ6qLXNdFt3hk3YBZcndRfgz9D8hwZJcDZGq4prfWE9fn4tN7GMGz6UYA7UCcccQGaDogEzDwxiwD",
  "key38": "5YDrEinQgb7jkh7jqFPzQR9T1VBSfkqy82TPTofL2XtPFLXkj2LoFwTLRaJUjSkZugzEJr9mUQ6h4ETNLLsN79T6",
  "key39": "618w1kw69XEs9GGFv4BTqTinXb7miBWufgm1yihuCC5HXWLt2qQKMpdE6kzEVzx6sFHbEJ9vEx7mE68sc8VcYN7V",
  "key40": "4N6B3ifSQUowCdLkRUHyqXwvm7hqzWuo2z4KvKPKnf1Vsbuigp3Gn46iwD3XfWTKb6v72ky1pB6hWdyQLG9hZDgP",
  "key41": "5B2HX19mYJLLv8tFc5hguhnZoJf4bKD9eZBgBwCYqMiSJEsxggNQHnnR7wPueFERoqJ7TULTsZtKGK6WnvSYjL5X",
  "key42": "CuCHNw3y22GUMrSZGbvLxw2rc9VAjKuyqxxwpWa4Y6y9DdxH3S8kk2HKEWeohfk7vdZkgaDVfTFNWhEhZ2365PD",
  "key43": "3PRx8G9VZWiRf4AT9WtetDR9EaBMd586Rv7GfDrGn3VJcWsyKiJdX2wz5o4iapFWSTPjWyUs9xaLu24e4JHaBvme",
  "key44": "3ojfrzcCkdbuqm7fX38ySUswz1tUAJVBDTsZWmYvKSm1pJSLKk7Sft1XH92y4ZmtzBHkJH4A38ShHGop3PbaKFqg",
  "key45": "3Gg2RV151j7zYjFqr3HbjakpVWkdU3GbXohcp3QWpZgFbJVseKNnqbF4e7wLjFFogrXBw3d8bA4DeJqnTyJeJJ3D",
  "key46": "5cmvxMjFJhM3d5YZwTARtvKFe1osRJLYQhdBRfxi46dH9WfQSBgG9AZmWZ7ASzBSWYmTCrCTttj8etQbKJYaY9rM"
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
