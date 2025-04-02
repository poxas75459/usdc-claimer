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
    "2K7pENkrn5rpQG8Un3qjVMonR9kA1AXGJ2GtPvGzS8Y7fxQmr4EVuGyPKuqWD85c3WTkenaRYYpNg6ZUPgf5vzYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TkgUnr46U1XMP95Xfh5JHoCCbQn5KALwMz37mAYceXcXYk8TtzDUehWM7HMiL9F243KNS5M2gnHGLt42UguhjTh",
  "key1": "5Cda84hHTXsnKoz6BkhQiKpBv4Gn1hQUhf1Fa9J3pNRgbd8eF3bkYgdToj6PrvEmKi5kA7pebSnETkcfJhnBRV7b",
  "key2": "2Pgsmt7pFM7Btp6UPmnQsZ5wCX9MnkyMPjiBk1CiL5iXRVX9JLCrKcpCifAAM6P8bSzHx3vb7PfCqLKrBHJZt3Bq",
  "key3": "2bHtZXPcDjMwgzguJF1nc835bowKoAwWikWYjkfSw2D1fG6B3GkgXs3gDbgPS11Fo3r3ABkSaY2nZwiSFhVUXra7",
  "key4": "3RHfeDkovh5hMfnj38KXFUX9ryiyE8vPy5Z9ot74MBrrvvsbLF6Hd5mTGeaFpufnw2tfc6bSkjdPN7aNWNLq5k89",
  "key5": "3Dkm62LJfRicbbYQLoARweoAoD6BnZi8Lp33BBb1VneqG24npq6JDs8QzmCTEGY4e9EzUjsauyDrV7sKXb9dGFQR",
  "key6": "4PeVqydP5YfMNPo39jWtDcJCoetdjjqJBzDsMWVnTgbxJFgz4kN2euUxsVUcnbBfn8E7BQmv5QYjm4x6rHoFcD54",
  "key7": "FFMkuFsT6yRbM5YfZvCJuABp1yyWm8XPZjtV9uxGKKtb2yJj7snjmmWCBq4QCX6s6jayTpP8jDTUadXozgZtCgv",
  "key8": "386QJcBcyP6BxiiNfb5rK33Ge3JrGWuVb9Z1dCvRv8hLcZnhcZGXmgk4wJKpBZTsd3n2X7NQkiKvkRbKrfg8FVf8",
  "key9": "5Zz8AjbukgQH5HTciHw4ykVgu5WYiCymBnUP8iqDC6mo3BU5RdYPRtvLrUXJeYgycxM9yUeZFr8aywYLSrcMjvCh",
  "key10": "3WGTGB4xSvijuVVynwhjNzWM4GFrqxbakJGszsnqwjCkh7WA6DSxXAZvs9QDifNZMGd1hgZ66HyKjZRNFnx1dy9M",
  "key11": "2nZX4q2ekVLSuyJyXv3dXeerVYNPNYYup3mkZXXFTuBhURjkFUHB1XpaeGNisA2s7U1Hs6EKwaHNjybD34sgPr7g",
  "key12": "Gguy4NgWWHfZ3aN34BgVG9SkmfvCup5n4KByx8cYQYQkTybZ288vybjyim4cV2sSuNrt3vuhgX6DWLTfx91xuFn",
  "key13": "oW2XBtdaXuFAMYYgLBX1qnBkLFwCxTYZFkAtgFuL1hBtF55howpDdfMySyVq11UZQ3ZTdYoFogB9yK9464vNuQK",
  "key14": "AMMT9WwYQg1Qe2scwA7gBPPZi7ux6MyDWqBFPZyUXCyoMyGiWT1Wei5w3xwjs5BTJtiFhjxbddp3totLnPBR6Z3",
  "key15": "5uS1bBT3zmPN8X3WZhgT4w3RnH4LoKvBJsohSFy6xj3Qp8vs2TxjkhtQ7Gkko96XmW4Hb8QPqhGpMeJuit2CuBMJ",
  "key16": "2YPDQ4m8fq8nkEWB5jJFvAg7XA7FG3yacAf243zxa7cqx1SxvT6nWTKdSBp3bQm2gc5Dz8sds1iAsBSDsg2xbsq",
  "key17": "x1LEZFmHdnxSYx1Z9U1VmNWh6gycu5MUoS8d69ZAuKN8H28GCVhLibznsEgTJKkX16XayvaEThGeXzz3w2768ZW",
  "key18": "4xL76W8XokwgPwhcmWx4UKQ4qAtREF41bpT8AuZtTBcJ46Eat6qrGvFAz3BNjYHej77PBPqs3ns61BP7zsneszfE",
  "key19": "2rredrr9iXFZVXUvu4dmkSE5xdopHxGnUZ1CoBkw8A653RUh19XUkqYUtwHxFBpxAsaoRv4nCPLGeTnjCLm2x8oN",
  "key20": "n2dFTaFrxwMZpNbuNZ4hvyz6DhQFbSAqcv2h7SWM3KUDawNapVHwBpviPFjwFzAasAmRtNc4Y5BYKKMZy8xYWvd",
  "key21": "BadsoEniDkbjoZ4zarL8BENwk6eVAebJ44hX5rpFw9umvXoBZRguV92PvZAQYDCNNmRApAqE77RYq6YxhDGXhAS",
  "key22": "2pABDemdXDbZSqS7ipTz8dYFt5uHAgDGGhjAqZrd4Le9YYcDwUQ6QDMtLP5ztnPX3AZvLvs5GGUcBdxYqHz1ENgy",
  "key23": "51oZCcFzE6PY2kX7FTrkhzmd9MwALYnPdX4QvdWYbrVXSMDBam5G9J1MHa7CFkbkvqmapK1Mzc77ZZVgEqWtrZXY",
  "key24": "4BMWdtHVunfmvoGojz78i41JHK2mFRpfWnmX9CoDUS7zEF9vbbhi8Ex2mgwomXtykFAvLjviG4mNWauEFr48ZJfd",
  "key25": "4MSpfSsa7T1bcyPuE2EvkPxYtkL6Xi74EkCbHTTGeG7qjicEtJtWfpDe5gFvsfsr8JB9QgsFfSZj57SJLBkfWUe7",
  "key26": "53xW4kca1jm6fBzCCBqK8V4KnP2ECXPyaVUmmnB74jaXJrZn4E5ZgNyRSsk1Gei5QVF6eRMqeNsjbrn9uV98PuFW",
  "key27": "2uAhABdTNfyEqGtgBZH1A9rNtV9cGvY8QtdKeC1szjQZNLDrNkMV5oQwbZTFeB3fNiqRVSADjWcEC4e1aeXyMNte"
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
