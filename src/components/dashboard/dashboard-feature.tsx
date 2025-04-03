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
    "3vSFSXWZXwUAnVPjEdq3P1sXqqyDeVG9MFe4R7vcnq79nJcKh3eMPtPsoCQiVnBcL37nc5GuDsqshg1972i9Cs7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QioFhybR2sBF9vaZ5ycW8CHNgWMhGu7Rq8U84wxUkimDNX6hw4WGRJZgDRkM5KHR29f79B3wYLcPuLUX7CRmZYA",
  "key1": "4Xob6cMMemBdDUoHh7WeL9TUjRVnVQVf8WqMJHeMZrYHM4gqrzzBwSXDof7gSfzdv1nUy1ijnjq8VAzKNpvTRjmv",
  "key2": "xVFbx7RBniqwib3uRLEnpTRdJ8Zd2B5m4myiVX8SmCV7wWUbUkpi7CqozwqvFpSzziz55DAzStLeWgSodrySLNG",
  "key3": "5KgKoQjtmnHwZn8KhqngJsH8kx8qqDAUniQWbWQ8jQ2ibUmBaVx239gCVXGqQQnVkQy5G4XTBnCW45VMnPqmx2fS",
  "key4": "21dAcgpk4WzhtGpK2k88v8NZm3M58jBVkCeHY7xemLJEn4rf27uQ9Z6FEBzNcDFsxKFTnkazZZfCY9yg7GLU2aCd",
  "key5": "354dU2z2jSXJCxpG1TJBuwL9yaHhEnhoEut8vXSiAKLQhtgY9DrHomW7NqEutYaYWoDYXUuMj2mGc8h7uAJ8RxxU",
  "key6": "gpca49iLPtPP5oNVeVcfwt7az3c8nUBJdXeHcAaoTz57CXhch98XD4g3nBNnxeF6bGcTnv5oxfvpMc4XNvDSEob",
  "key7": "MqA9CCjmVFgP54dj9KqqfSCYjDcbHeBdWAP2UhULdtUkhANJ4WsJ2a4TU9mxPiCScxzNA3sLu1uZ9sdBUXLD8Fs",
  "key8": "5GynnxveKdXeTmq6Bu9noNF3zAkmmKUx8k9HgUAE7irWiNkdyrGybdkSctxRjpMi5g1DTJAGpCXmadYaa512y5vk",
  "key9": "42nZwG2F5tndFpyarZg78hHkDJg3BNExz2bTsQjcJ2GhwCz8akbBnXdXvCzFkeLqVFbyAxGzbW454rQqaQxRpuQB",
  "key10": "4eRFvsS91hhxeEuMH4SCdQ44VZquqYKQ3JA8h4k6y14S4xYTB3g7QzzCe4FvCZ85hAunVm4TNdbugAQ2MyuKhZcW",
  "key11": "3pFybbkKMisNz2YFoPgbjLGwEH7cibp42LXiKPk4qmENE4xwaxAwjjHGKRyDNuRj2mYEb6dJ46S8f9VFuaxheM7w",
  "key12": "4FHXp6s7ZXXCDWTtt4BVee7R1AXiiX3gmQwSPfBS6cDuGzFdRsVt5F2iAMpLgM29p92dXAEn1BGbdFHbw2c92gRn",
  "key13": "itKVuTFjcq1egPBjviTXo13ZPqNXoyUHHDv31dRasmeJPUUbvmvcixRZFQb4YTRriCAqL3rsLXz6Mf2uNPZG1LJ",
  "key14": "4hS3dZLaVwTy6NYxm6F2BgfTkQZuEdDLxjp2iNsSP5Mnc6b62MA4xjSTY9vMkoSC7TyuDzSoL2gZAhNiT1YydCyk",
  "key15": "2s6VQAUT2xioruHNb9pobmvFMyWne4F277XqWmwyJpn5pC99Eoi1XJhz3Z81qdtJbAGF7WEZB6jPEgu6xd1G4Aaq",
  "key16": "21FL6FXtE6mGVdSvucWkFMEfLV3m8oCTkSc8kUJMPBRkPrU1X31Ldvrd55ZCytJexu243Ugmu4ZNtC8NFvwgiJx2",
  "key17": "2x7KDX1KTtHk3xhAKnerf47uMXBNmbBbYkh7sVma2hpxcq7biawra2DWYm6U6cGzSeYHEZvsiMa5YcmGAGAMsNdf",
  "key18": "4KFtSMiQLaRr2jjDyewRfzk4Dpach66YoSMDyeKRsFG46QTuCgPpvSjNWM26P4Mhttf89eRLjCYVKrvu9etkoj4S",
  "key19": "4VCsUDLdvA5t6SMKKoqH7iexTkvNgXmMzp8jmjZxsVzQmTobYyp5otXgRhLBihhwj1LhdCuBrZTdCX9btaCcGvjB",
  "key20": "216sy7M4Lf8cZjNHpsD9vJhTLebFdReZqsgPitmwhQxeaGBQxHDEaCmYXiYgjKh3xKWDoB9zS19wTtFefnpVRvqP",
  "key21": "4fLWrea85zSivjAkLgt4SKRECAMjazNTib2ChjQ7vo2GYanuQck6vfTwEpnLQvso7daVXKfGkq9C7uVQxXkmbUQW",
  "key22": "4rQKZxWNVGPSb44gV6jsA2DK6cLahCJfcPxH42ydhf8LsBN15NzxmM2txEYZNf46aXHnxYqyAzrwPUa9CNT8XUUp",
  "key23": "2iJqKMTvQczTfaVpnMGbxNUExqmMXYiD1hcdtQKuhoZGYFhC2tN26RUbBtN1oTiJGz7misYSBBDqnodxDx8D6RC6",
  "key24": "2UZeWxAJbMEhDdVc5P8m79Ny8MtrDwUzxdA2LTCkEE1uFZ1Qm5FBX7YVVF75H6c4zkTTPWNtiqYZojti72E5xhf4",
  "key25": "2pZE9HkSuoMLVxtGYcwjqk6HaCsmBGdvPEkgs6iJRzDvA4MijJcDT7bxaZWx7x44K5QqRrXvJJxg5ZCGRKb1D5Jf",
  "key26": "3tay6jmgZRNoQmsU3RDYMc3exNbzEFxERiRG8MM4eUPZr2EnK33iPhXxSGe2PT5mfQwi5obkeisNHJMxZPZMFgKL",
  "key27": "QBnMCrpezQytqygGgSyJGRBuhSAabXQQpDCjwCvrMKxtyknVweCVGjPcb3gpbuwYSLEMq1otZZWpmziSCQtNHJ9",
  "key28": "4GysF59Dx71udSdXHiZxvwjxkDa2WigxUoSQHDK7nUZb5eAhpkfm3FirnYhM7SHXPfHy2pNXpaXYtCQ84aZu2H56",
  "key29": "618KAdAywXsmeFyF5M7P9RkU9VoNj9VFdgt12Lvq3wFih13KzUAzG5SY7TESpe5DKQuE1rw9npg4QfVQk2sC89nR",
  "key30": "3FYGhsjmJy2HCwCoXunzLxVs4jer59GEyng8qwMKGTXNKPZVfiKX7N4apctSFgrPKDMtuUwZ3AK14igT5sfXqwWY",
  "key31": "jEv8vVyEHru9qM6aTGFCwffBvPBT91CjhvCBG8FSA4YQdd8exG25VEmJ3E95RQN5e4ioEWaBPtEx3dQqxn5yU2r",
  "key32": "gY26s8oeqrHqYGxTQzjrbAZmQxkW3tE7GbQPM7AfxerLhwFNCoPSamp76gEYtaKo6AWtDT2YLm9fpCADwgoSiz9",
  "key33": "eZMxSTYXVXP9nUQZTCqq6iXLsYCgXijoEHN4cNxHcSMx8oCSJDzTWWy1yJXdhJNYhbmGm7YL5w5PvuAoXDHXhbF",
  "key34": "2PQY91HcB8jRoY1xLEBwXy8AdBj4QMoZ3f7fg1oqaTsazS8PyBHLHDdtjFQn1FRo2BbnBarUZFBfMuk65iyMtkD3",
  "key35": "35GEzBmHeGu3wo1tpDebSHK8hH4GBkwymk8Sfmv8Fx13ba7YeqSaGk9B4vkZnfYhkKZKfsr3gAKMX64afXM55JH2",
  "key36": "QYUmCsghLPJokVQ8q21H3wFRbW2bp2LHS12Ny7hrysNiF9EV96nKyW97PUbUnWTStMASqkMnBB9ZVHifSBKwGir",
  "key37": "27bCoXZo9xfePTk3LLv9A5kni7AXVTPonEWgSvtwX3pBemmAU3A1BBRS7zXXBfn4VRwJ3xA6sFAQrn4xGqZDGarP",
  "key38": "enZRYeV6yXVVZ6BBZLxNA5omoPQaZJKDn4v8PNgCP7YuujCxYNqZPNHPpQS2Uk9Z4gyWRKLviGrQkQ7Sb9QFeM9",
  "key39": "5zexRR7NDRFEENmzdqKUrCWm8zhPmLgi7zmrW1uRx5zxZ5H9WoXXB9fMoNHneeBK7awas1gf1pFq6kGbTDYnhjPq",
  "key40": "5TAUk4yj2txsyBr1kokydWDGYrSmBvf57nKBRwyCXTKUn7vKVhP3op8z38ntoAcr5qE3YyjtHSysAgvKiLfUb7G1",
  "key41": "5p8j3AHwQWhFnCWbFNqGSt6GiKAL4jpNoJYsra5DHscvv15YmL8S2448FkD42jd2rGqhTze7awZZvDDPkYS7g1sP",
  "key42": "3stqmdsusz6aairKZiCktFSad8YmbbyeuSTTThsLTj7bQrbzG4zpukn8Xf3xwjiLNAMAurA9WaX82ZTojkX53XK9",
  "key43": "3T1fJupSDCHkfQwWBgMjj6vudXLiTg2QY8nNd2EiX7gmgYnfLmE7uxfRUTGr8Lx3DUfJbmX6ZLTcKxRmh1gmgbbp",
  "key44": "FcR777cYem7qo2xHYaodhJuonbxghYFjAnpoSMo8AFxSfJUkDXv9AXQgaiJ6xMAmZsu9M3dKVBG6BnD1SbeP1XJ",
  "key45": "5GhosxVy1giWavpRf4Z6jgRJJDcyMvGqf7RKxn599VALX2MG7QKkL33hgVJQQFnzUC8ZJGE2jyfPTymktWpoxdEd",
  "key46": "PfKBQ1vqcezim5ybBu511bzVT4jP3eFmmD6JsBTH1CtwQHxodc8ELqT9z3rmtGJbHbncX871iaC5gS7iR4x1ZuT",
  "key47": "58QWoo1dxHiFGFj8vnhypeeK3mNM34r6wHvTduuenT5nM7NGPKJFXq2Bg17feCftiHdnNPZqP6qb98vYKiNQ6rq4",
  "key48": "zb6cB696naNo2x54B1D3727Gd931HFjevZ3gt3LgzpcXmkfnkvSYTEC4FqTU25BFWgad846SG42hv1qMe8iwnbt",
  "key49": "2o5VoxkB6SoYiPn2QEEYtCQ3fxbFBRrcYSjE6ELWw6EM6GKQgbMy3dp6W8Bw5aPUby1BMCELqz5TRVw6ogTpHbwd"
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
