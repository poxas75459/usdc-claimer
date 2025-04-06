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
    "iWPgBajUr8EEvnJZXTiN56jayydTMB5Gy8Lo1dsvsFxEKJMCALh9jLjV7XXZPqTDz5Mc7jw6ekDf3NPbpJXj9Nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJdoo5fJ7sSur4oUjxqqJKT8kNwEBEoSUHcFgmxa2GPZPBn8kJrJ9tFi7xdAeYLjETWrNJvdovhMazcMQtG7bDM",
  "key1": "MHdBTnPPEZSzZ7QNeC1scMfo6evGV2dFmnnaMS61oEh2QQiAvezpQc6bgSWimovF2rJ39VBBa8LCALHe78FXoGW",
  "key2": "5pP2z26jQAwna4FdArJSZYhrQZ3phYBDzt7Db1fP3DRcty7p5JLQRFo2w9GTXEMAUUjMpRX9XTYf7ENGD7hiiALz",
  "key3": "3VNcEi7qCL9WyYLm4rtEWFEkCDYzB225xt14vCn4kSg3NQkGDP8UXLEwyknnh1qx89Rr6QnKJ8wEBwgiPorCL1Dc",
  "key4": "5XmphHShdGdRDqof8ntSDwE6Z6zrjYS7Yr3YbTkcCAR4hR6qvF5jgs6mYSwwWFBy5Nq6MQJBZS3c46c9NkpkaiQ3",
  "key5": "2vjaSbA9Dp6fq7vfDrWcZfREatoV9TixNWohoi7GFm2p51Gr1DVNryGJPSCjtgojMUCwGHEcMyyUKENzpap2kEi",
  "key6": "cn513YGdFmMmoo7MGJSzAqUg2PM7ThLPeYHzdiBXjEKC9TvBXVCk1M4dTNKRHv2juMQhLgtL6gEknvHcacE9QnA",
  "key7": "44jUfk3Wofp9GYeCwkXEYsJAhFBPT9kyBaLe8mrE9sW33aX6MUWv8hvUU4H2L3H1yNWYMzniReHLjXk7eSvoMc1n",
  "key8": "21K7xwyTHipJaFd7VgUAjgAwT4D5XBQ49zGWKaEPmaYMY9RqoT8hg4RDdwdxaGrNpzXP16eNjKHqCt1dW2ZHDNwi",
  "key9": "3R5zyrr67EAF2QtD6izVYM77mLNG8hSsUFwz74wnwfwsiDhqeLy6HAtnrcH7uE48VE6F31P5AQEpChBtLYsmHC2U",
  "key10": "2WjrpFNGhL7bQiKJmHmZkKhQP1h2MTCzDjoqC3KEcA1edNm9KZYPoFL9XjaWV1YmMANi4nvA7SCr2zbiNxx2p4ez",
  "key11": "5qV1VuAeJVW5SbuFyKS6rBs1jtUcgPMhCpmJX8txDCZDRDxu9PRsJkF6tNNx1RVtX5S1GtJ9iZ1pyfXLHMmGdBGL",
  "key12": "4edWGQEqP6XTeLchfdUdm6PxMmcfxj3kA65h6ZMe1gDLDn8VuPdyLecLMTr9Ne9CSguMqcxpeZJ3GfoEYe7fRzVz",
  "key13": "DRbetKm1PbxNtmSTCB9eALTgPWhDDRFbv9AV5ExBCGPZs8Sfg8c2fR89yLHoKRR5bKaFRuwQ6anFUaZHTYaYCDU",
  "key14": "55XbdUYcGMn9ryxftHsvSvhgBpAaf1CKecUTcy9K3Y3whjZVFXB7zxfcuhBgmRuAVNJGAT2WgSv12q3J4cu1uPt9",
  "key15": "4PGTypeYnT5n5BjEqF2wRPh8N5Vu71LJHbJdpgGJGgRpF6e3whWk1F9VzLAjtsi1k8SCeBKmWV8vDaqhqGU41Zit",
  "key16": "4EDSpGAFGS3XUgKZb4sf9EpkgoggDRaYWXKZaA55KsT4GBBji453Nzbd9Wac9j6jVM89fGzXqNnxz4fzzQeP8LPA",
  "key17": "4Thkj1Y9HWnCQvzFpwEwpGi1gAtr5yDXvCUqkQ7RVKp6BbAQgtBDrVgaFLG5mRwiMnTU2aeVQVxSmMhd58q3tRoE",
  "key18": "ht6DkvGAxG5y2jsxrcUSX8Gq36bVi2kM6RjXzyXTzyM3aJoYaQ2wFP73uNpbXYDa67RXjq9qLKfgddez5jkeiq1",
  "key19": "6ZnviTHC1h2wkp2R376PFgoJWpGFWgyQ9d12nzWjAYWKsykLm3UMS73cKvfCyw4GVxTZAE2JsZMpB944r3wtZ4b",
  "key20": "232HQEK1P4sVdgaFXQY4S5KtBpon2tvHKj5Y6zHtdXmU4kyygwyhGdFyRbUMouwzpQPnAxX2QwofQhq7bfE2jvR6",
  "key21": "3f4jZj7pAyKYKu8L42q1AYG3FN3cE6qDXaSxmC4DrUXSSzx4dASfAeUeabadQVeKzqWFeDQydMm7Q8rTB4xnvh4d",
  "key22": "5HojCAUVR8v8kCN1KGn43tEQAHDaPDCin9DNEvTN5emW9sqa98DzmsUTpgAJc4ipWz73HY3reeUUmKHxz6ohXTvp",
  "key23": "63YeGhFtSsKPVQjnFzx7XitbighrA3fvrrCMaqC8P1hcteLfm55KCx1FdhQsXuyHnddiXG5adazAZdTzSPwV8Yty",
  "key24": "3gA7fngXrwKBrEJaF9dV6p921wyLnJ83DbPoeXQ9vm1sQsQB8EpjHzrcNrAykUUmVW89oZyhSxqhGg4qyTzJANTS",
  "key25": "45QQrABwaJX4T3t7PGHJQ7wkoaxac6pfUfRUWWWNYtLqSmcXczAiUAtfsTCPHPdLdK3UTHKaZamLCjDPVYH9UR83",
  "key26": "4pnpYRC9TxrFfYruxMRoshqMFFFWiTbSBirHKsKXF6m1ow3mVcMtN9VxkTp3xSpYogyJZsdcryTezmKps1nDgto6",
  "key27": "44pU7btC7LgPhwN1nTpgos7A8eZHD17WwGqx7Vv6m3jGukb8y4BPcNxxaj4EzakDTFDyZXC3BDEP2g4axfN8VR4A",
  "key28": "48WpXJRMHnzkpnQ3bQNWkCP8Y1uuwHWUoTVwBHinzd6dJA7Tq3sQq2zeJQZJaZ775Lme1ouf2sr4vQsE4hM6J1LH",
  "key29": "5k9tJHNFGsMNQzkvqa83MnJLS8jQy32B9YDy46shvTaeWJP5UgPRYU3xwzRBb1eoPVundpu5a4JkYZrBmwGnw8Tg",
  "key30": "2xjq1J8oopKmuiT4VSDiq3iyMETiwHfrfnHwm2oEtLEkurrM3XaHazTYtJuWeiUHQtvhuBzim2jwL2WWTAtzbz1e"
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
