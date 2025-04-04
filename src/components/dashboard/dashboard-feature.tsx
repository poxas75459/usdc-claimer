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
    "QmRqbbMwr5SiW9KDwJrcCGAzBcUmBe5ycX6Uo1w3JgPTWmptaR6cDnJ6bX1hmRP9i1RksHGEvR4dgexXVYLmtRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HTF7BgPJivwUK89BTibYUttDLxVCihWG6VMeAEPvEd6ZiU6t1ngK63RR8SA5T5F74TPuT54EJZsB2QTMUTP5Nwh",
  "key1": "3u3oV2pkHnw6mZ9QkNSGvzEgy64267uXjghPtBytudjtkWijJfDY16GvvJNUnv2id6vEbW6gsHgz3VjnxykMi6cH",
  "key2": "33b2sL2S91H4MNSi3dYwW1ukqe8SzJ6CCotsMerTgcQyAtizoDH7Ygh94EjGkLaA1dwjQxU2pzkJ7BUH6QURoXXk",
  "key3": "34BBdJJqiEdeTQBvzE8e7yVSkZqweRXqS4LNgvb84JchYuxYewx9hzFAjPoxFbQ8jHw5S7EmNLv4QU7xcVnU8YfX",
  "key4": "2SgesaBTUV9SydFVjnDYJgQ7Y8NdH6opuctFNFz4a6VGg4p3JivwtLeDsjnxevi6QDQQDFxP9Frq5gSmJEWXSUfF",
  "key5": "36NdoHe7P21Ey2aSbpBbTgoTQGPqRzeaxATKNyefDMvUUvuPJSnY1HzTbdKAVtHvSxvj7EZTSLTVYDoixvihFR5W",
  "key6": "59LhVGnLtK6QWyt3HZLj6xkFBGkJG8NhtjeTkcNi4KzaR4qj3uMpDuwxBTn2Az6NkSY76VZUUdeUqyTRmVJiDPjX",
  "key7": "3PM6v9tE8ojJak3ehNQW1JoFbVtWVK5VYyHZ4S7FPmsEiSgDogPjz9vTcVVMUbXWDji8EYspBb5L8ktvQd831kkZ",
  "key8": "3GwCemBz1JHyHKa44cXMoU4XY51rSgzS3VhJCyBMW2x58SFU7REeaUfcXR9Rf6ufEjh6B7y4VmGHFYbqd7JPHStJ",
  "key9": "ivg1pnrujuuHQutvZsQK4tfVSB6jTpPeeEaynvqoWWPUyp8DRRkab4VrC2ezJ3M4FyWywL8jhQRm3ujJMmac4Dg",
  "key10": "2WQmbBufTKJYJwVoTz6NzA8zZmXfcjuXuyC1DqW6RzviiJTKLuBZ9C79jSFga7C6aNzNom9WfhcXZULSar9KAYPe",
  "key11": "2TLmLvzBUAtBWESMaDFnf597rhvPoJ6GHxFZ8FNXFoXi1fRak5FQSV3gAsjmov4GKAjUU5Ngb7pzsFtmHjhTD8s2",
  "key12": "XXt3NK3yeMabSJfPs5E6oF2a8G9YK6QFYQZRzq3TJGyQsufSfw3vVF4chCZMYY63NuLu6vWSfj2sgc6krsL7JtL",
  "key13": "2oVpMnGp6BwJFWPm51rCun8ES3QVpdPmNxwm3TtdNddriBZQV8c7MnQv7wfoWZoXxqX77kCGJe8kXmwm4rZP5Gsb",
  "key14": "FNEUkvKQypSR4f7w739GJGPY1SA7NNcDuYUuPJDun6Yqv58AAq3sfyXhamwskonfjTR78Sc6UZGurRtthrL4QeW",
  "key15": "b5KJTTxeJjdoq2Futpv2TnJ5XMVUUoBKJxsq4gGyyj5VibkNnoaENo9sYkACG4x5YnDLS9RiT25QWT7c4vZQPAk",
  "key16": "448q2LmnhvaYRZcXLQbxicTM97aPEKPoFC5LU4i3PsnkQrCQM5qfcFLLFYw3iMdpEW4Nwc9zeUVPZ8SBidQjtbdj",
  "key17": "54edGPP3cxtQ3QaNZJwNCbDei7kXfqC6aLBJYgLKAwmoRk7yqwnpHL65oyKMYe6QAtULtDxPytGA5sKJPRoiAgn5",
  "key18": "5h6k1G8MPLXt83jErFCd1JAfY31ntHoN8H5NKm3vQSy7d7Lc4qGaP2RmJ7UMWEC4H6bTMs1rVgydFq8AJmP8gmrN",
  "key19": "31HGoaT69CpKjzRE9qQ4AfbKwKhBk8EQ3HkztNGNbt2gyQuuQGArS6ZNQ76id7KEmJba53a4ffbjprz6NNN5HTHQ",
  "key20": "2SU7GHPWKFq833rL9fE9LvMbSh8vonovrJGC3gGPjLFQF5YrieousuKnQvgCAfTL2pD7kdTmvW6aCHdyM8ohixYn",
  "key21": "62gxRGxyDQL3mUsLm4vZktTFSfGc6NiY5rnmh495obWKykdG7nnCY9P4TRxdVec6wwseQBW97iGcg7ETB57FWGG",
  "key22": "5TRm6nEueFEz8WokCF4AdgNKzwgW5NhzaPV5Ku7cpLfUn7Pjwp55hSmA2f7mFYChLJjJQdiU5VW7MuYnFhtzdtQM",
  "key23": "2pc25fstSbHjZARSCjcRwiSn5nC1uAagEC5c3vSGRcZ2GpRgRmtX5mZfNGSBnkuVEfdP4z6Axc9JM8pxN3BrB7zW",
  "key24": "4ytgKuZLbi9bFvQ36c6f488joy7WbgPMqaTWYvQ6WqPHvqgh183g48HAP93rs91zD37gR7nojCeJRNYJHGnnoGzU",
  "key25": "4USk6fyA7BaB56pBFFtKAw5zfLNZFfw1kN65GXJ16Mr8AP8CPpNGMqQ3sDR6DAzgkX3MyRymQehSsSekEyC3iiCD",
  "key26": "3pqL8RWeFgyBVtT57RzkRCS75qF268DM6EgiXBGXtqo74jnbg2gEeXN32VA9TtG7B3Yyburp4iB7XZeLr5vxEmgY",
  "key27": "cy36Qse9CY2HMpMbbDGR9dvE6jFN8uHVnxt1Z5gQs1Kf6eajZYiJqowfpZcZKgdbPkoYrna1sf5bKNHZMfQzJuq",
  "key28": "4tsNBevUSKiwsivy7kSpaEeoMVHChbvwWEoSDguVAcZWsbEyKtHRT1ru1UCJ3hDVog3CmaRHhvm484B6KDCc4Ykt",
  "key29": "27UzubN9RNpQ2TzmS2ubjAmhC2e6nDRZip4BHg65Qe4PH2VruXcxsLLisCXafketypx1cinGZnvBtDZRAXKn8VLG",
  "key30": "2p87jZ7FXWQBGFwzXXCATd6HM3wgMCVY8JTZ3EEuaur31UbQpYmC2vBVCJKyrM4Ru2RoaBTM6jabD9ziQhMx11Qw",
  "key31": "46Y2HqZkkM9vT1eugM6kn5AsAPte5mG6e6NG88ywB41dFdin4nSBiD5n4bf6o9ugpZe93gN9wvvvWSNLv2RTy3UK",
  "key32": "4pvcHdQ3LDmhCRZHjkCHp9xgggkayrmbijbgo8Cpu5VFBJtv5ooeBP4csDPLxrmP3qptnLnifu3NCw8SXf3t3SHg",
  "key33": "36ongpEszr8ojM2LWf1z75oTWt5GX1DpoavB2NnZmTWBXq3DJfMogNaMwrjVvwyAShf7i9eL71xXKrv6dmrhZZb2",
  "key34": "EBBu1Z8FckbuWxRt9P5rcxxW9Fdbm5vxHaCe8UPTHbWn4HiFtpctnXgj6zxTEpAAYs5HpjXM9yYnydjkCEuWq3b",
  "key35": "2Z5H7EPADgZmYUqzz23Uv8cMMe6WZMhgFrEqmGBCkVkCPdrD7zNX4xLG3kKXWbpsr5Agxgqkr41hN6Z1wv62ooYu",
  "key36": "2RAboaYhugZpLUZvdJqKNHgyvMn6ZPU2KyhJNq1QVZGsp1TLxvLS3C9YP1jP54odqNJKjmzXjfcRkDVU7dbJRtBB",
  "key37": "QJgya5bxuvcuPPDptTAnzGitQpAvMCRTm95MVDG97ZVRjdeGNim7htS36RpTbgJQMpPDgpWKiAuuZLR5xVuTLVE",
  "key38": "4NgCLHRA75gwMNGDCaYUbTjTAuByabofb27xP7BQN64URYyQBJVvbj4ybAQ5WGZPUbJqbrHVedAB6H8TPJjf63sU",
  "key39": "QxxLNZ2jGvpJx3JkA5fDWq8sMcpKJyVzvxSCE4WUonH36T4N6kitzu9Uknn8K3zsKJ7xFPogL87c6jkBb7qfPWC",
  "key40": "5g3GaqkKHjFDnJJXbuAWWX4qoyUDtvbG8drSqiZbCZWMwpHL99969sM27XgFVvtTnH5Ks429c5K9eGrr4psg5zWa",
  "key41": "aBay4wLveJzRCWsE5c9KAiwqazusYksuHpQWMGmu2ZgvBN9qxiwAPXUHHWYqJgPxXWauNoyUZffXmePwvgFLWpm",
  "key42": "3fvQGpQLEPHQNDes9p2a4a9xcAvK9pfurpcEDxNxf9XkFYVRP73mbgQjFBuhwX3aDvYN2S2cDUmSHEuiL1qoDaJE",
  "key43": "2JuEKX73zfhtygtaUjPaJMuvARJVdYPU4qTNb3qgE8KQ2EyNknXGdLU6LZA26L9y7Xb1auWGNEuKzHW3V4wfoDf2"
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
