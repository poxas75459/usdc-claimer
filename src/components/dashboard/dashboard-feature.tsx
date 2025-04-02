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
    "4Ncx17BKVpj14m9mott2jUBQeMigatYo4wFUdipsTu8TMWuUUyRs8AyDdz84UrvYZZ8yRahEpku4Fx9t85MxSfYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wk3FNQt8gjez11Q4fTfeuJvYWHw3vtGNGjBLsnaXqb4h68CcGH3tD98xUy2mJPMr9ophuVEvwcZ8Pym5nSUDbok",
  "key1": "67741toBKdiPpPCupgFV5hYGhKRa81JuKrsS9gW5hYAUjYqYgfg3iZnz1MKfBMCfMhCJ98ToW5YgQq76rhzKjyvv",
  "key2": "32dkAEdeRd9iRr7ZPTga5G3kyKHCq6DTw4TE21bESqdNJqvwRNdC5fNDu6tRTTrbpCpDNxGe7TKWxiQ4XPD62ed7",
  "key3": "2d4feLdXzT1ciZ4EeonumJSzn9hRbbZAbHJ9eSjXSmMRdCvVWXWtK7CBvCkyb3gMfcwMcTea52KYLcZTfmZKXJyx",
  "key4": "2qFMBmByocPNwxD2e4YoXqiCmpdUhFZB5cnuMNy7ZSmSfhwkmHhdY73CkPY2fTZgU1J19jAAG3WSPi3BMM4wNtBd",
  "key5": "5f5J74ekb1ojrWZnSbm7W8TUDWNshcfRdP5UvZTuDEXCAbK6djpVSZGaW7ywtDF1DgBpvCzycXJr3JshdVpjURJz",
  "key6": "32aX5k63ndkQ6jmPdwBQwYS9YjD3C8beGf7XdDhsYFYNvKeS2nx3N3QDr9s9N65j1XcEZueLfesbjJU9p1CCV7zT",
  "key7": "3f5GeKe9BD8n5sbbeZhR5GixyGZ5uj6DY3jfUjiA7pQCfEFnLRrYBtNW7j8Yp5FJhmmJD3VttAk7b7uq5H7BXoZc",
  "key8": "54GeZA6w6XhQhNR7nw6zschQRQM5QKqYkwn3f6unU8wbeR1PjLz3VLaT9kzLLZrXqUWeD2EwUnzPBx3vkdUUEmNy",
  "key9": "4JwvUSToea6iz47B5SfM4NuZNeqt4QxvBfwh2jnLmodcEcGU9o9G5cpsw8FLzEAwp6qQdwCZRGkpCpmF91gsnrUW",
  "key10": "4KhJ9gX6HmH5vk4JYHQ2SDyEqBfTrTN3FYmsJqPvBSCrfA4BUBHCNnaTXdtzQ3v8zMxT3nnum2YQdWyaNC3hVDui",
  "key11": "JNJmdgtHDRKAzswYi8ZyDQk5qg9ohcS9PcKsGe5zKrZH7hFsXBBSSgcvtRDYEjchzS3q5kAGYXDUJdkvUZdh4oA",
  "key12": "3Kz3peXWao3Kp9hywFF2JMtnRn14E9ad3NWLPudqxgc6ucCW2oXpjUMjaujfxgQACENzUPcsGKw53Grhgzc6oj9p",
  "key13": "53dHrVkK7BLURxR5PKbWQ1fGaqRvAmHsVrZz6d6GLWz76eBaLg2V7SMKJXxAxW2g9s7oCsw2HWyXwfhxprq7dvvs",
  "key14": "cNSAnSzjVQfH6c1c7iRwckhejqZF3wjkELtL5kdCyFNqZSvyrGvcRGyxEeRj9TFfp1CX2f584bor8663SBdDb8a",
  "key15": "HhYADNxk4cyfrAzyRgwN1o6g4Hp3zdJGqjpUbbgmcZfDLRkdo9XupyE4xjfRawEsvEMoCFQ9jNfLLRDeeLaWSUq",
  "key16": "32NvfH23a8fWMiP5cjUmSRk78jskQAWiyBqZ4gGgjbvL6o2WSrGt73tD3y1cbE698NkULQJMnYtapqGjHJ3RDuhf",
  "key17": "bysYjAx6sEDvRLASecKw6bN5nGkRkR8EYBv1oAk6oJ5e4CVXiSkLaC3NHukmpq5q7J1ejX28ZZpxipvjNS3WYW2",
  "key18": "2oV7XefQHVEfgMtKJ9RuimJdYENQtb2J9zokivTFN75t6PSwTgfApuSHhheve9y2yQWm7e6s9qpaZPz61Dj9tW7o",
  "key19": "3nk1PGc5a5a7u3L2eahdKM71yKbzZNNt6ejnrnJzG9kvRQ9LRss2iACTNQusjDmeXZ6Bpd5Fs57NzS7ekKZrA8cp",
  "key20": "524nJPbhXB7EV5X55Msj3uFAH86qSQFr4qRZS6XFMvJa2QWnpxyhxoWaCerNNnJmUTByD2Km51rWwTLVtrEsYaNd",
  "key21": "4tmMyTbJcKvVWs5hvY38TCnLBfz2uR9i99DHab8aVnEF2oLGz9FzNy1EVsxiZBuAHST7yjivkYjgHG6ehWz25csh",
  "key22": "bsseJxyF3aQ98pEZvizX5zE4Ct4S7sWRMwovYhQe8MJpAQHWTAsu9aRFwsiCXjdKBNbxJft2bsoaFU6ARaDZTVC",
  "key23": "2hUi7gB8QtNpJHdQ9vnhbSVXhisCC9h3hniHx6VRKEud7WjX6AHmqtQ3YkmJYHwQtrjQR766P9LYiFKvnD6cLGHW",
  "key24": "29onvK3BvCPpVwiXAVuiJfvntmhRsqBxs9e1iQndBUqwUtwy72mZWTxtDrVoKPFhnghPGX8fKh1zND7CZXiL5pAm",
  "key25": "43Cf1QVfE6PJGURkWYzu2Nzdw98x1go4tv5VuyDzvmaG3YQQBKgS7Tt6q9nuwkc59RTBytoE61CDVHJcJhnKzGb5",
  "key26": "63ijALcTKUxUpm1TX1fsBmsGkH3AzJ5BcwqFoCyA8LwexBrYh5hms7RMyRmpwCVo8vVHwuowJXTQE8x5tZCTcVpg",
  "key27": "525QfJqCaSNh9eZVhUqfAmmNXZ46A61bSnezTUGgumSsfhvsfXXrBwyX5ekFFD13T7BmPpoeqgDPMuyL9kKDJCAn",
  "key28": "3x3B6fFhiu4oi93tBwub2SkjhvDaM4aJqzSesjF8FvfgTCNMCJH1VKxjgPfn1WEnzT2qXbAzEwChG1ebB37yyQQf",
  "key29": "55iSmKgZm42yrmigsyGkrNKibtv63wDjbwEEqqZjAJCKxhjEh7ubkyYAkqWLnXmUGrBRxZBFPLwyLABGKjDobRhf",
  "key30": "2xQC2HWS4z88p6xKVGzx8FLU9Pc2N26Bv2M5aVPJ21ic1PKKB1oMJBLoSajKZtdUJFtFZakZyAJWrrFTAf6qsuD4",
  "key31": "9ZLAy4X2hFsBDq37bTtn9afhwRRxRjkjqZ2ABpmsc131aoznH6wYT55jYn691mDQwRa777Re9YKf5jSkEuUAqz8",
  "key32": "2fFgHwQWaCYdCnMHb2F5yCdmjhT9DG3rbSBKE7GzMweZUo5jNWhRnGdHE9PFt9SYVkADYregzZjaGc9n22pHf9L3",
  "key33": "tUjG24T6iAeAFzhnockQ9DiyMX9wrXwTnZeSnHK3trH8KKtnEq95abVLVixCyFwg8TRs1id7VhZfBpuMyojW3rv",
  "key34": "5cLgrSCdFDSuAybSbgPc48Mu1sHsS5PdyLL6EECf84ied9g2tF4iSWGxppwYDkP3SC9KaAVE4E7HendAZbSGCs5u",
  "key35": "2Fth8Xz2FfFV3hpDbV6EFLzSFexsS1MeSaE23K7NvgfpKpRhDqaCmk9CLwmaJ8tFgX2NUoj2WuC9HEb2nzrRUpKY",
  "key36": "3ybv8R3euK8nVyE4Hweo2yTXFjPnQ1o6DU9XFRq7PtUQEASbJNHS5B1vG18KvdyNbXj2xnZ6UrroUfNK8frqW5t9",
  "key37": "kigHkjhSHAmFFayndTwHdsJ4yYry4k4UaFfmnFAvgBNQjkeECJ4DwQC2Hn9oUL31G9ZneRw8nLHyVGVWkE5aXnn",
  "key38": "3USKRE7TyZBU8Wu7bfjQiVoFtF3HQvN9CcwXaGptRSo9RBkFdxjruhe6a8KXPu6s1ZLSvX7suetRrrF1qvsTmVqo",
  "key39": "39kUd1wGM5a3Hs4bfTPEtggoYq3UrJxJB5AZhw9cDzNwfjcGBpWiSzz3zCJXm8mmSLYpM8XX5FafBJm8LNxXCuQP",
  "key40": "2ZznaCFiHJwyySqcmJWdFnQq7aZsY8QnrZn9yMFxSJspGbt9HSsjEQLx9ajiMnbtRiryKvWvoA3HGb6YceFzo1df",
  "key41": "44Q6pYDhiMp2NRNQBYeLcY7cEi8DLU4dAHA6RvN6k3GxTiayVzYrft5aqE4yP1xTRV1RV2soPNtqcizhZmdN91Fk",
  "key42": "urQHecfkVKQtzsCtvsPXfjbDCWbK9kZa2eQd3eqBqwChuGVVbyRezy2a6R4mBkxV1RoMp3QcT3ngNZbtvhda6Qy"
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
