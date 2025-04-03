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
    "125FYbfmctG7SQ8LRkzckhe2GrbqzdMWRzHv85uSWdfg5PzwZgzpAmDdBz5Hk9gYnfn516FfYcpVx89oiRh1zBSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jJzSz6DLzVHqRsC2trLpHZo7vGgExA8PoTUhyCMjFQuBeopyLeZGSLz98Wq879i5XF469xLYLgef8kLWmfG7WHe",
  "key1": "2Ea1ydFyDddb75cHSuA8cCa2RZdxTXaQQo6bBzjz9qtqraoB8dBj51kR6A6miFqf2r6RXzHn4aiqmGvRtoCYjZF2",
  "key2": "4FFieUNhfDVCbTMdkjPDM3unafjZzqr6MpDDSnQGJfzpXzfAb5V7cZdVhq5rGjDWWgWbK228v638xdUAhd7rpckW",
  "key3": "2o7GVVGrpPfLxjXroGPCAqHjnNNG4Z3cAx3z8AsuePajq5v1EACkLpz9S3Xj4pgSXSBSTrTHdpdws5raZkaukecp",
  "key4": "2SWVhEtKaxJQj4s82sSoryYEX4uirvmhcVUQNcajFP6or1JcLqH6M24xKeLSsjXxrnesdgieRRLZYrBaPoTixjrR",
  "key5": "3iTKFXvKC7a1Y2hEjwZMDushXiE6FK1JURVxguGCi3xqpQ2QqegVFzZYaPS32G1LyMdo5dfu2BppJZezDGsCMak4",
  "key6": "3b6dHtCzU7CxZdbea9avBMTacQTD2WqHEnDe4UEb7r7aaatckAkhmA73gCsyMx2XpRp3HSN1Tcpbexsp5QY2EYKF",
  "key7": "5AH2dayCCaX55omqtX1iYUaaaENuLbHKzGB9fsoRJBZWuv2HVprW7uWMW9yeQb6PU1qLLEdCBLz4arT7HqmY9QRn",
  "key8": "4G2kVstAgRe7R7CHZJfvv2bGyd3gtRoQ5Rvk4Dhn8jQhCcxDSzTB9TcgUWx2sCWEiNqY5khbPrTSi7LMvF94SYZq",
  "key9": "5KPSWjcCPuv7hPM9G76jfnuyuQfvzjcMTNWKEVp45oURZ2ANmoj4hLeDFfZtUrcSzMisaPuLA8mykFTtBzMCHW8t",
  "key10": "4WcnG2zHhEQ1EcdMBPkfro636X8M1owaLBH1bsSPg1t6SKpbCX3HsW4WcSj2EyoMVCSJ9c5M2BZYaSoLHDjTWRPq",
  "key11": "4GXtzGMxuB9NdGgExQXbMFDctyXikcBn1qVU94ccwcEkPbHuXy2HcZBDLc5PQhrVGJXUMXUKgDgQKwVT1aqZNL48",
  "key12": "2SHJ33otjib6Yk15ipBn7wM8u2XpsWaXxhg75eqkREP87283bJuS99Uxp4BP4qtKtV5uwFTCzK7hmLM3h3ffBZyF",
  "key13": "2gg2iRasPENFRotRYo8NZPos6MRxSoBfaxe87VHNp1FBAhuMWdPCjLK7PApQp9cRUY58h54tR7rAB2x7SawSGB8o",
  "key14": "4Yd3tdLejMCVdJswji2QgARXBXpaXcDsasuVFqZxkXpQJBTR7UqKvcHHGfxcgAmUJqssJmpCLak1GgBDnwS1eSWP",
  "key15": "3eUCVrpjfV8aRwwh72XpYHyfEbcehRHHkFxAthTJJwQMh5y6K1W2ngFBhvAzdGA55Hx8ZEhhCeXnZhSFZE7Auh7a",
  "key16": "5VtVBruMdES6xU9u9GNgWwvwZzx8om8JXdF1eLnCAJZwuwWkTdUKdZrCaoP32cTQ5spyYM8VDXmfqAtzwsZfbAF6",
  "key17": "q1mhtRRXGwUmu43ss1Xivkv3kYnFxXBtgeXGBhFh696tJX5z1wYREsGYdx9tc1daM6ERqsdPWtjaxdH5qJwfqUD",
  "key18": "5iXVuV4vahYQpsaeEVU9oRWPE11h8USpPySvdLL7EK5LKA4tKBSt6HoMezfWowocjKiAFGriRWcXeA7mGDwL9dr7",
  "key19": "Hsqb6aiP7GQncHHHrD9bkZNmzQw6nvQuKSbkaXS1aqU3EaxrpzcQnx1TmbCyXQcyA5neXiw6jWyAySwu2QhmefB",
  "key20": "245vnRobxGAFZfx8GCFAV5GmYvVdib33MRQSugse8Ee3hynRYb4F7iejeqEeUnGLkHvccbQvReqWFW65sfoXX2L5",
  "key21": "4Y7UQQFmJEiJQBsT3ZoUNHkahDhnxUU8rp3wG3YoRUf5hMHynyUan3KJ5VPvfuM9ARZKW1muQ35SbdYJLYzg9BT9",
  "key22": "5deC1qLCBaXERa6KooWKj53P5MpYe16r64ffyafKM1gAGgMRvzuhLD9CUfaS2pRZYy4mXtbc8jiQnfEh7S1KhP8S",
  "key23": "xLyusLqLtDtqU41fUgr14Zvf7khQwmW2wUjwE4gBarW7RmKRKpwGeCJJcnVbguAP6AGHhdcMLcwLhgjBPtwbXhc",
  "key24": "8rcceS8RPMrpSpWZ8hXzuBy4eL3iBXYdxnWg7mbXKAtpxMrkADmG5CMb1pd7VEShJsdMXL696wqeDVQEB3zVECc",
  "key25": "4Y46EDWMmkzvMNavSzfzsYdz9cjkmtW8eJiPVGwd1PAToZRrKb6mXuD1e5GhjP9oLqAadPKPdrjxmP5DdZq3sRNY"
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
