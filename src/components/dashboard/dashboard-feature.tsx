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
    "41f4utPwa7t93tKSxvKQJLgDZuLzHLqgRH4HdcBabE223zkza3MPwh5pFrNLcTUCYBZbAXE16XphQQ6dgNPJ4jUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P9iCPjL8iAc15TeLUTErcbUo5nUkBHkAoJp7KtPrm3VZrj2a5Yx3ByPrcqzPn7uc2use2QoiFTq5C88R4WZrkN2",
  "key1": "42acu6aKRdSnbGmy2iFtevi7gfe1RCxpWiZNETJfueHodng1iNE2jKX6eRyJvjtexfZupNEszWzGtukg1LTsFjYN",
  "key2": "5jfMWUdjojeNwPnJb8tvSDXe7jxHXKDoxDdHNEQmYEm4t3v5VLCLyQFU51DuAxoSNZ5hJbKYrLfnvFpaxRigVBoA",
  "key3": "3Ro2VbP86yMTUnVjbQDAtyJ5YVjXVPFJGhXtbHEavBHTSnqeG55iLUR4JsKANxqF8mBNxgXMrs6Hech4rMbWcf12",
  "key4": "4iDjsZNnw49GRG6eHKbbeLAiDX8KTnfoUumWeE4iYpmhaHRBiKqj8fzhYSNjGb5N4wNgUK2z5CV6fZQsgUadsCM5",
  "key5": "3WkH5yk7Cyx4KQrFKQS65FTxAUP7WoTm2GYSmm3wpYYrkzugvkL2zQcfob5EHEovdZpGviaGVyJCgsv3M8mN66cX",
  "key6": "3cQzGM9D1NKoaZCzqvX2n17YytDFoeXJoMBdbWdT87MCemZAhJbqsgitRwSMxfs3RYMMZcPenXAywFc2J2RpwZtH",
  "key7": "48csXwtBJWNRDMe5HRgrj6VBXCZcBke5mnZVTFJVPyzakhypc6doBFJpf6WDMJRyVx4jAPZHQwGwSe2hEFqmeB7U",
  "key8": "32EoP2MtSpMEHMNnv2mohQ9r9ipeREtV2yDPdfH8AUkANm9nu34cQwK7EGwthzYbNmLqAQRmJTgZCthsqQs8KtLt",
  "key9": "4c6zaog4JBXEtq1MTq3Rc552NwjTKi4Gu5L6VxLEwVqmnGfMhTtKfkKyzq1tyoiwWhk3khccP4ijgCf1xvPLdBqt",
  "key10": "pZsmaqYNFdvtaiSJt1mVfqNXa7XuSuHZqs3FnKEMre7h6J12jKbHjJ6WdjwrKgWTnkKsd737vcdHkNczQHThsPf",
  "key11": "383zxSR4J21Phd67JoJ3qoykp83RHi77v5HAsrTwJPCNZ1ohjU1FAzTVyExWKJrK7dHdajQMuxveCbqQ4F3Gcpqk",
  "key12": "27eACnE9Y7JLphtYjkybrhWqT46J3D1E8hN74nJF3FME2qeBH6g52ce58pjNCSsz8UHnoNPgDNbLAay6BsrqK4yb",
  "key13": "4PFMQXt27NaLn4vaN4CrCWc52K9yG5gnHrowAgCoTaCZBQg4FsciMTRCmCGpJqMFXzueQ3bsG7ToBSx68tqXxFtn",
  "key14": "3LfguyzeFfpadUNW7ccoSjatPbev67z94wMJDBSZnyBogkmNF6ni4UFcwcohMrWypASoemGTethbbj9aj6rGAsw9",
  "key15": "2DNZZ3XzJEfgMULobEoYzZmhM62tewPDaXjcjEhM3YPXXxok9iKfGQushNtRV1iG7Wrq7ZAExu4gu1atBouaVGqT",
  "key16": "2nTJbaNxx17trftSriGxQ9ca8SPMarFA28P6MaHBA3NEoF2Lg6WYh31a9QWWh6BYptZ1ZXWrN4c4DH7V6rrY5KR2",
  "key17": "4m1ZXbXpGREV7mUvAwALKRqHyYcqXwN2QzPcxDc5iujp6D7FpRV8zRKaSr9wyFpJ9PU82icE5GNxGPiQ69o1WJGS",
  "key18": "57hFj6qxWz1zqRpr7tD8uYokwGyoNP4v3svV2in7K8bQdi8zLzKgse4rKx6nCvmBaXgKRscKKw9z1jsZuJoM138J",
  "key19": "2sNHeg8mxx9BfNoL6v7fcyWbMNjzodaxGrbJQ88uYYMav4ziugwE8DcTbAbukbKBHxn6n9NmTCzhd44ATPzQfDBX",
  "key20": "4ajV3U64ymmcVdN5uEMRmD7damxxQPkJH1ffp3EUgn2AhBrHEXcAjFHG4nmgsY2n3mGLBCfE2M3uQUtojch4HDsX",
  "key21": "3BFosz36QjPB146mh3e6mDNiuMFLJX2Y96DRgc9nzmYPmhBYd195J8ErEnA2v81fZLW8VjtnEfvYUiSkmtrymuK7",
  "key22": "4qsHTGFKdxuMwRNdDjuNhvpRb44v1XGEbmnpS5h4wTgetYv6CCZA3pAgftx1DnFM3kYQE6ay5GAMjacRK2JJMLY7",
  "key23": "4xhTPWR5WPbonA7oWoN78znuj2iPGCByxy1Yaj5g54FTLaCWf5VUpS6okz2ffcMcRswmTVkxxja3xXBfNUrcp3G3",
  "key24": "55wKsZ8mxUJCAQEaFoSrB5AWFqvpemqCgNEA5zVYqT3mGVJ7A7NDodWUgg2XQfdcw3cJrDbqt2MjkHieG5UF4JMw",
  "key25": "5QJ6vhqWwa4YoBR7tx8ohAZTKkCmmY86UvnCJ4VzGFo2Yo3wB4eQ8wpUzLpHmfMRfyme1hgg6UTXj5EE49G2xFf6",
  "key26": "2tB6rRcmFDE9C79w7S83rhiMdRFnn6GUpnKwhBn5Gst97ojVrK6QvbH7KCtLQe8UgNMkfjRaMfVJirQaXTh8C6fJ",
  "key27": "4Asdihvzrt2cQuh7Z5QsshBcbzzzpwgNuRMcsjSuzDrHAoHJkMHA1mnt5T7VQrampPfXQidgurLUpkHBZYzNGbpd",
  "key28": "xsnhASoo3VrBcZKq9cZuRTTrRZkNjKR25SNksEmW7Y3WPVLrEto7LGpYHzXCpzUZASH5trexXMXvjCqNDJtdGew",
  "key29": "2J9pQHtg2rpRmi9feQrmBzH1YbjKCvcj4NQPwNVrS4VLy8D3FbDQAr13LXay3xFwHNj3DiU5MyT2WnafHyDNdArM",
  "key30": "2Xmth3Tb6eXouSc18Z39foLMw6Spvs8vkq3tcd1DogCBYatSbYcg7P2AGJWWRjtW9y5YNuiVaadBwRUB1Ne9ic66",
  "key31": "3Ufx6nryax25rda1fkjCN2JxyQdWGqsBVqmcPoYBJHw8TNSCuHzzuJwFSGzCWRkfv6UJ7L76Xjv8rSp4HeAnvnnL",
  "key32": "5hNS3H7EcWf77ZArcVZ8tJmDoGqdM1DkhySohJFYC7xjETyxXpEEeV9nnggjq4FfUsskPXAfR4xCCLZT7ywe93iv",
  "key33": "2Nx3WXuhXySk6u9ten3CWr7HJLpXrFLokbe5ZP8khsXjSQLRXL11sxbNyN1MjiCob6WNh23wsAaCtqGiFL35cZoB",
  "key34": "33uVLGtBG5dzkebwbDK5BF49osgTQb1ndgUzaUxoLLwTHXtNn5tvUeZRxCoxqbGpyjuvTpqYFq4xZgL2LvQkYFHK",
  "key35": "4Sd3x11LYZCL4xGm2qfkHNVGPdJLcdtmcMGaY4D8nuqA21jDJrzArDeNdbwqWMZM2P5U6Zea1vr1rUw9czhvSwWM",
  "key36": "3yjEJGQQDiEgtLk8kjc1y2kx4R2Xc7j2ibvp5Rfir1aKM2dg6tn3fHWW2kVUXpT4oQ4XPGvn4x8GogWGNR1BV92r",
  "key37": "GToSubgbEJRFAUD6NLTyjPYrEJxTxZ1eGbvK6R25L3RtjfwbYZ8yeHs1hn7SGJvGWV7psCVTS3p1cU2iq4CRJC9",
  "key38": "5kRsTSiKbp9cjVpSemMBenKA5M6VU7FqUdcMmh93Ta9CrfYgzZjhN2KUqJfMjrjbszQsqKwb6QvzJtL2zo9ZH1vZ",
  "key39": "5GRxYnX6utDhr7TSfSBoz8HoXT4ikAE8VcmxUbediYthDPeZrryh1mEarJL5CwnH6btx51L2g9q8hWyUJjzvZi6F",
  "key40": "4KE363k71aREx6mA6o7gag52MyB9ecWV7vKgVpjbw7NbpSVY93pu1yPUBZNhmqp5yYEUu4Yr48q5Bp4FAZf7eSkf",
  "key41": "5VprXZS56w1MU2tGYBqMvqojCxyojdgTzbQ43evxErdBtFcipCBC7dehHUpvfxzMizFbbf7iauWGkVEZsu6QsCWE",
  "key42": "2VT6oA5BTVCKHbZ7C1hasE7L1VXHKH3oBYwAWTu7Y1xMbDvdXS3LnYEWgHXuRyASbxih99hWjWY2Ushxv68UWi5t",
  "key43": "2am7kK2tKaovgzfwzcbeNh1ygYqLHsS8ZMxBK9h4mKo1k3r453xusDrzqyq7SACSyrD25PnxQvyxi7Yvj2wNW3uy"
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
