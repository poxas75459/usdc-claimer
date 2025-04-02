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
    "4HxbMSCRDg7XqyKGbgKYcWKYiDMdxm98RogXDhBUKyotDAZeszyref34FcquVX4PfTfeT9fmqUUFH1TSAW1DM1iV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Swj32uKZgpHyojsJGut45qtnhpytqj8sAxXaQwJTBjtGE515badLYPznksPy7j2MbMgMdrKNYzXQkyS61dpiog4",
  "key1": "3Yyex1uJozawonr8p2UDVuSVMnmohbmmDh7vSDiWwthP3rqnYZoVXvVRFzNe7CEjuqdGFSkusR4wL5QtMdeQFuq7",
  "key2": "5MQXnewfDErXk7cmhQtCPdvRUzkf7vY4GT1Vc5pyv9Sk9THdV1DKEBcwzEpzL524UUS4K1ooz8M1qrgWz8xB6KZg",
  "key3": "CaA2gYoRuBNbmK1BPfUCvEcvEhbN1wRAQAxdBxu8vGeApVqqpzkideP4VaTxJwV4nqcyxNM4zHDW1RFgDPqLQNg",
  "key4": "3G5SqrNWJxY95ZR9VEQojjHdSb1SCxPRJ1DNs83PK59JPicnTmWnL9mBeoe1L1BzDs9DZ2PRQqBCUCbpt1KMcE37",
  "key5": "Jat8gj1WGZJEmx8kmRj3UkdXuEngiqBwm6PjMBgyyrzb8DSamp1TMjKiBUVRaJuYtL9vAuBUTgrh1khaShw6r9g",
  "key6": "4JZdRYPQSw6Bj5CKm9M4U8euPVfgxs8h8PVqQmxDwCLHvdzqPHARmGjKG3SAs8vDydRvLCMaAKQtevBD5vUJbfwa",
  "key7": "4Y9yiuTiJTbeAbVm9WvM9wNK2KKqpdzn5KdCekHff7FMgGuV5DwNkvqvw1cz9cy3jivLpCZ7cfQgRScmE25pCQnx",
  "key8": "5cCERUSC9P3LtbKZmuYNn5Vbjj9DnaB2pDgyJuZF9kPeHKnJt778s8SNvUsfVLMMh37dDuT7PV8G27SGvr9dp8Qg",
  "key9": "mD3pmaj39jX7xYvT5kS6NLSDStDnBx7U6xzjWbwQTBze8pZuYeUSwLqe1s4U9YY7wwUFDjzEKAfL6sufSuzfmuE",
  "key10": "3L9HjTijcVLayYnnHAoFGr1g3fwuSmCRoNkRugoiiGpkjLt48KCEojsPxDqSb1JRjoyJXwjfaZiSAjcoWDcCrsz8",
  "key11": "36x8KJf4kM8A2X7oTNbSVm8ZRmv6YDV9byuWqnVHYgZJaNKQQZvpdco8UiwpqcxuqEserkk2zqf5adqs3dh87b6E",
  "key12": "bboUzJLXkQKnsxNDXAPzf4mLK4UjmgKutAphF1vxvSKFJWNMgr2MBxAhabjT9YERCza2j7f61ScQPRHYSEVy2gf",
  "key13": "66F8vB4sR3n9jXDTbshJ6ZNdVD9jEFawCMJsYAS78yUqo3bQfmB1dovJrkWTb6NRR4wcWriiqrbQGaDWBS2tqGpj",
  "key14": "22bTcZbi8Z5LCBRoVBQvDJuMG4mVz6QvoV27EyoL8QPFsgdRP1TktWZ2qCWQhDHSWgAcndAW2ibVmBnT5RdrvSne",
  "key15": "MN4etukCfZZRL5BUAKhxJysSkCqbDtTLoo1qMRY1Te9GPSX1YJtsprrUZbxee29VMvMtDZyhmR3jRSSA22kFcde",
  "key16": "2HjGMhaBsaSMeL4hP8Bquq55h4srmz6vBjgDYyeYzrg12pA3RqFVpCnLg1Mg2Bxjw3sxpWLt6rvG7ka6kU6rqbjV",
  "key17": "2j4MFpUwgrvE74MR6Fo1Gyk1LSyk7968hT9EcHTBn4thZDY4ACZiPfzas261EWg92KwGNXSiWSBhVzm7CaoT5kAK",
  "key18": "3t1XAUb3GVQzBNyW74HgjVn3z57Sw94i2NbcCkKfTdwYLaVoh1otDZPuD6HcfaQfVxZw1CYf8bpiK4RPycyKNhxA",
  "key19": "3pBmecVjbHA7Ktga2XqXkEi5UKh3Vz9B3FkpwZFEmjneE2jyS7Zrib8ZJput8pw62o3VKiD9YQoCtMor9nsyaHbp",
  "key20": "4UoD7sWbPzw7S9ct9dZdn5i8khjAuSAkSgKxPh47sf4MVfCJHVKUqT6ZwzkrcWZqSEghpq4SdUGEd2mgMDKVTWZF",
  "key21": "3J1GbvkXiMAwnCyF4kXrSV3i8EgA6Aw1gspHYkcCPhePVrZLgofphdEF3kUH9WdpvhDp2CnMEJp4RPp4QNbgcCKp",
  "key22": "4ZDYVhD4q5F89DWQ2ciTGnc2STuxviU2Hu3y3hNZXT5eMSSLUJ2xBveBAUTfoXzrnVpbXnuEJdn8PHkiHEUrGy7x",
  "key23": "579c3vt1w3A5ZKLWy87t1BQggTTA4TiA5Dmv6icpF4tLoTwPkTvfXMJuTpcuz6MSzr52RR9BgJhDAsPRpHdwcbsF",
  "key24": "5U47ojAAXwuDCUsA63QTJ5PceFvCNdoxsRWQ2HtLt6pQ7EHmoNeABPieiJpwQFRDLpMbM5zTfvexYpKESggBbqSD"
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
