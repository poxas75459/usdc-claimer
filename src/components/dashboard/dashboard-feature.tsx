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
    "p1JyjbNvviuNZ8sBANrv5M98guybH8oovaPuMRUUsy461mSh1ft6wKAVqbv7Ec8sABbJwyUvi4dERbX1cdjWQ18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AiFM9yRLDvwveQvVT9TmwcETh4jz2mjtyP6Hxck65MkLGJYXzydGpS68JDJVP9qopGLhhhd2WL8FED5BEhKcgRx",
  "key1": "2seWzDX81carDRfLNPdUQUgwsDHki2GutLbbHaR2tmp9n7na3WWcWcb24krRJcPhRH2frnd92CEPtSkcYxYTStMM",
  "key2": "4avu7sVQrviMJr4iQUCPUbHN9oLenPceuWRGMfNZSBZSSfJJ4u6ezDh9QFnJwpBQAxGXMLUwoFtrYaFqaL3bxrpY",
  "key3": "5LnQEywYm8ab9tAacstyJ3GrKKLAVFKy793qxN2bNWx7g2PChyz8Fi8Q3sCnzsF7HJVUk5B8evBkm1sFVHVeFoPs",
  "key4": "39dskWRfwPvkCsfJ6jJKj7ftz4HKyoGM32frTGqj8o975CFT3RXmkwpbAiLwCCiFVoeNQEFi9hZnrAeLhJ2moQ8y",
  "key5": "4mb2xS1qi5k98wNSBA4zfeL6bBpbszN3RHTWQAL5NB9Xmd8yXUGW8Y7tcvqDWVQfXw95uvTtP3dxavG3k9G8WVkY",
  "key6": "48fCz75PXDbuZCYBgKyua2dqEororooaygHDapGDqPDhzVToEzJMNKdoLp8eWJwQC1tG5Hv9Ms4JEzyMPcdmuYTK",
  "key7": "5ineD2wVYt7gSfx2xtmTZW58zqHebX1duY35UHCf92zxH32J1ywA6FfhngCzbgS7DNdrmf26Wbrw3oS7wZLtFGig",
  "key8": "4RvjDipiG965LyTWhEM6SKjMB8FYt6LTCRkSVBZbqHSQgwayWpBvQdQedKArQ3eaedBRcxmmzYrxEELhs7A8cSMH",
  "key9": "3a7ojFrMQgZLT1GtF6quZ8pCUNwmypGshqEuo1UkvDsmQ4HHRNZXNhJwBhwwV2LQnzMU2C51fhrRTZ9uHDdmfruz",
  "key10": "2d3u3L3s1fdWJWxvSbow5hTZXYBDxvY38yTdptM6PLqXLA8e26zmYiesQVyMLuMb3q5eFy8RCRauR5585VjVMmrs",
  "key11": "4g4Bcj8Z3KBeRUbspKtt3CPV3XvTCsy5BSKKiyhejXFFhHFa1HmsEsBsmUBnZMh9gdMZRiLsocdnmUuzfFu3NspX",
  "key12": "5zYogWQtw2cjfHNqCpcBpkxjju8Dbu3T3x1D1cuwYRCYH3aVZ4mWtqDyhkodxwPj6Kwz3jFGMjHqxHeYojhrWaBb",
  "key13": "4p2H1dU6iyZKUFR5CVz1eqLWhgyJM2Gk282EmJDigJoX4yZ8nwkqu3ThJpHqovia8vjEiYs2soHAWRKtLE6sViE9",
  "key14": "2hQPBb5BLcGuBxH3DPk2KqA2jwzkouycaEEcQoQWBWKsY6m9rhQ3qyju6yicHNXpR5XdhMjihbbD9T64xpZZD82z",
  "key15": "oCFwkdDkKvZEgjLbbbLBeKmWaLvPbUx96UmGFJMjEvHviP2YkGeb5WArxqZmNZpLy1RVhXwG5sMd6CmZWii1SS4",
  "key16": "3diC1DeC8qdjMcuY2kpEu1Ms5jNBrACvSQ3vmN3mvsuM282DEGYjy5vG36rUBXpUPaFx1zji6ExKxmBKiHC67ntS",
  "key17": "3Ay16HcqZtMgg7531BwumsgBdt4pg9t3V1Z7JniixXAjH9PozwBFQNzeSAidbc2Uh4sv9QukVGKxBgEdEGLvC5s",
  "key18": "WgEyLpzhNPZU5zeWEq4Sy1TBzVoCvZAkQ1pAHVhZrrJve616fWvjsttqiXjQGHvVWYSg7YK2ruePYz98xPjFmLL",
  "key19": "5zr9xLQQ6rijDgHDqDcVet9ViEJzkdh2j3C7UoejZesQgGvLvHMgtGmD22HjwWjpjNfz4QvDCSBECrPhJz8xxJ8b",
  "key20": "5WTWYKqBujQYKd1DhKmbn5T1ppdRWenoZjKGTnBNQ1EyUA7uvfFVZcUi65S6EXWK5dzGEUMynZQpsrknGAE8p2dd",
  "key21": "2ZdmsWG1gRkQjrhUAsVsdGegyZ1CRES5BQG91w5K45XPC58foFn3jj2hT3HgyEMSECLvhidggoSvToT5a7kbbxPD",
  "key22": "5BXrTvkwfSoCVigkKJnE2TzbrKtCS7hBEFPMAZvn7skfYPaEqY6enMCqwFmYv7s87H32StypAZtanWzXeMMTzCG9",
  "key23": "5PaLRzNpWQ4kVSyFe3MDa5Xc7szLP6czG7Z3abQp845vRJ531FFN3oGirz3juahpMvmf6dHgi35oCRw3qxTe3gkm",
  "key24": "HbrF2HMV5uQrxEGPSdXUBUMo6dCRvDPGdFK9yrs9jxVXyeBLK19TjRc1CHUH2ryycvbWZd1cYopppQzEUTL8PXQ",
  "key25": "53kGNhJAZAUvrL4YuY7k7XGCMUQLFugNYX6RgDdFKkcamw5WMgPyFghd2F3vmVe6Y5d6QwWk27cm2Gaubqq92tg5",
  "key26": "3rCuMv1hqGBonmfefvvnEpjdJCn46uXu2G3a2AsQ3V6FzKHZPVQad3ESSTfFWHZuj5pFqYXTTt1cFSPyJb1QfYmQ",
  "key27": "5wA8NKvFj2xviMRPQq9Vss2Fpd62VhNr8Xv6U1SzW46oDEi49uN465scnxdZnMfDuetMCUcuXqFfhSpc5sR6PZkg",
  "key28": "4S5VuwSHNZQSf39Bt346FSXdQ3uJq6gw9rSjxQgmX5PnDeDqU4TihcraZFMQ8etcgT2bv13CjjvifhnJpcmepcFg",
  "key29": "VXMVLsRqBKzuwQgpJe7mKtfAJDBjneWC9uuwt6vce8iAFVH6hftUWtb3kRFd1fj44oYE4ivJ3xsr2nQocxq53vj",
  "key30": "2yhSGrem9txRQLvvvwXAYtjGrQh86SBtR9ty46n5VCuUMCfvWkgWdBQZVT8B2h1WgJtWD2rsXgpaz1zN9USec7Sc",
  "key31": "5ZhE5DHo8EPxv62eSP3y76qsHXtP6svusZK5HnxzpkQd8ziazcs9ituhtxjCNrNGGNZUB34YiG4S9nyZg8tyhS3S",
  "key32": "3iY95uebagznaC5L2jctHdfXWVVyLWjCjsyh8e41RBUPPKoqrTYfcRhf4JCT9ThfvdWP8zDTjZG3v2t3pUjvZw4v",
  "key33": "B335TKbyoGg9ZaaxCJwiGWTDVJ5XgCjvNkAjkreSk2wygwjr2UkErRosBqC9GdVosQqTZjWEGwALsEyjHmtvkHv",
  "key34": "Gw2v7QrmdKfKNHEqVt2gvfiqba4ttqewnSt9g476TCaW1yafAekHHNcBgK3s9mhkP8X9ujZ1iV9RnUQCbChd1bv",
  "key35": "64myAkbHRz6bsKyQksXv2DCLooc64eJkFqoppdVPcniger7oyVCyBpwWBjswftGHsapj5wHwXnECKJggkCPydnUP"
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
