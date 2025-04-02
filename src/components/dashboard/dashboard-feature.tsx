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
    "2Y9ghhFyEqfGYNhcSUa8kxt5USxMVbg7T2pipDe5zjDhcmJtcVCirkQSteYoASfsyYvbB2RV9dEHjB2gd8bVPjDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LqayrZuYwMqzZrFqtvvbJFxqBnpvuC45u4Ve4toBwJbMqDvE3vMSfMGFDwmfJzRCfvNdqPtEckYJDRTvNEXCvB",
  "key1": "AHnJe2ptGShumZowLBYeHRzhTt1V3GaCd2oCfYguUrjmEgw7TqBAhsahAmbH3pHcYEWe21Fg1FfuZTR1zq1bJjW",
  "key2": "yP32DoTg5biRsmtYHGSWvEBxRJ7WnW5krKoqtJB1tqZrdrpVUb3qUGFEDv7Nd8oH7vcxrqMGf2v2Lb5aYXr9iLh",
  "key3": "5hBqb5Hs1BttZ6dWpnmZUK5F2LBJxM8KLm53Ae17nuu7NzFefSqe45FFzAE3EcRBagw4KeD2Q1YUNyxsYH62qWf7",
  "key4": "UEZjN8YLDydNR8J613xFSep2RcDczTttkzuLevf8DLXeAbVzLSiRe6vYXMoMwAMBxsLVoYm3LF7SYXHCtpWE6qn",
  "key5": "3zr5SaDJFkZfzDj2L3GgwWqVDX7QroibUPKLWGGmdCGozVVygGYyVrCB8mww7krbWCkhD1QciiU2V8E77Ud3ywQJ",
  "key6": "BK44bTpwYYcibFU38EmycKh4KeKiVcmiXx8p7q4Qkyruw3dP5YdB8ftXos5AgxPaKPuyKNAxXUcCnyd16BntUur",
  "key7": "2kU3R7oJDhSaHW1PrSb55CBcsg12Y3S7njTa1wRDz4ycW2mBZvJeCJqqch8bRnq8h82bX6Uoi19Z1Y3uWjK6dLqe",
  "key8": "61CUEVGkdtjJ3mcobgNgFvbmM1ATcyRyGRSguhfZTRity4CxWzGVmnA7gr7qJot4rDx348zxSwbqaSK4sUXPjY1G",
  "key9": "2mTgvdt2wJc6fvF1gTCFXWa1k1iADTLbS8Dz2sRUn1CZwuUPqxJyzdmwtToW5ubgpJ37Z8VLjcHiwHDvLtHNC6vJ",
  "key10": "3pa6KxC3oYRjEuXcwDa8TRwyByuXyvUTmMn25p5cv7ki9cUznqVt3G5fACTHdHrQHZ27nLE35DaYq8jqMwpzFmqJ",
  "key11": "hoieqd7tGhtRDntoePYtPc7mjss8WFjrZRKkH8YC8mR5vokpAGJ52uJzdRdWcdGLpSvnCarzwYy9R2yuGzSiCu2",
  "key12": "2czSbDTGpK2kqU4Uj5zMeiAb4Rrkj4Rfpxci5mH8wS65XQQwQHugeTikd7GiJG35Befaw7AqqjzA2MqvdLD7wsnB",
  "key13": "oswntJioXkQ3bUfR8bSnMZYPQdmg694TJzd3RLcFmfa4Nju73Ve3ZB1w6FiUB8M2vqbh4jvcV9QdedazRny4Bnz",
  "key14": "2D2P6MwccJctFM3BGjXNDa4bHZr6GA4zkERARwxsdZrvZDRLk7YJrqhqVf1ViH21GgLgBbetp3TnTLutHRAgwiq2",
  "key15": "3WYyhaCSPw2WH35qdjSLpXyX9jJF83M3oNyYtuHANjv54rFYW2iWX649psPHTjSP3ApJShVDofG1A699GhDi73di",
  "key16": "3tGzHaMrWFkKnCet6ZAS146m6tgiyZMsiW12Am9CskeQZjqYk8Ycw51AVZQi5hoj2r9mNPVbgjateKuF9t4Xb7kw",
  "key17": "3reTymtLwbR7ncBj6kZqG3vVG5DkasiES4ViL2PC2AWttE2X2Pw2AbHcPbdWKEbesi1m6Dg2JEHbNBLCeh59wF94",
  "key18": "2jds8bjjzzY2uHmvPXDDzLdMzSKNYt6uw6S6282QNep2tBKiyEQzvALmLakEfw2BAA7khevHY45cgB3sthgH5LsU",
  "key19": "5RHnvAgYd8MUVMcBRq9xqqvcFNm7vVZXo2vVS8VUDxJWKtqiMAyrbDPEvn6gCTK4g1orDM2DRBbyez5czg8mceds",
  "key20": "2PKvZV1PAHfgbAtVuY7fLqT9dUaL8MptRDkkxLxsuv4onLDTxNHcgBiRtADk73JxFUGw46Cqzb3HXpgeC4RVTnUs",
  "key21": "57Vd4iV963z9oHtNHUKfDcAk5PgTQbX7zFxxa9Ubgi4LBX4TnXtiXURoAPs9SPcV6j1aBdRviC4TG6HELLazx9rp",
  "key22": "3YLcZKuTJhEEchVQeTYBBZUrErFHstw2WXqZbnZ4aWUojhJ4SSRzk2pMDSUa7PSDe23bXnFVtrwDTZT7vgdCiwSP",
  "key23": "5Te27jBvudXExKyTSi46hqhnkUGZuPEbFChafJgJcodryfxHLndu7v3r232CqoN4wX6BtYVHXrB6nB2M8duZRijP",
  "key24": "2uUroUN4qsBFt8aiQWq4yG3UQc5ppobjh27HXahFuJGYAPYugqbLCHJd8GwNBUhBVo27JK9Y396cHAiT17hJpW3L",
  "key25": "3mHdYCqtiisJ5tpi8GNPjaYatMmA94kEDZcEjN9iJ9j5ZP7eT67ALLRE11zrcsXscWrMiYFKeKSoCFN6e4524UVn",
  "key26": "tEy53LcHAJLcD7Q1pMprwFz52eNfvp4ts7cXAqUvfaVgUfpKCp8fz2iX4hRrza77T5Hj6Kf7YziUwuCm2FQ5rkg",
  "key27": "yQzv2X8c6aohbnuu6P6NcciMZUQcG9NMmqbbJN8ccc6w63iS9sd7wZDm5zUeQiudsUgZbRAjCNcd3YWrLESPK8n",
  "key28": "53Cs2FxULmiiEPH1frN45MeZn2vsXTpbS4iaqa3xqosfbPHDoBaoCFWCbKdQKht3Bp8i84E9LGYNZBxioLbdxi7v",
  "key29": "2RniVZLNjx4m9bQ3GCNT7UYJDVkDAmnt2Ex2aYbYmSt4AYZgsSypCnRJJGmJZrfzD2BjoVH9cRS85u8MpZa5txy5",
  "key30": "4XiXsCV1GrWMgQvpHZs6Uvv4aHjtLBUrYAo4xD8z4tnpHnRpZPGmXryeFaLF6iQJmWWbgrgFz1pHCDuq37a3ZHzq",
  "key31": "35LaTts4KYYWnu2TrjrsJmBQPURsRR3fvAa5NjnyMpFAcXAvRikxr9jDuJ1XjoXdokU3H61ACf5JgEn1ykKnFFLd",
  "key32": "43SJPg4g5ddou3cn4ieGs8dufUZeoRJKZufwS6UuZtnRAoo7aM9KMwWjR8JAG3w1nYuAHkcftZCnaYepoHMHNM9Q",
  "key33": "2XKi9puGDGZ3E2R5coD7awFVQCkTxVM2MH6Da3NUVERZASvGSAJ7c5FwsAMJrSfeBUMrK261cgyKnc6Gf3Q3GwEs",
  "key34": "3sEHzMYWqvoBBDjJHegrBV5KHLKEGANrv8fGsDdJ2BD3z4CNmzwVeoLwrEmhzHqRNetexDj9npc6VpNiN451wz2f",
  "key35": "37SkyCcxmUihPxByGa6iYPZxAY7mFJEgicTSp2EC7WM7fRCSrxNHbeZWSmDXHaJxyZ3RYTJgRQ2aGXudwnNyukih",
  "key36": "2xkuGGZwGRfmShARHqUNGNPkBMagQaPQE5og8DTAQebhFJRcuV7Bj5XjV4aFRF3HZgGfeFQ6KY4qNMNMngmPWybs",
  "key37": "3mxUYNaGJyzXMKoaCBmuHaBdrusyDRLNZBdFm3uiB2zhbsVqLYw365wvT9xYDDS7Pnbg2X4fDxpsLVHxjSTjyPtM",
  "key38": "RoheRMfm3HDrd3nutNuxWdmfVguomeUdr7rbXP5YZ3H5LB5HbFt27NFuuWVz3gnAPedMMqLLzsNidPkRzyjbvg2",
  "key39": "2xyNgMvTGAsVUMSthZVbfiVtUET73o6tP62qc8QU23ghwsVo1aMmBixBYHGD3UVNTyS1QUkL2Deutz1GaZ8JtATK",
  "key40": "4NwRjJtt6TxwCH2JgVnSKus9Ypn2q24qYuoreodvv8iGVJLbxzkA1Hpyavkq3ayS53ppZ8Tenn9c3HxdD3Gc83LQ",
  "key41": "2nhKV6VF6wqV8QKdgvJvymJpup6vsEKeUjr2Sh3s7pVFs1wmwtRhjWNjwtvTQYxDyZSkGCGzpvr5GA9VtdgPG9Z6",
  "key42": "o7Cu6RchwsVh58SRqozsun4mWtfqYJwpcwPhuq2z8DD9GkdYgEr4i6Xf9JJVew7i5NnRRiDo4ixXKTdFE8Jhwa2",
  "key43": "4szfjU8dZSSVgZDTSPRJGeeiPha5jGRPwxy9wk9mQ2bDRoTufgZTAs8M3Q92a4Y2tG8c7sxzr3e6JxEKkbVZXTM5",
  "key44": "XSTL9qD5HU6ERBvKyKmBvqEd3tcE9aJP8geTw9vWLPXF2x1Wd5xchvvXm3hosHTGC9cLEAWdbNhGXD9RwhuXxBp",
  "key45": "3N8AUdMUjXhwAzUXaLxjECBhivsJwRB7z5Pv1uM4HDKA15DUY4tx7t6uYxL1Fi4z9oRRFmxazbxkC6YhH6Ezs4Gi",
  "key46": "2bDSfLj5gfUQ82DpMudDB56ia6KhD4z2wrhb35WUweAbUGYhi26tJshob346q2YXcTpj5tdzYJ3iipYz99mzrc1Q",
  "key47": "64xqPx4XLfnrGAbvf4LFZCCjWRv8zdqr8wowJ6vCoSnz9yRM2NFZf12z2rUgP5NYpRvHw2kH7eEjkuUz86Z4biak"
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
