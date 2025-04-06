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
    "2zXbbEkM5HoWavPYZNzxQXK4RVYzsHbc9yVeEzg5Kb6sFBsSxSMX3iky6MmXLiJSTeKEWcSsDjLoicGtFES6RsFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXWU9FwbWDHnpdH5HxBysNN4RZvGQd9FrUisUX3t2BTbUWYh7tkmXPpZ28weQk7v8aG7LKpJm9Rjb33921ZVqFA",
  "key1": "2Z5ZkZkrCbmHDvK5ApuNbu8gPNSLNLukx2j3mzvKnfgw1wgwkeJLUYqxwczxSuxcABENSEdswEt2bkVb7D7m5RnF",
  "key2": "C4HGS6KjiSJ1y3A2PeWUSsKSQ5jnXwbdZqdyG71CurwyUpa3DbyhhZtrah3GRS4Cin71VwE3gboFR1GxCComJQh",
  "key3": "59WgGvM742zT7hu1BMSbiXytLgfgjUPFzouotVxStUHvfBp3guZtpJZWovFH4s6Auo5i8gXunRY5FsAHnMZ1Va19",
  "key4": "5d88Pgrb9MpymWDojHzhf8yYZF4QYF7doCcR1U1ujsh7QkYQ3RWiEBR5Y1Xaer6sPoXa6YCwpwv6LAsiKE3kY6Cq",
  "key5": "LNSGcApLYHzvAd7QRY2PbBYqiVyp8yMBCXtPWK4op9YxmTZ1YqQpfURG1arM99NZjk8VdVTAmMbBnA61pPsjiVU",
  "key6": "5Uiqvivx358D5JqGQrnVExVRnJkYkPFNVLWxNi2aGJP2Uvr2FA1xbQswCEb1bPP8iNNwsP9zznPpSbdFVwKKV6jA",
  "key7": "5KGvVeR9GB7vAeCQcmrjEaiPWtnXoFuESDverTDfwKiomtAyi9Z3uER9KeC2ABBc66kUAhm4MUahbDnxJ6m2yNTY",
  "key8": "5KsVpHbGZpgxmwP4sEwFwoTpf9nDJShXmHvRzLsQ2W78FdwkD9vhDuM2BPzEi6CEfyMoJsFYqNJkbVmBB8ZtTWbr",
  "key9": "2L5XR6c54auTWx2EwVUpfVpxME6RLGFHp3YMDzAQ8Ejc2HJXjpDDJQMvFd5YUszVStMTkzofmaPeAd3B8N83WqSw",
  "key10": "3ijxcQDDA8rF5M5m4MfxwMC5XyvMvugM9fjGGU2BvUqE2u1ngL2ihuYN3DxaFUbpUX6bhqbvPosJggRJeNpgRuBj",
  "key11": "5Fc4qQjZXCefQBsniu9Z88narRb87bE3KaMh9Mfe3xRT1yqqB5kHbeBrunFVXQzbaLwrfeSPHbFRKHiey5cGweMT",
  "key12": "3VL4MHsN7fRVECcNZYr37Ksvpyh7benGNS3xDaJva85MXr6ENZ54U3HZRhkEAWkSpGUNpy3TW8LEZur4gpnaUTbV",
  "key13": "TrRPEiA6yir7MfKb32B8z6VeTZPxyQYzSsyGkCYPhKXoo6R9umGWJQ1tW6Z8dX1qAgFzvmN5DKbeYSsT1TApKhZ",
  "key14": "2CucW3aKHwNV7hobnPDSFGEnVuNACLkdS7CVb1Lp122jNySYXoCTuYzdkNecnHqvEEqs3BdXFFezErETtBCaeCoj",
  "key15": "4rajRrorid9C1sgCsGU9wAm2zYdic5RnytFgt1zXkkn3A8xYgV6wzN6QK1ABPKDVVSaGLNrkvdQBhMv6mYfqrc2z",
  "key16": "5xMya7h4qUFjzzkGDMwcVF8hVQupmZiTupcHpPWsSXrYM5V2xoU3A518YakMJeyGyqpV2DCPqW45ohYZ6x241x6S",
  "key17": "5cyXpChDi84wd4g6wEGrXf1ANRXK9KJ88CQxMD3K3h1d9bbpuTCFYkGScLsuYVH3VME4kaMMXjW2VKTFVQzMbQ6j",
  "key18": "3P5CRy7HvtNszYoDDPDqggrZNMy9vGSKCxDb4x3uUeKQLPNo6ko6opc8Zgf73NGpEhpfsFsa2qpDAWobeh77kFkn",
  "key19": "2kTc2do9pmJUrVuPqCCcmTxm9mhnFKAA6qmG3SkwQwEnUsbgVNQsAa9J64qBR3vFvHqRwfWYYxss9gtewxVkWEfM",
  "key20": "3LwjR9nuYT1VphEm3dAGZkdW812NKkMk9j3KcyWzhWQRsDGBeWKXhJVBLvFx8dNTYmu8H11s1UYYEQ2YpXT2Aq9A",
  "key21": "5MwD426mMG2jsniundhbXT2SZgvvMpBjsrLtFMGq7kJHiKBzSFnjdj5ixRuR5KetGPMLkXR4ktDta74NEsgMJpQn",
  "key22": "5cFfi6DS9XvdZ1uydoYiLsER16Az9fncQBt6ekXmxLxdcQt97MvKuGcsY63L54ri17eBTu25L3DZRbtfjfkf7gor",
  "key23": "2eCcAYU3aYk3wfgAh3d4oPYu6X2YwNcFug8AgvBzTi1nNmux7JMu3aK9rB1s6qo8WwSaH1Sz5WrwhG9D2D4anpRX",
  "key24": "DwpM6HSX3GinKLQMKUtNT53fSNfSNQuMoXpJStk3JvkoUYkNAYnGNfRLQtKcgL5qGw4cHxnJpdhD4my7R1fab8j",
  "key25": "21CnEMVNiAQxygS7i36BYpMVsdNYDMSTKBk7y8WGwYezZjdrwv8UH9Yi2R18zcYvuTsecH6vy72EbizgUfQhdNwz",
  "key26": "3Jfe9Ew5KdQzrt5Nd3ae9VaaKRDjD3B7x2JzQ2nbYmsJEiEq1uXBiL5f21mbCogsKS9H5r5mweLZmGMmBS8q4YPm",
  "key27": "2ZtytjqtLMtwP4zwiChHNp2zXNA1MuifCGTzBFddryz2p5CpZZVmQjHdw6mc33gnCAPFC4p5NWGL7FPfpUG88kUg"
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
