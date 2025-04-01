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
    "27X4ZSdpw3mcfESEcPfZAijeGaKZ2gQGLySar1MwZ5Z8Mtkx1sdANEaebWv7W86kkuKpfnJBKqP2VTfY3EfkDLF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oawKpiw1CLNS7znfVtwhXfbYEE4yWLmcT29fLeMNgXb664pWu9vc8aTwD6Kps7Mtq4V4Hu5iw28brRtv5Z6efoG",
  "key1": "89cFTVrRoX2HVeVt8JeD2E6oe6McTydTy1ouiVVGaX47bXGmk84LQVnju4F18prE33UWDXde28ytjovmiUQ7ngB",
  "key2": "5eREBwx5k5ifVLHeKQJGCEkvPjwdSMLuaV1JbGeYNFPKkc3RoWjL5Fp5cM3HbhYqme8ZoGp8ykfPPrwjX9QQJGzj",
  "key3": "2SWE9L55YDyNMy9PCBQuegeJiyt9hdz2BCefPsCLAYFup62pSnnJi53851MfaHpNiHw5NdKpAzdhRsap9mCAQig6",
  "key4": "2SMhGwghSbWynSrg4ZKEovgKDNM45Sk6yZnQwnyqRKRZn9v2mLTj7QCE2YQh7EQYGHqZ76m2LCypTmYSyhDqfjUQ",
  "key5": "2S5LMj91Wan5fpXQJigP1jvTPdhQWD3fsGbs2xw448Ts7WNVuUzwKVffWZ6vsAHtNiBRqZmDa8YQGn7PKdmWU2Yz",
  "key6": "528Eoa3MrYibKT345HXmnybnVu3W15rGWAzkLSYK1S49Q36ZxZhRnLj93ChhPo3PuN7xjn6iGTj2Lpwd9V6pk4sr",
  "key7": "3YQ2P1RJ367GEwQFs84B2wCAcgpgRSwFPVJvoYrX9YHJjch1LXuFKnSMQRFQUNcBLdaegCbSLn9qoYRJtARw4zT5",
  "key8": "2FGo7m5HeuN5j3cWMqS6qgJ47CVD3x9aLRyYDnxaVahkmwD789s5qJ1mwvGUQ4yEfL8WC2vsMw4RgAReQBkwtubP",
  "key9": "3Np7C8gRwi86LVwyMYDU7dXVNjakq6BSGyEvMJCHfwF1okxU8hYooaT173PBsbLo2mGCSwdxdxu6XHu2tLFkp82H",
  "key10": "4C53PSMS5b8aobspz1VhvykiweVz8iFiQnj5Wj2ZkVmJZJ5LDEi9vAsDJZL5V2HNEZi3LFGEgVLoThXt7VKJcWZf",
  "key11": "EYCh1HRNtGoorbYxmwRUCKdYwTBoVDJ4pmRqRegHg716reepnSQuaaWAx7V4hrhviuX8ButhKbkZ9uxjfPG8GJg",
  "key12": "3eYpzUEJLU5Sq7ZSWzcGcWXGonrs8mGhgU9XBWAGr6LpconXcoELbczUS2TnVwfEMLZpKfjL5YyzPXmbmmPm13jq",
  "key13": "2GtkjSeLrLcG57o3kPzQara4wnufLzDPEyXqJ184QjUPdEmPBLjaascX5cUu44KKLSKhQjS7r74wRmpTag1QtmZM",
  "key14": "KeYQrZgXaFR1H5zRXP4stbX35NEjJ7G9fD8LRHhuSmTdLjSUAw92US9mYuGGVMvdiY6seC8hmshkfAoB99m8hBB",
  "key15": "2LpASuDTRovFUKbT2JR177fcmG5vkkmdYHkJjLXwi55vH3DReoSDGxFUthg3zuxCHZ64VU6ipVFge9ZpMdPD5bA5",
  "key16": "zHdq5TXHkTjR1ykg8CLcH36H6qdYnVXR71hL4RvJd8oyyB6S2kHWbLn7TGcnYi74ZKPbTjRLhiANZWiPsbru988",
  "key17": "2ewscmke6PxvbGwjhqvg1jBuJVbznpAEzVrrnqqYtVEQsqWyg4cV382m5uRqLr5MpoAtqmVKzqDe84B3rJSU8Tv6",
  "key18": "2x2V6YCstvfQjMkb9xd3q8nhmV5cMwAA7CEiwfFvEyV9yjrtkFXqAKAJo5Z453UACXypGFtnZPq2saedy6s7UdH",
  "key19": "4uVhrXRzDti44fYZiPdMbLCGewbU5tzR9ikao8BoFgNAvz53nS2e7yCnR61XJdAW4vXHKiQif8U4zpTAG1cn3eAP",
  "key20": "2Xac51QYjRjMnrKRD9WeWHuF6eCQCUzT8Me32xGQbv8WM4XGRbsWQwdQx43a7AyQYBEVJXsxyEp1mmkMLemGVsr7",
  "key21": "y7TRrczSuwNZo6wWbHYpawLQJTk1NsMTeKpFhjKZpwng99SxaRKqKC7pQbH8r5kV4bUCMRi2nvzDSBgKVnxuZZX",
  "key22": "5mpp4DKZjMaAEUvknbhAQNFCeKjASUd18xWAt2CXAQwNv1ZaeSqr7GzphcRjzmozT5CF8fpiEdmHahcUrZmS43XU",
  "key23": "4vLrKRgFGUTTxuTXQVucCNW5gQsZNv6gmTe9b3XzoiEvy1rwNnEMgPJFTBnz3E1teCKzJWfQKcazh99WqihPUDih",
  "key24": "U2wUKDjLQaDVQuciDF8miKQ1Ugg9EpXWAbqfd71pBbYwrTc8q85WwYukztjhjcPfBWxh3VY8vjqCbZXWfRVNmyH",
  "key25": "2gYX2PL5sdHzvtXhtQ2AzxrcnWPnBwYbSCadr4dQCa8z4kjfLrQVbWRm2YqaQKUguLk9GXhTU3WgEYu3cCYyK9rz",
  "key26": "3tfXEB3ooH6Ra1ECd2AbgHfwhJpXDshh8p5kYRkYygvJanz5dJa3MZ2pirQ2LhGbfKdZpAP3m27N7BTsdLihQqgM",
  "key27": "614MkYS9h63QeFUVyjtjepBBtFtm5uBCb1W7rscsBdNnTFWZbMkYZtBjSU7X2EoVd81hP68hzotyV6TKJv83VqBZ",
  "key28": "4x2pwH2WbheWP5yqoXEMvZWDwczYhrWc3ni6TRvxtwKKf8wttAu1CJ3VUBRG44tjobPL2XMkpFPf3PQ7uLTzoSYy",
  "key29": "24SEqNctXqA7TZuhxuvA67Bx8SMTvTvysoMxsTFd3gdd1RtYScr4y2NoGSwehwriGZ6w2qb5x5waST1otZfhx9Pv",
  "key30": "3SMMMkk7UE9GdK5fMVe5QnTKkvn2tohqSAJGfCwGUjMWPnpWn74xmtGTWaPtEidDJgYtK6bLvF3APkBZvy1U7uay",
  "key31": "3QLc4aWjqamdHaXSATUoPqcStZoZz3v5KEaaT5ZUwBtqQ4SWQBVqfT4ZACGwwsS9AZ3ScLdqk73i4yGycGjgkauT",
  "key32": "3pmLZkhGTA2sXnW7mfuGc4FKb2P5ZwG5PAjKGZsibLcDbDdjGsARuKSDnubuedX35JPMtL4RWSczAcXtJLQcj3bZ",
  "key33": "5rHDXqzGvGgo3ULwLJMz1mQK2BCwM6shYWMZuCS7CJK5D2Gw5ZY7ax6G1A5uA4G7WZrREgv6w5b345iMQD7AKkfE",
  "key34": "5dyGFpvrxkkFEcerRr7CTQqnRka5T9MWfVCzmsB3eURjbGahokr3gRjzkW4qFBygBhoQGjAfGQWmtUFwdtBi3TZH",
  "key35": "4gLsgxTrrwNuGv3NT2tkiBJBEXyJtk7E7pgt6EdqmCgneWsfWBvjcd5yJvFjnbcRxkpPnPrMCXubkLgtaNyzyeXv",
  "key36": "purxtwCCrjWkrBe3EGkKhyFvxETsq5y8yGhTb1Yrr7hrFUYr2t7snVa6nZXdN2nCEJ5hy4Yo3yiQnsBwv2qNKdU",
  "key37": "2ZnYbecTH2eAVmkbKHvCP6UcQ8DwHZhDwV8f9Z4293EtBqeTCo3Xf8XqvjaM1KFhoyFgNixXFFViR2TPvt8841pw",
  "key38": "2ZeKCqtdTBvpfFi55fxdi6iSHndH8kQrS9J19x7qtS4GJoqttVhfagPhkKPULnoGqieVYhkFX6vo7MsUcGpmRG7a",
  "key39": "4p19yqBRp898ayp3pA5VKM5AEFE7Sp8LrrdeF2of9CcuRizgkWwwhjFfdyx57bh19LqhxvUxVvPnDf4KNJbtugNN",
  "key40": "62Dy8ZnJmE4SP3DTr5TZ4LMTLLCuvH4QXk6E7jD72P2AG5N8RM9DS8EybzbVcvxtkAiqMqY4WvkqLtUcw5UdMWB5",
  "key41": "5ruMskG1nmesmLHe4zrtuB6chhxVPVzzpKxQMf51s19mTStMqQAzSVaLpapULLJRJFQ5iwjHpuGBNY3dxGHUKMB9",
  "key42": "VmRKwYxxHpsh8N1UEZeSH2RMXVYqd6Xpc5EDoWeDZqswKSwjQVWJYPDDC8MrHSKzMtax2cGNxQadbTXhS7r8gvM",
  "key43": "57F1DuteaxBbtH4eb2SG3FE3BUqP1XDEDmpLDH53iP3khiDxpdZTk98h85gN5GSYLhjQPZCTpfUJYwLyYFzTnPhu",
  "key44": "vHrG8fi96UsyZ7uSmMXKWpVgeTQfzTu7EGdRKjV11kumwn1ePjq8db4T2pSos9AzPrnUZY4HxT7vEgg6AtpKzLL"
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
