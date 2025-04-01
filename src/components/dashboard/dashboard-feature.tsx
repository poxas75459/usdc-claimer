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
    "3etxzx35Gft1UuYU6jSYQKcYt5fv9pRMb7WfrgKv8cUpx7hn62MQXkSSnh7FiT4o5wP6xMFcUzQiG4tdYozAx69Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eHLoio9r193S91DAaaN86FuKTZeFjpU9uDka8xmGiZmjAdXKEikDR8EhiKeeYoNZNScaHcjfw79mPG54uUEA9ZC",
  "key1": "5FYy5YvRpeSJt6xz6WiKYLhTZ3Wdx8HNWrpfQ3Da7c5LnpmNu7o5k5MncsMPqthntZnJg59GeHqm9zbk3WTqnbnA",
  "key2": "36Yh5oe5qFq6zbKct2fFf1nFZEjbuKpADvA3QyzL67YFfRA4bmr13YDjnzAG7kEk5DDmAADT1rZA15ZX5fPRUNuf",
  "key3": "4NrcCAiC7bMEiYzNpgyq4oqjz9ennSAYKSyciimE2FvbVsVqVEAvfKBRpZ8XD6ZUZQ7sfT2Jn2GdGpCaNQH54d7A",
  "key4": "4VWjLY6JiRxZrxcFZJX3sZKWGsZkRPU9Uy6M16pCfrYZvrisRrpk5PjxRxEpWZgy7aYP1rip7izitMpVfZfKcDqN",
  "key5": "4XjmS9gSpyr1BguRELUrN6NityRPtcbNbUXCzrWTdMFV6X8sRK3SYcsRwCu2h9bRWy5w9WddBpbPShcwuqVjvxUG",
  "key6": "3PaUFNB1ogUMjxW88K6xSEPUrVgfeb5baNtxAGPo7oZVqnP7WLHd9mz39NgjL75dhrEFyJuDTvTDyUwhYcJ9bAcM",
  "key7": "2nfgHqG7GXsangEtgxfLN3X4moyP6QBx1JcFdPCqgD6QhacNvxJnEHHqekpnTRXqexdofTmh2L93QY2TW4stgPeV",
  "key8": "2yh51tLwh5wu91YMoAxYDDno7qjM8FLN4BJWbUChmUHUHxfYs9kkHJpLpLWk9HtNwLAf1K6H8eXc7tC4devFmbcv",
  "key9": "4GYQobusqh6xzahTk1rTNJUxhdA7wYXFyMuNraY2HTr1yyQuhSZEFTDGfQwqbwG5rf2MnWM8PWcnfs1Kp1Qn9hBp",
  "key10": "2p6zodjfAVLZT5521Wr2wWQEyraP8br4H5hf3kz9EWiozfsBEvhMfX3UAvufMBzp3yKV5xxy2oepcHsRsJRmjzTC",
  "key11": "2oEoTsn4txphAnV8EcXgJJ3zQYoFiiDqKpiiFvjKaRjjpGuHMw6xeUyzydEsPmEvMq4cDyHQZbXqruYJyFzN8Hkh",
  "key12": "Eh7XkGQrPfHLaHdGtFQ6HL3Rd737syWKyduFqpuM85TNTaVg2rQUgkrYEMTguTpqrBGccydyJ8SvZpRyxLacYVu",
  "key13": "3yMyGHPcts7GcVoJxdR2Jp5axctaFeTZwYE4xhT8SXnGFJxwWChkC2yEKFyUsjJbGaizQH8zTR7xjtqqVCoB2CeL",
  "key14": "2cSUH2QctHWugcYgXXyUHTcefCVRS8ssucZwRMd8A2PZ4jE3ZCyD9pf3jUofQbcAfXvfCSUcskQqaXhWXff81RnA",
  "key15": "5QV7PoevQMq6x7uAhvHEaieQuoDyzAE6NizSzNEPoe9vZT9BaDmDKD58HgXZNmdbWrMbMbt1mVbm5rG9y3F5hP3D",
  "key16": "262QLJ9BnKytDxmfPtCoeXYpQEsA3byWmL59U5fbnxHHH6gbnV7QrbUG7KhhrYkn51zA9L5yEoWLMHcoeZ2fT6SP",
  "key17": "2UaAu2ePaT52VrYDPETPX4Mhnj4eyothvGQycyHWmLsvh3SoJ3BwmzRE8A4ZnGRZesyUGaZmpxnFHL9jiBfSfNhy",
  "key18": "ZMTcpZ6cbeSBPhAUMXhFjkMLx5oLoysowX4hkLwwa3A7qhoyJP7ZXZZM6NnaTxhCqtGQaKL7THwySUtkdwzcrw1",
  "key19": "5gwsdmvHY1yJwEoCEqBGc31PRUkobY7q28YBDm2nhogWrxskZSZYmFrgddvyFbcsbaAUwLPTJGPWUD3ARPALcJnV",
  "key20": "2Aa8WYUpR3DR7sMifPdWhtEDR25XVVDC8id2iyBRcdnGFCoUeQ2mqKRVZ8R3uXP4MqLoAFHQpGqyLfYDbqwrGHuX",
  "key21": "4Hhh1fmi8unaSoYv9aLhfFkLYxNNQCTQCjvcFDMVvFxpibFu952Y3HmezstAX3wN121wTLdZxLG5fxLibtLHT5Xy",
  "key22": "5FcGU1qeoqa7EPhfo3CYaEqS1pur4D7qfYfw6aw7LXNDLvWiQecwHUbe87WwWgPPteqMNHLUjnokDEGmaYbr5gyv",
  "key23": "4uS8RJMSYkWS2H2hXWBTqT378Xxs6j5bEabYA3fXvPcvnGoXTFWC5VLpsj3a4QxpPzUJK56oT6GXXnExqmM8ZiwT",
  "key24": "5dK3RCPJgWt5b99M6KdZH4dMxXdWhRDEhbDwfi4irEjDMiWURbSYc75DdxnweKtqiAFb7yKJkdB2z9sqUQ41H3gH",
  "key25": "5rNz4zkok5bhC1nm43hwZYvcZVpX8UXzenJA9uhTRBUg5aGif763iiHXediSMe2GY55cxueXD3kEjL2ydHuVDMoy",
  "key26": "3mBDyRTJwACnQe4MB5KR32G1pqVsoXS25kuJZYubvZYgFp5prF8gyugbAWZFaK4Y5PLk2KzgvrmNLSycCKtBH2D5",
  "key27": "388hewVwQMiBiSmghfVP6u6wXiSdAUGu77pnjTeZ5rRWzqFGmzhkYnLuVDXAJew7ackyoRQArrvKFGeksoWHUKKP",
  "key28": "2ztUeoY9j72AMnPvSRMzugsJTeDTG17Bt2qun6qPvAg9CRz7DZgB9Jw3xNJdwAps3nYt66NWnXeD7NdmwmqmzPto",
  "key29": "3sL8gCSWQJAMUtYtpvPeed9jVqD8taHMB1tv1SMganVPZAg6tpbq46BbWxRGkAgnECMAKkSmvjJpCxXUWJjt3oWr",
  "key30": "4AVBJ19VLHKYkD2qXZUSNczyvJXJBboFBa7xhe8G7f4B4LkhwkXBgiL4nPdjeCpgoSmMfS1g3S8WWw3aqMdq3WHQ",
  "key31": "WD3NbLdCwwJ2pnV4sAW5tV5SN7VmQsHsTPHqeApvvakvoW78mCfxWatzoyYQpehftM3CfFayBW8jTgyGPgkJnsg",
  "key32": "4y2Vgc22PahyzheUq8etftF1YikPVENfXQt2RLr4edW9n2KrC5G92MawBp9XV3fqvtQF1bKbSEryrk5Ld6hGux8c",
  "key33": "2eUunUXntSRbJMk7CVw3WKgKm4fr63fcrdJ62s2dSnpgcCA9RDZoULH3VucrYnwQZdYiahaDEGUpaugsZbaWwcb7",
  "key34": "37xQLR61MuWLaMnRqCFyBDbuhzihgB9b3wDzGsPezKFaiM6aejDFeTtY5TydyNN1LvCAwBHsMGb5wqfHLtT7L2z3",
  "key35": "3hev89aweXmDo4zBCmCSyDygprYoy4i5ydsi8Vw4DcbPTVkdUsP82G1vTGLriMBSrtekjxPyhNQk9Y4NUWXrenxS",
  "key36": "2aKrLkskMQDWkLL12XdcE2gDemyqYtFdWsCKH7JmVRYSzeDeBaYNS14mubBB1Cav2i6fTsndsseTXHDWimaME6v6"
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
