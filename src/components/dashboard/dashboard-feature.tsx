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
    "HhXa9zTrx6FF3v1TzA3Jep1MoRit8YZC41VoyMQCzPwDNpUu42BbpfJRrM4xeVHXrmXrVtzrgfK4T9WXEEsDCef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8151NWXamw4tCz9vKNP5udnAoyc4RNn6Q63cTwMNs4LF7TMtBEPihjD74fXoZKhS7XS9ev95qA45jZC4gmkFMK",
  "key1": "28QoZDzV9JwTaZJv1u15tBxaHRZwVSbKiK2rEYWDNbD8p6Sd5T5wzqcYqMPQVtdqsBXZ673TBUNwRJrGxGmY334m",
  "key2": "27wRqmzTsCMtMqgAc7BDQmyLb5GwPpNJhr8NQp3oGyqiNhvko6zbcYws4YTaFJX83R5RM9f5ZaCoVgp28mAzu7i3",
  "key3": "4gHVGnXFD3J2vamh8dkSwEhDvhQRjNeRqAT77Z19yQQtYpoj1q9Wt7DBcFyFM9nUs1R6iWAqh2vRdGWY85LoRS31",
  "key4": "3qFExkVP8wEZxtCChagYKzcpgnthke3tK32wwM6KWuiaYkx3Thw7xXTNpYME4oy8rnW55xG2rLPJgNJYJU3WvfM9",
  "key5": "3Nw4Z6jzxWaceKJsFc5FqDb3t74qHe1eakkLsYEy53SeJKs9CNmA7TxRWHXyDk11WRf28FDBwkhovDpig99g3KG6",
  "key6": "3uJfitN8PyMXX5Pv2Hg2ByigsBbFYy75QektVSSkyo4ZjwipLfJg327EPLnT3oMYL7CB93qMt7pYS9PNQTT3v6Te",
  "key7": "4p3w6oCQioTyAvSFqckW864nzWsXoEBHTULA1bZtgBku8ZvnNHhbjeH9cEBCr2j32LyNWwW87SBHsVWj6CH53EKG",
  "key8": "5NJnYMMvSxNitCrvUATj8WsE6PVH9skWY34pz7z96RD7KZn1LXSK4A23ydeyGMaou4rPZmXQqD9AwRqjRrn26RJq",
  "key9": "y3dM6hm7ihoY7Smw5GxzHbuHFmHr3hFWnbw1ceHe1zvaED1emfNrKs37NyiLaGzZvqcgf2iqMJ64UyRQJsjk79w",
  "key10": "3KCYunGVRNqkAzkCADhmpQKpZp865u8fzG6FTTfAJjtB8hGWLW3KzrjHwKV6iXvD5uzebfNqC56yP4p3Vzoi1nsh",
  "key11": "LfgRbsgWDALeFNQCifZubmQj4U6TFVArmbJZUyEhBZHkBqTosu4dqxTJbit3jknJSJakxCU19P89UuEgwHqe1hf",
  "key12": "Rgrw7p7cyqaNTnBCG6fB3ahVoyhgw523DAZpjYmehjyRD2ANqomwxsHfyzLBrVV3kozh8pe9xsYeKd62uqhFR3Y",
  "key13": "N6AfLMJJPdei1hNfgfAbdLJw39LZ98Vu9qk4HXt2y8NC94neGiVVUHwWVSGaXmono8TLg8fFvDyMbAUDntVSqhU",
  "key14": "FdiPQRVHsU6NGpFR37pUSMfJMwy8ZF49VwrXr3Pc5uDSSrhxxRc6D9iAubJsYESC3njsUq3V1aUzhVnru8Xhu4M",
  "key15": "3s94niKbivF5uu1nmeQviQ3d1kxVr9Ycc2FkP5pktr9yYH26DnddgDXBVgkwdyxAkKNMT6uyhuAht6344SyiaEL1",
  "key16": "3fzgBTFNgxxfPvsatuLAU1bT2A4C6xQxXjdGBECbgWcDQwhD1yGEGk56PRv3bU8WAyQhEPFxwPWRjYqi33C8pdSw",
  "key17": "5Z7rUecFjQd7DCNiCNKbiQw64axTA1kezrC2i1ssTjkqN8EQhE4nD65FvzvpQR53x7k14GMBQJExZt4HZfnUpAf1",
  "key18": "WA4Rh8Lqhhmc6MkLxzA38Zn5nxU71yx6UwVkFsAouAhLhThKdjHcGBDLDYXejAzQtPwDsVdWwK9zXqbLvWq9Bbx",
  "key19": "5qXEYS7zpNBsuuFcvDrrai9vaW6NNM2NPWNXRigNab5Ntb9AMXqmvL1sdYk4d2D4cDfLFhbZs6JCrC8GcS8WuP5b",
  "key20": "5RpEyBsNeJ1mmAjFfPjotfsHBphMqXGuqTXioxYJKaEa8Ckj8nUXAfqdnuHkxmnueLW8aZKf5PBxaWW6SJk29wJr",
  "key21": "3CHPq8tW1euLKydATWULELw11fw1MLG3NZitL4Z22DmQuGvZJUwSXuRYBHJMLNvykb2bHW2vVGs3UHdWgk655qKM",
  "key22": "2bEEEuQ657KBkMxdkg4HU3eeYkKQq19orqAFSNFVobWwNhTbBfJWUYE5WDmPFnRqPseHewcJHdR8HEB5mZtERtde",
  "key23": "6tt2GMCyU8gHpjpGxFsQA6Ebm3zFc5oKLukirYK88f13ZGjeePpVqxzdKKf19S4QEqwEiFP8DfTnVvEWihxTP6h",
  "key24": "B1NmbBvueAwyr2aUqXHsH1mcLQd8SQ7pp1E6BvgNetsjYZLXu8qcUkL3SpFvnnjPG6xN3iSS1jJtfw715h5e7E2",
  "key25": "BW1KtXJ4W8cEDpnKpvQYB3USsHxHRdBtN4JjKZpQd7Hqn9pqE7Kxm6HibFM39LkJkKBwaodh7WGrS25Ce2ao5SE",
  "key26": "64XHzFTF2AqzsTgrex61VqNjQVRBouqexPJCj2TzJxEpVwZggEHRwoq9aGCcAUCJ4rd6sNWyy9yKmN5pGGHNtgCN",
  "key27": "2avekTi2EKxdzVA9rTARdxHcdZerqnWCCkgU8Pmy6kBRvVPTzvP3rztGHJvUuwLQxYnFDPFF4WYPdyXkDdzXN2n3",
  "key28": "3THhYteMYbXMZoiVNTweKsxmP15PhQfiVeygDQ2GM3HfJyc5s9Ed4vJP1uHFDScRTamRYsFPTTXo5nFWU7Qxb25j",
  "key29": "3qL4x5m5DDGRmRknwX1mG6S8BSnTGQV8xbTtheBLWNfHs4zLUHwcxCW6uAnupKhikrExz45xCXDipH9q2XzQxv1T",
  "key30": "5g97ShYDQjpqJ3HSKxDgdKZy3HendDM1g2MVdtRsEhazLVE41rYnCddhypvpyA7kZzuFZzwW5BspcY1Lz3tViDgJ",
  "key31": "4khDjoaHaRWqmXbQ1AnQkRFpyxmMDwzVkkhRGyGhzSRqEDiKLrTsJErAG8TaAV5pptzGucUeNhfQ3eRb6GhAARwQ",
  "key32": "2wisfZ2tPXEE4ATD7JoUbqYSYCCSRXNSvoXfHfSMDafWCDHAUABYkEHvZQqJhSSi2yeY4z5o3YXd82vcH6ML4JAb",
  "key33": "4FV5tFruwW1QToQ3y2mLTS8whiF6UMcyTs9PUE7bfSsoLuD127oTPEpTKizaa6mwoggtd3duMpdoknYqMsx7ikmc",
  "key34": "2zyqeomfiJ7McXhnn36ibzNN69Bqjgp6235eUTtGqcEi2CoCCDPHADywx17yTjJim2qjgdAYyUR58JT21E1bLVQh",
  "key35": "5b2AyiDFkcm3FiCCv8WkWDhEhHN565nxo5HiQLnjYZk6ehbQEmqecu5VcYxoSnMb4KCiDftxCWgZNWMRv9P56X8o",
  "key36": "62Gs2HNh6Nh9hpHgYspMTpHf8kodMxPYYqRswK8vojtKMMZjYVik5u8PAnSNnzTVCMWBb82A5fSz9e8cj8ArwrPC",
  "key37": "2KEqo9dFZYqMQtC1J6EjpMCRB2bS2x44rg1PLrZYJNJPEEULVfXs4kzcLHs7xNZ4TyuRQ2ugyZM7quQSAb5iW4a5",
  "key38": "2s12FZUAjkHHyjimshSqfCBMGmFLiMBUvWqE3zyUbKeoWPMhPxuTqCz8iWLQGuyRrGWYmwMuqSfWsRGRriwkLbY2",
  "key39": "5ntKFccQS88YbeTSSPXtTmHS74Kw8zSiVgZ6DhpEjnSkN7ekEyPS7Cek2cRNnQjWMKv5otUpwohqxRLeJihvNenG",
  "key40": "TSbsocbJYmn8eBLWHVREMCiX8c9EcwXYxPyQNVKGPX6Pm9cP2RmvVB53B1UpTtMpBnkgjhr24EVWgsmbHF6uwpB",
  "key41": "47Y4bK5C19J73GxZTq9VicYBYvPcmreEqyBXjJeELaaFYisSZJ6iDQkX5ZURwEQasEe9fdgYnXup6QEmGHPBJopT",
  "key42": "5WWeN4UVwDia2ZkCrZrTkawjTjPTofQ8EEwtaVrj9CB2LZpA6a9JeSYtYSy3vcBLkVizhpkfPaE7sGD1JKuAR1bm",
  "key43": "1zHkASRETbcRn9Zc216FhTGoVQEJYMoNzipKXV8iBiWYrZxhEW7YWq4VpPntRs5SvRRWrUehmdQpY3JUzCGVrmV",
  "key44": "3h8h5FzTMtMWZWvVhURCwjXz5Wi39jcm67GEm46qfoHJtcMLd8U8tgT3eZctctGJDJtfYBdBtXYWnF73u9aKTxDq",
  "key45": "56Zeha85SuF9cQjBCo9xWnx6gxV9nKoXS3kSbd431wo4rHuDJmvYad9nqXzGTWyb5j1Du1BQmDDwK33dwK3QoVuk",
  "key46": "4xJU1mvBDEZyWDswV6xzgCk9UWT5HRActaR4UNKF3vx2TfmZFmE1mRcByPRNYyG7P42QS1fMpyBdcDoDvudzht4K",
  "key47": "vooDhFC9weFWzr4kgX9xMR5cRMShq9v1Q8p5UQfDYuCn8bFUwhkrA6a284UTkJ6NSZWo89gYJynRccHRttSYevB"
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
