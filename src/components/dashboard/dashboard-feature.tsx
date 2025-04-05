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
    "4b3oLFfhEfajGee54afyJBzD9TZoFBgkFehDqbkoR27DN45v452zTQX9MWSvRkVmdR5JqmJZPShTdobPkci17sY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nTrYpiWh3Pv5hdaLb6v1EsiHYEzsp1WrSXanZNASgqcJ3NHCLGHJ5J3ib27LHEUyAv9nmqTgXNTnTRHZfzZzZv2",
  "key1": "f2mHbfTqHbHrtnsvmRLtur2z6Z18nzefEaRVft4Gh5tDaXeXKU5uVRbmgpLBEZCJnEge36VBUMCGroag7jHJNRj",
  "key2": "QFrauxA37UMA2EggVpPvMQLV2FhCeXNxUwD2Jhc6QfEFsRg55XYRTaTbbZHGBQyLP27hCJHC9e2CKDG6apcQgxj",
  "key3": "123P7tAW24pWtbaJYc2NLz6whN17cwysPVvCZ7qHpU2GtKiqYTiQ1eSa9MmAjV1eEXfM5S6H7gZcvPe67LSBesnR",
  "key4": "56HDStXEGgoBMpjq8denPoVFSW5FajMj9S4xsUiukCDmpLdjwW13bmErTcdWYuCU7BYsGaSW96GpSRm1hjxKi2mY",
  "key5": "24kcMQMfMxhQ6Rfphk5kHNWHiWyrHm5mYb4ixNMLYaLXq2SNPYCGX82pWX4R9tFRqTXify7cHyPTALVKfUYjhZ9d",
  "key6": "32ZfnUyyGLcZRhZTFSv91iWgMyyG4supBxvLsesQbvfZ2cdfjHkHxKCKwMt7W7jUGCvZYEytVmkaQSztsGnLiEEt",
  "key7": "5H2jh2SyDXyUjiy9YYq3nDCGbJFT7gJ2QPx4pizRdMu1pNsb3gA9W51t7bwwscGTkwpWBtn8qPL84zaV7itKfpzM",
  "key8": "4bKUJLb7YbpxBKFiuqXBzmERzr3rttzguSQP45U96Zd4BhqNukLgXrNegdJny9jP2CU3B2ADFJNoD7jFwmowwsLr",
  "key9": "4mVWyXpveUtcHUHJzcF6o4rvewhV2P4iTh63Jsp7L7Vi2g8kWzHxZ8Lcpfazheg4BykDutAuP45YkcjkGe497Fbm",
  "key10": "fMQZdTPdEtY53vmG7gkPhMpx3N9uTLs69Qf3CzL6cHk6F2soj2xfgMUgq2e4jhuLfggMcBb3NifzPUjQFNuRqqq",
  "key11": "4oahzAFgiktZiX73z2Zc1C41UWc16gVACcByNazNqPYXQyzUVhtXdVatURE3dLttB4Wg6zKpYK1wY3mLwkhzd3oy",
  "key12": "2vPEAewZZVp7sSEeqmv7Ze5sfR35rUHAEgkmPT9kR1FjWj2wkoPK2aBqMnrGcsxMsZA5wUnvwDhZo46rD32L73g5",
  "key13": "36kqhy7TSxLaRE8dQDFmKjShn9oLe1V6bWWB4SxzqohNhdHRsmXTkNo3pMhQvo338FfGhNexpRfJAJ6HGLg9Nc36",
  "key14": "3ecKL48eAKqnzLQXEXNtaSv1r5c3pE9iUFumke8UhsmVvsRqtbHgwwkEBbkk2uCjXYNfV9PRdAe8pV6V5xHnuyrf",
  "key15": "5YPjHKGfBayuZbKcgqVUtMedjripMNRXbobC2b2pZ4oGBJG6edgt6tY8B3VG61Q81kh7tYkGgsESzrYSs4bWYFJf",
  "key16": "3BnNZXGdhcaPXjEcz9vQcaSeqpwm9FctLbNV1cdm5WM15FWiJ8Zm7e4pCBBPPJPfHi3bfGYa9u8hgvNpX4hB6pci",
  "key17": "4MhdHRgVUsDeySDhihfXEkdPSCk3e2NwLSKeNTkNZtPXw9bbFhmABffABkws2zohLaFFiwhRUYjSFVnHqKCHRZvB",
  "key18": "4TPEutYSPsBYwB1GBQb5kfy2ZosnQBs2itBuAH7JjLqepo8TdiDRUo6BBkDMNJ76t3oNt73gW2RwkzNvKF99wh7C",
  "key19": "5fH6Vm7QeTGVgqTjC2BbyF2avWUAqXpv5V9Ufja8ArucaYRfbZgJC395u5hH1D9SmwF3qyYGm9U6Rm2DZbGpVbee",
  "key20": "355a9ffgi8e4yA7UqehUeTbRNp9PHpn7TZnmixwGeYxthzZzWzBdgWdyupxayynA5ftu87dymN16W9ZLxh1h1zXz",
  "key21": "3xDEdXwSNv6uTFkQkCSkfVnE2yXmjUci1itGTLCDfLUBmnkhCT2oM3q7uDYkFug5GJFJEH8tNJcv2DniCyxMSgx6",
  "key22": "2Xoe6oAGAak8NYXzjNmwzkNoBAyhDi5u3GJXzfsofmj8PBu6A7Kukm6D6kh3TrQMGtBdGtRX26ERQaccY8KMr9FB",
  "key23": "34nUoyG1jjF3d2gJsAX2CeSD9p2KdKdz9xyBmsCAbotWR12JVB2vC2Wv4dMzGWZWCrSXtjsX7ue8jfwsgKsrWwYw",
  "key24": "3wRg8gCxtB2hTG1EZ3EtS3HComWhpmVr77gchnuwvupxhZNaCN7Jzg7FJ5ooXWcxYHnn6wJA3PkJNuf6EbegD5Na",
  "key25": "f2e1ZKaQy4FQ8Ji8wf4KHDLYJEPpWmFEuvSfs3aFYvLxqqjvuR1j8tZLeWgQGPPrdWLzD8b8LLCS2S4fkVbong9",
  "key26": "3c9W3LcBWjgRh5Sk57DogdSFzUfFnBWKTAbafRLiRDDjQMFhHf8wE9CoVxNTHiwQy36BdxUzYt6WxW3hfpDDd5ib"
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
