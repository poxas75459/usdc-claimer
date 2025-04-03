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
    "5TyuqbqQdyUeVR5XSCW6dcCsJzvDo8jhZ6jZkU8rW5sEZRbVJ68dvAaXrEgi1UwPRw18rimje3hWdGeTiZoZhrBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKfdtivdShpBFrjkfyL1BDnWqU4jYTNF2hzqtn6G5vtzdCsN9myyUwZgPQYL9ezpAxGnh6cRRSLxTf8K7ZabTi3",
  "key1": "Z9ug5cKxqWYJGAnVjjsTPtUtW1TC2TS9o6ArFas9jbPqGzhYJEyFiVDjTMfcrYq97FHS8mDK8S9kiy1hZoxf8sH",
  "key2": "27SLjCWwA85b19FUZVwedc3BRoGrGrrqnPFDZsnth2tssruyHrFRZPX9es899f2AQxHrpvDTwTaDSdaBJ5pUybnH",
  "key3": "5xTz4vPZJKkowYRfFod8KTZY7RbZREhNasYiMLR8aUV6vuU2GSrbKkqa3xmo4F5SLAa57iLAzwdefQaxeNxJ3ztU",
  "key4": "58B4rscxjMgiFnHYEXTaW6SsPHi72m9oW6MnXUHRSQL4VYqxYtHVmRmm6W3pHfJLWhoU9csv15kPThZ25MhaumGD",
  "key5": "2FuD1y6TrK1NRsSq2R41cBo2VVnWSpTAFnv5f2GgsqKeB5xao9pLU6CnSnQogRDaAAmRY7PzgBUYk1CVNwArf7wk",
  "key6": "1j7SYJh5cioAx9tbHBq7pWqbpQRdGAGmvThVMAqEDNxCrEpmVZRPkcgKvQPisEWugSp1ciJbR5Pgq2F7oH53gST",
  "key7": "3q8Pm8t3vd2dVoNHi1h9KgW8vvXJo6ZJm5YMGAXMWkLzNGvwHosWuoQt5rXe38zViLUg81HCHJRNQa2AG5FULuCc",
  "key8": "3mYtoEttxN3uQGcyMQ4DJ7nDxkKBsMZmGdJeNmhXMfLmCXPM6Jrp5Nwi6Ws5hXeWt8d1A35XzzzXaKyNSWKC4c7r",
  "key9": "39Q1s8p7uycimpscJixtDbZdvKUU6DmSzZwTmemehbauksgp2YTSv7YbSGzHnyNgNMsaMmNo3kXqehJ4zJF7x1P5",
  "key10": "4N18ZUkNSVPT3tHfU7qgtywdYbUuNqcqejrzZ94jFYte3G22eoHikEEW6waASXDzZQVodZ3znVbzQmpTgUHkXncV",
  "key11": "42NCMH1nfSa9dqngTGTg8mf1Stgh7yzAZgcBEkQzZRaoEETBQ9Ki5yZW2QoQUbzxbQSxLmNCWAqTCqsmrcwzax4x",
  "key12": "55y4MDbRVXvo6oieVWT86VrLiJtoQNQ4sir1gdofM6BDPKotcJ3YGmw79AWLToMeWv8W1QWoLYakScEpqgkiRipt",
  "key13": "5yQwJUo92TETWH3ciqQkXiP1HNrFEkMEJLPT3uzAWFWuiXLrTbMyST7ceC6ey1crFi7FxWvAc5xEFssf5p5RvVbF",
  "key14": "3VXYBTphharWoRq8cwCf1yRitmEi2LRRtJ4FqkJiynuMFPEu2mkNzD5gRXf7CSW4sCxvZNqFa6EP5Av5NXBTyVbR",
  "key15": "7Vpgt31tPCpZ7UcA3yf43h4ohJwbrwTRfgpkwGDxLef1bYSg27A6V2gNa2KwVUEag1WfjPmTB4cFdYp6CXHxj3W",
  "key16": "65pBCaRQxEegY8esJjWSFmTzibgshwtb5piWB78fgLLaA9YCQqQUVR4NuwQf4DyEMMCtVZmyM7XtXK1WjHEvfVgp",
  "key17": "1vBUarG7bGymGP7k96pBjhdFXniubsdfb8L55h2kgKrbfDudhpZocCsCx69YsLDt6Kk5d1hNP4DqUiVopzS1wZk",
  "key18": "2ueQWhaU6L5fnfX9wQKVkWJVFtHTAxzvTkcBAwHo244E5ye25hnis2PZ4NvWvQaYzQSDe5GKDkcLSiBT9qCysnwQ",
  "key19": "53TRkCjoaFgvFPoEyQTEUVLU6BE9cRapRxgEAGhJcNDbMiYVPFPUmSj6v3BRsezjd3WYP5rqQ64nWxUETv9YiiaS",
  "key20": "mm2NhaM6i7edqsJRX4en2Xa26H1QFtF5y16Uq7wKzWzDrcq22K2EUNasePHEUmX8w14v3YdPTMgDDrvPu9Jvt66",
  "key21": "2LmH6kgg2v3b4mqmnanhH89SDCiqbj6K2s8MVxsz1ae6b78EAKzr93bM92jxRcKu5MYebr1iVh1y4aTT6tjLQoWm",
  "key22": "67NMjWzugVGpZst3gN5YGUqLnpYLxjApjwknVGXvyJNJgbN8SMatCA43FzJEiJuta7AFrRWhQSaAXNVafaA8bUam",
  "key23": "4WBkeEMpPEs3PuPJhMqW8Y6obr5co8NonYqmuW81XEjkLA7uhykbQQcY2gCrxFeaHKnyuHDR6FXCwueTVJ7vaLCY",
  "key24": "4euCsrxwHbZxNoCvBvNxExLSzRCUy7zRJLQ4t4u2XzZTVNfxLjFUjqLNwRsgjRPicWLdv2ZJnGNqLeCHtEt86ZDR",
  "key25": "5CpiML8BBDHekjwSayeHj4PZFd9kRyR7trabDHYpwFXGgSxYENQ7A9X3EsTi5ShJi6UuwRh3vjYcqjzxSFx7BVif",
  "key26": "5tvXc5xzUxfnBViJqqoQkq3AF5oGTLenFxEpYTNNmsnxuY54qE65gWjhDzyHdSHq7AtswR95ZDRPR7GUWo34qTYq",
  "key27": "2qFoohmVxwx4SRP5VqdjsyaWNmdDsvGci1TrJ4bvkJScgyuUFpoNXgNAZUoU3jgxsbM2sLguxGCbmEE3uo7m5Gud",
  "key28": "537f5nsZ8wfZvAp8s34tX6NKmjuCV6AvDuZ7bBxuZHncenMoDggcVtSg5aeymDsRUfb4HcNjji1kkPaqMNhq6t37",
  "key29": "61XDMxNT1DRFvLyWkmMmMRWdJEnf8DgFJAtLDEGgjQGw2fgA52BfUSa9BRsxGuS7UothsBy2VyctbF53J8iMaB2i",
  "key30": "2oGkWURmcTWGm5kyMzPDPFFpS2ixrdwrx3D36SE92sLGx67qDi2ysAB3wVpJ5xGzx45LxKtkcQ7LToieEii916yy"
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
