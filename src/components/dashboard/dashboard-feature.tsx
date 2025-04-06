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
    "5wkErKwmQovLTXkQLMV3WhYnmof8do16VDuTZUnXcBTnUXY2cdgogKxy98ptJ5YitwxBDDn4JEUc1pDxssc6VcoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3akVSHnXg9EX2ZE7VQuwetTEwDy5JYrssEzLFp3GsFVDh91fbn35QBDNt5GshW7Q1GJ4mxwx7LL88q1VwGuTMgVS",
  "key1": "kDN2MKgDjp8kXQ7Lsxd8DGL34e6zWoVfXoVWoSpznBSAC5mcMWDtp3QNwmJFBX61r9JmJ3TJ5WzEYKHYpvcLbBf",
  "key2": "WtdFZiUQmDrfo3bJZSbCfAq9mNCM5xihvuDPFow7hUCLuHCxmtnwZAMcnEEaRTSEdDDRgyfwNs3sdXNGd3V31zj",
  "key3": "2fuDvypJwXxiqv2P28JAkcJmvfaz99rfARrQDYMVEH2YqhJWBykpRfPjEfWv3uoXKxzp91Lx2LGBqB6jePW2HodT",
  "key4": "5S1YuYsAYi7fDhmATvH7rjcFVUrHru8F4Tu4sp8Fr4gRD4XiArBiZ5D5Jnt7Pq5vcL9vC1N5jZT7GgjwmZphanuE",
  "key5": "2V9vKJwikqmAEC8HCMFTDGMY2MGG2pbU2cCbLKYK2KzRfNe4GRYMb2ZFTuBTjJYgf4Fkgs1FyPzoJUqAesWj2riK",
  "key6": "24cXRYFC3GAA6TXF3ypy6w9rZ2N3wrwbkpXceqsjX6QM5oHDUbhqtdQJxC588dYZRBWqY7FAvC4Wpe2vh1dMHqic",
  "key7": "63pVsmuehK2rhwPg8gMimAJfCm9QrtuXwRoq5dc4RUBz7psY7GeNF43YUyQu6LkoEWjvyF6ZwgKZJjsTFghQ455G",
  "key8": "3coR5G3w6f5fH3CAThxUadMXgd1wAHjrnVXA8sLbcgyhHSyrd5emWEvpS6CmyQoTFjE1ssoiRs3YZ4zEy7UJZmjc",
  "key9": "5xQRpWNDnSsCDD2qffsnhqT5Ksu79QYGuVjQeBmPoNU4UXVznTkFkQz3kgfjhGEJRAcZ8nKwqe7koh56vgK5EqDW",
  "key10": "2vDXHP1kbp4MeHoRxTSaQWL5gUyAMYtbmCtfNi3JY6SfpZsgvwtA6Ffx3Xp7URUkNJxJnsA3CZneh6X9vU3uatzL",
  "key11": "2rvi1Z8uvHnfAKsZZoaumP3gYmCnFUCEAKTCEftc4AuKfT1eTZ9GXePPzWRJ5QqeF9edxUpGsCe9Q1wpocudo3As",
  "key12": "3M4YLkUofo8j3R7EGjfMFy9b8PQUm9pz8dEys5fPWasDKZQQiC5QJHXh4DSw5Ews6NSvjXDjrAX3bA9odkovHiPz",
  "key13": "3TMm2ULPBTiArFjmogvwU34S6aMwvW7XmZMASQUf3r8bu2pHwhFRMNmYBdce1zK3pFMgKZ88brSZ5BPGYMLZtLVN",
  "key14": "DdX9JSCGyD3Gpey8c8XDp46THFPRhC7PKFZCYvcbu1aYFgWNEZQef99R7JE5vjkQdmE35YFqZoAPPiddBwPBb5A",
  "key15": "6teHHTo9x6BomcyrpSCEqrovH43CCe4BMSQTZrTa1Nkcgm81h6ABRmXk6M9Na4UgvGLHQszhrMRtWsu6KbpP122",
  "key16": "5hovP1o14GRVe3YK3YmasAE5q3VQveCMUwgDrcPS8Bok7WnzVnGCg1Qgwwf5yRPRbyCoC6DBpkbHa1x9rsFLh96A",
  "key17": "2sDx6nLXMwG3wD76z4bN5yztjVYeJ1PJe1oKNhqiErf2BxcUwvUxdF4SywA57c3fr9mjTtcbokJa8g45ro9t3Ttt",
  "key18": "4ksMDPRWDJQab7NoeV8wCkev1xP9D8Wk7HnZrKYPsNZKoYjTsv2iVMPnLSxxWWrYuYmTYFELZdy1E2b8aLQbRAef",
  "key19": "5TQNjkJAcYDPtLMhVxoQeHiB4E71Ge23NJ8u4CQD5QqSYFgPbbPwiejbBbJ6iW6pUkwNFLZokNRHWM9ABNPtEjvg",
  "key20": "5awdFvnyGwhm1D1QJr9azgtC9JKxaCeYKJ6emiTaT2M4wLRFGjCoXQsxrNTmMZJidaUnWiuCyy1aro3H8ouUmLy2",
  "key21": "5b8Evm7878eEJKUSUhJ7qDvuhKkNa6Z9tzKzfnZKsL9XbCi7Smbmowtc1uB1o9BvydVTk8jctjpkMNvimhniUpZT",
  "key22": "28qeKHDyNHEa8hQHrSz2VMDqHrEKfComhJSGJBoztamNjumwHL4iem8aaiWpnZ2ZXNPAfWweyRGP2gNU74Diromd",
  "key23": "4ri8XE75CfmCmAnWPNZq3Br5QXT5tmtuyHYZMLDNDfCbMVjiNGVcPb8ptnKuNNQCWHsHaTyBMGRvtLQSMpBgt9Zp",
  "key24": "4gSVZiQcibxBqCbKn6TE1WALbrWediGtFhTq2PpZUUtfgYMWSbEioXyqA8DHp74Krvf3KmAcNfz58a9rEPtczwgU",
  "key25": "ezddyWQatrA62BUp9ML5cHemQad1vieFTTkpTpMoi9eXW4kMQFXLL4qPQ6d6YDUFuLR8FMvzKMQsPqtjoxD3xcm",
  "key26": "25fLDGvb5tppH636zEuYAaGF9fSuqVQUbaVwVwa2VUnEYYecmSwYmAsG1kukrRUiN3vDDbgPkXWnjjaQQabpBFnY",
  "key27": "5pBMuqSrzspgRzahXDD8C9Hp4dqHTFcDEH2N2UuhuewjZuFfLmg6Hfei1dLp6fGifzRQtVSnMp3JVM3oBJCKd4B4",
  "key28": "428o2cEuBY93RAazsHUKzvRn47MbAMzewvUdiadPshNSs4SGonY19ytw3xE8y7LFYr8MYZ7d1ZAPnA8Qy6aP8ByB",
  "key29": "28L6mSZk2XSHgDcBinKP1R99uLQPZv19wKcodZyTq6xQkjUSXuigN1NVnsPVQYvtd4sdRjsWDCeuyqoLrY9FEjo7",
  "key30": "3FXDwNm6UX4L4hkZ3vr3ozVNkUsbLsPAqMdzmV8J5vqCV91R62HdSgjSg8cXVymS9ZkktgcE3usZMjqAkNDiNFmt",
  "key31": "33iGS81goFDh8Q45ZoPu8yhxaZgfdmrBiGU9ZcwgBoWsjEJRTqH3MxgU41NBfqt6vo18vP4GNMSnj8dEtMixUoBR",
  "key32": "5AXzyyiAM4XEcuu4sHN6JcE3avBqAPEVi9VJYWLygm7a4jr3PKPcLKKsJSefgpV8Fa36yPAJgxvXgHtDUKoLPxJG",
  "key33": "5kFWQqFTyJfUbvzheMNFZe96wqFgQyhmZ4mP9Z7sGQc2cANLrdDhvTgxe3PCQEsAVeMWhrY3GWfqLJAd57T3e4Nh",
  "key34": "5Sqk1b4gXVQ9yL3XhDM1kxs4V222zmBVY8fhwLwoq9z8eCWyqVZz1TtnNAsiT7nHHEpRetLXD3swf7g8hTHVusWr",
  "key35": "FUyrroz7HK9WeUR2MuZSFwPVwa9stAdrx3ucYtWgEkfMkZ2qBvUfCPUNKij5N4XzM6zZS7J5NPsUBPBk1KAbqie",
  "key36": "2HXU9zq7eUdQhevYBijEDyx2fpYUuPAUnjcJeYFYvrMk7fjP3ZnwFLvMZM4m57trmEeYviap2y56etXimp82FnDY"
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
