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
    "4SkVxyWrg7t8uK9wTXuRUfRBVKaWe38Lz1ygj8Xkdq9P9kcsGWvSpA4WD21KJs9nFCd9BUu8XHd9XtZfJGDyyXNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUrUqMvWCc5MxxcsStT5f2hczmnr7x1euyLDvSJERdr3ZMEmFUyvwua4brwavFLLxoL5RutWUFyg6hvZymRXzLN",
  "key1": "484aDBkV3Gv9vW3WSuZonSThc1neJUFuT9Xm3SPv3GsnPVBfCpJcrLToDbnnQhdBmBR3eXY59tq2Qnxk7YVkaN4H",
  "key2": "66BE6HKp9yMUL9dLAqR34emqqD7PrcFs3NLKFaAgeKVwyqaxHdHuoZmnPN6KjeGwGPFVwAaTQbBbY1qshqiZERef",
  "key3": "8GvsxeURrQmPvDzGPorrTWFBWYSZXr8w9h3tYB9JMtVtV2AJeBHvpwdueeCAAHTJZ4uUPLCF7LoUmuHD4Mj4EVq",
  "key4": "3sXYH78kTYQZ7mYGtkGYNvviX4wFAWCnkm2pUqQYETtKTCks4GEPPSLiPjZySM9jCVnseaogSiHts4fCQtRmRbJE",
  "key5": "5Qs6Uni57cKmCuZgA5wFqZ7tbuemi2tqwtn4awEZ8LJwyZk7z3iZxHF3PyNbr6j6AjCurayN6XyQdKMHcmocFvyN",
  "key6": "2fZX6kEg7y333qYmArGxeP2bYBN5MBHCzuUofAFE3fzDnC4UTJ8BT1qDyNVU8uxks1qYPbRehfFtMsG1k7aTrcxh",
  "key7": "DetRce9v5jC1J6FYiUK9xpFZbWr4h1xi1HRm9vYYkqVP7VqTkVjScASKifhkC6yZ2j2yd3QmDu64moqmpM9yJc4",
  "key8": "3iZs66AzrhN13a5o4XF13S4p4UHUSqBEFR5ThKNgCpTPobb9QXidk79eKqJwn8fhrnrJJ5JYdD2UvnQ3NaQquXh1",
  "key9": "48i2poEYLr1MfLpJL3XPmphDxfbrZVWRcLaZJ38aJn32LN8yhafJw7PAfV86XYeiW6eTQT549U1cmiZFKpy6nrfE",
  "key10": "2s2xsiF9nV9T2VMFtnkujCVCq7FMkKDsnU11RZaoH1NgmjPaovTody3J9daUyqWQJ4nJneNwy2Yfk8xqLN6rtGaJ",
  "key11": "4zhZh6TJzBVjvDFatMEgR5ta5Sk54M7dpnAGSrMypy2JZ9GE5W2oc3fAJnByswQxYTHmTtbbYi1M9PF4hkWn7ntc",
  "key12": "5iphv8T9VAr8pHkcrJaqyc9biHLHrPTAqSUwS7hJrYYbG4KFPHuBRbNk9cfKxBXiJvuGGQs2K3Wz4JNce7VR4uHv",
  "key13": "pk7GeoCWcKSDXfzzDUbYQXDgbeuqNtsjFp6jECGydGQeGvxnJm9XiGHy6voiHibemqKF7C9WREhpXEKmQtMyLtk",
  "key14": "1PKmf9THETPScEJkNeeMKq219sanMADovPQJdJSVFTZyjb6qstaCiosYDUbkYjgaVUS3NEse3GdjbmduvLHqLH3",
  "key15": "3TTy6b6nm8wECggTxjeZaLMjRsG6wQqNSH14MCK8xMhcMzWpBz8Pf9s9mV5ANPX97aWgDPSMopEX8b2rQsbRj9rA",
  "key16": "5EBF7Sbb5MjgYzVwocZVJzvDMgMtzrvZoddf88Hcz2KnCdGtKDfxwjpXoxBS7H1zUQPwTVtRrPYry6oKq1iz3YKL",
  "key17": "4sD74HVKzhqneCzyEz83eNEP7aoVjw3ciSwA9jtJYiqbS6Dm7GaCkJxQ4PoTYPQZWzkkspN2eB8kcmkAwKSP4wBE",
  "key18": "3CjMpLWfp1BRizcnwJGMdUUKou1PjxjhvP9zLzfHsAiAHrBhGX8BccFmUKrjnZNs9bpcqxqZvbmZeMHs54NC6apW",
  "key19": "3VVpgFw3r9viE7TN92s9haCCuThwcPsfPtPgycXCuTGV66D56XD3dNgYT6an5eqZZN8UTmZRbRYP2LnjPtSxQJsM",
  "key20": "3gRaCnBv1ZTNwq1WtYTer1nHbMmkQGuXftJ8XD74zjkTtVYfYxBc5zpR1CMkv8p6vkjT43VQbRxEZhup26NwyGNN",
  "key21": "3TUowzKXyc1Cndq7GHaBMvW53E4BSQCZtRyH3gqV7D2zjhUvkA2NNX21Y9qXNLBGEzEDLCJenpEK8XgKBUHgc8br",
  "key22": "5tocRyHJB2chANNgjrCGTgzj1jiA7HRDYF9cuGN4RDRBX2uarW7AMzcoGwq1GXxmvAKxdWaHgGqwQK567sCdFQh4",
  "key23": "3XyMAbNhXMjrZ5xnXtqe62bz7rMW8t9zPPN3TtpkcYAkBeNydtWwCszcrMzSfPLjqv2iTF9zUmhUFxczuMEf4FiA",
  "key24": "4NRyJW8Wqsi5QEv5R211rdmLwCbvJ4Mx3DDSDi31HRG6ZpuALunQ1rE3qwb5D9ZEP4SbBPb4CdkNV3QUYiaEQKFu",
  "key25": "4JjKxWyM3V63jYoyToZKEgHU67zn2u5fhyrX2iBKtRUYPy5BCStYWsaJqYBpkYmuym46UrooqkBtqXg9rWTagW6t",
  "key26": "3xgYwFJUB7TjiH4UiPgWMCHAvDrzM5jcFEvvphTKxcmsskZQo5vSvCEdw6cGjKRRKYBhTV9KDh4cjvRMPKubie1E",
  "key27": "Re9kjpSyCSHgtcpMtTB5YTxFoQ66NsLTJKuS77d18q7kHAESpxbMrCrn5Au8nAPqwFjze83WYeA1hMQwUX51U9w",
  "key28": "DZzcjiyjubYLcM1jVzg5BDiQDhJLo6TjNFMjXDKYqEPHfFXw2F46Bwkdz3Smwe3TcwNJkVCVtzeR86gF9GSbUet",
  "key29": "5jqEpjdcSz7i5qPDFDQ2FiPwLaEzAAQHiSBpaanj8ZPpKdvtqJT2Ry1n9pzd3tRYkaZGe6SdYAhrynDUm4tAzq6a",
  "key30": "3CjuDTmqf5obQDC51XQDGd6xruJKw7ii9JRXpe5WUxFSUvVEu5nSm63AVF5YBQTyARbBtX1oohKwXw6UJdNrKPsj",
  "key31": "KZpTwAVGqKxrdzytk8VASsRB9pBcVVf7CR3v1ZiZCALpwXgEtHCccKYgjE2pLuV5vjumM2Y4spfgryix2X3QLmU",
  "key32": "4mHWEV4YhYZEmjTTCFNPdZjUVRXDeeRUecbxXtftgBtDRGawySLcPsTweVAabMLnhSe8qHajJWUr2UhJfNX3pUyU",
  "key33": "5SGYfrvwAHVA4jiGYHmEHbKv1whtwVpzMsTUqSddB8rDLtXvXKqNL1iXVg3YYK2XqeRAb5QVauuupVhdzE6igPHJ",
  "key34": "29o2bD4zog1aar4SULdAZ7khN7krzBhs4jp1i8kj7yEZSyfXUKX1nfQ7WAfELybXCEebRcSzwm4BXpRJq6WkDAfY",
  "key35": "2pVMjLmFMW6fTw6yd1b65JvhUthPuxaLyRpgqvUPShxaymmqUeovjtcsnEQXfnYCAkukZNzVCHZgsjqDvorBpK85",
  "key36": "4NsEgeoGt2WB3j1WRkgWbwavZRavuEnTPwDSFEi6J4CamYtxpSqBpZjVZTdUvuGiPD49JuNxufHuF8xesaDVXKMX",
  "key37": "vu9aBm3QHrpAz6RkaY3TqYFTQCfkaWWLR1BeG8xEiB6CsgJZCY5XnwkRRFrWPuhuXyPSHQoW3PFBv4DgaqY8Qv1",
  "key38": "3aPQiTQYMx4BqFtd1r9Gnyygg3ZfVG3RY2go2CfbysCT5H5FHnJngLdp6MVRefUKDPVAq8iGTeCr3iovJZU4w9oU",
  "key39": "qz3idY4RZsCS5FF4wV6bUtcyGw4CM12yEjASBAhMy9ebvmi7Gfh7EEe2WLgSJRSVdbVarPV3x35LgCtqfaVu8ME",
  "key40": "2P6nHoCT3sd8p446kKFnyMx71REXCSAr2yVe2tpWM12YLN4TJtrS2VNMz6cY4GdRYpnErmiVt1FS3EhS6TVFxC9x",
  "key41": "25S9LiewKW9N3jAogFd1kZuXCQCU2KegRZoJUpGdtLQqpaWQs1xjjPhgZs5xE9aVNwkm6hfWFTDAhV2d8sjVy3LH",
  "key42": "3cMKcMeupomxmDLVv6f8XFUfbtQEEiYs6gd4QKuSDbAu5FtniDwhLNqTrCZzJoZvG6H9PjnJRQqq6RqbwxkPLvMC",
  "key43": "3kXaYM1Fibrwf7qcUGR5RtPt5AuS69Dmb1xpb9wEthch3cMQMKWuiroHum3Lw7BVt9UY8McwaDLBx9f8VCyvdgTX",
  "key44": "2okttAjz6K2knodB4f54ioZNPxtJ321cu62VuEix8fR1YUaLJT7kWK16HZFi6G4kSNegMyiFn6CBubfAYMpYGYkR",
  "key45": "3kFqJbP8r2RWtVxw3FYUHwZfwMHYWjqViWrvC2gLaXsR298rhJuddkh16i7YciWktfCsiKrg8Ah9ji7MMXHPa16u"
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
