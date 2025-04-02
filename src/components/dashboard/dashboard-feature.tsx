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
    "4GuiaG3a1Bhu8R7u8sgP9T6YKgi3wbXBPvzYRMCAgu4U7FvfErDUYeNS7NvHs3Whpzsr6WNWp1YDP3CTy4wcQMso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U8a6H7FZiYJYw7WRA3z6Zy2RWUPdAYKLehLNf61RCVHmrEg1NjzX6JTeYukdaNzMfAWKzK4oxWe41bXc78135Hg",
  "key1": "ahEkP7nw6UcWRXGFW8BCdWfaLXrHxih64i16yj8hb96jQrTz84rHwZjaSW29dLW2PN2CgTuwp26gnYkLRQLCGu6",
  "key2": "zMX11rZDpGohKEwbkiJxurKygP4c24W4WowFmFMtS86nax6Rj2U1mYAyVBXoodLXvCDDmYqCrDrn6sAUPYiYXep",
  "key3": "43NbnbC46egpRE8DQvin8MLfTeg8useeGdjQF6wQJy94SXwNHoDRViQFm7kaffNzMGyyqqiv2jnQ57cTfEheSQnQ",
  "key4": "4NHH2QeHs3aFaaezyiSXtPQhB3iXR1jEpw1oj1VzMMBUBujngYcMMZ3NWxDjZjuh6ZhNgRMgDPjTuF6peFT2arhN",
  "key5": "4aihuEyBeTmrTtexGwkE7B31ju9KQuq8pKi26sGACfJ2MK8itvQdHA5EKZfGnq9noYuynTXY2gg1pHF7Ltzxe3H8",
  "key6": "VLVwGaWR46tTRhGw5Fu19WmbCxe6ozrU1kRCNQEamczj8dD2kxfneYHktQK6b5TYKJbLh5CyxgSU7Ncb3wA6MDx",
  "key7": "3aMiamCtJMRpFxW8wxAqKo7xexdJAyXt4sT23CuVJxzUQEivMu5DKHz5zSA2LcmRoms6BGbomdBZ21vfc81t9YP7",
  "key8": "2panECvSUsnmsSuepfyTf8b1xtJcNP4edydvNFPcmcZPZBCpB4hifjUqpEC87Zx3MAnc7hjKBPNwVQHGp6h9JbqB",
  "key9": "55joBiTTGL5pDHRkBGxqexXSKArff8CchY3UMtopUhn1RvVGniGHF6R7T6buAVQz7r1ACHSSoSG5juZmqVp1hjZ2",
  "key10": "4SZbZfCmwGppGhkqMUKdHcpeGfDBwftTRbTUR6EJCy7yGdu2F8sum9haU7fAmFcQF6mfYUQmLzKonaVaV1cAh3vk",
  "key11": "4SXucUM6dVMqmK5w95fe4NXye589LhCcFvFXE1HLVf5sakDYAKHYDfAf5SMTj4nUQMSkUxJtyq6hauq1wmEsyXT4",
  "key12": "rdyDPd4hJTeEhY3QAM5fu93Nbz8H4neCmMZBAEwL8vGXek6JEqAz2JBTRA1BY8D3SwHcrFNEv9Xd2A5MiDwRRA7",
  "key13": "5UcdHwcTyXcon1eoDM8Hpfy7ZxgEwxMmMX8oJn7CJo1Yxqd5Q1W8tFG1VbZkhJp1UMdukdR7yYQ1cPRz4KVcbzFY",
  "key14": "5HNAGPZ9Zk2VnBS14pVfveDbXfq4ht5PYFXSXCBDYzszsrz9p5D1p2R6k3JW8nx8FeTWFh3zhLNXgp5C7GG4EMwL",
  "key15": "T1yxWwxEcnKboysC3ZNTuCZZXvS7ppBa4xQvEhGAiCUsHVo6sebQwGqk3iMTXGNxvMJy4HAPDhscGtDp5k9ZY3i",
  "key16": "3waBxWVp29sDhWPZsG4hKFM1F7WJ1MQE6LwVF69teH6MhWMhYuFVr8wFyVUoSaRG4GkiAUjisY19SLv8KuB5mKbx",
  "key17": "36HgjfejmivVsYBubKDTpys6JjJySUSZTvZ6bN2xV5V9q5rxwsmpSSctcNCz24AWijvGjwiwSvYKZLK8DS6J4dkn",
  "key18": "T4ESkvV5MWpeEodRSfpzMcwaQFzMHYQkAZcw6LKBx5jxHqeCMXZoybtW9aPqcuxCicDrckUnaq35na5ATPUCajo",
  "key19": "4CkfRgNTLG4N1b5fe69yJtJA5fozpVVqmdf8BDEnncq7YLZRAGNCXoVME8nA4JJaHrv1Bo6dqnJTJyqQwVNw12Bj",
  "key20": "2kMhWkcbspT9eSKD9Td6HN76gz86aRcjyM6MvWuMhubLD2GWZxeaRKKJibdobNVbatktcE3QkqJ7k9ZN2Lcy8DPo",
  "key21": "4ChPyjDNMo7jE6nxpfnfmry5mxgCarb2oVYDXvnzfyMtnrgRFCAZC5JnkiEy4AQvjwzuBV1fwDiTJ71b8eN4PiL6",
  "key22": "3uHZRgf2Usz4mmMQXSCcb57TBXFp9HrZ4UnKPBy8nBECeEtq6WWUgxqikkyoEUzc68pVF1M2AnWCjoPbufqr2EpY",
  "key23": "3tyWGauas3mxKkfUCkfsLiiGToAwqjbsH2Cd1sKuy635TwTueyEqNbFgYFsPoFQa78VDED6cwwYZiSxWgXWq2Zaa",
  "key24": "2o6VhrXG9wDbD9uSshk5H5hZzZnZTpw8v9DxFYQNRMaXuy8vKFJU9B5wpETdCqt76MXBDH9TJCbQPCZcgzEW6ZXa",
  "key25": "5SDNHkYmMe17M76uqvgxgomL3yRcjMd3rA3mBasFnZTUoxVaWQN1pgF9fquaPex9iD4qEsHVxgBA6TtLMH6MQTCQ",
  "key26": "VxM2zTv1z3F6oZFGsYiPLa9uB5Frmi336ai983A5mZ12Q2siwinjVvTp449jjMiey5db1JxccEizJGtzBKx5z8H",
  "key27": "3NNiNyH92EMkSYe3HyLhenh38c6hY9Dqi7ka4H33oevYdXCs6xYSFJjfDouLpkcZ9AFFj3pdV4rj52uu75XQaNwV",
  "key28": "4Ph2ipCABr4q2FmeTXy1NUfsU52tnudxdYyQzjn9HxykrgjEgmPYVToetP66uqXN5YueR4Ju66mijDN3pcgxu9HD"
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
