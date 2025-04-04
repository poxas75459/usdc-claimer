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
    "4u7X4fsKHVFDGGLKqyCkkixuxDjMa4chmXS1UA9JYL5uMWuisu6Ut53PopmM8xZuiENxW1Menv5b6A6zSrx3sZWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWn6SuCWDyLHQc3axNqzzaX7WCjk4J6t7f8Bz3mtPfwdkxn7kah1spqQQr7mdRRu9kuQZPb4MwW4wVDT1yMJ2N1",
  "key1": "2yHrymVkhYT6vvAo89qn9BaA8WzxqjiPgKWX9xDPG1p5F34PMwgxAwXQFCSoPeQWFn76QQHkng22sw3s974fuW5b",
  "key2": "5f28NvdxtfhHEtPZsXdTZQef8iUxX2knrN8WSiz2oFGxVUBM33dXFvfZSP3SAuEJ1J2smnvP1PocW8vkxBx3FqXe",
  "key3": "2NS2zm6bto7awsFpfxz8L4iP5kunkLSSh3nsD7mpj4CKcMwxTy93ECdBVSHWYgb5GVazLKaRw8JCSudCEWXzoX84",
  "key4": "5LBjr9EDmQ485CFqcZVfbaRaDLz9xbdhXmYtAYkFAerMxwWKyt7yT9pb14uZZiwt3Xk3Rkz4uMAQ27v4AKZw7Hh7",
  "key5": "4zZpSwvHByHHNFciUJaCL2XyMRKSaRWZBmpBiRFaguxRDhoaK3rEfm9q7tMLW1bhSuvFJdrequLWSoENrVkAgizp",
  "key6": "SA1Bzbkxd9RCTXhP6rrFg1kLEfxv4VrTNsyWEh1gh5rgvpxGNyAuPuXs7VqJrcAwH8nea58z7WawHzXxwEw9GLL",
  "key7": "2EdoH6pkAG3U5LeteqLYPzxWEVNh9X1w4X5mw73Ngpk6jputponAqZ5T6Cj9gHZpu6ovMctzro4m3ScW1xwX5mJw",
  "key8": "4YbVQaZPQTQY1U9mnveHXEy9GPWfsdZ19KbtcnUH2DERtdCdxm7YPw6QbH9eJcdn26xMtgDhLiWtWSTxob6uVHme",
  "key9": "pG2CFtQ8vHW4oxemG2ND9RW1BtjPUsHYRftNVGsJCt73ApHX6dYZnBpeBERBc11UitPPFjhrn6djJAN6dvanqFy",
  "key10": "4ngckoLZboGhyLb7rtnRVjRBs91MaHmGU291jA2RX2xFshFYhbC54MWVhV9SWq1ZfTESs6r9rQL5squLbxD7Upj4",
  "key11": "2gwnUwSskpgkF4PGcgCmZRtmYkEFgQVKXQBCE7FGD3jKPStfrBuD3xazHcvXo5eTjATKWqAasVHwkfoJ2LqeuHao",
  "key12": "3XYfpMkcuS3AUda28XuBLdfewnHZE9HLiHpRzhsvdSS99bQ3Y6quFJ4C4p4Zwmd6kE48XitGAEkodP9KTwdJWWZp",
  "key13": "Wn8gaakScGcD4H5eZcnU4o8W18yLp1U9U2cYyVvoVBco6sg2P7DEvVnJC2ugeooZq7AcsiciR8BQBorwkMpMyxy",
  "key14": "2UK6kJyLozc7DH28emyoigncjCGmUoGLdf17KzKPDNzdygHvYnyPCXQxZMmNVDcyzVu3jgCWhWrm9GHgwDakKVXZ",
  "key15": "3V98VqaJ9kGxsEaaSvzY4RAf3Ed1zKX4ioQs6vrU16CQx5YfWd2NvC1erRx7gKzK1QzZvyuwCrD9xoLvJ4Y52tMU",
  "key16": "466k1YSgzooRQ38usTz9Q81ha38d4sQBwf1LWEmYs2Sj9A9bCoL6qp7hpVT3zSbvkhN1vCJk3eLYv7yGrVHZPk64",
  "key17": "Ei8bZFGhHu6uhuCfk3wDwASDa1oUQU2tkwQKUdHfrAFCYDqkD4UdMNMG5e3hjnZXzjgWB6abQKSuARV9cSWB5AR",
  "key18": "642Sf2R43YneJnoJVXvVusbFbiDJMtx6hmvdqoNpFoTUUyaxkERnWoyKq4UG42FNeku95zFVL49qppCu593jJRn5",
  "key19": "2S8NRpWbdxeFEhoiYjHQibRnYXgor5Ukj2T9pSCkEGM3VYsHmz4i7ubAjaBkP3N7dun4ekJFk4ewK1fpCVAktFvW",
  "key20": "3axrhfRUkuTNYaS9TDniTcuTjn3NPgUPRV87NVmam7mvgBsqCrUGCcVJtbRyWpAMDZVfeS8oLE42Y7Z2dehzVvvc",
  "key21": "3dTz5m4qCkG5Se6orTR2EApVUAnmGPKzPVaffVJ3FwNr9b3y37WC56ay97SpvHhwYyMgypVhoE1F5N4DbuXxQ7VA",
  "key22": "5mkmq7vdSashiMF5o5Mbx6Z87pNEzp431ABEqztF1u1Cg5d4V1EXwC7P6chCKV6RS78af2eSXT9soe6SufdR1Dx5",
  "key23": "2oKnvUc86HL41FHhvYDjENTEs6DU8MMU8XX3xUWMU4Z7JP55Ew3eybc2h2zSDmJ4hCio4fbz5fPx31pUZACpKKNb",
  "key24": "2aa3TqPQC1mrHCPtd6SgDyWuz5xdZdqaK2z9p4dCbgp2qsjhEst2BAMqpHPMLm8x5WmpFKpATwTHrcm5Ngu7xUtV",
  "key25": "s7TYLixTf6N5qP5QmZSJSnVUM4cXvtgc4DC2rnzPxR5owH9M5Ud7VzN6BC26bE16v8LYTGFtSeyDBTvgsUznA5p",
  "key26": "x2odbSEpRLmJRTCKJczAe2T2eFyPWtgc3yMPRpadjRfuWbzE2PPReZFhZnVd1T71gwPRAtbhcFnz36nE2F9t5aJ",
  "key27": "3XXnEJEzP1uj4MMnXGXmwBaLmXu1yqbFdCCBbveVDKtXY9ZbcnWAChn2aV48cv7Y4pE1avN4mh53of6iqekxaFAi",
  "key28": "5dP5u1wNC92duyyS3wASQbEuoKdn5jcGY26jcbRyNjaWebMQZ19AkP9M1HYCcGdSdT2rdgsMkxVqE73ykLLs9uys",
  "key29": "uuphKbTLAVqThesnL2SDvL53WnW7gdcLUE4YphT7pBMha8fsY1rPaws1p87qnjWgzpue5obnZFSGWj216gSnVbm",
  "key30": "4tMzxUnKSZFcKh9RMTpZf1h7yZ2o28g6VFbRAqo1o2g6oHg8kzPQvBxyaDFm7VFMcB2LDSHUQf34QTs86Wj4EAd7",
  "key31": "3wDLEmtL8zSv23cgJvKxv47CZXCHHFnHRHZAdXjL3bmEN3zUG4nR6epkie9hyvZSpt4Pb6gQMBoHLFcjeXvfaDcs",
  "key32": "2JGMQAsJev7aXyRxfbPwibaPbiG32C1wFz5Bt14gfCJtXSkSJFWp6grfiZuZsMmJc1daQs1qVzPWasT8WsAbKE2E",
  "key33": "4T9B59DSjCBySZ87sMRLzrCxgV6vRdGjx1huyAtHS8TPtoMMr3Eqq5umjpRaDeHWogxgxCoA4bzSGwE7tnip5SuK",
  "key34": "5YP7b9moqwC6fF2vYAmLa7us4wCzyismxrUSCgczxYD7otRMeWjKBuYWVhDbwEbo3BpJqp4du3WGVeZ2csmHj6ou",
  "key35": "Pras52N63ZP5b4bhXiL58hznj5XVNaQjfEzKEuvAeAq5sHe9P8v5K3eQ3onviJR9VehLfk5BntndLiNc8L5QUnh",
  "key36": "8hZYnb6wzfZp8yhM5FjHM3YkyLncfP82cTSqNYYYtTSGtQZJQJV7iNkcSVD29MobfSt4hdaUWpLj42GQ8F6qWza",
  "key37": "2goKLiZJYhmQ8PAahEQoV1XfQ2tbNcVehPxoW8VjMvQoem4R6YbvYhunuyZ1eSzXecpE9pNeuMCb1q1L5M6sXWxG"
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
