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
    "3kfFkKwnmkapdvBVyBT8qpTt9keBKr6JQN2GmHoePddccxXmK53JXT8F8upDyTJrjY3V4SQ5jWGQKpAmbovWCMVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xUDKv8YnujjDjUxkC14LrLK9NtzTW3Z3o5HQ9h35Hu5cXfim21Ju8n15q1fFhLwrYy9gzuM8HX6NK7PHPFUTYW8",
  "key1": "41aXaeGoH2v4pBnRxDjNngDVz7SfVMYCCtpbbvrnvwb2MrdbEtY13DBqbZkNzWnMGyob7TiTh1AeSLAbru3wnTX2",
  "key2": "57PZyhpYqcu8Xwj3uuCbvu4GAJL66ATVy1d8ciG2ALeBJxY3qqhBrCYN21cVhJuJMcc29HgYNUwupHHvwrDuoW7a",
  "key3": "4KgJXtcDXBxAdCAWWU2ZPXrQdr2oCJNZEWDSLTiTEgW8vHptytrKxH437Px13NnDDRJJ2jVScKZV8RvCx4EiEAHN",
  "key4": "3hqo1CzQFiduuDeqYPTNxvLuEnM65cMewjJHZuSy7w1BrdpkqRyPjGuMchp4vsJqVoF3u6LgWXk9FjYbEs46eUaA",
  "key5": "2A4BqtS5NJdUxHeH6BVx3RXEHSA3gCNFD7XCXUVSdk1Lh1ehKEpmeq8pJuHnrrAYJeZvZjQ5iHv9Nmnr3xr9U1iv",
  "key6": "32VbkgXaWYFq1Mk2VKhFVowuSt9CNwzntuGrLgtSSvJAmzbHRhhFPhBKjBT8taRMxxwEznRaGKpP5hMFbhGe7Ury",
  "key7": "3q6UXn9DZmBxa2Zp2naH3FVQwMTnatq6a47Z4SkhLi9hn98sHJMcE4gWyAXpUwMc2KZtrh6nnVH5k75ACa5VdNTd",
  "key8": "35PjaVuo37EdmNapysYTsHFMKJmNyUB8m1oxZoNikb4e8SSzSUwPxrBLyhEHUjoZw8R8mgmxxSEnNqSCatXTHH11",
  "key9": "2M6ZJgM4Lg43LPawNVNpWJ3SqiJBcVeL9U1VHkmiXKxGB3iqkbQ7AsHjRjiQTYq8K7Q5b6mA2FqG1fkH7amwPiwT",
  "key10": "65tkadXpoLX6ybHBrbW3evgkE2h8n6rVD2XkMLpt9VCaELpWwmSGybt2X8FGQqQWCejhXDPMkbGo2mWgV5QSk6mq",
  "key11": "xut6SUJmwHk57zTKH82HbLFcRATdHzGyr7uLwKrZRYZcWpPnsD8zQFz3ftqxht46nQi4ZWjUZhvtnAU5HyjxmLr",
  "key12": "53XXvx4qEx916p4kPqUT2MMs41dC9GE16MWF9VToGhgcNY6s6bpFGh5UoBbzswJjY4nwLQug1G2keFwVfe3Xitty",
  "key13": "2EXToP6xqQAK9LvMxgGvzSBbwXsywsDUFbXejkjRZyEkCr3VTTQfQXmsSLMieAssHWt5PN5NcgfMbwusgRbruyq5",
  "key14": "4NKTRvEdCE9gazdCZzpEGX8BR1GibfatixspShrsXSA2n7q7wY8RZcF6WznB95nVnWs3ueqJVMCuSjunrxDwquty",
  "key15": "2pELvoS9nZEEJkKu8eZwJxdb4PouwBkHh8TX3CL16HgybWoyRHXUYihDWrhxyLmNYNCRePeyHjKUGeqoD2Xfkzsj",
  "key16": "2PFjyLpJRGbiR4bCkLzUVeLpe7X7bspz3Uc3YFLLJXH6pcCNkjtog9EdrKZCYfAdSQEWao8QF4ofpxrUkfzfJm1r",
  "key17": "3xjVMk46n9qTCjkEet8kAFr2f1PXBBzWt2JaGKHUX9HUSbnUqRFDu4VXVzXvaeHe6KuoiNeJTTxGZjMi1iHU3onG",
  "key18": "4ohaL5f1YYoxcCoFJZxLDay4WSYX3eZ5x3uM7oKbMH9H6JSij9EWL38gWkx5sWuxGrCfemtA2FDBdwtTx8yLpxgW",
  "key19": "2nHccHEn4ok68b7cQK7pWpQEXS8Tz6oWYEjTqrpHGDxBeV7TkMVeJhNGjUk5E45LGkXqGPJTifH4XEqZ2qdQn8pt",
  "key20": "2L1cjuoj5gmeL86Dg4FrVnu6XYQPez41y64tFB5xyCJmywBRG3EcExp6PVJkc7FaABN2sFQ7AeLzkqUvynDesUuw",
  "key21": "3dVgC25tSq6ETUPrJYG5LWKj5K6yX1XDXSRH83kU4EW1izKiArkbyDnwjf44JaAvhsbfqMnvaEJeRcofXYbS79L4",
  "key22": "5f5TDzhHrESAKGoLmktJYJRrBKEunY4wNuW1VBb4scRrxbgobm53zy3uDmR1AvsfZLvioKab5oViBBx5CEvXW8fM",
  "key23": "2tLKHtA8aMLhXPoFgf8Ro5WxzKb96nwWtt6uWMuGjfkaZqXT6xFoJFkV1THq6Rvsg4HzfyBMdzcbCPrUnem9sCPf",
  "key24": "5nBaNLPokHAJmQPFggEaNt8S4SF6ro1y2Pb9t9f2ppKcPYD3Qpose8fShR2jKcDJDGKLjkMFqwraLZqt4FBQqU6U",
  "key25": "HGRBvwvjoJX6DFRbnVN9eSgcuhY9764SrwGbo7jZQXQBpH1uDv6UWnfU1qN52sodL7J2YMwGXZFYnx3YY7F9bru",
  "key26": "2suxEDU2ngLNDXsFyGFRLLc37b3huhscy4mc6PA8uctrPUqiyyW45dx23FxWekjS4qJN3N34RgW35Fr8ZKYoBGEj",
  "key27": "21ZK4e12iWEoifPYab4xgZ2r3JH38EaHv6p8S69zAkq9H9bZN2vi1AzXcqVs96RUwWUFGpFDoTRXk1mnqFf8h3Wm"
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
