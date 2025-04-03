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
    "2rTGP1Kn3ipsnef2G7dKXc2UVB42GfKYaq2X8U5GkRdkrLNbJgZeYp51mcRSRZ9NXUBPTkNWJ9PL4GSrQqgXykQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZ5mwrYMNt7v8uyNwXXASg5ahCHkdKYwYFfxwvo8xjfstieGBVWksBhG3SsdXzQJUy6GtMdARHShJsxeWLiMdF3",
  "key1": "3Bzs2ExFA4s3dwmfdj6kvNYFFk5SP4hs34c9Vi3zvv87ti3uE1bJsHCFj33rxyrXv54tUAf7DACJsT6QsqcxJ969",
  "key2": "5kyYS67JpmQjSsyhKL56YfL5UbVZwMAqE3b8RVmoAcNbcrqU5nWUULqJ9x59umw3AEUiVwaEzxGNUWuRYxcJieKS",
  "key3": "5aiaxR4ywDCWapEKx3aWeG4L2qVvtwCQWrzKyGWcYEjR2JD28LFoPWkfhshGZGDarZe2PG1UkaTHR3TAzZyH1qtb",
  "key4": "2d8SdYou4Gd49thGCjU5EyioR6zCZAkn3zrpKn7SpjPBZj5fNczALgJN4xxLCdWfioJRBoTtRp5cEaxAjKKkQdzm",
  "key5": "5uLj8cMLxX7L2WkeirsqrNaPUVpMcwcKiC5KwXgHoq67V2v3ruzxT8ukb9aUcQt2ZjsXHYUBrWrNrYQKXqY9hZga",
  "key6": "bxL5HZNeCHYevgmcxPEWPWZBbpNk83GFD7mea2sksUjLtzhPxxGGVFMrT5tY9ASHFrGogkMKN38Bvfcf8qC9Zw7",
  "key7": "35LhuSHH7qs57XxTcsRhR82gLaNFHchDPmZNeDbaV1W5Lwo462VWR8iPiLLUfk4neajrUo2LcG4veRqvXrVmusE5",
  "key8": "5kEwnaKaCfo1stkLZfYtTbcmZxf1xc3snGhgAU6JqhKiWXqhcMZPrw3wpogFQXGeQTBKRjLZ97BTuV7WzysQXjxL",
  "key9": "3ZrHc9YKspWadW3fgqwNxBtGFkYtmEm3LN9fiS5Bd71urBjn5uRXXSxSZgSBvz1k7nFxfK1qfpDaztC3HueDMSgF",
  "key10": "59EPNbkSBttyrpzNsGzGmQckzkmw6PPiS9R7jFdFxAVBiLnKYJVBuUDKSdacudq96tbU2jAiJy38XeuM31wVcrxG",
  "key11": "3JFPBfVifj1NPugs4YvkUXTWZdK47j6BnuCG8qPV2iWqwhgYKba1HUg6XQzHdyoQwQsUwLEeaTcSa9HxQvBLMHk5",
  "key12": "dfXSLyphsffbJg7PZV2Qha5LUStp7mzwPyassJj4myQmPHoFiMCn5M8Sm7fbwawgecunXRiKw9pR3s7AnHmgZNY",
  "key13": "5jrP6s9Tn8KUk5TXMJJfHLLgDvKTGY8bVatC9SnuVsA2omkhC3Hiuk9dv4PHm1V1R62Rqr1XBEoZsV1zampBSquA",
  "key14": "5j4zkMGjMhqfWrddmV9zFrGCgovwMxxtjnvjsxXpximpH44vFGdmAJ9zBv8VzwYUBumoCp3FCTLxyRCn2KMDxdZ2",
  "key15": "2iaYoV5JpdKQFZkBFkauXaGPVC64xLncmdtFsMRmZrc2AjrKkwwEbZ2cjuVv9Y66ikdhhWqSyWVxuu6AknQ24fXQ",
  "key16": "45isi4iPt1yhFZQ2k7niLa1sfzsRfQfVFUcC49EVkfwFdiPEqUBZYp2x1uNorzYz19uAFhTttyp4cHVGkhFKZqZm",
  "key17": "CYHve7b1Z8PQgfYHKEvGgytLVcSRFn75isT5T1972A1TxWBh5Y4cHcuNwpHpE9BBfA4jAdzucyGvfzWKuNyvtQg",
  "key18": "4nacUSPmK7GiCh9jAdSSr94Zqi5ui3KRfVsDNvRyBhbqfetNTYEUJjLrE7LaBkYjTGgSDDneJyPhz4Z4X7mVECjP",
  "key19": "223PiVBUEx5M1jfJKPGGVnupNm1b6orFEfNqEWxa9rRgTahKSpxjUy9kqhjbqoM8eBNNgZnpHwUFSSMC2mnHLcH8",
  "key20": "cLja1WncMaigBU7abgcbyDGLSJuH6MxouReoCsHtqqCtj7tojvj16WZKDPUCZAFgnUZT8zN3VqGga8D6hW47LvE",
  "key21": "4J2FZciYSuf26yPUmVM1xgPTj2U3Yq9T1ToAy9tCu1PafdKySGCNBkU4ArbRhuCQasRBQmrEbZTiAvxQGWsEVdJZ",
  "key22": "4A4wtBnjmqifSNMxGRc3eLTDxL9HfDMppk7jRnXddyFxRP1s59aY9G4yfJTSsZPhuRhTdKRM9QbxbDCKz1ku6JXu",
  "key23": "2nuuNQs8mzBo7gXEbBKypH1jXtS2pnByCBS1zEq9iFjADSnAuAKC5rwxNp3mcgVSaAo5RZV5ttGJqVdqLaMTaVrE",
  "key24": "24P7cqBqmAMm1W5ZGfmY1KnM12cE9ZDfutYqTtN3d2RJ4h8JSP4PCS5KyhdhTddjzYMES1arQUGw5ABZsqB8MFyg",
  "key25": "5CwHk9p4kfRJgxKNBKBJUBQc2MZmFwsnjXpc5LXoQfFczZiqFC3Wvg2UWT8XLPPy6sHmuAAF31J7djJRBxNPmEz4",
  "key26": "2N9N8vWt3KdkkNRb37eSuo4X6chVLL8sYQWGn4XfX2Uwn2pWq9Dg4Z4YmZqqZV3g7C2Xgm3hhrSE4co97g9ha2Gk",
  "key27": "4i7a7hTkQQxHFtgNC92CJ37jEtHAgfCZRZC2uKMCyiArVoLHzSpnYp8gLUaJsWwmP1ynupbffsLUYp4mFg23N1Y4",
  "key28": "5xp5bZLPnkg3cYKdqMvmQNnrUjtWrYB5ZjGSVSmzLm1z1B18XkqiEiKy6ScGtTmf3oAstbFggPZiuHEAAge5gMwq",
  "key29": "52PkDcyK2bAuW25aLjyqss3JCyVF3riMQHNPgqkq8nGCMPfm7oXf5BbdeHewpcDmruzDWhL9Hy45Vi3vDvx5n9jT",
  "key30": "5BEM9bfADCNbC492qC6w1Dp9jWa95L9u8YuNJ24xYvLYHy61a5dEXLqMgMGZceLqJBKucJXnp7pRmhgSCp1cxiCV"
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
