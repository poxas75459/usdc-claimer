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
    "5o8rmbbNaoc4Uy2eB7ss9JSPP6b5tquUr6EcVjYBTJZdwUfKyG1Hkv1J83KFZQc5PqmbMgDutjkf4piPUBYha6RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAX8Uh5qfngSkzfAy82CGzPfKZBHWUetMj4non4FecSDx9j3jgQety2n1erZvAeJmUtgf8YxskbESVvgH2UpMdK",
  "key1": "4xvCGUvLqL67P1t8T6infcmV6h4Dh8E4t5e2QSAJV6ECFbhzMyHxE3AaJaGZmi7qmHdgHCNVVNabxwN4zDRBJ4ai",
  "key2": "4xMhoJ5oW3uZeYvxBJ5ntojRKZtLYHvJM4ZFEMJ5Kw9km5NdejZxPG7BaqxwsWbu1LbdfpHFpd169F8Uq9WTnVFH",
  "key3": "3iDv1BHzPgJY2J74qf8AkLA2SsGC8hFkN3a3J9eDswQN9TZo4yeJQjjNdZoLQ1LKjFyAcfxHemLF47k7NQmbk15C",
  "key4": "jycPk9pkcMGmFB3CYf4ymk6EkaYLyW4mE7fusSbi3C5ht3tPjWZw22M2DBwJsb2MApaj1nMNdJaLHxUDDtaYEPJ",
  "key5": "2q2aFZ3dP9BeeWR7xQBB9ey4DWx76bhhjWiuhfSMyTPDgS9xZNWLQkBtyuLNi12cVrQKZGS8Kq74HXhbQzb1aYxq",
  "key6": "3yRMGQMy9bdACTLhoXn6WSofquSEuDtsxUiK9pySnstx1dUoLEjVBkt4a1oBHMzKAFQs1ZPnUfQT4Yz2jbeWUW8w",
  "key7": "3NjMB6DtunVuwN3cR5GpC8V5NbSSChLpKYwVzY6nRzLpMjpZT5dNo6aWCNcQzyWCCqafYvCGz3J2vQQXv9wrkDee",
  "key8": "2AEAmQrtTLqKJdDs7jt7ViYGM3QFdwBb5SmF872GRzFpTDudh7U8ErMkEMxJRwc6EPt1KomVZCa1BPa2AfTKqUZF",
  "key9": "MLzEdLfGEgz8WMP4zfR52nedQmT3ZGKxWg8mjPzPuu5GW9WdfqREZbEnAV9tLuENuFwHb1CjZXjpY3re7seJQbq",
  "key10": "3xKTbXTRFnGTzuadiCeSk8jd2EZmEjSGXnjmhYvThqkXh79AP6kQTLMm7u3T7G3pobagTVLtLGam2dUpPiTUe6Gv",
  "key11": "351fVE23AryC5sSjbA2rCZkTVjUSNUXh75X5npcbVArCxAvk43QNPh56Atwd6KFrowPF9LmhhTREpV42okgS3gvR",
  "key12": "3cwGEQ8rxu3Z3LozEDiWoytAcMLttKiGpC4d7gjkidk2cGBzpsjdUENgiRuMwSgGpVb8vURsiZ1vR1WiJpbaW6AK",
  "key13": "uvWPdLQt37HVkbJqpe6mUofRa3SkqRCRCKja2vKdKxjaPHpiQJmrhVs4SNhmSp5ZkUFk5tMnNY8aQngiJ16mwVD",
  "key14": "MRNWgN3A6s77TKGyNY3vnHbR4pxKRchKVNt3TcyJey3V5KTxehQmS34KmCPYgnwPY51L5mYFgUQkdKcvhVSKiG8",
  "key15": "4eJudvWsKQBmiBkCAiL7Xsyx55z8JsdDSD3XgJtEDMbQZPkoNJUgFd8UGFgbWCsUVivKDdnrwnX9nbcZunJLLtSP",
  "key16": "4vVQxiADUfFa7fWZuNeskBxh5B2pp9ieEdWVMXRqnt8TkxGvC747GMq9HYiZikhRaEZKzGAGKjSRJ7PWsHrPcG4L",
  "key17": "3Kj9sek2sXy9TWBY14Ms1hNm2GQEuBWF8bbCGnGeJfzQuEtXK5gNurDK86ptq3GvpDNLGkLSToaFb2Zwbfnof9X7",
  "key18": "2MRDNT6STh9GuAh2UXbY5ujA9YPkXGNoxGJUjuJ88ih2i8Nqf4csKBNqLu23tb6BPccdAoU6xT6BhtZ6Uz1YfEne",
  "key19": "3c74Nsy3Tvb4PQWuqXd8tUmWfL6coXs6aQ62diKQeEGB5qk1JVYqZwpDVpUx7XhDoESwCAPM7FZxKHqpiNgzncnw",
  "key20": "5BwZBom8k95zR3zCtaWuYAUp3EUL1wEVEVRmQhB1QHHzQwK38UoDr4jcBaXfCz1LTdArXEvBH3EuaXfAtma1wkGT",
  "key21": "5ejztwpvcLzzLm3nQSVfusHKqDKoCYqNPw6K1BBQSFZoSdJjJvQsK26RfsWDKsc1sfy9soMUa1b2K7gtoUK6bV9s",
  "key22": "43v78dcsrnJnq36Lj8wTjJaoNxf73g89U769aX1nRFF2vL1SHfPajSzpwiJP9GeEzJk46cXgvqo9qH9LuQDHyvfy",
  "key23": "7FQvUfyUotRBiAXD4oCp6vS332EYXwHMwGTdNfRcnsj1ugSHQEv5BUMcwaMQZmEB1d7xvnuiFJt91cwyszYg8p1",
  "key24": "3HgD1UCPjT4wgY7TJAqYHPnFwxVgY2Sw4P9yLCjrDJtMq5Cy1Soh8f8wwaTSKgaEuzgJF9bWe9Ek6F2f4tt1a7xW",
  "key25": "3BVioevXEjXFhEXLX4GyB49G6yvsdTmqCcuPmJqGSkjPApXkh8mVbWuer5e3onPrpPsPFqcxTWSUsVb4zsjNMN6k",
  "key26": "2qRYNJ39BYMCsiAtKfxe12MxdRryf29534R2N67zxpJJ97LYd76KSXzJhMhxbDcPTxtPo2gMsuTnDwPzJUAvqcYa",
  "key27": "WV62dnJHst9XKARQMST14mJJRcNn5UrYtqN2AGKToaQAf6HEC49N4sYGCyJkJ4RoNWVN5HjEWqjjjwPFA8ZXV6c",
  "key28": "q2UBhxX3pFQJsQHPHbpAUdJqDmweJqk8NS36XkZ5zYHEyQf8iUkjn6gyvsZaaEpQF54ZwZKLbkCMpsUV4coHtg5",
  "key29": "5aWNVeVDaTcgVgrPjbnkBQjezmjDz6N1Powbct9G3HYXyrRqyJmig5gsHZdMs76G2wF6EAMHghhN9CKyA6CzhHrk",
  "key30": "3Lnb18ebykN5NGFBoZXSBF42c7qjZmfb1iP3nkuTHno6vkjeJzDuDy5vusR95crZXQGvZJohQ6knQ7pfR4nSyqc2",
  "key31": "49rHYcRNJ5QNY84rSXfwptyjLhNgU4vFtPJN5YwrMdmMVHqsh5hoYBSJwEssZtP6xEGieVouwfqQgLSSjKYusg6d",
  "key32": "2rvMXnvov3EusFBaWmHG7ed8sC2W5kuX3KEfAAGRbyceWdCkYJW7BNtH9V3mRjd8rY6dqxTXvUVbFX9hGLFvgyCY",
  "key33": "54QCAb6E6HCd2uh3q9CKqJqkCvZMAEB7ZD37xL2vhCUpm45pQNLiBDnTyJ2dGVUBkFNuwc3xDadh8Mx9xTWMi1Aw",
  "key34": "31joKtp25oQLTdfk7boDVFctbnFqN92c2YHvR2Ps1R9Jb1LPXMuAyVCxEsFg7L6xKyGmFEWpJbayeyRjU3LwJxUb",
  "key35": "4sJXJJEFf9yT3LTw9v3C8e1wR7kebk7Swh9BntcmZG5HBra3BCE1K6T9hYXpTsJdPVzpJLAfjXu4GqA5ph8oDHxF",
  "key36": "4iwoMuikojNZF7seAoQwjEmvrdNp1vyizB9d7KR1ZfMUNwcEuvRzo8D3CYzXn8erE726UBknuCBJ6jYDZiiK8CoU",
  "key37": "5WQRFEcTYFMs5PaC1Na2HTWcSr9U4PKZ5gXg4zRSQ4eq61MLW2rdM9o7tmr27BMMPZHpJNGT6k5ZoqarxGPjYXLc",
  "key38": "5w4eciKEvVkPaAzVg4A8xJHGcX5d5x4dt3iaEkfN1zpfnCD9d2sECVJQgj64y9yhNUTMs5QTCjJK7CEYUwmJ9AYv",
  "key39": "ENBGtHTfAqVRq4rULH9zreNMWMuLS2mqiU5FJyTryX2ZQe8iSqYppVdYa3zQroQBvVH9kGEzuxxKJJJZ6CGJ1HR",
  "key40": "65a9oZTJRXLn7Xceq9gcjW4ZDBwbkDagWXKC7RRx8sZEDk3vr454UkyqCXuDXciMoguC8pSrrM5QeY6Xo2Lb2WqF",
  "key41": "kZ34PxvGJyTMFQnyXrkzAjDKaMdMTtWvdUeVSXtzwGepoKoV8pMuLWXAAKse9nTjFA6d1FaRqGDdNcS67WZ4qBk",
  "key42": "F8tTSRkqkL58Zt6AfJSBCV1ikY9LFYQhjT4qHueWPTHBSpzKdQUW6BHzFiMZ99LZNi9nUW1nb7Brfd3wKe5YdJW",
  "key43": "k2XE4LYS4gEwZoF8M9mmWhuQDzBcZFEcGss4aigW44LDQ7V64tFSNKGm2DhRe9QamwttHp2QDCuqJX2T3ir2dWS",
  "key44": "GhC662BzXX8fxfy8cjcvec3nvm6ghKh6wBKqCG6HxEKHEK3xibxAu3uE4WH5UvgAVjaZ55DqMxxfTpwAJ7yFVz8",
  "key45": "3qB4E9jWPg7NgTNXjy6KXCzABHaddsZ4e2VaPG8LsncVDvAvJuCfJ9W6byTA4dRfXvdajtTyuvdm7TMAotyqrsEe",
  "key46": "e4CxmKsMkBrkZKrf3somGK4TeAhMsYaF5rkjoTxD5JtKLoEE6WqrFfYyMcfLT5QPErABejFGketceR588saUnL7",
  "key47": "53jHYw65QRHSAkCgci5hpNvaoxx7XZHAdmAjLvtbncoWLC2hvvgKzDZQXLrfcgsufnBYoAVXtZSq6XhFQMZ3ZjEp",
  "key48": "fY3t2F33d5v8mMnUqQt7wN3VJETxZcZ3FUUD3UNhTCn7xCNResihz9eo5CTiQGDmz7kmBw6SL9bPcdEFdAur5Z5",
  "key49": "3vZEQjHBE9sQHfYrQFp2h2uP5LiWiGPyNMYf1PQLpeui3NUCy6SxUVqqw6LfEd6pfjKjHtKmyHa8TBMTfJP1X9EF"
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
