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
    "2mUcuV1GJeswYguwezxyxsbqK2uXAz9tQKzo9vZdhAWunw1wdizjnjBQJtTysEgkPWYP9aE2LnXkRRSQtdqk4an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39MfDm4jHGhn8SFe3ZTEX7hJmbNSys6oMYA3BDBiDjc8bpsS5Bg8czxVeGhrhCvZkviZvoVJSaVeUfsdtHgNVuns",
  "key1": "3h6uQmm1PjPegQyBBZuQ87P8LuY8iM5dZPFjuCTYh2JRtn8vqjMHgdprs33EAMXJNdERwytddiPEoYT1tuv9y7qC",
  "key2": "5tbtstLCfn4jJoGGAwhG6GDzy2RbeWATREEVpEoCuNkG1WppqeXxpanZ9u7V2h6RmAmpCQ1USfHc2VF1SoJPVrZi",
  "key3": "2STZq9zPMxvhGyb23BFoVDXb8FzULZ9JGvZP6NhG2tnRaPdnG9vWMRPiVq72Hp7a1um77dtqWsjAWNC8RWUDDX79",
  "key4": "4TwW8mSgbHK2t9Bf5kFzBgwxRTYLwd1XC2V9zuPxRdjkGG8KifSg499zzzvNKzwtrATsActMUrFCsRQiPUFYExoY",
  "key5": "5XnKNmEe6vuxS2JN4pKsrpcvaTw3veULaRxobCYyQ5rQDyHzr4bBmuZS26KycJJwHwq8mawxVQVm1xNDpFfxVMZN",
  "key6": "5so6cRCwTZYwdQCr3SWMiRPf5roJ85Kn9jSHcJ4LjFxrtLz42KQoXik7KmHcteo9M3o1uVQmUPM663H8RawLwd7z",
  "key7": "5aDEP2QUzj9fVsnxLEXzpb1BoGXLZMF5h6QrLswCqQ4Px3Qp6qXbtNtAa7W3Dzv34GvGQVAd4qZU6aikFcH1H3zy",
  "key8": "2mHgiAh2Wjjgo2vSJCuunU9rJE6C2Lq9nbePSP1nXjWWffRXaSjzR8hjnmTEXDaR7V1BNfzsCK2ZFzErzaixgMEX",
  "key9": "3sfux9DumNhkn65daP47AG15k85EdmBQ3YPSqVoWzJ5Dss79wRzrwvamqLdmq8DSo8JMh4w4uQRgUBdZwnGkvC37",
  "key10": "2Tq2DVL7hWpvLgZiXzkc83BAihBoHrp2FRVYYtFXpVkW1wRgJbLH6MMenyGcsaVgynUAMetdieZfFsMKpRNK9u5z",
  "key11": "2CUbsyNdiZRUi9UTBHsAV9FKejnDY2bu4sF6ScwFSum7ybggZuKoWbwoHtA3mJ68Ahu5Qw26zQyKP1BvxCno3zmM",
  "key12": "2ScRzzekc9SoSPoJjbP4cZnBE9hBhpHMQZbY3o456hwEQUCm3TziFH2K4Sw15Ur1S6PxjM1emnN9etXot4sNx767",
  "key13": "2GHSXDrsuEUxeYqE6NfQFTkUahFrb337pP3xf5iqj3giT9TicazWndD7BhWeWrLPsLnxC5tFBD2THgkdE3XKn1LF",
  "key14": "2tdbxG9FZcwfBQ1NDvEqqov9iEQNefYPzuRnRPJpG5hyqb1BLBruZTacn5HNdt7uTyBYZSgsQbWMtsiQdT1tRMQj",
  "key15": "5qJ6UWwVjQc3ExLqWVQFexxVZa98FZGjitrCZHDT15NiSY5cr9XEKUfrKw5661aGEKnFJkfG8dSgak6CHtdzo648",
  "key16": "4bgRaJvunRgma6pDWbCrPRwUJpZSoD37miAsyigWdB3E75DaUbSxDAjz4tLPM81fcMrJuq6rjRiARU8wqviTsvXx",
  "key17": "fea3ZTCmFuu8ossUH8xkWjrSauVASJgMjuWonDJyySb6wrBHmVgLYU5amnpRhDZyCNZnhzq3iHDyBEMGVkGdHu2",
  "key18": "5avCezRbxm2D4xTewUAEwWwvi7DUvTwyKUzNWcRciE5bAmquZLipaa7gBTHGRJPEicqGRzZM5vuQSNJnZ9puoRrX",
  "key19": "25MUh9K2MHFu5ass7KSB256G21GcUYcZeoAZs2mL5P7zmw7HSnSEAsk2MMuU3zn4wxJFSRHmmqsr972C4QMNUiU1",
  "key20": "27YbzKW8KDh3qKB2reBckG3vGeR8gx8Zadz9SqtarkRw5d53ga1GjbyHh8g1TEAuAAncpwoKU9TsXysyyjtKVvwn",
  "key21": "39GJDi72RcoEtfvL4TAHD5Ca1yReZP9bFE8zUPpVc3MHU68eckL78gzhu2jPFYqbWSq219ucfFYaMTkYbqqbzJ5K",
  "key22": "3WAYkWmTVy42nkWNhVuLJX3yo5gJynRSHMHAxJBhFzfVfwzWUL6DfJXg9ntmeHBLjrvYVzZXfmed78xQxg6P88Jb",
  "key23": "BFrk99sc8mwDASGUdrEQEwJfd3GadJvosGqjhg3GKWtddCifZENkXvjJ3o5ZJc12D6pHo6xJ9cyMN8vkJ3BDokW",
  "key24": "5WVKf2P4mp7uEC5jzMxpqJmm1Jna2FC8gQdFSWBPTUr2hbKHWGoDeo2WcoJ3T5nWcYiuCD2NBDWm96GSAVsnYwKZ",
  "key25": "5bcew8VmZ1JM7cRnLZCD1jRbVJ5qsTjr8ML5kkYhS6M7dsbP466Esu388v8kCh63Ez5MwhuReiBdZ7RY7ZVDeyxh"
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
