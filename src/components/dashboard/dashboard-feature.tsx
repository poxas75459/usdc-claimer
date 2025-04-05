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
    "5LnEeQWGLVMsYbrK4FVjzBAgSwg1yxcaqVwLii6gzzKKr2s3qjCxTcsvGq9Aze358tD1SKvWyF2BEje9wUxFKA8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FxvJe4FqBpuBhwQH9zCcSEzLuqFEnmRyH4CXEQZYncZu5FiwaYSHAar7vMiv2oxRBVGqZYvUrCoGpiVmhN9c5QK",
  "key1": "8cghUud2KZ5nG7u4EdmWYab53wFDGF3YB7V4RAaoQ1PquSkiN1cgavcDcGq4w5BMG1NQL8WppZ2MuUXvXsQ1gFQ",
  "key2": "414jMXHwwEq4a6t77q89JUE7oFk3XsaGP63Nq2yc1y9hVsZRhFxrixbLaYFn3YP4KNa81i4EpNAFi31Cyc35QJSz",
  "key3": "2U7AuRdtDycWbAJPDsJ9L6bmyk8Dfmbv6XWMcKWcVmdwP9oDGGdL1JnVRuwU3LehZCftxb94AWgirrihXBP5z2Ng",
  "key4": "DjhsSswR4wMzGq3uKArLzWpSTZP6HswVZBX8pz46YpiFoc317i6TeWaNVnVJ4FKRHXVXK1bFQuz3mPSFidfWCP1",
  "key5": "5bG83wyfLArYix589mE9cGnUxdeBmNRshWjzuLGCAcwCkifMTWawwYXLZSEzJNMxiJ9Q2qjgfiLer8GSUtQC5EdH",
  "key6": "2YQxNGTHCSFktyRBSeLHEvkzJC4ZuFqb5FiQEsa2yyFeZqLYbHGa2aU6sNwNG44VRfpigrmdc4Fi4o6YMMf7uscP",
  "key7": "4dTLMCkz3dQCG3xJ2kNcFoyTK8fY8mu33bGaTiZyVk3vaL5vEAwhhmSkqh8m9SFKCGcKznzJQ12ifpVsQzySx5xD",
  "key8": "8hyaubHPRGDy2QD4ydtj3SafynVGfxBGdxcVLibY7BvFuu7rzv8QBwWNRwK28mENfb5gWB2szXEakz2XB6yP53U",
  "key9": "5BHPZq4McctmvThp8fdppPZXpvVf9Bqo4kMxWzisAAbN3xAeDH9VSTM3ktb6xaPdaXgG7XdaJtQEawi4PjogMm2D",
  "key10": "JccSvt689oLUbF4zvL2sfNHYtPYwBQ7wqV9udSMEEntbHBtEwLi1dNPos33rxRC4FiEptR9FDTKSJ4Jvhnwumop",
  "key11": "2SBtzqEPwVdsY7SAzmcmjFNr444fKxcDQAwptWKHSJE6xTcaxnsmCmkqwXBXsfHqvKEE4UarbhNKUsAyHCXTgTXd",
  "key12": "24BHHFiS1UVhdaoT6zeNqpP1Y9p7Cu9hQ4KtdnCcAnuYdyfDbC4vk1rpvxnHib8ejMm7DJVuifTJhrvS1buYW8HK",
  "key13": "42kepJsgPDa8VK9LNtQuPGTnfbJTq6FzRf2ni2WzrsbqM8VwUJDdq27CdTQU49CyNLu2VtHg6YGQSprv9giNttvZ",
  "key14": "3tCNQsQnqnDSNjXRHafak3xm2b5nR8yRaaTZVKUptvZ7sVcth2bG6dDnXAnQheQuZSKZDRomkGJUonN1vZ7VWpds",
  "key15": "2xkL6D9uLF1FVMJbdYx7N3CVHWdonAjDwhYKrqK9TXhihQNSEgzD9jocTj9ZhQQVskeVGADTYaFcxx5WCciQ5To9",
  "key16": "28TnLNaQ8qEvTtjnHdMTtDpcNR9ubGgeEaQqrxQsLSiEm9VUt3si7uw2MydLgqr5fB2XpFbBw7WvuamZNzup9Qs3",
  "key17": "2vmDUKxtb3EhYK5S3nSTc3GrWejrUMMfxpBcow7xBSYpXcoKooj3QDvoDEU7Bbe8QrRJ6EMWM24mGixWFHke9GPE",
  "key18": "2hkDHAHCFknneJ3zmZ8FFhsvMe9fg4w1Vgk8Q1NmHFeN9KD1YjS67cXQokFZVaseQX197rUCgN1rFzA6SUCa68yR",
  "key19": "gCxiih1fcNRmCxt32G9fXLGBR4csGwoLfyHmMroNhV4PvkciMhkVALau8Vb4kdZB3vUZZdBtYCmgDsbdgccF3T4",
  "key20": "ozSbuxc4Hr9115Z1cBbry2VPDvC282m1BUzSozJ5f6rjMC2cS5o2TGvi2Ram6ai62XR1d2a7z4s6PXhUaTHD3a6",
  "key21": "57WyqyKRTLmYmEEmJDcHN8gjbgRKviEJ2qj8n1sYYQTCUdB8t2XD5kkJWL6o9uxAUdjPSAivkv5XfKVrEiMDoZZW",
  "key22": "Z48AR9vF5qLxmcd91KRgmzQs5ggpRrR3VvFHgLGdRKxjxhryJPUoXZP9KHV7GU1zKNbohvmhPzeTpKmS8Nj8YLh",
  "key23": "4MrKuBTs1uwCSMWBAU9bT5A3MH6kERronQxX7stvCnJKzmGhhGhC8Vb7y4Gcn1KVdfTauRdE4CBRy85asdLSDGLm",
  "key24": "4o4QR88iE5E6DLHPgWCP5saUvtXsuX9gEqri1DoL2gmKWeoDBcfLQUsWKZS4w5KX2pnbyeNu9X1nGWMdW5orMcBG",
  "key25": "2aHyAvRzwqGULUJ92SsZhjgQgUmYkNC5S2ze2YJhQr3yeLemaM6Bddwu39jCK8hmqTbUroEzofwrHKfK2pb9gNET",
  "key26": "2gCaNSAHtpJDVRAdnUshH4TRjTJDJTWHFjZekgncxPHDNA3whTA11sHEWVAcGpe41Xnqu65VDcWSKQ1xZfWKPyHA",
  "key27": "2amTFc5BJeGcBQjVVNyfu9v16cupPoiqXnrUQDEgsbR5QAVrxjh3nm7xvU4Ji5RD9rrzySnngNb6picfch2Bzxoo",
  "key28": "4h5kczFCs9w8WD2ZZGtzxMzofk5oz5WtMtZvmwAMHVSDXcn7pE7TfAbCTEnZKA9ZhFyKGctMEiwkJwrWnkGgwAAv",
  "key29": "2wuQeMaqvC3Mdo8V6RumbSmimhGv31JRJN2yuxwWtWVJ9TtJCeBFKpB6S1RTW53rr72oSA9XmkqxgBkBSosts5nP",
  "key30": "5PPU34h9wAQDoLy9WaxRHDGU26Nepfi43ARa5Hr8SPNj1XVipyotmTzWAEnWivg3jVVvEMku67qxw1BXU3SxjUiz",
  "key31": "2V2LvVuRW2TZUW3dVSSvB2tkFf895gpp7bhkey8auPFGgtft4LA3mpfZppcDD7xaeJjDXURV2w5j2BXnEejtNwND",
  "key32": "2mBgCnDzgRpbhc81RzYKs25ZjWNz7Rhuyvruxjb1h3P6Pe5ACkpwab5xw3LebcPdBgFKZgkKwjvaL885GV5FjD2j"
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
