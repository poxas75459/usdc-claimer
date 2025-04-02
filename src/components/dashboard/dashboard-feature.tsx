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
    "3B3Se7BnJTWgQCiD3gdtu6ueJt6RLif5SVjWe5yDJfysowoSCaXvuJJ3t4QnvZ3qo9uxY5CYyYzh8VAySAyrSj22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m89chvJXoxd7hGCe441ji4frL4QKMGNSapuyFjGnLgN9sUk2LAHtKgyX7bgrV4sFUvBY7A3w78w6uVvkEzLVchU",
  "key1": "T2h7ykQrB6zdpae5RxTBMHStftRbCDFb3kvm14En9kj8qV41519QeZSGrRZNb6GAWiCjfSpGAoU8SwJH3XGQ4zB",
  "key2": "4QNYjqP8VgRBm1UVj6asRwCqzW9LXRi25yJMdmJvrWdj61y8GQSvyEpnuMDhu7F2monnrRKrTxjrAysoJAPduSBG",
  "key3": "3qD5pBHyiJGP9Ek9AB1C5EGufy4hQFy7hbkiNeJvyPB1ZBVcsacAvYWfTzZ4ui7JX11k753P2VS49jKUnsEGcMy1",
  "key4": "67eMizTmJ8syMtcmjbLeqksbJ6NWJ2FUjB91rndr9FGFMg9dPtZbsmfSqFtxMBnFvTkqZinJVkMwkgcEyJPaAXPo",
  "key5": "XE5KgdR728TMJTPL3z1HZ7RqhaYHGSG5YY8cSZrUaZx5qDLXMfYitdNjFX9trrVnE8gHnz7uXrCKJsudDZXzt17",
  "key6": "2r5xKo7uLpiXLyNbhtvaBUHUcKkZF8DihkfRJpLvnwmMKWAxUY7hGLNwS547bn9i69HzvrVT5FQXPP5gRPUJdKS2",
  "key7": "4NxWQciWPybbgc4KLbgzgrcHQKspVjTisCj6E833kiFynw2x3NyrXwrPnbNFzPG4LpPF4oXcWgxN1xC3ArR9zGDc",
  "key8": "5YNkuYyhazp5xABHphxVNcCx2Vk3i15sf4QKxeb67oDk7pZnpas6wZhfLyNfHv3e8x7dDn9zA3Z7nBnaHNS6wPZZ",
  "key9": "5sZp7c2bj6P8TXjad1QpNn7FwA5FakjZz3HJAmsRC6HLx335Au9JH5MJ97yy5SWcddYxNbzb72Vm8wfGnfrPRS4x",
  "key10": "3Bw5xbNMfyVBCNhikJU7SX3dEwaPgABT3EyGfwyZZturZuBYkSiY9bokCjUPw9nYoo6y3Z2QxjLB3LJXyEqLDge8",
  "key11": "2hFnUj3Ag7T6qSmgw1tdmEyfppmZ3JwqHwth1qN1TPZE1jco88oRAdmnftUWM6F71PfnJHCRTcYN4NoHcyAyBty9",
  "key12": "4hYoZqJi5BPoAK8Lso4hRrzW566VaN8HXVuTbuQTUEYYTpUrAWQL5tEL3fTf35sUcYYucoJGMgawVdAEyiaymyJb",
  "key13": "4bppueDHAMsz3KbHsNfWz5Kg4m62vEhdgT8j372jk1UK1WYu63RymfFLoySvYV84gGGj5oWrurkZZ9muwdPuWLfJ",
  "key14": "3epMZ8aLh2VHWLycVBNLzDACmmb4rcEUeUG3p9ZYwgFmcMzC56LivoFUcNpwmmmNMNSnWi1BxMy4X5snYEMrCWDm",
  "key15": "3Bx3zvpH5SvjuELK86aRMSv9B3YTThDZHzz32Z6SydiTiDJnJaeVKFrewLVVtwNoDAnZqmJxxRgagVkNni3EH8hB",
  "key16": "3zR6LttNkYUvzjvdzaHu8A2eY571PGnQVNKnFGkEDVWmqVD8FmbNFSyGD6jdWMs6eRfhy834eYNVKACTfh6NfUQf",
  "key17": "3Pt2k3F5XZKxHnGK5X1XFaEkZkK1gfMTMTzCck23fuGjuQ8VpKVwo22qMrthmcP6AK6NQUgAeF6vXXqT3ZqAxbUQ",
  "key18": "Ss6LWLoKLJYh4ybzoPZxwf2VKtFxcY55tUxSerTMratqFXr44sGQTW9F1EufhESfHzLP1t8F39EC7DHmhHUKE9g",
  "key19": "3WQsdoUQrfYKxsiaiH8xjn2QKfJ1VZntLk2dqQPichqv4fFf4GPHSMTazK6kEBV7QsnFoY6QvdF8jRpdrQbC2VgL",
  "key20": "3YGgkGMvZwZW7BPQnnWh3HWdyctgHFdr5JACQpfKbaYXqscysTxTTMea8cWHJKQpKe2C6JFgsndGYSLzNagVGA5B",
  "key21": "5PJ8nMg617jA7k6EwYuhsghc2DpfzgeYC6VTm6QRf4EwEFEpyfZoNQwZEcRN7jfwANV65S1HtkRfMmzqxM5mJVPr",
  "key22": "hn9ByM6EzVphcSLNu8V1wJTCYjDioxfC3hgvjGLCsy7zpnxLTZ2DVSbiaFqNubHNFggUyAdVBT65bSc7XfkSUpQ",
  "key23": "2kb4WjPkewYDrHxxHrKovCxnu9hPBD5ddG83oWNDZBaYUs7qizfztvsiy6NAwdciVUGzLG38YNHEUJJqMdANsUtG",
  "key24": "5mRqmYSsAHz83tc1XfYrqnaYHawPVER2bvT28TrrCTnEQgCp1BMkSkoVVSJdf3V3UHb1UW3hyYehdyLqAo7ipE7t",
  "key25": "3qFv5G2afEy7qBnMbYrmg8k1sDUfCSEAEuDYmTdD9nZBLa5sk8haGj4dHvoKmkKs7GvXmrnWjWtSdcSVENgbY7xp",
  "key26": "LXRfjFFvzKXds3xdXc1wS2M7FZC9jYsVuDV36TEfSACRjfjyP68NiAiDFtpAgxqoeDLFWVat3rWA3rEhAG4Eyfm",
  "key27": "4DyHgJyZDCAsrwH64ZdLqrRKjJ1WWsw82urskJAuL6WjVdXstzQEHNp7hqFjPePhWTDpE4D4Hxu6qe18LVqn8muE",
  "key28": "6592csvk9FYR4FrAR1pwkdkB1AczminW7n4Hvzgs7EQKoyWBkUgmDeTJBH4R5ZComNPkM8ZzJr1LG3rFBd7FeCUQ",
  "key29": "5iKCRNz4wB1qJtFpgCSmmo4f6iAJPUfpkd16HmmGF7Ug8zbcye5oBQHEyKYM9J5D1az34sF5WybD26QAF1R62M2v",
  "key30": "4X5FsfkEUfcJP1VyzasVYmvNKtV55RYVujszcVMuYoXxBoWvSbzzkTEqE8QWoRHp98P5P2x5JsQQHVNm9jjUmSNy",
  "key31": "5j8JspipUVj7TVtE77s1FxNcPHzn4m43bSqwjib4jTG61KXu9zQMaQpMr3ccf1zhULTJ8ofNJiLuUyQSjaaiKmBQ"
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
