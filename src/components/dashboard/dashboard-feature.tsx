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
    "DoRwPsd5MRwvGSwVX4Mk7HQSy1jNVBDtjykCwopQ75PmPXbX2pVcwj24jPtmEMmskMqwXszxfT5Nrr15FWFs18U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22FGv3sXsdMmsWN4upAz6vNtR3jaBeuN2b5tzq1FK7cFXAN5wECYKxP32FmG9tKu4EC4V39RHfvrqiTcdQHGn3dY",
  "key1": "2yJUDHkpcRP3eDY9c32E3EUCyV3tuH6cCEt5E3RD9kWZv7o3mCJUwXuLRVuJN3uYbJTnvi2GFgczDXX7b7GC33qR",
  "key2": "4iBu5VZWx3EuJuTf4K72qC4KBCYY8pqc4H9akcTH4FpgwoTmPF64o4zZUQHuDHBM8NwJoDyLneMAz6jNqJ4HgJ3q",
  "key3": "4EzFphLfxAGDuW8rW4ohQszj6pv53TY6YZU3AjaScBxxoTrT8zovD2GvAW6FAdtHnfDDvEtmDtwbLiEXyFjMkTh",
  "key4": "pY2fJEtuuxWnMieG5ut9hhLLxEJbRuMQp5CpE72bDTPWDfM9rxgf9kBQgy8BM4JHPXqDZUdbDBzCqwAUF2FJu3E",
  "key5": "6T3mt2poUM3A6kJ3xtMGJb4C4Z1EbmWA2xrwZmwKhk7os8MqeujTTVDw3Zyr1BQVYza7V3tVqa98Ct3UdFqidUA",
  "key6": "yvXLxR8f4AGbgCcRteLWzZGeJoKFNZF6wqU8UW33B8rtjB4EYHDmmBkCmCcx6x61ewgxznAhVRats6U8V2WCUuH",
  "key7": "26Hz4ZHMwLyBTmAPr1LoKg6ZUEyCP8rKucFYadGx8Er39VtMojznBomppB7kYijp2D3bxnCqcUfx62WPf6g49GHA",
  "key8": "418JEcNvmoroh8CNfmtcBwA6MCcx3SPSBoyt1NZRN52Uw4T7cwrHw7oJBGVYGN4PKuXnv79chBVyjTi4Nph4ojWp",
  "key9": "2kVrMkUeeL343qyV5im8KexyLueLUfmgh3SNPVRzfBaaac2yxSipsWEFirzWswjrN8F358cxVUVdbzydPyvf1Hpm",
  "key10": "5tPM15CjZprceyK3Uxao514hAr8V1KiPWUM7d1U6WJ1Ahr14K29JHHE9T9p2wcQekojnthnHqmFwQuorDmaMExKC",
  "key11": "5uL1UetTCiDajaej5w4HXHZcj7C1yGuJXFQoTVckeRjUMV4nSgSGctJApzKaTbHinnVv9zPJ3bdLCYLsBGTkPNb2",
  "key12": "2kxqvAjpyTYnaCrWWV9hEkiVwrts4homMDXNMxLjDbBSK8RmWXUgJsgCyvJLYyhREk4DaKoLVdmPXje74wtPu5K1",
  "key13": "MtqygSGVMvyRmWwLsWY4aWgqVBVkvo1wihHevmR5Lf4n65jxSR2AupWT8P98Zk7RSf4MhpYVjHEshety1PT3wJS",
  "key14": "4ZQG7pVRLmfPfnpHnk45ARtCEtqPW2pAUuuZUxiN4ctU542B1WNK3xkTJDLujF3xxmKxb1q2HkvxT3uRrtTqWVnn",
  "key15": "RxBMU7x1jp5Emst9kMmZ6w5VtUwbSUMMZPZWco5DewdErQ3eyajCHQvR1RLaus2ZSVUJvRfwqsDRQv3w5UuJTBM",
  "key16": "jBWjXRpk8BAoTdjYTqDSUgdFDbaQF5bXhxJASRdvw5eHrgbfbp8DFmDAFBurm6Uzi4PrePyLaJS7d4QoyEBwZGA",
  "key17": "5777wP7x4yQabEyLtMa2URbbHsLpv6wLFUo7DaomeEL2HibMLenQFXR55d8mvPonyu39RqRWJfDrJEPEpW5wAX1H",
  "key18": "3gzDgzZ1eiwbpjd41vNLA5xPsowgCfcMf5wpoM4YCL8nG5r2c9yUzwWjXQHkEr4d7iGHU4hon9LpaEmZUJtSnj7F",
  "key19": "31pc2EqLWMorguaFMYvdDcCT27U7pbxshqFPnweySZXhh37L6a5pTPCkNYohf8DqGEKGfn6qbfATG5kp8wyZS7ji",
  "key20": "58UW4tsVr8Taui2KfkZAXB6BVNyrmht5d9GwpePEbsxnWmKqGfjeAM4LjtEp6NGK6Miw7E8wbEUtDb5F93BGEJMT",
  "key21": "HGjT6bf4BHWDCJrRj8LZDwJqLEVWCtiDFFwkBQCzweA45isw2oUMaijyDxcFaC5y8V7ZVsMAFLcfUD3rK8AGpjg",
  "key22": "5XtMgs1UCb2MqwJuGcjMhb41XmeFoZS9sVq1DzZoNzT2cQ13mumJAiJ4pMwxamnwLwDxiMJxbFmKke9zppZuj4t",
  "key23": "3mCoZ5niAyrJxJuuRqqW1MXtUsCfLdVRZKi2i5aZSLJrQvJ5VVrrEJzvPYGkN1AWoPgw174P6S7VvWHVAyov57tP",
  "key24": "2XFnN3R3cHtggYxLyZ8cNbBvn6uUPydjNpaDeNAWborxc1uHBiwTfFe672t8BgR8LwgGedAbAsLMTJNZD2SwnViF",
  "key25": "4DMqmGCmSN2T91RN2n4ZDzRQKGhGNLBjkbTpM7L7vtZLjU6ZzCpqjH7PxqrjhmgcHT1mJGEQBsMk4ymP8rXMVd2V",
  "key26": "5NwH32W5eiJbDDArZJTHVgZhF21SUhWbGxpbPNwFYBZQ8igx2AjkuC2SxYB86ATfP3oVvaCwGXe9FABM7jNGEFoD",
  "key27": "YGwW7PQuBXPSqZqzABLE4hbUTY6S3BeCi6fS62pdGuWiQavAXyasrkE24Ngdz9bPNVX6V987FPh3eEXX4nShAJW",
  "key28": "krzVJvsuDMFKZhac6HTWEJJF49Q7YWyzZZd1jHkA8zuXZ7KM29nqGk5aCupvmgLjpoGBzjiFt3QeBDmg2dUZSFL",
  "key29": "57VXQtA6nxi2Sq9VXApN1LypKJVz5ckJzngEgvyvX7eMmcy2Dm2Q74uSYPwvzNbvTR9eGMjUjry4jmScpZP614fL",
  "key30": "32uKz6rtzBT2PwEMwTZHYbzAS5ALffsoyDT2aNfPshtBis4mLVFe3F2UZKV5ZdGCcVoNNutcPXTxTa23DAdbE9BW",
  "key31": "4zqfTW4zBiebmR1hkWa7RDb4Etewrwb8ZJunmfQFKGxG7wembXyDv9vvL6tu4yME1HcFfKtyyV82Vz9Tx34WKAE4",
  "key32": "njHyY8L21Vd8VvRwfZK9CHJmqJH2Bb1xUPsPhoruNzcG5Xo6TZ25RZMnexrJ9jAfEvhGvjKCbYLyZVkKUDqdHCY"
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
