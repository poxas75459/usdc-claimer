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
    "5phBa6vdEjmNym2a6xLDAfLBoSpNWVR9qVzwAodFBeiGVD1YHCSxXxv9dE4jb6bkXDhk9eL5CkHkUSYgnRFdwrKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SBWWwzoYDTSLyhLGhd2jp1y883khSY1FAJiixYZjF7kFG7ahue562mXL7TQkZTnsf5nANkcorWPBGyNgRpFhDuB",
  "key1": "2yT2QGKN915SLBkLDzrCJbg9enRKia555tabHyZYjzonKjeW53fTCR9h6SAx98MbYCZxmThne2DtmVQcmLLkubNp",
  "key2": "387Gx31f3YvZrqL6dC5Hkpc3yeSoByWNgPjCPTGPs5YduPDSwrtXtnQuKQBTw2vSzzgPZzHucfdC6UEPHHTopvL3",
  "key3": "Lgf5MayxRsRzzBaXVYuuDkJfkjfUscCcEr7zd2A5aCKGuyMraftbCWGbRS8sgZahiPe9sBXqXKRvFhmDktXrtmB",
  "key4": "3bT9YXFjHJ2KTqjzx7QHQH5da1kSiW62rt81cjjHhywWEDGAZEo8B8PHHxLMLDXu5TtKEPvpugNepauy6eaP9gxB",
  "key5": "4LPpn7H82ARCLH5MKaA6o21gcouewriUQcCo3YQSgXcmtdQoK75z3mSkMiuCcXCkarapUh3RgH3U813d496Gbw33",
  "key6": "fhpnbiJMTGeU5C4gpZJd7xNDGHNN99qHYBxcr8wHrVF4cjriiic5ZWpeT5pXyqfWB11FX6oBC7339et8rF5JbuK",
  "key7": "S2gtnx4z4BMkSx8kKnnj7gaoxH51eVUSRKKLk4nhBwK5MGsCVMgudRuhnK65eJyB1PA1KMKh8Qtd7QgsbgC2mVo",
  "key8": "Ad5owxmuRvi2puhNCfwf8aTFBrBbBKjsMoj4Pk2reEFEhP9DTp7QVPEjrEFjgX5siduvKRk75Sjoo4LaGxTix9Q",
  "key9": "WiFyW1zEW3HtVfSGyvcpG9Fasqkq2BoFGCW6GqQ3tbhSHmKzRXpWEzGuq94VwmVeAzEkh5oeaFMsN7LkHSQTGvo",
  "key10": "51xL6Fit6qL2a3jzc58pzqNF8BH8aE2nKMZXpzdvLSYzkzjVZMwt2gGZtfAB7BzECTCA5yQdqsryzgM2ChJ6ocdR",
  "key11": "2Mx4JCBvQhXRyzLyrtfeBgu8QV3gE5hAAGQDYDSYT5n9ayLpDL7L8CLyuk34UBPQzBKSFSwmaEoHDuSayButdGaB",
  "key12": "5qB851Aw99mSYvUzemaW1iQjaE5coG3Kt5vFqNZxmJQugCejbmEwquBUaBtjGwJn8HVyab27oMEJhwd2BXRQ3ELw",
  "key13": "4qGohP3EnmXumYWwJoERCnfMet6b8wvq3BZTc9cP9JFiekSdLbKtnKADVDp515oPw4xyi4uWcGMU2Sn8vT6W7tap",
  "key14": "2xQAPbKCyuiPJDbXUv6dgD3iqHh1FjPV1tnTGCMKLzLEvjmLu1DmqJw5j96Due7HJFi6EtnpAVj46Xurf4CJNZLC",
  "key15": "3eaJmkaLXZCDSzfR6upeSCrBgVEhHVW6CyKzj7vaiewWTMTNjQ4igAXxHJrweJx11nwg7afRRSefguXHv8XJSc19",
  "key16": "6gZtGjbWSfA9h6rxTGQbuo4ZKQE7dzDzTohbLjGBMT2RB5AFM2JVWrUC8pwmoGCfiBMqZu1yFAi96hgfYUiSvgA",
  "key17": "AUZNVSTSyEAncU8cgFJFa4RSmqnTAkvamPjkbjAXtErtHKghVT6GX6Dj55r2yB1cUsjqhEzqHyDncwMGEiZBF7B",
  "key18": "38xvhnQiYRdugtziyxvFc6eC1TSDbHYaYnH2ktenU6s4JzYb7nuef55diL1vaN537yxqYKqtBQg1iYbRWV8HZ1m8",
  "key19": "4FA7mEKuHEmSMiQ4sBENGiNTp9peqxb6r1DrXZajNijEwhHhuizx6haR9QEEMCARtdxpxwVJRcRknDTfmb4WbTyw",
  "key20": "4Y5FtTa9dCmwRCnz16RP7nzvU7V99EtiznCx8royDwPRozqzaXt8T4J2W64Rw8KEguvkEHLJoNDam6o56ZEGQkxD",
  "key21": "3sBQ295mbqxePnoydtYyMWxtzeBEYPzKou8GcncuWcpW1XJ6pw5b25JXyAUUymQbWyAgWuTpkBmjUURzg32ZeBFP",
  "key22": "5EdRT4BkKxjpuXgWcjzUofR9JdAf2KF2K6Sy73Mf3W4UrR6ncoVzt9CYhAg4MUB5F7KYQSSgMT7vHymqAtXk7V39",
  "key23": "4SWmJh3dGgpXHL3zQihenwURhDZMvSq6xH2dvvUoiCkZEZtiZ1qPU91SFDcXkDFbvf8vU6mLkjgZNR3FMzN27hvv",
  "key24": "54DnbjkmynG7jXzSECe6JkeNx2zF9j42QuPmwREZP8egisF1FJgULVJMcihUEuiGJdVGdpzm98LD71ir2BAtizuq",
  "key25": "134R4gaHY3xiFfrhMrUeucGyg9VNvZoTv3ZR2WV9CkDD8y4fn24h2N8cxBF4U3w3ySjuc56z9f5C9izZCmzbYWt",
  "key26": "2eYpHsaCvwaZJ9GuKh3K4caeRSbjFTuafpj7izPDqfktRwR3Yu6xyHtLuaEwvyiAwD1ngh7wp4DFChaXW9M3XiUf",
  "key27": "5kTQrSz2wZdbf6yLojRangrc9KAHan53w1xkFW3Lm9vNZTiobkiT44i4oHrJfSgMo4VRuaXFTQv8ab5htyeKaBes",
  "key28": "5DRgTusdvvguKjJ391SuwrQuwwB4H4Rsp2coEq9vGT2S5pfhWwwLfLakJ74YX7yQCN7q5UQxaKQndZArR8B89mYF",
  "key29": "49nGKRcqrLEej2YrF72goLaEoZafFdBHue8dHhipVcHTCBLdJ1A6Aeknv7rSze7NqWjD7LfHer25EFSkw3vZQSzr",
  "key30": "2BmmX2MSqtGGPHskjpXVgRVZeFxi1u9mjSbZUS6oFTsFFJ9wMmumpuHgRybBrWEsLUVTKqv54NUTWJG7yMSiwMMk",
  "key31": "3tDeLXc4uBvMw9P7DmtKRNLwPQy8xtswPX2QiLPJ98mytZwwsiLvN9gSuPbZCptYJ1aroTcub4jtG38cwwBM5uCc",
  "key32": "2J9n8nqHJEVq8n7MUFWzCW7KTuGdQibnJasDuFubsC1vyaL5F64PKTUNp7R6JypKQ3K7uNKpbnonXYzeATquvtS5",
  "key33": "36wi6otTETRv9r1bZexn9EdDox4vJRqxchLcSWX7fZs5xMgfjcEQPpfRGBAjN4eXaZ9XuTVhFCezhyiHonxpjvZw",
  "key34": "44fxpF9U52EzJ7vHrYJmLiZLxBa5LUWAZKyyF5qFM1excWvLWB1vUafvskGdxEKXr7yZ26ugEfewFSziJEfvV7P2",
  "key35": "5M5sKE7whkomh36R9q9N5naunQiPeVRXz3Jnf2jpUebLm1y4N3RMsnDdJ4puZcddbmwQCVWz7Xn2n77Td7X64aHS",
  "key36": "34gHNEpfrvNAWfoXp4jA1HyfM1HuNFK3JXDCnBsQpPaq1aXvWTDhQuJF9M7NKrVXFxFjEyNAbR4bCq6RRziEgJiG",
  "key37": "4J91PwNWgYKC6mFehagWssJPhVvH1Ve6HtekkQNQ9wyRNhSpRHbSE4yL72DYZsxFW7RgW33i4pitQLYHEMCHSLnx",
  "key38": "3yQ7Kw6X8eRsB9YV9sgFS1qELzw1hyG6zHz36K4ms9kXkpzf9iJjdeJf9yWRJfWpfLQLZmCmwbX6UmwChhTYws8j",
  "key39": "5AMdXha7jw6FofgaJn6kTcg2L5T7CV4shtGfA2CvvphFX5fo7FiN1ksZ2mzDuJfWfHLgEhU3Po8rwfzo9w9HuvTd",
  "key40": "4GVuQBpYRtLeBDjZSyfDoB2LG8ZVaswSRkjfG8mq6CDzmx959i1VHQENjnVaDg4mSZPjxfm5kSe75LD49yE3uXsQ",
  "key41": "3HqF4dHqb7Kp7MYQzgYwdLyAgrKup9WjF5vTU5YyETYj69zsh7Q5ic3egb8MvYWKtyWp8RZTorDZhetZXG8rH2BZ",
  "key42": "5EhUKgcxThnECFHHLFeqoQJdAvBvQfbUxLupLL3vSce6n1pNgMPxmHi7Fia5oFeitz38MoNDC5VmGBD3yZF8eaQX",
  "key43": "2tTidLrmW5fK76CriZCkCjDSL3MhwpBRt5KjYNW85n7AAxHQVvp1eaZnbAjSWojNUP9z7ADi685A2P9rTEzyX9BB",
  "key44": "3jv8wJporevHawkYuL8GYshmskaspv79mFZQbMHX1sxE3mdREboCbrSEDvQNGLFqMo4VugVTgJQGVvVok5dUSDMS",
  "key45": "3PLrLgjUfh6WQeo18EovtohvA9ZvvGFBh5R8uAKqyyWdYT1J2jURqcvbHigfCorhWJW8XWxLSK28id6M3Jc4rSG3",
  "key46": "3SbHqDnWak1BZ1qmQuspF7jii7x7ZcqVqN7MRiPaL1mg2ADcpJVGiTUDMsPPbqjbQ5CwJHBk7gwrq8PNhgmEE9eP",
  "key47": "5xU63M2j38bzPMxmXDJeXptEY8CoVvV4TV2VD1x5ui6oPEpU1Tgs7tKwXpS891xT5Cs5uq2Kb8NPEQm7C4zB1ANW",
  "key48": "Zzam7wyyJTG6qFxzsDsqkn7pzi22rp6XwSKgVGvFPkjRcuobm4L354NLYT47mWqEahbpXZK6XFPCUP27yw9FphP",
  "key49": "7EjuhdaN7RxftX1TwLAoANA9BTa7WnvjvTdh8aTLAmac6Voieeb9SVcErbLiyKb95aYob5Ngm4fnNYfjQEAuVet"
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
