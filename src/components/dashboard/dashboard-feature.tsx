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
    "2k3WVuBp4GLMB4pminStdnNbqkBfZR68FcRxgBGjJU93XwmwtPmqjboqwmis4cyoxRUEJ3BebKoHzQ2ZwF2w3Pww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wa7grXL9S5otwfucmL5KAKnSX6DTWVEErsb3eZ8gNvTB6ZeyrahDnS5tyWAcQaD8dteQyfhcqd2FGwXdGSj1JqH",
  "key1": "67SrE3FzhSLC5oaecHQecvfNtYE3MqznNwLjn1DCkfB9JdXAtrZKzrmyDh8fcyePnkxgts9wgPZTQ7T8ZBCc3fdW",
  "key2": "37c7Cn1wKK4k8NDE2LeufNwDWcTLQRznGSMRz7q9nVbGTCG8YHhxpWfRmGsVC4i3jETgfzaF19UsDWqGNaXKM8Uw",
  "key3": "3pURgQsDxjqE9AjdBH3aJ2991G36d3RvYJBbKYPmp9ibAJMt83E7ddaiPwGLprL9VtE5tnC5XUNUkBvXd9kGhxM3",
  "key4": "mxfeKuCgDTNEsmkgr68xjRfEbqJHCb6K3jBfewHzCikJh7fRskZZfaZatJL7hPgJNTaMyyqxFBDnVSWRX1b3tDx",
  "key5": "618GjXKufwbZqtvozyqdG6JJj5jkL41tJU5at4os3BaYv8MZnUCgGvryxr6MkHwpP8J9wmwZPsDUpL1b72wScNBb",
  "key6": "vaEwsV3Wtco5Yv7oJnYhQqxavD4hsERKT8hP6wbfVBL9UePLXnnPMGhse1Loz8DBytqCMzNiKPR5Hdi5D19d796",
  "key7": "5pKPr3q72sGPRjNEqhnVMBoyAWoDpPhRnP2ChKm2neHZFzCd61cVH72eHgKMEDYKk1gt8x7KPAfJyGETFBvX8mpJ",
  "key8": "3KoLcVwHsm6r1Q9gSYnktQ4cABA7NVCNjwi7DCRxG4c1WdEbAAkjr463x2FTENxBhFKR6u3chcTUtA7gRriu4gsc",
  "key9": "4SH2zMZ5CchzPCRwn8GFMPFnrWyhNkEhw2mwuYpmNgTjKraA7ctBzsVq5PgWTVD3Xp3PLBE3B4w5qKoSPHkx6YXf",
  "key10": "3dfWRkpKKq6HToR5EtHFqV4KwPvsnYW7rRuwPwQ7Rhc9gozU5D8Yi99NmEsNeAcwBo2RtaoMXEkTafAmAgmCBXNb",
  "key11": "FSa6pKm2jV4SUypDx6qnin9PwshvApKaLwt3gGPWDJyvPqLZTut9C7ar68zdcthP7AJQPsXRF3vqZGhGrYfMQvg",
  "key12": "4qqsusYt7ZjpzNc2LibxC8p2VGxm5GNPeFtxtXfqHLDCuDtiCvM1x6z7Qdvxh6gXWwuZeYPRqT1rzc7Zkv2hX8wQ",
  "key13": "6582GvJ8gHk8mjv7m4AFnZTQgcqj3FKVUxxsSP9VBKs6iGVQNhZ8vZY5BxsbXuCtTcCXHoz2J9txTwxDT4uzL1La",
  "key14": "d2tpuV7iqNrnG7nwE7B8bYTK8GEHiQ8dzwvwr3jgSXv6xmF9H5ze6Lr7fBnUgzF9sspu8anHWt2WWFuZdxq5Puc",
  "key15": "5auPMQsr5MC4zcUZpmRwPH4vqur44qyX2ST6aqTGNgsWJw4ZsNLpixgBUgnEp6bbDW4eKM4noiFNoGypbLkhxTJ6",
  "key16": "4EmQM8oo2YsU1ab1WzQ7q8VCj6uNEgtM3aodbAhBwLrPGUes6hLo3u4ufQX19sA8VvCTMAqhhz1bwnqqFmJjkPAu",
  "key17": "fGeZeg3FHnhFusvM1zUAYJasUEpn9nXiunCniUsSpcjVo4Sxd8JSJhDv6EAYZzZGKQzB9xEuUoP1tZQUwswCb9f",
  "key18": "2AoW8WCBWMXkPHwVaq4VRj3mnt2Neqevq7EUTcw1727YeLpLfifQ7nQZRgTenLEEBjsGuTCqipfhFnWUDLtZ3kSq",
  "key19": "S2cTpbtGoNAqHGHRKLZTubsP8K8dg6rsrgoWUKK38aN5Afef5oi7Kv3DWjqG99gf4VFgXVMq6r3q7MrTGtPj5t1",
  "key20": "3wYRHYQqbXvBFrEPYb1tDXwWxUCCaKExBYUfBVG3UedKR1tcifgMdFjAd76dBd6F7MFiH8zgs5zPTTKbmQu3xDeZ",
  "key21": "2t9P1T6r6KjZR7nBfqMrCNK7gBMTQpBbhwBUrP8pmwkX4eqKdpqaeDrkwxxoZCfnMuqTDnw2WE5VtYgatJNqvdpi",
  "key22": "5XNKtMSNn798acVgRnULREpgy3cvEhBYN8LRUFteuAJLUYuAUKte9MLPzVLWoCqaacGUSwYGWHvPejB2FPyCukWV",
  "key23": "Zzm6hGhFuDYzaM5uVxDJSdgqLYhmmsZ1dWm6mSWdB2nHqGEZhRgybDG4ogUKZdDVsVk6gVitsBzfPQmznYukFLA",
  "key24": "5DhdFUrrnfB4ZqetNBZcUPerLLSrzzDrX1bBf7fTVS2JkBF6xRuFMoBv41fCQVgSS5bqE1D4iGALrgxkPxDAqK1x",
  "key25": "4HgmjC3wWaW3MHnJtQ4f9MQKFKxhH9pKKtf41LHV4k6Y59myqurauU6m5ppSVkf4evfbpSjsbVDuq2NqkHHjusnE",
  "key26": "nSpocQVfH9ATAxntuADhiLwjHE61e2UsazXgUqRRmVrQ6hJJLhiKiteq8nkecy9QdKdWfLoRpmY39S35rZDQB6N",
  "key27": "ZE4xDqR8DZD3qX82TVwoV22cAg5GVxZhkgiYCRrnLvHMDNoLruPXtX45gjKnP8xkYEvoasjrxsHVeYFV6YtrFTL",
  "key28": "2pZ1QySFegMsGqas8NoKkyaiAV9QusiC9fXdKeESBJKQzyK5SRVgi6oz44jeKBquror5G8huqnL3sy65C1GaHgFF",
  "key29": "4D3Eyncy3hUX5YSt3BNFH5fyijuBs9pC3vA9Pa7HhFkT5uHnnW3ymvZgkzxyDMQxp96jSgEf6bQ9ZNHvWGpqBqPY"
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
