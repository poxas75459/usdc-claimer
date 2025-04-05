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
    "jbEfBHmGbLgT1NePs73GpKgkTMPE5AMDukhWFwvcXuiaEpHEXUooyuZ1MR4Co6TVsvv3e4GzMLajCwu5pGVxLVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBg6iXzC1oWughk1MkNv7RWY2bBXiF9KneETo8H4bF4tnUXyua8zLS1MA7aRyuKHcNPxLuqRx55vxPBWmHeksuw",
  "key1": "4QmU3d1fKG8s3PefUVDXZHveXoSCXPgRjpBy28d6snr3GW52tQbf7NV1BYvTJumJWscr3N44Vs1QjgoRP3UwyxVa",
  "key2": "tGqdRRybV4eg2JhwEJKCw3f3LBPJo9GtKGNftjrMGFyvKANQ5bB7EHoNZ2ALX4A4EtezVu7PBUWNQ99DJLQHgRg",
  "key3": "41rhYyUpFf5aTkpkcPvdDUd2FSbiDrCHQB4KQn4y5jSxco8j1JemDyXrXa9zoH7bfFtAStmHnw5mEkodTCVkVhGN",
  "key4": "3fkNMC7JWkLcDzZzzgdjcLnjmNwFyBRwXH9CerFsjo1BwYEzaNTGpL781RTHNvb2m1jwdnXAQuiLSQiwGuHfAo9f",
  "key5": "2b9TRjy2RXQr6jNYwiwTo1DXe4rDw1jS2Pw5m6eFLxVxED7P8rJ2CPk6UaBHh3rGTLtziUnt4DN8U6bnQd4T7zej",
  "key6": "5MBKJ9sifaVMeso2EU1YeQpBcAMVFpr85rqT4xS1t3jaU7Mvr1RAPiZdgsPWby24X8zAuyLYL2MFpHFWJtazpTK",
  "key7": "2cHASyxZMdLfmuDM13Fawv9EKi3VRycEkSSvJYFp8osRNciWtaRcjowMQUQWqN4i1USz8sKHQHHAFC9Pnz7QCdR9",
  "key8": "3fHmVD8q5TqmJ1hQqiZM6dyWb4ukoXRrrfvBaFsHqubL7eLjac2zVvvsoJ9N25HVagB5UQSCQb8BSsVYW53ZDVL2",
  "key9": "58pTdmEZ2JZpjrm3XGZ5w45coG5ZfaGSfvpgGE2x8oyYusL1ev2MPvSX5PkpnSDLeT7imRhdns5yheaoZWt8NwU9",
  "key10": "3etk14LumXj9d7ZixwqBGAN49CUYSgHQVjXpMUW6epn4X4CmJwfPAwkRKKJoQaJviAQckDTqk5wSndHHzcNGFDoy",
  "key11": "4DMwPV7azmKwWGzv1mViXiakpWuM4mMknSbMAGpw5mzgRec2DAdLH18uWn5HYVE6aauAcQhfVC3oWf6pK4XdzGv4",
  "key12": "2iQZdwMuqfaLc3Eujtof1QBZrqKuyVdECUVwYEcE21G1cBm5QJJKpZp8FHefPfaXMeUjbxmqdyjTpGjXnVZVVM1f",
  "key13": "49aKCpM3FQ4oQUCKYZk32tPag3EeQ9wTMuwrBsDhFT2tqXsgRYipyKvQHs7ggcwLXpuYUQNKQYm6vG7FgVkfFLd2",
  "key14": "4pRuY1NxMzNfuaudY5ZUBW65F1xWBUS8ogEk9xYYeDzeKmybXg45kaWPsyNwNFdujN8DjNdxYZs6FmKqJh8P8Jtp",
  "key15": "prjFzxJE9PdUyiJf18RYq2bX9HrY8FwtRrnUg5qgVUK3mQU54ESNp814K488vFdtrUgaJAm7uFvg2999mG9vN7F",
  "key16": "3zMuga3qxp1vY5XKQEhZoVHFRrchkhtT2f4emzCMGScbiByDueQtwqjC58hcceBxtE4PBnC9XFHvLkdZfr77m7ge",
  "key17": "7er9aykmm3zESS9mqUVBAQBSPcWFVS4KhqrxNdHfU3qdn8eNAyHnLWwcA14TedCjFiK5LVeFjpRWkDPnYRG6haa",
  "key18": "YZ6qoUWwh4enCX8VWyM4BkJT49BoHdGTiypiviGfxMrsbGyVj2BmZFEEWFFJDDiZP1rWraSTvnYnxvLtyH5LL5y",
  "key19": "mkMsf5n24MWR1gTNMvvQkWz268DPrtPkeq2dbcumYUDAruSSA3BAMuFK8Dsu57ckDCzgLsjBU2rVvLiH3rv5YfA",
  "key20": "3yvnZafZu39jAiJsCD12dvp7PP9pQVXhvPvtAU8BnXzRJVujKX6LghEZ4XrYDVV16VaDQ5jRbD7Qp8n6Y3t3nPEe",
  "key21": "HXHpCorwfVCBK1bRrFXt2rXn7kmN3NZ4DqU2pvUUtSFS1ddecmdLfBXDt6RuLTxnTo5VZczTAwHdK9rFxoxPQ4x",
  "key22": "3EDPqVeccqq5jta8APPMEJAjU99rcLL2Zv4qqxNxuDWz4JcsNFmFvYGPNRkDTntG7Et3Ps43mGZULKyASyA1KSkf",
  "key23": "NDMVHr7V32Fp1YRfVFnCbVLsij4MVSQJb8VDyn1HmeQzdPWBiy9vCEKJYCVTjdnsf8uCX8GFhYZRJEGjU5AN3MF",
  "key24": "3SM3RxCkjm8K8d8yLn65Eg5xo7WT2ny6wvnKTy6YpaJoSovCxZX1BS55m39nJR87HhbDF7iAJWrMWAPvYxHqECp9",
  "key25": "QS7oSkvhuaF8BfwsPLA54bJ31ZLFzHqsPFGC3fx3zrJ1B17hjKBMSD3C76s6ZzAfAcHLMDPMvdCb8jLvwQXYoZT",
  "key26": "5HqLYgqvMgnwdWGR2KawpxRwAEsr9oQabyJt95af4FHdYv986mXesuqKurxvZbH6YMYTkNk37coiA1B4GsK2pGeb",
  "key27": "3XJ5oxm6SZmk7xRarwSjB3ynzH9r8r4TjcoU117WLrgZoLDZrhArJa63sngCHSLR8c1Ws2FDX26rKTH3Na8roAqn",
  "key28": "4jsWJbqa7F823ZEFpJy7xSTnxc4P2ByAGKqMRxVCTgLNtJKmGqfcT9idHxABEzEBjz3YaqfBNT2eXFiHWykguQid",
  "key29": "2r7WXqnvk8aDyy5ruWakrNVWUxfAnD2uymUNSZTH7fbswbeEvfFJWUtGRB6zZQ5noCYWkeYmyuiLmpxVrs8AELCY",
  "key30": "2x3p1wzDg16AvmV2EUj3XZ7x8GXfgUSiYrrpUchqqgP5sh18UsfDmmy8m6oHuAniuzPGUd82WkMRWadwpBnFNNRP",
  "key31": "5xhBcMwtFDFKzgXn6k3ExrRoqJ5LTfFHUHZgP21mgmt6SofggtotY3Th2QWscrgyqf1s2VUeooG1wNvntVWpM9fZ",
  "key32": "Hgj8Dv4UbgaMV6DbUAs49NrswZXgQg1nqvvJBYgbpFVVpmsfdW9fueuffy7oWJodS7QNXHYtcfwRW9UcMELm1rz",
  "key33": "53c3vKf2cJeKq5TGvM96bhY7uWDmYug5EDNPqbqjjyUqGT3T7o6kzz81Tthsy9dKT3qkHFBGy8rmUCDtC3NwHaUE",
  "key34": "o4qGffmzmiRa5vFL3X4zrT2H78t2JRp19oqET8sKNxbBsvbBthaXjp4KhiSjYgFxXvcMbBKmJeYW9UkjxyETRuU"
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
