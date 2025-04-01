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
    "Es2o55DTkgFjZpoS6DcEvwFXVbTPJn7mNE6igBZ8kiNNMWhfZYZbQx9D4sVXkx4PKrgKVXVSDo2BEf4Jfb3bUL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkCewN3x53JWBBqKpVtmUXnAFtRSLouHseeM5ZmedY1YDRGABdeztRj1ZdngM9byjTPktfpL276LHfTU7VaDp3D",
  "key1": "LLrpTMq9Mgddijp4QYHG6xCpkcWAVCqxSqrw423CuTHjuczZi1Kg6YCd1T4xQS6fGhgwJzQSYamYJQGtzxoE8Qg",
  "key2": "8HoxNv5myToGTGvkjdmPmTuK5hv5RwmTjVj5ZkyXkUv5gzYp1LapnyDBnTrw1qL89ANmzS4Q97fgjHJMDn97Ltg",
  "key3": "3w2waSm1TYskGttwTVjs2cNeJVbaZY8RwupLXRZwbHeqBG3aGnoxngd91LbypzMu5fruAyaUcEySq2X41bUwCz5X",
  "key4": "Dkn16Gga399FNUHUgNi3pmzUjMASo6uKSqsb1jpnmR72xadPWzSgkmMLwVNAT4EkxyTc94k6K99qUVYQmc6fnmC",
  "key5": "4k17rLje9d58p6Dj6mxKMLhUL4ngdd82R2eKfTWKUGz9pPWo8224ZQRZm697ZQZpT1fdJRcxdcuBjba7QKnAW9pi",
  "key6": "2uNRX4LYno1W2VHyDxzit4Fb5xeniV3F1kNKfj8wsTwHQuk3TwsksP2V7DH12hseUixwVmy1fkaxyMwZTCfZTmkk",
  "key7": "48fZTVFfaEnaw8KsxQrjZ8gHVJLqxRrN6NNrfrq3nvw8ZPX7erwtryXR9BFb4UVxYy7qbaGicV7DPCrZzWnbaTKn",
  "key8": "5S6UySaDg5mChmcPf1YRP9XujJkaJRibeCWCjWd24GigiLd2VRmNAJf2bNgornZxAkTwhUwksPZoQgwBTLrVvmGh",
  "key9": "4oSR5yKcs4zZ6gXuNVBHRWzkjbUojTesRQz6WFdYNWytPpzNg7mgYZnpxQuQg175i9uaoAfCc8hiUZJ1hLX99pvo",
  "key10": "22HSYSFbnihhQmL92fnxR6oHcPAWruJgLy9y8P4LDUaCUn252Hn935pWmi8SegUxqP6HR8LHnybqY2PXzwmptWtZ",
  "key11": "5RXuXrY1xKbvHtsPG8eKMxXFQ6Kn6XawTB1T9eXNGidrddisPty9nyw1KRq9NruHM4YsHVujVuLLf7d1B8D45a9h",
  "key12": "4BEuf9oDNr8tMkyVYjPH3C3AjEtFuhyMJJX8zB8NZE2Uk2GhX8CHJHeazBQSP9hbfwnPPPp3S3Fjvq1jrF3CubB9",
  "key13": "2UY9R21AHEyMjGuCHtPvjWst4ipMuYiVdjtrH8NFbGRYeyPiGpBMHGcK8qDa87CAWV4gfAsTnrY5j6hj2eknapaP",
  "key14": "47QtHXjtyjeNZaLWm7FHUwc4tzc5z58kPmFADAGsBkA7QsuxWL6bxoj665ct8qv7s5f8HxXKnyeEQTNR8S4hR8DE",
  "key15": "38sRcWppb7J6jvkm27trPBZxbYMYS1swFX7c44HsnETyvnK2txyBkE5xLx6f5evzDja2FM9YTwQQMh48KTGNx2sR",
  "key16": "2M319h7e2MQ5GhHvv64DE1jwE1nSCScg9Yap7rfT6JtPa5ZoXbxGZujFqzcDTwGjU64AqFHLTpX1zbAjKi39oxRx",
  "key17": "43pdRYKFLSzBdfen9Vi2dpRfVtYRjdskgJ96424qkpb1iXLGUYgfjsj98DEjJtHei2ASiSKqcY9pLKZXU1v2frzT",
  "key18": "3JJ1U45s3wiKanyh56JLJhxmUJoHxprXK8A1WB4ZtuHKKufXsUpw2UEpDzMJytt8ooDwpp36oqRjLo2ti1cXEZf8",
  "key19": "wadz96dx1yC9e2XR9oU2vuEmy6FQLQDnPy31dYJDw6FJjMEShvKGtw98HaJspRGbnJbXDyfdJixJzdDX7ybNw7M",
  "key20": "4dr9zZhSFioYUUNsb8krZm2f5dcVmgh38NSbWu9kaVrLE2sip9kx7jjdfKb8RNjRJ7H7FdmA8NwhoMyVGJjW9Cxu",
  "key21": "3L5c8okPwzWtmfBsGY8ayPweGybcXmk7BRJLce4kh2jNUMXvX7GBdeSc71bY7tB5spYbEgS2Hu87h2cyKwGn7MN8",
  "key22": "4gnNYG6W8AhFhb9XH65ceur3u3s1Dcg1mcqmPdGGvqwYUs3vW1Mdt9aYs11RxGCBriZDP8hFMqGcdpgbbjx4jpxc",
  "key23": "4MRdPTkomDoLem3CvFGqAAGaw7P5521H3MPN9s1yeCRacWErNxPQ23fQXKWx8r81xhoSp9dhUaGQ3q1MqHUXVbU7",
  "key24": "3F7qu1JUECKBfLQmZVsNHUPaKaZzkZ1G58MTWakhLRNeC35pqpPjVAykuhQFnyBpRJHYqBtwCmzx9VtN2V4DbQ9U",
  "key25": "5eejGdVTt2wcrXAnpBqMEkPyTkQzPJ21URmpuayXPBkhkdHukkLNm37gyunwgQB6792u8Heho1sWTryeWAm8kNmu",
  "key26": "2Lx3mvt8rWJPa1GKB5PpuYwaCbiXhCJETqfvAsN5RwmTqyCJP4MwDLzB1naNKUVA9rtc1ZCeSvbfUdNkuVoe7uhT",
  "key27": "123TJhNh7QLtXJv3TXkf5iEzYBTQNvfoddugddvrtRn2vc6R4k7WHrhT4mCF7mt8YrEKL6vjFAhg2uRg73gFcE1W",
  "key28": "35QmBk3UYZkxaULc1K5bgE6PnSaRYUuiMv1k6aiRLgD5pDSfrwvrBPFSQZ1jb7923R9SXyiHpxWZ52zLevpWZPWd",
  "key29": "32Ggt2Lp3EZ4itGpFtwi7NrhFuMyK2BSE8Zj8HfTjWjGqqE9fhrUBxBG43vxBzkcpnJVWrhKU4vH5SWiusak6u2X",
  "key30": "UWuHBUnxFwvBnYkG2F9BXLrFaS6k9vdvEG7H7E2TMpDL77rxXgDyaaH8LkDYMuXUNCQgPq7QJnGKKkhpG3X5Fb8",
  "key31": "2gp3c6zG6C4WaDGHieFEnEkjkcVwo2AUvQpAidudZjRao94dmfRtbexS9KdjeU857yqMis7JYXG8sLoYNGt3RxE1"
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
