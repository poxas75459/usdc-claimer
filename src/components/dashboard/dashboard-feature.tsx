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
    "62Kyc2ZPF23sfn1b65zFE8rrrbc82fhUSohqTFGh1cJHGzYr2oz9Ckkhd3Tw4pCsZVZ5MRVG8hVwmi3uLmRz5hjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SGnTctZis79a47WYwnGBHchRLoZrim3v3giX5mhZkBqpxpKivPMLqxYaDkDjxaVW8v3fQkD1hMLgwZ5FVyuVtN5",
  "key1": "NTYk5L5WYPctGpKDHLV83qtpxVggm3KxHDJAM6JhZ41cdNsjBRicAZkbAYoj1DCCE43CBXMfnwbKddAWTUD8Fxw",
  "key2": "3r8cSns9kPw7EbiDoT1R7ThvduUJZj5DN2YM5JTPHHMssEnqyzJHc6QbkAk8RSBq4ryX8ouJ6zxQxvYXwh2M3Rw1",
  "key3": "5BUr8SyZx7jJzik729aN8NBK76KNSQ9oPEeLndSMPVLQT5ai9nma3VihfDHm1Hq4a31xz1LXJkh5AgufQ1ASg6Ng",
  "key4": "3z57nt3LtHz45t7U6ZiYUQpB1VxRUT9AqrxAhVFAtuL4ELJ4xAGHZ4BqcMpeFvWdSAqHffy9YN9aRmKqcgcnG4Cw",
  "key5": "MwFANN6twz51BEQENy3fLYHUC8MkWFo8CGzYc8h2DcnSYQnR6kTK1B31V2jGkZiFmGLdSKQV3bRCM1t8Z3DhuEW",
  "key6": "otJuAYqgrw5MKBNvRU4o5FHo5BhsetEFn7gNCwPmZtr83Vck1ueUZ2uyrEFu5nFHRLigbRnyqwfqXz2ggveMfXj",
  "key7": "rVRgrq5MULTApeNCnihZ5kwKuuoDaB1bE9mGcJ81XCkDxkaVZxx4RcrTCqqrPLaY6Qx5b1ZyaP9wiZjRhrDdJKq",
  "key8": "5zPYRzUK6UHNW2LE2b1YVkFaqjqhmMjhnR2y6JSeiUN5F8iPi3XB9hkK5MyxLZ2n766wcAyDopjGJLCyZQdpNKgV",
  "key9": "5XesuBDyeBnyxmncjtvGufGoHGmQtgtCm9axAkeQiJxrePnPMXkofdX6hvZsorYD3KYgm2C5bDAK9vAemvPRkkdt",
  "key10": "4TV2KCqS1YdVtT34s7fXqfhifxq9T4jHZwpwohABAGv5Dht5S82jRUxXZimhQNgAChcJgUD74FiA6cyaeTA15pnp",
  "key11": "i24eFduJQiXcytdPLuv5nhiNPWjsHkNxwnnSkcdSaCLQtRrg23USBAe8hMoCdWDurbU1xJAr5BKgUcsrvpCmJMC",
  "key12": "gFKCR9UR6Rbc4CmXoN6PeVb6u4iXCyhQCBuJLsTZuABeqVw1G9ggeGgXszT14jMy4obVST4ZG9uYr8LcesRBJ74",
  "key13": "3KjEJcZWExetLFSTDJi7ppaJLvyR6rdb4RMAJh5xT9UV23PmhtX634Krjkj9L7ahxHvRJCgATDkx6RPNvwiXQmQK",
  "key14": "BW37LojjDHcSjsqLuYg8mc26e9dysFMWrbGgkqw5HBY1VaWatLZoep7cw9TrMMeCYuFLoiwc6ggRSD4qmyVnqMN",
  "key15": "PSxPRY2Y2ynFq9LJc6JX1GfLjXbadvJX7o9vzrZijKQbbkSLZvbHXKG28SjFoRLa7SWfaXp2jYscw1LrVdiVwvA",
  "key16": "9EENtjgjoW2xzv3NEVuMTmuA8NK6mtDvTfS9Bc3q47LhVrFEQhV1a4FJyGXNDfdp1xyH1uFgVAV1kRms4am13iH",
  "key17": "4QTSrCe27QMsJ6mpy2X1nb2abhdmuzH5MN3jBPYiUjS58J75Sh1XyYFQYhGKvxdZBmJSV25GQcJ3LQxkEYc9na9G",
  "key18": "LJLNK5oW8xZ43bgtbMfJ76i2G4XHVZQSMvzrC276iXd41vR7qW5LVEqm8WN7oGu5v4ezT3fweqbrQN5FEEbafH1",
  "key19": "2wm9P1n2Z2EEFXheLq2tYSaiTYsntxu9czmhx4zZQLQJhfW1XEHbdkpkfAed6EHZxMBzrWwGtGtSghKw3JwfiQVD",
  "key20": "44HgnPaFKYBi5ikGC5mTpgvy9GivE9fxeMiJkRthR78BDMELzabsEa86Pu73zkV26RAKuXMe855W3Q8NbdDPP39Q",
  "key21": "HQQG8wriqoZusmT3ia5R1ZT2zBHFHfDkhpFkRPnvseyvTVF5pgPpvto5pUhY99bsTXEGd9foWhsra8o7Yu38Fq1",
  "key22": "4FBEUFtv5xzfB5tZWSzLd74G8pr6uUkear3h7WzWT4LQa1WoLKKN3a26mq9JTw7oPq8CDHpLeJs5Si85zezYtDpG",
  "key23": "4Y9Wo95aq8S1ZR7sjh3eyvDYrV3rcfbHw7jVi4maXganJxJ84GeMvVwKZC6HLicw5s7ktEerqWtunxHyicbUxwpZ",
  "key24": "29hzxkszB3Svq9YNHnPEqigtYYPyvttFDzMV23yEZZvwzDJhA58RTNYsgsvK3mjijuRqqzqVzYwPV7Ra65BG6ps1",
  "key25": "ivZtqn1V2uAdNyUjod2kaEFqmD7A4aqmZvVryR75GfapuEmUFMPLfQoTBPJU5MpTU3onGCPfz6BohBkQkW4qnXw",
  "key26": "4B6BmjJS35oXJuZ1bg3sWx6ycoXFfUKLucaqvMFcYASpiEteFQRJ8WCijg2sFUoB5LiSS7ALy2mXhCpoF3DEdQzJ",
  "key27": "5ByiwitK1kK83UjhHBFnmZY2CyjpdpK9mLEAyZNYg2jHWEYVLMu7TUBfHBNp8fFvERZpLKzTvhApf7YygTa9NKp7",
  "key28": "2sHGVkTHyJqmGHryunsps1QRyy93k27TWP4GukDdKv8PefvUdQDiGx36VMEL1cAPztahN1P2hcmLFPgEHDpba5k8",
  "key29": "4v486YiJ3TsJQ8n9BgrYiC36tFhj1pT3mNYr2eqtKB3joLrnGBSuif2aof34FrpR2Q84X7UTWagim61ZdyAZRYrc",
  "key30": "2w5CQeruCnoowgyDvvXcSED7qtDDoqaNTc66ZEzc4Rcw4n4cuUYc9Afv3Vo7htS54L5qZBx3ShP1JHV6KqpvLtw6",
  "key31": "2Qf1Cp8PkWVQ5Q82GoMFiZCa7PKuXiaNHHw8fuQ7jLCEadAtX2RvqVEU2H6oJdaps1R5NpwNvdVPNm3owFKLZXfw",
  "key32": "29S9gq8Luwj7KhXRt2qZeh1Jdn1rBdgRP3aTqPMAjSpNBzSpU6wFKRn5r1vJUMRc3TCGqVyexdN6XrHJBiLrc5mT",
  "key33": "2VtTbuSQe5m4RNLw3xHJCSBrMeohNWMaKVpJ4azJhrBWcVDcRoM5gRcpjJqtdaQgJjdpKYhagmMDzwTexncicajP",
  "key34": "5vB45T7JoJfyoFqhmUomB8diE8BKAZbUXXgEEKARHmFDLyZCJZnmDUmeXosZxumtNKGWRipBNAxeQSR7MJ74gXiS",
  "key35": "235VFqqaySswXBoAHYCFWPa6ZBTFuPzpibVTEaZrFQoYQ73TRzbfT5ujFt7iAiSALfFC1iGErsstiVbv8S6ApMQG",
  "key36": "2i8ziZxuF27tTrr1SbcpdDuRhiowjGqnecA3jcc9pPgZu3BxV91pNXPgnYaZ6D23S9pgLW7QYg9Teeqd2dgYXTiY",
  "key37": "5oMajJiL8fr2QCS6ziJBCXpLG8tch8t3z525mXPbyCQvqerNXXBmWQaPaMKCN96Q6GhLUewKGYXU2MUiyk5yZR5r",
  "key38": "3JoS4aG3nEcG2ty9uAWKVG8qsZ7tpPucgwHrAW2DHKGPP2tChKPr8aPodbBRrWy89KPXQpMQfKSZj8ibvbjp52eA"
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
