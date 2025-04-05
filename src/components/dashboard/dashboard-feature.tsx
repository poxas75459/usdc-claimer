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
    "qMZ5woUghVjaJSfaVsPasf6tQS6g2JeYtaettdsMeNHnzjaki7rkNjAPKo3c6UdGdRJbqTe6GbVKYjLpXnXMfVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cj2oaZvPSJULHYe5ijtgbVzovgPAodnfYrwq9iZDvDY3FyC1NxLxVqXPq6P8UgUQa2GHQb4dFqXFMQivLFXEjpu",
  "key1": "2nRTfhnpJURTZ87jADUnRVu8GwV6cS44uabVLJmNT73UJ4HvyxcSCkPiCQBN7WBZn6ca2AWpvhGoW6NY7xsZ1eXb",
  "key2": "4DTFFJA5XR9hMTM5UDXkYxANfta8Dotfh36cfC8E8QSyFmBXzGN5n5KQoVLc5mqCXLMy8KsvA6fxVwX8pPTHepgP",
  "key3": "3QwS5abzRbxvgjzWB1oQniE4Hqp7y2jkjxj4F5EuwchDoWJ2oh5hzNtWBCcqagGchWUXrcprVepwEHXGfjhYd7Dq",
  "key4": "5eSAmsVHHERZQft8byJeVxr7PB7uUeGLAMHQnPQtBCgzZJjuzrXEdL4EGEZnTZYTf13wiyp7J7ra4UBYT43fJyGr",
  "key5": "3Cycrs3Z4BDBkBKkdSrukN7TvVBrx5UyJeQbj1SVePx8NhooEWjr2gubidw74ejDo7J9RteA789iXvyLsEyLrBzP",
  "key6": "4YEopwU22zakPaxj24CLjDicsx7mNyCnD6BRvXQtpi629zbuRyyxoLcp541wJT1ZJ3EYKrYsbCPwBypnobxSFxRc",
  "key7": "2AfCzw752ZrXWWgktGrkuMPzGaMqhkpNj432cxt2cVHGdXTjrfxVg91FwyxvRezbhUhM8PNrCccYQyyeEoiNzoDs",
  "key8": "3kgpTpyS4mKyasT549rtVEH9fbf6XcxrEMfwJyY64iRMKbh6skn7ooeZCJ6rPkUCnsiNEYwLxqnt7eqBMADdHa9z",
  "key9": "3JSnFY2aZN23Shp44zNzAyDcH3UyVtmrMoY7roBWEs9ywuQxhgNpHJK49gMJecr5JAGC1KQVETPRE8pttf3FCigF",
  "key10": "2hi7ujw9DMdak196epiCZCVPZ7b16JVwdCLW2pkx4DtqK9wBZHQJYjCFVCfjVZM6wrwfKHhuaEygmQffr1mUHdxM",
  "key11": "EPtPuYexhuz2yRmV41p7sDqNJid6jd9KsLhVCBFsueu8yvcMFbRpvio49FgVcibrPLuFAVwFE4dmi2FEiRQbeUY",
  "key12": "562vkquFB6oFMCS97QKsPRSP2Gsw4rhRMAv5MMbt9mBJxgsbdH5cq5r5hQHWbxTHVKS7rBoVzsxd8zBCRdoXwemW",
  "key13": "44jMsQegx6hPzpbkXQL7GbBcjWtchKZzkzFXkhvsAKeQzDJhYf9XhmeNyxfMNcUFngV3uhxjSg8PfAZdY7cWNqUn",
  "key14": "39GSU3FXR7Zt9N8fuwPYcCDx9xi8EsDSAFJGTCTiMem2FB1TRpyJ7GtNR1BVBFqaozmp3GGdDgE5aTxi4VkuRnQJ",
  "key15": "3jQe7RnT5yFkU2VEcjcMau9BYmWsqR4X8Hc3iLHDvbncg3AzQyE7TUPr65NaV3GABjYPVEH5gEMvZNoomhQCaE8Y",
  "key16": "64399t7kdoQ45Yzn3jFPTLks47dYNx9wfFMYcAG9Sf8gRapWkoExrXCDAAdCxbKBaxfynDgy42XgMZ9mM5bqmkzb",
  "key17": "5rUuwksDYcUz171EDYPX1iXrgjiyKYKdxccEBLwjpa1CBVZV8V1uN8BmxZmnRGFpkyuBgNXm8qZ8FxuqQZE1p6gT",
  "key18": "kUzUmqFEXM7FUAjyQhm41EoSnzkAActH3GBnuabnZhy2Y3iGeEe33yF6kQYWhPtivLDiq8SnWSqNhk4Vx7E5xdL",
  "key19": "5Vx47ibeXdRE6Txd7ngVjBNEXqsj4jnF1u9Xeu6s8zVtxKbg8V5poCLyQa5agp5wC667jcMdjstJHT5AbKEyyAHd",
  "key20": "3SKdpGRWK4orTHCYNfFBCMbbbvmVdQetvVJqNxwQfU8jwBoRHy2E8EfjfoUaMDnviBjeBa9z4fMt47Fr7eyAFwwR",
  "key21": "SGLvowbsziHZd8G46b7MRSqCtgSG8PKpwrQPSZkXDZaGtwjZ6k9PSwtWNFS2oYpSbwXopvjHJpng2TiwNH4xdWu",
  "key22": "5vcmK1FV5jD6ZQ8FHUrheewL1tNT3sziTeNKbnD2hLARqAc8RKtEgYC66mTPYs8eRXxxBovbgLPF83gV4YLoasHy",
  "key23": "VRHBic3X9JNma6C5idoCmptWFaPPSr9fCK9XUHYMN8bZAQRYzspz3P56YtW1NtgwJi1FYDFLK8DVuZbNjT4w65t",
  "key24": "3SzuAZeoRxPBtjrLR3EStzhae8PdRChqfjXJMsDm7XoaerW8znCh37NeeA7eGvVSK8VkZ3GARQqvGqpf2hirfDvt"
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
