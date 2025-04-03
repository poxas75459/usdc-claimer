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
    "4EbmKWQCZ5ZkSxsYSpFRmQGDk8c8r6FKCn8XfyquxP7nxNd2ZEYMRtb9qnZkC1WNT9UKCKbbTS5BHj9q5iiMzhzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uYP815nbB7WutS1LzwakVrN6VMMBRJbfZ9vXYNxuxWBSPZshjpGTP7ZVcBkCJHxuJG2FNoDNsvZ9oG14WWg6kd6",
  "key1": "3X6ZnNzjsHhUBfjEnZeSDu2VFQ3vY1sGwqr1d3mhL9X92QXYWnECqVF6LMkR7kJwqzxCCeNoUhWY8TtchNYtFWEV",
  "key2": "48kbDmg8FQA2YQ4875hp7kocXUo862AULkpLrhF5Sz6avhAnFETNTkNPs9NnqPFyzUzRc4rumaFyQdKYFdfTQf7K",
  "key3": "3uSV72SDp1XfAjvQ5QmoVEHSiAYAy9xMq9XUtbeU5ZvkcycQKWYR7h4Jnw6cNri4V9fWjJvUC3wcr7n68auMrJoY",
  "key4": "47B5XWXk7A8ghoFLvZVxonhX9q8bRGHFbJx7ZvoXqqfeSpUfcCqKPgDRG2cki7ukMktR3oPs1iKKpHb2a2hCMoHt",
  "key5": "3t77djh69YVPv8p3yn8iDcVASEr4qsMA5ZvQVVFZaEL6THWnWKxpVNZzRTg242j2aWMCiLhUiox4kmZaXwjekEp8",
  "key6": "22S3Dx36Yy66vdK3LcdRBaihBj4uZ5N7mQudvwLEWfKJ6idnZ4LTULfGYY7KK7X6g3nGFeiVPVwHvTu5AXgbxWuU",
  "key7": "2b2J4orhaYJsVbbfo9w8soMzNaJVV8nnna1zn7n5b8gytMLSmaHysoUrEKLdwqP4pGHW4xhdn7RhzuyQzyN2zSia",
  "key8": "5p45GwycRJaanuxy15guQqwn34DpZsBi8xKDRB7jTgWC7QxpoEvkzoaXL32ML1pi7w9es9SCpg6tz6LqXMad3KxE",
  "key9": "5jVEtXprTzp7F5TWKDgpNQu76H3QGdJyPBTFenGTUdpdYmnWDsZW865XV122WPtG4EEyj2juZQrv7TagA2HsFiDj",
  "key10": "5CNGJZT5zWkaoVcyHSwp6jyyAXporLij4XUfF592QTjQdkoRa6C7PqxxTYG4zzn9P3zWizSfcEAM8scao49ycQYM",
  "key11": "5aKXCCSTGMEhne4hdMe5Q3KqUJmAJKi7hkUXyofcFTKHr7FvV46VxH9VYFV43yStR3BNA98MC6C3X4gwL91zoHCE",
  "key12": "636LpAHZRH2qTSUaRheio565QNquf4g12v6SVYvCAyRjGkA2aTScxxDCoCWgPKtHZbLRxWgsCnwNcpvPuBMfxKuM",
  "key13": "4sZwKV12jTXxpm2QSQty45kxz5qvRTd7QAKX5ZRrMtodkdfqvKcSWv8BTf3sHtoRekKVjmmeMrHEzzWrPkaQ9PeD",
  "key14": "8GH5a3wF7F4YDcXDzmCwPjdeEwM2jNf3WP8Xt9o21m7ytgGSgHahL45tL6hv2xw18ArY6pMuHHUhPBoebxsAdhm",
  "key15": "3AdPNKiqERW3skug17aAcFwmCV1iq54gfiEGmAyKi1dAqBZzfd2iRK5PXN8iWnyakQiBCyHxMQAF1u6cJr9exFGR",
  "key16": "28msHhvagGvbPEvPsKLpcRYbVyv7yPao4JtB6dbuN5J8USsasi9mbbN3xGjupVE1bZnT35D3dPvedtN2AuYD5azN",
  "key17": "waBgtRLEU6143wSt1CdcosTqUNaMMSi98Qzd6fGymsbAaxeUuGZGQgstHXAkwfUwHZPyUfsngxPttMnfVKefAbt",
  "key18": "2xurg5j5YEyYWUDV3wgK8UyUbKqgKkkcf3oLQtuDTYVoo1m5AzUv6Mv6JKrf4jAi2XUuSKi9UyjkD94AJRrk9Nyo",
  "key19": "5bEQZMxdfo8AnMNhkcWXfh6JvDMwWq49JdjUWAcJ8VPf4cm6SeEQAgSjVMtunvEbPUkbP9m4N1Y6oJXcuhV3s9h4",
  "key20": "3wANHxzYY2o6dZr3Hk1h8ZhDdbbbdjShyWJK3PoqxwHQqUqAzFzSTxPGQCsjsAAucNjG8oykxYfnk6qjkEXWz7pA",
  "key21": "4KvwfHwytrfW5QXAYnqB3crfYCvTimZauQes32yPBoy4qQks8Hu8SHsnLWEKfTpBQs9QTpNM3qfsyouMSEPASiEv",
  "key22": "4phwFAvDFq4B1GrFTxM8uhcxS1GUNSJ6pnHtECpjdvfKmM9oLumVjrGUxebdHuP2phWUvXw48VAZrqYfNaaujqMV",
  "key23": "NBhJY6MDJqSXuUpyFbMbYCCzQkKG9sFYJ7QTqpaEnP9jtC2GWe4oUR3nX8Snpu7vmLxqsrwaNPbZSTnG27qEre3",
  "key24": "5TkVPAuBBxyJmifGnVprFnvksfSLHPD91QBX2qKG4uVfaP7zomcpXWyAUgLSpXUyLkBTjoBMFrrD99veQBYaicdv",
  "key25": "4FnBAESnh5VYZH9qvYBNzUuNmncMaLNtZv153UTzJKqae5TBbRRjedJTQ3n9oppDFB7TPxJ2PfQ41RUjgfaKoCiG",
  "key26": "4YHZTireB6DZ4hYezXxTra4ZkKtQTmC7rpWgdqFYfafPqpDymn6U6tPPPSJSZMnqDkHuisMWVzteSTbdwtHSQGPQ",
  "key27": "4zLb5u2n4FaPGTzvUtksjd8CHaxPME9uKYQx9HfythrbGDBXxZnxQNGnLxy568JUGFr6U2ob8LWXoaYtvdx7NL8u",
  "key28": "1jyFWCUJZCDxaCGVSbbYpeuJrKWREbBchnLFd3CWJM3eyPj5q1L3bAmVs8Xg2TXdCmFSfZ4ibrAFAzV5sdbVDSL",
  "key29": "2YqFRk8K9hnyeY1mRmX5i5H9cWtG66ZpycxbP4rsL6vNQWaZXT8HTErzyPNCmPniPovSwEtoudvYGvK1cMVossQW",
  "key30": "3k2VLD6HhHXFZMuA5jypjFs75ocbJNY2N5dbhHjCw9dqEbBrofHQVvTWhgHm8wVxmeEF9B1J8ngdrjpcotLKdDTp",
  "key31": "2LFEDQk7ZH8Tg4QVTHirnLHKKHYS9dzhCSHTcaiKh16XJKc2W89uFgNramSouiLabWHmXvLuX3VsoXV4fTrxrc4Y",
  "key32": "5KuuMyGanSXNb39pyn93XwhPcd4GC6dudf2h8UWDjEiNLJtwPwUB7arLL7zmWBNDB5CBugkGyND4sn5yUSAZXZrK",
  "key33": "4zQGYu3wKiX5RcTBFm9t3ttNDugMMLmpj4XknqZEpbMQYJKhcNND3XCXLj1uxaFEquvWmV8HsxhnYoHWjb1K9se3",
  "key34": "2eg9qnrWmBM2b91XW8xyqAWDhXetvmsXzdCxTZkxEUt7gMsfFnU3qDCRVGuS4XF2xHWxMEKLkMbk1FJ8E9Z7Lskz",
  "key35": "UtXumvAit4iBguvhTJUfcSiFnekN2PYVtZs7ABkRDSC7UQU9qRZnWF3AEcm93z6Csp5e1TgEP5ruAdYsD2seoM1",
  "key36": "5pxV9P6PDMXgNgMtVJoxmXLNJsFyvEuM3egsm1U3RnS3VMrjE6VNtPLaopmpwHdpc3kybUiVYra9LuezoWtKwCnB",
  "key37": "5No2ZhqFYQXxeqD3vfCBPzhQdNSC4F7xmpA3AKfs7AKrYAQcVZE4dXwSahVkGmXxBGUZkTUT5Nws9HBYm8Q3R7V4",
  "key38": "4yhyrA7YTqRuPzNz43zTtUR9GnZmGafjrHyXEepoX8kf1Lc5iqhbdV5if6fK9H53dgjQqi9K44VbNzDWG67yJa2i",
  "key39": "38gFBDGb5rzVEjNRRykSqVXC91J7ntQwsVs7RonJozxW9Lu9D1oTry343RhRF682Mwy9T1PLwh72Y5zV3vZ9Q6Lh",
  "key40": "2ptJjzFTv1BRoByUXjd9T1QP73QLZ9z8PmsaGVJBydmrGDC7jtRoAU7PmzF2hZiQqWKoDyhv45DyLDGkNESAPW9Q",
  "key41": "4DRJiWxjoMjqEnsLjZMFdDB1Rb7K1u9hAT4XhSA4dEDEHtEb3ipzmtVNr3gvW88pQ4APHLWu3k3Ko4xQzV4D1Ghi",
  "key42": "4r9bx1Z2P5bTU8YXjohKa8SfGQmYYCRvwVbRcb1WXF6D292KxNRVTkSQV9dLRiKsdP1jgMUogrq1TFZjzPxtiotM",
  "key43": "4coYgoSdPjbFkDqQYwDtDzqjMzfhXnpiWCVYb4LgJ8HCWE19Sds9cpzycJgQ55Kyg4DciTYRav4i7fJyNm7dUawR",
  "key44": "2hyWXRrGPJHy1YtjGng6Hj9KRdsDerJ6tnwud9S8xjSEYNwVEBRsAoLSNaQAkZRJkr35gXRDEagRvPZ5U5XrDLdr"
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
