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
    "3qcTGpypffkHxJPzYPjoDGuM1t5YNP8wLpWsSehfYXvGgcs4qvVKMtEiEXB13w1G439Jf1XZUTRvb28gtWmMqxMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SyHpqB9mjib8oH1rFTSqAwcpwsBWugPDzWFqqPxPrEsTkDpDB5DNJs5MnMppw2gKVB3GgYSEAEvpTcQzVzEKy5v",
  "key1": "4EDEFHN1ApF491CoQCWpSkfHc2noQbcgYQedhwM1RfSu1qLHQuaWYy5eMdiHRqdBoopDGsfs8MfoMSFJ8HVAWiD6",
  "key2": "5Bv4o3nAJRY9C6pARA65m1qMW97g6SADUPKzBZoZEYtNZYmRrhSPaiuJ3jXJ7i9vs3SsiwuZAgKtRFNVWT4DAgiv",
  "key3": "fBMHq9vGf5zn5MG1q4ARi3awwVgYDnud2n8SwUoCFe1nJzncraK7mEMxXp2qX39ZZHSksYa1XH1N4C5K3b75RcA",
  "key4": "5WQW5CE7Eh2cFJFcVpgBQnrWpNDuUuEoJAGoVrc55uN1yiw4FBVr1bjacFxoFCNLqtB6a2mn6aAxcPyJ7QcJ82Do",
  "key5": "3Bhv7wtt4RTA2uNTfX4BbAeoPVyMTdiAVEUd6xmfQ68FhjRz2qzDB2AsjXBuRD5KbxNbPUoYY8Ekzed4fCyAMTa6",
  "key6": "3G6M1XscASY1kzQmz7ZJtZKKJBy6HaiVaw69dtNNNnRsQebUWtD5SrFjCaVaWpykoFSdXZ2mSkVrd7ax2YqkFbaK",
  "key7": "3D84kpvFPBAH6PD1AFWz6KLPWuWajsNh8PNk1FYzSyvjoKsABF6uMds7NDuUGSsMseK52GgyBELbrqJqnGLgASto",
  "key8": "4uyidbFiuxc6CkvrGmLcdSuafnSKVmHwLWBuYmJK9QBwCunfaFmyu13jZNKVQnY11WMeXVT1AAFxSRzrgDFSv8uD",
  "key9": "DLezGXVsjkcxJmxrYHB8aXGfJzVzAzCHYiJMRxCnQXaBEf3bA2Totc5vxpDtGU7gBin2ujt3XLaA8U8zbGzU92x",
  "key10": "hjWpwvWsGZDqR5ox9YDTovK3skzsHXFxck9orM8TKWuqLGxp1WjCbtTFGy1uXL1tVtMUe88UjFBBesCY1wxPiFV",
  "key11": "65UfyGtAMbkNA2YkguZ8eeLbSXGdUsDVV6V51CHjSKAzm5pdKmQ6PijXkQDVtBd8Rx665ie2CeZAZFnjx7kxMZXz",
  "key12": "67KBzgSBeSQCBBmYk5P9Se8LYqFwTZMjHmQEgLJTA9NhNvbRen9kAHY6F2YfQC7aSWfabVQkvE4BRCpPnmiiZGza",
  "key13": "ADQF16khzD7v6fcBWKEGFwH8BEW5kryEJq69picZwAo3UMx58dFyiFR4uEh5d9xqofvjK5WKX64EKSy4rYrnUEK",
  "key14": "8fX3JNo6BUdgRQ3noxQwVNfk1ULnXY8gtfKNmDqxVvyUJpQHeurvpWTu2z96NA5igcVEkV1BpReyRuo4uDuyFcv",
  "key15": "3HXiXeo5xVcGVQzcmkZiP6999iokqTLAx7WXeScgURLwd53ZuHhoFjBv2Yr1ecv3yCrJD5PUji2kgJ1xRH7iYTQJ",
  "key16": "5S2gea8NadxCiRNGnDTGzA6QU1QN8MLjXozUJxBQXkAL3YGiW4yreuQxv4VGdCK91kWwQyhZKqmcWzteNZ5r9nAQ",
  "key17": "2v4Afk8eSjUTcpgv1W2HQj8sizfRTbZZL3h3sdkHEr5XuP5YDdjzVhiqbtV4AcLLftmccyhSJ99ptLWQoGj1GuxD",
  "key18": "6bfAB1hgwSg2DB9hSvsbtJHJ86orA2nT5aYNJs7ZX8XVb4LtZRRC6VgxyBNamRWQqU6CSn6eTZMziNRGLVpGV5T",
  "key19": "3WrH1SU552HVfN4x2Ztw4vQpDT5wAFtWEnULHUzT7Ygu1ivQqja9vvEpgE7aQ5ReeN4Fycim8za33GQhYziugYVy",
  "key20": "3AxyCf1igsGnAJoyp43f7BHhL4AuytnB9ikNDDTHff964BdTAY5F1ns6twMpxPkFHaU6dMPXoF4iQNZuahwTb5h8",
  "key21": "64Ejv8NaRWsNiEU43UiEBhegYEGbGrwGvysZd7quxqqA5e431f1PQgvAj3q68wYEChBUtmBhsqkpoDHy13va56Vc",
  "key22": "3k92ECXbV2K4fSTB5gFTn3Y4yv7eBT4Gczz1CZQcqx9juUVrUH6YMixJcAktVtA8LyjvdSJrKVFvEcyiEHEFsK7W",
  "key23": "BeG2fT5s8NTBweVs99KJnYz7nLuy4oHN8vGa4RmiwtAFLsmMpGeDATb6dzUAgFBMC12MX3rUgxgYWNW2ZQTkGwu",
  "key24": "5wtAFEfSALCwujKwbFFJPyWkoLPrhVYMkv2uMBnzZEyXdKwYsL7UPiwmUcSAC6XKRraynrUcn3SkWtvm93tWQSnR",
  "key25": "4Xyf7UoLfAW4yqHvamd5rMCxpHXCJwkAbiyQrhukCSHxgnUwcNkyFXXQzCUho8DmefovNTNwu4MKzeuKvxxyXPho",
  "key26": "RTEjn3mc71zM57ZSDoEhTzLLo4szKHNQhQJjUWQq2yzKEzvjEjKsYvdFATjqQivygXmh4FEVXaGNq1EiLC8BMn3",
  "key27": "384UiDpWvrozkJY73gdKsLLjVqeCiZFykTqekwMDmEoVaUkWzbK8BafUiKYSfoX3o7T9Sc4ZtXTfLjzo9t5QkaHy",
  "key28": "4oc644UqZhPj47v9t574Z1pqwprq7k4PXbXRFrvmJDydDW8GPUE4fYg1RpW7Gd9UMagSXrpQ6RQaYpoHDt7LKAPJ",
  "key29": "5VDGeD5X4ujJKNW88z8SNXfCaQN9pvmP4ehvJkNpRuamzKCAGuVX7xnU91UAGmMEV6SjaA6nxRnNZNhwE8PtECtQ",
  "key30": "4rLMJ1Ly5jfE9bfREagxKkH1tZV7TkuRRY34ofYQ8ECpfjmKzmMmArBukmMKV6Y7w4q2EAb2C5rdRMTkdUxVE4kS",
  "key31": "2tNfeaNR3pEHE2Vrdffn4F2dnB3j3wTQUGTAk4Tz8s7L8dNmP8bJmBhTEuhyZk3CtLZmHWNiCenuyxQbHxe5hDoH",
  "key32": "2ogKuQobrpxoQ5iE5u3QLHcFWE1HoMTYxG1jTEvbiVNBHPKJgUNtsWbWmJGW3Yyfzw5vcrPZiVXcFgw8xvhD9HCf",
  "key33": "nmMYbr6LgmGptVJzkWhcLg1KdYDW6ekw5B6DEQTxUbHhYpRB5C6SNK5jJQCeQL1Yha4vxZBs2QVYC6LoTC9Eox2",
  "key34": "2ASUoPzxPg2AgUAVRBGaq7y99AywpT4ibLhwcJ7njwdEems99eL11DD14QjAaTXcowbY8UrZMhBcWNUXCxEqRsh3",
  "key35": "2G7ZTbSh5TudPTsbjvNptJQJikqyWSTtxdcHkeDHqPz7epx1rNkskgCZXToK5wM6eyMv3t4xtr18DHnimNf57dR6",
  "key36": "3iCkHibSRdeXjpCfppkM1zdPLZm4Gp7ozgg77kTzWmmz34iRi7Nq3LRzm2TwiRtzmGanix5LJCuigbVMpdMQdENs",
  "key37": "49Y3DiseHCfe31zhSNSuqK5aqcdWDQiRQoLfCdxq24bswWRHp8LwpfWkGDb1iMw6apQmMyoQMACq713Tg2EGFJW7",
  "key38": "3ttE3Y3Tc5neQdWQBW6nigSucZ2ApCTvm31j7xqvKmhb2DHedbMtF1TvzVJpUzKUZvq3vXZaXJnD7weBQnfMzYZv",
  "key39": "2phmGxZ8TcF25i9rFCND4WNqacenSYWtv5HLeqd1eM1JjjN5PMmkJrFoQFwdPZyCSgtGLXcUmdfKepYt8wXBeH6F",
  "key40": "2fSKHWLAjd7zfxDxVJhXgZLtmw3Vn2hwXffPEcmbLoZYjWZUwty3u9gvnGCmQm92F2k3ZBEHWAjWUHa5x1DGUE8a",
  "key41": "Q8XgPY5FHuQHDffpLiY4xE8H8kXJR55aZnXqC7BmYteBRT8w9x51xAJTLDXuAUxmANSNCC1qEyLRZtKSuPGkqWm",
  "key42": "3rH8o8ZjupeGcjv7Engm3bCmHP56Kbk2ZpbG412hVtTkmz6pFgXnwGqM9RA9E3dtzK4QnFdSrMZbWPdqR6a5pBQf",
  "key43": "2UszQV9bhYTXRL31J1wLQHgxnqZZxT26QdFGRgJLNrZ5CKeqRAjE2kx8yhreyCs6BSWh91uziWu3EBuqzzRXkWEe",
  "key44": "JaMX6KnsBebNvJYAE66tsFa8v8LmUbVBUWDqJBr6gcEhn9MFda2Y6VCNUDwtB3ePtjyzjrDV98VkYr9S7W2J58Z",
  "key45": "3ELKCq9ie6hiZUveLEou2JXMMZwiN3JLzCH5AjKdqpTAzHjAv5g6c2i7KnVw4jiTcsN43qwBpBbk4dCzF3fBUZE3",
  "key46": "2E6N7D4GVedmAegY91mpEdCZAJAMBBy8BmSgqZfAmhqGJC8jpt7oDubvvk42p6tu5pFvFQ1MD79R6Hs4ToZARXRa"
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
