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
    "5v2fK3n2j5QhG675WUaZvSTSfbeXNZubpSYwKnvQA4ZyMzeU316mKoXBFbDpTfzoqU7ax1zx1D5bY7EF5oEviJiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ctbvesnyhvk9ZQjhjQTd9GMVPBVxRTPYH8w2aUDhkL8fpy8Z2SuqG48r3Dxe7CDPFddaLCf5aNzgjvtayTn4aty",
  "key1": "5MPUG3NyA5MxJpGg3E28JQoG9nDgeUKiatfNE4HSc23tT1w4dMTbXKg3Fkfy4aa3LR6uDFM2vPLCku5EHh2MU4pR",
  "key2": "3KHSumdx7Wjone17WqHFE4F5kWXU5fjzEVkGAV8nU8dSaKvBvxuihuPMi35zmM9DhdNQ3XWR6KCT2bnELF6z5Tbe",
  "key3": "7LpAZNsg6G9hpVuaGFRjSFn844NLJ4FNes8fVZ469sJ8GuVBxytiNnxCwreNZuYUQAwF377e46p7sS2C7nwoJku",
  "key4": "2sb3oXka2C26QD86XPMsJREzpG1PNaDMrGQeDqxHc3fGkMkoJU8XZCFXnXxHSCbotVqwmqAtUKbDYAfJHpJjRG2w",
  "key5": "3PFA2RS8aQq236F3EXuLDqoexPLnSSFxsSmTW98Vrzjow7BwGzLQhLGfwV3mt9Tos4HASvyCTRrpYHRQrBjmxDs6",
  "key6": "27GxLw5yfgq9xiK4KRHwXgYZeRSMjkM179QqEVprQJrBTnWciH5PSdB26qkZytxUtnaJhRaAU2MQoGi71hAfuLz2",
  "key7": "4BxMGYD9pFRiJNiDe2bVJrUZGb9xS1HjuNxhVxiCA9jxbRUMFKnnVbGkdE3FgyyVczKXBtYxai1EK85zr4n9x4e3",
  "key8": "ABvCSYYJBtWh3dh3yJNAjbVbBmmwQpW95YgGXEr1xF78UA1np9ao3aSSDaYnMsyMN8WvQFJ9U2KyTvovebtFQrY",
  "key9": "3GXfrx67HURcXDq4HEA4izq1db7Skcnp2rFAiAWanSyrL41dUmdesQMtdt55BKbKwhULVYzFZFNHPU2wLhqXVTyN",
  "key10": "jCpLVUj8akgCcyEd5VcpY4XKsHrqiVSCEZJVwSZqBUx5UNfrNUVq6AK31gBokj8CbHD93XKjmk4ZZKVNiJLcZng",
  "key11": "2FUgH5nhLachhd423cBecwWDq1fPKdiX9aNMxZCouA8UJQ4rCE9EufSVbPyT5qVpsiDGZv57NX1nJz9667jshryQ",
  "key12": "5n5MS4ApgSTFrB6tNY8WuVqjvUgcV8ioyKs3m3NZyo2YqfCpKjGLyTbFya6Qb1m5C457faQKwHRRZ1T6Dhhqgxn2",
  "key13": "576cGPa5Wo2UkFvXt1mcgmH8f1F9Ghhfs7BFm3biLPUVxW31xTnSM5NNmyVABSatCmewJN6MqHr37pzBdRcMLpta",
  "key14": "YpVGQaaaow1d67vDwfzhzaYZXLBMzPkmddSogxbSb26Rp85beotaavyRVeEUowHzAB8KNUNFFxqTDHsCowaaF25",
  "key15": "42M1hSDVtXGLqufNg2nz13THhTPPvBzUjjXzJ5LGa1ZMNbXeJwo9CCJGTykzdkHp2WEsUGTcnLB5tn42cqWBPzjp",
  "key16": "6BtwB94XA6qC374hvtqGGsYuhJiLFyY6NTADerSnDmGvPEShN7VSNJcGnoh8RvxG929qvGpmFhkDhcMzMg5gafo",
  "key17": "Rs3qxeo426J4Dj9EWGwr5MoxF2H7wTdYo3smHo5JkTdmUuY4xas5WZGqyhcBZD8W1ums7BLf6EYWrMM7d9T5MP3",
  "key18": "3EfrjCXNCnoysin4UP6ActhKpx5C4sJCsd3gXYNoAcXFrUq7M4giwZ1GwjriAaEmgeRt9XLRyzL2nJwg8m9ZLb2k",
  "key19": "57D5DVikNLiQR5S5cGL8ei2MhJANEFygqCknfyWrEkGB3WpMLTHUji2k5SYNaVePS4tfQLocyYggBkZMSe6CcHef",
  "key20": "5raHVVyNXGjnxSFPk18wRb9PWWNDdLqDgjq99nWoeywzbCmT2wPoCenNgY1UmT9j3yv9HvEqExYhwacjndDetduP",
  "key21": "3SDbQ4EUgkzLEmnJrJke25ESJB5WgULLt2adKxQ5uRTPVConHbaya35gTkZJT1VT2bZGtvm1LAV6K8jwmaHTKiuh",
  "key22": "Ebwxj5bowB2qMj2acuCC9aBZZL1HU3BK9wTgK9huRiLhN6Mi9varzp1UQxbiXmMTaq1wtB3pum5ittTQGKMKpCS",
  "key23": "j1jBxaafykE91TP4c3fmcXDxGRJmFpgfkE6hABCSWtRsKu2rtRYZR1f7khXhBNWnqwrppTcCAdaXZ2BKc5E13gf",
  "key24": "3wKCs1c66hGZMe1oy7VGHHTVsNZimopPvqB49Ey13p6GAGbpmuDu5Jev7SDDhqNUDkGohtuRERDKrEYymppGTe5o",
  "key25": "2rqkcDHWfAALnFVnbJVPyGHvkdbdgis8YHqP5LzeqW41z6S9Qri4WiY2nozWGeknXXi7zL4ZzXJ8Fq5pHixt9yv2"
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
