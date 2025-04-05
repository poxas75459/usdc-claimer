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
    "2BiBtzHf7HzFwQVZrZg1JetH6HDGSfcS8uhhd25yMDQdufXTJS3Ro28PPtjJasCnLxyJv6KoTvpwsu9Qc86T9NKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCtH74rzhRaEsprX11teUYCBp6Tb2vEyBmbBuoQhi2ZtY1xgew5TaN7G1QN9WHHPac9jcpKHwTsRjxYzmnJsh2p",
  "key1": "HYBLiCGnYMZ1jXjcJidzBxJy3HHcxj84AoLQkLaXjsHcKxT72GoWMjhKtuPMx4ePqAD4N4dxsMggDpZUFk6YqSe",
  "key2": "49m4o4Tt98XvHuSF38jTYLpTqLqhvXEvFYkAi91T1DQJZNa4KCXZhAQFDKuhaECUDZCXJeB73TX5aP4HApPZ419r",
  "key3": "YXARmu6tHx85b3S43gV34mPL3ryWEsz9xDur8xJhMRwLT5aYh8DXyJwxcKNP4hBELKdWa24W28jxTXYVz6Vy37r",
  "key4": "3JKJDbqKfRsHrFsEXeDdGRK6HLyKe2niyVhzbHswkGZckHEpGuNHXg8vYRsiPVJFgtBTp3UAzBJVKwbdf7VQ99vY",
  "key5": "3dqTtCfnHgb6DWEh7obcb4bU1AGsw17USJ9hcph7CTzWdKo9YW4EFA8ufsYD7QCpPweFReZSHB7gMUZVfd8sWtCa",
  "key6": "3KiVHf9oUohv4DdVyDoUw3xSpZwFegpcXe4Q5Fxspp1cSDSnXucvscRvetvNPFdz7sFtaJZFVDr7MAChrzPCSGQ9",
  "key7": "5v5snNV3QqsLcWAiuaapWW7UKRP8t5Eybx2rebBYFWiA7RiNpWi5PNAXFKkmRkDNeJ4hHokZ8N5Zx1J14J5ZPoQ1",
  "key8": "3ewPeJBKs76YtctcjxHF4HT5P5gDhFd1dpDYr1tPMGNt3rGVnWJTSgGay9yH7kcxr6j2NLMUrhQSBPUWQs61Fwf4",
  "key9": "ZrKniwVMKEbH1E1mYnoCND3BBjwNWrssUUFUX1TysLJpcE1gJfWRvuFvC6pGazEh9nXHJ9CxWhQukyvkQrdRwxs",
  "key10": "4zcnULsX1TAScMKvREPNgGjc2p9DsYtqsDoT4MAcNpHJLwGGg7snwdHzBxjjURRhoywBmunQji8kc1TWpHWXEz2m",
  "key11": "4gUt1dNDsKdcA8Q49M58c4oEqo5UMnmG7Xqfiu6GwNvwmayq9JUhUv4FL8UCkj8x8SSyVuWjhuj5MLGeovy4VHnm",
  "key12": "46FwtDjbKMJrYBi4BQHD6BqYusiu3LsNZrAGVTX7JoADzJ6qAouwE3isCiQwmj96fmPDxPfwrKgDgnzfaGuHHSG1",
  "key13": "4bLBKrgnKehpGjijdG7u6Xo1Tn5fQTYNa8S5jmxNDWpBCGGGbMcviqPLEjwnYyjtjpCrXQcjqjSHTRdx3aTNttyR",
  "key14": "3qhiUuveYhsXrYZySayqYFnNEhVFvU9pqfPSA1aRFp14F3JUUpCxzyZTH2VtAxdXiiubpv1ryotkMQEvjAaz6zqx",
  "key15": "2QxxZAediDDSyr1HxSTshGyo8RMY3ZXmdcebBXJo7hizxYQ4V5CgGpnp9597QNGVpJANsmTHB38tz6FmHo28JAVu",
  "key16": "4zCwhxdHn8ivnazzYEkAmg9ARb12eLvRGgXM71GGjnbnh4LPG51TiCz7i7xNptGhFGzmZZR4TexnpSitRpEtgnEH",
  "key17": "cnmGP7qzcLSbtzh1wXRMEv9fNhX6Sb8mhFRAoTy2m39yG1QLfU9R6YcF92jRumqZ9Qyy7opraUU3ixgYvodtxxH",
  "key18": "9FMVPcCmS5yaaL22A1zD9c6oTLkSdn9BUTCnfk499Se9Hq65z9wiAsu1Qh2M8cVtTZSqLZDjYYdEr6DtwzhcdeA",
  "key19": "2unTtqeZK1yttgtnwqeRbk6T7xi1J3M47BGcfBFdLEbTLY2m66fh3KUmaNTCRTTV8Nwst3tDxoaPvCtNFRVaFwRe",
  "key20": "3qni8Nz1xjZtdfBWUVqEejzRYkrpxvP7t5BEN5rJ1EfkQBr2AigsYiCiVF4kKebT878HJVPkhgQ3nxj6apA2ooxJ",
  "key21": "5nfAqCB8jic8AJYUk1EaEXmQuuZ2QQbnSP9n22Pki2WM67QidgMtUtAwGdRp9T3Eh1ZYMNzWyZXkqSAh6D5daVXK",
  "key22": "3fhXraLJxjHnpYd84aiCrq98kPaBh2mf9WErUSEBwqr85sUM1BtJxib6jkr9NWf191zvKqU5AfRa47ai1Z4aUfXz",
  "key23": "4E7wm8wSJ4LkKpYCuvt1fxGbLPq7n1Q4SnY55M5yMZJUbzmAbyM5ZmLjXXSKid3nQeahdKJ6YWBTBJP4FNNN9TXe",
  "key24": "4jKRs1JUs7xFExYNoA7Zk5QW1pDvJRhQ9HeS7EsSy5TRRDTvk2n8mwd4aihw8kBA34LLjsNSHW5ycjMekYW674sC",
  "key25": "D3NDVHbv5sUUkesV6YLegdiCmTnL6XhfCUrmNobmVBsrtDFPJG959RbqNT3QwMWuWNjhhhwRcwC6KDMLWPfERWT",
  "key26": "2o1XPhfrKDTaDGPCppqASg1DS7A8BPbVaZ3kVtTLLRxTihnGftA3oCtMwAx4vv7XPKTpAvzxJnhv4tKvEBfu1dgG",
  "key27": "5AR9jYamJmBqLyEif5wPQvEW2Ji9BGtqWVUih9mRwT48LtKGXtSdpLMXBL7Qpx3Tw3MfXZrsGqwdYDd9HqPCbrbR",
  "key28": "3Sri9RnK4PbBZrYuceuYnvgG3jpQkcK6qwGcBJhRvSBEegPiXEYvQjFZbLrnFRbmU7XnyXFJiZwy4cxkUkffJWp",
  "key29": "21dHr5AUjeNoNj2uBwfjDxMJmjpiruAX4ywNWGtzKXYh1SYp25sGZmDny1K7V7R6YwVCY2VvEux5viGWYcXYDCZr",
  "key30": "2nGiYYa45sdxm7mCE2HQR2b4RzE9hYsc7HLrCFoMp2WmnxCB9ZbZ3CwF1rtyW1HPrHUoAz2L58VmLm1PKuwjjftf",
  "key31": "5kkAW1Jhs5YFuwjAMJNNThv7YvMk3w8VsoMPp4Sp7n8Nmxf58qDFm7cooGbaFdFLqwvy7PKe825M1Hq9hBMGi7jj"
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
