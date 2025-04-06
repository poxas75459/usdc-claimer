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
    "46dk9Nvs1YTbuZ4LDLmaBcA79MYaV6RXm5VpoTFeiWAhXxe6pn71yL49BfwZnPewHiUcSyWaz3wyMoKK14FxrBBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eLHbBrHPXwqRt7ors7gVrA3pKaC12kU4Uon2oDzY2r43UWUSHeXVZQoX419uhM5yqz8b7iqLuGFnyDdQtceb8Sq",
  "key1": "49t1pmVsKfXnpUHCsYb2YBdCdn3iB73324AfZwaeDvi2WjLhJhdvRVJrkGccaqrx6gpytVVtG12UBVRV3Aob7oe4",
  "key2": "2Ro3uBJV3Z2XjkFx2t8znRK3sXSdJBBzBtqWb5DNqZG9mTMAG2gq8D8WfY3CrGUBEhFiXw3QzNgnr9bTwim5gVcT",
  "key3": "5KAWjpbMpQmTapsUt32gEjgkHffVTo46nrTAiBrothQiCZqmBxz7bSnanrogb8FEHVAzmmZrs2KurjEohK5SNMvy",
  "key4": "3zd5ZzNuNfyecejMWepdxThNDFeuWbkNAeiwEww1gaWRjHYa2YkEpDvtqBwnRGApwsV8jMm91YzXHBbo8zw1khKF",
  "key5": "5CsYUzVt1Gr33wjEbjAC8SodL2VDEViZTh2CcfXM5Q9aVZ5fbLHLbKJZ2fqsqkf6Ba27iqJz4LsiDbg5HeZ44S2p",
  "key6": "4c75dR6U5kPvtA6QQA78pNmGPCDgXFYtBDLWYRDFN5BS7gV6MRnxdhpjzstnUTUBLaCP1qeLV9p7v5AKMrhB38w7",
  "key7": "2hVNCBX9fjUSUNytYHpgavgh1E4HHxdwSAQNqZJCnaoNLCeJPQpLkuxh8vnX1jKBNFreEN1EDTA4Bt4gThvFHGri",
  "key8": "2kWT5BEupsnNLjbteF8YAW8V5miG39hsgvHKcdZZMBUBu5V2mkcPcuyFdNFVNd2ASHj1ZqyocK5E1hqeEtUDAbDB",
  "key9": "2x6GthoNAs8xgYxQUbimN8EfkN3GN6uVFLDGodYyd2srvfvTqzSJRZy7YVSGjekU6Mmh8AwpQFEj3UP2qLT9v8Fu",
  "key10": "3HbxpYkKYCyG6DJ1qnt6WpwSCAcrMAjBboYxUNina1nDk8wmj8GhJnaa1tCbvSpPaY8ZuowHjPi9E5QvUCU8Au8V",
  "key11": "24oea2iwkxwj7LsTmBzrThUgKfC12a7DsJkL44qFdyANbfxiG72NWgAPMTkviVV29cmHeYkPvXfLQXL5zjuGHpUN",
  "key12": "An5SzgqQ2TPTgYZstHRCYoPER9etoKxGnwwpaXZXfg12xXPMmBo4qgdvcAYe2LY7RSSdB7QUKmwDjRRyUUkwkc2",
  "key13": "3BF7LrJgo8ADb2DxvbvPWYmbaicAMVuegSvbPfR4YnP1vTVQeA2QaLSxdxqijECcG2tSPEHD949kT4j75B3LSXfE",
  "key14": "5aneHmYEzZ8aeZFcwdQ7oN1z79WPGYmSd9gjHd8gLAcsBQ17Z23QhNhRDFyWrRRENbRgFZgmrpTWmfXsCbQR9wdz",
  "key15": "4dZyk3u6qymDk7n6Aay8dvpffCNoML8rfsLHKvtHd2qBGwzLA6miamSPXavUs7huDKvw2pAC2Ch5Pn1Gn1KnN7q3",
  "key16": "xeDsdhWsP6NtoJt1hos6TAkKzsDeBnWUh8DBj4RMRWaZzMgxrZtcEg5XYX48yEkz64H2bAK862o57LuxxfWF5Rh",
  "key17": "47Z6p6oStsuQafNcEvQ2wh2wB4kVnQVjpy9A23LkN7WnMNLr2sHAxJ3s8NDL55gakmsKdaoJCMbTBxPWsFoWq5aa",
  "key18": "5dFKGV13WVJtAzsquQsv4MwdjRXMJyw1ve8gFHguzzew1MKEsGnC4P5efdQiK9JUeiZUqvDhdcidxbWrUXb7moit",
  "key19": "4kNYX2BAykLRAfJxKnQKcm1nuWqvKxYCcZqx2P4dxnvSdQWywMXBMhRKZfge5Tr9Dpk3Th8Dd8ZEzvedh6rzBSir",
  "key20": "3Vf1GqpPccz6xdfCyGLyxz4iUcxwxgdX7NhfkxWqtpNkXrKGMnZeU7imLW63X5mjFzW9fhxk9bHYCGc5JHmKy4xg",
  "key21": "4v7WCCF4ZgQuo9E4cbWvotV8v87MULdAS3KDmL33xnoF8iZX47LfrS8prrY4WPzLkAZJ4XLtsNx4RHHpF4DAG6Y3",
  "key22": "4Y3nbiQgVsEFQkvcgDnUmdSxPmNbRHn6jLBnBFwkuJeX7VMN5YWS9H4RetAFLPtjuoZVTRg2XVMMotbm8JDhHWtf",
  "key23": "2H1NxW5o9oNpW5zSyEZDhUjW2GhgutsyvVya78vEiTJUbcFcHmTbE747bsapsaFAYo8MfSMWaaFq2Jk8si7Gw6N2",
  "key24": "HXfZG5adURmySH3a2UJGLBjaDt9ss5aamqMdSnh6ruta9bMzYfvndkHQfue3aofK4Qng2ChKoPYXwhEqWX7s6an",
  "key25": "4ymPWJcbn4MWusqpLEvaVsDRMa4NXFMXN8KARTt547Ke5Kz9t3d1RwpUgy1GQWcRdDZeJ5HBdiruLVw8FLVcMzgm",
  "key26": "eepYe21EisycWza6JRWhsPf6xN1A3xmZYLQNp54o6Hr8LSReucPSdcVjEnrrXc783QHNDkDPdhykAZifedqnkmx",
  "key27": "ZAZcwSkp4Up5qDd8kYAtrNpgyWj67iuiKQCDdtePJu21UkceHQ9VwipebWV2buf26trpy66DetKiR8Cyp2GreWW",
  "key28": "4pvVnerJBYPw9cuSrg9GM4t6gwNNBn3tkSPGGeur4j6e163ekxo57UPFuntk3igKa1fK7iYzeRdD3t1ShtCk6Cqe",
  "key29": "2sXp8cTaqmRPAVyoE3EMYfjvehFYtuJhEuBi6trTt3j7PNnoqNm9kHZpVR8M4zsvgMN8rtpWvFwFRiRs3wEipzoJ",
  "key30": "5AEJ2Q4Y7qdj79X4jNYiFHUNYPou3aZvmzzGM7AEuBdih5gaRmmT8ofS7syhuf8PQFZZocmCCZAGNszu4hyWmWgH",
  "key31": "2Gky71QrGtQ9S2GyfSpyjqxWFKEJJoKoQCnBBYtA8j6JoBHwupeCH6JtvbNq9gx4eLMkByXbKnfNivUmLufRGcpV",
  "key32": "2MeMPWP1zenCGsrrDu5R4K5L9Y5xepLxGZyHkyUs5P5ur5WoYXqRxqeqqHjRSgGgyd9cEQMfpoNRTygL1jkSmkUL",
  "key33": "4nM1PwsBNfoHFppSxdPNhebVCpYgaRsUz7XLJsCehaFZzHYKo2Retj1BusaP9EvW4HhSo7USuzeBLZCFSCG5cub2"
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
