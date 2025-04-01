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
    "3Tnr77qn93eyMVp2wtTJb1nbj22Fusp6wkeR8mNjyQbhaq2rXf1Bv34KriEC4QLjXdL8B3ZpfqQyXFBW9pNxiuZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i5656wFHTNNusR8DdqQUPyav7GwYCU2Qm8CoLa84rsVvqNbSzA9zez8B6AKQrpetqW59sWsAtYFbCBDW2zoPVfo",
  "key1": "4U1ETZR9eZSnF99mfyMVc6u1uRsg2SDEkL6uippBaGX3dwyRcajLni8WhxSK9v32jKu5f7GGYMF5ymjaoWz8pFQM",
  "key2": "8johpLXZbg3sYV1AYiv3ya5dvCRYwkwaGw1svEtkHScBQzR6xEvx7FvDC3k6Rcfu2twBHCBUisKVHpBtHrSZqtT",
  "key3": "4uy3Ldux1A3BABFVoHmBBwCaQGjHTbv8iTdUKAUiXuLdXj33HkJivfZQU6h3CMHCGq7syU7okACkuc9BqB8AYoTf",
  "key4": "5k7Q1eHTnKKz8M6DxvbS5dsKMs87qrWP3HTgBKRPRSqYa1hZsmkmaVktgTuAmZMVXHRqVHuoL1yXWRCXn6jJousF",
  "key5": "5oMwUEd8nFiH9rSqKsZFa2GcNCxzLh4Tw1CEp1S4rUqHDTp83CneXKKTjvJ45iKj5B5jEj7bjzgtMMJc33XeAhPC",
  "key6": "3vScqk8s5FyWYbA5pEC8o55KDpR64NZxbj3bDmL4MrHw8hB5FDMrSjyvsJNhF8UZxiMLuyoHkKhaf3vyfB5GrCzH",
  "key7": "2Us1SMYUUv6YkE3k2ysS6AYHQQdXMwNNwSZpDu8gRPE16xZF5ZDQtxUCETSuC1eSkDr8mQfezqQqwwQ8b3YnGUm6",
  "key8": "2rYQXagxFdLTZQT8VKptru8qfRA1dsPCs8uZaobhpyJqnk6K2Le344LCwtU495uw6X8rE8AUCFGgTpYfRwR4qxHo",
  "key9": "5pdyqJrFpHWzSar29mbvenuU9uDap3dDzAZsSaC4uqvF3M34kjjrAekuUHo4C8dVMeHUNAfAVYdkRTP1eCZLxkcj",
  "key10": "5damMspN4nWweDcTNaJoSZLvczCuAkjZn2eZsaEVP2JayYbwnZr3eoo8dpnbNkU89cCkGS1gxhdBXrLZLZVgJEt2",
  "key11": "3YKsgstQaJEuavpkVsuLRxmb2Hgjfgf4FBYoYeat5phZbhZqYDepAP85ZLgS44xAyBj4TxupUCCkJJF9XTcfikfx",
  "key12": "3gQUm122jDPVo8SZ7QxKgG7WP8Amj6nDfLANMZkfnqyEYLXKiGMMKtK3Gt3xdi7b3y4Ja2k4DqFRQT4V3NJhCSTU",
  "key13": "3TrES1tceeeu6AbjXZBMNAGvHMiA28nh7LH4AiEkomd4vWpEsZWA24aMHz8ph5ukQYzu4Rctnu9NFzBUsEM7yYSG",
  "key14": "5sVmsKCNHWotyo8Fbo3nzgnfi3ttLU84tDZdbF9c5yF1rQD6V7NDek4JMda91ZX7qwiZQyVksjKHUa81X43nST1H",
  "key15": "46wWJr3QayD5uwFygUvaWWK3seRwa4GCenH55H3Xjopx4KD6g7aGA99Y1dGgPdYq1RbeJTyAZNXEEeowhUHa9RJE",
  "key16": "64JZ7eeJkCLNzBWXKH17EomkDfA3ZvZMLJCdMunhc6vSCbbs6dUoPxjVsDSYTD5sGgiq3aJ4pSLtz8de2eqL5ahn",
  "key17": "j8T6b1dSYz1iXPXUNUvAwwVxiZ3MhE9GF6V92ThQoF1U2N8FfqJa1ha66ExnbGPN9D35XAZMj89Y4TawsceyFfT",
  "key18": "48VZMjAVfEY7rHBcsNCF498eKFBA9cP4ZyQ1GhQ577ZbCZkvVYoE3i7Q3rtgCLEuRJQf2Yij4iP16LYjB5VCMVWs",
  "key19": "29z1Cx6eGHwVH4uZYQrvjnQNtj4Lb1VrWX9MGokc9eSno88drfhZaZ4jxAVT7vNGLYasU9L4YyB4MD7nJwwrG8Xf",
  "key20": "4RPLM2ujd589Fn4Q5RSnE5LAm4zTK3YmWhej59AqAGw3LZn4KuB7TxRQEUqzpgxKN1Trz3WhiwMfh6XCvBSP71q5",
  "key21": "43XKTUoEusEe7vcDYZPgZtgzsUiag5jVGfgPafNhdhGNfRhzsGCtLUgAPMzHhdBc3SiNFoqyo71e3Xfh9Rgw7X69",
  "key22": "2bofauxQ3V8NzgX7VgzAzbUo2pUPfS48HukNkG6BLycV6qRqnVauCSySRkn39zwdn2LwwzHuUzSkrQqvRrnGVfUs",
  "key23": "2xwgb13tHrBhg4WMFt8Hn4Gx2ig4jpnho1y6ebX2eP9LTGyKNhwgTrSiaNCVVGsuhGxt18eXDJ7K1CopoctvWXAX",
  "key24": "5REAHYQcRK7oSy1LPHW4xSPZPupiXs8B6h2Jt4Uz1GDgwRuvgvhMxhunaHM8ckjHUNSX7841QRzQZpx1KWdRzuDm",
  "key25": "5oUN3mkedphwFAyrAMmwN8fC3ceZpaEFkFQoWJLBiunjxTzaYX6pEqSrkk3A2Xs7wmy6jb7vvp27QzwqpaWMwYxX",
  "key26": "RvSTfrGg4GsUBy8Vu4uEmPpXwbFxqWiHW64H3hj2q38HFYXN3gCnC5FPe1x6AtJdiLHvysSFB1f7Ku2ZFcRzZrp",
  "key27": "3NzQhwKtvT9TA49L7ovs6rM2Z2V7GsA94nt5ZcrJKnuHgNoqFYg85WxqEWavniUhqbKRRpRR69NDVdJ8L8aDjv4G",
  "key28": "3LVN3NjZnJw7A6VjC6SUzxvVk1YKPBEWT3XVyTycKWMGqiToBeEbycHUJq1Bsrb6mHGbCGrXcP7Hz1mjCounPUar",
  "key29": "3Z7jNGjshreE9RF597Fy87zuNmB3yqzV6oeb156b5h6BLGbi8Q2TRbne89VRLTW2xq1yz6yaDvavFT7p37BWz14c",
  "key30": "3oY8kHztgx98HRQDjVrQ5CTsYj3ZE6s76t461es81sB2arGNWUJypuDhSGpSqQJpUBRrDn4NNeCX1gNqqpfrEqWJ",
  "key31": "2Lgpz9rqq2VuzkhAN4QDcR9dFVGmqApYC6APPrhFDXAdfchkqfaJi63xHTYYmzE1GBPWEdgumQfPZ7VNhwPrkpGj",
  "key32": "5xij6WHrQNgbnwNWE7UttZgGedybDy65Ah8ae4LPzdGpHJRzFwFFuNdpv5Bex96fzzxNqf2X93BHdkpxyibbRpyL"
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
