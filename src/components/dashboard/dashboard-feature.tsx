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
    "6kqpdoWw1Ls6xbFv5vrB8YNCaWSEWBhahyQ84YebkiKgFcaPYMcehx5Ks11o8264K3389h1Af927M4aJba95BnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBqi586X57ENX4KzAgvaA5uc152iMifcREgNn4c1nB3FUWbauWgLssxftt8AjbjmnpbyphBBrnJyFQe3qDtGCsG",
  "key1": "5Ukr3bZfYfHTvmiAtE2xfN4Sg1PZNdRppVLskR8Lqr6m3BxhLq8CdJ2pAmTf4LKQ7VHDWaqwAhRR1iJ7VCtCEZF2",
  "key2": "4x8HqC9cUwR5ArrtctiVTfZT8MH1GxYB7JkQM7HMStAqTAFiyGXqe96PRXuudKvvui6CbjgCu5bnj1a77WKEy51s",
  "key3": "4utjUTtvhkMMZVNfv3KVeRdgo6WVrbcf2gFhhjQXpqsFdD7SM9za2eLLUB8KyKcFb3s1rSFkfY65o5jmHxbZJY2A",
  "key4": "4zeif8Fr8SrHGtjGRnu2m92eSQB71ybZBMKn4wiq2wQw7MwDF8ciZ58PvS9hTK72hc6iETjWk6Cw5oCNYS5L55PF",
  "key5": "3VUUSBAsjpb1QYb1V5oBQ52cwy1CfMFW5udqTiJpCgniW8AeKAz7sU1Wr6hFTCv1CFWonrh2mf2zpkmRc5BUr6mY",
  "key6": "5bkmYERbdicfMvD7qT9pikQV2jc1eWCU7xq7QuTZhZFegW9phmA8g3ns7wAnzrnSjJjRkXNSqUvDvKxFXo2pNXZN",
  "key7": "tb2oZ7G314DpSAFYy9uUaqtpJTrmXK4WJ4c79aZKmVdJ3okYeauc7FK1gi8EKLcVrzhexMayNtY2FnvS3p9DSBP",
  "key8": "2Jz4ZLi4a3c3BfVrbBMmm4vDKDRjuDkZDYjTyDh7hwF3mHk66wP1SEYxJPRERhUjEe96wDz5HQARyU5pAHeopiYu",
  "key9": "4KRyGoMCRQfnYMZBCxRaw4gwbUFFNbcLz7KdBMqoQ3ZH59xGpPL1V9iy9akxe3TLfDnskQ8tWoQzmRUiKY3zwefM",
  "key10": "5z83PFcLat7VqhSZpan4hTdCK6ESWwVnW2w5mZafG7v3PxcviFqENz8SGRjTa67fVCiAji7JZg3ZyDGaEZedYVEo",
  "key11": "41nfMT2UiMYj7TssfRDSU5HkpNcNsZ2BCCgyxhCqTPgJSrYMWRqQzGCZr5wELkG6pyDwLDFKN3guV7PmLAz1LNn7",
  "key12": "4xqpB9VkRJW5yiisx7X2bigpGg8xHwZPWU7AyAGsd66hnSVFjCkCMqC23zNpAK2Ww18tg3uQkPPiA33CjHMSh4uL",
  "key13": "4RA6Hr6LgvcUWRDN1bmaMMA8HcMvwCeyydKHqKSvGKcuyTSJrwXtZufzkBAjL4DMhZHJD2E7Wfs6MViRYUumYs8B",
  "key14": "tJ26Ybt3MG1gqs4t9DGibko9A78sEJ1912fKFDBkWuDGh2WxGc1PbLELd6G1BjBtxPmoxjdRtxses53Bexk3Nt6",
  "key15": "287jTi8tuKzfVWw1sVyXLUthCCDkzBp7jYymFrbmt8XCDHi7kAN77YmX6Lv8SpZECA28SJTF6VeFVrfQ6iPYdG2a",
  "key16": "rcdKCZZpaLwz1394EY87rogmg5PPz1E3Pfmi4W8RWtWnW9PpLjmS8VmCwXbdgopAYcpq9FVCweBDNn6iXRU97h3",
  "key17": "4CYPBs9zSvAaicnkBVqZH8RrsNuRdpv8VVbjSsgSN62JDvtp8pqAJu5GUziPwuZpCYAiCZPDqCwTXZX7PLJYcsXp",
  "key18": "3LJXQoLsDZLmQwNbw5pAUyWMCxBpMFrkw4yyHt4AwFcfgABSnUv44uNsomB54ouwaLCxkUE4Qs1LZQadj85SCpM2",
  "key19": "4tLaWnUE9JKKrE7pVetJrqmcEwvJ7Wn3vuBJyJXHxVe68hqxSTfffNThXhnwiaH2u91mTNuywGshnvJJkc7EBeGX",
  "key20": "f2uwaHw53bfMRjogYPQEtVw6cnQpZo9A5ukEz2A6n1q6b4D3Gs1vshuvZQcythDDzuG8jXpFrtTqggq5bFkPJQk",
  "key21": "4DvUSqFTv6stkGoF1zqcab1i7xNXyK7aLbGRjFJ4ziNW2sgeVegLssLiytpze64mddzu2pjLR25cDYPHyWRCdMUv",
  "key22": "2diJKxCGECHy6kLDNbmyLAe7XtYF9TNt5AyoZQ93b8hR8g758TZHZPqHygnuLbYPdEoRTLaucCJhRzkKAfv5YrDt",
  "key23": "3ctHK23iFMVXJvUezC5wyjigJ7ubZC4J4n7sreFTfunTNxJoMr2rettSgxzhByBJCtDGYRe2YeUFgyRmNQGoDuqu",
  "key24": "5QHUVN5gVc9yENFphEZLxgZSpnZPQbVH3Ya3EtgcpViMsKBsD42vNgGXLj9zqMPt5JZZZNNRFzPC5GK6zUn7i6wN",
  "key25": "42xb7CLdWipUAjden8CsfKBCqjmwYV37KmuicPSU4hSqjxq9Bqv7WzgpQj867iCo8AAqDeFVEfkVAd8iV2asJFmj"
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
