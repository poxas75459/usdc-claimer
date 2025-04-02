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
    "svpSwNMeSssd96KKMPFoywCeWgBMTVwjqia9voh7LMZBZSMbtuVGQbdx6K6s2jaeizRaZHrrFw9vcr958NCqfZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VjKj3rBNLt1FEh9NPqD7scwvawYmc3Yfe3VQZKz7GWBTMDYACjUFLPfk38ZX5gRhMt5R7rye7234XEe9BxKmhgs",
  "key1": "3CHPoczTPyszA3pX1W5GS183hyBByN4F9okFWHBFWqv8bcipiadv4rdH22SnT3A2c23W75qBHs3TiVERVFbZfosL",
  "key2": "4TiSZNLDZn6gcPMKAx6tihZEfd3Y67e6RAZtVRarJVQU41MZVwVFJ931k2q56xK2oSd88cNTyTUEYuEBghAFUBcv",
  "key3": "55M1co7iMvg8zLhdDzL8Ypu9buNyFK5jgFzypuiiKFduQqYU9eGmb8UYnusiNCgYcmd7wqJuxFaoDR84LqUaQJ6V",
  "key4": "yhoeBsVDmLkSkPaUPLDU3u1vH9fi7APVjw61sUVQ6LSQKMcfgdjjD6QnL9DUmhQUJiwQMUXbPvgDcrxF2tcKWuL",
  "key5": "1R9US2P5fQ3fPiPfoLitwYYwc8LEKK2NMpYaznmdKuc2yVQihXd2UxamJb86JHszRWqgijKydETRFQWfSnxJRGh",
  "key6": "4sXq4ToCCXabrxQZdQ3ud63tPHTgCr9VqQyVYcMwvfRds45dPKUDXRawSk6hQJwCAFnMEvpvGG1D1dgaVVZdm4Xk",
  "key7": "2LABBiMcs2oUrivV5PSVdu7m69qkPaM1VanjF1aQs78dfJPEkwJjfmitYdecF6PgV9DQBGDePAoxF1TkXpJt3nsG",
  "key8": "5vi36AwANVQbCN6mFQgpC4MvA3k7pJJx1biDpgtyTDQzqs3eKBSSPGxJRhan2V68RA2VAzCWDj2Q97r6BwxF78cX",
  "key9": "AoypSqWus4u6sQostCN9gWFKUs6yxCmRDPQnbDWEmPaQFNaTpUhwL56P5ZduN83zBBVTh1AWdrEdBNMqsAa5X1b",
  "key10": "5iM63B1MCT7c58QWCGXER81HXcQjYse1A4Zeq9o8UfWJnHRfUy3CLnWSKF5SQNcTaEtr6tUPaQxms9ZU51kgaw8k",
  "key11": "21NJQRMiLR2xLufrKdhkPVM46xq5eAu7fU1C4BPcZ1qjhpyLeQHWprhZ1Q7asTNVfrkCsrzion3tBjza59zWgLVj",
  "key12": "3mtp1xmL7h4zH81nePZHTWcPeXJGj6YN84ayzjTDuLYvUmBM2zPbxrY5PBwHv6jTWU79FEqVdEcsn3cLYH6RoQpZ",
  "key13": "3M5CfwUzG93ogGyknpS7B8RW58ccnUr1ydgBpZeMX5HusLjn9X5gRA3VfchadwcKqykXos737G3kk9fKPdSs8P77",
  "key14": "59KWW6PtLmqMrkJdD8WERAQurxsu34gcfUFcLQY2JBLNbnNv6bmzU8Tz3dsCkiL744Vf4WTwhfvEu4BDrnoAdj1P",
  "key15": "4FngDKY5kFRPxv1sEPzp9VHqjfuFiPCWGWS2EQUqxvaFh9m5nsYo2xeN2r9LQERPN8XzwmTaRqq65W4edo6g8Bz8",
  "key16": "4qBdKPe2i7Zg1FexpyKaSioiSDH2Vjh2behFwvMyVSMbb3CymN8wrrfo611d9U3Qp3w2jHaP3uGFFAKYCTX1Je87",
  "key17": "46ZCdFY5qdJCnAHDqkL9zE5vNFedNM3paMVseKhmTLTDShuDg54PnFgU1Po2bKy9dWomTWA4L76WvRwhs1wRxXdT",
  "key18": "idkcrzUT2BHteczL3uHijvasGVuackScXe2MsDC1MPPFVQyF8wmkxf8GnK4BaWwUP6CdvAWrQG6TNxAF4Ypgzo1",
  "key19": "2b28Nq9kzp4BBSYLJSEFUQGVEDTRVeNUx8vxpAiZPqcDYXWEwe5gsLwd9YzpbQqPVmDguEprpwbu1VoXVLmtPjkB",
  "key20": "4dRSmcarPcvDrhN1okr1ponNcFTGLADHhxGX45PsUhD77aGDtxybGWZdSVaT8GrVAP1UVNn3tdHhqCUQaSyBVCbW",
  "key21": "4Cruc3FPtVbg6zRtfwmj2SHjodQingfdJ3SWSPcUAYoxjQrqtkjeKPnKhmX28EzJhuToRhVdXHDzTsrmcTtfGbDc",
  "key22": "4yqrVwxEWoz9UHPtVtad6CSSEfNhrr24DegDzzs3WUyQdHSjChrMDye2ZSzCLo6GVEpZAqgNCzrH2LabU5XdJjVQ",
  "key23": "54wUBowCSfCwu4swnWBmpigKnnCQvPmGXSSDcNaKrRP34ZFMYR6KbHpbJCCuxchxE7bKpJeZdvt5zrc8NrHDk4R6",
  "key24": "2wZtpRtmR5RPenpFFfqURtsVLH8EbHps7WSEzwdb1SDJevQBxm96Zum1fmVNGM957a2xQT8R5hjKoN5VHyRRtmMn",
  "key25": "cDk1Y8guu3nTXQkYiKNZSWEU94pkRx3yNPyuk7CcpEcFyvtvoNjw5jKMmBCvbXyJ5SYiRgGyw4CbpsfAZAkappm",
  "key26": "64smXXUGTbr1nXuPNqa4HTHxPCLzkw3HH4Tto7TpWguQZMjdTRhMcmYFk7DYpShcWfiHigjQWqc6egUKgoLi8i9s",
  "key27": "5jc9FxFzELYgCDCqiz7RBLBzbUx9E9pkNmMBdh4mTrRM5Zp8Fas9mNcMGF2vKp54AxsbypRbJP841s5uFjnmRcWF",
  "key28": "ZMCC8MJ4JTkiNynHNuShaPZaPXbm5mZUNWB3TC2dPVQUk88LSy4rafbSeGSBR56PN2ioqrScoVoT8CTMY8FztRg",
  "key29": "4aqz124GNGeUrThuHt3Y3Fz2ntjnS8P5AjrrEHUSfYR6Rw27inonZi372jgSA3xzEVYabDJQ2r2uA8TTJsxQDdi4",
  "key30": "2EoSBVTvzHQrGTTmjWDSUyuHMKRYBrTmk2shwFM2hvX6QoXJcZP9iCas7CqY9GDqm8WzMDsDh24m1QXfXyBHh2qY",
  "key31": "4DLMdQbwXjAqL8HAaGJooCnRh688ipJWqq53eaM2wqRAdwRPJt4RPHv64sVk17sKkZ1eCt3i9Jq5Yrc1M2meECQH",
  "key32": "3ivk98NjCJ7qmcvN3xUYZidbRuBsGtwnxes5zj97hChNx81eWMAoLkBXjwNU9f37PzEKEQSicwV5DTFVGifMauen",
  "key33": "KCQE6agoNVgVaZKtg11oUcZwL3Nqr963C7TtYVP3fT1h6D9KonUxuTKfadQTA14Zy2SoF5KxzbiWnpt69gMvoEq"
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
