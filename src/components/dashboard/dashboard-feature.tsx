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
    "3tVoJM8fqNu7kU3oWZyWfyh7SJcGZmdhp5XVLidsQmGDq2q76XTawHXYEpoaKpWbDeDZBbywU74UmDZf6iV6nune"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bpKaZiCjXSBjLAJmqaVRHiVErnn5moASc2yUok5yWGS7i7PGwkwWHApkbDhyY7AhZUK72hzaNUbASdV8Zv1VBaA",
  "key1": "2t29QisZmipdFAtmBMJQKbosDhmZey9XAg97udA35PwGC2P4A1rFLsfBgNF4xaVarxy4cMyKvJff43CRB1pNkDQ6",
  "key2": "339y1M4eef5m8ChsM262GcrHJvku43zcJ92ZiNkY5Y4gYQNe8BE8hrPUKS62rbV9Jmq4urej8H2nr1XvsEXb61S5",
  "key3": "5fcg7U6JGHPUST9dDAAKkSX3yrKkr3edS93w2BkXUuHTercFgSvfXm3971dUXchRpxaAyEVvAFFBKkzUEyz2kX6j",
  "key4": "2GuGYFhm3GVHU7AR6UCSXPMJ6e1XuBuP84NEjBm8hzevkdMkbgdvpwhKStpiUjBDoEjrMRuQ6uEQvGBbk5gbySvh",
  "key5": "5ymai784z4DsxP78cqLz7cGizzKAJ6SAtvmTnBVf1KyEG2UfejznvLToH2TKg653vXQD25KiuEuQqBhnkUFknQFG",
  "key6": "xgXC4pVithhhMGz5LkMu4Tvtu54Vvcn9czt3wt7QpioUwSqmgT9K1mwpDR26owKB8zHRTRQiUfFYjSaVFp7xzKq",
  "key7": "3NpYcaBnPyDoEPjGjzAeWmTq9SjUhgtqTwRDXv4FopUxmnuru9MHTgv8w55TjRqXBVTuAcG6Cmc1YoXXpD1oz8Bv",
  "key8": "5yFE1JVWGvKpgLiNkfhNNAt31CJ4v9jsz8zYYQ6uYVMUif5ghNaZggLjgXxceEaRQPeV3i2qs3cpEQhA2TSHbTSv",
  "key9": "3eyMVNVwHAm9X2pUkDuTZZReHCtpv8i4zCiFaqB9kgDmygjfPVxDhcCZJ6jtXFgf3BXyWKQbY3fDBC1SbDR5fpn6",
  "key10": "5baRwEjxKrhibBnaEhH9FqFFsMNcno47g3FdHoB399oU47z9XebFvPBCU2sav9HyCmeKNuqzVaFeE3E53nsCX2UQ",
  "key11": "5gGLiEaBXDz88xRAAkZCnpBeHnGbQBKnsnWvgojvvZWHsTvVTyoCEBKH68GeCbGWAK7X51oyqpet93oxVVTXbNxY",
  "key12": "5pFiV9gaLvJ5NfnWNi57SUcNFdKzMgqRa3JfjbtUMwZJ8JJsscW78hu9FPkgmYBTGuDW1CPXFtbmoukwW6SBsRvs",
  "key13": "4fkEuPWm6uQGbF9rnE5XocRQk9DWevV23McnWAGtDeGPYf6HjNQQ4f13KDPJdpGkaLnDyczz5oauAjVKEEhhbH2B",
  "key14": "K8q6BDWoG3bUxo9Ran7HetxP15duLB6b9Rtz8CKJTkkcsL2wFBG2SYnUyayVm3HDJh6xu19vyFmcunSWs9kqNVd",
  "key15": "5voQuF9zEiWgjjBeBEYLokQmsWkLvEWSZNqJU8GMWzZAvNVu6gnhdXTsbPbbF2LMiUFoQxabSTJe2UD26BxUS2FQ",
  "key16": "5Fdu3u8SiHqBoFUZ6xSi7zmox47H2KTtYdRBNR1RqYCWohRy8iNPXb4dushUEofF1Hyzo7rg9mwL1r2gmKRKPe4k",
  "key17": "3joT9UAseS8h1hWuBHa7RH3pzkf5ADJnyBtqL61HygZgUxbkNowL7hQp18bC265rCLeW6Yn8jPdjA495hcU9sn6o",
  "key18": "N39HQFBF3gyqRZN6PJJMTpLEzL7LX87kdKzB1AFGF6MK66bZwtyBowou9vYD9xhxSXWwjkoDBoamBqTrhcSYd53",
  "key19": "KHMLEFs6pcBCXQdkvuK4jZJ9EzqoZ4oDwrWGcWLZ8FahxSeJJ3ULKAYmmwwX1K7qgGVFqwxrzcQDH4ESu4qV1gY",
  "key20": "3jWouXuQnoi5gRWf93VDtz7Q8Gu4owtpokngo2nmRfuz74FwZRNPLsXWcnpgevUs1m4mgXWFwyvTvUobgB986iXL",
  "key21": "3dYXcNEcKQEDQUSzZr8WevbREJoEXWxFdWCd7nNuUuuHbjS74abrAjHZGHTvdsgxPAUWJB46o4BFKyTjjb7Qq1Uw",
  "key22": "46DcUhPhmgrPwVzDqriAxxhXsuWdfob23qg6jLu7qap66gGpGRb5mdFc6bCwFYzpobBQS6QehQ431iiKjmEzKAyF",
  "key23": "4SokfC1ZbNyPDCBRcAT3MwXq5C3C5bLztGzF584JoMjGECPwg278HCcM2AnWdLtxeJ2KCvx5EohcuhURWbktanid",
  "key24": "5FPBx2XtbKJ3kto7MuY27HdekNyoQ89VtGGH3zcr64cCACfVbbCY5BUQ7x1SjwhiZmJq4tKiGr8PQznd94aG9gnh",
  "key25": "4rqLdsnpQpRw1BaupQMGbdUxWquQn1DqcaHd8MdzeDDzcqoFfkBwUTrvUmFuSqHwu2hn56LNJgKezM1B1R3yibMc",
  "key26": "CCuHKmezRbK7eLK2cSJimB54NRzp4ZdUxYyCisPtDcZCcG6tG4X5U41De8iSLSpzHn3AgGhCnVqnKqS1xkZMtHf",
  "key27": "2BzUKtAo4iAV4DLVXkxM8SCbab9o9rmkmvLsEWWyssYfBFVNWR4F4mM4Gc5QLyWadknUAc4BbaX3d6cYPoXtG71N",
  "key28": "41CLLcHCmzfyA3Z5tGnu3ruxga4TF6JvdZNbeuxYFR7MxYwWVA3sbzoUpSn1RoAYmsvTHXo6fEwzCxi54531qnaz",
  "key29": "3xBXY3ojt51Wwocb8JBvVmzLAfFLBJNU34UvxRXtxJBrwPWXzvZRyEyvUerJP1Xpd4tgugvzv1aQazhDDe6BhbxD",
  "key30": "55s1TZBnjjHQJmrqW5ZuYwcbmE9ECw37fB2iuzNH3kgwxb1hHDQCCWyotv1eRp7d3UMMoYjwyqmqaMo6FkDBQhUB",
  "key31": "3wmUUqv8hc1Dj8tkuTBCAVbyEgjroEftDX8Hz4YYf7SMKvx8phEuNSgxDiuSNqytxbCeBPLqF3pXReUYJ4Jr52mb",
  "key32": "3y8sZCuzbKFR2WdpWCiGwr39MeDCGKwNroqtR4eC3ZRFPtGkQ2VG2YZeV24amkfwAVyDTjmEXvuxDmSxSpxoXsjh",
  "key33": "5GFHecd8rzLaspYPiM8Y4ySJu5Nmee4Mw2rAtLqPAfHfGFFeGk6Wtyhm9B8iumDkLXMfPkPPcHVfGAe8w2FGJTBB",
  "key34": "4gTrQyW6zryuMqJkszQWUasoGd9WTjgp8hzk183Xqb82kQjVNWpBYgRbiKdPNYes9uEiNHJcTMjL3knE8xXhQbrr",
  "key35": "48vgydk2fhQV1VX9xszYdUVx6yZ5wxJRnALF6312KL2Dfvdp7AbJ5Bro9VCyBNRFwrQvac5efeSLToUwyDw3HR8N",
  "key36": "2S6mUFx5FYmjoJK1Y2dD8N983NFHT7XRne6va5gBCjehPJWopdiddnqF1o6P1tHDoaPNWySmg6UENvJNptirap4f",
  "key37": "635kNaVCr72Q64Xshx4V9rHKh5nF9nneBBrrwJxE8yKat5nbJSimtCoqrceZBpTq7QTssGq5DtL28LwtB3aTEF4Y",
  "key38": "fA46aoEoLsALvwo8Dj5kCTTuW1Wt3hUU1xsfeJp2p8dguX4Jjw6gARRq7mSjWbSViw3M4mjXjT58m3QRKTjX8F5"
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
