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
    "5BHTPvZiPVaB2GsMWHxioHcxHfUSBZk4Mqu5MHM4oK11AtK9bcsbwCqtTtrwfvomvnodGZCfF3HLVE8YbgXdpU7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfnTrsx82QKta4yXSJd7PRViv2zNeaFt4bmhVRLzmjAA3K2bKUhUVxEtC3mfNibZiREVH9vkn2UQcUBVcTWnvHy",
  "key1": "22NE6VqHzSLYkWKcbJ7fHBXUUvZCGamExAgXkJvCEW8MKtWmzSaz2AqTSrEavVYoVLGhhW91UD6jYdVfEfnrHXEq",
  "key2": "yNJ5mYq761YCyLeo5zPADxuTW8pNPbwZZtg3cwHVYK98ByczgdbAtUvB5YSgsGQVyf3MBrCTznYpcRWKZxgstkf",
  "key3": "2Ed99GdUYxpRCse8HAYBzDspoyc4J3Jzs7S433tkLUyVP4htBXg3F4Y1B8UKoAYbX9NQm893N1QwR2FX9mdBjAv4",
  "key4": "4QdGiXfuZ5BxwX6mAzkVZPSWNKLRtAZzqFom7pGjaZvb4RhbWipMsFYoh7x13hENZm8kfuokZpvKzXkGpPdAFnMA",
  "key5": "5nFLmX47FDCUNVf3QMeGC7YeXFq8G7ND5k6tBhuAYVMccZrQr33YXhTVzBAqPoxiJv7g9dXUWy2U8PoLkLNzDxZu",
  "key6": "3sSj1nEUxEZMEUyeHvctfAFDAShwNyARH1CNVJEtayX2ZLcj6FMLRR1EnaKyV7T7Z5rodUX3nHC6ihAAcst7kTXr",
  "key7": "5WN5KF5EcrxUuVcB3qZmi7SxndTwo1JBhqNtYcGhBhMCHTtYvPZP2XxLNaS1ptG2mC84sM8ZiRpX7cKYsMa7wU84",
  "key8": "2uac8NKzVyz7u489efhAmcvwnxP6uDCkV2cBu5ZV4PFRR7rh3PGLfuwc8s6cK9bFHtoi5LZeQiX5YTToGemHhLeC",
  "key9": "4gFHNQiR7YwX6SCmqdGvywjcRwE3tisvmq6HbHjRLGqnaTZrPFDNagkD69cTGvSq7N6qAMjAVsz44kS7CkQkmA5K",
  "key10": "2pdTQ2y8LBsqh4b9JxbcQvG3FCRoMxpSFmE74VN8Pn2Hy2gyarDPNRbzynpMTgMgfHghHyi2j57f1rvM12Nbnd3b",
  "key11": "4nBrUKq83pUev5b1ga5M6Yk7oH5zZo6BqyVXSsQRMnk7joTteDnYLBwbXPkxeFwECv2Mr5XtU7N81WDBY94AzqPJ",
  "key12": "2rptpqho8LW1CgLUxF3pegNwDu9B17EuUH4DaHa6BJTcKgBZCEayPCPfL1CRVQUrdnuEQ3vCNAKmpnjciDVtBV1S",
  "key13": "X5syyHBgAHj4rm3QU6x9dK2pk1xn8bsJgfnYJfELdquJmP1tQqwEhxRUid2tjsKUf2LCKqW6nE5daPh2cnwKBAi",
  "key14": "66j6hmG63t9K6uuAyz7vV2DWgbrNVgNRohAnvYxPzFfo1FBookUYZCmViptkhxFVRPaMGXVBoiHaJzzBMHgWZ9p",
  "key15": "3a8ycVeJY4GGHCPX9ZYJUHv7SGf5PYEBLeqvo7n6zaCGoEkVs4qBR9GfGuLSqTAtLTQVH76c9drCaGAafsAUC4Kh",
  "key16": "5qdXxF7VDRz3NWvH576b4kxbKnArxRYsjYsn2nVGErFLnUshCRyTirq56FCSMRntRMEQ99uQZnSAVzhZfweKwLM8",
  "key17": "5eEcQYPwJn9gGfJVmWrtSoSFzB67g7ywCTcarUEimYX3Uyn4zucjPRnLPUXF5mnqBaNSKhdqwL1K1AWnC1QhkAj5",
  "key18": "3mi6CJy9bGfEy8DcZgiS1RogSzD6ksWRx5GeuFdj6xfZ8jgdcFFgM3wFmfTD3EqoMppoasMZVdjSwFZBEegWSHRP",
  "key19": "2psWHpPn2ZH9AVKF1E5KbJ18uBVzw99Hfcqy7wZYUZ2Gk82NVxu2qgMVt7fK3AqjiXnic8QdY1Dk5kDhy9Dqq4Fn",
  "key20": "37GGTRLx18Dd1WuEFrfuzfsLzQHvwN3L7dBgPB9zWV6d777vKmssZooiAT9GCSJS8P5cGaMoRBhR4Dg8g4bELngs",
  "key21": "2CGA6BEjY2x3wVY2A28rXgZsi7NtLuBFccPdTpe4taSj5m932xvuBWZ15HX5efXz1oSxA6r2ZgiKLGk7YdVRSif",
  "key22": "2mpDKncAw4u6WLwyt2jFKR8zSg8RqT8ptSen5ZrjAob1dcHwNi1TtNydka2PdRv4m7Big6SHJwpJsKpN9CR2PQt3",
  "key23": "37RhuWytvTrJNo6evaf9RHTabJ9KkbTXhqvVHaVdvhfdcJPGgL1S6X4DBhXX2eqSURf14kBJchvCvPGfxMqbHE8b",
  "key24": "2PwXBw2Laj2TFWW1WYKZWGEEDhbBqUHdVffxjLm84xQd6829doFUMyKxnCdcMiXZ6dL8rZBB6BxZNJBj8f7NJXjs",
  "key25": "4p4sDnQni4VJ1DDcqhf556MKvy9awU6FpUqGjVMz3HpNaQbv8PqLA8MRyS6XeeFExXsTLd7NPgad9TWSirZjGZGf",
  "key26": "2dmEJQhjWzj87Tftme3rqgMFiETshzq59MVJr7jGvxgULcEFNtrC6MZsHgfS84kvXKFyY8jtz7FF6SYPkchMPbBe",
  "key27": "3k2e3YWLmFuwY3UR6FnCbwYzvA3FRcjNEiAXBgjnDd7xutQdzpRGYjq1sFAEXz6UqpN4VxRzSTLBSM7tNDYUWSHA",
  "key28": "RHyeDRKkhuVX2i2MrerjFzVmg3c7wC9NtAgZYfqWAdoB8sHGWyeZTaZVwxy5S35zMarro1d9Ft7wxLkxcWo7oau",
  "key29": "5hemsd918EvMFNE6Gca8D44pCdgngxgqseATqqbp3X2JFpJSQBxaFoSWsMYvPzvxXbu66Ga5dSWcByS4HUbahc3",
  "key30": "39JpybEHMJqrtytaihvSaiqU5QxNApjGwcH7ixGfLrJdas9oNGRfFhcLYBTHQrX77i2rxbdsDHxgP6XdcCYgamzM",
  "key31": "4yjrXrDNdt1Vhex38TDZsRw6zic1nY8BEsNcMnY72jjVt3QYW8U4dc5zAzcA6s1ABC23vDDWKn4y9P66iPmCNZ4i",
  "key32": "3fZH7oWy6iqFBdTE9DYR7Sa3Tfra3NX1H3mtS8aSsGDhV7mDmPLULtypHJY5g5aeyyt2389vh1Lw4M3bST453ys4",
  "key33": "h7CwWcjik2DVFKzsCSBhAnzUqLkK4htPFvJRZXt9SFGQAtJAt8qKxSbYUGsBmpgWstPFv1mujJb3zHWau67YXdu",
  "key34": "m3Fgz6wqoH4bbUn2QjsmB9rACCNDoGWJGfQUSRufTHKWE2mdK31zME9Bbt9uezZj393iwepHrKJVo5Ao674P2FD",
  "key35": "5RFqJxc5rGnLdnBipLhDjGQQkidyYd8mjghjQqWKBPe2vCc3j3Cx2GcPnrRtQyvRgbUuu7SDZAajxnRRq1CozKcr",
  "key36": "63D4egGT2ULwruRFRYYGZv6EFCnB6BuXeekwDNwJYoVYvkKZqCVqZqAGqrcDYC1xzQVfs5WAPKoPQkVoiQZpyKKy",
  "key37": "eLepZMeD1xKJ6Zkh737jrYudrNWLPGJRfAAGUdsQmDMRZaprSkNGs5HMfSU5aUcLwo99YWts3bQQ8Jrb3zSJG26",
  "key38": "34Gv37i3f1ZdTNgEog5HRaofsAEPxpFBhp9dKecy6QgyRmLk6B5bX1xtG4uhnrAC8moLg8S2wRS7uaEcSsREVZYw",
  "key39": "2xFuzS4GXTEekjk1vSrnHeZyDWwTmSFddmtX5jDYmQzgDyJo3mvASzBmrkEuNZTHS9ZcbPrwhKthDobg9Hip9Sii",
  "key40": "4KEhDMnMrnaQy1cKSS4i4YHiFkF2PXWxZb1G86DVAaMA8Gm2YNEJScatYCTvzukZfKrL2tL7canEzivRP9nDC7oB",
  "key41": "6WV6eAGKRwHgUPQxhr9yeynVcDPjVvJR19hNomLgjs3j4UFtAhNmrH1Vs7Jmv3wvixU4XDVcKjB3ryF6ct9E4Xo",
  "key42": "59WJxZ697mDicro3oqmN2JB2xW9LSGgRPwTMcpo21MWCWVzoxnwhpuPut18yW3GvbmrRUTh63JRMFRtQ6qeSvhvZ",
  "key43": "3ePWukFhCXDZeWX1TTNz7qeFtTKu1p5CReNirDrsMzkBhcUArpFcpLvMf6aRoqjjHc3XYpd1heUTe1FnzAj9Uc1v",
  "key44": "2vL1iN8io2RmejJC4Qw3Q3jUNdFwJo36NGB11PJc1hyvpE7GHTgtyKL3JhX4m7Hd4mAHSUqEfMAV26qWGChuzKKx"
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
