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
    "k8wW47voSeWfScekNaM6r7g6fataALyn3n7yGqzVWPX11UJ9kD1hQGFCZJEBbF1JtkGatAMKtm67wcTYWZUTLhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VwBTf5bWiS2TUpdCDuqxQzc24UZh9J4T9BhUNuMiBU6P1iWenEJ1mLV8L7oGKZa9Yc46W3b2VaRkHG1DT5R2cD6",
  "key1": "4Bg9Tjq3hj6zUnydeCm4S5f3eusNYZziPrif2xU8HtBCs2UgyvNcSvKGEx6SiTTWKZDmZ15tY3JQd6PWJYA1kKhW",
  "key2": "2DT5YkDStZ4ujmjU2Cgr1vj3vftbdfXVufM8MTqkLUmqACLuN4r1iS5aXgwDobmomHDww7xBybkcuHgsM62D9cZK",
  "key3": "3RMW3bjPrPxpZ9hBrNFVxgBraVr3VEA99SLCNcMRNvDSPPsi77ez15jMtJfjvbXLdsBpsbmmsLj4hFqYeU7HE8eC",
  "key4": "5iqEjq7Y38XhexD4aJUmzgbRCjKSTuSfAAFawtRTrQAGYVrA9wytTL8PKScTCVcYhCrYUZxfZu8ucpJNcYcjCNz6",
  "key5": "3LmxSapQnBrZXh8AM9gCkn6t8ViiTA7xab8XMTxtisUGNRu8fvst5hLaWGs4vSXhUZWCf4Gaz8RngsdT5SZgJPCN",
  "key6": "52rZCbC3MP1FgVFU27j2tptXDfeVLFUFcq8tZnFWJAo5Kjcik3NNKY5HiMgAdqquTuvgjgfGfG25HyjZsoNN7QAv",
  "key7": "5CZiYuV1mBextAjdBkNmGAdiGe1YqFQ6woynzRzwuuA4icbqm58aurLNgrK4WYB2Qidy6BxYKAoKgHowRRYg7X2L",
  "key8": "57X7gE9t4Pd388THZRt2mmskXYWbPnVH8ukvCzkBnUEJ8rtxQFmMErYEG1mr2QjvLMZtqTahAZ4U5qXNXS5cf8BY",
  "key9": "2ijCTacsdhYg9qx7dk7hq1Hma9fsRd4oa3KLs2bVpNn1z4yMEHYWqwi2YdPRzABqgamHS5zcmLKTrN7hCh8Kza2E",
  "key10": "3vCP2XPqnDfMdofLCMerg9E8JAXJhPLhyVMCgMoBC22B47jrSCTy6Js2MYBb8ccjnayPK5LL2LqTkKqPbAFURJZD",
  "key11": "2AHKs7sc3pCLWHo72oJzZ3WoEXegvWjnHx9MMguS8KJFZgnffnwi8SZZaNAVBjyeQWPiFwKLo6YgQUthFAKPWpLA",
  "key12": "3pAFoCFvaNmJeVKcCC6Jnr9WxmT23HyUUNsXEDc5gP7BrAq4YAYNwLz5NH8wjjn66MRDMyyXUDEdwfTiehg9tNae",
  "key13": "4t5J2r99BNjy46TWLC4qnvujL7qYbEtgm9jDyB9bSyHxFsLFsyuHmzyuMidPs5DEZQWugDmihkAGDobLKZuZdHcG",
  "key14": "3JrMj8J2npVoGy2728BVAp5a9qJgdpE26kUemnewWcaY957D7DhcvhNhrJQXk4GCqDm8JiXyxZp7PHo6UUHcftiU",
  "key15": "3jHbmf6Ni9toBNYWK1pDUhHx8Xur3NX32tZQS6FKiCFvrFqsimk4yd5cRg28V526bqLmm3xx19sGYmh6m3tVhZBA",
  "key16": "3L5C1NWwwhLkeDgDH7o6Pk71JF57Mg8vdXcDujpsfKcq1BdsGsnQAJmY3G2xr9J8zt5Epy6PkyJwCmapg72B6f9y",
  "key17": "4nXnsV7pueNKUzmE5aCKxWn1sGdNbndP2ALtxGaeF5Ce8gY86NpV9kvvbzWJtjgtuDkpJR8j3pBGtEaHpqYMQZH",
  "key18": "Yif2SY3cKDZSr3c5NJscuFqCjX5Exz2F2No9VEWkgaqixrEt1U5vkfikT1nPg3gzppyzEvxsFcYoPC2gvGm9oBE",
  "key19": "Tk1PwVzhBDUc1SnyEpNdjfFPTqs6ZxfVYF7VG835KgyhuoKNQngN2ZeMqs7oDaYDwBd9NMDXZ3jKB5UaNahmwnx",
  "key20": "CF7aStDm2UVYGoUx2HmMrr4r1B6bi7oSc5MAWeBwgXTS7e4WH95zDxnzMeXojwmYYHgM2jbEKBbmAjmUJNdAwos",
  "key21": "62RkdDEoSU2aY34hh7WSW4t9ch1d4cnRcKa82JZNJ22DStZ2fU3aJM7VCBkvmCZL8zPP4XqKK6NuMizD1QnFaZyk",
  "key22": "3ycz7DA41TCgCvHhQG2JWZpa4ULYiPqW8c4y2tPcJubzgVaQ9wJ9er9dZpkbASTC5ptsAERiurshExLTFV6GciFA",
  "key23": "8eaWx4iWE8Ce8tpS7YjhF8vsAh5MfUSejqKWM8GtYEu73HVL7V1xwgiBGp6yfWYZBudza5TDaS6udU2WVrf67VD",
  "key24": "2tprGAWyZSFHmHcRWNxvxJB6y2hRv36MV3xbdBd9ihRiZxgvzEs33h7yJe4B53K4gZe7SS5abhNRNKvrMAxF9rKt",
  "key25": "4euUiVQz1uZ6CW2jLTPH8iWzsurPxzFRnATWSauNQZyyoPy35KyGCgUvQBPpM6RFa3B2KXXSXoH4vhXMbk7ncTNv",
  "key26": "2ASfXYohf151yGWv2ZxXkzQS7krWFxQTehAjU1dvRhovoWXccn4bexwdT4PUPFwxASfFsWWxUw5skP1Umk5HkYSq",
  "key27": "2igxE4FepT7Y3xx9m2uEH1VydGyGTd6xiKsW29mCmwh5p6u8nGzx3wubDbTW6XHoPkRGqNLvntoSe7x5GFbgG4K6",
  "key28": "4zgESDzMyx86wFpvWuYkhFSLqHConAsv5RDZYMGGez2GoBT8nTYpaz4MaRicgDnbbwbxMZyNnKR3LobzjU8aPatn",
  "key29": "5aKxxLBzT3E9Jh1iBdxhcsAaTXZCZ66UsWAyZc2BkzPkzLrLbZLo9ZRekxnsWuhCXjruk3rwEgGhG8bYHfapPT1P",
  "key30": "2DeAXBFsCN855Sphi8pY2RAHBQvMvLta83xesAsCWzGxfFhVmahVtKekkx4CU5BTMWGHp2mxGWmpwiFxkKujvTH1",
  "key31": "4uXyqgZRZ2zqoouTKemdvWr8uwFcPeGudyFi1Ej4JSN6XTvBxB3Zxmh9C2whSiuxj2vTKarPmFQdiZG3RiDurtbq",
  "key32": "7sVGvhhPHwMSXh2P1kEEL73DUQseiAfc3iJVKnLw2DkFhreHEJBHxVxGLxC6WbBs1V6oEVwvRv6M4RVP7bZiRT1",
  "key33": "5NDNwUC69CTCvJSdFGn4DiJXFePiygZr3NKLzqEyEq8jHG8FP7rxzihddSpukxLMZt4CeYDXh9UMaqvH9pZJKbmM",
  "key34": "3PEUUwgPTsdUGm9r8HfD6Xis7PWqpQ7TWy7TKzYh34uwW5keqtL8vtwrxWSU7U8aY7B4bZjmFq9LPWsipyxz7etK",
  "key35": "2QfvhF7WhPd3a4SNZLXpHHq773scHz8RY6XcgSYk2pB1uedkWAvEv66uxTo5zcVzx6YGXYB6D3vs1HmKRdqxiJvH",
  "key36": "4SptpXnCUccritAe7em9NoPbEePd7WR1Sb1fnwKMPr6PbCdSX8TeMNzaB9ag89PBkaAxAEGFZ49XhsvArTxEpYAz",
  "key37": "4RcdzgfQ34p2NKcxkctABpMCiBAbNa3raVLyXRHitL8RJRgeGeZDTqqmkfN9RR8hybmwKZLFjswusDqS5w1QArXz",
  "key38": "UQ8EXyVnXEuWR81t7F2V6hBnRaabWDkyCo68tYwWzbWcVTUokzCYQHZDNsJ93rD3ZVqLPh9oNWoEepXawE2Fd9Y",
  "key39": "4SyUeYMcWxVTuTHAEKYQGYuzLb5xa4ZNDr7THr4FoxNNpB7kWzz9v98QcnxHTKFYQMrd1bbqsNSAaSDkQDQstPGW",
  "key40": "3ytYUCSExJgPfPYN6U86GhbkrohknssgzrERSG5qM6CzuZVDNmafupmgfpBwNqXNXhqfc2qD3hA6PE47t6HWi6t3",
  "key41": "3uBQxEVsGjJvZzPtKaDtu2a6W7Hu7LKomV8aAKx3qnvpZ9UjkinpVXDybizTZLi5f4xCDvSzVmtpScnDBQLL1GRw",
  "key42": "3wXYwL2kL4tbbPtQXfzn8vLfKtXUPDGYyMorAaK43ryz4dhq68bpkNzbVZFoH3zcTgzzptxnL7U5dmKzaUVSPPxh",
  "key43": "AjbVnJoeP5dTNPRsWB7sGy53PrpHDCX5ddxNkESUM6y5xdmbWA6N6a8e7ink4tuWhsG9nhAztzvsBh5wdHQH6pw",
  "key44": "2FVEgmqPXkewvEc6EVtsJCs1RxqwwsznYafssyfb61bWRMjY66KRxFCJKPovuazNdjRa3V7epJMgJoedSsxPdX5w",
  "key45": "vLCovT3cWx8oFSwAiEtnBzsDtsAJU6U5nN41buhyUQgHQJBRySxVbFtc5DxGheCLe9HnTVTgNpaHSg1F5g555aD"
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
