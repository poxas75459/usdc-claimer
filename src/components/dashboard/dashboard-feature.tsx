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
    "3H7vXGhM725VQCzZ2rBi6jSMT76fzuHeqRSHXis6htufADWgDxLAX7qEyrd5i62jnybYT97tA5BfTR9PGE4V4xjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41sjKJtvtWP4SVE3sNGUVxdEqofJeVRBNeBgbMGQtfFpVYWrLFhT8EqBFJDMxk2UUypeMe81aGyyDKF7VYyQ45V9",
  "key1": "3RQ7MD1wJayJMwJb5EBf8NJNiN9hDbQPRSfcZbfWcyDdKEeSiVLWhiK13wWYWraQ3fJVBjyjistcYUfBo3kyvZX2",
  "key2": "4pZdjqNMyD1kAcg1ZRm5uTGv4debJUFddxSxQSK8hKoJ8UYrjXBFZKE93CyLGtS47ECB94azsxneuMRSJuTrGyzf",
  "key3": "Q8JWbnvahXpAgFLrxpvPovnpuNqEPRbTxbFS7K6EzFn9nUhbK5BejwKACqoP5odWU8iVARdqFVYvfheSpqvpk18",
  "key4": "3jaHYe51DjzUx6y3KFGwkdn2EqECQpQ9R5oN6L4sWpnALehSa8UfrZfN8YQJ8Wu6hbsCEsSt8rpY1Yg6iHtEDqCf",
  "key5": "3cZEvRz8o3Lwzi6T8GTiDmtkoHiQkwVKUqrTwFP22YKz4oGJqQ2VV9ZYFmrQLxuqnnGr9VmjydbpaEs4BURLiZ8z",
  "key6": "5mHStm9YFXWzHTU61zdQiUUi5GXPgo6Z5mabifQuHr77B8Xu6EDhXDx38iYS4Asmiicd5rPqERz97Ne6nS1EUhTk",
  "key7": "5DoCK4HAaiogU2WxSxT5mtqzueyqWhhEboV9FQkU5iSnPf9c1d91W8JvxLoJ7VuHiN55ZyiTkkWXyeX82Mk71437",
  "key8": "yTsWGYFNunHBVKATSkp6p8HMqbuRkJLSmcau4SdsmP5jbdWqfgFCbpS7FAL6w9MxsAXZvcnZrDdEzLqGmpNgcPY",
  "key9": "35C4A4D8YihDjafUBm13ACsWBuVLyKDNhArvDsZNuUzmX4vg2bc8tKZfojeuCzzk87RE5dbvkisHLz3UJNDmggW6",
  "key10": "4BG9bKDb4SRSqqXjNjsDAFa4UJHPjmSHcmr2orFhaV8xcungSTME4eFmEjNETsZYoeVgZq26Z1RqPgNEG1nCXxMh",
  "key11": "2uDWCPq1h4XTTwiJRr45siFof461fNnRoHYJogvGvTaDsGWQDFaTxAEb22qgNG6GGuhShHGXVSiE6rrVEk87vYNf",
  "key12": "3DvNcN8Y5wwrsiFNnrXe3B55KVHCP7qxBCetuP6o4QB6SCsrQFJSbpWkqBX8bACC5VX2e24J1j8YPknaPyv2weBA",
  "key13": "3cQxkHskh6TXS3LxMviZoWyfKMwdtaj5T9ybcAyrPvBtrZKj6Ze1JiJjZvdjy5i4oT9iaKDo8yJn9VSBKLtbT5TN",
  "key14": "2CC41fcYx1YPiNLFbSZrrMvh3M1tPmVfnRkiicyBgjsYrrs4uBeNTihQYGsD37WccD2515qgVADwJhV4gAqYEo7W",
  "key15": "4dQZzSLfyLSCGoHkLMbvUiXyhwC4RFrdgZfYLDQAQbWqq6mJFgWy99qXvzZQWR8zayopkBqtu4eKvGTqGX9CmJTd",
  "key16": "3kBuuT2xVwt2nchw8AWgi3xGYyBBjhEKze9aHZrwMrcJgcXJcw6KxJBriwjU3DpAKqMHhyuvmfSx8dfigDDFT6jg",
  "key17": "uXVNJzxhHmURVuFKvgVXZLfTRrpX9M76HTN5sUnJVhpZYLtgGrERNNotYS4ovz7nVe4ZRG7PaKjbKeYAuDm94Ef",
  "key18": "3p6iiFJ4Xkx5SmNo48bHLz5YgspeFSgz6bQgYnYNawWxXAmvAUucqGrAwuQZo9vyaULD7pjXMVZcRZveTi81s84s",
  "key19": "3GgH89fRGgHSHnqfqvM1M6bkMLh4YQZud7oXy1Vn3fpFu3uRhetK1R3ZiTz3pH1ZQKHfiY2VWFk5XTyW4R3Wx1zX",
  "key20": "5RpKoDzyUTaRMDCbfH9Qy7TCth7bj7YyNsLofsnrXcWZMFG34Sy8FNf9QtbSqzdFZG48m8GHvrmPapXv68Xs3J57",
  "key21": "3V2KYUDxb4tDNsonCCfaHZUJRuJ5pBwvrSH15Cy47oZdnbGrUKEyQFzqXrAiCCihGb88UXsrFsXF5fuk5xGmBESU",
  "key22": "64HsmAhqixB9Nir7gNCUbPsPHs6iKU6jXBZJY31BjDu24M7tgVBWZLTNqcNuddGwRwD4w7GkWRAf5oC5Zak7LEgd",
  "key23": "5njV8Jy2QBX8JshSfC9nia4FUZSb1DLbEqTX3BQA9T7qGsAJvZjcThdjByoDPWqxtpjsNmZkXoyM3tnzrGFoofcp",
  "key24": "5Mdi4MVHwC6fJgsecvaGHdPk35RNV75bPNYNFqWg4QBADeLq9V9XEkeaAJiMt3UYxrTRMkMKGfx9MLoqU58Wkiar",
  "key25": "5u9YtE6uLCEuuaZxNfHsh89GSQpEtQa7iN2BRtEpLVhPwtUpFM2Bzpd7ZBXvaYNHHU7jeQmE6gEezL7p52ZcbQc5",
  "key26": "59gXXinNiSPdpBXzKNqpJ16At7M7wmrQdL8VKNB7nzTWq9RZbpjNUbCtL1giqRqwxWmbu2iEb3Uf8185CmmxzFgS",
  "key27": "3oL3QegUTfwRcNxUQcCdVrUroKnQp13q55P5tLA8i7zmmDNJVffHGcrcxFLXWREpvqdGvXWYcWpC2oJttbn61PeJ",
  "key28": "3aESYLbZTNSSe7oBzYcwbPzy7hx9At2cmxPuCkRxouhxGwCp5nxzbTE5E68RZXxt8k11bvof5t7qgXayiLBwvKLt",
  "key29": "4Cu3jpYQbefTpvbjy7fGYVyA19jzJEDLtDKKZ14GkjRkD3YvodZnexAygeRcppFgWruPpRfaZ2BnfaATvCbjqE7v",
  "key30": "56KVxTGnCctjbaHbWc862A2g8FMrMMtNQNb7y2Ge9ig5qWmz7dVGeEcxCQ2myqwrC34rrR9dxVe4MVfgzSAmP1zi",
  "key31": "4k8GNfZeaZp5kthCuGvapAmZqJwyq1Lh4oAZjAGJBFopZWW483jKrZaMUqAPe5RzbDW8iNx2SVzR5f2j2iSDHSnU",
  "key32": "2nBpwKH6gPYvVWGzcpfggrcSNTuY4Uu32yUqSSnn1KRJjuiQgH1SLWvWLQLjG3LqbLGMPJZjFULZR2vtfjHtGrVC",
  "key33": "4s3zY5GEjtHpxVLgffS9yEgnPaicxuqQ6kNjci4xsNjUk5DVVomZyYdjLAcCZVMKHSCPiBUvFKEJ7XtGA1Rwpb3M",
  "key34": "64piNcS6VU2Yj44D2RyUUxs1VZGR3p6cBBF1sTrGQdco4BAXTaa1yGdi2YDTgvxew8nKBeXyUSKa528uDvz9xGDJ",
  "key35": "2imnTFgu1EqQTATWrdVZihHN6Hs1u7AYEX11MpVvmFEUGYtYMgDLVucqTdjmiFuQP1zsiujvTDG1Ed31ZXyQMcEp",
  "key36": "5bi2bF6CpiZbs3dwf7SmPHofr92XPSL4zTjhoHJzyyWqQKeDeccLCzcynqMxwow7o48UeKeqgGmEuGTG37XKpest",
  "key37": "3oA4vKh5Cv2125jQAtFimBNZdvTt8tPeAxtBFrQBYrmbBVdioCrWxpGLoe15JtHQh5LaYTRvqF1Z6A7dcGNo7cdZ",
  "key38": "3vofHaxpUdETL5myzi7r1k7ZWLjBYTvs6uBR3cjsVpPHafPmRM3VcRe2A7VHJo3hbX9MS2fLFvqC2vS4hDVg6sKs",
  "key39": "31ap6NTaD8ZcuMJZEvgaju7ymdp6TiV7TMFmCAUho39t6kFK4dUKstZpeA35iPbcdctUsdKecuLp29XtMc43z7EL"
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
