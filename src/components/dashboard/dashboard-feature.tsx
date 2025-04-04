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
    "2dnnHxjHoMtY9QXUCNM5vqhxoT6w8ncVGkmTLEr9RihzzHfzwfFTj6jUmNgfvLap85nfGFexAjKPYLDhDDoicwyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DAoD2PCXMRCWkPPr6Y5rf5iiwdc8XSVG5ZLJyoyhuKFTMapDd8UAnh1kJovxaRkNh83qE37ZiRpVyGpw6RNHvNz",
  "key1": "5vthCCcsCy6BmW6wkJXgGdTw2qCak7k6aUFqDG1QrL9cboMUmL4UXkrtj8abrie9FVw4ZyYRNpgtmE1hPBC8crmq",
  "key2": "4FLZ3nQDGSefhwYrqP6UfNJ4dWXDxq74DuBEdS6eo3iNikjeD1q7LCTz3g6qNJaXQqQMwob9MEWZoFYsZtAdBG52",
  "key3": "5Aqk3Sr79CMDdgZ8Ax3iTywiGD7xs5Xtm5KuPV2AN7PSztGyJ6Tgxfcx7DLCiSMBjH78RTTk3HvfsDMSyNeNoV7M",
  "key4": "5Y8u3HviZz6FMyE2J9c2zWvCnrEs7CPzTRn4VSSSXdiq2rXdS1TUoTdyM8jNGD2iue2V4Shg7dU1uFWHpLGY5e1N",
  "key5": "54AUCbgJ7F3HfpQjm5JMakw24YLQinFKnEZVxedESVsvrD2YW6BMwhac1HpAVErqtd3hkeNh9joy3m8wKtUY2H3N",
  "key6": "3ALVATVFetjoDfrcxYU1eTD31TVJVmJbVhYwEsCu14CiBTBaCDTRypdRJrz3HhGgF2DT2Z1bzcqm84hXtqBugA7X",
  "key7": "4oU29srXwSrFDdtqVvEaR4drmp1re46y5jbK8xJRURk8kgwtgB57xt3dv35fEMtKMeyQ4XReyn4Ny2aHEL8oPuaa",
  "key8": "42MLcxoMUcH2BQtVqZ9aZbVXmr7rZx5fLmpxpJnH7pvEUEJN4gAhihMU6T5P5EyUtrKGdm5bcyWSfBDe8iad9BQR",
  "key9": "3SahHeuETgaETtCfg9x8sVvxfcEjNSPoG2BepRd7ZjWUQVmeHgqxrDjn9y3zapo6ougFWZckyZfjkFA1ABwatnJ4",
  "key10": "54VTAT4Nd24rUX1gpfy9zStqPeUqRibswpMmJfuMwghtmmMCiJo8eabNwk6dF2KzAS7Y2KXcVFrTmaX8Q28UiZ12",
  "key11": "4QsnVxNwsGi3QHjGCXB4vg7DxUZmcKXE9je89RXmng5gCrNUMYzpXrvYdf9AsLDpyaR58Ly6YF4hPb8XQ7ciudLg",
  "key12": "3XPm846mCxiSF7BEFE8wwuCQb2eZ2dV3RGDvVg6VGrgufcGLQk4R9mUo4XAqLC7DCRABXTsHknD6anktqDZCJ27j",
  "key13": "rf6JDattzrzH99GJk19znRCWqAzgud7iEQX8pYspWvNKd21nk1NvQFDia9vY8EA9G6nEAuc6sR4adccPRFrMdcV",
  "key14": "H1xU1ap8E6tsNV9nJ2tjzdQdcL2pE8Evy9NfGxFGejGscDcsPqswpcLGSgXFMKDJFVipTBrX43rGCmcqDWGCAV6",
  "key15": "5XCpJ8LTgzBoevZYeqBnWuENcehTGJmtywkubykgKvDFxapkz1WMq1HKpLTYFiVQZ35ZS1tAcjXwVNYzSpKvbURt",
  "key16": "zrLRWjbgX2eJr7b8LRo6zUerTtwQ7oeLKyXSFnsovjtk9MVn48MZwfyyJ4h3qrNRkNsZfujAgmm5EVkEMafs2Ea",
  "key17": "3So9F2Wq8pC5tB4omghZPhutHooafRzHBnXyyHqJztc9Zs8dfVJJXYtc4qYuBbcx7FuvYA8qySHTUK5Bph2JUYXu",
  "key18": "2F2EvdohXa8L3G4ChtxC4t3Yj5jLW2BDu7SYKhV1UnaPuXzHK9ZQn1J8JNyE4ammHjzEhLorrzDfNG1cCwccJHJq",
  "key19": "4vu11btTChwFuviK5LCwAroRidP1p3qudKrA8pX3r62z2bwQhEvqWhrng59NBNKARSLM1bHcB5TiuexJqfCyuxdj",
  "key20": "2h9bDA3ivNT5Vo8Jo4bCiqVgnUrNKYpkztqBgv6koQ9rBqpkfTjBj9jBidm5edEjuRquDtTr5PamonxegDEnbkGd",
  "key21": "5gYjL9vp7fd7pr5jXcxdoBKgAdzf8SNUCwTC6LWX5kc7CZ5RyZVfyzEbErtzWoE5jG6jRANWwHn5MdD7BQtMvXaV",
  "key22": "22fWAEyqx8RVWudnT9VqzLZcgvC3wLKitHnzcZnXawDwbxQH2VbJSU2jrAkyXJHXCbWdsJb7WXsDSeKzRS1M3G6R",
  "key23": "5xkmBGhyYYpRS2RDjmar4HKf7oGNkPwFNW9rUoJE3zvG9PyaaYH3iCuhU4yaq6CjoCYfLqj1Hn1c8qQbHnqJrwGW",
  "key24": "5zyYCFX7BVmNAGEeTf9M7G4EVBVjBHyFpDWQs38PspEJxxHpYrvT8jB5wcNKG2fE8AJgYfAhWagzALx31vs6Zv1U",
  "key25": "PRUvAaGEcWaFmNCaZ364CE2jMDRsXxdb5bm4ZJtkihkSE7wnBdTuNKPzoS63GL46qZueAzUSkRFAd86sr5jR4WQ",
  "key26": "4aWQJYTVkJezp2HYkL7qohpZDiuCLX1e7L3og3HGXW6W4hT4TY7u3RJ9qJE3tJqrTKzHXsituMByg33Wfw15CDH7",
  "key27": "2fsdxYMcYu1rkeghPDVYgKHQupy2XfSqNWHqoQSNffJJLAJHZAsuVS9hgxrt4ED9eSD5APLrZcnFVDCm59d8oYro",
  "key28": "3PhUF88JViDw4n7pJryoGPLyEXfWq7WA1SsTsWzkW6Np5gpmWSE3cWaRk8jPr7Ybartd1Bu9Yqx2r6GDVsEF8j4b",
  "key29": "2aH57YjXzNgyMWxqYaw3nwmmQqrCHhJuCFWobrwVJ83AJttyKK3w8xwVeAqpU8n1RmdywMq2geHxXd7m633EPmda",
  "key30": "4bUmY3TdEopAEEMkPSA5jUKgTQ46RARxSPngtUgHGqyh2qDTAg4Drcp8pWqBTP31BkKEgTASt1XpcpJV2KiR1rnc",
  "key31": "5S1xy4Ryggpm4C9eKYdsq2fqf7oZZUH63JimwDvWJ8bckwxArwhTVYDNJ6Uy5VGVY4sij3BB86PoV7fppgQehnyY",
  "key32": "3fv6pHUAJGf4vz3BdchfRs6557mdcC16mD4sENGLFqQNPewWnUFqccqCV6CKoFtpepMGX9bMkXvb6PDjqA7TNVEq",
  "key33": "3XGtZvzkhbsmySSLWaJ3EF7evW2z4QV2SSYcrKaH3vLEiBctaxiexUjyCK6WrP1GqizJv9VCSRsJJUJQPhXsGhHc",
  "key34": "6231TsUkJzgcMAi3D7foZZ5miQDQm5i93E21aNRetxQWXGVrGPr9K4TjitUYcucM5X2ib5PqrhH49yyP4avGR6k2",
  "key35": "3baEGeVDRLmpZmYLfD3hnrqs3TUEMiuJb2DYQM5QxceUa78thYzSoJYqK4joGbvHnGmGLifhkfgZAar94Dyu5D6r",
  "key36": "32yFbEwY6gTzzFWUXPra6exaUr9AciM96cxLzsnBAzWCUC8U4p6RiZLMChDHd3E4vmGhS5rNDEsTZFwqMJmJXGmj",
  "key37": "51GrBi85TctMpmaLB8q5ajSW1SS7NyDDSgiTHVxhL1KQ4jSMGAiq4CPdobcizGY79jnEojDgMYgP8Fzei2ZfphMp"
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
