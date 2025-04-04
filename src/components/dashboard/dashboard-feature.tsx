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
    "474zdEbkfajGHPLBVVqqFQiCwnx6jXFFygfVu7pgvb53yZZsTsWQh879S4bu8cu4n2Nmqw6udugU2SHHeL7YmyZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWHG7N1W9PY4RTWYFHPeRNeVqHv3guiuVjGkmJBPJATELohyMDL9xPaexKwQcq2arpZXb8eLPvY1mh3KCHyTido",
  "key1": "2bR8GgUAKGJDZHKozHNE86oopgyw4SFLYXAfmduyaSzRSBhSa9nThWopP4DboTgPkJpZpu8R8ZHcdYDL7gJeLisp",
  "key2": "3eEFywNyRVPxVWrUobhLTsyUemH2x3nBNQXwJgoa9i5T1DVFe6Aae27q26foSaUrcbRkBN5K9jUqroz1XtbhZNYC",
  "key3": "2dgej8v1qQ8cfc7Gd3JjWw48wfegAK9xZEWaDrBsC1ayJ917bmdopH6mZvGf5SUaiWqmQm9WKctcdzi7RCjcFvyz",
  "key4": "ZGQREArPVMuExcxfYdBgXmfaY7qmfu1pTDdrWif1EBJhTqGdE4Mr9hxnhymy1CyAJwgiv2UgBiYZL1JfGgbtdQc",
  "key5": "Q8ibuZ6Nv9UNF2Ubjds4PhGwADUiPsbv9Px4sC3PqcSyF2nsJqE68PjRTS7vVj34p1FVr7Dxcmt7eni9iQuD2Di",
  "key6": "5BxLDjiG3gtVBwGpNFqrnDh6SHnquLZEcxKvqBzEnQ9zCd2bTWWFsP28RRLfCNjFX9RBnPvxzMr1SJFqLabSuXdJ",
  "key7": "4R85ghLhpufp7GrwUomyMhGuPFYgiVcmrPWzg8KQVD5EeL4V5Ufgf3PDUxghR7U3EBgLqEA6tz23fdGQCXVM4NMM",
  "key8": "66AjD2jMz6Z7VnszzpDxsHBEYm6ndEURUDRBNP7RQWozCFCCVVZjhf9hzgkteev36QRuwgsLKdMcKjNM57JvibZk",
  "key9": "5KYHfoznh8QwW6upkSND8FCkn6VDBztwRgdAaSMUW3iEJRLTKaAkTDYPtG7LHndorrFjQ6H1M8ph53LL2ci7fZxB",
  "key10": "3N3nuaYg3yRdssQPEtPQUzQmkjvuk3Sv5qGLBVUQaqMc6Ri6TidecL33JdHQXL2qE4hoFGN46Ewv5qfiqrajFYxg",
  "key11": "61yyy3yF4GSkiZfQ9FdibNv9tKnn9dGbuKjDgvnk6bCVSUyH7hyy5FtBtQECZyL64yTrnroLSCyoj53w6oC4qmT1",
  "key12": "52vWRXfjc576P9CD9PgNdzBbZGMKVjyvuYhBEFDRN48kVwwpXUkki5UZp6qypFZvRxD1M4Ujy6tp4CAeioFVceDE",
  "key13": "qwBYYJAiL9P3W7UanHuwDpJf5nQ3rJ2fvTmTjy3DvcHwTpWy99BpHwhE3S1iqiJfWLtNvtgzgyudyjgjw6ooDXP",
  "key14": "wodCbUvq51QWAmJEno53GBKTzUUfhyCzaGCLCmoJEWW9UX5UYLo7fiHPaDjsHba48dVuMyWPTg3BXkc9bkTLpjB",
  "key15": "5zAHJ6Eio6dXuXbwsiXzV3xsqPWuJcUxrPCUaB76KUSckQXq5JbGFybyeQm2ZanZnUWc98o545pgfVAbbKERjm9w",
  "key16": "3vY4LPAqhawNax9ENDiRUgCkbq19BBR412HJQn2YM6YVBUA68zx82vvVMRrhfofeStzhrKTE9Msa11nsc4mQCE7b",
  "key17": "451EsMJbFj6sqh8KY5oJJRtNs7UUtBZzGceGQ8pNdk72YQ23Y5ceTpuZtDRqQwcsfGk2igV3p4hMSpjYNTFcPERb",
  "key18": "3paMkgCmrxsBYotxCepE5FEyaQqYzoQyUPwgAhfKn3M1DDg7c2yjFNEvyXq66UuaBB64bM225SD1XMi2CDBGLY5L",
  "key19": "3XiuZD4ikCNVTwPZN2ffrP7USudkrD9SaMHoLh6W6zthCmfSStbKWFM6iSS9choCX3jPzkytx1AuQKi1y63BL26s",
  "key20": "4NiTuVh9CciFeRKB9DA1SxFtTCTeetdp61yMjVVYb4NCN4HRPXVM8h1rRSAuuTR12kUFPkE7xAf6UXLJ1YDB3owP",
  "key21": "2mFgTqvzvWdVdnh8UpihT7bNNGjCzpQyy6UMYBkV6nXru75xxhHP1ZXERLmgukJtTufK8EoRGF7YzDJjbowMqdtf",
  "key22": "3ucLMiB7hcN45A9YrXMVpX2ELt9oXPFRKCZDKjsZMWVJZYi4FdDG8FyPP5wZrgiHQxMeyhGKrGjxdt1iUw5Kx29F",
  "key23": "5saadytdH2KFF12AmHtwfDhNJFKEhrQWpVh3EGDvQyMa38BQRSUrnw2kEQjDx78uJ8spNYLRZekNWUE27irjAhhE",
  "key24": "2oaDWbBLtNqx9HmaUWPpe5imndwd27PMcpt2GezzKcMxNGUeSjjhGwjS3Qgfg3sRjrKURZ7JcjNNLA3aCAech4UX",
  "key25": "TyRQKPQyUwCn9C8JuR4jFTjVPSZEw2WJGBPBXURBfcwcYTmU8Dywsvtf2nzgmvwwx268sEpvQYQ6GCaD7fi39MX",
  "key26": "3qDiy8iMQqu4GnGpKxa4mYfqb8CyAVWecvFTrn4yZWcMbkLW1uBt3uuAcboZ6i6drzHTBZSATNHWU5KXm8YeTQVD",
  "key27": "yVyubthng3mE7YCgAf5i29VBUD1ZVLe1ARZu1VALA6Jg67NTDjdjsitx6JcS4s1TGsEwTxpPryBN5UxPdt5kMNJ",
  "key28": "xVYRee6NbtkJXS1MMymuaveciRGxNh1ukZZJwaa9DdKWcVUPrHWX6c1PAocydEtWFiLawcT9yAKKYxxePtN3neX",
  "key29": "4nZdhMPjh9tiMtuVvRxNwAxoPrRjQL5NUdvDMMuBbRzGTyDZ54kexY6ZxPsC7hMrPGHAv5PPACDyzmPA1HYxLNju",
  "key30": "Qppn12FQF8kNq1eDSoNx3bGJC2uDCp6erD1UpydwXHAUeB854wQAkWowQz6KT4jJitGjFYUdNzLE7XWNjhSAeYe",
  "key31": "3w2Qmx2XxVfE93B8ejgGVYT1mxVEvoMBAF4uJ1YzQJe9M5ksy1Vn2BapQ1qpLXGMjBdveH3cMYnqKnPLsFEkYZ9t",
  "key32": "HMDWTWZreRtHypPgkcF5S6ZR3xXyka8Gs9fAnQAKqmXXDe9rhhkq6XwB3YJyx3tny2nUj2cNRojMnMfqqNJB7aD",
  "key33": "uSGA8sTsbxfh8rkc4HZ4AqQcRNfm3PAQ5zdrtPwGg8aNgryB5ibgCCMxEKfNj91Bj5YgvEg4GA5pG2gxwLm6E53",
  "key34": "4xKhtJ18PzRSztLxwCBhgiDrXv1z99jm7U1WhQnMqBvVKz7VAK11arvQmrNz4ompyS7X2L7Z6Y4QJVXTnbZj7oxP"
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
