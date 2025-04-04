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
    "5BENXgULxumMa4ZXA1v5vQ9vBM6XR7KpZdBnpf9u4h5mTjP3UZcREADZCkjaBSF9ZvJfYvp7t2U8rGaSZECPpUzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C3MdrVaEUiRSnoPemxHctdVRwH95jDJ7T9bckmkheJM7KN9qzksbYC4jg3ZMqnKKJqa4g6G8aV6ZWtDUFimycsp",
  "key1": "4TBKXyTGNhwRGWzHodkHThJi3P2fz9XqMXDcUaNbRT2Fbx51AwEjZeikEtcNP4drGxC68bZKcmvyhL4174KgVRwD",
  "key2": "1sCS2cgPx2FHaoh1zqAjYN19i8s54LFpGSF7gCvEufTgcjwzraM71YuWQHM3BX3UbJqzSGUGE76j1okrdKufRwF",
  "key3": "4CnkpPqU6ZwUEzRjJFvBcBoz98NFteLKFxLVQXnmgk4CZzNS7gXPKxmCFcAdcN8GCit1z8BnnaLQFv3QABt2dDZY",
  "key4": "idRiF8AuPAGTUkSw8kBoW754VZhv5jGi9FU9W7F3bLirHyUW5EqfNDxc8DbAb6dY7YesWwNJ6RUMXPTxEbNk56k",
  "key5": "4aRyJp9MiYqbHqaXAGt76C9c7ussMRELHJ2vXGAgtxTmtLnTTsafQ4LBvAKKaPpb69fbXTx6TUhzazoS8LU1VXNN",
  "key6": "5Sepq6eA22R51gNSjAhyY7ZzHSTdaPgWvqPNNEoiqxcEi373tEX7f1AawCibyu1UodT22T1uNr8RVQHYBrEZQ9kw",
  "key7": "3kSTRboGrusMXyUW65civkz79RdvvL1tkcpUULD7xTpGBxEDMkMN3R9DnMxtKXkhJ6iXUks1tSGUcuQ9P9A52zcZ",
  "key8": "3RVm1GpcDJFNhtzPYF8Cerfej6kezGirVJeW7QwRQudRnwrGjfGnzgT8mP8f5f4ATWCm4T9Vh4H8KkrfgXT2sQUR",
  "key9": "E8zKb22ZzGXapCN2EW43RLWw5dBw7odR7kZcDGbAD8y2c1oQfvuqzVED1saBo8eWnCvTztC8xNqTJMEXVMvMGqD",
  "key10": "61a9yfjzAvRyFVQeU1GZg8fEPMJDKLKhuQRR9K62xFJWU3g6Jk3WVxJazmdsgT9xy5kaMqjbTGZMLTbh6qifNmoz",
  "key11": "yY6LDtVP3WNp69sZbXEhyfWgqdeWjjBGoDcTyZs3Av2Dy6iwvFNbarHUy6GQv28dCpBbMB489jvugaUkGe9gAtM",
  "key12": "4zynecEYzQ93GMxxdEYtfeoaSgxNt8HqWSqQZ7nfnr61vwtn8w8rcXVu2K22JCFKwWaqSZnSWMmTY5wde5hb6NkF",
  "key13": "5SJYqR1CgH8o5cEjbWMkCWKTwRoStDHXxedR9JeDRkURfcANhdPWyKrC3jJ26jTpi921BTeuwMYJtndF6jYD75QZ",
  "key14": "2eXi8fkrabVwTcz5FcCGiTVDNdFiEBb3ea7U7gS5cCtgfAk2UdHrFJ6s6BG9Mu8K5ZBmYiS5rLpYTDaJd7gQwZp6",
  "key15": "3RDZe15xssjfya3GAMmWSbWvKbGgbDRfeyKnFEJS6cTFGKzPwacC2RhrEmFDGnd7WUnQ1LUoTTYZFQsZUddVV8rX",
  "key16": "2RSYTiUWQavwuv2MMfCs8ztkNXNfiDJMgr7RTow1kyvawiz5FEFEnRaS6UhNRS2bU4S7vz27sgsBsYb4K1ubTang",
  "key17": "5t8R5BrWjpsuwjRYQUYV8iFfZGLgEgQ8tMVEAp6wF4BXwLqLBFESDt8mDKSd9A2RUDF5QtmzqpAFEj9ad9kFwfn8",
  "key18": "5k2jW7twzkA1YuiRb9tgSg51oqErmVgeqnqL6MRLXSDeb9oFMvuFPoRqDgFMrz9JJWEK7BAL98b4yHPhhm6DroNS",
  "key19": "5hK1Qaq7YKjwtsR1htzyuBgT2izd5jJmUqUQPRK5jwLoYtsfyGyQ84dn4oWJbet8wsHKqzpSuCfTqBuH7kBkM3zL",
  "key20": "536McPa6K7qanQivdXcAvEo6wqZ5HE2Raqf9hSrcG9hTx37zpiWGyvY5LaVumZRzQyCcPmffSHnK12sLSEqvt7uS",
  "key21": "3qBiMWPbsBJKMXQKwU6rat9KFqYDkkPVQEf48ewAdThuxcQqeC41d7orn6UjfQKD47X79ZNf2WhB6J9BQWF7Tvi",
  "key22": "2C8GPwEaNMZdhz7sKy6csPtQHhR7zVwkJtH95E5dFkJ3Juaqs9FPcVDodGhPDcPJ1qrYY8dVTT74gF7C6xPJ5KE",
  "key23": "4b3V797GEUSCJqVLyRFQXAxJs1Q4gZrsxfWhAbFino4aCb7cBNhWz8i9EznFP3WXyjN3y1DAjpsTYnnwD1sGkvfo",
  "key24": "ViCmvrkXB6HeqP8fbcYvgyVSU7BCrbPKBVB1a2LewUGRmRYG7H5xGyxF3WKj6Xn4zVd1pr8PBjGvBaJuDLPFXuE",
  "key25": "uoXrkAzCeb1dxsgVyvbTfATEPyeKkMDXgsgmnFU2SPC4vdqGpRQhvsEzquwEYVbqHCAyMSXd75dCkeXXNZfm5cs",
  "key26": "2WyvaHxdWHycw4Ycd332LxYTCtCd5RB4B4juHTdAgZ8dH7Ua87r6kg7ksZJTg9zBK7zMyejb6ENZ2xWYcZw1UXE3",
  "key27": "MLqK9t8MkUT1HG48GydSUYkHXJ4gKZxBj6Ym9qq2gSvFsA19Ve2ERW5M9Sa8721Vw3yyP2S7tUjFMNjXRg3ACjn",
  "key28": "5xpwpdpniVDrtyyTXE6uXcHcrwdqXqKZX51teik2PxTkd48MFFXZdNs7hgrZRE6kWst7Rf2Wn4CJFEcqo1xdgFq5",
  "key29": "SD1dgzzn8TgxEW83K1t85qFh17KTqXiR29HGge4LUjcLEa3EL5hE25qBRjA4s7Bwn54CFnNUmf19iMy8kgJWpPk",
  "key30": "2eoa5gDFbrcJsUTnKrhCbxbNEu9toWjwxpvrNsyUzyt1yc34yJ4DZWDi5i4wRVfDXbwAU7N3jSxrvcdybgVD5hgK",
  "key31": "3qdqjb8xfkWHYrS1nGaLTUc4hPcsnK3PdFZkSgSZxKs2jNgY3JZxkeXevUZMa9zX5t3kbKeGfjYkRppdxmJ7tjLH",
  "key32": "EpoFwS3e5f1aGpwt3JPKtucvfZpixiaKa5fRGahDqo4d9ASyqJh1CKN9NLzbzweU9KuFA3G6FboTve9aDm2XSjf",
  "key33": "5UT4RhJGnBFYZJULUBSP8Q13RwLXTyJ7HfnePXD6L4znRvK43KKrxduYecMnnSGoBKJ27Cp82dynUjR4gGVmBHmz",
  "key34": "5gXMGdTJhKXnXTW2rCJyKp24GMZ1U6cwTXuZxYHCwHNWyWBxeBMyy9tNzGoJiRzv9U9PP3WbGfQygT62hDCNDgVM",
  "key35": "3JkG8hCxfp7ZbdbjgmWRD18y3h1qr4wpcGZsZgK5emJwphUtexyXE7eHFD1fWT54DjzjNRCyWuoJAhKRLbvuadyZ",
  "key36": "5DnaBmXV7Fd3VC5crSweWbcoKQpjfM8i5wvMHcC42fv1D6e4CeVnrHLvjVJDcpapEiFELp8TErkCbRABXYGhwVXs",
  "key37": "3yDWqw84sXaj6No6ADyyxy2qvZJaixTBUT9P7CSVkxQ3jAL4hV6Gbre6tuJ555JSNvWAmxg3ZXxecGDZr3u7ovvB",
  "key38": "4unKEa9umoAGKFhTkrrZVku27hDhnkCBeu18masLKNRo3unU9qFray1CXtCm3dwEMsPmnrHhaRMVTZpC9y15UYY5",
  "key39": "3Umhdzy5BdRcgUVmNDiY6th2SJPsDkXhGdn7w7hW86iFjMA8nAuSME5AXKjSij5EcP8VzmsY6RtB8cbdXEsLgHSs",
  "key40": "3BeNsb9Z4TzDy8VoXcGtDRdcLcYLaAsgPahh72WdWdy9SFBFya7aK5MpKVkrQGeMVR5R6M3yvJWwsAQn15tKYRPR",
  "key41": "Y76XL8xW2h1NuoQ3pN7vqnXs2kY3ViXi9EXXZWNDgwKXNChusETJ8q3CV6ZxANZ1mAWtPeQoZHPJXN4wTYgL8Vc",
  "key42": "3o4o1svLkWfWPWSbEBnQ38qehqSujk3V8rNtY15oK7QrGAKwUiLRc26V3EHm6TSWjzid4mqqSrk4HsZ749kKttBd",
  "key43": "5PbMtfv2qnrmUE6SRw2LnHKkSCx9e3gDnyRyYimTYXf5RE82gHPfTnTdRsxN7bGaN858Udmyd4e4SuuVRJozowQc",
  "key44": "4LCBaFvK4EVj3RP3Yco3gigqHtDVQ5CSjSAqCQ1D8qaQEPF1PjpjSdimHiVHgznNEwsDvyU31fb9x18xoxTDG5u",
  "key45": "8HWfP9Rm1wfm9sujx3EgbpSosaW1iXzbQMjnAad7ayAzGrfref73wcMGQ1FXyvUuV5iSvAxbsy3jt6CXEGXcXj4",
  "key46": "2tf4232VZjUkto1PGtoGnYGxNn1FNnQUfRwrCrqB5HphWysDiThqTsz2DarkrPWVo6dJqXNVsiV3NA5hM9GkSVTq",
  "key47": "3WHFoZY13HPXyqh1szN49PXUPuFaDpWYkHwoG8DYCKTPW1U59bA7FRoE8Sp6vTbKoJZvYYiBn9LhZ8dnuxxxMRqq",
  "key48": "4sJRDmAWPxEqkArJqeL4fhXZKzMpQXemWiu21vZi4dhLxd61ptsgMb6f5jBWyEiQ7b87ckc9aAypxioruZ9vgAem"
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
