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
    "4WpZMSxR7GFqseMynxaS71fQVtNqtbb9yVw1KjGRfi5TCjp2JU2TvgNMaLFGFcaPVtaJB6kFFSTcz1eeHs8hKfCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XjzQVWV64m7eZFkhhLtzwakJSX2fWzFARRUyftxCC1swwKG4Umn3oB8o8o2A3iB9Ay4PLwjGVn3vaCgw61UZMzx",
  "key1": "3HuVZuy7v1zdaP3FwT8k4Y3C2jZWor9ammFjQwgjut675WXENWLqXnwdwf1RNiwLcw5meMpovsUhig6N9ZgFnPSX",
  "key2": "5frbw1Tr7AfaKisCDae7ynEdz9A6CdM9ERnTefoV6PfTA99z6tZEAzJstE5b9F6UiSVKoTtarAXgxD6jZ6TeNomg",
  "key3": "39jEwpygHG2trYmisHFJa2LrVr4PTwgt3Wjic95RzaZRm5UZZJmbrEsUzDwZtkLecLaC2VtyYpgMsRwhLXQRtcvc",
  "key4": "3xCPGz7xGRkbgbwaPg84qfT1Z52X8PvXjKMTp1Cb7YPhBrCGfso1KDeVvKLGXUbQysH5sYmdBt1uftzoKTyVzizU",
  "key5": "3adSYmKS24eebnFdMe36pWWLPzCi8f8XEwTAnT5rgAyJFu5ENpEXfNdcXcRBqRc4V7m8vH5YDnoT3FVtgnGabr4j",
  "key6": "5kiHNLkozrEjbmaTYUTkfgbkkH689PTcoD95fdoCwqdqH5Lz6VfbZiyEVpkVNtgKZ34w2QmBijhpE8HyLLs9bqeV",
  "key7": "4U4Q4sZuYVAUQzDBKu4bdsdw3NQUTkEBfq5qNKQfc5pQa38dHoZ77GpHzCdyk7cpMLyW16ka6n7u6iCQCgT8FYHH",
  "key8": "3emTDbKvdeTCueMr3XbLzqMkT8NG1KQkbXjuhSqvV4ntWh49qTm5NG8RUUovjQ18wQdE8wf5S6fznr9FbJVQBHa",
  "key9": "3DMgbjgketbVJhsfN6y3czCNL6Jj2M52kGhUdhpn61FqxEnUmtmV9WSBB7WA5piKszHfC16av4Gjeq74HtD7CfRA",
  "key10": "cFKvsfXsqtsv7A9EUy8J1A33L636JqygQ2nvTgeaxQUeFodr4m4JbKWNawUpjxR4K82VVjZr72UC8gCg4xzTR4Z",
  "key11": "4WHCg4ptk9hy2LoXWvEFDG5hzwMhJ9EFBpyPLfr3mMEk6S4mFc58o3tVKtfz7EnMPk4FFaDViUkdncM5XxJBdqpz",
  "key12": "5va6ZbK9akvF74smGVKz8sEaRp2Gath5hpi21H2vuWhnvV2UW5dLx5cab9ZPB7tipuVkpf8eMscEtHSHsZKqkA2T",
  "key13": "397kMnp8SetWdojA9eugRT1Z1BrPskyy9qZXF2Mee4mExM1MYS5NGHyMKB8kKamx2QPzF5esoFpwkGXMnwP5EWh3",
  "key14": "3MyJQNe4E9Jmhc4PBBdvVDpcnMTC96FFSjPbXMCHSySv2rPQxTLWRqFZyYgWvDfyVXq6yTYQ4u6ZhhVVVn5si6TH",
  "key15": "F3CDv4JUBwKMYJC8wmfbbWxxgzTJY742E5K8xcKJwNvwAzFtbvT2Ly3Sm6rhh4LtZ6ENgk4qdcdTXmhzLBhGWxD",
  "key16": "2zndyoUKLDQgQGwmU69YjAHJHzGvTPF4iA3oj3fmucBTHbT7A6bE8cc3QZm2jpg1C28seUvGCpvjfgeMJg4oiAzC",
  "key17": "5Qk2V3jtZFe5Nh1zo1zHn95VYCetkwHqR14Pev5pgbetBdhHwKDyc15zefQeE2TmXrjmiKgQAhw1HySgnU6RVkKN",
  "key18": "2WvBSgqBgVGEEWK5fWXcLN4D56wzqrWAvquyP9U4Sqg449CHtx7pAdLP3AkASQhMJX5Wiktyrk92m28dSAoTSX6z",
  "key19": "4PqHVi2KkK1u9Qb9KHj7cAMUAUJS8GqLT6tFFXcgaCgRMJCX62xxFhpwzNjETWTynGJ87z1LiJJ9goghHzUXcebp",
  "key20": "5TeXtXS5bh2edph8FuQUxMbAwJmuWaWXjgdoZaZswdBXg1g1YxSS51fLv46XxDKBDJ1npWcaD5ZnkfF1EnUTPcXi",
  "key21": "4aiMzCBFWgy8LcxioY9MMW76STZD8a8nJ5PCEckUsNzHexzMja9ZZ6BGkeeTghS2a1VqL8an7J13TRJNViuvyJio",
  "key22": "Zio91vduDk3oyoFvJ2r382xAURttHFkwx6Vy7DSv8sH8rX6bUFFoL7MX5nyi2ewqpgcrcRNHZHDAE2dapmm7qrg",
  "key23": "9wNF1yDEEDJoZNHUvja74mUgAbELhy2Cxi5tLAgVuPM8M13fXSdBdQw12vZ4HUSjwwAQSUSnkgREBU6kcN3Ur4F",
  "key24": "2havwdWMznQ5xb5CpVvAwdvnGRsJYN34XTFaDVgc5LVZ4ySSWu5p5zw77YG5MNCfJqKSeeFccdzpXjuyJJaHZ5TT",
  "key25": "3jMg5eUMDnraNxmDjUDGhHsdywJYAXnhnTcQkvtAXpoFy8odgLPxYhHgYdCnSekbjxGBNkBSWhDENh6uw8wCkzXE",
  "key26": "5LmvRXvd81JB5dG8huz6t846wJes3NwsLUG7xYHbenJKuYkuHTV8iDrC9LoKoxZR9KuQBPbprt4rHMJUVthmcdTs",
  "key27": "2gYJRKvys2n4jF8eUVECCNRapNgv1EsBRCbQPYKixFxBmTf6osSkFENDUmouUMSYJ1KT6RmecDL1SyimfRivtTfd",
  "key28": "2wnzY6Z8n5MywhTtDUewMd944GjA5XY861Cr8JvoujMLiE1FCspY7Qu8dE3irLrWeK5V2au8Q5cW19Z95q4rDAio",
  "key29": "34t7nAgKAebR6se77WB7vtWQ2dkA1u1gVZh2GNJMBxubvhSLc2s6rAVQk6UqR6v7pZHub5yeH7LFE69YzV8PS7m3",
  "key30": "31GVZPHaBKR3kvi977JL2Fco7dK7ynNYp7VXAAZFgacNB3oXQxnHzCbupPoTnrdLXgM3CUNwiuDCGjLgeP9NwuwV",
  "key31": "7UptPh2ShJYCm9tn873e9TWrffWnAg2c2eEtmB8DAdHVYv4Ns6X9yTT4JDrsGXBP3WkVTwSYkR5vBoVbehmxzCg",
  "key32": "5akSHnhFDGmoQhA2TQM8C7TcJttJcizhZG5JixbbzfgaG2rHNUgNaBt9EjroUXSikzxsLbqufpvN86jFJKgR5qz2",
  "key33": "2MgsyfLNPdxZAjefLRrF59FmWKj38WhEmhfZiwmMecrNJAuVm9yQoy5ushTApF3mtp2iwXKdMJg4Yr2EanQPpNYE",
  "key34": "5HJFQA99cN6Tjxz2zScpowoG9xn3tqis4tGWncNvJeiLR5AzvPsqvQ58XunUTuxSX2nc4yCyED9ocHiedPN6QWy3",
  "key35": "4UjHoRzWhm5iZ1pTzq42Ek38w2ThspNqiCvJLZUsPF65aifAF8vxUGpxFH9sM7aR6NcHQoEeaeBhH73C4Q7awRDQ",
  "key36": "3CH4fu3BdauAqzfdsEveco1cZuDuinFQwcYwQZWK1GqW6giZkgwTvQqofKu9MctSDtv6hqyRe9nT2pQEmMhLMxGw",
  "key37": "3zfKhXtUXkjTJYbY96BXyeJNv4YRgs5v2zVdqifzG6LW82bRDLcjjvrBAMcyqJjj98G58Scmxjkz7KoY2Z8Y148B",
  "key38": "4qAckcAErk2P5R8VcYyJMrkQsvL2m1WyE6mTfUQqTaAzDFhj6nuu9UhxF1gftrF7wGv76RHmBB8pYGs1G2ezNHGr",
  "key39": "2hVCoBNjcF6wfddj6dayBBXuR6XKMdyTJNUEJkrHX6wi6GDTEXmvdNezE5Mv6ixxrScujRSBrM6TtXsw5qGp7xoC",
  "key40": "3ysbtuVUE93dvwqo5Y9UQ91xYj28PK4FZTHTVLhW4D53PTtiDiBbU8dmiupbMF4Kv5u956UWwETycWpB7yr1zpRH",
  "key41": "3P1URTxSi1EK1qpi8C4RGPS36AWFVYPgkdLm1XgTxbZcWUHaZzvGcPo3D5NSidHdJbMV7Njn2JCZx4jnSNoeknfg"
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
