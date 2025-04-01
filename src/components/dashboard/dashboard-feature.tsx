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
    "58MxLX2MEVHEyqHnRbDeazaeQwnusVfpxR3YAf339jRRijj2RHW5CV3XdqsawGNh4LdbnhwkXjMf9a2cfmQxSyfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2quVZDux4t9LUHuL1TDaEASAdpLKmH89wiNJd1J3AaoMXSh4kr6jLY6YaGoZt2W9Z6eEMbpjuC9EjkVC3UwSZ85M",
  "key1": "4ky9GD9j38zgDCcAWHJrfZjrEQvNHwVHMivQinHrkr75yKjxbc6BH5Mw8ZFw6K9KPUy18AZQ5nrJmPzKmPDq19kF",
  "key2": "AEzix5mSZWbroQeQpAcXuewnxyU3M9KsAaraJNn7bpzQDuEpX3iAFqj87HbzAvu1WS5K1Xzs5uMKrNR8D71oD8Y",
  "key3": "3YtVtYNGDMPZjHS1gcuFKJRHZNxQGJ5sckeVyrz7gx4hFjwwC8DAdCa7K2GJD2oZXtBc1hCu2FraTXH5jVPkfP2e",
  "key4": "2C7pCnchNjpu2EhAm5cEPEaKhNef8PwQgQDPFwTfzYhz95zb4AjkgTyFtx9wyf7Du2pn9ZTbcD4Q6EGzE1AV5KwB",
  "key5": "2ux99WeVkjJFeErSrzpF67AvS8yLyjN1oQbVRa2RiMEoRunTEf91giQckpzrGDVAdcX4N2Nsn4EEDqpUo89LTet4",
  "key6": "v9PYtDgt8FHm82BMF1e8xKhm7ngvpMsqy9qUyEJUNYQSVM8SfrnmgDyJscqR1PLY6VbCMWLh64KxzbggAsHWXHS",
  "key7": "KmQGr4TwsFt2GCz1L1hfq8XNcBGF95tFaQTVBpzfHfvGyUpLo17wnhKitvcXKqowFNWjGRk62sGUYh3itFYqzRq",
  "key8": "2VcQa5KmBohAzRr49L1XDaU4Bh9NctPR9nsd7SvmUbHWMRs1S7fhFTVhRBt5HHoN3uTtqRPbTkMjQKqQRwvZBoNd",
  "key9": "24X8QdJYcCUHY1vzXj2NrJZhGGbo2D5a9aUfbE1RHyz9agFdWwXCRuieebJjWwL5ChQH966QLz8ZLpaiBDciaP7W",
  "key10": "5uxC5yYNkLu2xSYbAFnvGAi6UVaYQEVgw9ga2S9Wt7KW6gocW6u2yMqtVKU8Wu8JpQJoAmLjgoaNFkAumTuUHfdS",
  "key11": "2Fy479rdpviPjsBQw8ynZMck2D31knri75eFNRmcLqGFRMA8rt7MoKxziAkAfiF4cXYsnd4Aew6qLGuQdZVqgKqM",
  "key12": "3M6wmWqYQsxc1XcLQXHU8BGHBPchAoUiBMHW1KCmcj7BT4o5v8xbHVg5tBrMNRNrKqUJ8T4bpqHLbHzgMXAZeqYm",
  "key13": "5e3vD9WUQuACTV5YQqsaLfGjpF9rw3A3BWd1QParMckCj2BaJbJU9DkMLoavFn5kYA2tqV3rAVTnMbfJQk1RSUxK",
  "key14": "3BQPkTdKR56f8EBQucbJeJfB1J7u6Awh4W55iuzzBhyqbsbE89Huc7BL6Sw25fDjFQqcYAoxdHPan8NUHaZbVLtx",
  "key15": "5qj5HETaWZSPKyppaUR8dgSWArTEdqgQP3WR7BRDjWVHPmHaRYTGC2ijNZEwwaGVfLPkThH5HRsr2hrnAx6QZwsF",
  "key16": "53G3R1iRe696z4XCcm5zFPw8UMp9cZr3SRNQgJjkXKBaeGq2xaKm9CY68fXXfxQ2CenmmhZ6ug5KCvztaRfSi2bw",
  "key17": "5BYbU7ETCpWtHV7V5yQbNCndMyUgDb1JMYBnjnGyhkxtUQwmBXUsrxLwQcY4KrHnrP1Q3k3HmprXqXAQopNoDnEx",
  "key18": "4hFMhkNVUC1gT6oQP2gmnCiy4NtT4LpEgqdPiuPQA3s9bzfr3yqGZN8ufHBk2329wNw3ZHthqcYrdCrzqEPm4Lxn",
  "key19": "25oEqWRXUryyK1FRe1rx8U7VWFoe1ocTaZR2kw9aCBLoATAgotXoF8t1Y4KQubWLynbZUerEgpNqCUJJVZYjz6SV",
  "key20": "YPHzkxsAiycF1TmzYyoFobWyZCcxAs7mrfv2eP9ksmGbpJsdJTMtixDQmuCiEPzgzghFgzLVtUSy76rXKDngAjF",
  "key21": "5CdHrrUdSoJgtFA5EWj9yr6PAUk3rsVUVKSQhAwX6bshBYQ8CQZoRACLTpHhXRbebT5FSR7k93hjs8Lz16o5UwY4",
  "key22": "3RLsBR8BhTuRaicQURvDUCRtodK3Sg9cNva1uXg2LRYjtrSLZ7p23AM1Hgey8DkFFJFfiHQVviRKuoHaSrZ1vxAs",
  "key23": "3qATGBjHpP53ZMtHkMJnFwZATU8Ufz8UZbz1ReETEtLxEEKMb7Faw2zsWfCfVPX9Ja1CKAZbVfksRj9T1yL3CG3b",
  "key24": "61JYc59dsytHhdsYwLt3iZy74ckTBzAvfB467NKQHhtqnD5z68gXPT54jTpunMEMuqbyaE1YchZALkqLzYaupXNg",
  "key25": "5pFArFM9DzJAo57uiiUpcjdWTdH5WQKbWyWjjjmSRvd83dyn9Jy63NEmXJ9sHucx75LjLjvBTqAAMNnoHC6BuCB9",
  "key26": "PkQdPReTjmb5G2FUA7AMsWaJVAPB56w7tdH6tvNL6kLRtgLSHVewNLoavTVrP3N2snXVoYAECyTtKrNjAywttv1",
  "key27": "3vjYq3uYwsfC8bEG2rZxZoJYFrNCFu4qu2yTsoRFzRyt6DZrygpUNfst7r33ogBn91XLxq9EkapyTs4AmNcRv2bN"
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
