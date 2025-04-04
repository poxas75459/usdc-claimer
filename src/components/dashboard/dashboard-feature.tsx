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
    "34v7yVf2TUbng2VtmbJGBxEgYHbqCCT99XmzLjJxRsCgyLYjtofaDLw6wUmg5oeJFiBnRkzLmxGkniR7sZwS1qCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UcTkGGLtN3oZoT6bARRgD17MH4h9iAre9GFgT3CtzGZRAViBS1KDQPfzxp6eUxuWQNYJjycE7UXG2T5ACDBYS8k",
  "key1": "4Wk6B7M7dk3qU6tyLFTUt2EhSRR8fGgtcMzkmCxguFkeYZz7LLv383bb9wbxQVwCd6pXbK2GyrBumpsE8qofpQnK",
  "key2": "PTTqqdyNwTpMe2YVAj8ssHBrWQn2sGpQJdavThGNrfyQuuNnqDic189JtYaEkienYroRSKbTbQPdkxc7H9wECau",
  "key3": "4TiaHcbP32paXSHmtUDWREiRw4npREMU8Kpt3u5yqdtSEeLdMiJM7YG4Qw9eq6D2Ak7gHL6keTTYzuzMgKGzpxXK",
  "key4": "HrLsy36hNrtc6fNiu7aGAPG2Ve1GMnDCdMMhKgZ1iUAPEsCYcd64hk5Ds7AQhyb5gDfVtrUnHGHSZkjNeixnCgX",
  "key5": "4Dk7nNBExZ3dadXL4meHnYiAVkyzQtEX3vwoHBiGBB9X3qXnJRWHhVKqooRPwbJL9ZwiTnf3J17LyZgDdseXzFsb",
  "key6": "5qzCfhzYbK1PhdgsAU5oYUg2WyCu5bFH2BDJckNHzw9AGySz1GQWZSVVD19W37uXgZcPsp6r8XB2Z7pAcU9TsViU",
  "key7": "4FVFzSrDs7q6e9YhAWGPxf4Atrgq2CEgtQrsvx5qzxL9atwTjADXJAhihDzsoRbj3D2PJivtf8h92MZjkHBHdeLZ",
  "key8": "4ENru7QomyxXMkEBufbLpzAoWyUd21Ks9aDMQuVmUMQPbMz6TzxVHcqNumzCdaqRWB9SqnXmwq5MRwsK6NJRPU98",
  "key9": "2bBXQ2mxT8GvsYA6WYnjRRi9HVghxtzu4A5xsZC42XMpc4jk5skJYv7Lb43csod328BhZQCeF2CMowq65yGTv4si",
  "key10": "4hZnjR6PegJRWC3LZKwwNooaVqzrisMmjfzDq8wjfsNY1Ybh7ecub4BcaQ5KhFZCDoVJJCq9vdqp8eGQzW2RKpQX",
  "key11": "41Kik8iovYcw31YLLLBHnNbUmR672Zrr7bxUjG8JevKup8GkUAHt9ggSVAjqrSEiZJQuaVT8Lx7dtMtKQHFEFsfK",
  "key12": "5gKVHbGuMbQ6KjXkgSym58PLQLYE9tjf9G3LNBzvY82C2PQbuEUsx8Zs6UeFcT7AgiawLgLVrqX3ftyEvnncyQAc",
  "key13": "3SaBLM8hUgxHueDiTStWJbuB1dTTfn5sDRDHQJJiQgiurLU5cKF5yBf7yaqXTSvifpxxLWtQX34BEnGoU31BJyQp",
  "key14": "3ytt9H3eaEucwnkHJJV864Pb8tYcxbP8XtSEHToY7y5Pz6Hyz9tbwvQNiTsSsgf8mwxv4xnpKaUeJEuB5rXNtD55",
  "key15": "yvtJCCU915AeMtyYEZtX4iahK4vwFxEaQDg4mDAmq9oBSP9nkWKwLGerdgt8cFrzNagikQGd1sbEy6VZ2NRewxX",
  "key16": "56eoi84GcoVNW8Cm95ayqRcpzZo96t5W9NYtF7sMyAnhTrn4S46iuiMorQsCHV4UaCymtG3m4A7LrFLu4LgTFFFE",
  "key17": "3aeXZiWyg7S2kpZHn5wQduJFnuLjxu9bpk5csaisBhCXeVXNdYz4ynsPGSTou3SMARhJFcZS23mWxvQeHdRrkios",
  "key18": "62AeqA9Dn699mx3P8Fy5KhVU2rb8NV8a6bsQMETXf6D6kFqmpxvd2QycsSgzUX8wdEMVj2jAcbhrUYHemLAp5upv",
  "key19": "5CzFWWFUUuHWeKxFWX2nQaPvxX1xoffaRwoNFp1uYdyCkZCp654DvtGrDUgGD8Cv69TzABpTeTvJ5HZW916ByZ5t",
  "key20": "3XTg1jkGYjgj7drhVm95hiTKNxRnyQUHqBuD56PGS8wYe3CR7GjNCWhTW9zMedvGEhSvPdXyLptzEPjj4Umnfzt2",
  "key21": "2n8waNqKET8LgrEHqJWkLSFXabyKWddTDRjGxFTa3yPGsHM6EFdfLRdKBTiHiLa8WTMVpkr4DXBAETVDpTet74mw",
  "key22": "w2RdU1y9adE6cby5JNz2Ack9JEQC2kv2wYfh7JExXmySQdw6mXiNpEwcZwJcSNcaiWnJYXPoG2sj5T6Y1YuJEV2",
  "key23": "2cpBeygstnyPnwxJoReuFXYfFoTJ7bPb3G4BgHy54isrWNX8sFSo5czHYjJaUVk88PjphX1h7hndEHirn9etWAQR",
  "key24": "KUkqsBxALKPeU8383UknspdeZ8wBioJuag16HpZPrKnGXwBaw1aJ3q2LurH4tQ8uG4kLe4et454Rfhh8mAVyWXk",
  "key25": "5BfmvVywFrLv2ADzR3Ue2TpidoHCdo25ZFhFJZ6RvGG4axjbin6aB9nCEWmbgimrdxBQsd6YKgbmMHjNjju7zw7s",
  "key26": "5zNyyrukkBPpSKaG3tig84QnoSuav8mPTRDP9JnUtkZP3NCthrF4DBvDqwjDm4qEgkjkSCDmXZYoP2v9LxcHRH78",
  "key27": "3Y41rp5MykimqSTTNcrPDXBDq9RJsd8bDEiTvqCkkd7LupZZCp94HGWuS8Euta8ejvtLFTa3XkBQYvg5FFHXTz3i",
  "key28": "51zeEYNJbgAF1LmEC2peWg3bXtn34sRdU2BKaok1TMWuxp2aAjUMWX21PuJ5yW1gbBoVVouT5xysNKZMv5K8Asyd",
  "key29": "2RpC7qP5F7LMEBTk89nvg1eCFKiCMYV5Yz8Gb68USJxJQZ5MbdRvfzchyS5grADZYA8SLSJQ4cqNW3WA9Mt79mX8",
  "key30": "VHujB4NxKceWXLmoYfYXyURfhvxfFsULpKeNSJvcGpRYh947AanKV7SSdRGZbpmbKZpqH9bsT5AnTTWJbzcCEg1",
  "key31": "62fy2v2Uk9N5k7mzd54y67uNbgN2GtmZyiVdaZLFCS4amg1RFEz7enRurBqk6ThXbPhEw2jkkvx8DQEPQdN643Ry",
  "key32": "3w571N8SQbRevva2oH1cT2p45uAb9KiKdtxjx9VPcsrfEz1YuNgiM9f9E2hry7ygKfvNbnKFM7AbZAZ2niEU1B51",
  "key33": "3HTxei3riUBdfbfWUTTzGfNuJetAwkxpGHjgCFzuJU42AFW82UTimsxr9bYQdhJJg5DsZuDTKmrHPSf5yqL77n5p",
  "key34": "4G2s2JkEwPWNndsgbkqJkA8ptwu6QuhX7KEE2zGVcgYAWXqtmVA8qu9RLGeh2HscWv8iXWno2JeDHwqnsSV8PstN",
  "key35": "3J1gGeMPye8c2uRo3hUXUTz6aXaDQ2xLZQvzoafJop21z2JvaF1eNhpQrZBgSF5ZSJMPyz6VeEahio6ydA3CCgoT",
  "key36": "5CGs38PcKP15v1AABTUmhN8JgvGgUHv7A1ppswPH7fxgCbhrwmCBfB6bts7R3KmhqTFeC6KEoQvxkgXcFRXKfrvv",
  "key37": "3FqcCwpikjEof5qcNFmRtFcLedHAkztPPEEE3voAGdFkjUTTZLNiwEFAd1MRViHW7bJwQRQPESrhw94m9fJYpgGF",
  "key38": "W6bM7bejMQejPGo2m7HWjbQmpzPNUWMqHX7XxxZorjMZrp721npwFdMtRM2EkpMjJNsBcSYmavYtmrkGgUko79n"
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
