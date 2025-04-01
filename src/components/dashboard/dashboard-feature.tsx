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
    "2QnuGoQDN339xBgQi81Rk6UFPCnbAQb6XrjfxZ4Ww6iwfRWo5DiTBoyZrHHrVTjBftefPcNeZM9jRmE9YmE89x93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1AZuAe1MhomNzcTpFS6XQC7rSApGqnmL4JAexFoMjmeupaNZrL7wgJPEFSnfncYHzGVBKAgjvZwLLW7aVLPJvv",
  "key1": "2TCePWEcRgdFsjnDBYan1hu8DEaQ4tTgdDYwKckhW3ESK5iktULEc9jKAa69KAunGwzyQVTZnmHwX7H1DyXM5rxL",
  "key2": "3pRPGbGYgQeembhGn3fM681k1kVWSF2dhpYAj3VzbjmZ3aWw9ZjjQ7PLPFvVbqVRTBtv5vbKVHUavJpkfYhB76hG",
  "key3": "2ffjA5VQXEDXT1UtTDX3e73GrmRhSZgoPx4eu4VN5wFuE5VERPBLNHNbbpP6RxNcj3ppMiQKv3m8md28b5gXBaay",
  "key4": "38c3nAk9mgShivdGWweLNnaXm8X6KaTo8AerMpZbBFDL7QkuCYwBiFCjEVP4gHXjZKESGcJ55SL6v9u5J3gEYYF1",
  "key5": "2Uze1UsVasXPResSFriFcVK6pefSg5YmndCt8c93D7YJhXsyRADvns8kDaTenFvhc5GZcKJaagc4REVccL9PKC4j",
  "key6": "SNL2MsZ9H2ZyVfHct4cUPR1LBuUHrSM7iS9YB7pVfqoerwBTh3GS2BBioPgEgrpMFo6KLg3cgAoa39LPKQ6ewA2",
  "key7": "35mPgkjhaAnqsdH7a1t3h5Gg6rzk62uinDNiGEFR5fae3RqKx5VpVQKnUGCjZnYjnvCMq2Uh6qqCEeFvd9Ufyrho",
  "key8": "3V42FwcpLEiuCiXxVJxWuAsf4sxFrZVHYEsUpzJDBifYFJvS4rsr66hCqDSPn3n8RdtnqLfHGzWuAXrtnbjyHMTe",
  "key9": "4a5g18x5jAZfi8ytGd5j8MzdQegd2rH2JBJa2vy8LRQHijkmLCT46Spo39Dt8e6fxSPZB4WM76pMg5RT562g5tty",
  "key10": "2G792JKxGyZdKTeFfVhNCY5YFwLh4kiGDNNx1yd68RE5qzj96A6HxN8MnYaWowEYt9JDpF4v6LCXpdkC7v5m2ET7",
  "key11": "3Zeh6NbZELggT8V5md1BBvhmRV5jNHeRwN5oN55qRnMghBQz6MDZBNyeCP26dRA9GJCMDTjHLfVsSK6wHdM3rzm7",
  "key12": "JfP2gNBKf8rAA4hCamqUgW7yk7aZuCpWvPdSCAnEnFj2KfWKt8ecTfnmZqatVFkM2MdwZU6e65AFe9aZwb67Cey",
  "key13": "gK3N7KdEtr2Rxr4RkS5KXvHepQayjH13DaJmsGckbNgzkFMproF1PpMX1GedpqBcf9dPtiFLqt6e1dgpffa8GoB",
  "key14": "3usbbsLdJhmKossRich19N68fQSuurDsAVD7nno4qDSkjsJhe8euDSqusm1r4KF9Sr83GfchxowxbMXGxNs4wJwJ",
  "key15": "8ssXBajrnnno1eAigC3YH9woEdfaoHKNxvN1i3S5xij5mcFSnaB4U9fPCGGG564hC5JiFoLNAEL7jQPYb7Zu6m3",
  "key16": "3AabfvmtKowdURdAb9QX6t9kN3Qq5zDXAjL3d9A9WkmeB38X4RjLjAbYTACcmxPX41R2tV8yE1qQSmtSuBmNFWUw",
  "key17": "4HqBkbBJD5LHSZ9E2a5EJJmwgXVf39vjT9A6qzAJNPcdYeBDRD9iradfjM4D2X3Ubw9L7H22YX4Jj7PR8L9SZvAi",
  "key18": "5Xd7HE4tUCcRStUuhKaQRoppAiAw1D85So6CVJqyqnbYGgiiVasWHjdZuACSxsHhotTuGZzuJjzeSCLvsPYhGcg4",
  "key19": "637FbaViMdUvudRk55vwgvq1Q32TdJxQSp4o54nw2Y9wh9N6mn8o9fxGdguT3YnJCdBfupmSRkV8FVmVC26AXsRT",
  "key20": "4PjgZn14B7fVcUTfQscM8QvEdpKSj5QFbSVL5KT2FsVcmMzctecPdz5r1Eje3MPhnpkHC9TLqUExBBEjyVTsZA5H",
  "key21": "2EsHzW7MGaeAxMMwwUZt8e1fLcSP37n2C7c6kftHnFze5rhDbioiEv6ESr2YkLCMR47yLKtjE419e9cGkjRWSHhn",
  "key22": "21p7VuABFF5HZ32FPbNqoJwrjk9KV5MW6nCCcBaxYQ9xt7DtBLuaxDmS4ToZoKZ5y3jKkv2B4pZCADTRBZtvHLES",
  "key23": "37KLPZFas8G6VggwEhbWxHpwhWo3wz6EWgD7Ns2ctnrmS4KXRsv9Kr2z9Md3pqdrLRBAsjMDzrnHyJWxHMb2qmnr",
  "key24": "2FWa6fQyReTdXp9jKWeDhB6PofUdfPYd4eS3Wb5eAiNnwZTLQ3WLkJSp9CepQHnrvjBXCKcjKLUcGimZGvbwSnJj",
  "key25": "PLuvk9jXoYro1sRtgcWv4pETNDeJX8XurrWCPxP4SfYGoTsdzy9BhyXFP1DfgridC45pLA3D3gG34rbaP2YEsmt",
  "key26": "4pphusBvBWBM9u7vdahCYgWG1ubdzqaESpfRvg1vEFiJK1YBTfCyzEY52WhEnLsj4UKdmGvZdxCFZVMuUHLsam3n",
  "key27": "4mMMmwWayhGK2d4fFefMSeb2NgGWsJRiAALTDBLSNytrsXbgGSG8xYK57BTSsiZjHS78mRybNDkCevZbVtkF8Q4a",
  "key28": "25gLcKLG17JLNfcnTbEQhCigHvCf1tjZeaQgvWkCET4FbKEwMSgg4HKHm7orpVzMiaxbN2AboKEBFefH1eJRxVtM",
  "key29": "4mJNf5KNvMrzAhZEJt5BUqQ4nGvQ9RsU7VAgXNEoqiYemu4FYD3fnMV6voS6vr3Kbak3p4jEvgi1cAmJpomzgDUR",
  "key30": "4ryo947xMjgmWpMobjTUA1ywi2pYsEm5e9mhfcKqvRBsfAtv4pGWr6PaNrAairM5gYZbD3ja4j6e27axQyV49eeN",
  "key31": "4QqwGqVfEot8pZ9QcTKFBH3cNrkrsVpNVuL7SRfzGnCE1SAcJu4HBM3RCMM1L9aGi7h7K9sUYqSWyvgigFXs8J1x",
  "key32": "2LsP4WLa9f9GuPzkeuwZxk8toon64u9VWBXYVGeRrPxpgQgYnqn8UNQBXsH64K4C29pJpoNuMta9XDf7oXXJvYYk",
  "key33": "5j58LnrAHpUNru7wuDyxXPjREGPeof1ZEz9jvN45WVpLsRZKiqsfLjdC8cSSttfNci4yMvz7G4c1XWvkQSc9FDnm",
  "key34": "4mDdvdsCkVEsb5jHkbozvmupMaz7ZoQoHANDPPeEx6Xvhi2CtQCnVXHDHhBQBhQGTyMJHS7RMpo9qaNkPcDWaK7b",
  "key35": "5xnbdfJBzBcJdTmF3S4ekarBcfr1qwa1Kb8R1RCvZUHjXX8s46rdDXh4GVRhWxbydDRhpFiSdEkCpcgxCyjhMFSB",
  "key36": "5zPmdGa4Na2StKnjaZ5vujPaY9bmXkpFZVw9x468ey2NJrha1jPvqDZTWJkG6DEcXkFRDvm1GgbcUxtdtZVC8sFc",
  "key37": "Xp6P3NYky8UxAxxFFLarYa5CjtrvfkQYKHHewqapxtkWWdPYJUxNGpuTkQWA494pJCSASY98PtqUHFRsc18Qypu"
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
