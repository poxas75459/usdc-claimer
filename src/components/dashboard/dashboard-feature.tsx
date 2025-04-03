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
    "5Dy3HxyaCKLAvoR8iWScMwPS1DADAA7uMKEeiygGzLAi4fAQ8KgrP9rtoDg4Cx3q1ATupLSKLAL1dAkpc6Tscs7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoddyWTjoK1bkstRQGuvCTVZmbZwgfYoZg3rRzWxwWby6KcKqqbbN4mUfCAo5HCSFSnNLS1CQMWtCdgWCBW45r9",
  "key1": "5Xgbbujf5tmtkvnX8r2ckbHfGf6ocXbvXed1TVzHwRLFHhesLYbRGBC4JGa3JpNNZNqsWx1iP5e8e5k7SwZidJ1g",
  "key2": "PjZJC9oqxPyMZrkUxLJ4boRvJQ2D3XPkeArdF9ozXgNXbxTVXV7ojNoNX4C8QoPDrBJ2fQZUZfdAQintgosUFiF",
  "key3": "37Krz4cSYLiYG7iVPPgDFXpGC1fTEHxa1gLWdoJ3TXEuQAr3ZKGbf94qmjU7G4KCwipfngo7SUzz7cd9hroDgGa6",
  "key4": "33ywHFNFmXqxLokeRGXBjoFL5u7KeVbmdzS7UXSx6zHZMymN4HzZAquJX8gveyhtiHwMovSUC3w2AP8GQcPuT5VY",
  "key5": "F7rsPPhu6H2NPoPs5mrKjjcVxwzNKxMTaib5RxFJFt1z6iKbkbPyNkU4Gu8WYGRC4BkSUwh2CX2Wn5PzjmekquP",
  "key6": "273pHeh8CcgF5znDD4xQL3kjEtiD4vR5uarD8KkbF6n4Nap3qRZWifSsNKxySNg38fYyFQ9PdhHWxxxv2fbC2G9r",
  "key7": "3h1ywXZphZg2N66YFwjDwt8L1r1jQdaN5udL79Ms6nzTP5GFd7oUejaV8J1mYqcdgUK4putHnxW4SifVdFAZ7EvP",
  "key8": "3vSrcJy768m4Ad6Yg5Lyftkz42nhTYpzEwrMx1NjjJAGa9RyuV2rfDkZTnG9siqMycpng32AcV2Zj7YsgbjdDw4w",
  "key9": "QRorhPuavdW65nz8y1TgQf7UdQGLN35G3k6CsSEEUv7cqkLdih5wG9Xjad7NuYNmvoAbpg96UTD86GMFGtkREPs",
  "key10": "3zMUR9Uze9Xc4xdgKbRzBFyNgaJNSozFxXAzRTMt2bfteFh43BqnDCGv182HErFNkY5FpE65LM2QfMHnpiaAC3fZ",
  "key11": "33XzYzXKEo7EwzrgRQsv27xUKSkuumwiQ1hXxi1Rv84TMZg6cYWZcLmUpRzim1r3YHGsiVmBNiV2TFyGDnvuNXbN",
  "key12": "5qMfoCiKCY93JT23dPEJdeS6rkuNtKKcgAPviFEULbUgvHAM36dm6DLunzmQvnsEKUzhu4S3nPUsyGSbgkrpdo7k",
  "key13": "4VuHthXA4f5EA55PVbiduvioP68hnTUFENHX71iaqqvqsUWxT5Uv2PXQS6qsFv2vERPEzMtmoTHtPjHBKWC6U9FD",
  "key14": "5jeKa38xhyihNBwMftfoEcFnvpKsLZYYoXi3aank92HUWpYykayjkPT25LGpDpqCMivNee2s8REWVBV2LmUreYhH",
  "key15": "3PwXV65owGqjTe2bmtE6TGfjrGtVENmo4ZpD8GcTVewQLKn2jU7X66hqhysQuwfiFnbBG3gvr21K2f6SDYHv3mBv",
  "key16": "3D8o7HSGkoU5JWwh1pCScosCsT8Y2FHBiCYKi9zwZuvDPY83d19fH8M8MWbmgTWkYquX41YaFY1TU2M7UakdE3qU",
  "key17": "4brzrNsXWYFmrpKToCSMFtZsVjmKVD9qdeiqywyvt9YSt8QEEwEk8pT7N8fGtrphL4nedpFogZpWLtoYf3HxNdCE",
  "key18": "3HA76KcPgB7ysykq8BNCwsZ9TRaQ29Tm4Lki1WvQ9ZjDsTiy6D7ZGVdjEioFvTC73eE2G5ZLNpw4bsyj8ju5PNMB",
  "key19": "2BBpDeRQS7H2Yre5aLNvgM16vvw4q17R4n95wn1P5TN8HRuuy2rbLTuTsCPpWUy6kBhWxQ6nnxtFonquAZAoZWAy",
  "key20": "5mwUokYqwWAUUk6WpoNbuHCnG7UmJAjdxdS1RQrV3p2DEb8Tv9K9EhMekMzB8UyRVP4dgCDiyMhQHxg2GnFYQyKC",
  "key21": "473MjoKT4Kip9QKP9MDVuJiMx9ZAdCzZFJpEitMLqJyCryL82LKvFnknTF66bvv3SpYFKKmf1UdTQMrsRiNu7sPd",
  "key22": "2qsecJCM6TydHJZUynXsNiEnvLBFxvNf1P6wrrupSVL3Cev5GHCyYWkJm3LMws4aG23iBxpNwD5F4iDSZWXTvUJc",
  "key23": "3wJtLVxUgaGcYpiwrECigqXc1BKC5vzJDyLebWBBbVCtX4XFcrT2yodTy7sBaxZmQkzyBRCocMpoLtnJFFgwhpSr",
  "key24": "596FmXiSjh7Jncc3yQaqMnN39ypySNjYucF8UEjTb28EXBN8g3UspPyC1PXgcfP7V1qzYxbpsZWwkQgk5J9RkaxF",
  "key25": "5gfXAhrwYueXxHNhWCWnfWjyypyHoFRUuRXTtCZqWpMkaft9r4Yy1DQ7sjRZsdbvt8imLed2NaBTK1fmHvnyNkX8",
  "key26": "AxoGDegeDUm6WYAuYsWUxXb5gdzfsSu5VAbuRVgzg6o1AwLjYQ77deWayjxXDS5m67zHs89xgKok4fX225Ja4x3",
  "key27": "2C1Q323EdDyDTjEcS1Cr6xVjUJXNGk42zZ9vFJ9gJ5bZZ6xFcoyYVcSCc34gqwEUpkMxfaau7yZz6NPmbf7GzBDs",
  "key28": "3dJSbcKwmCq8YUGPU8f5ssY53KSGCTv9i4i9nxX5VfqJQLYdUgaC7vMuxV5TugKzs4a456N9oeLHBXyVCFGEuzaj",
  "key29": "2U9rwENs19Vch4Mce4zvkmYGuyacrUnZ33q9VG5xJg2qxNfhtwtsFLq29fb1WXz8mGXKemS8au3W2neKMaQWNq8C"
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
