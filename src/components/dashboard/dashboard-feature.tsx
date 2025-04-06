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
    "3cBc1MM5zPgdosTuAAVTSqLP8LyhpPFEMgqHhCddCLzULQ7Lk732HYjJZhEih5Ps3T2bqMkR9gjrFD45iJWhmg9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tV3gHUKmVGmSjKoGyj8peBemg8zNi3w6819B6Xt8tzfh7DGkJAKzWiY7YdNUio8TBQwdXWtMnWz5JMW3mjasufy",
  "key1": "3ANQPvUU9yXSRJR93KBnyYMStWDdTbbSoMrsLVzEsZh2FrrJrNELcauGAyog9MSykoSynFxhjUe35troNxxYayMF",
  "key2": "2roUr21653nqemQj9hpBbn9W5WVaJYdhga4NnhB2o82pxNBAdX1TsM1Yc1ivr3sHfuySi5MLUyWc95ewf5U4aHaU",
  "key3": "4qcLKtMEt3jQxgs3xhtPNFsLfm6xCfiDEXWR184d1Xh6HG8v1o75rrNQc6ZGLzJNyZtcujSpN24RD6Xf6xBekerD",
  "key4": "4BxvDTvhkwGeKU9Nc71PpSKkXjdJpvbwsNApd3ceVX4923DZtiE3rvLNVXWXPY8NPX6JTEFdYeVxWpw8Go4pC7fc",
  "key5": "4natsFGe5Djtbj9bQUqwrEhqS6Ls3wrN64gyQRmLKJHPuD7Eb1WDp2hDGKY5eweTJcbaKMFcQdk9bKLVWdLA4Mg6",
  "key6": "5HN4wPUuDoXG1hQ743hiM2gUiPiTk7xoA3WJzpa6diKySD8skY5Kb1wdgLuMcPgNDoV1Jy6KoWSx9XYvFHu4jBbr",
  "key7": "3se2J1y2rnQx9kBdTUrZ9VQ4gYSwst3VAQ8MA7iNNNUNAeenx1tvezoVo7zYnjRduwq9LwPHDwwaPopC2BASvGCN",
  "key8": "3ehPy1DvdPg6JRPebDRoHHncD7b4KWswvcXw9cQy7hrvg5pDt6HnNeQRGXuqfs7iTHNtJPXSxn2iRVnknnxQAsd2",
  "key9": "2pQ9YghQrBNeZJib9pyhBt6Z86b9b3pYzdCG4bQzBuh7hqXmh1B5yyLEQFvzaK3tyNhJh5B5PknAakGVeZkjVV8j",
  "key10": "5aU73KEwNBVTLFDxHa5NALGyN6PuGJ51FYJYAjCex9CJ2iDnPsvpgCPVB8o7YxxnUDt9DD3ki9mpBiCTjQjC9kuF",
  "key11": "4k3mGNSQq2fBXFyMcTyJd3wztGqYDVqEYPb44LPRhu3orkj93zCqmbFpmtvKbqz6SZPdMQbqusS3NBaNipLpPVER",
  "key12": "3peH7CyDeXybwGfE23qrHhWCFGgNjcPHV2RrnGnGLB2CMGeCj7ajQRhew7PaJA2f2qExVAL1LcUszjkaMGDfSZcM",
  "key13": "5SRa9Nb26irgjm1Bx8z9kNmnguBig3rfUdWGu4AENFRgFbUCVwQ8PUpqEtfBLrfUgSKdnMgUux1wYNTsFFSdxQtE",
  "key14": "3kQWE1qTqgVcNnd1Ur1rXCVEP24vLR4WbC25uUAYxurQ4iBfpYyhKY93ocahGP2QTweZRfkd93o6JYFgiDGfR7eE",
  "key15": "4cWavY9gaq3EBwS6EY3EC1aEf29Q23znSfT6FjQQs2omCkdkqdCiKsu1hDuf5AHfBpFomhHkeu7h6D6dEBxmtcfp",
  "key16": "3QLnGh9tF6b91P2JjNaJnEX6M8jox446SuTs2jRkuh4gFtFivizycge3nSM1b4zHKsJZKQrWiDK1kptixknhkcSz",
  "key17": "4szkukooG2vdi72oUz5TFGxETgZKvziWEV4Ao2ui2yNw4tfK3xvVXmJTy82upv3H35Do6XY9Htd8zwZK6iPSCnFR",
  "key18": "62e1iswAQWBTbtP5tJJZdoKni8vGJwPpqTXngpchUmXD5SnLM1ZSEn4MoFHSLzfrvBRw4Mc8xvWLBsUzkoNo1Ppw",
  "key19": "bNgvWVg2aAEtmsTHx5QzWV5GtzkhCYZKsHmmwHAbytBL35mjTbYkAgEvpqKJic7st2UBmGoWmjSJm1LfoDueVk9",
  "key20": "WXUqxNc7qWDMqZkdmPJx6ZD7BRqGsnMjzRxz4G8PVEFa3jG6kzg9GnV419d3n84s51mDr14iiLFbvmVJxLkHCaj",
  "key21": "4rkH6PMP7Xv1SdtY8VewSxpcea8P6nD6DUR5WxTqu8A7QYfNRbMo4Dk7bsGiGbhDnGkhae6D6FthPVSmGg4RxKFK",
  "key22": "52SwZQiNQpNE9A61rcjrpq92j68eUoBVQH2AsbKWk3rDi2VKo6nRz4EeBkABKM1fqSYPaJi5JPeoqZfPVtXuT9KJ",
  "key23": "9utdcLEZsZGYuhuYGt3t7tmtyRrmtxyvsGnNA4vHCkBP7nM3Z1AkCNpFGYSVxvENub7Nh4oCNos4HnmjVcXSHEX",
  "key24": "3sy7b5qdrH27GQy75tnPsqGDqBxwQgWhB1PpL8GZ2vydcfk3atn4XdsVFr2oPeccaWwrvaaTmzRaZ7dUD5K3iarS",
  "key25": "3w4iJQ9SdecHdoQaV4fZw13pbmvffsaM3yDv16VsqEyXXDvh85TSAkd5xqCPPn9m2aUQkG27Y97fFXbwPxsVD3C5",
  "key26": "z7VTCTesqDDHkJge6GasyjjSteQGrgyZiou6m8ocH51UbmSn175XmZSt8TPDaoKhHLYkhsjFVepDGNf7WMvMors",
  "key27": "54UzK7JXkeRVi6r1qtmA7pJhACc8fzd4yZjQRbwkKERsCHvYEWYJL425TaG3ghMmmVppSGcm3VtVMRWt43uJYVBR",
  "key28": "4tyUq7fKCuqT7xE3k4dAnuca7dz4RWcpULsUkcFUfdHWnVEWCBUg816fJAAVF11G3De7k1C6u3A1JmsZbdNrAHS5",
  "key29": "5rjpZt2vU9myuhxJ7mH7KbHeoS2e9SW3pSiJeu4KHQ6y7tzkhJJriCL6M61rGFxeoNqG85gjzwpQkjQhgtokWMZp",
  "key30": "38nmhDuCXNEKjXcTzendu6Vs6nqF2kS5WuNBmboZ7QU6tZSrHaxRoWmWjku4YxQqAw5NQ2GtyYL3i9mbLvimx7uv",
  "key31": "9ewyhAyfiv14bYTmiZuhF3VzRtzox3fkAN13Dn2WcwBLbvCtDTZfniX65fCzTQAhkvynTUmwTpSERYoa1dBFthB",
  "key32": "2PKxRmUB85LH3R5fwo9jDLjqCvCWiumpx6zeRkNGBCZ6fgKWf2ijKEGCFHTKGXNrbgBuqvD3L4ppy8nhj88WD8Rv",
  "key33": "42B7fUFLdNMuBLw5zUy6ZNe4nXpSbKbVUJKqGpCvuWM4A6vnjiqYdNNaob3YcBoz5rR2NuUES1zB4tU7fx2SikhC",
  "key34": "Eeq1WdXVBCdPzqdRPqc165Err9qVR2K3QFGz3dwnX7GEkaqtYanMusQpmuffZxtVro7ixE2EsUMo3BBn4YcUUvw",
  "key35": "5ccCAskC1T3p55foCMSKcg4xfVdaQjYc8eVCrM4vVGFpyUqwA4aoKXMvJcsGWBaazY9XXzx3X99MzVN883F95dxn",
  "key36": "3hdX38EHyabcnesTiyvUwGEq6W3i27MAWXe8vMy7jpPM3SBgPXXf5NeNy8J8TudnBJNf3cWzf4WBPNwepdFy7nYf",
  "key37": "2xVoLwyct9unoVj47Ysf4vVVYQjVcfyV5WUAWGuw1zAAn3KLfWeGwufLfn3dnoH2XeuwCFCgEqBKxuQxv6sgqX8H",
  "key38": "21dFzHwp7g42ravKurFa2NgCaNK4RJXfSAFGKsGqCRFyzhwVL9ootcYafAJvXryoeAxpFPdeHLaUCZ5sURFczkgB",
  "key39": "wxn8iMA9R9KzKGCoCvB3wmQCwW6W55NdbfHPch8mEWMUbAXDhpjHz9cKZ6ciQHLPRqu45fNtsz6qbBZ7msVBBM6",
  "key40": "WdUVCdiXGfNHu8N9heEmR7nfuQQmb2Z2uWmidm17swR3uGuzgfc7exbEiZT5iMxsg4Khah7EK6cgcKmJ8bz2WL8"
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
