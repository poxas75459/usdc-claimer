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
    "2Vkvo7njQkHAPweRZ1DcDQixKLDmjADGtBiTNkwLP8k25ccCSvtvZWg95TJFoG4A8do9RpbzbiZrtDHnJxwv6bdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nNH6u1f4feJ5g5tjSNfbRWANBwwNwSHCQw9eniQxu8MQ6Jc4h7swKoqsPnNh6veKa1g2Nqn6U4Tvbc7LH2jZeTP",
  "key1": "36Ry7ZYe4qEz1mNLon6wwsH6UAXUjWWYWcGuALLjgUgxLRzGXy5BFQeZnzXoLES6SfgbngsiRX7ZsySoc1aJu83B",
  "key2": "38tFHrjNAUwRwuMX1boGt2nt9iVAkMBwqyXqTrMYs42gFLmdMcJpH3eBjxj4aWqhfMgs2x8JmcQd2kLhRRQ16dp6",
  "key3": "4rNXKAL7Nig5vtMQEJmerhid2Asvf1iUQH3cqojvv2KqwRpJjQ5Jaw1QGGMDh2umdzPU5AP9UCpabicw6GV52tke",
  "key4": "5A8q8VbxSzAXLUzeTZ7ZyR4Vn4YSMfgBzq2RnSGXeqXNHyNZWNoT7QSTRhrNBSVj8y16dDQNncT9yT6baoiiKMW9",
  "key5": "38oYNUq9ZsWomGJX8jqich81ubU2FNzVCbDg4Krkj2Dq56JPUuLkZHv3oP1PtTZMxvYHf4dwPdPU1cGYnm1woYsK",
  "key6": "2BZCeNh4LfokT7GoHDHULxxgD9E8MHL7N6QcWPRXgGmjoPRyriFGAF49n28JZFUf2BXkwW2YPTAkDR9zZLRYTdz",
  "key7": "4mFSCwwmaF8jhrQqywicYNsndRTJKCbGyzQJqus2cXC3cV3YL7JDYpH1wrcekxRNfCX9FauHriPcjajkNhAyoPVL",
  "key8": "aYBgZZfPW2PPRh2MU3DuzxGCJcbcZHNff9LfkAzH11Ma8bXEUAB5wmKJgpFfv5yj2jV1Cr2m8pfN9Ffo3beZqN2",
  "key9": "Nzb7LeE9goEuSSSTYxyGhUHAD8nwHPY5wL1gt92rkTgTf5D1fREBWqG1TWNcWNZoNo2E74TkvyKmnW218wbxioJ",
  "key10": "5LsRpTXvLtPEzLtjkouFg2rEKT6igTMZEewk7AePjjdJKYm6ZFykfRia8uLh8RaKdKBeguxGHfNTjfCnKM9ns8Wy",
  "key11": "2XhErvJxxsom6dW5kVAm8UNtHnswbaFQYCUQZvLgNMtNHHovjdsW6ze8coc62JpioyC7xBkWK11fBNmyR3GQf97d",
  "key12": "UQsajHrSi3MBEarVSaParYhxi2gxorJC5WDD7nR6XdfPzm12iLpGHbQX1UvVt2vorHDpFTtogQQPmTKBGktVBS8",
  "key13": "2vyB64nt8Z5J2yJ9GYPD8zgRyefBhsqZM2zWCphRArJ9Z2mqrP4V2ZMz1jRH9bSGjRCkrVnLoi56EPpuNWJv2kuS",
  "key14": "Fet7DdsCesRrUdebaM87rpfsmqY9c42PzzNrvAvfM6W2xbJsDBoHPtNPWhfb3o2fFuXSfpx1C4mdC4EvmG6mzNL",
  "key15": "2d82PH7Et5fLyBqsoeZYnQ1cZxxBn2ZrtgvhB8JTa9E53na8PHC9BAkxYTmxDLvQBX7hXwbptPmaNWGUavYQQtEZ",
  "key16": "4oC9xkFMuCmcaWc9fQdJgQKWTxRta5NqiaWvpvRSF1nejZvioJk1CLtgk1H4AR7eVD7oBfPF6Wkam9D9cFipTBAC",
  "key17": "2DeZfpgTpvs6oL6gZcXMQDgXYc1Rw1RiErUrLr7ZFMAXM6av4wUDecauR4CPa1FKxdNvNma2EDnemghJJo22KFVk",
  "key18": "MRSp2oM7JK747Bc1Gh1XEb6ssE9UsyD9m3GDk9QwRqTzcD3qrc3pwThZ4izhe5nAeze9M8zrZTjQe3oiyM15KHL",
  "key19": "46tVBzWd5s6KnhU9wyMsbvv6tTjsaZoph6yGszNFaPfQJeEPDYxTD5r3mCfKCGMjAZzcwRbzS6quTL4ZNudJjfjk",
  "key20": "2uopWC6r9YEUNLbRUCXFM5ndZiEjg2aDKNTLQi23DNvBVP3FpypJWob3xnZNyMKE8Gu2kMP4GpGr3mPrgr7VxteK",
  "key21": "4ZaGr9t4VJeR2VN7z6R6ei6UShmhbcUsYAdMX1dgQfm1teoDCKSLGGikgnKTCn4K2z4M3FWbgPVii4HXMsSB6eS7",
  "key22": "7TZrEtxpPfNupKNysuU93dR6hYfHPRPixSkrj3FnFmEaHBxLnHDgf5aEE4dvZVRfk2BRVnh2mGVVv78tzEYtikB",
  "key23": "3widHXa6VEoneHQU4Sa8YqikgLFNB1qErjvpR6z2yRygSCxNqedHiLsRMVJt1GR8fTS4hFtsVUUQgVXwyMjLvoY5",
  "key24": "GNooPAmVXoVRrcczeQf4XAKKMrj2MfxN2UVutXM6DGGNjWr5aE196tvTPUjA1mscTXYi4adyrLakbEexQ2e9x8E",
  "key25": "37ue9ZAn4WASz4bt5hBhuYcr1b9JbdN6WwmR3xGz7DUhJqJ1nzpWoUDCQMwQKHs2yUABTifEAfRngXvBbTWA4cAg",
  "key26": "244T4dcfXWpysRXs6RyjweN7ss9RK3pXyy3vPBheV4WCesrEEaHsDB1PLmukajC8LXCJGwmuCTf5s7RAWM4sYu1U",
  "key27": "5w1r2obszLVy3G7p8Wye4aj5N1HhqGiF79PkfnhZLT3ECMHbffb1peoinoyt6oaH3bMG6Dy6sp9oyc33spKXzMRr",
  "key28": "4Ud7fNMHBCPrYQZCKbNoxRFxsP4jbBCKuy2D7dpU11kZNTMGdzb6WxFKw813REKjgHdRH1wgnnosKNk4AZuH3EJq",
  "key29": "53GjaYnKUNCg49bqCEoWid29GH9aHZ3mR2GpP75huKsGstEsMnzuMxxkSceQp131t6pRamC13FNVzVANgKvHxWRj",
  "key30": "43hA8Lv5kpjXeCb23CxRsG4CMqbT8h6M8UcDyFRoDs9ky1ET77gMqHeLwndWuayAx3rdWKMqw7CwYYbbfFKNszwR"
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
