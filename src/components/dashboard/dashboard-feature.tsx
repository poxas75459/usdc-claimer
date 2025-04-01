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
    "QPgTohm2oy8MbuWB5GMcjKJEks8LL4dX2NQWSgaNm6RBXsvg9tX8t9G6WF5VoTJs3oA5s7RXyvWUWcsk93ZBkUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "avMktSA1fWgoH5WfPJ2MwhcDPZ4cUyGDaxaa7tzoKwgHYFW426kCpCWabcnupQqdYhX7qiXyrKtBidpdMmkLYdx",
  "key1": "2bm3akgLvFNu9vRRnLtHjD3AJ739a97Aq9FVsJE3mBqJJ1D4iHCeHtEvYZZ79ZJ19VSdLgwqGLod9X4YLg2AKyi7",
  "key2": "35sC1uxYWXCeBfoLbo7u8xXgMZJgcSPC8psBZ7EnRUeiLwmMGicNLC7M7493gcz2MqGFmPB8ojQd5hnjSsQfbpZh",
  "key3": "4iCHDhHGpd6DF3db2bfNXJwBzzax6AzUUGgz5qpMpaFjqDsij2TxEfbGNcDcAJbtJqb2EyfPXHAmKawzTyQssYXQ",
  "key4": "4oztw6rEGcDwxpLBVsTe2328jrFiKxBFxKxPBqp9HeiETLWDwoBk7k8QTh3GofzowRvcCqPEFXQhfen5cBGXoY9p",
  "key5": "5JZSEfsNcdfnH8GQbzLA6mFiLCKwUdcJamTis2psdAi5CRwjuGPoZ2X1BoFqFoxPU8EqbuM8BQRTh7QtnzBRhiKv",
  "key6": "4ZQH9pfzKkwaGb2si5XHmrMJTkS6ANu8AE4B1g3hvWDqh714Xo7iNUv9fMiTgbGDR8cvcpXrdxXxGQxehWhrumL2",
  "key7": "5x6D6ZUmtcQv2jtrFTz19fvmMChGPfRek9nn8dv6k8FtjigwpeH7MWBtcWFyNjUdyywRcWUffSURBBp9hgaUEyGm",
  "key8": "4yNV5xe4P5pUfh67JRvwfqQfEHnqVFtgBiYyBeRMyKjKbAqubWTjrUPaw9BjprcnagJLzwK8LM9JneiF1HhHDjSL",
  "key9": "4styojSWns9YWnQocf7bn54Xaqg9KCp9kP2LYFBLLAkDELBUifj2DgxJzGrV66MUipoU34VU6rv1J7x4EKN5Z3yV",
  "key10": "4aRU4zFbZ6NBaBjjmKZahyz5jhERqMi6bFV5wP7UDjSThHF2LrVEH3E2oSPF6fPo8bwZF4Dgid8yyTtP9V1vpurC",
  "key11": "49Cgp58EGPh8JaAXVGf3AusnqZY5ieXoRoG2qHTMGjHevYCm7yKgWH8xYQ5cWE5eWds24gQno6yaucAuGWHiRqF2",
  "key12": "4TeXcANsffnEZt8VunNmsj6uEprXYuqDEUaeUiQ2Gndmwcs1n6aB37LqaVwa1XJ4vgpBTpSZwWYn8bNtaN7PAw5",
  "key13": "2RshTj2K15wPJt8cZKQKmU4RipHCpuS6xt6yyg3BBLAi8Bf78sEmrMjNsbP6ZdjqQ5brYKYKPywPDk68BwwdGBr8",
  "key14": "2XqozhCVVMzxYSdJMdwzieA7vf89wtG52y1LuTppQ16rvK8UHk9EQBRoxne6pcKGHNbem6Tf5KwpHFzrh6VLiXKa",
  "key15": "5vSE17dxLQpyBzu7zLjgmrgVy2WNQsbrJcgU3yxq1P9iUXCmQckNLhuCE9Dm8Qex3sAjhXKiRVLmHATiUsmqVLMZ",
  "key16": "4RF2zK76VRsRntGgCCuaa3vA3wHqkpwBHh7bLF4nyEgfSHxS921g7dUFoLoa9DMDJrwCrqzEfxnS31v7fM3GY5sY",
  "key17": "LSf44LNQf8r1nEXPakrUNLpGLcikwuCVf7eH713ovDYJQgiE32UPNmmbcnzMztVN64guFoFTdMTFy37JzC49VkB",
  "key18": "hY4dKVVMSNX7XG5vLKryhb6KQ4gAzJnbkqCtBoB7qeUY9C8vDubmWReE2Y1nmoLDjrHfwCvmXQWnEwx8CFTMN4j",
  "key19": "3zpzFKcw6rpX7JywABymFmx5sHSuaPV1uqJzyb7VcXxj9KtuZbNctC3ZZCFre8fLAy5u1T9gbCi5NEnfsYxNDjAB",
  "key20": "2n1uQ9ewVJauaqmhrNXbAgTx7TWe5VyDWu7EtDpzuU2nncjHtS7FWFBVgigAPQWbyvascqDzZ534irkj2XZdvR8q",
  "key21": "129Keo3mQAKPnGCTPZsHnALKFrKpbs7ABykJjR7MobiJbcQc48ofYBbo3Ssym6p5B5x3gnj2FK3Ytb3z7Eab8nQn",
  "key22": "aQmYsaLNhQWFWYNP3wphjxzBY46vLcvKf1fmqB5cyZMisUxxR2KKtBAUfsw8rncCC5kNvajMyh5nsRKu1RfYaho",
  "key23": "4qNFkFsidNHLN2MTHYkR2NUYPN6T36cQKzP3rxCri8szFNoJrP5UFFBzdsct7ovjE5w4cBxEYGX1M8TCxYQuQShT",
  "key24": "5dHnspSaCpzCvdMtF5xEMeUu3um5ifKAY1zyyYoCTge5fRJDZZTjbqurGEC6XtoDpM89RNqWYqhZanroRGYjdvsW"
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
