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
    "brattVjQyQrPC13MZj1nT9gYfZdjkYh8TLhrDRRhg26XcfYjiKDmMfRNVWoe2TidHgeGG4dfuTVBVbywX3255uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVRyCi4XD3zjHWMbjzPrb7iZMoLZ7mK96VjkRak93iYZmcKsd38Wz497Tx5mdsczLHQydBeafkRXj4o3KWr9RgZ",
  "key1": "2FRpFtYjZNxrHnNjDHdMXNZ7XuwbxayzkN6B8wRgD3xkWguod6R5ohSVCPisFyg3R2hYfj1bovcpZVcXz3REGFEU",
  "key2": "5GucUcjZhVhjniAXuwTcGEF8wJqY1hXxDhBYohhHmXpLsCtAURmcb7hGM2LxUeow9ZL5cxYzKE3yVoPtF646JAoS",
  "key3": "MaVjPPABq6Ft2jmbFxUmrFqX9ej6ywbvVA9T4Q6xkYCw2GtPyVPRPLWVVyN9XSMa3wJkbhRajWPyWDZiwujQqpB",
  "key4": "2DguCBDbR3YWdTgitap9w4pbGD9GKke1UCkghRVoRyvdtqcBkFE2aG3YSHEg1GhTvpJdFokkDdSKFk35E7cLp3Fx",
  "key5": "3RFbg5X6RzSXSce1BKfZuqTPGaWCM8AoCo3zQdCmKdoZzyf8uoJZVN75zX6y7EodoWLb76ahWxz3SN6cx5Q4rkwe",
  "key6": "4ZxLCkCa297qyGMnRuiQymV7MJA1WZuHy96rxzhhCaVmE7MTPWXgt9REY5CGEeJeK6mPjk8BBJGUJzbo9x9mQQnQ",
  "key7": "61B1KuWP1fw3mocVn35iDttWqENagFtRKEj9HpvoFbp77mKxC2Cjs6UV3WVdChqfgzB4RRv7ZcZc88iL2zDNn4Kq",
  "key8": "3Tb8239qDHwjEkWRL32bWB5TLzh5mtDf15qeuh7EPSHV92wjiSpF7aaSTfsXLvFCuLHT689aLDXEYygrUucpPeMg",
  "key9": "2D34MajfiJdHCN3bp3arn9AtQ8FbeRFBor2cKpUAF5jJV3NqfXgZKhbbdzmCyHDhG8TBDp6QPwD7811Jj3Yf5nJQ",
  "key10": "4xrVpGrhfmMvoZkh29qAM3HYCpMMsLK6sGkvTMbewMRjz4fys7pkNDry4SjupQj8pg65jJEgpNqfwFQJeFcNxv5B",
  "key11": "5rBcftP3gEyfMPmUZvwXr59CnEqgmnCLqKfXXjshFnyj2rbrAFDwMXqpanS5pjjTamBgyNn3bksCMFXbDrPogjHj",
  "key12": "2kjdn2knTZDfL35pK3PD4xQxbHoDKr6EJckpfgpo5Kr6YXR1k7qXAq6MAXhJDt6aosfnWK3FXEBKXLnMLTvskKTY",
  "key13": "4NyWBFysAHZyxgzjRVmDjw7C1mywR6u4jbAkxsG8uHtYwvsigrw1CdSycHoRWG8g8RuPDkycqfwyU9bSZrfoVdk5",
  "key14": "3nRAdg8kJrbkM71wNNm5QxcVZi5ansX4vXqmYS2sZhNe7Gn2E9Dud6xUq9RKRmvzNjTfPJ7vYTc2LLgZSBkBigYG",
  "key15": "44onKpL8VAGYNNqkHKFDVXG7Hjw9eEoWqvT6USNzbq5RSEKoSBa9Hw1JPfEgeKExx4MgD5MQQZKhA3xnDgUko3YT",
  "key16": "5Jwmx9Nv3UCxfJGEPrsvF9F7Jh2JRBndtTrrijut3o1aiuD14WfocXPYqFRqiPJqYb4FANt7Y2641SZUzT5XsiNM",
  "key17": "3Hf4T2V8zPwqTpVXSX1Rorym1Aj8jiCWq4TwBuqJ1hm2fCoqj9QHDAdbvU7rSMyZXWgksZT5foG1Sh1CngfUZP2x",
  "key18": "5nRL4t9XUjNDUdPBAVa6ngRKMsjF4XXJf91AY8upTzP5BcWAu2CZd8PL4wZNmkVDtQ1RamDP1FXh2Pz6HV98U1HA",
  "key19": "2tAkLgJJJDpSDnzkhbygF16A2BSwdsAZZYiCRoWgKTFGsHcuYtg7ymGdRieAt2tnT27mYUv43nELTzQfYtDkMfkU",
  "key20": "3cyY2cGZLXYBdBWKMMHqPSSmEw7wC17r7ZaVcCDNoq2muc7wmG1U654e6MGotyqfehaP72qCnGFPqivd4RiZni5b",
  "key21": "GVjnkKLudH8V3aSA3EK47UgVhbAczonY57z9pfogiujhJ3HDqGNDM36YWCEK4f9UDx9Ra6AD9ThajigHfNEJFht",
  "key22": "4Tey7RrkuYJDXePkfkUvJMYDEkvxdmeo7EG7tC8MXsJ4YCieQifFMQ882vvtvFYtXjT3dpv741PJ216BWS3JMUg5",
  "key23": "3XD91JTAuc5HbwvinuEFZjiUiEnZr9kCY2GVuZbNcRgXAahv8hri9CujU7ypkVroFLR1yEccBgyAeUL1uyeg9yFS",
  "key24": "5m4AhRpEBFNCPCDwhDGZVucZH1qDRz8oV1GxpsWqvG6zcv1LAZ3sRbEkKbhcyMF5irQzGUM5M4ZBAaYSx9Ha9eA1",
  "key25": "49z6STKej68YGBBXZ5RS176pcMaZjfUTFqxb1qvVWSkau2bSFD8m1a8RsVWoXuP1tCNMTn3mbL59T32wdGU1LMo3",
  "key26": "5VS2BkXMxKEbpQiE3CcgptNULPMeX9wp7fenT9zAaCvegNVn7nrj8pw8zAt3FuTw1N8ni4wvQQ5xUmHRp27vPrhZ",
  "key27": "4YR4egTUfkyXXXjgmK6nBc2GVcdkAdUNSxggXNXhLMBFoZzYTBdhs69cbxeW7ugCArdsZnsUuwNfaaZWhZbNxB19",
  "key28": "3aW7ivFsCkVn2rpqJjReXfwMLv8W2y9uZ5ZXCj8Z5AcvkTb2DAVN8iFWA94Z6UVrMGHMU2WvSxN724W1ggAZcNvc",
  "key29": "4mNTY28tcev5KwSQpeLz237XKPXTBieJSUgT1ET8f9yS9rQQhtNFvctTKbWvV955iYz6ozcqdBdoeXiUNKWmmnrY",
  "key30": "5GHExMTVfMSxLZAtMXMSJRdA1F5dsFg46yizNYp7JuJ8v2dtfQjzz8rnC7fPv3uUrfzWQiw4Es7wfJ5fkZSdSwSM",
  "key31": "kFy1QrRhL1tjLm9wPaC8hmjs6oTtLAT6LtG6AMRTkLqMYP2fJm7egFM9H221eKJUonJ34XMFqa3v3cuLYwpzGdm",
  "key32": "2XpvrSp9379oKBQHEc4ZN7YP8a2mMBCwvJJgqvqqLGx9WTB7JXQAagsmXpLAydSnxRamWam1yZdEDYWd7qpiuTCu",
  "key33": "2QMt3bRr8WLmprnAz4xuLtr8m5ea93UYPBQVbHmF3ZRTA7t26u8ge9tFyzurCJHP8NzApRYLfHz67PavSkYKQPAh",
  "key34": "66e1YRS1DdnwJVByyheaRLZkbq9kZxLNm1dDp5M6MMtGAVvyobyCdxcRERpFfXQc7g2EWE8vZu56HijWCd2Q11W",
  "key35": "jm1HTtj4jMcCCSVPQC6haxFdfuJTkXQ3AXxdutcxrQyX1nJAKgLPMV244AvQSEEEkJDWHtzsJqJSKZh8jpd6gYL",
  "key36": "5JZZu8k8uq2qwKDudVAsF9T8YsmUPazQkgC3soseEZLmr1xjAfZaPCTsdu4uRGerMBPwwVQgvc8Deor7YHWvjcSD",
  "key37": "3RVfVPN3sJ8UK9iwqgrgJq121QmN9Fmn7APgyY8ooYwXEqErwGouV8SdgXmCWjUAyNKbAYmByyS6Ybp5U2Fmx1HB",
  "key38": "5nJkg96n9BtiRT8LhC6yUwk4cqqaTHfUrzHZytahgbhxsQVMhdgwLtkGvdgKoSobypZ5vFNRHCbaQVYCEFqJfY7k",
  "key39": "5ijbRKXK7y6gCoRkiR92XntjFq6hmZCFeMEVk6mGR8aq2g66KYGkSKfQXw7Bgivb6ZS1dPnnUVXUGrDcLUnPSLdi",
  "key40": "63z6hsaaiiMUhzCDSeZPe8bB7nj63cAUbupFhYmK1p9Zz1NbdzQyFts61Yq6d4pbejgd3rg88U1rFV9LVK4fx8ex",
  "key41": "1Nue2Lk41DUuZaFXxYiHLvSrknaNCTUYaBPXiT1A9MDwevmK4D1hFPkbJztJaiZ1B6rfPyiYPuh62i6Mh7b2Zzn",
  "key42": "61Xk2SJmrWng7WyjzafgiAdWYeUCArcAULLkbhAtNTuPYvCcAQ75h7pcSgzEyM3XHwErDup5vr9whExqJt8pj1P9"
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
