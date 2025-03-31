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
    "5jTcp7V7dJVCq7L9YvuXBLv3Tg2kGHr5bFuFptmsf95xqB3ZSQJ1fcUNWp1s3sZJb7YaNiqthsTxptrjq7yVgrjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "99b7dbyFUuxcUgKX6X5HJNV8bAqn4AbQqQeNMdMi6bFqWDv889PiiDuo18765GEfF3YBDyGPpyDQFyqurLG7pX6",
  "key1": "3Da582uV5ig814hHd2ZbUiMPkXA2PfrxF64k9A4iPwvGr3XRaDEQyVGoPYHqmCuo4GR4wVYs9vbFzhJQigTEtKzL",
  "key2": "3v2rqsE1bmWW6Z6TmG8UqD7jFZSCs9utyboFkKuCifcieBLztYEgzcmWf9yahRY6D6jYkxYY5M3XSK4eTDDeGU3m",
  "key3": "3BMZYJA29GCLLXGLp5RJkdwqMhMUMThTr8U8MHu2FFLgDJiN9RJCMuSpK5tnDmJJ6Nc3g2RG4CFhbHhwJXHDVYnE",
  "key4": "5b7ZqyaBej3yLU9bhLHfXRaQPAL9MpBqsJNkpyXVJXx6PivLnoGPsKU3opCBEkAGY2X9XWY6W8Rd5o9qv3gkGMt",
  "key5": "3JyKYRgAn1PpnRpgDN5zBnf2RE1R9njSJb3K9TAiBUAbuzbKi1RQCRouNm9G87NpZgaMwDQeejzgqGiZm3sy1h4E",
  "key6": "2aZ8yoAfV1aVf7j8CiY3Lr1EATiWkKAp7mpG5zsEiundSNu5YEThCJG3sotYtwwu5VdYF4yj8SudwpqgxvsRHLs5",
  "key7": "2CDohd6hipSRnDFan5gh8YV9ivVkVeXHpD8MwyCAsPoqBVqUXx6gAWmWZVgYfSfoizCAx9pZycUS13KbJYfU6Lqd",
  "key8": "35VUXXWgqiag4X3kNNVsCWXaftAWQsCm6r8PzjLexqid82xeBFVLC2uuFYxPNcjHfskbpEvrN6XHVhP37kY67Vi4",
  "key9": "5BaeDFa5EAiUvUNnhktgA1ydjDn7DDvA4A9F9Vi924aVj4qmLJke5C2wTabarvwGSAd8qTso2YY7MW8CHKscqbVg",
  "key10": "5hHKvzdESuG89pj2GrQBWn4ZVqZRSB5ewPf75WX1pjKMqoVoY219QAyRHhzgn5DYTdU2BtQoE7XjoKTDFpSaoy3V",
  "key11": "3yUqzamsaXhivX7QBg7yhKqTeWocU9aAAL6S4NuNd4AdL5wPtGhPJP9GL6GY7cYc4NWW4zqhSp3ZDvz3f4MzDiNv",
  "key12": "5RACvrFiPsqGGKAD4QYtgPCeZGHBWtjhpvRjZnrxY3FvoV8S5abHVbkDvYDYWDEWWQ1bL8HXUXQPxMVBuW2Hw1DP",
  "key13": "63fz12zinWXvAYVcRQuQQPgzRU5vqxCBNwz9DMFj4Zi2tHogAyw81TByuMfhb6JATFAsmSVi2kuYwpjg1FdmP8Ck",
  "key14": "679K7AJUizbDAgpCNddj4NzBPAadUPNLDNwfhAvdfeTXDXKj2wx4XSgbUyhMpwYZjTEEGLR2BjhBevwVdD9DxgX6",
  "key15": "5kSSz5pC7eLES3edibEsmfwd6Ku9tcuATcSQ8tgzAKCoxPWQWpUidwLQWoBUhGTWhYu4b8zkvZs19HKWdYZYc1ax",
  "key16": "54baPah1G2KMWd22PvCVqnSTXSZ8vWjappb9hTPsamGc9qYbPenSJVraxHzGGbRGRgBah7VMh8jdxkqmG8iLwAn3",
  "key17": "51LBLDibwYzLXuCCkGVnAEtkUZY2XT79H8kCyQyTRA9JpjRtmiJDvdvgA2d6P4QPGqRzUySmydBsTX6L99EnBarm",
  "key18": "4sNN4yXpkuduGDxAqpRufgPAc6rf3r9npjrPK59YmorkSGXtGu8TQoFMwyfT4MTDXLjsRXJBPvoGqgMGJo9rDVau",
  "key19": "5typL4gkzjTyUz7QiUcDjp7irT5HgExFQj85ieH6Jo9nzvSx3EqvxwAp7YvhMh9zbm4XR879qiDmYbPZdLT1jWBg",
  "key20": "JDfgDe5Ve4m1WrBqYKbJqvPTfwBt1A6kgsp9UCtiiJqRnLVUZr1fwemzmhCgaQZFhvRo9UK5GwWqY3oF57j4SLR",
  "key21": "iX5ShDcrpyghbcuZ2CwfiwZP3uZDVy8B7CosBmkHeZQ1ujUzbD1nRhHgEMcS6J1oGNRNhP8ELxmxkDEbLAGnm2p",
  "key22": "3PyPBHeAg6vh4rJFmWe8LyGuV8HGQbxzRFdg8TmiZjtZ18JVv9qB7PogqMv7ed5vdgaRHfRdzg5uXLqrNGxtDJQf",
  "key23": "5GpsWG1kcxNExgmrEsJpj7X4zRS13VunTaAjZ18MchobDz1H3By9jazHMpLQ3m4ZWFtWV8SUAGJRM9oXwrUMJUbZ",
  "key24": "o2Aeq3ZbYGryF58JwJWjURrLBi4s37eQAxFrnsJQfgeHq5tGkgAuZHkRpcffuzEv5bJVB7re5yLPurnqARsnJeB",
  "key25": "4DrYBwJMZodC1vwnrsZAdNXreeNYKSAKfpCmurZ4wM7gSMTxL6S6GHmJUukXRhPA8F4F3HzBqoFQYssjBUf9dvTq",
  "key26": "5FvYcBkBg8t5etPriST27QUzokwkeL12p6dest1X6uuVdhckSwXnvw8G82fnzijjz7YHg18HPq66MZz8gPi3JhWt",
  "key27": "5Hr87AcH9gyAt1xaqABse368js1G1XLbgGzXHF4gZJK8HAjgSm2n5GvNBt9vYkYWqxhwN8ViVrrQxS8GU1Kaov1y",
  "key28": "2JD6cvfuJnk7CVnmZ71F6J5cgET3SwBuK49TwrFTwDfiyC9Pec7h7k5o2tQhe2DtwQB6bWNwda76YcPqRA8EdX8e",
  "key29": "qJR9CLmsamwL1szxGQewrdNgEe6ieM17g6reHs2PFTnfrfhRepSeZbakW5XVMdcpfXt5rQ4sU95QmTJ3Qek8FMh",
  "key30": "5JJTPKwVBHxktfBwAE7oC1xFpNQixxNCnDmbWHqNbcjYkWMFFqyQxrJ7qWpVseKeLWL5NzFtwn22q8nLhooSfZoo",
  "key31": "3kB2tKefyjaaEHUwYXDiwBfsd1mQcdxewj2LMPHA6UjiNVviSPdn4YSFhdpxdKDcByGAu7TcFMxucLTteRwmkNKM",
  "key32": "4bQ1y1PwzSjt1KEMF6adKmmbm3arixAY8ntrGTQAaD5g2grYMYrRM7EDMUYV6DtM1YsNixXGqt92A4srDxGDeW8a",
  "key33": "3vpLa1QyK7EHCe822PQeLzR7QsN23j5fujQnmHiiUwbGHks5GMfLcr4hqM94vts6kSc7peKC89zpodDLftgmJVJY",
  "key34": "5ujaUaic2X1UF2mnc1QrHCNPh9CoPfYkBb6MJryN6aq7chgDbZxtznBARwMuufYN1TfGdkdg55fESqqZ1pD9w5KQ",
  "key35": "2czXa1EZ49Jnzm7EN4SMdiLVsewgPk3fFQgby7CmkbZKHt4Ck2CzFduqFV572fqt8jESRN37jvChb8cQvvCikX6F",
  "key36": "3UCLSmaG8GJXsZssEGSf6Zyp4BZFfttoAKkHkGZj1Cm8WELMErg94NVdJbGpacyTDRzoJmS47Z1pxJ5ou7AUZYJL",
  "key37": "9utFJCP2PzZS3ucbSRjFVv5brvR6wk7XYBd9NSGBbYJ5sUy5Fu1c2tdKB4yrEDRnfvvDTJ9BZwFM3UQgFxWR1nm",
  "key38": "h6uZey4sc5dmArmVAG5Nm9wq7N4YKULPDQKRVjaXExoH2qDykV1c5JRBVuBQXrrCzfkewT3AnHKJ6DZF2CZDYBU",
  "key39": "4ikpzbz4k8AtjNT5sR6rZeh8rpKBj3ERp8x7xE4FcrFaJwPzBt7jtQQ4FaovyUb26qkfHVVBZV2qF4UhE6DZGtrw",
  "key40": "4g4DEdEbye9FinEMjKQuNZjXnupZSrUzoa6EEPSH9h8EYsAMVf1bvuiWftd8NthECXeRUXC9mS4kAyWFphyFic3o"
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
