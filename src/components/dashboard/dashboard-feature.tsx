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
    "2yqv58mSiS7cbYjvCd1coQ6kchXjUhL25VzFNnjGPEtySAEWvsCpPsE14an2XvyH75zLVeo6Dzu7WKkUiYYSVXpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nJHXLdX9PFS6nJBkraY7ixgXGE7VSjc4pwnmey71sY1M6AKbdSTYiKJfTnAaPgEntYZtHymWMUXdqmUn6zJQ1ar",
  "key1": "4QVQhdRqCYREpVpXv6iVrtSSip73DkMfMD9qNPJQ9jLpUbx7HfL8Zk9j5XoDfEzqM9pksZBY9NEMT97qkwYNEHjV",
  "key2": "3fi8t7VYHqGynLfbnMm9DKExLFyYRzTbdh3GhorrcaKTjVaAnXby1KAS8rZGgGCq2tLc4bJoybo4FRzjPfrnek4J",
  "key3": "3vfQbUrzVAwHHbfsao2A7SPmhz17fvQFVCi2YYPDSEnhHFnLCBu1784z14oUd7hQ9PxMrLFrsfsX7kxS1rxgbRmw",
  "key4": "3JtbkYyaXcaQY2QGWuvnfXNm2FWUYakK8qBankaW5XCDvLPW6imZpSiLETALiyM12GccNXuYGCRU2YAhpVGphXh4",
  "key5": "2SKBLwbAdiFiCrLSGjj4BpD9YcUTRypAn3akAKbTqzbFgG255BBb7DrAWaStZiZ2r8omToDsZdeoVqrSwjv5h3mu",
  "key6": "jcSDvWaRPxiosx5fZ6hgF44F7Yi2pAsxmxihHeJi9eeCeYc52Zfzn5MJ3muBr24vcUjVA5D81RrejUQSHPaDb3m",
  "key7": "3p2eafBnNdtFdEgGMCs8YDsC7D1gYGLHFMunXfKcnW3U7ezdrKjAExdaYkuoK61wDBDeM3SJwPMwfb5APu47u5sQ",
  "key8": "2m8P7tpEeu3NGoxrRXamKDeKMhTBw3WwEfuoQtYN4WJdiSzfuUR6qnrmt2m3ZhRJiU5k15MeM3rUzKPVTAAmRTGp",
  "key9": "57483A1mAhtXHn2fZkMZTFqHs9ux5TTr14ht3KT3MTWFV2qLZm7kUPSspXdiVSETZHcr6CdYmcjcvoN73HA6yXXb",
  "key10": "5uQEi1dWMmM4Qk57AsqWzCtPoXBUgHPhRBiTGJfwvAEEAg8jMoUzmgNLqgZyYmuPqqmvNFEXhcLvn9H4dicKhbNL",
  "key11": "4gYDMcZvjzoXzETVwwuNgh5oVHWcnLC2591LF2hsdbjBkz4ZcvQ93MMN63tAGf78yRBoC4WpjNhWUDr5mK8zakTg",
  "key12": "2meNTpFGYZqjh6pjeypgW2LuzT4sPcYmrPpvLz2T1SDvoLmK6pELzpdzTuWT4s6795S9dwJNBYQXN1XMMa3DW22o",
  "key13": "4mniYe6sCro36dq1bSUENmCBKSF4Gai2mMVQfwbq7mU21TSyE6wYYuRzmjUpTsUQ1GKWpttYpRZGU6mSVwzMoT9G",
  "key14": "2X1yeYPzmYBRpZp3adrBRgSaYTMAdMJygP9pUnSMAttHUuQqWKbAm146jhqWWJHa3zr1WweZYbAUgfCaBtbyrYSo",
  "key15": "2yLqgiVweWC3AoDsLPdkUXoEwGndCoGCUfXhK9fq3jW4f7v1C5pR7968XdWyCfuSiPAFxPE8beN5syBPCVtKDj8N",
  "key16": "5FfWvqz8byAGru3Yo4vHg2RkFxAKXVXfW5gJqGA7aBai1qzksrC21ESywLmFjZB4qJvxKkyZKLBWZpHQReo8Vn1R",
  "key17": "o68C6i82JtiycrwbhwFviNE5PSDzMx1k9KUkSGuryyjde6U6t8iVwzMuefX8JsVxcZcaiAJiokdihZGkCT56KcB",
  "key18": "4egM9G6TNZS4o4q2TiD6uedJVm9iRSCBtsXwsPKVwWEpfwKmMAYcT6FbbABdQ51ohm9nuQKuDwjt9xLQqiisZmnv",
  "key19": "3TNfCV3w8Xis2HuK1QTzbs5yjEtiWdDVa1ybMe8oza2AXJan1Q8fb2dcCY4rip1RQVV6SwtdrTnTVQJ2eQJnS6Wd",
  "key20": "GCMRVrAR2Dxeyhho1FFPaXcdLwmZGC19uc6bdEkgkZvc4yTLymmCLC6zeMAyouYs1bAwjEZh7ntP7jr32J9q7Gf",
  "key21": "24wUqBXhUCb9VBKjuiSawEzccNQ8jCov6Uzim9V7yvda7gRFnUQtAfhxt29EQPa5Wr7HnXAWE296eCk1b3zyaDYi",
  "key22": "2Knj33GEEZA6mKcDJwGWMXppzcb8dwynHGfurfZjt5KHUngGnACRFzAgGF6QMjM84P7i48JEBaVe6Udtf7n8x4pw",
  "key23": "3xU12bJQiDRBWVdPY98pVjm6snnTYX3h4u8GiBCKTJTuUT8jNqz18ukHKB23DyrYujXNYq1KcdkKX4WG2eiynDyS",
  "key24": "6JL5u73gHjEuSFTPh5HgFAoZbosbF79VjRqk5mPeFR3c1n8Zr4VMZDamkDs3uPbXr7vDvbJyMNEH3gLHAYDKaoz",
  "key25": "5aoMo55UUmkvBwAj29RqR3d9D3FqZhA3PUTDE47rUHokVg15cXukVd7wF8Afd3qZEhfemgtKuCngMbevDE4wmJkp",
  "key26": "gnFRP9dR4VUTUSF8iQtYEgukkm8DbSyBp6seiqzSB3qw55QfWn6q3zonWgBumtf8EnYvP6X8AV1mYLmKJuyZcbq",
  "key27": "3Pu3pcHxFJGgoHNjyG3ssAXNq6Eqtw3QD6hFipEaCTapho6pb3zfGys2hYrpz8JzpzBdsQm88YDyCzYNGaTpXu2c",
  "key28": "5XyHt28CqQJNEYRKchK74Fxqecj1J5NYNSzmbymVGL3S3XDiAeLfo1FvcC8TaVhheYbbU5knifVQuULEDna5Yzov",
  "key29": "5GGHychZxMUjatUwqdTC69rK81FuhkCNsojLkJDnkgioouZWgihXB1Mckr9s5Fg7EHX7CuNYLua8duza3HtZgq5c",
  "key30": "26SUicMLLqNBdsCzXSxuJW8C5RzdT5sqUyVj4fhevs42opdH3wHv6bZCpiG26qRFPYHaTsNjho36iv2RdEWiCrMu",
  "key31": "5u3QPACWHEZCX6XDgYQ63Tg9FcC1nzK93uaxiwPXTuKEVKiUChJaopCUMrZthLDwKVkXHFmcPRqnc94o19utUhWS",
  "key32": "cz6rBTa61rRdDqv2LNYiUgSUbDPiMqDM66xQVG3DN49dUobsW1kg4oqRyJBTXrgH3jkJednDvqpBQFj8VfztKA8",
  "key33": "WoMw1YLGqFP65DxvNm98JYGztUMPZsn74eGWpT3T7KcAsmJcH8cgXpmmrabtjgbkUsHxZ7dXLqrwuFaENDzkUQ2",
  "key34": "5bo3mAVXuNvdfBZspq5piNuNfxwdVgjzHGXApQDGKSrFbkUDoqUqJNmweLEeYhfLqXrGJm7M2XEmK8Wbga1KYM6",
  "key35": "3dyH44N8VCrzedG3ptez1gKKJrBhPQRfun5DqAJR1qBEeK3JdrFNXE5z8jUvyVY8jawx7ZgnNSRWbpgtRCWkUCSk",
  "key36": "2LDTJso8BCtVDsER2bLTTzicCDqEvB38haUk2prk42UzaE8nDRZGX6dwxzXXdgVNTrPNkUshpGKeyJwACsWvvRpd",
  "key37": "3AXSx56GvpMTWEktBovug4jV4dg9U2qwJMYnQ19cgcBJAjjSyYHA71e4SvwbrKeyBoNT5hM5Vo1WehjjMSFF2oks",
  "key38": "2FH6q2B4g3VvxHjnvUXPCWsM149y2ARgEycWqTHQRS16DX8ppcAgA5363NcWSH3mnsujZMkAaLDifdie2gJTsewc",
  "key39": "QUeaPvT2RYKEXNynYh5CmFMnd1FTshuugihtU7wr1b51rv1bzaNZxaJ66bHCJNKhffEr8PKj5bSKxhn9nxRjLAB",
  "key40": "2NfWpwznXPCP8oyy94JVon6uoRNxrwmLvn8YJ9d1uAVUK6KMZ1enrYnRJqjBD5BpuHt3F56qczEkc1hCXcHpD6DA",
  "key41": "5c9Ha1d3e7CT712fiPmNPxVnqnLahxdpgyyjyEhdCVj1PYFdYkVkCJ6D5k8Rw6cgTmj8G5FcRYWLUnfivBpdWvVV",
  "key42": "5AUQsYxnGag8RZi76VmAMWS1ciRdLN7mcXrpyWe9cBnGBrrhVAp5eDiGaNUMibQk3ZFPFpquerzdmGvz7YP87y1s",
  "key43": "4datpXWAyKb3BR8BobsDfXgSWQp7bGG7iwyjqWAubQApbbkcdYDiuC2kKyn4uqTinjQRCqsj4xR4HqLbjEnKQcS2",
  "key44": "4vUCgrifv9mj9DGDwVVViVGmWBEZeEFUfcBRUEfmPp5oAGCSYTR3eWkEUso4WdG6pJ4Yqq1Zjh8e6W8WaPrZRM6i",
  "key45": "4JKxWn2UaACZzuYRuyjmRJpbWHcHqyvmgiqheFpuYxBPxxob4ucjEmmBxKzQjuEAiVHjENefT44WN5SLn3DhUcBB"
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
