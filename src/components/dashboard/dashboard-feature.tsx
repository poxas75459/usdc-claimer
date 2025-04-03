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
    "553MbrkNC3mbAqorPmcqZ88RvypdP1xcrHCvtFatrM6GzktCSx9HnY29cxbyzeyBmxofComyMbY5sLKfWbKwncuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwFB2BRrMFSHq5XGKTZzKR42t5ZBmbwXwahFcvqhU7ubMe9XN9x2d8Emz3DkyZjBBvuZ2CdybcSku7oCzVwFo5P",
  "key1": "5xATxhhhazgd4rhtxddua3MPstTznjSuvpL3TA7G7z5xSyLSeRt3CwSUeJWJcRyggxKuA4Ywr8DMZaxxAex6QcLE",
  "key2": "U2MoCFXi8vTqEdm8zMVwT69qRZcrS56kGiDtbcCWuf9ga5GrY7cBJHD312UyhcphJLqHqCoBmMypmVejtZbYKXG",
  "key3": "35dugGEUxRmQXzHCoFJXLHUNM9UaZBFi2VsS6bNuVcBAXHP8GwSgZe1cWvFUXdnatKSQkkgNMBbJTDNm4FbwNXxK",
  "key4": "53rfiEdKmYDsCTzuWyAUbstPNw1K7tAHxdegv39MvsYsYm7iLcQ3XaGZqqNB6Sa9WUXGjd8e58tuYr8yvL1nHMqk",
  "key5": "2yd1Hmr8rL7EHSzPWZuZaRSbLKb6hpapuoUWPUzjKdc3monoFjsdfnnzjWfAsLRcqHRa9FYFQpo2RmM58HQwXbTt",
  "key6": "2zvXfZcjaQ9xfRX5oKwS17dA5SgqfFtgXYNftcNa66Y1nG2sxV51vf9ZknNqP6mBjhpBAaX5maq8kYTzVPoJqX3r",
  "key7": "4RLMSWgXDJUSTgx6tvJJCTwTwdrdVL1vXehAeVGvfmB2eV6ih7EiTJbEBn4ZuieaK7YUkdtSZyxDZN1pnohhwQkg",
  "key8": "4gBe719Q6MbLLqe8BgG4VJqKftmZ6RAQh4KRhsoq9w9yxhRWLnpiCwrbKgJo2g2DtaHjiuHmCHeZ3hsZ5GdM9SmB",
  "key9": "41qx7K6iR8co4omiMTNVeAr4zC79iFiaDX4Z7bJSqHKbi7rKyd67xUNyH6MR6S6aJUH41yFygQujFyZKRmWUwUtv",
  "key10": "4hQwV8qgyMyHPQEoCUM9YDjetpNKxDN1wcNy3mtrRGx2smAzCwdKxSpGqPj8XZY8xSduKf4jvEei7DTJKRtWpNsC",
  "key11": "4T8h8Xtc8GBXoFJtC4VVoDr1C7VTg55KfEEMRH35S26axKXRsAL61A9XMU2ZFXfTzRmGk6X3PyFGzmJFe3kx9RNn",
  "key12": "4LUBJ1FH1RfY1MeSkJwRHgdxVXwsef3rAUogDLAzxs3cJvjtaaMMeC9YASgvuhcGJmmmzuVYHyZ5ard97EGrnXWi",
  "key13": "2kjPcsQUqNmR33LoF8k8h5WqkRUjLS2wfygjcSqbeu6a43Eb7iSAN8sFDv3Y5qdBji77fw63TvkQVzBapKBcUQjq",
  "key14": "22pYQmoPdo5VfCR1cV8pCyuhEVZfc1AGBV1G6NFcBFPFFVbt9hu9DsBDm1RAEoB8tRdEwwaSu86x9JoAuL5Ua1Tn",
  "key15": "2iDmCBYB4VqcavGqFujPpAZEWUf8SH1E6VQXgerMhSQnwhRpkSFCeDPonBv5r5F5xggWaVgQpHPNRbQiSfLDUvzp",
  "key16": "5MhcSRwy362wg9dbn4TUuPsEcQiV1qJiDeqfHVYP4mKd4V9MMft7LVRseSgdFLeYsxHSAmAUe2qRQnBXgYtAHWHZ",
  "key17": "55Q85XRRip31YPkUqPyWsvUzcDLcdZJYhuyq4SLL4sBagF1rhYTrAPzrRzUiuUPDke258dseJygcF99xRhZ7aLxD",
  "key18": "zHeikM8HKxwKSHDd1GoVjAqRusrBedDkR23oRWyV9ErMghHyyVwmetvzbbRAc4obGmHYPM9jgnkLFoTP8kb8Bjy",
  "key19": "2fQgL5NyuvAWx5iS3YErFDpGFMQQvXUeEdJZFqj4A5p8EeQzSoxqg3RLnmVYepga2dLDC3h5cVEQ99prnEMvRqQp",
  "key20": "H9n6CgaFJhdF95gqCYMj5XBDPrYregeso1KVAkDqXWrt6cNSfcPvx55hHJ7VfZtDe5HaDHpdohdQTQB3fgMrVdQ",
  "key21": "45sWovJQLvznNUrJEyQDX7B9rnhJsB9rCWyrUzmRg6BEwkWYS9m21jMYWZmJN3KZYtz9G7nv3t2BeQ15W5jB1rFX",
  "key22": "3ASf9Jg5Ne7sLA6yXvYwCUZPF88HAnf5WcPdfy9DgEGe4rCqsRUr8ZfuXSaQka36h29ZUT6BVJRKKyoJ2LepFp82",
  "key23": "2JTd96KzVcNhV5ntTVwJzohJGzjqS3BCYSZvxBTQ9558bcDKmQ1RVwWHqVuRrFx8QEcyRNGjkRfrWhpfNkUZ3AjY",
  "key24": "5JoK3nmD9a6KAzNpnEqGqKovCiF3YTxxoUeY5mnZiEeyzjvc5JzTJ9Lyv1eZq8KxNrRPwhDE3BRHn48EnCnRafDz",
  "key25": "3Yj5w56ziSbTLH2mFqiMoj21j8mBdWuovJJjEJeetLyJ1CCq6YzZPwrY2bEFjCXQ35Pd6cai2ZYqC6n8cmx5Ud3",
  "key26": "4QKkzJszsZyroWrXegGmMo5LTDdPkubQpBigHGYnicT2ssB9boXaNUr1bZxbhgV4B9gRqFYbfc9pkownW7V53rhk",
  "key27": "jjQWBjWbA4HZxvc9uyWF4vZsgUqb3NLGBXGgG1D9mHYh4mNdHscH3r64yUG8mzk6Pn5p4iYUaaaWJRksHTMfZya",
  "key28": "567nQDaH76Bdd3KSj5CwTPcHfGfLYv8gjY3URPHB3WuqJ6vdVhrgq4tPEa6yb3cfKefkRGG5oFjFxFjnmhALrn75",
  "key29": "4i9KbXoou1aTkNDR8NhQYXcyTNxbaGMGh7YwzcYZXvtBwhgrWffWJWqpYrAHKtxKgzCVGPSE7gkrkpjokaQDgRj7",
  "key30": "5AmLnQMw5Xvf73tU5eKkcLhHGrWMRCWavbHydeyRD9cNwrbfkR13TYzDuVwpnikjtZUxbHoUJNSpwgyS8KWe3HLx",
  "key31": "5QMq6Dm1qbLAnauyuHHVvmtarCEtasDn7HXVt7JELdUzr96CjKNf7GgeMFaWuMVc8pMDaM5nY6JZa317cnUViVe7",
  "key32": "3W56BbZEbcThkoxraacKmC8cEMre8EYbQifgRS3TwTTqBPYLRpQrmFR8esWtGxB8f2sA83bRDf2D3quNTQHJemrD",
  "key33": "255ETC2e4vf18ynk32jJ5QmHFc1Hc4MCjKS9ueTTSFykKbma5xdKrAASsdUtsH9rJy8EamQTTKxysth2Tg5dqLcp",
  "key34": "2xxDbGnwjWLXDrrhmvPWdmZZrw6fe4g4qdCF539oc2U8BiuV3wzoHJovBMJ6KYtdiU8YUPPboxBdmQnf9ZzvHYvq",
  "key35": "2sYofeGRCkmUTeMZ3xPb97HxqATVfpw9S12XkLjR2bhhZDMcCQV7n7vJxxyxaCpz6qkueqx8Mt5dfvgpmFX2kLMH",
  "key36": "4SdBzjDH9Vadh4mFGBx4Hk8brEJ4dLkubXVo8KodzH7a48CEgwEd8w4AWSzDZRDdyL356pZtXB6zA1qq1xdhfksf",
  "key37": "37vMnfLKFRx6oUVnXV69nMasGABfxnKoPo75ZzA1mwoUzR1xJsHi96ADomtf9WMUwYNMvcCggLdZhnUaxrozphjX",
  "key38": "5G4GRokCzfdk3v9t7diKFimXekjPWkwNu6kWhWcSiAhdB2jaLaUsYVBx2JSvdRYvNRrMKh31QkBtdpfhn3N3pogz",
  "key39": "58zEnWTHKtcRrGzL9Cf4jqPQzVFuj6mNUgYnqAykTjeT99qGjue7A6RynPVsUb5Cq9k1XyzZvuGdY3cA4TVk42Hh",
  "key40": "34rTPQq9JnZSWvrzHVhQfUTPGQi2uZwzSRkaJhSi6HaQ5ikEEEKZKvkvLzzJSWj4nuSs854Z3nDkK1XaUeTQsYna",
  "key41": "5XWEaNkPj9BX4o7ji73Hib77FgPD29C1LEPTuszDHZv7THdqFUc4VAzvmeiHmrS4oTChM6BALeiVKyh4gVgK9yB1",
  "key42": "26h6ELSznNZ3rie4vSFokvdk8Vttpt1jrjJSZLkyQezSVQXF2P8Pj6r4L6vSsPLKtLXZgKmqF5HCHiVmZGAfFFMV",
  "key43": "4pJB8x5xvEaLJsY6wZ9Qc47DCGHbG4jPsBvSiDCpAYub6jhrcdLWx2cEaBuPmJxFgewWCew7acFK8sC66AxuzGoi",
  "key44": "C5BH6xJx67vQjxrufswS5HbmNMXnBJbGng6AtStz37biQjKQgNwbp8ZEJwhTUVbi4umXvybLDxEvoV1mCGJp7Tz",
  "key45": "3PMTFLchFQtHVZfxzE4G1CoX9D5F7PT4PRtAi4RbvTraKKs441n1ze35p1vGdh3PgFrdAoxYRZbtPy6oCBjwGDmF"
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
