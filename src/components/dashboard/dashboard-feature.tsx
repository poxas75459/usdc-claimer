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
    "2feiYu2QKiubKRb8knjEhmkrkf8QhJoDtgKKygFaYSm6yHR5opJ1nADUp8rbZoedDDs8oiyWy18YC4de1ENJwG6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TGoMxzXBTEp7Uwt6teJsJqeK64jHbPqJ1BCDW7eLk6pHXhsd3yuNJ8WRJMF6doyTNVSAoFEfRpZK4vAU3hwnABy",
  "key1": "31D5wn8o6ez9Seapnp5DnJTcMNDnE7f6HMydWEZMfZ7eWhccT7Gw6NFAkDc9ATCGMgRVRPuuY3QHbxo3Kc7LcdCE",
  "key2": "D8g2D2C2eWGeheT6wTnutwajP3h8mc7qSJzeVgdGdq7Lmz6kbgP9PiyQchMdCScwqQede2ByWAS97xhXeaR7eYk",
  "key3": "5K8BuA1q2E8FkGYeHKwwkhpR2bceFPBp98Bg9zgba847U629BzzxVzs2HJyTHGYSKBz4qdG6TrP3zCLcsF1FhuQz",
  "key4": "3grvMNH2ncpWbvK28MJ8Bq6cmQwLK6pTTTHXv6wJGDnQfJhUuhwAjNJ3CTL4sgCbvSj772kBzMuxru8XkFtVvK35",
  "key5": "CSjmqL9d77tLD1cTafooVWYHiCdMXfsrMEJDxSBtfcapfGdao79KPnbDYATbKEbomaoWAL4CYzDtJ58RMbbHB3P",
  "key6": "5BQEAXgWMdpdswPNRpDfkSP41EbF7iLjhgNt8hVTFwFVZ33uJNXRPJUEWMeVUnN5CGU5SGtePvaLngMQUjCSCPKm",
  "key7": "23mJJ99r8ir91fkBFtKm8gHeFgHg4DUEAKNpBRt2XK8VRHfUdE7JPxxZ8x2n2J2MaZBU7g15Y6qsG8P5eRsdYF5F",
  "key8": "2KASToNcG2bsXd81xz13dNDH4ENpM38RNba8auKPT9qEXDdRMVkrFrqGsxeZJsEUv3R5uGSyy5hGKYSJDqpV6vEY",
  "key9": "5PgCNzFyWhkJnuaZqN3NY5b9q1wNQnkDAk2AaMemfpPKvCriqKo8St3apgKV3hsYxzTED5mVWrs4LPRDF2M7YdnM",
  "key10": "Bpx5gctThGzu7M8tWAxushYsksfaX1N7d7m65T6WG6MAWBFZNprgZKr23NrGfvD5LtNeRf6F5es2xxrD7bCD5tW",
  "key11": "2cwb1hoACGLnyqbDnnAVy2A3fSci6fhBYQKbGZ6ZSx1vFYrjp8nerrDJVkiqZ6uaRCU8n15G9inoWz55XJaRjd4Q",
  "key12": "4bEvrE4XzJvs5qfyuHAnQhUoJ1umW4cdyBps2kLGMJFVqL6gVX8KpmPAWsUNU981TPd61fXsNpWNATQtwQmJCvf9",
  "key13": "4SEATr1sjaCMYpKet4aJ6XWd2eSZL3rsFqojSJdRBYG1ghdA4d2j77j27XtyQz3RpVdsPeU2AdWDU2ze82hoRGjs",
  "key14": "4YAvfEGiuHFUnpToLanHoNPuxYcVb9MpP5eyyfJiLFKVSntAArhvRcaCwYrPF3P6SuhgkZdo5v3nPf5XmG2wBr8f",
  "key15": "61ry3cXHhenoqDySWosQNzCPzRPLryKvhpHPa1x4ZVPbmoDbbZf45ipfr7AgQ24pBuBf5HqqEPk3WPYkwptNJiew",
  "key16": "56Y8UwwT8XxnuE5uX3fUhpyhbroRsGr47Jqx8zVjjHiB8XLW2K9mzNbrqeeNo2Ed49bt9M4gd6jHDXbdLbUdvJ5h",
  "key17": "36qPzaKRbpVc8eWdAHjLrHDihYk13ovPdqFm6LFEBCtRVvqDRvD5JNLRAFNNTtzvVqthL868NLMTWtYt773j3Bss",
  "key18": "1xYoSctzDc928hYZj81pCfGzyNhh6SKbhP8bmyhK6XE2hPYoPMfKT3V1NLP2naoEJyVAYsCwmweEjzaVcUxspM1",
  "key19": "B2B4AxH8X5BudA7H7H2yjCsPZm1aYEXQLjafRvf3CBG3ARXRcvNMfyCcuJpZu53zT9B9S7vJHtPWds6dQwt2779",
  "key20": "42FrreNmWipgc6b7tFJDaP2F5oUnViT9U7mVMZJjYVCT6CpKsnGfmgEbFxN1MCxed9qkTv8jiPGqnK8WAH7LfdKr",
  "key21": "3e1o3PhpK5NvijWBNhzPCaA7eYLU3rpDibAR5j9N7t87q2Pv7YsJ2eXUVtEpvRbLTYxGwtAahJ7wrd2i799Us1iF",
  "key22": "4jcXoRHqFXTtddpnWdQE825QdZXv7W9QRiugdkiPMps9HqksdaSFZfkbhSrpajcBy2oYdksswAqvfLY3odh36ssz",
  "key23": "39wUafH9wUjvDH6anUWXyeYJfhAHRaP7kZuTHvBjP95StgLoXVSyygUrhUU93WNAMfe3dK8ETpNyNpPLLkR9vG3n",
  "key24": "3TomR7Xwh2JRbUHUo6xzuHXBKH1kqL35C3sGUCgfi1Z418UafxNXEcjTdWu89Awk1j8HtsVP9fgcEV9U7MZ45nce"
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
