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
    "5rindHNg3WcRiDF6K3KJojHC5Fg1FMsrpCwpWrBoXFsAbf69y7r5jYFM8A3xqq8zvPW4CxuWLz6izbYWv74mjp93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7fX6dhNQH6WL95dsVZ853Nd7sothWoVA5hpCW8kv34kcCESBMEeZMnrPBpZD8rVmPu6yiVvGaHthVnnWdf5wJf",
  "key1": "3hpDrzx9pkXeodbKEfLFE9TenYWZgESRLFjLDQc1kykh9qewZCGZknUXVz84HyoVmYyyVFboVEfpFmxicrBjt3c",
  "key2": "3CPHQ26DHNdhFmejQ8mLH4zsmir6fcvECddcqcgLqgRro8NaemJVYbQZXyBrNGCo7CbiG7PmiJV81199cAns2hBe",
  "key3": "4JvUESwajBJX53k968fiXq5jU54emFdWjSK9wdvXEqmGoDtvckFVJMk8R7wCi824rfBanmYBSUouf7eYBwG9B9vE",
  "key4": "4ueCB8Lb7J5gAVhwzcDSToLvXiKoNE48XWEujDPfpDgHVqcmSdDaRCPfCdkuN4LKz2WVt5bDRAbN7Pac3CtKHJwS",
  "key5": "4HVaAopjMZbnU5jt4DW9DVqA6292WwVibEjkhZ5TsuRgeT8AbuSsEgqJ6MuXyWz5ND2Xep6kNJdv9kzQfVTL8Leb",
  "key6": "31BLC3cSMeqNx3nzWbogt9bUpeUHB4J1tPcpfgRpdbQ16QixeXMri4rNidtvJAe8sLBoUcYF7THznbUwCouzM1Wq",
  "key7": "5w5ZWAtchAgts39JJ93v1BUdCw3swYAE86ELdzV2Qk8K7UGKMuvmdMderA7GPYQ7RVHoN5WR3vFX4EsQkbTxDHSL",
  "key8": "sQnCEbKwaJCDBkMkv1Kcpj7bGyvTHHLEe74vrTjpcJER1dXRbJbJomeY2XMQq2sXRQHd2VW4rQHmWFHTpKfpsR9",
  "key9": "5TQbM1hysP9NFqBPqNgYVXV6VD9NFdcaZQNYLivKPPMNGWGkZaaAK8jQcdpHtva7375n8aYEmMqCj9ULxGG9gxLC",
  "key10": "2FXc1DM4qPYPeSWHEMTpptgsQvMERXNwEgKTFDGw3SfJYJcQHHD79nVnMpcvJxEN6cmrjFnPqGvnJcUFB35aMEZn",
  "key11": "61d27nQWHnAeqWQNhswXHVVADhrofvyMB7324Ap93xjsVi61dc6m5YHsmCVUWM2PSFvaEwdfWL8i6j1UzfhVNXQ1",
  "key12": "3wdTuJ3av7VyWDD5LMueFuXc7Yi1Dt3qgw5uze1JnBLkWTPJqRrFBft76LoxGwEmNrtqC4nzGR8tK4R97Eh7ByS",
  "key13": "28CfyQDvEFYsSt3dFzaTLQWUtxXhWLZ1Fh1bVjmUrVkE7Yeg5uejNSWNw6RzaTspopecYEwoZDee7JCi2W7R5R9i",
  "key14": "wTgnxADijuR2gJA2gGoqeEVithY8XS5pYxGrCSxtvCkCwiuEYmjePmZ6sK6W2Cn5P4jTdKyEAdBEdjbxCqcopkp",
  "key15": "jzpQUF5K38zWHwtAfBKHhCLDz7hRJ4Uw5cCyXvTLbaMthNE9YXHsBcXhsDNNFYB4Vki9o9LwPq755Sq9NpRAp3Z",
  "key16": "2oQWo9gDSWdWEigf8Tck3yz98dFWg4RAyC9xjCVwN2fe9QFaKCGchk4t4zvFug8P3HquATG8KKhFJZZ8XYZZnVAh",
  "key17": "2tiPh2qHRE7y9GAs9hGxeNFcqbNPhfMVsoyjhx6H3YwFsPGLXdk4CvdB4N12ydGsCrhUj5MmrCTup9cNbhfntjib",
  "key18": "2o2mL3JJ6FwX44Xjbp1EerD19erHFZtzKtr2nDm3zSB7vVcVuhD43TW8PeFjYJ5g8dh8rfNDVPS2NK94w4WbBnXV",
  "key19": "5o5YrDzw5Ppx9eQJNpWpc1w7pwDnRvrERzsBdPFBxbVqj3mUHVRTo6F9jvcZ78UCqrAJT2zU2Jt481VvTBadbEof",
  "key20": "7SH3SGh2AhSUATy2wQsAi2GJSyEvMPZQSf9AKvM9NQCH6j8Kv7Kp3ZryeZypBQng5ar4z2BZtMYRYkLqKTST2Zm",
  "key21": "3bg5wQhb39TYShY48TDtkbiXbHKftZrkjLzoVr7KcCKAkLwR6vnegErDC3kNCmKEKuPj1Rtqz7u3UcoLdJfUsgUW",
  "key22": "465KfuboLL5zMBY4aJ8v5c1ythxBmdkPPwQbxTMFMDhAdVVWtkkkX13boojrQViauSAdd9cDUH2UaPEdAbvLs8u6",
  "key23": "r2hfPbpDhjhpCyaGok9jwqC5K4P1BtuYouUBrtXtBAk86ThzdApLWnjFwmHK77x6fpG29A5EnjdXMGPiXPGenkZ",
  "key24": "2y7iyPTaJvQcPenziESv1ix7XeMQxobKtueT9X5g3dAmmXJQZcwcuZx93NQRdfcxcH11EowLG3i1RL3g4PqLhsCs",
  "key25": "4eT35n9Y9umtieweJxCoKPaqFdq9zAfpbzsbRHrvS3dwkuvHjjBSC4EQCgC6rujwbKc5FRgCopu2A4cvyeY93pRo",
  "key26": "2q3XMFothQjzUmTuvvSVRcX2JmwdYmAvE5rVM6qsYNUZUcAmMj4o9qNnUcWaxxNc5wAMwSSTnr79VKaR6TJRs7U1",
  "key27": "GXukhSdCTMBab2t49LdWZ2rZJGrjzRA3VuecQ64KpZ9GejEpJ7LjhhRxzDFfFuLxrHKofvSdsfQvgkVtrQXEzPE",
  "key28": "3nTwTA7oK6VJu9iYcyyAavmRk5fL6gLZsLNy5wN5sBpptSPzDH5oRcWSi29dGB8HoSSUTnoGQwsiP2Tce6qThMgF",
  "key29": "29XQsNqkK54JpE2r7sk5dMFKLJptDykTVBEjaD6yH8smzUUpTTp5rDEEmSNfqsUXsXBBd7Ho4mPX6pb9dwoHn9EY",
  "key30": "5B7tfHZQS9GrzXKeFfC2zmu79ju6L11K1wAdCtS1ZLkgEbpRM4mKWPDdxfNkSbgcyggXuUEFAQnZ7SY2bBA8y5Gy",
  "key31": "U1nhadY3eVamV68WZsbTWz7ZiJf4ECXKteSjSTF5iodD57Y5WYskPciq1jGUxLCgL6y4vmdCuAfTSy1258458ia",
  "key32": "428NHFj1Tm5Q4CWFLWmU5DXvMVxigU7nvjaXHGv9cUxTjquWMpJtNmo25WczNgT7hAavyn3fRbkrQZcMWgY7m4o6",
  "key33": "2oLggcrktCpboii1i8YQT6c3voWruCK66R6WHxU44YbZEXq65NiKYJdUpmhustLzZ9yxu11U2y6uCCFFsTtXxsNr",
  "key34": "4jrZi4NkxBLr21KcCGks1AkXRXVMs6yUbYbdiHjcCrtW61oWmncPzyKgKPHPsNTVFNpnE8p2A1dApSTfqJVQoQNv",
  "key35": "5C86uZhoV2vYgcHuiota5B1ERCSsp2VTHXykkiJNudEXWmPRdPMySR1oeqERLtCR4T4X4jLkEdVKtJU39VnBHVKP",
  "key36": "3gw1qFnwjtZbqNYCqPVs1czpmYSBNt9cjs6CJ6o7YQ3BzoCWTEZcPKkvCmdwcdTwmavGrkpaAZ8iQ1u6mwSShcDA"
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
