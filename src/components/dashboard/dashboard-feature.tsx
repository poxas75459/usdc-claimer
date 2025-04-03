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
    "51s1kx5NRP1GwZz7hAKzxPaHHXhcFLLWbf4ZLGi9GGu8Fm6ZhiN3zcUDuQf5o1JNLxB81qDvsrVnofMxBb9WTadv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bT7KT1yMhpT3T22ZanK3bbp5syD8pDC1gqk4Cxb8VnyM6vdnFRR5PkGeA7UZiUuEMBjUAmnBATsnJasrBLk15g8",
  "key1": "3tTicFKNLNhfsMowwibckFjcDSXjhBvqq9CTjrt5UtpscgZJzKcGWuaE7gKfsXTmdaNEdZ6ndEwAvfjGQvsSL9za",
  "key2": "2mY934HgFs5JqhXMK44HXTx63chJFejDTWpwimeff6oUFeMy8WNEoBrtK9bbDwAEScWonmeC7Lj6pmxXVndSXRdj",
  "key3": "5Vrh3nuTQWUST3rbVo52jyuWZxbHiXPRPbjEbQP1TnWwuarZzyUsfjPwsiAnraL5YnMLgWzYGUxhGjnpFVqWxrjo",
  "key4": "4bRGvEahMdjb4BfZSKpbK5wPaYHnM8cDKm5h5Yo1NnRWdXfCtDV7pnnzWpY163dFgPipAfaitEH6XL3UvG1toWmo",
  "key5": "2zi8KnKrcJJnZmMA5qijHsM6CTQeQegfuXQ9Fs8XNTcqwbi2TJktbmC7J6nusTnF9w6Abf2n8izs1s7w5jCcXNiF",
  "key6": "2X24CtohiYPUvdxdiEEZLWEagD6SV6yyCrQHYKssjsk2f83CENyCdgG4ohdTbGama9WxAJrvHUYvyNupqCztnEXh",
  "key7": "Z58mkDjg2HJxG1xXsuz3rYY9KUpbRQieE3xPUDcnphmGpT4Vd3noyUdDjiZFtHUwWvGgDougAdAvRXymXt2ZUZK",
  "key8": "5ZBQXxJpqjUdY6UXwajZxJoTBqWcmFam81SUWdmwQhGV5SB7QAwneKnXiVMEv9ra3VKExBkbTUTzrTZXREhQM9ws",
  "key9": "36xMQxYBpzkb8veCxNEMZyyaTyJsGQ7QSRwDUdRFDUPnKKaUaWu6g8AuZKZH9fDuTkiroU6uhLFdSU829qXBzgNR",
  "key10": "bKKmoSpcjbSKM7WssJv3HMEJ2bkWoukhijxCVbn1J84GDUg1QaS6UENCnv8fSoAcxS9Yxh1Zukwh1W2qx2ECavk",
  "key11": "38s999c7vENwFAte26uzpH614oQSZfQs3GPZKc25jr7evKkJMAgb7dujXayCgk4q5RnTXQKGFZgDc47epkzDyjxi",
  "key12": "5aFsoAvt8hX8XtLP9ZWqaWqM4H9rYUXhuXRyfAxNdZZrfRXJ2gQ3cm97rotBLdvhq3juZMDcbCxhTQRzGpZSQBLn",
  "key13": "4WnjBCQjKuARN7f9KatuXfnFBZ6zdY1mPMR38PnzWDtraESVc1rgbZSkUNZERwjLXeZ2g8BD31LSxT4mAnidAn3w",
  "key14": "2eZ7ZGPQZGic4HDaBj2h2jhKs8kq68JFPTWdmC9tyg8LH3nu7anRBvpeVtf22C9sNeRkeStYBkiqnVVze9pzZc2H",
  "key15": "3oFLYXb642mpLADfa3qPPHaoas3cexGqnV4qURp9e2WrNyirFrGQjGu9VyyxKMRnRGJGFU46XsXKaWdE7RRwBUr3",
  "key16": "27Mn9bn2Pm9WWu7UGypRTWvj4ZqNaihyYXXYVDAkXfvWtRNQppFXfGLdCK163ypwBPQDL1ddEA3MxeNWSAbeQ8mn",
  "key17": "22pkVST78kPzNi4VssNbK2ZVi8XMr3dzYPdeRbK4oShkjGtNHRLBJ4UbFR4Fe57cPwMJDUnpHrw3cZ98HP3tEL6j",
  "key18": "4np71RSAxAzE1PorsfXncqz84d9z1QcxrX9T2QStdsCvcQg6G7KwBwiFjUxUyzcAiKBXenDXAGPzVBtL8MjFd5Xn",
  "key19": "5aEdspepMU5UT5Wzchv8TU7J5vJkw51Z56Pysj6QckdQ9a3nf7n8LrLdhmAnGkqHSbSA9JPMvQqQvZFJ3BHZYmqg",
  "key20": "5dg3a5DHkzsYFwkbZKtAkWL7zvKjsBWEvwRTofEBWYGTTbHwL6PrqMdwmx8fg54MLW9MuZrjjLZ3u48qRurxvsEu",
  "key21": "5eRAxBSWoSf6f3dfSoB1gEU4hexvJh1QfC1qynCkFFYijxkDkZYdwMMnoD2u9wwYwEJbyW7NVVyRCVBv98QWayzK",
  "key22": "61ffYgcwSyxu3AM46JhctRXppEU2XDn9i2LQst3douHAAZCRfe5g8svAnAcocqyLbfXuw8X6Bcmc8vXcGs99AnpH",
  "key23": "Ec3aQrg7rT1EToP1mR1cyVfTyMezdUt6qjBFKUi7AP5xK8Wpp41f2mzWJW12cL3zvDagJkZ4fSrKygiP5a4JHso",
  "key24": "4HMEb2T3AYe6qZPPqg7ThSxhXSfkEshjGDUGyBCSZr2CKN4JsYFcn3a5FEMELhWoFT4qN6AAJKUGi4DaVyoMf9bY",
  "key25": "63ELJ5kqo3ADvnq2H51TdBNYGhoFdWFj31196J79FM8hGfsA49wrG2cucKLedioTUYHapCvmj3rqAZMAG7fXjnhF",
  "key26": "3NQvmAA9GwLXCxXKxeXHHeE1M7wJxUBmcZt64GUPHUd1X6NGJtQu9cKdGXi8L6vWuLZ1ckyVvtXFTxCmBso5BETt",
  "key27": "5817bRbCNa7rdcNzyhbdyZwRBJuf1KwbiHRX34uzWXjtuy6b8Uijr9wd4nrKx88WnWzyQrBLa8DNoTBACSiS6Dmw",
  "key28": "2hLKKoUfEPL2vnVPeL3FScmWFpQjX5VoaqvYJ9kKxxu1GM4thZKieYEYLKN7hc5KKudQBNJJTAEwW6dg7T6HfdNh",
  "key29": "4cgwxSWQh4zNMpnZgGBQwpjfuwUfg2798ZsjswoS2Cx7BsKHM2naGPusvfeCzW4Ty7JWE3kyorQ57eaFHa7GRQH1",
  "key30": "kAoK8HKYeJgTB8RGPXnYr56XjEfwVk3njpvjCgmo61tSHJhX1DTathX1GRv9t5g2j5ARpcNE2ab2JDu5q5nUAJf",
  "key31": "4moS2ey7GfRQ7ibzrLniechc5NJ5SpdBt4nSNuHYUPM94WgrvfeYcRNYbrDvGr5XYKhBzHYd1kA9Xw5muh3EzPgR",
  "key32": "2NiUkz2PiqxLuqG7DsPVgXt9WtezR8Y6jQUVW4E22iDb99FgvfJFNcANvx5dv6GamycPezmjfj4DAYEj76aTdvrs",
  "key33": "4BrTswGoTqDF7sABdvZF3WCXfDREgGy3QjbVFT3rF3RM5UVYZn9NhEktBtUMNP8xMbEFuCxpazKEYdpoP6UA4NHo",
  "key34": "wrGzYoEouNzpYYjCNNp3cNejc7m4a6tStCRcPfzUdYs2oyFndvTjJruHjGcrESrMGWVizMT4yy3PzoZemGeMa29",
  "key35": "2qSkwvVabxreV67Tz6YYPvy7z2ghNzcF7Ruiy8Wt2WtNaV6jRGdD8G62zwQ8rqW4tDL4db4t8qteEEraaQVNw5q1",
  "key36": "4jX6R5UxKNJp2dxExXGqAjbrNZQ13tCF4RzTbmNu8BA468TP337nD4Xf2sjktiUo9tcFSKjKpyV1XE3xaKXM71KY",
  "key37": "3zhL4x8Z25Hx9SquuaLP1HCEE6iggCiEHYQPXTNzY5z2cpLnC7AvSQqkwLmZfWvHad9ySED11Y1qDt5vcWaMivBE",
  "key38": "41xMUn6HFFUDuJU6do6n6XezgoQrikQsQaNBiYa81ypfYgLH1F2ayQ1tzHBjuGuH9tg7f623STRJHU9JsPMqJg6S",
  "key39": "2rphzbFQ99tCXC18HUwXcGr2rdMu533xnPPc3hvhGWEP9Xva9V6UjsQxqJULCsCEtHhGui6XhiM6tbzcoocjUVQp"
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
