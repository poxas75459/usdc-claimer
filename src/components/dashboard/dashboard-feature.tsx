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
    "5LH9dWsJWggN421ECPD7PkikUFYVqb6nH7x9zh9iyahHwHCtU5ARnVxUzAyiehPSFvTYTYdoNmXKTrnhzdTNcnqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzYr21WnKmr3BAWSbyx5WLGHJd4p4j5mx9t7ZwPf3i4AZwy3gUgEgX8i8bKZPpRb1TThzpgJnGbdNSV7kcLxZmC",
  "key1": "qbyxtVRm7UdbyWqYw4Z7fJt4fUicUhtH5vPDeodPddZPzkunPwNCCJtmmoxgUMYhWFrEqzxCt6wz8MySwcGLtBD",
  "key2": "mqHMSCykZVbYchniJLBYDoWE3cCuNzV361RtCDH5PAzqr3msZqiMmjcGofKaR9e4M8j4qeqB9RczXsUvF2cNV4e",
  "key3": "2V7LEPXoG15Yo7mdHgKriHatXM2KQuYC47x1JnJLVBYsgRFmr1VeL2aKtxtkMu6f2gx7efh39s52YtZyKttgTxTN",
  "key4": "2Fkree73jt8TqtT5R54ByqiUMS2R9aYXnpUhF7RYwVhsFXzzWJ6DqPcXNNyBRDCyGo2zv1k5E6UzNEWg5PA1tWmH",
  "key5": "3YHRtBipvuCW2FhSZToiuxjsJ2DnEb8QiuGRSsYKdXAHwUM3Ad7GHrszapy1nNV4yYX9MtJSjCitURgCF23PyNSB",
  "key6": "3e7K1rmcj7wfvaDjiHEYHycwEk61MiUquz4MkBaBvD7pYfgfNa8tx22SJsMLDuN5XWCctFscVE8dmdXJ86UZKbyz",
  "key7": "4yDTUitstSoK1hEojottQfvkF97YV3xnm5caJaWir7Q47ZKxycRr7qCcVRtjZ15W4joT3mzcHRqub2hE33xcNEFY",
  "key8": "5udHgcfjs58AMNGtjVAqB3vp5D3da4REYo1EzwsvLeAnY6bWf78MDo6oWQVcU6K6hkwXn94Ywq4wmtx2sfd5pMBN",
  "key9": "4m9QPT7fqw949j8apLXCMMZKWPmU8GZWwuwQ1GoC5QCNbCMsU5gJrP9yqiDSrzvVdBDWQhQKNFhRJp57AMUaa8KF",
  "key10": "hrnBuSnuAfysPuJPXqKnjhh1WG8Tc7uJW6nGnS6gfVijqu3a1RTi5CC1ishoMdxJkr5wou3mzWsEUzVWTrP8pt9",
  "key11": "27QhdWyyB7G7twUuEmTCiAEppd9Erhp3Nq1r5v3p8exgHjNa6eVGJiH3cJkGGNxHqkK6KyA5uHNtFZw83ZTmpAKV",
  "key12": "5zFfRrzEpQNCZ9fPV9KNfkgyR136WvZHpzQ16AP4pR8PZ3J75mTrQximgxj9t91mT8VodTa7Byka5bEwGKGyg2R4",
  "key13": "29roMi6GdQyi2w4xZHxB49S6oQXWKoZpfaHHH76Pdt7WYToS2KfLKXN152VboNEcKMrGjTZFdwodMKatxRAgD1np",
  "key14": "5rFfDfto4qwu93h5noRJDNVTwoEihHaaUxLJzjfWkoRAg37tCLV5XhwotLwDfGkjvmPeN8BKWucN65h3zBywNb8M",
  "key15": "59DJpL8daRwSb35MnR8ToKUeJNcS3JKqYYTvwYMafUSx3owi9cixqnVCLpYDm2JfNuUWMfHWnxEyjw3W6MRsvai3",
  "key16": "6VAo6zii5fYLaXqDnWJ8FXiZ8EV3HEWcwCUaP9zKTx7kysiKmjxPSqmQ45FTAmtfZETmvVLadzjgUpvHKN4K8ci",
  "key17": "yuJ1SVxm21KxEP9NpdDNUtgHjVvsWenhn1eyPyqhYFVd9e7rEP1LjuGEmytPtLJqwgymevbik5ZKUGTBohZKCFm",
  "key18": "v9ssZipHtX2J6Fdwgjf2pegxmf5UEkAFCp7N5yvEyPfnyYN165r445pPjfqRWWNtgwe16EgCfAP9RavzJcwbyUC",
  "key19": "aVU3MoQWcoPd4vAFy5XMj1jwocX7qGoNTVqAiJQsUJCPYAoHh3DfgAuuxFaxmAjwDf3CY4k1EnybbxBawDxj2DG",
  "key20": "2Q6nHcZvgQQWF2aaWv7GfPf7DRnLYZf2aYkyz4hzkR4V63u2ZmpwnedGMjnrsxD6NY2nxJgttExe8XqcJ9pdvfTB",
  "key21": "5vQTiXaPM5HxuwYFnexZLkghjnQ6S4Ynxrv4uT1GpL2BcGgZyNi2dwA8GCXjHA8PFHsDzqu7535BoAz5MBVM1PMR",
  "key22": "3dMWKjyweW6sn3JnQmXokJjg125CvAPdNKB9Jpij89Bo5GJLXhgE5Lf6zDPyppigersATm6nWfoSQH2Gk3xea3XN",
  "key23": "5bockNNd6ado4BT1Grd5ijx6Nrgup7YNxZ7K3YMZ44KWAJcXPYhSGVdHLaQE3TQGxDXKj9UbzxWYb8LYP4KL5UBw",
  "key24": "33pCt4YtEq43TboVwHTGGJUhjrkWW1nY44rt19PJHnxUw6azvjLHmECsgPTK9jA2WEDmBbwSAaNJnnkMoqqU9op5",
  "key25": "3e9oNMJrJq9jRAyHoRkdozmGPWTRYnfGumNQmoAUV3HdzKuDvE3XfnifxEAcWHJ6wV6Uu99ZzPQdXkAnRDFxbuMS",
  "key26": "2nLJcHNFQiBsTpq7XGgJsSULWHmvSoGRYJyr2CsPizZMa284Ld3oPFwNTubHGREXWZZxC5rft13Jqw1rZAaX9Fbw",
  "key27": "2Zzpc9EHiRy4WtinyYgW5UkLsuzNQQp8hkRyrFNKJMWxdFzEJhbZsAzyAux1dkePyc51EcR4joWLC2A3t8nHZuJn",
  "key28": "66YW3cLSGCLX2YqBUZwE5wv7rpobRpsBwX8aMRuYdoq5hShxAL7CAdTJ5DfnWUqsspSWEAT3wvjX8kz77CzhVpqp",
  "key29": "aKyi5SPgzsy8PNZeqFtV1LYDtU96EaBXHRFFqApuFLp7B2kSNhJvGtrRnoPxAMnaEnVayHEpTzaAXmo93ekAY3P",
  "key30": "45tJVhyqbYF4Aqckpn979G8DhYpFBPVZWkUxKVeojz22Siib5xQoT3ZL6QmviyeK8Una2ixq3Hb42wEk6MyXQ9oJ"
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
