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
    "2sxQK1keUfk9xRbtRHkVwnsC5mVYUCSjF94GbJc8EeMhMpZgEaMZJhtZkDhwcDZSSyfHnVRRBDUuG8XRBVDvHg4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iz7pa7jjgjxhKaeT8ANk4pbmXyEDuRzhuU24RRH4HifvfwuWHXwc9mCPJj5Qq6s7UwVXudkQyMiVmTpjCbwXjHE",
  "key1": "5JnXMTKLPFVXK4Nk6nZwGYZzR2sRPfsS14PLhY9Mc8ZLQcRvxKLvgdWXuVawRKpsS4L76ZUdy3a767teSKizkiYN",
  "key2": "5gqQ9M7ooyRqKYc4rNztbH5nNQtyEfJWjJ8Hj3cAkxuALTVA4Y73RtKdGiZ18vpkHfxQSwRDraxGDgsTrHUsi2hU",
  "key3": "5bZQhHT7pchAH2YVhZGYGsiKNoMs5UkGMD3apeX9iBEgqHTtv3xeykEjRVDjsqyxkVuvtfV4BmhhEAfoVVR6PCkF",
  "key4": "4a1en19oqkTJtm3JRpNmF7UkiNdhVGwV9VPa5UTze9gkkTM1cpzsuY6nr231UtD8Fzb9WceSBmbHaeXoLoFngUJL",
  "key5": "45rMrd7w7LEwMETowi1qYJSDyWnUaqy8k8s8nPReXK4kooGn812zATxebRxS2UFZAm1ouYHetjfqDhSZ62gB8k2W",
  "key6": "49kQbuhXBMxc7XNsdZcYA5FmLtmguJSh3JgL3SMghEyubvKQnuaQWRnELB43Vz9tftXwWgkk1dYkcLuiRSDCmPu1",
  "key7": "5Ls5gEMy5m8cU2dLkocbdpZiEXgXi5tRPbBK1G37f2YNdr3j2JXE7cvyWakRqWcnX9fYaFxCED4a2y1fWFCfUCY9",
  "key8": "2M7m2p7ruu95AVZSXQf1dbKzFnWG44z24nwexYnzQE9VdZ4VQ8CXdGEQzzgWFVgq5npgcwkqoFKuVEqMSuB5uayG",
  "key9": "5YjFpwPsULey14VprZmYkxduayVovWN2vPw4Wn7ERFdLFnK4a5mTmKm26ia8fztfKiz5XxUz829jEf8hK8zVbwes",
  "key10": "5qe1JdPWxSVGPGm6n4KBpQ1hN9eFxMHf6JuRLgW9uTKMv3acrm9cMvhKZk7TrqiVKRkHLqTV76ZbteQGJmCXPa9B",
  "key11": "3q6Zwk4URRNy84KhLMaAHoQpxj3pChEk1WSK1HWtcjW4ocJycwPnF27MsLxrhkVQSrEQgeoSnS1kxKopf7a8s3Dy",
  "key12": "3vqx2AiM6BczTGVVAns95f3KBSrdMzkwLxPii7RCM9UcSj3CpnP4gp5aoCMZpcTBNDjHDzKXjNMztayhK4fnHcnL",
  "key13": "RnHGXZwCw51owVHCfLYbtj5tRskMZjM5QVESKtZoUNtbZZStkCjkYecbmKfHpQCG5pDxM4ztcXrLMc624Ex7JPn",
  "key14": "2zyqHLddrRvTTR3S6SshktSkgkyXeYh2KGdAfQdFCjXWBDFRMzCRoHKdARFQRBnczaK8mg4y1vyPkhnkg9GvW7ix",
  "key15": "2TjYDYW9abnQvBi5jee9nZ4gSTDLSU4MUaAhv1k22vcFgWYHZRdVZURLL3tkWQbRXDUCXfACAGEYujmo2BEDVLg9",
  "key16": "48uUqdFqgPTB2Pgno5iJWxdfcavKTDuJBChktHcXWyqLNYYk4G4gUABnZ9yuJQwRF8WTkhL1ZywuEAF3yxzEex7w",
  "key17": "5ND2WQhKK4ox2hRb7a72BX3eZGfjs3RkBnCKkLzeUoRQ5sVZoo8G9YBkM4UfB8qKXPsU5Ay41itpzAM1cfzKExJD",
  "key18": "Cv5Cvv4pDR5U9tZrYwSksFhgmiEn8ahvEJarKi4WPBZHya9qxtAesrxyrJXV8LNBKS7KUZynRNhZXRmYHMbiC3a",
  "key19": "4u5W5wk6s2sg1V63roSE3WXywL8uVhsomFikr7BATpUwRW8jFKFxYcrGwuoeGtoB2dCnF2A1FqewrgRAZ1gSw3Uq",
  "key20": "5qu2RJZsS1cwbmxv96KvQ9hEk3ZStQpf5MWQw4q2PknBep5DFuH3yCod9xAttDEMyZTSAA3x8bFcmfJdHcHhpHYX",
  "key21": "2H3snbsqzhM88KvsZbesHzJXcxfEoGP3qkMJ7SYm4UxgyZJuncsCa5DgZ61eaZPY1DN6ugKhaamdCixGKVbx7kAr",
  "key22": "26qVBYTU5LBxP6qFLUPei2akec9CiJKoa7FeCRbqwtCtUXxCCr7ZGVjmQucJR2qG4cxG3sEQVkE9KxviYxX4mLXY",
  "key23": "VWZDPrvbakjdxazsVXJ3DjY8b4Le5QGNEvrHPaqpjQpuudSRPAP7V19uwrGj8smwi8nxBahNYfLQ5rqJETvLz38",
  "key24": "5F2XZaSnVDXoUjga3riSRbpjmtZm6ug4fki1tF1pchW6QgA3VYDTG9i5QRmPvqd4upkYuwTfzoeAqy7juFGtfnd",
  "key25": "4hRAUV4bnZhSfAPFZkA7PiSg2oauZht4VisaeNovPTQGVPHBekDqzbs2Vb9ozMRgJHFodsdSudG3nBG7m6BtkZBM",
  "key26": "2Qoimbptw2YsLv3dn3YdhFXLprDgd2K9n4u3dxum43bXQZHLUWA9iYatfqwcpMEkmTtXP57CCrdS2sgVoBXKutEY",
  "key27": "2gGcGGRJBVkq383S8V4bYTfUhQ6WrAw719A9h1xNNej3LhBbyv7LRKpoyXUn2txa4N4cPeLNktKRCeRzC9b66cv9",
  "key28": "5XAHj9TgF2Zryo1ptXWQygc1nzR9yomgs93R5CVsNzhPn1DdcPgVFwioRT5KKq1G3WCTEPAFTFiZTrVpozzYYh5k",
  "key29": "Qr68eq9YmN3adecvf32dcJ8SeWkFxE6FffrMLFUCwE2b5d2nrQ5qLJXWiCJ8JLc7AURhYdMEgJNMvDsPhXCWQiB",
  "key30": "BUWEfQj3on2JejLWgpK3QfzBWwoCDnaSULgvLv7gWY55oho1rsv2fZ7tEvcBWRvCJiYZLvrwHy6QjUdU8GkYCDJ",
  "key31": "a5TSHrVxVgfFPYAhQnHk7zdjKPTYk9S446sJ4tE8FcyTZgJyxw3Vzi5A5FGYTceEBZbzZf2HUNbYbxxVMvmMLdc",
  "key32": "43Ss79NhCj9Cuzjv8xhvGgKnp7KJW31qweVugrsvBr7eSJLQJbyxA2pyzYytYZwtNrFMMWb4753Gxj1bjwLXKjbq",
  "key33": "aer5RS6uNLi1Vg1uC1k5dNqTqgzWydarApJL61XVBTWTp7VdDa7kh2ZUXV2zBTo8Eaio2T8DZqCHQ93ztP7zFPi",
  "key34": "2mcFSpWRZhGmnovcRNJvARSBvnYQ5McqpvpStipRu7Hwi4qxbTXT1rwRtr6yX23LhPzjbieSbGx2c76qLfdQ3Wea",
  "key35": "394WV6D5NwtfRc6sEgWah3gZYfLy5DYVJ6wrXg9McPwnPqrHomGXKDEAtz6ij9Y7oQm9KK5z6a2okU5TErwXUdSp",
  "key36": "5Gw9D1BRnAX5hPVSuie9FzzQNzEbMARW7d4bCtx4EpL6LBDVgH8hfzz52kV12euTWyfkqEjkM33TJ4i22aVFHufi",
  "key37": "39SZrzPw7Kt9g4LsRbLuJsY6Vh3dr6PdYmjqLJ87ZvQLsLMAh3CZb8EEcNQ9RRPRsHf2LuwvKX63kcZAbrsHYBBc",
  "key38": "5GzTGeNaEkKJ7KfiojcXD1LERzT72AmXh6zXKsQtZrPhmWLC3Y5CJrGAUMBKujF4XJp3Q4kBcAEXUgfHeKEtxn98",
  "key39": "4YjXsbLdXnV5YB5McPEhVRc2iUMVoyH3EE2abbqk2PQZoPGwEaGJGfzaP63rhzgbu36AWzTGT8aZKP3qUVx83WN2",
  "key40": "5acCnFXrdi8XNyarkHPTFLb6ymF6h9bqq63SLCh4tAdyfsu1gRjjgsVvPuMocW6MdfdUFTDMGKa2UM84uxFyJkYg",
  "key41": "4L2dTVpvQT5D6KbuaVcViTFBnnwTE6KwzTWMCXwEFAN7Lnk5DE2YPRxExmjfvKVT3pRdvnzYwUXGa1e4rXj1su9W",
  "key42": "58cYYZwoxJGG5utG1PwjpyyV2iu7E9UtSVcsPfNMvQqotHCbZAknEJDi79btSvJQka5AfM7JPcp4TVELGfTRLmgW",
  "key43": "25DAPcwRQvH2dyiqPhJU9ALFJi6zif3hqu5dHA8yHxkN5hQUdoqrYw4CwyWsL5QRonB87hYPbPtwQaE9x3GCpfcf",
  "key44": "3dfX5xeikPjoRAxvNUDagymDggYbQeRW4HoEVMBsgW4T6Rq3DcjwKwsywzdPbG11atQFpgVXGZiSgUJ7ZmVGdVY2"
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
