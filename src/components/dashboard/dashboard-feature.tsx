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
    "prxAcdPpgrcHQ3vLH5fDJUUme9mKXQd4GeCFWFqRv46Et6GsnRJSThsNG1CeFKxUAbxLs2CnH4v4rfEqH5krp9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54eFHpkMnDYqaoCXWt226WshKPF8Kydyeuo51g3Fn7LCh45f9aZcAmVS1UR9Ue8iLHcx5MQqPrMpv82Wpx2iJmu4",
  "key1": "tTrYravg2hRnKR3jrge52Sv4CfQ72fARqj8nJLNsCCJCJh4FxYh1Nz8wa62HEiYJWBadPW8yh9N9so4CaRhRqXr",
  "key2": "4PbBfJYs8kTGKYuVR7YWqrc1WAb8SmEY3Q4J8ZgaYNBT36ujeU6QwUihmzABByRfBGZ5YRZPH9BfZam3Rn4n4ttF",
  "key3": "2tjDVYwsjxLEdx5521SUuHUgq1aixGoT5MjtvRjpQT4WHA42AiZ1z1o8gpHQJp2oeAKHXXu3EGPCSgmiyH5sTNHT",
  "key4": "X5XLFHs9gHKZ5RW2Y5QKF2dmESEc9nyrjgV1vppHovJit1izjEdCB9bT3sdYG7TpEBhUDkGiEwwedFCCtmwNStu",
  "key5": "4mXqJg72zSY5jqaNAmrQTKXh52amC6dNz6zeyCYn38mZwNMsQirUc5K7Dtq6PsGGimoy8NP7u1sgBMARYpHtmi2X",
  "key6": "3RC4qcLr91VgEAarQPXadzeD5vvEuqd9ocxLaVhxq5oq68bhzBFA7keGNNDLaMg2xcjmEzdvkGgmhFqbC5MTqAz3",
  "key7": "4kgg1Xqdw2QAErPdznXGsrvG7MhxKJwxcqFoK2hX9mXaf8sfHYupPnDAJYnFxpEPqa8xw1Qt5sX2MH2TvKgq9Pgu",
  "key8": "4XTtWeisiJcyieLP1iR3gSiGDumYiNWMLychdXfQkBr8sWugVTXfTLg3GdxmuH1Dam4rrEMnKXvgeoUQDTFcZEJ9",
  "key9": "5hDJiU5oVKYgmZm37NadiZGsiTk532kT6C98sD2xiZA7UdkRLh256Z72u6MGcRbFBu6wqVgt2JSBaKiv4KB8KSJW",
  "key10": "2g4FnFcMFmqwjicq31s7b8eiaLCsjXvPu51Fv1EsU2z4feHuKQEmVLqN2ZNuJN65BrxwLG3Mj5ZnG28xDxQ2JH55",
  "key11": "59HXsQYVivLbLp3H9CpSMG8Rojy4Brqi8GD5WDE7puDX8wVDPz5JpYSfdAMZSNE1KZiXcCpK1WygWxBZDbaSfNB",
  "key12": "4gwAwRmvHE4Dk2JpqjoYKFAAdXXTfXZTqJVHgF7U5tdSEjN1nDeoXdxQjSFjftfWVqS7FTjrKCmdFYkCY6k1PWgb",
  "key13": "3gmCE4R9cNy4DVtusZRr5ntuvPcZmcpR5GAbTnKo7wNBFypvsCFZeVvcEmu63uUGqYtZFxXoN8gfjeWAd9DY3XzE",
  "key14": "4L9zy6sXDxcm9tg5dPqfWhm3nnuw4VgLgxasiJfL3tYp43VwAWdjCyrD2HFaTszW1PKJMhiJWQrDpyLZjvtvhHGr",
  "key15": "2cB6Hd3eouVdDxNH7bcmDGtLpVWBP1xsSmTeXgmkaJKKRH1cAEnxpTkJrzBF7mkUAxBGd7rdWYwH92Pcc4vgdv8u",
  "key16": "5yKf19141M7WZB3JTtMpq84B7GMD3xc1eXhb83edxLk42q3f1zJB8SGAnww79HQawmUatTT6bieVRKSWa4GzXGe8",
  "key17": "3L2PcW1boXTZX6JKqwgfJkYiiDrpEVKDYtz3tJM4J77eE9R67F3nE2WQmTh7gBfQo2aNBE8YtHrJdaedSF4SjPDN",
  "key18": "39g8gPDypbm2f3ff8LJ7Bqo7fB4AxYu7RUKHQC2gJspGrdVuJb8pqKYkcc8T2fVNM94PrXmEUcjCDEHfiDCdCBW2",
  "key19": "25wUcFQxXxSKoyT132uHYkZk274HBQUEG7QnHHQYa7o1FVPgM7yAe9m4CLknE3bw2ETveR29EmGyzPsxe9DnLFPh",
  "key20": "RrEd4m6KXZ69x3N331LLGcn8taSpEGytD7dKCqLcHnG55M3GgJX62wcTXhRZpGfizmnH4ASK8GDR1pW7ThBU9Ss",
  "key21": "4DUUEJWGDsNBq7Q7BAmCQJLfeLWrQxrChibbQvBgyi2sBCWmEmVxCH2FL9etdKzMv9SBjptNqcqPWynKux8rpNE5",
  "key22": "42NtySzF6hJe7Dk9sDYQ9njPhuaF174BuPncKbaMeu5zx3aPpP81WPYwxuzdCWnCvCGBaPhHmbEvpaEsJya3kpjr",
  "key23": "tSv66htSsHzpTnJBotcrxKjbThySNr1PEEMMix9p8K1nRa1gCSznuxigsGaQGwwG1z1DTcs7XCNehnJp1pQANj5",
  "key24": "3qYEntPCV4bAikXFhNVtabr12rZbjWkkEbpk91GpDn3Rkmx5iNKke1d88hTBpSHPCZ8WX8ijpj3xUJ96SsGoHhWq",
  "key25": "3Nqa7KF624mrUaAvAB5b498V9eDJKFm8MQVweyfKD7GDd2zAda5eqc6zu26uC6kZuYxGHjNRkeJRSU9Xj1aLtNed"
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
