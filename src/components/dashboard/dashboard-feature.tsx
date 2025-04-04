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
    "4CVu31KceiiabXM38qyJh9vHmf6hKighuEnQveU1Ue3QoX8VowjmyqabJZcbbWKAQZBGHRm2c5ay1rhT9tUezSsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T4GR5DZPDuk9rTLoDLUZh2cMka44W3AFC6psk3XLQNeDvxfzA4FDUtXXPPZ37iKYvUxLAQ587RUD1rgzoaeBkST",
  "key1": "3jZzapdPs1kWU9xmRyh5XsfFjAAEAYMkNsWHf5PeerZeitcK6AMTxRjN5nWiiDrRLX9zQURcVMHjQSbdCuTMEfrP",
  "key2": "FK6a8bwKaFKbaRk2HHzKf1wFxe346aaKzGg7EXc7HTASzNrSb8iZhZab7tJBq82BbsgnE29kdGMhg8cS8P4gjpN",
  "key3": "2QyrX2GKGKfSzKbp1d7ZBTgN77aLm9KKX2uHmM1DVVEQjfU8rcJgUr7BAHagX4dw7ej5UzSTWGEsL6s1XRFV8DWx",
  "key4": "2CxsN1vhK3osdX8ac7EdxHgu7pgNgmBsbeRaRCsXCLuxPMiRdrH2e3RGRWXrqkTRJuPxQw9tpMLe2FjKehzCnns7",
  "key5": "4Qq392dbRrDCDSienVx1pY8GnCJ4k3eff7PuUZrAkMc6fHHvEJAxgFKyiD9SMfSBHmeQ6S5UTYQmg9YmSWQ3HAnL",
  "key6": "wKVAE6BLk33E9Q9HNRqPn6rc7ykwDC1LP54Hn6r3b9g1eaBvGmWvRFdSWghCi6FYPXxj8sLS3XEDNQ7x3cy2rQ9",
  "key7": "2VBbRz9Pxw51ubuFWesSRVpPXs9bFor2JrQMrxQwMQ6DvFR8HRRc3knNPHu2jkff2UuVAsp7sGcpFwrmagE7LBw",
  "key8": "2aXicemVXi9NBZURvx6N4tvMybWQkqU4xwjgt19EBHiAnrKf4XDmezMYEVi2ZiwJuTddWDmPFBhyr6FxokpxnXrN",
  "key9": "36YHxPiaDZzRiMSyrqGXWdkxZDhHGP5Hy4MdKqUfhvCP8BdqYtyYHFMEH2P6Vs8fqT1PvBe1RNktdWZxsWQ3fKu4",
  "key10": "4wSjUC2Bq9V8SVLmKLdb8he5vCLUBYt7HQ1WhkcN3Gs4s661EcTQgBH3PamA6FZc5VsErCUdaqhupQ8rSjMpZRie",
  "key11": "5ufsCkbcHWoszYQsx2S6YFQ56ez1aT9dBdELBVU3xN9nR3yyvj6a2Qbj5pNPAHX4nxS63eRZKDdG6KRU9jHf71an",
  "key12": "3jmEVmTuc21McqF9dze4q52DfXywfAs2Bm9LcnigwUBhD2jFQks7VTq5knUP3dBc4dra4AcZTJEvAFNkQKyYiiee",
  "key13": "4XC5HoCSF5o4GN7qPbqri28f5NJrkTW9zNvoXDoMrbFjbMGr4x72ByCbkdJjsLi1vhWAwABYE7HTZBbsnDQRje9Y",
  "key14": "H8mwWCcVQz8WQCVxGJcgbJL2qpdBd6mdHQRcDcwKY4uJQaLbmibjDeAfM58LEnB2CfsrCxECaqc3VwQSHPCTL34",
  "key15": "35yjiGKcB4hBS28arUFoKyxW9Fr3CCYoLZTLaqz8owxwAvXMxhKGYLRQDWG8NWVf1yyEsz6X6mZfgCdpHhWaCsxy",
  "key16": "3Lv3jivWJwffsAvnYh5VLSPVd227UTorwjUdKHQvLBVpzJeuai5jDgY7gedngPBgE1DT5gi6XVuxT76uFCDFpcAV",
  "key17": "3WDYn6Pz5Vz57tXCXeWzeBjyLYECHyXEV2tGSWR3PLPyLKM6Le647wwvP98Jc3niYgqaEJCec5UMKNNGnJRVt7c",
  "key18": "4Pnrb3KpP8Qg1MnyBfGzhdPDNRuuvpnMEGhHRfzjFR8eG1y36foZPJBpN2GCSKjABRMAwE6gDMdvViTGCoQ9d95r",
  "key19": "TXe8isWnZL6ieQAW7JUPJJh7ZoERFgYb4kdCTqPEm9KQL5TpS2Mb444PFYRoEVDRD76t4qNMZgbGwhpPzm6m4Hx",
  "key20": "3Qntwd3CJAwPMbc5tTuHEMTS3USUyhKRWtMgUMzTktw6S82VENk1sm77uqPhjSk2KhLzCQ2TGJcrm4gWzNiV9zQD",
  "key21": "4a1M1UX3C8sbR5g8s95CvJvG3gnpXM1paeg4JWqdFnbVNFTeeotUrN2BsopvayfHAQiKqXASyk1E6Jio2hXjsjoB",
  "key22": "5sZtqEJ666H381f923xyAxojDJNqRW1HBmuCMJfyAVYLWoFCQ4ABevQSbPZ3E4Lig2H62ymM3qkxEsbrjacW4Cku",
  "key23": "3vxdoff6VZNkjP2UnmdiAmGPqTZEwiSE3A8fPFm7SjPpxPneHYeXiPn19bXVTtcNpGe7cAF2nbhRUmuhd2EQShfu",
  "key24": "3L5uR5kJVDncsfsWErwrnv73EXZng5v5hfUjpSqJn1J3faVXf3kX4WzJ8xWykLZNED72FbTFLHKh2sPJsrfT3kPH",
  "key25": "uTJ2UPhyfptQP1mrFg32BkY9juZNUCsXtFTLg9EtAdrxH92V5QBafpf1LgcL33Z7UC5dk5P3uXsz17rumjxA4W9",
  "key26": "3t7jua4acA3dbcUaSLxAGKjeLkHgSAMWEXR8trDJnLeytELNMw2HzdK8DmPDWdBKEYV1qG246DeSssmYXiuD7Vax",
  "key27": "35zLN8tsVACJU7vkKqRorwrQKxF4Q7quezSKhJk7EPRiLxuBJ8v4LbuHRKv79PetrsBqnwxHQMF1XdqCNaWgaudG",
  "key28": "5LtacHjFPYvozYuutPMpmr83iprnjnLhZgpeFvzBLjRT4dBvx6fLS2oWEn1aq7k2apoUX2BYwZdQmuZgY9HdExQp"
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
