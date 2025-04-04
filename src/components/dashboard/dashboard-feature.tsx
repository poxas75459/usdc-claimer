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
    "3GQv7U1PijiFJic4TMM4EAsRBB36MLaAhsEmfFcQqeoK4HMZJqKoGLr61UJHzeLHAM4wc3wUMtr8Xof1xwsH5M3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNDEr8WLXLCbQJAYVtcuZUxiihhK1eP1nRtZeMZPuBsbVJXRqg7DGA1EZoKrgRffzgmuj4cGeHJR23ptJx7Dxqd",
  "key1": "4jFWh5FrJGzzNTMrq3ZTFBJMz5SLpxYLz2htztAok4mgKdzq1r3Xst4R6LmVqiDEYkAYiaW4eCcgkLmskkXgCQdp",
  "key2": "5Ast4Ywu1m879LaeGLyvKhcKG2yfiZkojX13qYquoSX8JJ52YGMpbLQi2hiANAwfnXCYcE7WSN9SjDDdtvDu2Mmu",
  "key3": "62s8gQzNDNW5t2AJkaD4j7KDhHTDU9KF1pwEVeCpXMjsrFhKN3UQr8WL5UJbtGFiNuktjpn8Q1YLhW9Vv43uH47R",
  "key4": "3qDRLLG5u4HQwqUQZ1HYtMPuC5NsDGCJZX1fHBKbC8EDSrw1u9YjzWB8DLiV6wgp2rzZ9R14AmXLwtM7NeyqeJvY",
  "key5": "2TggQSrxk3KHaktyuYWQhRn3nQ85xBZxdBqE1cgzJ7HanyP878MrkokD8naNRAZjh5b4z161E41KZP2RR8u5cjgp",
  "key6": "Qa2zm4gYwUxkJXwXRNyB6RAHQGm8ds1qLK2Lq7U9pEmAQ3t6BC12DLjBBgWDmyGt7uZgaiKwwqEoYZ4SXGhAUej",
  "key7": "3izbpBT7NQdP7WZwJU3FsPQATojqhEo5B5DT9qe4jB7om67PuefXWcXyHEM3gp1ZvMxHn1MFtGE25qUybuhxRb6h",
  "key8": "3DApwMwDfEcbbz28Q8NYnjQmotjAZMKHXgQdTmYsxX7QvPK7Xkg7nwMjsGZoiEsUziYqAD6ernMiawML4PSijcAk",
  "key9": "4hn2VG1cN1RuRphQRv3P7mjoxkPMfgWmR2ZCqqkTjNEWi28BCBSpZTg2apN4uZMytjW8EbzwRvViBnZFm1KEfAfh",
  "key10": "3H2F45EffnE1WVsCd4XZngbUaNMsC1Tw1oFhuHJWJuZDcQmPqqWGAS8YB788fHbLTNM3sCbZtLxXu3XMPZfnGSFB",
  "key11": "31rJ5f2MYhZyCo3VEgqp8Nm1CS1h655Wj7VcxwAc5V3kMrh3vCfzZg44p7GLXJcpLRV7Rn7DFHbndPwtExJoV7LN",
  "key12": "4V5y7DX2XRLB44Q7qYJYavpaaBSLPmgQKxMtPxvJ4i8CMo7rXqEvECaxQGyson13KAXRWNmtDQ1pkkiUWfsorrRP",
  "key13": "37CT3Xf2nJRbAn5RoZf5aiS9ZbiYNJgaNQzZmFpL3jNdhGMNZRiKBdr4RTW83tcKpNjXrizxjgyaAmodMvsKAMtQ",
  "key14": "Nb9CNvXnahqCEWb1TN755BwUcEgcBtMK1wCCyGpzWP96pk2inVuAG1G7mKhyut1yo8h7MfEjN8y3j7WLXi3T3ww",
  "key15": "5fZC8uyTxwjNmainjmDHzKqk94pojf1UHrS9E15jrDbEXpy7oHhxC7uZJLeJEy34jth2VEpnfs7rHZZ1dNrDeb1z",
  "key16": "3Ffz2PGCGoRoZKKw9v5u3bEk6nFv5BqJ3nTNR4jm9eiuimz6YzDmRT8XRpXevJ4ikgFYgpTQFvduVELupwYaKJoq",
  "key17": "3ABkaza1tHGRMPvsZjk1sJqWqGc8As2oSX77ynwdW9pBB3nrK9cZxiiDkfBMLn6jYAiwkwjWvcRm6cct8WBMDcFy",
  "key18": "4TEFwrbjX6WaqkPZD6C9YHBrYvev3xpTJyf6hzsY6xQ63UZASV3Q3T4ioqcU4XyZVJb7XTiQbro7py5tS3KywY3",
  "key19": "482sYQx4s6grxPM3XewALk1F2w1Pptqcq4D5YgcSuMHxBPmE1ZxuhBdGMkPDR69Qfqyxm7UqGoAihHTCtHJ5furh",
  "key20": "5ep31oZgBgcQrDUaChEQDRvG1UMxU88VASrLZadhjnrTzjJKZ8xRpbbGHKeTY8UxuX4LgL2MthCYeY7rfmdKrNB9",
  "key21": "668Vhxf5GbUEkRYwyWPc7PHbXUM2RCuSBDsgxcbmP3MJmiSEhxUhUaujJgGXeCF5QVgEFvHBuQLBC6CqmdHzApzL",
  "key22": "4Jozuji3MCjVioHKr3r9x6r5zq5fWmmXcFCn95emo1z8643d5sHmHyRUnc9t3K2eJzSS9Vud7AckSysR9LzKyYy2",
  "key23": "4Lmuaj9xoNZ6GnoQz6HEzQiGWebaSTBRUktM5bLVD42G3NbBfKePe3dp7Vvo68a23jWJDCsaUHWTR2bhq7Ygz6Ev",
  "key24": "2bAEw6wKswLtBUXSdLf1NiRKLpANMoT4ppYC7GCXDtoLMiyGq6znBFojBJ3z6r1sr4KS337JP2ug2wV7HSPwFTnj",
  "key25": "3qpZfbQBbrGeFLYwNaVE3V6H7RiTjeUsCgmH5oUyRq82umTE192bVBY6zCCbwjmhJ2utF6NdoqvLngT5cnTjJ5pq",
  "key26": "4vD7CLq5fRrdYA3eBM2a5xS8dm1u8wBAGE4ooAgQWaoNmwFocZeV6DCbwvSS5eHKtprEEWTmt4oTdZ8Qpj89xbXo",
  "key27": "574s9ZgoZMdoD4WyxFM3xBBUXQa7sHstftMqDDptEz2BaE81gamcz2rk7YtBTauA6mjVeKGCHYCTpVGxWyXPwojT",
  "key28": "5mz9qTnVnMSsuRK8mUs8rLiJBiuWWoSmQkMWymva2JyFYx7GRdkT86ZSG6CP1CK37gnzrcYSPx4ymhAQCE5xjCS2",
  "key29": "4L8PSHZE9UdoBQW9D2ik1BBkP9Mbc2CDd12srfX5pvenCipq9uWQkVEUJ5wKinZqF6QDEgZdAyuPupnv5VQ4XLMq",
  "key30": "2mRh1RWA5jwnv7hNjibeJ2ULNiaoUpuNUm2H3nYMRvp1bsrQm7Vq2Ccf55XtQg7fpnGaUU6bMpkonEAhwegD8z7d",
  "key31": "28EJDRnZrnfPe14EJi5Z1FNtXDRyHvnZKW5UzTs86ZiPxUhk75KGk2PDkYeamPhmNjQrJ2SxwvMZooPrmF11Xe6u",
  "key32": "2hjkGuLU4AfMfPeiv78JrNXeAhqSxNyLcnxQdCjaRuWfwmTktNvj9Afi3FRkzLN2vrBhEeCuPFteLetBossAHrve",
  "key33": "3Zv2MjUsGMjjkARkudPFbBpXeQovC1b788wcz5qxUvbSYf3TaErkvpJqqAj9gqCteFsvvfX9r4ktR93Ew5tr3kDD"
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
