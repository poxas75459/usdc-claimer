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
    "2hVqt8A2L7juUvBtEYy8nEdf8GQHA2NsdNNY2C112ZpK8kuoR5nt4w7Euu5zDzRrck4wKoPnTGbHcavb1dqjuWiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPEkizsqMCL7gi38wgtooxxN2SW88f6JP18tCRWxZfvuUx2QCZr9zGTehKcsZ9pV9pacEB6JvfS839J4i3qNJJt",
  "key1": "23bhANNq5Wpa3LjtyTLwnApoM22BtGPWrCHzNW4e1WTnkDWneFYfcBHLjKKiMaU2RRiWwD73zY7DntVrGh6u46k5",
  "key2": "dsVVCyvQXNWHNKh65z5sodLm8TuTnB1VCrYj6Aj1W5a3SSoHBrxsNhA3fwHeeUPPAxh4e7SnD5Jmzs3W5PdtcKV",
  "key3": "44Y28kL8R1Jq8UAEvuJsQyC8LpA2zefBeLvEz39k2hY73KW7MKiRdMSKNYjKAMkNgNLXeKYJ6QjTCueQKMPGK1rz",
  "key4": "3QhRuQeX3E3gt38baJ9ndxDZx6av33ZiczRgDLcpaV6swgQwxEzZQtfeZZbUQ23KsfGgR6cuZoAqCNoKkMWCYBoC",
  "key5": "trHu5uJbkP2qGD7ynhBMTnfca6Y921LDWALZAj7c8Vs1ied9ksBUdT4dY5GESkeYp9eXemZYhrTTQWbr3rdZbAa",
  "key6": "nL4bwTswHUTT9RNP3TUT3ykUoLvB6acobKggi9b8fYXtPQa9Har3QotfV7dDoUAat1Rs4pbgWXvNznXA4E5zx6u",
  "key7": "2z46nUuPUjavfeKwrUL2vufaUikpy8bFTXFc3cCZVsuWqhMc4Xy2Q6JV2b8UKnkLYqemLBStkkjXTuvarVDsU7tq",
  "key8": "3FpTCLGziU8N66hrdbHT4C9pWSVjE6hWdCv89pwv5jrW2UGiMkiZ3mmD23Ttm18wGtiLN15uru2VUDS7LDTPYFTN",
  "key9": "2GqF7WG4a3EFs8tT3Q6Ks4ndDT6Q7Uob1cuBFUh5Ue2DFiNF1AAzmujYDe1j3AaFrDAbjLCp8AFWRUq1LLhsFogm",
  "key10": "4PD4NPEsPZi99zDCvYbQv5WwbwCN6fhjfBQ1WKB4cthf58kUQZtMABBpHm8qVNbMe2B1xPehHiK45FRmdXj79ExY",
  "key11": "63ZXyfF4nFhGsWzceXEE4iQ8yCurCA4LRhbxHbKx7KcELrKdizECekoPoDEWuLTkwDCDhjJDsKSd6qG9kPuhnaZD",
  "key12": "4PjS8TvTtYXqip6LE4dMz6yb3y1U1e9sQiUA5UhnQBjZ6d2M3oJrsg8m32UVam7LiErvyRCrowEHpqiKqzyMXiWh",
  "key13": "5PsiC9dcb3BZ5DjEkFAihSkmUQmEGF5ScGvFxjQBGcdw2s21uqpc42D59Mqx3jSe8USduzgeWWuqrLSsJPBH9ZW",
  "key14": "5bARj5wVmvedVhUcYee8UgudA2GTZEFKQ1CAXodWXYJE5AoC9VEtr899wNfEKUJwQeoon1vd9VUBQXY3ikCkMya2",
  "key15": "Zqkm1XJyvHkJr2c3cVpwap5oG4as1nn9Vi9oyoPqLqVkUNVfKzrTTRg5YawGJxbs2dA7kGhsHY7u4gjjCE4r57G",
  "key16": "kdV3L4SradZCHUEoN3ZuqdSVomCKQc7caCykCM5eDczDCurAoKNzu2NvzjxkX4YmXwoL3DmzzEaDW3BsFqdFGwt",
  "key17": "2jxHT5coDFFtsX7TgTJ6krqPqzhyn6tnnB3vUHj85byNkcW6bJ9VhfQo4JUbbBS3fGu8kkJsoTEeVVnm1GwdZBSH",
  "key18": "3Qt6nPNutzzonMitoMF9ZZ4ooYvhruauQ4HWH9p6r5napQu6rza8i16ug37Ke7zcQr1WMcXRR5UTu3Di2SfmS2WE",
  "key19": "5HzVeudi2tEWk5wJaQCuEH1wdpYp3LuKobB2GsbQMnm2LEMvikcakcUrAWehrWFiPEVXLVLt53AXcTxxsNFLMB3k",
  "key20": "5pVRZ5e23FFNh1epKCJxCiYi7x4tdmhhW1wZC1zdpFEagRjm7nLXhZ79hkKFGjaz41rxjz8sLeNvEHNzP7rL6esV",
  "key21": "5is6SyTRbQ8ZXpUVwB3k5ZFgWqJC4zVzABkEd82inhwMLqf2HQ9tjFHFtndxKt4oFr1BR628oxojqfSdoMFhg81p",
  "key22": "SVxbceDzzSSAVFA3d65FBmwvPJk2AZWfzgnCRFNk9t3x7ik5k7H8YyQqXefp7hrr8yqenAmoNq1qWrRq5PS5ttC",
  "key23": "ExWcjfvEV38Dj8NtVqERXZFj2RXm81hSAagy7veMEUQiRwJk3t9BUkYLXFZazyEcVY5i4z6oxEaVpgqM2s6k5Wd",
  "key24": "28YhpQeeU9RM3LguWD7RmtVZG7wXmGmiSeo1R8tPw3rEVbJwDK1hdGXnLd6gHV6rp6riVTHmVy2N3ujHzxPGDSoY",
  "key25": "4CqqmiVgpUjM9U7Sb7YHibNxZTFdjs62aBUwpwX4qLn9BUz2QNeJohtFJ931kW8NNwyJZ547ugZA57aMzG3BV5BL",
  "key26": "5QZi2nUC3VZ3dFwGvAoe1KWJwP87rLmGjn2hem3Ryqo823UkXDCFqdyrsrRseMLSFHYb8f3SrdBv1mhHWWFDisRi",
  "key27": "5t2McoRXf4q8hnXCVzchSiMYoFf1bNTa6hDbXmb8WYQFX3XC63G1cWobnKZ8qhynNACUg81HE5zkePV3G7NL13bm",
  "key28": "3CUk24LAovyKT8UnQDUJHP5PFfMaiRnJy3NDA4r3dxceZz68WQxqJdSWEpHC3QiwM61tgXG9cZNZXEhdRkVX7WNt",
  "key29": "3PKmvMLiZauKYJtEQM6SgHLCHdXu7yWaLqt6gp2H7aemzVxyMiEC7h1jk7eH4cqfzhCk4JBDpx9m5DGh4zCoBLKR",
  "key30": "2zyA2e5iCcxnDtMuS4vH4fo6AP1qxgEcbL1kL5YLjR5HHHVEsdBoxhAFRqNfvgcggNUFYs7BFHy8DsKXew3qM9mr"
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
