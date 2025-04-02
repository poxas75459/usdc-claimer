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
    "3jX7VTGyMtmpkT7ZV1gYrBQSCgvNCfyYiGT7coBkdLFdNurwPxvK311gD9nCQ8RZj3AQk3Zkb3jfiEwb3woJ1utq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H3y5R9t5r4in6p3RogBMieJDpjZLGwAoKpT6CNFj6Tp4uHnhpQb2MbpFvsQtccEhHdn5dUvVvkLMyCn3MRVF9BG",
  "key1": "39YeJaNfPracL8V8nq452njmS4yDJYkDQQZm9Q5AWnCBCxv4u6DUekw3sbU5n5dRHL9hKrDDxJvSZPzUbDh5c9Sa",
  "key2": "51XP5Xtg3bGbZL2Spka2L2dWv8FDQvynPBV273XNBabDvXsSdm8qopauDmQxZMHM6e96KXWGdZV1XXPPmYoE3G4d",
  "key3": "3fntxfMZUDnsbuNmYnczLELYQHYkmHcTDNM2t83C9uUmgP5vSnvz7UmTcRjFWfC7xofrwcp19bPS4XnMh7gcBPzF",
  "key4": "3KZijPBSH4XkTPcMcBFGyRfsVPbkdUFktrPehTtugRto9rrKxagS3u8NdjES2yodingmSLmdDycDz7yKKcQAP67b",
  "key5": "4n3dMbjPAmgSjLX41k8SmUZmsqMaWSF1GCnvpNCtuLpccUvhy18b56A2hc7Qkij3nhKPY7XVUqKEN2AGEwKEfzvd",
  "key6": "3tvRt9F6nBtCj5oHvp1fS423nsxRqtoap2zWB6d6kVKk1LzVx6hSc4RcUUkCQfxSHM2s586DsPruV55JerY6Y6xH",
  "key7": "2dE93Z5mF4EfNDGmMUBEeHvBLjWRxdpBztnUizNsfB6R29sQKezFNKfjgm8k2wtDsJHtXhdj5GHv9XKns1etaAgA",
  "key8": "e1bMpZHw99E1zLSvk7KLUGsmAXMtctRtYF3KjHnpsG39jSUBsRksvNvLGHSJzT8SmXriStL3w5VTifshHoPmBTy",
  "key9": "5VRFhziiic2yVKRLhGqEmm1YUPegEAAgtvLHwK7WhB3jna4dHR3qZcRKiAtxEJAtCCEVes3BYUBn7PCAQFNVJfWn",
  "key10": "45Hv7qsYSrHnsyE6cG3FXWXqhxpGDAebc2wz39r1v5JtEoYgUSw3FrAC43cFNb2aCRQu2K85Xpx1bTobJmE49eyf",
  "key11": "29SjPPS97EaXprB6jKbZTbKqDRTJBPhpzRgs8u9XeeAuV8sX5rmiVzsQGgCSL8ykJ6zqoF8jv9R6gKbidQitEVrF",
  "key12": "vFo1X6Q4WrY93j1rbAoCSBT4QPD8TuGZuFYANVF5LJgEv9gkFYC1oc4HdchdvWPz6kpahjiwpLyWEr42yfnpxJg",
  "key13": "3hvegwdEnhYsdyhpJLqq484TdwXuRHueiNhPCn99h5rw1vmMurWq2Wky1z1hqYARaA6g46QBz7S5bWztuLwQA9sT",
  "key14": "7TCPdsxYwMFQMszQhvwf1Za3tgBGyNi3bdMNqY8v3YgVR7hEdo8dJQoGcMXPsBTeQP8yZxHDKW7Cvo4Jw6XVvAE",
  "key15": "3mqZ9r6foSt4U61xuGNqrHQNjYqXhmysUUY7DAJoRWBa74Pp7PKESjLrwBiZmo2xGNWd11TZBfcLxkw4MMtcqCaW",
  "key16": "3nGSY42WsrnseN3KD7mcUMAEnWb9dc29h36FbBJgzaRApRrPBGZ8YYBopw3aPHb9orNg6cJ33a3DtV292o7N6r3w",
  "key17": "2TTXMNsV4PB6AsAWwysDAtzXDUWAAVbWCDc3pY13BvMH7aSsjgF3xMvCsJE1dKcevmioexNJ9zFPGdTjKH4bnUNT",
  "key18": "3RrWKZBJd9ZgpP3fXFMCfxLGe3YARXH78uX44pJB9HXbBnXjo9o6Ej1Vcn3B7x5G2K9kurjRDu37tMfmdiEfTwv2",
  "key19": "4W3Zbx8RmZJucVUHpZcZ9vF3Bcdh8ydFJVYfwnLDmJYJEP4RUMvWraW392zBNyTVT8z5zdCz8z5pkusY6CBxtVG6",
  "key20": "5X2XJiVinFDVHY8k6qL5sMXavDhoXhBUVmARc9Fvw3NbziSF9LGx8QTMjqHs4aKroF9LHjoLtvo7sMG4ofWCaPkA",
  "key21": "3TxeSGFSkLpRoAkr1mnJRaHQGFBwDB4ozt5Jjo2KBQqEy6sjbRHu5pqZm6ZkobPaN62b7EWU5FVSpFEBagi5bvgr",
  "key22": "22MifWJJUVEwDFLpb3LLNTmsZi5N6otynaGpLQMBy9U9SyQCpPMhdZ8Vx3jwPPApRTRHBBM4qRcMJvh38ADhY5y4",
  "key23": "g9MZR7CUhcCnZq4ocQVhHcbH5roEat7iJEvJJr5disAdsAD1CYQUbdLP1DpDLN5VRu8rCbXzh8D492brd4mPFhp",
  "key24": "3ApBQQm9RqjaGvKXJHxFjntkKd24qqBVSsXStM2qdHcdNN5YpdkGjUMbJrGTywg77EGYBce6NV5JzE25yZo8rawr",
  "key25": "wGQtbuX8n7m7wBwXcjfy2qmS7kxRZqrd4sMdJqsdYZRgefScerRktX6Sgi1uRTnbSCZpBsrH19AV1jwGt78TJu6",
  "key26": "3FAujgNpo3prNiwCgzn3MRCC6LaG58KbQtZ6kGLHC9svbqS1mRmxGbu8gaWNGDETSu2y1AUC75RS28idnHNq1yYU",
  "key27": "2xSWMxfp9m7xo7qD4qR1NdNaT2oBpVjk2P8n59BvsZpP7Z4G8hpSNVXK8LPaAg4MVMv3yQgrpXw6Nikc1As6g1PX",
  "key28": "3NczAfxcLhfx76ac53mdvGoeHpr9EMhJ5vGesLYP281jGPDtKjT82SerpDJLT6i95K7eM4B5WjYiVtUBkDgsHnQM",
  "key29": "5wv233Lr2hwAJTs41ZFheody12qY9BtznXf9ZFSSQXheFyFNjzTRBLgdTERqytMHYgKjohFGqyeBJLiPTDv7WpNg",
  "key30": "5eeVQ5WRQmifVwhatJgw2DQ6xPt1mNoZnuobZcgpw7jGfxJnJQgQsvVnoqVvftDBNHTYesSFqrwB9dFoEQJAt8Fw",
  "key31": "aRpQnaaK3GvbuNeLZWjeSEWDPNpw5skMHYhtiznmfF1uNSZJFnRhBoYaBkj3VPYMZ6cz9wXRYdKRdPjUcdbsPcD",
  "key32": "2d1X7gvd413VVd3hwmkrtvYPJ73VoWAdGGy8k2gFsfMpZEZVQZuGWu6YfTNXaTaWjKBLVKGHi6wAATvkjHfNi1cS",
  "key33": "2dESrGgPT7HHAiBDGMDqjwj2sqBiF3z4ziuDmoYw4gbgqna44rdRrK7Y28zGcGJ5EZ9JCAhpyfXFSkCqrVAqpqak",
  "key34": "31NAC2AavKwpACJeJNcmu1pRwKPkevTsU4m6CQ6H135Aa9p1cxTFkQ79wkDAeTDykBPGeVxCRAx5edoc45beY8L9",
  "key35": "2fWBxxYY5fc9hhL7xDFy9tjC3gTH7eT1qvgbC2k15WzY1gL1UiTCTgwxU5q2kjQauoSjkxqhu2h141fzrmC9foaH",
  "key36": "4gRNua9Ny5P5GGcVyb5g5uxRuBTmfZVVjd8fVQJBRmefgS8Lm9R7dWUbX1xicEmqbGGkPBiMNHdUz68ibgtMnTvg",
  "key37": "2ZnRcPXfDuiKXv5LL9Lvqtp7jUmAUjEcbh3HgzV7NBzJKZZpSxRcafWSLi5bnnhCiJ5jUjkeEi7n9eX8aCJ8c267",
  "key38": "2bMYr9qDUQnRu5kiHADjN89tQNMenJQX8WerSm24FN3qn7mVNKGuohFxeSXZhZZNEGrGd9hfXFwZuyeTapGtnok7",
  "key39": "5NBdupXUsbQFAfAxwpKF7F5gMtfVMprWsxDcfeom7ikubHtNzZaEt2pzKTCQdko9mhq8Q8pEzFFhKot2c4Wmfksj",
  "key40": "4y4ZvvhzTSw2nNFC2yZ7BvRnHPdKAf22puPZEefgpJkL2CTJ6cMoR6VXzMvRvwYJf698SrzCGtnrkXFubXh8XGHR",
  "key41": "hev2DCj1onQBE7SxjJ3dLv7UBmKSA47Tyv7PwMnjgSq2gjkDEmUBFxkRByaK35T7QRYRQP5wEjGdwLkDWUXi7Bt",
  "key42": "3PuZU5rVFXouVjbtw55cunU7Z5hyccMx8zmEzntLCBpbEJGq5A5BCkNi8bz42Sre6XBtqRAYFLuDiGVnfCE3MJb9",
  "key43": "4DDoXAv35HPu4inwjpuaJp2xH3csd4koRzErUnVbq4eA4LDVTsZTo3UyMxcdXGfwuLRkjkmQigBpVMpejJh6vwiz"
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
