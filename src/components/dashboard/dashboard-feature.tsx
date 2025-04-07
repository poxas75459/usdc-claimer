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
    "3cxmqwnk7tVidW8Kq5RXAYCiUY4yda3Fqhe5F121dLijadbcpJxu2xP8N47qcGtB6bde6LVf8eC3gQRSbNd93Nge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NsyF4rBD5RZxsjCQ7KEBfcCaDcyq2i3TMu3NcqxHKS2HjoqMZ37VGCUhKZoyejcs3kfF4cb9fPZ8kMY4wD8YQqg",
  "key1": "4XQggN2qTBt8sQPvaBsheB7VvFd7EHcVeJiZG8EVhnUMSDzEZZPttiYyVE3tbuFtPnHgq83vTkJjYANBE6VpwmDo",
  "key2": "4gHUpSZFwfu7NsATDZKfe9qmiPZvsdGDStH2oeNFAvWy3cyV8FR7H8YPkeSY2XnhjWbTjnU3xNJvaApgy32YG4aU",
  "key3": "4K2F2otoEaeZz11uGqH1hB8Q5yMcUDJp5TZP31i4mwdeLRcuAHYaQkxHCeV6vkJgkjTDyhBr3JwBWtPaKjDGcdRB",
  "key4": "3VN87FN3p7x8gL7ZckmGh6nTJETCAiBFBr3LLVXPNur3JEh6D1JPvrNcsanHof3LaYzgXh5A4gCF79XjKZDJJzcp",
  "key5": "34wTeAoyRGT9Xk8zghSk8G8TJ1EEyzBZ9TKRpuhXbgrMEQfLz4ZakUAGW7voRvwEBUSb3wUcJMsTrbAEocx2VmjJ",
  "key6": "aW6GcjBqAxeqkyJL81xcrUHAWj3ZY3N8JX7Kcdh6JbcVF94x8XpDGdCk1UpHRL3pVfje5hj3fkqRojL2E4Y2qT8",
  "key7": "31UhXgRcDAyXNJzAykKZmLur8T26BPVhq1Sggt9oRjVbkuy7ZtFV3apDAYzS9fXJznircWk8sVbuBjuCVc5caiCq",
  "key8": "2G9q1zXG2aHsckEgoZ61Lo1uehoXURaHJDn1aqQwors7omYanpFsYXVy1RNh8mq71cPg5KNSsm6XEMJpsf5YRfEw",
  "key9": "t1SsCGiSvSWdoMAdwGyfLW4f3ixW2RWRYTW5qo1cZkNt655o2j7thGmEeLSvwid8ZP7nHdzDAWHYfSE9cjhFwg2",
  "key10": "4DzFU4i9zbVFFZtkcF1TzirJcbUd8AfdDSik7eXH5YxEV61HocwYviAEyrZvqAQCXQZSkjQ5kLDXv4s737eyU7Fe",
  "key11": "4E3XaVD6EFNU5WeHRCRi1UXLEkhYWRTNGz1aYVttCW4ai4n5jJ1tfbh4KAcd23zAMoSdSWd5WCA4eZYigtmCBC7v",
  "key12": "3BLYSy3RjXsAboixNkehqyn89Cpy33goK7QKvhgG7Jvgzj3QuUghuteRmwemJNrwx92TcU8p5cjVJhdzG9CUY4wv",
  "key13": "4vgA6PUrVVGPv7Wrt5azFLQDKsuvro6euSvzU4qW5hzQfDy9y8ZwH8eBNoevnAbZDVGYSrs5uHm9xBVKqJd1BXXw",
  "key14": "BiNbwdJwHk9etpb45CNCquFwv2c1a4E7gM4o5BwfD7tjW5qAowcW3qXyXCim9FBNsSQnaD3aDZfqMGLbkMWLyVU",
  "key15": "4RqAboQafx1xLCf8ht3QEuntmzEJhzPMRm1sLW26ndTLdyG96M1kfUGpm8heaSkNSVaUZx1AqfxFVp1r6DobAjyV",
  "key16": "3Z2hE6yydxkE2V5Pi1rtAQAgeEt4tHbdHzC9tDBnJZMNHKR6xCsnbLa28PyXV4NaXrCthcy4FbbqijnRRqYDcyzv",
  "key17": "46e2Hi9vtuhSWbXqA53UTYaX3qKDLSycRss9XcK5i3BahGfaf3SgtMXqkQ2g8mvfKZMwf1w4cDzxcHr4PLvbfFc4",
  "key18": "5SJgn6ddF5UMwQEUDPW2zJoF2gdhZPKvZLVCEEeHnQPH4mbrCYwxLiFsBpwF3fYXvxDMNHD9NLAwTZ8qRGHNuJXR",
  "key19": "2iK6GRXNtQ95iD17xu4xGCZXeQbfZXUBZ1CUXC3hkrJKpDqDcHtGyoDqsJ82YTtHSVfduiPfv4EGAc6omtiqDaJG",
  "key20": "fH5TPrJnKG9CJWP8YzijjQaki69ds3ZvdNK5RNwG1uiSZcTLGpeGoa4ZTEZufMyTJhzVAaRzU6vcZ9KkpE3EGM2",
  "key21": "2rf6sz7fEsYGjXGntG5dzp294BLxVuHipL9u9KdeqMfGuDUsFetfKwWwT41jUHWi8FN64WCfhrNLYNiw28sSLW4i",
  "key22": "4d6nXiFniG787SrnLmCs7UTnvFFPNAAgu1G9akHEV5WQH3dFVsSjmjCyigesYtAoYuwyYCoCpFMvy18gmRG9M8Xz",
  "key23": "3FTHU4X8YixLZKoiZkDsRPzZXekTsbqQGc2CRymQkbZW3Crtadab5K6u72QLDaurtbd4S6Qddc7G5LhSmt1YxjNF",
  "key24": "5PuFSmhEDsqsTdrrK48cnATSUSXzD8fJa7TSCkcbyiFDPvFvfb6by3rd1bwUeKH1UajmnYYtNgVDDroKFqM3HmmY",
  "key25": "4Si11PuyBgS7WxwcwLFGtYoUH9g5fuPioFUnyCvqq2RMteKrphEk1F9CuDqkyhCnApd5WzC3aWYHSxgGyjf6cB7s",
  "key26": "33BTimtbbgdqUBnGSMhF9S5NFbT657HBY2ymDbPHyRFeU9izavTWADUTCEjiuVYBzRnuCJ1CS47itassQY6czNxM",
  "key27": "2AfyT3kjg9AsHcborqEkmExN4HTLP9RRwstkegV71LFqBeWMuRMmxowSkXVdzvuMc8q3RVLE2hQHE6yPDLusUPey",
  "key28": "4ScRNEGCpmJjQEn27568XKgEGFKYL5vGXXx7dpdvMV5jno7Gg6ARynN39Z96zgACppHvmMakrFuhbez4VHX6pWTn",
  "key29": "27KCZZkmPn6LQPJXdSZDsjgoFSS6vt1FCZCdBVkd81Ht5GMsF72oJG58NrjmV8dQrrmXpvU5Pjsb6NbXKyRbvyxP",
  "key30": "5Zicaeh3mnEoMXzfsGvnvsTgevrSrHvDWvL6hhvDzFw9Z3uG2r1TAaZ2oJD3qWizNNQWPriS7M5SedaK91BLRU5t",
  "key31": "mVMcyiCrDPFvGbj8jE6AXY42MV2cwNArbYT4axHnvxdozcJqXRcWWixL4PzvpCJzEfoCUPbEBgvHuV7GpdPyMVS",
  "key32": "48XKouBF7bpd4D9Brbe12G3tnYhHaiRMt824htCyTnW2ATTM3sWYGsJdC4s6DEpEQoQ7cMxf2PoFW5RrnsTDdJEP",
  "key33": "5ih6pPfRnm3rYpMY4gqfkBwfCt9qCG33Tn7x8zkAK9h4xEt95RyZdAa3f59zJWdYDB3svMEAYDpkS5baZmA2rDTP",
  "key34": "3Mx1N586dTuJcn7UxUztKj3ntsdG6CQYd3yVUUmuAcdKok3yQDvstgDgy5gEX5ucw8rufW6uB6B5TkVmNiM9TtHt",
  "key35": "5jwAQDVMi9rrzmXdkm8wngmNxpZavnaWAWWYveUpus9cmKHDMrNAGftWapvXo85S4ESdmvyZktpm28fz8SW3H6Lr",
  "key36": "4SAejEPxpLJuhdAf8E9uv5TsVLqX7RrBhZPHMZctk4R95Nix5jdJyutRAtCrZZumR7GESM5mWUx9bxejsAv99DZC",
  "key37": "zMKLTUD31pz9XGNn653eH9b8uRwgf8H1xW2Lta5avzL5BUjorS5Ve6WyGMjuwbELq6tYMfoPtHdBfvsDbvxfuCx",
  "key38": "7rX6rydVivKQkfFQhq12yEyikQCCuh5ptZVhpAGZbLKZC5cQVxU8TUwdePUZ6XBt6r9c4H58xdWWxiXP69KM3gz",
  "key39": "27uAEsDRbhNLCQtCwR9FM53H4y7mZk1WCsuQ7kFoiAJuwjyrFELUdusG3cYPDEcDtAgCJiLP5iEhEtPfEZDkeQRp",
  "key40": "2gxYgdZMuXk6iTU8MQc7kQvC8VCPDf1Vc9eVh8EW7uTXSG3Ko3HXeQ3HTadqPCAtpBQpJWwC4A7j9m8VCtV19QE8",
  "key41": "EMGSegrz3pyoTDurQjko5zVXJ6YFJwdioiqoXAuyPGFVA7ttEpN26L2sJvi86Dzp4Fhswi4k8J6edxuGYBRp7Fy",
  "key42": "dqZh4KTHtQngyD2cQsfioHce1Ffs2dc6ZDNNbUdswCaTUYjdaxUeeHy5sD6aSHxAmmZ8qbP3QnVSbxt2KNKsERC",
  "key43": "5Xwsc6mu1p8yQfGSCRbvGvHoYRAsddSNWJbgsVBUTVreux8fRE9EaVdG8BcTtL2QYySYajTsnzvZi5G7J1iXBCSM"
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
