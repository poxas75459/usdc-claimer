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
    "3MqkMew2RVX9R5Bwq3tUNjharxFq6tvQm6A6KtJEn21WN1UxPNjgtLnpcuaQzsYJignwPaTBLarGKRZE2rpVwKdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mwwXLurPZDnpeA6L543A8rN9kHwJrwBBmscCCikgSw3sgQsq5mDuWBPRae5KTWVBvoUQuFEh86qHo2WAZKCcwYQ",
  "key1": "4S143y9tnFfzWp4HDgw9gPz78RYZF8DF1zaRzbMhnmUYLiqEYpAAe6jfQVpKBvcHUtrGAALUvLqPyY4Ckf7jEkQt",
  "key2": "5UG5bBD1Vw4PHHubkVqUKWFKWT123321dXAV4u9MoMDkM4ZnHNsKCMza3dnCXgDpY1B1mB1E1QiKVru4iavFjGS4",
  "key3": "2xVjZ7ycwEw2wT2tB1mP8SuMUKQyvgu8wzrbadWXSzsUFy3QAYwJg4f3ARiU3HfSo3uM495WFrFk1UsFiZd8njh2",
  "key4": "5fx2GfLuMT2Y5CYXFM3hRWb5LbADfNZRwrAeVewEyxCYUEuLJ2uAQb38G2P7WHius58UzygnwiFrAhr4DQk7FHMa",
  "key5": "2d8M2tE9JKLFdv7BA9CRjdePBreotd1QuoBg8T1PDaoZX7yP4T8d7JRofRCVEmPeTQa7FXn4UJzfvCE9bKHUM1jT",
  "key6": "SR2Kgof4Gx2ZQm5Jxe65NhVWHsSAUiUsqkQkvcuYUst1kTdUNpHjvTozrg6xS9H8ZY5rSFjstuc4hZXw1BnCrLn",
  "key7": "4azjufzr3LVPdugag1B2Yc6MhKgmxZnw9wsju4Zi7HxRXwHLyJtD2W8ZsFq1vJwbrPetSiY3cFQgv1x89K6vh4CF",
  "key8": "EwaPas6EspBR2WUYFLthnsjPSnMsHfn4qztVV1EZ59Zrp2xxqGM3LhfvTtFW42jtuXvt9NAVoahNxqV86DUjB4z",
  "key9": "5pDmXtSvJTbQ2yUqCH1NysKBG4guBJhfc7Vb1rBbXyxLGys3o3dQ9UnzGC73122ziGa2j78sUdHGQ9GSPZRysdgJ",
  "key10": "4ySrXSSC4H8QrPEuNddDsgVrnbbukt8HiPLXTLnGn3SUcgdE7aBeQ8xPRQVXyvu4urBmD67pqY84BF1B7MUYivor",
  "key11": "4KdK4aCyPhyNjVA2DENfLyU5QTXnag4eqHdKtLhjytGkY671vPbXqUVfnLxNCjfCAxpxFT7bAoMPrUqN5aPpJYbA",
  "key12": "5iSHy8mwsrrYBhsRwq1yjZScTDyynT9m9W2NsuvqAAWxqTwoLJ1NwaNXywEM7bec24kBSh7AXuppy5prfGbR7gSK",
  "key13": "3teb9ANhxx8rqogcdhQdwP1uLyqapZGaLzDPcn7Zp3ZJNv9BcfpUj8gBMq8o8Npcw8BhhjGaEuZ9RyrjLcRpMUUZ",
  "key14": "4aZ8N8uLEycjAexrjWt6cD3MCRiRQwoe5wXDMgW22eGAUbXjStsjxoNS9YFiLrsXm2k8vZ95E5Zc8h7rgE3RH7Bo",
  "key15": "2LMtVhr16tiDtPTAEHYq9SNbAu43WqzxcnReByhBAJpeUdwJqWyN9VRfcvHsLWgeJXUPuzBLrTaM7ywmuAc5xkRW",
  "key16": "2ZaPDYJhtR6H7cAzVyrdbYfPB7x8ENy7aJ4nXUbKgKr3Bqqthq28AEnaqvGuHaF1iEhkni7WrPPBo3erHtSEHsvq",
  "key17": "4G3VeWvYmA69pVQtt4CGVWE3ZugfeMZ76e35HLZdWNhzRLPYjcqmBUFkm6P83ykJD5zgHd4cyXU9JgmJtzHG8nsz",
  "key18": "33m2k7cdAYgyMpUuFjFBinmeaDVcKkMqbJSChWfCFBVa2YKCGUJk3ymq32tV9T9mMqHaBeAyuoKSmnFGXCUmtnqF",
  "key19": "2GCc8ozYEZKJq4KYKfy3NiNtzx4vGU9XpFf76D5vuFo2TdXkfPXo9gpyAtpUbhpPpuStN4X3f1UtnQqYYq3gRNGo",
  "key20": "4qmUf72ARb7AEzrNGa6Tg76oGT1mS93mf9gfnguSKTnjduDDe8FLHFftvx13Gen3gjPRBu6Yt1YJeriFudqsQVft",
  "key21": "5gDAEZUVsiYMztd4mkMrXZhvkx6VAZJtuCJrfefkueTpSzw3dQXMnqKaaWV3cr6WRS2MiJkhcuySUrEXX7zGricv",
  "key22": "4yCBQqxgx7TAJoCPdhpV631ov8fugkMYAJBJyrt1Pdp4xTxFjFM1qkiyS5979cMfQCMzdEHYbkCgZHFHPLNgCqdu",
  "key23": "61wqsZDfsktQkJvf8NfqccmTH51zL98aM2gPSZTfqpSg12ZMmeBn31bd1wXcJ7BSZWzYVLv5p2pTir1ef2JYz7be",
  "key24": "21ZdZjW3PCVsPxQyjonmozEePFtGEE2goy9rST2yZwG1HufBsCfCwv342zY6m5BUWd4y6dJzr77wwypKBgY6qjQf",
  "key25": "65mRAzz7WiZND3Y19nmwK1ALZrfvFRCa682oEvAteawvFYZs38VkYDYLCJz1VCtCLwYCe64g6uvtbwErW53Nb6ZM",
  "key26": "5VqguVVvSMMvZThmAst4DQ5hz5ynyJhehMhkRoTdquX1ZjsmK8iPJ4RRvSSdkXjUerDoikTzi8yyqjS4xAGrvHS6",
  "key27": "398ptn71C8eXtJ4WTvXPMevCkzcq1iw1ght7vquM6qCGRDaX9356mE1S4wa5W9UpVWA1scxZGK4xJW9AqrThcRKk",
  "key28": "3QnxwaKDqDWTcnHPzEqToK2HfSYk2YP7gZRxJbm1VT3VqKkBEgZtfn78MAKM95kUyp537NsSaow4TspDLJ6fWgrP",
  "key29": "5XoD7vY8KN9i7uMFkLeUeHdj8JSKe4ziTR5ChsU2fPGxYsq9LrXWwMymgUcSXz2Z3cEiEJc2LWQsFgNLdNCJPJKN",
  "key30": "9YU7WfT1igqCZjxEjDJYehcixNwXyxio86otVbWtMeNaDhE3UDhTtQEDaiqL33jkLoBWC6EKwkudfLL64jSad6g",
  "key31": "5DMPhsADXU5WPcjGpxZCGWVctCeFLLingcvFoeBpmVDfdzYbs9AQkKucH8Y4q3WJDskq75QWWdhydCBGhU5o2pjc"
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
