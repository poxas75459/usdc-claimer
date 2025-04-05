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
    "5DRFW5zwxoEnQ9vg5GiY6trfFikVag2xvi1HZQebtXWmwK6WyenazvXFM1f2dQ2v5mPnZ92v47MewqWJ3zq5tWpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qpm3uA9dJsRGKS5RB4VUai4SzwZ3J3TU7kfy8P5Jn6yRKyPt9ypM7hcyoNtfuERtgwXKtn6wxbZ32B5cWZbqzbp",
  "key1": "5b7LZyBb2FyFSYpCM4Lj6LjkAa1mRw27N9CCdGxykRLyNqeEYc2kEgAgtyuYkMDDfVP8ZnVS2aSTpXnrczBNDSJL",
  "key2": "s8efaPV8aaUNfaUgj8s9CQ9wK2LhfQosNwNnKbrFr6mSyNgXVYoRA4wyJvw7k3mvf25Fkaoo7d7VRgCMqfZWdVy",
  "key3": "2pWjYkZP6jjuZeVvKZMSkkxmVvqMEDSnCtnQ3cQagLnVQNRaszXqtBTygFPxGcNYfWtmvrZQPJ17BJeNeBT9Z9dK",
  "key4": "3ww8HgHU8rdf7Kf6VgDxRLt2CGhS8oAT6NLScv13Wf6rkGN55geS65VZL3yCJNGw52LtSnUGxjvdmUVbeDkAMMJg",
  "key5": "29hZmyWVj4nxy2pHLGqaq3WqnHPbJjcg8Un7TgTdixkdopxrcmfYJ2iHRJCD6ZCcc88CnfvQ9rFL8HdBPafYEnyM",
  "key6": "45saeQf7qovFpnEyrw1eKgEynf5k84xyG17ZAwnX4DVNjofwG9cMuJHFvg3SwYZU1ywzHJrSB7JJSsMfxv2bDUKL",
  "key7": "4Y2sLmYe8aPdQgihPBgz3eLHkXhe91pz2PEKf4PZLHxNYaaY8ywJVhgCccbmam91tb2wvB7oA89cTDDGDohnkeK",
  "key8": "2TAzJmVVjMFcWnp6g1kDibTwXGt2SFApgRDTP1aSD3MQcNHZHYzARGqQrHXGrSHruqWpzTUXuKjSCUxUT46Jg1nM",
  "key9": "29Yazf2NSJvHpdNjnBdHyH3HewxB3uoQFfjxGPK5UV4Juz7LKJAF1WFNAbq1CnCWYqXdtVWjJZaAr8C5LXXtakmC",
  "key10": "5rWBxWfxemcVbdWxQsq5g6NstgccPvBNHGvNDUeBSxXAXyqZjb5uh5AdyKHGwqemtvhLwcydZtuzZ5YNbqCPXGWp",
  "key11": "fK8tM8tEWWUMeFo8NVeJtJnQU2z9Ybm1cj6C6JtVEfCyFG44Pf5rtLKaStzPbnFzH8o7TpiqDQSxSW28YAdxZQ2",
  "key12": "LMThC1ycdm62PNCKE7XNhs6bg6YDtgPRk3MryFCpUDtGpdy7tpF2XRsTGQ36zsQBjabF6XpuVBTjDXNQ6MYdY41",
  "key13": "23rVuM2TYxk6MWuQ1xzvqqUWBM4GypqBnb4qcpp2HhupvXqTnAdhwsbRTS37AitA89N4CG1WeZvwiUJWfpwEhEzx",
  "key14": "2kJa6ceCUifbMmhET74jzSJzcW3SRUKVsbXtYAh4xdFETjhwFGhY3c3uvc1h4diLQTBJUdZKKLPkL4agny2gqdqD",
  "key15": "2DestZxLTnjgvaZDyTB1CVDgC6io3AE163x3JHCmsiKuKiFpe8ru2cmDjQnRYZWnpbbsrVvGars5aWq7XDL1MeSN",
  "key16": "3vGqHUSV3hxVj1xNHmf59ASY6Ltot4Ps8en3AgJL8bQAGmBDYL7jNE9pGjGEnhXzGTxpYeFNHLtSnBTgJ6zXNGQW",
  "key17": "5iYfD12ZJNUPrPtBv38fFiMzs7vKZECVckNx7RH73xSccXaEJ1Pmz7Qxe4ghhxJnWYnsk3s2d8SeucepFKRqE3Tb",
  "key18": "4CYgGZmjvXBa673YwTGoaoCQhKm62JShQCXpyNUGbzrtvckVxCm6n2ATvMaYLL3oG2dohgLa6X5rp7CxFqBNqYUw",
  "key19": "4YqE8fvkzAVEph5Ghb9M4PWPHm6XdxWmientiGCP8teVaZTdVYQwmZP3aYQL1UoppaHYFop9LrUxyGXh4bthRknp",
  "key20": "4mgJGSpZNLLLU5Ho5XXLe9UzHbUVPhG7CDPKgHCUBxkMvZyZoaAFz8gDf45NMPktJ3LnBr7YxYQDCN1deVU9RM8m",
  "key21": "4fStevHGYJuzcK51jsJXA2bYzokHKeJHrSPPnBEKcNb9ho2eh8snDjgiPH9J9vxvi2PxiBCePKAD1vWHZsZF1cmy",
  "key22": "Jif4Dzx64Y9yHG9n9mjkxzdhc4TcTzCUH5sSsvhsVxrLRUs5KbLj9KKAJ9L2dJWxeEPohNm9FwgTcvpwwrkGQin",
  "key23": "3y1BMqaPCwgJzBkn7uEr5Sx6dDUaYLo56tFZByAoh5Axv4bPAYtcAeh1euw2CdGRjpUrhxUxyqVxDUbMjV8kRSfZ",
  "key24": "3NS97gGuuMEVkL9VwKvinSvU8C8m8jL4GTujJ9BJWnLDoze2VhaneZowFSB1LqscbXrmn26es5rTJzJcgXE8G7n9",
  "key25": "55UdWDZmPraDhvFTDDTSh4pMj1x6rWxfW76eTJuNKZ5andDFvrkVkNFuNXDCjf1prrcJmZB8ayNQMZYNitaUQv1s",
  "key26": "2z8k5bQZXEhxYP7Jjmau8kS9myTaRBJkq1JT29aSrqGmPeYTkVn2D3DzFsE9ztGWn5pe8QDTs1BzPs83ZjYZYyLk",
  "key27": "poqN8KLPQ3p7jwDf72HYG94nrkdsLTfYj6tHsmkNziz1h8iyXniExy7CjKvg9KEs8xLrPuF2AhE9RLQJraVxR1y",
  "key28": "368wpnQfco8c8XBsZ9agvGdJt6dYPRh1Nty3psa7Z4ppRJBUubXSeu8Fm2Yyiy15dPozF2rF9UqRCq1GaUuR1Zx3",
  "key29": "58CdHsBSj9HQd617BZh2UXXCRfxFYizzgvhFLCwXfuUfeYVhUsqd3mqV4BxSoCwVt4znEuTT9msnPCF6XnNNN4xR",
  "key30": "49iPctAgJGE5dVRtXSDdz42PzLh5ea4g6QbCawfvJEYFs3S9xV6v3YLFrmt3HEuTFYFUmpVCBEVKacYU5JYybYEJ"
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
