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
    "DuPGVrsu2BQhfvnJDUPnrdTNWFQMEXLwmst9DSDqXZ5Du7iTmcj58nRiNYV2pdDnt199ghzFr4xfW3sGrRUiY5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mG3LVrUA3gkH9kicuLFL7SnXE1yfcpowA3R2PkuD1dhNpaXRongN5sAJgpJWAWUhBxKFvYoVFiF6iz4DmUVYypM",
  "key1": "4mJjr54DC571WsLWQb8Vs93h5pgYfxCcXVe4xsVUgz5KT2vafgW4punwFS4jDQQfNdWaCWVFuaLZn8waTt3c9g93",
  "key2": "4hvGp68E1zAGW6yXCTddpWaV4PtzntPKMD5PUh8UxGpGdxxiEZb5FKQQqMLFVYLXTfLTjRAHCh2UszT2KkEMm2Do",
  "key3": "38eesdepG1QF83o3Awcx36iMDmAaFvVhdRo2pLNyf7ffR35jr1jF9XK6ArSH1p6E8cy7x7VUbGrtmxeHuMkuE2s3",
  "key4": "275psF8pM3o6wjTdFRHRdMtWMPBjCRpS6NKaKpHL8yNEivu41BUKej5hixHnxkQ8czgxLLrWM7kSY6JXgC4NUWET",
  "key5": "5K2nfCw9bPCGE4NmFw61A8bzkoaqNc1cEeKyqLddH45uttRyg4okyqjKww5DSpXxCSZe8thyP9cLxQrbdYpC4rLG",
  "key6": "3ZidSbaPQ6Sx78HDPBm1xRKVGqyM9UqnSYn7w5qQdDmauUvQ8ESZafhvjLWWytgzhmm4JDpuQWzBedkSV4sL77Aa",
  "key7": "4thckX3LSQhubVAgfMZTpTKYZpRojrC8sK2aTBptmfB6XKGgLxVx1afSPKW8PD6zx6r4tTCcmfD14iXwdWhb6sui",
  "key8": "KyByAxcnYx3kBVkgwyscKRMnbhFe4sTv49YopYRXsnFd5G2SYyQEiBzdAX6wb41YEcoapB2jCDcc2wqwRhHyaFf",
  "key9": "3tmdNCSRLpqwmpTKeX1Ea5qq73nc1giLxK9XY2XWLSFGLx5yRHpDGitppK9VMfVCkVBrEpaYgSuQFUTCHXXMkhoB",
  "key10": "4Fx1QSpdBBcwfyqYt4z4Sxdj8vxfq3Wyo4YyBy2iX1ZNYqt5AFRjJt1CPN3NxoUiSsBjXoMgXk1MMCyi1GZ3hkwf",
  "key11": "4M52SNTHaS37jR27vvNz2peVvhtUAoWYX4witJH8UhM8dfdKonM8nEFgASPwhSbUqYkKLM6BixYwByeRrp4RGhau",
  "key12": "2tQQ3BN9XWdUZpKwqzwY5ap44tWPGr4xsVwnW21J2wtQVJG3pZdUiiRKBuXufXorjzZRphTa1Mgx8P4mjhbbdc9Z",
  "key13": "2QRscJ2VK7ufBbRZMuyeUWPaM3CHHEznqhXVTLju6SG4yAvztu1zqzBnaVQZRpZxkpiGmPsVfDdPnTDe6iu3cxt",
  "key14": "35NwSUvfazhLrsvtXxwh8JhpCHijzkFaUoSx429xw5YXsC3zFcDc2XCJjdcKtfUJPQGAS2362e35j8YkYnZVdDhB",
  "key15": "3L8DLheaCnshw8QFSWQZBaVvTKDtb9todjqXYKpZehnQQFsy6vKePDzocUNBCwUcQ388xEi74mopaL9RDjekBBvV",
  "key16": "HTMHpszdW19qBHJu4CyT4wTvLZsU4HEiDwsu3NfmgTnGsBRnrVjAe92LomhNGfX7d6q6LhFZhZAJpEaqXDktqyD",
  "key17": "2Q7SaLEKYEMUZiH3JpydYeBk2S5uLJRf5euVAGcWtV8YVgadvzqytHsmvoMyoyTAimnHG37gAmHgRrgNZ3abCusQ",
  "key18": "2j5KxTX6ozghwG3oaeTbJgckaianfSTyv2Y4HQ9WaRSRiGoL551ea92D59zZmDEKJSYsPNNAztt1ZeBJJEmEyhqT",
  "key19": "2mtjQcLVvFxhBBg7YDZFG2wjDFXxqPYCpy43x5KYEZSeKAuLXBPGXA4TgnidaxnKDzCkKhn7JQ8c9kqtQPivSKwi",
  "key20": "2RCvyLEFV7KzL1ifgP8hrRcjDXA5nrfXR1AfgqXt8uCczQTu5s1y6sKXgcRyr1y3RkjdeU2ysW2pRwiGh5oyCcWx",
  "key21": "3ZzLeHCuqi9wQGKF6AQNFEVP7iXyCFVwgFhMYgg6Kz9USPptdk8EZibRekxTznxcRQWzqS7xSHP8K1rQBrXoqwEn",
  "key22": "3ELj8SnDa8rCp2kAahDzGaELokt62qMhBNcbMwCAqpKifvhqCSqgoLjSKyUdaXve8uPZPQBh8fVYoQQjyobCNNKc",
  "key23": "2Z56qPEAqWdbHkW1PFpdxYNwWi37wFcdcfgN8Zfw6KBe1APriFkFGpxc8kG5iDa7qKfFSsNLf3qj9Ahut6azxcwu",
  "key24": "xujyrTj8n3nTXtHZdC4WPpvTS3J4YavdgwVbBrK5aDSogDgvS1FeDR21RYJ9oLxPhKBH4eTRLKNmzvjCD9RMx4y",
  "key25": "2X34H1uBETfSxxX2hnZKCRec3TQnVCupxyYFsP6CHRfMhwqQJYpeKk2n3mDcR18F9CXHX2cfpuh1JKNJjH9SRuYw",
  "key26": "619qtxrBKJM42uQrTXqCWcchBtCtsDydUHmLa516RHeMTaMRDqm9D6t3MxjvguzqRmVfGF5tHCBhxhg4eHkY2BCK",
  "key27": "36cUJbwbV8goz6MdewbJ3ak56eYiFiCnd7xJzqCfnL5A9ugUWPmG5YS73jbFBWjg1c4m8eFYQtFdBBJGGYiv7wCX",
  "key28": "pPWtes5ouJCx7jtXaUejydCoBcqfQWSCYjpLJN5CzhHkayggDxKDHWQZMaNTRSS1GqtUSJN37t8Y2xgsm9H4B5Q",
  "key29": "BMZaS8Dadvu3x6LXkUNPMt4ezfV4E46QVx5wmfT4RkxCd22ANqsb8qXVxW1HsBYs7CDcmsgSZ8GLWXkoiEawzuK",
  "key30": "5TXtfP7RvgmH1n4jKmwwigw8puVJscTDD1CXi7SKpYTPpkzr2qPwUC5ZrM8KwrHiB3rUKLFc2QeVo7z1jkfxdeHB",
  "key31": "4WVRv1LBdKcxM5WBt2v8eBFdrR7ghDFURRHKzVbR86ns6YgrabgTmcmvKKypwn6hz7ha3saFVAW9AvtJkG5isWG5",
  "key32": "2Vb8QMLRZda4F4MeSTGY47AsZ3waXM1F4WXjNN3EUawGUdSvG5UQv3x3LvhfM7adN3kpHqdvpfsfM2Yj2Rg737iR",
  "key33": "VQkUSVq74dWDQruGmym5wV6KzU2fVCSzuin8C3u2AE91aysKa1DRwJoLYph5jh6i62W5bZwmkWJfLhALTbsk5v6",
  "key34": "JxbVrJm5Yr63entmC7osFseRbCnJbGDnzCZTUKXqzaPNV3Rb5R8M2uCLJHHVdfwqNMBHtx8RTfdPCBve5a3NPhy"
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
