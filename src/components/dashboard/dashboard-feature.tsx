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
    "2bNoxYAdbKQqUCUqmgH4Jyo96oEK8unCmLhBFG9igiDr636rMw1ahw84jGE2uEMyQf6CRhkQgMiTKyh7gBPAzL5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T6aDU8qjx3yy3ygbhu23DWgVsyuJ6WEoeUymGJBkQtCLYo61PuCz1eivSQNb6xjjjURUADr3c4LixqC76NTMP9R",
  "key1": "3M8HAc4eDvRTDga7jJQ2MMfmxbEHU3kadtFFwv3rKxxHZmctZZWuXEcsBejGzrHdu1NgN7AUfGZ9b1t6nNpWej75",
  "key2": "66kEsqGPLuLR26FzqFxPxpW8uKK7mZbHozdVkQd5gWjsaPAQeEdDiAZ3ZMqjzb82qQxVKUD44JC66ypEwcg6SgYh",
  "key3": "2TwFUYN6w9gUqBUU4zs5nssc3wGTLA759NdBpoEp6pKH9djrKjUfp5jYBvaMR9Fuf9Kjz7fDTVKExrHeSiAHSLXd",
  "key4": "3BrLCcP3J3EL9v5fnBeur7UgYzV3mNF3xyEQrA4n9uWSXn3aKG4p1HSishUBjE7JFMDLcGir7Pn4bNf4dwSMP4D8",
  "key5": "jcDzVG1eCkUBTpi5j8kYDxKWpLwRudVqeKezkBkyPyJhwbNpSSaMpTeJVei7cq2xprPVNiWTjxJ4G3sMTZ66F7w",
  "key6": "S11woTA9aVs2JZ1qrxZ3EpKuy12A7KJLQeCP3LUFNTsieuDmQCzt12CF5djcKNFpHszyb9axjk48ZWuFNFLdH9e",
  "key7": "VN3pAGLwiaPvSLYkNERboKJs19wGqpENvUZpScGNBJp45f7aaCNscTTUKDQxNYYSLRsN3CNuKJzYv8Lmnaswjc2",
  "key8": "2eLiApdv5EyMXfP3NtmZ1E8CP69RtPkTRY2LZueNsRf9owBvd8uDHGfiwS19dJYUVn9MVfdfg82c3FPC1jWePpQe",
  "key9": "5NKfoahX5gtNGW4ubw9Wa6DTojkTq9afk2aAHE8bWCZYtx7v1dGmcVwUvVTSPvMjGDKzxJWdCkGDTigbj1bVxVGi",
  "key10": "57XCjvrNDmzmt3p69N7zuLmbbFHCKh1ACMNWZomHJCMYnSXEKmFd2SVsGd1PAkZTGiRxVa5fmNUsMVQFHHLdXZC1",
  "key11": "YbCbQxWXjNZYpNHehry9uSeZZdCjW6jfVQdcxiSGbukYJCF3Kej8CV6Tyi4cys1bLwPWLE5F5nPYbp94VGUt937",
  "key12": "24uzkmk3KMHvEg11N77gQ415KMQnmxmtenztrWFUnw7hyEnfU47KsFm7mymyMfaM61semCJif72X4EfkjQtHqjWH",
  "key13": "4SppRGbDyMxbd1qMeFwDAuXgrPNdB2cPCLCVnZeCxAH5c17dyBi4CZNePBAAPr3uiCi4HiTG7ZyUuJd7vN13uBeT",
  "key14": "31ZvuRcZ1XS3HPDQGU5hCHxrL6F9Kqhxb8n59Goged77kfHjMm2PsLAxffE7g9W8uD4zgSRJ84XaiC1cr2pahTkq",
  "key15": "4pjQiActNU275qukxrCrv92h4CYoQB4ShAzDH9QeQ7MzNrvDMGshcGhf7GJm8DgVJYQKZfh6R4UdHjRxPYfCX3rY",
  "key16": "3DkhHqsyG5ZvcGFc8niKPAHiWDnKUYBiwjrP7VD4kkmzBA55Q7s2CGwxty3nB3eQ4BBa7rNj4WKQhUFGyi863AVz",
  "key17": "24LhNdc1s6doGCwUfTZ8A9SScgwWxc1H4zBY33cx4KNDkCgVRuJYTpmV8XPr3ncKXVrFUAsz2mpxV1h1avLxuMvr",
  "key18": "2UycmtDwcwf74U8vvjGtkXQnE3w6J1r9qNduqf2NPZVXFWibBgvDTKAv3WdH2V8G4oDvvE45roGU8cSwQwTKWqcZ",
  "key19": "2wgSdFe5i4PmT19DFEREessKAoZz9L5QkxdK8ps79ZstGoJrVmhUS85d8GyGpc9Lutm1avEmiC7Cjx5VbFpxWJ5x",
  "key20": "3x8JACQop63qDBSZcGurWugf3vTPLwhkgpXxquhPMXtixFVGYDXLeTbMsannbwMR63qvivBJazuvsUy7aib7BE4g",
  "key21": "4x6MDpnvntMHsHBgrx9tTWEgsyyt5j8NvnqDFEwJNis29wGkp3DzDQCF5SFsCDj2hLLSkwnZpcMwdMJ742X1jQWV",
  "key22": "1C871ZPwXiCTrpcTDMfoRa4Mbz6BN38H4JERs83sSGrhnUjNyHgBrbXtXnnrDu3VUGf9srBHm836vNpXe5fY8Cq",
  "key23": "47Vre97UnURFm8uB72jNTriRRfv785U5AqgDvXvgriUZYJN7aStDeCDrVpsaU1oAueMmXGDzYrk7ju45u23mKCzs",
  "key24": "szNaSijqpzqqSCYdAHm2uqKa98N6JNCo2w7NZkoDqrwdLVsD7eUtHx1piUkZvTvUnjuuJRW3HV9Qy4avz9G9NaG",
  "key25": "32KpL8x8ua2roqCWgweZAMZ9dZXq1v92gCuNG7yG2tR3nSJbEirmoX68XPfqJ5f8A62j5squnB6mxhgdX6KsxBut",
  "key26": "2MdW6zGTGwXPYxzcMD6rrgrBucHQrreCbNGphzwGYgMzpdsNsirKc3dGqizeg5GVVkABM4kPePrNqWquPBfkYwVF",
  "key27": "3GFWTCpSzMYG6YCCNXPEHSj89aNCCT9GcscTw1TdiAHie2NFmSaiXW5kBiEo1UXpYvXBmEw37kMYCEmUWjGKjj2b",
  "key28": "4qNrsVbRRzTyZEyNSdvkug3At9xrmP8ox2GpK7farcqngAVHJtM17zTGbK29eriLtpZrfhrf1kUo1GKcLQiHpdx6",
  "key29": "38uc3nqe1fwJytP2iXhKa375tiR8y12tkBNizwnwGWEGxGg9imfWJ4ShUBrHoyVn7VG28qSdUVS1qGCpa6vuEEty",
  "key30": "5BA7rJwiGbPtxqjoyvpdqtXWJs1TDZaTKKNcYAn53hYnXxQAVDb7g3BUJ58ppYJ1MJUsJQVQEgYhhnA55jyfwpss",
  "key31": "5c6TQ2RTLks3DGZuL9jHsJ7f9jrMzJQHCqfdbEZj4R2VFmdtwn9F5uCR4VvERZBWUaf4w44g3gqVZvrEdjMuq1bh",
  "key32": "4zSbutMMGDeyvLJ2MUSfPYG8dAoSTP2w2jHKTw2yKBCyWKd4xgrUCvtwYnryp4uTRwKLRwRwbhA8AqWEJCCCTczU",
  "key33": "3H74Nd2jKq6c5KVTNnSd2GAxWsWhS1wyQLjF1dmPJ3MFiEuJWt8NvhYc92neoDb7B8jnoxpx8nTK1TVRz2nRpLQa",
  "key34": "2ocXyndzYXBFwZXqEtEA7ij4esUBjX8joSLC5NJMfjxdgU38ohQzsJSJ8SaWfBNjstmBP1FCNAo8buWTfeQxyd5V",
  "key35": "2nkH72JoGkKUb9AC1XDqHBhvy7AJdsBqW8eB4MNgZgVCfhzeT9AVRdwQp5HxzFSD2kua4iYTr6r9VLMHNscUcXnK",
  "key36": "2rrz7xcoMXu7zU1XsswojH2GT1gNJxHVd6aRzHLUEZvkB4bjCed68qRJanEnvXtrdhfxLLmBRr7uTYAmWdfui4b2",
  "key37": "3Qqh1df8atBoD6f9ZKo32vvtexiyumKR4uf3gxikPQKbGtHsfqsoKQ3tBmqiENjUyhHY1pjQGTEsjagfwx9YHBot",
  "key38": "34P5CXdqqnLVkLAouzxdawz8aYzyA9f5mFW4n9T3sZpY9P9HTRbwo3dvWMGpxK4TdtEhdKfrdqmQdzoxrzLKojYH",
  "key39": "3bP6LJ5KGbnVipZq5JAySD2hr1evU9jaGydmP7vcdyxfHQMomhAQMghuRtuy23w2HYZYX7K6QYq88dSy1wL6TwZ",
  "key40": "AiCuM8yhYkutn9jV8R6rQd9B5Nbki4sDW9gGndcEUzohUeEmBJAejDWPWXGMcRWKW7hFZGuwbrrjD8d8Vk8ycs2",
  "key41": "2AV3iNMLvZ4HLxyqPd8d4q1DnQRPRQXdudUX2aQz7kZULzWwtg3KZTor9xNybFpwL4yT1hYgfuTU1jF6Fn5kDGdf"
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
