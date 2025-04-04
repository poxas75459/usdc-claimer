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
    "3GGC4X7j5Ga6Zz6pENKyfrktjXruUYxzYebtidMqz6Ucshqie7FefNXuLZsQqDFZ2yJuVpjcmtbmPXNpzVzQabjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qwje5JfpQfZq3DEtfF3DLTJWgJkjNnk85A8K4VTdAK7CGXFFZZKFCHURNPGdgfHnuQ8ncmwDsZ29ptVjHwdnUb6",
  "key1": "32n8LV845DccHqppfdU8vX9KnkroLcyV4mK6fYwa8NTr61kdkrDBDNAnqJqBPsDfG8WTD5pK1PqRcgxwW9cQkx7Q",
  "key2": "4wxPNpx1AoHVLcX5A8FwpnCAGFT6nAdvaQJLMptM7vASjV21GUAtjmUBbjjPyTeepdHPBMtB1kgsRP1xx7LHfvPB",
  "key3": "45aNJTgBUQiJDhyhXLhwHNzUajTCWjK3w4dJ3D5TxUzp66KEr7TR6wFnTAbMsxwjqV9rBdFbWsnxUmTzYodSaXyH",
  "key4": "38eyWxyugcuxjRu7y48mTP8NcJF51wJ2Pyq9FrC9de6JfPQYr6EAjhUNXUjcy8UkPKsE8d7VrwFxp7fAGssYm6xo",
  "key5": "3gKLkg8s1HhdJAR1jkkCRBHmFHvYU6mT9qn35pczZst4vNVjSr3cRihfuYF6mUBdAioMd3kJvRXnNCbmgLzan6Jr",
  "key6": "3YquDfoCxif4YXYHPB7bmfaTWPUtmvSmZmCzYp2pNbm78mmPLJSoNEoUnMhJVsb6oLM65SkBsJJCDqv25TDLyMNb",
  "key7": "5BCoBcaSjKFtTLLa5LgAw1qcpGnvjMgRPgsVTsyRwbj9kvyKfvL9P4XpSJ9kw5zCZS8rY5z9DFNBsrG721JDmwuT",
  "key8": "GRMpzm9PQJM3dRCtuXz3z8iJ2LCRTjSK3foAa4BZh9NYXJHNJSrsp3KVNAc5FfGiqJ499EN34dzFZeEciyVaQpD",
  "key9": "2Mjywta7fKHBiTm6F8oWHZayXdp8U27vprGjJNggCKQcKjB9TEy6J9x8KMiTPX9dKBXcvcSbg9f9Q4n91wBh1Jpt",
  "key10": "3NLSm4d9eE8ivzj5MiMYjzaWAd2nda4ucpGGBqJU7mP3MkTekbnZZEvCwJKFxE4M6TApsdEpsftJ1ve9eXDbkgR9",
  "key11": "3yeJ1LmjPreFNG5md5s2r4yUSqzCgG5AcA1v2wkppkM3KAXfWWrvBiRqWZn1fKNvnqJNzAKRjCN9ZJMm97JsYuuD",
  "key12": "4qLNLfZyd7foswCN6hEJmyMpYs4nw8sQpFiFoQcVSDu5MHWAdBzToc9KpDkpHZdL9QcgE7vMhqeKBdqMua1eDuBJ",
  "key13": "2NPVcXuPqXBdDDLm2uUP2B1DgTLvKCR5oA7mZYgq4VXhHxU4yzz4DiydkBjDfuAP7ztXj3ZWdRUicAyQNYPm72W6",
  "key14": "C5SCCGNjuj8eytpgKZXaeqnAfAvYVoULovu7GEbdEz7qnD2LRwK4MXWLYfGWQWX1FhyfDM55NsRdoAadq2CNPgb",
  "key15": "TnvvJSesoB7uBTG9qjjiUQQT4cYSMEDbYPVsWB454KchJEq1sUNpuGimpn6BA3dtu1brdQQasqiyoMGdabFfN1h",
  "key16": "5CCPipuQ9KFiME4wFWwBXqU5BebMAjEe6bphySJX6Qkh792FFCGxwNraX2f8un9EyWrr95WZ4LzYJWF3KCKfKWnn",
  "key17": "5EnqLYovJRrdXNMTPxN6dYRotCw8hPJLcsacwnhUMehMxTj22QnSLExeSTZNU24REmHomWtyo33DgmUUhg5gbwN3",
  "key18": "66xiLzFT34kGfpBShcHtsi1X2au2uGRdV5AJQgiFjtYVD7hrMBxvHXjYBPmfqasQXQWDR7px7H3J5AJLsxjS5GJe",
  "key19": "LTSZyxxawkdBxMRcfVignoDk7Ecv85TUY2GsMHVtJkwgVb8FoWGT4pFBGiohhL8ZftnfkJAqW83DNiXDAVBovC3",
  "key20": "3xTDenMmfxE7p6yMWdeHmuUGkEeDW1i88U9A4Ruct97368x9dPWdb2pTLLojAVF3XKGnzMqJyBjJdcERSXREBkqQ",
  "key21": "5qaG1zXvxR3H6BnMfRASvy8h3dUGedA7hqEdeNm5H9r66qEnjMEzjB84vuqMrZvU5HUsriyWaT243FxVLEFtR1TX",
  "key22": "4yR4NBLJtZxfJ4UfHmV2aV6zcQuE3Af17gv9b3ygdCz6eHw5vAi7Dw3xWnk7m6Xd9v1fCyBigwRHwyU9iyfmABFa",
  "key23": "5UUQXTNnGEjVWwH91BLotBaU99B4k9q1QwZKzPJycbHvTbcyQxLwpAjo19G56S8te5za3sWZc5eBVfvbrLV4aYJ3",
  "key24": "2LXfEHG2gPibK9EmvXmLHzZuWo2rF9ZVfSKMeatndr4vWRFmaCdxSaNn2BYa5LA4dazDQBiBrZTNF7Fk6m7gtqjh",
  "key25": "5wqG6mCgmbLiezKQGzN3ZH9rz3vxp5h1aeyHdc9rUwYZKcV1fkMd9hgCvw4aP5ycKhrat2JuqdmydNbcgc9VwSsa",
  "key26": "3NY32Dq812D4d7upFBVK88rDGksP97MZA3w75oX6ReXsty6VoSuxRgGiogBxH9VQCXsQpV25iMWgWhu5EEauRuvZ",
  "key27": "5yMbwRm7uGCfeWuEediYuppi6pdog2WjEmJmwoEi2ZkMg6VT5e3QFNqmVsbvqNKkQKCXoqsXKNFqrhZpjhH8ifmX",
  "key28": "22hq5qHCeBGPRGTo8A2TJkYB99Fqx56HZim6H1SzAmW7jTqri2QmvAk6ERx1JaeP3aiGpX3DnAqZk1M8jYPZM5en",
  "key29": "3UvWFhGkYWxQM5MkaNpZdwv3fkuLzJ1zZxTB4pFaua6ZGHs69P3aJxv7rhXP6rmVDQj1DE8UAFJpnqF657AZBQ6t",
  "key30": "3unYUDgD3jzmRPBKuugYnGAWAFyQYZhLm7uSQXGAxE9NyE1fxYrEJvsRQ1iXUcydJWYWAnWbjLwEk7WkJcGRWvHT",
  "key31": "4sEZ2o8L7DZQA6akrdSCqkQGKRTr2vaLZrBsDkeezouvpbQ9fjic1uMJWXbk1JXZA5gzprZt5NeWYZCZH1JQCdP2",
  "key32": "5hAEyBBjxnDvRBpazogkLzPNmhUjRaaES9DQpYn7ZpS6q1eiywGfkKSs42iDkokcxLQYGwsZwWEujQAApbc9xCK9",
  "key33": "2rP4KJTfcXd98eJow4Pv8aGP58xACgw96tYxAjBGb1o6P2pVipQgtmxQiCM9fi2bvDVbwmG39bpDmG11TKH8q3KC"
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
