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
    "oyRyqAQtMtYDeNQTtGpQSd6UMfLnBsgtEyBQRcMwQRjJ97yADoE2CVfXyFkTRh5rPvXvtVncqrM4LDBmBtEXyRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qixTZwkjLiTRX7575CFHmJKZodRP9dVXfJArKweqhYVM6fxQgc3vjcKcvdK1tcCeDDpZ4SAKAWDkr7k4HeefPuQ",
  "key1": "2sL5Au3TLufP5zkofgSUQws11oPcbiVZYXTpkDYtVpMf3AR89fEfcjkNJBcrwrR3GKjDR4oDEaUaRRFqEdH3fCCg",
  "key2": "3rkjx4N3wBEHqoezD7JpXbezjUdUs7EkLwR61PqFmCy34VXL7So51Xnkztb5pKW2s5FDrgXALAryVM4L626qbSZX",
  "key3": "2AKTBbTaT3fGQaBk1ZQT2vqGGwNXC2BDrtaLafoSsGEMMNZAi9cTMxzUBM22o76MeNbcRSPa23mpU2PGsJysHnQY",
  "key4": "VUHeJ29z5GYQvtsGxmc7Y3txYG23ysWujPyaQXEpNDhY1EWtTgE21amnu7ojqgsEESJfNeksLyLqhnysyZiWBQA",
  "key5": "2w8Vsp1bgevV5LgXDtFvMX6GHPzgwMycWFr6nr5UtndcyhxdJxP12sUzexCb1FSA38p59HkWpVZZiXK4kUBp78q6",
  "key6": "sGdCM6woL29DcM63Yvfq9PBaU618wmKhovohTTUvXPFwQv6ESuchXPWHFAJGyp1ZCJchb5rUWGTBvbtiVWk8k86",
  "key7": "559iw4oi6GBAYx6mTWU4jjmMb6y1EZR9JtWvVR5FR5gesHLHGMTiEnx1vUcj5HEXuGzfi8mxsdstp1My8bNdbKU1",
  "key8": "2SiHLDNYfsvVYrB5ogTkJH5RE394cdu4bk8n3WwZjgPyzbkrtNJbCnCGAmYXbbGLprYEkDDqRBxNtHYaaZhwKC7h",
  "key9": "2xmvRbWjmTzUfBKSy1YyJ4nmKfFoHaLeukemHYRTKo8hG2fNk2xh5okCJvSQL5RThjweRkUBaFzhEYfsCygMw4M2",
  "key10": "5hqivRMNtCGMfkH2m3RCyxkF8EhLAmciLBPCfNkhBAvmZLNpQGce54cSRxni2M4xATtMAMPqhLQDJ7cavQwrC7ua",
  "key11": "57Kh8rfkVHDnG7x6VMe5nPsQF5yP4gRGnq3jrhJNyNYu2cXUyuK7uFSgk63811iAUFbDxLrnHcrhcMyJMquUo7m9",
  "key12": "65mqMobPp3gpeFQgvdgLtm2vTd8837iwpAwJ9MsaGr7YsVRfyX8VUrY8hYAf5sshpYDNLdj9cykaNdvYoyHStECH",
  "key13": "2EDNLuhewdWL9T7vDuRJQS15C7EM7CW7ThGJ3TwbbU1a1M27SXuytCj2sXLEmaDpmCvvKNKuv5YJyh3WYMQjDqXE",
  "key14": "5bm8KHbzFFdKvi3mjeKySSZntLJumvbAQBGhGmY1126uaQy2brumL9aov7szTJYARP9fCpug5jSjuJKL9UAu2Wt7",
  "key15": "5q54B91NXfVxGNujqNRZ3msAVJp5Yrk7BawCMEwbVzPbs9gVH97D8EhGJ12888cZnWEzJjg3pDPSNrkm3ief5Nau",
  "key16": "FUeqaHZNJjAZgnrHqvT3MUGFUBVAM34VEzJFHqM5hfdkzB7Cagq9rPQyMGp9RjJCzUzqy5G8gSgxBTzTqsedguX",
  "key17": "25jKcakCc8XbfKximyuTyh5e4dKJbFJpvsHveBSUUe9NWKnWCs5PLtGpPmhTFTZMqvfFvdZv1L69K9SPeejoKtWR",
  "key18": "vtv2BmbNHdpSYuhADHPQeUiAmWF2cAQ6SsSJd3vVC2dANH8zSB4GwAXq5cNyb2XXLUV9qjZBKg845byPtRiTWM6",
  "key19": "5hHbFRkGDjbKPALr7a2BSRNc8kXWaurAnYCDEbLnZFUV1F9VNrNqZmSxmcG3Rhhsc5Td6Y6tNR3B8Jqicb5fg9Pm",
  "key20": "3nm8rdTqrn4o653w4GVRGuvhvnpVAEVr7MnepeyzCsz7hHJRCgfPUuN7Du7buPYDMtEzLPRyf3vc38CCB3kmSWnF",
  "key21": "2xfSAEMZu45GBzCNyrfEh1QpVSWy9znA76xaUnj5ZK4MZFeqh6KBo2YoEQyAbW7BKsXUZkUEEXi22ojKRJ6hAJyZ",
  "key22": "5ihnFnY6BARzQtuRm96jTBqUbXcp78XCbviff8XTnm5KtUCrfagWh5E92AdBaRy9H2mybK2qwQRswDAMf8F174zj",
  "key23": "4S6uxTPHMuNWdBJ6zmriZghvzgjf8APJ1Qhqxc3ykkt6NdE2oNbSyzyzBBSnmKFbxyE9gKMCGJDXUEdgzu8Du7QZ",
  "key24": "4dbwAXzy5419wJUs1USPLvY7rCHbLsuuac4WPzZ559UG6Pq2oaK5tW4hM5LBzqLKPiQeGF356KmvLdWFSALTeNQP",
  "key25": "24cBVdHiBa4zP7iHG1XzWhdmP9kaV5TuD2xPrGMBN9WpzydWWb6owo1BUw5Ha37uQ3DRw3MZcLuH1yNsnRYfr6Lk",
  "key26": "5yCZJXvxMvy6gYYN52Xo9N2DKAtm2zDQq8k5PhyV412qFrLVCb3hkSG77uHhDkSSCU6cBkaonZkwgk7DSZgTERYs"
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
