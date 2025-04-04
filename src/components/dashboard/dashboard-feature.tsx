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
    "TEGxDJPPHYH9Tfy3ayiqX3ndKZS4g7oUfwswLojwgKRdbqxEmQEbvgB1qWz79ZYpLFNwM4s4Ed7MvtWqjwvGBKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gnCukFBKmL4ydN4e6RAcPmzTmfyvCN3sjfXArCmiMFmcjhapDJ868DeyQcEBDR3fvwTzBKu8VtthKHhXK6K9gCQ",
  "key1": "634dbw4p6StGHMdb87MWWTQ67pxKs6pntpuprKnv5En2UhSZ5Xwzf6dwXgSVai2yVaCHZRVdkbR9Ag8Vywf3aRWV",
  "key2": "2nbTk4hfDxGsUPLjZjaUPiZXREa5PEgPqWeZVVeNiaKpMqh81nKfLa3BKvqFAeUgFw6x6MF6osapvVebq2J5AXbR",
  "key3": "44AiiRsiYFS7tSxJSSE5DmP6PiYEMYub5HapYsmfuLt8qxFUtDDQDkfTuR9fMTpckKbuVrgMPTLT6gvgH7qGXfqp",
  "key4": "3WHByFJ6QRSbNHXV7xh9icyp9ekWhcHVwtLERnXh26sgghz926xKa2fe3cMfMKwpknw5hD26Vv4UkcLqAM9EN2ob",
  "key5": "4e6duH7G8PcwjAmpkUcgwfzpCMNxjfay1HspJXELsvLZGHHUgQr5PL9oSemuFqYenPho8GHCFzdjzw8jPqfdCS7H",
  "key6": "5V8r8amCa7gtNPSpmmKGUB2KDdxd8wKhUQR48wQKjQbSwCoj55779x5tkPxjTuTdeHk9Nr6nLLdpiJCVyca8cuhe",
  "key7": "5THh847VnvzeQCsNnV5HsFW7KpyQRffax53jZSEmiTnTD9E17t9ooNFfdKrBu1BnjKNmb2KR5rySRNVZ7C9kMBsY",
  "key8": "51VPS7RwR7FZb7NmzKCHGRBNoERJJ7ikUPWubB7pni1kuwjmjyAvuWjoBhJiY53mHR59tizWR7BHRdfc9Fv5Ev3y",
  "key9": "58wk9PA2T1eGcCWDNkKxFxuSMakA6uVvTamiki15wSiH5vCuZfMJ6BzZijEm5j9yqqCW4iT575jhSJHgWuR8C4Me",
  "key10": "Ec1Uaj7aAXHPqNDEiwjzWETp9K45Zrbgn3W8zGau6vTJRiFGYTppMfUUMWko3sKyiZTo9xpCbkX5Lgn78U1MfGE",
  "key11": "33uBc3vVF6ZW5Z9egS1SW33SJAs8n6vB4XUrZ27XitDGHDa4ZgfbZUY7bZAmhgrnqZdto1WDf44MZ49Y2u1y7bc4",
  "key12": "WwyYH6EsrafvhVRS1W7cE5zyoYah6Eg4uz87EysgAKS1Ka1zSXGKHRyvxF8YWhqGoCokcac1v1WtgUgT1kni2zr",
  "key13": "4UzF7LTxwap7ysPNrKuU3D6DayRmARJ8tTj7pPPBu6B2tRDr9ZaYnXKN4LDvC3psmAKrPGUVYKMJLCx3BzsgCFh2",
  "key14": "3wHGBsSrzaaVzEoAo5UvvrbNdc6DmbPLSEisjiQuGSjeFV2s3TSgFzqtmo4HhH3R7YT5DJEag2TJ9c9uKGS1Kms8",
  "key15": "5LSuQn16fM1pe5VUTTRsEXWsTSak5i5V5tmczbk1Pv1hdnbvCiWFQuvy4jCQmFvtxDjXy9Tsssbx62qzYWWbkScd",
  "key16": "44jg4zai3bSWMFb3TSBhavhpvutt6L5uPTSpkSNpNKVxx8xZishDpm5yXNxM8MN5icME1GX7429TkWDVLFk3KNTt",
  "key17": "32WMh6YDpr4Jhz1fmLf9smWcgbSvnqJUnMdwxUqehFSGh1pfxHJfFrjtRMc3mNg2SsRGFrJoHLQwrzSz8aZVGgPo",
  "key18": "2p33BKENqHNaEdukNdYzK1msAsdXqozN53Z1hc89xi3FGYu8coRDNudQksHL3TK2SQBA4q6dDZ4vA9xqJsp4xjeD",
  "key19": "3Bfyxmq8Avgp986BYaQV9RqbZYWLkAMVgiP3C8G5Uc8hv3Cy8Sn7eNw8CuAXJtFDhhZtSwNsexaqtbviQdd7MgSX",
  "key20": "2FVMovLQjs6LoxXWqdnX6E6qSvi8DstXPr9ufQBAdEQvdZQXw9hmyD6r8gueFWdrrUREf9jp1XCEZiY9VpBUTeUg",
  "key21": "4QWyDpHFXYbiHXqicJ3385HbuNqXaUAnGmJYyDuNvxRx6cMPGvqLEB8efbnVStyHxSM61k5q2NPKwpogxxhdeiiS",
  "key22": "5gh8caaqEBVKRakbeHc3RXoMugaaMX4buLwtzRR2ohy3VXNSfYCmkGq98AoaiBZ22Y6GG8zEj2ckd6ddzd8LNygQ",
  "key23": "2RmUzY3M1G6rVUPF2y5gyUnLMvMnwaus27MAHTRBQvEvb4JhU7P9vGUR6h4Xm6UvA2tghnMGSjYzMV1TKA2iuubq",
  "key24": "3tsoBNSkmCadC4UoxmgB2cxKUdD8cwrmXt8cw3nYic2BqwYciCoGMxp15bDMKKvggfDrNXm2RCRh8FuMz2ZhkviF",
  "key25": "4Hhr5tCqsPyFLek2GD44DaJDFVnWYeRnAhnXjePD3osvVh2KsaZ56wVLt4y6feTFuBPJud2pQmTQFMM97bnJG7gw",
  "key26": "3NHrJvy56Zt7ufsJjPMhsSxHD9ctfhdWXG9sLTPFArP1x1YVMDCuuLVtXcDy8xUSDVbM2EPWN4BVuugq96L58mub",
  "key27": "5yRR4RZBzDPPX1zyyS4Aww5YhyzaRQpWurpQvSohqdKsucAd1rovSBFDCZWFJLt7LgZego67kAAPbBJtrvVMN3HR",
  "key28": "2Rr2xtje2WJkQuZLzsrQj8aphzXLiPD6kJonmpTh6Sf1XqgZTcwimrajhqQGZFyBXf7qnhz8sGQqUmJwgoFu6UFC",
  "key29": "4XNUrVJr3J8ryWyLk9sbUKkCi7mg99Lfk761yprypVwt1Dd7HDSpgJYt4YmhKa1JmFRcFNxLbTSjYXtD4MbDxiCj",
  "key30": "4Z8ADhrGzw7PaHer9JS6BBH5Pnn1XahDjXtVLvD7zvK5eCfsVqGnVj5ZZxxWAvQEY8pVMrgMNzVwvMZsUjEdruU4",
  "key31": "XnduVP99B73p5i75TQmZyf6oezs8zFFGP7BgWcgCPG1SSf9i8dB2FtBtn7eytCHrvkBgJenempBso5Nn3uGJhjH",
  "key32": "666UEvLMGr9ABtgv3ixrYY7CiAmgz8uxVoEsS5vpB2ZWXhdrwyH2tYm1GkVYuMT5dSrhrbDBsSLpBmdnpZhucvGn",
  "key33": "2veF1jrtTzkiGk6q7VgUPasMB5RAwdFdWFJ2GVmVZoi3hj3t6YBxJcJ7USxMfzkFkNbV3VmLdE6rcgFg8q63BNEg",
  "key34": "3WUPHTGUkhM6EPxNwUBoHDCKkJKjWSTBzzQVLwa9R9cyRSR1Xv3QBL8FoGzS9DUaZ4d9KXWf4MDGUEExYAdd5nvU",
  "key35": "5w2hKJNEQdB2bxtmUov1s8sRTkvqcQ6ZsMcS2hffAKtiJr4AiyVW1RphShpdwVMzmfaSq2uLdj3dya1PYeCBicm3",
  "key36": "38Gs58RaqUVpdxixZeuatvNUy9ygxkVhkfeAUnVASAPXBBmxszxKD5waX3MpAXHppNKMy75afhcfAE4pSRSfPuTT",
  "key37": "5cr23KJza4pWqnKhfQvAsiaxWzZ219Hx4ckX6AxDgeWoB3Awpm38cf2y4P62vv5XodMVVWFFTGhfcjhdviJ3uaSz",
  "key38": "2jBe2iSKfwY7WnA3JynRGzXmTLN6X3DFhNyX76jSq6zkBtzgL9kSriEdAobfQwv2GTCfckDtcCwkJbiiMWKcMpVC",
  "key39": "s2rh3w4JEsd2BxsRoZ46XxLEguCJZXxLcjFmPt3PVfqekt9a269ScvigKk6uNGu5oHVMDtZGWzzjvMBbJTB7ZYD",
  "key40": "2YsC35SJkSnMzQYuQnihcqxpdPCEw1cUC6m4rm5LENvdMh1iGmd6fiKnNPcMEwimdgcPW353oTiJM1PFQcgcM7Xt",
  "key41": "5V3amrPfceU9XNbMsneWNi7PvwYSK9t5nKbAZv56RRTEBixKWhHaBAzW42xpuSuWw9kjFxbbyqDUGNvZVXG7fmZ6",
  "key42": "5KHx9afi4s753eqSadB5trow9157KCjPqPT6RaNmbEXtZM2Ux84xmA5dsAgoeCkLjAaWfmkBjA8N5bip7pGLwfYU",
  "key43": "ryMvapvp8aKr83P81kZQi5SCCCxQ2T5EikTb81cxRkaxFoFkoVwS4cXnRk4oP3xQcKBAodoapSnM9ABzesmQpNH",
  "key44": "67fe925DePV3G1H2CRf5kvwzSzZ3dLaGaCwUBCcUzLnLN6dqP7KSp5yhkSbZm3z2gWohFhaYk1mZtg2abZGja2VX"
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
