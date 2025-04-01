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
    "4FgdFMkj3emnTdTnezDDFe4MqgvhdRJcZJdgDw3uZ4ZA78akFTjUmK8U7AMpeLxnStbSALEqrhSaZTBEgaMjE9cb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9y8idQ6xCSbWGLepsotFnDDb8LiE4kDAUVdBVgCLNS6tUonnWMCtuCTnBpyxqfvtd25X6YUJZKkDrkfcgcPdDq",
  "key1": "64yduLTQ2VcinFJwrxosooyQSZh1NJDg5axu8iBSoRiGguze35BRyoBUx78xfhj2d6VBonDZq7cC83tsUUe5iWxs",
  "key2": "2uxi9h47mD4QTuJzpGtVZXwnhEfmdqNcWsu1W1CGUnd3GZDxDdRcHpXxu3C2GbGMj3icFVYfnMt51bL6XM3Bja5L",
  "key3": "3dUzrF2wDoS5PWcoQsFChdsqMg4RzoT9p4X9MtbQ3JhW1mHXNfVDHFyaMcspgnzfYxKAUynFptcx7mfAKq2Kc6ZR",
  "key4": "fnJoVut5LRkUaBpxfyumyGqTBi9GjX7ZE1MKN73wn2iCXmFqTVx446Gvfoom2xCxeR6jZ2a1KNdX1FvaJJ2SxSf",
  "key5": "35A1MYAfS47LKm23DdvbWveE2uxiM3NPMa7ZW4UhU5AVdyMqX7VTDB87TAKWvfr3m4zvoWoZREPMC78X84LGiPPN",
  "key6": "28mQv842Tui3XQomnkdRbhokakU6z1UTqEuWJBAkqgB2E5N8AiRAM5XuYnfQKqsEkFTXbFaE6K8JEkzX19i7eeSB",
  "key7": "59p8a3NmM4KuVun5rnZ5QQ4KFkRWaesrqaFRj3gUX2eSE613dDvfX326GpuWdeRS6zLcbnvFtTYzFH9so5AGZt3P",
  "key8": "3mf6FBbtDMDxUYT5ph8yVzvxq5dMAQirtFvzcTuQNTFZwtxdCMh56AWTZiihW4YAxmxqrxKs7xJHLTQxpWygVU8M",
  "key9": "4KPRxcarhTKoG3x9rDSLGUAzGbbYmoX5XB7QVXZ89cb4VoRSDcDSa6vgyc1SeF15rVwMVnjQEv5dC7uoKiTuJLcU",
  "key10": "3rq5R9wxVsQwJpcYX5sNt4W9dWu4qJJyCj5345bQpMEHYSXHMK2DTiYsDcxmFRCk8JDUdoXBGz5JjrwZUVVdJss9",
  "key11": "5gEQ7e2uK2BS6CbCnF2VHZPWAFvHXqAJ546EAZT71kdeTgQGsntskFn9RbA4CnWEM3Zv87dnRiyALVbQ9jxhzTGe",
  "key12": "3mcUK8iNR6MutXXa7Ju6SLuttuxkC2HH14nWVWQ9Y7YKvQBG9G5KLezNfY7VGSfT3vBqdzuC3wiA785fh6FbgrE7",
  "key13": "rdnkRgyzaZQefvLPnGGNJATf1yYXkQV4gAS1cxfs9sfJ62FTN6RuKv6pZbvvZFQtK4ufEGeNoyRVXFiUW82hGwY",
  "key14": "3UGD1pJiNijguSxjik7xGk6RLwFtgqxfJYsC2u4u9hgsHeU4PTsVYyHSdu2DEvwWFy9M6nrQXz42nWEALcVYGExU",
  "key15": "KCute2Jexc9WYhnsFx3audsMxvDtRXVyWwvE1Tr7EmCteZmVCnncaexADM6bzVpmMweeXDEEtHAFg4gFkT5G6uH",
  "key16": "43QpaL1HxqCYFG4QugwyLB28rCpGqizJnZwh9JG62nsSgPsT8wrc1Wkzueic3woij7yxMMq5nDqTY789cA4F8hd3",
  "key17": "5XddMcijTUFDng7q36qos2PRdmBWUbzvJuppKF7X7qQ7nqTLCBqaodKv1PZrNt49NGDjTiUHueWT5TQEotWtorwj",
  "key18": "5KGVDBzHhoaTmvVXEzEdrQwFQg6UmXXMpcfhC6ATimnsUXDqzUQV2NxrEW2XDzy6Q3URGK8StTZQZCFCXdEXWhfh",
  "key19": "79ECe8NbGTNWrSoG37jTWLRttZsoVWCSacb5dm7KnRXZY7H9gMkMsThJim1n34h3robdfU15kH2GCwYMwtKCVBF",
  "key20": "31uUYiYA71s29cZWzBtmRWSKbcgu2cMN4sdSVumPCqtWPE6VBbDUpeMLGjMPUxZhc37WRVkjkNWAPGzVvknFQXPV",
  "key21": "2a2yXuKRYF8xdgipFnSqJ8mhG5YAjVxXMpRxW1FpixktuepeSThw1iRaLTkGuBVUFqX5N7W3M68umvShzxj9PbKR",
  "key22": "4FcrzupsfbgrvauQ1gEvJGnzSLhqZk7m7pWqPVVgf6WUmnM9xpogDR75tJL8QTaiMz5zGSvgNZowa2b6YPiCcEDC",
  "key23": "41n6FfPvnTAq9K4f8E5iGHaVRrJVbw5opKzteEdNvxpKgVc6vdiC88iiwtYp83oo18y4y9AH6TkFFhfHMHQ4euP9",
  "key24": "4Kho2mB8VqntUCdZhdadxhV5FDNePhs6hDPzC7ooDZvcGfoNr2oFU3YJ8qir7yTWuug3QfGwHKMCTTiH3sHs8PGB",
  "key25": "3rZWU7JWjcejPHJbpSpy9qWd9J8NX8ybKLqScQjC3JgV9wrXjQqFBJridi3NFWUsiwU12zdfArLRhN5Qrg8zQ7Hq",
  "key26": "3qJAgwukGqTxa9eGUBu9sH2Y8cfVrpECFxHUUwcknhA1GQoejeJypzT69XAviqJYLzY9rdQ8BPrAApks1dpW6p2n",
  "key27": "595TmM57mefdqrE6Yb2Qa1gWLCLPZpfdf14wHjz1zRRX2dzVysoeAnDrDpVd43XmiSkqY29RuGpTKnC9Rz1Ew5G2",
  "key28": "3qBz3SVrQytViMJHLvTpMrGzyMZwbAv6PvygXYeryrDvN3Lm5taYjhtLDHW8TbYTJxVi1qWekmd83XRgM3kVJJwv",
  "key29": "qgYZPfwtr9ebeLE7adjruVKyaGdKGxYPeBuM8ziqCNBfqGaGssesyndNReLT6GKFTVdqenHmjhAUAC2mJsm67sw",
  "key30": "2XfHJn7WaN9NTAkxx2KdqRmhhaE9WNxcM1Vc6rDqfiCYFzjfRpHtEnJK9QSWozAQvCdRLWxy2xB4wFLn1W3rnddH",
  "key31": "3zCwx1ffwHqZNJXYQ53t3NNt1wXYV4xyxiKzcydJYEJNt53HVfW3fuY7nz4PYc7tgJPSevGvfRn6GniKGxh3ZzD",
  "key32": "4SdTgDLoyvAS8dzQhikWreQbqcmpCNpGXFFSc9vXpMYBP5Wf5McdMFGtZyYmgXY6kSWkAb5P2x3yahAkTHbJcZ6u",
  "key33": "46b4MdvyhSwJANT2oiPwAQhE8mnWLdmsJuwXWyoUoCbpUV1V7dFqAvJktB9Z632W9ck1fREDACGxE4pH9yXNzMSb",
  "key34": "57JcvmAWYMzygCWTB85N4ZsJVkyoULRMoskNJUp9TdasnN5pDHmqiraAmJcBYJjo5aRJoM2XWnS9AqthSRxsTYBB",
  "key35": "x6KAGPxMvJvqdznkKu3Dk68usoZAJCykCPG1MvmE3ZoK1SaDs74C5L1NqxGNPTY5ZecS2TY9fAz6BGyBN3hBHSA",
  "key36": "3JhyuykBqsy3EtRTycXTeBJuxB8GUSv9akMSmrhMhwYrPowd69qWa2G5ugq7pEUM2Esv3tPw5yvkBCmFCoWog4T9",
  "key37": "LDFy1xTdD5rxrBMGMwW4SYviaWqFrgFtqbXhKJGtRLxBAucrtCGF6Na97kuGVr5HqKqv1H1YbXNoBWBL5B9hUEE",
  "key38": "3n6cehRvHJcTCedkuBoEFK5qyCUxPHzcpHKGoDFq45seBJ5fNiAY3r5npdfd4Tz8uggpQpzryLzA7E2zvSaZ9BBu",
  "key39": "25DCdTVZHJAQbjJ9NfYCTkwgK58QkX6iQAU76AoHaAbEhQ65JDnruLgugkn36dmTLMrP38ocBagcYvKb7eZoYXfX",
  "key40": "3TvLUX8yAJTjjxHT5Y6W7DtWBgc1LNnvyRVmL58SNJAiNYhR2WPNhTiBVbQ4UkzVYeKoP7KebSB46TNnJQR6eGkS",
  "key41": "Eea27xgPUzz4hFTWQbeZF4F5oVe9RUJtVEWKEGXQgo2tdjVqFb9HPURVVUrn7S71UsA3hQQvDvuLEHzL5vHTcWw",
  "key42": "4iXgwtqoJmnqXKLCBYvKYLosyv12syo7yKTiAeJznxXhVVA8Y9iWT97rkSFdqMvLxukqiWBVxP3JWaW6ctRXHecN",
  "key43": "4ysCUjSsYVA8Q9AYrSj53vKPX72ezzPcTvhnLw4wED5DZWbhHfvqBD7tKExbxWN6KpAc8gVC9QfRPNUdkcHWNQHy",
  "key44": "3Rtmrfi6HhNPSph9yKg4RzFWLEcMcCbP5YosKod4AcNCFH6C5mJqbMdvwyRYd8r2cgfxsb2aYFoEK711KFNRAGqq",
  "key45": "4Am3YBT4Phcxhmp2uAChnuNmLXnvb6jhNtBWvvGYeRvirgrbCPBkVJfnK4efToyNaU94K45kRbkGpsXergTa2t79"
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
