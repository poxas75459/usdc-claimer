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
    "2RNWqDa3QuSxDE4fFvauKSueBA8kYrV672fJEXnYPb2KpGvRw2eb4bnv6Bx5Wkkpdjdrx5Wh7zHoaZZpypUjPKUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aFJvtA2RWBkoH6VsEjEncQ3Huw4maPvQTXf9SEVc69Jt1Q27Bi9a9wReRsg7BqG2BYkr2Nj23ogQucCbvghqZJN",
  "key1": "Nu5uo5rv8TdkHA8uurGjpmj4K4eXwFgqVqiDPmjxZF5BbSKnnoSJdU4Mocxs8msPq46qVDcwZgMDw24r5tfApyY",
  "key2": "31vdk67axu6PykEF4r31WnjVU8k8NbxzUVQ8HjjfAnpuzDaW6w3bsw4yT9Ue64192BaYAz33ZB8uwXTTBf1944Ws",
  "key3": "SouxmcLSstChGwoHVJ857PEhuQN7zUgXfzKyKNt8kbdspAiX4TVy98piUQWQSz2PseYSzrxaNCQK7En34X5G8A5",
  "key4": "5T5NvJH467828Rj1rV9KWtXpsiNATCL5CVTgHrDKSmFyzTKwxBZjmwpyvGvvZKZfMBkLrX7uT9LWejVmEwkQ5A8p",
  "key5": "3T4aHFKyuquoYH1azBaZQEZyZ5C1oX4edR9GffjPGVX98oFbC7vr9M1YjmXLvrYAm1QuLSooST7QUsLctjPAecwi",
  "key6": "35AV7mPLSR6NRUfoPCprMtd3WK6V6dYpUx6FS3MShiPMQjcy8ZyRBwARpkBV97vwRv45thfzmeEhx6bXinHDopqT",
  "key7": "47UQ58Tpw7cTY2CB1cRhR66qZK5LevjTkEEkjjnjWUNsxYJAxKFXLLmt2xSYGxAEjazEsXgjwVrJGuGhDnMgwPbH",
  "key8": "5MaXwPgBaXFbZ6wcnvm1fgTJZd39Tgx6YdBhJ9PJKxvrSWmwS5vCzQPPLpDvYGKUfKKDxudwhUBpAB4Qsbe7LDZf",
  "key9": "54dpnHhCAJ3LgesnfxVyHNYTtdDFVmPQUUikhdRkHJrMtMubVrgEePHMS8J4gjVMHMCeTAsu6JY4j2ggiVrghJ1e",
  "key10": "2CDuT5uF8QcyE3A1XnwrvbEzodU9kk8Rt31zLAw8XL1hC1rNC5aRu9TAqVbsQLBQtDZjBvMa54r856jE24ec28ME",
  "key11": "3SqLZj3wxqx3QQNWT16Dbiochft8dyqPLEYdJSeS66wvkMvFTApmc8B9Y8fTKhzKVrPkFtmKsCPXzKoo2eps1Zst",
  "key12": "BK6dc6cuarW1Fb6foAadPX6pkb8bDDWhzj1mkemw9A68sUQQjwRm779B1tpDHujoUscwGr9yK2ErDac8qUxPt44",
  "key13": "Kvt5EZ8C1WzjY7owim7v2MZaeFC1aAhpAf87WcscvAaWMujYnXU3CR2Bkrmvau8rg491CT2EpvNa91TJdpnbgJv",
  "key14": "2oZv6kimy3nwnrJEEkegqV8v61GLryb52aAxxEwgcF92NGDQEEiLWHeBWpZaoiBdKX5tMrxerXkMw7QmWcaMLMNT",
  "key15": "4oa58eqzKCj1VeBuHi8WXj2yxQzT4iJ9rCxLABJSmPfbZ3D8uTfyQHkp59g9EJxANGCXkYJdy4mCaVrb4mFW1MHh",
  "key16": "5J89CLVzGhs6YWydyDv7WSiqNTYtrY5qAoL96zNspfuygYfAGUU6kGUawU82xtgjQ6x3w94RBWSzY8r7qVNhU2xh",
  "key17": "64dXgVdxvp8qLJ9g7bpBZ56rxFG25GVTyCjbSGVHriJbJuQz9nquMngBWHkiw8Ap7vu1cWNKRg6LC9AqqqnZf8YC",
  "key18": "41Trk8XywDqmBzCJi6L4ihhMrF4xdSppk43FkteXHGiVy6hVMtcJN8w3Ymn5pu6kWRiV5PwPjzChi2V1dEcqqHBG",
  "key19": "QDMfvR8di4PCKuDdfef2U72p6HKkY4SgVdT5p3R4gY6cdSq6zJUFKZrNtjuYkK5tkm7TyH696ZWvPHceibfH2U2",
  "key20": "se9gAkvRfvCDH1fp1GRpfDCt4fkee81QvHT2vfsoFgFGi5eoZe3GbAqQWTAAu76zCraHmhReV1zghMkVsQqS72K",
  "key21": "261pmbEQyqTcu4opBr4eScos52ZeGA4xEhrbG1bWWSrHirVvvjzUdCQFeGJkV7Lsy7q3UDt79trXaJFHxiiXj7Rv",
  "key22": "455HToCUKSdHoqwupncst3ipav4QMUE7JDirCzisXVp7WWMU7ZsnoyvN1UBXWp3sGUhktpKZm3rsYwnUspjgBenS",
  "key23": "3aXrjnZ64iHoZizE4DKaRchRJJpXrgPQr2CuMghhisC3kZf7RSQxATe9S5HqQVMeibCC7dFRumJPz2cw3uWrgv2p",
  "key24": "2LjD9p4sUsAmGvSUtsPsMz3ce8mFARVgZ85B8eBudQ11JT5GKHRTATdj39dSYTrHNgc4QRENxhtEjpArBxhmK8ds",
  "key25": "5D1zjd72NXRVng3dM6hB4A8tpBzAacG4NpRtZg2M7U5yBWqdLLVWWEPQwqhge8LAqUUhFBFDQhvQrVYz1eKskyZr",
  "key26": "3Yz1JQs95s4r2ad9LKC8w9L73qpyCJ4ztm9ZNYkX4BxFXjwLkciXkvBZiomQfE6shs9Q7GjC9Dhir8KcT1SxRAVW",
  "key27": "4fQ74WzWh3yLNjxviWZiLDj8daFH2FREgYt23PNQRPg5HiFZpfEsHN5ypkSNj7ofpNud4Eg3gV5PiFTa5p4iP2bq",
  "key28": "5mnY7G7JiD6pfhfMKThxuSXSpTmEVEi9hRUQaMAGd1RKVShbSuSJC6khdAGLBNkfi4Y3kvFTntoEGb7KYQyPSX1V",
  "key29": "5m7vgeJKyB5qCgrKyJYBhj8gHsBiRmJXBDw74kqyYCbmJpDQfpW15hMYRkRepdSHoXnjDnVxSYm71dH5B7VhbTx3",
  "key30": "3vAGYuYCbp3oDtcdTN51GRfpxTPZHtpM5tmiNq1jvkFBk7XZosSt3abjmzMUz5eUwUm4cj3JYvYHKWZTTGhpQWXf",
  "key31": "4rPXqUfmKkqJwsQ7pFURbnLPKuCR8bgqRQ8La39i7PwUAUrSX1prKY5eNB35g3XteEEstC89FRJ4SHjFEiaLc9yB",
  "key32": "2aGuwCcRo4jr4kBERehWAhZKGf1M3LMWhZrP9NTsvZYkfa18rb5i3wg6XJJKbagiCyGms2qJWKRFVrs5qjVCbcW1",
  "key33": "4b8Z5gK6RVyMMqX6s6mzqycYaVdHgprP9vBFF1QJR2RDjjdbrFsgjBYtDNzcFPiMSyZy53UxCj7poFPTEb75ULzv",
  "key34": "Lm1riVGYVvWTbWN1VJaNHpR6fiLAADPckncEpZh1pW4JrYuiiGxrLuRKggvQrAKBp98Jo7AZ9JV36u3KyDuzd82",
  "key35": "5x4DpyfhahFa7y4CTpCT9ea1rxi42Kd3XzBEddVdKCyQQfoSrrZ7iJmkgSKiBuyzG2Zqojt6WSVAXtRe78Ea8Luo",
  "key36": "5jZRCsBAZfN36ZTJiziVH6P93dzhKPmZsfRNStFWvUjs9BXGpDuMZR55GhUYxo6bZ6Ghy7CHhPwUN4yMcuxNFxSv",
  "key37": "3aQgoUTvFvWVdxqhshYQLgmp3Fs4hWzQFAUk8xZGgSZJ4nC7D9GnhfCZQw9iDzvp1SFQci6zBLoJ9vNbUY6ZqTQW",
  "key38": "2Mj21dKCKcmXLfJJs2Gx7FTWvsq13u56H36TeY4xzc4A9ZqWuVMT4CsfiKGAd2yFskxFtKkYhfbBMyJ2LQZTfgFc",
  "key39": "3bhZ1s8tU7yfxkf7ANyee5fxu7V2pPtsuhEMUQu1z9j7o6QtLL9hNKZgmFXN4dmjEMaEdDEJvE7hqSn4DSnjcYnr",
  "key40": "5RkxkrNiQbq2Rya4p9t3diFHEwHjL9LKRLLjb7W1rcjmmUmUNgzi1KFsQfZSFqznRPoLvBafBFMqoHtwdBVGxizB"
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
