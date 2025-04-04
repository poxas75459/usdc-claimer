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
    "4fJPbgU66vEfM3G9UdVdxmRzfBtju2v3b8QA2gN1s7noWASrSHDQC1FbD1cJW5casC34Ruqq5x7fxKBZRZBbkpVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ye5HyPqhdzC7PUkdgsoVzUQXD8eXteXYSU75CpPS4B66RdryKxp9dRfqC3dXA8o34VahkY9U2BJzAFbBRXoQP2",
  "key1": "2gJY2G4Xj7J42HHTZn75VUJGixeBhtjaYV98bYD5JdyfqSk6KQdSYPj4DPwdCqGbXp2KrdpdVfXHmwUwzrrnefuP",
  "key2": "gNPRKzQvkUSgT53eZBqUC266jFPtDVU9gxNtVDS1mTBeEgWpjLx7psU8Ae8BBWrVkzTy6NyYxvtuWi6hx66gKqF",
  "key3": "2gbNZ1rSmGUbucBJgg4Kx3NjKHDKFXe1ZxzvUCc5jV3iEqMkGHXxJj6uiadHhWu53ESfU8QLmNrWD2kuj5pLYQJm",
  "key4": "4bjPofkKmNp81zFbhjHjJiQw8n6HWQvQ3gXVxZS8q9x4cDaf4iakhKEUGQBY5ue1F7e2gPuTazdim321LWivrN1B",
  "key5": "3ZS2k54mE6oxTkyChykb6q2NaNkoRLLbjUenmDNXjPE19QmXzs8mFrJtWFH2h61SLauBQkTcpgo1ryrfhMxyxfXA",
  "key6": "2TELX9GxB8HWGdMTa5AhdwjfH2ga5tai5Yg7JPKsqzEQwjLxwEg1kRbP2mkLYGhKuB9ZwvT5fFK8KwfBhXzTaAFC",
  "key7": "2GSojz7SWMxgMui6t7LVgfFzizaS79vZEHvUK3128J9DAtNE7BjJVrMeAHcVtaTAirsTrs8cE5ZYVthuqZakmeht",
  "key8": "3iizgaGUfjQuLYGoKoLjFQaJKCMu8jPRZGqBinZFgUQp5eAqkm7bvr7xVQfcjnfKpSMeqbgp63KiN2JJAwAyhN8r",
  "key9": "45HSxtBUKQ78BQugPB3vUKtB1bTsfNvvNoixGPki5Pfw3KECLMiA1kLBgS8Wt9naSAb72gLSUUEMKun6rwfx71rj",
  "key10": "33LcTj8G5SzRkfCz8vGstU6vm4AqLX82gqrkDTpjVejVMvXvnSut9PMmJmjGuiT72a3bgjCTfYTEJM4acWLTPJNk",
  "key11": "48MBAtMaVhvVgAo1tTrBHsk8mekPFrhbrkntiDYcysbwWASr5vjK2SgPyfK3rbj63TcDULmoCMc5YcHiT4LPzXAU",
  "key12": "4TndwgxufN6ak9V1xSpRixH5DNox3EoaTNi11rhQQbehAT3S5t8F1RHGt1KpW2YBEtq6NjhWwij1AGEKceDxkpoA",
  "key13": "8xhzxVPigd8xfuTVuMZgXPvDmRoPxTZQQPxuMfXheW6iJ9tTaVA1adMoiDyatFh32pHauAzQtcQ7wky8DjCfpr3",
  "key14": "3BPpGuRszVGEhnGrmpYDFcL898Xyxa1LXrJojFHTijZmzDxkNuoUrMEf6PwSyvLAQHGCgsHtUivNa57TkcbhtQS5",
  "key15": "42LcoR6f8fTwqkzcVj5sK6GtkMCXYGa14PNBJboxXyXeDH6Y8t1dijkGHjSUT7xJsjz4bsEdHMQJr7ACoGSosJMe",
  "key16": "7FKm8JQ5fJfQXauMoFK8B76raFpdW7nXJATQ3TEQ6uaQsM5nJmbL9dnS1b5yWnPE256jyvdMn41axjDejDyNndW",
  "key17": "4BRDQRdtUH25ZhpEscurdBy65mpJRbyMAar6ZW7fanNSZaTHQ81uuLYPQCW9yxurQmtEWaHGz44eq91pYLmP7uVc",
  "key18": "537WwMZsToUQ9BaMvDhSrvTkfrvGqTaeu9TLf5n4wM6VSVfoLRfer4tr4MUB5cwtgvxQiNuWAJ2RSgJQK7CWJ6di",
  "key19": "t1hpDBsaykVpwDSMbnaiySSrBvgAg6GGSTj7SvJG7R9C4E9SAQBVyxmQ6PdxBJiECpq6fjgMqwLxPEor2p5W3rV",
  "key20": "2RXt6549GTKZh1oQVdLixzr1GYhtXbHTr3C3QmnVSSE1YACkneT2f3KtYG6iYQ1dUFcdbKTLRYtavPiNFvT5HVPP",
  "key21": "1V3zDLWY1RyrpeBdN2jcNMHU5nznkdHqXdbX3dcdMa2SbdJgL3CrP6a8svLnHW4s8g8goqr4GwKW2pHTZYyQ5XL",
  "key22": "4sf7bTAxHK3bNerSZ9ikQHF1WVZ8cFaBAaUTVLcg1MdaZDqK3RoQsP67kpP2PGtEC3fugGVz5GbgsFMyy9DMMLyV",
  "key23": "4n7jLcRNCYvE5oZUXfJbqc6n5nA2DWwzsy25fsuroSMatvgZdAN3g7jgdXSA9xPGr4n2JEZbLXUDADLgvbVf5SNn",
  "key24": "2fep536ix7V23tRuco1RdNin7FPzWy4vU8hvk6yWE3RZqYtf4fz5k6F6WPW4FwxgngJheHX2K6AjYx3tFeJRWaTd"
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
