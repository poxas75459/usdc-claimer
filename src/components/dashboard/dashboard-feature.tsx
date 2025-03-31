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
    "56SGnwcSFZEZ1A3CoqarLmgZL7VKnjF8CHet68gURv5N3Lj3RRb4SRcoc2dd3Xv7STX9ETjuShJ5kp6LeFQT5TLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FhgWPotEzCGpLbY7uZoke2TxLW5ob1ULHJDjL51uJmtjMnGFMr1W8twVW1WzCC1Q4pJJfCcKrM9NFtHBpnW4Jgg",
  "key1": "37srUojTMTxUTG3MdM43ZfdYsXKBCWwhRe43y97ZHZ8oXdZPevLz3zemHpKGyXbGocueY57Jc3NW3NMMegZrYorE",
  "key2": "5nDYTz1W33PyYbt2yK441zgswc9LeHbGXE7pcXrU4zCPU41teEa8mxuy3g7sZNGaLZK6DK7ZLATjjLyGJQUDNYhb",
  "key3": "4sycNDkJLQYa2xZvQbTDEevyv6tWjJSrNkw739gCrtXuHgNUQWGfapUZYXp8QAMQQqAkRqpL2MuedqBFJzKQXS5g",
  "key4": "56aJmZFCpruCgRDf2JifrW36ZKFWhL2Dt8nQzKg1GVt5TTUq7j23ApkLhzQn3FSnBs1uUtN6VCRtGDrKMQk8uanx",
  "key5": "5d3b6UQH3sCRWQwwb3VxestpEck2RihgF3CkUJHX8gZj1FmccrzGRrYRQxKJ3Zb5E18nb36eDHYvRMt8xHje4yhW",
  "key6": "2ozVpmetcxHtM9jXPNP6j66r9vSFUxcohCrdX6Dzd1v7ofaFX8ijyu8PM819fTaBkdfg3fnbNgs8Jay4z3Gg5uZz",
  "key7": "2sz4UvWvGYZz5dhwxRnvN49k4ceMNLUMHH7w4JnBuj5ihRRLsYoG5rZRugSCDgFCbXp5jTYYysywNtW9fqRNQe9Y",
  "key8": "4MU79NSUfQrv7HxAZHPGq8siodLzbnSVFo7E4rCMWWYXmgbmNm97Ns7gj4nqYTkQsDjy2g6QbqS69zH6dzbdHJZR",
  "key9": "2BBjZTiFwACLuQAjA56SVP4ojcU9ejGvmKpF7K3BwKm5JfpxuWUeysiE2B2mk1qkKGLSpMCSJQDMokLkBpVohqGv",
  "key10": "5EdfhLaGeYpdeXfG1Lp6LKDoNPNiWr2nasAuhjhm7mpabyvsjqQQxnvPXvbvTxkHNtCtWqeGn7taB6Y64CttRJDg",
  "key11": "4zR5M65uLX993j3h2ABZJJQJ4xmFAC3dgXPCMNF7xknLLFQDspXEkVAvUsczCTvHAJJRdeduWtQFGYVwSCVuepHV",
  "key12": "2ZasL7FsqwroSQa3VDgKaoSZBVCBkFTRMbjMg1gUkKt3zLY5XVr59t31ceZc7W3RWhv3x3Jr2XdecPupc1DUQz9U",
  "key13": "2o9UWp5AyWdQ3J7eZEvY4BaojRGGFPeg3ggijLpumUaGJuzJssGJM8E66y54pAXynCbj8krj7Lm38j3anDm8jhRp",
  "key14": "jrQHC2Ci9fid2T8xxfb4HmJYQdxgex85ugiQYeTeKrsnEyF6kLr4sYtv5UZAGLAD4oCAEiFSxZRRP3AM8zgv8QE",
  "key15": "3wXh4kSKD77f8HCeT2D5ELYVcYSzdBWj7vMahoHVwhSZLHsAP3RNtWzHQVtg9yK6uXuqBzvJJ4QrMZCrK9KJJ2DV",
  "key16": "65BcDkCKGtcEHZGmQjfJvKmrZ26BtrVoZF2sCzQKPztehkM13xYNXJ6w9m7tj1oqQkssQjHiDKKEyVcQgApm3iqs",
  "key17": "1BHrkNipq4nszf3q4se7FS63bpgbgMYR5vCPUbpoAPpEEMJS9vve6YfZ5m1sAxPC9LTkoT3N4RqEn9pH1DVke6Z",
  "key18": "4xqgK6FoQouY5fQFXuDvXa74MNxJdwmnRAEM9qoVr6899QCCgjf9wjE9rhBo9Q2QnNLvoWhJEJLWi2PBSoVb2WUo",
  "key19": "3ctMhpKU1nLcDnHUGfPbCFwxYGhXVjx5SNi6uEyPjfvuCNQzvhk1ANA99PvXbMgCeUFnfYJYtUEe7VaV6d7HHesf",
  "key20": "62c2NTos3EJxXfTLihw4G9T43qwp9BA44myyxuhM2x5W2Apb9ydK13DL4yrieLrFoHSaEx7KhHt2kQmQFaEmUn92",
  "key21": "2ga3Y1ZtcMdX4S7YsoLHCbiRazLUQEa78BpLRMoVfV5aUYQFExKVoPbbzoFCnNcAvEDjVtCbEn4Mf7k9e3QJHR5A",
  "key22": "2hWrkHgoZfZNimuscCobWb182k8oMBhqfHCE6Ve64fEuCYCF3jASnbdzjHy5HnKa73wwU7ejmGq4a99ukG7TZ5zk",
  "key23": "3bp2BMD7hKehagUs69nD7Rbqq1aHiHrR6CHBhSNgEq3TWhhMaLM4PBM3HW94GgAPdcdMD5tLqMVAeJiBpEmHXRmn",
  "key24": "43GVGvUCfiuvJmCNCWVaJwf3fhax79XKhVEgwTkUUJmdq2yoTK3DYYkKeDAmJ631ytG43DjH2EndQz6cG98hYq8G",
  "key25": "5yp9TfutLgz8cYeQVxJ2kGzn7QhCDF4qik3pBH9W4nERVFBAhma8LxKes8Y82nWViord1jDRoFCa97JVZhH25vBV",
  "key26": "pz99c1QVR9JDD6eFHn3XRaDgrDgoEourAbZANHmLfqe3iKuhgyMAjmZJKqcKtG5sRnjnSwdGYk2b8RpkM7K2DAb",
  "key27": "2eEsHRTmWWqXSAbgGnhZrdgCHhTbsx1rr95TmGK4a7p4MfwTbScjq2M97aqQV2tD4WHVnWog83u41TCsCYAWxiXQ",
  "key28": "4pxvqjNXr4JHPavuQ1ws93aPcehg23tL5hEW22jnLwd7kGyaTbXNWdyiBrtCYeEP8smigvKKYtijVuSGNDHzBBDR",
  "key29": "3RHGixhCEUAiZ8SvFThfHhY732XMmFs4CPGDNXzQMKb2wLq6cPRZRJNPm6X8jRrou5XjcbLz5UmhJJebwHg83dDS",
  "key30": "KXAC1EPz2ZRBi6r48zGdCiabQEKbePZhJuQ7vSX5C6UkiAcZZ6U2Lw9ke5wniwVoNrmzrCjeLJA9krsz6bTzvHS",
  "key31": "5PstBYT3iQCf5MMfz6WC2PcPaaMMkMpRBn1qs5WY2UZCLjLnJr2AsX8i6XzJCaGHnNaHobjoZewF5p5ybqVtq6fo",
  "key32": "2M9TU9GDyYnPZVeBqvVFLrP7RmKdPk5T78N3yENnzPJs1CBbyWAQt9b2sJHrbYceCZVtxgzJSod8EoLQtZRV7SZv",
  "key33": "5WMg9EQGXqrrqWwDMpm7DtBHtZx9pvfyPbDA85LPxucumYRrTmZYYU4mYypgPy4RRACV9iUq56gVhTDCV4pSE6NV"
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
