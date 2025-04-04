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
    "4E6VdoWusX4foZ79VEbGuVRTK3nUMKosRQfwLdKL94eL5QwmAJpL7ggJjZuqtPf2BUiJUYHAiT5dary1pWD81vJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E2jBAWbMcA447frCS6YC1ni3WSGgs9M1XFYHWBWdwfYQ5K2VmfKAL45moUomanPsfUxD3eX1EPrxhKChXF1cV7q",
  "key1": "2u7KLHfZj8siHL6SFAA5on61oatBH7b57gMehMWwuNJYJLVH2PYhZTjpXoEXvLQjMa2fUtCmejfJxFDLqVLHLTH9",
  "key2": "2Rt1p77UwmGEvXqBB5TecbkjhbhEDBY8Kqzjo3ieFLDs8DZfh445unfVfwhXPxcxhmcWDozg4m8RHRWhNBDXsoFr",
  "key3": "5dVz4mkjvJQyfRH4DpCxTWgCVE5xesz9CyLAET4oLiTkhPS6cdvf1Yh72buhjusXrrQ79oCJDeTz8bEYEcUEEz9A",
  "key4": "uomzq7mQcUXM3Nn2KeqpjZWY4YwmxGWJ1c22VhnfCh3cLy2yc6e1AHwcwiY4U1gLeeU12jyiLKm2hGXhSL926yP",
  "key5": "4f9w7qBWYxgQjr7GsaXwUgCHon9sbGHHxWH6CFFoz7AQyqF36qtca1QN3kQTDQdf6rCukdxZ4goZ22GmSE9zhNWf",
  "key6": "JHvNPEbPkxN7jq9y5eLK5ToXLFn4chMdXf4dcdnqgknDm4xBZMgjXhb2FRoL7SRZTvJMDpowfuTwC4EZyuCJzBm",
  "key7": "5SCjCooFJdxDYH15NYCMNZNhoGFLHww7YjhATKcM4zjQByWgoHYJTUWTuV19FgGSLQ4QkicdeTbDMnv8ZzJGZCGQ",
  "key8": "4Gm5YqLd5v4CdQn8r1Dvv9fARxDoVMpD5PWMW2SeTWQ9KBUKTAmpXuNMR1AR6jiSXHe17yF4LoV9Ga1Fd8SvW74X",
  "key9": "628oGZYbPS8ccptuFWF5GVqnFCuht6GY9QthUnRGJ4t8owJfkLbvGsgdWeRjdzCB96zdTUhJpFrUfPLRtxjtQivw",
  "key10": "5qPmF9tggMSqSvmUeCbgzNiLqN2YpzQ1UqE9v9rSRwNayiiDcCiEx4kgv2cFnJ7Jv6JRzS89NKQB567MoUszpfBh",
  "key11": "4WArp3wELvhjwrkX1NNgV6gokuNVurnDc1zQnABxpgrXqRmdDcBWrrjhgLkxwFsfor3Bat9st1qaDcVnAnLgASst",
  "key12": "2gHoyAd1wxMuEuyuQmrCrt5MHoJ57TD4gFZ3XGqit1xAmNY5mnNfS9N3DMvECr3fbmnZ7tsdpyJk4aGui2RKZ5Cw",
  "key13": "5xHBwCov9pDZf2etxogeFxU6SsfP4rfwmpm9ykdt8t8xfR7HJn7RuBLfJrERHprKerAvspvT3vGVi2hNmz9rMz5y",
  "key14": "3KW7g63AX7VEsD3CQ5HW9LpFFhEwHyxoSZSQeGQ4yUsQ51ZwBCnZKGAWaDq12hdxCWq347tdbfHjtbiwTK4xH3ob",
  "key15": "28y6jrRdvHf9xYdUFdyEQuwrJ2g48Ag9Rp7uMrGRc1JfkjzV1L4ccFprDtgd6UDN6UeibCHcHS6ruKwUywwGdN9a",
  "key16": "3k1rqYRxEYMojX8t8f9PBCN5XoK2Vn44KvCgk5cyYdNf7i1R61gaUsWfjPMdVeCn9ajdap3277VXwFFrxpaPqpa3",
  "key17": "3N49BBnLmSTCyzM8v3D2S7yH5vMxwLT5inWjReHZ7MHBWyb5gyg18W9HBuzWhX8MqYaAYa9rDv9wWpYGWhV3UvGx",
  "key18": "5dAWKfJ3eryeXEhmLHKxTzDzw9o3ZzuVdYDev33X2LNMGoFsqY3BWDj2wgKUJe973ZZJYqfJqvnxNJJ6yEkTizWr",
  "key19": "35ioX1B6icQkCHXKLRwBiULQN6HAVPjMVCY7gnZZtDHFX8T7YRWx37tDMFDW5e9mzLzJGuJ74tgGS9nHWQwbEBTK",
  "key20": "4rBnhgi8Ye6YmnhydfF61mz6xfUk1KNyCykSUFptsSZXor2tWeT2QHJPvdNAW8Emr7Cr4sEP7KMzu16NKRrJkKeC",
  "key21": "4tYhYtT3VWxSz8dLkt6vai3GjLXo8Abs7LGVrgn3ySngPK7dW6aEBpMwqtRjuxyc5Ua9TTkqSWXqAVC36xJo1x5g",
  "key22": "2AG9WQyVcC55MeZxJ76qgcYhMaQ6hfmjBxkj3YtZsDK14JcTHASxqDqDHYEiNpihRgFs5r1kXKBej679YTDtxHg5",
  "key23": "4wJDdJzPWDTq6AohHLwZDVvvH2JMWRDQkUS8BTjgBZj8swmzgNQQ3dFoXxxnGaaKawgu8WUFJ7opSr67B2hKWdnK",
  "key24": "558m7KqTRgPrDX6ELubt3w5vU63rukZJXV2iS4nNEd4qKcktzXwhGFx4WRbyMdNMufx55hH3294AiYss6rifWNMn",
  "key25": "mbMKs2Bz9xaX52qsBHSF1y7KRQLgJ6aKo7tYPKcBtnkLs4d8feNigUsiNfekPdRaUWPzBTsiFb4DmW91cLkMJCU",
  "key26": "5rKhGNNg6Jcjony9PyrY5FsB5BN2GS74zkXdmbyPjHUfzVp4bK77vKQPY46CoVgS8Ny2DmLgMm21S1hy4Sa4iRZ",
  "key27": "2KkBs9LafrzHiQrnNt1B66CQit4AYzzvwjReJ7d1LCTVYCagJxC4emEGZ2Zx5QGiz6UZMFJg48TcChGx3QAq9fe3",
  "key28": "2VTPK4T4dXjvNZvhgMa9ndTnergoJFMNjABhsuobarbaVvfVRs5Gq2rLkTgC4kGJ2mhH4oDYyLLnNkKY2URmWTaS",
  "key29": "4iMXp7mHyQLwi2u2ZfFGSzrXjRQ9XrEZuFLebhG7Aa67wfCuvVpfbo3QuuF8D5PHcAxhP4p6dKTqbCnK9MrnicAN",
  "key30": "5BNZnyK9432f4WLMstwPAQ2XdbX9YUnndum5CsugCaiF1hF8ZntPW6DoweuBaQXWV4czgJ8d9FPT63KsteJuy6R5",
  "key31": "2i41Ptt2SsQKwfDefSRwTWSehfKuhVqeMQz7BnKHEerpSi8yuWDbegquNhMjBCpAomuGyq4ZHfEBSHX73KNYXy7Z"
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
