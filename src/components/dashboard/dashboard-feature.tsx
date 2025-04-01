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
    "2gqkaterP7o5AWFAuKc5LPNb1N9ijVHYj3sJFgMt6WDTeuRCvcMw2wUCR9XMt5SccaAEAUYtxTrbN6VFFgZtNiDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58AuJ6mqhNE1tbyQzR4T69w25DLUw1qUz25VLqwq66X1s2ATfPR5Q26b9DucKZbWBez3yvj7La5Kck8KHALBanGW",
  "key1": "2KZZEuYmvfjQwFQEuu8VkhsGzyXsm87hB27rsHHw6vvh5zhJZtqrzNVD9APpXMJVAcWGBMmZ7ErVKvJUSa6hCRsS",
  "key2": "4RGRhQJmN1XCNwwRGH7RbTsv3oakLw64kNUXoMKqp2C3rZxfp5AWSRv2P4f6s5TE7nLZg7qyaep9U7AVtr45i3dS",
  "key3": "axxmxYTqFqunh33EMiV96NGiFdrZozQ2HkLTdw4JHkxdXXiinUUeuHKrJ6ffAMeuYENygbbypsXaMRt6zxf8YCi",
  "key4": "UQo3LsbUptpaT6Rpv7roRisJCy1zagQWTZrmScb2XA6twGskst7N4x6UW1KMjcRmvyG8CctHcGoP4kAb3WKjYQK",
  "key5": "JkRgqYWKrKD6UUUvihiQ8R9MpjCCjuM2PACLx7K5LtbW6r6Z29vDda4vEUMmVbbin6d3QLm2VLN4NQpyWiBZSMY",
  "key6": "24RQFxdqoYvncLGgMDvf97M75mJCnuTrvsRvzqJPKrpENkxTCE2E7vWgaKC2fW264iDEV3qqDmgQxeTWQds33nQR",
  "key7": "4sa6mjo7u6o9twDJsFqkMSobRUpU9WrkH6n8fU9rua9R2MpKpAXeZgMpXDZKpvy3tDPcvYDAsYUPbmmstZsdYJi9",
  "key8": "3y7ntaUY76ectZT7CYed5BPsjwecYVN5pt7rd1BuuwsR6zsYoTrrCJPj3DhaaWLJ9WHCPdbrVQ5RQvXfPvR3G5Yt",
  "key9": "4vVbaHY6jM6eRWkiaV5R2czgFJ6wm4EMxE2NzMryDkcn89fz1FDFHXjJWdRQBwSR7zT1f4SmbEGAXmTmk9c9S9AC",
  "key10": "2L8CBBPxkLPZC7v8SZK9LWgUcBcMrbYQrrPkuPSB4J5GwzvgFVKm5ofsRvt5ySzLCH5utfrkfupFHS3VxmSv3hZZ",
  "key11": "5Dokzq372FbbP4ewjcQF5vQMJ2THtkbejS5k4FSnTQ61RKKckYrX6qJiWUfsjEwhrRKP3T436hAry74w6qQV3Dud",
  "key12": "5LbocQhFk2qek43vXHbSDP4crNqakmdsyJQVdUNJUYkuMugqvepxyn6svCru43GSEWuJq4Rq64UDvwGY8f5fC6C3",
  "key13": "36yuv7fSpiteGudZXRxgJoMZJT2MVriqvCDk71eCU4wGuZvunNWsJ6XpBaAvL6vP6ATSwvKQVeiqAxGTuAinzjL2",
  "key14": "5XKk67TZY6bEh3pGHavuafG9nViUTySvPhEpGBrnn15pyoegd6rTs22hT1z9r6Av7Ec7Gq5qhcPkgw7gSDcWDGLy",
  "key15": "zq3oxThsXtcQL2F8e8aQMx2hEcxbEMjYDUjdXhAWqz7HNv8eMqnr4o3RXp68FcbDpoQAzPBPTF6n1x7Q7AfTeYk",
  "key16": "3Y3PKzPd2RKXhTsfegCh1daHd6izMjSyu5oq1FJn4fU1wHvNvAE6bJTkvdzrzQuME61F9tTxyGi7u6wYEQoJcXHu",
  "key17": "4kT7nwz3XHVw3idAx31LY4Ntmuu1D4D3kr5hUTGbZad4uJbanxhAT4TCQuswTvXZRkzSpF2vx7iS86PTK4Ja76tg",
  "key18": "2ei6aVd6xoUZFdhsk8qjvqwpkW3EcJqts3ngioNkB9SbTnxeSBFhKL4BnMyyYXDMT71HXFqk4YAzhPAAHz2h1i5A",
  "key19": "4G73jgNfEDHCpUsvE4cGXy8Sbb36gG3zsCnukCxFiksBUpGZBJEYBVo6CGqHEhyGFbwxPr5JE42gY5C7FfdzwsB7",
  "key20": "5uPnxLVVquSSZz7kEnidqd3VwdYa4s7F7nRjxrnapzc5txFJ2mcz4eawinRTowzFeE8MoPi6edvLjxWYoq2F6Z9r",
  "key21": "4yCmSTpimVe11BLGDyXqygvuynpsfr4p8ci1h7ovXPVesjRzUi97VwEQiqoyCELZhwa2PNbarvvkFTKZH3rxy1y4",
  "key22": "5Mix5wLdgP6C6wwgJGUH5JmWjpm45BwF2VWBoDaUrGpRTScKhmwPx1Ukj3T8gTEoiZ6eCs5PUsPKt5gJBeYnW1dG",
  "key23": "4yZ9FdCxSxeUaWfsUfTLVLmj2sTr5xU6PDy5zTdL9byw4vyEdjrC95HvAw4waRTQXy5s9uXHfAQotMvWPMf83iW",
  "key24": "3eDVAdp5SNoVGA52DzA7PpsbTw4VzZdwH1Av8fq1EjLh4bxUb5rH7YCNHzigivc72FHZWwSvV2sFmM2nJq49VTGa",
  "key25": "4tZkciTE6ZypCtHqFtPxgsfExPYiKtqBCWGTEhyRjrgbGHCK4KdBHC6xTyxePMWxPWgHkHTpY1LV3NiT7QHMsCjT",
  "key26": "5B7FhDve7GemJD1WwhKVZoDuUrEHbzXov2E3g57xfSkfnrZPQrc4z8teQctoEey2SU7MhcsGo2oG9aREdiVgGm84",
  "key27": "2nXJrs1MY69aTj8gSGBSCjNKDyHHR9tJDTJSJTKf7PWPabPfyvAmfgVSGqaUqndPGCygC4j1dBtnJKXfwcmmQSHg",
  "key28": "3kx9JyUYfN149ZsRbgt2URCaqK4AerFL9ZnyFoyr8BhzKQy7rUcHawN34KGgjqhMrcyRWS4dHGdUF88xfE6zdmkv",
  "key29": "2oF2RfaXg8eDypWwTNzX7UFb4v68SzzaBWHifUYQ4zd5jSJM2JhQU9QVxSn6Unw6njuAmQXDoTkpjr4PZuGNexFh"
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
