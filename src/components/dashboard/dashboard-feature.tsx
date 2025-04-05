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
    "5Bk13seqeEHff1RzDPeXqnhqEsvXwhQP4LuBHhw5YjEMDUbtPWQcE9hDcwkZ7KGgtQ2HSiv4g3T84vCwBWyPA7yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66iKPCHRJBnWe5YgAtjKkFqsRpKzQxbkLRJvpdaW3RyfWpW8qvDR4WCEwSQUTqqJsbn2tsb6nLLVv7rwSw6vZFww",
  "key1": "5ziPL1XAvJDYNQWHqGwurLqo2pEVkERZub43xneEbJW4xuEXR6u5w4Q2N24GsHSkPjwWYHzBhyKUqxAcQY7sEeVC",
  "key2": "2Cox6SdNBk1psHLG9z2Y6CEm9GtgcJ4to3cmwQkcXnme9ygmzkdV4NT8tmfEGcoA2CS2mTkzjfn3wjBbR5vPLaGa",
  "key3": "4hdfqBjUXYmdfKY7HjK7c4cpto3FcVVuTCXSYqZHuzjuKvv7eKxEVByCJZ53roqR8mKsZ9oushhWFhHqDmhQm9Da",
  "key4": "4RLPs5E81s5trtWGg7fCCx5YHMg4ZMfJjFEhW86N1AmaPkEzWcdkEcsV1d3J3xooHaaWnPnNzQ29hbpCj4YmKrrD",
  "key5": "5THBrtUhR7SqpGoUDkhgUENnkC4ciaTR5T8Mqru72wjsCpmrwFE6mdfPNsECw7h28RS2xwfZ7ZhfffgqDe2vL9CP",
  "key6": "Nk5P4Y11VnUxTysuztQwX5zgYb1VbpgqYejrD3KnfPzjHumALfdhXjNFtWbE1BbskoMnimo8fWcmT4z3ihi2LHn",
  "key7": "3aCNzfoe2Y9G2Uq4G6JjVSZWPweDjFsBVcSpCcBtNkhdefNViDLVo5mDna82VRWFQauYtesVV8J3vkNqxC8j3oiT",
  "key8": "3TzJLp9roYsrfphSCFEuSjrTMF9Voivc4HTYpZ9AzqVcEKJJEni5vU8vTJtKGPCPZt215UMoXdzmrja12cLVgcoD",
  "key9": "6M3TikWRrDaadtdr3bnE3K9ofFwdiet2RXgfsCcXQwMiM6esj4DJcumeeaTZkNfAwDq3GgWYeVTmC6BAY9ViEXv",
  "key10": "4B6R2TwhUrhj2BJ9H3t7BzQfZJK3qy7ZV7rB1Mb54vcpNqz9gAW536RkpGNiU1JyBUMDcNYwCg1YupKXGNUkWByo",
  "key11": "2uYuQzwy18vtdW7hswKxKRopR4vrFoBXLSW69bZYBKSssxi9CkYD6vxcmrx58jfSfpystpFbCTHFXLH827aBzM3d",
  "key12": "2oEdejFfYhy3mih8f8EByLpwNTfn79gHZumyUAV4wpSuYWqDhtJryuJmEpyWv6S8K74t5iFReQAsyDbV2FE6Tj28",
  "key13": "VBp3m8f7HNCJ1QmQss1wXJaxHkPZ9LsEGgJpPCxSx5bpDBepEgEdSASSNHfp2dHTniciuuPsu6dHtpkbPza6yuW",
  "key14": "2q9HkZ7hBXBhbDoWNNFmRMm7tJhjmKFnRZth2T1GQ8kw1nYsrvxBPKyQg8YVtLC5f9ptteik5prFz73iXH48oz3G",
  "key15": "M7qMYnwSTRBNLSit9cLZQmK8fybKTfeLSrmjoajjp28uep9e5brxtVnMZTBhTJpHzWL3vfKWVJGY3NLYLQN9jRj",
  "key16": "zmXgmvERQwEj61kksowHEyAeR5s59t5dUTS52kYkpPTAw26CZMfqVG6qSkWrXKhwJMEePHZP4kFTUpRWPt2hB5n",
  "key17": "5JaRcjAWPtLCimMrz8fbCvCeQG6xxqLi1zjpAcMomjgLde3FjTGRUNacPtkWhKHvtpKSKK1FTSbsua5ZD7CtDPeS",
  "key18": "2odXfdCCCEjqmyqVRzeoSYZa8r5A3tjNFbD4FWBt3mvZ6Rh4J7iWuHhszTnscYC9qeH1mEX2akMDhctEPAgZYgsr",
  "key19": "37VrUWqDU7kT6gQ7eBHoggPJwf1v3gWBRZvtFryBNpbYjLUswxFwApczctpaWvVhnt1tJobdnbdBem8kCkZsZcMu",
  "key20": "4VnbyHTrAJ5tPH8QVvbFyJmuRa3KqNjga6MFNE5Ug4auoPKDbWwTqqAzqWkSuE6dBSrru3fWajBZXVnDPYaPjkYQ",
  "key21": "3sSUueQNJ7BjUdg7DiKMb9UrSts8kE6Atrpvfe4swCWLNFAXpwFLXvzpiGnpoHBv66xtTz85raivSavQ2wADvAxv",
  "key22": "npUiivGsxXDNZk5Cb9v9H6dz331WfYiNssv4pb4GM4txGtvxQLwqygxor8JUsFTrjqC8WDMboRoC2ksgRw5Jd54",
  "key23": "4PjGhK4KEjbiJkkDGEUxb7n2p3sjamd2WspT7rDYvAxnqmhDLtfpLrw1Wd5oPvZned39d5NiYztErfS6oCneCUR8",
  "key24": "5i3Zfz92cgoeaQAKUdNjyAm1Au3582NefcqKPZPtw4ZCnsKRkjRRoPiW1t4S8yWccK9KVePUeSgetckP6WWxhpQP",
  "key25": "wz8Atg5tq1Xd1y1n7Fn7E7rdMM3ScQpqUXdyEnUDsrncYdoSXGdbZtdDU2iskUfxvFhLpppNH1wZmqnY2khuvC6",
  "key26": "aSzY9iiaDWgZHv5G6ZvVuFGx4KQafM8MCrhQ7jc8iBpdXFVpRdFShxg69aiw4xvy7ZzC6Hfsg1ajjETPS69rvTc",
  "key27": "2SFrkYUWcDsRESj9kiB3aYwL63gdVMf53P7A1FsHjdHZetH4Y8714y2pZcCLzn8Etx2Y4jyWskvDQwiWqrhnHs9f"
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
