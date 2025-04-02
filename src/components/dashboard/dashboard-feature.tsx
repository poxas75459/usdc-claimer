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
    "5dWWSidNE88srQgY2X47MPMTpWF8DLk3veqHfUuF5BEBpBby8rm6hsj3GgFNcvqRKFE8E623GVvqKGo6gYy9dQfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1KQHNZqNPXk5usoGRTTdTPfweGhA2X3Ncot7uGkqqWVjfE5qCj1m2TfpJoSBwiauYCVxXpN6qQdfQJaEg68r2R",
  "key1": "2KuPSohnCQE6THrNeJvdW6tXZcFR4tzmyxDnn17M4tiYXc8BKFkH9DUKz7YUceDzdUR72XCwnUvJwF6f3yuwkVqK",
  "key2": "5W9uwtAMSjiaKwYk5KBnGDwUKKq7sveXHhiM1SydDER6XQqJPh4BVWy5Gwq1nPu71Sy7eqC5GWmWBS3XdSvvqHvu",
  "key3": "4P9LHTE6TCFQ2ZNbHKpudHdYCmapcwnvArQLgRxT2aqmZJh51hSosggNSXSC1tXMnDPoLRqKAroubAWzhpkvPG8E",
  "key4": "3dLjTvdBKznNPUUZJC2fiLAiWKG1gMXcZHHejLZH3Veg2i16JYayQEn6thQG7LDs19mtwWq9h99dpvAgnoDWCxru",
  "key5": "3Z8GXKK7woq5666GMM4eWMfoDbThjEbJc4FRk9Le4KsGeMVTW6HYwc2zNesAnmXTxSQdTRNt5tqHVFD5BXcqvKTE",
  "key6": "45g42FYfisqHfsnP3tdZR5XY8ncAvyFP7hUhdjvLJEUTtTkRgoD8ovJV9HUm4JHWkZivFYUSU8vixkag1rPtGau7",
  "key7": "2neFbz35pwGacukeXQmA6riyDPUrQUDTTNno4eUA9qDM73MHQhK3WYk8m7d1uJiBPZgsMHEKg41abXEKB6X8uqJ9",
  "key8": "5MLo1TPZkaU9xPUkzU5RJmSBCam8XUjBowZLkZ6ruZ6W17YrkaRx1pzKGjoAjUpa2bxDmSQkjsiMfBB9XbNa25Ze",
  "key9": "62dDftygdJTFydymVqTuundNS8JKw1eSzfRE5aSsCu4sTYRMFhimrCp3u7kw4yu4HXQ7xBnwooH8CWZ6roCMAAEA",
  "key10": "3VPD11mcYbVwc4TjRdU9ZopwgyxcKCvoWgKm62ZeeWMNyVYAr3BbCHvLSja2gVWLoTbR2sjfJdwmwWQsM7jeTkoK",
  "key11": "4mKRxCGYpP8ELZvoXwvHefEDAjrJTC5sV3AxNsZPwCeWxcMvdHWAXpahVxVTQheCRjWQJL3FpE6tajhGA6EdCiE6",
  "key12": "eD3Xh7HEVUDcWPRqJEvp8n1RqxjiQoxUzvndn8q4SqHAtZF4iWrcA3jD8JmzkAa3wgVn53E9mkxawDjDzQoJHn4",
  "key13": "hjTtEFERDJGxBiDx57hvaQaJn4pXEU68Ps9uf9VJtrryTpkbfdRdwpzeRKRbMjWKjq4MvAEddGNPq8fH6hq3UbG",
  "key14": "4TCZb4veACyV9Zwebe4qiR6ZNCy97VyxBBa6ERyxspxcwMEusENeRQSMKkq1Rx4zR4ie8kGzRnbuV6tYVQeWRqjY",
  "key15": "4dcqPn1NTNm3fQmmDE2cZZ6yMQQKzrXo1xvgAfJarznNCwvSu4PgWxH2Lc8ia5NB4EsdXCdMPZQrTTxhjZHVeb66",
  "key16": "4npcyt25EWZLb8W4DjEvDeaSiRQFkTJW3Bwzi4f4Kfyxth2SyWe7qUQXftnvXdaFXcaedaNF9DrYqNzTp3nQYGUD",
  "key17": "2LmoqCYd8Gqf5qPbE6a13YfMWBioJTrYDRn5nHBPMnECiXkC6uWrDVFHNhsRWE6yuD51eYug72uMSdnMxe1cMFjP",
  "key18": "ZZeYwBe93R2Yh4ae6wvsS4M1wJDbuYd18J9qkACGKtGj7e3Sap7yF8LPbSPXvQQS4oDq16bHT15KxxC5fXtGRG6",
  "key19": "5yPRr4fpcXw9js655qjj7StHs2whxsJ2TuA5V7fWddhj1vfQSRvKzejtDfNxLrQXEEjBgP42YeyK7C5Fvnikiyah",
  "key20": "67CAtmdnVk127J7PBPS3iBY6FuAJxe1bBCqnTVyMEPFUiZHX4xjzFUp4NugjKuV9ma6qiwKk2cgu4yUFzpCZsuan",
  "key21": "4ww7epFJwZ8WhWzzEh6gwESjViQYy41fNT53UM4oCw1pW9gxYRaJGVGcCp9Fm8tuD389zMP1VbAPmoBbv4oj1JgY",
  "key22": "PvhGYtJQjxr1ERU9u6Tiv7dZ4csJwY77iNYYTuCYT6LJL3tJSLpRFVdXiu9fwTQ9v2yZvP2zMYrHc3dP1kZCGtk",
  "key23": "79naeiRwZvKFdLMePU7dsJaC1NZc9ucH9EVTEpZGyRSGFYhCgCMQpF6Jrz3ySzvDzZnssHoxmGXC5qTNp2DmCLq",
  "key24": "2FmJcSseWCRHxCucdf6XxK8m6Goi5oUD5VSSAkQQyJaBXJuYwwiEpAxsuQxX6ym93zfdgmZ8HFoDzt7CH7SuaiMC",
  "key25": "NDE2u2ymexJ9daiMhmsqbDtrp8y5vZom2zS9oCincq71Vr8sP6mc2oojGs3CfSmSX4sET9QUNsAqsSRBXWGLzYC",
  "key26": "3yTestHTXNSDvZqxjRqtg4BmkP99Y67FVxnqbRv31ipeXyqRnCXoV15rmM46CaeCwB3NUYh8uC4HRe8uqT4q3bTZ",
  "key27": "2LEZybBvWSMPRo9unTdrCQmAmdVEomdH4kzJaukNKWjcYVyiPf2WUPHJLwMPMDnRgWYckcqhhHqfxmpjC625ntoG",
  "key28": "3RwxJLpVZby7CY2uttjHrqbwyuAwz4bduKf7R4qHURAYhqF44BpH6gHtuA38VsswkNnL876q3aaZ6TupQ798DQMS",
  "key29": "FxY1hRsgaHCEpxJfZFRboXKg41dHncYt7mNjUE4SSNi92cYdKHudejf6ZdxkDhPQFe2dwxBjdYsZwnLiWu7SfeC",
  "key30": "2GAorcFE5hd7LPSsbe4gt8j8RmP5izZpUGt7t8VADTcwQVQYsmxsEaqrbY5BstevoUNNk12FN5ztBxFE6s7GLUry",
  "key31": "45JxueR4qa1qBWRNSPVTpKa539EJysLy1ErhE1onThCHPxt3zEB7jUDnJKRDmZAydfr9F13v68BSooyLx8kUbaVi",
  "key32": "4QrSTZVnx93G5A5VbmJSZ5mtPhSHqd75jbzDX6cPcGg8as79dwsw7B29ZN9wyqLbVWaqm1eEiGB8B54JU2UrBxo1",
  "key33": "2kfbkkzjKMjBaY2iYkKnmDTVN1xup8DebdMUiSPzFVdSPWyza7mEQSLHNr2ktTW37nwjB1ZQaTxgHmKqy13rcw7z",
  "key34": "5LnkWhATiwjimVG1DJtVbtg7bg22EBEFFPpKfAsE8Lao1A11BEVL3jxdiUfccq6wvkJ5EeLjyvZo5fWGZPECD9P1",
  "key35": "2bCS48sN1uCcztMUe9SfdwBYtig8oNSq7n6m5JuT9TaUHFsJpQbVZKj8bApKF8x9mgZexqoJ9EPt7Bhy51ouMvWR",
  "key36": "2Ni2aVPSWqJSnybrHqJ2LwvjS7qKcLjPtjD1fcyhmxaYzCcdMf22M4WQQ8XVtxxMdLJHMKai2jHHTYvhFazfZoHV",
  "key37": "4kTiNBPegkyTxj3b73R73y4hkvBHH4Pnq9vXWuTFFrBfzXUBmRtU589dxsNXNfUNi6F2S4W96CagGkkh3Ya8K9Xg",
  "key38": "2jhjXY8SXXqKGerzuznHWaFYViFTkpJDhDxVCfaLy24tiuPu7ywhKgzgem6HTv4w4LGLFVhoJ6UUB3FCAcjWrocp",
  "key39": "3T4WHDvZ9MDBrBcNm2T6PRGr47G7RgBbxfJzX4RLMbYi77KVLXjSXBBWsSxauWBaGPd5Dt2fUBbVomCyKtsuQZYz",
  "key40": "2VSTkZCZPjS6KptmatSBoKsZBxLxNKmS86RiaavaXANKD4iwuLHjQGj2TBaS1g8S9Aoj967BnE8pcQpjz41L1scv",
  "key41": "44ScCDx2MXWmz6ZMYmpVxzNEPghTXSTg34aSyjaDAERW4q9CEEy3J7zDU4EDi1dAienDa9JTG3TGUT4Vb8GGMxEW",
  "key42": "2FWPfqfbbFgPzyzn1RJAKvuoHvXUnz8QVnhdvrESrxQQMoHjd3adfEmyVun7cQai4xnSF1P8yujrpyUAX4PxA1e7",
  "key43": "4BywLYPEatsbt4R4P2CyftfyDNRHRNmAzBXttciHFBmFw9xNoFmGEZCcySmtoL8E7PJAspFst3LraDjZFqQpAmk7",
  "key44": "Pq1VFKjTsKAdcN76cSkmQqeMRjHhMEAiC7FH8GQ3N2xAQi2XiRTiKZDUkXTdcf2ZhdHHykA67YzbP4iFGmPs9u4",
  "key45": "3Q5LTwqMbMQR5EtDQjLmJh4m4wWVprn9z2oLzbyN9sbSh1hmj4EcooyuAKDSDXvdWzFJPYQWsAhQwxAgofptUx1H",
  "key46": "2fzhr8wYbRu4k8JGn3rtv3arwgVgWU7vyU8YKMt1gWaAT9nCbfyuY2hk9sPrMWteSbC6N2zPtLaGgMBtWEB9BkkL"
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
