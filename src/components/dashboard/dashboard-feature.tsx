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
    "4qVoBgg93xyp8k1DSLiA42nLWMSYG32hByqKapCg25Cf7yPEMjnwucX1WsyPi1PnYhucioaAj7tbCrCvP9S3Nqh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r4TnnEoypTbNV9N7VE2CRv6XqQey5M6FxF5GvmPm7NuTrzETZoHY2DWh8EY9qATFjdd1ivz4iUe88h8X2AJqWqw",
  "key1": "3Ue8Baca8rE4tPvcELYzazs5xMR6LjzHQ9xAWrvwWiCVSsbPB5Hao8KtgsnXKqMkp7dwztQahNN213ZxGag9PtA7",
  "key2": "5Q23AHzrV8NbKpG2QRofmZZcJ7QXg5w69r28wUgqiPixyKWk8g6FuuCqB793BEGRhQifWrCmmGn6xNpfC9ZT3LiU",
  "key3": "oupeNPK9jn1NP8YcdBsE9XogMLUjE6Y6vjMppYrdwNLxaBwFrmYTbyeLybUq8Fs6yS9szigrWUJLPAcKUHVF8rf",
  "key4": "311U3m6yehFq17HtXJgtigsKUsoFxXPJg8pZ57Xyb1YAze5H7oAzrtiY7vMR2TorLh8X6Ticy2TJiEF9S42LCDnD",
  "key5": "2w81SB9WhoqU89gKGq8shM4RQh9bDyv9NeRBYJzQJviiaA1RAi1kPkbJci35J6mKGbBgNNXPWMRshc9wKq1G81zM",
  "key6": "4mMxsZ6Dvq36QaEsnVCueFBW2A7x4DPSzW1KeVHiMkkqYwWWDti3L9Rdg1hXju8skP2rQZyVxfX4FNrecczRHxso",
  "key7": "2eFhXCE7MpDyrnYA2X9DZtb2E9JFsGPTdpTMvh87oxu89U3EBRgBRbx6HFibs8XQdfdrJxVkkrzUJWSF4z5tktNj",
  "key8": "36t86rRWoU3vYW8P3YDNP4VUD6cfy2YPg2n6u7mW7sRCBZo6kRdHMyo3KzvLguHupnPxubgEkBsr57vGeWGS4xU2",
  "key9": "5UGucgxukWoFAj6GBaK6PcqMyRGzY4JLK6k1CH1DUJCBxEVG2FrGJuUah9iKqdfUWJoVTCRgYokzRkKrZsRuLSqP",
  "key10": "5tEmt3hA52jaWmJNRfoL2ef89YQ3si7CgtHY71yF8f6wbUUyj9ojU9H4uCDPD7ZNnCQ5muUSBExz1DHJTTDGmGxT",
  "key11": "41MtjSih82Sh1eo9aMc1HF5CpPCphPbdgpSETgo1JyUU3mdkw8tAMsEjqwy4zQLRhoRNkgG7C5vjtog1jdrsqGTv",
  "key12": "4GHxgvaawzKmnJbrjf2g7zHjppRFApQrrZ2NDsCEZUzQ4VLzjjTJaPrXWAKJvrkv96iCZd12BVp97MKhHcsiMP6R",
  "key13": "5zPXnoFtN7V1GyrWLy74y1ypTkFddsdNddhAAxuVK6a74nMHN9c56Tzz9VWKiqqkvY56qjKkMU35srAfXtxQMjxc",
  "key14": "2gH5sFkJMh8o2CaBoVC5yFT1hYU1h7AHF2h5honhrx24RxrR2gaEP5SmVYktkif6GJ39DpseVYhaQ1oWfwBWN1cs",
  "key15": "2W5bLoYqBFgZC48Toxt1d5HCZSAT24FS6K3Qo4VnR2a6wmWUQ4URtGrb8ncyF1PNueKqxzP7QfSYKqQ9d9kCjaz8",
  "key16": "5bj27N1u1pnv45iBgRM5cNq8wmSqT9GvUdUJbPkbmVAk1o3gGC3s4gFX7Lo31JZhaqm3xKe34GK7ZWHhevEUStMT",
  "key17": "4tvZrpz8JY3GGCQrU7vecqvorn9aXUEAGXQEAbgpU64Xvqd9Xq1Ni5qh1vbL2DVPjUaruP3pjhGMoYcBVLVxYMyN",
  "key18": "4fXjuseUokQotcNTNNcVKjr836nAiXfrnWr2R2d4wU9ENvXnoXRTwW4FC7V8tbEEq1yD2Tfi2i7dqNLDfAiiArc",
  "key19": "4XPVcTp6DpKYajUvDjPz9t6t9QYQaPbNiWFA8C6q3to9HdCyHFHDyB29Hi4e28v4asL1DKX2krY46ZGh4c7z6YPf",
  "key20": "2VJKciaPNED7JgZD5T557RNKenZHKDABe3ivyjcQL4gEPJQwfs2zZh66cZiLnfhk9Zbg5Uqo9oiar6k1mcsnqNoa",
  "key21": "64DCw8TybydU3mEKYA2E9rpfW8LkTEUZDgpc8b57wkLGiH7W8xyfa3koYAtHajtw44zoAFdtoApDCTe4XKqD3qWP",
  "key22": "5XMixsRxtqjUubvo5fXQQByb9xVWuFcUEfzMqoUhaFNRkuERCnKvZZExZbZjXiyRT6w1horj4omc5h3njSf76b8z",
  "key23": "3NCegakrKkVSdLRpHSnntEvV1VATPFGQdyUq7Sm7YKkYUDfmG17vAWgVLHVFKuGq1Qa3RcZ9YRUU25uQgBfE12dt",
  "key24": "3T6DV7beah4cqzJTSgaNDAjD6uWbyMj444cuB7s8rgpgAJfwoh5MBU7m11gdADkRmjqKE577G8EsJwxfNVDzpe1s",
  "key25": "32cyLz8LSpF59SRiLuDAcnsGbodJr2fwrsKxsqRnd9dGbRLSuTE5y7ifjtyCPUrGm2YD98nAi9ydJ8sUvdEBgZE9",
  "key26": "7MqtfhyqVXroiCG9gSx9JHPo8KgW4LWVpFekhb6nwQj1R4XDjsmGLAMa4fa9oNXSCVDDxXxR6BtwDUQgSN5j4SU",
  "key27": "2RETtiezzt6XAdhLJ1VYtDLrgZ62Hko6KxEmoc8nS3A6AzCe8JM3YcgTtna97r5NZTxzwqc5jwUpqrKTRVu1vZEF",
  "key28": "66g6n6hBW3Pe6kbDAXdohgAKsnRrjs4zbZ4WLrPDyBCahAapVGEAYgQphQCRttoKRWdH6gCmqCELtcxCzqAwPpmx",
  "key29": "3EGEMY6pxHS4PE3YHGzEB6mQVPfSf3YXBpLrDeU1NfaKB6JEcn66XYKeQLdYjpmR6mtj1GhumknmmZJMn5U3UjKS",
  "key30": "cYZPfsqkHy5Kzsfh6yK3ihxou47PUiyH18Xu78NCXb5XnpXAKrhFvDnASRyQvuFv5CJLfs7WoViMiNraQtkDSFv",
  "key31": "2ghTBvBRZj8Xv7s17FHZpe75gaCPjq1qKpxKYFQNMi3JcchmzS2dmxVKLbtXjmgjyXK1unKmXNZqs4AVtYJjkEvY"
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
