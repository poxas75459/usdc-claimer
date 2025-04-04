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
    "4v9hJuueRZnAksSEnqh42hc9HwjxwLMCYWJ8CGxThFze36SjcR8G6Qd9GfCdC8ndQKo3mCh2GYtFBuG6rm1ESqJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GXPoSUxYUsAtVkoEqmoJfGDZdDgKUhLPfow8Yu6ERqRj3U5mXshTDBqGBAb55AFTzAJkaxjts7ZSh7nKjurL6Jm",
  "key1": "2XpAxRcWk4WWDtqKQ73Xg2LSCDjYHieQd4vxPHvQEPiZfzPQgSWuzHYyS2yA9GFryFa17QQiUUuWYLzUMA2iX9nA",
  "key2": "35DH42iAVWgczQETxj5Udjrst9LCC3FLGEoKh4DQFyCu3CQRuWKdp8pk9zL3NVZYrX8bimQt7VRXy9Z23xtJYPJs",
  "key3": "5tD9kkQUS1i9g3TN4BhUTC8E2QdXXwn5sSEGkHV1uVLELTbwZfQi9iXf9edHgkG54FHGVPM23mEDzj8K5upkhcwV",
  "key4": "i2uhh3K4xwYtvrmSA6QhG44kFwkJKQKZfHtz5N9MervHGpLkmEANDuJmCrE1UPYxfxWWTY9RjVVLnxUtvCzuJk2",
  "key5": "vioMXkY8QS1dymSPNZBLe6fX7Kz5iKPEeidYp5JfMnsis17AYgVsvsLK2TM2LdvDMQANGEeTpeAcm1rreS7Ngtu",
  "key6": "53RxhKhprhsAo4Myu3VMCiXV968z57d1tZpGnRsxgsJ3UdXRJ63AGiNCpDiDGsm2HkUihWW28JA45FqZSpKztequ",
  "key7": "5VPgjiirJCFWhbUkG5wCmzJDPJz1EzLe1dsLXgxdDw9baJ9yuGStdqdfbRNjAxEMEkF4K9ubLeBVeZn1vU7Xpp5f",
  "key8": "5qMb6Bbji2fKZ5j7F9zwkVMzG4mSW7S26CWoasnD5tR5mHtvU4H5Lb7U7VF3stQ7XBc6zDx7xieJNdboqHE6Gve",
  "key9": "w4YYzZ3vHr5TKGEDejdVy7xMKMMLx3SUKcJHfVWQJtVYNa1QfEPahgFF4UzupbedQ7QdaKTqdgXAjcT5BW7AC5Y",
  "key10": "2S9eWwMTNgGhg4CcnTqsNQrrixCHKkXoJRGXU6vY22Z7Z4HB9aDn5Qqxoqm6i1EjbwKUDVtccyV1Mqv4MuJ6jHkb",
  "key11": "5BMStYyXastuxUotTWhG8YZff7mjwpD6XdsAv7CMomsDcxQWMmsXhkGYLT99P6zM7UFb7MZgBUVREqUEuR9GM2uz",
  "key12": "5AifrBpUuwrfCWX5RuWhzU2v97wm5LvJz4QQmhHUfxSRhhwG9GbmKWfKhrzJ66KKUaUbFLWeJzgM64Wc1c37mWfq",
  "key13": "5QpFhN9iP2CtQLmBEhMYfWBHpGJVP38iHAeajvDkDtadS9jkh4mYj2Lj3D5Mtu6rGg8wHseVhCnG1FicCU3CbwDF",
  "key14": "5h8X2ZVfdQnkRWuFG3cisSx1UBSRsg9uhpuW12UkkzPLEZoDdT3S3jLwaqn8SekiTuKuA1nGDXib7yvvhHXB7BUq",
  "key15": "2DZFj9arY6NXxoD6EuKtqryQt6MpT6sMWRdxHnJXkuGg8rzzZX8GLemTYFmHPt2khBSp29qVJ2YCdE2RG5ATw8cR",
  "key16": "534QdgjL9nhF7VZukpZ8DffY9YLPkLFpFUrWeZ3rZc4VgXBaRtuy8ho3xTZNx2rXz68G8BoaX1V6sDELbHU6P3EQ",
  "key17": "2e8XeYJ4efLUD4w3ndj53B3bYB3GRoJ6fVvgd9pV7FgRk3LjL3CKHRs6fnFKHLKtXGW9ckt2d2DHoCWqoA13SJzd",
  "key18": "49xdmisTyZ5LZnd26NuiAVCdyjASebahAy2xCjWE3LJBZ6zrj5agzYE8piwbbN3MjAkWiVn4KfQBxWkrDfToqhne",
  "key19": "g8XPt4y4ZGwPpnKfQWcb8gcyexxZ58Qk11xjq8s3v3vpufp1Lc5uEZPzPkMrsJDtCSictyJZmsweLU2QczAXNr7",
  "key20": "4xgG4Z1XWSZxMXrcQiV5GhE7aF8ejK1yrYdnJYEmerDMHo6E9cSfJkDZQrTbwB4BF2U8jcJw7ucyWk9QpNFFFcg",
  "key21": "2iqpNQnyveexasGDLJniJFBM4akU2Rpjgs5HgPdpWrVZCqs2LL7Sx5VNsy3Lo94dE8tvYvjp9eJkHJi21jcHCXpx",
  "key22": "PZmcbxNicLjMg4kYZBCCuv9rekR8Wnk2w7MEQ3GuCzB64N2kNXbMqAon5rRcCVXeyKjAvj6A1Qq491vZTpqEK9E",
  "key23": "2EQhdP6eSaJryMuav9F2BYDSWz42gpJc85yiYaZNrTP2hrGysHvqK3VhvxAzdmPngBBQnNbU6Cwa5ampC7LrBTbY",
  "key24": "4mkhp6udfNe2F2Fbwya5AKkhN9ijxqgwTD4p3hujwG8UJi2V74JtAn4GvwnkzKkhfzeoc2xRoUqaNvVCmpuDk3ms",
  "key25": "3YXEDwZY4iGhtfeXxomvAKd2xBVrRCQHB8jX1QZMHZhFepNAHdSnKXLaReX75uWsCDjyLJocebyJVaQV71pum2tg",
  "key26": "2PZQsfsmYGA95ZUbXrWTX463oRvmHVBGinFT1fZWiZDzHpTeYkDnXBiqgSU4s4FeHcuPSw4wYJdgLEriFGjaPR1w",
  "key27": "LjWVcviJtQBgAkybqBnCNjFK4E1r2ANSB3seXNC4oK1fRt3DzKNuBHe93MZfZQXx3rLGC2Btyozyv8CBeBLEkvF",
  "key28": "5PZgeVdepF3G8ZaEx2dFjtQibPfYrbqHDj3fYvusyUde17nRvkRLqVhVwKoCorUXZukk6QWdTieTMpHBcN3pBDme"
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
