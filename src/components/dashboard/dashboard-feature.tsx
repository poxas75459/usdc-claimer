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
    "4jkm91GE4UBiSRFGkqJguffFebbEgPYBnnG2TfuCycvQTQoecmW2Qvs8mV71A5hseNF4N7AFaPn2bTRcahYMj2Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nge2v5vHZGy2F7k7Kbo5iKjMj3VYCCi4xrswZrmSCQWzUun3E4PcqhEqFPxgm7pGDaMjXbEAEkmy7GpkzKnEShH",
  "key1": "vhEgpwpVkBR8qjkWXoHnNGPfzgtXKp8UuvTZjE2k9Qq9MPC4wcGgRi8axHZ3ZqghaEB2fqMjAahtX7N6FzTUiXN",
  "key2": "ACjfMjrQJ7Uix5aRhQzV2P3fxvvoPmMvkXeHrXJ3TGNKXauz2P2WqfX1jVk6ouqwsF1LzoVxCZGnvFiJafNDaso",
  "key3": "3rnjaakW6aKNyEaLvPa7K5YC1rgo5UbZioxYMWjRmKTbJ2pkyJHEngauQCJJKcLY2KZB8hrBDaMEiXFLjwmzqNFS",
  "key4": "48jVxpvpwGcmDKugaXtcyumJ34PksrLWxUd78m6caNVu9EwtbjP3F2xnM2BFP2Ly7YZCejXmy771fhSWf5fJEaV8",
  "key5": "3uQsUfBJm6ZnrYexxuoyXeZ1S5RGtjCsRKKHEdBvBWghDoVrpFdwD9gC8yjGenD7a7YgHByVm2sPXfVXy7cazRkc",
  "key6": "4xn4KrFxxU1Gwtpa1QKoniCqkb41b9r9zUpqPuTuRy8t2RjUZ4XircSWySn6SxxkWGEXcZw5uVUuKZpw6pdU2Q9z",
  "key7": "4koJGV24xTEqeuUTyfBQWBdYwJoqLwqh2nTwHJTW9aoDp5dkk8eYxC4xPxpaS1hoZDGumtRnhJXffB5soPbw18uc",
  "key8": "4UEJWSqoiiSGLR7TwuJQZfnVxAfpqFSz7LkXXNHfBsFTiXxnnGPdfh3NCCs1yBrzsSmDmL8mW9x6JwDWqNwDjP5R",
  "key9": "4yDJYzN7jLBvgRi4KjB4JkdGbydkPfCsMDoy8VHWvnC2PSZDKNU3Y4NLGc1iHuyBSzUWjvPQ2Bxy7aVQx1FW3gm5",
  "key10": "3Ryo3JtMQnY63HZeqeuxYax1SXmQxQp2YW5jri5LVaAXgbVMoKRcc6XPYfn1eyP61ydCrHUHoNEhwffVbKtZqsNp",
  "key11": "621bXwjQcBt3RKb3n7o4MabdSf5bN8oENPTPVPz2nm2iDvdeNdKrsaajwdEf7XAG4Y9WTCZvC4ygcYebw1tvAmRz",
  "key12": "3jBGMcsaapmKhTxwiL8Fa5ra536BJhXm27MR1djEMQ7rpKZD9BSUKfkYP9QxMV7o7br87UugYTa3Z4dyEr1X8exw",
  "key13": "2od7HY63Jt3adqGJvLdYAfbxhqosuEcJJRBHTi1qn9WPMxRsFVtsfKwSS2zRBqkUyxGF42jiTwDDM6mJkFqeLbF6",
  "key14": "5FV25wBGqh8Qb1mP4NwuQWTSXKrZzjsEV4UFbYxRdeaeQMsrsMFTT7SVknGtPCfbbLpq8wxjctbAbWtVcTz57t8o",
  "key15": "42AuE7RR7t2dFZ8UQ8vdxw9Fif2dRdARdenpaPk4ot8jMNpa93vzFBikAPc3UtEzofuS6e8hASmcf31LURZSRQ6j",
  "key16": "5cogzTwUrFwFj6ogmwqdiyoNtXLCjXEKLwjg4BaZDCsqwRMMXaveaaFvvQBRSAgU31HGSF4jbuZh9urozdRVdeYs",
  "key17": "VCsBSjGoJghowH8agzCMBzXe6Khcdg9DmTAQZcAnDcDznijrjBJTN6Rrn1omE61JQetFeBDEPrd2SppbDuoXe2t",
  "key18": "5vbYQEjAzWVwK2YWupsPidRXtcnZQoRBBUu95JR9ZeMgnvdV5tky1FKwfcYbLG2dfoJH99VFd1jsm4w9k7aHmdUh",
  "key19": "5hBe8D5AfUbmRLSwWVrzhA1Kzh7ktYCoDxxy2ZtPcEoJPE9VZPGqcXXcdPvRWPk36rbQA9a7PU87D2VUvpgi6tm3",
  "key20": "47Kq1uVi8WhA3k9tYon4GyoxYYQk1MrZxt8uTAmBy1rxia1pXu5wHRYhyGdqMta1bbGBHByU2aG24v7FkM7avYwu",
  "key21": "voooWXuExnc8SmFBwwZVDupLEnFhsNbiB1esp44kQZs3ahaB4VGSjAG3VsuQvukJUgGx4jFaANMQoKbDVRKxS8m",
  "key22": "38dh8atyTfkXo1nSymih6EJp8rrcLimDWeJUzEqD1KxgZkanHcgkczU8yxZkfsbo7P4Lzrfqx91TkVEtK9HCivvD",
  "key23": "5tWXeW2JQSTsc81abDwUs7YYsbyw5cWuQ7Gw2ptjh3ZMmd3ogpbwMGToQjsvxzddB9tCDNgvowR48bmjohk5rJWR",
  "key24": "4aSPEuog9WfHp3oVoN12vVwK4DKKPsBecjoo2YLxAE9eydGycB7zSVPtgEBb4zp59b7n1Uf6H962TuFwJHKhP8e8",
  "key25": "2N9qPVUcM7J5am3gPYt4gFLW28ArrYbFpVZSfev6V9XXiLeixa4jWTft7vsEaZTbmWaa2jiCaFTFicdDFwtMLk2n",
  "key26": "26duyRguphLJUPeYQWS7NZQHcvS6NSGMrYtJvUarXyVCWhRkZEr5kuHxFqp1kcnCjLX9uSZMLPozMT8n8jQCaui2",
  "key27": "2AiGBN6NWJzuhMkj5avjqKWfCfeK2X2KDJcjxPdSRLeRnaUUCLQzRBeXWUyzEEmhNj9Y2tokd9mJZdwbuTVFLCoT"
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
