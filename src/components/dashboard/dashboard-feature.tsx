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
    "G6rBqguLJTtuqcLcfLZs68Ky8z7RFk7EMwE7N3DYEHeAimsRW3sW8wNMHqcLhmkJKCArrxH3f12SigVSP7qLWie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37CJq1vn7FR14WbWHdNmrg6E1exAPQAKLwzSkkNc3ZUEivrXbhZUjZe3iHy2KPA37WPqbHFsuYcjQ8HkeaiLEum5",
  "key1": "4sUdyQmTVJf4L681ZUjshUyPyqhxUrYjjsBGLsxRSmbnNzbgzHNETT433TN4UwMNuuMcTepguFcjKqkpPe1b6o2M",
  "key2": "5ZvYUCuxey9846fXhxBzoF6GxdaBxdpkJjpGJGBXY3mZFTnXFJia6xhdZu6gdp9BJNBAi3ooyZp9fjBcRfDi454c",
  "key3": "5gLFTdaiJ2M3sUp5NWxXJUBjSiRGPPMWneGShvkEuZmjbpJsBPKTEUZCCA82vSo5FthhSqdXjMeXztzHZBLJ83bH",
  "key4": "24XzZhujyvENam1KewtCscGPdA5DyCdNnmrUmfPFwYVyje8gV1KdZzWaXiwvtEHx2u3fTzNWF3VrAvd7BWXHy5p9",
  "key5": "4viZ7ARtki7u68JZDmyFeWs4oMurkBTiNANLsbsoipQvGBUksLqAu6tXo7GJC6WaErr6H87QQsZ5hz6uQSGDUkEf",
  "key6": "2ZwhrGwY79Qwfg2bD4txcqHGiw61VicmMV888ArzHbwH39SYL6twfTB6tYDhTuey8h1fhMUvw68USzL7zxmXZwpv",
  "key7": "3GrQVfGoNRnXWMBxJCt2QG7GSmUmiL9DbY2rs2k2v7HkEDXTBcyMsk2WvnhFzHJfdCcwqaTDTQinHfoXPiEhhg81",
  "key8": "4MdFoDEvHnysZe2ekPS1sxcCGLQxoV4QEfZTz35dtrU1cWsR2375w7vDLR6B8Y3pXjoQ8yujDtmwEEjsi8YAZNEj",
  "key9": "4RegMzW9FDF62tc9WJgstna9VHX7v2cWmLeMbnmwW2gmtRuRMgv4aWLjtF9A83ZcAN5aYNw75rtxDNGy6cbVWrR",
  "key10": "49iEkpMnXMn7hxMniTSDkVgwfkGarXjHDNmndtYQqHZbGPRQnCENnLn4btNkszhXiYcgPKoknNdcrQFzmhVtF7js",
  "key11": "5pfp49eCUuGVNh5yLsSYzjDyU2yR47UsgKrEucF3JvPpoxLekaauv81hoiEbXm9jSA7Ew2HenZ54HuEQyZznMfy",
  "key12": "3bxGUNDE9aTA1HDQTHBJQXNSSogRNumaKChCq33yEZTjnnphiAh7So7u4PqUWYbg2cduJtwR7jQmyex6ECajxSBb",
  "key13": "6ZgCqq3hjXD6aDZrZjbU9mXrTVDPUodxT7M4WEE3WZ9oEi5KszPZ6ArbyPJV7XCY1X9N2vgcP7QXFuAdbA1g5YA",
  "key14": "5HRveer4UXvKqW3QUy4ZWYL874oPSkVm7FvXFKhGZa1RFZAAnh6HHqDNjG3PrPAftMG9ivxb5e2jFvZquCZ2DHag",
  "key15": "2a9Q2vuoc8QcFRS4sd5ygsPjYLGHFVFJrWGy64WyTxD76T1XtCY1vwBGxYYqZRwNaoDEJZJArLWuPyHBK4sWC216",
  "key16": "29sppiiYgy4tyoBq3fx21qqe5aPuLm7BN2np4H7JnMN9k2TnQyXMbwYL3Cq2bJaAZuKLdzVx6c6pKhwrsdcqDHbN",
  "key17": "53qfqPSYhFL3wTMyHbDprW7dWWRwemVDRqgJ4viuzygBwoBvZjMGNRCSLW9pd7sxTw2ZNw1ZucYyji1EeFx4rzyN",
  "key18": "kXLznh4SZbaPwLW5pCce5ACLneTFfBPTKz22zQgWYm8dXgPbemHZ9Uaxh5ANFtuNiJeCJyGg2WUkP6ZsPZZ1Tdc",
  "key19": "5iwcfxHvHZCQXB5e3ajmfwBDrNFMpTNDHrShSdvVQpTUiLVAWouCL7A81EYW9KxGKuSF9vLkkhAxbXxTMPFbELEk",
  "key20": "6NExj6kPPULZmFEd5xQsMGBV1H7dmoGxr8XsUeb7Zgx2emvSEZ2NETWTgDGPHUsW6enja7MZH6t41y2KecK7HXW",
  "key21": "XTTBFevw1krskiZ4X5bJgsQaFKCTsWRqcs8mDsS5Q9EjUCTGbBRZfG7VK1bpWZbDN4Eb1fvSrQRxejZfBD1SaQX",
  "key22": "nvq2tqxB9R8YPW9Dc3gEZQNxPABBEpV6RaDE2GwEfdnrFQr6JKb8P5Yi2U8Gp5STmxi21K6sREm5Ar2GfQURNxW",
  "key23": "3oGGRpdtPmQF7wBECLeRPKEdg7xLdyqyhLr1KFXt7rgvcriLNkcfVJaeDuTH6cjKTeyhB1uTCdSxUuMHK4HCPfSk",
  "key24": "4TMMTs476R1Yj41zbwatK7ymLQiCBFwbfUoUahnop6Kcww1FQtJB1BmoJmh7C5Hzc6JwFJRCRmFVA9N45me3zZya",
  "key25": "337JbhpniuxuKmwrGMMLs4vBHd5aTQf1KGa1oddu4k5SERhGaXKu7ZWctP66G3EWt3y53LxRzia23JyPiwUThNs7",
  "key26": "5t1iBmJkeYHYE4RXwAAQrtBzJ1bhQhY6sSG6kobiedmHFnoPejArY6nMKECneyT2L94izMgnykTwYdENesqFw4Wp",
  "key27": "esiuEPkhcG5MFwBctWzPbtZqN3midBMQV4yusoiPvgRTpENpP2br7SmTck2hDJHhNBMFoACLiczJo8y8WhHWCdm",
  "key28": "4tMMXn9REfoHeMJKuqF1jkXYXtx1HKsf2hR3FwnXF94tQVZCsuan6Yqd7Dd66uBqqbEqFCYw3GbN7kZrv3AT5Ztd",
  "key29": "513kaNZ5eEdq9sYsDRbXbgGVMB72vGzgciycViVVaTLWBBJcupUyEvCVzyKLBzuezqVx9jNXLyxxf9EdkzFsg8UA",
  "key30": "2pohqUtBDwZW54RP2hyP8SGCzmd3Ck5MYmS3RC65Ma57Ci54V1ceAVSJ8jyPRHP1zcedDttS4MKkEEseYkA4GR82",
  "key31": "533U9aNajgNUf3ZQ86kW5Ykh5tEkLhavMTdCTfMSw4L2sV4SArEAVXmPrsuGPsxHQVhKzkKqn9GsdmjAKWXBYWB1",
  "key32": "4zCQBbAui8EYhyQtBkXDQq3bLcNcXNB4TbUwbZeBrpeaQwHNAeUVB2qGVExts81XD8pZUJyjdgH3cjceQU6XAJDT",
  "key33": "4Y9XoWkuYVkaL2UeGYKk92WSWzPDqjVXXRUP9YpFdQJ2Y5BvLB8XnMBfiKpWSarmJSkxXm28GNWTbfVut3R54StN",
  "key34": "2PqZf5yEyojun4AfXd8oJzV5QNtVAMtzmQYLgXzxxUr24p3dqUjoNc1iCiHKSyabmEjxUF78PrHDxRayCCnwi9Lz",
  "key35": "3Jinv8hEP8i429mDQzhPNyUanwTkek7s8nucvkmCYaWTQPc8fNyBfGuWhXbXoTjZ8fTqLXBiswoaL84x9xhS5EmW",
  "key36": "JCgPscf3SZrYbwjFK8WW9imQPmRsryc4TrWC2JDms9B2LgZrJSgboPd5x76JimB1Vjck9nL1HrhnXLXPp3wG8Sx",
  "key37": "5wr1Tyf7udffVxkAoqUXft1mFc4WtDoJYEujxapv1h1mx9JZRGSkwxpqN9iZswm136nYfwuxn9xCvD1i7hTyeAHy",
  "key38": "4rREgE7tr3DDUYcdCyeYA7tWnQzvGhesefCcBKry3KHkSL4JjH4HeJVZLUwwHCDCdL9c1TYvBrDjARWyNToHMynm",
  "key39": "3zAEgq84epjPKPy6zuMfkayjqqi2DWLxZmJEzAVwXKw5V1d3rHMiUTYvGwY9tzEqbbiUMi8g7ZnDv1BqjbGUFjD2",
  "key40": "3MU7GfWvTh9yEQNUAp9CYLmaKSSWMz4aaRYWn3pUQmjqAwNL4ZKgjvUojcJ84LUq9KPtxFXdZk6qhy2QxMgwb1Re",
  "key41": "49KitCT5MCM8sqv6UfwqpfDoY8oUSH15MnEUPnK3cb5tJjtiNmFkXeiUzrZpreGSajxZbSHczkaPt87Sooqads2P",
  "key42": "235n1PE5kQPpUUct7gyoRhvszir6WUdkwva6qstsRUJ3U1B8pzHVtLXBMDtEpC51noveGnoRCc16ixrTypf1SdSL",
  "key43": "3ZW46UX8a5mDuo5BdHjx28VMBvy6VqMDUFRC5hFUZYg1K83dmR1ecQWERCmghMUDdxey7CbDLGRgRLFp5mGKecaE"
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
