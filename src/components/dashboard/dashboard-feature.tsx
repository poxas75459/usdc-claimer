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
    "4jrwb3VHF896Eek6Dkfg7aMWnNCSousqcLPAvLLA9iyxkhXFBzSGaQaeKTNjLjYfTV9MJ3yNxsbcx6RtLQBGBc63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQyDE9gKhSHr1N5kaT7o1dsR7Tt3R7ENWiHo9kHMgDC7LZGLmKhKG7GCeqQGnL1UaaHPoMqdbEP8qJiFZ2Vj4GU",
  "key1": "27NwoRevkiqQvkkUEdrNB3radD3fM8ZgiYT2wU2oCReZTN3itWgfSXjUaM4HFH1bxap9XcwEFvcy8gywHNsZBdKZ",
  "key2": "48EmBMvGNh81mihEqxQpWygXzGXryvsDXGTTfakiA7jicUR7Mksjg9VGRkRTtcUptstdHqDhuhdx88b8oa5ppyZg",
  "key3": "5dZABHonCwQNzP7JxJ6XWNcbynMpTkv5ZfJuwBMeyaJWXzdayvkne2g7wjmyTayfxU8jXQtTbWfXLiEdpQSh3sv",
  "key4": "2o4Pdn4Qn6UmoL8Nfog3CpF9qfadkcXZHafu5jfuHCpJ9oy5Hjtosvdgtcp7LoCzTHQXA9cqppzydkAnJgQSb5mE",
  "key5": "2cy4vJ2jxvgCPcnScA5jMGM4Nd5oUTZo3mwCL2iZ2fUQK8qm8vbKwJr9aNSMdH6EudaKFiMEUCajpMnWBCJUhviY",
  "key6": "3zgdH426vwhyTjo8Z2LGHP7xNJiGVk5epQH2pVMiAzRdZwoPLNe9HKtNbcmA7DjbM9QUm8fqyDuLa2bdbyost3xg",
  "key7": "2CTjRTM79ohUG8kNJnkvpTYGHWDogTBiTGUEydedSYAQdMP8rLm3od7w9etVpaMvRgEvSbAdjZ1hur8DCNHkVSuG",
  "key8": "2AVNf7gXK3wAKjXbCdgrCqoPbNPFrkTC2gjHzwyjCgr4oZfG1NoCRJhJw83iaCYm13ipFEeZAM3Mmz8ZdcRq6MBf",
  "key9": "4wmR3QhwWSepk8KdcRN7swNUaRqRtGubywRkxpEjDfNLVihkQU9mRKYD9Rw9eGVH1ExwgEVJVWutTLQcvTtQxd5H",
  "key10": "4STZn4sQeX2QDPtLBYrXU398SoJVdjMhCqeRMK8BKX6JuTxPJGAtFtk7AGGjkBnpgKJgDosnR2y9e624SLBL1xFg",
  "key11": "4pknJrgz1234XaoFtFtnRFtVozme6YVvtYKECgexoJjnFg4oW25kU67wTGbQgAapisaYmwr4Rw5mYL2oGG7Jc4LU",
  "key12": "5DqQYZg3w4RVWL8VheauNuXFm94nXFeEp49dJJV55mGdh7tJwre361SPPZHVGpeQmF4o4icV3k3fQtHUQtjduhhV",
  "key13": "5Tpe7pHiMay7GdNWpbgmZmN3s9omwLQrsH5Ug9mQXdYehCrwcqEpaMk7XbTF1WyTU3Sexa21XHKUsoz18Geyhy75",
  "key14": "SobSawW82EgUw6AnGfEWdktdze6Xa6iPhR9cvVfsdEUwZM23yctQ26DwuWd4a3BvqLQNJFktscbYie3oxmdidgy",
  "key15": "9Vr2s53fueW2oFAxbzCGVTmKiXME4rvvvALGvKEpEXJoKNafv2HZUCAh4keLTV2scAY9AmCpMn79kqdHqgZ2Yc1",
  "key16": "2cuMi54mAkLrk3gaLKn68W4kPhreDy3kBHby1aFLYVQaFNGz5SofpgHLvwcXfXAf9Y297s8SZ4yVxHh5AcCWaFgz",
  "key17": "4ZzYEeUYSWfMbHYNweN2UBJW2uqk1CAzZ7nKQSqSvHPFWGUet7zqN7yJuRUXNDLQWp1YacMxCDAZhZqCJvypPWYd",
  "key18": "3o5gW7AA1HFGrhPbw1apm8R69QrQZdrSLNk7BbgBESp2aNRkbbjDmYzKSZXqKppKVzhZnxqrEv3MkUFXsvPtNTZC",
  "key19": "DqbyhVUSkH8Ee92aF3NyYsVjQxnRgerqQjU7QwVRGPcn181bLpTW8skFpXp2dqvrDhKzTZUycvQbMPZN5VuNhMg",
  "key20": "54b8n6nJhdG8xtT5gYPA5Sdz1CixsDNVT2Fp4SzkyVgvLXtXgb2uuhJRi6ifRzJWkRnWH6btDPgBvwYNW6n1N2DT",
  "key21": "2xX4DhYomJMrzZfYJ1DSMKCuvnthaG4UGwrjK1Vz5xRG1EmDawErHCnM5fqzFq3zdYtoMnUgWKEPPoRueqm1WWUi",
  "key22": "52ABKapPE9YyXarebjYajADJcKWeegwntnsJsjPRcAGsaDMxkAbvUMZmHTijersEeC1xy6s216cBWcMfz6CAQRBX",
  "key23": "Ea7Wvi5Zy2iw3jkQpsM8bHPY9BAuEnpEM7TUBMqibjFwAb9Ff7vvXt1vpLCi5SpdDG9jA2VijKoE4J6CtC9fe1J",
  "key24": "4HzmyHPwdyYUZEyyezbQATsmtFGN7DMA37yRtAfedysna2mU8V17sfEwARYs15FzRdunTpkZjQGHVDMUr24wb5Vr",
  "key25": "2V1c7VTv8SzuVoVkRgj2syrqULFzDkRCHEhkxb2eb1cTPFnhTTZ1p2Q9YCvtUZXVgscHYRs8iBJgLiZumqDjLBd9",
  "key26": "28HUg4c5nr8cDoZ3CShpej5Njan1YQDU4qSB5ZVUEAh8pbdqhmRMCWWi7aazWLCrVXbZnk6wtFxsexf3e3GQR6GF",
  "key27": "46RtN9jE3eZwsvNwnCfB6PyM4dNfkHAjwHtT3zjf5uM3Taxj5p1wp6oUfrvUa7A8vNo5BYzHc7uHXwJTN7ujg2is",
  "key28": "g5BeRoQHjspUq6XpkBzCxyfhpkH64toDTAj6skmuqFHKWPRwskCSAuzG6nFkPP7Yzcw8TdbrRBiqyc1Ags53pwX",
  "key29": "3MhwB3uxYr8QNZpXDnZUExXBEEzFHGbQ6syxddeCxj7wYXdrM3kJGFs9goyCKmcZFrQC1R2QefRYGzCjkuuyNBiR",
  "key30": "2Mmkb9bRzSQjbyuTACwep7XQsCjvGAB4bGL3q2Ctt3Xqp5SZuD2iGrUTjfJ7DhZtrK58U14diXmMWVhBMWi4XvXT",
  "key31": "4xjoEMAn4kn9HZLE73SwJ56wT2SsNE414Tk34mTwUGtw1yBojj3BhX2tKoKxtxLHcXepkR9T2kKDEJPcLLUgAXZH",
  "key32": "4ViYcjWLPU4Wk1zv6W9zrXR1ABB5j7MgUFsKQBuuZRwZJBGYT7uBxpJcXm5hR9Frf2WxMjSogw6ZEm1xBbDZnxTm"
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
