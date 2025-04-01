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
    "2sgsfqkRy2PyGwgPEYwqarCL9xF9nhvFm3nCdMz1mDawLofGy69UNtjzaUKuGKvsn5nnHqSaoX8dvzP9DFv9MNXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aThCrPVhd8s6aiSxzFVm1N6EUBN7PiKfQfaza8urrx4R41DSKeBodRtW4Rx3XkGAKhyBKSCd9seuzEjKda83qXG",
  "key1": "f6iY9rBMdQcvBy8fgvxQ6seKhJ2rmKRnBPJ6kNtDwfmLSKSLqZNmvLMr349mAwPwfUWDJ2dnCeWcTiAfXbd85gg",
  "key2": "2Xs3FbpHLtu3nQn93Zgc3BT18kCTYjinGNv2DWnXa2V3GD36zuoB5B7SxjEG2vvEP25PQd1PLhRMYHJxLuNrQWeu",
  "key3": "4YKbRobWrVsaHzp1TLBtMZrnJi2hykt2AHm9XAfELLZWoMJ9EbRi7GQ2TCooBg1bqRxpKQdd6JyQJXXVTkRetBMN",
  "key4": "4i6tpJ5N5N1ZaexF5ZxvQ7vCVCZGoE5v59mV4mLiX96FEuHBxNpoAGG3T4DTeBLHtbapFTnjAcPf42BrMQuU2WRE",
  "key5": "4XFZLAepnkm4JNBRXY2uo1yY1dnDXXjwC66o7xVUT7uCHLu3JZrRxgwEe2aRXjMY7VLUDHpriNaH4youB7TSapbj",
  "key6": "3QWaR65dtUNt3x9BtC7X2Zg8S3uLc9ukz5Ttpze7PNFoSYYaJwmkHqMp8mSXp9ZtyckYQFf9n8H4JATQiqMN1oNT",
  "key7": "3SgeLA5MnyuTV4gygVPYgbQ432ibhV1CQGy7dXSWeqwdqmC9GhKmyt8TUB3nBkAHvKiCBhXzR6KQ9iRNzkRJ4wMy",
  "key8": "5jDh3ew6mayVqANXD9Xg2C58F3D6BcZoL1FqnTvvY1M1VPDe6vd9QLmc1EmPRcwEn2pARsLKp3ShRXcK8AKQFdbk",
  "key9": "5poX5uYfrYY26fej5x4WRRDVz3RpGTQrtnT6FDFEDLNomt9nDCdqfUZ9JFbiXXJ1hx3eN8EejY4NhBw9FGMhRx5",
  "key10": "4qHesyqH8UMK881o58Sny9txBKNosFX91TiRnJaNgvofoMAQyC2Kqc5Rds8fiY9LY6XSKnrbiCbLdUsXpgyxT9ZU",
  "key11": "5MrkjkdKt4SPAkWYAm7a7N59b3xXyDVABpyBGJVZPHwendbXHwoVTkM7SvY9rCwH25amRhKQzcVBybhNYP1DUfXi",
  "key12": "TMKnaauxGm1mBiweNg6mWN3UyVWSg38PuViVyQe5G2itEqTSDNYMVzeqzfuhZMkjZLBjA5jRSskX7YBBkZPfyqB",
  "key13": "3hV4yWBYHCJodeWiojHxpjVDJb2y7QnW2sa3Fb2myVvoHbBc4E9EXGVwLenNbRL4DMtCSQjzQsN8WUy4q4BUPx9d",
  "key14": "3mj1UDJBq9fdPdiAYPeSuHiakyHPWqiEkLF39cqs2NdwQ75oJq3XH1E84viRd4k3E3Uqr9haGagwMLsUvfiVPv37",
  "key15": "2DT3HWb5do91NvZy3p1EcnyHBGMpWTB4g96YgBgNjGGhdhqAzEjTNZhpen2LJ5krns8sY2pD43de69zjooCkhw6b",
  "key16": "2sWLj12Wqjh1ucfSQzXdqDdi7BKwprBCDSdG2L2uCDAtueq43QCYfiajynWNCtgWvRD8CibRPwW3diDSb9Av9aMw",
  "key17": "7AKS7mLBuN5Hc5unxCCXD48PTTudLJypKR2rJ48kJrtqCf27tokKHM5tyGT7RZZAqtyajrCrUYAHvFxz2HXwGV7",
  "key18": "2PeLJS9LdR3xBC41wvcSPRQi7uhbteuxsKFcXMEKKjqpFdaQkqcHjxkMdQ27z7hqSEmmUvemybiEUodSwbiGsFqJ",
  "key19": "iyUWSnv4yBfDPFihBdpK9GGmgiE7XrgfsQ6UgSgr49Bb8rYwUPHEBdPC7e61qfmCdUsYWRH1zUjkLwoRvb9RhDq",
  "key20": "5bFaxoDKJA7pPvzYoW76KxKJx8KzCxJnM68kq7Aketi1T2MFRqZ3nyJKM7qWTxuabpU2AGY7xifxrirHgfbY4BBF",
  "key21": "3KaNMNEMBSXfWAJvxvyh7DohFYriKh959aqAxvip5asKC31ig8RxTFqRvXqy72UVSB1gttRNQyQA3Gma51WPH6L7",
  "key22": "3CwJGpmwPDjWtMVXKSt9SyxHfqnsxGoGt2FqFKVwPDz9GE4ES7GcYCc1eR4PdQUsLphXaeuCc8G1AsxeYJ2h37G1",
  "key23": "2vVYspJrMmvQ4DzB3TCcu6x9omg5nsNXjMSpdtWesZAsQLVmn7p17DZvQKSUsriNy6XV4rLW96iz54p4nLuZGfK9",
  "key24": "5zar4wtAcLthf4mxGmEFnKfG6xcN23sj18X3gCeGrCYeBgTC7nvDo2eeQgTFEhGskSrny8vqLKdsnkpUaZeVAsNX",
  "key25": "58Cy8a8yHGjRkseDat68XVd4pKwvaCc2Ki3YqGq4ehNmNq41dj8yUvCxWvnBsmeq2TrJpwkPfPRFTvBmJ5CMTaD6",
  "key26": "2cBPRnMXUvq6srxfSV6h76T8XSrWEhbuQSC1UqiPwgzbCFrf5d9Mhs7Fjdudby1LWK29TSC1EYnW4AmTuPqF9B3A",
  "key27": "5fTD7weuwJ4mMYYi6paLs6QzWH68Q5h6zhEgxHLy8o3KQDioJiivjFjGhYGxWuw5AThYCtHPDfxz5JfwRM1BT9mD",
  "key28": "5aKGVHDwBeeexnZpdxZwaasicX67wYZ62kYaXv6kXpjUQrCbmuRie4d4ZiH6Gv6KKpriq4BKCt6bEyc5ztAV9Xts",
  "key29": "Wke4JpEsprZSv124YTnKcoHnjw8H4ivc9hvJkZ5bw1Em4FhhtiqqLMvNZkcy29mbnmskau5VrUgLY1SE5RC51fx",
  "key30": "3yxCnJmGzbQAYpDZZTtuSHSPgjcgn6Twbe4S9kSdamDRZgTHsY6EEyapJRXN3husHatJybMFyiqKySSNtpK3ysNw",
  "key31": "oq8K5JRP9dKZrz1PiKbLJvvTqD5vmshpNY75aR3QhQgvW7NXKKTGTdPRCT6fzxE7ayQug4ay9b8f3fr8zes2Cff"
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
