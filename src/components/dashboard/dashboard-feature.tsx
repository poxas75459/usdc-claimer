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
    "3rL4fhNCVH6ZFJ5wQdEywEkQtxTDEQadQWCK2XB6iqQxL4GoswHxvPY8PMFW7vjczhETt4vGzSRhyhy6QmTEx1qB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54o5KzaAer7wFfofGzbRMSpM3AS965cqkQnchodkaPjdBvzrRYNJ3qxLKWCPKX6NnaFx3ecXBKsAThrXiQQNQVL3",
  "key1": "38zFhKpBe3QPtEBSBor5UjwQvRqLBSNXdmZ5ZtqD6pbqk38qw49apfdXRxB6wC4ntbqeft1CLJL2kqK4zir5FSvt",
  "key2": "5SJpWGA6ZschkMM4UU6Qu65aYcHhc8JY81pCVkrAMYJRfk6h7sLX5QCTdCiKhHg6vRaPWubDUV4vmESgd9yaXASw",
  "key3": "3qFbfcwMmvfjbCddPeQdHzay79WacrM9h3ZLwNpJTvPJpYGLszFP6v95DUCNtGyarr5ss5basvX1mnfA7zxsbNG2",
  "key4": "5w39k2otXpzN9ywPLMyhgSED6HRe16V9nxhT3Vy5oEPc1NjpeUU6Ky3bNNkzG2LNcucMaWywfEFCykhNycvaLkYY",
  "key5": "5cYktuZPqCo2iUMuohC2NaGWWDAxXDbkKprGi1EKVysvY3iWGtKtn4MYDFXjkj8941K7c2sZfbUsaMYLGYdRhJUJ",
  "key6": "GHiBpq8ao1kANcNEV4SZfMKKWN1jPYLEMYHZU2FpnBK8NMqCjhMbYcZ7UNrcifQpKoc3YxjXT9GRCgAMpGxnKhm",
  "key7": "5LJyKXaswzZJchGJaUATUETPvww1cXesh9FqM67DN2eENys3guP1kvzSYx97SQ6s5Y2BvdT2GxNn7hLUQi5rjHPY",
  "key8": "2cMKCp8Dj3HTXBeghjRzqa7zgv7gCLBaQsZF19MCtYo8sLx8s9aZ8ZbFiYfLTr8uNbqTMx25s8JHs7U5Yx1xkv2q",
  "key9": "hyzMoFxWHB9nXXbsM3Qgqv3S5wj8WTtgCwaZdHT7qaHJR2fL42ayiwE5w2nR3F3iLgYfzE3D68m3pmvZ2TwsuYZ",
  "key10": "3Tpyg46TGwb4JCbaUYsunNYobmuRuH9r1LpzBmb8nDbFtMjP3ncZw1yBLExL9YpKKkCMfmKaFB19voGdV94wvTmv",
  "key11": "5YGyfjBgJj2195YRy9Ag2zJCJHgYrDxA8eyUr91rmdtJYPSVfZfrypoeBJRXAYUAUj4UhM8SgNxwjNv7nL5W1v9g",
  "key12": "gjHEpfRVTgz3TZsLnWzB5T1VYA4SYDYQtXxYkNfqwcaRbofvqBx4d61vZ1WS2ADSvgnq3QMunPrL4cbPWvRr1bR",
  "key13": "6LSzff4XbQGp96g2Q7UejbaG3M9ec9cHvXjazTn4AtupBBzanKc5i27C7nzAeRNkH1ZTSthCDc8b6t2nuvEAVAm",
  "key14": "3dK5Q39ia81L2YpwppEW1dWFDzuJgDKv3wVGKEY5WSvnvMHMsndsottFJTaq3BkCyxZWJSVzeAr1jktemCAhBJiB",
  "key15": "3b7ctJJc8V7ApX868Niafia1oRiaRNR4MMzSyiTMwPQQCGJp7d6uXC1LgW59Mkyp8UjUhtws1Sy7vP5WhSmo3pf3",
  "key16": "2gxVcKHWFdE4EWWFTsLygKzKH6qt42sdA7P1rHwG7A4pnrh3MpDxZnHk1k3D3akaKxJx5FJxbxzPfRZ7gcxmyuP9",
  "key17": "47r9U6oGRkkFysA3pgVvF4vW8T2mefs9q9MweXPk7WdeuFtGSaBmAYqMxu8NZWbpEsrXRzqh74NTkRXJaMYnfV56",
  "key18": "5UTZpH7fzAvcLSdhKRYSSkhiymJXNDJ2uQ7mxHjZLopwCPpJmFwJgEF7eXym6A4gXLxm7tcv2srnb81oaDgJ7mZw",
  "key19": "61L4QYjpwAW4teKJ5qCEStK96hwoN7vDMhzVg2iHQdR3oiCUnBP2cicyLD47im4JgqwKfiGAjz8KzSAwiANRU998",
  "key20": "3SPm4s2MnWuR8AzZf4Dr4ifoKZNfyDjhvP7ghh85VHGp2BztrAnmTvXfqNw3TL3FX8Ka3QquF6JokVxgRBN81vSu",
  "key21": "3GriJSzLKwipYvj9gxSw98WQv7wEoUYdnj1YUB6gV9B4RTZV1i3wY3nYNUwEtttwxWhoUWyfMqHF1sRgHDxwjKjZ",
  "key22": "4zw2TWMnJJ4Q4zyqDidWPJH77vZ7BQpAAvpyaX992u5ByHSzzUmj7nk3qK2amKJGgD6MEHAgaMSYMkvA8cRGabgc",
  "key23": "5Me39pjinmvkimSytmqegeH6TvWntuSoxEB2s2fkGDWjqbjMDtRxjWVAqEn9qpfknuNTGEgETLuyBjt4nBUYv65K",
  "key24": "2ucuEEagK58K48P5tV58ug4wtsqSf8oVhJsmqXr9HSEyWR5xyFkrFatBAvxdEWxRAbhAUCQehAots7s3yGonMfLf",
  "key25": "5XX8xCNPcoKKBmxhiUzdA22oGkYrNSDaRMNpdsJoyre62xEES8jQSmSJNpW4Tg7pWMSFZr6NZs53hSYx1GMU8Tt1",
  "key26": "2LcWyHwZCf1QPaHRDXZRVRcDPiPsTqsPDdjSRM86hDXQivtu94yh17h9vv1ZHbiBfoJATzjmXDh3aP6origdTsFC",
  "key27": "67pwfzP4Zs4XzDa8PEnvoh9rBQY2HA6n7e1yVZpGod6TD6XXtcwrJkWEEFgQerKvGU2Lj9GLJnT9WjirJ8CKokqN",
  "key28": "2WkFNqmRKoNe6sAD9BDUi5mSStgaJSVdRShrGNhE4bWJbddG7gsfHhpUUrKWVfLkpwiRb5oovYSaf3gFZjEVb4L9",
  "key29": "2mW3Aoar6f7oFots4qUicoW3PNVC5dWkMNJNeWK9FzNk4uvR8rkSFgHM9662dKzqjgt2A4fjKgGoXMNFDFR2VjC2",
  "key30": "3qn4GMR1BqP6WsyPafCndtnEken3c6EyZwLBp38rWSQgEyX4u4XXY4CaFMwoZLoZrNr5sFnMLqH5gNt7gCjGocwf",
  "key31": "3suKPN5kfCsYx4dTsDkYhMaVV2QMG7CBsz12qN7JEw3HBSWfU6J3fW86iivyC362KmFV4MZyt1BYhWQqJjowRNCF",
  "key32": "48qatnKZEXCebbeyVPEKad7HUPgbFs3toLkp4DWEfa8A4qgVGXsnBoZXHW46p9MEv3GmLjD1UWLH8WfgsvbutcfN",
  "key33": "8nZYgfF9Bbeya4ZGdjNjtd1SNx31aEsF1UHSkMZ5s84MwXhdAfUdtjgBrmpgrtBhFbeh33bivFDbwL5m7VwMdGS",
  "key34": "2dxTx8noHefMEjojNs6iJGsQTeP913yHMSHYaY3LiubocZ7wTYncRLFuBHKS6Bmzx3kD4n2y9E9EjV6Uw6zziDb1",
  "key35": "3tdsxcR3rhVFBejTACntUCsWvYLcHZiHofvJyZRZmHKDvN1CtqJ157NuBcDvWA6vrX2rGtuLZq8aCUAYQL6WJjg6",
  "key36": "sgGKTNE6tC5BDiFRBVzW8SqDYJn16drHi7hxAWFsimx3Bj2uVRRh7wpmTNSxdRHJh8FFgubjGReZYZiwJE2V6Sa",
  "key37": "5mLsZjH2R8zd4vSUEcz6nJrhsezYizmWQvn5BmWmf6GGgW2cxMMiR71Zy1SozBRS2pDbdbPjgfUPtYD9cZYDZRt",
  "key38": "3uvhUZa5SmshEYE6rqCfPJXQzVa71T6jy7gLTYzuHehcRbR1TWkVcpcd9cBpNcWanna6KKHwDwap5HjMzizZzmsk",
  "key39": "5v8jZ985aRQmphT8yESdVheqvqHYSpJ4e8nknAVCto3aidxaL5qYSQbiMbtwUbJ5kwVF7NmuTR8p4613DCPCCwV5",
  "key40": "37HBuZ48Bm93r2jGFf5gMjGzSdDzaHKGnKRZqNBGgRfRX4AYRrK8yg83TWsDFMQLFoDrjvowP2NpotMnaK9GvGd3",
  "key41": "44MaAumFN2412xNVUwaSpTkTVYajDbdpa3iixtX3rE99BscXarFVzeBc4j9d6asmbKbGieBrtyzqkGfkL9Qi6Wap",
  "key42": "jd2rSJNzHmZfQg7BzgjdDAnnpXBRXUnZr2pLw6Y5p9kjX4Qe7PgGmpHyZb9jtxgGdrtjkC9SqvBRAaEwr5a2y6J",
  "key43": "5JRsyiE6Znf4UL3m7sWPNZXXSq13ktYvxmJth3UBvXird7cvgCAwDCFEaF5UmYXG19VxCVfPmB3eJo6qbNzR6SeS",
  "key44": "Vsn4jRktRCsnFMEsA6CZGiCmsdq39prDbfLrdV5GtCFr68Yj4Gp7KaMMaXE3fM6YYyDykcYGEbCqptiwE2hW3Nq",
  "key45": "XtNJxnZUCobU6RWmL7PhqgcPxmRdHaE5ygsZoXVNWtiuKtJQaivnEXa6i894ioRUWhGbbGgDgrdJE3yxxeMswuT",
  "key46": "4FjY4QYWm3bYPwqkoJqc2TDL8MZqTkNFbz33mYdXGGA67eu5sRRa4Xw9Sj8a2ebFFDHnoQVEfXC4twTXT9brYXc9",
  "key47": "3R91Jnyxt9rNDesRw5YnkbBLsWoJyT1XbuMsNCvkmCywuRGKv6D7BYZWcWaFSns1sZE9yFHMfzSQBDGrx5HCjqfq",
  "key48": "4BUCUHKPWFeAYacLfjx7UqhuPvYYPG5FMpNB9H76Eqyk1Tb7jtXxn987TjaPAi5p1Z5G5Vdjz3itXeWK31d4L7K"
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
