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
    "5GG4C45VhRApgq8iPdLDmgjuvpVU7qyhDgPS5ha3BdA22XgjwgTcyCscnsgNvNMgE1vnpguqP5kdooaAM7pQkF2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSJ6E3d5QT4i5iyJpZ3dQzkw4cm8HbnqZ3dVNEQXUB95GjnKG5QVJe4yXJQQ8DfeRZD4xFznSDuzntA2YVNu9b7",
  "key1": "2kZoaqYxnwLnaGNcnrmBpsRwvwc6EL19BsC46DMfpM5thBCYAa7YJ2YJZzmZcs3xQABvFaCksgK9MN1KyDDafLq6",
  "key2": "8z9xwiBFfKPGWJSyMLBVa4qs8sHqSmvASwQy71uE8vUeoVX6pwzfCbQCn2hVBcDvb3xHLo34xrF13G8aMmVu2jp",
  "key3": "2Cd1dykW9EzvzWjq3cspfixYNHBoJhAQV9PTjPzLqhJiLBqBrGcsAH1nhJargzNSmGSy4rdnJWnuMfvWWVDPjkuR",
  "key4": "5NUX4jNeNgiPHu4G9Q54BijpEJf6HgRW2s1DAy58J5YyLEeiNV8pCLKXedtyanNfvmzTbMAQfrt1bujj9iE3em6e",
  "key5": "3iVqVZ4U6BjRFQ4YsyuvoTN7sur6kM1aMqhv5E8qVDceTqfMSaQ326EbQxpH1j1rub5Pz1RgFaHRqDmfDiPaQYFY",
  "key6": "4M5WS5aR7Jn6xdgTkPMAckRoJSBRqp4gyGCq2NRHA17HriLktK4JGAi9HJmnoxqSmWgqkP4ipSFpDhHUF7BmoDmH",
  "key7": "2o57W7yQ9rCFgfdioXFmZWoGcrKVHaZnr6LgEhhMGuToJSjdh6TsrTpdNwbS4D9Az13DnemU7fJx8GL8uoXLbt3Y",
  "key8": "2rXnGU8ei5JoWKGJqMFe1mFBjWryVsSK6B6TEusg27Niy1zWZ1PGci5SdUh6UK8R4RCxWhQ7aDd2jUEzAPpsux6b",
  "key9": "3GwVt8VBavyvfHxsz5LyqasjfRtzFqfSHgcVoMaRiqsiZrVLscMvjHyjxeBMnTM4cnjbaHQzpo4eg8dJCsbmfkk7",
  "key10": "F8epKheQEVZPk8ttsLUDeM73q8biaCiU6HcCxxa9btYHxpGnkek7tpJZ16TMf8woR5XvL4amoj5BF3Aj5YnZ6uP",
  "key11": "3anbMSWxLbfQsyUBR44XG17iV338Df31jdaM5dd1fYnQ1urJvTHybqM5XMxZQhoxGz8dYzSBJ1SWqpv5PY8UYxft",
  "key12": "7eg4YWJ5fNStk4CpsL3eptFjBr9Fkc4sKqHmY7Nk7DATUUdjT8VB9m2m6HVTTqhpWQ2gKspNteTNMbdrKKNHZEF",
  "key13": "53MJvUcYQZrCWHuXkDCKiZ3ALXA4ZwiVDg8iehEgDQWtMymMFH99LEJhYd67wk422WtCCWgyyLbWyU99SU489iyA",
  "key14": "3oB7umJCqDS3MSfYF4NvgGq1mtr8ZkodYMHZaSa9Zscp1GghXB51FHgRnFRxWDTooiMjGDNgJT17UsuqCfNvKqLz",
  "key15": "3HBwnc7TVMkEhu7RzWzvALN3fS3BYo1QohtHJDQ7BF5PH5kU4SydAEtccDD3Dc7DK4KfqEz5cpY8rCAMjjSNiudA",
  "key16": "4ogRqhKHT41S4weB8egi7tWZySTtbdBu95iMtY7LdFVTX7wat47QwSpT1D5S1QgwbjM1WCaZqdDps2FpNCL1VkQw",
  "key17": "2YyQJX7h1GEsCB3V2ZDPGWtd7eHynxp7jHjzJH2n7n21xkfwfnKxs8WCtaXLVi8JdZMw3SeYQPF86Z4HD5AAgkGb",
  "key18": "56zjKpLzexsVFZ3RrmWyAcFgEWwyV5vE84wezvuBHdQSyaRSo2xZQ58Ryw8pnf749F8X6XLRczsESYZGx3k64y9K",
  "key19": "2CRP3DScSQJf9URKPPCSQQx5BHQCCscxUqBbKWNKGdiSPF9aNkxA5r7M2ZCAC6KDgY1b4A8hbLo7CCMiytZZY953",
  "key20": "3Dq5oqPe3mEhBD5FqPHkS4E9JVxDYFVZ79ir3Nwa3EmUZxLLkWFKhdbGF873ZG6WQLWpE4rxbAeVGWmoAhSVTWF8",
  "key21": "121PKGB8tE154f86kg9VSi3s3Wfa5HTeDew8DkMwFYu6Ngo28538aSNjdj3P9r6Y1MLDATCvufuHc98quNmyUz2",
  "key22": "5LS6vnJfG9kzBhiZTgxVHzjJS76t94CdBkUuHVJvVr35PWqqPxDJ1ukCCTpPw3MFsv2uTtKP2YF1CZDYmgL2eRCU",
  "key23": "33DDbhQ1bbU4Jxze649Sj4h3w6LzWJanw7J8hn9GCLzW5o1f2gNTYrDHsRzjF6vSks3bg35iWkUedzeATwuXeJGj",
  "key24": "3WM7u2qCEBgv27YDMTy5UsTtSaoiPiDBeYW4Nj93r1Qiz2WehJ5so1attESWiHa7EPKWaRezHW2QWCoVd8542vqK",
  "key25": "5qu9pj3ox6TWDccCzV6LSwGqeT91GiYLkV2dZSCPhV3S4FCoQxVaNE6Bau6m4AmWUypQx3w6Hs1B9Fjz1GQiVMTG",
  "key26": "VZJcCMue5XEgQSwZQwa4QS87u68FAsWrHKZHXbH8jwmaaSYqZU2hUWU6B3oDCxQDA2sdSCgTKhZtP7ZzyrPEpZq",
  "key27": "2zBcEFdtY1WHinFCpHR2Kd9HYVSAbmuY7eFSMKtM6M7EdDb1s38zzEioiJy3MyKpQR7nLcTH13amtZMqu4NsSYEK",
  "key28": "56RZaUk2AgfPbgPkbBD8NkuK74F64C8Jv74AcHuFgpG8H6sSqDxT4BQVAsmwx6B8AVcJvjSygeJ1vsJy2vzDJktq",
  "key29": "4kHf8Gqe3CwGxRDKFeD4BdQYi9izGqbgJr75bAgZ5s8i7uKUY8k1r8T5AJAZjd6rECPPMZL6cLgEEaUy3T7ULSeN",
  "key30": "4W5dVvNyRheMo7FJri2ca1YY14RF4hckyCmXc9YapGhEHS71kVhSijpfZtJoqS9Upv9vDbjogqmb5XhxoSjpBHby",
  "key31": "5EQAgpR8DosiivLDehqwjmytQRU122XSxbz5rhv2bVLnKS96DuwHruivv2eispWEECwcJ4rdsG6MrRBPS9wp9CwJ",
  "key32": "65XaRN6QKLqJKNwARRk1FgPoEPbrEgwwsTZTDagTCnGomjdKCvVGQytE8iT7vyt3dozqh9rbVWF9SnbF32wt9T3r",
  "key33": "5dRwNqLnbzmgQZmbwkVz3nCUBJLjRHhGE8mKZbGuXdn6YSxs3k9ux1BKGtPs1ccDnSziszXiDpHLry6hj1gbSXAr",
  "key34": "hQmWFABVKCnhV69Vxjsg8pXPCjw5DxUzMbDfA8H9atBaHBpPJCi3sejbyE4VCABASyWsWGStzDuCJ4gDDaYGpiV",
  "key35": "tXjmJNwnc79VYEHzLFDN4iVCJH9V91DsFfDYHsL2wbVXkPsF1n6vMreqPx8f1bZkwtF7B9BYbBngCQtEmHgE4VH",
  "key36": "2eanA4KgVzDANNaafBFs7ykdJBbvhCfJvEqmnauDnamFstgPfAzb43dbu1XD9HTTzs7sHWDCcGAVFsB529hnEACH",
  "key37": "5io12NdjgvSEyT7DBC96i3MnhJonCiBLy2um9HyFgMFmcjURpFq6rHCTmv9fGYFKHXJmWvUBg2tkR3N6dayD2zrJ",
  "key38": "gyWRQLJbVYCc6rKaFPVkXKFYGxVk2UPtTHskciDMdYqBLXEaNbR8mc1xvKqaBjfKtq8KkFfpw9j8niyCQtWJZbJ",
  "key39": "4DaJfatUvWoAJcxkw8ZJ2WhRWgTPudyo93hk35ZuWmy2f414YeqxTGoeFxbrkrrTnPeE46jieYU77gFEj8FYjWDR",
  "key40": "ANRUwiL3tjD8sRWmd2ns3JnLYwon3Rv5SZDvkxwA29GigwadwQg8YSBfMw9kpTj6qh3rmuBvwHsSi1ejZMew2FN",
  "key41": "5mdZCZHnZj98BXPg3m5jv19o7w78o6ESevPYG1XXXQ4emkKaSNARqSuVKFiwGgZgwm6zsHh5i7zU6EpNgeFZqmP6",
  "key42": "2n42HjY938Cfc4FD8Vek9fBHecuJFumR5BsgjgfeM3fKEdUmE2r6jiV7r5JWYiQsT4TFPftuVqqYDpjk8ELa8EJE",
  "key43": "5zbFPAbQYhcr15CT2RbsvFrf6XT2JonstkY3jNqaLAJv2ufUkjMu4vo16McecQFhysc1g92J5nun4jagSLRNA629",
  "key44": "4JcLCpXeN2EK8DSUjnNWJh8iHAGMrUBD2vfFoTjvWHkYSEoSvV9DZixbXt8BhrJNH67Fmy2WCiKHNypnX1HszWpw",
  "key45": "3GFnjWSst9j3TiGyUQnrMp75yDk7r4vJ5z9yZpPNYFAULd6pJmx3R6WjH1smCksVRnKoMVQTiQ8WvWPQaG5CpUid",
  "key46": "twfdoZ5ze4Un1AttwNvU12KUwAPK4F2gW9mrmUwqv9FDh2J5t6GkEJAwtPUXrCaY1Do7tpKGiWkJk6NfgDkrXnW",
  "key47": "3tQnHL6Jzutox5i98ig3nma4Qen19Bwg2DUPW8wkQdtMvE5hUFx8dtg6L2pC2dTi4pVckheQAwmz7VY6J6NW1MYz"
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
