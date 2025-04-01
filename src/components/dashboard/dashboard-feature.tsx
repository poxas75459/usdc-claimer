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
    "2sA1c7xHKesnCQpEqoN6xSCQvMYfi4eKtQpcW47ZofpmQmX7gZWwdZrqVXj33sdJ3SDAY6x1CfxWQYgwYbE9xLCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hbHyt45kHmRE6WXbboUfzDBbjjXCR84ruD1YvFhvgNWZwrzxsuo34xmgZkXm4331x2mzMdzeeVAPP2BfH1Y2vpC",
  "key1": "5RoYH7tThZydh1yiJWNgMBngjFbYttf8pApjougQdw8fYgxWzMkUVnHCF8bgLgXvrvJLivqSee3N5X6QyCcfsHbB",
  "key2": "668jgc3HLXgehVJUK7VzGNF6CjdcXmGu3DpECQybCKUz9JcEGJKkqgurRT3ChzHvEE7c2jSFnPY6DjUs2nNEPPVU",
  "key3": "C724nCbaPgMgi5iGNyhUi8CiPr3yeN7xsYsP6DBUk8q3wKPxa8zVX37RYcXakPCxLhHvASkNHKHU91fudj6TGt5",
  "key4": "34GKcYsRa1LfhweL2NA1cHHkK86dSoF8y3YJRWgx3gkRLydL9yAMtGNWNz9L2tnhFTCW266hGdzgYYsoaqPTtuZr",
  "key5": "36nS1EcuPcmnRu7u8TtphzsbWnGTACcyohpfMaX8szx3pgwhizrQucg3GDbikbjLt7dojjSMAtjq87c6mSRZr3dz",
  "key6": "3GVCci3zvXtUeY56kfG7zWdacvHAjyo8X3oSXY9NJayKTXzQLQo3cbuW91eHSCmvdESJFJqZd8nz3ir3k5Zh5exu",
  "key7": "5Te5vS16EYh2VfMTbDG9JBSnb6cQQF5zhrXjDr3MNqzM3qP9dzfwGjKAPL4FBxDu7xhZPBMf5tb5zpzwPYt818T6",
  "key8": "5WCK5QCoD3k9fPxUNTybMvvjQQNQwJPUowu9MfsDxzT2iQTGYRatUQTRb3tjPM1TEsnjHsLm2aTD466AacMh8KVH",
  "key9": "5NRWDPJgQ7jUjiSMookXpUDd4jnDV5xqkgFUw1bR8QSH7jvvFLH9XNqzM9nNmKBSo52AQV8NvDNvZ2TbcXc2rqNt",
  "key10": "5KtHXqHq7EUuYaxMHifmBnTmBVZemDSSZxaWFrZrxC8cpBsrViJVVpqcBWpRugE32zd8CPF13S5tsE9Ww4unw6cW",
  "key11": "3LPrn9oFuWpKf16rP6GakcdepRQKtypAvj3tGmgZNxeVKmZPgJipTyCwwbEhkLxNrnwM7mSGumFtyRdh7g1X26Gw",
  "key12": "4n192sfNBNUmTuP2SBZBhbmxsZ1fwpzQGut74FJF9CXJd4QLubPZGdrsNnZGkc4e6tBKCYuHaSPopVwSCiKXUNZ5",
  "key13": "5mRVR8gpnMLXbhp6VGvjH2schKFcQMaNL51tvD7pZuCkHXLDcmAVjJTZVAoqwJUu66utXrgffijquDGPko3RchfD",
  "key14": "4f38xzjp7j5icoWtoKVNidHjk53Bp5r4vi5Yq5QipN397PLiLQjzjXhFFfkxc7JBmSYQwtp9m3T6EdmdkrbtZLAL",
  "key15": "2uwMRLUXJ4yq6ZSkCsd7aP9pJ4L2aXeqmHnJd5gqXMnw2gEcwyCY9T4KNNcnL5K3KpTnFZb2FxfZVoieXtD5Zfe9",
  "key16": "AM533eDJt3dkpB1BAVBPEx2bK6CsUaxVxCkGDJXHm9yeUzpXZin9Wa3un46oDx11kKQRBzid9kBtW9UF3w9Y8Uj",
  "key17": "3DRt7zdh6e23NATESTL8GZGR429VEKDY7WEMWg1DMgbaG7sFQTKATMjVkdzUpdm1d47ph54jvYRpxy16dcqD5tdf",
  "key18": "3kjfG3VaJQGfqQw2tNm3FbwytoNqL2UihjZA9KKpsyuERPk8DP7QwM8dBxqLEMEvpauhwX1HZVgoctkeEx2qAEwG",
  "key19": "28Aa9tqUSUvAGbPX4FY8k74RQV7Zo2XQVJ3dYsfYuuquP7Cxsm6jhVQVtRP84tmdgpT4bDuCWDG1VZjnqE7c2pUv",
  "key20": "5cnnFczEvRLyPZ7p6hiUcZiWiEWBygT9ZPBN8GPK5qfatTrCyJxsiAEctNfJD2HqwBFtM9rb6FjZJj8ZTxQ5fDjv",
  "key21": "54e1Qsgr6bzUBX8tsQDa1J68zYNKQbCimtoEEu8mTVDuesfvvgyxu8bD7MxJvxVfohLviToVTuzobaaQ3MX1fEh",
  "key22": "Em9s1S4hjdjq9FYtBYoshHW4bgTpurwRP3v1aNrVpLcn49F6KrsfxrY4VgLE8xdaFFZApYQnFJKANmyeE6B5Baj",
  "key23": "5kmgEUeCC8RsNdTFChARgsbrDas97YewCWPhNQBTp58j69YF2PPYhPGaR9iPMWAzGdHcFHGUhcE3BBmSp5vTXswG",
  "key24": "FPJ33tCndtBrTTdvhuPcRo5CL68oiyZH1fURQ1t9MKWXHomgKqK9yShHcUCoankjQSLD1oairZgJBMe7mPs8aCf"
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
