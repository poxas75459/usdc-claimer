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
    "5CAvWVTMkLSgxCHPGrDvZKd5Cdf3TxEu4ZpDLx7qsUJakYLTnXrksXD8wgJUKQJronrUvQDgN13Uu4QnjuGCZ9Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXED35YEa3nJnYKNP2kDuQ7VD2FqskbNQ1cFjFuv5TWWVMuYXHajkLgNXhDG9fkeJmmTzMHGGTubRgFmDWyTxw8",
  "key1": "4RM7PwUnnW9wYJ5ZEZdoyKxUZqHVVfuVUWLKg4XeHGDz2LXQkXWESc4RSTqdK746tWkcLuCzZe8XJqoMdwsNxMPw",
  "key2": "4fU4FhTiZj4XEBYc425sAyHqcd6yRshHR9qLKLPGxRRGSd1LhqxJFi7LbEUuZWw8BzEAJq4hrpxpuNwdkRn62D2S",
  "key3": "4Xa5rSAsEN3ydmmCmCBorkbJDbv9iJfEUgRWndDazKoNoWCmkmv5nJ2hrMNNcEACvZPHFSQXA69hAcKooeRDNkgM",
  "key4": "3zetFwxiNT1RE6XXmaaNtkwfrx8gDAneEkNsy4jUnh6fBm5QTEJy3Hf5kvXNqUAzu95XxiQjBm1nQmqtLWbvLtSN",
  "key5": "4zHyAnxwu5NzhxGCcZfpHeiHx9my4Tu7wuPBDkgqsqcNC8gWcoQPVoWjNv1LRHC1NVGnxBJSiUJ8Mkg3ujXDy3df",
  "key6": "4ssXM7RBbJKb58jjnsBXc6d6c6uow2YiMUokZD46CmMLiwxntHFdkSQhv7RnVCLv9CjSscyghabbiTCugcLH3CFS",
  "key7": "2gA8rQjnYNJBhFqLCmR8emhgwKoynyrQM5aLgJgGsa6YXDTp75Gheyjs9N4uuWSAtHEaoSnkhpvTYUebDYE5BccH",
  "key8": "4xcZjMNyT5kuzGcd4AQtsE11BeE93FzDRCgL54mZdyyzczK3fq7jLohozENNxKpm6GzG13Y1jWdVi3K5wgA1Lsak",
  "key9": "3vVE1FpU6n3LqeaAN8HqrwUoxckJAdpVJ2sDWDnrTahr8UVqmdaoXaCsXLLPNgTnEZsxZaeSxw3Saf9e2uRxjEM",
  "key10": "56NZBdrzLFUn3Un9ZBxz6TfPD8CWFWDedsaY4xko5XspMbb5FUxmKh1a8GrKiKjtt71qZcbpXUgc2avRPpvPh6hR",
  "key11": "3hj6i3BdT2EMdEPpWNc81HQXPXWoumYWX3uucw1UeNgd2pDmq2uJDNspmkxguUkcVNdoMiJaPAHbXTUhcGxDL2dA",
  "key12": "5KpFfoPqNW9KEL7rJuLH44XCXpbifCKNjQrE5NhvGyPxXyS66NWekkDGK2PQ2kbqcbRnHsYDRXYqomQEakFEeSta",
  "key13": "2iCW2knU9PGePyWcfvvtQffFBdLZX2cNiwy6ZP6TwDcrR3XgMmkUYpKPXNAAqi6nhRf5yDpiXqtJzxVn1e1yweDP",
  "key14": "5f1hdbbsDtLna8TraK24RoUEUbBR7uiiMwFuvKiXri9ZM7mNq4TPihLXH2YTodVUAZw8MGeJduL9d1txnf6M4QFK",
  "key15": "ETLUXrvDXjy1Xk5EzZSEd9sEfyzRRSVQ7QwrwaqM5V5LQwR3KVgxTTmcKE41mM1p9FnFQ8gsjKFZGBsu2QQtBKu",
  "key16": "4DjYjdyBH1xGhG4Un7E6Sed5f1TeBvHT31cuMLu4YWdQQQSiC6fkopo6pztfK8fM2b85GAXaqE9UGcL4ht6Ac8W3",
  "key17": "3NzdnL2eCoU75vDxRQifeMv6e1b2Q876KGrxTf4Hen8sZPehGFFQ8L4Lc5jaJX4R4MpLppDBiL17bFG9wnJJoj6H",
  "key18": "CPPrMeKTXWuygjiqW4QgAqCDfa4JCxZqXuQDnqmJesuuAqAXau65JjEzvyB4VGwBuo5iNkMdQJy5yyqpmqC6xTG",
  "key19": "5qcRvs2JGjyEsK8QKKQd4gmjdjnYLeNR1zqAyTMAgsCRAggNRUS9QpAwEJUmtSvieZPqwAcUcb9htEqzKS7SCgsP",
  "key20": "61LN8cfwwjJthtCqaZdtno9WfGkDbWHKah9YSHd4XRno73aiYoqQjpLkGtGKC4oVdnDNCYhzKDMu1MEAR9jArcSu",
  "key21": "5TSVzuE2KNEjqn1xCA4z2p6Vx7Sy7tSFMo3kXivMEW25nrWHdYE2Uog4gWBcHcBw1hM6QCr3zr4VwdjMmms7bKBw",
  "key22": "v5eZ3tMR5XhhP1BY2uc327Bj1735XtSEgLrJqroejhoYQisL7DaTqeEvL2tC6LCobikEEyEyMj4fCaktL4PxYMa",
  "key23": "4ukiJRDxwNsxdwzqGX9PBbKMPTs15NVDkwxPjiMeReeFiPgR2oA1Sxq6CLNW7YZnEBkyWrxYLvh969VdpavAiFnj",
  "key24": "QqAfwysQ6YSas5FbTKBH2uzkM9BJF4spv3hF8z5bAzYo82p8KGUv17oXHraDC5V6tS2j6o8kVUPkJWDuVvUTkM6",
  "key25": "4QFNbdXy7mKodPNtXz1NYmFNe1SqNBXrAfMPUTF33PexXss5FFrUsaozbbkH7qFFre6gdLPPD8BDV4JdshE3vnqj",
  "key26": "TVbZqjg8UetXmRQMnvGKCEfmSBh2ZZ6ycqgCmCyH9NHGGdVLABdJx6sF8xHbA4UwPtij3QgjK62StKofSJCQHSf",
  "key27": "4H2LoTrbvz269EeXSS5b8oVjBw9sGkMN1rLFjvSakPMyquZZT4PJvgYd3njCJzzkFGDww7Fig1YMNN1mrW6T7e7b",
  "key28": "5oTedHB4kbxPBFdBEqhFiRZmRnjvRaqd7GdLmbbAKbQxBm5tM1di8X3x76L8cexEqP4DUWTWtcbnurFk9z1t1Q4L",
  "key29": "36Y19ZXVARRhmF6N5chWsqv52M5hVGxqC5pkouTWLZgGg88fELHVCzHB4zcmxpi7W6y8iyH64aoXvfKdTdz3Xm5b",
  "key30": "2vvPcN81afH7cjxqPaxLSvVbB9LwmWph34PTFJ71jR6rkbiP7Mn54U1vRfG3chk1QepcWp2KjNbQ4fhGejgwsLrz",
  "key31": "5YHMb2pSUNdDnKomFZPLBDRyVNhavYJjc9Au7ghmM56TaaARmij46cjKEcbvas9VnmkoRot4yYp29HDqQuxW1VaE",
  "key32": "4UbvoiNGUfLiKHmXrhhBnmVe6wxAUzpHyFyk9MVUb74f7ADzgfFYRb9QLiK2gRFqz5nUZCW6AAMT9FaWpYPx3HYM",
  "key33": "4tVZr23wgaCuiAmqzZ5VUVS7EPweEBGntRaopKggUe8QdZPGDTtSEu4dBCLPDPmjuNWJYoxFYgkfBnqyxgLsX7PS",
  "key34": "58TQnQE8UKR1Epr7w1b2m4b19URunsFq7GmEFzRQsDBaCDD7pRyPyMMXUbRo8sfEDsyfkbezetB3xDs4DXdSjpuF",
  "key35": "C9mrckpsKywSGeuNyZXaMvh2fYYGH9ed4L6FayLpVXsctLzejzXJzC1HpgaRKU6zP7EYasPanu3zNnhg634tHgM",
  "key36": "4k5B4qNyAjNPSqdhLm3LNYRoitcqpyJU1USdAXqhxUxm5voXKioxGiFrDYv9ZRnoqLW9cLTq9XvEapGBig96ceuG",
  "key37": "2gyjnfoACqLqejBQTqYAfC3ibYT8pWPisvnLbQBMM9aMwrMifVbXRhWzPMoDULcVbU6fx7cAGRLNWkdn9rNNqK5s",
  "key38": "5B8TaDpXKd5dBhQG89G3xbNF4YXshwB9cXYLVnL2LAUMrhtrYx1zRRFuMsQzL3WMi7o7NgxTPPDfo3iUqjrtkmxU",
  "key39": "4PTZDfV1wnwxr1szHR4g18px5RBqiWsSLoC762PGCP4HppZVBJkjPEjkp7KuSWDSwBPJUvBG4qwfoUmVFbwqJLgj",
  "key40": "3twap58Uo1TfXkS1e1RYvH9pekDB4vJ9UxAw7chmfY7REa88kKC6Y5VMdt1ngBBM4kYy3x9djQxb2wA4aSGCuM6F",
  "key41": "3XjHZ1SFHJEgfFvhW37skjNirHknaWmyAFibSBVZZey825DcuTzMpLkqe25QrY7WH51HdSQXZfcS1YBWy3kvegVo"
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
