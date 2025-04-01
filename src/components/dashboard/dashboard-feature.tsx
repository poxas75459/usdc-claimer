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
    "2a6E2Cf2W5iAnMz9KeVAb1CvaGhpfzJmSJtGqnx8DvRM7rb3Yiva5jBFufJ4HigEpQKNHnUzW4JGQDD5Yeo3BrDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mf1iQQQHrq4aqdvMYkhhXn1ekCig1ZaLUygBMVyu6Q7CXM2qmScHRCSNriPS9NGnxn2hzRo1hSHftoi9TXhLP58",
  "key1": "54k9CHz69vJWWadfYUhyJmThCaw6cCyygEKC4wLYRz9MpKgRoyciAvMyuQCqhbW37wWiyrxbrfqF6okSKDMqRqKF",
  "key2": "5xZSYrGE5WEq3DmuhTeFMW22Eud9mAFZ9Ma7er4TL4BpRmijiRPGNScMKnx9U6iUY1kR3tPrYRhguc5puFPh52tQ",
  "key3": "5cWLwGBMMJNZExm5dK8hKe8G55zav3V2dviP5fTrsc7Da1feuRZkLNXh9R4JyZSXEJuAHdLXSmRZPa2xsBWeTHKZ",
  "key4": "3m5x3w7LQb5eZyHY8BVQ8ssggZYnfZ9pijckqoLXGwSqbcaejZNpPixLjBAbBKH3EfAThYvKK8mG7fXjSWzyvhYH",
  "key5": "3tCCMiSeP7CiyAfk5B7yGpiuJRd6S4iDmkHR1GS232QoX6rcthvcXfMkoX8LfZegi8NFFyRFekb6o2GQgknCNosR",
  "key6": "3J4R8RnKSyLAu54GKkyhhrwkb1i35Lcvhg1rc2XAPACsGmUZ9idi3CCajkpNwxoNW5tZDiBj3GRt3vUmF9tXiRdZ",
  "key7": "4RKL1xf9j49KvKFXaMRPomAGRNSPXHPRPcP3GxSEA65dn9dNkHJJJboXqdvhi96RK98o9EL7mNVA1PoM88bW4eq7",
  "key8": "44xWiyvKRdN6qexWBaej8sbvLt8gFcRF5nSw45AZr563cyiT1Pgd1LP7yaEUq2sQY9g75HV7tsqMjyW9zowGiE8D",
  "key9": "3fzGcyooBDYQXUZsUypaFCJdiwg9vTK4erd4tKjbPb1YYEV1HVkLHwS1ErCyrKTP239KRqZZEakmE12CcWJX2Mpr",
  "key10": "H2syJ871ZxcgAWUDdZfchRKsBLk7jYiVZHSvadGasV6qZqVQKRL1Nt4f5x5rL7BATJSHTCsvD4CHxPFhR4XeZgW",
  "key11": "dinSJ6cu7miNNL5oEF2ogi763DYuBD9pLx1tfyVhMnuGZFseCNi4GPxeePronn1YodcC9weui8bbpSg5GjoqrTA",
  "key12": "3zHyD1heMdESKzaneEQ6W7iwy1RVcQWb9UqyMCPcAfxdGVm9DG46SAcAqm3biF84fX6SQyGyErd4vANGA1mX6iXZ",
  "key13": "ouMjwVb22QahMB1EVJUqM6yoG8e3QDPzT1XikpUqGafH3b9qzXXQH3qcDVADgEjr1Ee3JRYP8gWqGqDjgyHs7YZ",
  "key14": "5S2xhEhheYnvU5EB6EfW7mDKiLqBGnCHqj4DLn7Vv677LUddw2AUt7Ti4bXBr8x5wHZbXmTirHn8KYdLJm8gtKBf",
  "key15": "2B8TL2qUEr5gjcy327h9kPeAXMWhFzSzWhWHgHryqc2GVwWJjUCmSs7U5i5jF3F8gsSNNyYDdFD2kFgv17WL92Cv",
  "key16": "fuaaPLw92DEEvNAQzV7Dxpbw7Qsvvipi5sp2CQUxqBt5B8AcbFcTJWMFQxhhoojgP3yQWh7cQPpaSSsrkP2Maqc",
  "key17": "4oP1ZojsLKwXuQfqCWT6PuC8n5jxyYCPDpBUwccec1gj4o7ehN9qi7Reo6ubjHrAEsE5wiVVHawouwvKjwr8ay9H",
  "key18": "3CHR74biet4LibmM9dEv2FETYz4RYQ8dt9pkm3Kd7VoEJUWCZcnJAbqsCWxPriCVGQpQUGM9BvL6iVxYKd7HSz6D",
  "key19": "2EyCD4zjahHqPQuNqpcbRmRUa1fzH23cJ626jmjc9f2e14inhnmyMAUr6iq74Jcxr7JuapGvHLRfSJ8FgyC5vubX",
  "key20": "RbBJKzMoFFXbzXm9CdRNkhq8Hh4HzruBrwoApS3CWEXvYaVEsXz9ib23u1JKt6UGUrjaiWbGrVvzhT5bmqMDgtW",
  "key21": "3aCEnb774VjD4WsCKT4FWiaGFUdirchubpRkXCginKFN9rnnmXXZQVgbdi7UoLWMJWqevgQ3Z8jfpcegYF8ubxT",
  "key22": "3xtrv4eXPptCRUctM8si6TgQCLdhJuEumXeXV1EpDZdQG5ztDoZMagUgZgHSoxP68gqZBAnDNRXQE229JVrrqEiG",
  "key23": "2ZWsPxbZnEWJ9H5mg2tHPwRbXp5cFtgutjB4ZXJyJCqYeQV81ZgVtuK27piEujA7ZsBuKEzRnx6zY3hYRvG7XT28",
  "key24": "4aCfCgP11CVrih33ZrAnPgcaH9sBnKPqUsSXpvxF66mNyHVsK75P6US7vEPp6P9nEJvHDcreFLNvpLe8rZVnAeAC",
  "key25": "2aGtiVa7AWrAwbrR4g7micqekMBMLeb36Y1ZXCLNNWmC9b2PALV9fckxNPNRgtP5nv5Z1Who6TBbMdUHSxmhy1fp",
  "key26": "3JQUaHJJsegPufKvYAeAKupQy6gm5ZGsnPra6NzvCML7jdyEVb73sK2P9drGYj3SorJy7cmbAtULaEhCkWnRJv9e",
  "key27": "39V7esgKcGV8MLWkZqyHBX4aKoEaX1mBeEZhHxySy6xsBMMX3AyDFf4hGgoUmaREH9vfgz4nwDdgiGWivzvM4ckN",
  "key28": "3xF3DvWNDoi9xJbAh52aKRwiUQGR5XT8TPW98YhzfaAW9AA6F97ngywoGpMbgCG1Z2AWtCASoxVaL7try6eotZRy",
  "key29": "52iGVaVu8qA6WxfuXw2wA1jdN7CRMR6XbaQqdUH8s2Qd5mrrYKrWtXAcdy814qWRJm7PSxjoLgwSrpvrJ9uMMhP5",
  "key30": "59fjdSrbVnQshoL5JqHsAGmjN2HXQeLLfg3RShHEyN9YZaH1ZrNySvRZHKPY6acdokT3gBG1qt2cK6zpnV7QUvAq",
  "key31": "2VaNKtjAE2aEpSF8NrCK965g4VHoTRTTtzsnxgHfsYN7MntFiYtnGUjuK5KYmLY5BJ9zmKjoyDvBbtWiKLkYrmQK",
  "key32": "4TahXLi9fMreT4GjwrcSh9jABQAhHdVZjJsnbFZhwyrtNSUFbUufVMA7RtbTrEtuukqTWBufKq8wHZJXZkRNvojF",
  "key33": "25w3kMUQXM8mejFMTLs9EpqMF4Pz6Kmd6yLr5Lx6TEC2qiQCQ8GG7Em46qJcXsXE8B7JejvuJaWbkksjgL4Y6Pu4",
  "key34": "maLr8DUXkhEq44bz7iJXCs6V7vaRZb8FAzS9rBrK2usUD6YnpQW6YedQq14gGDYCePFvkhc1ygJyM3GordRsXgv",
  "key35": "2CDjwci35ATh8k1zR9ANDcC9sRYp3jWBpJNmGykRKRpgPVgLh1rmfDZGcPm7xdM2qn67NE2QTEbQz9SaAXv22Zcv",
  "key36": "4Xk9WqAWuHQDmhEfQTDDkzR7HVEzcRvg1K7scKQPp3548QGKVX9CLgCgEHhFfMajMGzZHfgnzLNBSXBvJfS2udt6",
  "key37": "4cwieDvBVfamEYcJnZ8yfTfnxmTBcLwnBXFocXo1c83uKvn6sUs6b2rSwsSfrmsoxPVtAdfYivUEbdUYCqKDFYT5",
  "key38": "2DdK3JxJ3Jcc6tTAJnwubVFQMJp5HPn4Nk4Es4fRZapKXksznZG3vE1YK6Z7zjGpoks1ZnPsY5HQunyLU7514iiU",
  "key39": "FgYF27zx6QTp1qatA4ZRPPH7tyBKZ2PswsqQQxsT49oDHf9owwAGz8sVmKryPT2Pfy3F1X7svWFCT8gMcEqBNBJ",
  "key40": "347p8n1vj5MH4Xpo97NaU6HW6xsCV6y5FsrgBKPQ7ivsnqYfnPECypjQXwdvmYNzsyPHuUDDvvwdYw31rZ5bUxWv",
  "key41": "2WwHhkQoxat2mknW1cE3kEFDMdCMbSW1dJbvimpgUHAoExUY35xPrEWgAtMMvdngYUpdM5VG4sJ4JaZRB22XsZ8",
  "key42": "rs3eCSSLmN5zA6uMf2yTGgDinhGZj61Yio23RLAgTgYQgTN6QGFsQXaYsDijrNUm4PBustquasTir8RLeNiBDq4",
  "key43": "4FCRWZJWDcuj9wqow6FVCvfDse4L2A9oDTRX59z3tqZ2ipKSHGte56DoBmvAYnRDhcvKoxfQQv1nC1yjGXKETD7X",
  "key44": "5f4K8t4N6PpeEoDQCwLgQzPUYDEEkhmJsQ1jM5juDTpYcrh8XxW2o2KDMHnPQoWp3kJrgfMuPvrXLeeqJmACVkqF",
  "key45": "4ymSYPFGzPCQT24eE94DMgg12GYv4sWLBqwKKWVULEQfe4vzgR97sTXsY2tSNsks4GQEM4MWyM1pBfSPuybKxj4A",
  "key46": "zUTnRQKniAopDn5Y2JX9TX2xKxttqnGBssCCa79m89bFPmUCsHrkGs5VTfZNsr1HvAy3hz2UCZhYZ8NvPuPijn1",
  "key47": "5MGs1MuGz4RJhMmFREbcmMZCfBXTTeRgKu3ipXFZhffDoptWzmZhRr1w1mtuqkoU9K312wAjD1KcnGYcWe7Bx2MH",
  "key48": "ThXxAxCrcY4PBRQyik1WXpRtFgtG3S288auRepAcRRZcoHMoahZHBTHfyezC63fEHShe9H1tiifjKmxpSSrufDr"
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
