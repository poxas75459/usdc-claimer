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
    "3EowPLDQG3T9NhEwhVzrGTRMhn5ETzG9PhG5XC7WyaArNdqtfVUUK9ond3pEquDq6dRd5M7sAfghhBTMS9Ynxcnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxHRSdRfMVM7rkt4uVMyTfTGAFrEgkTrz11UBiVjQzcg8HHJUCScXWwPagyubLN81SWFp2xpP8ToRtFLaEACpqA",
  "key1": "k5Nvb3Fi8FCiF9LTKCVPEFL3ZeUugFXGbBGfMfa2ZCuQPC9dNTuXUcwKSKNjQYiuv47J2zFdx1LHrJ8qW4RLRT1",
  "key2": "3XdJc5ktv65PBA7DxLdZzDSpEGeRRLn2yb9sf6e4EuJbhnuUn4jNTfw4HEBmLKUruHKrDkS5NB6PKVKusf4cewc2",
  "key3": "3W6QaBPw8fTouXdcVezLqH1rgz2q7Aass54r5ghcnoE6hf6yADmDGes92sXQwqi8ZpVBJPwKrEymxZ2qZrG9yT1v",
  "key4": "2mMJheTWoz9N99QVrvNK7TU49eiaurDRYUf2sMKSCmwseSKfD6BXt6Whg5Ncq4UHr7qc255E7P8eDyDrgkVsmfgx",
  "key5": "2tnAandGjdiWz6PPSiQ2rNPCjUBx4tTfyH55xYzqmEoHoHEcmMpnnBEZBWEZVhnrWjgcY4ggoA7ztkNrWpnPUhcj",
  "key6": "4kojPpwFESYoGjf5ssRZHfxmFQ4D2Xs8xmovpxDoW8j7uxrLwtYo3Bms1D7X2df2ksgKAZtamX7NyrF6KVjKGzDU",
  "key7": "5e6zykEGjzWXKTTz2MEvbA8UMaMEuqC6YfSFVbiWfxTFE1RhSWnNmhNGUjv6W7qnpdbaTMc24XDJcxKsFMVsmHWd",
  "key8": "5Bv8VGkFTzM2W1fK79hSABbUjdLpz7bNFCJEaAKgT4dpPFNDWKkwQF5HKqHCkA2P55hVxd5GqGEAsnELNr89nN3u",
  "key9": "61tne8ZLh3riBn8SpzeuggDBL9UybpdCZQXwLBBEbztkQVsUFSRUJ157LFvgFZg8sRiKiK42kwecNQjrvnCLz7Ze",
  "key10": "2CmB2RRwDgh6qAPBq5aUXKy3yjo8McxfnmoyiFeQswPhu5AnAYNJDCCvFhHuPVSQmc1cXoK5Nk5MSwWm4Va8nQDF",
  "key11": "2fFA6cd7hdS5SoJNg9kshnZp7aGnukBeyptbaDSGgSSZevkY232zXCLt85AjyjwNqBAuUrKDihw5f9eSKgaHVj5p",
  "key12": "4Sunvmb1iHdNa3TZrNU88hGfNxtCR6adKUXWqNA6m1xYMBWZwhiEp7bMJzn2sFRdZ9BAPa19gVdwdK3xtwjUVkKH",
  "key13": "3sGsXwQJbHdARTUuEg3AjmK2W8FjwJ4Jaim85sRcxpVCzzG3gshyyE4AXjLhzyUirvhqmM1vPiYBkhLGuz21cqsz",
  "key14": "3whQRsDXbtnkZgqa9Bkyj8Qqeh9osE7t3hxzp1mcm24xDHMN9LY5DzaF7cRjq4uqvZdaTvA44Dnm9BXGKWbJ2UsW",
  "key15": "3oJrRJx8NCJuczVFzqq5YFNzC5BnnAgaLfBFTziE78hVd3iPEPovoiEACnHAfmLTbg5tvM4VduyKyvPGfUBpF9fv",
  "key16": "2raVUbFQbpa3BDbWbQFR4SnZ11AYj9aAbQ5pK595krUwvt6Rzao6qANbf7X5YyHxCjgfio9MPijAcLTWEz6QQpmo",
  "key17": "eGrH9qXiKqnkzGBjDuVrMweUxE9jeHCHwpR5S1xEXEHdpCVUbnhedyRxsA32mkPzrvJkSYzCQan2tjrkJjJoBm3",
  "key18": "3dQDycn1y7jDtYae4jJ9GYn2GJgZHBFFvpbzPnUsfGx2f4iXYJQS8RfQaLqRf87tNjUdj2NUmUCDwrTrL1HnaugX",
  "key19": "5DYAfhmw8VaiUEuChXBMsvngoHejk8KAUe3D9mHYo3JiHxyACXDQiPCt5JhBjCmj5poRyh31b32Je18nN92oNjUa",
  "key20": "64QrmyFjQsjwyVGYLwH9v1QhoUFBKF7wLK2LkR4ZnYZHcdkTcfqDodbcURZaxXszsa7LS4S3sPtNHMWDQp1mFyWR",
  "key21": "3vdQCL398VSWyQNXUMVrErKz2D3peEArBsNFinLzAxZXHAvNoere7dwzHXBSo35GCnSVStz19WoiLNLCjjowuACk",
  "key22": "5tHJFfv7p8nnyHUx7nQGVHV5dExSi9hnAzcSWByDp2cDbJq427QH7z5uGHvjK6A5BHKgVAoX2KyP42W6noxzygo6",
  "key23": "2QukVM53GGco9aCUMcmNZC6u9srTPCJtMWow3X49Ao4D4hDJbqooL4qWKfTv9w7Y7QhTTN2B9Ps42jZMC4UKhLHa",
  "key24": "3fapQQBDkPQcAYRrFP3hqN7A39HEX2bX9ZkDNLvrrbgeq4n6TuujjdyGrPHj8ETjhMf9V6YCgv1F9qTiXSB9SrPR",
  "key25": "397EuMZuq638rbbvKoa1oQLoCrqayZUiAnPM4omGuLGDx4VGPxL9Cg7cqqatyrEajNSMj9LwETSBkJ7z66zhwehM",
  "key26": "4TVXWVq9g2iUBCGhzswwgj5X44og6C4WgpPB1rFun6sLtB4F3kVGVbmCYc6xT77gKJov79eMs5ZJCnGmcZ3R2yEU",
  "key27": "jubxUtjg7AAy42uFB8Q5TPZigMqEhx5ptNSn2cRLzmcgiHrsGRqKtLPou5pNJfuW6MhjBoHLSNnoG3PHotdo8iY",
  "key28": "2tmw8LxdN7c69tjunWydzq9DxwrdaPyZwrjAaAgZPk52SoRSE9YeWvurnL9TXCYggct6FXhWmp14xtEhGRVyQ4zJ",
  "key29": "4CiXYXfm1bZD2mHprsA7TBGDSxDwmrxTtCAftHSiaaEwoJGcAMDN15dw7atr5HicjDkrHSDVU17DJmcetVEfefHw",
  "key30": "2KCm9RoZEvydm53UZ2LjXxyyHghW6cn429P9Sa2R5dNk6owvqgjwzua9d475KHFfbg8G9wuoLzPuxPiwQpdSiBSZ",
  "key31": "5t8mKxQU6WS7njiZi5dznJ11fQb9Znt8boKbhaMvMycE1kyKriaJm3scB49poGGpVuqTjmhdHhjMEFQ7tWBoMuTR",
  "key32": "2aeFKfQJqcmYDzNcK1p6WjuH3D4grw65chxv4Ef2eWSxkmw9iQYHjvsf9QcM7R1uHGSEtK39TQvk9rMUcE5se72m",
  "key33": "2C4vEqTBYgG3RzDFjnyBtDoJU4HCmqJtpvwm1MgH55ZJsnx8rLqQDQ8SSKG5bYoSN5ffYX1pwvJedxaseedpLA81",
  "key34": "Gi4Cuq9CoQtQ5PcKS9qxmiWADTiZnjhgp3minrNGoujXbE62oA2C5r2mCMjA2QiyEaU6QZPY5bJtMQXcLLpJR9a"
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
