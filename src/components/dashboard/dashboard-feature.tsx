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
    "5kJZ7uQzt4uUYo26mWoDWP4agjHLR2Gqinh7Voi83FgJJSzDRPYenLRpgYkbe8VShXZdVZDcLPExDGqRsYu5aq8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFv9Cj8SxBZi1xqTxmk9QabYeQeauNKxxRPuoNBKvm96Zd347R3PGpLjiKNmjWymeF2BFUhqCH9DRCnfYPA78mN",
  "key1": "2MMc6W8uWNJHJ5LSudur7M6cXMBgiZFB3fWAVs2SAyLeA9CwZ2hHocNbL9bNsssX4JhYsZSvpeiwJp4TxfgDyscG",
  "key2": "5Mi9jscMYGMn7ZEEmHWjrp7ThzM9siz6PZjZUA1DiBT8gHSMJ9E9A1NVyBAYkvHeKRG9U1xSDcdz17sfkSkgxTFf",
  "key3": "2GqaWoUghQoANnRPVSKyGmAD3ReyqLtkbLxyA6WQp7DfqgMvkUNGmb5e9RJsy6GrjuYZYRiWjxz5NzHhFKzDP8pX",
  "key4": "2fAxNpmPqc97MHGx8zdfcXTrnU9nkxBJLHkws7TPcXc4P3voJNyGaRcUfXydzvDnvXdwEHAi8omY84aiaBujtBr2",
  "key5": "4Gdrc1YVrBKgasHYBBP6vfGApcj58MdcV3frH1zYwCV3ZELGXu7bgBNkdZDqny6JGc6RcHmNx9mNGi8v49mssVif",
  "key6": "BVYU6PW1opEWGkP2PHnCNkBhL7mpDsjWvEjMQe3yJmwDJ9HxVhsYtX86JLF4SSpRrpX2XT1S1YinRYfD92qXEhw",
  "key7": "928LhcdhtTUx5JzAf7exi5P6Dh3WBKxWp23qcxEAN1U7W9KVm3ggcYKuAWf5ZjPR5jjc6gCgJ197LpmN4BqQWMX",
  "key8": "5cbxmv9owPQJ5Hecy3PARUy2atdYWo5tknrg58qB5PK4ZH59Md22vNiYkpkp6mDdkhj8KPJteRjzrM1bWDzLSXgX",
  "key9": "3NZxFTDvLULfVnavPcrtzbqo98xYhWXBC1ZcjDKk94Nw6w6VWwxMFDCufZB5PwHDGdmaJxuUP2CRPyMUwiWf4YtS",
  "key10": "2RAo43BrYKfFwGQAKMxVRNhGw4TYqKmiwU42LbGRv24McfMKb9VKNpsdA59sk17S7LBoyfGpbkj8FfNP2WvHADNZ",
  "key11": "4Fgv5QQj1KmpRgCk7ZGR3BzEVfrADwZVPokrXZUDoN5ar1wy2yBh3EUa9u3ToTpq5tynP1gGfzYeicxSZRuRQueo",
  "key12": "uMjuUL18bN4tBuoyYwybYWHkYY7PZdPqPXToSRQdgXv4BcTDFt2jcgZJUhFDdG2QjW4tkhK8cQJ2LksxrS3Lxys",
  "key13": "3JKmCsfvi1buLM5sJnonRW5Nc9nHaHxo2HCVrADgWfZ8a5C1HCAPTedEwUMefD5qRhP3h31UcPmz5c3Gzo6yBech",
  "key14": "4FzsSnbMhrY8JpvWkQo3AbiigRAgxMkHPvaMBkbzvVWn3xw2NaGYW3WCWqSH5TUwjVzR8n99HvvRvuwuQEn52B6J",
  "key15": "SsP9oGK3eLau8LHww6Rx2Ws1ZzW7Tfhri4xxUyvbNhjiwUPuQgCkFNeYGwGDGYurnV9WoZhUtpSJfYCX94wQhAL",
  "key16": "2WZJh8kSb7ZghqMMCgGRgPcVd65PLEbbX6bBkWEyhPdGSjxXpinaB4KLP6nNKkZMYcTJPhLRCYhCKW2L8j16bhYQ",
  "key17": "5pRs8GYWdvzjfCfe5EqqqxxggMYj2KgdbRJyMtSgT7PPmovtpP74NM4DaBFB8j8q5REn6XjEWi8c9Q6awu8okWSo",
  "key18": "zyopMw8Lk3Du74oKbhtZmB4o6ndkmj41W4fp365fTewuxBQB2TdGhwLHdfU9iSjKLqtfES6iCGCJx3ofSCnbcwx",
  "key19": "2Z6mcykFa59V9JB2C4323t1CcrqVCgjb5fXa9qok27WsjWHv5A6jstU1mcHeMz3Q9inbwAqRYk9fm3rMfiAny3SN",
  "key20": "3T3dZYkXQHpF9TgeVXphQpcCd2ED83c9DwnL5VtU4Zo3b8Univfu9Kq478WHNtL6d68MqCwBWSgcWS1d2jwn5e5e",
  "key21": "kuEsEQiRWZtBn7UCoNY7MFZm99BSBpmVSo2V6YbpSpSYHKLpB6cYtC4D5XxbbTyEBbe3PfTPCExLfAzQkXeqCji",
  "key22": "2rViMzuqa9ZDLTmFs4aNvgogHRJqjC84XQRVkDd3J6PCJK4uthkHwtS4siu9ET1zrZc3sxUHoMRbaHCerq3fzq7C",
  "key23": "4jEhrbTxMXk3iEW28WLkybdpRbmHmCkaHw68zhiKkpnptUCPe9VA4oNcESexDVKXYkLifpgXWtWaiDHpfs8Cjgg",
  "key24": "qgEFWenczzQpNcKvPQ5P77zUXxUCVsk1oKWTumHvVHRgve56D1xPQbCEgpzbN6C9grCiwWcNXapDXvPs7cCdk2D",
  "key25": "2ortEpzTqcN9fgXhuqY4SsWyYLF9ACnU54qWuRfioEzG9x4kAfxpD1QsCc2QPJ1imqiVoSNRjaPXNSGK6BDWycNb",
  "key26": "299QkfkgxJyN7eSbgxnQMBS1hoswn7JnekbMyo8rjjHWeeB6LswXxqwjw6EG5DtdLpAJguXUfTntnzGJovTi5MQa",
  "key27": "9AJ96gMwkDSqsNhoRw3VBd7tQhoWBFSwGcUCEQFdvqRGQv8PKUm9mbyKpaemc8rfss8ePnPjAFW3P7XgBZfEWBD",
  "key28": "WaBaVjgVK9zjW4PNi8eTLyP8cfohV8xULfuSkJAwLh2oRyKMM4hc7mb57vHKezcCfSc58DWBfqvfKAxdnRzESdD",
  "key29": "2pTccDcPPYvPxTeiSnFkasKKK4HLbp8WqCAaw4sGYVEeJYuPmb1UzU34z5uspdfBUd1DgjaKiXNHhpafWTR5PJEr",
  "key30": "5J6BbpGmaNtXbdoJT3MvSKeFR9z2nbnfCZJU6CDqz3pKSxXP3LSkFp1q9UrYM4AagLGMos3hStX7K6hqE4KL33Qf",
  "key31": "61tnqr7CE5TzK8DYDzZa2bBEHxNeov4zQuyXwzKRFHUNqZ6MTTU5LfpzfMNgdnPxp4c5mfMA1P3qRMsjduttyZmS",
  "key32": "3WXGSH9VcFLRLpjeZdrynhgey4M6s67hABYwsUb6uBnVy65Q2rCoPLoSA8xVGkW86N6CSaBQceZveJ8ewKLXxdoJ",
  "key33": "5NigmirHXq4TXEnAYCbcbEuMVuQn3tgGcMHzW6QV3tZ6BkLtM3CqtRMFBxLVnGGEj4zFPFB9XdK29u3TKHZ6GZ6x",
  "key34": "5Xodabg5YoHC37gi1VQwSy5WRrXTemLh3A4qiR4oLM7PiTt1sGbgYdn1jwpdU5QA83VGNKbSogkafAxBnMURfRpQ",
  "key35": "3XCKjZZgWb37BRFDiaJboGbx88W9n7iszxTMe8mTrDTsX494vM8ohfDY7SXdWmoyQHpkJVZP7CvbF4JJB2fCiYy2",
  "key36": "5QrGskXjKtr3DqFuY9KYhytW5VgWXns1i6UfVmroEsPFfjKYU1eyTPsnAcM6LqHXPagtnpndy4Es3LQAoEGv18BQ",
  "key37": "56CwrbkvrUpKxoGvHKgdcde5urpcmLABNBUYUewFKimyHGvKcPTvxMY8N1BPXQKzPdxgH26nRGcW4kJEC5bpZaD8",
  "key38": "513DrUmTi4kzUMy5YiUREACe3vGZmNJPuZH37NegeGFDDSBqrghYd5Km7C6z1CeYSTTFxPv5qjn8JbkvUUKKFX5L",
  "key39": "2W444dRD7xJSpQHk838M19dfs9KACxNcdZqmzjdVUT1F8M9FecfjQN4tF8PE2ebof12qL4Pgn1HGKS9Svyio7LXx",
  "key40": "3nLjmCigZJH2vmZ5VLNTs2H2bBos73k9E1rPx828NCXFNw23THYhQ7YGYMjTB94Wqq2J3Xe7XGxkeuQ4bfRg7PT6",
  "key41": "5qjWWHMawp8bgWg8v2SPLWJwJ146BMrxE64WRAFFg76HFvyiBpVy5DtP7V7ncpx1yGULnkcqAWmw8GJtL1Ho77pA",
  "key42": "5XsU961c5JnRPmDXAmX7gehQKRaiaEap6MFNd4AycBbbWcrbTzASNjNAXvCFp7ji7X4VXb8Bmnq9hfPFs4uNXA1B",
  "key43": "5WZpRhSa2cqapqMADEqf4YVVE9F6KRiJ6giDHwgCdKbCWK7B83pESrP8yiB96M2VSCVb6HHBkzQCGzgsqXXPavP3",
  "key44": "5trC1StfnmEGjZWw87WJKmZmhuVjyXSA3wXsdHfYa168Sn64uDsNJaraQShWPPb6Dw1uvX3wUB7VYMT4C5inf6tB",
  "key45": "2ZbLR2uaLUBKLrqVzWm4eRuBjcvzF4qTmo6sfD6T66mpCecCUM2qzA1gD6m3TfzCSRkESnHd6QBkozsiMPXwpETi",
  "key46": "HHcT9Eon3sijpHmgGuxua4QxyDiiUkKE6kL3CsusDfirCRp2xdscNeKa3dXrfTkHjM3PsYWQbeiDeeJfMvZT1Hs"
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
