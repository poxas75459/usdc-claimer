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
    "4kVByZWsuS8THgy5v9JtNubSCZGfwRrohRES81TLSmwGJXVrGpnD46oLdBLGFfyLR2oFxz6FiVWUzUiLpfuatRsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hKw67wjkm6naMsUfv87a3MNpSoyVZbPVE2k7NAXDdrHPPzoLTzqqEp587rJW5VCpCuhoAsRxs3LhKLJBoZGBCF",
  "key1": "45b82G9tvNfj26uWkTdToDKjMcuyiJ5Bj428q5g3XcmmDhCeMXwZ5zRLKGEgJKCYmpuED5pRdYzBwuguBPDxmiYo",
  "key2": "3J8o4j6ZTUQeKzPxWvzVdYXFKmzqZCjKJZHask5Zu9aJFpfnTVcmxA8hZoCV9dCpM2kTJ5mSmNo7nawffDkG8VVM",
  "key3": "kzuk8E9VoyaW2bNEZo7EUq9nzcpvyDMp2KY9R58fphbn9qVkbYweBEHGDnahzbrpV58KBmiNa22ZGQc1PTHgmrz",
  "key4": "2wDP6gPL5k4tLXGwBke62cyiWZptKKGF4aXdRLBwaN3BCjUnN55jb77L1jwSTdZ2qjrVeUhAbkiofbvvtyTG7Dy4",
  "key5": "3j4QsShicu7jKNMpJCSgRgqfKUFTcMN8RYerdUnKb993bK2wRNpNHSeW57DmevuZcKiMqntESYz8ZLpZA5Lyn49N",
  "key6": "2K9tEcxCeqcxRsxrdQn9DmXqRDs9iVf4WpgX8WwBhintwZjVkhX6teWfEmbFD3Qj2KLWL6HLxYe1217fsw8RuHxC",
  "key7": "2gDdotCCK9nUSDCbDDJhv4bap2AMAoeNiiw6dbmreqWph4bpQLiUc2j7TbTYebbphjUEM1zetRFCYT9XXQWq3soj",
  "key8": "4knDCSpS4dmuFvZjsEdJLjkvLiPCtrcrhJjxgTUgf5q1zZwUPYt3aB2BDKXdNUQbWVoA3fmsoM1GRaN6KKWAgpEV",
  "key9": "2Q5XDixw9UcnikUNZ2kvZnrfUqTdjawJKmtJvdbXrCtU8ink3uQTh8etQRJBXhoNxrAkFeNVAaKGAWmeyLxxCZbK",
  "key10": "GxaTnDajDzeejChCyvn99o6UjXEsc53hmRwBP6MV4vYK88S8LPuyFMo19S9ZAUyi9aEYDuDSz8AJD7vuPZGCqzH",
  "key11": "3igRJQipbY7sJgekdhFbNXTH7b9uQvEbwMRSKKjJwSDT3hR9uTHXuQVNCB54Tdc5QANsC68tvu41pyREW9YdgFs7",
  "key12": "34Q6QDuooL3J8cyVugCtv2auR6s8ii7tyEHaGPxqgfn7QBbMT6CXmUTUQcWRk4iPAJYRaAqusHSSpz4TkHidrL6K",
  "key13": "5i6TcxxbXZXhZMWbQG7cxZhGXChJeApLFebYCt4c2wVtC8i5sAHg183K3Qsyk87C37Zh782MuekFtsTF8mM3YAuZ",
  "key14": "27erP1Ljtdwdbk7pXy1yvVMtmy1WGX6fLmfN8GFBBohWid4eBSX6sGrSfBvCCjpw38PZaetYAV633EM88N5qwQvX",
  "key15": "22zdhanLdpPxHkaNMS6RFk9KLodQZkYsHR3q13K8FTjaB9LLLiJJaYQ7iAd1qrptkUAzBsgtdN79aW1eKuNLzzk4",
  "key16": "2TDeoAFNgYY8y8wE2jvKoSh7QacSdZ14aWVtdRyUwLWsNjkVpSN2HhRtPf2VaLXvmJACaA5r4P62jRRv8kGGwXjz",
  "key17": "5yG3aYU32fHqg1HVVGfaKyoyefFtvmiU68EU5JfMzcWqU5soaUNtRPmBN8KoydVe6nB3q6rpeYuH7tgQqJgwUvgJ",
  "key18": "57qY9LmD5hFNMqfcuvUFvxvAXBwqBEdsWVL6KePyYC5PG6GxvNsgmotX9PW9sKteEkdrrserAn84jd7v7EqajKaB",
  "key19": "57671PSeaEJRuYWJgAMZxg1en7tJkZUcGUjSPzW8iLLrV5bhGJwjX4PGxCgPxNWMtsRXFT1U4Sz7CEsY82D4sEMY",
  "key20": "teNYGp4Ft7HetDro6djhko5rpD7X6yD5sqfK7WE3snFmdmwApma38XQcJZEbBXXG1Z6NGKR2WggLgNkSNZ2jkQ8",
  "key21": "2sWX8wcP3osa66sjATB4XGVwdksZ3MgLAx9i6cy9ZPdMJM5Tpu1dCYcaFcqwDijQGs5xPynAMszmY5SvXxaHQM74",
  "key22": "5MevEQAFJ4bVUeJ3u9USErSP7Df8nhJKijGckAJW7sxr7jiuH3J8FsTTmigjnCbSNhivLpQZryrzrWm4qSkCgfzk",
  "key23": "5AQujjq4j8pWm2b5qCTmA35wjHH3vPWA8pHkva6jsEjfjdJf1g31xVzaDBmBTnAQ6XvG3AuAab2HfD38bfMgpAFM",
  "key24": "59kUdTGDB8bytp1cNbzgDcAPF3g3iSPkdoBCtkSprG2vJwQZwv1JD1yKTy2Nt48M3TZ9JN5LCUCQgcyRLP4gBksT",
  "key25": "4xSXXq7jjL7HFQ994Mur9BH6RWgqx24vdDzqrB4dMKXjURuPJNW1Z1Q7dvYhKvSdYeefKnxmEQ5n9shHRtRRegX2",
  "key26": "35WamQwp4VZPa7HnReCoaP8PDiWmcE7udFL1gJnk63VzMYGMgJsB3aGP19YtTyT55AzyQzbSAwNnRUVoda2PtoPd",
  "key27": "29fZ3T2KhigLNPHCk2zg2kMN7na1DCPUxiYRY7D1HVMyz53uXuy329xXpeuALMFtNSJLUKYjnG5airRAzXKveMFk",
  "key28": "jnNJFbUwBc6h9RNHdAaLPzaoWZehRq1PBYwEoHg1fPef4Jc9spcGYGhXHMm8SxasBK1Pi1QE3HcrjVRZiuL9Rvh",
  "key29": "5b46u2cpD4RuewVKz8JNvgLHS6VKNQ6xGzCqViHwP75rDusYP1yvkt9yR4hJaTZx4xiQSzy4TLcFiYrPstktrdNi",
  "key30": "5EBUbV6u94ezo7PHyGaMsrjB11a9uq3icX8oxi5a6QRZeSZLJ2KGhxwhXWrbggkzsD9psQmFRpA7oCWVFiKcT4mn",
  "key31": "51ZTpEBofxZebpUemDD7pmg5TxsJApKWbR1NvQjqhVGWBc8nr6UE9fTz2usMnF8gbJL9njXFDfEzCoPiZpEc7KQC",
  "key32": "3ndHJLXvfGwpxYsY43gJq1RV4GmvLuHnHF7oRNBWkxw5tmnTKoRnojahaV3VFJY3H3vrmyUHQJskLWZYx4raRuw9",
  "key33": "3ZaFBQRoUGk5fDRTMYKS2rqPHVJcutowtdztWofmxYUM7KMX9GkmptvSVN2BqfDKRWRA9ePvKHuAw7gzmuvGszoc",
  "key34": "3za8hj1smDgexGBaXpDq1yiptEZbqaDuPeF7okfNpEmJ8PpYjXMF7s7ZS6NnMVY1sq6ahcNjbN1F7JcN83u35oVC",
  "key35": "2u2VtDDg9fjuj5BoKbsGsoHayvqeDbbHXC9oqbkKuU6VoDGjqDRnv8yurWimx1R9U5gPTv2Rvi2X1vWL3327Pkxx",
  "key36": "3Lxfr18xtjEgW5QDRGBvsiSc13e3Jtz71FNkaqyALjoFG1Vpyu1WraLeadmq3CxSHGDj8YdVgvYwfx9U54mWXNni",
  "key37": "3Gzc9Evas6bxrotKoNg4RmFeWs8ojJjivA7VNbKXgZpT2JfUzUtjtx2Rrq2oNAfC5zhS7zub3hQjyrwaKutme3GU",
  "key38": "57DqgRnNYN87SfcVuqkhx5avAbZHCkWm2AmDvWHWc9VLdchwhC72RtUSEVvsPkTqmZ28EaUMm9Z5N5bZeGcPdkbQ",
  "key39": "ddmTTtfd6PUcoJCjqxz7AGwdM2Wu97tSYWwr4rVsQV5FoaT1mazr4EtZh3u2dUN2DLCBm9gXMyHsQJjiCrQ3gCS"
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
