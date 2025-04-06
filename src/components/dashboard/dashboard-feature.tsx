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
    "21RbWNLpka7fJUWT23QuSDPVwZkSUmkStoVatd3aFLRzkN5T9hXobojdq4ytWJNoxdK56Z4LhMTuYjsucRyictpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHN8hK2ook2vDQpZXLd8jBEdQHZ1Vm8oRqV56gWiNbd16VbfBRWjm7FQWuMEToSxoUsvhRKhrqUayAhcs8e6wG3",
  "key1": "2s57sgZGW4a1inQCagVPJ5g4HsN8DiQHWL5PedKwKoGH9CFDfybZxWr3b56JKpTV1ei6dsbi87V2Yid3SJn2nBRT",
  "key2": "Bp7J5LCzVpMyREfvqDHzJuQHVeGnuExfokcWoAF4SPv6KFbJD8mxAZ4NoFfm5T4kcU3Y2BHtBx98631FbfnwbbD",
  "key3": "2ML6bHDR2ZzDdwY7ZJaWMNvUbbeRhBp28pFBKLwZnAXCCKeK1DHBqEpynBMcZ8NYLscrTanbQU3ChFYgxRkRDnht",
  "key4": "3X6eS4ejarbR5Y6ecijpps4vdFGQGgXJhZwf1kz1uXhjtnP362FchfJqXuvT2vudiLSHq6ZQB5wCEZxGPtXunqg",
  "key5": "2Rp3bn18M1Q4ew1wqKEbRGshNstUbbLxJLkZmDs2KFmKyCksnUVX3f5cZAr2TvLcTbdVSdHCLUCCr4xE6UVoLaSh",
  "key6": "3GqZWJyGrzXxj8bKL1dN7VMLKJrE3qhNuS8Us8WUfSPhqga1hEKucMTT1WYXrHYhp6w83NEtfBngYHBKWKusN9h2",
  "key7": "2S37UQfEUGwtp9XgNUnSiLcr946CTP7hJ49dpRP5WeyTADXyoKkpbYJKoJxKMgoVZQk63AVd4AFu2ymtRVRBihki",
  "key8": "3Az8bptprHNh4ysH1X8MyBMAQkGU2MvfXP8iyhjCvYsyEt27GncRUCdpybPBSZLkh2b3GCZk5Q7UGkTyFhM99azC",
  "key9": "mkCisP1HPqgWC3bHhvvMsYDSki6YpGm4xoumiPK5JMHpgNsRbCkbZXocK5owPzB8JEYaGxXusi6mi1utUqLukBS",
  "key10": "32gti8SgDpj5QDoeZREsp9Q9iV3f4sisZeZ3xhRgfa4qJ5uxYGG4v7o5bJjAEo9WGWqV9bMpy9MFJntRMwm5hbnx",
  "key11": "2rpDxANgiA6p85KKebnSeM8yzzsZrV4vW9rL7fuhZBYSAS6ug9CgQ3UUuFJWKfctHxRkzKrFypTHJGCo1dxNftvr",
  "key12": "4tfZTDMYeZYtLZ3hm3zoyjCtALsXQPXQzd643Ha5MSL1X3s5RJKNBUTY9TarHJCtbmUnVHi2zZEZMEGXhtDbXXim",
  "key13": "65RwgVW1F83GqE6aAuyxDjmYXbLjuGWKYvmMyUevgpmYJ4Vmi1ePvBXUrKZtCYCyDX9Nef6949q6wEqyrkDF6Dw2",
  "key14": "3HG4bFidVNSe6R8cub8dARRzox5kwXWo4xB3fGSBqvdEp9h52UG8SgZARyCVE8E4TvyMaYCYhgpinX67Empqtmjr",
  "key15": "27SD4RHN7amoEYgjX6WER3KTzPcf7HYZ4dTjLmv5rE45bAnt32WZfFUmACb8HEhWMtYeFjgao5S3ngwk9HYBa5C4",
  "key16": "4hDrJg64iCJWyRrTMgMqdHVpcBnuptvrRVvmB5FmR2Z9JzfmETf1P3ubx4HQxud3stZfh6QTaB6d1BmCyKxYfjcn",
  "key17": "5hPG4yueYE3xE25tmdceV3X5MWLSRLNTYL986a8Pz1DjSWp2oSPkLFi6EVyfc4ktjqZWfa6sdkfajP3WQDD9KDXg",
  "key18": "4ghHeAUsBEz5PpWqXREjDNv8b3AU3kpgnfKSVmwahQVLrWkY2YpHVZUnzoiLPgGuEeqidTdEinrPQBReWZzYAD89",
  "key19": "3hte6XogUVtBb9cC4t838RFHDAWU1MRv9oS46A2JWy8jie46CShLeuR4ojg1d4AeUSF1RHZvsvR5caCe8Uwz544q",
  "key20": "rf49g3GqbRHaR3ZUAsPi3fCySYHHHzt7Bzxj3P46c5wahtkRpqopqEuhB8ERWQvQ8CKtpbCSnAVgagbgkZAVs5y",
  "key21": "Gpi7KXCWUahTNDQnS15s2EksJK65CnSf6VkppbtKv5Z3zDbEdwdNqgBpwgBTNWrC3R7TUtn6XBpYfj3RFz5XW1M",
  "key22": "aRZRoDHUXjDeuXCt91Z5FoGgwpVupjEnSBsJi5iMSvT7bbKpubWpjNHBg15pqVW53sYrJGkB4pMucAYQz6nZHuw",
  "key23": "2jmwA6yjsgF7GwDxWBT6r7E4196vbGE3kBcMXQK1xMrUhUmheoZuuV8MRr3VQ7gDFDaTwEzAqLn5SXnjyxJmJn83",
  "key24": "2NTv5K552x25fpMyokLNTXfS7dBJtgUZ9vaZGuW8enHmDYUqQczYK1vDvQkhiaoFhapXwVmKsjQdAfBfpPeDbbtd",
  "key25": "3ba4VUMqj1NJwZucR9gqBZcVMCBVHpUorLSxCiXvYTxqGWoZndoNQh1ijPjKznHsGfExCqmZmHrAD5QNsduw3FQU",
  "key26": "4rq3VfFTb5ahrQETiAUHZnovjpq4nWJuyoFKcFrUbjheKBbzwo5qNogRr9uW9zTxxQE9Pq2MR9dL3ja38JQjqrK2",
  "key27": "26CHenUfdF8jSgUcKZaYBhzBHbrjrUtMttE1K3c6whWSo7SQQSdWjDLA4dmxQehyom2mY3SVeKXyftqd39M1rZoS",
  "key28": "2mJYgaire26mMN4fdnji3ppv1GRauRDxohkNGs8JqjqF5arKBq2aBTTkWfGg8fWx4AC4p9KPjB7LhiWbRESvBMRg",
  "key29": "2uUdqt9TjpxGg3SmDPorsQnUm8DGpebX4AVDVf1E9eiXZEgeeBtJW9GQV6TJwNw8pqDJjp4qCVWHMtGQQ8S8y3tX",
  "key30": "5EpfAj7uGgJacBprN1cSDxvGfKUfZUXEdFvXvtjgV54uqVEB4E44iRsnCQN2wyGsxp78aHZPiAwbDLv6mMoqLVw2",
  "key31": "2uxu7RMhfYrVi9nutmAkekHUoHYmczaFT6pmbZXVzfi4RNmq3MyzyUj1EDEi9C7NG4TDANKXGpVLbsqx856egdiV",
  "key32": "4vEnkGC2dtpvM5EtqusJRm17V1xybTT8qG8GaW2CKE4gcX4UsmJubR2N287ZVFnVC6kBoEzDE2UMRN8MwVjqqteg",
  "key33": "5BNQJDPskRoyvNyrRQBqyfUShNF3ycUEffsYoJM4K8YnbdBnsB41rfTjnKnhhfTXJEqXmcXbz6m4vjd1FiBy1qSH",
  "key34": "673VqchKnf5pfLKe3cdapErbWEgqtGvee3mM689tniNnUnbTTWmx2t71TSBfSxsD8yESPfVf2evYMXZ37abFWcBH",
  "key35": "3dC8EnPtTqugiz2Ybr9fvngmAvXiAdSvue9pqgkt3Nr29g1Piu6rRAYBmjDJB8jpSpA24dEVBRc9rjVdbcLckSUo",
  "key36": "28SSmkegiUDbCggRCqu3mbCAKvfeCa6DiExH9JNLBgxafwLd6UkrVFF2bWqwxemKikibtJ1DcZ8NdAVuTkn24wT4",
  "key37": "2qycmnEVdNbT8sjQHZW7WY9aQvp8A162zpRCKSf76o5x65JfkoxmzMqeEoMErsZcHTgdpMvnZDvNetdLSDtf28G8"
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
