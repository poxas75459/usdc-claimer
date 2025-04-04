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
    "Fuw7QAJ7EDTPKFZYh37drkeqZKnmaDSfLxPUXrni3h1GMeuVNCvAfftWrLiRL4EK6YGaFumHYDzqyE1UaJEV8cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BqVdv5MZPTfY2wAcmwAKjnjzqxyit3C6QLLJaVzkWzqsFYaQyhU2dS6WQ2uf57vs8dCPUrrjRwYNzkpULgoxtn",
  "key1": "5NWr9sQ1A9eEjRiioRokqcfrCRnJZ2uX66xTDmwro8GycL3bRGdt34Zh978FBPTdWjmdZuadc1jhYPhHzPQdGp5Q",
  "key2": "3uwCCPw5hBvrXKSgVkDAdEFM3p7xss7gVN7UTcMTcnrrXAtfnBPeLau9sedwDAvHeBC73FCoM9DPJc8gxDVmYDJ2",
  "key3": "CMKQfahuKvbwwmhvva52zEvf1FwKLC8KJDZ5AfcKpG6t7qM5n7m1mQf3h9sFU6q6R7yCiyQma4MpHj76WHxTN5Z",
  "key4": "shA41d5LUVgGpcaZc21p6o9DQ8tNhEH325vsRNvPeq6zFYKNU7FwMLqzKJ3qTqVNjBy7ufWiMidSpfgyWUgi5AL",
  "key5": "2LNPy3BUEetwJSz3c8fJj59uCnZtXBZyGHXk3BXSx56vC4aFqFyLv9eCLfpf3UZfwNZJJModt5XmYGGBZ8q6iKrP",
  "key6": "2VYvTRWqXe7eNpxJvQEKw2X5JGVgiHEQNLnA6VxuLLCCySpGmMHca3wFahBFixaQtMDMFYFRQaQZ6PkihtGU32ko",
  "key7": "4BxSY358S1CZKM1dsbyejwebVRAD2imvAS9w8ZbANeEznKrHvGJYrTrvAkSek4EHjFy64FopW5ub1RBdSFUuxsyT",
  "key8": "26TuZHjm1brZkU5Lbfj5T2QuTwRCZiHvjxRU7Qk1rQnD6VhM3HN38adDaWWm2LJk4zUPbhyw9vyTFaFeUUVP1pPV",
  "key9": "3GkPPUqEByPGDs4xpEgUHkFh8eEBZFujnNtzWd8cAwshHFy8sds1gjDk79eKMn25qMJ3sYX7Z4DqincQiKC45KWE",
  "key10": "2MwtVRFEYJYKR3SjxgZpYnckSrRGAiBWQVQwFDcKyPPGfprNYgQWGpDxwBMwmSUrX53ETkr5YRMbVvKfieT7C24N",
  "key11": "2bqapePt7acC7f8rQWKmBXq2GuGC2YdVZcv5pH3RPM8xqVcGTrH2DjbXiEXC41Mb1ZgQGxFX6vxLhVfWDE1BxAhu",
  "key12": "4H6QJnqFcpKPm97SiXvs2Z6orKK4fQwReUwbUjxZNKEX23Gpc8ZMUUED9hGKmmQRVLLXsZkM97TvkxKMvJQfPPPb",
  "key13": "3MoLedwdJaBZnGa1sDAzisKSkUxpyeM9ZqetV5G2wg7dzfmgBaeqU9f6wv8zqcjHEuUhaQ2UueCLQsDeUrCsnSPC",
  "key14": "Ke8iTffTP3vMNYERfnzYwga1cmpVxg4H9R27hrwPsKpsThuSwcd3tgWdX7QydG2Mt6nEZnKqHxfpwFaptyVFyNm",
  "key15": "4dJnoz1wsEjoYED7Lq6Z88vSNrpAHZNJeJxaK7tH23pQUBg153K2F69w6koxFNH6nRSdNcaSoeY6J9p1Hj4NFu4y",
  "key16": "3hUfm7m8gEwWYSinjnWBxmht6py5f8vYSckxHQpBg58LTX1CvcFb5RWupMhqJL4h3UGUPNvEHMVUVQfdPUVAtZNW",
  "key17": "yWaEJCNpT3BEagfYAdRFb6WWNLBTjrr7meGkocnkdbYLsrzWNkjnvesrsRF2LcRsWCDMj4u9wdBVZRgDdUC6aaZ",
  "key18": "5fUsFSx2r63KorHY6hGNcV4TtUNLr1D7UevFAytDSwU8dMVnm7FSThn9BJ74PonNNdSqUPaCbnQFBXTXfi4CS2gf",
  "key19": "5V4sy4TWaya7D1JrZQoCxvVNXaRpyVvaY6CV7Rtoa2WEoioVLC6egq4La42WZ2sScvv9eATwdfftR7C6ShVqC7Tq",
  "key20": "mBx7iBfbwiea6xtJZXHfnnTiGRBfg8GVSF6xFEYSX8v7kWR9MmsespHm3tjRqGDMjMXhHFvqYSWedLt4AsLaBgz",
  "key21": "3wrdGBVHUqizgdENRcR86n88U2xNjTKHn8twf1428hkaGuCMm4bogfmddASZ19TNoCixVDoSUbBiuEJeAWAcZvbE",
  "key22": "5mGRJMjdRWqUb1wovwWVCJ6VfNdL5eJUjnm79VWS42bGAf37d5rvsKMVuYRqLKhFP4gvtVRsTDwsgWX3eTtj3F9K",
  "key23": "rVLafw78pdZYSJwdsJqFyQeLjsS3NRVDdoAFCDaZLGC92bGLSrW7vukytFDv9iQDnNzrF6sWqKmwJLrhyd1KNt6",
  "key24": "3kgEG3uYo1PKz41bsBKkZ6LseqyXPM24UyPSPMehPHgXJECPm7fa5XpZP2F2Jq14rd1PYyM2qzvzMXMoGrXKrDUp",
  "key25": "NAZuHF3xce4sCRXVnxU9kDRcHcdUeU89aapUuC1wYoBdVHzZcRoyjcrDzvjsK7jyUig99AwMRFLMXj3ArHJ8ScS",
  "key26": "5m1th3L7AhPi4yTE4MG2NCGGobVWkJ8NCbqj5s1TctXZ8XT4sEGDhzxjdBoSroUKPzEMFSUPHP62MsrL48k4Dkms",
  "key27": "3CkyJQFT8k13hVGfUDgDuK77UXNh14ZxUAqSERptbNJYd8cANPJZin3hgfPdjF7DhhpvivL97PF7SqfDSkbrnKxM",
  "key28": "3sYmwfuHscwW6GGpYHnJDjPUE1XP55A64cmRw9V9nmND6WVAURWhzmcD3EYnuocbfQQU2MEDNgibWL15GBHhvozH",
  "key29": "5bN6NNV8NhHwMxTZn1dgaHxE6Mfgru2e1N4dbJgmKnZDoPfeUpFeKLhiVThaUmf63TRvGDHFfv5N4eKYBczdbsTD",
  "key30": "3rpMkcTD5v2ZznFNrCv1yJXF9Lq4gcuY5FLqB9bME45exbkZh2QZNGiGuwTh3dVBCr2i5svcecUTyRgNeQbNgd2b",
  "key31": "52p1fdWGEnX9qvSWp4NdX5WXT46XrM7F35R1xu9p1LhPmjJ68bunj9cGmSj9Z1wqgTzVDapv9i2zgobMrunStQ4S",
  "key32": "3cb9N7L9xTzK85GKSGM1yKzygKneQ5dG7gSfR9DJYCE4Wc7LsWQVLcCvaxFCBEe4j71qDUQVBGDBNJvWic6nbJ5H",
  "key33": "5m3f9EuNNnwhr88UcYYJc3ST6eg96ar6pnToqNG7bt2tPDs5ZW4pzJ64tjUHs4EzF6M2bgostHDpELZksTv4ZnkX",
  "key34": "3w51ZSYBFJvg53iWkA9mS8Qd7DRVmx2o5CbQWbUEjtatVjcBh99rKW5kw8nn8DqJz7j9aeHWdEEgsyAB8hZQrfYy",
  "key35": "5UFRmxPPBmz2p8CwS2rD35tQdXCUtPmkzTkDuHooDbxvqKpjd2bA55HE4MgDr2jkgELCGmncB3x6y6unRhejapGA",
  "key36": "36QbYwYR3WyTSNkCpBsRfYokirD9HTqpE4dquN6udyJ4g6FNKo7Fxzi2sZ2o3Ce6Ekin5y4W4RSMP2PxNomFPDTj",
  "key37": "2rTJmnEoyk8gKA39swRrjaiHSWYnNdTdhcmyFUfnVrh7i2N6oGFbTbTkgiwwjyjCKjF9d25RGEnADTGG2R7Seu1R",
  "key38": "4ChvdJ8ok9Wsjpofz4c93sgXpjCMpYATLv2HQ7M2Wjq1ZRbk31Y9LWtHWnaA6ni7Q6ouWqeJXvMcx72iheUJtSNz",
  "key39": "2NLLAd3eucfZBYuEF5Aiabc68KGnBiAA4641rgEo5oGFbwTvEgUEnL4N3vBf6Ys5x3rJCeS5B1z7af2o8XnBr4au",
  "key40": "3o1bmLG7nmuVo5EVrMKQ5WaBwJx2HoKDtRV673aiFwdi9Vou9SoNvN8FBKEBxEmDUpDyzmnKCYwr3AgUo9meqzWx",
  "key41": "2FFxWX3YLjD1VLqVFx4DuzuhGLJLNJZqa2riYHFQG9e1CmMey7mRNyKd65VsTmahVd92WkzTokDVBiyMumLEhcWR",
  "key42": "5kbMqRwjdp3qmbcQEZA4F7MdSxpAMY29b274NDvunE1JePLZAsNy7FfWvZyGRgX4w12fQbHoubTpWrwdshojewjL",
  "key43": "4bneEBKdNAi7yw2ysD1xKgjAS4fzBa2ZACFHRhsFXgWFa97cCDcNppV2MCBGut8kefZ4BadARSMTacSmqHfu444s",
  "key44": "3572C4DNdzu2uWk9YGagUZQ8wc3PspBAtbEzEmozj72ZnsDYxgaPk3g46mkfQKNK7E7kSEQxM3LNekLsJ8yM8Mux",
  "key45": "2nXejZnnC5B2xE9m6g97RYE9GutBhUSwHeM48X6Nw4rbTTdS5SCfcWsSVa6riiXhUzNRnJzUXFJK3GQgxBnK9bKu",
  "key46": "kPMQ2VHJAY784sRY7XpqMfmVJGAHrnv3fpfojzxjYzDQMCkcqZ7Tyy9eHceqgBWNG1zMxBaEty3hYrraqG9W68G",
  "key47": "2p4NHwHdSujBo2BwRmMDVq6jAtSYGRnJpDvA5eSzbbbJhdez5gEdRXBxcd2GyQfPuc7rR83ReNyRuAVvz2UivCXq"
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
