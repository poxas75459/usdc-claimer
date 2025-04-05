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
    "32LZfo9oeE8QDTSq6FQ7ShVqv2zMx6JtWaQnRJHtCanrtYM2KNL4MZDkXvQKVe9dJ1weQan323xZSnQYJfQoNj9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37YKMX6UN8HU4qP7hoxxnge4w4Bovu2UntujxVYYqaPiBfQtGYXYgU2iuknr9FZuXZTW8bCTe8r9Lfxz6BhKyaT6",
  "key1": "5u6DaTS8WH1brda8MmVMFZCMdmie8ioAa2YicpDxq7Za3cG86gf9oQtsEHB4xJLi1nKp3TGcwhNkmoE8L4C9KwKs",
  "key2": "4pmpusURt3SGh93prSyZ2ocgsYGcN9N8ByfmE92ra7WxAZ1VbkJfTd7W5Ua8uF7wkDL4Ez1sYxn6D4PMxv1wZpbu",
  "key3": "2Gsb53oeX5N22xAsgbd6MageDuu379cGgUFMejV6xV7eeZ1VEyMJeSMNmuDKnpP3QhD3UMycfKgab49XZwrTafvU",
  "key4": "5nvtbBWbj4TEbgMzn9ypYryxF5GZodx3H8JS1MUVPZio8gNhsoZPdj7KXo6WtkBspCLCT5FdpSPGUr73dwxktX1K",
  "key5": "4eU3fcrTNf8wuY4M84L16irSgZz6zz1bjiYmxWDBDbVtw3MkrwL3KV8e1eTqCVKkTt4NrcGxLC7MURh7r8YGWKdQ",
  "key6": "3M8HUt5iBbc42Z1YXNiAU6rurKW2Q7NEGUsNhqa61k3iSyEB9dWqqv6EMF6u9BN3N5fNLMcQ26y4iobc5iXBwMV5",
  "key7": "4gbjGHnL52fQLRhC9SaKzUC21yLXUNBMyWtBWY128voKvM9vMsLrDoNuGigsWeGByuU2fA8cQCc1JkgavS7uX55e",
  "key8": "3oyjzYZD9itno3ir2Qe5enjEgHck4j6eVpKTrcmXSKBPGk8WNyyNjCQkssKExpYcxYSzCnRHhxNavvDyJmQiirb9",
  "key9": "2y6mPWC5Sp9ViiNTykCDTnghYykjTW42Luuw3ERDpiXT5SpoNSo8jqF11S9pQKwtrbCDkYySfowHmHEGFghm95up",
  "key10": "5WNvhYoBiuvfgbdJy8WaWNJvUz1WR5oz16aCZ8xcFhDvq8U1AZJZKSFPLJ6pMEkAVGKv8eiSUsU4k3Jrvg1YXgeM",
  "key11": "2NZgQxppQon8XUeGdv8kJi3gj6h5f3TsfTCrUkTj4sp6u4wM9EB7m8oRtQpXi4bXH8VvQyK3V1Ykcrmm2ByVjrgc",
  "key12": "2TR2hJgkgLgvw33qZx4oBPZVJ7BnUbmnaF4WWRHTtQfv5ChQVqKh2U8ztdsgX6guESwxDVL3ftAgcfCXo4hdw5fK",
  "key13": "2xmGgD1A4m4NzxSUvb23c6Qb1ukqDkHiV33xw2mg4XY5oJemHs6UQ4sPAFrvURPE2SSsGbWvG4XXx3Sbpf3q6SfL",
  "key14": "5hDr3mUrmMEMrKZcm6HodbnDrvfj2kbUdzY4iSXfYPP6zcGGCZm5VpZLW22BW3kXzAjYFrVDZh56thS6t3W3NprY",
  "key15": "scywfsbgKtbDJD7WDYQAMdGPuyVUhey8m5ALdVub3tP9TUhSVSWSfADQ2QWvh1uKeKRcStrRXDcA98RynNJkNVW",
  "key16": "4A4gYsyE3cqYgSbrZZLyBqY74Kkq6d3De2DkY86S2pjHvKpoCFBJAQrkB38CYNqT9VHrxz17Yrp2MxEo8AsFjLzq",
  "key17": "4TNfwHrTLvo7VevdvA7TvUe73wb2mRQ7TYSK9QKna4D43Eheg9j1NJ7WPfHXDHpWauSp2dzaYd1N4ujatgAKiR7b",
  "key18": "3re8zkAoy5KaksvcTMP2UVQumQee46FUeuWGRErM48A4MmBnY2s4jGXYjApKDbMvWJgcEoC3XKiSmyr1wG7ofFmb",
  "key19": "2G3p2xtu6VMLg6var5CPPCF7QVpmTHr367cNDAmhHCn4CnSqjphmN4FV2dvE4rWJ4BwQv5TagzwXJvpYnuLoNmx5",
  "key20": "5eGAd9aGof6gCgERZgNFpd5USPptZkqtK3MZrNmxHVJH6Hf9p9sMic5v6i36dcs7rr4ZKcSZXDAKPFpGLyTPXmKW",
  "key21": "3z53CRLeF48PBX6VQQSuXRfoSAb2jmdxJ1Mm3aRNB1F8LgiWCKoFtQf9vincno6JkDHM7Gspwqb6kfiVMoreLdbp",
  "key22": "35RJ8msKVxBrTqSxsBScUCQcKM5a7gm8zajSaihPBzxMm3GvmWbNrpGYhghpRn4NdWbS9fCi286hLCcXyt9KbgtU",
  "key23": "3NpwvQ2mP5dF4i1TszbjYE7QWd3U7N8C8wGDzqNpwe4QYmgN3Sg4ytp77hsWvG4WmXPwf2Jx74nHtcpVW49s6acK",
  "key24": "3b4tQuxZA2ncitCWnkcWv2WHSfiN8DEVrHcQBGm8sJJbMSdaBvuARttUqyhZ4Qk8nyijzXqr3jvsqxNAGXApdFAN",
  "key25": "4gnvFJMaMfKW6VYxz7fcTEyG1gCDsLtJzvvpFWD3cHgSK3H2TXGHo4sUUfPSRbFR67eRME9kjcgJgos68uQY7isn",
  "key26": "w4ui2mudexnxrJFa2bPX7pXvVAQM8XJCgeF2tRPyB2icPrNTRoCxC9SyUxkWaL5eFmokeCDFHsxV5ZYhfv6hxkq",
  "key27": "2KKpN8jPNDoHGWYYSGPnF2TeVbFXh3WZe8VgSBL3982AVconp6mEPbyAGFkUCBDC4U6UZMKMWWfB9zVCWsvDVPfM",
  "key28": "44P5co5y1wc1G14sX4szovdbsRwVMSrfvriSxK3FvTX4cw1SEUyrPG6dkC624EooZPPpn7XogNibRZPSyC9FxHge",
  "key29": "2vR3gTFjcNb3xkyeUZzShQiMnaYnb3eXG7tk775mfZ9aYM75RMVXiuCZ3L8gL66ajftabcujQC1bwoMorK4e47Bn",
  "key30": "KMKBwgP6tJpceE9sTjVoi5FTbfVLVZWfLMbrUspGcW9eTYd4rVpZE7sFHcaKqQNynGGMxFWuyC8ok9Zzy8MtGfY",
  "key31": "4WxNB2GuYaHKN2Zs3RAsD6Xj1L98j77FxqSZ5RYmaj3tqZDhbmejYn5NBVz9xei3W5T4C9Pvg32AARAesU1T52ca",
  "key32": "2JVBrHbjzxo5uk8MetJ3cVxbB7yswcBUyuAKSxkccCzVDR4bRiBAgNEjYciHaViBZK8gQdyV4B2ZYrGNa6oM1mo6",
  "key33": "4675ASpsN4JkAmfH9ECWrCzxDWQvJWxkTHkHq3zLYdSnwcgEDNFLAHkZLwVaYd5tcWQjBf7RZnfr2h6D4fJpweUA",
  "key34": "2tFypJhE6neMKv9jTpt4zbL8tm1of4hWtTJwjRqokYMwLhanaMFxmDmBCatvLfZ8roVKryr245WHp7WzKB5KbfNT",
  "key35": "owooBdf3iLNvz1c8kktsw3w17p4Zf98A5CSH3dftQFBAArQtcY1kHg3kkdGSfjR4NUJzr5fUF3DKH4nTkvmnRZY",
  "key36": "4iQtU8XMNexWwPTYAYo8GNL2esg7NAvym5wz3es7kFDbaUBJoRwkSneWo8DtrY3YFfEzy3isgLFb48F99BugnRoB",
  "key37": "ZbXeBad6AMTw1K2mKkQ2f9UW8QtpSd6TwHyzCQBA55sNuZnjix2S57bk3ESuEAaM2hcKvWygLyBjQJMpUvsVZPh",
  "key38": "5FHRemrkA7ePxnohyY4c9URhXHkCBF3oL9QbawZVSbXEjJFUz3MwoagZtLEN83a3SpnK2wns3Hv6qhGDTpf1Tir7",
  "key39": "2eZGLQ6kSv8HWFBp6TnW4AXrJXVXvNN6E6pt6S5JdgXkNJJ4GuA6gQKd7WKr9NKjnwxRxcA4jrWJ53RgGekQ9Qfx",
  "key40": "4jFKPPdjA5dKPxxaMXQ9aCk4X4EUUM18wmGcnE96WnMeeQHg15MotAGUAx8UNgQbpeDSNHkdUuRL8fcSHFDZhU62",
  "key41": "5w78FWHxLPrx5mrJDPoZqMYuKWLQ6aHYio8Mv6ZBW8ybZN9PfjagNpKUgDnqkZFP9J3P58iYJRifpEXm6igiDZpL",
  "key42": "2ngF9R6ygHGrMgmqfSchtw4nCYPRirtqdnmimLJY5t9mroPfAESJXrfkQA8YwsdgjaDB1Rdb9msh1nXNjm7Gj8pD",
  "key43": "5yXJhN1j2zSRzAC7Zx7BRvnFY8PzQcYahBawBLPZTMxcaf4s94WLHQMkVW3FE89R1ibPMFFR3dm68FZmR8tVkb8S",
  "key44": "4FmdB8CtJrmWzmsfpyHz3r1Q9vRHHjD633j57RtindQdbaxgeC1JqNAtmt6tXyZb27oiuLQzUL87q14eDE4Uaytk",
  "key45": "56fVinDfK8f5j5KDQF5P89Q1nHNHWkRUbJmwVat1Ymi6LiiTJPLKJdndLfNGnATJ9hszt3N451foHjjh6G3CCtQe",
  "key46": "3tqskXq572iHvqay89tykqcoDUkfBjRHbVFCjazoQoupri8adydgBxpd8en9wCLcUjB42HDQyHU5Wgq6sDsE7sSm",
  "key47": "5JPacChRKVKJM3i9wd7Jfk1jDPZKeTgnjoBo2tW94G6Rg6ii38e8PradH8DDBtzhoGG8j25HVaY5ZSPL9ZbrduPv",
  "key48": "23W3d4P2F46FhC6fD9VQJgRjUYHTU8D8KsPzc3312W934xDEZsJx2qzHp5aMtuRqdUm4oxLMkvTsESnFiUSFwGCY"
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
