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
    "4TSUF4z5G6nmmVkKkSMRmnzhUXsSVEuNLJY3BuNbD86t73uJcEx9noLEU28afMsDjPoYHkLudzjxrTb6TmCFtFuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "332F69yzyrRbZ2nDdJ1d9qWu2vyNjoEbGtfhTKEge88zdmgTpLuo87xPAS3ovYtBqdoSiekWBJ3v3vhGYEmdn3dB",
  "key1": "cdh77nVFxNzP8sptvdUpGiZXRDKezFXSG5RntxAJypo97oX8kj2WUAA82pq6HdG3fFKm4v1csSstYihvEjvg5Ew",
  "key2": "2jwp1t4ndi3A2VPirsek8662uvbvWe5QuVvGpWAHHQ6DzpDUUebydTHUdaZCubWZYcRVD4RciYbc1Mxd8Q5yAqpj",
  "key3": "2R5ZxSU4fRLvCihYxFH2w4GphpVrDtcaNu5TrLgXhybMq6bvMPfCfY9zGB8BsvBWZ8EzQohE72VWbDEFeKdDj4Un",
  "key4": "3KbL8BSzKHBhsa9mnBurUpzrNQRkopHcTBuLcrkaMTx555fjjPg2eCuVBxdUVPXQ4CR3SnTPz9hf2xkruZnZa1Zn",
  "key5": "2nkG38kyTaQRDSjfvfcvdT6jyo1qBA47VWt3t7XBnwZSqmviA7TFXUSx9W5PpxMtvgYvfxaXEdSfbSHntrzidVJw",
  "key6": "2xdSDtU8e5H5LQbVmxVx4h2XCF6f2h2uw5KWKQXP1kCZMyCESgCXM7rBpQwaB5ZLWQHY1Ngu5waaaN1vBac5g4ft",
  "key7": "3T3vmw889iRosfXJghG6NoXqxG9R3ec9Tb52tU3DBcuTe1GhEmWsrK12TnQdXmVx2jXFv1W4gM8GnGyjKtEReN3M",
  "key8": "3oP5h3pzc58omPN826JEZkYz4aDY1jR6JdJxjt8A8ENG1HG5Wjo73u3kcCsM4Qa2k8cqKxY5q8ux3hSqVX7sUHxR",
  "key9": "RPR1QURSUcNkXzJBEuv2tHZLPqK9NeCwahdWR6Jp1nQVf5WLRjJnARMrW2JHcPXTPidEkKswTwaujA8Lj4F51bt",
  "key10": "4aeQyqR4ToxYnpMELWocrrfek3aacZL2oXL9wfs8MakE6gnsdBEABjry2zNzkBTQFasbrFBLdomw9UG8b1mAGkF8",
  "key11": "3dgpCmwpW99dWqeTBWDiQyxbPncsJezVJBgGBp8gbtDF5FGGqmn6yy2goQVt9kHMQGuWPkbYGXfHC16geF89LGVy",
  "key12": "5FqL4BZzw7ZMc9wpJMr1DLv75jdNAc6zgwxC4nMHePYCUQ8pz6FLn34aZ3TUHV5n2fv6U2LWFbd9SxSnjmCkGipp",
  "key13": "BR1YSyyxWHodzKTQbjPBWcqYHuPwxXVV9WFHANdpVsAAbibJULDmA3jciKTo73BmVzQXqN2EXuSzWf7tyfHsjgQ",
  "key14": "FCeVfSmLWvYfNJYbCj5ZDe9W9GsK4iBtNauxjYn451HRGLsC3Jz8AipddCgWrjak44RFNW4UX6ibReZ87jAYTra",
  "key15": "5aEu84NrGU7XvKxqwBFDN1FUybEM2xHib7wPNQCnfVu9HhzAHDvUB1DAtBhj1uxqPaUyn6ZJ3peH29FM1w5tkYBj",
  "key16": "5D9jUjAgUapErpmnRCC6cKkmckwDDdJKzA4SHtd5KC7S6D3dD3K81mjeB2N5P1rZ3tzZDC8eC8rBV4ZSdUD6Fo5m",
  "key17": "4WN8ZVHzaL7gf2A67sV3PQeUciHhFc5W4tTGdZYGW2SLGwqmx2CnBxhGp6JtvuB94SqvVbSFJmsCX6BnTqRfk9HP",
  "key18": "5wrPJ1AS4aC7ZGnvEmDszmBP25kacMWahkyyv84f8eD2pvPKH75FbsoFfhg2HGNptCoAeDJY6RnSQzAyCsC71VNZ",
  "key19": "4RDTAJmpVJFyQfhjUtoKZ9utB3zTNPgsc16mFLuJsJU8W7RAXvZvv74HapSDJzASPCf31Lj1eiNFzVoNzqc66zZn",
  "key20": "5FEZu74Saz8M8yz2zKM4VsJKJYCf6xACGxyj3Rpoyxv5QRzT9bJC4tw213SHjDkhtgT1KzjZYdzoYuFBYP9596vE",
  "key21": "352k58bMVJaDRk78Cj5qWabJx3Z3mAoAiTC6d7zQrZkHkKUKNWVDu3i9FQQWrM9ov1hJh38Lfa8NoAqG9VpAAmnC",
  "key22": "4od8QcEX1gmQi26UBPNEgs81mYaCNW5g4GMu4RSwC6CLbVKTKMSmaLFCFvkbQLy9cy7PSphcqhoMTkE3icn4y3uh",
  "key23": "2HQaWQQjGz7wTJX6TRFrqxDSc12gRbhxFJ8KFsFC61K9GYKewEtB8aoE4GHBQpjvDXPHNDr4bvSyDekZ8Mh72fSh",
  "key24": "2At1ZViXeyyHGJ4WzRHa3xVgo2JxmprvEzLZdfHungUv7oitgTkZ2V2KpqzmbivZFEKWjyUjRYgjYYLpDdyhuRpa",
  "key25": "4X8JSWfgU6kH8CtbgpECwRMTwHcVdj7cqhCAMs4DqkxZwSJukt9grxoZucAwFbWcoi1UkwkJxxVkkuDNekV8dLJj"
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
