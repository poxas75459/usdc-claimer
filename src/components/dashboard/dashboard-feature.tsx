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
    "4cSf1o5cSEQefWkjkFr51aTDC6nyXan5ApqPzf1FBtqFpMty4CqtWPV7anSofPHJB4b4g2Y4e1QRCcrDr2EBgtue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XuczC9tX3PEHrkUFS2h9Fr2TwSPSH3scXLWpjZFuUAuubckzsPfBkAvAS9xn3ntkMfdqX4Jf1RFCuXKLzdrHigC",
  "key1": "5f8zugVddeo7JkVF7oeMTLDV5UeGgSvXcVFpAuLT1kwGviwZr1zBMzqGM1yBuvNANZQBJVtijLy7T9VyFNjBmzrN",
  "key2": "2FKskcUArDxfF2YwEXDFFoa4WHw8oNiM6DHJb4K2vUwGKoKrzuhP5uA1ehhPxf3fbKfSaQyt7GqqQM1UNGZmn6Ue",
  "key3": "8fH32unYZzyHyYvTDLC1iDSu77fy26WtFThwKkEVYkdiUL82Y1Gp36wBuwj8UiMck7SmKYwcnyozzo9qAZPoCDL",
  "key4": "rJVmoRvE8XU8S1LzWENd8zHf3sxBM4ZrHdG6wjBmhuwBN5JwcLBP2Zz4m6t8VECWsPbCv79paZNWntBDrxEfVaA",
  "key5": "5GEHvmjZD119ZP8Y8Qe5hzCJqmzJck16UnWBZKZ9Ny98EkorUtzCQCHVnTmNynZrzXktT8Cua6tHAvrpYbTPrHkQ",
  "key6": "3TNpCJtENV6Eewwjvz5GKu87ivfx4aZF7fTghKBQ5ieibsNRHuXQrYBdnpC8LZrG9kSj8ThwcgxAg81pUt8e2Xhm",
  "key7": "3xUkbxaaumVmTDf7SjeapchLmwBeiUhxoeZrfZLyUEsjF3iYzRXx3kqSfNFJDUjAAjqkkB7GkWEZMvyeZ1BoVbvn",
  "key8": "8NDHbUGvVptDMj13ZbcNUBo6QAY2aqoYZzbEF6q8RV2XrbJZV54sT55GYW2mNgUh6VjSxYixjcEeZeVYMCdkZhA",
  "key9": "2VgJGyQb6qLKX57oXD8ihaen4226qa2qYS9ZwD6TdauTRFimj98USyi3WDqioKWasWYDYsF5sFgQmvajC6k971Le",
  "key10": "4FYiUUazZooegLCjCVej57WVnk6FUa8i2oq66byHQqoHXMG6GByUUXk9j1sq8YD8LvAFAU5HCn1J7JkGHec4YpTm",
  "key11": "5BfkZbNAdSACf54cZDM6937kqNe4yX1xWc4GTNtH3yQ1DrwCRYmheSpD4SNLeYEbVCFc3aUyQut4kH95T612xbbb",
  "key12": "5vV4hZ6WWzHAgx58d5kUnurr5EWn6RmCEnZ6qYx28Gf2gmi92xRiV52UyEwPVPBfo1AMtEmSzzRQ6iPddHSfD4ZW",
  "key13": "2v9aEN5PHLcZ8EJCabxWqJeBs1i6od5Ae4RhGPtTRoMmj8mRSUiRvfbGqW3rQhfrQqYDY2d7tVQNxhUjPRx3LuM1",
  "key14": "4eiEQPNC5hzNkPcixYakRA5xpYYpc7n3nQnR7qwYrC2RuYSsCneLDoTnLs92gaiFx4TUW8zeYh2mf6L8nFuS6Gpx",
  "key15": "39p5equSuPGv7NZXhrjAZjNcHa4bN2SkXxsEz1WHmRFeGrxkgnf9qBYdW7cNNn2U1f6y2VgJRg8A2ruN9bDzQswk",
  "key16": "23qPsqL18H7xwUcQ59MKi3k4srw9kLTjBq8YAZR26pVuvJams6NPWZ3JUbfU68gY25prEQ9gpGq8J34JLRTm5U8A",
  "key17": "29sQaaNqe9riqH8AmyMTq5JFkx5YRPt2zdfsTsDjmSx8L5tZ7h7E4khNnb5Bj5PWiwAFgguVqyQbrfkESbiBtkmm",
  "key18": "21MKWCX5s8X1Ns3sbAagFshw3TM5bn3GJpVmegSf843szACyJjhfd4euAgZSkxB7QQaLgyEaQdjP6ZYX7suA7gqd",
  "key19": "5us1RjfUvAReUDtXvDtQ5ATy66MxcKqPVXUQFZisCnYznHYV5sMuRCY58pJFxr4bitwrusHjb1K9wucpbDhwHtP7",
  "key20": "2HLF8qxWPxFHxoZK5cXQhgZxHpB1DjA61U5Fo4Miktic73JfkMguY3CdrjaCZVvYsPZMyy6LEcjVJ5ntvB5Eg8cn",
  "key21": "3rggbAZPfL9fw5BKWeHEvwCXfzkMUrR7j1ydCwZ3aUb3fjTBh3U774opV6SKMy2HxwMvYjAi4uQPtNo2RZLqNCzd",
  "key22": "4uJTDffPdGbbbc637ockUR8Ftr9aPphoK5RZWgMG5hh6y2p2UqjjR3RHkJ8LbzyQKCztEJV7mEqUsE4hazgGdGrQ",
  "key23": "2D12MWmsS2xD6dc82VMNgYjwr7htns2nhbbGQCicgYSmMRnkosKJDmAgmYJLsDDrgQsjpkwGrEmGs1fsttyqNw5X",
  "key24": "mzZqKVj3HMVkH3sZRNhJSvUZsvQS8fTNs1rvw4nCAgNLRQLgKyDRHSCoBfcxDd8P3ndX12ZN1axzdsbPjpAEw59",
  "key25": "LwY2YVBYdRDp9MHj5MzLhu6RQHNoRFp6hRf4rMHbDwiJDBkuDejG1r1X3bEUKN7eVEdp4wYM8TD7nhfgJ4UTGeA",
  "key26": "3275rGnUX182odcLbTUsRRDa7stTp7dcpbn6nd4X3pwfNz74pBtX5X5VNcwX69QfTZEGDesNarg9yvmMRkWUsuDi",
  "key27": "4PJadMUU56a5dkHZUsTzrGLapLMDfetmhUVv64jRL8pAf4Zjzn1wc5z7NYmoNBTiZoJjdqSQkub7zj6DHefWFtLG",
  "key28": "2Zh6eUiEyjKkE7S2vKf8k73UjMk75N6vzEtdCfe6pwshoJfgsjCR41v2JpomKR4DR5PvEZksS6CbvvomZveNQqXs",
  "key29": "1YP4ocb5jAXS5r4yhnz388Z8fhe8zv4AnLauEhaVTxUNubD61quLTffWVKLwyovUU7gBQqYYqicPHUeST7aJaEF",
  "key30": "5erWsCMvGGRuQwHNkc5ZByAP7jLpAmR4EnHLeXLF6zjTN3qgX7EsVveCMcV4Lr7wLDrqcgqpPQWtCWEZfSw8qPxP",
  "key31": "aNAShUugU2afZC3f7vB1EHhbUif3VRo2b7WdS2tngErFZrB1JfjF8egCUo3r7YdSJsVgvAaBA7cwdf8ZmptAwWD",
  "key32": "48joRmpHhgPtiC3HxV9WJ1WvabLxh7YP1xWD472tBhGpbZpZZtJEfw1hJjsuBQM3mbKMEg27GbDTd5kJ1umbNRRM",
  "key33": "5wvcXt6jNvDpdYqMxp83rJAhB1WJg9phggeat2kr8aCtE8zkfDDARitV5Ysb7gqH2k3dRPrPxLCa7andhfMnzW6w",
  "key34": "5W6DGfbxceEVaB3bwDVUbUvy5ffjJqGBmgY44BypVL1drgAaYJ85bVT43jVZxdKhd4H2X9gSyueAquZQZPcwvcTo",
  "key35": "5JB6ZByDwrPxqJ3JeuTq7gw9wWCSoqUWmjMADNm3BwM6Z7nZDhg3KZ9eGkWYyT4PbBeDFx9p6HgR1uaoL58CG2C",
  "key36": "39gJ5GX5ykiBuCNt3xm1M3EdRXS7AzCEwdoxhux4DrehnGsggyq6us5BY9sUY5JuNZ5HW5fPzHxkHP9kXFKkxmoz",
  "key37": "2Szz4dqZhAE2eSk81Y43iX5Mdzjczfj8KgtL3FkayNAco6C6mZcJzV4fWWvBK2nxH5BkufkmMY8pTHDRSaZUaesg",
  "key38": "2dFyY9RYwxzqA53aNVZpy36FwsLai5KXnndigedhGeJ1beYfvbZ5MjCHEBGKWzRFoNvxFTqMetHseDFrPVgPjbLp",
  "key39": "4kX5aosFyE2eyyTVgCmAyWZCBt89PyfqRcnYUH9FisnzQC2GqZ7UmoYK8w9SMExjsJMALHNXiFG8DDXyrRrRHyLq",
  "key40": "3wBzFuvzXzA4XGJBHFcP9oVZJn8sDehVGx7xbKgomVzW7GmGmCtBaQKeAgjbgSoxWLLKCx1xZ8VCPzSGWopXcAdA",
  "key41": "5BgaN9zywsqMDwLnTfczkC9Y4pCGk5XpMW9x5j8ELijR4QqunQfSXAUi9XkkuHqwyYLCbVAnfApBAegL6boRHoMT",
  "key42": "4RqawMdFuJbtyBUJTZTsY1sPp1MH7s5uK3C4J9zavZmxxYtrrqQEUKSV7ir3BVKddcNRjsZvnK6VLqu9YAFdibbb",
  "key43": "5gVqhhg8t17Ef9pANE7q6UD6xhriCXxMRjEkz8CH3Y1dXxMNN1YLx8bydfvZw45dhS57zmtyqQrcgCxd2iq7HbJ6",
  "key44": "2T1ztcPhA4YW1wfS3osM5oR72PTvBk8yf2fUpysXgT9MVzrFNbVukLFzxudTetDmsE1cqeXh7AKYY3s9S44duGEy"
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
