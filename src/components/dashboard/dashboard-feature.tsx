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
    "5KRSxAh8KMfqKN4wX4ZZeAj9gyLVHp1UxScY1AqEXU7WJGBfPFpMk6GLR9iqKgLczCGHtHwpyxtFuMqgrKAa3Zp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2J4zYCaMTFBdKnsgtfT9VwgtrvvPWnr6i6z9qKKSZ5XXagucX8a4xmUH6gGqcxt7hQ2hNhq1FwbGRaqKMcZm2x",
  "key1": "7ZwiCosJE3KNdsTkY1VokUu7tSqbgvEiLVs9VR6zwpGCDv9KAus7D9eWMavTM62n98FMqyRg9oxUP3TXf32UjMM",
  "key2": "5zy1NHoFi6rcmevJSHQvxmw3tbefW3YsYzvcE53R5vPWHP6Z5ioN7GXsWGiqBMpXPZh7CeBW9PHyHmpqYxzyco8z",
  "key3": "2cEyXFKofTcxT4hAAzmqKGTMUF5CfHU8N7wKW7cCfcNrpisviBRhLKp1ifYMZwwwLJXUuEbL6WZCDvveid8sLgxB",
  "key4": "65AFLwdi7tzJm4z4X9GH5paHAeq7ghFrWcPU4UcNf2MJjnnWg6fiTWjnWm5sLwGJZgyhdNvBhRqw511mMjFKxj3R",
  "key5": "4MQBSxcyGm3MNSJLn5r46orQog4ezg9E5st2RmTed1bw3B5ydBnisncdYbFhXAzVMeTfVCjk8EhcjkzgUYZQYodp",
  "key6": "3vEvqJC2AdSsxd2yyzAfHBMU8QPUggBkzZcrSV44SKzuXg6Pc9tHWtBULmgFgmWCgDR5dqHwfSnMBXTkkzZvpHfZ",
  "key7": "25fueHiSEnT4f6DtyRynWxYF4xi38jrFdDw4RQHSRMDhRTNLG9ddD9xJW9BKkta7eHMiS3vN3PnnCpa6qHJZj1d9",
  "key8": "4GSfN8agyAoeL1YRxPEsnDczNw5PuFuCLr8QmE4643jnorCfbKGoa7vdzYdpYitj6PAsdaoMNzKM1xvvU5i9vDtn",
  "key9": "3FVRG4qnYNbPzvq1DLKXEQw8tDkV5etwKKnpFSKz9XAdBXQKhTYeWUjcVRksSRbkFBHzJCMyBpycVu4f33731xM7",
  "key10": "5e66mbWia3H6jG7YdoScAhPXdvVdnQqTNwoYc6JbpP8Hp7kMTw9jxPYy7upLDp2qJicu77kFuDstvq5ueDKqA1jw",
  "key11": "46XBb8eitQHWL9zbq21KboHg6AjPfoqLcn5XWCx21m2TVysmkRBjWBda8Zx97q3XGngqym7SUVFN4EwkbgKSRk8f",
  "key12": "2V9CkhbHaEMq6FuwhyYvTE1McWi7Gnx4xUQwpfVTz7iv7DWbbimz6Bo2B8zuaBHvh1NeoLjQKMTXm65NNPL4hP53",
  "key13": "5oMEydRxyAQ1Bj7wUZdA1FriWVu6K9SU4uqweEmqoM32ZdT1s4x4LDAUS1xXASvcaU2Jzi2wWxCkRCDq7nXTtCWu",
  "key14": "3W4wAKkF3zGifCr2CC2e85EH8LruazKVZE62d4f3ccQjUWNyzvVymPpgkGvphRdHuFkqw4Gvr6rYLdBv58598Nq1",
  "key15": "4ExaCqBfH6HjSbpxQsAXLf3jbac5YRW8AffPV3BbKf6s7bqoogmU9bfBiUqH92FhFHKWPCrGozBmxui1E7XXjs21",
  "key16": "5fszd5bodgFNML558aJRcjGXQJmXP9gQDxMoLYEgnaJ2bwt2Pxoa4Y2NjLnq2ye2pFqjHk37wbpt5Txbo8gAk9Dy",
  "key17": "3mT1nwF5oJhHhiKqyYAcCzR2APvXLHyBYsfDcPgWndhCNS1tSFqHL67YddSRfeXS95WcJmnzLqvAxnzVsG1gKCbn",
  "key18": "3SdLbQjZoL4FWcfjZduf2kuYRNcesu4jEi65Cs9yD9F7XLmpwskhDFp5jdf9kHmGx1VX4USnkqA7ehseEGb4wxpp",
  "key19": "4C4t9qM6FzphPArvKVdTnz5tuucv8bKUXtr3uQBzo9tiEWWT41BQHzaRWTEKSDnwkZZxYQRZ4j54vHmSwuqWEZs7",
  "key20": "3ZALcJC2awUvxdfymCEdm5Ao8Y71PHsEhbvmeX78b59U3KBoYC9gu4r634c19ydfxSdMVgTaBTZ5wk1pbYUjzwxU",
  "key21": "2ZyGVSr1fZgtzrEC9NbK9cD59nbtdvpA1dAy9tTrHP8DCXbnHa74cV68xoMzPF48esA7xdZsER9CzP81G21s9NJM",
  "key22": "3b581Np6dti63kSFDeuhQ7Q39NkvM1WfUBQVZB4u6EaGbXC9a4as21an8qW7MNrwBGvLMKJtg81c3qtBpxob2wJW",
  "key23": "4tfKxtvN6V44dp1EQJSz3cAzHeYaXCyVqFoJZn4JwQc7XhQ6KyNLXfJVELrymzSzu3S55DKghE3QrTt51i9uuYtH",
  "key24": "4idrQoiqhmqDBW2FELahfnZo3fRU7NLDB1o7udzXKKGK348CXUCE2whontJVjC7XD4HLnqWvBqL8ApYsthTot9Sg",
  "key25": "HJhQLqGFJYt1SH5EhVfiPCxtbRhLgMH1Pvdc68oCuG3RH5RSZ5vMDoUUVyfitbSTBnXWRJD8TEkwhvyAzhckC7y",
  "key26": "3k1PQw4gdEduTjDEUCenq6jSuPXo6QZCfCL1bTMUP3xW1L5C7yHemhMuMNSowCgGEQtvzo3nWpmrjACtRbNeuGQ9",
  "key27": "VXbGAeQQCJMuhmnGLy3BZmBc5N4GugsjAhcUrXFBjo8U6GV13H4zqMqAAAMjo31kRLU1hMBzepv5Dka6at6mhsD",
  "key28": "4BozkvHjsB4Z51VjGepCC8sNpNT6sSZShEzqPCAJvmP9ToYPHQLJBiZaZ1Lvfvrfn7sdPqAvhCWVwRT1ZW9hUkPX",
  "key29": "5aTdUtQ3kMS4wTAGrQYz6RMTtBG8wFhqdk1GiTZRhB7SjQp4AE3z7kYsi8rk71yqjwEdS7v5cghNpQF6qKADJzV6",
  "key30": "VJqDtBxQAu9Bw1Cbn6nJ6AypocbRfbHfgrGfcW9bWbizJCndrZrMSgyFNaxq3ZxWg27HVTYWS8qwKxyKdS6WjC1",
  "key31": "2EpN6uMcWtXzVohCuo8eWH4npqSKeNNQYrPTJoUMnRxr4gGqtmsmSvpdKS9z7UzefEZCDfgcZWGpE4LTGSTYxL6h",
  "key32": "2RK5DvKyLysHWicEycDgoM9RMLzTWUn8KLgy8ByVHhoEuXgVvZ7U3u6XztAF7h3Aci3WjcGFbReLySswQpasAHRT",
  "key33": "3A8dQvbVKE71BrLjUxiuUnjvnbEh9DuEjQpGhMrg8Rf3YgrfLRC5mHdGY8SyCS1LhxNeMT5xYxU9h8YHrhwPLQUY",
  "key34": "bDBcTzXBMcAvEWCSqfw6CCtJ8he2WSNiw4MRDKP5o1iMSNdHpcs3gXbESdCEquZUhp7Xtj6vTW4mtuU7NBw2fPf",
  "key35": "5G5EZuH7BbaaDGSvPo3Fzy24g7ATKo4xedEadtodFmYFNN4t2tS1FTHfcEoJ5EuNMod5b9auJxamPMF6Q9sLHUFJ",
  "key36": "3r7Ns8cgaAYk9Rb3AnFxfV49m2PETmNnphrQT38RTG3tX25V13Ej3za38P8YiTXDJZZYGeL4pvr6Hrw5zx8a8FLc",
  "key37": "3wGP9EBMdzvKJnxX9VYoVotz76UFVSpjXHB9ABsFFb6AaVgKoie4cjYGwP3Euor9sSzg4majdtH6DtVmtsVEnBZ",
  "key38": "eJFfqndcLdw7jbVm8UENtGTqie3zyskqn48RHqSfEPGbr5cyYbo6iHsZCss2FJVZWBPN3ADLQUWs1Uv5acimjPT",
  "key39": "5DMQPPbFWSvfSdtJrBWd5aiyKqSRLfJdwuVH9oQY3V8iALgWYpZ8mX5uHsbqfjK5zWsUKkMzW6CVngJRsSR4gc6a",
  "key40": "4VNowbgCtTixroRrmgJ4FUv9mpMvXdNgD15a9uhM93sTJMtooGdgRGDxt7WkrtQYsfbQAFB48qFJSdK6Z5CSPc6d",
  "key41": "22Y9VdDmVS2sp4qo8Uqzp3MDE9BLDJZ8NgtM6n45dewS6W1w4dWb5ExzyiMzBWapNb1k9zeJDQwuSHKpwFxwfrVN",
  "key42": "5EpDDoRyvYgjW8EpBN5cgvvsrdEJJJQVJQM7sVQhESR7FxpsWrdE7rXwTpXc1RCJBR1hNemqwpJBJ2MNrSkFimeP",
  "key43": "4wiHC2vtz3222nTSey6ig8tYeypAqUVGdi2JjoNrdmFWL5PHVxbTvKbbdXjX576iSr5tB2Ud2rq6dsWiaaeQDVuM",
  "key44": "GaeH8QxEWs6uDkyy6Z9UENJnRWAtb7GkQxkuQyo6TUFg7CsYKy1Vzzn5wm9GSK8PZZX1V6wtcERuBCtp68Txu5J",
  "key45": "2jkxgS4Bt8PPyXuwF3awztDbusM394MdhJph9ACFKrhee6pBDKeMStAHF5D8E34zPgWKPs217byxrxvd97upy31H",
  "key46": "3mfP6yY5Qt8AuEMkFSVRHeWfD8aXgaxbuaFduBvApqbZoJrpVDwZmMvDt7qYNAxdcxK4soyNtTmBxFCmbf46q29K",
  "key47": "5gCJHNhY8GC27cZqczooBFR3gtMR3muDYmNRmGMaFSETr31TYpxjUi5v39heiCC9bEbWzWfwZ9Rf5KUBy61BoGEw",
  "key48": "479oVS6v7q42epxXwqG9qGBBb27ckZqwpkbJMXTQ2GjG2yR1uN9k6eqeypdDmnfgHaHxdwpf6JXM6KeiMYc9JvYV"
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
