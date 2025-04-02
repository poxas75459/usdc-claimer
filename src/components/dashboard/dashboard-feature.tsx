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
    "5G6EQ9QtnZEJXuYjq8yDozydY8dFpD85DUVQcyYz4WZbDbSK7enfS2Yts9gwndLX3Wsa5omzPijK4ss3ayvRWYPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5csSM3ihSPTnHJH2DKtLSA8gBBoYerh6dZ6PyqN18bsc4ks5vgD4dFFT1h6yYUtXcbaUn9SjbfuMqB1AwEv76aD2",
  "key1": "3u7vMSyCs85bcwTnRQroKyUJ9i756iA795GUu6g5xGwS7CzJQNTZCJqexPb9scPDnE6ryQcag31agbj819Q2PBEr",
  "key2": "4hhDmaHiZtYkjqNbhifwkBhkmfTpvz6AH7wukFYq7x4qeZaf3e2kNPXe1eD6648y6dJH1FtYwgSu29L2esrnCYZn",
  "key3": "5sJAUApNDD3ZYjhm7GL2S55yiPxnGbjQJ2VWcS1RutacNcjbCuAyda281HbnUuXAJk6KMYX2qagCVJXZpF2xro3t",
  "key4": "44bDnYLjQ3wQg8L5ps1r8WE3wbXx13Ax986vqeQef8uXgAs6nK3f8KP7xUcRcLpiCB3urX3er6Z867AQ7Fy1MSXi",
  "key5": "4go5gqja2hyG3w7Qf9Rqi9xaDfy2AetowBGectS67svAiDFkUe5yAuLpH6a8QPDPUNbdw7PJtVKGwaypzgNCkj3z",
  "key6": "3pMv64JLmR1zWg5nnVKLTownfdhahRHPuZ5Qd3DjnHf9QtZUN4MjbpTLHXsxY8zTkTZpCqSeNgMLBHjxfL1nsTWS",
  "key7": "nuw5X4svq35y5xesu69xMaaLXqGuezVLKP6WTb9m9kcJban5C37JZwC771JvfbTCWF7M98jbP2JyyNT5B3V33jo",
  "key8": "3SS9cV5x5aPswrGjT3oPTWQ6h8BJs5YnMcs6p47B3rArapkq31pf72R37B2ha2tAxtpWED8wXsYL6d2yvnQMTNbW",
  "key9": "3ZRRXZcLfW4n16Jko56G9p4rGR9Qcr9QnCraRY5XVTfSFj3W5zgnN2V15HK6r4V8aESsWtHR1cGJJGsWBGwBs19H",
  "key10": "3TsTcUe8gFH5hQt1pTzrb9BubZfTFppmpZuhRtNr5aQFVbMKh3XANP6GnYXGGnPDrCE6FarT6bHfwXBbdVadJjhZ",
  "key11": "2VFFsXVwUgpP1Xok3ZNkAX7QEzqzftHU8M5Bmxg9AhFVuDfYUHeGo829CVmXZrahf11jEKByJ8ETzXNCscmcPiAa",
  "key12": "3JeH6kVw1TXz8s9zfxRPLGgXUXCiWs1uipnxhKk4EDTmKHtvcJjNqnDyk31v32UTTpor3bNGu2WQDfk1ALj4kPa8",
  "key13": "3AjLM1Y1wFUYspc6jJnjyPhE5RYFpnTm3xTaBGWA5sfaBuuhGhrr3pQq3iFBFLwbWESQBapbeW7VBiKpEwEhgha4",
  "key14": "3BYyw5HhQFXoYYfw8W24jDxWjLkWwjGZAuXT9QYo1BAWCNbgYnxR7Xn4WZagjhh5FEoVrxP3s9AsJnhK8czYXFvY",
  "key15": "3RvbqbL7E4mabuvzWQXwPo3BCmTh5bFkVVvLsBLSLfmNRXxpRufPXP4Hpf8n1Wz8jftuoW1Mk9wAWzU8Xhywex33",
  "key16": "kS9we1uwqFev7MuAdDiF2geEJMeSKbbx9pDSZhC6usG7YbyWac7xS95W3EaP6vsp6P1qdtoQ1SBzZAFL5RcRJMa",
  "key17": "5U6MHx4S2xRHvYRfJYhzyqmpkmPtQVnsaea1PUoS7hCQhfcaY8nWBSyEx7dCm33qXTAi9pdsEbDyyhUoBSCaQsiZ",
  "key18": "3Bx6DqeFpYWjpCjuzgbkdUj4SgKsmascnMXXqJTMU8K6VRGDpgYHSS87G3TbejwXkSPHs1yRdS1zQHgcWgyHK5Uq",
  "key19": "3VkPxfuihfu5QkiQqJYR1H3qV64TBVfQM8WjbbqzgRNBhQ53oP2mr4vB8mhgBTvWsjffaTc7dAeLghair1AcRiED",
  "key20": "45anAdWNinE3hF8XE2FzdkFcDfqUdwBeHdDsaXep7XAQXh4pDwhsEB7uxusHwm3Wk9T5NnorvJBEsJGzpBUoeAwX",
  "key21": "HM6DrsoPEdQBmcQ9d2Fxg9LL2y3RKLu77LHB272FherGA2T2dB4GeYkcwur4mxNaibcGFkFR8r8ZGEhwr4m7Gqo",
  "key22": "SsDBXn3GnZwk8WLCapfs9gveRhoFSNbJThYPvXELznihsUSp6u5RjwSsFbihFf2QeY7mQE6e7RCGzm7yHmeDT3C",
  "key23": "2ygoF4e17yBMC8UtXjWeWXcV7brEdgadXVFboU1er3eKPWHSpPb3fwr9PFHmPUgSApwcuv9SS5gqXFUjS8ewC6mt",
  "key24": "2dzevXxZjsvfd2a51KFSyZUJ1Bur9ZYCQWC4DWjYpt2xNuAJNs5JcECZfcYPcyugU2g6DjoasE7uZr17rNUGYetd"
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
