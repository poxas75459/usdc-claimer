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
    "2DkeQq7YqGeToaLipPe6QRFyZRepAfDSX5eM3iB2ovAr6wSKVxiatTAKDXoU6nGgcZ83hYGwtn6QgrdR7JuBRnJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iSuLdYtybdVVp5dCoMj8txS1ok1MMX9JhkMF5BURCU9qXu5y9RYM3f922Ng2R73LGhTHVR2Lun5CjJbxG2ZsRWs",
  "key1": "3AJBMs47Et1RVgnH1h5GQLWQtxg1HuoUHb2UvVcFkpPeWa7sLdLagQUXK1aDW4jmMCQLA2H6fYSAgMJBoCnEvEVD",
  "key2": "26nvKJg7UdWAnP2E9qEsUaj1gDCytPQRXo9di7yjzVwMKjEhxT51QSXgXLB1SB6uCvHVKtjCxPcZqeqNGDStU4bC",
  "key3": "22uYMUefSNwA45UStf5B1L1ozq7XXygjTf2S4pdWZD7qrfEDaJtLbogJSg3TxCzXs6JYkVxNdX5VqVieHKT4BmHk",
  "key4": "5LaE8wdRpjbo9H8G1cDUNw525FfNptGJ9mSwNnNYmAywChVvYE8iDm8ZnsgG658GToMu8Znxg9gSARUZGy3pYpbM",
  "key5": "5Vcdhif7rMfe9uDXcBwmBd9XKCjFzoLHYtuPEfQTFriRxCLbT5ynDzhWXcSB27cKmHeJjPAzFr8h2pV7N6BnDYN4",
  "key6": "3xN5RuSee1CJWu4iBxhZ6MG2JLgDfGrYfan7KvWLULoJ58YUD1iDeU3fVvF5yfS29MT95SM8LZGVeGTBW7jbKWB",
  "key7": "3YuqMafuRt1LSSczSMKum9sdbc1oN6GLPbNGB4JxK5T6XSTG3fiSHu8oAYoH4bnMKx19Aa5ncj8fnW5exvM3TDo9",
  "key8": "52zpH6GrAPqd2wXkmYyfxv2yyxSrGjgE7XNBsS3eNX3nQy4L5dfEyUhDaotZYsX6aNXFZyGUoAbR8bpjaduzRZJa",
  "key9": "3iyEB2kyQ7oPCS1oXbGLY3iJGgwXvtzK6pf8pqp2zM6dr2YCssDWw65KQoJf6b21mjWzZc4ojA6zqUK1pWqH79tS",
  "key10": "2YHvE9MxSpXiyYrkf4henjq2Batkvb5tpTs1wCZMADiyRsuFYinui1kByK9xaqB8uDFpLzHWDP8APAtugTvKTV5y",
  "key11": "5eUHG2rvzvzs1NCszKeW3LBmWMRSewx19BQ7RbFaJXvpUVjCrTKiMWTkUyyRkaXETxPDtk2FGY2RHQri5ZGdNm2d",
  "key12": "5KaaAvn6Q8gDyeJHU98X5yQvyDWMi6krbxqi7kdoT8fCKoRSakYfuqWkGxcJq6RvSha6t6dEDgsbPcYztaeEFwnj",
  "key13": "5kTSojKfXCCs4m1f491umThyTnq4PBgFC9y4fV3z3S3psmrAAeapURbhCVgpVVnDTTkiK51KZeF4xtWSWFwpF8uu",
  "key14": "24fchqQEJqTKYJsCvxB3asxWMeX1MbmbqsedaUMf8o9eDoDMNkatVoDMnYaprn9Q3pSfQ7HUk6ESBnaTfc9EptkX",
  "key15": "msbtknnqfsFBn3JqT9vjRnut1cM2dbhy8BEZYcB8phrYqdYimz7cRrm9e46AfHBSFbX14Japuwht9rc9fpbTFhr",
  "key16": "4feENPPMiNwLqH4o65Lk17Ndg9kGvG9s6UWhVC9WSG2W5pYCTy1Jm1k17tJxs8AwSHBEBfabPxtiVgpELzzN3Nzx",
  "key17": "4dyJecPwTQ3CGwb4GHTNmoJoGEZXTkENK7NcT45FKTf1zCzH2qU27qkxuLAzXtC56e8JtEY2Xr2WQ2G2qsX2iMPP",
  "key18": "4RJyWEL4pYJ7ju7DTF5T4Tyipgob4rv9yjnqby22pCuU9eWYy5FBsvPAM25rFGqQwQuzJg3xtFPVTBtaA8B9SH41",
  "key19": "2fSeXqX2Bdb9G97udaCqJ9Y1e7NZ89J8eRwsqxaKfGdnfK8cwkReqV2AHBS5nsKmxxo2Jo4seSiu3eYK8SCW3aCN",
  "key20": "AsuPntrRj8FRfqAZqCWEQk2KfT6nTR1Q8YWpxQbKCPRywxuiVdY7hVRvVgTCfNPKmuQR6eVtMCqmSzmQp976wQx",
  "key21": "5NBEBJrkrsaj1siybACQGtkx7WTq9PXkKBCzSHvxcb2eQB3D7fA59rp7gGBdKmYTZWxZHVwNyEGCfAdhBMk54YkM",
  "key22": "27x1XU5CPdqR2m3GEzQtUgne1QXjuiTCqz56EMfrp3opED33x1gbyWtJizcmaniPtQQsyr6qgVqmLVRnQtKq5J1M",
  "key23": "5QK2B8na33vx9zquaFmU1JjVV3zXxff5FH9hiCeyVztDhttna8XrQyuujWPe9jkpQmLwiGMnJCYS3d5QHhXNf8BW",
  "key24": "ch6VLWjqMNXay9D5igaiUsC1WBYeqhsumV78ajrrvkp8reucutE5HfLPPoKypTngkxPezqLs8MHnTHMFNSDeKZR",
  "key25": "2od3XwRvztK47FzMoYMwg6xXWP6ccZCAVskQeFPkTrY2gTEuCKPpWfmQtmkCpKUYFpX7s6cz9qv5Ww7NdtBxEmez",
  "key26": "2oQYkZGbZHW2a2H7jTYtWUT8Bpz2dJim7tiqiqo9qzjJoy2dmgG8WiM3R83XeBQErpeP8GoTtmeSnKW3R2cdhV6y",
  "key27": "2mSJtXAAmxskGPmpEs1JdxzN7Dv7wbB4JD6XiabFze7CK79NDxhJm1ngqF1CXFKU7mjqFA7T23u7RpP4gJaMpUyo",
  "key28": "2s82C9N3Ux7yULZA4vqFpCA27JFXy8QtvhfzGgMT4tsZvsUL23tuKqC4v3TQTMVX8Xwr3qM7e5X2gSR96EVCiSJx",
  "key29": "Rd1pvYUqnbJh2AD91CjcEAgAppxsXJwwdDJWC16Mxqx7AiTXwhnnbcbXbCwxL82p27KPkVLfJ6LEtxfdELoDd27"
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
