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
    "54Ei72tKK37wGixTMeHqasmQKv7xKdLp1jQBSRPxaiGanfrNVW5HjSZWVZ8UDU9uB1ekqA2HFcsH7nWocBeE11Xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZWdQxC8FcvgSLn6HgWaCna2ueV3sSwxbPps23owoeDUhVGKbm9vAZ4CWPZHMiyNgADaH1s1Qg3WPPa6msJLrAr",
  "key1": "2xU5EsJa7HyvjzszQQQwNcvucGZ7tV4PMxdeVmyeYMK3VJvmTW5qmmGBQjEBmZim6F7ZM3P9zREEqKjS3sirmumZ",
  "key2": "53AkfnDw9s4Qe48KYt2115cnEfiuCitzDFnvTjX5VxtdTe6jQtTsPogtkgJF7jCzLtyoZ9LEL3m9P1ksvn961KAM",
  "key3": "2JHYBnjt2kLStsAzJWX3w8stB9tsJh6qTP1FpV85916zDjMEbYsLJqi4n4fvZoTs1va2rUMriRnRENwoEAeqYcZE",
  "key4": "32Tz1tfexrfz8XDV4XXbYzBNVVdSqv7tExWMXdwDoYDF3Prh43hPd4qhw1oBsrtXGtR9AxpuiuZ2E52S2phrqu5K",
  "key5": "3Aa5Rozp9ud7cyvQmBFtnHFPAthhxiZn6HARBRBb37fgjCwemhBPmHCY4REL7TUk53kzpuFUYMywhoNaDNueaxGA",
  "key6": "3cupqEUQgpeWomk7QYZcKvDmUFGd885Hzca4QGN3F7b7BxXQFqYpchdbsnuFuMMDgvifptyosvMtyyxtua7jLL7W",
  "key7": "5VtRyuVFrfo1pEJZWHSsFPPXNjcziDSTBTwsyXALQTKLnmyTDWLEW6LpLB5ue7KYPGtGTDdC9pXaUBW4BuTecFw4",
  "key8": "yuvSwmEDeE5MTynkzzAcWTwrPzUgzXaUPq5QdW85TunGFrYtrfDu8P3tMoo485uKBzen9goypfxQSPBSnPvU4er",
  "key9": "2xbkuucubVqpcm88ZQqcYVcLYJKMXxV31Joh63NCLcwdoDXSYXck5f7vWrPdyugvRGYYiitMQ7tfysNggLznvqZA",
  "key10": "2XN6MDhBdkq8Da7DRQr1Zjt5b9t59vnCU4cb4uxTrj47qfxCBrM9DS98Tc27CeLLHfkZNHT7LFVsX5RP86DbF7YX",
  "key11": "5MuoWan5KKnc1t9G8yu3YFWog1AGv1ayjDFXpsDPNUZEZmsNT9nzrXz4nKwqxCkkzZnEkqciZ8Dig81fS1pd2VdL",
  "key12": "5pUqRixBU4SJPudpFRv5TrFks51F9JKYACKDJVVXsFhfJVacabzmdC1WaxMg6LuX3NS5o4YkLQamRaPE8WghdsVc",
  "key13": "4WCvqr6PeyX6hraoeaPFK9Evbh1cCzrQnKtptzAiUd76MRRo56EQxNwWHYwE8w5fs5crJA6yNRtAyo8Yi1qcvN5d",
  "key14": "31WCeuEE9dM6kq8NUoxcwfKoByHFJsFqZ2iSregexMy6N4MJzeuGRaqKCvQwAXPLx5ru7DsHnYE6fTxvdX9GsVNo",
  "key15": "4dv2RJ632JnPRRtQx36TFz7v5yHxTkLpSM7qYvrjRciAL3dxcXduHBwEHPQMr68ybxMFzjwtWJHp7SbdJEU7KenS",
  "key16": "5hQoiJgbC9K99Mt8ZW9ayyGnnBD1J4UX8SANqkRsWHy3NYhmMVS3YMcpxQ7roEsqKQAUkYWJzDPjF982jaBu6xby",
  "key17": "2JmvGGeJcXcaGcbHen5E6v3bvsjPxDQKZaZLNy8mgmcLMDf6339xvkPaYikC1F4shTuxo9UETGZSsCPPyjhWHNmo",
  "key18": "2qf5NmyWysutCszreV3rusqw1wbEjEpUMfsuMs39iwNSD1mfDtUsVwkWWt571wupxa4vmvR9fSvFW3NV6FPazizo",
  "key19": "25Rt4UbTHXojKF5LVUEtN67DQGotM7aaZiTsvrBs4jyMz1vaohqvwkqcksV7eWdSaPD3o2znbfLYVq8M5qs2Thz2",
  "key20": "5jfFrtrvTzntyU5zngieS65fUHVGipszFuEzCUfeo6TRhen99cFH7oNehySewhsPp3UM45ErvR9CqHU6DRvbseTQ",
  "key21": "jq3J7GxGLohDTeYp7yrWDt3gSPMpzFDTSfqVVfAshkD48qzkFYoqHELbTHLiWsZocMUz1qA3jk6FZSzT2wsBbvn",
  "key22": "4pB7niKDQztKn8ZWA48S3R62NC3rvBC3Lt8kMXrTqNTRSpGM6Sj8PaYM2bcRdmayvEESfuBVnC6kyBgqnUr1V4d6",
  "key23": "39q4xnksiP9uNdAxKq7Br7TUKU25bRe7D7C2MUaeU7dRWHrD9FGtX56yLXUmwY9ypNHJryAMNmJdMMTMX6gHXFPS",
  "key24": "5TZJQGYN7s78JkFSTHjqAUhEHM6bxnRSXnKqXGRvMDbk7D6MGLGinx8yWw95sEuzarQsfaHjLp6U7P7GqWuGoFsy",
  "key25": "2d1n7EqQkEezfynDMV23VVUqKnzipVbTfgnLDCp7djeCNuuZPYcCkRNoLWi7qdyFTkA8VNFqEpR59PhjRaULUJWK",
  "key26": "2AogFX7tLAE4kudBqrVw2QBTAb1iVQLba9PsFFQZ3WjBohYYXhCMXi96Pv7UQNyJ8eFMUjwbc1We365K5qn835wE",
  "key27": "49NDPYt13WPEe4MkZcTFMZZt8egzh1U5ELGcX85DUSKZYfB18zrbn9dKfs6b6b1JvpZcKosL6s49tQzjRB6WB4vo",
  "key28": "2XHucwKb8gu4kSvgxdm2ifEMSXzXkDLw5vhzEJUumJK9RAAmnN9t7mRNxsVwzu69zETmGAG3Jyi5utNPCAEQUgFJ",
  "key29": "38VTZya8xvXA5XZ62RTaMfFF3JZNSo36MvNa9S9gXxhe9boQf5rPiSd6iMtUVuTM8gNN5S46SoQ4brg6TsTWyqn3",
  "key30": "63G4SFFBcK8oFKgEX66Xh2Ast5zdmK1q5rhFs2aoxtbwTmyu36x9zfXCfkSB9BTwJBgPem6A5qpSWEFeUMrjGyJE",
  "key31": "5pSgrPzk9huuZHjGs8kGMdiLetmGjMWDacQjCCnqGu6VWUyKGHCKtswe28gqgYNdLAzTZTDc2xL9Xb73UhdNhwmR",
  "key32": "3d5as2U1nMe1VtCoVNYeR4tpa7fsQmRMgF8f5mE3pu2ZgBmEd3Jw7bBG5vbzSNgG94ZWo7cgprqfJYoxy8yGE2Pb",
  "key33": "3SAkYBahJq8MaAdwyeKuzNDNYmXLyiS4yGBuFUMvurZ5xwaSD4bHhA92CKfxasScRQDdZ9jH1GWcTWG82ZdNwPec",
  "key34": "5Swpez6mYozHGzbq815kpWgVZ88cAewEVZMr4iLCuj1yCS2JWc26DbiDCRU7t4dASSpSewRqtrodc7juY7pQPjFj",
  "key35": "2NRGAxjbY4GajNxUMh8RjmnWYM3z8nw8pRAdQfeBhXk3thFdd82NyRYc4cwHwpHfHmJXgQ6aBp4tUBXc8MemkZnf",
  "key36": "reNmhzn29o5W5e2drXQ95Tkv1BFHBc5iXqYhENxHeJMPgZozfggfPv3Rz8bZcAoMFqtZk75tvH1zbu2B9jV8aC5",
  "key37": "3r8zNhjQyGpfLSUvvxT2rg1V31E6JXtgy2eYXCEKkaFRwSPriGz5JzmcTKCkdEpVi2QM7wKoaigHV2UoHqtLrizE"
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
