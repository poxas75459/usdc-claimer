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
    "2w8g8QwENteTA7vFm1yGv4x2qfhm114s9GnzmLUmNMfeJM6eQN1N5Qw9YRDBheNFKPK4cnA3g6wY3VHPMbgmJxHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbG1wTF1YWcb3hgEPnJhDuwWb9mBf2RL3VJ7RY33u33u9NzNXZ56RqWvbTBxV4GmThrbR35SGArsB2GSRyEVCXW",
  "key1": "5G58jHf7yQcgC7HRwXy12jS3s3Eg4GC2eG9mkPbuxA2CNrq3WUWmP4JSDGXggxkrCMGPkHZWrgZhrribqG3mFm8T",
  "key2": "86ZeVg8caaG3v7EVQ2fqyun21ZMaJZ7GwruGtJNPupnQwBsy7erNABK8TmfahVNficFji61mZYqFiyq3ZMvP68y",
  "key3": "5a9FpWqdoDCTGmF42iN2oRpL7ZMAB6ohrkjmZ7iCjxpcmVqqgHKaRXfqdQXYpkh2NBVRSaz2BbjAeEvfDRLqvqMW",
  "key4": "idSmbogaowdJbG78zC2iHyRDzMt5TYRZXTUT6Px11vNcikkBzxX4Ze9Swwhm4t2d2wbjZwJFctJeWtJjy8Bgu4Q",
  "key5": "3MLyMJyCBMRGYEYdXsT4DD7gntRFVSWnvM2wkt2SmWhx1p36ceJnMtfYTk6Uot7aPckQeW7gNedzfXachoxHneaJ",
  "key6": "4EVzQoHf4TpufvX4b4cDWtZZcgRKBhhLmnKCQbbEWrVhyNbbz9VZKxDfN7JwTbjMLRfRKzD4ysnSXgjcmCKapi1j",
  "key7": "tFbDecnzG7xfkYUFU5y7eGJHUTnqRffVk2ikDZyvJBzZeJnARB1nocSihtGEfAH9sn8HwNx96jRqS1FqpEcxQxH",
  "key8": "562GTAnq4owXrtibguubDGDrrT1WpfQZRPGDXeqb3YUEiVQj3z4j6nsQodwTmCx1kzTaMkbaVobzQEW4GhNdaxyA",
  "key9": "5aheux2MGnvnL8RMo7zdwYSL8Hi3dz2ChPDyZE3KQv9cBtD2GSh5rMtJkwuK2EJdhmuoGH3j2ByRZb8QCAmkcsKn",
  "key10": "5UQuDjUwQyvYdpv7hWn2AQ9kXG558ELmWAFjGMTv3ePcpjMt1H8JikFhtrcKQxMTUSL9Scxiy7qPkhPYhoWP4KRT",
  "key11": "26TcH7QYyNAsuGPK3LRdqHWdfUBjRyxy6bushhEZB2JnYyU7AjLMAZx8ogjCZgXGmJ1CaEiBF7VrF6wtxiV2SsGr",
  "key12": "3Zrccaz1mFihcJnwypUonctVgE9cUChna9E1Vp52GKatEBUnD66w6pGpDud1gXynKVmZqirNUwXHuKj7jqozqxQs",
  "key13": "2NCQcCDo64eDKW5rx8my9TXpf57whf6T4vFNVYEzoDZHE1Qs5L127UpVknQJAKBv2RtVAMjFA3bb9QchTvBEs4bY",
  "key14": "27LaC8ggeuZFLotrCmwMYSps7JBPvbxY6ANx18FXYYjsiy3hu5XXWtyfZKdZMRGddnwCsGmN3YsuvTYZnmyGQRbT",
  "key15": "2Jg2vjAuw7y9DiLgyoFhFDuPTXjCx2Yy37QVYAsDSexfuj3GTm9AoV3oSuvGwFPzWu9k32SwLoEirPwH9oZZEtdD",
  "key16": "2sRTmbQ6ajwzzMFRMe1rYeZtWEXbzkS1BkEKDDMbekjKihNwio9myk7CN39o8C9VGpXvPzSVFgR5ijjTw7b1PMf2",
  "key17": "4pnhdFF2LhWsfzMxspjuztw4W5yLdUHhhNAxLVMVNywQUBy2jFXG5ZfMcWTALc31EV8DrAiMArXveGx6f5oMbtmb",
  "key18": "3donFBxmvNU566xMxRqjeXXX4dx7XiApEkCHnQqYQDg1b2ujxfqJddkzbJg1WG3D31HimkszoRSRvphjjifNDEFS",
  "key19": "UrUnzNjZNdaMB86vXk4u3HLPZwo7LHBUepGTr8daWLz2oVfKyJDWGcBA8eyusKteUfPBY95kds3Q13CDMPALnRv",
  "key20": "2iAe1S5NeYfDxYZdKf1T2yewWSRNUypHrMXDY5kFX4HxV2f7L3439YwtY8po7hnzMczBkkhFuhNPHZ1EqBswqkHf",
  "key21": "ytFLKtG9uZv6L77QmKyKE2ukndk26rozGbqbncwVwrkA6fpVdjMYrad4U9wiuyaDcKSMCZ5yYB7tFEAyt9atGXi",
  "key22": "2nDTQHrCvCrK5D7yHwWNsRzTSCerwouj7ndhGgDykVAsAj3Wyg5WLoQQs1TWjKJUcPaAqmdae7is9Dpjm31wA2Wo",
  "key23": "54PJ82YDLZLnAzB4iG444nGf7cxBq7bibRvjPgqGp7xni2Lrc4BCKUHg16QeH2dQoD8CPjSGSpFeWqngondwAhmp",
  "key24": "3BMSF3faVj4JxLSFF1Z6NLExxPgSBRUjmgLRdEXcQqMETnsDKFSfsUuPydDdfynxVugRSwMMdgkPf2gM5vz32hy5",
  "key25": "5jaEfumMkphYxMB4WG4Cun3ZcWkLMWzVSBj8nuA3GtFASu4oLXUDYKY4yhPicevejW2yPV3vCpzvJPLL4pcwjKtm",
  "key26": "4Rivdi184ZCJCVvjppivmg6TpUqzhZcMUx6Fmyr5WcvALx86QcabaP9aLcydtT8kahKcWHQ2YYijhkwkUpTW44WT",
  "key27": "5D3Ddvunp8K2LyyQuKgLoMrX1GJtn7WZbMp2KajgwGDQrhkUf8hrb4Nue7e59Vz4PfXfCCWtv8StDu3Mc8muUfix",
  "key28": "mUBbYSXhQ5WYBcX3Mp8Eak5ncQjeBDhtjfA96ckSkco7hNLxzYfUpCvgNgu2bBwm3txDkLVGv9aW7HCCse4bVM4",
  "key29": "5X3SSjADiAXiypRhWXsxJvHZFarqAkSpaV7JUxvUfzW7pMMEnse59X7m4aMegn5HUBgfFLE8pt5aEercJ6hGKPn6",
  "key30": "2xhm5H7mXDzT6HfhKSMuYPUFbUk1AhZQqYGAWGfMgAUsZMd4q3d12d1L7sju3FPVALCMCCyNftu3nfxyoAGb875N",
  "key31": "2h5HapUud81QBPvVbeN7VTeFYqa7hx6hPrzTYq3kxkCyQYwx6Uyx3KovRxtGoPDNynE69DxiKk5SkyxPtH7P3i1N",
  "key32": "2vGCR4PQioQF9wMXijPfzJRvArnsgHRW4AJb9ckh4hhFFjituMXDn54SCZ5NYx6uvsCVTj7humLFiufkQSfsYo6G",
  "key33": "26epi7WvKUCSWoXpoxZikdE3GKfKh1EcKrQ6yJEZFddLCMk9FmpdfFz1Xs3vxBgFHc7guyvbmXKPWpAzHoafcfB5",
  "key34": "3ZBKYmXWX8PNZDhNkZ92Y2FS66KjddYxLxtbeWLVyAW1Rww653c5pspyxHSUHa7igXDC28933ufHnMhNF3HUmtqx",
  "key35": "3ngAd9kdanJsFNwrynJhJkjkin2Vxcv36mMuhksEGgNeibm8mXBkuzsNJhMnM9CKixPQo5Z4NvgZjtr7MkBrANv3",
  "key36": "2L5yBKbyKfkqgGSSVNeY1MG4MXs7rdnVuR7VLFDfkZC6bLJp5XzbwWzDBCVkvkNPm5RTjqibMWqgwnCsA1RP6UzC",
  "key37": "5UNDZVbTAstZqMgVfoHsXkShCMTuR7GmAgyCLEWd4KvX4fYge6sgpM3oByVGwrnZZErHKc66v3JMtzNq8sr8edb6",
  "key38": "L5Bkpow1tozGJWJAutx91hiFxgy873shL84XzoKDPBxvsUjpp8uv6eqBkhHexRYte1vceLcMdAutEKdh6eKs9Cr",
  "key39": "2xAfMfnBsjFgGpsCfmLjn9TYDTqBQoUrRMuuP4fPJsXkJiaLEU3UfVEzRUP2UDqfYyG6KLjA2J6XVt91kuVKtona",
  "key40": "3iQJoyptVezKzbqG9wNmdhExRwEe3h83QuJwkcqjfQEJAEtRN6nR2Ad9A9YEyEJjN1kXWh8XRaLTXjAS4h6EbkR2",
  "key41": "2Xa9dSWdZbNoN4X1431NUEgbbMEkRvn8HYYKbzqxdeUPiVp7zE4kiL4eiu6wXzrZLdA96WArr7k5MfJigJfUH8G2"
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
