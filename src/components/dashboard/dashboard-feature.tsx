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
    "3nWLVRVGubPwK6HewQWJF1DDnLFJt5eWhx4PzKSU1GgQHYUrPcb1wcEJ2ePx17r2P5qEQAsabGPSR2gmNASSWi8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P3juWTsNMAYZH1GB1Cf6rFnXMTiFKLRUQfu2dSZZ28NFHxHGDrqPJoUduCTkP4EqTTaSce1sBEJ75NR2H82wCvh",
  "key1": "5Awuhj365y2BCTxNKM8cHbB71jZ3C1uYbmpEPTr55A2cTwRpXgFio5PpP8i3MuQ7isWt6GXxxgcYu1YJinFMbwk6",
  "key2": "5CTsy6R9TGM7FeVTGVLPSdsmS3rTxTR6iFD2PxLueH7s8dmUjXFi6F89NJy1Bwfpzy9y7aRJRer2UK8jQ9Mzawjg",
  "key3": "49EABC9gZmfY5W14DYkXUDAprtz7XEW6c5p41qknpRS5K23CdRbnDVJujHoNkM8kBbP4YDw4qkChKECAJ3aozcr5",
  "key4": "3kGUV1Meb3FzW8WABLEhe4kMxJBxLQ3Ea7F8xmdhF121mVEkUJyWHYmFqAHTMaJ6v6d32ACWcLPkgPA9gVGtnrkm",
  "key5": "3PYzJmJHDdqFRWJJv8ydeP4SpYrz2F2a3CXim1V5s7kCLXeEVkagaqR46rtQuuWKiemh6qM9uyUyLMtTieC4215t",
  "key6": "AKqAYsnFG2436xAUoyDre7gjBMQFKD33xhLk3dhGLEB9ktwbexgvGUKhkTSsdt5mVETzrQu8GcSBbJThkKiLZ6s",
  "key7": "4bAeeqhHurbxu8HuDYsyMMpUFn2Qnixa6Dv9BoXk261mLx4TfwSx1Tuvvrw5gHBrxSc59amzVoh6zBvX2F5X9YKo",
  "key8": "2WzRGLfoXtUtKhsZY1PPEEuFiwVry4bpEr14551ZEEVcZzJGZxFpYaydbWHGqDDsAnfqy9T6gf1NfzeuDA3dcEpi",
  "key9": "3zuvb9kBeuTeUtLSwKRCupvgfT8FjzMPDaXjxSAB3BJnnhoobsSWzNya2KvQbf3mrgwuPjeNwjBFF2RjBZKVnhbN",
  "key10": "3UageKBGwC6aWGJB98hgmRENEmrttGj2aps834ixMXZpPUPS9j1kKfz3SE4Eske49jaDUCnVp3HETbTXoBBur3nX",
  "key11": "3ZzVc6FPqpEVR1T2QLEr648CccF9LjJ1vWY4YjWUfTAPn7iquLhRQNEx5zXJQDDmTosJ6y3JWkCNT5JMy7unPJTW",
  "key12": "dksFy9zcsbVsUZLN2X99P4ZjhZNLP4qGgTq5a7FyDXdbVyVSvGL8PL49QCZxgb2jU5xfKVmPwdvCY3sJroRNMSa",
  "key13": "ouxKAPUnP4TLUNhTJmA1u83zAtf8hdhaeUejHXC2fvuf7wf8qVAkRtEghgrnePBdhUGxR11XLzGwqXXEEFptKSq",
  "key14": "35cBtcWCW6Apq2j22tSiAwQHp8nCXFBV187nTvGeykXZMC8Z3AJkW4kNupZKJfEYiK8o8KeULzSDT1N54TUHXcQn",
  "key15": "3ZTe5ryv9Ch1SX2waDZFtG72TU4bF2BFjUdFgt4xbou9WFGZm2i3UKETgyknHkvcme1gwDNk2z8vAAYbeygbfE23",
  "key16": "nrpLsEhQ2FiLkfW64rr2qTksi3c7XFJPAukDZDJ7uCfr4zECGosXfimm2xHPm4yuHrQgNGRQyjoaAcE4V2EZAmQ",
  "key17": "4XxPdf7CGs6bNgUa6G4asfQab6hNvbaeyHZ5QLaiFkPgLBWHxAFNMY4GKPGVHcHDcYmWkRkS3yxkJh1YLm2uJNDF",
  "key18": "NYHwQ4KBaJMNKBk762zjzGhY5YpEtL14bnZNmzZvJiEdN7GbMzkrnZfna4faRbBQpTCB5uCE4SbyqGTWRajXbnd",
  "key19": "2mNvox4LHN5r86EKeGdHS6FDWkbAQudgvNJ52A8mSpcwyDW2H3BhwvQWDmzeaVbYPi5gWbJdz7MdYi7K9cTt5Hny",
  "key20": "3YgCDK4gZAv3HdjWLFXrh7DUWY2EzxKDvtKe2a1tWdVYeTLUa9T1tCRsjxWwCzWBy2ARE2U17tTbSu2o7nBpaTJV",
  "key21": "4WeBVWCHiiZ1UV8rBfsMNuTRGyPesQSfv5ZUmUDyiT5FRiSWgZNqHLrq5NvE3J7eqr8ZQAbP8pmkTuohnAmpa3wA",
  "key22": "2zwtBsNENgdwKXRNkxxEcXH7m8H1WNLxMmkbc91MyNz9p8Lg5u2NrmV6XVbiq1F6XLo3Mx7Bj6TVKaEiXoB99Wec",
  "key23": "4wFfFLegZGt2SrUXiDrskWCh2bvkiD2h14hNj4tFutbJaeWugoYWzS54gaXTP57Mzbf4frMXBEM445ozBes5wDhY",
  "key24": "teNGW5uK5mu8DVvwgXU41RsNaipiDWkGoWfjD7xeNoEg6HiXkoWVrqk41UeJ1FkrTJkujgtuVDFeVi9qdQ4iU2N"
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
