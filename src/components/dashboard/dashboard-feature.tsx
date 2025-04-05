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
    "5Ptx64PzC9s87e7gYXdQkeJZg8NDtbUPzpyy7RYxs6jQ6QZhJyHXuPN87qp5zdR9mGRmKubf38Rj2XpzpoyQypuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AFSej2X38CRu7HKAPQ1H62R9fSf9t1XV8aE8umnTnJMwthJAHRRWYasMuKgzRozoGuQqoaEKfyayrwo6C3iaKyG",
  "key1": "5NuoNjyzqV8WaUBgWK81xPA33ipDC1H8YDzJA7ujtMq82ruT1kdtLcFvCxeP69vKQd9u3onFDaWWTXvRMfCbyuac",
  "key2": "2wounBVMLHSFg6fM32zv6FqqhXrZsNn6FCAcjV4T7in9BzMx9Ck5EoLq3f6vhZPpfYdnYPmqjeDZrL7bD1airTy4",
  "key3": "3YFnY2DgMooWL9wZLWRkatQe3wf4FqWFq3W96xVBocU1CyMJbnV8eayuYPAFuPpyciGAy2ALVKAsS32xWfpwc7gS",
  "key4": "3JvCLyUeS6Mp4oYwi3TygrGsF2fWvZkcGBtiUVrbZhwdGjcsUSH6HgExrxmJkeCtJhK4JcKYmAZZJfZ7Wre965Me",
  "key5": "5bQV2mYv3St4AeJhWNxGXZsrVqqwZAeJ8cjcFCDvghDPwci5a1XhMLjRX4GgwivFmxoPNDMRvJkGfkZrkYWnNACW",
  "key6": "2dsDnQrA9Nf6v1NRLYqNvZeGP17Wokh2gGTWBPEBVwbVVDn3yQAwmuMNJMFELXkihsx8MPuEVJcYpJcM5cJTzz7S",
  "key7": "237ouuHx7HTr2HRT8rBA4vBodgjifft7LxKrz4jamdQkeZc1XEgXogdBFwgjSxPiz7fopoEvEQKWSvcjXdaRvwNH",
  "key8": "2dCtfdwQdtsdQe2KaGs6Ze52bsbQENayuTF8aHZDBd4Q1sQz98VhGbizeE2qRExVcHWCnVh17f3Gmtjg79kQY7bW",
  "key9": "4t3cSFdV9gP1jX1d3nVohdVGduaKjDAAgiHkpL4c2pbt94CX38ZX6tUbTPkhcUMLQeuosWXseW8q2fKxyZG5QSBa",
  "key10": "2GdAH3dZnwfTdwAmjTfhtcK6fyWe4Kh9sEkJX4HTCpgyc5hwSaiHFvJWHknDPraJn9RsvSjqvmwPtCXmEFwkqLJK",
  "key11": "4qzHPvYCpVyegUKidxB95hD9Lxv7GhBvD6SgsbbX4ExM1qaZ3E6etGdB1R5EApAvk1iRrahbjyPKUFiGQGKWtmei",
  "key12": "2kba9TrEB8n5tTvCJP1YYVQFboLo7ZapcWgGLTma7HjmardwNgP9SE2qj2FyevBYJ2QDhFDd7tTSseF65ZajeVcL",
  "key13": "2Tgu8Lro7tLFuPKeSa5D599R2bjjtc8exCWqjSW4zdsqbtsRkzS3jcY4DTfNMjkvceVgaczb5PApTSVvrw8cZcpc",
  "key14": "4M75mGiy4r68BbMCdwtp7JmECP4WU3kNmdCU61aSEfR7E9qb3BZrcMeKekmMrLqsYFDfM6XZg67rgEc2WjGrEk3H",
  "key15": "2hxjKSzkAy63WxmPHdjvPN4bakyZLcUDhJ6ZK3SYSCnAvqPewB6NRm6KQnyz23dsux1XjJcaTNnJtHTKPms2mUNs",
  "key16": "2goBrg29wZMwzh7VSWwQLp6RHHi26YGCDc5rBkkWDGDCZ4R35ad9BR24CK3Xwmb8p6vEcqKTEybTJxSV3V4B6U2v",
  "key17": "5F1gfDQZsmNDCG418Np6YCg3GqjixycBTcGeoEx8172aRf6eWoLWsprTcgkw5n8EjcGx3tYdeJm9wqomzqGgTWxi",
  "key18": "3Da4K6Up8KxWQ3RZ6Z4cronNSZwRjBWcSt6Aw7fDoLiYZ8QmiFcun4rmRo9r4sXPhFUngCL4P9yktyfFhjobJ3nY",
  "key19": "4Lgqx9t5FPuuoD1X23xkQwHRxismcSkJdkaMQVf82zzTCWgEPMjervaFJeWNPqKbnurT74xUmkcK7derYmabRFEX",
  "key20": "5mT6xYeJ3mMzvjs84yJQUwBW3JSBYiy7XV7sRnJQXYg6FqjiWiiwR73PW1vCLefiH2GMqCodVoZweo3WnNW173Gr",
  "key21": "yyLgiRboCuX6QbDCS6Ui6DBFmCrzrokvc7q5kcrbqgS9ZXfoEAaaboDcB7khvQ7ZuKkFKH5DSff98H7ySxMUciZ",
  "key22": "4SQZexPMUE8E4QmnctXS3goF6pxe9WJsuSXqoX6DXK1UCLGewiXUpKMgKYkcQoZWbGwhwnBLN3sMR9JjAZU47zTy",
  "key23": "9y5XERzropKqXTRaeijk3WgFTe2qGcPK8SdFYXAGY77E1MWSJPr8NSQeaodAguzJVM81wArPKtyC1YyAbbn1rAw",
  "key24": "2PwQgiUmb9WjYinivHTqWW83E7tVt5bpqJgwQb9Fi6UpP4CRaCKQ48VMCVSxpRrMhdHWKhvNfdyEbgb975Yeo1Ar",
  "key25": "2JKpj4o1DyQK8AhLeFTLZ4ygjPYK25C5VuSa65fGAhAp6NBtrNQFY4AraP9ci4NJKUup1qL82UPFPF8qGJJUh7PL",
  "key26": "3tSxnY1gGod3cLayrt5hJE8fpqtjFwGtwU4mkXTsgiKcPpazs677LjJ3o9U7F2uUdNu45GvDwygVmYKYqDaXi1yQ",
  "key27": "4CUBcarAW5VsXg9PyArLsc8Jph1obEdTau5vQnf8vap2c6iM4C5TF7J7Rsfq9Vc8v8YXj1YiX5E5kMivJVhB5nJ6",
  "key28": "5miNocTPYeGoSCsiwYUdrHihusXJL32ZC9owRiZJ1sNbKwLnvDMw3SxRxwDUq8keLpiFjWD6itf2kodqHser2vxu",
  "key29": "47xjWo1SxkZpmBMYEkVBh47dHd12GVE4DcgeEkC9zLcL1yqutD8BEYJfpXHUSLhCz4H59rk4fM7ahwgyAm8mvz8N",
  "key30": "vcLeWkAN7GsLQbS2ht2XhY7Pp4TEV3h4mP8KkNtVPRv1B1av1WGP1ZgLWzfs31FamuYibmT8srtoLnX65xp6kUM",
  "key31": "45rXNouVNWMCjiRfpjcMmgbX6CQNFuq4udq8tJfj4RrBoMnb4ureBPyuXYdBjN2b8om3BndSet8KCKACV7bcK1x",
  "key32": "2grsYvPZsdL9Z5Q4iZrjexahpW9He4KvjuAuggb1fdUGsQBm8HMZzjRLbB2qoySxPsGG69bJzt8QMfsUaiHgnB9c",
  "key33": "5BGMURGBVF6RJZtmkXuMsqgN5HRN9phYZBtV5sDL4ouKMfoFeuHwmzKn5Yht1o1XD5VNGUS1e2ZUKCEEQv7Wq43j",
  "key34": "3EoaCKB4RrSbQneAoyBafvtFKwMYvjoVgx8BPgwRdQ8HiUC86QYnaN76mzJbxPoNdkEfP7i2nAH4jLTdBcLjYPFi",
  "key35": "d5faoCHcrE69EQV68wuSPrVVkmzKS5B6wTMCn4d6CVxREKCXvGGnEZWyFn8hhbeiyRvzUk5dkHmEVXDKiVzzvfH",
  "key36": "4CffBzVZCUC7KLn3JDGLKhAkrWBhrwwNMWJkXSYRZJZKLSKLovu9VVB7bsyUU8mcgN43BWqfLYqGzRJPtfbfvyoj",
  "key37": "2ggy9BzuppExH4NVtgQRVAf4YwZ444hpSxbSUKP1Wq1VRFKtDvbTchsDrxNh837Fyxhjpn2uS5zh29xwjEYQ7SxU",
  "key38": "4bLn8Kq6FnUKkvFw5YknHAbYtFV7zBpPgHu2BgAjVN9jZRSq9ZX9bkKB9FXP8EjqT4mvgtcaoFU5PcWBVMqEmeup",
  "key39": "2yBjtSnq62PW89uLnkGZr4XB79ym7VFJ893w1Tc6TnqkfbaPRk9iXTBM4saXG6UZGAm6CBvTmXKrEGTXHozeBRn",
  "key40": "56fYeHurAUZjgf9bMcUXiFi8BFtnddEyPwXC57PCmuTmEx2JbMRhDbv6Weo2rWPupngPjRDfKcGxE2Fiue2H66kx",
  "key41": "5grgxqHj1dd5JULHV1cyE6DDVsrabmvftYM6HbwjH88mFSN1p2pqTH7Hq7iidLyaMzFrquxS4A823xCqfdtSd3ik",
  "key42": "2rDiKL8STCp3VTJKNDEvWC28b7qm5VCvhFgvrKvSF6yfvamaL7gToHAQdv2K6rJHjh2gch4uqBfmwFiAcUZmGDRL",
  "key43": "5BXaE4XY8sFe1C8pUAzL3U1LyeibcPSF8DczWPVdAgUEEBF4LWgKEqWfNPNPsNTonsYcZvw56oaHiaJr9NYZfK5P",
  "key44": "4rksnS1YKHLFGNss7XEB7TsvjoFdBNBMS3QREwjdDieoGcmazJvmmTdPW8aEbbSuXKzmAq4ky8ZNN9cHYesFe4VY",
  "key45": "3DGv2UVbCLB5nQcCuqUYzu69AYoyf7rg8JByii7yQaxtpM4cWGjKj75JM3WDG7TWq8BQdU6jGkrN3d6EE9rQwzab",
  "key46": "5wi1hsAayYUCQEH2j6nCbkSMfcTXBguJiPACcwtk8bDppD7gnoHUCM4wZVaAg8bVB7De34FPi5B544XiJDFWoWs8",
  "key47": "4tq3L1i4p2CCCyaPUwB7SpASHn6G9Hs2fruVCaTKKqbi523KfQtDXTPyRUZ1GeGVeoud2PWP7srSpLfqEVcdQM77"
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
