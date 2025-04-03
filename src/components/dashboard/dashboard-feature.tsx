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
    "QC1tayTcW79L9yVg9cCm9eWRWUkLroDs7Tu7aBuzYprdz5EKTbqQAN53yuJn5cV6YDS6wxyzxgvhHnfghaba2Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XfGfm49b8juF2fKrU59rFkpxPzEtUmfJqqNv3Gi9FnNKUHXos6vDa7gcjTnF83uphhhaL5YK55LYokCLsANTGB7",
  "key1": "5M2Ruw8wpzZQ7yNneEpCGzpRkawrJUkED6fCyzpjyG9Z9LzJHRTbktVMR4Q9TFgdG5BMJWuWLz84VrgifruvxN6u",
  "key2": "5pMjYx55RA99Tur9aM5x9fuE117NW6p9GjkoJ3FRZ2dWtPyteNtrDmkmU6LG5A4rc4YqbaupK3LCCrF61yHNEURX",
  "key3": "2FyfijiEh18fLoLiJaX86vBCFZRwAQZo9cWEyHJkJ91BTvvGDeRJAeHWwCT3fYvfoZ3eoz67BhYpMcHAjSYvsQyf",
  "key4": "5QKehDWVZ6r3vU81mr4MawuqhCPbUZNX3CLzKjui1Xiw7Cr4Ljg49ybpXzC7MiSv9rR3Y2kPb7p2S3jFGJjj4p54",
  "key5": "5d5QCrWnnbDMNR84U7vtnZBAmLZNrCrUthpyKAa1Q6vGkWTwGYaNvyiKwR3ck8HihrVg2pecre45gqBzGMs2ynj8",
  "key6": "2NqVByZZ32gNDryFiRFFVKHtGDcsZKjT1159KiXh7BBbUqgUSkfhmuUVeXg3fg5yiKSnb7c1T1BEunhDtscx1iw5",
  "key7": "DX8mGodjd4tBYGsATngNohCZMj67HYgugqbb3ABybGgcDAeK3wBDmHrZ1Dxruc7MPRP2ZMMHY3BHj1iCg9yvQio",
  "key8": "2t2ajf5G53a8QBejTYnD6UGJzmashcE5rcpmvXigtWqWmzBMhoyidGEurLRdCKgWCXhhk7ixedrVobKBDhdxY4uu",
  "key9": "2tpFePbB9D7SW8P6o2rufdtvCvXbWW7hr4WXc6DpC5H9MNoT5aSkbG1KetE1XxDUU8fkmSVvC697CHtfyqDG3uMQ",
  "key10": "tRicqUCdtZKVytFYMkPzFjKAf6RSU89Ts6JyrdSKRww5TCmy8VRm7qAk9XwRdZqtggCqH7LuvUUwuqkgvrSZG6T",
  "key11": "4aNP7VCnKxPPuP6bYRXZfYgmUa1NttZungRucq2gjaPSocq7wBDHrmYAYCxvjaFZwpEijmVicz9WNR994KNQhMvq",
  "key12": "5yYrixP1x8XPkL3fdCByYnDVP6Va1EMf9FFaUgetfQUuv8uQDCiaZyBykPeD31yj2mxYb6KYfGaecdF7ysK5BAgB",
  "key13": "YLeitLDRqHsPbwqSMboHWF7bgJ2sZo4tSRzFkHRaHugFjFbCbUDPia2tse61AZYcfRDZVmKid1yawnFGMA5byCo",
  "key14": "bjRPZgqBhDd2XBXg8ymgHuMZdELXtSidJr9HMhNugwSgUv8eNG54g4LULo9i19iobGPGzpjTEHbE8LNUyeMch6Y",
  "key15": "2wuc3DFDtVnXPiCxBLVmdUNxUo4mAJTKhNsLszgU1iGoK56uL7AgUNdftZNYbtdz4ynqwePwS9yDsrLF4hq2D8BG",
  "key16": "2giBbmSYvhxWgNnon9TSFy5neLYJtg5H7LrNYxpL6TArzkU6T3rp6hcszaXFvZ6hf25hqgRHG3N2gi3cRfRAnGUC",
  "key17": "4uZNhjkycnfGvRMX36SNhHdi7ZmPc1kHmAchR9sqhKEeswUWRn6y2C6JLKWR39Lkb69fqzqEAyLgQAF86C9BdZmg",
  "key18": "4xNSePi2xkQW4ZGMgssveHm55oi1aAj6bTfGn6etH8yYn2sXxFHhwdMjA3tisvfDopK9HAQZdYjDg885uHdSUGNN",
  "key19": "2uyXSUzGV1NXqGgjQRc7NsQP1gTQoNVsNVUm7PwhvUJz9AsQcz8gG1Zago4hQk5kLX4jRF4HFdr8nizAiKYkAV5L",
  "key20": "5J3FipdDZ4SNiV6cCiFdFNLLJw3XNFH36PBstyutfXFSKJXoE1SNHB41GKb5wuzgJsJMS8Nk5aDZhUfwsh5kcEgy",
  "key21": "S3uBczWfihAPqJemQ8mmSQwQSSkK7yDA7k89GpjTSxfWwSMyRxFku1ZPYsEHzrNUByb91FqMDqmZbAQK4GMEdtX",
  "key22": "s4iU9Ut1sX9zuQapJshvSX3ShfMwhD6x28FuHRLXX1bS11LeBUD8gKp4DscRfNyh4fL4uwQb1nMEPVbD4DLfoz1",
  "key23": "GfmG3FiqdGoF7eMqvzvKkFednCHiF1HBaYKCRnZxxB4Cm7A5Gr7eiLs1sR5RQ1PpsEXuhD2tDMUaexvBRRvzzDf",
  "key24": "rTTLRCLDJoMm9ThATNWZHFB1vCxNCzvWZQC5HNpmUKK45GqjUvrjDgXhyXeTQmYBcRVYAGTLwadxg79NTN97SNM",
  "key25": "3rqUerFSF1aQfM67w9BczbUg6xnSFC77PveHvJdef2US9VovhE2uRNPF23Y1c4EdpQHMaxFbnYmK8Q6G1t6pAocH",
  "key26": "4cUp1cwBvG9gisy3FSRAkMn52sJWApNFgfHhfKBV3u1RPRVieNYnSLBk5CuiHvhdjoKgPhThB3JducqPR2oLGcGZ",
  "key27": "4E1TU6Qk88W3iUs4d9skhJP1indv1evWP93pY23cbXHMLeB3eZqdSgKouKvRQNFVYuVekBihPQsKoNmm7nVX7Afo",
  "key28": "2PKgwRf1cG7M8WJTzEVYcLmLi6nGc1uhtU1Du9iErAt4pxWhLPaUk1senZYhFK4FD1pEGkRWZyo3CxEQjREGaHnc",
  "key29": "5iXbiXzHmji6EdjdTcCLcV784dZ4SeWAiiT44gvNdsKKaRJXwpkCTiN1GikwxMehEe1JCNrHiCTbayeFV2utGnfW",
  "key30": "4V5ar6jucv8Roo8iFiuSZCAh6md9g2Jp1nWfhRurxUwHKQVACqxVmQf6Y3rsCYFerrw3GU5t8zQ5bTqnAJW3Zgh2",
  "key31": "Zf5Aspofc4ZjwQngJrL7xNsnkHkPkjNx2MAXEHTU9eKvkpo8AUZ8HdbJMd5T2atpTBDEBbQZd65nrQYHgJkPGNa",
  "key32": "aNkjXkm4JEmUDmwU3CBsrnReYd95edtrkXx4miAPEo5AmUFFA1Y8prGXy6c89TQG3Doh63wmeStFkL62JJ9ZwVB",
  "key33": "5YJMAmw25p1hH6YTRA965SBSzcVKfGFrMxyN5q75QiGUdgQ9jxXq3TDyzhZGiaqMkYJhpp2XZUrZ4sPt4kwZLEDJ"
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
