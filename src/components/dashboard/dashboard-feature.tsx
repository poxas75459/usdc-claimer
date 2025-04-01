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
    "3ANJbvxJVxGytgYqnFpeVapWpFBpafqAhvMinCzEKPzQMb7aamdbB6dftnAwCcxokAcfmiWcKcDRrwy5ejgGSS52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mYggzGDcS9QdZUGyeRRDfmsbCdh8yCNahtrxWcyb7gLHhbJhiasHmYWsE9djZT7gE1m8qi61e5rnxWmfjwLg5i8",
  "key1": "Ph9qij6F7seKBJs5tAF7BJUnix9CeQX2Jfw832L7obZXHV8PTiZJdiojiMS9BEqB2xq1BBtJLg8okTSRkSpP6vt",
  "key2": "4FSxS1akTVF1DqPBKaXQRKMR4gDVqVYrLw5ysb71cqSxqbA8RZbp2sHKr9ikk953X4qZZAfLwuMZGHnzBj8fr1Rb",
  "key3": "4WMhvhfAxEwLWA3exF2tJ8kotVQqiww33aVGvp6RuKR4E8WxMW8oG6E4MpNrxMX6xHQRGXG5fDRetCoHxSsiV5mH",
  "key4": "666Fidr7qoW715F4vLML76bHyodh2ACNXTMjf29UgZ5kcDmPVcKrwnMHWpgmJ8PS4qmZjgxAn2pUScEepW8zhHqP",
  "key5": "ShvYAbpn4eYH2MntTiu3fReyEUUX1qqSmwCyQHSKdyLDGxgcMUUrT6aGkRBXWuiu1iMHh51UntQLgzNVRw1KDNw",
  "key6": "5ccDfStPxiPGJ94thrVVvMfGk98owiWkDfxzHwotEqjr4ZQxruynQX1GmyC7uFbji415qqdh127XWPrQ63u112Wi",
  "key7": "3ALoyCsk1QZ4VqoFgdA6GyAor37u3skX1FCGNQA9MJVoWRjWb61eRxswxNtrCPgoB2iDfAgrfTBgYoYfArTiH3cY",
  "key8": "614MJBtkZ3kqG89o4ce6t1oX5UPy1EQa7vpoVu9kazcZkduypA6zrQ9ToXU4KiAPWDcJ2Q77wu2aQUas1YMjAz91",
  "key9": "5FnMDZuee439UkFgefnhMdPdfTHQz3WbaPyE4Spp5vM5K6YVZHqTwoVTWJYyX12nfsbK2dMBmuVzac2dV4w9gJtS",
  "key10": "RECttnWueUHSVRYkY4i8NNApqLKQdE3GVHVa1jNVofRfF5mNi9DyXinom88Q93TtdUi47MT7ew8rFVxYTFayvoE",
  "key11": "44fziKFqGkANWqLPUq5oCnkJMjt3K9MnFT4WWNWQUfhRYSe1osHAEFPnqTk2pNbEhLMzxfwqjcaBgfdewrak2WmA",
  "key12": "4YY4aqAUf6XqMULMo53oLovwmiot9Js1z1wKg4nY6CByhSiGRi3e75PNhds2Uqzux5mtUaqoPa4J8hHHZiWXP3Gh",
  "key13": "2wyBPBJzMfZnhKPBc6DW2Bqc3sBeBsmkLp9sexA7bmvxHiXNLQ961JmKvYWEBwwjVDEh5mZG2aKAwhbHCspbv4xd",
  "key14": "3VNL899n3tuCdZybLxWK2rRtZ3NJYv6XQf5AoSTgSUDXWdRBebKN1qTjY5H16sSgyjdHDQzfAus5tm5ERojTvpqx",
  "key15": "NwBvhkk22kqMVwwnvXh4Y2QWLUZMcXxDLcWjzVZSg1PPqNhQrtyo89qm34NoH4rgfEvSUEHgBAQUUAdBCZcwTE7",
  "key16": "3Z1z6idcXLSRDHbF4SLaEiHhC3yG4sowTNVcW3YsaEbqu7PzbbgZ6QB6JPbQAcRFKHfdeXZ7beGtitmdBDCTtqku",
  "key17": "2ympKboBRFqK1yprpoMrN7BhQy56y9jE5zNBf2NuvCifdqaCZJnKRz7iY5pAyuke4MxjXSB4HoKAGgh896eDiGAo",
  "key18": "4BD1nPiVFRvwfYP9YKjBT9wPu7HkGx6aTxXm4PS22xG3iCM8oEUQKYzSzweUkvnQ6J8Eq9BbyMQ8kzvJW9KcfCEG",
  "key19": "2uNFe8h91VEjz4RUsVwyKxGPLBK9nmqa3pdvoqAjRAt1e6k6cRMJv3VeBQ3tqTddjMpnv82HFoY2KDPaYdNeb2KZ",
  "key20": "3s7fokU5U2rttw7FnFHMPHmfsUaiJnso6tHb8szCoQqcEZecfVf1AnDpVryWWpXgxqgrqfRCxCH7C5xKh2WAzziu",
  "key21": "2hjvo2ujmDjEGcPknUSzz7rdhRhABsZYymjTH8km3tigagWfcPXPNsetSi7kzDFjcap5YbPNtkAQNs11M2FcLxeB",
  "key22": "4FXPDbmdARtQ42mMzDjsWoFFLtf6b2T2tSvQUPeDn1hGqfNy2x8z2knzoqbBqQNWLXeMt9tE9V1cvq6wjF9DTJd8",
  "key23": "3WzroiPkgrp5uoLLBh7xaxo42z8888AdVmxwNre2zNXjwb7tC6eFAJXcQRs4JphjvCNcFnUAFzgHKPc83meE8qVU",
  "key24": "LnZ767j6YYvstwoYFbiEcS6w5NVeL3BBikAmGqySqnB5SFncVVukEiyK5K81gaS1VJyzvkoi7rR9yT6yGPqk8Ss",
  "key25": "MEQJLX1ZxuM45ZyRJpBZF2A5fL54FJTp1e8vYDkTZSDPAYJF1YAbZiuNHRNSxNX915pzyr6gPjNbq8kscLGX8Ud",
  "key26": "scdtssfrd3sgbNiAa2dYvM49gpsmNkGuRVSA2rLAG4pS7K5LJxWfkAzBJMDTXBj7t5p5c7YDF4EE6hVUjtXpJkw",
  "key27": "2boEPs7ttW6cW6hqqRWg6asr7nnXPKBtiSfqQWiU7e1iotWisX66x9mAg6gX3YNWX3exQgYiX8658Z1XD9JsUkhX",
  "key28": "GirA6fqgMj8cCmHakVAueWdeMhcYUMzbu9heK5mb4qxz95CMBNCTSSJMQLwwAKiWjwtvreaY6cVJJkrvRu8niAp",
  "key29": "5yVV97fw7qUek3EeidomnaXNHqY44xqj8zvoS7hz7VsMtbxRWnMZibMuUnnSx3kzPp7NiXyUaDMfAdMBfzjfrkDM",
  "key30": "34swaDwJUnLMZWKLQEWrAy8HaQT35xHhvHx8jGq4nVpfKEFjYZ7x6doQXHRBCdxcYDrssQUj7tTzZos9ESgTS8q9"
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
