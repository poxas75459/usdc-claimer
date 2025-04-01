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
    "vxcN5uAVG5aZoTjJrQpgbChY7KqURk3WWs2dXwJ3XZgtwawrnABPN8RuAUPQDWjnWFPofAG7mSap4jUUVECnxJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbG4VxCPwuEafSsLCFzUhfek8zJu886S6EJuMMEMwCwf6SCTRB6F7i6V9e6ZDHuKPy1YnDNoxSPpfLX3naAktSi",
  "key1": "3PpNVARmEttLqStZkC1Lam2VoHmGwCJ68YFnhToS7CSEoMZSSD2z3JhjBkCVVLDnhxxbkZSmABBsHC7StyJsmhcU",
  "key2": "4jjxiNye9eUTMVBMoeqfspTXyR5Ww13VDgFU2Vi6xjbahPvgLyzSqLSdf2Z3gKHNCa46F6um3BbVcxadTNdjh48r",
  "key3": "vyUW76enbvYCW9aAq9kp8ErYg6DYgTRZmBqevpQvfYZBBQBR3VXhx5DfePFuEeRPV5Cj51zzVfCNWW2nVqBhAPd",
  "key4": "1d7eiw8L3mUzm1FEsQ7XvcamrmhgUkZy77aLx1DzNR2Er4MDXpsbBLNssr6GJXa5gMmLzrrBXhK6rkd7Tn54PCs",
  "key5": "5GhN7pjRLbS1t5F4MoaLgK9iCfeiGHMqLfGPQf19w3iWrbJZ8LUrCG1ggdVoaydLE85mPzG4sARHtgH3eR4zWYMu",
  "key6": "2fS8dPu4vY6v2ZzmeBB7afZBwzXjLDE6av1NUqWbWQfUkDDeV2HkRMTkYviA33kdjHkMo6NcUnDGj6sKh3TGXGwU",
  "key7": "3iDMnFsNrTcPD2jKxJzK9eurASZqMoDuWS9R91o4pdfH7KGdvkP1C4RBDnvhgk3xRWa1yTMRqZoYmjZVDnxh2xMB",
  "key8": "5zCnJ55MN3nxsuECehr1b97KcBKmHJsrQtcN9ASdWEN867dELxzSVfnj3YRszaqMo9AZW4gcFqBiXjVV3RaNNpMv",
  "key9": "34DjJs7oX3AL6CrBtwsmuAdMJq3G2VJF1YnnJipcBAYdVfkazg89TVt6Bchii6yyup8mvPLpo4uLaDSbAkJNK4xj",
  "key10": "57bu4vBGRDzsJ4ENRosrJ8dpdXSy19bzvdP3oRjduNzLbGdpNWEy6iePBF3p1y7cYyVSkQ4XybrYZcn5ABpjGMzU",
  "key11": "4ijnjSva7GprkiCCzvAfkoudVtLfnp9JzvpVXg6UQRteUJPaq79HEQP94baWeUDVm1vH7ehoKn9KLBie4JNJpj7y",
  "key12": "4eaRLkVNJyd8yAnF4Thj6M4jUeA32dz7DmEqNhu8H8WDPDHEfKoMZvULVrqQFrSZ4WLpo7C1DfDaWJF9Uop16D8G",
  "key13": "KWxTo2iqCCScvM851ignfUJB9YYu5JTbL4KGJZKh7FZYZA8dGbVRw9TYF8SA6ZTy3miybdr3mNsZJrPLmfp9FNV",
  "key14": "3wHBbB1qH5GPTjJcDoM59S2hA7cPDvcyrP5pSSsDVUqWeXg1QVS8mYDhYHeAMsqjW28Ttn7Uafvj2CFQfTSRLYb1",
  "key15": "2MrAkBFxxvWsmnKhKqTw6ncbkKk812y4RtYBXSMX5yU2USUn8rTcbQE89cU8F9WaeABRr111XzEFcZ4LbdXPGmpw",
  "key16": "4QfNbcqdgswjXie19txZHpPtut1zwjywVa7Ef8bHfAbrRYtr6FogJKgoEC8Xt1ANyTwsxfo5vnyq3RuDQofAjCaV",
  "key17": "3pu4HyLYQfxt9wR75m1FnUZQ7fNdkdZ2UQTVuAVdQryZbop77dTn1RrZLH5x8GCjb2aaCSFAQtidGDvowQmKL8DM",
  "key18": "382jd4DaEeRJpmRyHEZHM25Tx41o1uMsUi1psyrj73zvYvpmzsfrYVfJKRdW7mxHaT2eDvSPg3p987zv6sJvjHGo",
  "key19": "5JupEv91UKqRhYEop6yyQwsLDhvXjfGuJT5XxriVNBXsE3jTZynSYqpB5xFteXWZ8WGeZDAoh3NwABH1T5XiZeNu",
  "key20": "396EHLqJyJNU729czpN5KzgBzYfoDsf3J5FL1D19a7JzBbG43VNsf2xXmUPKW8xuhGBXssDKxgaJ5qGSZkDjsS92",
  "key21": "35snPQ86E5y9UNPBurPLuHWjk5pk2Pr4rkiBvYfhEadGRFDSEjPWLvSZtkHxoy5VoCcsrNRJXcKW9SFf8xkSXfdc",
  "key22": "3JwmM1CPdjGRbin6kPa5V8GKPV1dfWLBz52cEh5E852jFAnouCY5DY4acioVXVAXB9c6QHBzWHtB7yPPdswpBkvj",
  "key23": "9xnv3pQ2jidtny6xvFunr2n3mqVoNmPggsNNh9SYKpmxsmdQacha6B516msjqEHHPA2cJAHpsvzG2YhNhu6ki8L",
  "key24": "2mvs3LBcBQGeqCWav98guctqwpfnt7fW6u78jLyZifDfEUQm9be1itLpQJPa6F1magEmFh7Tten7bSCPDTLDfZ3i",
  "key25": "5rAHMshg23K2Dm3YbJd1QLsjwaox6Ntxvxi27a8ckCjdNB8bSVP4EKy4fn19GMWcAVLpoeRiaMQbKpHL7o3g7hhp",
  "key26": "xMPUj9T6TpwJ8z9Bi9957tvwQ2G8BPQCM9kuCF9GD3G1Q8H9EqJRzRbqkbMyEPbsvxWSzBvZEHFC877NatCZkys",
  "key27": "Mr34wHDX2A75ECsGA6DpH1DRfMmfg2UxT4xviqEGgCtDU8SokQDhkxGDCuCHyQnBNbzYy7Jq11DtUYzpBhooWq4",
  "key28": "3eTt6A64Vg5Kb4k5F9mE9veKWVouTrHX6XW8oVhfLLruMCncqHTt55bnsaefxHDFxvPgSGctCJ3WhhsS1ehvuk55",
  "key29": "4x69KyEiYTceCMMFrTU82oX9GHBP1ZE3r4thsBZaADpELrxnjukHvioPGhuYyo89w9Z5fwMm7dfQcwy7vUdzbiGc",
  "key30": "2DU5MMV8d5iehCFuhnURw2Yp16abzRa1yrkh4SGAWYKoMRfxdXsktF3wAA7HSAV7bSn46eP6AdQYQ36UZatMCWYM",
  "key31": "2HjFtaT3mYG3ou3NWTodBUePxUfoY8UWESHb19K9DKJeRZKa7pr2125VTWYZEXMFrFh1Dz8NmG29fmwcPm6V2jpj",
  "key32": "45cD4mERLfug6QegDF41gbfwErrTYS4r3LPoPgdLUUmuxbkxSi6DARh5w1z7es5dWWv92vZGi4UVosKssY3MYbo",
  "key33": "WYBKxNRLRZYryuFciDuHApTG9UViehbYBLQX7oyLtxi4rLrHDNqLQ8E6mhECENwN3HaESf9L8XZqyY8ccqwJTYu",
  "key34": "2gkaju9C234USJkoHcjCmTF4e274ZJ22qj9ooXq4hhYqJHBJGfi3Yu343AmKhVMEkf4jsNXEgVtrEvyBd31hndCo",
  "key35": "ZNG5HrKcchBtPWuTMYiiPyFD4ZGc7kV5JkQBHTqLiusS6A4Fq3Pk88fsoHbxs51zioiuozmsJkbLyEFtQDqgxFo",
  "key36": "5oek83v9PnUdqGvZvJ52PrtDojVZW3x1o4oj4fWqQ9B8bKadH4iVEzQVEguvJBLYDwT33jPL6hE11P3u3hzw836Q",
  "key37": "3GatUAwnGTGsMZHJAEGe46WWeKnSf1nZzpdkJZXBHeHqdJb8hWtZjEBZ6j5G7wp6Rfv63qffy6PC4Sojti5bRb6H",
  "key38": "3fi5f3x1JeFxiZi23KGvJvCDGMrVQ7Dcn2LEPuQmbiiHDNVPKx1TFXB6DPN4ZHwBThRv5MC5pyekfuvfME7EpDSh",
  "key39": "4s1b4Vv2hrhv1ogg4VdbfoxDvUhyDAKP58is3bo8jZcTwFjsxR6W9Lfsada6BV56GCdukWNAR7WNBseDkZLEsv7a",
  "key40": "4JGZHnJFVnjihsnL4zeQGF9fmdfgypDFwZncRMsrbBUU3rkcBfzsm1czeuGWrahHemeSA99G4v4ojCaWByUjHWnj",
  "key41": "2nEX651YPnwQAZETae1wY9feeJW22HGgTWzSS5jwfkBxZK1vxCxVimDCo6RkeBEwbw2JjtYoPaMuDSV4mHmvypc8",
  "key42": "2iKEJxcmxkMmPpD3c4Z6WTqCWWy2HiK2rhqq6LtG6pFNMNhWJhJEVmh2QZYrc7wJ4VQCHE9PHbo4nd1eEkwVazxa",
  "key43": "21UrdvLpvc9UN69EHe5jLx7p4mfjVDyWrjfFFRCvtT83X6PWqiCtSigp4M3g2k2h2eveNH58yEUd88U3duJj3QeX",
  "key44": "81ndEK1vChU4L2zRBEsRUmCDn3d1JVUGTAYWomYTyxTrWiBg1ZfNd8dK5rsfdnTzGeZPAWaS89MD7uZzTqFPKz2",
  "key45": "3yCvN4F1eht4KLztfEpA8onTRhUvMoEnsKLqLxwY1XACMUxbSpkem3EFySx8DpvsAC4YcTrN6ezCmw7DmoNmMtks"
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
