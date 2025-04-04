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
    "4JhfEBdxE8Vx4Yg3Hn26s8Lf9JX9xJ9hirFTjfUWVbREeee6iZTWLBFWopquFG3Ph1EoBeYcbHoEFHWsjkA4Xwok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oPWRkg6M6ep3mtQxv7hoCEgLSKaPhLK6J17aZiNY43fUuCT5bGF3NyDndyJ2vkfrZZwn85sQVSmeVYbazuRUKME",
  "key1": "28EkyW8EGbLL1H8GruLLGAQzNU94teSY6wQt9FjvJTkzQVurfj7nzN45HbGEmfKCw1rr6wbwGEwQ2UNJ46Z2yJq4",
  "key2": "B1Ag343mBzLqY1VCcPrzxi3qwTQVSeL5qCq5RohsE66ngDVd2QieYGY6UHxz8yzw274CyQPMWQiKegjVHh3ijWE",
  "key3": "2u6KsqwbZctPqGbPWLft9iT384K6PwTFHw7qkd4KHG5KmsPSEunEBPFGR9rD5aRFygd4kk39CS23NsXgtZNsPivj",
  "key4": "i2v2cbwmW5TRAjz8hFuSarGx38pSNMk7rMLVzjwtA5WBTSAgSMoLKHrKYpynW8iM9DXNUZfWJMCLqyj9W74Uvos",
  "key5": "2LETyC5cx2cJnQPKZmP9yAjxJUdvxWvDQz2QDWExHXMfGUTPpR8ZRfxgq2vPkvq1xDdgnKS42GXrAds9UBgUZT6D",
  "key6": "2AJeZbFCMMDYh4ijvyTpfL2QfhrfW8xesJBViXutAY8VvXcRDak1uPv8jLcQF31Zz5Qo68XVQ1ghmEGHdAtm2tcw",
  "key7": "4u7AVwgnL5T1TKkfNan74XK8RydYtH1npErXc6j59mBiLZ9b5SEyNfq1eFc8vB5A7NmLVcMWbSrZisA3q37rw5j5",
  "key8": "4BfqaMc1vA2iksvG55GMjpto7gXnbwNQwKsf93BSHk7unENUgnQuHjyuyxRA4SbYEQfqUTehDp3dDYrB3eKTAe8L",
  "key9": "4NEH9BU5wYyhLPnsbvUHTXA71EcwcGXuEbGHjjdkou2xjjdoSmH8P6kYHkzHCu3aHzTMn3YyBXLJ8QgAgc2xqYX",
  "key10": "HNvwLprfjNRdAhkBDCyTz694ZeF4oym8hHSNXCUF3yL5NuJrVpWVPAntFY1jgWNCZPVgKcGu1595BZLMwMAWxzX",
  "key11": "2ZhXkAEsyeMJEDtVkJURAg1Nmami6eD1UMdKz6N7Y3Di5errCqx1ztbn8FrDpCGdXFKn6pm6xmg3dkEZS5yma2wX",
  "key12": "3R6RxCoGqNwaME147B8j5mKoYwJTvfrNCxwywGDaSSZozCwUbs9kjqE41Ny7CfWUdtjsVMZfgbSCyFuiq93pv3Bj",
  "key13": "eSttF33v2nD5xBxkLe6UhKuPdZN594czShMvvkJFF3ho6VAANTBYsA2vmur3gw16uyJXKti92todQGc5h1j46w2",
  "key14": "675zgVTFvEV2EAawxiY2iQYcYQAXXS4MpY81Wfd2Y9kQ1sgG8s673C7SDP2ThPVWS5GwiS8PTdZxHoXCaCpE7UoX",
  "key15": "5Tu24kDVrijgkjuNfgrcYdTyzSfQzjGuVATcaNcP2ZXYkEhx6WveTkKTTzjhu7oZ7fUAZKLw12b34ctRAxC6tU5L",
  "key16": "33mpgYJChoS79DH6xHnu6bYGVQvLpqg6ucVe42mgCAgUJwFqpQJdxY5UrMJPwhaSbXDfPBKwVrqvRJVpVWa1kzux",
  "key17": "5NYzqaF4DiTB4zezB5C2Q28TboybnWUY92jEk7sZ9VRPtVKRb4Cchb1p1F6bMJqcWbCFbNhHdPkwx5VTnbHC1zmn",
  "key18": "3C5jZJgAfJiwVhdv25pcFwByEb141MFA9XL6tjX4QN1xTbs6wDS7EgvwJAgCsYKP1GT125jsiv13CECxnXayXwvT",
  "key19": "4UiwLRRcc4gnmfNugQLNERBPchLHaPZNSE2unZdtUiTPpuhCuPgZu4RP2p4s8KXVmnnKDMfsecsiys4vmaLdXnVt",
  "key20": "3noaqa11Y4AMee52oz8yLs9YtGcBzSbGu4iqnfRRZfRN3mC7MbR7ZtbGBGdTNzFQ3sY8HUhWjvxQwmy9ZWbYRPka",
  "key21": "4gwPNBqbJESjVMrGrx9Fb4WEXww7LsT5ggezmYbZRB5WMCh7Cy55PdfbYYTTDTQYyyzWPE9dxMQCbNSgFG8zWhwN",
  "key22": "42AxYCwhja9SMto1V8dgh1cKiLV3uuHHzh338PmE18UALZqovFad2f8mDmRQmypqnUpHS197H44wbQqDR7JYfksA",
  "key23": "5Ln76QV52X19wn8B3ns2D44CEa2EmGToVSR9bGjomG7LH4DudFbbj8dhpFTc8AthWCrMLTiKNtw8GKFSoFsaiUpu",
  "key24": "4ycfpJLME8j4W9hyCSoWuyvz4JgLWMfiP2P6M9rJmJXD7AL97ntimCLkxRCMoQgMdc7ZXSYH3gh5UHKoxkVYJ8r9",
  "key25": "2pk8GR7S1N1XECeeg6VxskxSVyyHBMBTP6PWe5jUZKXYup7q8ytwyjeuHRohSBNmybA2vjb9wqYjQ88Vr6TVFqD8",
  "key26": "5zMrusVdy44qR4JLBX9xaVme1669FHB3XsGzSReiH5RZY4yyep3A7DisNpxVJQu6qNpwY3rm4HJQZiD2794xYLDj",
  "key27": "33MNm3eXZU2WQEhiiVM9rqQMVBhCVCVmfAwSMPxkgpp98iLkAxPLAexxFUJ9z11HM64ob2Qh38UiLQzJv1an6Bch",
  "key28": "45RtXz2dxi8WYeJrNV6Cim13yrhdRNUaEQVi5Zi9aC573G6WEykERN2DuhHYZCF8XuMM96S4B8PD6JbZeZApY7vC",
  "key29": "618tXpsB8KPCt6i6hbYgQmcWCJg1EDNSiLndkfEpekGuHF5cgcSWt9n7mjbGXQf3yVUMJbzHyyJnLKJYeKtbVU5H",
  "key30": "27RMK94Ph9vnn317xUFjEsRPNDBRPZFh6KkKR3GYExTLNXKvh9PJRYmzKHG3fj9hg38avp5cmTq4vQeYFQ2FV6ve",
  "key31": "4eu2qBZctrKduzqUefhyaBZjoJyqoczmmu1EFv5ZVadATEgTs5tJjchSKQuv1zgjNDLgLT6W28fSCMAS2DDfg5YZ",
  "key32": "3C4knRcdrzyVRcTmo5fxhKZEsePW3PGX28kYisuPUYU5ipgUqiZjDCQjeaFDz8C6MMTqDB8n1pjpsHKMtHbybovw"
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
