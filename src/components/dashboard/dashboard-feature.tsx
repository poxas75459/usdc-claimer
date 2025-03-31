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
    "5QmB2mfQ3cJjMCZfR41MHEceJHNAYke6TPvmYfUsBPxXdeqUwNcLURb2QXCT18fWfZ4GEsYQMCN8fLkDRaBSXzbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WRRRhQ7u57kPMhh7LLrHVK6bGbMH2WnP2kMPA7BptBpHogrmK5jUcugTm4Vboz9SNp8t5UZnmoZMJVMZvaJtaSu",
  "key1": "EFsDGkdMWx2WTmfFcnou2Zb9gKxAyeCdCHjLAxgbjpwvMVw6FB4xhpShaWESagJ81XjpdHqSHGeobEBizVmpHJQ",
  "key2": "2vyLpRk3WbN4mzM7jfjjHsGVeUuyYppqTTZ5PghCuGJSqoN81YGukmpW9jSSUmkSDz6cLXpgautKnqaTRHLBci8b",
  "key3": "2WGiWwERWaiT4WhwytAiR3LJSkVhpJqdxZvbZJUvTLyEHoqximiQeDSB9FaVHo7MjyGyj4CbbhRVSf8cTeTvtRKP",
  "key4": "67S27k7uvPcA3Qb4eQpoD4J5TLJzqvw1BLAugPNdFYG9KXpwzH1EidSLLYXbvn3W1uzBXV4TyzxtMFuJwq1k8s8k",
  "key5": "5W1mxymVWB7V95LxtDQ7ost7EXBeRumF63r4wVhFVGVTSfs2yVMP4DVGKhZ8wVYjRjSgPFwafyqTmdyJ85tL9uhA",
  "key6": "1Wamit11E3o6i5MYv4zq5KvJFBvCQSKbVArS64zCa1LRzBBoh7kYvKoUYi8zY9XveRYUCNbTcRAyYBYS4bR2L87",
  "key7": "4baXDc25JN6Fbqga862eGfZAC7YgGmAEgGYDoHhVPY4Dd6dtfoP4XKDQkQx77E2QvtpTZamVvu1bNMYKjsLFNq6p",
  "key8": "31z3F2Ax1fXKTrC8JzBK4cNXLP8XkhEKFUXMqqFVDHfzjtcV6gs5N6GUiTaupiYLDM4LJGu6AKGpJSbrHuxRnsrt",
  "key9": "5vpF56R6sZMxTQZ6vqcWqz6VNFYJy93D9hj5kkX8bRe9dQJm1crvkERrmhQ81ihx5G6BRZh9zBTtz6qzLzxTYPdU",
  "key10": "549pWGpvudhdhk7EXZ8oobMz9LWqfKv1jPZ5EEUSJGuT9hdnSpPXiTu5FVGDrmJJgAYaLXUyL8HVdzgEPkkbSYjZ",
  "key11": "4gZDTbAVVBtrUexNK4sm2jMxk4qkWuJFcLdqi6BAvyKd3qKNXwqzU3krFmwomvgVQNddwFGxRoSHxB8Ch6FYEz6S",
  "key12": "4xFJibFMNyySmgKouUNh9LEUXf231aCBJrHDWwjm2hyi2qKQd7zqGdrMPPumRUfNzyhWLxDShmdeMsEkx7f2vExP",
  "key13": "2cJZDgHa9Z4f9nBrjfTEUotRedzKRfiSkvjYNd4Qndh3N6XRhBV9KBn2bJicXLdu6gDuYoxffvJk2q7u7MZ2orKY",
  "key14": "48d8FmpiFTcZ4NdMLhTFRGGT9J7aNUS1HMCaWDfgceh9ymjghatP3aAjMyqV2MrpvtooSFZdFGdheYybbZt3CjSx",
  "key15": "5GGPUtFHkFSkjcWzujM9bLcAYXqurEahADd9fTjZ3BjWHxieBV58DepcBkY7uiTXgAUjY6L1yJxjaoXvSzWq4TMK",
  "key16": "2uGJTBCgZYhz7nqxqa4cYzMTHcyzrWj6wLsSoRs41TdarFjS2ReAH4WcST6dsjdPWD8eAGJMxkUSpayPtaoBDnoc",
  "key17": "3CpJHWZkLB1opY1TngVWsv9iok3iSFvnTP8GD5ugj2Sp3rqLLszDfTwDeWMTVfCCnvDKVnRt5RTimadCk3v8WoDL",
  "key18": "2f1hBCiJz8tZjZDrMDP78gWbWgP3gGXdDCuiwa5skHvzfv3EPxFoeLhtyHcrGQR21q96P6BarSXWQgDwPChNaNE9",
  "key19": "3HkyApSVyJX3RKKa4Egio9ykMHXZXa8XxScpNYDh9DCAZTkLDreyVnsGLauvsaJGkCGFmS8XzAkCKZykBgmugLqS",
  "key20": "4uRZvqng2QnhCwgFVZAdRQqAEfeaKRtEAQBdr1dubBNdZc8t2uvvd7ThUyM74rLXmgPNKQ5keiAx4Bgz1f9x2cds",
  "key21": "2W7qWUZhHQSnMkFZj3Tq6GrVXBHdkNrF9syCt2DEtiQjYCieNMAJpow5tzW2eQQT7MXN2SAQaD1pryhLiVAfeAr6",
  "key22": "21BdmQsNXmWbxAePJRcL3aMHaT6hMRWeWCSDd2QZtDac2TaUdJ1Q2tPKhkv5dAeKMBKZ2JNDEx5g7YMZHJMcLAiS",
  "key23": "2YRUkViSvbceyBwWFF8iSqqXvC4Pf2d2iBec5FWQfPs6acwDn1YMjBL2xG9qpgFVEbHDtgL1iDTwpkTA2QqqQoDC",
  "key24": "2KxdGwpv6gYAuBSX1EpPQmUdG3h33bvRXQmfCYZsU5tBW9QRUTjxkWULepdhu4haPJzmVtZ8gAc1ANR21292YAfp",
  "key25": "5SHaySTesXYzaadnCPiceF4o7aTj7Sy6r55vbaxsdxiKqrgHLQtyDK3BokfT7t7464y2TdfW7HDParF13ggvhvWS",
  "key26": "5CSGKQEc1k3tBbpW2ERxwMS8hwTxe6LrcVicvaL9ATwMtQMLkaq2n7Dqx6kod6HBmAfSNpXEMstGM6EQsWoAecDc",
  "key27": "4ssQvNvpJNwZH6neHQr4uJ7heQcHrFwHNctxDcnjQXgaNR8H41T6PArV1BTCnsbpX6PdcxwFb6urV6P1bZT6p72p",
  "key28": "4DnuqM39PzSDoy8bVVJdH1DQCShRCfggtxJZgzpJw5FGFRzzos18GfNRHRW1VgSZm4WSxQf6gNxPTsZCcTvk3KBm",
  "key29": "4t6Hdvx5v6SwPCroboxbdnhK5sqmviSqx9chgxdwHyhZYBY4sU9AVTE1z5o2Mw586FUiwKjmZpxRjaTLwBU31iLh",
  "key30": "W2m5vFJ79DRcfkrYNxjt3gYt2kQTaodGoywWEVRkUYbRnpS5hYrMJXbQ2qJ4CVW9WLdEayxMu1byj7tN4cGkU1m",
  "key31": "5edS1HpN74K9iEC16nVZBGuNuybMowF9As8YwU8rq3Mdd996TKrAC62tf7FK4DsqYa3kPAnA6R1MQPtozHLxCekk",
  "key32": "2FrS5PUMiwn43qPPedYZEPEvJMs5Y9Jf1tnc9AzhNQgsrANz2o6LsK46NgnzSAmTAeytFLitPFQffxodggyRPstf"
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
