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
    "3XgR4bj72UNTutVjNJ25uib99Rhgcq3qznuJyMQSyP3fjWkShSJfPcjmU4y5LFKnfjpPr2nUFM6Qk9KY1wytBsbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmJGA9DUJojiKXxK9bhzz4u8ELtjV75rr1rTQ1ntXieaWoBSfteUumjm4FD3DF4K6eJohVDm9r1yPP5mdQtjbuS",
  "key1": "2gK1y6PzAsYet2meXmSepEbaTFYtknMDxbtmFeK31CTcchkEtMffC2F5nMhnxgFCa3dpkdCiLgn3uqaDarAQBkNS",
  "key2": "44uR8mUqyyYCpg2PPJMM7KCZzuw2984PNuaTLiyTLUWx8x1C95sshUHtKdVnPKPpBCZEjSBaxpeiQhQsjnQophqc",
  "key3": "5hTkwsFdG12CePZVVCFDoXYG9w9qB1WCApxRiTXGHPe1aNZq9M2Qas7XXf9UaHNGaRHS337KBEP7CsF6XaJ8ciL3",
  "key4": "2ZtjveZ4bt6dou81EQj1yVHyxBXiFPj3d23z8ucPc33eqgtk4JA6nVs59hDx1Kj8fewHoWu7and5w9RY1XVRUU2e",
  "key5": "4Vb9359GzZHV8FYyJPtQYAqxAJ2aXgGjQJWJRnsnqu7d5e9UfqLbsYChZUQCGu8ejRPihDztpA5BKMBvZAyZddK7",
  "key6": "mMumBrwtKDAS3VnGZjAmR6heAT2PscsYVgw7T7di65Bxv4HRDzidNc7N1F17gbF9qzpMcVSuCXbNLN5MazS2S8t",
  "key7": "2gf8oxKrYGW8xXRBHwKmXquuZogKL7pJny77EpsNDEJNbjrttiacE9tTWg2aFXXacX2DroDrKLfkYAoKTtNGDyex",
  "key8": "2869XKGKw5jEe1cpTLKs5N3WbfBuBWztLAmCWjc5VQw3wrrm96b6WTqBst73KDXTNDvPePx5t58EWZtRjFsfrrQc",
  "key9": "3M29WMZTzNva4DwhaX3gPjmgTnoiCSpp3v3k97YruGFSeMNUxr4DKLZKaoJVmcJnogfttej9sWzezbcqUit53aEC",
  "key10": "4b5MMEXgTNApANVxbRdjNopGjqVgQKbzxdxNF9CMQXccfBZ9fbVDVsiPGMTBjceWM2V5rFfd9wZgaCgxsspYqmr8",
  "key11": "52H2kyqw59pmN8dFF43JA3c2bRj8AxP6rSRdEmAoS6H23KGxLT1KKcjv5hi1qV6hH27yrZ7ftsepdha7DGimH1Eu",
  "key12": "hHsnjF28GQPEG72qQCUgSLwG7Z1xJi3KKbxXbduFwt4sRmvUTPWSGNFXSofi2xrz4zUYqm8jgYtS6E3xA6HBuAG",
  "key13": "3uAxey4U8mRioGSV8ZBcJkzKtAEEeMa5463CFfcZsQHarM2TnuMDi9KhrpjgCstvD6hnsyZNGELyeZJsYwfkQ4pQ",
  "key14": "5kR6z7uqakVxQRbqZGv1RFL67a1YKBpihp5F6288wVYaYMs115KfZhyif4UXeYhY9AchsaWYRD42KrvGaNiWuqWx",
  "key15": "4jLfFTU7Pb29mknZ6bU1BX5b6i6kPXrq2SrGeFwg5f64BYzCe8aBQpVwx428vKy3mW9FqxbQjMyKHwZ2SRB4jrAV",
  "key16": "3Rv7uXRaxUwHC61XTnJPGMySSNg61CzGPYVZ2iTMi9BrrBWXtU7ZtMeMT7HfWqDb7vEz6ezfhPeovAL5K4cpHHy1",
  "key17": "2t1Uu818jDTNjbfWvVhPQtY9yTZFo3fZ7abHP8yk22dQeYcpt7AkdYmM2PrcspZQQrjRjs71hHFGerzpXoHrqYZC",
  "key18": "3SXCfVR6cHSJUhnHu8oSfU6aaWz7tAXueekPxnC5ioauoGUbaH7LG5dhVvnHZaS3dKXCogRXU4k4hvoHkwtgsxSW",
  "key19": "4nTHUHu8G1dNoAtNpfUG1bnPgDNVGWPfKUNTSzgGuZ5mkPKhvHSkFoWWUp24oyWtzNC94ieobfWwMB6qvcmFgGCe",
  "key20": "3CRo67LVwwtgYSgKA9H2SDNwCadPdBB26CooRciBMLwGyUuPaEMdBw4T9BXDiN7p7RS66vdah8udQH66fcLNk4Bx",
  "key21": "2cPsEDuauQaujmB8EG5khEZFktvrAeqkwzCC8Vvee2E9QEyP6yNC18mv4vtYu7FhhE23Jh2TiBiKi95rHNj5hU65",
  "key22": "2dM6rLFgqrYkVXYKVRXiWqqfAXMDzCaUwEa7qtvnodL4oHKYy5S2zCXEoV8oFadQfLZS9YudMrgB8oQ51tMMaS98",
  "key23": "3fFppZJkwyL3psGHRRS2RGPPiP3pcxjZZNuvrERpA4J7U63UvTVj2yfaawmHJ1Rm8dGuqu6sYjaweCxU9Wf9fQWQ",
  "key24": "3QC1HpcVMncFoJgpdxWraw3NZm563ZqCZ4BFD5PFR7yd2iueD8aHg8au7T8qrEF6xET5XRMZZkxeBe3SGJyr58sE",
  "key25": "46uBTcS27hUc9Lj4WMk9aJrZAQPHicXibMxUjnD8boRQN79xrLfXZsAfqQkvUxcNDjW3Y9K77Kaw8n2rxH6GTNLT",
  "key26": "2REeYe5YrcQdPP6vziLBT9yyrFRhWGdEYrRxDny3dApABPGVgPC37tZ3AD2L71NJiZuV6kNj8ELUfgFai9aGUkZP",
  "key27": "5kRZuisnkmPvoZzJijLJhXnJaVBUUdiTXms5FiHf3pAmpBiJmj49rekaVv2ozZem7Bw1emaVLL1BPTkTrcZfcGkd",
  "key28": "VwYXhc7YwewLn7QdAizsYBC5HfYPinxmvNfp9KLUH1kM8kqXw2BRKxFmDcunBFRuR33enmEutpqWM2v1T5fR4Nt",
  "key29": "2g5bELnCVGCFqMeMLttqzwN7ZGgmJxEmRYCUv1Y3iW7oFVVwpdftJij2CjMTbSztbTE88jorDEKfsabPxS5CD6sM",
  "key30": "oEP3VdNXd45vPXCWt4M2ep58CJM6ySGZmwVnZMgMQJ4TVHYrxAGLuMvKDfMFLhRGvMgawauuDep6oq245DGcg75",
  "key31": "uyTeyCnVNtoWfhXPFkFLaZGwrYoE3HwwE6EeN24ia8Yv2hbJpudbRYVPpnXuuegbGxXvYUEbTGUyfB5fTq4fRY2",
  "key32": "3uzeGRdrFquoaTtpwAyV6vR5kJr4obZ8jq2MVt4nzgYBhSCa9xtdAWR7dU4G4x6Gn4Y5TT4jyrN6RkVNGKse8KEE",
  "key33": "3sRViXDRhsv13AqWDHRNU3G6PJoWVQWJKjoPG6wwpaBXWdRikmLyD1jNFhbMVPWFCtRjJ73aMhP6NgzSfhmCSxb6",
  "key34": "2pkKJN5HTHWTMq5noHmP2yZYbXaoPT7WU1QEo8ZQmirgh6F2CVaTYfAoH9tyBTP6H37UkUwxK2pycZgRSzxAuM76",
  "key35": "Ekoxa98dbbcF6xo7Yy5jAuQW8L33Dzo9GGyLtH5XKCcoFJvAjtKEGmqE8ezqPfBB2oWXepQRsaV6VA3QeVJ6Zu8",
  "key36": "5Zae6hb1dYzXQfs6wPDTo9bhDo5bGbKWMF2FjUP1sgdWPH7wEzkkXwU8VdXVCW6udNKw1WFFnDjocTz5vURCDwAY",
  "key37": "2dsfPexxxtaGNUsvPAakpnDySqJBFobKFs4YdER6KLgG3y9szcNAtT7k6MEejgu1R1Gqb1Tt1d3GGuYhCSUJYssV"
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
