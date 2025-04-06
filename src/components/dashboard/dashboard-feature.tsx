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
    "5tpMRRdvngqE3RUJBNTJs9jL75LWAaEB69Ks5G55TGxo2Lfi5zQrXuujcT9QzBz6pkBLdgwxsBHfG2rfjJcqxoat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bxi2jgsSaAooMyacK5dTxrT7NVMrNqiW6o7Bzy7fmDJ8k344PaCRGXAvRBMNpHh6pYaRTKBMqm4Tkm52PEVWvu9",
  "key1": "3gcdY6TnwaNXzWrhvvRwwBaVw4W35MzUCkvxYjek2Vp3s5QHuhaWawcGZTpVjBK8GsX2xfshWXYVrBVBDLMPikKN",
  "key2": "35dn9rgj9BmksqHrRcL54WLcmnnjrYPqC3Rv7dn8X2qyFbrvB2pDqZ5bVUQzNuRYpzKBV2jbFhMnYXEfxhNcqv7L",
  "key3": "587ndWoDWzEBYgfUjZWhk9SotxJ8U4gbBottgp4WypbCkZfqbBUmogi6fjWbZHcJV156UXtbCDfBkKf5wxKXQu8j",
  "key4": "XVaeryCkYqvcsM1fdwkFUhhtiAcmFu64qjWk9mKKUWhupsxySdXPEcjjFG6HZaDf2z1fcSczZugtnq5BJHwSrQL",
  "key5": "334ECthhWSASdwxnmgJr8NtZbWQdaQ2hQJFAoa2LBfNs5M8zixgvvZirTK87bC9g9CHVUPkXZ87rtVXvfx4XpwVp",
  "key6": "5K9xEnhTzHNyK8TqcjH4S7C2kdXdBpkFGLPunnHfWUTKpL5sMRv3KCHZSuYHtfmFpZZQQdQg7GgGLTqX45FFMp26",
  "key7": "2DGpwbV6tw5M7zLj66tJv9gy9xUMszR3CBjxmj3vEAgAfwiWbRpMATVTuFKzj5EkkK6pzenTo7xqySMzzuEKBSNw",
  "key8": "1BTyubNfBJkroEx6zbwqAkC1mef5ntGuZhJ6p2G68xELyCpL9CPoaanqF6RH7mgS1boexZ1cZu6vh6WcXL3Yt4D",
  "key9": "5zxE3CJSEr5vxLxxtsUMRbcWkBhUbAfbxpKGcZVKsTTDWuLmYY2gW6bbeQ3662eKJTcucWEtqQRh5K523XiuiCS9",
  "key10": "5ArHKcGY3tENic8gWEKNY4DzZuUKXQ4WpC8J9ogGjSvqLNE434qufbmUV2ZyEEFoxidc4sxzjohN3NtsoxyKmxZr",
  "key11": "5LTEYBcTLTzbcz5Dh5V7qvkerPnmKXUEazTqc2g949fF9adeJxkGuUbnnnh8eQ2Ef2MeybQabmMzZkQsWLT8CXAL",
  "key12": "5mid9rNYRwbmUSuocjHFDsecTCaFjb1PgUAW2r2NTCujtUXzsK8ksjS59cRUv8jCmj6YKzwVAYWBKRFXcqeNoqcY",
  "key13": "3XjvRHSULmtzHj8KbzwRacRm5rMsBLZagwLpkUUsdsB59RtqGskEgNVuEvSHA3KvRdQSWcdAFaogUCA7sHmjrM9f",
  "key14": "2NW1JQZLkwpFsg4VB9UBFtZ61zHPL6t1bNjhWMR5AkajPf3w4LcM8qESn5EXCF7ABhHmYgL8oD9WJ4rB6o9rGSEh",
  "key15": "2vSya1akHEGmMkyFf9PjxrH2aFxooU8B9hGCKo26GWaMfNjFy3qrunmbEgJA4UoqwddukoHVpxiXtE2PArVpKtJz",
  "key16": "2D2FhEWMV83MJZjY48J5vyanya1UQM42R4pQdg52qx8bgUvX2EDQDgVMeFps5iQ9MhdChL1MKqXXgC37Hz2XN1VQ",
  "key17": "2WajWwknjUz3Z3DSHxXdMjbnss6r5RxzidiM2MMQs5EZ6rxFYGidYYKKH4cciFbQzGi1wZZuDKCa9sye3MEas1w8",
  "key18": "2GN1VFTrA22gg1xG7JGAWamadrxEtz1GZDond7qtUSoKuRDX3X39S8arZ8dMS3ji8Kfu8YPNhNiGb68efqpaS7nz",
  "key19": "3EgVnnm51hscemDc6vSjHUE9TEmu2A4894PnRpJkHSEAJZfso4cRXRvvJPeWBJqrws9rHqxtC4LviNjS77RcGCDp",
  "key20": "4tRHWxBizRbc8EnGvK9ii4bH21JGz3Wh2G5iyTyWCzgsm5aai1m815JqnvgFifUxkTCBG29ypEYePVDGj2FGdM88",
  "key21": "5nnSj9oz44UJ1f8x7DcxpyVgwPGyzRNQhTGg55qcJ7sq7xdyHHDi9KVYF44kWFVCL99Ukm5xpLWBFmxLiw1N9SGG",
  "key22": "2Pdvi4FaoMpMpu7uKWtBUUsCw1zSYfLUYgFVPUCb3Ury99jRiondR9TSeeLJLoNC7VSsgJ4K32PDDoiCrwSMutzy",
  "key23": "WmgUXmP5M9f1PSgtXgFBjw4xruNd3mwxt1Gc9Wr8uT9TFrv7CbTH3Q6mGPAEnsAaAWEHw5JqVTSVZrQPdKhFXjg",
  "key24": "43hzM7spcZuT6xD8sE824WuKgcY17ZQtNnjtS3THq438b9tjznA7CN1cLirjLGUHgxE9GF9wZSDWb9GoQTu3fFHZ",
  "key25": "5sGGBanqBuAXtGBiWZ4KySHxuT4zgwnJfhuRCARkt4FYbZ1XUZqDxyK5huJXqdfZoD8UNmvPbzk9Kg37K19MMvfN",
  "key26": "ju3Y7QsEjuThx965iyguLRuJJJ1P3TVJqUr5bPWMSAALYHVjLwa3boNouVQfwnoT2o3qQPKnGyrz7HYx3zWGb55",
  "key27": "yzqK61gNvbVKgxd7psPUSwE5UnjLdLc9WqjwuzprtGm2y5jA7y5hubf71Rhgtd6tWQe5dmeu6bkjNBzXBj3qdtL",
  "key28": "5H4rHUAUzye1BNBD9MLDTDbWtRtMVHVRH9Mf6j6MkJwewDPeWwQqmC1hgu3s9b46ACLqMq5PgyKSoWpWAAvywox2",
  "key29": "3ah3RqpjYwgzFvi4rmugtnWGEyBSK1n48VTjnffoJBPN4MrbvtocBFVVcP3CFkFjXoWrxX3nq14ySQ3bqLq2C6Wu",
  "key30": "4uLyiqhqKFjnqnWqw7PTXTqNxZSqRY6HCxannEgoo1QKhbASrajGj5AQkSxUsnUqnpAUATQeTBmVQP7cu9hHNDn4",
  "key31": "3b7AMNcQH7FFNZ2qktYBagKhXhEM7WSsiSJSRbbADx5Uzn7Eu5okJnL2ktYJwkVqahyWX9tjZRHebNMDRYP83HVE",
  "key32": "B3ZR4ADDXATvVdixrNDJSSHVa1ChYoRBUmKQ2KgRCDjMQSJuL8ySNGpYKzXB1JMJVZQgLmKe9dzDyKuYKSWtYFu",
  "key33": "5hHEUaRavmqBWDQqmzdMguts1RaJqjM2X7QZi3cjGPTBuzxXbc47x9UK6rQSykCy2W2btREVvgw886izN9BVJBc9",
  "key34": "3C9N1aD6uSkM2SwUJyKCYZWxzt36f26ZAoRynJTCQXMXmC6aJnaEuWC8w2Aur7B9ZPpQwPmiHoCFFce6nRBx6wFR",
  "key35": "3aA5R7tovaScJutkjLUjAanTcrHB1DYBcmsFZCxjtcCi97JY41syt1hzrNsu9hPhFSUwbEG4xb6Sv54r3k261D52",
  "key36": "2Q4nfoCW2V9w9C7nzVEqDU5pjAmUB3yHKigZzoEnujzdqKjLJzqf2dtRPrha8Lp3uELjpFCN6JZCc4d278wqSv9q",
  "key37": "Vyw7bjwrw4u18PuA8DaJe7bE4pgzBKbyCnRNnUVFjjkMtgrYm7L72HZp3F6mmYnBPXmZK1fqTyPKuu93JNcvVYN"
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
