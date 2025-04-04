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
    "k7pyQfjD6NvUYrJqk2M7xDgKbJSeTMsSKBorCDacjZwpgRSKCEBQZRQx3wTJTpkNM3e1SYb3GGwsTaAUT11VAgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uo6rVM5zvCao1tZGLxFSyV6CJwcoT7JPrAnTUUYuGQSXg1BUx31FqYhYPuA3cxXSsFVv7JMUhLcCiR5UEqcsvVC",
  "key1": "3rgy9FMHEe2Mun8wYwjo2L3yVkJXCvYGEsiUgDTjo5XvEbfGmB7acksBQRn2UXUpxyhy9Gg5W3PMcEXSeLzLPCH1",
  "key2": "5YDWCLFCumuXcNTycj2iHjdZKuUf6Uv6GYCcLVFnRmnyX85eAgM2wYHKBDLfZyUgm5N45cxxAhXopBsQPZ91YK58",
  "key3": "3hsvZfafKS83fph3Vd25b9iWyiEkTti2228F7kFpZDiWtxvowpSMzz3tWwGT1CpNAQYwZ1ARufSiJ8RfR7JuX2Xi",
  "key4": "2iPNUyDqB83YodjUSiYh8zwsXSDTYJpsb95Vefgd3r5S9wXDvDeqMAETriCMuAY3wkjyuVpoZBqC3iFNr7TewaSD",
  "key5": "42Epqd8M3yDufvjr46suWGXLxvH2brM2U3dVeq6bumfujmfoEE949TpYwKSkkXqYDvebHXGzZwgFf25uYm1e5pTg",
  "key6": "2CkzDhbf5w6BMkJ7iuLwNgeE9cAERgo8vEkSdsEt5LrMK4Tj4y6rDwr8hnW65mPPiTcVPRoBy5XmsbwHhJeqHaxo",
  "key7": "4usDxfUtcrmxC5oZMziRSVVZNMHu9uJictjz2QcfRyVz6e5VMsWKPz8Kii7THaJJV2PV7AbT8YcPkaNhBLt7nvRE",
  "key8": "3SPnTuCQ1VFMg4rfLGvCcJU1Qb6LBQueXJ1gCXs29SwrTK5g4ZyfbHX2RzWK25YoiUj8oJhfyAPANTkuSAv6niTq",
  "key9": "2ePNhNQLfqEBCSJxnmw2XitbuHRUgJujAZwgNNmAFvXMEMwqYDXqJgs98n3h38C3Ny5meRPyD3cZ7nU6CVyCAApJ",
  "key10": "3RoMRaJjzEXh44hSdhqPW2Gchbtge3UreVKYztKn2zuX6nxsSWDSGZ9w9jkSXtNtddavmD5u8jSTqFSJmbgtrsuX",
  "key11": "4rCG83fc3iK9Xup4YiXHWaG3ZRknDKKKSJA7V4YAcVnt6gX3GeuzmyqDR99Ea9qLLL5h9H5thMXENvswfjyikQq2",
  "key12": "67HefnZptTocaTvNnwq8uvdkWMuEmorGxEjRokF84wnYD6c6MK5LpdvyYe5wDyx6FZHy7gbfMtdmkfbhbmz7REWZ",
  "key13": "D9bBTTH6m7NuFSVK254ACP5J6WJsW4eeXrfashkZYEaENxdgBGu9SWUrGf2ktDsWWPFEG5WSpYWFHzd6e6XUy4G",
  "key14": "4YEmEP29zcpRmWhbrtQYuj3CsveP2PrJ8sH6AyuiyFiMktZBNt6whMUS3JLjirELzemkKPtt5CAnjReGbJASJ7L",
  "key15": "aKTiALZACShH3cdeikiMBUDoq2MsreUzuSWu49a4M2HNdPHEDYvVLHXFJvwzYgLB5uoBCUPJjrtmqnnz2VPUX2L",
  "key16": "4BvENdc7VHxEMTuLZEzpQ7AeQkAeRHH7dy2cZ6WhXxnhnnb21qBC3z4RSxQRjhw1XwGYNvDU8wcHWrRuxMcf2xpX",
  "key17": "WPyvbN2uNXwGLBzVwyTeiNZBP1DjXjv87gLvgJdsj8hxvKgdnxd4qdMLP4buTjtCVdEhbgv4WPFmNcrnfDF9cQP",
  "key18": "7FBZp7oM4dP2zg3KMR6homSSRqTkkpPsQCnhSqXMDvSX28FJ5bMd4zjLrJCLCS3QfUDcn75bsN8mKCUK3hhJcT1",
  "key19": "4MTq5KLSST7X8p67xCnPdHHiuY57whREX9kFEiRra1Bbi5Sgd7x2yUeZvWDGjF5WXeTYWa5bx9vy1UkzywwfoKWU",
  "key20": "3tynsDdbcvhL4ujAmVM31EZTpEuNeJNF6RQvtTr8wqS49KtkG5fXV9ipLPWM2a8G3zRExN7rzB61vig4T3REzV24",
  "key21": "37miETD7kyXLzeBvRpBNCQHTJJ9E8vFMuhLqPYHuAUpjKAGxZ6RNXux6tuMfUZTWRwVBVhMSuuAJsDszVNoAGaDQ",
  "key22": "4yZyzu87iQ2TYKs3f7MDTtxbfSEDvgK8aoatnSfPbUD4JA47L6x3k7xpWSRzPJV92T7pZeaN21pPQtqmKkyzvLg7",
  "key23": "4g4S3qrE8Zf8waQsfmQcj3g22JZc9ChsVCVpGLBPHbpzggtLxjchh5ps3s78vBZi1Kq3s9DVLgz8LqhBNmueCPSs",
  "key24": "2iATdhh6SnXxqQALJWso5kzCPD4ZyyUhfDWFEGf4gKRRcP2Q3zdeRmLJYsxJCFNHNKtqJbQJDUxEkwhxZYYKoKNU",
  "key25": "3zb3yLi7JzXsFGAzrb8qTcLsd4F4d3cZc1NZ8NG3R4CtJoz8ZbyM5phzksPt6Rqxc899CwP5ckTiqAeh9ewRZgLT",
  "key26": "2ksFcEmLjZ3HivZemr4Ls7eh2prrN6KwL7zAJ1LthDdwnWKJ5LE1Yv7QUThh5dwhdsjJMLVRXJFSU3RVxrt69n7L"
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
