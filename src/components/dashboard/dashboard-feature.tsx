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
    "2vUh567Qt3u1cY7gbQXv218hfhBzwYXpy3qQ97TSxRSESXUiUM7WZqzFvd4fzjz5pAkdkEoZ5qoZX1NFhodYE1Lc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsVyGrvsnwwJAw85s1qWQoMrm245uHJX796pk17xZibGjsWL56XZBnefW5xeHFLFnLeVYX2a7BTbiUUBCytGN6s",
  "key1": "3ZpE5Q7W1oq3McP3J3DKXtDwdKZqvhYfR3t5Yj16y5WXeWrefLV551MriubkNm4XGcv7X9U8jm6XaKYo388Ler6A",
  "key2": "4cP2QFbGu8QXVGBL9ti1ek4jAGBfFHELkPkRuEHf93Uzj6RZzeqTUE53VrDe4STAWpSZC4DsdKfgvst8LLKdiY83",
  "key3": "2nwaPRhXNaqo6PdhbLs3gcJi48S1uEM3qLsUTgTQvRtd8nbDpqvwQkgN3uBaBSvUbt95TrKgJ5ZhRtYTATaTCCff",
  "key4": "3ibifcBakYki5V4MxspuapssBhEhEPCrhGa5boktT9eRcJ6NhemgxfAkiGKyKwKPLn4prSzFatMNDTFME4KZzmVo",
  "key5": "3hBSxbniXzqLKmLFQtqAEin1ZoBh3csitRhXiHppkTwp6uXDKT4EtX7EWZzKykeSKoYhA8EiEehBHxAxFYU8d8FL",
  "key6": "5FViEi31yCNiwtbg4VhQoz3WNyKYZxSZEkdtj4W49DEtbMfrfxyi3GkT5FJLCKmpUpnmLjPczt8Wxj6wTqpADEDY",
  "key7": "52KTjz1dyL7z3f8QwGMxg2ZTtnkBur4rKf6Rq8jeorbmrA6Vjk8oL1516HVZjP7do8x1WyVAr6Tvj9z8y6pz3Tm2",
  "key8": "5Zsv5vRhXVJKmf9AzhXeuv9yWUHhDqPfJxh2GVJvbV14e18vCUpByuC3xfGj4V8hYLesXkkkW1xfHpcuCnwDGuEN",
  "key9": "2nzVATUDJAT1ri8z11fDPh3JuxDiVHj9H31sZGUMcAegwha6giNaFrVshsHqZi6XswwzDxNx6FhVGMwvQtre2QKv",
  "key10": "tJEHGvFhJK54Co4bcistpE312CZufXPdcsK7M72U3Eb2YYp6k1jgHgqyM8EzWXrmZyi861Hg9W2Y1F8WczKXjN6",
  "key11": "62iLonEVwj8UL5enmS46YEjJnDMxa5zFaq84z7FakNcDPbzGh1yQhPnQZmYofZtgYWmcrLqLH2x3cQKdWL9pjk6g",
  "key12": "4pVddiMEub23Rz6x2Dbv9tV5gxQ8Rje1xRjatDW6wx76uCvvhBi7jsDz118KyuvYbCiDJS3L3mVB6gWERgJkouVE",
  "key13": "2GtjfYaB6N6p3Ro2RDiT1FjZGMRfTbVUE1TV1YBM6pB4nM6KELPkgXYHy55CXPe3jp737fQ6ow9JpFmFcPLwLG2C",
  "key14": "pwMpUFwSi3717uh7TkWtAr3bCf68tN3dWp5HWCf8P6pMnNPJZEATrzknAQss6ZM8bYK1xmPuP2NUnwcfxPaDYyL",
  "key15": "4mjubktwaVFz2s5FCSs7vizoaCjXNsdYSJfai7JFgwmGKyXNqTvZNX1EX3rjst2TxJEqzZAQSAc84AiUnW591hn7",
  "key16": "4EsjrubTGwC8YgdAEjEmFcJhJGKRZeHFVduu8PfQanf1Hqfqw6YfXPZuNXQFteNx9wzQCJoXhd1AA3eXf1XMajUW",
  "key17": "4kNrbS7h3fCgTxgv2dtKB5LmRGHV3xzjtxzQdvskdpU7bGE1kSDTjV2dDRB67Ef6qEu5sbM8BhbPfY4EJqjp7RkB",
  "key18": "65gX51P4WQRkMXHZcXga3A7cQL82dCvTtoEpzYkxYRBRqMEGedy6JYf3iUBVobdMVQqKrycRg5o7rJ8X4JybMe5L",
  "key19": "2XMKbvZR7fHgyHeQKZW5buFKPpfCSyc8B7KFeyadbms2R6aX96ceB4qtaVz7fvwXBYuifAqd5zX496rjTE7rHgiC",
  "key20": "5PXtXHH9uYinzUnSxRakKtwz2FBa8BpPZuBWiVwCXMSvUDWi5x8MgWvZHnWoDy7u9sXLF9h82VRavsupUuNSrKPR",
  "key21": "417w1JXMT5P3M39g1UVuayzKQwy4DVEHAKymbCTofrPNSA9t2DB2AW5ad3bSAPRN3zWN2K6ZfTHyqWM8Y7Uj5AMd",
  "key22": "54yi1iorWL48Ztp5mdkSnhLQWD9i1x7qSUuhxiGgGgHGNmbNkWYDMb95zz9k3FanoyqjHTNYxZZTPvufRn9LQZ3e",
  "key23": "2fhdB23SpVVjwBa3LbV2Y4WHoBFrnQNjyMtxqSj7YiYgHrScgfTZipj9Aj8UqQmJjAzYVrMHkvk1sGjWrjMyhLbj",
  "key24": "fUD5nYXqmNBMHBCrkoXei2KXS9LJbG5AXD7sG1APVUMLjFJ8SVYvHcTHJ6j1YCwHLDe826aDQ2tKeW9y3zD6u6K",
  "key25": "2JqPDGv9CUUSR3hWtUZosiDC9yVuxLf598peijk1oGsVQBGSgxAMEyEZFigqigjXNdV8sHB5L8iyHjAmZc4CdPsW",
  "key26": "RWBjoVwnP3FDVJcdpTYb5Sx3fMr4c3npwX8yrvaHBwtAqi7XPfFS7acQKYdrwDMBbaGBfSh1ybmjaXfLtaDBHVu",
  "key27": "5yV7zegDHq2Rc4X2g1Gc4TWKLFriXykSrhyuvfxgSaJoar6iwLnmfX9e4HB4AXaAhzpoAAhF1SvYATjRvAhCYDQo",
  "key28": "PqPHUwHiAC1WXBvFYYS1SYyPA8dbVACCkGGWYXzADdmUEQYAdVkHizxEFvRiaYdmfME2ArfYYLz31NGQxCiTHsR",
  "key29": "5yAqnJ8kT2YvBBeLPCxErKujwvDFbwyE1sA4NHz3DP9Mx4tCy1YGnp7HDd6cbB2DbwGv17XNssdPMqchXrP1fbXp",
  "key30": "EskAPdJTdcUiipq1NpaSd7rQW1VFpmLUdiXMbFBxk2RuygqTY2Ly6EdDfoGVQRT6MKBx81nvzbpvtAix869fpwt",
  "key31": "4bra7WHn3rvNj4bLxJeESh1N2VBJJdA6AHLUswRAozKMAzA2ijaBDStVm5dpAD5fTfjTsXf4PPqKy9uzqNtPT9to",
  "key32": "4aR6PZpWEsn2Y5mm848kvE6ozGRmxfnvRH1TW4hk4EMRTWMqvD4J3THif4JYT9X5xiW1Kxb4KXpSLFrHXCkr8cCF",
  "key33": "3519rTvvB7zktqjsjnWAa5PE69UvZ1ictrwqCYuupw7eVo1cAegpf4WzN6jpU1qMte5okvvRJCmFq6jR41FWVVTq",
  "key34": "3qhMdcbVmg3ZSXoyV1aRDcrzYizJSADYngp2NesWRUpGKs6MEf9AfvPeHuAbeskUFW89bvrwQZE4PZxYRzqcsCQ7",
  "key35": "358sNEGbuoMBh3VzLV7oUEoBeTu2GptW4U249yYD7m4WB6D2duzLUa4EFHs4g4MktTHqvmxarf1DmFyaPLLTfjSe",
  "key36": "eYCXATwsFHXttWKEJRcP6HKBzFSoNRpKdeqQAVdot3KPU3vE4msd87v68ZffNBewm6MSnqGBB47rHroFBw6LrpM",
  "key37": "YpEJ5ZNuPKpCRHMkiZvkwjdbEXK1uh1YPh385zui2ZQtiSjmAddfo8J1rCk3jCNVpBbGMDFxdCeY7n79PPdzBth",
  "key38": "5crRrT5gpwn7Pnnc8argZqJ3mdLZY6g1VLK1YZgQnNk7mWmTiwssXymPD8rcMB924uerKBtqX2VcLMn6HdXpKiBx",
  "key39": "5TFxyNbQaeH3AFGYhz6SoNCRe7pjj4PztcYFx7VEdMnAHsfH7bWY9ev79sTuNyqnz5BULSQJeqpQapJUKUSRf2s4",
  "key40": "62B1bDX1FkKYwnkTMcPDtuoooncGGHN3XqxG6SZj5D41ceYDicxAT1jfVGEVaKco3hKJX58AmmTPtas89YXtUu64"
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
