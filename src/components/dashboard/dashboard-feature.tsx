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
    "2Ckpkde7wv9ZkKdahjetLgKqzq7MFoRQDNku7hZpbJgDQS5x9HRtjVHBTbTAcUrWXBmQLMUUcWtABsUkWmHF8aXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vUKSMwjL9FkKJBD88TJBAdPCmK1LKdtCUDrbnGEBDXpwwoAJzQ6dFoAo9JuxMLVR4M9Lh7tb52crwJukiAsPVeX",
  "key1": "3iSZ8P4bqpQTA7R5532zjExgmLqTF6DPdbgCUR1pMih1xPJfmpkWVwoVmqPHZx8q1XHghfPoVdJ2Px53JjgEDLPy",
  "key2": "32zEy9F4fyr31k2ekmZzmL8M4tcF7eSyXiLmogQ785nmC8L5Nz6J1wjRsrU62gAXiczXxf8X9GcD1YcyML7SN7yH",
  "key3": "HE45DWBzyqoeiL5Rq33AH1UoKj11GdYuQkyGqo2hQsAVoYvm6Q5mrkaCGoq3jkBkYqYekvRqYA5DXEEe8XBYtSF",
  "key4": "1fqK7dihA79ZijBcWVqEETBXU2NQaAhKQp4eTwvyvJi5x4TKSGr678bWC5TfsAovsqYKGd2bcgb2RsYDwYh9tgq",
  "key5": "4oUtdiyu5zjhBK6pcf4amNXkDyZnDpynHVnmsks9QMQk2HqSsgP7FVgtrLDfgkgJw2bpz2AH6XMMDSC1FCn582fj",
  "key6": "5fDbvcFH7uQNKPSn7n6k4yvfmDWUVTUzwGzYz2JbVL971ofMHKD3k5Ho6pbuJPuXyha34APxaNebuYTX5YCqeFnG",
  "key7": "3Fh2btDNarYS9EefWmGzDGdNh7LEAWtpDSQrN6RbCuDC6qSmdAgFvSkYSrtrFe9bQxuS33cL1i9jVG33DddtAUNa",
  "key8": "3DF615Q4gvJ8Qi48MQiM1G3opVgxJmPUejV8RN1iyyQCKhhzzvKJVwZUfMuRkwCukaiirYhQ5BN3D1qe2MN6J6my",
  "key9": "Ea9CNTwZvfGMsh3ZmZLuwbX3YZ6a9FvdK9JUDcy8q42W3vxsz1XPB6ECEHK62QTt5mvxVCHY3p6gun8fe2HejUn",
  "key10": "3o8McR13eRyzwHRVUfvsMDzfYVPEigkzabmuDmwpxZWqnrKRUWy5ZnjFg6mBSgHLk5FKZT11V4oc138pC4wo4gPG",
  "key11": "31KUvtPEW9rttWyNpuaPjLQdFqR4THbvk3nETu3DFvVcPqqMs9nXBBzYsxmii75Pg4E4TPaoNZo3MGn73JuUV9m2",
  "key12": "3nuHaum1ftKoK4fMVReUnRGPyhyzjVetYwT2vweRRsxvxn23sfjD1hZtUVCygTw92d4qpucCd4w3c1G6wPnYBymL",
  "key13": "3Md1qoE9y5zT9QR3XVd5wUN7FDCHzFp3LZqcDFfuQ2aQbZZhGikzozkHpGNGYA3eTbT8tr95H1nAJmwhZC7sm5BJ",
  "key14": "4byNUbXqkmJm9MmUoyZsmSPMt9S3G9czzhGcujsA1yUub3ratSxnztP9SYnY8QtgqMRhYsNCmBr5e3QXkhRey69Z",
  "key15": "5KSwqQE9SeEJKCfqLz6Cn36fGGpgrumjK8PwrkW2zY9Z1p5yyhzNa2RcJ8jot7oYVgK5QzjvHzEUPJxfXgHomwWq",
  "key16": "5RAB92tdbQWctfHyWk2thfrj2NwxBfDX8qso8SsN5LoACqL6P9xiBP16ikBPqY3FTaH9ta433LV3zMDnk92yFVuQ",
  "key17": "NtABq2Erhh7MPrh63Ynt3XxdBQirickXRXX47sigtBr9PeGzzb64aPA59GNeqVqnPuyMA7A5k7Myoi3n2DMJCTs",
  "key18": "3jCMTaSEuJrLQS2GiPM2xVtiDRGXwvmTVqM6aLUR6CgyZnC32HYbDUiHegdmXsfz6Q3p2ex6mUcHu23wZCCuBc7t",
  "key19": "4CFw6ytXVSWrYfbgSaofNvjdjqjeVoS2FpbdX18Enq7R82WK6CbzVMjFTNaJknRkZKbuu6M23rkyxr1BVD2xCuXh",
  "key20": "uWdJ3oP4YsCyYK7sT5ENYcQ76YDs8BrJ4eA68Gh1MTxaV68GRxUL4yr6sTsWQXEVoMnFfTgaGwGhVzg8eN8Xd9T",
  "key21": "56ajJRWeehGqBnUvLFADMU3zCWm27yQDRWqWeZski1HFU8uNDZtENgR35rnW6pGTsrLV9QHZr3YQgpDf1ALDfZpa",
  "key22": "7VgBnqHMy5QkMmseLc5kLE4NqDRzujAMB9toTTNL5YCTsrTnne84ZWdkTdabqTxwDHXzW5hd1xfdWW8XR8JJeF7",
  "key23": "2j6EUdq2svA6Ms7Vg6euZxzVXN1QLYZmvU5SdGVRaCX4MBvZ2QpEBe78zujot39aCHMtYChyVJxHXrqNGPyGuiMJ",
  "key24": "2U9HiqYCGfCWRfWDQpLuNsfzvqJCHcgHkSQqQ3fgh7Rf5juvSw9DDowQ7XwEwcEjqUzNLrs1MAGqU2MfjUyGUorX",
  "key25": "2F2SeGWEZLTu6GoiRfzE1JzXadZ8gW15YJ88jQpGGyLC8ue1udkPoeeujBBuDH8y7u8m4LacPx7wEuC6eGPpK1xa",
  "key26": "5YyUASSK81nnoTPdZA18zeRRDrUyF1jZKFvWzJHiFP48LHWs4vJMka4KYfen7rPkVSjG4a58CDUwzvugfmdKBhpH",
  "key27": "PAQxNCzGWx27hNKjwFXYhhApsyPLyfEm4xxResWZNsW3UWEowWaUVMfpNQNvdvmESRCAo1g8g5ZnhhSyvVbt3im",
  "key28": "35zkG5ysz6ejJU7ePyTZpwTxDxAGVQ4wEJCiDVmV4NMFFxSHgQCjiJbStpun36uL9iSnGnRZwF1FA7W1ddEhMRRU",
  "key29": "ZRVrNMYm9jX6MScDvvBR7i3AcGj8egfuJdCXWWRZcTcwuN1nYDjCKpYbJNVGTYTqxMJyXk8tcb3yuh6VXwc2i2H",
  "key30": "5HfNxUrhpqkCNUq6hoWrtLFBqMrqgb3pm9NJdw7zzSmiSdphnkkxZd9QTrL3pnKRpyc5etGi7K5yiNrSQWydLkHs",
  "key31": "5rfJuN1BzhU8CVe7hY7uFEKfNPW654gPTrqy7fckAtr3k5RjYEyHTukSoFyeGtojhRovCQiVkpXa9zp4NZP8dh65",
  "key32": "y4DokapMc7HicGwXmJ7sFuV4jWCHmhfDfbT4EdLS5bz7d6m7nnzSJpEihSkSyBo2rU5DyrztT6RCaBHcjsaL33V",
  "key33": "5nPJzed88qf77pSdtZKzitbrLkU3w8V55Mr2ya2ZTjok8m6rc7xSFw3FYh7o7WbcaCdiSo5awQnVjTnqH5RoR3Ab",
  "key34": "25pZCabe15BwM7K3FWmcRBrvxBvcfGNtiayWTLhojpzZ8zgVAoU1kzxC3r6NcE5F1CZipquPNUCevGREREkh1vBE",
  "key35": "5xGGYkiXn8iehetrnXLy4LUVxpPCXsjEd5TCQoSjeBWKoYXTwPWwVZWAX4xYon9h7UHM7t5wFvfBuvb1542XZAuJ",
  "key36": "3CykoZkqJkhWxnRFGQeQLg5k1U5HTgpdnBQY1x8V2K7k9HsUVjLxQps4CmkvcGtNyK1z3HXNhPLXym3DAD6P85eL",
  "key37": "5ait8hRndVhqYThwQmSUQCuzYcb3Vqy77kibawGremUqZ9fcG2CxtQppnFEpc48Akbr5igYDbDUQWwUohsLAkWhh",
  "key38": "atuxb6cgywvbKxL9EgLLpL2WdcB9RvSaDaXxcorE85WL7kEXqptz3ba3t5nCdZWpCpFbYgBGRfNRMCtUM3cmBXD",
  "key39": "4GF6JztsWcsU6s79CfwgcbLbJWqL5KvwQFg9zYDncmtctnKgU1AAqxQDUx52d3zbGBfK4QRbSUKTGNDT5vForib1"
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
