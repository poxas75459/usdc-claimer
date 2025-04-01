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
    "4z1z1s3SSqR2kSp6N9GVAXF3o5MuiR8Litgw6AGuRbVhtqBBstyCUZTzkim2QUVBbSnrSZEwSgRQ9eqCftqUKMkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bV5VRqfdugHT4KDV8QkDyhhoiVR4ccMYf889PXdhfD8mSTd6RwWbrh7R1hFyAhWPGSq3qCfmuSUAiHU5ZGyT5jh",
  "key1": "5KQQ3j77vBsCJ6YQgHEe7iENQ4znwBnDbjDnxRM6DhECv4eZYWjFBqEEJX4ZUVB89APeZ4EnTo4D5C9CdH7UjyAR",
  "key2": "4f7CCdGndTySKkjf5rk7uJe1VYg3iwAxrATa53yHx9Mf41qABzdXhGfoHoeQzEcSu5sgG4re5g1pdyY2pAu9BX9N",
  "key3": "2anV6pmRPwZVqKctiJqLVCtdLyqfuobmuQCQWJnU941aBL7Bjqjg35qMbpMN2fYt3hfJ9wZg7VCc9NYKS36m8YRC",
  "key4": "63eXgiNcL5RHtqHGr4avJR3UCnx4A34etUdNuuDYpd4Bby8ZhyTDQWe8xc1jJHiCVr1136PoUo78A9LGRg6fSzeT",
  "key5": "27Ft7fW7pNJ8YgM9Avub3j14a3sgnAr46DGRgUMpehi4cV5vV4pap91YVcErE2TYwdcyuPNBijLiWrBmXw48fQQ9",
  "key6": "4QARcY5G1Q18Dh7YpC55n3Md6dqTJ1a85sijXXrZjYHdzcL6v6jL8XJEwp2kWmJYRuNdbgDT6pUgFUSrLn9CpmGT",
  "key7": "5weP1pGocYLL3M5xnT2htfX6AY4nxHyXVxFgPmCkh3x1AxVHwAVBEbNQZB1WJ5eECFqPSV3XtQXWZpQggT6FUrDj",
  "key8": "39tVCyfWebLvWgoHSrsK1fHhsfnEgKT5YusdR8DAXB9UZCpJ4onAL9AfB3wjY6kyUvEZj3B7Hvki9HmNmpgz3AG4",
  "key9": "AcieYrj7tXQENix3y7WBmvEodqmgC6w4q3tvdghdKNxu6phANjfAYd1TcXgKyuw4q8MXdnLUYvhoUP2iPvJEUTe",
  "key10": "nUR9aQdsyarzrihUtj4RLctK6yxbjAqrF8iFR1FYcpNgNrn5v8JFLrbnLJ1hMzCNZEsGaBVp8mPNqw2ji7mq2mN",
  "key11": "2gBtJcDRofsMAbjV8ndNps8LZYSnEnUQv3yk4RuKDr6JMyeuMv8ZFBwNWjDEJmMbXE653DzxQwxairTeZHMAXi3x",
  "key12": "4YFzSrQEyS6FteJ9waBVkd1N7MQ2hfTUWM9cYvRUDsqaLa6xCpFXM2b9e7REA89Tyavpk45uHAoTAwqgSY9pCBaW",
  "key13": "wGfsALsEg2Z6gRXhUFFcyrL6xxBzZNSpfmgDqczTPymxEFZWpWe5SK1nHJxEmaivn1117vx5sVnHzFN3oYeEKKB",
  "key14": "3AK5cmwuUjP5zYALcRUCgT8z6ZH1E66Wc1LSGfRGnK6hAsnWdhZS2caJpPXbX6tKfhAeDjdRVCjFSxbrmw1Qk47s",
  "key15": "2qJgQvqeDoNxxi8Wf4FRDeQK5FoZZhJiDcSAvZm36kZhe9vR9H451VB5Kf2fkzBmhGgFz7FbUL1RwbRUAmxvB5V8",
  "key16": "5VD1FTqpfHtDsAJcenmhRf74LYint6L5AJ81ZSa2TB9dyU5VGbqRUMAsjd9u4FEHA69258dGTgv1ZTKKcv5iP4YL",
  "key17": "p3Vvr2QFRtaQUcRbibM7dsyqkzyT6iQ492MRWZ7cMzpVhW6vdftDHqWvu61EC4AtEarb5hw2DAFskXV83yumfiQ",
  "key18": "23aiPHNFvorFLFcj2qKGrpgHsTn7voYkuRW96i9Pdmr5XGt3Lr7TvmnDdkG5ru9i4ATVoAH2V6mQQ8McxVGohMbg",
  "key19": "2RxzcVgZN7sDHfKV6RtbdAXU4nhwovesLYkfrdTLai5PV6i2SKnqXAATyrupBi23THAoPA9UjbJP8Bux52jcU3u8",
  "key20": "2SMkYRhAc1Hb9YimRpvc116oLwnLeYojAA1cAMBzqJ5tcMqu6HF8Z3LWH2JuRseCcvMaioAXZL7bedmoTNsZpfqN",
  "key21": "4cASTFNg2DeiZUFQTtw3ryi6nDa9Z1gfy3eQB5Xs8Zw7Q9SnKCVXE5Chc9AQXkS9EYeP9cycwiUMh3WsaS2jvAsL",
  "key22": "RvpoUPAHmjXUfaHJAnEbLTUHZUVz4dY8Ew4B1vhK3fZjfcDzyNiRjh7LwNpHGTP2BAyCRDzDdQSjse9N3Ysa3rq",
  "key23": "2Ut37AXPm5UjB3aTENFYjoLLjLwMvzW4RgapcGW1T8NcMuSqavAUeeig34Qdu7PHoM1RVcanWhPhYYhjaX9GywL8",
  "key24": "4TQPnavrDCFDvJBjnXFw4tg7X8KD5Qev1L2NGdeJgjhpdyAZTw2omDGRnZuu14fohroxKuFcnY1kTb41ZTTSasNX",
  "key25": "4xY7aYxqvMognoymG94pWioS8NrWeRJzyJyybhFBMmRHJs6bRzrv7fSFRTYrywcfJZL2x5jz7EyEVZ3AJn1hK21E",
  "key26": "5RsybDjzkpQHJmpq8eHK38jdgcnfszry5mC2CgGE1MRmT34pcJYa8T3eZbFRrKPQT1DmgJC2MoVoVHDVBNvtLbrg",
  "key27": "4wQg2ZPVNMu1e3FGRtrTpz9eVkQMgUZThA6ELNc6LdiUYFahYHuJkZkR4hNSvEkfS5kqPbYikvjPe8UFt636XzvQ",
  "key28": "4eDoX2kMNbBmdhG9nfH4xd7SaHJkmXdgnXzqSPnXwyZaoiexb9daLgnYuLGZyLVyuNgxY8RTD31ZUSYRLbDStkXb",
  "key29": "3MqqVPqAGwfnwWgnkTrzWU3dzeKdwyzswmuP3cUynnWETQBmX5qcaGQiRizbpSXBdxxW6GPC7yuNUcAUpCu4Fc7D",
  "key30": "2fkjJYa2YsikbiYD2FpC75xcjNQzz2jCSYryNM4NggvbNB23pJwkV3LVboUr9kiD1PkfB9WwJQqzhnexFEtQ8xYx",
  "key31": "2gQermyNkoGg6T48Vya56zNc1AaKM8Mc9JD3qMsJk1KJmCeKunQvQ8nQPqbi69BetuQzYaznC9NWFXCZp8dQUUJg",
  "key32": "47VkEazcxaxuvmkyjyzVqZaQgKKyAdmGfnz3Xb8WJ8Q65CmJMQbwsSJ8i8nnSqgEPm62ZNEeAkrXJdB6DNnZQwFo"
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
