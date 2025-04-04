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
    "4L5Ue5kKYfbyweAkPaVVUAXVaG16juKeYXJdz91LwBMDtLhCbwoPNMitXPwKpreypkRdM4vKX7TbvgWPxkgVhkjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZz6CatHGpwcfb9vSQGB3djpfJuJbLkZS2xnMV7d34jn6T5DG5DvkGUFvczGPi3EQNcP55obUGCY9wzCyb7LPGN",
  "key1": "PodfEeFdxtJsqGmmN81Rw6SSYrS97FXi2ZrWVmJkYRCwcELqZdDYt71nghaVQpwYvGj6kuhdZJrQqGu7fkZhA3P",
  "key2": "2SK9om2L7g3Jn44S5s78dbx2e9DXS29g37pp8SiNsGM6JsU9pM56CVYaBp2G8CinF3SgQMt8zNWHe3HdUHfBwkDv",
  "key3": "3Htpuf1VFohgWNDZMmUWNWbAb7Y938A7954ZaiRiuijkLeTp7akqThX2fJ81zgAtypfP5urhQWB2VQYK2c4GY7L5",
  "key4": "5W5obChgsdzQYbVpBtQSPiMLve6v2UV7hYUVqHD3BxvmtAjX5H2HBqvzk7LnakjGJ4j281e7YcFJbixcAmr1zgaL",
  "key5": "4LiuNtDcbxjEMN5yQNwtesBwiXGEpnmzTeKvjxjFiaDC21ALYhcfH3YJXUPsuaVWjdUKvid3NxoEZnGu2DJRoC7d",
  "key6": "5o9QS8CHFpVxycrJWngM1jmwTFQb1yrug9T7uaXdtPUH7UirvF9rD8dCi9ansS221HuAzngbeRbLXT23CBM5dYSA",
  "key7": "2CzHdSzdMXE6Fb3NsjjADpKAvJEK5qc3yzgKPSwUmcNtQqyLVmcKWFLYH3dWsCusxeyqmV7aFcWV1tNqwGWU3ZfD",
  "key8": "2Z5zGp9p223MvZXGUpUpfSEujjQoB4SBY3kRhk3Mcnr5ZWNzHsYChqKk5MHZfZBVmm8qB5dhFw2uShwLCoE6p1X7",
  "key9": "XVcjnpJisnZXGa2AfMV199Rc4hWXNrZmPGcJFhVzWbh6B2uAzKX8eSD1M5KVdAdFtUrQpEXXc4zFJeBwqb7n7Zj",
  "key10": "3XbuhWZXNzwkoGsEw2ygv7pvVWFSXbivfUnXd3BViNT4z2cKQ6Yp3uP9TtH3iZixnbreqV6WURZU6AKVQz41UEyU",
  "key11": "3bUj8Us2XRSgue5aE9EdAjP6WW3ZKnaoJ6ZmBwBTUj9stjRNNqeceDhUg8uh2vS45S6tGmyFyyc2qP5aSgr4x91E",
  "key12": "3WKPkMnGbxfLuJEKJ5nS5g6CHXz8t7FhpCqLjSMYG5jiHz3fg4BmBQ2EcLrekD56oXwhjspP5mdiC23bQURGZwin",
  "key13": "4mGgeDMxRLcJBXd6hgHCueqzWByQai3dqBVqnTYSVaTD2PQ92T6iDeD8EAKwBhBNziKe7dj56miWpQU26tzNW1wS",
  "key14": "5oXSvPpLxTXyKTZEkmWzUc6zQNQg8nwTNrR1F2ibuWADV7QhCWnZxtbJhKBUZ3McqvNS6UJP2pgpiYmKLkCvbaqq",
  "key15": "4mRJRYjMo1b3Ht7gahNyqXgZnswEeSvkCF3hcRuAvCZ3WTCeSutBh1JPgimd7Ax751QE3a83k5EiFhQybWf9LaSK",
  "key16": "2LZ2WjUexbeir6DVVqxgwcP8Cw1woRYZ3AecLPdEDCythGiWVPz2jdW2YTqgGYZKr3Z2e85UnQ3eRvPoRMdwjWGT",
  "key17": "5QTSaEuXeKDUgMRNpR4bJpbHu3TUSxiurWi1GVPNf2uYjaqgZyJERNnWit77D4feTN3xAn1RDL8fJpmL8HreiWpm",
  "key18": "2tmJWmNLUXw93X9yBPRK9vJHfvHehLckvCfbyyEdKMbd7EBuxdNrFV7dCtRR2ghwhEWFvwS6EJRzrQAakyxhTQeK",
  "key19": "XXZEMpNXGfEnpAcjEFkgYeMN1DMEJZN7wWpg4ZA2P1vfywExfNdwCkySkmievoM9wYJTJaEjPpvnLNo4h7PwFcG",
  "key20": "4ugs64SRBzzcZUWnDQxTqaP2Rf9ot9aDqSiBqBmUELxyArd8fpHVdgPftk2rmSCe3dp8MKdd7qxUmsQbxhXhtw4P",
  "key21": "2xcsRC1vSUnFKrz26nfzcDf4z1t34kqgwYaHz1ztSUDcLeQxacUdeuzkmMyWmrvckwip5b912EVH2Z4hEFgUxo5k",
  "key22": "4DsoUmGf8RK8BupYgcb269jGnTFacUEiYxJqc8qrR3ShbUbbVRMnBTZCXSvpscVpgbSfyeKrGsVrzeJH9nQDLKvs",
  "key23": "2jreKFyHtEkDW3wnk7D18tGRzZ8s1oxfeVJD1SibreqvoKNT1qEfLkYVWYfqwNQaqRbjP4rz2E8maqJZKRrJX9Dt",
  "key24": "5RMgYWeEKuhkPnFM6jzq4S5u6c5D9cXMpNtbCh7opVdVDTx9kudjTPkoLtfy7JKNLuwtbFgHB914o9mUp5TWVSd8",
  "key25": "5rC3qFtjCmvgqGfmGYNXE369EPYYSuNhLGGRD59YoXm2xDZMucyZUbWt4eqiAG847kJWCWxk7f5cTaQh9JpSNQYs",
  "key26": "49YvG6Lr5gSm3bFj1oa7TreCSEen7zG152jJ1rCqBgAFbrh2dgwLQKZR9z5AvB95wkFVWB9Egv41VMjcNYTmFNW",
  "key27": "XjezcgMAHuJEdvsVDtGHxmALaiQyseM7Rtv6V7Fxy5svMR9Njqyq8usb2X4PRvJdznMrRSiLkwa58AwcFxVwkab",
  "key28": "HmRfuN267r2QHqnCHARwqRkBYzxLuSgNhn99yLLpGwjgmokVdCXuYZKLKStT265HEpWBrn4jZKPHSMq32DMmVVL",
  "key29": "3nVuE7SCjK638S1ZLdBHeRqJwzqfeFg4qZwd9pPUfpfe8kn9bwRZ8ryWHKypYunsuRksU17TYdvtSYu6rEUkwKDB",
  "key30": "5mvDHcirYg4Mff6AfvxSaPxW6ciq5bvxzMzrgxMq7BcJwd37ZgBuyDwVLjdWCZJnCB1Ck57zvk54yK3YhmANp66r",
  "key31": "e8M29NNjFEDeEBKvzqzdMoaHpTxW1kNX6LdhdaYnVdcJpxem7AfY1Uv3NQq9ZCtb7Bwvns8mFYkieCnJoBErUA2",
  "key32": "3qdix8NMLcR7cydtaBu3khreWn3eKkntEcqocpQBJFmvH7Xb5Bgc7ZycoE2L4oT8Ntr4sdwbXmsmDy58E8Z8n9YK",
  "key33": "4L1CbvZ4tsxZ141tGRALu7RU6GKtyxbnFEKSQFuCnMzHazSi4Gzxj3x7hdTL3ox6aPqjzQcxFMq9hpcT4uY3ZHh6",
  "key34": "5kqqVPcNYzzKnzmEqbbzQ2RnSP526mzP1DRG48gZc9mQRZgqn4SQXAKJh9LaawFfdjaqKM7W7MTjFFHRiWAjCdra",
  "key35": "rdFMQJYthKsX9ZZL5UZhB7BhH8ADSM3tYbpTf467w4wtkE1SWgFoHMBxM3VPi5JztrvP7SmkR8Qny8qu8oLd8Zd"
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
