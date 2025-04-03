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
    "3LpcYt1BADWDNRyxDAg7JpQiPAFY27GeqT3YFRNsAjcsEm91YbWQQ9QCUd6EGSxkhCoHxbUC4PJepKexcb73u4G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zfdPtMPwzneBN38m4cPxc1p19wK6K3NcVm62Cqk4HcfwcmRbWgxnyfkkR7GkbjXZNBSHRYPwLATdMzpbyNUDqNp",
  "key1": "2p9c7CEBSZuXsD8D23hHqRySKTXBbLAuSfLRFdCC7j5pCeWTogFdJGrRxwumt3pnvSjwpGPH5CBLf3PJsJVR8RvF",
  "key2": "iTnMD9KyZARHkHMgnpMNUJ2zvCHzFFxFy3Ny8u1w9vvSQtdgALiFP7K26247BKV7sVYN9sxQRbAxoSMrb9Ms7WF",
  "key3": "HASwifhX6ZxrNkMu1VtXwVEe9BwjDP3v16TYantZBBCEf9WEq7KdaVPwzFNfKD4at2EfGd4iuQEUhhB9JbHQG5C",
  "key4": "Dq5Pb6yWbEGd6sZhQCfRZDJStKdNTVywrMnshEx59jAyJ1JSK4scguLcGr1tZeYc6hGKitMH9etNFYECuGZDraX",
  "key5": "2tRAgRgnKmdewwyZxHysgiifjUhV3e2ap4exvRGgpBRYgGvsZDpSFBNPkz1MyR2c29ip5ovrQtRMfAwQRyYt2qPY",
  "key6": "2CaPiWanr19Do5XREYiexc38EnjCmusNZefCBogYuChc5gUZHnEma45yUddSwBgehRZmC5abLUV8t1o6zSnaoEb1",
  "key7": "4UBJS9R8At8PQ3TM5qzGuXz5yJSaKjp6aH5X3A4P2pTvwuaKhDp9kx41CMd1P2PzYNvXc39JnNTy8L6NSgLYpApg",
  "key8": "5SDoo72Qv11vm8i6bnS7EsFzBY3T9QtMGVeSq1yjRoEZJB3VcLPbDfez1tejHHtaA6VdzQRTJfFVaAciaGcyLoXc",
  "key9": "4tp5PYM1zp6fwLBdgfCpsReRdvdsW2HoUSbp7SumA2wNqU1zxMGwQgLSzH27zkeYL6GJB51rfw2Q74i4QHLzcfFr",
  "key10": "5K6tatmBHG1rTqbh81Dowx1VfTVFdEgpgJGhBC2dtNvRfh2LZDwm6JwydF7Mwvo2QEQYi1eB3WjCseDNTgWcyb2P",
  "key11": "4v1wKVJmRym2ZD8bA1dQGHMUh5JCcwAyMA2JeaJvA8EYyxDhQGf1o77ktdX4KM1TQcxjeuPUfFC9vkGGmE6rttFp",
  "key12": "2j3uUaXhATnJykCfzX5D8vVv3QASer7LdRobqm1wgno4wNmv7eZeAksWWPUfLhnfj47NjE97Hn2yc4m1USmypSzB",
  "key13": "5VUocTNsXae6djVr547bev2Znzdq1qqLvfh641RDb3wQfCX1n7nym6Yk9ZErBUWGuWQDTqCGmymAAkXf1A92LjZK",
  "key14": "Bogcmp1js1S15EJ8Vn7FzDKPwp5VoS1GHvKUGe6WCvgdDG5RufuAMQT1QEjgqeUVGjYvo8rJxW2YbaHfAURsfPT",
  "key15": "5Q47vg5YuFaNDDPG2sZmf9sDH7QNytpsjVhpFiXeHD2h5HbX26dDdrjWFzEUwFdgsc2zjeRTADSiBaLgt9ZJTT5v",
  "key16": "4QAcvjXZCYSadFfZecCDpSyDUCLeACaU9G5uQSMmFSSSaAjeb84djzo4rRaYNKvA52tMXDyQwhzRwcrCCqJpiVCx",
  "key17": "3xoYvYbVDjC5F7wWhg26Azcx5rryWxQ2ERHd8iCuqmdBHwS8o9SomX6F6sp9gpzGfGTfceM9LSKZK5VHMSoKpFB2",
  "key18": "5bUrGXLLByfrweTxCxZHYG14n2nAX4zcBqcbrS8VJTtR7orUig7cU5DTYyoWYY3AWzciK32vj43obbTkYiSwSKhF",
  "key19": "4D3XsDuVrYZ6NQX3Lt9BHfAawicLiN1z5QCSCEdPdHzgUZdDwn9o3edhuahhC17F8gEGANPtg8RVWdqB6wts22wa",
  "key20": "5umY9kKWaCHEHmTdAWFnDgNry8H9QxAcA8cwYfPhUwfPYwd5P9hz57MiQdbT2suqkGZxpxGcc6FhGGVyFLd8huVg",
  "key21": "2tYCHFyDZNqXqjEnVYDheFq6r2jib9dyDWjwYBVgrTqmi6nfFnLCm87KneYz7L3EP52t1TX2nDcn1Ww3actBZWKx",
  "key22": "vMNqQv96bZPGYSDK483MKwSd5qMmefFC8z9r3NB5nrBLoe24YemGfEVppasbvoWLL5y3sa2kN88XUjdKTzayoJw",
  "key23": "58maViciXa4fES4v35heA4xGSL3Xsvqfn91K4WrrjYJtGw54xThTcmKQu24a8NkjHBvz2gXGEWwxhcKz9SGtU5G1",
  "key24": "4SfyLcc5Q81pPCB22LqfPZFdz38PSgihGx3sVunUi58iDh1h3syNz3VqGUzCmAdxdhJLj49tbtPJqEDqzSfecuJg",
  "key25": "2y4uSDHZJM5oC2nV2xu37GHeCedDdaSeSUXC4wGD6EXQ3VgNjHhMVhdoYpZ6ag5yEJeJVAMQbBaHwKbubYbSmFNG",
  "key26": "4eyDHrvY8kJsuve8pvTSiVYiDAfSMfRcDMoTMSThsj8ZeJpkhkjbMjADb7xWs8g6xVzgW5Y93L2o1cS2L2N6fw5K",
  "key27": "34NQJDZu5t3VRGSbBB9a32wjjdHuvYYGhDWCZ69zQvJuqdRX7m5wq1dPsYopYk3arkUgAiSh9MiLUu1peoTNF3CE",
  "key28": "5NWvzcX1Lzb9LcggtbNA9bv5U9a2PxFX6jxCBg7yL65693Er7XHoXXu5ejKg1FMPwJ33uwAY5qJ2xKWDPiBdoNd4",
  "key29": "3zeVic2ppKzTq2rNjwrbR2jRPDAAqaXmgGws4yuhoHrbyChuLUzkKrQqUTiaciUgwKBicp3AUtJ9FmPts5jTurxF",
  "key30": "5SapJkeHWEfh8GfDyVewyhAWPcp5Lwj1aqwGvMqBf6qBnzgzso49smfPdzpajP18sjmCnewAJkKbEKkZyHuGbLh9"
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
