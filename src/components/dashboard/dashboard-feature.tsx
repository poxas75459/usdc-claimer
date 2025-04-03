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
    "5CfE3qoapy5TSCProkjR6EJq6SQDYmek2vaRfk94JNZiYiFG8RzScQ37PNTG37L4GUvzvMoCSTFHVTXomims6eWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NE7X4kwebnZhLcAF9MD8q32qvD5brc525zjTtWDFAFGwHEs1somRD1LKwY8w65eGwcuRT9E4uZR7CjMw5SCsuD3",
  "key1": "4wDC2FYaDHbuNLEpUBEQgZ3qqFReJ3nYjyygbZZvnc6QxCr9r7fzs2Vb4spEkDVtbxm4Tt6979WurWs8nUud7S1d",
  "key2": "4JzigmJjQQbwZvADUuyJtviCbrL5J9ZWSJAAy3eFti3y5wWp7KsqiHAbkfQoGZb8sF8aS9jCiYqZCzPsnYXiUM1d",
  "key3": "2ga73ZHu1kC7ArCuhEVVP9WdZnv5DVhF3iv1Q25TYuYFimpNjgc2VKc34w5N5DZiMKvJL1Dbbs3ZqAZ2vGAWv7K5",
  "key4": "2Ffv8uERrtgv1P4mzbzgxzTzx5VpxRLo7jMM9j3ZQHX1eQ28i1Au3Q5BdxMHkXTgSp6vLkDgFMewjSmyUEWT4Yck",
  "key5": "3WsnXtTeeiu6sREAv8YzFV7PNjHpxGmnfbjRgJ9UhN4YPhUwuhDgXvg8tAj1sXSqHw2Cdim4sN18aJSizMgnvGHu",
  "key6": "2T6WNwqRKBnp6G3y2HF56tRrRdMzxeQ1dD2u7N58eHx8rhwpkgpZ4w61S6QdA7ZgTgcLmXCR3ACvSxGdmUKC49PR",
  "key7": "3uqcnAqvhWm1GcbsbwxSgVT4AuHk349pb4Hz17CMrtWnWwhKv184tM5ioiEdZKNLqt7uQM4tGp9cJimhS2nwc3DN",
  "key8": "3peTAJs5naZVL4GqpN9ukHM42RD6shr1wgVYmor3ci7pUggTi8w5k5zz2hU2wyjm7syPGzBFSKeE3oryzN6jKauF",
  "key9": "2ezM1uUiXb7ZNoiiRL6ks2NzxF1tFrSsf1zsjf8UEkXmWSnoTEXt6FmSdBELdpFYXzjiEB7CurFkD7y5CG3ei18k",
  "key10": "2fFRHgetH8N9xVfkfxuNWPGHZTRtPqGkLS1H6dK7NUeGYErAQLnKS98fLF2zBWY9obPmejyQEchRWM8wtJxiDiNZ",
  "key11": "FRBwEUzmP8xZ9h3TS5FDxTTc3U45kQQUXp9HzcR3Rg7FYmxh2qa8t99wGtPj4abEE6rqaKzXwSbbzhQuSKkt5TL",
  "key12": "5ZG3GD4UtgVUtbmidYWSLQghsyqYKMrKgu7fF4cebEVsY6ZH7jymkoP7faFM3xKCFkvSqdjhBwQjW1UbaTE8VJdS",
  "key13": "3MEFjWrtnXjTGEh4ocq1qgJ3Sc8B9CkDj5D6U7ZWfc6XSP7hAMhqTQkcMcva3oXkzCi2JdDUMokK91KUyKW1B44T",
  "key14": "2YGWomr99ghy2oJscbuZ1jQ7mfQxocSsxkUJhpvGFSSp5cSHTPqyTcxFmLDPZptxmKGywbjAnSJ1vN23opTfeZXT",
  "key15": "5UZpBQ5E6NaBTJaF2kD6BE8sWoCn6JQ6cJWfZm81qe6hHcNdtf1DBH7N1WtYRXSLtgos68TYNe5r5YQ9pEgg8bK6",
  "key16": "3ZbWNtM11UQkRqSPzhHoaS17Zk1S2HLMFMhew56mwZATmr1DpgHy1MrLTpJ4gJGvxyNxH5cfwvfT1J4WVFnWHVvs",
  "key17": "r2oT4LWMmYniowjJtKBhn7Q9x8zTRFMRGcdZndx3L8xkjA7HWQE34tWQP95vnw8QzNyY8j4AkfRjX7fz4JsprQq",
  "key18": "2A6gbeMDUnpeQdVKjPVQSWbVxmjUzkXhctiXvknTD4NaGwqG1XtmvCb2VD2BBYBhArQrEFAgU5zkqirceYTMUk6X",
  "key19": "4qqNMQY1iCtHbUo8JvEEnUjGX6AKE8YDaNq2H6jCSnkikh9CRo14Pdx9u1LBafW5PMw91bRbm3eUxZTeNiqJ9j1f",
  "key20": "2F4QWzKjAYwRb4KstB8WD5tfE9gjDwwXCDXnAYjZVpNv4wUrcSu3BE5C4suMhNd8wMJeQpmnTj6yxpGQD5kAe7hJ",
  "key21": "2Y264wYTS28EW66FsCDLSdU9awauWhsXwSQsKutF9W1qgC4uJMWUxmxG8XjKdzGU1GbsxvGA2unzMvda9LaaUd3",
  "key22": "56yMdidvcXP1DqKrkU5dHX6BWgS2ucmn3WVQxkBZZt9K1U8niRZnjAf6KmikxRtvYVZGQvNdHF6iRo9EpWQ4mDqr",
  "key23": "5GFGUZ2ChPYYHGPE68DsftoZRmjuZ2GYDfw4SbfL8f6ok2rR4dLWamjCdDkVLUV7Ppwi43LSRodJWJ8dJZA6fU6R",
  "key24": "2PanFKjx53zpCDmPwUKiDK4zYuGwWeSYXCT3UZjcckJReE2LPb6k7hGmskYxFXEuzUQ3es8D3S1zCCbn3WXFQXjB",
  "key25": "3ncatj1XNpiRYdfFYoyFRV2MeZJZ9rAbe9MrgvTJn9eiFqZdSX7c5thW364nPz5x5HcYi5c28JByu1yYEfwXNeUf",
  "key26": "3TjWWBaEzLDi2dMigh3U8KLLH8y1uS3B2pJJU9gLC95xzwGVmt9SzaUPcNf42uz9bNQgR9GUzYeCu65Ur1XiAJ4g",
  "key27": "hj2z1m2fYkRgtynHq5y4oZMiPzHBTqczNhM1egwawgyyuFQsKSMjYQogbp7YtsRA9X75WdAfUFXXhMfNYfZUGMS",
  "key28": "wzrT1rmQTByjijcfSorYoZgs661n9HZxpDkkj7h9U8LoGirNvoDsD8SAV5TWZBcufZaMkzi7gvGGfKjLnEb47Vi",
  "key29": "4UHyRodDte7NrPos1tXvyiaYE3W1UAAmJD5bLQaY8vpJ5Bov17tUddNiBjbRQPtQ8wkN53FLhNuboqbUkKWUpdnU",
  "key30": "3rHoF86ok4VE9BJTz4aDc19f4toMx4CTsWURDFxccMDzfcKvFDSpyf2c8gzEbfwahVAbYCbbU3wm4tMh8t5W7P5i"
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
