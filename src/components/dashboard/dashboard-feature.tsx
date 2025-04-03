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
    "2pMFu4Q84a5GYcspvfQ7vVomN7rBw4Sm4hSxBWjo5qT9idbnJXFiFZqHGFZP4SBurbbdGc1GxTDUxQ8UPzxPSqyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wj9Lco22v1fkVFsZU4DvEb8kaXtuzfH7pNgpZXWPhsafjqojhUEsyHiDkGNdiTmJvqP6pFsiLksuzbGM75a9J6z",
  "key1": "4EnFmnRjAJoMc6idHV1gFCqNbDKoMSLgiJiV8RHdog59z3XuXPZXZbUr7fmqdL59q1NLSaXFkjQrCYyD48vdVqXV",
  "key2": "3s4hXyp8XGxY4ob9G5GXNahcZBc68HEFZXEHubfEXV6Kh3GLs3K5nyEWKcFQGLGjJnVD1mdxhBjeu2z5GkFi9ni6",
  "key3": "3QSoasXuygLA191Bmch1TCpHshGFk895qfxPfCNnPA4dfzreHHU2nGMNowF25ZPEJZPtBSSiV9cjaJ71ohiZvg39",
  "key4": "5B7sxBGiUGtQhKgg9xHKWL7b4EG6aBCPkXVgeBbdoLaw35sUQh9xxMJ4NAiu7SVBp72Sw2vPFjT2KKkYS1FkG616",
  "key5": "5poioRGtDaVMUJxGs9u7XGCXKi4fLNaV6w9VYe2ygG9yoZRU8cpkT6J5M6Hq6YJApVfq7airzoE3uRzFuahsWyiE",
  "key6": "5LrLAN3VJP1K5s8fFWtsMhpEepH4pRVkzC1Fr11CsWcaHtvG5S9KfyJtiVoXNxwogZ63CNJxXHQ6mHWuBVKEa3hE",
  "key7": "4vLpTAYXDPH7bYuEH2Hy6oeuKLF9dBbnHDKyp7ErgoWU73Rcpf7Ew78sX9wH4zHsyEVtvvTagnuBwoRzYcxCyT6J",
  "key8": "3hvacRAyZRaph2EhSZ4D5epSco4iW2Fqrns1ncgqRN9whNjaHXbyvErxKr9mEtXdB67CvxttXafA3srijbQ1gGpc",
  "key9": "3FeM5nuueNHaeyoNzZmn4SwD9vrgffsdNK5Fx7KNcNTXEuaXa7svE8sbLkc4HjsgKy3R7CAQLMFQhHYDUSLJd5tr",
  "key10": "jWTCq1ANM3spXQCtpofVx8roXguS1qQoxT7saqvZNPKiCitYfm5EbdhKiBH61DLpdQeHyfK3JZgQqNdUFA7Q6zH",
  "key11": "AxZna3QYpqU8uKBACt7DMu4x3XMwvQA8Ui9zCsopVB7xGdRTSukdoCobyEiMhHLY5Gppi1BWdbuxzauAk9C1w51",
  "key12": "5ihEEztBXJQDqxZ3dS2S6MNXkwSf2WWZyyortNJ46zsUCqahcpZLPmS1q2Wc11xX6od9U8CrMkretGMQj7AdQsaw",
  "key13": "Fhqsomp1GAX5a2jcnniAxaGjpaFnKSSMp8aKKWWtkhYGsg8RwBcftXWDjRJjWdyePZ79Qx2tAN1oAmh4NY1STqp",
  "key14": "4sC5pqg3de8FE6ExQhvooEVAZpuUs7qHLWLYTEidZj15aMkXwnpSWvjYmxpyE9EwYEhbAdrstrssAjR24uCmENJ2",
  "key15": "xDwqF19zLZh75HYWMaydU9ztP9NTQKxffiEs9FhGjQwbaJUAe4p5RUuobiDZcVDJP1jViyWSeFBYXu6Ehdv3QMX",
  "key16": "4obTyMadhA9Rv1PpdV3MMPwGDFN75JCbNrx4EcAhgySGG42JKgQ9kZDgrdnDfzimJeJbvUmg1oev2RraYmr12BFG",
  "key17": "2jgonGdKDJzGMpuhKPJU5cp5ybMFRzvauLubgB4VvZDVRc3AjDSNowdnh4cWtpNE83UD2JFevJ34tVgF7BmjnD2V",
  "key18": "4gqu1Y4uMaECumXXor8AHFKSzT2Ed3jnyeE7AGqaFbeojzHYuLfYNW2AFekYx5JtzJhRb62aez2poFSW6inenJny",
  "key19": "4PX6cfkUJWrBUW4H23VbRtFBfGxFfipWEcmGifa2iEJr2kvTtvvmjB8v9MaVtyh5YhBCuCdvkf1c9xLJdKPMsR62",
  "key20": "3yG9MTvgMfizG6ekMLM9NQXwnh9Y6xcCM49jL46y4ZfxaDou6pswC21hA74DjoEsMtCgUqoBoxa4Len4rmDWFBqz",
  "key21": "57Lxne9evzc15PsjghVkz4EAmRLvAQu6r4ixuL25SnDYLvKtzXk8eUDu5ZMHuDeNtAv3u3oAypnkhpAiNuTt9qu4",
  "key22": "4BBZrfEBrSwA4ACL1Mt3ggiQ88xhWewaYg8ey9ELRFo47497HQgdVGbiMaZVNBA29eBKSw3Xc7kAyqt2zRASH9Jd",
  "key23": "4x6yGyshUMc4bsuZRxwSnet7Q2yA1BiCmVa376owSm6uw3fgSFG5VmgutgcsyPpnekNYigaMBLaXr7rtWPCjMhTQ",
  "key24": "3BguJ5p4fjcytAWetuYo3b77PJrpJYdrAV5aXinxwDQpU49i4SxKXjGevHZ4YTyaDT66xoBFFqu7moPTtUKC5ZSJ",
  "key25": "8a8YXjWH4BmUc5UpNWu1fttxhHeD2UoVnnYAg8vi3yVmQNVAdWy9qKXjLrsZVqYnokjwy6MT9BGXn8Gq2ig9BKF",
  "key26": "5cBP3r8y7AtjTJEnP4p7jrdaRmfPNcr9iUX7Mztze14ztb73JW1MeW1JyUD5qfRJtyjiQ6AkAfBMrZFrHsu1uJ5a",
  "key27": "2abzRssthx7qbGm3ognkLytoCGYNpVczE3hdCrMSbEVwKC6iVU2m6B5e9TNuTiFckuDWSecyMDiKrpfGcCSMTk27",
  "key28": "2Xpbn2ZTfi1Q4m2mpzgpaN7xMBdZMRvC2kebBA1iM6y3ama3LA22pc3uEdnZsVsfFs56gJpcKRER7wGQtDe31Zqp",
  "key29": "3MT3fDUGjkBM9MMwYV9UYC94W4GCEyS5YFJkCzYXpF1o9rf5DVAFboNQZACv1iRcgvfqqrX1P8ux6qqQAxRLpSM8",
  "key30": "3u2uWL7bqLPBzpUQAA3iHXbWALAjbfgMq5e7ov3FepKNrGvyuMbFSthobL37iQXfmuAqEkRDZyyWCzJHZdHdkK17",
  "key31": "47CCenU8abzsRT3gJiZ3sgFyr2DQubMY6CLxy4Apf25RH6qgJA1UCcxrd3XYxAYJBVvaNDn1P3hn1R1iPAL9SozC",
  "key32": "3YZpiD1beHch9SszUscaAREa3bwMSzrphQfEgryiH5wKsy3XN8a4kw8tFD2aswAPKPyCVr74QAGTZpw5yXTLQWVf",
  "key33": "4x7SQHjibkmeyDWHmAuZEop44WCs6t9WBUBww3mKsiks3FVearSaJbmywySWbns3X2EwkeDQ7BA1w3XJ1GApY94T",
  "key34": "4WCKmJsY29srBM25AL3SKWnHRhkcga8KUMCGWZPc676iJUGtDP74tbM6evzx881GG2WG7TSTzRdTcTdSEWstMKP",
  "key35": "2NRkPQYgTCyVRjjhYKpBev79mEbuo8F9Wxd3JKzEb4QG1SfGLf1LYM7Af4JgrgpcaMLcz1YgSiAwDYKVEvkqGE5p",
  "key36": "3hKm3GBAKkx6S5ztpfqpPhbhtCk2UxLNLYiJbHmic9PqgY4oD4N3Gypy7MEsbiq9NU9f76QTVUSW3zRMG5VjnzC5",
  "key37": "47X91L4c6HqZTU2m2DmoV7MNdsTcdNQPFaxeiYmvbP6fLQjzRNS5dQgXbKfdMcLkqQMpvgiuoww5kmj2EKTBWNV4",
  "key38": "3VBVkDHL1ScammxTjRmFJqSx15WAyHzr7jE5EAgjHPCByxvVGo5LMKoxXa3kJUs8qjbhUMGHcvR9LxE8UyfZcnqt",
  "key39": "51UCGf5UuMZbFgUrEzHTLaW47KLJGzxraQVSrwfAsnxyTycWtVobYT7XbH9C6UntMhPZESHyC5vQXt36V2SNGhGm",
  "key40": "9ezjDG39hdNrCpEqNEbfH54QzCvY5UFwVTsZf2cihtyqhSqnbmtMzapnqjtgtRSicTsbwE6HN946cJdQsxr9MCk",
  "key41": "2f35T9F5Be1CY6H2VXTUF5LRFfaTz76hai9UHwEohYjt9RZi3KxRSEBNej7QMDdekNjcQoLZgLJgYJBnFiUsJjTd"
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
