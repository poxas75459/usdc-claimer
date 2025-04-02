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
    "2wSUazxvkFbdm4B9QteNpb7Jnrp5d5PsSiybQgQbwSjsQxTfZ6xBhjK3ATbifWKDA9iLEMoCbREkVFrD2PtaxHEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B5ZeYPoBcnV3Zg6i5ZsQSTeGJme9yNxWzzjfpU2A6dss5Y9m3DYWkkEWbPC6BGrsRQ7hUFG4MYZxPuBS75FsVqb",
  "key1": "2prAedp9mP1b323XQ3NnXLmXUphXdu5csnQeRLdUWxQWzFxYW6din52CAHJvinsBsE78xBwNjz9bVFbo7CUJVpfW",
  "key2": "3b38eHo7PDDXFpmc1e7VPrXGFjg2zW5wASXefNSXtq6Wbjg51L3p3QequKnt9dwRrk8H5zgxR5YcxYjPZChzTEPp",
  "key3": "hcJwgfX3WRPP7B1XyW9i9hFmXPEcQcWGDJYeHb4dAJHzDHypAR7znpLDDkCh7fBvuNo8WwUXvfGAq7twWhhuVvf",
  "key4": "3Awuhh8wU3xqmTNcgz6uq27BbzSE9xQF12LKiqoj19e8XZhnPHCaBXzJrrnAbytFxTuj6QuQV6KJ3TpcPnCS67NU",
  "key5": "4dRfbcKnQTnBbw2mzMdCR1xNDmBGNkHTp6aXGBZUcjQ4HWBQbVTdJcCBtpgUizEJd1dAVG8JshTf63KtENfJCzx9",
  "key6": "5eXbtYdnEvev5CXCtsh9mRw5LjE86ogMFawHEbc8kD8DEisBUZFHYfMeyGxf3Kq7yJy9fzi2TasNrgDscWRgkZBn",
  "key7": "5X9fbYJfKt34WVjg3tHUUmjLNaXcscrZS6iFF1Hih972VbLXESLueAdTGJGkg1DeEWK2vq7jhxgFBjReqoaxKoA",
  "key8": "3EiWFo1M2BSZoiArWiQCuHZC5uNmVJz27ruQuLSp7KzwNS5k5eFPDirbvKC7aCgJ1HCgxi7qiP8FpcXTM9t5yenu",
  "key9": "396Y3kiGbxf4ce6oPk2W4RRi13GPzmjZQgUehcQxfHXiq2nfztyF9kvWy1etummFXSs2oArY7jWiZ2Fb14DiEwXW",
  "key10": "5NdXPV3q7keeEWySqFYqNoU4cuiyiJZwr3sXxww4Lq7e7Zr5t47uVGPvx5As7ot6j3aBMfBtZAnvmUtgvq4vu7L2",
  "key11": "4mbpH1d3XCDpAUTHMfqmFAW5SayzWcW35P5bXFeseUkQdXDz2o64XW7QboWn7TyZzDmVHoEwcemwoZi5D9CwPEnQ",
  "key12": "2KuSaf6ztGXejoBpHjmQkKtNYWRRGvDtLsYDsAU9Nvb78EoxGS37dyw2WEL3SfJdw9VBrzSgTf2g6SWhuUFjRSCg",
  "key13": "3k2K6Qb4NmedTAm1xpT4eG9ySyCeBdfAmWXL4K77ffNPm3nSm7P5MvnyJc3ncvhyphpQ7Y3ForPXGJWEYxgmf9eq",
  "key14": "3x7whB2emSeZP2o9wgGptkZZnK8bxCeWBooS5eBJ7o6NFrjcVH7F54yvk1t9Uz9ahJdwb3dbYtTNdrwQY6T3Hprk",
  "key15": "4RvbMfAUkRnnCvxPPd6sfSjLfzJ6Fwnw1f3RQSABpospdQbzJPEUqLuw7unABZmuoZiS9WdgYUaQ52Zro3MY5FHc",
  "key16": "usPbcBgN2cUQEP5uqrSdfGMQyE9WY2gkhYxiNmVTJwmZoWPSTazjKW6pUfoE6pvYQro3NBuWRFykNXh6X5B1xut",
  "key17": "3YD7eyUdqPzWttqEComM5ue6ajgThd75xsgEqkh4KvX61AuYy4Hbczi6TKwJagoTiYCzqYbCNDwnYJ5wh5jT7eLH",
  "key18": "41Msu1PQyxQdJNFqw137aug1u1MNfEp7XLKrUcrsY6AyPbFLSZaFg1zsq6Crm5j9K5St7JqsjXDyZQYhXtR3Un3J",
  "key19": "2MbGEYmneMKLTwNtS5bDvZXP8CALW8H66YnkM34WqSVXxrVdwfqiPSeRLQi6JHihKu5qE5wjpnVhS9NsNNDKgwGu",
  "key20": "2RxSHKcr9HtMucdBVkgv4dLBr7ctahpVEAXN6hdXjJyMUspo2jGB9yUg1QLDuTEcXg9byMiDRVkfyaT3GLRHST7S",
  "key21": "5PcCPe3EmnvALbfFgxYv77rWmVCJ3bPZTjvmFUMfBq29mxE5QTZt1zrvBPBjaih5h7NHRit9yLY99mkEBsYdrSm1",
  "key22": "3Jwk3TQbh8jVZy5BLc9MAGhfrNpWHzM1JvtVe4gY8Gx2u7Rw86mf66Y1uNwbbK9sXsaxxBPp1uY3LMAuBN79K8i4",
  "key23": "5LBUHVnHptQDEKXTtP2vR9tqtdgVSUyMJY7BEdoa7PgcJ1UZuv6318RqbC4Rb6xuHcGV4UY9u5Ne47oZWcCsA9VY",
  "key24": "xUtqnisvPaYAJkt1zoLkEPi1hXi7z9492PMboST5xs9Sh2bTW98iK8YbdF3QMjm8XKPAmbosVAHysy32cH9YZa8",
  "key25": "2hToymAnwFzDAX73txLb6zruqkXDeGQwT5YMGYWBVo89WXW1GBeRTPdyeBe7Qyd1oqSYqQScFL66VvqarAQrToMf",
  "key26": "2Ljh1ziysnoRGRBXrv5qaTBBHsgBeDowxp6mm7oJmVDazSb4zHSupYGND8nsDKqckBhrdbgJmsx2zH38bSpRcBSo",
  "key27": "fTDXDMcfoKGJaSTHSehK9jLEy1AXgs3vm2FZrRTuXcHEa578x1hh6wNzETrAsbesdvPCughctkkUyDsMfrjcpjo",
  "key28": "4RrKjPf1VPcne87viLM9twRS3C8AJ7AAA4vRSYRSm5j51xMDETurvUjgBYK7ywdX9cD6ntALUfgj9BecwF3U1uCa",
  "key29": "4mowYVpD83WJrT82UZRMTh134ZMXPucnzNDgzrtv34amYpXmiPenLGFMuNi5K47h7PYZVWuisnadUZr4Gpsd6sZf",
  "key30": "4bhCekBy71eddqCmNyQkxvPPuGdLQo54QD91YPKy7huno3S8tBjEamjDAJv7v4ZG3bG6iC4qd7rhfLWvcjMXymJx",
  "key31": "2ho1kHGKy3h5sdPKSduTWwRUvPZ3v9nhnUkyAuwPxbYAv9u4N2knmtiksefAcCRA4h4cruWCcZ94ozrCYoiV1Viy",
  "key32": "4PYZENnNkDGStaE2LCmrCWuNpEP23CvHvFLeLDzqMdLpSJANv2KJ9LCjSNbSGYpNxw32KcygUstbou6dbjxrwT7L",
  "key33": "SMcPU3Z35BkgmfwWRHcTXpAeURJTPLFS59hyaeYxDFUfN8MHD6H4e6bF5UvwZ2wHkN5FjChwf5PMawZNBVpjmpM",
  "key34": "63JQKpn2x7phnbxg6NDLpMYai6186ocZ3Jow5rUh2z4z65qU68sZF1y2eXr6Nk6G4zBGybG2xkRgujRwtLf3dynR",
  "key35": "4xdXxgA52SW4fG1xqYLnfnQDB7bNpLtRpPeuudZVBQHZdqjSdhfdePqaaAU2NAZaMZ47i8XJ27JV6AcrowXzPFFw",
  "key36": "KQQtJ1fXQynwEKkG7s5JZW2TtUmBDupV8ex8bCk7T9kNcn4AUJHFxNH1eubbJwE6jPjfTCzLNTH2kU8N8hqAtiZ",
  "key37": "2cyxLesxBxktukWwB71r2Wp2f8zCK99VUYHajMPg662o9VwQocNoTkDnXfri1Kk8KCsxYtiUS96m6t7hwxnbWbRs",
  "key38": "3m3LFTd7CmQ6azU2BA386Eicp7DY2Ma8TTGdrMFpCww3H3cNHh5pGSVGUFBswycdi6NY5ozVDQojg83uj9CU6KZR",
  "key39": "5aqypnPKxkpfXGFLswAteQmLwGfhdYmyhkJYfeyJb72tmjWB5fF58FuXaxbkmrMKXi1Pb7asNfTrCRqu8FXdDUpG",
  "key40": "5xAzAmNJR5SvASpAjdHq64oU9KcXgWmQYFmMu9neskedq8K4BsX5UrQNWYPVJ1s8jAQXAyMmyr4gXBdLiQa4UoWY",
  "key41": "5WhQrqqGHxww41m6NYRKQfL3JLfP2xXdCPdtLY1kboeCyqn1X6jjh2vseDCjQ8MQp6YUXg6GMrRXFEFWdejvmoq6",
  "key42": "3ZGWcQkQ71sx9arzceUjUCmWcnvEH4nSWy95vyGQKApRQysf3HntpYTdwPWRYEmyN55dUtcs9ApbzT4feujLCqye",
  "key43": "VTpXEMZZv4Mp8yzixBK3S6m15ag5BEkxSPyFwgkoFiLqGuLqPc7cVkkXgqVhC955cfkw9cp9pSmp2YLRQB5GKJF",
  "key44": "4CAmK4KNV78TmY1CcctXgs7Jr2cHzgXLUmvvaAVQyoMJAydY3nvAHfsz9jN8EaRDXJ8PyT5ojCEWBa79KEzNQVr4",
  "key45": "33wTRyZsfCqrEFVzbJsoNhoNfkPjJUVyz2XPVDbXUtGWPPZJ3dfPpKfCAmQkBjcowpoaEHpzzvuadDUm6UPjAMrE",
  "key46": "4UhCAcWhqk3UeVqGmkARGdQoNAWNTmfex9wBezaq6ZP68jeP4RkzTsEUhMSMxvRvXdCN2aHHHBrYkNdefsApSuqs",
  "key47": "2AbwcGAADXMwTdajZbCCPuCHJuUcPXuFwqXr6ZsasmZCB2fFSDrc76UEGqy2UK4VKeVaoTeHHKipD8rNeMqpMAr2",
  "key48": "fuYFicyrFuGHh9u55GUiNAi8ju1twV3Th4zHMJds3vrY97uQLhqckinXqVbZLqzpqnnGKNdAzqkn9kZZPLCi6Fz"
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
