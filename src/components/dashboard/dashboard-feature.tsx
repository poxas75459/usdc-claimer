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
    "284Vgy3FUYWyxJwTNTKiNj1Qbw6yiaV7YWuXaKV4wiZ67CQNaLj3egcUoX1QoyrBfUAdh2yNeED5nZja2KGavDes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PVqbjnceqUBuojgJptAAGFhnBg1V4i9pHcnkDybGs2Bsmat2Jik24mLLxwEPTNCAyTNvwJQgPGLTxeUsrbhegWn",
  "key1": "4TpkUZX2zh9Q7vvvmKJSqsXa34ix1gak1tqWquZrjqEejPRuj6KPtedJ9N8wX1PadLP7g7kVJaNwTHbaTf9SFNmM",
  "key2": "3yTVyKsnSWeq2iMzwxMvLRzat5a4TBVtCqRDrMo1ix2fFxHpUqZi4NPbP5zCs9Y3rwYLovLtgjRv9HG6s4JfGhSh",
  "key3": "28cYESF9ZNerdKE8e2TFbAopcR1KZ6Ced4JByxkeDDU1GtgFKNaY8r3D8gdj7E2NXpQpC2VhnJZNRA9eQm5BBnvL",
  "key4": "3McjbxKyF8MRXaHaL4QZaWHuiQxRYtTvAQCtTLgxMQ2yGme1dy6BPbwB85hGC4KBCVhUP5PuMuh4thxbtV8Cknon",
  "key5": "P9aAkWYE6bZoUMqRUmYMJZFHdfPdfe55yZVS828s97Q49K9hr9AkkVPR5xPAWk5Kc5K68aGVXARNZ2qXgrZUKgy",
  "key6": "5cnmK2Kswafi67rismiXuKHAumT7sXv6A3hvgvoJ7zMU1QPPALx8Fq7axmDeU2qQt2ikTL4DTUdUwxsnXPvhBSYG",
  "key7": "85UnhWCPZ5aoY9eE1mQWHuUSoJbovpv7Tnt47hEBRWsvDdPoo5L4xCWaEgVLfMwSGzcJsWjTLScrC7fS6MRsx3w",
  "key8": "5oxc59TujHyszeR72gHDtcgim9ckqE6pHPe7UdW3Ds5cFktaowKQQvcFtuMFXjqXHJRihNk1eteQekKgaZ3Zk8SY",
  "key9": "4mE4qR2fGyfNmfqGAfGxVLzPJMXsVCxoepzvi7SQsaq9KfeYuJQLMja4F9ZjmZgB3yZom9rQgxCfBFvgcMfXsddA",
  "key10": "4AZwbQkPae8teKY8kBfuen19eqkskbvPBCDDuVbASCCyzNVXbBUNtftYdYEeyQRsFaNzt9rhHuwt3oNbAwgWTMdZ",
  "key11": "2KWJbpmzSqvDq9cHdoPZMEwaePTXzmCpNRCtQyJbW3gffuXAkMaULucVnfdMQx33deh8MqkBwjv7SUbg7CkzUANp",
  "key12": "5wXpvW2i8jDitJCtb4Xt9h9Lf5eH8PmJ2dWZeYd4PtcFVhMoHDTaz6k2ftiTgZZsB2WUi1YxkYkht1nKkxmP6wrN",
  "key13": "34V9yttQqvuFMQeXeHHU7oCLpxquaJc133ZwJnJB6s95ZjfJPqurPRmDtYyi1U5jxrEwW3mKXjheNug2in26Yv3j",
  "key14": "ttMdrbBgQpeiULiZhfmYxUr7svVhLjbKCNTJpRLSywFhoZuEjzkBUuWNtcU3LtCjjUCHKbKcT2PioApuEMcsr1M",
  "key15": "4yNztUYvEeV5iScJJsLHBr5mMyy7DAWLFKivZwHKbeb6ag9DhULCq9qYsYmAGPMMdLrQRdTRN4pQgrgZqEMpGtiX",
  "key16": "2QwoSXh1hwgbKqkoqnwfJ4mYCZA9psifdDEhHkDSVwXf3cnfWgU6VKs73wmA2xEMV1g9XMeXkRMn9hPEnJULi72u",
  "key17": "3TmbJMo9xZkXiHk4RcZ9MsUj8R3qP2hH6t9aNkybjkzNtKHWVJmxeXZotKQVJr9Y8uU9puemdeFsYV2UkAvC42rK",
  "key18": "2gCViuvQ3tpgR5TBVCzrCqzxw3dNsjTnqE5v7wKX3jj4oqZQm8HvanFfnMkaA98JzW5vdi9uSF916g9zE6qJTfEF",
  "key19": "3WBHVGuxKiUEHTuzA5bxxTS9bA5cut8Q7dWJ8NDJmGk2vJQEP2HoM3xMc8Lqyi2fU5T4U6BzUDrAiyaYMSTFQbqv",
  "key20": "ePa1xCnY3xAj5hmpRQbf4c2AFcXJnw1G9VxwyWeABSA9EtqPMYKjtzbZzZu9iScn7m4LMSQbUpd3wD2P63E4pLo",
  "key21": "akAxhA2Zd6MJAG2APy2y7GdTR1jp3ENwxF23iSkdYMxnygjV7rxKXGLvd9W7KxDEaybqMHvJ4VHoC8m7nrTAux6",
  "key22": "3o9XotuhVefdXfpeXPxV1mgmYDcWpHAq6Jz8RwQQ2ontjiAFXeGwd8SSMZCRJSpbZHRAzb4dUP6HfaVmA6cF2v19",
  "key23": "3JD7rLr7FuKYtybNGuttYa3GKMZkCxafVgPx6okKLYZoK8jii5fnkS8YgdSkogRDQ6SWwSuH4a8cnMdvaN7ij6tm",
  "key24": "2m6fF7EY4bKbiixsM3VSZrEAdgBjgFiCR58Nw5bkkT3o7xkX4pKWCuieFqxBD3dVKnrW24F32rT5KVtvCbSuKBUX",
  "key25": "5A9kzTZgnKFTkfE6f44dveLRNnhC8YpPqxhdkgxT6c5nLKjoAYm31k5nR6uMG49XXrUqxWrhVocjWqNHM4BHLGdM",
  "key26": "w4K7TLAUMiw3Lbc8E7UYa5Hw3dP4T8CG2cYpB1SNhswPY3hbTspGuS2oHdyTgTSHjkxDixc346GBNgwmiFzHdTm",
  "key27": "4jPFekCy1QS4qPc6xV5cU8CErVRKNZCBUgm23P8m9YXwSww7PdA6uxndKr8QwdKxfbZh9tu3s4mY4NubcFV4JinD",
  "key28": "5YtMsN7TUcr8Y5nUXfsBrrgngp1XWYqKYGDLNwUM8zhbsADyP2rQMT5RQZRJopttva6EQ2wGfNUC3WaRZaUTMfEB",
  "key29": "2kVTYhwGGmP1DmaQWRHtyJ3N8cKXx2cpMKgX2xo2MCUDjTqLL54X6CxMz5Bv7Mg1dHaL7EegtvDmyLHtkzq8vyXi",
  "key30": "3WpsPPzTrMVjYi9nQVq35wHP6gW7vQWssCEJu9LRRYt7A5WtECwchHHPDBJzLFyBtgmPZbr8wkguQXWmYfyYMJhU",
  "key31": "4AFShuHjwUsr7BJvNwY87pCL4dd1Sodfkqw3fi8emtKwbfQpxpr28PKeQPeNzmUhdQ9EYUJFwaZ2hCiQcbiSUtLX",
  "key32": "5wy7vQi8U1zaTQb5tKzkyLqVEc94kGJWYmncPtFjxBXG3oueD5tQr7Zp834kVFLRRhrZKi7NaxiPD3vHJf6xs9nr",
  "key33": "2gPz1feDxXMde1k387X2TYjweJRgNLxs9LWXUyDCGhPn697KFZYCVqXg1pTvzthi6wq6RQV3NELuMfVezLo1auDg"
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
