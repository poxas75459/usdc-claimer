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
    "3V6ZwcQ73TRaBVQue7K2ccACgEPc2YkLicbgjKtn4utQDRn4Hja5x1ASh3Q61JQa2w6ELWeDjF8DjFAzR2TYczkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rr6VQsrBkoBWGj2qHjoah1tzU5szuV1wiYPh8MoHtpB2WUro4LGUWjFbkxZM9bnUHLrcMjoTPYRb48rppFvQXFQ",
  "key1": "5fML81PezasrDqBRzVZ2eZ1QpJXonKFyanT5hWXPUZUpWAwKWa1ydwoyB99UTbV2m8F3zicKrAvnPkXgLahJSgGy",
  "key2": "4YTCPHMiFP5AV7Lz3ue1uYRFKTEfGszBmVWF4L3EZKpMo7FTAUsXLwo3ZdHbzfWmbWVHEsRxvibC6EoTo2KoYmLC",
  "key3": "5Zvhivk6VEgAjDiZ3c1WFYBNNv246Srd3tHtGPBVJH2bLRQUuRV9RbZG6CBZd4WrwbpXpE3hsLiaAhvDjM3CavgA",
  "key4": "3cev871D6r2osptzBARsH8tuhkoDp9g2rQkh1Fvc7WXp3VVU1LBeorLeNyj6urPuQMFEQQ5KENtH8pGxFKXHnsiu",
  "key5": "3g45EAGUcqMjk4PRxgsAjrUPiuHU3bAbZqdHkHgBTCX6YeBLThwCkRtWrrag3xnbT2zw97R7kYquR5CBhRZnXqNV",
  "key6": "3JERKFnKSc5e8U2VzTLwf4rxv3t7avD2Xk32GaHaZv7BKnuLZU3wYzS93Dx3nMKbxHUpnCrKQZxWZnQ6qXvmkJPM",
  "key7": "4LattHQtaJ8naEwdjVvtaChBD6pcnChuudCPPabVAPzX1ZbwqJwWtoW4G5e6N4ARcnUZF8nonVtvBqQAKemJJnWA",
  "key8": "3eYUvHDzKB4LSLBsNvUyjtWg2VCp7YsDTRKp4ax6PVfphToPYPufHHxraZCaUfkuMpwBcLzpmqK54TTytH3oYocj",
  "key9": "oY6M13fVR65ycygStjT5nKpQNXpaS6WX1VQ5hPDznW1B7XYXGTY4sR2GG3DSeBhWWioWJmMFPkZxduQGBKPkZkA",
  "key10": "4fUqEJaaKAhGRDFaseWpzwbKSUNhxPCf5XGAbmQFTWhc1QuiPHdhSNUkFKLRXfyZoDHALV9hER3iowNfUVrA5X13",
  "key11": "2bsbbe9y2Rw2KTYgj7jWV1GHBfS47y9XyPE5WfSYWNPtemCnmJjU9ScAFN5tB3ytRi6fsFDRMeHs5te1wBkxfU6B",
  "key12": "2QA8pqoPh214tj7kztbdQUGEvPfpZQ6kQqMhy1RfmbopSmejABqx7wJQZgv7WfRY32bYzL3ciQkKbkNVdiisQ3of",
  "key13": "5BipBgwUYwo7tgR6MZrXF46jJh3DZGqfBMXWNFzHXkgsdzUfufcvkdzxcy28G9mwaGDZrGeuJSuYptoPTEPUBTnL",
  "key14": "4Q1rC8nHahmPFD6LYJyrrRoaSQwsjmXBQaNRofMV2KJGNo7sv3uDwBbZJ5pVxnN3gjvFKBXFqfX2UdRETyfdCd98",
  "key15": "3XCB4f91mU5gebWW2vaob9QkL5pw3Q5DGAxtrNmS3j5zWQUJw24igCh7fbuG8kAhD1GC9phWqCPJDsVKiDvyEDh7",
  "key16": "3cj29HVrjmHzuBMe6Ad7JBia7i79NXdQhoCMouFUyHJjQnAJFg4knwcUtZPbJGgMoN21yHRjGc2qGvrDyANXw7D",
  "key17": "25aTG9Nfv97RhQJ2qL9voPrbuKMBsqoegvSbuu2Lq71bYbeEhZ57vGsnge7Q3feBZBZMoLjDNZFYTJdUNCaRgd3D",
  "key18": "kEjNs7yiyJ1WSQT1U9VkTBqDeRun8AU9xifqqBwP26mMWrPAQLNX2PbdPD8QxHV8CSQhuUpfoKviTVBiGjrhuJk",
  "key19": "264JXHvfPCPpZ111wE9m44ekRbEd39GVVHgiidwEkfQWL2PfSBQq8WBCncVEcbR3LyLo8xZxmmD6KkyeHxP3quAD",
  "key20": "5o8Y1s6bcvcF64WB6Xq4bBbTbNT3k36vhvNBgm9NN6ysTP3bpMj9GGp6QhaTPCvAniqYktgfv3bJASD7LTR2iyfj",
  "key21": "5auUqLfZuSHLWsTpaTaSsH9cvMr7YghW8orNCpEvn93zh7AmMjYvWezr87rLbzDQbYmXTct9LDi2Q4rqC4WCddWj",
  "key22": "5cGVPF8tieWHzRJ2HyLqt85hcWSncYv7jghZSfKCrTTaW9AbQDvCsYh3BbLzHSQi5Snisy7R5T6RWa7rr2sxFWRD",
  "key23": "65fx6JvTMxY6JSVGzm9TjQw94vJ4FT4R8SNTi55uk81afNNxqFEvtsz168PmZfWjPsjssPK35PPDBUTvGDEnRMDe",
  "key24": "2AW4HVPhWVeRMJJgBaVCJzo4juGA2pmV2tKbGaMBzcJq4drdEBujPaN38zp7LttjJ8bVxzqax6cRyFbdXnmG5KmE",
  "key25": "5E4cg6WPySCRxaM9ozeAQPJHFVxhghY1YuR1UFuW12f6xLYNRDV7tj3T3gLnedS7HvpYDzGpMRmgrqGrWexPnWCb",
  "key26": "2iddS4W8M8cWQUoq3DJ7J1NxCJUA7LyAT8Lx9hTFKrtV3ZVPovUWrYD85iKrcUWc369P1kxSpwwzEMmqPPTtac8L",
  "key27": "5WYeVzatLPaS3iPJ8oZMatmDWXqRVCJbRApjfpjrPZxxwVD9Uvs5q4RifGqnto7S3L2ZBe8Tn3t3vT6DdCg4TVGb",
  "key28": "5pjKnkWfymNYxAG6vMKdNF6F3u6Kia5gpowNQvS3mLqQsixrMJtibqPpN34df6sXMczhA8SNuZbh5EbAU3Xj8vmx",
  "key29": "4mREMWcGWokmBzJkxrSMW48D1C36nqzp19n4gBvUGgVMibLGHydbugj9z9x9816Px5upywMtmZEmD3ALmGCQwytE",
  "key30": "4m7monYf39SP6qmNkgyntR37drNfcWpJJN9dViaTcaYrBnN6knyM4a2AK1wjJji3shHxK3mTCZ2351HaUiXYQnJh",
  "key31": "Wpxa5xMKmBeBXGYtavzrG1pgQtbHMSsERiexZyqU7DkGAQvzX1E6dbsrwmpu269VrrF6Vm36ozqNwXqCjDbDnx4",
  "key32": "3dcXtJWHtYjV9TnFsMxApGL7xjWNYofzgQpeGYCunJs4JiiDYxL2AvLs98UZsPUXdZWxhGbvPkEnQWETT7wsQ2a4",
  "key33": "3F3MLH2vti7z4zWzuhmn4BCLPScE5YGUbSPmdjXNVWpsEqKMo1yNwTo91MtvhnVCpCSxo9UFhCcUCbMHe1DumECK",
  "key34": "53CZervktnzL6nSkNXfw81hZbj2rZCMsrcmMHDaq4Yn4x6vMLPYLQkGjtKfJBfMhwZEEwxoGLvtJgxvSCpTLTPiU",
  "key35": "3oy8C2bh4bHkLPK8B1dn1vJ5rBDrckPK82oyv8n4rZX88CWsu4L5a8oe34BHY4XX3b8UfRxQEcwsAvZj7jEY3NKG",
  "key36": "4oWcJ25T1DdBqR9ebXXYoY7tcxWXy4EL7FY4yWqDg2FXZPYAzyTCiXa56MSp1BDTpr56X5ZuiEuQwGK2Ev1HrgMm",
  "key37": "5zBTYECcZ55Zqeu1Bi397paQpvMx7WGhmwFMeSRfX53bFBGKg5Fh19RnCjrPR67aAp9WxdBRWX2zQZjHDY57AJR1",
  "key38": "NYNpx5TomZmRyD3sf2w46BgEG4TLRJJx2Yp97m8xVrvjHyTNAcpCcP7JaUqj3G9R7WVjb8GobvJPJSuKc8Qt61t",
  "key39": "228HxfjNfnbwnYz2q78EH1VzUFPyGeBryci5UNQYdAWnchGUMcos29CAb4sz4gXQWdxmPcSCxph4G9Do1SDbPioW"
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
