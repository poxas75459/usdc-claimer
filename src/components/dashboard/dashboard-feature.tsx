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
    "2G17upNdvL6PgUfQohxhdZh2ywCXG4U3eG5d9MUWLHyjAyxPo1oZdLsojYFhg3bpJxRCQZyugfczbstg2ED67wZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYTEtkkSt7DQwu3Bvj68Ryc5ZmLM6DUD2pVw7xJqjnbkwjwPodpAj7GS7AURi937QuycY7bHc1KdR4LCSt74pLF",
  "key1": "2mm426Bfn3Q3gnQ75KN3BA5x4Twqccb2pWMYVsKquCiY6pHqYS43Su2biAiqtxwxp9XFNyHasGNZVxWrnHqb9VNu",
  "key2": "3PmuDVTzh9RLUeG9zjW4uSNoeW3BARA4JVJRAsNJyidShKBjodMCw6QszcmnJoaqmQyTLh7Vp9gKfW5arVHkjDFt",
  "key3": "DxyDQMJKrrX7gVBpgVyZNnUu42BpbSgskNYXonLiUHaXDvVPvNQcgrWD3dASNky3Rq8CUMNw78RuLkDcRqVcfZR",
  "key4": "5qgrtFvWg4Ui7q4D32Y2cLfvD7Z9eSpd75GxGWDhjXwAqmm8VRQAQY8a2VaAzvMb37X6P4R3nmWGXCtYB4QbXNWn",
  "key5": "f796Hn4EZVyY2jszQBKycbrZ5uYPn76HM7EcMhZGgQGw4sJuEXAVeaR8fogZAWEisG9ck8iKPsbPz2KMmC14TLW",
  "key6": "5brW7X2unTNRtjo36HfJxa7ebcho21b78NGRRa4Mjnf5ckEPqfTmT6o2CGmZQUHosLGnsq3NpLNKPsCBhNEvuryy",
  "key7": "4p5dktAsjayy76VZEB41Z4GTfeox2Gu1V2yyD2h42XWWK9hzQg6YH8cTQUBc3UJMaqKC2XuSVqqAcqh2MbUVAk4F",
  "key8": "22c5P5mYjBHu1AnF8m6pqDyh1rCryoCdQ8AJZw8SLTTa7o4HLQGyyPPBfbQwkGaW5vVPDPEMwixKT4adD4u8oYCa",
  "key9": "a42SzngaZxirJE8yZ34jrHFp9dMa9gwuwnnJap2NTfE7xoJBSwASNhPhLtLe3ijNk31fTX2PuyTbfiSssDDGgaz",
  "key10": "2VwZCuxmEiJEG8CS5FoFaPdKqYGx59NSRQ639dN9tssiseFobafiE7yabmA4f3SruWYB6kS28D6tokH4w6hL9HBk",
  "key11": "2aViPMvoiKDmbZzN2jbUVNHsE6GFEfm3ETMQQ8bhzqAmxfLaRUmS3DDsirAG23uGs5JVh7sgpUBt2FbUB6fLSiVf",
  "key12": "2i1dThPNg5f42PsVzh3WhjVDY41h9CLSb6edVmYQq2JiqGFr3wc6MgAoM6Z5skCRQFqGEsY3duGx6gPtHbrUKSV6",
  "key13": "2ZUC7BewwQXGek25JHEeA7e4yH6GHWJoktCkfti5oWroEsSLTY6fxJpBTRr7zFYEjLnhrpvRCgmxv1YoWKtVoMfv",
  "key14": "2sxzDQEgfuvF3VwTEuSLeHKQURAhHrBLDQvjbDVojiuhDmWQgBag4F4cUCjN7PxwwbeNtE6kD61MzTN8pBZn8cPM",
  "key15": "4izfKwQpdgBKoUJNTUjNiLkDH8tQ9mXm6qkGTNG28ergTHRcYFz181pgt27kH9r7cmhscxzGJTntM7f1STrnnGCx",
  "key16": "4YdmE6igGrsmsEqoG88FyBfbSuvHFyaePhPBnpBk5GRf96KD8xgRV6EEZ9ZJY6B1TJdKNYN3pgesiTxSk73WD5sn",
  "key17": "5WNMnhgE7Sn215gyaRrnHCGCu7Mjci7tUHv3qD5RzUCkUz16VbfeBgg8gZChHDSFJHtnoc3hQ6vvRRwawwfZejDY",
  "key18": "4Mt2JW4DVKQB9hMGov73pkf7BC6CmTFZfesGwDLMQRyMEMPjZX5iwqxtngBhjNeHaZUUPfCLEUeXTdhBcVSU8yWC",
  "key19": "2UieMVg2BjLRdFZeP4giGVtse8CtELETrgLxkdWKNwSzBrcNtjthfBVrrntZFh2cicgkSZ85j7acm4xpTu7c72j4",
  "key20": "2e9TdaTTr3NEqkFdh7fLfEfXVzLoG9eLfLcamMZbFb6QtPpnNcuJFEwmvvrqbK1YWKkr5Rx8fCeSMYANHfGzMseT",
  "key21": "xrqNGxFMy51yPdFrS7om7dhV8BczW7zgzvoBhvBN27B27qHtVW3ePq3kpEBewzTkkbrAkuCUJ8aiX3qtu3zfK5Q",
  "key22": "Ao1cTWACqnRDdZeWCzTe8XmF4X4UuvnByy2mBcRaJTwyKkPFqmStJxTjyPbNYahGu3DrgtbXibrQobmtxm47CGu",
  "key23": "2oyD4PrXp2jSFX4Bu4XGxZrA6T2ZRiHExSBcSfrJoULKfcQnWyv5ZsteQvEpEPu5hCmPf7MMtz5112B4hXLC3NXf",
  "key24": "4xSYxBznTHRZWAx5ALDS6RSw45Hf7Pkn4aqJ8yDqC1wCZGSDdYTC9sTF2sHjqztqa9mv7Be7jpjccKa6CoGzS9fS",
  "key25": "3shmJZ3kCFnrUedrephTFR9EAvKy4KT9P4Fnb1xLZrKBB2oqP5mPj21Ne8uvntvyKNyN1ZkGdFHZKw8q9sfmRjWY",
  "key26": "9Mi37ynwWwutVSiG4hd15F1N9gKTmya6h28YVJ99fLXnDiuF8SMHNkpwVbRLeqTReYiWS832UwNZTfyssdC6kUa",
  "key27": "PphHUQJ6hDFNdT9hK3YxFVGaCpm4BM6qSFnixMMVHvXazhkthK9ABWj2mZZDMQKMNLJBJaMoSnNMQZjn66u6ZLQ",
  "key28": "62MMhR845ws5AH4szQT6rD6winDdU4epDdAL2tNffXiJQBoEhHizNCFxWyRgRH5ymxgDdgAV8XdeM1CthMaBRb3b",
  "key29": "kDcu6aNN2vkHGmTx7vdjAfh8asxKRPphb6NUMmB4Z5R4yiQQXbnKyT92MGqh7HQxZBpbjuRGqGigAVsjAYrxQ7r",
  "key30": "5bY2HPEGoUPf2Q91Xbv68oV4kTfTCJdPgRk984mngCQxy1CKrRoy7zVcYezQDfPfJWx7d7LtUtsx1vy35EhdnyZY"
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
