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
    "3seGycbB7ZZLotu5mTU3XJHxTo1nNTY8tDtVxYr8cCvZ9cDgjkdgeRTYFJFYNDLdgg19CjMJh4PgAcPt732DrVhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3hWF3eZGqV5Eu77bV8gsWHdWuu6H7VukLQRrHuz4gGFa4uvDvu4nNyxvztdytzrEMoG2ZRNnT4vKVkNmpR4MMS",
  "key1": "286G8tMVKGepJBWjmH2ai5o8oLGYNdSmSfHCN5RHZn1sHMpGzZ3n1kzzf9ufo4RXd38UjCfR5EFidonj8HquNS9h",
  "key2": "3j1HbaLTuNNwKYattMrMggmRm3fd2NTa5C7eN9woLB6eUnxL3BhVUEAhHE6kk7D6pVXTSZ5zLUoDcqhCJHrDY59P",
  "key3": "4Ay5R7NzyZWBEHDNVgJUxtwVWtDhETFTSMa77n5f5sHnp3WPEHbE1XnAaYqG1X7k2g8gWqjdj1uQ8uB3VpbCQdMd",
  "key4": "3GLcoerCgyJTAnwA68eEUrA64PSmhZKCtaLYE7QciY5jMrf3vkhvKt9DMoa2p4s2iHVUSjnL7xwJHihWsmF4z2U7",
  "key5": "5rANZbNrXxgpm5sspkTZJ1HhF2xELYi76FrbwjCe7Mo1Y8zTegsQAst66rfQPnKBvKLbbpPUqSiY347SY9wxJzmS",
  "key6": "3vZSTuPXG1py2ojRojQBMF2Ken4Paau81W3sBACwRiJkyN3edQH7KUqBDEgVyYBABPauP4jaQUDo7S8m6LFt3CqS",
  "key7": "3PP7rGtiKGPkMAwbB4eSeJnwifLDmTmzF2XCzsTQm56eHmi5QeR5GmvJTKwpskNiKzvCAbctm6RzMFiCBNxs4QiJ",
  "key8": "4uj3FkkdS4sXKiH7ZXydEHWoWJQdZbu9whR8bwYRgWAwQcvQY4yXepKLpLPMB1oxZZqJ1kSf6p16nXLYndMKMgeV",
  "key9": "5WFu7UitNJHVguj9K3DYZr5rdP3APeuyGGLRJYU5mftAmAWwiy4rUYj2x7Eo3ajGZJMVCqkWZsRJKFtq431NtraW",
  "key10": "2i6etU8DT8rZ7J6UST9JnswDyQ8teHCacWJaNr2hcbrmR11HirzRL6o9ecuVvBdwYr36NmNRRV1LWP4M2coQrf2h",
  "key11": "5RFzvq2wKFiL89r1B6XVFnMeZRrsxAUjVKKPC15q3FHdrxF26pU2LRNv2Pzs8cFzfRcGTz2QvmA6Qe9pXtnCWRH",
  "key12": "4CQXRdDTS87KzwhQecgaTKFmo8Cyaq5QmZG1kruAYDkFJp4mNtEQwkgjwknuDA36gDxyPy7fzwCLHntq6ErJ9re8",
  "key13": "5wYqfS1HQ7o9JXu5pBbW9xvUCVSUyRPwXrJ5UB1TbaacuU91C5xu5t4pKgLdsFcrA5zwCJzJsHVoU35FtWxJaSBs",
  "key14": "ysMmfBiotVHoqqhnBS2cRdjuM6rbEgiRBAD6Bkho85W1JBmBpFcXLU5khnQ5wX68cid3gdoSKDecfwLTzbtpUCZ",
  "key15": "2XE4FCvpPF38z64U8FN2BDzCTYAeXPuFyF464kRtWHarfNVtApBTi4gqW9bNqHSTYrk5f96N3er4fxw3nejFXaML",
  "key16": "3MhgAQ2fYss2yWVCrKPmKb1NJw8rA1j4W469FpNDij2pxrRypcKAErZ7xmEyPG3ZJDZWoNtaqihgGBACDQh4BiPd",
  "key17": "z9kmEgWdVHyuJRnns3Z5EvzTG7CkaC1otFZVJgB8G4BfpYibf4iw6sD3mEHcgm3Zj1oZWhygVCPhi4S1RPE4PMP",
  "key18": "2QrWpaohMuujzMoSbLCjiQ8ehENhEnN7oHzDnotBdpMbQhjHokYDEUZD1nHDBopmMv5RbmmBVJoLumSp5tyFBL5V",
  "key19": "3gE81d4UFHg5TTgTQFXpjwBA98QcqAmZuFXRCnxBzMyrSexDrxEZcMbu7WCWGNXbw4JVqEXwn1S4Yyuo1QrUSxho",
  "key20": "23bvwAQWzdZbPBdXCtxfssU9Gb7nWcy1Uz577rRVK6gpxNxGavARExNui8r6Rw8XTXLr315yu6JunziJnDnhvk5F",
  "key21": "3VqyRbfNUG3CPjXcLFTjpLZ1DSiPzDrrMkqDRqfRwWijVLjhHnmezoySm97MkNSpJxpAJCpwtA5E1Ef4AomfBn4t",
  "key22": "3rvSJ7a6hb4FgPpQncZuToitCFziQpSqR9ECydcuBSFJBruAv3Y7FsfRnX2oJy1EiBZbLn8h4chGHedbSQrZ2rcP",
  "key23": "3AX8mEvFgHaTrUDgYQpy2uNRUXih71ozoUJBBNkeoafgncsozkih4328NC4Q8PCuQgzXk2xZ8MSU5ZJscG3S15e8",
  "key24": "2Ng1DZtDMoXmLh6eRjTby2j87DuCZ241oFz7yeJANGNHnU1gqz3cUB6xWaGDkrZK42vPgJAJr2cc9M13121R6ezv",
  "key25": "2mJeKUukkHXdyz2jECzLDGYBJfeAsFQCCt1BbCzMf8UBziGyMjkQKiDjAutEoQ5oCxvseibCoPFrQ5FwVDp1isiK",
  "key26": "5ZGLpRjM7Uo8DEqL3y2Us6MUGqk6ZAaTRsgNq9arPNJbUzrpyux4u5zTreVXpjRNvPFBQ5e3uNMiCnDN3VjgcxzC",
  "key27": "4kUdDCck7vK3beLC8opEajSPm52c37mD5AtmXDFi23YLHwBVUCRYDER68BCCo9yq7tNYPeC1Urcq2Y4jVdy1Ss9n",
  "key28": "4x6HPaTq3NFcxkxBthd1fZ2uNsgdUQP9eRAT1bx1GSKixfi8WhnFERtVWAhaEkKT5JDXYDREBWGyaWRE3VyLLquh",
  "key29": "5u971WrVw8mCBUXtpcgchM4RKgvkM24tKQznK1hKqcWhpASsMHJhaPrU1z8F796JoNumvBdUE5Sfy8RG7NFVP9bj",
  "key30": "ksdRf22VqNQX3u2MgpJYswvfcMcXUDxWDtPS7zjzggZWhyy4uxHpWmh3SH6UYUN9BggXcP8kNR1P8HcqHhyJdkA",
  "key31": "4txqHFNnVTwyLqqWhNGwDuAnHpZFF9mRHmRqFL7z2fGBEiJFmpYmDacUGXjWfi67YVtaiW21BVMSCm6uwuFSL3Ab"
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
