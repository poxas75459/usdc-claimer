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
    "5ZarSmzQSLWGBE17an2Wee6PUbKpGVfqdT7CEB7oxfVcmHGxQbPww3YZRrKa4Qk2s1duCf6rwDyhSwZ7y46dWR6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebG59xGe9Wq6jCXPxMjKtmcJ9gAz83VwBB1e7ppau9Z8QfXddhx1sskZj1LsTXW41dfF5s9w6Xa29iWv8UBJ2Y6",
  "key1": "4aFRfqWNzqYUyar8u5kHubq1WPZ7emwqs3qgLhuwrSW9ojSQmhJCZV1wtqJLKCTCBkMN53JTDpWGTaFZW77BVXUZ",
  "key2": "5TAWvKcj38BfN9zir7Br1hSYbkb7UEgxTuKfx1y9QBm23oN4ciDMw3KFZvqVsqVSW3BUhV3hJeCTs8NxRsLFYKaR",
  "key3": "28LBN8we2nFJ2dW7TjP7rGYNqZFTaxMZH3NmCeGcdoMTnjF2VeL247xGz9xzXkviNE8M7eFCS6c4HLGD3WPsfg9r",
  "key4": "3CLDiZBuGVx7FzZi4fqAsGQNtsTc9b6ixN9fGvbfMnLrXV4BbSRNi1YM5Qi11KwGinutJNa2ZFNNu5Jjj8NUJLTP",
  "key5": "56GkUPT9Q7dPdkG5dvXPxUDPfh9gdaGaQFkApZk2xtwnNVoX8onfMsZT5f9wRx2iurbvEmT5MrKo1diDA6edjU4Y",
  "key6": "4khVtuxtKXMih7cR7Z3G3UU813zjwNVXLh2iNRaFEAHvAemQEmZsaoS2e7yXWc46hGjatSGiV7Y3xx6z7GA88wTa",
  "key7": "36LBwPs4vTuiTd6t7fyaYZN8XFzRdMj3onwjHst5oeUvE5b1hBU1QFeC8vDscWELnS5uFQdQ6FyQ1KtHCFiyowwh",
  "key8": "Kg4fMGz5eD4PuZRYjudHSq5RxWy8gGvjNH5aHJeeQJoNPvp4TAAnuZAKFsddquppLmzVkQijwTttSaRhHXfKQ8z",
  "key9": "2484uX6i4FZAmwB9NsDQB8ywMTzMaAKVw2tK4yk227hxvu4EtkbrMBAg36WWbkQsugpertmZcsWTaJ4cW5vMLUHu",
  "key10": "2Yngn2cJdQ4Tfvs6C2V47WEtqCXNXx9TdZXYUh5ZHn8yJwU6fxGL2JgwduZ5QY9jzwwsHz4jB8HumFpvh911PqUn",
  "key11": "59QdS2A1u4wXUdC66RyyWSuxwzAHSj3qkTn9m8kPBZmjht1bMTdi3tfQ88Y6USAKwtvVhimzmcMeMnD6SLEG1jgp",
  "key12": "zAwNZrQvAai7kwFS9rp1yQQCESd9sryWMaPwL8RiNoU2n4b4oGcefXfEaG9tuwwiABJi6UxK55iNGVMLp1P5aH6",
  "key13": "5HNhXEYag5HEYA3Kecj2bRNi4vvvd3kkvvyB8uiqBGUfobZU9XVjsYCtc3aaRSHzbLf7evccPamrUEqjfcmUwn6b",
  "key14": "5ehzwdKsMTpyEPayLMJKwcVLLQVekbKqKFJ7k1vzwqMGaJN2RqEfZSH53SV1G1Na3ttMbHtfZVHuaxmBDhxfE7nQ",
  "key15": "4idNSYspr1YYQm8FVRyUeTspUFnjpLa1CFN33ayUKzL6NTdChzDj6hJqFV8i3y2nwJ1hwdHBvDLB44WJPHLyJcS8",
  "key16": "23qQZVixgmmXpY1Mo78pSUyfdKGZyr2BxHfUf5mJznzpRs7PjytD4DZAxwXLKquXrXVE8ka4wB82AG3E4MUzvz2G",
  "key17": "2Cjgahd4CqJb3uWjDce1bTnAcKfMaHKFZ1NDHuNgdLTYGK6NT1js655pnaEkrzeQwCb1FyXbP4GFETqDzd2kM6X4",
  "key18": "3sYf3AmYAZjt74ezJAN2zrsLkbiSRtrG7bZ5PchyFkRdNQXnmZ1ByKfdUabmCPDZpxqWFg7VTxDxv1tyQPxjrS55",
  "key19": "3U6thnYTgcxCewvdREhaR3PVYmijgqC9rSAN4dFKrmp9YkhuPZGVQgiFje79fDZqau5P4NDah1x9uUtnAZYahueH",
  "key20": "E5SyesGLcAneFqq3DP6eiuk9suunEnDYPTYsS3QoJ8mdYQzfji6ntYRxVdmvn4mCLdvm1yVC7HUTS62oJcPe6DP",
  "key21": "yVj9F3Cac4cHrEQL3KJQtaGpS6y7ND5WRD4w4HNBUFgHrJuYjoXGNnuQQPS3XxPQ1pwiEsvYcsMpPGgn4PCaeyD",
  "key22": "2gXp5K4oT4xVk7kjUsWvuL6vNoPAgkFEaozGudAmkY6sg1tPdYKRsnm1pqe3t7p6gSVYWhxjmTsWKWJgcBEG9kHE",
  "key23": "fUCRpxJ1rmx23wELmUrsdCg8urEok9SFZowoEskxQsoXB1GzHRdH3twWVzV6uu4DyDeMSJnTTj1qHrAXDbkXVkK",
  "key24": "3FkSCgRLwVMB1DRoqLi9Wsna6Mrc8XUQCZQhUt38PU3oR4JsLtKgQo1V3WsSU9rSGQDM9gxGXLh1SGZmQYZxuxZh",
  "key25": "2Jorp34QtDFMWeQziVnKHMevphz9vge56QGRoKwgaJ1Q9KJYiyVqMNQbLi8Q1YdWXjTbfUWmszpyn1J1WNB1kRTr",
  "key26": "4WLKEjXYCjX5hfxHjnFASdSbgbSZqgnYANktw6mzX4s7Y1e78wSGTETj5SHikrSckscbGCiBbE2kQw8NNJMVxiTj",
  "key27": "vHYc5f7mSDeit7XYzaeZcP1VRdQaqq2ftxycU6jMsUUKC3XbKhnh5CMyT5vttoGxXGeG6EdiafG5bX9zbHMSexm",
  "key28": "2oXTqE9ZbxePu1n53bNT5mAwRV8TkfKHDtAvAKj8geph4LUtRECGgGkmxRWqFSs41S6XYwwxRYJ5og6u6Z3SFTWo",
  "key29": "gssWxecqXc6ZBySamH8WKVHQyfqaVBcHn7jt4yjJofwNy4bVR2vbbaXNpKSfdyXhJnBuz3bCBFDf7C7pUu5XnVM",
  "key30": "7CHD9rdSjFoQ1Ho8G916U7oS7ioLFgKxDQKwH1RB9kDyE82wwzfr7RSUYSYPB2QquajBh1rZLpkMECmqREhMoVk",
  "key31": "kS4XFuLqKLBKR52hA5RVWicBCMfxo3KEtfHx3P1rGzPGho27fJJzmMzpp8Dh1H5PwFe9vpZza3XTmeVtFMVhTC8",
  "key32": "4gD6QoXnCNtsQ4oJCVBLvmLZV6m4GtDXdvQyqcKazHR6CsHHsL2h1VSKFYUWKXSDYKvFfg9KK4aA6TXRR7Ysy4pZ",
  "key33": "RFTwFqcdskFmRWewifi4THoicvUXguK8572RExBGRGo9VUmFB1FVaUejcD6KRAX2FxV2KAomT6zx7coLRk9Dx8J",
  "key34": "5HSBbuQj3bu2vSpZsu7Ua1UQya1ahLSFNHu6LKhJPt5gsPzHs6afi1GZ3jtZzsLeoaP8CDc5nLRArqBzZZAhnkJG",
  "key35": "2DKSkfde3pAK823gkDMzNQHPJNt5HK3CweU1k38RL3MFEJ29rbVo56kiWym5Z2iHBVCMc7dddAvz3UgFe4K3uVHp",
  "key36": "RzjJSxbNwGzeWGdpu81CccYMxuSxhW2XGpEfry36a17uBC1w98aa6CncoqozLgHEqjZQMrYA4ppP5vaEG7odaqi",
  "key37": "SjGY8b3Bmi2wnjqgKAt4BRQ79CApSBTizkF3J9KJe1MVW57UQvfdW12AokC9b9aRedWn1QfAZfyvh6K3AyHQyRr",
  "key38": "4WsigpoXM7h8bTaUAJPyzaotDyM5P7dRHp9FPtXPVioTW7Cdu43MWbSAeMXRcPPpesqsYsZYjcuTD3C9xdi8G3Hd",
  "key39": "4D4dEGPu2F3k7vagvU37k8FGKFxskJ5uft5zCDPLw1J6bDoJRWEqNsgwoosFRMsD5rKvnxsY3bDcTxk4QRRTU3Qp",
  "key40": "5FEosP2oCajLPaGemB9zqczR9YfMCNMgDEBBAbwKkU6KUQjrGe2kCiZTKcjuyZAZigWQ4DeYDrrMFcWjJU1LszRq",
  "key41": "57HxZUqhdaHcNV4o4FeNziUUBU8Uj84Utj7AgsWvdHPpnKQF3nSmZ9uo5728JcX22TSrSPMZMcfZuhVtvhmP4hQb",
  "key42": "dyDubLYxmMeDrtBeXjKjyDDFhjMg2x3dTkLexsk29CC2kENKf2LUTbmSkEn2ddV97DVUqvMW5Cbds8jTW9N631s",
  "key43": "3fiNweRPpBaFV7e29HmHXax62SgwVXCHh7BYpqKENRCm1y3yytYx5K3tQKorHStWhmrGAHnc8tY4a2m5MhoYkgb5",
  "key44": "2h6qEmPDYZdEHfynTak3hZktRYMriLjWn9MApzJhK62uTwzezb9D3Nji9Qk4EXEria25BUZtt48RRyTCXDg577Xt",
  "key45": "xp63eN86YmZ6DDM4TeiSpA8PUchDpaanQqPcrhJPvBNGq62iiW56co2fBjijALN5JAHyzDmYbvzqvDvCq7xQgVZ"
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
