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
    "3BkpX9JYtaT473WSmbPSCFLrsu3q1DeRYJrQvybuQfM7TFpyRWgggP5oL9puxp68E8fHJv2v2TawmcPsg8dSCLkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CLvMJ6M4jafHpmjtwqpZ7fcBrX2HMZE2G1GjfxkMm7Xtx9u1r4oewLzS97QPiM6UX6HBf5Ga29nUqJuTgPgCyp1",
  "key1": "zqMXyfd3NiyevSvWUnVo9W3R71i5eznzd7dqsQ4ojTRapRaRboZdEmqNywaP62W1qibhUnSnDCoJ9u7a4phbsLj",
  "key2": "2osEC3x9mMGwaLMrc7DR1v2LESmXzAAQgem5PkQ75DPcsyX79fP8vUM9gk571mEXLLVLNW7EPUkMszrP6GtZrq5a",
  "key3": "3wev2zCefGVW8ZrhgESnUx3GngQnmKfSfxPsrzN82pKtPKNotosxkqrHmKmM1D3h7QrSeLzWSrkd94w9EQZmLtmv",
  "key4": "gDHadKuC5uiuzscKW1QbQefNRNoSvX2NdMiFrsddVhxyaiTC1DzNSUaPFCCpT7qGwocfaHNEZszoa95GSpkyQPF",
  "key5": "5AQjA7TserBvVaJfBqkZwAv5opM3bCYHuh5i4erTrUKEX3Pnam4QmddcnyGYioSy9R2bTBc8mdieKtNd8EvPP3XF",
  "key6": "3d3dYoGJB7pgUMdiCXYtiBvLPNpt4K9D5q9mjCAjePqYsDrziprfto6qYMMP1dndQ4MNxVh6dN6gR9MWbTGfcwDk",
  "key7": "474VPJxPuJBVK9e9VLg7E9YXrwXz28CqF5cY4NzEtYmtUEoJoWKjcdyaQTbFEcLstk8KCRJjfRmibHUatEiLQEBr",
  "key8": "4MhNnwkkvt6GqHRgfEwgMPVJCB3cdMwsdH5usNNQamHiGtJLpkWbUNnVV7NGYvcregrczbWdPqtqCU4YnLXQ8fUG",
  "key9": "5GzNWk1HXJ33z6uzCjSQCmu7DFG4KdjhdsKcr4M8P3TfhTWTejFgR4Aw1fL4iK6QR3pJpSJUXe1vDfYzMBDW9Vpe",
  "key10": "2EabsLycGWStP33hurxXkUNesjk4oQHCFfjwKzPeCPrU57tRCXoqLiHb3TNV6NZpjPbDzCHLSZMQJNbXRMkjS1tD",
  "key11": "3y5Q8mFm5FG1MoS4ByqxkgVgpoCK6hzdXMC1MZvk6UeceUaK1nBmZByBxmHehvrfCnJkcKpTh7b6YFc6sZ3pUDq5",
  "key12": "empfgJTjfv5vrqBWoioBXADXWZGEfPrUYyeSWMjxaiU4crAfggkMmot9Lk6nju9ZBqRyYCvfuvMfYYCUr5zUzXL",
  "key13": "ZvW6dzzKz14herKRBr7HBDaq62PGaQVjoussQTyKiNbT9vQb7zxmnR4xExdfDtWWbsyj7T2YZCAjR63qgWTyVPe",
  "key14": "41kJ6Tw5749HK26HgUnkjjYCMG59RtLsDszTJqa8rBM6ksRiRQ4AiELV5Liq7A8WmMUgh3tx1qcHN1DD5Kf7V8RS",
  "key15": "qbCEti5XwymTRvCJ5XfmAyWQL3qQ6xSQEn2At3J7xGT6M4HsCoApnMyuPhyoV76k59V2SUSKUKJ789SPLcS4x2j",
  "key16": "5KwSpnMqF26yyTTZ6XmDYXoZFDtZABzfp4Ac1U4M3YA9akyTgCDdMGraMEEmEXfiGL2AuAWxUwMuzyGvEbRbcr9U",
  "key17": "2YYh7BHhyeVAtuKYVo8XefrwdkKkphjyRWnQLM8RzRJ2nQF5WgRqqSobyFh5aq47HJQw3A7QXEquodAoYtazZKzU",
  "key18": "3jS41483mWhupZr1nx7yknRNyHXV6KRCEL9e7VLYf3ZAzG7ZvrRkhK1iNryPvh5QwdodS9Uibu2U5efPdm9qQoM1",
  "key19": "3Fix5p3DrJcs1wfMyYwYw7yambPLHwXNUDaT11eEPyAxXk7jKYUpcUh91fxco12XHKY9aq5rurD9tUxpRSaJg44S",
  "key20": "2iC5RQKzQznw5XaJxZ8sYroqKLHWYvAifqVy1ZuYcBW4TpJWz2BUKT8pva5LHEgX7YdrbVyVVS1ZBe2xzAYbky65",
  "key21": "3nrTdAJipxpvTCr6p17HSQNHV6CoLjzy93J7o87nFHPovYhYagwJqLC6Y1ZoGJSPs5ANWh4f1UoNE4v5Vm7pRe4z",
  "key22": "3thoseHDsLXXogspNphTqTWd3bwXvtDpnX76uK7w7ZfwbWi3kqu5FNbSNuwxRvimJvLsNEiDXtzaMnqSWLwkivsr",
  "key23": "3QUyd1FnjNh9PdnDL2Fo4e1e9uxr9xp9QyBrJZHeitLR3ezrjLv59MrsNNWftMaRaqTqt3bF9gTUSEmL1oY8vQbd",
  "key24": "KUDKhtXoL3LrZBYx2jWGvp26ik5n8cjHy5ESYeUoYePrDPsENqbHQXGBXrKcGcsNb7jBrFpQfYfc7hcZxXqFUHg",
  "key25": "2apZ3uf32p5gk8fL9oGKaSpK52hesqSVmfguzamp4vVgXjgsCgzR5UzsfFZjPs6mtddeYjtariUFYpLP4cidJjmg",
  "key26": "m7Q6u5o5XyUU61MdQAdBeS7iLup2vaHcWv1iQPQGqZXyEjVhUUokLJrdftvKC3pYnj2RxEQ3Jor5EagKiUZKYw1",
  "key27": "3vczKZsw3WGHMSxQtcRLVLhuVyqrsZzkviTPNeUiZc2Cm2Wcbbd2mWDTBgKYtgc5ZzHZk8Gx7WL2rKQTYBUMyGvu",
  "key28": "3rK6TcDTJvHdeAWpTDYto5iA2BDXTrN8uUsNVK7eKyAytYEbFVdFng2BfhCpFKy6aKSszow5kogkk4r7uGt1AMkf"
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
