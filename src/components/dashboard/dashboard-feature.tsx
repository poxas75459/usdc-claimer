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
    "537pj5gmofBbMg9S8z2UmEzkhyrenw3GfEzYxnLQ7kp9RfndHi4TqBVws6LGNtahxAXKqGbW8VVWvqVMJ3DQntvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QsKu1ehkmorFvsyKzxByX8tVVZ9VTE4MSa4GJxcA7R3zwKpuHGNCxPr53QfyNzudHbBCLKEseQTg3kMGs94gmsG",
  "key1": "3xLc1kLa9pLUYyt8Df7aRAFF6CJQBFHd9CJm4JDUDz1qvJoxJj9cj7ZpSPvJGcnvVreXNc5opLsB5f4g7jc1iRLC",
  "key2": "xcmpNwrJj4Hc5WCQtEgZkgFDpCxRc9EomFEe3svRgnFxior2PU9Aku1ePJZs8qBfyh767wjCUaDR6to8USXMmrV",
  "key3": "4LNtjHDLZMjZJLh9NhgjYAYfcQmnGWt5mXLcjG9zb8d1gGxaXU9A5bS82hHUHQUwmaythqxQ1HmGm9bxq9vbpqhe",
  "key4": "4uNtvmVz9LoSDUnqBCNXk5ENpAHjNoqeEvtvBnn5d53xvaPK1uL67grrvkVxcyk2NbAcryAXyKAgTyFsGRjHChB9",
  "key5": "4PhHQoXsBWK8JjbyQCzZRuGnYRv3xyaiXFX573muY6GTS8KtEnA6enqP9jAHsa6xbe7WDFCWEgCkkQGDbP48Mzev",
  "key6": "4xsuJA6aAcenUPtFzDF1K5kBxVAiauJgiB42Vr1fiDJRxg6diH7kdyaxvEpnAQzW6VuPHoQMpPFmVBXhPERXbU7f",
  "key7": "2sARM4xgVW7aocGUjrdXra6nYrTVcSgyZ9epgghPRKjCgDKbRMQRrci5Ca73KpsHqHSV448qH19kanMp174eH3zH",
  "key8": "2pzPySeKUbd8kE9c1WvUP8YDQs6NVp2PsGKwaoV2y81MfkYRxEtPBScfMRFXn794Sdt4ntVuwbSWFqy1LBWwbn3k",
  "key9": "51hrcR3M5zWbbAsrVm5iiSJHEqYYA2gqZtSyASELkJibYSMpzkzNvkdHyrz9FX8bwi6wda79qhd11rAWi8VVhx6W",
  "key10": "8X5Saf8GUstNcR2TWeARRWQ9ULoexuXkpXGehE5LNAMi3iSF16s7E17mnJCVHE8eR7ZciQn9AQeDeBzJJxmbNrH",
  "key11": "2V6nmZTdN56pTpjL8PP4daacZrpV8ezoXkx8DCJVm5PwyKS8vjLQBX1WCEziZqB8Xf9nnjesDaiFyn9eR1Vv3Cbo",
  "key12": "mDETGqWAmDDfCmH7TrjZN5LADG3RVdpJWjTrqvdKgify3E55oYKzA77LpmYvJq3JxJK5xyHcSo58rovjDKzg31r",
  "key13": "2m1H4Rx4hjxuLBLwmFEwpdMjJbD44qy2ExryZH5hWxvjzSV7JTwVb3VqbcbbEpvgd6YX85LZLV31jzqyTKce1APh",
  "key14": "4m8FpKQmn8JpDobpdbPUDXDaAGWjLb7fE4acgSLuRZVhbEmKtQMPHSu7EW13Rrc1aQv7yhYHjQq6kEQe85R5FYBB",
  "key15": "3SHXaHSq4ewZ1YAsSFncje5oFghuhsiKPF81vDQoGkksHKwmsJGQgWSAgKjVWQXTHAPTP5y3KstyxmtZdm6qEAED",
  "key16": "5h7U48RRDw7RiuNBtSmjQkceHxxMWhoNv49t1gajnuwQrieEdNGcd9aczVxz8Y7G2LLgcAa1GWN7ActPMhGcUhUu",
  "key17": "5g8bD7byKbQPa9KnsnEG6kQDLcCERkRDmxYFHmC98RbaCx1To2MhVQqnJFbVBpk5wjgzLLaryjnkrBdnwUdJhQVm",
  "key18": "3XyfEMzkBxNpHFwRQmeJrd13yPj27nvGRi7rfUmAWBWjPCnrvCXPYn5pNu2MRdugufS9fyEZGMJBhVLkxXdCBXSi",
  "key19": "41RKN7ckDL8MG1Lsx49TojBCPwsVhVTLDGNEyZ9n4czpBb1DVogHt1hVzpuHWMW3wsGJB2s7MRQCJUGqKtfumX34",
  "key20": "34f8Lr5aF4cj4rE1a6jrHvc3LJVubjNkB1Sw18vNqd2cFFCQ5spS3HV1yougGtRX25o3x3axTd18GBNSKy4z3Bwc",
  "key21": "4p5gXJhtpM1w8xeHc7kZvDmRoNh61oT2gEW9BRRPw9jnFvhxLEycWWE9aeXF3NHnPMs9a624KcLeSdUX76TiEFiP",
  "key22": "59CTwydf4QLJHqH4PExwCnM7pVe8cujG3PVQ6apjWfxJeZz14GhTZa6De2td83wu7ksnhC5NdwXvmeQ6DGgv8e4e",
  "key23": "sCA9v1tdh1FswBFJDn9kwNKHbPu291MUH8AwFFFvU88EzKJCtDe3TCpT5dxHdwDsFB1oyqSEJWuNc7pDYDrs6X7",
  "key24": "5Sd43WnQEnJYgZgNvqMAf6tAknDeuDTWohRiVxACkPEPPMqxaSMCDc32sAJ2NLAFpjWcQ51VjYY5AYoYwj1K1NeJ",
  "key25": "36ptakJro5MKZZByNB8a71VUtdEvS3W4fDuooPEBp62QRv8CAEdxvVsqV8nTzbQUtZW1uBSD5XpNrKubfRV5KP2i",
  "key26": "4nemtLraofnMpXm6yeuakXZmCi7Ly9GC41RsWhWqEb1LRra1DeACX8n3iN3LX1Jqk6Tb5aFUzwYbaHbX7Y9fgmvt",
  "key27": "gxTEP9nGUvihyFs8xcHEF4mhxRtwo61wP9Dv6VufzTxbowXAxdDCkuuZLay7Cf3CfhNCXMJGSDReHCBYLSf2fpT",
  "key28": "3QBcAD61xWHa9x3CdGxg7Wn6KrWkXNPVPex1dr2KoS6ZkrN6QDfWS7ZbrShyg2b7dzAH8SsqXS3UconSSe65D6f",
  "key29": "3jY2xPd2xs36hsrrwJnjxUZ9FjgwY6VvyLNHj87MSkux9ZmjRp39kqvgKCkDnJjcjuAsL94fXS2nbTkhmoxfVymz",
  "key30": "vkv7RzfbXt4WuwgBMxLVhzaqqTsTFnveFFCRsv3uSLoKTAECjUR8jWo4Hs1pN3AkFjynpsxs29gfSJEVwC5misY",
  "key31": "5b9uYLF8V6SA53q3jvbc6EK8oUFtGSUd7ycUV4Rf6pdVSLyRLTmaopPbS7unf7U8z9yV3qH4vSpykoCE4ucWu2wd",
  "key32": "3QxEYFGFb2h7aPmMvDWxPmyooBG6J5hnbRthdLzQvkTARmbVZgj7rySWAx8PFXuKu98MEdD5LmqF1zDpiYruuCec",
  "key33": "3wT7961a4UhqN3pAtNHdcKoP1GiC5uFbT5VM3nzZxh8Q7Enqoi5FViqdmz1XKw4f5hX9fPDHKPANMkyB4bZFRaac",
  "key34": "xf6FaBiPtuAhYsMfgNBftZFXiHM9ULSd3KtiPEc5uWNnWouaGTFFvuqAzQ7jtY3E3jitduEGn5gnc947ECTtskR"
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
