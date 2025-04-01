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
    "4NMFSpVBefudUstkNirZJXnCAi2bMdMux5Z5Mdb3pgQv3pubZXqX74HLfWyV6zpMBw8Q9Fdyy86yKrwryH7sfXFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477ncVLwz5HSGwD7JPGDkkPAeJtJpDCxV4TAEr222G1ALMPditVccRxCsaztqXyAz5J4v2FiBgSC6QZDZ6gWU6Uh",
  "key1": "4FP6TyvygrzYK87CxhK5k86GCL3DfMkahcD2eJ7pqKXfFdLKzRA9vCgyFvVrqjFA2zUakfhonjQM728L6LThuDHh",
  "key2": "2ALE9N47MUev63oY1VuST5tQTXYymSYc6R6ZdYxUWfKRfh4RRQLWHs9SoSCcqnoMLP3yX7YxHQJoJh6Nie7eAP2a",
  "key3": "2BhpSGgaL12AMMai6RLb7vt5UTjrawZ3nXFrJ1QoyLpvDADRWDo9FEpMb9Gh7w4dqJozKzTvU5qvLPQ9yNsyRF3m",
  "key4": "5iJFe6BVsJbdnp1GrrJu5fGkBPZ6k5S4eiF9gPNWikASERU6JQNP8zu5vbdvpVGHMN5LAP2G5uLdDUm45HXuJu5q",
  "key5": "4PJgr7jkkdzGRt5UU9NBqR1YAooQxtpEsuTSCi2vkZNJtEWKjk5d9RDwm4PnF7D3Ah21dknAUEFLMrX87Brrr46b",
  "key6": "3rPpQjddLijffwHfX5GiyJpQ5eLL52kgRNs9CtHtjigHg3BvBSGAXerxGEq2eCsGbeCQtcBtPf1Gxs6M4QqqnSpy",
  "key7": "4d9tgYxoBqt7VnMXabL47aykJwe43kqvbrDXQPGXWrb7wiLiKSVCoMq95UZ1G9TGmfpH8rJvENxsFcjFmY9qskZj",
  "key8": "23DHgpspqgEJ2PumqBcWYvsZm7yMMJEpJCzCJnXthxvvqd95Wy8wfX49kSTKPoWzHppbDaCbacSbWezUcaSJdeYE",
  "key9": "4F8sAtvLH8FcJB9uN5bXb4XnLM54L75FDGkD3qXQDxRCTpRjbvPu84jEtVj1yzxrFRAdB7tPjeByNE7iCGJi3EPR",
  "key10": "4Vwsf31ZTeByTZGBg5WqEf9hY8Dai6kFtZpfsr8LAhKUTtccUmV6HvgLWrzheuMBvoKF7E8RXdVHJmyJfRLFjQBd",
  "key11": "2yrEQFVv531tGVzXwENSp5SVj3xJ1ScJw2bMBavyAXmp71cWAHSc3EywcmmcoQgDhKb1kUc6uJDbG5cxejcritRA",
  "key12": "dW9WAhvA2yfeeq9ucLRJU67SpsR9PXCTzStgKQVnDpjguVGmKEAKG589Gfe1RhkZvCUETT8KQoDvQPYkUNYCXAs",
  "key13": "XuA8Z2Dd7PXdXWJncnKnDGZF5jq13Ucb6KFT6cAxiPkQzM512Uv7RAzX4Ure8Z3TuBXRprJ2DVPVbwmJQSjjYUH",
  "key14": "nnKidsRN4QSMCZ6qaaxQFASzLRwPCT7vfZ7wHMjds4w5pM1UbLeMQpRL3AwEXNN1wwp9k2ci6rJA9rBKTz3CevA",
  "key15": "Mrecosu3C1MmE9HXNeYPvVmJnBGai9HdGKQdQyWGjmzqJ5fkrEpf3bAMcFUiR3ZrEawbhJUwUxzEqsyD3YVoxyz",
  "key16": "Ws9sM88CFVvQNck1uo1XeVaN1L6xo2DArHcXMuPsA43u4wHYzNufevuyLGtVASzsDBCHXFWQ2by9YZFYGJtRsoy",
  "key17": "4YnNGWVAQ8qGkLe8sLhnwNXNc2cbsbD3SwHeEvfJG6uWcwWaK85TykW2jgYeUcdB7ho7fsGXJbtMkSLmDLgMM6W",
  "key18": "2JNQkR79mW37TngnMMhQZuYxiFvFpdiy51NDwMgwepvBAk6JeKdNzpZPVXoUQ5chyBoMU5CUxfx3hTYBH3viqeD1",
  "key19": "tfiWVRTd4pap9t6Dmtpkgp8vNwNkAf8s6JsoCqSWme9E3yxqfgMk6QHfrmSeeVecc2EkdUn5Y1oWEDCEmZKRypo",
  "key20": "5tbJkqYkwZYAVnaH1EVJZg73gqqRSopdTbFM8zmeSG7SzixdP7e1ZbosLrvgQoTPEe6ZhJpsQobyXDxygXL6T543",
  "key21": "3hVw6uByV16vCFxYMLjuLV4tXt9gS2KULnAYR39Ei2nqZkNhw8GGDURSEXsowqHMRya7cpYWwEH3JJj5WpJJ3ny4",
  "key22": "33dRoCNpA52vMYS4wehogNo6SdFvZF9aHFxbqJ7v85dL3QuMFU64t5j2hFUDP3UcmEPqQBQniQm6CLVX8r34nW6A",
  "key23": "5eQL5Ybj5CRvTbyU81beTF2NNfzXovWNY8uTjp6pXECs9h7VWbLjdfcTCnE8nDrFf8K1DAYofUMDv6zCXHZsbYDh",
  "key24": "5rJaDYwEq55bq3bBSRJ9o19Z437VSUTbKsZxiCe2TuzP9i4bMYLQGC3H57K2xf8QZdYenTPyNqgF5CgU2RQPbtnG",
  "key25": "5pLiudRQrBSmXKhqhficEJ6hBmu3SatQVCJZEcKKCVaY6qXiniRM4feRyhRcbDe9VThBjgfbZMR88NuRyBqgacgv"
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
